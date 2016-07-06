module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {},
      module: {
        expand: true,
        cwd: 'dist/src/module',
        src: ['index.js'],
        dest: 'dist/src/module'
      }
    },

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'app/',
            src: ['*.html'],
            dest: 'dist/'
          }
        ]
      },

      view: {
        files: [{
          expand: true,
          cwd: 'app/view/',
          src: ['*'],
          dest: 'dist/view/'
        }]
      },

      img: {
        files: [{
          expand: true,
          cwd: 'app/src/img',
          src: ['*'],
          dest: 'dist/src/img/'
        }]
      },

      css: {
        files: [{
          expand: true,
          cwd: 'app/src/css',
          src: ['*'],
          dest: 'dist/src/css/'
        }]
      },

      js: {
        files: [{
          expand: true,
          cwd: 'app/src/lib',
          src: ['*'],
          dest: 'dist/src/lib/'
        }]
      },

      module: {
          expand: true,
          cwd: 'app/src/module',
          src: ['*.js', '*/*.js', '*/*/*.js'],
          dest: 'dist/src/module'
      }
    },

    connect: {
      options: {
        livereload: 1337,
        open: false
      },
      server: {
        options: {
          port: 3000,
          base: './app/',
          hostname: '*'
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['app/*']
      }
    }
  });

  grunt.registerTask('default', [
      'connect',
      'watch'
  ]);

  //loadTasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
}
