var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task("dist", ['browserify', 'minify']);

gulp.task('browserify', ['clean:dist'], function() {

  var b = browserify({
    entries: './index.js',
    debug: true
  })
  .transform("babelify", {presets: ["es2015"]});

  return b.bundle()
    .pipe(source('state-machine.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));

});

gulp.task('minify', ['browserify'], function() {
  return gulp.src('dist/state-machine.js')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(rename('state-machine.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean:dist', function () {
  return del([
    'dist/'
  ]);
});