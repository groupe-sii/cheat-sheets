const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown'),
      sass = require('gulp-sass'),
      argv  = require('yargs').argv,
      template = require('gulp-template'),
      inject = require('gulp-inject-string'),
       rename = require('gulp-rename'),
       merge = require('merge-stream'),
       clean = require('gulp-clean'),
       connect = require('gulp-connect'),
       gulpLivereload = require('gulp-livereload');

/**
 * default task, export html pages
 */
gulp.task('build', ['js', 'markdown-build', 'build-sass' ,'assets'], () => {
    return gulp.src(['./src/**/*.html', '!./src/templates/**'])
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Converts sass to css
 */
gulp.task('build-sass', ['assets'], () => {
    return gulp.src(['./src/**/*.scss'])
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
gulp.task('connect', function() {
    connect.server({
        root: 'dist'
    });
});

/**
 * Watch all files in src/ folder then run build task and reload server
 */
gulp.task('watch', ['connect'], function () {
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

let name = '';
gulp.task('create-new-cheat-sheet', ['move-templates','inject-sources', 'rename-css', 'clean-styles.scss']);

gulp.task('move-templates', () => {
    name = argv.name;

    if (!name) {
        throw 'name is not defined';
    }

    return gulp.src('./src/templates/**/*')
        .pipe(template({name: name}))
        .pipe(gulp.dest('./src/' + name));
});

gulp.task('inject-sources', ['move-templates'], () => {
    return gulp.src('./src/common/menu.html')
        .pipe(inject.before('<!-- inject a new cheat sheet -->', '<li><a href="../../' + name + '/first-side/first-side.html">' + name + ' - recto</a></li>\n<li><a href="../../' + name + '/reverse/reverse.html">' + name + ' - verso</a></li>\n'))
        .pipe(gulp.dest('./src/common/'));
});

gulp.task('rename-css', ['move-templates','inject-sources'], () => {
    return gulp.src('./src/' + name + '/style.scss')
        .pipe(rename(name + '.scss'))
        .pipe(gulp.dest('./src/' + name));
});

gulp.task('clean-styles.scss', ['move-templates','inject-sources', 'rename-css'],  () => {
    console.log('Put the svg logo in assets/images folder');
    console.log('Put your commands or codes on src/' + name + '/first-side/column1.md, ' +
        'src/' + name + '/first-side/column2.md,' +
        'src/' + name + '/reverse/column1.md,' +
        'src/' + name + '/reverse/column2.md');

    return gulp.src('./src/' + name + '/style.scss')
        .pipe(clean())
});