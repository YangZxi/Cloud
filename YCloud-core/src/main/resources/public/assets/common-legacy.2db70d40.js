!function(){function e(e,t,n,o,s,r,i){try{var a=e[r](i),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(o,s)}System.register(["./index-legacy.ef81fb63.js","./Explore-legacy.0d0e59ed.js","./YIcon-legacy.09bc7dc4.js"],(function(t,n){"use strict";var o,s,r,i,a,c,u,f,d,l;return{setters:[e=>{o=e.bG,s=e.bH,r=e.bI,i=e.bJ,a=e.bK,c=e.bB,u=e.bL,f=e.i},e=>{d=e.d},e=>{l=e.default}],execute:function(){const n="SHARE_TOKEN",p=t("s",o("share",{state:()=>({token:window.sessionStorage.getItem(n)?window.sessionStorage.getItem(n):null,unsafeToken:""}),actions:{setToken(e,t){this.token=t,window.sessionStorage.setItem(n,t)},clearToken(){this.token=null,window.sessionStorage.removeItem(n)},getUnsafeToken(){var t,n=this;return(t=function*(){return n.unsafeToken||(console.log("获取 unsafe token 中 (share)"),yield h.post(s("/unsafeToken"),null).then((e=>{console.log(e.token),n.unsafeToken=e.token}))),n.unsafeToken},function(){var n=this,o=arguments;return new Promise((function(s,r){var i=t.apply(n,o);function a(t){e(i,s,r,a,c,"next",t)}function c(t){e(i,s,r,a,c,"throw",t)}a(void 0)}))})()}}})),h=r.create({headers:{"Content-Type":"application/json;charset=utf-8"}});h.defaults.withCredentials=!1,h.interceptors.request.use((function(e){return e.headers||(e.headers={}),e.headers.Authorization="Bearer "+p().token,e})),h.interceptors.response.use((function(e){return 200===e.data.code?e.data:(i(e),Promise.reject(e))}),(function(e){return 401==e.response.status&&(p().clearToken(),a.go(0)),i(e.response),Promise.reject(e.response)}));t("A",{createShare:e=>c.post(s("/share/create"),e).then((e=>{if(200==e.code)return e.data})),pass:(e,t,n={})=>(null==t&&(n.show=!1),h.post(s("/share/pass"),{id:e,password:t},n).then((t=>200==t.code&&t.token?(p().setToken(e,t.token),t):Promise.reject(t)))),getShareList:(e,t)=>h.post(s("/share/list"),{id:e,path:t}).then((e=>{if(200==e.code)return e.data})),download:(e,t)=>h.post(s("/share/pre_download"),{resourceId:e,path:t}).then((e=>{if(200==e.code){const t=`${s("/resource/download",!1)}?entry=${e.data}`;d(t)}})),preview:e=>p().getUnsafeToken().then((t=>`${u}/${e}?token=${t}`))});const g={image:{suffix:["jpg","png","jpeg"],icon:"file-image"},video:{suffix:["mp4","avi"],icon:"file-video"},audio:{suffix:["mp3","ogg"],icon:"file-audio"},text:{suffix:["txt","js","ts","java","md"],icon:"file-code"},package:{suffix:["zip","rar","7z","tar"],icon:"file-zipper"}},k=t("a",(function(e="FILE"){let t="file";if("dir"===(e=e.toLowerCase()))return"fa-folder";for(let n of Object.values(g))n.suffix.includes(e)&&(t=n.icon);return"fa-"+t}));t("f",(function(e="file",t=13){return f(l,{name:k(e),size:t,color:"dir"===e?"#E66E05":"#333",class:"fileIcon"},null)}))}}}))}();
