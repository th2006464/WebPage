import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#9e8448',
          light: '#b8973c',
          dim: '#7a683e',
        },
        surface: {
          DEFAULT: '#0a0f1a',
          card: '#111827',
          hover: '#1a2332',
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang HK', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
