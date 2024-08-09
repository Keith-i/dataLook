module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'mf-',
  theme: {
    extend: {
      colors: {
        mfcor: {
          50: '#feffe7',
          100: '#fbffc1',
          200: '#fbff86',
          300: '#fffd41',
          400: '#fff00d',
          500: '#fee100',
          600: '#d1a700',
          700: '#a67802',
          800: '#895d0a',
          900: '#744c0f',
          950: '#442804',
        },
      },
    },
  },
  plugins: [],
}
