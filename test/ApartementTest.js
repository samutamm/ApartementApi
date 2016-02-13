import Apartement from './../server/app/models/Apartement.js';
import {expect} from 'chai';

describe('Apartement', () => {

  it('is valid with valid params', () => {
    let apartement = new Apartement('name', 'address', 'City', 'agent', 123);
    console.log(apartement.asAList());
    expect(apartement.isValid()).to.equal(true);
  });
});
