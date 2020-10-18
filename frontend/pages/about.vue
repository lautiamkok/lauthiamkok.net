<template>
  <main id="main">

    <!-- row -->
    <div class="row">

      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-center text-container font-rounded background-xlight">
            <div class="cell small-8">
              <h1 class="h1-title shadow-hard" v-html="data.subtitle"></h1>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <div class="cell small-12 large-6">

          <!-- slider layer -->
          <div class="min-height-100vh height-100 width-100">

            <!-- Slider main container -->
            <div class="swiper-container swiper-container-slide dark-mode">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">

                  <!-- vue - loop -->
                  <template v-for="image in data.headImages">

                    <!-- Slides -->
                    <div class="swiper-slide"
                      v-bind:style="image ? computeStyles(
                        image ? $loadAssetImage($remoteUrl, data.path, image.file) : null,
                        image.style
                      ) : null"
                    >

                      <!-- grid-x -->
                      <div class="grid-x align-center-middle text-center min-height-100vh" v-if="image.content">
                        <div class="cell small-6">
                          <p v-html="image.content"></p>
                        </div>
                      </div>
                      <!-- grid-x -->

                    </div>
                    <!-- Slides -->

                  </template>
                  <!-- vue - loop -->

                </div>
                <!-- Slides -->

                <!-- If we need pagination -->
                <div class="swiper-pagination" v-if="data.headImages.length > 1"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev" v-if="data.headImages.length > 1"></div>
                <div class="swiper-button-next" v-if="data.headImages.length > 1"></div>

            </div>
            <!-- Slider main container -->

          </div>
          <!-- slider layer -->

        </div>

      </div>

    </div>
    <!-- row -->

    <!-- row -->
    <div class="row margin-y-medium margin-bottom-0">
      <NavAligner />
    </div>
    <!-- row -->

    <!-- row -->
    <div class="row padding-y-xxlarge">

      <!-- container -->
      <div class="grid-x grid-padding-x align-center-middle text-container content-container text-center font-rounded">

        <!-- cell -->
        <div class="cell small-12 large-5">

          <div v-html="data.contents"></div>

          <i class="icon-tree-hollow-forest icon-article"></i>

        </div>
        <!-- cell -->

      </div>
      <!-- container -->

    </div>
    <!-- row -->

    <!-- row: related pages -->
    <div class="row">

      <!-- container -->

      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic">

        <!-- cell -->
        <div class="cell small-12 large-5">

          <div class="text-center">
            <hr/>
          </div>

          <div class="text-center">
            <p><i class="icon icon-info-circle-hollow"></i> This site is static-generated and built with the following frameworks, technologies and standards:</p>
            <nav class="nav-menu">
              <ul class="ul-menu flex-wrap gold">
                <li class="inline-gold">
                  <a href="https://nuxtjs.org/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Nuxt.js</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://vuejs.org/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Vue.js</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://koajs.com/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Koa.js</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://graphql.org/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> GraphQL</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://www.markdownguide.org/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Markdown</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://yaml.org/" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> YAML</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://get.foundation/sites" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Foundation</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="link-menu" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> ECMAScript 2015+ (ES6+)</span>
                  </a>
                </li>
                <li class="inline-gold">
                  <a href="https://standardjs.com/" class="link-menu inline-gold" target="_blank">
                    <span><i class="icon icon-weather-sunny"></i> Standard JS</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <!-- cell -->

      </div>

      <!-- container -->

    </div>
    <!-- row -->

    <!-- row: related pages -->
    <div class="row">

      <!-- container -->

      <div class="grid-x grid-padding-x align-center-middle text-container content-container font-classic">

        <!-- cell -->
        <div class="cell small-12 large-5">

          <div class="text-center">
            <hr/>
          </div>

          <div class="text-center">
            <p><i class="icon icon-info-circle-hollow"></i> The program of this site can be found from my GitHub <a href="https://github.com/lautiamkok/lauthiamkok.net" target="_blank">repository</a>. You also can find the static app of this site at <a href="https://lautiamkok.github.io/lauthiamkok.net/" target="_blank">lautiamkok.github.io/lauthiamkok.net/.</a> This means that you always can find the content of this site at GitHub as long as GitHub exists, even if lauthiamkok.net is discontinued someday.</p>
          </div>

        </div>
        <!-- cell -->

      </div>

      <!-- container -->

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
import Swiper from 'swiper'

// Mixins:
import computeStyles from '~/plugins/mixins/local/methods/computeStyles'

// Prepare graphQL query.
const QUERY = `
  query {
    pageBySlug (slug: "about"){
      title
      subtitle
      excerpt
      contents
      path
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
      headImages {
        file
        style
        title
        content
        link
      }
    }
  }
`

export default {
  async asyncData ({ $axios, route }) {
    var { data: { data: { pageBySlug: data } } } = await $axios.post('/graphql', {
      query: QUERY
    })

    return { data }
  },

  mixins: [
    computeStyles,
  ]
}
</script>
