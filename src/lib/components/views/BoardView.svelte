<script lang="ts">
	import { typeOfVariable } from "$lib/ludi/engine";
	import type { Rules, GamePosition, GameState, Move, Statement, View } from "$lib/ludi/types";
    import MiddleLines from "../svg/MiddleLines.svelte";
    import InnerLines from "../svg/InnerLines.svelte";
	import ViewElement from "./ViewElement.svelte";
	import { parseInteraction } from "$lib/ludi/parser";
	import { gridCoordinates } from "./utils";

    export let positionStyle: string;
    export let rules: Rules;
    export let state: GameState;
    export let previewPosition: GamePosition | null;
    export let runStatements: (statementList: Statement[], locals: Record<string, any>) => void;
    export let element: View;

    let mousePositionStyle = '';
    let draggedPieceCoordinates: null | {x: number, y: number} = null;
    let board: HTMLDivElement;
    
    $: variable = element.attributes["show"];
    $: grid = previewPosition ? previewPosition.variables[variable] : state.position.variables[variable];
    $: width = typeOfVariable(rules, variable)?.parameters.width;
    $: height = typeOfVariable(rules, variable)?.parameters.height;

    $: lastMoveElement = element.children.find(c => c.attributes["useFor"] == "LastMove");
    $: lastMoveCoordinates = state.history.length > 0 ? state.history[state.history.length - 1].move.args : null;

    function clickSquare(x: number, y: number) {
        // TODO Sad to do so much eval here, will need to fix this eventually
        const statementsString = element.attributes["clickSquare"];
        if (!statementsString) {
            return;
        }

        const statements = parseInteraction(statementsString);
        runStatements(statements, { x, y });
    }

    function getClientCoordinates(event: PointerEvent | TouchEvent) : {x: number, y: number} {
        if (event instanceof PointerEvent) {
            return { x: event.clientX, y: event.clientY };
        } else {
            // Only changed touches is populated for touchend
            const pointer = event.touches[0] || event.changedTouches[0];
            return { x: pointer.clientX, y: pointer.clientY };
        }
    }

    function toBoardCoordinates(coords: {x: number, y: number}) {
        const boardRect = board.getBoundingClientRect();
        return {
            x: Math.floor((coords.x - boardRect.x) * width / boardRect.width) + 1,
            y: height - Math.floor((coords.y - boardRect.y) * height / boardRect.height)
        };
    }

    function updateDragCoordinates(event: PointerEvent | TouchEvent) {
        const {x, y} = board.getBoundingClientRect();
        const {x: clientX, y: clientY} = getClientCoordinates(event);
        mousePositionStyle = `--mouse-x: ${clientX - x}px; --mouse-y: ${clientY - y}px;`;
    }
    
    function pointerDown(event: PointerEvent | TouchEvent) {
        updateDragCoordinates(event);
        const boardCoordinates = toBoardCoordinates(getClientCoordinates(event));
        if (element.attributes["drag"]) {
            draggedPieceCoordinates = boardCoordinates;
        }
    }

    function pointerUp(event: PointerEvent | TouchEvent) {
        if (!draggedPieceCoordinates) {
            // Event is not the result of a drag, probably a random click
            return;
        }

        // TODO Sad to do so much eval here, will need to fix this eventually
        const statementsString = element.attributes["drag"];
        if (!statementsString) {
            return;
        }
        
        updateDragCoordinates(event);
        const boardCoordinates = toBoardCoordinates(getClientCoordinates(event));
        
        const statements = parseInteraction(statementsString);
        const parameters = { 
            xStart: draggedPieceCoordinates.x,
            yStart: draggedPieceCoordinates.y,
            xEnd: boardCoordinates.x,
            yEnd: boardCoordinates.y 
        };
        runStatements(statements, parameters);

        draggedPieceCoordinates = null;
    }

    function elementsFor(value: any): View[] {
        return element.children.filter(c => c.attributes["useFor"] == value);
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
        const row = array[x-1];
        if (!row) {
            return undefined;
        }

        return row[y-1];
    }
</script>

<div 
    bind:this={board}
    class="wrapper"
    style={positionStyle + mousePositionStyle}
    style:--width={width}
    style:--height={height}
    on:pointermove|preventDefault={updateDragCoordinates}
    on:touchmove|preventDefault={updateDragCoordinates}>
    {#if element.attributes["middleLines"]}
        <MiddleLines color={element.attributes["middleLines"]} width={width} height={height} />
    {/if}
    {#if element.attributes["innerLines"]}
        <InnerLines color={element.attributes["innerLines"]} width={width} height={height} />
    {/if}

    <!-- Reverse y so that the origin is in the bottom left -->
    {#each gridCoordinates(width, height) as {x, y}}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
            class="cell"
            style={styleCell(x, y)}
            style:grid-row={height-y+1}
            style:grid-column={x}
            data-x={x}
            data-y={y}
            on:click={() => clickSquare(x, y)}
            on:pointerdown|preventDefault={pointerDown}
            on:pointerup={pointerUp}
            on:touchstart|preventDefault={pointerDown}
            on:touchend|preventDefault={pointerUp}/>
    {/each}
    
    {#each gridCoordinates(width, height) as {x, y}}
        {#each elementsFor(indexOrUndefined(grid, x, y)) as element}
            {@const dragging = x === draggedPieceCoordinates?.x && y === draggedPieceCoordinates?.y}
            <div 
                class="piece"
                class:dragging
                style:--x={x}
                style:--y={y}>
                <ViewElement bind:rules bind:state previewPosition={previewPosition} element={element} runStatements={runStatements} />
            </div>
        {/each}
        <!-- Super hacky -->
        {#if lastMoveElement && lastMoveCoordinates && `[${x},${y}]` === `[${lastMoveCoordinates[0]},${lastMoveCoordinates[1]}]`}
            <div class="overlay" style:--x={x} style:--y={y}>
                <ViewElement bind:rules bind:state previewPosition={previewPosition} element={lastMoveElement} runStatements={runStatements} />
            </div>
        {/if}
    {/each}
</div>


<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: repeat(var(--width), 1fr);
        grid-template-rows: repeat(var(--height), 1fr);

        height: 100%;
        user-select: none;
    }

    div.cell {
        container-type: size;
    }

    div.piece {
        container-type: size;
        grid-column: calc(var(--x));
        grid-row: calc(var(--height) - var(--y) + 1);
        
        /* Needed so the pointerup event goes to the square rather than the piece */
        touch-action: none;
        pointer-events: none;
    }

    div.overlay {
        container-type: size;
        grid-column: calc(var(--x));
        grid-row: calc(var(--height) - var(--y) + 1);
    }

    div.piece.dragging {
        z-index: 100;
        transform: translate(calc(var(--mouse-x) + 50% - (var(--x) * 100%)), calc(var(--mouse-y) + 50% - ((var(--height) - var(--y) + 1) * 100%)));
        cursor: grabbing;
    }
</style>