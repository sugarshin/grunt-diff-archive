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
      fileName: 'archive.zip',
      commit: '1'
    });
    console.log('pathName = ' + options.pathName);
    console.log('fileName = ' + options.fileName);
    console.log('commit = ' + options.commit);

    function commandResult() {
      var p = options.pathName,
          f = options.fileName,
          c = options.commit,
          result;
      result = "git archive --format=zip --prefix=" +
               p +
               "/ HEAD `git diff --name-only HEAD HEAD~" +
               c +
               "` -o " +
               f;
      return result;
    }

    // var options = { timeout:1000 };
    var callback = function(error, stdout, stderr) {
      console.log(stdout);
    };
    // exec(command, options, callback);


    var command = commandResult();
    exec(command);
  });
};
