export default class DOM {
  static drawYourboard(yourBoard, player) {
    yourBoard.innerHTML = '';
    let board = player.Gameboard.board;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        yourBoard.append(cell);
        if (typeof board[i][j] == 'object') {
          cell.classList.add('ship');
        }
        if (board[i][j] == 'X' || board[i][j] == 'S') {
          cell.classList.add('hit');
        }
        if (board[i][j] == '.') {
          cell.classList.add('missed');
        }
      }
    }
  }
  static drawEnemyBoard(enemyBoard, player1, player2) {
    enemyBoard.innerHTML = '';
    let board = player1.GuessBoard.board;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        enemyBoard.append(cell);
        if (board[i][j] == 'X' || board[i][j] == 'S') {
          cell.classList.add('hit');
        }
        if (board[i][j] == '.') {
          cell.classList.add('missed');
        }
        if (board[i][j] === '') {
          cell.addEventListener('click', () => {
            player1.attack(player2, [i, j]);
            this.drawEnemyBoard(enemyBoard, player1, player2);
          });
        }
      }
    }
  }
}
