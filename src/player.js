const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  attack(target, coords) {}
}
module.exports = Player;
