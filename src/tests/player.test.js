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
    expect(player1.GuessBoard.board[0][0]).toEqual('.');
    expect(player2.Gameboard.board[1][1]).toEqual('S');
    expect(player1.GuessBoard.board[1][1]).toEqual('S');
  });
  it('makes random attack', () => {
    let player1 = new Player();
    let player2 = new Player();
    player2.Gameboard.placeShip(new Ship(1), [1, 1], 'vertical');
    Gameboard.getRandomCoords = jest.fn().mockReturnValue([1, 1]);
    player1.randomAttack(player2);
    expect(player1.GuessBoard.board[1][1]).toBe('S');
    expect(player2.Gameboard.board[1][1]).toBe('S');
  });
});
