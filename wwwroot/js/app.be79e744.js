(function(t){function e(e){for(var s,l,n=e[0],o=e[1],c=e[2],u=0,p=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},r=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Pic Vault")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("Logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login/Register")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("bc3a"),c=a.n(o);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),await this.$auth.getUserData(),this.$store.dispatch("setBearer",this.$auth.bearer)},async logout(){await this.$auth.logout(),this.$store.dispatch("resetBearer")}}},u=d,p=a("2877"),m=Object(p["a"])(u,l,n,!1,null,null,null),v=m.exports,b=a("335d"),h={name:"App",async beforeCreate(){await Object(b["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},C=h,g=(a("034f"),Object(p["a"])(C,i,r,!1,null,null,null)),f=g.exports,w=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[t._m(0),a("div",{staticClass:"row"},t._l(t.publicKeeps,(function(t){return a("keepComponent",{key:t.id,attrs:{keepProp:t}})})),1)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"pb-5 pt-4"},[t._v("Public Keeps")])])])}],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep-comp col-4 pb-3"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepProp.img,alt:"image"}}),a("div",{staticClass:"card-body"},[a("router-link",{attrs:{to:{name:"keep",params:{id:t.keepProp.id}}}},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.keepProp.name))]),a("p",[t._v(t._s(t.keepProp.description))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("router-link",{attrs:{to:{name:"keep",params:{id:t.keepProp.id}}}},[a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.increaseViewsCount()}}},[t._v("View")])])],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"dropdown"},["vault"!==this.$route.name?a("button",{staticClass:"btn btn-primary btn-sm dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[t._v(" Keep "),a("span",{staticClass:"caret"})]):t._e(),a("ul",{staticClass:"dropdown-menu"},t._l(t.vaults,(function(e){return a("div",{key:e.id},[a("button",{staticClass:"dropdown-item",on:{click:function(a){t.createVaultKeep(e.id),t.increaseKeepsCount()}}},[t._v(t._s(e.name))])])})),0)])]),a("div",{staticClass:"col-3"},["vault"===this.$route.name?a("button",{staticClass:"btn btn-sm btn-warning",on:{click:t.deleteVaultKeep}},[t._v("Remove")]):t._e()]),a("div",{staticClass:"col-3"},["home"!==this.$route.name?a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"delete"},on:{click:t.deleteKeep}},[t._v("Delete")]):t._e()])])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[t._v(" Views: "+t._s(t.keepProp.views)+" - Keeps: "+t._s(t.keepProp.keeps)+" ")])])])])},k=[],V={name:"keepComponent",props:["keepProp"],computed:{vaults(){return this.$store.state.vaults}},methods:{createVaultKeep(t){let e={vaultId:t,keepId:this.keepProp.id};this.$store.dispatch("createVaultKeep",e)},increaseKeepsCount(){let t={id:this.keepProp.id,view:this.$route.name};this.$store.dispatch("increaseKeepsCount",t)},increaseViewsCount(){let t={id:this.keepProp.id,view:this.$route.name};this.$store.dispatch("increaseViewsCount",t)},deleteVaultKeep(){let t=confirm("Remove from vault?");if(1==t){let t={vaultId:this.$route.params.id,keepId:this.keepProp.id};this.$store.dispatch("deleteVaultKeep",t)}},deleteKeep(){let t=confirm("Delete forever?");1==t&&this.$store.dispatch("deleteKeep",this.keepProp.id)}}},$=V,P=Object(p["a"])($,K,k,!1,null,null,null),x=P.exports,D={name:"home",mounted(){this.$store.dispatch("getPublicKeeps")},components:{keepComponent:x},computed:{user(){return this.$store.state.user},publicKeeps(){return this.$store.state.publicKeeps}}},I=D,M=Object(p["a"])(I,_,y,!1,null,null,null),E=M.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#newPicModal","data-whatever":"@getbootstrap"}},[t._v("Create Pic")]),a("div",{staticClass:"modal fade",attrs:{id:"newPicModal",tabindex:"-1",role:"dialog","aria-labelledby":"newPicModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createKeep(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"vault-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",id:"vault-name",required:""},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",id:"message-text"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"image"}},[t._v("Image URL (Web Address):")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control",attrs:{type:"text",id:"image",required:""},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"is-private"}},[t._v("Make Private?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.isPrivate,expression:"newKeep.isPrivate"}],staticClass:"form-control",attrs:{type:"checkbox",id:"is-private"},domProps:{checked:Array.isArray(t.newKeep.isPrivate)?t._i(t.newKeep.isPrivate,null)>-1:t.newKeep.isPrivate},on:{change:function(e){var a=t.newKeep.isPrivate,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=null,l=t._i(a,r);s.checked?l<0&&t.$set(t.newKeep,"isPrivate",a.concat([r])):l>-1&&t.$set(t.newKeep,"isPrivate",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.newKeep,"isPrivate",i)}}})]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])]),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#newVaultModal","data-whatever":"@getbootstrap"}},[t._v("Create Vault")]),a("div",{staticClass:"modal fade",attrs:{id:"newVaultModal",tabindex:"-1",role:"dialog","aria-labelledby":"newVaultModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createVault(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"vault-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"vault-name"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{id:"message-text"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])])]),a("div",{staticClass:"row pt-3"},t._l(t.vaults,(function(t){return a("vaultComponent",{key:t.id,attrs:{vaultProp:t}})})),1),a("div",{staticClass:"row"},t._l(t.createdKeeps,(function(t){return a("keepComponent",{key:t.id,attrs:{keepProp:t}})})),1)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("h1",[t._v("Your Vaults and Created Pics")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"newPicModalLabel"}},[t._v("New Pic")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"newVaultModalLabel"}},[t._v("New Vault")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-comp col-4 pb-3"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("router-link",{attrs:{to:{name:"vault",params:{id:t.vaultProp.id}}}},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.vaultProp.name))]),a("p",{staticClass:"card-text pb-3"},[t._v(t._s(t.vaultProp.description))]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("View")])]),a("button",{staticClass:"btn btn-danger",attrs:{type:"delete"},on:{click:t.deleteVault}},[t._v("Delete")])],1)])])},j=[],L={name:"vault-comp",props:["vaultProp"],data(){return{vaultId:this.vaultProp.id}},methods:{deleteVault(t){let e=confirm("Are you sure you want to delete this?");1==e&&this.$store.dispatch("deleteVault",this.vaultProp.id)}}},S=L,T=Object(p["a"])(S,N,j,!1,null,null,null),q=T.exports,R={name:"dashboard",beforeMount(){this.$store.dispatch("getCreatedKeeps"),this.$store.dispatch("getVaults")},components:{keepComponent:x,vaultComponent:q},computed:{createdKeeps(){return this.$store.state.createdKeeps},vaults(){return this.$store.state.vaults}},data(){return{newKeep:{name:"",description:"",img:"",isPrivate:!1},newVault:{name:"",description:""}}},methods:{createKeep(){let t={...this.newKeep};this.$store.dispatch("createKeep",t),this.newKeep={name:"",description:"",img:"",isPrivate:!1}},createVault(){let t={...this.newVault};this.$store.dispatch("createVault",t),this.newVault={name:"",description:""}}}},U=R,B=Object(p["a"])(U,O,A,!1,null,null,null),z=B.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal","data-whatever":"@getbootstrap"}},[t._v("Edit Vault")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.editVault(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"vault-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultData.name,expression:"vaultData.name"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"vault-name"},domProps:{value:t.vaultData.name},on:{input:function(e){e.target.composing||t.$set(t.vaultData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultData.description,expression:"vaultData.description"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"message-text"},domProps:{value:t.vaultData.description},on:{input:function(e){e.target.composing||t.$set(t.vaultData,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])]),a("div",{staticClass:"col-12"},[a("h1",{staticClass:"pt-3"},[t._v(t._s(t.activeVault.name))]),a("h5",{staticClass:"pb-5"},[t._v(t._s(t.activeVault.description))])])]),a("div",{staticClass:"row"},t._l(t.keepsInVault,(function(t){return a("keepComponent",{key:t.id,attrs:{keepProp:t}})})),1)])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Edit Vault")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],F={name:"vault",mounted(){this.$store.dispatch("getActiveVault",this.$route.params.id),this.$store.dispatch("getKeepsInVault",this.$route.params.id)},components:{keepComponent:x},data(){return{vaultData:{name:"",description:"",id:this.$route.params.id}}},methods:{editVault(){let t={...this.vaultData};this.$store.dispatch("editVault",t),this.vaultData={name:"",description:"",id:this.$route.params.id}}},computed:{activeVault(){return this.$store.state.activeVault},keepsInVault(){return this.$store.state.keepsInVault}}},H=F,Y=Object(p["a"])(H,J,W,!1,null,null,null),Z=Y.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep container"},[a("div",{staticClass:"row"},[t.$auth.isAuthenticated?a("div",{staticClass:"col-12 mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal","data-whatever":"@getbootstrap"}},[t._v("Edit Pic")]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.editKeep(e)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"pic-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepData.name,expression:"keepData.name"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"pic-name"},domProps:{value:t.keepData.name},on:{input:function(e){e.target.composing||t.$set(t.keepData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepData.description,expression:"keepData.description"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"message-text"},domProps:{value:t.keepData.description},on:{input:function(e){e.target.composing||t.$set(t.keepData,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])]):t._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"pt-3"},[t._v(t._s(t.activeKeep.name))]),a("h5",{staticClass:"pb-5"},[t._v(t._s(t.activeKeep.description))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("img",{staticClass:"mb-3",attrs:{id:"img",src:t.activeKeep.img,alt:"image"}})])])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Edit Pic")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],X={name:"keep",mounted(){this.$store.dispatch("getActiveKeep",this.$route.params.id)},data(){return{keepData:{name:"",description:"",id:this.$route.params.id}}},methods:{editKeep(){let t={...this.keepData};this.$store.dispatch("editKeep",t),this.keepData={name:"",description:"",id:this.$route.params.id}}},computed:{activeKeep(){return this.$store.state.activeKeep}}},tt=X,et=(a("8e22"),Object(p["a"])(tt,G,Q,!1,null,null,null)),at=et.exports;s["a"].use(w["a"]);var st=new w["a"]({routes:[{path:"/",name:"home",component:E},{path:"/dashboard",name:"dashboard",component:z,beforeEnter:b["b"]},{path:"/vault/:id",name:"vault",component:Z,beforeEnter:b["b"]},{path:"/keep/:id",name:"keep",component:at}]}),it=a("2f62");s["a"].use(it["a"]);let rt=location.host.includes("localhost")?"https://localhost:5001/":"/",lt=c.a.create({baseURL:rt+"api/",timeout:1e4,withCredentials:!0});var nt=new it["a"].Store({state:{activeVault:{},vaults:[],activeKeep:{},keepsInVault:[],publicKeeps:[],createdKeeps:[]},mutations:{setActiveKeep(t,e){t.activeKeep=e},addKeepToVault(t,e){t.keepsInVault.push(e)},setKeepsInVault(t,e){t.keepsInVault=e},setPublicKeeps(t,e){t.publicKeeps=e},setCreatedKeeps(t,e){t.createdKeeps=e},setActiveVault(t,e){t.activeVault=e},setVaults(t,e){t.vaults=e}},actions:{setBearer({},t){lt.defaults.headers.authorization=t},resetBearer(){lt.defaults.headers.authorization=""},async createVaultKeep({commit:t},e){let a=await lt.post("vaultkeeps",e);t("addKeepToVault",a.data)},async deleteVaultKeep({dispatch:t},e){await lt.delete("vaultKeeps/"+e.vaultId+"/keeps/"+e.keepId,e),t("getKeepsInVault",e.vaultId)},async getActiveVault({commit:t},e){let a=await lt.get("vaults/"+e);t("setActiveVault",a.data)},async getVaults({commit:t}){let e=await lt.get("vaults");t("setVaults",e.data)},async createVault({dispatch:t},e){await lt.post("vaults",e),t("getVaults")},async editVault({dispatch:t},e){await lt.put("vaults/"+e.id,e),t("getActiveVault",e.id)},async deleteVault({dispatch:t},e){await lt.delete("vaults/"+e),t("getVaults")},async increaseKeepsCount({dispatch:t},e){let a=e.id;await lt.put("keeps/"+a+"/keepscount"),"vault"==e.view?t("getKeepsInVault"):"dashboard"==e.view?t("getCreatedKeeps"):t("getPublicKeeps")},async increaseViewsCount({dispatch:t},e){let a=e.id;await lt.put("keeps/"+a+"/viewscount"),"vault"==e.view?t("getKeepsInVault"):"dashboard"==e.view?t("getCreatedKeeps"):t("getPublicKeeps")},async getActiveKeep({commit:t},e){let a=await lt.get("keeps/"+e);t("setActiveKeep",a.data)},async getPublicKeeps({commit:t}){let e=await lt.get("keeps");t("setPublicKeeps",e.data)},async getCreatedKeeps({commit:t}){let e=await lt.get("keeps/created");t("setCreatedKeeps",e.data)},async getKeepsInVault({commit:t},e){let a=await lt.get("vaultkeeps/"+e+"/keeps");t("setKeepsInVault",a.data)},async createKeep({dispatch:t},e){await lt.post("keeps",e),t("getCreatedKeeps")},async editKeep({dispatch:t},e){await lt.put("keeps/"+e.id,e),t("getActiveKeep",e.id)},async deleteKeep({dispatch:t},e){await lt.delete("keeps/"+e),t("getCreatedKeeps"),t("getPublicKeeps")}}});const ot="d-coder.auth0.com",ct="https://pic-vault.api.com",dt="NkIseU3nm9x07qZkvnzTB4OM01eFlVvL";s["a"].use(b["a"],{domain:ot,clientId:dt,audience:ct,onRedirectCallback:t=>{st.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:st,store:nt,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,a){},"8e22":function(t,e,a){"use strict";var s=a("a34d"),i=a.n(s);i.a},a34d:function(t,e,a){}});