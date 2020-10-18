<template>
  <div>

    <div class="row background-xlight full-head">

      <div class="grid-container full">
        <div class="grid-x grid-padding-x text-center">
          <div class="cell small-12">
            <div class="flex-center direction-column min-height-100vh text-center text-container font-for-project">
              <i class="icon font-xlarge icon-skull"></i>
              <h1 class="h1-title text-center" v-if="error.statusCode === 404">{{error.statusCode}} Error</h1>
              <h1 class="h1-title text-center" v-else>An error occurred</h1>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- row -->
    <div class="row padding-y-xxlarge">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">

          <div class="cell small-12 large-8 large-offset-2 text-center">
            <p>Sorry, {{ error.message }}</p>
            <p>Please return to the <nuxt-link to="/">Home page</nuxt-link></p>
          </div>

          <!-- cell -->
          <div class="cell small-12 large-8 large-offset-2">
            <nav class="nav-menu">
              <ul class="ul-menu">
                <li>
                  <a href="#" class="link-chevron-circle-up link-menu">
                    <i class="icon-chevron-circle-up"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- cell -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['error'],
  mounted () {
  }
}
</script>
