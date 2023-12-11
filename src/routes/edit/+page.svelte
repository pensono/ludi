<script lang="ts">
    import { onMount } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize, toMove, playMove } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GamePosition, GameState, Move, Statement } from '$lib/ludi/types';
	import Meta from '$lib/components/util/Meta.svelte';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';

    let selectedGame = "/games/tic-tac-toe.ludi";
    let rules: Rules | undefined;
    let state: GameState | undefined;
    let previewPosition: GamePosition | null = null;

    onMount(() => {
        loadGame();
    });

    async function loadGame() {
        let gameText = await fetch(selectedGame).then(r => r.text());
        rules = fromString(gameText);
        state = initialize(rules);
    }

    function runStatements(statements: Statement[], locals: Record<string, any>) {
        for (const statement of statements) {
            const move = toMove(rules!, state!, locals, statement);

            const newState = playMove(rules!, state!, move);

            // Legal move
            if (!newState) {
                continue;
            }
            
            state = newState;
            break;
        }
    }
    
    function reset() {
        state = initialize(rules!);
    }
</script>

<Meta backgroundColor="#fff" title="Edit" />

<RootLayout logoColor="#000">
    <select slot="nav-right" bind:value={selectedGame} on:change={loadGame}>
        <option value="/games/number-guessing.ludi">Number Guessing</option>
        <option value="/games/tic-tac-toe.ludi">Tic-tac-toe</option>
        <option value="/games/checkers.ludi">Checkers</option>
        <option value="/games/gomoku.ludi">Gomoku</option>
    </select>
    
    <main>
        {#if rules && state}
            <ViewToolbox bind:rules={rules} bind:state={state} bind:previewPosition={previewPosition} />
            <RootView bind:rules={rules} state={state} bind:previewPosition={previewPosition} runStatements={runStatements} reset={reset} />
            <EditToolbox bind:rules={rules} bind:state={state} />
        {/if}
    </main>
</RootLayout>

<style lang="scss">

    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row; 
        overflow: hidden;

        color: #000;

        border-top: 1px solid #ccc;
    }
    

    h1 {
        margin: .5rem;
    }
    
    h1 a {
        text-decoration: none;
        color: #000;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
</style>