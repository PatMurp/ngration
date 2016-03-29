'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

exports.addMiddleware = function middleware(app) {
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json()); // get info from html froms
  app.use(morgan('dev')); // log requests to console
  app.use(express.static('./public'));

  app.use(cookieParser());
  app.use(session({
    secret: 'a secret phrase',
    resave: true,
    saveUninitialized: true,
  }));

  app.use(errorHandler()); // Error handler must be last
};
