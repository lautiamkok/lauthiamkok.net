'use strict'

const remoteUrl = process.env.remoteUrl
const baseUrl = process.env.baseUrl

const collapsePaddingX = (string) => {
  const classes = []
  if (string.includes('large-12') === false) {
    classes.push('large-only-padding-collapse')
  }

  if (string.includes('medium-12') === false) {
    classes.push('medium-only-padding-collapse')
  }
  return classes
}

export default (ctx, inject) => {
  ctx.$remoteUrl = remoteUrl
  ctx.$baseUrl = baseUrl
  ctx.$collapsePaddingX = collapsePaddingX
  inject('remoteUrl', remoteUrl)
  inject('baseUrl', baseUrl)
  inject('collapsePaddingX', collapsePaddingX)
}
