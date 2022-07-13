import Ship from './ship';
import Player from './player';
import DOM from './DOM';

function gameLoop() {
  let player1 = new Player();
  let player2 = new Player();
  let yourBoard = document.querySelector('.your-board .board');
  let enemyBoard = document.querySelector('.enemy-board .board');
  player1.Gameboard.placeShip(new Ship(2), [1, 1], 'vertical');
  player1.Gameboard.placeShip(new Ship(1), [6, 1], 'vertical');
  player1.Gameboard.placeShip(new Ship(3), [8, 2], 'horizontal');
  player1.Gameboard.placeShip(new Ship(2), [4, 7], 'horizontal');
  player2.Gameboard.placeShip(new Ship(1), [0, 0], 'vertical');
  player2.Gameboard.placeShip(new Ship(3), [4, 4], 'vertical');
  DOM.drawYourboard(yourBoard, player1);
  DOM.drawEnemyBoard(enemyBoard, player1, player2, yourBoard);
  console.log(checkIfAllShipsAreSunk(player1));
}
function checkIfAllShipsAreSunk(player) {
  return player.Gameboard.areAllShipsSunk();
}

gameLoop();
export { gameLoop, checkIfAllShipsAreSunk };
