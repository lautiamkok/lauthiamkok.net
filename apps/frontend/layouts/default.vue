<template>
  <div>

    <header>

      <!-- row -->
      <div class="row row-nav-sub">
        <NavContact />
      </div>
      <!-- row -->

      <!-- row -->
      <div class="row row-nav-main">
        <NavMain />
      </div>
      <!-- row -->

      <!-- row -->
      <div class="row row-get-in-touch hide">
        <Contact />
      </div>
      <!-- row -->

    </header>

    <nuxt />

    <div>
      <Footer />
    </div>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- Do it in nuxt.config.js instead -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-8602078-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-8602078-2');
    </script> -->

  </div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        // global / standard
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.meta.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$store.state.meta.keywords
        },

        // open graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Lau Tiam Kok'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.$baseUrl
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$baseUrl + '/' + this.$store.state.meta.image
        },

        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1200'
        },

        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '720'
        },

        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$store.state.meta.description
        },

        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },

        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '276664993398144'
        },

        // open graph for twitter
        // https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@lautiamkok'
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@lautiamkok'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Lau Tiam Kok'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: this.$baseUrl
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.$baseUrl + '/' + this.$store.state.meta.image
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$store.state.meta.description
        }
      ]
    }
  },

  mounted() {
    // Detect ZF sceen size on resize.
    this.$getCurrentScreenSize()

    // Import local plugins.
    const { toggleBurgerMenu } = require('~/assets/javascripts/snippets')
    toggleBurgerMenu()
  }
}
</script>
