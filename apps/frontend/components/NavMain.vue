<template>
  <nav class="nav-main">
    <ul class="ul-menu">
      <li class="show-for-large">
        <nuxt-link to="/digital" class="link-menu">
          <i class="icon circle icon-code" data-tippy-content="Digital"></i>
        </nuxt-link>
      </li>
      <li class="show-for-large">
        <nuxt-link to="/art" class="link-menu">
          <i class="icon circle icon-tree-hollow-forest" data-tippy-content="Art"></i>
        </nuxt-link>
      </li>
      <li class="show-for-large">
        <nuxt-link to="/poetic" class="link-menu">
          <i class="icon circle icon-leaf-hollow" data-tippy-content="Poetic"></i>
        </nuxt-link>
      </li>
      <li class="show-for-large">
        <nuxt-link to="/origins" class="link-menu">
          <i class="icon circle icon-lightbulb-hollow" data-tippy-content="Origins"></i>
        </nuxt-link>
      </li>

      <li class="hide-for-large">
        <a href="#" class="link-menu link-burger">
          <i class="icon circle icon-lines" data-tippy-content="Toggle Menu"></i>
        </a>
      </li>

    </ul>
  </nav>
</template>
