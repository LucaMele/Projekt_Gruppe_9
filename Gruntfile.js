module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            all: {
                files: {
                    "public/app/templates/templates.js": ["public/app/templates/**/*.hbs"]
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/app/templates/**/*.hbs'],
                tasks: ['handlebars']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
};