var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var shell = require('gulp-shell');

var onError = function (err) {
    gutil.log(gutil.colors.red("ERROR", 'sass'), err);
    this.emit("end", new gutil.PluginError('sass', err, { showStack: true }));
  };

// gulp.task('sass', function() {
//   return gulp.src('scss/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('css'))
//     .pipe(sass().on(error, onError))
//
// })

gulp.task("sass", function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(browserSync.reload({stream:true})) // reload the stream
        .pipe(gulp.dest('css'))

});

gulp.task('clearcache', function() {
  return shell.task([
   'drush cc all'
  ]);
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
})
