/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{709:function(t,e,l){"use strict";l.r(e);var n=l(7),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,l){t.exports=function(){"use strict";var u="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");u&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var l=t.children,a=void 0,i=0;i<=l.length-1;i++)(a=l[i].getAttribute("data-src"))&&(l[i].src=a);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var r=t.getAttribute("data-background-image-set").split(n),d=r[0].substr(0,r[0].indexOf(" "))||r[0];d=-1===d.indexOf("url(")?"url("+d+")":d,1===r.length?t.style.backgroundImage=d:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+d+"; background-image: -webkit-image-set("+r+"); background-image: image-set("+r+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var b=function(t){return"true"===t.getAttribute("data-loaded")};return function(){var l,a,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=Object.assign({},t,n),d=r.root,c=r.rootMargin,o=r.threshold,u=r.load,g=r.loaded,s=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((l=u,a=g,function(t,n){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(n.unobserve(t.target),b(t.target)||(l(t.target),e(t.target),a(t.target)))}))}),{root:d,rootMargin:c,threshold:o})),{observe:function(){for(var t=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)}(i,d),l=0;l<t.length;l++)b(t[l])||(s?s.observe(t[l]):(u(t[l]),e(t[l]),g(t[l])))},triggerLoad:function(t){b(t)||(u(t),e(t),g(t))},observer:s}}}()},711:function(t,e,l){"use strict";var n=l(713),r=l.n(n);e.a={methods:{computeStyles:function(t,e){var l=[];if(t&&l.push({"background-image":"url("+t+")"}),e){var n="{"+e+"}";l.push(r.a.parse(n))}return l}}}},712:function(t,e,l){"use strict";l.r(e);var n=l(710),r=l.n(n),d={props:["src"],mounted:function(){r()(this.$el).observe()}},c=l(7),component=Object(c.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{"data-src":this.src}})}),[],!1,null,null,null);e.default=component.exports},714:function(t,e,l){"use strict";l.r(e);var n=l(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid-x grid-padding-x align-center-middle text-container content-container font-classic"},[l("div",{staticClass:"cell small-12 large-5"},[!0===this.$store.state.sponsor?l("div",[t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),!0===this.$store.state.advert?l("div",[t._m(2),t._v(" "),t._m(3)]):t._e(),t._v(" "),!0===this.$store.state.hire?l("div",[t._m(4),t._v(" "),t._m(5)]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[e("i",{staticClass:"icon icon-info-circle-hollow"}),this._v(" If you enjoy this content and would like to support what I do, please use any of these channels to buy me a coffee: "),e("a",{attrs:{href:"https://ko-fi.com/lautiamkok",target:"_blank"}},[this._v("Ko-fi")]),this._v(", "),e("a",{attrs:{href:"https://www.buymeacoffee.com/lautiamkok",target:"_blank"}},[this._v("Buy Me a Coffee")]),this._v(". Or make a donation for however much you feel comfortable with "),e("a",{attrs:{href:"https://www.paypal.me/lautiamkok",target:"_blank"}},[this._v("PayPal")]),this._v(". Thank you so much for supporting!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[e("i",{staticClass:"icon icon-info-circle-hollow"}),this._v(" This page participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn commissions by linking to Amazon. In other words, this means that whenever you buy a book on Amazon from a link on here, I receive a small percentage of its price.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[e("i",{staticClass:"icon icon-info-circle-hollow"}),this._v(" If you enjoy this content and require my skills, please do not hesitate to "),e("a",{staticClass:"toggle-get-in-touch",attrs:{href:"#"}},[this._v("contact me")]),this._v(" for a quote. Thank you!")])])}],!1,null,null,null);e.default=component.exports},729:function(t,e,l){"use strict";l.r(e);l(19);var n=l(5),r={data:function(){return{data:[]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var l,n,r,d,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.params,n=t.error,r=t.$axios,t.route,d=t.store,t.$paragrafy,c='\n      query {\n        originBySlug(slug: "'.concat(l.slug,'") {\n          title\n          slug\n          excerpt\n          contents\n          directory\n          category\n          path\n          layout\n          createdOn\n          updatedOn\n          darkModeBgStyle\n          tags\n          hide\n          meta {\n            title\n            description\n            keywords\n          }\n          og {\n            type\n            title\n            description\n            image\n          }\n          coverTitle {\n            sectionClass\n            headerClass\n            bgImage\n            bgStyle\n            imgCaption\n          }\n          listContents {\n            contents\n            image {\n              file\n              title\n              alt\n              caption\n              cellClass\n            }\n          }\n          fontSizes {\n            headExcerpt\n            headBlockquote\n          }\n          headImage {\n            file\n            alt\n            caption\n            cellClass\n          }\n          fullSingleHead {\n            gridClass\n            cellClass\n            bgStyle\n            bgImage\n            imgCaption\n          }\n          fullSplitHeadLeft {\n            gridClass\n            cellClass\n            contentClass\n          }\n          fullSplitHeadRight {\n            gridClass\n            cellClass\n            bgImage\n            bgStyle\n            imgCaption\n          }\n        }\n      }\n    '),e.next=4,r.post("/graphql",{query:c});case 4:if(o=e.sent,null!==(data=o.data.data.originBySlug)){e.next=8;break}return e.abrupt("return",n({statusCode:404,message:"page not found"}));case 8:return d.commit("setSponsor",!0),e.abrupt("return",{data:data});case 10:case"end":return e.stop()}}),e)})))()},mixins:[l(711).a],scrollToTop:!0},d=l(7),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{attrs:{id:"main"}},["card"==t.data.layout?l("div",{staticClass:"row padding-y-large padding-bottom-0"},[l("div",{staticClass:"grid-x align-middle"},[l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x align-center-middle"},[l("div",{staticClass:"cell small-11 medium-10 large-5"},[l("div",{staticClass:"card box-shadow-blur"},[l("div",{staticClass:"card-section"},[l("div",{staticClass:"micro-link grey-dark",attrs:{"data-tippy-placement":"top","data-tippy-content":t.$toUtcDateTime(t.data.createdOn," dddd, DD MMMM YYYY, HH:mm A")}},[l("i",{staticClass:"icon icon-clock"}),t._v(" "),l("span",[t._v(t._s(t.$toUtcDateTime(t.data.createdOn,"DD MMMM YYYY"))+" at "+t._s(t.$toUtcDateTime(t.data.createdOn,"HH:mm A")))])])]),t._v(" "),t.data.coverImage?l("div",{staticClass:"card-image"},[l("nuxt-link",{staticClass:"link-image square-container",attrs:{to:"/"+t.$joinPath("origins",t.data.category,t.data.slug)}},[l("span",{staticClass:"overlay-shadow"}),t._v(" "),l("picture",{staticClass:"square-content"},[t.data.coverImage?l("ImageLazyLoad",{key:t.data.slug,attrs:{src:t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.coverImage.file),alt:t.data.title}}):t._e()],1)])],1):t._e(),t._v(" "),l("div",{staticClass:"card-section border-y",class:t.data.coverTitle?t.data.coverTitle.sectionClass:null,style:t.data.coverTitle?t.computeStyles(t.data.coverTitle.bgImage?t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.coverTitle.bgImage):null,t.data.coverTitle.bgStyle):null},[l("div",{staticClass:"font-size-large",class:t.data.coverTitle?t.data.coverTitle.headerClass:null,domProps:{innerHTML:t._s(t.$toHtml(t.data.excerpt))}})]),t._v(" "),l("div",{staticClass:"card-section"},[l("nav",{staticClass:"margin-0"},[l("ul",{staticClass:"ul-menu flex-space-between padding-0 uppercase grey-dark micro"},[l("li",[l("nuxt-link",{staticClass:"link-menu link-category",attrs:{to:"/origins/categories/"+t.data.category}},[l("i",{staticClass:"icon icon-tag"}),t._v(" "),l("span",{domProps:{innerHTML:t._s(t.data.category)}})])],1)])])])])])])]),t._v(" "),t.data.headImage&&t.data.headImage.file?l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x align-center-middle"},[l("div",{staticClass:"cell small-12 large-4",class:t.data.headImage.cellClass},[l("div",{staticClass:"grid-x text-left"},[l("div",{staticClass:"cell small-12"},[l("picture",[l("ImageLazyLoad",{attrs:{src:t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.headImage.file),alt:t.data.headImage.alt}})],1)]),t._v(" "),l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x grid-padding-x",class:t.$collapsePaddingX(t.data.headImage.cellClass)},[l("div",{staticClass:"cell small-12"},[l("figcaption",{domProps:{innerHTML:t._s(t.data.headImage.caption)}})])])])])])])]):t._e(),t._v(" "),t.data.coverTitle&&t.data.coverTitle.imgCaption?l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x align-center-middle"},[l("div",{staticClass:"cell small-11 medium-10 large-5"},[l("figcaption",{staticClass:"text-right",domProps:{innerHTML:t._s(t.data.coverTitle.imgCaption)}})])])]):t._e()])]):t._e(),t._v(" "),"flat"==t.data.layout?l("div",{staticClass:"row padding-y-large padding-bottom-0"},[l("div",{staticClass:"grid-x align-middle"},[l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x align-center-middle text-container text-center font-classic"},[l("div",{staticClass:"cell small-8 large-5"},[l("h1",{staticClass:"h1-title hide",domProps:{innerHTML:t._s(t.data.title)}}),t._v(" "),l("div",{class:t.data.fontSizes?t.data.fontSizes.headExcerpt:null,domProps:{innerHTML:t._s(t.$toHtml(t.data.excerpt))}}),t._v(" "),l("span",[l("i",{staticClass:"icon icon-clock"}),t._v(" "),l("span",[t._v(t._s(t.$toUtcDateTime(t.data.createdOn)))])])])])]),t._v(" "),t.data.headImage&&t.data.headImage.file?l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x align-center-middle"},[l("div",{staticClass:"cell small-12 large-4",class:t.data.headImage.cellClass},[l("div",{staticClass:"grid-x text-left"},[l("div",{staticClass:"cell small-12"},[l("picture",[l("ImageLazyLoad",{attrs:{src:t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.headImage.file),alt:t.data.headImage.alt}})],1)]),t._v(" "),l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x grid-padding-x",class:t.$collapsePaddingX(t.data.headImage.cellClass)},[l("div",{staticClass:"cell small-12"},[l("figcaption",{domProps:{innerHTML:t._s(t.data.headImage.caption)}})])])])])])])]):t._e()])]):t._e(),t._v(" "),"single"==t.data.layout?l("div",{staticClass:"row"},[l("div",{staticClass:"grid-x"},[l("div",{staticClass:"cell small-12 large-12"},[l("div",{staticClass:"grid-x padding-y-large align-center-middle min-height-100vh text-container text-center font-classic box-shadow-onhover",class:t.data.fullSingleHead?t.data.fullSingleHead.gridClass:null,style:t.data.fullSingleHead?t.computeStyles(t.data.fullSingleHead.bgImage?t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.fullSingleHead.bgImage):null,t.data.fullSingleHead.bgStyle):null},[l("div",{staticClass:"cell small-8 large-4",class:t.data.fullSingleHead?t.data.fullSingleHead.cellClass:null},[l("h1",{staticClass:"h1-title hide",domProps:{innerHTML:t._s(t.data.title)}}),t._v(" "),l("div",{class:t.data.fontSizes?t.data.fontSizes.headExcerpt:null,domProps:{innerHTML:t._s(t.$toHtml(t.data.excerpt))}}),t._v(" "),l("span",[l("i",{staticClass:"icon icon-clock"}),t._v(" "),l("span",[t._v(t._s(t.$toUtcDateTime(t.data.createdOn)))])])])])]),t._v(" "),t.data.fullSingleHead&&t.data.fullSingleHead.imgCaption?l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x grid-padding-x"},[l("div",{staticClass:"cell small-12"},[l("figcaption",{staticClass:"text-right",domProps:{innerHTML:t._s(t.data.fullSingleHead.imgCaption)}})])])]):t._e()])]):t._e(),t._v(" "),"split"==t.data.layout?l("div",{staticClass:"row"},[l("div",{staticClass:"grid-x"},[l("div",{staticClass:"cell small-12 large-6"},[l("div",{staticClass:"grid-x align-center-middle min-height-100vh text-container background-xxlight",class:t.data.fullSplitHeadLeft.gridClass},[l("div",{staticClass:"cell small-8",class:t.data.fullSplitHeadLeft.cellClass},[l("h1",{staticClass:"h1-title hide",domProps:{innerHTML:t._s(t.data.title)}}),t._v(" "),l("div",{class:t.data.fullSplitHeadLeft.contentClass,domProps:{innerHTML:t._s(t.data.contents)}}),t._v(" "),l("span",[l("i",{staticClass:"icon icon-clock"}),t._v(" "),l("span",[t._v(t._s(t.$toUtcDateTime(t.data.createdOn)))])])])])]),t._v(" "),l("div",{staticClass:"cell medium-12 large-6 min-height-100vh"},[l("div",{staticClass:"image-background min-height-100vh",style:t.data.fullSplitHeadRight?t.computeStyles(t.data.fullSplitHeadRight?t.$loadAssetImage(t.$remoteUrl,t.data.path,t.data.fullSplitHeadRight.bgImage):null,t.data.fullSplitHeadRight.bgStyle):null})])]),t._v(" "),t.data.fullSplitHeadRight.imgCaption?l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x grid-padding-x"},[l("div",{staticClass:"cell small-12"},[l("figcaption",{staticClass:"text-right",domProps:{innerHTML:t._s(t.data.fullSplitHeadRight.imgCaption)}})])])]):t._e()]):t._e(),t._v(" "),l("div",{staticClass:"row padding-y-large padding-bottom-0"},[t._l(t.data.listContents,(function(e,n){return[e.contents?l("div",{staticClass:"grid-x padding-y-medium padding-top-0 grid-padding-x align-center-middle text-container font-classic"},[l("div",{staticClass:"cell small-12 large-5",class:t.data.contentClass,domProps:{innerHTML:t._s(t.$toHtml(e.contents))}})]):t._e(),t._v(" "),e.image?l("div",{staticClass:"grid-x align-center-middle padding-y-medium padding-top-0"},[l("div",{staticClass:"cell small-12 large-4",class:e.image.cellClass},[l("div",{staticClass:"grid-x text-left"},[l("div",{staticClass:"cell small-12"},[l("picture",[l("a",{staticClass:"link-image box-shadow-blur open-overlay-slide",attrs:{href:"#","data-index":n}},[l("span",{staticClass:"overlay-shadow"}),t._v(" "),l("ImageLazyLoad",{attrs:{src:t.$loadAssetImage(t.$remoteUrl,t.data.path,e.image.file),alt:e.image.alt}})],1)])]),t._v(" "),l("div",{staticClass:"cell small-12"},[l("div",{staticClass:"grid-x grid-padding-x",class:t.$collapsePaddingX(e.image.cellClass)},[l("div",{staticClass:"cell small-12"},[l("figcaption",{domProps:{innerHTML:t._s(e.image.caption)}})])])])])])]):t._e()]})),t._v(" "),t.data.listContents?t._e():l("div",{staticClass:"grid-x grid-padding-x align-center-middle text-container content-container font-classic"},[l("div",{staticClass:"cell small-12 large-5",class:t.data.contentClass},[t.data.hide&&t.data.hide.includes("contents")?t._e():l("div",{domProps:{innerHTML:t._s(t.data.contents)}})])]),t._v(" "),l("div",{staticClass:"grid-x grid-padding-x align-center-middle text-container content-container font-classic"},[l("div",{staticClass:"cell small-12 large-5",class:t.data.contentClass},[l("nav",{staticClass:"nav-menu nav-tag"},[l("ul",{staticClass:"ul-menu flex-wrap flex-start"},[t._l(t.data.tags,(function(e){return[l("li",[l("nuxt-link",{staticClass:"link-menu",attrs:{to:"/origins/tags/"+e},domProps:{innerHTML:t._s("#"+e)}})],1)]}))],2)])])])],2),t._v(" "),l("div",{staticClass:"row"},[l("InfoSponsorAdvert")],1),t._v(" "),l("div",{staticClass:"row"},[l("NavPager")],1),t._v(" "),l("div",{staticClass:"row row-overlay-slide"},[t._m(0),t._v(" "),l("div",{staticClass:"swiper-container swiper-container-overlay"},[l("div",{staticClass:"swiper-wrapper"},[t._l(t.data.listContents,(function(e){return[l("div",{staticClass:"swiper-slide"},[l("div",{staticClass:"swiper-zoom-container"},[l("img",{attrs:{src:t.$loadAssetImage(t.$remoteUrl,t.data.path,e.image.file),alt:e.image.title}})])])]}))],2),t._v(" "),l("div",{staticClass:"swiper-pagination"}),t._v(" "),l("div",{staticClass:"swiper-button-prev"}),t._v(" "),l("div",{staticClass:"swiper-button-next"}),t._v(" "),l("div",{staticClass:"swiper-scrollbar"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-container position-absolute"},[e("nav",{staticClass:"nav-menu"},[e("ul",{staticClass:"ul-menu flex-end"},[e("li",[e("a",{staticClass:"link-menu exit-overlay-slide",staticStyle:{display:"block"},attrs:{href:"#"}},[e("i",{staticClass:"icon large icon-close-thin font-size-medium",staticStyle:{color:"white"},attrs:{"data-tooltip":"",tabindex:"1",title:"Close","data-position":"top","data-alignment":"center"}})])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageLazyLoad:l(712).default,InfoSponsorAdvert:l(714).default,NavPager:l(709).default})}}]);