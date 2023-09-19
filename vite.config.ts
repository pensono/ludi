import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	optimizeDeps: {
		// Some weirdness with vit around antlr4.
		// If this is not done, the page will show a 500, and say "Uncaught SyntaxError: ambiguous indirect export"
		include: ['antlr4'],
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		commonjsOptions: {
		  include: [/antlr4/, /node_modules/]
		}
	  }
});
