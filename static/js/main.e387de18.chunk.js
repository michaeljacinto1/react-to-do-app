(this["webpackJsonpsample-project-react"]=this["webpackJsonpsample-project-react"]||[]).push([[0],{23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(11),i=a.n(c),u=(a(23),a(24),a.p+"static/media/Delete.ca4c9435.png"),r=(a(25),a(6)),d=a(1),o=Object(r.b)(null,(function(e){return{deleteTask:function(t){return e({type:"DELETE_TASK",payload:t})},markDoneTask:function(t){return e({type:"DONE_TASK",payload:t})}}}))((function(e){return Object(d.jsxs)("div",{className:"task",children:[Object(d.jsxs)("h4",{className:"taskName",children:[" ",e.name," "]}),Object(d.jsxs)("div",{className:"buttonsImg",children:[Object(d.jsx)("img",{src:u,alt:"Delete",className:"deleteBtn",onClick:function(){return e.deleteTask(e.id)}}),"pending"===e.status?Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"Done",className:"doneBtn",onClick:function(){return e.markDoneTask(e.task)}}):null]})]})})),j=a(7),l=(a(31),function(e){var t=e.tasks,a=e.title,s=e.deleteTask,n=e.markDoneTask,c=e.mainTasks;return Object(d.jsxs)(j.a,{className:"mainCard text-center",children:[Object(d.jsxs)(j.a.Header,{className:"cardHeader",children:[" ",Object(d.jsxs)("b",{children:[a,"(",t.length,")"]})]}),Object(d.jsx)(j.a.Body,{className:"cardBody",children:t.map((function(e){return Object(d.jsx)(o,{task:e,name:e.name,id:e.id,status:e.status,mainTasks:c,deleteTask:s,markDoneTask:n},e.name)}))})]})}),b=a(10),m=a.p+"static/media/Logo.3b3b3a47.png",O=a(13),f=(a(32),Object(r.b)(null,(function(e){return{addNewTask:function(t){return e({type:"ADD_NEW_TASK",payload:t})}}}))((function(e){var t=Object(s.useState)(""),a=Object(b.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(""),u=Object(b.a)(i,2),r=u[0],o=u[1],j=Object(s.useState)(!1),l=Object(b.a)(j,2),f=l[0],p=l[1],h=Object(s.useState)(!1),x=Object(b.a)(h,2),k=x[0],w=x[1];return Object(d.jsx)("div",{className:"formWrapper",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("img",{src:m,alt:"Logo",className:"logo"}),Object(d.jsx)("h2",{className:"formTitle",children:e.title})]}),!0===k?Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",onChange:function(e){c(e.target.value),p(!1)},value:n,placeholder:"Add task"})}):null,!0===f?Object(d.jsx)("p",{className:"error",children:r}):null,!0!==k?Object(d.jsx)(O.a,{variant:"primary",className:"displayInputBtn",onClick:function(){o(""),w(!0),p(!1)},children:e.use}):Object(d.jsxs)("div",{children:[Object(d.jsx)(O.a,{variant:"outline-primary",className:"addTaskBtn",onClick:function(){""===n.trim()?(p(!0),o("This must be filled out")):e.tasks.some((function(e){return n.toLowerCase().trim()===e.name.toLowerCase()}))?(c(""),p(!0),o("Task already exists")):(c(""),w(!1),p(!1),e.addNewTask(n))},children:" Add Task "}),Object(d.jsx)(O.a,{variant:"outline-primary",className:"addTaskBtn",onClick:function(){c(""),w(!1),p(!1)},children:" Reset "})]})]})})}))),p=(a(33),function(){return Object(d.jsx)("div",{className:"headerDiv",children:Object(d.jsx)("h2",{className:"appName",children:" To Do App "})})}),h=(a(34),Object(r.b)((function(e){return{tasks:e.tasks}}))((function(e){var t=e.tasks.filter((function(e){return"pending"===e.status})),a=e.tasks.filter((function(e){return"done"===e.status}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsx)(f,{tasks:e.tasks,title:"Add tasks",use:"+"}),Object(d.jsxs)("div",{className:"displayTasks",children:[0!==t.length?Object(d.jsx)(l,{allTasks:e.tasks,tasks:t,title:"Pending Tasks"}):Object(d.jsxs)(j.a,{className:"emptyDisplay text-center",children:[" ",Object(d.jsx)("b",{children:"NO PENDING TASKS"})," "]}),0!==a.length?Object(d.jsx)(l,{tasks:a,title:"Done Tasks"}):Object(d.jsxs)(j.a,{className:"emptyDisplay text-center",children:[" ",Object(d.jsx)("b",{children:"NO DONE TASKS"})," "]})]})]})}))),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))},k=a(18),w=a(17),N=a(8),T=a(37),g={tasks:[{id:Object(T.a)(),name:"eat",status:"pending"},{id:Object(T.a)(),name:"code",status:"pending"},{id:Object(T.a)(),name:"sleep",status:"done"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_TASK":var a={id:Object(T.a)(),name:t.payload,status:"pending"};return Object(N.a)(Object(N.a)({},e),{},{tasks:[].concat(Object(w.a)(e.tasks),[a])});case"DELETE_TASK":var s,n=window.confirm("Are you sure to delete this task?");return!0!==n?e:(s=e.tasks.filter((function(e){return e.id!==t.payload})),Object(N.a)(Object(N.a)({},e),{},{tasks:s}));case"DONE_TASK":var c=t.payload,i=e.tasks.filter((function(e){return e.id!==c.id})),u={id:c.id,name:c.name,status:"done"},r=[].concat(Object(w.a)(i),[u]);return Object(N.a)(Object(N.a)({},e),{},{tasks:r});default:return e}},D=Object(k.a)(P);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(r.a,{store:D,children:Object(d.jsx)(h,{})})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.e387de18.chunk.js.map