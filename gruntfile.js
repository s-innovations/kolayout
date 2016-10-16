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
                                     },
                                ]
                            }
                        }
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.task.registerTask("tests", ["jasmine:tests"]);
};