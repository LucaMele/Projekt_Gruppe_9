/*global require:true */
require(['handlebars', 'jquery'], function(handlebars) {

    'use strict';

    window.Handlebars = handlebars;

    require(
        [
            'modules/home/index',
            'modules/note/create',
            'modules/note/edit',
            'helpers/storage'
        ], function() {
            // modules
            require(
                [
                    'modules/router'
                ], function(App) {

                });
        });
});