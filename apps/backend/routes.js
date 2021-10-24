'use strict'

import Router from 'koa-router'

// Import routes from different modules.
import home from 'Modules/home'

const router = new Router({
  // prefix: '/public'
})

// https://stackoverflow.com/questions/30285683/how-can-i-split-my-koa-routes-into-separate-files
const modules = [home]
for (var module of modules) {
  router.use(module.routes(), module.allowedMethods())
}

export default router
