<script>
	import GameScreen from "$lib/components/GameScreen.svelte";
	import EditToolbox from "$lib/components/editor/EditToolbox.svelte";
	import ViewToolbox from "$lib/components/editor/ViewToolbox.svelte";
	import { initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";

    export let data;

    let game = fromString(data.gameText);
    let state = initialize(game);
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi</h1>
    </nav>
    
    <main>
        <ViewToolbox game={game} state={state} />
        <GameScreen game={game} state={state} />
        <EditToolbox game={game} state={state} />
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