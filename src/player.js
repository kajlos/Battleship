import Gameboard from './gameboard';

export default class Player {
  constructor() {
    this.Gameboard = new Gameboard();
    this.GuessBoard = new Gameboard();
  }
  attack(targetPlayer, coords) {
    let result = targetPlayer.Gameboard.receiveAttack(coords);
    if (result == 'hit') {
      this.GuessBoard.board[coords[0]][coords[1]] = 'X';
    } else if (result == 'sunk') {
      this.GuessBoard.board[coords[0]][coords[1]] = 'S';
      this.GuessBoard.markSpotsFromCoords(coords);
    } else {
      this.GuessBoard.board[coords[0]][coords[1]] = '.';
    }
  }
  randomAttack(targetPlayer) {
    let [row, column] = Gameboard.getRandomCoords();
    if (this.GuessBoard.board[row][column] === '') {
      this.attack(targetPlayer, [row, column]);
    } else {
      this.randomAttack(targetPlayer);
    }
  }
}
