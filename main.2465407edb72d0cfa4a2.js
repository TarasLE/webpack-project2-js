(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,r){"use strict";r.r(e);r("V2IV"),r("lAJ5"),r("JBxO"),r("Muwe"),r("9UJh"),r("w13K"),r("y89P"),r("X5mX");var n=function(){function t(t){var e,r,n,o=t.root,i=t.error,a=t.routes;n=function(t){return t.toString().replace(/\/$/,"").replace(/^\//,"")},(r="removeCornerSlashes")in(e=this)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.root=o||"/",this.error=i||"/404",this.routes=a||[],this.listen()}var e=t.prototype;return e.getFragment=function(){var t=this.removeCornerSlashes(decodeURI(window.location.pathname+window.location.search));return t=t.replace(/\?(.*)$/,""),t="/"!==this.root?t.replace(this.root,""):t,this.removeCornerSlashes(t)},e.navigate=function(t){void 0===t&&(t=""),window.history.pushState(null,null,this.root+this.removeCornerSlashes(t))},e.listen=function(){clearInterval(this.interval),this.interval=setInterval(this.interval.bind(this),50)},e.interval=function(){var t=this;this.current!==this.getFragment()&&(this.current=this.getFragment(),this.routes.some((function(e){var r=t.current.match(e.path);return!!r&&(r.shift(),e.callback.apply({},r),r)})))},t}(),o=r("rAdG"),i=r.n(o),a=document.getElementsByClassName("page-start");document.querySelectorAll(".header__item"),document.querySelector('li[data-position="home"]'),document.querySelector('li[data-position="library"]');var s=function(){a.innerHTML=i()()};document.querySelector(".to-team-page");window.router=new n({root:"/",routes:[{path:"",callback:function(){s()}}]})},V2IV:function(t,e,r){},rAdG:function(t,e,r){var n=r("mp5j");t.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(t,e,r,n,o){return'<div class="container">\r\n    <h1>test startpage</h1>\r\n</div>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2465407edb72d0cfa4a2.js.map