define([ 'templates' ],
    function () {
        'use strict';

        var App = function() {

            var JST = window.JST;

            var body = $('body');

            var templates = {};

            var modules = {};

            var regions = {
                major: body.find('#main-area-major'),
                content: body.find('#main-area-content'),
                head: body.find('#main-area-head')
            };

            /* private function */
            var _createTemplateObject = function() {
                var key;
                for(key in JST) {
                    if (JST.hasOwnProperty(key)) {
                        templates[key] = JST[key];
                    }
                }
            };

            /* public function */
            this.init = function() {
                _createTemplateObject();
            };

            /* public function */
            this.template = function(key, object) {
                return templates['public/' + key](object);
            };

            /* public function */
            this.getRegionByKey = function(key){
                return regions[key];
            };

            /* public function */
            this.loadModule = function(url) {
                if (typeof modules[url] === 'undefined') {
                    if (typeof modules[''] === 'undefined') {
                        console.error("No default module found");
                    } else {
                        modules[''].load();
                    }
                } else {
                    modules[url].load();
                }
            };

            /* public function */
            this.registerModule = function(exports) {
                if (typeof exports.name !== 'undefined') {
                    modules[exports.name] = exports.module;
                } else {
                    console.error('A Module name must be defined!');
                }
            };
        };

        Handlebars.registerHelper( 'times', function( n, block ) {
            var accum = '',
                i = -1;

            while( ++i < n ) {
                accum += block.fn( i );
            }

            return accum;
        });

        App.inst = null;

        if (App.inst === null) {
            App.inst = new App();
            App.inst.init();
        }

        return App.inst;
    });
