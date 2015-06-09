/**
 * Created by luis-sanchez on 6/3/15.
 */

var Reports = require("./Reports"),
	mui = require('material-ui');

var MenuItem = mui.MenuItem;
var Builder = module.exports = {};

Builder.createReportMenuOptions = function() {

	var items = [{ type: MenuItem.Types.SUBHEADER, text: 'Informes' }];

	var reports = Reports.map( function(item) {
		return {
			route: item.routeName,
			text: item.label
		};
	});
	var options = [{ type: MenuItem.Types.SUBHEADER, text: 'Opciones' }];

	return items.concat(reports).concat(options);
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

