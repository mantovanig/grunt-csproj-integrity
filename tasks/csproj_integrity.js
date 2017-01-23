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
        checkIntegrity: false,
        failOnError: false // Fail the task on error. Default: false
      });

  		this.files.forEach(function(file) {

        if(!file.cwd) {
          file.cwd = '';
        }

  			var files = file.src.map(function(f) { return path.join(file.cwd, f) })
  			grunt.log.debug('Checking: ' +  files.length + ' files.');

        var checkFilesResult; //Store the checkFiles result

       Promise.resolve()
        .then(function () {
          if(options.checkFiles) {
              return checksolution.checkFiles(files);
          }
        })
        .then(function (result) {
          checkFilesResult = result;
          if(options.checkIntegrity) {
              return checksolution.checkIntegrity(files);
          }
        })
        .then((result) => {
           if (options.failOnError) {
               var hasErrors = false;
               hasErrors |= (checkFilesResult && checkFilesResult.length > 0); //One or more files are not included in the solution
               hasErrors |= (result && result.length > 0); //One or more included files does not exist
               if (hasErrors) {													
                   grunt.fail.fatal('grunt-csproj-integrity: failure');
               }
            }
            done();
        });

  		}) // end forEach

  });

};
