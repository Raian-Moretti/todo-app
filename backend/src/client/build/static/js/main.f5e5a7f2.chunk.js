(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,n){e.exports=n(77)},50:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),l=(n(48),n(49),n(50),function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"/#"},r.a.createElement("i",{className:"fa fa-calendar-check-o"})," TodoApp")),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse.show"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"/#todos"},"Tasks")),r.a.createElement("li",null,r.a.createElement("a",{href:"/#about"},"About"))))))}),o=n(38),s=n(10),u=function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("h2",null,e.name," ",r.a.createElement("small",null," ",e.small," ")," "))},m=n(17),d=n(18),p=n(22),E=n(20),h=n(19),f=n(21),b=n(12),v=n(7),O=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"toCssClasses",value:function(e){var t=e?e.split(""):[],n="";return t[0]&&(n+="col-xs-".concat(t[0])),t[1]&&(n+="col-sm-".concat(t[1])),t[2]&&(n+="col-md-".concat(t[2])),t[3]&&(n+="col-lg-".concat(t[3])),n}},{key:"render",value:function(){var e=this.toCssClasses(this.props.cols||12);return r.a.createElement("div",{className:e},this.props.children)}}]),t}(a.Component),y=function(e){return!!e.test&&e.children},k=function(e){return r.a.createElement(y,{test:!e.hide},r.a.createElement("button",{className:"btn btn-"+e.style,onClick:e.onClick},r.a.createElement("i",{className:"fa fa-"+e.icon})))},g=n(11),D=n(13),_=n.n(D),N="http://localhost:3001/api/todos",j=function(e){return{type:"DESCRIPTION_CHANGED",payload:e.target.value}},A=function(){return function(e,t){var n=t().todo.description,a=n?"&description__regex=/".concat(n,"/"):"";_.a.get("".concat(N,"?sort=-createdAt").concat(a)).then((function(t){return e({type:"TODO_SEARCHED",payload:t.data})}))}},C=function(e){return function(t){_.a.post(N,{description:e}).then((function(e){return t(q())})).then((function(e){return t(A())}))}},T=function(e){return function(t){_.a.put("".concat(N,"/").concat(e._id),Object(g.a)({},e,{done:!0})).then((function(e){return t({type:"TODO_MARKED_AS_DONE",payload:e.data})})).then((function(e){return t(A())}))}},S=function(e){return function(t){_.a.put("".concat(N,"/").concat(e._id),Object(g.a)({},e,{done:!1})).then((function(e){return t({type:"TODO_MARKED_AS_PENDING",payload:e.data})})).then((function(e){return t(A())}))}},R=function(e){return function(t){_.a.delete("".concat(N,"/").concat(e._id)).then((function(e){return t(A())}))}},q=function(){return[{type:"TODO_CLEAR"},A()]},w=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).keyHandler=n.keyHandler.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.props.search()}},{key:"keyHandler",value:function(e){var t=this.props,n=t.add,a=t.search,r=t.description,c=t.clear;"Enter"===e.key?e.shiftKey?a():n(r):"Escape"===e.key&&c()}},{key:"render",value:function(){var e=this.props,t=e.add,n=e.search,a=e.description,c=e.clear;return r.a.createElement("div",{role:"form",className:"todoForm"},r.a.createElement(O,{cols:"12 9 10"},r.a.createElement("input",{id:"description",className:"form-control",placeholder:"Add a task",onChange:this.props.changeDescription,onKeyUp:this.keyHandler,value:this.props.description})),r.a.createElement(O,{cols:"12 3 2"},r.a.createElement(k,{style:"success",icon:"plus",onClick:function(){return t(a)}}),r.a.createElement(k,{style:"primary",icon:"search",onClick:n}),r.a.createElement(k,{style:"danger",icon:"remove",onClick:function(){return c()}})))}}]),t}(a.Component),H=Object(b.b)((function(e){return{description:e.todo.description}}),(function(e){return Object(v.b)({add:C,changeDescription:j,search:A,clear:q},e)}))(w),I=Object(b.b)((function(e){return{list:e.todo.list}}),(function(e){return Object(v.b)({markAsDone:T,markAsPending:S,remove:R},e)}))((function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",{className:"tableActions"},"Actions"))),r.a.createElement("tbody",null,(e.list||[]).map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",{className:t.done?"markedAsDone":""},t.description),r.a.createElement("td",null,r.a.createElement(k,{style:"success",icon:"check",hide:t.done,onClick:function(){return e.markAsDone(t)}}),r.a.createElement(k,{style:"warning",icon:"undo",hide:!t.done,onClick:function(){return e.markAsPending(t)}}),r.a.createElement(k,{style:"danger",icon:"trash-o",hide:!t.done,onClick:function(){return e.remove(t)}})))}))))})),x=function(e){return r.a.createElement("div",null,r.a.createElement(u,{name:"Tasks",small:"Register"}),r.a.createElement(H,null),r.a.createElement(I,null))},U=function(e){return r.a.createElement("div",null,r.a.createElement(u,{name:"About",small:"Us"}),r.a.createElement("h2",null,"History"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("h2",null,"Mission"),r.a.createElement("p",null,"Eget nullam non nisi est sit amet facilisis. Tristique nulla aliquet enim tortor at. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Velit laoreet id donec ultrices tincidunt arcu non sodales. Nam libero justo laoreet sit. Orci phasellus egestas tellus rutrum. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Dui nunc mattis enim ut tellus elementum sagittis vitae. Vitae turpis massa sed elementum tempus egestas sed sed risus. Diam quam nulla porttitor massa id neque. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Et pharetra pharetra massa massa ultricies. Sed augue lacus viverra vitae congue eu. Ultricies leo integer malesuada nunc vel risus commodo. Sed tempus urna et pharetra pharetra."))},L=function(e){return r.a.createElement(o.a,null,r.a.createElement(s.b,{path:"/todos",component:x}),r.a.createElement(s.b,{path:"/about",component:U}),r.a.createElement(s.a,{from:"*",to:"/todos"}))},M=n(40),P=n.n(M),K=n(41),V=n.n(K),X=n(42),G={description:"",list:[]},J=Object(v.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DESCRIPTION_CHANGED":return Object(g.a)({},e,{description:t.payload});case"TODO_SEARCHED":return Object(g.a)({},e,{list:t.payload});case"TODO_CLEAR":return Object(g.a)({},e,{description:""});default:return e}}}),B=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),F=Object(v.a)(X.a,V.a,P.a)(v.d)(J,B);i.a.render(r.a.createElement(b.a,{store:F},r.a.createElement((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(l,null),r.a.createElement(L,null))}),null)),document.getElementById("app"))}},[[43,1,2]]]);
//# sourceMappingURL=main.f5e5a7f2.chunk.js.map