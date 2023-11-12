<script lang="ts">
    import { ConvexClient } from "convex/browser";
    import { api } from "$convex/_generated/api";
    import { onDestroy } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import type { Game, GameState, Move, Statement } from '$lib/ludi/types';
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import type { GameParticipant } from '$lib/realtime/types.js';
    import Participant from '$lib/components/Participant.svelte';
	import { getParticipantId } from '$lib/participantId.js';
	import Share from '$lib/components/util/Share.svelte';
	import { execute, unfilledPlayers } from '$lib/ludi/engine.js';
    import RootLayout from '$lib/components/layout/RootLayout.svelte';

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

    async function runStatements(statements: Statement[], locals: Record<string, any>) {
        // Test if this is legal for the local player
        const newState = execute(game!, state!, localParticipant!.role, statements, locals);

        if (newState) {
            state = newState;
            await convex.mutation(api.live_games.executeStatements, { 
                liveGameId: data.gameId, 
                participantId: localParticipantId, 
                statements,
                locals,
            });
        }
    }
    
    async function reset() {
        await convex.mutation(api.live_games.reset, { liveGameId: data.gameId });
    }
</script>

<RootLayout logoColor="#000">
    <main>
        {#if game && state}
            <GameScreen bind:game={game} state={state} runStatements={runStatements} reset={reset} />
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
</RootLayout>

<svelte:head>
    <style>
        html {
            background-color: #fff !important;
        }
    </style>
</svelte:head>


<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }

    .players {
        color: #000;
        display: flex;
        flex-direction: column;

        min-width: 200px;
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