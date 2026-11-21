import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: {
          light: '#fbfbfb',
          dark: '#0a0a0a',
        },
        surface: {
          light: '#ffffff',
          dark: '#111111',
        },
        border: {
          light: '#eaeaea',
          dark: '#222222',
        },
        muted: {
          light: '#666666',
          dark: '#888888',
        },
      },
    },
  },
  plugins: [],
};

export default config;
