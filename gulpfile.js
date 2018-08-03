const gulp = require('gulp'),
  fileinclude = require('gulp-file-include'),
  markdown = require('gulp-markdown'),
  sass = require('gulp-sass'),
  argv  = require('yargs').argv,
  template = require('gulp-template'),
  inject = require('gulp-inject-string'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  connect = require('gulp-connect'),
  gulpLivereload = require('gulp-livereload'),
  tap = require('gulp-tap'),
  replace = require('gulp-replace');

let toCopy = [
  'node_modules/highlight.js/build/highlight.pack.js'
];

/**
 * Variable used in scipts
 */

const CATEGORY = {
  TOOLS:'tools',
  FRAMEWORKS:'frameworks',
  LANGUAGES:'languages'
};

let name = '';
let category = '';

const getColor = (category) =>{
  switch(category){
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
 * default task, export html pages
 */
gulp.task('build', ['copy', 'js', 'markdown-build', 'build-sass' ,'assets'], () => {
  return gulp.src(['./src/common/**/*.html', './src/**/*.html', '!./src/templates/**'], {base: './src/'})
    .pipe(tap(function(file) {
      let projectFolder = file.relative.replace(/\\/g,'/');
      projectFolder = projectFolder.substr(0, projectFolder.indexOf('/'));
      return gulp.src(file.path, {base: file.base})
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file',
          context: {
            folder: projectFolder.toLowerCase()
          }
        }))
        .pipe(gulp.dest('./dist/'));

    }));
});

/**
 * Converts sass to css
 */
gulp.task('build-sass', ['assets'], () => {
  return gulp.src(['./src/**/*.scss','!./src/templates/**/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
});

/**
 * Build markdown files in dist folder
 */
gulp.task('markdown-build', () => {
  return gulp.src(['./src/**/*.md'])
    .pipe(markdown())
    .pipe(gulp.dest('./dist'));
});

/**
 * Run server
 */
gulp.task('connect', ['build'], () => {
  connect.server({
    root: 'dist',
    port: process.env.PORT || 8080
  });
});

gulp.task('copy', () => {
  return gulp
    .src(toCopy)
    .pipe(gulp.dest('dist/common/lib'));
});

/**
 * Watch all files in src/ folder then run build task and reload server
 */
gulp.task('watch', ['build', 'connect'], function () {
  gulpLivereload.listen();

  gulp.watch(['./src/**'], ['build'], (file) => {
    gulp.src(file.path)
      .pipe(gulpLivereload())
  });
});

/**
 * Export assets
 */
gulp.task('assets', () => {
  return gulp.src('./assets/**/*')
    .pipe(gulp.dest('./dist/assets'));
});

/**
 * Export js files
 */
gulp.task('js', () => {
  return gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('create-new-cheat-sheet', ['move-templates', 'rename-css', 'clean-styles.scss']);

gulp.task('move-templates', () => {
  name = argv.name;
  category = argv.category;

  if (!name || !category) {
    throw new Error('usage is "gulp create-new-cheat-sheet --name <name> --category <tools|frameworks|languages>');
  }

  if(category !== CATEGORY.TOOLS && category !== CATEGORY.FRAMEWORKS && category !== CATEGORY.LANGUAGES){
    throw new Error('"category must be any of these values  : tools | frameworks | languages');
  }

  return gulp.src('./src/templates/**/*')
    .pipe(template({name: name, category:category}))
    .pipe(gulp.dest('./src/' + name));
});

gulp.task('inject-sources', ['move-templates'], () => {
  return gulp.src('./src/common/menu.html')
    .pipe(inject.before('<!-- inject a new cheat sheet -->', '<li><a href="../../' + name + '/index.html">' + name + '</a></li>\n'))
    .pipe(gulp.dest('./src/common/'));
});

gulp.task('rename-css', ['move-templates', 'add-item-on-index'], () => {
  return gulp.src('./src/' + name + '/style.scss')
    .pipe(replace('{{COLOR}}', getColor(category)))
    .pipe(rename(name + '.scss'))
    .pipe(gulp.dest('./src/' + name));
});

/**
 * add an item link on the main page index.html
 */
gulp.task('add-item-on-index', ['move-templates'], () => {
  let ITEM_INDEX_TEMPLATE = `<div class="item">
                                <a href="./${name}/index.html">
                                    <div class="img-item">
                                        <img src="./assets/images/${name}.svg"/>
                                    </div>
                                    <div class="title">${name}</div>
                                </a>
                            </div>`;
  return gulp.src('./src/index.html')
    .pipe(inject.before(`<!-- inject a new cheat sheet ${category} -->`, ITEM_INDEX_TEMPLATE))
    .pipe(gulp.dest('./src/'));
});

gulp.task('clean-styles.scss', ['move-templates', 'rename-css'],  () => {
  console.log('Put the svg logo in assets/images folder');
  console.log('Put your commands or codes on src/' + name + '/first-side/column1.md, ' +
    'src/' + name + '/first-side/column2.md,' +
    'src/' + name + '/reverse/column1.md,' +
    'src/' + name + '/reverse/column2.md');

  return gulp.src('./src/' + name + '/style.scss')
    .pipe(clean())
});
