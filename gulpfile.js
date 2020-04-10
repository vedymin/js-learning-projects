const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss');

// compile scss into css and add prefixes
function style() {
  // 1. source
  return gulp.src('./scss/main.scss')
    // 2. compile
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    // 3. dest
    .pipe(gulp.dest('./app/css'))
}

function watch() {
  gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
