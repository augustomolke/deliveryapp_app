(this.webpackJsonpdeliveryapp=this.webpackJsonpdeliveryapp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),i=(a(89),a(28)),o=(a(90),a(80)),l=a(8),j=a(14),d=a(24),b=a.n(d),u={getUsers:function(){return b.a.get("https://deliveryapp-api.herokuapp.com/api/users?page=0&limit=30&name=")},createUser:function(e){return b.a.post("https://deliveryapp-api.herokuapp.com/api/users",e)},getUserById:function(e){return b.a.get("https://deliveryapp-api.herokuapp.com/api/users/"+e)},deleteUser:function(e){return b.a.delete("https://deliveryapp-api.herokuapp.com/api/users/"+e)},updateUser:function(e,t){return b.a.put("https://deliveryapp-api.herokuapp.com/api/users/"+e,t)}},h=a(9),p=a(23),m=a(41),O=a(3);function x(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(O.jsx)(m.a,{style:{width:"18rem"},children:Object(O.jsxs)(h.a,{onSubmit:function(e){console.log(a),e.preventDefault(),u.createUser(a).then((function(e){console.log(e)}),(function(e){return console.log("deu erro!!!",e)}))},children:[Object(O.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(O.jsx)(h.a.Label,{children:"Email address"}),Object(O.jsx)(h.a.Control,{type:"name",placeholder:"Enter name",value:a.name,onChange:function(e){r(Object(j.a)(Object(j.a)({},a),{},{name:e.target.value}))}})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Email address"}),Object(O.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",value:a.email,onChange:function(e){r(Object(j.a)(Object(j.a)({},a),{},{email:e.target.value}))}}),Object(O.jsx)(h.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(h.a.Label,{children:"Password"}),Object(O.jsx)(h.a.Control,{type:"password",placeholder:"Password",value:a.password,onChange:function(e){r(Object(j.a)(Object(j.a)({},a),{},{password:e.target.value}))}})]}),Object(O.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})}a(113);var g=a(26),f=a(25),v=a(64),y=a(31),w=a.p+"static/media/watermelon-icon.14c6f06f.png",C=a(82),k=a(81),L=function(){return JSON.parse(localStorage.getItem("user"))},S={login:function(e){return b.a.post("https://deliveryapp-api.herokuapp.com/api/users/login",e)},logout:function(e){return b.a.post("https://deliveryapp-api.herokuapp.com/api/users/logout",{},e)},getCurrentUser:L,authHeader:function(){var e=L();return e&&e.token?{headers:{authorization:e.token}}:{}},hasPermission:function(e){return L().data.permissions==e}},N=a(84),I=a(77);function P(e){var t=e.handleLogin,a=Object(n.useState)({email:"",password:""}),r=Object(i.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(!1),d=Object(i.a)(o,2),b=d[0],u=d[1],x=Object(n.useState)(!1),g=Object(i.a)(x,2),f=g[0],v=g[1],y=Object(l.useHistory)();return Object(O.jsx)(m.a,{bsPrefix:"card center melonborder",style:{width:"255px",height:"286px"},children:f?Object(O.jsx)(I.a,{animation:"border",role:"status",variant:"success"}):Object(O.jsxs)(h.a,{className:"center",onSubmit:function(e){v(!0),e.preventDefault(),S.login(s).then((function(e){localStorage.setItem("user",JSON.stringify(e.data)),t(),y.push("/")}),(function(e){console.log(e.message),u(e.message),v(!1)}))},children:[Object(O.jsxs)(h.a.Group,{className:"mb-3 center",controlId:"formBasicEmail",children:[Object(O.jsx)(h.a.Label,{children:"Email address"}),Object(O.jsx)(h.a.Control,{type:"email",placeholder:"Enter email",value:s.email,onChange:function(e){c(Object(j.a)(Object(j.a)({},s),{},{email:e.target.value}))}}),Object(O.jsx)(h.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(O.jsxs)(h.a.Group,{className:"mb-3 center",controlId:"formBasicPassword",children:[Object(O.jsx)(h.a.Label,{children:"Password"}),Object(O.jsx)(h.a.Control,{type:"password",placeholder:"Password",value:s.password,onChange:function(e){c(Object(j.a)(Object(j.a)({},s),{},{password:e.target.value}))}})]}),b&&Object(O.jsx)(N.a,{variant:"danger",children:" Invalid Credentials!"}),Object(O.jsx)(p.a,{variant:"success",type:"submit",children:"Submit"})]})})}function U(e){var t=e.handleLogout,a=Object(l.useHistory)();return Object(O.jsx)(f.a.Item,{onClick:function(){var e=S.authHeader();S.logout(e).then((function(e){localStorage.removeItem("user"),t(),a.push("/")}),(function(e){return Object(O.jsx)("label",{children:e})}))},children:"Logout"})}var B=a(35),E=a.n(B),H=function(e){var t=e.authStatus,a=e.handleLogout,n=e.handleLogin,r=Object(O.jsx)(C.a,{id:"popover-basic",children:Object(O.jsx)(P,{handleLogin:n})});return t?Object(O.jsx)(g.a,{bg:"green",expand:"lg",variant:"dark",sticky:"top",collapseOnSelect:!0,children:Object(O.jsxs)(v.a,{children:[Object(O.jsxs)(g.a.Brand,{bsPrefix:"navbar-brand brandFont",as:E.a,to:"/",children:[Object(O.jsx)("img",{src:w,width:"30px",height:"30px"}),"Melon"]}),Object(O.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(y.a,{className:"me-auto",children:[Object(O.jsx)(y.a.Link,{as:E.a,to:"/",children:"Home"}),Object(O.jsx)(y.a.Link,{as:E.a,to:"/restaurants",children:"Restaurants"}),Object(O.jsxs)(f.a,{title:"My Account",id:"basic-nav-dropdown",children:[Object(O.jsx)(f.a.Item,{href:"#action/3.1",children:"Change my Data"}),Object(O.jsx)(f.a.Item,{href:"#action/3.2",children:"My Orders"}),Object(O.jsx)(f.a.Item,{href:"#action/3.2",children:"Help"}),Object(O.jsx)(f.a.Divider,{}),Object(O.jsx)(U,{handleLogout:a})]})]})})]})}):Object(O.jsx)(g.a,{bg:"green",expand:"lg",variant:"dark",sticky:"top",collapseOnSelect:!0,children:Object(O.jsxs)(v.a,{children:[Object(O.jsxs)(g.a.Brand,{bsPrefix:"navbar-brand brandFont",as:E.a,to:"/",children:[Object(O.jsx)("img",{src:w,width:"30px",height:"30px"}),"Melon"]}),Object(O.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(y.a,{className:"me-auto",children:[Object(O.jsx)(y.a.Link,{as:E.a,to:"/",children:"Home"}),Object(O.jsx)(y.a.Link,{as:E.a,to:"/createuser",children:"Create an Account"}),Object(O.jsx)(k.a,{trigger:"click",placement:"bottom",overlay:r,children:Object(O.jsx)(y.a.Link,{children:"Login"})}),Object(O.jsxs)(f.a,{title:"More",id:"basic-nav-dropdown",children:[Object(O.jsx)(f.a.Item,{href:"#action/3.2",children:"Help"}),Object(O.jsx)(f.a.Item,{href:"#action/3.2",children:"Contact Us!"})]})]})})]})})},M=a(83),T=["component"],F=function(e){var t=e.split(", ");return(t=t.filter((function(e){return S.hasPermission(e)}))).length>0},D=function(e){var t=e.component,a=Object(M.a)(e,T);return Object(O.jsx)(l.Route,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return S.getCurrentUser()&&F(a.permissions)?Object(O.jsx)(t,Object(j.a)({},e)):Object(O.jsx)(l.Redirect,{to:{pathname:"/login",state:{from:e.location}}})}}))},A=a(65),G=a.p+"static/media/undraw_breakfast_psiw.fdfbdb40.svg",R=a.p+"static/media/undraw_Hamburger_8ge6.f04a3704.svg",J=a(79),_=a(43),z=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A.a,{className:"center",bsPrefix:"jumbotron bg-neongreen homecontent",children:Object(O.jsxs)(J.a,{children:[Object(O.jsxs)(_.a,{className:"center",children:[Object(O.jsx)("h1",{children:"Uma frase de efeito!"}),Object(O.jsxs)("p",{children:["Alguma frase legal para atrair leads",Object(O.jsx)("strong",{children:" atrav\xe9s de uma informa\xe7\xe3o relevante "}),"e um bot\xe3o para criar conta."]}),Object(O.jsx)("p",{children:Object(O.jsx)(p.a,{bsPrefix:"btn",variant:"success",children:Object(O.jsx)("strong",{children:"Sign up!"})})})]}),Object(O.jsx)(_.a,{children:Object(O.jsx)("img",{className:"img-fluid",src:G})})]})}),Object(O.jsxs)(A.a,{bsPrefix:"jumbotron bg-rosequartz homecontent",children:[Object(O.jsx)("h1",{children:"Hello, world!"}),Object(O.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(O.jsx)("img",{className:"img-fluid",src:R})]})]})};var W=function(){var e=Object(n.useState)(!!S.getCurrentUser()),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(H,{authStatus:a,handleLogout:function(){r(!1)},handleLogin:function(){r(!0)}}),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(l.Switch,{children:[Object(O.jsx)(l.Route,{exact:!0,path:"/",children:Object(O.jsx)(z,{})}),Object(O.jsx)(l.Route,{path:"/createuser",children:Object(O.jsx)(x,{})}),Object(O.jsx)(D,{path:"/mydata",component:Object(O.jsx)("h1",{children:"My data private!!!"}),permissions:"CLIENT, ADMIN"})]})})})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,126)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root")),q()},89:function(e,t,a){},90:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.3555c5e9.chunk.js.map