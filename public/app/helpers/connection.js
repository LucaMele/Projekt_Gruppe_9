define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var ConnectionManager = function() {

            this.create = function(callback, serializedForm) {
                var i, l, sendObj = {}, that = this;
                for (i = 0, l = serializedForm.length; i < l; i++) {
                    sendObj[serializedForm[i].name] = serializedForm[i].value;
                }
                $.ajax({
                    dataType: "json",
                    method: "POST",
                    url: "/note",
                    data: {form: JSON.stringify(sendObj)}
                }).done(function( msg ) {
                    callback.call(that);
                }).fail(function( msg ) {

                });
            };

            this.delete = function(note) {
                notes.splice(notes.indexOf(note), 1);
            };

            this.update = function(callback, serializedForm, id) {
                var i, l, sendObj = {}, that = this;
                for (i = 0, l = serializedForm.length; i < l; i++) {
                    sendObj[serializedForm[i].name] = serializedForm[i].value;
                }
                $.ajax({
                    dataType: "json",
                    method: "PUT",
                    url: "/note/" + id,
                    data: {form: JSON.stringify(sendObj)}
                }).done(function( msg ) {
                    callback.call(that);
                }).fail(function( msg ) {

                });
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

            this.getList = function(callback) {
                var that = this;
                $.ajax({
                    dataType: "json",
                    method: "GET",
                    url: "/note"
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
