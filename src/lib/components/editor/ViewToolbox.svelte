<script lang="ts">
	import { enumerateMoves, playMove } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";

    export let game: Game;
    export let state: GameState;
    let history = [] as HistoryItem[];

    function advanceState(move: Move) {
        state = playMove(game, state, move);
        history = [...history, { move, state }];
        console.log(history);
    }

    function rewindState(ply: number) {
        state = history[ply-1].state;
        history = history.slice(0, ply);
    }
</script>

<div>
    <ToolboxSection title="State">
        {#each Object.entries(state.variables) as [key, value]}
            <ToolboxItem title="{key}: {value}" />
        {/each}
    </ToolboxSection>
    
    <ToolboxSection title="Available Moves">
        {#each enumerateMoves(game, state) as move}
            <ToolboxItem class="move" title="{move.actionName}({move.args.join(", ")})" on:click={() => advanceState(move)} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Played Moves">
        {#each history as historyItem}
            <ToolboxItem class="move" title="{historyItem.state.ply}. {historyItem.move.actionName}({historyItem.move.args.join(", ")})" on:click={() => rewindState(historyItem.state.ply)} />
        {/each}
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-right: 1px var(--border-color) solid;
    }

    :global(.move:hover) {
        background: var(--hover-color);
    }
</style>