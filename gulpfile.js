import gulp from 'gulp';
import markdown from 'gulp-markdown';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import fileinclude from 'gulp-file-include';
import argv from 'yargs';
import template from 'gulp-template';
import inject from 'gulp-inject-string';
import rename from 'gulp-rename';
import clean from 'gulp-clean';
import connect from 'gulp-connect';
import gulpLivereload from 'gulp-livereload';
import replace from 'gulp-replace';
import tap from 'gulp-tap';

const { series, task } = gulp;

let toCopy = ['node_modules/highlight.js/build/highlight.pack.js'];

/**
 * Variable used in scipts
 */

const CATEGORY = {
  TOOLS: 'tools',
  FRAMEWORKS: 'frameworks',
  LANGUAGES: 'languages',
  SCRUM: 'scrum',
  PRACTICES: 'best-practices'
};

let name = '';
let category = '';

const getColor = category => {
  switch (category) {
    case CATEGORY.FRAMEWORKS:
      return 'green';
    case CATEGORY.LANGUAGES:
      return 'orange';
    case CATEGORY.TOOLS:
    default:
      return 'blue';
  }
};

/**
 * PRIVATE TASKS
 */

/**
 * Export assets
 */
function assets() {
  return gulp.src('./assets/**/*').pipe(gulp.dest('./dist/assets'));
}
task('assets', assets);

/**
 * Converts sass to css
 */
function buildSass() {
  return gulp
    .src(['./src/**/*.scss', '!./src/templates/**/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
}
task('build-sass', series('assets', buildSass));

/**
 * Build markdown files in dist folder
 */
function markdownBuild() {
  return gulp
    .src(['./src/**/*.md'])
    .pipe(markdown())
    .pipe(gulp.dest('./dist'));
}
task('markdown-build', markdownBuild);

function copy() {
  return gulp.src(toCopy).pipe(gulp.dest('dist/common/lib'));
}
task('copy', copy);

/**
 * Export js files
 */
function exportJS() {
  return gulp.src('./src/**/*.js').pipe(gulp.dest('./dist/'));
}
task('js', exportJS);

function moveTemplates() {
  name = argv.name;
  category = argv.category;

  if (!name || !category) {
    throw new Error(
      'usage is "gulp create-new-cheat-sheet --name <name> --category <tools|frameworks|languages|scrum|best-practices>'
    );
  }

  if (
    category !== CATEGORY.TOOLS &&
    category !== CATEGORY.FRAMEWORKS &&
    category !== CATEGORY.LANGUAGES &&
    category !== CATEGORY.SCRUM &&
    category !== CATEGORY.PRACTICES
  ) {
    throw new Error(
      '"category must be any of these values  : tools | frameworks | languages | scrum | best-practices'
    );
  }

  return gulp
    .src('./src/templates/**/*')
    .pipe(
      template({
        name: name,
        category: category
      })
    )
    .pipe(gulp.dest('./src/' + name));
}
task('move-templates', moveTemplates);

function injectSources() {
  return gulp
    .src('./src/common/menu.html')
    .pipe(
      inject.before(
        '<!-- inject a new cheat sheet -->',
        '<li><a href="../../' + name + '/index.html">' + name + '</a></li>\n'
      )
    )
    .pipe(gulp.dest('./src/common/'));
}
task('inject-sources', series('move-templates', injectSources));

/**
 * add an item link on the main page index.html
 */
task(
  'add-item-on-index',
  series('move-templates', () => {
    let ITEM_INDEX_TEMPLATE = `<div class="item">
                                <a href="./${name}/index.html">
                                    <div class="img-item">
                                        <img src="./assets/images/${name}.svg"/>
                                    </div>
                                    <div class="title">${name}</div>
                                </a>
                            </div>`;
    return gulp
      .src('./src/index.html')
      .pipe(
        inject.before(
          `<!-- inject a new cheat sheet ${category} -->`,
          ITEM_INDEX_TEMPLATE
        )
      )
      .pipe(gulp.dest('./src/'));
  })
);

function renameCss() {
  return gulp
    .src('./src/' + name + '/style.scss')
    .pipe(replace('{{COLOR}}', getColor(category)))
    .pipe(rename(name + '.scss'))
    .pipe(gulp.dest('./src/' + name));
}

task('rename-css', series('move-templates', 'add-item-on-index', renameCss));

task(
  'clean-styles.scss',
  series('move-templates', 'rename-css', () => {
    console.log('Put the svg logo in assets/images folder');
    console.log(
      'Put your commands or codes on src/' +
        name +
        '/first-side/column1.md, ' +
        'src/' +
        name +
        '/first-side/column2.md,' +
        'src/' +
        name +
        '/reverse/column1.md,' +
        'src/' +
        name +
        '/reverse/column2.md'
    );

    return gulp.src('./src/' + name + '/style.scss').pipe(clean());
  })
);

/**
 * PUBLIC TASKS
 */
task(
  'create-new-cheat-sheet',
  series('move-templates', 'rename-css', 'clean-styles.scss')
);

/**
 * default task, export html pages
 */
task(
  'build',
  series('copy', 'js', 'markdown-build', 'build-sass', 'assets', () => {
    return gulp
      .src(
        [
          './src/common/**/*.html',
          './src/spring/**/*.html',
          './src/**/*.html',
          '!./src/templates/**'
        ],
        {
          base: './src/'
        }
      )
      .pipe(
        tap(function(file) {
          let projectFolder = file.relative.replace(/\\/g, '/');
          projectFolder = projectFolder.substr(0, projectFolder.indexOf('/'));
          return gulp
            .src(file.path, {
              base: file.base
            })
            .pipe(
              fileinclude({
                prefix: '@@',
                basepath: '@file',
                context: {
                  folder: projectFolder.toLowerCase()
                }
              })
            )
            .pipe(gulp.dest('./dist/'));
        })
      );
  })
);

/**
 * Run server
 */
task(
  'connect',
  series('build', () => {
    return connect.server({
      root: 'dist',
      port: process.env.PORT || 8484
    });
  })
);

/**
 * Watch all files in src/ folder then run build task and reload server
 */
task(
  'watch',
  series('build', 'connect', function() {
    gulpLivereload.listen();

    return gulp.watch(['./src/**'], ['build'], file => {
      gulp.src(file.path).pipe(gulpLivereload());
    });
  })
);
