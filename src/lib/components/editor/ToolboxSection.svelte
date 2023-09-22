<script lang="ts">
	import { slide } from 'svelte/transition';

    export let title: string;
    let expanded = true;

    function toggleExpanded() {
        expanded = !expanded;
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<h2 on:click={toggleExpanded}>{title}<span class="expand-symbol material-symbols-outlined">{expanded ? "expand_less" : "expand_more"}</span></h2>

{#if expanded}
<div transition:slide>
    <slot />
</div>
{/if}

<style lang="scss">
    h2 {
        margin: .5rem;
        user-select: none;
    }

    .expand-symbol {
        float: right;
        margin-right: .5rem;
    }
</style>