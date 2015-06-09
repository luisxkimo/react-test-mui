var MUI = require("material-ui");

var Colors = MUI.Styles.Colors,
		ColorManipulator = MUI.Utils.ColorManipulator;

var LightTheme = {
		getPalette: function() {
			return {
				textColor: Colors.fullWhite,
				canvasColor: '#303030',
				borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3), //Colors.grey300
				disabledColor: ColorManipulator.fade(Colors.fullWhite, 0.3)
			};
		},
		getComponentThemes: function(palette) {
			var cardColor = Colors.grey800;
			return {
				appBar: {
					color: Colors.indigo900
				},
				
				leftNav: {
					color: Colors.indigo900
				},
				menu: {
					containerBackgroundColor: Colors.indigo900
				}
			};
		}
};
LightTheme.customStyles = {};

LightTheme.customStyles.menuHeader = {
	cursor: 'pointer',
	fontSize: '24px',
	color: MUI.Styles.Typography.textFullWhite,
	lineHeight: MUI.Styles.Spacing.desktopKeylineIncrement + 'px',
	fontWeight: MUI.Styles.Typography.fontWeightLight,
	backgroundColor: LightTheme.getPalette().primary1Color,
	paddingLeft: MUI.Styles.Spacing.desktopGutter,
	paddingTop: '0px',
	marginBottom: '8px'
};

LightTheme.customStyles.company = {

	marginLeft: '10px',
	fontSize: '24px',
	color: MUI.Styles.Typography.textFullWhite,
	lineHeight: MUI.Styles.Spacing.desktopKeylineIncrement + 'px',
	backgroundColor: LightTheme.getPalette().primary1Color,
	cursor: 'pointer'
};

module.exports = LightTheme;
