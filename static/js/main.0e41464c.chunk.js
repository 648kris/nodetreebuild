(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){e.exports=n(249)},116:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",function(){return ae});var l=n(0),r=n.n(l),o=n(26),c=n.n(o),i=n(54),s=n(30),u=n(101),p=n(18),m=n(19),h=n(21),d=n(20),f=n(22),b=n(251),E=n(252),O=(n(116),n(35)),C=n(104),v=n.n(C),j=n(25),y=n.n(j),g=n(23),k=n.n(g),w=n(24),V=n.n(w),S=n(50),x=n.n(S),L=n(48),N=n.n(L),A=n(49),I=n.n(A),R=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleClick=function(){n.setState(function(e){return{open:!e.open}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(y.a,{component:"nav",className:e.root},r.a.createElement(k.a,{button:!0,onClick:this.handleClick},r.a.createElement(V.a,{inset:!0,primary:"user set name"}),this.state.open?r.a.createElement(N.a,null):r.a.createElement(I.a,null)),r.a.createElement(x.a,{in:this.state.open,timeout:"auto",unmountOnExit:!0},r.a.createElement(y.a,{component:"div",disablePadding:!0},r.a.createElement(k.a,{button:!0,className:e.nested},r.a.createElement(V.a,{inset:!0,primary:"random number"})))))}}]),t}(r.a.Component),D=Object(O.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:4*e.spacing.unit}}})(R),G=n(102),B=n.n(G),F=n(103),J=n.n(F),M=n(27),P=n.n(M),U=n(31),W=n.n(U);var q=Object(O.withStyles)({root:{flexGrow:1,paddingBottom:"2vh"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(B.a,{position:"static"},r.a.createElement(J.a,null,r.a.createElement(P.a,{variant:"h6",color:"inherit",className:t.grow},"Kristen's App for Passport"),r.a.createElement(W.a,{color:"inherit"},r.a.createElement("a",{href:"/v1/auth/google",style:{color:"white",textDecoration:"none"}}," Login with Google ")),r.a.createElement(W.a,{color:"inherit"},r.a.createElement("a",{href:"/v1/api/logout",style:{color:"white",textDecoration:"none"}}," Logout ")))))}),K=n(51),z=n(53),H=n.n(z),Q=n(52),T=n.n(Q),X=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClose=function(){n.props.onClose(n.props.selectedValue)},n.handleListItemClick=function(e){n.props.onClose(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onClose,t.selectedValue,Object(K.a)(t,["onClose","selectedValue"]));return r.a.createElement(T.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},n),r.a.createElement(H.a,{id:"simple-dialog-title"},"Root Options"),r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(k.a,{button:!0,onClick:function(){return e.handleListItemClick("createFactory")}},r.a.createElement(V.a,{primary:"create new factory"})))))}}]),t}(r.a.Component),Y=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(e){n.setState({selectedValue:e,open:!1})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{variant:"subtitle1"},"Selected: ",this.state.selectedValue),r.a.createElement("br",null),r.a.createElement(W.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Root Options"),r.a.createElement(X,{selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleClose}))}}]),t}(r.a.Component),Z=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClose=function(){n.props.onClose(n.props.selectedValue)},n.handleListItemClick=function(e){n.props.onClose(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onClose,t.selectedValue,Object(K.a)(t,["onClose","selectedValue"]));return r.a.createElement(T.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},n),r.a.createElement(H.a,{id:"simple-dialog-title"},"Node Options"),r.a.createElement("div",null,r.a.createElement(y.a,null,r.a.createElement(k.a,{button:!0,onClick:function(){return e.handleListItemClick("updateFactories")}},r.a.createElement(V.a,{primary:"generate new factories"})),r.a.createElement(k.a,{button:!0,onClick:function(){return e.handleListItemClick("updateName")}},r.a.createElement(V.a,{primary:"change name"})),r.a.createElement(k.a,{button:!0,onClick:function(){return e.handleListItemClick("deleteNode")}},r.a.createElement(V.a,{primary:"delete node"})))))}}]),t}(r.a.Component),$=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(e){n.setState({selectedValue:e,open:!1})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{variant:"subtitle1"},"Selected: ",this.state.selectedValue),r.a.createElement("br",null),r.a.createElement(W.a,{variant:"outlined",color:"primary",onClick:this.handleClickOpen},"Node Options"),r.a.createElement(Z,{selectedValue:this.state.selectedValue,open:this.state.open,onClose:this.handleClose}))}}]),t}(r.a.Component),_=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleClick=function(e){console.log(e.type),n.setState(function(e){return{open:!e.open}})},n.handleRightClick=function(e){console.log(e.type),n.setState(function(e){return{open:!e.open}})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(y.a,{component:"nav",subheader:r.a.createElement(v.a,{component:"div"},"user generated factories"),className:e.root},r.a.createElement(k.a,{button:!0,onClick:this.handleClick,onContextMenu:this.handleRightClick},r.a.createElement(V.a,{inset:!0,primary:"Root"}),this.state.open?r.a.createElement(N.a,null):r.a.createElement(I.a,null)),r.a.createElement(x.a,{in:this.state.open,timeout:"auto",unmountOnExit:!0},r.a.createElement(D,null))),r.a.createElement(Y,null),r.a.createElement($,null))}}]),t}(r.a.Component),ee=Object(O.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:4*e.spacing.unit}}})(_),te=n(105),ne=n.n(te),ae=function(){return function(e){ne.a.get("/v1/api/currentuser").then(function(t){return e({type:"fetch-user",payload:t})})}},le=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return r.a.createElement("div",{id:"root"},r.a.createElement(b.a,null,r.a.createElement(E.a,{path:"/",exact:!0,component:ee})))}}]),t}(l.Component),re=Object(i.b)(null,a)(le),oe=(Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return console.log(t),t.type,e}}),Object(s.d)(function(){return[]},{},Object(s.a)(u.a)));c.a.render(r.a.createElement(i.a,{store:oe}," ",r.a.createElement(re,null)," "),document.querySelector("#root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.0e41464c.chunk.js.map