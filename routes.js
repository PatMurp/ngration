"use strict";
module.exports = function(app) {

	var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
	];

	app.get("/dictionary-api", function(req, res) {
		res.json(skierTerms);
	});


	

	// All undefined asset or api routes should return a 404
	app.route('/:url(api|app|assets)/*')
		.get(function(req, res) {
			res.send(404);
		});
};