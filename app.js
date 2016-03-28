'use strict';
const express = require('express');
const app = express();

require('./config/express').addMiddleware(app); // add middleware
require('./routes')(app); // add routes

app.listen(process.env.PORT || 4000);

// export to enable supertest tests
module.exports = app;

