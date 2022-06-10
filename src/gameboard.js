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
    if (!this.#isPlaceAvailable(ship.length, coords, orientation)) return 'Place not avaiable';
    this.#createShip(ship.length, coords, orientation);
    this.#markSpotsAfertPlace(ship.length, coords, orientation);
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
    if (orientation === 'vertical') {
      for (let i = 0; i < length; i++) {
        if (i + coords[0] > 9 || coords[1] > 9) return false;
        if (this.board[i + coords[0]][coords[1]] !== '') return false;
      }
      return true;
    } else if (orientation === 'horizontal') {
      for (let i = 0; i < length; i++) {
        if (coords[0] > 9 || i + coords[1] > 9) return false;
        if (this.board[coords[0]][i + coords[1]] !== '') return false;
      }
      return true;
    }
    return false;
  }
  #markSpotsAfertPlace() {}
}

// let newGameboard = new Gameboard();
// newGameboard.init();
// let newShip = { hits: 0, length: 2 };
// newGameboard.placeShip(newShip, [5, 6], 'vertical');
// newGameboard.placeShip(newShip, [5, 6], 'vertical');
// console.log(newGameboard.board);

module.exports = Gameboard;
