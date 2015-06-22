define([ 'app' , 'helpers/connection'],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var EditNote = function() {

            var region$el;
            var form$el;
            var id;

            var renderTemplates = function(object) {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                region$el = App.getRegionByKey('major').html(App.template('app/templates/form.hbs', object));

            };

            var submitFormHandler = function(ev) {
                var serializedForm;
                ev.preventDefault();
                serializedForm = form$el.serializeArray();
                connectionManager.update(function() {location.href = ""; }, serializedForm, id);
            };

            var enableListeners = function() {
                form$el = region$el.find('form');
                form$el.on('submit', submitFormHandler);
                region$el.find('.listener-cancel').on('click', function() {
                    location.href = "";
                });
            };

            this.load = function() {
                id = App.router.url.replace( /^\D+/g, '');
                connectionManager.get(function(object){
                    renderTemplates(object[0]);
                    enableListeners();
                }, id);



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
