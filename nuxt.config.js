module.exports = {
  ssr: false,

  head: {
    title: 'kobanote',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This site is a technical blog developed by Kobayashi.' }
    ],
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans+JP': true,
        },
        display: 'swap'
      },
    ],
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-fontawesome',
  ],

  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faTags", "faCaretRight"],
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faSearch"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["faTwitter"],
      },
    ],
  },

  sitemap: {
    hostname: process.env.BASE_URL || 'https://kobanote.net/',
    routes: async () => {
      let array = [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date()
        }
      ];
      const { $content } = require('@nuxt/content')
      const posts = await $content('blogs')
        .only(['path', 'updated_at'])
        .fetch()
      array = array.concat(
        posts.map((p) => 
          { 
            return {
              url: p.path, 
              lastmod: p.updated_at,
              priority: 1,
            }
          })
      )
      return array
    }
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  render: {
    injectScripts: false,
  }
}
