(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['landmark'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h5 class=\"card-header\">Featured Landmark</h5>\r\n<div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"col-md-6 p-3\">\r\n            <h5 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":35},"end":{"line":5,"column":43}}}) : helper)))
    + "</h5>\r\n            <p class=\"card-text\"><small class=\"text-muted\">Coordinates: "
    + alias4(((helper = (helper = lookupProperty(helpers,"coordinates") || (depth0 != null ? lookupProperty(depth0,"coordinates") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coordinates","hash":{},"data":data,"loc":{"start":{"line":6,"column":72},"end":{"line":6,"column":87}}}) : helper)))
    + "</small></p>\r\n            <p class=\"card-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":48}}}) : helper)))
    + "</p>\r\n            <a href=\"#\" class=\"btn btn-primary\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":62}}}) : helper)))
    + "</a>\r\n        </div>\r\n        <div class=\"col-md-6 p-0\">\r\n            <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imgPath") || (depth0 != null ? lookupProperty(depth0,"imgPath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgPath","hash":{},"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":33}}}) : helper)))
    + "\" class=\"img-fluid float-right img-landmark\" alt=\"a picture of the bradley mine from the inside looking out\">\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();