<template>
  <main id="main">

    <!-- row -->
    <div class="row">
      <div class="grid-x">

        <div class="cell small-12 large-6">

          <!-- grid-x -->
          <div class="grid-x align-center-middle min-height-100vh text-center text-container font-rounded background-xxlight dark-mode" v-bind:style="data.darkModeBgStyle">
            <div class="cell small-8">
              <h1 class="h1-title shadow-hard" v-html="data.title"></h1>
              <div class="cell small-8" v-html="data.contents"></div>
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

      </div>
    </div>
    <!-- row -->

    <div id="explore"><!--Only id and div works on Firefox --></div>

    <!-- items -->
    <div class="row row-projects padding-y-xxlarge">

      <div class="grid-container">
        <div class="grid-x grid-padding-x grid">

          <!-- vue - loop -->
          <template v-for="project in projects">

            <div class="cell small-12 medium-6 large-4 grid-item">

              <div class="card box-shadow-blur">
                <div class="card-section">
                  <h2 class="h2-title header-medium inline-gold">
                    <nuxt-link :to="'/' + $joinPath(project.directory, project.slug)" class="link-title">
                      <span v-html="project.title"></span>
                    </nuxt-link>
                  </h2>
                  <a :href="project.url" class="link-url micro-item inline-gold" target="_blank">
                    <span><i class="icon icon-link"></i> {{ project.domain }}</span>
                  </a>
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
                    <ul class="ul-menu flex-wrap flex-start grey-dark">
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
            </div>
          </template>
          <!-- vue - loop -->

        </div>
      </div>
    </div>
    <!-- items -->

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
    pageBySlug (slug: "digital"){
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
    digitalStack {
      title
      directory
      slug
      path
      domain
      url
      tags
      coverImage {
        file
        title
        alt
      }
    }
  }
`

export default {
  async asyncData ({ $axios, route }) {
    const { data: { data: {
      pageBySlug: data,
      digitalStack: projects
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })
    // console.log(data)
    // console.log(projects)

    return { data, projects }
  },
}
</script>
