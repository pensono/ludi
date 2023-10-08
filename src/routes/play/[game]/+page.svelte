<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { advance, initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move } from '$lib/ludi/types';

    export let data;

    let game: Game | undefined;
    let state: GameState | undefined;

    onMount(() => {
        loadGame();
    });

    async function loadGame() {
        let gameText = await fetch(`/games/${data.gameName}.ludi`).then(r => r.text());
        game = fromString(gameText);
        state = initialize(game);
    }
    
    function playMove(move: Move) {
        state = advance(game!, state!, move);
    }
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi - {data.gameName}</h1>
    </nav>
    
    <main>
        {#if game && state}
            <GameScreen bind:game={game} bind:state={state} playMove={playMove} />
        {/if}
    </main>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }
    

    h1 {
        margin: .5rem;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
</style>