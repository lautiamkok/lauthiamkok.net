'use strict'

// Import node_modules middlewares.
// Check other Koa official middlewares: https://github.com/koajs
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

import routes from './routes'
import config from 'Configs'

// Import custom local middlewares.
import sample from 'Middlewares/sample'
import errorHandler from 'Middlewares/errorHandler'
import notFound from 'Middlewares/notFound'
import okOutput from 'Middlewares/okOutput'

export default (app) => {
  // CORS - put this before serving static files so they can be requested.
  // https://github.com/koajs/cors
  app.use(cors({
    origin: config.cors.origin,
    credentials: true,
    allowHeaders: config.cors.allowHeaders,
  }))

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(serve(config.static_dir.static))
  app.use(serve(config.static_dir.data));

  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(errorHandler)
  app.use(notFound)
  app.use(okOutput)

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(bodyParser())

  // A sample middleware in a separate file.
  app.use(sample)

  // Add routes.
  app.use(routes.routes(), routes.allowedMethods())
}
