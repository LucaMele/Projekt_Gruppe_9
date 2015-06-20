this["JST"] = this["JST"] || {};

this["JST"]["public/app/templates/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"main\">\r\n\r\n    <div class=\"left formTitle\">\r\n        Title\r\n    </div>\r\n    <div class=\"left formContent\">\r\n        <input type=\"text\">\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n    <div class=\"left formTitle\">\r\n        Description\r\n    </div>\r\n    <div class=\"left formContent\">\r\n        <textarea rows=\"10\" cols=\"70\"></textarea>\r\n    </div>\r\n    <div style=\"clear:all\"></div>\r\n\r\n\r\n\r\n    "
    + this.escapeExpression(((helper = (helper = helpers.modus || (depth0 != null ? depth0.modus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"modus","hash":{},"data":data}) : helper)))
    + "\r\n\r\n</div>";
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