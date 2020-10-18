'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  extend type Query {
    feedStack (category: String, tag: String, limit: Int, skip: Int): [Feed]
    feedStackMeta: FeedStackMeta
    feedStackCategories(without: [String]): [String]
  }

  type Feed {
    id: String
    slug: String
    title: String
    subtitle: String
    description: String
    contents: String
    excerpt: String
    createdOn: String
    updatedOn: String
    path: String
    link: String
    category: String
    directory: String
    coverTitle: Card
    coverImage: Image
  }

  type FeedStackMeta {
    count(category: String, tag: String): Int
  }
`

const resolvers = {
  Query: {
    feedStack: (root, args) => {
      // Set default limit and skip if not provided.
      const limit = args.limit ? args.limit : 36
      const skip = args.skip ? args.skip : 0

      if (args.category && args.tag) {
        return db.get('feeds')
          .filter({
            category: args.category,
            tags: [args.tag],
          })
          .sortBy('createdOn')
          .reverse() // latest first
          .drop(skip)
          .take(limit)
          .value()

        // https://lodash.com/docs/4.17.15#filter
        // https://lodash.com/docs/4.17.15#includes
        // filter(data, item => {
        //   let tags = item.tags
        //   return includes(tags, args.tag)
        // })
        // Or, better:
        // filter(data, { tags: [args.tag] })

      }
      if (args.tag) {
        return db.get('feeds')
          .filter({
            tags: [args.tag],
          })
          .sortBy('createdOn')
          .reverse() // latest first
          .drop(skip)
          .take(limit)
          .value()
      }
      if (args.category) {
        return db.get('feeds')
          .filter({
            category: args.category,
          })
          .sortBy('createdOn')
          .reverse() // latest first
          .drop(skip)
          .take(limit)
          .value()
      }

      // https://lodash.com/docs/4.17.15#drop
      // https://lodash.com/docs/4.17.15#take
      // https://lodash.com/docs/4.17.15#sortBy
      return db.get('feeds')
        .sortBy('createdOn')
        .reverse() // latest first
        .drop(skip)
        .take(limit)
        .value()

    },

    feedStackCategories: (root, args) => {
      const without = []
      if (args.without) {
        args.without.map(item => {
          without.push(item)
        })
      }

      // https://lodash.com/docs/4.17.15#map
      // https://lodash.com/docs/4.17.15#uniq
      return db.get('feeds')
        .map('category')
        .uniq()
        .xorBy(without)
        .value()
    },

    feedStackMeta: () => {
      return {
        count: 0,
      }
    },
  },

  FeedStackMeta: {
    count: (root, args) => {
      if (args.category && args.tag) {
        return db.get('feeds')
          .filter({
            category: args.category,
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.tag) {
        return db.get('feeds')
          .filter({
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.category) {
        return db.get('feeds')
          .filter({
            category: args.category,
          })
          .size()
          .value()
      }
      return db.get('feeds')
        .size()
        .value()
    },
  },
}

export {
  typeDefs,
  resolvers
}
