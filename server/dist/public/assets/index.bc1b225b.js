(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&h(w)}).observe(document,{childList:!0,subtree:!0});function u(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerpolicy&&(m.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?m.credentials="include":g.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(g){if(g.ep)return;g.ep=!0;const m=u(g);fetch(g.href,m)}})();function Qa(s,r){const u=Object.create(null),h=s.split(",");for(let g=0;g<h.length;g++)u[h[g]]=!0;return r?g=>!!u[g.toLowerCase()]:g=>!!u[g]}const qh="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Zh=Qa(qh),Kh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jh=Qa(Kh);function uu(s){return!!s||s===""}function ra(s){if(De(s)){const r={};for(let u=0;u<s.length;u++){const h=s[u],g=et(h)?td(h):ra(h);if(g)for(const m in g)r[m]=g[m]}return r}else{if(et(s))return s;if(it(s))return s}}const Qh=/;(?![^(]*\))/g,ed=/:(.+)/;function td(s){const r={};return s.split(Qh).forEach(u=>{if(u){const h=u.split(ed);h.length>1&&(r[h[0].trim()]=h[1].trim())}}),r}function qt(s){let r="";if(et(s))r=s;else if(De(s))for(let u=0;u<s.length;u++){const h=qt(s[u]);h&&(r+=h+" ")}else if(it(s))for(const u in s)s[u]&&(r+=u+" ");return r.trim()}function id(s){if(!s)return null;let{class:r,style:u}=s;return r&&!et(r)&&(s.class=qt(r)),u&&(s.style=ra(u)),s}function sd(s,r){if(s.length!==r.length)return!1;let u=!0;for(let h=0;u&&h<s.length;h++)u=ki(s[h],r[h]);return u}function ki(s,r){if(s===r)return!0;let u=_o(s),h=_o(r);if(u||h)return u&&h?s.getTime()===r.getTime():!1;if(u=Js(s),h=Js(r),u||h)return s===r;if(u=De(s),h=De(r),u||h)return u&&h?sd(s,r):!1;if(u=it(s),h=it(r),u||h){if(!u||!h)return!1;const g=Object.keys(s).length,m=Object.keys(r).length;if(g!==m)return!1;for(const w in s){const D=s.hasOwnProperty(w),S=r.hasOwnProperty(w);if(D&&!S||!D&&S||!ki(s[w],r[w]))return!1}}return String(s)===String(r)}function en(s,r){return s.findIndex(u=>ki(u,r))}const ar=s=>et(s)?s:s==null?"":De(s)||it(s)&&(s.toString===hu||!Me(s.toString))?JSON.stringify(s,cu,2):String(s),cu=(s,r)=>r&&r.__v_isRef?cu(s,r.value):fs(r)?{[`Map(${r.size})`]:[...r.entries()].reduce((u,[h,g])=>(u[`${h} =>`]=g,u),{})}:Zi(r)?{[`Set(${r.size})`]:[...r.values()]}:it(r)&&!De(r)&&!du(r)?String(r):r,Ve={},ds=[],Vt=()=>{},ad=()=>!1,nd=/^on[^a-z]/,oa=s=>nd.test(s),Fr=s=>s.startsWith("onUpdate:"),tt=Object.assign,Rr=(s,r)=>{const u=s.indexOf(r);u>-1&&s.splice(u,1)},rd=Object.prototype.hasOwnProperty,Be=(s,r)=>rd.call(s,r),De=Array.isArray,fs=s=>la(s)==="[object Map]",Zi=s=>la(s)==="[object Set]",_o=s=>la(s)==="[object Date]",Me=s=>typeof s=="function",et=s=>typeof s=="string",Js=s=>typeof s=="symbol",it=s=>s!==null&&typeof s=="object",Or=s=>it(s)&&Me(s.then)&&Me(s.catch),hu=Object.prototype.toString,la=s=>hu.call(s),od=s=>la(s).slice(8,-1),du=s=>la(s)==="[object Object]",zr=s=>et(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Hs=Qa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=s=>{const r=Object.create(null);return u=>r[u]||(r[u]=s(u))},ld=/-(\w)/g,Rt=tn(s=>s.replace(ld,(r,u)=>u?u.toUpperCase():"")),ud=/\B([A-Z])/g,Zt=tn(s=>s.replace(ud,"-$1").toLowerCase()),ua=tn(s=>s.charAt(0).toUpperCase()+s.slice(1)),Xs=tn(s=>s?`on${ua(s)}`:""),xs=(s,r)=>!Object.is(s,r),gs=(s,r)=>{for(let u=0;u<s.length;u++)s[u](r)},Ha=(s,r,u)=>{Object.defineProperty(s,r,{configurable:!0,enumerable:!1,value:u})},Si=s=>{const r=parseFloat(s);return isNaN(r)?s:r};let Io;const cd=()=>Io||(Io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tt;class Br{constructor(r=!1){this.active=!0,this.effects=[],this.cleanups=[],!r&&Tt&&(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}run(r){if(this.active){const u=Tt;try{return Tt=this,r()}finally{Tt=u}}}on(){Tt=this}off(){Tt=this.parent}stop(r){if(this.active){let u,h;for(u=0,h=this.effects.length;u<h;u++)this.effects[u].stop();for(u=0,h=this.cleanups.length;u<h;u++)this.cleanups[u]();if(this.scopes)for(u=0,h=this.scopes.length;u<h;u++)this.scopes[u].stop(!0);if(this.parent&&!r){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function Nr(s){return new Br(s)}function fu(s,r=Tt){r&&r.active&&r.effects.push(s)}function hd(){return Tt}function dd(s){Tt&&Tt.cleanups.push(s)}const Hr=s=>{const r=new Set(s);return r.w=0,r.n=0,r},gu=s=>(s.w&Pi)>0,pu=s=>(s.n&Pi)>0,fd=({deps:s})=>{if(s.length)for(let r=0;r<s.length;r++)s[r].w|=Pi},gd=s=>{const{deps:r}=s;if(r.length){let u=0;for(let h=0;h<r.length;h++){const g=r[h];gu(g)&&!pu(g)?g.delete(s):r[u++]=g,g.w&=~Pi,g.n&=~Pi}r.length=u}},nr=new WeakMap;let Rs=0,Pi=1;const rr=30;let Wt;const Vi=Symbol(""),or=Symbol("");class ca{constructor(r,u=null,h){this.fn=r,this.scheduler=u,this.active=!0,this.deps=[],this.parent=void 0,fu(this,h)}run(){if(!this.active)return this.fn();let r=Wt,u=Ei;for(;r;){if(r===this)return;r=r.parent}try{return this.parent=Wt,Wt=this,Ei=!0,Pi=1<<++Rs,Rs<=rr?fd(this):Fo(this),this.fn()}finally{Rs<=rr&&gd(this),Pi=1<<--Rs,Wt=this.parent,Ei=u,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Fo(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(s){const{deps:r}=s;if(r.length){for(let u=0;u<r.length;u++)r[u].delete(s);r.length=0}}function pd(s,r){s.effect&&(s=s.effect.fn);const u=new ca(s);r&&(tt(u,r),r.scope&&fu(u,r.scope)),(!r||!r.lazy)&&u.run();const h=u.run.bind(u);return h.effect=u,h}function xd(s){s.effect.stop()}let Ei=!0;const xu=[];function Ki(){xu.push(Ei),Ei=!1}function Ji(){const s=xu.pop();Ei=s===void 0?!0:s}function Ot(s,r,u){if(Ei&&Wt){let h=nr.get(s);h||nr.set(s,h=new Map);let g=h.get(u);g||h.set(u,g=Hr()),mu(g)}}function mu(s,r){let u=!1;Rs<=rr?pu(s)||(s.n|=Pi,u=!gu(s)):u=!s.has(Wt),u&&(s.add(Wt),Wt.deps.push(s))}function oi(s,r,u,h,g,m){const w=nr.get(s);if(!w)return;let D=[];if(r==="clear")D=[...w.values()];else if(u==="length"&&De(s))w.forEach((S,_)=>{(_==="length"||_>=h)&&D.push(S)});else switch(u!==void 0&&D.push(w.get(u)),r){case"add":De(s)?zr(u)&&D.push(w.get("length")):(D.push(w.get(Vi)),fs(s)&&D.push(w.get(or)));break;case"delete":De(s)||(D.push(w.get(Vi)),fs(s)&&D.push(w.get(or)));break;case"set":fs(s)&&D.push(w.get(Vi));break}if(D.length===1)D[0]&&lr(D[0]);else{const S=[];for(const _ of D)_&&S.push(..._);lr(Hr(S))}}function lr(s,r){const u=De(s)?s:[...s];for(const h of u)h.computed&&Ro(h);for(const h of u)h.computed||Ro(h)}function Ro(s,r){(s!==Wt||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const md=Qa("__proto__,__v_isRef,__isVue"),bu=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Js)),bd=sn(),vd=sn(!1,!0),yd=sn(!0),wd=sn(!0,!0),Oo=Dd();function Dd(){const s={};return["includes","indexOf","lastIndexOf"].forEach(r=>{s[r]=function(...u){const h=_e(this);for(let m=0,w=this.length;m<w;m++)Ot(h,"get",m+"");const g=h[r](...u);return g===-1||g===!1?h[r](...u.map(_e)):g}}),["push","pop","shift","unshift","splice"].forEach(r=>{s[r]=function(...u){Ki();const h=_e(this)[r].apply(this,u);return Ji(),h}}),s}function sn(s=!1,r=!1){return function(h,g,m){if(g==="__v_isReactive")return!s;if(g==="__v_isReadonly")return s;if(g==="__v_isShallow")return r;if(g==="__v_raw"&&m===(s?r?Au:Cu:r?Eu:Du).get(h))return h;const w=De(h);if(!s&&w&&Be(Oo,g))return Reflect.get(Oo,g,m);const D=Reflect.get(h,g,m);return(Js(g)?bu.has(g):md(g))||(s||Ot(h,"get",g),r)?D:Qe(D)?w&&zr(g)?D:D.value:it(D)?s?Yr(D):li(D):D}}const Ed=vu(),Cd=vu(!0);function vu(s=!1){return function(u,h,g,m){let w=u[h];if(ms(w)&&Qe(w)&&!Qe(g))return!1;if(!s&&!ms(g)&&(Xa(g)||(g=_e(g),w=_e(w)),!De(u)&&Qe(w)&&!Qe(g)))return w.value=g,!0;const D=De(u)&&zr(h)?Number(h)<u.length:Be(u,h),S=Reflect.set(u,h,g,m);return u===_e(m)&&(D?xs(g,w)&&oi(u,"set",h,g):oi(u,"add",h,g)),S}}function Ad(s,r){const u=Be(s,r);s[r];const h=Reflect.deleteProperty(s,r);return h&&u&&oi(s,"delete",r,void 0),h}function kd(s,r){const u=Reflect.has(s,r);return(!Js(r)||!bu.has(r))&&Ot(s,"has",r),u}function Sd(s){return Ot(s,"iterate",De(s)?"length":Vi),Reflect.ownKeys(s)}const yu={get:bd,set:Ed,deleteProperty:Ad,has:kd,ownKeys:Sd},wu={get:yd,set(s,r){return!0},deleteProperty(s,r){return!0}},Pd=tt({},yu,{get:vd,set:Cd}),Td=tt({},wu,{get:wd}),Xr=s=>s,an=s=>Reflect.getPrototypeOf(s);function ya(s,r,u=!1,h=!1){s=s.__v_raw;const g=_e(s),m=_e(r);u||(r!==m&&Ot(g,"get",r),Ot(g,"get",m));const{has:w}=an(g),D=h?Xr:u?Vr:Qs;if(w.call(g,r))return D(s.get(r));if(w.call(g,m))return D(s.get(m));s!==g&&s.get(r)}function wa(s,r=!1){const u=this.__v_raw,h=_e(u),g=_e(s);return r||(s!==g&&Ot(h,"has",s),Ot(h,"has",g)),s===g?u.has(s):u.has(s)||u.has(g)}function Da(s,r=!1){return s=s.__v_raw,!r&&Ot(_e(s),"iterate",Vi),Reflect.get(s,"size",s)}function zo(s){s=_e(s);const r=_e(this);return an(r).has.call(r,s)||(r.add(s),oi(r,"add",s,s)),this}function Bo(s,r){r=_e(r);const u=_e(this),{has:h,get:g}=an(u);let m=h.call(u,s);m||(s=_e(s),m=h.call(u,s));const w=g.call(u,s);return u.set(s,r),m?xs(r,w)&&oi(u,"set",s,r):oi(u,"add",s,r),this}function No(s){const r=_e(this),{has:u,get:h}=an(r);let g=u.call(r,s);g||(s=_e(s),g=u.call(r,s)),h&&h.call(r,s);const m=r.delete(s);return g&&oi(r,"delete",s,void 0),m}function Ho(){const s=_e(this),r=s.size!==0,u=s.clear();return r&&oi(s,"clear",void 0,void 0),u}function Ea(s,r){return function(h,g){const m=this,w=m.__v_raw,D=_e(w),S=r?Xr:s?Vr:Qs;return!s&&Ot(D,"iterate",Vi),w.forEach((_,F)=>h.call(g,S(_),S(F),m))}}function Ca(s,r,u){return function(...h){const g=this.__v_raw,m=_e(g),w=fs(m),D=s==="entries"||s===Symbol.iterator&&w,S=s==="keys"&&w,_=g[s](...h),F=u?Xr:r?Vr:Qs;return!r&&Ot(m,"iterate",S?or:Vi),{next(){const{value:z,done:O}=_.next();return O?{value:z,done:O}:{value:D?[F(z[0]),F(z[1])]:F(z),done:O}},[Symbol.iterator](){return this}}}}function fi(s){return function(...r){return s==="delete"?!1:this}}function Ld(){const s={get(m){return ya(this,m)},get size(){return Da(this)},has:wa,add:zo,set:Bo,delete:No,clear:Ho,forEach:Ea(!1,!1)},r={get(m){return ya(this,m,!1,!0)},get size(){return Da(this)},has:wa,add:zo,set:Bo,delete:No,clear:Ho,forEach:Ea(!1,!0)},u={get(m){return ya(this,m,!0)},get size(){return Da(this,!0)},has(m){return wa.call(this,m,!0)},add:fi("add"),set:fi("set"),delete:fi("delete"),clear:fi("clear"),forEach:Ea(!0,!1)},h={get(m){return ya(this,m,!0,!0)},get size(){return Da(this,!0)},has(m){return wa.call(this,m,!0)},add:fi("add"),set:fi("set"),delete:fi("delete"),clear:fi("clear"),forEach:Ea(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{s[m]=Ca(m,!1,!1),u[m]=Ca(m,!0,!1),r[m]=Ca(m,!1,!0),h[m]=Ca(m,!0,!0)}),[s,u,r,h]}const[Md,_d,Id,Fd]=Ld();function nn(s,r){const u=r?s?Fd:Id:s?_d:Md;return(h,g,m)=>g==="__v_isReactive"?!s:g==="__v_isReadonly"?s:g==="__v_raw"?h:Reflect.get(Be(u,g)&&g in h?u:h,g,m)}const Rd={get:nn(!1,!1)},Od={get:nn(!1,!0)},zd={get:nn(!0,!1)},Bd={get:nn(!0,!0)},Du=new WeakMap,Eu=new WeakMap,Cu=new WeakMap,Au=new WeakMap;function Nd(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hd(s){return s.__v_skip||!Object.isExtensible(s)?0:Nd(od(s))}function li(s){return ms(s)?s:rn(s,!1,yu,Rd,Du)}function ku(s){return rn(s,!1,Pd,Od,Eu)}function Yr(s){return rn(s,!0,wu,zd,Cu)}function Xd(s){return rn(s,!0,Td,Bd,Au)}function rn(s,r,u,h,g){if(!it(s)||s.__v_raw&&!(r&&s.__v_isReactive))return s;const m=g.get(s);if(m)return m;const w=Hd(s);if(w===0)return s;const D=new Proxy(s,w===2?h:u);return g.set(s,D),D}function Kt(s){return ms(s)?Kt(s.__v_raw):!!(s&&s.__v_isReactive)}function ms(s){return!!(s&&s.__v_isReadonly)}function Xa(s){return!!(s&&s.__v_isShallow)}function Wr(s){return Kt(s)||ms(s)}function _e(s){const r=s&&s.__v_raw;return r?_e(r):s}function Lt(s){return Ha(s,"__v_skip",!0),s}const Qs=s=>it(s)?li(s):s,Vr=s=>it(s)?Yr(s):s;function jr(s){Ei&&Wt&&(s=_e(s),mu(s.dep||(s.dep=Hr())))}function on(s,r){s=_e(s),s.dep&&lr(s.dep)}function Qe(s){return!!(s&&s.__v_isRef===!0)}function kt(s){return Pu(s,!1)}function Su(s){return Pu(s,!0)}function Pu(s,r){return Qe(s)?s:new Yd(s,r)}class Yd{constructor(r,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?r:_e(r),this._value=u?r:Qs(r)}get value(){return jr(this),this._value}set value(r){r=this.__v_isShallow?r:_e(r),xs(r,this._rawValue)&&(this._rawValue=r,this._value=this.__v_isShallow?r:Qs(r),on(this))}}function Wd(s){on(s)}function Oe(s){return Qe(s)?s.value:s}const Vd={get:(s,r,u)=>Oe(Reflect.get(s,r,u)),set:(s,r,u,h)=>{const g=s[r];return Qe(g)&&!Qe(u)?(g.value=u,!0):Reflect.set(s,r,u,h)}};function Gr(s){return Kt(s)?s:new Proxy(s,Vd)}class jd{constructor(r){this.dep=void 0,this.__v_isRef=!0;const{get:u,set:h}=r(()=>jr(this),()=>on(this));this._get=u,this._set=h}get value(){return this._get()}set value(r){this._set(r)}}function Gd(s){return new jd(s)}function ur(s){const r=De(s)?new Array(s.length):{};for(const u in s)r[u]=Ys(s,u);return r}class Ud{constructor(r,u,h){this._object=r,this._key=u,this._defaultValue=h,this.__v_isRef=!0}get value(){const r=this._object[this._key];return r===void 0?this._defaultValue:r}set value(r){this._object[this._key]=r}}function Ys(s,r,u){const h=s[r];return Qe(h)?h:new Ud(s,r,u)}class $d{constructor(r,u,h,g){this._setter=u,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ca(r,()=>{this._dirty||(this._dirty=!0,on(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=h}get value(){const r=_e(this);return jr(r),(r._dirty||!r._cacheable)&&(r._dirty=!1,r._value=r.effect.run()),r._value}set value(r){this._setter(r)}}function qd(s,r,u=!1){let h,g;const m=Me(s);return m?(h=s,g=Vt):(h=s.get,g=s.set),new $d(h,g,m||!g,u)}const Ws=[];function Tu(s,...r){Ki();const u=Ws.length?Ws[Ws.length-1].component:null,h=u&&u.appContext.config.warnHandler,g=Zd();if(h)Jt(h,u,11,[s+r.join(""),u&&u.proxy,g.map(({vnode:m})=>`at <${Cc(u,m.type)}>`).join(`
`),g]);else{const m=[`[Vue warn]: ${s}`,...r];g.length&&m.push(`
`,...Kd(g)),console.warn(...m)}Ji()}function Zd(){let s=Ws[Ws.length-1];if(!s)return[];const r=[];for(;s;){const u=r[0];u&&u.vnode===s?u.recurseCount++:r.push({vnode:s,recurseCount:0});const h=s.component&&s.component.parent;s=h&&h.vnode}return r}function Kd(s){const r=[];return s.forEach((u,h)=>{r.push(...h===0?[]:[`
`],...Jd(u))}),r}function Jd({vnode:s,recurseCount:r}){const u=r>0?`... (${r} recursive calls)`:"",h=s.component?s.component.parent==null:!1,g=` at <${Cc(s.component,s.type,h)}`,m=">"+u;return s.props?[g,...Qd(s.props),m]:[g+m]}function Qd(s){const r=[],u=Object.keys(s);return u.slice(0,3).forEach(h=>{r.push(...Lu(h,s[h]))}),u.length>3&&r.push(" ..."),r}function Lu(s,r,u){return et(r)?(r=JSON.stringify(r),u?r:[`${s}=${r}`]):typeof r=="number"||typeof r=="boolean"||r==null?u?r:[`${s}=${r}`]:Qe(r)?(r=Lu(s,_e(r.value),!0),u?r:[`${s}=Ref<`,r,">"]):Me(r)?[`${s}=fn${r.name?`<${r.name}>`:""}`]:(r=_e(r),u?r:[`${s}=`,r])}function Jt(s,r,u,h){let g;try{g=h?s(...h):s()}catch(m){Qi(m,r,u)}return g}function It(s,r,u,h){if(Me(s)){const m=Jt(s,r,u,h);return m&&Or(m)&&m.catch(w=>{Qi(w,r,u)}),m}const g=[];for(let m=0;m<s.length;m++)g.push(It(s[m],r,u,h));return g}function Qi(s,r,u,h=!0){const g=r?r.vnode:null;if(r){let m=r.parent;const w=r.proxy,D=u;for(;m;){const _=m.ec;if(_){for(let F=0;F<_.length;F++)if(_[F](s,w,D)===!1)return}m=m.parent}const S=r.appContext.config.errorHandler;if(S){Jt(S,null,10,[s,w,D]);return}}ef(s,u,g,h)}function ef(s,r,u,h=!0){console.error(s)}let Ya=!1,cr=!1;const _t=[];let ni=0;const Vs=[];let Os=null,rs=0;const js=[];let mi=null,os=0;const Mu=Promise.resolve();let Ur=null,hr=null;function bs(s){const r=Ur||Mu;return s?r.then(this?s.bind(this):s):r}function tf(s){let r=ni+1,u=_t.length;for(;r<u;){const h=r+u>>>1;ea(_t[h])<s?r=h+1:u=h}return r}function $r(s){(!_t.length||!_t.includes(s,Ya&&s.allowRecurse?ni+1:ni))&&s!==hr&&(s.id==null?_t.push(s):_t.splice(tf(s.id),0,s),_u())}function _u(){!Ya&&!cr&&(cr=!0,Ur=Mu.then(Fu))}function sf(s){const r=_t.indexOf(s);r>ni&&_t.splice(r,1)}function Iu(s,r,u,h){De(s)?u.push(...s):(!r||!r.includes(s,s.allowRecurse?h+1:h))&&u.push(s),_u()}function af(s){Iu(s,Os,Vs,rs)}function qr(s){Iu(s,mi,js,os)}function ln(s,r=null){if(Vs.length){for(hr=r,Os=[...new Set(Vs)],Vs.length=0,rs=0;rs<Os.length;rs++)Os[rs]();Os=null,rs=0,hr=null,ln(s,r)}}function Wa(s){if(ln(),js.length){const r=[...new Set(js)];if(js.length=0,mi){mi.push(...r);return}for(mi=r,mi.sort((u,h)=>ea(u)-ea(h)),os=0;os<mi.length;os++)mi[os]();mi=null,os=0}}const ea=s=>s.id==null?1/0:s.id;function Fu(s){cr=!1,Ya=!0,ln(s),_t.sort((u,h)=>ea(u)-ea(h));const r=Vt;try{for(ni=0;ni<_t.length;ni++){const u=_t[ni];u&&u.active!==!1&&Jt(u,null,14)}}finally{ni=0,_t.length=0,Wa(),Ya=!1,Ur=null,(_t.length||Vs.length||js.length)&&Fu(s)}}let ls,Aa=[];function Ru(s,r){var u,h;ls=s,ls?(ls.enabled=!0,Aa.forEach(({event:g,args:m})=>ls.emit(g,...m)),Aa=[]):typeof window<"u"&&window.HTMLElement&&!(!((h=(u=window.navigator)===null||u===void 0?void 0:u.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((r.__VUE_DEVTOOLS_HOOK_REPLAY__=r.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{Ru(m,r)}),setTimeout(()=>{ls||(r.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Aa=[])},3e3)):Aa=[]}function nf(s,r,...u){if(s.isUnmounted)return;const h=s.vnode.props||Ve;let g=u;const m=r.startsWith("update:"),w=m&&r.slice(7);if(w&&w in h){const F=`${w==="modelValue"?"model":w}Modifiers`,{number:z,trim:O}=h[F]||Ve;O&&(g=u.map(W=>W.trim())),z&&(g=u.map(Si))}let D,S=h[D=Xs(r)]||h[D=Xs(Rt(r))];!S&&m&&(S=h[D=Xs(Zt(r))]),S&&It(S,s,6,g);const _=h[D+"Once"];if(_){if(!s.emitted)s.emitted={};else if(s.emitted[D])return;s.emitted[D]=!0,It(_,s,6,g)}}function Ou(s,r,u=!1){const h=r.emitsCache,g=h.get(s);if(g!==void 0)return g;const m=s.emits;let w={},D=!1;if(!Me(s)){const S=_=>{const F=Ou(_,r,!0);F&&(D=!0,tt(w,F))};!u&&r.mixins.length&&r.mixins.forEach(S),s.extends&&S(s.extends),s.mixins&&s.mixins.forEach(S)}return!m&&!D?(h.set(s,null),null):(De(m)?m.forEach(S=>w[S]=null):tt(w,m),h.set(s,w),w)}function un(s,r){return!s||!oa(r)?!1:(r=r.slice(2).replace(/Once$/,""),Be(s,r[0].toLowerCase()+r.slice(1))||Be(s,Zt(r))||Be(s,r))}let xt=null,cn=null;function ta(s){const r=xt;return xt=s,cn=s&&s.type.__scopeId||null,r}function rf(s){cn=s}function of(){cn=null}const lf=s=>ia;function ia(s,r=xt,u){if(!r||s._n)return s;const h=(...g)=>{h._d&&br(-1);const m=ta(r),w=s(...g);return ta(m),h._d&&br(1),w};return h._n=!0,h._c=!0,h._d=!0,h}function Ia(s){const{type:r,vnode:u,proxy:h,withProxy:g,props:m,propsOptions:[w],slots:D,attrs:S,emit:_,render:F,renderCache:z,data:O,setupState:W,ctx:$,inheritAttrs:K}=s;let se,V;const P=ta(s);try{if(u.shapeFlag&4){const Z=g||h;se=Mt(F.call(Z,Z,z,m,W,O,$)),V=S}else{const Z=r;se=Mt(Z.length>1?Z(m,{attrs:S,slots:D,emit:_}):Z(m,null)),V=r.props?S:cf(S)}}catch(Z){$s.length=0,Qi(Z,s,1),se=Re(mt)}let j=se;if(V&&K!==!1){const Z=Object.keys(V),{shapeFlag:H}=j;Z.length&&H&7&&(w&&Z.some(Fr)&&(V=hf(V,w)),j=ei(j,V))}return u.dirs&&(j=ei(j),j.dirs=j.dirs?j.dirs.concat(u.dirs):u.dirs),u.transition&&(j.transition=u.transition),se=j,ta(P),se}function uf(s){let r;for(let u=0;u<s.length;u++){const h=s[u];if(Li(h)){if(h.type!==mt||h.children==="v-if"){if(r)return;r=h}}else return}return r}const cf=s=>{let r;for(const u in s)(u==="class"||u==="style"||oa(u))&&((r||(r={}))[u]=s[u]);return r},hf=(s,r)=>{const u={};for(const h in s)(!Fr(h)||!(h.slice(9)in r))&&(u[h]=s[h]);return u};function df(s,r,u){const{props:h,children:g,component:m}=s,{props:w,children:D,patchFlag:S}=r,_=m.emitsOptions;if(r.dirs||r.transition)return!0;if(u&&S>=0){if(S&1024)return!0;if(S&16)return h?Xo(h,w,_):!!w;if(S&8){const F=r.dynamicProps;for(let z=0;z<F.length;z++){const O=F[z];if(w[O]!==h[O]&&!un(_,O))return!0}}}else return(g||D)&&(!D||!D.$stable)?!0:h===w?!1:h?w?Xo(h,w,_):!0:!!w;return!1}function Xo(s,r,u){const h=Object.keys(r);if(h.length!==Object.keys(s).length)return!0;for(let g=0;g<h.length;g++){const m=h[g];if(r[m]!==s[m]&&!un(u,m))return!0}return!1}function Zr({vnode:s,parent:r},u){for(;r&&r.subTree===s;)(s=r.vnode).el=u,r=r.parent}const zu=s=>s.__isSuspense,ff={name:"Suspense",__isSuspense:!0,process(s,r,u,h,g,m,w,D,S,_){s==null?pf(r,u,h,g,m,w,D,S,_):xf(s,r,u,h,g,w,D,S,_)},hydrate:mf,create:Kr,normalize:bf},gf=ff;function sa(s,r){const u=s.props&&s.props[r];Me(u)&&u()}function pf(s,r,u,h,g,m,w,D,S){const{p:_,o:{createElement:F}}=S,z=F("div"),O=s.suspense=Kr(s,g,h,r,z,u,m,w,D,S);_(null,O.pendingBranch=s.ssContent,z,null,h,O,m,w),O.deps>0?(sa(s,"onPending"),sa(s,"onFallback"),_(null,s.ssFallback,r,u,h,null,m,w),ps(O,s.ssFallback)):O.resolve()}function xf(s,r,u,h,g,m,w,D,{p:S,um:_,o:{createElement:F}}){const z=r.suspense=s.suspense;z.vnode=r,r.el=s.el;const O=r.ssContent,W=r.ssFallback,{activeBranch:$,pendingBranch:K,isInFallback:se,isHydrating:V}=z;if(K)z.pendingBranch=O,$t(O,K)?(S(K,O,z.hiddenContainer,null,g,z,m,w,D),z.deps<=0?z.resolve():se&&(S($,W,u,h,g,null,m,w,D),ps(z,W))):(z.pendingId++,V?(z.isHydrating=!1,z.activeBranch=K):_(K,g,z),z.deps=0,z.effects.length=0,z.hiddenContainer=F("div"),se?(S(null,O,z.hiddenContainer,null,g,z,m,w,D),z.deps<=0?z.resolve():(S($,W,u,h,g,null,m,w,D),ps(z,W))):$&&$t(O,$)?(S($,O,u,h,g,z,m,w,D),z.resolve(!0)):(S(null,O,z.hiddenContainer,null,g,z,m,w,D),z.deps<=0&&z.resolve()));else if($&&$t(O,$))S($,O,u,h,g,z,m,w,D),ps(z,O);else if(sa(r,"onPending"),z.pendingBranch=O,z.pendingId++,S(null,O,z.hiddenContainer,null,g,z,m,w,D),z.deps<=0)z.resolve();else{const{timeout:P,pendingId:j}=z;P>0?setTimeout(()=>{z.pendingId===j&&z.fallback(W)},P):P===0&&z.fallback(W)}}function Kr(s,r,u,h,g,m,w,D,S,_,F=!1){const{p:z,m:O,um:W,n:$,o:{parentNode:K,remove:se}}=_,V=Si(s.props&&s.props.timeout),P={vnode:s,parent:r,parentComponent:u,isSVG:w,container:h,hiddenContainer:g,anchor:m,deps:0,pendingId:0,timeout:typeof V=="number"?V:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:F,isUnmounted:!1,effects:[],resolve(j=!1){const{vnode:Z,activeBranch:H,pendingBranch:ue,pendingId:J,effects:te,parentComponent:re,container:Q}=P;if(P.isHydrating)P.isHydrating=!1;else if(!j){const ye=H&&ue.transition&&ue.transition.mode==="out-in";ye&&(H.transition.afterLeave=()=>{J===P.pendingId&&O(ue,Q,ge,0)});let{anchor:ge}=P;H&&(ge=$(H),W(H,re,P,!0)),ye||O(ue,Q,ge,0)}ps(P,ue),P.pendingBranch=null,P.isInFallback=!1;let le=P.parent,ie=!1;for(;le;){if(le.pendingBranch){le.effects.push(...te),ie=!0;break}le=le.parent}ie||qr(te),P.effects=[],sa(Z,"onResolve")},fallback(j){if(!P.pendingBranch)return;const{vnode:Z,activeBranch:H,parentComponent:ue,container:J,isSVG:te}=P;sa(Z,"onFallback");const re=$(H),Q=()=>{!P.isInFallback||(z(null,j,J,re,ue,null,te,D,S),ps(P,j))},le=j.transition&&j.transition.mode==="out-in";le&&(H.transition.afterLeave=Q),P.isInFallback=!0,W(H,ue,null,!0),le||Q()},move(j,Z,H){P.activeBranch&&O(P.activeBranch,j,Z,H),P.container=j},next(){return P.activeBranch&&$(P.activeBranch)},registerDep(j,Z){const H=!!P.pendingBranch;H&&P.deps++;const ue=j.vnode.el;j.asyncDep.catch(J=>{Qi(J,j,0)}).then(J=>{if(j.isUnmounted||P.isUnmounted||P.pendingId!==j.suspenseId)return;j.asyncResolved=!0;const{vnode:te}=j;vr(j,J,!1),ue&&(te.el=ue);const re=!ue&&j.subTree.el;Z(j,te,K(ue||j.subTree.el),ue?null:$(j.subTree),P,w,S),re&&se(re),Zr(j,te.el),H&&--P.deps===0&&P.resolve()})},unmount(j,Z){P.isUnmounted=!0,P.activeBranch&&W(P.activeBranch,u,j,Z),P.pendingBranch&&W(P.pendingBranch,u,j,Z)}};return P}function mf(s,r,u,h,g,m,w,D,S){const _=r.suspense=Kr(r,h,u,s.parentNode,document.createElement("div"),null,g,m,w,D,!0),F=S(s,_.pendingBranch=r.ssContent,u,_,m,w);return _.deps===0&&_.resolve(),F}function bf(s){const{shapeFlag:r,children:u}=s,h=r&32;s.ssContent=Yo(h?u.default:u),s.ssFallback=h?Yo(u.fallback):Re(mt)}function Yo(s){let r;if(Me(s)){const u=$i&&s._c;u&&(s._d=!1,Ze()),s=s(),u&&(s._d=!0,r=At,gc())}return De(s)&&(s=uf(s)),s=Mt(s),r&&!s.dynamicChildren&&(s.dynamicChildren=r.filter(u=>u!==s)),s}function Bu(s,r){r&&r.pendingBranch?De(s)?r.effects.push(...s):r.effects.push(s):qr(s)}function ps(s,r){s.activeBranch=r;const{vnode:u,parentComponent:h}=s,g=u.el=r.el;h&&h.subTree===u&&(h.vnode.el=g,Zr(h,g))}function Gs(s,r){if(nt){let u=nt.provides;const h=nt.parent&&nt.parent.provides;h===u&&(u=nt.provides=Object.create(h)),u[s]=r}}function Ft(s,r,u=!1){const h=nt||xt;if(h){const g=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(g&&s in g)return g[s];if(arguments.length>1)return u&&Me(r)?r.call(h.proxy):r}}function Nu(s,r){return ha(s,null,r)}function Hu(s,r){return ha(s,null,{flush:"post"})}function vf(s,r){return ha(s,null,{flush:"sync"})}const Wo={};function Ci(s,r,u){return ha(s,r,u)}function ha(s,r,{immediate:u,deep:h,flush:g,onTrack:m,onTrigger:w}=Ve){const D=nt;let S,_=!1,F=!1;if(Qe(s)?(S=()=>s.value,_=Xa(s)):Kt(s)?(S=()=>s,h=!0):De(s)?(F=!0,_=s.some(V=>Kt(V)||Xa(V)),S=()=>s.map(V=>{if(Qe(V))return V.value;if(Kt(V))return Wi(V);if(Me(V))return Jt(V,D,2)})):Me(s)?r?S=()=>Jt(s,D,2):S=()=>{if(!(D&&D.isUnmounted))return z&&z(),It(s,D,3,[O])}:S=Vt,r&&h){const V=S;S=()=>Wi(V())}let z,O=V=>{z=se.onStop=()=>{Jt(V,D,4)}};if(ws)return O=Vt,r?u&&It(r,D,3,[S(),F?[]:void 0,O]):S(),Vt;let W=F?[]:Wo;const $=()=>{if(!!se.active)if(r){const V=se.run();(h||_||(F?V.some((P,j)=>xs(P,W[j])):xs(V,W)))&&(z&&z(),It(r,D,3,[V,W===Wo?void 0:W,O]),W=V)}else se.run()};$.allowRecurse=!!r;let K;g==="sync"?K=$:g==="post"?K=()=>ht($,D&&D.suspense):K=()=>af($);const se=new ca(S,K);return r?u?$():W=se.run():g==="post"?ht(se.run.bind(se),D&&D.suspense):se.run(),()=>{se.stop(),D&&D.scope&&Rr(D.scope.effects,se)}}function yf(s,r,u){const h=this.proxy,g=et(s)?s.includes(".")?Xu(h,s):()=>h[s]:s.bind(h,h);let m;Me(r)?m=r:(m=r.handler,u=r);const w=nt;Mi(this);const D=ha(g,m.bind(h),u);return w?Mi(w):Ai(),D}function Xu(s,r){const u=r.split(".");return()=>{let h=s;for(let g=0;g<u.length&&h;g++)h=h[u[g]];return h}}function Wi(s,r){if(!it(s)||s.__v_skip||(r=r||new Set,r.has(s)))return s;if(r.add(s),Qe(s))Wi(s.value,r);else if(De(s))for(let u=0;u<s.length;u++)Wi(s[u],r);else if(Zi(s)||fs(s))s.forEach(u=>{Wi(u,r)});else if(du(s))for(const u in s)Wi(s[u],r);return s}function Jr(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fa(()=>{s.isMounted=!0}),gn(()=>{s.isUnmounting=!0}),s}const Bt=[Function,Array],wf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},setup(s,{slots:r}){const u=ti(),h=Jr();let g;return()=>{const m=r.default&&hn(r.default(),!0);if(!m||!m.length)return;let w=m[0];if(m.length>1){for(const K of m)if(K.type!==mt){w=K;break}}const D=_e(s),{mode:S}=D;if(h.isLeaving)return In(w);const _=Vo(w);if(!_)return In(w);const F=vs(_,D,h,u);Ui(_,F);const z=u.subTree,O=z&&Vo(z);let W=!1;const{getTransitionKey:$}=_.type;if($){const K=$();g===void 0?g=K:K!==g&&(g=K,W=!0)}if(O&&O.type!==mt&&(!$t(_,O)||W)){const K=vs(O,D,h,u);if(Ui(O,K),S==="out-in")return h.isLeaving=!0,K.afterLeave=()=>{h.isLeaving=!1,u.update()},In(w);S==="in-out"&&_.type!==mt&&(K.delayLeave=(se,V,P)=>{const j=Yu(h,O);j[String(O.key)]=O,se._leaveCb=()=>{V(),se._leaveCb=void 0,delete F.delayedLeave},F.delayedLeave=P})}return w}}},Qr=wf;function Yu(s,r){const{leavingVNodes:u}=s;let h=u.get(r.type);return h||(h=Object.create(null),u.set(r.type,h)),h}function vs(s,r,u,h){const{appear:g,mode:m,persisted:w=!1,onBeforeEnter:D,onEnter:S,onAfterEnter:_,onEnterCancelled:F,onBeforeLeave:z,onLeave:O,onAfterLeave:W,onLeaveCancelled:$,onBeforeAppear:K,onAppear:se,onAfterAppear:V,onAppearCancelled:P}=r,j=String(s.key),Z=Yu(u,s),H=(te,re)=>{te&&It(te,h,9,re)},ue=(te,re)=>{const Q=re[1];H(te,re),De(te)?te.every(le=>le.length<=1)&&Q():te.length<=1&&Q()},J={mode:m,persisted:w,beforeEnter(te){let re=D;if(!u.isMounted)if(g)re=K||D;else return;te._leaveCb&&te._leaveCb(!0);const Q=Z[j];Q&&$t(s,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),H(re,[te])},enter(te){let re=S,Q=_,le=F;if(!u.isMounted)if(g)re=se||S,Q=V||_,le=P||F;else return;let ie=!1;const ye=te._enterCb=ge=>{ie||(ie=!0,ge?H(le,[te]):H(Q,[te]),J.delayedLeave&&J.delayedLeave(),te._enterCb=void 0)};re?ue(re,[te,ye]):ye()},leave(te,re){const Q=String(s.key);if(te._enterCb&&te._enterCb(!0),u.isUnmounting)return re();H(z,[te]);let le=!1;const ie=te._leaveCb=ye=>{le||(le=!0,re(),ye?H($,[te]):H(W,[te]),te._leaveCb=void 0,Z[Q]===s&&delete Z[Q])};Z[Q]=s,O?ue(O,[te,ie]):ie()},clone(te){return vs(te,r,u,h)}};return J}function In(s){if(da(s))return s=ei(s),s.children=null,s}function Vo(s){return da(s)?s.children?s.children[0]:void 0:s}function Ui(s,r){s.shapeFlag&6&&s.component?Ui(s.component.subTree,r):s.shapeFlag&128?(s.ssContent.transition=r.clone(s.ssContent),s.ssFallback.transition=r.clone(s.ssFallback)):s.transition=r}function hn(s,r=!1,u){let h=[],g=0;for(let m=0;m<s.length;m++){let w=s[m];const D=u==null?w.key:String(u)+String(w.key!=null?w.key:m);w.type===at?(w.patchFlag&128&&g++,h=h.concat(hn(w.children,r,D))):(r||w.type!==mt)&&h.push(D!=null?ei(w,{key:D}):w)}if(g>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}function ui(s){return Me(s)?{setup:s,name:s.name}:s}const ji=s=>!!s.type.__asyncLoader;function Df(s){Me(s)&&(s={loader:s});const{loader:r,loadingComponent:u,errorComponent:h,delay:g=200,timeout:m,suspensible:w=!0,onError:D}=s;let S=null,_,F=0;const z=()=>(F++,S=null,O()),O=()=>{let W;return S||(W=S=r().catch($=>{if($=$ instanceof Error?$:new Error(String($)),D)return new Promise((K,se)=>{D($,()=>K(z()),()=>se($),F+1)});throw $}).then($=>W!==S&&S?S:($&&($.__esModule||$[Symbol.toStringTag]==="Module")&&($=$.default),_=$,$)))};return ui({name:"AsyncComponentWrapper",__asyncLoader:O,get __asyncResolved(){return _},setup(){const W=nt;if(_)return()=>Fn(_,W);const $=P=>{S=null,Qi(P,W,13,!h)};if(w&&W.suspense||ws)return O().then(P=>()=>Fn(P,W)).catch(P=>($(P),()=>h?Re(h,{error:P}):null));const K=kt(!1),se=kt(),V=kt(!!g);return g&&setTimeout(()=>{V.value=!1},g),m!=null&&setTimeout(()=>{if(!K.value&&!se.value){const P=new Error(`Async component timed out after ${m}ms.`);$(P),se.value=P}},m),O().then(()=>{K.value=!0,W.parent&&da(W.parent.vnode)&&$r(W.parent.update)}).catch(P=>{$(P),se.value=P}),()=>{if(K.value&&_)return Fn(_,W);if(se.value&&h)return Re(h,{error:se.value});if(u&&!V.value)return Re(u)}}})}function Fn(s,{vnode:{ref:r,props:u,children:h,shapeFlag:g},parent:m}){const w=Re(s,u,h);return w.ref=r,w}const da=s=>s.type.__isKeepAlive,Ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:r}){const u=ti(),h=u.ctx;if(!h.renderer)return()=>{const P=r.default&&r.default();return P&&P.length===1?P[0]:P};const g=new Map,m=new Set;let w=null;const D=u.suspense,{renderer:{p:S,m:_,um:F,o:{createElement:z}}}=h,O=z("div");h.activate=(P,j,Z,H,ue)=>{const J=P.component;_(P,j,Z,0,D),S(J.vnode,P,j,Z,J,D,H,P.slotScopeIds,ue),ht(()=>{J.isDeactivated=!1,J.a&&gs(J.a);const te=P.props&&P.props.onVnodeMounted;te&&Et(te,J.parent,P)},D)},h.deactivate=P=>{const j=P.component;_(P,O,null,1,D),ht(()=>{j.da&&gs(j.da);const Z=P.props&&P.props.onVnodeUnmounted;Z&&Et(Z,j.parent,P),j.isDeactivated=!0},D)};function W(P){Rn(P),F(P,u,D,!0)}function $(P){g.forEach((j,Z)=>{const H=$a(j.type);H&&(!P||!P(H))&&K(Z)})}function K(P){const j=g.get(P);!w||j.type!==w.type?W(j):w&&Rn(w),g.delete(P),m.delete(P)}Ci(()=>[s.include,s.exclude],([P,j])=>{P&&$(Z=>zs(P,Z)),j&&$(Z=>!zs(j,Z))},{flush:"post",deep:!0});let se=null;const V=()=>{se!=null&&g.set(se,On(u.subTree))};return fa(V),fn(V),gn(()=>{g.forEach(P=>{const{subTree:j,suspense:Z}=u,H=On(j);if(P.type===H.type){Rn(H);const ue=H.component.da;ue&&ht(ue,Z);return}W(P)})}),()=>{if(se=null,!r.default)return null;const P=r.default(),j=P[0];if(P.length>1)return w=null,P;if(!Li(j)||!(j.shapeFlag&4)&&!(j.shapeFlag&128))return w=null,j;let Z=On(j);const H=Z.type,ue=$a(ji(Z)?Z.type.__asyncResolved||{}:H),{include:J,exclude:te,max:re}=s;if(J&&(!ue||!zs(J,ue))||te&&ue&&zs(te,ue))return w=Z,j;const Q=Z.key==null?H:Z.key,le=g.get(Q);return Z.el&&(Z=ei(Z),j.shapeFlag&128&&(j.ssContent=Z)),se=Q,le?(Z.el=le.el,Z.component=le.component,Z.transition&&Ui(Z,Z.transition),Z.shapeFlag|=512,m.delete(Q),m.add(Q)):(m.add(Q),re&&m.size>parseInt(re,10)&&K(m.values().next().value)),Z.shapeFlag|=256,w=Z,zu(j.type)?j:Z}}},Cf=Ef;function zs(s,r){return De(s)?s.some(u=>zs(u,r)):et(s)?s.split(",").includes(r):s.test?s.test(r):!1}function Wu(s,r){ju(s,"a",r)}function Vu(s,r){ju(s,"da",r)}function ju(s,r,u=nt){const h=s.__wdc||(s.__wdc=()=>{let g=u;for(;g;){if(g.isDeactivated)return;g=g.parent}return s()});if(dn(r,h,u),u){let g=u.parent;for(;g&&g.parent;)da(g.parent.vnode)&&Af(h,r,u,g),g=g.parent}}function Af(s,r,u,h){const g=dn(r,s,h,!0);ga(()=>{Rr(h[r],g)},u)}function Rn(s){let r=s.shapeFlag;r&256&&(r-=256),r&512&&(r-=512),s.shapeFlag=r}function On(s){return s.shapeFlag&128?s.ssContent:s}function dn(s,r,u=nt,h=!1){if(u){const g=u[s]||(u[s]=[]),m=r.__weh||(r.__weh=(...w)=>{if(u.isUnmounted)return;Ki(),Mi(u);const D=It(r,u,s,w);return Ai(),Ji(),D});return h?g.unshift(m):g.push(m),m}}const ci=s=>(r,u=nt)=>(!ws||s==="sp")&&dn(s,r,u),Gu=ci("bm"),fa=ci("m"),Uu=ci("bu"),fn=ci("u"),gn=ci("bum"),ga=ci("um"),$u=ci("sp"),qu=ci("rtg"),Zu=ci("rtc");function Ku(s,r=nt){dn("ec",s,r)}function kf(s,r){const u=xt;if(u===null)return s;const h=xn(u)||u.proxy,g=s.dirs||(s.dirs=[]);for(let m=0;m<r.length;m++){let[w,D,S,_=Ve]=r[m];Me(w)&&(w={mounted:w,updated:w}),w.deep&&Wi(D),g.push({dir:w,instance:h,value:D,oldValue:void 0,arg:S,modifiers:_})}return s}function Ut(s,r,u,h){const g=s.dirs,m=r&&r.dirs;for(let w=0;w<g.length;w++){const D=g[w];m&&(D.oldValue=m[w].value);let S=D.dir[h];S&&(Ki(),It(S,u,8,[s.el,D,s,r]),Ji())}}const eo="components",Sf="directives";function Ju(s,r){return to(eo,s,!0,r)||s}const Qu=Symbol();function ec(s){return et(s)?to(eo,s,!1)||s:s||Qu}function Pf(s){return to(Sf,s)}function to(s,r,u=!0,h=!1){const g=xt||nt;if(g){const m=g.type;if(s===eo){const D=$a(m,!1);if(D&&(D===r||D===Rt(r)||D===ua(Rt(r))))return m}const w=jo(g[s]||m[s],r)||jo(g.appContext[s],r);return!w&&h?m:w}}function jo(s,r){return s&&(s[r]||s[Rt(r)]||s[ua(Rt(r))])}function tc(s,r,u,h){let g;const m=u&&u[h];if(De(s)||et(s)){g=new Array(s.length);for(let w=0,D=s.length;w<D;w++)g[w]=r(s[w],w,void 0,m&&m[w])}else if(typeof s=="number"){g=new Array(s);for(let w=0;w<s;w++)g[w]=r(w+1,w,void 0,m&&m[w])}else if(it(s))if(s[Symbol.iterator])g=Array.from(s,(w,D)=>r(w,D,void 0,m&&m[D]));else{const w=Object.keys(s);g=new Array(w.length);for(let D=0,S=w.length;D<S;D++){const _=w[D];g[D]=r(s[_],_,D,m&&m[D])}}else g=[];return u&&(u[h]=g),g}function Tf(s,r){for(let u=0;u<r.length;u++){const h=r[u];if(De(h))for(let g=0;g<h.length;g++)s[h[g].name]=h[g].fn;else h&&(s[h.name]=h.fn)}return s}function Lf(s,r,u={},h,g){if(xt.isCE||xt.parent&&ji(xt.parent)&&xt.parent.isCE)return Re("slot",r==="default"?null:{name:r},h&&h());let m=s[r];m&&m._c&&(m._d=!1),Ze();const w=m&&ic(m(u)),D=Ti(at,{key:u.key||`_${r}`},w||(h?h():[]),w&&s._===1?64:-2);return!g&&D.scopeId&&(D.slotScopeIds=[D.scopeId+"-s"]),m&&m._c&&(m._d=!0),D}function ic(s){return s.some(r=>Li(r)?!(r.type===mt||r.type===at&&!ic(r.children)):!0)?s:null}function Mf(s){const r={};for(const u in s)r[Xs(u)]=s[u];return r}const dr=s=>s?yc(s)?xn(s)||s.proxy:dr(s.parent):null,Va=tt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>dr(s.parent),$root:s=>dr(s.root),$emit:s=>s.emit,$options:s=>ac(s),$forceUpdate:s=>s.f||(s.f=()=>$r(s.update)),$nextTick:s=>s.n||(s.n=bs.bind(s.proxy)),$watch:s=>yf.bind(s)}),fr={get({_:s},r){const{ctx:u,setupState:h,data:g,props:m,accessCache:w,type:D,appContext:S}=s;let _;if(r[0]!=="$"){const W=w[r];if(W!==void 0)switch(W){case 1:return h[r];case 2:return g[r];case 4:return u[r];case 3:return m[r]}else{if(h!==Ve&&Be(h,r))return w[r]=1,h[r];if(g!==Ve&&Be(g,r))return w[r]=2,g[r];if((_=s.propsOptions[0])&&Be(_,r))return w[r]=3,m[r];if(u!==Ve&&Be(u,r))return w[r]=4,u[r];gr&&(w[r]=0)}}const F=Va[r];let z,O;if(F)return r==="$attrs"&&Ot(s,"get",r),F(s);if((z=D.__cssModules)&&(z=z[r]))return z;if(u!==Ve&&Be(u,r))return w[r]=4,u[r];if(O=S.config.globalProperties,Be(O,r))return O[r]},set({_:s},r,u){const{data:h,setupState:g,ctx:m}=s;return g!==Ve&&Be(g,r)?(g[r]=u,!0):h!==Ve&&Be(h,r)?(h[r]=u,!0):Be(s.props,r)||r[0]==="$"&&r.slice(1)in s?!1:(m[r]=u,!0)},has({_:{data:s,setupState:r,accessCache:u,ctx:h,appContext:g,propsOptions:m}},w){let D;return!!u[w]||s!==Ve&&Be(s,w)||r!==Ve&&Be(r,w)||(D=m[0])&&Be(D,w)||Be(h,w)||Be(Va,w)||Be(g.config.globalProperties,w)},defineProperty(s,r,u){return u.get!=null?s._.accessCache[r]=0:Be(u,"value")&&this.set(s,r,u.value,null),Reflect.defineProperty(s,r,u)}},_f=tt({},fr,{get(s,r){if(r!==Symbol.unscopables)return fr.get(s,r,s)},has(s,r){return r[0]!=="_"&&!Zh(r)}});let gr=!0;function If(s){const r=ac(s),u=s.proxy,h=s.ctx;gr=!1,r.beforeCreate&&Go(r.beforeCreate,s,"bc");const{data:g,computed:m,methods:w,watch:D,provide:S,inject:_,created:F,beforeMount:z,mounted:O,beforeUpdate:W,updated:$,activated:K,deactivated:se,beforeDestroy:V,beforeUnmount:P,destroyed:j,unmounted:Z,render:H,renderTracked:ue,renderTriggered:J,errorCaptured:te,serverPrefetch:re,expose:Q,inheritAttrs:le,components:ie,directives:ye,filters:ge}=r;if(_&&Ff(_,h,null,s.appContext.config.unwrapInjectedRef),w)for(const Pe in w){const We=w[Pe];Me(We)&&(h[Pe]=We.bind(u))}if(g){const Pe=g.call(u,u);it(Pe)&&(s.data=li(Pe))}if(gr=!0,m)for(const Pe in m){const We=m[Pe],$e=Me(We)?We.bind(u,u):Me(We.get)?We.get.bind(u,u):Vt,Gt=!Me(We)&&Me(We.set)?We.set.bind(u):Vt,rt=He({get:$e,set:Gt});Object.defineProperty(h,Pe,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ge=>rt.value=Ge})}if(D)for(const Pe in D)sc(D[Pe],h,u,Pe);if(S){const Pe=Me(S)?S.call(u):S;Reflect.ownKeys(Pe).forEach(We=>{Gs(We,Pe[We])})}F&&Go(F,s,"c");function Te(Pe,We){De(We)?We.forEach($e=>Pe($e.bind(u))):We&&Pe(We.bind(u))}if(Te(Gu,z),Te(fa,O),Te(Uu,W),Te(fn,$),Te(Wu,K),Te(Vu,se),Te(Ku,te),Te(Zu,ue),Te(qu,J),Te(gn,P),Te(ga,Z),Te($u,re),De(Q))if(Q.length){const Pe=s.exposed||(s.exposed={});Q.forEach(We=>{Object.defineProperty(Pe,We,{get:()=>u[We],set:$e=>u[We]=$e})})}else s.exposed||(s.exposed={});H&&s.render===Vt&&(s.render=H),le!=null&&(s.inheritAttrs=le),ie&&(s.components=ie),ye&&(s.directives=ye)}function Ff(s,r,u=Vt,h=!1){De(s)&&(s=pr(s));for(const g in s){const m=s[g];let w;it(m)?"default"in m?w=Ft(m.from||g,m.default,!0):w=Ft(m.from||g):w=Ft(m),Qe(w)&&h?Object.defineProperty(r,g,{enumerable:!0,configurable:!0,get:()=>w.value,set:D=>w.value=D}):r[g]=w}}function Go(s,r,u){It(De(s)?s.map(h=>h.bind(r.proxy)):s.bind(r.proxy),r,u)}function sc(s,r,u,h){const g=h.includes(".")?Xu(u,h):()=>u[h];if(et(s)){const m=r[s];Me(m)&&Ci(g,m)}else if(Me(s))Ci(g,s.bind(u));else if(it(s))if(De(s))s.forEach(m=>sc(m,r,u,h));else{const m=Me(s.handler)?s.handler.bind(u):r[s.handler];Me(m)&&Ci(g,m,s)}}function ac(s){const r=s.type,{mixins:u,extends:h}=r,{mixins:g,optionsCache:m,config:{optionMergeStrategies:w}}=s.appContext,D=m.get(r);let S;return D?S=D:!g.length&&!u&&!h?S=r:(S={},g.length&&g.forEach(_=>ja(S,_,w,!0)),ja(S,r,w)),m.set(r,S),S}function ja(s,r,u,h=!1){const{mixins:g,extends:m}=r;m&&ja(s,m,u,!0),g&&g.forEach(w=>ja(s,w,u,!0));for(const w in r)if(!(h&&w==="expose")){const D=Rf[w]||u&&u[w];s[w]=D?D(s[w],r[w]):r[w]}return s}const Rf={data:Uo,props:Ni,emits:Ni,methods:Ni,computed:Ni,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Ni,directives:Ni,watch:zf,provide:Uo,inject:Of};function Uo(s,r){return r?s?function(){return tt(Me(s)?s.call(this,this):s,Me(r)?r.call(this,this):r)}:r:s}function Of(s,r){return Ni(pr(s),pr(r))}function pr(s){if(De(s)){const r={};for(let u=0;u<s.length;u++)r[s[u]]=s[u];return r}return s}function vt(s,r){return s?[...new Set([].concat(s,r))]:r}function Ni(s,r){return s?tt(tt(Object.create(null),s),r):r}function zf(s,r){if(!s)return r;if(!r)return s;const u=tt(Object.create(null),s);for(const h in r)u[h]=vt(s[h],r[h]);return u}function Bf(s,r,u,h=!1){const g={},m={};Ha(m,pn,1),s.propsDefaults=Object.create(null),nc(s,r,g,m);for(const w in s.propsOptions[0])w in g||(g[w]=void 0);u?s.props=h?g:ku(g):s.type.props?s.props=g:s.props=m,s.attrs=m}function Nf(s,r,u,h){const{props:g,attrs:m,vnode:{patchFlag:w}}=s,D=_e(g),[S]=s.propsOptions;let _=!1;if((h||w>0)&&!(w&16)){if(w&8){const F=s.vnode.dynamicProps;for(let z=0;z<F.length;z++){let O=F[z];if(un(s.emitsOptions,O))continue;const W=r[O];if(S)if(Be(m,O))W!==m[O]&&(m[O]=W,_=!0);else{const $=Rt(O);g[$]=xr(S,D,$,W,s,!1)}else W!==m[O]&&(m[O]=W,_=!0)}}}else{nc(s,r,g,m)&&(_=!0);let F;for(const z in D)(!r||!Be(r,z)&&((F=Zt(z))===z||!Be(r,F)))&&(S?u&&(u[z]!==void 0||u[F]!==void 0)&&(g[z]=xr(S,D,z,void 0,s,!0)):delete g[z]);if(m!==D)for(const z in m)(!r||!Be(r,z)&&!0)&&(delete m[z],_=!0)}_&&oi(s,"set","$attrs")}function nc(s,r,u,h){const[g,m]=s.propsOptions;let w=!1,D;if(r)for(let S in r){if(Hs(S))continue;const _=r[S];let F;g&&Be(g,F=Rt(S))?!m||!m.includes(F)?u[F]=_:(D||(D={}))[F]=_:un(s.emitsOptions,S)||(!(S in h)||_!==h[S])&&(h[S]=_,w=!0)}if(m){const S=_e(u),_=D||Ve;for(let F=0;F<m.length;F++){const z=m[F];u[z]=xr(g,S,z,_[z],s,!Be(_,z))}}return w}function xr(s,r,u,h,g,m){const w=s[u];if(w!=null){const D=Be(w,"default");if(D&&h===void 0){const S=w.default;if(w.type!==Function&&Me(S)){const{propsDefaults:_}=g;u in _?h=_[u]:(Mi(g),h=_[u]=S.call(null,r),Ai())}else h=S}w[0]&&(m&&!D?h=!1:w[1]&&(h===""||h===Zt(u))&&(h=!0))}return h}function rc(s,r,u=!1){const h=r.propsCache,g=h.get(s);if(g)return g;const m=s.props,w={},D=[];let S=!1;if(!Me(s)){const F=z=>{S=!0;const[O,W]=rc(z,r,!0);tt(w,O),W&&D.push(...W)};!u&&r.mixins.length&&r.mixins.forEach(F),s.extends&&F(s.extends),s.mixins&&s.mixins.forEach(F)}if(!m&&!S)return h.set(s,ds),ds;if(De(m))for(let F=0;F<m.length;F++){const z=Rt(m[F]);$o(z)&&(w[z]=Ve)}else if(m)for(const F in m){const z=Rt(F);if($o(z)){const O=m[F],W=w[z]=De(O)||Me(O)?{type:O}:O;if(W){const $=Ko(Boolean,W.type),K=Ko(String,W.type);W[0]=$>-1,W[1]=K<0||$<K,($>-1||Be(W,"default"))&&D.push(z)}}}const _=[w,D];return h.set(s,_),_}function $o(s){return s[0]!=="$"}function qo(s){const r=s&&s.toString().match(/^\s*function (\w+)/);return r?r[1]:s===null?"null":""}function Zo(s,r){return qo(s)===qo(r)}function Ko(s,r){return De(r)?r.findIndex(u=>Zo(u,s)):Me(r)&&Zo(r,s)?0:-1}const oc=s=>s[0]==="_"||s==="$stable",io=s=>De(s)?s.map(Mt):[Mt(s)],Hf=(s,r,u)=>{if(r._n)return r;const h=ia((...g)=>io(r(...g)),u);return h._c=!1,h},lc=(s,r,u)=>{const h=s._ctx;for(const g in s){if(oc(g))continue;const m=s[g];if(Me(m))r[g]=Hf(g,m,h);else if(m!=null){const w=io(m);r[g]=()=>w}}},uc=(s,r)=>{const u=io(r);s.slots.default=()=>u},Xf=(s,r)=>{if(s.vnode.shapeFlag&32){const u=r._;u?(s.slots=_e(r),Ha(r,"_",u)):lc(r,s.slots={})}else s.slots={},r&&uc(s,r);Ha(s.slots,pn,1)},Yf=(s,r,u)=>{const{vnode:h,slots:g}=s;let m=!0,w=Ve;if(h.shapeFlag&32){const D=r._;D?u&&D===1?m=!1:(tt(g,r),!u&&D===1&&delete g._):(m=!r.$stable,lc(r,g)),w=r}else r&&(uc(s,r),w={default:1});if(m)for(const D in g)!oc(D)&&!(D in w)&&delete g[D]};function cc(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function Vf(s,r){return function(h,g=null){Me(h)||(h=Object.assign({},h)),g!=null&&!it(g)&&(g=null);const m=cc(),w=new Set;let D=!1;const S=m.app={_uid:Wf++,_component:h,_props:g,_container:null,_context:m,_instance:null,version:Pc,get config(){return m.config},set config(_){},use(_,...F){return w.has(_)||(_&&Me(_.install)?(w.add(_),_.install(S,...F)):Me(_)&&(w.add(_),_(S,...F))),S},mixin(_){return m.mixins.includes(_)||m.mixins.push(_),S},component(_,F){return F?(m.components[_]=F,S):m.components[_]},directive(_,F){return F?(m.directives[_]=F,S):m.directives[_]},mount(_,F,z){if(!D){const O=Re(h,g);return O.appContext=m,F&&r?r(O,_):s(O,_,z),D=!0,S._container=_,_.__vue_app__=S,xn(O.component)||O.component.proxy}},unmount(){D&&(s(null,S._container),delete S._container.__vue_app__)},provide(_,F){return m.provides[_]=F,S}};return S}}function Ga(s,r,u,h,g=!1){if(De(s)){s.forEach((O,W)=>Ga(O,r&&(De(r)?r[W]:r),u,h,g));return}if(ji(h)&&!g)return;const m=h.shapeFlag&4?xn(h.component)||h.component.proxy:h.el,w=g?null:m,{i:D,r:S}=s,_=r&&r.r,F=D.refs===Ve?D.refs={}:D.refs,z=D.setupState;if(_!=null&&_!==S&&(et(_)?(F[_]=null,Be(z,_)&&(z[_]=null)):Qe(_)&&(_.value=null)),Me(S))Jt(S,D,12,[w,F]);else{const O=et(S),W=Qe(S);if(O||W){const $=()=>{if(s.f){const K=O?F[S]:S.value;g?De(K)&&Rr(K,m):De(K)?K.includes(m)||K.push(m):O?(F[S]=[m],Be(z,S)&&(z[S]=F[S])):(S.value=[m],s.k&&(F[s.k]=S.value))}else O?(F[S]=w,Be(z,S)&&(z[S]=w)):W&&(S.value=w,s.k&&(F[s.k]=w))};w?($.id=-1,ht($,u)):$()}}}let gi=!1;const ka=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",Sa=s=>s.nodeType===8;function jf(s){const{mt:r,p:u,o:{patchProp:h,createText:g,nextSibling:m,parentNode:w,remove:D,insert:S,createComment:_}}=s,F=(V,P)=>{if(!P.hasChildNodes()){u(null,V,P),Wa(),P._vnode=V;return}gi=!1,z(P.firstChild,V,null,null,null),Wa(),P._vnode=V,gi&&console.error("Hydration completed but contains mismatches.")},z=(V,P,j,Z,H,ue=!1)=>{const J=Sa(V)&&V.data==="[",te=()=>K(V,P,j,Z,H,J),{type:re,ref:Q,shapeFlag:le,patchFlag:ie}=P,ye=V.nodeType;P.el=V,ie===-2&&(ue=!1,P.dynamicChildren=null);let ge=null;switch(re){case ys:ye!==3?P.children===""?(S(P.el=g(""),w(V),V),ge=V):ge=te():(V.data!==P.children&&(gi=!0,V.data=P.children),ge=m(V));break;case mt:ye!==8||J?ge=te():ge=m(V);break;case Gi:if(ye!==1&&ye!==3)ge=te();else{ge=V;const je=!P.children.length;for(let Te=0;Te<P.staticCount;Te++)je&&(P.children+=ge.nodeType===1?ge.outerHTML:ge.data),Te===P.staticCount-1&&(P.anchor=ge),ge=m(ge);return ge}break;case at:J?ge=$(V,P,j,Z,H,ue):ge=te();break;default:if(le&1)ye!==1||P.type.toLowerCase()!==V.tagName.toLowerCase()?ge=te():ge=O(V,P,j,Z,H,ue);else if(le&6){P.slotScopeIds=H;const je=w(V);if(r(P,je,null,j,Z,ka(je),ue),ge=J?se(V):m(V),ge&&Sa(ge)&&ge.data==="teleport end"&&(ge=m(ge)),ji(P)){let Te;J?(Te=Re(at),Te.anchor=ge?ge.previousSibling:je.lastChild):Te=V.nodeType===3?pa(""):Re("div"),Te.el=V,P.component.subTree=Te}}else le&64?ye!==8?ge=te():ge=P.type.hydrate(V,P,j,Z,H,ue,s,W):le&128&&(ge=P.type.hydrate(V,P,j,Z,ka(w(V)),H,ue,s,z))}return Q!=null&&Ga(Q,null,Z,P),ge},O=(V,P,j,Z,H,ue)=>{ue=ue||!!P.dynamicChildren;const{type:J,props:te,patchFlag:re,shapeFlag:Q,dirs:le}=P,ie=J==="input"&&le||J==="option";if(ie||re!==-1){if(le&&Ut(P,null,j,"created"),te)if(ie||!ue||re&48)for(const ge in te)(ie&&ge.endsWith("value")||oa(ge)&&!Hs(ge))&&h(V,ge,null,te[ge],!1,void 0,j);else te.onClick&&h(V,"onClick",null,te.onClick,!1,void 0,j);let ye;if((ye=te&&te.onVnodeBeforeMount)&&Et(ye,j,P),le&&Ut(P,null,j,"beforeMount"),((ye=te&&te.onVnodeMounted)||le)&&Bu(()=>{ye&&Et(ye,j,P),le&&Ut(P,null,j,"mounted")},Z),Q&16&&!(te&&(te.innerHTML||te.textContent))){let ge=W(V.firstChild,P,V,j,Z,H,ue);for(;ge;){gi=!0;const je=ge;ge=ge.nextSibling,D(je)}}else Q&8&&V.textContent!==P.children&&(gi=!0,V.textContent=P.children)}return V.nextSibling},W=(V,P,j,Z,H,ue,J)=>{J=J||!!P.dynamicChildren;const te=P.children,re=te.length;for(let Q=0;Q<re;Q++){const le=J?te[Q]:te[Q]=Mt(te[Q]);if(V)V=z(V,le,Z,H,ue,J);else{if(le.type===ys&&!le.children)continue;gi=!0,u(null,le,j,null,Z,H,ka(j),ue)}}return V},$=(V,P,j,Z,H,ue)=>{const{slotScopeIds:J}=P;J&&(H=H?H.concat(J):J);const te=w(V),re=W(m(V),P,te,j,Z,H,ue);return re&&Sa(re)&&re.data==="]"?m(P.anchor=re):(gi=!0,S(P.anchor=_("]"),te,re),re)},K=(V,P,j,Z,H,ue)=>{if(gi=!0,P.el=null,ue){const re=se(V);for(;;){const Q=m(V);if(Q&&Q!==re)D(Q);else break}}const J=m(V),te=w(V);return D(V),u(null,P,te,J,j,Z,ka(te),H),J},se=V=>{let P=0;for(;V;)if(V=m(V),V&&Sa(V)&&(V.data==="["&&P++,V.data==="]")){if(P===0)return m(V);P--}return V};return[F,z]}const ht=Bu;function hc(s){return fc(s)}function dc(s){return fc(s,jf)}function fc(s,r){const u=cd();u.__VUE__=!0;const{insert:h,remove:g,patchProp:m,createElement:w,createText:D,createComment:S,setText:_,setElementText:F,parentNode:z,nextSibling:O,setScopeId:W=Vt,cloneNode:$,insertStaticContent:K}=s,se=(B,Y,q,ae=null,oe=null,xe=null,ve=!1,fe=null,me=!!Y.dynamicChildren)=>{if(B===Y)return;B&&!$t(B,Y)&&(ae=be(B),ot(B,oe,xe,!0),B=null),Y.patchFlag===-2&&(me=!1,Y.dynamicChildren=null);const{type:ce,ref:Ee,shapeFlag:we}=Y;switch(ce){case ys:V(B,Y,q,ae);break;case mt:P(B,Y,q,ae);break;case Gi:B==null&&j(Y,q,ae,ve);break;case at:ye(B,Y,q,ae,oe,xe,ve,fe,me);break;default:we&1?ue(B,Y,q,ae,oe,xe,ve,fe,me):we&6?ge(B,Y,q,ae,oe,xe,ve,fe,me):(we&64||we&128)&&ce.process(B,Y,q,ae,oe,xe,ve,fe,me,Ie)}Ee!=null&&oe&&Ga(Ee,B&&B.ref,xe,Y||B,!Y)},V=(B,Y,q,ae)=>{if(B==null)h(Y.el=D(Y.children),q,ae);else{const oe=Y.el=B.el;Y.children!==B.children&&_(oe,Y.children)}},P=(B,Y,q,ae)=>{B==null?h(Y.el=S(Y.children||""),q,ae):Y.el=B.el},j=(B,Y,q,ae)=>{[B.el,B.anchor]=K(B.children,Y,q,ae,B.el,B.anchor)},Z=({el:B,anchor:Y},q,ae)=>{let oe;for(;B&&B!==Y;)oe=O(B),h(B,q,ae),B=oe;h(Y,q,ae)},H=({el:B,anchor:Y})=>{let q;for(;B&&B!==Y;)q=O(B),g(B),B=q;g(Y)},ue=(B,Y,q,ae,oe,xe,ve,fe,me)=>{ve=ve||Y.type==="svg",B==null?J(Y,q,ae,oe,xe,ve,fe,me):Q(B,Y,oe,xe,ve,fe,me)},J=(B,Y,q,ae,oe,xe,ve,fe)=>{let me,ce;const{type:Ee,props:we,shapeFlag:Ce,transition:Le,patchFlag:ze,dirs:Xe}=B;if(B.el&&$!==void 0&&ze===-1)me=B.el=$(B.el);else{if(me=B.el=w(B.type,xe,we&&we.is,we),Ce&8?F(me,B.children):Ce&16&&re(B.children,me,null,ae,oe,xe&&Ee!=="foreignObject",ve,fe),Xe&&Ut(B,null,ae,"created"),we){for(const qe in we)qe!=="value"&&!Hs(qe)&&m(me,qe,null,we[qe],xe,B.children,ae,oe,de);"value"in we&&m(me,"value",null,we.value),(ce=we.onVnodeBeforeMount)&&Et(ce,ae,B)}te(me,B,B.scopeId,ve,ae)}Xe&&Ut(B,null,ae,"beforeMount");const Ue=(!oe||oe&&!oe.pendingBranch)&&Le&&!Le.persisted;Ue&&Le.beforeEnter(me),h(me,Y,q),((ce=we&&we.onVnodeMounted)||Ue||Xe)&&ht(()=>{ce&&Et(ce,ae,B),Ue&&Le.enter(me),Xe&&Ut(B,null,ae,"mounted")},oe)},te=(B,Y,q,ae,oe)=>{if(q&&W(B,q),ae)for(let xe=0;xe<ae.length;xe++)W(B,ae[xe]);if(oe){let xe=oe.subTree;if(Y===xe){const ve=oe.vnode;te(B,ve,ve.scopeId,ve.slotScopeIds,oe.parent)}}},re=(B,Y,q,ae,oe,xe,ve,fe,me=0)=>{for(let ce=me;ce<B.length;ce++){const Ee=B[ce]=fe?vi(B[ce]):Mt(B[ce]);se(null,Ee,Y,q,ae,oe,xe,ve,fe)}},Q=(B,Y,q,ae,oe,xe,ve)=>{const fe=Y.el=B.el;let{patchFlag:me,dynamicChildren:ce,dirs:Ee}=Y;me|=B.patchFlag&16;const we=B.props||Ve,Ce=Y.props||Ve;let Le;q&&zi(q,!1),(Le=Ce.onVnodeBeforeUpdate)&&Et(Le,q,Y,B),Ee&&Ut(Y,B,q,"beforeUpdate"),q&&zi(q,!0);const ze=oe&&Y.type!=="foreignObject";if(ce?le(B.dynamicChildren,ce,fe,q,ae,ze,xe):ve||$e(B,Y,fe,null,q,ae,ze,xe,!1),me>0){if(me&16)ie(fe,Y,we,Ce,q,ae,oe);else if(me&2&&we.class!==Ce.class&&m(fe,"class",null,Ce.class,oe),me&4&&m(fe,"style",we.style,Ce.style,oe),me&8){const Xe=Y.dynamicProps;for(let Ue=0;Ue<Xe.length;Ue++){const qe=Xe[Ue],yt=we[qe],hi=Ce[qe];(hi!==yt||qe==="value")&&m(fe,qe,yt,hi,oe,B.children,q,ae,de)}}me&1&&B.children!==Y.children&&F(fe,Y.children)}else!ve&&ce==null&&ie(fe,Y,we,Ce,q,ae,oe);((Le=Ce.onVnodeUpdated)||Ee)&&ht(()=>{Le&&Et(Le,q,Y,B),Ee&&Ut(Y,B,q,"updated")},ae)},le=(B,Y,q,ae,oe,xe,ve)=>{for(let fe=0;fe<Y.length;fe++){const me=B[fe],ce=Y[fe],Ee=me.el&&(me.type===at||!$t(me,ce)||me.shapeFlag&70)?z(me.el):q;se(me,ce,Ee,null,ae,oe,xe,ve,!0)}},ie=(B,Y,q,ae,oe,xe,ve)=>{if(q!==ae){for(const fe in ae){if(Hs(fe))continue;const me=ae[fe],ce=q[fe];me!==ce&&fe!=="value"&&m(B,fe,ce,me,ve,Y.children,oe,xe,de)}if(q!==Ve)for(const fe in q)!Hs(fe)&&!(fe in ae)&&m(B,fe,q[fe],null,ve,Y.children,oe,xe,de);"value"in ae&&m(B,"value",q.value,ae.value)}},ye=(B,Y,q,ae,oe,xe,ve,fe,me)=>{const ce=Y.el=B?B.el:D(""),Ee=Y.anchor=B?B.anchor:D("");let{patchFlag:we,dynamicChildren:Ce,slotScopeIds:Le}=Y;Le&&(fe=fe?fe.concat(Le):Le),B==null?(h(ce,q,ae),h(Ee,q,ae),re(Y.children,q,Ee,oe,xe,ve,fe,me)):we>0&&we&64&&Ce&&B.dynamicChildren?(le(B.dynamicChildren,Ce,q,oe,xe,ve,fe),(Y.key!=null||oe&&Y===oe.subTree)&&so(B,Y,!0)):$e(B,Y,q,Ee,oe,xe,ve,fe,me)},ge=(B,Y,q,ae,oe,xe,ve,fe,me)=>{Y.slotScopeIds=fe,B==null?Y.shapeFlag&512?oe.ctx.activate(Y,q,ae,ve,me):je(Y,q,ae,oe,xe,ve,me):Te(B,Y,me)},je=(B,Y,q,ae,oe,xe,ve)=>{const fe=B.component=vc(B,ae,oe);if(da(B)&&(fe.ctx.renderer=Ie),wc(fe),fe.asyncDep){if(oe&&oe.registerDep(fe,Pe),!B.el){const me=fe.subTree=Re(mt);P(null,me,Y,q)}return}Pe(fe,B,Y,q,oe,xe,ve)},Te=(B,Y,q)=>{const ae=Y.component=B.component;if(df(B,Y,q))if(ae.asyncDep&&!ae.asyncResolved){We(ae,Y,q);return}else ae.next=Y,sf(ae.update),ae.update();else Y.el=B.el,ae.vnode=Y},Pe=(B,Y,q,ae,oe,xe,ve)=>{const fe=()=>{if(B.isMounted){let{next:Ee,bu:we,u:Ce,parent:Le,vnode:ze}=B,Xe=Ee,Ue;zi(B,!1),Ee?(Ee.el=ze.el,We(B,Ee,ve)):Ee=ze,we&&gs(we),(Ue=Ee.props&&Ee.props.onVnodeBeforeUpdate)&&Et(Ue,Le,Ee,ze),zi(B,!0);const qe=Ia(B),yt=B.subTree;B.subTree=qe,se(yt,qe,z(yt.el),be(yt),B,oe,xe),Ee.el=qe.el,Xe===null&&Zr(B,qe.el),Ce&&ht(Ce,oe),(Ue=Ee.props&&Ee.props.onVnodeUpdated)&&ht(()=>Et(Ue,Le,Ee,ze),oe)}else{let Ee;const{el:we,props:Ce}=Y,{bm:Le,m:ze,parent:Xe}=B,Ue=ji(Y);if(zi(B,!1),Le&&gs(Le),!Ue&&(Ee=Ce&&Ce.onVnodeBeforeMount)&&Et(Ee,Xe,Y),zi(B,!0),we&&ke){const qe=()=>{B.subTree=Ia(B),ke(we,B.subTree,B,oe,null)};Ue?Y.type.__asyncLoader().then(()=>!B.isUnmounted&&qe()):qe()}else{const qe=B.subTree=Ia(B);se(null,qe,q,ae,B,oe,xe),Y.el=qe.el}if(ze&&ht(ze,oe),!Ue&&(Ee=Ce&&Ce.onVnodeMounted)){const qe=Y;ht(()=>Et(Ee,Xe,qe),oe)}(Y.shapeFlag&256||Xe&&ji(Xe.vnode)&&Xe.vnode.shapeFlag&256)&&B.a&&ht(B.a,oe),B.isMounted=!0,Y=q=ae=null}},me=B.effect=new ca(fe,()=>$r(ce),B.scope),ce=B.update=()=>me.run();ce.id=B.uid,zi(B,!0),ce()},We=(B,Y,q)=>{Y.component=B;const ae=B.vnode.props;B.vnode=Y,B.next=null,Nf(B,Y.props,ae,q),Yf(B,Y.children,q),Ki(),ln(void 0,B.update),Ji()},$e=(B,Y,q,ae,oe,xe,ve,fe,me=!1)=>{const ce=B&&B.children,Ee=B?B.shapeFlag:0,we=Y.children,{patchFlag:Ce,shapeFlag:Le}=Y;if(Ce>0){if(Ce&128){rt(ce,we,q,ae,oe,xe,ve,fe,me);return}else if(Ce&256){Gt(ce,we,q,ae,oe,xe,ve,fe,me);return}}Le&8?(Ee&16&&de(ce,oe,xe),we!==ce&&F(q,we)):Ee&16?Le&16?rt(ce,we,q,ae,oe,xe,ve,fe,me):de(ce,oe,xe,!0):(Ee&8&&F(q,""),Le&16&&re(we,q,ae,oe,xe,ve,fe,me))},Gt=(B,Y,q,ae,oe,xe,ve,fe,me)=>{B=B||ds,Y=Y||ds;const ce=B.length,Ee=Y.length,we=Math.min(ce,Ee);let Ce;for(Ce=0;Ce<we;Ce++){const Le=Y[Ce]=me?vi(Y[Ce]):Mt(Y[Ce]);se(B[Ce],Le,q,null,oe,xe,ve,fe,me)}ce>Ee?de(B,oe,xe,!0,!1,we):re(Y,q,ae,oe,xe,ve,fe,me,we)},rt=(B,Y,q,ae,oe,xe,ve,fe,me)=>{let ce=0;const Ee=Y.length;let we=B.length-1,Ce=Ee-1;for(;ce<=we&&ce<=Ce;){const Le=B[ce],ze=Y[ce]=me?vi(Y[ce]):Mt(Y[ce]);if($t(Le,ze))se(Le,ze,q,null,oe,xe,ve,fe,me);else break;ce++}for(;ce<=we&&ce<=Ce;){const Le=B[we],ze=Y[Ce]=me?vi(Y[Ce]):Mt(Y[Ce]);if($t(Le,ze))se(Le,ze,q,null,oe,xe,ve,fe,me);else break;we--,Ce--}if(ce>we){if(ce<=Ce){const Le=Ce+1,ze=Le<Ee?Y[Le].el:ae;for(;ce<=Ce;)se(null,Y[ce]=me?vi(Y[ce]):Mt(Y[ce]),q,ze,oe,xe,ve,fe,me),ce++}}else if(ce>Ce)for(;ce<=we;)ot(B[ce],oe,xe,!0),ce++;else{const Le=ce,ze=ce,Xe=new Map;for(ce=ze;ce<=Ce;ce++){const bt=Y[ce]=me?vi(Y[ce]):Mt(Y[ce]);bt.key!=null&&Xe.set(bt.key,ce)}let Ue,qe=0;const yt=Ce-ze+1;let hi=!1,Ps=0;const Fi=new Array(yt);for(ce=0;ce<yt;ce++)Fi[ce]=0;for(ce=Le;ce<=we;ce++){const bt=B[ce];if(qe>=yt){ot(bt,oe,xe,!0);continue}let zt;if(bt.key!=null)zt=Xe.get(bt.key);else for(Ue=ze;Ue<=Ce;Ue++)if(Fi[Ue-ze]===0&&$t(bt,Y[Ue])){zt=Ue;break}zt===void 0?ot(bt,oe,xe,!0):(Fi[zt-ze]=ce+1,zt>=Ps?Ps=zt:hi=!0,se(bt,Y[zt],q,null,oe,xe,ve,fe,me),qe++)}const Ts=hi?Gf(Fi):ds;for(Ue=Ts.length-1,ce=yt-1;ce>=0;ce--){const bt=ze+ce,zt=Y[bt],ba=bt+1<Ee?Y[bt+1].el:ae;Fi[ce]===0?se(null,zt,q,ba,oe,xe,ve,fe,me):hi&&(Ue<0||ce!==Ts[Ue]?Ge(zt,q,ba,2):Ue--)}}},Ge=(B,Y,q,ae,oe=null)=>{const{el:xe,type:ve,transition:fe,children:me,shapeFlag:ce}=B;if(ce&6){Ge(B.component.subTree,Y,q,ae);return}if(ce&128){B.suspense.move(Y,q,ae);return}if(ce&64){ve.move(B,Y,q,Ie);return}if(ve===at){h(xe,Y,q);for(let we=0;we<me.length;we++)Ge(me[we],Y,q,ae);h(B.anchor,Y,q);return}if(ve===Gi){Z(B,Y,q);return}if(ae!==2&&ce&1&&fe)if(ae===0)fe.beforeEnter(xe),h(xe,Y,q),ht(()=>fe.enter(xe),oe);else{const{leave:we,delayLeave:Ce,afterLeave:Le}=fe,ze=()=>h(xe,Y,q),Xe=()=>{we(xe,()=>{ze(),Le&&Le()})};Ce?Ce(xe,ze,Xe):Xe()}else h(xe,Y,q)},ot=(B,Y,q,ae=!1,oe=!1)=>{const{type:xe,props:ve,ref:fe,children:me,dynamicChildren:ce,shapeFlag:Ee,patchFlag:we,dirs:Ce}=B;if(fe!=null&&Ga(fe,null,q,B,!0),Ee&256){Y.ctx.deactivate(B);return}const Le=Ee&1&&Ce,ze=!ji(B);let Xe;if(ze&&(Xe=ve&&ve.onVnodeBeforeUnmount)&&Et(Xe,Y,B),Ee&6)he(B.component,q,ae);else{if(Ee&128){B.suspense.unmount(q,ae);return}Le&&Ut(B,null,Y,"beforeUnmount"),Ee&64?B.type.remove(B,Y,q,oe,Ie,ae):ce&&(xe!==at||we>0&&we&64)?de(ce,Y,q,!1,!0):(xe===at&&we&384||!oe&&Ee&16)&&de(me,Y,q),ae&&ct(B)}(ze&&(Xe=ve&&ve.onVnodeUnmounted)||Le)&&ht(()=>{Xe&&Et(Xe,Y,B),Le&&Ut(B,null,Y,"unmounted")},q)},ct=B=>{const{type:Y,el:q,anchor:ae,transition:oe}=B;if(Y===at){U(q,ae);return}if(Y===Gi){H(B);return}const xe=()=>{g(q),oe&&!oe.persisted&&oe.afterLeave&&oe.afterLeave()};if(B.shapeFlag&1&&oe&&!oe.persisted){const{leave:ve,delayLeave:fe}=oe,me=()=>ve(q,xe);fe?fe(B.el,xe,me):me()}else xe()},U=(B,Y)=>{let q;for(;B!==Y;)q=O(B),g(B),B=q;g(Y)},he=(B,Y,q)=>{const{bum:ae,scope:oe,update:xe,subTree:ve,um:fe}=B;ae&&gs(ae),oe.stop(),xe&&(xe.active=!1,ot(ve,B,Y,q)),fe&&ht(fe,Y),ht(()=>{B.isUnmounted=!0},Y),Y&&Y.pendingBranch&&!Y.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===Y.pendingId&&(Y.deps--,Y.deps===0&&Y.resolve())},de=(B,Y,q,ae=!1,oe=!1,xe=0)=>{for(let ve=xe;ve<B.length;ve++)ot(B[ve],Y,q,ae,oe)},be=B=>B.shapeFlag&6?be(B.component.subTree):B.shapeFlag&128?B.suspense.next():O(B.anchor||B.el),Fe=(B,Y,q)=>{B==null?Y._vnode&&ot(Y._vnode,null,null,!0):se(Y._vnode||null,B,Y,null,null,null,q),Wa(),Y._vnode=B},Ie={p:se,um:ot,m:Ge,r:ct,mt:je,mc:re,pc:$e,pbc:le,n:be,o:s};let Se,ke;return r&&([Se,ke]=r(Ie)),{render:Fe,hydrate:Se,createApp:Vf(Fe,Se)}}function zi({effect:s,update:r},u){s.allowRecurse=r.allowRecurse=u}function so(s,r,u=!1){const h=s.children,g=r.children;if(De(h)&&De(g))for(let m=0;m<h.length;m++){const w=h[m];let D=g[m];D.shapeFlag&1&&!D.dynamicChildren&&((D.patchFlag<=0||D.patchFlag===32)&&(D=g[m]=vi(g[m]),D.el=w.el),u||so(w,D))}}function Gf(s){const r=s.slice(),u=[0];let h,g,m,w,D;const S=s.length;for(h=0;h<S;h++){const _=s[h];if(_!==0){if(g=u[u.length-1],s[g]<_){r[h]=g,u.push(h);continue}for(m=0,w=u.length-1;m<w;)D=m+w>>1,s[u[D]]<_?m=D+1:w=D;_<s[u[m]]&&(m>0&&(r[h]=u[m-1]),u[m]=h)}}for(m=u.length,w=u[m-1];m-- >0;)u[m]=w,w=r[w];return u}const Uf=s=>s.__isTeleport,Us=s=>s&&(s.disabled||s.disabled===""),Jo=s=>typeof SVGElement<"u"&&s instanceof SVGElement,mr=(s,r)=>{const u=s&&s.to;return et(u)?r?r(u):null:u},$f={__isTeleport:!0,process(s,r,u,h,g,m,w,D,S,_){const{mc:F,pc:z,pbc:O,o:{insert:W,querySelector:$,createText:K,createComment:se}}=_,V=Us(r.props);let{shapeFlag:P,children:j,dynamicChildren:Z}=r;if(s==null){const H=r.el=K(""),ue=r.anchor=K("");W(H,u,h),W(ue,u,h);const J=r.target=mr(r.props,$),te=r.targetAnchor=K("");J&&(W(te,J),w=w||Jo(J));const re=(Q,le)=>{P&16&&F(j,Q,le,g,m,w,D,S)};V?re(u,ue):J&&re(J,te)}else{r.el=s.el;const H=r.anchor=s.anchor,ue=r.target=s.target,J=r.targetAnchor=s.targetAnchor,te=Us(s.props),re=te?u:ue,Q=te?H:J;if(w=w||Jo(ue),Z?(O(s.dynamicChildren,Z,re,g,m,w,D),so(s,r,!0)):S||z(s,r,re,Q,g,m,w,D,!1),V)te||Pa(r,u,H,_,1);else if((r.props&&r.props.to)!==(s.props&&s.props.to)){const le=r.target=mr(r.props,$);le&&Pa(r,le,null,_,0)}else te&&Pa(r,ue,J,_,1)}},remove(s,r,u,h,{um:g,o:{remove:m}},w){const{shapeFlag:D,children:S,anchor:_,targetAnchor:F,target:z,props:O}=s;if(z&&m(F),(w||!Us(O))&&(m(_),D&16))for(let W=0;W<S.length;W++){const $=S[W];g($,r,u,!0,!!$.dynamicChildren)}},move:Pa,hydrate:qf};function Pa(s,r,u,{o:{insert:h},m:g},m=2){m===0&&h(s.targetAnchor,r,u);const{el:w,anchor:D,shapeFlag:S,children:_,props:F}=s,z=m===2;if(z&&h(w,r,u),(!z||Us(F))&&S&16)for(let O=0;O<_.length;O++)g(_[O],r,u,2);z&&h(D,r,u)}function qf(s,r,u,h,g,m,{o:{nextSibling:w,parentNode:D,querySelector:S}},_){const F=r.target=mr(r.props,S);if(F){const z=F._lpa||F.firstChild;if(r.shapeFlag&16)if(Us(r.props))r.anchor=_(w(s),r,D(s),u,h,g,m),r.targetAnchor=z;else{r.anchor=w(s);let O=z;for(;O;)if(O=w(O),O&&O.nodeType===8&&O.data==="teleport anchor"){r.targetAnchor=O,F._lpa=r.targetAnchor&&w(r.targetAnchor);break}_(z,r,F,u,h,g,m)}}return r.anchor&&w(r.anchor)}const Zf=$f,at=Symbol(void 0),ys=Symbol(void 0),mt=Symbol(void 0),Gi=Symbol(void 0),$s=[];let At=null;function Ze(s=!1){$s.push(At=s?null:[])}function gc(){$s.pop(),At=$s[$s.length-1]||null}let $i=1;function br(s){$i+=s}function pc(s){return s.dynamicChildren=$i>0?At||ds:null,gc(),$i>0&&At&&At.push(s),s}function st(s,r,u,h,g,m){return pc(Ne(s,r,u,h,g,m,!0))}function Ti(s,r,u,h,g){return pc(Re(s,r,u,h,g,!0))}function Li(s){return s?s.__v_isVNode===!0:!1}function $t(s,r){return s.type===r.type&&s.key===r.key}function Kf(s){}const pn="__vInternal",xc=({key:s})=>s!=null?s:null,Fa=({ref:s,ref_key:r,ref_for:u})=>s!=null?et(s)||Qe(s)||Me(s)?{i:xt,r:s,k:r,f:!!u}:s:null;function Ne(s,r=null,u=null,h=0,g=null,m=s===at?0:1,w=!1,D=!1){const S={__v_isVNode:!0,__v_skip:!0,type:s,props:r,key:r&&xc(r),ref:r&&Fa(r),scopeId:cn,slotScopeIds:null,children:u,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:h,dynamicProps:g,dynamicChildren:null,appContext:null};return D?(no(S,u),m&128&&s.normalize(S)):u&&(S.shapeFlag|=et(u)?8:16),$i>0&&!w&&At&&(S.patchFlag>0||m&6)&&S.patchFlag!==32&&At.push(S),S}const Re=Jf;function Jf(s,r=null,u=null,h=0,g=null,m=!1){if((!s||s===Qu)&&(s=mt),Li(s)){const D=ei(s,r,!0);return u&&no(D,u),$i>0&&!m&&At&&(D.shapeFlag&6?At[At.indexOf(s)]=D:At.push(D)),D.patchFlag|=-2,D}if(o0(s)&&(s=s.__vccOpts),r){r=mc(r);let{class:D,style:S}=r;D&&!et(D)&&(r.class=qt(D)),it(S)&&(Wr(S)&&!De(S)&&(S=tt({},S)),r.style=ra(S))}const w=et(s)?1:zu(s)?128:Uf(s)?64:it(s)?4:Me(s)?2:0;return Ne(s,r,u,h,g,w,m,!0)}function mc(s){return s?Wr(s)||pn in s?tt({},s):s:null}function ei(s,r,u=!1){const{props:h,ref:g,patchFlag:m,children:w}=s,D=r?bc(h||{},r):h;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:D,key:D&&xc(D),ref:r&&r.ref?u&&g?De(g)?g.concat(Fa(r)):[g,Fa(r)]:Fa(r):g,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:w,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:r&&s.type!==at?m===-1?16:m|16:m,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&ei(s.ssContent),ssFallback:s.ssFallback&&ei(s.ssFallback),el:s.el,anchor:s.anchor}}function pa(s=" ",r=0){return Re(ys,null,s,r)}function ao(s,r){const u=Re(Gi,null,s);return u.staticCount=r,u}function Bs(s="",r=!1){return r?(Ze(),Ti(mt,null,s)):Re(mt,null,s)}function Mt(s){return s==null||typeof s=="boolean"?Re(mt):De(s)?Re(at,null,s.slice()):typeof s=="object"?vi(s):Re(ys,null,String(s))}function vi(s){return s.el===null||s.memo?s:ei(s)}function no(s,r){let u=0;const{shapeFlag:h}=s;if(r==null)r=null;else if(De(r))u=16;else if(typeof r=="object")if(h&65){const g=r.default;g&&(g._c&&(g._d=!1),no(s,g()),g._c&&(g._d=!0));return}else{u=32;const g=r._;!g&&!(pn in r)?r._ctx=xt:g===3&&xt&&(xt.slots._===1?r._=1:(r._=2,s.patchFlag|=1024))}else Me(r)?(r={default:r,_ctx:xt},u=32):(r=String(r),h&64?(u=16,r=[pa(r)]):u=8);s.children=r,s.shapeFlag|=u}function bc(...s){const r={};for(let u=0;u<s.length;u++){const h=s[u];for(const g in h)if(g==="class")r.class!==h.class&&(r.class=qt([r.class,h.class]));else if(g==="style")r.style=ra([r.style,h.style]);else if(oa(g)){const m=r[g],w=h[g];w&&m!==w&&!(De(m)&&m.includes(w))&&(r[g]=m?[].concat(m,w):w)}else g!==""&&(r[g]=h[g])}return r}function Et(s,r,u,h=null){It(s,r,7,[u,h])}const Qf=cc();let e0=0;function vc(s,r,u){const h=s.type,g=(r?r.appContext:s.appContext)||Qf,m={uid:e0++,vnode:s,type:h,parent:r,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new Br(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:r?r.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rc(h,g),emitsOptions:Ou(h,g),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:h.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:u,suspenseId:u?u.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=r?r.root:m,m.emit=nf.bind(null,m),s.ce&&s.ce(m),m}let nt=null;const ti=()=>nt||xt,Mi=s=>{nt=s,s.scope.on()},Ai=()=>{nt&&nt.scope.off(),nt=null};function yc(s){return s.vnode.shapeFlag&4}let ws=!1;function wc(s,r=!1){ws=r;const{props:u,children:h}=s.vnode,g=yc(s);Bf(s,u,g,r),Xf(s,h);const m=g?t0(s,r):void 0;return ws=!1,m}function t0(s,r){const u=s.type;s.accessCache=Object.create(null),s.proxy=Lt(new Proxy(s.ctx,fr));const{setup:h}=u;if(h){const g=s.setupContext=h.length>1?Ec(s):null;Mi(s),Ki();const m=Jt(h,s,0,[s.props,g]);if(Ji(),Ai(),Or(m)){if(m.then(Ai,Ai),r)return m.then(w=>{vr(s,w,r)}).catch(w=>{Qi(w,s,0)});s.asyncDep=m}else vr(s,m,r)}else Dc(s,r)}function vr(s,r,u){Me(r)?s.type.__ssrInlineRender?s.ssrRender=r:s.render=r:it(r)&&(s.setupState=Gr(r)),Dc(s,u)}let Ua,yr;function i0(s){Ua=s,yr=r=>{r.render._rc&&(r.withProxy=new Proxy(r.ctx,_f))}}const s0=()=>!Ua;function Dc(s,r,u){const h=s.type;if(!s.render){if(!r&&Ua&&!h.render){const g=h.template;if(g){const{isCustomElement:m,compilerOptions:w}=s.appContext.config,{delimiters:D,compilerOptions:S}=h,_=tt(tt({isCustomElement:m,delimiters:D},w),S);h.render=Ua(g,_)}}s.render=h.render||Vt,yr&&yr(s)}Mi(s),Ki(),If(s),Ji(),Ai()}function a0(s){return new Proxy(s.attrs,{get(r,u){return Ot(s,"get","$attrs"),r[u]}})}function Ec(s){const r=h=>{s.exposed=h||{}};let u;return{get attrs(){return u||(u=a0(s))},slots:s.slots,emit:s.emit,expose:r}}function xn(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Gr(Lt(s.exposed)),{get(r,u){if(u in r)return r[u];if(u in Va)return Va[u](s)}}))}const n0=/(?:^|[-_])(\w)/g,r0=s=>s.replace(n0,r=>r.toUpperCase()).replace(/[-_]/g,"");function $a(s,r=!0){return Me(s)?s.displayName||s.name:s.name||r&&s.__name}function Cc(s,r,u=!1){let h=$a(r);if(!h&&r.__file){const g=r.__file.match(/([^/\\]+)\.\w+$/);g&&(h=g[1])}if(!h&&s&&s.parent){const g=m=>{for(const w in m)if(m[w]===r)return w};h=g(s.components||s.parent.type.components)||g(s.appContext.components)}return h?r0(h):u?"App":"Anonymous"}function o0(s){return Me(s)&&"__vccOpts"in s}const He=(s,r)=>qd(s,r,ws);function l0(){return null}function u0(){return null}function c0(s){}function h0(s,r){return null}function d0(){return Ac().slots}function f0(){return Ac().attrs}function Ac(){const s=ti();return s.setupContext||(s.setupContext=Ec(s))}function g0(s,r){const u=De(s)?s.reduce((h,g)=>(h[g]={},h),{}):s;for(const h in r){const g=u[h];g?De(g)||Me(g)?u[h]={type:g,default:r[h]}:g.default=r[h]:g===null&&(u[h]={default:r[h]})}return u}function p0(s,r){const u={};for(const h in s)r.includes(h)||Object.defineProperty(u,h,{enumerable:!0,get:()=>s[h]});return u}function x0(s){const r=ti();let u=s();return Ai(),Or(u)&&(u=u.catch(h=>{throw Mi(r),h})),[u,()=>Mi(r)]}function mn(s,r,u){const h=arguments.length;return h===2?it(r)&&!De(r)?Li(r)?Re(s,null,[r]):Re(s,r):Re(s,null,r):(h>3?u=Array.prototype.slice.call(arguments,2):h===3&&Li(u)&&(u=[u]),Re(s,r,u))}const kc=Symbol(""),m0=()=>{{const s=Ft(kc);return s||Tu("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function b0(){}function v0(s,r,u,h){const g=u[h];if(g&&Sc(g,s))return g;const m=r();return m.memo=s.slice(),u[h]=m}function Sc(s,r){const u=s.memo;if(u.length!=r.length)return!1;for(let h=0;h<u.length;h++)if(xs(u[h],r[h]))return!1;return $i>0&&At&&At.push(s),!0}const Pc="3.2.37",y0={createComponentInstance:vc,setupComponent:wc,renderComponentRoot:Ia,setCurrentRenderingInstance:ta,isVNode:Li,normalizeVNode:Mt},w0=y0,D0=null,E0=null,C0="http://www.w3.org/2000/svg",Xi=typeof document<"u"?document:null,Qo=Xi&&Xi.createElement("template"),A0={insert:(s,r,u)=>{r.insertBefore(s,u||null)},remove:s=>{const r=s.parentNode;r&&r.removeChild(s)},createElement:(s,r,u,h)=>{const g=r?Xi.createElementNS(C0,s):Xi.createElement(s,u?{is:u}:void 0);return s==="select"&&h&&h.multiple!=null&&g.setAttribute("multiple",h.multiple),g},createText:s=>Xi.createTextNode(s),createComment:s=>Xi.createComment(s),setText:(s,r)=>{s.nodeValue=r},setElementText:(s,r)=>{s.textContent=r},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Xi.querySelector(s),setScopeId(s,r){s.setAttribute(r,"")},cloneNode(s){const r=s.cloneNode(!0);return"_value"in s&&(r._value=s._value),r},insertStaticContent(s,r,u,h,g,m){const w=u?u.previousSibling:r.lastChild;if(g&&(g===m||g.nextSibling))for(;r.insertBefore(g.cloneNode(!0),u),!(g===m||!(g=g.nextSibling)););else{Qo.innerHTML=h?`<svg>${s}</svg>`:s;const D=Qo.content;if(h){const S=D.firstChild;for(;S.firstChild;)D.appendChild(S.firstChild);D.removeChild(S)}r.insertBefore(D,u)}return[w?w.nextSibling:r.firstChild,u?u.previousSibling:r.lastChild]}};function k0(s,r,u){const h=s._vtc;h&&(r=(r?[r,...h]:[...h]).join(" ")),r==null?s.removeAttribute("class"):u?s.setAttribute("class",r):s.className=r}function S0(s,r,u){const h=s.style,g=et(u);if(u&&!g){for(const m in u)wr(h,m,u[m]);if(r&&!et(r))for(const m in r)u[m]==null&&wr(h,m,"")}else{const m=h.display;g?r!==u&&(h.cssText=u):r&&s.removeAttribute("style"),"_vod"in s&&(h.display=m)}}const el=/\s*!important$/;function wr(s,r,u){if(De(u))u.forEach(h=>wr(s,r,h));else if(u==null&&(u=""),r.startsWith("--"))s.setProperty(r,u);else{const h=P0(s,r);el.test(u)?s.setProperty(Zt(h),u.replace(el,""),"important"):s[h]=u}}const tl=["Webkit","Moz","ms"],zn={};function P0(s,r){const u=zn[r];if(u)return u;let h=Rt(r);if(h!=="filter"&&h in s)return zn[r]=h;h=ua(h);for(let g=0;g<tl.length;g++){const m=tl[g]+h;if(m in s)return zn[r]=m}return r}const il="http://www.w3.org/1999/xlink";function T0(s,r,u,h,g){if(h&&r.startsWith("xlink:"))u==null?s.removeAttributeNS(il,r.slice(6,r.length)):s.setAttributeNS(il,r,u);else{const m=Jh(r);u==null||m&&!uu(u)?s.removeAttribute(r):s.setAttribute(r,m?"":u)}}function L0(s,r,u,h,g,m,w){if(r==="innerHTML"||r==="textContent"){h&&w(h,g,m),s[r]=u==null?"":u;return}if(r==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=u;const S=u==null?"":u;(s.value!==S||s.tagName==="OPTION")&&(s.value=S),u==null&&s.removeAttribute(r);return}let D=!1;if(u===""||u==null){const S=typeof s[r];S==="boolean"?u=uu(u):u==null&&S==="string"?(u="",D=!0):S==="number"&&(u=0,D=!0)}try{s[r]=u}catch{}D&&s.removeAttribute(r)}const[Tc,M0]=(()=>{let s=Date.now,r=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(s=performance.now.bind(performance));const u=navigator.userAgent.match(/firefox\/(\d+)/i);r=!!(u&&Number(u[1])<=53)}return[s,r]})();let Dr=0;const _0=Promise.resolve(),I0=()=>{Dr=0},F0=()=>Dr||(_0.then(I0),Dr=Tc());function ri(s,r,u,h){s.addEventListener(r,u,h)}function R0(s,r,u,h){s.removeEventListener(r,u,h)}function O0(s,r,u,h,g=null){const m=s._vei||(s._vei={}),w=m[r];if(h&&w)w.value=h;else{const[D,S]=z0(r);if(h){const _=m[r]=B0(h,g);ri(s,D,_,S)}else w&&(R0(s,D,w,S),m[r]=void 0)}}const sl=/(?:Once|Passive|Capture)$/;function z0(s){let r;if(sl.test(s)){r={};let u;for(;u=s.match(sl);)s=s.slice(0,s.length-u[0].length),r[u[0].toLowerCase()]=!0}return[Zt(s.slice(2)),r]}function B0(s,r){const u=h=>{const g=h.timeStamp||Tc();(M0||g>=u.attached-1)&&It(N0(h,u.value),r,5,[h])};return u.value=s,u.attached=F0(),u}function N0(s,r){if(De(r)){const u=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{u.call(s),s._stopped=!0},r.map(h=>g=>!g._stopped&&h&&h(g))}else return r}const al=/^on[a-z]/,H0=(s,r,u,h,g=!1,m,w,D,S)=>{r==="class"?k0(s,h,g):r==="style"?S0(s,u,h):oa(r)?Fr(r)||O0(s,r,u,h,w):(r[0]==="."?(r=r.slice(1),!0):r[0]==="^"?(r=r.slice(1),!1):X0(s,r,h,g))?L0(s,r,h,m,w,D,S):(r==="true-value"?s._trueValue=h:r==="false-value"&&(s._falseValue=h),T0(s,r,h,g))};function X0(s,r,u,h){return h?!!(r==="innerHTML"||r==="textContent"||r in s&&al.test(r)&&Me(u)):r==="spellcheck"||r==="draggable"||r==="translate"||r==="form"||r==="list"&&s.tagName==="INPUT"||r==="type"&&s.tagName==="TEXTAREA"||al.test(r)&&et(u)?!1:r in s}function Lc(s,r){const u=ui(s);class h extends bn{constructor(m){super(u,m,r)}}return h.def=u,h}const Y0=s=>Lc(s,jc),W0=typeof HTMLElement<"u"?HTMLElement:class{};class bn extends W0{constructor(r,u={},h){super(),this._def=r,this._props=u,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,bs(()=>{this._connected||(Cr(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const g of h)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const r=h=>{const{props:g,styles:m}=h,w=!De(g),D=g?w?Object.keys(g):g:[];let S;if(w)for(const _ in this._props){const F=g[_];(F===Number||F&&F.type===Number)&&(this._props[_]=Si(this._props[_]),(S||(S=Object.create(null)))[_]=!0)}this._numberProps=S;for(const _ of Object.keys(this))_[0]!=="_"&&this._setProp(_,this[_],!0,!1);for(const _ of D.map(Rt))Object.defineProperty(this,_,{get(){return this._getProp(_)},set(F){this._setProp(_,F)}});this._applyStyles(m),this._update()},u=this._def.__asyncLoader;u?u().then(r):r(this._def)}_setAttr(r){let u=this.getAttribute(r);this._numberProps&&this._numberProps[r]&&(u=Si(u)),this._setProp(Rt(r),u,!1)}_getProp(r){return this._props[r]}_setProp(r,u,h=!0,g=!0){u!==this._props[r]&&(this._props[r]=u,g&&this._instance&&this._update(),h&&(u===!0?this.setAttribute(Zt(r),""):typeof u=="string"||typeof u=="number"?this.setAttribute(Zt(r),u+""):u||this.removeAttribute(Zt(r))))}_update(){Cr(this._createVNode(),this.shadowRoot)}_createVNode(){const r=Re(this._def,tt({},this._props));return this._instance||(r.ce=u=>{this._instance=u,u.isCE=!0,u.emit=(g,...m)=>{this.dispatchEvent(new CustomEvent(g,{detail:m}))};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof bn){u.parent=h._instance;break}}),r}_applyStyles(r){r&&r.forEach(u=>{const h=document.createElement("style");h.textContent=u,this.shadowRoot.appendChild(h)})}}function V0(s="$style"){{const r=ti();if(!r)return Ve;const u=r.type.__cssModules;if(!u)return Ve;const h=u[s];return h||Ve}}function j0(s){const r=ti();if(!r)return;const u=()=>Er(r.subTree,s(r.proxy));Hu(u),fa(()=>{const h=new MutationObserver(u);h.observe(r.subTree.el.parentNode,{childList:!0}),ga(()=>h.disconnect())})}function Er(s,r){if(s.shapeFlag&128){const u=s.suspense;s=u.activeBranch,u.pendingBranch&&!u.isHydrating&&u.effects.push(()=>{Er(u.activeBranch,r)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)nl(s.el,r);else if(s.type===at)s.children.forEach(u=>Er(u,r));else if(s.type===Gi){let{el:u,anchor:h}=s;for(;u&&(nl(u,r),u!==h);)u=u.nextSibling}}function nl(s,r){if(s.nodeType===1){const u=s.style;for(const h in r)u.setProperty(`--${h}`,r[h])}}const pi="transition",Ls="animation",vn=(s,{slots:r})=>mn(Qr,_c(s),r);vn.displayName="Transition";const Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},G0=vn.props=tt({},Qr.props,Mc),Bi=(s,r=[])=>{De(s)?s.forEach(u=>u(...r)):s&&s(...r)},rl=s=>s?De(s)?s.some(r=>r.length>1):s.length>1:!1;function _c(s){const r={};for(const ie in s)ie in Mc||(r[ie]=s[ie]);if(s.css===!1)return r;const{name:u="v",type:h,duration:g,enterFromClass:m=`${u}-enter-from`,enterActiveClass:w=`${u}-enter-active`,enterToClass:D=`${u}-enter-to`,appearFromClass:S=m,appearActiveClass:_=w,appearToClass:F=D,leaveFromClass:z=`${u}-leave-from`,leaveActiveClass:O=`${u}-leave-active`,leaveToClass:W=`${u}-leave-to`}=s,$=U0(g),K=$&&$[0],se=$&&$[1],{onBeforeEnter:V,onEnter:P,onEnterCancelled:j,onLeave:Z,onLeaveCancelled:H,onBeforeAppear:ue=V,onAppear:J=P,onAppearCancelled:te=j}=r,re=(ie,ye,ge)=>{bi(ie,ye?F:D),bi(ie,ye?_:w),ge&&ge()},Q=(ie,ye)=>{ie._isLeaving=!1,bi(ie,z),bi(ie,W),bi(ie,O),ye&&ye()},le=ie=>(ye,ge)=>{const je=ie?J:P,Te=()=>re(ye,ie,ge);Bi(je,[ye,Te]),ol(()=>{bi(ye,ie?S:m),ai(ye,ie?F:D),rl(je)||ll(ye,h,K,Te)})};return tt(r,{onBeforeEnter(ie){Bi(V,[ie]),ai(ie,m),ai(ie,w)},onBeforeAppear(ie){Bi(ue,[ie]),ai(ie,S),ai(ie,_)},onEnter:le(!1),onAppear:le(!0),onLeave(ie,ye){ie._isLeaving=!0;const ge=()=>Q(ie,ye);ai(ie,z),Fc(),ai(ie,O),ol(()=>{!ie._isLeaving||(bi(ie,z),ai(ie,W),rl(Z)||ll(ie,h,se,ge))}),Bi(Z,[ie,ge])},onEnterCancelled(ie){re(ie,!1),Bi(j,[ie])},onAppearCancelled(ie){re(ie,!0),Bi(te,[ie])},onLeaveCancelled(ie){Q(ie),Bi(H,[ie])}})}function U0(s){if(s==null)return null;if(it(s))return[Bn(s.enter),Bn(s.leave)];{const r=Bn(s);return[r,r]}}function Bn(s){return Si(s)}function ai(s,r){r.split(/\s+/).forEach(u=>u&&s.classList.add(u)),(s._vtc||(s._vtc=new Set)).add(r)}function bi(s,r){r.split(/\s+/).forEach(h=>h&&s.classList.remove(h));const{_vtc:u}=s;u&&(u.delete(r),u.size||(s._vtc=void 0))}function ol(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let $0=0;function ll(s,r,u,h){const g=s._endId=++$0,m=()=>{g===s._endId&&h()};if(u)return setTimeout(m,u);const{type:w,timeout:D,propCount:S}=Ic(s,r);if(!w)return h();const _=w+"end";let F=0;const z=()=>{s.removeEventListener(_,O),m()},O=W=>{W.target===s&&++F>=S&&z()};setTimeout(()=>{F<S&&z()},D+1),s.addEventListener(_,O)}function Ic(s,r){const u=window.getComputedStyle(s),h=$=>(u[$]||"").split(", "),g=h(pi+"Delay"),m=h(pi+"Duration"),w=ul(g,m),D=h(Ls+"Delay"),S=h(Ls+"Duration"),_=ul(D,S);let F=null,z=0,O=0;r===pi?w>0&&(F=pi,z=w,O=m.length):r===Ls?_>0&&(F=Ls,z=_,O=S.length):(z=Math.max(w,_),F=z>0?w>_?pi:Ls:null,O=F?F===pi?m.length:S.length:0);const W=F===pi&&/\b(transform|all)(,|$)/.test(u[pi+"Property"]);return{type:F,timeout:z,propCount:O,hasTransform:W}}function ul(s,r){for(;s.length<r.length;)s=s.concat(s);return Math.max(...r.map((u,h)=>cl(u)+cl(s[h])))}function cl(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function Fc(){return document.body.offsetHeight}const Rc=new WeakMap,Oc=new WeakMap,q0={name:"TransitionGroup",props:tt({},G0,{tag:String,moveClass:String}),setup(s,{slots:r}){const u=ti(),h=Jr();let g,m;return fn(()=>{if(!g.length)return;const w=s.moveClass||`${s.name||"v"}-move`;if(!eg(g[0].el,u.vnode.el,w))return;g.forEach(K0),g.forEach(J0);const D=g.filter(Q0);Fc(),D.forEach(S=>{const _=S.el,F=_.style;ai(_,w),F.transform=F.webkitTransform=F.transitionDuration="";const z=_._moveCb=O=>{O&&O.target!==_||(!O||/transform$/.test(O.propertyName))&&(_.removeEventListener("transitionend",z),_._moveCb=null,bi(_,w))};_.addEventListener("transitionend",z)})}),()=>{const w=_e(s),D=_c(w);let S=w.tag||at;g=m,m=r.default?hn(r.default()):[];for(let _=0;_<m.length;_++){const F=m[_];F.key!=null&&Ui(F,vs(F,D,h,u))}if(g)for(let _=0;_<g.length;_++){const F=g[_];Ui(F,vs(F,D,h,u)),Rc.set(F,F.el.getBoundingClientRect())}return Re(S,null,m)}}},Z0=q0;function K0(s){const r=s.el;r._moveCb&&r._moveCb(),r._enterCb&&r._enterCb()}function J0(s){Oc.set(s,s.el.getBoundingClientRect())}function Q0(s){const r=Rc.get(s),u=Oc.get(s),h=r.left-u.left,g=r.top-u.top;if(h||g){const m=s.el.style;return m.transform=m.webkitTransform=`translate(${h}px,${g}px)`,m.transitionDuration="0s",s}}function eg(s,r,u){const h=s.cloneNode();s._vtc&&s._vtc.forEach(w=>{w.split(/\s+/).forEach(D=>D&&h.classList.remove(D))}),u.split(/\s+/).forEach(w=>w&&h.classList.add(w)),h.style.display="none";const g=r.nodeType===1?r:r.parentNode;g.appendChild(h);const{hasTransform:m}=Ic(h);return g.removeChild(h),m}const _i=s=>{const r=s.props["onUpdate:modelValue"]||!1;return De(r)?u=>gs(r,u):r};function tg(s){s.target.composing=!0}function hl(s){const r=s.target;r.composing&&(r.composing=!1,r.dispatchEvent(new Event("input")))}const qa={created(s,{modifiers:{lazy:r,trim:u,number:h}},g){s._assign=_i(g);const m=h||g.props&&g.props.type==="number";ri(s,r?"change":"input",w=>{if(w.target.composing)return;let D=s.value;u&&(D=D.trim()),m&&(D=Si(D)),s._assign(D)}),u&&ri(s,"change",()=>{s.value=s.value.trim()}),r||(ri(s,"compositionstart",tg),ri(s,"compositionend",hl),ri(s,"change",hl))},mounted(s,{value:r}){s.value=r==null?"":r},beforeUpdate(s,{value:r,modifiers:{lazy:u,trim:h,number:g}},m){if(s._assign=_i(m),s.composing||document.activeElement===s&&s.type!=="range"&&(u||h&&s.value.trim()===r||(g||s.type==="number")&&Si(s.value)===r))return;const w=r==null?"":r;s.value!==w&&(s.value=w)}},ro={deep:!0,created(s,r,u){s._assign=_i(u),ri(s,"change",()=>{const h=s._modelValue,g=Ds(s),m=s.checked,w=s._assign;if(De(h)){const D=en(h,g),S=D!==-1;if(m&&!S)w(h.concat(g));else if(!m&&S){const _=[...h];_.splice(D,1),w(_)}}else if(Zi(h)){const D=new Set(h);m?D.add(g):D.delete(g),w(D)}else w(Bc(s,m))})},mounted:dl,beforeUpdate(s,r,u){s._assign=_i(u),dl(s,r,u)}};function dl(s,{value:r,oldValue:u},h){s._modelValue=r,De(r)?s.checked=en(r,h.props.value)>-1:Zi(r)?s.checked=r.has(h.props.value):r!==u&&(s.checked=ki(r,Bc(s,!0)))}const oo={created(s,{value:r},u){s.checked=ki(r,u.props.value),s._assign=_i(u),ri(s,"change",()=>{s._assign(Ds(s))})},beforeUpdate(s,{value:r,oldValue:u},h){s._assign=_i(h),r!==u&&(s.checked=ki(r,h.props.value))}},zc={deep:!0,created(s,{value:r,modifiers:{number:u}},h){const g=Zi(r);ri(s,"change",()=>{const m=Array.prototype.filter.call(s.options,w=>w.selected).map(w=>u?Si(Ds(w)):Ds(w));s._assign(s.multiple?g?new Set(m):m:m[0])}),s._assign=_i(h)},mounted(s,{value:r}){fl(s,r)},beforeUpdate(s,r,u){s._assign=_i(u)},updated(s,{value:r}){fl(s,r)}};function fl(s,r){const u=s.multiple;if(!(u&&!De(r)&&!Zi(r))){for(let h=0,g=s.options.length;h<g;h++){const m=s.options[h],w=Ds(m);if(u)De(r)?m.selected=en(r,w)>-1:m.selected=r.has(w);else if(ki(Ds(m),r)){s.selectedIndex!==h&&(s.selectedIndex=h);return}}!u&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Ds(s){return"_value"in s?s._value:s.value}function Bc(s,r){const u=r?"_trueValue":"_falseValue";return u in s?s[u]:r}const Nc={created(s,r,u){Ta(s,r,u,null,"created")},mounted(s,r,u){Ta(s,r,u,null,"mounted")},beforeUpdate(s,r,u,h){Ta(s,r,u,h,"beforeUpdate")},updated(s,r,u,h){Ta(s,r,u,h,"updated")}};function Hc(s,r){switch(s){case"SELECT":return zc;case"TEXTAREA":return qa;default:switch(r){case"checkbox":return ro;case"radio":return oo;default:return qa}}}function Ta(s,r,u,h,g){const w=Hc(s.tagName,u.props&&u.props.type)[g];w&&w(s,r,u,h)}function ig(){qa.getSSRProps=({value:s})=>({value:s}),oo.getSSRProps=({value:s},r)=>{if(r.props&&ki(r.props.value,s))return{checked:!0}},ro.getSSRProps=({value:s},r)=>{if(De(s)){if(r.props&&en(s,r.props.value)>-1)return{checked:!0}}else if(Zi(s)){if(r.props&&s.has(r.props.value))return{checked:!0}}else if(s)return{checked:!0}},Nc.getSSRProps=(s,r)=>{if(typeof r.type!="string")return;const u=Hc(r.type.toUpperCase(),r.props&&r.props.type);if(u.getSSRProps)return u.getSSRProps(s,r)}}const sg=["ctrl","shift","alt","meta"],ag={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,r)=>sg.some(u=>s[`${u}Key`]&&!r.includes(u))},ng=(s,r)=>(u,...h)=>{for(let g=0;g<r.length;g++){const m=ag[r[g]];if(m&&m(u,r))return}return s(u,...h)},rg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},og=(s,r)=>u=>{if(!("key"in u))return;const h=Zt(u.key);if(r.some(g=>g===h||rg[g]===h))return s(u)},Xc={beforeMount(s,{value:r},{transition:u}){s._vod=s.style.display==="none"?"":s.style.display,u&&r?u.beforeEnter(s):Ms(s,r)},mounted(s,{value:r},{transition:u}){u&&r&&u.enter(s)},updated(s,{value:r,oldValue:u},{transition:h}){!r!=!u&&(h?r?(h.beforeEnter(s),Ms(s,!0),h.enter(s)):h.leave(s,()=>{Ms(s,!1)}):Ms(s,r))},beforeUnmount(s,{value:r}){Ms(s,r)}};function Ms(s,r){s.style.display=r?s._vod:"none"}function lg(){Xc.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const Yc=tt({patchProp:H0},A0);let qs,gl=!1;function Wc(){return qs||(qs=hc(Yc))}function Vc(){return qs=gl?qs:dc(Yc),gl=!0,qs}const Cr=(...s)=>{Wc().render(...s)},jc=(...s)=>{Vc().hydrate(...s)},Gc=(...s)=>{const r=Wc().createApp(...s),{mount:u}=r;return r.mount=h=>{const g=Uc(h);if(!g)return;const m=r._component;!Me(m)&&!m.render&&!m.template&&(m.template=g.innerHTML),g.innerHTML="";const w=u(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),w},r},ug=(...s)=>{const r=Vc().createApp(...s),{mount:u}=r;return r.mount=h=>{const g=Uc(h);if(g)return u(g,!0,g instanceof SVGElement)},r};function Uc(s){return et(s)?document.querySelector(s):s}let pl=!1;const cg=()=>{pl||(pl=!0,ig(),lg())},hg=()=>{},dg=Object.freeze(Object.defineProperty({__proto__:null,compile:hg,EffectScope:Br,ReactiveEffect:ca,customRef:Gd,effect:pd,effectScope:Nr,getCurrentScope:hd,isProxy:Wr,isReactive:Kt,isReadonly:ms,isRef:Qe,isShallow:Xa,markRaw:Lt,onScopeDispose:dd,proxyRefs:Gr,reactive:li,readonly:Yr,ref:kt,shallowReactive:ku,shallowReadonly:Xd,shallowRef:Su,stop:xd,toRaw:_e,toRef:Ys,toRefs:ur,triggerRef:Wd,unref:Oe,camelize:Rt,capitalize:ua,normalizeClass:qt,normalizeProps:id,normalizeStyle:ra,toDisplayString:ar,toHandlerKey:Xs,BaseTransition:Qr,Comment:mt,Fragment:at,KeepAlive:Cf,Static:Gi,Suspense:gf,Teleport:Zf,Text:ys,callWithAsyncErrorHandling:It,callWithErrorHandling:Jt,cloneVNode:ei,compatUtils:E0,computed:He,createBlock:Ti,createCommentVNode:Bs,createElementBlock:st,createElementVNode:Ne,createHydrationRenderer:dc,createPropsRestProxy:p0,createRenderer:hc,createSlots:Tf,createStaticVNode:ao,createTextVNode:pa,createVNode:Re,defineAsyncComponent:Df,defineComponent:ui,defineEmits:u0,defineExpose:c0,defineProps:l0,get devtools(){return ls},getCurrentInstance:ti,getTransitionRawChildren:hn,guardReactiveProps:mc,h:mn,handleError:Qi,initCustomFormatter:b0,inject:Ft,isMemoSame:Sc,isRuntimeOnly:s0,isVNode:Li,mergeDefaults:g0,mergeProps:bc,nextTick:bs,onActivated:Wu,onBeforeMount:Gu,onBeforeUnmount:gn,onBeforeUpdate:Uu,onDeactivated:Vu,onErrorCaptured:Ku,onMounted:fa,onRenderTracked:Zu,onRenderTriggered:qu,onServerPrefetch:$u,onUnmounted:ga,onUpdated:fn,openBlock:Ze,popScopeId:of,provide:Gs,pushScopeId:rf,queuePostFlushCb:qr,registerRuntimeCompiler:i0,renderList:tc,renderSlot:Lf,resolveComponent:Ju,resolveDirective:Pf,resolveDynamicComponent:ec,resolveFilter:D0,resolveTransitionHooks:vs,setBlockTracking:br,setDevtoolsHook:Ru,setTransitionHooks:Ui,ssrContextKey:kc,ssrUtils:w0,toHandlers:Mf,transformVNodeArgs:Kf,useAttrs:f0,useSSRContext:m0,useSlots:d0,useTransitionState:Jr,version:Pc,warn:Tu,watch:Ci,watchEffect:Nu,watchPostEffect:Hu,watchSyncEffect:vf,withAsyncContext:x0,withCtx:ia,withDefaults:h0,withDirectives:kf,withMemo:v0,withScopeId:lf,Transition:vn,TransitionGroup:Z0,VueElement:bn,createApp:Gc,createSSRApp:ug,defineCustomElement:Lc,defineSSRCustomElement:Y0,hydrate:jc,initDirectivesForSSR:cg,render:Cr,useCssModule:V0,useCssVars:j0,vModelCheckbox:ro,vModelDynamic:Nc,vModelRadio:oo,vModelSelect:zc,vModelText:qa,vShow:Xc,withKeys:og,withModifiers:ng},Symbol.toStringTag,{value:"Module"}));var fg=!1;function La(s,r,u){return Array.isArray(s)?(s.length=Math.max(s.length,r),s.splice(r,1,u),u):(s[r]=u,u)}function Nn(s,r){if(Array.isArray(s)){s.splice(r,1);return}delete s[r]}function gg(){return $c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function $c(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const pg=typeof Proxy=="function",xg="devtools-plugin:setup",mg="plugin:settings:set";let ts,Ar;function bg(){var s;return ts!==void 0||(typeof window<"u"&&window.performance?(ts=!0,Ar=window.performance):typeof global<"u"&&((s=global.perf_hooks)===null||s===void 0?void 0:s.performance)?(ts=!0,Ar=global.perf_hooks.performance):ts=!1),ts}function vg(){return bg()?Ar.now():Date.now()}class yg{constructor(r,u){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=r,this.hook=u;const h={};if(r.settings)for(const w in r.settings){const D=r.settings[w];h[w]=D.defaultValue}const g=`__vue-devtools-plugin-settings__${r.id}`;let m=Object.assign({},h);try{const w=localStorage.getItem(g),D=JSON.parse(w);Object.assign(m,D)}catch{}this.fallbacks={getSettings(){return m},setSettings(w){try{localStorage.setItem(g,JSON.stringify(w))}catch{}m=w},now(){return vg()}},u&&u.on(mg,(w,D)=>{w===this.plugin.id&&this.fallbacks.setSettings(D)}),this.proxiedOn=new Proxy({},{get:(w,D)=>this.target?this.target.on[D]:(...S)=>{this.onQueue.push({method:D,args:S})}}),this.proxiedTarget=new Proxy({},{get:(w,D)=>this.target?this.target[D]:D==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(D)?(...S)=>(this.targetQueue.push({method:D,args:S,resolve:()=>{}}),this.fallbacks[D](...S)):(...S)=>new Promise(_=>{this.targetQueue.push({method:D,args:S,resolve:_})})})}async setRealTarget(r){this.target=r;for(const u of this.onQueue)this.target.on[u.method](...u.args);for(const u of this.targetQueue)u.resolve(await this.target[u.method](...u.args))}}function qc(s,r){const u=s,h=$c(),g=gg(),m=pg&&u.enableEarlyProxy;if(g&&(h.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!m))g.emit(xg,s,r);else{const w=m?new yg(u,g):null;(h.__VUE_DEVTOOLS_PLUGINS__=h.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:u,setupFn:r,proxy:w}),w&&r(w.proxiedTarget)}}/*!
  * pinia v2.0.18
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let kr;const aa=s=>kr=s,Zc=Symbol("pinia");function qi(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var Qt;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(Qt||(Qt={}));const Di=typeof window<"u",xl=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function wg(s,{autoBom:r=!1}={}){return r&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob([String.fromCharCode(65279),s],{type:s.type}):s}function lo(s,r,u){const h=new XMLHttpRequest;h.open("GET",s),h.responseType="blob",h.onload=function(){Qc(h.response,r,u)},h.onerror=function(){console.error("could not download file")},h.send()}function Kc(s){const r=new XMLHttpRequest;r.open("HEAD",s,!1);try{r.send()}catch{}return r.status>=200&&r.status<=299}function Ra(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{const u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(u)}}const Oa=typeof navigator=="object"?navigator:{userAgent:""},Jc=(()=>/Macintosh/.test(Oa.userAgent)&&/AppleWebKit/.test(Oa.userAgent)&&!/Safari/.test(Oa.userAgent))(),Qc=Di?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Jc?Dg:"msSaveOrOpenBlob"in Oa?Eg:Cg:()=>{};function Dg(s,r="download",u){const h=document.createElement("a");h.download=r,h.rel="noopener",typeof s=="string"?(h.href=s,h.origin!==location.origin?Kc(h.href)?lo(s,r,u):(h.target="_blank",Ra(h)):Ra(h)):(h.href=URL.createObjectURL(s),setTimeout(function(){URL.revokeObjectURL(h.href)},4e4),setTimeout(function(){Ra(h)},0))}function Eg(s,r="download",u){if(typeof s=="string")if(Kc(s))lo(s,r,u);else{const h=document.createElement("a");h.href=s,h.target="_blank",setTimeout(function(){Ra(h)})}else navigator.msSaveOrOpenBlob(wg(s,u),r)}function Cg(s,r,u,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof s=="string")return lo(s,r,u);const g=s.type==="application/octet-stream",m=/constructor/i.test(String(xl.HTMLElement))||"safari"in xl,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||g&&m||Jc)&&typeof FileReader<"u"){const D=new FileReader;D.onloadend=function(){let S=D.result;if(typeof S!="string")throw h=null,new Error("Wrong reader.result type");S=w?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=S:location.assign(S),h=null},D.readAsDataURL(s)}else{const D=URL.createObjectURL(s);h?h.location.assign(D):location.href=D,h=null,setTimeout(function(){URL.revokeObjectURL(D)},4e4)}}function ut(s,r){const u="\u{1F34D} "+s;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(u,r):r==="error"?console.error(u):r==="warn"?console.warn(u):console.log(u)}function uo(s){return"_a"in s&&"install"in s}function eh(){if(!("clipboard"in navigator))return ut("Your browser doesn't support the Clipboard API","error"),!0}function th(s){return s instanceof Error&&s.message.toLowerCase().includes("document is not focused")?(ut('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function Ag(s){if(!eh())try{await navigator.clipboard.writeText(JSON.stringify(s.state.value)),ut("Global state copied to clipboard.")}catch(r){if(th(r))return;ut("Failed to serialize the state. Check the console for more details.","error"),console.error(r)}}async function kg(s){if(!eh())try{s.state.value=JSON.parse(await navigator.clipboard.readText()),ut("Global state pasted from clipboard.")}catch(r){if(th(r))return;ut("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(r)}}async function Sg(s){try{Qc(new Blob([JSON.stringify(s.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(r){ut("Failed to export the state as JSON. Check the console for more details.","error"),console.error(r)}}let ii;function Pg(){ii||(ii=document.createElement("input"),ii.type="file",ii.accept=".json");function s(){return new Promise((r,u)=>{ii.onchange=async()=>{const h=ii.files;if(!h)return r(null);const g=h.item(0);return r(g?{text:await g.text(),file:g}:null)},ii.oncancel=()=>r(null),ii.onerror=u,ii.click()})}return s}async function Tg(s){try{const u=await(await Pg())();if(!u)return;const{text:h,file:g}=u;s.state.value=JSON.parse(h),ut(`Global state imported from "${g.name}".`)}catch(r){ut("Failed to export the state as JSON. Check the console for more details.","error"),console.error(r)}}function Xt(s){return{_custom:{display:s}}}const ih="\u{1F34D} Pinia (root)",Sr="_root";function Lg(s){return uo(s)?{id:Sr,label:ih}:{id:s.$id,label:s.$id}}function Mg(s){if(uo(s)){const u=Array.from(s._s.keys()),h=s._s;return{state:u.map(m=>({editable:!0,key:m,value:s.state.value[m]})),getters:u.filter(m=>h.get(m)._getters).map(m=>{const w=h.get(m);return{editable:!1,key:m,value:w._getters.reduce((D,S)=>(D[S]=w[S],D),{})}})}}const r={state:Object.keys(s.$state).map(u=>({editable:!0,key:u,value:s.$state[u]}))};return s._getters&&s._getters.length&&(r.getters=s._getters.map(u=>({editable:!1,key:u,value:s[u]}))),s._customProperties.size&&(r.customProperties=Array.from(s._customProperties).map(u=>({editable:!0,key:u,value:s[u]}))),r}function _g(s){return s?Array.isArray(s)?s.reduce((r,u)=>(r.keys.push(u.key),r.operations.push(u.type),r.oldValue[u.key]=u.oldValue,r.newValue[u.key]=u.newValue,r),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Xt(s.type),key:Xt(s.key),oldValue:s.oldValue,newValue:s.newValue}:{}}function Ig(s){switch(s){case Qt.direct:return"mutation";case Qt.patchFunction:return"$patch";case Qt.patchObject:return"$patch";default:return"unknown"}}let cs=!0;const za=[],Hi="pinia:mutations",pt="pinia",Za=s=>"\u{1F34D} "+s;function Fg(s,r){qc({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:za,app:s},u=>{typeof u.now!="function"&&ut("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),u.addTimelineLayer({id:Hi,label:"Pinia \u{1F34D}",color:15064968}),u.addInspector({id:pt,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{Ag(r)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await kg(r),u.sendInspectorTree(pt),u.sendInspectorState(pt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{Sg(r)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await Tg(r),u.sendInspectorTree(pt),u.sendInspectorState(pt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:h=>{const g=r._s.get(h);g?g._isOptionsAPI?(g.$reset(),ut(`Store "${h}" reset.`)):ut(`Cannot reset "${h}" store because it's a setup store.`,"warn"):ut(`Cannot reset "${h}" store because it wasn't found.`,"warn")}}]}),u.on.inspectComponent((h,g)=>{const m=h.componentInstance&&h.componentInstance.proxy;if(m&&m._pStores){const w=h.componentInstance.proxy._pStores;Object.values(w).forEach(D=>{h.instanceData.state.push({type:Za(D.$id),key:"state",editable:!0,value:D._isOptionsAPI?{_custom:{value:_e(D.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>D.$reset()}]}}:Object.keys(D.$state).reduce((S,_)=>(S[_]=D.$state[_],S),{})}),D._getters&&D._getters.length&&h.instanceData.state.push({type:Za(D.$id),key:"getters",editable:!1,value:D._getters.reduce((S,_)=>{try{S[_]=D[_]}catch(F){S[_]=F}return S},{})})})}}),u.on.getInspectorTree(h=>{if(h.app===s&&h.inspectorId===pt){let g=[r];g=g.concat(Array.from(r._s.values())),h.rootNodes=(h.filter?g.filter(m=>"$id"in m?m.$id.toLowerCase().includes(h.filter.toLowerCase()):ih.toLowerCase().includes(h.filter.toLowerCase())):g).map(Lg)}}),u.on.getInspectorState(h=>{if(h.app===s&&h.inspectorId===pt){const g=h.nodeId===Sr?r:r._s.get(h.nodeId);if(!g)return;g&&(h.state=Mg(g))}}),u.on.editInspectorState((h,g)=>{if(h.app===s&&h.inspectorId===pt){const m=h.nodeId===Sr?r:r._s.get(h.nodeId);if(!m)return ut(`store "${h.nodeId}" not found`,"error");const{path:w}=h;uo(m)?w.unshift("state"):(w.length!==1||!m._customProperties.has(w[0])||w[0]in m.$state)&&w.unshift("$state"),cs=!1,h.set(m,w,h.state.value),cs=!0}}),u.on.editComponentState(h=>{if(h.type.startsWith("\u{1F34D}")){const g=h.type.replace(/^🍍\s*/,""),m=r._s.get(g);if(!m)return ut(`store "${g}" not found`,"error");const{path:w}=h;if(w[0]!=="state")return ut(`Invalid path for store "${g}":
${w}
Only state can be modified.`);w[0]="$state",cs=!1,h.set(m,w,h.state.value),cs=!0}})})}function Rg(s,r){za.includes(Za(r.$id))||za.push(Za(r.$id)),qc({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:za,app:s,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},u=>{const h=typeof u.now=="function"?u.now.bind(u):Date.now;r.$onAction(({after:w,onError:D,name:S,args:_})=>{const F=sh++;u.addTimelineEvent({layerId:Hi,event:{time:h(),title:"\u{1F6EB} "+S,subtitle:"start",data:{store:Xt(r.$id),action:Xt(S),args:_},groupId:F}}),w(z=>{Yi=void 0,u.addTimelineEvent({layerId:Hi,event:{time:h(),title:"\u{1F6EC} "+S,subtitle:"end",data:{store:Xt(r.$id),action:Xt(S),args:_,result:z},groupId:F}})}),D(z=>{Yi=void 0,u.addTimelineEvent({layerId:Hi,event:{time:h(),logType:"error",title:"\u{1F4A5} "+S,subtitle:"end",data:{store:Xt(r.$id),action:Xt(S),args:_,error:z},groupId:F}})})},!0),r._customProperties.forEach(w=>{Ci(()=>Oe(r[w]),(D,S)=>{u.notifyComponentUpdate(),u.sendInspectorState(pt),cs&&u.addTimelineEvent({layerId:Hi,event:{time:h(),title:"Change",subtitle:w,data:{newValue:D,oldValue:S},groupId:Yi}})},{deep:!0})}),r.$subscribe(({events:w,type:D},S)=>{if(u.notifyComponentUpdate(),u.sendInspectorState(pt),!cs)return;const _={time:h(),title:Ig(D),data:{store:Xt(r.$id),..._g(w)},groupId:Yi};Yi=void 0,D===Qt.patchFunction?_.subtitle="\u2935\uFE0F":D===Qt.patchObject?_.subtitle="\u{1F9E9}":w&&!Array.isArray(w)&&(_.subtitle=w.type),w&&(_.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:w}}),u.addTimelineEvent({layerId:Hi,event:_})},{detached:!0,flush:"sync"});const g=r._hotUpdate;r._hotUpdate=Lt(w=>{g(w),u.addTimelineEvent({layerId:Hi,event:{time:h(),title:"\u{1F525} "+r.$id,subtitle:"HMR update",data:{store:Xt(r.$id),info:Xt("HMR update")}}}),u.notifyComponentUpdate(),u.sendInspectorTree(pt),u.sendInspectorState(pt)});const{$dispose:m}=r;r.$dispose=()=>{m(),u.notifyComponentUpdate(),u.sendInspectorTree(pt),u.sendInspectorState(pt),u.getSettings().logStoreChanges&&ut(`Disposed "${r.$id}" store \u{1F5D1}`)},u.notifyComponentUpdate(),u.sendInspectorTree(pt),u.sendInspectorState(pt),u.getSettings().logStoreChanges&&ut(`"${r.$id}" store installed \u{1F195}`)})}let sh=0,Yi;function ml(s,r){const u=r.reduce((h,g)=>(h[g]=_e(s)[g],h),{});for(const h in u)s[h]=function(){const g=sh,m=new Proxy(s,{get(...w){return Yi=g,Reflect.get(...w)},set(...w){return Yi=g,Reflect.set(...w)}});return u[h].apply(m,arguments)}}function Og({app:s,store:r,options:u}){if(!r.$id.startsWith("__hot:")){if(u.state&&(r._isOptionsAPI=!0),typeof u.state=="function"){ml(r,Object.keys(u.actions));const h=r._hotUpdate;_e(r)._hotUpdate=function(g){h.apply(this,arguments),ml(r,Object.keys(g._hmrPayload.actions))}}Rg(s,r)}}function zg(){const s=Nr(!0),r=s.run(()=>kt({}));let u=[],h=[];const g=Lt({install(m){aa(g),g._a=m,m.provide(Zc,g),m.config.globalProperties.$pinia=g,Di&&Fg(m,g),h.forEach(w=>u.push(w)),h=[]},use(m){return!this._a&&!fg?h.push(m):u.push(m),this},_p:u,_a:null,_e:s,_s:new Map,state:r});return Di&&!0&&typeof Proxy<"u"&&g.use(Og),g}function ah(s,r){for(const u in r){const h=r[u];if(!(u in s))continue;const g=s[u];qi(g)&&qi(h)&&!Qe(h)&&!Kt(h)?s[u]=ah(g,h):s[u]=h}return s}const Bg=()=>{};function bl(s,r,u,h=Bg){s.push(r);const g=()=>{const m=s.indexOf(r);m>-1&&(s.splice(m,1),h())};return!u&&ti()&&ga(g),g}function is(s,...r){s.slice().forEach(u=>{u(...r)})}function Pr(s,r){for(const u in r){if(!r.hasOwnProperty(u))continue;const h=r[u],g=s[u];qi(g)&&qi(h)&&s.hasOwnProperty(u)&&!Qe(h)&&!Kt(h)?s[u]=Pr(g,h):s[u]=h}return s}const Ng=Symbol("pinia:skipHydration");function Hg(s){return!qi(s)||!s.hasOwnProperty(Ng)}const{assign:Yt}=Object;function vl(s){return!!(Qe(s)&&s.effect)}function yl(s,r,u,h){const{state:g,actions:m,getters:w}=r,D=u.state.value[s];let S;function _(){!D&&!h&&(u.state.value[s]=g?g():{});const F=ur(h?kt(g?g():{}).value:u.state.value[s]);return Yt(F,m,Object.keys(w||{}).reduce((z,O)=>(O in F&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${O}" in store "${s}".`),z[O]=Lt(He(()=>{aa(u);const W=u._s.get(s);return w[O].call(W,W)})),z),{}))}return S=Tr(s,_,r,u,h,!0),S.$reset=function(){const z=g?g():{};this.$patch(O=>{Yt(O,z)})},S}function Tr(s,r,u={},h,g,m){let w;const D=Yt({actions:{}},u);if(!h._e.active)throw new Error("Pinia destroyed");const S={deep:!0};S.onTrigger=re=>{_?W=re:_==!1&&!J._hotUpdating&&(Array.isArray(W)?W.push(re):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let _,F,z=Lt([]),O=Lt([]),W;const $=h.state.value[s];!m&&!$&&!g&&(h.state.value[s]={});const K=kt({});let se;function V(re){let Q;_=F=!1,W=[],typeof re=="function"?(re(h.state.value[s]),Q={type:Qt.patchFunction,storeId:s,events:W}):(Pr(h.state.value[s],re),Q={type:Qt.patchObject,payload:re,storeId:s,events:W});const le=se=Symbol();bs().then(()=>{se===le&&(_=!0)}),F=!0,is(z,Q,h.state.value[s])}const P=()=>{throw new Error(`\u{1F34D}: Store "${s}" is built using the setup syntax and does not implement $reset().`)};function j(){w.stop(),z=[],O=[],h._s.delete(s)}function Z(re,Q){return function(){aa(h);const le=Array.from(arguments),ie=[],ye=[];function ge(Pe){ie.push(Pe)}function je(Pe){ye.push(Pe)}is(O,{args:le,name:re,store:J,after:ge,onError:je});let Te;try{Te=Q.apply(this&&this.$id===s?this:J,le)}catch(Pe){throw is(ye,Pe),Pe}return Te instanceof Promise?Te.then(Pe=>(is(ie,Pe),Pe)).catch(Pe=>(is(ye,Pe),Promise.reject(Pe))):(is(ie,Te),Te)}}const H=Lt({actions:{},getters:{},state:[],hotState:K}),ue={_p:h,$id:s,$onAction:bl.bind(null,O),$patch:V,$reset:P,$subscribe(re,Q={}){const le=bl(z,re,Q.detached,()=>ie()),ie=w.run(()=>Ci(()=>h.state.value[s],ye=>{(Q.flush==="sync"?F:_)&&re({storeId:s,type:Qt.direct,events:W},ye)},Yt({},S,Q)));return le},$dispose:j},J=li(Yt(Di?{_customProperties:Lt(new Set),_hmrPayload:H}:{},ue));h._s.set(s,J);const te=h._e.run(()=>(w=Nr(),w.run(()=>r())));for(const re in te){const Q=te[re];if(Qe(Q)&&!vl(Q)||Kt(Q))g?La(K.value,re,Ys(te,re)):m||($&&Hg(Q)&&(Qe(Q)?Q.value=$[re]:Pr(Q,$[re])),h.state.value[s][re]=Q),H.state.push(re);else if(typeof Q=="function"){const le=g?Q:Z(re,Q);te[re]=le,H.actions[re]=Q,D.actions[re]=Q}else vl(Q)&&(H.getters[re]=m?u.getters[re]:Q,Di&&(te._getters||(te._getters=Lt([]))).push(re))}Yt(J,te),Yt(_e(J),te),Object.defineProperty(J,"$state",{get:()=>g?K.value:h.state.value[s],set:re=>{if(g)throw new Error("cannot set hotState");V(Q=>{Yt(Q,re)})}});{J._hotUpdate=Lt(Q=>{J._hotUpdating=!0,Q._hmrPayload.state.forEach(le=>{if(le in J.$state){const ie=Q.$state[le],ye=J.$state[le];typeof ie=="object"&&qi(ie)&&qi(ye)?ah(ie,ye):Q.$state[le]=ye}La(J,le,Ys(Q.$state,le))}),Object.keys(J.$state).forEach(le=>{le in Q.$state||Nn(J,le)}),_=!1,F=!1,h.state.value[s]=Ys(Q._hmrPayload,"hotState"),F=!0,bs().then(()=>{_=!0});for(const le in Q._hmrPayload.actions){const ie=Q[le];La(J,le,Z(le,ie))}for(const le in Q._hmrPayload.getters){const ie=Q._hmrPayload.getters[le],ye=m?He(()=>(aa(h),ie.call(J,J))):ie;La(J,le,ye)}Object.keys(J._hmrPayload.getters).forEach(le=>{le in Q._hmrPayload.getters||Nn(J,le)}),Object.keys(J._hmrPayload.actions).forEach(le=>{le in Q._hmrPayload.actions||Nn(J,le)}),J._hmrPayload=Q._hmrPayload,J._getters=Q._getters,J._hotUpdating=!1});const re={writable:!0,configurable:!0,enumerable:!1};Di&&["_p","_hmrPayload","_getters","_customProperties"].forEach(Q=>{Object.defineProperty(J,Q,{value:J[Q],...re})})}return h._p.forEach(re=>{if(Di){const Q=w.run(()=>re({store:J,app:h._a,pinia:h,options:D}));Object.keys(Q||{}).forEach(le=>J._customProperties.add(le)),Yt(J,Q)}else Yt(J,w.run(()=>re({store:J,app:h._a,pinia:h,options:D})))}),J.$state&&typeof J.$state=="object"&&typeof J.$state.constructor=="function"&&!J.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${J.$id}".`),$&&m&&u.hydrate&&u.hydrate(J.$state,$),_=!0,F=!0,J}function xa(s,r,u){let h,g;const m=typeof r=="function";typeof s=="string"?(h=s,g=m?u:r):(g=s,h=s.id);function w(D,S){const _=ti();if(D=D||_&&Ft(Zc),D&&aa(D),!kr)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);D=kr,D._s.has(h)||(m?Tr(h,r,g,D):yl(h,g,D),w._pinia=D);const F=D._s.get(h);if(S){const z="__hot:"+h,O=m?Tr(z,r,g,D,!0):yl(z,Yt({},g),D,!0);S._hotUpdate(O),delete D.state.value[z],D._s.delete(z)}if(Di&&_&&_.proxy&&!S){const z=_.proxy,O="_pStores"in z?z._pStores:z._pStores={};O[h]=F}return F}return w.$id=h,w}function nh(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Xg(s){var r=s.default;if(typeof r=="function"){var u=function(){return r.apply(this,arguments)};u.prototype=r.prototype}else u={};return Object.defineProperty(u,"__esModule",{value:!0}),Object.keys(s).forEach(function(h){var g=Object.getOwnPropertyDescriptor(s,h);Object.defineProperty(u,h,g.get?g:{enumerable:!0,get:function(){return s[h]}})}),u}var rh={exports:{}};const Yg=Xg(dg);var Ma={exports:{}};/*!
 * ApexCharts v3.35.4
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */var wl;function Wg(){return wl||(wl=1,function(s,r){function u(T,e){var t=Object.keys(T);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(T);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(T,a).enumerable})),t.push.apply(t,i)}return t}function h(T){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?u(Object(t),!0).forEach(function(i){S(T,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(i){Object.defineProperty(T,i,Object.getOwnPropertyDescriptor(t,i))})}return T}function g(T){return(g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(T)}function m(T,e){if(!(T instanceof e))throw new TypeError("Cannot call a class as a function")}function w(T,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(T,i.key,i)}}function D(T,e,t){return e&&w(T.prototype,e),t&&w(T,t),T}function S(T,e,t){return e in T?Object.defineProperty(T,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):T[e]=t,T}function _(T,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(e&&e.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),e&&z(T,e)}function F(T){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(T)}function z(T,e){return(z=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(T,e)}function O(T,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(T)}function W(T){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var t,i=F(T);if(e){var a=F(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return O(this,t)}}function $(T,e){return function(t){if(Array.isArray(t))return t}(T)||function(t,i){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,l,o=[],c=!0,d=!1;try{for(a=a.call(t);!(c=(n=a.next()).done)&&(o.push(n.value),!i||o.length!==i);c=!0);}catch(p){d=!0,l=p}finally{try{c||a.return==null||a.return()}finally{if(d)throw l}}return o}}(T,e)||se(T,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function K(T){return function(e){if(Array.isArray(e))return V(e)}(T)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(T)||se(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function se(T,e){if(T){if(typeof T=="string")return V(T,e);var t=Object.prototype.toString.call(T).slice(8,-1);return t==="Object"&&T.constructor&&(t=T.constructor.name),t==="Map"||t==="Set"?Array.from(T):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(T,e):void 0}}function V(T,e){(e==null||e>T.length)&&(e=T.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=T[t];return i}var P=function(){function T(){m(this,T)}return D(T,[{key:"shadeRGBColor",value:function(e,t){var i=t.split(","),a=e<0?0:255,n=e<0?-1*e:e,l=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),c=parseInt(i[2],10);return"rgb("+(Math.round((a-l)*n)+l)+","+(Math.round((a-o)*n)+o)+","+(Math.round((a-c)*n)+c)+")"}},{key:"shadeHexColor",value:function(e,t){var i=parseInt(t.slice(1),16),a=e<0?0:255,n=e<0?-1*e:e,l=i>>16,o=i>>8&255,c=255&i;return"#"+(16777216+65536*(Math.round((a-l)*n)+l)+256*(Math.round((a-o)*n)+o)+(Math.round((a-c)*n)+c)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,t){return T.isColorHex(t)?this.shadeHexColor(e,t):this.shadeRGBColor(e,t)}}],[{key:"bind",value:function(e,t){return function(){return e.apply(t,arguments)}}},{key:"isObject",value:function(e){return e&&g(e)==="object"&&!Array.isArray(e)&&e!=null}},{key:"is",value:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"}},{key:"listToArray",value:function(e){var t,i=[];for(t=0;t<e.length;t++)i[t]=e[t];return i}},{key:"extend",value:function(e,t){var i=this;typeof Object.assign!="function"&&(Object.assign=function(n){if(n==null)throw new TypeError("Cannot convert undefined or null to object");for(var l=Object(n),o=1;o<arguments.length;o++){var c=arguments[o];if(c!=null)for(var d in c)c.hasOwnProperty(d)&&(l[d]=c[d])}return l});var a=Object.assign({},e);return this.isObject(e)&&this.isObject(t)&&Object.keys(t).forEach(function(n){i.isObject(t[n])&&n in e?a[n]=i.extend(e[n],t[n]):Object.assign(a,S({},n,t[n]))}),a}},{key:"extendArray",value:function(e,t){var i=[];return e.map(function(a){i.push(T.extend(t,a))}),e=i}},{key:"monthMod",value:function(e){return e%12}},{key:"clone",value:function(e){if(T.is("Array",e)){for(var t=[],i=0;i<e.length;i++)t[i]=this.clone(e[i]);return t}if(T.is("Null",e))return null;if(T.is("Date",e))return e;if(g(e)==="object"){var a={};for(var n in e)e.hasOwnProperty(n)&&(a[n]=this.clone(e[n]));return a}return e}},{key:"log10",value:function(e){return Math.log(e)/Math.LN10}},{key:"roundToBase10",value:function(e){return Math.pow(10,Math.floor(Math.log10(e)))}},{key:"roundToBase",value:function(e,t){return Math.pow(t,Math.floor(Math.log(e)/Math.log(t)))}},{key:"parseNumber",value:function(e){return e===null?e:parseFloat(e)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(e){var t=String(e).split(/[eE]/);if(t.length===1)return t[0];var i="",a=e<0?"-":"",n=t[0].replace(".",""),l=Number(t[1])+1;if(l<0){for(i=a+"0.";l++;)i+="0";return i+n.replace(/^-/,"")}for(l-=n.length;l--;)i+="0";return n+i}},{key:"getDimensions",value:function(e){var t=getComputedStyle(e,null),i=e.clientHeight,a=e.clientWidth;return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),[a-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),i]}},{key:"getBoundingClientRect",value:function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:e.clientWidth,height:e.clientHeight,x:t.left,y:t.top}}},{key:"getLargestStringFromArr",value:function(e){return e.reduce(function(t,i){return Array.isArray(i)&&(i=i.reduce(function(a,n){return a.length>n.length?a:n})),t.length>i.length?t:i},0)}},{key:"hexToRgba",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#999999",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.6;e.substring(0,1)!=="#"&&(e="#999999");var i=e.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(i[a].length===1?i[a]+i[a]:i[a],16);return t!==void 0&&i.push(t),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(e){return parseFloat(e.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(e){return(e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&e.length===4?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e)}},{key:"getPolygonPos",value:function(e,t){for(var i=[],a=2*Math.PI/t,n=0;n<t;n++){var l={};l.x=e*Math.sin(n*a),l.y=-e*Math.cos(n*a),i.push(l)}return i}},{key:"polarToCartesian",value:function(e,t,i,a){var n=(a-90)*Math.PI/180;return{x:e+i*Math.cos(n),y:t+i*Math.sin(n)}}},{key:"escapeString",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",i=e.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,t)}},{key:"negToZero",value:function(e){return e<0?0:e}},{key:"moveIndexInArray",value:function(e,t,i){if(i>=e.length)for(var a=i-e.length+1;a--;)e.push(void 0);return e.splice(i,0,e.splice(t,1)[0]),e}},{key:"extractNumber",value:function(e){return parseFloat(e.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e}},{key:"setELstyles",value:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e.style.key=t[i])}},{key:"isNumber",value:function(e){return!isNaN(e)&&parseFloat(Number(e))===e&&!isNaN(parseInt(e,10))}},{key:"isFloat",value:function(e){return Number(e)===e&&e%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(window.navigator.userAgent.indexOf("MSIE")!==-1||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}}]),T}(),j=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return D(T,[{key:"setEasingFunctions",value:function(){var e;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":e="-";break;case"easein":e="<";break;case"easeout":e=">";break;case"easeinout":e="<>";break;case"swing":e=function(t){var i=1.70158;return(t-=1)*t*((i+1)*t+i)+1};break;case"bounce":e=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":e=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:e="<>"}this.w.globals.easing=e}}},{key:"animateLine",value:function(e,t,i,a){e.attr(t).animate(a).attr(i)}},{key:"animateMarker",value:function(e,t,i,a,n,l){t||(t=0),e.attr({r:t,width:t,height:t}).animate(a,n).attr({r:i,width:i.width,height:i.height}).afterAll(function(){l()})}},{key:"animateCircle",value:function(e,t,i,a,n){e.attr({r:t.r,cx:t.cx,cy:t.cy}).animate(a,n).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(e,t,i,a,n){e.attr(t).animate(a).attr(i).afterAll(function(){return n()})}},{key:"animatePathsGradually",value:function(e){var t=e.el,i=e.realIndex,a=e.j,n=e.fill,l=e.pathFrom,o=e.pathTo,c=e.speed,d=e.delay,p=this.w,x=0;p.config.chart.animations.animateGradually.enabled&&(x=p.config.chart.animations.animateGradually.delay),p.config.chart.animations.dynamicAnimation.enabled&&p.globals.dataChanged&&p.config.chart.type!=="bar"&&(x=0),this.morphSVG(t,i,a,p.config.chart.type!=="line"||p.globals.comboCharts?n:"stroke",l,o,c,d*x)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach(function(e){e.el.classList.remove("apexcharts-element-hidden")})}},{key:"animationCompleted",value:function(e){var t=this.w;t.globals.animationEnded||(t.globals.animationEnded=!0,this.showDelayedElements(),typeof t.config.chart.events.animationEnd=="function"&&t.config.chart.events.animationEnd(this.ctx,{el:e,w:t}))}},{key:"morphSVG",value:function(e,t,i,a,n,l,o,c){var d=this,p=this.w;n||(n=e.attr("pathFrom")),l||(l=e.attr("pathTo"));var x=function(b){return p.config.chart.type==="radar"&&(o=1),"M 0 ".concat(p.globals.gridHeight)};(!n||n.indexOf("undefined")>-1||n.indexOf("NaN")>-1)&&(n=x()),(!l||l.indexOf("undefined")>-1||l.indexOf("NaN")>-1)&&(l=x()),p.globals.shouldAnimate||(o=1),e.plot(n).animate(1,p.globals.easing,c).plot(n).animate(o,p.globals.easing,c).plot(l).afterAll(function(){P.isNumber(i)?i===p.globals.series[p.globals.maxValsInArrayIndex].length-2&&p.globals.shouldAnimate&&d.animationCompleted(e):a!=="none"&&p.globals.shouldAnimate&&(!p.globals.comboCharts&&t===p.globals.series.length-1||p.globals.comboCharts)&&d.animationCompleted(e),d.showDelayedElements()})}}]),T}(),Z=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"getDefaultFilter",value:function(e,t){var i=this.w;e.unfilter(!0),new window.SVG.Filter().size("120%","180%","-5%","-40%"),i.config.states.normal.filter!=="none"?this.applyFilter(e,t,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(e,i.config.chart.dropShadow,t)}},{key:"addNormalFilter",value:function(e,t){var i=this.w;i.config.chart.dropShadow.enabled&&!e.node.classList.contains("apexcharts-marker")&&this.dropShadow(e,i.config.chart.dropShadow,t)}},{key:"addLightenFilter",value:function(e,t,i){var a=this,n=this.w,l=i.intensity;e.unfilter(!0),new window.SVG.Filter,e.filter(function(o){var c=n.config.chart.dropShadow;(c.enabled?a.addShadow(o,t,c):o).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:l}})}),e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)}},{key:"addDarkenFilter",value:function(e,t,i){var a=this,n=this.w,l=i.intensity;e.unfilter(!0),new window.SVG.Filter,e.filter(function(o){var c=n.config.chart.dropShadow;(c.enabled?a.addShadow(o,t,c):o).componentTransfer({rgb:{type:"linear",slope:l}})}),e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)}},{key:"applyFilter",value:function(e,t,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(e,t);break;case"lighten":this.addLightenFilter(e,t,{intensity:a});break;case"darken":this.addDarkenFilter(e,t,{intensity:a})}}},{key:"addShadow",value:function(e,t,i){var a=i.blur,n=i.top,l=i.left,o=i.color,c=i.opacity,d=e.flood(Array.isArray(o)?o[t]:o,c).composite(e.sourceAlpha,"in").offset(l,n).gaussianBlur(a).merge(e.source);return e.blend(e.source,d)}},{key:"dropShadow",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=t.top,n=t.left,l=t.blur,o=t.color,c=t.opacity,d=t.noUserSpaceOnUse,p=this.w;return e.unfilter(!0),P.isIE()&&p.config.chart.type==="radialBar"||(o=Array.isArray(o)?o[i]:o,e.filter(function(x){var b=null;b=P.isSafari()||P.isFirefox()||P.isIE()?x.flood(o,c).composite(x.sourceAlpha,"in").offset(n,a).gaussianBlur(l):x.flood(o,c).composite(x.sourceAlpha,"in").offset(n,a).gaussianBlur(l).merge(x.source),x.blend(x.source,b)}),d||e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)),e}},{key:"setSelectionFilter",value:function(e,t,i){var a=this.w;if(a.globals.selectedDataPoints[t]!==void 0&&a.globals.selectedDataPoints[t].indexOf(i)>-1){e.node.setAttribute("selected",!0);var n=a.config.states.active.filter;n!=="none"&&this.applyFilter(e,t,n.type,n.value)}}},{key:"_scaleFilterSize",value:function(e){(function(t){for(var i in t)t.hasOwnProperty(i)&&e.setAttribute(i,t[i])})({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),T}(),H=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"drawLine",value:function(e,t,i,a){var n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"#a8a8a8",l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"butt",d=this.w,p=d.globals.dom.Paper.line().attr({x1:e,y1:t,x2:i,y2:a,stroke:n,"stroke-dasharray":l,"stroke-width":o,"stroke-linecap":c});return p}},{key:"drawRect",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"#fefefe",o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:1,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,d=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,p=arguments.length>9&&arguments[9]!==void 0?arguments[9]:0,x=this.w,b=x.globals.dom.Paper.rect();return b.attr({x:e,y:t,width:i>0?i:0,height:a>0?a:0,rx:n,ry:n,opacity:o,"stroke-width":c!==null?c:0,stroke:d!==null?d:"none","stroke-dasharray":p}),b.node.setAttribute("fill",l),b}},{key:"drawPolygon",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#e1e1e1",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"none",n=this.w,l=n.globals.dom.Paper.polygon(e).attr({fill:a,stroke:t,"stroke-width":i});return l}},{key:"drawCircle",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.w;e<0&&(e=0);var a=i.globals.dom.Paper.circle(2*e);return t!==null&&a.attr(t),a}},{key:"drawPath",value:function(e){var t=e.d,i=t===void 0?"":t,a=e.stroke,n=a===void 0?"#a8a8a8":a,l=e.strokeWidth,o=l===void 0?1:l,c=e.fill,d=e.fillOpacity,p=d===void 0?1:d,x=e.strokeOpacity,b=x===void 0?1:x,y=e.classes,C=e.strokeLinecap,E=C===void 0?null:C,k=e.strokeDashArray,M=k===void 0?0:k,I=this.w;return E===null&&(E=I.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(I.globals.gridHeight)),I.globals.dom.Paper.path(i).attr({fill:c,"fill-opacity":p,stroke:n,"stroke-opacity":b,"stroke-linecap":E,"stroke-width":o,"stroke-dasharray":M,class:y})}},{key:"group",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=this.w,i=t.globals.dom.Paper.group();return e!==null&&i.attr(e),i}},{key:"move",value:function(e,t){var i=["M",e,t].join(" ");return i}},{key:"line",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=null;return i===null?a=["L",e,t].join(" "):i==="H"?a=["H",e].join(" "):i==="V"&&(a=["V",t].join(" ")),a}},{key:"curve",value:function(e,t,i,a,n,l){var o=["C",e,t,i,a,n,l].join(" ");return o}},{key:"quadraticCurve",value:function(e,t,i,a){return["Q",e,t,i,a].join(" ")}},{key:"arc",value:function(e,t,i,a,n,l,o){var c=arguments.length>7&&arguments[7]!==void 0&&arguments[7],d="A";c&&(d="a");var p=[d,e,t,i,a,n,l,o].join(" ");return p}},{key:"renderPaths",value:function(e){var t,i=e.j,a=e.realIndex,n=e.pathFrom,l=e.pathTo,o=e.stroke,c=e.strokeWidth,d=e.strokeLinecap,p=e.fill,x=e.animationDelay,b=e.initialSpeed,y=e.dataChangeSpeed,C=e.className,E=e.shouldClipToGrid,k=E===void 0||E,M=e.bindEventsOnPaths,I=M===void 0||M,R=e.drawShadow,f=R===void 0||R,v=this.w,A=new Z(this.ctx),L=new j(this.ctx),N=this.w.config.chart.animations.enabled,G=N&&this.w.config.chart.animations.dynamicAnimation.enabled,X=!!(N&&!v.globals.resized||G&&v.globals.dataChanged&&v.globals.shouldAnimate);X?t=n:(t=l,v.globals.animationEnded=!0);var ne=v.config.stroke.dashArray,ee=0;ee=Array.isArray(ne)?ne[a]:v.config.stroke.dashArray;var pe=this.drawPath({d:t,stroke:o,strokeWidth:c,fill:p,fillOpacity:1,classes:C,strokeLinecap:d,strokeDashArray:ee});if(pe.attr("index",a),k&&pe.attr({"clip-path":"url(#gridRectMask".concat(v.globals.cuid,")")}),v.config.states.normal.filter.type!=="none")A.getDefaultFilter(pe,a);else if(v.config.chart.dropShadow.enabled&&f&&(!v.config.chart.dropShadow.enabledOnSeries||v.config.chart.dropShadow.enabledOnSeries&&v.config.chart.dropShadow.enabledOnSeries.indexOf(a)!==-1)){var Ae=v.config.chart.dropShadow;A.dropShadow(pe,Ae,a)}I&&(pe.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,pe)),pe.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,pe)),pe.node.addEventListener("mousedown",this.pathMouseDown.bind(this,pe))),pe.attr({pathTo:l,pathFrom:n});var Je={el:pe,j:i,realIndex:a,pathFrom:n,pathTo:l,fill:p,strokeWidth:c,delay:x};return!N||v.globals.resized||v.globals.dataChanged?!v.globals.resized&&v.globals.dataChanged||L.showDelayedElements():L.animatePathsGradually(h(h({},Je),{},{speed:b})),v.globals.dataChanged&&G&&X&&L.animatePathsGradually(h(h({},Je),{},{speed:y})),pe}},{key:"drawPattern",value:function(e,t,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"#a8a8a8",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=this.w,o=l.globals.dom.Paper.pattern(t,i,function(c){e==="horizontalLines"?c.line(0,0,i,0).stroke({color:a,width:n+1}):e==="verticalLines"?c.line(0,0,0,t).stroke({color:a,width:n+1}):e==="slantedLines"?c.line(0,0,t,i).stroke({color:a,width:n}):e==="squares"?c.rect(t,i).fill("none").stroke({color:a,width:n}):e==="circles"&&c.circle(t).fill("none").stroke({color:a,width:n})});return o}},{key:"drawGradient",value:function(e,t,i,a,n){var l,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,d=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,p=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,x=this.w;t.length<9&&t.indexOf("#")===0&&(t=P.hexToRgba(t,a)),i.length<9&&i.indexOf("#")===0&&(i=P.hexToRgba(i,n));var b=0,y=1,C=1,E=null;c!==null&&(b=c[0]!==void 0?c[0]/100:0,y=c[1]!==void 0?c[1]/100:1,C=c[2]!==void 0?c[2]/100:1,E=c[3]!==void 0?c[3]/100:null);var k=!(x.config.chart.type!=="donut"&&x.config.chart.type!=="pie"&&x.config.chart.type!=="polarArea"&&x.config.chart.type!=="bubble");if(l=d===null||d.length===0?x.globals.dom.Paper.gradient(k?"radial":"linear",function(R){R.at(b,t,a),R.at(y,i,n),R.at(C,i,n),E!==null&&R.at(E,t,a)}):x.globals.dom.Paper.gradient(k?"radial":"linear",function(R){(Array.isArray(d[p])?d[p]:d).forEach(function(f){R.at(f.offset/100,f.color,f.opacity)})}),k){var M=x.globals.gridWidth/2,I=x.globals.gridHeight/2;x.config.chart.type!=="bubble"?l.attr({gradientUnits:"userSpaceOnUse",cx:M,cy:I,r:o}):l.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else e==="vertical"?l.from(0,0).to(0,1):e==="diagonal"?l.from(0,0).to(1,1):e==="horizontal"?l.from(0,1).to(1,1):e==="diagonal2"&&l.from(1,0).to(0,1);return l}},{key:"getTextBasedOnMaxWidth",value:function(e){var t=e.text,i=e.maxWidth,a=e.fontSize,n=e.fontFamily,l=this.getTextRects(t,a,n),o=l.width/t.length,c=Math.floor(i/o);return i<l.width?t.slice(0,c-3)+"...":t}},{key:"drawText",value:function(e){var t=this,i=e.x,a=e.y,n=e.text,l=e.textAnchor,o=e.fontSize,c=e.fontFamily,d=e.fontWeight,p=e.foreColor,x=e.opacity,b=e.maxWidth,y=e.cssClass,C=y===void 0?"":y,E=e.isPlainText,k=E===void 0||E,M=this.w;n===void 0&&(n="");var I=n;l||(l="start"),p&&p.length||(p=M.config.chart.foreColor),c=c||M.config.chart.fontFamily,d=d||"regular";var R,f={maxWidth:b,fontSize:o=o||"11px",fontFamily:c};return Array.isArray(n)?R=M.globals.dom.Paper.text(function(v){for(var A=0;A<n.length;A++)I=n[A],b&&(I=t.getTextBasedOnMaxWidth(h({text:n[A]},f))),A===0?v.tspan(I):v.tspan(I).newLine()}):(b&&(I=this.getTextBasedOnMaxWidth(h({text:n},f))),R=k?M.globals.dom.Paper.plain(n):M.globals.dom.Paper.text(function(v){return v.tspan(I)})),R.attr({x:i,y:a,"text-anchor":l,"dominant-baseline":"auto","font-size":o,"font-family":c,"font-weight":d,fill:p,class:"apexcharts-text "+C}),R.node.style.fontFamily=c,R.node.style.opacity=x,R}},{key:"drawMarker",value:function(e,t,i){e=e||0;var a=i.pSize||0,n=null;if(i.shape==="square"||i.shape==="rect"){var l=i.pRadius===void 0?a/2:i.pRadius;t!==null&&a||(a=0,l=0);var o=1.2*a+l,c=this.drawRect(o,o,o,o,l);c.attr({x:e-o/2,y:t-o/2,cx:e,cy:t,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),n=c}else i.shape!=="circle"&&i.shape||(P.isNumber(t)||(a=0,t=0),n=this.drawCircle(a,{cx:e,cy:t,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return n}},{key:"pathMouseEnter",value:function(e,t){var i=this.w,a=new Z(this.ctx),n=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10);if(typeof i.config.chart.events.dataPointMouseEnter=="function"&&i.config.chart.events.dataPointMouseEnter(t,this.ctx,{seriesIndex:n,dataPointIndex:l,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[t,this.ctx,{seriesIndex:n,dataPointIndex:l,w:i}]),(i.config.states.active.filter.type==="none"||e.node.getAttribute("selected")!=="true")&&i.config.states.hover.filter.type!=="none"&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(e,n,o.type,o.value)}}},{key:"pathMouseLeave",value:function(e,t){var i=this.w,a=new Z(this.ctx),n=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10);typeof i.config.chart.events.dataPointMouseLeave=="function"&&i.config.chart.events.dataPointMouseLeave(t,this.ctx,{seriesIndex:n,dataPointIndex:l,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[t,this.ctx,{seriesIndex:n,dataPointIndex:l,w:i}]),i.config.states.active.filter.type!=="none"&&e.node.getAttribute("selected")==="true"||i.config.states.hover.filter.type!=="none"&&a.getDefaultFilter(e,n)}},{key:"pathMouseDown",value:function(e,t){var i=this.w,a=new Z(this.ctx),n=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10),o="false";if(e.node.getAttribute("selected")==="true"){if(e.node.setAttribute("selected","false"),i.globals.selectedDataPoints[n].indexOf(l)>-1){var c=i.globals.selectedDataPoints[n].indexOf(l);i.globals.selectedDataPoints[n].splice(c,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var d=i.globals.dom.Paper.select(".apexcharts-series path").members,p=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,x=function(C){Array.prototype.forEach.call(C,function(E){E.node.setAttribute("selected","false"),a.getDefaultFilter(E,n)})};x(d),x(p)}e.node.setAttribute("selected","true"),o="true",i.globals.selectedDataPoints[n]===void 0&&(i.globals.selectedDataPoints[n]=[]),i.globals.selectedDataPoints[n].push(l)}if(o==="true"){var b=i.config.states.active.filter;if(b!=="none")a.applyFilter(e,n,b.type,b.value);else if(i.config.states.hover.filter!=="none"&&!i.globals.isTouchDevice){var y=i.config.states.hover.filter;a.applyFilter(e,n,y.type,y.value)}}else i.config.states.active.filter.type!=="none"&&(i.config.states.hover.filter.type==="none"||i.globals.isTouchDevice?a.getDefaultFilter(e,n):(y=i.config.states.hover.filter,a.applyFilter(e,n,y.type,y.value)));typeof i.config.chart.events.dataPointSelection=="function"&&i.config.chart.events.dataPointSelection(t,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:n,dataPointIndex:l,w:i}),t&&this.ctx.events.fireEvent("dataPointSelection",[t,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:n,dataPointIndex:l,w:i}])}},{key:"rotateAroundCenter",value:function(e){var t={};return e&&typeof e.getBBox=="function"&&(t=e.getBBox()),{x:t.x+t.width/2,y:t.y+t.height/2}}},{key:"getTextRects",value:function(e,t,i,a){var n=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],l=this.w,o=this.drawText({x:-200,y:-200,text:e,textAnchor:"start",fontSize:t,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),l.globals.dom.Paper.add(o);var c=o.bbox();return n||(c=o.node.getBoundingClientRect()),o.remove(),{width:c.width,height:c.height}}},{key:"placeTextWithEllipsis",value:function(e,t,i){if(typeof e.getComputedTextLength=="function"&&(e.textContent=t,t.length>0&&e.getComputedTextLength()>=i/1.1)){for(var a=t.length-3;a>0;a-=3)if(e.getSubStringLength(0,a)<=i/1.1)return void(e.textContent=t.substring(0,a)+"...");e.textContent="."}}}],[{key:"setAttrs",value:function(e,t){for(var i in t)t.hasOwnProperty(i)&&e.setAttribute(i,t[i])}}]),T}(),ue=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"getStackedSeriesTotals",value:function(){var e=this.w,t=[];if(e.globals.series.length===0)return t;for(var i=0;i<e.globals.series[e.globals.maxValsInArrayIndex].length;i++){for(var a=0,n=0;n<e.globals.series.length;n++)e.globals.series[n][i]!==void 0&&(a+=e.globals.series[n][i]);t.push(a)}return e.globals.stackedSeriesTotals=t,t}},{key:"getSeriesTotalByIndex",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return e===null?this.w.config.series.reduce(function(t,i){return t+i},0):this.w.globals.series[e].reduce(function(t,i){return t+i},0)}},{key:"isSeriesNull",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return(e===null?this.w.config.series.filter(function(t){return t!==null}):this.w.config.series[e].data.filter(function(t){return t!==null})).length===0}},{key:"seriesHaveSameValues",value:function(e){return this.w.globals.series[e].every(function(t,i,a){return t===a[0]})}},{key:"getCategoryLabels",value:function(e){var t=this.w,i=e.slice();return t.config.xaxis.convertedCatToNumeric&&(i=e.map(function(a,n){return t.config.xaxis.labels.formatter(a-t.globals.minX+1)})),i}},{key:"getLargestSeries",value:function(){var e=this.w;e.globals.maxValsInArrayIndex=e.globals.series.map(function(t){return t.length}).indexOf(Math.max.apply(Math,e.globals.series.map(function(t){return t.length})))}},{key:"getLargestMarkerSize",value:function(){var e=this.w,t=0;return e.globals.markers.size.forEach(function(i){t=Math.max(t,i)}),e.config.markers.discrete&&e.config.markers.discrete.length&&e.config.markers.discrete.forEach(function(i){t=Math.max(t,i.size)}),t>0&&(t+=e.config.markers.hover.sizeOffset+1),e.globals.markers.largestSize=t,t}},{key:"getSeriesTotals",value:function(){var e=this.w;e.globals.seriesTotals=e.globals.series.map(function(t,i){var a=0;if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=t[n];else a+=t;return a})}},{key:"getSeriesTotalsXRange",value:function(e,t){var i=this.w;return i.globals.series.map(function(a,n){for(var l=0,o=0;o<a.length;o++)i.globals.seriesX[n][o]>e&&i.globals.seriesX[n][o]<t&&(l+=a[o]);return l})}},{key:"getPercentSeries",value:function(){var e=this.w;e.globals.seriesPercent=e.globals.series.map(function(t,i){var a=[];if(Array.isArray(t))for(var n=0;n<t.length;n++){var l=e.globals.stackedSeriesTotals[n],o=0;l&&(o=100*t[n]/l),a.push(o)}else{var c=100*t/e.globals.seriesTotals.reduce(function(d,p){return d+p},0);a.push(c)}return a})}},{key:"getCalculatedRatios",value:function(){var e,t,i,a,n=this.w.globals,l=[],o=0,c=[],d=.1,p=0;if(n.yRange=[],n.isMultipleYAxis)for(var x=0;x<n.minYArr.length;x++)n.yRange.push(Math.abs(n.minYArr[x]-n.maxYArr[x])),c.push(0);else n.yRange.push(Math.abs(n.minY-n.maxY));n.xRange=Math.abs(n.maxX-n.minX),n.zRange=Math.abs(n.maxZ-n.minZ);for(var b=0;b<n.yRange.length;b++)l.push(n.yRange[b]/n.gridHeight);if(t=n.xRange/n.gridWidth,i=Math.abs(n.initialMaxX-n.initialMinX)/n.gridWidth,e=n.yRange/n.gridWidth,a=n.xRange/n.gridHeight,(o=n.zRange/n.gridHeight*16)||(o=1),n.minY!==Number.MIN_VALUE&&Math.abs(n.minY)!==0&&(n.hasNegs=!0),n.isMultipleYAxis){c=[];for(var y=0;y<l.length;y++)c.push(-n.minYArr[y]/l[y])}else c.push(-n.minY/l[0]),n.minY!==Number.MIN_VALUE&&Math.abs(n.minY)!==0&&(d=-n.minY/e,p=n.minX/t);return{yRatio:l,invertedYRatio:e,zRatio:o,xRatio:t,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:d,baseLineY:c,baseLineX:p}}},{key:"getLogSeries",value:function(e){var t=this,i=this.w;return i.globals.seriesLog=e.map(function(a,n){return i.config.yaxis[n]&&i.config.yaxis[n].logarithmic?a.map(function(l){return l===null?null:t.getLogVal(i.config.yaxis[n].logBase,l,n)}):a}),i.globals.invalidLogScale?e:i.globals.seriesLog}},{key:"getBaseLog",value:function(e,t){return Math.log(t)/Math.log(e)}},{key:"getLogVal",value:function(e,t,i){if(t===0)return 0;var a=this.w,n=a.globals.minYArr[i]===0?-1:this.getBaseLog(e,a.globals.minYArr[i]),l=(a.globals.maxYArr[i]===0?0:this.getBaseLog(e,a.globals.maxYArr[i]))-n;return t<1?t/l:(this.getBaseLog(e,t)-n)/l}},{key:"getLogYRatios",value:function(e){var t=this,i=this.w,a=this.w.globals;return a.yLogRatio=e.slice(),a.logYRange=a.yRange.map(function(n,l){if(i.config.yaxis[l]&&t.w.config.yaxis[l].logarithmic){var o,c=-Number.MAX_VALUE,d=Number.MIN_VALUE;return a.seriesLog.forEach(function(p,x){p.forEach(function(b){i.config.yaxis[x]&&i.config.yaxis[x].logarithmic&&(c=Math.max(b,c),d=Math.min(b,d))})}),o=Math.pow(a.yRange[l],Math.abs(d-c)/a.yRange[l]),a.yLogRatio[l]=o/a.gridHeight,o}}),a.invalidLogScale?e.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(e){var t=!1,i=0,a=0;return e.length&&e[0].type!==void 0&&e.forEach(function(n){n.type!=="bar"&&n.type!=="column"&&n.type!=="candlestick"&&n.type!=="boxPlot"||i++,n.type!==void 0&&a++}),a>0&&(t=!0),{comboBarCount:i,comboCharts:t}}},{key:"extendArrayProps",value:function(e,t,i){return t.yaxis&&(t=e.extendYAxis(t,i)),t.annotations&&(t.annotations.yaxis&&(t=e.extendYAxisAnnotations(t)),t.annotations.xaxis&&(t=e.extendXAxisAnnotations(t)),t.annotations.points&&(t=e.extendPointAnnotations(t))),t}}]),T}(),J=function(){function T(e){m(this,T),this.w=e.w,this.annoCtx=e}return D(T,[{key:"setOrientations",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.w;if(e.label.orientation==="vertical"){var a=t!==null?t:0,n=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(n!==null){var l=n.getBoundingClientRect();n.setAttribute("x",parseFloat(n.getAttribute("x"))-l.height+4),e.label.position==="top"?n.setAttribute("y",parseFloat(n.getAttribute("y"))+l.width):n.setAttribute("y",parseFloat(n.getAttribute("y"))-l.width);var o=this.annoCtx.graphics.rotateAroundCenter(n),c=o.x,d=o.y;n.setAttribute("transform","rotate(-90 ".concat(c," ").concat(d,")"))}}}},{key:"addBackgroundToAnno",value:function(e,t){var i=this.w;if(!e||t.label.text===void 0||t.label.text!==void 0&&!String(t.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),n=e.getBoundingClientRect(),l=t.label.style.padding.left,o=t.label.style.padding.right,c=t.label.style.padding.top,d=t.label.style.padding.bottom;t.label.orientation==="vertical"&&(c=t.label.style.padding.left,d=t.label.style.padding.right,l=t.label.style.padding.top,o=t.label.style.padding.bottom);var p=n.left-a.left-l,x=n.top-a.top-c,b=this.annoCtx.graphics.drawRect(p-i.globals.barPadForNumericAxis,x,n.width+l+o,n.height+c+d,t.label.borderRadius,t.label.style.background,1,t.label.borderWidth,t.label.borderColor,0);return t.id&&b.node.classList.add(t.id),b}},{key:"annotationsBackground",value:function(){var e=this,t=this.w,i=function(a,n,l){var o=t.globals.dom.baseEl.querySelector(".apexcharts-".concat(l,"-annotations .apexcharts-").concat(l,"-annotation-label[rel='").concat(n,"']"));if(o){var c=o.parentNode,d=e.addBackgroundToAnno(o,a);d&&(c.insertBefore(d.node,o),a.label.mouseEnter&&d.node.addEventListener("mouseenter",a.label.mouseEnter.bind(e,a)),a.label.mouseLeave&&d.node.addEventListener("mouseleave",a.label.mouseLeave.bind(e,a)),a.label.click&&d.node.addEventListener("click",a.label.click.bind(e,a)))}};t.config.annotations.xaxis.map(function(a,n){i(a,n,"xaxis")}),t.config.annotations.yaxis.map(function(a,n){i(a,n,"yaxis")}),t.config.annotations.points.map(function(a,n){i(a,n,"point")})}},{key:"getY1Y2",value:function(e,t){var i,a=e==="y1"?t.y:t.y2,n=this.w;if(this.annoCtx.invertAxis){var l=n.globals.labels.indexOf(a);n.config.xaxis.convertedCatToNumeric&&(l=n.globals.categoryLabels.indexOf(a));var o=n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(l+1)+")");o&&(i=parseFloat(o.getAttribute("y")))}else{var c;n.config.yaxis[t.yAxisIndex].logarithmic?c=(a=new ue(this.annoCtx.ctx).getLogVal(a,t.yAxisIndex))/n.globals.yLogRatio[t.yAxisIndex]:c=(a-n.globals.minYArr[t.yAxisIndex])/(n.globals.yRange[t.yAxisIndex]/n.globals.gridHeight),i=n.globals.gridHeight-c,!t.marker||t.y!==void 0&&t.y!==null||(i=0),n.config.yaxis[t.yAxisIndex]&&n.config.yaxis[t.yAxisIndex].reversed&&(i=c)}return i}},{key:"getX1X2",value:function(e,t){var i=this.w,a=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,n=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,l=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=(t.x-a)/(l/i.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(n-t.x)/(l/i.globals.gridWidth)),i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(o=this.getStringX(t.x));var c=(t.x2-a)/(l/i.globals.gridWidth);return this.annoCtx.inversedReversedAxis&&(c=(n-t.x2)/(l/i.globals.gridWidth)),i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(c=this.getStringX(t.x2)),t.x!==void 0&&t.x!==null||!t.marker||(o=i.globals.gridWidth),e==="x1"?o:c}},{key:"getStringX",value:function(e){var t=this.w,i=e;t.config.xaxis.convertedCatToNumeric&&t.globals.categoryLabels.length&&(e=t.globals.categoryLabels.indexOf(e)+1);var a=t.globals.labels.indexOf(e),n=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return n&&(i=parseFloat(n.getAttribute("x"))),i}}]),T}(),te=function(){function T(e){m(this,T),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new J(this.annoCtx)}return D(T,[{key:"addXaxisAnnotation",value:function(e,t,i){var a,n=this.w,l=this.helpers.getX1X2("x1",e),o=e.label.text,c=e.strokeDashArray;if(P.isNumber(l)){if(e.x2===null||e.x2===void 0){var d=this.annoCtx.graphics.drawLine(l+e.offsetX,0+e.offsetY,l+e.offsetX,n.globals.gridHeight+e.offsetY,e.borderColor,c,e.borderWidth);t.appendChild(d.node),e.id&&d.node.classList.add(e.id)}else{if((a=this.helpers.getX1X2("x2",e))<l){var p=l;l=a,a=p}var x=this.annoCtx.graphics.drawRect(l+e.offsetX,0+e.offsetY,a-l,n.globals.gridHeight+e.offsetY,0,e.fillColor,e.opacity,1,e.borderColor,c);x.node.classList.add("apexcharts-annotation-rect"),x.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),t.appendChild(x.node),e.id&&x.node.classList.add(e.id)}var b=e.label.position==="top"?4:n.globals.gridHeight,y=this.annoCtx.graphics.getTextRects(o,parseFloat(e.label.style.fontSize)),C=this.annoCtx.graphics.drawText({x:l+e.label.offsetX,y:b+e.label.offsetY-(e.label.orientation==="vertical"?e.label.position==="top"?y.width/2-12:-y.width/2:0),text:o,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});C.attr({rel:i}),t.appendChild(C.node),this.annoCtx.helpers.setOrientations(e,i)}}},{key:"drawXAxisAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return t.config.annotations.xaxis.map(function(a,n){e.addXaxisAnnotation(a,i.node,n)}),i}}]),T}(),re=function(){function T(e){m(this,T),this.w=e.w,this.annoCtx=e,this.helpers=new J(this.annoCtx)}return D(T,[{key:"addYaxisAnnotation",value:function(e,t,i){var a,n=this.w,l=e.strokeDashArray,o=this.helpers.getY1Y2("y1",e),c=e.label.text;if(e.y2===null||e.y2===void 0){var d=this.annoCtx.graphics.drawLine(0+e.offsetX,o+e.offsetY,this._getYAxisAnnotationWidth(e),o+e.offsetY,e.borderColor,l,e.borderWidth);t.appendChild(d.node),e.id&&d.node.classList.add(e.id)}else{if((a=this.helpers.getY1Y2("y2",e))>o){var p=o;o=a,a=p}var x=this.annoCtx.graphics.drawRect(0+e.offsetX,a+e.offsetY,this._getYAxisAnnotationWidth(e),o-a,0,e.fillColor,e.opacity,1,e.borderColor,l);x.node.classList.add("apexcharts-annotation-rect"),x.attr("clip-path","url(#gridRectMask".concat(n.globals.cuid,")")),t.appendChild(x.node),e.id&&x.node.classList.add(e.id)}var b=e.label.position==="right"?n.globals.gridWidth:0,y=this.annoCtx.graphics.drawText({x:b+e.label.offsetX,y:(a!=null?a:o)+e.label.offsetY-3,text:c,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});y.attr({rel:i}),t.appendChild(y.node)}},{key:"_getYAxisAnnotationWidth",value:function(e){var t=this.w;return t.globals.gridWidth,(e.width.indexOf("%")>-1?t.globals.gridWidth*parseInt(e.width,10)/100:parseInt(e.width,10))+e.offsetX}},{key:"drawYAxisAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return t.config.annotations.yaxis.map(function(a,n){e.addYaxisAnnotation(a,i.node,n)}),i}}]),T}(),Q=function(){function T(e){m(this,T),this.w=e.w,this.annoCtx=e,this.helpers=new J(this.annoCtx)}return D(T,[{key:"addPointAnnotation",value:function(e,t,i){this.w;var a=this.helpers.getX1X2("x1",e),n=this.helpers.getY1Y2("y1",e);if(P.isNumber(a)){var l={pSize:e.marker.size,pointStrokeWidth:e.marker.strokeWidth,pointFillColor:e.marker.fillColor,pointStrokeColor:e.marker.strokeColor,shape:e.marker.shape,pRadius:e.marker.radius,class:"apexcharts-point-annotation-marker ".concat(e.marker.cssClass," ").concat(e.id?e.id:"")},o=this.annoCtx.graphics.drawMarker(a+e.marker.offsetX,n+e.marker.offsetY,l);t.appendChild(o.node);var c=e.label.text?e.label.text:"",d=this.annoCtx.graphics.drawText({x:a+e.label.offsetX,y:n+e.label.offsetY-e.marker.size-parseFloat(e.label.style.fontSize)/1.6,text:c,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});if(d.attr({rel:i}),t.appendChild(d.node),e.customSVG.SVG){var p=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+e.customSVG.cssClass});p.attr({transform:"translate(".concat(a+e.customSVG.offsetX,", ").concat(n+e.customSVG.offsetY,")")}),p.node.innerHTML=e.customSVG.SVG,t.appendChild(p.node)}if(e.image.path){var x=e.image.width?e.image.width:20,b=e.image.height?e.image.height:20;o=this.annoCtx.addImage({x:a+e.image.offsetX-x/2,y:n+e.image.offsetY-b/2,width:x,height:b,path:e.image.path,appendTo:".apexcharts-point-annotations"})}e.mouseEnter&&o.node.addEventListener("mouseenter",e.mouseEnter.bind(this,e)),e.mouseLeave&&o.node.addEventListener("mouseleave",e.mouseLeave.bind(this,e)),e.click&&o.node.addEventListener("click",e.click.bind(this,e))}}},{key:"drawPointAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return t.config.annotations.points.map(function(a,n){e.addPointAnnotation(a,i.node,n)}),i}}]),T}(),le={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},ie=function(){function T(){m(this,T),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return D(T,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[le],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(e){return new Date(e).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(e){return e}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(e){return e+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(e){return e.globals.seriesTotals.reduce(function(t,i){return t+i},0)/e.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(e){return e}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(e){return e}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(e){return e.globals.seriesTotals.reduce(function(t,i){return t+i},0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(e){return e!==null?e:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(e){return e?e+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),T}(),ye=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.graphics=new H(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new J(this),this.xAxisAnnotations=new te(this),this.yAxisAnnotations=new re(this),this.pointsAnnotations=new Q(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return D(T,[{key:"drawAxesAnnotations",value:function(){var e=this.w;if(e.globals.axisCharts){for(var t=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),n=e.config.chart.animations.enabled,l=[t,i,a],o=[i.node,t.node,a.node],c=0;c<3;c++)e.globals.dom.elGraphical.add(l[c]),!n||e.globals.resized||e.globals.dataChanged||e.config.chart.type!=="scatter"&&e.config.chart.type!=="bubble"&&e.globals.dataPoints>1&&o[c].classList.add("apexcharts-element-hidden"),e.globals.delayedElements.push({el:o[c],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var e=this;this.w.config.annotations.images.map(function(t,i){e.addImage(t,i)})}},{key:"drawTextAnnos",value:function(){var e=this;this.w.config.annotations.texts.map(function(t,i){e.addText(t,i)})}},{key:"addXaxisAnnotation",value:function(e,t,i){this.xAxisAnnotations.addXaxisAnnotation(e,t,i)}},{key:"addYaxisAnnotation",value:function(e,t,i){this.yAxisAnnotations.addYaxisAnnotation(e,t,i)}},{key:"addPointAnnotation",value:function(e,t,i){this.pointsAnnotations.addPointAnnotation(e,t,i)}},{key:"addText",value:function(e,t){var i=e.x,a=e.y,n=e.text,l=e.textAnchor,o=e.foreColor,c=e.fontSize,d=e.fontFamily,p=e.fontWeight,x=e.cssClass,b=e.backgroundColor,y=e.borderWidth,C=e.strokeDashArray,E=e.borderRadius,k=e.borderColor,M=e.appendTo,I=M===void 0?".apexcharts-annotations":M,R=e.paddingLeft,f=R===void 0?4:R,v=e.paddingRight,A=v===void 0?4:v,L=e.paddingBottom,N=L===void 0?2:L,G=e.paddingTop,X=G===void 0?2:G,ne=this.w,ee=this.graphics.drawText({x:i,y:a,text:n,textAnchor:l||"start",fontSize:c||"12px",fontWeight:p||"regular",fontFamily:d||ne.config.chart.fontFamily,foreColor:o||ne.config.chart.foreColor,cssClass:x}),pe=ne.globals.dom.baseEl.querySelector(I);pe&&pe.appendChild(ee.node);var Ae=ee.bbox();if(n){var Je=this.graphics.drawRect(Ae.x-f,Ae.y-X,Ae.width+f+A,Ae.height+N+X,E,b||"transparent",1,y,k,C);pe.insertBefore(Je.node,ee.node)}}},{key:"addImage",value:function(e,t){var i=this.w,a=e.path,n=e.x,l=n===void 0?0:n,o=e.y,c=o===void 0?0:o,d=e.width,p=d===void 0?20:d,x=e.height,b=x===void 0?20:x,y=e.appendTo,C=y===void 0?".apexcharts-annotations":y,E=i.globals.dom.Paper.image(a);E.size(p,b).move(l,c);var k=i.globals.dom.baseEl.querySelector(C);return k&&k.appendChild(E.node),E}},{key:"addXaxisAnnotationExternal",value:function(e,t,i){return this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(e,t,i){return this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(e,t,i){return this.invertAxis===void 0&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(e){var t=e.params,i=e.pushToMemory,a=e.context,n=e.type,l=e.contextMethod,o=a,c=o.w,d=c.globals.dom.baseEl.querySelector(".apexcharts-".concat(n,"-annotations")),p=d.childNodes.length+1,x=new ie,b=Object.assign({},n==="xaxis"?x.xAxisAnnotation:n==="yaxis"?x.yAxisAnnotation:x.pointAnnotation),y=P.extend(b,t);switch(n){case"xaxis":this.addXaxisAnnotation(y,d,p);break;case"yaxis":this.addYaxisAnnotation(y,d,p);break;case"point":this.addPointAnnotation(y,d,p)}var C=c.globals.dom.baseEl.querySelector(".apexcharts-".concat(n,"-annotations .apexcharts-").concat(n,"-annotation-label[rel='").concat(p,"']")),E=this.helpers.addBackgroundToAnno(C,y);return E&&d.insertBefore(E.node,C),i&&c.globals.memory.methodsToExec.push({context:o,id:y.id?y.id:P.randomId(),method:l,label:"addAnnotation",params:t}),a}},{key:"clearAnnotations",value:function(e){var t=e.w,i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");t.globals.memory.methodsToExec.map(function(a,n){a.label!=="addText"&&a.label!=="addAnnotation"||t.globals.memory.methodsToExec.splice(n,1)}),i=P.listToArray(i),Array.prototype.forEach.call(i,function(a){for(;a.firstChild;)a.removeChild(a.firstChild)})}},{key:"removeAnnotation",value:function(e,t){var i=e.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(t));a&&(i.globals.memory.methodsToExec.map(function(n,l){n.id===t&&i.globals.memory.methodsToExec.splice(l,1)}),Array.prototype.forEach.call(a,function(n){n.parentElement.removeChild(n)}))}}]),T}(),ge=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return D(T,[{key:"clippedImgArea",value:function(e){var t=this.w,i=t.config,a=parseInt(t.globals.gridWidth,10),n=parseInt(t.globals.gridHeight,10),l=a>n?a:n,o=e.image,c=0,d=0;e.width===void 0&&e.height===void 0?i.fill.image.width!==void 0&&i.fill.image.height!==void 0?(c=i.fill.image.width+1,d=i.fill.image.height):(c=l+1,d=l):(c=e.width,d=e.height);var p=document.createElementNS(t.globals.SVGNS,"pattern");H.setAttrs(p,{id:e.patternID,patternUnits:e.patternUnits?e.patternUnits:"userSpaceOnUse",width:c+"px",height:d+"px"});var x=document.createElementNS(t.globals.SVGNS,"image");p.appendChild(x),x.setAttributeNS(window.SVG.xlink,"href",o),H.setAttrs(x,{x:0,y:0,preserveAspectRatio:"none",width:c+"px",height:d+"px"}),x.style.opacity=e.opacity,t.globals.dom.elDefs.node.appendChild(p)}},{key:"getSeriesIndex",value:function(e){var t=this.w;return(t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")&&t.config.plotOptions.bar.distributed||t.config.chart.type==="heatmap"||t.config.chart.type==="treemap"?this.seriesIndex=e.seriesNumber:this.seriesIndex=e.seriesNumber%t.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(e){var t=this.w;this.opts=e;var i,a,n,l=this.w.config;this.seriesIndex=this.getSeriesIndex(e);var o=this.getFillColors()[this.seriesIndex];t.globals.seriesColors[this.seriesIndex]!==void 0&&(o=t.globals.seriesColors[this.seriesIndex]),typeof o=="function"&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:e.dataPointIndex,value:e.value,w:t}));var c=this.getFillType(this.seriesIndex),d=Array.isArray(l.fill.opacity)?l.fill.opacity[this.seriesIndex]:l.fill.opacity;e.color&&(o=e.color);var p=o;if(o.indexOf("rgb")===-1?o.length<9&&(p=P.hexToRgba(o,d)):o.indexOf("rgba")>-1&&(d=P.getOpacityFromRGBA(o)),e.opacity&&(d=e.opacity),c==="pattern"&&(a=this.handlePatternFill(a,o,d,p)),c==="gradient"&&(n=this.handleGradientFill(o,d,this.seriesIndex)),c==="image"){var x=l.fill.image.src,b=e.patternID?e.patternID:"";this.clippedImgArea({opacity:d,image:Array.isArray(x)?e.seriesNumber<x.length?x[e.seriesNumber]:x[0]:x,width:e.width?e.width:void 0,height:e.height?e.height:void 0,patternUnits:e.patternUnits,patternID:"pattern".concat(t.globals.cuid).concat(e.seriesNumber+1).concat(b)}),i="url(#pattern".concat(t.globals.cuid).concat(e.seriesNumber+1).concat(b,")")}else i=c==="gradient"?n:c==="pattern"?a:p;return e.solid&&(i=p),i}},{key:"getFillType",value:function(e){var t=this.w;return Array.isArray(t.config.fill.type)?t.config.fill.type[e]:t.config.fill.type}},{key:"getFillColors",value:function(){var e=this.w,t=e.config,i=this.opts,a=[];return e.globals.comboCharts?e.config.series[this.seriesIndex].type==="line"?Array.isArray(e.globals.stroke.colors)?a=e.globals.stroke.colors:a.push(e.globals.stroke.colors):Array.isArray(e.globals.fill.colors)?a=e.globals.fill.colors:a.push(e.globals.fill.colors):t.chart.type==="line"?Array.isArray(e.globals.stroke.colors)?a=e.globals.stroke.colors:a.push(e.globals.stroke.colors):Array.isArray(e.globals.fill.colors)?a=e.globals.fill.colors:a.push(e.globals.fill.colors),i.fillColors!==void 0&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(e,t,i,a){var n=this.w.config,l=this.opts,o=new H(this.ctx),c=n.fill.pattern.strokeWidth===void 0?Array.isArray(n.stroke.width)?n.stroke.width[this.seriesIndex]:n.stroke.width:Array.isArray(n.fill.pattern.strokeWidth)?n.fill.pattern.strokeWidth[this.seriesIndex]:n.fill.pattern.strokeWidth,d=t;return Array.isArray(n.fill.pattern.style)?e=n.fill.pattern.style[l.seriesNumber]!==void 0?o.drawPattern(n.fill.pattern.style[l.seriesNumber],n.fill.pattern.width,n.fill.pattern.height,d,c,i):a:e=o.drawPattern(n.fill.pattern.style,n.fill.pattern.width,n.fill.pattern.height,d,c,i),e}},{key:"handleGradientFill",value:function(e,t,i){var a,n=this.w.config,l=this.opts,o=new H(this.ctx),c=new P,d=n.fill.gradient.type,p=e,x=n.fill.gradient.opacityFrom===void 0?t:Array.isArray(n.fill.gradient.opacityFrom)?n.fill.gradient.opacityFrom[i]:n.fill.gradient.opacityFrom;p.indexOf("rgba")>-1&&(x=P.getOpacityFromRGBA(p));var b=n.fill.gradient.opacityTo===void 0?t:Array.isArray(n.fill.gradient.opacityTo)?n.fill.gradient.opacityTo[i]:n.fill.gradient.opacityTo;if(n.fill.gradient.gradientToColors===void 0||n.fill.gradient.gradientToColors.length===0)a=n.fill.gradient.shade==="dark"?c.shadeColor(-1*parseFloat(n.fill.gradient.shadeIntensity),e.indexOf("rgb")>-1?P.rgb2hex(e):e):c.shadeColor(parseFloat(n.fill.gradient.shadeIntensity),e.indexOf("rgb")>-1?P.rgb2hex(e):e);else if(n.fill.gradient.gradientToColors[l.seriesNumber]){var y=n.fill.gradient.gradientToColors[l.seriesNumber];a=y,y.indexOf("rgba")>-1&&(b=P.getOpacityFromRGBA(y))}else a=e;if(n.fill.gradient.inverseColors){var C=p;p=a,a=C}return p.indexOf("rgb")>-1&&(p=P.rgb2hex(p)),a.indexOf("rgb")>-1&&(a=P.rgb2hex(a)),o.drawGradient(d,p,a,x,b,l.size,n.fill.gradient.stops,n.fill.gradient.colorStops,i)}}]),T}(),je=function(){function T(e,t){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"setGlobalMarkerSize",value:function(){var e=this.w;if(e.globals.markers.size=Array.isArray(e.config.markers.size)?e.config.markers.size:[e.config.markers.size],e.globals.markers.size.length>0){if(e.globals.markers.size.length<e.globals.series.length+1)for(var t=0;t<=e.globals.series.length;t++)e.globals.markers.size[t]===void 0&&e.globals.markers.size.push(e.globals.markers.size[0])}else e.globals.markers.size=e.config.series.map(function(i){return e.config.markers.size})}},{key:"plotChartMarkers",value:function(e,t,i,a){var n,l=arguments.length>4&&arguments[4]!==void 0&&arguments[4],o=this.w,c=t,d=e,p=null,x=new H(this.ctx),b=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[t]>0||l||b)&&(p=x.group({class:l||b?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(d.x))for(var y=0;y<d.x.length;y++){var C=i;i===1&&y===0&&(C=0),i===1&&y===1&&(C=1);var E="apexcharts-marker";o.config.chart.type!=="line"&&o.config.chart.type!=="area"||o.globals.comboCharts||o.config.tooltip.intersect||(E+=" no-pointer-events");var k=Array.isArray(o.config.markers.size)?o.globals.markers.size[t]>0:o.config.markers.size>0;if(k||l||b){P.isNumber(d.y[y])?E+=" w".concat(P.randomId()):E="apexcharts-nullpoint";var M=this.getMarkerConfig({cssClass:E,seriesIndex:t,dataPointIndex:C});o.config.series[c].data[C]&&(o.config.series[c].data[C].fillColor&&(M.pointFillColor=o.config.series[c].data[C].fillColor),o.config.series[c].data[C].strokeColor&&(M.pointStrokeColor=o.config.series[c].data[C].strokeColor)),a&&(M.pSize=a),(n=x.drawMarker(d.x[y],d.y[y],M)).attr("rel",C),n.attr("j",C),n.attr("index",t),n.node.setAttribute("default-marker-size",M.pSize);var I=new Z(this.ctx);I.setSelectionFilter(n,t,C),this.addEvents(n),p&&p.add(n)}else o.globals.pointsArray[t]===void 0&&(o.globals.pointsArray[t]=[]),o.globals.pointsArray[t].push([d.x[y],d.y[y]])}return p}},{key:"getMarkerConfig",value:function(e){var t=e.cssClass,i=e.seriesIndex,a=e.dataPointIndex,n=a===void 0?null:a,l=e.finishRadius,o=l===void 0?null:l,c=this.w,d=this.getMarkerStyle(i),p=c.globals.markers.size[i],x=c.config.markers;return n!==null&&x.discrete.length&&x.discrete.map(function(b){b.seriesIndex===i&&b.dataPointIndex===n&&(d.pointStrokeColor=b.strokeColor,d.pointFillColor=b.fillColor,p=b.size,d.pointShape=b.shape)}),{pSize:o===null?p:o,pRadius:x.radius,width:Array.isArray(x.width)?x.width[i]:x.width,height:Array.isArray(x.height)?x.height[i]:x.height,pointStrokeWidth:Array.isArray(x.strokeWidth)?x.strokeWidth[i]:x.strokeWidth,pointStrokeColor:d.pointStrokeColor,pointFillColor:d.pointFillColor,shape:d.pointShape||(Array.isArray(x.shape)?x.shape[i]:x.shape),class:t,pointStrokeOpacity:Array.isArray(x.strokeOpacity)?x.strokeOpacity[i]:x.strokeOpacity,pointStrokeDashArray:Array.isArray(x.strokeDashArray)?x.strokeDashArray[i]:x.strokeDashArray,pointFillOpacity:Array.isArray(x.fillOpacity)?x.fillOpacity[i]:x.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(e){var t=this.w,i=new H(this.ctx);e.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,e)),e.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,e)),e.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,e)),e.node.addEventListener("click",t.config.markers.onClick),e.node.addEventListener("dblclick",t.config.markers.onDblClick),e.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,e),{passive:!0})}},{key:"getMarkerStyle",value:function(e){var t=this.w,i=t.globals.markers.colors,a=t.config.markers.strokeColor||t.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[e]:a,pointFillColor:Array.isArray(i)?i[e]:i}}}]),T}(),Te=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return D(T,[{key:"draw",value:function(e,t,i){var a=this.w,n=new H(this.ctx),l=i.realIndex,o=i.pointsPos,c=i.zRatio,d=i.elParent,p=n.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(p.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var x=0;x<o.x.length;x++){var b=t+1,y=!0;t===0&&x===0&&(b=0),t===0&&x===1&&(b=1);var C=0,E=a.globals.markers.size[l];if(c!==1/0){E=a.globals.seriesZ[l][b]/c;var k=a.config.plotOptions.bubble;k.minBubbleRadius&&E<k.minBubbleRadius&&(E=k.minBubbleRadius),k.maxBubbleRadius&&E>k.maxBubbleRadius&&(E=k.maxBubbleRadius)}a.config.chart.animations.enabled||(C=E);var M=o.x[x],I=o.y[x];if(C=C||0,I!==null&&a.globals.series[l][b]!==void 0||(y=!1),y){var R=this.drawPoint(M,I,C,E,l,b,t);p.add(R)}d.add(p)}}},{key:"drawPoint",value:function(e,t,i,a,n,l,o){var c=this.w,d=n,p=new j(this.ctx),x=new Z(this.ctx),b=new ge(this.ctx),y=new je(this.ctx),C=new H(this.ctx),E=y.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:d,dataPointIndex:l,finishRadius:c.config.chart.type==="bubble"||c.globals.comboCharts&&c.config.series[n]&&c.config.series[n].type==="bubble"?a:null});a=E.pSize;var k,M=b.fillPath({seriesNumber:n,dataPointIndex:l,color:E.pointFillColor,patternUnits:"objectBoundingBox",value:c.globals.series[n][o]});if(E.shape==="circle"?k=C.drawCircle(i):E.shape!=="square"&&E.shape!=="rect"||(k=C.drawRect(0,0,E.width-E.pointStrokeWidth/2,E.height-E.pointStrokeWidth/2,E.pRadius)),c.config.series[d].data[l]&&c.config.series[d].data[l].fillColor&&(M=c.config.series[d].data[l].fillColor),k.attr({x:e-E.width/2-E.pointStrokeWidth/2,y:t-E.height/2-E.pointStrokeWidth/2,cx:e,cy:t,fill:M,"fill-opacity":E.pointFillOpacity,stroke:E.pointStrokeColor,r:a,"stroke-width":E.pointStrokeWidth,"stroke-dasharray":E.pointStrokeDashArray,"stroke-opacity":E.pointStrokeOpacity}),c.config.chart.dropShadow.enabled){var I=c.config.chart.dropShadow;x.dropShadow(k,I,n)}if(!this.initialAnim||c.globals.dataChanged||c.globals.resized)c.globals.animationEnded=!0;else{var R=c.config.chart.animations.speed;p.animateMarker(k,0,E.shape==="circle"?a:{width:E.width,height:E.height},R,c.globals.easing,function(){window.setTimeout(function(){p.animationCompleted(k)},100)})}if(c.globals.dataChanged&&E.shape==="circle")if(this.dynamicAnim){var f,v,A,L,N=c.config.chart.animations.dynamicAnimation.speed;(L=c.globals.previousPaths[n]&&c.globals.previousPaths[n][o])!=null&&(f=L.x,v=L.y,A=L.r!==void 0?L.r:a);for(var G=0;G<c.globals.collapsedSeries.length;G++)c.globals.collapsedSeries[G].index===n&&(N=1,a=0);e===0&&t===0&&(a=0),p.animateCircle(k,{cx:f,cy:v,r:A},{cx:e,cy:t,r:a},N,c.globals.easing)}else k.attr({r:a});return k.attr({rel:l,j:l,index:n,"default-marker-size":a}),x.setSelectionFilter(k,n,l),y.addEvents(k),k.node.classList.add("apexcharts-marker"),k}},{key:"centerTextInBubble",value:function(e){var t=this.w;return{y:e+=parseInt(t.config.dataLabels.style.fontSize,10)/4}}}]),T}(),Pe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"dataLabelsCorrection",value:function(e,t,i,a,n,l,o){var c=this.w,d=!1,p=new H(this.ctx).getTextRects(i,o),x=p.width,b=p.height;t<0&&(t=0),t>c.globals.gridHeight+b&&(t=c.globals.gridHeight+b/2),c.globals.dataLabelsRects[a]===void 0&&(c.globals.dataLabelsRects[a]=[]),c.globals.dataLabelsRects[a].push({x:e,y:t,width:x,height:b});var y=c.globals.dataLabelsRects[a].length-2,C=c.globals.lastDrawnDataLabelsIndexes[a]!==void 0?c.globals.lastDrawnDataLabelsIndexes[a][c.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(c.globals.dataLabelsRects[a][y]!==void 0){var E=c.globals.dataLabelsRects[a][C];(e>E.x+E.width+2||t>E.y+E.height+2||e+x<E.x)&&(d=!0)}return(n===0||l)&&(d=!0),{x:e,y:t,textRects:p,drawnextLabel:d}}},{key:"drawDataLabel",value:function(e,t,i){var a=this,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:2,l=this.w,o=new H(this.ctx),c=l.config.dataLabels,d=0,p=0,x=i,b=null;if(!c.enabled||!Array.isArray(e.x))return b;b=o.group({class:"apexcharts-data-labels"});for(var y=0;y<e.x.length;y++)if(d=e.x[y]+c.offsetX,p=e.y[y]+c.offsetY+n,!isNaN(d)){i===1&&y===0&&(x=0),i===1&&y===1&&(x=1);var C=l.globals.series[t][x],E="",k=function(R){return l.config.dataLabels.formatter(R,{ctx:a.ctx,seriesIndex:t,dataPointIndex:x,w:l})};if(l.config.chart.type==="bubble"){E=k(C=l.globals.seriesZ[t][x]),p=e.y[y];var M=new Te(this.ctx),I=M.centerTextInBubble(p,t,x);p=I.y}else C!==void 0&&(E=k(C));this.plotDataLabelsText({x:d,y:p,text:E,i:t,j:x,parent:b,offsetCorrection:!0,dataLabelsConfig:l.config.dataLabels})}return b}},{key:"plotDataLabelsText",value:function(e){var t=this.w,i=new H(this.ctx),a=e.x,n=e.y,l=e.i,o=e.j,c=e.text,d=e.textAnchor,p=e.fontSize,x=e.parent,b=e.dataLabelsConfig,y=e.color,C=e.alwaysDrawDataLabel,E=e.offsetCorrection;if(!(Array.isArray(t.config.dataLabels.enabledOnSeries)&&t.config.dataLabels.enabledOnSeries.indexOf(l)<0)){var k={x:a,y:n,drawnextLabel:!0,textRects:null};E&&(k=this.dataLabelsCorrection(a,n,c,l,o,C,parseInt(b.style.fontSize,10))),t.globals.zoomed||(a=k.x,n=k.y),k.textRects&&(a<-10-k.textRects.width||a>t.globals.gridWidth+k.textRects.width+10)&&(c="");var M=t.globals.dataLabels.style.colors[l];((t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")&&t.config.plotOptions.bar.distributed||t.config.dataLabels.distributed)&&(M=t.globals.dataLabels.style.colors[o]),typeof M=="function"&&(M=M({series:t.globals.series,seriesIndex:l,dataPointIndex:o,w:t})),y&&(M=y);var I=b.offsetX,R=b.offsetY;if(t.config.chart.type!=="bar"&&t.config.chart.type!=="rangeBar"||(I=0,R=0),k.drawnextLabel){var f=i.drawText({width:100,height:parseInt(b.style.fontSize,10),x:a+I,y:n+R,foreColor:M,textAnchor:d||b.textAnchor,text:c,fontSize:p||b.style.fontSize,fontFamily:b.style.fontFamily,fontWeight:b.style.fontWeight||"normal"});if(f.attr({class:"apexcharts-datalabel",cx:a,cy:n}),b.dropShadow.enabled){var v=b.dropShadow;new Z(this.ctx).dropShadow(f,v)}x.add(f),t.globals.lastDrawnDataLabelsIndexes[l]===void 0&&(t.globals.lastDrawnDataLabelsIndexes[l]=[]),t.globals.lastDrawnDataLabelsIndexes[l].push(o)}}}},{key:"addBackgroundToDataLabel",value:function(e,t){var i=this.w,a=i.config.dataLabels.background,n=a.padding,l=a.padding/2,o=t.width,c=t.height,d=new H(this.ctx).drawRect(t.x-n,t.y-l/2,o+2*n,c+l,a.borderRadius,i.config.chart.background==="transparent"?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);return a.dropShadow.enabled&&new Z(this.ctx).dropShadow(d,a.dropShadow),d}},{key:"dataLabelsBackground",value:function(){var e=this.w;if(e.config.chart.type!=="bubble")for(var t=e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<t.length;i++){var a=t[i],n=a.getBBox(),l=null;if(n.width&&n.height&&(l=this.addBackgroundToDataLabel(a,n)),l){a.parentNode.insertBefore(l.node,a);var o=a.getAttribute("fill");e.config.chart.animations.enabled&&!e.globals.resized&&!e.globals.dataChanged?l.animate().attr({fill:o}):l.attr({fill:o}),a.setAttribute("fill",e.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var e=this.w,t=e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<t.length;a++)i&&i.insertBefore(t[a],i.nextSibling)}}]),T}(),We=function(){function T(e){m(this,T),this.w=e.w,this.barCtx=e}return D(T,[{key:"handleBarDataLabels",value:function(e){var t=e.x,i=e.y,a=e.y1,n=e.y2,l=e.i,o=e.j,c=e.realIndex,d=e.series,p=e.barHeight,x=e.barWidth,b=e.barYPosition,y=e.visibleSeries,C=e.renderedPath,E=this.w,k=new H(this.barCtx.ctx),M=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[c]:this.barCtx.strokeWidth,I=t+parseFloat(x*y),R=i+parseFloat(p*y);E.globals.isXNumeric&&!E.globals.isBarHorizontal&&(I=t+parseFloat(x*(y+1)),R=i+parseFloat(p*(y+1))-M);var f=t,v=i,A={},L=E.config.dataLabels,N=this.barCtx.barOptions.dataLabels;b!==void 0&&this.barCtx.isRangeBar&&(R=b,v=b);var G=L.offsetX,X=L.offsetY,ne={width:0,height:0};if(E.config.dataLabels.enabled){var ee=this.barCtx.series[l][o];ne=k.getTextRects(E.globals.yLabelFormatters[0](ee),parseFloat(L.style.fontSize))}var pe={x:t,y:i,i:l,j:o,renderedPath:C,bcx:I,bcy:R,barHeight:p,barWidth:x,textRects:ne,strokeWidth:M,dataLabelsX:f,dataLabelsY:v,barDataLabelsConfig:N,offX:G,offY:X};return A=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(pe):this.calculateColumnsDataLabelsPosition(pe),C.attr({cy:A.bcy,cx:A.bcx,j:o,val:d[l][o],barHeight:p,barWidth:x}),this.drawCalculatedDataLabels({x:A.dataLabelsX,y:A.dataLabelsY,val:this.barCtx.isRangeBar?[a,n]:d[l][o],i:c,j:o,barWidth:x,barHeight:p,textRects:ne,dataLabelsConfig:L})}},{key:"calculateColumnsDataLabelsPosition",value:function(e){var t,i=this.w,a=e.i,n=e.j,l=e.y,o=e.bcx,c=e.barWidth,d=e.barHeight,p=e.textRects,x=e.dataLabelsY,b=e.barDataLabelsConfig,y=e.strokeWidth,C=e.offX,E=e.offY;d=Math.abs(d);var k=i.config.plotOptions.bar.dataLabels.orientation==="vertical";o-=y/2;var M=i.globals.gridWidth/i.globals.dataPoints;t=i.globals.isXNumeric?o-c/2+C:o-M+c/2+C,k&&(t=t+p.height/2-y/2-2);var I=this.barCtx.series[a][n]<0,R=l;switch(this.barCtx.isReversed&&(R=l-d+(I?2*d:0),l-=d),b.position){case"center":x=k?I?R+d/2+E:R+d/2-E:I?R-d/2+p.height/2+E:R+d/2+p.height/2-E;break;case"bottom":x=k?I?R+d+E:R+d-E:I?R-d+p.height+y+E:R+d-p.height/2+y-E;break;case"top":x=k?I?R+E:R-E:I?R-p.height/2-E:R+p.height+E}return i.config.chart.stacked||(x<0?x=0+y:x+p.height/3>i.globals.gridHeight&&(x=i.globals.gridHeight-y)),{bcx:o,bcy:l,dataLabelsX:t,dataLabelsY:x}}},{key:"calculateBarsDataLabelsPosition",value:function(e){var t=this.w,i=e.x,a=e.i,n=e.j,l=e.bcy,o=e.barHeight,c=e.barWidth,d=e.textRects,p=e.dataLabelsX,x=e.strokeWidth,b=e.barDataLabelsConfig,y=e.offX,C=e.offY,E=t.globals.gridHeight/t.globals.dataPoints;c=Math.abs(c);var k=l-(this.barCtx.isRangeBar?0:E)+o/2+d.height/2+C-3,M=this.barCtx.series[a][n]<0,I=i;switch(this.barCtx.isReversed&&(I=i+c-(M?2*c:0),i=t.globals.gridWidth-c),b.position){case"center":p=M?I+c/2-y:Math.max(d.width/2,I-c/2)+y;break;case"bottom":p=M?I+c-x-Math.round(d.width/2)-y:I-c+x+Math.round(d.width/2)+y;break;case"top":p=M?I-x+Math.round(d.width/2)-y:I-x-Math.round(d.width/2)+y}return t.config.chart.stacked||(p<0?p=p+d.width+x:p+d.width/2>t.globals.gridWidth&&(p=t.globals.gridWidth-d.width-x)),{bcx:i,bcy:l,dataLabelsX:p,dataLabelsY:k}}},{key:"drawCalculatedDataLabels",value:function(e){var t=e.x,i=e.y,a=e.val,n=e.i,l=e.j,o=e.textRects,c=e.barHeight,d=e.barWidth,p=e.dataLabelsConfig,x=this.w,b="rotate(0)";x.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(b="rotate(-90, ".concat(t,", ").concat(i,")"));var y=new Pe(this.barCtx.ctx),C=new H(this.barCtx.ctx),E=p.formatter,k=null,M=x.globals.collapsedSeriesIndices.indexOf(n)>-1;if(p.enabled&&!M){k=C.group({class:"apexcharts-data-labels",transform:b});var I="";a!==void 0&&(I=E(a,{seriesIndex:n,dataPointIndex:l,w:x}));var R=x.globals.series[n][l]<0,f=x.config.plotOptions.bar.dataLabels.position;x.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(f==="top"&&(p.textAnchor=R?"end":"start"),f==="center"&&(p.textAnchor="middle"),f==="bottom"&&(p.textAnchor=R?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&d<C.getTextRects(I,parseFloat(p.style.fontSize)).width&&(I=""),x.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?o.width/1.6>Math.abs(d)&&(I=""):o.height/1.6>Math.abs(c)&&(I=""));var v=h({},p);this.barCtx.isHorizontal&&a<0&&(p.textAnchor==="start"?v.textAnchor="end":p.textAnchor==="end"&&(v.textAnchor="start")),y.plotDataLabelsText({x:t,y:i,text:I,i:n,j:l,parent:k,dataLabelsConfig:v,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return k}}]),T}(),$e=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return D(T,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(e){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(P.escapeString(e),"']"))}},{key:"isSeriesHidden",value:function(e){var t=this.getSeriesByName(e),i=parseInt(t.getAttribute("data:realIndex"),10);return{isHidden:t.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(e,t){var i=this.w;function a(n){for(var l=0;l<n.length;l++)n[l].index===t&&e.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(e){var t=this.isSeriesHidden(e);return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,t.isHidden),t.isHidden}},{key:"showSeries",value:function(e){var t=this.isSeriesHidden(e);t.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,!0)}},{key:"hideSeries",value:function(e){var t=this.isSeriesHidden(e);t.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,!1)}},{key:"resetSeries",value:function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=this.w,n=P.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):n=this.emptyCollapsedSeries(n),a.config.series=n,e&&(t&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(n,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(e){for(var t=this.w,i=0;i<e.length;i++)t.globals.collapsedSeriesIndices.indexOf(i)>-1&&(e[i].data=[]);return e}},{key:"toggleSeriesOnHover",value:function(e,t){var i=this.w;t||(t=e.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if(e.type==="mousemove"){var n=parseInt(t.getAttribute("rel"),10)-1,l=null,o=null;i.globals.axisCharts||i.config.chart.type==="radialBar"?i.globals.axisCharts?(l=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(n,"']")),o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(n,"']"))):l=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(n+1,"']")):l=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(n+1,"'] path"));for(var c=0;c<a.length;c++)a[c].classList.add(this.legendInactiveClass);l!==null&&(i.globals.axisCharts||l.parentNode.classList.remove(this.legendInactiveClass),l.classList.remove(this.legendInactiveClass),o!==null&&o.classList.remove(this.legendInactiveClass))}else if(e.type==="mouseout")for(var d=0;d<a.length;d++)a[d].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(e,t){var i=this,a=this.w,n=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),l=function(c){for(var d=0;d<n.length;d++)n[d].classList[c](i.legendInactiveClass)};if(e.type==="mousemove"){var o=parseInt(t.getAttribute("rel"),10)-1;l("add"),function(c){for(var d=0;d<n.length;d++){var p=parseInt(n[d].getAttribute("val"),10);p>=c.from&&p<=c.to&&n[d].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[o])}else e.type==="mouseout"&&l("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"asc",i=this.w,a=0;if(i.config.series.length>1){for(var n=i.config.series.map(function(o,c){var d=!1;return e&&(d=i.config.series[c].type==="bar"||i.config.series[c].type==="column"),o.data&&o.data.length>0&&!d?c:-1}),l=t==="asc"?0:n.length-1;t==="asc"?l<n.length:l>=0;t==="asc"?l++:l--)if(n[l]!==-1){a=n[l];break}}return a}},{key:"getPreviousPaths",value:function(){var e=this.w;function t(l,o,c){for(var d=l[o].childNodes,p={type:c,paths:[],realIndex:l[o].getAttribute("data:realIndex")},x=0;x<d.length;x++)if(d[x].hasAttribute("pathTo")){var b=d[x].getAttribute("pathTo");p.paths.push({d:b})}e.globals.previousPaths.push(p)}e.globals.previousPaths=[],["line","area","bar","rangebar","candlestick","radar"].forEach(function(l){for(var o,c=(o=l,e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o,"-series .apexcharts-series"))),d=0;d<c.length;d++)t(c,d,l)}),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(l){for(var o=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(l,"'] rect")),c=[],d=function(x){var b=function(C){return o[x].getAttribute(C)},y={x:parseFloat(b("x")),y:parseFloat(b("y")),width:parseFloat(b("width")),height:parseFloat(b("height"))};c.push({rect:y,color:o[x].getAttribute("color")})},p=0;p<o.length;p++)d(p);e.globals.previousPaths.push(c)},n=0;n<i.length;n++)a(n);e.globals.axisCharts||(e.globals.previousPaths=e.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(e){var t=this.w,i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),l=[],o=0;o<n.length;o++)l.push({x:n[o].getAttribute("cx"),y:n[o].getAttribute("cy"),r:n[o].getAttribute("r")});t.globals.previousPaths.push(l)}}},{key:"clearPreviousPaths",value:function(){var e=this.w;e.globals.previousPaths=[],e.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var e=this.w,t=e.config.noData,i=new H(this.ctx),a=e.globals.svgWidth/2,n=e.globals.svgHeight/2,l="middle";if(e.globals.noData=!0,e.globals.animationEnded=!0,t.align==="left"?(a=10,l="start"):t.align==="right"&&(a=e.globals.svgWidth-10,l="end"),t.verticalAlign==="top"?n=50:t.verticalAlign==="bottom"&&(n=e.globals.svgHeight-50),a+=t.offsetX,n=n+parseInt(t.style.fontSize,10)+2+t.offsetY,t.text!==void 0&&t.text!==""){var o=i.drawText({x:a,y:n,text:t.text,textAnchor:l,fontSize:t.style.fontSize,fontFamily:t.style.fontFamily,foreColor:t.style.color,opacity:1,class:"apexcharts-text-nodata"});e.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(e){for(var t=this.w,i=0;i<e.length;i++)if(e[i].length===0)for(var a=0;a<e[t.globals.maxValsInArrayIndex].length;a++)e[i].push(0);return e}},{key:"hasAllSeriesEqualX",value:function(){for(var e=!0,t=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){e=!1;break}return t.globals.allSeriesHasEqualX=e,e}},{key:"filteredSeriesX",value:function(){var e=this.w.globals.seriesX.map(function(t){return t.length>0?t:[]});return e}}]),T}(),Gt=function(){function T(e){m(this,T),this.w=e.w,this.barCtx=e}return D(T,[{key:"initVariables",value:function(e){var t=this.w;this.barCtx.series=e,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<e.length;i++)if(e[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=e[i].length),t.globals.isXNumeric)for(var a=0;a<e[i].length;a++)t.globals.seriesX[i][a]>t.globals.minX&&t.globals.seriesX[i][a]<t.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=t.globals.dataPoints;this.barCtx.seriesLen===0&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=e.length-1,t.globals.comboCharts||this.checkZeroSeries({series:e})}},{key:"initialPositions",value:function(){var e,t,i,a,n,l,o,c,d=this.w,p=d.globals.dataPoints;this.barCtx.isRangeBar&&(p=d.globals.labels.length);var x=this.barCtx.seriesLen;if(d.config.plotOptions.bar.rangeBarGroupRows&&(x=1),this.barCtx.isHorizontal)n=(i=d.globals.gridHeight/p)/x,d.globals.isXNumeric&&(n=(i=d.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),n=n*parseInt(this.barCtx.barOptions.barHeight,10)/100,c=this.barCtx.baseLineInvertedY+d.globals.padHorizontal+(this.barCtx.isReversed?d.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),t=(i-n*this.barCtx.seriesLen)/2;else{if(a=d.globals.gridWidth/this.barCtx.visibleItems,d.config.xaxis.convertedCatToNumeric&&(a=d.globals.gridWidth/d.globals.dataPoints),l=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,d.globals.isXNumeric){var b=this.barCtx.xRatio;d.config.xaxis.convertedCatToNumeric&&(b=this.barCtx.initialXRatio),d.globals.minXDiff&&d.globals.minXDiff!==.5&&d.globals.minXDiff/b>0&&(a=d.globals.minXDiff/b),(l=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(l=1)}o=d.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?d.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),e=d.globals.padHorizontal+(a-l*this.barCtx.seriesLen)/2}return{x:e,y:t,yDivision:i,xDivision:a,barHeight:n,barWidth:l,zeroH:o,zeroW:c}}},{key:"getPathFillColor",value:function(e,t,i,a){var n=this.w,l=new ge(this.barCtx.ctx),o=null,c=this.barCtx.barOptions.distributed?i:t;return this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map(function(d){e[t][i]>=d.from&&e[t][i]<=d.to&&(o=d.color)}),n.config.series[t].data[i]&&n.config.series[t].data[i].fillColor&&(o=n.config.series[t].data[i].fillColor),l.fillPath({seriesNumber:this.barCtx.barOptions.distributed?c:a,dataPointIndex:i,color:o,value:e[t][i]})}},{key:"getStrokeWidth",value:function(e,t,i){var a=0,n=this.w;return this.barCtx.series[e][t]===void 0||this.barCtx.series[e][t]===null?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,n.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"barBackground",value:function(e){var t=e.j,i=e.i,a=e.x1,n=e.x2,l=e.y1,o=e.y2,c=e.elSeries,d=this.w,p=new H(this.barCtx.ctx),x=new $e(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&x===i){t>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(t%=this.barCtx.barOptions.colors.backgroundBarColors.length);var b=this.barCtx.barOptions.colors.backgroundBarColors[t],y=p.drawRect(a!==void 0?a:0,l!==void 0?l:0,n!==void 0?n:d.globals.gridWidth,o!==void 0?o:d.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,b,this.barCtx.barOptions.colors.backgroundBarOpacity);c.add(y),y.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(e){var t=e.barWidth,i=e.barXPosition,a=e.yRatio,n=e.y1,l=e.y2,o=e.strokeWidth,c=e.series,d=e.realIndex,p=e.i,x=e.j,b=e.w,y=new H(this.barCtx.ctx);(o=Array.isArray(o)?o[d]:o)||(o=0);var C={barWidth:t,strokeWidth:o,yRatio:a,barXPosition:i,y1:n,y2:l},E=this.getRoundedBars(b,C,c,p,x),k=i,M=i+t,I=y.move(k,n),R=y.move(k,n),f=y.line(M-o,n);return b.globals.previousPaths.length>0&&(R=this.barCtx.getPreviousPath(d,x,!1)),I=I+y.line(k,E.y2)+E.pathWithRadius+y.line(M-o,E.y2)+f+f+"z",R=R+y.line(k,n)+f+f+f+f+f+y.line(k,n),b.config.chart.stacked&&(this.barCtx.yArrj.push(E.y2WithRadius),this.barCtx.yArrjF.push(Math.abs(n-E.y2WithRadius)),this.barCtx.yArrjVal.push(this.barCtx.series[p][x])),{pathTo:I,pathFrom:R}}},{key:"getBarpaths",value:function(e){var t=e.barYPosition,i=e.barHeight,a=e.x1,n=e.x2,l=e.strokeWidth,o=e.series,c=e.realIndex,d=e.i,p=e.j,x=e.w,b=new H(this.barCtx.ctx);(l=Array.isArray(l)?l[c]:l)||(l=0);var y={barHeight:i,strokeWidth:l,barYPosition:t,x2:n,x1:a},C=this.getRoundedBars(x,y,o,d,p),E=b.move(a,t),k=b.move(a,t);x.globals.previousPaths.length>0&&(k=this.barCtx.getPreviousPath(c,p,!1));var M=t,I=t+i,R=b.line(a,I-l);return E=E+b.line(C.x2,M)+C.pathWithRadius+b.line(C.x2,I-l)+R+R+"z",k=k+b.line(a,M)+R+R+R+R+R+b.line(a,M),x.config.chart.stacked&&(this.barCtx.xArrj.push(C.x2WithRadius),this.barCtx.xArrjF.push(Math.abs(a-C.x2WithRadius)),this.barCtx.xArrjVal.push(this.barCtx.series[d][p])),{pathTo:E,pathFrom:k}}},{key:"getRoundedBars",value:function(e,t,i,a,n){var l=new H(this.barCtx.ctx),o=0,c=e.config.plotOptions.bar.borderRadius,d=Array.isArray(c);if(d?o=c[a>c.length-1?c.length-1:a]:o=c,e.config.chart.stacked&&i.length>1&&a!==this.barCtx.radiusOnSeriesNumber&&!d&&(o=0),this.barCtx.isHorizontal){var p="",x=t.x2;if(Math.abs(t.x1-t.x2)<o&&(o=Math.abs(t.x1-t.x2)),i[a][n]!==void 0||i[a][n]!==null){var b=this.barCtx.isReversed?i[a][n]>0:i[a][n]<0;b&&(o*=-1),x-=o,p=l.quadraticCurve(x+o,t.barYPosition,x+o,t.barYPosition+(b?-1*o:o))+l.line(x+o,t.barYPosition+t.barHeight-t.strokeWidth-(b?-1*o:o))+l.quadraticCurve(x+o,t.barYPosition+t.barHeight-t.strokeWidth,x,t.barYPosition+t.barHeight-t.strokeWidth)}return{pathWithRadius:p,x2WithRadius:x+o,x2:x}}var y="",C=t.y2;if(Math.abs(t.y1-t.y2)<o&&(o=Math.abs(t.y1-t.y2)),i[a][n]!==void 0||i[a][n]!==null){var E=i[a][n]<0;E&&(o*=-1),C+=o,y=l.quadraticCurve(t.barXPosition,C-o,t.barXPosition+(E?-1*o:o),C-o)+l.line(t.barXPosition+t.barWidth-t.strokeWidth-(E?-1*o:o),C-o)+l.quadraticCurve(t.barXPosition+t.barWidth-t.strokeWidth,C-o,t.barXPosition+t.barWidth-t.strokeWidth,C)}return{pathWithRadius:y,y2WithRadius:C-o,y2:C}}},{key:"checkZeroSeries",value:function(e){for(var t=e.series,i=this.w,a=0;a<t.length;a++){for(var n=0,l=0;l<t[i.globals.maxValsInArrayIndex].length;l++)n+=t[a][l];n===0&&this.barCtx.zeroSerieses.push(a)}for(var o=t.length-1;o>=0;o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var c=t.length-1;c>=0;c--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(e,t){var i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=i?t:null;return e!=null&&(a=t+e/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?e/this.barCtx.invertedYRatio:0)),a}},{key:"getYForValue",value:function(e,t){var i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=i?t:null;return e!=null&&(a=t-e/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?e/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),a}},{key:"getGoalValues",value:function(e,t,i,a,n){var l=this,o=this.w,c=[];return o.globals.seriesGoals[a]&&o.globals.seriesGoals[a][n]&&Array.isArray(o.globals.seriesGoals[a][n])&&o.globals.seriesGoals[a][n].forEach(function(d){var p;c.push((S(p={},e,e==="x"?l.getXForValue(d.value,t,!1):l.getYForValue(d.value,i,!1)),S(p,"attrs",d),p))}),c}},{key:"drawGoalLine",value:function(e){var t=e.barXPosition,i=e.barYPosition,a=e.goalX,n=e.goalY,l=e.barWidth,o=e.barHeight,c=new H(this.barCtx.ctx),d=c.group({className:"apexcharts-bar-goals-groups"}),p=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach(function(x){var b=x.attrs.strokeHeight!==void 0?x.attrs.strokeHeight:o/2,y=i+b+o/2;p=c.drawLine(x.x,y-2*b,x.x,y,x.attrs.strokeColor?x.attrs.strokeColor:void 0,x.attrs.strokeDashArray,x.attrs.strokeWidth?x.attrs.strokeWidth:2,x.attrs.strokeLineCap),d.add(p)}):Array.isArray(n)&&n.forEach(function(x){var b=x.attrs.strokeWidth!==void 0?x.attrs.strokeWidth:l/2,y=t+b+l/2;p=c.drawLine(y-2*b,x.y,y,x.y,x.attrs.strokeColor?x.attrs.strokeColor:void 0,x.attrs.strokeDashArray,x.attrs.strokeHeight?x.attrs.strokeHeight:2,x.attrs.strokeLineCap),d.add(p)}),d}}]),T}(),rt=function(){function T(e,t){m(this,T),this.ctx=e,this.w=e.w;var i=this.w;this.barOptions=i.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=i.config.stroke.width,this.isNullValue=!1,this.isRangeBar=i.globals.seriesRangeBar.length&&this.isHorizontal,this.xyRatios=t,this.xyRatios!==null&&(this.xRatio=t.xRatio,this.initialXRatio=t.initialXRatio,this.yRatio=t.yRatio,this.invertedXRatio=t.invertedXRatio,this.invertedYRatio=t.invertedYRatio,this.baseLineY=t.baseLineY,this.baseLineInvertedY=t.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new Gt(this)}return D(T,[{key:"draw",value:function(e,t){var i=this.w,a=new H(this.ctx),n=new ue(this.ctx,i);e=n.getLogSeries(e),this.series=e,this.yRatio=n.getLogYRatios(this.yRatio),this.barHelpers.initVariables(e);var l=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var o=0,c=0;o<e.length;o++,c++){var d,p,x,b,y=void 0,C=void 0,E=[],k=[],M=i.globals.comboCharts?t[o]:o,I=a.group({class:"apexcharts-series",rel:o+1,seriesName:P.escapeString(i.globals.seriesNames[M]),"data:realIndex":M});this.ctx.series.addCollapsedClassToSeries(I,M),e[o].length>0&&(this.visibleI=this.visibleI+1);var R=0,f=0;this.yRatio.length>1&&(this.yaxisIndex=M),this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var v=this.barHelpers.initialPositions();C=v.y,R=v.barHeight,p=v.yDivision,b=v.zeroW,y=v.x,f=v.barWidth,d=v.xDivision,x=v.zeroH,this.horizontal||k.push(y+f/2);for(var A=a.group({class:"apexcharts-datalabels","data:realIndex":M}),L=a.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),N=0;N<i.globals.dataPoints;N++){var G=this.barHelpers.getStrokeWidth(o,N,M),X=null,ne={indexes:{i:o,j:N,realIndex:M,bc:c},x:y,y:C,strokeWidth:G,elSeries:I};this.isHorizontal?(X=this.drawBarPaths(h(h({},ne),{},{barHeight:R,zeroW:b,yDivision:p})),f=this.series[o][N]/this.invertedYRatio):(X=this.drawColumnPaths(h(h({},ne),{},{xDivision:d,barWidth:f,zeroH:x})),R=this.series[o][N]/this.yRatio[this.yaxisIndex]);var ee=this.barHelpers.drawGoalLine({barXPosition:X.barXPosition,barYPosition:X.barYPosition,goalX:X.goalX,goalY:X.goalY,barHeight:R,barWidth:f});ee&&L.add(ee),C=X.y,y=X.x,N>0&&k.push(y+f/2),E.push(C);var pe=this.barHelpers.getPathFillColor(e,o,N,M);this.renderSeries({realIndex:M,pathFill:pe,j:N,i:o,pathFrom:X.pathFrom,pathTo:X.pathTo,strokeWidth:G,elSeries:I,x:y,y:C,series:e,barHeight:R,barWidth:f,elDataLabelsWrap:A,elGoalsMarkers:L,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[M]=k,i.globals.seriesYvalues[M]=E,l.add(I)}return l}},{key:"renderSeries",value:function(e){var t=e.realIndex,i=e.pathFill,a=e.lineFill,n=e.j,l=e.i,o=e.pathFrom,c=e.pathTo,d=e.strokeWidth,p=e.elSeries,x=e.x,b=e.y,y=e.y1,C=e.y2,E=e.series,k=e.barHeight,M=e.barWidth,I=e.barYPosition,R=e.elDataLabelsWrap,f=e.elGoalsMarkers,v=e.visibleSeries,A=e.type,L=this.w,N=new H(this.ctx);a||(a=this.barOptions.distributed?L.globals.stroke.colors[n]:L.globals.stroke.colors[t]),L.config.series[l].data[n]&&L.config.series[l].data[n].strokeColor&&(a=L.config.series[l].data[n].strokeColor),this.isNullValue&&(i="none");var G=n/L.config.chart.animations.animateGradually.delay*(L.config.chart.animations.speed/L.globals.dataPoints)/2.4,X=N.renderPaths({i:l,j:n,realIndex:t,pathFrom:o,pathTo:c,stroke:a,strokeWidth:d,strokeLineCap:L.config.stroke.lineCap,fill:i,animationDelay:G,initialSpeed:L.config.chart.animations.speed,dataChangeSpeed:L.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(A,"-area")});X.attr("clip-path","url(#gridRectMask".concat(L.globals.cuid,")"));var ne=L.config.forecastDataPoints;ne.count>0&&n>=L.globals.dataPoints-ne.count&&(X.node.setAttribute("stroke-dasharray",ne.dashArray),X.node.setAttribute("stroke-width",ne.strokeWidth),X.node.setAttribute("fill-opacity",ne.fillOpacity)),y!==void 0&&C!==void 0&&(X.attr("data-range-y1",y),X.attr("data-range-y2",C)),new Z(this.ctx).setSelectionFilter(X,t,n),p.add(X);var ee=new We(this).handleBarDataLabels({x,y:b,y1:y,y2:C,i:l,j:n,series:E,realIndex:t,barHeight:k,barWidth:M,barYPosition:I,renderedPath:X,visibleSeries:v});return ee!==null&&R.add(ee),p.add(R),f&&p.add(f),p}},{key:"drawBarPaths",value:function(e){var t=e.indexes,i=e.barHeight,a=e.strokeWidth,n=e.zeroW,l=e.x,o=e.y,c=e.yDivision,d=e.elSeries,p=this.w,x=t.i,b=t.j;p.globals.isXNumeric&&(o=(p.globals.seriesX[x][b]-p.globals.minX)/this.invertedXRatio-i);var y=o+i*this.visibleI;l=this.barHelpers.getXForValue(this.series[x][b],n);var C=this.barHelpers.getBarpaths({barYPosition:y,barHeight:i,x1:n,x2:l,strokeWidth:a,series:this.series,realIndex:t.realIndex,i:x,j:b,w:p});return p.globals.isXNumeric||(o+=c),this.barHelpers.barBackground({j:b,i:x,y1:y-i*this.visibleI,y2:i*this.seriesLen,elSeries:d}),{pathTo:C.pathTo,pathFrom:C.pathFrom,x:l,y:o,goalX:this.barHelpers.getGoalValues("x",n,null,x,b),barYPosition:y}}},{key:"drawColumnPaths",value:function(e){var t=e.indexes,i=e.x,a=e.y,n=e.xDivision,l=e.barWidth,o=e.zeroH,c=e.strokeWidth,d=e.elSeries,p=this.w,x=t.realIndex,b=t.i,y=t.j,C=t.bc;if(p.globals.isXNumeric){var E=x;p.globals.seriesX[x].length||(E=p.globals.maxValsInArrayIndex),i=(p.globals.seriesX[E][y]-p.globals.minX)/this.xRatio-l*this.seriesLen/2}var k=i+l*this.visibleI;a=this.barHelpers.getYForValue(this.series[b][y],o);var M=this.barHelpers.getColumnPaths({barXPosition:k,barWidth:l,y1:o,y2:a,strokeWidth:c,series:this.series,realIndex:t.realIndex,i:b,j:y,w:p});return p.globals.isXNumeric||(i+=n),this.barHelpers.barBackground({bc:C,j:y,i:b,x1:k-c/2-l*this.visibleI,x2:l*this.seriesLen+c/2,elSeries:d}),{pathTo:M.pathTo,pathFrom:M.pathFrom,x:i,y:a,goalY:this.barHelpers.getGoalValues("y",null,o,b,y),barXPosition:k}}},{key:"getPreviousPath",value:function(e,t){for(var i,a=this.w,n=0;n<a.globals.previousPaths.length;n++){var l=a.globals.previousPaths[n];l.paths&&l.paths.length>0&&parseInt(l.realIndex,10)===parseInt(e,10)&&a.globals.previousPaths[n].paths[t]!==void 0&&(i=a.globals.previousPaths[n].paths[t].d)}return i}}]),T}(),Ge=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return D(T,[{key:"isValidDate",value:function(e){return!isNaN(this.parseDate(e))}},{key:"getTimeStamp",value:function(e){return Date.parse(e)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(e).toISOString().substr(0,25)).getTime():new Date(e).getTime():e}},{key:"getDate",value:function(e){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(e).toUTCString()):new Date(e)}},{key:"parseDate",value:function(e){var t=Date.parse(e);if(!isNaN(t))return this.getTimeStamp(e);var i=Date.parse(e.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(e){return Date.parse(e.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(e,t){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,n=["\0"].concat(K(i.months)),l=[""].concat(K(i.shortMonths)),o=[""].concat(K(i.days)),c=[""].concat(K(i.shortDays));function d(N,G){var X=N+"";for(G=G||2;X.length<G;)X="0"+X;return X}var p=a?e.getUTCFullYear():e.getFullYear();t=(t=(t=t.replace(/(^|[^\\])yyyy+/g,"$1"+p)).replace(/(^|[^\\])yy/g,"$1"+p.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+p);var x=(a?e.getUTCMonth():e.getMonth())+1;t=(t=(t=(t=t.replace(/(^|[^\\])MMMM+/g,"$1"+n[0])).replace(/(^|[^\\])MMM/g,"$1"+l[0])).replace(/(^|[^\\])MM/g,"$1"+d(x))).replace(/(^|[^\\])M/g,"$1"+x);var b=a?e.getUTCDate():e.getDate();t=(t=(t=(t=t.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+c[0])).replace(/(^|[^\\])dd/g,"$1"+d(b))).replace(/(^|[^\\])d/g,"$1"+b);var y=a?e.getUTCHours():e.getHours(),C=y>12?y-12:y===0?12:y;t=(t=(t=(t=t.replace(/(^|[^\\])HH+/g,"$1"+d(y))).replace(/(^|[^\\])H/g,"$1"+y)).replace(/(^|[^\\])hh+/g,"$1"+d(C))).replace(/(^|[^\\])h/g,"$1"+C);var E=a?e.getUTCMinutes():e.getMinutes();t=(t=t.replace(/(^|[^\\])mm+/g,"$1"+d(E))).replace(/(^|[^\\])m/g,"$1"+E);var k=a?e.getUTCSeconds():e.getSeconds();t=(t=t.replace(/(^|[^\\])ss+/g,"$1"+d(k))).replace(/(^|[^\\])s/g,"$1"+k);var M=a?e.getUTCMilliseconds():e.getMilliseconds();t=t.replace(/(^|[^\\])fff+/g,"$1"+d(M,3)),M=Math.round(M/10),t=t.replace(/(^|[^\\])ff/g,"$1"+d(M)),M=Math.round(M/10);var I=y<12?"AM":"PM";t=(t=(t=t.replace(/(^|[^\\])f/g,"$1"+M)).replace(/(^|[^\\])TT+/g,"$1"+I)).replace(/(^|[^\\])T/g,"$1"+I.charAt(0));var R=I.toLowerCase();t=(t=t.replace(/(^|[^\\])tt+/g,"$1"+R)).replace(/(^|[^\\])t/g,"$1"+R.charAt(0));var f=-e.getTimezoneOffset(),v=a||!f?"Z":f>0?"+":"-";if(!a){var A=(f=Math.abs(f))%60;v+=d(Math.floor(f/60))+":"+d(A)}t=t.replace(/(^|[^\\])K/g,"$1"+v);var L=(a?e.getUTCDay():e.getDay())+1;return t=(t=(t=(t=(t=t.replace(new RegExp(o[0],"g"),o[L])).replace(new RegExp(c[0],"g"),c[L])).replace(new RegExp(n[0],"g"),n[x])).replace(new RegExp(l[0],"g"),l[x])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(e,t,i){var a=this.w;a.config.xaxis.min!==void 0&&(e=a.config.xaxis.min),a.config.xaxis.max!==void 0&&(t=a.config.xaxis.max);var n=this.getDate(e),l=this.getDate(t),o=this.formatDate(n,"yyyy MM dd HH mm ss fff").split(" "),c=this.formatDate(l,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(c[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(c[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(c[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(c[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(c[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(c[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(c[0],10)}}},{key:"isLeapYear",value:function(e){return e%4==0&&e%100!=0||e%400==0}},{key:"calculcateLastDaysOfMonth",value:function(e,t,i){return this.determineDaysOfMonths(e,t)-i}},{key:"determineDaysOfYear",value:function(e){var t=365;return this.isLeapYear(e)&&(t=366),t}},{key:"determineRemainingDaysOfYear",value:function(e,t,i){var a=this.daysCntOfYear[t]+i;return t>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(e,t){var i=30;switch(e=P.monthMod(e),!0){case this.months30.indexOf(e)>-1:e===2&&(i=this.isLeapYear(t)?29:28);break;case this.months31.indexOf(e)>-1:default:i=31}return i}}]),T}(),ot=function(T){_(t,rt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return D(t,[{key:"draw",value:function(i,a){var n=this.w,l=new H(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=i,this.seriesRangeStart=n.globals.seriesRangeStart,this.seriesRangeEnd=n.globals.seriesRangeEnd,this.barHelpers.initVariables(i);for(var o=l.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),c=0;c<i.length;c++){var d,p,x,b=void 0,y=void 0,C=void 0,E=n.globals.comboCharts?a[c]:c,k=l.group({class:"apexcharts-series",seriesName:P.escapeString(n.globals.seriesNames[E]),rel:c+1,"data:realIndex":E});this.ctx.series.addCollapsedClassToSeries(k,E),i[c].length>0&&(this.visibleI=this.visibleI+1);var M=0,I=0;this.yRatio.length>1&&(this.yaxisIndex=E);var R=this.barHelpers.initialPositions();y=R.y,x=R.zeroW,b=R.x,I=R.barWidth,d=R.xDivision,p=R.zeroH;for(var f=l.group({class:"apexcharts-datalabels","data:realIndex":E}),v=l.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),A=0;A<n.globals.dataPoints;A++){var L=this.barHelpers.getStrokeWidth(c,A,E),N=this.seriesRangeStart[c][A],G=this.seriesRangeEnd[c][A],X=null,ne=null,ee={x:b,y,strokeWidth:L,elSeries:k};if(C=R.yDivision,M=R.barHeight,this.isHorizontal){ne=y+M*this.visibleI;var pe=this.seriesLen;n.config.plotOptions.bar.rangeBarGroupRows&&(pe=1);var Ae=(C-M*pe)/2;if(n.config.series[c].data[A]===void 0)break;if(n.config.series[c].data[A].x){var Je=this.detectOverlappingBars({i:c,j:A,barYPosition:ne,srty:Ae,barHeight:M,yDivision:C,initPositions:R});M=Je.barHeight,ne=Je.barYPosition}I=(X=this.drawRangeBarPaths(h({indexes:{i:c,j:A,realIndex:E},barHeight:M,barYPosition:ne,zeroW:x,yDivision:C,y1:N,y2:G},ee))).barWidth}else M=(X=this.drawRangeColumnPaths(h({indexes:{i:c,j:A,realIndex:E},zeroH:p,barWidth:I,xDivision:d},ee))).barHeight;var Ye=this.barHelpers.drawGoalLine({barXPosition:X.barXPosition,barYPosition:ne,goalX:X.goalX,goalY:X.goalY,barHeight:M,barWidth:I});Ye&&v.add(Ye),y=X.y,b=X.x;var ft=this.barHelpers.getPathFillColor(i,c,A,E),wt=n.globals.stroke.colors[E];this.renderSeries({realIndex:E,pathFill:ft,lineFill:wt,j:A,i:c,x:b,y,y1:N,y2:G,pathFrom:X.pathFrom,pathTo:X.pathTo,strokeWidth:L,elSeries:k,series:i,barHeight:M,barYPosition:ne,barWidth:I,elDataLabelsWrap:f,elGoalsMarkers:v,visibleSeries:this.visibleI,type:"rangebar"})}o.add(k)}return o}},{key:"detectOverlappingBars",value:function(i){var a=i.i,n=i.j,l=i.barYPosition,o=i.srty,c=i.barHeight,d=i.yDivision,p=i.initPositions,x=this.w,b=[],y=x.config.series[a].data[n].rangeName,C=x.config.series[a].data[n].x,E=x.globals.labels.indexOf(C),k=x.globals.seriesRangeBar[a].findIndex(function(M){return M.x===C&&M.overlaps.length>0});return l=x.config.plotOptions.bar.rangeBarGroupRows?o+d*E:o+c*this.visibleI+d*E,k>-1&&!x.config.plotOptions.bar.rangeBarOverlap&&(b=x.globals.seriesRangeBar[a][k].overlaps).indexOf(y)>-1&&(l=(c=p.barHeight/b.length)*this.visibleI+d*(100-parseInt(this.barOptions.barHeight,10))/100/2+c*(this.visibleI+b.indexOf(y))+d*E),{barYPosition:l,barHeight:c}}},{key:"drawRangeColumnPaths",value:function(i){var a=i.indexes,n=i.x;i.strokeWidth;var l=i.xDivision,o=i.barWidth,c=i.zeroH,d=this.w,p=a.i,x=a.j,b=this.yRatio[this.yaxisIndex],y=a.realIndex,C=this.getRangeValue(y,x),E=Math.min(C.start,C.end),k=Math.max(C.start,C.end);d.globals.isXNumeric&&(n=(d.globals.seriesX[p][x]-d.globals.minX)/this.xRatio-o/2);var M=n+o*this.visibleI;this.series[p][x]===void 0||this.series[p][x]===null?E=c:(E=c-E/b,k=c-k/b);var I=Math.abs(k-E),R=this.barHelpers.getColumnPaths({barXPosition:M,barWidth:o,y1:E,y2:k,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:a.realIndex,i:y,j:x,w:d});return d.globals.isXNumeric||(n+=l),{pathTo:R.pathTo,pathFrom:R.pathFrom,barHeight:I,x:n,y:k,goalY:this.barHelpers.getGoalValues("y",null,c,p,x),barXPosition:M}}},{key:"drawRangeBarPaths",value:function(i){var a=i.indexes,n=i.y,l=i.y1,o=i.y2,c=i.yDivision,d=i.barHeight,p=i.barYPosition,x=i.zeroW,b=this.w,y=x+l/this.invertedYRatio,C=x+o/this.invertedYRatio,E=Math.abs(C-y),k=this.barHelpers.getBarpaths({barYPosition:p,barHeight:d,x1:y,x2:C,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:a.realIndex,realIndex:a.realIndex,j:a.j,w:b});return b.globals.isXNumeric||(n+=c),{pathTo:k.pathTo,pathFrom:k.pathFrom,barWidth:E,x:C,goalX:this.barHelpers.getGoalValues("x",x,null,a.realIndex,a.j),y:n}}},{key:"getRangeValue",value:function(i,a){var n=this.w;return{start:n.globals.seriesRangeStart[i][a],end:n.globals.seriesRangeEnd[i][a]}}},{key:"getTooltipValues",value:function(i){var a=i.ctx,n=i.seriesIndex,l=i.dataPointIndex,o=i.y1,c=i.y2,d=i.w,p=d.globals.seriesRangeStart[n][l],x=d.globals.seriesRangeEnd[n][l],b=d.globals.labels[l],y=d.config.series[n].name?d.config.series[n].name:"",C=d.config.tooltip.y.formatter,E=d.config.tooltip.y.title.formatter,k={w:d,seriesIndex:n,dataPointIndex:l,start:p,end:x};typeof E=="function"&&(y=E(y,k)),Number.isFinite(o)&&Number.isFinite(c)&&(p=o,x=c,d.config.series[n].data[l].x&&(b=d.config.series[n].data[l].x+":"),typeof C=="function"&&(b=C(b,k)));var M="",I="",R=d.globals.colors[n];if(d.config.tooltip.x.formatter===void 0)if(d.config.xaxis.type==="datetime"){var f=new Ge(a);M=f.formatDate(f.getDate(p),d.config.tooltip.x.format),I=f.formatDate(f.getDate(x),d.config.tooltip.x.format)}else M=p,I=x;else M=d.config.tooltip.x.formatter(p),I=d.config.tooltip.x.formatter(x);return{start:p,end:x,startVal:M,endVal:I,ylabel:b,color:R,seriesName:y}}},{key:"buildCustomTooltipHTML",value:function(i){var a=i.color,n=i.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+a+'">'+(n||"")+'</span></div><div> <span class="category">'+i.ylabel+' </span> <span class="value start-value">'+i.start+'</span> <span class="separator">-</span> <span class="value end-value">'+i.end+"</span></div></div>"}}]),t}(),ct=function(){function T(e){m(this,T),this.opts=e}return D(T,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(e){return this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0,P.extend(e,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var e=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var i=t.seriesIndex,a=t.dataPointIndex,n=t.w;return e._getBoxTooltip(n,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var e=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var i=t.seriesIndex,a=t.dataPointIndex,n=t.w;return e._getBoxTooltip(n,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(e,t){t.ctx;var i=t.seriesIndex,a=t.dataPointIndex,n=t.w,l=n.globals.seriesRangeStart[i][a];return n.globals.seriesRangeEnd[i][a]-l},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(e){return e.w.config.plotOptions&&e.w.config.plotOptions.bar&&e.w.config.plotOptions.bar.horizontal?function(t){var i=new ot(t.ctx,null),a=i.getTooltipValues(t),n=a.color,l=a.seriesName,o=a.ylabel,c=a.startVal,d=a.endVal;return i.buildCustomTooltipHTML({color:n,seriesName:l,ylabel:o,start:c,end:d})}(e):function(t){var i=new ot(t.ctx,null),a=i.getTooltipValues(t),n=a.color,l=a.seriesName,o=a.ylabel,c=a.start,d=a.end;return i.buildCustomTooltipHTML({color:n,seriesName:l,ylabel:o,start:c,end:d})}(e)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(e){return P.extend(e,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(e){e.dataLabels=e.dataLabels||{},e.dataLabels.formatter=e.dataLabels.formatter||void 0;var t=e.dataLabels.formatter;return e.yaxis.forEach(function(i,a){e.yaxis[a].min=0,e.yaxis[a].max=100}),e.chart.type==="bar"&&(e.dataLabels.formatter=t||function(i){return typeof i=="number"&&i?i.toFixed(0)+"%":i}),e}},{key:"convertCatToNumeric",value:function(e){return e.xaxis.convertedCatToNumeric=!0,e}},{key:"convertCatToNumericXaxis",value:function(e,t,i){e.xaxis.type="numeric",e.xaxis.labels=e.xaxis.labels||{},e.xaxis.labels.formatter=e.xaxis.labels.formatter||function(l){return P.isNumber(l)?Math.floor(l):l};var a=e.xaxis.labels.formatter,n=e.xaxis.categories&&e.xaxis.categories.length?e.xaxis.categories:e.labels;return i&&i.length&&(n=i.map(function(l){return Array.isArray(l)?l:String(l)})),n&&n.length&&(e.xaxis.labels.formatter=function(l){return P.isNumber(l)?a(n[Math.floor(l)-1]):a(l)}),e.xaxis.categories=[],e.labels=[],e.xaxis.tickAmount=e.xaxis.tickAmount||"dataPoints",e}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(e){return e},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(e,t,i,a,n){var l=e.globals.seriesCandleO[t][i],o=e.globals.seriesCandleH[t][i],c=e.globals.seriesCandleM[t][i],d=e.globals.seriesCandleL[t][i],p=e.globals.seriesCandleC[t][i];return e.config.series[t].type&&e.config.series[t].type!==n?`<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name?e.config.series[t].name:"series-"+(t+1),": <strong>").concat(e.globals.series[t][i],`</strong>
        </div>`):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(c?"<div>".concat(a[2],': <span class="value">')+c+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+d+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+p+"</span></div></div>"}}]),T}(),U=function(){function T(e){m(this,T),this.opts=e}return D(T,[{key:"init",value:function(e){var t=e.responsiveOverride,i=this.opts,a=new ie,n=new ct(i);this.chartType=i.chart.type,this.chartType==="histogram"&&(i.chart.type="bar",i=P.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},i)),i=this.extendYAxis(i),i=this.extendAnnotations(i);var l=a.init(),o={};if(i&&g(i)==="object"){var c={};c=["line","area","bar","candlestick","boxPlot","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(i.chart.type)!==-1?n[i.chart.type]():n.line(),i.chart.brush&&i.chart.brush.enabled&&(c=n.brush(c)),i.chart.stacked&&i.chart.stackType==="100%"&&(i=n.stacked100(i)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(i),i.xaxis=i.xaxis||window.Apex.xaxis||{},t||(i.xaxis.convertedCatToNumeric=!1),((i=this.checkForCatToNumericXAxis(this.chartType,c,i)).chart.sparkline&&i.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(c=n.sparkline(c)),o=P.extend(l,c)}var d=P.extend(o,window.Apex);return l=P.extend(d,i),l=this.handleUserInputErrors(l)}},{key:"checkForCatToNumericXAxis",value:function(e,t,i){var a=new ct(i),n=(e==="bar"||e==="boxPlot")&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,l=e==="pie"||e==="polarArea"||e==="donut"||e==="radar"||e==="radialBar"||e==="heatmap",o=i.xaxis.type!=="datetime"&&i.xaxis.type!=="numeric",c=i.xaxis.tickPlacement?i.xaxis.tickPlacement:t.xaxis&&t.xaxis.tickPlacement;return n||l||!o||c==="between"||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(e,t){var i=new ie;(e.yaxis===void 0||!e.yaxis||Array.isArray(e.yaxis)&&e.yaxis.length===0)&&(e.yaxis={}),e.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(e.yaxis=P.extend(e.yaxis,window.Apex.yaxis)),e.yaxis.constructor!==Array?e.yaxis=[P.extend(i.yAxis,e.yaxis)]:e.yaxis=P.extendArray(e.yaxis,i.yAxis);var a=!1;e.yaxis.forEach(function(l){l.logarithmic&&(a=!0)});var n=e.series;return t&&!n&&(n=t.config.series),a&&n.length!==e.yaxis.length&&n.length&&(e.yaxis=n.map(function(l,o){if(l.name||(n[o].name="series-".concat(o+1)),e.yaxis[o])return e.yaxis[o].seriesName=n[o].name,e.yaxis[o];var c=P.extend(i.yAxis,e.yaxis[0]);return c.show=!1,c})),a&&n.length>1&&n.length!==e.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),e}},{key:"extendAnnotations",value:function(e){return e.annotations===void 0&&(e.annotations={},e.annotations.yaxis=[],e.annotations.xaxis=[],e.annotations.points=[]),e=this.extendYAxisAnnotations(e),e=this.extendXAxisAnnotations(e),e=this.extendPointAnnotations(e)}},{key:"extendYAxisAnnotations",value:function(e){var t=new ie;return e.annotations.yaxis=P.extendArray(e.annotations.yaxis!==void 0?e.annotations.yaxis:[],t.yAxisAnnotation),e}},{key:"extendXAxisAnnotations",value:function(e){var t=new ie;return e.annotations.xaxis=P.extendArray(e.annotations.xaxis!==void 0?e.annotations.xaxis:[],t.xAxisAnnotation),e}},{key:"extendPointAnnotations",value:function(e){var t=new ie;return e.annotations.points=P.extendArray(e.annotations.points!==void 0?e.annotations.points:[],t.pointAnnotation),e}},{key:"checkForDarkTheme",value:function(e){e.theme&&e.theme.mode==="dark"&&(e.tooltip||(e.tooltip={}),e.tooltip.theme!=="light"&&(e.tooltip.theme="dark"),e.chart.foreColor||(e.chart.foreColor="#f6f7f8"),e.chart.background||(e.chart.background="#424242"),e.theme.palette||(e.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(e){var t=e;if(t.tooltip.shared&&t.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if(t.chart.type==="bar"&&t.plotOptions.bar.horizontal){if(t.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");t.yaxis[0].reversed&&(t.yaxis[0].opposite=!0),t.xaxis.tooltip.enabled=!1,t.yaxis[0].tooltip.enabled=!1,t.chart.zoom.enabled=!1}return t.chart.type!=="bar"&&t.chart.type!=="rangeBar"||t.tooltip.shared&&t.xaxis.crosshairs.width==="barWidth"&&t.series.length>1&&(t.xaxis.crosshairs.width="tickWidth"),t.chart.type!=="candlestick"&&t.chart.type!=="boxPlot"||t.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(t.chart.type," chart is not supported.")),t.yaxis[0].reversed=!1),t}}]),T}(),he=function(){function T(){m(this,T)}return D(T,[{key:"initGlobalVars",value:function(e){e.series=[],e.seriesCandleO=[],e.seriesCandleH=[],e.seriesCandleM=[],e.seriesCandleL=[],e.seriesCandleC=[],e.seriesRangeStart=[],e.seriesRangeEnd=[],e.seriesRangeBar=[],e.seriesPercent=[],e.seriesGoals=[],e.seriesX=[],e.seriesZ=[],e.seriesNames=[],e.seriesTotals=[],e.seriesLog=[],e.seriesColors=[],e.stackedSeriesTotals=[],e.seriesXvalues=[],e.seriesYvalues=[],e.labels=[],e.hasGroups=!1,e.groups=[],e.categoryLabels=[],e.timescaleLabels=[],e.noLabelsProvided=!1,e.resizeTimer=null,e.selectionResizeTimer=null,e.delayedElements=[],e.pointsArray=[],e.dataLabelsRects=[],e.isXNumeric=!1,e.xaxisLabelsCount=0,e.skipLastTimelinelabel=!1,e.skipFirstTimelinelabel=!1,e.isDataXYZ=!1,e.isMultiLineX=!1,e.isMultipleYAxis=!1,e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE,e.minYArr=[],e.maxYArr=[],e.maxX=-Number.MAX_VALUE,e.minX=Number.MAX_VALUE,e.initialMaxX=-Number.MAX_VALUE,e.initialMinX=Number.MAX_VALUE,e.maxDate=0,e.minDate=Number.MAX_VALUE,e.minZ=Number.MAX_VALUE,e.maxZ=-Number.MAX_VALUE,e.minXDiff=Number.MAX_VALUE,e.yAxisScale=[],e.xAxisScale=null,e.xAxisTicksPositions=[],e.yLabelsCoords=[],e.yTitleCoords=[],e.barPadForNumericAxis=0,e.padHorizontal=0,e.xRange=0,e.yRange=[],e.zRange=0,e.dataPoints=0,e.xTickAmount=0}},{key:"globalVars",value:function(e){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:e.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:e.chart.toolbar.autoSelected==="zoom"&&e.chart.toolbar.tools.zoom&&e.chart.zoom.enabled,panEnabled:e.chart.toolbar.autoSelected==="pan"&&e.chart.toolbar.tools.pan,selectionEnabled:e.chart.toolbar.autoSelected==="selection"&&e.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(e){var t=this.globalVars(e);return this.initGlobalVars(t),t.initialConfig=P.extend({},e),t.initialSeries=P.clone(e.series),t.lastXAxis=P.clone(t.initialConfig.xaxis),t.lastYAxis=P.clone(t.initialConfig.yaxis),t}}]),T}(),de=function(){function T(e){m(this,T),this.opts=e}return D(T,[{key:"init",value:function(){var e=new U(this.opts).init({responsiveOverride:!1});return{config:e,globals:new he().init(e)}}}]),T}(),be=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new ue(this.ctx)}return D(T,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var e=this.w.config.series.slice(),t=new $e(this.ctx);if(this.activeSeriesIndex=t.getActiveConfigSeriesIndex(),e[this.activeSeriesIndex].data!==void 0&&e[this.activeSeriesIndex].data.length>0&&e[this.activeSeriesIndex].data[0]!==null&&e[this.activeSeriesIndex].data[0].x!==void 0&&e[this.activeSeriesIndex].data[0]!==null)return!0}},{key:"isFormat2DArray",value:function(){var e=this.w.config.series.slice(),t=new $e(this.ctx);if(this.activeSeriesIndex=t.getActiveConfigSeriesIndex(),e[this.activeSeriesIndex].data!==void 0&&e[this.activeSeriesIndex].data.length>0&&e[this.activeSeriesIndex].data[0]!==void 0&&e[this.activeSeriesIndex].data[0]!==null&&e[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(e,t){for(var i=this.w.config,a=this.w.globals,n=i.chart.type==="boxPlot"||i.series[t].type==="boxPlot",l=0;l<e[t].data.length;l++)if(e[t].data[l][1]!==void 0&&(Array.isArray(e[t].data[l][1])&&e[t].data[l][1].length===4&&!n?this.twoDSeries.push(P.parseNumber(e[t].data[l][1][3])):e[t].data[l].length>=5?this.twoDSeries.push(P.parseNumber(e[t].data[l][4])):this.twoDSeries.push(P.parseNumber(e[t].data[l][1])),a.dataFormatXNumeric=!0),i.xaxis.type==="datetime"){var o=new Date(e[t].data[l][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(e[t].data[l][0]);for(var c=0;c<e[t].data.length;c++)e[t].data[c][2]!==void 0&&(this.threeDSeries.push(e[t].data[c][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(e,t){var i=this.w.config,a=this.w.globals,n=new Ge(this.ctx),l=t;a.collapsedSeriesIndices.indexOf(t)>-1&&(l=this.activeSeriesIndex);for(var o=0;o<e[t].data.length;o++)e[t].data[o].y!==void 0&&(Array.isArray(e[t].data[o].y)?this.twoDSeries.push(P.parseNumber(e[t].data[o].y[e[t].data[o].y.length-1])):this.twoDSeries.push(P.parseNumber(e[t].data[o].y))),e[t].data[o].goals!==void 0&&Array.isArray(e[t].data[o].goals)?(this.seriesGoals[t]===void 0&&(this.seriesGoals[t]=[]),this.seriesGoals[t].push(e[t].data[o].goals)):(this.seriesGoals[t]===void 0&&(this.seriesGoals[t]=[]),this.seriesGoals[t].push(null));for(var c=0;c<e[l].data.length;c++){var d=typeof e[l].data[c].x=="string",p=Array.isArray(e[l].data[c].x),x=!p&&!!n.isValidDate(e[l].data[c].x.toString());if(d||x)if(d||i.xaxis.convertedCatToNumeric){var b=a.isBarHorizontal&&a.isRangeData;i.xaxis.type!=="datetime"||b?(this.fallbackToCategory=!0,this.twoDSeriesX.push(e[l].data[c].x)):this.twoDSeriesX.push(n.parseDate(e[l].data[c].x))}else i.xaxis.type==="datetime"?this.twoDSeriesX.push(n.parseDate(e[l].data[c].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(e[l].data[c].x)));else p?(this.fallbackToCategory=!0,this.twoDSeriesX.push(e[l].data[c].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(e[l].data[c].x))}if(e[t].data[0]&&e[t].data[0].z!==void 0){for(var y=0;y<e[t].data.length;y++)this.threeDSeries.push(e[t].data[y].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(e,t){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",e,t):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",e,t)),i.seriesRangeStart.push(a.start),i.seriesRangeEnd.push(a.end),i.seriesRangeBar.push(a.rangeUniques),i.seriesRangeBar.forEach(function(n,l){n&&n.forEach(function(o,c){o.y.forEach(function(d,p){for(var x=0;x<o.y.length;x++)if(p!==x){var b=d.y1,y=d.y2,C=o.y[x].y1;b<=o.y[x].y2&&C<=y&&(o.overlaps.indexOf(d.rangeName)<0&&o.overlaps.push(d.rangeName),o.overlaps.indexOf(o.y[x].rangeName)<0&&o.overlaps.push(o.y[x].rangeName))}})})}),a}},{key:"handleCandleStickBoxData",value:function(e,t){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",e,t):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",e,t)),i.seriesCandleO[t]=a.o,i.seriesCandleH[t]=a.h,i.seriesCandleM[t]=a.m,i.seriesCandleL[t]=a.l,i.seriesCandleC[t]=a.c,a}},{key:"handleRangeDataFormat",value:function(e,t,i){var a=[],n=[],l=t[i].data.filter(function(b,y,C){return y===C.findIndex(function(E){return E.x===b.x})}).map(function(b,y){return{x:b.x,overlaps:[],y:[]}}),o="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",c=new $e(this.ctx).getActiveConfigSeriesIndex();if(e==="array"){if(t[c].data[0][1].length!==2)throw new Error(o);for(var d=0;d<t[i].data.length;d++)a.push(t[i].data[d][1][0]),n.push(t[i].data[d][1][1])}else if(e==="xy"){if(t[c].data[0].y.length!==2)throw new Error(o);for(var p=function(b){var y=P.randomId(),C=t[i].data[b].x,E={y1:t[i].data[b].y[0],y2:t[i].data[b].y[1],rangeName:y};t[i].data[b].rangeName=y;var k=l.findIndex(function(M){return M.x===C});l[k].y.push(E),a.push(E.y1),n.push(E.y2)},x=0;x<t[i].data.length;x++)p(x)}return{start:a,end:n,rangeUniques:l}}},{key:"handleCandleStickBoxDataFormat",value:function(e,t,i){var a=this.w,n=a.config.chart.type==="boxPlot"||a.config.series[i].type==="boxPlot",l=[],o=[],c=[],d=[],p=[];if(e==="array")if(n&&t[i].data[0].length===6||!n&&t[i].data[0].length===5)for(var x=0;x<t[i].data.length;x++)l.push(t[i].data[x][1]),o.push(t[i].data[x][2]),n?(c.push(t[i].data[x][3]),d.push(t[i].data[x][4]),p.push(t[i].data[x][5])):(d.push(t[i].data[x][3]),p.push(t[i].data[x][4]));else for(var b=0;b<t[i].data.length;b++)Array.isArray(t[i].data[b][1])&&(l.push(t[i].data[b][1][0]),o.push(t[i].data[b][1][1]),n?(c.push(t[i].data[b][1][2]),d.push(t[i].data[b][1][3]),p.push(t[i].data[b][1][4])):(d.push(t[i].data[b][1][2]),p.push(t[i].data[b][1][3])));else if(e==="xy")for(var y=0;y<t[i].data.length;y++)Array.isArray(t[i].data[y].y)&&(l.push(t[i].data[y].y[0]),o.push(t[i].data[y].y[1]),n?(c.push(t[i].data[y].y[2]),d.push(t[i].data[y].y[3]),p.push(t[i].data[y].y[4])):(d.push(t[i].data[y].y[2]),p.push(t[i].data[y].y[3])));return{o:l,h:o,m:c,l:d,c:p}}},{key:"parseDataAxisCharts",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.ctx,a=this.w.config,n=this.w.globals,l=new Ge(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();n.isRangeBar=a.chart.type==="rangeBar"&&n.isBarHorizontal,n.hasGroups=a.xaxis.type==="category"&&a.xaxis.group.groups.length>0,n.hasGroups&&(n.groups=a.xaxis.group.groups);for(var c=function(){for(var x=0;x<o.length;x++)if(typeof o[x]=="string"){if(!l.isValidDate(o[x]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");t.twoDSeriesX.push(l.parseDate(o[x]))}else t.twoDSeriesX.push(o[x])},d=0;d<e.length;d++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],e[d].data===void 0)return void console.error("It is a possibility that you may have not included 'data' property in series.");if(a.chart.type!=="rangeBar"&&a.chart.type!=="rangeArea"&&e[d].type!=="rangeBar"&&e[d].type!=="rangeArea"||(n.isRangeData=!0,this.handleRangeData(e,d)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(e,d):this.isFormatXY()&&this.handleFormatXY(e,d),a.chart.type!=="candlestick"&&e[d].type!=="candlestick"&&a.chart.type!=="boxPlot"&&e[d].type!=="boxPlot"||this.handleCandleStickBoxData(e,d),n.series.push(this.twoDSeries),n.labels.push(this.twoDSeriesX),n.seriesX.push(this.twoDSeriesX),n.seriesGoals=this.seriesGoals,d!==this.activeSeriesIndex||this.fallbackToCategory||(n.isXNumeric=!0);else{a.xaxis.type==="datetime"?(n.isXNumeric=!0,c(),n.seriesX.push(this.twoDSeriesX)):a.xaxis.type==="numeric"&&(n.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,n.seriesX.push(this.twoDSeriesX))),n.labels.push(this.twoDSeriesX);var p=e[d].data.map(function(x){return P.parseNumber(x)});n.series.push(p)}n.seriesZ.push(this.threeDSeries),e[d].name!==void 0?n.seriesNames.push(e[d].name):n.seriesNames.push("series-"+parseInt(d+1,10)),e[d].color!==void 0?n.seriesColors.push(e[d].color):n.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(e){var t=this.w.globals,i=this.w.config;t.series=e.slice(),t.seriesNames=i.labels.slice();for(var a=0;a<t.series.length;a++)t.seriesNames[a]===void 0&&t.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(e){var t=this.w.config,i=this.w.globals;t.xaxis.categories.length>0?i.labels=t.xaxis.categories:t.labels.length>0?i.labels=t.labels.slice():this.fallbackToCategory?(i.labels=i.labels[0],i.seriesRangeBar.length&&(i.seriesRangeBar.map(function(a){a.forEach(function(n){i.labels.indexOf(n.x)<0&&n.x&&i.labels.push(n.x)})}),i.labels=i.labels.filter(function(a,n,l){return l.indexOf(a)===n})),t.xaxis.convertedCatToNumeric&&(new ct(t).convertCatToNumericXaxis(t,this.ctx,i.seriesX[0]),this._generateExternalLabels(e))):this._generateExternalLabels(e)}},{key:"_generateExternalLabels",value:function(e){var t=this.w.globals,i=this.w.config,a=[];if(t.axisCharts){if(t.series.length>0)if(this.isFormatXY())for(var n=i.series.map(function(x,b){return x.data.filter(function(y,C,E){return E.findIndex(function(k){return k.x===y.x})===C})}),l=n.reduce(function(x,b,y,C){return C[x].length>b.length?x:y},0),o=0;o<n[l].length;o++)a.push(o+1);else for(var c=0;c<t.series[t.maxValsInArrayIndex].length;c++)a.push(c+1);t.seriesX=[];for(var d=0;d<e.length;d++)t.seriesX.push(a);t.isXNumeric=!0}if(a.length===0){a=t.axisCharts?[]:t.series.map(function(x,b){return b+1});for(var p=0;p<e.length;p++)t.seriesX.push(a)}t.labels=a,i.xaxis.convertedCatToNumeric&&(t.categoryLabels=a.map(function(x){return i.xaxis.labels.formatter(x)})),t.noLabelsProvided=!0}},{key:"parseData",value:function(e){var t=this.w,i=t.config,a=t.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?this.parseDataAxisCharts(e):this.parseDataNonAxisCharts(e),this.coreUtils.getLargestSeries(),i.chart.type==="bar"&&i.chart.stacked){var n=new $e(this.ctx);a.series=n.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&(i.xaxis.type!=="numeric"||i.labels.length!==0||i.xaxis.categories.length!==0)||this.handleExternalLabelsData(e);for(var l=this.coreUtils.getCategoryLabels(a.labels),o=0;o<l.length;o++)if(Array.isArray(l[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var e=this,t=this.w;t.globals.ignoreYAxisIndexes=t.globals.collapsedSeries.map(function(i,a){if(e.w.globals.isMultipleYAxis&&!t.config.chart.stacked)return i.index})}}]),T}(),Fe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return D(T,[{key:"xLabelFormat",value:function(e,t,i,a){var n=this.w;if(n.config.xaxis.type==="datetime"&&n.config.xaxis.labels.formatter===void 0&&n.config.tooltip.x.formatter===void 0){var l=new Ge(this.ctx);return l.formatDate(l.getDate(t),n.config.tooltip.x.format)}return e(t,i,a)}},{key:"defaultGeneralFormatter",value:function(e){return Array.isArray(e)?e.map(function(t){return t}):e}},{key:"defaultYFormatter",value:function(e,t,i){var a=this.w;return P.isNumber(e)&&(e=a.globals.yValueDecimal!==0?e.toFixed(t.decimalsInFloat!==void 0?t.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?e.toFixed(1):e.toFixed(0)),e}},{key:"setLabelFormatters",value:function(){var e=this,t=this.w;return t.globals.xaxisTooltipFormatter=function(i){return e.defaultGeneralFormatter(i)},t.globals.ttKeyFormatter=function(i){return e.defaultGeneralFormatter(i)},t.globals.ttZFormatter=function(i){return i},t.globals.legendFormatter=function(i){return e.defaultGeneralFormatter(i)},t.config.xaxis.labels.formatter!==void 0?t.globals.xLabelFormatter=t.config.xaxis.labels.formatter:t.globals.xLabelFormatter=function(i){if(P.isNumber(i)){if(!t.config.xaxis.convertedCatToNumeric&&t.config.xaxis.type==="numeric"){if(P.isNumber(t.config.xaxis.decimalsInFloat))return i.toFixed(t.config.xaxis.decimalsInFloat);var a=t.globals.maxX-t.globals.minX;return a>0&&a<100?i.toFixed(1):i.toFixed(0)}return t.globals.isBarHorizontal&&t.globals.maxY-t.globals.minYArr<4?i.toFixed(1):i.toFixed(0)}return i},typeof t.config.tooltip.x.formatter=="function"?t.globals.ttKeyFormatter=t.config.tooltip.x.formatter:t.globals.ttKeyFormatter=t.globals.xLabelFormatter,typeof t.config.xaxis.tooltip.formatter=="function"&&(t.globals.xaxisTooltipFormatter=t.config.xaxis.tooltip.formatter),(Array.isArray(t.config.tooltip.y)||t.config.tooltip.y.formatter!==void 0)&&(t.globals.ttVal=t.config.tooltip.y),t.config.tooltip.z.formatter!==void 0&&(t.globals.ttZFormatter=t.config.tooltip.z.formatter),t.config.legend.formatter!==void 0&&(t.globals.legendFormatter=t.config.legend.formatter),t.config.yaxis.forEach(function(i,a){i.labels.formatter!==void 0?t.globals.yLabelFormatters[a]=i.labels.formatter:t.globals.yLabelFormatters[a]=function(n){return t.globals.xyCharts?Array.isArray(n)?n.map(function(l){return e.defaultYFormatter(l,i,a)}):e.defaultYFormatter(n,i,a):n}}),t.globals}},{key:"heatmapLabelFormatters",value:function(){var e=this.w;if(e.config.chart.type==="heatmap"){e.globals.yAxisScale[0].result=e.globals.seriesNames.slice();var t=e.globals.seriesNames.reduce(function(i,a){return i.length>a.length?i:a},0);e.globals.yAxisScale[0].niceMax=t,e.globals.yAxisScale[0].niceMin=t}}}]),T}(),Ie=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"getLabel",value:function(e,t,i,a){var n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"12px",o=!(arguments.length>6&&arguments[6]!==void 0)||arguments[6],c=this.w,d=e[a]===void 0?"":e[a],p=d,x=c.globals.xLabelFormatter,b=c.config.xaxis.labels.formatter,y=!1,C=new Fe(this.ctx),E=d;o&&(p=C.xLabelFormat(x,d,E,{i:a,dateFormatter:new Ge(this.ctx).formatDate,w:c}),b!==void 0&&(p=b(d,e[a],{i:a,dateFormatter:new Ge(this.ctx).formatDate,w:c})));var k=function(f){var v=null;return t.forEach(function(A){A.unit==="month"?v="year":A.unit==="day"?v="month":A.unit==="hour"?v="day":A.unit==="minute"&&(v="hour")}),v===f};t.length>0?(y=k(t[a].unit),i=t[a].position,p=t[a].value):c.config.xaxis.type==="datetime"&&b===void 0&&(p=""),p===void 0&&(p=""),p=Array.isArray(p)?p:p.toString();var M=new H(this.ctx),I={};I=c.globals.rotateXLabels&&o?M.getTextRects(p,parseInt(l,10),null,"rotate(".concat(c.config.xaxis.labels.rotate," 0 0)"),!1):M.getTextRects(p,parseInt(l,10));var R=!c.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(p)&&(p.indexOf("NaN")===0||p.toLowerCase().indexOf("invalid")===0||p.toLowerCase().indexOf("infinity")>=0||n.indexOf(p)>=0&&R)&&(p=""),{x:i,text:p,textRect:I,isBold:y}}},{key:"checkLabelBasedOnTickamount",value:function(e,t,i){var a=this.w,n=a.config.xaxis.tickAmount;return n==="dataPoints"&&(n=Math.round(a.globals.gridWidth/120)),n>i||e%Math.round(i/(n+1))==0||(t.text=""),t}},{key:"checkForOverflowingLabels",value:function(e,t,i,a,n){var l=this.w;if(e===0&&l.globals.skipFirstTimelinelabel&&(t.text=""),e===i-1&&l.globals.skipLastTimelinelabel&&(t.text=""),l.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=n[n.length-1];t.x<o.textRect.width/(l.globals.rotateXLabels?Math.abs(l.config.xaxis.labels.rotate)/12:1.01)+o.x&&(t.text="")}return t}},{key:"checkForReversedLabels",value:function(e,t){var i=this.w;return i.config.yaxis[e]&&i.config.yaxis[e].reversed&&t.reverse(),t}},{key:"isYAxisHidden",value:function(e){var t=this.w,i=new ue(this.ctx);return!t.config.yaxis[e].show||!t.config.yaxis[e].showForNullSeries&&i.isSeriesNull(e)&&t.globals.collapsedSeriesIndices.indexOf(e)===-1}},{key:"getYAxisForeColor",value:function(e,t){var i=this.w;return Array.isArray(e)&&i.globals.yAxisScale[t]&&this.ctx.theme.pushExtraColors(e,i.globals.yAxisScale[t].result.length,!1),e}},{key:"drawYAxisTicks",value:function(e,t,i,a,n,l,o){var c=this.w,d=new H(this.ctx),p=c.globals.translateY;if(a.show&&t>0){c.config.yaxis[n].opposite===!0&&(e+=a.width);for(var x=t;x>=0;x--){var b=p+t/10+c.config.yaxis[n].labels.offsetY-1;c.globals.isBarHorizontal&&(b=l*x),c.config.chart.type==="heatmap"&&(b+=l/2);var y=d.drawLine(e+i.offsetX-a.width+a.offsetX,b+a.offsetY,e+i.offsetX+a.offsetX,b+a.offsetY,a.color);o.add(y),p+=l}}}}]),T}(),Se=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"scaleSvgNode",value:function(e,t){var i=parseFloat(e.getAttributeNS(null,"width")),a=parseFloat(e.getAttributeNS(null,"height"));e.setAttributeNS(null,"width",i*t),e.setAttributeNS(null,"height",a*t),e.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"fixSvgStringForIe11",value:function(e){if(!P.isIE11())return e.replace(/&nbsp;/g,"&#160;");var t=0,i=e.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,function(a){return++t===2?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':a});return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(e){e==null&&(e=1);var t=this.w.globals.dom.Paper.svg();if(e!==1){var i=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(i,e),t=new XMLSerializer().serializeToString(i)}return this.fixSvgStringForIe11(t)}},{key:"cleanup",value:function(){var e=this.w,t=e.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=e.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,function(n){n.setAttribute("width",0)}),t&&t[0]&&(t[0].setAttribute("x",-500),t[0].setAttribute("x1",-500),t[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var e=this.getSvgString(),t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(t)}},{key:"dataURI",value:function(e){var t=this;return new Promise(function(i){var a=t.w,n=e?e.scale||e.width/a.globals.svgWidth:1;t.cleanup();var l=document.createElement("canvas");l.width=a.globals.svgWidth*n,l.height=parseInt(a.globals.dom.elWrap.style.height,10)*n;var o=a.config.chart.background==="transparent"?"#fff":a.config.chart.background,c=l.getContext("2d");c.fillStyle=o,c.fillRect(0,0,l.width*n,l.height*n);var d=t.getSvgString(n);if(window.canvg&&P.isIE11()){var p=window.canvg.Canvg.fromString(c,d,{ignoreClear:!0,ignoreDimensions:!0});p.start();var x=l.msToBlob();p.stop(),i({blob:x})}else{var b="data:image/svg+xml,"+encodeURIComponent(d),y=new Image;y.crossOrigin="anonymous",y.onload=function(){if(c.drawImage(y,0,0),l.msToBlob){var C=l.msToBlob();i({blob:C})}else{var E=l.toDataURL("image/png");i({imgURI:E})}},y.src=b}})}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var e=this;this.dataURI().then(function(t){var i=t.imgURI,a=t.blob;a?navigator.msSaveOrOpenBlob(a,e.w.globals.chartID+".png"):e.triggerDownload(i,e.w.config.chart.toolbar.export.png.filename,".png")})}},{key:"exportToCSV",value:function(e){var t=this,i=e.series,a=e.columnDelimiter,n=a===void 0?",":a,l=e.lineDelimiter,o=l===void 0?`
`:l,c=this.w;i||(i=c.config.series);var d=[],p=[],x="",b=new be(this.ctx),y=new Ie(this.ctx),C=function(E){var k="";if(c.globals.axisCharts){if(c.config.xaxis.type==="category"||c.config.xaxis.convertedCatToNumeric)if(c.globals.isBarHorizontal){var M=c.globals.yLabelFormatters[0],I=new $e(t.ctx).getActiveConfigSeriesIndex();k=M(c.globals.labels[E],{seriesIndex:I,dataPointIndex:E,w:c})}else k=y.getLabel(c.globals.labels,c.globals.timescaleLabels,0,E).text;c.config.xaxis.type==="datetime"&&(c.config.xaxis.categories.length?k=c.config.xaxis.categories[E]:c.config.labels.length&&(k=c.config.labels[E]))}else k=c.config.labels[E];return Array.isArray(k)&&(k=k.join(" ")),P.isNumber(k)?k:k.split(n).join("")};d.push(c.config.chart.toolbar.export.csv.headerCategory),i.map(function(E,k){var M=E.name?E.name:"series-".concat(k);c.globals.axisCharts&&d.push(M.split(n).join("")?M.split(n).join(""):"series-".concat(k))}),c.globals.axisCharts||(d.push(c.config.chart.toolbar.export.csv.headerValue),p.push(d.join(n))),i.map(function(E,k){c.globals.axisCharts?function(M,I){if(d.length&&I===0&&p.push(d.join(n)),M.data&&M.data.length)for(var R=0;R<M.data.length;R++){d=[];var f=C(R);if(f||(b.isFormatXY()?f=i[I].data[R].x:b.isFormat2DArray()&&(f=i[I].data[R]?i[I].data[R][0]:"")),I===0){d.push((A=f,c.config.xaxis.type==="datetime"&&String(A).length>=10?c.config.chart.toolbar.export.csv.dateFormatter(f):P.isNumber(f)?f:f.split(n).join("")));for(var v=0;v<c.globals.series.length;v++)b.isFormatXY()?d.push(i[v].data[R].y):d.push(c.globals.series[v][R])}(c.config.chart.type==="candlestick"||M.type&&M.type==="candlestick")&&(d.pop(),d.push(c.globals.seriesCandleO[I][R]),d.push(c.globals.seriesCandleH[I][R]),d.push(c.globals.seriesCandleL[I][R]),d.push(c.globals.seriesCandleC[I][R])),(c.config.chart.type==="boxPlot"||M.type&&M.type==="boxPlot")&&(d.pop(),d.push(c.globals.seriesCandleO[I][R]),d.push(c.globals.seriesCandleH[I][R]),d.push(c.globals.seriesCandleM[I][R]),d.push(c.globals.seriesCandleL[I][R]),d.push(c.globals.seriesCandleC[I][R])),c.config.chart.type==="rangeBar"&&(d.pop(),d.push(c.globals.seriesRangeStart[I][R]),d.push(c.globals.seriesRangeEnd[I][R])),d.length&&p.push(d.join(n))}var A}(E,k):((d=[]).push(c.globals.labels[k].split(n).join("")),d.push(c.globals.series[k]),p.push(d.join(n)))}),x+=p.join(o),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\uFEFF"+x),c.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(e,t,i){var a=document.createElement("a");a.href=e,a.download=(t||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),T}(),ke=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.axesUtils=new Ie(e),this.xaxisLabels=t.globals.labels.slice(),t.globals.timescaleLabels.length>0&&!t.globals.isBarHorizontal&&(this.xaxisLabels=t.globals.timescaleLabels.slice()),t.config.xaxis.overwriteCategories&&(this.xaxisLabels=t.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],t.config.xaxis.position==="top"?this.offY=0:this.offY=t.globals.gridHeight+1,this.offY=this.offY+t.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal=t.config.chart.type==="bar"&&t.config.plotOptions.bar.horizontal,this.xaxisFontSize=t.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=t.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=t.config.xaxis.labels.style.colors,this.xaxisBorderWidth=t.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=t.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=t.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=t.config.xaxis.axisBorder.height,this.yaxis=t.config.yaxis[0]}return D(T,[{key:"drawXaxis",value:function(){var e=this.w,t=new H(this.ctx),i=t.group({class:"apexcharts-xaxis",transform:"translate(".concat(e.config.xaxis.offsetX,", ").concat(e.config.xaxis.offsetY,")")}),a=t.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});i.add(a);for(var n=[],l=0;l<this.xaxisLabels.length;l++)n.push(this.xaxisLabels[l]);if(this.drawXAxisLabelAndGroup(!0,t,a,n,e.globals.isXNumeric,function(C,E){return E}),e.globals.hasGroups){var o=e.globals.groups;n=[];for(var c=0;c<o.length;c++)n.push(o[c].title);var d={};e.config.xaxis.group.style&&(d.xaxisFontSize=e.config.xaxis.group.style.fontSize,d.xaxisFontFamily=e.config.xaxis.group.style.fontFamily,d.xaxisForeColors=e.config.xaxis.group.style.colors,d.fontWeight=e.config.xaxis.group.style.fontWeight,d.cssClass=e.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,t,a,n,!1,function(C,E){return o[C].cols*E},d)}if(e.config.xaxis.title.text!==void 0){var p=t.group({class:"apexcharts-xaxis-title"}),x=t.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+e.globals.xAxisLabelsHeight+e.config.xaxis.title.offsetY,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});p.add(x),i.add(p)}if(e.config.xaxis.axisBorder.show){var b=e.globals.barPadForNumericAxis,y=t.drawLine(e.globals.padHorizontal+e.config.xaxis.axisBorder.offsetX-b,this.offY,this.xaxisBorderWidth+b,this.offY,e.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);i.add(y)}return i}},{key:"drawXAxisLabelAndGroup",value:function(e,t,i,a,n,l){var o,c=this,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:{},p=[],x=[],b=this.w,y=d.xaxisFontSize||this.xaxisFontSize,C=d.xaxisFontFamily||this.xaxisFontFamily,E=d.xaxisForeColors||this.xaxisForeColors,k=d.fontWeight||b.config.xaxis.labels.style.fontWeight,M=d.cssClass||b.config.xaxis.labels.style.cssClass,I=b.globals.padHorizontal,R=a.length,f=b.config.xaxis.type==="category"?b.globals.dataPoints:R;if(n){var v=f>1?f-1:f;o=b.globals.gridWidth/v,I=I+l(0,o)/2+b.config.xaxis.labels.offsetX}else o=b.globals.gridWidth/f,I=I+l(0,o)+b.config.xaxis.labels.offsetX;for(var A=function(N){var G=I-l(N,o)/2+b.config.xaxis.labels.offsetX;N===0&&R===1&&o/2===I&&f===1&&(G=b.globals.gridWidth/2);var X=c.axesUtils.getLabel(a,b.globals.timescaleLabels,G,N,p,y,e),ne=28;if(b.globals.rotateXLabels&&e&&(ne=22),e||(ne=ne+parseFloat(y)+(b.globals.xAxisLabelsHeight-b.globals.xAxisGroupLabelsHeight)+(b.globals.rotateXLabels?10:0)),X=b.config.xaxis.tickAmount!==void 0&&b.config.xaxis.tickAmount!=="dataPoints"&&b.config.xaxis.type!=="datetime"?c.axesUtils.checkLabelBasedOnTickamount(N,X,R):c.axesUtils.checkForOverflowingLabels(N,X,R,p,x),e&&X.text&&b.globals.xaxisLabelsCount++,b.config.xaxis.labels.show){var ee=t.drawText({x:X.x,y:c.offY+b.config.xaxis.labels.offsetY+ne-(b.config.xaxis.position==="top"?b.globals.xAxisHeight+b.config.xaxis.axisTicks.height-2:0),text:X.text,textAnchor:"middle",fontWeight:X.isBold?600:k,fontSize:y,fontFamily:C,foreColor:Array.isArray(E)?e&&b.config.xaxis.convertedCatToNumeric?E[b.globals.minX+N-1]:E[N]:E,isPlainText:!1,cssClass:(e?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+M});if(i.add(ee),e){var pe=document.createElementNS(b.globals.SVGNS,"title");pe.textContent=Array.isArray(X.text)?X.text.join(" "):X.text,ee.node.appendChild(pe),X.text!==""&&(p.push(X.text),x.push(X))}}N<R-1&&(I+=l(N+1,o))},L=0;L<=R-1;L++)A(L)}},{key:"drawXaxisInversed",value:function(e){var t,i,a=this,n=this.w,l=new H(this.ctx),o=n.config.yaxis[0].opposite?n.globals.translateYAxisX[e]:0,c=l.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:e}),d=l.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});c.add(d);var p=[];if(n.config.yaxis[e].show)for(var x=0;x<this.xaxisLabels.length;x++)p.push(this.xaxisLabels[x]);t=n.globals.gridHeight/p.length,i=-t/2.2;var b=n.globals.yLabelFormatters[0],y=n.config.yaxis[0].labels;if(y.show)for(var C=function(v){var A=p[v]===void 0?"":p[v];A=b(A,{seriesIndex:e,dataPointIndex:v,w:n});var L=a.axesUtils.getYAxisForeColor(y.style.colors,e),N=0;Array.isArray(A)&&(N=A.length/2*parseInt(y.style.fontSize,10));var G=l.drawText({x:y.offsetX-15,y:i+t+y.offsetY-N,text:A,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(L)?L[v]:L,fontSize:y.style.fontSize,fontFamily:y.style.fontFamily,fontWeight:y.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+y.style.cssClass,maxWidth:y.maxWidth});d.add(G);var X=document.createElementNS(n.globals.SVGNS,"title");if(X.textContent=Array.isArray(A)?A.join(" "):A,G.node.appendChild(X),n.config.yaxis[e].labels.rotate!==0){var ne=l.rotateAroundCenter(G.node);G.node.setAttribute("transform","rotate(".concat(n.config.yaxis[e].labels.rotate," 0 ").concat(ne.y,")"))}i+=t},E=0;E<=p.length-1;E++)C(E);if(n.config.yaxis[0].title.text!==void 0){var k=l.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),M=l.drawText({x:0,y:n.globals.gridHeight/2,text:n.config.yaxis[0].title.text,textAnchor:"middle",foreColor:n.config.yaxis[0].title.style.color,fontSize:n.config.yaxis[0].title.style.fontSize,fontWeight:n.config.yaxis[0].title.style.fontWeight,fontFamily:n.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+n.config.yaxis[0].title.style.cssClass});k.add(M),c.add(k)}var I=0;this.isCategoryBarHorizontal&&n.config.yaxis[0].opposite&&(I=n.globals.gridWidth);var R=n.config.xaxis.axisBorder;if(R.show){var f=l.drawLine(n.globals.padHorizontal+R.offsetX+I,1+R.offsetY,n.globals.padHorizontal+R.offsetX+I,n.globals.gridHeight+R.offsetY,R.color,0);c.add(f)}return n.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(I,p.length,n.config.yaxis[0].axisBorder,n.config.yaxis[0].axisTicks,0,t,c),c}},{key:"drawXaxisTicks",value:function(e,t,i){var a=this.w,n=e;if(!(e<0||e-2>a.globals.gridWidth)){var l=this.offY+a.config.xaxis.axisTicks.offsetY;if(t=t+l+a.config.xaxis.axisTicks.height,a.config.xaxis.position==="top"&&(t=l-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new H(this.ctx).drawLine(e+a.config.xaxis.axisTicks.offsetX,l+a.config.xaxis.offsetY,n+a.config.xaxis.axisTicks.offsetX,t+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var e=this.w,t=[],i=this.xaxisLabels.length,a=e.globals.padHorizontal;if(e.globals.timescaleLabels.length>0)for(var n=0;n<i;n++)a=this.xaxisLabels[n].position,t.push(a);else for(var l=i,o=0;o<l;o++){var c=l;e.globals.isXNumeric&&e.config.chart.type!=="bar"&&(c-=1),a+=e.globals.gridWidth/c,t.push(a)}return t}},{key:"xAxisLabelCorrections",value:function(){var e=this.w,t=new H(this.ctx),i=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),n=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),l=e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(e.globals.rotateXLabels||e.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var c=t.rotateAroundCenter(a[o]);c.y=c.y-1,c.x=c.x+1,a[o].setAttribute("transform","rotate(".concat(e.config.xaxis.labels.rotate," ").concat(c.x," ").concat(c.y,")")),a[o].setAttribute("text-anchor","end"),i.setAttribute("transform","translate(0, ".concat(-10,")"));var d=a[o].childNodes;e.config.xaxis.labels.trim&&Array.prototype.forEach.call(d,function(y){t.placeTextWithEllipsis(y,y.textContent,e.globals.xAxisLabelsHeight-(e.config.legend.position==="bottom"?20:10))})}else(function(){for(var y=e.globals.gridWidth/(e.globals.labels.length+1),C=0;C<a.length;C++){var E=a[C].childNodes;e.config.xaxis.labels.trim&&e.config.xaxis.type!=="datetime"&&Array.prototype.forEach.call(E,function(k){t.placeTextWithEllipsis(k,k.textContent,y)})}})();if(n.length>0){var p=n[n.length-1].getBBox(),x=n[0].getBBox();p.x<-20&&n[n.length-1].parentNode.removeChild(n[n.length-1]),x.x+x.width>e.globals.gridWidth&&!e.globals.isBarHorizontal&&n[0].parentNode.removeChild(n[0]);for(var b=0;b<l.length;b++)t.placeTextWithEllipsis(l[b],l[b].textContent,e.config.yaxis[0].labels.maxWidth-(e.config.yaxis[0].title.text?2*parseFloat(e.config.yaxis[0].title.style.fontSize):0)-15)}}}]),T}(),B=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.xaxisLabels=t.globals.labels.slice(),this.axesUtils=new Ie(e),this.isRangeBar=t.globals.seriesRangeBar.length,t.globals.timescaleLabels.length>0&&(this.xaxisLabels=t.globals.timescaleLabels.slice())}return D(T,[{key:"drawGridArea",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=this.w,i=new H(this.ctx);e===null&&(e=i.group({class:"apexcharts-grid"}));var a=i.drawLine(t.globals.padHorizontal,1,t.globals.padHorizontal,t.globals.gridHeight,"transparent"),n=i.drawLine(t.globals.padHorizontal,t.globals.gridHeight,t.globals.gridWidth,t.globals.gridHeight,"transparent");return e.add(n),e.add(a),e}},{key:"drawGrid",value:function(){var e=null;return this.w.globals.axisCharts&&(e=this.renderGrid(),this.drawGridArea(e.el)),e}},{key:"createGridMask",value:function(){var e=this.w,t=e.globals,i=new H(this.ctx),a=Array.isArray(e.config.stroke.width)?0:e.config.stroke.width;if(Array.isArray(e.config.stroke.width)){var n=0;e.config.stroke.width.forEach(function(x){n=Math.max(n,x)}),a=n}t.dom.elGridRectMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(t.cuid)),t.dom.elGridRectMarkerMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(t.cuid)),t.dom.elForecastMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elForecastMask.setAttribute("id","forecastMask".concat(t.cuid)),t.dom.elNonForecastMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(t.cuid));var l=e.config.chart.type,o=0,c=0;(l==="bar"||l==="rangeBar"||l==="candlestick"||l==="boxPlot"||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&(o=e.config.grid.padding.left,c=e.config.grid.padding.right,t.barPadForNumericAxis>o&&(o=t.barPadForNumericAxis,c=t.barPadForNumericAxis)),t.dom.elGridRect=i.drawRect(-a/2-o-2,-a/2,t.gridWidth+a+c+o+4,t.gridHeight+a,0,"#fff");var d=e.globals.markers.largestSize+1;t.dom.elGridRectMarker=i.drawRect(2*-d,2*-d,t.gridWidth+4*d,t.gridHeight+4*d,0,"#fff"),t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node),t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);var p=t.dom.baseEl.querySelector("defs");p.appendChild(t.dom.elGridRectMask),p.appendChild(t.dom.elForecastMask),p.appendChild(t.dom.elNonForecastMask),p.appendChild(t.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(e){var t=e.i,i=e.x1,a=e.y1,n=e.x2,l=e.y2,o=e.xCount,c=e.parent,d=this.w;if(!(t===0&&d.globals.skipFirstTimelinelabel||t===o-1&&d.globals.skipLastTimelinelabel&&!d.config.xaxis.labels.formatter||d.config.chart.type==="radar")){d.config.grid.xaxis.lines.show&&this._drawGridLine({x1:i,y1:a,x2:n,y2:l,parent:c});var p=0;if(d.globals.hasGroups&&d.config.xaxis.tickPlacement==="between"){var x=d.globals.groups;if(x){for(var b=0,y=0;b<t&&y<x.length;y++)b+=x[y].cols;b===t&&(p=.6*d.globals.xAxisLabelsHeight)}}new ke(this.ctx).drawXaxisTicks(i,p,this.elg)}}},{key:"_drawGridLine",value:function(e){var t=e.x1,i=e.y1,a=e.x2,n=e.y2,l=e.parent,o=this.w,c=l.node.classList.contains("apexcharts-gridlines-horizontal"),d=o.config.grid.strokeDashArray,p=o.globals.barPadForNumericAxis,x=new H(this).drawLine(t-(c?p:0),i,a+(c?p:0),n,o.config.grid.borderColor,d);x.node.classList.add("apexcharts-gridline"),l.add(x)}},{key:"_drawGridBandRect",value:function(e){var t=e.c,i=e.x1,a=e.y1,n=e.x2,l=e.y2,o=e.type,c=this.w,d=new H(this.ctx),p=c.globals.barPadForNumericAxis;if(o!=="column"||c.config.xaxis.type!=="datetime"){var x=c.config.grid[o].colors[t],b=d.drawRect(i-(o==="row"?p:0),a,n+(o==="row"?2*p:0),l,0,x,c.config.grid[o].opacity);this.elg.add(b),b.attr("clip-path","url(#gridRectMask".concat(c.globals.cuid,")")),b.node.classList.add("apexcharts-grid-".concat(o))}}},{key:"_drawXYLines",value:function(e){var t=this,i=e.xCount,a=e.tickAmount,n=this.w;if(n.config.grid.xaxis.lines.show||n.config.xaxis.axisTicks.show){var l,o=n.globals.padHorizontal,c=n.globals.gridHeight;n.globals.timescaleLabels.length?function(C){for(var E=C.xC,k=C.x1,M=C.y1,I=C.x2,R=C.y2,f=0;f<E;f++)k=t.xaxisLabels[f].position,I=t.xaxisLabels[f].position,t._drawGridLines({i:f,x1:k,y1:M,x2:I,y2:R,xCount:i,parent:t.elgridLinesV})}({xC:i,x1:o,y1:0,x2:l,y2:c}):(n.globals.isXNumeric&&(i=n.globals.xAxisScale.result.length),n.config.xaxis.convertedCatToNumeric&&(i=n.globals.xaxisLabelsCount),function(C){var E=C.xC,k=C.x1,M=C.y1,I=C.x2,R=C.y2;if(n.config.xaxis.tickAmount!==void 0&&n.config.xaxis.tickAmount!=="dataPoints"&&n.config.xaxis.tickPlacement==="on")n.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function(v,A){var L=v.getBBox();t._drawGridLines({i:A,x1:L.x+L.width/2,y1:M,x2:L.x+L.width/2,y2:R,xCount:i,parent:t.elgridLinesV})});else for(var f=0;f<E+(n.globals.isXNumeric?0:1);f++)f===0&&E===1&&n.globals.dataPoints===1&&(I=k=n.globals.gridWidth/2),t._drawGridLines({i:f,x1:k,y1:M,x2:I,y2:R,xCount:i,parent:t.elgridLinesV}),I=k+=n.globals.gridWidth/(n.globals.isXNumeric?E-1:E)}({xC:i,x1:o,y1:0,x2:l,y2:c}))}if(n.config.grid.yaxis.lines.show){var d=0,p=0,x=n.globals.gridWidth,b=a+1;this.isRangeBar&&(b=n.globals.labels.length);for(var y=0;y<b+(this.isRangeBar?1:0);y++)this._drawGridLine({x1:0,y1:d,x2:x,y2:p,parent:this.elgridLinesH}),p=d+=n.globals.gridHeight/(this.isRangeBar?b:a)}}},{key:"_drawInvertedXYLines",value:function(e){var t=e.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,n=i.globals.padHorizontal,l=i.globals.gridHeight,o=0;o<t+1;o++)i.config.grid.xaxis.lines.show&&this._drawGridLine({x1:n,y1:0,x2:a,y2:l,parent:this.elgridLinesV}),new ke(this.ctx).drawXaxisTicks(n,0,this.elg),a=n=n+i.globals.gridWidth/t+.3;if(i.config.grid.yaxis.lines.show)for(var c=0,d=0,p=i.globals.gridWidth,x=0;x<i.globals.dataPoints+1;x++)this._drawGridLine({x1:0,y1:c,x2:p,y2:d,parent:this.elgridLinesH}),d=c+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var e=this.w,t=new H(this.ctx);this.elg=t.group({class:"apexcharts-grid"}),this.elgridLinesH=t.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=t.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),e.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var i,a=e.globals.yAxisScale.length?e.globals.yAxisScale[0].result.length-1:5,n=0;n<e.globals.series.length&&(e.globals.yAxisScale[n]!==void 0&&(a=e.globals.yAxisScale[n].result.length-1),!(a>2));n++);return!e.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length,this.isRangeBar&&(a=e.globals.labels.length,e.config.xaxis.tickAmount&&e.config.xaxis.labels.formatter&&(i=e.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=e.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,xAxisTickWidth:e.globals.gridWidth/i}}},{key:"drawGridBands",value:function(e,t){var i=this.w;if(i.config.grid.row.colors!==void 0&&i.config.grid.row.colors.length>0)for(var a=0,n=i.globals.gridHeight/t,l=i.globals.gridWidth,o=0,c=0;o<t;o++,c++)c>=i.config.grid.row.colors.length&&(c=0),this._drawGridBandRect({c,x1:0,y1:a,x2:l,y2:n,type:"row"}),a+=i.globals.gridHeight/t;if(i.config.grid.column.colors!==void 0&&i.config.grid.column.colors.length>0)for(var d=i.globals.isBarHorizontal||i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric?e:e-1,p=i.globals.padHorizontal,x=i.globals.padHorizontal+i.globals.gridWidth/d,b=i.globals.gridHeight,y=0,C=0;y<e;y++,C++)C>=i.config.grid.column.colors.length&&(C=0),this._drawGridBandRect({c:C,x1:p,y1:0,x2:x,y2:b,type:"column"}),p+=i.globals.gridWidth/d}}]),T}(),Y=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"niceScale",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,n=arguments.length>4?arguments[4]:void 0,l=this.w,o=Math.abs(t-e);if((i=this._adjustTicksForSmallRange(i,a,o))==="dataPoints"&&(i=l.globals.dataPoints-1),e===Number.MIN_VALUE&&t===0||!P.isNumber(e)&&!P.isNumber(t)||e===Number.MIN_VALUE&&t===-Number.MAX_VALUE){e=0,t=i;var c=this.linearScale(e,t,i);return c}e>t?(console.warn("axis.min cannot be greater than axis.max"),t=e+.1):e===t&&(e=e===0?0:e-.5,t=t===0?2:t+.5);var d=[];o<1&&n&&(l.config.chart.type==="candlestick"||l.config.series[a].type==="candlestick"||l.config.chart.type==="boxPlot"||l.config.series[a].type==="boxPlot"||l.globals.isRangeData)&&(t*=1.01);var p=i+1;p<2?p=2:p>2&&(p-=2);var x=o/p,b=Math.floor(P.log10(x)),y=Math.pow(10,b),C=Math.round(x/y);C<1&&(C=1);var E=C*y,k=E*Math.floor(e/E),M=E*Math.ceil(t/E),I=k;if(n&&o>2){for(;d.push(I),!((I+=E)>M););return{result:d,niceMin:d[0],niceMax:d[d.length-1]}}var R=e;(d=[]).push(R);for(var f=Math.abs(t-e)/i,v=0;v<=i;v++)R+=f,d.push(R);return d[d.length-2]>=t&&d.pop(),{result:d,niceMin:d[0],niceMax:d[d.length-1]}}},{key:"linearScale",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,n=Math.abs(t-e);(i=this._adjustTicksForSmallRange(i,a,n))==="dataPoints"&&(i=this.w.globals.dataPoints-1);var l=n/i;i===Number.MAX_VALUE&&(i=10,l=1);for(var o=[],c=e;i>=0;)o.push(c),c+=l,i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(e,t,i){t<=0&&(t=Math.max(e,i)),e<=0&&(e=Math.min(t,i));for(var a=[],n=Math.ceil(Math.log(t)/Math.log(i)+1),l=Math.floor(Math.log(e)/Math.log(i));l<n;l++)a.push(Math.pow(i,l));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(e,t,i){t<=0&&(t=Math.max(e,i)),e<=0&&(e=Math.min(t,i));for(var a=[],n=Math.log(t)/Math.log(i),l=Math.log(e)/Math.log(i),o=n-l,c=Math.round(o),d=o/c,p=0,x=l;p<c;p++,x+=d)a.push(Math.pow(i,x));return a.push(Math.pow(i,n)),{result:a,niceMin:e,niceMax:t}}},{key:"_adjustTicksForSmallRange",value:function(e,t,i){var a=e;if(t!==void 0&&this.w.config.yaxis[t].labels.formatter&&this.w.config.yaxis[t].tickAmount===void 0){var n=this.w.config.yaxis[t].labels.formatter(1);P.isNumber(Number(n))&&!P.isFloat(n)&&(a=Math.ceil(i))}return a<e?a:e}},{key:"setYScaleForIndex",value:function(e,t,i){var a=this.w.globals,n=this.w.config,l=a.isBarHorizontal?n.xaxis:n.yaxis[e];a.yAxisScale[e]===void 0&&(a.yAxisScale[e]=[]);var o=Math.abs(i-t);if(l.logarithmic&&o<=5&&(a.invalidLogScale=!0),l.logarithmic&&o>5)a.allSeriesCollapsed=!1,a.yAxisScale[e]=this.logarithmicScale(t,i,l.logBase),a.yAxisScale[e]=l.forceNiceScale?this.logarithmicScaleNice(t,i,l.logBase):this.logarithmicScale(t,i,l.logBase);else if(i!==-Number.MAX_VALUE&&P.isNumber(i))if(a.allSeriesCollapsed=!1,l.min===void 0&&l.max===void 0||l.forceNiceScale){var c=n.yaxis[e].max===void 0&&n.yaxis[e].min===void 0||n.yaxis[e].forceNiceScale;a.yAxisScale[e]=this.niceScale(t,i,l.tickAmount?l.tickAmount:o<5&&o>1?o+1:5,e,c)}else a.yAxisScale[e]=this.linearScale(t,i,l.tickAmount,e);else a.yAxisScale[e]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(e,t){var i=this.w,a=i.globals,n=i.config.xaxis,l=Math.abs(t-e);return t!==-Number.MAX_VALUE&&P.isNumber(t)?a.xAxisScale=this.linearScale(e,t,n.tickAmount?n.tickAmount:l<5&&l>1?l+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var e=this,t=this.w.globals,i=this.w.config,a=t.minYArr.concat([]),n=t.maxYArr.concat([]),l=[];i.yaxis.forEach(function(o,c){var d=c;i.series.forEach(function(b,y){b.name===o.seriesName&&(d=y,c!==y?l.push({index:y,similarIndex:c,alreadyExists:!0}):l.push({index:y}))});var p=a[d],x=n[d];e.setYScaleForIndex(c,p,x)}),this.sameScaleInMultipleAxes(a,n,l)}},{key:"sameScaleInMultipleAxes",value:function(e,t,i){var a=this,n=this.w.config,l=this.w.globals,o=[];i.forEach(function(E){E.alreadyExists&&(o[E.index]===void 0&&(o[E.index]=[]),o[E.index].push(E.index),o[E.index].push(E.similarIndex))}),l.yAxisSameScaleIndices=o,o.forEach(function(E,k){o.forEach(function(M,I){var R,f;k!==I&&(R=E,f=M,R.filter(function(v){return f.indexOf(v)!==-1})).length>0&&(o[k]=o[k].concat(o[I]))})});var c=o.map(function(E){return E.filter(function(k,M){return E.indexOf(k)===M})}).map(function(E){return E.sort()});o=o.filter(function(E){return!!E});var d=c.slice(),p=d.map(function(E){return JSON.stringify(E)});d=d.filter(function(E,k){return p.indexOf(JSON.stringify(E))===k});var x=[],b=[];e.forEach(function(E,k){d.forEach(function(M,I){M.indexOf(k)>-1&&(x[I]===void 0&&(x[I]=[],b[I]=[]),x[I].push({key:k,value:E}),b[I].push({key:k,value:t[k]}))})});var y=Array.apply(null,Array(d.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),C=Array.apply(null,Array(d.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);x.forEach(function(E,k){E.forEach(function(M,I){y[k]=Math.min(M.value,y[k])})}),b.forEach(function(E,k){E.forEach(function(M,I){C[k]=Math.max(M.value,C[k])})}),e.forEach(function(E,k){b.forEach(function(M,I){var R=y[I],f=C[I];n.chart.stacked&&(f=0,M.forEach(function(v,A){v.value!==-Number.MAX_VALUE&&(f+=v.value),R!==Number.MIN_VALUE&&(R+=x[I][A].value)})),M.forEach(function(v,A){M[A].key===k&&(n.yaxis[k].min!==void 0&&(R=typeof n.yaxis[k].min=="function"?n.yaxis[k].min(l.minY):n.yaxis[k].min),n.yaxis[k].max!==void 0&&(f=typeof n.yaxis[k].max=="function"?n.yaxis[k].max(l.maxY):n.yaxis[k].max),a.setYScaleForIndex(k,R,f))})})})}},{key:"autoScaleY",value:function(e,t,i){e||(e=this);var a=e.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),t;var n=a.globals.seriesX[0],l=a.config.chart.stacked;return t.forEach(function(o,c){for(var d=0,p=0;p<n.length;p++)if(n[p]>=i.xaxis.min){d=p;break}var x,b,y=a.globals.minYArr[c],C=a.globals.maxYArr[c],E=a.globals.stackedSeriesTotals;a.globals.series.forEach(function(k,M){var I=k[d];l?(I=E[d],x=b=I,E.forEach(function(R,f){n[f]<=i.xaxis.max&&n[f]>=i.xaxis.min&&(R>b&&R!==null&&(b=R),k[f]<x&&k[f]!==null&&(x=k[f]))})):(x=b=I,k.forEach(function(R,f){if(n[f]<=i.xaxis.max&&n[f]>=i.xaxis.min){var v=R,A=R;a.globals.series.forEach(function(L,N){R!==null&&(v=Math.min(L[f],v),A=Math.max(L[f],A))}),A>b&&A!==null&&(b=A),v<x&&v!==null&&(x=v)}})),x===void 0&&b===void 0&&(x=y,b=C),b*=b<0?.9:1.1,(x*=x<0?1.1:.9)===0&&b===0&&(x=-1,b=1),b<0&&b<C&&(b=C),x<0&&x>y&&(x=y),t.length>1?(t[M].min=o.min===void 0?x:o.min,t[M].max=o.max===void 0?b:o.max):(t[0].min=o.min===void 0?x:o.min,t[0].max=o.max===void 0?b:o.max)})}),t}}]),T}(),q=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.scales=new Y(e)}return D(T,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=this.w.config,l=this.w.globals,o=-Number.MAX_VALUE,c=Number.MIN_VALUE;a===null&&(a=e+1);var d=l.series,p=d,x=d;n.chart.type==="candlestick"?(p=l.seriesCandleL,x=l.seriesCandleH):n.chart.type==="boxPlot"?(p=l.seriesCandleO,x=l.seriesCandleC):l.isRangeData&&(p=l.seriesRangeStart,x=l.seriesRangeEnd);for(var b=e;b<a;b++){l.dataPoints=Math.max(l.dataPoints,d[b].length),l.categoryLabels.length&&(l.dataPoints=l.categoryLabels.filter(function(E){return E!==void 0}).length);for(var y=0;y<l.series[b].length;y++){var C=d[b][y];C!==null&&P.isNumber(C)?(x[b][y]!==void 0&&(o=Math.max(o,x[b][y]),t=Math.min(t,x[b][y])),p[b][y]!==void 0&&(t=Math.min(t,p[b][y]),i=Math.max(i,p[b][y])),this.w.config.chart.type!=="candlestick"&&this.w.config.chart.type!=="boxPlot"||(l.seriesCandleC[b][y]!==void 0&&(o=Math.max(o,l.seriesCandleO[b][y]),o=Math.max(o,l.seriesCandleH[b][y]),o=Math.max(o,l.seriesCandleL[b][y]),o=Math.max(o,l.seriesCandleC[b][y]),this.w.config.chart.type==="boxPlot"&&(o=Math.max(o,l.seriesCandleM[b][y]))),!n.series[b].type||n.series[b].type==="candlestick"&&n.series[b].type==="boxPlot"||(o=Math.max(o,l.series[b][y]),t=Math.min(t,l.series[b][y])),i=o),l.seriesGoals[b]&&l.seriesGoals[b][y]&&Array.isArray(l.seriesGoals[b][y])&&l.seriesGoals[b][y].forEach(function(E){c!==Number.MIN_VALUE&&(c=Math.min(c,E.value),t=c),o=Math.max(o,E.value),i=o}),P.isFloat(C)&&(C=P.noExponents(C),l.yValueDecimal=Math.max(l.yValueDecimal,C.toString().split(".")[1].length)),c>p[b][y]&&p[b][y]<0&&(c=p[b][y])):l.hasNullValues=!0}}return n.chart.type==="rangeBar"&&l.seriesRangeStart.length&&l.isBarHorizontal&&(c=t),n.chart.type==="bar"&&(c<0&&o<0&&(o=0),c===Number.MIN_VALUE&&(c=0)),{minY:c,maxY:o,lowestY:t,highestY:i}}},{key:"setYRange",value:function(){var e=this.w.globals,t=this.w.config;e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(e.isMultipleYAxis)for(var a=0;a<e.series.length;a++){var n=this.getMinYMaxY(a,i,null,a+1);e.minYArr.push(n.minY),e.maxYArr.push(n.maxY),i=n.lowestY}var l=this.getMinYMaxY(0,i,null,e.series.length);if(e.minY=l.minY,e.maxY=l.maxY,i=l.lowestY,t.chart.stacked&&this._setStackedMinMax(),(t.chart.type==="line"||t.chart.type==="area"||t.chart.type==="candlestick"||t.chart.type==="boxPlot"||t.chart.type==="rangeBar"&&!e.isBarHorizontal)&&e.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==e.maxY){var o=e.maxY-i;(i>=0&&i<=10||t.yaxis[0].min!==void 0||t.yaxis[0].max!==void 0)&&(o=0),e.minY=i-5*o/100,i>0&&e.minY<0&&(e.minY=0),e.maxY=e.maxY+5*o/100}return t.yaxis.forEach(function(c,d){c.max!==void 0&&(typeof c.max=="number"?e.maxYArr[d]=c.max:typeof c.max=="function"&&(e.maxYArr[d]=c.max(e.isMultipleYAxis?e.maxYArr[d]:e.maxY)),e.maxY=e.maxYArr[d]),c.min!==void 0&&(typeof c.min=="number"?e.minYArr[d]=c.min:typeof c.min=="function"&&(e.minYArr[d]=c.min(e.isMultipleYAxis?e.minYArr[d]===Number.MIN_VALUE?0:e.minYArr[d]:e.minY)),e.minY=e.minYArr[d])}),e.isBarHorizontal&&["min","max"].forEach(function(c){t.xaxis[c]!==void 0&&typeof t.xaxis[c]=="number"&&(c==="min"?e.minY=t.xaxis[c]:e.maxY=t.xaxis[c])}),e.isMultipleYAxis?(this.scales.setMultipleYScales(),e.minY=i,e.yAxisScale.forEach(function(c,d){e.minYArr[d]=c.niceMin,e.maxYArr[d]=c.niceMax})):(this.scales.setYScaleForIndex(0,e.minY,e.maxY),e.minY=e.yAxisScale[0].niceMin,e.maxY=e.yAxisScale[0].niceMax,e.minYArr[0]=e.yAxisScale[0].niceMin,e.maxYArr[0]=e.yAxisScale[0].niceMax),{minY:e.minY,maxY:e.maxY,minYArr:e.minYArr,maxYArr:e.maxYArr,yAxisScale:e.yAxisScale}}},{key:"setXRange",value:function(){var e=this.w.globals,t=this.w.config,i=t.xaxis.type==="numeric"||t.xaxis.type==="datetime"||t.xaxis.type==="category"&&!e.noLabelsProvided||e.noLabelsProvided||e.isXNumeric;if(e.isXNumeric&&function(){for(var o=0;o<e.series.length;o++)if(e.labels[o])for(var c=0;c<e.labels[o].length;c++)e.labels[o][c]!==null&&P.isNumber(e.labels[o][c])&&(e.maxX=Math.max(e.maxX,e.labels[o][c]),e.initialMaxX=Math.max(e.maxX,e.labels[o][c]),e.minX=Math.min(e.minX,e.labels[o][c]),e.initialMinX=Math.min(e.minX,e.labels[o][c]))}(),e.noLabelsProvided&&t.xaxis.categories.length===0&&(e.maxX=e.labels[e.labels.length-1],e.initialMaxX=e.labels[e.labels.length-1],e.minX=1,e.initialMinX=1),e.isXNumeric||e.noLabelsProvided||e.dataFormatXNumeric){var a;if(t.xaxis.tickAmount===void 0?(a=Math.round(e.svgWidth/150),t.xaxis.type==="numeric"&&e.dataPoints<30&&(a=e.dataPoints-1),a>e.dataPoints&&e.dataPoints!==0&&(a=e.dataPoints-1)):t.xaxis.tickAmount==="dataPoints"?(e.series.length>1&&(a=e.series[e.maxValsInArrayIndex].length-1),e.isXNumeric&&(a=e.maxX-e.minX-1)):a=t.xaxis.tickAmount,e.xTickAmount=a,t.xaxis.max!==void 0&&typeof t.xaxis.max=="number"&&(e.maxX=t.xaxis.max),t.xaxis.min!==void 0&&typeof t.xaxis.min=="number"&&(e.minX=t.xaxis.min),t.xaxis.range!==void 0&&(e.minX=e.maxX-t.xaxis.range),e.minX!==Number.MAX_VALUE&&e.maxX!==-Number.MAX_VALUE)if(t.xaxis.convertedCatToNumeric&&!e.dataFormatXNumeric){for(var n=[],l=e.minX-1;l<e.maxX;l++)n.push(l+1);e.xAxisScale={result:n,niceMin:n[0],niceMax:n[n.length-1]}}else e.xAxisScale=this.scales.setXScale(e.minX,e.maxX);else e.xAxisScale=this.scales.linearScale(1,a,a),e.noLabelsProvided&&e.labels.length>0&&(e.xAxisScale=this.scales.linearScale(1,e.labels.length,a-1),e.seriesX=e.labels.slice());i&&(e.labels=e.xAxisScale.result.slice())}return e.isBarHorizontal&&e.labels.length&&(e.xTickAmount=e.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:e.minX,maxX:e.maxX}}},{key:"setZRange",value:function(){var e=this.w.globals;if(e.isDataXYZ){for(var t=0;t<e.series.length;t++)if(e.seriesZ[t]!==void 0)for(var i=0;i<e.seriesZ[t].length;i++)e.seriesZ[t][i]!==null&&P.isNumber(e.seriesZ[t][i])&&(e.maxZ=Math.max(e.maxZ,e.seriesZ[t][i]),e.minZ=Math.min(e.minZ,e.seriesZ[t][i]))}}},{key:"_handleSingleDataPoint",value:function(){var e=this.w.globals,t=this.w.config;if(e.minX===e.maxX){var i=new Ge(this.ctx);if(t.xaxis.type==="datetime"){var a=i.getDate(e.minX);t.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),e.minX=new Date(a).getTime();var n=i.getDate(e.maxX);t.xaxis.labels.datetimeUTC?n.setUTCDate(n.getUTCDate()+2):n.setDate(n.getDate()+2),e.maxX=new Date(n).getTime()}else(t.xaxis.type==="numeric"||t.xaxis.type==="category"&&!e.noLabelsProvided)&&(e.minX=e.minX-2,e.initialMinX=e.minX,e.maxX=e.maxX+2,e.initialMaxX=e.maxX)}}},{key:"_getMinXDiff",value:function(){var e=this.w.globals;e.isXNumeric&&e.seriesX.forEach(function(t,i){t.length===1&&t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length-1]);var a=t.slice();a.sort(function(n,l){return n-l}),a.forEach(function(n,l){if(l>0){var o=n-a[l-1];o>0&&(e.minXDiff=Math.min(o,e.minXDiff))}}),e.dataPoints!==1&&e.minXDiff!==Number.MAX_VALUE||(e.minXDiff=.5)})}},{key:"_setStackedMinMax",value:function(){var e=this.w.globals,t=[],i=[];if(e.series.length)for(var a=0;a<e.series[e.maxValsInArrayIndex].length;a++)for(var n=0,l=0,o=0;o<e.series.length;o++)e.series[o][a]!==null&&P.isNumber(e.series[o][a])&&(e.series[o][a]>0?n=n+parseFloat(e.series[o][a])+1e-4:l+=parseFloat(e.series[o][a])),o===e.series.length-1&&(t.push(n),i.push(l));for(var c=0;c<t.length;c++)e.maxY=Math.max(e.maxY,t[c]),e.minY=Math.min(e.minY,i[c])}}]),T}(),ae=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.xaxisFontSize=t.config.xaxis.labels.style.fontSize,this.axisFontFamily=t.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=t.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal=t.config.chart.type==="bar"&&t.config.plotOptions.bar.horizontal,this.xAxisoffX=0,t.config.xaxis.position==="bottom"&&(this.xAxisoffX=t.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new Ie(e)}return D(T,[{key:"drawYaxis",value:function(e){var t=this,i=this.w,a=new H(this.ctx),n=i.config.yaxis[e].labels.style,l=n.fontSize,o=n.fontFamily,c=n.fontWeight,d=a.group({class:"apexcharts-yaxis",rel:e,transform:"translate("+i.globals.translateYAxisX[e]+", 0)"});if(this.axesUtils.isYAxisHidden(e))return d;var p=a.group({class:"apexcharts-yaxis-texts-g"});d.add(p);var x=i.globals.yAxisScale[e].result.length-1,b=i.globals.gridHeight/x,y=i.globals.translateY,C=i.globals.yLabelFormatters[e],E=i.globals.yAxisScale[e].result.slice();E=this.axesUtils.checkForReversedLabels(e,E);var k="";if(i.config.yaxis[e].labels.show)for(var M=function(G){var X=E[G];X=C(X,G,i);var ne=i.config.yaxis[e].labels.padding;i.config.yaxis[e].opposite&&i.config.yaxis.length!==0&&(ne*=-1);var ee=t.axesUtils.getYAxisForeColor(n.colors,e),pe=a.drawText({x:ne,y:y+x/10+i.config.yaxis[e].labels.offsetY+1,text:X,textAnchor:i.config.yaxis[e].opposite?"start":"end",fontSize:l,fontFamily:o,fontWeight:c,maxWidth:i.config.yaxis[e].labels.maxWidth,foreColor:Array.isArray(ee)?ee[G]:ee,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+n.cssClass});G===x&&(k=pe),p.add(pe);var Ae=document.createElementNS(i.globals.SVGNS,"title");if(Ae.textContent=Array.isArray(X)?X.join(" "):X,pe.node.appendChild(Ae),i.config.yaxis[e].labels.rotate!==0){var Je=a.rotateAroundCenter(k.node),Ye=a.rotateAroundCenter(pe.node);pe.node.setAttribute("transform","rotate(".concat(i.config.yaxis[e].labels.rotate," ").concat(Je.x," ").concat(Ye.y,")"))}y+=b},I=x;I>=0;I--)M(I);if(i.config.yaxis[e].title.text!==void 0){var R=a.group({class:"apexcharts-yaxis-title"}),f=0;i.config.yaxis[e].opposite&&(f=i.globals.translateYAxisX[e]);var v=a.drawText({x:f,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[e].title.offsetY,text:i.config.yaxis[e].title.text,textAnchor:"end",foreColor:i.config.yaxis[e].title.style.color,fontSize:i.config.yaxis[e].title.style.fontSize,fontWeight:i.config.yaxis[e].title.style.fontWeight,fontFamily:i.config.yaxis[e].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[e].title.style.cssClass});R.add(v),d.add(R)}var A=i.config.yaxis[e].axisBorder,L=31+A.offsetX;if(i.config.yaxis[e].opposite&&(L=-31-A.offsetX),A.show){var N=a.drawLine(L,i.globals.translateY+A.offsetY-2,L,i.globals.gridHeight+i.globals.translateY+A.offsetY+2,A.color,0,A.width);d.add(N)}return i.config.yaxis[e].axisTicks.show&&this.axesUtils.drawYAxisTicks(L,x,A,i.config.yaxis[e].axisTicks,e,b,d),d}},{key:"drawYaxisInversed",value:function(e){var t=this.w,i=new H(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),n=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});a.add(n);var l=t.globals.yAxisScale[e].result.length-1,o=t.globals.gridWidth/l+.1,c=o+t.config.xaxis.labels.offsetX,d=t.globals.xLabelFormatter,p=t.globals.yAxisScale[e].result.slice(),x=t.globals.timescaleLabels;x.length>0&&(this.xaxisLabels=x.slice(),l=(p=x.slice()).length),p=this.axesUtils.checkForReversedLabels(e,p);var b=x.length;if(t.config.xaxis.labels.show)for(var y=b?0:l;b?y<b:y>=0;b?y++:y--){var C=p[y];C=d(C,y,t);var E=t.globals.gridWidth+t.globals.padHorizontal-(c-o+t.config.xaxis.labels.offsetX);if(x.length){var k=this.axesUtils.getLabel(p,x,E,y,this.drawnLabels,this.xaxisFontSize);E=k.x,C=k.text,this.drawnLabels.push(k.text),y===0&&t.globals.skipFirstTimelinelabel&&(C=""),y===p.length-1&&t.globals.skipLastTimelinelabel&&(C="")}var M=i.drawText({x:E,y:this.xAxisoffX+t.config.xaxis.labels.offsetY+30-(t.config.xaxis.position==="top"?t.globals.xAxisHeight+t.config.xaxis.axisTicks.height-2:0),text:C,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[e]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:t.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+t.config.xaxis.labels.style.cssClass});n.add(M),M.tspan(C);var I=document.createElementNS(t.globals.SVGNS,"title");I.textContent=C,M.node.appendChild(I),c+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(e){var t=this.w,i=new H(this.ctx),a=t.config.xaxis.axisBorder;if(a.show){var n=0;t.config.chart.type==="bar"&&t.globals.isXNumeric&&(n-=15);var l=i.drawLine(t.globals.padHorizontal+n+a.offsetX,this.xAxisoffX,t.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);e.add(l)}}},{key:"inversedYAxisTitleText",value:function(e){var t=this.w,i=new H(this.ctx);if(t.config.xaxis.title.text!==void 0){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),n=i.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(t.config.xaxis.title.style.fontSize)+t.config.xaxis.title.offsetY+20,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});a.add(n),e.add(a)}}},{key:"yAxisTitleRotate",value:function(e,t){var i=this.w,a=new H(this.ctx),n={width:0,height:0},l={width:0,height:0},o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(e,"'] .apexcharts-yaxis-texts-g"));o!==null&&(n=o.getBoundingClientRect());var c=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e,"'] .apexcharts-yaxis-title text"));if(c!==null&&(l=c.getBoundingClientRect()),c!==null){var d=this.xPaddingForYAxisTitle(e,n,l,t);c.setAttribute("x",d.xPos-(t?10:0))}if(c!==null){var p=a.rotateAroundCenter(c);c.setAttribute("transform","rotate(".concat(t?-1*i.config.yaxis[e].title.rotate:i.config.yaxis[e].title.rotate," ").concat(p.x," ").concat(p.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(e,t,i,a){var n=this.w,l=0,o=0,c=10;return n.config.yaxis[e].title.text===void 0||e<0?{xPos:o,padd:0}:(a?(o=t.width+n.config.yaxis[e].title.offsetX+i.width/2+c/2,(l+=1)===0&&(o-=c/2)):(o=-1*t.width+n.config.yaxis[e].title.offsetX+c/2+i.width/2,n.globals.isBarHorizontal&&(c=25,o=-1*t.width-n.config.yaxis[e].title.offsetX-c)),{xPos:o,padd:c})}},{key:"setYAxisXPosition",value:function(e,t){var i=this.w,a=0,n=0,l=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map(function(c,d){var p=i.globals.ignoreYAxisIndexes.indexOf(d)>-1||!c.show||c.floating||e[d].width===0,x=e[d].width+t[d].width;c.opposite?i.globals.isBarHorizontal?(n=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[d]=n-c.labels.offsetX):(n=i.globals.gridWidth+i.globals.translateX+o,p||(o=o+x+20),i.globals.translateYAxisX[d]=n-c.labels.offsetX+20):(a=i.globals.translateX-l,p||(l=l+x+20),i.globals.translateYAxisX[d]=a+c.labels.offsetX)})}},{key:"setYAxisTextAlignments",value:function(){var e=this.w,t=e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(t=P.listToArray(t)).forEach(function(i,a){var n=e.config.yaxis[a];if(n&&n.labels.align!==void 0){var l=e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(a,"'] .apexcharts-yaxis-texts-g")),o=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(a,"'] .apexcharts-yaxis-label"));o=P.listToArray(o);var c=l.getBoundingClientRect();n.labels.align==="left"?(o.forEach(function(d,p){d.setAttribute("text-anchor","start")}),n.opposite||l.setAttribute("transform","translate(-".concat(c.width,", 0)"))):n.labels.align==="center"?(o.forEach(function(d,p){d.setAttribute("text-anchor","middle")}),l.setAttribute("transform","translate(".concat(c.width/2*(n.opposite?1:-1),", 0)"))):n.labels.align==="right"&&(o.forEach(function(d,p){d.setAttribute("text-anchor","end")}),n.opposite&&l.setAttribute("transform","translate(".concat(c.width,", 0)")))}})}}]),T}(),oe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.documentEvent=P.bind(this.documentEvent,this)}return D(T,[{key:"addEventListener",value:function(e,t){var i=this.w;i.globals.events.hasOwnProperty(e)?i.globals.events[e].push(t):i.globals.events[e]=[t]}},{key:"removeEventListener",value:function(e,t){var i=this.w;if(i.globals.events.hasOwnProperty(e)){var a=i.globals.events[e].indexOf(t);a!==-1&&i.globals.events[e].splice(a,1)}}},{key:"fireEvent",value:function(e,t){var i=this.w;if(i.globals.events.hasOwnProperty(e)){t&&t.length||(t=[]);for(var a=i.globals.events[e],n=a.length,l=0;l<n;l++)a[l].apply(null,t)}}},{key:"setupEventHandlers",value:function(){var e=this,t=this.w,i=this.ctx,a=t.globals.dom.baseEl.querySelector(t.globals.chartClass);this.ctx.eventList.forEach(function(n){a.addEventListener(n,function(l){var o=Object.assign({},t,{seriesIndex:t.globals.capturedSeriesIndex,dataPointIndex:t.globals.capturedDataPointIndex});l.type==="mousemove"||l.type==="touchmove"?typeof t.config.chart.events.mouseMove=="function"&&t.config.chart.events.mouseMove(l,i,o):l.type==="mouseleave"||l.type==="touchleave"?typeof t.config.chart.events.mouseLeave=="function"&&t.config.chart.events.mouseLeave(l,i,o):(l.type==="mouseup"&&l.which===1||l.type==="touchend")&&(typeof t.config.chart.events.click=="function"&&t.config.chart.events.click(l,i,o),i.ctx.events.fireEvent("click",[l,i,o]))},{capture:!1,passive:!0})}),this.ctx.eventList.forEach(function(n){t.globals.dom.baseEl.addEventListener(n,e.documentEvent,{passive:!0})}),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(e){var t=this.w,i=e.target.className;if(e.type==="click"){var a=t.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&i!=="apexcharts-menu-icon"&&a.classList.remove("apexcharts-menu-open")}t.globals.clientX=e.type==="touchmove"?e.touches[0].clientX:e.clientX,t.globals.clientY=e.type==="touchmove"?e.touches[0].clientY:e.clientY}}]),T}(),xe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"setCurrentLocaleValues",value:function(e){var t=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(t=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=t.filter(function(n){return n.name===e})[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=P.extend(le,i);this.w.globals.locale=a.options}}]),T}(),ve=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"drawAxis",value:function(e,t){var i,a,n=this.w.globals,l=this.w.config,o=new ke(this.ctx),c=new ae(this.ctx);n.axisCharts&&e!=="radar"&&(n.isBarHorizontal?(a=c.drawYaxisInversed(0),i=o.drawXaxisInversed(0),n.dom.elGraphical.add(i),n.dom.elGraphical.add(a)):(i=o.drawXaxis(),n.dom.elGraphical.add(i),l.yaxis.map(function(d,p){n.ignoreYAxisIndexes.indexOf(p)===-1&&(a=c.drawYaxis(p),n.dom.Paper.add(a))})))}}]),T}(),fe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"drawXCrosshairs",value:function(){var e=this.w,t=new H(this.ctx),i=new Z(this.ctx),a=e.config.xaxis.crosshairs.fill.gradient,n=e.config.xaxis.crosshairs.dropShadow,l=e.config.xaxis.crosshairs.fill.type,o=a.colorFrom,c=a.colorTo,d=a.opacityFrom,p=a.opacityTo,x=a.stops,b=n.enabled,y=n.left,C=n.top,E=n.blur,k=n.color,M=n.opacity,I=e.config.xaxis.crosshairs.fill.color;if(e.config.xaxis.crosshairs.show){l==="gradient"&&(I=t.drawGradient("vertical",o,c,d,p,null,x,null));var R=t.drawRect();e.config.xaxis.crosshairs.width===1&&(R=t.drawLine());var f=e.globals.gridHeight;(!P.isNumber(f)||f<0)&&(f=0);var v=e.config.xaxis.crosshairs.width;(!P.isNumber(v)||v<0)&&(v=0),R.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:f,width:v,height:f,fill:I,filter:"none","fill-opacity":e.config.xaxis.crosshairs.opacity,stroke:e.config.xaxis.crosshairs.stroke.color,"stroke-width":e.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":e.config.xaxis.crosshairs.stroke.dashArray}),b&&(R=i.dropShadow(R,{left:y,top:C,blur:E,color:k,opacity:M})),e.globals.dom.elGraphical.add(R)}}},{key:"drawYCrosshairs",value:function(){var e=this.w,t=new H(this.ctx),i=e.config.yaxis[0].crosshairs,a=e.globals.barPadForNumericAxis;if(e.config.yaxis[0].crosshairs.show){var n=t.drawLine(-a,0,e.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);n.attr({class:"apexcharts-ycrosshairs"}),e.globals.dom.elGraphical.add(n)}var l=t.drawLine(-a,0,e.globals.gridWidth+a,0,i.stroke.color,0,0);l.attr({class:"apexcharts-ycrosshairs-hidden"}),e.globals.dom.elGraphical.add(l)}}]),T}(),me=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"checkResponsiveConfig",value:function(e){var t=this,i=this.w,a=i.config;if(a.responsive.length!==0){var n=a.responsive.slice();n.sort(function(d,p){return d.breakpoint>p.breakpoint?1:p.breakpoint>d.breakpoint?-1:0}).reverse();var l=new U({}),o=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=n[0].breakpoint,x=window.innerWidth>0?window.innerWidth:screen.width;if(x>p){var b=ue.extendArrayProps(l,i.globals.initialConfig,i);d=P.extend(b,d),d=P.extend(i.config,d),t.overrideResponsiveOptions(d)}else for(var y=0;y<n.length;y++)x<n[y].breakpoint&&(d=ue.extendArrayProps(l,n[y].options,i),d=P.extend(i.config,d),t.overrideResponsiveOptions(d))};if(e){var c=ue.extendArrayProps(l,e,i);c=P.extend(i.config,c),o(c=P.extend(c,e))}else o({})}}},{key:"overrideResponsiveOptions",value:function(e){var t=new U(e).init({responsiveOverride:!0});this.w.config=t}}]),T}(),ce=function(){function T(e){m(this,T),this.ctx=e,this.colors=[],this.w=e.w;var t=this.w;this.isColorFn=!1,this.isHeatmapDistributed=t.config.chart.type==="treemap"&&t.config.plotOptions.treemap.distributed||t.config.chart.type==="heatmap"&&t.config.plotOptions.heatmap.distributed,this.isBarDistributed=t.config.plotOptions.bar.distributed&&(t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")}return D(T,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var e=this,t=this.w,i=new P;if(t.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t.config.theme.mode)),t.config.colors===void 0?t.globals.colors=this.predefined():(t.globals.colors=t.config.colors,Array.isArray(t.config.colors)&&t.config.colors.length>0&&typeof t.config.colors[0]=="function"&&(t.globals.colors=t.config.series.map(function(y,C){var E=t.config.colors[C];return E||(E=t.config.colors[0]),typeof E=="function"?(e.isColorFn=!0,E({value:t.globals.axisCharts?t.globals.series[C][0]?t.globals.series[C][0]:0:t.globals.series[C],seriesIndex:C,dataPointIndex:C,w:t})):E}))),t.globals.seriesColors.map(function(y,C){y&&(t.globals.colors[C]=y)}),t.config.theme.monochrome.enabled){var a=[],n=t.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(n=t.globals.series[0].length*t.globals.series.length);for(var l=t.config.theme.monochrome.color,o=1/(n/t.config.theme.monochrome.shadeIntensity),c=t.config.theme.monochrome.shadeTo,d=0,p=0;p<n;p++){var x=void 0;c==="dark"?(x=i.shadeColor(-1*d,l),d+=o):(x=i.shadeColor(d,l),d+=o),a.push(x)}t.globals.colors=a.slice()}var b=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),["fill","stroke"].forEach(function(y){t.config[y].colors===void 0?t.globals[y].colors=e.isColorFn?t.config.colors:b:t.globals[y].colors=t.config[y].colors.slice(),e.pushExtraColors(t.globals[y].colors)}),t.config.dataLabels.style.colors===void 0?t.globals.dataLabels.style.colors=b:t.globals.dataLabels.style.colors=t.config.dataLabels.style.colors.slice(),this.pushExtraColors(t.globals.dataLabels.style.colors,50),t.config.plotOptions.radar.polygons.fill.colors===void 0?t.globals.radarPolygons.fill.colors=[t.config.theme.mode==="dark"?"#424242":"none"]:t.globals.radarPolygons.fill.colors=t.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(t.globals.radarPolygons.fill.colors,20),t.config.markers.colors===void 0?t.globals.markers.colors=b:t.globals.markers.colors=t.config.markers.colors.slice(),this.pushExtraColors(t.globals.markers.colors)}},{key:"pushExtraColors",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.w,n=t||a.globals.series.length;if(i===null&&(i=this.isBarDistributed||this.isHeatmapDistributed||a.config.chart.type==="heatmap"&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(n=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),e.length<n)for(var l=n-e.length,o=0;o<l;o++)e.push(e[o])}},{key:"updateThemeOptions",value:function(e){e.chart=e.chart||{},e.tooltip=e.tooltip||{};var t=e.theme.mode||"light",i=e.theme.palette?e.theme.palette:t==="dark"?"palette4":"palette1",a=e.chart.foreColor?e.chart.foreColor:t==="dark"?"#f6f7f8":"#373d3f";return e.tooltip.theme=t,e.chart.foreColor=a,e.theme.palette=i,e}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),T}(),Ee=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(e){var t=this.w,i=e==="title"?t.config.title:t.config.subtitle,a=t.globals.svgWidth/2,n=i.offsetY,l="middle";if(i.align==="left"?(a=10,l="start"):i.align==="right"&&(a=t.globals.svgWidth-10,l="end"),a+=i.offsetX,n=n+parseInt(i.style.fontSize,10)+i.margin/2,i.text!==void 0){var o=new H(this.ctx).drawText({x:a,y:n,text:i.text,textAnchor:l,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(e,"-text")),t.globals.dom.Paper.add(o)}}}]),T}(),we=function(){function T(e){m(this,T),this.w=e.w,this.dCtx=e}return D(T,[{key:"getTitleSubtitleCoords",value:function(e){var t=this.w,i=0,a=0,n=e==="title"?t.config.title.floating:t.config.subtitle.floating,l=t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e,"-text"));if(l!==null&&!n){var o=l.getBoundingClientRect();i=o.width,a=t.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var e=this.w,t=e.globals.dom.baseEl.querySelector(".apexcharts-legend");e.config.legend.height||e.config.legend.position!=="top"&&e.config.legend.position!=="bottom"||(t.style.maxHeight=e.globals.svgHeight/2+"px");var i=Object.assign({},P.getBoundingClientRect(t));return t!==null&&!e.config.legend.floating&&e.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:i.height===0?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},e.config.legend.position!=="left"&&e.config.legend.position!=="right"||1.5*this.dCtx.lgRect.width>e.globals.svgWidth&&(this.dCtx.lgRect.width=e.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(e,t){var i=e;if(this.w.globals.isMultiLineX){var a=t.map(function(l,o){return Array.isArray(l)?l.length:1}),n=Math.max.apply(Math,K(a));i=t[a.indexOf(n)]}return i}}]),T}(),Ce=function(){function T(e){m(this,T),this.w=e.w,this.dCtx=e}return D(T,[{key:"getxAxisLabelsCoords",value:function(){var e,t=this.w,i=t.globals.labels.slice();if(t.config.xaxis.convertedCatToNumeric&&i.length===0&&(i=t.globals.categoryLabels),t.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();e={width:a.width,height:a.height},t.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends=t.config.legend.position!=="left"&&t.config.legend.position!=="right"||t.config.legend.floating?0:this.dCtx.lgRect.width;var n=t.globals.xLabelFormatter,l=P.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(l,i);t.globals.isBarHorizontal&&(o=l=t.globals.yAxisScale[0].result.reduce(function(C,E){return C.length>E.length?C:E},0));var c=new Fe(this.dCtx.ctx),d=l;l=c.xLabelFormat(n,l,d,{i:void 0,dateFormatter:new Ge(this.dCtx.ctx).formatDate,w:t}),o=c.xLabelFormat(n,o,d,{i:void 0,dateFormatter:new Ge(this.dCtx.ctx).formatDate,w:t}),(t.config.xaxis.convertedCatToNumeric&&l===void 0||String(l).trim()==="")&&(o=l="1");var p=new H(this.dCtx.ctx),x=p.getTextRects(l,t.config.xaxis.labels.style.fontSize),b=x;if(l!==o&&(b=p.getTextRects(o,t.config.xaxis.labels.style.fontSize)),(e={width:x.width>=b.width?x.width:b.width,height:x.height>=b.height?x.height:b.height}).width*i.length>t.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&t.config.xaxis.labels.rotate!==0||t.config.xaxis.labels.rotateAlways){if(!t.globals.isBarHorizontal){t.globals.rotateXLabels=!0;var y=function(C){return p.getTextRects(C,t.config.xaxis.labels.style.fontSize,t.config.xaxis.labels.style.fontFamily,"rotate(".concat(t.config.xaxis.labels.rotate," 0 0)"),!1)};x=y(l),l!==o&&(b=y(o)),e.height=(x.height>b.height?x.height:b.height)/1.5,e.width=x.width>b.width?x.width:b.width}}else t.globals.rotateXLabels=!1}return t.config.xaxis.labels.show||(e={width:0,height:0}),{width:e.width,height:e.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var e,t=this.w;if(!t.globals.hasGroups)return{width:0,height:0};var i,a=((e=t.config.xaxis.group.style)===null||e===void 0?void 0:e.fontSize)||t.config.xaxis.labels.style.fontSize,n=t.globals.groups.map(function(x){return x.title}),l=P.getLargestStringFromArr(n),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(l,n),c=new H(this.dCtx.ctx),d=c.getTextRects(l,a),p=d;return l!==o&&(p=c.getTextRects(o,a)),i={width:d.width>=p.width?d.width:p.width,height:d.height>=p.height?d.height:p.height},t.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var e=this.w,t=0,i=0;if(e.config.xaxis.title.text!==void 0){var a=new H(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text,e.config.xaxis.title.style.fontSize);t=a.width,i=a.height}return{width:t,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var e,t=this.w;this.dCtx.timescaleLabels=t.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map(function(n){return n.value}),a=i.reduce(function(n,l){return n===void 0?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):n.length>l.length?n:l},0);return 1.05*(e=new H(this.dCtx.ctx).getTextRects(a,t.config.xaxis.labels.style.fontSize)).width*i.length>t.globals.gridWidth&&t.config.xaxis.labels.rotate!==0&&(t.globals.overlappingXLabels=!0),e}},{key:"additionalPaddingXLabels",value:function(e){var t=this,i=this.w,a=i.globals,n=i.config,l=n.xaxis.type,o=e.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var c=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,d=function(p,x){(function(b){return a.collapsedSeriesIndices.indexOf(b)!==-1})(x)||function(b){if(t.dCtx.timescaleLabels&&t.dCtx.timescaleLabels.length){var y=t.dCtx.timescaleLabels[0],C=t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length-1].position+o/1.75-t.dCtx.yAxisWidthRight,E=y.position-o/1.75+t.dCtx.yAxisWidthLeft,k=i.config.legend.position==="right"&&t.dCtx.lgRect.width>0?t.dCtx.lgRect.width:0;C>a.svgWidth-a.translateX-k&&(a.skipLastTimelinelabel=!0),E<-(b.show&&!b.floating||n.chart.type!=="bar"&&n.chart.type!=="candlestick"&&n.chart.type!=="rangeBar"&&n.chart.type!=="boxPlot"?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else l==="datetime"?t.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):l!=="datetime"&&t.dCtx.gridPad.right<o/2-t.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&(i.config.xaxis.tickPlacement!=="between"||i.globals.isBarHorizontal)&&(t.dCtx.xPadRight=o/2+1)}(p)};n.yaxis.forEach(function(p,x){c?(t.dCtx.gridPad.left<o&&(t.dCtx.xPadLeft=o/2+1),t.dCtx.xPadRight=o/2+1):d(p,x)})}}]),T}(),Le=function(){function T(e){m(this,T),this.w=e.w,this.dCtx=e}return D(T,[{key:"getyAxisLabelsCoords",value:function(){var e=this,t=this.w,i=[],a=10,n=new Ie(this.dCtx.ctx);return t.config.yaxis.map(function(l,o){var c=t.globals.yAxisScale[o],d=0;if(!n.isYAxisHidden(o)&&l.labels.show&&l.labels.minWidth!==void 0&&(d=l.labels.minWidth),!n.isYAxisHidden(o)&&l.labels.show&&c.result.length){var p=t.globals.yLabelFormatters[o],x=c.niceMin===Number.MIN_VALUE?0:c.niceMin,b=String(x).length>String(c.niceMax).length?x:c.niceMax,y=p(b,{seriesIndex:o,dataPointIndex:-1,w:t}),C=y;if(y!==void 0&&y.length!==0||(y=b),t.globals.isBarHorizontal){a=0;var E=t.globals.labels.slice();y=p(y=P.getLargestStringFromArr(E),{seriesIndex:o,dataPointIndex:-1,w:t}),C=e.dCtx.dimHelpers.getLargestStringFromMultiArr(y,E)}var k=new H(e.dCtx.ctx),M="rotate(".concat(l.labels.rotate," 0 0)"),I=k.getTextRects(y,l.labels.style.fontSize,l.labels.style.fontFamily,M,!1),R=I;y!==C&&(R=k.getTextRects(C,l.labels.style.fontSize,l.labels.style.fontFamily,M,!1)),i.push({width:(d>R.width||d>I.width?d:R.width>I.width?R.width:I.width)+a,height:R.height>I.height?R.height:I.height})}else i.push({width:0,height:0})}),i}},{key:"getyAxisTitleCoords",value:function(){var e=this,t=this.w,i=[];return t.config.yaxis.map(function(a,n){if(a.show&&a.title.text!==void 0){var l=new H(e.dCtx.ctx),o="rotate(".concat(a.title.rotate," 0 0)"),c=l.getTextRects(a.title.text,a.title.style.fontSize,a.title.style.fontFamily,o,!1);i.push({width:c.width,height:c.height})}else i.push({width:0,height:0})}),i}},{key:"getTotalYAxisWidth",value:function(){var e=this.w,t=0,i=0,a=0,n=e.globals.yAxisScale.length>1?10:0,l=new Ie(this.dCtx.ctx),o=function(c,d){var p=e.config.yaxis[d].floating,x=0;c.width>0&&!p?(x=c.width+n,function(b){return e.globals.ignoreYAxisIndexes.indexOf(b)>-1}(d)&&(x=x-c.width-n)):x=p||l.isYAxisHidden(d)?0:5,e.config.yaxis[d].opposite?a+=x:i+=x,t+=x};return e.globals.yLabelsCoords.map(function(c,d){o(c,d)}),e.globals.yTitleCoords.map(function(c,d){o(c,d)}),e.globals.isBarHorizontal&&!e.config.yaxis[0].floating&&(t=e.globals.yLabelsCoords[0].width+e.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,t}}]),T}(),ze=function(){function T(e){m(this,T),this.w=e.w,this.dCtx=e}return D(T,[{key:"gridPadForColumnsInNumericAxis",value:function(e){var t=this.w;if(t.globals.noData||t.globals.allSeriesCollapsed)return 0;var i=function(p){return p==="bar"||p==="rangeBar"||p==="candlestick"||p==="boxPlot"},a=t.config.chart.type,n=0,l=i(a)?t.config.series.length:1;if(t.globals.comboBarCount>0&&(l=t.globals.comboBarCount),t.globals.collapsedSeries.forEach(function(p){i(p.type)&&(l-=1)}),t.config.chart.stacked&&(l=1),(i(a)||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&l>0){var o,c,d=Math.abs(t.globals.initialMaxX-t.globals.initialMinX);d<=3&&(d=t.globals.dataPoints),o=d/e,t.globals.minXDiff&&t.globals.minXDiff/o>0&&(c=t.globals.minXDiff/o),c>e/2&&(c/=2),(n=c/l*parseInt(t.config.plotOptions.bar.columnWidth,10)/100)<1&&(n=1),n=n/(l>1?1:1.5)+5,t.globals.barPadForNumericAxis=n}return n}},{key:"gridPadFortitleSubtitle",value:function(){var e=this,t=this.w,i=t.globals,a=this.dCtx.isSparkline||!t.globals.axisCharts?0:10;["title","subtitle"].forEach(function(o){t.config[o].text!==void 0?a+=t.config[o].margin:a+=e.dCtx.isSparkline||!t.globals.axisCharts?0:5}),!t.config.legend.show||t.config.legend.position!=="bottom"||t.config.legend.floating||t.globals.axisCharts||(a+=10);var n=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),l=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-n.height-l.height-a,i.translateY=i.translateY+n.height+l.height+a}},{key:"setGridXPosForDualYAxis",value:function(e,t){var i=this.w,a=new Ie(this.dCtx.ctx);i.config.yaxis.map(function(n,l){i.globals.ignoreYAxisIndexes.indexOf(l)!==-1||n.floating||a.isYAxisHidden(l)||(n.opposite&&(i.globals.translateX=i.globals.translateX-(t[l].width+e[l].width)-parseInt(i.config.yaxis[l].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))})}}]),T}(),Xe=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new we(this),this.dimYAxis=new Le(this),this.dimXAxis=new Ce(this),this.dimGrid=new ze(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return D(T,[{key:"plotCoords",value:function(){var e=this,t=this.w,i=t.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.isSparkline&&(t.config.markers.discrete.length>0||t.config.markers.size>0)&&Object.entries(this.gridPad).forEach(function(n){var l=$(n,2),o=l[0],c=l[1];e.gridPad[o]=Math.max(c,e.w.globals.markers.largestSize/1.5)}),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var a=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*a,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(a>0?a+4:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var e=this,t=this.w,i=t.globals,a=this.dimYAxis.getyAxisLabelsCoords(),n=this.dimYAxis.getyAxisTitleCoords();t.globals.yLabelsCoords=[],t.globals.yTitleCoords=[],t.config.yaxis.map(function(y,C){t.globals.yLabelsCoords.push({width:a[C].width,index:C}),t.globals.yTitleCoords.push({width:n[C].width,index:C})}),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var l=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),c=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(l,c,o),i.translateXAxisY=t.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=t.globals.rotateXLabels&&t.globals.isXNumeric&&t.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,t.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(t.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+t.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+t.config.xaxis.labels.offsetX;var d=this.yAxisWidth,p=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-c.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-l.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var x=10;(t.config.chart.type==="radar"||this.isSparkline)&&(d=0,p=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||t.config.chart.type==="treemap")&&(d=0,p=0,x=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(l);var b=function(){i.translateX=d,i.gridHeight=i.svgHeight-e.lgRect.height-p-(e.isSparkline||t.config.chart.type==="treemap"?0:t.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-d};switch(t.config.xaxis.position==="top"&&(x=i.xAxisHeight-t.config.xaxis.axisTicks.height-5),t.config.legend.position){case"bottom":i.translateY=x,b();break;case"top":i.translateY=this.lgRect.height+x,b();break;case"left":i.translateY=x,i.translateX=this.lgRect.width+d,i.gridHeight=i.svgHeight-p-12,i.gridWidth=i.svgWidth-this.lgRect.width-d;break;case"right":i.translateY=x,i.translateX=d,i.gridHeight=i.svgHeight-p-12,i.gridWidth=i.svgWidth-this.lgRect.width-d-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(n,a),new ae(this.ctx).setYAxisXPosition(a,n)}},{key:"setDimensionsForNonAxisCharts",value:function(){var e=this.w,t=e.globals,i=e.config,a=0;e.config.legend.show&&!e.config.legend.floating&&(a=20);var n=i.chart.type==="pie"||i.chart.type==="polarArea"||i.chart.type==="donut"?"pie":"radialBar",l=i.plotOptions[n].offsetY,o=i.plotOptions[n].offsetX;if(!i.legend.show||i.legend.floating)return t.gridHeight=t.svgHeight-i.grid.padding.left+i.grid.padding.right,t.gridWidth=t.gridHeight,t.translateY=l,void(t.translateX=o+(t.svgWidth-t.gridWidth)/2);switch(i.legend.position){case"bottom":t.gridHeight=t.svgHeight-this.lgRect.height-t.goldenPadding,t.gridWidth=t.svgWidth,t.translateY=l-10,t.translateX=o+(t.svgWidth-t.gridWidth)/2;break;case"top":t.gridHeight=t.svgHeight-this.lgRect.height-t.goldenPadding,t.gridWidth=t.svgWidth,t.translateY=this.lgRect.height+l+10,t.translateX=o+(t.svgWidth-t.gridWidth)/2;break;case"left":t.gridWidth=t.svgWidth-this.lgRect.width-a,t.gridHeight=i.chart.height!=="auto"?t.svgHeight:t.gridWidth,t.translateY=l,t.translateX=o+this.lgRect.width+a;break;case"right":t.gridWidth=t.svgWidth-this.lgRect.width-a-5,t.gridHeight=i.chart.height!=="auto"?t.svgHeight:t.gridWidth,t.translateY=l,t.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(e,t,i){var a=this.w,n=a.globals.hasGroups?2:1,l=i.height+e.height+t.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,c=a.globals.rotateXLabels?22:10,d=a.globals.rotateXLabels&&a.config.legend.position==="bottom"?10:0;this.xAxisHeight=l*o+n*c+d,this.xAxisWidth=e.width,this.xAxisHeight-t.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var p=0,x=0;a.config.yaxis.forEach(function(b){p+=b.labels.minWidth,x+=b.labels.maxWidth}),this.yAxisWidth<p&&(this.yAxisWidth=p),this.yAxisWidth>x&&(this.yAxisWidth=x)}}]),T}(),Ue=function(){function T(e){m(this,T),this.w=e.w,this.lgCtx=e}return D(T,[{key:"getLegendStyles",value:function(){var e=document.createElement("style");e.setAttribute("type","text/css");var t=document.createTextNode(`	
    	
      .apexcharts-legend {	
        display: flex;	
        overflow: auto;	
        padding: 0 10px;	
      }	
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {	
        flex-wrap: wrap	
      }	
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        flex-direction: column;	
        bottom: 0;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {	
        justify-content: flex-start;	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {	
        justify-content: center;  	
      }	
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {	
        justify-content: flex-end;	
      }	
      .apexcharts-legend-series {	
        cursor: pointer;	
        line-height: normal;	
      }	
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{	
        display: flex;	
        align-items: center;	
      }	
      .apexcharts-legend-text {	
        position: relative;	
        font-size: 14px;	
      }	
      .apexcharts-legend-text *, .apexcharts-legend-marker * {	
        pointer-events: none;	
      }	
      .apexcharts-legend-marker {	
        position: relative;	
        display: inline-block;	
        cursor: pointer;	
        margin-right: 3px;	
        border-style: solid;
      }	
      	
      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{	
        display: inline-block;	
      }	
      .apexcharts-legend-series.apexcharts-no-click {	
        cursor: auto;	
      }	
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {	
        display: none !important;	
      }	
      .apexcharts-inactive-legend {	
        opacity: 0.45;	
      }`);return e.appendChild(t),e}},{key:"getLegendBBox",value:function(){var e=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),t=e.width;return{clwh:e.height,clww:t}}},{key:"appendToForeignObject",value:function(){var e=this.w.globals;e.dom.elLegendForeign=document.createElementNS(e.SVGNS,"foreignObject");var t=e.dom.elLegendForeign;t.setAttribute("x",0),t.setAttribute("y",0),t.setAttribute("width",e.svgWidth),t.setAttribute("height",e.svgHeight),e.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),t.appendChild(e.dom.elLegendWrap),t.appendChild(this.getLegendStyles()),e.dom.Paper.node.insertBefore(t,e.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(e,t){var i=this,a=this.w;if(a.globals.axisCharts||a.config.chart.type==="radialBar"){a.globals.resized=!0;var n=null,l=null;a.globals.risingSeries=[],a.globals.axisCharts?(n=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"']")),l=parseInt(n.getAttribute("data:realIndex"),10)):(n=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e+1,"']")),l=parseInt(n.getAttribute("rel"),10)-1),t?[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach(function(p){i.riseCollapsedSeries(p.cs,p.csi,l)}):this.hideSeries({seriesEl:n,realIndex:l})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(e+1,"'] path")),c=a.config.chart.type;if(c==="pie"||c==="polarArea"||c==="donut"){var d=a.config.plotOptions.pie.donut.labels;new H(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,d)}o.fire("click")}}},{key:"hideSeries",value:function(e){var t=e.seriesEl,i=e.realIndex,a=this.w,n=P.clone(a.config.series);if(a.globals.axisCharts){var l=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(l=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:n[i].data.slice(),type:t.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!l){a.globals.collapsedSeries.push({index:i,data:n[i].data.slice(),type:t.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var o=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(o,1)}}else a.globals.collapsedSeries.push({index:i,data:n[i]}),a.globals.collapsedSeriesIndices.push(i);for(var c=t.childNodes,d=0;d<c.length;d++)c[d].classList.contains("apexcharts-series-markers-wrap")&&(c[d].classList.contains("apexcharts-hide")?c[d].classList.remove("apexcharts-hide"):c[d].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,n=this._getSeriesBasedOnCollapsedState(n),this.lgCtx.ctx.updateHelpers._updateSeries(n,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(e,t,i){var a=this.w,n=P.clone(a.config.series);if(e.length>0){for(var l=0;l<e.length;l++)e[l].index===i&&(a.globals.axisCharts?(n[i].data=e[l].data.slice(),e.splice(l,1),t.splice(l,1),a.globals.risingSeries.push(i)):(n[i]=e[l].data,e.splice(l,1),t.splice(l,1),a.globals.risingSeries.push(i)));n=this._getSeriesBasedOnCollapsedState(n),this.lgCtx.ctx.updateHelpers._updateSeries(n,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(e){var t=this.w;return t.globals.axisCharts?e.forEach(function(i,a){t.globals.collapsedSeriesIndices.indexOf(a)>-1&&(e[a].data=[])}):e.forEach(function(i,a){t.globals.collapsedSeriesIndices.indexOf(a)>-1&&(e[a]=0)}),e}}]),T}(),qe=function(){function T(e,t){m(this,T),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed=this.w.config.chart.type==="bar"&&this.w.config.plotOptions.bar.distributed&&this.w.config.series.length===1,this.legendHelpers=new Ue(this)}return D(T,[{key:"init",value:function(){var e=this.w,t=e.globals,i=e.config;if((i.legend.showForSingleSeries&&t.series.length===1||this.isBarsDistributed||t.series.length>1||!t.axisCharts)&&i.legend.show){for(;t.dom.elLegendWrap.firstChild;)t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);this.drawLegends(),P.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),i.legend.position==="bottom"||i.legend.position==="top"?this.legendAlignHorizontal():i.legend.position!=="right"&&i.legend.position!=="left"||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var e=this,t=this.w,i=t.config.legend.fontFamily,a=t.globals.seriesNames,n=t.globals.colors.slice();if(t.config.chart.type==="heatmap"){var l=t.config.plotOptions.heatmap.colorScale.ranges;a=l.map(function(ee){return ee.name?ee.name:ee.from+" - "+ee.to}),n=l.map(function(ee){return ee.color})}else this.isBarsDistributed&&(a=t.globals.labels.slice());t.config.legend.customLegendItems.length&&(a=t.config.legend.customLegendItems);for(var o=t.globals.legendFormatter,c=t.config.legend.inverseOrder,d=c?a.length-1:0;c?d>=0:d<=a.length-1;c?d--:d++){var p=o(a[d],{seriesIndex:d,w:t}),x=!1,b=!1;if(t.globals.collapsedSeries.length>0)for(var y=0;y<t.globals.collapsedSeries.length;y++)t.globals.collapsedSeries[y].index===d&&(x=!0);if(t.globals.ancillaryCollapsedSeriesIndices.length>0)for(var C=0;C<t.globals.ancillaryCollapsedSeriesIndices.length;C++)t.globals.ancillaryCollapsedSeriesIndices[C]===d&&(b=!0);var E=document.createElement("span");E.classList.add("apexcharts-legend-marker");var k=t.config.legend.markers.offsetX,M=t.config.legend.markers.offsetY,I=t.config.legend.markers.height,R=t.config.legend.markers.width,f=t.config.legend.markers.strokeWidth,v=t.config.legend.markers.strokeColor,A=t.config.legend.markers.radius,L=E.style;L.background=n[d],L.color=n[d],L.setProperty("background",n[d],"important"),t.config.legend.markers.fillColors&&t.config.legend.markers.fillColors[d]&&(L.background=t.config.legend.markers.fillColors[d]),t.globals.seriesColors[d]!==void 0&&(L.background=t.globals.seriesColors[d],L.color=t.globals.seriesColors[d]),L.height=Array.isArray(I)?parseFloat(I[d])+"px":parseFloat(I)+"px",L.width=Array.isArray(R)?parseFloat(R[d])+"px":parseFloat(R)+"px",L.left=(Array.isArray(k)?parseFloat(k[d]):parseFloat(k))+"px",L.top=(Array.isArray(M)?parseFloat(M[d]):parseFloat(M))+"px",L.borderWidth=Array.isArray(f)?f[d]:f,L.borderColor=Array.isArray(v)?v[d]:v,L.borderRadius=Array.isArray(A)?parseFloat(A[d])+"px":parseFloat(A)+"px",t.config.legend.markers.customHTML&&(Array.isArray(t.config.legend.markers.customHTML)?t.config.legend.markers.customHTML[d]&&(E.innerHTML=t.config.legend.markers.customHTML[d]()):E.innerHTML=t.config.legend.markers.customHTML()),H.setAttrs(E,{rel:d+1,"data:collapsed":x||b}),(x||b)&&E.classList.add("apexcharts-inactive-legend");var N=document.createElement("div"),G=document.createElement("span");G.classList.add("apexcharts-legend-text"),G.innerHTML=Array.isArray(p)?p.join(" "):p;var X=t.config.legend.labels.useSeriesColors?t.globals.colors[d]:t.config.legend.labels.colors;X||(X=t.config.chart.foreColor),G.style.color=X,G.style.fontSize=parseFloat(t.config.legend.fontSize)+"px",G.style.fontWeight=t.config.legend.fontWeight,G.style.fontFamily=i||t.config.chart.fontFamily,H.setAttrs(G,{rel:d+1,i:d,"data:default-text":encodeURIComponent(p),"data:collapsed":x||b}),N.appendChild(E),N.appendChild(G);var ne=new ue(this.ctx);t.config.legend.showForZeroSeries||ne.getSeriesTotalByIndex(d)===0&&ne.seriesHaveSameValues(d)&&!ne.isSeriesNull(d)&&t.globals.collapsedSeriesIndices.indexOf(d)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(d)===-1&&N.classList.add("apexcharts-hidden-zero-series"),t.config.legend.showForNullSeries||ne.isSeriesNull(d)&&t.globals.collapsedSeriesIndices.indexOf(d)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(d)===-1&&N.classList.add("apexcharts-hidden-null-series"),t.globals.dom.elLegendWrap.appendChild(N),t.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(t.config.legend.horizontalAlign)),t.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+t.config.legend.position),N.classList.add("apexcharts-legend-series"),N.style.margin="".concat(t.config.legend.itemMargin.vertical,"px ").concat(t.config.legend.itemMargin.horizontal,"px"),t.globals.dom.elLegendWrap.style.width=t.config.legend.width?t.config.legend.width+"px":"",t.globals.dom.elLegendWrap.style.height=t.config.legend.height?t.config.legend.height+"px":"",H.setAttrs(N,{rel:d+1,seriesName:P.escapeString(a[d]),"data:collapsed":x||b}),(x||b)&&N.classList.add("apexcharts-inactive-legend"),t.config.legend.onItemClick.toggleDataSeries||N.classList.add("apexcharts-no-click")}t.globals.dom.elWrap.addEventListener("click",e.onLegendClick,!0),t.config.legend.onItemHover.highlightDataSeries&&t.config.legend.customLegendItems.length===0&&(t.globals.dom.elWrap.addEventListener("mousemove",e.onLegendHovered,!0),t.globals.dom.elWrap.addEventListener("mouseout",e.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(e,t){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),n=a.getBoundingClientRect(),l=0,o=0;if(i.config.legend.position==="bottom")o+=i.globals.svgHeight-n.height/2;else if(i.config.legend.position==="top"){var c=new Xe(this.ctx),d=c.dimHelpers.getTitleSubtitleCoords("title").height,p=c.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=o+(d>0?d-10:0)+(p>0?p-10:0)}a.style.position="absolute",l=l+e+i.config.legend.offsetX,o=o+t+i.config.legend.offsetY,a.style.left=l+"px",a.style.top=o+"px",i.config.legend.position==="bottom"?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):i.config.legend.position==="right"&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px"),["width","height"].forEach(function(x){a.style[x]&&(a.style[x]=parseInt(i.config.legend[x],10)+"px")})}},{key:"legendAlignHorizontal",value:function(){var e=this.w;e.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var t=this.legendHelpers.getLegendBBox(),i=new Xe(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),n=i.dimHelpers.getTitleSubtitleCoords("subtitle"),l=0;e.config.legend.position==="bottom"?l=-t.clwh/1.8:e.config.legend.position==="top"&&(l=a.height+n.height+e.config.title.margin+e.config.subtitle.margin-10),this.setLegendWrapXY(20,l)}},{key:"legendAlignVertical",value:function(){var e=this.w,t=this.legendHelpers.getLegendBBox(),i=0;e.config.legend.position==="left"&&(i=20),e.config.legend.position==="right"&&(i=e.globals.svgWidth-t.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(e){var t=this.w,i=e.target.classList.contains("apexcharts-legend-text")||e.target.classList.contains("apexcharts-legend-marker");if(t.config.chart.type==="heatmap"||this.isBarsDistributed){if(i){var a=parseInt(e.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new $e(this.ctx).highlightRangeInSeries(e,e.target)}}else!e.target.classList.contains("apexcharts-inactive-legend")&&i&&new $e(this.ctx).toggleSeriesOnHover(e,e.target)}},{key:"onLegendClick",value:function(e){var t=this.w;if(!t.config.legend.customLegendItems.length&&(e.target.classList.contains("apexcharts-legend-text")||e.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(e.target.getAttribute("rel"),10)-1,a=e.target.getAttribute("data:collapsed")==="true",n=this.w.config.chart.events.legendClick;typeof n=="function"&&n(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var l=this.w.config.legend.markers.onClick;typeof l=="function"&&e.target.classList.contains("apexcharts-legend-marker")&&(l(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),t.config.chart.type!=="treemap"&&t.config.chart.type!=="heatmap"&&!this.isBarsDistributed&&t.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),T}(),yt=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=t.globals.minX,this.maxX=t.globals.maxX}return D(T,[{key:"createToolbar",value:function(){var e=this,t=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=t.config.chart.toolbar.offsetY+"px",a.style.right=3-t.config.chart.toolbar.offsetX+"px",t.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=t.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var n=0;n<this.t.customIcons.length;n++)this.elCustomIcons.push(i());var l=[],o=function(x,b,y){var C=x.toLowerCase();e.t[C]&&t.config.chart.zoom.enabled&&l.push({el:b,icon:typeof e.t[C]=="string"?e.t[C]:y,title:e.localeValues[x],class:"apexcharts-".concat(C,"-icon")})};o("zoomIn",this.elZoomIn,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`),o("zoomOut",this.elZoomOut,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);var c=function(x){e.t[x]&&t.config.chart[x].enabled&&l.push({el:x==="zoom"?e.elZoom:e.elSelection,icon:typeof e.t[x]=="string"?e.t[x]:x==="zoom"?`<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>`:`<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`,title:e.localeValues[x==="zoom"?"selectionZoom":"selection"],class:t.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(x,"-icon")})};c("zoom"),c("selection"),this.t.pan&&t.config.chart.zoom.enabled&&l.push({el:this.elPan,icon:typeof this.t.pan=="string"?this.t.pan:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`,title:this.localeValues.pan,class:t.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}),o("reset",this.elZoomReset,`<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`),this.t.download&&l.push({el:this.elMenuIcon,icon:typeof this.t.download=="string"?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var d=0;d<this.elCustomIcons.length;d++)l.push({el:this.elCustomIcons[d],icon:this.t.customIcons[d].icon,title:this.t.customIcons[d].title,index:this.t.customIcons[d].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[d].class});l.forEach(function(x,b){x.index&&P.moveIndexInArray(l,b,x.index)});for(var p=0;p<l.length;p++)H.setAttrs(l[p].el,{class:l[p].class,title:l[p].title}),l[p].el.innerHTML=l[p].icon,a.appendChild(l[p].el);this._createHamburgerMenu(a),t.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):t.globals.panEnabled?this.elPan.classList.add(this.selectedClass):t.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(e){this.elMenuItems=[],e.appendChild(this.elMenu),H.setAttrs(this.elMenu,{class:"apexcharts-menu"});var t=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||t.splice(2,1);for(var i=0;i<t.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=t[i].title,H.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(t[i].name),title:t[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var e=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach(function(i){i.classList.contains("exportSVG")?i.addEventListener("click",e.handleDownload.bind(e,"svg")):i.classList.contains("exportPNG")?i.addEventListener("click",e.handleDownload.bind(e,"png")):i.classList.contains("exportCSV")&&i.addEventListener("click",e.handleDownload.bind(e,"csv"))});for(var t=0;t<this.t.customIcons.length;t++)this.elCustomIcons[t].addEventListener("click",this.t.customIcons[t].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(e){this.ctx.getSyncedCharts().forEach(function(t){t.ctx.toolbar.toggleOtherControls();var i=e==="selection"?t.ctx.toolbar.elSelection:t.ctx.toolbar.elZoom,a=e==="selection"?"selectionEnabled":"zoomEnabled";t.w.globals[a]=!t.w.globals[a],i.classList.contains(t.ctx.toolbar.selectedClass)?i.classList.remove(t.ctx.toolbar.selectedClass):i.classList.add(t.ctx.toolbar.selectedClass)})}},{key:"getToolbarIconsReference",value:function(){var e=this.w;this.elZoom||(this.elZoom=e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(e){this.toggleOtherControls(),e==="pan"?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var t=e==="pan"?this.elPan:this.elZoom,i=e==="pan"?this.elZoom:this.elPan;t&&t.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach(function(e){e.ctx.toolbar.toggleOtherControls(),e.w.globals.panEnabled=!e.w.globals.panEnabled,e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass)?e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass):e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass)})}},{key:"toggleOtherControls",value:function(){var e=this,t=this.w;t.globals.panEnabled=!1,t.globals.zoomEnabled=!1,t.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach(function(i){i&&i.classList.remove(e.selectedClass)})}},{key:"handleZoomIn",value:function(){var e=this.w;e.globals.isRangeBar&&(this.minX=e.globals.minY,this.maxX=e.globals.maxY);var t=(this.minX+this.maxX)/2,i=(this.minX+t)/2,a=(this.maxX+t)/2,n=this._getNewMinXMaxX(i,a);e.globals.disableZoomIn||this.zoomUpdateOptions(n.minX,n.maxX)}},{key:"handleZoomOut",value:function(){var e=this.w;if(e.globals.isRangeBar&&(this.minX=e.globals.minY,this.maxX=e.globals.maxY),!(e.config.xaxis.type==="datetime"&&new Date(this.minX).getUTCFullYear()<1e3)){var t=(this.minX+this.maxX)/2,i=this.minX-(t-this.minX),a=this.maxX-(t-this.maxX),n=this._getNewMinXMaxX(i,a);e.globals.disableZoomOut||this.zoomUpdateOptions(n.minX,n.maxX)}}},{key:"_getNewMinXMaxX",value:function(e,t){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(e):e,maxX:i?Math.floor(t):t}}},{key:"zoomUpdateOptions",value:function(e,t){var i=this.w;if(e!==void 0||t!==void 0){if(!(i.config.xaxis.convertedCatToNumeric&&(e<1&&(e=1,t=i.globals.dataPoints),t-e<2))){var a={min:e,max:t},n=this.getBeforeZoomRange(a);n&&(a=n.xaxis);var l={xaxis:a},o=P.clone(i.globals.initialConfig.yaxis);i.config.chart.zoom.autoScaleYaxis&&(o=new Y(this.ctx).autoScaleY(this.ctx,o,{xaxis:a})),i.config.chart.group||(l.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(l,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(e,t){typeof this.ev.zoomed=="function"&&this.ev.zoomed(this.ctx,{xaxis:e,yaxis:t})}},{key:"getBeforeZoomRange",value:function(e,t){var i=null;return typeof this.ev.beforeZoom=="function"&&(i=this.ev.beforeZoom(this,{xaxis:e,yaxis:t})),i}},{key:"toggleMenu",value:function(){var e=this;window.setTimeout(function(){e.elMenu.classList.contains("apexcharts-menu-open")?e.elMenu.classList.remove("apexcharts-menu-open"):e.elMenu.classList.add("apexcharts-menu-open")},0)}},{key:"handleDownload",value:function(e){var t=this.w,i=new Se(this.ctx);switch(e){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:t.config.series,columnDelimiter:t.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(e){this.ctx.getSyncedCharts().forEach(function(t){var i=t.w;if(i.globals.lastXAxis.min=void 0,i.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),typeof i.config.chart.events.beforeResetZoom=="function"){var a=i.config.chart.events.beforeResetZoom(t,i);a&&t.updateHelpers.revertDefaultAxisMinMax(a)}typeof i.config.chart.events.zoomed=="function"&&t.ctx.toolbar.zoomCallback({min:i.config.xaxis.min,max:i.config.xaxis.max}),i.globals.zoomed=!1;var n=t.ctx.series.emptyCollapsedSeries(P.clone(i.globals.initialSeries));t.updateHelpers._updateSeries(n,i.config.chart.animations.dynamicAnimation.enabled)})}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),T}(),hi=function(T){_(t,yt);var e=W(t);function t(i){var a;return m(this,t),(a=e.call(this,i)).ctx=i,a.w=i.w,a.dragged=!1,a.graphics=new H(a.ctx),a.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],a.clientX=0,a.clientY=0,a.startX=0,a.endX=0,a.dragX=0,a.startY=0,a.endY=0,a.dragY=0,a.moveDirection="none",a}return D(t,[{key:"init",value:function(i){var a=this,n=i.xyRatios,l=this.w,o=this;this.xyRatios=n,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=l.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),l.globals.dom.elGraphical.add(this.zoomRect),l.globals.dom.elGraphical.add(this.selectionRect),l.config.chart.selection.type==="x"?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:l.globals.gridWidth,maxY:l.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):l.config.chart.selection.type==="y"?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:l.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=l.globals.dom.baseEl.querySelector("".concat(l.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach(function(c){a.hoverArea.addEventListener(c,o.svgMouseEvents.bind(o,n),{capture:!1,passive:!0})})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(i,a){var n=this.w,l=this,o=this.ctx.toolbar,c=n.globals.zoomEnabled?n.config.chart.zoom.type:n.config.chart.selection.type,d=n.config.chart.toolbar.autoSelected;if(a.shiftKey?(this.shiftWasPressed=!0,o.enableZoomPanFromToolbar(d==="pan"?"zoom":"pan")):this.shiftWasPressed&&(o.enableZoomPanFromToolbar(d),this.shiftWasPressed=!1),a.target){var p,x=a.target.classList;if(a.target.parentNode&&a.target.parentNode!==null&&(p=a.target.parentNode.classList),!(x.contains("apexcharts-selection-rect")||x.contains("apexcharts-legend-marker")||x.contains("apexcharts-legend-text")||p&&p.contains("apexcharts-toolbar"))){if(l.clientX=a.type==="touchmove"||a.type==="touchstart"?a.touches[0].clientX:a.type==="touchend"?a.changedTouches[0].clientX:a.clientX,l.clientY=a.type==="touchmove"||a.type==="touchstart"?a.touches[0].clientY:a.type==="touchend"?a.changedTouches[0].clientY:a.clientY,a.type==="mousedown"&&a.which===1){var b=l.gridRect.getBoundingClientRect();l.startX=l.clientX-b.left,l.startY=l.clientY-b.top,l.dragged=!1,l.w.globals.mousedown=!0}if((a.type==="mousemove"&&a.which===1||a.type==="touchmove")&&(l.dragged=!0,n.globals.panEnabled?(n.globals.selection=null,l.w.globals.mousedown&&l.panDragging({context:l,zoomtype:c,xyRatios:i})):(l.w.globals.mousedown&&n.globals.zoomEnabled||l.w.globals.mousedown&&n.globals.selectionEnabled)&&(l.selection=l.selectionDrawing({context:l,zoomtype:c}))),a.type==="mouseup"||a.type==="touchend"||a.type==="mouseleave"){var y=l.gridRect.getBoundingClientRect();l.w.globals.mousedown&&(l.endX=l.clientX-y.left,l.endY=l.clientY-y.top,l.dragX=Math.abs(l.endX-l.startX),l.dragY=Math.abs(l.endY-l.startY),(n.globals.zoomEnabled||n.globals.selectionEnabled)&&l.selectionDrawn({context:l,zoomtype:c}),n.globals.panEnabled&&n.config.xaxis.convertedCatToNumeric&&l.delayedPanScrolled()),n.globals.zoomEnabled&&l.hideSelectionRect(this.selectionRect),l.dragged=!1,l.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var i=this.w;if(this.selectionRect){var a=this.selectionRect.node.getBoundingClientRect();a.width>0&&a.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:i.globals.gridWidth,maxY:i.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var i=this.w,a=this.xyRatios;if(!i.globals.zoomEnabled){if(i.globals.selection!==void 0&&i.globals.selection!==null)this.drawSelectionRect(i.globals.selection);else if(i.config.chart.selection.xaxis.min!==void 0&&i.config.chart.selection.xaxis.max!==void 0){var n=(i.config.chart.selection.xaxis.min-i.globals.minX)/a.xRatio,l={x:n,y:0,width:i.globals.gridWidth-(i.globals.maxX-i.config.chart.selection.xaxis.max)/a.xRatio-n,height:i.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(l),this.makeSelectionRectDraggable(),typeof i.config.chart.events.selection=="function"&&i.config.chart.events.selection(this.ctx,{xaxis:{min:i.config.chart.selection.xaxis.min,max:i.config.chart.selection.xaxis.max},yaxis:{}})}}}},{key:"drawSelectionRect",value:function(i){var a=i.x,n=i.y,l=i.width,o=i.height,c=i.translateX,d=c===void 0?0:c,p=i.translateY,x=p===void 0?0:p,b=this.w,y=this.zoomRect,C=this.selectionRect;if(this.dragged||b.globals.selection!==null){var E={transform:"translate("+d+", "+x+")"};b.globals.zoomEnabled&&this.dragged&&(l<0&&(l=1),y.attr({x:a,y:n,width:l,height:o,fill:b.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":b.config.chart.zoom.zoomedArea.fill.opacity,stroke:b.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":b.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":b.config.chart.zoom.zoomedArea.stroke.opacity}),H.setAttrs(y.node,E)),b.globals.selectionEnabled&&(C.attr({x:a,y:n,width:l>0?l:0,height:o>0?o:0,fill:b.config.chart.selection.fill.color,"fill-opacity":b.config.chart.selection.fill.opacity,stroke:b.config.chart.selection.stroke.color,"stroke-width":b.config.chart.selection.stroke.width,"stroke-dasharray":b.config.chart.selection.stroke.dashArray,"stroke-opacity":b.config.chart.selection.stroke.opacity}),H.setAttrs(C.node,E))}}},{key:"hideSelectionRect",value:function(i){i&&i.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(i){var a=i.context,n=i.zoomtype,l=this.w,o=a,c=this.gridRect.getBoundingClientRect(),d=o.startX-1,p=o.startY,x=!1,b=!1,y=o.clientX-c.left-d,C=o.clientY-c.top-p,E={};return Math.abs(y+d)>l.globals.gridWidth?y=l.globals.gridWidth-d:o.clientX-c.left<0&&(y=d),d>o.clientX-c.left&&(x=!0,y=Math.abs(y)),p>o.clientY-c.top&&(b=!0,C=Math.abs(C)),E=n==="x"?{x:x?d-y:d,y:0,width:y,height:l.globals.gridHeight}:n==="y"?{x:0,y:b?p-C:p,width:l.globals.gridWidth,height:C}:{x:x?d-y:d,y:b?p-C:p,width:y,height:C},o.drawSelectionRect(E),o.selectionDragging("resizing"),E}},{key:"selectionDragging",value:function(i,a){var n=this,l=this.w,o=this.xyRatios,c=this.selectionRect,d=0;i==="resizing"&&(d=30);var p=function(b){return parseFloat(c.node.getAttribute(b))},x={x:p("x"),y:p("y"),width:p("width"),height:p("height")};l.globals.selection=x,typeof l.config.chart.events.selection=="function"&&l.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout(function(){var b=n.gridRect.getBoundingClientRect(),y=c.node.getBoundingClientRect(),C={xaxis:{min:l.globals.xAxisScale.niceMin+(y.left-b.left)*o.xRatio,max:l.globals.xAxisScale.niceMin+(y.right-b.left)*o.xRatio},yaxis:{min:l.globals.yAxisScale[0].niceMin+(b.bottom-y.bottom)*o.yRatio[0],max:l.globals.yAxisScale[0].niceMax-(y.top-b.top)*o.yRatio[0]}};l.config.chart.events.selection(n.ctx,C),l.config.chart.brush.enabled&&l.config.chart.events.brushScrolled!==void 0&&l.config.chart.events.brushScrolled(n.ctx,C)},d))}},{key:"selectionDrawn",value:function(i){var a=i.context,n=i.zoomtype,l=this.w,o=a,c=this.xyRatios,d=this.ctx.toolbar;if(o.startX>o.endX){var p=o.startX;o.startX=o.endX,o.endX=p}if(o.startY>o.endY){var x=o.startY;o.startY=o.endY,o.endY=x}var b=void 0,y=void 0;l.globals.isRangeBar?(b=l.globals.yAxisScale[0].niceMin+o.startX*c.invertedYRatio,y=l.globals.yAxisScale[0].niceMin+o.endX*c.invertedYRatio):(b=l.globals.xAxisScale.niceMin+o.startX*c.xRatio,y=l.globals.xAxisScale.niceMin+o.endX*c.xRatio);var C=[],E=[];if(l.config.yaxis.forEach(function(L,N){C.push(l.globals.yAxisScale[N].niceMax-c.yRatio[N]*o.startY),E.push(l.globals.yAxisScale[N].niceMax-c.yRatio[N]*o.endY)}),o.dragged&&(o.dragX>10||o.dragY>10)&&b!==y){if(l.globals.zoomEnabled){var k=P.clone(l.globals.initialConfig.yaxis),M=P.clone(l.globals.initialConfig.xaxis);if(l.globals.zoomed=!0,l.config.xaxis.convertedCatToNumeric&&(b=Math.floor(b),y=Math.floor(y),b<1&&(b=1,y=l.globals.dataPoints),y-b<2&&(y=b+1)),n!=="xy"&&n!=="x"||(M={min:b,max:y}),n!=="xy"&&n!=="y"||k.forEach(function(L,N){k[N].min=E[N],k[N].max=C[N]}),l.config.chart.zoom.autoScaleYaxis){var I=new Y(o.ctx);k=I.autoScaleY(o.ctx,k,{xaxis:M})}if(d){var R=d.getBeforeZoomRange(M,k);R&&(M=R.xaxis?R.xaxis:M,k=R.yaxis?R.yaxis:k)}var f={xaxis:M};l.config.chart.group||(f.yaxis=k),o.ctx.updateHelpers._updateOptions(f,!1,o.w.config.chart.animations.dynamicAnimation.enabled),typeof l.config.chart.events.zoomed=="function"&&d.zoomCallback(M,k)}else if(l.globals.selectionEnabled){var v,A=null;v={min:b,max:y},n!=="xy"&&n!=="y"||(A=P.clone(l.config.yaxis)).forEach(function(L,N){A[N].min=E[N],A[N].max=C[N]}),l.globals.selection=o.selection,typeof l.config.chart.events.selection=="function"&&l.config.chart.events.selection(o.ctx,{xaxis:v,yaxis:A})}}}},{key:"panDragging",value:function(i){var a=i.context,n=this.w,l=a;if(n.globals.lastClientPosition.x!==void 0){var o=n.globals.lastClientPosition.x-l.clientX,c=n.globals.lastClientPosition.y-l.clientY;Math.abs(o)>Math.abs(c)&&o>0?this.moveDirection="left":Math.abs(o)>Math.abs(c)&&o<0?this.moveDirection="right":Math.abs(c)>Math.abs(o)&&c>0?this.moveDirection="up":Math.abs(c)>Math.abs(o)&&c<0&&(this.moveDirection="down")}n.globals.lastClientPosition={x:l.clientX,y:l.clientY};var d=n.globals.isRangeBar?n.globals.minY:n.globals.minX,p=n.globals.isRangeBar?n.globals.maxY:n.globals.maxX;n.config.xaxis.convertedCatToNumeric||l.panScrolled(d,p)}},{key:"delayedPanScrolled",value:function(){var i=this.w,a=i.globals.minX,n=i.globals.maxX,l=(i.globals.maxX-i.globals.minX)/2;this.moveDirection==="left"?(a=i.globals.minX+l,n=i.globals.maxX+l):this.moveDirection==="right"&&(a=i.globals.minX-l,n=i.globals.maxX-l),a=Math.floor(a),n=Math.floor(n),this.updateScrolledChart({xaxis:{min:a,max:n}},a,n)}},{key:"panScrolled",value:function(i,a){var n=this.w,l=this.xyRatios,o=P.clone(n.globals.initialConfig.yaxis),c=l.xRatio,d=n.globals.minX,p=n.globals.maxX;n.globals.isRangeBar&&(c=l.invertedYRatio,d=n.globals.minY,p=n.globals.maxY),this.moveDirection==="left"?(i=d+n.globals.gridWidth/15*c,a=p+n.globals.gridWidth/15*c):this.moveDirection==="right"&&(i=d-n.globals.gridWidth/15*c,a=p-n.globals.gridWidth/15*c),n.globals.isRangeBar||(i<n.globals.initialMinX||a>n.globals.initialMaxX)&&(i=d,a=p);var x={min:i,max:a};n.config.chart.zoom.autoScaleYaxis&&(o=new Y(this.ctx).autoScaleY(this.ctx,o,{xaxis:x}));var b={xaxis:{min:i,max:a}};n.config.chart.group||(b.yaxis=o),this.updateScrolledChart(b,i,a)}},{key:"updateScrolledChart",value:function(i,a,n){var l=this.w;this.ctx.updateHelpers._updateOptions(i,!1,!1),typeof l.config.chart.events.scrolled=="function"&&l.config.chart.events.scrolled(this.ctx,{xaxis:{min:a,max:n}})}}]),t}(),Ps=function(){function T(e){m(this,T),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return D(T,[{key:"getNearestValues",value:function(e){var t=e.hoverArea,i=e.elGrid,a=e.clientX,n=e.clientY,l=this.w,o=i.getBoundingClientRect(),c=o.width,d=o.height,p=c/(l.globals.dataPoints-1),x=d/l.globals.dataPoints,b=this.hasBars();!l.globals.comboCharts&&!b||l.config.xaxis.convertedCatToNumeric||(p=c/l.globals.dataPoints);var y=a-o.left-l.globals.barPadForNumericAxis,C=n-o.top;y<0||C<0||y>c||C>d?(t.classList.remove("hovering-zoom"),t.classList.remove("hovering-pan")):l.globals.zoomEnabled?(t.classList.remove("hovering-pan"),t.classList.add("hovering-zoom")):l.globals.panEnabled&&(t.classList.remove("hovering-zoom"),t.classList.add("hovering-pan"));var E=Math.round(y/p),k=Math.floor(C/x);b&&!l.config.xaxis.convertedCatToNumeric&&(E=Math.ceil(y/p),E-=1);var M=null,I=null,R=[],f=[];if(l.globals.seriesXvalues.forEach(function(N){R.push([N[0]+1e-6].concat(N))}),l.globals.seriesYvalues.forEach(function(N){f.push([N[0]+1e-6].concat(N))}),R=R.map(function(N){return N.filter(function(G){return P.isNumber(G)})}),f=f.map(function(N){return N.filter(function(G){return P.isNumber(G)})}),l.globals.isXNumeric){var v=this.ttCtx.getElGrid().getBoundingClientRect(),A=y*(v.width/c),L=C*(v.height/d);M=(I=this.closestInMultiArray(A,L,R,f)).index,E=I.j,M!==null&&(R=l.globals.seriesXvalues[M],E=(I=this.closestInArray(A,R)).index)}return l.globals.capturedSeriesIndex=M===null?-1:M,(!E||E<1)&&(E=0),l.globals.isBarHorizontal?l.globals.capturedDataPointIndex=k:l.globals.capturedDataPointIndex=E,{capturedSeries:M,j:l.globals.isBarHorizontal?k:E,hoverX:y,hoverY:C}}},{key:"closestInMultiArray",value:function(e,t,i,a){var n=this.w,l=0,o=null,c=-1;n.globals.series.length>1?l=this.getFirstActiveXArray(i):o=0;var d=i[l][0],p=Math.abs(e-d);if(i.forEach(function(y){y.forEach(function(C,E){var k=Math.abs(e-C);k<p&&(p=k,c=E)})}),c!==-1){var x=a[l][c],b=Math.abs(t-x);o=l,a.forEach(function(y,C){var E=Math.abs(t-y[c]);E<b&&(b=E,o=C)})}return{index:o,j:c}}},{key:"getFirstActiveXArray",value:function(e){for(var t=this.w,i=0,a=e.map(function(l,o){return l.length>0?o:-1}),n=0;n<a.length;n++)if(a[n]!==-1&&t.globals.collapsedSeriesIndices.indexOf(n)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(n)===-1){i=a[n];break}return i}},{key:"closestInArray",value:function(e,t){for(var i=t[0],a=null,n=Math.abs(e-i),l=0;l<t.length;l++){var o=Math.abs(e-t[l]);o<n&&(n=o,a=l)}return{index:a}}},{key:"isXoverlap",value:function(e){var t=[],i=this.w.globals.seriesX.filter(function(n){return n[0]!==void 0});if(i.length>0)for(var a=0;a<i.length-1;a++)i[a][e]!==void 0&&i[a+1][e]!==void 0&&i[a][e]!==i[a+1][e]&&t.push("unEqual");return t.length===0}},{key:"isInitialSeriesSameLen",value:function(){for(var e=!0,t=this.w.globals.initialSeries,i=0;i<t.length-1;i++)if(t[i].data.length!==t[i+1].data.length){e=!1;break}return e}},{key:"getBarsHeight",value:function(e){return K(e).reduce(function(t,i){return t+i.getBBox().height},0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(e=K(e)).sort(function(i,a){var n=Number(i.getAttribute("data:realIndex")),l=Number(a.getAttribute("data:realIndex"));return l<n?1:l>n?-1:0});var t=[];return e.forEach(function(i){t.push(i.querySelector(".apexcharts-marker"))}),t}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(e){var t=this.w,i=t.config.markers.hover.size;return i===void 0&&(i=t.globals.markers.size[e]+t.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(e){var t=this.w,i=this.ttCtx;i.allTooltipSeriesGroups.length===0&&(i.allTooltipSeriesGroups=t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,n=0;n<a.length;n++)e==="enable"?(a[n].classList.add("apexcharts-active"),a[n].style.display=t.config.tooltip.items.display):(a[n].classList.remove("apexcharts-active"),a[n].style.display="none")}}]),T}(),Fi=function(){function T(e){m(this,T),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new Ps(e)}return D(T,[{key:"drawSeriesTexts",value:function(e){var t=e.shared,i=t===void 0||t,a=e.ttItems,n=e.i,l=n===void 0?0:n,o=e.j,c=o===void 0?null:o,d=e.y1,p=e.y2,x=e.e,b=this.w;b.config.tooltip.custom!==void 0?this.handleCustomTooltip({i:l,j:c,y1:d,y2:p,w:b}):this.toggleActiveInactiveSeries(i);var y=this.getValuesToPrint({i:l,j:c});this.printLabels({i:l,j:c,values:y,ttItems:a,shared:i,e:x});var C=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=C.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=C.getBoundingClientRect().height}},{key:"printLabels",value:function(e){var t,i=this,a=e.i,n=e.j,l=e.values,o=e.ttItems,c=e.shared,d=e.e,p=this.w,x=[],b=function(v){return p.globals.seriesGoals[v]&&p.globals.seriesGoals[v][n]&&Array.isArray(p.globals.seriesGoals[v][n])},y=l.xVal,C=l.zVal,E=l.xAxisTTVal,k="",M=p.globals.colors[a];n!==null&&p.config.plotOptions.bar.distributed&&(M=p.globals.colors[n]);for(var I=function(v,A){var L=i.getFormatters(a);k=i.getSeriesName({fn:L.yLbTitleFormatter,index:a,seriesIndex:a,j:n}),p.config.chart.type==="treemap"&&(k=L.yLbTitleFormatter(String(p.config.series[a].data[n].x),{series:p.globals.series,seriesIndex:a,dataPointIndex:n,w:p}));var N=p.config.tooltip.inverseOrder?A:v;if(p.globals.axisCharts){var G=function(ee){return L.yLbFormatter(p.globals.series[ee][n],{series:p.globals.series,seriesIndex:ee,dataPointIndex:n,w:p})};if(c)L=i.getFormatters(N),k=i.getSeriesName({fn:L.yLbTitleFormatter,index:N,seriesIndex:a,j:n}),M=p.globals.colors[N],t=G(N),b(N)&&(x=p.globals.seriesGoals[N][n].map(function(ee){return{attrs:ee,val:L.yLbFormatter(ee.value,{seriesIndex:N,dataPointIndex:n,w:p})}}));else{var X,ne=d==null||(X=d.target)===null||X===void 0?void 0:X.getAttribute("fill");ne&&(M=ne.indexOf("url")!==-1?document.querySelector(ne.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke"):ne),t=G(a),b(a)&&Array.isArray(p.globals.seriesGoals[a][n])&&(x=p.globals.seriesGoals[a][n].map(function(ee){return{attrs:ee,val:L.yLbFormatter(ee.value,{seriesIndex:a,dataPointIndex:n,w:p})}}))}}n===null&&(t=L.yLbFormatter(p.globals.series[a],h(h({},p),{},{seriesIndex:a,dataPointIndex:a}))),i.DOMHandling({i:a,t:N,j:n,ttItems:o,values:{val:t,goalVals:x,xVal:y,xAxisTTVal:E,zVal:C},seriesName:k,shared:c,pColor:M})},R=0,f=p.globals.series.length-1;R<p.globals.series.length;R++,f--)I(R,f)}},{key:"getFormatters",value:function(e){var t,i=this.w,a=i.globals.yLabelFormatters[e];return i.globals.ttVal!==void 0?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[e]&&i.globals.ttVal[e].formatter,t=i.globals.ttVal[e]&&i.globals.ttVal[e].title&&i.globals.ttVal[e].title.formatter):(a=i.globals.ttVal.formatter,typeof i.globals.ttVal.title.formatter=="function"&&(t=i.globals.ttVal.title.formatter)):t=i.config.tooltip.y.title.formatter,typeof a!="function"&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(n){return n}),typeof t!="function"&&(t=function(n){return n}),{yLbFormatter:a,yLbTitleFormatter:t}}},{key:"getSeriesName",value:function(e){var t=e.fn,i=e.index,a=e.seriesIndex,n=e.j,l=this.w;return t(String(l.globals.seriesNames[i]),{series:l.globals.series,seriesIndex:a,dataPointIndex:n,w:l})}},{key:"DOMHandling",value:function(e){e.i;var t=e.t,i=e.j,a=e.ttItems,n=e.values,l=e.seriesName,o=e.shared,c=e.pColor,d=this.w,p=this.ttCtx,x=n.val,b=n.goalVals,y=n.xVal,C=n.xAxisTTVal,E=n.zVal,k=null;k=a[t].children,d.config.tooltip.fillSeriesColor&&(a[t].style.backgroundColor=c,k[0].style.display="none"),p.showTooltipTitle&&(p.tooltipTitle===null&&(p.tooltipTitle=d.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),p.tooltipTitle.innerHTML=y),p.isXAxisTooltipEnabled&&(p.xaxisTooltipText.innerHTML=C!==""?C:y);var M=a[t].querySelector(".apexcharts-tooltip-text-y-label");M&&(M.innerHTML=l||"");var I=a[t].querySelector(".apexcharts-tooltip-text-y-value");I&&(I.innerHTML=x!==void 0?x:""),k[0]&&k[0].classList.contains("apexcharts-tooltip-marker")&&(d.config.tooltip.marker.fillColors&&Array.isArray(d.config.tooltip.marker.fillColors)&&(c=d.config.tooltip.marker.fillColors[t]),k[0].style.backgroundColor=c),d.config.tooltip.marker.show||(k[0].style.display="none");var R=a[t].querySelector(".apexcharts-tooltip-text-goals-label"),f=a[t].querySelector(".apexcharts-tooltip-text-goals-value");if(b.length&&d.globals.seriesGoals[t]){var v=function(){var A="<div >",L="<div>";b.forEach(function(N,G){A+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(N.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(N.attrs.name,"</div>"),L+="<div>".concat(N.val,"</div>")}),R.innerHTML=A+"</div>",f.innerHTML=L+"</div>"};o?d.globals.seriesGoals[t][i]&&Array.isArray(d.globals.seriesGoals[t][i])?v():(R.innerHTML="",f.innerHTML=""):v()}else R.innerHTML="",f.innerHTML="";E!==null&&(a[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=d.config.tooltip.z.title,a[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=E!==void 0?E:""),o&&k[0]&&(x==null||d.globals.ancillaryCollapsedSeriesIndices.indexOf(t)>-1||d.globals.collapsedSeriesIndices.indexOf(t)>-1?k[0].parentNode.style.display="none":k[0].parentNode.style.display=d.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(e){var t=this.w;if(e)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=t.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=t.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(e){var t=e.i,i=e.j,a=this.w,n=this.ctx.series.filteredSeriesX(),l="",o="",c=null,d=null,p={series:a.globals.series,seriesIndex:t,dataPointIndex:i,w:a},x=a.globals.ttZFormatter;i===null?d=a.globals.series[t]:a.globals.isXNumeric&&a.config.chart.type!=="treemap"?(l=n[t][i],n[t].length===0&&(l=n[this.tooltipUtil.getFirstActiveXArray(n)][i])):l=a.globals.labels[i]!==void 0?a.globals.labels[i]:"";var b=l;return a.globals.isXNumeric&&a.config.xaxis.type==="datetime"?l=new Fe(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,b,b,{i:void 0,dateFormatter:new Ge(this.ctx).formatDate,w:this.w}):l=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](b,p):a.globals.xLabelFormatter(b,p),a.config.tooltip.x.formatter!==void 0&&(l=a.globals.ttKeyFormatter(b,p)),a.globals.seriesZ.length>0&&a.globals.seriesZ[t].length>0&&(c=x(a.globals.seriesZ[t][i],a)),o=typeof a.config.xaxis.tooltip.formatter=="function"?a.globals.xaxisTooltipFormatter(b,p):l,{val:Array.isArray(d)?d.join(" "):d,xVal:Array.isArray(l)?l.join(" "):l,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:c}}},{key:"handleCustomTooltip",value:function(e){var t=e.i,i=e.j,a=e.y1,n=e.y2,l=e.w,o=this.ttCtx.getElTooltip(),c=l.config.tooltip.custom;Array.isArray(c)&&c[t]&&(c=c[t]),o.innerHTML=c({ctx:this.ctx,series:l.globals.series,seriesIndex:t,dataPointIndex:i,y1:a,y2:n,w:l})}}]),T}(),Ts=function(){function T(e){m(this,T),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return D(T,[{key:"moveXCrosshairs",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.ttCtx,a=this.w,n=i.getElXCrosshairs(),l=e-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(t!==null&&(l=a.globals.gridWidth/o*t),n===null||a.globals.isBarHorizontal||(n.setAttribute("x",l),n.setAttribute("x1",l),n.setAttribute("x2",l),n.setAttribute("y2",a.globals.gridHeight),n.classList.add("apexcharts-active")),l<0&&(l=0),l>a.globals.gridWidth&&(l=a.globals.gridWidth),i.isXAxisTooltipEnabled){var c=l;a.config.xaxis.crosshairs.width!=="tickWidth"&&a.config.xaxis.crosshairs.width!=="barWidth"||(c=l+i.xcrosshairsWidth/2),this.moveXAxisTooltip(c)}}},{key:"moveYCrosshairs",value:function(e){var t=this.ttCtx;t.ycrosshairs!==null&&H.setAttrs(t.ycrosshairs,{y1:e,y2:e}),t.ycrosshairsHidden!==null&&H.setAttrs(t.ycrosshairsHidden,{y1:e,y2:e})}},{key:"moveXAxisTooltip",value:function(e){var t=this.w,i=this.ttCtx;if(i.xaxisTooltip!==null&&i.xcrosshairsWidth!==0){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+t.config.xaxis.tooltip.offsetY+t.globals.translateY+1+t.config.xaxis.offsetY;if(e-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(e)){e+=t.globals.translateX;var n;n=new H(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=n.width+"px",i.xaxisTooltip.style.left=e+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(e){var t=this.w,i=this.ttCtx;i.yaxisTTEls===null&&(i.yaxisTTEls=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),n=t.globals.translateY+a,l=i.yaxisTTEls[e].getBoundingClientRect().height,o=t.globals.translateYAxisX[e]-2;t.config.yaxis[e].opposite&&(o-=26),n-=l/2,t.globals.ignoreYAxisIndexes.indexOf(e)===-1?(i.yaxisTTEls[e].classList.add("apexcharts-active"),i.yaxisTTEls[e].style.top=n+"px",i.yaxisTTEls[e].style.left=o+t.config.yaxis[e].tooltip.offsetX+"px"):i.yaxisTTEls[e].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.w,n=this.ttCtx,l=n.getElTooltip(),o=n.tooltipRect,c=i!==null?parseFloat(i):1,d=parseFloat(e)+c+5,p=parseFloat(t)+c/2;if(d>a.globals.gridWidth/2&&(d=d-o.ttWidth-c-10),d>a.globals.gridWidth-o.ttWidth-10&&(d=a.globals.gridWidth-o.ttWidth),d<-20&&(d=-20),a.config.tooltip.followCursor){var x=n.getElGrid(),b=x.getBoundingClientRect();p=n.e.clientY+a.globals.translateY-b.top-o.ttHeight/2}else a.globals.isBarHorizontal||(o.ttHeight/2+p>a.globals.gridHeight&&(p=a.globals.gridHeight-o.ttHeight+a.globals.translateY),p<0&&(p=0));isNaN(d)||(d+=a.globals.translateX,l.style.left=d+"px",l.style.top=p+"px")}},{key:"moveMarkers",value:function(e,t){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[e]>0)for(var n=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-marker")),l=0;l<n.length;l++)parseInt(n[l].getAttribute("rel"),10)===t&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(t,n[l]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(t,e)}},{key:"moveDynamicPointOnHover",value:function(e,t){var i,a,n=this.w,l=this.ttCtx,o=n.globals.pointsArray,c=l.tooltipUtil.getHoverMarkerSize(t),d=n.config.series[t].type;if(!d||d!=="column"&&d!=="candlestick"&&d!=="boxPlot"){i=o[t][e][0],a=o[t][e][1]?o[t][e][1]:0;var p=n.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-series-markers circle"));p&&a<n.globals.gridHeight&&a>0&&(p.setAttribute("r",c),p.setAttribute("cx",i),p.setAttribute("cy",a)),this.moveXCrosshairs(i),l.fixedTooltip||this.moveTooltip(i,a,c)}}},{key:"moveDynamicPointsOnHover",value:function(e){var t,i=this.ttCtx,a=i.w,n=0,l=0,o=a.globals.pointsArray;t=new $e(this.ctx).getActiveConfigSeriesIndex(!0);var c=i.tooltipUtil.getHoverMarkerSize(t);o[t]&&(n=o[t][e][0],l=o[t][e][1]);var d=i.tooltipUtil.getAllMarkers();if(d!==null)for(var p=0;p<a.globals.series.length;p++){var x=o[p];if(a.globals.comboCharts&&x===void 0&&d.splice(p,0,null),x&&x.length){var b=o[p][e][1];d[p].setAttribute("cx",n),b!==null&&!isNaN(b)&&b<a.globals.gridHeight+c&&b+c>0?(d[p]&&d[p].setAttribute("r",c),d[p]&&d[p].setAttribute("cy",b)):d[p]&&d[p].setAttribute("r",0)}}if(this.moveXCrosshairs(n),!i.fixedTooltip){var y=l||a.globals.gridHeight;this.moveTooltip(n,y,c)}}},{key:"moveStickyTooltipOverBars",value:function(e){var t=this.w,i=this.ttCtx,a=t.globals.columnSeries?t.globals.columnSeries.length:t.globals.series.length,n=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;t.globals.isBarHorizontal&&(n=new $e(this.ctx).getActiveConfigSeriesIndex(!1,"desc")+1);var l=t.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(n,"'] path[j='").concat(e,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(n,"'] path[j='").concat(e,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(n,"'] path[j='").concat(e,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(n,"'] path[j='").concat(e,"']")),o=l?parseFloat(l.getAttribute("cx")):0,c=l?parseFloat(l.getAttribute("cy")):0,d=l?parseFloat(l.getAttribute("barWidth")):0,p=l?parseFloat(l.getAttribute("barHeight")):0,x=i.getElGrid().getBoundingClientRect(),b=l.classList.contains("apexcharts-candlestick-area")||l.classList.contains("apexcharts-boxPlot-area");if(t.globals.isXNumeric?(l&&!b&&(o-=a%2!=0?d/2:0),l&&b&&t.globals.comboCharts&&(o-=d/2)):t.globals.isBarHorizontal||(o=i.xAxisTicksPositions[e-1]+i.dataPointsDividedWidth/2,isNaN(o)&&(o=i.xAxisTicksPositions[e]-i.dataPointsDividedWidth/2)),t.globals.isBarHorizontal?(c>t.globals.gridHeight/2&&(c-=i.tooltipRect.ttHeight),(c=c+t.config.grid.padding.top+p/3)+p>t.globals.gridHeight&&(c=t.globals.gridHeight-p)):t.config.tooltip.followCursor?c=i.e.clientY-x.top-i.tooltipRect.ttHeight/2:c+i.tooltipRect.ttHeight+15>t.globals.gridHeight&&(c=t.globals.gridHeight),c<-10&&(c=-10),t.globals.isBarHorizontal||this.moveXCrosshairs(o),!i.fixedTooltip){var y=c||t.globals.gridHeight;this.moveTooltip(o,y)}}}]),T}(),bt=function(){function T(e){m(this,T),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new Ts(e)}return D(T,[{key:"drawDynamicPoints",value:function(){var e=this.w,t=new H(this.ctx),i=new je(this.ctx),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=K(a),e.config.chart.stacked&&a.sort(function(x,b){return parseFloat(x.getAttribute("data:realIndex"))-parseFloat(b.getAttribute("data:realIndex"))});for(var n=0;n<a.length;n++){var l=a[n].querySelector(".apexcharts-series-markers-wrap");if(l!==null){var o=void 0,c="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));e.config.chart.type!=="line"&&e.config.chart.type!=="area"||e.globals.comboCharts||e.config.tooltip.intersect||(c+=" no-pointer-events");var d=i.getMarkerConfig({cssClass:c,seriesIndex:Number(l.getAttribute("data:realIndex"))});(o=t.drawMarker(0,0,d)).node.setAttribute("default-marker-size",0);var p=document.createElementNS(e.globals.SVGNS,"g");p.classList.add("apexcharts-series-markers"),p.appendChild(o.node),l.appendChild(p)}}}},{key:"enlargeCurrentPoint",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=this.w;n.config.chart.type!=="bubble"&&this.newPointSize(e,t);var l=t.getAttribute("cx"),o=t.getAttribute("cy");if(i!==null&&a!==null&&(l=i,o=a),this.tooltipPosition.moveXCrosshairs(l),!this.fixedTooltip){if(n.config.chart.type==="radar"){var c=this.ttCtx.getElGrid(),d=c.getBoundingClientRect();l=this.ttCtx.e.clientX-d.left}this.tooltipPosition.moveTooltip(l,o,n.config.markers.hover.size)}}},{key:"enlargePoints",value:function(e){for(var t=this.w,i=this,a=this.ttCtx,n=e,l=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=t.config.markers.hover.size,c=0;c<l.length;c++){var d=l[c].getAttribute("rel"),p=l[c].getAttribute("index");if(o===void 0&&(o=t.globals.markers.size[p]+t.config.markers.hover.sizeOffset),n===parseInt(d,10)){i.newPointSize(n,l[c]);var x=l[c].getAttribute("cx"),b=l[c].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(x),a.fixedTooltip||i.tooltipPosition.moveTooltip(x,b,o)}else i.oldPointSize(l[c])}}},{key:"newPointSize",value:function(e,t){var i=this.w,a=i.config.markers.hover.size,n=e===0?t.parentNode.firstChild:t.parentNode.lastChild;if(n.getAttribute("default-marker-size")!=="0"){var l=parseInt(n.getAttribute("index"),10);a===void 0&&(a=i.globals.markers.size[l]+i.config.markers.hover.sizeOffset),a<0&&(a=0),n.setAttribute("r",a)}}},{key:"oldPointSize",value:function(e){var t=parseFloat(e.getAttribute("default-marker-size"));e.setAttribute("r",t)}},{key:"resetPointsSize",value:function(){for(var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),t=0;t<e.length;t++){var i=parseFloat(e[t].getAttribute("default-marker-size"));P.isNumber(i)&&i>=0?e[t].setAttribute("r",i):e[t].setAttribute("r",0)}}}]),T}(),zt=function(){function T(e){m(this,T),this.w=e.w,this.ttCtx=e}return D(T,[{key:"getAttr",value:function(e,t){return parseFloat(e.target.getAttribute(t))}},{key:"handleHeatTreeTooltip",value:function(e){var t=e.e,i=e.opt,a=e.x,n=e.y,l=e.type,o=this.ttCtx,c=this.w;if(t.target.classList.contains("apexcharts-".concat(l,"-rect"))){var d=this.getAttr(t,"i"),p=this.getAttr(t,"j"),x=this.getAttr(t,"cx"),b=this.getAttr(t,"cy"),y=this.getAttr(t,"width"),C=this.getAttr(t,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:d,j:p,shared:!1,e:t}),c.globals.capturedSeriesIndex=d,c.globals.capturedDataPointIndex=p,a=x+o.tooltipRect.ttWidth/2+y,n=b+o.tooltipRect.ttHeight/2-C/2,o.tooltipPosition.moveXCrosshairs(x+y/2),a>c.globals.gridWidth/2&&(a=x-o.tooltipRect.ttWidth/2+y),o.w.config.tooltip.followCursor){var E=c.globals.dom.elWrap.getBoundingClientRect();a=c.globals.clientX-E.left-(a>c.globals.gridWidth/2?o.tooltipRect.ttWidth:0),n=c.globals.clientY-E.top-(n>c.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:n}}},{key:"handleMarkerTooltip",value:function(e){var t,i,a=e.e,n=e.opt,l=e.x,o=e.y,c=this.w,d=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var p=parseInt(n.paths.getAttribute("cx"),10),x=parseInt(n.paths.getAttribute("cy"),10),b=parseFloat(n.paths.getAttribute("val"));if(i=parseInt(n.paths.getAttribute("rel"),10),t=parseInt(n.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,d.intersect){var y=P.findAncestor(n.paths,"apexcharts-series");y&&(t=parseInt(y.getAttribute("data:realIndex"),10))}if(d.tooltipLabels.drawSeriesTexts({ttItems:n.ttItems,i:t,j:i,shared:!d.showOnIntersect&&c.config.tooltip.shared,e:a}),a.type==="mouseup"&&d.markerClick(a,t,i),c.globals.capturedSeriesIndex=t,c.globals.capturedDataPointIndex=i,l=p,o=x+c.globals.translateY-1.4*d.tooltipRect.ttHeight,d.w.config.tooltip.followCursor){var C=d.getElGrid().getBoundingClientRect();o=d.e.clientY+c.globals.translateY-C.top}b<0&&(o=x),d.marker.enlargeCurrentPoint(i,n.paths,l,o)}return{x:l,y:o}}},{key:"handleBarTooltip",value:function(e){var t,i,a=e.e,n=e.opt,l=this.w,o=this.ttCtx,c=o.getElTooltip(),d=0,p=0,x=0,b=this.getBarTooltipXY({e:a,opt:n});t=b.i;var y=b.barHeight,C=b.j;l.globals.capturedSeriesIndex=t,l.globals.capturedDataPointIndex=C,l.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!l.config.tooltip.shared?(p=b.x,x=b.y,i=Array.isArray(l.config.stroke.width)?l.config.stroke.width[t]:l.config.stroke.width,d=p):l.globals.comboCharts||l.config.tooltip.shared||(d/=2),isNaN(x)?x=l.globals.svgHeight-o.tooltipRect.ttHeight:x<0&&(x=0);var E=parseInt(n.paths.parentNode.getAttribute("data:realIndex"),10),k=l.globals.isMultipleYAxis?l.config.yaxis[E]&&l.config.yaxis[E].reversed:l.config.yaxis[0].reversed;if(p+o.tooltipRect.ttWidth>l.globals.gridWidth&&!k?p-=o.tooltipRect.ttWidth:p<0&&(p=0),o.w.config.tooltip.followCursor){var M=o.getElGrid().getBoundingClientRect();x=o.e.clientY-M.top}o.tooltip===null&&(o.tooltip=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),l.config.tooltip.shared||(l.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(d+i/2):o.tooltipPosition.moveXCrosshairs(d)),!o.fixedTooltip&&(!l.config.tooltip.shared||l.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(k&&(p-=o.tooltipRect.ttWidth)<0&&(p=0),!k||l.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(x=x+y-2*(l.globals.series[t][C]<0?y:0)),o.tooltipRect.ttHeight+x>l.globals.gridHeight?x=l.globals.gridHeight-o.tooltipRect.ttHeight+l.globals.translateY:(x=x+l.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(x=0),c.style.left=p+l.globals.translateX+"px",c.style.top=x+"px")}},{key:"getBarTooltipXY",value:function(e){var t=e.e,i=e.opt,a=this.w,n=null,l=this.ttCtx,o=0,c=0,d=0,p=0,x=0,b=t.target.classList;if(b.contains("apexcharts-bar-area")||b.contains("apexcharts-candlestick-area")||b.contains("apexcharts-boxPlot-area")||b.contains("apexcharts-rangebar-area")){var y=t.target,C=y.getBoundingClientRect(),E=i.elGrid.getBoundingClientRect(),k=C.height;x=C.height;var M=C.width,I=parseInt(y.getAttribute("cx"),10),R=parseInt(y.getAttribute("cy"),10);p=parseFloat(y.getAttribute("barWidth"));var f=t.type==="touchmove"?t.touches[0].clientX:t.clientX;n=parseInt(y.getAttribute("j"),10),o=parseInt(y.parentNode.getAttribute("rel"),10)-1;var v=y.getAttribute("data-range-y1"),A=y.getAttribute("data-range-y2");a.globals.comboCharts&&(o=parseInt(y.parentNode.getAttribute("data:realIndex"),10)),l.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:n,y1:v?parseInt(v,10):null,y2:A?parseInt(A,10):null,shared:!l.showOnIntersect&&a.config.tooltip.shared,e:t}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(c=f-E.left+15,d=R-l.dataPointsDividedHeight+k/2-l.tooltipRect.ttHeight/2):(c=a.globals.isXNumeric?I-M/2:I-l.dataPointsDividedWidth+M/2,d=t.clientY-E.top-l.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((c=I)<l.xyRatios.baseLineInvertedY&&(c=I-l.tooltipRect.ttWidth),d=R-l.dataPointsDividedHeight+k/2-l.tooltipRect.ttHeight/2):(c=a.globals.isXNumeric?I-M/2:I-l.dataPointsDividedWidth+M/2,d=R)}return{x:c,y:d,barHeight:x,barWidth:p,i:o,j:n}}}]),T}(),ba=function(){function T(e){m(this,T),this.w=e.w,this.ttCtx=e}return D(T,[{key:"drawXaxisTooltip",value:function(){var e=this.w,t=this.ttCtx,i=e.config.xaxis.position==="bottom";t.xaxisOffY=i?e.globals.gridHeight+1:-e.globals.xAxisHeight-e.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",n=e.globals.dom.elWrap;t.isXAxisTooltipEnabled&&e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")===null&&(t.xaxisTooltip=document.createElement("div"),t.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+e.config.tooltip.theme),n.appendChild(t.xaxisTooltip),t.xaxisTooltipText=document.createElement("div"),t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),t.xaxisTooltipText.style.fontFamily=e.config.xaxis.tooltip.style.fontFamily||e.config.chart.fontFamily,t.xaxisTooltipText.style.fontSize=e.config.xaxis.tooltip.style.fontSize,t.xaxisTooltip.appendChild(t.xaxisTooltipText))}},{key:"drawYaxisTooltip",value:function(){for(var e=this.w,t=this.ttCtx,i=function(n){var l=e.config.yaxis[n].opposite||e.config.yaxis[n].crosshairs.opposite;t.yaxisOffX=l?e.globals.gridWidth+1:1;var o="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(n,l?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");e.globals.yAxisSameScaleIndices.map(function(d,p){d.map(function(x,b){b===n&&(o+=e.config.yaxis[b].show?" ":" apexcharts-yaxistooltip-hidden")})});var c=e.globals.dom.elWrap;e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(n))===null&&(t.yaxisTooltip=document.createElement("div"),t.yaxisTooltip.setAttribute("class",o+" apexcharts-theme-"+e.config.tooltip.theme),c.appendChild(t.yaxisTooltip),n===0&&(t.yaxisTooltipText=[]),t.yaxisTooltipText[n]=document.createElement("div"),t.yaxisTooltipText[n].classList.add("apexcharts-yaxistooltip-text"),t.yaxisTooltip.appendChild(t.yaxisTooltipText[n]))},a=0;a<e.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var e=this.w,t=this.ttCtx,i=t.getElXCrosshairs();if(t.xcrosshairsWidth=parseInt(e.config.xaxis.crosshairs.width,10),e.globals.comboCharts){var a=e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(a!==null&&e.config.xaxis.crosshairs.width==="barWidth"){var n=parseFloat(a.getAttribute("barWidth"));t.xcrosshairsWidth=n}else if(e.config.xaxis.crosshairs.width==="tickWidth"){var l=e.globals.labels.length;t.xcrosshairsWidth=e.globals.gridWidth/l}}else if(e.config.xaxis.crosshairs.width==="tickWidth"){var o=e.globals.labels.length;t.xcrosshairsWidth=e.globals.gridWidth/o}else if(e.config.xaxis.crosshairs.width==="barWidth"){var c=e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(c!==null){var d=parseFloat(c.getAttribute("barWidth"));t.xcrosshairsWidth=d}else t.xcrosshairsWidth=1}e.globals.isBarHorizontal&&(t.xcrosshairsWidth=0),i!==null&&t.xcrosshairsWidth>0&&i.setAttribute("width",t.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var e=this.w,t=this.ttCtx;t.ycrosshairs=e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),t.ycrosshairsHidden=e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(e,t,i){var a=this.ttCtx,n=this.w,l=n.globals.yLabelFormatters[e];if(a.yaxisTooltips[e]){var o=a.getElGrid().getBoundingClientRect(),c=(t-o.top)*i.yRatio[e],d=n.globals.maxYArr[e]-n.globals.minYArr[e],p=n.globals.minYArr[e]+(d-c);a.tooltipPosition.moveYCrosshairs(t-o.top),a.yaxisTooltipText[e].innerHTML=l(p),a.tooltipPosition.moveYAxisTooltip(e)}}}]),T}(),Bh=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.tConfig=t.config.tooltip,this.tooltipUtil=new Ps(this),this.tooltipLabels=new Fi(this),this.tooltipPosition=new Ts(this),this.marker=new bt(this),this.intersect=new zt(this),this.axesTooltip=new ba(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!t.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return D(T,[{key:"getElTooltip",value:function(e){return e||(e=this),e.w.globals.dom.baseEl?e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(e){var t=this.w;this.xyRatios=e,this.isXAxisTooltipEnabled=t.config.xaxis.tooltip.enabled&&t.globals.axisCharts,this.yaxisTooltips=t.config.yaxis.map(function(l,o){return!!(l.show&&l.tooltip.enabled&&t.globals.axisCharts)}),this.allTooltipSeriesGroups=[],t.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),t.config.tooltip.cssClass&&i.classList.add(t.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),t.globals.dom.elWrap.appendChild(i),t.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new ke(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!t.globals.comboCharts&&!this.tConfig.intersect&&t.config.chart.type!=="rangeBar"||this.tConfig.shared||(this.showOnIntersect=!0),t.config.markers.size!==0&&t.globals.markers.largestSize!==0||this.marker.drawDynamicPoints(this),t.globals.collapsedSeries.length!==t.globals.series.length){this.dataPointsDividedHeight=t.globals.gridHeight/t.globals.dataPoints,this.dataPointsDividedWidth=t.globals.gridWidth/t.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||t.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var n=t.globals.series.length;(t.globals.xyCharts||t.globals.comboCharts)&&this.tConfig.shared&&(n=this.showOnIntersect?1:t.globals.series.length),this.legendLabels=t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(n),this.addSVGEvents()}}},{key:"createTTElements",value:function(e){for(var t=this,i=this.w,a=[],n=this.getElTooltip(),l=function(c){var d=document.createElement("div");d.classList.add("apexcharts-tooltip-series-group"),d.style.order=i.config.tooltip.inverseOrder?e-c:c+1,t.tConfig.shared&&t.tConfig.enabledOnSeries&&Array.isArray(t.tConfig.enabledOnSeries)&&t.tConfig.enabledOnSeries.indexOf(c)<0&&d.classList.add("apexcharts-tooltip-series-group-hidden");var p=document.createElement("span");p.classList.add("apexcharts-tooltip-marker"),p.style.backgroundColor=i.globals.colors[c],d.appendChild(p);var x=document.createElement("div");x.classList.add("apexcharts-tooltip-text"),x.style.fontFamily=t.tConfig.style.fontFamily||i.config.chart.fontFamily,x.style.fontSize=t.tConfig.style.fontSize,["y","goals","z"].forEach(function(b){var y=document.createElement("div");y.classList.add("apexcharts-tooltip-".concat(b,"-group"));var C=document.createElement("span");C.classList.add("apexcharts-tooltip-text-".concat(b,"-label")),y.appendChild(C);var E=document.createElement("span");E.classList.add("apexcharts-tooltip-text-".concat(b,"-value")),y.appendChild(E),x.appendChild(y)}),d.appendChild(x),n.appendChild(d),a.push(d)},o=0;o<e;o++)l(o);return a}},{key:"addSVGEvents",value:function(){var e=this.w,t=e.config.chart.type,i=this.getElTooltip(),a=!(t!=="bar"&&t!=="candlestick"&&t!=="boxPlot"&&t!=="rangeBar"),n=t==="area"||t==="line"||t==="scatter"||t==="bubble"||t==="radar",l=e.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var c,d=[],p=[],x={hoverArea:l,elGrid:o,tooltipEl:i,tooltipY:d,tooltipX:p,ttItems:this.ttItems};if(e.globals.axisCharts&&(n?c=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?c=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):t!=="heatmap"&&t!=="treemap"||(c=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),c&&c.length))for(var b=0;b<c.length;b++)d.push(c[b].getAttribute("cy")),p.push(c[b].getAttribute("cx"));if(e.globals.xyCharts&&!this.showOnIntersect||e.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([l],x);else if(a&&!e.globals.comboCharts||n&&this.showOnIntersect)this.addDatapointEventsListeners(x);else if(!e.globals.axisCharts||t==="heatmap"||t==="treemap"){var y=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(y,x)}if(this.showOnIntersect){var C=e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");C.length>0&&this.addPathsEventListeners(C,x),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(x)}}},{key:"drawFixedTooltipRect",value:function(){var e=this.w,t=this.getElTooltip(),i=t.getBoundingClientRect(),a=i.width+10,n=i.height+10,l=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,c=this.tConfig.fixed.position.toLowerCase();return c.indexOf("right")>-1&&(l=l+e.globals.svgWidth-a+10),c.indexOf("bottom")>-1&&(o=o+e.globals.svgHeight-n-10),t.style.left=l+"px",t.style.top=o+"px",{x:l,y:o,ttWidth:a,ttHeight:n}}},{key:"addDatapointEventsListeners",value:function(e){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(t,e)}},{key:"addPathsEventListeners",value:function(e,t){for(var i=this,a=function(l){var o={paths:e[l],tooltipEl:t.tooltipEl,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:t.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map(function(c){return e[l].addEventListener(c,i.onSeriesHover.bind(i,o),{capture:!1,passive:!0})})},n=0;n<e.length;n++)a(n)}},{key:"onSeriesHover",value:function(e,t){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(e,t):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout(function(){i.seriesHover(e,t)},100-a))}},{key:"seriesHover",value:function(e,t){var i=this;this.lastHoverTime=Date.now();var a=[],n=this.w;n.config.chart.group&&(a=this.ctx.getGroupedCharts()),n.globals.axisCharts&&(n.globals.minX===-1/0&&n.globals.maxX===1/0||n.globals.dataPoints===0)||(a.length?a.forEach(function(l){var o=i.getElTooltip(l),c={paths:e.paths,tooltipEl:o,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:l.w.globals.tooltip.ttItems};l.w.globals.minX===i.w.globals.minX&&l.w.globals.maxX===i.w.globals.maxX&&l.w.globals.tooltip.seriesHoverByContext({chartCtx:l,ttCtx:l.w.globals.tooltip,opt:c,e:t})}):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:e,e:t}))}},{key:"seriesHoverByContext",value:function(e){var t=e.chartCtx,i=e.ttCtx,a=e.opt,n=e.e,l=t.w,o=this.getElTooltip();o&&(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=n,i.tooltipUtil.hasBars()&&!l.globals.comboCharts&&!i.isBarShared&&this.tConfig.onDatasetHover.highlightDataSeries&&new $e(t).toggleSeriesOnHover(n,n.target.parentNode),i.fixedTooltip&&i.drawFixedTooltipRect(),l.globals.axisCharts?i.axisChartsTooltips({e:n,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:n,opt:a,tooltipRect:i.tooltipRect}))}},{key:"axisChartsTooltips",value:function(e){var t,i,a=e.e,n=e.opt,l=this.w,o=n.elGrid.getBoundingClientRect(),c=a.type==="touchmove"?a.touches[0].clientX:a.clientX,d=a.type==="touchmove"?a.touches[0].clientY:a.clientY;if(this.clientY=d,this.clientX=c,l.globals.capturedSeriesIndex=-1,l.globals.capturedDataPointIndex=-1,d<o.top||d>o.top+o.height)this.handleMouseOut(n);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!l.config.tooltip.shared){var p=parseInt(n.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(p)<0)return void this.handleMouseOut(n)}var x=this.getElTooltip(),b=this.getElXCrosshairs(),y=l.globals.xyCharts||l.config.chart.type==="bar"&&!l.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||l.globals.comboCharts&&this.tooltipUtil.hasBars();if(a.type==="mousemove"||a.type==="touchmove"||a.type==="mouseup"){if(l.globals.collapsedSeries.length+l.globals.ancillaryCollapsedSeries.length===l.globals.series.length)return;b!==null&&b.classList.add("apexcharts-active");var C=this.yaxisTooltips.filter(function(M){return M===!0});if(this.ycrosshairs!==null&&C.length&&this.ycrosshairs.classList.add("apexcharts-active"),y&&!this.showOnIntersect)this.handleStickyTooltip(a,c,d,n);else if(l.config.chart.type==="heatmap"||l.config.chart.type==="treemap"){var E=this.intersect.handleHeatTreeTooltip({e:a,opt:n,x:t,y:i,type:l.config.chart.type});t=E.x,i=E.y,x.style.left=t+"px",x.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:n}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:n,x:t,y:i});if(this.yaxisTooltips.length)for(var k=0;k<l.config.yaxis.length;k++)this.axesTooltip.drawYaxisTooltipText(k,d,this.xyRatios);n.tooltipEl.classList.add("apexcharts-active")}else a.type!=="mouseout"&&a.type!=="touchend"||this.handleMouseOut(n)}}},{key:"nonAxisChartsTooltips",value:function(e){var t=e.e,i=e.opt,a=e.tooltipRect,n=this.w,l=i.paths.getAttribute("rel"),o=this.getElTooltip(),c=n.globals.dom.elWrap.getBoundingClientRect();if(t.type==="mousemove"||t.type==="touchmove"){o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(l,10)-1,shared:!1});var d=n.globals.clientX-c.left-a.ttWidth/2,p=n.globals.clientY-c.top-a.ttHeight-10;if(o.style.left=d+"px",o.style.top=p+"px",n.config.legend.tooltipHoverFormatter){var x=l-1,b=(0,n.config.legend.tooltipHoverFormatter)(this.legendLabels[x].getAttribute("data:default-text"),{seriesIndex:x,dataPointIndex:x,w:n});this.legendLabels[x].innerHTML=b}}else t.type!=="mouseout"&&t.type!=="touchend"||(o.classList.remove("apexcharts-active"),n.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(y){var C=y.getAttribute("data:default-text");y.innerHTML=decodeURIComponent(C)}))}},{key:"handleStickyTooltip",value:function(e,t,i,a){var n=this.w,l=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:t,clientY:i}),o=l.j,c=l.capturedSeries,d=a.elGrid.getBoundingClientRect();l.hoverX<0||l.hoverX>d.width?this.handleMouseOut(a):c!==null?this.handleStickyCapturedSeries(e,c,a,o):(this.tooltipUtil.isXoverlap(o)||n.globals.isBarHorizontal)&&this.create(e,this,0,o,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(e,t,i,a){var n=this.w;if(!this.tConfig.shared&&n.globals.series[t][a]===null)return void this.handleMouseOut(i);n.globals.series[t][a]!==void 0?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(e,this,t,a,i.ttItems):this.create(e,this,t,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(e,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var e=this.w,t=new H(this.ctx),i=e.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)t.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(e){var t=this.w,i=this.getElXCrosshairs();if(e.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),t.config.chart.type!=="bubble"&&this.marker.resetPointsSize(),i!==null&&i.classList.remove("apexcharts-active"),this.ycrosshairs!==null&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){this.yaxisTTEls===null&&(this.yaxisTTEls=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}t.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(n){var l=n.getAttribute("data:default-text");n.innerHTML=decodeURIComponent(l)})}},{key:"markerClick",value:function(e,t,i){var a=this.w;typeof a.config.chart.events.markerClick=="function"&&a.config.chart.events.markerClick(e,this.ctx,{seriesIndex:t,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[e,this.ctx,{seriesIndex:t,dataPointIndex:i,w:a}])}},{key:"create",value:function(e,t,i,a,n){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=this.w,c=t;e.type==="mouseup"&&this.markerClick(e,i,a),l===null&&(l=this.tConfig.shared);var d=this.tooltipUtil.hasMarkers(),p=this.tooltipUtil.getElBars();if(o.config.legend.tooltipHoverFormatter){var x=o.config.legend.tooltipHoverFormatter,b=Array.from(this.legendLabels);b.forEach(function(v){var A=v.getAttribute("data:default-text");v.innerHTML=decodeURIComponent(A)});for(var y=0;y<b.length;y++){var C=b[y],E=parseInt(C.getAttribute("i"),10),k=decodeURIComponent(C.getAttribute("data:default-text")),M=x(k,{seriesIndex:l?E:i,dataPointIndex:a,w:o});if(l)C.innerHTML=o.globals.collapsedSeriesIndices.indexOf(E)<0?M:k;else if(C.innerHTML=E===i?M:k,i===E)break}}if(l){if(c.tooltipLabels.drawSeriesTexts({ttItems:n,i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),d&&(o.globals.markers.largestSize>0?c.marker.enlargePoints(a):c.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(p),this.barSeriesHeight>0)){var I=new H(this.ctx),R=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var f=0;f<R.length;f++)I.pathMouseEnter(R[f])}}else c.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:n,i,j:a}),this.tooltipUtil.hasBars()&&c.tooltipPosition.moveStickyTooltipOverBars(a),d&&c.tooltipPosition.moveMarkers(i,a)}}]),T}(),Ao=function(T){_(t,rt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return D(t,[{key:"draw",value:function(i,a){var n=this,l=this.w;this.graphics=new H(this.ctx),this.bar=new rt(this.ctx,this.xyRatios);var o=new ue(this.ctx,l);i=o.getLogSeries(i),this.yRatio=o.getLogYRatios(this.yRatio),this.barHelpers.initVariables(i),l.config.chart.stackType==="100%"&&(i=l.globals.seriesPercent.slice()),this.series=i,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var c=0;c<i.length;c++)i[c].length>0&&(this.totalItems+=i[c].length);for(var d=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),p=0,x=0,b=function(E,k){var M=void 0,I=void 0,R=void 0,f=void 0,v=[],A=[],L=l.globals.comboCharts?a[E]:E;n.yRatio.length>1&&(n.yaxisIndex=L),n.isReversed=l.config.yaxis[n.yaxisIndex]&&l.config.yaxis[n.yaxisIndex].reversed;var N=n.graphics.group({class:"apexcharts-series",seriesName:P.escapeString(l.globals.seriesNames[L]),rel:E+1,"data:realIndex":L});n.ctx.series.addCollapsedClassToSeries(N,L);var G=n.graphics.group({class:"apexcharts-datalabels","data:realIndex":L}),X=0,ne=0,ee=n.initialPositions(p,x,M,I,R,f);x=ee.y,X=ee.barHeight,I=ee.yDivision,f=ee.zeroW,p=ee.x,ne=ee.barWidth,M=ee.xDivision,R=ee.zeroH,n.yArrj=[],n.yArrjF=[],n.yArrjVal=[],n.xArrj=[],n.xArrjF=[],n.xArrjVal=[],n.prevY.length===1&&n.prevY[0].every(function(wt){return isNaN(wt)})&&(n.prevY[0]=n.prevY[0].map(function(wt){return R}),n.prevYF[0]=n.prevYF[0].map(function(wt){return 0}));for(var pe=0;pe<l.globals.dataPoints;pe++){var Ae=n.barHelpers.getStrokeWidth(E,pe,L),Je={indexes:{i:E,j:pe,realIndex:L,bc:k},strokeWidth:Ae,x:p,y:x,elSeries:N},Ye=null;n.isHorizontal?(Ye=n.drawStackedBarPaths(h(h({},Je),{},{zeroW:f,barHeight:X,yDivision:I})),ne=n.series[E][pe]/n.invertedYRatio):(Ye=n.drawStackedColumnPaths(h(h({},Je),{},{xDivision:M,barWidth:ne,zeroH:R})),X=n.series[E][pe]/n.yRatio[n.yaxisIndex]),x=Ye.y,p=Ye.x,v.push(p),A.push(x);var ft=n.barHelpers.getPathFillColor(i,E,pe,L);N=n.renderSeries({realIndex:L,pathFill:ft,j:pe,i:E,pathFrom:Ye.pathFrom,pathTo:Ye.pathTo,strokeWidth:Ae,elSeries:N,x:p,y:x,series:i,barHeight:X,barWidth:ne,elDataLabelsWrap:G,type:"bar",visibleSeries:0})}l.globals.seriesXvalues[L]=v,l.globals.seriesYvalues[L]=A,n.prevY.push(n.yArrj),n.prevYF.push(n.yArrjF),n.prevYVal.push(n.yArrjVal),n.prevX.push(n.xArrj),n.prevXF.push(n.xArrjF),n.prevXVal.push(n.xArrjVal),d.add(N)},y=0,C=0;y<i.length;y++,C++)b(y,C);return d}},{key:"initialPositions",value:function(i,a,n,l,o,c){var d,p,x=this.w;return this.isHorizontal?(d=(d=l=x.globals.gridHeight/x.globals.dataPoints)*parseInt(x.config.plotOptions.bar.barHeight,10)/100,c=this.baseLineInvertedY+x.globals.padHorizontal+(this.isReversed?x.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),a=(l-d)/2):(p=n=x.globals.gridWidth/x.globals.dataPoints,p=x.globals.isXNumeric&&x.globals.dataPoints>1?(n=x.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:p*parseInt(x.config.plotOptions.bar.columnWidth,10)/100,o=this.baseLineY[this.yaxisIndex]+(this.isReversed?x.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),i=x.globals.padHorizontal+(n-p)/2),{x:i,y:a,yDivision:l,xDivision:n,barHeight:d,barWidth:p,zeroH:o,zeroW:c}}},{key:"drawStackedBarPaths",value:function(i){for(var a,n=i.indexes,l=i.barHeight,o=i.strokeWidth,c=i.zeroW,d=i.x,p=i.y,x=i.yDivision,b=i.elSeries,y=this.w,C=p,E=n.i,k=n.j,M=0,I=0;I<this.prevXF.length;I++)M+=this.prevXF[I][k];if(E>0){var R=c;this.prevXVal[E-1][k]<0?R=this.series[E][k]>=0?this.prevX[E-1][k]+M-2*(this.isReversed?M:0):this.prevX[E-1][k]:this.prevXVal[E-1][k]>=0&&(R=this.series[E][k]>=0?this.prevX[E-1][k]:this.prevX[E-1][k]-M+2*(this.isReversed?M:0)),a=R}else a=c;d=this.series[E][k]===null?a:a+this.series[E][k]/this.invertedYRatio-2*(this.isReversed?this.series[E][k]/this.invertedYRatio:0);var f=this.barHelpers.getBarpaths({barYPosition:C,barHeight:l,x1:a,x2:d,strokeWidth:o,series:this.series,realIndex:n.realIndex,i:E,j:k,w:y});return this.barHelpers.barBackground({j:k,i:E,y1:C,y2:l,elSeries:b}),p+=x,{pathTo:f.pathTo,pathFrom:f.pathFrom,x:d,y:p}}},{key:"drawStackedColumnPaths",value:function(i){var a=i.indexes,n=i.x,l=i.y,o=i.xDivision,c=i.barWidth,d=i.zeroH;i.strokeWidth;var p=i.elSeries,x=this.w,b=a.i,y=a.j,C=a.bc;if(x.globals.isXNumeric){var E=x.globals.seriesX[b][y];E||(E=0),n=(E-x.globals.minX)/this.xRatio-c/2}for(var k,M=n,I=0,R=0;R<this.prevYF.length;R++)I+=isNaN(this.prevYF[R][y])?0:this.prevYF[R][y];if(b>0&&!x.globals.isXNumeric||b>0&&x.globals.isXNumeric&&x.globals.seriesX[b-1][y]===x.globals.seriesX[b][y]){var f,v,A=Math.min(this.yRatio.length+1,b+1);if(this.prevY[b-1]!==void 0){for(var L=1;L<A;L++)if(!isNaN(this.prevY[b-L][y])){v=this.prevY[b-L][y];break}}for(var N=1;N<A;N++){if(this.prevYVal[b-N][y]<0){f=this.series[b][y]>=0?v-I+2*(this.isReversed?I:0):v;break}if(this.prevYVal[b-N][y]>=0){f=this.series[b][y]>=0?v:v+I-2*(this.isReversed?I:0);break}}f===void 0&&(f=x.globals.gridHeight),k=this.prevYF[0].every(function(X){return X===0})&&this.prevYF.slice(1,b).every(function(X){return X.every(function(ne){return isNaN(ne)})})?x.globals.gridHeight-d:f}else k=x.globals.gridHeight-d;l=k-this.series[b][y]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[b][y]/this.yRatio[this.yaxisIndex]:0);var G=this.barHelpers.getColumnPaths({barXPosition:M,barWidth:c,y1:k,y2:l,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:a.realIndex,i:b,j:y,w:x});return this.barHelpers.barBackground({bc:C,j:y,i:b,x1:M,x2:c,elSeries:p}),n+=o,{pathTo:G.pathTo,pathFrom:G.pathFrom,x:x.globals.isXNumeric?n-o:n,y:l}}}]),t}(),Sn=function(T){_(t,rt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return D(t,[{key:"draw",value:function(i,a){var n=this,l=this.w,o=new H(this.ctx),c=new ge(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=l.config.plotOptions.bar.horizontal;var d=new ue(this.ctx,l);i=d.getLogSeries(i),this.series=i,this.yRatio=d.getLogYRatios(this.yRatio),this.barHelpers.initVariables(i);for(var p=o.group({class:"apexcharts-".concat(l.config.chart.type,"-series apexcharts-plot-series")}),x=function(y){n.isBoxPlot=l.config.chart.type==="boxPlot"||l.config.series[y].type==="boxPlot";var C,E,k,M,I=void 0,R=void 0,f=[],v=[],A=l.globals.comboCharts?a[y]:y,L=o.group({class:"apexcharts-series",seriesName:P.escapeString(l.globals.seriesNames[A]),rel:y+1,"data:realIndex":A});n.ctx.series.addCollapsedClassToSeries(L,A),i[y].length>0&&(n.visibleI=n.visibleI+1);var N,G;n.yRatio.length>1&&(n.yaxisIndex=A);var X=n.barHelpers.initialPositions();R=X.y,N=X.barHeight,E=X.yDivision,M=X.zeroW,I=X.x,G=X.barWidth,C=X.xDivision,k=X.zeroH,v.push(I+G/2);for(var ne=o.group({class:"apexcharts-datalabels","data:realIndex":A}),ee=function(Ae){var Je=n.barHelpers.getStrokeWidth(y,Ae,A),Ye=null,ft={indexes:{i:y,j:Ae,realIndex:A},x:I,y:R,strokeWidth:Je,elSeries:L};Ye=n.isHorizontal?n.drawHorizontalBoxPaths(h(h({},ft),{},{yDivision:E,barHeight:N,zeroW:M})):n.drawVerticalBoxPaths(h(h({},ft),{},{xDivision:C,barWidth:G,zeroH:k})),R=Ye.y,I=Ye.x,Ae>0&&v.push(I+G/2),f.push(R),Ye.pathTo.forEach(function(wt,Nt){var di=!n.isBoxPlot&&n.candlestickOptions.wick.useFillColor?Ye.color[Nt]:l.globals.stroke.colors[y],Oi=c.fillPath({seriesNumber:A,dataPointIndex:Ae,color:Ye.color[Nt],value:i[y][Ae]});n.renderSeries({realIndex:A,pathFill:Oi,lineFill:di,j:Ae,i:y,pathFrom:Ye.pathFrom,pathTo:wt,strokeWidth:Je,elSeries:L,x:I,y:R,series:i,barHeight:N,barWidth:G,elDataLabelsWrap:ne,visibleSeries:n.visibleI,type:l.config.chart.type})})},pe=0;pe<l.globals.dataPoints;pe++)ee(pe);l.globals.seriesXvalues[A]=v,l.globals.seriesYvalues[A]=f,p.add(L)},b=0;b<i.length;b++)x(b);return p}},{key:"drawVerticalBoxPaths",value:function(i){var a=i.indexes,n=i.x;i.y;var l=i.xDivision,o=i.barWidth,c=i.zeroH,d=i.strokeWidth,p=this.w,x=new H(this.ctx),b=a.i,y=a.j,C=!0,E=p.config.plotOptions.candlestick.colors.upward,k=p.config.plotOptions.candlestick.colors.downward,M="";this.isBoxPlot&&(M=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var I=this.yRatio[this.yaxisIndex],R=a.realIndex,f=this.getOHLCValue(R,y),v=c,A=c;f.o>f.c&&(C=!1);var L=Math.min(f.o,f.c),N=Math.max(f.o,f.c),G=f.m;p.globals.isXNumeric&&(n=(p.globals.seriesX[R][y]-p.globals.minX)/this.xRatio-o/2);var X=n+o*this.visibleI;this.series[b][y]===void 0||this.series[b][y]===null?(L=c,N=c):(L=c-L/I,N=c-N/I,v=c-f.h/I,A=c-f.l/I,G=c-f.m/I);var ne=x.move(X,c),ee=x.move(X+o/2,L);return p.globals.previousPaths.length>0&&(ee=this.getPreviousPath(R,y,!0)),ne=this.isBoxPlot?[x.move(X,L)+x.line(X+o/2,L)+x.line(X+o/2,v)+x.line(X+o/4,v)+x.line(X+o-o/4,v)+x.line(X+o/2,v)+x.line(X+o/2,L)+x.line(X+o,L)+x.line(X+o,G)+x.line(X,G)+x.line(X,L+d/2),x.move(X,G)+x.line(X+o,G)+x.line(X+o,N)+x.line(X+o/2,N)+x.line(X+o/2,A)+x.line(X+o-o/4,A)+x.line(X+o/4,A)+x.line(X+o/2,A)+x.line(X+o/2,N)+x.line(X,N)+x.line(X,G)+"z"]:[x.move(X,N)+x.line(X+o/2,N)+x.line(X+o/2,v)+x.line(X+o/2,N)+x.line(X+o,N)+x.line(X+o,L)+x.line(X+o/2,L)+x.line(X+o/2,A)+x.line(X+o/2,L)+x.line(X,L)+x.line(X,N-d/2)],ee+=x.move(X,L),p.globals.isXNumeric||(n+=l),{pathTo:ne,pathFrom:ee,x:n,y:N,barXPosition:X,color:this.isBoxPlot?M:C?[E]:[k]}}},{key:"drawHorizontalBoxPaths",value:function(i){var a=i.indexes;i.x;var n=i.y,l=i.yDivision,o=i.barHeight,c=i.zeroW,d=i.strokeWidth,p=this.w,x=new H(this.ctx),b=a.i,y=a.j,C=this.boxOptions.colors.lower;this.isBoxPlot&&(C=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var E=this.invertedYRatio,k=a.realIndex,M=this.getOHLCValue(k,y),I=c,R=c,f=Math.min(M.o,M.c),v=Math.max(M.o,M.c),A=M.m;p.globals.isXNumeric&&(n=(p.globals.seriesX[k][y]-p.globals.minX)/this.invertedXRatio-o/2);var L=n+o*this.visibleI;this.series[b][y]===void 0||this.series[b][y]===null?(f=c,v=c):(f=c+f/E,v=c+v/E,I=c+M.h/E,R=c+M.l/E,A=c+M.m/E);var N=x.move(c,L),G=x.move(f,L+o/2);return p.globals.previousPaths.length>0&&(G=this.getPreviousPath(k,y,!0)),N=[x.move(f,L)+x.line(f,L+o/2)+x.line(I,L+o/2)+x.line(I,L+o/2-o/4)+x.line(I,L+o/2+o/4)+x.line(I,L+o/2)+x.line(f,L+o/2)+x.line(f,L+o)+x.line(A,L+o)+x.line(A,L)+x.line(f+d/2,L),x.move(A,L)+x.line(A,L+o)+x.line(v,L+o)+x.line(v,L+o/2)+x.line(R,L+o/2)+x.line(R,L+o-o/4)+x.line(R,L+o/4)+x.line(R,L+o/2)+x.line(v,L+o/2)+x.line(v,L)+x.line(A,L)+"z"],G+=x.move(f,L),p.globals.isXNumeric||(n+=l),{pathTo:N,pathFrom:G,x:v,y:n,barYPosition:L,color:C}}},{key:"getOHLCValue",value:function(i,a){var n=this.w;return{o:this.isBoxPlot?n.globals.seriesCandleH[i][a]:n.globals.seriesCandleO[i][a],h:this.isBoxPlot?n.globals.seriesCandleO[i][a]:n.globals.seriesCandleH[i][a],m:n.globals.seriesCandleM[i][a],l:this.isBoxPlot?n.globals.seriesCandleC[i][a]:n.globals.seriesCandleL[i][a],c:this.isBoxPlot?n.globals.seriesCandleL[i][a]:n.globals.seriesCandleC[i][a]}}}]),t}(),ko=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"checkColorRange",value:function(){var e=this.w,t=!1,i=e.config.plotOptions[e.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map(function(a,n){a.from<=0&&(t=!0)}),t}},{key:"getShadeColor",value:function(e,t,i,a){var n=this.w,l=1,o=n.config.plotOptions[e].shadeIntensity,c=this.determineColor(e,t,i);n.globals.hasNegs||a?l=n.config.plotOptions[e].reverseNegativeShade?c.percent<0?c.percent/100*(1.25*o):(1-c.percent/100)*(1.25*o):c.percent<=0?1-(1+c.percent/100)*o:(1-c.percent/100)*o:(l=1-c.percent/100,e==="treemap"&&(l=(1-c.percent/100)*(1.25*o)));var d=c.color,p=new P;return n.config.plotOptions[e].enableShades&&(d=this.w.config.theme.mode==="dark"?P.hexToRgba(p.shadeColor(-1*l,c.color),n.config.fill.opacity):P.hexToRgba(p.shadeColor(l,c.color),n.config.fill.opacity)),{color:d,colorProps:c}}},{key:"determineColor",value:function(e,t,i){var a=this.w,n=a.globals.series[t][i],l=a.config.plotOptions[e],o=l.colorScale.inverse?i:t;l.distributed&&a.config.chart.type==="treemap"&&(o=i);var c=a.globals.colors[o],d=null,p=Math.min.apply(Math,K(a.globals.series[t])),x=Math.max.apply(Math,K(a.globals.series[t]));l.distributed||e!=="heatmap"||(p=a.globals.minY,x=a.globals.maxY),l.colorScale.min!==void 0&&(p=l.colorScale.min<a.globals.minY?l.colorScale.min:a.globals.minY,x=l.colorScale.max>a.globals.maxY?l.colorScale.max:a.globals.maxY);var b=Math.abs(x)+Math.abs(p),y=100*n/(b===0?b-1e-6:b);return l.colorScale.ranges.length>0&&l.colorScale.ranges.map(function(C,E){if(n>=C.from&&n<=C.to){c=C.color,d=C.foreColor?C.foreColor:null,p=C.from,x=C.to;var k=Math.abs(x)+Math.abs(p);y=100*n/(k===0?k-1e-6:k)}}),{color:c,foreColor:d,percent:y}}},{key:"calculateDataLabels",value:function(e){var t=e.text,i=e.x,a=e.y,n=e.i,l=e.j,o=e.colorProps,c=e.fontSize,d=this.w.config.dataLabels,p=new H(this.ctx),x=new Pe(this.ctx),b=null;if(d.enabled){b=p.group({class:"apexcharts-data-labels"});var y=d.offsetX,C=d.offsetY,E=i+y,k=a+parseFloat(d.style.fontSize)/3+C;x.plotDataLabelsText({x:E,y:k,text:t,i:n,j:l,color:o.foreColor,parent:b,fontSize:c,dataLabelsConfig:d})}return b}},{key:"addListeners",value:function(e){var t=new H(this.ctx);e.node.addEventListener("mouseenter",t.pathMouseEnter.bind(this,e)),e.node.addEventListener("mouseleave",t.pathMouseLeave.bind(this,e)),e.node.addEventListener("mousedown",t.pathMouseDown.bind(this,e))}}]),T}(),Nh=function(){function T(e,t){m(this,T),this.ctx=e,this.w=e.w,this.xRatio=t.xRatio,this.yRatio=t.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new ko(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return D(T,[{key:"draw",value:function(e){var t=this.w,i=new H(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(t.globals.cuid,")"));var n=t.globals.gridWidth/t.globals.dataPoints,l=t.globals.gridHeight/t.globals.series.length,o=0,c=!1;this.negRange=this.helpers.checkColorRange();var d=e.slice();t.config.yaxis[0].reversed&&(c=!0,d.reverse());for(var p=c?0:d.length-1;c?p<d.length:p>=0;c?p++:p--){var x=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:P.escapeString(t.globals.seriesNames[p]),rel:p+1,"data:realIndex":p});if(this.ctx.series.addCollapsedClassToSeries(x,p),t.config.chart.dropShadow.enabled){var b=t.config.chart.dropShadow;new Z(this.ctx).dropShadow(x,b,p)}for(var y=0,C=t.config.plotOptions.heatmap.shadeIntensity,E=0;E<d[p].length;E++){var k=this.helpers.getShadeColor(t.config.chart.type,p,E,this.negRange),M=k.color,I=k.colorProps;t.config.fill.type==="image"&&(M=new ge(this.ctx).fillPath({seriesNumber:p,dataPointIndex:E,opacity:t.globals.hasNegs?I.percent<0?1-(1+I.percent/100):C+I.percent/100:I.percent/100,patternID:P.randomId(),width:t.config.fill.image.width?t.config.fill.image.width:n,height:t.config.fill.image.height?t.config.fill.image.height:l}));var R=this.rectRadius,f=i.drawRect(y,o,n,l,R);if(f.attr({cx:y,cy:o}),f.node.classList.add("apexcharts-heatmap-rect"),x.add(f),f.attr({fill:M,i:p,index:p,j:E,val:d[p][E],"stroke-width":this.strokeWidth,stroke:t.config.plotOptions.heatmap.useFillColorAsStroke?M:t.globals.stroke.colors[0],color:M}),this.helpers.addListeners(f),t.config.chart.animations.enabled&&!t.globals.dataChanged){var v=1;t.globals.resized||(v=t.config.chart.animations.speed),this.animateHeatMap(f,y,o,n,l,v)}if(t.globals.dataChanged){var A=1;if(this.dynamicAnim.enabled&&t.globals.shouldAnimate){A=this.dynamicAnim.speed;var L=t.globals.previousPaths[p]&&t.globals.previousPaths[p][E]&&t.globals.previousPaths[p][E].color;L||(L="rgba(255, 255, 255, 0)"),this.animateHeatColor(f,P.isColorHex(L)?L:P.rgb2hex(L),P.isColorHex(M)?M:P.rgb2hex(M),A)}}var N=(0,t.config.dataLabels.formatter)(t.globals.series[p][E],{value:t.globals.series[p][E],seriesIndex:p,dataPointIndex:E,w:t}),G=this.helpers.calculateDataLabels({text:N,x:y+n/2,y:o+l/2,i:p,j:E,colorProps:I,series:d});G!==null&&x.add(G),y+=n}o+=l,a.add(x)}var X=t.globals.yAxisScale[0].result.slice();t.config.yaxis[0].reversed?X.unshift(""):X.push(""),t.globals.yAxisScale[0].result=X;var ne=t.globals.gridHeight/t.globals.series.length;return t.config.yaxis[0].labels.offsetY=-ne/2,a}},{key:"animateHeatMap",value:function(e,t,i,a,n,l){var o=new j(this.ctx);o.animateRect(e,{x:t+a/2,y:i+n/2,width:0,height:0},{x:t,y:i,width:a,height:n},l,function(){o.animationCompleted(e)})}},{key:"animateHeatColor",value:function(e,t,i,a){e.attr({fill:t}).animate(a).attr({fill:i})}}]),T}(),So=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"drawYAxisTexts",value:function(e,t,i,a){var n=this.w,l=n.config.yaxis[0],o=n.globals.yLabelFormatters[0];return new H(this.ctx).drawText({x:e+l.labels.offsetX,y:t+l.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:l.labels.style.fontSize,fontFamily:l.labels.style.fontFamily,foreColor:Array.isArray(l.labels.style.colors)?l.labels.style.colors[i]:l.labels.style.colors})}}]),T}(),Po=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w;var t=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=t.globals.stroke.colors!==void 0?t.globals.stroke.colors:t.globals.colors,this.defaultSize=Math.min(t.globals.gridWidth,t.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=t.globals.gridWidth/2,t.config.chart.type==="radialBar"?this.fullAngle=360:this.fullAngle=Math.abs(t.config.plotOptions.pie.endAngle-t.config.plotOptions.pie.startAngle),this.initialAngle=t.config.plotOptions.pie.startAngle%this.fullAngle,t.globals.radialSize=this.defaultSize/2.05-t.config.stroke.width-(t.config.chart.sparkline.enabled?0:t.config.chart.dropShadow.blur),this.donutSize=t.globals.radialSize*parseInt(t.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return D(T,[{key:"draw",value:function(e){var t=this,i=this.w,a=new H(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var n=0,l=0;l<e.length;l++)n+=P.negToZero(e[l]);var o=[],c=a.group();n===0&&(n=1e-5),e.forEach(function(L){t.maxY=Math.max(t.maxY,L)}),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),i.config.grid.position==="back"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret);for(var d=0;d<e.length;d++){var p=this.fullAngle*P.negToZero(e[d])/n;o.push(p),this.chartType==="polarArea"?(o[d]=this.fullAngle/e.length,this.sliceSizes.push(i.globals.radialSize*e[d]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var x,b=0,y=0;y<i.globals.previousPaths.length;y++)b+=P.negToZero(i.globals.previousPaths[y]);for(var C=0;C<i.globals.previousPaths.length;C++)x=this.fullAngle*P.negToZero(i.globals.previousPaths[C])/b,this.prevSectorAngleArr.push(x)}this.donutSize<0&&(this.donutSize=0);var E=i.config.plotOptions.pie.customScale,k=i.globals.gridWidth/2,M=i.globals.gridHeight/2,I=k-i.globals.gridWidth/2*E,R=M-i.globals.gridHeight/2*E;if(this.chartType==="donut"){var f=a.drawCircle(this.donutSize);f.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),c.add(f)}var v=this.drawArcs(o,e);if(this.sliceLabels.forEach(function(L){v.add(L)}),c.attr({transform:"translate(".concat(I,", ").concat(R,") scale(").concat(E,")")}),c.add(v),this.ret.add(c),this.donutDataLabels.show){var A=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:I,translateY:R});this.ret.add(A)}return i.config.grid.position==="front"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(e,t){var i=this.w,a=new Z(this.ctx),n=new H(this.ctx),l=new ge(this.ctx),o=n.group({class:"apexcharts-slices"}),c=this.initialAngle,d=this.initialAngle,p=this.initialAngle,x=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var b=0;b<e.length;b++){var y=n.group({class:"apexcharts-series apexcharts-pie-series",seriesName:P.escapeString(i.globals.seriesNames[b]),rel:b+1,"data:realIndex":b});o.add(y),d=x,p=(c=p)+e[b],x=d+this.prevSectorAngleArr[b];var C=p<c?this.fullAngle+p-c:p-c,E=l.fillPath({seriesNumber:b,size:this.sliceSizes[b],value:t[b]}),k=this.getChangedPath(d,x),M=n.drawPath({d:k,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[b]:this.lineColorArr,strokeWidth:0,fill:E,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(b)});if(M.attr({index:0,j:b}),a.setSelectionFilter(M,0,b),i.config.chart.dropShadow.enabled){var I=i.config.chart.dropShadow;a.dropShadow(M,I,b)}this.addListeners(M,this.donutDataLabels),H.setAttrs(M.node,{"data:angle":C,"data:startAngle":c,"data:strokeWidth":this.strokeWidth,"data:value":t[b]});var R={x:0,y:0};this.chartType==="pie"||this.chartType==="polarArea"?R=P.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(c+C/2)%this.fullAngle):this.chartType==="donut"&&(R=P.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(c+C/2)%this.fullAngle)),y.add(M);var f=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):((f=C/this.fullAngle*i.config.chart.animations.speed)===0&&(f=1),this.animDur=f+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(M,{size:this.sliceSizes[b],endAngle:p,startAngle:c,prevStartAngle:d,prevEndAngle:x,animateStartingPos:!0,i:b,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(M,{size:this.sliceSizes[b],endAngle:p,startAngle:c,i:b,totalItems:e.length-1,animBeginArr:this.animBeginArr,dur:f}),i.config.plotOptions.pie.expandOnClick&&this.chartType!=="polarArea"&&M.click(this.pieClicked.bind(this,b)),i.globals.selectedDataPoints[0]!==void 0&&i.globals.selectedDataPoints[0].indexOf(b)>-1&&this.pieClicked(b),i.config.dataLabels.enabled){var v=R.x,A=R.y,L=100*C/this.fullAngle+"%";if(C!==0&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<e[b]){var N=i.config.dataLabels.formatter;N!==void 0&&(L=N(i.globals.seriesPercent[b][0],{seriesIndex:b,w:i}));var G=i.globals.dataLabels.style.colors[b],X=n.group({class:"apexcharts-datalabels"}),ne=n.drawText({x:v,y:A,text:L,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:G});if(X.add(ne),i.config.dataLabels.dropShadow.enabled){var ee=i.config.dataLabels.dropShadow;a.dropShadow(ne,ee)}ne.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&i.globals.resized===!1&&(ne.node.classList.add("apexcharts-pie-label-delay"),ne.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(X)}}}return o}},{key:"addListeners",value:function(e,t){var i=new H(this.ctx);e.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,e)),e.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,e)),e.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,e.node,t)),e.node.addEventListener("mousedown",i.pathMouseDown.bind(this,e)),this.donutDataLabels.total.showAlways||(e.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,e.node,t)),e.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,e.node,t)))}},{key:"animatePaths",value:function(e,t){var i=this.w,a=t.endAngle<t.startAngle?this.fullAngle+t.endAngle-t.startAngle:t.endAngle-t.startAngle,n=a,l=t.startAngle,o=t.startAngle;t.prevStartAngle!==void 0&&t.prevEndAngle!==void 0&&(l=t.prevEndAngle,n=t.prevEndAngle<t.prevStartAngle?this.fullAngle+t.prevEndAngle-t.prevStartAngle:t.prevEndAngle-t.prevStartAngle),t.i===i.config.series.length-1&&(a+o>this.fullAngle?t.endAngle=t.endAngle-(a+o):a+o<this.fullAngle&&(t.endAngle=t.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(e,l,o,a,n,t)}},{key:"animateArc",value:function(e,t,i,a,n,l){var o,c=this,d=this.w,p=new j(this.ctx),x=l.size;(isNaN(t)||isNaN(n))&&(t=i,n=a,l.dur=0);var b=a,y=i,C=t<i?this.fullAngle+t-i:t-i;d.globals.dataChanged&&l.shouldSetPrevPaths&&l.prevEndAngle&&(o=c.getPiePath({me:c,startAngle:l.prevStartAngle,angle:l.prevEndAngle<l.prevStartAngle?this.fullAngle+l.prevEndAngle-l.prevStartAngle:l.prevEndAngle-l.prevStartAngle,size:x}),e.attr({d:o})),l.dur!==0?e.animate(l.dur,d.globals.easing,l.animBeginArr[l.i]).afterAll(function(){c.chartType!=="pie"&&c.chartType!=="donut"&&c.chartType!=="polarArea"||this.animate(d.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":c.strokeWidth}),l.i===d.config.series.length-1&&p.animationCompleted(e)}).during(function(E){b=C+(a-C)*E,l.animateStartingPos&&(b=n+(a-n)*E,y=t-n+(i-(t-n))*E),o=c.getPiePath({me:c,startAngle:y,angle:b,size:x}),e.node.setAttribute("data:pathOrig",o),e.attr({d:o})}):(o=c.getPiePath({me:c,startAngle:y,angle:a,size:x}),l.isTrack||(d.globals.animationEnded=!0),e.node.setAttribute("data:pathOrig",o),e.attr({d:o,"stroke-width":c.strokeWidth}))}},{key:"pieClicked",value:function(e){var t,i=this.w,a=this,n=a.sliceSizes[e]+(i.config.plotOptions.pie.expandOnClick?4:0),l=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(e)).members[0];if(l.attr("data:pieClicked")!=="true"){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,function(x){x.setAttribute("data:pieClicked","false");var b=x.getAttribute("data:pathOrig");x.setAttribute("d",b)}),l.attr("data:pieClicked","true");var c=parseInt(l.attr("data:startAngle"),10),d=parseInt(l.attr("data:angle"),10);t=a.getPiePath({me:a,startAngle:c,angle:d,size:n}),d!==360&&l.plot(t)}else{l.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(l.node,this.donutDataLabels);var p=l.attr("data:pathOrig");l.attr({d:p})}}},{key:"getChangedPath",value:function(e,t){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:e,angle:t-e,size:this.size})),i}},{key:"getPiePath",value:function(e){var t=e.me,i=e.startAngle,a=e.angle,n=e.size,l=i,o=Math.PI*(l-90)/180,c=a+i;Math.ceil(c)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(c=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(c)>this.fullAngle&&(c-=this.fullAngle);var d=Math.PI*(c-90)/180,p=t.centerX+n*Math.cos(o),x=t.centerY+n*Math.sin(o),b=t.centerX+n*Math.cos(d),y=t.centerY+n*Math.sin(d),C=P.polarToCartesian(t.centerX,t.centerY,t.donutSize,c),E=P.polarToCartesian(t.centerX,t.centerY,t.donutSize,l),k=a>180?1:0,M=["M",p,x,"A",n,n,0,k,1,b,y];return t.chartType==="donut"?[].concat(M,["L",C.x,C.y,"A",t.donutSize,t.donutSize,0,k,0,E.x,E.y,"L",p,x,"z"]).join(" "):t.chartType==="pie"||t.chartType==="polarArea"?[].concat(M,["L",t.centerX,t.centerY,"L",p,x]).join(" "):[].concat(M).join(" ")}},{key:"drawPolarElements",value:function(e){var t=this.w,i=new Y(this.ctx),a=new H(this.ctx),n=new So(this.ctx),l=a.group(),o=a.group(),c=i.niceScale(0,Math.ceil(this.maxY),t.config.yaxis[0].tickAmount,0,!0),d=c.result.reverse(),p=c.result.length;this.maxY=c.niceMax;for(var x=t.globals.radialSize,b=x/(p-1),y=0;y<p-1;y++){var C=a.drawCircle(x);if(C.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":t.config.plotOptions.polarArea.rings.strokeWidth,stroke:t.config.plotOptions.polarArea.rings.strokeColor}),t.config.yaxis[0].show){var E=n.drawYAxisTexts(this.centerX,this.centerY-x+parseInt(t.config.yaxis[0].labels.style.fontSize,10)/2,y,d[y]);o.add(E)}l.add(C),x-=b}this.drawSpokes(e),e.add(l),e.add(o)}},{key:"renderInnerDataLabels",value:function(e,t){var i=this.w,a=new H(this.ctx),n=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(t.translateX?t.translateX:0,", ").concat(t.translateY?t.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),l=e.total.show;n.node.style.opacity=t.opacity;var o,c,d=t.centerX,p=t.centerY;o=e.name.color===void 0?i.globals.colors[0]:e.name.color;var x=e.name.fontSize,b=e.name.fontFamily,y=e.name.fontWeight;c=e.value.color===void 0?i.config.chart.foreColor:e.value.color;var C=e.value.formatter,E="",k="";if(l?(o=e.total.color,x=e.total.fontSize,b=e.total.fontFamily,y=e.total.fontWeight,k=e.total.label,E=e.total.formatter(i)):i.globals.series.length===1&&(E=C(i.globals.series[0],i),k=i.globals.seriesNames[0]),k&&(k=e.name.formatter(k,e.total.show,i)),e.name.show){var M=a.drawText({x:d,y:p+parseFloat(e.name.offsetY),text:k,textAnchor:"middle",foreColor:o,fontSize:x,fontWeight:y,fontFamily:b});M.node.classList.add("apexcharts-datalabel-label"),n.add(M)}if(e.value.show){var I=e.name.show?parseFloat(e.value.offsetY)+16:e.value.offsetY,R=a.drawText({x:d,y:p+I,text:E,textAnchor:"middle",foreColor:c,fontWeight:e.value.fontWeight,fontSize:e.value.fontSize,fontFamily:e.value.fontFamily});R.node.classList.add("apexcharts-datalabel-value"),n.add(R)}return n}},{key:"printInnerLabels",value:function(e,t,i,a){var n,l=this.w;a?n=e.name.color===void 0?l.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:e.name.color:l.globals.series.length>1&&e.total.show&&(n=e.total.color);var o=l.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),c=l.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,e.value.formatter)(i,l),a||typeof e.total.formatter!="function"||(i=e.total.formatter(l));var d=t===e.total.label;t=e.name.formatter(t,d,l),o!==null&&(o.textContent=t),c!==null&&(c.textContent=i),o!==null&&(o.style.fill=n)}},{key:"printDataLabelsInner",value:function(e,t){var i=this.w,a=e.getAttribute("data:value"),n=i.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(t,n,a,e);var l=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");l!==null&&(l.style.opacity=1)}},{key:"drawSpokes",value:function(e){var t=this,i=this.w,a=new H(this.ctx),n=i.config.plotOptions.polarArea.spokes;if(n.strokeWidth!==0){for(var l=[],o=360/i.globals.series.length,c=0;c<i.globals.series.length;c++)l.push(P.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*c));l.forEach(function(d,p){var x=a.drawLine(d.x,d.y,t.centerX,t.centerY,Array.isArray(n.connectorColors)?n.connectorColors[p]:n.connectorColors);e.add(x)})}}},{key:"revertDataLabelsInner",value:function(e,t,i){var a=this,n=this.w,l=n.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),o=!1,c=n.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),d=function(b){var y=b.makeSliceOut,C=b.printLabel;Array.prototype.forEach.call(c,function(E){E.getAttribute("data:pieClicked")==="true"&&(y&&(o=!0),C&&a.printDataLabelsInner(E,t))})};if(d({makeSliceOut:!0,printLabel:!1}),t.total.show&&n.globals.series.length>1)o&&!t.total.showAlways?d({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(t,t.total.label,t.total.formatter(n));else if(d({makeSliceOut:!1,printLabel:!0}),!o)if(n.globals.selectedDataPoints.length&&n.globals.series.length>1)if(n.globals.selectedDataPoints[0].length>0){var p=n.globals.selectedDataPoints[0],x=n.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(p));this.printDataLabelsInner(x,t)}else l&&n.globals.selectedDataPoints.length&&n.globals.selectedDataPoints[0].length===0&&(l.style.opacity=0);else l&&n.globals.series.length>1&&(l.style.opacity=0)}}]),T}(),Hh=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var t=this.w;this.graphics=new H(this.ctx),this.lineColorArr=t.globals.stroke.colors!==void 0?t.globals.stroke.colors:t.globals.colors,this.defaultSize=t.globals.svgHeight<t.globals.svgWidth?t.globals.gridHeight+1.5*t.globals.goldenPadding:t.globals.gridWidth,this.isLog=t.config.yaxis[0].logarithmic,this.coreUtils=new ue(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(t.globals.maxY,0):t.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):t.globals.minY,this.polygons=t.config.plotOptions.radar.polygons,this.strokeWidth=t.config.stroke.show?t.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-t.config.chart.dropShadow.blur,t.config.xaxis.labels.show&&(this.size=this.size-t.globals.xAxisLabelsWidth/1.75),t.config.plotOptions.radar.size!==void 0&&(this.size=t.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return D(T,[{key:"draw",value:function(e){var t=this,i=this.w,a=new ge(this.ctx),n=[],l=new Pe(this.ctx);e.length&&(this.dataPointsLen=e[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var o=i.globals.gridWidth/2,c=i.globals.gridHeight/2,d=o+i.config.plotOptions.radar.offsetX,p=c+i.config.plotOptions.radar.offsetY,x=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(d||0,", ").concat(p||0,")")}),b=[],y=null,C=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),e.forEach(function(k,M){var I=k.length===i.globals.dataPoints,R=t.graphics.group().attr({class:"apexcharts-series","data:longestSeries":I,seriesName:P.escapeString(i.globals.seriesNames[M]),rel:M+1,"data:realIndex":M});t.dataRadiusOfPercent[M]=[],t.dataRadius[M]=[],t.angleArr[M]=[],k.forEach(function(pe,Ae){var Je=Math.abs(t.maxValue-t.minValue);pe+=Math.abs(t.minValue),t.isLog&&(pe=t.coreUtils.getLogVal(pe,0)),t.dataRadiusOfPercent[M][Ae]=pe/Je,t.dataRadius[M][Ae]=t.dataRadiusOfPercent[M][Ae]*t.size,t.angleArr[M][Ae]=Ae*t.disAngle}),b=t.getDataPointsPos(t.dataRadius[M],t.angleArr[M]);var f=t.createPaths(b,{x:0,y:0});y=t.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),C=t.graphics.group({class:"apexcharts-datalabels","data:realIndex":M}),i.globals.delayedElements.push({el:y.node,index:M});var v={i:M,realIndex:M,animationDelay:M,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[M],strokeLineCap:i.config.stroke.lineCap},A=null;i.globals.previousPaths.length>0&&(A=t.getPreviousPath(M));for(var L=0;L<f.linePathsTo.length;L++){var N=t.graphics.renderPaths(h(h({},v),{},{pathFrom:A===null?f.linePathsFrom[L]:A,pathTo:f.linePathsTo[L],strokeWidth:Array.isArray(t.strokeWidth)?t.strokeWidth[M]:t.strokeWidth,fill:"none",drawShadow:!1}));R.add(N);var G=a.fillPath({seriesNumber:M}),X=t.graphics.renderPaths(h(h({},v),{},{pathFrom:A===null?f.areaPathsFrom[L]:A,pathTo:f.areaPathsTo[L],strokeWidth:0,fill:G,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var ne=new Z(t.ctx),ee=i.config.chart.dropShadow;ne.dropShadow(X,Object.assign({},ee,{noUserSpaceOnUse:!0}),M)}R.add(X)}k.forEach(function(pe,Ae){var Je=new je(t.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:M,dataPointIndex:Ae}),Ye=t.graphics.drawMarker(b[Ae].x,b[Ae].y,Je);Ye.attr("rel",Ae),Ye.attr("j",Ae),Ye.attr("index",M),Ye.node.setAttribute("default-marker-size",Je.pSize);var ft=t.graphics.group({class:"apexcharts-series-markers"});ft&&ft.add(Ye),y.add(ft),R.add(y);var wt=i.config.dataLabels;if(wt.enabled){var Nt=wt.formatter(i.globals.series[M][Ae],{seriesIndex:M,dataPointIndex:Ae,w:i});l.plotDataLabelsText({x:b[Ae].x,y:b[Ae].y,text:Nt,textAnchor:"middle",i:M,j:M,parent:C,offsetCorrection:!1,dataLabelsConfig:h({},wt)})}R.add(C)}),n.push(R)}),this.drawPolygons({parent:x}),i.config.xaxis.labels.show){var E=this.drawXAxisTexts();x.add(E)}return n.forEach(function(k){x.add(k)}),x.add(this.yaxisLabels),x}},{key:"drawPolygons",value:function(e){for(var t=this,i=this.w,a=e.parent,n=new So(this.ctx),l=i.globals.yAxisScale[0].result.reverse(),o=l.length,c=[],d=this.size/(o-1),p=0;p<o;p++)c[p]=d*p;c.reverse();var x=[],b=[];c.forEach(function(y,C){var E=P.getPolygonPos(y,t.dataPointsLen),k="";E.forEach(function(M,I){if(C===0){var R=t.graphics.drawLine(M.x,M.y,0,0,Array.isArray(t.polygons.connectorColors)?t.polygons.connectorColors[I]:t.polygons.connectorColors);b.push(R)}I===0&&t.yaxisLabelsTextsPos.push({x:M.x,y:M.y}),k+=M.x+","+M.y+" "}),x.push(k)}),x.forEach(function(y,C){var E=t.polygons.strokeColors,k=t.polygons.strokeWidth,M=t.graphics.drawPolygon(y,Array.isArray(E)?E[C]:E,Array.isArray(k)?k[C]:k,i.globals.radarPolygons.fill.colors[C]);a.add(M)}),b.forEach(function(y){a.add(y)}),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach(function(y,C){var E=n.drawYAxisTexts(y.x,y.y,C,l[C]);t.yaxisLabels.add(E)})}},{key:"drawXAxisTexts",value:function(){var e=this,t=this.w,i=t.config.xaxis.labels,a=this.graphics.group({class:"apexcharts-xaxis"}),n=P.getPolygonPos(this.size,this.dataPointsLen);return t.globals.labels.forEach(function(l,o){var c=t.config.xaxis.labels.formatter,d=new Pe(e.ctx);if(n[o]){var p=e.getTextPos(n[o],e.size),x=c(l,{seriesIndex:-1,dataPointIndex:o,w:t});d.plotDataLabelsText({x:p.newX,y:p.newY,text:x,textAnchor:p.textAnchor,i:o,j:o,parent:a,color:Array.isArray(i.style.colors)&&i.style.colors[o]?i.style.colors[o]:"#a8a8a8",dataLabelsConfig:h({textAnchor:p.textAnchor,dropShadow:{enabled:!1}},i),offsetCorrection:!1})}}),a}},{key:"createPaths",value:function(e,t){var i=this,a=[],n=[],l=[],o=[];if(e.length){n=[this.graphics.move(t.x,t.y)],o=[this.graphics.move(t.x,t.y)];var c=this.graphics.move(e[0].x,e[0].y),d=this.graphics.move(e[0].x,e[0].y);e.forEach(function(p,x){c+=i.graphics.line(p.x,p.y),d+=i.graphics.line(p.x,p.y),x===e.length-1&&(c+="Z",d+="Z")}),a.push(c),l.push(d)}return{linePathsFrom:n,linePathsTo:a,areaPathsFrom:o,areaPathsTo:l}}},{key:"getTextPos",value:function(e,t){var i="middle",a=e.x,n=e.y;return Math.abs(e.x)>=10?e.x>0?(i="start",a+=10):e.x<0&&(i="end",a-=10):i="middle",Math.abs(e.y)>=t-10&&(e.y<0?n-=10:e.y>0&&(n+=10)),{textAnchor:i,newX:a,newY:n}}},{key:"getPreviousPath",value:function(e){for(var t=this.w,i=null,a=0;a<t.globals.previousPaths.length;a++){var n=t.globals.previousPaths[a];n.paths.length>0&&parseInt(n.realIndex,10)===parseInt(e,10)&&t.globals.previousPaths[a].paths[0]!==void 0&&(i=t.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.dataPointsLen;e=e||[],t=t||[];for(var a=[],n=0;n<i;n++){var l={};l.x=e[n]*Math.sin(t[n]),l.y=-e[n]*Math.cos(t[n]),a.push(l)}return a}}]),T}(),Xh=function(T){_(t,Po);var e=W(t);function t(i){var a;m(this,t),(a=e.call(this,i)).ctx=i,a.w=i.w,a.animBeginArr=[0],a.animDur=0;var n=a.w;return a.startAngle=n.config.plotOptions.radialBar.startAngle,a.endAngle=n.config.plotOptions.radialBar.endAngle,a.totalAngle=Math.abs(n.config.plotOptions.radialBar.endAngle-n.config.plotOptions.radialBar.startAngle),a.trackStartAngle=n.config.plotOptions.radialBar.track.startAngle,a.trackEndAngle=n.config.plotOptions.radialBar.track.endAngle,a.donutDataLabels=a.w.config.plotOptions.radialBar.dataLabels,a.radialDataLabels=a.donutDataLabels,a.trackStartAngle||(a.trackStartAngle=a.startAngle),a.trackEndAngle||(a.trackEndAngle=a.endAngle),a.endAngle===360&&(a.endAngle=359.99),a.margin=parseInt(n.config.plotOptions.radialBar.track.margin,10),a}return D(t,[{key:"draw",value:function(i){var a=this.w,n=new H(this.ctx),l=n.group({class:"apexcharts-radialbar"});if(a.globals.noData)return l;var o=n.group(),c=this.defaultSize/2,d=a.globals.gridWidth/2,p=this.defaultSize/2.05;a.config.chart.sparkline.enabled||(p=p-a.config.stroke.width-a.config.chart.dropShadow.blur);var x=a.globals.fill.colors;if(a.config.plotOptions.radialBar.track.show){var b=this.drawTracks({size:p,centerX:d,centerY:c,colorArr:x,series:i});o.add(b)}var y=this.drawArcs({size:p,centerX:d,centerY:c,colorArr:x,series:i}),C=360;a.config.plotOptions.radialBar.startAngle<0&&(C=this.totalAngle);var E=(360-C)/360;if(a.globals.radialSize=p-p*E,this.radialDataLabels.value.show){var k=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);a.globals.radialSize+=k*E}return o.add(y.g),a.config.plotOptions.radialBar.hollow.position==="front"&&(y.g.add(y.elHollow),y.dataLabels&&y.g.add(y.dataLabels)),l.add(o),l}},{key:"drawTracks",value:function(i){var a=this.w,n=new H(this.ctx),l=n.group({class:"apexcharts-tracks"}),o=new Z(this.ctx),c=new ge(this.ctx),d=this.getStrokeWidth(i);i.size=i.size-d/2;for(var p=0;p<i.series.length;p++){var x=n.group({class:"apexcharts-radialbar-track apexcharts-track"});l.add(x),x.attr({rel:p+1}),i.size=i.size-d-this.margin;var b=a.config.plotOptions.radialBar.track,y=c.fillPath({seriesNumber:0,size:i.size,fillColors:Array.isArray(b.background)?b.background[p]:b.background,solid:!0}),C=this.trackStartAngle,E=this.trackEndAngle;Math.abs(E)+Math.abs(C)>=360&&(E=360-Math.abs(this.startAngle)-.1);var k=n.drawPath({d:"",stroke:y,strokeWidth:d*parseInt(b.strokeWidth,10)/100,fill:"none",strokeOpacity:b.opacity,classes:"apexcharts-radialbar-area"});if(b.dropShadow.enabled){var M=b.dropShadow;o.dropShadow(k,M)}x.add(k),k.attr("id","apexcharts-radialbarTrack-"+p),this.animatePaths(k,{centerX:i.centerX,centerY:i.centerY,endAngle:E,startAngle:C,size:i.size,i:p,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:a.globals.easing})}return l}},{key:"drawArcs",value:function(i){var a=this.w,n=new H(this.ctx),l=new ge(this.ctx),o=new Z(this.ctx),c=n.group(),d=this.getStrokeWidth(i);i.size=i.size-d/2;var p=a.config.plotOptions.radialBar.hollow.background,x=i.size-d*i.series.length-this.margin*i.series.length-d*parseInt(a.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,b=x-a.config.plotOptions.radialBar.hollow.margin;a.config.plotOptions.radialBar.hollow.image!==void 0&&(p=this.drawHollowImage(i,c,x,p));var y=this.drawHollow({size:b,centerX:i.centerX,centerY:i.centerY,fill:p||"transparent"});if(a.config.plotOptions.radialBar.hollow.dropShadow.enabled){var C=a.config.plotOptions.radialBar.hollow.dropShadow;o.dropShadow(y,C)}var E=1;!this.radialDataLabels.total.show&&a.globals.series.length>1&&(E=0);var k=null;this.radialDataLabels.show&&(k=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:x,centerX:i.centerX,centerY:i.centerY,opacity:E})),a.config.plotOptions.radialBar.hollow.position==="back"&&(c.add(y),k&&c.add(k));var M=!1;a.config.plotOptions.radialBar.inverseOrder&&(M=!0);for(var I=M?i.series.length-1:0;M?I>=0:I<i.series.length;M?I--:I++){var R=n.group({class:"apexcharts-series apexcharts-radial-series",seriesName:P.escapeString(a.globals.seriesNames[I])});c.add(R),R.attr({rel:I+1,"data:realIndex":I}),this.ctx.series.addCollapsedClassToSeries(R,I),i.size=i.size-d-this.margin;var f=l.fillPath({seriesNumber:I,size:i.size,value:i.series[I]}),v=this.startAngle,A=void 0,L=P.negToZero(i.series[I]>100?100:i.series[I])/100,N=Math.round(this.totalAngle*L)+this.startAngle,G=void 0;a.globals.dataChanged&&(A=this.startAngle,G=Math.round(this.totalAngle*P.negToZero(a.globals.previousPaths[I])/100)+A),Math.abs(N)+Math.abs(v)>=360&&(N-=.01),Math.abs(G)+Math.abs(A)>=360&&(G-=.01);var X=N-v,ne=Array.isArray(a.config.stroke.dashArray)?a.config.stroke.dashArray[I]:a.config.stroke.dashArray,ee=n.drawPath({d:"",stroke:f,strokeWidth:d,fill:"none",fillOpacity:a.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+I,strokeDashArray:ne});if(H.setAttrs(ee.node,{"data:angle":X,"data:value":i.series[I]}),a.config.chart.dropShadow.enabled){var pe=a.config.chart.dropShadow;o.dropShadow(ee,pe,I)}o.setSelectionFilter(ee,0,I),this.addListeners(ee,this.radialDataLabels),R.add(ee),ee.attr({index:0,j:I});var Ae=0;!this.initialAnim||a.globals.resized||a.globals.dataChanged||(Ae=a.config.chart.animations.speed),a.globals.dataChanged&&(Ae=a.config.chart.animations.dynamicAnimation.speed),this.animDur=Ae/(1.2*i.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(ee,{centerX:i.centerX,centerY:i.centerY,endAngle:N,startAngle:v,prevEndAngle:G,prevStartAngle:A,size:i.size,i:I,totalItems:2,animBeginArr:this.animBeginArr,dur:Ae,shouldSetPrevPaths:!0,easing:a.globals.easing})}return{g:c,elHollow:y,dataLabels:k}}},{key:"drawHollow",value:function(i){var a=new H(this.ctx).drawCircle(2*i.size);return a.attr({class:"apexcharts-radialbar-hollow",cx:i.centerX,cy:i.centerY,r:i.size,fill:i.fill}),a}},{key:"drawHollowImage",value:function(i,a,n,l){var o=this.w,c=new ge(this.ctx),d=P.randomId(),p=o.config.plotOptions.radialBar.hollow.image;if(o.config.plotOptions.radialBar.hollow.imageClipped)c.clippedImgArea({width:n,height:n,image:p,patternID:"pattern".concat(o.globals.cuid).concat(d)}),l="url(#pattern".concat(o.globals.cuid).concat(d,")");else{var x=o.config.plotOptions.radialBar.hollow.imageWidth,b=o.config.plotOptions.radialBar.hollow.imageHeight;if(x===void 0&&b===void 0){var y=o.globals.dom.Paper.image(p).loaded(function(E){this.move(i.centerX-E.width/2+o.config.plotOptions.radialBar.hollow.imageOffsetX,i.centerY-E.height/2+o.config.plotOptions.radialBar.hollow.imageOffsetY)});a.add(y)}else{var C=o.globals.dom.Paper.image(p).loaded(function(E){this.move(i.centerX-x/2+o.config.plotOptions.radialBar.hollow.imageOffsetX,i.centerY-b/2+o.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(x,b)});a.add(C)}}return l}},{key:"getStrokeWidth",value:function(i){var a=this.w;return i.size*(100-parseInt(a.config.plotOptions.radialBar.hollow.size,10))/100/(i.series.length+1)-this.margin}}]),t}(),Yh=function(){function T(e){m(this,T),this.w=e.w,this.lineCtx=e}return D(T,[{key:"sameValueSeriesFix",value:function(e,t){var i=this.w;if(i.config.chart.type==="line"&&(i.config.fill.type==="gradient"||i.config.fill.type[e]==="gradient")&&new ue(this.lineCtx.ctx,i).seriesHaveSameValues(e)){var a=t[e].slice();a[a.length-1]=a[a.length-1]+1e-6,t[e]=a}return t}},{key:"calculatePoints",value:function(e){var t=e.series,i=e.realIndex,a=e.x,n=e.y,l=e.i,o=e.j,c=e.prevY,d=this.w,p=[],x=[];if(o===0){var b=this.lineCtx.categoryAxisCorrection+d.config.markers.offsetX;d.globals.isXNumeric&&(b=(d.globals.seriesX[i][0]-d.globals.minX)/this.lineCtx.xRatio+d.config.markers.offsetX),p.push(b),x.push(P.isNumber(t[l][0])?c+d.config.markers.offsetY:null),p.push(a+d.config.markers.offsetX),x.push(P.isNumber(t[l][o+1])?n+d.config.markers.offsetY:null)}else p.push(a+d.config.markers.offsetX),x.push(P.isNumber(t[l][o+1])?n+d.config.markers.offsetY:null);return{x:p,y:x}}},{key:"checkPreviousPaths",value:function(e){for(var t=e.pathFromLine,i=e.pathFromArea,a=e.realIndex,n=this.w,l=0;l<n.globals.previousPaths.length;l++){var o=n.globals.previousPaths[l];(o.type==="line"||o.type==="area")&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&(o.type==="line"?(this.lineCtx.appendPathFrom=!1,t=n.globals.previousPaths[l].paths[0].d):o.type==="area"&&(this.lineCtx.appendPathFrom=!1,i=n.globals.previousPaths[l].paths[0].d,n.config.stroke.show&&n.globals.previousPaths[l].paths[1]&&(t=n.globals.previousPaths[l].paths[1].d)))}return{pathFromLine:t,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(e){var t=e.i,i=e.series,a=e.prevY,n=e.lineYPosition,l=this.w;if(i[t][0]!==void 0)a=(n=l.config.chart.stacked&&t>0?this.lineCtx.prevSeriesY[t-1][0]:this.lineCtx.zeroY)-i[t][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[t][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(l.config.chart.stacked&&t>0&&i[t][0]===void 0){for(var o=t-1;o>=0;o--)if(i[o][0]!==null&&i[o][0]!==void 0){a=n=this.lineCtx.prevSeriesY[o][0];break}}return{prevY:a,lineYPosition:n}}}]),T}(),Pn=function(){function T(e,t,i){m(this,T),this.ctx=e,this.w=e.w,this.xyRatios=t,this.pointsChart=!(this.w.config.chart.type!=="bubble"&&this.w.config.chart.type!=="scatter")||i,this.scatter=new Te(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Yh(this),this.markers=new je(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return D(T,[{key:"draw",value:function(e,t,i){var a=this.w,n=new H(this.ctx),l=a.globals.comboCharts?t:a.config.chart.type,o=n.group({class:"apexcharts-".concat(l,"-series apexcharts-plot-series")}),c=new ue(this.ctx,a);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,e=c.getLogSeries(e),this.yRatio=c.getLogYRatios(this.yRatio);for(var d=[],p=0;p<e.length;p++){e=this.lineHelpers.sameValueSeriesFix(p,e);var x=a.globals.comboCharts?i[p]:p;this._initSerieVariables(e,p,x);var b=[],y=[],C=a.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,x),a.globals.isXNumeric&&a.globals.seriesX.length>0&&(C=(a.globals.seriesX[x][0]-a.globals.minX)/this.xRatio),y.push(C);var E,k=C,M=k,I=this.zeroY;I=this.lineHelpers.determineFirstPrevY({i:p,series:e,prevY:I,lineYPosition:0}).prevY,b.push(I),E=I;var R=this._calculatePathsFrom({series:e,i:p,realIndex:x,prevX:M,prevY:I}),f=this._iterateOverDataPoints({series:e,realIndex:x,i:p,x:C,y:1,pX:k,pY:E,pathsFrom:R,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:y,yArrj:b});this._handlePaths({type:l,realIndex:x,i:p,paths:f}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),d.push(this.elSeries)}if(a.config.chart.stacked)for(var v=d.length;v>0;v--)o.add(d[v-1]);else for(var A=0;A<d.length;A++)o.add(d[A]);return o}},{key:"_initSerieVariables",value:function(e,t,i){var a=this.w,n=new H(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-(a.config.xaxis.tickPlacement==="on"?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||a.config.plotOptions.area.fillTo==="end")&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=n.group({class:"apexcharts-series",seriesName:P.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=n.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=n.group({class:"apexcharts-datalabels","data:realIndex":i});var l=e[t].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":l,rel:t+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(e){var t,i,a,n,l=e.series,o=e.i,c=e.realIndex,d=e.prevX,p=e.prevY,x=this.w,b=new H(this.ctx);if(l[o][0]===null){for(var y=0;y<l[o].length;y++)if(l[o][y]!==null){d=this.xDivision*y,p=this.zeroY-l[o][y]/this.yRatio[this.yaxisIndex],t=b.move(d,p),i=b.move(d,this.areaBottomY);break}}else t=b.move(d,p),i=b.move(d,this.areaBottomY)+b.line(d,p);if(a=b.move(-1,this.zeroY)+b.line(-1,this.zeroY),n=b.move(-1,this.zeroY)+b.line(-1,this.zeroY),x.globals.previousPaths.length>0){var C=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:n,realIndex:c});a=C.pathFromLine,n=C.pathFromArea}return{prevX:d,prevY:p,linePath:t,areaPath:i,pathFromLine:a,pathFromArea:n}}},{key:"_handlePaths",value:function(e){var t=e.type,i=e.realIndex,a=e.i,n=e.paths,l=this.w,o=new H(this.ctx),c=new ge(this.ctx);this.prevSeriesY.push(n.yArrj),l.globals.seriesXvalues[i]=n.xArrj,l.globals.seriesYvalues[i]=n.yArrj;var d=l.config.forecastDataPoints;if(d.count>0){var p=l.globals.seriesXvalues[i][l.globals.seriesXvalues[i].length-d.count-1],x=o.drawRect(p,0,l.globals.gridWidth,l.globals.gridHeight,0);l.globals.dom.elForecastMask.appendChild(x.node);var b=o.drawRect(0,0,p,l.globals.gridHeight,0);l.globals.dom.elNonForecastMask.appendChild(b.node)}this.pointsChart||l.globals.delayedElements.push({el:this.elPointsMain.node,index:i});var y={i:a,realIndex:i,animationDelay:a,initialSpeed:l.config.chart.animations.speed,dataChangeSpeed:l.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(t)};if(t==="area")for(var C=c.fillPath({seriesNumber:i}),E=0;E<n.areaPaths.length;E++){var k=o.renderPaths(h(h({},y),{},{pathFrom:n.pathFromArea,pathTo:n.areaPaths[E],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:C}));this.elSeries.add(k)}if(l.config.stroke.show&&!this.pointsChart){var M=null;if(t==="line")M=c.fillPath({seriesNumber:i,i:a});else if(l.config.stroke.fill.type==="solid")M=l.globals.stroke.colors[i];else{var I=l.config.fill;l.config.fill=l.config.stroke.fill,M=c.fillPath({seriesNumber:i,i:a}),l.config.fill=I}for(var R=0;R<n.linePaths.length;R++){var f=h(h({},y),{},{pathFrom:n.pathFromLine,pathTo:n.linePaths[R],stroke:M,strokeWidth:this.strokeWidth,strokeLineCap:l.config.stroke.lineCap,fill:"none"}),v=o.renderPaths(f);if(this.elSeries.add(v),d.count>0){var A=o.renderPaths(f);A.node.setAttribute("stroke-dasharray",d.dashArray),d.strokeWidth&&A.node.setAttribute("stroke-width",d.strokeWidth),this.elSeries.add(A),A.attr("clip-path","url(#forecastMask".concat(l.globals.cuid,")")),v.attr("clip-path","url(#nonForecastMask".concat(l.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(e){for(var t=e.series,i=e.realIndex,a=e.i,n=e.x,l=e.y,o=e.pX,c=e.pY,d=e.pathsFrom,p=e.linePaths,x=e.areaPaths,b=e.seriesIndex,y=e.lineYPosition,C=e.xArrj,E=e.yArrj,k=this.w,M=new H(this.ctx),I=this.yRatio,R=d.prevY,f=d.linePath,v=d.areaPath,A=d.pathFromLine,L=d.pathFromArea,N=P.isNumber(k.globals.minYArr[i])?k.globals.minYArr[i]:k.globals.minY,G=k.globals.dataPoints>1?k.globals.dataPoints-1:k.globals.dataPoints,X=0;X<G;X++){var ne=t[a][X+1]===void 0||t[a][X+1]===null;if(k.globals.isXNumeric){var ee=k.globals.seriesX[i][X+1];k.globals.seriesX[i][X+1]===void 0&&(ee=k.globals.seriesX[i][G-1]),n=(ee-k.globals.minX)/this.xRatio}else n+=this.xDivision;k.config.chart.stacked?a>0&&k.globals.collapsedSeries.length<k.config.series.length-1?y=this.prevSeriesY[function(Je){for(var Ye=Je,ft=0;ft<k.globals.series.length;ft++)if(k.globals.collapsedSeriesIndices.indexOf(Je)>-1){Ye--;break}return Ye>=0?Ye:0}(a-1)][X+1]:y=this.zeroY:y=this.zeroY,l=ne?y-N/I[this.yaxisIndex]+2*(this.isReversed?N/I[this.yaxisIndex]:0):y-t[a][X+1]/I[this.yaxisIndex]+2*(this.isReversed?t[a][X+1]/I[this.yaxisIndex]:0),C.push(n),E.push(l);var pe=this.lineHelpers.calculatePoints({series:t,x:n,y:l,realIndex:i,i:a,j:X,prevY:R}),Ae=this._createPaths({series:t,i:a,realIndex:i,j:X,x:n,y:l,pX:o,pY:c,linePath:f,areaPath:v,linePaths:p,areaPaths:x,seriesIndex:b});x=Ae.areaPaths,p=Ae.linePaths,o=Ae.pX,c=Ae.pY,v=Ae.areaPath,f=Ae.linePath,this.appendPathFrom&&(A+=M.line(n,this.zeroY),L+=M.line(n,this.zeroY)),this.handleNullDataPoints(t,pe,a,X,i),this._handleMarkersAndLabels({pointsPos:pe,series:t,x:n,y:l,prevY:R,i:a,j:X,realIndex:i})}return{yArrj:E,xArrj:C,pathFromArea:L,areaPaths:x,pathFromLine:A,linePaths:p}}},{key:"_handleMarkersAndLabels",value:function(e){var t=e.pointsPos;e.series,e.x,e.y,e.prevY;var i=e.i,a=e.j,n=e.realIndex,l=this.w,o=new Pe(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,a,{realIndex:n,pointsPos:t,zRatio:this.zRatio,elParent:this.elPointsMain});else{l.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var c=this.markers.plotChartMarkers(t,n,a+1);c!==null&&this.elPointsMain.add(c)}var d=o.drawDataLabel(t,n,a+1,null);d!==null&&this.elDataLabelsWrap.add(d)}},{key:"_createPaths",value:function(e){var t=e.series,i=e.i,a=e.realIndex,n=e.j,l=e.x,o=e.y,c=e.pX,d=e.pY,p=e.linePath,x=e.areaPath,b=e.linePaths,y=e.areaPaths,C=e.seriesIndex,E=this.w,k=new H(this.ctx),M=E.config.stroke.curve,I=this.areaBottomY;if(Array.isArray(E.config.stroke.curve)&&(M=Array.isArray(C)?E.config.stroke.curve[C[i]]:E.config.stroke.curve[i]),M==="smooth"){var R=.35*(l-c);E.globals.hasNullValues?(t[i][n]!==null&&(t[i][n+1]!==null?(p=k.move(c,d)+k.curve(c+R,d,l-R,o,l+1,o),x=k.move(c+1,d)+k.curve(c+R,d,l-R,o,l+1,o)+k.line(l,I)+k.line(c,I)+"z"):(p=k.move(c,d),x=k.move(c,d)+"z")),b.push(p),y.push(x)):(p+=k.curve(c+R,d,l-R,o,l,o),x+=k.curve(c+R,d,l-R,o,l,o)),c=l,d=o,n===t[i].length-2&&(x=x+k.curve(c,d,l,o,l,I)+k.move(l,o)+"z",E.globals.hasNullValues||(b.push(p),y.push(x)))}else{if(t[i][n+1]===null){p+=k.move(l,o);var f=E.globals.isXNumeric?(E.globals.seriesX[a][n]-E.globals.minX)/this.xRatio:l-this.xDivision;x=x+k.line(f,I)+k.move(l,o)+"z"}t[i][n]===null&&(p+=k.move(l,o),x+=k.move(l,I)),M==="stepline"?(p=p+k.line(l,null,"H")+k.line(null,o,"V"),x=x+k.line(l,null,"H")+k.line(null,o,"V")):M==="straight"&&(p+=k.line(l,o),x+=k.line(l,o)),n===t[i].length-2&&(x=x+k.line(l,I)+k.move(l,o)+"z",b.push(p),y.push(x))}return{linePaths:b,areaPaths:y,pX:c,pY:d,linePath:p,areaPath:x}}},{key:"handleNullDataPoints",value:function(e,t,i,a,n){var l=this.w;if(e[i][a]===null&&l.config.markers.showNullDataPoints||e[i].length===1){var o=this.markers.plotChartMarkers(t,n,a+1,this.strokeWidth-l.config.markers.strokeWidth/2,!0);o!==null&&this.elPointsMain.add(o)}}}]),T}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function T(o,c,d,p){this.xoffset=o,this.yoffset=c,this.height=p,this.width=d,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(x){var b,y=[],C=this.xoffset,E=this.yoffset,k=n(x)/this.height,M=n(x)/this.width;if(this.width>=this.height)for(b=0;b<x.length;b++)y.push([C,E,C+k,E+x[b]/k]),E+=x[b]/k;else for(b=0;b<x.length;b++)y.push([C,E,C+x[b]/M,E+M]),C+=x[b]/M;return y},this.cutArea=function(x){var b;if(this.width>=this.height){var y=x/this.height,C=this.width-y;b=new T(this.xoffset+y,this.yoffset,C,this.height)}else{var E=x/this.width,k=this.height-E;b=new T(this.xoffset,this.yoffset+E,this.width,k)}return b}}function e(o,c,d,p,x){return p=p===void 0?0:p,x=x===void 0?0:x,function(b){var y,C,E=[];for(y=0;y<b.length;y++)for(C=0;C<b[y].length;C++)E.push(b[y][C]);return E}(t(function(b,y){var C,E=[],k=y/n(b);for(C=0;C<b.length;C++)E[C]=b[C]*k;return E}(o,c*d),[],new T(p,x,c,d),[]))}function t(o,c,d,p){var x,b,y;if(o.length!==0)return x=d.shortestEdge(),function(C,E,k){var M;if(C.length===0)return!0;(M=C.slice()).push(E);var I=i(C,k),R=i(M,k);return I>=R}(c,b=o[0],x)?(c.push(b),t(o.slice(1),c,d,p)):(y=d.cutArea(n(c),p),p.push(d.getCoordinates(c)),t(o,[],y,p)),p;p.push(d.getCoordinates(c))}function i(o,c){var d=Math.min.apply(Math,o),p=Math.max.apply(Math,o),x=n(o);return Math.max(Math.pow(c,2)*p/Math.pow(x,2),Math.pow(x,2)/(Math.pow(c,2)*d))}function a(o){return o&&o.constructor===Array}function n(o){var c,d=0;for(c=0;c<o.length;c++)d+=o[c];return d}function l(o){var c,d=0;if(a(o[0]))for(c=0;c<o.length;c++)d+=l(o[c]);else d=n(o);return d}return function o(c,d,p,x,b){x=x===void 0?0:x,b=b===void 0?0:b;var y,C,E=[],k=[];if(a(c[0])){for(C=0;C<c.length;C++)E[C]=l(c[C]);for(y=e(E,d,p,x,b),C=0;C<c.length;C++)k.push(o(c[C],y[C][2]-y[C][0],y[C][3]-y[C][1],y[C][0],y[C][1]))}else k=e(c,d,p,x,b);return k}}();var Ri,va,Wh=function(){function T(e,t){m(this,T),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new ko(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return D(T,[{key:"draw",value:function(e){var t=this,i=this.w,a=new H(this.ctx),n=new ge(this.ctx),l=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return l;var o=[];return e.forEach(function(c){var d=c.map(function(p){return Math.abs(p)});o.push(d)}),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach(function(c,d){c.data.forEach(function(p){Array.isArray(t.labels[d])||(t.labels[d]=[]),t.labels[d].push(p.x)})}),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach(function(c,d){var p=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:P.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});if(i.config.chart.dropShadow.enabled){var x=i.config.chart.dropShadow;new Z(t.ctx).dropShadow(l,x,d)}var b=a.group({class:"apexcharts-data-labels"});c.forEach(function(y,C){var E=y[0],k=y[1],M=y[2],I=y[3],R=a.drawRect(E,k,M-E,I-k,0,"#fff",1,t.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?v:i.globals.stroke.colors[d]);R.attr({cx:E,cy:k,index:d,i:d,j:C,width:M-E,height:I-k});var f=t.helpers.getShadeColor(i.config.chart.type,d,C,t.negRange),v=f.color;i.config.series[d].data[C]!==void 0&&i.config.series[d].data[C].fillColor&&(v=i.config.series[d].data[C].fillColor);var A=n.fillPath({color:v,seriesNumber:d,dataPointIndex:C});R.node.classList.add("apexcharts-treemap-rect"),R.attr({fill:A}),t.helpers.addListeners(R);var L={x:E+(M-E)/2,y:k+(I-k)/2,width:0,height:0},N={x:E,y:k,width:M-E,height:I-k};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var G=1;i.globals.resized||(G=i.config.chart.animations.speed),t.animateTreemap(R,L,N,G)}if(i.globals.dataChanged){var X=1;t.dynamicAnim.enabled&&i.globals.shouldAnimate&&(X=t.dynamicAnim.speed,i.globals.previousPaths[d]&&i.globals.previousPaths[d][C]&&i.globals.previousPaths[d][C].rect&&(L=i.globals.previousPaths[d][C].rect),t.animateTreemap(R,L,N,X))}var ne=t.getFontSize(y),ee=i.config.dataLabels.formatter(t.labels[d][C],{value:i.globals.series[d][C],seriesIndex:d,dataPointIndex:C,w:i}),pe=t.helpers.calculateDataLabels({text:ee,x:(E+M)/2,y:(k+I)/2+t.strokeWidth/2+ne/3,i:d,j:C,colorProps:f,fontSize:ne,series:e});i.config.dataLabels.enabled&&pe&&t.rotateToFitLabel(pe,ne,ee,E,k,M,I),p.add(R),pe!==null&&p.add(pe)}),p.add(b),l.add(p)}),l}},{key:"getFontSize",value:function(e){var t=this.w,i,a,n,l,o=function c(d){var p,x=0;if(Array.isArray(d[0]))for(p=0;p<d.length;p++)x+=c(d[p]);else for(p=0;p<d.length;p++)x+=d[p].length;return x}(this.labels)/function c(d){var p,x=0;if(Array.isArray(d[0]))for(p=0;p<d.length;p++)x+=c(d[p]);else for(p=0;p<d.length;p++)x+=1;return x}(this.labels);return i=e[2]-e[0],a=e[3]-e[1],n=i*a,l=Math.pow(n,.5),Math.min(l/o,parseInt(t.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(e,t,i,a,n,l,o){var c=new H(this.ctx),d=c.getTextRects(i,t);if(d.width+this.w.config.stroke.width+5>l-a&&d.width<=o-n){var p=c.rotateAroundCenter(e.node);e.node.setAttribute("transform","rotate(-90 ".concat(p.x," ").concat(p.y,")"))}}},{key:"animateTreemap",value:function(e,t,i,a){var n=new j(this.ctx);n.animateRect(e,{x:t.x,y:t.y,width:t.width,height:t.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,function(){n.animationCompleted(e)})}}]),T}(),Vh=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return D(T,[{key:"calculateTimeScaleTicks",value:function(e,t){var i=this,a=this.w;if(a.globals.allSeriesCollapsed)return a.globals.labels=[],a.globals.timescaleLabels=[],[];var n=new Ge(this.ctx),l=(t-e)/864e5;this.determineInterval(l),a.globals.disableZoomIn=!1,a.globals.disableZoomOut=!1,l<.00011574074074074075?a.globals.disableZoomIn=!0:l>5e4&&(a.globals.disableZoomOut=!0);var o=n.getTimeUnitsfromTimestamp(e,t,this.utc),c=a.globals.gridWidth/l,d=c/24,p=d/60,x=p/60,b=Math.floor(24*l),y=Math.floor(1440*l),C=Math.floor(86400*l),E=Math.floor(l),k=Math.floor(l/30),M=Math.floor(l/365),I={minMillisecond:o.minMillisecond,minSecond:o.minSecond,minMinute:o.minMinute,minHour:o.minHour,minDate:o.minDate,minMonth:o.minMonth,minYear:o.minYear},R={firstVal:I,currentMillisecond:I.minMillisecond,currentSecond:I.minSecond,currentMinute:I.minMinute,currentHour:I.minHour,currentMonthDate:I.minDate,currentDate:I.minDate,currentMonth:I.minMonth,currentYear:I.minYear,daysWidthOnXAxis:c,hoursWidthOnXAxis:d,minutesWidthOnXAxis:p,secondsWidthOnXAxis:x,numberOfSeconds:C,numberOfMinutes:y,numberOfHours:b,numberOfDays:E,numberOfMonths:k,numberOfYears:M};switch(this.tickInterval){case"years":this.generateYearScale(R);break;case"months":case"half_year":this.generateMonthScale(R);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(R);break;case"hours":this.generateHourScale(R);break;case"minutes_fives":case"minutes":this.generateMinuteScale(R);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(R)}var f=this.timeScaleArray.map(function(v){var A={position:v.position,unit:v.unit,year:v.year,day:v.day?v.day:1,hour:v.hour?v.hour:0,month:v.month+1};return v.unit==="month"?h(h({},A),{},{day:1,value:v.value+1}):v.unit==="day"||v.unit==="hour"?h(h({},A),{},{value:v.value}):v.unit==="minute"?h(h({},A),{},{value:v.value,minute:v.value}):v.unit==="second"?h(h({},A),{},{value:v.value,minute:v.minute,second:v.second}):v});return f.filter(function(v){var A=1,L=Math.ceil(a.globals.gridWidth/120),N=v.value;a.config.xaxis.tickAmount!==void 0&&(L=a.config.xaxis.tickAmount),f.length>L&&(A=Math.floor(f.length/L));var G=!1,X=!1;switch(i.tickInterval){case"years":v.unit==="year"&&(G=!0);break;case"half_year":A=7,v.unit==="year"&&(G=!0);break;case"months":A=1,v.unit==="year"&&(G=!0);break;case"months_fortnight":A=15,v.unit!=="year"&&v.unit!=="month"||(G=!0),N===30&&(X=!0);break;case"months_days":A=10,v.unit==="month"&&(G=!0),N===30&&(X=!0);break;case"week_days":A=8,v.unit==="month"&&(G=!0);break;case"days":A=1,v.unit==="month"&&(G=!0);break;case"hours":v.unit==="day"&&(G=!0);break;case"minutes_fives":N%5!=0&&(X=!0);break;case"seconds_tens":N%10!=0&&(X=!0);break;case"seconds_fives":N%5!=0&&(X=!0)}if(i.tickInterval==="hours"||i.tickInterval==="minutes_fives"||i.tickInterval==="seconds_tens"||i.tickInterval==="seconds_fives"){if(!X)return!0}else if((N%A==0||G)&&!X)return!0})}},{key:"recalcDimensionsBasedOnFormat",value:function(e,t){var i=this.w,a=this.formatDates(e),n=this.removeOverlappingTS(a);i.globals.timescaleLabels=n.slice(),new Xe(this.ctx).plotCoords()}},{key:"determineInterval",value:function(e){var t=24*e,i=60*t;switch(!0){case e/365>5:this.tickInterval="years";break;case e>800:this.tickInterval="half_year";break;case e>180:this.tickInterval="months";break;case e>90:this.tickInterval="months_fortnight";break;case e>60:this.tickInterval="months_days";break;case e>30:this.tickInterval="week_days";break;case e>2:this.tickInterval="days";break;case t>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(e){var t=e.firstVal,i=e.currentMonth,a=e.currentYear,n=e.daysWidthOnXAxis,l=e.numberOfYears,o=t.minYear,c=0,d=new Ge(this.ctx),p="year";if(t.minDate>1||t.minMonth>0){var x=d.determineRemainingDaysOfYear(t.minYear,t.minMonth,t.minDate);c=(d.determineDaysOfYear(t.minYear)-x+1)*n,o=t.minYear+1,this.timeScaleArray.push({position:c,value:o,unit:p,year:o,month:P.monthMod(i+1)})}else t.minDate===1&&t.minMonth===0&&this.timeScaleArray.push({position:c,value:o,unit:p,year:a,month:P.monthMod(i+1)});for(var b=o,y=c,C=0;C<l;C++)b++,y=d.determineDaysOfYear(b-1)*n+y,this.timeScaleArray.push({position:y,value:b,unit:p,year:b,month:1})}},{key:"generateMonthScale",value:function(e){var t=e.firstVal,i=e.currentMonthDate,a=e.currentMonth,n=e.currentYear,l=e.daysWidthOnXAxis,o=e.numberOfMonths,c=a,d=0,p=new Ge(this.ctx),x="month",b=0;if(t.minDate>1){d=(p.determineDaysOfMonths(a+1,t.minYear)-i+1)*l,c=P.monthMod(a+1);var y=n+b,C=P.monthMod(c),E=c;c===0&&(x="year",E=y,C=1,y+=b+=1),this.timeScaleArray.push({position:d,value:E,unit:x,year:y,month:C})}else this.timeScaleArray.push({position:d,value:c,unit:x,year:n,month:P.monthMod(a)});for(var k=c+1,M=d,I=0,R=1;I<o;I++,R++){(k=P.monthMod(k))===0?(x="year",b+=1):x="month";var f=this._getYear(n,k,b);M=p.determineDaysOfMonths(k,f)*l+M;var v=k===0?f:k;this.timeScaleArray.push({position:M,value:v,unit:x,year:f,month:k===0?1:k}),k++}}},{key:"generateDayScale",value:function(e){var t=e.firstVal,i=e.currentMonth,a=e.currentYear,n=e.hoursWidthOnXAxis,l=e.numberOfDays,o=new Ge(this.ctx),c="day",d=t.minDate+1,p=d,x=function(R,f,v){return R>o.determineDaysOfMonths(f+1,v)&&(p=1,c="month",y=f+=1),f},b=(24-t.minHour)*n,y=d,C=x(p,i,a);t.minHour===0&&t.minDate===1?(b=0,y=P.monthMod(t.minMonth),c="month",p=t.minDate,l++):t.minDate!==1&&t.minHour===0&&t.minMinute===0&&(b=0,d=t.minDate,y=d,C=x(p=d,i,a)),this.timeScaleArray.push({position:b,value:y,unit:c,year:this._getYear(a,C,0),month:P.monthMod(C),day:p});for(var E=b,k=0;k<l;k++){c="day",C=x(p+=1,C,this._getYear(a,C,0));var M=this._getYear(a,C,0);E=24*n+E;var I=p===1?P.monthMod(C):p;this.timeScaleArray.push({position:E,value:I,unit:c,year:M,month:P.monthMod(C),day:I})}}},{key:"generateHourScale",value:function(e){var t=e.firstVal,i=e.currentDate,a=e.currentMonth,n=e.currentYear,l=e.minutesWidthOnXAxis,o=e.numberOfHours,c=new Ge(this.ctx),d="hour",p=function(A,L){return A>c.determineDaysOfMonths(L+1,n)&&(k=1,L+=1),{month:L,date:k}},x=function(A,L){return A>c.determineDaysOfMonths(L+1,n)?L+=1:L},b=60-(t.minMinute+t.minSecond/60),y=b*l,C=t.minHour+1,E=C+1;b===60&&(y=0,E=(C=t.minHour)+1);var k=i,M=x(k,a);this.timeScaleArray.push({position:y,value:C,unit:d,day:k,hour:E,year:n,month:P.monthMod(M)});for(var I=y,R=0;R<o;R++){d="hour",E>=24&&(E=0,d="day",M=p(k+=1,M).month,M=x(k,M));var f=this._getYear(n,M,0);I=E===0&&R===0?b*l:60*l+I;var v=E===0?k:E;this.timeScaleArray.push({position:I,value:v,unit:d,hour:E,day:k,year:f,month:P.monthMod(M)}),E++}}},{key:"generateMinuteScale",value:function(e){for(var t=e.currentMillisecond,i=e.currentSecond,a=e.currentMinute,n=e.currentHour,l=e.currentDate,o=e.currentMonth,c=e.currentYear,d=e.minutesWidthOnXAxis,p=e.secondsWidthOnXAxis,x=e.numberOfMinutes,b=a+1,y=l,C=o,E=c,k=n,M=(60-i-t/1e3)*p,I=0;I<x;I++)b>=60&&(b=0,(k+=1)===24&&(k=0)),this.timeScaleArray.push({position:M,value:b,unit:"minute",hour:k,minute:b,day:y,year:this._getYear(E,C,0),month:P.monthMod(C)}),M+=d,b++}},{key:"generateSecondScale",value:function(e){for(var t=e.currentMillisecond,i=e.currentSecond,a=e.currentMinute,n=e.currentHour,l=e.currentDate,o=e.currentMonth,c=e.currentYear,d=e.secondsWidthOnXAxis,p=e.numberOfSeconds,x=i+1,b=a,y=l,C=o,E=c,k=n,M=(1e3-t)/1e3*d,I=0;I<p;I++)x>=60&&(x=0,++b>=60&&(b=0,++k===24&&(k=0))),this.timeScaleArray.push({position:M,value:x,unit:"second",hour:k,minute:b,second:x,day:y,year:this._getYear(E,C,0),month:P.monthMod(C)}),M+=d,x++}},{key:"createRawDateString",value:function(e,t){var i=e.year;return e.month===0&&(e.month=1),i+="-"+("0"+e.month.toString()).slice(-2),e.unit==="day"?i+=e.unit==="day"?"-"+("0"+t).slice(-2):"-01":i+="-"+("0"+(e.day?e.day:"1")).slice(-2),e.unit==="hour"?i+=e.unit==="hour"?"T"+("0"+t).slice(-2):"T00":i+="T"+("0"+(e.hour?e.hour:"0")).slice(-2),e.unit==="minute"?i+=":"+("0"+t).slice(-2):i+=":"+(e.minute?("0"+e.minute).slice(-2):"00"),e.unit==="second"?i+=":"+("0"+t).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(e){var t=this,i=this.w;return e.map(function(a){var n=a.value.toString(),l=new Ge(t.ctx),o=t.createRawDateString(a,n),c=l.getDate(l.parseDate(o));if(t.utc||(c=l.getDate(l.parseDateWithTimezone(o))),i.config.xaxis.labels.format===void 0){var d="dd MMM",p=i.config.xaxis.labels.datetimeFormatter;a.unit==="year"&&(d=p.year),a.unit==="month"&&(d=p.month),a.unit==="day"&&(d=p.day),a.unit==="hour"&&(d=p.hour),a.unit==="minute"&&(d=p.minute),a.unit==="second"&&(d=p.second),n=l.formatDate(c,d)}else n=l.formatDate(c,i.config.xaxis.labels.format);return{dateString:o,position:a.position,value:n,unit:a.unit,year:a.year,month:a.month}})}},{key:"removeOverlappingTS",value:function(e){var t,i=this,a=new H(this.ctx),n=!1;e.length>0&&e[0].value&&e.every(function(c){return c.value.length===e[0].value.length})&&(n=!0,t=a.getTextRects(e[0].value).width);var l=0,o=e.map(function(c,d){if(d>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var p=n?t:a.getTextRects(e[l].value).width,x=e[l].position;return c.position>x+p+10?(l=d,c):null}return c});return o=o.filter(function(c){return c!==null})}},{key:"_getYear",value:function(e,t,i){return e+Math.floor(t/12)+i}}]),T}(),jh=function(){function T(e,t){m(this,T),this.ctx=t,this.w=t.w,this.el=e}return D(T,[{key:"setupElements",value:function(){var e=this.w.globals,t=this.w.config,i=t.chart.type;e.axisCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,e.xyCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble"].indexOf(i)>-1,e.isBarHorizontal=(t.chart.type==="bar"||t.chart.type==="rangeBar"||t.chart.type==="boxPlot")&&t.plotOptions.bar.horizontal,e.chartClass=".apexcharts"+e.chartID,e.dom.baseEl=this.el,e.dom.elWrap=document.createElement("div"),H.setAttrs(e.dom.elWrap,{id:e.chartClass.substring(1),class:"apexcharts-canvas "+e.chartClass.substring(1)}),this.el.appendChild(e.dom.elWrap),e.dom.Paper=new window.SVG.Doc(e.dom.elWrap),e.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(t.chart.offsetX,", ").concat(t.chart.offsetY,")")}),e.dom.Paper.node.style.background=t.chart.background,this.setSVGDimensions(),e.dom.elGraphical=e.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),e.dom.elAnnotations=e.dom.Paper.group().attr({class:"apexcharts-annotations"}),e.dom.elDefs=e.dom.Paper.defs(),e.dom.elLegendWrap=document.createElement("div"),e.dom.elLegendWrap.classList.add("apexcharts-legend"),e.dom.elWrap.appendChild(e.dom.elLegendWrap),e.dom.Paper.add(e.dom.elGraphical),e.dom.elGraphical.add(e.dom.elDefs)}},{key:"plotChartType",value:function(e,t){var i=this.w,a=i.config,n=i.globals,l={series:[],i:[]},o={series:[],i:[]},c={series:[],i:[]},d={series:[],i:[]},p={series:[],i:[]},x={series:[],i:[]},b={series:[],i:[]};n.series.map(function(v,A){var L=0;e[A].type!==void 0?(e[A].type==="column"||e[A].type==="bar"?(n.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),p.series.push(v),p.i.push(A),L++,i.globals.columnSeries=p.series):e[A].type==="area"?(o.series.push(v),o.i.push(A),L++):e[A].type==="line"?(l.series.push(v),l.i.push(A),L++):e[A].type==="scatter"?(c.series.push(v),c.i.push(A)):e[A].type==="bubble"?(d.series.push(v),d.i.push(A),L++):e[A].type==="candlestick"?(x.series.push(v),x.i.push(A),L++):e[A].type==="boxPlot"?(b.series.push(v),b.i.push(A),L++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),L>1&&(n.comboCharts=!0)):(l.series.push(v),l.i.push(A))});var y=new Pn(this.ctx,t),C=new Sn(this.ctx,t);this.ctx.pie=new Po(this.ctx);var E=new Xh(this.ctx);this.ctx.rangeBar=new ot(this.ctx,t);var k=new Hh(this.ctx),M=[];if(n.comboCharts){if(o.series.length>0&&M.push(y.draw(o.series,"area",o.i)),p.series.length>0)if(i.config.chart.stacked){var I=new Ao(this.ctx,t);M.push(I.draw(p.series,p.i))}else this.ctx.bar=new rt(this.ctx,t),M.push(this.ctx.bar.draw(p.series,p.i));if(l.series.length>0&&M.push(y.draw(l.series,"line",l.i)),x.series.length>0&&M.push(C.draw(x.series,x.i)),b.series.length>0&&M.push(C.draw(b.series,b.i)),c.series.length>0){var R=new Pn(this.ctx,t,!0);M.push(R.draw(c.series,"scatter",c.i))}if(d.series.length>0){var f=new Pn(this.ctx,t,!0);M.push(f.draw(d.series,"bubble",d.i))}}else switch(a.chart.type){case"line":M=y.draw(n.series,"line");break;case"area":M=y.draw(n.series,"area");break;case"bar":a.chart.stacked?M=new Ao(this.ctx,t).draw(n.series):(this.ctx.bar=new rt(this.ctx,t),M=this.ctx.bar.draw(n.series));break;case"candlestick":M=new Sn(this.ctx,t).draw(n.series);break;case"boxPlot":M=new Sn(this.ctx,t).draw(n.series);break;case"rangeBar":M=this.ctx.rangeBar.draw(n.series);break;case"heatmap":M=new Nh(this.ctx,t).draw(n.series);break;case"treemap":M=new Wh(this.ctx,t).draw(n.series);break;case"pie":case"donut":case"polarArea":M=this.ctx.pie.draw(n.series);break;case"radialBar":M=E.draw(n.series);break;case"radar":M=k.draw(n.series);break;default:M=y.draw(n.series)}return M}},{key:"setSVGDimensions",value:function(){var e=this.w.globals,t=this.w.config;e.svgWidth=t.chart.width,e.svgHeight=t.chart.height;var i=P.getDimensions(this.el),a=t.chart.width.toString().split(/[0-9]+/g).pop();a==="%"?P.isNumber(i[0])&&(i[0].width===0&&(i=P.getDimensions(this.el.parentNode)),e.svgWidth=i[0]*parseInt(t.chart.width,10)/100):a!=="px"&&a!==""||(e.svgWidth=parseInt(t.chart.width,10));var n=t.chart.height.toString().split(/[0-9]+/g).pop();if(e.svgHeight!=="auto"&&e.svgHeight!=="")if(n==="%"){var l=P.getDimensions(this.el.parentNode);e.svgHeight=l[1]*parseInt(t.chart.height,10)/100}else e.svgHeight=parseInt(t.chart.height,10);else e.axisCharts?e.svgHeight=e.svgWidth/1.61:e.svgHeight=e.svgWidth/1.2;if(e.svgWidth<0&&(e.svgWidth=0),e.svgHeight<0&&(e.svgHeight=0),H.setAttrs(e.dom.Paper.node,{width:e.svgWidth,height:e.svgHeight}),n!=="%"){var o=t.chart.sparkline.enabled?0:e.axisCharts?t.chart.parentHeightOffset:0;e.dom.Paper.node.parentNode.parentNode.style.minHeight=e.svgHeight+o+"px"}e.dom.elWrap.style.width=e.svgWidth+"px",e.dom.elWrap.style.height=e.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var e=this.w.globals,t=e.translateY,i={transform:"translate("+e.translateX+", "+t+")"};H.setAttrs(e.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var e=this.w,t=e.globals,i=0,a=e.config.chart.sparkline.enabled?1:15;a+=e.config.grid.padding.bottom,e.config.legend.position!=="top"&&e.config.legend.position!=="bottom"||!e.config.legend.show||e.config.legend.floating||(i=new qe(this.ctx).legendHelpers.getLegendBBox().clwh+10);var n=e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),l=2.05*e.globals.radialSize;if(n&&!e.config.chart.sparkline.enabled&&e.config.plotOptions.radialBar.startAngle!==0){var o=P.getBoundingClientRect(n);l=o.bottom;var c=o.bottom-o.top;l=Math.max(2.05*e.globals.radialSize,c)}var d=l+t.translateY+i+a;t.dom.elLegendForeign&&t.dom.elLegendForeign.setAttribute("height",d),e.config.chart.height&&String(e.config.chart.height).indexOf("%")>0||(t.dom.elWrap.style.height=d+"px",H.setAttrs(t.dom.Paper.node,{height:d}),t.dom.Paper.node.parentNode.parentNode.style.minHeight=d+"px")}},{key:"coreCalculations",value:function(){new q(this.ctx).init()}},{key:"resetGlobals",value:function(){var e=this,t=function(){return e.w.config.series.map(function(n){return[]})},i=new he,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=t(),a.seriesYvalues=t()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var e=null,t=this.w;if(t.globals.axisCharts){if(t.config.xaxis.crosshairs.position==="back"&&new fe(this.ctx).drawXCrosshairs(),t.config.yaxis[0].crosshairs.position==="back"&&new fe(this.ctx).drawYCrosshairs(),t.config.xaxis.type==="datetime"&&t.config.xaxis.labels.formatter===void 0){this.ctx.timeScale=new Vh(this.ctx);var i=[];isFinite(t.globals.minX)&&isFinite(t.globals.maxX)&&!t.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minX,t.globals.maxX):t.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minY,t.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}e=new ue(this.ctx).getCalculatedRatios()}return e}},{key:"updateSourceChart",value:function(e){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:e.w.globals.minX,max:e.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var e=this,t=this.w;if(t.config.chart.brush.enabled&&typeof t.config.chart.events.selection!="function"){var i=t.config.chart.brush.targets||[t.config.chart.brush.target];i.forEach(function(a){var n=ApexCharts.getChartByID(a);n.w.globals.brushSource=e.ctx,typeof n.w.config.chart.events.zoomed!="function"&&(n.w.config.chart.events.zoomed=function(){e.updateSourceChart(n)}),typeof n.w.config.chart.events.scrolled!="function"&&(n.w.config.chart.events.scrolled=function(){e.updateSourceChart(n)})}),t.config.chart.events.selection=function(a,n){i.forEach(function(l){var o=ApexCharts.getChartByID(l),c=P.clone(t.config.yaxis);if(t.config.chart.brush.autoScaleYaxis&&o.w.globals.series.length===1){var d=new Y(o);c=d.autoScaleY(o,c,n)}var p=o.w.config.yaxis.reduce(function(x,b,y){return[].concat(K(x),[h(h({},o.w.config.yaxis[y]),{},{min:c[0].min,max:c[0].max})])},[]);o.ctx.updateHelpers._updateOptions({xaxis:{min:n.xaxis.min,max:n.xaxis.max},yaxis:p},!1,!1,!1,!1)})}}}}]),T}(),Gh=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"_updateOptions",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],n=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],l=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return new Promise(function(o){var c=[t.ctx];n&&(c=t.ctx.getSyncedCharts()),t.ctx.w.globals.isExecCalled&&(c=[t.ctx],t.ctx.w.globals.isExecCalled=!1),c.forEach(function(d,p){var x=d.w;if(x.globals.shouldAnimate=a,i||(x.globals.resized=!0,x.globals.dataChanged=!0,a&&d.series.getPreviousPaths()),e&&g(e)==="object"&&(d.config=new U(e),e=ue.extendArrayProps(d.config,e,x),d.w.globals.chartID!==t.ctx.w.globals.chartID&&delete e.series,x.config=P.extend(x.config,e),l&&(x.globals.lastXAxis=e.xaxis?P.clone(e.xaxis):[],x.globals.lastYAxis=e.yaxis?P.clone(e.yaxis):[],x.globals.initialConfig=P.extend({},x.config),x.globals.initialSeries=P.clone(x.config.series),e.series))){for(var b=0;b<x.globals.collapsedSeriesIndices.length;b++){var y=x.config.series[x.globals.collapsedSeriesIndices[b]];x.globals.collapsedSeries[b].data=x.globals.axisCharts?y.data.slice():y}for(var C=0;C<x.globals.ancillaryCollapsedSeriesIndices.length;C++){var E=x.config.series[x.globals.ancillaryCollapsedSeriesIndices[C]];x.globals.ancillaryCollapsedSeries[C].data=x.globals.axisCharts?E.data.slice():E}d.series.emptyCollapsedSeries(x.config.series)}return d.update(e).then(function(){p===c.length-1&&o(d)})})})}},{key:"_updateSeries",value:function(e,t){var i=this,a=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return new Promise(function(n){var l,o=i.w;return o.globals.shouldAnimate=t,o.globals.dataChanged=!0,t&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?((l=e.map(function(c,d){return i._extendSeries(c,d)})).length===0&&(l=[{data:[]}]),o.config.series=l):o.config.series=e.slice(),a&&(o.globals.initialSeries=P.clone(o.config.series)),i.ctx.update().then(function(){n(i.ctx)})})}},{key:"_extendSeries",value:function(e,t){var i=this.w,a=i.config.series[t];return h(h({},i.config.series[t]),{},{name:e.name?e.name:a&&a.name,color:e.color?e.color:a&&a.color,type:e.type?e.type:a&&a.type,data:e.data?e.data:a&&a.data})}},{key:"toggleDataPointSelection",value:function(e,t){var i=this.w,a=null,n=".apexcharts-series[data\\:realIndex='".concat(e,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(n," path[j='").concat(t,"'], ").concat(n," circle[j='").concat(t,"'], ").concat(n," rect[j='").concat(t,"']")).members[0]:t===void 0&&(a=i.globals.dom.Paper.select("".concat(n," path[j='").concat(e,"']")).members[0],i.config.chart.type!=="pie"&&i.config.chart.type!=="polarArea"&&i.config.chart.type!=="donut"||this.ctx.pie.pieClicked(e)),a?(new H(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(e){var t=this.w;if(["min","max"].forEach(function(a){e.xaxis[a]!==void 0&&(t.config.xaxis[a]=e.xaxis[a],t.globals.lastXAxis[a]=e.xaxis[a])}),e.xaxis.categories&&e.xaxis.categories.length&&(t.config.xaxis.categories=e.xaxis.categories),t.config.xaxis.convertedCatToNumeric){var i=new ct(e);e=i.convertCatToNumericXaxis(e,this.ctx)}return e}},{key:"forceYAxisUpdate",value:function(e){return e.chart&&e.chart.stacked&&e.chart.stackType==="100%"&&(Array.isArray(e.yaxis)?e.yaxis.forEach(function(t,i){e.yaxis[i].min=0,e.yaxis[i].max=100}):(e.yaxis.min=0,e.yaxis.max=100)),e}},{key:"revertDefaultAxisMinMax",value:function(e){var t=this,i=this.w,a=i.globals.lastXAxis,n=i.globals.lastYAxis;e&&e.xaxis&&(a=e.xaxis),e&&e.yaxis&&(n=e.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var l=function(o){n[o]!==void 0&&(i.config.yaxis[o].min=n[o].min,i.config.yaxis[o].max=n[o].max)};i.config.yaxis.map(function(o,c){i.globals.zoomed||n[c]!==void 0?l(c):t.ctx.opts.yaxis[c]!==void 0&&(o.min=t.ctx.opts.yaxis[c].min,o.max=t.ctx.opts.yaxis[c].max)})}}]),T}();Ri=typeof window<"u"?window:void 0,va=function(T,e){var t=(this!==void 0?this:T).SVG=function(f){if(t.supported)return f=new t.Doc(f),t.parser.draw||t.prepare(),f};if(t.ns="http://www.w3.org/2000/svg",t.xmlns="http://www.w3.org/2000/xmlns/",t.xlink="http://www.w3.org/1999/xlink",t.svgjs="http://svgjs.dev",t.supported=!0,!t.supported)return!1;t.did=1e3,t.eid=function(f){return"Svgjs"+p(f)+t.did++},t.create=function(f){var v=e.createElementNS(this.ns,f);return v.setAttribute("id",this.eid(f)),v},t.extend=function(){var f,v;v=(f=[].slice.call(arguments)).pop();for(var A=f.length-1;A>=0;A--)if(f[A])for(var L in v)f[A].prototype[L]=v[L];t.Set&&t.Set.inherit&&t.Set.inherit()},t.invent=function(f){var v=typeof f.create=="function"?f.create:function(){this.constructor.call(this,t.create(f.create))};return f.inherit&&(v.prototype=new f.inherit),f.extend&&t.extend(v,f.extend),f.construct&&t.extend(f.parent||t.Container,f.construct),v},t.adopt=function(f){return f?f.instance?f.instance:((v=f.nodeName=="svg"?f.parentNode instanceof T.SVGElement?new t.Nested:new t.Doc:f.nodeName=="linearGradient"?new t.Gradient("linear"):f.nodeName=="radialGradient"?new t.Gradient("radial"):t[p(f.nodeName)]?new t[p(f.nodeName)]:new t.Element(f)).type=f.nodeName,v.node=f,f.instance=v,v instanceof t.Doc&&v.namespace().defs(),v.setData(JSON.parse(f.getAttribute("svgjs:data"))||{}),v):null;var v},t.prepare=function(){var f=e.getElementsByTagName("body")[0],v=(f?new t.Doc(f):t.adopt(e.documentElement).nested()).size(2,0);t.parser={body:f||e.documentElement,draw:v.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:v.polyline().node,path:v.path().node,native:t.create("svg")}},t.parser={native:t.create("svg")},e.addEventListener("DOMContentLoaded",function(){t.parser.draw||t.prepare()},!1),t.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},t.utils={map:function(f,v){for(var A=f.length,L=[],N=0;N<A;N++)L.push(v(f[N]));return L},filter:function(f,v){for(var A=f.length,L=[],N=0;N<A;N++)v(f[N])&&L.push(f[N]);return L},filterSVGElements:function(f){return this.filter(f,function(v){return v instanceof T.SVGElement})}},t.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},t.Color=function(f){var v,A;this.r=0,this.g=0,this.b=0,f&&(typeof f=="string"?t.regex.isRgb.test(f)?(v=t.regex.rgb.exec(f.replace(t.regex.whitespace,"")),this.r=parseInt(v[1]),this.g=parseInt(v[2]),this.b=parseInt(v[3])):t.regex.isHex.test(f)&&(v=t.regex.hex.exec((A=f).length==4?["#",A.substring(1,2),A.substring(1,2),A.substring(2,3),A.substring(2,3),A.substring(3,4),A.substring(3,4)].join(""):A),this.r=parseInt(v[1],16),this.g=parseInt(v[2],16),this.b=parseInt(v[3],16)):g(f)==="object"&&(this.r=f.r,this.g=f.g,this.b=f.b))},t.extend(t.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+x(this.r)+x(this.g)+x(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(f){return this.destination=new t.Color(f),this},at:function(f){return this.destination?(f=f<0?0:f>1?1:f,new t.Color({r:~~(this.r+(this.destination.r-this.r)*f),g:~~(this.g+(this.destination.g-this.g)*f),b:~~(this.b+(this.destination.b-this.b)*f)})):this}}),t.Color.test=function(f){return f+="",t.regex.isHex.test(f)||t.regex.isRgb.test(f)},t.Color.isRgb=function(f){return f&&typeof f.r=="number"&&typeof f.g=="number"&&typeof f.b=="number"},t.Color.isColor=function(f){return t.Color.isRgb(f)||t.Color.test(f)},t.Array=function(f,v){(f=(f||[]).valueOf()).length==0&&v&&(f=v.valueOf()),this.value=this.parse(f)},t.extend(t.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(f){return f=f.valueOf(),Array.isArray(f)?f:this.split(f)}}),t.PointArray=function(f,v){t.Array.call(this,f,v||[[0,0]])},t.PointArray.prototype=new t.Array,t.PointArray.prototype.constructor=t.PointArray;for(var i={M:function(f,v,A){return v.x=A.x=f[0],v.y=A.y=f[1],["M",v.x,v.y]},L:function(f,v){return v.x=f[0],v.y=f[1],["L",f[0],f[1]]},H:function(f,v){return v.x=f[0],["H",f[0]]},V:function(f,v){return v.y=f[0],["V",f[0]]},C:function(f,v){return v.x=f[4],v.y=f[5],["C",f[0],f[1],f[2],f[3],f[4],f[5]]},Q:function(f,v){return v.x=f[2],v.y=f[3],["Q",f[0],f[1],f[2],f[3]]},Z:function(f,v,A){return v.x=A.x,v.y=A.y,["Z"]}},a="mlhvqtcsaz".split(""),n=0,l=a.length;n<l;++n)i[a[n]]=function(f){return function(v,A,L){if(f=="H")v[0]=v[0]+A.x;else if(f=="V")v[0]=v[0]+A.y;else if(f=="A")v[5]=v[5]+A.x,v[6]=v[6]+A.y;else for(var N=0,G=v.length;N<G;++N)v[N]=v[N]+(N%2?A.y:A.x);if(i&&typeof i[f]=="function")return i[f](v,A,L)}}(a[n].toUpperCase());t.PathArray=function(f,v){t.Array.call(this,f,v||[["M",0,0]])},t.PathArray.prototype=new t.Array,t.PathArray.prototype.constructor=t.PathArray,t.extend(t.PathArray,{toString:function(){return function(f){for(var v=0,A=f.length,L="";v<A;v++)L+=f[v][0],f[v][1]!=null&&(L+=f[v][1],f[v][2]!=null&&(L+=" ",L+=f[v][2],f[v][3]!=null&&(L+=" ",L+=f[v][3],L+=" ",L+=f[v][4],f[v][5]!=null&&(L+=" ",L+=f[v][5],L+=" ",L+=f[v][6],f[v][7]!=null&&(L+=" ",L+=f[v][7])))));return L+" "}(this.value)},move:function(f,v){var A=this.bbox();return A.x,A.y,this},at:function(f){if(!this.destination)return this;for(var v=this.value,A=this.destination.value,L=[],N=new t.PathArray,G=0,X=v.length;G<X;G++){L[G]=[v[G][0]];for(var ne=1,ee=v[G].length;ne<ee;ne++)L[G][ne]=v[G][ne]+(A[G][ne]-v[G][ne])*f;L[G][0]==="A"&&(L[G][4]=+(L[G][4]!=0),L[G][5]=+(L[G][5]!=0))}return N.value=L,N},parse:function(f){if(f instanceof t.PathArray)return f.valueOf();var v,A={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};f=typeof f=="string"?f.replace(t.regex.numbersWithDots,c).replace(t.regex.pathLetters," $& ").replace(t.regex.hyphen,"$1 -").trim().split(t.regex.delimiter):f.reduce(function(ee,pe){return[].concat.call(ee,pe)},[]);var L=[],N=new t.Point,G=new t.Point,X=0,ne=f.length;do t.regex.isPathLetter.test(f[X])?(v=f[X],++X):v=="M"?v="L":v=="m"&&(v="l"),L.push(i[v].call(null,f.slice(X,X+=A[v.toUpperCase()]).map(parseFloat),N,G));while(ne>X);return L},bbox:function(){return t.parser.draw||t.prepare(),t.parser.path.setAttribute("d",this.toString()),t.parser.path.getBBox()}}),t.Number=t.invent({create:function(f,v){this.value=0,this.unit=v||"",typeof f=="number"?this.value=isNaN(f)?0:isFinite(f)?f:f<0?-34e37:34e37:typeof f=="string"?(v=f.match(t.regex.numberAndUnit))&&(this.value=parseFloat(v[1]),v[5]=="%"?this.value/=100:v[5]=="s"&&(this.value*=1e3),this.unit=v[5]):f instanceof t.Number&&(this.value=f.valueOf(),this.unit=f.unit)},extend:{toString:function(){return(this.unit=="%"?~~(1e8*this.value)/1e6:this.unit=="s"?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(f){return f=new t.Number(f),new t.Number(this+f,this.unit||f.unit)},minus:function(f){return f=new t.Number(f),new t.Number(this-f,this.unit||f.unit)},times:function(f){return f=new t.Number(f),new t.Number(this*f,this.unit||f.unit)},divide:function(f){return f=new t.Number(f),new t.Number(this/f,this.unit||f.unit)},to:function(f){var v=new t.Number(this);return typeof f=="string"&&(v.unit=f),v},morph:function(f){return this.destination=new t.Number(f),f.relative&&(this.destination.value+=this.value),this},at:function(f){return this.destination?new t.Number(this.destination).minus(this).times(f).plus(this):this}}}),t.Element=t.invent({create:function(f){this._stroke=t.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=f)&&(this.type=f.nodeName,this.node.instance=this,this._stroke=f.getAttribute("stroke")||this._stroke)},extend:{x:function(f){return this.attr("x",f)},y:function(f){return this.attr("y",f)},cx:function(f){return f==null?this.x()+this.width()/2:this.x(f-this.width()/2)},cy:function(f){return f==null?this.y()+this.height()/2:this.y(f-this.height()/2)},move:function(f,v){return this.x(f).y(v)},center:function(f,v){return this.cx(f).cy(v)},width:function(f){return this.attr("width",f)},height:function(f){return this.attr("height",f)},size:function(f,v){var A=b(this,f,v);return this.width(new t.Number(A.width)).height(new t.Number(A.height))},clone:function(f){this.writeDataToDom();var v=E(this.node.cloneNode(!0));return f?f.add(v):this.after(v),v},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(f){return this.after(f).remove(),f},addTo:function(f){return f.put(this)},putIn:function(f){return f.add(this)},id:function(f){return this.attr("id",f)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return this.style("display")!="none"},toString:function(){return this.attr("id")},classes:function(){var f=this.attr("class");return f==null?[]:f.trim().split(t.regex.delimiter)},hasClass:function(f){return this.classes().indexOf(f)!=-1},addClass:function(f){if(!this.hasClass(f)){var v=this.classes();v.push(f),this.attr("class",v.join(" "))}return this},removeClass:function(f){return this.hasClass(f)&&this.attr("class",this.classes().filter(function(v){return v!=f}).join(" ")),this},toggleClass:function(f){return this.hasClass(f)?this.removeClass(f):this.addClass(f)},reference:function(f){return t.get(this.attr(f))},parent:function(f){var v=this;if(!v.node.parentNode)return null;if(v=t.adopt(v.node.parentNode),!f)return v;for(;v&&v.node instanceof T.SVGElement;){if(typeof f=="string"?v.matches(f):v instanceof f)return v;if(!v.node.parentNode||v.node.parentNode.nodeName=="#document")return null;v=t.adopt(v.node.parentNode)}},doc:function(){return this instanceof t.Doc?this:this.parent(t.Doc)},parents:function(f){var v=[],A=this;do{if(!(A=A.parent(f))||!A.node)break;v.push(A)}while(A.parent);return v},matches:function(f){return function(v,A){return(v.matches||v.matchesSelector||v.msMatchesSelector||v.mozMatchesSelector||v.webkitMatchesSelector||v.oMatchesSelector).call(v,A)}(this.node,f)},native:function(){return this.node},svg:function(f){var v=e.createElement("svg");if(!(f&&this instanceof t.Parent))return v.appendChild(f=e.createElement("svg")),this.writeDataToDom(),f.appendChild(this.node.cloneNode(!0)),v.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");v.innerHTML="<svg>"+f.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var A=0,L=v.firstChild.childNodes.length;A<L;A++)this.node.appendChild(v.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each(function(){this.writeDataToDom()}),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(f){return this.dom=f,this},is:function(f){return function(v,A){return v instanceof A}(this,f)}}}),t.easing={"-":function(f){return f},"<>":function(f){return-Math.cos(f*Math.PI)/2+.5},">":function(f){return Math.sin(f*Math.PI/2)},"<":function(f){return 1-Math.cos(f*Math.PI/2)}},t.morph=function(f){return function(v,A){return new t.MorphObj(v,A).at(f)}},t.Situation=t.invent({create:function(f){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new t.Number(f.duration).valueOf(),this.delay=new t.Number(f.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=f.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),t.FX=t.invent({create:function(f){this._target=f,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(f,v,A){g(f)==="object"&&(v=f.ease,A=f.delay,f=f.duration);var L=new t.Situation({duration:f||1e3,delay:A||0,ease:t.easing[v||"-"]||v});return this.queue(L),this},target:function(f){return f&&f instanceof t.Element?(this._target=f,this):this._target},timeToAbsPos:function(f){return(f-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(f){return this.situation.duration/this._speed*f+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=T.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){T.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(f){return(typeof f=="function"||f instanceof t.Situation)&&this.situations.push(f),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof t.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var f,v=this.situation;if(v.init)return this;for(var A in v.animations){f=this.target()[A](),Array.isArray(f)||(f=[f]),Array.isArray(v.animations[A])||(v.animations[A]=[v.animations[A]]);for(var L=f.length;L--;)v.animations[A][L]instanceof t.Number&&(f[L]=new t.Number(f[L])),v.animations[A][L]=f[L].morph(v.animations[A][L])}for(var A in v.attrs)v.attrs[A]=new t.MorphObj(this.target().attr(A),v.attrs[A]);for(var A in v.styles)v.styles[A]=new t.MorphObj(this.target().style(A),v.styles[A]);return v.initialTransformation=this.target().matrixify(),v.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(f,v){var A=this.active;return this.active=!1,v&&this.clearQueue(),f&&this.situation&&(!A&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(f){var v=this.last();return this.target().on("finished.fx",function A(L){L.detail.situation==v&&(f.call(this,v),this.off("finished.fx",A))}),this._callStart()},during:function(f){var v=this.last(),A=function(L){L.detail.situation==v&&f.call(this,L.detail.pos,t.morph(L.detail.pos),L.detail.eased,v)};return this.target().off("during.fx",A).on("during.fx",A),this.after(function(){this.off("during.fx",A)}),this._callStart()},afterAll:function(f){var v=function A(L){f.call(this),this.off("allfinished.fx",A)};return this.target().off("allfinished.fx",v).on("allfinished.fx",v),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(f,v,A){return this.last()[A||"animations"][f]=v,this._callStart()},step:function(f){var v,A,L;f||(this.absPos=this.timeToAbsPos(+new Date)),this.situation.loops!==!1?(v=Math.max(this.absPos,0),A=Math.floor(v),this.situation.loops===!0||A<this.situation.loops?(this.pos=v-A,L=this.situation.loop,this.situation.loop=A):(this.absPos=this.situation.loops,this.pos=1,L=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-L)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var N=this.situation.ease(this.pos);for(var G in this.situation.once)G>this.lastPos&&G<=N&&(this.situation.once[G].call(this.target(),this.pos,N),delete this.situation.once[G]);return this.active&&this.target().fire("during",{pos:this.pos,eased:N,fx:this,situation:this.situation}),this.situation?(this.eachAt(),this.pos==1&&!this.situation.reversed||this.situation.reversed&&this.pos==0?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=N,this):this},eachAt:function(){var f,v=this,A=this.target(),L=this.situation;for(var N in L.animations)f=[].concat(L.animations[N]).map(function(ne){return typeof ne!="string"&&ne.at?ne.at(L.ease(v.pos),v.pos):ne}),A[N].apply(A,f);for(var N in L.attrs)f=[N].concat(L.attrs[N]).map(function(ee){return typeof ee!="string"&&ee.at?ee.at(L.ease(v.pos),v.pos):ee}),A.attr.apply(A,f);for(var N in L.styles)f=[N].concat(L.styles[N]).map(function(ee){return typeof ee!="string"&&ee.at?ee.at(L.ease(v.pos),v.pos):ee}),A.style.apply(A,f);if(L.transforms.length){f=L.initialTransformation,N=0;for(var G=L.transforms.length;N<G;N++){var X=L.transforms[N];X instanceof t.Matrix?f=X.relative?f.multiply(new t.Matrix().morph(X).at(L.ease(this.pos))):f.morph(X).at(L.ease(this.pos)):(X.relative||X.undo(f.extract()),f=f.multiply(X.at(L.ease(this.pos))))}A.matrix(f)}return this},once:function(f,v,A){var L=this.last();return A||(f=L.ease(f)),L.once[f]=v,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:t.Element,construct:{animate:function(f,v,A){return(this.fx||(this.fx=new t.FX(this))).animate(f,v,A)},delay:function(f){return(this.fx||(this.fx=new t.FX(this))).delay(f)},stop:function(f,v){return this.fx&&this.fx.stop(f,v),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),t.MorphObj=t.invent({create:function(f,v){return t.Color.isColor(v)?new t.Color(f).morph(v):t.regex.delimiter.test(f)?t.regex.pathLetters.test(f)?new t.PathArray(f).morph(v):new t.Array(f).morph(v):t.regex.numberAndUnit.test(v)?new t.Number(f).morph(v):(this.value=f,void(this.destination=v))},extend:{at:function(f,v){return v<1?this.value:this.destination},valueOf:function(){return this.value}}}),t.extend(t.FX,{attr:function(f,v,A){if(g(f)==="object")for(var L in f)this.attr(L,f[L]);else this.add(f,v,"attrs");return this},plot:function(f,v,A,L){return arguments.length==4?this.plot([f,v,A,L]):this.add("plot",new(this.target()).morphArray(f))}}),t.Box=t.invent({create:function(f,v,A,L){if(!(g(f)!=="object"||f instanceof t.Element))return t.Box.call(this,f.left!=null?f.left:f.x,f.top!=null?f.top:f.y,f.width,f.height);arguments.length==4&&(this.x=f,this.y=v,this.width=A,this.height=L),k(this)}}),t.BBox=t.invent({create:function(f){if(t.Box.apply(this,[].slice.call(arguments)),f instanceof t.Element){var v;try{if(!e.documentElement.contains){for(var A=f.node;A.parentNode;)A=A.parentNode;if(A!=e)throw new Error("Element not in the dom")}v=f.node.getBBox()}catch{if(f instanceof t.Shape){t.parser.draw||t.prepare();var L=f.clone(t.parser.draw.instance).show();L&&L.node&&typeof L.node.getBBox=="function"&&(v=L.node.getBBox()),L&&typeof L.remove=="function"&&L.remove()}else v={x:f.node.clientLeft,y:f.node.clientTop,width:f.node.clientWidth,height:f.node.clientHeight}}t.Box.call(this,v)}},inherit:t.Box,parent:t.Element,construct:{bbox:function(){return new t.BBox(this)}}}),t.BBox.prototype.constructor=t.BBox,t.Matrix=t.invent({create:function(f){var v=C([1,0,0,1,0,0]);f=f===null?v:f instanceof t.Element?f.matrixify():typeof f=="string"?C(f.split(t.regex.delimiter).map(parseFloat)):arguments.length==6?C([].slice.call(arguments)):Array.isArray(f)?C(f):f&&g(f)==="object"?f:v;for(var A=I.length-1;A>=0;--A)this[I[A]]=f[I[A]]!=null?f[I[A]]:v[I[A]]},extend:{extract:function(){var f=y(this,0,1);y(this,1,0);var v=180/Math.PI*Math.atan2(f.y,f.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(v*Math.PI/180)+this.f*Math.sin(v*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(v*Math.PI/180)+this.e*Math.sin(-v*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:v,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new t.Matrix(this)}},clone:function(){return new t.Matrix(this)},morph:function(f){return this.destination=new t.Matrix(f),this},multiply:function(f){return new t.Matrix(this.native().multiply(function(v){return v instanceof t.Matrix||(v=new t.Matrix(v)),v}(f).native()))},inverse:function(){return new t.Matrix(this.native().inverse())},translate:function(f,v){return new t.Matrix(this.native().translate(f||0,v||0))},native:function(){for(var f=t.parser.native.createSVGMatrix(),v=I.length-1;v>=0;v--)f[I[v]]=this[I[v]];return f},toString:function(){return"matrix("+M(this.a)+","+M(this.b)+","+M(this.c)+","+M(this.d)+","+M(this.e)+","+M(this.f)+")"}},parent:t.Element,construct:{ctm:function(){return new t.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof t.Nested){var f=this.rect(1,1),v=f.node.getScreenCTM();return f.remove(),new t.Matrix(v)}return new t.Matrix(this.node.getScreenCTM())}}}),t.Point=t.invent({create:function(f,v){var A;A=Array.isArray(f)?{x:f[0],y:f[1]}:g(f)==="object"?{x:f.x,y:f.y}:f!=null?{x:f,y:v!=null?v:f}:{x:0,y:0},this.x=A.x,this.y=A.y},extend:{clone:function(){return new t.Point(this)},morph:function(f,v){return this.destination=new t.Point(f,v),this}}}),t.extend(t.Element,{point:function(f,v){return new t.Point(f,v).transform(this.screenCTM().inverse())}}),t.extend(t.Element,{attr:function(f,v,A){if(f==null){for(f={},A=(v=this.node.attributes).length-1;A>=0;A--)f[v[A].nodeName]=t.regex.isNumber.test(v[A].nodeValue)?parseFloat(v[A].nodeValue):v[A].nodeValue;return f}if(g(f)==="object")for(var L in f)this.attr(L,f[L]);else if(v===null)this.node.removeAttribute(f);else{if(v==null)return(v=this.node.getAttribute(f))==null?t.defaults.attrs[f]:t.regex.isNumber.test(v)?parseFloat(v):v;f=="stroke-width"?this.attr("stroke",parseFloat(v)>0?this._stroke:null):f=="stroke"&&(this._stroke=v),f!="fill"&&f!="stroke"||(t.regex.isImage.test(v)&&(v=this.doc().defs().image(v,0,0)),v instanceof t.Image&&(v=this.doc().defs().pattern(0,0,function(){this.add(v)}))),typeof v=="number"?v=new t.Number(v):t.Color.isColor(v)?v=new t.Color(v):Array.isArray(v)&&(v=new t.Array(v)),f=="leading"?this.leading&&this.leading(v):typeof A=="string"?this.node.setAttributeNS(A,f,v.toString()):this.node.setAttribute(f,v.toString()),!this.rebuild||f!="font-size"&&f!="x"||this.rebuild(f,v)}return this}}),t.extend(t.Element,{transform:function(f,v){var A;return g(f)!=="object"?(A=new t.Matrix(this).extract(),typeof f=="string"?A[f]:A):(A=new t.Matrix(this),v=!!v||!!f.relative,f.a!=null&&(A=v?A.multiply(new t.Matrix(f)):new t.Matrix(f)),this.attr("transform",A))}}),t.extend(t.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(t.regex.transforms).slice(0,-1).map(function(f){var v=f.trim().split("(");return[v[0],v[1].split(t.regex.delimiter).map(function(A){return parseFloat(A)})]}).reduce(function(f,v){return v[0]=="matrix"?f.multiply(C(v[1])):f[v[0]].apply(f,v[1])},new t.Matrix)},toParent:function(f){if(this==f)return this;var v=this.screenCTM(),A=f.screenCTM().inverse();return this.addTo(f).untransform().transform(A.multiply(v)),this},toDoc:function(){return this.toParent(this.doc())}}),t.Transformation=t.invent({create:function(f,v){if(arguments.length>1&&typeof v!="boolean")return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(f))for(var A=0,L=this.arguments.length;A<L;++A)this[this.arguments[A]]=f[A];else if(f&&g(f)==="object")for(A=0,L=this.arguments.length;A<L;++A)this[this.arguments[A]]=f[this.arguments[A]];this.inversed=!1,v===!0&&(this.inversed=!0)}}),t.Translate=t.invent({parent:t.Matrix,inherit:t.Transformation,create:function(f,v){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),t.extend(t.Element,{style:function(f,v){if(arguments.length==0)return this.node.style.cssText||"";if(arguments.length<2)if(g(f)==="object")for(var A in f)this.style(A,f[A]);else{if(!t.regex.isCss.test(f))return this.node.style[d(f)];for(f=f.split(/\s*;\s*/).filter(function(L){return!!L}).map(function(L){return L.split(/\s*:\s*/)});v=f.pop();)this.style(v[0],v[1])}else this.node.style[d(f)]=v===null||t.regex.isBlank.test(v)?"":v;return this}}),t.Parent=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Element,extend:{children:function(){return t.utils.map(t.utils.filterSVGElements(this.node.childNodes),function(f){return t.adopt(f)})},add:function(f,v){return v==null?this.node.appendChild(f.node):f.node!=this.node.childNodes[v]&&this.node.insertBefore(f.node,this.node.childNodes[v]),this},put:function(f,v){return this.add(f,v),f},has:function(f){return this.index(f)>=0},index:function(f){return[].slice.call(this.node.childNodes).indexOf(f.node)},get:function(f){return t.adopt(this.node.childNodes[f])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(f,v){for(var A=this.children(),L=0,N=A.length;L<N;L++)A[L]instanceof t.Element&&f.apply(A[L],[L,A]),v&&A[L]instanceof t.Container&&A[L].each(f,v);return this},removeElement:function(f){return this.node.removeChild(f.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),t.extend(t.Parent,{ungroup:function(f,v){return v===0||this instanceof t.Defs||this.node==t.parser.draw||(f=f||(this instanceof t.Doc?this:this.parent(t.Parent)),v=v||1/0,this.each(function(){return this instanceof t.Defs?this:this instanceof t.Parent?this.ungroup(f,v-1):this.toParent(f)}),this.node.firstChild||this.remove()),this},flatten:function(f,v){return this.ungroup(f,v)}}),t.Container=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Parent}),t.ViewBox=t.invent({parent:t.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(f){t.Element.prototype[f]=function(v){return t.on(this.node,f,v),this}}),t.listeners=[],t.handlerMap=[],t.listenerId=0,t.on=function(f,v,A,L,N){var G=A.bind(L||f.instance||f),X=(t.handlerMap.indexOf(f)+1||t.handlerMap.push(f))-1,ne=v.split(".")[0],ee=v.split(".")[1]||"*";t.listeners[X]=t.listeners[X]||{},t.listeners[X][ne]=t.listeners[X][ne]||{},t.listeners[X][ne][ee]=t.listeners[X][ne][ee]||{},A._svgjsListenerId||(A._svgjsListenerId=++t.listenerId),t.listeners[X][ne][ee][A._svgjsListenerId]=G,f.addEventListener(ne,G,N||{passive:!0})},t.off=function(f,v,A){var L=t.handlerMap.indexOf(f),N=v&&v.split(".")[0],G=v&&v.split(".")[1],X="";if(L!=-1)if(A){if(typeof A=="function"&&(A=A._svgjsListenerId),!A)return;t.listeners[L][N]&&t.listeners[L][N][G||"*"]&&(f.removeEventListener(N,t.listeners[L][N][G||"*"][A],!1),delete t.listeners[L][N][G||"*"][A])}else if(G&&N){if(t.listeners[L][N]&&t.listeners[L][N][G]){for(var ne in t.listeners[L][N][G])t.off(f,[N,G].join("."),ne);delete t.listeners[L][N][G]}}else if(G)for(var ee in t.listeners[L])for(var X in t.listeners[L][ee])G===X&&t.off(f,[ee,G].join("."));else if(N){if(t.listeners[L][N]){for(var X in t.listeners[L][N])t.off(f,[N,X].join("."));delete t.listeners[L][N]}}else{for(var ee in t.listeners[L])t.off(f,ee);delete t.listeners[L],delete t.handlerMap[L]}},t.extend(t.Element,{on:function(f,v,A,L){return t.on(this.node,f,v,A,L),this},off:function(f,v){return t.off(this.node,f,v),this},fire:function(f,v){return f instanceof T.Event?this.node.dispatchEvent(f):this.node.dispatchEvent(f=new t.CustomEvent(f,{detail:v,cancelable:!0})),this._event=f,this},event:function(){return this._event}}),t.Defs=t.invent({create:"defs",inherit:t.Container}),t.G=t.invent({create:"g",inherit:t.Container,extend:{x:function(f){return f==null?this.transform("x"):this.transform({x:f-this.x()},!0)}},construct:{group:function(){return this.put(new t.G)}}}),t.Doc=t.invent({create:function(f){f&&((f=typeof f=="string"?e.getElementById(f):f).nodeName=="svg"?this.constructor.call(this,f):(this.constructor.call(this,t.create("svg")),f.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:t.Container,extend:{namespace:function(){return this.attr({xmlns:t.ns,version:"1.1"}).attr("xmlns:xlink",t.xlink,t.xmlns).attr("xmlns:svgjs",t.svgjs,t.xmlns)},defs:function(){var f;return this._defs||((f=this.node.getElementsByTagName("defs")[0])?this._defs=t.adopt(f):this._defs=new t.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&this.node.parentNode.nodeName!="#document"?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,t.parser.draw&&!t.parser.draw.parentNode&&this.node.appendChild(t.parser.draw),this},clone:function(f){this.writeDataToDom();var v=this.node,A=E(v.cloneNode(!0));return f?(f.node||f).appendChild(A.node):v.parentNode.insertBefore(A.node,v.nextSibling),A}}}),t.extend(t.Element,{}),t.Gradient=t.invent({create:function(f){this.constructor.call(this,t.create(f+"Gradient")),this.type=f},inherit:t.Container,extend:{at:function(f,v,A){return this.put(new t.Stop).update(f,v,A)},update:function(f){return this.clear(),typeof f=="function"&&f.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(f,v,A){return f=="transform"&&(f="gradientTransform"),t.Container.prototype.attr.call(this,f,v,A)}},construct:{gradient:function(f,v){return this.defs().gradient(f,v)}}}),t.extend(t.Gradient,t.FX,{from:function(f,v){return(this._target||this).type=="radial"?this.attr({fx:new t.Number(f),fy:new t.Number(v)}):this.attr({x1:new t.Number(f),y1:new t.Number(v)})},to:function(f,v){return(this._target||this).type=="radial"?this.attr({cx:new t.Number(f),cy:new t.Number(v)}):this.attr({x2:new t.Number(f),y2:new t.Number(v)})}}),t.extend(t.Defs,{gradient:function(f,v){return this.put(new t.Gradient(f)).update(v)}}),t.Stop=t.invent({create:"stop",inherit:t.Element,extend:{update:function(f){return(typeof f=="number"||f instanceof t.Number)&&(f={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),f.opacity!=null&&this.attr("stop-opacity",f.opacity),f.color!=null&&this.attr("stop-color",f.color),f.offset!=null&&this.attr("offset",new t.Number(f.offset)),this}}}),t.Pattern=t.invent({create:"pattern",inherit:t.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(f){return this.clear(),typeof f=="function"&&f.call(this,this),this},toString:function(){return this.fill()},attr:function(f,v,A){return f=="transform"&&(f="patternTransform"),t.Container.prototype.attr.call(this,f,v,A)}},construct:{pattern:function(f,v,A){return this.defs().pattern(f,v,A)}}}),t.extend(t.Defs,{pattern:function(f,v,A){return this.put(new t.Pattern).update(A).attr({x:0,y:0,width:f,height:v,patternUnits:"userSpaceOnUse"})}}),t.Shape=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Element}),t.Symbol=t.invent({create:"symbol",inherit:t.Container,construct:{symbol:function(){return this.put(new t.Symbol)}}}),t.Use=t.invent({create:"use",inherit:t.Shape,extend:{element:function(f,v){return this.attr("href",(v||"")+"#"+f,t.xlink)}},construct:{use:function(f,v){return this.put(new t.Use).element(f,v)}}}),t.Rect=t.invent({create:"rect",inherit:t.Shape,construct:{rect:function(f,v){return this.put(new t.Rect).size(f,v)}}}),t.Circle=t.invent({create:"circle",inherit:t.Shape,construct:{circle:function(f){return this.put(new t.Circle).rx(new t.Number(f).divide(2)).move(0,0)}}}),t.extend(t.Circle,t.FX,{rx:function(f){return this.attr("r",f)},ry:function(f){return this.rx(f)}}),t.Ellipse=t.invent({create:"ellipse",inherit:t.Shape,construct:{ellipse:function(f,v){return this.put(new t.Ellipse).size(f,v).move(0,0)}}}),t.extend(t.Ellipse,t.Rect,t.FX,{rx:function(f){return this.attr("rx",f)},ry:function(f){return this.attr("ry",f)}}),t.extend(t.Circle,t.Ellipse,{x:function(f){return f==null?this.cx()-this.rx():this.cx(f+this.rx())},y:function(f){return f==null?this.cy()-this.ry():this.cy(f+this.ry())},cx:function(f){return f==null?this.attr("cx"):this.attr("cx",f)},cy:function(f){return f==null?this.attr("cy"):this.attr("cy",f)},width:function(f){return f==null?2*this.rx():this.rx(new t.Number(f).divide(2))},height:function(f){return f==null?2*this.ry():this.ry(new t.Number(f).divide(2))},size:function(f,v){var A=b(this,f,v);return this.rx(new t.Number(A.width).divide(2)).ry(new t.Number(A.height).divide(2))}}),t.Line=t.invent({create:"line",inherit:t.Shape,extend:{array:function(){return new t.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(f,v,A,L){return f==null?this.array():(f=v!==void 0?{x1:f,y1:v,x2:A,y2:L}:new t.PointArray(f).toLine(),this.attr(f))},move:function(f,v){return this.attr(this.array().move(f,v).toLine())},size:function(f,v){var A=b(this,f,v);return this.attr(this.array().size(A.width,A.height).toLine())}},construct:{line:function(f,v,A,L){return t.Line.prototype.plot.apply(this.put(new t.Line),f!=null?[f,v,A,L]:[0,0,0,0])}}}),t.Polyline=t.invent({create:"polyline",inherit:t.Shape,construct:{polyline:function(f){return this.put(new t.Polyline).plot(f||new t.PointArray)}}}),t.Polygon=t.invent({create:"polygon",inherit:t.Shape,construct:{polygon:function(f){return this.put(new t.Polygon).plot(f||new t.PointArray)}}}),t.extend(t.Polyline,t.Polygon,{array:function(){return this._array||(this._array=new t.PointArray(this.attr("points")))},plot:function(f){return f==null?this.array():this.clear().attr("points",typeof f=="string"?f:this._array=new t.PointArray(f))},clear:function(){return delete this._array,this},move:function(f,v){return this.attr("points",this.array().move(f,v))},size:function(f,v){var A=b(this,f,v);return this.attr("points",this.array().size(A.width,A.height))}}),t.extend(t.Line,t.Polyline,t.Polygon,{morphArray:t.PointArray,x:function(f){return f==null?this.bbox().x:this.move(f,this.bbox().y)},y:function(f){return f==null?this.bbox().y:this.move(this.bbox().x,f)},width:function(f){var v=this.bbox();return f==null?v.width:this.size(f,v.height)},height:function(f){var v=this.bbox();return f==null?v.height:this.size(v.width,f)}}),t.Path=t.invent({create:"path",inherit:t.Shape,extend:{morphArray:t.PathArray,array:function(){return this._array||(this._array=new t.PathArray(this.attr("d")))},plot:function(f){return f==null?this.array():this.clear().attr("d",typeof f=="string"?f:this._array=new t.PathArray(f))},clear:function(){return delete this._array,this}},construct:{path:function(f){return this.put(new t.Path).plot(f||new t.PathArray)}}}),t.Image=t.invent({create:"image",inherit:t.Shape,extend:{load:function(f){if(!f)return this;var v=this,A=new T.Image;return t.on(A,"load",function(){t.off(A);var L=v.parent(t.Pattern);L!==null&&(v.width()==0&&v.height()==0&&v.size(A.width,A.height),L&&L.width()==0&&L.height()==0&&L.size(v.width(),v.height()),typeof v._loaded=="function"&&v._loaded.call(v,{width:A.width,height:A.height,ratio:A.width/A.height,url:f}))}),t.on(A,"error",function(L){t.off(A),typeof v._error=="function"&&v._error.call(v,L)}),this.attr("href",A.src=this.src=f,t.xlink)},loaded:function(f){return this._loaded=f,this},error:function(f){return this._error=f,this}},construct:{image:function(f,v,A){return this.put(new t.Image).load(f).size(v||0,A||v||0)}}}),t.Text=t.invent({create:function(){this.constructor.call(this,t.create("text")),this.dom.leading=new t.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",t.defaults.attrs["font-family"])},inherit:t.Shape,extend:{x:function(f){return f==null?this.attr("x"):this.attr("x",f)},text:function(f){if(f===void 0){f="";for(var v=this.node.childNodes,A=0,L=v.length;A<L;++A)A!=0&&v[A].nodeType!=3&&t.adopt(v[A]).dom.newLined==1&&(f+=`
`),f+=v[A].textContent;return f}if(this.clear().build(!0),typeof f=="function")f.call(this,this);else{A=0;for(var N=(f=f.split(`
`)).length;A<N;A++)this.tspan(f[A]).newLine()}return this.build(!1).rebuild()},size:function(f){return this.attr("font-size",f).rebuild()},leading:function(f){return f==null?this.dom.leading:(this.dom.leading=new t.Number(f),this.rebuild())},lines:function(){var f=(this.textPath&&this.textPath()||this).node,v=t.utils.map(t.utils.filterSVGElements(f.childNodes),function(A){return t.adopt(A)});return new t.Set(v)},rebuild:function(f){if(typeof f=="boolean"&&(this._rebuild=f),this._rebuild){var v=this,A=0,L=this.dom.leading*new t.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(v.textPath()||this.attr("x",v.attr("x")),this.text()==`
`?A+=L:(this.attr("dy",L+A),A=0))}),this.fire("rebuild")}return this},build:function(f){return this._build=!!f,this},setData:function(f){return this.dom=f,this.dom.leading=new t.Number(f.leading||1.3),this}},construct:{text:function(f){return this.put(new t.Text).text(f)},plain:function(f){return this.put(new t.Text).plain(f)}}}),t.Tspan=t.invent({create:"tspan",inherit:t.Shape,extend:{text:function(f){return f==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof f=="function"?f.call(this,this):this.plain(f),this)},dx:function(f){return this.attr("dx",f)},dy:function(f){return this.attr("dy",f)},newLine:function(){var f=this.parent(t.Text);return this.dom.newLined=!0,this.dy(f.dom.leading*f.attr("font-size")).attr("x",f.x())}}}),t.extend(t.Text,t.Tspan,{plain:function(f){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(f)),this},tspan:function(f){var v=(this.textPath&&this.textPath()||this).node,A=new t.Tspan;return this._build===!1&&this.clear(),v.appendChild(A.node),A.text(f)},clear:function(){for(var f=(this.textPath&&this.textPath()||this).node;f.hasChildNodes();)f.removeChild(f.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),t.TextPath=t.invent({create:"textPath",inherit:t.Parent,parent:t.Text,construct:{morphArray:t.PathArray,array:function(){var f=this.track();return f?f.array():null},plot:function(f){var v=this.track(),A=null;return v&&(A=v.plot(f)),f==null?A:this},track:function(){var f=this.textPath();if(f)return f.reference("href")},textPath:function(){if(this.node.firstChild&&this.node.firstChild.nodeName=="textPath")return t.adopt(this.node.firstChild)}}}),t.Nested=t.invent({create:function(){this.constructor.call(this,t.create("svg")),this.style("overflow","visible")},inherit:t.Container,construct:{nested:function(){return this.put(new t.Nested)}}});var o={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(f,v){return v=="color"?f:f+"-"+v}};function c(f,v,A,L){return A+L.replace(t.regex.dots," .")}function d(f){return f.toLowerCase().replace(/-(.)/g,function(v,A){return A.toUpperCase()})}function p(f){return f.charAt(0).toUpperCase()+f.slice(1)}function x(f){var v=f.toString(16);return v.length==1?"0"+v:v}function b(f,v,A){if(v==null||A==null){var L=f.bbox();v==null?v=L.width/L.height*A:A==null&&(A=L.height/L.width*v)}return{width:v,height:A}}function y(f,v,A){return{x:v*f.a+A*f.c+0,y:v*f.b+A*f.d+0}}function C(f){return{a:f[0],b:f[1],c:f[2],d:f[3],e:f[4],f:f[5]}}function E(f){for(var v=f.childNodes.length-1;v>=0;v--)f.childNodes[v]instanceof T.SVGElement&&E(f.childNodes[v]);return t.adopt(f).id(t.eid(f.nodeName))}function k(f){return f.x==null&&(f.x=0,f.y=0,f.width=0,f.height=0),f.w=f.width,f.h=f.height,f.x2=f.x+f.width,f.y2=f.y+f.height,f.cx=f.x+f.width/2,f.cy=f.y+f.height/2,f}function M(f){return Math.abs(f)>1e-37?f:0}["fill","stroke"].forEach(function(f){var v={};v[f]=function(A){if(A===void 0)return this;if(typeof A=="string"||t.Color.isRgb(A)||A&&typeof A.fill=="function")this.attr(f,A);else for(var L=o[f].length-1;L>=0;L--)A[o[f][L]]!=null&&this.attr(o.prefix(f,o[f][L]),A[o[f][L]]);return this},t.extend(t.Element,t.FX,v)}),t.extend(t.Element,t.FX,{translate:function(f,v){return this.transform({x:f,y:v})},matrix:function(f){return this.attr("transform",new t.Matrix(arguments.length==6?[].slice.call(arguments):f))},opacity:function(f){return this.attr("opacity",f)},dx:function(f){return this.x(new t.Number(f).plus(this instanceof t.FX?0:this.x()),!0)},dy:function(f){return this.y(new t.Number(f).plus(this instanceof t.FX?0:this.y()),!0)}}),t.extend(t.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(f){return this.node.getPointAtLength(f)}}),t.Set=t.invent({create:function(f){Array.isArray(f)?this.members=f:this.clear()},extend:{add:function(){for(var f=[].slice.call(arguments),v=0,A=f.length;v<A;v++)this.members.push(f[v]);return this},remove:function(f){var v=this.index(f);return v>-1&&this.members.splice(v,1),this},each:function(f){for(var v=0,A=this.members.length;v<A;v++)f.apply(this.members[v],[v,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(f){return this.index(f)>=0},index:function(f){return this.members.indexOf(f)},get:function(f){return this.members[f]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(f){return new t.Set(f)}}}),t.FX.Set=t.invent({create:function(f){this.set=f}}),t.Set.inherit=function(){var f=[];for(var v in t.Shape.prototype)typeof t.Shape.prototype[v]=="function"&&typeof t.Set.prototype[v]!="function"&&f.push(v);for(var v in f.forEach(function(L){t.Set.prototype[L]=function(){for(var N=0,G=this.members.length;N<G;N++)this.members[N]&&typeof this.members[N][L]=="function"&&this.members[N][L].apply(this.members[N],arguments);return L=="animate"?this.fx||(this.fx=new t.FX.Set(this)):this}}),f=[],t.FX.prototype)typeof t.FX.prototype[v]=="function"&&typeof t.FX.Set.prototype[v]!="function"&&f.push(v);f.forEach(function(A){t.FX.Set.prototype[A]=function(){for(var L=0,N=this.set.members.length;L<N;L++)this.set.members[L].fx[A].apply(this.set.members[L].fx,arguments);return this}})},t.extend(t.Element,{}),t.extend(t.Element,{remember:function(f,v){if(g(arguments[0])==="object")for(var A in f)this.remember(A,f[A]);else{if(arguments.length==1)return this.memory()[f];this.memory()[f]=v}return this},forget:function(){if(arguments.length==0)this._memory={};else for(var f=arguments.length-1;f>=0;f--)delete this.memory()[arguments[f]];return this},memory:function(){return this._memory||(this._memory={})}}),t.get=function(f){var v=e.getElementById(function(A){var L=(A||"").toString().match(t.regex.reference);if(L)return L[1]}(f)||f);return t.adopt(v)},t.select=function(f,v){return new t.Set(t.utils.map((v||e).querySelectorAll(f),function(A){return t.adopt(A)}))},t.extend(t.Parent,{select:function(f){return t.select(f,this.node)}});var I="abcdef".split("");if(typeof T.CustomEvent!="function"){var R=function(f,v){v=v||{bubbles:!1,cancelable:!1,detail:void 0};var A=e.createEvent("CustomEvent");return A.initCustomEvent(f,v.bubbles,v.cancelable,v.detail),A};R.prototype=T.Event.prototype,t.CustomEvent=R}else t.CustomEvent=T.CustomEvent;return t},g(r)==="object"?s.exports=Ri.document?va(Ri,Ri.document):function(T){return va(T,T.document)}:Ri.SVG=va(Ri,Ri.document),function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(o,c){return this.add(o,c),!o.attr("in")&&this.autoSetIn&&o.attr("in",this.source),o.attr("result")||o.attr("result",o),o},blend:function(o,c,d){return this.put(new SVG.BlendEffect(o,c,d))},colorMatrix:function(o,c){return this.put(new SVG.ColorMatrixEffect(o,c))},convolveMatrix:function(o){return this.put(new SVG.ConvolveMatrixEffect(o))},componentTransfer:function(o){return this.put(new SVG.ComponentTransferEffect(o))},composite:function(o,c,d){return this.put(new SVG.CompositeEffect(o,c,d))},flood:function(o,c){return this.put(new SVG.FloodEffect(o,c))},offset:function(o,c){return this.put(new SVG.OffsetEffect(o,c))},image:function(o){return this.put(new SVG.ImageEffect(o))},merge:function(){var o=[void 0];for(var c in arguments)o.push(arguments[c]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,o)))},gaussianBlur:function(o,c){return this.put(new SVG.GaussianBlurEffect(o,c))},morphology:function(o,c){return this.put(new SVG.MorphologyEffect(o,c))},diffuseLighting:function(o,c,d){return this.put(new SVG.DiffuseLightingEffect(o,c,d))},displacementMap:function(o,c,d,p,x){return this.put(new SVG.DisplacementMapEffect(o,c,d,p,x))},specularLighting:function(o,c,d,p){return this.put(new SVG.SpecularLightingEffect(o,c,d,p))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(o,c,d,p,x){return this.put(new SVG.TurbulenceEffect(o,c,d,p,x))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(o){var c=this.put(new SVG.Filter);return typeof o=="function"&&o.call(c,c),c}}),SVG.extend(SVG.Container,{filter:function(o){return this.defs().filter(o)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(o){return this.filterer=o instanceof SVG.Element?o:this.doc().filter(o),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(o){return this.filterer&&o===!0&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",o)},result:function(o){return o==null?this.attr("result"):this.attr("result",o)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",o)},result:function(o){return o==null?this.attr("result"):this.attr("result",o)},toString:function(){return this.result()}}});var T={blend:function(o,c){return this.parent()&&this.parent().blend(this,o,c)},colorMatrix:function(o,c){return this.parent()&&this.parent().colorMatrix(o,c).in(this)},convolveMatrix:function(o){return this.parent()&&this.parent().convolveMatrix(o).in(this)},componentTransfer:function(o){return this.parent()&&this.parent().componentTransfer(o).in(this)},composite:function(o,c){return this.parent()&&this.parent().composite(this,o,c)},flood:function(o,c){return this.parent()&&this.parent().flood(o,c)},offset:function(o,c){return this.parent()&&this.parent().offset(o,c).in(this)},image:function(o){return this.parent()&&this.parent().image(o)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(o,c){return this.parent()&&this.parent().gaussianBlur(o,c).in(this)},morphology:function(o,c){return this.parent()&&this.parent().morphology(o,c).in(this)},diffuseLighting:function(o,c,d){return this.parent()&&this.parent().diffuseLighting(o,c,d).in(this)},displacementMap:function(o,c,d,p){return this.parent()&&this.parent().displacementMap(this,o,c,d,p)},specularLighting:function(o,c,d,p){return this.parent()&&this.parent().specularLighting(o,c,d,p).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(o,c,d,p,x){return this.parent()&&this.parent().turbulence(o,c,d,p,x).in(this)}};SVG.extend(SVG.Effect,T),SVG.extend(SVG.ParentEffect,T),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(o){this.attr("in",o)}}});var e={blend:function(o,c,d){this.attr({in:o,in2:c,mode:d||"normal"})},colorMatrix:function(o,c){o=="matrix"&&(c=a(c)),this.attr({type:o,values:c===void 0?null:c})},convolveMatrix:function(o){o=a(o),this.attr({order:Math.sqrt(o.split(" ").length),kernelMatrix:o})},composite:function(o,c,d){this.attr({in:o,in2:c,operator:d})},flood:function(o,c){this.attr("flood-color",o),c!=null&&this.attr("flood-opacity",c)},offset:function(o,c){this.attr({dx:o,dy:c})},image:function(o){this.attr("href",o,SVG.xlink)},displacementMap:function(o,c,d,p,x){this.attr({in:o,in2:c,scale:d,xChannelSelector:p,yChannelSelector:x})},gaussianBlur:function(o,c){o!=null||c!=null?this.attr("stdDeviation",n(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(o,c){this.attr({operator:o,radius:c})},tile:function(){},turbulence:function(o,c,d,p,x){this.attr({numOctaves:c,seed:d,stitchTiles:p,baseFrequency:o,type:x})}},t={merge:function(){var o;if(arguments[0]instanceof SVG.Set){var c=this;arguments[0].each(function(p){this instanceof SVG.MergeNode?c.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&c.put(new SVG.MergeNode(this))})}else{o=Array.isArray(arguments[0])?arguments[0]:arguments;for(var d=0;d<o.length;d++)o[d]instanceof SVG.MergeNode?this.put(o[d]):this.put(new SVG.MergeNode(o[d]))}},componentTransfer:function(o){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(d){this[d]=new SVG["Func"+d.toUpperCase()]("identity"),this.rgb.add(this[d]),this.node.appendChild(this[d].node)}.bind(this)),o)for(var c in o.rgb&&(["r","g","b"].forEach(function(d){this[d].attr(o.rgb)}.bind(this)),delete o.rgb),o)this[c].attr(o[c])},diffuseLighting:function(o,c,d){this.attr({surfaceScale:o,diffuseConstant:c,kernelUnitLength:d})},specularLighting:function(o,c,d,p){this.attr({surfaceScale:o,diffuseConstant:c,specularExponent:d,kernelUnitLength:p})}},i={distantLight:function(o,c){this.attr({azimuth:o,elevation:c})},pointLight:function(o,c,d){this.attr({x:o,y:c,z:d})},spotLight:function(o,c,d,p,x,b){this.attr({x:o,y:c,z:d,pointsAtX:p,pointsAtY:x,pointsAtZ:b})},mergeNode:function(o){this.attr("in",o)}};function a(o){return Array.isArray(o)&&(o=new SVG.Array(o)),o.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function n(o){if(!Array.isArray(o))return o;for(var c=0,d=o.length,p=[];c<d;c++)p.push(o[c]);return p.join(" ")}function l(){var o=function(){};for(var c in typeof arguments[arguments.length-1]=="function"&&(o=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var d in arguments[c])o(arguments[c][d],d,arguments[c])}["r","g","b","a"].forEach(function(o){i["Func"+o.toUpperCase()]=function(c){switch(this.attr("type",c),c){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),l(e,function(o,c){var d=c.charAt(0).toUpperCase()+c.slice(1);SVG[d+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),l(t,function(o,c){var d=c.charAt(0).toUpperCase()+c.slice(1);SVG[d+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),l(i,function(o,c){var d=c.charAt(0).toUpperCase()+c.slice(1);SVG[d]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(o){return o instanceof SVG.MergeNode?this.add(o,0):this.add(new SVG.MergeNode(o),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",o)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function T(n,l,o,c,d,p,x){for(var b=n.slice(l,o||x),y=c.slice(d,p||x),C=0,E={pos:[0,0],start:[0,0]},k={pos:[0,0],start:[0,0]};b[C]=e.call(E,b[C]),y[C]=e.call(k,y[C]),b[C][0]!=y[C][0]||b[C][0]=="M"||b[C][0]=="A"&&(b[C][4]!=y[C][4]||b[C][5]!=y[C][5])?(Array.prototype.splice.apply(b,[C,1].concat(i.call(E,b[C]))),Array.prototype.splice.apply(y,[C,1].concat(i.call(k,y[C])))):(b[C]=t.call(E,b[C]),y[C]=t.call(k,y[C])),!(++C==b.length&&C==y.length);)C==b.length&&b.push(["C",E.pos[0],E.pos[1],E.pos[0],E.pos[1],E.pos[0],E.pos[1]]),C==y.length&&y.push(["C",k.pos[0],k.pos[1],k.pos[0],k.pos[1],k.pos[0],k.pos[1]]);return{start:b,dest:y}}function e(n){switch(n[0]){case"z":case"Z":n[0]="L",n[1]=this.start[0],n[2]=this.start[1];break;case"H":n[0]="L",n[2]=this.pos[1];break;case"V":n[0]="L",n[2]=n[1],n[1]=this.pos[0];break;case"T":n[0]="Q",n[3]=n[1],n[4]=n[2],n[1]=this.reflection[1],n[2]=this.reflection[0];break;case"S":n[0]="C",n[6]=n[4],n[5]=n[3],n[4]=n[2],n[3]=n[1],n[2]=this.reflection[1],n[1]=this.reflection[0]}return n}function t(n){var l=n.length;return this.pos=[n[l-2],n[l-1]],"SCQT".indexOf(n[0])!=-1&&(this.reflection=[2*this.pos[0]-n[l-4],2*this.pos[1]-n[l-3]]),n}function i(n){var l=[n];switch(n[0]){case"M":return this.pos=this.start=[n[1],n[2]],l;case"L":n[5]=n[3]=n[1],n[6]=n[4]=n[2],n[1]=this.pos[0],n[2]=this.pos[1];break;case"Q":n[6]=n[4],n[5]=n[3],n[4]=1*n[4]/3+2*n[2]/3,n[3]=1*n[3]/3+2*n[1]/3,n[2]=1*this.pos[1]/3+2*n[2]/3,n[1]=1*this.pos[0]/3+2*n[1]/3;break;case"A":n=(l=function(o,c){var d,p,x,b,y,C,E,k,M,I,R,f,v,A,L,N,G,X,ne,ee,pe,Ae,Je,Ye,ft,wt,Nt=Math.abs(c[1]),di=Math.abs(c[2]),Oi=c[3]%360,$h=c[4],Ln=c[5],Mn=c[6],_n=c[7],Dt=new SVG.Point(o),gt=new SVG.Point(Mn,_n),Mo=[];if(Nt===0||di===0||Dt.x===gt.x&&Dt.y===gt.y)return[["C",Dt.x,Dt.y,gt.x,gt.y,gt.x,gt.y]];for(d=new SVG.Point((Dt.x-gt.x)/2,(Dt.y-gt.y)/2).transform(new SVG.Matrix().rotate(Oi)),(p=d.x*d.x/(Nt*Nt)+d.y*d.y/(di*di))>1&&(Nt*=p=Math.sqrt(p),di*=p),x=new SVG.Matrix().rotate(Oi).scale(1/Nt,1/di).rotate(-Oi),Dt=Dt.transform(x),gt=gt.transform(x),b=[gt.x-Dt.x,gt.y-Dt.y],C=b[0]*b[0]+b[1]*b[1],y=Math.sqrt(C),b[0]/=y,b[1]/=y,E=C<4?Math.sqrt(1-C/4):0,$h===Ln&&(E*=-1),k=new SVG.Point((gt.x+Dt.x)/2+E*-b[1],(gt.y+Dt.y)/2+E*b[0]),M=new SVG.Point(Dt.x-k.x,Dt.y-k.y),I=new SVG.Point(gt.x-k.x,gt.y-k.y),R=Math.acos(M.x/Math.sqrt(M.x*M.x+M.y*M.y)),M.y<0&&(R*=-1),f=Math.acos(I.x/Math.sqrt(I.x*I.x+I.y*I.y)),I.y<0&&(f*=-1),Ln&&R>f&&(f+=2*Math.PI),!Ln&&R<f&&(f-=2*Math.PI),A=Math.ceil(2*Math.abs(R-f)/Math.PI),N=[],G=R,v=(f-R)/A,L=4*Math.tan(v/4)/3,pe=0;pe<=A;pe++)ne=Math.cos(G),X=Math.sin(G),ee=new SVG.Point(k.x+ne,k.y+X),N[pe]=[new SVG.Point(ee.x+L*X,ee.y-L*ne),ee,new SVG.Point(ee.x-L*X,ee.y+L*ne)],G+=v;for(N[0][0]=N[0][1].clone(),N[N.length-1][2]=N[N.length-1][1].clone(),x=new SVG.Matrix().rotate(Oi).scale(Nt,di).rotate(-Oi),pe=0,Ae=N.length;pe<Ae;pe++)N[pe][0]=N[pe][0].transform(x),N[pe][1]=N[pe][1].transform(x),N[pe][2]=N[pe][2].transform(x);for(pe=1,Ae=N.length;pe<Ae;pe++)Je=(ee=N[pe-1][2]).x,Ye=ee.y,ft=(ee=N[pe][0]).x,wt=ee.y,Mn=(ee=N[pe][1]).x,_n=ee.y,Mo.push(["C",Je,Ye,ft,wt,Mn,_n]);return Mo}(this.pos,n))[0]}return n[0]="C",this.pos=[n[5],n[6]],this.reflection=[2*n[5]-n[3],2*n[6]-n[4]],l}function a(n,l){if(l===!1)return!1;for(var o=l,c=n.length;o<c;++o)if(n[o][0]=="M")return o;return!1}SVG.extend(SVG.PathArray,{morph:function(n){for(var l=this.value,o=this.parse(n),c=0,d=0,p=!1,x=!1;c!==!1||d!==!1;){var b;p=a(l,c!==!1&&c+1),x=a(o,d!==!1&&d+1),c===!1&&(c=(b=new SVG.PathArray(y.start).bbox()).height==0||b.width==0?l.push(l[0])-1:l.push(["M",b.x+b.width/2,b.y+b.height/2])-1),d===!1&&(d=(b=new SVG.PathArray(y.dest).bbox()).height==0||b.width==0?o.push(o[0])-1:o.push(["M",b.x+b.width/2,b.y+b.height/2])-1);var y=T(l,c,p,o,d,x);l=l.slice(0,c).concat(y.start,p===!1?[]:l.slice(p)),o=o.slice(0,d).concat(y.dest,x===!1?[]:o.slice(x)),c=p!==!1&&c+y.start.length,d=x!==!1&&d+y.dest.length}return this.value=l,this.destination=new SVG.PathArray,this.destination.value=o,this}})}(),function(){function T(e){e.remember("_draggable",this),this.el=e}T.prototype.init=function(e,t){var i=this;this.constraint=e,this.value=t,this.el.on("mousedown.drag",function(a){i.start(a)}),this.el.on("touchstart.drag",function(a){i.start(a)})},T.prototype.transformPoint=function(e,t){var i=(e=e||window.event).changedTouches&&e.changedTouches[0]||e;return this.p.x=i.clientX-(t||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},T.prototype.getBBox=function(){var e=this.el.bbox();return this.el instanceof SVG.Nested&&(e=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(e.x=this.el.x(),e.y=this.el.y()),e},T.prototype.start=function(e){if(e.type!="click"&&e.type!="mousedown"&&e.type!="mousemove"||(e.which||e.buttons)==1){var t=this;if(this.el.fire("beforedrag",{event:e,handler:this}),!this.el.event().defaultPrevented){e.preventDefault(),e.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(e,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",function(n){t.drag(n)}),SVG.on(window,"touchmove.drag",function(n){t.drag(n)}),SVG.on(window,"mouseup.drag",function(n){t.end(n)}),SVG.on(window,"touchend.drag",function(n){t.end(n)}),this.el.fire("dragstart",{event:e,p:this.startPoints.point,m:this.m,handler:this})}}},T.prototype.drag=function(e){var t=this.getBBox(),i=this.transformPoint(e),a=this.startPoints.box.x+i.x-this.startPoints.point.x,n=this.startPoints.box.y+i.y-this.startPoints.point.y,l=this.constraint,o=i.x-this.startPoints.point.x,c=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:e,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if(typeof l=="function"){var d=l.call(this.el,a,n,this.m);typeof d=="boolean"&&(d={x:d,y:d}),d.x===!0?this.el.x(a):d.x!==!1&&this.el.x(d.x),d.y===!0?this.el.y(n):d.y!==!1&&this.el.y(d.y)}else typeof l=="object"&&(l.minX!=null&&a<l.minX?o=(a=l.minX)-this.startPoints.box.x:l.maxX!=null&&a>l.maxX-t.width&&(o=(a=l.maxX-t.width)-this.startPoints.box.x),l.minY!=null&&n<l.minY?c=(n=l.minY)-this.startPoints.box.y:l.maxY!=null&&n>l.maxY-t.height&&(c=(n=l.maxY-t.height)-this.startPoints.box.y),l.snapToGrid!=null&&(a-=a%l.snapToGrid,n-=n%l.snapToGrid,o-=o%l.snapToGrid,c-=c%l.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:c},!0):this.el.move(a,n));return i},T.prototype.end=function(e){var t=this.drag(e);this.el.fire("dragend",{event:e,p:t,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,t){typeof e!="function"&&typeof e!="object"||(t=e,e=!0);var i=this.remember("_draggable")||new T(this);return(e=e===void 0||e)?i.init(t||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function T(e){this.el=e,e.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,i,a){var n=typeof t!="string"?t:i[t];return a?n/2:n},this.pointCoords=function(t,i){var a=this.pointsList[t];return{x:this.pointCoord(a[0],i,t==="t"||t==="b"),y:this.pointCoord(a[1],i,t==="r"||t==="l")}}}T.prototype.init=function(e,t){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var n in this.el.selectize.defaults)this.options[n]=this.el.selectize.defaults[n],t[n]!==void 0&&(this.options[n]=t[n]);var l=["points","pointsExclude"];for(var n in l){var o=this.options[l[n]];typeof o=="string"?o=o.length>0?o.split(/\s*,\s*/i):[]:typeof o=="boolean"&&l[n]==="points"&&(o=o?a:[]),this.options[l[n]]=o}this.options.points=[a,this.options.points].reduce(function(c,d){return c.filter(function(p){return d.indexOf(p)>-1})}),this.options.points=[this.options.points,this.options.pointsExclude].reduce(function(c,d){return c.filter(function(p){return d.indexOf(p)<0})}),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&["line","polyline","polygon"].indexOf(this.el.type)!==-1?this.selectPoints(e):this.selectRect(e),this.observe(),this.cleanup()},T.prototype.selectPoints=function(e){return this.pointSelection.isSelected=e,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},T.prototype.getPointArray=function(){var e=this.el.bbox();return this.el.array().valueOf().map(function(t){return[t[0]-e.x,t[1]-e.y]})},T.prototype.drawPoints=function(){for(var e=this,t=this.getPointArray(),i=0,a=t.length;i<a;++i){var n=function(o){return function(c){(c=c||window.event).preventDefault?c.preventDefault():c.returnValue=!1,c.stopPropagation();var d=c.pageX||c.touches[0].pageX,p=c.pageY||c.touches[0].pageY;e.el.fire("point",{x:d,y:p,i:o,event:c})}}(i),l=this.drawPoint(t[i][0],t[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",n).on("mousedown",n);this.pointSelection.set.add(l)}},T.prototype.drawPoint=function(e,t){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(e,t);case"rect":return this.drawRect(e,t);default:if(typeof i=="function")return i.call(this,e,t);throw new Error("Unknown "+i+" point type!")}},T.prototype.drawCircle=function(e,t){return this.nested.circle(this.options.pointSize).center(e,t)},T.prototype.drawRect=function(e,t){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(e,t)},T.prototype.updatePointSelection=function(){var e=this.getPointArray();this.pointSelection.set.each(function(t){this.cx()===e[t][0]&&this.cy()===e[t][1]||this.center(e[t][0],e[t][1])})},T.prototype.updateRectSelection=function(){var e=this,t=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:t.width,height:t.height}),this.options.points.length&&this.options.points.map(function(a,n){var l=e.pointCoords(a,t);e.rectSelection.set.get(n+1).center(l.x,l.y)}),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(t.width/2,20)}},T.prototype.selectRect=function(e){var t=this,i=this.el.bbox();function a(o){return function(c){(c=c||window.event).preventDefault?c.preventDefault():c.returnValue=!1,c.stopPropagation();var d=c.pageX||c.touches[0].pageX,p=c.pageY||c.touches[0].pageY;t.el.fire(o,{x:d,y:p,event:c})}}if(this.rectSelection.isSelected=e,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2&&(this.options.points.map(function(o,c){var d=t.pointCoords(o,i),p=t.drawPoint(d.x,d.y).attr("class",t.options.classPoints+"_"+o).on("mousedown",a(o)).on("touchstart",a(o));t.rectSelection.set.add(p)}),this.rectSelection.set.each(function(){this.addClass(t.options.classPoints)})),this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var n=function(o){(o=o||window.event).preventDefault?o.preventDefault():o.returnValue=!1,o.stopPropagation();var c=o.pageX||o.touches[0].pageX,d=o.pageY||o.touches[0].pageY;t.el.fire("rot",{x:c,y:d,event:o})},l=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",n).on("mousedown",n);this.rectSelection.set.add(l)}},T.prototype.handler=function(){var e=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(e.x,e.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},T.prototype.observe=function(){var e=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver(function(){e.handler()}),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch{}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",function(){e.handler()})},T.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each(function(){this.remove()}),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each(function(){this.remove()}),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,t){return typeof e=="object"&&(t=e,e=!0),(this.remember("_selectHandler")||new T(this)).init(e===void 0||e,t||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function T(e){e.remember("_resizeHandler",this),this.el=e,this.parameters={},this.lastUpdateCall=null,this.p=e.doc().node.createSVGPoint()}T.prototype.transformPoint=function(e,t,i){return this.p.x=e-(this.offset.x-window.pageXOffset),this.p.y=t-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},T.prototype._extractPosition=function(e){return{x:e.clientX!=null?e.clientX:e.touches[0].clientX,y:e.clientY!=null?e.clientY:e.touches[0].clientY}},T.prototype.init=function(e){var t=this;if(this.stop(),e!=="stop"){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],e[i]!==void 0&&(this.options[i]=e[i]);this.el.on("lt.resize",function(a){t.resize(a||window.event)}),this.el.on("rt.resize",function(a){t.resize(a||window.event)}),this.el.on("rb.resize",function(a){t.resize(a||window.event)}),this.el.on("lb.resize",function(a){t.resize(a||window.event)}),this.el.on("t.resize",function(a){t.resize(a||window.event)}),this.el.on("r.resize",function(a){t.resize(a||window.event)}),this.el.on("b.resize",function(a){t.resize(a||window.event)}),this.el.on("l.resize",function(a){t.resize(a||window.event)}),this.el.on("rot.resize",function(a){t.resize(a||window.event)}),this.el.on("point.resize",function(a){t.resize(a||window.event)}),this.update()}},T.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},T.prototype.resize=function(e){var t=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(e.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:e.detail.x,y:e.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},this.el.type==="text"&&(this.parameters.fontSize=this.el.attr()["font-size"]),e.detail.i!==void 0){var a=this.el.array().valueOf();this.parameters.i=e.detail.i,this.parameters.pointCoords=[a[e.detail.i][0],a[e.detail.i][1]]}switch(e.type){case"lt":this.calc=function(n,l){var o=this.snapToGrid(n,l);if(this.parameters.box.width-o[0]>0&&this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-o[0]);o=this.checkAspectRatio(o),this.el.move(this.parameters.box.x+o[0],this.parameters.box.y+o[1]).size(this.parameters.box.width-o[0],this.parameters.box.height-o[1])}};break;case"rt":this.calc=function(n,l){var o=this.snapToGrid(n,l,2);if(this.parameters.box.width+o[0]>0&&this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+o[0]);o=this.checkAspectRatio(o,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+o[1]).size(this.parameters.box.width+o[0],this.parameters.box.height-o[1])}};break;case"rb":this.calc=function(n,l){var o=this.snapToGrid(n,l,0);if(this.parameters.box.width+o[0]>0&&this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+o[0]);o=this.checkAspectRatio(o),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+o[0],this.parameters.box.height+o[1])}};break;case"lb":this.calc=function(n,l){var o=this.snapToGrid(n,l,1);if(this.parameters.box.width-o[0]>0&&this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-o[0]);o=this.checkAspectRatio(o,!0),this.el.move(this.parameters.box.x+o[0],this.parameters.box.y).size(this.parameters.box.width-o[0],this.parameters.box.height+o[1])}};break;case"t":this.calc=function(n,l){var o=this.snapToGrid(n,l,2);if(this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y+o[1]).height(this.parameters.box.height-o[1])}};break;case"r":this.calc=function(n,l){var o=this.snapToGrid(n,l,0);if(this.parameters.box.width+o[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+o[0])}};break;case"b":this.calc=function(n,l){var o=this.snapToGrid(n,l,0);if(this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+o[1])}};break;case"l":this.calc=function(n,l){var o=this.snapToGrid(n,l,1);if(this.parameters.box.width-o[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x+o[0],this.parameters.box.y).width(this.parameters.box.width-o[0])}};break;case"rot":this.calc=function(n,l){var o=n+this.parameters.p.x,c=l+this.parameters.p.y,d=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),p=Math.atan2(c-this.parameters.box.y-this.parameters.box.height/2,o-this.parameters.box.x-this.parameters.box.width/2),x=this.parameters.rotation+180*(p-d)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(x-x%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(n,l){var o=this.snapToGrid(n,l,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),c=this.el.array().valueOf();c[this.parameters.i][0]=this.parameters.pointCoords[0]+o[0],c[this.parameters.i][1]=this.parameters.pointCoords[1]+o[1],this.el.plot(c)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:e}),SVG.on(window,"touchmove.resize",function(n){t.update(n||window.event)}),SVG.on(window,"touchend.resize",function(){t.done()}),SVG.on(window,"mousemove.resize",function(n){t.update(n||window.event)}),SVG.on(window,"mouseup.resize",function(){t.done()})},T.prototype.update=function(e){if(e){var t=this._extractPosition(e),i=this.transformPoint(t.x,t.y),a=i.x-this.parameters.p.x,n=i.y-this.parameters.p.y;this.lastUpdateCall=[a,n],this.calc(a,n),this.el.fire("resizing",{dx:a,dy:n,event:e})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},T.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},T.prototype.snapToGrid=function(e,t,i,a){var n;return a!==void 0?n=[(i+e)%this.options.snapToGrid,(a+t)%this.options.snapToGrid]:(i=i==null?3:i,n=[(this.parameters.box.x+e+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+t+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),e<0&&(n[0]-=this.options.snapToGrid),t<0&&(n[1]-=this.options.snapToGrid),e-=Math.abs(n[0])<this.options.snapToGrid/2?n[0]:n[0]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),t-=Math.abs(n[1])<this.options.snapToGrid/2?n[1]:n[1]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(e,t,i,a)},T.prototype.constraintToBox=function(e,t,i,a){var n,l,o=this.options.constraint||{};return a!==void 0?(n=i,l=a):(n=this.parameters.box.x+(1&i?0:this.parameters.box.width),l=this.parameters.box.y+(2&i?0:this.parameters.box.height)),o.minX!==void 0&&n+e<o.minX&&(e=o.minX-n),o.maxX!==void 0&&n+e>o.maxX&&(e=o.maxX-n),o.minY!==void 0&&l+t<o.minY&&(t=o.minY-l),o.maxY!==void 0&&l+t>o.maxY&&(t=o.maxY-l),[e,t]},T.prototype.checkAspectRatio=function(e,t){if(!this.options.saveAspectRatio)return e;var i=e.slice(),a=this.parameters.box.width/this.parameters.box.height,n=this.parameters.box.width+e[0],l=this.parameters.box.height-e[1],o=n/l;return o<a?(i[1]=n/a-this.parameters.box.height,t&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-l*a,t&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new T(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),window.Apex===void 0&&(window.Apex={});var To=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new j(this.ctx),this.ctx.axes=new ve(this.ctx),this.ctx.core=new jh(this.ctx.el,this.ctx),this.ctx.config=new U({}),this.ctx.data=new be(this.ctx),this.ctx.grid=new B(this.ctx),this.ctx.graphics=new H(this.ctx),this.ctx.coreUtils=new ue(this.ctx),this.ctx.crosshairs=new fe(this.ctx),this.ctx.events=new oe(this.ctx),this.ctx.exports=new Se(this.ctx),this.ctx.localization=new xe(this.ctx),this.ctx.options=new ie,this.ctx.responsive=new me(this.ctx),this.ctx.series=new $e(this.ctx),this.ctx.theme=new ce(this.ctx),this.ctx.formatters=new Fe(this.ctx),this.ctx.titleSubtitle=new Ee(this.ctx),this.ctx.legend=new qe(this.ctx),this.ctx.toolbar=new yt(this.ctx),this.ctx.dimensions=new Xe(this.ctx),this.ctx.updateHelpers=new Gh(this.ctx),this.ctx.zoomPanSelection=new hi(this.ctx),this.ctx.w.globals.tooltip=new Bh(this.ctx)}}]),T}(),Lo=function(){function T(e){m(this,T),this.ctx=e,this.w=e.w}return D(T,[{key:"clear",value:function(e){var t=e.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:t})}},{key:"killSVG",value:function(e){e.each(function(t,i){this.removeClass("*"),this.off(),this.stop()},!0),e.ungroup(),e.clear()}},{key:"clearDomElements",value:function(e){var t=this,i=e.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var n=this.w.globals.dom.baseEl;n&&this.ctx.eventList.forEach(function(o){n.removeEventListener(o,t.ctx.events.documentEvent)});var l=this.w.globals.dom;if(this.ctx.el!==null)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(l.Paper),l.Paper.remove(),l.elWrap=null,l.elGraphical=null,l.elAnnotations=null,l.elLegendWrap=null,l.baseEl=null,l.elGridRect=null,l.elGridRectMask=null,l.elGridRectMarkerMask=null,l.elForecastMask=null,l.elNonForecastMask=null,l.elDefs=null}}]),T}(),Tn=new WeakMap,Uh=function(){function T(e,t){m(this,T),this.opts=t,this.ctx=this,this.w=new de(t).init(),this.el=e,this.w.globals.cuid=P.randomId(),this.w.globals.chartID=this.w.config.chart.id?P.escapeString(this.w.config.chart.id):this.w.globals.cuid,new To(this).initModules(),this.create=P.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return D(T,[{key:"render",value:function(){var e=this;return new Promise(function(t,i){if(e.el!==null){Apex._chartInstances===void 0&&(Apex._chartInstances=[]),e.w.config.chart.id&&Apex._chartInstances.push({id:e.w.globals.chartID,group:e.w.config.chart.group,chart:e}),e.setLocale(e.w.config.chart.defaultLocale);var a=e.w.config.chart.events.beforeMount;if(typeof a=="function"&&a(e,e.w),e.events.fireEvent("beforeMount",[e,e.w]),window.addEventListener("resize",e.windowResizeHandler),function(p,x){var b=!1;if(p.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var y=p.getBoundingClientRect();p.style.display!=="none"&&y.width!==0||(b=!0)}var C=new ResizeObserver(function(E){b&&x.call(p,E),b=!0});p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(p.children).forEach(function(E){return C.observe(E)}):C.observe(p),Tn.set(x,C)}(e.el.parentNode,e.parentResizeHandler),!e.css){var n=e.el.getRootNode&&e.el.getRootNode(),l=P.is("ShadowRoot",n),o=e.el.ownerDocument,c=o.getElementById("apexcharts-css");!l&&c||(e.css=document.createElement("style"),e.css.id="apexcharts-css",e.css.textContent=`.apexcharts-canvas {
  position: relative;
  user-select: none;
  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
}


/* scrollbar is not visible by default for legend, hence forcing the visibility */
.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px;
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}


.apexcharts-inner {
  position: relative;
}

.apexcharts-text tspan {
  font-family: inherit;
}

.legend-mouseover-inactive {
  transition: 0.15s ease all;
  opacity: 0.20;
}

.apexcharts-series-collapsed {
  opacity: 0;
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: 0.15s ease all;
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, 0.96);
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, 0.8);
}

.apexcharts-tooltip * {
  font-family: inherit;
}


.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px;
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #ECEFF1;
  border-bottom: 1px solid #ddd;
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #333;
}

.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  font-weight: 600;
  margin-left: 5px;
}

.apexcharts-tooltip-title:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-z-value:empty {
  display: none;
}

.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-z-value {
  font-weight: 600;
}

.apexcharts-tooltip-text-goals-label, 
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px;
}

.apexcharts-tooltip-goals-group, 
.apexcharts-tooltip-text-goals-label, 
.apexcharts-tooltip-text-goals-value {
  display: flex;
}
.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px;
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0px;
  margin-right: 10px;
  border-radius: 50%;
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center;
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1;
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px;
}

.apexcharts-tooltip-series-group-hidden {
  opacity: 0;
  height: 0;
  line-height: 0;
  padding: 0 !important;
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px;
}

.apexcharts-tooltip-box, .apexcharts-custom-tooltip {
  padding: 4px 8px;
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse;
}

.apexcharts-tooltip-box>div {
  margin: 4px 0;
}

.apexcharts-tooltip-box span.value {
  font-weight: bold;
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px;
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777;
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.apexcharts-xaxistooltip {
  opacity: 0;
  padding: 9px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
  transition: 0.15s ease all;
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.apexcharts-xaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-left: -6px;
}

.apexcharts-xaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-left: -7px;
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%;
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%;
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #ECEFF1;
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90A4AE;
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #ECEFF1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90A4AE;
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
  border-top-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-yaxistooltip {
  opacity: 0;
  padding: 4px 10px;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #ECEFF1;
  border: 1px solid #90A4AE;
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #fff;
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.apexcharts-yaxistooltip:after {
  border-color: rgba(236, 239, 241, 0);
  border-width: 6px;
  margin-top: -6px;
}

.apexcharts-yaxistooltip:before {
  border-color: rgba(144, 164, 174, 0);
  border-width: 7px;
  margin-top: -7px;
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%;
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%;
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #ECEFF1;
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90A4AE;
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
  border-left-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #ECEFF1;
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90A4AE;
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
  border-right-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, 0.5);
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1;
}

.apexcharts-yaxistooltip-hidden {
  display: none;
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: 0.15s ease all;
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: 0.15s ease all;
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0;
}

.apexcharts-selection-rect {
  cursor: move;
}

.svg_select_boundingRect, .svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
}
.apexcharts-selection-rect + g .svg_select_boundingRect,
.apexcharts-selection-rect + g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden;
}

.apexcharts-selection-rect + g .svg_select_points_l,
.apexcharts-selection-rect + g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible;
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2;
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon,
.apexcharts-reset-icon,
.apexcharts-pan-icon,
.apexcharts-selection-icon,
.apexcharts-menu-icon,
.apexcharts-toolbar-custom-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6E8192;
  text-align: center;
}

.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-menu-icon svg {
  fill: #6E8192;
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(0.76)
}

.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
  fill: #f3f4f5;
}

.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
  fill: #008FFB;
}

.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-menu-icon:hover svg {
  fill: #333;
}

.apexcharts-selection-icon,
.apexcharts-menu-icon {
  position: relative;
}

.apexcharts-reset-icon {
  margin-left: 5px;
}

.apexcharts-zoom-icon,
.apexcharts-reset-icon,
.apexcharts-menu-icon {
  transform: scale(0.85);
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(0.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px;
}

.apexcharts-pan-icon {
  transform: scale(0.62);
  position: relative;
  left: 1px;
  top: 0px;
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6E8192;
  stroke-width: 2;
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008FFB;
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333;
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0px 6px 2px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: 0.15s ease all;
  pointer-events: none;
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: 0.15s ease all;
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer;
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee;
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}

@media screen and (min-width: 768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1;
  }
}

.apexcharts-datalabel.apexcharts-element-hidden {
  opacity: 0;
}

.apexcharts-pie-label,
.apexcharts-datalabels,
.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value {
  cursor: default;
  pointer-events: none;
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
}

.apexcharts-canvas .apexcharts-element-hidden {
  opacity: 0;
}

.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-gridline,
.apexcharts-annotation-rect,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-point-annotation-label,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-area-series .apexcharts-area,
.apexcharts-line,
.apexcharts-zoom-rect,
.apexcharts-toolbar svg,
.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-radar-series path,
.apexcharts-radar-series polygon {
  pointer-events: none;
}


/* markers */

.apexcharts-marker {
  transition: 0.15s ease all;
}

@keyframes opaque {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


/* Resize generated styles */

@keyframes resizeanim {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
}

.resize-triggers,
.resize-triggers>div,
.contract-trigger:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.resize-triggers>div {
  background: #eee;
  overflow: auto;
}

.contract-trigger:before {
  width: 200%;
  height: 200%;
}`,l?n.prepend(e.css):o.head.appendChild(e.css))}var d=e.create(e.w.config.series,{});if(!d)return t(e);e.mount(d).then(function(){typeof e.w.config.chart.events.mounted=="function"&&e.w.config.chart.events.mounted(e,e.w),e.events.fireEvent("mounted",[e,e.w]),t(d)}).catch(function(p){i(p)})}else i(new Error("Element not found"))})}},{key:"create",value:function(e,t){var i=this.w;new To(this).initModules();var a=this.w.globals;if(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(t),i.config.xaxis.convertedCatToNumeric&&new ct(i.config).convertCatToNumericXaxis(i.config,this.ctx),this.el===null||(this.core.setupElements(),i.config.chart.type==="treemap"&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),a.svgWidth===0))return a.animationEnded=!0,null;var n=ue.checkComboSeries(e);a.comboCharts=n.comboCharts,a.comboBarCount=n.comboBarCount;var l=e.every(function(x){return x.data&&x.data.length===0});(e.length===0||l)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(e),this.theme.init(),new je(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),i.config.xaxis.type!=="category"&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new ue(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var c=this.core.plotChartType(e,o),d=new Pe(this);d.bringForward(),i.config.dataLabels.background.enabled&&d.dataLabelsBackground(),this.core.shiftGraphPosition();var p={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:c,xyRatios:o,elInner:i.globals.dom.elGraphical,dimensions:p}}},{key:"mount",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this,a=i.w;return new Promise(function(n,l){if(i.el===null)return l(new Error("Not enough data to display or target element not found"));(t===null||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),a.config.chart.type!=="treemap"&&i.axes.drawAxis(a.config.chart.type,t.xyRatios),i.grid=new B(i);var o=i.grid.drawGrid();i.annotations=new ye(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),a.config.grid.position==="back"&&o&&a.globals.dom.elGraphical.add(o.el);var c=new ke(e.ctx),d=new ae(e.ctx);if(o!==null&&(c.xAxisLabelCorrections(o.xAxisTickWidth),d.setYAxisTextAlignments(),a.config.yaxis.map(function(b,y){a.globals.ignoreYAxisIndexes.indexOf(y)===-1&&d.yAxisTitleRotate(y,b.opposite)})),a.config.annotations.position==="back"&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(t.elGraph))for(var p=0;p<t.elGraph.length;p++)a.globals.dom.elGraphical.add(t.elGraph[p]);else a.globals.dom.elGraphical.add(t.elGraph);if(a.config.grid.position==="front"&&o&&a.globals.dom.elGraphical.add(o.el),a.config.xaxis.crosshairs.position==="front"&&i.crosshairs.drawXCrosshairs(),a.config.yaxis[0].crosshairs.position==="front"&&i.crosshairs.drawYCrosshairs(),a.config.annotations.position==="front"&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(t.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:t.xyRatios});else{var x=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach(function(b){x[b]=!1})}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach(function(b){b.method(b.params,!1,b.context)}),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),n(i)})}},{key:"destroy",value:function(){var e,t;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,e=this.parentResizeHandler,(t=Tn.get(e))&&(t.disconnect(),Tn.delete(e));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach(function(a,n){a.id===P.escapeString(i)&&Apex._chartInstances.splice(n,1)}),new Lo(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],n=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],l=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=this.w;return o.globals.selection=void 0,e.series&&(this.series.resetSeries(!1,!0,!1),e.series.length&&e.series[0].data&&(e.series=e.series.map(function(c,d){return t.updateHelpers._extendSeries(c,d)})),this.updateHelpers.revertDefaultAxisMinMax()),e.xaxis&&(e=this.updateHelpers.forceXAxisUpdate(e)),e.yaxis&&(e=this.updateHelpers.forceYAxisUpdate(e)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),e.theme&&(e=this.theme.updateThemeOptions(e)),this.updateHelpers._updateOptions(e,i,a,n,l)}},{key:"updateSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(e,t,i)}},{key:"appendSeries",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=this.w.config.series.slice();return a.push(e),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,t,i)}},{key:"appendData",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),n=0;n<a.length;n++)if(e[n]!==null&&e[n]!==void 0)for(var l=0;l<e[n].data.length;l++)a[n].data.push(e[n].data[l]);return i.w.config.series=a,t&&(i.w.globals.initialSeries=P.clone(i.w.config.series)),this.update()}},{key:"update",value:function(e){var t=this;return new Promise(function(i,a){new Lo(t.ctx).clear({isUpdating:!0});var n=t.create(t.w.config.series,e);if(!n)return i(t);t.mount(n).then(function(){typeof t.w.config.chart.events.updated=="function"&&t.w.config.chart.events.updated(t,t.w),t.events.fireEvent("updated",[t,t.w]),t.w.globals.isDirty=!0,i(t)}).catch(function(l){a(l)})})}},{key:"getSyncedCharts",value:function(){var e=this.getGroupedCharts(),t=[this];return e.length&&(t=[],e.forEach(function(i){t.push(i)})),t}},{key:"getGroupedCharts",value:function(){var e=this;return Apex._chartInstances.filter(function(t){if(t.group)return!0}).map(function(t){return e.w.config.chart.group===t.group?t.chart:e})}},{key:"toggleSeries",value:function(e){return this.series.toggleSeries(e)}},{key:"highlightSeriesOnLegendHover",value:function(e,t){return this.series.toggleSeriesOnHover(e,t)}},{key:"showSeries",value:function(e){this.series.showSeries(e)}},{key:"hideSeries",value:function(e){this.series.hideSeries(e)}},{key:"resetSeries",value:function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];this.series.resetSeries(e,t)}},{key:"addEventListener",value:function(e,t){this.events.addEventListener(e,t)}},{key:"removeEventListener",value:function(e,t){this.events.removeEventListener(e,t)}},{key:"addXaxisAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(e,t,a)}},{key:"addYaxisAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(e,t,a)}},{key:"addPointAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(e,t,a)}},{key:"clearAnnotations",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,t=this;e&&(t=e),t.annotations.clearAnnotations(t)}},{key:"removeAnnotation",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,i=this;t&&(i=t),i.annotations.removeAnnotation(i,e)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(e,t){return this.coreUtils.getSeriesTotalsXRange(e,t)}},{key:"getHighestValueInSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=new q(this.ctx);return t.getMinYMaxY(e).highestY}},{key:"getLowestValueInSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=new q(this.ctx);return t.getMinYMaxY(e).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(e,t){return this.updateHelpers.toggleDataPointSelection(e,t)}},{key:"zoomX",value:function(e,t){this.ctx.toolbar.zoomUpdateOptions(e,t)}},{key:"setLocale",value:function(e){this.localization.setCurrentLocaleValues(e)}},{key:"dataURI",value:function(e){return new Se(this.ctx).dataURI(e)}},{key:"exportToCSV",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=new Se(this.ctx);return t.exportToCSV(e)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var e=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout(function(){e.w.globals.resized=!0,e.w.globals.dataChanged=!1,e.ctx.update()},150)}},{key:"_windowResizeHandler",value:function(){var e=this.w.config.chart.redrawOnWindowResize;typeof e=="function"&&(e=e()),e&&this._windowResize()}}],[{key:"getChartByID",value:function(e){var t=P.escapeString(e),i=Apex._chartInstances.filter(function(a){return a.id===t})[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),t=0;t<e.length;t++)new T(e[t],JSON.parse(e[t].getAttribute("data-options"))).render()}},{key:"exec",value:function(e,t){var i=this.getChartByID(e);if(i){i.w.globals.isExecCalled=!0;var a=null;if(i.publicMethods.indexOf(t)!==-1){for(var n=arguments.length,l=new Array(n>2?n-2:0),o=2;o<n;o++)l[o-2]=arguments[o];a=i[t].apply(i,l)}return a}}},{key:"merge",value:function(e,t){return P.extend(e,t)}}]),T}();s.exports=Uh}(Ma,Ma.exports)),Ma.exports}(function(s){s.exports=function(r){var u={};function h(g){if(u[g])return u[g].exports;var m=u[g]={i:g,l:!1,exports:{}};return r[g].call(m.exports,m,m.exports,h),m.l=!0,m.exports}return h.m=r,h.c=u,h.d=function(g,m,w){h.o(g,m)||Object.defineProperty(g,m,{enumerable:!0,get:w})},h.r=function(g){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},h.t=function(g,m){if(m&1&&(g=h(g)),m&8||m&4&&typeof g=="object"&&g&&g.__esModule)return g;var w=Object.create(null);if(h.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:g}),m&2&&typeof g!="string")for(var D in g)h.d(w,D,function(S){return g[S]}.bind(null,D));return w},h.n=function(g){var m=g&&g.__esModule?function(){return g.default}:function(){return g};return h.d(m,"a",m),m},h.o=function(g,m){return Object.prototype.hasOwnProperty.call(g,m)},h.p="",h(h.s="fb15")}({8875:function(r,u,h){var g,m,w;(function(D,S){m=[],g=S,w=typeof g=="function"?g.apply(u,m):g,w!==void 0&&(r.exports=w)})(typeof self<"u"?self:this,function(){function D(){var S=Object.getOwnPropertyDescriptor(document,"currentScript");if(!S&&"currentScript"in document&&document.currentScript||S&&S.get!==D&&document.currentScript)return document.currentScript;try{throw new Error}catch(Z){var _=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,F=/@([^@]*):(\d+):(\d+)\s*$/ig,z=_.exec(Z.stack)||F.exec(Z.stack),O=z&&z[1]||!1,W=z&&z[2]||!1,$=document.location.href.replace(document.location.hash,""),K,se,V,P=document.getElementsByTagName("script");O===$&&(K=document.documentElement.outerHTML,se=new RegExp("(?:[^\\n]+?\\n){0,"+(W-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),V=K.replace(se,"$1").trim());for(var j=0;j<P.length;j++)if(P[j].readyState==="interactive"||P[j].src===O||O===$&&P[j].innerHTML&&P[j].innerHTML.trim()===V)return P[j];return null}}return D})},"8bbf":function(r,u){r.exports=Yg},"95e6":function(r,u){r.exports=Wg()},fb15:function(r,u,h){if(h.r(u),typeof window<"u"){var g=window.document.currentScript;{var m=h("8875");g=m(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:m})}var w=g&&g.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);w&&(h.p=w[1])}var D=h("8bbf"),S=h("95e6"),_=h.n(S);const F=["animationEnd","beforeMount","mounted","updated","click","mouseMove","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","scrolled"];var O=Object(D.defineComponent)({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:F,setup(K,{emit:se}){const V=Object(D.ref)(null),P=Object(D.ref)(null),j=U=>U&&typeof U=="object"&&!Array.isArray(U)&&U!=null,Z=(U,he)=>{typeof Object.assign!="function"&&function(){Object.assign=function(be){if(be==null)throw new TypeError("Cannot convert undefined or null to object");let Fe=Object(be);for(let Ie=1;Ie<arguments.length;Ie++){let Se=arguments[Ie];if(Se!=null)for(let ke in Se)Se.hasOwnProperty(ke)&&(Fe[ke]=Se[ke])}return Fe}}();let de=Object.assign({},U);return j(U)&&j(he)&&Object.keys(he).forEach(be=>{j(he[be])?be in U?de[be]=Z(U[be],he[be]):Object.assign(de,{[be]:he[be]}):Object.assign(de,{[be]:he[be]})}),de},H=async()=>{await Object(D.nextTick)();const U={chart:{type:K.type||K.options.chart.type||"line",height:K.height,width:K.width,events:{}},series:K.series};F.forEach(de=>{let be=(...Fe)=>se(de,...Fe);U.chart.events[de]=be});const he=Z(K.options,U);return P.value=new _.a(V.value,he),P.value.render()},ue=()=>(J(),H()),J=()=>{P.value.destroy()},te=(U,he)=>P.value.updateSeries(U,he),re=(U,he,de,be)=>P.value.updateOptions(U,he,de,be),Q=U=>P.value.toggleSeries(U),le=U=>{P.value.showSeries(U)},ie=U=>{P.value.hideSeries(U)},ye=(U,he)=>P.value.appendSeries(U,he),ge=()=>{P.value.resetSeries()},je=(U,he)=>{P.value.toggleDataPointSelection(U,he)},Te=U=>P.value.appendData(U),Pe=(U,he)=>P.value.zoomX(U,he),We=()=>P.value.dataURI(),$e=(U,he)=>{P.value.addXaxisAnnotation(U,he)},Gt=(U,he)=>{P.value.addYaxisAnnotation(U,he)},rt=(U,he)=>{P.value.addPointAnnotation(U,he)},Ge=(U,he)=>{P.value.removeAnnotation(U,he)},ot=()=>{P.value.clearAnnotations()};Object(D.onBeforeMount)(()=>{window.ApexCharts=_.a}),Object(D.onMounted)(()=>{V.value=Object(D.getCurrentInstance)().proxy.$el,H()}),Object(D.onBeforeUnmount)(()=>{!P.value||J()});const ct=Object(D.toRefs)(K);return Object(D.watch)(ct.options,()=>{!P.value&&K.options?H():P.value.updateOptions(K.options)}),Object(D.watch)(ct.series,()=>{!P.value&&K.series?H():P.value.updateSeries(K.series)},{deep:!0}),Object(D.watch)(ct.type,()=>{ue()}),Object(D.watch)(ct.width,()=>{ue()}),Object(D.watch)(ct.height,()=>{ue()}),{chart:P,init:H,refresh:ue,destroy:J,updateOptions:re,updateSeries:te,toggleSeries:Q,showSeries:le,hideSeries:ie,resetSeries:ge,zoomX:Pe,toggleDataPointSelection:je,appendData:Te,appendSeries:ye,addXaxisAnnotation:$e,addYaxisAnnotation:Gt,addPointAnnotation:rt,removeAnnotation:Ge,clearAnnotations:ot,dataURI:We}},render(){return Object(D.h)("div",{class:"vue-apexcharts"})}});const W=K=>{K.component(O.name,O)};O.install=W;var $=O;u.default=$}})})(rh);const Vg=nh(rh.exports),jg={width:"249",height:"53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Gg=ao('<path d="M90.278 16.382v-4.564h21.503v4.564h-8.015V38h-5.472V16.382h-8.016Zm25.694 28.982c-.69 0-1.338-.056-1.943-.167-.596-.102-1.091-.234-1.483-.396l1.228-4.065c.639.196 1.214.302 1.725.32.52.016.968-.103 1.343-.359.383-.255.694-.69.933-1.303l.32-.831-7.044-20.2h5.727l4.065 14.421h.205l4.103-14.42h5.766l-7.632 21.758c-.367 1.057-.865 1.977-1.496 2.761a6.126 6.126 0 0 1-2.365 1.829c-.954.434-2.105.652-3.452.652Zm17.372 0v-27h5.369v3.298h.243a7.21 7.21 0 0 1 1.036-1.61c.46-.555 1.056-1.015 1.789-1.381.742-.375 1.662-.563 2.762-.563a7.38 7.38 0 0 1 3.963 1.125c1.21.741 2.177 1.862 2.902 3.362.724 1.492 1.086 3.362 1.086 5.612 0 2.19-.353 4.04-1.061 5.549-.698 1.5-1.653 2.638-2.863 3.413-1.202.767-2.549 1.15-4.04 1.15-1.057 0-1.956-.174-2.697-.524-.733-.349-1.334-.788-1.803-1.316a6.674 6.674 0 0 1-1.074-1.624h-.166v10.509h-5.446Zm5.331-17.182c0 1.167.162 2.186.486 3.055.324.87.792 1.547 1.406 2.033.614.477 1.359.716 2.237.716.887 0 1.637-.243 2.25-.729.614-.494 1.078-1.176 1.394-2.045.323-.878.485-1.888.485-3.03 0-1.134-.157-2.13-.473-2.992-.315-.86-.779-1.534-1.393-2.02-.614-.485-1.368-.728-2.263-.728-.886 0-1.636.234-2.25.703-.605.469-1.069 1.133-1.393 1.994-.324.861-.486 1.875-.486 3.043Zm26.039 10.201c-2.02 0-3.758-.409-5.216-1.227-1.449-.826-2.565-1.994-3.349-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.887-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.295 0 2.501.209 3.618.626a8.023 8.023 0 0 1 2.94 1.854c.844.827 1.5 1.866 1.969 3.12.468 1.244.703 2.701.703 4.372v1.495h-16.581V26.2H168.6c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.559.192-2.199.576a4.039 4.039 0 0 0-1.483 1.52 4.29 4.29 0 0 0-.549 2.11v3.21c0 .97.179 1.81.537 2.517a3.93 3.93 0 0 0 1.546 1.637c.665.383 1.454.575 2.366.575a5.14 5.14 0 0 0 1.661-.255c.503-.171.934-.427 1.292-.768.358-.34.63-.758.818-1.252l5.037.332a6.879 6.879 0 0 1-1.573 3.17c-.784.895-1.798 1.594-3.042 2.097-1.236.494-2.664.741-4.283.741Zm28.545-14.42-4.986.307a2.567 2.567 0 0 0-.55-1.15 2.917 2.917 0 0 0-1.112-.832c-.452-.213-.993-.32-1.623-.32-.844 0-1.556.18-2.135.538-.58.35-.87.818-.87 1.406 0 .469.188.865.563 1.189.375.324 1.018.584 1.93.78l3.554.716c1.909.392 3.333 1.022 4.27 1.892.938.869 1.406 2.011 1.406 3.426 0 1.287-.379 2.416-1.137 3.388-.75.971-1.782 1.73-3.094 2.275-1.304.537-2.808.805-4.513.805-2.599 0-4.67-.54-6.213-1.623-1.534-1.091-2.433-2.574-2.698-4.449l5.357-.281c.162.792.554 1.398 1.176 1.815.622.41 1.419.614 2.391.614.954 0 1.721-.183 2.301-.55.588-.375.886-.856.895-1.444-.009-.495-.218-.9-.627-1.215-.409-.324-1.039-.571-1.892-.741l-3.4-.678c-1.918-.384-3.345-1.048-4.283-1.994-.929-.946-1.393-2.152-1.393-3.618 0-1.262.341-2.348 1.022-3.26.691-.912 1.658-1.615 2.902-2.11 1.253-.494 2.719-.741 4.398-.741 2.48 0 4.432.524 5.855 1.572 1.432 1.049 2.267 2.476 2.506 4.283Zm13.961-5.6v4.091h-11.825v-4.09h11.825Zm-9.14-4.704h5.446v18.307c0 .503.076.895.23 1.176.153.273.366.464.639.575.281.111.605.166.972.166.255 0 .511-.02.767-.063.255-.051.451-.09.588-.115l.856 4.052a15.39 15.39 0 0 1-1.15.294c-.495.12-1.096.192-1.803.218-1.312.05-2.463-.124-3.452-.525-.98-.4-1.743-1.022-2.288-1.866-.545-.844-.814-1.91-.805-3.196V13.659Zm21.066 24.724c-2.02 0-3.759-.409-5.216-1.227-1.449-.826-2.566-1.994-3.35-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.888-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.296 0 2.502.209 3.618.626a8.035 8.035 0 0 1 2.941 1.854c.843.827 1.5 1.866 1.968 3.12.469 1.244.704 2.701.704 4.372v1.495h-16.581V26.2h11.454c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.56.192-2.199.576a4.032 4.032 0 0 0-1.483 1.52 4.301 4.301 0 0 0-.55 2.11v3.21c0 .97.179 1.81.537 2.517a3.932 3.932 0 0 0 1.547 1.637c.665.383 1.453.575 2.365.575a5.15 5.15 0 0 0 1.662-.255c.503-.171.933-.427 1.291-.768.358-.34.631-.758.819-1.252l5.036.332a6.868 6.868 0 0 1-1.572 3.17c-.784.895-1.798 1.594-3.043 2.097-1.235.494-2.663.741-4.282.741ZM231.353 38V18.364h5.279v3.426h.205c.358-1.219.959-2.14 1.802-2.762.844-.63 1.816-.946 2.915-.946.273 0 .567.017.882.052.316.034.593.08.831.14v4.832a7.082 7.082 0 0 0-1.061-.204 9.528 9.528 0 0 0-1.24-.09c-.801 0-1.517.175-2.148.525a3.865 3.865 0 0 0-1.483 1.431c-.357.614-.536 1.322-.536 2.123V38h-5.446Z" fill="#fff"></path><path d="M121.082 17.023c-.521 0-.976-.068-1.368-.204a2.939 2.939 0 0 1-.989-.547 2.628 2.628 0 0 1-.626-.78l.726-.478c.109.192.255.381.437.567.186.186.426.34.721.462.298.123.664.184 1.099.184.676 0 1.221-.169 1.635-.507.418-.338.627-.863.627-1.576v-1.72h-.08c-.103.232-.25.464-.442.696a2.28 2.28 0 0 1-.756.572c-.308.152-.691.229-1.148.229-.61 0-1.152-.151-1.626-.453-.471-.302-.842-.732-1.114-1.293-.268-.563-.402-1.234-.402-2.013 0-.772.13-1.452.392-2.038.265-.587.635-1.044 1.109-1.373.474-.328 1.026-.492 1.656-.492.467 0 .855.083 1.163.249.308.162.555.364.741.606.189.242.336.478.442.706h.09V6.364h.865v7.835c0 .646-.138 1.178-.413 1.596-.275.417-.65.726-1.124.925-.474.202-1.012.303-1.615.303Zm-.06-3.913c.491 0 .91-.118 1.258-.353.348-.239.615-.58.8-1.024.186-.444.279-.973.279-1.586 0-.597-.091-1.125-.274-1.586-.182-.464-.447-.829-.795-1.094-.345-.268-.768-.402-1.268-.402-.51 0-.941.137-1.293.412-.351.275-.616.647-.795 1.114a4.294 4.294 0 0 0-.269 1.556c0 .583.092 1.099.274 1.546.182.444.449.792.8 1.044.352.249.779.373 1.283.373Zm8.383 1.05c-.66 0-1.243-.168-1.75-.503a3.398 3.398 0 0 1-1.184-1.387c-.285-.593-.427-1.278-.427-2.053 0-.783.142-1.47.427-2.064.285-.596.68-1.06 1.184-1.392.507-.334 1.09-.502 1.75-.502.659 0 1.241.168 1.745.502.503.335.898.8 1.183 1.392.288.594.432 1.281.432 2.064 0 .775-.142 1.46-.427 2.053a3.385 3.385 0 0 1-1.188 1.387c-.504.335-1.086.502-1.745.502Zm0-.811c.53 0 .979-.143 1.347-.428.368-.285.646-.664.835-1.138.192-.474.288-.996.288-1.566 0-.57-.096-1.094-.288-1.571a2.673 2.673 0 0 0-.835-1.149c-.368-.288-.817-.432-1.347-.432-.527 0-.977.144-1.348.432a2.707 2.707 0 0 0-.84 1.149 4.23 4.23 0 0 0-.283 1.57c0 .57.094 1.093.283 1.567.192.474.472.853.84 1.138.368.285.817.428 1.348.428Zm12.103-6.985v.77h-3.754v-.77h3.754ZM138.927 14V5.245c0-.411.095-.757.284-1.039a1.85 1.85 0 0 1 .75-.641c.309-.146.635-.22.98-.22.232 0 .424.02.576.06.156.037.279.073.368.11l-.258.775c-.066-.02-.148-.043-.244-.07a1.391 1.391 0 0 0-.363-.039c-.384 0-.681.108-.89.323-.208.216-.313.524-.313.925L139.812 14h-.885Zm6.134.174c-.46 0-.881-.09-1.262-.268a2.208 2.208 0 0 1-.91-.786c-.226-.345-.338-.762-.338-1.253 0-.378.071-.696.214-.954.142-.259.344-.471.606-.637a3.36 3.36 0 0 1 .93-.392c.358-.097.752-.171 1.183-.224.428-.053.789-.1 1.084-.14.298-.04.525-.102.681-.188.156-.087.234-.226.234-.418v-.179c0-.52-.156-.93-.468-1.228-.308-.302-.752-.452-1.332-.452-.55 0-.999.12-1.347.363-.345.242-.587.527-.726.855l-.84-.304c.172-.417.411-.75.715-.999a2.829 2.829 0 0 1 1.025-.542 3.99 3.99 0 0 1 1.148-.169c.292 0 .595.038.91.115.318.076.613.208.885.397.272.186.492.446.661.78.169.332.254.753.254 1.264V14h-.885v-1.208h-.055a2.45 2.45 0 0 1-1.258 1.178c-.315.136-.684.204-1.109.204Zm.12-.81c.47 0 .878-.105 1.223-.314.344-.208.61-.485.795-.83.189-.348.284-.73.284-1.148V9.968a.891.891 0 0 1-.333.17c-.153.049-.33.094-.532.133-.199.037-.398.068-.597.095a69.4 69.4 0 0 1-.537.07 4.964 4.964 0 0 0-1.104.248c-.305.113-.538.268-.701.467-.162.196-.243.448-.243.756 0 .464.165.824.497 1.079.331.252.747.378 1.248.378Zm10.531-5.325-.81.229a2.138 2.138 0 0 0-.338-.622 1.54 1.54 0 0 0-.572-.442c-.232-.11-.52-.164-.865-.164-.517 0-.941.122-1.273.368-.331.245-.497.561-.497.95 0 .327.113.594.338.8.229.202.58.363 1.054.482l1.154.283c.639.156 1.118.403 1.436.741.322.338.483.762.483 1.273 0 .43-.12.814-.358 1.148-.239.335-.572.598-1 .79-.424.19-.916.284-1.476.284-.746 0-1.361-.167-1.845-.502-.484-.338-.793-.825-.929-1.462l.85-.209c.109.455.323.798.641 1.03.322.232.744.348 1.268.348.587 0 1.056-.131 1.407-.393.351-.265.527-.597.527-.994 0-.309-.103-.567-.308-.776-.206-.212-.517-.368-.935-.467l-1.248-.299c-.663-.159-1.153-.41-1.471-.755-.319-.345-.478-.773-.478-1.283 0-.42.115-.79.343-1.109.229-.321.544-.573.945-.755a3.28 3.28 0 0 1 1.372-.274c.699 0 1.258.16 1.675.478.421.314.725.749.91 1.302Zm4.915-1.675v.77h-3.644v-.77h3.644Zm-2.506-1.83h.89v7.472c0 .319.055.569.164.751.11.18.252.307.428.383.176.073.363.11.562.11.116 0 .215-.007.298-.02.083-.017.156-.034.219-.05l.189.8a2.093 2.093 0 0 1-.318.09c-.126.03-.282.044-.468.044a2.17 2.17 0 0 1-.939-.213 1.834 1.834 0 0 1-.736-.637c-.192-.281-.289-.631-.289-1.049v-7.68Zm7.381 9.625c-.712 0-1.329-.166-1.849-.497a3.327 3.327 0 0 1-1.208-1.387c-.282-.593-.423-1.276-.423-2.048 0-.77.141-1.452.423-2.049.285-.6.678-1.069 1.178-1.407.504-.341 1.085-.512 1.745-.512.414 0 .814.076 1.198.229.385.15.729.38 1.034.691.308.308.552.698.731 1.168.179.468.269 1.021.269 1.66v.438h-5.966v-.78h5.061c0-.49-.1-.932-.299-1.323a2.317 2.317 0 0 0-.82-.934 2.15 2.15 0 0 0-1.208-.343c-.484 0-.91.129-1.278.387-.368.259-.656.6-.865 1.025-.205.424-.31.888-.313 1.392v.467c0 .607.104 1.137.313 1.59.212.452.512.801.9 1.05.388.248.847.373 1.377.373.362 0 .678-.057.95-.17a2.005 2.005 0 0 0 1.118-1.084l.841.274a2.477 2.477 0 0 1-.572.89c-.262.272-.59.49-.984.656-.392.163-.842.244-1.353.244ZM170.41 14V6.364h.86v1.173h.064c.153-.385.418-.694.796-.93a2.384 2.384 0 0 1 1.292-.358 12.569 12.569 0 0 1 .468.015v.9a8.008 8.008 0 0 0-.209-.03 2.446 2.446 0 0 0-.323-.02c-.398 0-.753.085-1.064.254a1.882 1.882 0 0 0-.731.69 1.906 1.906 0 0 0-.268 1.01V14h-.885Z" fill="#EBEBEB" fill-opacity=".6"></path><g clip-path="url(#a)" fill="#fff"><path d="M40 22.504c-7.172-6.63-11.055 3.811-19.11-.549C21.866 27.01 33.127 34.6 40 25.55c6.874 9.05 18.135 1.46 19.11-3.595-8.055 4.36-11.938-6.08-19.11.55Z"></path><path d="M32.105 30.657c-.856 0-1.735-.104-2.63-.313-2.223-.52-4.44-1.686-6.242-3.285-1.737-1.541-2.91-3.34-3.217-4.935a.891.891 0 0 1 1.299-.952c3.429 1.857 5.961.756 8.642-.41 1.552-.674 3.158-1.372 4.9-1.416 1.776-.047 3.465.602 5.143 1.977 1.678-1.375 3.368-2.024 5.142-1.977 1.743.044 3.348.742 4.901 1.417 2.681 1.165 5.213 2.265 8.642.41a.89.89 0 0 1 1.299.951c-.308 1.596-1.48 3.394-3.217 4.935-1.803 1.6-4.02 2.766-6.242 3.285-4.032.942-7.73-.261-10.525-3.393-2.174 2.436-4.896 3.706-7.895 3.706Zm-9.554-7.05c1.332 2.074 4.11 4.25 7.33 5.002 2.586.605 6.319.471 9.41-3.598a.89.89 0 0 1 1.418 0c3.09 4.07 6.823 4.203 9.41 3.599 3.219-.753 5.997-2.929 7.33-5.003-3.199.927-5.786-.198-8.116-1.21-3.004-1.306-5.377-2.337-8.728.761a.89.89 0 0 1-1.21 0c-3.352-3.098-5.724-2.067-8.728-.761-1.72.747-3.579 1.555-5.72 1.555a8.541 8.541 0 0 1-2.396-.345Z"></path><rect x="22" y="15" width="6" height="2" rx="1"></rect><rect x="30" y="15" width="6" height="2" rx="1"></rect><rect x="46" y="15" width="6" height="2" rx="1"></rect><rect x="54" y="15" width="6" height="2" rx="1"></rect><rect x="38" y="15" width="6" height="2" rx="1"></rect><rect x="26" y="33" width="6" height="2" rx="1"></rect><rect x="42" y="33" width="6" height="2" rx="1"></rect><rect x="50" y="33" width="6" height="2" rx="1"></rect><rect x="34" y="33" width="6" height="2" rx="1"></rect><rect x="22" y="37" width="38" height="2" rx="1"></rect></g><rect x="18" y="33" width="6" height="2" rx="1" fill="#fff"></rect><rect x="6" y="33" width="8" height="2" rx="1" fill="#fff"></rect><rect x="6" y="27" width="6" height="2" rx="1" fill="#fff"></rect><rect x="14" y="27" width="6" height="2" rx="1" fill="#fff"></rect><rect x="6" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="12" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="18" y="37" width="2" height="2" rx="1" fill="#fff"></rect><rect x="62" y="37" width="6" height="2" rx="1" fill="#fff"></rect><rect x="70" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="6" y="19" width="10" height="2" rx="1" fill="#fff"></rect><rect x="6" y="23" width="8" height="2" rx="1" fill="#fff"></rect><rect x="62" y="15" width="6" height="2" rx="1" fill="#fff"></rect><rect x="70" y="15" width="6" height="2" rx="1" fill="#fff"></rect><rect x=".5" y="9.5" width="79" height="33" rx="3.5" stroke="#fff"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="#fff"></rect><rect x="62" y="19" width="14" height="2" rx="1" fill="#fff"></rect><rect x="66" y="23" width="10" height="2" rx="1" fill="#fff"></rect><rect x="68" y="27" width="8" height="2" rx="1" fill="#fff"></rect><rect x="66" y="33" width="10" height="2" rx="1" fill="#fff"></rect><rect x="62" y="27" width="4" height="2" rx="1" fill="#fff"></rect><rect x="60" y="33" width="4" height="2" rx="1" fill="#fff"></rect><defs><clipPath id="a"><path fill="#fff" transform="translate(20 5)" d="M0 0h40v40H0z"></path></clipPath></defs>',25),Ug=[Gg];function $g(s,r){return Ze(),st("svg",jg,Ug)}const qg={render:$g},Zg={width:"249",height:"53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Kg=ao('<path d="M90.278 16.382v-4.564h21.503v4.564h-8.015V38h-5.472V16.382h-8.016Zm25.694 28.982c-.69 0-1.338-.056-1.943-.167-.596-.102-1.091-.234-1.483-.396l1.228-4.065c.639.196 1.214.302 1.725.32.52.016.968-.103 1.343-.359.383-.255.694-.69.933-1.303l.32-.831-7.044-20.2h5.727l4.065 14.421h.205l4.103-14.42h5.766l-7.632 21.758c-.367 1.057-.865 1.977-1.496 2.761a6.126 6.126 0 0 1-2.365 1.829c-.954.434-2.105.652-3.452.652Zm17.372 0v-27h5.369v3.298h.243a7.21 7.21 0 0 1 1.036-1.61c.46-.555 1.056-1.015 1.789-1.381.742-.375 1.662-.563 2.762-.563a7.38 7.38 0 0 1 3.963 1.125c1.21.741 2.177 1.862 2.902 3.362.724 1.492 1.086 3.362 1.086 5.612 0 2.19-.353 4.04-1.061 5.549-.698 1.5-1.653 2.638-2.863 3.413-1.202.767-2.549 1.15-4.04 1.15-1.057 0-1.956-.174-2.697-.524-.733-.349-1.334-.788-1.803-1.316a6.674 6.674 0 0 1-1.074-1.624h-.166v10.509h-5.446Zm5.331-17.182c0 1.167.162 2.186.486 3.055.324.87.792 1.547 1.406 2.033.614.477 1.359.716 2.237.716.887 0 1.637-.243 2.25-.729.614-.494 1.078-1.176 1.394-2.045.323-.878.485-1.888.485-3.03 0-1.134-.157-2.13-.473-2.992-.315-.86-.779-1.534-1.393-2.02-.614-.485-1.368-.728-2.263-.728-.886 0-1.636.234-2.25.703-.605.469-1.069 1.133-1.393 1.994-.324.861-.486 1.875-.486 3.043Zm26.039 10.201c-2.02 0-3.758-.409-5.216-1.227-1.449-.826-2.565-1.994-3.349-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.887-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.295 0 2.501.209 3.618.626a8.023 8.023 0 0 1 2.94 1.854c.844.827 1.5 1.866 1.969 3.12.468 1.244.703 2.701.703 4.372v1.495h-16.581V26.2H168.6c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.559.192-2.199.576a4.039 4.039 0 0 0-1.483 1.52 4.29 4.29 0 0 0-.549 2.11v3.21c0 .97.179 1.81.537 2.517a3.93 3.93 0 0 0 1.546 1.637c.665.383 1.454.575 2.366.575a5.14 5.14 0 0 0 1.661-.255c.503-.171.934-.427 1.292-.768.358-.34.63-.758.818-1.252l5.037.332a6.879 6.879 0 0 1-1.573 3.17c-.784.895-1.798 1.594-3.042 2.097-1.236.494-2.664.741-4.283.741Zm28.545-14.42-4.986.307a2.567 2.567 0 0 0-.55-1.15 2.917 2.917 0 0 0-1.112-.832c-.452-.213-.993-.32-1.623-.32-.844 0-1.556.18-2.135.538-.58.35-.87.818-.87 1.406 0 .469.188.865.563 1.189.375.324 1.018.584 1.93.78l3.554.716c1.909.392 3.333 1.022 4.27 1.892.938.869 1.406 2.011 1.406 3.426 0 1.287-.379 2.416-1.137 3.388-.75.971-1.782 1.73-3.094 2.275-1.304.537-2.808.805-4.513.805-2.599 0-4.67-.54-6.213-1.623-1.534-1.091-2.433-2.574-2.698-4.449l5.357-.281c.162.792.554 1.398 1.176 1.815.622.41 1.419.614 2.391.614.954 0 1.721-.183 2.301-.55.588-.375.886-.856.895-1.444-.009-.495-.218-.9-.627-1.215-.409-.324-1.039-.571-1.892-.741l-3.4-.678c-1.918-.384-3.345-1.048-4.283-1.994-.929-.946-1.393-2.152-1.393-3.618 0-1.262.341-2.348 1.022-3.26.691-.912 1.658-1.615 2.902-2.11 1.253-.494 2.719-.741 4.398-.741 2.48 0 4.432.524 5.855 1.572 1.432 1.049 2.267 2.476 2.506 4.283Zm13.961-5.6v4.091h-11.825v-4.09h11.825Zm-9.14-4.704h5.446v18.307c0 .503.076.895.23 1.176.153.273.366.464.639.575.281.111.605.166.972.166.255 0 .511-.02.767-.063.255-.051.451-.09.588-.115l.856 4.052a15.39 15.39 0 0 1-1.15.294c-.495.12-1.096.192-1.803.218-1.312.05-2.463-.124-3.452-.525-.98-.4-1.743-1.022-2.288-1.866-.545-.844-.814-1.91-.805-3.196V13.659Zm21.066 24.724c-2.02 0-3.759-.409-5.216-1.227-1.449-.826-2.566-1.994-3.35-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.888-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.296 0 2.502.209 3.618.626a8.035 8.035 0 0 1 2.941 1.854c.843.827 1.5 1.866 1.968 3.12.469 1.244.704 2.701.704 4.372v1.495h-16.581V26.2h11.454c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.56.192-2.199.576a4.032 4.032 0 0 0-1.483 1.52 4.301 4.301 0 0 0-.55 2.11v3.21c0 .97.179 1.81.537 2.517a3.932 3.932 0 0 0 1.547 1.637c.665.383 1.453.575 2.365.575a5.15 5.15 0 0 0 1.662-.255c.503-.171.933-.427 1.291-.768.358-.34.631-.758.819-1.252l5.036.332a6.868 6.868 0 0 1-1.572 3.17c-.784.895-1.798 1.594-3.043 2.097-1.235.494-2.663.741-4.282.741ZM231.353 38V18.364h5.279v3.426h.205c.358-1.219.959-2.14 1.802-2.762.844-.63 1.816-.946 2.915-.946.273 0 .567.017.882.052.316.034.593.08.831.14v4.832a7.082 7.082 0 0 0-1.061-.204 9.528 9.528 0 0 0-1.24-.09c-.801 0-1.517.175-2.148.525a3.865 3.865 0 0 0-1.483 1.431c-.357.614-.536 1.322-.536 2.123V38h-5.446Z" fill="#000"></path><path d="M121.082 17.023c-.521 0-.976-.068-1.368-.204a2.939 2.939 0 0 1-.989-.547 2.628 2.628 0 0 1-.626-.78l.726-.478c.109.192.255.381.437.567.186.186.426.34.721.462.298.123.664.184 1.099.184.676 0 1.221-.169 1.635-.507.418-.338.627-.863.627-1.576v-1.72h-.08c-.103.232-.25.464-.442.696a2.28 2.28 0 0 1-.756.572c-.308.152-.691.229-1.148.229-.61 0-1.152-.151-1.626-.453-.471-.302-.842-.732-1.114-1.293-.268-.563-.402-1.234-.402-2.013 0-.772.13-1.452.392-2.038.265-.587.635-1.044 1.109-1.373.474-.328 1.026-.492 1.656-.492.467 0 .855.083 1.163.249.308.162.555.364.741.606.189.242.336.478.442.706h.09V6.364h.865v7.835c0 .646-.138 1.178-.413 1.596-.275.417-.65.726-1.124.925-.474.202-1.012.303-1.615.303Zm-.06-3.913c.491 0 .91-.118 1.258-.353.348-.239.615-.58.8-1.024.186-.444.279-.973.279-1.586 0-.597-.091-1.125-.274-1.586-.182-.464-.447-.829-.795-1.094-.345-.268-.768-.402-1.268-.402-.51 0-.941.137-1.293.412-.351.275-.616.647-.795 1.114a4.294 4.294 0 0 0-.269 1.556c0 .583.092 1.099.274 1.546.182.444.449.792.8 1.044.352.249.779.373 1.283.373Zm8.383 1.05c-.66 0-1.243-.168-1.75-.503a3.398 3.398 0 0 1-1.184-1.387c-.285-.593-.427-1.278-.427-2.053 0-.783.142-1.47.427-2.064.285-.596.68-1.06 1.184-1.392.507-.334 1.09-.502 1.75-.502.659 0 1.241.168 1.745.502.503.335.898.8 1.183 1.392.288.594.432 1.281.432 2.064 0 .775-.142 1.46-.427 2.053a3.385 3.385 0 0 1-1.188 1.387c-.504.335-1.086.502-1.745.502Zm0-.811c.53 0 .979-.143 1.347-.428.368-.285.646-.664.835-1.138.192-.474.288-.996.288-1.566 0-.57-.096-1.094-.288-1.571a2.673 2.673 0 0 0-.835-1.149c-.368-.288-.817-.432-1.347-.432-.527 0-.977.144-1.348.432a2.707 2.707 0 0 0-.84 1.149 4.23 4.23 0 0 0-.283 1.57c0 .57.094 1.093.283 1.567.192.474.472.853.84 1.138.368.285.817.428 1.348.428Zm12.103-6.985v.77h-3.754v-.77h3.754ZM138.927 14V5.245c0-.411.095-.757.284-1.039a1.85 1.85 0 0 1 .75-.641c.309-.146.635-.22.98-.22.232 0 .424.02.576.06.156.037.279.073.368.11l-.258.775c-.066-.02-.148-.043-.244-.07a1.391 1.391 0 0 0-.363-.039c-.384 0-.681.108-.89.323-.208.216-.313.524-.313.925L139.812 14h-.885Zm6.134.174c-.46 0-.881-.09-1.262-.268a2.208 2.208 0 0 1-.91-.786c-.226-.345-.338-.762-.338-1.253 0-.378.071-.696.214-.954.142-.259.344-.471.606-.637a3.36 3.36 0 0 1 .93-.392c.358-.097.752-.171 1.183-.224.428-.053.789-.1 1.084-.14.298-.04.525-.102.681-.188.156-.087.234-.226.234-.418v-.179c0-.52-.156-.93-.468-1.228-.308-.302-.752-.452-1.332-.452-.55 0-.999.12-1.347.363-.345.242-.587.527-.726.855l-.84-.304c.172-.417.411-.75.715-.999a2.829 2.829 0 0 1 1.025-.542 3.99 3.99 0 0 1 1.148-.169c.292 0 .595.038.91.115.318.076.613.208.885.397.272.186.492.446.661.78.169.332.254.753.254 1.264V14h-.885v-1.208h-.055a2.45 2.45 0 0 1-1.258 1.178c-.315.136-.684.204-1.109.204Zm.12-.81c.47 0 .878-.105 1.223-.314.344-.208.61-.485.795-.83.189-.348.284-.73.284-1.148V9.968a.891.891 0 0 1-.333.17c-.153.049-.33.094-.532.133-.199.037-.398.068-.597.095a69.4 69.4 0 0 1-.537.07 4.964 4.964 0 0 0-1.104.248c-.305.113-.538.268-.701.467-.162.196-.243.448-.243.756 0 .464.165.824.497 1.079.331.252.747.378 1.248.378Zm10.531-5.325-.81.229a2.138 2.138 0 0 0-.338-.622 1.54 1.54 0 0 0-.572-.442c-.232-.11-.52-.164-.865-.164-.517 0-.941.122-1.273.368-.331.245-.497.561-.497.95 0 .327.113.594.338.8.229.202.58.363 1.054.482l1.154.283c.639.156 1.118.403 1.436.741.322.338.483.762.483 1.273 0 .43-.12.814-.358 1.148-.239.335-.572.598-1 .79-.424.19-.916.284-1.476.284-.746 0-1.361-.167-1.845-.502-.484-.338-.793-.825-.929-1.462l.85-.209c.109.455.323.798.641 1.03.322.232.744.348 1.268.348.587 0 1.056-.131 1.407-.393.351-.265.527-.597.527-.994 0-.309-.103-.567-.308-.776-.206-.212-.517-.368-.935-.467l-1.248-.299c-.663-.159-1.153-.41-1.471-.755-.319-.345-.478-.773-.478-1.283 0-.42.115-.79.343-1.109.229-.321.544-.573.945-.755a3.28 3.28 0 0 1 1.372-.274c.699 0 1.258.16 1.675.478.421.314.725.749.91 1.302Zm4.915-1.675v.77h-3.644v-.77h3.644Zm-2.506-1.83h.89v7.472c0 .319.055.569.164.751.11.18.252.307.428.383.176.073.363.11.562.11.116 0 .215-.007.298-.02.083-.017.156-.034.219-.05l.189.8a2.093 2.093 0 0 1-.318.09c-.126.03-.282.044-.468.044a2.17 2.17 0 0 1-.939-.213 1.834 1.834 0 0 1-.736-.637c-.192-.281-.289-.631-.289-1.049v-7.68Zm7.381 9.625c-.712 0-1.329-.166-1.849-.497a3.327 3.327 0 0 1-1.208-1.387c-.282-.593-.423-1.276-.423-2.048 0-.77.141-1.452.423-2.049.285-.6.678-1.069 1.178-1.407.504-.341 1.085-.512 1.745-.512.414 0 .814.076 1.198.229.385.15.729.38 1.034.691.308.308.552.698.731 1.168.179.468.269 1.021.269 1.66v.438h-5.966v-.78h5.061c0-.49-.1-.932-.299-1.323a2.317 2.317 0 0 0-.82-.934 2.15 2.15 0 0 0-1.208-.343c-.484 0-.91.129-1.278.387-.368.259-.656.6-.865 1.025-.205.424-.31.888-.313 1.392v.467c0 .607.104 1.137.313 1.59.212.452.512.801.9 1.05.388.248.847.373 1.377.373.362 0 .678-.057.95-.17a2.005 2.005 0 0 0 1.118-1.084l.841.274a2.477 2.477 0 0 1-.572.89c-.262.272-.59.49-.984.656-.392.163-.842.244-1.353.244ZM170.41 14V6.364h.86v1.173h.064c.153-.385.418-.694.796-.93a2.384 2.384 0 0 1 1.292-.358 12.569 12.569 0 0 1 .468.015v.9a8.008 8.008 0 0 0-.209-.03 2.446 2.446 0 0 0-.323-.02c-.398 0-.753.085-1.064.254a1.882 1.882 0 0 0-.731.69 1.906 1.906 0 0 0-.268 1.01V14h-.885Z" fill="#000" fill-opacity=".6"></path><g clip-path="url(#a)" fill="#000"><path d="M40 22.504c-7.172-6.63-11.055 3.811-19.11-.549C21.866 27.01 33.127 34.6 40 25.55c6.874 9.05 18.135 1.46 19.11-3.595-8.055 4.36-11.938-6.08-19.11.55Z"></path><path d="M32.105 30.657c-.856 0-1.735-.104-2.63-.313-2.223-.52-4.44-1.686-6.242-3.285-1.737-1.541-2.91-3.34-3.217-4.935a.89.89 0 0 1 1.299-.952c3.43 1.857 5.961.756 8.642-.41 1.552-.674 3.158-1.372 4.9-1.416 1.776-.047 3.465.602 5.143 1.977 1.678-1.375 3.368-2.024 5.142-1.977 1.743.044 3.348.742 4.901 1.417 2.681 1.165 5.213 2.265 8.642.41a.89.89 0 0 1 1.299.951c-.308 1.596-1.48 3.394-3.217 4.935-1.803 1.6-4.02 2.766-6.242 3.285-4.032.942-7.73-.261-10.525-3.393-2.174 2.436-4.896 3.706-7.895 3.706Zm-9.554-7.05c1.332 2.074 4.11 4.25 7.33 5.002 2.586.605 6.319.471 9.41-3.598a.89.89 0 0 1 1.418 0c3.09 4.07 6.823 4.203 9.41 3.599 3.219-.753 5.998-2.929 7.33-5.003-3.198.927-5.786-.198-8.116-1.21-3.004-1.306-5.376-2.337-8.728.761a.89.89 0 0 1-1.21 0c-3.352-3.098-5.724-2.067-8.728-.761-1.72.747-3.579 1.555-5.72 1.555a8.541 8.541 0 0 1-2.396-.345Z"></path><rect x="22" y="15" width="6" height="2" rx="1"></rect><rect x="30" y="15" width="6" height="2" rx="1"></rect><rect x="46" y="15" width="6" height="2" rx="1"></rect><rect x="54" y="15" width="6" height="2" rx="1"></rect><rect x="38" y="15" width="6" height="2" rx="1"></rect><rect x="26" y="33" width="6" height="2" rx="1"></rect><rect x="42" y="33" width="6" height="2" rx="1"></rect><rect x="50" y="33" width="6" height="2" rx="1"></rect><rect x="34" y="33" width="6" height="2" rx="1"></rect><rect x="22" y="37" width="38" height="2" rx="1"></rect></g><rect x="18" y="33" width="6" height="2" rx="1" fill="#000"></rect><rect x="6" y="33" width="8" height="2" rx="1" fill="#000"></rect><rect x="6" y="27" width="6" height="2" rx="1" fill="#000"></rect><rect x="14" y="27" width="6" height="2" rx="1" fill="#000"></rect><rect x="6" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="12" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="18" y="37" width="2" height="2" rx="1" fill="#000"></rect><rect x="62" y="37" width="6" height="2" rx="1" fill="#000"></rect><rect x="70" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="6" y="19" width="10" height="2" rx="1" fill="#000"></rect><rect x="6" y="23" width="8" height="2" rx="1" fill="#000"></rect><rect x="62" y="15" width="6" height="2" rx="1" fill="#000"></rect><rect x="70" y="15" width="6" height="2" rx="1" fill="#000"></rect><rect x=".5" y="9.5" width="79" height="33" rx="3.5" stroke="#000"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="#000"></rect><rect x="62" y="19" width="14" height="2" rx="1" fill="#000"></rect><rect x="66" y="23" width="10" height="2" rx="1" fill="#000"></rect><rect x="68" y="27" width="8" height="2" rx="1" fill="#000"></rect><rect x="66" y="33" width="10" height="2" rx="1" fill="#000"></rect><rect x="62" y="27" width="4" height="2" rx="1" fill="#000"></rect><rect x="60" y="33" width="4" height="2" rx="1" fill="#000"></rect><defs><clipPath id="a"><path fill="#fff" transform="translate(20 5)" d="M0 0h40v40H0z"></path></clipPath></defs>',25),Jg=[Kg];function Qg(s,r){return Ze(),st("svg",Zg,Jg)}const ep={render:Qg};function Dl(s,r){return Ze(),st("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[Ne("path",{"fill-rule":"evenodd",d:"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}function tp(s,r){return Ze(),st("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[Ne("path",{"fill-rule":"evenodd",d:"M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z","clip-rule":"evenodd"})])}const ip={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 455 455",style:{"enable-background":"new 0 0 455 455"},"xml:space":"preserve"},sp=Ne("path",{d:"m227.495 150-93.749 50-88.279-50 38.8 180h286.466l38.8-180-88.286 50zM87.5 360h280v55h-280z"},null,-1),ap=Ne("circle",{cx:"40",cy:"80",r:"40"},null,-1),np=Ne("circle",{cx:"415",cy:"80",r:"40"},null,-1),rp=Ne("circle",{cx:"227.5",cy:"80",r:"40"},null,-1),op=[sp,ap,np,rp];function lp(s,r){return Ze(),st("svg",ip,op)}const up={render:lp},cp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 285.5 285.5",style:{"enable-background":"new 0 0 285.5 285.5"},"xml:space":"preserve"},hp=Ne("path",{d:"M79.999 62.75c0 34.601 28.149 62.75 62.751 62.75s62.751-28.149 62.751-62.75S177.352 0 142.75 0 79.999 28.149 79.999 62.75zM42.75 285.5h200c8.284 0 15-6.716 15-15 0-63.411-51.589-115-115-115s-115 51.589-115 115c0 8.284 6.716 15 15 15z"},null,-1),dp=[hp];function fp(s,r){return Ze(),st("svg",cp,dp)}const gp={render:fp},pp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 489.802 489.802",style:{"enable-background":"new 0 0 489.802 489.802"},"xml:space":"preserve"},xp=Ne("path",{d:"m20.701 281.901 32.1.2c4.8 24.7 14.3 48.7 28.7 70.5l-22.8 22.6c-8.2 8.1-8.2 21.2-.2 29.4l24.6 24.9c8.1 8.2 21.2 8.2 29.4.2l22.8-22.6c21.6 14.6 45.5 24.5 70.2 29.5l-.2 32.1c-.1 11.5 9.2 20.8 20.7 20.9l35 .2c11.5.1 20.8-9.2 20.9-20.7l.2-32.1c24.7-4.8 48.7-14.3 70.5-28.7l22.6 22.8c8.1 8.2 21.2 8.2 29.4.2l24.9-24.6c8.2-8.1 8.2-21.2.2-29.4l-22.6-22.8c14.6-21.6 24.5-45.5 29.5-70.2l32.1.2c11.5.1 20.8-9.2 20.9-20.7l.2-35c.1-11.5-9.2-20.8-20.7-20.9l-32.1-.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1 8.2-21.2.2-29.4l-24.6-24.9c-8.1-8.2-21.2-8.2-29.4-.2l-22.8 22.6c-21.6-14.6-45.5-24.5-70.2-29.5l.2-32.1c.1-11.5-9.2-20.8-20.7-20.9l-35-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.3 32.1c-24.8 4.8-48.8 14.3-70.5 28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-.2l-24.8 24.6c-8.2 8.1-8.2 21.2-.2 29.4l22.6 22.8c-14.6 21.6-24.5 45.5-29.5 70.2l-32.1-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.2 35c-.1 11.4 9.2 20.8 20.7 20.9zm158.6-103.3c36.6-36.2 95.5-35.9 131.7.7s35.9 95.5-.7 131.7-95.5 35.9-131.7-.7-35.9-95.5.7-131.7z"},null,-1),mp=[xp];function bp(s,r){return Ze(),st("svg",pp,mp)}const vp={render:bp},yp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 463 463",style:{"enable-background":"new 0 0 463 463"},"xml:space":"preserve"},wp=Ne("path",{d:"M431.5 120h-400C14.131 120 0 134.131 0 151.5v160C0 328.869 14.131 343 31.5 343h400c17.369 0 31.5-14.131 31.5-31.5v-160c0-17.369-14.131-31.5-31.5-31.5zM448 311.5c0 9.099-7.402 16.5-16.5 16.5h-400c-9.098 0-16.5-7.401-16.5-16.5v-160c0-9.099 7.402-16.5 16.5-16.5h400c9.098 0 16.5 7.401 16.5 16.5v160z"},null,-1),Dp=Ne("path",{d:"M327.5 280h-192c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h192c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM103.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM55.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 248h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM367 255.5a7.5 7.5 0 0 0-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16a7.5 7.5 0 0 0 7.5-7.5zM295.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM247.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM199.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM151.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM119.5 248h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM71.5 248h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 184h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM343.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM295.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM247.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM199.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM151.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM103.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM39.5 199h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM423.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM327.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM279.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM231.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM183.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM135.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM39.5 231h48c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-48c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM423.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM327.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM263.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM215.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM167.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM119.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM39.5 167h48c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-48c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"},null,-1),Ep=[wp,Dp];function Cp(s,r){return Ze(),st("svg",yp,Ep)}const Ap={render:Cp};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const us=typeof window<"u";function kp(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function Hn(s,r){const u={};for(const h in r){const g=r[h];u[h]=jt(g)?g.map(s):s(g)}return u}const Zs=()=>{},jt=Array.isArray,Sp=/\/$/,Pp=s=>s.replace(Sp,"");function Xn(s,r,u="/"){let h,g={},m="",w="";const D=r.indexOf("#");let S=r.indexOf("?");return D<S&&D>=0&&(S=-1),S>-1&&(h=r.slice(0,S),m=r.slice(S+1,D>-1?D:r.length),g=s(m)),D>-1&&(h=h||r.slice(0,D),w=r.slice(D,r.length)),h=_p(h!=null?h:r,u),{fullPath:h+(m&&"?")+m+w,path:h,query:g,hash:w}}function Tp(s,r){const u=r.query?s(r.query):"";return r.path+(u&&"?")+u+(r.hash||"")}function El(s,r){return!r||!s.toLowerCase().startsWith(r.toLowerCase())?s:s.slice(r.length)||"/"}function Lp(s,r,u){const h=r.matched.length-1,g=u.matched.length-1;return h>-1&&h===g&&Es(r.matched[h],u.matched[g])&&oh(r.params,u.params)&&s(r.query)===s(u.query)&&r.hash===u.hash}function Es(s,r){return(s.aliasOf||s)===(r.aliasOf||r)}function oh(s,r){if(Object.keys(s).length!==Object.keys(r).length)return!1;for(const u in s)if(!Mp(s[u],r[u]))return!1;return!0}function Mp(s,r){return jt(s)?Cl(s,r):jt(r)?Cl(r,s):s===r}function Cl(s,r){return jt(r)?s.length===r.length&&s.every((u,h)=>u===r[h]):s.length===1&&s[0]===r}function _p(s,r){if(s.startsWith("/"))return s;if(!s)return r;const u=r.split("/"),h=s.split("/");let g=u.length-1,m,w;for(m=0;m<h.length;m++)if(w=h[m],w!==".")if(w==="..")g>1&&g--;else break;return u.slice(0,g).join("/")+"/"+h.slice(m-(m===h.length?1:0)).join("/")}var na;(function(s){s.pop="pop",s.push="push"})(na||(na={}));var Ks;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Ks||(Ks={}));function Ip(s){if(!s)if(us){const r=document.querySelector("base");s=r&&r.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),Pp(s)}const Fp=/^[^#]+#/;function Rp(s,r){return s.replace(Fp,"#")+r}function Op(s,r){const u=document.documentElement.getBoundingClientRect(),h=s.getBoundingClientRect();return{behavior:r.behavior,left:h.left-u.left-(r.left||0),top:h.top-u.top-(r.top||0)}}const yn=()=>({left:window.pageXOffset,top:window.pageYOffset});function zp(s){let r;if("el"in s){const u=s.el,h=typeof u=="string"&&u.startsWith("#"),g=typeof u=="string"?h?document.getElementById(u.slice(1)):document.querySelector(u):u;if(!g)return;r=Op(g,s)}else r=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(r):window.scrollTo(r.left!=null?r.left:window.pageXOffset,r.top!=null?r.top:window.pageYOffset)}function Al(s,r){return(history.state?history.state.position-r:-1)+s}const Lr=new Map;function Bp(s,r){Lr.set(s,r)}function Np(s){const r=Lr.get(s);return Lr.delete(s),r}let Hp=()=>location.protocol+"//"+location.host;function lh(s,r){const{pathname:u,search:h,hash:g}=r,m=s.indexOf("#");if(m>-1){let D=g.includes(s.slice(m))?s.slice(m).length:1,S=g.slice(D);return S[0]!=="/"&&(S="/"+S),El(S,"")}return El(u,s)+h+g}function Xp(s,r,u,h){let g=[],m=[],w=null;const D=({state:O})=>{const W=lh(s,location),$=u.value,K=r.value;let se=0;if(O){if(u.value=W,r.value=O,w&&w===$){w=null;return}se=K?O.position-K.position:0}else h(W);g.forEach(V=>{V(u.value,$,{delta:se,type:na.pop,direction:se?se>0?Ks.forward:Ks.back:Ks.unknown})})};function S(){w=u.value}function _(O){g.push(O);const W=()=>{const $=g.indexOf(O);$>-1&&g.splice($,1)};return m.push(W),W}function F(){const{history:O}=window;!O.state||O.replaceState(Ke({},O.state,{scroll:yn()}),"")}function z(){for(const O of m)O();m=[],window.removeEventListener("popstate",D),window.removeEventListener("beforeunload",F)}return window.addEventListener("popstate",D),window.addEventListener("beforeunload",F),{pauseListeners:S,listen:_,destroy:z}}function kl(s,r,u,h=!1,g=!1){return{back:s,current:r,forward:u,replaced:h,position:window.history.length,scroll:g?yn():null}}function Yp(s){const{history:r,location:u}=window,h={value:lh(s,u)},g={value:r.state};g.value||m(h.value,{back:null,current:h.value,forward:null,position:r.length-1,replaced:!0,scroll:null},!0);function m(S,_,F){const z=s.indexOf("#"),O=z>-1?(u.host&&document.querySelector("base")?s:s.slice(z))+S:Hp()+s+S;try{r[F?"replaceState":"pushState"](_,"",O),g.value=_}catch(W){console.error(W),u[F?"replace":"assign"](O)}}function w(S,_){const F=Ke({},r.state,kl(g.value.back,S,g.value.forward,!0),_,{position:g.value.position});m(S,F,!0),h.value=S}function D(S,_){const F=Ke({},g.value,r.state,{forward:S,scroll:yn()});m(F.current,F,!0);const z=Ke({},kl(h.value,S,null),{position:F.position+1},_);m(S,z,!1),h.value=S}return{location:h,state:g,push:D,replace:w}}function Wp(s){s=Ip(s);const r=Yp(s),u=Xp(s,r.state,r.location,r.replace);function h(m,w=!0){w||u.pauseListeners(),history.go(m)}const g=Ke({location:"",base:s,go:h,createHref:Rp.bind(null,s)},r,u);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>r.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>r.state.value}),g}function Vp(s){return typeof s=="string"||s&&typeof s=="object"}function uh(s){return typeof s=="string"||typeof s=="symbol"}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ch=Symbol("");var Sl;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Sl||(Sl={}));function Cs(s,r){return Ke(new Error,{type:s,[ch]:!0},r)}function si(s,r){return s instanceof Error&&ch in s&&(r==null||!!(s.type&r))}const Pl="[^/]+?",jp={sensitive:!1,strict:!1,start:!0,end:!0},Gp=/[.+*?^${}()[\]/\\]/g;function Up(s,r){const u=Ke({},jp,r),h=[];let g=u.start?"^":"";const m=[];for(const _ of s){const F=_.length?[]:[90];u.strict&&!_.length&&(g+="/");for(let z=0;z<_.length;z++){const O=_[z];let W=40+(u.sensitive?.25:0);if(O.type===0)z||(g+="/"),g+=O.value.replace(Gp,"\\$&"),W+=40;else if(O.type===1){const{value:$,repeatable:K,optional:se,regexp:V}=O;m.push({name:$,repeatable:K,optional:se});const P=V||Pl;if(P!==Pl){W+=10;try{new RegExp(`(${P})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${$}" (${P}): `+Z.message)}}let j=K?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;z||(j=se&&_.length<2?`(?:/${j})`:"/"+j),se&&(j+="?"),g+=j,W+=20,se&&(W+=-8),K&&(W+=-20),P===".*"&&(W+=-50)}F.push(W)}h.push(F)}if(u.strict&&u.end){const _=h.length-1;h[_][h[_].length-1]+=.7000000000000001}u.strict||(g+="/?"),u.end?g+="$":u.strict&&(g+="(?:/|$)");const w=new RegExp(g,u.sensitive?"":"i");function D(_){const F=_.match(w),z={};if(!F)return null;for(let O=1;O<F.length;O++){const W=F[O]||"",$=m[O-1];z[$.name]=W&&$.repeatable?W.split("/"):W}return z}function S(_){let F="",z=!1;for(const O of s){(!z||!F.endsWith("/"))&&(F+="/"),z=!1;for(const W of O)if(W.type===0)F+=W.value;else if(W.type===1){const{value:$,repeatable:K,optional:se}=W,V=$ in _?_[$]:"";if(jt(V)&&!K)throw new Error(`Provided param "${$}" is an array but it is not repeatable (* or + modifiers)`);const P=jt(V)?V.join("/"):V;if(!P)if(se)O.length<2&&(F.endsWith("/")?F=F.slice(0,-1):z=!0);else throw new Error(`Missing required param "${$}"`);F+=P}}return F||"/"}return{re:w,score:h,keys:m,parse:D,stringify:S}}function $p(s,r){let u=0;for(;u<s.length&&u<r.length;){const h=r[u]-s[u];if(h)return h;u++}return s.length<r.length?s.length===1&&s[0]===40+40?-1:1:s.length>r.length?r.length===1&&r[0]===40+40?1:-1:0}function qp(s,r){let u=0;const h=s.score,g=r.score;for(;u<h.length&&u<g.length;){const m=$p(h[u],g[u]);if(m)return m;u++}if(Math.abs(g.length-h.length)===1){if(Tl(h))return 1;if(Tl(g))return-1}return g.length-h.length}function Tl(s){const r=s[s.length-1];return s.length>0&&r[r.length-1]<0}const Zp={type:0,value:""},Kp=/[a-zA-Z0-9_]/;function Jp(s){if(!s)return[[]];if(s==="/")return[[Zp]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function r(W){throw new Error(`ERR (${u})/"${_}": ${W}`)}let u=0,h=u;const g=[];let m;function w(){m&&g.push(m),m=[]}let D=0,S,_="",F="";function z(){!_||(u===0?m.push({type:0,value:_}):u===1||u===2||u===3?(m.length>1&&(S==="*"||S==="+")&&r(`A repeatable param (${_}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:_,regexp:F,repeatable:S==="*"||S==="+",optional:S==="*"||S==="?"})):r("Invalid state to consume buffer"),_="")}function O(){_+=S}for(;D<s.length;){if(S=s[D++],S==="\\"&&u!==2){h=u,u=4;continue}switch(u){case 0:S==="/"?(_&&z(),w()):S===":"?(z(),u=1):O();break;case 4:O(),u=h;break;case 1:S==="("?u=2:Kp.test(S)?O():(z(),u=0,S!=="*"&&S!=="?"&&S!=="+"&&D--);break;case 2:S===")"?F[F.length-1]=="\\"?F=F.slice(0,-1)+S:u=3:F+=S;break;case 3:z(),u=0,S!=="*"&&S!=="?"&&S!=="+"&&D--,F="";break;default:r("Unknown state");break}}return u===2&&r(`Unfinished custom RegExp for param "${_}"`),z(),w(),g}function Qp(s,r,u){const h=Up(Jp(s.path),u),g=Ke(h,{record:s,parent:r,children:[],alias:[]});return r&&!g.record.aliasOf==!r.record.aliasOf&&r.children.push(g),g}function ex(s,r){const u=[],h=new Map;r=Ml({strict:!1,end:!0,sensitive:!1},r);function g(F){return h.get(F)}function m(F,z,O){const W=!O,$=ix(F);$.aliasOf=O&&O.record;const K=Ml(r,F),se=[$];if("alias"in F){const j=typeof F.alias=="string"?[F.alias]:F.alias;for(const Z of j)se.push(Ke({},$,{components:O?O.record.components:$.components,path:Z,aliasOf:O?O.record:$}))}let V,P;for(const j of se){const{path:Z}=j;if(z&&Z[0]!=="/"){const H=z.record.path,ue=H[H.length-1]==="/"?"":"/";j.path=z.record.path+(Z&&ue+Z)}if(V=Qp(j,z,K),O?O.alias.push(V):(P=P||V,P!==V&&P.alias.push(V),W&&F.name&&!Ll(V)&&w(F.name)),$.children){const H=$.children;for(let ue=0;ue<H.length;ue++)m(H[ue],V,O&&O.children[ue])}O=O||V,S(V)}return P?()=>{w(P)}:Zs}function w(F){if(uh(F)){const z=h.get(F);z&&(h.delete(F),u.splice(u.indexOf(z),1),z.children.forEach(w),z.alias.forEach(w))}else{const z=u.indexOf(F);z>-1&&(u.splice(z,1),F.record.name&&h.delete(F.record.name),F.children.forEach(w),F.alias.forEach(w))}}function D(){return u}function S(F){let z=0;for(;z<u.length&&qp(F,u[z])>=0&&(F.record.path!==u[z].record.path||!hh(F,u[z]));)z++;u.splice(z,0,F),F.record.name&&!Ll(F)&&h.set(F.record.name,F)}function _(F,z){let O,W={},$,K;if("name"in F&&F.name){if(O=h.get(F.name),!O)throw Cs(1,{location:F});K=O.record.name,W=Ke(tx(z.params,O.keys.filter(P=>!P.optional).map(P=>P.name)),F.params),$=O.stringify(W)}else if("path"in F)$=F.path,O=u.find(P=>P.re.test($)),O&&(W=O.parse($),K=O.record.name);else{if(O=z.name?h.get(z.name):u.find(P=>P.re.test(z.path)),!O)throw Cs(1,{location:F,currentLocation:z});K=O.record.name,W=Ke({},z.params,F.params),$=O.stringify(W)}const se=[];let V=O;for(;V;)se.unshift(V.record),V=V.parent;return{name:K,path:$,params:W,matched:se,meta:ax(se)}}return s.forEach(F=>m(F)),{addRoute:m,resolve:_,removeRoute:w,getRoutes:D,getRecordMatcher:g}}function tx(s,r){const u={};for(const h of r)h in s&&(u[h]=s[h]);return u}function ix(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:sx(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function sx(s){const r={},u=s.props||!1;if("component"in s)r.default=u;else for(const h in s.components)r[h]=typeof u=="boolean"?u:u[h];return r}function Ll(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function ax(s){return s.reduce((r,u)=>Ke(r,u.meta),{})}function Ml(s,r){const u={};for(const h in s)u[h]=h in r?r[h]:s[h];return u}function hh(s,r){return r.children.some(u=>u===s||hh(s,u))}const dh=/#/g,nx=/&/g,rx=/\//g,ox=/=/g,lx=/\?/g,fh=/\+/g,ux=/%5B/g,cx=/%5D/g,gh=/%5E/g,hx=/%60/g,ph=/%7B/g,dx=/%7C/g,xh=/%7D/g,fx=/%20/g;function co(s){return encodeURI(""+s).replace(dx,"|").replace(ux,"[").replace(cx,"]")}function gx(s){return co(s).replace(ph,"{").replace(xh,"}").replace(gh,"^")}function Mr(s){return co(s).replace(fh,"%2B").replace(fx,"+").replace(dh,"%23").replace(nx,"%26").replace(hx,"`").replace(ph,"{").replace(xh,"}").replace(gh,"^")}function px(s){return Mr(s).replace(ox,"%3D")}function xx(s){return co(s).replace(dh,"%23").replace(lx,"%3F")}function mx(s){return s==null?"":xx(s).replace(rx,"%2F")}function Ka(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function bx(s){const r={};if(s===""||s==="?")return r;const h=(s[0]==="?"?s.slice(1):s).split("&");for(let g=0;g<h.length;++g){const m=h[g].replace(fh," "),w=m.indexOf("="),D=Ka(w<0?m:m.slice(0,w)),S=w<0?null:Ka(m.slice(w+1));if(D in r){let _=r[D];jt(_)||(_=r[D]=[_]),_.push(S)}else r[D]=S}return r}function _l(s){let r="";for(let u in s){const h=s[u];if(u=px(u),h==null){h!==void 0&&(r+=(r.length?"&":"")+u);continue}(jt(h)?h.map(m=>m&&Mr(m)):[h&&Mr(h)]).forEach(m=>{m!==void 0&&(r+=(r.length?"&":"")+u,m!=null&&(r+="="+m))})}return r}function vx(s){const r={};for(const u in s){const h=s[u];h!==void 0&&(r[u]=jt(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return r}const yx=Symbol(""),Il=Symbol(""),wn=Symbol(""),ho=Symbol(""),_r=Symbol("");function _s(){let s=[];function r(h){return s.push(h),()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)}}function u(){s=[]}return{add:r,list:()=>s,reset:u}}function yi(s,r,u,h,g){const m=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((w,D)=>{const S=z=>{z===!1?D(Cs(4,{from:u,to:r})):z instanceof Error?D(z):Vp(z)?D(Cs(2,{from:r,to:z})):(m&&h.enterCallbacks[g]===m&&typeof z=="function"&&m.push(z),w())},_=s.call(h&&h.instances[g],r,u,S);let F=Promise.resolve(_);s.length<3&&(F=F.then(S)),F.catch(z=>D(z))})}function Yn(s,r,u,h){const g=[];for(const m of s)for(const w in m.components){let D=m.components[w];if(!(r!=="beforeRouteEnter"&&!m.instances[w]))if(wx(D)){const _=(D.__vccOpts||D)[r];_&&g.push(yi(_,u,h,m,w))}else{let S=D();g.push(()=>S.then(_=>{if(!_)return Promise.reject(new Error(`Couldn't resolve component "${w}" at "${m.path}"`));const F=kp(_)?_.default:_;m.components[w]=F;const O=(F.__vccOpts||F)[r];return O&&yi(O,u,h,m,w)()}))}}return g}function wx(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function Fl(s){const r=Ft(wn),u=Ft(ho),h=He(()=>r.resolve(Oe(s.to))),g=He(()=>{const{matched:S}=h.value,{length:_}=S,F=S[_-1],z=u.matched;if(!F||!z.length)return-1;const O=z.findIndex(Es.bind(null,F));if(O>-1)return O;const W=Rl(S[_-2]);return _>1&&Rl(F)===W&&z[z.length-1].path!==W?z.findIndex(Es.bind(null,S[_-2])):O}),m=He(()=>g.value>-1&&Ax(u.params,h.value.params)),w=He(()=>g.value>-1&&g.value===u.matched.length-1&&oh(u.params,h.value.params));function D(S={}){return Cx(S)?r[Oe(s.replace)?"replace":"push"](Oe(s.to)).catch(Zs):Promise.resolve()}return{route:h,href:He(()=>h.value.href),isActive:m,isExactActive:w,navigate:D}}const Dx=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fl,setup(s,{slots:r}){const u=li(Fl(s)),{options:h}=Ft(wn),g=He(()=>({[Ol(s.activeClass,h.linkActiveClass,"router-link-active")]:u.isActive,[Ol(s.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:u.isExactActive}));return()=>{const m=r.default&&r.default(u);return s.custom?m:mn("a",{"aria-current":u.isExactActive?s.ariaCurrentValue:null,href:u.href,onClick:u.navigate,class:g.value},m)}}}),Ex=Dx;function Cx(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const r=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(r))return}return s.preventDefault&&s.preventDefault(),!0}}function Ax(s,r){for(const u in r){const h=r[u],g=s[u];if(typeof h=="string"){if(h!==g)return!1}else if(!jt(g)||g.length!==h.length||h.some((m,w)=>m!==g[w]))return!1}return!0}function Rl(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Ol=(s,r,u)=>s!=null?s:r!=null?r:u,kx=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:r,slots:u}){const h=Ft(_r),g=He(()=>s.route||h.value),m=Ft(Il,0),w=He(()=>{let _=Oe(m);const{matched:F}=g.value;let z;for(;(z=F[_])&&!z.components;)_++;return _}),D=He(()=>g.value.matched[w.value]);Gs(Il,He(()=>w.value+1)),Gs(yx,D),Gs(_r,g);const S=kt();return Ci(()=>[S.value,D.value,s.name],([_,F,z],[O,W,$])=>{F&&(F.instances[z]=_,W&&W!==F&&_&&_===O&&(F.leaveGuards.size||(F.leaveGuards=W.leaveGuards),F.updateGuards.size||(F.updateGuards=W.updateGuards))),_&&F&&(!W||!Es(F,W)||!O)&&(F.enterCallbacks[z]||[]).forEach(K=>K(_))},{flush:"post"}),()=>{const _=g.value,F=s.name,z=D.value,O=z&&z.components[F];if(!O)return zl(u.default,{Component:O,route:_});const W=z.props[F],$=W?W===!0?_.params:typeof W=="function"?W(_):W:null,se=mn(O,Ke({},$,r,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(z.instances[F]=null)},ref:S}));return zl(u.default,{Component:se,route:_})||se}}});function zl(s,r){if(!s)return null;const u=s(r);return u.length===1?u[0]:u}const Sx=kx;function Px(s){const r=ex(s.routes,s),u=s.parseQuery||bx,h=s.stringifyQuery||_l,g=s.history,m=_s(),w=_s(),D=_s(),S=Su(xi);let _=xi;us&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const F=Hn.bind(null,U=>""+U),z=Hn.bind(null,mx),O=Hn.bind(null,Ka);function W(U,he){let de,be;return uh(U)?(de=r.getRecordMatcher(U),be=he):be=U,r.addRoute(be,de)}function $(U){const he=r.getRecordMatcher(U);he&&r.removeRoute(he)}function K(){return r.getRoutes().map(U=>U.record)}function se(U){return!!r.getRecordMatcher(U)}function V(U,he){if(he=Ke({},he||S.value),typeof U=="string"){const ke=Xn(u,U,he.path),B=r.resolve({path:ke.path},he),Y=g.createHref(ke.fullPath);return Ke(ke,B,{params:O(B.params),hash:Ka(ke.hash),redirectedFrom:void 0,href:Y})}let de;if("path"in U)de=Ke({},U,{path:Xn(u,U.path,he.path).path});else{const ke=Ke({},U.params);for(const B in ke)ke[B]==null&&delete ke[B];de=Ke({},U,{params:z(U.params)}),he.params=z(he.params)}const be=r.resolve(de,he),Fe=U.hash||"";be.params=F(O(be.params));const Ie=Tp(h,Ke({},U,{hash:gx(Fe),path:be.path})),Se=g.createHref(Ie);return Ke({fullPath:Ie,hash:Fe,query:h===_l?vx(U.query):U.query||{}},be,{redirectedFrom:void 0,href:Se})}function P(U){return typeof U=="string"?Xn(u,U,S.value.path):Ke({},U)}function j(U,he){if(_!==U)return Cs(8,{from:he,to:U})}function Z(U){return J(U)}function H(U){return Z(Ke(P(U),{replace:!0}))}function ue(U){const he=U.matched[U.matched.length-1];if(he&&he.redirect){const{redirect:de}=he;let be=typeof de=="function"?de(U):de;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=P(be):{path:be},be.params={}),Ke({query:U.query,hash:U.hash,params:"path"in be?{}:U.params},be)}}function J(U,he){const de=_=V(U),be=S.value,Fe=U.state,Ie=U.force,Se=U.replace===!0,ke=ue(de);if(ke)return J(Ke(P(ke),{state:Fe,force:Ie,replace:Se}),he||de);const B=de;B.redirectedFrom=he;let Y;return!Ie&&Lp(h,be,de)&&(Y=Cs(16,{to:B,from:be}),Gt(be,be,!0,!1)),(Y?Promise.resolve(Y):re(B,be)).catch(q=>si(q)?si(q,2)?q:$e(q):Pe(q,B,be)).then(q=>{if(q){if(si(q,2))return J(Ke({replace:Se},P(q.to),{state:Fe,force:Ie}),he||B)}else q=le(B,be,!0,Se,Fe);return Q(B,be,q),q})}function te(U,he){const de=j(U,he);return de?Promise.reject(de):Promise.resolve()}function re(U,he){let de;const[be,Fe,Ie]=Tx(U,he);de=Yn(be.reverse(),"beforeRouteLeave",U,he);for(const ke of be)ke.leaveGuards.forEach(B=>{de.push(yi(B,U,he))});const Se=te.bind(null,U,he);return de.push(Se),ss(de).then(()=>{de=[];for(const ke of m.list())de.push(yi(ke,U,he));return de.push(Se),ss(de)}).then(()=>{de=Yn(Fe,"beforeRouteUpdate",U,he);for(const ke of Fe)ke.updateGuards.forEach(B=>{de.push(yi(B,U,he))});return de.push(Se),ss(de)}).then(()=>{de=[];for(const ke of U.matched)if(ke.beforeEnter&&!he.matched.includes(ke))if(jt(ke.beforeEnter))for(const B of ke.beforeEnter)de.push(yi(B,U,he));else de.push(yi(ke.beforeEnter,U,he));return de.push(Se),ss(de)}).then(()=>(U.matched.forEach(ke=>ke.enterCallbacks={}),de=Yn(Ie,"beforeRouteEnter",U,he),de.push(Se),ss(de))).then(()=>{de=[];for(const ke of w.list())de.push(yi(ke,U,he));return de.push(Se),ss(de)}).catch(ke=>si(ke,8)?ke:Promise.reject(ke))}function Q(U,he,de){for(const be of D.list())be(U,he,de)}function le(U,he,de,be,Fe){const Ie=j(U,he);if(Ie)return Ie;const Se=he===xi,ke=us?history.state:{};de&&(be||Se?g.replace(U.fullPath,Ke({scroll:Se&&ke&&ke.scroll},Fe)):g.push(U.fullPath,Fe)),S.value=U,Gt(U,he,de,Se),$e()}let ie;function ye(){ie||(ie=g.listen((U,he,de)=>{if(!ct.listening)return;const be=V(U),Fe=ue(be);if(Fe){J(Ke(Fe,{replace:!0}),be).catch(Zs);return}_=be;const Ie=S.value;us&&Bp(Al(Ie.fullPath,de.delta),yn()),re(be,Ie).catch(Se=>si(Se,12)?Se:si(Se,2)?(J(Se.to,be).then(ke=>{si(ke,20)&&!de.delta&&de.type===na.pop&&g.go(-1,!1)}).catch(Zs),Promise.reject()):(de.delta&&g.go(-de.delta,!1),Pe(Se,be,Ie))).then(Se=>{Se=Se||le(be,Ie,!1),Se&&(de.delta&&!si(Se,8)?g.go(-de.delta,!1):de.type===na.pop&&si(Se,20)&&g.go(-1,!1)),Q(be,Ie,Se)}).catch(Zs)}))}let ge=_s(),je=_s(),Te;function Pe(U,he,de){$e(U);const be=je.list();return be.length?be.forEach(Fe=>Fe(U,he,de)):console.error(U),Promise.reject(U)}function We(){return Te&&S.value!==xi?Promise.resolve():new Promise((U,he)=>{ge.add([U,he])})}function $e(U){return Te||(Te=!U,ye(),ge.list().forEach(([he,de])=>U?de(U):he()),ge.reset()),U}function Gt(U,he,de,be){const{scrollBehavior:Fe}=s;if(!us||!Fe)return Promise.resolve();const Ie=!de&&Np(Al(U.fullPath,0))||(be||!de)&&history.state&&history.state.scroll||null;return bs().then(()=>Fe(U,he,Ie)).then(Se=>Se&&zp(Se)).catch(Se=>Pe(Se,U,he))}const rt=U=>g.go(U);let Ge;const ot=new Set,ct={currentRoute:S,listening:!0,addRoute:W,removeRoute:$,hasRoute:se,getRoutes:K,resolve:V,options:s,push:Z,replace:H,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:m.add,beforeResolve:w.add,afterEach:D.add,onError:je.add,isReady:We,install(U){const he=this;U.component("RouterLink",Ex),U.component("RouterView",Sx),U.config.globalProperties.$router=he,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Oe(S)}),us&&!Ge&&S.value===xi&&(Ge=!0,Z(g.location).catch(Fe=>{}));const de={};for(const Fe in xi)de[Fe]=He(()=>S.value[Fe]);U.provide(wn,he),U.provide(ho,li(de)),U.provide(_r,S);const be=U.unmount;ot.add(U),U.unmount=function(){ot.delete(U),ot.size<1&&(_=xi,ie&&ie(),ie=null,S.value=xi,Ge=!1,Te=!1),be()}}};return ct}function ss(s){return s.reduce((r,u)=>r.then(()=>u()),Promise.resolve())}function Tx(s,r){const u=[],h=[],g=[],m=Math.max(r.matched.length,s.matched.length);for(let w=0;w<m;w++){const D=r.matched[w];D&&(s.matched.find(_=>Es(_,D))?h.push(D):u.push(D));const S=s.matched[w];S&&(r.matched.find(_=>Es(_,S))||g.push(S))}return[u,h,g]}function Lx(){return Ft(wn)}function mh(){return Ft(ho)}const Mx=`
the
of
to
and
a
in
is
it
you
that
he
was
for
on
are
with
as
I
his
they
be
at
one
have
this
from
or
had
by
not
word
but
what
some
we
can
out
other
were
all
there
when
up
use
your
how
said
an
each
she
which
do
their
time
if
will
way
about
many
then
them
write
would
like
so
these
her
long
make
thing
see
him
two
has
look
more
day
could
go
come
did
number
sound
no
most
people
my
over
know
water
than
call
first
who
may
down
side
been
now
find
any
new
work
part
take
get
place
made
live
where
after
back
little
only
round
man
year
came
show
every
good
me
give
our
under
name
very
through
just
form
sentence
great
think
say
help
low
line
differ
turn
cause
much
mean
before
move
right
boy
old
too
same
tell
does
set
three
want
air
well
also
play
small
end
put
home
read
hand
port
large
spell
add
even
land
here
must
big
high
such
follow
act
why
ask
men
change
went
light
kind
off
need
house
picture
try
us
again
animal
point
mother
world
near
build
self
earth
father
head
stand
own
page
should
country
found
answer
school
grow
study
still
learn
plant
cover
food
sun
four
between
state
keep
eye
never
last
let
thought
city
tree
cross
farm
hard
start
might
story
saw
far
sea
draw
left
late
run
don't
while
press
close
night
real
life
few
north
open
seem
together
next
white
children
begin
got
walk
example
ease
paper
group
always
music
those
both
mark
often
letter
until
mile
river
car
feet
care
second
book
carry
took
science
eat
room
friend
began
idea
fish
mountain
stop
once
base
hear
horse
cut
sure
watch
color
face
wood
main
enough
plain
girl
usual
young
ready
above
ever
red
list
though
feel
talk
bird
soon
body
dog
family
direct
pose
leave
song
measure
door
product
black
short
numeral
class
wind
question
happen
complete
ship
area
half
rock
order
fire
south
problem
piece
told
knew
pass
since
top
whole
king
space
heard
best
hour
better
true
during
hundred
five
remember
step
early
hold
west
ground
interest
reach
fast
verb
sing
listen
six
table
travel
less
morning
ten
simple
several
vowel
toward
war
lay
against
pattern
slow
center
love
person
money
serve
appear
road
map
rain
rule
govern
pull
cold
notice
voice
unit
power
town
fine
certain
fly
fall
lead
cry
dark
machine
note
wait
plan
figure
star
box
noun
field
rest
correct
able
pound
done
beauty
drive
stood
contain
front
teach
week
final
gave
green
oh
quick
develop
ocean
warm
free
minute
strong
special
mind
behind
clear
tail
produce
fact
street
inch
multiply
nothing
course
stay
wheel
full
force
blue
object
decide
surface
deep
moon
island
foot
system
busy
test
record
boat
common
gold
possible
plane
stead
dry
wonder
laugh
thousand
ago
ran
check
game
shape
equate
hot
miss
brought
heat
snow
tire
bring
yes
distant
fill
east
paint
language
among
grand
ball
yet
wave
drop
heart
am
present
heavy
dance
engine
position
arm
wide
sail
material
size
vary
settle
speak
weight
general
ice
matter
circle
pair
include
divide
syllable
felt
perhaps
pick
sudden
count
square
reason
length
represent
art
subject
region
energy
hunt
probable
bed
brother
egg
ride
cell
believe
fraction
forest
sit
race
window
store
summer
train
sleep
prove
lone
leg
exercise
wall
catch
mount
wish
sky
board
joy
winter
sat
written
wild
instrument
kept
glass
grass
cow
job
edge
sign
visit
past
soft
fun
bright
gas
weather
month
million
bear
finish
happy
hope
flower
clothe
strange
gone
jump
baby
eight
village
meet
root
buy
raise
solve
metal
whether
push
seven
paragraph
third
shall
held
hair
describe
cook
floor
either
result
burn
hill
safe
cat
century
consider
type
law
bit
coast
copy
phrase
silent
tall
sand
soil
roll
temperature
finger
industry
value
fight
lie
beat
excite
natural
view
sense
ear
else
quite
broke
case
middle
kill
son
lake
moment
scale
loud
spring
observe
child
straight
consonant
nation
dictionary
milk
speed
method
organ
pay
age
section
dress
cloud
surprise
quiet
stone
tiny
climb
cool
design
poor
lot
experiment
bottom
key
iron
single
stick
flat
twenty
skin
smile
crease
hole
trade
melody
trip
office
receive
row
mouth
exact
symbol
die
least
trouble
shout
except
wrote
seed
tone
join
suggest
clean
break
lady
yard
rise
bad
blow
oil
blood
touch
grew
cent
mix
team
wire
cost
lost
brown
wear
garden
equal
sent
choose
fell
fit
flow
fair
bank
collect
save
control
decimal
gentle
woman
captain
practice
separate
difficult
doctor
please
protect
noon
whose
locate
ring
character
insect
caught
period
indicate
radio
spoke
atom
human
history
effect
electric
expect
crop
modern
element
hit
student
corner
party
supply
bone
rail
imagine
provide
agree
thus
capital
won't
chair
danger
fruit
rich
thick
soldier
process
operate
guess
necessary
sharp
wing
create
neighbor
wash
bat
rather
crowd
corn
compare
poem
string
bell
depend
meat
rub
tube
famous
dollar
stream
fear
sight
thin
triangle
planet
hurry
chief
colony
clock
mine
tie
enter
major
fresh
search
send
yellow
gun
allow
print
dead
spot
desert
suit
current
lift
rose
continue
block
chart
hat
sell
success
company
subtract
event
particular
deal
swim
term
opposite
wife
shoe
shoulder
spread
arrange
camp
invent
cotton
born
determine
quart
nine
truck
noise
level
chance
gather
shop
stretch
throw
shine
property
column
molecule
select
wrong
gray
repeat
require
broad
prepare
salt
nose
plural
anger
claim
continent
oxygen
sugar
death
pretty
skill
women
season
solution
magnet
silver
thank
branch
match
suffix
especially
fig
afraid
huge
sister
steel
discuss
forward
similar
guide
experience
score
apple
bought
led
pitch
coat
mass
card
band
rope
slip
win
dream
evening
condition
feed
tool
total
basic
smell
valley
nor
double
seat
arrive
master
track
parent
shore
division
sheet
substance
favor
connect
post
spend
chord
fat
glad
original
share
station
dad
bread
charge
proper
bar
offer
segment
slave
duck
instant
market
degree
populate
chick
dear
enemy
reply
drink
occur
support
speech
nature
range
steam
motion
path
liquid
log
meant
quotient
teeth
shell
neck
`,_x=`
de
la
le
et
les
des
en
un
du
une
que
est
pour
qui
dans
a
par
plus
pas
au
sur
ne
se
Le
ce
il
sont
La
Les
ou
avec
son
Il
aux
d'un
En
cette
d'une
ont
ses
mais
comme
on
tout
nous
sa
Mais
fait
\xE9t\xE9
aussi
leur
bien
peut
ces
y
deux
A
ans
l
encore
n'est
march\xE9
d
Pour
donc
cours
qu'il
moins
sans
C'est
Et
si
entre
Un
Ce
faire
elle
c'est
peu
vous
Une
prix
On
dont
lui
\xE9galement
Dans
effet
pays
cas
De
millions
Belgique
BEF
mois
leurs
taux
ann\xE9es
temps
groupe
ainsi
toujours
soci\xE9t\xE9
depuis
tous
soit
faut
Bruxelles
fois
quelques
sera
entreprises
F
contre
francs
je
n'a
Nous
Cette
dernier
\xE9tait
Si
s'est
chez
L
monde
alors
sous
actions
autres
Au
ils
reste
trois
non
notre
doit
nouveau
milliards
avant
exemple
compte
belge
premier
s
nouvelle
Elle
l'on
terme
avait
produits
cela
d'autres
fin
niveau
b\xE9n\xE9fice
toute
travail
partie
trop
hausse
secteur
part
beaucoup
Je
valeur
croissance
rapport
USD
aujourd'hui
ann\xE9e
base
Bourse
lors
vers
souvent
vie
l'entreprise
autre
peuvent
bon
surtout
toutes
nombre
fonds
point
grande
jour
va
avoir
nos
quelque
place
grand
personnes
plusieurs
certains
d'affaires
permet
politique
cet
chaque
chiffre
pourrait
devrait
produit
l'ann\xE9e
Par
rien
mieux
celui
qualit\xE9
France
Ils
Ces
s'agit
vente
jamais
production
action
baisse
Avec
r\xE9sultats
Des
votre
risque
d\xE9but
banque
an
voir
avons
qu'un
qu'
elles
moment
qu'on
question
pouvoir
titre
doute
long
petit
d'ailleurs
notamment
FB
droit
qu'elle
heures
cependant
service
Etats-Unis
qu'ils
l'action
jours
celle
demande
belges
ceux
services
bonne
seront
\xE9conomique
raison
car
situation
Depuis
entreprise
me
nouvelles
n'y
possible
toutefois
tant
nouveaux
selon
parce
dit
seul
qu'une
soci\xE9t\xE9s
vient
jusqu'
quatre
march\xE9s
mise
seulement
Van
semble
clients
Tout
Cela
serait
fort
frais
lieu
gestion
font
quand
capital
gouvernement
projet
grands
r\xE9seau
l'autre
donn\xE9es
prendre
plan
points
outre
pourtant
Ainsi
ni
type
Europe
pendant
Comme
mesure
actuellement
public
dire
important
mis
partir
parfois
nom
n'ont
veut
pr\xE9sent
pass\xE9
forme
autant
d\xE9veloppement
mettre
grandes
vue
investisseurs
D
trouve
maison
mal
l'an
moyen
choix
doivent
NLG
direction
Sur
simple
p\xE9riode
enfants
dollars
personnel
assez
programme
g\xE9n\xE9ral
banques
eux
semaine
pr\xE9sident
personne
europ\xE9enne
moyenne
tard
loi
petite
certaines
savoir
loin
explique
plupart
jeunes
cinq
contrat
Banque
valeurs
seule
rendement
nombreux
fonction
offre
client
activit\xE9s
eu
environ
ministre
cadre
sens
\xE9taient
s\xE9curit\xE9
recherche
Paris
sorte
d\xE9cembre
Son
suite
davantage
ensuite
janvier
donne
vrai
cause
d'abord
conditions
suis
juin
peine
certain
septembre
sommes
famille
l'indice
pris
laquelle
directeur
qu'en
propose
gens
derniers
\xE9tant
fut
chose
portefeuille
obligations
afin
diff\xE9rents
technique
Aujourd'hui
ailleurs
P
l'ensemble
am\xE9ricain
ventes
Selon
rue
livre
octobre
vraiment
sein
Or
dollar
Enfin
haut
Plus
petits
porte
tel
dur\xE9e
domaine
aurait
jeune
pr\xE9sente
passe
PC
lorsque
choses
puis
Vous
aucun
l'un
n'en
tandis
coup
existe
propre
carte
crise
importante
atteint
revenus
montant
forte
ici
s'il
Quant
vu
rapidement
j'ai
ville
etc
mars
s'en
mon
premiers
bas
marque
v\xE9ritable
ligne
longtemps
propres
devant
passer
d\xE9part
pu
total
s\xE9rie
quoi
particulier
concurrence
\xE9lev\xE9
position
`,Ix=`
\u05D0\u05EA
\u05DC\u05D0
\u05D6\u05D4
\u05D0\u05E0\u05D9
\u05DE\u05D4
\u05D0\u05EA\u05D4
\u05DC\u05D9
\u05E2\u05DC
\u05D4\u05D5\u05D0
\u05E9\u05DC
\u05DC\u05DA
\u05E9\u05DC\u05D9
\u05E9\u05DC\u05DA
\u05DB\u05DC
\u05E2\u05DD
\u05D0\u05D1\u05DC
\u05D0\u05DD
\u05D9\u05E9
\u05E8\u05D5\u05E6\u05D4
\u05D4\u05D9\u05D4
\u05DB\u05DF
\u05D1\u05E1\u05D3\u05E8
\u05D8\u05D5\u05D1
\u05D9\u05D5\u05D3\u05E2
\u05D4\u05D9\u05D0
\u05D0\u05D6
\u05D0\u05D5\u05EA\u05D5
\u05D0\u05D5\u05EA\u05DA
\u05D9\u05DB\u05D5\u05DC
\u05D0\u05E0\u05D7\u05E0\u05D5
\u05E8\u05E7
\u05D9\u05D5\u05EA\u05E8
\u05D0\u05D5\u05EA\u05D9
\u05D4\u05D6\u05D4
\u05D2
\u05DB\u05D0\u05DF
\u05DC\u05DE\u05D4
\u05D4\u05DD
\u05E9\u05D0\u05E0\u05D9
\u05DC\u05D4\u05D9\u05D5\u05EA
\u05D0\u05D7\u05D3
\u05DE\u05E9\u05D4\u05D5
\u05E2\u05DB\u05E9\u05D9\u05D5
\u05E6\u05E8\u05D9\u05DA
\u05D0\u05D9\u05DA
\u05D0\u05D5
\u05DB\u05DA
\u05DB\u05DE\u05D5
\u05DC\u05E2\u05E9\u05D5\u05EA
\u05DC\u05D5
\u05DC\u05E0\u05D5
\u05E0\u05DB\u05D5\u05DF
\u05D7\u05D5\u05E9\u05D1
\u05DE\u05D9
\u05D9\u05D5\u05D3\u05E2\u05EA
\u05E9\u05D0\u05EA\u05D4
\u05E9\u05DD
\u05D0\u05D5\u05EA\u05D4
\u05E9\u05D4\u05D5\u05D0
\u05DB\u05DE\u05D4
\u05D6\u05D0\u05EA
\u05D1\u05D0\u05DE\u05EA
\u05E9\u05D6\u05D4
\u05E4\u05E9\u05D5\u05D8
\u05D0\u05DC
\u05E2\u05D5\u05E9\u05D4
\u05E9\u05DC\u05D5
\u05D4\u05D0\u05DD
\u05D3\u05D1\u05E8
\u05D4\u05D9\u05D9
\u05DB\u05D3\u05D9
\u05D4\u05D9\u05D9\u05EA\u05D9
\u05D0\u05D9\u05DF
\u05E9\u05DC\u05E0\u05D5
\u05E9\u05DC\u05D0
\u05E2\u05D5\u05D3
\u05D2\u05DD
\u05D0\u05D5\u05DC\u05D9
\u05DB\u05D1\u05E8
\u05DE\u05D0\u05D5\u05D3
\u05D9\u05DB\u05D5\u05DC\u05D4
\u05D0\u05D5\u05DE\u05E8
\u05E0\u05E8\u05D0\u05D4
\u05D4\u05D5\u05DC\u05DA
\u05E4\u05E2\u05DD
\u05D4\u05E8\u05D1\u05D4
\u05DB\u05D9
\u05D6\u05DE\u05DF
\u05D6\u05D5
\u05D9\u05D4\u05D9\u05D4
\u05D5\u05D0\u05E0\u05D9
\u05DC\u05D4
\u05D0\u05D9\u05E4\u05D4
\u05E2\u05D3\u05D9\u05D9\u05DF
\u05D0\u05D5\u05EA\u05DD
\u05DC\u05E4\u05E0\u05D9
\u05DE\u05DE\u05E9
\u05E7\u05E6\u05EA
\u05D0\u05EA\u05DD
\u05DE\u05D9\u05E9\u05D4\u05D5
\u05E2\u05D3
\u05E4\u05D4
\u05DC\u05E8\u05D0\u05D5\u05EA
\u05D1\u05D1\u05E7\u05E9\u05D4
\u05E6\u05E8\u05D9\u05DB\u05D4
\u05EA\u05D5\u05D3\u05D4
\u05D4\u05D9\u05D9\u05EA\u05D4
\u05DC\u05DC\u05DB\u05EA
\u05E9\u05D4\u05D9\u05D0
\u05D7\u05D9\u05D9\u05D1
\u05D5\u05D1\u05DB\u05DF
\u05DC\u05D3\u05D1\u05E8
\u05D4\u05DB\u05DC
\u05D7\u05D5\u05E9\u05D1\u05EA
\u05E9\u05D5\u05D1
\u05DC\u05E2\u05D6\u05D0\u05D6\u05DC
\u05D4\u05D9\u05D5\u05DD
\u05D0\u05D1\u05D0
\u05E7\u05E8\u05D4
\u05D1\u05DB\u05DC
\u05D0\u05E0\u05E9\u05D9\u05DD
\u05E9\u05D9\u05E9
\u05D4
\u05E6\u05E8\u05D9\u05DB\u05D9\u05DD
\u05E7\u05D3\u05D9\u05DE\u05D4
\u05E9\u05D0\u05EA
\u05DC\u05D6\u05D4
\u05D0\u05DC\u05D5\u05D4\u05D9\u05DD
\u05D4\u05D9\u05D9\u05EA
\u05D0\u05D5\u05D4\u05D1
\u05E9\u05DC\u05D4
\u05D0\u05D7\u05EA
\u05D4\u05D9\u05D5
\u05DE\u05E8
\u05D0\u05D7\u05E8
\u05D0\u05D4
\u05D1\u05D3\u05D9\u05D5\u05E7
\u05D9\u05DB\u05D5\u05DC\u05D9\u05DD
\u05DE\u05E6\u05D8\u05E2\u05E8
\u05DC\u05D4\u05DD
\u05D0\u05E3
\u05D0\u05D3\u05D5\u05E0\u05D9
\u05E7\u05D5\u05E8\u05D4
\u05D7\u05D1\u05E8
\u05D1\u05D8\u05D5\u05D7
\u05D7\u05E9\u05D1\u05EA\u05D9
\u05D9\u05D5\u05DD
\u05D0\u05DE\u05D0
\u05D4\u05D0\u05DC\u05D4
\u05D0\u05D9\u05EA\u05DA
\u05E8\u05D5\u05D0\u05D4
\u05DE\u05D3\u05D9
\u05D4\u05D6\u05DE\u05DF
\u05D0\u05DE\u05E8
\u05D4\u05D6\u05D0\u05EA
\u05E9\u05D5\u05DD
\u05D0\u05E4\u05D9\u05DC\u05D5
\u05EA\u05DE\u05D9\u05D3
\u05E9\u05D4\u05DD
\u05D4\u05E0\u05D4
\u05D5
\u05D0\u05D7\u05E8\u05D9
\u05D1\u05D5
\u05D1\u05D2\u05DC\u05DC
\u05D1\u05DF
\u05E6
\u05DE\u05D1\u05D9\u05DF
\u05D9
\u05E8\u05D2\u05E2
\u05D8\u05D5\u05D1\u05D4
\u05D1\u05D6\u05D4
\u05E9\u05D0\u05E0\u05D7\u05E0\u05D5
\u05D0\u05D3\u05DD
\u05D0\u05D5\u05EA\u05E0\u05D5
\u05DB\u05D5\u05DC\u05DD
\u05D0\u05D9\u05D6\u05D4
\u05DC\u05E2\u05D6\u05D5\u05E8
\u05D3\u05D1\u05E8\u05D9\u05DD
\u05D1\u05D8\u05D7
\u05DE\u05D6\u05D4
\u05DC\u05DB\u05DD
\u05D3\u05E8\u05DA
\u05DC\u05D3\u05E2\u05EA
\u05D4\u05D3\u05D1\u05E8
\u05D1\u05D1\u05D9\u05EA
\u05DB\u05D6\u05D4
\u05DE\u05EA\u05DB\u05D5\u05D5\u05DF
\u05DC
\u05DE\u05E1\u05E4\u05D9\u05E7
\u05D0\u05D9\u05EA\u05D9
\u05D1\u05E9\u05D1\u05D9\u05DC
\u05D1
\u05EA\u05D4\u05D9\u05D4
\u05DE\u05E7\u05D5\u05DD
\u05D9\u05D5\u05D3\u05E2\u05D9\u05DD
\u05D5\u05D0\u05D6
\u05E8
\u05D0\u05D5\u05DB\u05DC
\u05D0\u05DE\u05E8\u05EA\u05D9
\u05D1\u05D5\u05D0
\u05D1\u05D9\u05D5\u05EA\u05E8
\u05DC\u05D5\u05DE\u05E8
\u05D4\u05DB\u05D9
\u05DC\u05DB\u05D0\u05DF
\u05DC\u05E7\u05D7\u05EA
\u05D4\u05D1\u05D9\u05EA\u05D4
\u05D0\u05E4\u05E9\u05E8
\u05D4\u05D6\u05D5
\u05DB\u05DC\u05D5\u05DD
\u05E9\u05E0\u05D9\u05DD
\u05EA\u05E8\u05D0\u05D4
\u05DE\u05EA
\u05E2\u05DC\u05D9\u05D9
\u05DB\u05DB\u05D4
\u05D4\u05D9\u05EA\u05D4
\u05E7\u05E9\u05D4
\u05DC\u05D4\u05D2\u05D9\u05D3
\u05D2\u05D3\u05D5\u05DC
\u05E2\u05DC\u05D9\u05D5
\u05E9\u05DC\u05D4\u05DD
\u05DC\u05DE\u05E6\u05D5\u05D0
\u05D0\u05D5\u05D4\u05D1\u05EA
\u05DE\u05D3\u05D1\u05E8
\u05D3\u05D9
\u05DE\u05E0\u05E1\u05D4
\u05D0\u05D5\u05DE\u05E8\u05EA
\u05DB\u05D0\u05D9\u05DC\u05D5
\u05DE\u05DE\u05E0\u05D9
\u05DE\u05E6\u05D8\u05E2\u05E8\u05EA
\u05D4\u05DC\u05D9\u05DC\u05D4
\u05E9\u05E0\u05D9
\u05D9\u05E4\u05D4
\u05E8\u05D5\u05E6\u05D9\u05DD
\u05DE\u05D5\u05EA\u05E7
\u05DC\u05E7\u05D1\u05DC
\u05D1\u05D9
\u05DC\u05E9\u05DD
\u05D0\u05D5\u05E7\u05D9\u05D9
\u05D1\u05D5\u05D0\u05D5
\u05E9
\u05E9\u05DC\u05D5\u05DD
\u05D1\u05DA
\u05D4\u05D1\u05D7\u05D5\u05E8
\u05DB\u05E1\u05E3
\u05E0\u05D4\u05D3\u05E8
\u05DC\u05EA\u05EA
\u05E7
\u05DE\u05DB\u05D0\u05DF
\u05D4\u05D0\u05DE\u05EA
\u05D0\u05D7\u05D9
\u05DE\u05D5\u05DB\u05DF
\u05D1\u05D9\u05EA
\u05E2\u05DC\u05D9\u05DA
\u05DE\u05E8\u05D2\u05D9\u05E9
\u05D0\u05DB\u05E4\u05EA
\u05DC\u05E2\u05D5\u05DC\u05DD
\u05D0\u05E0\u05D5
\u05E2\u05D5\u05E9\u05D9\u05DD
\u05D4\u05D5
\u05E8\u05D0\u05D9\u05EA\u05D9
\u05D0\u05D9\u05EA\u05D5
\u05D9\u05DC\u05D3
\u05E2\u05D5\u05D1\u05D3
\u05E0\u05DE\u05E6\u05D0
\u05D1\u05DC\u05D9
\u05DC\u05D0\u05DF
\u05D3\u05E7\u05D5\u05EA
\u05D7\u05D9\u05D9\u05D1\u05EA
\u05DC\u05E6\u05D0\u05EA
\u05D4\u05D5\u05DC\u05DB\u05D9\u05DD
\u05DE
\u05E9\u05DC\u05DB\u05DD
\u05D0\u05DE\u05E8\u05EA
\u05E0\u05D7\u05DE\u05D3
\u05D0\u05DC\u05D4
\u05EA\u05DF
\u05DE\u05DB\u05D9\u05E8
\u05DC\u05DB\u05DC
\u05E8\u05E2
\u05D5\u05D0\u05EA\u05D4
\u05D1\u05E2\u05D9\u05D4
\u05E2\u05D1\u05D5\u05D3\u05D4
\u05D3
\u05D0\u05DA
\u05DE\u05D4\u05E8
\u05D0\u05DE\u05D5\u05E8
\u05DE\u05E9\u05E0\u05D4
\u05E8\u05E6\u05D9\u05EA\u05D9
\u05D1\u05D3\u05E8\u05DA
\u05DE\u05E1\u05E4\u05E8
\u05DC\u05D2\u05D1\u05D9
\u05D1\u05E9\u05D1\u05D9\u05DC\u05DA
\u05D1\u05DB\u05DC\u05DC
\u05E2\u05E9\u05D4
\u05D4\u05D5\u05DC\u05DB\u05EA
\u05D5\u05D6\u05D4
\u05DC\u05E1\u05E4\u05E8
\u05E0\u05DC\u05DA
\u05D1\u05D0
\u05DE\u05D7\u05E8
\u05DE\u05D0\u05DE\u05D9\u05DF
\u05E2
\u05DE\u05DE\u05DA
\u05DE\u05EA\u05D9
\u05EA\u05D2\u05D9\u05D3
\u05E2\u05E9\u05D9\u05EA
\u05D6\u05D5\u05DB\u05E8
\u05D0\u05D9
\u05DC\u05D7\u05D6\u05D5\u05E8
\u05D1\u05D6\u05DE\u05DF
\u05E2\u05D1\u05D5\u05E8
\u05DE\u05E2\u05D5\u05DC\u05DD
\u05DC\u05D1
\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD
\u05D1\u05D7\u05D5\u05E8
\u05DE\u05E7\u05D5\u05D5\u05D4
\u05DC\u05D4\u05E8\u05D5\u05D2
\u05E0\u05D5\u05DB\u05DC
\u05DE\u05E0\u05D9\u05D7
\u05D3\u05D5\u05DC\u05E8
\u05E2\u05DC\u05D9
\u05D2\u05D1\u05E8\u05EA
\u05D1\u05D8\u05D5\u05D7\u05D4
\u05E0\u05E9\u05DE\u05E2
\u05D7\u05DC\u05E7
\u05D5\u05DC\u05D0
\u05D4\u05D7\u05D9\u05D9\u05DD
\u05E2\u05E9\u05D9\u05EA\u05D9
\u05E1\u05D5\u05E3
\u05D7\u05D9\u05D9\u05DD
\u05E9\u05E0\u05D4
\u05D1\u05D7\u05D9\u05D9\u05DD
\u05D4\u05D1\u05D9\u05EA
\u05D4\u05DB\u05E1\u05E3
\u05E7\u05D8\u05DF
\u05EA\u05D5\u05DB\u05DC
\u05DC\u05D1\u05D3
\u05D9\u05D3\u05D9
\u05D5\u05D4\u05D5\u05D0
\u05D2\u05D1\u05E8
\u05D5\u05D0\u05EA
\u05D4\u05D7\u05D5\u05E6\u05D4
\u05D9\u05D3\u05E2\u05EA\u05D9
\u05D1\u05DE\u05E7\u05D5\u05DD
\u05DE\u05D1\u05D9\u05E0\u05D4
\u05D7\u05E9\u05D5\u05D1
\u05DB\u05DE\u05D5\u05D1\u05DF
\u05D4\u05D0\u05E0\u05E9\u05D9\u05DD
\u05D9\u05DC\u05D3\u05D9\u05DD
\u05D0\u05DE\u05E8\u05D4
\u05D4\u05DE\u05E7\u05D5\u05DD
\u05D4\u05D1\u05D0
\u05E9\u05DE\u05D7
\u05D1\u05D4
\u05E0\u05E2\u05E9\u05D4
\u05EA\u05E2\u05E9\u05D4
\u05D4\u05D3\u05E8\u05DA
\u05E2\u05E6\u05DE\u05DA
\u05D7\u05DB\u05D4
\u05DC\u05D7\u05E9\u05D5\u05D1
\u05DC\u05D2\u05DE\u05E8\u05D9
\u05DB\u05D3\u05D0\u05D9
\u05E1\u05DC\u05D9\u05D7\u05D4
\u05D4\u05E8\u05D0\u05E9\u05D5\u05DF
\u05D4\u05D3\u05D1\u05E8\u05D9\u05DD
\u05D4\u05E9\u05E0\u05D9
\u05DB
\u05DC\u05D1\u05D5\u05D0
\u05D0\u05D9\u05E9
\u05DE\u05D2\u05D9\u05E2
\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4
\u05D0\u05DC\u05D9\u05DA
\u05D0\u05DC\u05D9\u05D9
\u05DE\u05D0\u05D5\u05D7\u05E8
\u05D4\u05D2\u05D9\u05E2
\u05D1\u05D7\u05D6\u05E8\u05D4
\u05E7\u05D5\u05D3\u05DD
\u05DC\u05DC\u05D0
\u05DC\u05D4\u05D2\u05D9\u05E2
\u05D4\u05D9\u05DB\u05DF
\u05DE\u05D4\u05DD
\u05D0\u05D7\u05E8\u05EA
\u05DE\u05D5\u05D6\u05E8
\u05DC\u05E9\u05DE\u05D5\u05E2
\u05D5\u05DF
\u05D4\u05D9\u05D9\u05E0\u05D5
\u05D1\u05D9\u05DF
\u05D4\u05DF
\u05DB\u05D0\u05E9\u05E8
\u05DE\u05D5\u05E9\u05D2
\u05D7\u05D3\u05E9
\u05DC\u05E2\u05D1\u05D5\u05D3
\u05D4\u05E2\u05E8\u05D1
\u05E9\u05E2\u05D5\u05EA
\u05DC\u05D0\u05D7\u05E8
\u05D1\u05D9\u05D7\u05D3
\u05D9\u05D7\u05D3
\u05DE\u05E7\u05E8\u05D4
\u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4
\u05D0\u05D9\u05E9\u05D4
\u05D5\u05D0\u05DD
\u05DC\u05DE\u05E2\u05E9\u05D4
\u05D1\u05D7\u05D5\u05E5
\u05D4\u05E1\u05E4\u05E8
\u05D0\u05EA\u05DE\u05D5\u05DC
\u05DB\u05E2\u05EA
\u05D0\u05D4\u05D9\u05D4
\u05D1\u05D5\u05D0\u05D9
\u05D4\u05D0\u05DC\u05D5
\u05D4\u05E2\u05D5\u05DC\u05DD
\u05D7\u05D1\u05E8\u05D9\u05DD
\u05D1\u05DC\u05D9\u05DC\u05D4
\u05D6\u05D4\u05D5
\u05E8\u05D0\u05D9\u05EA
\u05DC\u05DE\u05E2\u05DC\u05D4
\u05D1\u05E9\u05D1\u05D9\u05DC\u05D9
\u05EA\u05D5\u05E8\u05D2\u05DD
\u05DC\u05DE\u05D8\u05D4
\u05DB\u05DE\u05E2\u05D8
\u05DC\u05D4\u05D1\u05D9\u05D0
\u05DB\u05E0\u05E8\u05D0\u05D4
\u05D0\u05D9\u05EA\u05D4
\u05D1\u05E8\u05D2\u05E2
\u05DC\u05D1\u05D9\u05EA
\u05DE\u05D0\u05D6
\u05E7\u05E9\u05E8
\u05D9\u05DE\u05D9\u05DD
\u05D4\u05D0\u05D7\u05E8\u05D5\u05DF
\u05DE\u05D3\u05D5\u05E2
\u05D1\u05E7\u05E9\u05E8
\u05E9\u05DC\u05D5\u05E9
\u05D5\u05DE\u05D4
\u05E9\u05DE\u05E2\u05EA\u05D9
\u05E9\u05D4\u05D9\u05D4
\u05D4\u05DB\u05D5\u05DC
\u05D0\u05EA\u05DF
\u05D1\u05E0\u05D9
\u05EA\u05E8\u05D0\u05D9
\u05D1\u05EA
\u05D1\u05DE\u05E9\u05DA
\u05E2\u05DC\u05D9\u05D4
\u05D9\u05E7\u05E8\u05D4
\u05DC\u05D4\u05D9\u05E9\u05D0\u05E8
\u05DE\u05D6\u05DC
\u05DE\u05DE\u05E0\u05D5
\u05E1\u05E4\u05E8
\u05DC\u05E9\u05D0\u05D5\u05DC
\u05DB\u05E8\u05D2\u05E2
\u05D1\u05D7\u05D9\u05D9\u05DA
\u05D1\u05E0\u05D0\u05D3\u05DD
\u05D4\u05E2\u05E0\u05D9\u05D9\u05DF
\u05D4\u05D1\u05E2\u05D9\u05D4
\u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4
\u05DE\u05EA\u05DB\u05D5\u05D5\u05E0\u05EA
\u05D4\u05E9\u05DD
\u05D0\u05DC\u05D9
\u05D0\u05E2\u05E9\u05D4
\u05D4\u05E2\u05D9\u05E8
\u05D1\u05D9\u05D5\u05DD
\u05D1\u05D0\u05D5\u05E4\u05DF
\u05D0\u05DC\u05D9\u05D5
\u05DB\u05DC\u05D5\u05DE\u05E8
\u05E7\u05D8\u05E0\u05D4
\u05DE\u05E7\u05D1\u05DC
\u05E6\u05D5\u05D3\u05E7
\u05D8\u05D5\u05D1\u05D9\u05DD
\u05D1\u05E4\u05E0\u05D9\u05DD
\u05D1\u05E8\u05D5\u05E8
\u05D4\u05E4\u05E2\u05DD
\u05D7\u05D6\u05E8\u05D4
\u05E2\u05E6\u05DE\u05D9
\u05E2\u05E8\u05D1
\u05E1\u05D5\u05D2
\u05D4\u05D9\u05D7\u05D9\u05D3
\u05DC\u05E4\u05D7\u05D5\u05EA
\u05E2\u05D5\u05DE\u05D3
\u05D4\u05E1\u05D9\u05D1\u05D4
\u05D2\u05D3\u05D5\u05DC\u05D4
\u05E2\u05DC\u05D9\u05E0\u05D5
\u05DC\u05D9\u05DC\u05D4
\u05DC\u05D0\u05DB\u05D5\u05DC
\u05D0\u05DC\u05D5
\u05D4\u05D9\u05DC\u05D3
\u05D0\u05EA\u05DB\u05DD
\u05E8\u05E2\u05D9\u05D5\u05DF
\u05D4\u05D7\u05D1\u05E8
\u05D1\u05EA\u05D5\u05DA
\u05D1\u05E2\u05D5\u05DC\u05DD
\u05DE\u05E9\u05D7\u05E7
\u05D1\u05D4\u05D7\u05DC\u05D8
\u05DE\u05E8\u05D2\u05D9\u05E9\u05D4
\u05D0\u05D3\u05D9\u05E8\u05D9\u05DD
\u05DC\u05E2\u05D6\u05D5\u05D1
\u05E8\u05D1\u05D4
\u05D4\u05D0\u05D9\u05E9
\u05D4\u05D9\u05D7\u05D9\u05D3\u05D4
\u05DC\u05D4\u05D9\u05DB\u05E0\u05E1
\u05E8\u05D1
\u05E0\u05D5\u05E8\u05D0
\u05DC\u05D4\u05E9\u05D9\u05D2
`,Fx=`
\u044F
\u043D\u0435
\u0447\u0442\u043E
\u0432
\u0438
\u0442\u044B
\u044D\u0442\u043E
\u043D\u0430
\u0441
\u043E\u043D
\u043C\u044B
\u043A\u0430\u043A
\u0432\u044B
\u0434\u0430
\u043C\u043D\u0435
\u0443
\u043D\u0435\u0442
\u043C\u0435\u043D\u044F
\u0442\u0430\u043A
\u043D\u043E
\u0430
\u0435\u0433\u043E
\u0432\u0441\u0435
\u043E\u043D\u0430
\u0442\u0435\u0431\u044F
\u043E
\u0435\u0441\u043B\u0438
\u0431\u044B
\u0442\u0435\u0431\u0435
\u0437\u0430
\u043E\u043D\u0438
\u0447\u0442\u043E\u0431\u044B
\u0436\u0435
\u043F\u0440\u043E\u0441\u0442\u043E
\u0435\u0441\u0442\u044C
\u0438\u0437
\u043D\u0443
\u043A
\u0434\u043B\u044F
\u0445\u043E\u0440\u043E\u0448\u043E
\u043A\u043E\u0433\u0434\u0430
\u0437\u0434\u0435\u0441\u044C
\u043F\u043E
\u0431\u044B\u043B
\u0437\u043D\u0430\u044E
\u0442\u043E
\u0442\u043E\u043B\u044C\u043A\u043E
\u0431\u044B\u043B\u043E
\u043C\u043E\u0436\u0435\u0442
\u0432\u0430\u0441
\u0432\u0441\u0451
\u043D\u0430\u0441
\u043E\u0442
\u0432\u043E\u0442
\u0431\u044B\u0442\u044C
\u0431\u0443\u0434\u0435\u0442
\u043A\u0442\u043E
\u043F\u043E\u0447\u0435\u043C\u0443
\u0432\u0430\u043C
\u043E\u0447\u0435\u043D\u044C
\u043C\u043E\u0433\u0443
\u0438\u0445
\u0435\u0449\u0435
\u0443\u0436\u0435
\u0438\u043B\u0438
\u0441\u043F\u0430\u0441\u0438\u0431\u043E
\u043D\u0430\u043C
\u0442\u0430\u043C
\u0447\u0435\u043C
\u0445\u043E\u0447\u0443
\u0441\u0435\u0439\u0447\u0430\u0441
\u0433\u0434\u0435
\u043D\u0443\u0436\u043D\u043E
\u044D\u0442\u043E\u0433\u043E
\u043D\u0438\u0447\u0435\u0433\u043E
\u0435\u0435
\u0431\u044B\u043B\u0430
\u043C\u043E\u0439
\u0437\u043D\u0430\u0435\u0448\u044C
\u043B\u0430\u0434\u043D\u043E
\u044D\u0442\u043E\u043C
\u0434\u043E
\u043F\u043E\u0442\u043E\u043C\u0443
\u0442\u0435\u043F\u0435\u0440\u044C
\u0434\u0443\u043C\u0430\u044E
\u0431\u043E\u043B\u044C\u0448\u0435
\u043F
\u0441\u043E
\u0440\u0430\u0437
\u0435\u0451
\u0432\u0440\u0435\u043C\u044F
\u0435\u043C\u0443
\u043D\u0430\u0434\u043E
\u044D\u0442\u043E\u0442
\u043B\u0438
\u043F\u0440\u0438\u0432\u0435\u0442
\u0434\u0430\u0436\u0435
\u043F\u043E\u043A\u0430
\u0441\u043A\u0430\u0437\u0430\u043B
\u0441\u0435\u0431\u044F
\u0434\u043E\u043B\u0436\u0435\u043D
\u0445\u043E\u0447\u0435\u0448\u044C
\u0434\u0430\u0432\u0430\u0439
\u044D\u0439
\u0435\u0449\u0451
\u0442\u043E\u0433\u043E
\u043D\u0438\u043A\u043E\u0433\u0434\u0430
\u0442\u043E\u0436\u0435
\u0442\u043E\u0433\u0434\u0430
\u043D\u0435\u0433\u043E
\u0431\u044B\u043B\u0438
\u043A\u043E\u043D\u0435\u0447\u043D\u043E
\u043D\u0438
\u043E\u0431
\u043F\u0440\u0430\u0432\u0434\u0430
\u0442\u0443\u0442
\u043C\u043E\u044F
\u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430
\u0441\u043A\u0430\u0437\u0430\u0442\u044C
\u0442\u043E\u0431\u043E\u0439
\u0441\u0435\u0433\u043E\u0434\u043D\u044F
\u043E\u0434\u0438\u043D
\u043C\u043E\u0436\u0435\u0448\u044C
\u043B\u0443\u0447\u0448\u0435
\u0441\u044E\u0434\u0430
\u043C\u043D\u043E\u0439
\u0441\u0434\u0435\u043B\u0430\u0442\u044C
\u0437\u043D\u0430\u0447\u0438\u0442
\u0432\u0441\u0435\u0433\u0434\u0430
\u0435\u0439
\u043F\u043E\u0440\u044F\u0434\u043A\u0435
\u0434\u0435\u043B\u043E
\u0434\u043E\u043B\u0436\u043D\u044B
\u0442\u043E\u043C
\u043C\u043E\u0436\u043D\u043E
\u0431\u0435\u0437
\u0434\u0435\u043D\u044C
\u0431\u0443\u0434\u0443
\u0434\u0435\u043B\u0430\u0442\u044C
\u0445\u043E\u0442\u0435\u043B
\u044D\u0442\u0438
\u043C\u043D\u043E\u0433\u043E
\u044D\u0442\u0438\u043C
\u043F\u043E\u0441\u043B\u0435
\u0447\u0435\u0433\u043E
\u0432\u0441\u0435\u0433\u043E
\u0442\u0432\u043E\u0439
\u0432\u043E
\u043D\u0438\u043C
\u043B\u0435\u0442
\u0431\u043E\u0436\u0435
\u043D\u0438\u0445
\u043C\u0438\u0441\u0442\u0435\u0440
\u0436\u0438\u0437\u043D\u044C
\u043D\u0435\u0439
\u0432\u0435\u0434\u044C
\u0442\u0430\u043A\u043E\u0439
\u043F\u043E\u0442\u043E\u043C
\u043A\u043E\u0442\u043E\u0440\u044B\u0439
\u043D\u0435\u043C\u043D\u043E\u0433\u043E
\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E
\u0447\u0435\u0440\u0435\u0437
\u0441\u044D\u0440
\u0432\u0441\u0435\u0445
\u0441\u043B\u0438\u0448\u043A\u043E\u043C
\u0441\u0435\u0431\u0435
\u0438\u043C
\u0442\u0430\u043A\u043E\u0435
\u0434\u043E\u043B\u0436\u043D\u0430
\u043C\u043E\u0435\u0439
\u0437\u043D\u0430\u0435\u0442\u0435
\u0434\u0443\u043C\u0430\u0435\u0448\u044C
\u044D\u0442\u043E\u0439
\u043B\u044E\u0434\u0438
\u0437\u0430\u0447\u0435\u043C
\u0441\u0432\u043E\u044E
\u0442\u0432\u043E\u044F
\u0441\u043A\u0430\u0437\u0430\u043B\u0430
\u0447\u0435\u043B\u043E\u0432\u0435\u043A
\u043D\u0430\u0437\u0430\u0434
\u044D\u0442\u0443
\u043F\u043E\u0434
\u0442\u043E\u0447\u043D\u043E
\u043C\u043E\u0436\u0435\u043C
\u043E\u0442\u0435\u0446
\u043C\u0430\u043C\u0430
\u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C
\u043C\u043E\u0433
\u0432\u043C\u0435\u0441\u0442\u0435
\u0441\u0434\u0435\u043B\u0430\u043B
\u043A\u0430\u0436\u0435\u0442\u0441\u044F
\u043C\u043E\u0438
\u0434\u0440\u0443\u0433
\u043D\u0438\u043A\u0442\u043E
\u043A\u0443\u0434\u0430
\u044D\u0442\u0430
\u043A\u043E\u0442\u043E\u0440\u044B\u0435
\u0434\u0432\u0430
\u0442\u043E\u0442
\u0436\u0438\u0437\u043D\u0438
\u0441\u043A\u043E\u043B\u044C\u043A\u043E
\u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F
\u043F\u043E\u044D\u0442\u043E\u043C\u0443
\u043F\u043E\u043D\u0438\u043C\u0430\u044E
\u0441\u043D\u043E\u0432\u0430
\u043F\u0430\u0440\u0435\u043D\u044C
\u043B\u044E\u0431\u043B\u044E
\u0432\u0438\u0434\u0435\u043B
\u043B\u044E\u0434\u0435\u0439
\u043F\u043E\u043C\u043E\u0447\u044C
\u0445\u043E\u0447\u0435\u0442
\u043F\u043E\u0445\u043E\u0436\u0435
\u043C\u0435\u0441\u0442\u043E
\u0437\u043D\u0430\u0442\u044C
\u043E\u0442\u043B\u0438\u0447\u043D\u043E
\u0434\u043E\u043C\u043E\u0439
\u0432\u0441\u0435\u043C
\u0434\u0435\u043D\u044C\u0433\u0438
\u0438\u0434\u0438
\u043F\u0440\u043E\u0441\u0442\u0438
\u0434\u043E\u043A\u0442\u043E\u0440
\u0434\u0443\u043C\u0430\u043B
\u0432\u0440\u0435\u043C\u0435\u043D\u0438
\u0434\u043E\u043C\u0430
\u0434\u0435\u043B\u0430\u0435\u0448\u044C
\u0438\u043C\u0435\u043D\u043D\u043E
\u0433\u043E\u0432\u043E\u0440\u0438\u043B
\u0441\u043B\u0443\u0448\u0430\u0439
\u043F\u0440\u044F\u043C\u043E
\u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C
\u0431\u0443\u0434\u0435\u043C
\u0441\u0432\u043E\u0435\u0439
\u043D\u0430\u0439\u0442\u0438
\u0441\u0442\u043E\u0438\u0442
\u0440\u0430\u0437\u0432\u0435
\u0442\u0435\u043C
\u0445\u043E\u0442\u0435\u043B\u0430
\u0430\u0433\u0430
\u043C\u043E\u0436\u0435\u0442\u0435
\u043B\u0438\u0448\u044C
\u0434\u0435\u043B\u0435
\u0431\u0443\u0434\u0435\u0448\u044C
\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u0435
\u0441\u0430\u043C
\u0442\u0440\u0438
\u0437\u043D\u0430\u043B
\u0445\u043E\u0442\u0438\u0442\u0435
\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C
\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E
\u0441\u043A\u0430\u0436\u0438
\u0441\u043E\u0432\u0441\u0435\u043C
\u0437\u043D\u0430\u0435\u0442
\u0434\u0430\u0432\u0430\u0439\u0442\u0435
\u043F\u0440\u043E\u0448\u0443
\u043C\u043E\u0435\u0433\u043E
\u0434\u043E\u043C
\u0434\u043E\u043B\u0436\u043D\u043E
\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E
\u043A\u0430\u043A\u043E\u0439
\u0441\u0432\u043E\u0438
\u0432\u0430\u043C\u0438
\u0434\u0435\u043B\u0430
\u0433\u043E\u0432\u043E\u0440\u0438\u0442
\u0447\u0435\u0440\u0442
\u0436\u0430\u043B\u044C
\u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442
\u043F\u0430\u043F\u0430
\u0432\u0430\u0448
\u0442\u0443\u0434\u0430
\u043F\u0440\u043E
\u0437\u0430\u0432\u0442\u0440\u0430
\u043E\u043D\u043E
\u0443\u0432\u0435\u0440\u0435\u043D
\u0441\u0430\u043C\u043E\u043C
\u043E\u0434\u043D\u0430
\u0442\u0435\u0445
\u043F\u0435\u0440\u0435\u0434
\u043E\u0442\u0441\u044E\u0434\u0430
\u043D\u0430\u0448
\u043D\u0435\u0435
\u0441\u0432\u043E\u0439
\u043D\u0443\u0436\u043D\u0430
\u043C\u043E\u044E
\u043D\u0443\u0436\u0435\u043D
\u043A\u0430\u0436\u0434\u044B\u0439
\u043A\u043E\u0433\u043E
\u0440\u0430\u0431\u043E\u0442\u0443
\u0432\u0435\u0440\u043D\u043E
\u0442\u0432\u043E\u0435\u0439
\u0436
\u0431\u0443\u0434\u0443\u0442
\u0438\u0442\u0430\u043A
\u0438\u043C\u044F
\u043F\u043E\u043D\u044F\u043B
\u043F\u043E\u0440
\u0443\u0436
\u043D\u0430\u0434\u0435\u044E\u0441\u044C
\u043F\u0440\u043E\u0442\u0438\u0432
\u0445\u0432\u0430\u0442\u0438\u0442
\u043F\u043E\u0448\u043B\u0438
\u0431\u043E\u043B\u0435\u0435
\u0433\u043E\u0432\u043E\u0440\u044E
\u0440\u0430\u043D\u044C\u0448\u0435
\u043D\u0430\u0432\u0435\u0440\u043D\u043E\u0435
\u0440\u0435\u0431\u044F\u0442\u0430
\u0442\u0432\u043E\u0438
\u0432\u0430\u0448\u0430
\u0434\u0430\u0439
\u043F\u0440\u0438
\u043C\u043E\u0433\u043B\u0438
\u043D\u0430\u043C\u0438
\u0432\u043E\u043E\u0431\u0449\u0435
\u0432\u0441\u044E
\u043C\u0430\u0442\u044C
\u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0448\u044C
\u043A\u043E
\u0438\u0434\u0442\u0438
\u044D\u0442\u0438\u0445
\u0438\u0437\u0432\u0438\u043D\u0438\u0442\u0435
\u0447\u0451\u043C
\u0440\u0430\u0434\u0438
\u043D\u0435\u043B\u044C\u0437\u044F
\u0442\u0430\u043A\u0430\u044F
\u0445\u043E\u0442\u044F
\u0434\u0440\u0443\u0433\u043E\u0439
\u0432\u0438\u0434\u0443
\u0432\u0438\u0436\u0443
\u043E\u0442\u043A\u0443\u0434\u0430
\u043C\u0438\u0441\u0441
\u0432\u0438\u0434\u0435\u0442\u044C
\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u0439
\u043D\u0430\u0434
\u043C\u043E\u0433\u0443\u0442
\u0434\u0443\u043C\u0430\u043B\u0430
\u0431\u0443\u0434\u0442\u043E
\u0440\u0430\u0432\u043D\u043E
\u043C\u0435\u0436\u0434\u0443
\u0437\u043E\u0432\u0443\u0442
\u043F\u043E\u0434\u043E\u0436\u0434\u0438
\u0441\u043A\u043E\u0440\u043E
\u044D\u0442\u043E\u043C\u0443
\u0432\u043E\u0437\u044C\u043C\u0438
\u043D\u0430\u0448\u0438
\u0438\u0437\u0432\u0438\u043D\u0438
\u0441\u0432\u043E\u0435\u0433\u043E
\u044F\u0441\u043D\u043E
\u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
\u0432\u043E\u043F\u0440\u043E\u0441
\u0433\u043E\u0434\u0430
\u0432\u0435\u0449\u0438
\u043C\u0438\u043D\u0443\u0442
\u0440\u0443\u043A\u0438
\u043A\u043E\u0442\u043E\u0440\u0430\u044F
\u043F\u043E\u0447\u0442\u0438
\u0441\u043C\u043E\u0442\u0440\u0438
\u0442\u0430\u043A\u0438\u0435
\u043C\u043E\u0433\u043B\u0430
\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E
\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E
\u0432\u0438\u0434\u0438\u0448\u044C
\u0440\u0430\u0431\u043E\u0442\u0430
\u043F\u0430\u0440\u0443
\u043D\u043E\u0447\u044C
\u0434\u043D\u044F
\u0433\u043E\u0441\u043F\u043E\u0434\u0438
\u0433\u043E\u0432\u043E\u0440\u0438\u0448\u044C
\u0432\u0435\u0441\u044C
\u0431\u044B\u0441\u0442\u0440\u043E
\u0436\u0438\u0442\u044C
\u0441\u044B\u043D
\u0445\u043E\u0442\u044C
\u0442\u0432\u043E\u044E
\u0432\u0430\u0448\u0435
\u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438
\u0441\u043A\u0430\u0436\u0443
\u0443\u0431\u0438\u0442\u044C
\u0441\u043B\u044B\u0448\u0430\u043B
\u043F\u043E\u0440\u0430
\u0433\u043E\u0442\u043E\u0432
\u0441\u043E\u0431\u043E\u0439
\u0438\u043C\u0435\u044E
\u043F\u0435\u0440\u0432\u044B\u0439
\u043D\u0435\u0451
\u0441\u0430\u043C\u043E\u0435
\u0432\u0438\u0434\u0435\u043B\u0430
\u043A\u0430\u043A\u0430\u044F
\u0441\u043C\u043E\u0433\u0443
\u0441\u043A\u0430\u0437\u0430\u043B\u0438
\u043F\u043B\u043E\u0445\u043E
\u043C\u0438\u0441\u0441\u0438\u0441
\u0440\u0430\u0434
\u043C\u0435\u0441\u0442\u0435
\u043D\u0438\u043A\u0430\u043A\u0438\u0445
\u043D\u0430\u0441\u0447\u0435\u0442
\u0438\u043D\u043E\u0433\u0434\u0430
\u043F\u0440\u0430\u0432
\u043D\u0430\u0448\u043B\u0438
\u043E\u0442\u0446\u0430
\u0432\u0430\u0448\u0438
\u0434\u0435\u0442\u0435\u0439
\u043F\u0443\u0441\u0442\u044C
\u043C\u043E\u0435
\u0441\u0432\u043E\u0438\u0445
\u0437\u043D\u0430\u0435\u043C
\u0432\u0440\u043E\u0434\u0435
\u043A\u043E\u0442\u043E\u0440\u0443\u044E
\u043F\u043E\u0439\u0434\u0443
\u0441\u0434\u0435\u043B\u0430\u043B\u0430
\u0441\u043C\u0435\u0440\u0442\u0438
\u0442\u0430\u043A\u0438\u043C
\u0437\u043D\u0430\u043B\u0430
\u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E
\u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0430
\u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0441\u044C
\u0440\u044F\u0434\u043E\u043C
\u0441\u043B\u0443\u0447\u0430\u0435
\u043E\u0434\u043D\u043E\u0433\u043E
\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E
\u0443\u0432\u0438\u0434\u0435\u0442\u044C
\u043A\u0435\u043C
\u043C\u0438\u0440
\u0431\u0440\u0430\u0442
\u043F\u043E\u0439\u0442\u0438
\u0442\u0430\u043A\u043E\u0433\u043E
\u043F\u043E\u043C\u043E\u0449\u044C
\u0432\u0447\u0435\u0440\u0430
\u0434\u0435\u043B\u0430\u0435\u0442
\u0433\u043E\u0432\u043E\u0440\u044F\u0442
\u043E\u0434\u043D\u043E
\u043A\u0440\u043E\u043C\u0435
\u043D\u0430\u0448\u0435\u0439
\u0437\u0434\u043E\u0440\u043E\u0432\u043E
\u0434\u0432\u0435\u0440\u044C
\u0434\u0440\u0443\u0433\u0430
\u0436\u0435\u043D\u0449\u0438\u043D\u0430
\u0443\u0431\u0438\u043B
\u0431\u0443\u0434\u044C
\u0434\u043E\u043B\u0433\u043E
\u0432\u0430\u0436\u043D\u043E
\u043D\u043E\u043C\u0435\u0440
\u0434\u0435\u043D\u0435\u0433
\u0445\u043E\u0440\u043E\u0448\u0438\u0439
\u0432\u0435\u0447\u0435\u0440\u043E\u043C
\u043E\u0434\u043D\u0443
\u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B
\u0432\u0430\u0448\u0435\u0439
\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C
\u0442\u0432\u043E\u0435\u0433\u043E
\u043D\u043E\u0447\u0438
\u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430
\u0441\u0430\u043C\u0430
\u0443\u0432\u0435\u0440\u0435\u043D\u0430
\u043D\u0443\u0436\u043D\u044B
\u0441\u0435\u0440\u044C\u0435\u0437\u043D\u043E
\u043C\u0430\u0448\u0438\u043D\u0443
\u0442\u0430\u043A\u0436\u0435
\u0442\u043E\u043C\u0443
\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439
\u043F\u044F\u0442\u044C
\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F
\u0434\u0430\u043B\u044C\u0448\u0435
\u043C\u043E\u0438\u0445
\u0443\u0437\u043D\u0430\u0442\u044C
\u043F\u0440\u0430\u0432\u0430
\u0441\u0432\u043E\u0438\u043C
\u043D\u043E\u0447\u044C\u044E
\u0434\u0435\u0442\u0438
\u0442\u0435
\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E
\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442
\u0434\u0430\u0432\u043D\u043E
\u043C\u043E\u0438\u043C
\u0447\u0443\u0432\u0430\u043A
\u0447\u0451\u0440\u0442
\u0434\u0432\u0435
\u0436\u0435\u043D\u0430
\u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F
\u043E\u043F\u044F\u0442\u044C
\u0434\u043E\u0440\u043E\u0433\u0430\u044F
\u043E\u0434\u043D\u043E\u0439
\u0434\u0443\u043C\u0430\u0435\u0442\u0435
\u043F\u043E\u043C\u043D\u0438\u0448\u044C
\u0441\u043D\u0430\u0447\u0430\u043B\u0430
\u0433\u043B\u0430\u0437\u0430
\u0443\u0442\u0440\u043E\u043C
\u043E\u0445
\u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E
\u0432\u0437\u044F\u0442\u044C
\u043F\u0430\u0440\u043D\u044F
\u0438\u0434\u0435\u044F
\u0447\u0430\u0441\u0442\u044C
\u043D\u0438\u043C\u0438
\u0431\u043E\u043B\u044C\u0448\u043E\u0439
\u0441\u0434\u0435\u043B\u0430\u043B\u0438
\u0432\u0438\u0434\u0435\u043B\u0438
\u0441\u0440\u0430\u0437\u0443
\u0441\u043B\u043E\u0432\u0430
\u043F\u043E\u043C\u043D\u044E
\u0443\u0442\u0440\u043E
\u0441\u0435\u0440\u0434\u0446\u0435
`,Rx=`
que
de
no
a
la
el
es
y
en
lo
un
por
qu\xE9
me
una
te
los
se
con
para
mi
est\xE1
si
bien
pero
yo
eso
las
s\xED
su
tu
aqu\xED
del
al
como
le
m\xE1s
esto
ya
todo
esta
vamos
muy
hay
ahora
algo
estoy
tengo
nos
t\xFA
nada
cuando
ha
este
s\xE9
est\xE1s
as\xED
puedo
c\xF3mo
quiero
s\xF3lo
soy
tiene
gracias
o
\xE9l
bueno
fue
ser
hacer
son
todos
era
eres
vez
tienes
creo
ella
he
ese
voy
puede
sabes
hola
sus
porque
dios
qui\xE9n
nunca
d\xF3nde
quieres
casa
favor
esa
dos
tan
se\xF1or
tiempo
verdad
estaba
mejor
est\xE1n
va
hombre
usted
mucho
hace
entonces
siento
tenemos
puedes
ah\xED
ti
vida
ver
alguien
sr
hasta
sin
m\xED
solo
a\xF1os
sobre
decir
uno
siempre
oh
ir
cosas
tambi\xE9n
antes
has
ni
mis
d\xEDa
estar
estamos
noche
nadie
otra
quiere
parece
nosotros
poco
padre
trabajo
gente
mira
vas
sea
les
donde
mismo
hecho
ellos
dijo
pasa
dinero
hijo
tal
otro
hablar
seguro
claro
estas
lugar
mundo
amigo
espera
mierda
han
tus
sabe
despu\xE9s
momento
desde
fuera
cosa
tipo
ma\xF1ana
podemos
dije
gran
necesito
estado
podr\xEDa
acuerdo
pap\xE1
tener
dice
m\xEDo
crees
buena
gusta
nuestro
nuevo
ser\xE1
haciendo
d\xEDas
nombre
buen
hab\xEDa
ven
tres
menos
debe
ten\xEDa
mal
conmigo
madre
hoy
quien
sido
mam\xE1
tienen
luego
todas
all\xED
toda
hora
mujer
visto
haces
importa
contigo
ve
tarde
oye
parte
haber
hombres
problema
mas
saber
quer\xEDa
a\xFAn
veces
nuestra
hacerlo
cada
hizo
veo
tanto
raz\xF3n
ustedes
idea
esos
van
quiz\xE1
debo
alguna
cierto
ud
muerto
unos
estos
salir
polic\xEDa
realmente
demasiado
familia
pueden
cabeza
hemos
amigos
chica
cari\xF1o
lado
all\xE1
entre
minutos
digo
alg\xFAn
serio
cuidado
pas\xF3
buenas
somos
amor
puerta
ves
vaya
ah
suerte
eh
r\xE1pido
cuenta
quiz\xE1s
io
esas
pues
pasado
pens\xE9
todav\xEDa
hermano
debes
casi
forma
aqui
chico
ok
dicho
nueva
sab\xEDa
muchas
dentro
hice
contra
auto
camino
ayuda
primera
hacia
vi
miedo
adi\xF3s
primero
deber\xEDa
poder
ni\xF1os
ser\xEDa
historia
hey
mientras
ciudad
dijiste
espero
cu\xE1nto
esposa
pronto
chicos
cualquier
viejo
debemos
deja
a\xF1o
muerte
hablando
manos
da
loco
problemas
mano
guerra
semana
pasar
vale
cu\xE1l
viene
volver
toma
caso
agua
har\xE9
vete
entiendo
horas
personas
capit\xE1n
adelante
ni\xF1o
listo
noches
buenos
iba
juntos
dame
\xFAnico
d\xE9jame
cerca
otros
sigue
grande
arriba
jefe
habla
supongo
manera
quieren
feliz
significa
sangre
fin
bajo
llama
venir
morir
importante
hiciste
ojos
escucha
entrar
ning\xFAn
coraz\xF3n
diablos
necesitamos
atr\xE1s
durante
dices
nuestros
persona
abajo
dr
hija
dejar
necesita
llegar
hago
se\xF1ora
haya
suficiente
doctor
gustar\xEDa
tierra
cara
siquiera
genial
cree
supuesto
tomar
equipo
justo
juego
ninguna
matar
cinco
dicen
amo
cu\xE1ndo
peque\xF1o
algunos
conozco
clase
maldito
unas
muchos
hubiera
segundo
aunque
pueda
dime
igual
comida
ay
cuerpo
encontrar
fuerte
vuelta
venga
creer
realidad
saben
puta
deber\xEDas
pregunta
fui
cuatro
sra
primer
trabajar
e
hagas
alto
maldita
comer
n\xFAmero
dar
necesitas
john
oportunidad
punto
misma
\xFAltima
afuera
mujeres
pensar
fueron
dif\xEDcil
vivir
paso
malo
estabas
vivo
haga
queda
hijos
mayor
fiesta
hacen
medio
algunas
basta
ei
arma
vino
meses
cuarto
\xE9ste
escuela
est\xE9
`,Ox=`
Ich
ist
ich
nicht
Sie
du
das
die
es
und
der
zu
sie
Das
ein
in
wir
Du
mir
mit
Was
den
mich
was
auf
dass
er
eine
Es
hat
Wir
Und
so
sind
von
dich
war
haben
f\xFCr
Ja
hier
an
habe
Er
bin
wie
noch
dir
uns
sich
Die
nur
einen
Nein
dem
ihn
auch
hast
sein
ihr
da
aus
kann
aber
Aber
schon
wenn
wird
um
Wie
als
bist
im
mal
doch
gut
meine
jetzt
wei\xDF
Wenn
werden
Der
nach
ja
Oh
oder
dann
will
mein
mehr
keine
etwas
alles
muss
immer
nichts
man
wieder
bei
hab
machen
vor
Mann
ihm
einem
tun
zum
k\xF6nnen
sagen
werde
denn
Ist
Ein
Warum
einer
gehen
sehen
sehr
geht
alle
\xFCber
m\xFCssen
diese
einfach
euch
des
nie
Also
Wo
los
Zeit
Ihnen
gibt
wirklich
Hey
Danke
deine
w\xFCrde
soll
Da
hatte
Hier
wissen
bitte
viel
Dann
So
gesagt
Ihr
am
kein
Komm
Wer
zur\xFCck
wurde
In
wollte
Frau
Leben
w\xE4re
wo
damit
Nicht
lch
Gott
Leute
kannst
heute
meinen
dieser
dein
kommt
kommen
willst
Na
wollen
sicher
ganz
Jetzt
Mein
Mr
also
zur
Hast
Gut
h\xE4tte
weil
tut
Hallo
Okay
macht
waren
bis
Vielleicht
k\xF6nnte
Eine
Bitte
weg
seine
lassen
Vater
gesehen
Nun
gerade
Alles
glaube
Tag
ab
Geld
gemacht
nein
Sir
sollte
sagte
keinen
durch
zwei
diesen
passiert
wohl
vielleicht
ihre
Mutter
reden
anderen
dachte
da\xDF
m\xF6chte
wirst
lhr
geh\xF6rt
wei\xDFt
Keine
raus
Meine
paar
besser
ob
her
musst
Ordnung
meiner
klar
ihnen
Los
diesem
meinem
lange
Lass
dieses
helfen
unsere
Weg
selbst
Nur
finden
Mal
jemand
denke
Ach
Nacht
genau
gar
sagt
Welt
Auf
M\xE4dchen
ins
hin
vom
sch\xF6n
warum
weiter
Leid
gleich
wer
Man
ohne
Menschen
deinen
leid
Wieso
dort
Als
Hause
sollten
davon
zusammen
geben
Ok
H\xF6r
machst
Freund
richtig
Angst
Bist
Tut
Mit
viele
sieht
Haus
tot
sollen
ganze
andere
getan
okay
rein
Diese
Moment
bleiben
brauchen
Weil
Kinder
unter
Arbeit
F\xFCr
Problem
daf\xFCr
Herr
Haben
wegen
Jack
geht's
liebe
genug
dabei
bringen
Ihre
'ne
gegen
Wei\xDFt
Sag
schnell
nun
eines
brauche
Abend
hatten
Jahre
Mach
Bruder
Sache
h\xF6ren
komm
Sohn
seit
Morgen
drei
steht
Schei\xDFe
mag
sei
unser
konnte
habt
Oder
einmal
hei\xDFt
OK
Willst
Kopf
Hilfe
Familie
Geh
Baby
Dich
Sind
erst
fertig
gefunden
seid
kam
nehmen
morgen
sprechen
Mir
sofort
Kann
Hat
Jahren
Kind
seinen
Genau
daran
Junge
Minuten
bevor
Stadt
beim
sterben
warst
Recht
glauben
Warte
dar\xFCber
deiner
lhre
deinem
Ende
He
Dinge
Namen
wahr
Alle
allein
Nat\xFCrlich
t\xF6ten
Nichts
Wirklich
bekommen
M\xE4nner
vergessen
Doch
dazu
gab
sp\xE4ter
wusste
Augen
Dank
Freunde
Jungs
halten
warten
Gl\xFCck
beide
gute
Dein
kennen
Deine
'n
Hi
Dr
Auto
sage
gehe
komme
Dir
mache
Von
Uhr
sehe
Teufel
sonst
Art
gern
Liebe
jeden
k\xF6nnten
ihren
Halt
Fall
Dad
Film
bisschen
eigentlich
weit
mach
Gib
vorbei
verstehe
danke
drin
Im
Name
ganzen
Musik
w\xFCrden
T\xFCr
verr\xFCckt
solltest
denken
Noch
dran
Sieh
lieber
Den
leben
Guten
Um
darauf
Kein
stimmt
John
Kerl
letzte
Job
verloren
wurden
kenne
Ahnung
seiner
Grund
toll
Bis
Verdammt
bald
bereit
all
jemanden
`,hs={checkTestEnd:zx,countTypos:Hx,calcWpm:Nx,countCorrectChars:Xx,calcWpmRaw:Bx};function zx(s,r,u){return!(u-1!==s.currWord.idx||s.currLatter.idx!==s.currWord.str.length-1||!r)}function Bx(s,r,u){return Math.round((s-r)*(60/u)/5)}function Nx(s,r,u){const h=Math.round((s+r)*(60/u)/5);return isNaN(h)?0:h}function Hx(s){return s.latters.reduce((r,u)=>(u.isCorrect===!1&&r++,r),0)}function Xx(s){return s.latters.reduce((r,u)=>(u.isCorrect===!0&&r++,r),0)}const Ct={generateNewTest:Gx,retest:Ux,countAllTypos:Qx,calcWordWpm:Jx,calcTestWpm:Kx,saveTestToLocalStorage:Zx,localTestMode:Vx,saveLocalTestMode:jx,localSettings:Wx},Yx={english:Mx,french:_x,spanish:Rx,russian:Fx,german:Ox,hebrew:Ix};function Wx(){const s=localStorage.getItem("testSettings");if(s)return JSON.parse(s);const r={difficulty:"normal",smoothCaret:!0,lang:"english"};return localStorage.setItem("testSettings",JSON.stringify(r)),r}function Vx(){const s=localStorage.getItem("testMode");return s?JSON.parse(s):(localStorage.setItem("testMode",JSON.stringify({mode:"time",level:15})),{mode:"time",level:15})}function jx(s){localStorage.setItem("testMode",JSON.stringify(s))}function Gx(s){const r=$x(s).map(h=>({word:h,isCorrect:null,wpm:0,wpmRaw:0,typeCount:0,time:0,latters:h.split("").map(g=>({latter:g,isCorrect:null}))}));return{currLatter:{idx:0,str:r[0].latters[0].latter},currWord:{idx:0,str:r[0].word},time:0,passed:null,typoCount:0,sumType:0,acc:0,realAcc:0,wpm:0,wpmRaw:0,txt:r}}function Ux(s){const r={...s};return r.currLatter={idx:0,str:r.txt[0].latters[0].latter},r.currWord={idx:0,str:r.txt[0].word},r.typoCount=0,r.sumType=0,r.txt=qx(s.txt),r}function $x(s="english"){return Yx[s].split(`
`).sort(()=>Math.random()-.5).slice(0,100)}function qx(s){return s.map(r=>({word:r.word,typeCount:0,wpm:0,wpmRaw:0,time:0,isCorrect:null,latters:r.word.split("").map(u=>({latter:u,isCorrect:null}))}))}function Zx(s){window.localStorage.setItem("test",JSON.stringify(s))}function Kx(s){const r=s.txt.map(({wpm:m})=>m).slice(0,s.currWord.idx).reduce((m,w)=>m+=w,0),u=s.txt.map(({wpmRaw:m})=>m).slice(0,s.currWord.idx).reduce((m,w)=>m+=w,0),h=Math.round(r/s.currWord.idx),g=Math.round(u/s.currWord.idx);return[h,g]}function Jx(s){return s.txt.map((u,h)=>{let g=0,m=0;for(let w=0;w<h;w++)g+=hs.countTypos(s.txt[w]),m+=hs.countCorrectChars(s.txt[w]);return h<s.currWord.idx&&(u.wpm=hs.calcWpm(m,h,u.time),u.wpmRaw=hs.calcWpmRaw(u.typeCount,h,u.time)),u})}function Qx(s){return s.txt.reduce((r,u)=>(r+=hs.countTypos(u),r),0)}var bh={exports:{}},fo={exports:{}},vh=function(r,u){return function(){for(var g=new Array(arguments.length),m=0;m<g.length;m++)g[m]=arguments[m];return r.apply(u,g)}},em=vh,go=Object.prototype.toString,po=function(s){return function(r){var u=go.call(r);return s[u]||(s[u]=u.slice(8,-1).toLowerCase())}}(Object.create(null));function es(s){return s=s.toLowerCase(),function(u){return po(u)===s}}function xo(s){return Array.isArray(s)}function Ja(s){return typeof s>"u"}function tm(s){return s!==null&&!Ja(s)&&s.constructor!==null&&!Ja(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}var yh=es("ArrayBuffer");function im(s){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(s):r=s&&s.buffer&&yh(s.buffer),r}function sm(s){return typeof s=="string"}function am(s){return typeof s=="number"}function wh(s){return s!==null&&typeof s=="object"}function Ba(s){if(po(s)!=="object")return!1;var r=Object.getPrototypeOf(s);return r===null||r===Object.prototype}var nm=es("Date"),rm=es("File"),om=es("Blob"),lm=es("FileList");function mo(s){return go.call(s)==="[object Function]"}function um(s){return wh(s)&&mo(s.pipe)}function cm(s){var r="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||go.call(s)===r||mo(s.toString)&&s.toString()===r)}var hm=es("URLSearchParams");function dm(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")}function fm(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function bo(s,r){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),xo(s))for(var u=0,h=s.length;u<h;u++)r.call(null,s[u],u,s);else for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&r.call(null,s[g],g,s)}function Ir(){var s={};function r(g,m){Ba(s[m])&&Ba(g)?s[m]=Ir(s[m],g):Ba(g)?s[m]=Ir({},g):xo(g)?s[m]=g.slice():s[m]=g}for(var u=0,h=arguments.length;u<h;u++)bo(arguments[u],r);return s}function gm(s,r,u){return bo(r,function(g,m){u&&typeof g=="function"?s[m]=em(g,u):s[m]=g}),s}function pm(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s}function xm(s,r,u,h){s.prototype=Object.create(r.prototype,h),s.prototype.constructor=s,u&&Object.assign(s.prototype,u)}function mm(s,r,u){var h,g,m,w={};r=r||{};do{for(h=Object.getOwnPropertyNames(s),g=h.length;g-- >0;)m=h[g],w[m]||(r[m]=s[m],w[m]=!0);s=Object.getPrototypeOf(s)}while(s&&(!u||u(s,r))&&s!==Object.prototype);return r}function bm(s,r,u){s=String(s),(u===void 0||u>s.length)&&(u=s.length),u-=r.length;var h=s.indexOf(r,u);return h!==-1&&h===u}function vm(s){if(!s)return null;var r=s.length;if(Ja(r))return null;for(var u=new Array(r);r-- >0;)u[r]=s[r];return u}var ym=function(s){return function(r){return s&&r instanceof s}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),dt={isArray:xo,isArrayBuffer:yh,isBuffer:tm,isFormData:cm,isArrayBufferView:im,isString:sm,isNumber:am,isObject:wh,isPlainObject:Ba,isUndefined:Ja,isDate:nm,isFile:rm,isBlob:om,isFunction:mo,isStream:um,isURLSearchParams:hm,isStandardBrowserEnv:fm,forEach:bo,merge:Ir,extend:gm,trim:dm,stripBOM:pm,inherits:xm,toFlatObject:mm,kindOf:po,kindOfTest:es,endsWith:bm,toArray:vm,isTypedArray:ym,isFileList:lm},as=dt;function Bl(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Dh=function(r,u,h){if(!u)return r;var g;if(h)g=h(u);else if(as.isURLSearchParams(u))g=u.toString();else{var m=[];as.forEach(u,function(S,_){S===null||typeof S>"u"||(as.isArray(S)?_=_+"[]":S=[S],as.forEach(S,function(z){as.isDate(z)?z=z.toISOString():as.isObject(z)&&(z=JSON.stringify(z)),m.push(Bl(_)+"="+Bl(z))}))}),g=m.join("&")}if(g){var w=r.indexOf("#");w!==-1&&(r=r.slice(0,w)),r+=(r.indexOf("?")===-1?"?":"&")+g}return r},wm=dt;function Dn(){this.handlers=[]}Dn.prototype.use=function(r,u,h){return this.handlers.push({fulfilled:r,rejected:u,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1};Dn.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};Dn.prototype.forEach=function(r){wm.forEach(this.handlers,function(h){h!==null&&r(h)})};var Dm=Dn,Em=dt,Cm=function(r,u){Em.forEach(r,function(g,m){m!==u&&m.toUpperCase()===u.toUpperCase()&&(r[u]=g,delete r[m])})},Eh=dt;function As(s,r,u,h,g){Error.call(this),this.message=s,this.name="AxiosError",r&&(this.code=r),u&&(this.config=u),h&&(this.request=h),g&&(this.response=g)}Eh.inherits(As,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ch=As.prototype,Ah={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(s){Ah[s]={value:s}});Object.defineProperties(As,Ah);Object.defineProperty(Ch,"isAxiosError",{value:!0});As.from=function(s,r,u,h,g,m){var w=Object.create(Ch);return Eh.toFlatObject(s,w,function(S){return S!==Error.prototype}),As.call(w,s.message,r,u,h,g),w.name=s.name,m&&Object.assign(w,m),w};var Ss=As,kh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=dt;function Am(s,r){r=r||new FormData;var u=[];function h(m){return m===null?"":Ht.isDate(m)?m.toISOString():Ht.isArrayBuffer(m)||Ht.isTypedArray(m)?typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function g(m,w){if(Ht.isPlainObject(m)||Ht.isArray(m)){if(u.indexOf(m)!==-1)throw Error("Circular reference detected in "+w);u.push(m),Ht.forEach(m,function(S,_){if(!Ht.isUndefined(S)){var F=w?w+"."+_:_,z;if(S&&!w&&typeof S=="object"){if(Ht.endsWith(_,"{}"))S=JSON.stringify(S);else if(Ht.endsWith(_,"[]")&&(z=Ht.toArray(S))){z.forEach(function(O){!Ht.isUndefined(O)&&r.append(F,h(O))});return}}g(S,F)}}),u.pop()}else r.append(w,h(m))}return g(s),r}var Sh=Am,Wn,Nl;function km(){if(Nl)return Wn;Nl=1;var s=Ss;return Wn=function(u,h,g){var m=g.config.validateStatus;!g.status||!m||m(g.status)?u(g):h(new s("Request failed with status code "+g.status,[s.ERR_BAD_REQUEST,s.ERR_BAD_RESPONSE][Math.floor(g.status/100)-4],g.config,g.request,g))},Wn}var Vn,Hl;function Sm(){if(Hl)return Vn;Hl=1;var s=dt;return Vn=s.isStandardBrowserEnv()?function(){return{write:function(h,g,m,w,D,S){var _=[];_.push(h+"="+encodeURIComponent(g)),s.isNumber(m)&&_.push("expires="+new Date(m).toGMTString()),s.isString(w)&&_.push("path="+w),s.isString(D)&&_.push("domain="+D),S===!0&&_.push("secure"),document.cookie=_.join("; ")},read:function(h){var g=document.cookie.match(new RegExp("(^|;\\s*)("+h+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(h){this.write(h,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Vn}var Pm=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Tm=function(r,u){return u?r.replace(/\/+$/,"")+"/"+u.replace(/^\/+/,""):r},Lm=Pm,Mm=Tm,Ph=function(r,u){return r&&!Lm(u)?Mm(r,u):u},jn,Xl;function _m(){if(Xl)return jn;Xl=1;var s=dt,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return jn=function(h){var g={},m,w,D;return h&&s.forEach(h.split(`
`),function(_){if(D=_.indexOf(":"),m=s.trim(_.substr(0,D)).toLowerCase(),w=s.trim(_.substr(D+1)),m){if(g[m]&&r.indexOf(m)>=0)return;m==="set-cookie"?g[m]=(g[m]?g[m]:[]).concat([w]):g[m]=g[m]?g[m]+", "+w:w}}),g},jn}var Gn,Yl;function Im(){if(Yl)return Gn;Yl=1;var s=dt;return Gn=s.isStandardBrowserEnv()?function(){var u=/(msie|trident)/i.test(navigator.userAgent),h=document.createElement("a"),g;function m(w){var D=w;return u&&(h.setAttribute("href",D),D=h.href),h.setAttribute("href",D),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:h.port,pathname:h.pathname.charAt(0)==="/"?h.pathname:"/"+h.pathname}}return g=m(window.location.href),function(D){var S=s.isString(D)?m(D):D;return S.protocol===g.protocol&&S.host===g.host}}():function(){return function(){return!0}}(),Gn}var Un,Wl;function En(){if(Wl)return Un;Wl=1;var s=Ss,r=dt;function u(h){s.call(this,h==null?"canceled":h,s.ERR_CANCELED),this.name="CanceledError"}return r.inherits(u,s,{__CANCEL__:!0}),Un=u,Un}var $n,Vl;function Fm(){return Vl||(Vl=1,$n=function(r){var u=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return u&&u[1]||""}),$n}var qn,jl;function Gl(){if(jl)return qn;jl=1;var s=dt,r=km(),u=Sm(),h=Dh,g=Ph,m=_m(),w=Im(),D=kh,S=Ss,_=En(),F=Fm();return qn=function(O){return new Promise(function($,K){var se=O.data,V=O.headers,P=O.responseType,j;function Z(){O.cancelToken&&O.cancelToken.unsubscribe(j),O.signal&&O.signal.removeEventListener("abort",j)}s.isFormData(se)&&s.isStandardBrowserEnv()&&delete V["Content-Type"];var H=new XMLHttpRequest;if(O.auth){var ue=O.auth.username||"",J=O.auth.password?unescape(encodeURIComponent(O.auth.password)):"";V.Authorization="Basic "+btoa(ue+":"+J)}var te=g(O.baseURL,O.url);H.open(O.method.toUpperCase(),h(te,O.params,O.paramsSerializer),!0),H.timeout=O.timeout;function re(){if(!!H){var ie="getAllResponseHeaders"in H?m(H.getAllResponseHeaders()):null,ye=!P||P==="text"||P==="json"?H.responseText:H.response,ge={data:ye,status:H.status,statusText:H.statusText,headers:ie,config:O,request:H};r(function(Te){$(Te),Z()},function(Te){K(Te),Z()},ge),H=null}}if("onloadend"in H?H.onloadend=re:H.onreadystatechange=function(){!H||H.readyState!==4||H.status===0&&!(H.responseURL&&H.responseURL.indexOf("file:")===0)||setTimeout(re)},H.onabort=function(){!H||(K(new S("Request aborted",S.ECONNABORTED,O,H)),H=null)},H.onerror=function(){K(new S("Network Error",S.ERR_NETWORK,O,H,H)),H=null},H.ontimeout=function(){var ye=O.timeout?"timeout of "+O.timeout+"ms exceeded":"timeout exceeded",ge=O.transitional||D;O.timeoutErrorMessage&&(ye=O.timeoutErrorMessage),K(new S(ye,ge.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,O,H)),H=null},s.isStandardBrowserEnv()){var Q=(O.withCredentials||w(te))&&O.xsrfCookieName?u.read(O.xsrfCookieName):void 0;Q&&(V[O.xsrfHeaderName]=Q)}"setRequestHeader"in H&&s.forEach(V,function(ye,ge){typeof se>"u"&&ge.toLowerCase()==="content-type"?delete V[ge]:H.setRequestHeader(ge,ye)}),s.isUndefined(O.withCredentials)||(H.withCredentials=!!O.withCredentials),P&&P!=="json"&&(H.responseType=O.responseType),typeof O.onDownloadProgress=="function"&&H.addEventListener("progress",O.onDownloadProgress),typeof O.onUploadProgress=="function"&&H.upload&&H.upload.addEventListener("progress",O.onUploadProgress),(O.cancelToken||O.signal)&&(j=function(ie){!H||(K(!ie||ie&&ie.type?new _:ie),H.abort(),H=null)},O.cancelToken&&O.cancelToken.subscribe(j),O.signal&&(O.signal.aborted?j():O.signal.addEventListener("abort",j))),se||(se=null);var le=F(te);if(le&&["http","https","file"].indexOf(le)===-1){K(new S("Unsupported protocol "+le+":",S.ERR_BAD_REQUEST,O));return}H.send(se)})},qn}var Zn,Ul;function Rm(){return Ul||(Ul=1,Zn=null),Zn}var lt=dt,$l=Cm,ql=Ss,Om=kh,zm=Sh,Bm={"Content-Type":"application/x-www-form-urlencoded"};function Zl(s,r){!lt.isUndefined(s)&&lt.isUndefined(s["Content-Type"])&&(s["Content-Type"]=r)}function Nm(){var s;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(s=Gl()),s}function Hm(s,r,u){if(lt.isString(s))try{return(r||JSON.parse)(s),lt.trim(s)}catch(h){if(h.name!=="SyntaxError")throw h}return(u||JSON.stringify)(s)}var Cn={transitional:Om,adapter:Nm(),transformRequest:[function(r,u){if($l(u,"Accept"),$l(u,"Content-Type"),lt.isFormData(r)||lt.isArrayBuffer(r)||lt.isBuffer(r)||lt.isStream(r)||lt.isFile(r)||lt.isBlob(r))return r;if(lt.isArrayBufferView(r))return r.buffer;if(lt.isURLSearchParams(r))return Zl(u,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var h=lt.isObject(r),g=u&&u["Content-Type"],m;if((m=lt.isFileList(r))||h&&g==="multipart/form-data"){var w=this.env&&this.env.FormData;return zm(m?{"files[]":r}:r,w&&new w)}else if(h||g==="application/json")return Zl(u,"application/json"),Hm(r);return r}],transformResponse:[function(r){var u=this.transitional||Cn.transitional,h=u&&u.silentJSONParsing,g=u&&u.forcedJSONParsing,m=!h&&this.responseType==="json";if(m||g&&lt.isString(r)&&r.length)try{return JSON.parse(r)}catch(w){if(m)throw w.name==="SyntaxError"?ql.from(w,ql.ERR_BAD_RESPONSE,this,null,this.response):w}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rm()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};lt.forEach(["delete","get","head"],function(r){Cn.headers[r]={}});lt.forEach(["post","put","patch"],function(r){Cn.headers[r]=lt.merge(Bm)});var vo=Cn,Xm=dt,Ym=vo,Wm=function(r,u,h){var g=this||Ym;return Xm.forEach(h,function(w){r=w.call(g,r,u)}),r},Kn,Kl;function Th(){return Kl||(Kl=1,Kn=function(r){return!!(r&&r.__CANCEL__)}),Kn}var Jl=dt,Jn=Wm,Vm=Th(),jm=vo,Gm=En();function Qn(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Gm}var Um=function(r){Qn(r),r.headers=r.headers||{},r.data=Jn.call(r,r.data,r.headers,r.transformRequest),r.headers=Jl.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Jl.forEach(["delete","get","head","post","put","patch","common"],function(g){delete r.headers[g]});var u=r.adapter||jm.adapter;return u(r).then(function(g){return Qn(r),g.data=Jn.call(r,g.data,g.headers,r.transformResponse),g},function(g){return Vm(g)||(Qn(r),g&&g.response&&(g.response.data=Jn.call(r,g.response.data,g.response.headers,r.transformResponse))),Promise.reject(g)})},Pt=dt,Lh=function(r,u){u=u||{};var h={};function g(F,z){return Pt.isPlainObject(F)&&Pt.isPlainObject(z)?Pt.merge(F,z):Pt.isPlainObject(z)?Pt.merge({},z):Pt.isArray(z)?z.slice():z}function m(F){if(Pt.isUndefined(u[F])){if(!Pt.isUndefined(r[F]))return g(void 0,r[F])}else return g(r[F],u[F])}function w(F){if(!Pt.isUndefined(u[F]))return g(void 0,u[F])}function D(F){if(Pt.isUndefined(u[F])){if(!Pt.isUndefined(r[F]))return g(void 0,r[F])}else return g(void 0,u[F])}function S(F){if(F in u)return g(r[F],u[F]);if(F in r)return g(void 0,r[F])}var _={url:w,method:w,data:w,baseURL:D,transformRequest:D,transformResponse:D,paramsSerializer:D,timeout:D,timeoutMessage:D,withCredentials:D,adapter:D,responseType:D,xsrfCookieName:D,xsrfHeaderName:D,onUploadProgress:D,onDownloadProgress:D,decompress:D,maxContentLength:D,maxBodyLength:D,beforeRedirect:D,transport:D,httpAgent:D,httpsAgent:D,cancelToken:D,socketPath:D,responseEncoding:D,validateStatus:S};return Pt.forEach(Object.keys(r).concat(Object.keys(u)),function(z){var O=_[z]||m,W=O(z);Pt.isUndefined(W)&&O!==S||(h[z]=W)}),h},er,Ql;function Mh(){return Ql||(Ql=1,er={version:"0.27.2"}),er}var $m=Mh().version,wi=Ss,yo={};["object","boolean","number","function","string","symbol"].forEach(function(s,r){yo[s]=function(h){return typeof h===s||"a"+(r<1?"n ":" ")+s}});var eu={};yo.transitional=function(r,u,h){function g(m,w){return"[Axios v"+$m+"] Transitional option '"+m+"'"+w+(h?". "+h:"")}return function(m,w,D){if(r===!1)throw new wi(g(w," has been removed"+(u?" in "+u:"")),wi.ERR_DEPRECATED);return u&&!eu[w]&&(eu[w]=!0,console.warn(g(w," has been deprecated since v"+u+" and will be removed in the near future"))),r?r(m,w,D):!0}};function qm(s,r,u){if(typeof s!="object")throw new wi("options must be an object",wi.ERR_BAD_OPTION_VALUE);for(var h=Object.keys(s),g=h.length;g-- >0;){var m=h[g],w=r[m];if(w){var D=s[m],S=D===void 0||w(D,m,s);if(S!==!0)throw new wi("option "+m+" must be "+S,wi.ERR_BAD_OPTION_VALUE);continue}if(u!==!0)throw new wi("Unknown option "+m,wi.ERR_BAD_OPTION)}}var Zm={assertOptions:qm,validators:yo},_h=dt,Km=Dh,tu=Dm,iu=Um,An=Lh,Jm=Ph,Ih=Zm,ns=Ih.validators;function ks(s){this.defaults=s,this.interceptors={request:new tu,response:new tu}}ks.prototype.request=function(r,u){typeof r=="string"?(u=u||{},u.url=r):u=r||{},u=An(this.defaults,u),u.method?u.method=u.method.toLowerCase():this.defaults.method?u.method=this.defaults.method.toLowerCase():u.method="get";var h=u.transitional;h!==void 0&&Ih.assertOptions(h,{silentJSONParsing:ns.transitional(ns.boolean),forcedJSONParsing:ns.transitional(ns.boolean),clarifyTimeoutError:ns.transitional(ns.boolean)},!1);var g=[],m=!0;this.interceptors.request.forEach(function(W){typeof W.runWhen=="function"&&W.runWhen(u)===!1||(m=m&&W.synchronous,g.unshift(W.fulfilled,W.rejected))});var w=[];this.interceptors.response.forEach(function(W){w.push(W.fulfilled,W.rejected)});var D;if(!m){var S=[iu,void 0];for(Array.prototype.unshift.apply(S,g),S=S.concat(w),D=Promise.resolve(u);S.length;)D=D.then(S.shift(),S.shift());return D}for(var _=u;g.length;){var F=g.shift(),z=g.shift();try{_=F(_)}catch(O){z(O);break}}try{D=iu(_)}catch(O){return Promise.reject(O)}for(;w.length;)D=D.then(w.shift(),w.shift());return D};ks.prototype.getUri=function(r){r=An(this.defaults,r);var u=Jm(r.baseURL,r.url);return Km(u,r.params,r.paramsSerializer)};_h.forEach(["delete","get","head","options"],function(r){ks.prototype[r]=function(u,h){return this.request(An(h||{},{method:r,url:u,data:(h||{}).data}))}});_h.forEach(["post","put","patch"],function(r){function u(h){return function(m,w,D){return this.request(An(D||{},{method:r,headers:h?{"Content-Type":"multipart/form-data"}:{},url:m,data:w}))}}ks.prototype[r]=u(),ks.prototype[r+"Form"]=u(!0)});var Qm=ks,tr,su;function eb(){if(su)return tr;su=1;var s=En();function r(u){if(typeof u!="function")throw new TypeError("executor must be a function.");var h;this.promise=new Promise(function(w){h=w});var g=this;this.promise.then(function(m){if(!!g._listeners){var w,D=g._listeners.length;for(w=0;w<D;w++)g._listeners[w](m);g._listeners=null}}),this.promise.then=function(m){var w,D=new Promise(function(S){g.subscribe(S),w=S}).then(m);return D.cancel=function(){g.unsubscribe(w)},D},u(function(w){g.reason||(g.reason=new s(w),h(g.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(h){if(this.reason){h(this.reason);return}this._listeners?this._listeners.push(h):this._listeners=[h]},r.prototype.unsubscribe=function(h){if(!!this._listeners){var g=this._listeners.indexOf(h);g!==-1&&this._listeners.splice(g,1)}},r.source=function(){var h,g=new r(function(w){h=w});return{token:g,cancel:h}},tr=r,tr}var ir,au;function tb(){return au||(au=1,ir=function(r){return function(h){return r.apply(null,h)}}),ir}var sr,nu;function ib(){if(nu)return sr;nu=1;var s=dt;return sr=function(u){return s.isObject(u)&&u.isAxiosError===!0},sr}var ru=dt,sb=vh,Na=Qm,ab=Lh,nb=vo;function Fh(s){var r=new Na(s),u=sb(Na.prototype.request,r);return ru.extend(u,Na.prototype,r),ru.extend(u,r),u.create=function(g){return Fh(ab(s,g))},u}var St=Fh(nb);St.Axios=Na;St.CanceledError=En();St.CancelToken=eb();St.isCancel=Th();St.VERSION=Mh().version;St.toFormData=Sh;St.AxiosError=Ss;St.Cancel=St.CanceledError;St.all=function(r){return Promise.all(r)};St.spread=tb();St.isAxiosError=ib();fo.exports=St;fo.exports.default=St;(function(s){s.exports=fo.exports})(bh);const Ii=nh(bh.exports),Rh="/api/test",Oh={saveTest:rb,getUserTests:ob};async function rb(s,r){return Ii.post(`${Rh}/save`,{test:s,uid:r}).then(({data:u})=>u)}async function ob(s){return Ii.get(`${Rh}/${s}`).then(({data:r})=>r)}async function ou(s,r){if(r===null)return null;const u=s.getBoundingClientRect(),h=r.getBoundingClientRect();return li({top:s.offsetTop-Math.round(s.clientHeight/5),bottom:u.bottom-h.bottom,right:u.right-h.right,left:u.left-h.left,leftEnd:u.left-h.left+u.width})}const Is=xa({id:"caret",state:()=>({caretPos:null,isLatterEnd:!1,currLineIdx:1,relativeTop:0,caretCurrWordIdx:0}),getters:{getCaretPos:({caretPos:s})=>s,getIslatterEnd:({isLatterEnd:s})=>s,getRelativeTop:({relativeTop:s})=>s,getCurrLineIdx:({currLineIdx:s})=>s},actions:{async updatedCaretPos(s,r){const u=Do();if(this.caretPos===null){this.caretPos=await ou(s,r);return}const{top:h,left:g,leftEnd:m,bottom:w}=await ou(s,r);h===this.caretPos.top?(this.caretPos.left=g,this.caretPos.leftEnd=m):(this.currLineIdx++,this.currLineIdx>=3&&(u.cutWordsToRender(),this.caretCurrWordIdx=0),this.caretPos.top=h,this.caretPos.left=g,this.caretPos.leftEnd=m,this.caretPos.bottom=w,this.relativeTop+=h)},setLatterEnd(s){this.isLatterEnd=s},resetCaret(){this.relativeTop=0,this.caretPos=null}}});Ii.defaults.withCredentials=!0;const ma="/api/user",_a={logout:lb,login:ub,signup:cb,loginWithGoogle:hb,getLoggedInUser:db};async function lb(){return Ii.post(`${ma}/logout`).then(({data:s})=>s)}async function ub(s){return Ii.post(`${ma}/signin`,s,{withCredentials:!0}).then(({data:r})=>r)}async function cb(s){return Ii.post(`${ma}/signup`,s,{withCredentials:!0}).then(({data:r})=>r)}async function hb(){return Ii.get(`${ma}/google/login`,{withCredentials:!0}).then(({data:s})=>s)}async function db(){try{const{data:s}=await Ii.get(`${ma}/current_user`,{withCredentials:!0});return s||null}catch(s){console.log("cant get current user",s)}}const wo=xa("user",()=>{const s=kt(null),r=kt(null),u=He(()=>s.value),h=He(()=>r.value);async function g(){!s.value||(r.value=await Oh.getUserTests(s.value.id))}async function m(){s.value=await _a.getLoggedInUser(),g()}async function w(){window.open("/api/user/google/login")}async function D(F){s.value=await _a.login(F)}async function S(F){await _a.signup(F),document.location.reload()}async function _(){await _a.logout()}return{user:s,userTests:r,getLoggedInUser:u,login:D,setLoggedInUser:m,loginWithGoogle:w,logout:_,signup:S,getUserTests:h}}),Do=xa({id:"test",state:()=>({test:Ct.generateNewTest(Ct.localSettings().lang),isActive:!1,AFKtimeout:null,testTimeInterval:null,isNewTest:!1,wordsToCut:0}),getters:{getTest:({test:s})=>s,getIsNewTest:({isNewTest:s})=>s,getWordFromTxt:({test:s})=>s==null?void 0:s.txt[s.currWord.idx],getLatterFromTxt:({test:s})=>s==null?void 0:s.txt[s.currWord.idx].latters[s.currLatter.idx],getIsActiveTest:({isActive:s})=>s},actions:{cutWordsToRender(){this.wordsToCut=this.test.currWord.idx},loadTest(){const r=Ns().getTestSettings;this.test=Ct.generateNewTest(r.lang)},setNewTest(){this.isNewTest=!0},activateTest(){this.isActive=!0,this.handleTime(!0)},newTest(){const r=Ns().getTestSettings;this.test=Ct.generateNewTest(r.lang),this.test.time=0,this.isNewTest=!1,this.handleTime(!1),this.$router.push("/test")},reloadTest(){this.test.time=0,this.handleTime(!1),this.test=Ct.retest(this.test)},setAFK(){this.isActive=!1,this.handleTime(!1)},handleTime(s){s?(this.isActive=!0,this.testTimeInterval=setInterval(()=>this.test.time+=.25,250)):(clearInterval(this.testTimeInterval),this.testTimeInterval=null)},finishTest(){const s=wo();this.handleTime(!1),this.test.txt=Ct.calcWordWpm(this.test),this.test.realAcc=Math.round(100-this.test.typoCount*100/this.test.sumType),this.test.acc=Math.round(100-Ct.countAllTypos(this.test)*100/this.test.sumType);const[r,u]=Ct.calcTestWpm(this.test);this.test.wpm=r,this.test.wpmRaw=u,Ct.saveTestToLocalStorage(this.test),this.$router.push("/testResult"),s.getLoggedInUser&&this.test.acc>90&&this.test.passed!==!1&&Oh.saveTest(this.test,s.getLoggedInUser.id)},handleType(s){var w;if(this.test===null)return;const r=Ns(),u=Is(),{currLatter:h,currWord:g}=this.test;this.test.txt[g.idx].latters[h.idx];const m=r.getTestSettings.difficulty;if(this.isActive||this.handleTime(!0),r.getTestMode==="words"&&hs.checkTestEnd(this.test,u.getIslatterEnd,r.getTestLevel)){this.handleTime(!1),this.finishTest();return}if(this.test.sumType++,this.AFKtimeout!==null&&clearTimeout(this.AFKtimeout),this.AFKtimeout=setTimeout(()=>{this.setAFK()},3e3),s===((w=this.test)==null?void 0:w.currLatter.str))h.str===" "?this.setNextWord(!0):this.setLatterNewStatus(!0);else{if(m==="expert"){this.test.passed=!1,this.finishTest();return}this.test.typoCount++,h.str===" "?this.setNextWord(!1):this.setLatterNewStatus(!1)}},finishWord(){const r=Ns().testSettings,{currWord:u}=this.test;if(this.test.txt[u.idx].time=this.test.time,this.test.txt[u.idx].typeCount=this.test.sumType,this.test.txt[u.idx].latters.every(h=>h.isCorrect))this.test.txt[u.idx].isCorrect=!0;else if(this.test.txt[u.idx].isCorrect=!1,r.difficulty==="hard"){this.test.passed=!1,this.finishTest();return}},setNextWord(s){this.finishWord();const{currLatter:r,currWord:u}=this.test;Is().setLatterEnd(!1),u.idx++,u.str=this.test.txt[u.idx].word,r.idx=0,r.str=u.str[0]},setPrevWord(){const{currLatter:s,currWord:r}=this.test;Is().setLatterEnd(!0),r.idx--;const h=this.test.txt[r.idx];s.idx=h.latters.length-1,r.str=h.word,s.str=r.str[r.str.length-1]},setLatterNewStatus(s){const{currLatter:r,currWord:u}=this.test,h=Is();this.test.txt[u.idx].latters[r.idx].isCorrect=!!s,r.idx===u.str.length-1?(r.str=" ",h.setLatterEnd(!0)):(r.idx++,r.str=u.str[r.idx])},hendleSpicialKeys(s){switch(s){case"Backspace":this.hendleBackspace();break;case"Escape":this.setAFK()}},hendleBackspace(){const{currWord:s,currLatter:r}=this.test,u=Is();r.idx===0&&s.idx===0||s.idx>1&&this.test.txt.slice(0,s.idx).every(g=>g.isCorrect)&&r.idx===0||(r.idx===0?this.setPrevWord():r.idx===s.str.length-1&&u.$state.isLatterEnd?(u.setLatterEnd(!1),r.str=s.str[s.str.length-1],this.test.txt[s.idx].latters[r.idx].isCorrect=null):(r.idx--,this.test.txt[s.idx].latters[r.idx].isCorrect=null,r.str=s.str[r.idx]))}}}),Ns=xa("testPtions",()=>{const s=Do(),r=Lx(),u=kt(Ct.localTestMode().mode),h=kt(Ct.localTestMode().level),g=li(Ct.localSettings()),m=He(()=>g),w=He(()=>g.lang==="hebrew"),D=He(()=>u.value),S=He(()=>h.value),_=He(()=>h.value===15&&u.value==="words");function F(W){u.value=W,Ct.saveLocalTestMode({mode:u.value,level:h.value}),s.setNewTest(),r.push("/test")}function z(W){h.value=W,Ct.saveLocalTestMode({mode:u.value,level:h.value}),s.setNewTest(),r.push("/test")}function O(W){g.lang=W.lang,g.difficulty=W.difficulty,g.smoothCaret=W.smoothCaret,localStorage.setItem("testSettings",JSON.stringify(W))}return{getTestLevel:S,setNewSettings:O,getRtl:w,getTestSettings:m,testSettings:g,getTestMode:D,setTestMode:F,setTestLevel:z,getIsOnMinWords:_}}),Eo=xa("theme",()=>{const s=kt(u()),r=He(()=>s.value);function u(){var m;const g=localStorage.getItem("AppTheme");return g?((m=document.querySelector("body"))==null||m.classList.add(g),g):(localStorage.setItem("AppTheme","light"),"light")}function h(g){s.value=g,localStorage.setItem("AppTheme",g)}return{appTheme:s,getAppTheme:r,setTheme:h,localTheme:u}}),fb="modulepreload",gb=function(s){return"/"+s},lu={},Fs=function(r,u,h){return!u||u.length===0?r():Promise.all(u.map(g=>{if(g=gb(g),g in lu)return;lu[g]=!0;const m=g.endsWith(".css"),w=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const D=document.createElement("link");if(D.rel=m?"stylesheet":fb,m||(D.as="script",D.crossOrigin=""),D.href=g,document.head.appendChild(D),m)return new Promise((S,_)=>{D.addEventListener("load",S),D.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${g}`)))})})).then(()=>r())},Co=Px({history:Wp("/"),routes:[{path:"/",name:"Home",component:()=>Fs(()=>import("./Home.4f4db6b5.js"),["assets/Home.4f4db6b5.js","assets/Home.23bab709.css"])},{path:"/test",name:"Test",component:()=>Fs(()=>import("./Test.3e7a1a12.js"),["assets/Test.3e7a1a12.js","assets/Test.5eeb4c66.css"])},{path:"/testResult",name:"test result",component:()=>Fs(()=>import("./TestResult.2f4a25a7.js"),["assets/TestResult.2f4a25a7.js","assets/TestResult.d1b06334.css"])},{path:"/profile",name:"profile",component:()=>Fs(()=>import("./Profile.8757f781.js"),["assets/Profile.8757f781.js","assets/Profile.958f0318.css"])},{path:"/settings",name:"settings",component:()=>Fs(()=>import("./Settings.43c38d58.js"),["assets/Settings.43c38d58.js","assets/Settings.7396486f.css"])}]}),pb={class:"header-contianer flex"},xb={class:"logo-and-nav flex"},mb={class:"nav flex"},bb={key:0,class:"username"},vb=pa(" Logout "),yb={key:0,class:"test-options flex"},wb={class:"time-or-number-option test-option flex"},Db={class:"numbers-options test-option flex"},Eb=["onClick"],Cb=pa(" Logout "),Ab=ui({__name:"Header",setup(s){const r=Ns(),u=wo(),h=Eo(),g=Do(),m=He(()=>h.getAppTheme),w=He(()=>u.getLoggedInUser),D=mh(),S=He(()=>r.getTestMode),_=He(()=>r.getTestLevel);function F(V){typeof V=="string"?r.setTestMode(V):r.setTestLevel(V)}function z(){u.logout(),document.location.reload()}const O=He(()=>window.innerWidth<550),W=He(()=>D.name==="profile"&&w.value);function $(V){V==="/test"&&g.setNewTest(),Co.push(V)}const K=He(()=>({hidden:D.name==="Home"})),se=He(()=>{var P,j;return((P=w.value)==null?void 0:P.username[0].toUpperCase())+((j=w.value)==null?void 0:j.username.split(" ").slice(0,1).join().slice(1))});return(V,P)=>(Ze(),st("header",{class:qt([Oe(K),"app-header"])},[Ne("div",pb,[Ne("nav",xb,[Oe(m)==="light"?(Ze(),Ti(Oe(qg),{key:0,onClick:P[0]||(P[0]=j=>$("/")),class:"logo"})):(Ze(),Ti(Oe(ep),{key:1,onClick:P[1]||(P[1]=j=>$("/")),class:"logo"})),Ne("div",mb,[Re(Oe(Ap),{onClick:P[2]||(P[2]=j=>$("/test")),class:"nav-svg keyboard"}),Re(Oe(up),{onClick:P[3]||(P[3]=j=>$("/leaderboard")),class:"nav-svg"}),Re(Oe(vp),{onClick:P[4]||(P[4]=j=>$("/settings")),class:"nav-svg"}),Ne("div",{onClick:P[5]||(P[5]=j=>$("/profile")),class:"user-nav-link flex align-center"},[Re(Oe(gp),{class:"nav-svg"}),Oe(w)?(Ze(),st("span",bb,ar(Oe(se)),1)):Bs("",!0)]),Oe(W)&&Oe(O)?(Ze(),st("button",{key:0,onClick:z,class:"logout-btn flex"},[vb,Re(Oe(Dl),{class:"logout-svg"})])):Bs("",!0)])]),(Oe(D).name==="Test"||Oe(D).name==="test result")&&!Oe(O)?(Ze(),st("div",yb,[Ne("div",wb,[Ne("h2",{class:qt(["txt-light",{"active-option":Oe(S)==="time"}]),onClick:P[6]||(P[6]=j=>F("time"))},"time",2),Ne("h2",{class:qt(["txt-light",{"active-option":Oe(S)==="words"}]),onClick:P[7]||(P[7]=j=>F("words"))},"words",2)]),Ne("div",Db,[(Ze(),st(at,null,tc(4,j=>Ne("h2",{key:j,onClick:Z=>F(j*15),class:qt(["txt-light",{"active-option":Oe(_)===j*15}])},ar(j*15),11,Eb)),64))])])):Bs("",!0),Oe(W)&&!Oe(O)?(Ze(),st("button",{key:1,onClick:z,class:"logout-btn flex"},[Cb,Re(Oe(Dl),{class:"logout-svg"})])):Bs("",!0)])],2))}});function kb(s,r){return Ze(),st("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Ne("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})])}function Sb(s,r){return Ze(),st("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[Ne("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})])}const Pb=["checked"],Tb={for:"switch"},Lb=ui({__name:"CustomToggleSwitch",setup(s){const r=Eo(),u=He(()=>r.getAppTheme);kt(document.querySelector("body"));function h(){const g=u.value==="dark"?"light":"dark";r.setTheme(g)}return Nu(()=>{var g,m,w,D;console.log(u.value),u.value=="dark"?((g=document.querySelector("body"))==null||g.classList.remove("dark"),(m=document.querySelector("body"))==null||m.classList.add("light")):((w=document.querySelector("body"))==null||w.classList.remove("light"),(D=document.querySelector("body"))==null||D.classList.add("dark"))}),(g,m)=>(Ze(),st(at,null,[Ne("input",{onChange:h,type:"checkbox",id:"switch",checked:Oe(u)==="dark"},null,40,Pb),Ne("label",Tb,[Oe(u)!=="dark"?(Ze(),Ti(Oe(kb),{key:0,class:"moon-svg"})):(Ze(),Ti(Oe(Sb),{key:1,class:"sun-svg"}))])],64))}});const Mb=(s,r)=>{const u=s.__vccOpts||s;for(const[h,g]of r)u[h]=g;return u},_b=Mb(Lb,[["__scopeId","data-v-6e1df817"]]),Ib=Ne("div",{class:"set-goal"},null,-1),Fb={class:"main-footer flex"},Rb={class:"footer-links flex"},Ob=Ne("h2",{class:"txt-light"},"Linkedin",-1),zb=[Ob],Bb=Ne("h2",{class:"txt-light"},"code",-1),Nb=ui({__name:"Footer",setup(s){const r=mh(),u=He(()=>({hidden:r.name==="Home"}));function h(){window.open("https://github.com/YoavDn/typester")}function g(){window.open("https://www.linkedin.com/in/yoav-mendelson/")}return(m,w)=>(Ze(),st("section",{class:qt(["botton",Oe(u)])},[Ib,Ne("footer",Fb,[Ne("div",Rb,[Ne("div",{onClick:g,class:"footer-link flex"},zb),Ne("div",{onClick:h,class:"footer-link flex align-center"},[Re(Oe(tp),{class:"code-svg"}),Bb])]),Re(_b)])],2))}});const Hb={class:"main-app"},Xb=ui({__name:"App",setup(s){const r=wo(),u=Eo();return r.setLoggedInUser(),u.localTheme(),(h,g)=>{const m=Ju("RouterView");return Ze(),st("main",Hb,[Re(Ab),Re(m,null,{default:ia(({Component:w})=>[Re(vn,{name:"fade",mode:"out-in"},{default:ia(()=>[(Ze(),Ti(ec(w)))]),_:2},1024)]),_:1}),Re(Nb)])}}});const zh=zg(),kn=Gc(Xb);console.log("production");zh.use(({store:s})=>{s.$router=Lt(Co)});kn.use(zh);kn.use(Co);kn.use(Vg);kn.mount("#app");export{Ti as A,ia as B,kf as C,qa as D,rf as E,at as F,of as G,Vg as V,Mb as _,st as a,Ne as b,He as c,ui as d,Oe as e,Lx as f,Re as g,Ns as h,Do as i,Is as j,ra as k,kt as l,ga as m,qt as n,Ze as o,fa as p,Bs as q,tc as r,ng as s,ar as t,Eo as u,li as v,Nu as w,Ju as x,pa as y,wo as z};
