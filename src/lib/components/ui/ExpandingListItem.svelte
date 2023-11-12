<script lang="ts">
	import { slide, fade } from "svelte/transition";

    let hidden: boolean = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div on:click={() => hidden = !hidden}>
    <slot name="header" />
</div>
{#if !hidden}
    <div transition:slide>
        <slot name="body"  />
    </div>
{/if}