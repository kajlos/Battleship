const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.board = new Gameboard();
  }
}
module.exports = Player;
