'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  extend type Query {
    artStack (tag: String, limit: Int, skip: Int): [Art]
    artBySlug (slug: String): Art
    artStackMeta: ArtStackMeta
  }

  type Art {
    id: String
    slug: String
    title: String
    contents: String
    description: String
    excerpt: String
    year: String
    createdOn: String
    updatedOn: String
    order: Int
    path: String
    link: String
    category: String
    directory: String
    layout: String
    tags: [String]
    coverImage: Image
    headImages: [Image]
    listImages: [Image]
    relatedPages:[Art]
    fullSingleHead: Flex
    fullSplitHeadLeft: Flex
    fullSplitHeadRight: Flex
    advert: String
    sponsor: String
    meta: Meta
    og: Meta
  }

  type ArtStackMeta {
    count: Int
  }
`

const resolvers = {
  Query: {
    artStack: (root, args) => {
      // Set default limit and skip if not provided.
      const limit = args.limit ? args.limit : 12
      const skip = args.skip ? args.skip : 0

      if (args.tag) {
        return db.get('art')
          .filter({
            tags: [args.tag],
          })
          .sortBy('order')
          .reverse() // highest first
          .drop(skip)
          .take(limit)
          .value()
      }
      return db.get('art')
        .sortBy('order')
        .reverse() // highest first
        .drop(skip)
        .take(limit)
        .value()
    },

    artBySlug: (root, args) => {
      return db.get('art')
        .find({
          slug: args.slug,
        })
        .value()
    },

    artStackMeta: () => {
      return {}
    },
  },

  ArtStackMeta: {
    count: () => {
      if (args.tag) {
        return db.get('art')
          .filter({
            tags: [args.tag],
          })
          .size()
          .value()
      }
      return db.get('art')
        .size()
        .value()
    },
  },
}

export {
  typeDefs,
  resolvers
}
