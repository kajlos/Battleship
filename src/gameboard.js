class Gameboard {
  constructor() {
    this.board = [];
  }
  init() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = '';
      }
    }
  }
}
module.exports = Gameboard;
