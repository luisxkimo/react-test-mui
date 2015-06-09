/**
 * Created by luis-sanchez on 6/3/15.
 */

var React = require("react"),
	App = require("./App"),
	Charts = require("./Charts"),
	Radar = require("./Radar"),
	Router = require("react-router"),
	Reports = require("./Reports"),
	Builder = require('./ReportMenuBuilder');

var Route = Router.Route;

function createRoute(name, path, handler, label) {

	handler.label = label;
	var route = (<Route key={path} name={name} path={path} handler={handler}>
	</Route>);

	return route;
}

function configureReportRoutes() {

	return Reports.map(function (report) {
		return createRoute(report.routeName, report.routePath, report.handler, report.label);
	});
}

function configureControlRoutes() {

	var routes = [];

	/*routes.push(createRoute("user", "/user", null));*/

	return routes;
}

function initialiceRoutes() {

	var reports = configureReportRoutes();
	var controls = configureControlRoutes();

	App.label = "My Agora";
	return 	(<Route name="app" path="/" handler={App}>
		{reports}
		{controls}
	</Route>);

}

function run() {

	Router.run(initialiceRoutes(), function (Handler, state) {
		React.render(<Handler/>, document.body);
	});
}

module.exports = {
	run: run
};
