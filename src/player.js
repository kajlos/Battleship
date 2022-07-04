import Gameboard from './gameboard';

export default class Player {
  constructor() {
    this.Gameboard = new Gameboard();
  }
  attack(targetPlayer, coords) {
    targetPlayer.Gameboard.receiveAttack(coords);
  }
  randomAttack(targetPlayer) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    this.attack(targetPlayer, [row, column]);
  }
}
