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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [];\r\n    this.ships = [];\r\n    this.#init();\r\n  }\r\n  #init() {\r\n    for (let i = 0; i < 10; i++) {\r\n      this.board[i] = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        this.board[i][j] = '';\r\n      }\r\n    }\r\n  }\r\n  placeShip(ship, coords, orientation) {\r\n    if (!this.#isPlaceAvailable(ship.getLength(), coords, orientation)) return false;\r\n    this.#createShip(ship, coords, orientation);\r\n    this.#markSpotsAfertPlace(ship.getLength(), coords, orientation);\r\n    this.#pushShips();\r\n    return true;\r\n  }\r\n  placeShipsRandomly(shipsArray) {\r\n    shipsArray.forEach(ship => {\r\n      let isPlaced = false;\r\n      while (isPlaced == false) {\r\n        let coords = Gameboard.getRandomCoords();\r\n        let orientation = Gameboard.getRandomOrientation();\r\n        if (this.placeShip(ship, coords, orientation)) {\r\n          isPlaced = true;\r\n        }\r\n      }\r\n    });\r\n  }\r\n  #createShip(ship, coords, orientation) {\r\n    if (orientation === 'vertical') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[i + coords[0]][coords[1]] = ship;\r\n      }\r\n    } else if (orientation === 'horizontal') {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        this.board[coords[0]][i + coords[1]] = ship;\r\n      }\r\n    }\r\n  }\r\n  #isPlaceAvailable(length, coords, orientation) {\r\n    if (orientation === 'vertical') {\r\n      for (let i = 0; i < length; i++) {\r\n        if (i + coords[0] > 9 || coords[1] > 9) return false;\r\n        if (this.board[i + coords[0]][coords[1]] !== '') return false;\r\n      }\r\n      return true;\r\n    } else if (orientation === 'horizontal') {\r\n      for (let i = 0; i < length; i++) {\r\n        if (coords[0] > 9 || i + coords[1] > 9) return false;\r\n        if (this.board[coords[0]][i + coords[1]] !== '') return false;\r\n      }\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n  #getPlacesAroundShip(length, coords, orientation) {\r\n    let [row, column] = coords;\r\n    if (orientation === 'vertical') {\r\n      if (length === 1) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n        ];\r\n      } else if (length === 2) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 2, column],\r\n        ];\r\n      } else if (length === 3) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 3, column + 1],\r\n          [row + 3, column - 1],\r\n          [row + 3, column],\r\n        ];\r\n      } else if (length === 4) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n          [row + 2, column + 1],\r\n          [row + 2, column - 1],\r\n          [row + 3, column + 1],\r\n          [row + 3, column - 1],\r\n          [row + 4, column + 1],\r\n          [row + 4, column - 1],\r\n          [row + 4, column],\r\n        ];\r\n      }\r\n    } else if (orientation === 'horizontal') {\r\n      if (length === 1) {\r\n        return [\r\n          [row - 1, column],\r\n          [row - 1, column - 1],\r\n          [row - 1, column + 1],\r\n          [row, column - 1],\r\n          [row, column + 1],\r\n          [row + 1, column],\r\n          [row + 1, column + 1],\r\n          [row + 1, column - 1],\r\n        ];\r\n      } else if (length === 2) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row, column + 2],\r\n          [row - 1, column + 2],\r\n        ];\r\n      } else if (length === 3) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row - 1, column + 2],\r\n          [row - 1, column + 3],\r\n          [row + 1, column + 3],\r\n          [row, column + 3],\r\n        ];\r\n      } else if (length === 4) {\r\n        return [\r\n          [row - 1, column - 1],\r\n          [row, column - 1],\r\n          [row + 1, column - 1],\r\n          [row + 1, column],\r\n          [row - 1, column],\r\n          [row + 1, column + 1],\r\n          [row - 1, column + 1],\r\n          [row + 1, column + 2],\r\n          [row - 1, column + 2],\r\n          [row - 1, column + 3],\r\n          [row + 1, column + 3],\r\n          [row - 1, column + 4],\r\n          [row + 1, column + 4],\r\n          [row, column + 4],\r\n        ];\r\n      }\r\n    }\r\n  }\r\n  #markSpotsAfertPlace(length, coords, orientation) {\r\n    let places = this.#getPlacesAroundShip(length, coords, orientation);\r\n    places.forEach(e => {\r\n      this.#markSpot(e, '#');\r\n    });\r\n  }\r\n  #getSpotsAroundCoords(coords) {\r\n    let [row, column] = coords;\r\n    return [\r\n      [row - 1, column],\r\n      [row - 1, column - 1],\r\n      [row - 1, column + 1],\r\n      [row, column - 1],\r\n      [row, column + 1],\r\n      [row + 1, column],\r\n      [row + 1, column + 1],\r\n      [row + 1, column - 1],\r\n    ];\r\n  }\r\n  #markSpot(coords, mark) {\r\n    let row = parseFloat(coords[0]);\r\n    let column = parseFloat(coords[1]);\r\n    if (row < 0 || row > 9 || column < 0 || column > 9) return;\r\n    this.board[row][column] = mark;\r\n  }\r\n  markSpotsFromCoords(coords) {\r\n    let spots = this.#getSpotsAroundCoords(coords);\r\n    spots.forEach(spot => {\r\n      let [row, column] = spot;\r\n      if (row < 0 || row > 9 || column < 0 || column > 9) return;\r\n      if (this.board[row][column] == 'X') {\r\n        this.#markSpot(spot, 'S');\r\n        this.markSpotsFromCoords(spot);\r\n      } else if (this.board[spot[0]][spot[1]] == 'S') {\r\n        return;\r\n      } else {\r\n        this.#markSpot(spot, '.');\r\n      }\r\n    });\r\n  }\r\n  receiveAttack(coords) {\r\n    let [row, column] = coords;\r\n    if (typeof this.board[row][column] == 'object') {\r\n      this.board[row][column].hit(coords);\r\n\r\n      if (this.board[row][column].isSunk()) {\r\n        this.#markSpot(coords, 'S');\r\n        this.markSpotsFromCoords(coords);\r\n        return 'sunk';\r\n      } else {\r\n        this.#markSpot(coords, 'X');\r\n        return 'hit';\r\n      }\r\n    }\r\n    this.#markSpot(coords, '.');\r\n    return false;\r\n  }\r\n  #pushShips() {\r\n    for (let i = 0; i < 10; i++) {\r\n      for (let j = 0; j < 10; j++) {\r\n        if (typeof this.board[i][j] == 'object') {\r\n          if (!this.ships.includes(this.board[i][j])) {\r\n            this.ships.push(this.board[i][j]);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  areAllShipsSunk() {\r\n    return this.ships.every(ship => ship.isSunk());\r\n  }\r\n  static getRandomCoords() {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let column = Math.floor(Math.random() * 10);\r\n    return [row, column];\r\n  }\r\n  static getRandomOrientation() {\r\n    let orientations = ['vertical', 'horizontal'];\r\n    let random = Math.round(Math.random());\r\n    return orientations[random];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\nlet yourBoard = document.querySelector('.your-board .board');\r\nlet enemyBoard = document.querySelector('.enemy-board .board');\r\nlet overlay = document.querySelector('.overlay');\r\nlet modal = document.querySelector('.modal');\r\nfunction gameLoop() {\r\n  let player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  let player2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  drawFirstBoard(player1);\r\n  player2.Gameboard.placeShipsRandomly([\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\r\n    new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1),\r\n  ]);\r\n  drawYourboard(player1);\r\n  drawEnemyBoard(player1, player2);\r\n}\r\nfunction checkIfAllShipsAreSunk(player) {\r\n  return player.Gameboard.areAllShipsSunk();\r\n}\r\nfunction drawYourboard(player) {\r\n  yourBoard.innerHTML = '';\r\n  let board = player.Gameboard.board;\r\n  for (let i = 0; i < board.length; i++) {\r\n    for (let j = 0; j < board[i].length; j++) {\r\n      let cell = document.createElement('div');\r\n      cell.classList.add('cell');\r\n      yourBoard.append(cell);\r\n      if (typeof board[i][j] == 'object') {\r\n        cell.classList.add('ship');\r\n      }\r\n      if (board[i][j] == 'X' || board[i][j] == 'S') {\r\n        cell.classList.add('hit');\r\n      }\r\n      if (board[i][j] == '.') {\r\n        cell.classList.add('missed');\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction drawEnemyBoard(player1, player2) {\r\n  enemyBoard.innerHTML = '';\r\n  let board = player1.GuessBoard.board;\r\n  for (let i = 0; i < board.length; i++) {\r\n    for (let j = 0; j < board[i].length; j++) {\r\n      let cell = document.createElement('div');\r\n      cell.classList.add('cell');\r\n      enemyBoard.append(cell);\r\n      if (board[i][j] == 'X' || board[i][j] == 'S') {\r\n        cell.classList.add('hit');\r\n      }\r\n      if (board[i][j] == '.') {\r\n        cell.classList.add('missed');\r\n      }\r\n      if (board[i][j] === '') {\r\n        cell.addEventListener('click', () => {\r\n          player1.attack(player2, [i, j]);\r\n          drawEnemyBoard(player1, player2);\r\n          if (checkIfAllShipsAreSunk(player2)) {\r\n            endGame('You');\r\n          } else {\r\n            player2.randomAttack(player1);\r\n            drawYourboard(player1);\r\n          }\r\n          if (checkIfAllShipsAreSunk(player1)) {\r\n            endGame('comupter');\r\n          }\r\n        });\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction endGame(player) {\r\n  modal.innerHTML = '';\r\n  let div1 = document.createElement('div');\r\n  let text = document.createElement('h2');\r\n  text.textContent = `${player} won`;\r\n  text.classList.add('won');\r\n  div1.append(text);\r\n  let div2 = document.createElement('div');\r\n  let button = document.createElement('button');\r\n  button.classList.add('newGame');\r\n  button.addEventListener('click', () => {\r\n    gameLoop();\r\n  });\r\n  button.textContent = 'New Game';\r\n  div2.append(button);\r\n  modal.append(div1, div2);\r\n  switchModalAndOverlay();\r\n}\r\nfunction switchModalAndOverlay() {\r\n  overlay.classList.toggle('active');\r\n  modal.classList.toggle('active');\r\n}\r\nfunction resetBoard(player) {\r\n  player.Gameboard.board = [];\r\n  for (let i = 0; i < 10; i++) {\r\n    player.Gameboard.board[i] = [];\r\n    for (let j = 0; j < 10; j++) {\r\n      player.Gameboard.board[i][j] = '';\r\n    }\r\n  }\r\n  player.Gameboard.ships = [];\r\n}\r\nfunction drawFirstBoard(player, placedShips = 0, orienationtext = 'vertical') {\r\n  modal.innerHTML = '';\r\n  let thisBoard = document.createElement('div');\r\n  thisBoard.classList.add('board');\r\n  let rotationButton = document.createElement('button');\r\n  rotationButton.textContent = 'Rotate';\r\n  let orienation = document.createElement('p');\r\n  let resetButton = document.createElement('button');\r\n  let buttonsDiv = document.createElement('div');\r\n  buttonsDiv.append(rotationButton, resetButton);\r\n  buttonsDiv.classList.add('buttonsDiv');\r\n  resetButton.addEventListener('click', () => {\r\n    resetBoard(player);\r\n    drawFirstBoard(player);\r\n  });\r\n  resetButton.textContent = 'Reset';\r\n  orienation.textContent = orienationtext;\r\n  let shipLength;\r\n  rotationButton.addEventListener('click', () => {\r\n    if (orienation.textContent == 'vertical') {\r\n      orienation.textContent = 'horizontal';\r\n    } else {\r\n      orienation.textContent = 'vertical';\r\n    }\r\n  });\r\n  modal.append(buttonsDiv, orienation);\r\n  let board = player.Gameboard.board;\r\n  if (placedShips < 10) {\r\n    for (let i = 0; i < board.length; i++) {\r\n      for (let j = 0; j < board[i].length; j++) {\r\n        let cell = document.createElement('div');\r\n        cell.classList.add('cell');\r\n        if (typeof board[i][j] == 'object') {\r\n          cell.classList.add('ship');\r\n        }\r\n        if (board[i][j] == '#') {\r\n          cell.classList.add('missed');\r\n        } else if (board[i][j] == '') {\r\n          cell.addEventListener('click', () => {\r\n            if (placedShips === 0) {\r\n              shipLength = 4;\r\n            } else if (placedShips < 3) {\r\n              shipLength = 3;\r\n            } else if (placedShips < 6) {\r\n              shipLength = 2;\r\n            } else if (placedShips < 10) {\r\n              shipLength = 1;\r\n            }\r\n            if (player.Gameboard.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipLength), [i, j], orienation.textContent)) {\r\n              placedShips += 1;\r\n              drawFirstBoard(player, placedShips, orienation.textContent);\r\n            }\r\n          });\r\n        }\r\n        thisBoard.append(cell);\r\n      }\r\n    }\r\n    modal.append(thisBoard);\r\n  } else {\r\n    placedShips = 0;\r\n    switchModalAndOverlay();\r\n    drawYourboard(player);\r\n    return;\r\n  }\r\n}\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;