define([ 'app' , 'helpers/connection'],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var CreateNote = function() {

            var region$el;
            var form$el;

            var renderTemplates = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                region$el = App.getRegionByKey('major').html(App.template('app/templates/form.hbs', {
                    description: '',
                    title: '',
                    date: ''
                }));
            };

            var submitFormHandler = function(ev) {
                var serializedForm;
                ev.preventDefault();
                serializedForm = form$el.serializeArray();
                connectionManager.create(function() {location.href = ""; }, serializedForm);
            };

            var enableListeners = function() {
                form$el = region$el.find('form');
                form$el.on('submit', submitFormHandler);
                region$el.find('.listener-cancel').on('click', function() {
                    location.href = "";
                });
            };

            this.load = function() {
                renderTemplates();
                enableListeners();
            };
        };


        if (inst === null) {
            inst = new CreateNote();
        }

        App.registerModule({
            module: inst,
            name: 'create_note'
        });

        return CreateNote;
    });
