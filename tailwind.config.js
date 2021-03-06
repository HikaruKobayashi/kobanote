module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitter: '#1da1f2',
      },
    }
  },
  variants: {
    extend: {
      margin: ['odd', 'even']
    },
  },
  plugins: [],
}
