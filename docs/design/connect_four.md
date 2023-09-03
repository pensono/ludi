Goal here is to make a rulebook more or less directly translatable. Users likely don't want to be solving difficult problems so lots of built-in functions are useful (kinda like excel). Since edge cases are the hardest part of programming, cleverly hiding them in the logic (but not making it totally inaccessible) is preferred.

That being said, the ability to break down and write some actual code is necessary to enable handling any edge-cases. This mechanism could also be used for implementation of the library.

Some sort of state machine might be needed to determine things like the turn order

Examples:

Types:
```
Player: Red
    | Yellow

Square: Player
    | Empty

Board: Grid[Square, 7, 6] # More exotic examples could be Hexagonal, Triangular, Disjoint/Graph
```

State:
```
Board: Grid[Square, 7, 6]
CurrentTurn: Player
```

Any Action which typechecks is considered a possible action given the board state. Dependent types can be used to do this
```
action PlayPiece(ColumnNumber)
    do 
        change Board[ColumnNumber, 7] to Turn.Piece
        set Board to CompressDown(Board[ColumnNumber,])
        change CurrentTurn to NextTurn(CurrentTurn)

# Alternative implementation. Should also "just work"
action PlayPiece(ColumnNumber)
    do 
        set RowNumber to minimum y where Board[ColumnNumber, y] = Empty # If there is no minimum, this does not typecheck
        change Board[ColumnNumber, RowNumber] to Turn.Piece
        set CurrentTurn to NextTurn(CurrentTurn)

# Triggers- special actions which occur immediately after another action is played
# Triggers are executed in order until fixedpoint
action PlayPiece(ColumnNumber)
    PlacePiece for CurrentTurn on Board at (ColumnNumber, 7)

trigger ShiftDown(ColumnNumber, RowNumber)
    when Board[ColumnNumber, RowNumber] != Empty and Board[ColunmNumber, RowNumber - 1] == Empty
    MovePiece Down on Board from (ColumnNumber, RowNumber)
    MovePiece on Board from (ColumnNumber, RowNumber) to (ColumnNumber, RowNumber - 1) # Alternative

trigger ShiftDown(ColumnNumber, RowNumber) if possible # Alternative, bubbles the preconditions up
    MovePiece Down on Board from (ColumnNumber, RowNumber)

action RemovePiece(ColumnNumber)
    when GameMode = Pop
    do 
        change Board[ColumnNumber, 0] to Empty # `change` has the precondition that the value must change
        Board <= ColumnShiftedDown(Board, ColumnNumber)
        CurrentTurn <= NextTurn(CurrentTurn)


# Win is a special kind of action. Must take player as an argument
win Horizontal(Player)
    requires InARow(Player, Board, 4, Horizontal)

# Winning only on your turn can be encoded this way
win Vertical(Player)
    requires InARow(Player, Board, 4, Vertical)
    requires CurrentTurn = Player
```

```
NextTurn(Player) = NextInOrder(Player, [Red, Yellow])
    # Booo complex and CS-like
    match Player
        Red => Yellow
        Yellow => Red

Wins(Player) =
    InARow(Player, Board, 4, Horizontal)
    or InARow(Player, Board, 4, Vertical)
    or InARow(Player, Board, 4, Diagonal)

# Note that the bounds for x and y are not needed
# Even better, have some built-in InARow() function
WinsHorizontal(Player) =
    exists x, y: 
        Board[x, y] == Player & Board[x+1, y] == Player & Board[x+2, y] == Player & Board[x+3, y] == Player

WinsVertical(Player) =
    exists x, y: 
        Board[x, y] == Player & Board[x, y+1] == Player & Board[x, y+2] == Player & Board[x, y+3] == Player
```