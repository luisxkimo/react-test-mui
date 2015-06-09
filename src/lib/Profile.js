/* global window, document, require */

var React = require("react"),
	MUI = require("material-ui"),
	Router = require('react-router');

var	RouteHandler = Router.RouteHandler;

var FontIcon = MUI.FontIcon;

var Profile = React.createClass({

	render: function() {

		return (<div style={this.props.theme.customStyles.menuHeader} onClick={this.props.changeCompany}>

			<span className="icon-user">
			</span>

			<span style={this.props.theme.customStyles.company}>
				{this.props.company}
			</span>
		</div>);
	}
});

module.exports = Profile;
