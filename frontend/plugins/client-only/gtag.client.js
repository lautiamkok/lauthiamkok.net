'use strict'

function addScript (attributes) {
  const s = document.createElement('script')
  for (var attr in attributes) {
    s.setAttribute(attr, attributes[attr] ? attributes[attr] : null)
  }
  document.body.appendChild(s)
}

// Installation:
// plugins: [
//   {
//     src: '~/plugins/gtag.js',
//     mode: 'client'
//   }
// ]
// https://developers.google.com/analytics/devguides/collection/gtagjs
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://stackoverflow.com/questions/66234255/google-analytics-loading-time-on-vue-js-page
// https://gist.github.com/daliborgogic/91a01ff39ec2a30258b2a2fbe5555485
// https://serversideup.net/google-analytics-vue-router-single-page-application/
export default ({ app }) => {
  // Option 1:
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script',`//www.googletagmanager.com/gtag/js?id=UA-8602078-2`,'gtag')

  // Option 2:
  addScript({
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-8602078-2',
    type: 'text/javascript',
    async: 'async',
    defer: 'defer'
  })

  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', 'UA-8602078-2')

  app.router.afterEach((to, from) => {
    // console.log('to.fullPath =', to)
    gtag('config', 'UA-8602078-2', {
      // 'page_title' : to.name,
      'page_path': to.fullPath
    })
  })

  // Disable pageview measurement
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages#disable_pageview_measurement
  // gtag('config', 'GA_MEASUREMENT_ID', {
  //   send_page_view: false
  // })
}

// https://medium.com/@tircomnicu_77850/nuxt-js-and-gdpr-creating-a-custom-cookie-component-e7957eedcfd
// const getGDPR = localStorage.getItem('GDPR:accepted')
//   if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
//     // disabled: false,
//   } else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
//     // disabled: true,
//   }

// https://success.vanillaforums.com/kb/articles/368-google-analytics-gtag-js-foundation
// function addScript (src, text, callback) {
//   var s = document.createElement('script')
//   s.setAttribute('src', src)
//   s.setAttribute('async', 'async')
//   s.setAttribute('defer', 'defer')
//   s.innerHTML = text
//   s.onload = callback
//   document.body.appendChild(s)
// }

// https://stackoverflow.com/a/47068619/413225
// function addScript (attributes, text, callback) {
//   var s = document.createElement('script')
//   for (var attr in attributes) {
//     s.setAttribute(attr, attributes[attr] ? attributes[attr] : null)
//   }
//   s.innerHTML = text
//   s.onload = callback
//   document.body.appendChild(s)
// }
// export default (ctx, inject) => {
//   addScript({
//     src: 'https://www.googletagmanager.com/gtag/js?id=UA-8602078-2',
//     type: 'text/javascript',
//     async: 'async',
//     defer: 'defer'
//   },
//   '',
//   function () {})

//   addScript({
//     type: 'text/javascript',
//   },
//   `window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'UA-8602078-2');`,
//   function () {})
// }
