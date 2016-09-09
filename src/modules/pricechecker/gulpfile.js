/**
 * Created by nbugash on 2016-09-08.
 */

var gulp = require('gulp');
var inject = require('gulp-inject');

var injectOptions = {
    ignorePath: './',
    relative: true
};

gulp.task('watch assets', function() {
    gulp.watch(['assets/css/*.css', 'assets/js/*.js', 'assets/images/*', 'index.html'],
        ['inject css index.html']);
    gulp.watch(['assets/js/*.js', 'systemjs.*.js', 'index.html'], ['inject js index.html']);
});
gulp.task('inject css index.html', function() {
    var injectSrc = gulp.src(['assets/css/*.css'], { read: false} );

    return gulp.src('index.html')
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
});

gulp.task('inject js index.html', function() {
    var injectSrc = gulp.src(['assets/js/*.js', 'systemjs.*.js'], { read: false});
    return gulp.src('index.html')
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
});