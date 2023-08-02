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
  describe('test the checkBoard function', () => {
    beforeEach(() => {
      tictactoe.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    });
    it('is defined', () => {
      tictactoe.checkBoard();
    });
    it('should return player X if it has a 3 marks in a row for column 0', () => {
      tictactoe.board[0][0] = 'X';
      tictactoe.board[1][0] = 'X';
      tictactoe.board[2][0] = 'X';

      expect(tictactoe.checkBoard()).toBe('X');
    });
    it('should return player O if it has a 3 marks in a row for column 0', () => {
      tictactoe.board[0][0] = 'O';
      tictactoe.board[1][0] = 'O';
      tictactoe.board[2][0] = 'O';

      expect(tictactoe.checkBoard()).toBe('O');
    });
    it('should return player X if it has a 3 marks in a row for column 1', () => {
      tictactoe.board[0][1] = 'X';
      tictactoe.board[1][1] = 'X';
      tictactoe.board[2][1] = 'X';

      expect(tictactoe.checkBoard()).toBe('X');
    });
    it('should return player O if it has a 3 marks in a row for column 1', () => {
      tictactoe.board[0][1] = 'O';
      tictactoe.board[1][1] = 'O';
      tictactoe.board[2][1] = 'O';

      expect(tictactoe.checkBoard()).toBe('O');
    });
    it('should return player X if it has a 3 marks in a row for column 2', () => {
      tictactoe.board[0][2] = 'X';
      tictactoe.board[1][2] = 'X';
      tictactoe.board[2][2] = 'X';

      expect(tictactoe.checkBoard()).toBe('X');
    });
  });
});
