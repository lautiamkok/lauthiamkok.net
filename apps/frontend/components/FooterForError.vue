<template>

  <footer>

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
              <div class="addthis_vertical_follow_toolbox"></div>
            </div>

          </div>
          <!-- cell -->

        </div>
      </div>
    </div>
    <!-- row -->

  </footer>

</template>
