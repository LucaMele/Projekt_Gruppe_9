define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var CreateNote = function() {

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {
                    var234: 'test'
                }));


                App.getRegionByKey('major').html(App.template('app/templates/form.hbs', {
                    modus: 'create'
                }));
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
