module.exports = function(grunt) {

  // config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /*
    task: {
      options: {
        complress: true
      },
      target1: {
        src: ...,
        dest: ...
      },
      target2: {
        src: ...,
        dest: ...
      }
    }
    */

    /*
    task: {
      options: {
        complress: true
      },
      target1: {
        src: ...,
        dest: ...
      },
      target2: {
        src: ...,
        dest: ...
      }
    }
    */

    /*
    task: {
      target1: {
        src: ...,
        dest: ...,
      },
      target2: {
        files: {
          dest: src
        }
      }
    }
    */

  
//    less: {  
      /*
      build1: {
        src: 'src/style1.less',
        dest: 'build/styles1.css'
      },
      build2: {
        src: 'src/style2.less',
        dest: 'build/styles2.css'
      }
      */
//      files: {
        // 'build/styles.css': 'src/style1.less',
        // 'build/styles.css': ['src/style1.less', 'src/style2.less']
        // 'src/styles.css': 'src/*.less'
//        'build/styles.css': 'src/**/*.less'
//      }
//    }

    /*
    less: {
      options: {
        compress: true
      },
      build: {
        src: 'src/style1.less',
        dest: 'build/styles.css'
      }
    }
    */
  
    less: {
      build: {
        src: ['src/style1.less', 'src/style2.less'],
        dest: 'build/styles.css'
      }
    },
    csslint: {
      check: {
      //  src: 'build/styles.css'
        src: '<%= less.build.dest %>'
      }
    },
    cssmin: {
      minimize: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'build/styles.min.css': '<%= less.build.dest %>'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: 'src/*.less',
      tasks: ['less', 'csslint', 'cssmin']
    },
    connect: {
      server: {
        options: {
          port: 8081,
          hostname: '192.168.1.52'
        }
      }
    }

  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // tasks
  // grunt.registerTask('default', 'less');
  // grunt.registerTask('task1', 'less:build1');
  // grunt.registerTask('task2', 'less:build2');
  grunt.registerTask('default', ['less', 'csslint', 'cssmin', 'connect', 'watch']);

};
