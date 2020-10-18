'use strict'

// This can cause 404 errors in static pages. Use this for SSR app only.
export default async (context) => {
  // current route
  // console.log('middlewatre/layout.js: context.route =', context.route)

  const path = context.route.path
  if (path.includes('origins')) {
    const QUERY = `
    query {
      originBySlug(slug: "${ context.route.params.slug }") {
        title
        slug
        path
        layout
      }
    }
    `

    var { data: { data: {
        originBySlug: data
    } } } = await context.$axios.post('/graphql', {
      query: QUERY,
    })
  } else {
    // Prepare graphQL query.
    const QUERY = `
      query {
        pageBySlug (slug: "${ context.route.name }") {
          title
          slug
          path
        }
      }
    `

    var { data: { data: {
        pageBySlug: data
    } } } = await context.$axios.post('/graphql', {
      query: QUERY,
    })
  }
  // console.log('middlewatre/layout.js: data =', data)

  // Inject a `layout` key to context and set its value from the fetched data.
  context.layout = data.layout
}
