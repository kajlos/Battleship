let Ship = require('../ship');

describe('Ship', () => {
  it('creates Ship', () => {
    let newShip = new Ship(3);
    expect(newShip).toMatchObject({ hits: 0, length: 3 });
  });
  it('hits a ship', () => {
    let newShip = new Ship(3);
    newShip.hit();
    expect(newShip).toMatchObject({ hits: 1, length: 3 });
  });
  it('sinks a ship', () => {
    let newShip = new Ship(3);
    newShip.hit();
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toEqual(true);
  });
});
