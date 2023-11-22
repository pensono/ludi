<script lang="ts">
	import type { Rules, GameState, View } from "$lib/ludi/types";

    export let positionStyle: string;
    export let rules: Rules;
    export let state: GameState;
    export let element: View;
    $: file = element.attributes["file"];
</script>

<img src="/assets/{file}" style={positionStyle} draggable="false">

<style lang="scss">
</style>