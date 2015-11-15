'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            app: ['app'],
            assets: ['<%= project.app %>/assets'],
            css: ['<%= project.app %>/stylesheets/sass/style.scss']
        }, 
        sass: {
            dev: {
                options: {
                    style: 'expand',
                    compass: false
                },
                files: {
                    '<%= project.app %>/stylesheets/css/style.css':'<%= project.css %>'
                }
            }
        },
        watch: {
            sass: {
                files: '<%= project.app %>/stylesheets/sass/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'watch'    
    ]);
};
