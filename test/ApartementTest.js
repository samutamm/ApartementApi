const Apartement = require('./../server/app/models/Apartement.js');
const expect = require('chai').expect;

describe('Apartement', function () {

  const json = { 'name': 'N', 'address': 'a', 'city': 'bogoss', 'price': 43123};

  it('is valid with valid params', function () {
    var apartement = new Apartement(json);
    expect(apartement.isValid()).to.equal(true);
  });

  it('is not valid with unvalid params', function () {
    var copy = JSON.parse(JSON.stringify(json));
    copy.name = undefined;
    var apartement = new Apartement(copy);
    expect(apartement.isValid()).to.equal(false);
  });
});
