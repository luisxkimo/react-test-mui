/**
 * Created by luis-sanchez on 6/9/15.
 */
var Color = require("./ColorTools");

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

// Para que el usuario seleccione que empresa quiere ver nada más acceder a MyAgora
Facade.getMainCompany = function () {

	return companies[0].name;
};

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

Facade.getMajorGroupSales = function() {

	var data = [
		{
			MajorGroupName: 'Bebidas',
			Quantity: 300

		},
		{
			MajorGroupName: 'Comida',
			Quantity: 400
		},
		{
			MajorGroupName: 'Servicios',
			Quantity: 500
		}
	];

	data.map(x=>{

		var colored = Color.getColors();
		x.RealColor = colored[0];
		x.LightColor = colored[1];

	});

	return data;
};

module.exports = Facade;
