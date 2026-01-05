var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('css', function () {
    return gulp.src([
        './src/button/button.css',
        './src/badge/badge.css',
        './src/alert/alert.css',
        './src/tooltip/tooltip.css',
        './src/progress/progress.css',
        './src/spinner/spinner.css',
        './src/toast/toast.css',
        './src/popover/popover.css',
        './src/dropdown/dropdown-menu.css',
        './src/modal/modal.css',
        './src/gotop/gotop.css',
        './src/collapse/collapse.css',
        './src/scrollbar/scrollbar.css',
        './src/search/search.css',
        './src/layout/layout.css',
        './src/layout/layout-theme.css',
        './src/layout/layout-nav-link.css',
        './src/layout/layout-left-menu.css',
        './src/form/form.css',
        './src/form/form-theme.css'
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

gulp.task('file-css', function () {
    return gulp.src([
        './src/file/file.css',
        './src/file/file-theme.css',
        './src/file/file-item.css',
        './src/file/file-image-item.css',
        './src/file/file-video-player.css',
        './src/file/file-text-theme.css',
        './src/file/file-search.css',
        './src/file/file-bookmark.css'
    ])
    .pipe(concat('mini-form-ui-file.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('file-min-css', gulp.series('file-css', function () {
    return gulp.src('./dist/mini-form-ui-file.css')
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
        './src/scroll/resize.js',
        './src/scrollbar/scrollbar.js',
        './src/tooltip/tooltip.js',
        './src/progress/progress.js',
        './src/spinner/spinner.js',
        './src/toast/toast.js',
        './src/popover/popover.js',
        './src/dropdown/dropdown-menu.js',
        './src/modal/modal.js',
        './src/modal/alert-modal.js',
        './src/modal/confirm-modal.js',
        './src/modal/prompt-modal.js',
        './src/gotop/gotop.js',
        './src/collapse/collapse.js',
        './src/search/search.js',
        './src/layout/layout.js'
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

gulp.task('file-script', function () {
    return gulp.src([
        './src/file/file.js'
    ])
    .pipe(concat('mini-form-ui-file.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('file-min-script', gulp.series('file-script', function() {
    return gulp.src('./dist/mini-form-ui-file.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('default', 
    gulp.series('min-css', 'min-script', 'file-min-css', 'file-min-script'));