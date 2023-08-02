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
    console.log('Game Board Creation...');
  }
}

module.exports = { TicTacToe };
