<script lang="ts">
	import { enumerateMoves } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    {#each game.views as view}
        <p>{view.name}</p>
    {/each}
</div>

<style lang="scss">
    div {
        flex-grow: 1;
    }
</style>