'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:css', function () {
    gulp.src('./app/typper.application/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/typper.application'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./app/typper.application/stylesheets/*.scss', ['compile:css']);
});