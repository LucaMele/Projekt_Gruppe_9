define([ 'app', 'helpers/connection' ],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var Home = function() {

            var buttons$el;

            var enableListeners = function() {
                buttons$el.on('click', function(ev) {
                    location.href = "#edit_note/" + $(ev.target).attr('data-id');
                });
            };

            var renderTemplates = function(object) {
                App.getRegionByKey('major').html(App.template('app/templates/index.hbs', { notes: object }));
                buttons$el = App.getRegionByKey('major').find('.btn-row-listener');
            };

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                connectionManager.getList(function(object){
                    renderTemplates(object);
                    enableListeners();
                }, {
                    q: ''
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
