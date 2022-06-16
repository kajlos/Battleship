let Ship = require('../ship');

describe('Ship', () => {
  it('creates Ship', () => {
    let newShip = new Ship(3);
    expect(newShip).toMatchObject({ hits: [], length: 3 });
  });
  it('hits a ship', () => {
    let newShip = new Ship(3);
    newShip.hit([0, 0]);
    expect(newShip).toMatchObject({ hits: [[0, 0]], length: 3 });
  });
  it('returns length', () => {
    let newShip = new Ship(3);
    expect(newShip.getLength()).toEqual(3);
  });
  it('sinks a ship', () => {
    let newShip = new Ship(3);
    newShip.hit([0, 0]);
    newShip.hit([0, 1]);
    newShip.hit([0, 2]);
    expect(newShip.isSunk()).toEqual(true);
  });
});
