<script lang="ts">
	import Logo from "../Logo.svelte";

    export let logoColor: string = "var(--color-foreground)";
    export let backgroundColor: string = "var(--color-background)";
</script>

<div class="wrapper" style:background-color={backgroundColor}>
    <nav>
        <a href="/" class="logoWrap"><Logo color="{logoColor}" /></a>
        <div>
            <slot name="nav-center"></slot>
        </div>
        <div>
            <slot name="nav-right"></slot>
        </div>
    </nav>
    
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

    .logoWrap {
        height: 2rem;
        padding: 1rem;
    }
    
    nav {
        display: flex;
        padding-bottom: .2rem;
    }
</style>