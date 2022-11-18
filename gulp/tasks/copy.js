import gulp from 'gulp';

export default () => {
    return gulp.src('./src/server/*.{js,json}')
    .pipe(gulp.dest($.path.root + '/server'));
};