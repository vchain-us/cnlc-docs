(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{510:function(t,e,n){var content=n(512);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("66066ac0",content,!0,{sourceMap:!1})},511:function(t,e,n){"use strict";n(510)},512:function(t,e,n){(e=n(5)(!1)).push([t.i,"article.help-section .nuxt-content{display:grid!important;justify-self:flex-start;padding-right:4rem}article.help-section .nuxt-content p{margin:0 16px;padding:0}article.help-section .nuxt-content p.inline-img{display:block}article.help-section .nuxt-content p.inline-img img{display:inline;margin:0 .5rem!important;padding:0!important}@media screen and (max-width:767px){article.help-section .nuxt-content p.inline-img{display:inline}}@media screen and (max-width:767px){article.help-section .nuxt-content{padding-right:0!important}}article.help-section img{display:block;max-width:100%;margin:2rem 1rem;padding:0}article.help-section table{width:100%;margin:2rem 0;border-collapse:collapse}article.help-section tr:nth-of-type(2n){background:#fff}article.help-section th{background:#1565c0;color:#fff;font-weight:700}article.help-section td,article.help-section th{padding:6px;border:1px solid #e6e6e6;text-align:left}article.help-section .nuxt-content-highlight{margin:.5rem 0}@media screen and (min-width:768px){article.help-section{border-right:1px solid #e6e6e6}}@media screen and (max-width:767px){article.help-section{padding:0 0 2rem}article.help-section h1{font-size:1.5rem;font-weight:700}article.help-section h2{font-size:1.25rem;font-weight:700}article.help-section img{width:100%;padding:0}article.help-section table{table-layout:fixed;width:100%;word-wrap:break-word}}",""]),t.exports=e},513:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(41);var r=n(12),c=function(t,e){return function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c,l,article,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.$content,l=r.params,n.next=3,c(t,e||l.slug).fetch();case 3:return article=n.sent,n.next=6,c("help",{deep:!0}).only(["title","path","slug"]).fetch();case 6:return o=n.sent,n.abrupt("return",{article:article,articles:o});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},514:function(t,e,n){"use strict";n(22),n(15),n(13),n(11),n(16);var r=n(2),c=n(25),l=n(7);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={mounted:function(){this.article&&this.article.title&&(this.setBreadcrumbs([{icon:["fas","question-circle"],title:this.$t("help.title"),path:"/help",disabled:this.article.index}]),this.article.index||this.addBreadcrumbs([{icon:["fas","question-circle"],title:this.article.title,path:"/help/".concat(this.article.slug)}]))},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(l.VIEW_MODULE,{setBreadcrumbs:l.SET_BREADCRUMBS,addBreadcrumbs:l.ADD_BREADCRUMBS}))},h=(n(511),n(1)),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"help-section -github-markdown"},[e("i-card",{staticClass:"_margin-top-1"},[e("nuxt-content",{attrs:{document:this.article}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{ICard:n(147).default})},639:function(t,e,n){"use strict";n.r(e);var r=n(514),c=n(513),l={extends:r.a,asyncData:Object(c.a)("help","index")},o=n(1),component=Object(o.a)(l,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);