const hello = require('./tictactoe');

//DEBT1
describe('hello', () => {
  it('should return hello', () => {
    expect(hello()).toBe('hello');
  });
});
