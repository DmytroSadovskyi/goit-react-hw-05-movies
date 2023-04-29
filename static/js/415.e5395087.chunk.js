"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5834:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(7402).Z.div(r||(r=(0,a.Z)(["\n  text-align: center;\n\n  @media screen and (min-width: 320px) {\n    width: 320px;\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n    padding-left: 32px;\n    padding-right: 32px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),o=t(184),c=function(n){var e=n.children;return(0,o.jsx)(i,{children:e})}},4672:function(n,e,t){t.d(e,{Z:function(){return v}});var r,a,i,o,c,s=t(7689),p=t(168),u=t(7402),d=t(1087),l=(0,u.Z)(d.rU)(r||(r=(0,p.Z)(["\n  text-decoration: none;\n"]))),x=u.Z.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 25px;\n  @media screen and (min-width: 320px) {\n    gap: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    column-gap: 16px;\n    row-gap: 32px;\n  }\n"]))),h=u.Z.li(i||(i=(0,p.Z)(["\n  min-width: 280px;\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 32px) / 2);\n  }\n  @media screen and (min-width: 1280px) {\n    width: calc((100% - 2 * 16px) / 3);\n  }\n"]))),g=u.Z.div(o||(o=(0,p.Z)(["\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0);\n  transition: box-shadow 0.3s ease-in-out;\n  position: relative;\n\n  img {\n    display: block;\n    width: 280px;\n    height: 398px;\n    margin-bottom: 8px;\n    transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;\n\n    @media screen and (min-width: 768px) and (max-width: 1279px) {\n      width: 336px;\n      height: 455px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 395px;\n      height: 574px;\n      margin-bottom: 12px;\n    }\n  }\n\n  span {\n    display: block;\n    position: absolute;\n    top: 40%;\n    right: 50%;\n    transform: translate(-40%, -50%);\n    visibility: hidden;\n    color: black;\n    font-weight: bold;\n    transition: visibility 0s ease-in-out;\n  }\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);\n\n    img {\n      filter: blur(3px);\n      opacity: 0.7;\n      transition: opacity 0.3s ease-in-out;\n    }\n\n    span {\n      visibility: visible;\n      transform: translate(50%, 50%);\n      transition: visibility 0s ease-in-out 0.3s;\n    }\n  }\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n  }\n"]))),m=u.Z.p(c||(c=(0,p.Z)(["\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: black;\n"]))),f=t(184),v=function(n){var e=n.movies,t=(0,s.TH)();return(0,f.jsx)(x,{children:e.map((function(n){var e=n.poster_path,r=n.title,a=n.id;return(0,f.jsx)(h,{children:(0,f.jsx)(l,{to:"/movies/".concat(a),state:{from:t},children:(0,f.jsxs)(g,{children:[(0,f.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...",alt:r}),(0,f.jsx)("span",{children:"Click to see more info"}),(0,f.jsx)(m,{children:r})]})})},a)}))})}},9593:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),i=t(7402),o=t(6048),c=t.n(o),s=(0,i.Z)(c())(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 5px;\n  padding: 0;\n  margin-bottom: 30px;\n  color: blue;\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n\n  .previous {\n    padding: 5px 10px;\n    @media screen and (min-width: 768px) {\n      padding: 10px 15px;\n    }\n\n    background-color: gainsboro;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n  .next {\n    padding: 5px 10px;\n    @media screen and (min-width: 768px) {\n      padding: 10px 15px;\n    }\n    background-color: gainsboro;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n  .page {\n    padding: 5px 10px;\n    @media screen and (min-width: 768px) {\n      padding: 10px 15px;\n    }\n    background-color: gainsboro;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n  .disabled {\n    color: grey;\n  }\n  .active {\n    background-color: blue;\n    color: white;\n  }\n"]))),p=t(184),u=function(n){var e=n.pageCount,t=n.onPageChange;return(0,p.jsx)(s,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:e,onPageChange:t,renderOnZeroPageCount:null,containerClassName:"pagination",pageClassName:"page",activeClassName:"active",pageRangeDisplayed:3,marginPagesDisplayed:1})}},5415:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),i=t(4687),o=t.n(i),c=t(2791),s=t(9593),p=t(4672),u=t(4430),d=t(1362),l=t(5834),x=t(184);e.default=function(){var n=(0,c.useState)(1),e=(0,a.Z)(n,2),t=e[0],i=e[1],h=(0,c.useState)(0),g=(0,a.Z)(h,2),m=g[0],f=g[1],v=(0,c.useState)(!1),w=(0,a.Z)(v,2),b=w[0],Z=w[1],y=(0,c.useState)([]),k=(0,a.Z)(y,2),j=k[0],C=k[1],_=(0,c.useState)(null),S=(0,a.Z)(_,2),P=S[0],U=S[1];(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,u.wr)(e);case 4:t=n.sent,r=t.results,a=t.total_pages,C(r),f(a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),U("Error while loading data. Try again later.");case 14:return n.prev=14,Z(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]);return(0,x.jsx)("main",{children:P?(0,x.jsx)("p",{children:P}):(0,x.jsxs)(l.Z,{children:[(0,x.jsx)("h1",{style:{marginBottom:"20px"},children:"Trending movies"}),b&&(0,x.jsx)(d.Z,{}),(0,x.jsx)(p.Z,{movies:j}),(0,x.jsx)(s.Z,{pageCount:m,onPageChange:function(n){var e=n.selected;i(e+1);var t=20*e,r=t+20;C(j.slice(t,r))}})]})})}},4430:function(n,e,t){t.d(e,{Hx:function(){return f},Pv:function(){return d},Y5:function(){return x},uV:function(){return g},wr:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="https://api.themoviedb.org/3/",s="92d66af10495782dbf7116658cb2e14f";function p(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"trending/movie/week?api_key=").concat(s,"&language=en-US&page=").concat(e),n.next=4,o.Z.get(t);case 4:return r=n.sent,console.log(r.data.results),n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function d(n,e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e,t){var r,a,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new URLSearchParams({api_key:"92d66af10495782dbf7116658cb2e14f",query:t,page:e,include_adult:!1}),a="".concat(c,"search/movie?").concat(r),n.next=5,o.Z.get(a);case 5:return s=n.sent,n.abrupt("return",s.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"movie/").concat(e,"?api_key=").concat(s),n.next=4,o.Z.get(t);case 4:return r=n.sent,console.log(r),n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"),n.next=4,o.Z.get(t);case 4:return r=n.sent,console.log(r),n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),n.next=4,o.Z.get(t);case 4:return r=n.sent,console.log(r),n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.e5395087.chunk.js.map