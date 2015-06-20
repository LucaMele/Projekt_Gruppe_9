define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var EditNote = function() {

            this.load = function() {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {
                    var234: 'test'
                }));

                App.getRegionByKey('major').html(App.template('app/templates/form.hbs', {
                    modus: 'edit'
                }));
            };
        };


        if (inst === null) {
            inst = new EditNote();
        }

        App.registerModule({
            module: inst,
            name: 'edit_note'
        });

        return EditNote;
    });
