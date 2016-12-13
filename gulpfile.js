const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown');

/**
 * default task, create dist/index.html file
 */
gulp.task('build', ['markdown-build'], () => {
    return gulp.src(['./src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Build markdown files in dist folder
 */
gulp.task('markdown-build', () => {
    return gulp.src(['./src/html/column/column1.md', './src/html/column/column2.md', './src/html/column/column3.md'])
               .pipe(markdown())
               .pipe(gulp.dest('./dist'));
});

/**
 * Watch all files in src/html folder then run build task
 */
gulp.task('watch', ['build'], () => {
   return gulp.watch('./src/html/**', ['build']);
});