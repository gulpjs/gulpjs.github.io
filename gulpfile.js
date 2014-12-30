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

gulp.task('watch', function(){
  gulp.watch('src/**/*', ['build']);
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

lr.listen();

gulp.task('default', ['build', 'watch']);