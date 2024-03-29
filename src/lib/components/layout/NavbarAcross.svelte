<script lang="ts">
	import Logo from "../Logo.svelte";
</script>

<nav class="flex border-b border-[var(--color-divider)]">
    <a href="/" class="h-16 p-4 w-fit"><Logo color="fill-foreground" /></a>
    <div class="flex items-center justify-center">
        <slot name="across"></slot>
    </div>
    <div class="flex items-center ml-auto">
        <slot name="right"></slot>
    </div>
</nav>

