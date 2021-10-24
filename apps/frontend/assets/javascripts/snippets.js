'use strict'

import $ from 'jquery'

// Import local modules.
import {
  getZFcurrentMediaQuery,
  isColliding,
  isInViewport,
} from './utils'

function visbleAndColliding (elemets, target) {
  elemets.each(function(index, element) {
    // Check if the element is in the viewport.
    var isvisible = isInViewport(this)
    if (isvisible) {
      // Check if the elements are overlapping.
      var isOverlapping = isColliding(this, target)
      // console.log('isOverlapping: ', isOverlapping)
      if (isOverlapping) {
        $('.nav-menu', target).addClass('hide')
      } else {
        $('.nav-menu', target).removeClass('hide')
      }
    } else {
      $('.nav-menu', target).removeClass('hide')
    }
  })
}

function toggleBurgerMenu () {
  // Toggle nav-main.
  var bunttonBurger = $('.link-burger')
  var targetNav = $('.nav-main')
  bunttonBurger.click(function() {
    var parent = $(this).parents('li')
    parent.toggleClass('active')
    $('li', targetNav).not(parent).toggleClass('show-for-large')
    return false
  })
}

export {
  visbleAndColliding,
  toggleBurgerMenu
}
