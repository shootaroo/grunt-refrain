'use strict';
var path = require('path');

module.exports = function (grunt) {
  grunt.registerMultiTask('refrain', 'Grunt with refrain.', function () {
    var refrain = require('refrain')(this.options());
    this.files.forEach(function (filePair) {
      filePair.src.forEach(function (src) {
        refrain.render(path.relative(refrain.options.srcDir, src), null, function (err, output) {
          grunt.file.write(filePair.dest, output);
        });
      });
    });
  });
};
