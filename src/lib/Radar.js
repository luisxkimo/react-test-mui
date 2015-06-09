/* global window, document, require */

var React = require("react"),
	MUI = require("material-ui"),
	Router = require('react-router'),
	RadarChart = require("react-chartjs").Radar;

var	RouteHandler = Router.RouteHandler;

var data = {
	labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 96, 27, 100]
		}
	]
};

var chartStyleOptions = {
	scaleShowLine : true,
	angleShowLineOut : true,
	scaleShowLabels : false,
	scaleBeginAtZero : true,
	angleLineColor : "rgba(0,0,0,.1)",
	angleLineWidth : 1,
	pointLabelFontFamily : "'Arial'",
	pointLabelFontStyle : "normal",
	pointLabelFontSize : 10,
	pointLabelFontColor : "#666",
	pointDot : true,
	pointDotRadius : 3,
	pointDotStrokeWidth : 1,
	pointHitDetectionRadius : 20,
	datasetStroke : true,
	datasetStrokeWidth : 2,
	datasetFill : true

};

var Radar = React.createClass({

	render: function() {
		return <RadarChart data={data} options={chartStyleOptions}/>;
	}
});

module.exports = Radar;
