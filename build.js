(()=>{var Cn=Object.create;var Oe=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var bn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,Mn=Object.prototype.hasOwnProperty;var Pn=e=>Oe(e,"__esModule",{value:!0});var m=(e,t)=>()=>(e&&(t=e(e=0)),t);var $=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var En=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of bn(t))!Mn.call(e,i)&&i!=="default"&&Oe(e,i,{get:()=>t[i],enumerable:!(n=vn(t,i))||n.enumerable});return e},V=e=>En(Pn(Oe(e!=null?Cn(xn(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var D,ue=m(()=>{r();D=webpackChunkdiscord_app.push([[Symbol()],{},e=>e]);webpackChunkdiscord_app.pop()});var x,B,ce=m(()=>{r();x=new Map,B=Symbol("_CUMCORD_INJECTIONS")});function at(e,t,n,i,a){let s=x.get(n);if(!s)try{s=x.get(t[B].get(e))}catch{}if(!s)return t[e].apply(a,i);let u=s.hooks,c=i;for(let w of u.before.values()){let v=w.call(a,c);Array.isArray(v)&&(c=v)}let l,p=Array.from(u.instead.values()),f=(...w)=>s?.originalFunction.apply(a,w);for(let w of p){let v=f;f=(...K)=>w.apply(a,[K,v])}l=f(...c);for(let w of u.after.values()){let v=w.call(a,c,l);typeof v!="undefined"&&(l=v)}return l}var lt=m(()=>{r();ce()});function Te(e,t,n){let i=x.get(e);if(!i)return!1;let a=i.hooks;if(!a[n].has(t))return!1;if(a[n].delete(t),Object.keys(a).every(u=>a[u].size==0)){try{Object.defineProperty(i.functionParent,i.functionName,{value:i.originalFunction,writable:!0,configurable:!0})}catch{i.functionParent[i.functionName]=i.originalFunction}i.functionParent[B].delete(i.functionName),x.delete(e)}return i.functionParent[B].size==0&&delete i.functionParent[B],!0}function Ie(){for(let[e,t]of x.entries())for(let n in t.hooks){if(!x.has(e))continue;let i=x.get(e)?.hooks[n];for(let a of i.keys())Te(e,a,n)}}var Ae=m(()=>{r();ce()});var de,ut=m(()=>{r();lt();ce();Ae();de=e=>(t,n,i,a=!1)=>{if(typeof n[t]!="function")throw new Error(`${t} is not a function in ${n.constructor.name}`);Object.hasOwnProperty.call(n,B)||(n[B]=new Map);let s=n[B];s.has(t)||s.set(t,Symbol("CUMCORD_PATCH_ID"));let u=s.get(t),c;if(!x.has(u)){let f=function(...w){let v=at(t,n,u,w,this);return a&&c(),v},p=n[t];x.set(u,{originalFunction:p,functionParent:n,functionName:t,hooks:{before:new Map,instead:new Map,after:new Map}});try{Object.defineProperty(n,t,{value:f,configurable:!0,writable:!0})}catch{n[t]=f}n[t].toString=()=>p.toString(),Object.assign(n[t],p)}let l=Symbol("CUMCORD_HOOK_ID");return x.get(u)?.hooks[e].set(l,i),c=()=>Te(u,l,e)}});function Le(e,t){let n=!1,i,[a,s]=Z(e,!1);return a.then(u=>{n||(i=t(u))}),()=>{n=!0,s?.(),i?.()}}var ct=m(()=>{r();b()});function T(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),n=>{typeof n=="undefined"?t.remove():t.textContent=n}}function dt(){for(let e of document.getElementsByClassName("CUMCORD_INJECTED_CSS"))e.remove()}var fe,pe,S,j=m(()=>{r();ut();Ae();ct();fe=de("before"),pe=de("instead"),S=de("after")});function Z(e,t=!0){let n=e();if(n!==void 0)return n=Promise.resolve(n),t?n:[n,()=>{}];let i=[];function a(){for(let u of i)u()}let s=new Promise(u=>{i.push(fe("push",window.webpackChunkdiscord_app,([[,c]])=>{for(let l in c)i.push(S(l,c,()=>{n===void 0&&(n=e(),n!==void 0&&(a(),u(n)))},!0))}))});return t?s:[s,a]}var ft=m(()=>{r();j()});function z(e,t,{walkable:n=null,ignore:i=[],limit:a=100}={}){let s=0;function u(c,l,{walkable:p=null,ignore:f=[]}={}){if(s+=1,s>a)return null;if(typeof l=="string"){if(c.hasOwnProperty(l))return c[l]}else if(l(c))return c;if(c){if(Array.isArray(c))for(let w of c){let v=u(w,l,{walkable:p,ignore:f});if(v)return v}else if(typeof c=="object")for(let w of Object.keys(c)){if(p!=null&&!p.includes(w)||f.includes(w))continue;let v;try{v=u(c[w],l,{walkable:p,ignore:f})}catch{continue}if(v)return v}}}return u(e,t,{walkable:n,ignore:i})}var je=m(()=>{r()});function me(e,t){return z(e,t,{walkable:["props","children","child","sibling"]})}var pt=m(()=>{r();je()});function ze(e,t,n){console[n]("%cCumcord%c",`background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,"",...e)}var Sn,C,mt=m(()=>{r();Sn={log:(...e)=>{ze(e,"#7289da","log")},error:(...e)=>{ze(e,"red","error")},warn:(...e)=>{ze(e,"#debf18","warn")}},C=Sn});var ht=$((Wo,gt)=>{r();ue();var kn=Object.values(D.c).find(e=>e.exports?.useState).exports;gt.exports=kn});var ge=$(Fe=>{r();"use strict";Object.defineProperty(Fe,"__esModule",{value:!0});Fe.default=Object.freeze({GET:"GET",SET:"SET",DELETE:"DELETE",UPDATE:"UPDATE"})});var yt=$(oe=>{r();"use strict";var Nn=oe&&oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oe,"__esModule",{value:!0});var Ue=ht(),q=Nn(ge());function _n(e,t=!1,n=()=>!0){let i=(0,Ue.useRef)(e.ghost),[,a]=(0,Ue.useReducer)(s=>~s,0);return(0,Ue.useEffect)(()=>{function s(u,c){n(u,c)&&a()}return e.on(q.default.UPDATE,s),t||(e.on(q.default.SET,s),e.on(q.default.DELETE,s)),()=>{e.off(q.default.UPDATE,s),t||(e.off(q.default.SET,s),e.off(q.default.DELETE,s))}},[]),e.ghost}oe.default=_n});var wt=$(J=>{r();"use strict";var Dn=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(J,"__esModule",{value:!0});J.useNest=void 0;var Bn=yt();Object.defineProperty(J,"useNest",{enumerable:!0,get:function(){return Dn(Bn).default}})});var Ct,k,vt=m(()=>{r();Ct=V(wt()),k=Ct.useNest});function F(e){window.DiscordNative?DiscordNative.clipboard.copy(e):navigator.clipboard.writeText(e).then(()=>{},()=>{let t=document.createElement("textarea");t.style.visibility="hidden",t.style.position="fixed",t.style.top="0",t.style.left="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error(n)}document.body.removeChild(t)})}var bt=m(()=>{r()});function W(e){return e.__reactFiber$}var He=m(()=>{r()});function he(e){for(let t=W(e);t;t=t.return){let n=t.stateNode;if(n&&n.forceUpdate)return n}}var xt=m(()=>{r();He()});function ye(e){return new Promise(t=>setTimeout(t,e))}var Mt=m(()=>{r()});function Ce(e){let[t,n]=o.useState(we[e]);return o.useEffect(()=>{we[e]||fetch(e).then(i=>i.json()).then(i=>{we[e]=i,n(i)}).catch(()=>{we[e]=Pt,n(Pt)})},[e]),t??{name:"Loading...",description:"This module is still loading.",author:"Loading..."}}var we,Pt,Et=m(()=>{r();G();we={},Pt={name:"Invalid module.",description:"This module does not exist.",author:"Unknown",invalid:!0}});var On,$e,St=m(()=>{r();On=["Clickable","Tooltip"],$e=(e,{parent:t=!1,displayName:n=!0,blockList:i=On}={})=>{let a=l=>!l?.type?.displayName||i.includes(l?.type?.displayName),s=l=>typeof l?.type!="string"&&(n?!a(l):!0),u=l=>s(l)?l?.type:u(l.return),c=u(cumcord.utils.getReactInstance(e));return t?find(l=>l?.default===c):c}});var O=m(()=>{r();je();pt();mt();vt();bt();He();xt();Mt();Et();St()});var y,Ke=m(()=>{r();O();y={filterModules:(e,t=!1)=>n=>{let i=[];for(let a in e)if(e.hasOwnProperty(a)){let s=e[a].exports;if(!s)continue;if(s.default&&s.__esModule&&n(s.default)){if(t)return s.default;i.push(s.default)}if(n(s)){if(t)return s;i.push(s)}}if(!t)return i},byProps:e=>t=>e.every(n=>t[n]!==void 0),byProtos:e=>t=>t.prototype&&e.every(n=>t.prototype[n]!==void 0),byDisplayName:(e,t=!0)=>t?n=>n.displayName===e:n=>n?.default?.displayName===e,byKeyword:e=>t=>e.every(n=>Object.keys(t).some(i=>i.toLowerCase().includes(n.toLowerCase()))==!0),byStrings:e=>t=>{if(typeof t=="function"){if(e.every(n=>t.toString().includes(n)))return!0}else return z(t,n=>{if(!!n)try{for(let i of Object.values(n))if(typeof i=="function"&&e.every(a=>i.toString().includes(a)))return!0}catch{}})}}});var Tn,In,kt,Nt=m(()=>{r();Ke();ue();Tn=e=>{let t=[],n=i=>{for(let a=0;a<e.length;a++)!e[a][0](i)||(e[a][1]?t[a]?t[a].push(i):t[a]=[i]:t[a]||(t[a]=i))};for(let i in D.c){if(!D.c.hasOwnProperty(i))continue;let a=D.c[i].exports;!a||(a.default&&a.__esModule&&n(a.default),n(a))}return t},In=e=>({find:t=>e.push([t,!1]),findAll:t=>e.push([t,!0]),findByProps:(...t)=>e.push([y.byProps(t),!1]),findByPropsAll:(...t)=>e.push([y.byProps(t),!0]),findByPrototypes:(...t)=>e.push([y.byProtos(t),!1]),findByPrototypesAll:(...t)=>e.push([y.byProtos(t),!0]),findByDisplayName:(t,n=!0)=>e.push([y.byDisplayName(t,n),!1]),findByDisplayNameAll:(t,n=!0)=>e.push([y.byDisplayName(t,n),!0]),findByStrings:(...t)=>e.push([y.byStrings(t),!1]),findByStringsAll:(...t)=>e.push([y.byStrings(t),!0]),findByKeywordAll:(...t)=>e.push([y.byKeyword(t),!0])}),kt=e=>{let t=[],n=In(t);return e(n),Tn(t)}});var g,_t,Ni,_i,M,Di,Bi,Oi,Y,ve,Ti,Ii,Ai,d,b=m(()=>{r();ue();ft();Ke();Nt();g={modules:D.c,findAsync:Z,batchFind:kt,find:y.filterModules(D.c,!0),findAll:y.filterModules(D.c),getModule(e){for(let t in g.modules){let n=g.modules[t]?.exports;if(n===e||n?.default===e)return n}},findByProps:(...e)=>g.find(y.byProps(e)),findByPropsAll:(...e)=>g.findAll(y.byProps(e)),findByPrototypes:(...e)=>g.find(y.byProtos(e)),findByPrototypesAll:(...e)=>g.findAll(y.byProtos(e)),findByDisplayName:(e,t=!0)=>g.find(y.byDisplayName(e,t)),findByDisplayNameAll:(e,t=!0)=>g.findAll(y.byDisplayName(e,t)),findByStrings:(...e)=>g.find(y.byStrings(e)),findByStringsAll:(...e)=>g.findAll(y.byStrings(e)),findByKeywordAll:(...e)=>g.findAll(y.byKeyword(e))},_t=g.find,Ni=g.findAll,_i=g.getModule,M=g.findByProps,Di=g.findByPropsAll,Bi=g.findByPrototypes,Oi=g.findByPrototypesAll,Y=g.findByDisplayName,ve=g.findByDisplayNameAll,Ti=g.findByStrings,Ii=g.findByStringsAll,Ai=g.findByKeywordAll,d=g});var P,o,Re,zi,Fi,Ui,Hi,$i,Ki,Ri,Vi,Zi,Dt,G=m(()=>{r();b();P={constants:d.findByProps("API_HOST","APP_URL_PREFIX"),channels:d.findByProps("getChannelId","getVoiceChannelId"),Flux:d.findByProps("Store","connectStores"),FluxDispatcher:d.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:d.findByPropsAll("Messages","_requestedLocale")[1],React:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate"),Redux:d.findByProps("createStore","__DO_NOT_USE__ActionTypes"),zustand:d.find(e=>{if(typeof e=="function"&&e.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4"))return e}),uuid:{v4:d.findByProps("v4","v1")},highlightjs:d.findByProps("initHighlighting")},o=P.React,Re=P.ReactDOM,zi=P.Flux,Fi=P.FluxDispatcher,Ui=P.Redux,Hi=P.constants,$i=P.channels,Ki=P.i18n,Ri=P.zustand,Vi=P.uuid,Zi=P.highlightjs,Dt=P});var r=m(()=>{G()});var Tt=$(ie=>{r();"use strict";var An=ie&&ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ie,"__esModule",{value:!0});var Bt=An(ge()),Ot=class{constructor(){this.listeners=Object.values(Bt.default).reduce((t,n)=>(t[n]=new Set,t),{}),this.on=function(t,n){if(this.listeners[t].has(n))throw Error(`This listener on ${t} already exists.`);this.listeners[t].add(n)},this.once=function(t,n){let i=(a,s)=>{this.off(a,i),n(a,s)};this.on(t,i)},this.off=function(t,n){this.listeners[t].delete(n)},this.emit=function(t,n){for(let i of this.listeners[t])i(t,n)};for(let t of Object.values(Bt.default))this[t.toLowerCase()]=n=>{this.emit(t,n)}}};ie.default=Ot});var It=$(re=>{r();"use strict";var Ln=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});var jn=Ln(Tt());function zn(e={},{nestArrays:t=!0}={}){let n=new jn.default;function i(a,s,u){return new Proxy(a,{get(c,l){let p=[...u,l],f=c[l];return f!=null?(n.get({path:p,value:f}),!t&&Array.isArray(f)?f:typeof f=="object"?i(f,s,p):f):i(c[l]={},s,p)},set(c,l,p){return c[l]=p,n.set({path:[...u,l],value:p}),!0},deleteProperty(c,l){return delete c[l]?(n.delete({path:[...u,l]}),!0):!1},has(c,l){return typeof c[l]=="object"&&Object.keys(c[l]).length===0?!1:l in c}})}return Object.assign({store:i(e,e,[]),ghost:e},n)}re.default=zn});var Q=$(U=>{r();"use strict";var At=U&&U.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(U,"__esModule",{value:!0});U.make=U.Events=void 0;var Fn=ge();Object.defineProperty(U,"Events",{enumerable:!0,get:function(){return At(Fn).default}});var Un=It();Object.defineProperty(U,"make",{enumerable:!0,get:function(){return At(Un).default}})});r();r();b();G();r();var zt=V(Q());r();r();function Hn(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(n=>{let i=()=>indexedDB.databases().finally(n);t=setInterval(i,100),i()}).finally(()=>clearInterval(t))}var Lt=Hn;function be(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function $n(e,t){let n=Lt().then(()=>{let i=indexedDB.open(e);return i.onupgradeneeded=()=>i.result.createObjectStore(t),be(i)});return(i,a)=>n.then(s=>a(s.transaction(t,i).objectStore(t)))}var Ve;function Ze(){return Ve||(Ve=$n("keyval-store","keyval")),Ve}function xe(e,t=Ze()){return t("readonly",n=>be(n.get(e)))}function Me(e,t,n=Ze()){return n("readwrite",i=>(i.put(t,e),be(i.transaction)))}function jt(e,t=Ze()){return t("readwrite",n=>(n.delete(e),be(n.transaction)))}var Ft={nests:zt.default,idbKeyval:{get:xe,set:Me}};r();b();j();r();r();b();r();b();r();r();G();var I=class extends o.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?o.createElement("div",{className:"cumcord-error-handler"},o.createElement("h1",{className:"cumcord-error-handler-title"},"Oops, we had a fucky wucky. (Cumcord)"),o.createElement("code",{className:"cumcord-error-handler-code"},`${this.state.error}`)):this.props.children}};var Pe=M("ModalCloseButton"),Ut=ve("Header")[1],Ht=Y("Flex"),{openModal:Kn}=M("openModal","openModalLazy");function Ee(e,t){Kn(n=>o.createElement(Pe.ModalRoot,{transitionState:n.transitionState,size:"large",className:"cumcord-settings-modal"},o.createElement(I,null,o.createElement(Pe.ModalHeader,{separator:!1},o.createElement(Ht.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},o.createElement(Ut,{tag:"h2",size:Ut.Sizes.SIZE_20},e)),o.createElement(Ht.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},o.createElement(Pe.ModalCloseButton,{onClick:n.onClose}))),o.createElement(Pe.ModalContent,null,typeof t=="function"?o.createElement(t):t))))}O();r();b();var{openModal:Rn}=M("openModal","openModalLazy"),qe=M("button","colorRed"),Vn=Y("ConfirmModal"),Zn=ve("Markdown")[1];async function X({header:e="Are you sure?",confirmText:t="Confirm",cancelText:n="Cancel",content:i="Are you sure you want to do that?",type:a="neutral"}={},s=()=>{}){return new Promise(u=>{var c,l=!1;switch(a.toLowerCase()){case"danger":c=qe.colorRed;break;case"confirm":c=qe.colorGreen;break;default:c=qe.colorBrandNew;break}function p(f){l||(l=!0,s(f),u(f))}Rn(f=>(f.transitionState===3&&p(!1),o.createElement(Vn,{header:e,confirmText:t,cancelText:n,transitionState:f.transitionState,confirmButtonColor:c,onClose:()=>{p(!1)},onCancel:()=>{p(!1),f.onClose()},onConfirm:()=>{p(!0),f.onClose()}},o.createElement(Zn,{editable:!1},i))))})}r();G();j();r();b();var qn=d.findByDisplayNameAll("Header")[1],$t=d.findByDisplayName("Text"),Kt=e=>o.createElement("div",{onClick:e.onClick,className:"cumcord-toast"+(e.className?` ${e.className}`:"")},e.title?o.createElement(qn,{className:"cumcord-toast-title"},e.title):null,e.content?o.createElement("div",{className:"cumcord-toast-content"},o.createElement($t,{size:$t.Sizes.SIZE_16},e.content)):null);r();O();r();var Rt=V(Q()),A=Rt.make({toasts:[]});var Vt=()=>(k(A),o.createElement(o.Fragment,null,A.ghost.toasts.map(e=>e())));var se=document.createElement("div");function Zt(){T("@keyframes cumcord-fadeIn{0%{opacity:0}100%{opacity:1}}.cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:cumcord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.cumcord-toast-title{font-size:22px;line-height:1}"),se.className="cumcord-toast-container",document.getElementById("app-mount").prepend(se),Re.render(o.createElement(Vt,null),se)}function qt(){Re.unmountComponentAtNode(se),se.remove()}function ee({title:e,content:t,onClick:n=()=>{},className:i,duration:a=3e3}){let s=()=>o.createElement(Kt,{onClick:n,className:i,title:e,content:t});A.ghost.toasts.push(s),A.update();function u(){let c=A.ghost.toasts.indexOf(s);c>-1&&(A.ghost.toasts.splice(c,1),A.update())}return a!=1/0&&setTimeout(u,a),u}r();r();var ae=V(Q());async function Je(e){let t=await xe(`${e}_CUMCORD_STORE`)||{},n=ae.make(t),i=()=>Me(`${e}_CUMCORD_STORE`,{...n.ghost});return n.on(ae.Events.SET,i),n.on(ae.Events.DELETE,i),n}var Jt=V(Q()),Wt={cache:"no-store"},E=Jt.make({}),h={},Jn=window.eval;function We(e,t){let n=Object.assign({},cumcord);n.pluginData=t;let i=new URL(t.id),a=`(cumcord)=>{return ${e}}`+atob("Ci8v")+`# sourceURL=${i.hostname}${i.pathname}`,s=Jn(a)(n),u=s;return typeof s=="function"&&(u=s(t)),u}async function Se(e){let t=h.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(E.ghost[e])throw new Error(`Plugin ${e} already loaded`);let n=We(t.js,{persist:await Je(e),id:e});try{n.onLoad&&n.onLoad()}catch{}E.store[e]=n}function Ge(e){let t=E.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(!E.ghost[e])throw new Error(`Plugin ${e} isn't loaded`);try{t.onUnload()}catch{}delete E.store[e]}function ke(e){let t=h.store[e];if(!h.ghost[e])throw new Error(`Plugin ${e} not found`);t.enabled?(Ge(e),t.enabled=!1):(Se(e),t.enabled=!0)}async function L(e){let t=e.replace(/\/?$/,"/"),n=new URL("plugin.json",t),i=new URL("plugin.js",t),a=h.ghost[t],s;a&&(s=h.store[t]);let u=a?a?.enabled:!0,c=a?a?.update:!0;a?.update==null&&a&&(s.update=!0,c=!0);let l;try{let w=await fetch(n,Wt);if(l=await w.json(),w.status!=200&&!a)throw new Error("Plugin manifest not returning success")}catch{if(!a)throw new Error("Plugin manifest cannot be parsed")}if(a)if(l&&c){if(s.manifest.hash==l.hash){s.manifest!=l&&(s.manifest=l),u&&Se(t);return}}else{u&&Se(t);return}let p=await await fetch(i,Wt);if(p.status!=200)throw new Error("Plugin not returning success");let f=await p.text();h.store[t]={manifest:l,js:f,enabled:u,update:c},u&&await Se(t)}function Ne(e){try{Ge(e)}catch{}delete h.store[e]}async function Gt(){h=await Je("PLUGIN_CACHE")}async function Yt(){for(let e of Object.keys(h.ghost))L(e)}function Qt(){for(let e of Object.keys(h.ghost))try{Ge(e)}catch{}}var Wn=d.findByDisplayName("Card"),Gn=d.findByDisplayNameAll("Header")[1],Yn=d.findByDisplayName("Text"),Ye=d.findByDisplayName("Flex"),Qn=d.findByDisplayNameAll("Markdown")[1],Xn=d.findByDisplayName("Switch"),Qe=e=>{let t=h.ghost[e.pluginId],n=h;if(!t.manifest)return null;k(E,!1,(a,s)=>{if(s.path[0]==e.pluginId)return!0});let i=null;return E.ghost[e.pluginId]&&E.ghost[e.pluginId].settings&&(i=o.createElement("svg",{onClick:()=>{Ee(t.manifest.name,E.ghost[e.pluginId].settings)},className:"cumcord-card-settings",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},o.createElement("g",null,o.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})))),o.createElement(Wn,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},o.createElement(Ye,{justify:Ye.Justify.BETWEEN,align:Ye.Align.CENTER},o.createElement("div",{className:"cumcord-card-header"},o.createElement(Gn,{className:"cumcord-card-title"},t.manifest.name),o.createElement(Yn,{className:"cumcord-card-author",tag:"h5"}," ","by ",o.createElement("strong",null,t.manifest.author))),o.createElement("div",{className:"cumcord-card-right"},o.createElement("div",{className:"cumcord-card-buttons"},i,o.createElement("svg",{onClick:()=>{ee({content:"Copied plugin URL to clipboard.",duration:1300}),F(e.pluginId)},className:"cumcord-card-copy",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"none"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"})),t.update?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{n.store[e.pluginId].update=!1}},o.createElement("g",null,o.createElement("rect",{fill:"none",height:"24",width:"24",x:"0"})),o.createElement("g",null,o.createElement("g",null,o.createElement("g",null,o.createElement("path",{d:"M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z"}))))):o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{n.store[e.pluginId].update=!0}},o.createElement("g",null,o.createElement("rect",{fill:"none",height:"24",width:"24"})),o.createElement("path",{d:"M8.67,5.84L7.22,4.39C8.6,3.51,10.24,3,12,3c2.74,0,5.19,1.23,6.84,3.16L21,4v6h-6l2.41-2.41C16.12,6.02,14.18,5,12,5 C10.8,5,9.66,5.31,8.67,5.84z M13,7h-2v1.17l2,2V7z M19.78,22.61l-3-3C15.39,20.48,13.76,21,12,21c-4.97,0-9-4.03-9-9 c0-1.76,0.51-3.4,1.39-4.78L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M15.32,18.15L5.84,8.67C5.31,9.66,5,10.8,5,12 c0,3.86,3.14,7,7,7C13.2,19,14.34,18.69,15.32,18.15z M20.94,13h-2.02c-0.12,0.83-0.39,1.61-0.77,2.32l1.47,1.47 C20.32,15.67,20.79,14.38,20.94,13z"})),o.createElement("svg",{onClick:()=>{X({header:"Do you want to remove this plugin?",content:`All of ${t.manifest.name}'s data will be deleted and cannot be recovered.`,type:"danger",confirmText:"Delete"},a=>{a&&(Ne(e.pluginId),jt(`${e.pluginId}_CUMCORD_STORE`))})},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),o.createElement(Xn,{checked:t.enabled,onChange:()=>{try{ke(e.pluginId)}catch{}}}))),o.createElement(Qn,{className:"cumcord-card-description"},t.manifest.description))};b();O();var Xt=o.useState,eo=d.findByDisplayName("FormTitle"),to=d.findByDisplayName("FormSection"),no=d.findByDisplayName("Flex"),oo=d.findByDisplayName("TextInput"),Xe=d.findByProps("Sizes","Colors","Looks","DropdownSizes"),io=d.findByDisplayName("FormDivider"),en=d.findByDisplayName("SearchBar");function tn(e,t){return e.toLowerCase().split(t.toLowerCase()).length-1}var nn=()=>{let[e,t]=Xt(""),[n,i]=Xt("");function a(){L(n).then(()=>i("")).catch(s=>ee({title:"Failed to import plugin",content:s.message,duration:3e3}))}return k(h),o.createElement(I,null,o.createElement(to,null,o.createElement(eo,{tag:"h1"},"Plugins"),o.createElement(no,{basis:"auto",grow:1,shrink:1},o.createElement(oo,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:n,onChange:s=>i(s),onKeyDown:s=>{s.key==="Enter"&&a()}}),o.createElement(Xe,{color:Xe.Colors.BRAND,size:Xe.Sizes.MEDIUM,onClick:a},"Add plugin")),o.createElement(en,{className:"cumcord-plugin-search",query:e,onQueryChange:s=>{t(s)},placeholder:"Search...",size:en.Sizes.MEDIUM}),o.createElement(io,{className:"cumcord-plugin-divider"}),e?Object.keys(h.ghost).sort((s,u)=>{let c=Object.values(h.ghost[s].manifest).join(""),l=Object.values(h.ghost[u].manifest).join("");return tn(l,e)-tn(c,e)}).map(s=>o.createElement(Qe,{pluginId:s})):Object.keys(h.ghost).map(s=>o.createElement(Qe,{pluginId:s}))))};var on={async initializeSettings(){T(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:10px;margin-bottom:10px}.cumcord-plugin-search{margin-top:10px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-buttons{display:flex;margin-right:4px}.cumcord-card-buttons>*{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-buttons>*:hover{fill:var(--interactive-hover)}.cumcord-card-description{padding-top:3px;overflow-wrap:break-word}.cumcord-card-copy{width:18px}");let e=await Z(()=>Y("SettingsView"));S("getPredicateSections",e.prototype,(t,n)=>{let i=n.findIndex(s=>s.section=="changelog")-1;if(i<0)return n;let a=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:nn}];return n.splice(i,0,...a),n})}};r();b();j();r();O();b();r();b();async function et(){let{svgContentRight:e,svgContentLines:t,svgContentLeft:n,svgDots:i,svgTag:a}=await d.findAsync(()=>d.findByProps("svgContentRight"));return function({className:u}){return o.createElement("svg",{width:"57",height:"40",viewBox:"0 0 57 40",fill:"none",className:u},o.createElement("path",{d:"M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",className:e}),o.createElement("path",{d:"M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",className:t}),o.createElement("path",{d:"M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",className:n}),o.createElement("path",{d:"M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",className:i}),o.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",className:a}),o.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",className:a}))}}r();b();O();var ro=d.findByDisplayName("Clickable"),so=d.findByDisplayName("Link");async function tt(){let{copyLink:e,copyLinkIcon:t,copied:n}=await d.findAsync(()=>d.findByProps("titleRegion"));return function({url:a}){let[s,u]=o.useState(!1),c=o.useRef(null);o.useEffect(()=>function(){return clearTimeout(c)});function l(){s||(F(a),u(!0),c.current=setTimeout(()=>u(!1),2e3))}return o.createElement(ro,{className:`${e}${s?" "+n:""}`,onClick:l},o.createElement(so,{className:t,href:a,target:"_blank"}),s?"Copied!":"Copy Link")}}var te=d.findByDisplayName("Text"),le=d.findByProps("BorderColors","Colors"),ao=d.findByDisplayName("Alert"),lo=d.findByProps("openModal","useModalsStore"),uo=d.findByDisplayName("InfoFilled");async function nt(){let{wrapper:e,content:t,title:n,titleRegion:i,icon:a,infoLink:s,infoIcon:u,buildInfo:c,buildDetails:l,subHead:p}=await d.findAsync(()=>d.findByProps("titleRegion")),f=await tt(),w=await et();return function({url:K}){k(h);let R=Ce(K+"/plugin.json"),Be=h.ghost[K];return o.createElement("div",{className:e},o.createElement(te,{size:te.Sizes.SIZE_12,className:i},o.createElement("strong",{className:n},R.author),o.createElement("a",{className:s,onClick:()=>{lo.openModal(wn=>o.createElement(ao,{...wn,title:"What is this?",body:o.createElement("p",{className:"cumcord-plugembeds-alerttext"},"This is a Cumcord feature. It allows you to install plugins straight from chat.",o.createElement("br",null),"Simply hit the install button on the embed.")}))},target:"_blank"},o.createElement(uo,{className:u})),o.createElement(f,{url:K})),o.createElement("div",{className:t},o.createElement(w,{className:a}),o.createElement("div",{className:c},o.createElement(te,{size:te.Sizes.SIZE_14,className:p},R.name),o.createElement(te,{size:te.Sizes.SIZE_16,className:l},R.description)),o.createElement(le,{size:le.Sizes.MEDIUM,color:R.invalid?le.Colors.GREY:Be?le.Colors.BLUE:le.Colors.GREEN,disabled:R.invalid||Be,onClick:()=>L(K)},R.invalid?"Invalid":Be?"Installed":"Install")))}}var co=/^https:\/\/cumcordplugins\.github\.io\/Condom\/(.+?)\/(.+?)+$/i;function fo(e){return co.test(e)}var rn={async initializePluginEmbeds(){let e=await nt();T(".cumcord-plugembeds-alerttext{margin:0;}"),cumcord.patcher.findAndPatch(()=>d.findByProps("defaultRules","astParserFor"),t=>S("react",t.defaultRules.link,n=>{if(fo(n[0].target))return n[0].target.endsWith("/")||(n[0].target+="/"),o.createElement(e,{url:n[0].target})}))}};O();j();r();b();r();r();O();var ot=V(Q()),N=!1,_,it=ot.make({});async function sn(){if(N){if(_){C.log("Unloading previous plugin version...");try{_.onUnload()}catch(e){C.error("Failed to unload:",e)}}C.log("Loading new plugin version...");try{let e=await(await fetch("http://127.0.0.1:42069")).text();_=We(e,{persist:it,id:"https://FAKE_PLUGIN_ID"}),_.onLoad&&_.onLoad()}catch(e){C.error("Failed to load:",e)}}}function an(){N=!N,N==!1&&(_.onUnload(),_=void 0,it=ot.make({})),C.log(`Dev mode is now ${N?"on":"off"}.`)}function ln(){N?_?_.settings?Ee("Fake Dev Plugin",_.settings):C.log("No settings for this plugin."):C.error("No plugin loaded!"):C.error("Dev mode is off!")}var un=()=>{if(N){if(_)return it;C.error("No plugin loaded!")}else C.error("Dev mode is off!")};function rt(e,t){var n;try{n=JSON.parse(e)}catch{return}switch(n.action.toLowerCase()){case"get_info":t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return;case"install_plugin":if(n.url){if(!n.url.match(/^(http|https):\/\/[^ "]+$/)){t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Invalid URL."}));return}DiscordNative.window.focus(),X({header:"Do you want to install this plugin?",content:`Cumcord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from \`${n.url}\`.`,confirmText:"Install",cancelText:"Cancel",type:"danger"},i=>{if(i){L(n.url),t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"OK"}));return}else{t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:n.uuid||Math.random(),status:"ERROR",error:"Plugin installation cancelled."}));return}})}else{t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",error:"No URL provided."}));return}return;case"update_plugin_dev":N?(sn(),t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"OK"}))):t.send(JSON.stringify({uuid:n.uuid||Math.random(),status:"ERROR",message:"Dev mode not enabled."}));return;default:return}}j();var _e=[];function cn(){window.DiscordNative&&pe("handleConnection",_t(e=>e.Z?.__proto__?.handleConnection).Z,(e,t)=>{let n=e[0];if(n.upgradeReq().url=="/cumcord")_e.push(n),n.on("message",i=>rt(i,n)),n.on("close",()=>{_e.splice(_e.indexOf(n),1)});else return t(...e)})}function dn(){if(window.DiscordNative)for(let e of _e)e.close()}r();b();j();O();var po=M("queryCommands"),mo=M("useApplicationCommandsDiscoveryState"),{sendMessage:fn}=M("sendMessage"),{createBotMessage:go}=M("createBotMessage"),{receiveMessage:ho}=M("receiveMessage"),ne="917806991081099275",yo="2d179b0c17f137125df3f01949cb0e5f",wo="f76f807bfc5692f3f14d1935f063d64b",pn={id:ne,icon:yo,name:"Cumcord",type:1},H=[],Co={string:3,int:4,bool:5,user:6,channel:7,role:8};function mn(){S("queryCommands",po,(e,t)=>[...t,...H]),S("useApplicationCommandsDiscoveryState",mo,(e,t)=>{H.length>0&&(t.discoverySections.find(n=>n.id===ne)||(t.discoverySections.push({data:H,section:pn,key:ne}),t.sectionsOffset.push(H.length),t.discoveryCommands=[...t.discoveryCommands,...H]),t.applicationCommandSections.find(n=>n.id===ne)||t.applicationCommandSections.push(pn))})}function gn({name:e,description:t,args:n,handler:i}){let a={applicationId:ne,type:0,target:1,description:t,name:e,id:"CUMCORD_COMMAND"};return n&&(a.options=n.map(s=>{s.type||(s.type="string");let u={...s};return u.type=Co[s.type],u.required=u.required===void 0?!0:u.required,u})),a.execute=(s,u)=>{if(!i)return;let c={};if(n)for(let l of s)c[l.name]=l.value;(async()=>{try{let l=await i({args:c,...u},p=>{let f=go(u.channel.id);f.author.username="Cumcord",f.author.avatar=wo,f.author.id=ne,typeof p=="string"?f.content=p:f={...f,...p},ho(f.channel_id,f)});if(l)switch(typeof l){case"string":fn(u.channel.id,{content:l,validNonShortcutEmojis:[]});break;case"undefined":break;default:fn(u.channel.id,l)}}catch(l){C.error(l)}})()},H.push(a),()=>{let s=H.indexOf(a);s>-1&&H.splice(s,1)}}r();var vo="https://raw.githubusercontent.com/Cumcord/Lamivudine/master/src/index.js",bo=eval;function hn(e){e.shiftKey&&e.altKey&&e.key==="Q"&&(fetch(vo).then(t=>t.text()).then(t=>bo(t)).catch(t=>console.error(t)),xo())}function st(){document.addEventListener("keydown",hn)}function xo(){document.removeEventListener("keydown",hn)}function Mo(){return Qt(),st(),dn(),Ie(),qt(),dt(),window.cumcord=void 0,delete window.cumcord,!0}var De=[];async function Po(){C.log("Initializing Cumcord API"),window.cumcord={uninject:Mo,modules:{webpackModules:d,webpack:d,common:Dt,internal:Ft},plugins:{importPlugin:L,removePlugin:Ne,togglePlugin:ke},patcher:{before:fe,after:S,instead:pe,findAndPatch:Le,injectCSS:T},ui:{toasts:{showToast:ee},modals:{showConfirmationModal:X},components:{ErrorBoundary:I}},utils:{logger:C,findInTree:z,findInReactTree:me,getReactInstance:W,getOwnerInstance:he,sleep:ye,useNest:k,copyText:F,findByDomNode:$e},commands:{addCommand:gn},cum:(e=2,t=6)=>{let n=`8${"=".repeat(e)}D ${"~".repeat(t)}`;return Array.isArray(De)?new Promise(i=>{De.push(()=>i(n))}):n}},window.DiscordNative&&(window.cumcord.dev={toggleDevMode:an,showSettings:ln},Object.defineProperty(window.cumcord.dev,"storage",{configurable:!0,enumerable:!0,get:un}),Object.defineProperty(window.cumcord.dev,"isEnabled",{configurable:!0,enumerable:!0,get:()=>N})),T(".cumcord-error-handler{font-family: var(--font-display);color:var(--text-normal);padding:16px}.cumcord-error-handler-title{margin-bottom:7px;font-weight:bold;font-size:24px}.cumcord-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text}"),Zt(),await Gt(),on.initializeSettings(),window.cumcord.plugins.installed=h,window.cumcord.plugins.loaded=E;try{mn()}catch{}await Yt();try{st(),rn.initializePluginEmbeds()}catch{}cn(),C.log("Cumcord is injected!");for(let e of De)e();De=void 0}var yn=Po;if(window.cumcord)throw new Error("Cumcord is already injected");yn();})();
//# sourceURL=Cumcord