var React = require("react"),
	Charts =  require("react-chartjs"),
	Color = require('./ColorTools'),
	Facade = require("./Facade");

var Line = Charts.Line,
	Bar = Charts.Bar,
	Pie = Charts.Pie;

Pie.defaults.global = {

	whether
};

function createLineAndBarData(){

	return	{
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
					{
						label: "My First dataset",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: "My Second dataset",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
	};
}

function majorGroupSale(name, quantity) {

	return {
		Name: name,
		Quantity: quantity
	};
}



function createPieData() {
	var sales = Facade.getMajorGroupSales().map(x =>
			majorGroupSale(x.MajorGroupName, x.Quantity)
	);

	var pieItems = sales.map(x =>
	{

		var colors = Color.getColors();

		return {
			value: x.Quantity,
			color: colors[0],
			highlight: colors[1],
			label: x.Name
		};
	});

	return pieItems;
}


module.exports = {
	"LineChart": React.createClass({ render: function() { return <Line data={createLineAndBarData()}/>; } }),
	"BarChart": React.createClass({ render: function() { return <Bar data={createLineAndBarData()}/>; } }),
	"PieChart": React.createClass({ render: function() { return <Pie data={createPieData()}/>; } })
};
