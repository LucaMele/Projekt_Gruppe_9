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
                    console.error('create NOTE failed', msg);
                });
            };

            this.delete = function(callback, id) {
                var that = this;
                $.ajax({
                    dataType: "json",
                    method: "DELETE",
                    url: "/note/" + id
                }).done(function( msg ) {
                    callback.call(that, msg);
                }).fail(function( msg ) {
                    console.error('delete NOTE failed', msg);
                });
            };

            this.update = function(callback, sendObject, id) {
                var i, l, sendObj = {}, that = this;
                if( Object.prototype.toString.call( sendObject ) === '[object Array]' ) {
                    for (i = 0, l = sendObject.length; i < l; i++) {
                        sendObj[sendObject[i].name] = sendObject[i].value;
                    }
                } else {
                    sendObj = sendObject;
                }
                $.ajax({
                    dataType: "json",
                    method: "PUT",
                    url: "/note/" + id,
                    data: {form: JSON.stringify(sendObj)}
                }).done(function( msg ) {
                    callback.call(that);
                }).fail(function( msg ) {
                    console.error('update NOTE failed', msg);
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
                    console.error('get NOTE failed', msg);
                });
            };

            this.getList = function(callback, query) {
                var that = this;
                var q = typeof query === 'undefined' ? '' : '?q=' + query;
                $.ajax({
                    dataType: "json",
                    method: "GET",
                    url: "/note" + q
                }).done(function( msg ) {
                    callback.call(that, msg);
                }).fail(function( msg ) {
                    console.error('getList NOTE failed', msg);
                });
            };
        };

        if (inst === null) {
            inst = new ConnectionManager();
        }

        App.connectionManager = inst;

        return inst;
    });
