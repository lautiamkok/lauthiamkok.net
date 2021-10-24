<template>
  <div class="row padding-y-xxlarge">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="cell small-12 large-8 large-offset-2">

          <nav class="nav-menu">
            <ul class="ul-menu flex-wrap">
              <li>
                <nuxt-link :to="'/' + $joinPath('poetic', 'prologue')" class="link-menu">
                  <i class="icon icon-leaf-hollow"></i>
                  <span>Prologue</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>

          <nav class="nav-menu">

            <ul class="ul-menu flex-wrap">

              <!-- vue - loop -->
              <template v-for="poetic in items">
                <li>
                  <nuxt-link :to="'/' + $joinPath(poetic.directory, poetic.slug)" class="link-menu">
                    <i class="icon icon-leaf-hollow"></i>
                    <span v-html="poetic.title"></span>
                  </nuxt-link>
                </li>
              </template>
              <!-- vue - loop -->

            </ul>

          </nav>

          <nav class="nav-menu">
            <ul class="ul-menu flex-wrap">
              <li>
                <nuxt-link :to="'/' + $joinPath('poetic', 'epilogue')" class="link-menu">
                  <i class="icon icon-leaf-hollow"></i>
                  <span>Epilogue</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>

        </div>
        <!-- cell -->

      </div>
    </div>
  </div>
</template>

<script>
// Prepare graphQL query.
const QUERY = `
  query {
    poeticStack (without: ["epilogue", "prologue"]) {
      title
      slug
      directory
    }
  }
`

export default {
  data () {
    return {
      items: []
    };
  },

  async fetch () {
    const { data: { data: {
      poeticStack: items
    } } } = await this.$axios.post('/graphql', {
      query: QUERY,
      staticPath: '/nav-poetic',
    })

    this.items = items
  },
}
</script>
