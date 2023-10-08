<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { advance, initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move } from '$lib/ludi/types';
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi</h1>
    </nav>
    
    <main>
        <h2>Select Game</h2>
        <ul>
            <li><a href="/play/tic-tac-toe">Tic-tac-toe</a></li>
            <li><a href="/play/checkers">Checkers</a></li>
            <li><a href="/play/gomoku">Gomoku</a></li>
        </ul>
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