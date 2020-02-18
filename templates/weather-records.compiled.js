(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['weather-records'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\n            <th scope=\"row\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":37}}}) : helper)))
    + "</th>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"average") || (depth0 != null ? lookupProperty(depth0,"average") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"average","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":27}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"high") || (depth0 != null ? lookupProperty(depth0,"high") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":24}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"low") || (depth0 != null ? lookupProperty(depth0,"low") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":23}}}) : helper)))
    + "</td>\n            <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"precipitation") || (depth0 != null ? lookupProperty(depth0,"precipitation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precipitation","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":33}}}) : helper)))
    + "</td>\n        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h3>Prior Season's Weather Figures</h3>\n<h5 class=\"mt-3\"><strong>Weather Station: </strong>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":63}}}) : helper)))
    + "</h1>\n<table class=\"table\">\n    <caption>Past Season's Weather Figures</caption>\n    <thead>\n        <tr>\n            <th scope=\"col\">Month</th>\n            <th scope=\"col\">Average Temperature</th>\n            <th scope=\"col\">High Temperature</th>\n            <th scope=\"col\">Low Temperature</th>\n            <th scope=\"col\">Total Precipitation</th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"month") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "")
    + "        </tr>\n    </tbody>\n</table>";
},"useData":true});
})();