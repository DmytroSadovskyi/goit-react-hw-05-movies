"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{6076:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,i,u,s=t(5861),o=t(9439),p=t(4687),l=t.n(p),d=t(2791),h=t(4430),f=t(7689),x=t(1362),v=t(168),w=t(7402),g=w.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 25px;\n  height: 300px;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    width: 12px;\n  }\n\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: blue;\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n  }\n\n  @media screen and (min-width: 320px) {\n    gap: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 49px;\n  }\n  @media screen and (min-width: 1024px) {\n    column-gap: 48px;\n    row-gap: 40px;\n  }\n"]))),m=w.Z.li(a||(a=(0,v.Z)(["\n  width: calc((100% - 20px) / 2);\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 25px) / 5);\n  }\n  @media screen and (min-width: 1024px) {\n    width: calc((100% - 48px) / 6);\n  }\n"]))),b=w.Z.img(c||(c=(0,v.Z)(["\n  display: block;\n  width: 100%;\n  height: 285px;\n"]))),k=w.Z.div(i||(i=(0,v.Z)(["\n  padding: 10px;\n  text-align: center;\n"]))),Z=w.Z.p(u||(u=(0,v.Z)(["\n  color: blue;\n  font-size: large;\n"]))),y=t(184),j=function(n){var e=n.cast;return(0,y.jsx)(g,{children:e.map((function(n){var e=n.id,t=n.character,r=n.name,a=n.profile_path;return(0,y.jsxs)(m,{children:[(0,y.jsx)(b,{src:a?"https://image.tmdb.org/t/p/w300".concat(a):"https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...",alt:r,width:"150",height:"200"}),(0,y.jsxs)(k,{children:[(0,y.jsx)("p",{children:(0,y.jsx)("span",{children:r})}),(0,y.jsx)(Z,{children:(0,y.jsx)("span",{children:t})})]})]},e)}))})},_=function(){var n=(0,f.UO)().Id,e=(0,d.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1],c=(0,d.useState)(!1),i=(0,o.Z)(c,2),u=i[0],p=i[1],v=(0,d.useState)(null),w=(0,o.Z)(v,2),g=w[0],m=w[1];return(0,d.useEffect)((function(){var e=function(){var e=(0,s.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),m(null),e.next=5,(0,h.uV)(n);case 5:t=e.sent,r=t.cast,a(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m("Error while loading data. Try again later.");case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,y.jsx)(y.Fragment,{children:g?(0,y.jsx)("p",{children:g}):(0,y.jsxs)(y.Fragment,{children:[u&&(0,y.jsx)(x.Z,{}),0!==(null===r||void 0===r?void 0:r.length)||g?(0,y.jsx)(j,{cast:r}):(0,y.jsx)("p",{children:"We didn't find info about cast"})]})})}},4430:function(n,e,t){t.d(e,{Hx:function(){return w},Pv:function(){return l},Y5:function(){return h},uV:function(){return x},wr:function(){return o}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243),u="https://api.themoviedb.org/3/",s="92d66af10495782dbf7116658cb2e14f";function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"trending/movie/week?api_key=").concat(s,"&language=en-US&page=").concat(e),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e,t){var r,a,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new URLSearchParams({api_key:"92d66af10495782dbf7116658cb2e14f",query:t,page:e,include_adult:!1}),a="".concat(u,"search/movie?").concat(r),n.next=5,i.Z.get(a);case 5:return s=n.sent,n.abrupt("return",s.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"movie/").concat(e,"?api_key=").concat(s),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function w(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),n.next=4,i.Z.get(t);case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.dfc8a397.chunk.js.map