define([ 'app' , 'helpers/connection'],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        /**
         * @constructor DeleteNote.
         * */
        var DeleteNote = function() {

            var id;

            /**
             *
             * public function load
             *
             * Modules entrance point
             *
             **/
            this.load = function() {
                id = App.router.url.replace( /^\D+/g, '');
                connectionManager.delete(function(object){
                    location.href = "#";
                }, id);
            };
        };

        // Singleton Pattern
        if (inst === null) {
            inst = new DeleteNote();
        }

        // Register a module in the app. The URL #create_note will call this module
        App.registerModule({
            module: inst,
            name: 'delete_note/:id'
        });

        return DeleteNote;
    });
