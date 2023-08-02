# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

# Pomodoro 1

- ✅ Create User Stories
- ✅ Setup boilerplate jest test case
- ✅ Create tictactoe function
- ✅ DEBT1: Remove boilerplace code
- ✅ TIC1: User can see a gameboard that is 3x3 and is empty when the game first starts
  - ✅ Build empty gameboard string

# Pomodoro 2: Mehdi Merali - 2:26pm-2:56pm

- ✅ DEBT4: Refactor to use OOP
  - ✅ create class
  - ✅ init class with empty 2d array with 3 columns, [[],[],[]]
  - ✅ create print function that converts empty array into string with empty gameboard
    - ✅ Remove old function (non oop) and test
- ✅ create play function that starts the game execution
- 🚧 DEBT3: Use constants for commonly used strings
- 🚧 play() function should output messages and gameboard

  - ✅ Game Board Creation...
  - ⚠ `<empty gameboard>`
  - ⚠ Board Created.

- ⚠ DEBT2: Create gameboard function to build the gameboard dynamically

# Pomodoro 3: Mehdi Merali - 2:57 - 3:27

- ✅ DEBT3: Use constants for commonly used strings
- ✅ play() function should output messages and gameboard

  - ✅ Game Board Creation...
  - ✅ `<empty gameboard>`
  - ✅ Board Created.

- ✅ TIC2: Users know which player will make the first move

  - ✅ print that game will start with player X

- ✅ DEBT5: Refactor test cases to use same TicTacToe class instance
- 🚧 TIC3: Player can win with vertical line

  - 🚧 Create function to check if board has vertical line winner
    - ✅ define function checkBoard() in TicTacToe class
    - ⚠ check if each vertical line in checkBoard() has same player symbol and return the player.
    - ⚠ if there is no winner, return false
  - ⚠ play() should loop through players until checkBoard() function returns winner

  # Pomodoro 4: Mehdi Merali - 3:27 - 3:57

- 🚧 TIC3: Player can win with vertical line

  - 🚧 Create function to check if board has vertical line winner

    - ✅ define function checkBoard() in TicTacToe class
    - ✅ check if each vertical line in checkBoard() has same player symbol and return the player.

      - ✅ check for player X
      - ✅ check player O

    -
    - 🚧 check for vertical winner in middle column
    - ⚠ check for vertical winnner in last column
    - ⚠ if there is no winner, return false

- ✅ DEBT6: refactor checkWinners test to be in describe block and have cleanup that reinitializes board to empty state before each test.

  - ⚠ play() should loop through players until checkBoard() function returns winner

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE
