(this.webpackJsonpmy_work=this.webpackJsonpmy_work||[]).push([[0],{12:function(e,n,t){e.exports=t(26)},17:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(3),l=t.n(u),o=(t(17),t(9)),m=t(4),c=t(5),i=t(6),s=t(10),b=t(7),d=t(11),h=t(8),f=t.n(h),p=function(e){var n=e.list,t=e.deleteContant;return r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.number),r.a.createElement("button",{type:"button",onClick:function(){return t(e.id)}},"Delete"))})))},C=function(e){var n=e.value,t=e.onChange;return r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:n,onChange:t,name:"filter"}))},E=function(e){var n=e.name,t=e.number,a=e.onSubmit,u=e.onChange;return r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",value:n,onChange:u,name:"name"}),r.a.createElement("input",{type:"number",value:t,onChange:u,name:"number"}),r.a.createElement("button",{type:"submit"},"Add"))},v=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,u={id:f.a.generate(),name:a,number:r};t.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[u]),name:"",number:""}}))},t.deleteContant=function(e){t.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state,n=e.contacts,t=e.filter,a=e.name,u=e.number,l=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{name:a,number:u,onSubmit:this.handleSubmit,onChange:this.handleChange}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(C,{value:t,onChange:this.handleChange}),r.a.createElement(p,{list:l,deleteContant:this.deleteContant}))}}]),n}(a.Component);l.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f060bd19.chunk.js.map