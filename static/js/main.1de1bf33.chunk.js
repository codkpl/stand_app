(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{127:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(20),n=c.n(s),a=c(18),r=c.n(a),j=c(26),d=c.n(j),h=c(30),o=c(22),b=c(7),l=(c(125),c(128)),O=c(129),u=c(130),p=c(131),x=c(132),m=c(6),f=function(){var e=useAdaptivity().viewWidth,t=Object(i.useState)("home"),c=Object(o.a)(t,2),s=c[0],n=c[1],a=Object(i.useState)(null),j=Object(o.a)(a,2),f=j[0],g=j[1],v=Object(i.useState)(Object(m.jsx)(b.k,{size:"large"})),y=Object(o.a)(v,2),_=y[0],w=y[1];Object(i.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,g(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,i=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=i.scheme?i.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){n(e.currentTarget.dataset.to)};return Object(m.jsx)(b.f,{isWebView:!0,scheme:scheme,children:Object(m.jsx)(b.a,{children:Object(m.jsx)(b.b,{children:Object(m.jsx)(SplitLayout,{header:Object(m.jsx)(b.i,{separator:!0}),children:Object(m.jsxs)(SplitCol,{spaced:e>b.o.MOBILE,children:[Object(m.jsxs)(b.n,{activePanel:s,popout:_,children:[Object(m.jsxs)(b.h,{id:"home",fetchedUser:f,go:k,children:[Object(m.jsx)(b.i,{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),f&&627581492===f.id&&Object(m.jsx)(b.g,{children:Object(m.jsxs)(b.e,{disabled:!0,before:f.photo_200?Object(m.jsx)(b.c,{src:f.photo_200,children:" "}):null,description:"Pro",children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ","".concat(f.first_name," ").concat(f.last_name),"!"]})}),f&&627581492!==f.id&&Object(m.jsx)(b.g,{children:Object(m.jsxs)(b.e,{disabled:!0,before:f.photo_200?Object(m.jsx)(b.c,{src:f.photo_200,children:" "}):null,description:f.id,children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, ","".concat(f.first_name," ").concat(f.last_name),"!"]})}),!f&&Object(m.jsx)(b.j,{icon:Object(m.jsx)(l.a,{width:56,height:56}),header:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",action:Object(m.jsx)(b.d,{size:"m",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0438\u0436\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c."})]}),Object(m.jsxs)(b.h,{id:"pay",go:k,children:[Object(m.jsx)(b.i,{children:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"}),Object(m.jsx)(b.j,{icon:Object(m.jsx)(O.a,{width:56,height:56}),header:"\u0423\u043f\u0441!",children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d."})]}),Object(m.jsxs)(b.h,{id:"rating",go:k,children:[Object(m.jsx)(b.i,{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}),Object(m.jsx)(b.j,{icon:Object(m.jsx)(O.a,{width:56,height:56}),header:"\u0423\u043f\u0441!",children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d."})]})]}),Object(m.jsxs)(b.l,{children:[Object(m.jsx)(b.m,{selected:"home"===s,onClick:k,"data-to":"home",text:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(m.jsx)(u.a,{})}),Object(m.jsx)(b.m,{selected:"pay"===s,onClick:k,"data-to":"pay",text:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430",children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(b.m,{selected:"rating"===s,onClick:k,"data-to":"rating",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",children:Object(m.jsx)(x.a,{})})]})]})})})})})};r.a.send("VKWebAppInit"),r.a.subscribe((function(e){var t=e.detail,c=t.type,i=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=i.scheme?i.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),n.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.1de1bf33.chunk.js.map