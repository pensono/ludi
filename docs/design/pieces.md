```
piece White:
    flagged White
    move 1, 1
    move -1, 1

    move 2, 2

piece WhiteKing:
    flagged King

// hmmm
action Move(XStart, YStart, XEnd, YEnd):
    when Board[x1, y1] flagged White
    move Board[XStart, YStart] to Board[XEnd, YEnd] direction Diagonal distance 2 over Black or BlackKing as Captured
    remove Captured
    change CurrentPlayer to Black
```