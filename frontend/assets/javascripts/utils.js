'use strict'

// Check if the element is in the viewport.
// http://www.hnldesign.nl/work/code/check-if-element-is-visible/
function isInViewport(node) {
  // Am I visible? Height and Width are not explicitly necessary in visibility
  // detection, the bottom, right, top and left are the essential checks. If an
  // image is 0x0, it is technically not visible, so it should not be marked as
  // such. That is why either width or height have to be > 0.
  var rect = node.getBoundingClientRect()
  return (
    (rect.height > 0 || rect.width > 0) &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// https://stackoverflow.com/questions/42190534/check-if-two-div-html-elements-intersect
// https://gist.github.com/jtsternberg/c272d7de5b967cec2d3d
// https://time2hack.com/checking-overlap-between-elements/
function isColliding (e1, e2) {
  if( e1.length && e1.length > 1 ){
    e1 = e1[0]
  }
  if( e2.length && e2.length > 1 ){
    e2 = e2[0]
  }
  var rect1 = e1 instanceof Element ? e1.getBoundingClientRect() : false
  var rect2 = e2 instanceof Element ? e2.getBoundingClientRect() : false

  // window.console ? console.log(rect1, rect2 ) : null
  var overlap = null
  if( rect1 && rect2 ){
    overlap = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      )
    return overlap
  } else {
    window.console ? console.warn( 'Please pass native Element object' ) : null
    return overlap
  }
}

export {
  isInViewport,
  isColliding,
}
