define([ 'app' , 'helpers/connection'],
    function (App, connectionManager) {
        'use strict';
        var inst = null;

        var CreateNote = function() {

            var region$el;
            var form$el;

            var renderTemplates = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {
                    var234: 'test'
                }));
                region$el = App.getRegionByKey('major').html(App.template('app/templates/form.hbs', {
                    modus: 'create'
                }));
            };

            var submitFormHandler = function(ev) {
                ev.preventDefault();
                console.log(form$el.serializeObject());
            };

            var enableListeners = function() {
                form$el = region$el.find('form');
                form$el.on('submit', submitFormHandler);
            };

            this.load = function() {
                renderTemplates();
                enableListeners()
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
