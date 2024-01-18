<script lang="ts">
	import { slide, fade, fly, blur } from "svelte/transition";
	import { clickanywhere } from "../util/custom-events";

    let shown: boolean = false;

    function hideDialog() {
        shown = false;
    }

    function toggleDialog() {
        shown = !shown;
    }
</script>

<div use:clickanywhere on:clickanywhere={hideDialog} class="wrapper">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={toggleDialog} class="material-symbols-outlined">
        menu
    </span>

    {#if shown}
        <div class="dialog" transition:blur={{duration: 75}}>
            <slot />
        </div>
    {/if}
</div>

<style lang="scss">
    span {
        font-size: 3rem;
        padding: .5rem;
        cursor: pointer;
    }

    div.wrapper {
        position: relative;
    }

    div.dialog {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 4rem;
        right: 1rem;
        width: 15rem;
        background-color: var(--background-color);
        border: 1px solid var(--color-divider);
        z-index: 1000;
    }
</style>