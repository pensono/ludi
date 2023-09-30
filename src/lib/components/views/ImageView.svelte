<script lang="ts">
	import type { Game, GameState, View } from "$lib/ludi/types";

    export let positionStyle: string;
    export let game: Game;
    export let state: GameState;
    export let element: View;
    $: file = element.attributes["file"];
</script>

<img src="/assets/{file}" style={positionStyle}>

<style lang="scss">
</style>