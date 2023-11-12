<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { execute as runStatements_, initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move, Statement } from '$lib/ludi/types';
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
        const newState = runStatements_(game!, state!, statements, locals);

        // Legal move
        if (newState) {
            state = newState;
        }
    }
    
    function reset() {
        state = initialize(game!);
    }
</script>

<RootLayout backgroundColor="#fff" logoColor="#000">
    <main>
        {#if game && state}
            <GameScreen bind:game={game} bind:state={state} runStatements={runStatements} reset={reset} />
        {/if}
    </main>
</RootLayout>


<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }
</style>
