/* global window, document, require */

var $ = require("jquery"),
	injectTapEventPlugin = require("react-tap-event-plugin"),
	routes = require("./Routes").run;


$(window).ready(function() {
	
	injectTapEventPlugin();
	routes();

});

