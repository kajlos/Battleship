import Gameboard from './gameboard';

export default class Player {
  constructor() {
    this.Gameboard = new Gameboard();
    this.guessBoard = [];
    this.#guessBoardInit();
  }
  #guessBoardInit() {
    for (let i = 0; i < 10; i++) {
      this.guessBoard[i] = [];
      for (let j = 0; j < 10; j++) {
        this.guessBoard[i][j] = '';
      }
    }
  }
  attack(targetPlayer, coords) {
    if (targetPlayer.Gameboard.receiveAttack(coords)) {
      this.guessBoard[coords[0]][coords[1]] = 'X';
      console.log('X');
    } else {
      this.guessBoard[coords[0]][coords[1]] = '.';
      console.log('.');
    }
  }
  randomAttack(targetPlayer) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    this.attack(targetPlayer, [row, column]);
  }
}
