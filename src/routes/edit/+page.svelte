<script lang="ts">
    import { onMount } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize, execute as runStatements_ } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GamePosition, GameState, Move, Statement } from '$lib/ludi/types';

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
        const newState = runStatements_(rules!, state!, statements, locals);

        // Legal move
        if (newState) {
            state = newState;
        }
    }
    
    function reset() {
        state = initialize(rules!);
    }
</script>

<div class="wrapper">
    <nav>
        <h1><a href="/">Ludi</a></h1>
        <select bind:value={selectedGame} on:change={loadGame}>
            <option value="/games/number-guessing.ludi">Number Guessing</option>
            <option value="/games/tic-tac-toe.ludi">Tic-tac-toe</option>
            <option value="/games/checkers.ludi">Checkers</option>
            <option value="/games/gomoku.ludi">Gomoku</option>
        </select>
    </nav>
    
    <main>
        {#if rules && state}
            <ViewToolbox bind:rules={rules} bind:state={state} bind:previewPosition={previewPosition} />
            <RootView bind:rules={rules} state={state} bind:previewPosition={previewPosition} runStatements={runStatements} reset={reset} />
            <EditToolbox bind:rules={rules} bind:state={state} />
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
        overflow: hidden;
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