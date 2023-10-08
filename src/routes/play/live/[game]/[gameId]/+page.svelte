<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { advance, initialize, nextPlayer } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move } from '$lib/ludi/types';
    import * as Ably from "ably";

    export let data;

    let game: Game | undefined;
    let state: GameState | undefined;

    let players: string[] | undefined;
    let localPlayer: string | undefined;

    let channel: Ably.Types.RealtimeChannelPromise;

    onMount(() => {
        loadGame();

        const ably = new Ably.Realtime.Promise({
            authUrl: `/play/live/token?gameId=${data.gameId}`,
            clientId: "someid",
            idempotentRestPublishing: true,
        });

        channel = ably.channels.get(`game:${data.gameId}`);

        channel.subscribe((message) => {
            state = JSON.parse(message.data);
        });

        channel.presence.get().then((presence) => {
            players = presence.map((p) => p.data.player);
            localPlayer = nextPlayer(game!, players) ?? "Spectator";
        }).then(() => {
            channel.presence.enter({ player: localPlayer });
        });

        channel.presence.subscribe(async (presenceMessage) => {
            // Refresh all players
            const presenceMessages = await channel.presence.get();
            players = presenceMessages.map((p) => p.data.player);
        });

        return () => {
            channel.unsubscribe();
            channel.detach();
        };
    });

    async function loadGame() {
        let gameText = await fetch(`/games/${data.gameName}.ludi`).then(r => r.text());
        game = fromString(gameText);
        state = initialize(game);
    }

    function playMove(move: Move) {
        // No cheating!
        if (move.player !== localPlayer) return;

        state = advance(game!, state!, move);
        channel.publish("state", JSON.stringify(state));
    }

    function reset() {
        state = initialize(game!);
        channel.publish("state", JSON.stringify(state));
    }
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi - {data.gameName}</h1>
    </nav>
    
    <main>
        {#if game && state}
            <GameScreen bind:game={game} state={state} playMove={playMove} reset={reset} />
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