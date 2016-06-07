'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:css', function () {
    gulp.src('./app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./app/*.scss', ['compile:css']);
});