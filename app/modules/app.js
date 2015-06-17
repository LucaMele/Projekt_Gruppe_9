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
                return templates[key](object);
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
                    console.log(modules[url])
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

        App.inst = null;

        if (App.inst === null) {
            App.inst = new App();
            App.inst.init();
        }


       // $('#main-area-header').append(JST['app/templates/index.hbs']({var234: 'ricardo'}));




        return App.inst;
    });
