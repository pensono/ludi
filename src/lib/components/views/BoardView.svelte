<script lang="ts">
	import { parseAndEvaluateMove, playMove } from "$lib/ludi/engine";
	import type { Game, GameState, ViewElement } from "$lib/ludi/types";
	import vars from "../util/vars";

    export let game: Game;
    export let state: GameState;
    export let element: ViewElement;
    $: variable = element.attributes["data"];
    $: data = state.variables[variable];
    $: width = game.stateVariables[variable].type.parameters.width;
    $: height = game.stateVariables[variable].type.parameters.height;

    function clickSquare(x: number, y: number) {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const moveExpression = element.attributes["clickSquare"];
        const move = parseAndEvaluateMove(game, state, moveExpression, { x, y });

        console.log(move);
        // TODO use some sort of disabled state instead?
        if (move != null) {
            state = playMove(game, state, move);
        }
    }
</script>

<div class="wrapper" use:vars={{ width, height}}>
    <!-- Reverse y so that the origin is in the bottom left -->
    {#each [...Array(height).keys()].reverse() as y}
        {#each [...Array(width).keys()] as x}
            <!-- Map back into 1-index coordinates -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cell" on:click={() => clickSquare(x+1, y+1)}>
                {data[x][y] == 'Empty' ? '' : data[x][y]}
            </div>
        {/each}
    {/each}
</div>

<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: repeat(var(--width), 1fr);
        grid-template-rows: repeat(var(--height), 1fr);

        height: 100%;
    }

    div.cell {
        border: 2px solid black;
        font-size: 10em;
        text-align: center;
        vertical-align: center;
    }
</style>