var gulp = require('gulp');
var lr = require('gulp-livereload');
var gif = require('gulp-if');
var lr = require('gulp-livereload');
var cached = require('gulp-cached');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var nib = require('nib');
var jeet = require('jeet');
var autoprefixer = require('autoprefixer-stylus');
var deploy = require('gulp-gh-pages');
var connect = require('gulp-connect');

gulp.task('deploy', function(){
  return gulp.src('dist/**/*')
    .pipe(deploy({
      branch: 'master'
    }));
});

gulp.task('build', function(){
  return gulp.src('src/**/*')
    .pipe(cached('build'))
    .pipe(gif('*.styl', stylus({
      use:[
        nib(),
        jeet(),
        autoprefixer()
      ]
    })))
    .pipe(gif('*.js', uglify()))
    .pipe(gulp.dest('dist'))
    .pipe(lr());
});

gulp.task('default', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.watch('src/**/*', ['default']);
lr.listen();
