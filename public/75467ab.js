(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{306:function(t,e,n){"use strict";n.r(e);n(218);var r={name:"Pagination",props:{pageSize:{type:Number,default:10},currentPage:{type:Number,default:1},total:{type:Number}},computed:{count:function(){return Math.ceil(this.total/this.pageSize)},pagination_number:function(){return 4}},methods:{getArr:function(t,e){for(var n=[],i=t;i<=e;i++)n.push(i);return n},refresh:function(t){this.$tiandev.refresh(),window.scrollTo({top:0,behavior:"smooth"})}}},l=n(52),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"py-5"},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:t.currentPage<=1?" disabled":""},[e("nuxt-link",{staticClass:"page-link",attrs:{disabled:t.currentPage<=1,to:{path:"/",query:{page:t.currentPage-1}}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])],1),t._v(" "),t._l(t.count,(function(n){return[n-1==t.count-1&&Math.abs(n-t.currentPage)>3?e("li",{key:n,staticClass:"page-item disabled"},[e("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/"}}},[t._v("...")])],1):t._e(),t._v(" "),n>t.currentPage-2&&Math.abs(n-t.currentPage)<3||n-1==t.count-1||n-1==0?e("li",{key:n,staticClass:"page-item",class:t.currentPage===n?"active":""},[e("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/",query:{page:n}}},nativeOn:{click:function(e){return t.refresh.apply(null,arguments)}}},[t._v("\n                    "+t._s(n))])],1):t._e(),t._v(" "),n-1==0&&Math.abs(n-t.currentPage)>2?e("li",{key:n,staticClass:"page-item disabled"},[e("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/"}}},[t._v("...")])],1):t._e()]})),t._v(" "),e("li",{staticClass:"page-item",class:t.currentPage===t.count?" disabled":""},[e("nuxt-link",{staticClass:"page-link",attrs:{disabled:t.currentPage===t.count,tag:"button",to:{path:"/",query:{page:t.currentPage+1}}},nativeOn:{click:function(e){return t.refresh.apply(null,arguments)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])],1)],2)])}),[],!1,null,null,null);e.default=component.exports}}]);