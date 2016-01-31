process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./server/config/express');
const postgres = require('./server/config/postgres');

const app = express();

postgres.init(function() {
  app.set('port', (process.env.PORT || 3015));

  const server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('ApartementApi started at http://localhost:%s', port);
  });
});

module.exports = app;
