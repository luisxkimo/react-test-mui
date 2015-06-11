/**
 * Created by luis-sanchez on 6/11/15.
 */

var randomColor = require('randomcolor');

var Color = module.exports = {};

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
}

Color.getColors = function(){

	var colors = [];
	var hex = randomColor();
	var color = randomColor({
		hue: hex
	});


	colors[0] = color;
	colors[1] = colorLuminance(color, 0.2);

	return colors;
};

module.exports = Color;


