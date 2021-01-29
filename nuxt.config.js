export default {
  ssr: false,
  target: 'static',
  router: {
    base: '/test__shop_frontend/',
  },
  head: {
    title: 'test__shop_frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/test__shop_frontend/favicon.ico',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: [],
  build: {},
}
