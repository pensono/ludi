<script>
	import GameScreen from "$lib/components/GameScreen.svelte";
	import Toolbox from "$lib/components/editor/Toolbox.svelte";
	import { initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";

    export let data;

    let game = fromString(data.gameText);
    let state = initialize(game);
</script>

<main>
    <GameScreen game={game} state={state} />
    <Toolbox game={game} state={state} />
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: row;
    }
</style>