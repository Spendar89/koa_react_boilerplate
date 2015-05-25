var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'app.js',
        ext: 'js jsx html',
        env: { 'NODE_ENV': 'development'  }
    })

})
