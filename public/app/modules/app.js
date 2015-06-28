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

            /**
             *
             * private function _createTemplateObject
             *
             * Create a template app object instead of using the JST one
             *
             **/
            var _createTemplateObject = function() {
                var key;
                for(key in JST) {
                    if (JST.hasOwnProperty(key)) {
                        templates[key] = JST[key];
                    }
                }
            };

            /**
             *
             * public function init
             *
             * Is the initialize function of the app manager
             *
             **/
            this.init = function() {
                _createTemplateObject();
            };

            /**
             *
             * public function template
             *
             * returns the specific template
             *
             * @param {string} key.
             * @param {object} object.
             *
             **/
            this.template = function(key, object) {
                return templates['public/' + key](object);
            };

            /**
             *
             * public function getRegionByKey
             *
             *  return the jQuery Object for a given jquery selector defined as region
             *
             * @param {string} key.
             *
             **/
            this.getRegionByKey = function(key){
                return regions[key];
            };

            /**
             *
             * public function loadModule
             *
             * @param {string} url.
             *
             **/
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

            /**
             * public function registerModule
             *
             * Called from externals modules.. it enables them in the app
             *
             * @param {string} exports.
             *
             **/
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
