/*
 * grunt-diff-archive
 * https://github.com/sugarshin/grunt-diff-archive
 *
 * Copyright (c) 2014 sugarshin
 * Licensed under the MIT license.
 */

var exec = require('child_process').exec;
module.exports = function(grunt) {

  grunt.registerMultiTask('diff', 'Git diff archiving.', function() {
    var options = this.options({
      pathName: 'root',
      fileName: 'archive',
      format: 'zip',
      originCommit: 'HEAD',
      targetCommit: 1
    });

    // helper
    var _isNumber = function(x) {
      if (typeof x !== 'number' && typeof x !== 'string') {
        return false;
      } else {
        return (x == parseFloat(x) && isFinite(x));
      }
    };

    var commandResult = function() {
      var pathName = options.pathName,
          fileName = options.fileName,
          format = options.format,
          originCommit = options.originCommit,
          targetCommit,
          exte,
          result;

      if (format === 'zip') {
        exte = '.zip';
      } else if (format === 'tar') {
        exte = '.tar.gz';
      }

      if (_isNumber(options.targetCommit)) {
        targetCommit = 'HEAD~' + parseInt(options.targetCommit, 10);
      } else {
        targetCommit = options.targetCommit
      }

      result = 'git archive --format=' +
               format +
               ' --prefix=' +
               pathName +
               '/ ' +
               originCommit +
               ' `git diff --name-only ' +
               originCommit +
               ' ' +
               targetCommit +
               '` -o ' +
               fileName + exte;

      return result;
    }

    var command;

    command = commandResult();

    exec(command);
  });
};
