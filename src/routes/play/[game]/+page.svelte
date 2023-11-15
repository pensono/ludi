<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { execute, initialize, playMove, toMove } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Statement } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from '$lib/components/Meta.svelte';

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
    
    function playMove_(statements: Statement[], locals: Record<string, any>) {
        for (const statement of statements) {
            const move = toMove(game!, state!, locals, statement);

            const newState = playMove(game!, state!, move);

            // Legal move
            if (!newState) {
                break;
            }
            
            state = newState;
        }
    }
    
    function reset() {
        state = initialize(game!);
    }
</script>

<Meta backgroundColor="#fff" title="{data.gameName}" />

<RootLayout logoColor="#000">
    <main>
        {#if game && state}
            <GameScreen bind:game={game} bind:state={state} runStatements={playMove_} reset={reset} />
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
