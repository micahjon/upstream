import gulp from 'gulp';

// General tools
import watch from 'gulp-watch';
import fs from 'fs';
import concat from 'gulp-concat';
import insert from 'gulp-insert';

// CSS related
import typography from './assets/js/typography.js';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefix from 'autoprefixer';
import purifycss from 'gulp-purifycss';
import cssnano from 'gulp-cssnano';

// Generate typographic CSS
gulp.task('typography', () => {
	return fs.writeFileSync('assets/css/temp/typography.css', typography.toString())
})

// Generate bootstrap CSS
gulp.task('bootstrap', () => {
	return gulp.src('assets/css/bootstrap.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css/temp'))
})

// Combine, autoprefix, minify & purify (remove unused styles) CSS
gulp.task('distCSS', () => {
	return gulp.src(['assets/css/temp/typography.css', 'assets/css/temp/bootstrap.css'])
		.pipe(concat('all-styles.css'))
		.pipe(postcss([
			autoprefix({ browsers: ['> 1% in US', 'not ie <= 8'] }),
		]))
		.pipe(purifycss(['_site/**/*.html']))
		.pipe(cssnano({
			autoprefixer: false,
			zindex: false,
		}))
		// .pipe(insert.wrap('{ % raw %}', '{ % endraw %}'))
		.pipe(gulp.dest('_includes'))
})

gulp.task('watch', function ()
{
	gulp.watch(['assets/js/typography.js'], ['typography', 'distCSS']);
	gulp.watch(['assets/css/bootstrap.scss'], ['bootstrap', 'distCSS']);
});

gulp.task('default', ['watch']);