Built-in functions:

```
RollDice()

ClearSquare(Board, X, Y)
    requires Board[X, Y] != Empty
    do
        Board[X, Y] <= Empty

MovePiece [on Board]
```

Global Variables:

```
TurnNumber
CurrentPlayer
kind Player
```