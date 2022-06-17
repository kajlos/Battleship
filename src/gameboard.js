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
    if (!this.#isPlaceAvailable(ship.getLength(), coords, orientation)) return 'Place not avaiable';
    this.#createShip(ship, coords, orientation);
    this.#markSpotsAfertPlace(ship.getLength(), coords, orientation);
  }
  #createShip(ship, coords, orientation) {
    if (orientation === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.board[i + coords[0]][coords[1]] = ship;
      }
    } else if (orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        this.board[coords[0]][i + coords[1]] = ship;
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
  #getPlacesAroundShip(length, coords, orientation) {
    let [row, column] = coords;
    if (orientation === 'vertical') {
      if (length === 1) {
        return [
          [row - 1, column],
          [row - 1, column - 1],
          [row - 1, column + 1],
          [row, column - 1],
          [row, column + 1],
          [row + 1, column],
          [row + 1, column + 1],
          [row + 1, column - 1],
        ];
      } else if (length === 2) {
        return [
          [row - 1, column],
          [row - 1, column - 1],
          [row - 1, column + 1],
          [row, column - 1],
          [row, column + 1],
          [row + 1, column + 1],
          [row + 1, column - 1],
          [row + 2, column + 1],
          [row + 2, column - 1],
          [row + 2, column],
        ];
      } else if (length === 3) {
        return [
          [row - 1, column],
          [row - 1, column - 1],
          [row - 1, column + 1],
          [row, column - 1],
          [row, column + 1],
          [row + 1, column + 1],
          [row + 1, column - 1],
          [row + 2, column + 1],
          [row + 2, column - 1],
          [row + 3, column + 1],
          [row + 3, column - 1],
          [row + 3, column],
        ];
      } else if (length === 4) {
        return [
          [row - 1, column],
          [row - 1, column - 1],
          [row - 1, column + 1],
          [row, column - 1],
          [row, column + 1],
          [row + 1, column + 1],
          [row + 1, column - 1],
          [row + 2, column + 1],
          [row + 2, column - 1],
          [row + 3, column + 1],
          [row + 3, column - 1],
          [row + 4, column + 1],
          [row + 4, column - 1],
          [row + 4, column],
        ];
      }
    } else if (orientation === 'horizontal') {
      if (length === 1) {
        return [
          [row - 1, column],
          [row - 1, column - 1],
          [row - 1, column + 1],
          [row, column - 1],
          [row, column + 1],
          [row + 1, column + 1],
          [row + 1, column - 1],
          [row + 2, column + 1],
          [row + 2, column - 1],
          [row + 3, column + 1],
          [row + 3, column - 1],
          [row + 4, column + 1],
          [row + 4, column - 1],
          [row + 4, column],
        ];
      } else if (length === 2) {
        return [
          [row - 1, column - 1],
          [row, column - 1],
          [row + 1, column - 1],
          [row + 1, column],
          [row - 1, column],
          [row + 1, column + 1],
          [row - 1, column + 1],
          [row + 1, column + 2],
          [row, column + 2],
          [row - 1, column + 2],
        ];
      } else if (length === 3) {
        return [
          [row - 1, column - 1],
          [row, column - 1],
          [row + 1, column - 1],
          [row + 1, column],
          [row - 1, column],
          [row + 1, column + 1],
          [row - 1, column + 1],
          [row + 1, column + 2],
          [row - 1, column + 2],
          [row - 1, column + 3],
          [row + 1, column + 3],
          [row, column + 3],
        ];
      } else if (length === 4) {
        return [
          [row - 1, column - 1],
          [row, column - 1],
          [row + 1, column - 1],
          [row + 1, column],
          [row - 1, column],
          [row + 1, column + 1],
          [row - 1, column + 1],
          [row + 1, column + 2],
          [row - 1, column + 2],
          [row - 1, column + 3],
          [row + 1, column + 3],
          [row - 1, column + 4],
          [row + 1, column + 4],
          [row, column + 4],
        ];
      }
    }
  }
  #markSpotsAfertPlace(length, coords, orientation) {
    let places = this.#getPlacesAroundShip(length, coords, orientation);
    places.forEach(e => {
      this.#markSpot(e, '#');
    });
  }
  #markSpot(coords, mark) {
    let row = parseFloat(coords[0]);
    let column = parseFloat(coords[1]);
    if (row < 0 || row > 9 || column < 0 || column > 9) return;
    this.board[row][column] = mark;
  }
  recieveAttack(coords) {
    let [row, column] = coords;
    this.board[row][column].hit(coords);
    this.#markSpot(coords, 'X');
  
  }
}

// let newGameboard = new Gameboard();
// newGameboard.init();
// let newShip = new Ship(3);
// newGameboard.placeShip(newShip, [5, 6], 'vertical');
// console.log(newGameboard.board);

module.exports = Gameboard;
