<script lang="ts">
	import type { GameParticipant } from "$lib/realtime/types";

    export let currentParticipant: string;
    export let participant: GameParticipant;
    export let isLocal: boolean = false;
</script>

<div class="wrapper">
    {#if currentParticipant === participant.role}
        <img class="current-turn" src="/current-turn.svg">
    {:else}
        <!-- Placeholder -->
        <div class="current-turn"></div>
    {/if}
    <img class="avatar" src="/user.svg">
    <span>{participant.role}{isLocal ? " (You)" : ""}</span>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: row;

        height: 1.5rem;
        padding: 0.25rem;
        line-height: 1.5rem;
        text-align: center;
    }

    .current-turn {
        height: .75rem;
        width: .75rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin-right: 0.25rem;
    }

    .avatar {
        margin-right: .25rem;
    }

    span {
        line-height: 1.5rem;
        height: 100%;
    }
</style>