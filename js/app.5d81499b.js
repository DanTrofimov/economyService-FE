(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1e98cdd6":"cd741152","chunk-200d0017":"03f77e14","chunk-35550ae5":"6a6f31e3","chunk-5cd60c37":"916d94e1","chunk-7deff2b2":"327f82ca"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1e98cdd6":1,"chunk-200d0017":1,"chunk-35550ae5":1,"chunk-5cd60c37":1,"chunk-7deff2b2":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1e98cdd6":"66ba3ab7","chunk-200d0017":"659e93e9","chunk-35550ae5":"149a6459","chunk-5cd60c37":"4d2505e9","chunk-7deff2b2":"c2324088"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/economyService-FE/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"28c3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",class:e.isDisabled?"disabled":"",attrs:{type:e.type,disabled:e.isDisabled},on:{click:e.onClick}},[e._t("default")],2)},o=[],c={name:"Button",props:{type:{type:String,default:"button"},onClick:{type:Function,default:function(){}},isDisabled:{type:Boolean,default:!1}}},a=c,s=(n("d56f"),n("2877")),i=Object(s["a"])(a,r,o,!1,null,"7dc73bd3",null);t["a"]=i.exports},"346e":function(e,t,n){},"349e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],a=(n("034f"),n("2877")),s={},i=Object(a["a"])(s,o,c,!1,null,null,null),u=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Container",{attrs:{width:250}},[r("h1",{staticClass:"app-title"},[e._v("m8.checker")]),r("img",{staticClass:"eye",attrs:{alt:"Vue logo",src:n("5ac0")}}),r("form",{staticClass:"auth-form",attrs:{action:""}},[e.isError?r("div",{staticClass:"error-wrapper"},[r("p",{staticClass:"error"},[e._v("fill email & password")])]):e._e(),e.isLoggedError?r("div",{staticClass:"error-wrapper"},[r("p",{staticClass:"error"},[e._v("unknown user")])]):e._e(),r("TextInput",{attrs:{name:"email",type:"email",placeholder:"gmail"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("TextInput",{attrs:{name:"password",type:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("Button",{attrs:{"on-click":e.login}},[e._v("login")]),r("RouterLink",{staticClass:"link",attrs:{to:"/sign-up"}},[e._v("sign up")])],1)])},d=[],f=n("1da1"),h=n("5530"),m=(n("96cf"),n("db78")),g=n("e806"),b=n("28c3"),w=n("2f62"),k={name:"Login",components:{Container:m["a"],TextInput:g["a"],Button:b["a"]},data:function(){return{email:"",password:"",isError:!1,isLoggedError:!1}},computed:Object(h["a"])({},Object(w["c"])(["token"])),methods:Object(h["a"])(Object(h["a"])({},Object(w["b"])(["signIn"])),{},{login:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.email||!e.password){t.next=13;break}return e.isError=!1,t.next=4,e.signIn({email:e.email,password:e.password});case 4:if(!e.token){t.next=10;break}return t.next=7,e.$router.push("/add-group");case 7:e.isLoggedError=!1,t.next=11;break;case 10:e.isLoggedError=!0;case 11:t.next=14;break;case 13:e.isError=!0;case 14:case"end":return t.stop()}}),t)})))()}})},v=k,y=(n("d6db"),Object(a["a"])(v,p,d,!1,null,null,null)),x=y.exports;n("99af");r["a"].use(w["a"]);var O=new w["a"].Store({state:{recognizedStudents:[],disciplines:[],groups:[],token:""},actions:{signIn:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.email,o=t.password,n.next=3,fetch("".concat("").concat("https://m8-itis-backend.space/","/api/auth/signIn"),{method:"POST",body:JSON.stringify({email:r,password:o}),headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(t){e.commit("setToken",t.token)})).catch((function(e){e.response?console.error("Oh, we get  an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):(console.log(e),console.error("Something went wrong, pls refresh the page"))}));case 3:case"end":return n.stop()}}),n)})))()},signUp:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.email,o=t.password,n.next=3,fetch("".concat("").concat("https://m8-itis-backend.space/","/api/auth/signUp"),{method:"POST",body:JSON.stringify({email:r,password:o}),headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(t){e.commit("setToken",t)})).catch((function(e){e.response?console.error("Oh, we get an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):(console.log(e),console.error("Something went wrong, pls refresh the page"))}));case 3:case"end":return n.stop()}}),n)})))()},sendGroupData:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r,o,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=t.groups,r=t.photos,o=t.discipline,c=new FormData,c.append("groupNumbers",n),c.append("discipline",o),a=0;a<r.length;a++)c.append("studentsImages",r[a]);fetch("".concat("").concat("https://m8-itis-backend.space/","check"),{method:"POST",body:c,headers:{"X-Requested-With":"XMLHttpRequest"}}).catch((function(e){e.response?console.error("Oh, we get an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):(console.log(e),console.error("Something went wrong, pls refresh the page"))}));case 6:case"end":return e.stop()}}),e)})))()},loadDisciplines:function(e){fetch("".concat("").concat("https://m8-itis-backend.space/","disciplines")).then((function(e){return e.json()})).then((function(t){e.commit("updateDisciplines",t)})).catch((function(e){e.response?console.error("Oh, we get an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):console.error("Something went wrong, pls refresh the page")}))},loadGroups:function(e){fetch("".concat("").concat("https://m8-itis-backend.space/","groups")).then((function(e){return e.json()})).then((function(t){e.commit("updateGroups",t)})).catch((function(e){e.response?console.error("Oh, we get an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):console.error("Something went wrong, pls refresh the page")}))},sendDiscipline:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.discipline,r=new FormData,r.append("title",n),e.abrupt("return",fetch("".concat("").concat("https://m8-itis-backend.space/","disciplines"),{method:"POST",body:r,headers:{"X-Requested-With":"XMLHttpRequest"}}).catch((function(e){e.response?console.error("Oh, we get an error response (5xx, 4xx)"):e.request?console.error("Some troubles with a network, pls check your connection"):console.error("Something went wrong, pls refresh the page")})));case 4:case"end":return e.stop()}}),e)})))()}},mutations:{updateStudents:function(e,t){e.recognizedStudents=t},updateDisciplines:function(e,t){e.disciplines=t},updateGroups:function(e,t){e.groups=t},setToken:function(e,t){e.token=t}}});r["a"].use(l["a"]);var S=[{path:"/",name:"",component:x},{path:"/sign-up",name:"",component:function(){return n.e("chunk-5cd60c37").then(n.bind(null,"5c9c"))}},{path:"/add-group",name:"",component:function(){return n.e("chunk-200d0017").then(n.bind(null,"8de9"))}},{path:"/add-m8",name:"",component:function(){return n.e("chunk-7deff2b2").then(n.bind(null,"0c00"))}},{path:"/add-discipline",name:"",component:function(){return n.e("chunk-1e98cdd6").then(n.bind(null,"325e"))}},{path:"/m8s",name:"",component:function(){return n.e("chunk-35550ae5").then(n.bind(null,"34f6"))}}],j=new l["a"]({routes:S});j.beforeEach((function(e,t,n){"/add-group"===e.fullPath&&(O.state.token||n("/")),"/add-discipline"===e.fullPath&&(O.state.token||n("/")),"/add-m8"===e.fullPath&&(O.state.token||n("/")),n()}));var _=j,C=n("4a7a"),E=n.n(C),T=n("9483");Object(T["a"])("".concat("/economyService-FE/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].component("v-select",E.a),r["a"].config.productionTip=!1,new r["a"]({router:_,store:O,render:function(e){return e(u)}}).$mount("#app")},"5ac0":function(e,t,n){e.exports=n.p+"img/eye.2a42807a.gif"},7518:function(e,t,n){"use strict";n("349e")},"85ec":function(e,t,n){},d56f:function(e,t,n){"use strict";n("faf1")},d6db:function(e,t,n){"use strict";n("e67a")},db78:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{width:e.width+"px"}},[e._t("default")],2)},o=[],c=(n("a9e3"),{name:"Container",props:{width:{type:Number,default:200}}}),a=c,s=(n("dc4a1"),n("2877")),i=Object(s["a"])(a,r,o,!1,null,"9dc76c5a",null);t["a"]=i.exports},dc4a1:function(e,t,n){"use strict";n("346e")},e67a:function(e,t,n){},e806:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"input",attrs:{type:e.type,name:e.name,placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})},o=[],c={name:"TextInput",props:{name:{type:String},placeholder:{type:String},type:{type:String,default:"text"},value:{type:String}}},a=c,s=(n("7518"),n("2877")),i=Object(s["a"])(a,r,o,!1,null,"1e017ea0",null);t["a"]=i.exports},faf1:function(e,t,n){}});
//# sourceMappingURL=app.5d81499b.js.map