define([ 'app' , 'helpers/connection', 'helpers/formElHandler'],
    function (App, connectionManager, FormElHandler) {
        'use strict';
        var inst = null;

        /**
         * @constructor EditNote.
         * */
        var EditNote = function() {
            var id;

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
                connectionManager.update(function() {location.href = ""; }, form$el.serializeArray(), id);
            };

            /**
             *
             * public function submitFormHandler
             *
             * Modules entrance point
             *
             **/
            this.load = function() {
                id = App.router.url.replace( /^\D+/g, '');
                connectionManager.get(function(object){
                    var formElHandler = new FormElHandler();
                    object[0].id = id;
                    formElHandler.handle(submitFormHandler, object[0]);
                }, id);
            };
        };

        // Singleton Pattern
        if (inst === null) {
            inst = new EditNote();
        }

        // Register a module in the app. The URL #create_note will call this module
        App.registerModule({
            module: inst,
            name: 'edit_note/:id'
        });

        return EditNote;
    });
