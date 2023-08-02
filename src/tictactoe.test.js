const { tictactoe, TicTacToe } = require('./tictactoe');

describe('tic tac toe tests', () => {
  it('should create an object for the tictactoe game', () => {
    var tictactoe = new TicTacToe();
  });
  it('should have an empty 2d array to represent the gameboard', () => {
    var tictactoe = new TicTacToe();
    expect(tictactoe.board).toStrictEqual([[], [], []]);
  });
  it('should return the 2d array as a string to represent the gameboard', () => {
    var tictactoe = new TicTacToe();
    expect(tictactoe.getBoard()).toBe(`
 | |
-+-+-
 | |
-+-+-
 | |
`);
  });
});
