"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var lusca = require('lusca');

exports.addMiddleware = function(app) {
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json()); // get info from html froms
	app.use(morgan('dev')); // log requests to console
	app.use(express.static('./public'));

	app.use(cookieParser());
	app.use(session({
		secret: 'a secret phrase',
		resave: true,
		saveUninitialized: true
	}));

	app.use(lusca({
		xframe:'DENY' // prevent clickjacking
	}));

	app.use(errorHandler()); // Error handler must be last
};