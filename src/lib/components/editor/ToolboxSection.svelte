<script lang="ts">
	import { slide } from 'svelte/transition';

    export let title: string;
    let expanded = true;

    function toggleExpanded() {
        expanded = !expanded;
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<h2 on:click={toggleExpanded}>{title}<span class="expand-symbol material-symbols-outlined" class:expanded>chevron_left</span></h2>

{#if expanded}
    <div transition:slide>
        <slot />
    </div>
{/if}

<style lang="scss">
    h2 {
        margin: .5rem;
        margin-bottom: 0;
        user-select: none;
    }

    .expand-symbol {
        float: right;
        margin-right: .5rem;
        transition: rotate 200ms;
    }

    .expanded.expand-symbol {
        rotate: -90deg;
    }

    div {
        display: flex;
        flex-direction: column;
    }
</style>