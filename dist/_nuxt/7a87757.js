/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{709:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,r){t.exports=function(){"use strict";var u="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");u&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,i=0;i<=r.length-1;i++)(a=r[i].getAttribute("data-src"))&&(r[i].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var o=t.getAttribute("data-background-image-set").split(n),c=o[0].substr(0,o[0].indexOf(" "))||o[0];c=-1===c.indexOf("url(")?"url("+c+")":c,1===o.length?t.style.backgroundImage=c:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+c+"; background-image: -webkit-image-set("+o+"); background-image: image-set("+o+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,a,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=Object.assign({},t,n),c=o.root,l=o.rootMargin,d=o.threshold,u=o.load,g=o.loaded,s=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),b(t.target)||(r(t.target),e(t.target),a(t.target)))}))}),{root:c,rootMargin:l,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,c),r=0;r<t.length;r++)b(t[r])||(s?s.observe(t[r]):(u(t[r]),e(t[r]),g(t[r])))},triggerLoad:function(t){b(t)||(u(t),e(t),g(t))},observer:s}}}()},712:function(t,e,r){"use strict";r.r(e);var n=r(710),o=r.n(n),c={props:["src"],mounted:function(){o()(this.$el).observe()}},l=r(7),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{"data-src":this.src}})}),[],!1,null,null,null);e.default=component.exports},733:function(t,e,r){"use strict";r.r(e);r(19);var n=r(5),o={data:function(){return{data:[]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.error,n=t.$axios,t.route,t.store,o=r.tag,c='\n      query {\n        artStack(tag: "'.concat(o,'") {\n          title\n          directory\n          slug\n          path\n          year\n          tags\n          coverImage {\n            file\n            title\n            alt\n          }\n        }\n      }\n    '),e.next=5,n.post("/graphql",{query:c});case 5:return l=e.sent,d=l.data.data.artStack,e.abrupt("return",{projects:d,tag:o});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"#"+this.tag||!1}}},c=r(7),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"main"}},[r("div",{staticClass:"row padding-y-large"},[r("div",{staticClass:"grid-x align-center-middle text-container text-center font-classic"},[r("div",{staticClass:"cell small-8 large-5"},[r("h1",{staticClass:"h1-title"},[t._v("#"),r("span",{domProps:{innerHTML:t._s(t.tag)}})])])])]),t._v(" "),r("div",{staticClass:"row row-projects padding-y-xxlarge padding-top-0"},[r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-x grid-padding-x grid"},[t._l(t.projects,(function(e){return[r("div",{staticClass:"cell small-12 medium-6 large-4 grid-item"},[r("div",{staticClass:"card box-shadow-blur"},[r("div",{staticClass:"card-section"},[r("h2",{staticClass:"h2-title header-medium inline-gold"},[r("nuxt-link",{staticClass:"link-title",attrs:{to:"/"+t.$joinPath(e.directory,e.slug)}},[r("span",{domProps:{innerHTML:t._s(e.title)}})])],1),t._v(" "),r("span",{staticClass:"micro-item inline-gold"},[r("span",[r("i",{staticClass:"icon icon-clock"}),t._v(" "+t._s(e.year))])])]),t._v(" "),r("div",{staticClass:"card-image border-y"},[r("nuxt-link",{staticClass:"link-image square-container",attrs:{to:"/"+t.$joinPath(e.directory,e.slug)}},[r("span",{staticClass:"overlay-shadow"}),t._v(" "),r("picture",{staticClass:"square-content"},[r("ImageLazyLoad",{attrs:{src:t.$loadAssetImage(t.$remoteUrl,e.path,e.coverImage.file),alt:e.title}})],1)])],1),t._v(" "),e.tags?r("div",{staticClass:"card-section"},[r("nav",[r("ul",{staticClass:"ul-menu flex-start grey-dark"},[t._l(e.tags,(function(n){return[r("li",[r("nuxt-link",{staticClass:"link-menu",attrs:{to:"/"+e.directory+"/tags/"+n}},[t._v("\n                          #"+t._s(n)+"\n                        ")])],1)]}))],2)])]):t._e()])])]}))],2)])]),t._v(" "),r("div",{staticClass:"row"},[r("NavPager")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageLazyLoad:r(712).default,NavPager:r(709).default})}}]);