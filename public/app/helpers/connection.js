define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var ConnectionManager = function() {



            this.create = function(serializedForm) {

                $.ajax({
                    dataType: "json",
                    method: "POST",
                    url: "/note",
                    data: serializedForm
                }).done(function( msg ) {

                }).fail(function( msg ) {

                });


            };

            this.delete = function(note) {
                notes.splice(notes.indexOf(note), 1);
            };

            this.update = function(note) {
                notes[notes.indexOf(note)] = note;
            };

            this.get = function() {

            };
        };

        if (inst === null) {
            inst = new ConnectionManager();
        }

        App.connectionManager = inst;

        return inst;
    });
