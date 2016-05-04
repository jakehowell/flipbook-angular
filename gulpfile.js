var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var webserver = require('gulp-webserver');
var less = require('gulp-less');

gulp.task('watch', function(){
    gulp.watch('./styles/*.less', ['styles']);
});


gulp.task('styles', function(){
	gulp.src('./styles/*.less')
    .pipe(less())
    .pipe(cleanCSS())
	.pipe(gulp.dest('./styles'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('serve', ['webserver']);
gulp.task('default', ['webserver', 'styles', 'watch']);	
