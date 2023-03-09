var js=Object.defineProperty;var Ds=(e,t,n)=>t in e?js(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>(Ds(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function rr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ue(r)?Bs(r):rr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ue(e))return e;if(Z(e))return e}}const $s=/;(?![^(]*\))/g,zs=/:([^]+)/,Us=/\/\*.*?\*\//gs;function Bs(e){const t={};return e.replace(Us,"").split($s).forEach(n=>{if(n){const r=n.split(zs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ca(e){let t="";if(ue(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=ca(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ys=fa(Hs);function io(e){return!!e||e===""}const Ft=e=>ue(e)?e:e==null?"":j(e)||Z(e)&&(e.toString===fo||!$(e.toString))?JSON.stringify(e,oo,2):String(e),oo=(e,t)=>t&&t.__v_isRef?oo(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:so(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!j(t)&&!co(t)?String(t):t,G={},Dt=[],Le=()=>{},Ws=()=>!1,Ks=/^on[^a-z]/,ar=e=>Ks.test(e),ua=e=>e.startsWith("onUpdate:"),me=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qs=Object.prototype.hasOwnProperty,H=(e,t)=>qs.call(e,t),j=Array.isArray,$t=e=>ir(e)==="[object Map]",so=e=>ir(e)==="[object Set]",$=e=>typeof e=="function",ue=e=>typeof e=="string",ma=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",lo=e=>Z(e)&&$(e.then)&&$(e.catch),fo=Object.prototype.toString,ir=e=>fo.call(e),Qs=e=>ir(e).slice(8,-1),co=e=>ir(e)==="[object Object]",pa=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vs=/-(\w)/g,Ke=or(e=>e.replace(Vs,(t,n)=>n?n.toUpperCase():"")),Xs=/\B([A-Z])/g,qt=or(e=>e.replace(Xs,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=or(e=>e?`on${sr(e)}`:""),fn=(e,t)=>!Object.is(e,t),_r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ha=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ga;const Js=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class Gs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Zs(e,t=Ue){t&&t.active&&t.effects.push(e)}const ga=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uo=e=>(e.w&ct)>0,mo=e=>(e.n&ct)>0,el=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ct},tl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];uo(a)&&!mo(a)?a.delete(e):t[n++]=a,a.w&=~ct,a.n&=~ct}t.length=n}},Rr=new WeakMap;let tn=0,ct=1;const Lr=30;let Ne;const It=Symbol(""),jr=Symbol("");class va{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zs(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=lt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,lt=!0,ct=1<<++tn,tn<=Lr?el(this):Za(this),this.fn()}finally{tn<=Lr&&tl(this),ct=1<<--tn,Ne=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Za(this),this.onStop&&this.onStop(),this.active=!1)}}function Za(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let lt=!0;const po=[];function Qt(){po.push(lt),lt=!1}function Vt(){const e=po.pop();lt=e===void 0?!0:e}function ke(e,t,n){if(lt&&Ne){let r=Rr.get(e);r||Rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ga()),ho(a)}}function ho(e,t){let n=!1;tn<=Lr?mo(e)||(e.n|=ct,n=!uo(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Xe(e,t,n,r,a,i){const o=Rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=ha(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?pa(n)&&s.push(o.get("length")):(s.push(o.get(It)),$t(e)&&s.push(o.get(jr)));break;case"delete":j(e)||(s.push(o.get(It)),$t(e)&&s.push(o.get(jr)));break;case"set":$t(e)&&s.push(o.get(It));break}if(s.length===1)s[0]&&Dr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dr(ga(l))}}function Dr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&ei(r);for(const r of n)r.computed||ei(r)}function ei(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const nl=fa("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ma)),rl=ba(),al=ba(!1,!0),il=ba(!0),ti=ol();function ol(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qt();const r=W(this)[t].apply(this,n);return Vt(),r}}),e}function ba(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?_l:wo:t?xo:yo).get(r))return r;const o=j(r);if(!e&&o&&H(ti,a))return Reflect.get(ti,a,i);const s=Reflect.get(r,a,i);return(ma(a)?go.has(a):nl(a))||(e||ke(r,"get",a),t)?s:ve(s)?o&&pa(a)?s:s.value:Z(s)?e?_o(s):wa(s):s}}const sl=vo(),ll=vo(!0);function vo(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!Vn(a)&&!Yt(a)&&(o=W(o),a=W(a)),!j(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=j(n)&&pa(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===W(i)&&(s?fn(a,o)&&Xe(n,"set",r,a):Xe(n,"add",r,a)),l}}function fl(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Xe(e,"delete",t,void 0),r}function cl(e,t){const n=Reflect.has(e,t);return(!ma(t)||!go.has(t))&&ke(e,"has",t),n}function ul(e){return ke(e,"iterate",j(e)?"length":It),Reflect.ownKeys(e)}const bo={get:rl,set:sl,deleteProperty:fl,has:cl,ownKeys:ul},dl={get:il,set(e,t){return!0},deleteProperty(e,t){return!0}},ml=me({},bo,{get:al,set:ll}),ya=e=>e,lr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);n||(t!==i&&ke(a,"get",t),ke(a,"get",i));const{has:o}=lr(a),s=r?ya:n?ka:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function En(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return t||(e!==a&&ke(r,"has",e),ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function In(e,t=!1){return e=e.__v_raw,!t&&ke(W(e),"iterate",It),Reflect.get(e,"size",e)}function ni(e){e=W(e);const t=W(this);return lr(t).has.call(t,e)||(t.add(e),Xe(t,"add",e,e)),this}function ri(e,t){t=W(t);const n=W(this),{has:r,get:a}=lr(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?fn(t,o)&&Xe(n,"set",e,t):Xe(n,"add",e,t),this}function ai(e){const t=W(this),{has:n,get:r}=lr(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Xe(t,"delete",e,void 0),i}function ii(){const e=W(this),t=e.size!==0,n=e.clear();return t&&Xe(e,"clear",void 0,void 0),n}function Pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?ya:e?ka:cn;return!e&&ke(s,"iterate",It),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?ya:t?ka:cn;return!t&&ke(i,"iterate",l?jr:It),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function nt(e){return function(...t){return e==="delete"?!1:this}}function pl(){const e={get(i){return On(this,i)},get size(){return In(this)},has:En,add:ni,set:ri,delete:ai,clear:ii,forEach:Pn(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return In(this)},has:En,add:ni,set:ri,delete:ai,clear:ii,forEach:Pn(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return In(this,!0)},has(i){return En.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Pn(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return In(this,!0)},has(i){return En.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:Pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[hl,gl,vl,bl]=pl();function xa(e,t){const n=t?e?bl:vl:e?gl:hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const yl={get:xa(!1,!1)},xl={get:xa(!1,!0)},wl={get:xa(!0,!1)},yo=new WeakMap,xo=new WeakMap,wo=new WeakMap,_l=new WeakMap;function kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(e){return e.__v_skip||!Object.isExtensible(e)?0:kl(Qs(e))}function wa(e){return Yt(e)?e:_a(e,!1,bo,yl,yo)}function Cl(e){return _a(e,!1,ml,xl,xo)}function _o(e){return _a(e,!0,dl,wl,wo)}function _a(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Al(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function zt(e){return Yt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function ko(e){return zt(e)||Yt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Ao(e){return Qn(e,"__v_skip",!0),e}const cn=e=>Z(e)?wa(e):e,ka=e=>Z(e)?_o(e):e;function Co(e){lt&&Ne&&(e=W(e),ho(e.dep||(e.dep=ga())))}function Oo(e,t){e=W(e),e.dep&&Dr(e.dep)}function ve(e){return!!(e&&e.__v_isRef===!0)}function kr(e){return Ol(e,!1)}function Ol(e,t){return ve(e)?e:new El(e,t)}class El{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:cn(t)}get value(){return Co(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||Yt(t);t=n?t:W(t),fn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:cn(t),Oo(this))}}function Se(e){return ve(e)?e.value:e}const Il={get:(e,t,n)=>Se(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Eo(e){return zt(e)?e:new Proxy(e,Il)}var Io;class Pl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Io]=!1,this._dirty=!0,this.effect=new va(t,()=>{this._dirty||(this._dirty=!0,Oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return Co(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Io="__v_isReadonly";function Tl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new Pl(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){fr(i,t,n)}return a}function Pe(e,t,n,r){if($(e)){const i=ft(e,t,n,r);return i&&lo(i)&&i.catch(o=>{fr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function fr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}Sl(e,n,a,r)}function Sl(e,t,n,r=!0){console.error(e)}let un=!1,$r=!1;const ge=[];let Ye=0;const Ut=[];let Qe=null,_t=0;const Po=Promise.resolve();let Aa=null;function Nl(e){const t=Aa||Po;return e?t.then(this?e.bind(this):e):t}function Ml(e){let t=Ye+1,n=ge.length;for(;t<n;){const r=t+n>>>1;dn(ge[r])<e?t=r+1:n=r}return t}function Ca(e){(!ge.length||!ge.includes(e,un&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?ge.push(e):ge.splice(Ml(e.id),0,e),To())}function To(){!un&&!$r&&($r=!0,Aa=Po.then(No))}function Fl(e){const t=ge.indexOf(e);t>Ye&&ge.splice(t,1)}function Rl(e){j(e)?Ut.push(...e):(!Qe||!Qe.includes(e,e.allowRecurse?_t+1:_t))&&Ut.push(e),To()}function oi(e,t=un?Ye+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function So(e){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((n,r)=>dn(n)-dn(r)),_t=0;_t<Qe.length;_t++)Qe[_t]();Qe=null,_t=0}}const dn=e=>e.id==null?1/0:e.id,Ll=(e,t)=>{const n=dn(e)-dn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function No(e){$r=!1,un=!0,ge.sort(Ll);const t=Le;try{for(Ye=0;Ye<ge.length;Ye++){const n=ge[Ye];n&&n.active!==!1&&ft(n,null,14)}}finally{Ye=0,ge.length=0,So(),un=!1,Aa=null,(ge.length||Ut.length)&&No()}}function jl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||G;h&&(a=n.map(y=>ue(y)?y.trim():y)),m&&(a=n.map(ha))}let s,l=r[s=wr(t)]||r[s=wr(Ke(t))];!l&&i&&(l=r[s=wr(qt(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function Mo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const u=Mo(c,t,!0);u&&(s=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Z(e)&&r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):me(o,i),Z(e)&&r.set(e,o),o)}function cr(e,t){return!e||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,qt(t))||H(e,t))}let Ie=null,Fo=null;function Xn(e){const t=Ie;return Ie=e,Fo=e&&e.type.__scopeId||null,t}function Ro(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&gi(-1);const i=Xn(t);let o;try{o=e(...a)}finally{Xn(i),r._d&&gi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ar(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:y,ctx:S,inheritAttrs:I}=e;let U,x;const O=Xn(e);try{if(n.shapeFlag&4){const R=a||r;U=He(u.call(R,R,m,i,y,h,S)),x=l}else{const R=t;U=He(R.length>1?R(i,{attrs:l,slots:s,emit:c}):R(i,null)),x=t.props?l:Dl(l)}}catch(R){an.length=0,fr(R,e,1),U=de(je)}let A=U;if(x&&I!==!1){const R=Object.keys(x),{shapeFlag:z}=A;R.length&&z&7&&(o&&R.some(ua)&&(x=$l(x,o)),A=ut(A,x))}return n.dirs&&(A=ut(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),U=A,Xn(O),U}const Dl=e=>{let t;for(const n in e)(n==="class"||n==="style"||ar(n))&&((t||(t={}))[n]=e[n]);return t},$l=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?si(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!cr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?si(r,o,c):!0:!!o;return!1}function si(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!cr(n,i))return!0}return!1}function Ul({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Bl=e=>e.__isSuspense;function Hl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Rl(e)}function Yl(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function Bn(e,t,n=!1){const r=ce||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r.proxy):t}}const Sn={};function Hn(e,t,n){return Lo(e,t,n)}function Lo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=G){const s=ce;let l,c=!1,u=!1;if(ve(e)?(l=()=>e.value,c=Vn(e)):zt(e)?(l=()=>e,r=!0):j(e)?(u=!0,c=e.some(A=>zt(A)||Vn(A)),l=()=>e.map(A=>{if(ve(A))return A.value;if(zt(A))return Rt(A);if($(A))return ft(A,s,2)})):$(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[h])}:l=Le,t&&r){const A=l;l=()=>Rt(A())}let m,h=A=>{m=x.onStop=()=>{ft(A,s,4)}},y;if(pn)if(h=Le,t?n&&Pe(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const A=Bf();y=A.__watcherHandles||(A.__watcherHandles=[])}else return Le;let S=u?new Array(e.length).fill(Sn):Sn;const I=()=>{if(!!x.active)if(t){const A=x.run();(r||c||(u?A.some((R,z)=>fn(R,S[z])):fn(A,S)))&&(m&&m(),Pe(t,s,3,[A,S===Sn?void 0:u&&S[0]===Sn?[]:S,h]),S=A)}else x.run()};I.allowRecurse=!!t;let U;a==="sync"?U=I:a==="post"?U=()=>xe(I,s&&s.suspense):(I.pre=!0,s&&(I.id=s.uid),U=()=>Ca(I));const x=new va(l,U);t?n?I():S=x.run():a==="post"?xe(x.run.bind(x),s&&s.suspense):x.run();const O=()=>{x.stop(),s&&s.scope&&da(s.scope.effects,x)};return y&&y.push(O),O}function Wl(e,t,n){const r=this.proxy,a=ue(e)?e.includes(".")?jo(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=ce;Wt(this);const s=Lo(a,i.bind(r),n);return o?Wt(o):Pt(),s}function jo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Rt(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))Rt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Rt(e[n],t);else if(so(e)||$t(e))e.forEach(n=>{Rt(n,t)});else if(co(e))for(const n in e)Rt(e[n],t);return e}function Kl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bo(()=>{e.isMounted=!0}),Ho(()=>{e.isUnmounting=!0}),e}const Ce=[Function,Array],ql={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(e,{slots:t}){const n=Ff(),r=Kl();let a;return()=>{const i=t.default&&zo(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==je){o=I;break}}const s=W(e),{mode:l}=s;if(r.isLeaving)return Cr(o);const c=li(o);if(!c)return Cr(o);const u=zr(c,s,r,n);Ur(c,u);const m=n.subTree,h=m&&li(m);let y=!1;const{getTransitionKey:S}=c.type;if(S){const I=S();a===void 0?a=I:I!==a&&(a=I,y=!0)}if(h&&h.type!==je&&(!kt(c,h)||y)){const I=zr(h,s,r,n);if(Ur(h,I),l==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Cr(o);l==="in-out"&&c.type!==je&&(I.delayLeave=(U,x,O)=>{const A=$o(r,h);A[String(h.key)]=h,U._leaveCb=()=>{x(),U._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},Do=ql;function $o(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function zr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:h,onAfterLeave:y,onLeaveCancelled:S,onBeforeAppear:I,onAppear:U,onAfterAppear:x,onAppearCancelled:O}=t,A=String(e.key),R=$o(n,e),z=(D,Y)=>{D&&Pe(D,r,9,Y)},oe=(D,Y)=>{const q=Y[1];z(D,Y),j(D)?D.every(pe=>pe.length<=1)&&q():D.length<=1&&q()},ne={mode:i,persisted:o,beforeEnter(D){let Y=s;if(!n.isMounted)if(a)Y=I||s;else return;D._leaveCb&&D._leaveCb(!0);const q=R[A];q&&kt(e,q)&&q.el._leaveCb&&q.el._leaveCb(),z(Y,[D])},enter(D){let Y=l,q=c,pe=u;if(!n.isMounted)if(a)Y=U||l,q=x||c,pe=O||u;else return;let N=!1;const ee=D._enterCb=we=>{N||(N=!0,we?z(pe,[D]):z(q,[D]),ne.delayedLeave&&ne.delayedLeave(),D._enterCb=void 0)};Y?oe(Y,[D,ee]):ee()},leave(D,Y){const q=String(e.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return Y();z(m,[D]);let pe=!1;const N=D._leaveCb=ee=>{pe||(pe=!0,Y(),ee?z(S,[D]):z(y,[D]),D._leaveCb=void 0,R[q]===e&&delete R[q])};R[q]=e,h?oe(h,[D,N]):N()},clone(D){return zr(D,t,n,r)}};return ne}function Cr(e){if(ur(e))return e=ut(e),e.children=null,e}function li(e){return ur(e)?e.children?e.children[0]:void 0:e}function Ur(e,t){e.shapeFlag&6&&e.component?Ur(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zo(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Be?(o.patchFlag&128&&a++,r=r.concat(zo(o.children,t,s))):(t||o.type!==je)&&r.push(s!=null?ut(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Xt(e){return $(e)?{setup:e,name:e.name}:e}const Yn=e=>!!e.type.__asyncLoader,ur=e=>e.type.__isKeepAlive;function Ql(e,t){Uo(e,"a",t)}function Vl(e,t){Uo(e,"da",t)}function Uo(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(dr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ur(a.parent.vnode)&&Xl(r,t,n,a),a=a.parent}}function Xl(e,t,n,r){const a=dr(t,e,r,!0);Yo(()=>{da(r[t],a)},n)}function dr(e,t,n=ce,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),Wt(n);const s=Pe(t,n,e,o);return Pt(),Vt(),s});return r?a.unshift(i):a.push(i),i}}const et=e=>(t,n=ce)=>(!pn||e==="sp")&&dr(e,(...r)=>t(...r),n),Jl=et("bm"),Bo=et("m"),Gl=et("bu"),Zl=et("u"),Ho=et("bum"),Yo=et("um"),ef=et("sp"),tf=et("rtg"),nf=et("rtc");function rf(e,t=ce){dr("ec",e,t)}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Qt(),Pe(l,n,8,[e.el,s,e,t]),Vt())}}const Wo="components";function af(e,t){return sf(Wo,e,!0,t)||e}const of=Symbol();function sf(e,t,n=!0,r=!1){const a=Ie||ce;if(a){const i=a.type;if(e===Wo){const s=$f(i,!1);if(s&&(s===t||s===Ke(t)||s===sr(Ke(t))))return i}const o=fi(a[e]||i[e],t)||fi(a.appContext[e],t);return!o&&r?i:o}}function fi(e,t){return e&&(e[t]||e[Ke(t)]||e[sr(Ke(t))])}const Br=e=>e?ns(e)?Ta(e)||e.proxy:Br(e.parent):null,rn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$emit:e=>e.emit,$options:e=>Oa(e),$forceUpdate:e=>e.f||(e.f=()=>Ca(e.update)),$nextTick:e=>e.n||(e.n=Nl.bind(e.proxy)),$watch:e=>Wl.bind(e)}),Or=(e,t)=>e!==G&&!e.__isScriptSetup&&H(e,t),lf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const y=o[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return o[t]=1,r[t];if(a!==G&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==G&&H(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const u=rn[t];let m,h;if(u)return t==="$attrs"&&ke(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&H(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,H(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Or(a,t)?(a[t]=n,!0):r!==G&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==G&&H(e,o)||Or(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(rn,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Hr=!0;function ff(e){const t=Oa(e),n=e.proxy,r=e.ctx;Hr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:y,updated:S,activated:I,deactivated:U,beforeDestroy:x,beforeUnmount:O,destroyed:A,unmounted:R,render:z,renderTracked:oe,renderTriggered:ne,errorCaptured:D,serverPrefetch:Y,expose:q,inheritAttrs:pe,components:N,directives:ee,filters:we}=t;if(c&&cf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const Q=o[re];$(Q)&&(r[re]=Q.bind(n))}if(a){const re=a.call(n,n);Z(re)&&(e.data=wa(re))}if(Hr=!0,i)for(const re in i){const Q=i[re],ht=$(Q)?Q.bind(n,n):$(Q.get)?Q.get.bind(n,n):Le,An=!$(Q)&&$(Q.set)?Q.set.bind(n):Le,gt=Ee({get:ht,set:An});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>gt.value,set:De=>gt.value=De})}if(s)for(const re in s)Ko(s[re],r,n,re);if(l){const re=$(l)?l.call(n):l;Reflect.ownKeys(re).forEach(Q=>{Yl(Q,re[Q])})}u&&ci(u,e,"c");function fe(re,Q){j(Q)?Q.forEach(ht=>re(ht.bind(n))):Q&&re(Q.bind(n))}if(fe(Jl,m),fe(Bo,h),fe(Gl,y),fe(Zl,S),fe(Ql,I),fe(Vl,U),fe(rf,D),fe(nf,oe),fe(tf,ne),fe(Ho,O),fe(Yo,R),fe(ef,Y),j(q))if(q.length){const re=e.exposed||(e.exposed={});q.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:ht=>n[Q]=ht})})}else e.exposed||(e.exposed={});z&&e.render===Le&&(e.render=z),pe!=null&&(e.inheritAttrs=pe),N&&(e.components=N),ee&&(e.directives=ee)}function cf(e,t,n=Le,r=!1){j(e)&&(e=Yr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=Bn(i.from||a,i.default,!0):o=Bn(i.from||a):o=Bn(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ci(e,t,n){Pe(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ko(e,t,n,r){const a=r.includes(".")?jo(n,r):()=>n[r];if(ue(e)){const i=t[e];$(i)&&Hn(a,i)}else if($(e))Hn(a,e.bind(n));else if(Z(e))if(j(e))e.forEach(i=>Ko(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&Hn(a,i,e)}}function Oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Jn(l,c,o,!0)),Jn(l,t,o)),Z(t)&&i.set(t,l),l}function Jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Jn(e,i,n,!0),a&&a.forEach(o=>Jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=uf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const uf={data:ui,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:wt,directives:wt,watch:mf,provide:ui,inject:df};function ui(e,t){return t?e?function(){return me($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function df(e,t){return wt(Yr(e),Yr(t))}function Yr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?me(me(Object.create(null),e),t):t}function mf(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function pf(e,t,n,r=!1){const a={},i={};Qn(i,pr,1),e.propsDefaults=Object.create(null),qo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Cl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function hf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(cr(e.emitsOptions,h))continue;const y=t[h];if(l)if(H(i,h))y!==i[h]&&(i[h]=y,c=!0);else{const S=Ke(h);a[S]=Wr(l,s,S,y,e,!1)}else y!==i[h]&&(i[h]=y,c=!0)}}}else{qo(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!H(t,m)&&((u=qt(m))===m||!H(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Wr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m)&&!0)&&(delete i[m],c=!0)}c&&Xe(e,"set","$attrs")}function qo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Un(l))continue;const c=t[l];let u;a&&H(a,u=Ke(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:cr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||G;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Wr(a,l,m,c[m],e,!H(c,m))}}return o}function Wr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Wt(a),r=c[n]=l.call(null,t),Pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===qt(n))&&(r=!0))}return r}function Qo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const u=m=>{l=!0;const[h,y]=Qo(m,t,!0);me(o,h),y&&s.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Z(e)&&r.set(e,Dt),Dt;if(j(i))for(let u=0;u<i.length;u++){const m=Ke(i[u]);di(m)&&(o[m]=G)}else if(i)for(const u in i){const m=Ke(u);if(di(m)){const h=i[u],y=o[m]=j(h)||$(h)?{type:h}:Object.assign({},h);if(y){const S=hi(Boolean,y.type),I=hi(String,y.type);y[0]=S>-1,y[1]=I<0||S<I,(S>-1||H(y,"default"))&&s.push(m)}}}const c=[o,s];return Z(e)&&r.set(e,c),c}function di(e){return e[0]!=="$"}function mi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function pi(e,t){return mi(e)===mi(t)}function hi(e,t){return j(t)?t.findIndex(n=>pi(n,e)):$(t)&&pi(t,e)?0:-1}const Vo=e=>e[0]==="_"||e==="$stable",Ea=e=>j(e)?e.map(He):[He(e)],gf=(e,t,n)=>{if(t._n)return t;const r=Ro((...a)=>Ea(t(...a)),n);return r._c=!1,r},Xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vo(a))continue;const i=e[a];if($(i))t[a]=gf(a,i,r);else if(i!=null){const o=Ea(i);t[a]=()=>o}}},Jo=(e,t)=>{const n=Ea(t);e.slots.default=()=>n},vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Qn(t,"_",n)):Xo(t,e.slots={})}else e.slots={},t&&Jo(e,t);Qn(e.slots,pr,1)},bf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Xo(t,a)),o=t}else t&&(Jo(e,t),o={default:1});if(i)for(const s in a)!Vo(s)&&!(s in o)&&delete a[s]};function Go(){return{app:null,config:{isNativeTag:Ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function xf(e,t){return function(r,a=null){$(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=Go(),o=new Set;let s=!1;const l=i.app={_uid:yf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Hf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=de(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,Ta(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Kr(e,t,n,r,a=!1){if(j(e)){e.forEach((h,y)=>Kr(h,t&&(j(t)?t[y]:t),n,r,a));return}if(Yn(r)&&!a)return;const i=r.shapeFlag&4?Ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ue(c)?(u[c]=null,H(m,c)&&(m[c]=null)):ve(c)&&(c.value=null)),$(l))ft(l,s,12,[o,u]);else{const h=ue(l),y=ve(l);if(h||y){const S=()=>{if(e.f){const I=h?H(m,l)?m[l]:u[l]:l.value;a?j(I)&&da(I,i):j(I)?I.includes(i)||I.push(i):h?(u[l]=[i],H(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,H(m,l)&&(m[l]=o)):y&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,xe(S,n)):S()}}}const xe=Hl;function wf(e){return _f(e)}function _f(e,t){const n=Js();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:y=Le,insertStaticContent:S}=e,I=(f,d,p,v=null,g=null,_=null,C=!1,w=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!kt(f,d)&&(v=Cn(f),De(f,g,_,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:M,shapeFlag:P}=d;switch(b){case mr:U(f,d,p,v);break;case je:x(f,d,p,v);break;case Er:f==null&&O(d,p,v,C);break;case Be:N(f,d,p,v,g,_,C,w,k);break;default:P&1?z(f,d,p,v,g,_,C,w,k):P&6?ee(f,d,p,v,g,_,C,w,k):(P&64||P&128)&&b.process(f,d,p,v,g,_,C,w,k,Nt)}M!=null&&g&&Kr(M,f&&f.ref,_,d||f,!d)},U=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},x=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},O=(f,d,p,v)=>{[f.el,f.anchor]=S(f.children,d,p,v,f.el,f.anchor)},A=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},R=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},z=(f,d,p,v,g,_,C,w,k)=>{C=C||d.type==="svg",f==null?oe(d,p,v,g,_,C,w,k):Y(f,d,g,_,C,w,k)},oe=(f,d,p,v,g,_,C,w)=>{let k,b;const{type:M,props:P,shapeFlag:F,transition:L,dirs:B}=f;if(k=f.el=o(f.type,_,P&&P.is,P),F&8?u(k,f.children):F&16&&D(f.children,k,null,v,g,_&&M!=="foreignObject",C,w),B&&vt(f,null,v,"created"),P){for(const K in P)K!=="value"&&!Un(K)&&i(k,K,null,P[K],_,f.children,v,g,qe);"value"in P&&i(k,"value",null,P.value),(b=P.onVnodeBeforeMount)&&ze(b,v,f)}ne(k,f,f.scopeId,C,v),B&&vt(f,null,v,"beforeMount");const V=(!g||g&&!g.pendingBranch)&&L&&!L.persisted;V&&L.beforeEnter(k),r(k,d,p),((b=P&&P.onVnodeMounted)||V||B)&&xe(()=>{b&&ze(b,v,f),V&&L.enter(k),B&&vt(f,null,v,"mounted")},g)},ne=(f,d,p,v,g)=>{if(p&&y(f,p),v)for(let _=0;_<v.length;_++)y(f,v[_]);if(g){let _=g.subTree;if(d===_){const C=g.vnode;ne(f,C,C.scopeId,C.slotScopeIds,g.parent)}}},D=(f,d,p,v,g,_,C,w,k=0)=>{for(let b=k;b<f.length;b++){const M=f[b]=w?ot(f[b]):He(f[b]);I(null,M,d,p,v,g,_,C,w)}},Y=(f,d,p,v,g,_,C)=>{const w=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:M}=d;k|=f.patchFlag&16;const P=f.props||G,F=d.props||G;let L;p&&bt(p,!1),(L=F.onVnodeBeforeUpdate)&&ze(L,p,d,f),M&&vt(d,f,p,"beforeUpdate"),p&&bt(p,!0);const B=g&&d.type!=="foreignObject";if(b?q(f.dynamicChildren,b,w,p,v,B,_):C||Q(f,d,w,null,p,v,B,_,!1),k>0){if(k&16)pe(w,d,P,F,p,v,g);else if(k&2&&P.class!==F.class&&i(w,"class",null,F.class,g),k&4&&i(w,"style",P.style,F.style,g),k&8){const V=d.dynamicProps;for(let K=0;K<V.length;K++){const ie=V[K],Te=P[ie],Mt=F[ie];(Mt!==Te||ie==="value")&&i(w,ie,Te,Mt,g,f.children,p,v,qe)}}k&1&&f.children!==d.children&&u(w,d.children)}else!C&&b==null&&pe(w,d,P,F,p,v,g);((L=F.onVnodeUpdated)||M)&&xe(()=>{L&&ze(L,p,d,f),M&&vt(d,f,p,"updated")},v)},q=(f,d,p,v,g,_,C)=>{for(let w=0;w<d.length;w++){const k=f[w],b=d[w],M=k.el&&(k.type===Be||!kt(k,b)||k.shapeFlag&70)?m(k.el):p;I(k,b,M,null,v,g,_,C,!0)}},pe=(f,d,p,v,g,_,C)=>{if(p!==v){if(p!==G)for(const w in p)!Un(w)&&!(w in v)&&i(f,w,p[w],null,C,d.children,g,_,qe);for(const w in v){if(Un(w))continue;const k=v[w],b=p[w];k!==b&&w!=="value"&&i(f,w,b,k,C,d.children,g,_,qe)}"value"in v&&i(f,"value",p.value,v.value)}},N=(f,d,p,v,g,_,C,w,k)=>{const b=d.el=f?f.el:s(""),M=d.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:L}=d;L&&(w=w?w.concat(L):L),f==null?(r(b,p,v),r(M,p,v),D(d.children,p,M,g,_,C,w,k)):P>0&&P&64&&F&&f.dynamicChildren?(q(f.dynamicChildren,F,p,g,_,C,w),(d.key!=null||g&&d===g.subTree)&&Zo(f,d,!0)):Q(f,d,p,M,g,_,C,w,k)},ee=(f,d,p,v,g,_,C,w,k)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,C,k):we(d,p,v,g,_,C,k):Gt(f,d,k)},we=(f,d,p,v,g,_,C)=>{const w=f.component=Mf(f,v,g);if(ur(f)&&(w.ctx.renderer=Nt),Rf(w),w.asyncDep){if(g&&g.registerDep(w,fe),!f.el){const k=w.subTree=de(je);x(null,k,d,p)}return}fe(w,f,d,p,g,_,C)},Gt=(f,d,p)=>{const v=d.component=f.component;if(zl(f,d,p))if(v.asyncDep&&!v.asyncResolved){re(v,d,p);return}else v.next=d,Fl(v.update),v.update();else d.el=f.el,v.vnode=d},fe=(f,d,p,v,g,_,C)=>{const w=()=>{if(f.isMounted){let{next:M,bu:P,u:F,parent:L,vnode:B}=f,V=M,K;bt(f,!1),M?(M.el=B.el,re(f,M,C)):M=B,P&&_r(P),(K=M.props&&M.props.onVnodeBeforeUpdate)&&ze(K,L,M,B),bt(f,!0);const ie=Ar(f),Te=f.subTree;f.subTree=ie,I(Te,ie,m(Te.el),Cn(Te),f,g,_),M.el=ie.el,V===null&&Ul(f,ie.el),F&&xe(F,g),(K=M.props&&M.props.onVnodeUpdated)&&xe(()=>ze(K,L,M,B),g)}else{let M;const{el:P,props:F}=d,{bm:L,m:B,parent:V}=f,K=Yn(d);if(bt(f,!1),L&&_r(L),!K&&(M=F&&F.onVnodeBeforeMount)&&ze(M,V,d),bt(f,!0),P&&xr){const ie=()=>{f.subTree=Ar(f),xr(P,f.subTree,f,g,null)};K?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=Ar(f);I(null,ie,p,v,f,g,_),d.el=ie.el}if(B&&xe(B,g),!K&&(M=F&&F.onVnodeMounted)){const ie=d;xe(()=>ze(M,V,ie),g)}(d.shapeFlag&256||V&&Yn(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&xe(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new va(w,()=>Ca(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,bt(f,!0),b()},re=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,hf(f,d.props,v,p),bf(f,d.children,p),Qt(),oi(),Vt()},Q=(f,d,p,v,g,_,C,w,k=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,P=d.children,{patchFlag:F,shapeFlag:L}=d;if(F>0){if(F&128){An(b,P,p,v,g,_,C,w,k);return}else if(F&256){ht(b,P,p,v,g,_,C,w,k);return}}L&8?(M&16&&qe(b,g,_),P!==b&&u(p,P)):M&16?L&16?An(b,P,p,v,g,_,C,w,k):qe(b,g,_,!0):(M&8&&u(p,""),L&16&&D(P,p,v,g,_,C,w,k))},ht=(f,d,p,v,g,_,C,w,k)=>{f=f||Dt,d=d||Dt;const b=f.length,M=d.length,P=Math.min(b,M);let F;for(F=0;F<P;F++){const L=d[F]=k?ot(d[F]):He(d[F]);I(f[F],L,p,null,g,_,C,w,k)}b>M?qe(f,g,_,!0,!1,P):D(d,p,v,g,_,C,w,k,P)},An=(f,d,p,v,g,_,C,w,k)=>{let b=0;const M=d.length;let P=f.length-1,F=M-1;for(;b<=P&&b<=F;){const L=f[b],B=d[b]=k?ot(d[b]):He(d[b]);if(kt(L,B))I(L,B,p,null,g,_,C,w,k);else break;b++}for(;b<=P&&b<=F;){const L=f[P],B=d[F]=k?ot(d[F]):He(d[F]);if(kt(L,B))I(L,B,p,null,g,_,C,w,k);else break;P--,F--}if(b>P){if(b<=F){const L=F+1,B=L<M?d[L].el:v;for(;b<=F;)I(null,d[b]=k?ot(d[b]):He(d[b]),p,B,g,_,C,w,k),b++}}else if(b>F)for(;b<=P;)De(f[b],g,_,!0),b++;else{const L=b,B=b,V=new Map;for(b=B;b<=F;b++){const _e=d[b]=k?ot(d[b]):He(d[b]);_e.key!=null&&V.set(_e.key,b)}let K,ie=0;const Te=F-B+1;let Mt=!1,Va=0;const Zt=new Array(Te);for(b=0;b<Te;b++)Zt[b]=0;for(b=L;b<=P;b++){const _e=f[b];if(ie>=Te){De(_e,g,_,!0);continue}let $e;if(_e.key!=null)$e=V.get(_e.key);else for(K=B;K<=F;K++)if(Zt[K-B]===0&&kt(_e,d[K])){$e=K;break}$e===void 0?De(_e,g,_,!0):(Zt[$e-B]=b+1,$e>=Va?Va=$e:Mt=!0,I(_e,d[$e],p,null,g,_,C,w,k),ie++)}const Xa=Mt?kf(Zt):Dt;for(K=Xa.length-1,b=Te-1;b>=0;b--){const _e=B+b,$e=d[_e],Ja=_e+1<M?d[_e+1].el:v;Zt[b]===0?I(null,$e,p,Ja,g,_,C,w,k):Mt&&(K<0||b!==Xa[K]?gt($e,p,Ja,2):K--)}}},gt=(f,d,p,v,g=null)=>{const{el:_,type:C,transition:w,children:k,shapeFlag:b}=f;if(b&6){gt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){C.move(f,d,p,Nt);return}if(C===Be){r(_,d,p);for(let P=0;P<k.length;P++)gt(k[P],d,p,v);r(f.anchor,d,p);return}if(C===Er){A(f,d,p);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(_),r(_,d,p),xe(()=>w.enter(_),g);else{const{leave:P,delayLeave:F,afterLeave:L}=w,B=()=>r(_,d,p),V=()=>{P(_,()=>{B(),L&&L()})};F?F(_,B,V):V()}else r(_,d,p)},De=(f,d,p,v=!1,g=!1)=>{const{type:_,props:C,ref:w,children:k,dynamicChildren:b,shapeFlag:M,patchFlag:P,dirs:F}=f;if(w!=null&&Kr(w,null,p,f,!0),M&256){d.ctx.deactivate(f);return}const L=M&1&&F,B=!Yn(f);let V;if(B&&(V=C&&C.onVnodeBeforeUnmount)&&ze(V,d,f),M&6)Ls(f.component,p,v);else{if(M&128){f.suspense.unmount(p,v);return}L&&vt(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,p,g,Nt,v):b&&(_!==Be||P>0&&P&64)?qe(b,d,p,!1,!0):(_===Be&&P&384||!g&&M&16)&&qe(k,d,p),v&&qa(f)}(B&&(V=C&&C.onVnodeUnmounted)||L)&&xe(()=>{V&&ze(V,d,f),L&&vt(f,null,d,"unmounted")},p)},qa=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===Be){Rs(p,v);return}if(d===Er){R(f);return}const _=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:C,delayLeave:w}=g,k=()=>C(p,_);w?w(f.el,_,k):k()}else _()},Rs=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},Ls=(f,d,p)=>{const{bum:v,scope:g,update:_,subTree:C,um:w}=f;v&&_r(v),g.stop(),_&&(_.active=!1,De(C,f,d,p)),w&&xe(w,d),xe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},qe=(f,d,p,v=!1,g=!1,_=0)=>{for(let C=_;C<f.length;C++)De(f[C],d,p,v,g)},Cn=f=>f.shapeFlag&6?Cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Qa=(f,d,p)=>{f==null?d._vnode&&De(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,p),oi(),So(),d._vnode=f},Nt={p:I,um:De,m:gt,r:qa,mt:we,mc:D,pc:Q,pbc:q,n:Cn,o:e};let yr,xr;return t&&([yr,xr]=t(Nt)),{render:Qa,hydrate:yr,createApp:xf(Qa,yr)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Zo(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ot(a[i]),s.el=o.el),n||Zo(o,s)),s.type===mr&&(s.el=o.el)}}function kf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Af=e=>e.__isTeleport,Be=Symbol(void 0),mr=Symbol(void 0),je=Symbol(void 0),Er=Symbol(void 0),an=[];let Fe=null;function Bt(e=!1){an.push(Fe=e?null:[])}function Cf(){an.pop(),Fe=an[an.length-1]||null}let mn=1;function gi(e){mn+=e}function es(e){return e.dynamicChildren=mn>0?Fe||Dt:null,Cf(),mn>0&&Fe&&Fe.push(e),e}function Ia(e,t,n,r,a,i){return es(te(e,t,n,r,a,i,!0))}function qr(e,t,n,r,a){return es(de(e,t,n,r,a,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function kt(e,t){return e.type===t.type&&e.key===t.key}const pr="__vInternal",ts=({key:e})=>e!=null?e:null,Wn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ue(e)||ve(e)||$(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function te(e,t=null,n=null,r=0,a=null,i=e===Be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ts(t),ref:t&&Wn(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ie};return s?(Pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),mn>0&&!o&&Fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fe.push(l),l}const de=Of;function Of(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===of)&&(e=je),Qr(e)){const s=ut(e,t,!0);return n&&Pa(s,n),mn>0&&!i&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(zf(e)&&(e=e.__vccOpts),t){t=Ef(t);let{class:s,style:l}=t;s&&!ue(s)&&(t.class=ca(s)),Z(l)&&(ko(l)&&!j(l)&&(l=me({},l)),t.style=rr(l))}const o=ue(e)?1:Bl(e)?128:Af(e)?64:Z(e)?4:$(e)?2:0;return te(e,t,n,r,a,o,i,!0)}function Ef(e){return e?ko(e)||pr in e?me({},e):e:null}function ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ts(s),ref:t&&t.ref?n&&a?j(a)?a.concat(Wn(t)):[a,Wn(t)]:Wn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function If(e=" ",t=0){return de(mr,null,e,t)}function Pf(e="",t=!1){return t?(Bt(),qr(je,null,e)):de(je,null,e)}function He(e){return e==null||typeof e=="boolean"?de(je):j(e)?de(Be,null,e.slice()):typeof e=="object"?ot(e):de(mr,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ut(e)}function Pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(pr in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[If(t)]):n=8);e.children=t,e.shapeFlag|=n}function Tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ca([t.class,r.class]));else if(a==="style")t.style=rr([t.style,r.style]);else if(ar(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ze(e,t,n,r=null){Pe(e,t,7,[n,r])}const Sf=Go();let Nf=0;function Mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Sf,i={uid:Nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,a),emitsOptions:Mo(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jl.bind(null,i),e.ce&&e.ce(i),i}let ce=null;const Ff=()=>ce||Ie,Wt=e=>{ce=e,e.scope.on()},Pt=()=>{ce&&ce.scope.off(),ce=null};function ns(e){return e.vnode.shapeFlag&4}let pn=!1;function Rf(e,t=!1){pn=t;const{props:n,children:r}=e.vnode,a=ns(e);pf(e,n,a,t),vf(e,r);const i=a?Lf(e,t):void 0;return pn=!1,i}function Lf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ao(new Proxy(e.ctx,lf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Df(e):null;Wt(e),Qt();const i=ft(r,e,0,[e.props,a]);if(Vt(),Pt(),lo(i)){if(i.then(Pt,Pt),t)return i.then(o=>{vi(e,o,t)}).catch(o=>{fr(o,e,0)});e.asyncDep=i}else vi(e,i,t)}else rs(e,t)}function vi(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Eo(t)),rs(e,n)}let bi;function rs(e,t,n){const r=e.type;if(!e.render){if(!t&&bi&&!r.render){const a=r.template||Oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=me(me({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,c)}}e.render=r.render||Le}Wt(e),Qt(),ff(e),Vt(),Pt()}function jf(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function Df(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=jf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ta(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Eo(Ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rn)return rn[n](e)},has(t,n){return n in t||n in rn}}))}function $f(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function zf(e){return $(e)&&"__vccOpts"in e}const Ee=(e,t)=>Tl(e,t,pn);function Sa(e,t,n){const r=arguments.length;return r===2?Z(t)&&!j(t)?Qr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),de(e,t,n))}const Uf=Symbol(""),Bf=()=>Bn(Uf),Hf="3.2.45",Yf="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,yi=At&&At.createElement("template"),Wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(Yf,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r?`<svg>${e}</svg>`:e;const s=yi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function qf(e,t,n){const r=e.style,a=ue(n);if(n&&!a){for(const i in n)Vr(r,i,n[i]);if(t&&!ue(t))for(const i in t)n[i]==null&&Vr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const xi=/\s*!important$/;function Vr(e,t,n){if(j(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qf(e,t);xi.test(n)?e.setProperty(qt(r),n.replace(xi,""),"important"):e[r]=n}}const wi=["Webkit","Moz","ms"],Ir={};function Qf(e,t){const n=Ir[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Ir[t]=r;r=sr(r);for(let a=0;a<wi.length;a++){const i=wi[a]+r;if(i in e)return Ir[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function Vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=Ys(t);n==null||i&&!io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=io(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Jf(e,t,n,r){e.addEventListener(t,n,r)}function Gf(e,t,n,r){e.removeEventListener(t,n,r)}function Zf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=ec(t);if(r){const c=i[t]=rc(r,a);Jf(e,s,c,l)}else o&&(Gf(e,s,o,l),i[t]=void 0)}}const ki=/(?:Once|Passive|Capture)$/;function ec(e){let t;if(ki.test(e)){t={};let r;for(;r=e.match(ki);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qt(e.slice(2)),t]}let Pr=0;const tc=Promise.resolve(),nc=()=>Pr||(tc.then(()=>Pr=0),Pr=Date.now());function rc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(ac(r,n.value),t,5,[r])};return n.value=e,n.attached=nc(),n}function ac(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ai=/^on[a-z]/,ic=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Kf(e,r,a):t==="style"?qf(e,n,r):ar(t)?ua(t)||Zf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):oc(e,t,r,a))?Xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Vf(e,t,r,a))};function oc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ai.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ai.test(t)&&ue(n)?!1:t in e}const rt="transition",en="animation",Na=(e,{slots:t})=>Sa(Do,sc(e),t);Na.displayName="Transition";const as={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Na.props=me({},Do.props,as);const yt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ci=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function sc(e){const t={};for(const N in e)N in as||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,S=lc(a),I=S&&S[0],U=S&&S[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:A,onLeave:R,onLeaveCancelled:z,onBeforeAppear:oe=x,onAppear:ne=O,onAppearCancelled:D=A}=t,Y=(N,ee,we)=>{xt(N,ee?u:s),xt(N,ee?c:o),we&&we()},q=(N,ee)=>{N._isLeaving=!1,xt(N,m),xt(N,y),xt(N,h),ee&&ee()},pe=N=>(ee,we)=>{const Gt=N?ne:O,fe=()=>Y(ee,N,we);yt(Gt,[ee,fe]),Oi(()=>{xt(ee,N?l:i),at(ee,N?u:s),Ci(Gt)||Ei(ee,r,I,fe)})};return me(t,{onBeforeEnter(N){yt(x,[N]),at(N,i),at(N,o)},onBeforeAppear(N){yt(oe,[N]),at(N,l),at(N,c)},onEnter:pe(!1),onAppear:pe(!0),onLeave(N,ee){N._isLeaving=!0;const we=()=>q(N,ee);at(N,m),uc(),at(N,h),Oi(()=>{!N._isLeaving||(xt(N,m),at(N,y),Ci(R)||Ei(N,r,U,we))}),yt(R,[N,we])},onEnterCancelled(N){Y(N,!1),yt(A,[N])},onAppearCancelled(N){Y(N,!0),yt(D,[N])},onLeaveCancelled(N){q(N),yt(z,[N])}})}function lc(e){if(e==null)return null;if(Z(e))return[Tr(e.enter),Tr(e.leave)];{const t=Tr(e);return[t,t]}}function Tr(e){return ha(e)}function at(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Oi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fc=0;function Ei(e,t,n,r){const a=e._endId=++fc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=cc(e,t);if(!o)return r();const c=o+"end";let u=0;const m=()=>{e.removeEventListener(c,h),i()},h=y=>{y.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(c,h)}function cc(e,t){const n=window.getComputedStyle(e),r=S=>(n[S]||"").split(", "),a=r(`${rt}Delay`),i=r(`${rt}Duration`),o=Ii(a,i),s=r(`${en}Delay`),l=r(`${en}Duration`),c=Ii(s,l);let u=null,m=0,h=0;t===rt?o>0&&(u=rt,m=o,h=i.length):t===en?c>0&&(u=en,m=c,h=l.length):(m=Math.max(o,c),u=m>0?o>c?rt:en:null,h=u?u===rt?i.length:l.length:0);const y=u===rt&&/\b(transform|all)(,|$)/.test(r(`${rt}Property`).toString());return{type:u,timeout:m,propCount:h,hasTransform:y}}function Ii(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Pi(n)+Pi(e[r])))}function Pi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function uc(){return document.body.offsetHeight}const dc=me({patchProp:ic},Wf);let Ti;function mc(){return Ti||(Ti=wf(dc))}const pc=(...e)=>{const t=mc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=hc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function hc(e){return ue(e)?document.querySelector(e):e}const st=class{};let Oe=st;he(Oe,"_ghUsername","zyrouge"),he(Oe,"_ghRepo","upright-quotes"),he(Oe,"_ghDistBranch","gh-pages"),he(Oe,"github",`https://github.com/${st._ghUsername}/${st._ghRepo}`),he(Oe,"apiEndpoint",`https://${st._ghUsername}.github.io/${st._ghRepo}/api`),he(Oe,"apiDocs",`https://github.com/${st._ghUsername}/${st._ghRepo}/wiki/API-Documentation`);var ao;const Ve=class{static async getMeta(){return await(await Ve.request(Ve.getMetaJsonURL())).json()}static async getQuoteJson(t){return await(await Ve.request(Ve.getQuoteJsonURL(t))).json()}static getMetaJsonURL(){return`${Ve.url}/meta.json`}static getQuoteJsonURL(t){return`${Ve.url}/quotes/${t}.json`}static getQuoteImageURL(t){return`${Ve.url}/quotes/${t}.png`}static request(t,n){return fetch(t,{cache:"no-cache",...n})}};let Ct=Ve;he(Ct,"url",(ao={BASE_URL:"/upright-quotes/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_URL)!=null?ao:Oe.apiEndpoint);class se{}he(se,"UprightQuotes","UprightQuotes"),he(se,"MetadataWasNotFetched","Metadata was not fetched"),he(se,"GitHub","GitHub"),he(se,"API","API"),he(se,"RefreshQuote","Refresh Quote"),he(se,"ViewAsJSON","View as JSON"),he(se,"DownloadAsImage","Download as Image"),he(se,"QParamsIndex","index");class hn{static getUnrepeatedSecureRandomNumber(t=0,n=1,r=-1){const a=Math.floor(hn.getSecureRandomNumber()*n)+t;return a===r?hn.getUnrepeatedSecureRandomNumber(n,r):a}static getSecureRandomNumber(){return crypto.getRandomValues(new Uint8Array(1))[0]/256}static sleep(t){return new Promise(n=>{setTimeout(n,t)})}}const gc={class:"u-flex-center w-full min-h-screen"},vc={class:"u-flex-center flex-col"},bc=te("div",{class:"mt-1 u-flex-center gap-0.5",id:"loader-container"},[te("div",{id:"loader-child"}),te("div",{id:"loader-child"}),te("div",{id:"loader-child"})],-1),yc=Xt({__name:"Loader",setup(e){return(t,n)=>(Bt(),Ia("div",gc,[te("div",vc,[te("div",null,Ft(Se(se).UprightQuotes),1),bc])]))}}),xc={class:"u-flex-center !justify-between sm:!justify-around w-full",id:"content-header"},wc=["title"],_c={class:"u-flex-center gap-4 sm:gap-6"},kc=["href"],Ac=["href"],Cc={class:"u-flex-center",id:"content-parent"},Oc={id:"content"},Ec={class:"text-3xl md:text-5xl font-bold"},Ic={class:"mt-4 text-lg"},Pc={class:"u-flex-center !justify-start gap-5 mt-4 text-xl"},Tc=["title"],Sc=["href","title"],Nc=["href","title"],Mc=Xt({__name:"Quote",props:{currentQuote:null,refreshQuote:null},setup(e){return(t,n)=>{const r=af("Icon");return Bt(),Ia("div",null,[te("div",{id:"content-container",style:rr({color:e.currentQuote.quote.color.contrast,backgroundColor:e.currentQuote.quote.color.primary})},[te("div",xc,[te("p",{class:"font-bold",title:Se(se).RefreshQuote},[te("button",{class:"u-link",onClick:n[0]||(n[0]=(...a)=>e.refreshQuote&&e.refreshQuote(...a))},Ft(Se(se).UprightQuotes),1)],8,wc),te("div",_c,[te("a",{class:"u-link",href:Se(Oe).github,target:"_blank"},Ft(Se(se).GitHub),9,kc),te("a",{class:"u-link",href:Se(Oe).apiDocs,target:"_blank"},Ft(Se(se).API),9,Ac)])]),te("div",Cc,[te("div",Oc,[te("p",Ec,Ft(e.currentQuote.quote.quote),1),te("p",Ic," ~ "+Ft(e.currentQuote.quote.author),1),te("div",Pc,[te("button",{class:"u-link",onClick:n[1]||(n[1]=(...a)=>e.refreshQuote&&e.refreshQuote(...a)),title:Se(se).RefreshQuote},[de(r,{icon:"arrow-rotate-right"})],8,Tc),te("a",{class:"u-link",href:e.currentQuote.json,title:Se(se).ViewAsJSON,target:"_blank"},[de(r,{icon:"code"})],8,Sc),te("a",{class:"u-link",href:e.currentQuote.image,title:Se(se).DownloadAsImage,target:"_blank"},[de(r,{icon:"image"})],8,Nc)])])])],4)])}}}),Fc={id:"app-container"},Rc=Xt({__name:"App",setup(e){var s;const t=kr(!1),n=kr(null),r=async()=>{n.value=await Ct.getMeta()};let a=parseInt((s=new URL(location.href).searchParams.get(se.QParamsIndex))!=null?s:"");const i=kr(null),o=async()=>{var h,y;if(!n.value)throw new Error(se.MetadataWasNotFetched);const l=typeof a=="number"&&!isNaN(a)&&a<n.value.size?a:hn.getUnrepeatedSecureRandomNumber(0,n.value.size,(y=(h=i.value)==null?void 0:h.index)!=null?y:-1),c=await Ct.getQuoteJson(l),u=Ct.getQuoteJsonURL(l),m=Ct.getQuoteImageURL(l);i.value={index:l,quote:c,json:u,image:m},history.replaceState(void 0,"",`?${se.QParamsIndex}=${l}`),a=null};return(async()=>{const l=Date.now();await r(),await o();const c=Date.now()-l,u=750;await hn.sleep(c<u?u-c:0),t.value=!0})(),(l,c)=>(Bt(),Ia("div",Fc,[de(Na,{id:"app-container-t",name:"app-container-fade",mode:"out-in"},{default:Ro(()=>[t.value?t.value&&i.value?(Bt(),qr(Mc,{key:i.value.index,currentQuote:i.value,refreshQuote:o},null,8,["currentQuote"])):Pf("",!0):(Bt(),qr(yc,{key:0}))]),_:1})]))}});function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gn(e){return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function Lc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ni(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jc(e,t,n){return t&&Ni(e.prototype,t),n&&Ni(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ma(e,t){return $c(e)||Uc(e,t)||is(e,t)||Hc()}function wn(e){return Dc(e)||zc(e)||is(e)||Bc()}function Dc(e){if(Array.isArray(e))return Xr(e)}function $c(e){if(Array.isArray(e))return e}function zc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function is(e,t){if(!!e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mi=function(){},Fa={},os={},ss=null,ls={mark:Mi,measure:Mi};try{typeof window<"u"&&(Fa=window),typeof document<"u"&&(os=document),typeof MutationObserver<"u"&&(ss=MutationObserver),typeof performance<"u"&&(ls=performance)}catch{}var Yc=Fa.navigator||{},Fi=Yc.userAgent,Ri=Fi===void 0?"":Fi,dt=Fa,J=os,Li=ss,Nn=ls;dt.document;var tt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",fs=~Ri.indexOf("MSIE")||~Ri.indexOf("Trident/"),Mn,Fn,Rn,Ln,jn,Je="___FONT_AWESOME___",Jr=16,cs="fa",us="svg-inline--fa",Tt="data-fa-i2svg",Gr="data-fa-pseudo-element",Wc="data-fa-pseudo-element-pending",Ra="data-prefix",La="data-icon",ji="fontawesome-i2svg",Kc="async",qc=["HTML","HEAD","STYLE","SCRIPT"],ds=function(){try{return!0}catch{return!1}}(),X="classic",ae="sharp",ja=[X,ae];function _n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var gn=_n((Mn={},le(Mn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Mn,ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Mn)),vn=_n((Fn={},le(Fn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Fn,ae,{solid:"fass",regular:"fasr"}),Fn)),bn=_n((Rn={},le(Rn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Rn,ae,{fass:"fa-solid",fasr:"fa-regular"}),Rn)),Qc=_n((Ln={},le(Ln,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Ln,ae,{"fa-solid":"fass","fa-regular":"fasr"}),Ln)),Vc=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,ms="fa-layers-text",Xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jc=_n((jn={},le(jn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(jn,ae,{900:"fass",400:"fasr"}),jn)),ps=[1,2,3,4,5,6,7,8,9,10],Gc=ps.concat([11,12,13,14,15,16,17,18,19,20]),Zc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yn=new Set;Object.keys(vn[X]).map(yn.add.bind(yn));Object.keys(vn[ae]).map(yn.add.bind(yn));var eu=[].concat(ja,wn(yn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(ps.map(function(e){return"".concat(e,"x")})).concat(Gc.map(function(e){return"w-".concat(e)})),on=dt.FontAwesomeConfig||{};function tu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var ru=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ru.forEach(function(e){var t=Ma(e,2),n=t[0],r=t[1],a=nu(tu(n));a!=null&&(on[r]=a)})}var hs={styleDefault:"solid",familyDefault:"classic",cssPrefix:cs,replacementClass:us,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};on.familyPrefix&&(on.cssPrefix=on.familyPrefix);var Kt=E(E({},hs),on);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var T={};Object.keys(hs).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Kt[e]=n,sn.forEach(function(r){return r(T)})},get:function(){return Kt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Kt.cssPrefix=t,sn.forEach(function(n){return n(T)})},get:function(){return Kt.cssPrefix}});dt.FontAwesomeConfig=T;var sn=[];function au(e){return sn.push(e),function(){sn.splice(sn.indexOf(e),1)}}var it=Jr,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iu(e){if(!(!e||!tt)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var ou="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var e=12,t="";e-- >0;)t+=ou[Math.random()*62|0];return t}function Jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Da(e){return e.classList?Jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function gs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function su(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(gs(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function $a(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function lu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function fu(e){var t=e.transform,n=e.width,r=n===void 0?Jr:n,a=e.height,i=a===void 0?Jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&fs?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var cu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vs(){var e=cs,t=us,n=T.cssPrefix,r=T.replacementClass,a=cu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Di=!1;function Sr(){T.autoAddCss&&!Di&&(iu(vs()),Di=!0)}var uu={mixout:function(){return{dom:{css:vs,insertCss:Sr}}},hooks:function(){return{beforeDOMElementCreation:function(){Sr()},beforeI2svg:function(){Sr()}}}},Ge=dt||{};Ge[Je]||(Ge[Je]={});Ge[Je].styles||(Ge[Je].styles={});Ge[Je].hooks||(Ge[Je].hooks={});Ge[Je].shims||(Ge[Je].shims=[]);var Re=Ge[Je],bs=[],du=function e(){J.removeEventListener("DOMContentLoaded",e),Zn=1,bs.map(function(t){return t()})},Zn=!1;tt&&(Zn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Zn||J.addEventListener("DOMContentLoaded",du));function mu(e){!tt||(Zn?setTimeout(e,0):bs.push(e))}function kn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?gs(e):"<".concat(t," ").concat(su(r),">").concat(i.map(kn).join(""),"</").concat(t,">")}function $i(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var pu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Nr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?pu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zr(e){var t=hu(e);return t.length===1?t[0].toString(16):null}function gu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function zi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ea(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=zi(t);typeof Re.hooks.addPack=="function"&&!a?Re.hooks.addPack(e,zi(t)):Re.styles[e]=E(E({},Re.styles[e]||{}),i),e==="fas"&&ea("fa",t)}var Dn,$n,zn,Lt=Re.styles,vu=Re.shims,bu=(Dn={},le(Dn,X,Object.values(bn[X])),le(Dn,ae,Object.values(bn[ae])),Dn),za=null,ys={},xs={},ws={},_s={},ks={},yu=($n={},le($n,X,Object.keys(gn[X])),le($n,ae,Object.keys(gn[ae])),$n);function xu(e){return~eu.indexOf(e)}function wu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xu(a)?a:null}var As=function(){var t=function(i){return Nr(Lt,function(o,s,l){return o[l]=Nr(s,i,{}),o},{})};ys=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),xs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ks=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Nr(vu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ws=r.names,_s=r.unicodes,za=gr(T.styleDefault,{family:T.familyDefault})};au(function(e){za=gr(e.styleDefault,{family:T.familyDefault})});As();function Ua(e,t){return(ys[e]||{})[t]}function _u(e,t){return(xs[e]||{})[t]}function Et(e,t){return(ks[e]||{})[t]}function Cs(e){return ws[e]||{prefix:null,iconName:null}}function ku(e){var t=_s[e],n=Ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return za}var Ba=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=gn[r][e],i=vn[r][e]||vn[r][a],o=e in Re.styles?e:null;return i||o||null}var Ui=(zn={},le(zn,X,Object.keys(bn[X])),le(zn,ae,Object.keys(bn[ae])),zn);function vr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,X,"".concat(T.cssPrefix,"-").concat(X)),le(t,ae,"".concat(T.cssPrefix,"-").concat(ae)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ui[X].includes(c)}))&&(s=X),(e.includes(i[ae])||e.some(function(c){return Ui[ae].includes(c)}))&&(s=ae);var l=e.reduce(function(c,u){var m=wu(T.cssPrefix,u);if(Lt[u]?(u=bu[s].includes(u)?Qc[s][u]:u,o=u,c.prefix=u):yu[s].indexOf(u)>-1?(o=u,c.prefix=gr(u,{family:s})):m?c.iconName=m:u!==T.replacementClass&&u!==i[X]&&u!==i[ae]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?Cs(c.iconName):{},y=Et(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||y||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},Ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ae&&(Lt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=Et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var Au=function(){function e(){Lc(this,e),this.definitions={}}return jc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),ea(s,o[s]);var l=bn[X][s];l&&ea(l,o[s]),As()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Bi=[],jt={},Ht={},Cu=Object.keys(Ht);function Ou(e,t){var n=t.mixoutsTo;return Bi=e,jt={},Object.keys(Ht).forEach(function(r){Cu.indexOf(r)===-1&&delete Ht[r]}),Bi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Gn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Ht)}),n}function ta(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function St(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function na(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(!!t)return t=Et(n,t)||t,$i(Os.definitions,n,t)||$i(Re.styles,n,t)}var Os=new Au,Eu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,St("noAuto")},Iu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(St("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,mu(function(){Tu({autoReplaceSvgRoot:n}),St("watch",t)})}},Pu={icon:function(t){if(t===null)return null;if(Gn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(Vc))){var a=vr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Et(i,t)||t}}}},Ae={noAuto:Eu,config:T,dom:Iu,parse:Pu,library:Os,findIconDefinition:na,toHtml:kn},Tu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Re.styles).length>0||T.autoFetchSvg)&&tt&&T.autoReplaceSvg&&Ae.dom.i2svg({node:r})};function br(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return kn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!tt){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Su(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if($a(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=hr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ha(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,y=h===void 0?!1:h,S=r.found?r:n,I=S.width,U=S.height,x=a==="fak",O=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),A={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(U)})},R=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/U*16*.0625,"em")}:{};y&&(A.attributes[Tt]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||xn())},children:[l]}),delete A.attributes.title);var z=E(E({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},R),m.styles)}),oe=r.found&&n.found?Ze("generateAbstractMask",z)||{children:[],attributes:{}}:Ze("generateAbstractIcon",z)||{children:[],attributes:{}},ne=oe.children,D=oe.attributes;return z.children=ne,z.attributes=D,s?Nu(z):Su(z)}function Hi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Tt]="");var u=E({},o.styles);$a(a)&&(u.transform=fu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=hr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Mu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mr=Re.styles;function ra(e){var t=e[0],n=e[1],r=e.slice(4),a=Ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Fu={found:!1,width:512,height:512};function Ru(e,t){!ds&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function aa(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=Cs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mr[t]&&Mr[t][e]){var o=Mr[t][e];return r(ra(o))}Ru(e,t),r(E(E({},Fu),{},{icon:T.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var Yi=function(){},ia=T.measurePerformance&&Nn&&Nn.mark&&Nn.measure?Nn:{mark:Yi,measure:Yi},nn='FA "6.3.0"',Lu=function(t){return ia.mark("".concat(nn," ").concat(t," begins")),function(){return Es(t)}},Es=function(t){ia.mark("".concat(nn," ").concat(t," ends")),ia.measure("".concat(nn," ").concat(t),"".concat(nn," ").concat(t," begins"),"".concat(nn," ").concat(t," ends"))},Ya={begin:Lu,end:Es},Kn=function(){};function Wi(e){var t=e.getAttribute?e.getAttribute(Tt):null;return typeof t=="string"}function ju(e){var t=e.getAttribute?e.getAttribute(Ra):null,n=e.getAttribute?e.getAttribute(La):null;return t&&n}function Du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function $u(){if(T.autoReplaceSvg===!0)return qn.replace;var e=qn[T.autoReplaceSvg];return e||qn.replace}function zu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Uu(e){return J.createElement(e)}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?zu:Uu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Is(o,{ceFn:r}))}),a}function Bu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var qn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Is(a),n)}),n.getAttribute(Tt)===null&&T.keepOriginalSource){var r=J.createComment(Bu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Da(n).indexOf(T.replacementClass))return qn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return kn(s)}).join(`
`);n.setAttribute(Tt,""),n.innerHTML=o}};function Ki(e){e()}function Ps(e,t){var n=typeof t=="function"?t:Kn;if(e.length===0)n();else{var r=Ki;T.mutateApproach===Kc&&(r=dt.requestAnimationFrame||Ki),r(function(){var a=$u(),i=Ya.begin("mutate");e.map(a),i(),n()})}}var Wa=!1;function Ts(){Wa=!0}function oa(){Wa=!1}var er=null;function qi(e){if(!!Li&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?Kn:t,r=e.nodeCallback,a=r===void 0?Kn:r,i=e.pseudoElementsCallback,o=i===void 0?Kn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;er=new Li(function(c){if(!Wa){var u=mt();Jt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Wi(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Wi(m.target)&&~Zc.indexOf(m.attributeName))if(m.attributeName==="class"&&ju(m.target)){var h=vr(Da(m.target)),y=h.prefix,S=h.iconName;m.target.setAttribute(Ra,y||u),S&&m.target.setAttribute(La,S)}else Du(m.target)&&a(m.target)})}}),tt&&er.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hu(){!er||er.disconnect()}function Yu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=vr(Da(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=_u(a.prefix,e.innerText)||Ua(a.prefix,Zr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ku(e){var t=Jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||xn()):(t["aria-hidden"]="true",t.focusable="false")),t}function qu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ku(e),s=ta("parseNodeAttributes",{},e),l=t.styleParser?Yu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Qu=Re.styles;function Ss(e){var t=T.autoReplaceSvg==="nest"?Qi(e,{styleParser:!1}):Qi(e);return~t.extra.classes.indexOf(ms)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var pt=new Set;ja.map(function(e){pt.add("fa-".concat(e))});Object.keys(gn[X]).map(pt.add.bind(pt));Object.keys(gn[ae]).map(pt.add.bind(pt));pt=wn(pt);function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ji,"-").concat(m))},a=function(m){return n.remove("".concat(ji,"-").concat(m))},i=T.autoFetchSvg?pt:ja.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Qu));i.includes("fa")||i.push("fa");var o=[".".concat(ms,":not([").concat(Tt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Tt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ya.begin("onTree"),c=s.reduce(function(u,m){try{var h=Ss(m);h&&u.push(h)}catch(y){ds||y.name==="MissingIcon"&&console.error(y)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Ps(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Vu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ss(e).then(function(n){n&&Ps([n],t)})}function Xu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:na(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:na(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,y=n.titleId,S=y===void 0?null:y,I=n.classes,U=I===void 0?[]:I,x=n.attributes,O=x===void 0?{}:x,A=n.styles,R=A===void 0?{}:A;if(!!t){var z=t.prefix,oe=t.iconName,ne=t.icon;return br(E({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?O["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(S||xn()):(O["aria-hidden"]="true",O.focusable="false")),Ha({icons:{main:ra(ne),mask:l?ra(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:oe,transform:E(E({},We),a),symbol:o,title:h,maskId:u,titleId:S,extra:{attributes:O,styles:R,classes:U}})})}},Gu={mixout:function(){return{icon:Xu(Ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Vi,n.nodeCallback=Vu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Vi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(y,S){Promise.all([aa(a,s),u.iconName?aa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var U=Ma(I,2),x=U[0],O=U[1];y([n,Ha({icons:{main:x,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=hr(s);l.length>0&&(a.style=l);var c;return $a(o)&&(c=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Zu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return br({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(wn(i)).join(" ")},children:o}]})}}}},ed={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return br({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),Mu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(wn(s))}})})}}}},td={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return br({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),Hi({content:n,transform:E(E({},We),i),title:s,extra:{attributes:m,styles:y,classes:["".concat(T.cssPrefix,"-layers-text")].concat(wn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(fs){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},nd=new RegExp('"',"ug"),Xi=[1105920,1112319];function rd(e){var t=e.replace(nd,""),n=gu(t,0),r=n>=Xi[0]&&n<=Xi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zr(a?t[0]:t),isSecondary:r||a}}function Ji(e,t){var n="".concat(Wc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Jt(e.children),o=i.filter(function(ne){return ne.getAttribute(Gr)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Xc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ae:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?vn[h][l[2].toLowerCase()]:Jc[h][c],S=rd(m),I=S.value,U=S.isSecondary,x=l[0].startsWith("FontAwesome"),O=Ua(y,I),A=O;if(x){var R=ku(I);R.iconName&&R.prefix&&(O=R.iconName,y=R.prefix)}if(O&&!U&&(!o||o.getAttribute(Ra)!==y||o.getAttribute(La)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var z=qu(),oe=z.extra;oe.attributes[Gr]=t,aa(O,y).then(function(ne){var D=Ha(E(E({},z),{},{icons:{main:ne,mask:Ba()},prefix:y,iconName:A,extra:oe,watchable:!0})),Y=J.createElement("svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=D.map(function(q){return kn(q)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ad(e){return Promise.all([Ji(e,"::before"),Ji(e,"::after")])}function id(e){return e.parentNode!==document.head&&!~qc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gi(e){if(!!tt)return new Promise(function(t,n){var r=Jt(e.querySelectorAll("*")).filter(id).map(ad),a=Ya.begin("searchPseudoElements");Ts(),Promise.all(r).then(function(){a(),oa(),t()}).catch(function(){a(),oa(),n()})})}var od={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;T.searchPseudoElements&&Gi(a)}}},Zi=!1,sd={mixout:function(){return{dom:{unwatch:function(){Ts(),Zi=!0}}}},hooks:function(){return{bootstrap:function(){qi(ta("mutationObserverCallbacks",{}))},noAuto:function(){Hu()},watch:function(n){var r=n.observeMutationsRoot;Zi?oa():qi(ta("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ld={mixout:function(){return{parse:{transform:function(n){return eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},y.outer),children:[{tag:"g",attributes:E({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),y.path)}]}]}}}},Fr={x:0,y:0,width:"100%",height:"100%"};function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fd(e){return e.tag==="g"?e.children:[e]}var cd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?vr(a.split(" ").map(function(o){return o.trim()})):Ba();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,y=lu({transform:l,containerWidth:m,iconWidth:c}),S={tag:"rect",attributes:E(E({},Fr),{},{fill:"white"})},I=u.children?{children:u.children.map(to)}:{},U={tag:"g",attributes:E({},y.inner),children:[to(E({tag:u.tag,attributes:E(E({},u.attributes),y.path)},I))]},x={tag:"g",attributes:E({},y.outer),children:[U]},O="mask-".concat(s||xn()),A="clip-".concat(s||xn()),R={tag:"mask",attributes:E(E({},Fr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,x]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:fd(h)},R]};return r.push(z,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(O,")")},Fr)}),{children:r,attributes:a}}}},ud={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},md=[uu,Gu,Zu,ed,td,od,sd,ld,cd,ud,dd];Ou(md,{mixoutsTo:Ae});Ae.noAuto;var Ns=Ae.config,pd=Ae.library;Ae.dom;var tr=Ae.parse;Ae.findIconDefinition;Ae.toHtml;var hd=Ae.icon;Ae.layer;var gd=Ae.text;Ae.counter;var vd={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},bd={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},yd={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L370.3 160z"]};function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?no(Object(n),!0).forEach(function(r){ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nr(e){return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nr(e)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wd(e,t){if(e==null)return{};var n=xd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function sa(e){return _d(e)||kd(e)||Ad(e)||Cd()}function _d(e){if(Array.isArray(e))return la(e)}function kd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ad(e,t){if(!!e){if(typeof e=="string")return la(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return la(e,t)}}function la(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ms={exports:{}};(function(e){(function(t){var n=function(x,O,A){if(!c(O)||m(O)||h(O)||y(O)||l(O))return O;var R,z=0,oe=0;if(u(O))for(R=[],oe=O.length;z<oe;z++)R.push(n(x,O[z],A));else{R={};for(var ne in O)Object.prototype.hasOwnProperty.call(O,ne)&&(R[x(ne,A)]=n(x,O[ne],A))}return R},r=function(x,O){O=O||{};var A=O.separator||"_",R=O.split||/(?=[A-Z])/;return x.split(R).join(A)},a=function(x){return S(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(O,A){return A?A.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var O=a(x);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(x,O){return r(x,O).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},u=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},y=function(x){return s.call(x)=="[object Boolean]"},S=function(x){return x=x-0,x===x},I=function(x,O){var A=O&&"process"in O?O.process:O;return typeof A!="function"?x:function(R,z){return A(R,x,z)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,O){return n(I(a,O),x)},decamelizeKeys:function(x,O){return n(I(o,O),x,O)},pascalizeKeys:function(x,O){return n(I(i,O),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Od)})(Ms);var Ed=Ms.exports,Id=["class","style"];function Pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ed.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Td(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ka(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Td(u);break;case"style":l.style=Pd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=wd(n,Id);return Sa(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var Fs=!1;try{Fs=!0}catch{}function Sd(){if(!Fs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ln(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ye({},e,t):{}}function Nd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ye(t,"fa-".concat(e.size),e.size!==null),ye(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ye(t,"fa-pull-".concat(e.pull),e.pull!==null),ye(t,"fa-swap-opacity",e.swapOpacity),ye(t,"fa-bounce",e.bounce),ye(t,"fa-shake",e.shake),ye(t,"fa-beat",e.beat),ye(t,"fa-fade",e.fade),ye(t,"fa-beat-fade",e.beatFade),ye(t,"fa-flash",e.flash),ye(t,"fa-spin-pulse",e.spinPulse),ye(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ro(e){if(e&&nr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tr.icon)return tr.icon(e);if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Md=Xt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ee(function(){return ro(t.icon)}),i=Ee(function(){return ln("classes",Nd(t))}),o=Ee(function(){return ln("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Ee(function(){return ln("mask",ro(t.mask))}),l=Ee(function(){return hd(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Hn(l,function(u){if(!u)return Sd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ee(function(){return l.value?Ka(l.value.abstract[0],{},r):null});return function(){return c.value}}});Xt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ns.familyPrefix,i=Ee(function(){return["".concat(a,"-layers")].concat(sa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Sa("div",{class:i.value},r.default?r.default():[])}}});Xt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ns.familyPrefix,i=Ee(function(){return ln("classes",[].concat(sa(t.counter?["".concat(a,"-layers-counter")]:[]),sa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ee(function(){return ln("transform",typeof t.transform=="string"?tr.transform(t.transform):t.transform)}),s=Ee(function(){var c=gd(t.value.toString(),Me(Me({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ee(function(){return Ka(s.value,{},r)});return function(){return l.value}}});pd.add(yd,vd,bd);const Fd=()=>{console.log(`Hello there! If you are here, you might be special! I appreciate your effort into opening the DevTools. But it would be nice if you check out ${Oe.github}!`)};Fd();pc(Rc).component("Icon",Md).mount("#app");
