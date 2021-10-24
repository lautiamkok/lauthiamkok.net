'use strict'

import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  // You need to wrap the Vue.use function in the export default in your plugin and pass the router:
  // https://matteo-gabriele.gitbook.io/vue-gtag/
  // https://stackoverflow.com/questions/65493627/gtag-in-nuxt-js
  // https://github.com/MatteoGabriele/vue-gtag/issues/87
  // https://www.carlcassar.com/articles/add-google-analytics-to-a-nuxt-js-app/#tracking-page-views
  Vue.use(VueGtag, {
    config: {
      id: 'UA-8602078-2',
      pageTrackerScreenviewEnabled: true
    }
  }, app.router)
}
