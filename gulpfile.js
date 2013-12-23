var gulp = require('gulp');
var gutil = require('gulp-util');
var express = require('express');
var path = require('path');
var tinylr = require('tiny-lr');

var createServers = function(port, lrport) {
  var lr = tinylr();
  lr.listen(lrport, function() {
    gutil.log('LR Listening on', lrport);
  });

  var app = express();

  app.use(express.query())
  .use(express.bodyParser())
  .use(express.static(path.resolve('./')))
  .use(express.directory(path.resolve('./')))
  .listen(port, function() {
    gutil.log('Listening on', port);
  });

  return {
    lr: lr,
    app: app
  };
};

var servers = createServers(8080, 35729);

gulp.task('default', function(){
  gulp.watch(["./**/*", "!./node_modules/**/*"], function(evt){
    gutil.log(gutil.colors.cyan(evt.path), 'changed');
    servers.lr.changed({
      body: {
        files: [evt.path]
      }
    });
  });
});