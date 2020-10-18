<template>
  <main id="main">

    <!-- row -->
    <div class="row padding-y-large padding-bottom-0" v-if="data.layout =='card'">
      <div class="grid-x align-middle">
        <div class="cell small-12">

          <!-- grid-x -->
          <div class="grid-x align-center-middle">
            <div class="cell small-11 medium-10 large-5">

              <!-- item -->
              <div class="card box-shadow-blur">

                <div class="card-section">

                  <div class="micro-link grey-dark" data-tippy-placement="top" :data-tippy-content="$toUtcDateTime(data.createdOn, ' dddd, DD MMMM YYYY, HH:mm A')">
                    <i class="icon icon-clock"></i>
                    <span>{{ $toUtcDateTime(data.createdOn, 'DD MMMM YYYY') }} at {{ $toUtcDateTime(data.createdOn, 'HH:mm A') }}</span>
                  </div>

                </div>

                <div class="card-image" v-if="data.coverImage">

                  <nuxt-link :to="'/' + $joinPath('origins', data.category, data.slug)" class="link-image square-container">
                    <span class="overlay-shadow"></span>

                    <picture class="square-content">
                      <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, data.coverImage.file)" :alt="data.title" v-if="data.coverImage" v-bind:key="data.slug"/>
                    </picture>
                  </nuxt-link>

                </div>

                <div class="card-section border-y"
                  v-bind:class="data.coverTitle ? data.coverTitle.sectionClass : null"
                  v-bind:style="data.coverTitle ? computeStyles(
                    data.coverTitle.bgImage ? $loadAssetImage($remoteUrl, data.path, data.coverTitle.bgImage) : null,
                    data.coverTitle.bgStyle
                  ) : null"
                >

                  <div
                    class="font-size-large"
                    v-html="$toHtml(data.excerpt)"
                    v-bind:class="data.coverTitle ? data.coverTitle.headerClass : null"
                  ></div>

                </div>

                <div class="card-section">

                  <nav class="margin-0">
                    <ul class="ul-menu flex-space-between padding-0 uppercase grey-dark micro">
                      <li>
                        <nuxt-link :to="'/origins/categories/' + data.category" class="link-menu link-category">
                          <i class="icon icon-tag"></i>
                          <span v-html="data.category"></span>
                        </nuxt-link>
                      </li>

                    </ul>
                  </nav>

                </div>

              </div>
              <!-- item -->

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

        <div class="cell small-12" v-if="data.coverTitle && data.coverTitle.imgCaption">

          <!-- grid-x: figcaption -->
          <div class="grid-x align-center-middle">
            <div class="cell small-11 medium-10 large-5">
              <figcaption class="text-right" v-html="data.coverTitle.imgCaption"></figcaption>
            </div>
          </div>
          <!-- grid-x: figcaption -->

        </div>

      </div>
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row padding-y-large padding-bottom-0" v-if="data.layout =='flat'">
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
              <span>
                <i class="icon icon-clock"></i>
                <span>{{ $toUtcDateTime(data.createdOn) }}</span>
              </span>
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
                v-html="$toHtml(data.excerpt)"
                v-bind:class="data.fontSizes ? data.fontSizes.headExcerpt : null"
              ></div>
              <span>
                <i class="icon icon-clock"></i>
                <span>{{ $toUtcDateTime(data.createdOn) }}</span>
              </span>
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

      <!-- grid-x -->
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-container background-xxlight" v-bind:class="data.fullSplitHeadLeft.gridClass">
            <div class="cell small-8" v-bind:class="data.fullSplitHeadLeft.cellClass">
              <h1 class="h1-title hide" v-html="data.title"></h1>
              <div class="font-size-large" v-html="data.contents"></div>
              <span>
                <i class="icon icon-clock"></i>
                <span>{{ $toUtcDateTime(data.createdOn) }}</span>
              </span>
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
    <div class="row padding-y-large padding-bottom-0">

      <template v-for="(item, index) in data.listContents">

        <!-- grid-x align-middle -->
        <div class="grid-x padding-y-medium padding-top-0 grid-padding-x align-center-middle text-container font-classic" v-if="item.contents">

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
                  <a href="#" class="link-image box-shadow-blur open-overlay-slide"  :data-index="index">
                    <span class="overlay-shadow"></span>
                    <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, data.path, item.image.file)" :alt="item.image.alt" />
                  </a>
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
            <template v-for="item in data.listContents">

              <!-- Slides -->
              <div class="swiper-slide">
                <div class="swiper-zoom-container">
                  <img v-bind:src="$loadAssetImage($remoteUrl, data.path, item.image.file)" :alt="item.image.title" />
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
          coverTitle {
            sectionClass
            headerClass
            bgImage
            bgStyle
            imgCaption
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
        }
      }
    `

    const { data: { data: { originBySlug: data } } } = await $axios.post('/graphql', {
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

  scrollToTop: true,
}
</script>
