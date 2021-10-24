'use strict'

// Installation:
// plugins: [
//   {
//     src: '~/plugins/pixel.js',
//     mode: 'client'
//   }
// ]
// https://stackoverflow.com/questions/43653545/how-to-use-facebook-pixel-on-vuejs-single-page-app-nuxt
export default ({ app }) => {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)} (window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js')

  fbq('init', '354155232551591');
  fbq('track', 'PageView');

  // Fire a page view on each route change.
  app.router.afterEach((to, from) => {
    // console.log('to.fullPath =', to)
    fbq("track", "PageView")
  })
}
