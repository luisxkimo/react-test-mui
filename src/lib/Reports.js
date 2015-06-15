/**
 * Created by luis-sanchez on 6/3/15.
 */
var Charts = require("./Charts"),
	PieChart = require('./Reports/MajorGroupSales'),
	WeekSales = require('./Reports/WeekSales'),
	Radar = require("./Radar");

var BarChart = Charts.BarChart,
	LineChart = Charts.LineChart;

var Reports = [
	{
		routeName: "pie",
		routePath: "/pie",
		label: "Pie Report",
		handler: PieChart
	},
	{
		routeName:"bar",
		routePath:"/bar",
		label:"Bar Report",
		handler: BarChart
	},
	{
		routeName:"line",
		routePath:"/line",
		label:"Week Line Report",
		handler: WeekSales
	},
	{
		routeName:"radar",
		routePath:"/radar",
		label:"Radar Report",
		handler: Radar
	}
];

module.exports = Reports;
