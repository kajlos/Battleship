let Gameboard = require('../gameboard');

describe('gameboard', () => {
  it('creates a gameboard', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    expect(newGameboard.board.length).toEqual(10);
    expect(newGameboard.board[0].length).toEqual(10);
    expect(newGameboard.board[0][0]).toBeDefined();
    expect(newGameboard.board[10]).toBeUndefined();
  });
  it('places a ship', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
  });
});
