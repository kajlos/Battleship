let Gameboard = require('../gameboard');
let Ship = require('../ship');
describe('gameboard', () => {
  it('creates a gameboard', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    expect(newGameboard.board.length).toEqual(10);
    expect(newGameboard.board[0].length).toEqual(10);
    expect(newGameboard.board[0][0]).toBeDefined();
    expect(newGameboard.board[10]).toBeUndefined();
  });
  it('places a 1 length ship', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    let newShip = { hits: 0, length: 1 };
    newGameboard.placeShip(newShip, [0, 1], 'vertical');
    newGameboard.placeShip(newShip, [2, 3], 'vertical');
    expect(newGameboard.board[0][1]).toEqual('S');
    expect(newGameboard.board[2][3]).toEqual('S');
  });
  it('places a 2 or more length ship', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    let newShip = { hits: 0, length: 2 };
    newGameboard.placeShip(newShip, [0, 1], 'vertical');
    newGameboard.placeShip(newShip, [5, 6], 'horizontal');
    console.log(newGameboard.board);
    expect(newGameboard.board[0][1]).toEqual('S');
    expect(newGameboard.board[1][1]).toEqual('S');
    expect(newGameboard.board[5][6]).toEqual('S');
    expect(newGameboard.board[5][7]).toEqual('S');
  });
});
