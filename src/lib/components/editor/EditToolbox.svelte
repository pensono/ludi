<script lang="ts">
	import type { Action, Game, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
    import TypeEditor from "./TypeEditor.svelte";
    import Input from "$lib/components/util/Input.svelte";

    export let game: Game;
    export let state: GameState;

    let actionDetail: Action | null = null;
</script>

<div>
    <ToolboxSection title="State">
        {#each game.stateVariables as stateVariable}
            <TypeEditor bind:title={stateVariable.name} bind:type={stateVariable.type} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Setup">
    </ToolboxSection>

    <ToolboxSection title="Actions">
        {#each Object.entries(game.actions) as [name, action]}
            <ToolboxItem
                class="move {actionDetail === action && 'detail-active'}"
                title="{action.name}({action.parameters.map(p => p.name).join(", ")}) for {action.player}"
                on:click={() => actionDetail = action} />
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

{#if actionDetail}
    <div>
        <Input bind:value={actionDetail.name} kind="string" />
        <!-- <ExpressionEditor bind:value={actionDetail.player} /> -->
        <ToolboxItem title="Parameters">
            {#each actionDetail.parameters as parameter}
                <TypeEditor bind:title={parameter.name} bind:type={parameter.type} />
            {/each}
        </ToolboxItem>
    </div>
{/if}

<style lang="scss">
    div {
        width: 22rem;

        border-left: 1px var(--border-color) solid;
        overflow-y: auto;
        overflow-x: hidden;
    }

    :global(.detail-active) {
        background-color: var(--active-color);
    }

    * {
        --item-label-size: 8rem;
    }
</style>