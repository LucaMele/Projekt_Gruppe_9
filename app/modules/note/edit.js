define([ 'app' ],
    function (App) {
        'use strict';
        var inst = null;

        var EditNote = function() {

            this.load = function() {
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
