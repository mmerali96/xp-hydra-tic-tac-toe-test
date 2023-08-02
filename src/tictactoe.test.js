const { tictactoe, TicTacToe } = require('./tictactoe');

const EMPTY_GAME_BOARD = `
 | |
-+-+-
 | |
-+-+-
 | |
`;
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
  it('defines play() function that will start the game', () => {
    var tictactoe = new TicTacToe();
    tictactoe.play();
  });
  it('play() should print out messages and empty game board', () => {
    const testLog = jest.spyOn(global.console, 'log');
    var tictactoe = new TicTacToe();
    tictactoe.play();

    expect(testLog).toHaveBeenCalled();
    expect(testLog.mock.calls).toContainEqual(['Game Board Creation...']);
    testLog.mockRestore();
  });
});
