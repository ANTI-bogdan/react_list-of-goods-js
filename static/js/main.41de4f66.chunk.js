(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=n(1),a=n(3),u=n.n(a),l=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabet",h="length";var d=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(r.a)(c,2),d=a[0],p=a[1],g=function(t,e,n){var s=Object(i.a)(t);return e&&s.sort((function(t,n){switch(e){case j:return t.localeCompare(n);case h:return t[e]-n[e];default:return 0}})),n&&s.reverse(),s}(b,n,d);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==j}),onClick:function(){return s(j)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!d}),onClick:function(){return p(!d)},children:"Reverse"}),Object(l.jsx)("button",{type:"button",className:u()("button is-danger is-light",{"is-hidden":!n.length}),onClick:function(){return s("")},children:"Reset"})]}),Object(l.jsx)("ul",{children:g.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t})}))})]})};c.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.41de4f66.chunk.js.map