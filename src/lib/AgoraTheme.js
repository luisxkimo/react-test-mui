var MUI = require("material-ui");

var Colors = MUI.Styles.Colors,
	ColorManipulator = MUI.Utils.ColorManipulator;

var theme = {
		getPalette: function() {
			return {
				primary1Color: Colors.blue700,
				primary2Color: Colors.blue500,
				primary3Color: Colors.blue300,
				accent1Color: Colors.deepOrangeA700,
				accent2Color: Colors.deepOrangeA400,
				accent3Color: Colors.deepOrangeA200,
				canvasColor: Colors.white,
				borderColor: Colors.grey300,
				disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
			};
		},
		getComponentThemes: function(palette) {
			return {
				appBar: {
					color: Colors.blue700,
					textColor: MUI.Styles.Typography.textFullWhite
				}

			};
		}
};
theme.customStyles = {};

theme.customStyles.menuHeader = {
	cursor: 'pointer',
	fontSize: '24px',
	color: MUI.Styles.Typography.textFullWhite,
	lineHeight: MUI.Styles.Spacing.desktopKeylineIncrement + 'px',
	fontWeight: MUI.Styles.Typography.fontWeightLight,
	backgroundColor: theme.getPalette().primary1Color,
	paddingLeft: MUI.Styles.Spacing.desktopGutter,
	paddingTop: '0px',
	marginBottom: '8px'
};

theme.customStyles.company = {
	marginLeft: '10px',
	color: MUI.Styles.Typography.textFullWhite

};

theme.customStyles.main = {

	textAlign: 'center'

};



module.exports = theme;
