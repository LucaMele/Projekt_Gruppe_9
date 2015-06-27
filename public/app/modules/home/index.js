define([ 'app', 'helpers/connection' ],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var Home = function() {

            var buttons$el, checkboxes$El, mainButtonsArea$el, searchInputText$El;

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
            };

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

            var renderContentTemplates = function() {
                var templateObj = {notes: notes};
                App.getRegionByKey('content').html(App.template('app/templates/content.hbs', templateObj));
                buttons$el = App.getRegionByKey('content').find('.btn-row-listener');
                checkboxes$El = App.getRegionByKey('content').find('.checkbox-row-listener');
            };

            var renderMajorTemplates = function() {
                var i, l, templateObj = {buttons: {}};
                for (i = 0, l = buttons.length; i < l; i++) {
                    templateObj.buttons[buttons[i]] = activeIndex === i ? 'active' : '';
                }
                App.getRegionByKey('major').html(App.template('app/templates/index.hbs', templateObj));
                searchInputText$El = App.getRegionByKey('major').find('#order_search');
                mainButtonsArea$el = App.getRegionByKey('major').find('.listener-main-buttons-area');
            };

            var sendQuery = function(query) {
                connectionManager.getList(function(object){
                    notes = object;
                    renderContentTemplates();
                    enableContentListeners();
                }, query);
            };

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                renderMajorTemplates();
                enableMajorListeners();
                renderContentTemplates();
                enableContentListeners();
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
