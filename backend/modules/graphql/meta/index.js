'use strict'

import { gql } from 'apollo-server-koa'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  type Meta {
    title: String
    description: String
    keywords: String
    type: String
    image: String
  }
`

export {
  typeDefs,
}
