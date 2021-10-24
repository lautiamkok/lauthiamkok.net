<template>
  <div>

    <!-- row: items  -->
    <div class="row row-cards padding-y-xxlarge padding-top-0" v-if="posts">

      <!-- grid-x -->
      <div class="grid-x align-center-middle">

        <div class="cell small-12 large-7">

          <div class="grid-x grid grid-margin-x medium-up-2 large-up-2">

            <!-- vue - loop -->
            <template v-for="post in posts">

              <!-- cell -->
              <div class="cell grid-item" v-bind:key="post.title">

                <!-- item -->
                <div class="card box-shadow-blur">

                  <div class="card-section">

                    <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" class="micro-link grey-dark" data-tippy-placement="top" :data-tippy-content="$toUtcDateTime(post.createdOn, ' dddd, DD MMMM YYYY, HH:mm A')">
                      <i class="icon icon-clock"></i>
                      <span>{{ $toUtcDateTime(post.createdOn, 'DD MMMM YYYY') }} at {{ $toUtcDateTime(post.createdOn, 'HH:mm A') }}</span>
                    </nuxt-link>

                  </div>

                  <div class="card-image" v-if="post.coverImage">

                    <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" class="link-image square-container">
                      <span class="overlay-shadow"></span>

                      <picture class="square-content">
                        <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, post.path, post.coverImage.file)" :alt="post.title" v-if="post.coverImage" v-bind:key="post.slug"/>
                      </picture>

                    </nuxt-link>

                  </div>

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
                      <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" v-html="post.excerpt"></nuxt-link>
                    </h2>

                  </div>

                  <div class="card-section">

                    <nav class="margin-0">
                      <ul class="ul-menu flex-space-between padding-0 uppercase grey-dark micro">
                        <li>
                          <nuxt-link :to="'/origins/categories/' + post.category" class="link-menu link-category">
                            <i class="icon icon-tag"></i>
                            <span v-html="post.category"></span>
                          </nuxt-link>
                        </li>

                        <li>
                          <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)">
                            <i class="icon icon-chevron-thin-right" ></i>
                          </nuxt-link>
                        </li>

                      </ul>
                    </nav>

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
    originStack {
      title
      slug
      excerpt
      createdOn
      category
      path
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
      originStack: posts,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    // console.log('route.path index ===', route.path)

    return { posts }
  },

  mixins: [
    computeStyles,
  ],

  // Overide the global head.
  head () {
  },

  scrollToTop: true,
}
</script>
