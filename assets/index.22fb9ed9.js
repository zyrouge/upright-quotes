var Vo=Object.defineProperty;var Xo=(t,e,n)=>e in t?Vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var at=(t,e,n)=>(Xo(t,typeof e!="symbol"?e+"":e,n),n);const Qo=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Qo();function Ir(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Jo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Go=Ir(Jo);function pi(t){return!!t||t===""}function On(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=tt(r)?es(r):On(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(tt(t))return t;if(J(t))return t}}const Zo=/;(?![^(]*\))/g,ts=/:(.+)/;function es(t){const e={};return t.split(Zo).forEach(n=>{if(n){const r=n.split(ts);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pr(t){let e="";if(tt(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Pr(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Me=t=>tt(t)?t:t==null?"":F(t)||J(t)&&(t.toString===yi||!L(t.toString))?JSON.stringify(t,gi,2):String(t),gi=(t,e)=>e&&e.__v_isRef?gi(t,e.value):we(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:vi(e)?{[`Set(${e.size})`]:[...e.values()]}:J(e)&&!F(e)&&!xi(e)?String(e):e,Y={},xe=[],yt=()=>{},ns=()=>!1,rs=/^on[^a-z]/,En=t=>rs.test(t),Tr=t=>t.startsWith("onUpdate:"),ot=Object.assign,Nr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},as=Object.prototype.hasOwnProperty,U=(t,e)=>as.call(t,e),F=Array.isArray,we=t=>In(t)==="[object Map]",vi=t=>In(t)==="[object Set]",L=t=>typeof t=="function",tt=t=>typeof t=="string",Sr=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",bi=t=>J(t)&&L(t.then)&&L(t.catch),yi=Object.prototype.toString,In=t=>yi.call(t),is=t=>In(t).slice(8,-1),xi=t=>In(t)==="[object Object]",Mr=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ln=Ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},os=/-(\w)/g,Pt=Pn(t=>t.replace(os,(e,n)=>n?n.toUpperCase():"")),ss=/\B([A-Z])/g,Ce=Pn(t=>t.replace(ss,"-$1").toLowerCase()),Tn=Pn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wn=Pn(t=>t?`on${Tn(t)}`:""),We=(t,e)=>!Object.is(t,e),Kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ls=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ga;const fs=()=>ga||(ga=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let St;class cs{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&St&&(this.parent=St,this.index=(St.scopes||(St.scopes=[])).push(this)-1)}run(e){if(this.active)try{return St=this,e()}finally{St=this.parent}}on(){St=this}off(){St=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function us(t,e=St){e&&e.active&&e.effects.push(t)}const Rr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},wi=t=>(t.w&Vt)>0,_i=t=>(t.n&Vt)>0,ds=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vt},ms=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];wi(a)&&!_i(a)?a.delete(t):e[n++]=a,a.w&=~Vt,a.n&=~Vt}e.length=n}},er=new WeakMap;let Fe=0,Vt=1;const nr=30;let Ot;const ae=Symbol(""),rr=Symbol("");class Fr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,us(this,r)}run(){if(!this.active)return this.fn();let e=Ot,n=Kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ot,Ot=this,Kt=!0,Vt=1<<++Fe,Fe<=nr?ds(this):va(this),this.fn()}finally{Fe<=nr&&ms(this),Vt=1<<--Fe,Ot=this.parent,Kt=n,this.parent=void 0}}stop(){this.active&&(va(this),this.onStop&&this.onStop(),this.active=!1)}}function va(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kt=!0;const ki=[];function Oe(){ki.push(Kt),Kt=!1}function Ee(){const t=ki.pop();Kt=t===void 0?!0:t}function mt(t,e,n){if(Kt&&Ot){let r=er.get(t);r||er.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Rr()),Ai(a)}}function Ai(t,e){let n=!1;Fe<=nr?_i(t)||(t.n|=Vt,n=!wi(t)):n=!t.has(Ot),n&&(t.add(Ot),Ot.deps.push(t))}function Ft(t,e,n,r,a,i){const o=er.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&F(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),e){case"add":F(t)?Mr(n)&&s.push(o.get("length")):(s.push(o.get(ae)),we(t)&&s.push(o.get(rr)));break;case"delete":F(t)||(s.push(o.get(ae)),we(t)&&s.push(o.get(rr)));break;case"set":we(t)&&s.push(o.get(ae));break}if(s.length===1)s[0]&&ar(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);ar(Rr(l))}}function ar(t,e){for(const n of F(t)?t:[...t])(n!==Ot||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const hs=Ir("__proto__,__v_isRef,__isVue"),Ci=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Sr)),ps=Lr(),gs=Lr(!1,!0),vs=Lr(!0),ba=bs();function bs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=$(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map($)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oe();const r=$(this)[e].apply(this,n);return Ee(),r}}),t}function Lr(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(t?e?Rs:Ti:e?Pi:Ii).get(r))return r;const o=F(r);if(!t&&o&&U(ba,a))return Reflect.get(ba,a,i);const s=Reflect.get(r,a,i);return(Sr(a)?Ci.has(a):hs(a))||(t||mt(r,"get",a),e)?s:Z(s)?!o||!Mr(a)?s.value:s:J(s)?t?Ni(s):Dr(s):s}}const ys=Oi(),xs=Oi(!0);function Oi(t=!1){return function(n,r,a,i){let o=n[r];if(Ke(o)&&Z(o)&&!Z(a))return!1;if(!t&&!Ke(a)&&(Si(a)||(a=$(a),o=$(o)),!F(n)&&Z(o)&&!Z(a)))return o.value=a,!0;const s=F(n)&&Mr(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===$(i)&&(s?We(a,o)&&Ft(n,"set",r,a):Ft(n,"add",r,a)),l}}function ws(t,e){const n=U(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ft(t,"delete",e,void 0),r}function _s(t,e){const n=Reflect.has(t,e);return(!Sr(e)||!Ci.has(e))&&mt(t,"has",e),n}function ks(t){return mt(t,"iterate",F(t)?"length":ae),Reflect.ownKeys(t)}const Ei={get:ps,set:ys,deleteProperty:ws,has:_s,ownKeys:ks},As={get:vs,set(t,e){return!0},deleteProperty(t,e){return!0}},Cs=ot({},Ei,{get:gs,set:xs}),zr=t=>t,Nn=t=>Reflect.getPrototypeOf(t);function en(t,e,n=!1,r=!1){t=t.__v_raw;const a=$(t),i=$(e);e!==i&&!n&&mt(a,"get",e),!n&&mt(a,"get",i);const{has:o}=Nn(a),s=r?zr:n?$r:qe;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function nn(t,e=!1){const n=this.__v_raw,r=$(n),a=$(t);return t!==a&&!e&&mt(r,"has",t),!e&&mt(r,"has",a),t===a?n.has(t):n.has(t)||n.has(a)}function rn(t,e=!1){return t=t.__v_raw,!e&&mt($(t),"iterate",ae),Reflect.get(t,"size",t)}function ya(t){t=$(t);const e=$(this);return Nn(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function xa(t,e){e=$(e);const n=$(this),{has:r,get:a}=Nn(n);let i=r.call(n,t);i||(t=$(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?We(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function wa(t){const e=$(this),{has:n,get:r}=Nn(e);let a=n.call(e,t);a||(t=$(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ft(e,"delete",t,void 0),i}function _a(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function an(t,e){return function(r,a){const i=this,o=i.__v_raw,s=$(o),l=e?zr:t?$r:qe;return!t&&mt(s,"iterate",ae),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function on(t,e,n){return function(...r){const a=this.__v_raw,i=$(a),o=we(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=a[t](...r),d=n?zr:e?$r:qe;return!e&&mt(i,"iterate",l?rr:ae),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ht(t){return function(...e){return t==="delete"?!1:this}}function Os(){const t={get(i){return en(this,i)},get size(){return rn(this)},has:nn,add:ya,set:xa,delete:wa,clear:_a,forEach:an(!1,!1)},e={get(i){return en(this,i,!1,!0)},get size(){return rn(this)},has:nn,add:ya,set:xa,delete:wa,clear:_a,forEach:an(!1,!0)},n={get(i){return en(this,i,!0)},get size(){return rn(this,!0)},has(i){return nn.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:an(!0,!1)},r={get(i){return en(this,i,!0,!0)},get size(){return rn(this,!0)},has(i){return nn.call(this,i,!0)},add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear"),forEach:an(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=on(i,!1,!1),n[i]=on(i,!0,!1),e[i]=on(i,!1,!0),r[i]=on(i,!0,!0)}),[t,n,e,r]}const[Es,Is,Ps,Ts]=Os();function jr(t,e){const n=e?t?Ts:Ps:t?Is:Es;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ns={get:jr(!1,!1)},Ss={get:jr(!1,!0)},Ms={get:jr(!0,!1)},Ii=new WeakMap,Pi=new WeakMap,Ti=new WeakMap,Rs=new WeakMap;function Fs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ls(t){return t.__v_skip||!Object.isExtensible(t)?0:Fs(is(t))}function Dr(t){return Ke(t)?t:Ur(t,!1,Ei,Ns,Ii)}function zs(t){return Ur(t,!1,Cs,Ss,Pi)}function Ni(t){return Ur(t,!0,As,Ms,Ti)}function Ur(t,e,n,r,a){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Ls(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function _e(t){return Ke(t)?_e(t.__v_raw):!!(t&&t.__v_isReactive)}function Ke(t){return!!(t&&t.__v_isReadonly)}function Si(t){return!!(t&&t.__v_isShallow)}function Mi(t){return _e(t)||Ke(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Ri(t){return hn(t,"__v_skip",!0),t}const qe=t=>J(t)?Dr(t):t,$r=t=>J(t)?Ni(t):t;function Fi(t){Kt&&Ot&&(t=$(t),Ai(t.dep||(t.dep=Rr())))}function Li(t,e){t=$(t),t.dep&&ar(t.dep)}function Z(t){return!!(t&&t.__v_isRef===!0)}function ka(t){return js(t,!1)}function js(t,e){return Z(t)?t:new Ds(t,e)}class Ds{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:qe(e)}get value(){return Fi(this),this._value}set value(e){e=this.__v_isShallow?e:$(e),We(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qe(e),Li(this))}}function At(t){return Z(t)?t.value:t}const Us={get:(t,e,n)=>At(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return Z(a)&&!Z(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function zi(t){return _e(t)?t:new Proxy(t,Us)}class $s{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Fr(e,()=>{this._dirty||(this._dirty=!0,Li(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=$(this);return Fi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hs(t,e,n=!1){let r,a;const i=L(t);return i?(r=t,a=yt):(r=t.get,a=t.set),new $s(r,a,i||!a,n)}Promise.resolve();function qt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Sn(i,e,n)}return a}function xt(t,e,n,r){if(L(t)){const i=qt(t,e,n,r);return i&&bi(i)&&i.catch(o=>{Sn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(xt(t[i],e,n,r));return a}function Sn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qt(l,null,10,[t,o,s]);return}}Bs(t,n,a,r)}function Bs(t,e,n,r=!0){console.error(t)}let pn=!1,ir=!1;const dt=[];let Rt=0;const De=[];let Le=null,he=0;const Ue=[];let Yt=null,pe=0;const ji=Promise.resolve();let Hr=null,or=null;function Ys(t){const e=Hr||ji;return t?e.then(this?t.bind(this):t):e}function Ws(t){let e=Rt+1,n=dt.length;for(;e<n;){const r=e+n>>>1;Ve(dt[r])<t?e=r+1:n=r}return e}function Di(t){(!dt.length||!dt.includes(t,pn&&t.allowRecurse?Rt+1:Rt))&&t!==or&&(t.id==null?dt.push(t):dt.splice(Ws(t.id),0,t),Ui())}function Ui(){!pn&&!ir&&(ir=!0,Hr=ji.then(Bi))}function Ks(t){const e=dt.indexOf(t);e>Rt&&dt.splice(e,1)}function $i(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ui()}function qs(t){$i(t,Le,De,he)}function Vs(t){$i(t,Yt,Ue,pe)}function Br(t,e=null){if(De.length){for(or=e,Le=[...new Set(De)],De.length=0,he=0;he<Le.length;he++)Le[he]();Le=null,he=0,or=null,Br(t,e)}}function Hi(t){if(Ue.length){const e=[...new Set(Ue)];if(Ue.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>Ve(n)-Ve(r)),pe=0;pe<Yt.length;pe++)Yt[pe]();Yt=null,pe=0}}const Ve=t=>t.id==null?1/0:t.id;function Bi(t){ir=!1,pn=!0,Br(t),dt.sort((n,r)=>Ve(n)-Ve(r));const e=yt;try{for(Rt=0;Rt<dt.length;Rt++){const n=dt[Rt];n&&n.active!==!1&&qt(n,null,14)}}finally{Rt=0,dt.length=0,Hi(),pn=!1,Hr=null,(dt.length||De.length||Ue.length)&&Bi(t)}}function Xs(t,e,...n){const r=t.vnode.props||Y;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||Y;v?a=n.map(C=>C.trim()):m&&(a=n.map(ls))}let s,l=r[s=Wn(e)]||r[s=Wn(Pt(e))];!l&&i&&(l=r[s=Wn(Ce(e))]),l&&xt(l,t,6,a);const u=r[s+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,xt(u,t,6,a)}}function Yi(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!L(t)){const l=u=>{const d=Yi(u,e,!0);d&&(s=!0,ot(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):ot(o,i),r.set(t,o),o)}function Yr(t,e){return!t||!En(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Ce(e))||U(t,e))}let Et=null,Wi=null;function gn(t){const e=Et;return Et=t,Wi=t&&t.type.__scopeId||null,e}function Qs(t,e=Et,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Ma(-1);const i=gn(e),o=t(...a);return gn(i),r._d&&Ma(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qn(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:C,ctx:M,inheritAttrs:z}=t;let N,y;const O=gn(t);try{if(n.shapeFlag&4){const j=a||r;N=Ct(d.call(j,j,m,i,C,v,M)),y=l}else{const j=e;N=Ct(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=e.props?l:Js(l)}}catch(j){$e.length=0,Sn(j,t,1),N=nt(se)}let R=N;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:B}=R;j.length&&B&7&&(o&&j.some(Tr)&&(y=Gs(y,o)),R=Xe(R,y))}return n.dirs&&(R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),N=R,gn(O),N}const Js=t=>{let e;for(const n in t)(n==="class"||n==="style"||En(n))&&((e||(e={}))[n]=t[n]);return e},Gs=(t,e)=>{const n={};for(const r in t)(!Tr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zs(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Aa(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Yr(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Aa(r,o,u):!0:!!o;return!1}function Aa(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function tl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const el=t=>t.__isSuspense;function nl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Vs(t)}function rl(t,e){if(G){let n=G.provides;const r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[t]=e}}function Vn(t,e,n=!1){const r=G||Et;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&L(e)?e.call(r.proxy):e}}const Ca={};function fn(t,e,n){return Ki(t,e,n)}function Ki(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=G;let l,u=!1,d=!1;if(Z(t)?(l=()=>t.value,u=Si(t)):_e(t)?(l=()=>t,r=!0):F(t)?(d=!0,u=t.some(_e),l=()=>t.map(y=>{if(Z(y))return y.value;if(_e(y))return ge(y);if(L(y))return qt(y,s,2)})):L(t)?e?l=()=>qt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xt(t,s,3,[v])}:l=yt,e&&r){const y=l;l=()=>ge(y())}let m,v=y=>{m=N.onStop=()=>{qt(y,s,4)}};if(Qe)return v=yt,e?n&&xt(e,s,3,[l(),d?[]:void 0,v]):l(),yt;let C=d?[]:Ca;const M=()=>{if(!!N.active)if(e){const y=N.run();(r||u||(d?y.some((O,R)=>We(O,C[R])):We(y,C)))&&(m&&m(),xt(e,s,3,[y,C===Ca?void 0:C,v]),C=y)}else N.run()};M.allowRecurse=!!e;let z;a==="sync"?z=M:a==="post"?z=()=>ft(M,s&&s.suspense):z=()=>{!s||s.isMounted?qs(M):M()};const N=new Fr(l,z);return e?n?M():C=N.run():a==="post"?ft(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Nr(s.scope.effects,N)}}function al(t,e,n){const r=this.proxy,a=tt(t)?t.includes(".")?qi(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=G;Ae(this);const s=Ki(a,i.bind(r),n);return o?Ae(o):oe(),s}function qi(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ge(t,e){if(!J(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Z(t))ge(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)ge(t[n],e);else if(vi(t)||we(t))t.forEach(n=>{ge(n,e)});else if(xi(t))for(const n in t)ge(t[n],e);return t}function Mn(t){return L(t)?{setup:t,name:t.name}:t}const sr=t=>!!t.type.__asyncLoader,Vi=t=>t.type.__isKeepAlive;function il(t,e){Xi(t,"a",e)}function ol(t,e){Xi(t,"da",e)}function Xi(t,e,n=G){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Rn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)Vi(a.parent.vnode)&&sl(r,e,n,a),a=a.parent}}function sl(t,e,n,r){const a=Rn(e,t,r,!0);Qi(()=>{Nr(r[e],a)},n)}function Rn(t,e,n=G,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oe(),Ae(n);const s=xt(e,n,t,o);return oe(),Ee(),s});return r?a.unshift(i):a.push(i),i}}const Dt=t=>(e,n=G)=>(!Qe||t==="sp")&&Rn(t,e,n),ll=Dt("bm"),fl=Dt("m"),cl=Dt("bu"),ul=Dt("u"),dl=Dt("bum"),Qi=Dt("um"),ml=Dt("sp"),hl=Dt("rtg"),pl=Dt("rtc");function gl(t,e=G){Rn("ec",t,e)}let lr=!0;function vl(t){const e=Gi(t),n=t.proxy,r=t.ctx;lr=!1,e.beforeCreate&&Oa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:C,updated:M,activated:z,deactivated:N,beforeDestroy:y,beforeUnmount:O,destroyed:R,unmounted:j,render:B,renderTracked:rt,renderTriggered:ct,errorCaptured:wt,serverPrefetch:st,expose:Pe,inheritAttrs:ce,components:Te,directives:Ze,filters:ca}=e;if(u&&bl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const X in o){const W=o[X];L(W)&&(r[X]=W.bind(n))}if(a){const X=a.call(n,n);J(X)&&(t.data=Dr(X))}if(lr=!0,i)for(const X in i){const W=i[X],Tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):yt,Hn=!L(W)&&L(W.set)?W.set.bind(n):yt,Ne=gt({get:Tt,set:Hn});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ue=>Ne.value=ue})}if(s)for(const X in s)Ji(s[X],r,n,X);if(l){const X=L(l)?l.call(n):l;Reflect.ownKeys(X).forEach(W=>{rl(W,X[W])})}d&&Oa(d,t,"c");function lt(X,W){F(W)?W.forEach(Tt=>X(Tt.bind(n))):W&&X(W.bind(n))}if(lt(ll,m),lt(fl,v),lt(cl,C),lt(ul,M),lt(il,z),lt(ol,N),lt(gl,wt),lt(pl,rt),lt(hl,ct),lt(dl,O),lt(Qi,j),lt(ml,st),F(Pe))if(Pe.length){const X=t.exposed||(t.exposed={});Pe.forEach(W=>{Object.defineProperty(X,W,{get:()=>n[W],set:Tt=>n[W]=Tt})})}else t.exposed||(t.exposed={});B&&t.render===yt&&(t.render=B),ce!=null&&(t.inheritAttrs=ce),Te&&(t.components=Te),Ze&&(t.directives=Ze)}function bl(t,e,n=yt,r=!1){F(t)&&(t=fr(t));for(const a in t){const i=t[a];let o;J(i)?"default"in i?o=Vn(i.from||a,i.default,!0):o=Vn(i.from||a):o=Vn(i),Z(o)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[a]=o}}function Oa(t,e,n){xt(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ji(t,e,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(tt(t)){const i=e[t];L(i)&&fn(a,i)}else if(L(t))fn(a,t.bind(n));else if(J(t))if(F(t))t.forEach(i=>Ji(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&fn(a,i,t)}}function Gi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(u=>vn(l,u,o,!0)),vn(l,e,o)),i.set(e,l),l}function vn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&vn(t,i,n,!0),a&&a.forEach(o=>vn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=yl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const yl={data:Ea,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Zt,directives:Zt,watch:wl,provide:Ea,inject:xl};function Ea(t,e){return e?t?function(){return ot(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function xl(t,e){return Zt(fr(t),fr(e))}function fr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?ot(ot(Object.create(null),t),e):e}function wl(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function _l(t,e,n,r=!1){const a={},i={};hn(i,Fn,1),t.propsDefaults=Object.create(null),Zi(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:zs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function kl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=$(a),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];const C=e[v];if(l)if(U(i,v))C!==i[v]&&(i[v]=C,u=!0);else{const M=Pt(v);a[M]=cr(l,s,M,C,t,!1)}else C!==i[v]&&(i[v]=C,u=!0)}}}else{Zi(t,e,a,i)&&(u=!0);let d;for(const m in s)(!e||!U(e,m)&&((d=Ce(m))===m||!U(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=cr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!U(e,m)&&!0)&&(delete i[m],u=!0)}u&&Ft(t,"set","$attrs")}function Zi(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(ln(l))continue;const u=e[l];let d;a&&U(a,d=Pt(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Yr(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=$(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=cr(a,l,m,u[m],t,!U(u,m))}}return o}function cr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Ae(a),r=u[n]=l.call(null,e),oe())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ce(n))&&(r=!0))}return r}function to(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!L(t)){const d=m=>{l=!0;const[v,C]=to(m,e,!0);ot(o,v),C&&s.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return r.set(t,xe),xe;if(F(i))for(let d=0;d<i.length;d++){const m=Pt(i[d]);Ia(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Pt(d);if(Ia(m)){const v=i[d],C=o[m]=F(v)||L(v)?{type:v}:v;if(C){const M=Na(Boolean,C.type),z=Na(String,C.type);C[0]=M>-1,C[1]=z<0||M<z,(M>-1||U(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(t,u),u}function Ia(t){return t[0]!=="$"}function Pa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ta(t,e){return Pa(t)===Pa(e)}function Na(t,e){return F(e)?e.findIndex(n=>Ta(n,t)):L(e)&&Ta(e,t)?0:-1}const eo=t=>t[0]==="_"||t==="$stable",Wr=t=>F(t)?t.map(Ct):[Ct(t)],Al=(t,e,n)=>{const r=Qs((...a)=>Wr(e(...a)),n);return r._c=!1,r},no=(t,e,n)=>{const r=t._ctx;for(const a in t){if(eo(a))continue;const i=t[a];if(L(i))e[a]=Al(a,i,r);else if(i!=null){const o=Wr(i);e[a]=()=>o}}},ro=(t,e)=>{const n=Wr(e);t.slots.default=()=>n},Cl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),hn(e,"_",n)):no(e,t.slots={})}else t.slots={},e&&ro(t,e);hn(t.slots,Fn,1)},Ol=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=Y;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(ot(a,e),!n&&s===1&&delete a._):(i=!e.$stable,no(e,a)),o=e}else e&&(ro(t,e),o={default:1});if(i)for(const s in a)!eo(s)&&!(s in o)&&delete a[s]};function Jt(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Oe(),xt(l,n,8,[t.el,s,t,e]),Ee())}}function ao(){return{app:null,config:{isNativeTag:ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let El=0;function Il(t,e){return function(r,a=null){a!=null&&!J(a)&&(a=null);const i=ao(),o=new Set;let s=!1;const l=i.app={_uid:El++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:tf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=nt(r,a);return v.appContext=i,d&&e?e(v,u):t(v,u,m),s=!0,l._container=u,u.__vue_app__=l,Vr(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function ur(t,e,n,r,a=!1){if(F(t)){t.forEach((v,C)=>ur(v,e&&(F(e)?e[C]:e),n,r,a));return}if(sr(r)&&!a)return;const i=r.shapeFlag&4?Vr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,u=e&&e.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(tt(u)?(d[u]=null,U(m,u)&&(m[u]=null)):Z(u)&&(u.value=null)),L(l))qt(l,s,12,[o,d]);else{const v=tt(l),C=Z(l);if(v||C){const M=()=>{if(t.f){const z=v?d[l]:l.value;a?F(z)&&Nr(z,i):F(z)?z.includes(i)||z.push(i):v?d[l]=[i]:(l.value=[i],t.k&&(d[t.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):Z(l)&&(l.value=o,t.k&&(d[t.k]=o))};o?(M.id=-1,ft(M,n)):M()}}}const ft=nl;function Pl(t){return Tl(t)}function Tl(t,e){const n=fs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:C=yt,cloneNode:M,insertStaticContent:z}=t,N=(f,c,h,g=null,p=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Re(f,c)&&(g=tn(f),$t(f,p,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:E}=c;switch(b){case Kr:y(f,c,h,g);break;case se:O(f,c,h,g);break;case Xn:f==null&&R(c,h,g,k);break;case Mt:Ze(f,c,h,g,p,w,k,x,_);break;default:E&1?rt(f,c,h,g,p,w,k,x,_):E&6?ca(f,c,h,g,p,w,k,x,_):(E&64||E&128)&&b.process(f,c,h,g,p,w,k,x,_,de)}I!=null&&p&&ur(I,f&&f.ref,w,c||f,!c)},y=(f,c,h,g)=>{if(f==null)r(c.el=s(c.children),h,g);else{const p=c.el=f.el;c.children!==f.children&&u(p,c.children)}},O=(f,c,h,g)=>{f==null?r(c.el=l(c.children||""),h,g):c.el=f.el},R=(f,c,h,g)=>{[f.el,f.anchor]=z(f.children,c,h,g,f.el,f.anchor)},j=({el:f,anchor:c},h,g)=>{let p;for(;f&&f!==c;)p=v(f),r(f,h,g),f=p;r(c,h,g)},B=({el:f,anchor:c})=>{let h;for(;f&&f!==c;)h=v(f),a(f),f=h;a(c)},rt=(f,c,h,g,p,w,k,x,_)=>{k=k||c.type==="svg",f==null?ct(c,h,g,p,w,k,x,_):Pe(f,c,p,w,k,x,_)},ct=(f,c,h,g,p,w,k,x)=>{let _,b;const{type:I,props:E,shapeFlag:P,transition:S,patchFlag:D,dirs:V}=f;if(f.el&&M!==void 0&&D===-1)_=f.el=M(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),P&8?d(_,f.children):P&16&&st(f.children,_,null,g,p,w&&I!=="foreignObject",k,x),V&&Jt(f,null,g,"created"),E){for(const K in E)K!=="value"&&!ln(K)&&i(_,K,null,E[K],w,f.children,g,p,Nt);"value"in E&&i(_,"value",null,E.value),(b=E.onVnodeBeforeMount)&&kt(b,g,f)}wt(_,f,f.scopeId,k,g)}V&&Jt(f,null,g,"beforeMount");const H=(!p||p&&!p.pendingBranch)&&S&&!S.persisted;H&&S.beforeEnter(_),r(_,c,h),((b=E&&E.onVnodeMounted)||H||V)&&ft(()=>{b&&kt(b,g,f),H&&S.enter(_),V&&Jt(f,null,g,"mounted")},p)},wt=(f,c,h,g,p)=>{if(h&&C(f,h),g)for(let w=0;w<g.length;w++)C(f,g[w]);if(p){let w=p.subTree;if(c===w){const k=p.vnode;wt(f,k,k.scopeId,k.slotScopeIds,p.parent)}}},st=(f,c,h,g,p,w,k,x,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=x?Wt(f[b]):Ct(f[b]);N(null,I,c,h,g,p,w,k,x)}},Pe=(f,c,h,g,p,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=c;_|=f.patchFlag&16;const E=f.props||Y,P=c.props||Y;let S;h&&Gt(h,!1),(S=P.onVnodeBeforeUpdate)&&kt(S,h,c,f),I&&Jt(c,f,h,"beforeUpdate"),h&&Gt(h,!0);const D=p&&c.type!=="foreignObject";if(b?ce(f.dynamicChildren,b,x,h,g,D,w):k||Tt(f,c,x,null,h,g,D,w,!1),_>0){if(_&16)Te(x,c,E,P,h,g,p);else if(_&2&&E.class!==P.class&&i(x,"class",null,P.class,p),_&4&&i(x,"style",E.style,P.style,p),_&8){const V=c.dynamicProps;for(let H=0;H<V.length;H++){const K=V[H],vt=E[K],me=P[K];(me!==vt||K==="value")&&i(x,K,vt,me,p,f.children,h,g,Nt)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&b==null&&Te(x,c,E,P,h,g,p);((S=P.onVnodeUpdated)||I)&&ft(()=>{S&&kt(S,h,c,f),I&&Jt(c,f,h,"updated")},g)},ce=(f,c,h,g,p,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],I=_.el&&(_.type===Mt||!Re(_,b)||_.shapeFlag&70)?m(_.el):h;N(_,b,I,null,g,p,w,k,!0)}},Te=(f,c,h,g,p,w,k)=>{if(h!==g){for(const x in g){if(ln(x))continue;const _=g[x],b=h[x];_!==b&&x!=="value"&&i(f,x,b,_,k,c.children,p,w,Nt)}if(h!==Y)for(const x in h)!ln(x)&&!(x in g)&&i(f,x,h[x],null,k,c.children,p,w,Nt);"value"in g&&i(f,"value",h.value,g.value)}},Ze=(f,c,h,g,p,w,k,x,_)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:P,slotScopeIds:S}=c;S&&(x=x?x.concat(S):S),f==null?(r(b,h,g),r(I,h,g),st(c.children,h,I,p,w,k,x,_)):E>0&&E&64&&P&&f.dynamicChildren?(ce(f.dynamicChildren,P,h,p,w,k,x),(c.key!=null||p&&c===p.subTree)&&io(f,c,!0)):Tt(f,c,h,I,p,w,k,x,_)},ca=(f,c,h,g,p,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?p.ctx.activate(c,h,g,k,_):$n(c,h,g,p,w,k,_):lt(f,c,_)},$n=(f,c,h,g,p,w,k)=>{const x=f.component=ql(f,g,p);if(Vi(f)&&(x.ctx.renderer=de),Vl(x),x.asyncDep){if(p&&p.registerDep(x,X),!f.el){const _=x.subTree=nt(se);O(null,_,c,h)}return}X(x,f,c,h,p,w,k)},lt=(f,c,h)=>{const g=c.component=f.component;if(Zs(f,c,h))if(g.asyncDep&&!g.asyncResolved){W(g,c,h);return}else g.next=c,Ks(g.update),g.update();else c.component=f.component,c.el=f.el,g.vnode=c},X=(f,c,h,g,p,w,k)=>{const x=()=>{if(f.isMounted){let{next:I,bu:E,u:P,parent:S,vnode:D}=f,V=I,H;Gt(f,!1),I?(I.el=D.el,W(f,I,k)):I=D,E&&Kn(E),(H=I.props&&I.props.onVnodeBeforeUpdate)&&kt(H,S,I,D),Gt(f,!0);const K=qn(f),vt=f.subTree;f.subTree=K,N(vt,K,m(vt.el),tn(vt),f,p,w),I.el=K.el,V===null&&tl(f,K.el),P&&ft(P,p),(H=I.props&&I.props.onVnodeUpdated)&&ft(()=>kt(H,S,I,D),p)}else{let I;const{el:E,props:P}=c,{bm:S,m:D,parent:V}=f,H=sr(c);if(Gt(f,!1),S&&Kn(S),!H&&(I=P&&P.onVnodeBeforeMount)&&kt(I,V,c),Gt(f,!0),E&&Yn){const K=()=>{f.subTree=qn(f),Yn(E,f.subTree,f,p,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&K()):K()}else{const K=f.subTree=qn(f);N(null,K,h,g,f,p,w),c.el=K.el}if(D&&ft(D,p),!H&&(I=P&&P.onVnodeMounted)){const K=c;ft(()=>kt(I,V,K),p)}c.shapeFlag&256&&f.a&&ft(f.a,p),f.isMounted=!0,c=h=g=null}},_=f.effect=new Fr(x,()=>Di(f.update),f.scope),b=f.update=_.run.bind(_);b.id=f.uid,Gt(f,!0),b()},W=(f,c,h)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,kl(f,c.props,g,h),Ol(f,c.children,h),Oe(),Br(void 0,f.update),Ee()},Tt=(f,c,h,g,p,w,k,x,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,E=c.children,{patchFlag:P,shapeFlag:S}=c;if(P>0){if(P&128){Ne(b,E,h,g,p,w,k,x,_);return}else if(P&256){Hn(b,E,h,g,p,w,k,x,_);return}}S&8?(I&16&&Nt(b,p,w),E!==b&&d(h,E)):I&16?S&16?Ne(b,E,h,g,p,w,k,x,_):Nt(b,p,w,!0):(I&8&&d(h,""),S&16&&st(E,h,g,p,w,k,x,_))},Hn=(f,c,h,g,p,w,k,x,_)=>{f=f||xe,c=c||xe;const b=f.length,I=c.length,E=Math.min(b,I);let P;for(P=0;P<E;P++){const S=c[P]=_?Wt(c[P]):Ct(c[P]);N(f[P],S,h,null,p,w,k,x,_)}b>I?Nt(f,p,w,!0,!1,E):st(c,h,g,p,w,k,x,_,E)},Ne=(f,c,h,g,p,w,k,x,_)=>{let b=0;const I=c.length;let E=f.length-1,P=I-1;for(;b<=E&&b<=P;){const S=f[b],D=c[b]=_?Wt(c[b]):Ct(c[b]);if(Re(S,D))N(S,D,h,null,p,w,k,x,_);else break;b++}for(;b<=E&&b<=P;){const S=f[E],D=c[P]=_?Wt(c[P]):Ct(c[P]);if(Re(S,D))N(S,D,h,null,p,w,k,x,_);else break;E--,P--}if(b>E){if(b<=P){const S=P+1,D=S<I?c[S].el:g;for(;b<=P;)N(null,c[b]=_?Wt(c[b]):Ct(c[b]),h,D,p,w,k,x,_),b++}}else if(b>P)for(;b<=E;)$t(f[b],p,w,!0),b++;else{const S=b,D=b,V=new Map;for(b=D;b<=P;b++){const ut=c[b]=_?Wt(c[b]):Ct(c[b]);ut.key!=null&&V.set(ut.key,b)}let H,K=0;const vt=P-D+1;let me=!1,ma=0;const Se=new Array(vt);for(b=0;b<vt;b++)Se[b]=0;for(b=S;b<=E;b++){const ut=f[b];if(K>=vt){$t(ut,p,w,!0);continue}let _t;if(ut.key!=null)_t=V.get(ut.key);else for(H=D;H<=P;H++)if(Se[H-D]===0&&Re(ut,c[H])){_t=H;break}_t===void 0?$t(ut,p,w,!0):(Se[_t-D]=b+1,_t>=ma?ma=_t:me=!0,N(ut,c[_t],h,null,p,w,k,x,_),K++)}const ha=me?Nl(Se):xe;for(H=ha.length-1,b=vt-1;b>=0;b--){const ut=D+b,_t=c[ut],pa=ut+1<I?c[ut+1].el:g;Se[b]===0?N(null,_t,h,pa,p,w,k,x,_):me&&(H<0||b!==ha[H]?ue(_t,h,pa,2):H--)}}},ue=(f,c,h,g,p=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:b}=f;if(b&6){ue(f.component.subTree,c,h,g);return}if(b&128){f.suspense.move(c,h,g);return}if(b&64){k.move(f,c,h,de);return}if(k===Mt){r(w,c,h);for(let E=0;E<_.length;E++)ue(_[E],c,h,g);r(f.anchor,c,h);return}if(k===Xn){j(f,c,h);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,c,h),ft(()=>x.enter(w),p);else{const{leave:E,delayLeave:P,afterLeave:S}=x,D=()=>r(w,c,h),V=()=>{E(w,()=>{D(),S&&S()})};P?P(w,D,V):V()}else r(w,c,h)},$t=(f,c,h,g=!1,p=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:E,dirs:P}=f;if(x!=null&&ur(x,null,h,f,!0),I&256){c.ctx.deactivate(f);return}const S=I&1&&P,D=!sr(f);let V;if(D&&(V=k&&k.onVnodeBeforeUnmount)&&kt(V,c,f),I&6)qo(f.component,h,g);else{if(I&128){f.suspense.unmount(h,g);return}S&&Jt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,h,p,de,g):b&&(w!==Mt||E>0&&E&64)?Nt(b,c,h,!1,!0):(w===Mt&&E&384||!p&&I&16)&&Nt(_,c,h),g&&ua(f)}(D&&(V=k&&k.onVnodeUnmounted)||S)&&ft(()=>{V&&kt(V,c,f),S&&Jt(f,null,c,"unmounted")},h)},ua=f=>{const{type:c,el:h,anchor:g,transition:p}=f;if(c===Mt){Ko(h,g);return}if(c===Xn){B(f);return}const w=()=>{a(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(f.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:x}=p,_=()=>k(h,w);x?x(f.el,w,_):_()}else w()},Ko=(f,c)=>{let h;for(;f!==c;)h=v(f),a(f),f=h;a(c)},qo=(f,c,h)=>{const{bum:g,scope:p,update:w,subTree:k,um:x}=f;g&&Kn(g),p.stop(),w&&(w.active=!1,$t(k,f,c,h)),x&&ft(x,c),ft(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Nt=(f,c,h,g=!1,p=!1,w=0)=>{for(let k=w;k<f.length;k++)$t(f[k],c,h,g,p)},tn=f=>f.shapeFlag&6?tn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),da=(f,c,h)=>{f==null?c._vnode&&$t(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,h),Hi(),c._vnode=f},de={p:N,um:$t,m:ue,r:ua,mt:$n,mc:st,pc:Tt,pbc:ce,n:tn,o:t};let Bn,Yn;return e&&([Bn,Yn]=e(de)),{render:da,hydrate:Bn,createApp:Il(da,Bn)}}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function io(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Wt(a[i]),s.el=o.el),n||io(o,s))}}function Nl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(a=n[n.length-1],t[a]<u){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<u?i=s+1:o=s;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Sl=t=>t.__isTeleport,oo="components";function Ml(t,e){return Fl(oo,t,!0,e)||t}const Rl=Symbol();function Fl(t,e,n=!0,r=!1){const a=Et||G;if(a){const i=a.type;if(t===oo){const s=Gl(i);if(s&&(s===e||s===Pt(e)||s===Tn(Pt(e))))return i}const o=Sa(a[t]||i[t],e)||Sa(a.appContext[t],e);return!o&&r?i:o}}function Sa(t,e){return t&&(t[e]||t[Pt(e)]||t[Tn(Pt(e))])}const Mt=Symbol(void 0),Kr=Symbol(void 0),se=Symbol(void 0),Xn=Symbol(void 0),$e=[];let ie=null;function so(t=!1){$e.push(ie=t?null:[])}function Ll(){$e.pop(),ie=$e[$e.length-1]||null}let bn=1;function Ma(t){bn+=t}function lo(t){return t.dynamicChildren=bn>0?ie||xe:null,Ll(),bn>0&&ie&&ie.push(t),t}function zl(t,e,n,r,a,i){return lo(et(t,e,n,r,a,i,!0))}function jl(t,e,n,r,a){return lo(nt(t,e,n,r,a,!0))}function dr(t){return t?t.__v_isVNode===!0:!1}function Re(t,e){return t.type===e.type&&t.key===e.key}const Fn="__vInternal",fo=({key:t})=>t!=null?t:null,cn=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||Z(t)||L(t)?{i:Et,r:t,k:e,f:!!n}:t:null;function et(t,e=null,n=null,r=0,a=null,i=t===Mt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fo(e),ref:e&&cn(e),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(qr(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),bn>0&&!o&&ie&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ie.push(l),l}const nt=Dl;function Dl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===Rl)&&(t=se),dr(t)){const s=Xe(t,e,!0);return n&&qr(s,n),s}if(Zl(t)&&(t=t.__vccOpts),e){e=Ul(e);let{class:s,style:l}=e;s&&!tt(s)&&(e.class=Pr(s)),J(l)&&(Mi(l)&&!F(l)&&(l=ot({},l)),e.style=On(l))}const o=tt(t)?1:el(t)?128:Sl(t)?64:J(t)?4:L(t)?2:0;return et(t,e,n,r,a,o,i,!0)}function Ul(t){return t?Mi(t)||Fn in t?ot({},t):t:null}function Xe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Bl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&fo(s),ref:e&&e.ref?n&&a?F(a)?a.concat(cn(e)):[a,cn(e)]:cn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xe(t.ssContent),ssFallback:t.ssFallback&&Xe(t.ssFallback),el:t.el,anchor:t.anchor}}function $l(t=" ",e=0){return nt(Kr,null,t,e)}function Hl(t="",e=!1){return e?(so(),jl(se,null,t)):nt(se,null,t)}function Ct(t){return t==null||typeof t=="boolean"?nt(se):F(t)?nt(Mt,null,t.slice()):typeof t=="object"?Wt(t):nt(Kr,null,String(t))}function Wt(t){return t.el===null||t.memo?t:Xe(t)}function qr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),qr(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Fn in e)?e._ctx=Et:a===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[$l(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Pr([e.class,r.class]));else if(a==="style")e.style=On([e.style,r.style]);else if(En(a)){const i=e[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function kt(t,e,n,r=null){xt(t,e,7,[n,r])}const mr=t=>t?co(t)?Vr(t)||t.proxy:mr(t.parent):null,yn=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mr(t.parent),$root:t=>mr(t.root),$emit:t=>t.emit,$options:t=>Gi(t),$forceUpdate:t=>()=>Di(t.update),$nextTick:t=>Ys.bind(t.proxy),$watch:t=>al.bind(t)}),Yl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let u;if(e[0]!=="$"){const C=o[e];if(C!==void 0)switch(C){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Y&&U(r,e))return o[e]=1,r[e];if(a!==Y&&U(a,e))return o[e]=2,a[e];if((u=t.propsOptions[0])&&U(u,e))return o[e]=3,i[e];if(n!==Y&&U(n,e))return o[e]=4,n[e];lr&&(o[e]=0)}}const d=yn[e];let m,v;if(d)return e==="$attrs"&&mt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==Y&&U(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,U(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return a!==Y&&U(a,e)?(a[e]=n,!0):r!==Y&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==Y&&U(t,o)||e!==Y&&U(e,o)||(s=i[0])&&U(s,o)||U(r,o)||U(yn,o)||U(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Wl=ao();let Kl=0;function ql(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Wl,i={uid:Kl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new cs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:to(r,a),emitsOptions:Yi(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xs.bind(null,i),t.ce&&t.ce(i),i}let G=null;const Ae=t=>{G=t,t.scope.on()},oe=()=>{G&&G.scope.off(),G=null};function co(t){return t.vnode.shapeFlag&4}let Qe=!1;function Vl(t,e=!1){Qe=e;const{props:n,children:r}=t.vnode,a=co(t);_l(t,n,a,e),Cl(t,r);const i=a?Xl(t,e):void 0;return Qe=!1,i}function Xl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ri(new Proxy(t.ctx,Yl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?Jl(t):null;Ae(t),Oe();const i=qt(r,t,0,[t.props,a]);if(Ee(),oe(),bi(i)){if(i.then(oe,oe),e)return i.then(o=>{Ra(t,o,e)}).catch(o=>{Sn(o,t,0)});t.asyncDep=i}else Ra(t,i,e)}else uo(t,e)}function Ra(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=zi(e)),uo(t,n)}let Fa;function uo(t,e,n){const r=t.type;if(!t.render){if(!e&&Fa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ot(ot({isCustomElement:i,delimiters:s},o),l);r.render=Fa(a,u)}}t.render=r.render||yt}Ae(t),Oe(),vl(t),Ee(),oe()}function Ql(t){return new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}})}function Jl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(t))},slots:t.slots,emit:t.emit,expose:e}}function Vr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zi(Ri(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yn)return yn[n](t)}}))}function Gl(t){return L(t)&&t.displayName||t.name}function Zl(t){return L(t)&&"__vccOpts"in t}const gt=(t,e)=>Hs(t,e,Qe);function mo(t,e,n){const r=arguments.length;return r===2?J(e)&&!F(e)?dr(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dr(n)&&(n=[n]),nt(t,e,n))}const tf="3.2.31",ef="http://www.w3.org/2000/svg",te=typeof document!="undefined"?document:null,La=te&&te.createElement("template"),nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?te.createElementNS(ef,t):te.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>te.createTextNode(t),createComment:t=>te.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>te.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${t}</svg>`:t;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function af(t,e,n){const r=t.style,a=tt(n);if(n&&!a){for(const i in n)hr(r,i,n[i]);if(e&&!tt(e))for(const i in e)n[i]==null&&hr(r,i,"")}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const za=/\s*!important$/;function hr(t,e,n){if(F(n))n.forEach(r=>hr(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=of(t,e);za.test(n)?t.setProperty(Ce(r),n.replace(za,""),"important"):t[r]=n}}const ja=["Webkit","Moz","ms"],Qn={};function of(t,e){const n=Qn[e];if(n)return n;let r=Pt(e);if(r!=="filter"&&r in t)return Qn[e]=r;r=Tn(r);for(let a=0;a<ja.length;a++){const i=ja[a]+r;if(i in t)return Qn[e]=i}return e}const Da="http://www.w3.org/1999/xlink";function sf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Da,e.slice(6,e.length)):t.setAttributeNS(Da,e,n);else{const i=Go(e);n==null||i&&!pi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function lf(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const s=n==null?"":n;(t.value!==s||t.tagName==="OPTION")&&(t.value=s),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const s=typeof t[e];if(s==="boolean"){t[e]=pi(n);return}else if(n==null&&s==="string"){t[e]="",t.removeAttribute(e);return}else if(s==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let xn=Date.now,ho=!1;if(typeof window!="undefined"){xn()>document.createEvent("Event").timeStamp&&(xn=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ho=!!(t&&Number(t[1])<=53)}let pr=0;const ff=Promise.resolve(),cf=()=>{pr=0},uf=()=>pr||(ff.then(cf),pr=xn());function df(t,e,n,r){t.addEventListener(e,n,r)}function mf(t,e,n,r){t.removeEventListener(e,n,r)}function hf(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=pf(e);if(r){const u=i[e]=gf(r,a);df(t,s,u,l)}else o&&(mf(t,s,o,l),i[e]=void 0)}}const Ua=/(?:Once|Passive|Capture)$/;function pf(t){let e;if(Ua.test(t)){e={};let n;for(;n=t.match(Ua);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ce(t.slice(2)),e]}function gf(t,e){const n=r=>{const a=r.timeStamp||xn();(ho||a>=n.attached-1)&&xt(vf(r,n.value),e,5,[r])};return n.value=t,n.attached=uf(),n}function vf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const $a=/^on[a-z]/,bf=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?rf(t,r,a):e==="style"?af(t,n,r):En(e)?Tr(e)||hf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yf(t,e,r,a))?lf(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sf(t,e,r,a))};function yf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&$a.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$a.test(e)&&tt(n)?!1:e in t}const xf=ot({patchProp:bf},nf);let Ha;function wf(){return Ha||(Ha=Pl(xf))}const _f=(...t)=>{const e=wf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=kf(r);if(!a)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function kf(t){return tt(t)?document.querySelector(t):t}const ye=class{};let pt=ye;at(pt,"_ghUsername","zyrouge"),at(pt,"_ghRepo","upright-quotes"),at(pt,"_ghDistBranch","gh-pages"),at(pt,"github",`https://github.com/${ye._ghUsername}/${ye._ghRepo}`),at(pt,"apiDocs",`https://github.com/${ye._ghUsername}/${ye._ghRepo}/wiki/API-Documentation`);var hi;const ee=class{static async getMeta(){return await(await fetch(ee.getMetaJsonURL())).json()}static async getQuoteJson(e){return await(await fetch(ee.getQuoteJsonURL(e))).json()}static getMetaJsonURL(){return`${ee.url}/meta.json`}static getQuoteJsonURL(e){return`${ee.url}/quotes/${e}.json`}static getQuoteImageURL(e){return`${ee.url}/quotes/${e}.png`}};let ne=ee;at(ne,"url",(hi={BASE_URL:"/upright-quotes/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_URL)!=null?hi:`https://cdn.jsdelivr.net/gh/${pt._ghUsername}/${pt._ghRepo}@${pt._ghDistBranch}/api`);class Q{}at(Q,"UprightQuotes","UprightQuotes"),at(Q,"MetadataWasNotFetched","Metadata was not fetched"),at(Q,"GitHub","GitHub"),at(Q,"API","API"),at(Q,"RefreshQuote","Refresh Quote"),at(Q,"ViewAsJSON","View as JSON"),at(Q,"DownloadAsImage","Download as Image"),at(Q,"QParamsIndex","index");class Xr{static random(e=1,n=-1){const r=Math.floor(Math.random()*e);return r===n?Xr.random(e,n):r}}const Af={id:"header",class:"u-flex-center !justify-around"},Cf=["title"],Of={class:"u-flex-center gap-6"},Ef=["href"],If=["href"],Pf={id:"content-container",class:"u-flex-center"},Tf={id:"content"},Nf={class:"text-4xl md:text-6xl font-bold"},Sf={class:"mt-4 text-lg"},Mf={class:"u-flex-center !justify-start gap-5 mt-4 text-xl"},Rf=["title"],Ff=["href","title"],Lf=["href","title"],zf=Mn({setup(t){var o;const e=ka(null),n=async()=>{e.value=await ne.getMeta()};let r=parseInt((o=new URL(location.href).searchParams.get(Q.QParamsIndex))!=null?o:"");const a=ka(null),i=async()=>{var m,v;if(!e.value)throw new Error(Q.MetadataWasNotFetched);const s=typeof r=="number"&&!isNaN(r)?r:Xr.random(e.value.size,(v=(m=a.value)==null?void 0:m.index)!=null?v:-1),l=await ne.getQuoteJson(s),u=ne.getQuoteJsonURL(s),d=ne.getQuoteImageURL(s);a.value={index:s,quote:l,json:u,image:d},history.replaceState(void 0,"",`?${Q.QParamsIndex}=${s}`),r=null};return(async()=>(await n(),await i()))(),(s,l)=>{const u=Ml("Icon");return a.value?(so(),zl("div",{key:0,class:"px-10",style:On({color:a.value.quote.color.contrast,backgroundColor:a.value.quote.color.primary})},[et("div",Af,[et("p",{class:"font-bold",title:At(Q).RefreshQuote},[et("button",{class:"u-link",onClick:i},Me(At(Q).UprightQuotes),1)],8,Cf),et("div",Of,[et("a",{class:"u-link",href:At(pt).github,target:"_blank"},Me(At(Q).GitHub),9,Ef),et("a",{class:"u-link",href:At(pt).apiDocs,target:"_blank"},Me(At(Q).API),9,If)])]),et("div",Pf,[et("div",Tf,[et("p",Nf,Me(a.value.quote.quote),1),et("p",Sf,"~ "+Me(a.value.quote.author),1),et("div",Mf,[et("button",{class:"u-link",onClick:i,title:At(Q).RefreshQuote},[nt(u,{icon:"arrow-rotate-right"})],8,Rf),et("a",{class:"u-link",href:a.value.json,title:At(Q).ViewAsJSON,target:"_blank"},[nt(u,{icon:"code"})],8,Ff),et("a",{class:"u-link",href:a.value.image,title:At(Q).DownloadAsImage,target:"_blank"},[nt(u,{icon:"image"})],8,Lf)])])])],4)):Hl("",!0)}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ba(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ba(Object(n),!0).forEach(function(r){Uf(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wn(t){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wn(t)}function jf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ya(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Df(t,e,n){return e&&Ya(t.prototype,e),n&&Ya(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Uf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qr(t,e){return Hf(t)||Yf(t,e)||po(t,e)||Kf()}function Ln(t){return $f(t)||Bf(t)||po(t)||Wf()}function $f(t){if(Array.isArray(t))return gr(t)}function Hf(t){if(Array.isArray(t))return t}function Bf(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yf(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function po(t,e){if(!!t){if(typeof t=="string")return gr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(t,e)}}function gr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Wf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wa=function(){},Jr={},go={},vo=null,bo={mark:Wa,measure:Wa};try{typeof window!="undefined"&&(Jr=window),typeof document!="undefined"&&(go=document),typeof MutationObserver!="undefined"&&(vo=MutationObserver),typeof performance!="undefined"&&(bo=performance)}catch{}var qf=Jr.navigator||{},Ka=qf.userAgent,qa=Ka===void 0?"":Ka,Xt=Jr,q=go,Va=vo,sn=bo;Xt.document;var Ut=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",yo=~qa.indexOf("MSIE")||~qa.indexOf("Trident/"),Lt="___FONT_AWESOME___",vr=16,xo="fa",wo="svg-inline--fa",le="data-fa-i2svg",br="data-fa-pseudo-element",Vf="data-fa-pseudo-element-pending",Gr="data-prefix",Zr="data-icon",Xa="fontawesome-i2svg",Xf="async",Qf=["HTML","HEAD","STYLE","SCRIPT"],_o=function(){try{return!0}catch{return!1}}(),ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},_n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ko={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Jf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Gf=/fa[srltdbk\-\ ]/,Ao="fa-layers-text",Zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,tc={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Co=[1,2,3,4,5,6,7,8,9,10],ec=Co.concat([11,12,13,14,15,16,17,18,19,20]),nc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rc=[].concat(Ln(Object.keys(_n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(Co.map(function(t){return"".concat(t,"x")})).concat(ec.map(function(t){return"w-".concat(t)})),Oo=Xt.FontAwesomeConfig||{};function ac(t){var e=q.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ic(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(q&&typeof q.querySelector=="function"){var oc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];oc.forEach(function(t){var e=Qr(t,2),n=e[0],r=e[1],a=ic(ac(n));a!=null&&(Oo[r]=a)})}var sc={familyPrefix:xo,styleDefault:"solid",replacementClass:wo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},He=A(A({},sc),Oo);He.autoReplaceSvg||(He.observeMutations=!1);var T={};Object.keys(He).forEach(function(t){Object.defineProperty(T,t,{enumerable:!0,set:function(n){He[t]=n,un.forEach(function(r){return r(T)})},get:function(){return He[t]}})});Xt.FontAwesomeConfig=T;var un=[];function lc(t){return un.push(t),function(){un.splice(un.indexOf(t),1)}}var Bt=vr,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fc(t){if(!(!t||!Ut)){var e=q.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(e,r),t}}var cc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Je(){for(var t=12,e="";t-- >0;)e+=cc[Math.random()*62|0];return e}function Ie(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ea(t){return t.classList?Ie(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Eo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Eo(t[n]),'" ')},"").trim()}function zn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function na(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function dc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function mc(t){var e=t.transform,n=t.width,r=n===void 0?vr:n,a=t.height,i=a===void 0?vr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&yo?l+="translate(".concat(e.x/Bt-r/2,"em, ").concat(e.y/Bt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Bt,"em), calc(-50% + ").concat(e.y/Bt,"em)) "):l+="translate(".concat(e.x/Bt,"em, ").concat(e.y/Bt,"em) "),l+="scale(".concat(e.size/Bt*(e.flipX?-1:1),", ").concat(e.size/Bt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
    transition-delay: 0s;
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
}`;function Io(){var t=xo,e=wo,n=T.familyPrefix,r=T.replacementClass,a=hc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Qa=!1;function Jn(){T.autoAddCss&&!Qa&&(fc(Io()),Qa=!0)}var pc={mixout:function(){return{dom:{css:Io,insertCss:Jn}}},hooks:function(){return{beforeDOMElementCreation:function(){Jn()},beforeI2svg:function(){Jn()}}}},zt=Xt||{};zt[Lt]||(zt[Lt]={});zt[Lt].styles||(zt[Lt].styles={});zt[Lt].hooks||(zt[Lt].hooks={});zt[Lt].shims||(zt[Lt].shims=[]);var bt=zt[Lt],Po=[],gc=function t(){q.removeEventListener("DOMContentLoaded",t),kn=1,Po.map(function(e){return e()})},kn=!1;Ut&&(kn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),kn||q.addEventListener("DOMContentLoaded",gc));function vc(t){!Ut||(kn?setTimeout(t,0):Po.push(t))}function Ge(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Eo(t):"<".concat(e," ").concat(uc(r),">").concat(i.map(Ge).join(""),"</").concat(e,">")}function Ja(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},Gn=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?bc(n,a):n,l,u,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,e[u],u,e);return d};function yc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function yr(t){var e=yc(t);return e.length===1?e[0].toString(16):null}function xc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ga(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function xr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ga(e);typeof bt.hooks.addPack=="function"&&!a?bt.hooks.addPack(t,Ga(e)):bt.styles[t]=A(A({},bt.styles[t]||{}),i),t==="fas"&&xr("fa",e)}var Be=bt.styles,wc=bt.shims,_c=Object.values(ko),ra=null,To={},No={},So={},Mo={},Ro={},kc=Object.keys(ta);function Ac(t){return~rc.indexOf(t)}function Cc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Ac(a)?a:null}var Fo=function(){var e=function(i){return Gn(Be,function(o,s,l){return o[l]=Gn(s,i,{}),o},{})};To=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),No=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ro=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Be||T.autoFetchSvg,r=Gn(wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});So=r.names,Mo=r.unicodes,ra=jn(T.styleDefault)};lc(function(t){ra=jn(t.styleDefault)});Fo();function aa(t,e){return(To[t]||{})[e]}function Oc(t,e){return(No[t]||{})[e]}function ve(t,e){return(Ro[t]||{})[e]}function Lo(t){return So[t]||{prefix:null,iconName:null}}function Ec(t){var e=Mo[t],n=aa("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return ra}var ia=function(){return{prefix:null,iconName:null,rest:[]}};function jn(t){var e=ta[t],n=_n[t]||_n[e],r=t in bt.styles?t:null;return n||r||null}function Dn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=t.reduce(function(o,s){var l=Cc(T.familyPrefix,s);if(Be[s]?(s=_c.includes(s)?Jf[s]:s,a=s,o.prefix=s):kc.indexOf(s)>-1?(a=s,o.prefix=jn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Lo(o.iconName):{},d=ve(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Be.far&&Be.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ia());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Qt()||"fas"),i}var Ic=function(){function t(){jf(this,t),this.definitions={}}return Df(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),xr(s,o[s]);var l=ko[s];l&&xr(l,o[s]),Fo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),t}(),Za=[],be={},ke={},Pc=Object.keys(ke);function Tc(t,e){var n=e.mixoutsTo;return Za=t,be={},Object.keys(ke).forEach(function(r){Pc.indexOf(r)===-1&&delete ke[r]}),Za.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){be[o]||(be[o]=[]),be[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function wr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=be[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function fe(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=be[t]||[];a.forEach(function(i){i.apply(null,n)})}function jt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ke[t]?ke[t].apply(null,e):void 0}function _r(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(!!e)return e=ve(n,e)||e,Ja(zo.definitions,n,e)||Ja(bt.styles,n,e)}var zo=new Ic,Nc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,fe("noAuto")},Sc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ut?(fe("beforeI2svg",e),jt("pseudoElements2svg",e),jt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,vc(function(){Rc({autoReplaceSvgRoot:n}),fe("watch",e)})}},Mc={icon:function(e){if(e===null)return null;if(wn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ve(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=jn(e[0]);return{prefix:r,iconName:ve(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(T.familyPrefix,"-"))>-1||e.match(Gf))){var a=Dn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qt(),iconName:ve(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Qt();return{prefix:i,iconName:ve(i,e)||e}}}},ht={noAuto:Nc,config:T,dom:Sc,parse:Mc,library:zo,findIconDefinition:_r,toHtml:Ge},Rc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(bt.styles).length>0||T.autoFetchSvg)&&Ut&&T.autoReplaceSvg&&ht.dom.i2svg({node:r})};function Un(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ge(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ut){var r=q.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fc(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(na(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=zn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Lc(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function oa(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,d=t.titleId,m=t.extra,v=t.watchable,C=v===void 0?!1:v,M=r.found?r:n,z=M.width,N=M.height,y=a==="fak",O=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(st){return m.classes.indexOf(st)===-1}).filter(function(st){return st!==""||!!st}).concat(m.classes).join(" "),R={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(N)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/N*16*.0625,"em")}:{};C&&(R.attributes[le]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||Je())},children:[l]}),delete R.attributes.title);var B=A(A({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),rt=r.found&&n.found?jt("generateAbstractMask",B)||{children:[],attributes:{}}:jt("generateAbstractIcon",B)||{children:[],attributes:{}},ct=rt.children,wt=rt.attributes;return B.children=ct,B.attributes=wt,s?Lc(B):Fc(B)}function ti(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[le]="");var d=A({},o.styles);na(a)&&(d.transform=mc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=zn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function zc(t){var e=t.content,n=t.title,r=t.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=zn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=bt.styles;function kr(t){var e=t[0],n=t[1],r=t.slice(4),a=Qr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var jc={found:!1,width:512,height:512};function Dc(t,e){!_o&&!T.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ar(t,e){var n=e;return e==="fa"&&T.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(jt("missingIconAbstract"),n==="fa"){var i=Lo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Zn[e]&&Zn[e][t]){var o=Zn[e][t];return r(kr(o))}Dc(t,e),r(A(A({},jc),{},{icon:T.showMissingIcons&&t?jt("missingIconAbstract")||{}:{}}))})}var ei=function(){},Cr=T.measurePerformance&&sn&&sn.mark&&sn.measure?sn:{mark:ei,measure:ei},ze='FA "6.1.1"',Uc=function(e){return Cr.mark("".concat(ze," ").concat(e," begins")),function(){return jo(e)}},jo=function(e){Cr.mark("".concat(ze," ").concat(e," ends")),Cr.measure("".concat(ze," ").concat(e),"".concat(ze," ").concat(e," begins"),"".concat(ze," ").concat(e," ends"))},sa={begin:Uc,end:jo},dn=function(){};function ni(t){var e=t.getAttribute?t.getAttribute(le):null;return typeof e=="string"}function $c(t){var e=t.getAttribute?t.getAttribute(Gr):null,n=t.getAttribute?t.getAttribute(Zr):null;return e&&n}function Hc(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(T.replacementClass)}function Bc(){if(T.autoReplaceSvg===!0)return mn.replace;var t=mn[T.autoReplaceSvg];return t||mn.replace}function Yc(t){return q.createElementNS("http://www.w3.org/2000/svg",t)}function Wc(t){return q.createElement(t)}function Do(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Yc:Wc:n;if(typeof t=="string")return q.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Do(o,{ceFn:r}))}),a}function Kc(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var mn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Do(a),n)}),n.getAttribute(le)===null&&T.keepOriginalSource){var r=q.createComment(Kc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ea(n).indexOf(T.replacementClass))return mn.replace(e);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ge(s)}).join(`
`);n.setAttribute(le,""),n.innerHTML=o}};function ri(t){t()}function Uo(t,e){var n=typeof e=="function"?e:dn;if(t.length===0)n();else{var r=ri;T.mutateApproach===Xf&&(r=Xt.requestAnimationFrame||ri),r(function(){var a=Bc(),i=sa.begin("mutate");t.map(a),i(),n()})}}var la=!1;function $o(){la=!0}function Or(){la=!1}var An=null;function ai(t){if(!!Va&&!!T.observeMutations){var e=t.treeCallback,n=e===void 0?dn:e,r=t.nodeCallback,a=r===void 0?dn:r,i=t.pseudoElementsCallback,o=i===void 0?dn:i,s=t.observeMutationsRoot,l=s===void 0?q:s;An=new Va(function(u){if(!la){var d=Qt();Ie(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ni(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ni(m.target)&&~nc.indexOf(m.attributeName))if(m.attributeName==="class"&&$c(m.target)){var v=Dn(ea(m.target)),C=v.prefix,M=v.iconName;m.target.setAttribute(Gr,C||d),M&&m.target.setAttribute(Zr,M)}else Hc(m.target)&&a(m.target)})}}),Ut&&An.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qc(){!An||An.disconnect()}function Vc(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Xc(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Dn(ea(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Oc(a.prefix,t.innerText)||aa(a.prefix,yr(t.innerText))),a}function Qc(t){var e=Ie(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return T.autoA11y&&(n?e["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Je()):(e["aria-hidden"]="true",e.focusable="false")),e}function Jc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xc(t),r=n.iconName,a=n.prefix,i=n.rest,o=Qc(t),s=wr("parseNodeAttributes",{},t),l=e.styleParser?Vc(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Gc=bt.styles;function Ho(t){var e=T.autoReplaceSvg==="nest"?ii(t,{styleParser:!1}):ii(t);return~e.extra.classes.indexOf(Ao)?jt("generateLayersText",t,e):jt("generateSvgReplacementMutation",t,e)}function oi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ut)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(Xa,"-").concat(m))},a=function(m){return n.remove("".concat(Xa,"-").concat(m))},i=T.autoFetchSvg?Object.keys(ta):Object.keys(Gc),o=[".".concat(Ao,":not([").concat(le,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=sa.begin("onTree"),u=s.reduce(function(d,m){try{var v=Ho(m);v&&d.push(v)}catch(C){_o||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Uo(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),m(v)})})}function Zc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ho(t).then(function(n){n&&Uo([n],e)})}function tu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:_r(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_r(a||{})),t(r,A(A({},n),{},{mask:a}))}}var eu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?It:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,C=n.titleId,M=C===void 0?null:C,z=n.classes,N=z===void 0?[]:z,y=n.attributes,O=y===void 0?{}:y,R=n.styles,j=R===void 0?{}:R;if(!!e){var B=e.prefix,rt=e.iconName,ct=e.icon;return Un(A({type:"icon"},e),function(){return fe("beforeDOMElementCreation",{iconDefinition:e,params:n}),T.autoA11y&&(v?O["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(M||Je()):(O["aria-hidden"]="true",O.focusable="false")),oa({icons:{main:kr(ct),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:rt,transform:A(A({},It),a),symbol:o,title:v,maskId:d,titleId:M,extra:{attributes:O,styles:j,classes:N}})})}},nu={mixout:function(){return{icon:tu(eu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=oi,n.nodeCallback=Zc,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return oi(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(C,M){Promise.all([Ar(a,s),d.iconName?Ar(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var N=Qr(z,2),y=N[0],O=N[1];C([n,oa({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=zn(s);l.length>0&&(a.style=l);var u;return na(o)&&(u=jt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},ru={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Un({type:"layer"},function(){fe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Ln(i)).join(" ")},children:o}]})}}}},au={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Un({type:"counter",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),zc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Ln(s))}})})}}}},iu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?It:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,C=v===void 0?{}:v;return Un({type:"text",content:n},function(){return fe("beforeDOMElementCreation",{content:n,params:r}),ti({content:n,transform:A(A({},It),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Ln(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(yo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ti({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ou=new RegExp('"',"ug"),si=[1105920,1112319];function su(t){var e=t.replace(ou,""),n=xc(e,0),r=n>=si[0]&&n<=si[1],a=e.length===2?e[0]===e[1]:!1;return{value:yr(a?e[0]:e),isSecondary:r||a}}function li(t,e){var n="".concat(Vf).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ie(t.children),o=i.filter(function(rt){return rt.getAttribute(br)===e})[0],s=Xt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Zf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[l[2].toLowerCase()]:tc[u],C=su(m),M=C.value,z=C.isSecondary,N=l[0].startsWith("FontAwesome"),y=aa(v,M),O=y;if(N){var R=Ec(M);R.iconName&&R.prefix&&(y=R.iconName,v=R.prefix)}if(y&&!z&&(!o||o.getAttribute(Gr)!==v||o.getAttribute(Zr)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var j=Jc(),B=j.extra;B.attributes[br]=e,Ar(y,v).then(function(rt){var ct=oa(A(A({},j),{},{icons:{main:rt,mask:ia()},prefix:v,iconName:O,extra:B,watchable:!0})),wt=q.createElement("svg");e==="::before"?t.insertBefore(wt,t.firstChild):t.appendChild(wt),wt.outerHTML=ct.map(function(st){return Ge(st)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function lu(t){return Promise.all([li(t,"::before"),li(t,"::after")])}function fu(t){return t.parentNode!==document.head&&!~Qf.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(br)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fi(t){if(!!Ut)return new Promise(function(e,n){var r=Ie(t.querySelectorAll("*")).filter(fu).map(lu),a=sa.begin("searchPseudoElements");$o(),Promise.all(r).then(function(){a(),Or(),e()}).catch(function(){a(),Or(),n()})})}var cu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;T.searchPseudoElements&&fi(a)}}},ci=!1,uu={mixout:function(){return{dom:{unwatch:function(){$o(),ci=!0}}}},hooks:function(){return{bootstrap:function(){ai(wr("mutationObserverCallbacks",{}))},noAuto:function(){qc()},watch:function(n){var r=n.observeMutationsRoot;ci?Or():ai(wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ui=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},du={mixout:function(){return{parse:{transform:function(n){return ui(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ui(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:v};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function di(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mu(t){return t.tag==="g"?t.children:[t]}var hu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Dn(a.split(" ").map(function(o){return o.trim()})):ia();return i.prefix||(i.prefix=Qt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,C=dc({transform:l,containerWidth:m,iconWidth:u}),M={tag:"rect",attributes:A(A({},tr),{},{fill:"white"})},z=d.children?{children:d.children.map(di)}:{},N={tag:"g",attributes:A({},C.inner),children:[di(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},z))]},y={tag:"g",attributes:A({},C.outer),children:[N]},O="mask-".concat(s||Je()),R="clip-".concat(s||Je()),j={tag:"mask",attributes:A(A({},tr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:mu(v)},j]};return r.push(B,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(O,")")},tr)}),{children:r,attributes:a}}}},pu={provides:function(e){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},gu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},vu=[pc,nu,ru,au,iu,cu,uu,du,hu,pu,gu];Tc(vu,{mixoutsTo:ht});ht.noAuto;var Bo=ht.config,bu=ht.library;ht.dom;var Yo=ht.parse;ht.findIconDefinition;ht.toHtml;var yu=ht.icon;ht.layer;var xu=ht.text;ht.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var wu={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"]},_u={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]},ku={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"]},Au=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Cu(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Ou=Cu(function(t){(function(e){var n=function(y,O,R){if(!u(O)||m(O)||v(O)||C(O)||l(O))return O;var j,B=0,rt=0;if(d(O))for(j=[],rt=O.length;B<rt;B++)j.push(n(y,O[B],R));else{j={};for(var ct in O)Object.prototype.hasOwnProperty.call(O,ct)&&(j[y(ct,R)]=n(y,O[ct],R))}return j},r=function(y,O){O=O||{};var R=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(R)},a=function(y){return M(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},M=function(y){return y=y-0,y===y},z=function(y,O){var R=O&&"process"in O?O.process:O;return typeof R!="function"?y:function(j,B){return R(j,y,B)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(z(a,O),y)},decamelizeKeys:function(y,O){return n(z(o,O),y,O)},pascalizeKeys:function(y,O){return n(z(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(Au)}),Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Cn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Iu=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Er=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function Pu(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ou.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Tu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function fa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return fa(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.class=Tu(d);break;case"style":l.style=Pu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Iu(n,["class","style"]);return mo(t.tag,Cn({},e,{class:a.class,style:Cn({},a.style,o)},a.attrs,s),r)}var Wo=!1;try{Wo=!0}catch{}function Nu(){if(!Wo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ye(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?je({},t,e):{}}function Su(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},je(e,"fa-"+t.size,t.size!==null),je(e,"fa-rotate-"+t.rotation,t.rotation!==null),je(e,"fa-pull-"+t.pull,t.pull!==null),je(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function mi(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":Eu(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Mu=Mn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=gt(function(){return mi(e.icon)}),i=gt(function(){return Ye("classes",Su(e))}),o=gt(function(){return Ye("transform",typeof e.transform=="string"?Yo.transform(e.transform):e.transform)}),s=gt(function(){return Ye("mask",mi(e.mask))}),l=gt(function(){return yu(a.value,Cn({},i.value,o.value,s.value,{symbol:e.symbol,title:e.title}))});fn(l,function(d){if(!d)return Nu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=gt(function(){return l.value?fa(l.value.abstract[0],{},r):null});return function(){return u.value}}});Mn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,a=Bo.familyPrefix,i=gt(function(){return[a+"-layers"].concat(Er(e.fixedWidth?[a+"-fw"]:[]))});return function(){return mo("div",{class:i.value},r.default?r.default():[])}}});Mn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,a=Bo.familyPrefix,i=gt(function(){return Ye("classes",[].concat(Er(e.counter?[a+"-layers-counter"]:[]),Er(e.position?[a+"-layers-"+e.position]:[])))}),o=gt(function(){return Ye("transform",typeof e.transform=="string"?Yo.transform(e.transform):e.transform)}),s=gt(function(){var u=xu(e.value.toString(),Cn({},o.value,i.value)),d=u.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=gt(function(){return fa(s.value,{},r)});return function(){return l.value}}});bu.add(wu,ku,_u);_f(zf).component("Icon",Mu).mount("#app");
