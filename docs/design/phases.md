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
      enter state play

    state setupState
}

phase play {
    action draw
    action play
    action discard

    phase battle {
      action Kill
        exit phase
    }
}
```