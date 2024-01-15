<script lang="ts">
    import { onMount } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import { initialize, playMove as playMove_, toMove } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GameState, Statement, Context, Move } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from '$lib/components/util/Meta.svelte';
	import NavbarThirds from '$lib/components/layout/NavbarThirds.svelte';

    export let data;

    let context: Context | undefined;

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
        let gameText = await fetch(`/game/${data.gameName}.ludi`).then(r => r.text());
        let rules = fromString(gameText);
        let state = initialize(rules);

        context = {
            rules,
            state,
            playMove(move: Move) {
                console.log("playMove")
            },
            runStatements(statements: Statement[], locals: Record<string, any>) {
                console.log("run statements")
                for (const statement of statements) {
                    const move = toMove(context!.rules, context!.state, locals, statement);

                    const newState = playMove_(context!.rules, context!.state, move);

                    // Legal move
                    if (!newState) {
                        continue;
                    }
                    
                    context!.state = newState;
                    break;
                }
            },            
            reset() {
                context!.state = initialize(context!.rules);
            }
        }
    }
</script>

<Meta {backgroundColor} {foregroundColor} title="{data.gameName}" />

<RootLayout>
    <NavbarThirds slot="nav" logoColor={foregroundColor}>
        <p slot="center" style:--foreground-color={foregroundColor}>
            {#if context}
                {context.state.position.variables[Variables.CurrentPlayer]} to play
            {/if}
        </p>
    </NavbarThirds>

    <main>
        {#if context}
            <RootView bind:context bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} />
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
