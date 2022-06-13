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
  #markSpotsAfertPlace(length, coords, orientation) {
    let row = parseFloat(coords[0]);
    let column = parseFloat(coords[1]);
    if (orientation === 'vertical') {
      if (length === 1) {
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row, column + 1], '#');
        this.#markSpot([row + 1, column], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
      } else if (length === 2) {
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row, column + 1], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 2, column + 1], '#');
        this.#markSpot([row + 2, column - 1], '#');
        this.#markSpot([row + 2, column], '#');
      } else if (length === 3) {
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row, column + 1], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 2, column + 1], '#');
        this.#markSpot([row + 2, column - 1], '#');
        this.#markSpot([row + 3, column + 1], '#');
        this.#markSpot([row + 3, column - 1], '#');
        this.#markSpot([row + 3, column], '#');
      } else if (length === 4) {
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row, column + 1], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 2, column + 1], '#');
        this.#markSpot([row + 2, column - 1], '#');
        this.#markSpot([row + 3, column + 1], '#');
        this.#markSpot([row + 3, column - 1], '#');
        this.#markSpot([row + 4, column + 1], '#');
        this.#markSpot([row + 4, column - 1], '#');
        this.#markSpot([row + 4, column], '#');
      }
    } else if (orientation === 'horizontal') {
      if (length === 1) {
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row, column + 1], '#');
        this.#markSpot([row + 1, column], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
      } else if (length === 2) {
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 1, column], '#');
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row + 1, column + 2], '#');
        this.#markSpot([row, column + 2], '#');
        this.#markSpot([row - 1, column + 2], '#');
      } else if (length === 3) {
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 1, column], '#');
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row + 1, column + 2], '#');
        this.#markSpot([row - 1, column + 2], '#');
        this.#markSpot([row - 1, column + 3], '#');
        this.#markSpot([row + 1, column + 3], '#');
        this.#markSpot([row, column + 3], '#');
      } else if (length === 4) {
        this.#markSpot([row - 1, column - 1], '#');
        this.#markSpot([row, column - 1], '#');
        this.#markSpot([row + 1, column - 1], '#');
        this.#markSpot([row + 1, column], '#');
        this.#markSpot([row - 1, column], '#');
        this.#markSpot([row + 1, column + 1], '#');
        this.#markSpot([row - 1, column + 1], '#');
        this.#markSpot([row + 1, column + 2], '#');
        this.#markSpot([row - 1, column + 2], '#');
        this.#markSpot([row - 1, column + 3], '#');
        this.#markSpot([row + 1, column + 3], '#');
        this.#markSpot([row - 1, column + 4], '#');
        this.#markSpot([row + 1, column + 4], '#');
        this.#markSpot([row, column + 4], '#');
      }
    }
    return;
  }
  #markSpot(coords, mark) {
    let row = parseFloat(coords[0]);
    let column = parseFloat(coords[1]);
    if (row < 0 || row > 9 || column < 0 || column > 9) return;
    this.board[row][column] = mark;
  }
}

// let newGameboard = new Gameboard();
// newGameboard.init();
// let newShip = new Ship(3);
// newGameboard.placeShip(newShip, [5, 6], 'vertical');
// console.log(newGameboard.board);

module.exports = Gameboard;
