<script lang="ts">
    import { ConvexClient } from "convex/browser";
    import { api } from "$convex/_generated/api";
    import { onDestroy, onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import type { Game, GameState, Move } from '$lib/ludi/types';
    import { PUBLIC_CONVEX_URL } from '$env/static/public';

    export let data;

    let game: Game | undefined;
    let state: GameState | undefined;

    let players: string[] | undefined;
    let localPlayer: string | undefined;

    const convex = new ConvexClient(PUBLIC_CONVEX_URL);

    onMount(async () => {
    });

    onDestroy(() => {
        convex.close();
    });
    
    convex.onUpdate(api.live_games.get, { id: data.gameId}, (liveGame) => {
        game = game ?? liveGame.game; // Only update once
        state = liveGame.state;
    });

    async function playMove(move: Move) {
        await convex.mutation(api.live_games.playMove, { liveGameId: data.gameId, move });
    }
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi</h1>
    </nav>
    
    <main>
        {#if game && state}
            <GameScreen bind:game={game} state={state} playMove={playMove} reset={() => {}} />
        {/if}
        
        {#if players}
            <div class="players">
                <h2>Connected Players</h2>
                <ul>
                    {#each players as player}
                        <li>{player}{player === localPlayer ? " (You)" : ""}</li>
                    {/each}
                </ul>
            </div>
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
    }
    
    h1 {
        margin: .5rem;
    }

    h2 {
        font-size: 1.5rem;
        margin: .5rem;
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
    

    .players {
        min-width: 200px;

        ul {
            margin: 0;
            padding: .5rem;
        }

        li {
            list-style: none;
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 600px) {
        main {
            flex-direction: column;
        }
    }
    
    @media only screen and (min-width: 600px) {
        main {
            flex-direction: row;
        }
    }
</style>