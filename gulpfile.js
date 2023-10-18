const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// outputStyle: 'compressed'
// outputStyle: 'expanded'

function buildStyles() {
  return src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['src/html/*.html'] }))
    .pipe(dest('src/css'))
}

function watchTask() {
  watch(['src/sass/**/*.scss', 'src/html/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
