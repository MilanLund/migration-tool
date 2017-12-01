const gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    eslint = require('gulp-eslint');

gulp.task('watch', () => {
	gulp.watch([
		'./gui/assets/css/src/**/*.less',
		'./gui/assets/js/src/**/*.js'
	], [
		'less',
		'js'
	]);
});

gulp.task('less', () => {
	return gulp.src('./gui/assets/css/src/app.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest('./gui/assets/css'))
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./gui/assets/css'));
});

gulp.task('js', () => {
	return gulp.src([
		'./gui/assets/js/src/vendor/codemirror.min.js',
		'./gui/assets/js/src/vendor/codemirror-js.min.js',
		'./gui/assets/js/src/vendor/beautify.js',
		'./gui/assets/js/src/vendor/socket.io.min.js',
		'./gui/assets/js/src/custom/helper.js', 
		'./gui/assets/js/src/custom/code-editor.js',  
		'./gui/assets/js/src/custom/import.js',   
		'./gui/assets/js/src/custom/blueprint.js'
    ])
        .pipe(eslint())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./gui/assets/js/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./gui/assets/js/'));
});

gulp.task('default', ['less', 'js', 'watch']);