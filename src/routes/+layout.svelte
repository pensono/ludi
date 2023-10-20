<script lang="ts">
    import { Toaster } from 'svelte-french-toast';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });
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
        --active-color: rgb(207, 222, 243);
        --detail-text-color: #666;
        --detail-text-size: .8rem;

        --mono-font: monospace;

        --input-padding: 4px;
        --input-height: 1rem;

        --indent: 1.5rem;
    }

    :global(.material-symbols-outlined) {
        user-select: none;
    }
</style>