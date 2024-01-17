<script lang="ts">
	import { enumerateMoves, executeBlock, playMove, rewindTo, typeOfVariable } from "$lib/ludi/engine";
	import type { Rules, GamePosition, GameState, Move, Context, GameResult } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
	import GridDisplay from "./GridDisplay.svelte";

    export let context: Context;
    export let previewPosition: GamePosition | null;

    function advanceState(move: Move) {
        context.state = playMove(context.rules, context.state, move)!;
    }

    function rewindState(ply: number) {
        context.state = rewindTo(context.state, ply);
    }

    function resultText(result: GameResult | undefined) {
        if (!result) {
            return "None";
        }

        if (result == "draw") {
            return "Draw";
        }

        return `${result.winner} Wins!`;
    }
</script>

<div>
    <ToolboxSection title="Current State">
        {#each Object.entries(context.state.position.variables) as [key, value]}
            {@const type = typeOfVariable(context.rules, key)?.name}
            {#if type == 'Grid'}
                <ToolboxItem title="{key}">
                    <GridDisplay value={value} />
                </ToolboxItem>
            {:else}
                <ToolboxItem title="{key}: {value}" />
            {/if}
        {/each}
        <ToolboxItem title="Result: {resultText(context.state.position.result)}" />
    </ToolboxSection>
    
    <ToolboxSection title="Available Moves">
        {#each enumerateMoves(context.rules, context.state) as move}
            <ToolboxItem class="move" title="{move.actionName}({move.args.join(", ")}) for {move.player}" on:click={() => advanceState(move)} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Played Moves">
        {#each context.state.history as historyItem}
            <ToolboxItem 
                class="move"
                title="{historyItem.ply}. {historyItem.move.actionName}({historyItem.move.args.join(", ")}) for {historyItem.move.player}"
                on:click={() => rewindState(historyItem.ply)} 
                on:mouseenter={() => previewPosition = historyItem.position}
                on:mouseleave={() => previewPosition = null}/>
        {/each}
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-right: 1px var(--color-divider) solid;
        overflow-y: auto;
        overflow-x: hidden;
        
        scrollbar-width: thin;
        scrollbar-color: var(--color-detail) transparent;
    }

    :global(.move:hover) {
        background: var(--color-hover);
    }
</style>