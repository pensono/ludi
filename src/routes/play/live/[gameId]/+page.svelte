<script lang="ts">
    import { ConvexClient } from "convex/browser";
    import { api } from "$convex/_generated/api";
    import { onDestroy } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import type { Game, GameState, Move } from '$lib/ludi/types';
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import type { GameParticipant } from '$lib/realtime/types.js';
    import Participant from '$lib/components/Participant.svelte';
	import { getParticipantId } from '$lib/participantId.js';
	import Share from '$lib/components/util/Share.svelte';
	import { unfilledPlayers } from '$lib/ludi/engine.js';

    export let data;

    let game: Game | undefined;
    let state: GameState | undefined;
    let participants: GameParticipant[] | undefined;

    const localParticipantId = getParticipantId();

    $: localParticipant = participants?.find(p => p.id === localParticipantId);
    $: remainingParticipants = game && unfilledPlayers(game, (participants ?? []).map(p => p.role));

    const convex = new ConvexClient(PUBLIC_CONVEX_URL);

    onDestroy(() => {
        convex.close();
    });
    
    convex.onUpdate(api.live_games.get, { id: data.gameId}, (liveGame) => {
        game = game ?? liveGame.game; // Only update once
        state = liveGame.state;
        participants = liveGame.participants;
    });

    convex.mutation(api.live_games.join, { liveGameId: data.gameId, participantId: localParticipantId });

    async function playMove(move: Move) {
        if (!localParticipant || move.player !== localParticipant.role) {
            return;
        }

        await convex.mutation(api.live_games.playMove, { liveGameId: data.gameId, move });
    }
    
    async function reset() {
        await convex.mutation(api.live_games.reset, { liveGameId: data.gameId });
    }
</script>

<div class="wrapper">
    <nav>
        <h1><a href="/">Ludi</a></h1>
    </nav>
    
    <main>
        {#if game && state}
            <GameScreen bind:game={game} state={state} playMove={playMove} reset={reset} />
        {/if}
        
        {#if participants}
            <div class="players">
                {#each participants as participant}
                    <Participant bind:participant isLocal={participant.id === localParticipantId} currentParticipant={state?.position.variables["CurrentPlayer"]} />
                {/each}
                {#if remainingParticipants && remainingParticipants?.length > 0}
                    <Share text="Invite" />
                {/if}
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

    h1 a {
        text-decoration: none;
        color: #000;
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
        display: flex;
        flex-direction: column;

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

    @media only screen and (max-width: 1200px) {
        main {
            flex-direction: column;
        }
    }
    
    @media only screen and (min-width: 1200px) {
        main {
            flex-direction: row;
        }
    }
</style>