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
      pathName: 'diff',
      fileName: 'archive.',
      format: 'zip',
      commit: '1'
    });

    var commandResult = function() {
      var pathName = options.pathName,
          fileName = options.fileName,
          format = options.format,
          commitCount = options.commit,
          exte,
          result;

      if (options.format === 'zip') {
        exte = 'zip';
      } else if (options.format === 'tar') {
        exte = 'tar.gz';
      }

      result = "git archive --format=" +
               format +
               " --prefix=" +
               pathName +
               "/ HEAD `git diff --name-only HEAD HEAD~" +
               commitCount +
               "` -o " +
               fileName +
               exte;
      return result;
    }

    var command;

    command = commandResult();
    exec(command);
  });
};
