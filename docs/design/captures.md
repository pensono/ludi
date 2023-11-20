Pattern matching?

```
pattern BlackCapture:
    Black at [0, 0], White or WhiteKing at [1, -1] as Captured
    Black at [0, 0], White or WhiteKing at [-1, -1] as Captured

action Capture(XStart, YStart, XEnd, YEnd):
    match BlackCapture from [XStart, YStart]
    remove Captured
    move Board[XStart, YStart] to Board[XEnd, YEnd]
```

Inline Pattern matching

```
pattern BlackCapture:
    Black at [0, 0], White or WhiteKing at [1, -1] as Captured
    Black at [0, 0], White or WhiteKing at [-1, -1] as Captured

action Capture(XStart, YStart, XEnd, YEnd):
    match BlackCapture from Board[XStart, YStart]:
        Black at [0, 0], White or WhiteKing at [1, -1] as Captured
        Black at [0, 0], White or WhiteKing at [-1, -1] as Captured
    remove Captured
    move Board[XStart, YStart] to Board[XEnd, YEnd]
```

Pattern matching

```
action Capture(XStart, YStart, XEnd, YEnd):
    match Black, White or WhiteKing, Empty:
        Board[XStart, YStart], Board[XStart+1, YStart+1], Board[XStart+2, YStart+2]
        Board[XStart, YStart], Board[XStart-1, YStart+1], Board[XStart-2, YStart+2]
    move Board[XStart, YStart] to Board[XEnd, YEnd]
    remove Captured
    move Board[XStart, YStart] to Board[XEnd, YEnd]
```

over

```
action Capture(XStart, YStart, XEnd, YEnd):
    when Board[x1, y1] = White
    move Board[x1, y1] to Board[x2, y2] by [-2, 2] or [2, 2] over Black or BlackKing
    change CurrentPlayer to Black
```

direction/distance

```
action Capture(XStart, YStart, XEnd, YEnd):
    when Board[x1, y1] = White
    move Board[XStart, YStart] to Board[XEnd, YEnd] direction Diagonal distance 2 over Black or BlackKing as Captured
    remove Captured
    change CurrentPlayer to Black
```

pieces

```
piece White:
    moves by [-1, 1] or [1, 1]
    moves by [-1, 1] or [1, 1]

piece WhiteKing:
    moves by [-1, 1] or [1, 1]
    moves by [-1, 1] or [1, 1]

action Capture(XStart, YStart, XEnd, YEnd):
    when Board[x1, y1] = White
    move Board[XStart, YStart] to Board[XEnd, YEnd] direction Diagonal distance 2 over Black or BlackKing as Captured
    remove Captured
    change CurrentPlayer to Black
```