<template>
  <div>

    <!-- row: items  -->
    <div class="row row-cards padding-y-xxlarge padding-top-0" v-if="posts">

      <!-- grid-x -->
      <div class="grid-x align-center-middle">
        <div class="cell small-12 large-8">

          <!-- bind a key here to stop Vue from reusing components -->
          <div class="grid-x grid grid-margin-x medium-up-2 large-up-3" v-bind:key="category">

            <!-- vue - loop -->
            <template v-for="post in posts">

              <!-- cell -->
              <div class="cell grid-item">

                <!-- item -->
                <div class="card box-shadow-blur">

                  <div class="card-section border-y"
                    v-bind:class="post.coverTitle ? post.coverTitle.sectionClass : null"
                    v-bind:style="post.coverTitle ? computeStyles(
                      post.coverTitle.bgImage ? $loadAssetImage($remoteUrl, post.path, post.coverTitle.bgImage) : null,
                      post.coverTitle.bgStyle
                    ) : null"
                  >

                    <h2 class="h2-title header-medium"
                      v-bind:class="post.coverTitle ? post.coverTitle.headerClass : null"
                    >
                      <nuxt-link :to="post.link" v-html="post.excerpt"></nuxt-link>
                    </h2>

                  </div>

                </div>
                <!-- item -->

              </div>
              <!-- cell -->

            </template>
            <!-- vue - loop -->

          </div>

        </div>
      </div>
      <!-- grid-x -->

    </div>
    <!-- row  -->

    <!-- row: pager  -->
    <div class="row">
      <NavPager />
    </div>
    <!-- row -->

  </div>
</template>

<script>
// Mixins:
import computeStyles from '~/plugins/mixins/local/methods/computeStyles'

export default {
  data () {
    return {
      data: []
    }
  },

  async asyncData ({ params, error, $axios, route, store }) {
    const category = params.category

    // Prepare graphQL query.
    const QUERY = `
      query {
        feedStack(category: "${ category }") {
          title
          slug
          excerpt
          createdOn
          category
          path
          link
          coverImage {
            file
            title
          }
          coverTitle {
            sectionClass
            headerClass
            bgImage
            bgStyle
          }
        }
      }
    `

    const { data: { data: {
      feedStack: posts,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
      staticPath: route.path,
    })

    return { posts, category }
  },

  computed: {
    // Capitalise the first letter.
    // https://stackoverflow.com/a/53203953/413225
    categorised () {
      const category = this.category
      return category.replace(/^./, str => str.toUpperCase())
    }
  },

  mixins: [
    computeStyles,
  ],

  head () {
    return {
      title: this.categorised || 'all',
      meta: [
        // hid is used as unique identifier.
        // { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>
