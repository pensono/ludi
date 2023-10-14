<script lang="ts">
    import { Toaster } from 'svelte-french-toast';
</script>

<slot />

<Toaster />

<style lang="scss">
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: sans-serif;

        --border-color: #ccc;
        --hover-color: #eee;
        --detail-text: #666;

        --mono-font: monospace;
    }
    
    :global(.material-symbols-outlined) {
        user-select: none;
    }
</style>