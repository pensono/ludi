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
action Capture(XStart, YStart, XEnd, YEnd):
    match BlackCapture from [XStart, YStart]:
        Black at [0, 0], White or WhiteKing at [1, -1] as Captured
        Black at [0, 0], White or WhiteKing at [-1, -1] as Captured
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