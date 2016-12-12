import gulp from 'gulp';
import typescript from 'typescript';
import gts from 'gulp-typescript';
import merge from 'merge2';


// gulp build
const tsProject = gts.createProject('tsconfig.json', { typescript });
gulp.task('build', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return merge([
        tsResult.dts.pipe(gulp.dest('lib')),
        tsResult.js.pipe(gulp.dest('lib')),
    ]);
});

// gulp watch
gulp.task('watch', ['build'], () => gulp.watch('src/**/*.ts', ['js']));

// default task
gulp.task('default', ['build']);
