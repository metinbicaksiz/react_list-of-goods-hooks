(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c,s=n(4),o=n.n(s),i=n(3),r=n(1),a=(n(9),n(10),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var u=function(){var t=[].concat(l),e=Object(r.useState)(c.NONE),n=Object(i.a)(e,2),s=n[0],o=n[1],u=Object(r.useState)(!1),b=Object(i.a)(u,2),h=b[0],j=b[1];return t.sort((function(t,e){switch(s){case c.LENGTH:return t.length-e.length;case c.ALPHABET:return t.localeCompare(e);default:return 0}})),h&&t.reverse(),Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:"button is-info ".concat(s!==c.ALPHABET?"is-light":""),onClick:function(){return o(c.ALPHABET)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-success ".concat(s!==c.LENGTH?"is-light":""),onClick:function(){return o(c.LENGTH)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button is-warning ".concat(!1===h?"is-light":""),onClick:function(){return j(!h)},children:"Reverse"}),t[0]!==l[0]&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){o(c.NONE),j(!1)},children:"Reset"})]}),Object(a.jsx)("ul",{children:Object(a.jsx)("ul",{children:t.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(a.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9c5a9f72.chunk.js.map