var As=Object.defineProperty;var Fa=Object.getOwnPropertySymbols;var Cs=Object.prototype.hasOwnProperty,Es=Object.prototype.propertyIsEnumerable;var tr=(e,t,n)=>t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,La=(e,t)=>{for(var n in t||(t={}))Cs.call(t,n)&&tr(e,n,t[n]);if(Fa)for(var n of Fa(t))Es.call(t,n)&&tr(e,n,t[n]);return e};var de=(e,t,n)=>(tr(e,typeof t!="symbol"?t+"":t,n),n);const Os=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Os();function Wr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Is=Wr(Ts);function $i(e){return!!e||e===""}function Dn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ce(r)?Ns(r):Dn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ce(e))return e;if(ae(e))return e}}const Ps=/;(?![^(]*\))/g,Ss=/:(.+)/;function Ns(e){const t={};return e.split(Ps).forEach(n=>{if(n){const r=n.split(Ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Kr(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=Kr(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Et=e=>ce(e)?e:e==null?"":D(e)||ae(e)&&(e.toString===Yi||!$(e.toString))?JSON.stringify(e,Ui,2):String(e),Ui=(e,t)=>t&&t.__v_isRef?Ui(e,t.value):Mt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Hi(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!D(t)&&!Wi(t)?String(t):t,q={},Nt=[],Te=()=>{},Ms=()=>!1,Fs=/^on[^a-z]/,zn=e=>Fs.test(e),qr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ls=Object.prototype.hasOwnProperty,B=(e,t)=>Ls.call(e,t),D=Array.isArray,Mt=e=>jn(e)==="[object Map]",Hi=e=>jn(e)==="[object Set]",$=e=>typeof e=="function",ce=e=>typeof e=="string",Vr=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Bi=e=>ae(e)&&$(e.then)&&$(e.catch),Yi=Object.prototype.toString,jn=e=>Yi.call(e),Rs=e=>jn(e).slice(8,-1),Wi=e=>jn(e)==="[object Object]",Xr=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ds=/-(\w)/g,Re=$n(e=>e.replace(Ds,(t,n)=>n?n.toUpperCase():"")),zs=/\B([A-Z])/g,jt=$n(e=>e.replace(zs,"-$1").toLowerCase()),Un=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),nr=$n(e=>e?`on${Un(e)}`:""),rn=(e,t)=>!Object.is(e,t),rr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ki=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const js=()=>Ra||(Ra=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $e;class $s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&$e&&(this.parent=$e,this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active)try{return $e=this,t()}finally{$e=this.parent}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Us(e,t=$e){t&&t.active&&t.effects.push(e)}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&it)>0,Qi=e=>(e.n&it)>0,Hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=it},Bs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];qi(a)&&!Qi(a)?a.delete(e):t[n++]=a,a.w&=~it,a.n&=~it}t.length=n}},hr=new WeakMap;let qt=0,it=1;const gr=30;let Fe;const gt=Symbol(""),vr=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Us(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,rt=!0,it=1<<++qt,qt<=gr?Hs(this):Da(this),this.fn()}finally{qt<=gr&&Bs(this),it=1<<--qt,Fe=this.parent,rt=n,this.parent=void 0}}stop(){this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rt=!0;const Vi=[];function $t(){Vi.push(rt),rt=!1}function Ut(){const e=Vi.pop();rt=e===void 0?!0:e}function be(e,t,n){if(rt&&Fe){let r=hr.get(e);r||hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),Xi(a)}}function Xi(e,t){let n=!1;qt<=gr?Qi(e)||(e.n|=it,n=!qi(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function Be(e,t,n,r,a,i){const o=hr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Xr(n)&&s.push(o.get("length")):(s.push(o.get(gt)),Mt(e)&&s.push(o.get(vr)));break;case"delete":D(e)||(s.push(o.get(gt)),Mt(e)&&s.push(o.get(vr)));break;case"set":Mt(e)&&s.push(o.get(gt));break}if(s.length===1)s[0]&&br(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);br(Jr(l))}}function br(e,t){for(const n of D(e)?e:[...e])(n!==Fe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ys=Wr("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Vr)),Ws=Zr(),Ks=Zr(!1,!0),qs=Zr(!0),za=Qs();function Qs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$t();const r=Y(this)[t].apply(this,n);return Ut(),r}}),e}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?cl:no:t?to:eo).get(r))return r;const o=D(r);if(!e&&o&&B(za,a))return Reflect.get(za,a,i);const s=Reflect.get(r,a,i);return(Vr(a)?Ji.has(a):Ys(a))||(e||be(r,"get",a),t)?s:se(s)?!o||!Xr(a)?s.value:s:ae(s)?e?ro(s):na(s):s}}const Vs=Gi(),Xs=Gi(!0);function Gi(e=!1){return function(n,r,a,i){let o=n[r];if(an(o)&&se(o)&&!se(a))return!1;if(!e&&!an(a)&&(ao(a)||(a=Y(a),o=Y(o)),!D(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=D(n)&&Xr(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?rn(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function Js(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function Gs(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Ji.has(t))&&be(e,"has",t),n}function Zs(e){return be(e,"iterate",D(e)?"length":gt),Reflect.ownKeys(e)}const Zi={get:Ws,set:Vs,deleteProperty:Js,has:Gs,ownKeys:Zs},el={get:qs,set(e,t){return!0},deleteProperty(e,t){return!0}},tl=fe({},Zi,{get:Ks,set:Xs}),ea=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);t!==i&&!n&&be(a,"get",t),!n&&be(a,"get",i);const{has:o}=Hn(a),s=r?ea:n?aa:on;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return e!==a&&!t&&be(r,"has",e),!t&&be(r,"has",a),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&be(Y(e),"iterate",gt),Reflect.get(e,"size",e)}function ja(e){e=Y(e);const t=Y(this);return Hn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function $a(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Hn(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?rn(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function Ua(e){const t=Y(this),{has:n,get:r}=Hn(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Ha(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ea:e?aa:on;return!e&&be(s,"iterate",gt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=Mt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ea:t?aa:on;return!t&&be(i,"iterate",l?vr:gt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function nl(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:ja,set:$a,delete:Ua,clear:Ha,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:ja,set:$a,delete:Ua,clear:Ha,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[rl,al,il,ol]=nl();function ta(e,t){const n=t?e?ol:il:e?al:rl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const sl={get:ta(!1,!1)},ll={get:ta(!1,!0)},fl={get:ta(!0,!1)},eo=new WeakMap,to=new WeakMap,no=new WeakMap,cl=new WeakMap;function ul(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:ul(Rs(e))}function na(e){return an(e)?e:ra(e,!1,Zi,sl,eo)}function ml(e){return ra(e,!1,tl,ll,to)}function ro(e){return ra(e,!0,el,fl,no)}function ra(e,t,n,r,a){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=dl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ft(e){return an(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function ao(e){return!!(e&&e.__v_isShallow)}function io(e){return Ft(e)||an(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function oo(e){return Cn(e,"__v_skip",!0),e}const on=e=>ae(e)?na(e):e,aa=e=>ae(e)?ro(e):e;function so(e){rt&&Fe&&(e=Y(e),Xi(e.dep||(e.dep=Jr())))}function lo(e,t){e=Y(e),e.dep&&br(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function ar(e){return pl(e,!1)}function pl(e,t){return se(e)?e:new hl(e,t)}class hl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:on(t)}get value(){return so(this),this._value}set value(t){t=this.__v_isShallow?t:Y(t),rn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:on(t),lo(this))}}function Ce(e){return se(e)?e.value:e}const gl={get:(e,t,n)=>Ce(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function fo(e){return Ft(e)?e:new Proxy(e,gl)}class vl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,lo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return so(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bl(e,t,n=!1){let r,a;const i=$(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new vl(r,a,i||!a,n)}Promise.resolve();function at(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Bn(i,t,n)}return a}function ke(e,t,n,r){if($(e)){const i=at(e,t,n,r);return i&&Bi(i)&&i.catch(o=>{Bn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Bn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){at(l,null,10,[e,o,s]);return}}yl(e,n,a,r)}function yl(e,t,n,r=!0){console.error(e)}let En=!1,yr=!1;const ve=[];let He=0;const Jt=[];let Qt=null,Ot=0;const Gt=[];let et=null,Tt=0;const co=Promise.resolve();let ia=null,xr=null;function xl(e){const t=ia||co;return e?t.then(this?e.bind(this):e):t}function wl(e){let t=He+1,n=ve.length;for(;t<n;){const r=t+n>>>1;sn(ve[r])<e?t=r+1:n=r}return t}function uo(e){(!ve.length||!ve.includes(e,En&&e.allowRecurse?He+1:He))&&e!==xr&&(e.id==null?ve.push(e):ve.splice(wl(e.id),0,e),mo())}function mo(){!En&&!yr&&(yr=!0,ia=co.then(go))}function _l(e){const t=ve.indexOf(e);t>He&&ve.splice(t,1)}function po(e,t,n,r){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),mo()}function kl(e){po(e,Qt,Jt,Ot)}function Al(e){po(e,et,Gt,Tt)}function oa(e,t=null){if(Jt.length){for(xr=t,Qt=[...new Set(Jt)],Jt.length=0,Ot=0;Ot<Qt.length;Ot++)Qt[Ot]();Qt=null,Ot=0,xr=null,oa(e,t)}}function ho(e){if(Gt.length){const t=[...new Set(Gt)];if(Gt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>sn(n)-sn(r)),Tt=0;Tt<et.length;Tt++)et[Tt]();et=null,Tt=0}}const sn=e=>e.id==null?1/0:e.id;function go(e){yr=!1,En=!0,oa(e),ve.sort((n,r)=>sn(n)-sn(r));const t=Te;try{for(He=0;He<ve.length;He++){const n=ve[He];n&&n.active!==!1&&at(n,null,14)}}finally{He=0,ve.length=0,ho(),En=!1,ia=null,(ve.length||Jt.length||Gt.length)&&go(e)}}function Cl(e,t,...n){const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[d]||q;h?a=n.map(_=>_.trim()):m&&(a=n.map(Ki))}let s,l=r[s=nr(t)]||r[s=nr(Re(t))];!l&&i&&(l=r[s=nr(jt(t))]),l&&ke(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(c,e,6,a)}}function vo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!$(e)){const l=c=>{const d=vo(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):fe(o,i),r.set(e,o),o)}function sa(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,jt(t))||B(e,t))}let Ee=null,bo=null;function On(e){const t=Ee;return Ee=e,bo=e&&e.type.__scopeId||null,t}function yo(e,t=Ee,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=On(t),o=e(...a);return On(i),r._d&&Za(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:h,setupState:_,ctx:T,inheritAttrs:L}=e;let I,y;const C=On(e);try{if(n.shapeFlag&4){const z=a||r;I=Me(d.call(z,z,m,i,_,h,T)),y=l}else{const z=t;I=Me(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),y=t.props?l:El(l)}}catch(z){Zt.length=0,Bn(z,e,1),I=le(De)}let F=I;if(y&&L!==!1){const z=Object.keys(y),{shapeFlag:U}=F;z.length&&U&7&&(o&&z.some(qr)&&(y=Ol(y,o)),F=Dt(F,y))}return n.dirs&&(F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),I=F,On(C),I}const El=e=>{let t;for(const n in e)(n==="class"||n==="style"||zn(n))&&((t||(t={}))[n]=e[n]);return t},Ol=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(o[h]!==r[h]&&!sa(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,c):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!sa(n,i))return!0}return!1}function Il({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pl=e=>e.__isSuspense;function Sl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Al(e)}function Nl(e,t){if(ie){let n=ie.provides;const r=ie.parent&&ie.parent.provides;r===n&&(n=ie.provides=Object.create(r)),n[e]=t}}function or(e,t,n=!1){const r=ie||Ee;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&$(t)?t.call(r.proxy):t}}const Ya={};function xn(e,t,n){return xo(e,t,n)}function xo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){const s=ie;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=ao(e)):Ft(e)?(l=()=>e,r=!0):D(e)?(d=!0,c=e.some(Ft),l=()=>e.map(y=>{if(se(y))return y.value;if(Ft(y))return It(y);if($(y))return at(y,s,2)})):$(e)?t?l=()=>at(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),ke(e,s,3,[h])}:l=Te,t&&r){const y=l;l=()=>It(y())}let m,h=y=>{m=I.onStop=()=>{at(y,s,4)}};if(ln)return h=Te,t?n&&ke(t,s,3,[l(),d?[]:void 0,h]):l(),Te;let _=d?[]:Ya;const T=()=>{if(!!I.active)if(t){const y=I.run();(r||c||(d?y.some((C,F)=>rn(C,_[F])):rn(y,_)))&&(m&&m(),ke(t,s,3,[y,_===Ya?void 0:_,h]),_=y)}else I.run()};T.allowRecurse=!!t;let L;a==="sync"?L=T:a==="post"?L=()=>he(T,s&&s.suspense):L=()=>{!s||s.isMounted?kl(T):T()};const I=new Gr(l,L);return t?n?T():_=I.run():a==="post"?he(I.run.bind(I),s&&s.suspense):I.run(),()=>{I.stop(),s&&s.scope&&Qr(s.scope.effects,I)}}function Ml(e,t,n){const r=this.proxy,a=ce(e)?e.includes(".")?wo(r,e):()=>r[e]:e.bind(r,r);let i;$(t)?i=t:(i=t.handler,n=t);const o=ie;zt(this);const s=xo(a,i.bind(r),n);return o?zt(o):bt(),s}function wo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function It(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))It(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)It(e[n],t);else if(Hi(e)||Mt(e))e.forEach(n=>{It(n,t)});else if(Wi(e))for(const n in e)It(e[n],t);return e}function Fl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Eo(()=>{e.isMounted=!0}),Oo(()=>{e.isUnmounting=!0}),e}const xe=[Function,Array],Ll={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe},setup(e,{slots:t}){const n=_f(),r=Fl();let a;return()=>{const i=t.default&&Ao(t.default(),!0);if(!i||!i.length)return;const o=Y(e),{mode:s}=o,l=i[0];if(r.isLeaving)return sr(l);const c=Wa(l);if(!c)return sr(l);const d=wr(c,o,r,n);_r(c,d);const m=n.subTree,h=m&&Wa(m);let _=!1;const{getTransitionKey:T}=c.type;if(T){const L=T();a===void 0?a=L:L!==a&&(a=L,_=!0)}if(h&&h.type!==De&&(!dt(c,h)||_)){const L=wr(h,o,r,n);if(_r(h,L),s==="out-in")return r.isLeaving=!0,L.afterLeave=()=>{r.isLeaving=!1,n.update()},sr(l);s==="in-out"&&c.type!==De&&(L.delayLeave=(I,y,C)=>{const F=ko(r,h);F[String(h.key)]=h,I._leaveCb=()=>{y(),I._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=C})}return l}}},_o=Ll;function ko(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function wr(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:h,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:L,onAppear:I,onAfterAppear:y,onAppearCancelled:C}=t,F=String(e.key),z=ko(n,e),U=(j,Q)=>{j&&ke(j,r,9,Q)},te={mode:i,persisted:o,beforeEnter(j){let Q=s;if(!n.isMounted)if(a)Q=L||s;else return;j._leaveCb&&j._leaveCb(!0);const W=z[F];W&&dt(e,W)&&W.el._leaveCb&&W.el._leaveCb(),U(Q,[j])},enter(j){let Q=l,W=c,pe=d;if(!n.isMounted)if(a)Q=I||l,W=y||c,pe=C||d;else return;let ue=!1;const M=j._enterCb=ne=>{ue||(ue=!0,ne?U(pe,[j]):U(W,[j]),te.delayedLeave&&te.delayedLeave(),j._enterCb=void 0)};Q?(Q(j,M),Q.length<=1&&M()):M()},leave(j,Q){const W=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return Q();U(m,[j]);let pe=!1;const ue=j._leaveCb=M=>{pe||(pe=!0,Q(),M?U(T,[j]):U(_,[j]),j._leaveCb=void 0,z[W]===e&&delete z[W])};z[W]=e,h?(h(j,ue),h.length<=1&&ue()):ue()},clone(j){return wr(j,t,n,r)}};return te}function sr(e){if(Yn(e))return e=Dt(e),e.children=null,e}function Wa(e){return Yn(e)?e.children?e.children[0]:void 0:e}function _r(e,t){e.shapeFlag&6&&e.component?_r(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ao(e,t=!1){let n=[],r=0;for(let a=0;a<e.length;a++){const i=e[a];i.type===Ne?(i.patchFlag&128&&r++,n=n.concat(Ao(i.children,t))):(t||i.type!==De)&&n.push(i)}if(r>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function Ht(e){return $(e)?{setup:e,name:e.name}:e}const kr=e=>!!e.type.__asyncLoader,Yn=e=>e.type.__isKeepAlive;function Rl(e,t){Co(e,"a",t)}function Dl(e,t){Co(e,"da",t)}function Co(e,t,n=ie){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Yn(a.parent.vnode)&&zl(r,t,n,a),a=a.parent}}function zl(e,t,n,r){const a=Wn(t,e,r,!0);To(()=>{Qr(r[t],a)},n)}function Wn(e,t,n=ie,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$t(),zt(n);const s=ke(t,n,e,o);return bt(),Ut(),s});return r?a.unshift(i):a.push(i),i}}const qe=e=>(t,n=ie)=>(!ln||e==="sp")&&Wn(e,t,n),jl=qe("bm"),Eo=qe("m"),$l=qe("bu"),Ul=qe("u"),Oo=qe("bum"),To=qe("um"),Hl=qe("sp"),Bl=qe("rtg"),Yl=qe("rtc");function Wl(e,t=ie){Wn("ec",e,t)}let Ar=!0;function Kl(e){const t=Po(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:_,updated:T,activated:L,deactivated:I,beforeDestroy:y,beforeUnmount:C,destroyed:F,unmounted:z,render:U,renderTracked:te,renderTriggered:j,errorCaptured:Q,serverPrefetch:W,expose:pe,inheritAttrs:ue,components:M,directives:ne,filters:Ie}=t;if(c&&ql(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const V=o[ee];$(V)&&(r[ee]=V.bind(n))}if(a){const ee=a.call(n,n);ae(ee)&&(e.data=na(ee))}if(Ar=!0,i)for(const ee in i){const V=i[ee],ze=$(V)?V.bind(n,n):$(V.get)?V.get.bind(n,n):Te,Gn=!$(V)&&$(V.set)?V.set.bind(n):Te,Yt=_e({get:ze,set:Gn});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:_t=>Yt.value=_t})}if(s)for(const ee in s)Io(s[ee],r,n,ee);if(l){const ee=$(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(V=>{Nl(V,ee[V])})}d&&Ka(d,e,"c");function oe(ee,V){D(V)?V.forEach(ze=>ee(ze.bind(n))):V&&ee(V.bind(n))}if(oe(jl,m),oe(Eo,h),oe($l,_),oe(Ul,T),oe(Rl,L),oe(Dl,I),oe(Wl,Q),oe(Yl,te),oe(Bl,j),oe(Oo,C),oe(To,z),oe(Hl,W),D(pe))if(pe.length){const ee=e.exposed||(e.exposed={});pe.forEach(V=>{Object.defineProperty(ee,V,{get:()=>n[V],set:ze=>n[V]=ze})})}else e.exposed||(e.exposed={});U&&e.render===Te&&(e.render=U),ue!=null&&(e.inheritAttrs=ue),M&&(e.components=M),ne&&(e.directives=ne)}function ql(e,t,n=Te,r=!1){D(e)&&(e=Cr(e));for(const a in e){const i=e[a];let o;ae(i)?"default"in i?o=or(i.from||a,i.default,!0):o=or(i.from||a):o=or(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ka(e,t,n){ke(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,r){const a=r.includes(".")?wo(n,r):()=>n[r];if(ce(e)){const i=t[e];$(i)&&xn(a,i)}else if($(e))xn(a,e.bind(n));else if(ae(e))if(D(e))e.forEach(i=>Io(i,t,n,r));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&xn(a,i,e)}}function Po(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Tn(l,c,o,!0)),Tn(l,t,o)),i.set(t,l),l}function Tn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Tn(e,i,n,!0),a&&a.forEach(o=>Tn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ql[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ql={data:qa,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:ut,directives:ut,watch:Xl,provide:qa,inject:Vl};function qa(e,t){return t?e?function(){return fe($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Vl(e,t){return ut(Cr(e),Cr(t))}function Cr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?fe(fe(Object.create(null),e),t):t}function Xl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Jl(e,t,n,r=!1){const a={},i={};Cn(i,Kn,1),e.propsDefaults=Object.create(null),So(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ml(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];const _=t[h];if(l)if(B(i,h))_!==i[h]&&(i[h]=_,c=!0);else{const T=Re(h);a[T]=Er(l,s,T,_,e,!1)}else _!==i[h]&&(i[h]=_,c=!0)}}}else{So(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!B(t,m)&&((d=jt(m))===m||!B(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Er(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m)&&!0)&&(delete i[m],c=!0)}c&&Be(e,"set","$attrs")}function So(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(yn(l))continue;const c=t[l];let d;a&&B(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:sa(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Er(a,l,m,c[m],e,!B(c,m))}}return o}function Er(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(zt(a),r=c[n]=l.call(null,t),bt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function No(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!$(e)){const d=m=>{l=!0;const[h,_]=No(m,t,!0);fe(o,h),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,Nt),Nt;if(D(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Qa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Re(d);if(Qa(m)){const h=i[d],_=o[m]=D(h)||$(h)?{type:h}:h;if(_){const T=Ja(Boolean,_.type),L=Ja(String,_.type);_[0]=T>-1,_[1]=L<0||T<L,(T>-1||B(_,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function Qa(e){return e[0]!=="$"}function Va(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Xa(e,t){return Va(e)===Va(t)}function Ja(e,t){return D(t)?t.findIndex(n=>Xa(n,e)):$(t)&&Xa(t,e)?0:-1}const Mo=e=>e[0]==="_"||e==="$stable",la=e=>D(e)?e.map(Me):[Me(e)],Zl=(e,t,n)=>{const r=yo((...a)=>la(t(...a)),n);return r._c=!1,r},Fo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Mo(a))continue;const i=e[a];if($(i))t[a]=Zl(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},Lo=(e,t)=>{const n=la(t);e.slots.default=()=>n},ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Cn(t,"_",n)):Fo(t,e.slots={})}else e.slots={},t&&Lo(e,t);Cn(e.slots,Kn,1)},tf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Fo(t,a)),o=t}else t&&(Lo(e,t),o={default:1});if(i)for(const s in a)!Mo(s)&&!(s in o)&&delete a[s]};function lt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&($t(),ke(l,n,8,[e.el,s,e,t]),Ut())}}function Ro(){return{app:null,config:{isNativeTag:Ms,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function rf(e,t){return function(r,a=null){a!=null&&!ae(a)&&(a=null);const i=Ro(),o=new Set;let s=!1;const l=i.app={_uid:nf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:If,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...d)):$(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const h=le(r,a);return h.appContext=i,d&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,da(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Or(e,t,n,r,a=!1){if(D(e)){e.forEach((h,_)=>Or(h,t&&(D(t)?t[_]:t),n,r,a));return}if(kr(r)&&!a)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ce(c)?(d[c]=null,B(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),$(l))at(l,s,12,[o,d]);else{const h=ce(l),_=se(l);if(h||_){const T=()=>{if(e.f){const L=h?d[l]:l.value;a?D(L)&&Qr(L,i):D(L)?L.includes(i)||L.push(i):h?d[l]=[i]:(l.value=[i],e.k&&(d[e.k]=l.value))}else h?(d[l]=o,B(m,l)&&(m[l]=o)):se(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(T.id=-1,he(T,n)):T()}}}const he=Sl;function af(e){return of(e)}function of(e,t){const n=js();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:_=Te,cloneNode:T,insertStaticContent:L}=e,I=(f,u,p,v=null,g=null,w=null,A=!1,x=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!dt(f,u)&&(v=dn(f),Ve(f,g,w,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:P,shapeFlag:O}=u;switch(b){case fa:y(f,u,p,v);break;case De:C(f,u,p,v);break;case lr:f==null&&F(u,p,v,A);break;case Ne:ne(f,u,p,v,g,w,A,x,k);break;default:O&1?te(f,u,p,v,g,w,A,x,k):O&6?Ie(f,u,p,v,g,w,A,x,k):(O&64||O&128)&&b.process(f,u,p,v,g,w,A,x,k,kt)}P!=null&&g&&Or(P,f&&f.ref,w,u||f,!u)},y=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},C=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},F=(f,u,p,v)=>{[f.el,f.anchor]=L(f.children,u,p,v,f.el,f.anchor)},z=({el:f,anchor:u},p,v)=>{let g;for(;f&&f!==u;)g=h(f),r(f,p,v),f=g;r(u,p,v)},U=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=h(f),a(f),f=p;a(u)},te=(f,u,p,v,g,w,A,x,k)=>{A=A||u.type==="svg",f==null?j(u,p,v,g,w,A,x,k):pe(f,u,g,w,A,x,k)},j=(f,u,p,v,g,w,A,x)=>{let k,b;const{type:P,props:O,shapeFlag:S,transition:R,patchFlag:H,dirs:G}=f;if(f.el&&T!==void 0&&H===-1)k=f.el=T(f.el);else{if(k=f.el=o(f.type,w,O&&O.is,O),S&8?d(k,f.children):S&16&&W(f.children,k,null,v,g,w&&P!=="foreignObject",A,x),G&&lt(f,null,v,"created"),O){for(const X in O)X!=="value"&&!yn(X)&&i(k,X,null,O[X],w,f.children,v,g,je);"value"in O&&i(k,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Se(b,v,f)}Q(k,f,f.scopeId,A,v)}G&&lt(f,null,v,"beforeMount");const K=(!g||g&&!g.pendingBranch)&&R&&!R.persisted;K&&R.beforeEnter(k),r(k,u,p),((b=O&&O.onVnodeMounted)||K||G)&&he(()=>{b&&Se(b,v,f),K&&R.enter(k),G&&lt(f,null,v,"mounted")},g)},Q=(f,u,p,v,g)=>{if(p&&_(f,p),v)for(let w=0;w<v.length;w++)_(f,v[w]);if(g){let w=g.subTree;if(u===w){const A=g.vnode;Q(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},W=(f,u,p,v,g,w,A,x,k=0)=>{for(let b=k;b<f.length;b++){const P=f[b]=x?tt(f[b]):Me(f[b]);I(null,P,u,p,v,g,w,A,x)}},pe=(f,u,p,v,g,w,A)=>{const x=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:P}=u;k|=f.patchFlag&16;const O=f.props||q,S=u.props||q;let R;p&&ft(p,!1),(R=S.onVnodeBeforeUpdate)&&Se(R,p,u,f),P&&lt(u,f,p,"beforeUpdate"),p&&ft(p,!0);const H=g&&u.type!=="foreignObject";if(b?ue(f.dynamicChildren,b,x,p,v,H,w):A||ze(f,u,x,null,p,v,H,w,!1),k>0){if(k&16)M(x,u,O,S,p,v,g);else if(k&2&&O.class!==S.class&&i(x,"class",null,S.class,g),k&4&&i(x,"style",O.style,S.style,g),k&8){const G=u.dynamicProps;for(let K=0;K<G.length;K++){const X=G[K],Ae=O[X],At=S[X];(At!==Ae||X==="value")&&i(x,X,Ae,At,g,f.children,p,v,je)}}k&1&&f.children!==u.children&&d(x,u.children)}else!A&&b==null&&M(x,u,O,S,p,v,g);((R=S.onVnodeUpdated)||P)&&he(()=>{R&&Se(R,p,u,f),P&&lt(u,f,p,"updated")},v)},ue=(f,u,p,v,g,w,A)=>{for(let x=0;x<u.length;x++){const k=f[x],b=u[x],P=k.el&&(k.type===Ne||!dt(k,b)||k.shapeFlag&70)?m(k.el):p;I(k,b,P,null,v,g,w,A,!0)}},M=(f,u,p,v,g,w,A)=>{if(p!==v){for(const x in v){if(yn(x))continue;const k=v[x],b=p[x];k!==b&&x!=="value"&&i(f,x,b,k,A,u.children,g,w,je)}if(p!==q)for(const x in p)!yn(x)&&!(x in v)&&i(f,x,p[x],null,A,u.children,g,w,je);"value"in v&&i(f,"value",p.value,v.value)}},ne=(f,u,p,v,g,w,A,x,k)=>{const b=u.el=f?f.el:s(""),P=u.anchor=f?f.anchor:s("");let{patchFlag:O,dynamicChildren:S,slotScopeIds:R}=u;R&&(x=x?x.concat(R):R),f==null?(r(b,p,v),r(P,p,v),W(u.children,p,P,g,w,A,x,k)):O>0&&O&64&&S&&f.dynamicChildren?(ue(f.dynamicChildren,S,p,g,w,A,x),(u.key!=null||g&&u===g.subTree)&&Do(f,u,!0)):ze(f,u,p,P,g,w,A,x,k)},Ie=(f,u,p,v,g,w,A,x,k)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?g.ctx.activate(u,p,v,A,k):wt(u,p,v,g,w,A,k):oe(f,u,k)},wt=(f,u,p,v,g,w,A)=>{const x=f.component=wf(f,v,g);if(Yn(f)&&(x.ctx.renderer=kt),kf(x),x.asyncDep){if(g&&g.registerDep(x,ee),!f.el){const k=x.subTree=le(De);C(null,k,u,p)}return}ee(x,f,u,p,g,w,A)},oe=(f,u,p)=>{const v=u.component=f.component;if(Tl(f,u,p))if(v.asyncDep&&!v.asyncResolved){V(v,u,p);return}else v.next=u,_l(v.update),v.update();else u.component=f.component,u.el=f.el,v.vnode=u},ee=(f,u,p,v,g,w,A)=>{const x=()=>{if(f.isMounted){let{next:P,bu:O,u:S,parent:R,vnode:H}=f,G=P,K;ft(f,!1),P?(P.el=H.el,V(f,P,A)):P=H,O&&rr(O),(K=P.props&&P.props.onVnodeBeforeUpdate)&&Se(K,R,P,H),ft(f,!0);const X=ir(f),Ae=f.subTree;f.subTree=X,I(Ae,X,m(Ae.el),dn(Ae),f,g,w),P.el=X.el,G===null&&Il(f,X.el),S&&he(S,g),(K=P.props&&P.props.onVnodeUpdated)&&he(()=>Se(K,R,P,H),g)}else{let P;const{el:O,props:S}=u,{bm:R,m:H,parent:G}=f,K=kr(u);if(ft(f,!1),R&&rr(R),!K&&(P=S&&S.onVnodeBeforeMount)&&Se(P,G,u),ft(f,!0),O&&er){const X=()=>{f.subTree=ir(f),er(O,f.subTree,f,g,null)};K?u.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=ir(f);I(null,X,p,v,f,g,w),u.el=X.el}if(H&&he(H,g),!K&&(P=S&&S.onVnodeMounted)){const X=u;he(()=>Se(P,G,X),g)}u.shapeFlag&256&&f.a&&he(f.a,g),f.isMounted=!0,u=p=v=null}},k=f.effect=new Gr(x,()=>uo(f.update),f.scope),b=f.update=k.run.bind(k);b.id=f.uid,ft(f,!0),b()},V=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,v,p),tf(f,u.children,p),$t(),oa(void 0,f.update),Ut()},ze=(f,u,p,v,g,w,A,x,k=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,O=u.children,{patchFlag:S,shapeFlag:R}=u;if(S>0){if(S&128){Yt(b,O,p,v,g,w,A,x,k);return}else if(S&256){Gn(b,O,p,v,g,w,A,x,k);return}}R&8?(P&16&&je(b,g,w),O!==b&&d(p,O)):P&16?R&16?Yt(b,O,p,v,g,w,A,x,k):je(b,g,w,!0):(P&8&&d(p,""),R&16&&W(O,p,v,g,w,A,x,k))},Gn=(f,u,p,v,g,w,A,x,k)=>{f=f||Nt,u=u||Nt;const b=f.length,P=u.length,O=Math.min(b,P);let S;for(S=0;S<O;S++){const R=u[S]=k?tt(u[S]):Me(u[S]);I(f[S],R,p,null,g,w,A,x,k)}b>P?je(f,g,w,!0,!1,O):W(u,p,v,g,w,A,x,k,O)},Yt=(f,u,p,v,g,w,A,x,k)=>{let b=0;const P=u.length;let O=f.length-1,S=P-1;for(;b<=O&&b<=S;){const R=f[b],H=u[b]=k?tt(u[b]):Me(u[b]);if(dt(R,H))I(R,H,p,null,g,w,A,x,k);else break;b++}for(;b<=O&&b<=S;){const R=f[O],H=u[S]=k?tt(u[S]):Me(u[S]);if(dt(R,H))I(R,H,p,null,g,w,A,x,k);else break;O--,S--}if(b>O){if(b<=S){const R=S+1,H=R<P?u[R].el:v;for(;b<=S;)I(null,u[b]=k?tt(u[b]):Me(u[b]),p,H,g,w,A,x,k),b++}}else if(b>S)for(;b<=O;)Ve(f[b],g,w,!0),b++;else{const R=b,H=b,G=new Map;for(b=H;b<=S;b++){const ge=u[b]=k?tt(u[b]):Me(u[b]);ge.key!=null&&G.set(ge.key,b)}let K,X=0;const Ae=S-H+1;let At=!1,Sa=0;const Wt=new Array(Ae);for(b=0;b<Ae;b++)Wt[b]=0;for(b=R;b<=O;b++){const ge=f[b];if(X>=Ae){Ve(ge,g,w,!0);continue}let Pe;if(ge.key!=null)Pe=G.get(ge.key);else for(K=H;K<=S;K++)if(Wt[K-H]===0&&dt(ge,u[K])){Pe=K;break}Pe===void 0?Ve(ge,g,w,!0):(Wt[Pe-H]=b+1,Pe>=Sa?Sa=Pe:At=!0,I(ge,u[Pe],p,null,g,w,A,x,k),X++)}const Na=At?sf(Wt):Nt;for(K=Na.length-1,b=Ae-1;b>=0;b--){const ge=H+b,Pe=u[ge],Ma=ge+1<P?u[ge+1].el:v;Wt[b]===0?I(null,Pe,p,Ma,g,w,A,x,k):At&&(K<0||b!==Na[K]?_t(Pe,p,Ma,2):K--)}}},_t=(f,u,p,v,g=null)=>{const{el:w,type:A,transition:x,children:k,shapeFlag:b}=f;if(b&6){_t(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,kt);return}if(A===Ne){r(w,u,p);for(let O=0;O<k.length;O++)_t(k[O],u,p,v);r(f.anchor,u,p);return}if(A===lr){z(f,u,p);return}if(v!==2&&b&1&&x)if(v===0)x.beforeEnter(w),r(w,u,p),he(()=>x.enter(w),g);else{const{leave:O,delayLeave:S,afterLeave:R}=x,H=()=>r(w,u,p),G=()=>{O(w,()=>{H(),R&&R()})};S?S(w,H,G):G()}else r(w,u,p)},Ve=(f,u,p,v=!1,g=!1)=>{const{type:w,props:A,ref:x,children:k,dynamicChildren:b,shapeFlag:P,patchFlag:O,dirs:S}=f;if(x!=null&&Or(x,null,p,f,!0),P&256){u.ctx.deactivate(f);return}const R=P&1&&S,H=!kr(f);let G;if(H&&(G=A&&A.onVnodeBeforeUnmount)&&Se(G,u,f),P&6)ks(f.component,p,v);else{if(P&128){f.suspense.unmount(p,v);return}R&&lt(f,null,u,"beforeUnmount"),P&64?f.type.remove(f,u,p,g,kt,v):b&&(w!==Ne||O>0&&O&64)?je(b,u,p,!1,!0):(w===Ne&&O&384||!g&&P&16)&&je(k,u,p),v&&Ia(f)}(H&&(G=A&&A.onVnodeUnmounted)||R)&&he(()=>{G&&Se(G,u,f),R&&lt(f,null,u,"unmounted")},p)},Ia=f=>{const{type:u,el:p,anchor:v,transition:g}=f;if(u===Ne){_s(p,v);return}if(u===lr){U(f);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:x}=g,k=()=>A(p,w);x?x(f.el,w,k):k()}else w()},_s=(f,u)=>{let p;for(;f!==u;)p=h(f),a(f),f=p;a(u)},ks=(f,u,p)=>{const{bum:v,scope:g,update:w,subTree:A,um:x}=f;v&&rr(v),g.stop(),w&&(w.active=!1,Ve(A,f,u,p)),x&&he(x,u),he(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,v=!1,g=!1,w=0)=>{for(let A=w;A<f.length;A++)Ve(f[A],u,p,v,g)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Pa=(f,u,p)=>{f==null?u._vnode&&Ve(u._vnode,null,null,!0):I(u._vnode||null,f,u,null,null,null,p),ho(),u._vnode=f},kt={p:I,um:Ve,m:_t,r:Ia,mt:wt,mc:W,pc:ze,pbc:ue,n:dn,o:e};let Zn,er;return t&&([Zn,er]=t(kt)),{render:Pa,hydrate:Zn,createApp:rf(Pa,Zn)}}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Do(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=tt(a[i]),s.el=o.el),n||Do(o,s))}}function sf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const lf=e=>e.__isTeleport,zo="components";function ff(e,t){return uf(zo,e,!0,t)||e}const cf=Symbol();function uf(e,t,n=!0,r=!1){const a=Ee||ie;if(a){const i=a.type;if(e===zo){const s=Of(i);if(s&&(s===t||s===Re(t)||s===Un(Re(t))))return i}const o=Ga(a[e]||i[e],t)||Ga(a.appContext[e],t);return!o&&r?i:o}}function Ga(e,t){return e&&(e[t]||e[Re(t)]||e[Un(Re(t))])}const Ne=Symbol(void 0),fa=Symbol(void 0),De=Symbol(void 0),lr=Symbol(void 0),Zt=[];let vt=null;function Lt(e=!1){Zt.push(vt=e?null:[])}function df(){Zt.pop(),vt=Zt[Zt.length-1]||null}let In=1;function Za(e){In+=e}function jo(e){return e.dynamicChildren=In>0?vt||Nt:null,df(),In>0&&vt&&vt.push(e),e}function ca(e,t,n,r,a,i){return jo(Z(e,t,n,r,a,i,!0))}function Tr(e,t,n,r,a){return jo(le(e,t,n,r,a,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function dt(e,t){return e.type===t.type&&e.key===t.key}const Kn="__vInternal",$o=({key:e})=>e!=null?e:null,wn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||se(e)||$(e)?{i:Ee,r:e,k:t,f:!!n}:e:null;function Z(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$o(t),ref:t&&wn(t),scopeId:bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),In>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const le=mf;function mf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cf)&&(e=De),Ir(e)){const s=Dt(e,t,!0);return n&&ua(s,n),s}if(Tf(e)&&(e=e.__vccOpts),t){t=pf(t);let{class:s,style:l}=t;s&&!ce(s)&&(t.class=Kr(s)),ae(l)&&(io(l)&&!D(l)&&(l=fe({},l)),t.style=Dn(l))}const o=ce(e)?1:Pl(e)?128:lf(e)?64:ae(e)?4:$(e)?2:0;return Z(e,t,n,r,a,o,i,!0)}function pf(e){return e?io(e)||Kn in e?fe({},e):e:null}function Dt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?vf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&$o(s),ref:t&&t.ref?n&&a?D(a)?a.concat(wn(t)):[a,wn(t)]:wn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor}}function hf(e=" ",t=0){return le(fa,null,e,t)}function gf(e="",t=!1){return t?(Lt(),Tr(De,null,e)):le(De,null,e)}function Me(e){return e==null||typeof e=="boolean"?le(De):D(e)?le(Ne,null,e.slice()):typeof e=="object"?tt(e):le(fa,null,String(e))}function tt(e){return e.el===null||e.memo?e:Dt(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Kn in t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[hf(t)]):n=8);e.children=t,e.shapeFlag|=n}function vf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Kr([t.class,r.class]));else if(a==="style")t.style=Dn([t.style,r.style]);else if(zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){ke(e,t,7,[n,r])}const Pr=e=>e?Uo(e)?da(e)||e.proxy:Pr(e.parent):null,Pn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Pr(e.parent),$root:e=>Pr(e.root),$emit:e=>e.emit,$options:e=>Po(e),$forceUpdate:e=>()=>uo(e.update),$nextTick:e=>xl.bind(e.proxy),$watch:e=>Ml.bind(e)}),bf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==q&&B(r,t))return o[t]=1,r[t];if(a!==q&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==q&&B(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Pn[t];let m,h;if(d)return t==="$attrs"&&be(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&B(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,B(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==q&&B(a,t)?(a[t]=n,!0):r!==q&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&B(e,o)||t!==q&&B(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Pn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?this.set(e,t,n.get(),null):n.value!=null&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},yf=Ro();let xf=0;function wf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||yf,i={uid:xf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,a),emitsOptions:vo(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Cl.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const _f=()=>ie||Ee,zt=e=>{ie=e,e.scope.on()},bt=()=>{ie&&ie.scope.off(),ie=null};function Uo(e){return e.vnode.shapeFlag&4}let ln=!1;function kf(e,t=!1){ln=t;const{props:n,children:r}=e.vnode,a=Uo(e);Jl(e,n,a,t),ef(e,r);const i=a?Af(e,t):void 0;return ln=!1,i}function Af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=oo(new Proxy(e.ctx,bf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ef(e):null;zt(e),$t();const i=at(r,e,0,[e.props,a]);if(Ut(),bt(),Bi(i)){if(i.then(bt,bt),t)return i.then(o=>{ei(e,o,t)}).catch(o=>{Bn(o,e,0)});e.asyncDep=i}else ei(e,i,t)}else Ho(e,t)}function ei(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=fo(t)),Ho(e,n)}let ti;function Ho(e,t,n){const r=e.type;if(!e.render){if(!t&&ti&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=ti(a,c)}}e.render=r.render||Te}zt(e),$t(),Kl(e),Ut(),bt()}function Cf(e){return new Proxy(e.attrs,{get(t,n){return be(e,"get","$attrs"),t[n]}})}function Ef(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Cf(e))},slots:e.slots,emit:e.emit,expose:t}}function da(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(fo(oo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pn)return Pn[n](e)}}))}function Of(e){return $(e)&&e.displayName||e.name}function Tf(e){return $(e)&&"__vccOpts"in e}const _e=(e,t)=>bl(e,t,ln);function ma(e,t,n){const r=arguments.length;return r===2?ae(t)&&!D(t)?Ir(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),le(e,t,n))}const If="3.2.31",Pf="http://www.w3.org/2000/svg",mt=typeof document!="undefined"?document:null,ni=mt&&mt.createElement("template"),Sf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(Pf,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r?`<svg>${e}</svg>`:e;const s=ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mf(e,t,n){const r=e.style,a=ce(n);if(n&&!a){for(const i in n)Sr(r,i,n[i]);if(t&&!ce(t))for(const i in t)n[i]==null&&Sr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ri=/\s*!important$/;function Sr(e,t,n){if(D(n))n.forEach(r=>Sr(e,t,r));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=Ff(e,t);ri.test(n)?e.setProperty(jt(r),n.replace(ri,""),"important"):e[r]=n}}const ai=["Webkit","Moz","ms"],fr={};function Ff(e,t){const n=fr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Un(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in e)return fr[t]=i}return t}const ii="http://www.w3.org/1999/xlink";function Lf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const i=Is(t);n==null||i&&!$i(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Rf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const s=n==null?"":n;(e.value!==s||e.tagName==="OPTION")&&(e.value=s),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const s=typeof e[t];if(s==="boolean"){e[t]=$i(n);return}else if(n==null&&s==="string"){e[t]="",e.removeAttribute(t);return}else if(s==="number"){try{e[t]=0}catch{}e.removeAttribute(t);return}}try{e[t]=n}catch{}}let Sn=Date.now,Bo=!1;if(typeof window!="undefined"){Sn()>document.createEvent("Event").timeStamp&&(Sn=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Bo=!!(e&&Number(e[1])<=53)}let Nr=0;const Df=Promise.resolve(),zf=()=>{Nr=0},jf=()=>Nr||(Df.then(zf),Nr=Sn());function $f(e,t,n,r){e.addEventListener(t,n,r)}function Uf(e,t,n,r){e.removeEventListener(t,n,r)}function Hf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Bf(t);if(r){const c=i[t]=Yf(r,a);$f(e,s,c,l)}else o&&(Uf(e,s,o,l),i[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function Bf(e){let t;if(oi.test(e)){t={};let n;for(;n=e.match(oi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[jt(e.slice(2)),t]}function Yf(e,t){const n=r=>{const a=r.timeStamp||Sn();(Bo||a>=n.attached-1)&&ke(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=jf(),n}function Wf(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,Kf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Nf(e,r,a):t==="style"?Mf(e,n,r):zn(t)?qr(t)||Hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qf(e,t,r,a))?Rf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Lf(e,t,r,a))};function qf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&ce(n)?!1:t in e}const Je="transition",Kt="animation",pa=(e,{slots:t})=>ma(_o,Qf(e),t);pa.displayName="Transition";const Yo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};pa.props=fe({},_o.props,Yo);const ct=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},li=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Qf(e){const t={};for(const M in e)M in Yo||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:d=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,T=Vf(a),L=T&&T[0],I=T&&T[1],{onBeforeEnter:y,onEnter:C,onEnterCancelled:F,onLeave:z,onLeaveCancelled:U,onBeforeAppear:te=y,onAppear:j=C,onAppearCancelled:Q=F}=t,W=(M,ne,Ie)=>{Ct(M,ne?d:s),Ct(M,ne?c:o),Ie&&Ie()},pe=(M,ne)=>{Ct(M,_),Ct(M,h),ne&&ne()},ue=M=>(ne,Ie)=>{const wt=M?j:C,oe=()=>W(ne,M,Ie);ct(wt,[ne,oe]),fi(()=>{Ct(ne,M?l:i),Ge(ne,M?d:s),li(wt)||ci(ne,r,L,oe)})};return fe(t,{onBeforeEnter(M){ct(y,[M]),Ge(M,i),Ge(M,o)},onBeforeAppear(M){ct(te,[M]),Ge(M,l),Ge(M,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(M,ne){const Ie=()=>pe(M,ne);Ge(M,m),Gf(),Ge(M,h),fi(()=>{Ct(M,m),Ge(M,_),li(z)||ci(M,r,I,Ie)}),ct(z,[M,Ie])},onEnterCancelled(M){W(M,!1),ct(F,[M])},onAppearCancelled(M){W(M,!0),ct(Q,[M])},onLeaveCancelled(M){pe(M),ct(U,[M])}})}function Vf(e){if(e==null)return null;if(ae(e))return[cr(e.enter),cr(e.leave)];{const t=cr(e);return[t,t]}}function cr(e){return Ki(e)}function Ge(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ct(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function fi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xf=0;function ci(e,t,n,r){const a=e._endId=++Xf,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=Jf(e,t);if(!o)return r();const c=o+"end";let d=0;const m=()=>{e.removeEventListener(c,h),i()},h=_=>{_.target===e&&++d>=l&&m()};setTimeout(()=>{d<l&&m()},s+1),e.addEventListener(c,h)}function Jf(e,t){const n=window.getComputedStyle(e),r=T=>(n[T]||"").split(", "),a=r(Je+"Delay"),i=r(Je+"Duration"),o=ui(a,i),s=r(Kt+"Delay"),l=r(Kt+"Duration"),c=ui(s,l);let d=null,m=0,h=0;t===Je?o>0&&(d=Je,m=o,h=i.length):t===Kt?c>0&&(d=Kt,m=c,h=l.length):(m=Math.max(o,c),d=m>0?o>c?Je:Kt:null,h=d?d===Je?i.length:l.length:0);const _=d===Je&&/\b(transform|all)(,|$)/.test(n[Je+"Property"]);return{type:d,timeout:m,propCount:h,hasTransform:_}}function ui(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>di(n)+di(e[r])))}function di(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Gf(){return document.body.offsetHeight}const Zf=fe({patchProp:Kf},Sf);let mi;function ec(){return mi||(mi=af(Zf))}const tc=(...e)=>{const t=ec().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=nc(r);if(!a)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function nc(e){return ce(e)?document.querySelector(e):e}const nt=class{};let we=nt;de(we,"_ghUsername","zyrouge"),de(we,"_ghRepo","upright-quotes"),de(we,"_ghDistBranch","gh-pages"),de(we,"github",`https://github.com/${nt._ghUsername}/${nt._ghRepo}`),de(we,"apiEndpoint",`https://${nt._ghUsername}.github.io/${nt._ghRepo}/api`),de(we,"apiDocs",`https://github.com/${nt._ghUsername}/${nt._ghRepo}/wiki/API-Documentation`);var ji;const Ue=class{static async getMeta(){return await(await Ue.request(Ue.getMetaJsonURL())).json()}static async getQuoteJson(t){return await(await Ue.request(Ue.getQuoteJsonURL(t))).json()}static getMetaJsonURL(){return`${Ue.url}/meta.json`}static getQuoteJsonURL(t){return`${Ue.url}/quotes/${t}.json`}static getQuoteImageURL(t){return`${Ue.url}/quotes/${t}.png`}static request(t,n){return fetch(t,La({cache:"no-cache"},n))}};let pt=Ue;de(pt,"url",(ji={BASE_URL:"/upright-quotes/",MODE:"production",DEV:!1,PROD:!0}.VITE_API_URL)!=null?ji:we.apiEndpoint);class re{}de(re,"UprightQuotes","UprightQuotes"),de(re,"MetadataWasNotFetched","Metadata was not fetched"),de(re,"GitHub","GitHub"),de(re,"API","API"),de(re,"RefreshQuote","Refresh Quote"),de(re,"ViewAsJSON","View as JSON"),de(re,"DownloadAsImage","Download as Image"),de(re,"QParamsIndex","index");class fn{static getUnrepeatedSecureRandomNumber(t=0,n=1,r=-1){const a=Math.floor(fn.getSecureRandomNumber()*n)+t;return a===r?fn.getUnrepeatedSecureRandomNumber(n,r):a}static getSecureRandomNumber(){return crypto.getRandomValues(new Uint8Array(1))[0]/256}static sleep(t){return new Promise(n=>{setTimeout(n,t)})}}const rc={class:"u-flex-center w-full min-h-screen"},ac={class:"u-flex-center flex-col"},ic=Z("div",{class:"mt-1 u-flex-center gap-0.5",id:"loader-container"},[Z("div",{id:"loader-child"}),Z("div",{id:"loader-child"}),Z("div",{id:"loader-child"})],-1),oc=Ht({setup(e){return(t,n)=>(Lt(),ca("div",rc,[Z("div",ac,[Z("div",null,Et(Ce(re).UprightQuotes),1),ic])]))}}),sc={class:"u-flex-center !justify-around w-full",id:"content-header"},lc=["title"],fc={class:"u-flex-center gap-6"},cc=["href"],uc=["href"],dc={class:"u-flex-center",id:"content-parent"},mc={id:"content"},pc={class:"text-3xl md:text-5xl font-bold"},hc={class:"mt-4 text-lg"},gc={class:"u-flex-center !justify-start gap-5 mt-4 text-xl"},vc=["title"],bc=["href","title"],yc=["href","title"],xc=Ht({props:{currentQuote:null,refreshQuote:null},setup(e){return(t,n)=>{const r=ff("Icon");return Lt(),ca("div",null,[Z("div",{id:"content-container",style:Dn({color:e.currentQuote.quote.color.contrast,backgroundColor:e.currentQuote.quote.color.primary})},[Z("div",sc,[Z("p",{class:"font-bold",title:Ce(re).RefreshQuote},[Z("button",{class:"u-link",onClick:n[0]||(n[0]=(...a)=>e.refreshQuote&&e.refreshQuote(...a))},Et(Ce(re).UprightQuotes),1)],8,lc),Z("div",fc,[Z("a",{class:"u-link",href:Ce(we).github,target:"_blank"},Et(Ce(re).GitHub),9,cc),Z("a",{class:"u-link",href:Ce(we).apiDocs,target:"_blank"},Et(Ce(re).API),9,uc)])]),Z("div",dc,[Z("div",mc,[Z("p",pc,Et(e.currentQuote.quote.quote),1),Z("p",hc," ~ "+Et(e.currentQuote.quote.author),1),Z("div",gc,[Z("button",{class:"u-link",onClick:n[1]||(n[1]=(...a)=>e.refreshQuote&&e.refreshQuote(...a)),title:Ce(re).RefreshQuote},[le(r,{icon:"arrow-rotate-right"})],8,vc),Z("a",{class:"u-link",href:e.currentQuote.json,title:Ce(re).ViewAsJSON,target:"_blank"},[le(r,{icon:"code"})],8,bc),Z("a",{class:"u-link",href:e.currentQuote.image,title:Ce(re).DownloadAsImage,target:"_blank"},[le(r,{icon:"image"})],8,yc)])])])],4)])}}}),wc={id:"app-container"},_c=Ht({setup(e){var s;const t=ar(!1),n=ar(null),r=async()=>{n.value=await pt.getMeta()};let a=parseInt((s=new URL(location.href).searchParams.get(re.QParamsIndex))!=null?s:"");const i=ar(null),o=async()=>{var h,_;if(!n.value)throw new Error(re.MetadataWasNotFetched);const l=typeof a=="number"&&!isNaN(a)&&a<n.value.size?a:fn.getUnrepeatedSecureRandomNumber(0,n.value.size,(_=(h=i.value)==null?void 0:h.index)!=null?_:-1),c=await pt.getQuoteJson(l),d=pt.getQuoteJsonURL(l),m=pt.getQuoteImageURL(l);i.value={index:l,quote:c,json:d,image:m},history.replaceState(void 0,"",`?${re.QParamsIndex}=${l}`),a=null};return(async()=>{const l=Date.now();await r(),await o();const c=Date.now()-l,d=750;await fn.sleep(c<d?d-c:0),t.value=!0})(),(l,c)=>(Lt(),ca("div",wc,[le(pa,{id:"app-container-t",name:"app-container-fade",mode:"out-in"},{default:yo(()=>[t.value?t.value&&i.value?(Lt(),Tr(xc,{key:i.value.index,currentQuote:i.value,refreshQuote:o},null,8,["currentQuote"])):gf("",!0):(Lt(),Tr(oc,{key:0}))]),_:1})]))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pi(Object(n),!0).forEach(function(r){Cc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nn(e){return Nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn(e)}function kc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ac(e,t,n){return t&&hi(e.prototype,t),n&&hi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ha(e,t){return Oc(e)||Ic(e,t)||Wo(e,t)||Sc()}function qn(e){return Ec(e)||Tc(e)||Wo(e)||Pc()}function Ec(e){if(Array.isArray(e))return Mr(e)}function Oc(e){if(Array.isArray(e))return e}function Tc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ic(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Wo(e,t){if(!!e){if(typeof e=="string")return Mr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e,t)}}function Mr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gi=function(){},ga={},Ko={},qo=null,Qo={mark:gi,measure:gi};try{typeof window!="undefined"&&(ga=window),typeof document!="undefined"&&(Ko=document),typeof MutationObserver!="undefined"&&(qo=MutationObserver),typeof performance!="undefined"&&(Qo=performance)}catch{}var Nc=ga.navigator||{},vi=Nc.userAgent,bi=vi===void 0?"":vi,ot=ga,J=Ko,yi=qo,bn=Qo;ot.document;var Qe=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Vo=~bi.indexOf("MSIE")||~bi.indexOf("Trident/"),Ye="___FONT_AWESOME___",Fr=16,Xo="fa",Jo="svg-inline--fa",yt="data-fa-i2svg",Lr="data-fa-pseudo-element",Mc="data-fa-pseudo-element-pending",va="data-prefix",ba="data-icon",xi="fontawesome-i2svg",Fc="async",Lc=["HTML","HEAD","STYLE","SCRIPT"],Go=function(){try{return!0}catch{return!1}}(),ya={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Mn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Zo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Rc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Dc=/fa[srltdbk\-\ ]/,es="fa-layers-text",zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,jc={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},ts=[1,2,3,4,5,6,7,8,9,10],$c=ts.concat([11,12,13,14,15,16,17,18,19,20]),Uc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hc=[].concat(qn(Object.keys(Mn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(ts.map(function(e){return"".concat(e,"x")})).concat($c.map(function(e){return"w-".concat(e)})),ns=ot.FontAwesomeConfig||{};function Bc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Wc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wc.forEach(function(e){var t=ha(e,2),n=t[0],r=t[1],a=Yc(Bc(n));a!=null&&(ns[r]=a)})}var Kc={familyPrefix:Xo,styleDefault:"solid",replacementClass:Jo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},en=E(E({},Kc),ns);en.autoReplaceSvg||(en.observeMutations=!1);var N={};Object.keys(en).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){en[e]=n,_n.forEach(function(r){return r(N)})},get:function(){return en[e]}})});ot.FontAwesomeConfig=N;var _n=[];function qc(e){return _n.push(e),function(){_n.splice(_n.indexOf(e),1)}}var Ze=Fr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qc(e){if(!(!e||!Qe)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var Vc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cn(){for(var e=12,t="";e-- >0;)t+=Vc[Math.random()*62|0];return t}function Bt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Bt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function rs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(rs(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wa(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function Jc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Gc(e){var t=e.transform,n=e.width,r=n===void 0?Fr:n,a=e.height,i=a===void 0?Fr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Vo?l+="translate(".concat(t.x/Ze-r/2,"em, ").concat(t.y/Ze-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ze,"em), calc(-50% + ").concat(t.y/Ze,"em)) "):l+="translate(".concat(t.x/Ze,"em, ").concat(t.y/Ze,"em) "),l+="scale(".concat(t.size/Ze*(t.flipX?-1:1),", ").concat(t.size/Ze*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Zc=`:root, :host {
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
}`;function as(){var e=Xo,t=Jo,n=N.familyPrefix,r=N.replacementClass,a=Zc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var wi=!1;function ur(){N.autoAddCss&&!wi&&(Qc(as()),wi=!0)}var eu={mixout:function(){return{dom:{css:as,insertCss:ur}}},hooks:function(){return{beforeDOMElementCreation:function(){ur()},beforeI2svg:function(){ur()}}}},We=ot||{};We[Ye]||(We[Ye]={});We[Ye].styles||(We[Ye].styles={});We[Ye].hooks||(We[Ye].hooks={});We[Ye].shims||(We[Ye].shims=[]);var Oe=We[Ye],is=[],tu=function e(){J.removeEventListener("DOMContentLoaded",e),Fn=1,is.map(function(t){return t()})},Fn=!1;Qe&&(Fn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Fn||J.addEventListener("DOMContentLoaded",tu));function nu(e){!Qe||(Fn?setTimeout(e,0):is.push(e))}function un(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?rs(e):"<".concat(t," ").concat(Xc(r),">").concat(i.map(un).join(""),"</").concat(t,">")}function _i(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ru(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=au(e);return t.length===1?t[0].toString(16):null}function iu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ki(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ki(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,ki(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var tn=Oe.styles,ou=Oe.shims,su=Object.values(Zo),_a=null,os={},ss={},ls={},fs={},cs={},lu=Object.keys(ya);function fu(e){return~Hc.indexOf(e)}function cu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fu(a)?a:null}var us=function(){var t=function(i){return dr(tn,function(o,s,l){return o[l]=dr(s,i,{}),o},{})};os=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ss=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),cs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in tn||N.autoFetchSvg,r=dr(ou,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ls=r.names,fs=r.unicodes,_a=Vn(N.styleDefault)};qc(function(e){_a=Vn(e.styleDefault)});us();function ka(e,t){return(os[e]||{})[t]}function uu(e,t){return(ss[e]||{})[t]}function Pt(e,t){return(cs[e]||{})[t]}function ds(e){return ls[e]||{prefix:null,iconName:null}}function du(e){var t=fs[e],n=ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return _a}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=ya[e],n=Mn[e]||Mn[t],r=e in Oe.styles?e:null;return n||r||null}function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=cu(N.familyPrefix,s);if(tn[s]?(s=su.includes(s)?Rc[s]:s,a=s,o.prefix=s):lu.indexOf(s)>-1?(a=s,o.prefix=Vn(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?ds(o.iconName):{},d=Pt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||d||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!tn.far&&tn.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},Aa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=st()||"fas"),i}var mu=function(){function e(){kc(this,e),this.definitions={}}return Ac(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=Zo[s];l&&Dr(l,o[s]),us()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ai=[],St={},Rt={},pu=Object.keys(Rt);function hu(e,t){var n=t.mixoutsTo;return Ai=e,St={},Object.keys(Rt).forEach(function(r){pu.indexOf(r)===-1&&delete Rt[r]}),Ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Nn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){St[o]||(St[o]=[]),St[o].push(i[o])})}r.provides&&r.provides(Rt)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=St[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=St[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ke(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rt[e]?Rt[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||st();if(!!t)return t=Pt(n,t)||t,_i(ms.definitions,n,t)||_i(Oe.styles,n,t)}var ms=new mu,gu=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,xt("noAuto")},vu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qe?(xt("beforeI2svg",t),Ke("pseudoElements2svg",t),Ke("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,nu(function(){yu({autoReplaceSvgRoot:n}),xt("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(Nn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vn(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(Dc))){var a=Xn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||st(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=st();return{prefix:i,iconName:Pt(i,t)||t}}}},ye={noAuto:gu,config:N,dom:vu,parse:bu,library:ms,findIconDefinition:jr,toHtml:un},yu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Oe.styles).length>0||N.autoFetchSvg)&&Qe&&N.autoReplaceSvg&&ye.dom.i2svg({node:r})};function Jn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return un(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Qe){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ca(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,h=e.watchable,_=h===void 0?!1:h,T=r.found?r:n,L=T.width,I=T.height,y=a==="fak",C=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(I)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/I*16*.0625,"em")}:{};_&&(F.attributes[yt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||cn())},children:[l]}),delete F.attributes.title);var U=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},z),m.styles)}),te=r.found&&n.found?Ke("generateAbstractMask",U)||{children:[],attributes:{}}:Ke("generateAbstractIcon",U)||{children:[],attributes:{}},j=te.children,Q=te.attributes;return U.children=j,U.attributes=Q,s?wu(U):xu(U)}function Ci(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[yt]="");var d=E({},o.styles);wa(a)&&(d.transform=Gc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function _u(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mr=Oe.styles;function $r(e){var t=e[0],n=e[1],r=e.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ku={found:!1,width:512,height:512};function Au(e,t){!Go&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=st()),new Promise(function(r,a){if(Ke("missingIconAbstract"),n==="fa"){var i=ds(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&mr[t]&&mr[t][e]){var o=mr[t][e];return r($r(o))}Au(e,t),r(E(E({},ku),{},{icon:N.showMissingIcons&&e?Ke("missingIconAbstract")||{}:{}}))})}var Ei=function(){},Hr=N.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ei,measure:Ei},Vt='FA "6.1.1"',Cu=function(t){return Hr.mark("".concat(Vt," ").concat(t," begins")),function(){return ps(t)}},ps=function(t){Hr.mark("".concat(Vt," ").concat(t," ends")),Hr.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},Ea={begin:Cu,end:ps},kn=function(){};function Oi(e){var t=e.getAttribute?e.getAttribute(yt):null;return typeof t=="string"}function Eu(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ba):null;return t&&n}function Ou(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Tu(){if(N.autoReplaceSvg===!0)return An.replace;var e=An[N.autoReplaceSvg];return e||An.replace}function Iu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Pu(e){return J.createElement(e)}function hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Iu:Pu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(hs(o,{ceFn:r}))}),a}function Su(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var An={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(hs(a),n)}),n.getAttribute(yt)===null&&N.keepOriginalSource){var r=J.createComment(Su(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(N.replacementClass))return An.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return un(s)}).join(`
`);n.setAttribute(yt,""),n.innerHTML=o}};function Ti(e){e()}function gs(e,t){var n=typeof t=="function"?t:kn;if(e.length===0)n();else{var r=Ti;N.mutateApproach===Fc&&(r=ot.requestAnimationFrame||Ti),r(function(){var a=Tu(),i=Ea.begin("mutate");e.map(a),i(),n()})}}var Oa=!1;function vs(){Oa=!0}function Br(){Oa=!1}var Ln=null;function Ii(e){if(!!yi&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?kn:t,r=e.nodeCallback,a=r===void 0?kn:r,i=e.pseudoElementsCallback,o=i===void 0?kn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Ln=new yi(function(c){if(!Oa){var d=st();Bt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Oi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Oi(m.target)&&~Uc.indexOf(m.attributeName))if(m.attributeName==="class"&&Eu(m.target)){var h=Xn(xa(m.target)),_=h.prefix,T=h.iconName;m.target.setAttribute(va,_||d),T&&m.target.setAttribute(ba,T)}else Ou(m.target)&&a(m.target)})}}),Qe&&Ln.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nu(){!Ln||Ln.disconnect()}function Mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Xn(xa(e));return a.prefix||(a.prefix=st()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=uu(a.prefix,e.innerText)||ka(a.prefix,Rr(e.innerText))),a}function Lu(e){var t=Bt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Lu(e),s=zr("parseNodeAttributes",{},e),l=t.styleParser?Mu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Du=Oe.styles;function bs(e){var t=N.autoReplaceSvg==="nest"?Pi(e,{styleParser:!1}):Pi(e);return~t.extra.classes.indexOf(es)?Ke("generateLayersText",e,t):Ke("generateSvgReplacementMutation",e,t)}function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qe)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=N.autoFetchSvg?Object.keys(ya):Object.keys(Du),o=[".".concat(es,":not([").concat(yt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(yt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Bt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ea.begin("onTree"),c=s.reduce(function(d,m){try{var h=bs(m);h&&d.push(h)}catch(_){Go||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(h){gs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),m(h)})})}function zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bs(e).then(function(n){n&&gs([n],t)})}function ju(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var $u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,h=m===void 0?null:m,_=n.titleId,T=_===void 0?null:_,L=n.classes,I=L===void 0?[]:L,y=n.attributes,C=y===void 0?{}:y,F=n.styles,z=F===void 0?{}:F;if(!!t){var U=t.prefix,te=t.iconName,j=t.icon;return Jn(E({type:"icon"},t),function(){return xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?C["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(T||cn()):(C["aria-hidden"]="true",C.focusable="false")),Ca({icons:{main:$r(j),mask:l?$r(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:te,transform:E(E({},Le),a),symbol:o,title:h,maskId:d,titleId:T,extra:{attributes:C,styles:z,classes:I}})})}},Uu={mixout:function(){return{icon:ju($u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Si,n.nodeCallback=zu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Si(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,T){Promise.all([Ur(a,s),d.iconName?Ur(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var I=ha(L,2),y=I[0],C=I[1];_([n,Ca({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return wa(o)&&(c=Ke("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Jn({type:"layer"},function(){xt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(qn(i)).join(" ")},children:o}]})}}}},Bu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Jn({type:"counter",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),_u({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(qn(s))}})})}}}},Yu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,h=r.styles,_=h===void 0?{}:h;return Jn({type:"text",content:n},function(){return xt("beforeDOMElementCreation",{content:n,params:r}),Ci({content:n,transform:E(E({},Le),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(N.familyPrefix,"-layers-text")].concat(qn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Vo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ci({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Wu=new RegExp('"',"ug"),Ni=[1105920,1112319];function Ku(e){var t=e.replace(Wu,""),n=iu(t,0),r=n>=Ni[0]&&n<=Ni[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Mi(e,t){var n="".concat(Mc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Bt(e.children),o=i.filter(function(te){return te.getAttribute(Lr)===t})[0],s=ot.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Mn[l[2].toLowerCase()]:jc[c],_=Ku(m),T=_.value,L=_.isSecondary,I=l[0].startsWith("FontAwesome"),y=ka(h,T),C=y;if(I){var F=du(T);F.iconName&&F.prefix&&(y=F.iconName,h=F.prefix)}if(y&&!L&&(!o||o.getAttribute(va)!==h||o.getAttribute(ba)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var z=Ru(),U=z.extra;U.attributes[Lr]=t,Ur(y,h).then(function(te){var j=Ca(E(E({},z),{},{icons:{main:te,mask:Aa()},prefix:h,iconName:C,extra:U,watchable:!0})),Q=J.createElement("svg");t==="::before"?e.insertBefore(Q,e.firstChild):e.appendChild(Q),Q.outerHTML=j.map(function(W){return un(W)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function qu(e){return Promise.all([Mi(e,"::before"),Mi(e,"::after")])}function Qu(e){return e.parentNode!==document.head&&!~Lc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Fi(e){if(!!Qe)return new Promise(function(t,n){var r=Bt(e.querySelectorAll("*")).filter(Qu).map(qu),a=Ea.begin("searchPseudoElements");vs(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Vu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;N.searchPseudoElements&&Fi(a)}}},Li=!1,Xu={mixout:function(){return{dom:{unwatch:function(){vs(),Li=!0}}}},hooks:function(){return{bootstrap:function(){Ii(zr("mutationObserverCallbacks",{}))},noAuto:function(){Nu()},watch:function(n){var r=n.observeMutationsRoot;Li?Br():Ii(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ri=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ju={mixout:function(){return{parse:{transform:function(n){return Ri(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ri(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gu(e){return e.tag==="g"?e.children:[e]}var Zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Xn(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=st()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,h=o.icon,_=Jc({transform:l,containerWidth:m,iconWidth:c}),T={tag:"rect",attributes:E(E({},pr),{},{fill:"white"})},L=d.children?{children:d.children.map(Di)}:{},I={tag:"g",attributes:E({},_.inner),children:[Di(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},L))]},y={tag:"g",attributes:E({},_.outer),children:[I]},C="mask-".concat(s||cn()),F="clip-".concat(s||cn()),z={tag:"mask",attributes:E(E({},pr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Gu(h)},z]};return r.push(U,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(C,")")},pr)}),{children:r,attributes:a}}}},ed={provides:function(t){var n=!1;ot.matchMedia&&(n=ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},td={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nd=[eu,Uu,Hu,Bu,Yu,Vu,Xu,Ju,Zu,ed,td];hu(nd,{mixoutsTo:ye});ye.noAuto;var ys=ye.config,rd=ye.library;ye.dom;var xs=ye.parse;ye.findIconDefinition;ye.toHtml;var ad=ye.icon;ye.layer;var id=ye.text;ye.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var od={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"]},sd={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"]},ld={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"]},fd=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function cd(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ud=cd(function(e){(function(t){var n=function(y,C,F){if(!c(C)||m(C)||h(C)||_(C)||l(C))return C;var z,U=0,te=0;if(d(C))for(z=[],te=C.length;U<te;U++)z.push(n(y,C[U],F));else{z={};for(var j in C)Object.prototype.hasOwnProperty.call(C,j)&&(z[y(j,F)]=n(y,C[j],F))}return z},r=function(y,C){C=C||{};var F=C.separator||"_",z=C.split||/(?=[A-Z])/;return y.split(z).join(F)},a=function(y){return T(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},_=function(y){return s.call(y)=="[object Boolean]"},T=function(y){return y=y-0,y===y},L=function(y,C){var F=C&&"process"in C?C.process:C;return typeof F!="function"?y:function(z,U){return F(z,y,U)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(L(a,C),y)},decamelizeKeys:function(y,C){return n(L(o,C),y,C)},pascalizeKeys:function(y,C){return n(L(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(fd)}),dd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},md=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Yr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ud.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function hd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ta(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=hd(d);break;case"style":l.style=pd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=md(n,["class","style"]);return ma(e.tag,Rn({},t,{class:a.class,style:Rn({},a.style,o)},a.attrs,s),r)}var ws=!1;try{ws=!0}catch{}function gd(){if(!ws&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xt({},e,t):{}}function vd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Xt(t,"fa-"+e.size,e.size!==null),Xt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Xt(t,"fa-pull-"+e.pull,e.pull!==null),Xt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":dd(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bd=Ht({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_e(function(){return zi(t.icon)}),i=_e(function(){return nn("classes",vd(t))}),o=_e(function(){return nn("transform",typeof t.transform=="string"?xs.transform(t.transform):t.transform)}),s=_e(function(){return nn("mask",zi(t.mask))}),l=_e(function(){return ad(a.value,Rn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});xn(l,function(d){if(!d)return gd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=_e(function(){return l.value?Ta(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ht({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ys.familyPrefix,i=_e(function(){return[a+"-layers"].concat(Yr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return ma("div",{class:i.value},r.default?r.default():[])}}});Ht({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ys.familyPrefix,i=_e(function(){return nn("classes",[].concat(Yr(t.counter?[a+"-layers-counter"]:[]),Yr(t.position?[a+"-layers-"+t.position]:[])))}),o=_e(function(){return nn("transform",typeof t.transform=="string"?xs.transform(t.transform):t.transform)}),s=_e(function(){var c=id(t.value.toString(),Rn({},o.value,i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=_e(function(){return Ta(s.value,{},r)});return function(){return l.value}}});rd.add(od,ld,sd);const yd=()=>{console.log(`Hello there! If you are here, you might be special! I appreciate your effort into opening the DevTools. But it would be nice if you check out ${we.github}!`)};yd();tc(_c).component("Icon",bd).mount("#app");
