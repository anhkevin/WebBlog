export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TianDev | Developer Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A blog or notebook for the developer in my experience, TianDev' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'VFwsFln5L0OvdhrurvM387vBBdo8FI-l10NX4A-4rt8' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TianDev | Developer Blog' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '399524598269268' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@TianDev' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://tiandev.net",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tiandev.net/img/tiandev_card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://tiandev.net/img/tiandev_card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TianDev'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://tiandev.net/img/tiandev_card.png'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap/css/bootstrap.min.css',
    '@/assets/css/style.scss',
    '@/assets/css/lib/bootstrap-toc.min.css'
  ],

  content: {
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    liveEdit: false
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/templates',
    '~/components/pages'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/norobots',
    Sitemap: 'https://tiandev.net/sitemap.xml'
  },

  sitemap: {
    hostname: 'https://tiandev.net',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    fallback: true,
    routes: ['/', '404']
  },

  pwa: {
    manifest: {
      name: 'TianDev',
      description: 'Developer Blog',
      theme_color: '#00C58E'
    }
  },

  googleAnalytics: {
    id: 'UA-148797549-3'
  },

  env: {
    baseUrl: (process.env.NODE_ENV == 'production') ? 'https://tiandev.net' : 'http://localhost:3000',
    namePage: 'TianDev',
    description: 'A blog or notebook for the developer in my experience, TianDev',
    slogan: 'Sống Để Trải Nghiệm - Cứ Cho Đi Sẽ Nhận Lại Được Hơn Thế !'
  }
}
