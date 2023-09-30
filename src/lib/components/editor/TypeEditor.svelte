<script lang="ts">
    import type { LudiType } from "$lib/ludi/types";
    import Input from "$lib/components/util/Input.svelte";

    export let type: LudiType;
</script>

<p>{type.name}</p>

{#if type.name === "number"}
    <p><span class="name">Min</span><Input type="number" bind:value={type.parameters.min} /></p>
    <p><span class="name">Max</span><Input type="number" bind:value={type.parameters.max} /></p>
{/if}

<style lang="scss">
    p {
        color: var(--detail-text);
        margin: 0;
    }

    span.name {
        display: inline-block;
        width: var(--item-name-size)
    }
</style>