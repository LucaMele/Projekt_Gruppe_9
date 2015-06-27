define([ 'app', 'helpers/connection' ],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var Home = function() {

            var buttons$el, checkboxes$El, mainButtonsArea$el;

            var notes = {};

            var lastQuery = 'date&o=ASC';

            var that = this;

            var buttons = ['order_finish', 'order_created', 'order_importance', 'order_completed'];

            var activeIndex = 0;

            var findObjectById = function(id) {
                var i, l;
                for (i = 0, l = notes.length; i < l; i++) {
                    if (+id === +notes[i].id) { return notes[i]; }
                }
                return {};
            };

            var getCurrentDate = function () {
                var d = new Date();
                return d.getMilliseconds();
            };

            var enableListeners = function() {
                buttons$el.on('click', function(ev) {
                    location.href = "#edit_note/" + $(ev.target).attr('data-id');
                });
                checkboxes$El.on('change', function(ev) {
                    var target = $(ev.target),
                        note = findObjectById(target.attr('data-id'));
                    note.finished = +ev.target.checked;
                    if (note.finished) {
                        note.finishedDate = getCurrentDate();
                    } else {
                        note.finishedDate = '0000-00-00';
                    }
                    connectionManager.update(function() {  that.load(); }, note, note.id)
                });

                mainButtonsArea$el.find('button').on('click', function(ev) {
                    activeIndex = +$(this).attr('data-index');
                    lastQuery = $(this).attr('data-query');
                    sendQuery(lastQuery);
                });

            };

            var renderTemplates = function() {
                var i, l, templateObj = {buttons: {} , notes: notes};
                for (i = 0, l = buttons.length; i < l; i++) {
                    templateObj.buttons[buttons[i]] = activeIndex === i ? 'active' : '';

                }
                App.getRegionByKey('major').html(App.template('app/templates/index.hbs', templateObj));
                buttons$el = App.getRegionByKey('major').find('.btn-row-listener');
                checkboxes$El = App.getRegionByKey('major').find('.checkbox-row-listener');
                mainButtonsArea$el = App.getRegionByKey('major').find('.listener-main-buttons-area');
            };

            var sendQuery = function(query) {
                connectionManager.getList(function(object){
                    notes = object;
                    renderTemplates();
                    enableListeners();
                }, query);
            };

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                sendQuery(lastQuery);
            };


        };


        if (inst === null) {
            inst = new Home();
        }


        App.registerModule({
            module: inst,
            name: 'home'
        });

        App.registerModule({
            module: inst,
            name: ''
        });

        return Home;
    });
