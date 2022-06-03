let Ship = require('../ship');

describe('Ship', () => {
  test('creates Ship', () => {
    let newShip = new Ship(3);
    expect(newShip).toEqual({ hits: 0, length: 3 });
  });
  test('hits a ship', () => {
    let newShip = new Ship(3);
    newShip.hit();
    expect(newShip).toEqual({ hits: 1, length: 3 });
  });
  test('sinks a ship', () => {
    let newShip = new Ship(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toEqual(true);
  });
});
