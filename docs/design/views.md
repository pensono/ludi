HTML-like at the bottom
```
players X or O
kind Square a Empty or X or O

state Board a Grid<Square, 3, 3>

setup:
    set CurrentPlayer to X

action Play(x a Number<1, 3>, y a Number<1, 3>) for CurrentPlayer:
    when Board[x, y] = Empty
    change Board[x, y] to CurrentPlayer
    change CurrentPlayer to NextInSequence(CurrentPlayer, Player)

win Horizontal() for player:
    when InARow(player, Board, 4, Horizontal)
        or InARow(player, Board, 4, Vertical)
        or InARow(player, Board, 4, Horizontal)

<view>
    <board of="Board" clickSquare="Play(x, y)" align="Screen.Center" size="50%">
      <image for="X" file="x.svg" />
      <image for="O" file="o.svg" />
    </board>
</view>
```

Inline.

Downsides: Hard to specify ordering
```
players X or O
kind Square a Empty or X or O

state Board a Grid<Square, 3, 3>
  display 

setup:
    set CurrentPlayer to X

action Play(x a Number<1, 3>, y a Number<1, 3>) for CurrentPlayer:
    when Board[x, y] = Empty
    change Board[x, y] to CurrentPlayer
    change CurrentPlayer to NextInSequence(CurrentPlayer, Player)

win Horizontal() for player:
    when InARow(player, Board, 4, Horizontal)
        or InARow(player, Board, 4, Vertical)
        or InARow(player, Board, 4, Horizontal)
```