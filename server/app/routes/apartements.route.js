var Apartements = require('../controllers/apartements.controller.js');

module.exports = function(app) {
  app.get('/api/apartements', Apartements.all);
}
