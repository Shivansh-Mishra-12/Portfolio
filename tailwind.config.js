/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        lineReveal: {
          '0%': { scaleX: '0' },
          '100%': { scaleX: '1' },
        },
      },
      animation: {
        lineReveal: 'lineReveal 0.8s 0.6s forwards',
      },
      colors: {
        primary: 'var(--color-primary)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        secondary: 'var(--color-secondary)',
        card: 'var(--color-card)',
      },
    },
  },
}
