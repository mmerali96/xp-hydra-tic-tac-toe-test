class TicTacToe {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  getBoard() {
    return `
 | |
-+-+-
 | |
-+-+-
 | |
`;
  }
  play() {
    console.log('Game Board Creation...', this.getBoard(), 'Board Created.', 'The game will start with player X');
  }

  checkBoard() {
    if (
      this.board[0][0] != '' &&
      this.board[1][0] != '' &&
      this.board[2][0] != '' &&
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0]
    ) {
      return this.board[0][0];
    }
    return 'X';
  }
}

module.exports = { TicTacToe };
