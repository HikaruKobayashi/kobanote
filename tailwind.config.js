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
      backgroundImage: theme => ({
        'top-img': "url('@/assets/img/top_img.jpg')",
      })
    },
  },
  variants: {
    extend: {
      margin: ['odd', 'even']
    },
  },
  plugins: [],
}
