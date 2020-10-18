<template>
  <main id="main">

    <!-- row -->
    <div class="row">
      <div class="grid-container full">
        <div class="grid-x">

          <div class="cell small-12 large-6">

            <!-- grid-x -->
            <div class="grid-x align-center-middle min-height-100vh text-center text-container font-rounded background-xxlight dark-mode" v-bind:style="data.darkModeBgStyle">
              <div class="cell small-8">
                <h1 class="h1-title shadow-hard" v-html="data.title"></h1>
                <div v-html="data.contents"></div>
              </div>
            </div>
            <!-- grid-x -->

          </div>

          <div class="cell small-12 large-6">

            <!-- grid-x -->
            <div class="grid-x align-center-middle min-height-100vh text-center text-container font-rounded background-xlight">
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

          <div class="cell medium-12 large-6 min-height-100vh hide">

            <!-- Slider main container -->
            <div class="swiper-container swiper-container-fraction background-xlight">

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">

                    <!-- Slides -->
                    <div class="swiper-slide">

                      <!-- grid-x -->
                      <div class="grid-x align-center-middle height-100 text-container font-rounded text-center">
                        <div class="cell small-8">
                          <p>"The poetic image is a sudden salience on the surface of the psyche... a fact of great ontological significance."</p>
                          <p>- Gaston Bachelard</p>
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
                                <a href="#explore" class="link-menu font-size-large">
                                  <i class="icon icon-chevron-circle-down" data-tippy-placement="bottom" data-tippy-content="Explore"></i>
                                </a>
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
    </div>
    <!-- row -->

    <div id="explore"><!--Only id and div works on Firefox --></div>

    <NavPoetic />

    <!-- row: pager  -->
    <div class="row">
      <NavPager />
    </div>
    <!-- row -->

  </main>
</template>

<script>
// Prepare graphQL query.
const QUERY = `
  query {
    pageBySlug (slug: "poetic"){
      title
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
  }
`

export default {
  async asyncData ({ $axios, route }) {
    const { data: { data: {
      pageBySlug: data,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })

    return { data }
  },
}
</script>
