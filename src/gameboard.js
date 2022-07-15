export default class Gameboard {
  constructor() {
    this.board = [];
    this.ships = [];
    this.#init();
  }
  #init() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = '';
      }
    }
  }
  placeShip(ship, coords, orientation) {
    if (!this.#isPlaceAvailable(ship.getLength(), coords, orientation)) return false;
    this.#createShip(ship, coords, orientation);
    this.#markSpotsAfertPlace(ship.getLength(), coords, orientation);
    this.#pushShips();
    return true;
  }
  placeShipsRandomly(shipsArray) {
    shipsArray.forEach(ship => {
      let isPlaced = false;
      while (isPlaced == false) {
        let coords = Gameboard.getRandomCoords();
        let orientation = Gameboard.getRandomOrientation();
        if (this.placeShip(ship, coords, orientation)) {
          isPlaced = true;
        }
      }
    });
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
          [row + 1, column],
          [row + 1, column + 1],
          [row + 1, column - 1],
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
  #getSpotsAroundCoords(coords) {
    let [row, column] = coords;
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
  }
  #markSpot(coords, mark) {
    let row = parseFloat(coords[0]);
    let column = parseFloat(coords[1]);
    if (row < 0 || row > 9 || column < 0 || column > 9) return;
    this.board[row][column] = mark;
  }
  markSpotsFromCoords(coords) {
    let spots = this.#getSpotsAroundCoords(coords);
    spots.forEach(spot => {
      let [row, column] = spot;
      if (row < 0 || row > 9 || column < 0 || column > 9) return;
      if (this.board[row][column] == 'X') {
        this.#markSpot(spot, 'S');
        this.markSpotsFromCoords(spot);
      } else if (this.board[spot[0]][spot[1]] == 'S') {
        return;
      } else {
        this.#markSpot(spot, '.');
      }
    });
  }
  receiveAttack(coords) {
    let [row, column] = coords;
    if (typeof this.board[row][column] == 'object') {
      this.board[row][column].hit(coords);

      if (this.board[row][column].isSunk()) {
        this.#markSpot(coords, 'S');
        this.markSpotsFromCoords(coords);
        return 'sunk';
      } else {
        this.#markSpot(coords, 'X');
        return 'hit';
      }
    }
    this.#markSpot(coords, '.');
    return false;
  }
  #pushShips() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (typeof this.board[i][j] == 'object') {
          if (!this.ships.includes(this.board[i][j])) {
            this.ships.push(this.board[i][j]);
          }
        }
      }
    }
  }
  areAllShipsSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
  static getRandomCoords() {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    return [row, column];
  }
  static getRandomOrientation() {
    let orientations = ['vertical', 'horizontal'];
    let random = Math.round(Math.random());
    return orientations[random];
  }
}
