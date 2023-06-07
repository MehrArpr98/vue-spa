(function(){"use strict";var t={6715:function(t,e,n){var o=n(9242),s=n(3396);function a(t,e,n,o,a,i){const r=(0,s.up)("Header"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(l)],64)}const i={class:"navbar navbar-expand-lg navbar-light bg-light"},r={class:"container-fluid"},l=(0,s._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),c=(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},m={class:"nav-item"},f={class:"nav-item"};function v(t,e,n,o,a,v){const g=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("nav",i,[(0,s._)("div",r,[l,c,(0,s._)("div",u,[(0,s._)("ul",d,[(0,s._)("li",p,[(0,s.Wm)(g,{class:"nav-link active",to:{name:"home"},"aria-current":"page"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",m,[(0,s.Wm)(g,{class:"nav-link",to:{name:"users"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Users")])),_:1})]),(0,s._)("li",f,[(0,s.Wm)(g,{class:"nav-link",to:{name:"posts"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Posts")])),_:1})])])])])])])}var g={name:"Header"},b=n(89);const h=(0,b.Z)(g,[["render",v]]);var y=h,w={name:"App",components:{Header:y}};const _=(0,b.Z)(w,[["render",a]]);var k=_,D=n(2483);const x={class:"container"},P={class:"row"},Z={class:"col-md-6"},j=(0,s._)("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui, eos fugit cupiditate maiores, officia consequuntur sapiente esse velit sint delectus ut ipsam pariatur unde ad rerum! Ipsa, tenetur eum. ",-1);function H(t,e,n,o,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("div",P,[(0,s._)("div",Z,[j,(0,s.Wm)(r,{class:"btn btn-dark",to:{name:"users"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" users")])),_:1}),(0,s.Wm)(r,{class:"btn ms-3 btn-primary",to:{name:"posts"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" posts")])),_:1})])])])}var T={};const W=(0,b.Z)(T,[["render",H]]);var O=W;const U={key:0,class:"spinner-border",role:"status"},C=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),z=[C];function F(t,e,n,o,a,i){const r=(0,s.up)("CardView");return o.loading?((0,s.wg)(),(0,s.iD)("div",U,z)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(o.items,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-4",key:t.id},[(0,s.Wm)(r,{item:t},null,8,["item"])])))),128))}var L=n(4161),q=n(4870),B=n(7139);const V={class:"card"},E={class:"card-header"},S={class:"list-group list-group-flush"},$={class:"list-group-item"},Y={class:"list-group-item"},I={class:"list-group-item"};function K(t,e,n,o,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("div",E,[(0,s.Wm)(r,{to:{name:"user",params:{id:n.item.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,B.zw)(n.item.name),1)])),_:1},8,["to"])]),(0,s._)("ul",S,[(0,s._)("li",$,"Username: "+(0,B.zw)(n.item.username),1),(0,s._)("li",Y,"Email: "+(0,B.zw)(n.item.email),1),(0,s._)("li",I,"Phone: "+(0,B.zw)(n.item.phone),1)])])}var M={props:{item:Object}};const A=(0,b.Z)(M,[["render",K]]);var N=A,G={components:{CardView:N},setup(){const t=(0,q.iH)([]),e=(0,q.iH)(!0);function n(){L.Z.get("https://jsonplaceholder.typicode.com/users").then((function(n){console.log(n),t.value=n.data,e.value=!1})).catch((function(t){console.log(t)})).finally((function(){}))}return n(),{items:t,loading:e}}};const J=(0,b.Z)(G,[["render",F]]);var Q=J;const R={key:0,class:"spinner-border",role:"status"},X=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),tt=[X],et={key:1,class:"col-md-4"};function nt(t,e,n,o,a,i){const r=(0,s.up)("CardView");return o.loading?((0,s.wg)(),(0,s.iD)("div",R,tt)):((0,s.wg)(),(0,s.iD)("div",et,[(0,s.Wm)(r,{item:o.item},null,8,["item"])]))}var ot={components:{CardView:N},setup(){const t=(0,q.iH)({}),e=(0,q.iH)(!0),n=(0,D.yj)();function o(){L.Z.get(`https://jsonplaceholder.typicode.com/users/${n.params.id}`).then((function(n){console.log(n),t.value=n.data,e.value=!1})).catch((function(t){console.log(t)})).finally((function(){}))}return o(),{item:t,loading:e}}};const st=(0,b.Z)(ot,[["render",nt]]);var at=st;const it={class:"container mt-4"},rt={class:"row g-4"};function lt(t,e,n,o,a,i){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",it,[(0,s._)("div",rt,[(0,s.Wm)(r)])])}var ct={};const ut=(0,b.Z)(ct,[["render",lt]]);var dt=ut;const pt={key:0,class:"spinner-border",role:"status"},mt=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),ft=[mt],vt={class:"card"},gt={class:"card-header"},bt={class:"list-group list-group-flush"},ht={class:"list-group-item"};function yt(t,e,n,o,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",null,[(0,s.Wm)(r,{class:"btn btn-dark",to:{name:"createPost"}},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1})]),o.loading?((0,s.wg)(),(0,s.iD)("div",pt,ft)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)(o.items,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col-md-4",key:t.id},[(0,s._)("div",vt,[(0,s._)("div",gt,[(0,s.Wm)(r,{to:{name:"post",params:{id:t.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,B.zw)(t.title),1)])),_:2},1032,["to"])]),(0,s._)("ul",bt,[(0,s._)("li",ht,"body: "+(0,B.zw)(t.body),1)])])])))),128))],64)}var wt={setup(){const t=(0,q.iH)([]),e=(0,q.iH)(!0);function n(){L.Z.get("https://jsonplaceholder.typicode.com/posts").then((function(n){console.log(n),t.value=n.data,e.value=!1})).catch((function(t){console.log(t)})).finally((function(){}))}return n(),{items:t,loading:e}}};const _t=(0,b.Z)(wt,[["render",yt]]);var kt=_t;const Dt={key:0,class:"spinner-border",role:"status"},xt=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),Pt=[xt],Zt={key:1,class:"col-md-4"},jt={class:"card"},Ht={class:"card-header"},Tt={class:"list-group list-group-flush"},Wt={class:"list-group-item"},Ot={class:"card-footer"};function Ut(t,e,n,o,a,i){const r=(0,s.up)("router-link");return o.loading?((0,s.wg)(),(0,s.iD)("div",Dt,Pt)):((0,s.wg)(),(0,s.iD)("div",Zt,[(0,s._)("div",jt,[(0,s._)("div",Ht,[(0,s.Wm)(r,{to:{name:"user",params:{id:o.item.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,B.zw)(o.item.title),1)])),_:1},8,["to"])]),(0,s._)("ul",Tt,[(0,s._)("li",Wt,"body: "+(0,B.zw)(o.item.body),1)]),(0,s._)("div",Ot,[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>o.DeletePost&&o.DeletePost(...t)),class:"btn btn-danger me-3"},"Delete"),(0,s.Wm)(r,{class:"btn btn-dark me-3",to:{name:"editPost",params:{id:o.item.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)("Edit")])),_:1},8,["to"])])])]))}var Ct=n(2492),zt=n.n(Ct),Ft={setup(){const t=(0,q.iH)({}),e=(0,q.iH)(!0),n=(0,D.yj)();function o(){L.Z.get(`https://jsonplaceholder.typicode.com/posts/${n.params.id}`).then((function(n){console.log(n),t.value=n.data,e.value=!1})).catch((function(t){console.log(t)})).finally((function(){}))}function s(){L.Z["delete"](`https://jsonplaceholder.typicode.com/posts/${n.params.id}`).then((function(t){zt().fire({icon:"warning",title:"Post deleted successfuly!!"})})).catch((function(t){console.log(t)})).finally((function(){}))}return o(),{item:t,loading:e,DeletePost:s}}};const Lt=(0,b.Z)(Ft,[["render",Ut]]);var qt=Lt;const Bt={class:"container mt-4"},Vt={class:"row g-4"};function Et(t,e,n,o,a,i){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",Bt,[(0,s._)("div",Vt,[(0,s.Wm)(r)])])}var St={};const $t=(0,b.Z)(St,[["render",Et]]);var Yt=$t;const It={class:"col-md-6"},Kt=(0,s._)("h2",null,"Create Post :",-1);function Mt(t,e,n,o,a,i){const r=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",It,[Kt,(0,s.Wm)(r,{onFormData:o.createPost,"loading-bool":o.loading,"button-text":"create"},null,8,["onFormData","loading-bool"])])}const At={class:"mb-3"},Nt=(0,s._)("label",{class:"form-label"},"Title",-1),Gt={class:"form-text"},Jt={class:"mb-3"},Qt=(0,s._)("label",{class:"form-label"},"Body",-1),Rt={class:"form-text"},Xt=["disabled"],te={key:0,class:"spinner-border spinner-border-sm",role:"status"},ee=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),ne=[ee];function oe(t,e,n,a,i,r){return(0,s.wg)(),(0,s.iD)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>a.validate&&a.validate(...t)),["prevent"]))},[(0,s._)("div",At,[Nt,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.form.title=t),class:"form-control"},null,512),[[o.nr,a.form.title]]),(0,s._)("div",Gt,(0,B.zw)(a.form.titleText),1)]),(0,s._)("div",Jt,[Qt,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.form.body=t),class:"form-control"},null,512),[[o.nr,a.form.body]]),(0,s._)("div",Rt,(0,B.zw)(a.form.bodyText),1)]),(0,s._)("button",{type:"submit",class:"btn btn-primary",disabled:n.loadingBool},[n.loadingBool?((0,s.wg)(),(0,s.iD)("div",te,ne)):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,B.zw)(n.buttonText),1)],8,Xt)],32)}var se={props:{loadingBool:Boolean,buttonText:String,post:Object},setup(t,{emit:e}){console.log("p2:",t,t.buttonText,t.post);const n=(0,q.qj)({title:"",body:"",titleText:"",bodyText:""});function o(){void 0!==t.post&&(n.title=t.post.title,n.body=t.post.body)}function s(){""==n.title?n.titleText="required":n.titleText="",""==n.body?n.bodyText="required":n.bodyText="",""!=n.body&&""!=n.title&&e("formData",n)}return o(),{form:n,validate:s}}};const ae=(0,b.Z)(se,[["render",oe]]);var ie=ae,re={components:{Form:ie},setup(){const t=(0,q.iH)(!1);function e(e){t.value=!0,L.Z.post("https://jsonplaceholder.typicode.com/posts",{id:1,title:e.title,body:e.body}).then((function(e){console.log(e),zt().fire({icon:"success",title:"Post created successfuly!!"}),t.value=!1})).catch((function(t){console.log(t)})).finally((function(){}))}return{createPost:e,loading:t}}};const le=(0,b.Z)(re,[["render",Mt]]);var ce=le;const ue={key:0,class:"spinner-border",role:"status"},de=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),pe=[de],me={key:1,class:"col-md-6"},fe=(0,s._)("h2",{class:"mb-5"},"Edit Post :",-1);function ve(t,e,n,o,a,i){const r=(0,s.up)("Form");return o.pageLoading?((0,s.wg)(),(0,s.iD)("div",ue,pe)):((0,s.wg)(),(0,s.iD)("div",me,[fe,(0,s.Wm)(r,{onFormData:o.updatePost,"loading-bool":o.loading,"button-text":"Edit Post",post:o.post},null,8,["onFormData","loading-bool","post"])]))}var ge={components:{Form:ie},setup(){const t=(0,q.iH)(!1),e=(0,q.iH)(!0),n=(0,q.iH)({}),o=(0,D.yj)();function s(){L.Z.get(`https://jsonplaceholder.typicode.com/posts/${o.params.id}`).then((function(t){n.value=t.data,e.value=!1})).catch((function(t){console.log(t)}))}function a(e){t.value=!0,console.log(),L.Z.put(`https://jsonplaceholder.typicode.com/posts/${o.params.id}`,{id:o.params.id,title:e.title,body:e.body,userId:1}).then((function(){t.value=!1,zt().fire({title:"Thanks!",text:"Post update successfully",icon:"success",confirmButtonText:"Ok"})})).catch((function(t){console.log(t)}))}return s(),{updatePost:a,loading:t,post:n,pageLoading:e}}};const be=(0,b.Z)(ge,[["render",ve]]);var he=be;const ye=[{path:"/vue-spa/",name:"home",component:O},{path:"/vue-spa/users",name:"userTemplate",component:dt,children:[{path:"",name:"users",component:Q},{path:":id",name:"user",component:at}]},{path:"/vue-spa/posts",name:"postTemplate",component:Yt,children:[{path:"",name:"posts",component:kt},{path:":id",name:"post",component:qt},{path:"create",name:"createPost",component:ce},{path:"edit/:id",name:"editPost",component:he}]}],we=(0,D.p7)({history:(0,D.PO)(),routes:ye});var _e=we;n(6744);const ke=(0,o.ri)(k);ke.use(_e),ke.mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,a){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],a=t[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(r=!1,a<i&&(i=a));if(r){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,a,i=o[0],r=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var u=l(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkvue_spa"]=self["webpackChunkvue_spa"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6715)}));o=n.O(o)})();
//# sourceMappingURL=app.d0c5c29e.js.map