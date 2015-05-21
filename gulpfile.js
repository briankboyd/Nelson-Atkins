var gulp = require('gulp');
var browserSync = require('browser-sync');

// a list of javascript libraries installed by npm and thus are in node_modules
var jsLibs = ['node_modules/backbone/backbone-min.js', 'node_modules/backbone/backbone-min.map'
             ,'node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'
             ,'node_modules/underscore/underscore-min.js', 'node_modules/underscore/underscore-min.map'];
//defineing an object to hold various properties of source files
var srcPaths = {
  scripts: jsLibs
};

//gulp task to copy the javascript libraries from the node modules and into the public folder so the client can load them
gulp.task('copyScripts', function() {
  gulp.src(srcPaths.scripts)
    .pipe(gulp.dest('app/public/js/lib/'));
});

//
gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'localhost:6969'
  });
});