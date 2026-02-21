// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}', './app/**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
        charcoal: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'line-draw': 'lineDraw 800ms cubic-bezier(0.76, 0, 0.24, 1) forwards',
      },
      keyframes: {
        lineDraw: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': { opacity: 0 },
        },
        'rotate-loader': {
          '0%': { transform: 'rotate(0deg)', strokeDashoffset: '360%' },
          '100%': { transform: 'rotate(360deg)', strokeDashoffset: '-360%' },
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
