define([ 'app' , 'helpers/connection', 'helpers/formElHandler'],
    function (App, connectionManager, FormElHandler) {
        'use strict';
        var inst = null;

        var EditNote = function() {

            var region$el;
            var id;

            var submitFormHandler = function(ev, form$el) {
                var serializedForm;

                serializedForm = form$el.serializeArray();
                connectionManager.update(function() {location.href = ""; }, serializedForm, id);
            };

            this.load = function() {
                id = App.router.url.replace( /^\D+/g, '');
                connectionManager.get(function(object){
                    var formElHandler = new FormElHandler();
                    formElHandler.handle(submitFormHandler, object[0]);
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
