module.exports = function(grunt) {

  grunt.initConfig({

    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      files: ['./*.js', 'lib/**/*.js', 'test/**/*.js'],
      tasks: ['test']
    }

  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', 'mochaTest');

  grunt.registerTask('default', 'mochaTest');

};
