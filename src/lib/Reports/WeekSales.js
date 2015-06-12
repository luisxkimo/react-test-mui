/**
 * Created by luis-sanchez on 6/12/15.
 */
var BaseReport = require('./BaseReport');

var React = BaseReport.React;

var simpleLineChartData = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
	series: [
		[65, 59, 80, 81, 56, 55, 40],
		[14, 10, 3.5, 26, 20],
		[28, 48, 40, 19, 86, 27, 90]
	]
};

var lineChartOptions = {
	low: 0,
	showArea: false
};

var WeekSales = React.createClass({

	render: function(){
		return (
			<div></div>
			/*<Chart data={simpleLineChartData} options={lineChartOptions} type={'Line'} />*/
		);
	}

});

module.exports = WeekSales;
