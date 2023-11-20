<script lang="ts">
	import Logo from "../Logo.svelte";

    export let logoColor: string = "var(--color-foreground)";
</script>

<div class="wrapper">
    <nav>
        <a href="/" class="logoWrap nav-item left"><Logo color="{logoColor}" /></a>
        <div class="nav-item center">
            <slot name="nav-center"></slot>
        </div>
        <div class="nav-item right">
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-bottom: .2rem;
    }

    .nav-item {
        display: flex;
        align-items: center;

        &.left {
            justify-content: flex-start;
        }
        &.center {
            justify-content: center;
        }
        &.right {
            justify-content: flex-end;
        }
    }
</style>