<script lang="ts">
	import { blur } from "svelte/transition";
	import RootView from "$lib/components/views/RootView.svelte";
	import { initialize, playMove as playMove_, toMove } from "$lib/ludi/engine";
    import { Variables } from "$lib/ludi/builtins";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GameState, Statement, Context, Move } from '$lib/ludi/types';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from '$lib/components/util/Meta.svelte';
	import NavbarThirds from '$lib/components/layout/NavbarThirds.svelte';
	import HamburgerDropdown from "$lib/components/ui/HamburgerDropdown.svelte";

    export let data;

    let gameBackground: string | undefined;
    let gameForeground: string | undefined;
    let backgroundColor : string;
    let foregroundColor : string;

    $: backgroundColor = gameBackground || "#fff"
    $: foregroundColor = gameForeground || "#000"
    
    const rules = fromString(data.rulesSource);
    const state = initialize(rules);

    let context: Context = {
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
</script>

<Meta {backgroundColor} {foregroundColor} title="{data.gameName}" />

<RootLayout>
    <NavbarThirds slot="nav" logoColor={foregroundColor}>
        <div slot="center">
            {#if context && !context.state.position.result}
                <p class="text-big" transition:blur={{duration: 150}}>
                    {context.state.position.variables[Variables.CurrentPlayer]} to play
                </p>
            {/if}
        </div>

        <HamburgerDropdown slot="right">
            <a class="block grow p-2 text-2xl cursor-pointer" href="" on:click={context.reset}>Undo Move</a>
            <a class="block grow p-2 text-2xl cursor-pointer" href="" on:click={context.reset}>Restart Game</a>
            <hr class="my-1 mx-2 h-px border-none" />
            <a class="block grow p-2 text-2xl cursor-pointer" href="edit">Game Editor</a>
        </HamburgerDropdown>
    </NavbarThirds>

    <main class="grow flex flex-row justify-center">
        {#if context}
            <RootView bind:context bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} />
        {/if}
    </main>
</RootLayout>

<style lang="scss">

    a:hover {
        background-color: var(--color-divider);
    }

    hr {
        background-color: var(--color-divider);
    }
</style>
