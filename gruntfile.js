module.exports = function (grunt) {
    

    grunt.initConfig({
        jasmine: {
            tests: {
                //  src: ['wwwroot/libs/AscendLimitation/**/*.js'],
                phantomjs: {
                    resourceTimeout: 25000,
                },
                options: {
                    specs: ['tests/*.js'],
                    //     vendor: "node_modules/**/*.js",
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            shim: {
                               
                            },
                            baseUrl: '.',
                            paths: {
                               
                            },
                            packages: [
                                 {
                                     name: "kolayout",
                                     main: "index",
                                     location: "dist/src"
                                 },
                            ]
                        }
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    grunt.task.registerTask("tests", ["jasmine:tests"]);
};