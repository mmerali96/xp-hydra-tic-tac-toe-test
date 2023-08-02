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
    console.log('Game Board Creation...', this.getBoard(), 'Board Created.', 'The game will start with player X');
  }
}

module.exports = { TicTacToe };
