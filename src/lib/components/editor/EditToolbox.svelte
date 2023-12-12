<script lang="ts">
	import type { Action, Rules, GameState } from "$lib/ludi/types";
	import ToolboxSection from "./ToolboxSection.svelte";
	import ToolboxItem from "./ToolboxItem.svelte";
    import TypeEditor from "./TypeEditor.svelte";
    import Input from "$lib/components/util/Input.svelte";

    export let rules: Rules;
    export let state: GameState;

    let actionDetail: Action | null = null;
</script>

<div>
    <ToolboxSection title="State">
        {#each rules.stateVariables as stateVariable}
            <TypeEditor bind:title={stateVariable.name} bind:type={stateVariable.type} />
        {/each}
    </ToolboxSection>

    <ToolboxSection title="Setup">
    </ToolboxSection>

    <ToolboxSection title="Actions">
        {#each rules.actions as action}
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
        {#if rules.view}
            <ToolboxItem title={rules.view.name}>
                {#each Object.entries(rules.view.attributes) as [key, value]}
                    <p>{key}: {value}</p>
                {/each}
            </ToolboxItem>
        {/if}
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

        border-left: 1px var(--color-divider) solid;
        overflow-y: auto;
        overflow-x: hidden;
        
        scrollbar-width: thin;
        scrollbar-color: var(--color-detail) transparent;
    }

    :global(.detail-active) {
        background-color: var(--color-active);
    }

    * {
        --item-label-size: 8rem;
    }
</style>