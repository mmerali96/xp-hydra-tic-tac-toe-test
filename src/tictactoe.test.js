const hello = require('./tictactoe');

//DEBT1
describe('hello', () => {
  it('should return hello', () => {
    expect(hello()).toBe('hello');
  });
});

describe('tic tac toe tests', () => {
  it('should have a function called tictactoe', () => {
    tictactoe();
  });
});
