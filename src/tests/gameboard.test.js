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
    let newShip2 = { hits: 0, length: 3 };
    newGameboard.placeShip(newShip, [0, 1], 'vertical');
    newGameboard.placeShip(newShip2, [5, 6], 'horizontal');
    newGameboard.placeShip(newShip, [1, 8], 'horizontal');
    expect(newGameboard.board[0][1]).toEqual('S');
    expect(newGameboard.board[1][1]).toEqual('S');
    expect(newGameboard.board[5][6]).toEqual('S');
    expect(newGameboard.board[5][7]).toEqual('S');
    expect(newGameboard.board[5][8]).toEqual('S');
    expect(newGameboard.board[1][8]).toEqual('S');
    expect(newGameboard.board[1][9]).toEqual('S');
  });
  it("doesn't create ship if ship would be outside gameboard", () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    let newShip = { hits: 0, length: 2 };
    let newShip2 = { hits: 0, length: 2 };
    newGameboard.placeShip(newShip, [9, 1], 'vertical');
    newGameboard.placeShip(newShip2, [1, 9], 'horizontal');
    expect(newGameboard.board[9][1]).toEqual('');
    expect(newGameboard.board[1][9]).toEqual('');
  });
  it('marks spots when placed ship', () => {
    let newGameboard = new Gameboard();
    newGameboard.init();
    let newShip = { hits: 0, length: 1 };
    newGameboard.placeShip(newShip, [5, 5], 'vertical');
    expect(newGameboard.board[5][5]).toEqual('S');
    expect(newGameboard.board[4][5]).toEqual('#');
    expect(newGameboard.board[4][4]).toEqual('#');
    expect(newGameboard.board[4][6]).toEqual('#');
    expect(newGameboard.board[5][4]).toEqual('#');
    expect(newGameboard.board[5][6]).toEqual('#');
    expect(newGameboard.board[6][5]).toEqual('#');
    expect(newGameboard.board[6][6]).toEqual('#');
    expect(newGameboard.board[6][4]).toEqual('#');
  });
});
