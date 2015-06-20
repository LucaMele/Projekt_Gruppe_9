define([ 'app' , 'helpers/connection'],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var EditNote = function() {

            var region$el;
            var form$el;

            var renderTemplates = function(object) {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                region$el = App.getRegionByKey('major').html(App.template('app/templates/form.hbs', object));

            };

            var submitFormHandler = function(ev) {

            };

            var enableListeners = function() {
                form$el = region$el.find('form');
                form$el.on('submit', submitFormHandler);
            };

            this.load = function() {

                connectionManager.get(function(object){
                    renderTemplates(object[0]);
                    enableListeners();
                }, App.router.url.replace( /^\D+/g, ''));



            };
        };


        if (inst === null) {
            inst = new EditNote();
        }

        App.registerModule({
            module: inst,
            name: 'edit_note/:id'
        });

        return EditNote;
    });
