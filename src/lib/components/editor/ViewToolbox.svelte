<script lang="ts">
	import { enumerateMoves, executeBlock, rewindTo, typeOfVariable } from "$lib/ludi/engine";
	import type { Rules, GamePosition, GameState, Move } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
	import GridDisplay from "./GridDisplay.svelte";

    export let rules: Rules;
    export let state: GameState;
    export let previewPosition: GamePosition | null;

    function advanceState(move: Move) {
        state = executeBlock(rules, state, move);
    }

    function rewindState(ply: number) {
        state = rewindTo(state, ply);
    }
</script>

<div>
    <ToolboxSection title="Current State">
        {#each Object.entries(state.position.variables) as [key, value]}
            {@const type = typeOfVariable(rules, key)?.name}
            {#if type == 'Grid'}
                <ToolboxItem title="{key}">
                    <GridDisplay value={value} />
                </ToolboxItem>
            {:else}
                <ToolboxItem title="{key}: {value}" />
            {/if}
        {/each}
        <ToolboxItem title="Winner: {state.position.winner ? state.position.winner : "None"}" />
    </ToolboxSection>
    
    <ToolboxSection title="Available Moves">
        {#each enumerateMoves(rules, state) as move}
            <ToolboxItem class="move" title="{move.actionName}({move.args.join(", ")}) for {move.player}" on:click={() => advanceState(move)} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Played Moves">
        {#each state.history as historyItem}
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