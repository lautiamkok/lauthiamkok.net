'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  extend type Query {
    digitalStack (tag: String, limit: Int, skip: Int): [Digital]
    digitalBySlug (slug: String): Digital
    digitalStackMeta: DigitalStackMeta
  }

  type Digital {
    id: String
    slug: String
    title: String
    domain: String
    url: String
    contents: String
    description: String
    excerpt: String
    route: String
    createdOn: String
    updatedOn: String
    order: Int
    path: String
    link: String
    category: String
    directory: String
    tags: [String]
    coverImage: Image
    listImages: [Image]
    relatedPages:[Digital]
    fullSplitHeadLeft: Flex
    fullSplitHeadRight: Flex
    advert: String
    sponsor: String
    meta: Meta
    og: Meta
  }

  type DigitalStackMeta {
    count (category: String, tag: String): Int
  }
`

const resolvers = {
  Query: {
    digitalStack: (root, args) => {
      // Set default limit and skip if not provided.
      const limit = args.limit ? args.limit : 12
      const skip = args.skip ? args.skip : 0

      if (args.tag) {
        return db.get('digital')
          .filter({
            tags: [args.tag],
          })
          .sortBy('order')
          .reverse() // highest first
          .drop(skip)
          .take(limit)
          .value()
      }
      return db.get('digital')
        .sortBy('order')
        .reverse() // highest first
        .drop(skip)
        .take(limit)
        .value()
    },

    digitalBySlug: (root, args) => {
      return db.get('digital')
        .find({
          slug: args.slug,
        })
        .value()
    },

    digitalStackMeta: () => {
      return {}
    },
  },

  DigitalStackMeta: {
    count: (root, args) => {
      if (args.category && args.tag) {
        return db.get('digital')
          .filter({
            category: args.category,
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.tag) {
        return db.get('digital')
          .filter({
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.category) {
        return db.get('digital')
          .filter({
            category: args.category,
          })
          .size()
          .value()
      }
      return db.get('digital')
        .size()
        .value()
    },
  },

  // Digital: {
  //   tags: (root) => {
  //     const tags = []
  //     root.tags.forEach(tag => {
  //       tags.push({
  //         slug: tag,
  //         name: tag
  //       })
  //     })
  //     return tags
  //   },
  // }
}

export {
  typeDefs,
  resolvers
}
