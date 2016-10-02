const gulp = require('gulp')
const lr = require('gulp-refresh')
const gif = require('gulp-if')
const cached = require('gulp-cached')
const uglify = require('gulp-uglify')
const stylus = require('gulp-stylus')
const nib = require('nib')
const autoprefixer = require('autoprefixer-stylus')
const deploy = require('gulp-gh-pages')

gulp.task('deploy', () => {
  return gulp.src('dist/**/*')
    .pipe(deploy({
      branch: 'master'
    }))
})

gulp.task('default', () => {
  return gulp.src('src/**/*')
    .pipe(cached('build'))
    .pipe(gif('*.styl', stylus({
      use: [
        nib(),
        autoprefixer()
      ]
    })))
    .pipe(gif('*.js', uglify()))
    .pipe(gulp.dest('dist'))
    .pipe(lr())
})

gulp.watch('src/**/*', ['default'])
lr.listen()
