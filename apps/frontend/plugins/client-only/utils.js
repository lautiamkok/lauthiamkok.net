'use strict'

import Vue from 'vue'

console.log('process.env.NODE_ENV =', process.env.NODE_ENV)
console.log('process.env.streamRemoteResource =', process.env.streamRemoteResource)

// Promisise setTimeout.
// Usage:
// await this.$delay(500)
Vue.prototype.$delay = ms => new Promise(res => {
  setTimeout(res, ms)
})

// Usage:
// $joinPath('x', 'y', 'z')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Vue.prototype.$joinPath = (...args) => args.join('/')

// Get ZF media query screen size.
// Usage:
// $getCurrentScreenSize()
// http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
Vue.prototype.$getCurrentScreenSize = () => {
  window.addEventListener('resize', () => {
    console.log('Current screen size: ' + Foundation.MediaQuery.current)
  })
}

// Get and process the image from the assets directory.
// Option 1: remove readme file in assets folder manually. Because in your dynamic require
// you have specified that you may request any file that is inside ~/assets, so webpack
// has to parse all the files it encounters there
// return require('~/assets' + src)
// Option 2: configure Webpack.
// let context = require.context('~/assets', true, /^(?!.*\.(?:md)$).*/)
// return context('.' + src)
// Option 3: the best.
// Vue.prototype.$loadAssetImage = src => require('~/assets/images' + src)
Vue.prototype.$loadAssetImage = (...args) => {
  var src = args.join('/')
  var array = src.split('/')
  var last = [...array].pop()
  // console.log('args = ', args)
  // console.log('src = ', src)
  // console.log('last = ', last)

  // Stream the image from the URL to the local disk.
  if (process.server && process.env.streamRemoteResource === true) {
    // Option 1:
    // var fs = require('fs')
    // var http = require('http')
    // var file = fs.createWriteStream('./assets/images/' + last)
    // var request = http.get(src, function(response) {
    //   response.pipe(file)
    // })

    // Option 2:
    var { streamResource } = require('~/assets/javascripts/stream-resource')
    streamResource(src, last)
    return
  }

  try {
    return require('~/assets/images/' + last)
  } catch (e) {
    console.log('file doesn\'t exist!')
    return src
  }
}
