<script lang="ts">
	import { parseAndEvaluateMove, playMove } from "$lib/ludi/engine";
	import type { Game, GameState, View } from "$lib/ludi/types";
	import vars from "../util/vars";
	import ViewElement from "./ViewElement.svelte";
	import { toSize } from "./utils";

    export let positionStyle: string;
    export let game: Game;
    export let state: GameState;
    export let element: View;
    $: variable = element.attributes["show"];
    $: data = state.variables[variable];
    $: width = game.stateVariables[variable].type.parameters.width;
    $: height = game.stateVariables[variable].type.parameters.height;

    function clickSquare(x: number, y: number) {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const moveExpression = element.attributes["clickSquare"];
        const move = parseAndEvaluateMove(game, state, moveExpression, { x, y });

        // TODO use some sort of disabled state instead?
        if (move != null) {
            state = playMove(game, state, move);
        }
    }

    function elementFor(value: any): View | undefined {
        return element.children.find(c => c.attributes["useFor"] == value);
    }

    function styleCell(x: number, y: number) {
        const background = element.attributes["background"];
        if (!background) {
            return '';
        }

        const parts = background.split(" ");
        if (parts[0] == "Checker") {
            const color1 = parts[1];
            const color2 = parts[2];
            const color = ((x + y) % 2) ? color1 : color2;
            return `background-color: ${color};`;
        }
        
        if (element.attributes["innerLines"]) {
            // Since innerLines was specified, a background color must be used so the lines render correctly
            return `background-color: #fff;`;
        }

        return `background-color: ${background}`;
    }

    function styleWrapper() {
        const innerLines = element.attributes["innerLines"];
        if (!innerLines) {
            return '';
        }
        
        const parts = innerLines.split(" ");
        const color = parts[0];
        const size = parts[1];
        return `background-color: ${color}; gap: ${toSize(size)};`;
    }
</script>

<div class="wrapper" style={positionStyle+styleWrapper()} use:vars={{ width, height}}>
    <!-- Reverse y so that the origin is in the bottom left -->
    {#each [...Array(height).keys()].reverse() as y}
        {#each [...Array(width).keys()] as x}
            {@const element=elementFor(data[x][y])}
            <!-- Map back into 1-index coordinates -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cell" style={styleCell(x, y)} on:click={() => clickSquare(x+1, y+1)}>
                {#if element}
                    <ViewElement bind:game={game} bind:state={state} element={element} />
                {/if}
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
        container-type: size;
    }
</style>