<script lang="ts">
    import { ConvexClient } from "convex/browser";
    import { api } from "$convex/_generated/api";
    import { onDestroy } from 'svelte';
	import RootView from "$lib/components/views/RootView.svelte";
	import type { Rules, GameState, Move, Statement, Context } from '$lib/ludi/types';
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import type { GameParticipant } from '$lib/realtime/types.js';
    import Participant from './Participant.svelte';
	import { getParticipantId } from '$lib/participantId.js';
	import Share from '$lib/components/util/Share.svelte';
	import { execute, playMove, toMove, unfilledPlayers } from '$lib/ludi/engine.js';
    import RootLayout from '$lib/components/layout/RootLayout.svelte';
	import Meta from "$lib/components/util/Meta.svelte";
	import NavbarThirds from "$lib/components/layout/NavbarThirds.svelte";
	import { getConvexClient } from "$lib/clients/convex";

    export let data;

    let context: Context | undefined;
    let participants: GameParticipant[] | undefined;
    
    let gameBackground: string | undefined;
    let gameForeground: string | undefined;
    let backgroundColor : string;
    let foregroundColor : string;

    $: backgroundColor = gameBackground || "#fff"
    $: foregroundColor = gameForeground || "#000"

    const localParticipantId = getParticipantId();

    $: localParticipant = participants?.find(p => p.id === localParticipantId);
    $: remainingParticipants = context?.rules && unfilledPlayers(context.rules, (participants ?? []).map(p => p.role));

    const convex = getConvexClient();

    onDestroy(() => {
        convex.close();
    });
    
    convex.onUpdate(api.live_games.get, { id: data.gameId}, (liveGame) => {
        context = {
            rules: context?.rules ?? liveGame.rules, // Only update once
            state: liveGame.state,
            playMove(move: Move) { },
            async runStatements(statements: Statement[], locals: Record<string, any>) {
                for (const statement of statements) {
                    // Test if this is legal for the local player
                    const newState = execute(context!.rules, context!.state, localParticipant!.role, [statement], locals);

                    // Legal move
                    if (!newState) {
                        continue;
                    }
                    
                    context!.state = newState;
                    await convex.mutation(api.live_games.executeStatements, { 
                        liveGameId: data.gameId, 
                        participantId: localParticipantId, 
                        statements: [statement],
                        locals,
                    });
                    break;
                }
            },            
            async reset() {
                await convex.mutation(api.live_games.reset, { liveGameId: data.gameId });
            }
        }
        participants = liveGame.participants;
    });

    convex.mutation(api.live_games.join, { liveGameId: data.gameId, participantId: localParticipantId });
</script>

<Meta {backgroundColor} {foregroundColor} title="Live" />

<RootLayout>
    <NavbarThirds slot="nav" logoColor={foregroundColor} />

    <main>
        {#if context}
            <RootView bind:context bind:backgroundColor={gameBackground} bind:foregroundColor={gameForeground} />
        {/if}
        
        {#if participants}
            <div class="players">
                {#each participants as participant}
                    <Participant bind:participant isLocal={participant.id === localParticipantId} currentParticipant={context?.state.position.variables["CurrentPlayer"]} />
                {/each}
                {#if remainingParticipants && remainingParticipants?.length > 0}
                    <Share text="Invite" />
                {/if}
            </div>
        {/if}
    </main>
</RootLayout>

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