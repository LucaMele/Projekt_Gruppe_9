define([ 'app', 'helpers/connection' ],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var Home = function() {

            var button$elAlfa;

            var select$elAlfa;

            var enableListeners = function() {
                button$elAlfa.on('click', function(ev) {
                    location.href = "#edit_note/" + select$elAlfa.val();
                });

            };

            var renderTemplates = function(object) {

                App.getRegionByKey('major').html(App.template('app/templates/index.hbs', { notes: object }));
                button$elAlfa = App.getRegionByKey('major').find('.button-listener-alfa');
                select$elAlfa = App.getRegionByKey('major').find('.select-listener-alfa');


            };


            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                connectionManager.getList(function(object){
                    renderTemplates(object);
                    enableListeners();
                });
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
