module.exports = function (grunt) {
    "use strict";
    require('load-grunt-tasks')(grunt);

    grunt.config.init({
        jasmine : {
            jsform: {
                src : ['src/helpers.js', 'src/jsform.js', 'src/container.js'],
                options : {
                    specs : 'tests/**/*.js',
                    vendor: 'lib/bower.js',
                    styles: 'bower_components/bootstrap/dist/css/bootstrap.css',
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/*.js']
        },
        bower: {
            install: {
                options: {
                    copy: false
                }
            },
            dev: {
                dest: 'lib',
                keepExpandedHierarchy: true,
                options: {
                    expand: true,
                }
            }
        },
        bower_concat: {
            all: {
                dest: 'lib/bower.js'
            },
        },
    });
    grunt.registerTask('default', [
        'bower:dev',
        'bower_concat:all',
        'jshint:all',
    ]);
    grunt.registerTask('test', [
        //'jasmine:jsform:build',
        'connect',
    ]);
};
