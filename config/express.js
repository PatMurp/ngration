'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const helmet = require('helmet');

exports.addMiddleware = function middleware(app) {
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json()); // get info from html froms
  app.use(morgan('dev')); // log requests to console
  app.use(express.static('./public'));
  app.use(errorHandler()); // Error handler must be last
};
