<script lang="ts">
    import { onMount } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize, toMove, playMove } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Rules, GamePosition, GameState, Statement, Context, Move } from '$lib/ludi/types';
	import Meta from '$lib/components/util/Meta.svelte';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import NavbarAcross from '$lib/components/layout/NavbarAcross.svelte';
	import { page } from '$app/stores';
	import CodeEditor from '$lib/components/ui/CodeEditor.svelte';

    let selectedGame = "/games/tic-tac-toe.ludi";
    let ruleSource: string = "";
    let context: Context | undefined;
    let previewPosition: GamePosition | null = null;
    
    let gameBackground: string | undefined;
    let gameForeground: string | undefined;
    let backgroundColor : string;
    let foregroundColor : string;

    $: backgroundColor = gameBackground || "#fff"
    $: foregroundColor = gameForeground || "#000"
    $: hash = $page.url.hash;

    onMount(() => {
        loadGame();
    });

    async function loadGame() {
        ruleSource = await fetch(selectedGame).then(r => r.text());
        let rules = fromString(ruleSource);
        let state = initialize(rules);

        context = {
            rules,
            state,
            playMove(move: Move) { },
            runStatements(statements: Statement[], locals: Record<string, any>) {
                for (const statement of statements) {
                    const move = toMove(context!.rules, context!.state, locals, statement);

                    const newState = playMove(context!.rules, context!.state, move);

                    // Legal move
                    if (!newState) {
                        continue;
                    }
                    
                    context!.state = newState;
                    break;
                }
            },
            reset() {
                state = initialize(context!.rules);
            }
        }
    }
</script>

<Meta backgroundColor={backgroundColor} foregroundColor={foregroundColor} title="Edit" />

<RootLayout>
    <NavbarAcross slot="nav">
        <select slot="right" bind:value={selectedGame} on:change={loadGame}>
            <option value="/games/number-guessing.ludi">Number Guessing</option>
            <option value="/games/tic-tac-toe.ludi">Tic-tac-toe</option>
            <option value="/games/checkers.ludi">Checkers</option>
            <option value="/games/gomoku.ludi">Gomoku</option>
        </select>
        <nav slot="across">
            <a href="#">Editor</a>
            <a href="#code">Code</a>
            <a href="#art">Art</a>
        </nav>    
    </NavbarAcross>

    <main>
        {#if hash === "#code"}
            <CodeEditor bind:value={ruleSource} />
        {:else} <!-- editor -->
            {#if context}
                <ViewToolbox bind:context bind:previewPosition={previewPosition} />
                <RootView bind:context bind:previewPosition={previewPosition} bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} />
                <EditToolbox  bind:context />
            {/if}
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

        border-top: 1px solid  var(--color-divider);
        // border-top: 1px solid color-mix(in rgb, var(--color-background) 50%, var(--color-foreground) 50%);
        // border-top: 1px solid color-mix(in lch, var(--color-background) 50%, var(--color-foreground));
        // border-top: 1px solid var(--color-foreground);
    }

    nav {
        margin-left: 2rem;
    }

    nav a {
        margin-right: 1.5rem;

        color: var(--color-foreground);
        text-decoration: none;
        font-size: 1.25rem;
    }
</style>