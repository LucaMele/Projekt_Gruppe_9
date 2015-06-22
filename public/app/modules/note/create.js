define([ 'app' , 'helpers/connection', 'helpers/formElHandler'],
    function (App, connectionManager, FormElHandler) {
        'use strict';
        var inst = null;

        var CreateNote = function() {

            var region$el;

            var submitFormHandler = function(ev, form$el) {
                var serializedForm;

                serializedForm = form$el.serializeArray();
                connectionManager.create(function() {location.href = ""; }, serializedForm);
            };

            this.load = function() {
                var formElHandler = new FormElHandler();
                formElHandler.handle(submitFormHandler, {
                    description: '',
                    title: '',
                    date: ''
                });
            };
        };


        if (inst === null) {
            inst = new CreateNote();
        }

        App.registerModule({
            module: inst,
            name: 'create_note'
        });

        return CreateNote;
    });
