const Gameboard = require('./gameboard');

class Player {
  constructor() {
    this.board = new Gameboard();
  }
  attack(targetPlayer, coords) {
    targetPlayer.board.receiveAttack(coords);
  }
  randomAttack(targetPlayer) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    this.attack(targetPlayer, [row, column]);
  }
}
module.exports = Player;
