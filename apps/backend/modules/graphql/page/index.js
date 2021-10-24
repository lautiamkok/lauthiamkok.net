'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  extend type Query {
    pageStack (tag: String): [Page]
    pageBySlug (slug: String): Page
    pageStackMeta: PageStackMeta
  }

  type Page {
    id: String
    slug: String
    title: String
    subtitle: String
    contents: String
    description: String
    excerpt: String
    route: String
    order: Int
    path: String
    tags: [String]
    darkModeBgStyle: String
    coverImage: Image
    listImages: [Image]
    headImages: [Image]
    relatedPages: [Page]
    slideItems: [Flex]
    fullSplitHeadLeft: Flex
    fullSplitHeadRight: Flex
    meta: Meta
    og: Meta
  }

  type PageStackMeta {
    count: Int
  }
`

const resolvers = {
  Query: {
    pageStack: (root, args) => {
      if (args.tag) {
        return db.get('pages')
          .filter({
            tags: [args.tag],
          })
          .value()
      }

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
      return db.get('pages')
      .sortBy('order')
      .value()
      .reverse()
    },

    pageBySlug: (root, args) => {
      return db.get('pages')
        .find({
          slug: args.slug,
        })
        .value()
    },

    pageStackMeta: () => {
      return {}
    },
  },

  PageStackMeta: {
    count: () => {
      return db.get('pages')
        .size()
        .value()
    },
  },
}

export {
  typeDefs,
  resolvers
}
