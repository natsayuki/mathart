# 01-03 | Starting Animation

1. Create new project folder, index, and script
1. Setup index with same stuff
    1. Link Neogebra and script
1. In script create vars for canvas, and context
    1. Flip context
1. Create y=x function `f`
1. Draw it with `ctx.graph(f)`
    1. Explain this is just a Neogebra shortcut for the graphing we did last lesson
1. Make a new function `mainLoop`
    1. Do **NOT** name it `main` as that is reserved for Neogebra
1. Move `ctx.graph(f)` into `mainLoop`
    1. Let them realize there is now nothing graphed
1. Set 60fps interval on `mainLoop`
1. Define `xOffset` and set to 0
1. Change `f` to `x + xOffset`
    1. Line should appear again
1. Add `xOffset = xOffset + 1` at end of `mainLoop`
    1. Line should now leave trail across screen
1. Add clearRect at beginning of `mainLoop`
1. Make a fillRect with and x value of `xOffset`
1. Change fill and stroke style for fun
