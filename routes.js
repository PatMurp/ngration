'use strict';
module.exports = function routes(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
  .get((req, res) => {
    res.send(404);
  });
};
