import Ship from './ship';
import Player from './player';
let yourBoard = document.querySelector('.your-board .board');
let enemyBoard = document.querySelector('.enemy-board .board');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
function gameLoop() {
  let player1 = new Player();
  let player2 = new Player();
  drawFirstBoard(player1);
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
  modal.innerHTML = '';
  let div1 = document.createElement('div');
  let text = document.createElement('h2');
  text.textContent = `${player} won`;
  text.classList.add('won');
  div1.append(text);
  let div2 = document.createElement('div');
  let button = document.createElement('button');
  button.classList.add('newGame');
  button.addEventListener('click', () => {
    gameLoop();
  });
  button.textContent = 'New Game';
  div2.append(button);
  modal.append(div1, div2);
  switchModalAndOverlay();
}
function switchModalAndOverlay() {
  overlay.classList.toggle('active');
  modal.classList.toggle('active');
}
function resetBoard(player) {
  player.Gameboard.board = [];
  for (let i = 0; i < 10; i++) {
    player.Gameboard.board[i] = [];
    for (let j = 0; j < 10; j++) {
      player.Gameboard.board[i][j] = '';
    }
  }
  player.Gameboard.ships = [];
}
function drawFirstBoard(player, placedShips = 0, orienationtext = 'vertical') {
  modal.innerHTML = '';
  let thisBoard = document.createElement('div');
  thisBoard.classList.add('board');
  let rotationButton = document.createElement('button');
  rotationButton.textContent = 'Rotate';
  let orienation = document.createElement('p');
  let resetButton = document.createElement('button');
  let buttonsDiv = document.createElement('div');
  buttonsDiv.append(rotationButton, resetButton);
  buttonsDiv.classList.add('buttonsDiv');
  resetButton.addEventListener('click', () => {
    resetBoard(player);
    drawFirstBoard(player);
  });
  resetButton.textContent = 'Reset';
  orienation.textContent = orienationtext;
  let shipLength;
  rotationButton.addEventListener('click', () => {
    if (orienation.textContent == 'vertical') {
      orienation.textContent = 'horizontal';
    } else {
      orienation.textContent = 'vertical';
    }
  });
  modal.append(buttonsDiv, orienation);
  let board = player.Gameboard.board;
  if (placedShips < 10) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        if (typeof board[i][j] == 'object') {
          cell.classList.add('ship');
        }
        if (board[i][j] == '#') {
          cell.classList.add('missed');
        } else if (board[i][j] == '') {
          cell.addEventListener('click', () => {
            if (placedShips === 0) {
              shipLength = 4;
            } else if (placedShips < 3) {
              shipLength = 3;
            } else if (placedShips < 6) {
              shipLength = 2;
            } else if (placedShips < 10) {
              shipLength = 1;
            }
            if (player.Gameboard.placeShip(new Ship(shipLength), [i, j], orienation.textContent)) {
              placedShips += 1;
              drawFirstBoard(player, placedShips, orienation.textContent);
            }
          });
        }
        thisBoard.append(cell);
      }
    }
    modal.append(thisBoard);
  } else {
    placedShips = 0;
    switchModalAndOverlay();
    drawYourboard(player);
    return;
  }
}
gameLoop();
