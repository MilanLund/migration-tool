const gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', () => {
    gulp.watch([
        './ui/assets/css/src/**/*.less',
        './ui/assets/js/src/**/*.js'
    ], [
        'less',
        'js'
    ]);
});

gulp.task('less', () => {
    return gulp.src('./ui/assets/css/src/app.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./ui/assets/css'))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./ui/assets/css'));
});

gulp.task('js', () => {
    return gulp.src([
        './ui/assets/js/src/vendor/codemirror.min.js',
        './ui/assets/js/src/vendor/codemirror-js.min.js',
        './ui/assets/js/src/vendor/beautify.js',
        './ui/assets/js/src/custom/code-editor.js',
        './ui/assets/js/src/custom/import.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./ui/assets/js/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./ui/assets/js/'));
});

gulp.task('default', ['less', 'js', 'watch']);