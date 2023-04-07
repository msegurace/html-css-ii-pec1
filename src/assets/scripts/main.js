/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

window.addEventListener('load', function () {

  let images_to_zoom = document.querySelectorAll('.image-hover-zoom img')

  for (let item of images_to_zoom) {
    console.log("image!");
      item.parentElement.style.height = item.height+'px'

      item.parentElement.style.width = item.width + 'px'

      item.parentElement.style.overflow = 'hidden'

      item.addEventListener('mousemove', (e) => zoom_element(e, item.parentElement.offsetLeft, item.parentElement.offsetTop, item.parentElement.offsetWidth, item.parentElement.offsetHeight ))

      item.addEventListener('mouseenter', function (e) {

          let item = e.currentTarget

          let scale = item.parentElement.getAttribute('scale')

          e.currentTarget.style.transform = scale ? 'scale('+scale+')' : 'scale(1.5)'

      })

      item.addEventListener('mouseleave', function (e) {

          e.currentTarget.style.transform = 'none'

      })

  }

})

function zoom_element(e, start_x, start_y, width, height) {

  let p_x = (e.clientX - start_x) * 100 / width

  let p_y = (e.clientY - start_y) * 100 / height

  e.currentTarget.style.transformOrigin = p_x +"% " + p_y+"%"

}


+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


const { readFileSync } = require('fs')

const posthtml = require('posthtml')
const include = require('posthtml-include')

const html = readFileSync('index.html')

posthtml([ include({ encoding: 'utf8' }) ])
    .process(html)
    .then((result) => console.log(result.html))