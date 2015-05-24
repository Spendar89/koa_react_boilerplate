var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development'  }
    })

})
