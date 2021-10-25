'use strict'

import Koa from 'koa'
import chokidar from 'chokidar'
import { ApolloServer } from 'apollo-server-koa'
import config from 'Configs'
import middlewares from '../middlewares'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

import { db } from 'Core/database/lowdb/connection'
import { jsonifyMarkDown } from 'Core/jsonifyMarkDown'

// Add data.
// https://github.com/typicode/lowdb
async function addData () {
  console.log('adding data...')
  const digital = await jsonifyMarkDown('digital', 'data/digital/')
  const art = await jsonifyMarkDown('art', 'data/art/')
  const poetic = await jsonifyMarkDown('poetic', 'data/poetic/')
  const origins = await jsonifyMarkDown('origin', 'data/origins/')
  const feeds = await jsonifyMarkDown('feed', 'data/feeds/')
  const pages = await jsonifyMarkDown('page', 'data/pages/')

  db.set('digital', digital)
    .write()
  db.set('art', art)
    .write()
  db.set('poetic', poetic)
    .write()
  db.set('origins', origins)
    .write()
  db.set('feeds', feeds)
    .write()
  db.set('pages', pages)
    .write()
}
addData()

// Create Apollo server instance with modules.
// https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-koa
const server = new ApolloServer({
  modules: [
    require('Modules/graphql/hello'),
    require('Modules/graphql/meta'),
    require('Modules/graphql/digital'),
    require('Modules/graphql/art'),
    require('Modules/graphql/poetic'),
    require('Modules/graphql/origin'),
    require('Modules/graphql/feed'),
    require('Modules/graphql/page'),
    require('Modules/graphql/flex'),
    require('Modules/graphql/image'),
    // require('Modules/graphql/tag'),
  ],
})

// CORS configuration.
// https://stackoverflow.com/questions/54485239/apollo-server-express-cors-issue
const corsOptions = {
  origin: config.cors.origin,
  credentials: true,
}

// Get the composed middleware from the apollo server
app.use(server.getMiddleware({ cors: corsOptions }))
// Or:
// server.applyMiddleware({
//   app,
//   cors: corsOptions,
// })

// Other middlewares are imported here.
middlewares(app)

// app.listen(port, host)
app.listen({ port: port }, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`),
)

// Something to use when events are received.
const log = console.log.bind(console);

// Watch file changes.
// https://github.com/paulmillr/chokidar
chokidar.watch('./data', {
  ignoreInitial: true,
  ignored: './data/**/*.json',
})
.on('add', path => {
  log(`File ${path} has been added`)
  addData()
})
.on('change', path => {
  log(`File ${path} has been changed`)
  addData()
})
.on('unlink', path => {
  log(`File ${path} has been removed`)
  addData()
})
