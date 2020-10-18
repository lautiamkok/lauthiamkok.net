'use strict'

import Vue from 'vue'
import $ from 'jquery'
import Swiper from 'swiper'
import Masonry from 'masonry-layout'
import jQueryBridget from 'jquery-bridget'

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

jQueryBridget('masonry', Masonry, $)

Vue.mixin({
  async mounted () {
    // Check if it is a page.
    const isPage = this.$options.parent !== undefined && this.$options.parent.name === 'page'
    if (isPage !== true) {
      return
    }
    // console.log('this.$options.parent.name =', this.$options.parent.name)

    // Only add anything below once.

    var swiperSlide = new Swiper ('.swiper-container.swiper-container-slide', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      keyboard: {
        enabled: true,
      },

      autoplay: {
        delay: 5000,
        disableOnInteraction: true, // does not work!
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })

    // Swiper for fraction.
    var swiperFraction = new Swiper ('.swiper-container.swiper-container-fraction', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      keyboard: {
        enabled: true,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })

    // Swiper for fade.
    var swiperFade = new Swiper ('.swiper-container.swiper-container-fade', {
      speed: 2000,
      loop: true,
      effect: 'fade',
      slidesPerView: 1,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    })

    // Swiper for overlay.
    var buttonOpenOverlay = $('.open-overlay-slide')
    var buttonExitOverlay = $('.exit-overlay-slide i')
    var contextOverlay =  $('.row-overlay-slide')
    var swiperOverlay = null

    buttonOpenOverlay.on('click', function() {
      console.log('.overlay-content is opened')

      // Get the index.
      var index = $(this).data('index')
      console.log('index: ' + index)

      contextOverlay.addClass('is-open')
      $('html, body').css('overflow-x', 'hidden')
      $('html, body').css('overflow-y', 'hidden')

      // Create global swiper for image slide
      swiperOverlay = new Swiper('.swiper-container.swiper-container-overlay', {
        // init: false,
        initialSlide: index,
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        keyboard: {
          enabled: true,
        },

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

      swiperOverlay.on('slideChange', function () {
        console.log('plugins/client-only/mounted.client.js: view index: ' + this.realIndex)
      })
      return false
    })

    // Check if esc key is pressed.
    // https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
    $(document).keyup(function(e) {
       if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('.row-overlay-slide').removeClass('is-open')
        $('html, body').css('overflow-x', 'auto')
        $('html, body').css('overflow-y', 'auto')

        // Destroy  the swiper.
        if (swiperOverlay !== null) {
          console.log('destroy swiper')
          swiperOverlay.destroy(true, false)
        }
      }
    })

    // jQuery:
    // $('.swiper-container.swiper-container-slide').on('mouseenter', function(e){
    //   console.log('stop autoplay');
    //   swiperSlide.autoplay.stop();
    // })
    // $('.swiper-container.swiper-container-slide').on('mouseleave', function(e){
    //   console.log('start autoplay');
    //   swiperSlide.autoplay.start();
    // })

    // Vanilla JS:
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
    const mouseTarget = document.querySelector('.swiper-container.swiper-container-slide')
    if (mouseTarget !== null) {
      mouseTarget.addEventListener('mouseenter', e => {
        console.log('stop autoplay');
        swiperSlide.autoplay.stop();
      })
      mouseTarget.addEventListener('mouseleave', e => {
        console.log('start autoplay');
        swiperSlide.autoplay.start();
      })
    }

    // Always put foundation at the bottom!
    // Find the form element before applying ZF.
    // window.element = document.querySelector('.form-submit')
    // console.log('Finding form element:', window.element)
    // $(document).foundation()

    // Add tippy tooltips.
    // https://atomiks.github.io/tippyjs/
    tippy('[data-tippy-content]')

    buttonExitOverlay.on('click', function(event) {
      // Stop the click event propagating to the child elements.
      if (event.target !== this) {
        return
      }
      console.log('plugins/client-only/mounted.client.js: close overlay')

      $('.row-overlay-slide').removeClass('is-open')
      $('html, body').css('overflow-x', 'auto')
      $('html, body').css('overflow-y', 'auto')

      // Destroy  the swiper.
      if (swiperOverlay !== null) {
        swiperOverlay.destroy(true, false)
      }
      return false
    })

    // Get the current Vue component.
    // console.log(this.$el)
    const context = $(this.$el)

    // Toggle text-center.
    var bunttonAlignLeft = $('.link-align-left')
    var targetAlignLeft = $('.content-container', context)
    bunttonAlignLeft.click(function(){
      $(this).parents('li').toggleClass('active')
      targetAlignLeft.toggleClass('text-center')
      return false
    })

    // init Masonry
    var $grid = $('.grid')
    $grid.masonry({
      // options...
      itemSelector: '.grid-item',
    })

    // Toggle contact div.
    var bunttonContact = $('.toggle-get-in-touch')
    var targetContact = $('.row-get-in-touch')

    // Bind event only once.
    // https://stackoverflow.com/questions/8408826/bind-event-only-once
    bunttonContact.off('click').on('click', function(e) {
      targetContact.toggleClass('hide')
      return false
    })

    // Reload on scroll - a quick fix for image/ video lazy loading.
    // https://masonry.desandro.com/methods.html#reloaditems
    window.addEventListener('scroll', () => {

      // $grid.masonry('destroy')
      var $grid = $('.grid')
      $grid.masonry({
        // options...
        itemSelector: '.grid-item',
      })

      $grid.masonry('layout')
    })
  }
})
