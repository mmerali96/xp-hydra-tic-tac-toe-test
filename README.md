# Tic Tac Toe repo

## Objective:

The system should run in BOT mode (random BOT moves for player X & O) to print on the screen all the player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

- ✅ TIC1: User can see a gameboard that is 3x3 and is empty when the game first starts

- Acceptance test:

```
Game Board Creation...
 | |
-+-+-
 | |
-+-+-
 | |
Board Created.
```

✅ TIC2: Users know which player will make the first move

- Acceptance Test: Under the gameboard, the following message appears

```
The game will start with player X
```

🚧 TIC3: Player can win with vertical line

- Acceptance test:

```
Game Board Creation...
 |X|O
-+-+-
 |X|O
-+-+-
 |X|
PLAYER X WON!
```

⚠ TIC4: Player can win with horizontal line

- Acceptance test:

```
Game Board Creation...
O|O|O
-+-+-
 |X|
-+-+-
 |X|
PLAYER O WON!
```

⚠ TIC5: Player can win with diagonal line

- Acceptance test:

```
Game Board Creation...
X|O|O
-+-+-
 |X|
-+-+-
 | |X
 PLAYER X WON!
```

⚠ TIC6: No winner. Game ends in a draw.

- Acceptance test:

```
Game Board Creation...
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O
GAME ENDS WITH A DRAW!
```
