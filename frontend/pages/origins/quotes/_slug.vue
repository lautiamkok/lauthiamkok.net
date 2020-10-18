<template>
  <main id="main">

    <!-- row -->
    <div class="row padding-y-large" v-if="data.layout =='flat'">
      <div class="grid-x align-middle">
        <div class="cell small-12">

          <!-- grid-x -->
          <div class="grid-x align-center-middle text-container text-center font-classic">
            <div class="cell small-8 large-5">
              <h1 class="h1-title hide" v-html="data.title"></h1>
              <div
                v-html="$toHtml(data.excerpt)"
                v-bind:class="data.fontSizes ? data.fontSizes.headExcerpt : null"
              ></div>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <!-- cell -->
        <div class="cell small-12" v-if="data.headImage && data.headImage.file">

          <!-- grid-x: align-center-middle, picture, figcaption -->
          <div class="grid-x align-center-middle">

            <div class="cell small-12 large-4" v-bind:class="data.headImage.cellClass">

              <!-- grid-x: picture, figcaption -->
              <div class="grid-x text-left">
                <div class="cell small-12">
                  <picture>
                    <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, data.headImage.file)" :alt="data.headImage.alt" />
                  </picture>
                </div>
                <div class="cell small-12">

                  <!-- grid-x: figcaption -->
                  <div class="grid-x grid-padding-x"
                    v-bind:class="$collapsePaddingX(data.headImage.cellClass)"
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

          </div>
          <!-- grid-x: align-center-middle, picture, figcaption -->

        </div>
      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row" v-if="data.layout =='single'">
      <div class="grid-x">

        <div class="cell small-12 large-12">

          <!-- grid-x -->
          <div class="grid-x padding-y-large align-center-middle min-height-100vh text-container text-center font-classic box-shadow-onhover"
            v-bind:class="data.fullSingleHead ? data.fullSingleHead.gridClass : null"
            v-bind:style="data.fullSingleHead ? computeStyles(
              data.fullSingleHead.bgImage ? $loadAssetImage($remoteUrl, data.path, data.fullSingleHead.bgImage) : null,
              data.fullSingleHead.bgStyle
            ) : null"
            >
            <div class="cell small-8 large-4"
              v-bind:class="data.fullSingleHead ? data.fullSingleHead.cellClass : null"
            >
              <h1 class="h1-title hide" v-html="data.title"></h1>
              <div
                v-html="$toHtml(data.fullSingleHead.content)"
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
    <div class="row" v-if="data.layout =='split'">
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-container font-classic link-underline background-xxlight" v-bind:class="data.fullSplitHeadLeft.gridClass">
            <div class="cell small-8" v-bind:class="data.fullSplitHeadLeft.cellClass">
              <h1 class="h1-title hide" v-html="data.title"></h1>
              <div
                v-html="$toHtml(data.fullSplitHeadLeft.content)"
                v-bind:class="data.fontSizes ? data.fontSizes.headExcerpt : null"
              ></div>
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

        <div class="cell small-12" v-if="data.fullSplitHeadRight && data.fullSplitHeadRight.imgCaption">

          <!-- grid-x: figcaption -->
          <div class="grid-x grid-padding-x">
            <div class="cell small-12">
              <figcaption class="text-right" v-html="data.fullSplitHeadRight.imgCaption"></figcaption>
            </div>
          </div>
          <!-- grid-x: figcaption -->

        </div>

      </div>
    </div>
    <!-- row -->

    <!-- row: ad image -->
    <div class="row row-media padding-y-xxlarge padding-bottom-0" v-if="data.adImage">

      <!-- grid-x: align-center-middle, picture, figcaption -->
      <div class="grid-x align-center-middle">

        <div class="cell small-6 large-2"
          v-bind:class="data.adImage ? data.adImage.cellClass : null"
        >

          <!-- grid-x: picture, figcaption -->
          <div class="grid-x text-left">
            <div class="cell small-12">
              <a :href="data.adImage.link" targe="_blank" :title="data.adImage.title" class="link-image box-shadow-blur">
                <span class="overlay-shadow"></span>
                <picture>
                  <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, data.adImage.file)" :alt="data.adImage.alt"/>
                </picture>
              </a>
            </div>
            <div class="cell small-12">

              <!-- grid-x: figcaption -->
              <div class="grid-x grid-padding-x"
                v-bind:class="data.adImage.figcaptionGridClass"
              >
                <div class="cell small-12">
                  <figcaption v-html="data.adImage.caption"></figcaption>
                </div>
              </div>
              <!-- grid-x: figcaption -->

            </div>
          </div>
          <!-- grid-x: picture, figcaption -->

        </div>

      </div>
      <!-- grid-x: align-center-middle, picture, figcaption -->

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row padding-y-xxlarge padding-bottom-0">

      <template v-for="item in data.listContents">

        <!-- grid-x align-middle -->
        <div class="grid-x padding-y-medium padding-top-0 grid-padding-x align-center-middle text-container font-classic link-underline" v-if="item.contents">

          <!-- cell -->
          <div class="cell small-12 large-5"
            v-bind:class="data.contentClass"
            v-html="$toHtml(item.contents)"
          >
          </div>
          <!-- cell -->

        </div>
        <!-- grid-x align-middle -->

        <!-- grid-x: align-center-middle, picture, figcaption -->
        <div class="grid-x align-center-middle padding-y-medium padding-top-0" v-if="item.image">

          <div class="cell small-12 large-4" v-bind:class="item.image.cellClass">

            <!-- grid-x: picture, figcaption -->
            <div class="grid-x text-left">
              <div class="cell small-12">
                <picture>
                  <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, item.image.file)" :alt="item.image.alt" />
                </picture>
              </div>
              <div class="cell small-12">

                <!-- grid-x: figcaption -->
                <div class="grid-x grid-padding-x"
                  v-bind:class="$collapsePaddingX(item.image.cellClass)"
                >
                  <div class="cell small-12">
                    <figcaption v-html="item.image.caption"></figcaption>
                  </div>
                </div>
                <!-- grid-x: figcaption -->

              </div>
            </div>
            <!-- grid-x: picture, figcaption -->

          </div>

        </div>
        <!-- grid-x: align-center-middle, picture, figcaption -->

      </template>


      <!-- container: contents -->
      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic" v-if="!data.listContents">

        <!-- cell -->
        <div class="cell small-12 large-5" v-bind:class="data.contentClass">

          <div v-html="data.contents" v-if="!data.hide || !data.hide.includes('contents')"></div>

        </div>
        <!-- cell -->

      </div>
      <!-- container -->

      <!-- container: tags -->
      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic">

        <!-- cell -->
        <div class="cell small-12 large-5" v-bind:class="data.contentClass">

          <nav class="nav-menu nav-tag">
            <ul class="ul-menu flex-wrap flex-start">
              <!-- vue - loop -->
              <template v-for="tag in data.tags">
                <li><nuxt-link :to="'/origins/tags/' + tag" class="link-menu" v-html="'#' + tag"></nuxt-link></li>
              </template>
              <!-- vue - loop -->
            </ul>
          </nav>

        </div>
        <!-- cell -->

      </div>
      <!-- container -->

    </div>
    <!-- row -->

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
            <nav class="nav-menu">
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
  data () {
    return {
      data: []
    }
  },

  async asyncData ({ params, error, $axios, route, store, $paragrafy }) {
    // Prepare graphQL query.
    const QUERY = `
      query {
        originBySlug(slug: "${ params.slug }") {
          title
          slug
          excerpt
          contents
          directory
          category
          path
          layout
          createdOn
          updatedOn
          darkModeBgStyle
          tags
          hide
          sponsor
          advert
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
          listContents {
            contents
            image {
              file
              title
              alt
              caption
              cellClass
            }
          }
          fontSizes {
            headExcerpt
            headBlockquote
          }
          headImage {
            file
            alt
            caption
            cellClass
          }
          adImage {
            file
            title
            alt
            caption
            link
            cellClass
            figcaptionGridClass
            figcaptionCellClass
          }
          fullSingleHead {
            gridClass
            cellClass
            bgStyle
            bgImage
            content
            imgCaption
          }
          fullSplitHeadLeft {
            gridClass
            cellClass
            content
          }
          fullSplitHeadRight {
            gridClass
            cellClass
            bgImage
            bgStyle
            imgCaption
          }
          relatedPages {
            title
            link
          }
        }
      }
    `

    const { data: { data: { originBySlug: data } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    if (data === null) {
      return error({ statusCode: 404, message: 'page not found' })
    }

    store.commit('setAdvert', true)
    store.commit('setSponsor', true)

    return { data }
  },

  mixins: [
    computeStyles,
  ],

  scrollToTop: true,
}
</script>
