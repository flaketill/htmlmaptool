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
          //name: '<%= pkg.name %>.js',
          wrapShim: true,
          //dir: 'dist/',
          //keepBuildDir: true,          
          /*include: [
          'htmlmaptool',
          'core'
          //'exports/amd',
          //'exports/global',
          //'core/test',
          //'var/support',
          //'core/support',
          //'common',
          //'utils/sessionstorage',
          
          ],*/
          //exclude: ['test'],
          //mainConfigFile: "./main.js",
          //name: "almond", //using almond plugin to generate deliverable
          include: ['core',
          'exports/amd',
          'exports/global',
          'core/test',
          'core/utils',
          'core/dropzone',
          'core/drag_n_drop',
          'htmlmaptool'],
          insertRequire: ['htmlmaptool'],
          out: 'dist/<%= pkg.name %>.js',
          optimize: 'none', // none / uglify2
          //optimize: "uglify2",
          /*uglify2: {
            output: {
              beautify: true
            },
            compress: {
              sequences: true,
              global_defs: {
                DEBUG: false
              }
            },
            warnings: true,
            mangle: false
          },*/
          // Include dependencies loaded with require
          //findNestedDependencies: true,
          // Avoid inserting define() placeholder
          //skipModuleInsertion: true,
          // Avoid breaking semicolons inserted by r.js
          //skipSemiColonInsertion: true,
          //wrap: true,
          wrap: {
            startFile: ['src/top_data.frag','src/start.frag'],
            endFile: ['src/end.frag']
          },
          //rawText: {},
          //onBuildWrite: convert,
          //A function that if defined will be called for every file read in the
          //build that is done to trace JS dependencies. This allows transforms of
          //the content.
          onBuildRead: function (moduleName, path, contents) {
            //Always return a value.
            //This is just a contrived example.
            console.log('Loading "' + moduleName + '" for path "' + path + '"');
            //;(function() {
            //return contents.replace(/Htmlmaptool/g, 'HtmlmaptoolJAJAJA');
            return contents.replace(/info/g, 'info2');            
            //contents.replace(/var define = function \(factory\) \{[^\}]+\}\;/, '');
          },
          //A function that will be called for every write to an optimized bundle
          //of modules. This allows transforms of the content before serialization.
          onBuildWrite: function (moduleName, path, contents) {
            //Always return a value
            //This is just a contrived example.
            //}());
            //return contents.replace(/Htmlmaptool/g, 'HtmlmaptoolJAJAJA');
            console.log('Please wait ..');
            //console.log('Loading "' + moduleName + '" for path "' + path + '"');
            return contents.replace(/__version__/g,'<%= pkg.name %>');

          },
          'onModuleBundleComplete': function (data) {

            //using almond plugin to generate deliverable

            var fs = require('fs'),
              amdclean = require('amdclean'),
              outputFile = data.path;

              console.log(data);
              console.log("The path dist file: " + outputFile);              

              for (var i = 0; i < data.included.length; i++) {
                var modulefile = data.included[i];
                console.log(data.included[i]);
              }
 
            fs.writeFileSync(outputFile, amdclean.clean({
              // Determines if certain aggressive file size optimization techniques 
              // will be used to transform the soure code 
              'aggressiveOptimizations': false,
              'filePath': outputFile,
              'globalObject': true,
              'commentCleanName': 'amdclean',
              'removeAllRequires': true,
              'wrap': {
              // This string is prepended to the file ( No need --> ;(function() { \n  )
              'start': '',
              // This string is appended to the file  ( No need ---> \n}()); )
              'end': ''
              }
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
      /*files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit'],*/
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['build']
      }
    }
  });

  // On watch events configure
  grunt.event.on('watch', function(action, filepath) {
    //grunt.config('jshint.all.src', filepath);
    console.log("ok");
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