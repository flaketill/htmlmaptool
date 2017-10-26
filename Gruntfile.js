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
     //require js configuration
    requirejs: {
      compile: { // <<== nest the options in this.
        options: {
          baseUrl: 'src/',
          //mainConfigFile: 'main.js',          
          //name: '<%= pkg.name %>.js',
          //wrapShim: true,
          //dir: 'dist/',
          //keepBuildDir: true,
          include: ['exports/global',
          'exports/amd',
          'core',
          'htmlmaptool',
          'var/support',   
          'common',
          'utils/sessionstorage'
          ],
          exclude: ['test'],
          out: 'dist/<%= pkg.name %>.js',
          'onModuleBundleComplete': function (data) {

            //using almond plugin to generate deliverable

            var fs = require('fs'),
              amdclean = require('amdclean'),
              outputFile = data.path;
 
            fs.writeFileSync(outputFile, amdclean.clean({
              'filePath': outputFile
            }));
          },
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

  // grunt.loadNpmTasks('grunt-contrib-uglify');

  //This plugint fail: grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('build', ['requirejs:compile']);

  grunt.registerTask('default', ['qunit', 'concat', 'uglify', 'build']);

};