<script lang="ts">
	import NavbarThirds from "./NavbarThirds.svelte";
</script>

<div class="wrapper">
    {#if !$$slots.nav}
        <NavbarThirds />
    {:else}
        <slot name="nav" />
    {/if}    
    <slot></slot>
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
</style>