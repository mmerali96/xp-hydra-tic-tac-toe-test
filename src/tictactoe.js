class TicTacToe {
  board = [[], [], []];
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
    console.log('Game Board Creation...', this.getBoard());
  }
}

module.exports = { TicTacToe };
