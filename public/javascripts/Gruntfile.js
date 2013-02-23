module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        lint: {
            all: ['Gruntfile.js', 'src/*.js', 'src/core/*.js']
        },
        jshint: {
            options: {
                browser: true
            }
        },
        concat: {
            dev: {
                src: [
                    'src/core/utils.js',
                    'src/core/wait4.js',
                    'src/core/ready.js',
                    'src/core/json2.js',
                    'src/core/domutil.js',
                    'src/core/bean.js',
                    'src/core/reqwest.js',
                    'src/core/easyXDM.js',
                    'src/core/jsface.js',
                    'src/core/pubsub.js',

                    'src/leaflet/leaflet-providers-0.0.2.js',
                    'src/leaflet/leaflet.Google.js',
                    'src/leaflet/leaflet.Bing.js',
                    'src/leaflet/leaflet.Yandex.js',

                    'src/core/alias.js',

                    'src/re.gadget/re.layout.js',
                    'src/re.gadget/re.dao.js',
                    'src/re.gadget/re.dao_easyxdm.js',
                    'src/re.gadget/re.model.js',
                    'src/re.gadget/re.listitem.js',
                    'src/re.gadget/re.list.js',
                    'src/re.gadget/re.map.js',
                    'src/re.gadget/re.gadget.js',

                    'src/exports.js',
                    'src/jsonpcallback.js'

                    ],
                dest: 'app.dev.js'
            },
            full: {
                src: [
                    'src/intro.js',
                    'app.dev.js',
                    'src/outro.js'
                    ],
                dest: 'app.full.js'
            }


        },
        closureCompiler: {

            options: {
                // [REQUIRED] Path to closure compiler
                compilerFile: './build/compiler.jar',

                // [OPTIONAL] set to true if you want to check if files were modified
                // before starting compilation (can save some time in large sourcebases)
                checkModified: true,

                // [OPTIONAL] Set Closure Compiler Directives here
                compilerOpts: {
                    //compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    compilation_level:'SIMPLE_OPTIMIZATIONS',
                    //externs: ['src/core/externs_closure.js'],                    
                    //externs:['src/leaflet/leaflet-src.js','src/core/externs_closure.js']
                    //property_map_output_file: 'build/property_map_output.txt',
                    //property_map_input_file: 'build/property_map_input.txt'
                    //define: ["'goog.DEBUG=false'"],
                    //warning_level: 'verbose',
                    //jscomp_off: ['checkTypes', 'fileoverviewTags'],
                    //summary_detail_level: 3,
                    //output_wrapper: '(function(){%output%}).call(this);'
                }

            },
            app: {
                src: 'app.full.js',
                dest: 'app.min.js'
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-tools');

    // Default task.
    grunt.registerTask('default', ['concat', 'closureCompiler']);

};