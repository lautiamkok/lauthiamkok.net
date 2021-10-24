'use strict'

// To fix the issue with vue - use jQuery instead of vanilla JS.
// https://github.com/desandro/masonry/issues/839
import $ from 'jquery'
import Masonry from 'masonry-layout'
import jQueryBridget from 'jquery-bridget'

jQueryBridget('masonry', Masonry, $)

// init Masonry
var $grid = $('.grid')
$grid.masonry({
  // options...
  itemSelector: '.grid-item',
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

// This does not work.
// var elem = document.querySelector('.grid')
// if (elem !== null) {
//   var msnry = new Masonry(elem, {
//     // options
//     itemSelector: '.grid-item'
//   })
// }

// window.addEventListener('scroll', function() {
//   msnry.reloadItems()
// })
