define([ 'app', 'validation' ],
    function (App) {
        'use strict';

        var FormElHandler = function() {
            var renderTemplates = function(object) {
                App.getRegionByKey('head').html(App.template('app/templates/head.hbs', {}));
                App.getRegionByKey('content').html('');
                return App.getRegionByKey('major').html(App.template('app/templates/form.hbs', object));
            };

            var formRunJs = function(form$El) {
                // rate
                var importance;
                var rateValue;
                var i;
                var inputs;
                function paintRate(rate){
                    importance = form$El.find('.importance li');
                    importance.removeClass('importance_act');
                    importance.addClass('importance_pas');
                    for(i=rate;i>0;i--){
                        form$El.find('.importance li:nth-child(' + i + ')').toggleClass('importance_act');
                    }
                }
                importance = form$El.find('.importance li');
                importance.click(function() {
                    rateValue = $(this).index()+1;
                    form$El.find('#rate').val(rateValue);
                    paintRate(rateValue);
                });
                importance.hover(function(){
                    rateValue = $(this).index()+1;
                    paintRate(rateValue);
                });
                importance.mouseout(function(){
                    paintRate(form$El.find('#rate').val());
                });
                paintRate(form$El.find('#rate').val());

                inputs = form$El.find('input');
                inputs.focusout(function(){
                    $(this).val($.trim($(this).val()));
                });

            };

            var formValidation = function(form$El, region$el) {
                return true;//$("#create").validate();
            };

            this.handle = function(submitFormHandler, object) {
                 var region$el = renderTemplates(object),
                     form$El =region$el.find('form');
                formRunJs(form$El);
                form$El.on('submit', function(ev) {
                    ev.preventDefault();
                    if(formValidation(form$El, region$el)) {
                        submitFormHandler(ev, form$El);
                    }
                });
                region$el.find('.listener-cancel').on('click', function() {
                    location.href = "#";
                });
            };

        };

        return FormElHandler;
    });
