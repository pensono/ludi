<script lang="ts">
	import type { Game, GameState, ViewElement } from "$lib/ludi/types";
	import BoardView from "./BoardView.svelte";

    export let game: Game;
    export let state: GameState;
    export let element: ViewElement;
</script>

{#if element.name == 'board'}
    <BoardView bind:game={game} bind:state={state} bind:element={element} />
{/if}
