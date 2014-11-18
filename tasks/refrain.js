'use strict';
var path = require('path');

module.exports = function (grunt) {
  grunt.registerMultiTask('refrain', 'Grunt with refrain.', function () {
    var refrain = require('refrain')(this.options());
    this.files.forEach(function (filePair) {
      filePair.src.forEach(function (src) {
        grunt.file.write(filePair.dest, refrain.render(path.relative(refrain.options.srcDir, src)));
      });
    });
  });
};
