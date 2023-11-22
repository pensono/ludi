<script lang="ts">
	import type { Rules, GamePosition, GameState, Move, Statement, View } from "$lib/ludi/types";
    import { parseParts } from "./utils";
	import BoardView from "./BoardView.svelte";
	import TextView from "./TextView.svelte";
	import ImageView from "./ImageView.svelte";

    export let rules: Rules;
    export let state: GameState;
    export let previewPosition: GamePosition | null;
    export let runStatements: (statementList: Statement[], locals: Record<string, any>) => void;
    export let element: View;

    $: positionStyle = calculatePositionStyle(element);

    function calculatePositionStyle(element: View) : string {
        const size = parseParts(element.attributes.size ?? "100%");
        const alignment = parseParts(element.attributes.align ?? "Center");

        return `
            position: absolute;
            left: ${toAlignment('horizontal', alignment.horizontal, size.horizontal)};
            top: ${toAlignment('vertical', alignment.vertical, size.vertical)};
            width: ${size.horizontal ? toSize(size.horizontal) : 'unset'};
            height: ${size.vertical ? toSize(size.vertical) : 'unset'};
            overflow: hidden;
        `
    }

    function toSize(sizeExpression: string): string {
        if (sizeExpression.endsWith("%")) {
            // Can't use cqmin because of strange webkit bug
            const amount = sizeExpression.substring(0, sizeExpression.length - 1);
            return `calc(min(${amount}cqw, ${amount}cqh))`;
        }

        return "0"
    }

    function toAlignment(axis: 'vertical' | 'horizontal', alignExpression: string, sizeExpression: string): string {
        switch (alignExpression) {
            case "Center":
                return axis == 'horizontal'
                    ? `calc((100cqw - ${toSize(sizeExpression)}) / 2)`
                    : `calc((100cqh - ${toSize(sizeExpression)}) / 2)`;
            case "Bottom":
                return axis == 'horizontal'
                    ? `0`
                    : `calc(100cqh - ${toSize(sizeExpression)})`;
            case "Left":
                return `0`;
        }
        return '0';
    }
</script>

{#if element.name == 'board'}
    <BoardView bind:rules={rules} bind:state={state} bind:previewPosition={previewPosition} bind:element={element} runStatements={runStatements} positionStyle={positionStyle} />
{:else if element.name == 'text'}
    <TextView bind:rules={rules} bind:state={state} bind:element={element} positionStyle={positionStyle} />
{:else if element.name == 'image'}
    <ImageView bind:rules={rules} bind:state={state} bind:element={element} positionStyle={positionStyle} />
{/if}
