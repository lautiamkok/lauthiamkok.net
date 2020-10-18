'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  extend type Query {
    originStack (category: String, tag: String, limit: Int, skip: Int): [Origin]
    originBySlug (slug: String): Origin
    originStackMeta: OriginStackMeta
    originStackCategories(without: [String]): [String]
    originStackTags: [String]
  }

  type Origin {
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
    tags: [String]
    hide: [String]
    directory: String
    layout: String
    contentClass: String
    darkModeBgImage: String
    darkModeBgStyle: String
    fontSizes: FontSizes
    relatedPages:[Origin]
    listContents:[Origin]
    coverTitle: Card
    image: Image
    adImage: Image
    headImage: Image
    coverImage: Image
    listImages: [Image]
    fullSingleHead: Flex
    fullSplitHeadLeft: Flex
    fullSplitHeadRight: Flex
    advert: String
    sponsor: String
    meta: Meta
    og: Meta
  }

  type Card {
    sectionClass: String
    headerClass: String
    bgImage: String
    bgStyle: String
    imgCaption: String
  }

  type FontSizes {
    headExcerpt: String
    headBlockquote: String
  }

  type OriginStackMeta {
    count(category: String, tag: String): Int
  }
`

const resolvers = {
  Query: {
    originStack: (root, args) => {
      // Set default limit and skip if not provided.
      const limit = args.limit ? args.limit : 36
      const skip = args.skip ? args.skip : 0

      if (args.category && args.tag) {
        return db.get('origins')
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
        return db.get('origins')
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
        return db.get('origins')
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
      return db.get('origins')
        .sortBy('createdOn')
        .reverse() // latest first
        .drop(skip)
        .take(limit)
        .value()

    },

    originBySlug: (root, args) => {
      return db.get('origins')
        .find({
          slug: args.slug,
        })
        .value()
    },

    originStackCategories: (root, args) => {
      const without = []
      if (args.without) {
        args.without.map(item => {
          without.push(item)
        })
      }

      // https://lodash.com/docs/4.17.15#map
      // https://lodash.com/docs/4.17.15#uniq
      return db.get('origins')
        .map('category')
        .uniq()
        .xorBy(without)
        .value()
    },

    originStackTags: (root, args) => {
      // https://lodash.com/docs/4.17.15#isTypedArray
      // https://lodash.com/docs/4.17.15#flatMap
      // https://lodash.com/docs/4.17.15#uniq
      return db.get('origins')
        .filter('tags', db.isTypedArray())
        .flatMap('tags')
        .uniq()
        .value()
    },

    originStackMeta: () => {
      return {
        count: 0,
      }
    },
  },

  OriginStackMeta: {
    count: (root, args) => {
      if (args.category && args.tag) {
        return db.get('origins')
          .filter({
            category: args.category,
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.tag) {
        return db.get('origins')
          .filter({
            tags: [args.tag],
          })
          .size()
          .value()
      }
      if (args.category) {
        return db.get('origins')
          .filter({
            category: args.category,
          })
          .size()
          .value()
      }
      return db.get('origins')
        .size()
        .value()
    },
  },
}

export {
  typeDefs,
  resolvers
}
