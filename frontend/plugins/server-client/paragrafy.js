'use strict'

// Replace all line breaks in a string with <br />
const paragrafy = string => {
  const paragraphs = string.split('\n\n').join('</p><p>')
  const wrap = '<p>' + paragraphs + '</p>'
  const content = wrap.replace(/\n/g,'<br />')
  return content
}

export default (ctx, inject) => {
  ctx.$paragrafy = paragrafy
  inject('paragrafy', paragrafy)
}
