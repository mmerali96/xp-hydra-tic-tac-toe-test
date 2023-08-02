const { TicTacToe } = require('./tictactoe');

const EMPTY_GAME_BOARD = `
 | |
-+-+-
 | |
-+-+-
 | |
`;

describe('tic tac toe tests', () => {
  var tictactoe = null;
  beforeAll(() => {
    tictactoe = new TicTacToe();
  });

  it('should create an object for the tictactoe game', () => {
    expect(tictactoe).not.toBe(null);
  });
  it('should have an empty 2d array to represent the gameboard', () => {
    expect(tictactoe.board).toStrictEqual([[], [], []]);
  });
  it('should return the 2d array as a string to represent the gameboard', () => {
    expect(tictactoe.getBoard()).toBe(EMPTY_GAME_BOARD);
  });
  it('defines play() function that will start the game', () => {
    tictactoe.play();
  });
  it('play() should print out messages and empty game board', () => {
    const testLog = jest.spyOn(global.console, 'log');

    tictactoe.play();

    expect(testLog).toHaveBeenCalled();
    expect(testLog.mock.calls).toContainEqual(['Game Board Creation...', EMPTY_GAME_BOARD, 'Board Created.', 'The game will start with player X']);
    testLog.mockRestore();
  });
  it('should have a function called checkBoard()', () => {
    tictactoe.checkBoard();
  });
});
