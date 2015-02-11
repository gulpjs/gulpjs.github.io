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

gulp.task('deploy', function(){
  return gulp.src('dist/**/*')
    .pipe(deploy({
      branch: 'master'
    }));
});

gulp.task('default', function(){
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

gulp.watch('src/**/*', ['default']);
lr.listen();
