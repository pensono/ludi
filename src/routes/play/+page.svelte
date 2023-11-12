<script lang="ts">
    import { goto } from "$app/navigation";
    import { ConvexClient } from "convex/browser";
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { fromString } from "$lib/ludi/parser";
	import { api } from "$convex/_generated/api";
	import SingleLayout from "$lib/components/layout/SingleLayout.svelte";

    async function playLive(gameName: string) {
        const convex = new ConvexClient(PUBLIC_CONVEX_URL);

        const gameText = (await fetch(`/games/${gameName}.ludi`)).text();
        const game = fromString(await gameText);

        const liveGameId = await convex.mutation(api.live_games.newGame, { game });

        goto(`/play/live/${liveGameId}`);
    }
</script>

<SingleLayout>
    <h1>Play a game</h1>

    <a href="/play/tic-tac-toe">Tic-tac-toe</a>
    <a href="/play/checkers">Checkers</a>
    <a href="/play/gomoku">Gomoku</a>
    
    <!-- <h2>Multiplayer</h2>
    <ul>
        <li><a href="#" on:click={() => playLive('tic-tac-toe')}>Tic-tac-toe</a></li>
        <li><a href="#" on:click={() => playLive('checkers')}>Checkers</a></li>
        <li><a href="#" on:click={() => playLive('gomoku')}>Gomoku</a></li>
    </ul> -->
</SingleLayout>

<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }

    h1 {
        margin-left: 1rem;
        font-size: 3rem;
        text-align: center;
    }

    a {
        display: block;
        text-decoration: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 1rem;

        font-size: 2rem;

        color: var(--color-foreground);
    }

    a:hover {
        text-decoration: underline;
    }
</style>