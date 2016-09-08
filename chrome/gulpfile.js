/**
 * Created by nbugash on 2016-09-06.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js', 'js/*.js'];
var debug = require('gulp-debug');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');

var bowerOptions = {
    paths: {
        bowerDirectory: './vendor',
        bowerrc: './.bowerrc',
        bowerJson: './bower.json'
    }
};

gulp.task('manage style guide', function(){
    gulp.watch(['*.js', 'js/*.js'], ['styles']);
});

gulp.task('styles', function () {
    return gulp.src(jsFiles)
        .pipe(debug({ title: 'Styles '}))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});

gulp.task('watch chrome', function(){
    gulp.watch(['./css/option.css', './js/option.js','./css/*.option.css',
        './js/*.option.js', 'option.html'],
        ['inject to option page']);
    gulp.watch(['./css/*.browser-action.css', './js/*.browser-action.js',
        './css/browser-action.css', './js/browser-action.js', 'browser-action.html'],
        ['inject to browser action page']);
});

gulp.task('inject to option page', function() {
    var injectSrc = gulp.src(['./css/option.css', './js/option.js','./css/*.option.css', './js/*.option.js'],
        { read: false });
    var injectOptions = { ignorePath: './', relative: true };
    return gulp.src('option.html')
        .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', relative: true}))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
});

gulp.task('inject to browser action page', function() {
    var injectSrc = gulp.src(['./css/*.browser-action.css', './js/*.browser-action.js',
        './css/browser-action.css', './js/browser-action.js'],
        { read: false });
    var injectOptions = { ignorePath: './', relative: true };
    return gulp.src('browser-action.html')
        .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', relative: true}))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./'));
});