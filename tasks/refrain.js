'use strict';
var path = require('path');
var async = require('async');

module.exports = function (grunt) {
  grunt.registerMultiTask('refrain', 'Grunt with refrain.', function () {
    var done = this.async();

    var refrain = require('refrain')(this.options());
    refrain.cacheMode = refrain.cacheMode = true;

    async.eachSeries(this.files, function (filePair, next) {
      async.eachSeries(filePair.src, function (src, next) {
        refrain.render(path.relative(refrain.options.srcDir, src), null, function (err, output) {
          grunt.file.write(filePair.dest, output);
          setImmediate(next);
        });
      }, next);
    }, done);
  });
};
