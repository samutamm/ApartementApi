const apartementsModel = require('../models/apartements.model.js');
const Apartement = require('../models/Apartement.js');

exports.all = function(req, res) {
  apartementsModel.getAll(function(err, results) {
    if (err) {
      res.send(err);
    } else {
      if(results.rows) {
        res.send(results.rows);
      } else {
        res.send([]);
      }
    }
  });
}

exports.addApartement = function (req, res) {
  const apartement = new Apartement(req.body);
  if (apartement.isValid()) {
    apartementsModel.addApartement(apartement, function (err, results) {
      if (err) {
        res.status(400).send(err);
      } else {
        debugger;
        res.send('bolblasd');
      }
    });
  } else {
    res.status(400).send('All fields must be filled');
  }
}
