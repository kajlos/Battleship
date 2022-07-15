import Ship from './ship';
import Player from './player';
let yourBoard = document.querySelector('.your-board .board');
let enemyBoard = document.querySelector('.enemy-board .board');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let orientation = 'vertical';
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
function drawFirstBoard(player, placedShips = 0) {
  modal.innerHTML = '';
  let thisBoard = document.createElement('div');
  thisBoard.classList.add('board');
  let rotationButton = document.createElement('button');
  rotationButton.textContent = 'Rotate';
  rotationButton.addEventListener('click', () => {
    if (orientation === 'vertical') {
      orientation = 'horizontal';
      return;
    }
    if (orientation === 'horizontal') {
      orientation = 'vertical';
      return;
    }
  });
  modal.append(rotationButton, orientation);
  let board = player.Gameboard.board;
  if (placedShips < 3) {
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
            if (player.Gameboard.placeShip(new Ship(2), [i, j], orientation)) {
              placedShips += 1;
              console.log(placedShips);
              drawFirstBoard(player, placedShips);
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
