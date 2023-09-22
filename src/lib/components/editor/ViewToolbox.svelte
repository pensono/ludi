<script lang="ts">
	import { enumerateMoves } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    <ToolboxSection title="State">
        {#each Object.entries(state.variables) as [key, value]}
            <p>{key}: {value}</p>
        {/each}
    </ToolboxSection>
    
    <ToolboxSection title="Moves">
        {#each enumerateMoves(game, state) as move}
            <p>{move.actionName}({move.args.join(", ")})</p>
        {/each}
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-right: 1px var(--border-color) solid;
    }
</style>