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
			company: facade.getMainCompany()
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

		var companyDialog = null;

			var actions = [
				{
					text: 'Seleccionar',
					onClick: this.selectNewCompany,
					ref: 'submit'
				}
			];

			companyDialog = (
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

		return companyDialog;
	},

	selectNewCompany: function () {

		var selectCompany = this.refs.companyGroup.getSelectedValue();
		var companyName = facade.getCompanyName(selectCompany);

		this.setState({company: companyName});

		this.refs.dialog.dismiss();

	},

	getCompanyTitle: function(routes) {

		return routes[routes.length - 1].handler.label;
	},

	render: function() {

		var appTitle = this.getCompanyTitle(this.getRoutes());
		var header = <Profile theme={theme} company={this.state.company} changeCompany={this.changeCompany} />;
		var companyDialog = this.createDialog();
		var iconRight = 'icon-envelop';
		return <div>
			{companyDialog}
					<AppBar title={appTitle} iconClassNameRight={iconRight} onLeftIconButtonTouchTap={this.toggleMenu}/>
					<LeftNav ref="leftNav" header={header} menuItems={this.state.menuItems} docked={false} onChange={this.onMenuItemSelected}/>
					<RouteHandler/>
				</div>;
	}
});

module.exports = App;
