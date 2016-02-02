const apartementsModel = require('../app/models/apartements.model.js');
const async = require('async');

exports.init = function(done) {
  async.series({
    initApartements: function(callback) {
      apartementsModel.init(function() {
        callback(null, null);
      });
    }
  },
  function(err, results) {
    done();
  });
}
