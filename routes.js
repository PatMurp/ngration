"use strict";
module.exports = function(app) {

	var skierTerms = require("./public/json/skiterms");

	app.get("/dictionary-api", function(req, res) {
		res.json(skierTerms);
	});


	

	// All undefined asset or api routes should return a 404
	app.route('/:url(api|app|assets)/*')
		.get(function(req, res) {
			res.send(404);
		});
};