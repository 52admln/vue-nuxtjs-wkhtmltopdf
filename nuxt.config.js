const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.10/es5-shim.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-sham.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/es7-shim/6.0.0/es7-shim.min.js'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.min.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~/plugins/echarts',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
