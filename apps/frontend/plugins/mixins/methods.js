'use strict'

import Vue from 'vue'

Vue.mixin({
  methods: {
    scrollTo (hashbang) {
      location.hash = hashbang
    }
  }
})
