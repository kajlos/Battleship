class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }
  hit(coords) {
    this.hits.push(coords);
  }
  isSunk() {
    return this.hits.length === this.length;
  }
  getLength() {
    return this.length;
  }
}

module.exports = Ship;
