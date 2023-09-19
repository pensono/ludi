<script lang="ts">
	import { enumerateMoves } from "$lib/ludi/engine";
	import type { Game, GameState } from "$lib/ludi/types";

    export let game: Game;
    export let state: GameState;
</script>

<div>
    <h1>State</h1>

    {#each Object.entries(state.variables) as [key, value]}
        <p>{key}: {value}</p>
    {/each}

    <h1>Moves</h1>

    {#each enumerateMoves(game, state) as move}
        <p>{move.actionName}({move.args.join(", ")})</p>
    {/each}
</div>