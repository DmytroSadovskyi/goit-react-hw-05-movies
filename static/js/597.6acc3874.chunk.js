"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{3597:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),c=r(4687),s=r.n(c),u=r(2791),o=r(4430),i=r(7689),p=r(1362),l=r(184);t.default=function(){var e=(0,i.UO)().Id,t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],f=r[1],h=(0,u.useState)(!1),d=(0,a.Z)(h,2),v=d[0],g=d[1],x=(0,u.useState)(null),m=(0,a.Z)(x,2),w=m[0],y=m[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,o.uV)(e);case 4:r=t.sent,n=r.cast,console.log(n),f(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y("Error while loading data. Try again later.");case 13:return t.prev=13,g(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsx)(l.Fragment,{children:w?(0,l.jsx)("p",{children:w}):(0,l.jsxs)(l.Fragment,{children:[v&&(0,l.jsx)(p.Z,{}),(0,l.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"10px",overflowY:"scroll",width:"800px",height:"400px",listStyle:"none"},children:c.map((function(e){var t=e.id,r=e.character,n=e.name,a=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w300".concat(a):"https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...",alt:n,width:"150",height:"200"}),(0,l.jsx)("p",{children:(0,l.jsx)("span",{children:n})}),(0,l.jsx)("p",{children:(0,l.jsx)("span",{children:r})})]},t)}))})]})})}},4430:function(e,t,r){r.d(t,{Pv:function(){return l},Y5:function(){return h},uV:function(){return v},wr:function(){return i}});var n=r(5861),a=r(4687),c=r.n(a),s=r(1243),u="https://api.themoviedb.org/3/",o="92d66af10495782dbf7116658cb2e14f";function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"trending/movie/week?api_key=").concat(o,"&language=en-US&page=").concat(t),e.next=4,s.Z.get(r);case 4:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e,t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t,r){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new URLSearchParams({api_key:"92d66af10495782dbf7116658cb2e14f",query:r,page:t,include_adult:!1}),a="".concat(u,"search/movie?").concat(n),e.next=5,s.Z.get(a);case 5:return o=e.sent,e.abrupt("return",o.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"movie/").concat(t,"?api_key=").concat(o),e.next=4,s.Z.get(r);case 4:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e.next=4,s.Z.get(r);case 4:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.6acc3874.chunk.js.map