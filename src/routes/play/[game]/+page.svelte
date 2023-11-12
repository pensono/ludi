<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { execute, initialize } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Statement } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';

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
    
    function runStatements(statements: Statement[], locals: Record<string, any>) {
        // Single device, just always be the current player
        const currentPlayer = state?.position.variables[Variables.CurrentPlayer];
        const newState = execute(game!, state!, currentPlayer, statements, locals);

        // Legal move
        if (newState) {
            state = newState;
        }
    }
    
    function reset() {
        state = initialize(game!);
    }
</script>

<RootLayout logoColor="#000">
    <main>
        {#if game && state}
            <GameScreen bind:game={game} bind:state={state} runStatements={runStatements} reset={reset} />
        {/if}
    </main>
</RootLayout>

<svelte:head>
    <style>
        html {
            background-color: #fff !important;
        }
    </style>
</svelte:head>


<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }
</style>
