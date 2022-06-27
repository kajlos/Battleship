const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  attack(coords) {}
}
module.exports = Player;
