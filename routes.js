'use strict';
module.exports = function Route(app) {
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
    .get((req, res) => res.send(404));
};
