'use strict'

import { gql } from 'apollo-server-koa'
import { db } from 'Core/database/lowdb/connection'

const typeDefs = gql`
  extend type Query {
    poeticStack (without: [String]): [Poetic]
    poeticBySlug (slug: String): Poetic
    poeticStackMeta: PoeticStackMeta
  }

  type Poetic {
    id: String
    slug: String
    title: String
    description: String
    contents: String
    excerpt: String
    order: Int
    path: String
    link: String
    category: String
    directory: String
    layout: String
    include: String
    contentClass: String
    relatedPages:[Poetic]
    headImage: Image
    fullSingleHead: Flex
    fullSplitHeadLeft: Flex
    fullSplitHeadRight: Flex
    advert: String
    sponsor: String
    meta: Meta
    og: Meta
  }

  type PoeticStackMeta {
    count: Int
  }
`

const resolvers = {
  Query: {
    poeticStack: (root, args) => {
      if (args.without) {
        const without = []
        args.without.map(item => {
          without.push({
            slug: item
          })
        })
        // https://lodash.com/docs/4.17.15#reject
        // https://lodash.com/docs/4.17.15#pullAllBy
        // https://lodash.com/docs/4.17.15#without
        // https://lodash.com/docs/4.17.15#xorBy
        return db.get('poetic')
        // .reject({ 'slug': 'epilogue' })
        // .reject({ 'slug': 'prologue' })
        // .pullAllBy([
        //   { 'slug': 'epilogue' },
        //   { 'slug': 'prologue' },
        // ], 'slug')
        .xorBy(without, 'slug')
        .value()
      }
      return db.get('poetic')
      .value()
    },

    poeticBySlug: (root, args) => {
      return db.get('poetic')
        .find({
          slug: args.slug,
        })
        .value()
    },

    poeticStackMeta: () => {
      return {}
    },
  },

  PoeticStackMeta: {
    count: () => {
      return db.get('poetic')
        .size()
        .value()
    },
  },
}

export {
  typeDefs,
  resolvers
}
