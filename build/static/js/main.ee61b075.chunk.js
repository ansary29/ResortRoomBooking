(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{160:function(e,t,c){},161:function(e,t,c){},274:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(22),r=c.n(s),o=(c(160),c(161),c(1));var l=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{class:"navbar navbar-expand-lg",children:[Object(o.jsx)("a",{class:"navbar-brand",href:"/home",children:"Room Bookings"}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon",children:Object(o.jsx)("i",{className:"fa fa-bars",style:{color:"white"}})})}),Object(o.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsx)("ul",{class:"navbar-nav mr-5",children:e?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"dropdown",children:[Object(o.jsxs)("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(o.jsx)("i",{class:"fas fa-user"}),e.name]}),Object(o.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(o.jsx)("a",{class:"dropdown-item",href:"/profile",children:"Profile"}),Object(o.jsx)("a",{class:"dropdown-item",href:"/#",onClick:function(){localStorage.removeItem("currentUser"),window.location.href="/login"},children:"Logout"})]})]})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{class:"nav-item active",children:Object(o.jsx)("a",{class:"nav-link",href:"/register",children:"Register"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/login",children:"Login"})})]})})})]})})},i=c(61),j=c(19),b=c(112),d=c(14),u=c.n(d),O=c(21),h=c(2),x=c(23),m=c.n(x),p=c(281),f=c(283),v=c(279);var g=function(e){var t=e.room,c=e.fromDate,n=e.toDate,s=Object(a.useState)(!1),r=Object(h.a)(s,2),l=r[0],j=r[1],b=function(){return j(!1)};return Object(o.jsxs)("div",{className:"row bs room",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("img",{src:t.imageurls[0],className:"smallimg",alt:"txt"})}),Object(o.jsxs)("div",{className:"col-md-7",children:[Object(o.jsx)("h1",{style:{color:"#203A43"},children:t.name}),Object(o.jsxs)("b",{children:[Object(o.jsxs)("p",{children:["Max Count : ",t.maxcount]}),Object(o.jsxs)("p",{children:["Phone Number : ",t.phonenumber]}),Object(o.jsxs)("p",{children:["Type : ",t.type]})]}),Object(o.jsxs)("div",{style:{float:"right"},children:[c&&n&&Object(o.jsx)(i.b,{to:"/book/".concat(t._id,"/").concat(c,"/").concat(n),children:Object(o.jsx)("button",{className:"btn btn-own",children:"Book now"})}),Object(o.jsx)("button",{className:"btn btn-own",onClick:function(){return j(!0)},children:"View Details"})]})]}),Object(o.jsxs)(p.a,{show:l,onHide:b,size:"lg",children:[Object(o.jsx)(p.a.Header,{children:Object(o.jsx)(p.a.Title,{style:{color:"#203A43"},children:t.name})}),Object(o.jsxs)(p.a.Body,{children:[Object(o.jsx)(f.a,{prevLabel:"",nextLabel:"",children:t.imageurls.map((function(e){return Object(o.jsx)(f.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100 bigimg",src:e,alt:"txt"})})}))}),Object(o.jsx)("p",{children:t.description})]}),Object(o.jsx)(p.a.Footer,{children:Object(o.jsx)(v.a,{variant:"secondary",onClick:b,style:{color:"#000"},children:"Close"})})]})]})},N=c(140),w=c.n(N);var y=function(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),c=t[0];return t[1],Object(o.jsx)("div",{style:{marginTop:"150px"},children:Object(o.jsx)("div",{className:"sweet-loading text-center",children:Object(o.jsx)(w.a,{color:"#000",loading:c,css:"",size:80})})})};var S=function(e){var t=e.message;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"alert alert-danger",role:"alert",children:t})})},k=(c(195),c(280)),D=c(16),Y=c.n(D),C=k.a.RangePicker;var M=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(),d=Object(h.a)(j,2),x=(d[0],d[1]),p=Object(a.useState)(),f=Object(h.a)(p,2),v=f[0],N=f[1],w=Object(a.useState)(),S=Object(h.a)(w,2),k=S[0],D=S[1],M=Object(a.useState)(),I=Object(h.a)(M,2),A=I[0],R=I[1],B=Object(a.useState)(""),E=Object(h.a)(B,2),L=E[0],P=E[1],T=Object(a.useState)("all"),U=Object(h.a)(T,2),F=U[0],J=U[1];return Object(a.useEffect)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,m.a.get("/api/rooms/getallrooms");case 4:t=e.sent.data,n(t),R(t),i(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),x(!0),console.log(e.t0),i(!1);case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(o.jsxs)("div",{className:"container",style:{color:"#b0128e"},children:[Object(o.jsxs)("div",{className:"row mt-5 bs",children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(C,{format:"DD-MM-YYYY",onChange:function(e){N(Y()(e[0]).format("DD-MM-YYYY")),D(Y()(e[1]).format("DD-MM-YYYY"));var t,c=[],a=Object(b.a)(A);try{for(a.s();!(t=a.n()).done;){var s=t.value,r=!1;if(s.currentbookings.length>0){var o,l=Object(b.a)(s.currentbookings);try{for(l.s();!(o=l.n()).done;){var i=o.value;Y()(Y()(e[0]).format("DD-MM-YYYY")).isBetween(i.fromDate,i.toDate)||Y()(Y()(e[1]).format("DD-MM-YYYY")).isBetween(i.fromDate,i.toDate)||Y()(e[0]).format("DD-MM-YYYY")!==i.fromDate&&Y()(e[0]).format("DD-MM-YYYY")!==i.toDate&&Y()(e[1]).format("DD-MM-YYYY")!==i.fromDate&&Y()(e[1]).format("DD-MM-YYYY")!==i.toDate&&(r=!0)}}catch(j){l.e(j)}finally{l.f()}}(r||0===s.currentbookings.length)&&c.push(s),n(c)}}catch(j){a.e(j)}finally{a.f()}}})}),Object(o.jsx)("div",{className:"col-md-5",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Search rooms",value:L,onChange:function(e){P(e.target.value)},onKeyUp:function(){var e=A.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())}));n(e)}})}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsxs)("select",{className:"form-control",value:F,onChange:function(e){!function(e){if(J(e),"all"!==e){var t=A.filter((function(t){return t.type.toLowerCase()===e.toLowerCase()}));n(t)}else n(A)}(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"delux",children:"Delux"}),Object(o.jsx)("option",{value:"non-delux",children:"Non-Delux"})]})})]}),Object(o.jsx)("div",{className:"row justify-content-center mt-5",children:l?Object(o.jsx)(y,{}):c.map((function(e){return Object(o.jsx)("div",{className:"col-md-9 mt-3",children:Object(o.jsx)(g,{room:e,fromDate:v,toDate:k})})}))})]})},I=c(151),A=c.n(I),R=c(45),B=c.n(R);var E=function(e){var t=e.match,c=Object(a.useState)(!0),n=Object(h.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(),i=Object(h.a)(l,2),j=(i[0],i[1]),b=Object(a.useState)(),d=Object(h.a)(b,2),x=d[0],p=d[1],f=(t.params.roomid,Y()(t.params.fromDate,"DD-MM-YYYY")),v=Y()(t.params.toDate,"DD-MM-YYYY"),g=Y.a.duration(v.diff(f)).asDays()+1,N=Object(a.useState)(),w=Object(h.a)(N,2),k=w[0],D=w[1];function C(){return(C=Object(O.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c={room:x,userid:JSON.parse(localStorage.getItem("currentUser"))._id,fromDate:f,toDate:v,totalAmount:k,totalDays:g,token:t},e.prev=2,r(!0),e.next=6,m.a.post("/api/bookings/bookroom",c);case 6:e.sent,r(!1),B.a.fire("Congratulations","Your Room Booked Successfully","success").then((function(e){window.location.href="/profile"})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),r(!1),B.a.fire("OOps","Something went wrong","error");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(a.useEffect)(Object(O.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("currentUser")||(window.location.reload="/login"),e.prev=1,r(!0),e.next=5,m.a.post("/api/rooms/getroombyid",{roomid:t.params.roomid});case 5:c=e.sent.data,D(c.rentperday*g),p(c),r(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),r(!1),j(!0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])}))),[]),Object(o.jsx)("div",{className:"m-5",children:s?Object(o.jsx)(y,{}):x?Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row justify-content-center mt-5 bs",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h1",{style:{color:"#3443eb"},children:x.name}),Object(o.jsx)("img",{src:x.imageurls[0],className:"bigimg",alt:"img"})]}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsxs)("div",{style:{textAlign:"right"},children:[Object(o.jsx)("h1",{style:{color:"#203A43"},children:"Booking Details"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("b",{children:[Object(o.jsxs)("p",{children:["Name : ",JSON.parse(localStorage.getItem("currentUser")).name]}),Object(o.jsxs)("p",{children:["From Date : ",t.params.fromDate]}),Object(o.jsxs)("p",{children:["To Date : ",t.params.toDate]}),Object(o.jsxs)("p",{children:["Max Count : ",x.maxcount]})]})]}),Object(o.jsx)("div",{style:{textAlign:"right"},children:Object(o.jsxs)("b",{children:[Object(o.jsx)("h1",{children:"Amount : "}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:["Total Days : ",g]}),Object(o.jsxs)("p",{children:["Rent per Day : ",x.rentperday]}),Object(o.jsxs)("p",{children:["Total Amount : ",k]})]})}),Object(o.jsx)("div",{style:{float:"right"},children:Object(o.jsx)(A.a,{amount:100*k,token:function(e){return C.apply(this,arguments)},currency:"INR",stripeKey:"pk_test_51JQUDwE8TBaYgLGpfxcamVgstSVHFq3ll0C5nfn59FeJgKA17aApMerDLEp0x373ODYwaROWzOvnJP8bseBkzhzY00sr0ZhHPU",children:Object(o.jsx)("button",{className:"btn btn-own",children:"Pay Now"})})})]})]})}):Object(o.jsx)(S,{message:"Something went wrong. Try again."})})};var L=function(e){var t=e.message;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"alert alert-success",role:"alert",children:t})})};var P=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(""),b=Object(h.a)(j,2),d=b[0],x=b[1],p=Object(a.useState)(""),f=Object(h.a)(p,2),v=f[0],g=f[1],N=Object(a.useState)(!1),w=Object(h.a)(N,2),k=w[0],D=w[1],Y=Object(a.useState)(),C=Object(h.a)(Y,2),M=C[0],I=C[1],A=Object(a.useState)(),R=Object(h.a)(A,2),B=R[0],E=R[1];function P(){return(P=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d!==v){e.next=22;break}return t={name:c,email:l,password:d,cpassword:v},e.prev=2,D(!0),e.next=6,m.a.post("/api/users/register",t).data;case 6:e.sent,D(!1),E(!0),n(""),i(""),x(""),g(""),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),D(!1),I(!0);case 20:e.next=23;break;case 22:alert("Passwords not Match");case 23:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"register",children:[k&&Object(o.jsx)(y,{}),M&&Object(o.jsx)(S,{}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col-md-5 mt-5",children:[B&&Object(o.jsx)(L,{message:"Registration Success"}),Object(o.jsxs)("div",{className:"bs",children:[Object(o.jsx)("h2",{children:"Register"}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"name",value:c,onChange:function(e){n(e.target.value)}}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"email",value:l,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"password",value:d,onChange:function(e){x(e.target.value)}}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"confirm password",value:v,onChange:function(e){g(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-primary text-center mt-3",onClick:function(){return P.apply(this,arguments)},children:"Register"})]})]})})]})};var T=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(!1),b=Object(h.a)(j,2),d=b[0],x=b[1],p=Object(a.useState)(),f=Object(h.a)(p,2),v=f[0],g=f[1];function N(){return(N=Object(O.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:c,password:l},e.prev=1,x(!0),e.next=5,m.a.post("/api/users/login",t);case 5:a=e.sent.data,x(!1),localStorage.setItem("currentUser",JSON.stringify(a)),window.location.href="/home",e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),x(!1),g(!0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"login",children:[d&&Object(o.jsx)(y,{}),Object(o.jsx)("div",{className:"row justify-content-center mt-5",children:Object(o.jsxs)("div",{className:"col-md-5 mt-5",children:[v&&Object(o.jsx)(S,{message:"Invalid Credentials"}),Object(o.jsxs)("div",{className:"bs",children:[Object(o.jsx)("h2",{children:"Login"}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"email",value:c,onChange:function(e){n(e.target.value)}}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"password",value:l,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-primary mt-3",onClick:function(){return N.apply(this,arguments)},children:"Login"})]})]})})]})},U=c(282),F=c(153),J=U.a.TabPane;var _=function(){var e=JSON.parse(localStorage.getItem("currentUser"));return Object(a.useEffect)((function(){e||(window.location.href="/login")}),[]),Object(o.jsx)("div",{className:"ml-3 mt-3",style:{Color:"#3443eb"},children:Object(o.jsxs)(U.a,{defaultActiveKey:"1",children:[Object(o.jsxs)(J,{tab:"Profile",children:[Object(o.jsx)("h1",{children:"My Profile"}),Object(o.jsx)("br",{}),Object(o.jsxs)("h1",{children:["Name : ",e.name]}),Object(o.jsxs)("h1",{children:["Email : ",e.email]}),Object(o.jsxs)("h1",{children:["isAdmin : ",e.isAdmin?"YES":"NO"]})]},"1"),Object(o.jsx)(J,{tab:"Bookings",children:Object(o.jsx)(z,{})},"2")]})})};function z(){var e=JSON.parse(localStorage.getItem("currentUser")),t=Object(a.useState)([]),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!0),l=Object(h.a)(r,2),i=l[0],j=l[1],b=Object(a.useState)(),d=Object(h.a)(b,2),x=(d[0],d[1]);function p(){return(p=Object(O.a)(u.a.mark((function e(t,c){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,m.a.post("/api/bookings/cancelbooking",{bookingid:t,roomid:c});case 4:return e.next=6,e.sent.data;case 6:a=e.sent,console.log(a),j(!1),B.a.fire("Cancelled","Your booking has been cancelled","success").then((function(e){window.location.reload()})),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),j(!1),B.a.fire("OOps","Something went wrong","error");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.useEffect)(Object(O.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(!0),t.next=4,m.a.post("/api/bookings/getbookingsbyuserid",{userid:e._id});case 4:return t.next=6,t.sent.data;case 6:c=t.sent,s(c),j(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),j(!1),x(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,11]])}))),[]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-6",children:[i&&Object(o.jsx)(y,{}),n&&n.map((function(e){return Object(o.jsxs)("div",{className:"bs",children:[Object(o.jsx)("h1",{children:e.room}),Object(o.jsxs)("p",{children:["Booking ID : ",e._id]}),Object(o.jsxs)("p",{children:["Transaction ID : ",e.transactionId]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Check In :"})," ",e.fromDate]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Check Out :"})," ",e.toDate]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Amount :"})," ",e.totalAmount]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Status :"})," : "," ","cancelled"===e.status?Object(o.jsx)(F.a,{color:"red",children:"CANCELLED"}):Object(o.jsx)(F.a,{color:"green",children:"CONFIRMED"})]}),"cancelled"!==e.status&&Object(o.jsx)("div",{className:"text-right",children:Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(e,t){p.apply(this,arguments)}(e._id,e.roomid)},children:"Cancel Booking"})})]})}))]})})})}var K=U.a.TabPane;var H=function(){return Object(a.useEffect)((function(){JSON.parse(localStorage.getItem("currentUser")).isAdmin||(window.location.href="/home")}),[]),Object(o.jsxs)("div",{className:"ml-3 mr-3 mt-3 bs",children:[Object(o.jsx)("h1",{className:"text-center",children:Object(o.jsx)("b",{style:{fontSize:"33px"},children:"Admin Panel"})}),Object(o.jsxs)(U.a,{defaultActiveKey:"1",children:[Object(o.jsx)(K,{tab:"Bookings",children:Object(o.jsx)(V,{})},"1"),Object(o.jsx)(K,{tab:"Rooms",children:Object(o.jsx)(G,{})},"2"),Object(o.jsx)(K,{tab:"Add Room",children:Object(o.jsx)(Q,{})},"3"),Object(o.jsx)(K,{tab:"Users",children:Object(o.jsx)(q,{})},"4")]})]})};function V(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(),b=Object(h.a)(j,2),d=(b[0],b[1]);return Object(a.useEffect)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/bookings/getallbookings");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),i(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),i(!1),d(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h1",{children:"Bookings"}),l&&Object(o.jsx)(y,{}),Object(o.jsxs)("table",{className:"table table-bordered table-dark",children:[Object(o.jsx)("thead",{className:"bs",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Booking ID"}),Object(o.jsx)("th",{children:"User ID"}),Object(o.jsx)("th",{children:"Room"}),Object(o.jsx)("th",{children:"From"}),Object(o.jsx)("th",{children:"To"}),Object(o.jsx)("th",{children:"Status"})]})}),Object(o.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",e._id," "]}),Object(o.jsxs)("td",{children:[" ",e.userid," "]}),Object(o.jsxs)("td",{children:[" ",e.room," "]}),Object(o.jsxs)("td",{children:[" ",e.fromDate," "]}),Object(o.jsxs)("td",{children:[" ",e.toDate," "]}),Object(o.jsxs)("td",{children:[" ",e.status," "]})]})}))})]})]})})}function G(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(),b=Object(h.a)(j,2),d=(b[0],b[1]);return Object(a.useEffect)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/rooms/getallrooms");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),i(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),i(!1),d(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h1",{children:"Rooms"}),l&&Object(o.jsx)(y,{}),Object(o.jsxs)("table",{className:"table table-bordered table-dark",children:[Object(o.jsx)("thead",{className:"bs",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Room ID"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Rent Per Day"}),Object(o.jsx)("th",{children:"Max Count"}),Object(o.jsx)("th",{children:"Phone Number"})]})}),Object(o.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",e._id," "]}),Object(o.jsxs)("td",{children:[" ",e.name," "]}),Object(o.jsxs)("td",{children:[" ",e.type," "]}),Object(o.jsxs)("td",{children:[" ",e.rentperday," "]}),Object(o.jsxs)("td",{children:[" ",e.maxcount," "]}),Object(o.jsxs)("td",{children:[" ",e.phonenumber," "]})]})}))})]})]})})}function q(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(),b=Object(h.a)(j,2),d=(b[0],b[1]);return Object(a.useEffect)(Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/users/getallusers");case 3:return e.next=5,e.sent.data;case 5:t=e.sent,n(t),i(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),i(!1),d(!0);case 15:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h1",{children:"Rooms"}),l&&Object(o.jsx)(y,{}),Object(o.jsxs)("table",{className:"table table-bordered table-dark",style:{color:"rgba(231, 77, 156, 0.8)"},children:[Object(o.jsx)("thead",{className:"bs",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"User ID"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Email"}),Object(o.jsx)("th",{children:"Is Admin"})]})}),Object(o.jsx)("tbody",{children:c.length&&c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",e._id," "]}),Object(o.jsxs)("td",{children:[" ",e.name," "]}),Object(o.jsxs)("td",{children:[" ",e.email," "]}),Object(o.jsxs)("td",{children:[" ",e.isAdmin?"YES":"NO"," "]})]})}))})]})]})})}function Q(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(h.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(),b=Object(h.a)(j,2),d=b[0],x=b[1],p=Object(a.useState)(),f=Object(h.a)(p,2),v=f[0],g=f[1],N=Object(a.useState)(),w=Object(h.a)(N,2),S=w[0],k=w[1],D=Object(a.useState)(),Y=Object(h.a)(D,2),C=Y[0],M=Y[1],I=Object(a.useState)(),A=Object(h.a)(I,2),R=A[0],E=A[1],L=Object(a.useState)(),P=Object(h.a)(L,2),T=P[0],U=P[1],F=Object(a.useState)(),J=Object(h.a)(F,2),_=J[0],z=J[1],K=Object(a.useState)(!1),H=Object(h.a)(K,2),V=H[0],G=H[1],q=Object(a.useState)(),Q=Object(h.a)(q,2);Q[0],Q[1];function W(){return(W=Object(O.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:c,rentperday:l,maxcount:d,description:v,phonenumber:S,type:C,imageurls:[R,T,_]},e.prev=1,G(!0),e.next=5,m.a.post("/api/rooms/addroom",t);case 5:return e.next=7,e.sent.data;case 7:a=e.sent,console.log(a),G(!1),B.a.fire("Congratulations","Room Added Successfully","success").then((function(e){window.location.href="/home"})),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0),G(!1),B.a.fire("OOps","Something went wrong","error");case 18:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-5",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"room name",value:c,onChange:function(e){n(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"rent per day",value:l,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"max count",value:d,onChange:function(e){x(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"description",value:v,onChange:function(e){g(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"phone number",value:S,onChange:function(e){k(e.target.value)}})]}),Object(o.jsxs)("div",{className:"col-md-5",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Deluxe / Non-Deluxe",value:C,onChange:function(e){M(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Image url 1",value:R,onChange:function(e){E(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Image url 2",value:T,onChange:function(e){U(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Image url 3",value:_,onChange:function(e){z(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-primary mt-3",style:{float:"right"},onClick:function(){return W.apply(this,arguments)},children:"Add Room"})]}),V&&Object(o.jsx)(y,{})]})}var W=function(){return Object(o.jsx)("div",{className:"Raw landing",children:Object(o.jsxs)("div",{className:"col-md-12 text-center cent",children:[Object(o.jsx)("h3",{children:"Resort Rooms Bookings"}),Object(o.jsx)(i.b,{to:"/home",children:Object(o.jsx)("button",{className:"btn btn-own",children:"Get Started"})})]})})};var Z=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j.a,{path:"/home",exact:!0,component:M}),Object(o.jsx)(j.a,{path:"/book/:roomid/:fromDate/:toDate",exact:!0,component:E}),Object(o.jsx)(j.a,{path:"/register",exact:!0,component:P}),Object(o.jsx)(j.a,{path:"/login",exact:!0,component:T}),Object(o.jsx)(j.a,{path:"/profile",exact:!0,component:_}),Object(o.jsx)(j.a,{path:"/admin",exact:!0,component:H}),Object(o.jsx)(j.a,{path:"/",exact:!0,component:W})]})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,285)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root")),X()}},[[274,1,2]]]);
//# sourceMappingURL=main.ee61b075.chunk.js.map