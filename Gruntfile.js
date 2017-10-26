module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },
    //require js configuration
    requirejs: {
      compile: { // <<== nest the options in this.
        options: {
          baseUrl: 'src/',
          mainConfigFile: 'main.js',
          out: 'dist/<%= pkg.name %>.js',
          name: '<%= pkg.name %>.js',
          wrapShim: true,
          dir: 'dist/',
          keepBuildDir: true,
          paths: {
            global: ['src/exports/global'],
            amd: ['src/exports/amd'],
            core: ['core'],
            htmlmaptool: ['htmlmaptool']
            support: ['src/var/support'],   
            common: ['common'],
            sessionstorage: ['src/utils/sessionstorage'],
          },
          exclude: ['config'],
          done: function(done, output) {
            var duplicates = require('rjs-build-analysis').duplicates(output);

            if (Object.keys(duplicates).length) {
              grunt.log.subhead('Duplicates found in requirejs build:');
              grunt.log.warn(duplicates);
              return done(new Error('r.js built duplicate modules, please check the excludes option.'));
            }
            done();
          },
          error: function(done, err) {
            grunt.log.warn(err);
            done();
          }          
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    babel: {
      options: {
        sourceMap: "inline",
        retainLines: true,
        presets: ["env"]
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          htmlmaptool: true,
          console: true,
          module: true,
          document: true,
          laxcomma: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  // Load grunt tasks from NPM packages
  require( "load-grunt-tasks" )( grunt );

  // Actually load this plugin's task(s).
  // grunt.loadTasks('tasks');

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'qunit']);
  //grunt.registerTask('test', ['clean','jshint', 'qunit']);
  // By default, lint and run all tests.
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'requirejs:compile']);
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};