<template>
  <main id="main">

    <!-- row -->
    <div class="row padding-y-large padding-bottom-0" v-if="data.layout =='flat' || data.layout == null">
      <div class="grid-x">
        <div class="cell small-12">

          <!-- grid-x -->
          <div class="grid-x align-center-middle text-container text-center font-classic">
            <div class="cell small-8 large-5">
              <h1 class="h1-title" v-html="data.title"></h1>
              <p v-html="data.excerpt"></p>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <!-- cell -->
        <div class="cell small-12" v-if="data.headImage">

          <!-- grid-x: align-center-middle, picture, figcaption -->
          <div class="grid-x align-center-middle">

            <div class="cell small-12 large-4" v-bind:class="data.headImage.cellClass">

              <!-- grid-x: picture, figcaption -->
              <div class="grid-x text-left">

                <!-- cell: picture -->
                <div class="cell small-12">
                  <picture>
                    <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, data.headImage.file)" :alt="data.headImage.alt" />
                  </picture>
                </div>
                <!-- cell: picture -->

                <!-- cell: figcaption -->
                <div class="cell small-12">

                  <!-- grid-x: figcaption -->
                  <div class="grid-x grid-padding-x"
                    v-bind:class="data.headImage.cellClass == 'large-12' ? null : 'large-padding-collapse'"
                  >
                    <div class="cell small-12">
                      <figcaption v-html="data.headImage.caption"></figcaption>
                    </div>
                  </div>
                  <!-- grid-x: figcaption -->

                </div>

              </div>
              <!-- grid-x: picture, figcaption -->

            </div>
            <!-- cell: figcaption -->

          </div>
          <!-- grid-x: align-center-middle, picture, figcaption -->

        </div>
      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row" v-if="data.layout =='split'">

      <!-- grid-x -->
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-container text-center font-classic background-xxlight" v-bind:class="data.fullSplitHeadLeft.gridClass">
            <div class="cell small-8" v-bind:class="data.fullSplitHeadLeft.cellClass">
              <h1 class="h1-title" v-html="data.title"></h1>
              <p class="caption" v-html="data.excerpt"></p>
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
      <!-- grid-x -->

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row" v-if="data.layout =='single'">
      <div class="grid-x">

        <div class="cell small-12 large-12">

          <!-- grid-x -->
          <div class="grid-x padding-y-large align-center min-height-100vh text-container text-center font-classic box-shadow-onhover"
            v-bind:class="data.fullSingleHead ? data.fullSingleHead.gridClass : null"
            v-bind:style="data.fullSingleHead ? computeStyles(
              data.fullSingleHead.bgImage ? $loadAssetImage($remoteUrl, data.path, data.fullSingleHead.bgImage) : null,
              data.fullSingleHead.bgStyle
            ) : null"
            >
            <div class="cell small-8 large-4"
              v-bind:class="data.fullSingleHead ? data.fullSingleHead.cellClass : null"
            >
              <h1 class="h1-title" v-html="data.title"></h1>
              <div
                v-html="$toHtml(data.excerpt)"
                v-bind:class="data.fontSizes ? data.fontSizes.headExcerpt : null"
              ></div>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <div class="cell small-12" v-if="data.fullSingleHead && data.fullSingleHead.imgCaption">

          <!-- grid-x: figcaption -->
          <div class="grid-x grid-padding-x">
            <div class="cell small-12">
              <figcaption class="text-right" v-html="data.fullSingleHead.imgCaption"></figcaption>
            </div>
          </div>
          <!-- grid-x: figcaption -->

        </div>

      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row margin-y-medium margin-bottom-0">
      <NavAligner />
    </div>

    <!-- row -->
    <div class="row padding-y-xxlarge">

      <!-- container -->
      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic text-center">

        <!-- cell -->
        <div class="cell small-12 large-5" v-bind:class="data.contentClass">

          <div v-html="data.contents"></div>
          <i class="icon-tree-hollow-forest icon-article"></i>

        </div>
        <!-- cell -->

      </div>
      <!-- container -->

    </div>
    <!-- row -->

    <div class="row">
      <div class="grid-x grid-padding-x align-center-middle">
        <div class="cell small-12 large-5">
          <div class="text-center">
            <hr/>
          </div>
        </div>
      </div>
    </div>


    <NavPoetic />

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
              <ul class="ul-menu flex-wrap flex-start">
                <!-- vue - loop -->
                <template v-for="related in data.relatedPages">
                  <li class="inline-gold">
                    <nuxt-link :to="related.link" class="link-menu">
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
  async asyncData ({ params, error, $axios, route, store, $paragrafy }) {
    // Prepare graphQL query.
    const QUERY = `
      query {
        poeticBySlug(slug: "${ params.slug }") {
          title
          slug
          excerpt
          path
          contents
          contentClass
          layout
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
          headImage {
            file
            alt
            caption
            cellClass
          }
          fullSingleHead {
            gridClass
            cellClass
            bgStyle
            bgImage
            imgCaption
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
          relatedPages {
            title
            link
          }
        }
      }
    `

    const { data: { data: { poeticBySlug: data } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    if (data === null) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    store.commit('setSponsor', true)

    data.contents = $paragrafy(data.contents)
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
