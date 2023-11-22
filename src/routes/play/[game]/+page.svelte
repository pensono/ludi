<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { execute, initialize, playMove, toMove } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GameState, Statement } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from '$lib/components/util/Meta.svelte';

    export let data;

    let rules: Rules | undefined;
    let state: GameState | undefined;

    onMount(() => {
        loadGame();
    });

    async function loadGame() {
        let gameText = await fetch(`/games/${data.gameName}.ludi`).then(r => r.text());
        rules = fromString(gameText);
        state = initialize(rules);
    }
    
    function playMove_(statements: Statement[], locals: Record<string, any>) {
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

<Meta backgroundColor="#fff" title="{data.gameName}" />

<RootLayout logoColor="#000">
    <p slot="nav-center">
        {#if rules && state}
            {state.position.variables[Variables.CurrentPlayer]} to play
        {/if}
    </p>
    <main>
        {#if rules && state}
            <GameScreen bind:rules={rules} bind:state={state} runStatements={playMove_} reset={reset} />
        {/if}
    </main>
</RootLayout>

<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }

    p {
        color: #000;
        margin: 0;
        font-size: 2em;
        white-space: nowrap;
    }
</style>
