(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(200)},188:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);a(152),a(177);var n=a(0),o=a.n(n),r=a(47),c=a.n(r),i=a(26),l=a(89),s=a(20),u=a(9),p=a(6),d=a(40),m=a(29),h=a.n(m),b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},v=function(e,t){return t.access_token=fe.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,h.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.response}).catch(function(e){return e})},y=function(e){var t=fe.getState().router.activePanel,a=fe.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},O={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},g={forms:[]},E=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&h.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],b=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var v=m.shift();b=(m=[v])[m.length-1]}else if(i.length>1){var y=i.shift();s=(i=[y])[i.length-1],b=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:b,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,g=e.activePanel,E=e.activeStory,w=e.popouts;if(w[f])return w[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:w})});var j=e.modalHistory[f];if(void 0!==j&&0!==j.length){var k=j[j.length-2]||null;return null===k?j=[]:-1!==j.indexOf(k)?j=j.splice(0,j.indexOf(k)+1):j.push(k),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,k)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,j))})}var S=e.panelsHistory[f]||[],x=e.viewsHistory[e.activeStory]||[],_=e.storiesHistory;if(S.length>1)S.pop(),g=S[S.length-1];else if(x.length>1){x.pop(),f=x[x.length-1];var C=e.panelsHistory[f];g=C[C.length-1]}else if(_.length>1){_.pop(),E=_[_.length-1],f=e.viewsHistory[E][e.viewsHistory[E].length-1];var T=e.panelsHistory[f];g=T.length>1?T[T.length-1]:T[0]}else h.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===S.length&&h.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:f,activePanel:g,activeStory:E,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,x)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var A=t.payload.id||null,P=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===A?P=[]:-1!==P.indexOf(A)?P=P.splice(0,P.indexOf(A)+1):P.push(A),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,A)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,P))});case"CLOSE_MODAL":var H=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,D=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===H?D=[]:-1!==D.indexOf(H)?D=D.splice(0,D.indexOf(H)+1):D.push(H),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,H)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,D))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),w=a(91),j=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},k=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},S=function(){return{type:"GO_BACK"}},x=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},_=function(){return{type:"CLOSE_POPOUT"}},C=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},T=function(){return{type:"CLOSE_MODAL"}},A=(a(187),a(188),a(17)),P=a(18),H=a(21),D=a(19),V=a(22),B=a(3),M=a(206),I=a(207),F=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(V.a)(t,e),Object(P.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(B.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return o.a.createElement(B.t,{id:t},o.a.createElement(B.u,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement("br",null),o.a.createElement(B.k,{header:o.a.createElement(B.l,{mode:"secondary"},"\u0411\u0430\u043b\u0430\u043d\u0441")}),o.a.createElement("div",{className:"money"},"0",o.a.createElement("a",{className:"ruble"},"\u20bd")),o.a.createElement("br",null))}}]),t}(o.a.Component),L={setPage:k,goBack:S,openPopout:x,closePopout:_,openModal:C},N=Object(s.b)(null,L)(F),G=a(64),z=a.n(G),K=a(102),R=function(e){function t(){return Object(A.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(B.d,{description:r,before:o.a.createElement(B.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),W=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(R,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},U=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(H.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(V.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){h.a.send("VKWebAppGetAuthToken",{app_id:7772092,scope:e.join(",")}).then(function(e){t(b(e.access_token))}).catch(function(){t(b(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(K.a)(z.a.mark(function e(){var t,a,n;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,v("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=W(this.state.groups.admined),c=W(this.state.groups.other);return o.a.createElement(B.t,{id:a},o.a.createElement(B.u,{left:o.a.createElement(B.v,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(B.x,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(B.k,null,o.a.createElement(B.g,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(B.g,null,o.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(B.k,{header:o.a.createElement(B.l,{mode:"secondary"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435")},o.a.createElement(B.p,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(B.k,{header:o.a.createElement(B.l,{mode:"secondary"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435")},o.a.createElement(B.p,null,c)))}}]),t}(o.a.Component);var Y=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:S,openPopout:x,closePopout:_,openModal:C},e))})(U),J=a(201),q=a(202),X=a(203),Q=a(204),Z=a(205),$=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(H.a)(this,Object(D.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(V.a)(t,e),Object(P.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentDidMount",value:function(){!function(){var e=fe.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})}()}},{key:"showSn",value:function(){!1===this.showsneg.show&&(this.showsneg={namebutton:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d",show:!0}),!0===this.showsneg.show&&(this.showsneg={namebutton:"\u0412\u044b\u043a\u043b\u044e\u0447\u0435\u043d",show:!1})}},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage;return o.a.createElement(B.t,{id:t},o.a.createElement(B.u,{left:o.a.createElement(J.a,{onClick:function(){return j("settings","setngs")}})},"\u0415\u0449\u0451"),o.a.createElement(B.k,null,o.a.createElement("div",null,o.a.createElement(B.c,{href:"https://vk.com/gamecklicker",target:"_blank",style:{"line-height":"50px",margin:"30px auto",padding:"0 20px",background:"blue",color:"white","text-align":"center",border:"1px solid blue","-moz-box-shadow":"0 0 20px #555","-webkit-box-shadow":"0 0 20px #555","box-shadow":"0 0 20px blue","margin-bottom":"5px",width:"96%"},stretched:!0,className:"button-group",before:o.a.createElement(q.a,null)},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),o.a.createElement("div",null,o.a.createElement(B.c,{href:"https://vk.com/topic-203633937_47497056",target:"_blank",style:{"line-height":"50px",margin:"30px auto",padding:"0 20px",background:"#F2C40C",color:"white","text-align":"center",border:"1px solid #F2C40C","-moz-box-shadow":"0 0 20px #555","-webkit-box-shadow":"0 0 20px #555","box-shadow":"0 0 20px #F2C40C","margin-bottom":"5px",width:"96%"},stretched:!0,className:"button-group",before:o.a.createElement(X.a,null)},"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0438\u0434\u0435\u044f!")),o.a.createElement("div",null,o.a.createElement(B.c,{href:"https://vk.com/im?sel=-203633937",target:"_blank",style:{"line-height":"50px",margin:"30px auto",padding:"0 20px",background:"#DF3FF0",color:"white","text-align":"center",border:"1px solid #DF3FF0","-moz-box-shadow":"0 0 20px #555","-webkit-box-shadow":"0 0 20px #555","box-shadow":"0 0 20px #DF3FF0","margin-bottom":"5px",width:"96%"},stretched:!0,className:"button-group",before:o.a.createElement(Q.a,null)},"\u041e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b?")),o.a.createElement("div",null,o.a.createElement(B.c,{style:{"line-height":"50px",margin:"30px auto",padding:"0 20px",background:"#54D8CF",color:"white","text-align":"center",border:"1px solid #54D8CF","-moz-box-shadow":"0 0 20px #555","-webkit-box-shadow":"0 0 20px #555","box-shadow":"0 0 20px #54D8CF","margin-bottom":"5px",width:"96%"},stretched:!0,className:"button-group",disabled:"true",before:o.a.createElement(Z.a,null)},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u043d\u0435\u0433"))))}}]),t}(o.a.Component),ee={setPage:k,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}},openPopout:x,closePopout:_,openModal:C},te=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},ee)($),ae=function(e){function t(e){var a;Object(A.a)(this,t),a=Object(H.a)(this,Object(D.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(V.a)(t,e),Object(P.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(B.t,{id:t},o.a.createElement(B.u,{left:o.a.createElement(B.v,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(B.k,null,o.a.createElement(B.i,null,o.a.createElement(B.j,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(B.o,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(B.o,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(B.j,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(B.e,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(B.e,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(B.g,{className:"buttons-group"},o.a.createElement(B.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(B.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),ne={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:S},oe=Object(s.b)(function(e){return{inputData:e.formData.forms}},ne)(ae),re=a(49),ce=a.n(re),ie=a(38),le=a.n(ie),se=a(48),ue=a.n(se),pe=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Realm of War",avatar:"https://sun9-72.userapi.com/c853520/v853520591/1f167d/avj_z9yFtQA.jpg?ava=1",desc:"\u041d\u0435\u043d\u0430\u0432\u0438\u0436\u0443 \u0441\u043f\u043e\u0439\u043b\u0435\u0440\u044b."}],de=function(e){function t(){return Object(A.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal,r=e.platform;return o.a.createElement(B.q,{id:t,header:o.a.createElement(B.r,{left:r!==B.m&&o.a.createElement(B.w,{onClick:a},o.a.createElement(le.a,null)),right:r===B.m&&o.a.createElement(B.w,{onClick:a},o.a.createElement(ce.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(B.p,null,pe.map(function(e,t){return o.a.createElement(B.d,{key:t,description:e.desc,before:o.a.createElement(B.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(ue.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),me={openModal:C},he=Object(B.C)(Object(s.b)(null,me)(de)),be=function(e){function t(){return Object(A.a)(this,t),Object(H.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.platform;return o.a.createElement(B.q,{id:t,header:o.a.createElement(B.r,{left:n!==B.m&&o.a.createElement(B.w,{onClick:a},o.a.createElement(le.a,null)),right:n===B.m&&o.a.createElement(B.w,{onClick:a},o.a.createElement(ce.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(B.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(B.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(B.p,null,o.a.createElement(B.d,null,o.a.createElement(B.n,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(B.d,null,o.a.createElement(B.n,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(B.d,null,o.a.createElement(B.n,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),ve=Object(B.C)(Object(s.b)()(be)),ye=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(H.a)(this,Object(D.a)(t).call(this,e))).lastAndroidBackAction=0,a.showsneg=0,a}return Object(V.a)(t,e),Object(P.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){return h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),h.a.send("VKWebAppInit",{}).then(function(e){return e}).catch(function(e){return e})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activeModals,s=e.panelsHistory,u=e.colorScheme,p=void 0===s[c]?[c]:s[c],d=void 0===r[c]?null:r[c],m=void 0===l[c]?null:l[c],h=o.a.createElement(B.s,{activeModal:m},o.a.createElement(he,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(ve,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(B.f,{isWebView:!0,scheme:u},o.a.createElement(B.h,{activeStory:i,tabbar:o.a.createElement(B.z,null,o.a.createElement(B.A,{onClick:function(){return a("home","base")},selected:"home"===i,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},o.a.createElement(M.a,null)),o.a.createElement(B.A,{onClick:function(){return a("more","callmodal")},selected:"more"===i,text:"\u0415\u0449\u0451"},o.a.createElement(I.a,null)))},o.a.createElement(B.y,{id:"home",activeView:c,popout:d},o.a.createElement(B.B,{id:"home",modal:h,activePanel:y("home"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(N,{id:"base",withoutEpic:!1}),o.a.createElement(Y,{id:"groups"}))),o.a.createElement(B.y,{id:"more",activeView:c,popout:d},o.a.createElement(B.B,{id:"more",modal:h,activePanel:y("more"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(te,{id:"callmodal"})),o.a.createElement(B.B,{id:"modal",modal:h,activePanel:y("modal"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(oe,{id:"filters"}))),o.a.createElement(B.y,{id:"settings"},o.a.createElement(B.B,{id:"settings",activePanel:y("settings"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(te,{id:"setngs"})))))}}]),t}(o.a.Component);var Oe=Object(s.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:j,goBack:S,closeModal:T},e))})(ye);a.d(t,"store",function(){return fe});var fe=Object(i.createStore)(E,Object(w.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));fe.dispatch(j("home","base")),c.a.render(o.a.createElement(s.a,{store:fe},o.a.createElement(Oe,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.133a1fcc.chunk.js.map