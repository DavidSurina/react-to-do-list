(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(0),o=n(1),a=n.n(o),c=n(7),i=n.n(c),d=(n(14),n(4)),r=n(5),u=(n(15),n(8));n(16);function j(t){var e=t.todo,n=t.todoList,o=t.setTodoList;return Object(s.jsxs)("div",{id:e.id,className:"task",children:[Object(s.jsx)("p",{className:!0===e.isDone?"task-desc finished":"task-desc to-finish",children:e.task},e.id),Object(s.jsx)("button",Object(u.a)({onClick:function(){var t=n.map((function(t){return t.id===e.id?(!0===t.isDone?t.isDone=!1:t.isDone=!0,t):t}));o(t)},className:"task-button fas fa-check"},"className",!1===e.isDone?"task-button fas fa-check":"task-button fas fa-undo")),Object(s.jsx)("button",{onClick:function(t){n.map((function(e){if(e.id===parseInt(t.target.parentNode.id)){var s=n.indexOf(e);n.splice(s,1)}console.log(n)})),o(Object(d.a)(n))},className:"task-button far fa-trash-alt"})]})}n(17);function f(t){var e=t.todoList,n=t.setTodoList;return Object(s.jsx)("div",{className:"task-wrapper",children:e.map((function(t){return Object(s.jsx)(j,{todo:t,todoList:e,setTodoList:function(t){return n(t)}})}))})}n(18);function b(t){var e=t.input,n=t.setInput,o=t.addTodo;return Object(s.jsxs)("form",{className:"task-form",children:[Object(s.jsx)("input",{id:"input-field",type:"text",minLength:"10",maxLength:"45",placeholder:"What do you want to do?",required:!0,value:e,onChange:function(t){return n(t.target.value)}}),Object(s.jsx)("button",{className:"submit-button",onClick:o,children:"Add"})]})}function l(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)(""),i=Object(r.a)(c,2),u=i[0],j=i[1],l=Object(o.useState)(0),O=Object(r.a)(l,2),h=O[0],p=O[1];return Object(s.jsxs)("div",{className:"to-do-list",children:[Object(s.jsx)("h1",{className:"main-heading",children:"TODO List"}),Object(s.jsx)(b,{addTodo:function(){if(u){p(++h);var t={id:h,task:u,isDone:!1};a([].concat(Object(d.a)(n),[t])),j("")}},input:u,setInput:function(t){return j(t)}}),Object(s.jsx)(f,{todoList:n,setTodoList:function(t){return a(t)}})]})}i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ba4adacb.chunk.js.map