const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            prot: 9790,
            open: true,
            livereload: true
        }));
});