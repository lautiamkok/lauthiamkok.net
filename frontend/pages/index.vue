<template>
  <main id="main" class="grid-margin-overflow-hide">

    <div class="row">
      <div class="grid-x">

        <!--cell -->
        <div class="cell small-12 large-6">

          <!-- code nav -->
          <div class="min-height-100vh flex-center direction-column background-xxlight">

            <nav class="nav-main margin-0">
              <nuxt-link to="/about" class="link-menu link-logo">
                <i class="icon icon-logo" data-tippy-placement="top" data-tippy-content="About Me"></i>
              </nuxt-link>
            </nav>

            <nav class="nav-main">
              <ul class="ul-menu">
                <li>
                  <nuxt-link to="/digital" class="link-menu link-circle">
                    <i class="icon circle icon-code" data-tippy-placement="bottom" data-tippy-content="Digital"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/art" class="link-menu link-circle">
                    <i class="icon circle icon-tree-hollow-forest" data-tippy-placement="bottom" data-tippy-content="Art"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/poetic" class="link-menu link-circle">
                    <i class="icon circle icon-leaf-hollow" data-tippy-placement="bottom" data-tippy-content="Poetic"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/origins" class="link-menu link-circle">
                    <i class="icon circle icon-lightbulb-hollow" data-tippy-placement="bottom" data-tippy-content="Origins"></i>
                  </nuxt-link>
                </li>
              </ul>
            </nav>

          </div>
          <!-- core nav -->

        </div>
        <!-- cell -->

        <div class="cell small-12 large-6">

          <!-- slider layer -->
          <div class="min-height-100vh height-100 width-100">

            <!-- Slider main container -->
            <div id="slide" class="swiper-container swiper-container-slide dark-mode">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">

                  <!-- vue - loop -->
                  <template v-for="slide in data.slideItems">

                    <!-- Slides -->
                    <div class="swiper-slide" v-bind:style="{'background-image': 'url(' + $loadAssetImage($remoteUrl, data.path, slide.bgImage) + ')' }">

                      <!-- grid-x -->
                      <div class="grid-x align-center-middle text-center min-height-100vh">
                        <div class="cell small-6">
                          <h2 class="h2-link">
                            <nuxt-link :to="'/' + slide.link" class="font-size-xlarge" v-html="slide.title"></nuxt-link>
                          </h2>
                          <div>
                            <p v-html="slide.content"></p>
                          </div>
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
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->

                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
            </div>
            <!-- Slider main container -->

          </div>
          <!-- slider layer -->

        </div>

      </div>
    </div>

    <div class="row padding-y-xxlarge padding-bottom-0" v-if="$route.name != 'origins-category-slug' && $route.name != 'origins-posts-slug' && $route.name != 'origins-digital-slug' && $route.name != 'origins-tags-tag'">

      <div class="grid-x grid-padding-x align-center-middle">
        <!-- cell -->
        <div class="cell small-12 large-6">

          <div class="text-center">
            <hr/>
          </div>

          <div>
            <nav class="nav-categories">
              <ul class="ul-menu uppercase flex-wrap">

                <li>
                  <nuxt-link :to="'/categories/all'" class="link-menu" :class="{'active':$route.name == 'index'}">
                    <i class="icon icon-tag hide-for-small-only"></i> All
                  </nuxt-link>
                </li>

                <!-- vue - loop -->
                <template v-for="category in categories">
                <li>
                  <nuxt-link :to="'/categories/' + category" class="link-menu">
                    <i class="icon icon-tag hide-for-small-only"></i> {{ category }}
                  </nuxt-link>
                </li>
                </template>
                <!-- vue - loop -->

              </ul>
            </nav>
          </div>

          <div class="text-center">
            <hr/>
          </div>

        </div>
      </div>

    </div>

    <nuxt-child/>

  </main>
</template>

<script>
// Prepare graphQL query.
const QUERY = `
  query {
    pageBySlug (slug: "home") {
      title
      slug
      path
      slideItems {
        bgImage
        bgStyle
        title
        content
        link
      }
    }

    feedStackCategories
  }
`

export default {
  async asyncData ({ $axios }) {
    var { data: { data: {
      pageBySlug: data,
      feedStackCategories: categories,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    // console.log('data =', data)

    return { data, categories }
  },

  head () {
    // return {
    //   // Disable template.
    //   titleTemplate: null
    // }
  },

  mounted () {
    // Get the current Vue component.
    // https://stackoverflow.com/questions/36557841/how-to-get-dom-element-of-current-vue-component
    // console.log(this.$el)
  }
}
</script>

<style lang="less">
//
</style>
