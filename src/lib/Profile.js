/* global window, document, require */

var React = require("react");

var Profile = React.createClass({

	render: function() {

		return (
			<div style={this.props.theme.customStyles.menuHeader} onClick={this.props.changeCompany}>
				<span className="icon-user"> </span>
				<span>
				{this.props.company}
				</span>
			</div>);
	}
});

module.exports = Profile;
