define([ 'app' ],
    function (App) {
        'use strict';

        var Router = function(App) {
            var url = location.hash.slice(1) || '/';

            var app = App;

            /**
             * public function init
             **/
            this.init = function() {
                this.fragment = url.replace(/\d+/g, ":id");
                this.url = url;
                app.loadModule(this.fragment);
            };

            /**
             * public function handleRoute
             **/
            this.handleRoute = function(ev) {
                url = location.hash.slice(1) || '/';
                this.fragment = url.replace(/\d+/g, ":id");
                this.url = url;
                app.loadModule(this.fragment);
            };
        };

        App.router = new Router(App);
        App.router.init();

        $(window).bind('hashchange', function(ev) {
            App.router.handleRoute(ev);
        });

        return App;
    });
