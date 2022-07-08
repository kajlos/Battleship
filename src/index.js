import Ship from './ship';
import Player from './player';

let player1 = new Player();
let player2 = new Player();
let yourBoard = document.querySelector('.your-board .board');
let enemyBoard = document.querySelector('.enemy-board .board');
player1.Gameboard.placeShip(new Ship(2), [1, 1], 'vertical');
player1.Gameboard.placeShip(new Ship(1), [6, 1], 'vertical');
player1.Gameboard.placeShip(new Ship(3), [8, 2], 'horizontal');
player1.Gameboard.placeShip(new Ship(2), [4, 7], 'horizontal');
player2.Gameboard.placeShip(new Ship(1), [0, 0], 'vertical');
function drawYourBoard() {
  yourBoard.innerHTML = '';
  let board = player1.Gameboard.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      yourBoard.append(cell);
      if (typeof board[i][j] == 'object') {
        cell.classList.add('ship');
      }
      if (board[i][j] == 'X') {
        cell.classList.add('hit');
      }
      if (board[i][j] == '.') {
        cell.classList.add('missed');
      }
    }
  }
}
function drawEnemyBoard() {
  enemyBoard.innerHTML = '';
  let board = player1.guessBoard;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      enemyBoard.append(cell);
      if (board[i][j] == 'X') {
        cell.classList.add('hit');
      }
      if (board[i][j] == '.') {
        cell.classList.add('missed');
      }
      if (board[i][j] === '') {
        cell.addEventListener('click', () => {
          player1.attack(player2, [i, j]);
          drawEnemyBoard();
        });
      }
    }
  }
}
drawYourBoard();
drawEnemyBoard();
