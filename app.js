"use strict";
var express = require('express');

var app = express();


require('./config/express').addMiddleware(app); // add middleware
require('./routes')(app); // add routes 

var skierTerms = require("./public/json/skiterms");

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(process.env.PORT || 4000, function() {
	console.log("Express server running on port 4000");
});

// export to enable supertest tests
module.exports = app;

