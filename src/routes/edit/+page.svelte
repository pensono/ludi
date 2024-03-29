<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
	import { api } from "$convex/_generated/api";
	import RootView from "$lib/components/views/RootView.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize, toMove, playMove } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { GamePosition, Statement, Context, Move } from '$lib/ludi/types';
	import Meta from '$lib/components/util/Meta.svelte';
	import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import NavbarAcross from '$lib/components/layout/NavbarAcross.svelte';
	import CodeEditor from '$lib/components/ui/CodeEditor.svelte';
	import { getConvexClient } from '$lib/clients/convex';

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

    async function playGame() {
        const convex = getConvexClient();
        
        const rulesName = await convex.mutation(api.rules.create, { source: ruleSource })
        
        goto(`/game/${rulesName}/play`);
    }
</script>

<Meta backgroundColor={backgroundColor} foregroundColor={foregroundColor} title="Edit" />

<RootLayout>
    <NavbarAcross slot="nav">
        <nav slot="across">
            <a class={`px-3 ${!hash || hash == "#" ? "selected" : ""}`} href="#"><span>Editor</span></a>
            <a class={`px-3 ${hash == "#code" ? "selected" : ""}`} href="#code"><span>Code</span></a>
            <a class={`px-3 ${hash == "#art" ? "selected" : ""}`} href="#art"><span>Art</span></a>
        </nav>
        <nav slot="right">
            <a on:click={playGame}><span>Play</span></a>
        </nav>
    </NavbarAcross>

    <main class="grow flex flex-row overflow-hidden">
        {#if hash === "#code"}
            <CodeEditor bind:value={ruleSource} />
        {:else} <!-- editor -->
            {#if context}
                <ViewToolbox bind:context bind:previewPosition={previewPosition} />
                <RootView bind:context bind:previewPosition={previewPosition} bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} />
                <EditToolbox  bind:context />
            {/if}
        {/if}
        <div class="w-20 bg-red-500"></div>
    </main>
</RootLayout>

<style lang="scss">
    nav {
        margin-left: 2rem;
        height: 100%;
        display: flex;
    }

    nav a {
        font-size: 1.25rem;

        display: flex;
        align-items: center;

        cursor: pointer;
        
        &.selected {
            background-color: var(--color-divider);
        }
    }

    nav[slot=right] {
        margin-right: 1rem;
    }
</style>