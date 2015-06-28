define([ 'app' , 'helpers/connection', 'helpers/formElHandler'],
    function (App, connectionManager, FormElHandler) {
        'use strict';
        var inst = null;

        /**
         * @constructor CreateNote.
         * */
        var CreateNote = function() {

            /**
             *
             * private function submitFormHandler
             *
             * Callback method triggered on submit from the formElHandler
             *
             * @param {object} ev.
             * @param {object} form$el.
             **/
            var submitFormHandler = function(ev, form$el) {
                connectionManager.create(function() {location.href = "#"; }, form$el.serializeArray());
            };

            /**
             *
             * public function load
             *
             * Modules entrance point
             *
             **/
            this.load = function() {
                var formElHandler = new FormElHandler();
                formElHandler.handle(submitFormHandler, {
                    description: '',
                    title: '',
                    date: ''
                });
            };
        };

        // Singleton Pattern
        if (inst === null) {
            inst = new CreateNote();
        }

        // Register a module in the app. The URL #create_note will call this module
        App.registerModule({
            module: inst,
            name: 'create_note'
        });

        return CreateNote;
    });
