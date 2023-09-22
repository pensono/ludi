<script lang="ts">
    import type { LudiType } from "$lib/ludi/types";
    import Input from "$lib/components/util/Input.svelte";

    export let type: LudiType;
</script>

<p>{type.type}</p>

{#if type.type === "number"}
    <p><span class="name">Min</span><Input type="number" bind:value={type.min} /></p>
    <p><span class="name">Max</span><Input type="number" bind:value={type.max} /></p>
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