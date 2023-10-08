<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { advance, initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move } from '$lib/ludi/types';
    import * as Ably from "ably";

    export let data;

    let game: Game | undefined;
    let state: GameState | undefined;

    let channel: Ably.Types.RealtimeChannelPromise;

    onMount(() => {
        const ably = new Ably.Realtime.Promise({
            authUrl: `/play/live/token?gameId=${data.gameId}`,
            clientId: "someid",
            idempotentRestPublishing: true,
        });

        channel = ably.channels.get(`game:${data.gameId}`);

        channel.subscribe((message) => {
            state = JSON.parse(message.data);
        });

        loadGame();

        return () => {
            channel.unsubscribe();
            channel.detach();
        };
    });

    async function loadGame() {
        let gameText = await fetch(`/games/tic-tac-toe.ludi`).then(r => r.text());
        game = fromString(gameText);
        state = initialize(game);
    }

    function playMove(move: Move) {
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
        <h1>Ludi - tic-tac-toe</h1>
    </nav>
    
    <main>
        {#if game && state}
            <GameScreen bind:game={game} state={state} playMove={playMove} reset={reset} />
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
    
    nav {
        display: flex;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: 1px solid #ccc;
    }
</style>