<script lang="ts">
    import { onMount } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import { initialize, playMove, toMove } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GameState, Statement } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from '$lib/components/util/Meta.svelte';
	import NavbarThirds from '$lib/components/layout/NavbarThirds.svelte';

    export let data;

    let rules: Rules | undefined;
    let state: GameState | undefined;

    let gameBackground: string | undefined;
    let gameForeground: string | undefined;
    let backgroundColor : string;
    let foregroundColor : string;

    $: backgroundColor = gameBackground || "#fff"
    $: foregroundColor = gameForeground || "#000"

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

<Meta {backgroundColor} {foregroundColor} title="{data.gameName}" />

<RootLayout>
    <NavbarThirds slot="nav" logoColor={foregroundColor}>
        <p slot="center" style:--foreground-color={foregroundColor}>
            {#if rules && state}
                {state.position.variables[Variables.CurrentPlayer]} to play
            {/if}
        </p>
    </NavbarThirds>

    <main>
        {#if rules && state}
            <RootView bind:rules={rules} bind:state={state} bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} runStatements={playMove_} reset={reset} />
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
        color: var(--foreground-color);
        margin: 0;
        font-size: 2em;
        white-space: nowrap;
    }
</style>
