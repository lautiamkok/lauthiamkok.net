<template>
  <div>

    <!-- row: items  -->
    <div class="row row-cards padding-y-xxlarge padding-top-0" v-if="posts">

      <!-- grid-x -->
      <div class="grid-x align-center-middle">

        <div class="cell small-12 large-8">

          <div class="grid-x grid grid-margin-x medium-up-2 large-up-3">

            <!-- vue - loop -->
            <template v-for="post in posts">

              <!-- cell -->
              <div class="cell grid-item" v-bind:key="post.title">

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

// Prepare graphQL query.
const QUERY = `
  query {
    feedStack {
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

export default {
  async asyncData ({ $axios, route }) {
    const { data: { data: {
      feedStack: posts,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    // console.log('route.path index ===', route.path)

    return { posts }
  },

  head () {
    return {
      // Disable template.
      titleTemplate: null
    }
  },

  mixins: [
    computeStyles,
  ],

  scrollToTop: true,
}
</script>
