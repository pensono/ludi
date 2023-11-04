<script lang="ts">
    import { goto } from "$app/navigation";
    import { ConvexClient } from "convex/browser";
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { fromString } from "$lib/ludi/parser";
	import { api } from "$convex/_generated/api";
	import RootLayout from "$lib/components/layout/RootLayout.svelte";

    async function playLive(gameName: string) {
        const convex = new ConvexClient(PUBLIC_CONVEX_URL);

        const gameText = (await fetch(`/games/${gameName}.ludi`)).text();
        const game = fromString(await gameText);

        const liveGameId = await convex.mutation(api.live_games.newGame, { game });

        goto(`/play/live/${liveGameId}`);
    }
</script>

<RootLayout>
    <h2>Single-device</h2>
    <ul>
        <li><a href="/play/tic-tac-toe">Tic-tac-toe</a></li>
        <li><a href="/play/checkers">Checkers</a></li>
        <li><a href="/play/gomoku">Gomoku</a></li>
    </ul>
    
    <h2>Multiplayer</h2>
    <ul>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li><a href="#" on:click={() => playLive('tic-tac-toe')}>Tic-tac-toe</a></li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li><a href="#" on:click={() => playLive('checkers')}>Checkers</a></li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li><a href="#" on:click={() => playLive('gomoku')}>Gomoku</a></li>
    </ul>
</RootLayout>

<style lang="scss">
    main {
        flex-grow: 1;

        display: flex;
        flex-direction: row;
    }
</style>