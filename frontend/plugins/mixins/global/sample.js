'use strict'

import Vue from 'vue'
Vue.mixin({
  data() {
    return {
      my_global_config: 'This'
    }
  },
  created: function () {
    console.log('mixin hook called')
  }
})
