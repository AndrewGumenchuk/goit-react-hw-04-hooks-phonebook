(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),o=n.n(a),r=n(6),i=n.n(r),s=(n(13),n(7)),u=n(2);n(14);var l=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(c.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,o=e.number;return Object(c.jsxs)("li",{className:"item_contact",children:[Object(c.jsx)("p",{className:"item_text",children:a}),Object(c.jsx)("p",{className:"item_text",children:o}),Object(c.jsx)("button",{className:"item__buttom",onClick:function(){return n(t)},children:"delete"})]},t)}))})},j=n(20);n(15);var b=function(e){var t=e.onSubmit,n=Object(a.useState)(""),o=Object(u.a)(n,2),r=o[0],i=o[1],s=Object(a.useState)(""),l=Object(u.a)(s,2),j=l[0],b=l[1],m=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":b(c);break;default:return}},d=function(){i(""),b("")};return Object(c.jsxs)("form",{className:"item_form",onSubmit:function(e){e.preventDefault(),t(r,j),d()},children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{className:"item_input",type:"text",name:"name",placeholder:"Annie Copeland",value:r,onChange:m})]}),Object(c.jsxs)("label",{children:["Phone",Object(c.jsx)("input",{className:"item_input",type:"text",name:"number",placeholder:"111-11-11",value:j,onChange:m})]}),Object(c.jsx)("button",{type:"submit",disabled:""===r||""===j,children:"Save contact"})]})},m=(n(16),function(e){var t=e.value,n=e.onChangle;return Object(c.jsxs)("label",{className:"item_filter",children:[Object(c.jsx)("p",{className:"item_text-filter",children:"Contacts search"}),Object(c.jsx)("input",{className:"item_element",type:"text",value:t,onChange:n})]})});n(17);var d=function(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(u.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]}("contacts",[]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),d=i[0],f=i[1];return Object(c.jsxs)("div",{className:"Container",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(b,{onSubmit:function(e,t){if(n.find((function(t){return t.name===e})))alert("".concat(e," is already in contacts."));else{var c={id:Object(j.a)(),name:e,number:t};o((function(e){return[c].concat(Object(s.a)(e))}))}}}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(m,{value:d,onChangle:function(e){var t=e.target;f(t.value)}}),!n.length&&Object(c.jsx)("div",{children:"No contacts! Please add someone!"}),Object(c.jsx)(l,{contacts:function(){var e=d.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){o(n.filter((function(t){return t.id!==e})))}})]})};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1b6ea19a.chunk.js.map