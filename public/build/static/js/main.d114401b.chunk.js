(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,a,n){e.exports=n.p+"static/media/logo.63c768b2.jpg"},42:function(e,a,n){e.exports=n(58)},47:function(e,a,n){},48:function(e,a,n){},58:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(33),r=n.n(l),s=(n(47),n(48),n(34)),m=n.n(s),u=n(17),i=n(21),o=n(19),h=n(35),E=n.n(h),g=n(22),d=n.n(g),p=n(16),b=function(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:d()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(E.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(p.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))},_=function(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-3 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-3 bg-danger"})," = Failure"))};function f(){var e=Object(i.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return f=function(){return e},e}var N=Object(u.b)(f()),v=function(){var e=Object(o.a)(N),a=e.loading,n=e.error,l=e.data;return a?c.a.createElement(t.Fragment,null,c.a.createElement("h4",null,"Loading...")):(n&&console.log(n),c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(_,null),c.a.createElement(t.Fragment,null,l.launches.map((function(e){return c.a.createElement(b,{key:e.flight_number,launch:e})})))))};function y(){var e=Object(i.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return y=function(){return e},e}var k=Object(u.b)(y()),w=function(e){var a=e.match.params.flight_number;a=parseInt(a);var n=Object(o.a)(k,{variables:{flight_number:a}}),l=n.loading,r=n.error,s=n.data;if(l)return c.a.createElement(t.Fragment,null,c.a.createElement("h4",null,"Loading..."));r&&console.log(r);var m=s.launch,u=m.mission_name,i=m.launch_year,h=m.launch_success,E=m.rocket,g=E.rocket_id,b=E.rocket_name,_=E.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission: "),u),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",a),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",i),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:d()({"text-success":h,"text-danger":!h})},h?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",g),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",b),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",_)),c.a.createElement("hr",null),c.a.createElement(p.b,{to:"/",className:"btn btn-secondary"},"Back"))},x=n(14),L=n(8),j=new u.a({uri:"/graphql"});var D=function(){return c.a.createElement(L.a,{client:j},c.a.createElement(p.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:m.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(x.a,{exact:!0,path:"/",component:v}),c.a.createElement(x.a,{exact:!0,path:"/launch/:flight_number",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.d114401b.chunk.js.map