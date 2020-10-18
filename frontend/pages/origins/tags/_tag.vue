<template>
  <div>

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

    <!-- row: items  -->
    <div class="row row-cards padding-y-xxlarge padding-top-0" v-if="posts">

      <!-- grid-x -->
      <div class="grid-x align-center-middle">
        <div class="cell small-12 large-7">

          <!-- bind a key here to stop Vue from reusing components -->
          <div class="grid-x grid grid-margin-x medium-up-2 large-up-2" v-bind:key="tag">

            <!-- vue - loop -->
            <template v-for="post in posts">

              <!-- cell -->
              <div class="cell grid-item" v-bind:key="post.title">

                <!-- item -->
                <div class="card box-shadow-blur">

                  <div class="card-section">
                    <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" class="micro-link grey-dark" data-tippy-placement="top" :data-tippy-content="$toUtcDateTime(post.createdOn, ' dddd, DD MMMM YYYY, HH:mm A')">
                      <i class="icon icon-clock"></i>
                      <span>{{ $toUtcDateTime(post.createdOn, 'DD MMMM YYYY') }} at {{ $toUtcDateTime(post.createdOn, 'HH:mm A') }}</span>
                    </nuxt-link>

                  </div>

                  <div class="card-image" v-if="post.coverImage">
                    <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" class="link-image square-container">
                      <span class="overlay-shadow"></span>

                      <picture class="square-content">
                        <ImageLazyLoad v-bind:src="$loadAssetImage($remoteUrl, post.path, post.coverImage.file)" :alt="post.title" v-if="post.coverImage" v-bind:key="post.title"/>
                      </picture>
                    </nuxt-link>
                  </div>

                  <div class="card-section border-y"
                    v-bind:class="post.coverTitle ? post.coverTitle.sectionClass : null"
                    v-bind:style="post.coverTitle ? computeStyles(
                      post.coverTitle.bgImage ? $loadAssetImage($remoteUrl, post.path, post.coverTitle.bgImage) : null,
                      post.coverTitle.bgStyle
                    ) : null"
                  >

                    <h2 class="h2-title header-medium"
                      v-bind:class="post.coverTitle ? post.coverTitle.headerClass : null"
                    >
                      <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)" v-html="post.excerpt"></nuxt-link>
                    </h2>

                  </div>

                  <div class="card-section">

                    <nav class="margin-0">
                      <ul class="ul-menu flex-space-between padding-0 uppercase grey-dark micro">
                        <li>
                          <nuxt-link :to="'/origins/categories/' + post.category" class="link-menu link-category">
                            <i class="icon icon-tag" ></i>
                            <span v-html="post.category"></span>
                          </nuxt-link>
                        </li>

                        <li>
                          <nuxt-link :to="'/' + $joinPath('origins', post.category, post.slug)">
                            <i class="icon icon-chevron-thin-right" ></i>
                          </nuxt-link>
                        </li>

                      </ul>
                    </nav>

                  </div>

                </div>
                <!-- item -->

              </div>
              <!-- cell -->

            </template>
            <!-- vue - loop -->

          </div>

        </div>
      </div>
      <!-- grid-x -->

    </div>
    <!-- row  -->

    <!-- row: pager  -->
    <div class="row">
      <NavPager />
    </div>
    <!-- row -->

  </div>
</template>

<script>
// Mixins:
import computeStyles from '~/plugins/mixins/local/methods/computeStyles'

export default {
  data () {
    return {
      posts: []
    }
  },

  async asyncData ({ params, error, $axios, route, store }) {
    const tag = params.tag

    // Prepare graphQL query.
    const QUERY = `
      query {
        originStack(tag: "${ tag }") {
          title
          slug
          excerpt
          createdOn
          category
          path
          coverImage {
            file
            title
          }
          coverTitle {
            sectionClass
            headerClass
            bgImage
            bgStyle
          }
        }
      }
    `

    const { data: { data: {
      originStack: posts,
    } } } = await $axios.post('/graphql', {
      query: QUERY,
    })

    return { posts, tag }
  },

  head () {
    return {
      title: '#' + this.tag || 'all',
      meta: [
        // hid is used as unique identifier.
        // { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  mixins: [
    computeStyles,
  ],

  scrollToTop: true,
}
</script>
