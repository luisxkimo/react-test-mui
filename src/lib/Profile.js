/* global window, document, require */

var React = require("react"),
	MUI = require("material-ui"),
	Router = require('react-router');

var	RouteHandler = Router.RouteHandler;

var FontIcon = MUI.FontIcon;
var Dialog = MUI.Dialog;
var Checkbox = MUI.Checkbox;

var Profile = React.createClass({

	getChildContext: function() {
		return { muiTheme: this.props.theme };
	},

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},



	render: function() {

		return (<div onClick={this.props.changeCompany}>


			<span style={this.props.theme.customStyles.menuHeader} className="icon-user">

			</span>
			<span style={this.props.theme.customStyles.company} onClick={this.changeCompany}>
			{this.props.company}
				</span>
		</div>);
	}
});

module.exports = Profile;
