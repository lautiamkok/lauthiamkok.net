<template>
  <img :data-src="src" />
</template>

<script>
import lozad from 'lozad'

export default {
  props: ['src'],
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
