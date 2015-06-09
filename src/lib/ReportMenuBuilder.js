/**
 * Created by luis-sanchez on 6/3/15.
 */

var Reports = require("./Reports");

var Builder = module.exports = {};

Builder.createReportMenuOptions = function() {

	return Reports.map( function(item) {
		return {
			route: item.routeName,
			text: item.label
		};
	});
};

Builder.getTitleName = function(urlPath) {

	var titleNode = "Bienvenido a MyAgora";
	for(var i = 0; i < Reports.length; i++) {
		if(Reports[i].routePath === urlPath) {
			titleNode = Reports[i].label;
		}

	}
	return titleNode;
};

