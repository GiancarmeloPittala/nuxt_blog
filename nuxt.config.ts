// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [ '/assets/css/global.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui'
  ],

  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'], 
    ],
  },

  tailwindcss: {
    viewer: false
  }
})
