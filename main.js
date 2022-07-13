/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\nclass DOM {\r\n  static drawYourboard(yourBoard, player) {\r\n    yourBoard.innerHTML = '';\r\n    let board = player.Gameboard.board;\r\n    for (let i = 0; i < board.length; i++) {\r\n      for (let j = 0; j < board[i].length; j++) {\r\n        let cell = document.createElement('div');\r\n        cell.classList.add('cell');\r\n        yourBoard.append(cell);\r\n        if (typeof board[i][j] == 'object') {\r\n          cell.classList.add('ship');\r\n        }\r\n        if (board[i][j] == 'X' || board[i][j] == 'S') {\r\n          cell.classList.add('hit');\r\n        }\r\n        if (board[i][j] == '.') {\r\n          cell.classList.add('missed');\r\n        }\r\n      }\r\n    }\r\n  }\r\n  static drawEnemyBoard(enemyBoard, player1, player2, yourBoard) {\r\n    enemyBoard.innerHTML = '';\r\n    let board = player1.GuessBoard.board;\r\n    for (let i = 0; i < board.length; i++) {\r\n      for (let j = 0; j < board[i].length; j++) {\r\n        let cell = document.createElement('div');\r\n        cell.classList.add('cell');\r\n        enemyBoard.append(cell);\r\n        if (board[i][j] == 'X' || board[i][j] == 'S') {\r\n          cell.classList.add('hit');\r\n        }\r\n        if (board[i][j] == '.') {\r\n          cell.classList.add('missed');\r\n        }\r\n        if (board[i][j] === '') {\r\n          cell.addEventListener('click', () => {\r\n            player1.attack(player2, [i, j]);\r\n            this.drawEnemyBoard(enemyBoard, player1, player2, yourBoard);\r\n            console.log(_index__WEBPACK_IMPORTED_MODULE_0__.checkIfAllShipsAreSunk(player2));\r\n            player2.randomAttack(player1);\r\n            this.drawYourboard(yourBoard, player1);\r\n          });\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [];\r\n    this.ships = [];\r\n    this.#init();\r\n  }\r\n  #init() {\r\n    for (let i = 0; i < 10; i++) {\r\n      this.board[i] = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        this.board[i][j] = '';\r\n      }\r\n    }\r\n  }\r\n  placeShip(ship, coords, orientation) {\r\n    if (!this.#isPlaceAvailable(ship.getLength(), coords, orientation)) return 'Place not avaiable';\r\n    this.#createShip(ship, coords, orientation);\r\n    this.#markSpotsAfertPlace(ship.getLength(), coords, orientation);\r\n    this.#pushShips();\r\n  }\r\n  #createShip(ship, coords, orientation) {\r\n    if (orientation === 'vertical') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[i + coords[0]][coords[1]] = ship;\r\n      }\r\n    } else if (orientation === 'horizontal') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[coords[0]][i + coords[1]] = ship;\r\n      }\r\n    }\r\n  }\r\n  #isPlaceAvailable(length, coords, orientation) {\r\n    if (orientation === 'vertical') {\r\n      for (let i = 0; i < length; i++) {\r\n        if (i + coords[0] > 9 || coords[1] > 9) return false;\r\n        if (this.board[i + coords[0]][coords[1]] !== '') return false;\r\n      }\r\n      return true;\r\n    } else if (orientation === 'horizontal') {\r\n      for (let i = 0; i < length; i++) {\r\n        if (coords[0] > 9 || i + coords[1] > 9) return false;\r\n        if (this.board[coords[0]][i + coords[1]] !== '') return false;\r\n      }\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n  #getPlacesAroundShip(length, coords, orientation) {\r\n    let [row, column] = coords;\r\n    if (orientation === 'vertical') {\r\n      if (length === 1) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n        ];\r\n      } else if (length === 2) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 2, column],\r\n        ];\r\n      } else if (length === 3) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 3, column + 1],\r\n          [row + 3, column - 1],\r\n          [row + 3, column],\r\n        ];\r\n      } else if (length === 4) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 3, column + 1],\r\n          [row + 3, column - 1],\r\n          [row + 4, column + 1],\r\n          [row + 4, column - 1],\r\n          [row + 4, column],\r\n        ];\r\n      }\r\n    } else if (orientation === 'horizontal') {\r\n      if (length === 1) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 3, column + 1],\r\n          [row + 3, column - 1],\r\n          [row + 4, column + 1],\r\n          [row + 4, column - 1],\r\n          [row + 4, column],\r\n        ];\r\n      } else if (length === 2) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row, column + 2],\r\n          [row - 1, column + 2],\r\n        ];\r\n      } else if (length === 3) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row - 1, column + 2],\r\n          [row - 1, column + 3],\r\n          [row + 1, column + 3],\r\n          [row, column + 3],\r\n        ];\r\n      } else if (length === 4) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row - 1, column + 2],\r\n          [row - 1, column + 3],\r\n          [row + 1, column + 3],\r\n          [row - 1, column + 4],\r\n          [row + 1, column + 4],\r\n          [row, column + 4],\r\n        ];\r\n      }\r\n    }\r\n  }\r\n  #markSpotsAfertPlace(length, coords, orientation) {\r\n    let places = this.#getPlacesAroundShip(length, coords, orientation);\r\n    places.forEach(e => {\r\n      this.#markSpot(e, '#');\r\n    });\r\n  }\r\n  #getSpotsAroundCoords(coords) {\r\n    let [row, column] = coords;\r\n    return [\r\n      [row - 1, column],\r\n      [row - 1, column - 1],\r\n      [row - 1, column + 1],\r\n      [row, column - 1],\r\n      [row, column + 1],\r\n      [row + 1, column],\r\n      [row + 1, column + 1],\r\n      [row + 1, column - 1],\r\n    ];\r\n  }\r\n  #markSpot(coords, mark) {\r\n    let row = parseFloat(coords[0]);\r\n    let column = parseFloat(coords[1]);\r\n    if (row < 0 || row > 9 || column < 0 || column > 9) return;\r\n    this.board[row][column] = mark;\r\n  }\r\n  markSpotsFromCoords(coords) {\r\n    let spots = this.#getSpotsAroundCoords(coords);\r\n    spots.forEach(spot => {\r\n      let [row, column] = spot;\r\n      if (row < 0 || row > 9 || column < 0 || column > 9) return;\r\n      if (this.board[row][column] == 'X') {\r\n        this.#markSpot(spot, 'S');\r\n        this.markSpotsFromCoords(spot);\r\n      } else if (this.board[spot[0]][spot[1]] == 'S') {\r\n        return;\r\n      } else {\r\n        this.#markSpot(spot, '.');\r\n      }\r\n    });\r\n  }\r\n  receiveAttack(coords) {\r\n    let [row, column] = coords;\r\n    if (typeof this.board[row][column] == 'object') {\r\n      this.board[row][column].hit(coords);\r\n\r\n      if (this.board[row][column].isSunk()) {\r\n        this.#markSpot(coords, 'S');\r\n        this.markSpotsFromCoords(coords);\r\n        return 'sunk';\r\n      } else {\r\n        this.#markSpot(coords, 'X');\r\n        return 'hit';\r\n      }\r\n    }\r\n    this.#markSpot(coords, '.');\r\n    return false;\r\n  }\r\n  #pushShips() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        if (typeof this.board[i][j] == 'object') {\r\n          if (!this.ships.includes(this.board[i][j])) {\r\n            this.ships.push(this.board[i][j]);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  areAllShipsSunk() {\r\n    return this.ships.every(ship => ship.isSunk());\r\n  }\r\n  static getRandomCoords() {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let column = Math.floor(Math.random() * 10);\r\n    return [row, column];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkIfAllShipsAreSunk\": () => (/* binding */ checkIfAllShipsAreSunk),\n/* harmony export */   \"gameLoop\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\r\n\r\n\r\n\r\nfunction gameLoop() {\r\n  let player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  let player2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  let yourBoard = document.querySelector('.your-board .board');\r\n  let enemyBoard = document.querySelector('.enemy-board .board');\r\n  player1.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2), [1, 1], 'vertical');\r\n  player1.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1), [6, 1], 'vertical');\r\n  player1.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3), [8, 2], 'horizontal');\r\n  player1.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2), [4, 7], 'horizontal');\r\n  player2.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1), [0, 0], 'vertical');\r\n  player2.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3), [4, 4], 'vertical');\r\n  _DOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawYourboard(yourBoard, player1);\r\n  _DOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawEnemyBoard(enemyBoard, player1, player2, yourBoard);\r\n  console.log(checkIfAllShipsAreSunk(player1));\r\n}\r\nfunction checkIfAllShipsAreSunk(player) {\r\n  return player.Gameboard.areAllShipsSunk();\r\n}\r\n\r\ngameLoop();\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nclass Player {\r\n  constructor() {\r\n    this.Gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.GuessBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  }\r\n  attack(targetPlayer, coords) {\r\n    let result = targetPlayer.Gameboard.receiveAttack(coords);\r\n    if (result == 'hit') {\r\n      this.GuessBoard.board[coords[0]][coords[1]] = 'X';\r\n    } else if (result == 'sunk') {\r\n      this.GuessBoard.board[coords[0]][coords[1]] = 'S';\r\n      this.GuessBoard.markSpotsFromCoords(coords);\r\n    } else {\r\n      this.GuessBoard.board[coords[0]][coords[1]] = '.';\r\n    }\r\n  }\r\n  randomAttack(targetPlayer) {\r\n    let [row, column] = _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getRandomCoords();\r\n    if (this.GuessBoard.board[row][column] === '') {\r\n      this.attack(targetPlayer, [row, column]);\r\n    } else {\r\n      this.randomAttack(targetPlayer);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = [];\r\n  }\r\n  hit(coords) {\r\n    this.hits.push(coords);\r\n  }\r\n  isSunk() {\r\n    return this.hits.length === this.length;\r\n  }\r\n  getLength() {\r\n    return this.length;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;