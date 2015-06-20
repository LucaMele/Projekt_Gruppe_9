define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var ConnectionManager = function() {

            this.create = function(serializedForm) {
                var i, l, sendObj = {};
                for (i = 0, l = serializedForm.length; i < l; i++) {
                    sendObj[serializedForm[i].name] = serializedForm[i].value;
                }
                $.ajax({
                    dataType: "json",
                    method: "POST",
                    url: "/note",
                    data: {form: JSON.stringify(sendObj)}
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

            this.get = function(callback, id) {
                var that = this;
                $.ajax({
                    dataType: "json",
                    method: "GET",
                    url: "/note/" + id
                }).done(function( msg ) {
                    callback.call(that, msg);
                }).fail(function( msg ) {

                });
            };
        };

        if (inst === null) {
            inst = new ConnectionManager();
        }

        App.connectionManager = inst;

        return inst;
    });
