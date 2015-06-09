/* global window, document, require */

var React = require("react"),
	MUI = require("material-ui"),
	Router = require("react-router"),
	Builder = require('./ReportMenuBuilder'),
	facade = require('./Facade'),
	Profile = require('./Profile');

var AppBar = MUI.AppBar,
	LeftNav = MUI.LeftNav,
	Styles = MUI.Styles,
	ThemeManager = new MUI.Styles.ThemeManager();

var Dialog = MUI.Dialog;
var RadioButton = MUI.RadioButton;
var RadioButtonGroup  = MUI.RadioButtonGroup;

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


var theme = require("./AgoraTheme");
ThemeManager.setTheme(theme);

var App = React.createClass({

	mixins: [Router.Navigation,
			Router.State],

	propTypes: {
		change: React.PropTypes.bool,
		company: React.PropTypes.string
	},

	getInitialState: function() {
		return {
			menuItems: Builder.createReportMenuOptions(),
			change: false,
			company: "Initial State"

		};
	},

	/*Esto sirve para que los hijos puedan leer y aplicar el Theme principal*/
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
		return { muiTheme: ThemeManager.getCurrentTheme() };
	},

	toggleMenu: function(){
		this.refs.leftNav.toggle();
	},

	onMenuItemSelected: function(e, selectedIndex, menuItem) {
		this.transitionTo(menuItem.route);
	},

	changeCompany: function () {

		this.setState({ change : true });
		this.refs.leftNav.toggle();
		this.refs.dialog.show();
	},

	createDialog: function () {

		var element = null;

			var actions = [
				{
					text: 'Seleccionar',
					onClick: this.selectNewCompany,
					ref: 'submit'
				}
			];

			element = (
				<Dialog
					ref="dialog"
					title= "Seleccione establecimiento"
					actions = {actions}
					modal = {false}>
				Seleccione un restaurante para mostrar los datos
					<RadioButtonGroup
						name="selectCompany"
						defaultSelected="1"
						ref="companyGroup">
						<RadioButton
							value="1"
							label="Bar Antonio" />
						<RadioButton
							value="2"
							label="Bar Juan" />
						<RadioButton
							value="3"
							label="Bar Felipe" />
					</RadioButtonGroup>
				</Dialog>);

		return element;
	},

	selectNewCompany: function () {
		var selectCompany = this.refs.companyGroup.getSelectedValue();
		var companyName = facade.getCompanyName(selectCompany);

		this.setState({company: companyName});

		this.refs.dialog.dismiss();

	},

	render: function() {

		var activeRoutes = this.getRoutes();
		var activeTitle = activeRoutes[activeRoutes.length - 1].handler.label;
		var headerP = <Profile theme={theme} company={this.state.company} changeCompany={this.changeCompany}/>;

		var popUp = this.createDialog();

		return <div>
			{popUp}
					<AppBar title={activeTitle} iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.toggleMenu}/>
					<LeftNav ref="leftNav" header={headerP} menuItems={this.state.menuItems} docked={false} onChange={this.onMenuItemSelected}/>


					<RouteHandler/>
				</div>;
	}
});

module.exports = App;
