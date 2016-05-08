module.exports = function(grunt) {
  var path = require('path');
  var taskName = grunt.cli.tasks[0];
  var dependencies = ['dependencies'];

  switch(taskName){
  case "staging":
    // break;
  case "deploy":
    break;
  default:
    dependencies.push('devDependencies');
    break;
  }
  grunt.template.addDelimiters('config', '{%', '%}');
  require('load-grunt-config')(grunt, {
    data: {
      settings: {
        projectRoot  : path.join(process.cwd(), 'src'),
      }
    },
    loadGruntTasks: {
      scope: dependencies
    }
  });
};

