<script lang="ts">
    import { Toaster } from 'svelte-french-toast';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<Toaster />

<style lang="scss">
    :global(:root) {
        margin: 0;
        padding: 0;
        font-family: Geist;

        --border-color: #ccc;
        --hover-color: #eee;
        --active-color: rgb(207, 222, 243);
        --detail-text-color: #666;
        --detail-text-size: .8rem;

        --mono-font: monospace;

        --input-padding: 4px;
        --input-height: 1rem;

        --indent: 1.5rem;

        --desktop-width: 1000px;
        
        // https://pigment.shapefactory.co/?a=0E7144&b=80A11D
        --color-background: #036134;
        --color-foreground: #A3C23A;

        background-color: var(--color-background);
        color: var(--color-foreground);

        // --color-background: #52791E;
        // --color-foreground: #A4D759;
        
        // --color-background: #591B35;
        // --color-foreground: #EF194F;
        
        // --color-background: #521A60;
        // --color-foreground: #E0285F;
        
        // --color-background: #323D21;
        // --color-foreground: #D6ADA9;
    
        @font-face {
            font-family: 'Geist';
            src: url('/assets/fonts/GeistVariableVF.woff2');
        }
    }

    :global(.material-symbols-outlined) {
        user-select: none;
    }
</style>