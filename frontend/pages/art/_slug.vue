<template>
  <main id="main">

    <!-- row -->
    <div class="row" v-if="data.layout =='single'">

      <div class="indexes-container">

        <!-- grid-x : index 0 -->
        <div class="grid-x index-0">

          <div class="cell small-12">

            <!-- Slider main container -->
            <div class="swiper-container swiper-container-fade dark-mode">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper min-height-100vh width-100">

                  <!-- vue - loop -->
                  <template v-for="(image, index) in data.headImages">

                    <!-- Slides -->
                    <div class="swiper-slide"
                      v-bind:style="image ? computeStyles(
                        image ? $loadAssetImage($remoteUrl, data.path, image.file) : null,
                        image.style
                      ) : null"
                    >

                      <!-- grid-x -->
                      <div class="grid-x align-center-middle text-center min-height-100vh hide">
                        <div class="cell small-6">
                          <h2 class="h2-link"><a href="#" class="link-white font-size-xlarge"></a></h2>
                          <p></p>
                        </div>
                      </div>
                      <!-- grid-x -->

                    </div>

                  </template>
                  <!-- vue - loop -->

                </div>
                <!-- Slides -->

                <!-- If we need pagination -->
                <div class="swiper-pagination right-pagination"></div>

            </div>
            <!-- Slider main container -->

          </div>

        </div>
        <!-- grid-x : index 0 -->

        <!-- grid-x : index 1 -->
        <div class="grid-x index-1 text-container font-rounded"
          v-bind:class="data.fullSingleHead ? data.fullSingleHead.gridClass : null"
        >

          <div class="cell small-12 medium-8 large-8"
            v-bind:class="data.fullSingleHead ? data.fullSingleHead.cellClass : null"
          >
            <div v-html="data.contents"></div>
            <h1 class="h1-title shadow-hard" v-html="data.title"></h1>
          </div>

        </div>
        <!-- grid-x : index 1 -->

      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row" v-if="data.layout =='split'">
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

        <!-- cell -->
        <div class="cell small-12 large-5">

        <!-- vue - loop -->
        <template v-for="(image, index) in data.listImages">

          <div class="item-media">
            <a href="#" class="link-image box-shadow-blur open-overlay-slide"  :data-index="index">
              <span class="overlay-shadow"></span>
              <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, image.file)" :alt="image.title" />
            </a>
          </div>


        </template>
        <!-- vue - loop -->

        </div>
        <!-- cell -->

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

    <!-- overlay slide -->
    <div class="row row-overlay-slide">

      <div class="nav-container position-absolute">
        <nav class="nav-menu">
          <ul class="ul-menu flex-end">
            <li>
              <a href="#" class="link-menu exit-overlay-slide" style="display: block">
                <i class="icon large icon-close-thin font-size-medium" data-tooltip tabindex="1" title="Close" data-position="top" data-alignment="center" style="color: white"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Slider main container -->
      <div class="swiper-container swiper-container-overlay">

          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">

            <!-- vue - loop -->
            <template v-for="image in data.listImages">

              <!-- Slides -->
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img v-bind:src="$loadAssetImage($remoteUrl, data.path, image.file)" :alt="image.title" />
                </div>
              </div>

            </template>
            <!-- vue - loop -->

          </div>
          <!-- Slides -->

          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <!-- If we need scrollbar -->
          <div class="swiper-scrollbar"></div>
      </div>
      <!-- Slider main container -->
    </div>
    <!-- overlay slide -->

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
        artBySlug (slug: "${ params.slug }") {
          title
          slug
          excerpt
          path
          contents
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
          headImages {
            file
            alt
            style
          }
          fullSingleHead {
            gridClass
            cellClass
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

    const { data: { data: { artBySlug: data } } } = await $axios.post('/graphql', {
      query: QUERY,
    })

    if (data === null) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    store.commit('setSponsor', true)

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
