<script lang="ts">
	import type { Game, GameState } from "$lib/ludi/types";
	import ViewElement from "$lib/components/views/ViewElement.svelte";
	import { slide, fade } from "svelte/transition";
	import { initialize } from "$lib/ludi/engine";

    export let game: Game;
    export let state: GameState;
</script>

<div class="container">
    {#each game.views as view}
        <ViewElement bind:game={game} bind:state={state} bind:element={view} />
    {/each}

    <!-- 
        We must build an explicit win UI so that users are not in a position where the
        UI becomes unresponsive because the game has ended. This can be customizable,
        but showing this screen should be the default.
    -->
    {#if state.winner}
        <div transition:fade class="gray-out" />
        <div transition:slide class="banner top">
            {state.winner} Wins!
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div transition:slide class="banner bottom" on:click={() => state = initialize(game)}>
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
        background-color: rgba(#000, .3);
    }

    div.container {
        flex-grow: 1;
        container: game / size;
        position: relative;
    }
</style>