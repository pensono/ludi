<script lang="ts">
	import RootLayout from "./RootLayout.svelte";
</script>

<RootLayout>
    <main>
        <slot></slot>
    </main>
</RootLayout>

<style lang="scss">
    main {
        width: calc(min(100%, var(--desktop-width)));
        margin: 0 auto;
    }
</style>