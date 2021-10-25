(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{724:function(t,e,n){"use strict";n.r(e);n(19);var r=n(5),l={data:function(){return{data:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.route,e.next=3,n.post("/graphql",{query:'\n  query {\n    pageBySlug(slug: "origins") {\n      title\n      subtitle\n      excerpt\n      contents\n      path\n      darkModeBgStyle\n      meta {\n        title\n        description\n        keywords\n      }\n      og {\n        type\n        title\n        description\n        image\n      }\n    }\n\n    originStackCategories\n  }\n'});case 3:return r=e.sent,l=r.data.data,data=l.pageBySlug,o=l.originStackCategories,e.abrupt("return",{data:data,categories:o});case 8:case"end":return e.stop()}}),e)})))()}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"grid-margin-overflow-hide",attrs:{id:"main"}},["origins-category-slug"!=t.$route.name&&"origins-posts-slug"!=t.$route.name&&"origins-digital-slug"!=t.$route.name&&"origins-quotes-slug"!=t.$route.name&&"origins-tags-tag"!=t.$route.name?n("div",{staticClass:"row"},[n("div",{staticClass:"grid-x"},[n("div",{staticClass:"cell small-12 large-6"},[n("div",{staticClass:"grid-x align-center-middle min-height-100vh text-container text-center font-rounded background-xxlight"},[n("div",{staticClass:"cell small-8"},[n("h1",{staticClass:"h1-title shadow-hard",domProps:{innerHTML:t._s(t.data.subtitle)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.data.contents)}})])])]),t._v(" "),n("div",{staticClass:"cell medium-12 large-6 min-height-100vh"},[n("div",{staticClass:"swiper-container swiper-container-fraction dark-mode",style:t.data.darkModeBgStyle},[n("div",{staticClass:"swiper-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"swiper-slide"},[n("div",{staticClass:"grid-x align-center-middle text-center height-100 text-container font-rounded"},[n("div",{staticClass:"cell small-8"},[n("h2",{staticClass:"h2-title"},[t._v("Explore!")]),t._v(" "),n("nav",{staticClass:"nav-contact"},[n("ul",{staticClass:"ul-menu flex-column"},[n("li",[n("router-link",{staticClass:"link-menu font-size-large",attrs:{to:"#explore"},nativeOn:{click:function(e){return t.scrollTo("#explore")}}},[n("i",{staticClass:"icon icon-chevron-circle-down",attrs:{"data-tippy-placement":"bottom","data-tippy-content":"Explore"}})])],1)])])])])])]),t._v(" "),n("div",{staticClass:"swiper-pagination fraction-pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})])])])]):t._e(),t._v(" "),n("div",{attrs:{id:"explore"}}),t._v(" "),"origins-category-slug"!=t.$route.name&&"origins-posts-slug"!=t.$route.name&&"origins-digital-slug"!=t.$route.name&&"origins-quotes-slug"!=t.$route.name&&"origins-tags-tag"!=t.$route.name?n("div",{staticClass:"row padding-y-xxlarge padding-bottom-0"},[n("div",{staticClass:"grid-x grid-padding-x align-center-middle"},[n("div",{staticClass:"cell small-12 large-6"},[t._m(4),t._v(" "),n("div",[n("nav",{staticClass:"nav-categories"},[n("ul",{staticClass:"ul-menu uppercase"},[n("li",[n("nuxt-link",{staticClass:"link-menu",class:{active:"origins"==t.$route.name},attrs:{to:"/origins/all"}},[n("i",{staticClass:"icon icon-tag hide-for-small-only"}),t._v(" All\n                ")])],1),t._v(" "),t._l(t.categories,(function(e){return[n("li",[n("nuxt-link",{staticClass:"link-menu",attrs:{to:"/origins/categories/"+e}},[n("i",{staticClass:"icon icon-tag hide-for-small-only"}),t._v(" "+t._s(e)+"\n                ")])],1)]}))],2)])]),t._v(" "),t._m(5)])])]):t._e(),t._v(" "),n("nuxt-child")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"grid-x align-center-middle text-center height-100 text-container font-rounded"},[e("div",{staticClass:"cell small-8"},[e("p",[this._v("\n                        If we could see the origins"),e("br"),this._v("\n                        We may understand;"),e("br"),this._v("\n                        If we could return"),e("br"),this._v("\n                        We may remember.\n                      ")]),this._v(" "),e("p",[this._v("18.07.2003, 10:36 pm, Friday.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"grid-x align-center-middle height-100 text-container font-rounded"},[e("div",{staticClass:"cell small-8"},[e("p",[this._v("\n                        One should not discount what one has worked for and achieved in\n                        the past: even a futile result is a valuable milestone in the future.\n                        Even fruitless hard work is the genuine perspiration that counts in\n                        a venerable creation...\n                      ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"grid-x align-center-middle height-100 text-container font-rounded"},[e("div",{staticClass:"cell small-8"},[e("p",[this._v("\n                        One should learn to harvest from the past,\n                        even if it is inadequate, dispensable and disreputable. One should\n                        learn to enlarge to transcend the greatness of the smallness.\n                        And one should learn to miniaturise the immensity into the\n                        infinitessimal, so that one can dwell in its maximum of repose,\n                        as philosophers, writers, poets, scientists and artists have taught\n                        us...\n                      ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"grid-x align-center-middle height-100 text-container font-rounded"},[e("div",{staticClass:"cell small-8"},[e("p",[this._v("\n                        And last but not least, if that should be finished in the end,\n                        one shall see the completed journey is grown with contentment,\n                        distant origin from where it departed, will spark as if it is just\n                        about to begin again.\n                      ")]),this._v(" "),e("p",[this._v("(2002)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("hr")])}],!1,null,null,null);e.default=component.exports}}]);