const pg = require('pg');
const config = require('../../config/config');
const conString = config.db.address;
const queries = require('./apartements.queries.json');
const Apartement = require('./Apartement.js');

function addToDBIfNotExists(apartement, callback) {
  connect(function(err, client, done) {
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

exports.getAll = function(callback) {
  connect(function(err, client, done) {
    client.query(getQuery(queries.selectAll), function(err, result) {
      done();
      callback(err, result);
    });
  });
}

exports.addApartement = function(apartement, callback) {
  addToDBIfNotExists(apartement, function (err, results) {
    callback(err, results);
  });
}

exports.deleteAll = function(passphrase, callback) {
    if (passphrase === 'ONLY FOR DEVELOPMENT USE') {
      connect(function(err, client, done) {
        client.query(getQuery(queries.dropTable), function(err, results) {
          done();
          callback(err, results);
        });
      });
    } else {
      callback('Only dev use', 'Only dev use');
    }
}

exports.init = function(callback) {
  const test = new Apartement({
    name: 'Test', address: '20 Avenue Albert Einstein',
    city: 'VILLEURBANE', agent: 'Ville Välittäjä', price: 750
  });
  connect(function(err, client, done) {
    client.query(getQuery(queries.createTable), function(err, result) {
      done();
      addToDBIfNotExists(test, function(err, result) {
        callback()
      });
    });
  });
}

function connect(callback) {
  pg.connect(conString, function(err, client, done) {
    callback(err, client, done);
  });
}

function getQuery(list) {
  return list.reduce(function(prev, current, i, arr) {
    return prev + current;
  });
}
