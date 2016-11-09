/*
 * grunt-csproj-integrity
 * https://github.com/mantovanig/grunt-csproj-integrity
 *
 * Copyright (c) 2016 mantovanig
 * Licensed under the MIT license.
 */

'use strict';

// require modules
const checksolution = require('csproj-integrity');
const path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  return grunt.registerMultiTask('csproj_integrity', 'Grunt plugin of csproj-integrity', function() {

  		var done = this.async();

      var options = this.options({
        checkFiles: false,
        checkIntegrity: false
      });

  		this.files.forEach(function(file) {

        if(!file.cwd) {
          file.cwd = '';
        }

  			var files = file.src.map(function(f) { return path.join(file.cwd, f) })
  			grunt.log.debug('Checking: ' +  files.length + ' files.');

       Promise.resolve()
        .then(function () {
          if(options.checkFiles) {
              return checksolution.checkFiles(files);
          }
        })
        .then(function () {
          if(options.checkIntegrity) {
              return checksolution.checkIntegrity(files);
          }
        })
        .then(done);

  		}) // end forEach

  });

};
