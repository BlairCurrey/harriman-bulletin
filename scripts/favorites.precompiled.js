(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['favorites'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul>\r\n    <li>Fruit: "
    + alias4(((helper = (helper = lookupProperty(helpers,"fruit") || (depth0 != null ? lookupProperty(depth0,"fruit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fruit","hash":{},"data":data,"loc":{"start":{"line":2,"column":15},"end":{"line":2,"column":24}}}) : helper)))
    + "</li>\r\n    <li>Sport: "
    + alias4(((helper = (helper = lookupProperty(helpers,"sport") || (depth0 != null ? lookupProperty(depth0,"sport") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sport","hash":{},"data":data,"loc":{"start":{"line":3,"column":15},"end":{"line":3,"column":24}}}) : helper)))
    + "</li>\r\n    <li>Music: "
    + alias4(((helper = (helper = lookupProperty(helpers,"music") || (depth0 != null ? lookupProperty(depth0,"music") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"music","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":24}}}) : helper)))
    + "</li>\r\n </ul>";
},"useData":true});
})();