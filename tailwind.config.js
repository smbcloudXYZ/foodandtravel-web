/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,astro,mdx}'],
  theme: {
    extend: {
      colors: {
        'food-orange': '#FF6B35',
        'food-red': '#DC2626',
        'food-yellow': '#F59E0B',
        'food-brown': '#78350F',
        'food-cream': '#FEF3C7'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        serif: [
          'Besley',
          'Baskerville',
          'Georgia',
          'Cambria',
          "'Times New Roman'",
          'Times',
          'serif'
        ],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          "'Liberation Mono'",
          "'Courier New'",
          'monospace'
        ]
      },
      fontSize: {
        s: '0.8125rem',
        m: '0.9375rem',
        l: '1.0625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
      },
      fontWeight: {
        light: '350',
        normal: '400',
        bold: '500'
      },
      letterSpacing: {
        s: '-0.08em',
        m: '-0.02em',
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      }
    }
  },
  plugins: []
}
