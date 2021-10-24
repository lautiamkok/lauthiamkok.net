// Production HTTPS:
// HTTPS configuration.
// import fs from 'fs'
// const sslPath = '/etc/letsencrypt/live/lauthiamkok.net/'

// Base router.
let router = {
  // https://nuxtjs.org/api/configuration-router/#linkactiveclass
  linkActiveClass: 'active', // active-link

  // https://nuxtjs.org/api/configuration-router/#linkexactactiveclass
  linkExactActiveClass: 'active', // exact-active-link

  middleware: [
    'reset',
    // 'layout' // causing 404 in static pages.
  ]
}

// Router for GitHuber pages.
let routerGitHub = {
  base: '/lauthiamkok.net/',
}

// Only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  // Merge all objects.
  router = { ...router, ...routerGitHub }
}

// Host base.
const protocols = {
  local: 'https',
  remote: 'http'
}

// Cross domain ports.
const ports = {
  local: '3000',
  remote: '5000'
}

// Cross domain hosts.
const hosts = {
  local: process.env.NODE_ENV === 'production' ? 'lauthiamkok.net' : 'localhost',
  remote: 'localhost'
}
const remoteUrl = protocols.remote + '://' + hosts.remote + ':' + ports.remote

// Create a baseUrl that will be equal to the BASE_URL environment variable if
// defined, otherwise, equal to 'http://localhost:3000'
let baseUrl = protocols.local + '://' + hosts.local + ':' + ports.local
if (process.env.NODE_ENV === 'production') {
  baseUrl = protocols.local + '://' + hosts.local
}

// Log variables to the terminal.
console.log('process.env.NUXT_ENV_GEN =', process.env.NUXT_ENV_GEN)
console.log('process.env.DB_HOST =', process.env.DB_HOST)
console.log('process.env.BASE_URL =', process.env.BASE_URL)
console.log('process.env.NODE_ENV =', process.env.NODE_ENV)
console.log('remoteUrl =', remoteUrl)
console.log('baseUrl =', baseUrl)
console.log('router =', router)

export default {
  // Nuxt target (https://nuxtjs.org/api/configuration-target)
  // target: 'server',
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // __dangerouslyDisableSanitizers: ['script'],
    title: 'Lau Tiam Kok',
    titleTemplate: ' %s | Lau Tiam Kok',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      // Add script in the footer - before the body ends.
      // https://stackoverflow.com/questions/50138074/how-to-append-js-files-in-nuxt-before-body-ends
      // {
      //   src: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-607854a7bae6bbcf',
      //   body: true
      // },

      // {
      //   src: 'https://www.googletagmanager.com/gtag/js?id=UA-8602078-2',
      //   body: true
      // },

      // Inline script.
      // https://dev.to/mandeepm91/how-to-add-third-party-scripts-inline-scripts-in-your-nuxt-js-app-1nbf
      // gtag.js official documentation:
      // https://developers.google.com/analytics/devguides/collection/gtagjs
      // Disable pageview measurement:
      // gtag('config', 'GA_MEASUREMENT_ID', { 'send_page_view': false });
      // {
      //   innerHTML: `
      //     window.dataLayer = window.dataLayer || [];
      //     function gtag(){dataLayer.push(arguments);}
      //     gtag('js', new Date());

      //     gtag('config', 'UA-8602078-2');
      //   `,
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      //   body: true
      // }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS files from the stylesheets folder.
    // https://medium.com/@ChiefORZ/using-embedded-base64-fonts-10e5894841ca
    // 'assets/stylesheets/css/font-face/base64/open-san.css', // too big, use link.
    // 'assets/stylesheets/css/font-face/sura.css', // use inline base64.
    'assets/stylesheets/css/font-face/open-san.css',
    'assets/stylesheets/css/font-face/base64/iconmoon.css',
    'assets/stylesheets/css/font-face/base64/sura.css',
    'assets/stylesheets/css/font-face/base64/lora.css',

    // Use the customised foundation instead.
    'assets/stylesheets/scss/foundation.scss',

    // CSS files from the node_modules folder.
    'swiper/css/swiper.css',

    // LESS files from the stylesheets folder.
    'assets/stylesheets/less/master.less',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/mixins/global/sample.js',
    // {
    //   src: '~/plugins/gtag.js',
    //   mode: 'client'
    // },
    '~/plugins/mixins/methods.js',
    '~/plugins/mixins/global/head.js',
    '~/plugins/client-only/utils.js',
    '~/plugins/server-client/utils.js',
    '~/plugins/server-client/paragrafy.js',
    '~/plugins/server-client/axios.js',
    '~/plugins/server-client/datetime-helpers.js',
    '~/plugins/server-client/markdown-it.js',
    '~/plugins/client-only/foundation.client.js',
    '~/plugins/client-only/gtag.client.js',
    '~/plugins/client-only/mixins/mounted.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/gtm',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // You can extend webpack config here.
    extend (config, ctx) {
    }
  },

  // The env property defines environment variables that should be
  // available on the client side.
  // https://nuxtjs.org/api/configuration-env#the-env-property
  env: {
    // Set base url.
    baseUrl,

    // Set remote URL for axios.
    remoteUrl,

    // Set to true to pull the remote resources for serving static pages.
    streamRemoteResource: process.env.NUXT_ENV_GEN === 'stream' ? true : false
  },

  router: router,

  // Don't run this property on localhost for production, e.g. nuxt generate && nuxt start
  // Comment this property on localhost before running nuxt start.
  // https://nuxtjs.org/api/configuration-server
  server: {
    port: ports.local, // default: 3000
    host: hosts.local, // default: localhost,
    timing: false,

    // Production HTTPS:
    // HTTPS configuration.
    // https://nuxtjs.org/api/configuration-server/#example-using-https-configuration
    // https://stackoverflow.com/questions/56966137/how-to-run-nuxt-npm-run-dev-with-https-in-localhost
    // https: {
    //   key: fs.readFileSync(sslPath + 'privkey.pem'),
    //   cert: fs.readFileSync(sslPath + 'fullchain.pem')
    // }
  },

  // Generate 404 page.
  // https://nuxtjs.org/api/configuration-generate#fallback
  generate: {
    fallback: true,
  },
}
