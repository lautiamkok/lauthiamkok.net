'use strict'

import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'

const md = new MarkdownIt()
md.use(attrs)

// Convert markdown to HTML.
const toHtml = string => {
  return md.render(string)
}

export default (ctx, inject) => {
  ctx.$toHtml = toHtml
  inject('toHtml', toHtml)
}
