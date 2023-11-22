<script lang="ts">
	import type { Rules, GamePosition, GameState, Statement } from "$lib/ludi/types";
	import ViewElement from "$lib/components/views/ViewElement.svelte";
	import { slide, fade } from "svelte/transition";

    export let rules: Rules;
    export let state: GameState;
    export let previewPosition: GamePosition | null = null;
    export let runStatements: (statementList: Statement[], locals: Record<string, any>) => void;
    export let reset: () => void;

    $: position = previewPosition ?? state.position;
    $: rootElement = rules.view;
</script>

<div class="container">
    {#each rootElement?.children || [] as view}
        <ViewElement bind:rules bind:state bind:previewPosition bind:element={view} runStatements={runStatements} />
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
        <div transition:slide class="banner bottom" on:click={reset}>
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