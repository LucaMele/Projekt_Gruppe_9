this["JST"] = this["JST"] || {};

this["JST"]["public/app/templates/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"main\" class=\"form\">\r\n<form id=\"create\">\r\n    <div class=\"left formTitle\">\r\n        Title\r\n    </div>\r\n    <div class=\"left formContent\">\r\n        <input type=\"text\" name=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"left formTitle\">\r\n        Description\r\n    </div>\r\n    <div class=\"left formContent\">\r\n        <textarea rows=\"10\" cols=\"70\" name=\"description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"left formTitle\">\r\n        Importance\r\n    </div>\r\n    <div class=\"left formContent\">\r\n        <ul class=\"importance\">\r\n            <li class=\"left importance_pas\"></li>\r\n            <li class=\"left importance_pas\"></li>\r\n            <li class=\"left importance_pas\"></li>\r\n            <li class=\"left importance_pas\"></li>\r\n            <li class=\"left importance_pas\"></li>\r\n        </ul>\r\n        <input type=\"hidden\" name=\"rate\" id=\"rate\" value=\""
    + alias3(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"left formTitle\">\r\n        Due date\r\n    </div>\r\n    <div class=\"left formContent\"><input type=\"date\" value=\""
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" name=\"date\" min=\"today\">\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"left formContent\">&nbsp;</div>\r\n    <div class=\"left formTitle\"><button>Cancel</button>&nbsp;<button>Save</button></div>\r\n    "
    + alias3(((helper = (helper = helpers.modus || (depth0 != null ? depth0.modus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"modus","hash":{},"data":data}) : helper)))
    + "\r\n\r\n    <script>\r\n\r\n        function paintRate(rate){\r\n            $('.importance li').removeClass('importance_act');\r\n            $('.importance li').addClass('importance_pas');\r\n            for(i=rate;i>0;i--){\r\n                $('.importance li:nth-child(' + i + ')').toggleClass('importance_act');\r\n            }\r\n        }\r\n        // get value and paint\r\n        paintRate($('#rate').val());\r\n\r\n        $('.importance li').click(function() {\r\n            rateValue = $(this).index()+1;\r\n            $('#rate').val(rateValue);\r\n            paintRate(rateValue);\r\n        });\r\n\r\n        $('.importance li').hover(function(){\r\n            rateValue = $(this).index()+1;\r\n            paintRate(rateValue);\r\n        });\r\n\r\n\r\n    </script>\r\n</form>\r\n</div>\r\n";
},"useData":true});

this["JST"]["public/app/templates/head.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Luca und ricardos projekt head\r\n";
},"useData":true});

this["JST"]["public/app/templates/index.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"main\">\r\n    <div class=\"buttons\">\r\n        <div class=\"left half\"><button id=\"newnote\">Create new Note</button></div>\r\n        <div class=\"left half\"><select><option>Black White-Style</option></select></div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"order\">\r\n        <div class=\"left\"><button id=\"order_finish\">By finished Date</button></div>\r\n        <div class=\"left\"><button id=\"order_created\">By created Date</button></div>\r\n        <div class=\"left\"><button id=\"order_importance\">By Importance</button></div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"items\">\r\n        <div class=\"title\">\r\n            <div class=\"left\">Nächsten Mittwoch</div>\r\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"item\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<a href=\"#create_note\">MAKE NEW ON</a>\r\n\r\n<a href=\"#edit_note\">EDIT NEW ON</a>\r\n";
},"useData":true});

this["JST"]["public/app/templates/list.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"main\">\r\n    <ul class=\"buttons\">\r\n        <li class=\"left half\"><button id=\"newnote\">Create new Note</button></li>\r\n        <li class=\"left half\">\r\n            <div class=\"styled-select\">\r\n                <select>\r\n                    <option>Black White-Style</option>\r\n                    <option>Black White-Style</option>\r\n                </select>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n    <div class=\"clear\"></div>\r\n    <ul class=\"order\">\r\n        <li class=\"left\"><button id=\"order_finish\">By finished Date</button></li>\r\n        <li class=\"left\"><button id=\"order_created\">By created Date</button></li>\r\n        <li class=\"left\"><button id=\"order_importance\">By Importance</button></li>\r\n    </ul>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"items\">\r\n        <div class=\"title\">\r\n            <div class=\"left\">Nächsten Mittwoch</div>\r\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"item\">\r\n\r\n    </div>\r\n</div>";
},"useData":true});