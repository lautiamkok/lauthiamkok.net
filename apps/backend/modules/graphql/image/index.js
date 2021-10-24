'use strict'

import { gql } from 'apollo-server-koa'

// https://www.youtube.com/watch?v=l9AA11tOK9I
const typeDefs = gql`
  type Image {
    title: String
    file: String
    path: String
    description: String
    alt: String
    caption: String
    content: String
    link: String
    gridClass: String
    cellClass: String
    figcaptionGridClass: String
    figcaptionCellClass: String
    style: String
  }
`

export {
  typeDefs,
}
