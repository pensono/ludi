How to do tested state machines?

setup phase:
    - x
    - y
    - z
play phase:
    - turn
      - draw
      - play
        - sub-action
      - discard
    - turn


Groupings;
```
phase setup {
    action x
    action y
    action z

    state setupState
}

phase play {
    action draw
    action play
    action discard
}
```