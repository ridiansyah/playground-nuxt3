export default defineNuxtConfig({
  modules: ['@privyid/persona', '@pinia/nuxt'],
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
})
