const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown');

gulp.task('build', ['markdown-build'], () => {
    gulp.src(['./src/html/index.html'])
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Build markdown files in dist folder
 */
gulp.task('markdown-build', function () {
    return gulp.src(['./src/html/column/column1.md', './src/html/column/column2.md', './src/html/column/column3.md'])
               .pipe(markdown())
               .pipe(gulp.dest('./dist'));
});