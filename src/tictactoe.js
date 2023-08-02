function tictactoe() {
  return `
Game Board Creation...
 | |
-+-+-
 | |
-+-+-
 | |
Board Created.`;
}

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
}

module.exports = { tictactoe, TicTacToe };
