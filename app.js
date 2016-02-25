"use strict";
var express = require('express');

var app = express();


require('./config/express').addMiddleware(app); // add middleware
require('./routes')(app); // add routes 

var skierTerms = require("./public/json/skiterms");

// get terms
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

// add new term
app.post("/dictionary-api", function(req, res) {
	skierTerms.push(req.body);
	res.json(skierTerms);
});

// delete a term
app.delete("/dictionary-api/:term", function(req, res) {
	skierTerms = skierTerms.filter(function(definition) {
		return definition.term.toLowerCase() !== req.params.term.toLowerCase();
	});
	res.json(skierTerms);
});

app.listen(process.env.PORT || 4000, function() {
	console.log("Express server running on port 4000");
});

// export to enable supertest tests
module.exports = app;

