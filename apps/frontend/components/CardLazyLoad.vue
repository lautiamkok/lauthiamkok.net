<template>
  <div class="card-section border-y"
    :data-background-image="src"
    v-bind:class="post.coverTitle ? post.coverTitle.sectionClass : null"
    v-bind:style="post.coverTitle ? post.coverTitle.bgStyle : null"
  >
    <h2 class="h2-title header-medium"
      v-bind:class="post.coverTitle ? post.coverTitle.headerClass : null"
    >
      <nuxt-link :to="post.link" v-html="post.excerpt"></nuxt-link>
    </h2>
  </div>
</template>

<script>
import lozad from 'lozad'

export default {
  props: ['src', 'post'],
  mounted () {
    // https://github.com/ApoorvSaxena/lozad.js/
    // https://markus.oberlehner.net/blog/lazy-loading-responsive-images-with-vue/
    // We initialize Lozad.js on the root
    // element of our component.
    const observer = lozad(this.$el)
    observer.observe()

    // Or, use class="lozad" on the element
    // and then just niitialize Lozad
    // const observer = lozad()
    // observer.observe()
  }
}
</script>
