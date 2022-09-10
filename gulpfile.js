var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('css', function () {
    return gulp.src([
        './src/tooltip/tooltip.css',
        './src/progress/progress.css',
        './src/spinner/spinner.css',
        './src/layout/layout.css',
        './src/layout/layout-theme.css',
        './src/file/file.css',
        './src/file/file-theme.css',
        './src/file/file-video-player.css',
        './src/file/file-text-theme.css'
    ])
    .pipe(concat('mini-form-ui.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('min-css', gulp.series('css', function () {
    return gulp.src('./dist/mini-form-ui.css')
        .pipe(minifyCSS())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('script', function () {
    return gulp.src([
        './src/theme/theme.js',
        './src/scroll/scroll.js',
        './src/tooltip/tooltip.js',
        './src/progress/progress.js',
        './src/spinner/spinner.js',
        './src/toast/toast.js',
        './src/layout/layout.js',
        './src/file/file.js'
    ])
    .pipe(concat('mini-form-ui.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('min-script', gulp.series('script', function() {
    return gulp.src('./dist/mini-form-ui.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('default', gulp.series('min-css', 'min-script'));