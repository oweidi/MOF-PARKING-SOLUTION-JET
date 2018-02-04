'use strict';
var path = require('path');
module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'scripts/grunt/config'),
    data: {
      appname: path.basename(process.cwd()),  // same as project directory name, accessible with '<%= appname %>'
      appdir: 'web',  // accessible with '<%= appdir %>'
      distdir: 'dist'  // accessible with '<%= distdir %>'
    }
  });
  grunt.loadNpmTasks("grunt-oraclejet");
  //grunt.loadNpmTasks("grunt-war");
  grunt.registerTask("build", "Public task. Calls oraclejet-build to build the oraclejet application. Can be customized with additional build tasks.", function (buildType) {
    grunt.task.run([`oraclejet-build:${buildType}`, 'war']);
  });
  grunt.registerTask("serve", "Public task. Calls oraclejet-serve to serve the oraclejet application. Can be customized with additional serve tasks.", function (buildType) {
    grunt.task.run([`oraclejet-serve:${buildType}`]);
  });
};