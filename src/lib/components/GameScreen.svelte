<script lang="ts">
	import type { Game, GameState } from "$lib/ludi/types";
	import ViewElement from "$lib/components/views/ViewElement.svelte";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    {#each game.views as view}
        <ViewElement bind:game={game} bind:state={state} bind:element={view} />
    {/each}
</div>

<style lang="scss">
    div {
        flex-grow: 1;
    }
</style>