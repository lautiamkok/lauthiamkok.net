'use strict'

import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  extend type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

export {
  typeDefs,
  resolvers
}
