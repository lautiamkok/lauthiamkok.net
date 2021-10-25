/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{709:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,r){t.exports=function(){"use strict";var u="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");u&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,i=0;i<=r.length-1;i++)(a=r[i].getAttribute("data-src"))&&(r[i].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var o=t.getAttribute("data-background-image-set").split(n),c=o[0].substr(0,o[0].indexOf(" "))||o[0];c=-1===c.indexOf("url(")?"url("+c+")":c,1===o.length?t.style.backgroundImage=c:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+c+"; background-image: -webkit-image-set("+o+"); background-image: image-set("+o+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,a,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=Object.assign({},t,n),c=o.root,l=o.rootMargin,d=o.threshold,u=o.load,g=o.loaded,s=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),b(t.target)||(r(t.target),e(t.target),a(t.target)))}))}),{root:c,rootMargin:l,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,c),r=0;r<t.length;r++)b(t[r])||(s?s.observe(t[r]):(u(t[r]),e(t[r]),g(t[r])))},triggerLoad:function(t){b(t)||(u(t),e(t),g(t))},observer:s}}}()},711:function(t,e,r){"use strict";var n=r(713),o=r.n(n);e.a={methods:{computeStyles:function(t,e){var r=[];if(t&&r.push({"background-image":"url("+t+")"}),e){var n="{"+e+"}";r.push(o.a.parse(n))}return r}}}},712:function(t,e,r){"use strict";r.r(e);var n=r(710),o=r.n(n),c={props:["src"],mounted:function(){o()(this.$el).observe()}},l=r(7),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{"data-src":this.src}})}),[],!1,null,null,null);e.default=component.exports},726:function(t,e,r){"use strict";r.r(e);r(19);var n=r(5),o=r(711),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.route,e.next=3,r.post("/graphql",{query:"\n  query {\n    originStack {\n      title\n      slug\n      excerpt\n      createdOn\n      category\n      path\n      coverImage {\n        file\n        title\n      }\n      coverTitle {\n        sectionClass\n        headerClass\n        bgImage\n        bgStyle\n      }\n    }\n  }\n"});case 3:return n=e.sent,o=n.data.data.originStack,e.abrupt("return",{posts:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){},mixins:[o.a]},l=r(7),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.posts?r("div",{staticClass:"row row-cards padding-y-xxlarge padding-top-0"},[r("div",{staticClass:"grid-x align-center-middle"},[r("div",{staticClass:"cell small-12 large-7"},[r("div",{staticClass:"grid-x grid grid-margin-x medium-up-2 large-up-2"},[t._l(t.posts,(function(e){return[r("div",{key:e.title,staticClass:"cell grid-item"},[r("div",{staticClass:"card box-shadow-blur"},[r("div",{staticClass:"card-section"},[r("nuxt-link",{staticClass:"micro-link grey-dark",attrs:{to:"/"+t.$joinPath("origins",e.category,e.slug),"data-tippy-placement":"top","data-tippy-content":t.$toUtcDateTime(e.createdOn," dddd, DD MMMM YYYY, HH:mm A")}},[r("i",{staticClass:"icon icon-clock"}),t._v(" "),r("span",[t._v(t._s(t.$toUtcDateTime(e.createdOn,"DD MMMM YYYY"))+" at "+t._s(t.$toUtcDateTime(e.createdOn,"HH:mm A")))])])],1),t._v(" "),e.coverImage?r("div",{staticClass:"card-image"},[r("nuxt-link",{staticClass:"link-image square-container",attrs:{to:"/"+t.$joinPath("origins",e.category,e.slug)}},[r("span",{staticClass:"overlay-shadow"}),t._v(" "),r("picture",{staticClass:"square-content"},[e.coverImage?r("ImageLazyLoad",{key:e.slug,attrs:{src:t.$loadAssetImage(t.$remoteUrl,e.path,e.coverImage.file),alt:e.title}}):t._e()],1)])],1):t._e(),t._v(" "),r("div",{staticClass:"card-section border-y",class:e.coverTitle?e.coverTitle.sectionClass:null,style:e.coverTitle?t.computeStyles(e.coverTitle.bgImage?t.$loadAssetImage(t.$remoteUrl,e.path,e.coverTitle.bgImage):null,e.coverTitle.bgStyle):null},[r("h2",{staticClass:"h2-title header-medium",class:e.coverTitle?e.coverTitle.headerClass:null},[r("nuxt-link",{attrs:{to:"/"+t.$joinPath("origins",e.category,e.slug)},domProps:{innerHTML:t._s(e.excerpt)}})],1)]),t._v(" "),r("div",{staticClass:"card-section"},[r("nav",{staticClass:"margin-0"},[r("ul",{staticClass:"ul-menu flex-space-between padding-0 uppercase grey-dark micro"},[r("li",[r("nuxt-link",{staticClass:"link-menu link-category",attrs:{to:"/origins/categories/"+e.category}},[r("i",{staticClass:"icon icon-tag"}),t._v(" "),r("span",{domProps:{innerHTML:t._s(e.category)}})])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/"+t.$joinPath("origins",e.category,e.slug)}},[r("i",{staticClass:"icon icon-chevron-thin-right"})])],1)])])])])])]}))],2)])])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("NavPager")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageLazyLoad:r(712).default,NavPager:r(709).default})}}]);