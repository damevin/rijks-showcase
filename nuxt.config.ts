// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Rijks Museum',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    apiKey: '',
    public: {
      apiUrl: '/api',
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  ssr: false,
  image: {
    domains: [
      'lh3.googleusercontent.com',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',
      'lh6.googleusercontent.com',
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh7.googleusercontent.com',
      'lh8.googleusercontent.com',
      'lh1.ggpht.com',
      'lh2.ggpht.com',
      'lh3.ggpht.com',
      'lh4.ggpht.com',
      'lh5.ggpht.com',
      'lh6.ggpht.com',
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@hypernym/nuxt-gsap',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ['./store/**'],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
})
