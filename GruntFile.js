module.exports = function(grunt) {

  grunt.initConfig({
    browserify:{
      dist:{
        files:{
          'dist/js/app.js':['src/index.js','src/**/*.js']
        }        
      }
    },
    watch: {
      options:{livereload:true},
      files: ['src/index.js','src/**/*.js','dist/index.html'],
      tasks: ['default']
    },
    express:{
      all:{
        options:{
          port:5000,
          hostname:'localhost',
          bases:['./dist'],
          livereload:true,
        }
      } 
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify']);
  grunt.registerTask('server',['express','watch']);
};