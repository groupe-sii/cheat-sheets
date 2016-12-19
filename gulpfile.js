const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown'),
      sass = require('gulp-sass'),
      argv  = require('yargs').argv,
      template = require('gulp-template'),
      inject = require('gulp-inject-string');

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
 * Watch all files in src/ folder then run build task
 */
gulp.task('watch', ['build', 'assets'], () => {
   return gulp.watch(['./src/**'], ['build']);
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

/**
 * Create folders, files and add link in menu
 */
gulp.task('create-new-cheat-sheet', () => {
    let name = argv.name;

    if (!name) {
        throw "name is not defined";
    }

    // trim then snakeCase
    name = name.trim().replace(/ /gi, '-');

    gulp.src('./src/templates/**/*')
        .pipe(template({name: name}))
        .pipe(gulp.dest('./src/' + name));

    gulp.src('./src/common/menu.html')
        .pipe(inject.before('<!-- inject a new cheat sheet -->', '<li><a href="../../' + name + '/first-side/first-side.html">' + name + ' - recto</a></li>\n<li><a href="../../' + name + '/reverse/reverse.html">' + name + ' - verso</a></li>\n'))
        .pipe(gulp.dest('./src/common/'))

    console.log('Put the svg logo in assets/images folder')
    console.log('Put your commands or codes on src/' + name + '/first-side/column1.md, ' +
                                                'src/' + name + '/first-side/column2.md)' +
                                                'src/' + name + '/reverse/column1.md)' +
                                                'src/' + name + '/reverse/column2.md)');
});