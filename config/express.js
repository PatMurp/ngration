"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var cors = require('cors');

exports.addMiddleware = function(app) {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json()); // get info from html froms
	app.use(morgan('dev')); // log requests to console
	app.use(express.static('./public'));
	app.use(cors());
	app.use(errorHandler()); // Error handler must be last
};