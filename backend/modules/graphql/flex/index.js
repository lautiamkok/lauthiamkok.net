'use strict'

import { gql } from 'apollo-server-koa'

const typeDefs = gql`
  type Flex {
    title: String
    content: String
    link: String
    gridClass: String
    cellClass: String
    bgImage: String
    bgStyle: String
    imgCaption: String
  }
`

const resolvers = {
}

export {
  typeDefs,
  resolvers
}
