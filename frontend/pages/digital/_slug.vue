<template>
  <main id="main">

    <!-- row -->
    <div class="row">
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-container font-rounded background-xxlight" v-bind:class="data.fullSplitHeadLeft.gridClass">
            <div class="cell small-8" v-bind:class="data.fullSplitHeadLeft.cellClass">
              <h1 class="h1-title shadow-hard" v-html="data.title"></h1>
              <div v-html="data.contents"></div>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <div class="cell medium-12 large-6 min-height-100vh">
          <div class="image-background min-height-100vh"
            v-bind:style="data.fullSplitHeadRight ? computeStyles(
              data.fullSplitHeadRight ? $loadAssetImage($remoteUrl, data.path, data.fullSplitHeadRight.bgImage) : null,
              data.fullSplitHeadRight.bgStyle
            ) : null"
          >
          </div>

        </div>

      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row row-media padding-y-xxlarge">
      <div class="grid-x grid-padding-x align-center-middle">

        <div class="cell small-12 large-5">

          <!-- vue - loop -->
          <template v-for="image in data.listImages">

            <!-- item -->
            <div class="item-media box-shadow-blur">
              <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, image.file)" :alt="image.title" />
            </div>
            <!-- item -->

          </template>
          <!-- vue - loop -->

        </div>

      </div>
    </div>

    <!-- row: related pages -->
    <div class="row" v-if="data.relatedPages">

      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic">

        <!-- cell -->
        <div class="cell small-12 large-5">

          <div class="text-center">
            <hr/>
          </div>

          <div>
            <h3 class="h3-title font-size-base inline-gold">
              <span><i class="icon icon-link"></i> Related Pages:</span>
            </h3>
            <nav>
              <ul class="ul-menu flex-wrap flex-start gold">
                <!-- vue - loop -->
                <template v-for="related in data.relatedPages">
                  <li class="inline-gold">
                    <nuxt-link :to="related.link" class="link-menu gold-item">
                      <i class="icon icon-weather-sunny"></i> <span v-html="related.title"></span>
                    </nuxt-link>
                  </li>
                </template>
                <!-- vue - loop -->

              </ul>
            </nav>
          </div>

        </div>
        <!-- cell -->

      </div>

    </div>
    <!-- row -->

    <!-- row: info / sponsor / advert -->
    <div class="row">
      <InfoSponsorAdvert />
    </div>
    <!-- row -->

    <!-- row: pager  -->
    <div class="row">
      <NavPager />
    </div>
    <!-- row -->

  </main>
</template>

<script>
// Mixins:
import computeStyles from '~/plugins/mixins/local/methods/computeStyles'

export default {
  async asyncData ({ params, error, $axios, route, store }) {
    // Prepare graphQL query.
    const QUERY = `
      query {
        digitalBySlug (slug: "${ params.slug }") {
          title
          slug
          excerpt
          path
          contents
          meta {
            title
            description
            keywords
          }
          og {
            type
            title
            description
            image
          }
          fullSplitHeadLeft {
            gridClass
            cellClass
          }
          fullSplitHeadRight {
            gridClass
            cellClass
            bgImage
            bgStyle
          }
          listImages {
            file
            title
          }
          relatedPages {
            title
            link
          }
        }
      }
    `

    store.commit('setHire', true)

    const { data: { data: { digitalBySlug: data } } } = await $axios.post('/graphql', {
      query: QUERY,
      staticPath: route.path,
    })

    if (data === null) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    return { data }
  },

  mixins: [
    computeStyles,
  ],

  // head () {
  //   return {
  //     title: this.data.title || 'all',
  //     meta: [
  //       // hid is used as unique identifier.
  //       // { hid: 'description', name: 'description', content: 'My custom description' }
  //     ]
  //   }
  // },
}
</script>
