require.config({
    deps: [
        'main'
    ],

    paths : {
        templates: 'templates/templates',
        app: 'modules/app',

        jquery : 'http://code.jquery.com/jquery-2.1.4.min',
        handlebars: 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min',
        validation : 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min'
    },
    shim : {
        jquery : {
            exports : 'jquery'
        },
        handlebars : {
            deps : ['jquery'],
            exports : 'handlebars'
        },
        app : {
            deps : ['handlebars'],
            exports : 'app'
        }
    },
    map : {
        // 'modules/content.course' : 'core/course'
    }
});/**
 * Created by Luca on 06.06.2015.
 */
