// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: "canonical",
          href: process.env.BASE_URL,
        },
      ],
      meta: [
        {
          property: "title",
          content: "Unicos",
        },
        {
          name: "description",
          content:
            "Simplify human resources management across your entire organization with UNICOS",
        },
        {
          property: "og:url",
          content: process.env.BASE_URL,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Unicos",
        },
        {
          property: "og:description",
          content:
            "Simplify human resources management across your entire organization with UNICOS",
        },
        {
          property: "og:image",
          content: process.env.BASE_URL + "og-unicos.jpg",
        },
        { name: "twitter:card", content: "summary" },
        { property: "twitter:domain", content: process.env.DOMAIN },
        { property: "twitter:url", content: process.env.BASE_URL },
        { name: "twitter:title", content: "Unicos" },
        {
          name: "twitter:description",
          content:
            "Simplify human resources management across your entire organization with UNICOS.",
        },
        {
          name: "twitter:image",
          content: process.env.BASE_URL + "og-unicos.jpg",
        },
      ],
    },

  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@pinia/nuxt',
    "nuxt-aos",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],
  sitemap: {
    urls: ['https://unicos.site'], // Set the base URL of your site
    include: ['/'], // List of routes to include in the sitemap
    defaults: {
      changefreq: 'daily',
      priority: 1.0,
    },
  },
  robots: {
    sitemap: [
      '/sitemap.xml'
    ],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    public: {
      emailServiceID: process.env.EMAIL_SERVICE_ID,
      emailTemplateID: process.env.EMAIL_TEMPLATE_ID,
      emailPublicKey: process.env.EMAIL_PUBLIC_KEY,
      spaURL : process.env.SPA_URL,
      apiURL : process.env.API_URL
    }
  }
})

