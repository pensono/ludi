<script>
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";

    let selectedGame = "/games/number-guessing.ludi";
    let game = null;
    let state = null;

    onMount(() => {
        loadGame();
    });

    async function loadGame() {
        console.log(selectedGame);
        let gameText = await fetch(selectedGame).then(r => r.text());
        game = fromString(gameText);
        state = initialize(game);
    }
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi</h1>
        <select bind:value={selectedGame} on:change={loadGame}>
            <option value="/games/number-guessing.ludi">Number Guessing</option>
            <option value="/games/tic-tac-toe.ludi">Tic-tac-toe</option>
        </select>
    </nav>
    
    <main>
        {#if game}
            <ViewToolbox bind:game={game} bind:state={state} />
            <GameScreen bind:game={game} bind:state={state} />
            <EditToolbox bind:game={game} bind:state={state} />
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