<script lang="ts">
	import '../app.css';

	import { Toaster } from 'svelte-french-toast';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<Toaster />

<style lang="scss">
	:global(:root) {
		--color-divider: color-mix(in xyz, var(--color-background) 80%, var(--color-foreground));
		--color-hover: color-mix(in xyz, var(--color-background) 80%, var(--color-foreground));
		--color-active: color-mix(in xyz, var(--color-background) 60%, var(--color-foreground));
		--color-detail: color-mix(in xyz, var(--color-background) 40%, var(--color-foreground));

		--detail-text-size: 0.8rem;

		--mono-font: monospace;

		--input-padding: 4px;
		--input-height: 1rem;

		--indent: 1.5rem;

		--desktop-width: 1000px;
	}

	:global(.material-symbols-outlined) {
		user-select: none;
	}
</style>
