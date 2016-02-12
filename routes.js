"use strict";
module.exports = function(app) {


	app.get('/', function(req, res) {
		res.render('index');
	});

	// All undefined asset or api routes should return a 404
	app.route('/:url(api|app|assets)/*')
		.get(function(req, res) {
			res.send(404);
		});
};