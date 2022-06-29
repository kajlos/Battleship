const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  attack(targetPlayer, coords) {
    targetPlayer.board.receiveAttack(coords);
  }
}
module.exports = Player;
