<script lang="ts">
	import Logo from "../Logo.svelte";

    export let logoColor: string = "var(--color-foreground)";
</script>

<nav>
    <a href="/" class="logoWrap nav-item left"><Logo color="{logoColor}" /></a>
    <div class="nav-item across">
        <slot name="across"></slot>
    </div>
    <div class="nav-item right">
        <slot name="right"></slot>
    </div>
</nav>


<style lang="scss">
    .logoWrap {
        height: 2rem;
        width: fit-content;
        padding: 1rem;
    }
    
    nav {
        display: flex;
    }

    .nav-item {
        display: flex;
        align-items: center;

        &.left {
            justify-content: flex-start;
        }
        &.across {
            justify-content: flex-start;
            flex-grow: 1;
        }
        &.right {
            justify-content: flex-end;
        }
    }
</style>