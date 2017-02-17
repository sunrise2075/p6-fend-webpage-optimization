/**
 * Created by sunrise2075 on 2017/2/17.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    gulpPlumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    stylish = require('jshint-stylish'),
    csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css');

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('scripts',function(){
    gulp.src('js/perfmatters.js')
        .pipe(gulpPlumber())
        .pipe(uglify())
        .pipe(rename('perfmatters.min.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

gulp.task('clean-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());;
});

gulp.task('jshint', function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('watch',function(){
    gulp.watch('js/perfmatters.js',['scripts']);
    gulp.watch('css/*.js',['clean-css']);
});

gulp.task('default', ['connect','watch']);
