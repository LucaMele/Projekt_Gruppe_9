define([ 'app' ],
    function (App) {
        'use strict';

        var FormElHandler = function() {

            var renderTemplates = function(object) {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                return App.getRegionByKey('major').html(App.template('app/templates/form.hbs', object));
            };

            var formRunJs = function(form$El) {
               // todo @ricardo -> hier bitte form code
            };

            var formValidation = function(form$El) {
                // todo @ricardo -> hier bitte form code return true if validation ok!

                return true;
            };

            this.handle = function(submitFormHandler, object) {
                 var region$el = renderTemplates(object),
                     form$El =region$el.find('form');
                formRunJs(form$El);
                form$El.on('submit', function(ev) {
                    ev.preventDefault();
                    if(formValidation(form$El)) {
                        submitFormHandler(ev, form$El);
                    }
                });
                region$el.find('.listener-cancel').on('click', function() {
                    location.href = "";
                });
            };

        };

        return FormElHandler;
    });
