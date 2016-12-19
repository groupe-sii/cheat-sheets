const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      markdown = require('gulp-markdown'),
      sass = require('gulp-sass');

/**
 * default task, export html pages
 */
gulp.task('build', ['js', 'markdown-build', 'build-sass' ,'assets'], () => {
    return gulp.src(['./src/**/*.html'])
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