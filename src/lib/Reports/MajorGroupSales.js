/**
 * Created by luis-sanchez on 6/12/15.
 */
var BaseReport = require('./BaseReport');
var theme = require("../AgoraTheme");
var Menu = require('material-ui').Menu;

var Pie = BaseReport.Charts.Pie;
var React  = BaseReport.React;
var Sales = BaseReport.Facade.getMajorGroupSales();



function createPieData() {
	var sales = Sales;

	var pieItems = sales.map(x =>
	{
		return {
			value: x.Quantity,
			color: x.RealColor,
			highlight: x.LightColor,
			label: x.MajorGroupName
		};
	});
	return pieItems;
}

function createPieOptions() {

	return {

		legendTemplate : "<table style=\"list-style-type: none;\" class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><tr><td width=\"30px\" ><span style=\"background-color: <%=segments[i].fillColor%>\">&nbsp&nbsp&nbsp</span></td><td align=\"left\"><%if(segments[i].label){%><%=segments[i].label%><%}%></td></tr><%}%></table>",
		percentageInnerCutout : 20

	};
}

function createGridConfiguration() {

	var count = 1;


	return Sales.map(x=> {

		var z = {
			payload: '' + count,
			text: '' + x.MajorGroupName,
			number: '' + x.Quantity
		};
		count = count + 1;

		return z;
	});

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
		var items = createGridConfiguration();
		return <div>
					<div>
						<div style={theme.customStyles.chart}>{chart}</div>
						<div dangerouslySetInnerHTML={createLeyend(this.state.leyend)}></div>
					</div>
			<Menu style={theme.customStyles.chart} menuItems={items}/>
		</div>;

	}

});

module.exports = PieReport;
