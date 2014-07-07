/*
 * grunt-diff-archive
 * https://github.com/sugarshin/grunt-diff-archive
 *
 * Copyright (c) 2014 sugarshin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      test: {
        command: function(options) {
          var p = options.pathName,
              f = options.fileName,
              c = options.commit,
              result;
          result = "git archive --format=zip --prefix=" +
                   p +
                   "/ HEAD `git diff --name-only HEAD HEAD^` -o " +
                   f;

          return result;
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

  //タスクの定義
  grunt.registerMultiTask('diff', 'Git diff archiving grunt plugin.', function() {
    var options = this.options({
      pathName: 'diff',
      fileName: 'archive.zip',
      commit: '1'
    });
    grunt.task.run('shell');
  });
};