import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config
import path from './gulp/config/path.js';
import app from './gulp/config/app.js';

global.$ = {
    path: path,
    app: app,
};

// Tasks
import clear from './gulp/tasks/clear.js';
import server from './gulp/tasks/server.js';
import pug from './gulp/tasks/pug.js';
import scss from './gulp/tasks/scss.js';
import js from './gulp/tasks/script.js';
import fonts from './gulp/tasks/fonts.js';

// Watcher
const watcher = () => {
    gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
    gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.fonts.watch, fonts);
};

const build = gulp.series(
    clear,
    gulp.parallel(pug, scss, js, fonts),
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server),
);

export {
    scss,
    js,
};

// Default
export default app.isProd ? build : dev;


