'use strict'

export default async (context) => {
  // current route
  // console.log('route =', context.route)

  // Reset on each new route.
  context.store.commit('setAdvert', false)
  context.store.commit('setSponsor', false)
  context.store.commit('setHire', false)

  // previous route
  // if (process.client) {
  //   const from = context.from
  //   console.log('from=', from)
  // }
}
