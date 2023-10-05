<script lang="ts">
	import { enumerateMoves, playMove, rewindTo } from "$lib/ludi/engine";
	import type { Game, GameState, HistoryItem, Move } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
	import GridDisplay from "./GridDisplay.svelte";

    export let game: Game;
    export let state: GameState;

    function advanceState(move: Move) {
        state = playMove(game, state, move);
    }

    function rewindState(ply: number) {
        state = rewindTo(state, ply);
    }
</script>

<div>
    <ToolboxSection title="Current State">
        {#each Object.entries(state.position.variables) as [key, value]}
            {@const type = game.stateVariables[key].type.name}
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
        {#each enumerateMoves(game, state) as move}
            <ToolboxItem class="move" title="{move.actionName}({move.args.join(", ")})" on:click={() => advanceState(move)} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Played Moves">
        {#each state.history as historyItem}
            <ToolboxItem class="move" title="{historyItem.ply}. {historyItem.move.actionName}({historyItem.move.args.join(", ")})" on:click={() => rewindState(historyItem.ply)} />
        {/each}
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-right: 1px var(--border-color) solid;
        overflow-y: auto;
        overflow-x: hidden;
    }

    :global(.move:hover) {
        background: var(--hover-color);
    }
</style>