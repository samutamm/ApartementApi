const pg = require('pg');
const config = require('../../config/config');
const conString = config.db.address;
const queries = require('./apartements.queries.json');
const Apartement = require('./Apartement');

function addToDBIfNotExists(apartement, callback) {
  pg.connect(conString, function(err, client, done) {
      client.query(getQuery(queries.selectByName), [apartement.name], function(err, results) {
        if(results.rows.length > 0) {
          done();
          callback(err, results);
        } else {
          client.query(getQuery(queries.addApartement), apartement.asAList(), function(err, results) {
            done();
            callback(err, results);
          });
        }
      })
  });
}

exports.init = function(callback) {
  const test = new Apartement({
    name: 'Test', address: '20 Avenue Albert Einstein',
    city: 'VILLEURBANE', agent: 'Ville Välittäjä', price: 750
  });
  pg.connect(conString, function(err, client, done) {
    client.query(getQuery(queries.createTable), function(err, result) {
      addToDBIfNotExists(test, function(err, result) {
        callback()
      });
    });
  });
}

function getQuery(list) {
  return list.reduce(function(prev, current, i, arr) {
    return prev + current;
  });
}
