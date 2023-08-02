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
    if (
      this.board[0][1] != '' &&
      this.board[1][1] != '' &&
      this.board[2][1] != '' &&
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1]
    ) {
      return this.board[0][1];
    }
    if (
      this.board[0][2] != '' &&
      this.board[1][2] != '' &&
      this.board[2][2] != '' &&
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2]
    ) {
      return this.board[0][2];
    }

    return false;
  }
}

module.exports = { TicTacToe };
