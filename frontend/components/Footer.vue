<template>

  <footer>

    <div class="row text-center padding-y-xlarge padding-top-0">

      <ul
        class="menu-social menu-share no-bullet flex-container align-center"
        v-on:mouseover="updateData"
      >
        <li>
          <a
            :href="'https://facebook.com/sharer/sharer.php?' + 'u=' + encodedUrl"
            target="_blank"
          >
            <i class="icon-facebook"></i>
          </a>
        </li>

        <li>
          <a
            :href="'https://twitter.com/intent/tweet/?' + 'text=' + encodedUrl + ' via @lautiamkok'"
            target="_blank"
          >
            <i class="icon-twitter"></i>
          </a>
        </li>

        <li>
          <a
            :href="'https://www.linkedin.com/shareArticle?' + 'mini=true&url=' + encodedUrl + '&title=' + encodedTitle"
            target="_blank"
          >
            <i class="icon-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            :href="'mailto:?' + 'subject=' + title + '&body=' + url"
            target="_blank"
          >
            <i class="icon-mail"></i>
          </a>
        </li>

      </ul>

    </div>

    <!-- row -->
    <div class="row row-footer padding-y-medium">
      <div class="grid-container full">
        <div class="grid-x grid-padding-x">

          <!-- cell -->
          <div class="cell small-12 large-6 large-offset-3">
            <p class="copyright text-center">&copy; Lau Tiam Kok</p>
            <nav class="nav-contact">
              <ul class="ul-menu">
                <li>
                  <nuxt-link to="/about" class="link-menu">
                    <i class="icon icon-info" data-tippy-placement="top" data-tippy-content="About Me"></i>
                  </nuxt-link>
                </li>
                <li>
                  <a href="#" class="link-menu toggle-get-in-touch">
                    <i class="icon icon-mail" data-tippy-placement="top" data-tippy-content="Get In Tocuh"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-12 large-6 large-offset-3">

            <nav class="nav-menu">
              <ul class="ul-menu">
                <li>
                  <nuxt-link to="/" class="link-menu link-logo logo-medium">
                    <i class="icon icon-logo" data-tippy-placement="top" data-tippy-content="Back to Home"></i>
                  </nuxt-link>
                </li>
              </ul>
            </nav>

          </div>
          <!-- cell -->

          <!-- cell -->
          <div class="cell small-12 large-6 large-offset-3">

            <div class="text-center center">

              <ul class="menu-social no-bullet flex-container align-center">
                <li>
                  <a href="https://github.com/lautiamkok" target="_blank">
                  <i class="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/lautiamkok/" target="_blank">
                    <i class="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lautiamkok/" target="_blank">
                    <i class="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/lautiamkok" target="_blank">
                    <i class="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/lautiamkok" target="_blank">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
              </ul>

            </div>

          </div>
          <!-- cell -->

        </div>
      </div>
    </div>
    <!-- row -->

  </footer>

</template>

<script>
export default {
  data () {
    return {
      url: '',
      title: '',
      encodedUrl: '',
      encodedTitle: ''
    }
  },

  methods: {
    // https://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript
    getMeta (metaName) {
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('property') === metaName) {
          return metas[i].getAttribute('content');
        }
      }
      return '';
    },

    updateData () {
      this.url = this.getMeta('og:url')
      this.title = this.getMeta('og:title')

      // Must use encodeURI first then encodeURIComponent, otherwise it won't
      // work on Twitter with Chinese characters.
      this.encodedUrl = encodeURIComponent(encodeURI(this.getMeta('og:url')))
      this.encodedTitle = encodeURIComponent(this.getMeta('og:title'))
    },
  }
}
</script>

