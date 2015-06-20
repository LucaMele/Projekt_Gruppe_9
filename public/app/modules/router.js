define([ 'app' ],
    function (App) {
        'use strict';

        var Router = function(App) {
            var url = location.hash.slice(1) || '/';

            var app = App;

            /* public function */
            this.init = function() {
                app.loadModule(url);
            };

            /* public function */
            this.handleRoute = function(ev) {
                url = location.hash.slice(1) || '/';
                app.loadModule(url);
            };
        };

        App.router = new Router(App);
        App.router.init();

        $(window).bind('hashchange', function(ev) {
            App.router.handleRoute(ev);
        });

        return App;
    });
