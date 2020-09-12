export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'ArisaKnits - The Story of Arisa Johnsey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'image', content: '/meta-image.jpg' },
      { name: 'msapplication-TileColor', content: '#9f00a7' },
      { name: 'theme-color', content: '#ffffff' },
      // <!-- Schema.org for Google -->
      {
        itemprop: 'name',
        content: process.env.npm_package_name,
      },
      {
        itemprop: 'description',
        content: process.env.npm_package_description,
      },
      {
        itemprop: 'image',
        content: '/meta-image.jpg',
      },
      // <!-- Twitter -->
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:title',
        content: process.env.npm_package_name,
      },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description,
      },
      { name: 'twitter:site', content: '@asirawr' },
      { name: 'twitter:creator', content: '@asirawr' },
      {
        name: 'twitter:image:src',
        content: '/meta-image.jpg',
      },
      //<!-- Open Graph general (Facebook, Pinterest & Google+) -->
      {
        name: 'og:title',
        content: process.env.npm_package_name,
      },
      {
        name: 'og:description',
        content: process.env.npm_package_description,
      },
      {
        name: 'og:image',
        content: '/meta-image.jpg',
      },
      { name: 'og:url', content: 'https://arisaknits.com' },
      { name: 'og:type', content: 'website' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {
        rel: 'icon',

        href:
          'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧶</text></svg>',
      },
      {
        rel: 'image_src',
        href: `https://arisaknits.com/meta-image.jpg`,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
