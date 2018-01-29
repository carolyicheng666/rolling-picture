var gulp = require("gulp");
var uglify = require("gulp-uglify");
var cleanCSS = require("gulp-clean-css");
var concat = require('gulp-concat');

gulp.task('min-css', function() {
  gulp.src('./css/*.css')
    .pipe(concat("index.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build'));
});

gulp.task('min-js', function() {
  gulp.src('./js/*.js')
    .pipe(concat("index.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['min-css', 'min-js']);