import Player from '../player';
import Gameboard from '../gameboard';
describe('Player', () => {
  it('attacks', () => {
    let player1 = new Player();
    let player2 = new Player();
    player2.Gameboard.init();
    player1.attack(player2, [0, 0]);
    console.log(player2);
    expect(player2.Gameboard.board[0][0]).toEqual('.');
  });
  it();
});
