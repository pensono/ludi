<script lang="ts">
	import type { Game, GameState, ViewElement } from "$lib/ludi/types";
	import BoardView from "./BoardView.svelte";

    export let game: Game;
    export let state: GameState;
    export let element: ViewElement;

    $: positionStyle = `
        position: relative;
        left: ${toAlignment('horizontal', element.attributes.align, toSize(element.attributes.size))};
        top: ${toAlignment('vertical', element.attributes.align, toSize(element.attributes.size))};
        width: ${toSize(element.attributes.size)};
        height: ${toSize(element.attributes.size)};
    `;

    function toSize(sizeExpression: string): string {
        if (sizeExpression.endsWith("%")) {
            return `${sizeExpression.substring(0, sizeExpression.length - 1)}cqmin`;
        }

        return "0"
    }

    function toAlignment(orientation: 'vertical' | 'horizontal', alignExpression: string, size: string): string {
        switch (alignExpression) {
            case "Center":
                return orientation == 'horizontal'
                    ? `calc((100cqw - ${size}) / 2)`
                    : `calc((100cqh - ${size}) / 2)`;
        }
        return '0';
    }
</script>

{#if element.name == 'board'}
    <BoardView bind:game={game} bind:state={state} bind:element={element} positionStyle={positionStyle} />
{/if}
