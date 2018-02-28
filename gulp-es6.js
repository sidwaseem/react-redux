import gulp from 'gulp';
import zip from 'gulp-zip';

const info = require('./package.json');

gulp.task('zip', () => {
    return gulp.src('build/**')
    .pipe(zip(`${info.name}.zip`))
    .pipe(gulp.dest('./'));
});
