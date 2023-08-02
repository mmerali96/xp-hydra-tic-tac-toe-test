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
  it('should have an empty 2d array with 3 empty strings in each row to represent the gameboard', () => {
    expect(tictactoe.board).toStrictEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
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
  describe('test the checkBoard function for vertical winners', () => {
    beforeEact(() => {
      tictactoe.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    });
  });
  it('should have a function called checkBoard()', () => {
    tictactoe.checkBoard();
  });
  it('should return player X if it has a 3 marks in a row for each column', () => {
    tictactoe.board[0][0] = 'X';
    tictactoe.board[1][0] = 'X';
    tictactoe.board[2][0] = 'X';
    console.log(tictactoe.board);
    expect(tictactoe.checkBoard()).toBe('X');
  });
  it('should return player O if it has a 3 marks in a row for each column', () => {
    tictactoe.board[0][0] = 'O';
    tictactoe.board[1][0] = 'O';
    tictactoe.board[2][0] = 'O';
    console.log(tictactoe.board);
    expect(tictactoe.checkBoard()).toBe('O');
  });
});
