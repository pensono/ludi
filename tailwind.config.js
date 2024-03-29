const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Geist', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        'brand-background': 'var(--color-brand-background)',
        'band-foreground': 'var(--color-brand-foreground)',

        // Dynamically set by the Meta component
        'background': 'var(--color-background)',
        'foreground': 'var(--color-foreground)',

        'mix-800': 'color-mix(in xyz, var(--color-background) 80%, var(--color-foreground))',
        'mix-600': 'color-mix(in xyz, var(--color-background) 60%, var(--color-foreground))',
        'mix-400': 'color-mix(in xyz, var(--color-background) 40%, var(--color-foreground))',
      },
      fontSize: {
        'big': '2rem',
        'small': '0.8rem'
      }
    },
  },
  plugins: [],
}

