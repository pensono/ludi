<script lang="ts">
    import { goto } from "$app/navigation";
    import { ConvexClient } from "convex/browser";
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { fromString } from "$lib/ludi/parser";
	import { api } from "$convex/_generated/api";
	import SingleLayout from "$lib/components/layout/SingleLayout.svelte";
	import ExpandingListItem from "$lib/components/ui/ExpandingListItem.svelte";
	import Meta from "$lib/components/util/Meta.svelte";

    async function playLive(gameName: string) {
        const convex = new ConvexClient(PUBLIC_CONVEX_URL);

        const gameText = (await fetch(`/games/${gameName}.ludi`)).text();
        const rules = fromString(await gameText);

        const liveGameId = await convex.mutation(api.live_games.newGame, { rules });

        goto(`/play/live/${liveGameId}`);
    }
</script>

<Meta backgroundColor="var(--color-background)" title="Play" />

<SingleLayout>
    <h1>Play a game</h1>

    <ExpandingListItem>
        <h2 slot="header">Tic-tac-toe</h2>
        <div class="expand-body" slot="body">
            <a href="/play/tic-tac-toe">One Device</a>
            <a href="#" on:click={() => playLive('tic-tac-toe')}>Online</a>
        </div>
    </ExpandingListItem>
    
    <ExpandingListItem>
        <h2 slot="header">Checkers</h2>
        <div class="expand-body" slot="body">
            <a href="/play/checkers">One Device</a>
            <a href="#" on:click={() => playLive('checkers')}>Online</a>
        </div>
    </ExpandingListItem>

    <ExpandingListItem>
        <h2 slot="header">Gomoku</h2>
        <div class="expand-body" slot="body">
            <a href="/play/gomoku">One Device</a>
            <a href="#" on:click={() => playLive('gomoku')}>Online</a>
        </div>
    </ExpandingListItem>
</SingleLayout>

<style lang="scss">
    h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: normal;
    }

    h2 {
        display: block;
        text-decoration: none;
        margin: 0;
        margin-top: 1rem;

        font-size: 2rem;
        font-weight: normal;
        color: var(--color-foreground);
    }

    h2:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    a {
        font-size: 1.25rem;
        color: var(--color-foreground);
        text-decoration: none;

        padding: 0.5rem;
    }

    a:hover {
        text-decoration: underline;
    }

    .expand-body {
        margin-left: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
</style>