import Player from '../player';
import Gameboard from '../gameboard';
import Ship from '../ship';
describe('Player', () => {
  it('attacks', () => {
    let player1 = new Player();
    let player2 = new Player();
    player2.Gameboard.placeShip(new Ship(1), [1, 1], 'vertical');
    player1.attack(player2, [0, 0]);
    player1.attack(player2, [1, 1]);
    expect(player2.Gameboard.board[0][0]).toEqual('.');
    expect(player1.guessBoard[0][0]).toEqual('.');
    expect(player2.Gameboard.board[1][1]).toEqual('X');
    expect(player1.guessBoard[1][1]).toEqual('X');
  });
});
