this["JST"] = this["JST"] || {};

this["JST"]["public/app/templates/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\"main\" class=\"form\">\n<form id=\"create\">\n    <div class=\"left formTitle\">\n        Title\n    </div>\n    <div class=\"left formContent\">\n        <input type=\"text\" name=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" required>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"left formTitle\">\n        Description\n    </div>\n    <div class=\"left formContent\">\n        <textarea rows=\"10\" cols=\"70\" name=\"description\" required>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"left formTitle\">\n        Importance\n    </div>\n    <div class=\"left formContent\">\n        <ul class=\"importance\">\n            <li class=\"left importance_pas\"></li>\n            <li class=\"left importance_pas\"></li>\n            <li class=\"left importance_pas\"></li>\n            <li class=\"left importance_pas\"></li>\n            <li class=\"left importance_pas\"></li>\n        </ul>\n        <input type=\"hidden\" name=\"rate\" id=\"rate\" value=\""
    + alias3(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"left formTitle\">\n        Due date\n    </div>\n    <div class=\"left formContent\"><input type=\"date\" value=\""
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" name=\"date\" min=\"today\" required>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"left formContent\">&nbsp;</div>\n    <div class=\"left formTitle\"><button class=\"listener-cancel\">Cancel</button>&nbsp;<button>Save</button></div>\n    "
    + alias3(((helper = (helper = helpers.modus || (depth0 != null ? depth0.modus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"modus","hash":{},"data":data}) : helper)))
    + "\n</form>\n</div>\n";
},"useData":true});

this["JST"]["public/app/templates/head.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"titleHead\">Luca's and Ricardo's project. CAS FEE 2015</div>\n";
},"useData":true});

this["JST"]["public/app/templates/index.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <option value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"main\">\n    <div class=\"buttons\">\n        <div class=\"left half\"><button id=\"create_note\">Create new Note</button></div>\n        <div class=\"left half\"><select><option>Black White-Style</option></select></div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"order\">\n        <div class=\"left\"><button id=\"order_finish\">By finished Date</button></div>\n        <div class=\"left\"><button id=\"order_created\">By created Date</button></div>\n        <div class=\"left\"><button id=\"order_importance\">By Importance</button></div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"items\">\n        <div class=\"title\">\n            <div class=\"left\">Nächsten Mittwoch</div>\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\n        </div>\n    </div>\n\n    <div class=\"clear\"></div>\n    <div class=\"item\">\n\n    </div>\n    <select class=\"select-listener-alfa\" style=\"min-width: 200px; height: 50px\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n    <button class=\"button-listener-alfa\">Edit</button>\n\n</div>\n\n\n<a href=\"#create_note\">MAKE NEW ON</a>\n";
},"useData":true});

this["JST"]["public/app/templates/list.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"main\">\n    <ul class=\"buttons\">\n        <li class=\"left half\"><button id=\"newnote\">Create new Note</button></li>\n        <li class=\"left half\">\n            <div class=\"styled-select\">\n                <select>\n                    <option>Black White-Style</option>\n                    <option>Black White-Style</option>\n                </select>\n            </div>\n        </li>\n    </ul>\n    <div class=\"clear\"></div>\n    <ul class=\"order\">\n        <li class=\"left\"><button id=\"order_finish\">By finished Date</button></li>\n        <li class=\"left\"><button id=\"order_created\">By created Date</button></li>\n        <li class=\"left\"><button id=\"order_importance\">By Importance</button></li>\n    </ul>\n    <div class=\"clear\"></div>\n    <div class=\"items\">\n        <div class=\"title\">\n            <div class=\"left\">Nächsten Mittwoch</div>\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\n        </div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"item\">\n\n    </div>\n</div>";
},"useData":true});