import gulp from 'gulp';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
// import livereload from 'gulp-livereload';

import fs from 'fs';
import typography from './assets/js/typography.js';

// Generate typographic CSS
gulp.task('typography', () => {
	return fs.writeFileSync('assets/css/typography.css', typography.toString())
		// .pipe(livereload());
})

// Generate bootstrap CSS
gulp.task('bootstrap', () => {
	return gulp.src('assets/css/bootstrap.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
		// .pipe(livereload());
})

gulp.task('watch', function ()
{
	// livereload.listen();

	gulp.watch(['assets/js/typography.js'], ['typography']);
	gulp.watch(['assets/css/bootstrap.scss'], ['bootstrap']);
});

gulp.task('default', ['watch']);
