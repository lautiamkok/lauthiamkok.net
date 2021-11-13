/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{709:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,r){t.exports=function(){"use strict";var u="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");u&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,a=void 0,i=0;i<=r.length-1;i++)(a=r[i].getAttribute("data-src"))&&(r[i].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var o=t.getAttribute("data-background-image-set").split(n),l=o[0].substr(0,o[0].indexOf(" "))||o[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===o.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+o+"); background-image: image-set("+o+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var r,a,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=Object.assign({},t,n),l=o.root,c=o.rootMargin,d=o.threshold,u=o.load,g=o.loaded,s=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),b(t.target)||(r(t.target),e(t.target),a(t.target)))}))}),{root:l,rootMargin:c,threshold:d})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,l),r=0;r<t.length;r++)b(t[r])||(s?s.observe(t[r]):(u(t[r]),e(t[r]),g(t[r])))},triggerLoad:function(t){b(t)||(u(t),e(t),g(t))},observer:s}}}()},711:function(t,e,r){"use strict";var n=r(713),o=r.n(n);e.a={methods:{computeStyles:function(t,e){var r=[];if(t&&r.push({"background-image":"url("+t+")"}),e){var n="{"+e+"}";r.push(o.a.parse(n))}return r}}}},715:function(t,e,r){"use strict";r.r(e);var n=r(710),o=r.n(n),l={props:["src","post"],mounted:function(){o()(this.$el).observe()}},c=r(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-section border-y",class:t.post.coverTitle?t.post.coverTitle.sectionClass:null,style:t.post.coverTitle?t.post.coverTitle.bgStyle:null,attrs:{"data-background-image":t.src}},[r("h2",{staticClass:"h2-title header-medium",class:t.post.coverTitle?t.post.coverTitle.headerClass:null},[r("nuxt-link",{attrs:{to:t.post.link},domProps:{innerHTML:t._s(t.post.excerpt)}})],1)])}),[],!1,null,null,null);e.default=component.exports},740:function(t,e,r){"use strict";r.r(e);r(19);var n=r(5),o=r(711),l={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.route,e.next=3,r.post("/graphql",{query:"\n  query {\n    feedStack {\n      title\n      slug\n      excerpt\n      createdOn\n      category\n      path\n      link\n      coverImage {\n        file\n        title\n      }\n      coverTitle {\n        sectionClass\n        headerClass\n        bgImage\n        bgStyle\n      }\n    }\n  }\n"});case 3:return n=e.sent,o=n.data.data.feedStack,e.abrupt("return",{posts:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:null}},mixins:[o.a]},c=r(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.posts?r("div",{staticClass:"row row-cards padding-y-xxlarge padding-top-0"},[r("div",{staticClass:"grid-x align-center-middle"},[r("div",{staticClass:"cell small-12 large-8"},[r("div",{staticClass:"grid-x gridx grid-margin-x align-center medium-up-2 large-up-3"},[t._l(t.posts,(function(e){return[r("div",{key:e.title,staticClass:"cell grid-itemx"},[r("div",{staticClass:"card box-shadow-blur"},[r("CardLazyLoad",{attrs:{post:e,src:e.coverTitle.bgImage?t.$loadAssetImage(t.$remoteUrl,e.path,e.coverTitle.bgImage):null}})],1)])]}))],2)])])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("NavPager")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardLazyLoad:r(715).default,NavPager:r(709).default})}}]);