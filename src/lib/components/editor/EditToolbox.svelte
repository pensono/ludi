<script lang="ts">
	import { enumerateMoves } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
    import TypeEditor from "./TypeEditor.svelte";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    <ToolboxSection title="State">
        {#each game.stateVariables as stateVariable}
            <ToolboxItem title={stateVariable.name}>
                <TypeEditor type={stateVariable.type} />
            </ToolboxItem>
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Setup">
    </ToolboxSection>

    <ToolboxSection title="Actions">
        {#each Object.entries(game.actions) as [key, value]}
            <p>{key}: {JSON.stringify(value)}</p>
        {/each}
    </ToolboxSection>
    
    <ToolboxSection title="Wins">
    </ToolboxSection>
    
    <ToolboxSection title="Losses">
    </ToolboxSection>

    
    <ToolboxSection title="Views">
        {#each game.views as view}
            <ToolboxItem title={view.name}>
                {#each Object.entries(view.attributes) as [key, value]}
                    <p>{key}: {value}</p>
                {/each}
            </ToolboxItem>
        {/each}
    </ToolboxSection>
</div>

<style lang="scss">
    div {
        width: 25rem;

        border-left: 1px var(--border-color) solid;
    }

    * {
        --item-name-size: 5rem;
    }
</style>