<script lang="ts">
    import { onMount } from 'svelte';
	import GameScreen from "$lib/components/GameScreen.svelte";
	import { advance, initialize } from "$lib/ludi/engine";
	import { fromString } from "$lib/ludi/parser";
	import type { Game, GameState, Move } from '$lib/ludi/types';

    const liveId = Math.floor(Math.random() * 1000000);
</script>

<div class="wrapper">
    <nav>
        <h1>Ludi</h1>
    </nav>
    
    <main>
        <h2>Single-device</h2>
        <ul>
            <li><a href="/play/tic-tac-toe">Tic-tac-toe</a></li>
            <li><a href="/play/checkers">Checkers</a></li>
            <li><a href="/play/gomoku">Gomoku</a></li>
        </ul>
        
        <h2>Multiplayer</h2>
        <ul>
            <li><a href="/play/live/tic-tac-toe/{liveId}">Tic-tac-toe</a></li>
            <li><a href="/play/live/checkers/{liveId}">Checkers</a></li>
            <li><a href="/play/live/gomoku/{liveId}">Gomoku</a></li>
        </ul>
    </main>
</div>

<style lang="scss">

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