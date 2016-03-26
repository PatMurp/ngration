'use strict';
const express = require('express');

const app = express();

require('./config/express').addMiddleware(app); // add middleware
require('./routes')(app); // add routes

let skierTerms = require('./public/json/skiterms');

// get terms
app.get('/dictionary-api', (req, res) => {
  res.json(skierTerms);
});

// add new term
app.post('/dictionary-api', (req, res) => {
  skierTerms.push(req.body);
  res.json(skierTerms);
});

// delete a term
app.delete('/dictionary-api/:term', (req, res) => {
  skierTerms = skierTerms.filter((definition) =>
     definition.term.toLowerCase() !== req.params.term.toLowerCase()
  );
  res.json(skierTerms);
});

app.listen(process.env.PORT || 4000);

// export to enable supertest tests
module.exports = app;

