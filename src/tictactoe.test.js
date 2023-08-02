const { tictactoe } = require('./tictactoe');

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
});
