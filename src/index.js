import Ship from './ship';
import Player from './player';
let yourBoard = document.querySelector('.your-board .board');
let enemyBoard = document.querySelector('.enemy-board .board');
let gameButton = document.querySelector('.newGame');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
function gameLoop() {
  let player1 = new Player();
  let player2 = new Player();
  player1.Gameboard.placeShipsRandomly([
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2),
    new Ship(1),
    new Ship(1),
    new Ship(1),
    new Ship(1),
  ]);
  player2.Gameboard.placeShipsRandomly([
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2),
    new Ship(1),
    new Ship(1),
    new Ship(1),
    new Ship(1),
  ]);
  drawYourboard(player1);
  drawEnemyBoard(player1, player2);
}
function checkIfAllShipsAreSunk(player) {
  return player.Gameboard.areAllShipsSunk();
}
function drawYourboard(player) {
  yourBoard.innerHTML = '';
  console.log(player);
  let board = player.Gameboard.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      yourBoard.append(cell);
      if (typeof board[i][j] == 'object') {
        cell.classList.add('ship');
      }
      if (board[i][j] == 'X' || board[i][j] == 'S') {
        cell.classList.add('hit');
      }
      if (board[i][j] == '.') {
        cell.classList.add('missed');
      }
    }
  }
}
function drawEnemyBoard(player1, player2) {
  enemyBoard.innerHTML = '';
  let board = player1.GuessBoard.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      enemyBoard.append(cell);
      if (board[i][j] == 'X' || board[i][j] == 'S') {
        cell.classList.add('hit');
      }
      if (board[i][j] == '.') {
        cell.classList.add('missed');
      }
      if (board[i][j] === '') {
        cell.addEventListener('click', () => {
          player1.attack(player2, [i, j]);
          drawEnemyBoard(player1, player2);
          if (checkIfAllShipsAreSunk(player2)) {
            endGame('You');
          } else {
            player2.randomAttack(player1);
            drawYourboard(player1);
          }
          if (checkIfAllShipsAreSunk(player1)) {
            endGame('comupter');
          }
        });
      }
    }
  }
}
function endGame(player) {
  let text = modal.querySelector('.won');
  text.textContent = `${player} won`;
  switchModalAndOverlay();
}
function switchModalAndOverlay() {
  overlay.classList.toggle('active');
  modal.classList.toggle('active');
}
gameButton.addEventListener('click', () => {
  switchModalAndOverlay();
  gameLoop();
});
gameLoop();
