<script lang="ts">
	import { enumerateMoves } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    <ToolboxSection title="State">
        {#each Object.entries(game.) as [key, value]}
            <p>{key}: {value}</p>
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Setup">
        {#each Object.entries(game.) as [key, value]}
            <p>{key}: {value}</p>
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Actions">
        {#each Object.entries(game.actions) as [key, value]}
            <p>{key}: {value}</p>
        {/each}
    </ToolboxSection>
    
    <ToolboxSection title="Wins">
    </ToolboxSection>
    
    <ToolboxSection title="Losses">
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-left: 1px var(--border-color) solid;
    }
</style>