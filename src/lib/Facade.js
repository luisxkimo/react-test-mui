/**
 * Created by luis-sanchez on 6/9/15.
 */

var companies = [
	{
		value: "1",
		name: "Bar Antonio"
	},
	{
		value: "2",
		name: "Bar Juan"
	},
	{
		value: "3",
		name: "Bar Felipe"
	}
];

var Facade = module.exports = {};

Facade.getCompanyName = function(value) {

	var companyName = "My Agora";

	for(var i = 0; i < companies.length; i++) {

		if(companies[i].value === value) {

			companyName = companies[i].name;
			return companyName;
		}
	}
	return companyName;

};

module.exports = Facade;
