<template>
  <main id="main">

    <!-- row -->
    <div class="row padding-y-large">
      <!-- grid-x -->
      <div class="grid-x align-center-middle text-container text-center font-classic">
        <div class="cell small-8 large-5">
          <h1 class="h1-title">#<span v-html="tag"></span></h1>
        </div>
      </div>
      <!-- grid-x -->
    </div>
    <!-- row -->

    <!-- items -->
    <div class="row row-projects padding-y-xxlarge padding-top-0">

      <div class="grid-container">
        <div class="grid-x grid-padding-x grid">

          <!-- vue - loop -->
          <template v-for="project in projects">

            <div class="cell small-12 medium-6 large-4 grid-item">

              <!-- item -->
              <div class="card box-shadow-blur">

                <div class="card-section">
                  <h2 class="h2-title header-medium inline-gold">
                    <nuxt-link :to="'/' + $joinPath(project.directory, project.slug)" class="link-title">
                      <span v-html="project.title"></span>
                    </nuxt-link>
                  </h2>
                  <span class="micro-item inline-gold">
                    <span><i class="icon icon-clock"></i> {{ project.year }}</span>
                  </span>
                </div>

                <div class="card-image border-y">
                  <nuxt-link :to="'/' + $joinPath(project.directory, project.slug)" class="link-image square-container">
                    <span class="overlay-shadow"></span>
                    <picture class="square-content">
                      <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, project.path, project.coverImage.file)" :alt="project.title" />
                    </picture>
                  </nuxt-link>
                </div>

                <div class="card-section" v-if="project.tags">
                  <nav>
                    <ul class="ul-menu flex-start grey-dark">
                      <!-- vue - loop -->
                      <template v-for="tag in project.tags">
                        <li>
                          <nuxt-link :to="'/' + project.directory + '/tags/' + tag" class="link-menu">
                            #{{ tag }}
                          </nuxt-link>
                        </li>
                      </template>
                      <!-- vue - loop -->
                    </ul>
                  </nav>
                </div>

              </div>
              <!-- item -->

            </div>
          </template>
          <!-- vue - loop -->

        </div>
      </div>
    </div>

    <!-- row: pager  -->
    <div class="row">
      <NavPager />
    </div>
    <!-- row -->

  </main>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },

  async asyncData ({ params, error, $axios, route, store }) {
    const tag = params.tag

    // Prepare graphQL query.
    const QUERY = `
      query {
        artStack(tag: "${ tag }") {
          title
          directory
          slug
          path
          year
          tags
          coverImage {
            file
            title
            alt
          }
        }
      }
    `

    const { data: { data: {
       artStack: projects
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })

    return { projects, tag }
  },

  head () {
    return {
      title: '#' + this.tag || 'all'
    }
  },
}
</script>
