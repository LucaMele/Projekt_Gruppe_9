define([ 'app', 'helpers/connection' ],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var Home = function() {

            // CLASS Vars
            var buttons$el, checkboxes$El, mainButtonsArea$el, searchInputText$El, style$elSwitch;

            var lastUsedStyle = 'bw';

            var notes = {};

            var lastQuery = 'date&o=ASC';

            var that = this;

            var buttons = ['order_finish', 'order_created', 'order_importance', 'order_completed'];

            var activeIndex = 0;

            /**
             * private function findObjectById
             *
             * @param {number} id.
             **/
            var findObjectById = function(id) {
                var i, l;
                for (i = 0, l = notes.length; i < l; i++) {
                    if (+id === +notes[i].id) { return notes[i]; }
                }
                return {};
            };

            /**
             * private function getCurrentDate
             *
             * @return {number} date in milliseconds.
             **/
            var getCurrentDate = function () {
                var d = new Date();
                return d.getMilliseconds();
            };

            /**
             * private function enableMajorListeners
             **/
            var enableMajorListeners = function() {
                searchInputText$El.on('keyup', function(ev) {
                    var value = $(this).val(),
                        query = '';
                    if (value.trim(' ') === '') {
                        query = lastQuery;
                    } else {
                        query = 'title&has=' + $(this).val();
                    }
                    sendQuery(query);
                });
                mainButtonsArea$el.find('button').on('click', function(ev) {
                    activeIndex = +$(this).attr('data-index');
                    lastQuery = $(this).attr('data-query');
                    mainButtonsArea$el.find('button').removeClass('active');
                    $(this).addClass('active');
                    searchInputText$El.val('');
                    sendQuery(lastQuery);
                });
                style$elSwitch.change(function() {
                    var main = $('#main');
                    switch ($(this).val()) {
                        case 'bw':
                            main.removeClass(lastUsedStyle);
                            main.addClass('bw');
                            lastUsedStyle = 'bw';
                            break;
                        case 'dracula':
                            main.addClass('dracula');
                            main.removeClass(lastUsedStyle);
                            lastUsedStyle = 'dracula';
                            break;
                    }
                });
            };

            /**
             * private function enableContentListeners
             **/
            var enableContentListeners = function() {
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
            };

            /**
             * private function enableContentListeners
             **/
            var renderContentTemplates = function() {
                var templateObj = {notes: notes};
                App.getRegionByKey('content').html(App.template('app/templates/content.hbs', templateObj));
                buttons$el = App.getRegionByKey('content').find('.btn-row-listener');
                checkboxes$El = App.getRegionByKey('content').find('.checkbox-row-listener');
            };

            /**
             * private function renderMajorTemplates
             **/
            var renderMajorTemplates = function() {
                var i, l, templateObj = {buttons: {}};
                for (i = 0, l = buttons.length; i < l; i++) {
                    templateObj.buttons[buttons[i]] = activeIndex === i ? 'active' : '';
                }
                App.getRegionByKey('major').html(App.template('app/templates/index.hbs', templateObj));
                searchInputText$El = App.getRegionByKey('major').find('#order_search');
                mainButtonsArea$el = App.getRegionByKey('major').find('.listener-main-buttons-area');
                style$elSwitch = App.getRegionByKey('major').find('.listener-style-switch');
                style$elSwitch.val(lastUsedStyle);
            };

            /**
             * private function sendQuery
             **/
            var sendQuery = function(query) {
                connectionManager.getList(function(object){
                    notes = object;
                    renderContentTemplates();
                    enableContentListeners();
                }, query);
            };

            /**
             *
             * public function load
             *
             * Modules entrance point
             *
             **/
            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                renderMajorTemplates();
                enableMajorListeners();
                renderContentTemplates();
                enableContentListeners();
                sendQuery(lastQuery);
            };
        };

        // Singleton Pattern
        if (inst === null) {
            inst = new Home();
        }

        // Register a module in the app. The URL #home will call this module
        App.registerModule({
            module: inst,
            name: 'home'
        });

        // Register a module in the app. The URL # will call this module
        App.registerModule({
            module: inst,
            name: ''
        });

        return Home;
    });
