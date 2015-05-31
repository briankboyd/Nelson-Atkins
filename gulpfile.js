var gulp = require('gulp');
var browserSync = require('browser-sync');

// a list of javascript libraries installed by npm and thus are in node_modules
var jsLibs = ['node_modules/backbone/backbone-min.js', 'node_modules/backbone/backbone-min.map'
             ,'node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'
             ,'node_modules/underscore/underscore-min.js', 'node_modules/underscore/underscore-min.map'];

//a list of test resources
var testLibs = ['node_modules/qunitjs/qunit/qunit.js', 'node_modules/qunitjs/qunit/qunit.css'];

//defining an object to hold various properties of source files
var srcPaths = {
  jsLibs: jsLibs,
  testLibs : testLibs
};

//gulp task to copy the javascript libraries from the node modules and into the public folder so the client can load them
gulp.task('copyJsLibs', function() {
  gulp.src(srcPaths.jsLibs)
    .pipe(gulp.dest('app/public/js/lib/'));
});

gulp.task('copyTestLibs', function() {
  gulp.src(srcPaths.testLibs)
    .pipe(gulp.dest('app/tests/'));
});
//
gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'localhost:6969'
  });
});