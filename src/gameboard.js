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
  placeShip(ship, coords, orientation) {
    if (this.#isPlaceAvailable(ship.length, coords, orientation) === false) return;
    this.#createShip(ship.length, coords, orientation);
  }
  #createShip(length, coords, orientation) {
    if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        this.board[i + coords[0]][coords[1]] = 'S';
      }
    } else if (orientation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        this.board[coords[0]][i + coords[1]] = 'S';
      }
    }
  }
  #isPlaceAvailable(length, coords, orientation) {
    // if (orientation !== 'vertical' || orientation !== 'horizontal') return false;
    if (orientation === 'vertical') {
      return this.board.every(e => {
        console.log(e);
        for (let i = 0; i < length; i++) {
          e[i + coords[0]][coords[1]] === '';
        }
      });
    } else {
      return this.board.every(e => {
        for (let i = 0; i < length; i++) {
          e[coords[0]][i + coords[1]] === '';
        }
      });
    }
  }
}
// let newGameboard = new Gameboard();
// newGameboard.init();
// newGameboard.placeShip([0, 1]);
// console.log(newGameboard.board);

module.exports = Gameboard;
