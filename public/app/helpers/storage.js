define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var StorageManager = function() {
            var notes = [];

            var saveInStorage = function () {
                localStorage.setItem("notes", notes);
            };

            this.create = function(note) {
                notes.push(note);
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
            inst = new StorageManager();
        }

        App.storage = inst;

        return inst;
    });
