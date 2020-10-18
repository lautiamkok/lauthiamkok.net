<template>
  <main id="main" class="grid-margin-overflow-hide">

    <!-- row -->
    <div class="row" v-if="$route.name != 'origins-category-slug' && $route.name != 'origins-posts-slug' && $route.name != 'origins-digital-slug' && $route.name != 'origins-quotes-slug' && $route.name != 'origins-tags-tag'">
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-container text-center font-rounded background-xxlight">
            <div class="cell small-8">
              <h1 class="h1-title shadow-hard" v-html="data.subtitle"></h1>
              <div v-html="data.contents"></div>
            </div>
          </div>
          <!-- grid-x -->

        </div>

        <div class="cell medium-12 large-6 min-height-100vh">

          <!-- Slider main container -->
          <div class="swiper-container swiper-container-fraction dark-mode" v-bind:style="data.darkModeBgStyle">

              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">

                  <!-- Slides -->
                  <div class="swiper-slide">

                    <!-- grid-x -->
                    <div class="grid-x align-center-middle text-center height-100 text-container font-rounded">
                      <div class="cell small-8">
                        <p>
                          If we could see the origins<br>
                          We may understand;<br>
                          If we could return<br>
                          We may remember.
                        </p>
                        <p>18.07.2003, 10:36 pm, Friday.</p>
                      </div>
                    </div>
                    <!-- grid-x -->

                  </div>

                  <div class="swiper-slide">

                    <!-- grid-x -->
                    <div class="grid-x align-center-middle height-100 text-container font-rounded">
                      <div class="cell small-8">
                        <p>
                          One should not discount what one has worked for and achieved in
                          the past: even a futile result is a valuable milestone in the future.
                          Even fruitless hard work is the genuine perspiration that counts in
                          a venerable creation...
                        </p>
                      </div>
                    </div>
                    <!-- grid-x -->

                  </div>

                  <div class="swiper-slide">

                    <!-- grid-x -->
                    <div class="grid-x align-center-middle height-100 text-container font-rounded">
                      <div class="cell small-8">
                        <p>
                          One should learn to harvest from the past,
                          even if it is inadequate, dispensable and disreputable. One should
                          learn to enlarge to transcend the greatness of the smallness.
                          And one should learn to miniaturise the immensity into the
                          infinitessimal, so that one can dwell in its maximum of repose,
                          as philosophers, writers, poets, scientists and artists have taught
                          us...
                        </p>
                      </div>
                    </div>
                    <!-- grid-x -->

                  </div>

                  <div class="swiper-slide">

                    <!-- grid-x -->
                    <div class="grid-x align-center-middle height-100 text-container font-rounded">
                      <div class="cell small-8">
                        <p>
                          And last but not least, if that should be finished in the end,
                          one shall see the completed journey is grown with contentment,
                          distant origin from where it departed, will spark as if it is just
                          about to begin again.
                        </p>
                        <p>(2002)</p>
                      </div>
                    </div>
                    <!-- grid-x -->

                  </div>

                  <div class="swiper-slide">

                    <!-- grid-x -->
                    <div class="grid-x align-center-middle text-center height-100 text-container font-rounded">
                      <div class="cell small-8">
                        <h2 class="h2-title">Explore!</h2>
                        <nav class="nav-contact">
                          <ul class="ul-menu flex-column">
                            <li>
                              <router-link to="#explore" @click.native="scrollTo('#explore')" class="link-menu font-size-large">
                                <i class="icon icon-chevron-circle-down" data-tippy-placement="bottom" data-tippy-content="Explore"></i>
                              </router-link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <!-- grid-x -->

                  </div>

              </div>
              <!-- Slides -->

              <!-- If we need pagination -->
              <div class="swiper-pagination fraction-pagination"></div>

              <!-- If we need navigation buttons -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

              <!-- If we need scrollbar -->
              <!-- <div class="swiper-scrollbar"></div> -->
          </div>
          <!-- Slider main container -->


        </div>

      </div>
    </div>
    <!-- row -->

    <div id="explore"><!--Only id and div works on Firefox --></div>

    <div class="row padding-y-xxlarge padding-bottom-0" v-if="$route.name != 'origins-category-slug' && $route.name != 'origins-posts-slug' && $route.name != 'origins-digital-slug' && $route.name != 'origins-quotes-slug' && $route.name != 'origins-tags-tag'">

      <div class="grid-x grid-padding-x align-center-middle">
        <!-- cell -->
        <div class="cell small-12 large-6">

          <div class="text-center">
            <hr/>
          </div>

          <div>
            <nav class="nav-categories">
              <ul class="ul-menu uppercase">

                <li>
                  <nuxt-link :to="'/origins/all'" class="link-menu" :class="{'active':$route.name == 'origins'}">
                    <i class="icon icon-tag hide-for-small-only"></i> All
                  </nuxt-link>
                </li>

                <!-- vue - loop -->
                <template v-for="category in categories">
                <li>
                  <nuxt-link :to="'/origins/categories/' + category" class="link-menu">
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
    pageBySlug(slug: "origins") {
      title
      subtitle
      excerpt
      contents
      path
      darkModeBgStyle
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
    }

    originStackCategories
  }
`

export default {
  data () {
    return {
      data: [],
      // onParentPage: true,
    }
  },

  async asyncData ({ $axios, route }) {
    const { data: { data: {
      pageBySlug: data,
      originStackCategories: categories,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    // console.log('route.path parent ===', route.path)
    // console.log('data parent ===', data)

    return { data, categories }
  },
}
</script>
