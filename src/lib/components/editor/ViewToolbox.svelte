<script lang="ts">
	import { enumerateMoves, playMove } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";

    export let game: Game;
    export let state: GameState;

    function advanceState(move: Move) {
        state = playMove(game, state, move);
    }
</script>

<div>
    <ToolboxSection title="State">
        {#each Object.entries(state.variables) as [key, value]}
            <ToolboxItem title="{key}: {value}" />
        {/each}
    </ToolboxSection>
    
    <ToolboxSection title="Moves">
        {#each enumerateMoves(game, state) as move}
            <ToolboxItem class="move" title="{move.actionName}({move.args.join(", ")})" on:click={() => advanceState(move)} />
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