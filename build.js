(()=>{var Co=Object.create;var _e=Object.defineProperty;var xo=Object.getOwnPropertyDescriptor;var Mo=Object.getOwnPropertyNames;var Po=Object.getPrototypeOf,So=Object.prototype.hasOwnProperty;var Do=e=>_e(e,"__esModule",{value:!0});var h=(e,t)=>()=>(e&&(t=e(e=0)),t);var K=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Eo=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mo(t))!So.call(e,r)&&r!=="default"&&_e(e,r,{get:()=>t[r],enumerable:!(o=xo(t,r))||o.enumerable});return e},Z=e=>Eo(Do(_e(e!=null?Co(Po(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var O,fe=h(()=>{i();O=webpackChunkdiscord_app.push([[Symbol()],{},e=>e]);webpackChunkdiscord_app.pop()});function Te(e,t){let o=!1,r,[a,s]=q(e,!1);return a.then(u=>{o||(r=t(u))}),()=>{o=!0,s?.(),r?.()}}var at=h(()=>{i();v()});var Oe,A,pe=h(()=>{i();Oe=["a","b","i"],A=new Map});function lt(e,t,o,r,a){let s=A.get(t)?.[e];if(!s)return a?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let l of s.b.values()){let p=l.call(r,o);Array.isArray(p)&&(o=p)}let u=(...l)=>a?Reflect.construct(s.o,l,r):s.o.apply(r,l);for(let l of s.i.values()){let p=u;u=(...f)=>l.call(r,f,p)}let c=u(...o);for(let l of s.a.values())c=l.call(r,o,c)??c;return c}var ut=h(()=>{i();pe()});function Ae(e,t,o,r){let a=A.get(e),s=a?.[t];return s?.[r].has(o)?(s[r].delete(o),Oe.every(u=>s[u].size===0)&&(Reflect.defineProperty(e,t,{value:s.o,writable:!0,configurable:!0})||(e[t]=s.o),delete a[t]),Object.keys(a).length==0&&A.delete(e),!0):!1}function me(){for(let[e,t]of A.entries())for(let o in t)for(let r of Oe)for(let a of t[o]?.[r].keys()??[])Ae(e,o,a,r)}var Ie=h(()=>{i();pe()});var ge,ct=h(()=>{i();ut();pe();Ie();ge=e=>(t,o,r,a=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);A.has(o)||A.set(o,{});let s=A.get(o);if(!s[t]){let l=o[t];s[t]={o:l,b:new Map,i:new Map,a:new Map};let p=(b,C,P)=>{let ne=lt(t,o,C,b,P);return a&&c(),ne},f=new Proxy(l,{apply:(b,C,P)=>p(C,P,!1),construct:(b,C)=>p(l,C,!0),get:(b,C,P)=>C=="toString"?l.toString.bind(l):Reflect.get(b,C,P)});Reflect.defineProperty(o,t,{value:f,configurable:!0,writable:!0})||(o[t]=f)}let u=Symbol(),c=()=>Ae(o,t,u,e);return s[t][e].set(u,r),c}});var ie,re,S,dt=h(()=>{i();ct();Ie();ie=ge("b"),re=ge("i"),S=ge("a")});function I(e){let t=document.createElement("style");return t.className="CUMCORD_INJECTED_CSS",t.textContent=e,document.head.appendChild(t),o=>{typeof o=="undefined"?t.remove():t.textContent=o}}function ft(){for(let e of document.getElementsByClassName("CUMCORD_INJECTED_CSS"))e.remove()}var z=h(()=>{i();at();dt()});function q(e,t=!0){let o=e();if(o!==void 0)return o=Promise.resolve(o),t?o:[o,()=>{}];let r=[];function a(){for(let u of r)u()}let s=new Promise(u=>{r.push(ie("push",window.webpackChunkdiscord_app,([[,c]])=>{for(let l in c)r.push(S(l,c,()=>{o===void 0&&(o=e(),o!==void 0&&(a(),u(o)))},!0))}))});return t?s:[s,a]}var pt=h(()=>{i();z()});function F(e,t,{walkable:o=null,ignore:r=[],limit:a=100}={}){let s=0;function u(c,l,{walkable:p=null,ignore:f=[]}={}){if(s+=1,s>a)return null;if(typeof l=="string"){if(c.hasOwnProperty(l))return c[l]}else if(l(c))return c;if(c){if(Array.isArray(c))for(let E of c){let b=u(E,l,{walkable:p,ignore:f});if(b)return b}else if(typeof c=="object")for(let E of Object.keys(c)){if(p!=null&&!p.includes(E)||f.includes(E))continue;let b;try{b=u(c[E],l,{walkable:p,ignore:f})}catch{continue}if(b)return b}}}return u(e,t,{walkable:o,ignore:r})}var je=h(()=>{i()});function he(e,t){return F(e,t,{walkable:["props","children","child","sibling"]})}var mt=h(()=>{i();je()});function Le(e,t,o){console[o]("%cCumcord%c",`background-color: ${t}; color: white; border-radius: 4px; padding: 0px 6px 0px 6px; font-weight: bold`,"",...e)}var ko,w,gt=h(()=>{i();ko={log:(...e)=>{Le(e,"#7289da","log")},error:(...e)=>{Le(e,"red","error")},warn:(...e)=>{Le(e,"#debf18","warn")}},w=ko});var yt=K((Yn,ht)=>{i();fe();var No=Object.values(O.c).find(e=>e.exports?.useState).exports;ht.exports=No});var ye=K(ze=>{i();"use strict";Object.defineProperty(ze,"__esModule",{value:!0});ze.default=Object.freeze({GET:"GET",SET:"SET",DELETE:"DELETE",UPDATE:"UPDATE"})});var wt=K(se=>{i();"use strict";var Bo=se&&se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(se,"__esModule",{value:!0});var Fe=yt(),G=Bo(ye());function _o(e,t=!1,o=()=>!0){let r=(0,Fe.useRef)(e.ghost),[,a]=(0,Fe.useReducer)(s=>~s,0);return(0,Fe.useEffect)(()=>{function s(u,c){o(u,c)&&a()}return e.on(G.default.UPDATE,s),t||(e.on(G.default.SET,s),e.on(G.default.DELETE,s)),()=>{e.off(G.default.UPDATE,s),t||(e.off(G.default.SET,s),e.off(G.default.DELETE,s))}},[]),e.ghost}se.default=_o});var vt=K(J=>{i();"use strict";var To=J&&J.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(J,"__esModule",{value:!0});J.useNest=void 0;var Oo=wt();Object.defineProperty(J,"useNest",{enumerable:!0,get:function(){return To(Oo).default}})});var bt,k,Ct=h(()=>{i();bt=Z(vt()),k=bt.useNest});function U(e){window.DiscordNative?DiscordNative.clipboard.copy(e):navigator.clipboard.writeText(e).then(()=>{},()=>{let t=document.createElement("textarea");t.style.visibility="hidden",t.style.position="fixed",t.style.top="0",t.style.left="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(o){console.error(o)}document.body.removeChild(t)})}var xt=h(()=>{i()});function W(e){return e.__reactFiber$}var Ue=h(()=>{i()});function we(e){for(let t=W(e);t;t=t.return){let o=t.stateNode;if(o&&o.forceUpdate)return o}}var Mt=h(()=>{i();Ue()});function ve(e){return new Promise(t=>setTimeout(t,e))}var Pt=h(()=>{i()});function Ce(e){let[t,o]=n.useState(be[e]);return n.useEffect(()=>{be[e]||fetch(e).then(r=>r.json()).then(r=>{be[e]=r,o(r)}).catch(()=>{be[e]=St,o(St)})},[e]),t??{name:"Loading...",description:"This module is still loading.",author:"Loading..."}}var be,St,Dt=h(()=>{i();V();be={},St={name:"Invalid module.",description:"This module does not exist.",author:"Unknown",invalid:!0}});var Ao,He,Et=h(()=>{i();Ao=["Clickable","Tooltip"],He=(e,{parent:t=!1,displayName:o=!0,blockList:r=Ao}={})=>{let a=l=>!l?.type?.displayName||r.includes(l?.type?.displayName),s=l=>typeof l?.type!="string"&&(o?!a(l):!0),u=l=>s(l)?l?.type:u(l.return),c=u(cumcord.utils.getReactInstance(e));return t?find(l=>l?.default===c):c}});var N=h(()=>{i();je();mt();gt();Ct();xt();Ue();Mt();Pt();Dt();Et()});var g,$e=h(()=>{i();N();g={filterModules:(e,t=!1)=>o=>{let r=[];for(let a in e)if(e.hasOwnProperty(a)){let s=e[a].exports;if(!s)continue;if(s.default&&s.__esModule&&o(s.default)){if(t)return s.default;r.push(s.default)}if(o(s)){if(t)return s;r.push(s)}}if(!t)return r},byProps:e=>t=>e.every(o=>t[o]!==void 0),byProtos:e=>t=>t.prototype&&e.every(o=>t.prototype[o]!==void 0),byDisplayName:(e,t=!0)=>t?o=>o.displayName===e:o=>o?.default?.displayName===e,byKeyword:e=>t=>e.every(o=>Object.keys(t).some(r=>r.toLowerCase().includes(o.toLowerCase()))==!0),byStrings:e=>t=>{if(typeof t=="function"){if(e.every(o=>t.toString().includes(o)))return!0}else return F(t,o=>{if(!!o)try{for(let r of Object.values(o))if(typeof r=="function"&&e.every(a=>r.toString().includes(a)))return!0}catch{}})},byDispNameDeep:e=>t=>{let o=new RegExp(`(${e}$)|((\\w+\\()+${e}\\))`);if(o.test(t.displayName))return!0;if(typeof t.$$typeof=="symbol"&&t.Consumer===void 0&&(t.type||t.render)){for(;typeof t.type=="object"||typeof t.render=="object";)t=t.type??t.render;if(o.test(t.type?.displayName)||o.test(t.render?.displayName))return!0}}}});var Io,jo,kt,Nt=h(()=>{i();$e();fe();Io=e=>{let t=[],o=r=>{for(let a=0;a<e.length;a++)!e[a][0](r)||(e[a][1]?t[a]?t[a].push(r):t[a]=[r]:t[a]||(t[a]=r))};for(let r in O.c){if(!O.c.hasOwnProperty(r))continue;let a=O.c[r].exports;!a||(a.default&&a.__esModule&&o(a.default),o(a))}return t},jo=e=>({find:t=>e.push([t,!1]),findAll:t=>e.push([t,!0]),findByProps:(...t)=>e.push([g.byProps(t),!1]),findByPropsAll:(...t)=>e.push([g.byProps(t),!0]),findByPrototypes:(...t)=>e.push([g.byProtos(t),!1]),findByPrototypesAll:(...t)=>e.push([g.byProtos(t),!0]),findByDisplayName:(t,o=!0)=>e.push([g.byDisplayName(t,o),!1]),findByDisplayNameAll:(t,o=!0)=>e.push([g.byDisplayName(t,o),!0]),findByStrings:(...t)=>e.push([g.byStrings(t),!1]),findByStringsAll:(...t)=>e.push([g.byStrings(t),!0]),findByKeywordAll:(...t)=>e.push([g.byKeyword(t),!0]),findByDispNameDeep:(t,o=!0)=>e.push([g.byDispNameDeep(t,o),!1]),findByDispNameDeepAll:(t,o=!0)=>e.push([g.byDispNameDeep(t,o),!0])}),kt=e=>{let t=[],o=jo(t);return e(o),Io(t)}});var m,Bt,Ti,Oi,x,Ai,Ii,ji,Q,_t,Li,zi,Fi,Ui,Hi,d,v=h(()=>{i();fe();pt();$e();Nt();N();m={modules:O.c,findAsync:q,batchFind:kt,find:g.filterModules(O.c,!0),findAll:g.filterModules(O.c),getModule(e){for(let t in m.modules){let o=m.modules[t];if(o?.exports===e)return o;if(o?.exports?.__esModule&&o?.exports?.default===e)return o?.exports}},findByProps:(...e)=>m.find(g.byProps(e)),findByPropsAll:(...e)=>m.findAll(g.byProps(e)),findByPrototypes:(...e)=>m.find(g.byProtos(e)),findByPrototypesAll:(...e)=>m.findAll(g.byProtos(e)),findByDisplayName:(e,t=!0)=>m.find(g.byDisplayName(e,t)),findByDisplayNameAll:(e,t=!0)=>m.findAll(g.byDisplayName(e,t)),findByStrings:(...e)=>(w.warn("findByStrings is not performant and should NOT be used in production code. The reason it is still in Cumcord is for development uses. Manually making a .toString searcher using webpack.find is far more performant."),m.find(g.byStrings(e))),findByStringsAll:(...e)=>m.findAll(g.byStrings(e)),findByKeywordAll:(...e)=>m.findAll(g.byKeyword(e)),findByDispNameDeep:(e,t=!0)=>m.find(g.byDispNameDeep(e,t)),findByDispNameDeepAll:(e,t=!0)=>m.findAll(g.byDispNameDeep(e,t))},Bt=m.find,Ti=m.findAll,Oi=m.getModule,x=m.findByProps,Ai=m.findByPropsAll,Ii=m.findByPrototypes,ji=m.findByPrototypesAll,Q=m.findByDisplayName,_t=m.findByDisplayNameAll,Li=m.findByStrings,zi=m.findByStringsAll,Fi=m.findByKeywordAll,Ui=m.findByDispNameDeep,Hi=m.findByDispNameDeepAll,d=m});var D,n,Re,Ki,Vi,Zi,qi,Tt,Gi,Ji,Wi,Qi,Ot,V=h(()=>{i();v();D={constants:d.findByProps("API_HOST","APP_URL_PREFIX"),channels:d.findByProps("getChannelId","getVoiceChannelId"),Flux:d.findByProps("Store","connectStores"),FluxDispatcher:d.findByProps("_currentDispatchActionType","_subscriptions","_waitQueue"),i18n:d.findByPropsAll("Messages","_requestedLocale")[1],React:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","createElement"),ReactDOM:d.findByProps("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED","hydrate"),Redux:d.findByProps("createStore","__DO_NOT_USE__ActionTypes"),zustand:d.find(e=>{if(typeof e=="function"&&e.toString().includes("[useStore, api] = create() is deprecated and will be removed in v4"))return e}),uuid:{v4:d.findByProps("v4","v1")},highlightjs:d.findByProps("initHighlighting")},n=D.React,Re=D.ReactDOM,Ki=D.Flux,Vi=D.FluxDispatcher,Zi=D.Redux,qi=D.constants,Tt=D.channels,Gi=D.i18n,Ji=D.zustand,Wi=D.uuid,Qi=D.highlightjs,Ot=D});var i=h(()=>{V()});var jt=K(ae=>{i();"use strict";var Lo=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});var At=Lo(ye()),It=class{constructor(){this.listeners=Object.values(At.default).reduce((t,o)=>(t[o]=new Set,t),{}),this.on=function(t,o){if(this.listeners[t].has(o))throw Error(`This listener on ${t} already exists.`);this.listeners[t].add(o)},this.once=function(t,o){let r=(a,s)=>{this.off(a,r),o(a,s)};this.on(t,r)},this.off=function(t,o){this.listeners[t].delete(o)},this.emit=function(t,o){for(let r of this.listeners[t])r(t,o)};for(let t of Object.values(At.default))this[t.toLowerCase()]=o=>{this.emit(t,o)}}};ae.default=It});var Lt=K(le=>{i();"use strict";var zo=le&&le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(le,"__esModule",{value:!0});var Fo=zo(jt());function Uo(e={},{nestArrays:t=!0}={}){let o=new Fo.default;function r(a,s,u){return new Proxy(a,{get(c,l){let p=[...u,l],f=c[l];return f!=null?(o.get({path:p,value:f}),!t&&Array.isArray(f)?f:typeof f=="object"?r(f,s,p):f):r(c[l]={},s,p)},set(c,l,p){return c[l]=p,o.set({path:[...u,l],value:p}),!0},deleteProperty(c,l){return delete c[l]?(o.delete({path:[...u,l]}),!0):!1},has(c,l){return typeof c[l]=="object"&&Object.keys(c[l]).length===0?!1:l in c}})}return Object.assign({store:r(e,e,[]),ghost:e},o)}le.default=Uo});var Y=K(H=>{i();"use strict";var zt=H&&H.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(H,"__esModule",{value:!0});H.make=H.Events=void 0;var Ho=ye();Object.defineProperty(H,"Events",{enumerable:!0,get:function(){return zt(Ho).default}});var $o=Lt();Object.defineProperty(H,"make",{enumerable:!0,get:function(){return zt($o).default}})});i();v();V();i();var Ht=Z(Y());i();i();function Ro(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let t;return new Promise(o=>{let r=()=>indexedDB.databases().finally(o);t=setInterval(r,100),r()}).finally(()=>clearInterval(t))}var Ft=Ro;function xe(e){return new Promise((t,o)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>o(e.error)})}function Ko(e,t){let o=Ft().then(()=>{let r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),xe(r)});return(r,a)=>o.then(s=>a(s.transaction(t,r).objectStore(t)))}var Ke;function Ve(){return Ke||(Ke=Ko("keyval-store","keyval")),Ke}function Me(e,t=Ve()){return t("readonly",o=>xe(o.get(e)))}function Pe(e,t,o=Ve()){return o("readwrite",r=>(r.put(t,e),xe(r.transaction)))}function Ut(e,t=Ve()){return t("readwrite",o=>(o.delete(e),xe(o.transaction)))}var $t={nests:Ht.default,idbKeyval:{get:Me,set:Pe}};i();v();z();i();i();v();i();v();i();i();V();var B=class extends n.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}render(){return this.state.hasError?n.createElement("div",{className:"cumcord-error-handler"},n.createElement("h1",{className:"cumcord-error-handler-title"},"Oops, we had a fucky wucky. (Cumcord)"),n.createElement("code",{className:"cumcord-error-handler-code"},`${this.state.error}`)):this.props.children}};var Se=x("ModalCloseButton"),Rt=x("Sizes","Tags"),Kt=Q("Flex"),{openModal:Vo}=x("openModal","openModalLazy");function X(e,t){Vo(o=>n.createElement(Se.ModalRoot,{transitionState:o.transitionState,size:"large",className:"cumcord-settings-modal"},n.createElement(B,null,n.createElement(Se.ModalHeader,{separator:!1},n.createElement(Kt.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},n.createElement(Rt,{tag:"h2",size:Rt.Sizes.SIZE_20},e)),n.createElement(Kt.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},n.createElement(Se.ModalCloseButton,{onClick:o.onClose}))),n.createElement(Se.ModalContent,null,typeof t=="function"?n.createElement(t):t))))}N();i();v();var{openModal:Zo}=x("openModal","openModalLazy"),Ze=x("button","colorRed"),qo=Q("ConfirmModal"),Go=_t("Markdown")[1];async function ee({header:e="Are you sure?",confirmText:t="Confirm",cancelText:o="Cancel",content:r="Are you sure you want to do that?",type:a="neutral"}={},s=()=>{}){return new Promise(u=>{var c,l=!1;switch(a.toLowerCase()){case"danger":c=Ze.colorRed;break;case"confirm":c=Ze.colorGreen;break;default:c=Ze.colorBrandNew;break}function p(f){l||(l=!0,s(f),u(f))}Zo(f=>(f.transitionState===3&&p(!1),n.createElement(qo,{header:e,confirmText:t,cancelText:o,transitionState:f.transitionState,confirmButtonColor:c,onClose:()=>{p(!1)},onCancel:()=>{p(!1),f.onClose()},onConfirm:()=>{p(!0),f.onClose()}},n.createElement(Go,{editable:!1},r))))})}i();V();z();i();v();var Jo=d.findByDisplayName("LegacyHeader"),Vt=d.findByDisplayName("LegacyText"),Zt=e=>n.createElement("div",{onClick:e.onClick,className:"cumcord-toast"+(e.className?` ${e.className}`:"")},e.title?n.createElement(Jo,{className:"cumcord-toast-title"},e.title):null,e.content?n.createElement("div",{className:"cumcord-toast-content"},n.createElement(Vt,{size:Vt.Sizes.SIZE_16},e.content)):null);i();N();i();var qt=Z(Y()),j=qt.make({toasts:[]});var Gt=()=>(k(j),n.createElement(n.Fragment,null,j.ghost.toasts.map(e=>e())));var ue=document.createElement("div");function Jt(){I("@keyframes cumcord-fadeIn{0%{opacity:0}100%{opacity:1}}.cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:cumcord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.cumcord-toast-title{font-size:22px;line-height:1}"),ue.className="cumcord-toast-container",document.getElementById("app-mount").prepend(ue),Re.render(n.createElement(Gt,null),ue)}function Wt(){Re.unmountComponentAtNode(ue),ue.remove()}function te({title:e,content:t,onClick:o=()=>{},className:r,duration:a=3e3}){let s=()=>n.createElement(Zt,{onClick:o,className:r,title:e,content:t});j.ghost.toasts.push(s),j.update();function u(){let c=j.ghost.toasts.indexOf(s);c>-1&&(j.ghost.toasts.splice(c,1),j.update())}return a!=1/0&&setTimeout(u,a),u}i();i();var ce=Z(Y());async function qe(e){let t=await Me(`${e}_CUMCORD_STORE`)||{},o=ce.make(t),r=()=>Pe(`${e}_CUMCORD_STORE`,{...o.ghost});return o.on(ce.Events.SET,r),o.on(ce.Events.DELETE,r),o}var Qt=Z(Y()),Yt={cache:"no-store"},M=Qt.make({}),y={},Wo=window.eval;function Ge(e,t){let o=Object.assign({},cumcord);o.pluginData=t;let r=new URL(t.id),a=`(cumcord)=>{return ${e}}`+atob("Ci8v")+`# sourceURL=${r.hostname}${r.pathname}`,s=Wo(a)(o),u=s;return typeof s=="function"&&(u=s(t)),u}async function De(e){let t=y.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(M.ghost[e])throw new Error(`Plugin ${e} already loaded`);let o=Ge(t.js,{persist:await qe(e),id:e,manifest:t.manifest,showSettings(){X(t.manifest.name,M.ghost[e].settings)}});try{o.onLoad&&o.onLoad()}catch{}M.store[e]=o}function Je(e){let t=M.ghost[e];if(!t)throw new Error(`Plugin ${e} not found`);if(!M.ghost[e])throw new Error(`Plugin ${e} isn't loaded`);try{t.onUnload()}catch{}delete M.store[e]}function Ee(e){let t=y.store[e];if(!y.ghost[e])throw new Error(`Plugin ${e} not found`);t.enabled?(Je(e),t.enabled=!1):(De(e),t.enabled=!0)}async function L(e){let t=e.replace(/\/?$/,"/"),o=new URL("plugin.json",t),r=new URL("plugin.js",t),a=y.ghost[t],s;a&&(s=y.store[t]);let u=a?a?.enabled:!0,c=a?a?.update:!0;a?.update==null&&a&&(s.update=!0,c=!0);let l;try{let E=await fetch(o,Yt);if(l=await E.json(),E.status!=200&&!a)throw new Error("Plugin manifest not returning success")}catch{if(!a)throw new Error("Plugin manifest cannot be parsed")}if(a)if(l&&c){if(s.manifest.hash==l.hash){s.manifest!=l&&(s.manifest=l),u&&De(t);return}}else{u&&De(t);return}let p=await await fetch(r,Yt);if(p.status!=200)throw new Error("Plugin not returning success");let f=await p.text();y.store[t]={manifest:l,js:f,enabled:u,update:c},u&&await De(t)}function ke(e){try{Je(e)}catch{}delete y.store[e]}async function Xt(){y=await qe("PLUGIN_CACHE")}async function eo(){for(let e of Object.keys(y.ghost))L(e)}function to(){for(let e of Object.keys(y.ghost))try{Je(e)}catch{}}var Qo=d.findByDisplayName("Card"),Yo=d.findByProps("Sizes","Tags"),Xo=d.findByDisplayName("FormText"),We=d.findByDisplayName("Flex"),en=d.findByDisplayNameAll("Markdown")[1],tn=d.findByDisplayName("Switch"),Qe=e=>{let t=y.ghost[e.pluginId],o=y;if(!t.manifest)return null;k(M,!1,(a,s)=>{if(s.path[0]==e.pluginId)return!0});let r=null;return M.ghost[e.pluginId]&&M.ghost[e.pluginId].settings&&(r=n.createElement("svg",{onClick:()=>{X(t.manifest.name,M.ghost[e.pluginId].settings)},className:"cumcord-card-settings",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},n.createElement("g",null,n.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),n.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})))),n.createElement(Qo,{className:"cumcord-plugin-card",type:"cardPrimary",outline:!1,editable:!1},n.createElement(We,{justify:We.Justify.BETWEEN,align:We.Align.CENTER},n.createElement("div",{className:"cumcord-card-header"},n.createElement(Yo,{className:"cumcord-card-title"},t.manifest.name),n.createElement(Xo,{className:"cumcord-card-author",tag:"h5"}," ","by ",n.createElement("strong",null,t.manifest.author))),n.createElement("div",{className:"cumcord-card-right"},n.createElement("div",{className:"cumcord-card-buttons"},r,n.createElement("svg",{onClick:()=>{te({content:"Copied plugin URL to clipboard.",duration:1300}),U(e.pluginId)},className:"cumcord-card-copy",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"none"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"})),t.update?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{o.store[e.pluginId].update=!1}},n.createElement("g",null,n.createElement("rect",{fill:"none",height:"24",width:"24",x:"0"})),n.createElement("g",null,n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M21,10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1c-2.73,2.71-2.73,7.08,0,9.79s7.15,2.71,9.88,0 C18.32,15.65,19,14.08,19,12.1h2c0,1.98-0.88,4.55-2.64,6.29c-3.51,3.48-9.21,3.48-12.72,0c-3.5-3.47-3.53-9.11-0.02-12.58 s9.14-3.47,12.65,0L21,3V10.12z M12.5,8v4.25l3.5,2.08l-0.72,1.21L11,13V8H12.5z"}))))):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",onClick:()=>{o.store[e.pluginId].update=!0}},n.createElement("g",null,n.createElement("rect",{fill:"none",height:"24",width:"24"})),n.createElement("path",{d:"M8.67,5.84L7.22,4.39C8.6,3.51,10.24,3,12,3c2.74,0,5.19,1.23,6.84,3.16L21,4v6h-6l2.41-2.41C16.12,6.02,14.18,5,12,5 C10.8,5,9.66,5.31,8.67,5.84z M13,7h-2v1.17l2,2V7z M19.78,22.61l-3-3C15.39,20.48,13.76,21,12,21c-4.97,0-9-4.03-9-9 c0-1.76,0.51-3.4,1.39-4.78L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M15.32,18.15L5.84,8.67C5.31,9.66,5,10.8,5,12 c0,3.86,3.14,7,7,7C13.2,19,14.34,18.69,15.32,18.15z M20.94,13h-2.02c-0.12,0.83-0.39,1.61-0.77,2.32l1.47,1.47 C20.32,15.67,20.79,14.38,20.94,13z"})),n.createElement("svg",{onClick:()=>{ee({header:"Do you want to remove this plugin?",content:`All of ${t.manifest.name}'s data will be deleted and cannot be recovered.`,type:"danger",confirmText:"Delete"},a=>{a&&(ke(e.pluginId),Ut(`${e.pluginId}_CUMCORD_STORE`))})},className:"cumcord-card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}))),n.createElement(tn,{checked:t.enabled,onChange:()=>{try{Ee(e.pluginId)}catch{}}}))),n.createElement(en,{className:"cumcord-card-description"},t.manifest.description))};v();N();var oo=n.useState,on=d.findByDisplayName("FormTitle"),nn=d.findByDisplayName("FormSection"),rn=d.findByDisplayName("Flex"),sn=d.findByDisplayName("TextInput"),Ye=d.findByProps("Sizes","Colors","Looks","DropdownSizes"),an=d.findByDisplayName("FormDivider"),no=d.findByDisplayName("SearchBar");function io(e,t){return e.toLowerCase().split(t.toLowerCase()).length-1}var ro=()=>{let[e,t]=oo(""),[o,r]=oo("");function a(){L(o).then(()=>r("")).catch(s=>te({title:"Failed to import plugin",content:s.message,duration:3e3}))}return k(y),n.createElement(B,null,n.createElement(nn,null,n.createElement(on,{tag:"h1"},"Plugins"),n.createElement(rn,{basis:"auto",grow:1,shrink:1},n.createElement(sn,{className:"cumcord-plugin-import",placeholder:"https://example.com/plugin",type:"text",value:o,onChange:s=>r(s),onKeyDown:s=>{s.key==="Enter"&&a()}}),n.createElement(Ye,{color:Ye.Colors.BRAND,size:Ye.Sizes.MEDIUM,onClick:a},"Add plugin")),n.createElement(no,{className:"cumcord-plugin-search",query:e,onQueryChange:s=>{t(s)},placeholder:"Search...",size:no.Sizes.MEDIUM}),n.createElement(an,{className:"cumcord-plugin-divider"}),e?Object.keys(y.ghost).sort((s,u)=>{let c=Object.values(y.ghost[s].manifest).join(""),l=Object.values(y.ghost[u].manifest).join("");return io(l,e)-io(c,e)}).map(s=>n.createElement(Qe,{pluginId:s})):Object.keys(y.ghost).map(s=>n.createElement(Qe,{pluginId:s}))))};var so={async initializeSettings(){I(".cumcord-plugin-card{padding:16px;margin-bottom:10px}.cumcord-plugin-import{flex-grow:1;margin-right:20px}.cumcord-plugin-divider{margin-top:10px;margin-bottom:10px}.cumcord-plugin-search{margin-top:10px}.cumcord-card-header{display:inline-block}.cumcord-card-author,.cumcord-card-title{display:inline}.cumcord-card-right{display:flex}.cumcord-card-buttons{display:flex;margin-right:4px}.cumcord-card-buttons>*{fill:var(--interactive-normal);cursor:pointer;width:20px}.cumcord-card-buttons>*:hover{fill:var(--interactive-hover)}.cumcord-card-description{padding-top:3px;overflow-wrap:break-word}.cumcord-card-copy{width:18px}");let e=await q(()=>Q("SettingsView"));S("getPredicateSections",e.prototype,(t,o)=>{let r=o.findIndex(s=>s.section=="changelog")-1;if(r<0)return o;let a=[{section:"DIVIDER"},{section:"HEADER",label:"Cumcord"},{section:"CUMCORD_PLUGINS",label:"Plugins",element:ro}];return o.splice(r,0,...a),o})}};i();v();z();i();N();v();i();v();async function Xe(){let{svgContentRight:e,svgContentLines:t,svgContentLeft:o,svgDots:r,svgTag:a}=await d.findAsync(()=>d.findByProps("svgContentRight"));return function({className:u}){return n.createElement("svg",{width:"57",height:"40",viewBox:"0 0 57 40",fill:"none",className:u},n.createElement("path",{d:"M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",className:e}),n.createElement("path",{d:"M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",className:t}),n.createElement("path",{d:"M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",className:o}),n.createElement("path",{d:"M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",className:r}),n.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",className:a}),n.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",className:a}))}}i();v();N();var ln=d.findByDisplayName("Clickable"),un=d.findByDisplayName("Link");async function et(){let{copyLink:e,copyLinkIcon:t,copied:o}=await d.findAsync(()=>d.findByProps("titleRegion"));return function({url:a}){let[s,u]=n.useState(!1),c=n.useRef(null);n.useEffect(()=>function(){return clearTimeout(c)});function l(){s||(U(a),u(!0),c.current=setTimeout(()=>u(!1),2e3))}return n.createElement(ln,{className:`${e}${s?" "+o:""}`,onClick:l},n.createElement(un,{className:t,href:a,target:"_blank"}),s?"Copied!":"Copy Link")}}var $=d.findByDisplayName("LegacyText");$||($=d.findByDisplayName("Text"));var de=d.findByProps("BorderColors","Colors"),cn=d.findByDisplayName("Alert"),dn=d.findByProps("openModal","useModalsStore"),fn=d.findByDisplayName("InfoFilled");async function tt(){let{wrapper:e,content:t,title:o,titleRegion:r,icon:a,infoLink:s,infoIcon:u,buildInfo:c,buildDetails:l,subHead:p}=await d.findAsync(()=>d.findByProps("titleRegion")),f=await et(),E=await Xe();return function({url:C}){k(y);let P=Ce(C+"/plugin.json"),ne=y.ghost[C];return n.createElement("div",{className:e},n.createElement($,{size:$.Sizes.SIZE_12,className:r},n.createElement("strong",{className:o},P.author),n.createElement("a",{className:s,onClick:()=>{dn.openModal(bo=>n.createElement(cn,{...bo,title:"What is this?",body:n.createElement("p",{className:"cumcord-plugembeds-alerttext"},"This is a Cumcord feature. It allows you to install plugins straight from chat.",n.createElement("br",null),"Simply hit the install button on the embed.")}))},target:"_blank"},n.createElement(fn,{className:u})),n.createElement(f,{url:C})),n.createElement("div",{className:t},n.createElement(E,{className:a}),n.createElement("div",{className:c},n.createElement($,{size:$.Sizes.SIZE_14,className:p},P.name),n.createElement($,{size:$.Sizes.SIZE_16,className:l},P.description)),n.createElement(de,{size:de.Sizes.MEDIUM,color:P.invalid?de.Colors.GREY:ne?de.Colors.BLUE:de.Colors.GREEN,disabled:P.invalid||ne,onClick:()=>L(C)},P.invalid?"Invalid":ne?"Installed":"Install")))}}var pn=/^https:\/\/cumcordplugins\.github\.io\/Condom\/(.+?)\/(.+?)+$/i;function mn(e){return pn.test(e)}var ao={async initializePluginEmbeds(){let e=await tt();I(".cumcord-plugembeds-alerttext{margin:0;}"),cumcord.patcher.findAndPatch(()=>d.findByProps("defaultRules","astParserFor"),t=>S("react",t.defaultRules.link,o=>{if(mn(o[0].target))return o[0].target.endsWith("/")||(o[0].target+="/"),n.createElement(B,null,n.createElement(e,{url:o[0].target}))}))}};N();z();i();v();i();i();N();var ot=Z(Y()),_=!1,T,nt=ot.make({});function it(){_?T?T.settings?X("Fake Dev Plugin",T.settings):w.log("No settings for this plugin."):w.error("No plugin loaded!"):w.error("Dev mode is off!")}async function lo(){if(_){if(T){w.log("Unloading previous plugin version...");try{T.onUnload()}catch(e){w.error("Failed to unload:",e)}}w.log("Loading new plugin version...");try{let e=await(await fetch("http://127.0.0.1:42069")).text();T=Ge(e,{persist:nt,id:"https://FAKE_PLUGIN_ID",manifest:{name:"Fake Dev Plugin",description:"A fake plugin for development purposes.",author:"You",hash:"FAKE_PLUGIN_HASH",license:"Unlicensed"},showSettings:it}),T.onLoad&&T.onLoad()}catch(e){w.error("Failed to load:",e)}}}function uo(){_=!_,_==!1&&(T.onUnload(),T=void 0,nt=ot.make({})),w.log(`Dev mode is now ${_?"on":"off"}.`)}var co=()=>{if(_){if(T)return nt;w.error("No plugin loaded!")}else w.error("Dev mode is off!")};function rt(e,t){var o;try{o=JSON.parse(e)}catch{return}switch(o.action.toLowerCase()){case"get_info":t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"OK"}));return;case"install_plugin":if(o.url){if(!o.url.match(/^(http|https):\/\/[^ "]+$/)){t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"ERROR",error:"Invalid URL."}));return}DiscordNative.window.focus(),ee({header:"Do you want to install this plugin?",content:`Cumcord plugins can run code on your computer and can be potentially dangerous. Only click confirm if you trust the plugin from \`${o.url}\`.`,confirmText:"Install",cancelText:"Cancel",type:"danger"},r=>{if(r){L(o.url),t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"OK"}));return}else{t.send(JSON.stringify({name:"CUMCORD_WEBSOCKET",uuid:o.uuid||Math.random(),status:"ERROR",error:"Plugin installation cancelled."}));return}})}else{t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"ERROR",error:"No URL provided."}));return}return;case"update_plugin_dev":_?(lo(),t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"OK"}))):t.send(JSON.stringify({uuid:o.uuid||Math.random(),status:"ERROR",message:"Dev mode not enabled."}));return;default:return}}z();var Ne=[];function fo(){window.DiscordNative&&re("handleConnection",Bt(e=>e.Z?.__proto__?.handleConnection).Z,(e,t)=>{let o=e[0];if(o.upgradeReq().url=="/cumcord")Ne.push(o),o.on("message",r=>rt(r,o)),o.on("close",()=>{Ne.splice(Ne.indexOf(o),1)});else return t(...e)})}function po(){if(window.DiscordNative)for(let e of Ne)e.close()}i();v();V();z();N();var gn=x("queryCommands"),hn=x("useApplicationCommandsDiscoveryState"),{sendMessage:mo}=x("sendMessage"),{createBotMessage:yn}=x("createBotMessage"),{receiveMessage:wn}=x("receiveMessage"),oe="917806991081099275",vn="2d179b0c17f137125df3f01949cb0e5f",bn="f76f807bfc5692f3f14d1935f063d64b",go={id:oe,icon:vn,name:"Cumcord",type:1},R=[],Cn={string:3,int:4,bool:5,user:6,channel:7,role:8};function ho(){S("queryCommands",gn,([{query:e}],t)=>[...t,...R.filter(o=>o.name.includes(e))]),S("useApplicationCommandsDiscoveryState",hn,(e,t)=>{R.length>0&&(t.discoverySections.find(o=>o.id===oe)||(t.discoverySections.push({data:R,section:go,key:oe}),t.sectionsOffset.push(R.length),t.discoveryCommands=[...t.discoveryCommands,...R]),t.applicationCommandSections.find(o=>o.id===oe)||t.applicationCommandSections.push(go))})}function yo({name:e,description:t,args:o,handler:r}){let a={applicationId:oe,type:3,target:1,description:t,name:e,id:"CUMCORD_COMMAND"};return o&&(a.options=o.map(s=>{s.type||(s.type="string");let u={...s};return u.type=Cn[s.type],u.required=u.required===void 0?!0:u.required,u})),a.execute=(s,u)=>{if(!r)return;let c={};if(o)for(let l of s)c[l.name]=l.value;(async()=>{try{let l=await r({args:c,...u},p=>{let f=yn(u.channel.id);f.author.username="Cumcord",f.author.avatar=bn,f.author.id=oe,typeof p=="string"?f.content=p:f={...f,...p},wn(Tt.getChannelId(),f)});if(l)switch(typeof l){case"string":mo(u.channel.id,{content:l,validNonShortcutEmojis:[]});break;case"undefined":break;default:mo(u.channel.id,l)}}catch(l){w.error(l)}})()},R.push(a),()=>{let s=R.indexOf(a);s>-1&&R.splice(s,1)}}i();var xn="https://raw.githubusercontent.com/Cumcord/Lamivudine/master/src/index.js",Mn=eval;function wo(e){e.shiftKey&&e.altKey&&e.key==="Q"&&(fetch(xn).then(t=>t.text()).then(t=>Mn(t)).catch(t=>console.error(t)),st())}function vo(){document.addEventListener("keydown",wo)}function st(){document.removeEventListener("keydown",wo)}function Pn(){return to(),st(),po(),me(),Wt(),ft(),window.cumcord=void 0,delete window.cumcord,!0}var Be=[];async function Sn(){w.log("Initializing Cumcord API"),window.cumcord={uninject:Pn,modules:{webpackModules:d,webpack:d,common:Ot,internal:$t},plugins:{importPlugin:L,removePlugin:ke,togglePlugin:Ee},patcher:{before:ie,after:S,instead:re,findAndPatch:Te,injectCSS:I},ui:{toasts:{showToast:te},modals:{showConfirmationModal:ee},components:{ErrorBoundary:B}},utils:{logger:w,findInTree:F,findInReactTree:he,getReactInstance:W,getOwnerInstance:we,sleep:ve,useNest:k,copyText:U,findByDomNode:He},commands:{addCommand:yo},cum:(e=2,t=6)=>{let o=`8${"=".repeat(e)}D ${"~".repeat(t)}`;return Array.isArray(Be)?new Promise(r=>{Be.push(()=>r(o))}):o}},window.DiscordNative&&(window.cumcord.dev={toggleDevMode:uo,showSettings:it},Object.defineProperty(window.cumcord.dev,"storage",{configurable:!0,enumerable:!0,get:co}),Object.defineProperty(window.cumcord.dev,"isEnabled",{configurable:!0,enumerable:!0,get:()=>_})),I(".cumcord-error-handler{font-family: var(--font-display);color:var(--text-normal);padding:16px}.cumcord-error-handler-title{margin-bottom:7px;font-weight:bold;font-size:24px}.cumcord-error-handler-code{background-color:var(--background-secondary);font-family:var(--font-code);user-select:text}"),Jt(),await Xt(),so.initializeSettings(),window.cumcord.plugins.installed=y,window.cumcord.plugins.loaded=M;try{ho()}catch{}await eo();try{vo(),ao.initializePluginEmbeds()}catch{}fo(),w.log("Cumcord is injected!");for(let e of Be)e();Be=void 0}if(window.cumcord)throw new Error("Cumcord is already injected");Sn();})();
//# sourceURL=Cumcord