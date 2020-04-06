module.exports = function (grunt) {
    "use strict";
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.config.init({
        watch: {
            scripts: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            docs: {
                files: ['docs/**/*.rst', 'src/**/*.js'],
                tasks: ['run:docs'],
                options: {
                    spawn: false,
                },
            },
        },
        run: {
            options: {
                cwd: 'docs',
            },
            docs: {
                cmd: 'make',
                args: ['html'],
            }
        },
        jasmine : {
            ajja: {
                src : [
                    'src/helpers.js',
                    'src/localizations/*.js',
                    'src/templates.js',
                    'src/template.js',
                    'src/form.js',
                    'src/collection.js'
                ],
                options : {
                    specs : 'tests/**/*.js',
                    vendor: 'lib/bower.js',
                    styles: 'bower_components/bootstrap/dist/css/bootstrap.css',
                    junit: {
                        path: process.env.CIRCLE_TEST_REPORTS,
                        consolidate: true
                    },
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'coverage.json',
                        report: 'report',
                        thresholds: {
                            lines: 63,
                            statements: 75,
                            branches: 58,
                            functions: 75
                        }
                    }
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    keepalive: true,
                    base: {
                        path: '.',
                        options: {
                            index: '_SpecRunner.html'
                        }
                    },
                    open: true
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/helpers.js',
                'src/localization/*.js',
                'src/template.js',
                'src/collection.js',
                'src/form.js',
                'tests/*.js'
            ],
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
        handlebars: {
            compile: {
                options: {
                    namespace: "ajja.templates",
                    processName: function (filePath) {
                        return filePath.split('/')[1].replace('.hbs', '');
                    }
                },
                files: {
                    "src/templates.js": "templates/*.hbs",
                }
            }
        },
        bump: {
            options: {
                files: ['bower.json', 'package.json'],
                updateConfigs: [],
                commit: false,
                push: false,
                createTag: false,
                globalReplace: false,
                prereleaseName: 'dev',
                metadata: '',
                regExp: false
            }
        }
    });
    grunt.registerTask('default', [
        'bower:dev',
        'bower_concat:all',
        'jshint:all',
        'handlebars:compile'
    ]);
    grunt.registerTask('test', [
        'jasmine:ajja:build',
        'connect',
    ]);
    grunt.registerTask('phantomjs', [
        'jasmine:ajja'
    ]);
};
