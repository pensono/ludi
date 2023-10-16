<script lang="ts">
	import { parseAndEvaluateMove, typeOfVariable } from "$lib/ludi/engine";
	import type { Game, GamePosition, GameState, Move, View } from "$lib/ludi/types";
    import MiddleLines from "../svg/MiddleLines.svelte";
    import InnerLines from "../svg/InnerLines.svelte";
	import vars from "../util/vars";
	import ViewElement from "./ViewElement.svelte";

    export let positionStyle: string;
    export let game: Game;
    export let state: GameState;
    export let previewPosition: GamePosition | null;
    export let playMove: (move: Move) => void;
    export let element: View;
    
    $: variable = element.attributes["show"];
    $: data = previewPosition ? previewPosition.variables[variable] : state.position.variables[variable];
    $: width = typeOfVariable(game, variable)?.parameters.width;
    $: height = typeOfVariable(game, variable)?.parameters.height;

    $: lastMoveElement = element.children.find(c => c.attributes["useFor"] == "LastMove");
    $: lastMoveCoordinates = state.history.length > 0 ? state.history[state.history.length - 1].move.args : null;

    function clickSquare(x: number, y: number) {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const moveExpression = element.attributes["clickSquare"];
        const move = parseAndEvaluateMove(game, state, moveExpression, { x, y });

        // TODO use some sort of disabled state instead?
        if (move != null) {
            playMove(move);
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

        return `background-color: ${background}`;
    }

    function indexOrUndefined(array: any[][], x: number, y: number) : any | undefined {
        const row = array[x];
        if (!row) {
            return undefined;
        }

        return row[y];
    }
</script>

<div class="wrapper" style={positionStyle} use:vars={{ width, height }}>
    {#if element.attributes["middleLines"]}
        <MiddleLines color={element.attributes["middleLines"]} width={width} height={height} />
    {/if}
    {#if element.attributes["innerLines"]}
        <InnerLines color={element.attributes["innerLines"]} width={width} height={height} />
    {/if}

    <!-- Reverse y so that the origin is in the bottom left -->
    {#each [...Array(height).keys()].reverse() as y}
        {#each [...Array(width).keys()] as x}
            {@const element=elementFor(indexOrUndefined(data, x, y))}
            <!-- Map back into 1-index coordinates -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cell" style={styleCell(x, y)} on:click={() => clickSquare(x+1, y+1)}>
                {#if element}
                    <ViewElement bind:game bind:state previewPosition={previewPosition} element={element} playMove={playMove} />
                {/if}
                <!-- Super hacky -->
                {#if lastMoveElement && lastMoveCoordinates && `[${x+1},${y+1}]` === `[${lastMoveCoordinates[0]},${lastMoveCoordinates[1]}]`}
                    <ViewElement bind:game bind:state previewPosition={previewPosition} element={lastMoveElement} playMove={playMove} />
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