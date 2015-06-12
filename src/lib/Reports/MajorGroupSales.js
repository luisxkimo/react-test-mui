/**
 * Created by luis-sanchez on 6/12/15.
 */
var BaseReport = require('./BaseReport');

var Pie = BaseReport.Charts.Pie;
var React  = BaseReport.React;

function createPieData() {
	var sales = BaseReport.Facade.getMajorGroupSales();

	var pieItems = sales.map(x =>
	{
		return {
			value: x.Quantity,
			color: x.RealColor,
			highlight: x.LightColor,
			label: x.MajorGroupName
		};
	});

	/*pieItems[0] = {
		value: 300,
		color: "#F7464A",
		highlight: "#FF5A5E",
		label: "Bebidas"

	};*/

	return pieItems;
}

function createPieOptions() {

	return {

		legendTemplate : "<table style=\"list-style-type: none;\" class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><tr><td width=\"30px\" ><span style=\"background-color: <%=segments[i].fillColor%>\">&nbsp&nbsp&nbsp</span></td><td align=\"left\"><%if(segments[i].label){%><%=segments[i].label%><%}%></td></tr><%}%></table>",
		percentageInnerCutout : 20

	};
}

function createLeyend(html) {
	return {
		__html:html
	};
}
var PieReport = React.createClass({

	propTypes: {
		chartOptions: React.PropTypes.object,
		leyend: React.PropTypes.string
	},

	getInitialState: function(){

		return {
			chartOptions: {},
			leyend:""
		};
	},

	componentDidMount: function(){
		var ly = this.refs.pieCharting.getChart().generateLegend();
		this.setState({leyend:ly});
	},

	render: function() {

		var chart = <Pie ref="pieCharting" data={createPieData()} options={createPieOptions()}/>;

		return <div>
			<div id="charDiv">{chart}</div>
			<div dangerouslySetInnerHTML={createLeyend(this.state.leyend)}></div>
		</div>;

	}

});

module.exports = PieReport;
