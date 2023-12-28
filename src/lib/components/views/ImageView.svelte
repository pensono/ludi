<script lang="ts">
	import type { View, Context } from "$lib/ludi/types";

    export let positionStyle: string;
    export let context: Context;
    export let element: View;
    $: file = element.attributes["file"];
</script>

<img src="/assets/{file}" style={positionStyle} draggable="false">

<style lang="scss">
</style>