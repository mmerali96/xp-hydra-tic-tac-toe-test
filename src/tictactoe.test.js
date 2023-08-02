const { tictactoe, TicTacToe } = require('./tictactoe');

describe('tic tac toe tests', () => {
  it('should have a function called tictactoe', () => {
    tictactoe();
  });
  it('should return an empty gameboard with prefix and postfix strings', () => {
    expect(tictactoe()).toBe(`
Game Board Creation...
 | |
-+-+-
 | |
-+-+-
 | |
Board Created.`);
  });

  it('should create an object for the tictactoe game', () => {
    var tictactoe = new TicTacToe();
  });
  it('should have an empty 2d array to represent the gameboard', () => {
    var tictactoe = new TicTacToe();
    expect(tictactoe.board).toBe([[], [], []]);
  });
});
