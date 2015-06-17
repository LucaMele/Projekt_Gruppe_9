define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var Home = function() {
            console.log('here ');

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/index.hbs', {
                    var234: 'test'
                }));

                App.getRegionByKey('major').html(App.template('app/templates/list.hbs', {
                    var234: 'test'
                }));
            };
        };


        if (inst === null) {
            inst = new Home();
        }


        App.registerModule({
            module: inst,
            name: 'home'
        });

        App.registerModule({
            module: inst,
            name: ''
        });

        return Home;
    });
