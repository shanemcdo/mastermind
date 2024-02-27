(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ve={context:void 0,registry:void 0},Se=(e,t)=>e===t,$e=Symbol("solid-track"),K={equals:Se};let ge=be;const P=1,V=2,ye={owned:null,cleanups:null,context:null,owner:null};var w=null;let J=null,Ae=null,m=null,p=null,x=null,Y=0;function j(e,t){const n=m,l=w,o=e.length===0,s=t===void 0?l:t,i=o?ye:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=o?e:()=>e(()=>T(()=>z(i)));w=i,m=null;try{return W(r,!0)}finally{m=n,w=l}}function O(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},l=o=>(typeof o=="function"&&(o=o(n.value)),we(n,o));return[me.bind(n),l]}function E(e,t,n){const l=le(e,t,!1,P);G(l)}function xe(e,t,n){ge=Ne;const l=le(e,t,!1,P);(!n||!n.render)&&(l.user=!0),x?x.push(l):G(l)}function R(e,t,n){n=n?Object.assign({},K,n):K;const l=le(e,t,!0,0);return l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,G(l),me.bind(l)}function T(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ee(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function ke(){return w}function Ee(e,t){const n=w,l=m;w=e,m=null;try{return W(t,!0)}catch(o){oe(o)}finally{w=n,m=l}}function me(){if(this.sources&&this.state)if(this.state===P)G(this);else{const e=p;p=null,W(()=>H(this),!1),p=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function we(e,t,n){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&W(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=J&&J.running;i&&J.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?p.push(s):x.push(s),s.observers&&pe(s)),i||(s.state=P)}if(p.length>1e6)throw p=[],new Error},!1)),t}function G(e){if(!e.fn)return;z(e);const t=Y;Pe(e,e.value,t)}function Pe(e,t,n){let l;const o=w,s=m;m=w=e;try{l=e.fn(t)}catch(i){return e.pure&&(e.state=P,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,oe(i)}finally{m=s,w=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?we(e,l):e.value=l,e.updatedAt=n)}function le(e,t,n,l=P,o){const s={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==ye&&(w.owned?w.owned.push(s):w.owned=[s]),s}function F(e){if(e.state===0)return;if(e.state===V)return H(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===P)G(e);else if(e.state===V){const l=p;p=null,W(()=>H(e,t[0]),!1),p=l}}function W(e,t){if(p)return e();let n=!1;t||(p=[]),x?n=!0:x=[],Y++;try{const l=e();return Le(n),l}catch(l){n||(x=null),p=null,oe(l)}}function Le(e){if(p&&(be(p),p=null),e)return;const t=x;x=null,t.length&&W(()=>ge(t),!1)}function be(e){for(let t=0;t<e.length;t++)F(e[t])}function Ne(e){let t,n=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[n++]=l:F(l)}for(t=0;t<n;t++)F(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];if(l.sources){const o=l.state;o===P?l!==t&&(!l.updatedAt||l.updatedAt<Y)&&F(l):o===V&&H(l,t)}}}function pe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=V,n.pure?p.push(n):x.push(n),n.observers&&pe(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();l<o.length&&(s.sourceSlots[i]=l,o[l]=s,n.observerSlots[l]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Oe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function oe(e,t=w){throw Oe(e)}const Te=Symbol("fallback");function ie(e){for(let t=0;t<e.length;t++)e[t]()}function Me(e,t,n={}){let l=[],o=[],s=[],i=0,r=t.length>1?[]:null;return ee(()=>ie(s)),()=>{let u=e()||[],d,c;return u[$e],T(()=>{let a=u.length,g,y,f,v,A,_,C,$,S;if(a===0)i!==0&&(ie(s),s=[],l=[],o=[],i=0,r&&(r=[])),n.fallback&&(l=[Te],o[0]=j(se=>(s[0]=se,n.fallback())),i=1);else if(i===0){for(o=new Array(a),c=0;c<a;c++)l[c]=u[c],o[c]=j(h);i=a}else{for(f=new Array(a),v=new Array(a),r&&(A=new Array(a)),_=0,C=Math.min(i,a);_<C&&l[_]===u[_];_++);for(C=i-1,$=a-1;C>=_&&$>=_&&l[C]===u[$];C--,$--)f[$]=o[C],v[$]=s[C],r&&(A[$]=r[C]);for(g=new Map,y=new Array($+1),c=$;c>=_;c--)S=u[c],d=g.get(S),y[c]=d===void 0?-1:d,g.set(S,c);for(d=_;d<=C;d++)S=l[d],c=g.get(S),c!==void 0&&c!==-1?(f[c]=o[d],v[c]=s[d],r&&(A[c]=r[d]),c=y[c],g.set(S,c)):s[d]();for(c=_;c<a;c++)c in f?(o[c]=f[c],s[c]=v[c],r&&(r[c]=A[c],r[c](c))):o[c]=j(h);o=o.slice(0,i=a),l=u.slice(0)}return o});function h(a){if(s[c]=a,r){const[g,y]=O(c);return r[c]=y,t(u[c],g)}return t(u[c])}}}function b(e,t){return T(()=>e(t||{}))}const We=e=>`Stale read from <${e}>.`;function I(e){const t="fallback"in e&&{fallback:()=>e.fallback};return R(Me(()=>e.each,e.children,t||void 0))}function q(e){const t=e.keyed,n=R(()=>e.when,void 0,{equals:(l,o)=>t?l===o:!l==!o});return R(()=>{const l=n();if(l){const o=e.children;return typeof o=="function"&&o.length>0?T(()=>o(t?l:()=>{if(!T(n))throw We("Show");return e.when})):o}return e.fallback},void 0,void 0)}function Be(e,t,n){let l=n.length,o=t.length,s=l,i=0,r=0,u=t[o-1].nextSibling,d=null;for(;i<o||r<s;){if(t[i]===n[r]){i++,r++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const c=s<l?r?n[r-1].nextSibling:n[s-r]:u;for(;r<s;)e.insertBefore(n[r++],c)}else if(s===r)for(;i<o;)(!d||!d.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[r]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[r++],t[i++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!d){d=new Map;let h=r;for(;h<s;)d.set(n[h],h++)}const c=d.get(t[i]);if(c!=null)if(r<c&&c<s){let h=i,a=1,g;for(;++h<o&&h<s&&!((g=d.get(t[h]))==null||g!==c+a);)a++;if(a>c-r){const y=t[i];for(;r<c;)e.insertBefore(n[r++],y)}else e.replaceChild(n[r++],t[i++])}else i++;else t[i++].remove()}}}const ce="_$DX_DELEGATE";function je(e,t,n,l={}){let o;return j(s=>{o=s,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},l.owner),()=>{o(),t.textContent=""}}function U(e,t,n){let l;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},s=t?()=>T(()=>document.importNode(l||(l=o()),!0)):()=>(l||(l=o())).cloneNode(!0);return s.cloneNode=s,s}function re(e,t=window.document){const n=t[ce]||(t[ce]=new Set);for(let l=0,o=e.length;l<o;l++){const s=e[l];n.has(s)||(n.add(s),t.addEventListener(s,Ie))}}function N(e,t){t==null?e.removeAttribute("class"):e.className=t}function _e(e,t,n={}){const l=Object.keys(t||{}),o=Object.keys(n);let s,i;for(s=0,i=o.length;s<i;s++){const r=o[s];!r||r==="undefined"||t[r]||(ue(e,r,!1),delete n[r])}for(s=0,i=l.length;s<i;s++){const r=l[s],u=!!t[r];!r||r==="undefined"||n[r]===u||!u||(ue(e,r,!0),n[r]=u)}return n}function k(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return Q(e,t,l,n);E(o=>Q(e,t(),o,n),l)}function ue(e,t,n){const l=t.trim().split(/\s+/);for(let o=0,s=l.length;o<s;o++)e.classList.toggle(l[o],n)}function Ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const l=n[t];if(l&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?l.call(n,o,e):l.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,l,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=l!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),i){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=M(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=M(e,n,l);else{if(s==="function")return E(()=>{let r=t();for(;typeof r=="function";)r=r();n=Q(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(te(r,t,n,o))return E(()=>n=Q(e,r,n,l,!0)),()=>n;if(r.length===0){if(n=M(e,n,l),i)return n}else u?n.length===0?fe(e,r,l):Be(e,n,r):(n&&M(e),fe(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=M(e,n,l,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function te(e,t,n,l){let o=!1;for(let s=0,i=t.length;s<i;s++){let r=t[s],u=n&&n[e.length],d;if(!(r==null||r===!0||r===!1))if((d=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=te(e,r,u)||o;else if(d==="function")if(l){for(;typeof r=="function";)r=r();o=te(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||o}else e.push(r),o=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return o}function fe(e,t,n=null){for(let l=0,o=t.length;l<o;l++)e.insertBefore(t[l],n)}function M(e,t,n,l){if(n===void 0)return e.textContent="";const o=l||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const r=t[i];if(o!==r){const u=r.parentNode===e;!s&&!i?u?e.replaceChild(o,r):e.insertBefore(o,n):u&&r.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const Re="http://www.w3.org/2000/svg";function Ge(e,t=!1){return t?document.createElementNS(Re,e):document.createElement(e)}function Ue(e){const{useShadow:t}=e,n=document.createTextNode(""),l=()=>e.mount||document.body,o=ke();let s,i=!!ve.context;return xe(()=>{s||(s=Ee(o,()=>R(()=>e.children)));const r=l();if(r instanceof HTMLHeadElement){const[u,d]=O(!1),c=()=>d(!0);j(h=>k(r,()=>u()?h():s(),null)),ee(c)}else{const u=Ge(e.isSVG?"g":"div",e.isSVG),d=t&&u.attachShadow?u.attachShadow({mode:"open"}):u;Object.defineProperty(u,"_$host",{get(){return n.parentNode},configurable:!0}),k(d,s),r.appendChild(u),e.ref&&e.ref(u),ee(()=>r.removeChild(u))}},void 0,{render:!i}),n}const ae=5;function De(){const e=[];for(let t=0;t<ae;t++){const n=360/ae*t;e.push(`hsl(${n}, 100%, 50%)`)}return e}const Ce="grey",ne=De();function Ke(){return ne[Math.floor(ne.length*Math.random())]}const Ve="_clickable_ybsy3_1",Fe="_small_ybsy3_5",He="_peg_ybsy3_9",qe="_modal_ybsy3_21",Z={clickable:Ve,small:Fe,peg:He,modal:qe};var de=U("<div>");const X=e=>{const[t,n]=O(!1),l=()=>n(r=>!r),o=()=>e.enabled??!0,[s,i]=typeof e.color=="string"?[()=>e.color,r=>{console.error("Cannot set")}]:[()=>e.color[0](),r=>e.color[1](r)];return(()=>{var r=de();return r.$$click=u=>{o()&&(e.onclick??l)(u)},k(r,b(q,{get when(){return R(()=>!!(o()&&e.onclick===void 0&&!e.static))()&&t()},get children(){var u=de();return k(u,b(I,{each:ne,children:d=>b(X,{color:d,onclick:()=>{i(d),n(!1)}})})),E(()=>N(u,Z.modal)),u}})),E(u=>{var d={[e.class]:!0,[Z.peg]:!0,[Z.clickable]:o()&&(!e.static||e.onclick!==void 0)},c=s();return u.e=_e(r,d,u.e),c!==u.t&&((u.t=c)!=null?r.style.setProperty("background",c):r.style.removeProperty("background")),u},{e:void 0,t:void 0}),r})()};re(["click"]);const Qe="_clickable_8e5zl_1",Xe="_small_8e5zl_5",Ye="_grid_8e5zl_9",ze="_button_8e5zl_18",D={clickable:Qe,small:Xe,grid:Ye,button:ze};var he=U("<div>"),Je=U("<button>✓"),B=(e=>(e[e.CorrectColorCorrectSpot=0]="CorrectColorCorrectSpot",e[e.CorrectColorWrongSpot=1]="CorrectColorWrongSpot",e[e.WrongColorWrongSpot=2]="WrongColorWrongSpot",e))(B||{});const Ze=Object.freeze({0:"red",1:"white",2:Ce}),et=[2,2,2,2],tt=e=>{const[t,n]=e.completedSignal;return b(q,{get when(){return e.display??!0},get fallback(){return he()},get children(){return b(q,{get when(){return t()},get fallback(){return(()=>{var l=Je();return l.$$click=()=>{n(!0),e.onclick&&e.onclick()},E(o=>_e(l,{[D.button]:!0,[D.clickable]:!0},o)),l})()},get children(){var l=he();return k(l,b(I,{get each(){return e.values??et},children:o=>b(X,{get class(){return D.small},get color(){return Ze[o]},static:!0})})),E(()=>N(l,D.grid)),l}})}})};re(["click"]);const nt="_clickable_wy4pf_1",lt="_small_wy4pf_5",ot="_vflex_wy4pf_9",rt="_title_wy4pf_16",st="_row_wy4pf_20",it="_grid_wy4pf_29",ct="_medium_wy4pf_39",ut="_large_wy4pf_43",ft="_modal_wy4pf_47",L={clickable:nt,small:lt,vflex:ot,title:rt,row:st,grid:it,medium:ct,large:ut,modal:ft};var at=U("<div><p>You <!>!</p><button>Play again?"),dt=U("<div><h1>Mastermind</h1><div></div><div>");const ht=()=>{const[n,l]=O(!1),[o,s]=O(!0),i=()=>Array.from({length:4},Ke);let r=i();const u=Array.from({length:10},(h,a)=>({row:Array.from({length:4},()=>O("")),disabledPegsSignal:O(a!==0)}));function d(){l(!1),s(!0),r=i();let h=0;for(const{row:a,disabledPegsSignal:g}of u){for(const y of a)y[1]("");g[1](h!==0),h+=1}}function c(h){const a=h.map(f=>f[0]()),g=[...r];console.log(a,g);const y=[];for(let f=0;f<a.length;f++)a[f]===g[f]&&(a[f]=g[f]="",y.push(B.CorrectColorCorrectSpot));for(let f=0;f<a.length;f++){if(a[f]==="")continue;const v=g.indexOf(a[f]);v>=0&&(g[v]="",y.push(B.CorrectColorWrongSpot))}for(;y.length<4;)y.push(B.WrongColorWrongSpot);return y.every(f=>f===B.CorrectColorCorrectSpot)&&l(!0),console.log(y),y}return[b(q,{get when(){return n()},get children(){return b(Ue,{get children(){var h=at(),a=h.firstChild,g=a.firstChild,y=g.nextSibling;y.nextSibling;var f=a.nextSibling;return k(a,()=>o()?"Won":"Lost",y),f.$$click=d,E(()=>N(h,L.modal)),h}})}}),(()=>{var h=dt(),a=h.firstChild,g=a.nextSibling,y=g.nextSibling;return k(g,b(I,{each:r,children:f=>b(X,{get class(){return L.medium},get color(){return n()?f:Ce},static:!0})})),k(y,b(I,{each:u,children:({row:f,disabledPegsSignal:v},A)=>{const _=()=>!f.some(([S,se])=>S()===""),[C,$]=v;return[b(I,{each:f,children:S=>b(X,{get class(){return L.large},color:S,get enabled(){return!C()}})}),b(tt,{get values(){return c(f)},completedSignal:v,get display(){return _()},onclick:()=>{const S=A()+1;if(S>=u.length){s(!1),l(!0);return}u[S].disabledPegsSignal[1](!1)}})]}})),E(f=>{var v=L.vflex,A=L.title,_=L.row,C=L.grid;return v!==f.e&&N(h,f.e=v),A!==f.t&&N(a,f.t=A),_!==f.a&&N(g,f.a=_),C!==f.o&&N(y,f.o=C),f},{e:void 0,t:void 0,a:void 0,o:void 0}),h})()]};re(["click"]);const gt=document.getElementById("root");je(()=>b(ht,{}),gt);
