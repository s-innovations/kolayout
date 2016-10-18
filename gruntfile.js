module.exports = function (grunt) {


    grunt.initConfig({
        jasmine: {
            tests: {
                src: ['dist/src/**/*.js'],
                summary: true,
                phantomjs: {
                    resourceTimeout: 25000,
                },
                options: {
                    specs: ['tests/*.js'],
                    junit: {
                        path: 'build/junit'
                    },
                    //     vendor: "node_modules/**/*.js",
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'build/coverage/coverage.json',
                        report: [
                            {
                                type: "html",
                                options: {
                                    dir: 'build/coverage'
                                }
                            },
                             {
                                 type: "lcov",
                                 options: {
                                     dir: 'build/coverage/lcov'
                                 }
                             },
                            {
                            type: 'cobertura',
                            options: {
                                dir: 'build/coverage/cobertura'
                            }
                        }],
                        template: require('grunt-template-jasmine-requirejs'),
                        //thresholds: {
                        //    lines: 50,
                        //    statements: 75,
                        //    branches: 75,
                        //    functions: 90
                        //},
                        templateOptions: {
                            requireConfig: {
                                shim: {

                                },
                                baseUrl: '.grunt/grunt-contrib-jasmine/dist/src/',
                                paths: {                                   
                                    "knockout": "../../../../node_modules/knockout/build/output/knockout-latest"
                                },
                                packages: [                                   
                                     {
                                         name: "kolayout",
                                         main: "index",
                                         location: "."
                                     }
                                ]
                            }
                        }
                    }
                }
            }
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },

            your_target: {
                // LCOV coverage file (can be string, glob or array)
                src: 'build/coverage/lcov/*.info',
                options: {
                    // Any options for just this target
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.task.registerTask("tests", ["jasmine:tests"]);
};