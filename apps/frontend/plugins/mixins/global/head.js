'use strict'

import Vue from 'vue'

Vue.mixin({
  head () {
    // Check if it is a page.
    const isPage = this.$options.parent !== undefined && this.$options.parent.name === 'page'
    if (isPage !== true) {
      return
    }
    // console.log('plugins/mixins/global/head.js: __file =', this.$options.__file)
    // console.log('plugins/mixins/global/head.js: this.$options.parent.name =', this.$options.parent.name)

    return {
      title: metaTitle (this),
      meta: [
        // hid is used as unique identifier.
        {
          hid: 'description',
          name: 'description',
          content: metaDescription(this)
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: metaKeywords(this)
        },

        // open graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: ogTitle(this)
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$baseUrl + this.$route.fullPath + '/'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogImage(this)
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ogDescription(this)
        },

        {
          hid: 'og:type',
          property: 'og:type',
          content: ogType(this)
        },

        // open graph for twitter
        // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: ogTitle(this)
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: this.$baseUrl + this.$route.fullPath + '/'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogImage(this)
        },

        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: ogDescription(this)
        }
      ]
    }
  }
})


function metaTitle (vue) {
  let title
  if (vue.data.meta) {
    title = vue.data.meta.title
  }
  if (!title) {
    return vue.data.title
  }
  return title
}

function metaDescription (vue) {
  let description
  if (vue.data.meta) {
    description = vue.data.meta.description
  }
  if (!description) {
    if (!vue.data.excerpt) {
      // https://stackoverflow.com/questions/42193022/retrieving-content-within-first-paragraph-tag-with-javascript-regex
      const match = vue.data.contents.match(/<(\w+)>(.*?)<\/\1>/)
      if (match){
        return match[0].replace(/<\/?[^>]+(>|$)/g, ' ').trim()
      }
      return vue.data.contents.replace(/<\/?[^>]+(>|$)/g, ' ').trim()
    }
    return vue.data.excerpt.replace(/<\/?[^>]+(>|$)/g, ' ').trim()
  }
  return description
}

function metaKeywords (vue) {
  let keywords
  if (vue.data.meta) {
    keywords = vue.data.meta.keywords
  }
  if (!keywords) {
    return
  }
  return keywords
}

function ogType (vue) {
  let type
  if (vue.data.og) {
    type = vue.data.og.type
  }
  if (!type) {
    return
  }
  return type
}

function ogTitle (vue) {
  let title
  if (vue.data.og) {
    title = vue.data.og.title
  }
  if (vue.data.meta && !title) {
    title = vue.data.meta.title
  }
  if (!title) {
    return vue.data.title + ' | ' + vue.$store.state.meta.title
  }
  return title
}

function ogDescription (vue) {
  let description
  if (vue.data.og) {
    description = vue.data.og.description
  }
  if (vue.data.meta && !description) {
    description = vue.data.meta.description
  }
  if (!description) {
    if (!vue.data.excerpt) {
      const match = vue.data.contents.match(/<(\w+)>(.*?)<\/\1>/)
      if (match){
        return match[0].replace(/<\/?[^>]+(>|$)/g, ' ').trim()
      }
      return vue.data.contents.replace(/<\/?[^>]+(>|$)/g, ' ').trim()
    }
    return vue.data.excerpt.replace(/<\/?[^>]+(>|$)/g, ' ').trim()
  }
  return description
}

function ogImage (vue) {
  let image
  if (vue.data.og) {
    image = vue.data.og.image
  }

  if (!image) {
    return
  }
  image = vue.$loadAssetImage(vue.$remoteUrl, vue.data.path, image)

  // Check if there is http in the string.
  // https://stackoverflow.com/questions/11300906/check-if-a-string-starts-with-http-using-javascript
  const pattern = /^((http|https|ftp):\/\/)/
  if(!pattern.test(image)) {
    return vue.$baseUrl + image
  }
  return image
}
