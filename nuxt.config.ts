// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt 4 PWA App',
      short_name: 'NuxtPWA',
      description: 'A Progressive Web App built with Nuxt 4 and Capacitor',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      cleanupOutdatedCaches: true,
      clientsClaim: true
    },
    devOptions: {
      enabled: true, // enable PWA during development
      type: 'module'
    }
  },
  nitro: {
    preset: 'static' // ✅ ensures static files are generated
  }
})
