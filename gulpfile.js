'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile:css', function () {
    gulp.src('./app/application/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/application'));
});

gulp.task('scss:watch', function () {
    gulp.watch('./app/application/**/*.scss', ['compile:css']);
});