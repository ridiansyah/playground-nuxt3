export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Nuxt 3 Playground',
    },
  },
  runtimeConfig: {
    public: {
      baseAPI: process.env.API_URL,
    },
  },
  modules: ['@privyid/persona', '@pinia/nuxt', '@nuxt-alt/proxy'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'postcss-lighten-darken': {},
      'autoprefixer': {},
    },
  },
  proxy: {
    enableProxy: true,
    proxies: {
      '/api': {
        target: process.env.API_URL,
        changeOrigin: true,
      },
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
