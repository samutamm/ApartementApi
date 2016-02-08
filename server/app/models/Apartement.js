"use strict";

module.exports = class Apartement {
  constructor(body) {
    this.name = body.name;
    this.address = body.address;
    this.city = body.city;
    this.agent = body.agent;
    this.price = body.price;
  }

  isValid() {
    return this.name !== undefined && this.address !== undefined
      && this.city !== undefined && this.price !== undefined
      && Number.isInteger(this.price);
  }

  asAList() {
    return [
      this.name, this.address, this.city, this.agent, this.price
    ];
  }
}
