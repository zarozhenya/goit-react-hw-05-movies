"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[815],{68:function(e,n,r){r.d(n,{Bt:function(){return d},Mc:function(){return o},bI:function(){return p},wr:function(){return u},y:function(){return l}});var t=r(861),a=r(757),c=r.n(a),i=r(44),s="21a38995d1a0d82c48e261b573f88f7b";i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},815:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t,a,c,i,s,u=r(885),o=r(739),l=r(168),d=r(444),p=d.ZP.div(t||(t=(0,l.Z)(["\n  display: flex;\n  padding: 10px 0;\n  border-bottom: 1px solid black;\n  gap: 16px;\n"]))),f=d.ZP.img(a||(a=(0,l.Z)(["\n  width: 100%;\n"]))),h=d.ZP.div(c||(c=(0,l.Z)(["\n  flex-shrink: 0;\n"]))),v=r(184),x=function(e){var n=e.movie,r=n.poster_path,t=n.title,a=n.release_date,c=n.vote_average,i=n.overview,s=n.genres;return(0,v.jsxs)(p,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(f,{src:"".concat("https://image.tmdb.org/t/p/w300","/").concat(r),alt:t})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[t," (",new Date(a).getFullYear(),")"]}),(0,v.jsxs)("p",{children:["User score: ",(10*c).toFixed(0),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:i}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("ul",{children:s.map((function(e){var n=e.name,r=e.id;return(0,v.jsx)("li",{children:n},r)}))})]})]})},m=r(791),g=r(68),j=r(731),b=d.ZP.div(i||(i=(0,l.Z)(["\n  border-bottom: 1px solid black;\n"]))),w=(0,d.ZP)(j.rU)(s||(s=(0,l.Z)(["\n  color: blue;\n"]))),k=function(){return(0,v.jsx)(b,{children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(w,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(w,{to:"reviews",children:"Reviews"})})]})})},Z=function(){var e=(0,m.useState)(null),n=(0,u.Z)(e,2),r=n[0],t=n[1],a=(0,o.UO)().movieId,c=(0,m.useRef)((0,o.TH)()),i=(0,o.s0)();return(0,m.useEffect)((function(){(0,g.Mc)(a).then(t)}),[a]),(0,v.jsxs)("main",{children:[(0,v.jsx)("button",{onClick:function(){return i(c.current.state||"/")},children:"Go back"}),r&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{movie:r}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsx)(k,{})]}),(0,v.jsx)(m.Suspense,{fallback:(0,v.jsx)("p",{children:"loading..."}),children:(0,v.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=815.feaf0069.chunk.js.map