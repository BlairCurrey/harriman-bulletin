(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"list-inline-item px-2\"><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":11,"column":59},"end":{"line":11,"column":66}}}) : helper)))
    + "\" alt =\""
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":81}}}) : helper)))
    + "\"><i class=\"fa fa-lg fa-"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":105},"end":{"line":11,"column":113}}}) : helper)))
    + "\"></i></a></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"mb-3\"><a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"path") || (depth0 != null ? lookupProperty(depth0,"path") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data,"loc":{"start":{"line":31,"column":37},"end":{"line":31,"column":45}}}) : helper)))
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":31,"column":46},"end":{"line":31,"column":54}}}) : helper)))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"bg-primary\">\n<div class=\"container\">\n    <div class=\"row py-2\">\n        <div class=\"col-sm-6 text-center text-md-left\">\n            <!-- Social Media Bar -->\n            <h6 class=\"my-2 text-white\">Follow Us on Social Media!</h6>\n        </div>\n        <div class=\"col-sm-6 text-center text-md-right\">\n            <ul class=\"list-unstyled list-inline my-2\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"socialMedia") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":12,"column":25}}})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n</div>\n</div>\n<!-- Bottom Footer Section -->\n<div class=\"container text-center text-md-left\">\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <h6 class=\"font-weight-bold text-center text-md-left mt-3\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"heading") : stack1), depth0))
    + "</h6>\n        <hr class=\"bg-primary mb-4 mt-2\">\n        <p class=\"text-center text-md-left\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "</p>\n    </div>\n    <div class=\"col-md-4\">\n        <h6 class=\"font-weight-bold text-center text-md-left mt-3\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"siteNav") : depth0)) != null ? lookupProperty(stack1,"heading") : stack1), depth0))
    + "</h6>\n        <hr class=\"bg-primary mb-4 mt-2\">\n        <ul class=\"list-unstyled text-center text-md-left\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"siteNav") : depth0)) != null ? lookupProperty(stack1,"path") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":32,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n    <div class=\"col-md-4\">\n        <h6 class=\"font-weight-bold text-center text-md-left mt-3\">Find Harriman</h6>\n        <hr class=\"bg-primary mb-4 mt-2\">\n        <p class=\"text-center text-md-left\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"address") : stack1), depth0))
    + "</p>\n        <p class=\"text-center text-md-left\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</p>\n        <p class=\"text-center text-md-left\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"contact") : depth0)) != null ? lookupProperty(stack1,"phone") : stack1), depth0))
    + "</p>\n    </div>\n</div>\n</div>";
},"useData":true});
})();