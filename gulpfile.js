/**
 * Created by nbugash on 2016-09-08.
 */
var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(['chrome/css/*.css'], ['install css']);
    gulp.watch(['chrome/js/*.js'], ['install js']);
    gulp.watch(['chrome/background.js', 'chrome/content.js'],['install chrome scripts']);
    gulp.watch(['chrome/manifest.json'],['install manifest file']);
});
gulp.task('install css', function() {
    gulp.src(['chrome/css/*.css'])
        .pipe(gulp.dest('extension/css'));
});

gulp.task('install js', function() {
    gulp.src(['chrome/js/*.js'])
        .pipe(gulp.dest('extension/js'));
});

gulp.task('install chrome scripts', function() {
    gulp.src(['chrome/background.js', 'chrome/content.js'])
        .pipe(gulp.dest('extension'))
});

gulp.task('install manifest file', function() {
    gulp.src(['chrome/manifest.json'])
        .pipe(gulp.dest('extension'))
});
