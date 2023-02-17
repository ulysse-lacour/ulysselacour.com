import config from './config'
import routes from './pages/routes'

export default {
  target: 'static',

  modern: !config.isDev && 'client',

  components: false,

  loading: false,

  telemetry: false,

  globalName: config.nuxt.globalName,

  dir: {
    static: 'public'
  },

  server: {
    port: config.server.port,
    host: config.server.hostname
  },

  watch: ['~/config/*', '~/tailwind.config.js'],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode'
  ],

  buildModules: ['@nuxt/postcss8', 'nuxt-gsap-module', 'nuxt-lazysizes'],

  css: ['~/assets/styles/main.css'],

  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  head: {
    htmlAttrs: {
      lang: config.app.lang
    },

    title: null,
    titleTemplate: null,

    meta: [
      {
        hid: 'charset',
        charset: config.app.charset
      },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width,minimum-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: config.app.description
      },
      {
        hid: 'robots',
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      },
      {
        hid: 'ahrefs-site-verification',
        name: 'ahrefs-site-verification',
        content:
          'b4992c116d5d9c7e5f2b8d147428875b94ed6c4b5fb81e1a9351952aecf8174c'
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',

    extendRoutes() {
      return routes
    }
  },

  build: {
    publicPath: config.nuxt.publicPath,

    extractCSS: true,

    templates: [
      {
        src: 'templates/app.html',
        dst: 'views/app.template.html'
      }
    ],

    postcss: {
      plugins: {
        'postcss-import': true,
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  generate: {
    dir: 'dist',
    fallback: true // Error 404 page
  },

  publicRuntimeConfig: {
    app: {
      url: config.app.url,
      name: config.app.name,
      title: config.app.title,
      titleSeparator: config.app.titleSeparator,
      titleTemplate: config.app.titleTemplate,
      description: config.app.description,
      type: config.app.type
    },
    breakpoints: config.breakpoints
  },

  privateRuntimeConfig: {},

  pwa: {
    icon: {
      source: 'assets/favicons/icon.png',
      sizes: [64, 192, 512]
    },

    meta: {
      author: config.app.author
    },

    manifest: {
      name: config.app.name,
      short_name: config.app.shortName,
      description: config.app.description,
      lang: config.app.lang,
      theme_color: config.app.themeColor,
      background_color: config.app.backgroundColor
    }
  },

  robots: {
    UserAgent: () => ['*'],
    Sitemap: () => [`${config.app.url}/sitemap.xml`]
  },

  sitemap: {
    hostname: config.app.url,
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },

  colorMode: {
    preference: 'dark' // default value of $colorMode.preference
  }
}
