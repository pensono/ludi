<script lang="ts">
	import type { Rules, GamePosition, Context } from "$lib/ludi/types";
	import ViewElement from "$lib/components/views/ViewElement.svelte";
	import { slide, fade } from "svelte/transition";

    export let context: Context;
    export let previewPosition: GamePosition | null = null;

    export let backgroundColor: string | undefined;
    export let foregroundColor: string | undefined;

    $: position = previewPosition ?? context.state.position;
    $: rootElement = context.rules.view;
    $: backgroundColor = rootElement?.attributes["background"];
    $: foregroundColor = rootElement?.attributes["foreground"];
</script>

<div class="container">
    {#each rootElement?.children || [] as view}
        <ViewElement bind:context bind:previewPosition bind:element={view} />
    {/each}

    <!-- 
        We must build an explicit win UI so that users are not in a position where the
        UI becomes unresponsive because the game has ended. This can be customizable,
        but showing this screen should be the default.
    -->
    {#if position.winner}
        <div transition:fade class="gray-out" />
        <div transition:slide class="banner top">
            {position.winner} Wins!
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div transition:slide class="banner bottom" on:click={context.reset}>
            Play Again
        </div>
    {/if}
</div>

<style lang="scss">
    div.banner {
        background-color: rgb(37, 37, 37);
        text-align: center;
        color: white;
        padding: 1rem;
        font-size: 2rem;
        user-select: none;
    }

    div.top {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    div.bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
    }

    div.gray-out {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(#000, .4);
    }

    div.container {
        flex-grow: 1;
        container: game / size;
        position: relative;
    }
</style>