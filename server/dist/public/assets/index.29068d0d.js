(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function c(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerpolicy&&(m.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?m.credentials="include":g.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(g){if(g.ep)return;g.ep=!0;const m=c(g);fetch(g.href,m)}})();function Za(s,n){const c=Object.create(null),u=s.split(",");for(let g=0;g<u.length;g++)c[u[g]]=!0;return n?g=>!!c[g.toLowerCase()]:g=>!!c[g]}const $u="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",qu=Za($u),Zu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ku=Za(Zu);function nc(s){return!!s||s===""}function sa(s){if(ke(s)){const n={};for(let c=0;c<s.length;c++){const u=s[c],g=et(u)?ed(u):sa(u);if(g)for(const m in g)n[m]=g[m]}return n}else{if(et(s))return s;if(it(s))return s}}const Ju=/;(?![^(]*\))/g,Qu=/:(.+)/;function ed(s){const n={};return s.split(Ju).forEach(c=>{if(c){const u=c.split(Qu);u.length>1&&(n[u[0].trim()]=u[1].trim())}}),n}function qt(s){let n="";if(et(s))n=s;else if(ke(s))for(let c=0;c<s.length;c++){const u=qt(s[c]);u&&(n+=u+" ")}else if(it(s))for(const c in s)s[c]&&(n+=c+" ");return n.trim()}function td(s){if(!s)return null;let{class:n,style:c}=s;return n&&!et(n)&&(s.class=qt(n)),c&&(s.style=sa(c)),s}function id(s,n){if(s.length!==n.length)return!1;let c=!0;for(let u=0;c&&u<s.length;u++)c=Ci(s[u],n[u]);return c}function Ci(s,n){if(s===n)return!0;let c=Mo(s),u=Mo(n);if(c||u)return c&&u?s.getTime()===n.getTime():!1;if(c=qs(s),u=qs(n),c||u)return s===n;if(c=ke(s),u=ke(n),c||u)return c&&u?id(s,n):!1;if(c=it(s),u=it(n),c||u){if(!c||!u)return!1;const g=Object.keys(s).length,m=Object.keys(n).length;if(g!==m)return!1;for(const w in s){const k=s.hasOwnProperty(w),P=n.hasOwnProperty(w);if(k&&!P||!k&&P||!Ci(s[w],n[w]))return!1}}return String(s)===String(n)}function Ka(s,n){return s.findIndex(c=>Ci(c,n))}const tn=s=>et(s)?s:s==null?"":ke(s)||it(s)&&(s.toString===lc||!_e(s.toString))?JSON.stringify(s,oc,2):String(s),oc=(s,n)=>n&&n.__v_isRef?oc(s,n.value):fs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((c,[u,g])=>(c[`${u} =>`]=g,c),{})}:Zi(n)?{[`Set(${n.size})`]:[...n.values()]}:it(n)&&!ke(n)&&!cc(n)?String(n):n,Be={},ds=[],Vt=()=>{},sd=()=>!1,ad=/^on[^a-z]/,aa=s=>ad.test(s),In=s=>s.startsWith("onUpdate:"),tt=Object.assign,Rn=(s,n)=>{const c=s.indexOf(n);c>-1&&s.splice(c,1)},rd=Object.prototype.hasOwnProperty,Ne=(s,n)=>rd.call(s,n),ke=Array.isArray,fs=s=>ra(s)==="[object Map]",Zi=s=>ra(s)==="[object Set]",Mo=s=>ra(s)==="[object Date]",_e=s=>typeof s=="function",et=s=>typeof s=="string",qs=s=>typeof s=="symbol",it=s=>s!==null&&typeof s=="object",On=s=>it(s)&&_e(s.then)&&_e(s.catch),lc=Object.prototype.toString,ra=s=>lc.call(s),nd=s=>ra(s).slice(8,-1),cc=s=>ra(s)==="[object Object]",Fn=s=>et(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,Ns=Za(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=s=>{const n=Object.create(null);return c=>n[c]||(n[c]=s(c))},od=/-(\w)/g,Ot=Ja(s=>s.replace(od,(n,c)=>c?c.toUpperCase():"")),ld=/\B([A-Z])/g,Zt=Ja(s=>s.replace(ld,"-$1").toLowerCase()),na=Ja(s=>s.charAt(0).toUpperCase()+s.slice(1)),Ds=Ja(s=>s?`on${na(s)}`:""),xs=(s,n)=>!Object.is(s,n),gs=(s,n)=>{for(let c=0;c<s.length;c++)s[c](n)},Na=(s,n,c)=>{Object.defineProperty(s,n,{configurable:!0,enumerable:!1,value:c})},Ei=s=>{const n=parseFloat(s);return isNaN(n)?s:n};let _o;const cd=()=>_o||(_o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tt;class zn{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&Tt&&(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}run(n){if(this.active){const c=Tt;try{return Tt=this,n()}finally{Tt=c}}}on(){Tt=this}off(){Tt=this.parent}stop(n){if(this.active){let c,u;for(c=0,u=this.effects.length;c<u;c++)this.effects[c].stop();for(c=0,u=this.cleanups.length;c<u;c++)this.cleanups[c]();if(this.scopes)for(c=0,u=this.scopes.length;c<u;c++)this.scopes[c].stop(!0);if(this.parent&&!n){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function Nn(s){return new zn(s)}function hc(s,n=Tt){n&&n.active&&n.effects.push(s)}function hd(){return Tt}function ud(s){Tt&&Tt.cleanups.push(s)}const Dn=s=>{const n=new Set(s);return n.w=0,n.n=0,n},uc=s=>(s.w&Pi)>0,dc=s=>(s.n&Pi)>0,dd=({deps:s})=>{if(s.length)for(let n=0;n<s.length;n++)s[n].w|=Pi},fd=s=>{const{deps:n}=s;if(n.length){let c=0;for(let u=0;u<n.length;u++){const g=n[u];uc(g)&&!dc(g)?g.delete(s):n[c++]=g,g.w&=~Pi,g.n&=~Pi}n.length=c}},sn=new WeakMap;let Os=0,Pi=1;const an=30;let Wt;const Vi=Symbol(""),rn=Symbol("");class oa{constructor(n,c=null,u){this.fn=n,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,hc(this,u)}run(){if(!this.active)return this.fn();let n=Wt,c=ki;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Wt,Wt=this,ki=!0,Pi=1<<++Os,Os<=an?dd(this):Io(this),this.fn()}finally{Os<=an&&fd(this),Pi=1<<--Os,Wt=this.parent,ki=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wt===this?this.deferStop=!0:this.active&&(Io(this),this.onStop&&this.onStop(),this.active=!1)}}function Io(s){const{deps:n}=s;if(n.length){for(let c=0;c<n.length;c++)n[c].delete(s);n.length=0}}function gd(s,n){s.effect&&(s=s.effect.fn);const c=new oa(s);n&&(tt(c,n),n.scope&&hc(c,n.scope)),(!n||!n.lazy)&&c.run();const u=c.run.bind(c);return u.effect=c,u}function pd(s){s.effect.stop()}let ki=!0;const fc=[];function Ki(){fc.push(ki),ki=!1}function Ji(){const s=fc.pop();ki=s===void 0?!0:s}function Ft(s,n,c){if(ki&&Wt){let u=sn.get(s);u||sn.set(s,u=new Map);let g=u.get(c);g||u.set(c,g=Dn()),gc(g)}}function gc(s,n){let c=!1;Os<=an?dc(s)||(s.n|=Pi,c=!uc(s)):c=!s.has(Wt),c&&(s.add(Wt),Wt.deps.push(s))}function oi(s,n,c,u,g,m){const w=sn.get(s);if(!w)return;let k=[];if(n==="clear")k=[...w.values()];else if(c==="length"&&ke(s))w.forEach((P,I)=>{(I==="length"||I>=u)&&k.push(P)});else switch(c!==void 0&&k.push(w.get(c)),n){case"add":ke(s)?Fn(c)&&k.push(w.get("length")):(k.push(w.get(Vi)),fs(s)&&k.push(w.get(rn)));break;case"delete":ke(s)||(k.push(w.get(Vi)),fs(s)&&k.push(w.get(rn)));break;case"set":fs(s)&&k.push(w.get(Vi));break}if(k.length===1)k[0]&&nn(k[0]);else{const P=[];for(const I of k)I&&P.push(...I);nn(Dn(P))}}function nn(s,n){const c=ke(s)?s:[...s];for(const u of c)u.computed&&Ro(u);for(const u of c)u.computed||Ro(u)}function Ro(s,n){(s!==Wt||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const xd=Za("__proto__,__v_isRef,__isVue"),pc=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(qs)),md=Qa(),bd=Qa(!1,!0),vd=Qa(!0),yd=Qa(!0,!0),Oo=wd();function wd(){const s={};return["includes","indexOf","lastIndexOf"].forEach(n=>{s[n]=function(...c){const u=Ie(this);for(let m=0,w=this.length;m<w;m++)Ft(u,"get",m+"");const g=u[n](...c);return g===-1||g===!1?u[n](...c.map(Ie)):g}}),["push","pop","shift","unshift","splice"].forEach(n=>{s[n]=function(...c){Ki();const u=Ie(this)[n].apply(this,c);return Ji(),u}}),s}function Qa(s=!1,n=!1){return function(u,g,m){if(g==="__v_isReactive")return!s;if(g==="__v_isReadonly")return s;if(g==="__v_isShallow")return n;if(g==="__v_raw"&&m===(s?n?kc:wc:n?yc:vc).get(u))return u;const w=ke(u);if(!s&&w&&Ne(Oo,g))return Reflect.get(Oo,g,m);const k=Reflect.get(u,g,m);return(qs(g)?pc.has(g):xd(g))||(s||Ft(u,"get",g),n)?k:Qe(k)?w&&Fn(g)?k:k.value:it(k)?s?Hn(k):Ii(k):k}}const kd=xc(),Ad=xc(!0);function xc(s=!1){return function(c,u,g,m){let w=c[u];if(ms(w)&&Qe(w)&&!Qe(g))return!1;if(!s&&!ms(g)&&(Da(g)||(g=Ie(g),w=Ie(w)),!ke(c)&&Qe(w)&&!Qe(g)))return w.value=g,!0;const k=ke(c)&&Fn(u)?Number(u)<c.length:Ne(c,u),P=Reflect.set(c,u,g,m);return c===Ie(m)&&(k?xs(g,w)&&oi(c,"set",u,g):oi(c,"add",u,g)),P}}function Sd(s,n){const c=Ne(s,n);s[n];const u=Reflect.deleteProperty(s,n);return u&&c&&oi(s,"delete",n,void 0),u}function Cd(s,n){const c=Reflect.has(s,n);return(!qs(n)||!pc.has(n))&&Ft(s,"has",n),c}function Ed(s){return Ft(s,"iterate",ke(s)?"length":Vi),Reflect.ownKeys(s)}const mc={get:md,set:kd,deleteProperty:Sd,has:Cd,ownKeys:Ed},bc={get:vd,set(s,n){return!0},deleteProperty(s,n){return!0}},Pd=tt({},mc,{get:bd,set:Ad}),Td=tt({},bc,{get:yd}),Xn=s=>s,er=s=>Reflect.getPrototypeOf(s);function xa(s,n,c=!1,u=!1){s=s.__v_raw;const g=Ie(s),m=Ie(n);c||(n!==m&&Ft(g,"get",n),Ft(g,"get",m));const{has:w}=er(g),k=u?Xn:c?Bn:Zs;if(w.call(g,n))return k(s.get(n));if(w.call(g,m))return k(s.get(m));s!==g&&s.get(n)}function ma(s,n=!1){const c=this.__v_raw,u=Ie(c),g=Ie(s);return n||(s!==g&&Ft(u,"has",s),Ft(u,"has",g)),s===g?c.has(s):c.has(s)||c.has(g)}function ba(s,n=!1){return s=s.__v_raw,!n&&Ft(Ie(s),"iterate",Vi),Reflect.get(s,"size",s)}function Fo(s){s=Ie(s);const n=Ie(this);return er(n).has.call(n,s)||(n.add(s),oi(n,"add",s,s)),this}function zo(s,n){n=Ie(n);const c=Ie(this),{has:u,get:g}=er(c);let m=u.call(c,s);m||(s=Ie(s),m=u.call(c,s));const w=g.call(c,s);return c.set(s,n),m?xs(n,w)&&oi(c,"set",s,n):oi(c,"add",s,n),this}function No(s){const n=Ie(this),{has:c,get:u}=er(n);let g=c.call(n,s);g||(s=Ie(s),g=c.call(n,s)),u&&u.call(n,s);const m=n.delete(s);return g&&oi(n,"delete",s,void 0),m}function Do(){const s=Ie(this),n=s.size!==0,c=s.clear();return n&&oi(s,"clear",void 0,void 0),c}function va(s,n){return function(u,g){const m=this,w=m.__v_raw,k=Ie(w),P=n?Xn:s?Bn:Zs;return!s&&Ft(k,"iterate",Vi),w.forEach((I,O)=>u.call(g,P(I),P(O),m))}}function ya(s,n,c){return function(...u){const g=this.__v_raw,m=Ie(g),w=fs(m),k=s==="entries"||s===Symbol.iterator&&w,P=s==="keys"&&w,I=g[s](...u),O=c?Xn:n?Bn:Zs;return!n&&Ft(m,"iterate",P?rn:Vi),{next(){const{value:N,done:z}=I.next();return z?{value:N,done:z}:{value:k?[O(N[0]),O(N[1])]:O(N),done:z}},[Symbol.iterator](){return this}}}}function di(s){return function(...n){return s==="delete"?!1:this}}function Ld(){const s={get(m){return xa(this,m)},get size(){return ba(this)},has:ma,add:Fo,set:zo,delete:No,clear:Do,forEach:va(!1,!1)},n={get(m){return xa(this,m,!1,!0)},get size(){return ba(this)},has:ma,add:Fo,set:zo,delete:No,clear:Do,forEach:va(!1,!0)},c={get(m){return xa(this,m,!0)},get size(){return ba(this,!0)},has(m){return ma.call(this,m,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:va(!0,!1)},u={get(m){return xa(this,m,!0,!0)},get size(){return ba(this,!0)},has(m){return ma.call(this,m,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:va(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{s[m]=ya(m,!1,!1),c[m]=ya(m,!0,!1),n[m]=ya(m,!1,!0),u[m]=ya(m,!0,!0)}),[s,c,n,u]}const[Md,_d,Id,Rd]=Ld();function tr(s,n){const c=n?s?Rd:Id:s?_d:Md;return(u,g,m)=>g==="__v_isReactive"?!s:g==="__v_isReadonly"?s:g==="__v_raw"?u:Reflect.get(Ne(c,g)&&g in u?c:u,g,m)}const Od={get:tr(!1,!1)},Fd={get:tr(!1,!0)},zd={get:tr(!0,!1)},Nd={get:tr(!0,!0)},vc=new WeakMap,yc=new WeakMap,wc=new WeakMap,kc=new WeakMap;function Dd(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xd(s){return s.__v_skip||!Object.isExtensible(s)?0:Dd(nd(s))}function Ii(s){return ms(s)?s:ir(s,!1,mc,Od,vc)}function Ac(s){return ir(s,!1,Pd,Fd,yc)}function Hn(s){return ir(s,!0,bc,zd,wc)}function Hd(s){return ir(s,!0,Td,Nd,kc)}function ir(s,n,c,u,g){if(!it(s)||s.__v_raw&&!(n&&s.__v_isReactive))return s;const m=g.get(s);if(m)return m;const w=Xd(s);if(w===0)return s;const k=new Proxy(s,w===2?u:c);return g.set(s,k),k}function Kt(s){return ms(s)?Kt(s.__v_raw):!!(s&&s.__v_isReactive)}function ms(s){return!!(s&&s.__v_isReadonly)}function Da(s){return!!(s&&s.__v_isShallow)}function Yn(s){return Kt(s)||ms(s)}function Ie(s){const n=s&&s.__v_raw;return n?Ie(n):s}function Lt(s){return Na(s,"__v_skip",!0),s}const Zs=s=>it(s)?Ii(s):s,Bn=s=>it(s)?Hn(s):s;function Wn(s){ki&&Wt&&(s=Ie(s),gc(s.dep||(s.dep=Dn())))}function sr(s,n){s=Ie(s),s.dep&&nn(s.dep)}function Qe(s){return!!(s&&s.__v_isRef===!0)}function Ct(s){return Cc(s,!1)}function Sc(s){return Cc(s,!0)}function Cc(s,n){return Qe(s)?s:new Yd(s,n)}class Yd{constructor(n,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?n:Ie(n),this._value=c?n:Zs(n)}get value(){return Wn(this),this._value}set value(n){n=this.__v_isShallow?n:Ie(n),xs(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Zs(n),sr(this))}}function Bd(s){sr(s)}function Ue(s){return Qe(s)?s.value:s}const Wd={get:(s,n,c)=>Ue(Reflect.get(s,n,c)),set:(s,n,c,u)=>{const g=s[n];return Qe(g)&&!Qe(c)?(g.value=c,!0):Reflect.set(s,n,c,u)}};function Vn(s){return Kt(s)?s:new Proxy(s,Wd)}class Vd{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:c,set:u}=n(()=>Wn(this),()=>sr(this));this._get=c,this._set=u}get value(){return this._get()}set value(n){this._set(n)}}function jd(s){return new Vd(s)}function on(s){const n=ke(s)?new Array(s.length):{};for(const c in s)n[c]=Xs(s,c);return n}class Gd{constructor(n,c,u){this._object=n,this._key=c,this._defaultValue=u,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Xs(s,n,c){const u=s[n];return Qe(u)?u:new Gd(s,n,c)}class Ud{constructor(n,c,u,g){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new oa(n,()=>{this._dirty||(this._dirty=!0,sr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=u}get value(){const n=Ie(this);return Wn(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function $d(s,n,c=!1){let u,g;const m=_e(s);return m?(u=s,g=Vt):(u=s.get,g=s.set),new Ud(u,g,m||!g,c)}const Hs=[];function Ec(s,...n){Ki();const c=Hs.length?Hs[Hs.length-1].component:null,u=c&&c.appContext.config.warnHandler,g=qd();if(u)Jt(u,c,11,[s+n.join(""),c&&c.proxy,g.map(({vnode:m})=>`at <${kh(c,m.type)}>`).join(`
`),g]);else{const m=[`[Vue warn]: ${s}`,...n];g.length&&m.push(`
`,...Zd(g)),console.warn(...m)}Ji()}function qd(){let s=Hs[Hs.length-1];if(!s)return[];const n=[];for(;s;){const c=n[0];c&&c.vnode===s?c.recurseCount++:n.push({vnode:s,recurseCount:0});const u=s.component&&s.component.parent;s=u&&u.vnode}return n}function Zd(s){const n=[];return s.forEach((c,u)=>{n.push(...u===0?[]:[`
`],...Kd(c))}),n}function Kd({vnode:s,recurseCount:n}){const c=n>0?`... (${n} recursive calls)`:"",u=s.component?s.component.parent==null:!1,g=` at <${kh(s.component,s.type,u)}`,m=">"+c;return s.props?[g,...Jd(s.props),m]:[g+m]}function Jd(s){const n=[],c=Object.keys(s);return c.slice(0,3).forEach(u=>{n.push(...Pc(u,s[u]))}),c.length>3&&n.push(" ..."),n}function Pc(s,n,c){return et(n)?(n=JSON.stringify(n),c?n:[`${s}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?c?n:[`${s}=${n}`]:Qe(n)?(n=Pc(s,Ie(n.value),!0),c?n:[`${s}=Ref<`,n,">"]):_e(n)?[`${s}=fn${n.name?`<${n.name}>`:""}`]:(n=Ie(n),c?n:[`${s}=`,n])}function Jt(s,n,c,u){let g;try{g=u?s(...u):s()}catch(m){Qi(m,n,c)}return g}function It(s,n,c,u){if(_e(s)){const m=Jt(s,n,c,u);return m&&On(m)&&m.catch(w=>{Qi(w,n,c)}),m}const g=[];for(let m=0;m<s.length;m++)g.push(It(s[m],n,c,u));return g}function Qi(s,n,c,u=!0){const g=n?n.vnode:null;if(n){let m=n.parent;const w=n.proxy,k=c;for(;m;){const I=m.ec;if(I){for(let O=0;O<I.length;O++)if(I[O](s,w,k)===!1)return}m=m.parent}const P=n.appContext.config.errorHandler;if(P){Jt(P,null,10,[s,w,k]);return}}Qd(s,c,g,u)}function Qd(s,n,c,u=!0){console.error(s)}let Xa=!1,ln=!1;const _t=[];let ri=0;const Ys=[];let Fs=null,ns=0;const Bs=[];let xi=null,os=0;const Tc=Promise.resolve();let jn=null,cn=null;function bs(s){const n=jn||Tc;return s?n.then(this?s.bind(this):s):n}function ef(s){let n=ri+1,c=_t.length;for(;n<c;){const u=n+c>>>1;Ks(_t[u])<s?n=u+1:c=u}return n}function Gn(s){(!_t.length||!_t.includes(s,Xa&&s.allowRecurse?ri+1:ri))&&s!==cn&&(s.id==null?_t.push(s):_t.splice(ef(s.id),0,s),Lc())}function Lc(){!Xa&&!ln&&(ln=!0,jn=Tc.then(_c))}function tf(s){const n=_t.indexOf(s);n>ri&&_t.splice(n,1)}function Mc(s,n,c,u){ke(s)?c.push(...s):(!n||!n.includes(s,s.allowRecurse?u+1:u))&&c.push(s),Lc()}function sf(s){Mc(s,Fs,Ys,ns)}function Un(s){Mc(s,xi,Bs,os)}function ar(s,n=null){if(Ys.length){for(cn=n,Fs=[...new Set(Ys)],Ys.length=0,ns=0;ns<Fs.length;ns++)Fs[ns]();Fs=null,ns=0,cn=null,ar(s,n)}}function Ha(s){if(ar(),Bs.length){const n=[...new Set(Bs)];if(Bs.length=0,xi){xi.push(...n);return}for(xi=n,xi.sort((c,u)=>Ks(c)-Ks(u)),os=0;os<xi.length;os++)xi[os]();xi=null,os=0}}const Ks=s=>s.id==null?1/0:s.id;function _c(s){ln=!1,Xa=!0,ar(s),_t.sort((c,u)=>Ks(c)-Ks(u));const n=Vt;try{for(ri=0;ri<_t.length;ri++){const c=_t[ri];c&&c.active!==!1&&Jt(c,null,14)}}finally{ri=0,_t.length=0,Ha(),Xa=!1,jn=null,(_t.length||Ys.length||Bs.length)&&_c(s)}}let ls,wa=[];function Ic(s,n){var c,u;ls=s,ls?(ls.enabled=!0,wa.forEach(({event:g,args:m})=>ls.emit(g,...m)),wa=[]):typeof window<"u"&&window.HTMLElement&&!(!((u=(c=window.navigator)===null||c===void 0?void 0:c.userAgent)===null||u===void 0)&&u.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{Ic(m,n)}),setTimeout(()=>{ls||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wa=[])},3e3)):wa=[]}function af(s,n,...c){if(s.isUnmounted)return;const u=s.vnode.props||Be;let g=c;const m=n.startsWith("update:"),w=m&&n.slice(7);if(w&&w in u){const O=`${w==="modelValue"?"model":w}Modifiers`,{number:N,trim:z}=u[O]||Be;z&&(g=c.map(W=>W.trim())),N&&(g=c.map(Ei))}let k,P=u[k=Ds(n)]||u[k=Ds(Ot(n))];!P&&m&&(P=u[k=Ds(Zt(n))]),P&&It(P,s,6,g);const I=u[k+"Once"];if(I){if(!s.emitted)s.emitted={};else if(s.emitted[k])return;s.emitted[k]=!0,It(I,s,6,g)}}function Rc(s,n,c=!1){const u=n.emitsCache,g=u.get(s);if(g!==void 0)return g;const m=s.emits;let w={},k=!1;if(!_e(s)){const P=I=>{const O=Rc(I,n,!0);O&&(k=!0,tt(w,O))};!c&&n.mixins.length&&n.mixins.forEach(P),s.extends&&P(s.extends),s.mixins&&s.mixins.forEach(P)}return!m&&!k?(u.set(s,null),null):(ke(m)?m.forEach(P=>w[P]=null):tt(w,m),u.set(s,w),w)}function rr(s,n){return!s||!aa(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ne(s,n[0].toLowerCase()+n.slice(1))||Ne(s,Zt(n))||Ne(s,n))}let xt=null,nr=null;function Js(s){const n=xt;return xt=s,nr=s&&s.type.__scopeId||null,n}function rf(s){nr=s}function nf(){nr=null}const of=s=>Qs;function Qs(s,n=xt,c){if(!n||s._n)return s;const u=(...g)=>{u._d&&xn(-1);const m=Js(n),w=s(...g);return Js(m),u._d&&xn(1),w};return u._n=!0,u._c=!0,u._d=!0,u}function Ma(s){const{type:n,vnode:c,proxy:u,withProxy:g,props:m,propsOptions:[w],slots:k,attrs:P,emit:I,render:O,renderCache:N,data:z,setupState:W,ctx:q,inheritAttrs:K}=s;let ee,V;const T=Js(s);try{if(c.shapeFlag&4){const Z=g||u;ee=Mt(O.call(Z,Z,N,m,W,z,q)),V=P}else{const Z=n;ee=Mt(Z.length>1?Z(m,{attrs:P,slots:k,emit:I}):Z(m,null)),V=n.props?P:cf(P)}}catch(Z){js.length=0,Qi(Z,s,1),ee=Fe(mt)}let j=ee;if(V&&K!==!1){const Z=Object.keys(V),{shapeFlag:H}=j;Z.length&&H&7&&(w&&Z.some(In)&&(V=hf(V,w)),j=ei(j,V))}return c.dirs&&(j=ei(j),j.dirs=j.dirs?j.dirs.concat(c.dirs):c.dirs),c.transition&&(j.transition=c.transition),ee=j,Js(T),ee}function lf(s){let n;for(let c=0;c<s.length;c++){const u=s[c];if(Li(u)){if(u.type!==mt||u.children==="v-if"){if(n)return;n=u}}else return}return n}const cf=s=>{let n;for(const c in s)(c==="class"||c==="style"||aa(c))&&((n||(n={}))[c]=s[c]);return n},hf=(s,n)=>{const c={};for(const u in s)(!In(u)||!(u.slice(9)in n))&&(c[u]=s[u]);return c};function uf(s,n,c){const{props:u,children:g,component:m}=s,{props:w,children:k,patchFlag:P}=n,I=m.emitsOptions;if(n.dirs||n.transition)return!0;if(c&&P>=0){if(P&1024)return!0;if(P&16)return u?Xo(u,w,I):!!w;if(P&8){const O=n.dynamicProps;for(let N=0;N<O.length;N++){const z=O[N];if(w[z]!==u[z]&&!rr(I,z))return!0}}}else return(g||k)&&(!k||!k.$stable)?!0:u===w?!1:u?w?Xo(u,w,I):!0:!!w;return!1}function Xo(s,n,c){const u=Object.keys(n);if(u.length!==Object.keys(s).length)return!0;for(let g=0;g<u.length;g++){const m=u[g];if(n[m]!==s[m]&&!rr(c,m))return!0}return!1}function $n({vnode:s,parent:n},c){for(;n&&n.subTree===s;)(s=n.vnode).el=c,n=n.parent}const Oc=s=>s.__isSuspense,df={name:"Suspense",__isSuspense:!0,process(s,n,c,u,g,m,w,k,P,I){s==null?gf(n,c,u,g,m,w,k,P,I):pf(s,n,c,u,g,w,k,P,I)},hydrate:xf,create:qn,normalize:mf},ff=df;function ea(s,n){const c=s.props&&s.props[n];_e(c)&&c()}function gf(s,n,c,u,g,m,w,k,P){const{p:I,o:{createElement:O}}=P,N=O("div"),z=s.suspense=qn(s,g,u,n,N,c,m,w,k,P);I(null,z.pendingBranch=s.ssContent,N,null,u,z,m,w),z.deps>0?(ea(s,"onPending"),ea(s,"onFallback"),I(null,s.ssFallback,n,c,u,null,m,w),ps(z,s.ssFallback)):z.resolve()}function pf(s,n,c,u,g,m,w,k,{p:P,um:I,o:{createElement:O}}){const N=n.suspense=s.suspense;N.vnode=n,n.el=s.el;const z=n.ssContent,W=n.ssFallback,{activeBranch:q,pendingBranch:K,isInFallback:ee,isHydrating:V}=N;if(K)N.pendingBranch=z,$t(z,K)?(P(K,z,N.hiddenContainer,null,g,N,m,w,k),N.deps<=0?N.resolve():ee&&(P(q,W,c,u,g,null,m,w,k),ps(N,W))):(N.pendingId++,V?(N.isHydrating=!1,N.activeBranch=K):I(K,g,N),N.deps=0,N.effects.length=0,N.hiddenContainer=O("div"),ee?(P(null,z,N.hiddenContainer,null,g,N,m,w,k),N.deps<=0?N.resolve():(P(q,W,c,u,g,null,m,w,k),ps(N,W))):q&&$t(z,q)?(P(q,z,c,u,g,N,m,w,k),N.resolve(!0)):(P(null,z,N.hiddenContainer,null,g,N,m,w,k),N.deps<=0&&N.resolve()));else if(q&&$t(z,q))P(q,z,c,u,g,N,m,w,k),ps(N,z);else if(ea(n,"onPending"),N.pendingBranch=z,N.pendingId++,P(null,z,N.hiddenContainer,null,g,N,m,w,k),N.deps<=0)N.resolve();else{const{timeout:T,pendingId:j}=N;T>0?setTimeout(()=>{N.pendingId===j&&N.fallback(W)},T):T===0&&N.fallback(W)}}function qn(s,n,c,u,g,m,w,k,P,I,O=!1){const{p:N,m:z,um:W,n:q,o:{parentNode:K,remove:ee}}=I,V=Ei(s.props&&s.props.timeout),T={vnode:s,parent:n,parentComponent:c,isSVG:w,container:u,hiddenContainer:g,anchor:m,deps:0,pendingId:0,timeout:typeof V=="number"?V:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:O,isUnmounted:!1,effects:[],resolve(j=!1){const{vnode:Z,activeBranch:H,pendingBranch:ce,pendingId:J,effects:ie,parentComponent:ne,container:Q}=T;if(T.isHydrating)T.isHydrating=!1;else if(!j){const ye=H&&ce.transition&&ce.transition.mode==="out-in";ye&&(H.transition.afterLeave=()=>{J===T.pendingId&&z(ce,Q,ge,0)});let{anchor:ge}=T;H&&(ge=q(H),W(H,ne,T,!0)),ye||z(ce,Q,ge,0)}ps(T,ce),T.pendingBranch=null,T.isInFallback=!1;let le=T.parent,se=!1;for(;le;){if(le.pendingBranch){le.effects.push(...ie),se=!0;break}le=le.parent}se||Un(ie),T.effects=[],ea(Z,"onResolve")},fallback(j){if(!T.pendingBranch)return;const{vnode:Z,activeBranch:H,parentComponent:ce,container:J,isSVG:ie}=T;ea(Z,"onFallback");const ne=q(H),Q=()=>{!T.isInFallback||(N(null,j,J,ne,ce,null,ie,k,P),ps(T,j))},le=j.transition&&j.transition.mode==="out-in";le&&(H.transition.afterLeave=Q),T.isInFallback=!0,W(H,ce,null,!0),le||Q()},move(j,Z,H){T.activeBranch&&z(T.activeBranch,j,Z,H),T.container=j},next(){return T.activeBranch&&q(T.activeBranch)},registerDep(j,Z){const H=!!T.pendingBranch;H&&T.deps++;const ce=j.vnode.el;j.asyncDep.catch(J=>{Qi(J,j,0)}).then(J=>{if(j.isUnmounted||T.isUnmounted||T.pendingId!==j.suspenseId)return;j.asyncResolved=!0;const{vnode:ie}=j;mn(j,J,!1),ce&&(ie.el=ce);const ne=!ce&&j.subTree.el;Z(j,ie,K(ce||j.subTree.el),ce?null:q(j.subTree),T,w,P),ne&&ee(ne),$n(j,ie.el),H&&--T.deps===0&&T.resolve()})},unmount(j,Z){T.isUnmounted=!0,T.activeBranch&&W(T.activeBranch,c,j,Z),T.pendingBranch&&W(T.pendingBranch,c,j,Z)}};return T}function xf(s,n,c,u,g,m,w,k,P){const I=n.suspense=qn(n,u,c,s.parentNode,document.createElement("div"),null,g,m,w,k,!0),O=P(s,I.pendingBranch=n.ssContent,c,I,m,w);return I.deps===0&&I.resolve(),O}function mf(s){const{shapeFlag:n,children:c}=s,u=n&32;s.ssContent=Ho(u?c.default:c),s.ssFallback=u?Ho(c.fallback):Fe(mt)}function Ho(s){let n;if(_e(s)){const c=$i&&s._c;c&&(s._d=!1,Ke()),s=s(),c&&(s._d=!0,n=St,uh())}return ke(s)&&(s=lf(s)),s=Mt(s),n&&!s.dynamicChildren&&(s.dynamicChildren=n.filter(c=>c!==s)),s}function Fc(s,n){n&&n.pendingBranch?ke(s)?n.effects.push(...s):n.effects.push(s):Un(s)}function ps(s,n){s.activeBranch=n;const{vnode:c,parentComponent:u}=s,g=c.el=n.el;u&&u.subTree===c&&(u.vnode.el=g,$n(u,g))}function Ws(s,n){if(rt){let c=rt.provides;const u=rt.parent&&rt.parent.provides;u===c&&(c=rt.provides=Object.create(u)),c[s]=n}}function Rt(s,n,c=!1){const u=rt||xt;if(u){const g=u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides;if(g&&s in g)return g[s];if(arguments.length>1)return c&&_e(n)?n.call(u.proxy):n}}function zc(s,n){return la(s,null,n)}function Nc(s,n){return la(s,null,{flush:"post"})}function bf(s,n){return la(s,null,{flush:"sync"})}const Yo={};function Ai(s,n,c){return la(s,n,c)}function la(s,n,{immediate:c,deep:u,flush:g,onTrack:m,onTrigger:w}=Be){const k=rt;let P,I=!1,O=!1;if(Qe(s)?(P=()=>s.value,I=Da(s)):Kt(s)?(P=()=>s,u=!0):ke(s)?(O=!0,I=s.some(V=>Kt(V)||Da(V)),P=()=>s.map(V=>{if(Qe(V))return V.value;if(Kt(V))return Wi(V);if(_e(V))return Jt(V,k,2)})):_e(s)?n?P=()=>Jt(s,k,2):P=()=>{if(!(k&&k.isUnmounted))return N&&N(),It(s,k,3,[z])}:P=Vt,n&&u){const V=P;P=()=>Wi(V())}let N,z=V=>{N=ee.onStop=()=>{Jt(V,k,4)}};if(ws)return z=Vt,n?c&&It(n,k,3,[P(),O?[]:void 0,z]):P(),Vt;let W=O?[]:Yo;const q=()=>{if(!!ee.active)if(n){const V=ee.run();(u||I||(O?V.some((T,j)=>xs(T,W[j])):xs(V,W)))&&(N&&N(),It(n,k,3,[V,W===Yo?void 0:W,z]),W=V)}else ee.run()};q.allowRecurse=!!n;let K;g==="sync"?K=q:g==="post"?K=()=>ut(q,k&&k.suspense):K=()=>sf(q);const ee=new oa(P,K);return n?c?q():W=ee.run():g==="post"?ut(ee.run.bind(ee),k&&k.suspense):ee.run(),()=>{ee.stop(),k&&k.scope&&Rn(k.scope.effects,ee)}}function vf(s,n,c){const u=this.proxy,g=et(s)?s.includes(".")?Dc(u,s):()=>u[s]:s.bind(u,u);let m;_e(n)?m=n:(m=n.handler,c=n);const w=rt;Mi(this);const k=la(g,m.bind(u),c);return w?Mi(w):Si(),k}function Dc(s,n){const c=n.split(".");return()=>{let u=s;for(let g=0;g<c.length&&u;g++)u=u[c[g]];return u}}function Wi(s,n){if(!it(s)||s.__v_skip||(n=n||new Set,n.has(s)))return s;if(n.add(s),Qe(s))Wi(s.value,n);else if(ke(s))for(let c=0;c<s.length;c++)Wi(s[c],n);else if(Zi(s)||fs(s))s.forEach(c=>{Wi(c,n)});else if(cc(s))for(const c in s)Wi(s[c],n);return s}function Zn(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ha(()=>{s.isMounted=!0}),hr(()=>{s.isUnmounting=!0}),s}const Nt=[Function,Array],yf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(s,{slots:n}){const c=ti(),u=Zn();let g;return()=>{const m=n.default&&or(n.default(),!0);if(!m||!m.length)return;let w=m[0];if(m.length>1){for(const K of m)if(K.type!==mt){w=K;break}}const k=Ie(s),{mode:P}=k;if(u.isLeaving)return Mr(w);const I=Bo(w);if(!I)return Mr(w);const O=vs(I,k,u,c);Ui(I,O);const N=c.subTree,z=N&&Bo(N);let W=!1;const{getTransitionKey:q}=I.type;if(q){const K=q();g===void 0?g=K:K!==g&&(g=K,W=!0)}if(z&&z.type!==mt&&(!$t(I,z)||W)){const K=vs(z,k,u,c);if(Ui(z,K),P==="out-in")return u.isLeaving=!0,K.afterLeave=()=>{u.isLeaving=!1,c.update()},Mr(w);P==="in-out"&&I.type!==mt&&(K.delayLeave=(ee,V,T)=>{const j=Xc(u,z);j[String(z.key)]=z,ee._leaveCb=()=>{V(),ee._leaveCb=void 0,delete O.delayedLeave},O.delayedLeave=T})}return w}}},Kn=yf;function Xc(s,n){const{leavingVNodes:c}=s;let u=c.get(n.type);return u||(u=Object.create(null),c.set(n.type,u)),u}function vs(s,n,c,u){const{appear:g,mode:m,persisted:w=!1,onBeforeEnter:k,onEnter:P,onAfterEnter:I,onEnterCancelled:O,onBeforeLeave:N,onLeave:z,onAfterLeave:W,onLeaveCancelled:q,onBeforeAppear:K,onAppear:ee,onAfterAppear:V,onAppearCancelled:T}=n,j=String(s.key),Z=Xc(c,s),H=(ie,ne)=>{ie&&It(ie,u,9,ne)},ce=(ie,ne)=>{const Q=ne[1];H(ie,ne),ke(ie)?ie.every(le=>le.length<=1)&&Q():ie.length<=1&&Q()},J={mode:m,persisted:w,beforeEnter(ie){let ne=k;if(!c.isMounted)if(g)ne=K||k;else return;ie._leaveCb&&ie._leaveCb(!0);const Q=Z[j];Q&&$t(s,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),H(ne,[ie])},enter(ie){let ne=P,Q=I,le=O;if(!c.isMounted)if(g)ne=ee||P,Q=V||I,le=T||O;else return;let se=!1;const ye=ie._enterCb=ge=>{se||(se=!0,ge?H(le,[ie]):H(Q,[ie]),J.delayedLeave&&J.delayedLeave(),ie._enterCb=void 0)};ne?ce(ne,[ie,ye]):ye()},leave(ie,ne){const Q=String(s.key);if(ie._enterCb&&ie._enterCb(!0),c.isUnmounting)return ne();H(N,[ie]);let le=!1;const se=ie._leaveCb=ye=>{le||(le=!0,ne(),ye?H(q,[ie]):H(W,[ie]),ie._leaveCb=void 0,Z[Q]===s&&delete Z[Q])};Z[Q]=s,z?ce(z,[ie,se]):se()},clone(ie){return vs(ie,n,c,u)}};return J}function Mr(s){if(ca(s))return s=ei(s),s.children=null,s}function Bo(s){return ca(s)?s.children?s.children[0]:void 0:s}function Ui(s,n){s.shapeFlag&6&&s.component?Ui(s.component.subTree,n):s.shapeFlag&128?(s.ssContent.transition=n.clone(s.ssContent),s.ssFallback.transition=n.clone(s.ssFallback)):s.transition=n}function or(s,n=!1,c){let u=[],g=0;for(let m=0;m<s.length;m++){let w=s[m];const k=c==null?w.key:String(c)+String(w.key!=null?w.key:m);w.type===st?(w.patchFlag&128&&g++,u=u.concat(or(w.children,n,k))):(n||w.type!==mt)&&u.push(k!=null?ei(w,{key:k}):w)}if(g>1)for(let m=0;m<u.length;m++)u[m].patchFlag=-2;return u}function li(s){return _e(s)?{setup:s,name:s.name}:s}const ji=s=>!!s.type.__asyncLoader;function wf(s){_e(s)&&(s={loader:s});const{loader:n,loadingComponent:c,errorComponent:u,delay:g=200,timeout:m,suspensible:w=!0,onError:k}=s;let P=null,I,O=0;const N=()=>(O++,P=null,z()),z=()=>{let W;return P||(W=P=n().catch(q=>{if(q=q instanceof Error?q:new Error(String(q)),k)return new Promise((K,ee)=>{k(q,()=>K(N()),()=>ee(q),O+1)});throw q}).then(q=>W!==P&&P?P:(q&&(q.__esModule||q[Symbol.toStringTag]==="Module")&&(q=q.default),I=q,q)))};return li({name:"AsyncComponentWrapper",__asyncLoader:z,get __asyncResolved(){return I},setup(){const W=rt;if(I)return()=>_r(I,W);const q=T=>{P=null,Qi(T,W,13,!u)};if(w&&W.suspense||ws)return z().then(T=>()=>_r(T,W)).catch(T=>(q(T),()=>u?Fe(u,{error:T}):null));const K=Ct(!1),ee=Ct(),V=Ct(!!g);return g&&setTimeout(()=>{V.value=!1},g),m!=null&&setTimeout(()=>{if(!K.value&&!ee.value){const T=new Error(`Async component timed out after ${m}ms.`);q(T),ee.value=T}},m),z().then(()=>{K.value=!0,W.parent&&ca(W.parent.vnode)&&Gn(W.parent.update)}).catch(T=>{q(T),ee.value=T}),()=>{if(K.value&&I)return _r(I,W);if(ee.value&&u)return Fe(u,{error:ee.value});if(c&&!V.value)return Fe(c)}}})}function _r(s,{vnode:{ref:n,props:c,children:u,shapeFlag:g},parent:m}){const w=Fe(s,c,u);return w.ref=n,w}const ca=s=>s.type.__isKeepAlive,kf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:n}){const c=ti(),u=c.ctx;if(!u.renderer)return()=>{const T=n.default&&n.default();return T&&T.length===1?T[0]:T};const g=new Map,m=new Set;let w=null;const k=c.suspense,{renderer:{p:P,m:I,um:O,o:{createElement:N}}}=u,z=N("div");u.activate=(T,j,Z,H,ce)=>{const J=T.component;I(T,j,Z,0,k),P(J.vnode,T,j,Z,J,k,H,T.slotScopeIds,ce),ut(()=>{J.isDeactivated=!1,J.a&&gs(J.a);const ie=T.props&&T.props.onVnodeMounted;ie&&At(ie,J.parent,T)},k)},u.deactivate=T=>{const j=T.component;I(T,z,null,1,k),ut(()=>{j.da&&gs(j.da);const Z=T.props&&T.props.onVnodeUnmounted;Z&&At(Z,j.parent,T),j.isDeactivated=!0},k)};function W(T){Ir(T),O(T,c,k,!0)}function q(T){g.forEach((j,Z)=>{const H=ja(j.type);H&&(!T||!T(H))&&K(Z)})}function K(T){const j=g.get(T);!w||j.type!==w.type?W(j):w&&Ir(w),g.delete(T),m.delete(T)}Ai(()=>[s.include,s.exclude],([T,j])=>{T&&q(Z=>zs(T,Z)),j&&q(Z=>!zs(j,Z))},{flush:"post",deep:!0});let ee=null;const V=()=>{ee!=null&&g.set(ee,Rr(c.subTree))};return ha(V),cr(V),hr(()=>{g.forEach(T=>{const{subTree:j,suspense:Z}=c,H=Rr(j);if(T.type===H.type){Ir(H);const ce=H.component.da;ce&&ut(ce,Z);return}W(T)})}),()=>{if(ee=null,!n.default)return null;const T=n.default(),j=T[0];if(T.length>1)return w=null,T;if(!Li(j)||!(j.shapeFlag&4)&&!(j.shapeFlag&128))return w=null,j;let Z=Rr(j);const H=Z.type,ce=ja(ji(Z)?Z.type.__asyncResolved||{}:H),{include:J,exclude:ie,max:ne}=s;if(J&&(!ce||!zs(J,ce))||ie&&ce&&zs(ie,ce))return w=Z,j;const Q=Z.key==null?H:Z.key,le=g.get(Q);return Z.el&&(Z=ei(Z),j.shapeFlag&128&&(j.ssContent=Z)),ee=Q,le?(Z.el=le.el,Z.component=le.component,Z.transition&&Ui(Z,Z.transition),Z.shapeFlag|=512,m.delete(Q),m.add(Q)):(m.add(Q),ne&&m.size>parseInt(ne,10)&&K(m.values().next().value)),Z.shapeFlag|=256,w=Z,Oc(j.type)?j:Z}}},Af=kf;function zs(s,n){return ke(s)?s.some(c=>zs(c,n)):et(s)?s.split(",").includes(n):s.test?s.test(n):!1}function Hc(s,n){Bc(s,"a",n)}function Yc(s,n){Bc(s,"da",n)}function Bc(s,n,c=rt){const u=s.__wdc||(s.__wdc=()=>{let g=c;for(;g;){if(g.isDeactivated)return;g=g.parent}return s()});if(lr(n,u,c),c){let g=c.parent;for(;g&&g.parent;)ca(g.parent.vnode)&&Sf(u,n,c,g),g=g.parent}}function Sf(s,n,c,u){const g=lr(n,s,u,!0);ua(()=>{Rn(u[n],g)},c)}function Ir(s){let n=s.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),s.shapeFlag=n}function Rr(s){return s.shapeFlag&128?s.ssContent:s}function lr(s,n,c=rt,u=!1){if(c){const g=c[s]||(c[s]=[]),m=n.__weh||(n.__weh=(...w)=>{if(c.isUnmounted)return;Ki(),Mi(c);const k=It(n,c,s,w);return Si(),Ji(),k});return u?g.unshift(m):g.push(m),m}}const ci=s=>(n,c=rt)=>(!ws||s==="sp")&&lr(s,n,c),Wc=ci("bm"),ha=ci("m"),Vc=ci("bu"),cr=ci("u"),hr=ci("bum"),ua=ci("um"),jc=ci("sp"),Gc=ci("rtg"),Uc=ci("rtc");function $c(s,n=rt){lr("ec",s,n)}function Cf(s,n){const c=xt;if(c===null)return s;const u=fr(c)||c.proxy,g=s.dirs||(s.dirs=[]);for(let m=0;m<n.length;m++){let[w,k,P,I=Be]=n[m];_e(w)&&(w={mounted:w,updated:w}),w.deep&&Wi(k),g.push({dir:w,instance:u,value:k,oldValue:void 0,arg:P,modifiers:I})}return s}function Ut(s,n,c,u){const g=s.dirs,m=n&&n.dirs;for(let w=0;w<g.length;w++){const k=g[w];m&&(k.oldValue=m[w].value);let P=k.dir[u];P&&(Ki(),It(P,c,8,[s.el,k,s,n]),Ji())}}const Jn="components",Ef="directives";function qc(s,n){return Qn(Jn,s,!0,n)||s}const Zc=Symbol();function Kc(s){return et(s)?Qn(Jn,s,!1)||s:s||Zc}function Pf(s){return Qn(Ef,s)}function Qn(s,n,c=!0,u=!1){const g=xt||rt;if(g){const m=g.type;if(s===Jn){const k=ja(m,!1);if(k&&(k===n||k===Ot(n)||k===na(Ot(n))))return m}const w=Wo(g[s]||m[s],n)||Wo(g.appContext[s],n);return!w&&u?m:w}}function Wo(s,n){return s&&(s[n]||s[Ot(n)]||s[na(Ot(n))])}function Jc(s,n,c,u){let g;const m=c&&c[u];if(ke(s)||et(s)){g=new Array(s.length);for(let w=0,k=s.length;w<k;w++)g[w]=n(s[w],w,void 0,m&&m[w])}else if(typeof s=="number"){g=new Array(s);for(let w=0;w<s;w++)g[w]=n(w+1,w,void 0,m&&m[w])}else if(it(s))if(s[Symbol.iterator])g=Array.from(s,(w,k)=>n(w,k,void 0,m&&m[k]));else{const w=Object.keys(s);g=new Array(w.length);for(let k=0,P=w.length;k<P;k++){const I=w[k];g[k]=n(s[I],I,k,m&&m[k])}}else g=[];return c&&(c[u]=g),g}function Tf(s,n){for(let c=0;c<n.length;c++){const u=n[c];if(ke(u))for(let g=0;g<u.length;g++)s[u[g].name]=u[g].fn;else u&&(s[u.name]=u.fn)}return s}function Lf(s,n,c={},u,g){if(xt.isCE||xt.parent&&ji(xt.parent)&&xt.parent.isCE)return Fe("slot",n==="default"?null:{name:n},u&&u());let m=s[n];m&&m._c&&(m._d=!1),Ke();const w=m&&Qc(m(c)),k=Ti(st,{key:c.key||`_${n}`},w||(u?u():[]),w&&s._===1?64:-2);return!g&&k.scopeId&&(k.slotScopeIds=[k.scopeId+"-s"]),m&&m._c&&(m._d=!0),k}function Qc(s){return s.some(n=>Li(n)?!(n.type===mt||n.type===st&&!Qc(n.children)):!0)?s:null}function Mf(s){const n={};for(const c in s)n[Ds(c)]=s[c];return n}const hn=s=>s?bh(s)?fr(s)||s.proxy:hn(s.parent):null,Ya=tt(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>hn(s.parent),$root:s=>hn(s.root),$emit:s=>s.emit,$options:s=>th(s),$forceUpdate:s=>s.f||(s.f=()=>Gn(s.update)),$nextTick:s=>s.n||(s.n=bs.bind(s.proxy)),$watch:s=>vf.bind(s)}),un={get({_:s},n){const{ctx:c,setupState:u,data:g,props:m,accessCache:w,type:k,appContext:P}=s;let I;if(n[0]!=="$"){const W=w[n];if(W!==void 0)switch(W){case 1:return u[n];case 2:return g[n];case 4:return c[n];case 3:return m[n]}else{if(u!==Be&&Ne(u,n))return w[n]=1,u[n];if(g!==Be&&Ne(g,n))return w[n]=2,g[n];if((I=s.propsOptions[0])&&Ne(I,n))return w[n]=3,m[n];if(c!==Be&&Ne(c,n))return w[n]=4,c[n];dn&&(w[n]=0)}}const O=Ya[n];let N,z;if(O)return n==="$attrs"&&Ft(s,"get",n),O(s);if((N=k.__cssModules)&&(N=N[n]))return N;if(c!==Be&&Ne(c,n))return w[n]=4,c[n];if(z=P.config.globalProperties,Ne(z,n))return z[n]},set({_:s},n,c){const{data:u,setupState:g,ctx:m}=s;return g!==Be&&Ne(g,n)?(g[n]=c,!0):u!==Be&&Ne(u,n)?(u[n]=c,!0):Ne(s.props,n)||n[0]==="$"&&n.slice(1)in s?!1:(m[n]=c,!0)},has({_:{data:s,setupState:n,accessCache:c,ctx:u,appContext:g,propsOptions:m}},w){let k;return!!c[w]||s!==Be&&Ne(s,w)||n!==Be&&Ne(n,w)||(k=m[0])&&Ne(k,w)||Ne(u,w)||Ne(Ya,w)||Ne(g.config.globalProperties,w)},defineProperty(s,n,c){return c.get!=null?s._.accessCache[n]=0:Ne(c,"value")&&this.set(s,n,c.value,null),Reflect.defineProperty(s,n,c)}},_f=tt({},un,{get(s,n){if(n!==Symbol.unscopables)return un.get(s,n,s)},has(s,n){return n[0]!=="_"&&!qu(n)}});let dn=!0;function If(s){const n=th(s),c=s.proxy,u=s.ctx;dn=!1,n.beforeCreate&&Vo(n.beforeCreate,s,"bc");const{data:g,computed:m,methods:w,watch:k,provide:P,inject:I,created:O,beforeMount:N,mounted:z,beforeUpdate:W,updated:q,activated:K,deactivated:ee,beforeDestroy:V,beforeUnmount:T,destroyed:j,unmounted:Z,render:H,renderTracked:ce,renderTriggered:J,errorCaptured:ie,serverPrefetch:ne,expose:Q,inheritAttrs:le,components:se,directives:ye,filters:ge}=n;if(I&&Rf(I,u,null,s.appContext.config.unwrapInjectedRef),w)for(const Te in w){const Ye=w[Te];_e(Ye)&&(u[Te]=Ye.bind(c))}if(g){const Te=g.call(c,c);it(Te)&&(s.data=Ii(Te))}if(dn=!0,m)for(const Te in m){const Ye=m[Te],$e=_e(Ye)?Ye.bind(c,c):_e(Ye.get)?Ye.get.bind(c,c):Vt,Gt=!_e(Ye)&&_e(Ye.set)?Ye.set.bind(c):Vt,nt=We({get:$e,set:Gt});Object.defineProperty(u,Te,{enumerable:!0,configurable:!0,get:()=>nt.value,set:je=>nt.value=je})}if(k)for(const Te in k)eh(k[Te],u,c,Te);if(P){const Te=_e(P)?P.call(c):P;Reflect.ownKeys(Te).forEach(Ye=>{Ws(Ye,Te[Ye])})}O&&Vo(O,s,"c");function Le(Te,Ye){ke(Ye)?Ye.forEach($e=>Te($e.bind(c))):Ye&&Te(Ye.bind(c))}if(Le(Wc,N),Le(ha,z),Le(Vc,W),Le(cr,q),Le(Hc,K),Le(Yc,ee),Le($c,ie),Le(Uc,ce),Le(Gc,J),Le(hr,T),Le(ua,Z),Le(jc,ne),ke(Q))if(Q.length){const Te=s.exposed||(s.exposed={});Q.forEach(Ye=>{Object.defineProperty(Te,Ye,{get:()=>c[Ye],set:$e=>c[Ye]=$e})})}else s.exposed||(s.exposed={});H&&s.render===Vt&&(s.render=H),le!=null&&(s.inheritAttrs=le),se&&(s.components=se),ye&&(s.directives=ye)}function Rf(s,n,c=Vt,u=!1){ke(s)&&(s=fn(s));for(const g in s){const m=s[g];let w;it(m)?"default"in m?w=Rt(m.from||g,m.default,!0):w=Rt(m.from||g):w=Rt(m),Qe(w)&&u?Object.defineProperty(n,g,{enumerable:!0,configurable:!0,get:()=>w.value,set:k=>w.value=k}):n[g]=w}}function Vo(s,n,c){It(ke(s)?s.map(u=>u.bind(n.proxy)):s.bind(n.proxy),n,c)}function eh(s,n,c,u){const g=u.includes(".")?Dc(c,u):()=>c[u];if(et(s)){const m=n[s];_e(m)&&Ai(g,m)}else if(_e(s))Ai(g,s.bind(c));else if(it(s))if(ke(s))s.forEach(m=>eh(m,n,c,u));else{const m=_e(s.handler)?s.handler.bind(c):n[s.handler];_e(m)&&Ai(g,m,s)}}function th(s){const n=s.type,{mixins:c,extends:u}=n,{mixins:g,optionsCache:m,config:{optionMergeStrategies:w}}=s.appContext,k=m.get(n);let P;return k?P=k:!g.length&&!c&&!u?P=n:(P={},g.length&&g.forEach(I=>Ba(P,I,w,!0)),Ba(P,n,w)),m.set(n,P),P}function Ba(s,n,c,u=!1){const{mixins:g,extends:m}=n;m&&Ba(s,m,c,!0),g&&g.forEach(w=>Ba(s,w,c,!0));for(const w in n)if(!(u&&w==="expose")){const k=Of[w]||c&&c[w];s[w]=k?k(s[w],n[w]):n[w]}return s}const Of={data:jo,props:Xi,emits:Xi,methods:Xi,computed:Xi,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:Xi,directives:Xi,watch:zf,provide:jo,inject:Ff};function jo(s,n){return n?s?function(){return tt(_e(s)?s.call(this,this):s,_e(n)?n.call(this,this):n)}:n:s}function Ff(s,n){return Xi(fn(s),fn(n))}function fn(s){if(ke(s)){const n={};for(let c=0;c<s.length;c++)n[s[c]]=s[c];return n}return s}function vt(s,n){return s?[...new Set([].concat(s,n))]:n}function Xi(s,n){return s?tt(tt(Object.create(null),s),n):n}function zf(s,n){if(!s)return n;if(!n)return s;const c=tt(Object.create(null),s);for(const u in n)c[u]=vt(s[u],n[u]);return c}function Nf(s,n,c,u=!1){const g={},m={};Na(m,ur,1),s.propsDefaults=Object.create(null),ih(s,n,g,m);for(const w in s.propsOptions[0])w in g||(g[w]=void 0);c?s.props=u?g:Ac(g):s.type.props?s.props=g:s.props=m,s.attrs=m}function Df(s,n,c,u){const{props:g,attrs:m,vnode:{patchFlag:w}}=s,k=Ie(g),[P]=s.propsOptions;let I=!1;if((u||w>0)&&!(w&16)){if(w&8){const O=s.vnode.dynamicProps;for(let N=0;N<O.length;N++){let z=O[N];if(rr(s.emitsOptions,z))continue;const W=n[z];if(P)if(Ne(m,z))W!==m[z]&&(m[z]=W,I=!0);else{const q=Ot(z);g[q]=gn(P,k,q,W,s,!1)}else W!==m[z]&&(m[z]=W,I=!0)}}}else{ih(s,n,g,m)&&(I=!0);let O;for(const N in k)(!n||!Ne(n,N)&&((O=Zt(N))===N||!Ne(n,O)))&&(P?c&&(c[N]!==void 0||c[O]!==void 0)&&(g[N]=gn(P,k,N,void 0,s,!0)):delete g[N]);if(m!==k)for(const N in m)(!n||!Ne(n,N)&&!0)&&(delete m[N],I=!0)}I&&oi(s,"set","$attrs")}function ih(s,n,c,u){const[g,m]=s.propsOptions;let w=!1,k;if(n)for(let P in n){if(Ns(P))continue;const I=n[P];let O;g&&Ne(g,O=Ot(P))?!m||!m.includes(O)?c[O]=I:(k||(k={}))[O]=I:rr(s.emitsOptions,P)||(!(P in u)||I!==u[P])&&(u[P]=I,w=!0)}if(m){const P=Ie(c),I=k||Be;for(let O=0;O<m.length;O++){const N=m[O];c[N]=gn(g,P,N,I[N],s,!Ne(I,N))}}return w}function gn(s,n,c,u,g,m){const w=s[c];if(w!=null){const k=Ne(w,"default");if(k&&u===void 0){const P=w.default;if(w.type!==Function&&_e(P)){const{propsDefaults:I}=g;c in I?u=I[c]:(Mi(g),u=I[c]=P.call(null,n),Si())}else u=P}w[0]&&(m&&!k?u=!1:w[1]&&(u===""||u===Zt(c))&&(u=!0))}return u}function sh(s,n,c=!1){const u=n.propsCache,g=u.get(s);if(g)return g;const m=s.props,w={},k=[];let P=!1;if(!_e(s)){const O=N=>{P=!0;const[z,W]=sh(N,n,!0);tt(w,z),W&&k.push(...W)};!c&&n.mixins.length&&n.mixins.forEach(O),s.extends&&O(s.extends),s.mixins&&s.mixins.forEach(O)}if(!m&&!P)return u.set(s,ds),ds;if(ke(m))for(let O=0;O<m.length;O++){const N=Ot(m[O]);Go(N)&&(w[N]=Be)}else if(m)for(const O in m){const N=Ot(O);if(Go(N)){const z=m[O],W=w[N]=ke(z)||_e(z)?{type:z}:z;if(W){const q=qo(Boolean,W.type),K=qo(String,W.type);W[0]=q>-1,W[1]=K<0||q<K,(q>-1||Ne(W,"default"))&&k.push(N)}}}const I=[w,k];return u.set(s,I),I}function Go(s){return s[0]!=="$"}function Uo(s){const n=s&&s.toString().match(/^\s*function (\w+)/);return n?n[1]:s===null?"null":""}function $o(s,n){return Uo(s)===Uo(n)}function qo(s,n){return ke(n)?n.findIndex(c=>$o(c,s)):_e(n)&&$o(n,s)?0:-1}const ah=s=>s[0]==="_"||s==="$stable",eo=s=>ke(s)?s.map(Mt):[Mt(s)],Xf=(s,n,c)=>{if(n._n)return n;const u=Qs((...g)=>eo(n(...g)),c);return u._c=!1,u},rh=(s,n,c)=>{const u=s._ctx;for(const g in s){if(ah(g))continue;const m=s[g];if(_e(m))n[g]=Xf(g,m,u);else if(m!=null){const w=eo(m);n[g]=()=>w}}},nh=(s,n)=>{const c=eo(n);s.slots.default=()=>c},Hf=(s,n)=>{if(s.vnode.shapeFlag&32){const c=n._;c?(s.slots=Ie(n),Na(n,"_",c)):rh(n,s.slots={})}else s.slots={},n&&nh(s,n);Na(s.slots,ur,1)},Yf=(s,n,c)=>{const{vnode:u,slots:g}=s;let m=!0,w=Be;if(u.shapeFlag&32){const k=n._;k?c&&k===1?m=!1:(tt(g,n),!c&&k===1&&delete g._):(m=!n.$stable,rh(n,g)),w=n}else n&&(nh(s,n),w={default:1});if(m)for(const k in g)!ah(k)&&!(k in w)&&delete g[k]};function oh(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bf=0;function Wf(s,n){return function(u,g=null){_e(u)||(u=Object.assign({},u)),g!=null&&!it(g)&&(g=null);const m=oh(),w=new Set;let k=!1;const P=m.app={_uid:Bf++,_component:u,_props:g,_container:null,_context:m,_instance:null,version:Eh,get config(){return m.config},set config(I){},use(I,...O){return w.has(I)||(I&&_e(I.install)?(w.add(I),I.install(P,...O)):_e(I)&&(w.add(I),I(P,...O))),P},mixin(I){return m.mixins.includes(I)||m.mixins.push(I),P},component(I,O){return O?(m.components[I]=O,P):m.components[I]},directive(I,O){return O?(m.directives[I]=O,P):m.directives[I]},mount(I,O,N){if(!k){const z=Fe(u,g);return z.appContext=m,O&&n?n(z,I):s(z,I,N),k=!0,P._container=I,I.__vue_app__=P,fr(z.component)||z.component.proxy}},unmount(){k&&(s(null,P._container),delete P._container.__vue_app__)},provide(I,O){return m.provides[I]=O,P}};return P}}function Wa(s,n,c,u,g=!1){if(ke(s)){s.forEach((z,W)=>Wa(z,n&&(ke(n)?n[W]:n),c,u,g));return}if(ji(u)&&!g)return;const m=u.shapeFlag&4?fr(u.component)||u.component.proxy:u.el,w=g?null:m,{i:k,r:P}=s,I=n&&n.r,O=k.refs===Be?k.refs={}:k.refs,N=k.setupState;if(I!=null&&I!==P&&(et(I)?(O[I]=null,Ne(N,I)&&(N[I]=null)):Qe(I)&&(I.value=null)),_e(P))Jt(P,k,12,[w,O]);else{const z=et(P),W=Qe(P);if(z||W){const q=()=>{if(s.f){const K=z?O[P]:P.value;g?ke(K)&&Rn(K,m):ke(K)?K.includes(m)||K.push(m):z?(O[P]=[m],Ne(N,P)&&(N[P]=O[P])):(P.value=[m],s.k&&(O[s.k]=P.value))}else z?(O[P]=w,Ne(N,P)&&(N[P]=w)):W&&(P.value=w,s.k&&(O[s.k]=w))};w?(q.id=-1,ut(q,c)):q()}}}let fi=!1;const ka=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",Aa=s=>s.nodeType===8;function Vf(s){const{mt:n,p:c,o:{patchProp:u,createText:g,nextSibling:m,parentNode:w,remove:k,insert:P,createComment:I}}=s,O=(V,T)=>{if(!T.hasChildNodes()){c(null,V,T),Ha(),T._vnode=V;return}fi=!1,N(T.firstChild,V,null,null,null),Ha(),T._vnode=V,fi&&console.error("Hydration completed but contains mismatches.")},N=(V,T,j,Z,H,ce=!1)=>{const J=Aa(V)&&V.data==="[",ie=()=>K(V,T,j,Z,H,J),{type:ne,ref:Q,shapeFlag:le,patchFlag:se}=T,ye=V.nodeType;T.el=V,se===-2&&(ce=!1,T.dynamicChildren=null);let ge=null;switch(ne){case ys:ye!==3?T.children===""?(P(T.el=g(""),w(V),V),ge=V):ge=ie():(V.data!==T.children&&(fi=!0,V.data=T.children),ge=m(V));break;case mt:ye!==8||J?ge=ie():ge=m(V);break;case Gi:if(ye!==1&&ye!==3)ge=ie();else{ge=V;const Ve=!T.children.length;for(let Le=0;Le<T.staticCount;Le++)Ve&&(T.children+=ge.nodeType===1?ge.outerHTML:ge.data),Le===T.staticCount-1&&(T.anchor=ge),ge=m(ge);return ge}break;case st:J?ge=q(V,T,j,Z,H,ce):ge=ie();break;default:if(le&1)ye!==1||T.type.toLowerCase()!==V.tagName.toLowerCase()?ge=ie():ge=z(V,T,j,Z,H,ce);else if(le&6){T.slotScopeIds=H;const Ve=w(V);if(n(T,Ve,null,j,Z,ka(Ve),ce),ge=J?ee(V):m(V),ge&&Aa(ge)&&ge.data==="teleport end"&&(ge=m(ge)),ji(T)){let Le;J?(Le=Fe(st),Le.anchor=ge?ge.previousSibling:Ve.lastChild):Le=V.nodeType===3?dr(""):Fe("div"),Le.el=V,T.component.subTree=Le}}else le&64?ye!==8?ge=ie():ge=T.type.hydrate(V,T,j,Z,H,ce,s,W):le&128&&(ge=T.type.hydrate(V,T,j,Z,ka(w(V)),H,ce,s,N))}return Q!=null&&Wa(Q,null,Z,T),ge},z=(V,T,j,Z,H,ce)=>{ce=ce||!!T.dynamicChildren;const{type:J,props:ie,patchFlag:ne,shapeFlag:Q,dirs:le}=T,se=J==="input"&&le||J==="option";if(se||ne!==-1){if(le&&Ut(T,null,j,"created"),ie)if(se||!ce||ne&48)for(const ge in ie)(se&&ge.endsWith("value")||aa(ge)&&!Ns(ge))&&u(V,ge,null,ie[ge],!1,void 0,j);else ie.onClick&&u(V,"onClick",null,ie.onClick,!1,void 0,j);let ye;if((ye=ie&&ie.onVnodeBeforeMount)&&At(ye,j,T),le&&Ut(T,null,j,"beforeMount"),((ye=ie&&ie.onVnodeMounted)||le)&&Fc(()=>{ye&&At(ye,j,T),le&&Ut(T,null,j,"mounted")},Z),Q&16&&!(ie&&(ie.innerHTML||ie.textContent))){let ge=W(V.firstChild,T,V,j,Z,H,ce);for(;ge;){fi=!0;const Ve=ge;ge=ge.nextSibling,k(Ve)}}else Q&8&&V.textContent!==T.children&&(fi=!0,V.textContent=T.children)}return V.nextSibling},W=(V,T,j,Z,H,ce,J)=>{J=J||!!T.dynamicChildren;const ie=T.children,ne=ie.length;for(let Q=0;Q<ne;Q++){const le=J?ie[Q]:ie[Q]=Mt(ie[Q]);if(V)V=N(V,le,Z,H,ce,J);else{if(le.type===ys&&!le.children)continue;fi=!0,c(null,le,j,null,Z,H,ka(j),ce)}}return V},q=(V,T,j,Z,H,ce)=>{const{slotScopeIds:J}=T;J&&(H=H?H.concat(J):J);const ie=w(V),ne=W(m(V),T,ie,j,Z,H,ce);return ne&&Aa(ne)&&ne.data==="]"?m(T.anchor=ne):(fi=!0,P(T.anchor=I("]"),ie,ne),ne)},K=(V,T,j,Z,H,ce)=>{if(fi=!0,T.el=null,ce){const ne=ee(V);for(;;){const Q=m(V);if(Q&&Q!==ne)k(Q);else break}}const J=m(V),ie=w(V);return k(V),c(null,T,ie,J,j,Z,ka(ie),H),J},ee=V=>{let T=0;for(;V;)if(V=m(V),V&&Aa(V)&&(V.data==="["&&T++,V.data==="]")){if(T===0)return m(V);T--}return V};return[O,N]}const ut=Fc;function lh(s){return hh(s)}function ch(s){return hh(s,Vf)}function hh(s,n){const c=cd();c.__VUE__=!0;const{insert:u,remove:g,patchProp:m,createElement:w,createText:k,createComment:P,setText:I,setElementText:O,parentNode:N,nextSibling:z,setScopeId:W=Vt,cloneNode:q,insertStaticContent:K}=s,ee=(D,B,$,ae=null,oe=null,xe=null,ve=!1,fe=null,me=!!B.dynamicChildren)=>{if(D===B)return;D&&!$t(D,B)&&(ae=be(D),ot(D,oe,xe,!0),D=null),B.patchFlag===-2&&(me=!1,B.dynamicChildren=null);const{type:he,ref:Ae,shapeFlag:we}=B;switch(he){case ys:V(D,B,$,ae);break;case mt:T(D,B,$,ae);break;case Gi:D==null&&j(B,$,ae,ve);break;case st:ye(D,B,$,ae,oe,xe,ve,fe,me);break;default:we&1?ce(D,B,$,ae,oe,xe,ve,fe,me):we&6?ge(D,B,$,ae,oe,xe,ve,fe,me):(we&64||we&128)&&he.process(D,B,$,ae,oe,xe,ve,fe,me,Re)}Ae!=null&&oe&&Wa(Ae,D&&D.ref,xe,B||D,!B)},V=(D,B,$,ae)=>{if(D==null)u(B.el=k(B.children),$,ae);else{const oe=B.el=D.el;B.children!==D.children&&I(oe,B.children)}},T=(D,B,$,ae)=>{D==null?u(B.el=P(B.children||""),$,ae):B.el=D.el},j=(D,B,$,ae)=>{[D.el,D.anchor]=K(D.children,B,$,ae,D.el,D.anchor)},Z=({el:D,anchor:B},$,ae)=>{let oe;for(;D&&D!==B;)oe=z(D),u(D,$,ae),D=oe;u(B,$,ae)},H=({el:D,anchor:B})=>{let $;for(;D&&D!==B;)$=z(D),g(D),D=$;g(B)},ce=(D,B,$,ae,oe,xe,ve,fe,me)=>{ve=ve||B.type==="svg",D==null?J(B,$,ae,oe,xe,ve,fe,me):Q(D,B,oe,xe,ve,fe,me)},J=(D,B,$,ae,oe,xe,ve,fe)=>{let me,he;const{type:Ae,props:we,shapeFlag:Se,transition:Me,patchFlag:ze,dirs:Xe}=D;if(D.el&&q!==void 0&&ze===-1)me=D.el=q(D.el);else{if(me=D.el=w(D.type,xe,we&&we.is,we),Se&8?O(me,D.children):Se&16&&ne(D.children,me,null,ae,oe,xe&&Ae!=="foreignObject",ve,fe),Xe&&Ut(D,null,ae,"created"),we){for(const qe in we)qe!=="value"&&!Ns(qe)&&m(me,qe,null,we[qe],xe,D.children,ae,oe,de);"value"in we&&m(me,"value",null,we.value),(he=we.onVnodeBeforeMount)&&At(he,ae,D)}ie(me,D,D.scopeId,ve,ae)}Xe&&Ut(D,null,ae,"beforeMount");const Ge=(!oe||oe&&!oe.pendingBranch)&&Me&&!Me.persisted;Ge&&Me.beforeEnter(me),u(me,B,$),((he=we&&we.onVnodeMounted)||Ge||Xe)&&ut(()=>{he&&At(he,ae,D),Ge&&Me.enter(me),Xe&&Ut(D,null,ae,"mounted")},oe)},ie=(D,B,$,ae,oe)=>{if($&&W(D,$),ae)for(let xe=0;xe<ae.length;xe++)W(D,ae[xe]);if(oe){let xe=oe.subTree;if(B===xe){const ve=oe.vnode;ie(D,ve,ve.scopeId,ve.slotScopeIds,oe.parent)}}},ne=(D,B,$,ae,oe,xe,ve,fe,me=0)=>{for(let he=me;he<D.length;he++){const Ae=D[he]=fe?bi(D[he]):Mt(D[he]);ee(null,Ae,B,$,ae,oe,xe,ve,fe)}},Q=(D,B,$,ae,oe,xe,ve)=>{const fe=B.el=D.el;let{patchFlag:me,dynamicChildren:he,dirs:Ae}=B;me|=D.patchFlag&16;const we=D.props||Be,Se=B.props||Be;let Me;$&&Ni($,!1),(Me=Se.onVnodeBeforeUpdate)&&At(Me,$,B,D),Ae&&Ut(B,D,$,"beforeUpdate"),$&&Ni($,!0);const ze=oe&&B.type!=="foreignObject";if(he?le(D.dynamicChildren,he,fe,$,ae,ze,xe):ve||$e(D,B,fe,null,$,ae,ze,xe,!1),me>0){if(me&16)se(fe,B,we,Se,$,ae,oe);else if(me&2&&we.class!==Se.class&&m(fe,"class",null,Se.class,oe),me&4&&m(fe,"style",we.style,Se.style,oe),me&8){const Xe=B.dynamicProps;for(let Ge=0;Ge<Xe.length;Ge++){const qe=Xe[Ge],yt=we[qe],hi=Se[qe];(hi!==yt||qe==="value")&&m(fe,qe,yt,hi,oe,D.children,$,ae,de)}}me&1&&D.children!==B.children&&O(fe,B.children)}else!ve&&he==null&&se(fe,B,we,Se,$,ae,oe);((Me=Se.onVnodeUpdated)||Ae)&&ut(()=>{Me&&At(Me,$,B,D),Ae&&Ut(B,D,$,"updated")},ae)},le=(D,B,$,ae,oe,xe,ve)=>{for(let fe=0;fe<B.length;fe++){const me=D[fe],he=B[fe],Ae=me.el&&(me.type===st||!$t(me,he)||me.shapeFlag&70)?N(me.el):$;ee(me,he,Ae,null,ae,oe,xe,ve,!0)}},se=(D,B,$,ae,oe,xe,ve)=>{if($!==ae){for(const fe in ae){if(Ns(fe))continue;const me=ae[fe],he=$[fe];me!==he&&fe!=="value"&&m(D,fe,he,me,ve,B.children,oe,xe,de)}if($!==Be)for(const fe in $)!Ns(fe)&&!(fe in ae)&&m(D,fe,$[fe],null,ve,B.children,oe,xe,de);"value"in ae&&m(D,"value",$.value,ae.value)}},ye=(D,B,$,ae,oe,xe,ve,fe,me)=>{const he=B.el=D?D.el:k(""),Ae=B.anchor=D?D.anchor:k("");let{patchFlag:we,dynamicChildren:Se,slotScopeIds:Me}=B;Me&&(fe=fe?fe.concat(Me):Me),D==null?(u(he,$,ae),u(Ae,$,ae),ne(B.children,$,Ae,oe,xe,ve,fe,me)):we>0&&we&64&&Se&&D.dynamicChildren?(le(D.dynamicChildren,Se,$,oe,xe,ve,fe),(B.key!=null||oe&&B===oe.subTree)&&to(D,B,!0)):$e(D,B,$,Ae,oe,xe,ve,fe,me)},ge=(D,B,$,ae,oe,xe,ve,fe,me)=>{B.slotScopeIds=fe,D==null?B.shapeFlag&512?oe.ctx.activate(B,$,ae,ve,me):Ve(B,$,ae,oe,xe,ve,me):Le(D,B,me)},Ve=(D,B,$,ae,oe,xe,ve)=>{const fe=D.component=mh(D,ae,oe);if(ca(D)&&(fe.ctx.renderer=Re),vh(fe),fe.asyncDep){if(oe&&oe.registerDep(fe,Te),!D.el){const me=fe.subTree=Fe(mt);T(null,me,B,$)}return}Te(fe,D,B,$,oe,xe,ve)},Le=(D,B,$)=>{const ae=B.component=D.component;if(uf(D,B,$))if(ae.asyncDep&&!ae.asyncResolved){Ye(ae,B,$);return}else ae.next=B,tf(ae.update),ae.update();else B.el=D.el,ae.vnode=B},Te=(D,B,$,ae,oe,xe,ve)=>{const fe=()=>{if(D.isMounted){let{next:Ae,bu:we,u:Se,parent:Me,vnode:ze}=D,Xe=Ae,Ge;Ni(D,!1),Ae?(Ae.el=ze.el,Ye(D,Ae,ve)):Ae=ze,we&&gs(we),(Ge=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&At(Ge,Me,Ae,ze),Ni(D,!0);const qe=Ma(D),yt=D.subTree;D.subTree=qe,ee(yt,qe,N(yt.el),be(yt),D,oe,xe),Ae.el=qe.el,Xe===null&&$n(D,qe.el),Se&&ut(Se,oe),(Ge=Ae.props&&Ae.props.onVnodeUpdated)&&ut(()=>At(Ge,Me,Ae,ze),oe)}else{let Ae;const{el:we,props:Se}=B,{bm:Me,m:ze,parent:Xe}=D,Ge=ji(B);if(Ni(D,!1),Me&&gs(Me),!Ge&&(Ae=Se&&Se.onVnodeBeforeMount)&&At(Ae,Xe,B),Ni(D,!0),we&&Ee){const qe=()=>{D.subTree=Ma(D),Ee(we,D.subTree,D,oe,null)};Ge?B.type.__asyncLoader().then(()=>!D.isUnmounted&&qe()):qe()}else{const qe=D.subTree=Ma(D);ee(null,qe,$,ae,D,oe,xe),B.el=qe.el}if(ze&&ut(ze,oe),!Ge&&(Ae=Se&&Se.onVnodeMounted)){const qe=B;ut(()=>At(Ae,Xe,qe),oe)}(B.shapeFlag&256||Xe&&ji(Xe.vnode)&&Xe.vnode.shapeFlag&256)&&D.a&&ut(D.a,oe),D.isMounted=!0,B=$=ae=null}},me=D.effect=new oa(fe,()=>Gn(he),D.scope),he=D.update=()=>me.run();he.id=D.uid,Ni(D,!0),he()},Ye=(D,B,$)=>{B.component=D;const ae=D.vnode.props;D.vnode=B,D.next=null,Df(D,B.props,ae,$),Yf(D,B.children,$),Ki(),ar(void 0,D.update),Ji()},$e=(D,B,$,ae,oe,xe,ve,fe,me=!1)=>{const he=D&&D.children,Ae=D?D.shapeFlag:0,we=B.children,{patchFlag:Se,shapeFlag:Me}=B;if(Se>0){if(Se&128){nt(he,we,$,ae,oe,xe,ve,fe,me);return}else if(Se&256){Gt(he,we,$,ae,oe,xe,ve,fe,me);return}}Me&8?(Ae&16&&de(he,oe,xe),we!==he&&O($,we)):Ae&16?Me&16?nt(he,we,$,ae,oe,xe,ve,fe,me):de(he,oe,xe,!0):(Ae&8&&O($,""),Me&16&&ne(we,$,ae,oe,xe,ve,fe,me))},Gt=(D,B,$,ae,oe,xe,ve,fe,me)=>{D=D||ds,B=B||ds;const he=D.length,Ae=B.length,we=Math.min(he,Ae);let Se;for(Se=0;Se<we;Se++){const Me=B[Se]=me?bi(B[Se]):Mt(B[Se]);ee(D[Se],Me,$,null,oe,xe,ve,fe,me)}he>Ae?de(D,oe,xe,!0,!1,we):ne(B,$,ae,oe,xe,ve,fe,me,we)},nt=(D,B,$,ae,oe,xe,ve,fe,me)=>{let he=0;const Ae=B.length;let we=D.length-1,Se=Ae-1;for(;he<=we&&he<=Se;){const Me=D[he],ze=B[he]=me?bi(B[he]):Mt(B[he]);if($t(Me,ze))ee(Me,ze,$,null,oe,xe,ve,fe,me);else break;he++}for(;he<=we&&he<=Se;){const Me=D[we],ze=B[Se]=me?bi(B[Se]):Mt(B[Se]);if($t(Me,ze))ee(Me,ze,$,null,oe,xe,ve,fe,me);else break;we--,Se--}if(he>we){if(he<=Se){const Me=Se+1,ze=Me<Ae?B[Me].el:ae;for(;he<=Se;)ee(null,B[he]=me?bi(B[he]):Mt(B[he]),$,ze,oe,xe,ve,fe,me),he++}}else if(he>Se)for(;he<=we;)ot(D[he],oe,xe,!0),he++;else{const Me=he,ze=he,Xe=new Map;for(he=ze;he<=Se;he++){const bt=B[he]=me?bi(B[he]):Mt(B[he]);bt.key!=null&&Xe.set(bt.key,he)}let Ge,qe=0;const yt=Se-ze+1;let hi=!1,Ts=0;const Oi=new Array(yt);for(he=0;he<yt;he++)Oi[he]=0;for(he=Me;he<=we;he++){const bt=D[he];if(qe>=yt){ot(bt,oe,xe,!0);continue}let zt;if(bt.key!=null)zt=Xe.get(bt.key);else for(Ge=ze;Ge<=Se;Ge++)if(Oi[Ge-ze]===0&&$t(bt,B[Ge])){zt=Ge;break}zt===void 0?ot(bt,oe,xe,!0):(Oi[zt-ze]=he+1,zt>=Ts?Ts=zt:hi=!0,ee(bt,B[zt],$,null,oe,xe,ve,fe,me),qe++)}const Ls=hi?jf(Oi):ds;for(Ge=Ls.length-1,he=yt-1;he>=0;he--){const bt=ze+he,zt=B[bt],ga=bt+1<Ae?B[bt+1].el:ae;Oi[he]===0?ee(null,zt,$,ga,oe,xe,ve,fe,me):hi&&(Ge<0||he!==Ls[Ge]?je(zt,$,ga,2):Ge--)}}},je=(D,B,$,ae,oe=null)=>{const{el:xe,type:ve,transition:fe,children:me,shapeFlag:he}=D;if(he&6){je(D.component.subTree,B,$,ae);return}if(he&128){D.suspense.move(B,$,ae);return}if(he&64){ve.move(D,B,$,Re);return}if(ve===st){u(xe,B,$);for(let we=0;we<me.length;we++)je(me[we],B,$,ae);u(D.anchor,B,$);return}if(ve===Gi){Z(D,B,$);return}if(ae!==2&&he&1&&fe)if(ae===0)fe.beforeEnter(xe),u(xe,B,$),ut(()=>fe.enter(xe),oe);else{const{leave:we,delayLeave:Se,afterLeave:Me}=fe,ze=()=>u(xe,B,$),Xe=()=>{we(xe,()=>{ze(),Me&&Me()})};Se?Se(xe,ze,Xe):Xe()}else u(xe,B,$)},ot=(D,B,$,ae=!1,oe=!1)=>{const{type:xe,props:ve,ref:fe,children:me,dynamicChildren:he,shapeFlag:Ae,patchFlag:we,dirs:Se}=D;if(fe!=null&&Wa(fe,null,$,D,!0),Ae&256){B.ctx.deactivate(D);return}const Me=Ae&1&&Se,ze=!ji(D);let Xe;if(ze&&(Xe=ve&&ve.onVnodeBeforeUnmount)&&At(Xe,B,D),Ae&6)ue(D.component,$,ae);else{if(Ae&128){D.suspense.unmount($,ae);return}Me&&Ut(D,null,B,"beforeUnmount"),Ae&64?D.type.remove(D,B,$,oe,Re,ae):he&&(xe!==st||we>0&&we&64)?de(he,B,$,!1,!0):(xe===st&&we&384||!oe&&Ae&16)&&de(me,B,$),ae&&ht(D)}(ze&&(Xe=ve&&ve.onVnodeUnmounted)||Me)&&ut(()=>{Xe&&At(Xe,B,D),Me&&Ut(D,null,B,"unmounted")},$)},ht=D=>{const{type:B,el:$,anchor:ae,transition:oe}=D;if(B===st){U($,ae);return}if(B===Gi){H(D);return}const xe=()=>{g($),oe&&!oe.persisted&&oe.afterLeave&&oe.afterLeave()};if(D.shapeFlag&1&&oe&&!oe.persisted){const{leave:ve,delayLeave:fe}=oe,me=()=>ve($,xe);fe?fe(D.el,xe,me):me()}else xe()},U=(D,B)=>{let $;for(;D!==B;)$=z(D),g(D),D=$;g(B)},ue=(D,B,$)=>{const{bum:ae,scope:oe,update:xe,subTree:ve,um:fe}=D;ae&&gs(ae),oe.stop(),xe&&(xe.active=!1,ot(ve,D,B,$)),fe&&ut(fe,B),ut(()=>{D.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},de=(D,B,$,ae=!1,oe=!1,xe=0)=>{for(let ve=xe;ve<D.length;ve++)ot(D[ve],B,$,ae,oe)},be=D=>D.shapeFlag&6?be(D.component.subTree):D.shapeFlag&128?D.suspense.next():z(D.anchor||D.el),Oe=(D,B,$)=>{D==null?B._vnode&&ot(B._vnode,null,null,!0):ee(B._vnode||null,D,B,null,null,null,$),Ha(),B._vnode=D},Re={p:ee,um:ot,m:je,r:ht,mt:Ve,mc:ne,pc:$e,pbc:le,n:be,o:s};let Pe,Ee;return n&&([Pe,Ee]=n(Re)),{render:Oe,hydrate:Pe,createApp:Wf(Oe,Pe)}}function Ni({effect:s,update:n},c){s.allowRecurse=n.allowRecurse=c}function to(s,n,c=!1){const u=s.children,g=n.children;if(ke(u)&&ke(g))for(let m=0;m<u.length;m++){const w=u[m];let k=g[m];k.shapeFlag&1&&!k.dynamicChildren&&((k.patchFlag<=0||k.patchFlag===32)&&(k=g[m]=bi(g[m]),k.el=w.el),c||to(w,k))}}function jf(s){const n=s.slice(),c=[0];let u,g,m,w,k;const P=s.length;for(u=0;u<P;u++){const I=s[u];if(I!==0){if(g=c[c.length-1],s[g]<I){n[u]=g,c.push(u);continue}for(m=0,w=c.length-1;m<w;)k=m+w>>1,s[c[k]]<I?m=k+1:w=k;I<s[c[m]]&&(m>0&&(n[u]=c[m-1]),c[m]=u)}}for(m=c.length,w=c[m-1];m-- >0;)c[m]=w,w=n[w];return c}const Gf=s=>s.__isTeleport,Vs=s=>s&&(s.disabled||s.disabled===""),Zo=s=>typeof SVGElement<"u"&&s instanceof SVGElement,pn=(s,n)=>{const c=s&&s.to;return et(c)?n?n(c):null:c},Uf={__isTeleport:!0,process(s,n,c,u,g,m,w,k,P,I){const{mc:O,pc:N,pbc:z,o:{insert:W,querySelector:q,createText:K,createComment:ee}}=I,V=Vs(n.props);let{shapeFlag:T,children:j,dynamicChildren:Z}=n;if(s==null){const H=n.el=K(""),ce=n.anchor=K("");W(H,c,u),W(ce,c,u);const J=n.target=pn(n.props,q),ie=n.targetAnchor=K("");J&&(W(ie,J),w=w||Zo(J));const ne=(Q,le)=>{T&16&&O(j,Q,le,g,m,w,k,P)};V?ne(c,ce):J&&ne(J,ie)}else{n.el=s.el;const H=n.anchor=s.anchor,ce=n.target=s.target,J=n.targetAnchor=s.targetAnchor,ie=Vs(s.props),ne=ie?c:ce,Q=ie?H:J;if(w=w||Zo(ce),Z?(z(s.dynamicChildren,Z,ne,g,m,w,k),to(s,n,!0)):P||N(s,n,ne,Q,g,m,w,k,!1),V)ie||Sa(n,c,H,I,1);else if((n.props&&n.props.to)!==(s.props&&s.props.to)){const le=n.target=pn(n.props,q);le&&Sa(n,le,null,I,0)}else ie&&Sa(n,ce,J,I,1)}},remove(s,n,c,u,{um:g,o:{remove:m}},w){const{shapeFlag:k,children:P,anchor:I,targetAnchor:O,target:N,props:z}=s;if(N&&m(O),(w||!Vs(z))&&(m(I),k&16))for(let W=0;W<P.length;W++){const q=P[W];g(q,n,c,!0,!!q.dynamicChildren)}},move:Sa,hydrate:$f};function Sa(s,n,c,{o:{insert:u},m:g},m=2){m===0&&u(s.targetAnchor,n,c);const{el:w,anchor:k,shapeFlag:P,children:I,props:O}=s,N=m===2;if(N&&u(w,n,c),(!N||Vs(O))&&P&16)for(let z=0;z<I.length;z++)g(I[z],n,c,2);N&&u(k,n,c)}function $f(s,n,c,u,g,m,{o:{nextSibling:w,parentNode:k,querySelector:P}},I){const O=n.target=pn(n.props,P);if(O){const N=O._lpa||O.firstChild;if(n.shapeFlag&16)if(Vs(n.props))n.anchor=I(w(s),n,k(s),c,u,g,m),n.targetAnchor=N;else{n.anchor=w(s);let z=N;for(;z;)if(z=w(z),z&&z.nodeType===8&&z.data==="teleport anchor"){n.targetAnchor=z,O._lpa=n.targetAnchor&&w(n.targetAnchor);break}I(N,n,O,c,u,g,m)}}return n.anchor&&w(n.anchor)}const qf=Uf,st=Symbol(void 0),ys=Symbol(void 0),mt=Symbol(void 0),Gi=Symbol(void 0),js=[];let St=null;function Ke(s=!1){js.push(St=s?null:[])}function uh(){js.pop(),St=js[js.length-1]||null}let $i=1;function xn(s){$i+=s}function dh(s){return s.dynamicChildren=$i>0?St||ds:null,uh(),$i>0&&St&&St.push(s),s}function at(s,n,c,u,g,m){return dh(De(s,n,c,u,g,m,!0))}function Ti(s,n,c,u,g){return dh(Fe(s,n,c,u,g,!0))}function Li(s){return s?s.__v_isVNode===!0:!1}function $t(s,n){return s.type===n.type&&s.key===n.key}function Zf(s){}const ur="__vInternal",fh=({key:s})=>s!=null?s:null,_a=({ref:s,ref_key:n,ref_for:c})=>s!=null?et(s)||Qe(s)||_e(s)?{i:xt,r:s,k:n,f:!!c}:s:null;function De(s,n=null,c=null,u=0,g=null,m=s===st?0:1,w=!1,k=!1){const P={__v_isVNode:!0,__v_skip:!0,type:s,props:n,key:n&&fh(n),ref:n&&_a(n),scopeId:nr,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:u,dynamicProps:g,dynamicChildren:null,appContext:null};return k?(so(P,c),m&128&&s.normalize(P)):c&&(P.shapeFlag|=et(c)?8:16),$i>0&&!w&&St&&(P.patchFlag>0||m&6)&&P.patchFlag!==32&&St.push(P),P}const Fe=Kf;function Kf(s,n=null,c=null,u=0,g=null,m=!1){if((!s||s===Zc)&&(s=mt),Li(s)){const k=ei(s,n,!0);return c&&so(k,c),$i>0&&!m&&St&&(k.shapeFlag&6?St[St.indexOf(s)]=k:St.push(k)),k.patchFlag|=-2,k}if(ng(s)&&(s=s.__vccOpts),n){n=gh(n);let{class:k,style:P}=n;k&&!et(k)&&(n.class=qt(k)),it(P)&&(Yn(P)&&!ke(P)&&(P=tt({},P)),n.style=sa(P))}const w=et(s)?1:Oc(s)?128:Gf(s)?64:it(s)?4:_e(s)?2:0;return De(s,n,c,u,g,w,m,!0)}function gh(s){return s?Yn(s)||ur in s?tt({},s):s:null}function ei(s,n,c=!1){const{props:u,ref:g,patchFlag:m,children:w}=s,k=n?xh(u||{},n):u;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:k,key:k&&fh(k),ref:n&&n.ref?c&&g?ke(g)?g.concat(_a(n)):[g,_a(n)]:_a(n):g,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:w,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:n&&s.type!==st?m===-1?16:m|16:m,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&ei(s.ssContent),ssFallback:s.ssFallback&&ei(s.ssFallback),el:s.el,anchor:s.anchor}}function dr(s=" ",n=0){return Fe(ys,null,s,n)}function io(s,n){const c=Fe(Gi,null,s);return c.staticCount=n,c}function ph(s="",n=!1){return n?(Ke(),Ti(mt,null,s)):Fe(mt,null,s)}function Mt(s){return s==null||typeof s=="boolean"?Fe(mt):ke(s)?Fe(st,null,s.slice()):typeof s=="object"?bi(s):Fe(ys,null,String(s))}function bi(s){return s.el===null||s.memo?s:ei(s)}function so(s,n){let c=0;const{shapeFlag:u}=s;if(n==null)n=null;else if(ke(n))c=16;else if(typeof n=="object")if(u&65){const g=n.default;g&&(g._c&&(g._d=!1),so(s,g()),g._c&&(g._d=!0));return}else{c=32;const g=n._;!g&&!(ur in n)?n._ctx=xt:g===3&&xt&&(xt.slots._===1?n._=1:(n._=2,s.patchFlag|=1024))}else _e(n)?(n={default:n,_ctx:xt},c=32):(n=String(n),u&64?(c=16,n=[dr(n)]):c=8);s.children=n,s.shapeFlag|=c}function xh(...s){const n={};for(let c=0;c<s.length;c++){const u=s[c];for(const g in u)if(g==="class")n.class!==u.class&&(n.class=qt([n.class,u.class]));else if(g==="style")n.style=sa([n.style,u.style]);else if(aa(g)){const m=n[g],w=u[g];w&&m!==w&&!(ke(m)&&m.includes(w))&&(n[g]=m?[].concat(m,w):w)}else g!==""&&(n[g]=u[g])}return n}function At(s,n,c,u=null){It(s,n,7,[c,u])}const Jf=oh();let Qf=0;function mh(s,n,c){const u=s.type,g=(n?n.appContext:s.appContext)||Jf,m={uid:Qf++,vnode:s,type:u,parent:n,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new zn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sh(u,g),emitsOptions:Rc(u,g),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:u.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=n?n.root:m,m.emit=af.bind(null,m),s.ce&&s.ce(m),m}let rt=null;const ti=()=>rt||xt,Mi=s=>{rt=s,s.scope.on()},Si=()=>{rt&&rt.scope.off(),rt=null};function bh(s){return s.vnode.shapeFlag&4}let ws=!1;function vh(s,n=!1){ws=n;const{props:c,children:u}=s.vnode,g=bh(s);Nf(s,c,g,n),Hf(s,u);const m=g?eg(s,n):void 0;return ws=!1,m}function eg(s,n){const c=s.type;s.accessCache=Object.create(null),s.proxy=Lt(new Proxy(s.ctx,un));const{setup:u}=c;if(u){const g=s.setupContext=u.length>1?wh(s):null;Mi(s),Ki();const m=Jt(u,s,0,[s.props,g]);if(Ji(),Si(),On(m)){if(m.then(Si,Si),n)return m.then(w=>{mn(s,w,n)}).catch(w=>{Qi(w,s,0)});s.asyncDep=m}else mn(s,m,n)}else yh(s,n)}function mn(s,n,c){_e(n)?s.type.__ssrInlineRender?s.ssrRender=n:s.render=n:it(n)&&(s.setupState=Vn(n)),yh(s,c)}let Va,bn;function tg(s){Va=s,bn=n=>{n.render._rc&&(n.withProxy=new Proxy(n.ctx,_f))}}const ig=()=>!Va;function yh(s,n,c){const u=s.type;if(!s.render){if(!n&&Va&&!u.render){const g=u.template;if(g){const{isCustomElement:m,compilerOptions:w}=s.appContext.config,{delimiters:k,compilerOptions:P}=u,I=tt(tt({isCustomElement:m,delimiters:k},w),P);u.render=Va(g,I)}}s.render=u.render||Vt,bn&&bn(s)}Mi(s),Ki(),If(s),Ji(),Si()}function sg(s){return new Proxy(s.attrs,{get(n,c){return Ft(s,"get","$attrs"),n[c]}})}function wh(s){const n=u=>{s.exposed=u||{}};let c;return{get attrs(){return c||(c=sg(s))},slots:s.slots,emit:s.emit,expose:n}}function fr(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Vn(Lt(s.exposed)),{get(n,c){if(c in n)return n[c];if(c in Ya)return Ya[c](s)}}))}const ag=/(?:^|[-_])(\w)/g,rg=s=>s.replace(ag,n=>n.toUpperCase()).replace(/[-_]/g,"");function ja(s,n=!0){return _e(s)?s.displayName||s.name:s.name||n&&s.__name}function kh(s,n,c=!1){let u=ja(n);if(!u&&n.__file){const g=n.__file.match(/([^/\\]+)\.\w+$/);g&&(u=g[1])}if(!u&&s&&s.parent){const g=m=>{for(const w in m)if(m[w]===n)return w};u=g(s.components||s.parent.type.components)||g(s.appContext.components)}return u?rg(u):c?"App":"Anonymous"}function ng(s){return _e(s)&&"__vccOpts"in s}const We=(s,n)=>$d(s,n,ws);function og(){return null}function lg(){return null}function cg(s){}function hg(s,n){return null}function ug(){return Ah().slots}function dg(){return Ah().attrs}function Ah(){const s=ti();return s.setupContext||(s.setupContext=wh(s))}function fg(s,n){const c=ke(s)?s.reduce((u,g)=>(u[g]={},u),{}):s;for(const u in n){const g=c[u];g?ke(g)||_e(g)?c[u]={type:g,default:n[u]}:g.default=n[u]:g===null&&(c[u]={default:n[u]})}return c}function gg(s,n){const c={};for(const u in s)n.includes(u)||Object.defineProperty(c,u,{enumerable:!0,get:()=>s[u]});return c}function pg(s){const n=ti();let c=s();return Si(),On(c)&&(c=c.catch(u=>{throw Mi(n),u})),[c,()=>Mi(n)]}function gr(s,n,c){const u=arguments.length;return u===2?it(n)&&!ke(n)?Li(n)?Fe(s,null,[n]):Fe(s,n):Fe(s,null,n):(u>3?c=Array.prototype.slice.call(arguments,2):u===3&&Li(c)&&(c=[c]),Fe(s,n,c))}const Sh=Symbol(""),xg=()=>{{const s=Rt(Sh);return s||Ec("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),s}};function mg(){}function bg(s,n,c,u){const g=c[u];if(g&&Ch(g,s))return g;const m=n();return m.memo=s.slice(),c[u]=m}function Ch(s,n){const c=s.memo;if(c.length!=n.length)return!1;for(let u=0;u<c.length;u++)if(xs(c[u],n[u]))return!1;return $i>0&&St&&St.push(s),!0}const Eh="3.2.37",vg={createComponentInstance:mh,setupComponent:vh,renderComponentRoot:Ma,setCurrentRenderingInstance:Js,isVNode:Li,normalizeVNode:Mt},yg=vg,wg=null,kg=null,Ag="http://www.w3.org/2000/svg",Yi=typeof document<"u"?document:null,Ko=Yi&&Yi.createElement("template"),Sg={insert:(s,n,c)=>{n.insertBefore(s,c||null)},remove:s=>{const n=s.parentNode;n&&n.removeChild(s)},createElement:(s,n,c,u)=>{const g=n?Yi.createElementNS(Ag,s):Yi.createElement(s,c?{is:c}:void 0);return s==="select"&&u&&u.multiple!=null&&g.setAttribute("multiple",u.multiple),g},createText:s=>Yi.createTextNode(s),createComment:s=>Yi.createComment(s),setText:(s,n)=>{s.nodeValue=n},setElementText:(s,n)=>{s.textContent=n},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Yi.querySelector(s),setScopeId(s,n){s.setAttribute(n,"")},cloneNode(s){const n=s.cloneNode(!0);return"_value"in s&&(n._value=s._value),n},insertStaticContent(s,n,c,u,g,m){const w=c?c.previousSibling:n.lastChild;if(g&&(g===m||g.nextSibling))for(;n.insertBefore(g.cloneNode(!0),c),!(g===m||!(g=g.nextSibling)););else{Ko.innerHTML=u?`<svg>${s}</svg>`:s;const k=Ko.content;if(u){const P=k.firstChild;for(;P.firstChild;)k.appendChild(P.firstChild);k.removeChild(P)}n.insertBefore(k,c)}return[w?w.nextSibling:n.firstChild,c?c.previousSibling:n.lastChild]}};function Cg(s,n,c){const u=s._vtc;u&&(n=(n?[n,...u]:[...u]).join(" ")),n==null?s.removeAttribute("class"):c?s.setAttribute("class",n):s.className=n}function Eg(s,n,c){const u=s.style,g=et(c);if(c&&!g){for(const m in c)vn(u,m,c[m]);if(n&&!et(n))for(const m in n)c[m]==null&&vn(u,m,"")}else{const m=u.display;g?n!==c&&(u.cssText=c):n&&s.removeAttribute("style"),"_vod"in s&&(u.display=m)}}const Jo=/\s*!important$/;function vn(s,n,c){if(ke(c))c.forEach(u=>vn(s,n,u));else if(c==null&&(c=""),n.startsWith("--"))s.setProperty(n,c);else{const u=Pg(s,n);Jo.test(c)?s.setProperty(Zt(u),c.replace(Jo,""),"important"):s[u]=c}}const Qo=["Webkit","Moz","ms"],Or={};function Pg(s,n){const c=Or[n];if(c)return c;let u=Ot(n);if(u!=="filter"&&u in s)return Or[n]=u;u=na(u);for(let g=0;g<Qo.length;g++){const m=Qo[g]+u;if(m in s)return Or[n]=m}return n}const el="http://www.w3.org/1999/xlink";function Tg(s,n,c,u,g){if(u&&n.startsWith("xlink:"))c==null?s.removeAttributeNS(el,n.slice(6,n.length)):s.setAttributeNS(el,n,c);else{const m=Ku(n);c==null||m&&!nc(c)?s.removeAttribute(n):s.setAttribute(n,m?"":c)}}function Lg(s,n,c,u,g,m,w){if(n==="innerHTML"||n==="textContent"){u&&w(u,g,m),s[n]=c==null?"":c;return}if(n==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=c;const P=c==null?"":c;(s.value!==P||s.tagName==="OPTION")&&(s.value=P),c==null&&s.removeAttribute(n);return}let k=!1;if(c===""||c==null){const P=typeof s[n];P==="boolean"?c=nc(c):c==null&&P==="string"?(c="",k=!0):P==="number"&&(c=0,k=!0)}try{s[n]=c}catch{}k&&s.removeAttribute(n)}const[Ph,Mg]=(()=>{let s=Date.now,n=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(s=performance.now.bind(performance));const c=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(c&&Number(c[1])<=53)}return[s,n]})();let yn=0;const _g=Promise.resolve(),Ig=()=>{yn=0},Rg=()=>yn||(_g.then(Ig),yn=Ph());function ni(s,n,c,u){s.addEventListener(n,c,u)}function Og(s,n,c,u){s.removeEventListener(n,c,u)}function Fg(s,n,c,u,g=null){const m=s._vei||(s._vei={}),w=m[n];if(u&&w)w.value=u;else{const[k,P]=zg(n);if(u){const I=m[n]=Ng(u,g);ni(s,k,I,P)}else w&&(Og(s,k,w,P),m[n]=void 0)}}const tl=/(?:Once|Passive|Capture)$/;function zg(s){let n;if(tl.test(s)){n={};let c;for(;c=s.match(tl);)s=s.slice(0,s.length-c[0].length),n[c[0].toLowerCase()]=!0}return[Zt(s.slice(2)),n]}function Ng(s,n){const c=u=>{const g=u.timeStamp||Ph();(Mg||g>=c.attached-1)&&It(Dg(u,c.value),n,5,[u])};return c.value=s,c.attached=Rg(),c}function Dg(s,n){if(ke(n)){const c=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{c.call(s),s._stopped=!0},n.map(u=>g=>!g._stopped&&u&&u(g))}else return n}const il=/^on[a-z]/,Xg=(s,n,c,u,g=!1,m,w,k,P)=>{n==="class"?Cg(s,u,g):n==="style"?Eg(s,c,u):aa(n)?In(n)||Fg(s,n,c,u,w):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Hg(s,n,u,g))?Lg(s,n,u,m,w,k,P):(n==="true-value"?s._trueValue=u:n==="false-value"&&(s._falseValue=u),Tg(s,n,u,g))};function Hg(s,n,c,u){return u?!!(n==="innerHTML"||n==="textContent"||n in s&&il.test(n)&&_e(c)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&s.tagName==="INPUT"||n==="type"&&s.tagName==="TEXTAREA"||il.test(n)&&et(c)?!1:n in s}function Th(s,n){const c=li(s);class u extends pr{constructor(m){super(c,m,n)}}return u.def=c,u}const Yg=s=>Th(s,Wh),Bg=typeof HTMLElement<"u"?HTMLElement:class{};class pr extends Bg{constructor(n,c={},u){super(),this._def=n,this._props=c,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&u?u(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,bs(()=>{this._connected||(kn(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let u=0;u<this.attributes.length;u++)this._setAttr(this.attributes[u].name);new MutationObserver(u=>{for(const g of u)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const n=u=>{const{props:g,styles:m}=u,w=!ke(g),k=g?w?Object.keys(g):g:[];let P;if(w)for(const I in this._props){const O=g[I];(O===Number||O&&O.type===Number)&&(this._props[I]=Ei(this._props[I]),(P||(P=Object.create(null)))[I]=!0)}this._numberProps=P;for(const I of Object.keys(this))I[0]!=="_"&&this._setProp(I,this[I],!0,!1);for(const I of k.map(Ot))Object.defineProperty(this,I,{get(){return this._getProp(I)},set(O){this._setProp(I,O)}});this._applyStyles(m),this._update()},c=this._def.__asyncLoader;c?c().then(n):n(this._def)}_setAttr(n){let c=this.getAttribute(n);this._numberProps&&this._numberProps[n]&&(c=Ei(c)),this._setProp(Ot(n),c,!1)}_getProp(n){return this._props[n]}_setProp(n,c,u=!0,g=!0){c!==this._props[n]&&(this._props[n]=c,g&&this._instance&&this._update(),u&&(c===!0?this.setAttribute(Zt(n),""):typeof c=="string"||typeof c=="number"?this.setAttribute(Zt(n),c+""):c||this.removeAttribute(Zt(n))))}_update(){kn(this._createVNode(),this.shadowRoot)}_createVNode(){const n=Fe(this._def,tt({},this._props));return this._instance||(n.ce=c=>{this._instance=c,c.isCE=!0,c.emit=(g,...m)=>{this.dispatchEvent(new CustomEvent(g,{detail:m}))};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof pr){c.parent=u._instance;break}}),n}_applyStyles(n){n&&n.forEach(c=>{const u=document.createElement("style");u.textContent=c,this.shadowRoot.appendChild(u)})}}function Wg(s="$style"){{const n=ti();if(!n)return Be;const c=n.type.__cssModules;if(!c)return Be;const u=c[s];return u||Be}}function Vg(s){const n=ti();if(!n)return;const c=()=>wn(n.subTree,s(n.proxy));Nc(c),ha(()=>{const u=new MutationObserver(c);u.observe(n.subTree.el.parentNode,{childList:!0}),ua(()=>u.disconnect())})}function wn(s,n){if(s.shapeFlag&128){const c=s.suspense;s=c.activeBranch,c.pendingBranch&&!c.isHydrating&&c.effects.push(()=>{wn(c.activeBranch,n)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)sl(s.el,n);else if(s.type===st)s.children.forEach(c=>wn(c,n));else if(s.type===Gi){let{el:c,anchor:u}=s;for(;c&&(sl(c,n),c!==u);)c=c.nextSibling}}function sl(s,n){if(s.nodeType===1){const c=s.style;for(const u in n)c.setProperty(`--${u}`,n[u])}}const gi="transition",Ms="animation",xr=(s,{slots:n})=>gr(Kn,Mh(s),n);xr.displayName="Transition";const Lh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jg=xr.props=tt({},Kn.props,Lh),Di=(s,n=[])=>{ke(s)?s.forEach(c=>c(...n)):s&&s(...n)},al=s=>s?ke(s)?s.some(n=>n.length>1):s.length>1:!1;function Mh(s){const n={};for(const se in s)se in Lh||(n[se]=s[se]);if(s.css===!1)return n;const{name:c="v",type:u,duration:g,enterFromClass:m=`${c}-enter-from`,enterActiveClass:w=`${c}-enter-active`,enterToClass:k=`${c}-enter-to`,appearFromClass:P=m,appearActiveClass:I=w,appearToClass:O=k,leaveFromClass:N=`${c}-leave-from`,leaveActiveClass:z=`${c}-leave-active`,leaveToClass:W=`${c}-leave-to`}=s,q=Gg(g),K=q&&q[0],ee=q&&q[1],{onBeforeEnter:V,onEnter:T,onEnterCancelled:j,onLeave:Z,onLeaveCancelled:H,onBeforeAppear:ce=V,onAppear:J=T,onAppearCancelled:ie=j}=n,ne=(se,ye,ge)=>{mi(se,ye?O:k),mi(se,ye?I:w),ge&&ge()},Q=(se,ye)=>{se._isLeaving=!1,mi(se,N),mi(se,W),mi(se,z),ye&&ye()},le=se=>(ye,ge)=>{const Ve=se?J:T,Le=()=>ne(ye,se,ge);Di(Ve,[ye,Le]),rl(()=>{mi(ye,se?P:m),ai(ye,se?O:k),al(Ve)||nl(ye,u,K,Le)})};return tt(n,{onBeforeEnter(se){Di(V,[se]),ai(se,m),ai(se,w)},onBeforeAppear(se){Di(ce,[se]),ai(se,P),ai(se,I)},onEnter:le(!1),onAppear:le(!0),onLeave(se,ye){se._isLeaving=!0;const ge=()=>Q(se,ye);ai(se,N),Ih(),ai(se,z),rl(()=>{!se._isLeaving||(mi(se,N),ai(se,W),al(Z)||nl(se,u,ee,ge))}),Di(Z,[se,ge])},onEnterCancelled(se){ne(se,!1),Di(j,[se])},onAppearCancelled(se){ne(se,!0),Di(ie,[se])},onLeaveCancelled(se){Q(se),Di(H,[se])}})}function Gg(s){if(s==null)return null;if(it(s))return[Fr(s.enter),Fr(s.leave)];{const n=Fr(s);return[n,n]}}function Fr(s){return Ei(s)}function ai(s,n){n.split(/\s+/).forEach(c=>c&&s.classList.add(c)),(s._vtc||(s._vtc=new Set)).add(n)}function mi(s,n){n.split(/\s+/).forEach(u=>u&&s.classList.remove(u));const{_vtc:c}=s;c&&(c.delete(n),c.size||(s._vtc=void 0))}function rl(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let Ug=0;function nl(s,n,c,u){const g=s._endId=++Ug,m=()=>{g===s._endId&&u()};if(c)return setTimeout(m,c);const{type:w,timeout:k,propCount:P}=_h(s,n);if(!w)return u();const I=w+"end";let O=0;const N=()=>{s.removeEventListener(I,z),m()},z=W=>{W.target===s&&++O>=P&&N()};setTimeout(()=>{O<P&&N()},k+1),s.addEventListener(I,z)}function _h(s,n){const c=window.getComputedStyle(s),u=q=>(c[q]||"").split(", "),g=u(gi+"Delay"),m=u(gi+"Duration"),w=ol(g,m),k=u(Ms+"Delay"),P=u(Ms+"Duration"),I=ol(k,P);let O=null,N=0,z=0;n===gi?w>0&&(O=gi,N=w,z=m.length):n===Ms?I>0&&(O=Ms,N=I,z=P.length):(N=Math.max(w,I),O=N>0?w>I?gi:Ms:null,z=O?O===gi?m.length:P.length:0);const W=O===gi&&/\b(transform|all)(,|$)/.test(c[gi+"Property"]);return{type:O,timeout:N,propCount:z,hasTransform:W}}function ol(s,n){for(;s.length<n.length;)s=s.concat(s);return Math.max(...n.map((c,u)=>ll(c)+ll(s[u])))}function ll(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function Ih(){return document.body.offsetHeight}const Rh=new WeakMap,Oh=new WeakMap,$g={name:"TransitionGroup",props:tt({},jg,{tag:String,moveClass:String}),setup(s,{slots:n}){const c=ti(),u=Zn();let g,m;return cr(()=>{if(!g.length)return;const w=s.moveClass||`${s.name||"v"}-move`;if(!Qg(g[0].el,c.vnode.el,w))return;g.forEach(Zg),g.forEach(Kg);const k=g.filter(Jg);Ih(),k.forEach(P=>{const I=P.el,O=I.style;ai(I,w),O.transform=O.webkitTransform=O.transitionDuration="";const N=I._moveCb=z=>{z&&z.target!==I||(!z||/transform$/.test(z.propertyName))&&(I.removeEventListener("transitionend",N),I._moveCb=null,mi(I,w))};I.addEventListener("transitionend",N)})}),()=>{const w=Ie(s),k=Mh(w);let P=w.tag||st;g=m,m=n.default?or(n.default()):[];for(let I=0;I<m.length;I++){const O=m[I];O.key!=null&&Ui(O,vs(O,k,u,c))}if(g)for(let I=0;I<g.length;I++){const O=g[I];Ui(O,vs(O,k,u,c)),Rh.set(O,O.el.getBoundingClientRect())}return Fe(P,null,m)}}},qg=$g;function Zg(s){const n=s.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function Kg(s){Oh.set(s,s.el.getBoundingClientRect())}function Jg(s){const n=Rh.get(s),c=Oh.get(s),u=n.left-c.left,g=n.top-c.top;if(u||g){const m=s.el.style;return m.transform=m.webkitTransform=`translate(${u}px,${g}px)`,m.transitionDuration="0s",s}}function Qg(s,n,c){const u=s.cloneNode();s._vtc&&s._vtc.forEach(w=>{w.split(/\s+/).forEach(k=>k&&u.classList.remove(k))}),c.split(/\s+/).forEach(w=>w&&u.classList.add(w)),u.style.display="none";const g=n.nodeType===1?n:n.parentNode;g.appendChild(u);const{hasTransform:m}=_h(u);return g.removeChild(u),m}const _i=s=>{const n=s.props["onUpdate:modelValue"]||!1;return ke(n)?c=>gs(n,c):n};function ep(s){s.target.composing=!0}function cl(s){const n=s.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Ga={created(s,{modifiers:{lazy:n,trim:c,number:u}},g){s._assign=_i(g);const m=u||g.props&&g.props.type==="number";ni(s,n?"change":"input",w=>{if(w.target.composing)return;let k=s.value;c&&(k=k.trim()),m&&(k=Ei(k)),s._assign(k)}),c&&ni(s,"change",()=>{s.value=s.value.trim()}),n||(ni(s,"compositionstart",ep),ni(s,"compositionend",cl),ni(s,"change",cl))},mounted(s,{value:n}){s.value=n==null?"":n},beforeUpdate(s,{value:n,modifiers:{lazy:c,trim:u,number:g}},m){if(s._assign=_i(m),s.composing||document.activeElement===s&&s.type!=="range"&&(c||u&&s.value.trim()===n||(g||s.type==="number")&&Ei(s.value)===n))return;const w=n==null?"":n;s.value!==w&&(s.value=w)}},ao={deep:!0,created(s,n,c){s._assign=_i(c),ni(s,"change",()=>{const u=s._modelValue,g=ks(s),m=s.checked,w=s._assign;if(ke(u)){const k=Ka(u,g),P=k!==-1;if(m&&!P)w(u.concat(g));else if(!m&&P){const I=[...u];I.splice(k,1),w(I)}}else if(Zi(u)){const k=new Set(u);m?k.add(g):k.delete(g),w(k)}else w(zh(s,m))})},mounted:hl,beforeUpdate(s,n,c){s._assign=_i(c),hl(s,n,c)}};function hl(s,{value:n,oldValue:c},u){s._modelValue=n,ke(n)?s.checked=Ka(n,u.props.value)>-1:Zi(n)?s.checked=n.has(u.props.value):n!==c&&(s.checked=Ci(n,zh(s,!0)))}const ro={created(s,{value:n},c){s.checked=Ci(n,c.props.value),s._assign=_i(c),ni(s,"change",()=>{s._assign(ks(s))})},beforeUpdate(s,{value:n,oldValue:c},u){s._assign=_i(u),n!==c&&(s.checked=Ci(n,u.props.value))}},Fh={deep:!0,created(s,{value:n,modifiers:{number:c}},u){const g=Zi(n);ni(s,"change",()=>{const m=Array.prototype.filter.call(s.options,w=>w.selected).map(w=>c?Ei(ks(w)):ks(w));s._assign(s.multiple?g?new Set(m):m:m[0])}),s._assign=_i(u)},mounted(s,{value:n}){ul(s,n)},beforeUpdate(s,n,c){s._assign=_i(c)},updated(s,{value:n}){ul(s,n)}};function ul(s,n){const c=s.multiple;if(!(c&&!ke(n)&&!Zi(n))){for(let u=0,g=s.options.length;u<g;u++){const m=s.options[u],w=ks(m);if(c)ke(n)?m.selected=Ka(n,w)>-1:m.selected=n.has(w);else if(Ci(ks(m),n)){s.selectedIndex!==u&&(s.selectedIndex=u);return}}!c&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function ks(s){return"_value"in s?s._value:s.value}function zh(s,n){const c=n?"_trueValue":"_falseValue";return c in s?s[c]:n}const Nh={created(s,n,c){Ca(s,n,c,null,"created")},mounted(s,n,c){Ca(s,n,c,null,"mounted")},beforeUpdate(s,n,c,u){Ca(s,n,c,u,"beforeUpdate")},updated(s,n,c,u){Ca(s,n,c,u,"updated")}};function Dh(s,n){switch(s){case"SELECT":return Fh;case"TEXTAREA":return Ga;default:switch(n){case"checkbox":return ao;case"radio":return ro;default:return Ga}}}function Ca(s,n,c,u,g){const w=Dh(s.tagName,c.props&&c.props.type)[g];w&&w(s,n,c,u)}function tp(){Ga.getSSRProps=({value:s})=>({value:s}),ro.getSSRProps=({value:s},n)=>{if(n.props&&Ci(n.props.value,s))return{checked:!0}},ao.getSSRProps=({value:s},n)=>{if(ke(s)){if(n.props&&Ka(s,n.props.value)>-1)return{checked:!0}}else if(Zi(s)){if(n.props&&s.has(n.props.value))return{checked:!0}}else if(s)return{checked:!0}},Nh.getSSRProps=(s,n)=>{if(typeof n.type!="string")return;const c=Dh(n.type.toUpperCase(),n.props&&n.props.type);if(c.getSSRProps)return c.getSSRProps(s,n)}}const ip=["ctrl","shift","alt","meta"],sp={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,n)=>ip.some(c=>s[`${c}Key`]&&!n.includes(c))},ap=(s,n)=>(c,...u)=>{for(let g=0;g<n.length;g++){const m=sp[n[g]];if(m&&m(c,n))return}return s(c,...u)},rp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},np=(s,n)=>c=>{if(!("key"in c))return;const u=Zt(c.key);if(n.some(g=>g===u||rp[g]===u))return s(c)},Xh={beforeMount(s,{value:n},{transition:c}){s._vod=s.style.display==="none"?"":s.style.display,c&&n?c.beforeEnter(s):_s(s,n)},mounted(s,{value:n},{transition:c}){c&&n&&c.enter(s)},updated(s,{value:n,oldValue:c},{transition:u}){!n!=!c&&(u?n?(u.beforeEnter(s),_s(s,!0),u.enter(s)):u.leave(s,()=>{_s(s,!1)}):_s(s,n))},beforeUnmount(s,{value:n}){_s(s,n)}};function _s(s,n){s.style.display=n?s._vod:"none"}function op(){Xh.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}const Hh=tt({patchProp:Xg},Sg);let Gs,dl=!1;function Yh(){return Gs||(Gs=lh(Hh))}function Bh(){return Gs=dl?Gs:ch(Hh),dl=!0,Gs}const kn=(...s)=>{Yh().render(...s)},Wh=(...s)=>{Bh().hydrate(...s)},Vh=(...s)=>{const n=Yh().createApp(...s),{mount:c}=n;return n.mount=u=>{const g=jh(u);if(!g)return;const m=n._component;!_e(m)&&!m.render&&!m.template&&(m.template=g.innerHTML),g.innerHTML="";const w=c(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),w},n},lp=(...s)=>{const n=Bh().createApp(...s),{mount:c}=n;return n.mount=u=>{const g=jh(u);if(g)return c(g,!0,g instanceof SVGElement)},n};function jh(s){return et(s)?document.querySelector(s):s}let fl=!1;const cp=()=>{fl||(fl=!0,tp(),op())},hp=()=>{},up=Object.freeze(Object.defineProperty({__proto__:null,compile:hp,EffectScope:zn,ReactiveEffect:oa,customRef:jd,effect:gd,effectScope:Nn,getCurrentScope:hd,isProxy:Yn,isReactive:Kt,isReadonly:ms,isRef:Qe,isShallow:Da,markRaw:Lt,onScopeDispose:ud,proxyRefs:Vn,reactive:Ii,readonly:Hn,ref:Ct,shallowReactive:Ac,shallowReadonly:Hd,shallowRef:Sc,stop:pd,toRaw:Ie,toRef:Xs,toRefs:on,triggerRef:Bd,unref:Ue,camelize:Ot,capitalize:na,normalizeClass:qt,normalizeProps:td,normalizeStyle:sa,toDisplayString:tn,toHandlerKey:Ds,BaseTransition:Kn,Comment:mt,Fragment:st,KeepAlive:Af,Static:Gi,Suspense:ff,Teleport:qf,Text:ys,callWithAsyncErrorHandling:It,callWithErrorHandling:Jt,cloneVNode:ei,compatUtils:kg,computed:We,createBlock:Ti,createCommentVNode:ph,createElementBlock:at,createElementVNode:De,createHydrationRenderer:ch,createPropsRestProxy:gg,createRenderer:lh,createSlots:Tf,createStaticVNode:io,createTextVNode:dr,createVNode:Fe,defineAsyncComponent:wf,defineComponent:li,defineEmits:lg,defineExpose:cg,defineProps:og,get devtools(){return ls},getCurrentInstance:ti,getTransitionRawChildren:or,guardReactiveProps:gh,h:gr,handleError:Qi,initCustomFormatter:mg,inject:Rt,isMemoSame:Ch,isRuntimeOnly:ig,isVNode:Li,mergeDefaults:fg,mergeProps:xh,nextTick:bs,onActivated:Hc,onBeforeMount:Wc,onBeforeUnmount:hr,onBeforeUpdate:Vc,onDeactivated:Yc,onErrorCaptured:$c,onMounted:ha,onRenderTracked:Uc,onRenderTriggered:Gc,onServerPrefetch:jc,onUnmounted:ua,onUpdated:cr,openBlock:Ke,popScopeId:nf,provide:Ws,pushScopeId:rf,queuePostFlushCb:Un,registerRuntimeCompiler:tg,renderList:Jc,renderSlot:Lf,resolveComponent:qc,resolveDirective:Pf,resolveDynamicComponent:Kc,resolveFilter:wg,resolveTransitionHooks:vs,setBlockTracking:xn,setDevtoolsHook:Ic,setTransitionHooks:Ui,ssrContextKey:Sh,ssrUtils:yg,toHandlers:Mf,transformVNodeArgs:Zf,useAttrs:dg,useSSRContext:xg,useSlots:ug,useTransitionState:Zn,version:Eh,warn:Ec,watch:Ai,watchEffect:zc,watchPostEffect:Nc,watchSyncEffect:bf,withAsyncContext:pg,withCtx:Qs,withDefaults:hg,withDirectives:Cf,withMemo:bg,withScopeId:of,Transition:xr,TransitionGroup:qg,VueElement:pr,createApp:Vh,createSSRApp:lp,defineCustomElement:Th,defineSSRCustomElement:Yg,hydrate:Wh,initDirectivesForSSR:cp,render:kn,useCssModule:Wg,useCssVars:Vg,vModelCheckbox:ao,vModelDynamic:Nh,vModelRadio:ro,vModelSelect:Fh,vModelText:Ga,vShow:Xh,withKeys:np,withModifiers:ap},Symbol.toStringTag,{value:"Module"}));var dp=!1;function Ea(s,n,c){return Array.isArray(s)?(s.length=Math.max(s.length,n),s.splice(n,1,c),c):(s[n]=c,c)}function zr(s,n){if(Array.isArray(s)){s.splice(n,1);return}delete s[n]}function fp(){return Gh().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Gh(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const gp=typeof Proxy=="function",pp="devtools-plugin:setup",xp="plugin:settings:set";let ts,An;function mp(){var s;return ts!==void 0||(typeof window<"u"&&window.performance?(ts=!0,An=window.performance):typeof global<"u"&&((s=global.perf_hooks)===null||s===void 0?void 0:s.performance)?(ts=!0,An=global.perf_hooks.performance):ts=!1),ts}function bp(){return mp()?An.now():Date.now()}class vp{constructor(n,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=c;const u={};if(n.settings)for(const w in n.settings){const k=n.settings[w];u[w]=k.defaultValue}const g=`__vue-devtools-plugin-settings__${n.id}`;let m=Object.assign({},u);try{const w=localStorage.getItem(g),k=JSON.parse(w);Object.assign(m,k)}catch{}this.fallbacks={getSettings(){return m},setSettings(w){try{localStorage.setItem(g,JSON.stringify(w))}catch{}m=w},now(){return bp()}},c&&c.on(xp,(w,k)=>{w===this.plugin.id&&this.fallbacks.setSettings(k)}),this.proxiedOn=new Proxy({},{get:(w,k)=>this.target?this.target.on[k]:(...P)=>{this.onQueue.push({method:k,args:P})}}),this.proxiedTarget=new Proxy({},{get:(w,k)=>this.target?this.target[k]:k==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(k)?(...P)=>(this.targetQueue.push({method:k,args:P,resolve:()=>{}}),this.fallbacks[k](...P)):(...P)=>new Promise(I=>{this.targetQueue.push({method:k,args:P,resolve:I})})})}async setRealTarget(n){this.target=n;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function Uh(s,n){const c=s,u=Gh(),g=fp(),m=gp&&c.enableEarlyProxy;if(g&&(u.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!m))g.emit(pp,s,n);else{const w=m?new vp(c,g):null;(u.__VUE_DEVTOOLS_PLUGINS__=u.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:c,setupFn:n,proxy:w}),w&&n(w.proxiedTarget)}}/*!
  * pinia v2.0.18
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Sn;const ta=s=>Sn=s,$h=Symbol("pinia");function qi(s){return s&&typeof s=="object"&&Object.prototype.toString.call(s)==="[object Object]"&&typeof s.toJSON!="function"}var Qt;(function(s){s.direct="direct",s.patchObject="patch object",s.patchFunction="patch function"})(Qt||(Qt={}));const wi=typeof window<"u",gl=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function yp(s,{autoBom:n=!1}={}){return n&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type)?new Blob([String.fromCharCode(65279),s],{type:s.type}):s}function no(s,n,c){const u=new XMLHttpRequest;u.open("GET",s),u.responseType="blob",u.onload=function(){Kh(u.response,n,c)},u.onerror=function(){console.error("could not download file")},u.send()}function qh(s){const n=new XMLHttpRequest;n.open("HEAD",s,!1);try{n.send()}catch{}return n.status>=200&&n.status<=299}function Ia(s){try{s.dispatchEvent(new MouseEvent("click"))}catch{const c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),s.dispatchEvent(c)}}const Ra=typeof navigator=="object"?navigator:{userAgent:""},Zh=(()=>/Macintosh/.test(Ra.userAgent)&&/AppleWebKit/.test(Ra.userAgent)&&!/Safari/.test(Ra.userAgent))(),Kh=wi?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!Zh?wp:"msSaveOrOpenBlob"in Ra?kp:Ap:()=>{};function wp(s,n="download",c){const u=document.createElement("a");u.download=n,u.rel="noopener",typeof s=="string"?(u.href=s,u.origin!==location.origin?qh(u.href)?no(s,n,c):(u.target="_blank",Ia(u)):Ia(u)):(u.href=URL.createObjectURL(s),setTimeout(function(){URL.revokeObjectURL(u.href)},4e4),setTimeout(function(){Ia(u)},0))}function kp(s,n="download",c){if(typeof s=="string")if(qh(s))no(s,n,c);else{const u=document.createElement("a");u.href=s,u.target="_blank",setTimeout(function(){Ia(u)})}else navigator.msSaveOrOpenBlob(yp(s,c),n)}function Ap(s,n,c,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof s=="string")return no(s,n,c);const g=s.type==="application/octet-stream",m=/constructor/i.test(String(gl.HTMLElement))||"safari"in gl,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||g&&m||Zh)&&typeof FileReader<"u"){const k=new FileReader;k.onloadend=function(){let P=k.result;if(typeof P!="string")throw u=null,new Error("Wrong reader.result type");P=w?P:P.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=P:location.assign(P),u=null},k.readAsDataURL(s)}else{const k=URL.createObjectURL(s);u?u.location.assign(k):location.href=k,u=null,setTimeout(function(){URL.revokeObjectURL(k)},4e4)}}function ct(s,n){const c="\u{1F34D} "+s;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(c,n):n==="error"?console.error(c):n==="warn"?console.warn(c):console.log(c)}function oo(s){return"_a"in s&&"install"in s}function Jh(){if(!("clipboard"in navigator))return ct("Your browser doesn't support the Clipboard API","error"),!0}function Qh(s){return s instanceof Error&&s.message.toLowerCase().includes("document is not focused")?(ct('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function Sp(s){if(!Jh())try{await navigator.clipboard.writeText(JSON.stringify(s.state.value)),ct("Global state copied to clipboard.")}catch(n){if(Qh(n))return;ct("Failed to serialize the state. Check the console for more details.","error"),console.error(n)}}async function Cp(s){if(!Jh())try{s.state.value=JSON.parse(await navigator.clipboard.readText()),ct("Global state pasted from clipboard.")}catch(n){if(Qh(n))return;ct("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(n)}}async function Ep(s){try{Kh(new Blob([JSON.stringify(s.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(n){ct("Failed to export the state as JSON. Check the console for more details.","error"),console.error(n)}}let ii;function Pp(){ii||(ii=document.createElement("input"),ii.type="file",ii.accept=".json");function s(){return new Promise((n,c)=>{ii.onchange=async()=>{const u=ii.files;if(!u)return n(null);const g=u.item(0);return n(g?{text:await g.text(),file:g}:null)},ii.oncancel=()=>n(null),ii.onerror=c,ii.click()})}return s}async function Tp(s){try{const c=await(await Pp())();if(!c)return;const{text:u,file:g}=c;s.state.value=JSON.parse(u),ct(`Global state imported from "${g.name}".`)}catch(n){ct("Failed to export the state as JSON. Check the console for more details.","error"),console.error(n)}}function Yt(s){return{_custom:{display:s}}}const eu="\u{1F34D} Pinia (root)",Cn="_root";function Lp(s){return oo(s)?{id:Cn,label:eu}:{id:s.$id,label:s.$id}}function Mp(s){if(oo(s)){const c=Array.from(s._s.keys()),u=s._s;return{state:c.map(m=>({editable:!0,key:m,value:s.state.value[m]})),getters:c.filter(m=>u.get(m)._getters).map(m=>{const w=u.get(m);return{editable:!1,key:m,value:w._getters.reduce((k,P)=>(k[P]=w[P],k),{})}})}}const n={state:Object.keys(s.$state).map(c=>({editable:!0,key:c,value:s.$state[c]}))};return s._getters&&s._getters.length&&(n.getters=s._getters.map(c=>({editable:!1,key:c,value:s[c]}))),s._customProperties.size&&(n.customProperties=Array.from(s._customProperties).map(c=>({editable:!0,key:c,value:s[c]}))),n}function _p(s){return s?Array.isArray(s)?s.reduce((n,c)=>(n.keys.push(c.key),n.operations.push(c.type),n.oldValue[c.key]=c.oldValue,n.newValue[c.key]=c.newValue,n),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Yt(s.type),key:Yt(s.key),oldValue:s.oldValue,newValue:s.newValue}:{}}function Ip(s){switch(s){case Qt.direct:return"mutation";case Qt.patchFunction:return"$patch";case Qt.patchObject:return"$patch";default:return"unknown"}}let hs=!0;const Oa=[],Hi="pinia:mutations",pt="pinia",Ua=s=>"\u{1F34D} "+s;function Rp(s,n){Uh({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Oa,app:s},c=>{typeof c.now!="function"&&ct("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),c.addTimelineLayer({id:Hi,label:"Pinia \u{1F34D}",color:15064968}),c.addInspector({id:pt,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{Sp(n)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await Cp(n),c.sendInspectorTree(pt),c.sendInspectorState(pt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{Ep(n)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await Tp(n),c.sendInspectorTree(pt),c.sendInspectorState(pt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:u=>{const g=n._s.get(u);g?g._isOptionsAPI?(g.$reset(),ct(`Store "${u}" reset.`)):ct(`Cannot reset "${u}" store because it's a setup store.`,"warn"):ct(`Cannot reset "${u}" store because it wasn't found.`,"warn")}}]}),c.on.inspectComponent((u,g)=>{const m=u.componentInstance&&u.componentInstance.proxy;if(m&&m._pStores){const w=u.componentInstance.proxy._pStores;Object.values(w).forEach(k=>{u.instanceData.state.push({type:Ua(k.$id),key:"state",editable:!0,value:k._isOptionsAPI?{_custom:{value:Ie(k.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>k.$reset()}]}}:Object.keys(k.$state).reduce((P,I)=>(P[I]=k.$state[I],P),{})}),k._getters&&k._getters.length&&u.instanceData.state.push({type:Ua(k.$id),key:"getters",editable:!1,value:k._getters.reduce((P,I)=>{try{P[I]=k[I]}catch(O){P[I]=O}return P},{})})})}}),c.on.getInspectorTree(u=>{if(u.app===s&&u.inspectorId===pt){let g=[n];g=g.concat(Array.from(n._s.values())),u.rootNodes=(u.filter?g.filter(m=>"$id"in m?m.$id.toLowerCase().includes(u.filter.toLowerCase()):eu.toLowerCase().includes(u.filter.toLowerCase())):g).map(Lp)}}),c.on.getInspectorState(u=>{if(u.app===s&&u.inspectorId===pt){const g=u.nodeId===Cn?n:n._s.get(u.nodeId);if(!g)return;g&&(u.state=Mp(g))}}),c.on.editInspectorState((u,g)=>{if(u.app===s&&u.inspectorId===pt){const m=u.nodeId===Cn?n:n._s.get(u.nodeId);if(!m)return ct(`store "${u.nodeId}" not found`,"error");const{path:w}=u;oo(m)?w.unshift("state"):(w.length!==1||!m._customProperties.has(w[0])||w[0]in m.$state)&&w.unshift("$state"),hs=!1,u.set(m,w,u.state.value),hs=!0}}),c.on.editComponentState(u=>{if(u.type.startsWith("\u{1F34D}")){const g=u.type.replace(/^🍍\s*/,""),m=n._s.get(g);if(!m)return ct(`store "${g}" not found`,"error");const{path:w}=u;if(w[0]!=="state")return ct(`Invalid path for store "${g}":
${w}
Only state can be modified.`);w[0]="$state",hs=!1,u.set(m,w,u.state.value),hs=!0}})})}function Op(s,n){Oa.includes(Ua(n.$id))||Oa.push(Ua(n.$id)),Uh({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Oa,app:s,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},c=>{const u=typeof c.now=="function"?c.now.bind(c):Date.now;n.$onAction(({after:w,onError:k,name:P,args:I})=>{const O=tu++;c.addTimelineEvent({layerId:Hi,event:{time:u(),title:"\u{1F6EB} "+P,subtitle:"start",data:{store:Yt(n.$id),action:Yt(P),args:I},groupId:O}}),w(N=>{Bi=void 0,c.addTimelineEvent({layerId:Hi,event:{time:u(),title:"\u{1F6EC} "+P,subtitle:"end",data:{store:Yt(n.$id),action:Yt(P),args:I,result:N},groupId:O}})}),k(N=>{Bi=void 0,c.addTimelineEvent({layerId:Hi,event:{time:u(),logType:"error",title:"\u{1F4A5} "+P,subtitle:"end",data:{store:Yt(n.$id),action:Yt(P),args:I,error:N},groupId:O}})})},!0),n._customProperties.forEach(w=>{Ai(()=>Ue(n[w]),(k,P)=>{c.notifyComponentUpdate(),c.sendInspectorState(pt),hs&&c.addTimelineEvent({layerId:Hi,event:{time:u(),title:"Change",subtitle:w,data:{newValue:k,oldValue:P},groupId:Bi}})},{deep:!0})}),n.$subscribe(({events:w,type:k},P)=>{if(c.notifyComponentUpdate(),c.sendInspectorState(pt),!hs)return;const I={time:u(),title:Ip(k),data:{store:Yt(n.$id),..._p(w)},groupId:Bi};Bi=void 0,k===Qt.patchFunction?I.subtitle="\u2935\uFE0F":k===Qt.patchObject?I.subtitle="\u{1F9E9}":w&&!Array.isArray(w)&&(I.subtitle=w.type),w&&(I.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:w}}),c.addTimelineEvent({layerId:Hi,event:I})},{detached:!0,flush:"sync"});const g=n._hotUpdate;n._hotUpdate=Lt(w=>{g(w),c.addTimelineEvent({layerId:Hi,event:{time:u(),title:"\u{1F525} "+n.$id,subtitle:"HMR update",data:{store:Yt(n.$id),info:Yt("HMR update")}}}),c.notifyComponentUpdate(),c.sendInspectorTree(pt),c.sendInspectorState(pt)});const{$dispose:m}=n;n.$dispose=()=>{m(),c.notifyComponentUpdate(),c.sendInspectorTree(pt),c.sendInspectorState(pt),c.getSettings().logStoreChanges&&ct(`Disposed "${n.$id}" store \u{1F5D1}`)},c.notifyComponentUpdate(),c.sendInspectorTree(pt),c.sendInspectorState(pt),c.getSettings().logStoreChanges&&ct(`"${n.$id}" store installed \u{1F195}`)})}let tu=0,Bi;function pl(s,n){const c=n.reduce((u,g)=>(u[g]=Ie(s)[g],u),{});for(const u in c)s[u]=function(){const g=tu,m=new Proxy(s,{get(...w){return Bi=g,Reflect.get(...w)},set(...w){return Bi=g,Reflect.set(...w)}});return c[u].apply(m,arguments)}}function Fp({app:s,store:n,options:c}){if(!n.$id.startsWith("__hot:")){if(c.state&&(n._isOptionsAPI=!0),typeof c.state=="function"){pl(n,Object.keys(c.actions));const u=n._hotUpdate;Ie(n)._hotUpdate=function(g){u.apply(this,arguments),pl(n,Object.keys(g._hmrPayload.actions))}}Op(s,n)}}function zp(){const s=Nn(!0),n=s.run(()=>Ct({}));let c=[],u=[];const g=Lt({install(m){ta(g),g._a=m,m.provide($h,g),m.config.globalProperties.$pinia=g,wi&&Rp(m,g),u.forEach(w=>c.push(w)),u=[]},use(m){return!this._a&&!dp?u.push(m):c.push(m),this},_p:c,_a:null,_e:s,_s:new Map,state:n});return wi&&!0&&typeof Proxy<"u"&&g.use(Fp),g}function iu(s,n){for(const c in n){const u=n[c];if(!(c in s))continue;const g=s[c];qi(g)&&qi(u)&&!Qe(u)&&!Kt(u)?s[c]=iu(g,u):s[c]=u}return s}const Np=()=>{};function xl(s,n,c,u=Np){s.push(n);const g=()=>{const m=s.indexOf(n);m>-1&&(s.splice(m,1),u())};return!c&&ti()&&ua(g),g}function is(s,...n){s.slice().forEach(c=>{c(...n)})}function En(s,n){for(const c in n){if(!n.hasOwnProperty(c))continue;const u=n[c],g=s[c];qi(g)&&qi(u)&&s.hasOwnProperty(c)&&!Qe(u)&&!Kt(u)?s[c]=En(g,u):s[c]=u}return s}const Dp=Symbol("pinia:skipHydration");function Xp(s){return!qi(s)||!s.hasOwnProperty(Dp)}const{assign:Bt}=Object;function ml(s){return!!(Qe(s)&&s.effect)}function bl(s,n,c,u){const{state:g,actions:m,getters:w}=n,k=c.state.value[s];let P;function I(){!k&&!u&&(c.state.value[s]=g?g():{});const O=on(u?Ct(g?g():{}).value:c.state.value[s]);return Bt(O,m,Object.keys(w||{}).reduce((N,z)=>(z in O&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${z}" in store "${s}".`),N[z]=Lt(We(()=>{ta(c);const W=c._s.get(s);return w[z].call(W,W)})),N),{}))}return P=Pn(s,I,n,c,u,!0),P.$reset=function(){const N=g?g():{};this.$patch(z=>{Bt(z,N)})},P}function Pn(s,n,c={},u,g,m){let w;const k=Bt({actions:{}},c);if(!u._e.active)throw new Error("Pinia destroyed");const P={deep:!0};P.onTrigger=ne=>{I?W=ne:I==!1&&!J._hotUpdating&&(Array.isArray(W)?W.push(ne):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let I,O,N=Lt([]),z=Lt([]),W;const q=u.state.value[s];!m&&!q&&!g&&(u.state.value[s]={});const K=Ct({});let ee;function V(ne){let Q;I=O=!1,W=[],typeof ne=="function"?(ne(u.state.value[s]),Q={type:Qt.patchFunction,storeId:s,events:W}):(En(u.state.value[s],ne),Q={type:Qt.patchObject,payload:ne,storeId:s,events:W});const le=ee=Symbol();bs().then(()=>{ee===le&&(I=!0)}),O=!0,is(N,Q,u.state.value[s])}const T=()=>{throw new Error(`\u{1F34D}: Store "${s}" is built using the setup syntax and does not implement $reset().`)};function j(){w.stop(),N=[],z=[],u._s.delete(s)}function Z(ne,Q){return function(){ta(u);const le=Array.from(arguments),se=[],ye=[];function ge(Te){se.push(Te)}function Ve(Te){ye.push(Te)}is(z,{args:le,name:ne,store:J,after:ge,onError:Ve});let Le;try{Le=Q.apply(this&&this.$id===s?this:J,le)}catch(Te){throw is(ye,Te),Te}return Le instanceof Promise?Le.then(Te=>(is(se,Te),Te)).catch(Te=>(is(ye,Te),Promise.reject(Te))):(is(se,Le),Le)}}const H=Lt({actions:{},getters:{},state:[],hotState:K}),ce={_p:u,$id:s,$onAction:xl.bind(null,z),$patch:V,$reset:T,$subscribe(ne,Q={}){const le=xl(N,ne,Q.detached,()=>se()),se=w.run(()=>Ai(()=>u.state.value[s],ye=>{(Q.flush==="sync"?O:I)&&ne({storeId:s,type:Qt.direct,events:W},ye)},Bt({},P,Q)));return le},$dispose:j},J=Ii(Bt(wi?{_customProperties:Lt(new Set),_hmrPayload:H}:{},ce));u._s.set(s,J);const ie=u._e.run(()=>(w=Nn(),w.run(()=>n())));for(const ne in ie){const Q=ie[ne];if(Qe(Q)&&!ml(Q)||Kt(Q))g?Ea(K.value,ne,Xs(ie,ne)):m||(q&&Xp(Q)&&(Qe(Q)?Q.value=q[ne]:En(Q,q[ne])),u.state.value[s][ne]=Q),H.state.push(ne);else if(typeof Q=="function"){const le=g?Q:Z(ne,Q);ie[ne]=le,H.actions[ne]=Q,k.actions[ne]=Q}else ml(Q)&&(H.getters[ne]=m?c.getters[ne]:Q,wi&&(ie._getters||(ie._getters=Lt([]))).push(ne))}Bt(J,ie),Bt(Ie(J),ie),Object.defineProperty(J,"$state",{get:()=>g?K.value:u.state.value[s],set:ne=>{if(g)throw new Error("cannot set hotState");V(Q=>{Bt(Q,ne)})}});{J._hotUpdate=Lt(Q=>{J._hotUpdating=!0,Q._hmrPayload.state.forEach(le=>{if(le in J.$state){const se=Q.$state[le],ye=J.$state[le];typeof se=="object"&&qi(se)&&qi(ye)?iu(se,ye):Q.$state[le]=ye}Ea(J,le,Xs(Q.$state,le))}),Object.keys(J.$state).forEach(le=>{le in Q.$state||zr(J,le)}),I=!1,O=!1,u.state.value[s]=Xs(Q._hmrPayload,"hotState"),O=!0,bs().then(()=>{I=!0});for(const le in Q._hmrPayload.actions){const se=Q[le];Ea(J,le,Z(le,se))}for(const le in Q._hmrPayload.getters){const se=Q._hmrPayload.getters[le],ye=m?We(()=>(ta(u),se.call(J,J))):se;Ea(J,le,ye)}Object.keys(J._hmrPayload.getters).forEach(le=>{le in Q._hmrPayload.getters||zr(J,le)}),Object.keys(J._hmrPayload.actions).forEach(le=>{le in Q._hmrPayload.actions||zr(J,le)}),J._hmrPayload=Q._hmrPayload,J._getters=Q._getters,J._hotUpdating=!1});const ne={writable:!0,configurable:!0,enumerable:!1};wi&&["_p","_hmrPayload","_getters","_customProperties"].forEach(Q=>{Object.defineProperty(J,Q,{value:J[Q],...ne})})}return u._p.forEach(ne=>{if(wi){const Q=w.run(()=>ne({store:J,app:u._a,pinia:u,options:k}));Object.keys(Q||{}).forEach(le=>J._customProperties.add(le)),Bt(J,Q)}else Bt(J,w.run(()=>ne({store:J,app:u._a,pinia:u,options:k})))}),J.$state&&typeof J.$state=="object"&&typeof J.$state.constructor=="function"&&!J.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${J.$id}".`),q&&m&&c.hydrate&&c.hydrate(J.$state,q),I=!0,O=!0,J}function da(s,n,c){let u,g;const m=typeof n=="function";typeof s=="string"?(u=s,g=m?c:n):(g=s,u=s.id);function w(k,P){const I=ti();if(k=k||I&&Rt($h),k&&ta(k),!Sn)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);k=Sn,k._s.has(u)||(m?Pn(u,n,g,k):bl(u,g,k),w._pinia=k);const O=k._s.get(u);if(P){const N="__hot:"+u,z=m?Pn(N,n,g,k,!0):bl(N,Bt({},g),k,!0);P._hotUpdate(z),delete k.state.value[N],k._s.delete(N)}if(wi&&I&&I.proxy&&!P){const N=I.proxy,z="_pStores"in N?N._pStores:N._pStores={};z[u]=O}return O}return w.$id=u,w}function su(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Hp(s){var n=s.default;if(typeof n=="function"){var c=function(){return n.apply(this,arguments)};c.prototype=n.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(s).forEach(function(u){var g=Object.getOwnPropertyDescriptor(s,u);Object.defineProperty(c,u,g.get?g:{enumerable:!0,get:function(){return s[u]}})}),c}var au={exports:{}};const Yp=Hp(up);var Pa={exports:{}};/*!
 * ApexCharts v3.35.4
 * (c) 2018-2022 ApexCharts
 * Released under the MIT License.
 */var vl;function Bp(){return vl||(vl=1,function(s,n){function c(L,e){var t=Object.keys(L);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(L);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(L,a).enumerable})),t.push.apply(t,i)}return t}function u(L){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?c(Object(t),!0).forEach(function(i){P(L,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(i){Object.defineProperty(L,i,Object.getOwnPropertyDescriptor(t,i))})}return L}function g(L){return(g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(L)}function m(L,e){if(!(L instanceof e))throw new TypeError("Cannot call a class as a function")}function w(L,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(L,i.key,i)}}function k(L,e,t){return e&&w(L.prototype,e),t&&w(L,t),L}function P(L,e,t){return e in L?Object.defineProperty(L,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):L[e]=t,L}function I(L,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");L.prototype=Object.create(e&&e.prototype,{constructor:{value:L,writable:!0,configurable:!0}}),e&&N(L,e)}function O(L){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(L)}function N(L,e){return(N=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(L,e)}function z(L,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(L)}function W(L){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var t,i=O(L);if(e){var a=O(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return z(this,t)}}function q(L,e){return function(t){if(Array.isArray(t))return t}(L)||function(t,i){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var r,l,o=[],h=!0,d=!1;try{for(a=a.call(t);!(h=(r=a.next()).done)&&(o.push(r.value),!i||o.length!==i);h=!0);}catch(p){d=!0,l=p}finally{try{h||a.return==null||a.return()}finally{if(d)throw l}}return o}}(L,e)||ee(L,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function K(L){return function(e){if(Array.isArray(e))return V(e)}(L)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(L)||ee(L)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ee(L,e){if(L){if(typeof L=="string")return V(L,e);var t=Object.prototype.toString.call(L).slice(8,-1);return t==="Object"&&L.constructor&&(t=L.constructor.name),t==="Map"||t==="Set"?Array.from(L):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?V(L,e):void 0}}function V(L,e){(e==null||e>L.length)&&(e=L.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=L[t];return i}var T=function(){function L(){m(this,L)}return k(L,[{key:"shadeRGBColor",value:function(e,t){var i=t.split(","),a=e<0?0:255,r=e<0?-1*e:e,l=parseInt(i[0].slice(4),10),o=parseInt(i[1],10),h=parseInt(i[2],10);return"rgb("+(Math.round((a-l)*r)+l)+","+(Math.round((a-o)*r)+o)+","+(Math.round((a-h)*r)+h)+")"}},{key:"shadeHexColor",value:function(e,t){var i=parseInt(t.slice(1),16),a=e<0?0:255,r=e<0?-1*e:e,l=i>>16,o=i>>8&255,h=255&i;return"#"+(16777216+65536*(Math.round((a-l)*r)+l)+256*(Math.round((a-o)*r)+o)+(Math.round((a-h)*r)+h)).toString(16).slice(1)}},{key:"shadeColor",value:function(e,t){return L.isColorHex(t)?this.shadeHexColor(e,t):this.shadeRGBColor(e,t)}}],[{key:"bind",value:function(e,t){return function(){return e.apply(t,arguments)}}},{key:"isObject",value:function(e){return e&&g(e)==="object"&&!Array.isArray(e)&&e!=null}},{key:"is",value:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"}},{key:"listToArray",value:function(e){var t,i=[];for(t=0;t<e.length;t++)i[t]=e[t];return i}},{key:"extend",value:function(e,t){var i=this;typeof Object.assign!="function"&&(Object.assign=function(r){if(r==null)throw new TypeError("Cannot convert undefined or null to object");for(var l=Object(r),o=1;o<arguments.length;o++){var h=arguments[o];if(h!=null)for(var d in h)h.hasOwnProperty(d)&&(l[d]=h[d])}return l});var a=Object.assign({},e);return this.isObject(e)&&this.isObject(t)&&Object.keys(t).forEach(function(r){i.isObject(t[r])&&r in e?a[r]=i.extend(e[r],t[r]):Object.assign(a,P({},r,t[r]))}),a}},{key:"extendArray",value:function(e,t){var i=[];return e.map(function(a){i.push(L.extend(t,a))}),e=i}},{key:"monthMod",value:function(e){return e%12}},{key:"clone",value:function(e){if(L.is("Array",e)){for(var t=[],i=0;i<e.length;i++)t[i]=this.clone(e[i]);return t}if(L.is("Null",e))return null;if(L.is("Date",e))return e;if(g(e)==="object"){var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=this.clone(e[r]));return a}return e}},{key:"log10",value:function(e){return Math.log(e)/Math.LN10}},{key:"roundToBase10",value:function(e){return Math.pow(10,Math.floor(Math.log10(e)))}},{key:"roundToBase",value:function(e,t){return Math.pow(t,Math.floor(Math.log(e)/Math.log(t)))}},{key:"parseNumber",value:function(e){return e===null?e:parseFloat(e)}},{key:"randomId",value:function(){return(Math.random()+1).toString(36).substring(4)}},{key:"noExponents",value:function(e){var t=String(e).split(/[eE]/);if(t.length===1)return t[0];var i="",a=e<0?"-":"",r=t[0].replace(".",""),l=Number(t[1])+1;if(l<0){for(i=a+"0.";l++;)i+="0";return i+r.replace(/^-/,"")}for(l-=r.length;l--;)i+="0";return r+i}},{key:"getDimensions",value:function(e){var t=getComputedStyle(e,null),i=e.clientHeight,a=e.clientWidth;return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),[a-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),i]}},{key:"getBoundingClientRect",value:function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:e.clientWidth,height:e.clientHeight,x:t.left,y:t.top}}},{key:"getLargestStringFromArr",value:function(e){return e.reduce(function(t,i){return Array.isArray(i)&&(i=i.reduce(function(a,r){return a.length>r.length?a:r})),t.length>i.length?t:i},0)}},{key:"hexToRgba",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#999999",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.6;e.substring(0,1)!=="#"&&(e="#999999");var i=e.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var a=0;a<i.length;a++)i[a]=parseInt(i[a].length===1?i[a]+i[a]:i[a],16);return t!==void 0&&i.push(t),"rgba("+i.join(",")+")"}},{key:"getOpacityFromRGBA",value:function(e){return parseFloat(e.replace(/^.*,(.+)\)/,"$1"))}},{key:"rgb2hex",value:function(e){return(e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&e.length===4?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):""}},{key:"isColorHex",value:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e)}},{key:"getPolygonPos",value:function(e,t){for(var i=[],a=2*Math.PI/t,r=0;r<t;r++){var l={};l.x=e*Math.sin(r*a),l.y=-e*Math.cos(r*a),i.push(l)}return i}},{key:"polarToCartesian",value:function(e,t,i,a){var r=(a-90)*Math.PI/180;return{x:e+i*Math.cos(r),y:t+i*Math.sin(r)}}},{key:"escapeString",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"x",i=e.toString().slice();return i=i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,t)}},{key:"negToZero",value:function(e){return e<0?0:e}},{key:"moveIndexInArray",value:function(e,t,i){if(i>=e.length)for(var a=i-e.length+1;a--;)e.push(void 0);return e.splice(i,0,e.splice(t,1)[0]),e}},{key:"extractNumber",value:function(e){return parseFloat(e.replace(/[^\d.]*/g,""))}},{key:"findAncestor",value:function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e}},{key:"setELstyles",value:function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e.style.key=t[i])}},{key:"isNumber",value:function(e){return!isNaN(e)&&parseFloat(Number(e))===e&&!isNaN(parseInt(e,10))}},{key:"isFloat",value:function(e){return Number(e)===e&&e%1!=0}},{key:"isSafari",value:function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},{key:"isFirefox",value:function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}},{key:"isIE11",value:function(){if(window.navigator.userAgent.indexOf("MSIE")!==-1||window.navigator.appVersion.indexOf("Trident/")>-1)return!0}},{key:"isIE",value:function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var a=e.indexOf("Edge/");return a>0&&parseInt(e.substring(a+5,e.indexOf(".",a)),10)}}]),L}(),j=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.setEasingFunctions()}return k(L,[{key:"setEasingFunctions",value:function(){var e;if(!this.w.globals.easing){switch(this.w.config.chart.animations.easing){case"linear":e="-";break;case"easein":e="<";break;case"easeout":e=">";break;case"easeinout":e="<>";break;case"swing":e=function(t){var i=1.70158;return(t-=1)*t*((i+1)*t+i)+1};break;case"bounce":e=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};break;case"elastic":e=function(t){return t===!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1};break;default:e="<>"}this.w.globals.easing=e}}},{key:"animateLine",value:function(e,t,i,a){e.attr(t).animate(a).attr(i)}},{key:"animateMarker",value:function(e,t,i,a,r,l){t||(t=0),e.attr({r:t,width:t,height:t}).animate(a,r).attr({r:i,width:i.width,height:i.height}).afterAll(function(){l()})}},{key:"animateCircle",value:function(e,t,i,a,r){e.attr({r:t.r,cx:t.cx,cy:t.cy}).animate(a,r).attr({r:i.r,cx:i.cx,cy:i.cy})}},{key:"animateRect",value:function(e,t,i,a,r){e.attr(t).animate(a).attr(i).afterAll(function(){return r()})}},{key:"animatePathsGradually",value:function(e){var t=e.el,i=e.realIndex,a=e.j,r=e.fill,l=e.pathFrom,o=e.pathTo,h=e.speed,d=e.delay,p=this.w,x=0;p.config.chart.animations.animateGradually.enabled&&(x=p.config.chart.animations.animateGradually.delay),p.config.chart.animations.dynamicAnimation.enabled&&p.globals.dataChanged&&p.config.chart.type!=="bar"&&(x=0),this.morphSVG(t,i,a,p.config.chart.type!=="line"||p.globals.comboCharts?r:"stroke",l,o,h,d*x)}},{key:"showDelayedElements",value:function(){this.w.globals.delayedElements.forEach(function(e){e.el.classList.remove("apexcharts-element-hidden")})}},{key:"animationCompleted",value:function(e){var t=this.w;t.globals.animationEnded||(t.globals.animationEnded=!0,this.showDelayedElements(),typeof t.config.chart.events.animationEnd=="function"&&t.config.chart.events.animationEnd(this.ctx,{el:e,w:t}))}},{key:"morphSVG",value:function(e,t,i,a,r,l,o,h){var d=this,p=this.w;r||(r=e.attr("pathFrom")),l||(l=e.attr("pathTo"));var x=function(b){return p.config.chart.type==="radar"&&(o=1),"M 0 ".concat(p.globals.gridHeight)};(!r||r.indexOf("undefined")>-1||r.indexOf("NaN")>-1)&&(r=x()),(!l||l.indexOf("undefined")>-1||l.indexOf("NaN")>-1)&&(l=x()),p.globals.shouldAnimate||(o=1),e.plot(r).animate(1,p.globals.easing,h).plot(r).animate(o,p.globals.easing,h).plot(l).afterAll(function(){T.isNumber(i)?i===p.globals.series[p.globals.maxValsInArrayIndex].length-2&&p.globals.shouldAnimate&&d.animationCompleted(e):a!=="none"&&p.globals.shouldAnimate&&(!p.globals.comboCharts&&t===p.globals.series.length-1||p.globals.comboCharts)&&d.animationCompleted(e),d.showDelayedElements()})}}]),L}(),Z=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"getDefaultFilter",value:function(e,t){var i=this.w;e.unfilter(!0),new window.SVG.Filter().size("120%","180%","-5%","-40%"),i.config.states.normal.filter!=="none"?this.applyFilter(e,t,i.config.states.normal.filter.type,i.config.states.normal.filter.value):i.config.chart.dropShadow.enabled&&this.dropShadow(e,i.config.chart.dropShadow,t)}},{key:"addNormalFilter",value:function(e,t){var i=this.w;i.config.chart.dropShadow.enabled&&!e.node.classList.contains("apexcharts-marker")&&this.dropShadow(e,i.config.chart.dropShadow,t)}},{key:"addLightenFilter",value:function(e,t,i){var a=this,r=this.w,l=i.intensity;e.unfilter(!0),new window.SVG.Filter,e.filter(function(o){var h=r.config.chart.dropShadow;(h.enabled?a.addShadow(o,t,h):o).componentTransfer({rgb:{type:"linear",slope:1.5,intercept:l}})}),e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)}},{key:"addDarkenFilter",value:function(e,t,i){var a=this,r=this.w,l=i.intensity;e.unfilter(!0),new window.SVG.Filter,e.filter(function(o){var h=r.config.chart.dropShadow;(h.enabled?a.addShadow(o,t,h):o).componentTransfer({rgb:{type:"linear",slope:l}})}),e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)}},{key:"applyFilter",value:function(e,t,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.5;switch(i){case"none":this.addNormalFilter(e,t);break;case"lighten":this.addLightenFilter(e,t,{intensity:a});break;case"darken":this.addDarkenFilter(e,t,{intensity:a})}}},{key:"addShadow",value:function(e,t,i){var a=i.blur,r=i.top,l=i.left,o=i.color,h=i.opacity,d=e.flood(Array.isArray(o)?o[t]:o,h).composite(e.sourceAlpha,"in").offset(l,r).gaussianBlur(a).merge(e.source);return e.blend(e.source,d)}},{key:"dropShadow",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=t.top,r=t.left,l=t.blur,o=t.color,h=t.opacity,d=t.noUserSpaceOnUse,p=this.w;return e.unfilter(!0),T.isIE()&&p.config.chart.type==="radialBar"||(o=Array.isArray(o)?o[i]:o,e.filter(function(x){var b=null;b=T.isSafari()||T.isFirefox()||T.isIE()?x.flood(o,h).composite(x.sourceAlpha,"in").offset(r,a).gaussianBlur(l):x.flood(o,h).composite(x.sourceAlpha,"in").offset(r,a).gaussianBlur(l).merge(x.source),x.blend(x.source,b)}),d||e.filterer.node.setAttribute("filterUnits","userSpaceOnUse"),this._scaleFilterSize(e.filterer.node)),e}},{key:"setSelectionFilter",value:function(e,t,i){var a=this.w;if(a.globals.selectedDataPoints[t]!==void 0&&a.globals.selectedDataPoints[t].indexOf(i)>-1){e.node.setAttribute("selected",!0);var r=a.config.states.active.filter;r!=="none"&&this.applyFilter(e,t,r.type,r.value)}}},{key:"_scaleFilterSize",value:function(e){(function(t){for(var i in t)t.hasOwnProperty(i)&&e.setAttribute(i,t[i])})({width:"200%",height:"200%",x:"-50%",y:"-50%"})}}]),L}(),H=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"drawLine",value:function(e,t,i,a){var r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"#a8a8a8",l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,h=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"butt",d=this.w,p=d.globals.dom.Paper.line().attr({x1:e,y1:t,x2:i,y2:a,stroke:r,"stroke-dasharray":l,"stroke-width":o,"stroke-linecap":h});return p}},{key:"drawRect",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"#fefefe",o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:1,h=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,d=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,p=arguments.length>9&&arguments[9]!==void 0?arguments[9]:0,x=this.w,b=x.globals.dom.Paper.rect();return b.attr({x:e,y:t,width:i>0?i:0,height:a>0?a:0,rx:r,ry:r,opacity:o,"stroke-width":h!==null?h:0,stroke:d!==null?d:"none","stroke-dasharray":p}),b.node.setAttribute("fill",l),b}},{key:"drawPolygon",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#e1e1e1",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"none",r=this.w,l=r.globals.dom.Paper.polygon(e).attr({fill:a,stroke:t,"stroke-width":i});return l}},{key:"drawCircle",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.w;e<0&&(e=0);var a=i.globals.dom.Paper.circle(2*e);return t!==null&&a.attr(t),a}},{key:"drawPath",value:function(e){var t=e.d,i=t===void 0?"":t,a=e.stroke,r=a===void 0?"#a8a8a8":a,l=e.strokeWidth,o=l===void 0?1:l,h=e.fill,d=e.fillOpacity,p=d===void 0?1:d,x=e.strokeOpacity,b=x===void 0?1:x,y=e.classes,S=e.strokeLinecap,A=S===void 0?null:S,E=e.strokeDashArray,_=E===void 0?0:E,R=this.w;return A===null&&(A=R.config.stroke.lineCap),(i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(R.globals.gridHeight)),R.globals.dom.Paper.path(i).attr({fill:h,"fill-opacity":p,stroke:r,"stroke-opacity":b,"stroke-linecap":A,"stroke-width":o,"stroke-dasharray":_,class:y})}},{key:"group",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=this.w,i=t.globals.dom.Paper.group();return e!==null&&i.attr(e),i}},{key:"move",value:function(e,t){var i=["M",e,t].join(" ");return i}},{key:"line",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=null;return i===null?a=["L",e,t].join(" "):i==="H"?a=["H",e].join(" "):i==="V"&&(a=["V",t].join(" ")),a}},{key:"curve",value:function(e,t,i,a,r,l){var o=["C",e,t,i,a,r,l].join(" ");return o}},{key:"quadraticCurve",value:function(e,t,i,a){return["Q",e,t,i,a].join(" ")}},{key:"arc",value:function(e,t,i,a,r,l,o){var h=arguments.length>7&&arguments[7]!==void 0&&arguments[7],d="A";h&&(d="a");var p=[d,e,t,i,a,r,l,o].join(" ");return p}},{key:"renderPaths",value:function(e){var t,i=e.j,a=e.realIndex,r=e.pathFrom,l=e.pathTo,o=e.stroke,h=e.strokeWidth,d=e.strokeLinecap,p=e.fill,x=e.animationDelay,b=e.initialSpeed,y=e.dataChangeSpeed,S=e.className,A=e.shouldClipToGrid,E=A===void 0||A,_=e.bindEventsOnPaths,R=_===void 0||_,F=e.drawShadow,f=F===void 0||F,v=this.w,C=new Z(this.ctx),M=new j(this.ctx),X=this.w.config.chart.animations.enabled,G=X&&this.w.config.chart.animations.dynamicAnimation.enabled,Y=!!(X&&!v.globals.resized||G&&v.globals.dataChanged&&v.globals.shouldAnimate);Y?t=r:(t=l,v.globals.animationEnded=!0);var re=v.config.stroke.dashArray,te=0;te=Array.isArray(re)?re[a]:v.config.stroke.dashArray;var pe=this.drawPath({d:t,stroke:o,strokeWidth:h,fill:p,fillOpacity:1,classes:S,strokeLinecap:d,strokeDashArray:te});if(pe.attr("index",a),E&&pe.attr({"clip-path":"url(#gridRectMask".concat(v.globals.cuid,")")}),v.config.states.normal.filter.type!=="none")C.getDefaultFilter(pe,a);else if(v.config.chart.dropShadow.enabled&&f&&(!v.config.chart.dropShadow.enabledOnSeries||v.config.chart.dropShadow.enabledOnSeries&&v.config.chart.dropShadow.enabledOnSeries.indexOf(a)!==-1)){var Ce=v.config.chart.dropShadow;C.dropShadow(pe,Ce,a)}R&&(pe.node.addEventListener("mouseenter",this.pathMouseEnter.bind(this,pe)),pe.node.addEventListener("mouseleave",this.pathMouseLeave.bind(this,pe)),pe.node.addEventListener("mousedown",this.pathMouseDown.bind(this,pe))),pe.attr({pathTo:l,pathFrom:r});var Je={el:pe,j:i,realIndex:a,pathFrom:r,pathTo:l,fill:p,strokeWidth:h,delay:x};return!X||v.globals.resized||v.globals.dataChanged?!v.globals.resized&&v.globals.dataChanged||M.showDelayedElements():M.animatePathsGradually(u(u({},Je),{},{speed:b})),v.globals.dataChanged&&G&&Y&&M.animatePathsGradually(u(u({},Je),{},{speed:y})),pe}},{key:"drawPattern",value:function(e,t,i){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"#a8a8a8",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,l=this.w,o=l.globals.dom.Paper.pattern(t,i,function(h){e==="horizontalLines"?h.line(0,0,i,0).stroke({color:a,width:r+1}):e==="verticalLines"?h.line(0,0,0,t).stroke({color:a,width:r+1}):e==="slantedLines"?h.line(0,0,t,i).stroke({color:a,width:r}):e==="squares"?h.rect(t,i).fill("none").stroke({color:a,width:r}):e==="circles"&&h.circle(t).fill("none").stroke({color:a,width:r})});return o}},{key:"drawGradient",value:function(e,t,i,a,r){var l,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:null,d=arguments.length>7&&arguments[7]!==void 0?arguments[7]:null,p=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,x=this.w;t.length<9&&t.indexOf("#")===0&&(t=T.hexToRgba(t,a)),i.length<9&&i.indexOf("#")===0&&(i=T.hexToRgba(i,r));var b=0,y=1,S=1,A=null;h!==null&&(b=h[0]!==void 0?h[0]/100:0,y=h[1]!==void 0?h[1]/100:1,S=h[2]!==void 0?h[2]/100:1,A=h[3]!==void 0?h[3]/100:null);var E=!(x.config.chart.type!=="donut"&&x.config.chart.type!=="pie"&&x.config.chart.type!=="polarArea"&&x.config.chart.type!=="bubble");if(l=d===null||d.length===0?x.globals.dom.Paper.gradient(E?"radial":"linear",function(F){F.at(b,t,a),F.at(y,i,r),F.at(S,i,r),A!==null&&F.at(A,t,a)}):x.globals.dom.Paper.gradient(E?"radial":"linear",function(F){(Array.isArray(d[p])?d[p]:d).forEach(function(f){F.at(f.offset/100,f.color,f.opacity)})}),E){var _=x.globals.gridWidth/2,R=x.globals.gridHeight/2;x.config.chart.type!=="bubble"?l.attr({gradientUnits:"userSpaceOnUse",cx:_,cy:R,r:o}):l.attr({cx:.5,cy:.5,r:.8,fx:.2,fy:.2})}else e==="vertical"?l.from(0,0).to(0,1):e==="diagonal"?l.from(0,0).to(1,1):e==="horizontal"?l.from(0,1).to(1,1):e==="diagonal2"&&l.from(1,0).to(0,1);return l}},{key:"getTextBasedOnMaxWidth",value:function(e){var t=e.text,i=e.maxWidth,a=e.fontSize,r=e.fontFamily,l=this.getTextRects(t,a,r),o=l.width/t.length,h=Math.floor(i/o);return i<l.width?t.slice(0,h-3)+"...":t}},{key:"drawText",value:function(e){var t=this,i=e.x,a=e.y,r=e.text,l=e.textAnchor,o=e.fontSize,h=e.fontFamily,d=e.fontWeight,p=e.foreColor,x=e.opacity,b=e.maxWidth,y=e.cssClass,S=y===void 0?"":y,A=e.isPlainText,E=A===void 0||A,_=this.w;r===void 0&&(r="");var R=r;l||(l="start"),p&&p.length||(p=_.config.chart.foreColor),h=h||_.config.chart.fontFamily,d=d||"regular";var F,f={maxWidth:b,fontSize:o=o||"11px",fontFamily:h};return Array.isArray(r)?F=_.globals.dom.Paper.text(function(v){for(var C=0;C<r.length;C++)R=r[C],b&&(R=t.getTextBasedOnMaxWidth(u({text:r[C]},f))),C===0?v.tspan(R):v.tspan(R).newLine()}):(b&&(R=this.getTextBasedOnMaxWidth(u({text:r},f))),F=E?_.globals.dom.Paper.plain(r):_.globals.dom.Paper.text(function(v){return v.tspan(R)})),F.attr({x:i,y:a,"text-anchor":l,"dominant-baseline":"auto","font-size":o,"font-family":h,"font-weight":d,fill:p,class:"apexcharts-text "+S}),F.node.style.fontFamily=h,F.node.style.opacity=x,F}},{key:"drawMarker",value:function(e,t,i){e=e||0;var a=i.pSize||0,r=null;if(i.shape==="square"||i.shape==="rect"){var l=i.pRadius===void 0?a/2:i.pRadius;t!==null&&a||(a=0,l=0);var o=1.2*a+l,h=this.drawRect(o,o,o,o,l);h.attr({x:e-o/2,y:t-o/2,cx:e,cy:t,class:i.class?i.class:"",fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,stroke:i.pointStrokeColor,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}),r=h}else i.shape!=="circle"&&i.shape||(T.isNumber(t)||(a=0,t=0),r=this.drawCircle(a,{cx:e,cy:t,class:i.class?i.class:"",stroke:i.pointStrokeColor,fill:i.pointFillColor,"fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1,"stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0,"stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1}));return r}},{key:"pathMouseEnter",value:function(e,t){var i=this.w,a=new Z(this.ctx),r=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10);if(typeof i.config.chart.events.dataPointMouseEnter=="function"&&i.config.chart.events.dataPointMouseEnter(t,this.ctx,{seriesIndex:r,dataPointIndex:l,w:i}),this.ctx.events.fireEvent("dataPointMouseEnter",[t,this.ctx,{seriesIndex:r,dataPointIndex:l,w:i}]),(i.config.states.active.filter.type==="none"||e.node.getAttribute("selected")!=="true")&&i.config.states.hover.filter.type!=="none"&&!i.globals.isTouchDevice){var o=i.config.states.hover.filter;a.applyFilter(e,r,o.type,o.value)}}},{key:"pathMouseLeave",value:function(e,t){var i=this.w,a=new Z(this.ctx),r=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10);typeof i.config.chart.events.dataPointMouseLeave=="function"&&i.config.chart.events.dataPointMouseLeave(t,this.ctx,{seriesIndex:r,dataPointIndex:l,w:i}),this.ctx.events.fireEvent("dataPointMouseLeave",[t,this.ctx,{seriesIndex:r,dataPointIndex:l,w:i}]),i.config.states.active.filter.type!=="none"&&e.node.getAttribute("selected")==="true"||i.config.states.hover.filter.type!=="none"&&a.getDefaultFilter(e,r)}},{key:"pathMouseDown",value:function(e,t){var i=this.w,a=new Z(this.ctx),r=parseInt(e.node.getAttribute("index"),10),l=parseInt(e.node.getAttribute("j"),10),o="false";if(e.node.getAttribute("selected")==="true"){if(e.node.setAttribute("selected","false"),i.globals.selectedDataPoints[r].indexOf(l)>-1){var h=i.globals.selectedDataPoints[r].indexOf(l);i.globals.selectedDataPoints[r].splice(h,1)}}else{if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0){i.globals.selectedDataPoints=[];var d=i.globals.dom.Paper.select(".apexcharts-series path").members,p=i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,x=function(S){Array.prototype.forEach.call(S,function(A){A.node.setAttribute("selected","false"),a.getDefaultFilter(A,r)})};x(d),x(p)}e.node.setAttribute("selected","true"),o="true",i.globals.selectedDataPoints[r]===void 0&&(i.globals.selectedDataPoints[r]=[]),i.globals.selectedDataPoints[r].push(l)}if(o==="true"){var b=i.config.states.active.filter;if(b!=="none")a.applyFilter(e,r,b.type,b.value);else if(i.config.states.hover.filter!=="none"&&!i.globals.isTouchDevice){var y=i.config.states.hover.filter;a.applyFilter(e,r,y.type,y.value)}}else i.config.states.active.filter.type!=="none"&&(i.config.states.hover.filter.type==="none"||i.globals.isTouchDevice?a.getDefaultFilter(e,r):(y=i.config.states.hover.filter,a.applyFilter(e,r,y.type,y.value)));typeof i.config.chart.events.dataPointSelection=="function"&&i.config.chart.events.dataPointSelection(t,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:r,dataPointIndex:l,w:i}),t&&this.ctx.events.fireEvent("dataPointSelection",[t,this.ctx,{selectedDataPoints:i.globals.selectedDataPoints,seriesIndex:r,dataPointIndex:l,w:i}])}},{key:"rotateAroundCenter",value:function(e){var t={};return e&&typeof e.getBBox=="function"&&(t=e.getBBox()),{x:t.x+t.width/2,y:t.y+t.height/2}}},{key:"getTextRects",value:function(e,t,i,a){var r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],l=this.w,o=this.drawText({x:-200,y:-200,text:e,textAnchor:"start",fontSize:t,fontFamily:i,foreColor:"#fff",opacity:0});a&&o.attr("transform",a),l.globals.dom.Paper.add(o);var h=o.bbox();return r||(h=o.node.getBoundingClientRect()),o.remove(),{width:h.width,height:h.height}}},{key:"placeTextWithEllipsis",value:function(e,t,i){if(typeof e.getComputedTextLength=="function"&&(e.textContent=t,t.length>0&&e.getComputedTextLength()>=i/1.1)){for(var a=t.length-3;a>0;a-=3)if(e.getSubStringLength(0,a)<=i/1.1)return void(e.textContent=t.substring(0,a)+"...");e.textContent="."}}}],[{key:"setAttrs",value:function(e,t){for(var i in t)t.hasOwnProperty(i)&&e.setAttribute(i,t[i])}}]),L}(),ce=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"getStackedSeriesTotals",value:function(){var e=this.w,t=[];if(e.globals.series.length===0)return t;for(var i=0;i<e.globals.series[e.globals.maxValsInArrayIndex].length;i++){for(var a=0,r=0;r<e.globals.series.length;r++)e.globals.series[r][i]!==void 0&&(a+=e.globals.series[r][i]);t.push(a)}return e.globals.stackedSeriesTotals=t,t}},{key:"getSeriesTotalByIndex",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return e===null?this.w.config.series.reduce(function(t,i){return t+i},0):this.w.globals.series[e].reduce(function(t,i){return t+i},0)}},{key:"isSeriesNull",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return(e===null?this.w.config.series.filter(function(t){return t!==null}):this.w.config.series[e].data.filter(function(t){return t!==null})).length===0}},{key:"seriesHaveSameValues",value:function(e){return this.w.globals.series[e].every(function(t,i,a){return t===a[0]})}},{key:"getCategoryLabels",value:function(e){var t=this.w,i=e.slice();return t.config.xaxis.convertedCatToNumeric&&(i=e.map(function(a,r){return t.config.xaxis.labels.formatter(a-t.globals.minX+1)})),i}},{key:"getLargestSeries",value:function(){var e=this.w;e.globals.maxValsInArrayIndex=e.globals.series.map(function(t){return t.length}).indexOf(Math.max.apply(Math,e.globals.series.map(function(t){return t.length})))}},{key:"getLargestMarkerSize",value:function(){var e=this.w,t=0;return e.globals.markers.size.forEach(function(i){t=Math.max(t,i)}),e.config.markers.discrete&&e.config.markers.discrete.length&&e.config.markers.discrete.forEach(function(i){t=Math.max(t,i.size)}),t>0&&(t+=e.config.markers.hover.sizeOffset+1),e.globals.markers.largestSize=t,t}},{key:"getSeriesTotals",value:function(){var e=this.w;e.globals.seriesTotals=e.globals.series.map(function(t,i){var a=0;if(Array.isArray(t))for(var r=0;r<t.length;r++)a+=t[r];else a+=t;return a})}},{key:"getSeriesTotalsXRange",value:function(e,t){var i=this.w;return i.globals.series.map(function(a,r){for(var l=0,o=0;o<a.length;o++)i.globals.seriesX[r][o]>e&&i.globals.seriesX[r][o]<t&&(l+=a[o]);return l})}},{key:"getPercentSeries",value:function(){var e=this.w;e.globals.seriesPercent=e.globals.series.map(function(t,i){var a=[];if(Array.isArray(t))for(var r=0;r<t.length;r++){var l=e.globals.stackedSeriesTotals[r],o=0;l&&(o=100*t[r]/l),a.push(o)}else{var h=100*t/e.globals.seriesTotals.reduce(function(d,p){return d+p},0);a.push(h)}return a})}},{key:"getCalculatedRatios",value:function(){var e,t,i,a,r=this.w.globals,l=[],o=0,h=[],d=.1,p=0;if(r.yRange=[],r.isMultipleYAxis)for(var x=0;x<r.minYArr.length;x++)r.yRange.push(Math.abs(r.minYArr[x]-r.maxYArr[x])),h.push(0);else r.yRange.push(Math.abs(r.minY-r.maxY));r.xRange=Math.abs(r.maxX-r.minX),r.zRange=Math.abs(r.maxZ-r.minZ);for(var b=0;b<r.yRange.length;b++)l.push(r.yRange[b]/r.gridHeight);if(t=r.xRange/r.gridWidth,i=Math.abs(r.initialMaxX-r.initialMinX)/r.gridWidth,e=r.yRange/r.gridWidth,a=r.xRange/r.gridHeight,(o=r.zRange/r.gridHeight*16)||(o=1),r.minY!==Number.MIN_VALUE&&Math.abs(r.minY)!==0&&(r.hasNegs=!0),r.isMultipleYAxis){h=[];for(var y=0;y<l.length;y++)h.push(-r.minYArr[y]/l[y])}else h.push(-r.minY/l[0]),r.minY!==Number.MIN_VALUE&&Math.abs(r.minY)!==0&&(d=-r.minY/e,p=r.minX/t);return{yRatio:l,invertedYRatio:e,zRatio:o,xRatio:t,initialXRatio:i,invertedXRatio:a,baseLineInvertedY:d,baseLineY:h,baseLineX:p}}},{key:"getLogSeries",value:function(e){var t=this,i=this.w;return i.globals.seriesLog=e.map(function(a,r){return i.config.yaxis[r]&&i.config.yaxis[r].logarithmic?a.map(function(l){return l===null?null:t.getLogVal(i.config.yaxis[r].logBase,l,r)}):a}),i.globals.invalidLogScale?e:i.globals.seriesLog}},{key:"getBaseLog",value:function(e,t){return Math.log(t)/Math.log(e)}},{key:"getLogVal",value:function(e,t,i){if(t===0)return 0;var a=this.w,r=a.globals.minYArr[i]===0?-1:this.getBaseLog(e,a.globals.minYArr[i]),l=(a.globals.maxYArr[i]===0?0:this.getBaseLog(e,a.globals.maxYArr[i]))-r;return t<1?t/l:(this.getBaseLog(e,t)-r)/l}},{key:"getLogYRatios",value:function(e){var t=this,i=this.w,a=this.w.globals;return a.yLogRatio=e.slice(),a.logYRange=a.yRange.map(function(r,l){if(i.config.yaxis[l]&&t.w.config.yaxis[l].logarithmic){var o,h=-Number.MAX_VALUE,d=Number.MIN_VALUE;return a.seriesLog.forEach(function(p,x){p.forEach(function(b){i.config.yaxis[x]&&i.config.yaxis[x].logarithmic&&(h=Math.max(b,h),d=Math.min(b,d))})}),o=Math.pow(a.yRange[l],Math.abs(d-h)/a.yRange[l]),a.yLogRatio[l]=o/a.gridHeight,o}}),a.invalidLogScale?e.slice():a.yLogRatio}}],[{key:"checkComboSeries",value:function(e){var t=!1,i=0,a=0;return e.length&&e[0].type!==void 0&&e.forEach(function(r){r.type!=="bar"&&r.type!=="column"&&r.type!=="candlestick"&&r.type!=="boxPlot"||i++,r.type!==void 0&&a++}),a>0&&(t=!0),{comboBarCount:i,comboCharts:t}}},{key:"extendArrayProps",value:function(e,t,i){return t.yaxis&&(t=e.extendYAxis(t,i)),t.annotations&&(t.annotations.yaxis&&(t=e.extendYAxisAnnotations(t)),t.annotations.xaxis&&(t=e.extendXAxisAnnotations(t)),t.annotations.points&&(t=e.extendPointAnnotations(t))),t}}]),L}(),J=function(){function L(e){m(this,L),this.w=e.w,this.annoCtx=e}return k(L,[{key:"setOrientations",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.w;if(e.label.orientation==="vertical"){var a=t!==null?t:0,r=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a,"']"));if(r!==null){var l=r.getBoundingClientRect();r.setAttribute("x",parseFloat(r.getAttribute("x"))-l.height+4),e.label.position==="top"?r.setAttribute("y",parseFloat(r.getAttribute("y"))+l.width):r.setAttribute("y",parseFloat(r.getAttribute("y"))-l.width);var o=this.annoCtx.graphics.rotateAroundCenter(r),h=o.x,d=o.y;r.setAttribute("transform","rotate(-90 ".concat(h," ").concat(d,")"))}}}},{key:"addBackgroundToAnno",value:function(e,t){var i=this.w;if(!e||t.label.text===void 0||t.label.text!==void 0&&!String(t.label.text).trim())return null;var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),r=e.getBoundingClientRect(),l=t.label.style.padding.left,o=t.label.style.padding.right,h=t.label.style.padding.top,d=t.label.style.padding.bottom;t.label.orientation==="vertical"&&(h=t.label.style.padding.left,d=t.label.style.padding.right,l=t.label.style.padding.top,o=t.label.style.padding.bottom);var p=r.left-a.left-l,x=r.top-a.top-h,b=this.annoCtx.graphics.drawRect(p-i.globals.barPadForNumericAxis,x,r.width+l+o,r.height+h+d,t.label.borderRadius,t.label.style.background,1,t.label.borderWidth,t.label.borderColor,0);return t.id&&b.node.classList.add(t.id),b}},{key:"annotationsBackground",value:function(){var e=this,t=this.w,i=function(a,r,l){var o=t.globals.dom.baseEl.querySelector(".apexcharts-".concat(l,"-annotations .apexcharts-").concat(l,"-annotation-label[rel='").concat(r,"']"));if(o){var h=o.parentNode,d=e.addBackgroundToAnno(o,a);d&&(h.insertBefore(d.node,o),a.label.mouseEnter&&d.node.addEventListener("mouseenter",a.label.mouseEnter.bind(e,a)),a.label.mouseLeave&&d.node.addEventListener("mouseleave",a.label.mouseLeave.bind(e,a)),a.label.click&&d.node.addEventListener("click",a.label.click.bind(e,a)))}};t.config.annotations.xaxis.map(function(a,r){i(a,r,"xaxis")}),t.config.annotations.yaxis.map(function(a,r){i(a,r,"yaxis")}),t.config.annotations.points.map(function(a,r){i(a,r,"point")})}},{key:"getY1Y2",value:function(e,t){var i,a=e==="y1"?t.y:t.y2,r=this.w;if(this.annoCtx.invertAxis){var l=r.globals.labels.indexOf(a);r.config.xaxis.convertedCatToNumeric&&(l=r.globals.categoryLabels.indexOf(a));var o=r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child("+(l+1)+")");o&&(i=parseFloat(o.getAttribute("y")))}else{var h;r.config.yaxis[t.yAxisIndex].logarithmic?h=(a=new ce(this.annoCtx.ctx).getLogVal(a,t.yAxisIndex))/r.globals.yLogRatio[t.yAxisIndex]:h=(a-r.globals.minYArr[t.yAxisIndex])/(r.globals.yRange[t.yAxisIndex]/r.globals.gridHeight),i=r.globals.gridHeight-h,!t.marker||t.y!==void 0&&t.y!==null||(i=0),r.config.yaxis[t.yAxisIndex]&&r.config.yaxis[t.yAxisIndex].reversed&&(i=h)}return i}},{key:"getX1X2",value:function(e,t){var i=this.w,a=this.annoCtx.invertAxis?i.globals.minY:i.globals.minX,r=this.annoCtx.invertAxis?i.globals.maxY:i.globals.maxX,l=this.annoCtx.invertAxis?i.globals.yRange[0]:i.globals.xRange,o=(t.x-a)/(l/i.globals.gridWidth);this.annoCtx.inversedReversedAxis&&(o=(r-t.x)/(l/i.globals.gridWidth)),i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(o=this.getStringX(t.x));var h=(t.x2-a)/(l/i.globals.gridWidth);return this.annoCtx.inversedReversedAxis&&(h=(r-t.x2)/(l/i.globals.gridWidth)),i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric||this.annoCtx.invertAxis||i.globals.dataFormatXNumeric||(h=this.getStringX(t.x2)),t.x!==void 0&&t.x!==null||!t.marker||(o=i.globals.gridWidth),e==="x1"?o:h}},{key:"getStringX",value:function(e){var t=this.w,i=e;t.config.xaxis.convertedCatToNumeric&&t.globals.categoryLabels.length&&(e=t.globals.categoryLabels.indexOf(e)+1);var a=t.globals.labels.indexOf(e),r=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child("+(a+1)+")");return r&&(i=parseFloat(r.getAttribute("x"))),i}}]),L}(),ie=function(){function L(e){m(this,L),this.w=e.w,this.annoCtx=e,this.invertAxis=this.annoCtx.invertAxis,this.helpers=new J(this.annoCtx)}return k(L,[{key:"addXaxisAnnotation",value:function(e,t,i){var a,r=this.w,l=this.helpers.getX1X2("x1",e),o=e.label.text,h=e.strokeDashArray;if(T.isNumber(l)){if(e.x2===null||e.x2===void 0){var d=this.annoCtx.graphics.drawLine(l+e.offsetX,0+e.offsetY,l+e.offsetX,r.globals.gridHeight+e.offsetY,e.borderColor,h,e.borderWidth);t.appendChild(d.node),e.id&&d.node.classList.add(e.id)}else{if((a=this.helpers.getX1X2("x2",e))<l){var p=l;l=a,a=p}var x=this.annoCtx.graphics.drawRect(l+e.offsetX,0+e.offsetY,a-l,r.globals.gridHeight+e.offsetY,0,e.fillColor,e.opacity,1,e.borderColor,h);x.node.classList.add("apexcharts-annotation-rect"),x.attr("clip-path","url(#gridRectMask".concat(r.globals.cuid,")")),t.appendChild(x.node),e.id&&x.node.classList.add(e.id)}var b=e.label.position==="top"?4:r.globals.gridHeight,y=this.annoCtx.graphics.getTextRects(o,parseFloat(e.label.style.fontSize)),S=this.annoCtx.graphics.drawText({x:l+e.label.offsetX,y:b+e.label.offsetY-(e.label.orientation==="vertical"?e.label.position==="top"?y.width/2-12:-y.width/2:0),text:o,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});S.attr({rel:i}),t.appendChild(S.node),this.annoCtx.helpers.setOrientations(e,i)}}},{key:"drawXAxisAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-xaxis-annotations"});return t.config.annotations.xaxis.map(function(a,r){e.addXaxisAnnotation(a,i.node,r)}),i}}]),L}(),ne=function(){function L(e){m(this,L),this.w=e.w,this.annoCtx=e,this.helpers=new J(this.annoCtx)}return k(L,[{key:"addYaxisAnnotation",value:function(e,t,i){var a,r=this.w,l=e.strokeDashArray,o=this.helpers.getY1Y2("y1",e),h=e.label.text;if(e.y2===null||e.y2===void 0){var d=this.annoCtx.graphics.drawLine(0+e.offsetX,o+e.offsetY,this._getYAxisAnnotationWidth(e),o+e.offsetY,e.borderColor,l,e.borderWidth);t.appendChild(d.node),e.id&&d.node.classList.add(e.id)}else{if((a=this.helpers.getY1Y2("y2",e))>o){var p=o;o=a,a=p}var x=this.annoCtx.graphics.drawRect(0+e.offsetX,a+e.offsetY,this._getYAxisAnnotationWidth(e),o-a,0,e.fillColor,e.opacity,1,e.borderColor,l);x.node.classList.add("apexcharts-annotation-rect"),x.attr("clip-path","url(#gridRectMask".concat(r.globals.cuid,")")),t.appendChild(x.node),e.id&&x.node.classList.add(e.id)}var b=e.label.position==="right"?r.globals.gridWidth:0,y=this.annoCtx.graphics.drawText({x:b+e.label.offsetX,y:(a!=null?a:o)+e.label.offsetY-3,text:h,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});y.attr({rel:i}),t.appendChild(y.node)}},{key:"_getYAxisAnnotationWidth",value:function(e){var t=this.w;return t.globals.gridWidth,(e.width.indexOf("%")>-1?t.globals.gridWidth*parseInt(e.width,10)/100:parseInt(e.width,10))+e.offsetX}},{key:"drawYAxisAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-yaxis-annotations"});return t.config.annotations.yaxis.map(function(a,r){e.addYaxisAnnotation(a,i.node,r)}),i}}]),L}(),Q=function(){function L(e){m(this,L),this.w=e.w,this.annoCtx=e,this.helpers=new J(this.annoCtx)}return k(L,[{key:"addPointAnnotation",value:function(e,t,i){this.w;var a=this.helpers.getX1X2("x1",e),r=this.helpers.getY1Y2("y1",e);if(T.isNumber(a)){var l={pSize:e.marker.size,pointStrokeWidth:e.marker.strokeWidth,pointFillColor:e.marker.fillColor,pointStrokeColor:e.marker.strokeColor,shape:e.marker.shape,pRadius:e.marker.radius,class:"apexcharts-point-annotation-marker ".concat(e.marker.cssClass," ").concat(e.id?e.id:"")},o=this.annoCtx.graphics.drawMarker(a+e.marker.offsetX,r+e.marker.offsetY,l);t.appendChild(o.node);var h=e.label.text?e.label.text:"",d=this.annoCtx.graphics.drawText({x:a+e.label.offsetX,y:r+e.label.offsetY-e.marker.size-parseFloat(e.label.style.fontSize)/1.6,text:h,textAnchor:e.label.textAnchor,fontSize:e.label.style.fontSize,fontFamily:e.label.style.fontFamily,fontWeight:e.label.style.fontWeight,foreColor:e.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(e.label.style.cssClass," ").concat(e.id?e.id:"")});if(d.attr({rel:i}),t.appendChild(d.node),e.customSVG.SVG){var p=this.annoCtx.graphics.group({class:"apexcharts-point-annotations-custom-svg "+e.customSVG.cssClass});p.attr({transform:"translate(".concat(a+e.customSVG.offsetX,", ").concat(r+e.customSVG.offsetY,")")}),p.node.innerHTML=e.customSVG.SVG,t.appendChild(p.node)}if(e.image.path){var x=e.image.width?e.image.width:20,b=e.image.height?e.image.height:20;o=this.annoCtx.addImage({x:a+e.image.offsetX-x/2,y:r+e.image.offsetY-b/2,width:x,height:b,path:e.image.path,appendTo:".apexcharts-point-annotations"})}e.mouseEnter&&o.node.addEventListener("mouseenter",e.mouseEnter.bind(this,e)),e.mouseLeave&&o.node.addEventListener("mouseleave",e.mouseLeave.bind(this,e)),e.click&&o.node.addEventListener("click",e.click.bind(this,e))}}},{key:"drawPointAnnotations",value:function(){var e=this,t=this.w,i=this.annoCtx.graphics.group({class:"apexcharts-point-annotations"});return t.config.annotations.points.map(function(a,r){e.addPointAnnotation(a,i.node,r)}),i}}]),L}(),le={name:"en",options:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}}},se=function(){function L(){m(this,L),this.yAxis={show:!0,showAlways:!1,showForNullSeries:!0,seriesName:void 0,opposite:!1,reversed:!1,logarithmic:!1,logBase:10,tickAmount:void 0,forceNiceScale:!1,max:void 0,min:void 0,floating:!1,decimalsInFloat:void 0,labels:{show:!0,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:void 0,rotate:0,padding:20,style:{colors:[],fontSize:"11px",fontWeight:400,fontFamily:void 0,cssClass:""},formatter:void 0},axisBorder:{show:!1,color:"#e0e0e0",width:1,offsetX:0,offsetY:0},axisTicks:{show:!1,color:"#e0e0e0",width:6,offsetX:0,offsetY:0},title:{text:void 0,rotate:-90,offsetY:0,offsetX:0,style:{color:void 0,fontSize:"11px",fontWeight:900,fontFamily:void 0,cssClass:""}},tooltip:{enabled:!1,offsetX:0},crosshairs:{show:!0,position:"front",stroke:{color:"#b6b6b6",width:1,dashArray:0}}},this.pointAnnotation={id:void 0,x:0,y:null,yAxisIndex:0,seriesIndex:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,marker:{size:4,fillColor:"#fff",strokeWidth:2,strokeColor:"#333",shape:"circle",offsetX:0,offsetY:0,radius:2,cssClass:""},label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{SVG:void 0,cssClass:void 0,offsetX:0,offsetY:0},image:{path:void 0,width:20,height:20,offsetX:0,offsetY:0}},this.yAxisAnnotation={id:void 0,y:0,y2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,width:"100%",yAxisIndex:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"end",position:"right",offsetX:0,offsetY:-3,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.xAxisAnnotation={id:void 0,x:0,x2:null,strokeDashArray:1,fillColor:"#c2c2c2",borderColor:"#c2c2c2",borderWidth:1,opacity:.3,offsetX:0,offsetY:0,label:{borderColor:"#c2c2c2",borderWidth:1,borderRadius:2,text:void 0,textAnchor:"middle",orientation:"vertical",position:"top",offsetX:0,offsetY:0,mouseEnter:void 0,mouseLeave:void 0,click:void 0,style:{background:"#fff",color:void 0,fontSize:"11px",fontFamily:void 0,fontWeight:400,cssClass:"",padding:{left:5,right:5,top:2,bottom:2}}}},this.text={x:0,y:0,text:"",textAnchor:"start",foreColor:void 0,fontSize:"13px",fontFamily:void 0,fontWeight:400,appendTo:".apexcharts-annotations",backgroundColor:"transparent",borderColor:"#c2c2c2",borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2}}return k(L,[{key:"init",value:function(){return{annotations:{position:"front",yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{delay:150,enabled:!0},dynamicAnimation:{enabled:!0,speed:350}},background:"transparent",locales:[le],defaultLocale:"en",dropShadow:{enabled:!1,enabledOnSeries:void 0,top:2,left:2,blur:4,color:"#000",opacity:.35},events:{animationEnd:void 0,beforeMount:void 0,mounted:void 0,updated:void 0,click:void 0,mouseMove:void 0,mouseLeave:void 0,legendClick:void 0,markerClick:void 0,selection:void 0,dataPointSelection:void 0,dataPointMouseEnter:void 0,dataPointMouseLeave:void 0,beforeZoom:void 0,beforeResetZoom:void 0,zoomed:void 0,scrolled:void 0,brushScrolled:void 0},foreColor:"#373d3f",fontFamily:"Helvetica, Arial, sans-serif",height:"auto",parentHeightOffset:15,redrawOnParentResize:!0,redrawOnWindowResize:!0,id:void 0,group:void 0,offsetX:0,offsetY:0,selection:{enabled:!1,type:"x",fill:{color:"#24292e",opacity:.1},stroke:{width:1,color:"#24292e",opacity:.4,dashArray:3},xaxis:{min:void 0,max:void 0},yaxis:{min:void 0,max:void 0}},sparkline:{enabled:!1},brush:{enabled:!1,autoScaleYaxis:!0,target:void 0},stacked:!1,stackType:"normal",toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},export:{csv:{filename:void 0,columnDelimiter:",",headerCategory:"category",headerValue:"value",dateFormatter:function(e){return new Date(e).toDateString()}},png:{filename:void 0},svg:{filename:void 0}},autoSelected:"zoom"},type:"line",width:"100%",zoom:{enabled:!0,type:"x",autoScaleYaxis:!1,zoomedArea:{fill:{color:"#90CAF9",opacity:.4},stroke:{color:"#0D47A1",opacity:.4,width:1}}}},plotOptions:{area:{fillTo:"origin"},bar:{horizontal:!1,columnWidth:"70%",barHeight:"70%",distributed:!1,borderRadius:0,rangeBarOverlap:!0,rangeBarGroupRows:!1,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:"top",maxItems:100,hideOverflowingLabels:!0,orientation:"horizontal"}},bubble:{minBubbleRadius:void 0,maxBubbleRadius:void 0},candlestick:{colors:{upward:"#00B746",downward:"#EF403C"},wick:{useFillColor:!0}},boxPlot:{colors:{upper:"#00E396",lower:"#008FFB"}},heatmap:{radius:2,enableShades:!0,shadeIntensity:.5,reverseNegativeShade:!1,distributed:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},treemap:{enableShades:!0,shadeIntensity:.5,distributed:!1,reverseNegativeShade:!1,useFillColorAsStroke:!1,colorScale:{inverse:!1,ranges:[],min:void 0,max:void 0}},radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#f2f2f2",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,color:"#000",opacity:.5}},dataLabels:{show:!0,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:0,formatter:function(e){return e}},value:{show:!0,fontSize:"14px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:16,formatter:function(e){return e+"%"}},total:{show:!1,label:"Total",fontSize:"16px",fontWeight:600,fontFamily:void 0,color:void 0,formatter:function(e){return e.globals.seriesTotals.reduce(function(t,i){return t+i},0)/e.globals.series.length+"%"}}}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"65%",background:"transparent",labels:{show:!1,name:{show:!0,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10,formatter:function(e){return e}},value:{show:!0,fontSize:"20px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:10,formatter:function(e){return e}},total:{show:!1,showAlways:!1,label:"Total",fontSize:"16px",fontWeight:400,fontFamily:void 0,color:void 0,formatter:function(e){return e.globals.seriesTotals.reduce(function(t,i){return t+i},0)}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:"#e8e8e8"},spokes:{strokeWidth:1,connectorColors:"#e8e8e8"}},radar:{size:void 0,offsetX:0,offsetY:0,polygons:{strokeWidth:1,strokeColors:"#e8e8e8",connectorColors:"#e8e8e8",fill:{colors:void 0}}}},colors:void 0,dataLabels:{enabled:!0,enabledOnSeries:void 0,formatter:function(e){return e!==null?e:""},textAnchor:"middle",distributed:!1,offsetX:0,offsetY:0,style:{fontSize:"12px",fontFamily:void 0,fontWeight:600,colors:void 0},background:{enabled:!0,foreColor:"#fff",borderRadius:2,padding:4,opacity:.9,borderWidth:1,borderColor:"#fff",dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},dropShadow:{enabled:!1,top:1,left:1,blur:1,color:"#000",opacity:.45}},fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:void 0,height:void 0},pattern:{style:"squares",width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:.5,strokeWidth:void 0,dashArray:4},grid:{show:!0,borderColor:"#e0e0e0",strokeDashArray:0,position:"back",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},row:{colors:void 0,opacity:.5},column:{colors:void 0,opacity:.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:!0,showForSingleSeries:!1,showForNullSeries:!0,showForZeroSeries:!0,floating:!1,position:"bottom",horizontalAlign:"center",inverseOrder:!1,fontSize:"12px",fontFamily:void 0,fontWeight:400,width:void 0,height:void 0,formatter:void 0,tooltipHoverFormatter:void 0,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:void 0,useSeriesColors:!1},markers:{width:12,height:12,strokeWidth:0,fillColors:void 0,strokeColor:"#fff",radius:12,customHTML:void 0,offsetX:0,offsetY:0,onClick:void 0},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:!0},onItemHover:{highlightDataSeries:!0}},markers:{discrete:[],size:0,colors:void 0,strokeColors:"#fff",strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,shape:"circle",width:8,height:8,radius:2,offsetX:0,offsetY:0,onClick:void 0,onDblClick:void 0,showNullDataPoints:!0,hover:{size:void 0,sizeOffset:3}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}},responsive:[],series:void 0,states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"lighten",value:.1}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"darken",value:.5}}},title:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:0,floating:!1,style:{fontSize:"14px",fontWeight:900,fontFamily:void 0,color:void 0}},subtitle:{text:void 0,align:"left",margin:5,offsetX:0,offsetY:30,floating:!1,style:{fontSize:"12px",fontWeight:400,fontFamily:void 0,color:void 0}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:2,colors:void 0,dashArray:0,fill:{type:"solid",colors:void 0,opacity:.85,gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:!0,enabledOnSeries:void 0,shared:!0,followCursor:!1,intersect:!1,inverseOrder:!1,custom:void 0,fillSeriesColor:!1,theme:"light",cssClass:"",style:{fontSize:"12px",fontFamily:void 0},onDatasetHover:{highlightDataSeries:!1},x:{show:!0,format:"dd MMM",formatter:void 0},y:{formatter:void 0,title:{formatter:function(e){return e?e+": ":""}}},z:{formatter:void 0,title:"Size: "},marker:{show:!0,fillColors:void 0},items:{display:"flex"},fixed:{enabled:!1,position:"topRight",offsetX:0,offsetY:0}},xaxis:{type:"category",categories:[],convertedCatToNumeric:!1,offsetX:0,offsetY:0,overwriteCategories:void 0,labels:{show:!0,rotate:-45,rotateAlways:!1,hideOverlappingLabels:!0,trim:!1,minHeight:void 0,maxHeight:120,showDuplicates:!0,style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""},offsetX:0,offsetY:0,format:void 0,formatter:void 0,datetimeUTC:!0,datetimeFormatter:{year:"yyyy",month:"MMM 'yy",day:"dd MMM",hour:"HH:mm",minute:"HH:mm:ss",second:"HH:mm:ss"}},group:{groups:[],style:{colors:[],fontSize:"12px",fontWeight:400,fontFamily:void 0,cssClass:""}},axisBorder:{show:!0,color:"#e0e0e0",width:"100%",height:1,offsetX:0,offsetY:0},axisTicks:{show:!0,color:"#e0e0e0",height:6,offsetX:0,offsetY:0},tickAmount:void 0,tickPlacement:"on",min:void 0,max:void 0,range:void 0,floating:!1,decimalsInFloat:void 0,position:"bottom",title:{text:void 0,offsetX:0,offsetY:0,style:{color:void 0,fontSize:"12px",fontWeight:900,fontFamily:void 0,cssClass:""}},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:1,dashArray:3},fill:{type:"solid",color:"#B1B9C4",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}},dropShadow:{enabled:!1,left:0,top:0,blur:1,opacity:.4}},tooltip:{enabled:!0,offsetY:0,formatter:void 0,style:{fontSize:"12px",fontFamily:void 0}}},yaxis:this.yAxis,theme:{mode:"light",palette:"palette1",monochrome:{enabled:!1,color:"#008FFB",shadeTo:"light",shadeIntensity:.65}}}}}]),L}(),ye=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.graphics=new H(this.ctx),this.w.globals.isBarHorizontal&&(this.invertAxis=!0),this.helpers=new J(this),this.xAxisAnnotations=new ie(this),this.yAxisAnnotations=new ne(this),this.pointsAnnotations=new Q(this),this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0),this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints}return k(L,[{key:"drawAxesAnnotations",value:function(){var e=this.w;if(e.globals.axisCharts){for(var t=this.yAxisAnnotations.drawYAxisAnnotations(),i=this.xAxisAnnotations.drawXAxisAnnotations(),a=this.pointsAnnotations.drawPointAnnotations(),r=e.config.chart.animations.enabled,l=[t,i,a],o=[i.node,t.node,a.node],h=0;h<3;h++)e.globals.dom.elGraphical.add(l[h]),!r||e.globals.resized||e.globals.dataChanged||e.config.chart.type!=="scatter"&&e.config.chart.type!=="bubble"&&e.globals.dataPoints>1&&o[h].classList.add("apexcharts-element-hidden"),e.globals.delayedElements.push({el:o[h],index:0});this.helpers.annotationsBackground()}}},{key:"drawImageAnnos",value:function(){var e=this;this.w.config.annotations.images.map(function(t,i){e.addImage(t,i)})}},{key:"drawTextAnnos",value:function(){var e=this;this.w.config.annotations.texts.map(function(t,i){e.addText(t,i)})}},{key:"addXaxisAnnotation",value:function(e,t,i){this.xAxisAnnotations.addXaxisAnnotation(e,t,i)}},{key:"addYaxisAnnotation",value:function(e,t,i){this.yAxisAnnotations.addYaxisAnnotation(e,t,i)}},{key:"addPointAnnotation",value:function(e,t,i){this.pointsAnnotations.addPointAnnotation(e,t,i)}},{key:"addText",value:function(e,t){var i=e.x,a=e.y,r=e.text,l=e.textAnchor,o=e.foreColor,h=e.fontSize,d=e.fontFamily,p=e.fontWeight,x=e.cssClass,b=e.backgroundColor,y=e.borderWidth,S=e.strokeDashArray,A=e.borderRadius,E=e.borderColor,_=e.appendTo,R=_===void 0?".apexcharts-annotations":_,F=e.paddingLeft,f=F===void 0?4:F,v=e.paddingRight,C=v===void 0?4:v,M=e.paddingBottom,X=M===void 0?2:M,G=e.paddingTop,Y=G===void 0?2:G,re=this.w,te=this.graphics.drawText({x:i,y:a,text:r,textAnchor:l||"start",fontSize:h||"12px",fontWeight:p||"regular",fontFamily:d||re.config.chart.fontFamily,foreColor:o||re.config.chart.foreColor,cssClass:x}),pe=re.globals.dom.baseEl.querySelector(R);pe&&pe.appendChild(te.node);var Ce=te.bbox();if(r){var Je=this.graphics.drawRect(Ce.x-f,Ce.y-Y,Ce.width+f+C,Ce.height+X+Y,A,b||"transparent",1,y,E,S);pe.insertBefore(Je.node,te.node)}}},{key:"addImage",value:function(e,t){var i=this.w,a=e.path,r=e.x,l=r===void 0?0:r,o=e.y,h=o===void 0?0:o,d=e.width,p=d===void 0?20:d,x=e.height,b=x===void 0?20:x,y=e.appendTo,S=y===void 0?".apexcharts-annotations":y,A=i.globals.dom.Paper.image(a);A.size(p,b).move(l,h);var E=i.globals.dom.baseEl.querySelector(S);return E&&E.appendChild(A.node),A}},{key:"addXaxisAnnotationExternal",value:function(e,t,i){return this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"xaxis",contextMethod:i.addXaxisAnnotation}),i}},{key:"addYaxisAnnotationExternal",value:function(e,t,i){return this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"yaxis",contextMethod:i.addYaxisAnnotation}),i}},{key:"addPointAnnotationExternal",value:function(e,t,i){return this.invertAxis===void 0&&(this.invertAxis=i.w.globals.isBarHorizontal),this.addAnnotationExternal({params:e,pushToMemory:t,context:i,type:"point",contextMethod:i.addPointAnnotation}),i}},{key:"addAnnotationExternal",value:function(e){var t=e.params,i=e.pushToMemory,a=e.context,r=e.type,l=e.contextMethod,o=a,h=o.w,d=h.globals.dom.baseEl.querySelector(".apexcharts-".concat(r,"-annotations")),p=d.childNodes.length+1,x=new se,b=Object.assign({},r==="xaxis"?x.xAxisAnnotation:r==="yaxis"?x.yAxisAnnotation:x.pointAnnotation),y=T.extend(b,t);switch(r){case"xaxis":this.addXaxisAnnotation(y,d,p);break;case"yaxis":this.addYaxisAnnotation(y,d,p);break;case"point":this.addPointAnnotation(y,d,p)}var S=h.globals.dom.baseEl.querySelector(".apexcharts-".concat(r,"-annotations .apexcharts-").concat(r,"-annotation-label[rel='").concat(p,"']")),A=this.helpers.addBackgroundToAnno(S,y);return A&&d.insertBefore(A.node,S),i&&h.globals.memory.methodsToExec.push({context:o,id:y.id?y.id:T.randomId(),method:l,label:"addAnnotation",params:t}),a}},{key:"clearAnnotations",value:function(e){var t=e.w,i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");t.globals.memory.methodsToExec.map(function(a,r){a.label!=="addText"&&a.label!=="addAnnotation"||t.globals.memory.methodsToExec.splice(r,1)}),i=T.listToArray(i),Array.prototype.forEach.call(i,function(a){for(;a.firstChild;)a.removeChild(a.firstChild)})}},{key:"removeAnnotation",value:function(e,t){var i=e.w,a=i.globals.dom.baseEl.querySelectorAll(".".concat(t));a&&(i.globals.memory.methodsToExec.map(function(r,l){r.id===t&&i.globals.memory.methodsToExec.splice(l,1)}),Array.prototype.forEach.call(a,function(r){r.parentElement.removeChild(r)}))}}]),L}(),ge=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.opts=null,this.seriesIndex=0}return k(L,[{key:"clippedImgArea",value:function(e){var t=this.w,i=t.config,a=parseInt(t.globals.gridWidth,10),r=parseInt(t.globals.gridHeight,10),l=a>r?a:r,o=e.image,h=0,d=0;e.width===void 0&&e.height===void 0?i.fill.image.width!==void 0&&i.fill.image.height!==void 0?(h=i.fill.image.width+1,d=i.fill.image.height):(h=l+1,d=l):(h=e.width,d=e.height);var p=document.createElementNS(t.globals.SVGNS,"pattern");H.setAttrs(p,{id:e.patternID,patternUnits:e.patternUnits?e.patternUnits:"userSpaceOnUse",width:h+"px",height:d+"px"});var x=document.createElementNS(t.globals.SVGNS,"image");p.appendChild(x),x.setAttributeNS(window.SVG.xlink,"href",o),H.setAttrs(x,{x:0,y:0,preserveAspectRatio:"none",width:h+"px",height:d+"px"}),x.style.opacity=e.opacity,t.globals.dom.elDefs.node.appendChild(p)}},{key:"getSeriesIndex",value:function(e){var t=this.w;return(t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")&&t.config.plotOptions.bar.distributed||t.config.chart.type==="heatmap"||t.config.chart.type==="treemap"?this.seriesIndex=e.seriesNumber:this.seriesIndex=e.seriesNumber%t.globals.series.length,this.seriesIndex}},{key:"fillPath",value:function(e){var t=this.w;this.opts=e;var i,a,r,l=this.w.config;this.seriesIndex=this.getSeriesIndex(e);var o=this.getFillColors()[this.seriesIndex];t.globals.seriesColors[this.seriesIndex]!==void 0&&(o=t.globals.seriesColors[this.seriesIndex]),typeof o=="function"&&(o=o({seriesIndex:this.seriesIndex,dataPointIndex:e.dataPointIndex,value:e.value,w:t}));var h=this.getFillType(this.seriesIndex),d=Array.isArray(l.fill.opacity)?l.fill.opacity[this.seriesIndex]:l.fill.opacity;e.color&&(o=e.color);var p=o;if(o.indexOf("rgb")===-1?o.length<9&&(p=T.hexToRgba(o,d)):o.indexOf("rgba")>-1&&(d=T.getOpacityFromRGBA(o)),e.opacity&&(d=e.opacity),h==="pattern"&&(a=this.handlePatternFill(a,o,d,p)),h==="gradient"&&(r=this.handleGradientFill(o,d,this.seriesIndex)),h==="image"){var x=l.fill.image.src,b=e.patternID?e.patternID:"";this.clippedImgArea({opacity:d,image:Array.isArray(x)?e.seriesNumber<x.length?x[e.seriesNumber]:x[0]:x,width:e.width?e.width:void 0,height:e.height?e.height:void 0,patternUnits:e.patternUnits,patternID:"pattern".concat(t.globals.cuid).concat(e.seriesNumber+1).concat(b)}),i="url(#pattern".concat(t.globals.cuid).concat(e.seriesNumber+1).concat(b,")")}else i=h==="gradient"?r:h==="pattern"?a:p;return e.solid&&(i=p),i}},{key:"getFillType",value:function(e){var t=this.w;return Array.isArray(t.config.fill.type)?t.config.fill.type[e]:t.config.fill.type}},{key:"getFillColors",value:function(){var e=this.w,t=e.config,i=this.opts,a=[];return e.globals.comboCharts?e.config.series[this.seriesIndex].type==="line"?Array.isArray(e.globals.stroke.colors)?a=e.globals.stroke.colors:a.push(e.globals.stroke.colors):Array.isArray(e.globals.fill.colors)?a=e.globals.fill.colors:a.push(e.globals.fill.colors):t.chart.type==="line"?Array.isArray(e.globals.stroke.colors)?a=e.globals.stroke.colors:a.push(e.globals.stroke.colors):Array.isArray(e.globals.fill.colors)?a=e.globals.fill.colors:a.push(e.globals.fill.colors),i.fillColors!==void 0&&(a=[],Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)),a}},{key:"handlePatternFill",value:function(e,t,i,a){var r=this.w.config,l=this.opts,o=new H(this.ctx),h=r.fill.pattern.strokeWidth===void 0?Array.isArray(r.stroke.width)?r.stroke.width[this.seriesIndex]:r.stroke.width:Array.isArray(r.fill.pattern.strokeWidth)?r.fill.pattern.strokeWidth[this.seriesIndex]:r.fill.pattern.strokeWidth,d=t;return Array.isArray(r.fill.pattern.style)?e=r.fill.pattern.style[l.seriesNumber]!==void 0?o.drawPattern(r.fill.pattern.style[l.seriesNumber],r.fill.pattern.width,r.fill.pattern.height,d,h,i):a:e=o.drawPattern(r.fill.pattern.style,r.fill.pattern.width,r.fill.pattern.height,d,h,i),e}},{key:"handleGradientFill",value:function(e,t,i){var a,r=this.w.config,l=this.opts,o=new H(this.ctx),h=new T,d=r.fill.gradient.type,p=e,x=r.fill.gradient.opacityFrom===void 0?t:Array.isArray(r.fill.gradient.opacityFrom)?r.fill.gradient.opacityFrom[i]:r.fill.gradient.opacityFrom;p.indexOf("rgba")>-1&&(x=T.getOpacityFromRGBA(p));var b=r.fill.gradient.opacityTo===void 0?t:Array.isArray(r.fill.gradient.opacityTo)?r.fill.gradient.opacityTo[i]:r.fill.gradient.opacityTo;if(r.fill.gradient.gradientToColors===void 0||r.fill.gradient.gradientToColors.length===0)a=r.fill.gradient.shade==="dark"?h.shadeColor(-1*parseFloat(r.fill.gradient.shadeIntensity),e.indexOf("rgb")>-1?T.rgb2hex(e):e):h.shadeColor(parseFloat(r.fill.gradient.shadeIntensity),e.indexOf("rgb")>-1?T.rgb2hex(e):e);else if(r.fill.gradient.gradientToColors[l.seriesNumber]){var y=r.fill.gradient.gradientToColors[l.seriesNumber];a=y,y.indexOf("rgba")>-1&&(b=T.getOpacityFromRGBA(y))}else a=e;if(r.fill.gradient.inverseColors){var S=p;p=a,a=S}return p.indexOf("rgb")>-1&&(p=T.rgb2hex(p)),a.indexOf("rgb")>-1&&(a=T.rgb2hex(a)),o.drawGradient(d,p,a,x,b,l.size,r.fill.gradient.stops,r.fill.gradient.colorStops,i)}}]),L}(),Ve=function(){function L(e,t){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"setGlobalMarkerSize",value:function(){var e=this.w;if(e.globals.markers.size=Array.isArray(e.config.markers.size)?e.config.markers.size:[e.config.markers.size],e.globals.markers.size.length>0){if(e.globals.markers.size.length<e.globals.series.length+1)for(var t=0;t<=e.globals.series.length;t++)e.globals.markers.size[t]===void 0&&e.globals.markers.size.push(e.globals.markers.size[0])}else e.globals.markers.size=e.config.series.map(function(i){return e.config.markers.size})}},{key:"plotChartMarkers",value:function(e,t,i,a){var r,l=arguments.length>4&&arguments[4]!==void 0&&arguments[4],o=this.w,h=t,d=e,p=null,x=new H(this.ctx),b=o.config.markers.discrete&&o.config.markers.discrete.length;if((o.globals.markers.size[t]>0||l||b)&&(p=x.group({class:l||b?"":"apexcharts-series-markers"})).attr("clip-path","url(#gridRectMarkerMask".concat(o.globals.cuid,")")),Array.isArray(d.x))for(var y=0;y<d.x.length;y++){var S=i;i===1&&y===0&&(S=0),i===1&&y===1&&(S=1);var A="apexcharts-marker";o.config.chart.type!=="line"&&o.config.chart.type!=="area"||o.globals.comboCharts||o.config.tooltip.intersect||(A+=" no-pointer-events");var E=Array.isArray(o.config.markers.size)?o.globals.markers.size[t]>0:o.config.markers.size>0;if(E||l||b){T.isNumber(d.y[y])?A+=" w".concat(T.randomId()):A="apexcharts-nullpoint";var _=this.getMarkerConfig({cssClass:A,seriesIndex:t,dataPointIndex:S});o.config.series[h].data[S]&&(o.config.series[h].data[S].fillColor&&(_.pointFillColor=o.config.series[h].data[S].fillColor),o.config.series[h].data[S].strokeColor&&(_.pointStrokeColor=o.config.series[h].data[S].strokeColor)),a&&(_.pSize=a),(r=x.drawMarker(d.x[y],d.y[y],_)).attr("rel",S),r.attr("j",S),r.attr("index",t),r.node.setAttribute("default-marker-size",_.pSize);var R=new Z(this.ctx);R.setSelectionFilter(r,t,S),this.addEvents(r),p&&p.add(r)}else o.globals.pointsArray[t]===void 0&&(o.globals.pointsArray[t]=[]),o.globals.pointsArray[t].push([d.x[y],d.y[y]])}return p}},{key:"getMarkerConfig",value:function(e){var t=e.cssClass,i=e.seriesIndex,a=e.dataPointIndex,r=a===void 0?null:a,l=e.finishRadius,o=l===void 0?null:l,h=this.w,d=this.getMarkerStyle(i),p=h.globals.markers.size[i],x=h.config.markers;return r!==null&&x.discrete.length&&x.discrete.map(function(b){b.seriesIndex===i&&b.dataPointIndex===r&&(d.pointStrokeColor=b.strokeColor,d.pointFillColor=b.fillColor,p=b.size,d.pointShape=b.shape)}),{pSize:o===null?p:o,pRadius:x.radius,width:Array.isArray(x.width)?x.width[i]:x.width,height:Array.isArray(x.height)?x.height[i]:x.height,pointStrokeWidth:Array.isArray(x.strokeWidth)?x.strokeWidth[i]:x.strokeWidth,pointStrokeColor:d.pointStrokeColor,pointFillColor:d.pointFillColor,shape:d.pointShape||(Array.isArray(x.shape)?x.shape[i]:x.shape),class:t,pointStrokeOpacity:Array.isArray(x.strokeOpacity)?x.strokeOpacity[i]:x.strokeOpacity,pointStrokeDashArray:Array.isArray(x.strokeDashArray)?x.strokeDashArray[i]:x.strokeDashArray,pointFillOpacity:Array.isArray(x.fillOpacity)?x.fillOpacity[i]:x.fillOpacity,seriesIndex:i}}},{key:"addEvents",value:function(e){var t=this.w,i=new H(this.ctx);e.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this.ctx,e)),e.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this.ctx,e)),e.node.addEventListener("mousedown",i.pathMouseDown.bind(this.ctx,e)),e.node.addEventListener("click",t.config.markers.onClick),e.node.addEventListener("dblclick",t.config.markers.onDblClick),e.node.addEventListener("touchstart",i.pathMouseDown.bind(this.ctx,e),{passive:!0})}},{key:"getMarkerStyle",value:function(e){var t=this.w,i=t.globals.markers.colors,a=t.config.markers.strokeColor||t.config.markers.strokeColors;return{pointStrokeColor:Array.isArray(a)?a[e]:a,pointFillColor:Array.isArray(i)?i[e]:i}}}]),L}(),Le=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled}return k(L,[{key:"draw",value:function(e,t,i){var a=this.w,r=new H(this.ctx),l=i.realIndex,o=i.pointsPos,h=i.zRatio,d=i.elParent,p=r.group({class:"apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});if(p.attr("clip-path","url(#gridRectMarkerMask".concat(a.globals.cuid,")")),Array.isArray(o.x))for(var x=0;x<o.x.length;x++){var b=t+1,y=!0;t===0&&x===0&&(b=0),t===0&&x===1&&(b=1);var S=0,A=a.globals.markers.size[l];if(h!==1/0){A=a.globals.seriesZ[l][b]/h;var E=a.config.plotOptions.bubble;E.minBubbleRadius&&A<E.minBubbleRadius&&(A=E.minBubbleRadius),E.maxBubbleRadius&&A>E.maxBubbleRadius&&(A=E.maxBubbleRadius)}a.config.chart.animations.enabled||(S=A);var _=o.x[x],R=o.y[x];if(S=S||0,R!==null&&a.globals.series[l][b]!==void 0||(y=!1),y){var F=this.drawPoint(_,R,S,A,l,b,t);p.add(F)}d.add(p)}}},{key:"drawPoint",value:function(e,t,i,a,r,l,o){var h=this.w,d=r,p=new j(this.ctx),x=new Z(this.ctx),b=new ge(this.ctx),y=new Ve(this.ctx),S=new H(this.ctx),A=y.getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:d,dataPointIndex:l,finishRadius:h.config.chart.type==="bubble"||h.globals.comboCharts&&h.config.series[r]&&h.config.series[r].type==="bubble"?a:null});a=A.pSize;var E,_=b.fillPath({seriesNumber:r,dataPointIndex:l,color:A.pointFillColor,patternUnits:"objectBoundingBox",value:h.globals.series[r][o]});if(A.shape==="circle"?E=S.drawCircle(i):A.shape!=="square"&&A.shape!=="rect"||(E=S.drawRect(0,0,A.width-A.pointStrokeWidth/2,A.height-A.pointStrokeWidth/2,A.pRadius)),h.config.series[d].data[l]&&h.config.series[d].data[l].fillColor&&(_=h.config.series[d].data[l].fillColor),E.attr({x:e-A.width/2-A.pointStrokeWidth/2,y:t-A.height/2-A.pointStrokeWidth/2,cx:e,cy:t,fill:_,"fill-opacity":A.pointFillOpacity,stroke:A.pointStrokeColor,r:a,"stroke-width":A.pointStrokeWidth,"stroke-dasharray":A.pointStrokeDashArray,"stroke-opacity":A.pointStrokeOpacity}),h.config.chart.dropShadow.enabled){var R=h.config.chart.dropShadow;x.dropShadow(E,R,r)}if(!this.initialAnim||h.globals.dataChanged||h.globals.resized)h.globals.animationEnded=!0;else{var F=h.config.chart.animations.speed;p.animateMarker(E,0,A.shape==="circle"?a:{width:A.width,height:A.height},F,h.globals.easing,function(){window.setTimeout(function(){p.animationCompleted(E)},100)})}if(h.globals.dataChanged&&A.shape==="circle")if(this.dynamicAnim){var f,v,C,M,X=h.config.chart.animations.dynamicAnimation.speed;(M=h.globals.previousPaths[r]&&h.globals.previousPaths[r][o])!=null&&(f=M.x,v=M.y,C=M.r!==void 0?M.r:a);for(var G=0;G<h.globals.collapsedSeries.length;G++)h.globals.collapsedSeries[G].index===r&&(X=1,a=0);e===0&&t===0&&(a=0),p.animateCircle(E,{cx:f,cy:v,r:C},{cx:e,cy:t,r:a},X,h.globals.easing)}else E.attr({r:a});return E.attr({rel:l,j:l,index:r,"default-marker-size":a}),x.setSelectionFilter(E,r,l),y.addEvents(E),E.node.classList.add("apexcharts-marker"),E}},{key:"centerTextInBubble",value:function(e){var t=this.w;return{y:e+=parseInt(t.config.dataLabels.style.fontSize,10)/4}}}]),L}(),Te=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"dataLabelsCorrection",value:function(e,t,i,a,r,l,o){var h=this.w,d=!1,p=new H(this.ctx).getTextRects(i,o),x=p.width,b=p.height;t<0&&(t=0),t>h.globals.gridHeight+b&&(t=h.globals.gridHeight+b/2),h.globals.dataLabelsRects[a]===void 0&&(h.globals.dataLabelsRects[a]=[]),h.globals.dataLabelsRects[a].push({x:e,y:t,width:x,height:b});var y=h.globals.dataLabelsRects[a].length-2,S=h.globals.lastDrawnDataLabelsIndexes[a]!==void 0?h.globals.lastDrawnDataLabelsIndexes[a][h.globals.lastDrawnDataLabelsIndexes[a].length-1]:0;if(h.globals.dataLabelsRects[a][y]!==void 0){var A=h.globals.dataLabelsRects[a][S];(e>A.x+A.width+2||t>A.y+A.height+2||e+x<A.x)&&(d=!0)}return(r===0||l)&&(d=!0),{x:e,y:t,textRects:p,drawnextLabel:d}}},{key:"drawDataLabel",value:function(e,t,i){var a=this,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:2,l=this.w,o=new H(this.ctx),h=l.config.dataLabels,d=0,p=0,x=i,b=null;if(!h.enabled||!Array.isArray(e.x))return b;b=o.group({class:"apexcharts-data-labels"});for(var y=0;y<e.x.length;y++)if(d=e.x[y]+h.offsetX,p=e.y[y]+h.offsetY+r,!isNaN(d)){i===1&&y===0&&(x=0),i===1&&y===1&&(x=1);var S=l.globals.series[t][x],A="",E=function(F){return l.config.dataLabels.formatter(F,{ctx:a.ctx,seriesIndex:t,dataPointIndex:x,w:l})};if(l.config.chart.type==="bubble"){A=E(S=l.globals.seriesZ[t][x]),p=e.y[y];var _=new Le(this.ctx),R=_.centerTextInBubble(p,t,x);p=R.y}else S!==void 0&&(A=E(S));this.plotDataLabelsText({x:d,y:p,text:A,i:t,j:x,parent:b,offsetCorrection:!0,dataLabelsConfig:l.config.dataLabels})}return b}},{key:"plotDataLabelsText",value:function(e){var t=this.w,i=new H(this.ctx),a=e.x,r=e.y,l=e.i,o=e.j,h=e.text,d=e.textAnchor,p=e.fontSize,x=e.parent,b=e.dataLabelsConfig,y=e.color,S=e.alwaysDrawDataLabel,A=e.offsetCorrection;if(!(Array.isArray(t.config.dataLabels.enabledOnSeries)&&t.config.dataLabels.enabledOnSeries.indexOf(l)<0)){var E={x:a,y:r,drawnextLabel:!0,textRects:null};A&&(E=this.dataLabelsCorrection(a,r,h,l,o,S,parseInt(b.style.fontSize,10))),t.globals.zoomed||(a=E.x,r=E.y),E.textRects&&(a<-10-E.textRects.width||a>t.globals.gridWidth+E.textRects.width+10)&&(h="");var _=t.globals.dataLabels.style.colors[l];((t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")&&t.config.plotOptions.bar.distributed||t.config.dataLabels.distributed)&&(_=t.globals.dataLabels.style.colors[o]),typeof _=="function"&&(_=_({series:t.globals.series,seriesIndex:l,dataPointIndex:o,w:t})),y&&(_=y);var R=b.offsetX,F=b.offsetY;if(t.config.chart.type!=="bar"&&t.config.chart.type!=="rangeBar"||(R=0,F=0),E.drawnextLabel){var f=i.drawText({width:100,height:parseInt(b.style.fontSize,10),x:a+R,y:r+F,foreColor:_,textAnchor:d||b.textAnchor,text:h,fontSize:p||b.style.fontSize,fontFamily:b.style.fontFamily,fontWeight:b.style.fontWeight||"normal"});if(f.attr({class:"apexcharts-datalabel",cx:a,cy:r}),b.dropShadow.enabled){var v=b.dropShadow;new Z(this.ctx).dropShadow(f,v)}x.add(f),t.globals.lastDrawnDataLabelsIndexes[l]===void 0&&(t.globals.lastDrawnDataLabelsIndexes[l]=[]),t.globals.lastDrawnDataLabelsIndexes[l].push(o)}}}},{key:"addBackgroundToDataLabel",value:function(e,t){var i=this.w,a=i.config.dataLabels.background,r=a.padding,l=a.padding/2,o=t.width,h=t.height,d=new H(this.ctx).drawRect(t.x-r,t.y-l/2,o+2*r,h+l,a.borderRadius,i.config.chart.background==="transparent"?"#fff":i.config.chart.background,a.opacity,a.borderWidth,a.borderColor);return a.dropShadow.enabled&&new Z(this.ctx).dropShadow(d,a.dropShadow),d}},{key:"dataLabelsBackground",value:function(){var e=this.w;if(e.config.chart.type!=="bubble")for(var t=e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"),i=0;i<t.length;i++){var a=t[i],r=a.getBBox(),l=null;if(r.width&&r.height&&(l=this.addBackgroundToDataLabel(a,r)),l){a.parentNode.insertBefore(l.node,a);var o=a.getAttribute("fill");e.config.chart.animations.enabled&&!e.globals.resized&&!e.globals.dataChanged?l.animate().attr({fill:o}):l.attr({fill:o}),a.setAttribute("fill",e.config.dataLabels.background.foreColor)}}}},{key:"bringForward",value:function(){for(var e=this.w,t=e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"),i=e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"),a=0;a<t.length;a++)i&&i.insertBefore(t[a],i.nextSibling)}}]),L}(),Ye=function(){function L(e){m(this,L),this.w=e.w,this.barCtx=e}return k(L,[{key:"handleBarDataLabels",value:function(e){var t=e.x,i=e.y,a=e.y1,r=e.y2,l=e.i,o=e.j,h=e.realIndex,d=e.series,p=e.barHeight,x=e.barWidth,b=e.barYPosition,y=e.visibleSeries,S=e.renderedPath,A=this.w,E=new H(this.barCtx.ctx),_=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[h]:this.barCtx.strokeWidth,R=t+parseFloat(x*y),F=i+parseFloat(p*y);A.globals.isXNumeric&&!A.globals.isBarHorizontal&&(R=t+parseFloat(x*(y+1)),F=i+parseFloat(p*(y+1))-_);var f=t,v=i,C={},M=A.config.dataLabels,X=this.barCtx.barOptions.dataLabels;b!==void 0&&this.barCtx.isRangeBar&&(F=b,v=b);var G=M.offsetX,Y=M.offsetY,re={width:0,height:0};if(A.config.dataLabels.enabled){var te=this.barCtx.series[l][o];re=E.getTextRects(A.globals.yLabelFormatters[0](te),parseFloat(M.style.fontSize))}var pe={x:t,y:i,i:l,j:o,renderedPath:S,bcx:R,bcy:F,barHeight:p,barWidth:x,textRects:re,strokeWidth:_,dataLabelsX:f,dataLabelsY:v,barDataLabelsConfig:X,offX:G,offY:Y};return C=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(pe):this.calculateColumnsDataLabelsPosition(pe),S.attr({cy:C.bcy,cx:C.bcx,j:o,val:d[l][o],barHeight:p,barWidth:x}),this.drawCalculatedDataLabels({x:C.dataLabelsX,y:C.dataLabelsY,val:this.barCtx.isRangeBar?[a,r]:d[l][o],i:h,j:o,barWidth:x,barHeight:p,textRects:re,dataLabelsConfig:M})}},{key:"calculateColumnsDataLabelsPosition",value:function(e){var t,i=this.w,a=e.i,r=e.j,l=e.y,o=e.bcx,h=e.barWidth,d=e.barHeight,p=e.textRects,x=e.dataLabelsY,b=e.barDataLabelsConfig,y=e.strokeWidth,S=e.offX,A=e.offY;d=Math.abs(d);var E=i.config.plotOptions.bar.dataLabels.orientation==="vertical";o-=y/2;var _=i.globals.gridWidth/i.globals.dataPoints;t=i.globals.isXNumeric?o-h/2+S:o-_+h/2+S,E&&(t=t+p.height/2-y/2-2);var R=this.barCtx.series[a][r]<0,F=l;switch(this.barCtx.isReversed&&(F=l-d+(R?2*d:0),l-=d),b.position){case"center":x=E?R?F+d/2+A:F+d/2-A:R?F-d/2+p.height/2+A:F+d/2+p.height/2-A;break;case"bottom":x=E?R?F+d+A:F+d-A:R?F-d+p.height+y+A:F+d-p.height/2+y-A;break;case"top":x=E?R?F+A:F-A:R?F-p.height/2-A:F+p.height+A}return i.config.chart.stacked||(x<0?x=0+y:x+p.height/3>i.globals.gridHeight&&(x=i.globals.gridHeight-y)),{bcx:o,bcy:l,dataLabelsX:t,dataLabelsY:x}}},{key:"calculateBarsDataLabelsPosition",value:function(e){var t=this.w,i=e.x,a=e.i,r=e.j,l=e.bcy,o=e.barHeight,h=e.barWidth,d=e.textRects,p=e.dataLabelsX,x=e.strokeWidth,b=e.barDataLabelsConfig,y=e.offX,S=e.offY,A=t.globals.gridHeight/t.globals.dataPoints;h=Math.abs(h);var E=l-(this.barCtx.isRangeBar?0:A)+o/2+d.height/2+S-3,_=this.barCtx.series[a][r]<0,R=i;switch(this.barCtx.isReversed&&(R=i+h-(_?2*h:0),i=t.globals.gridWidth-h),b.position){case"center":p=_?R+h/2-y:Math.max(d.width/2,R-h/2)+y;break;case"bottom":p=_?R+h-x-Math.round(d.width/2)-y:R-h+x+Math.round(d.width/2)+y;break;case"top":p=_?R-x+Math.round(d.width/2)-y:R-x-Math.round(d.width/2)+y}return t.config.chart.stacked||(p<0?p=p+d.width+x:p+d.width/2>t.globals.gridWidth&&(p=t.globals.gridWidth-d.width-x)),{bcx:i,bcy:l,dataLabelsX:p,dataLabelsY:E}}},{key:"drawCalculatedDataLabels",value:function(e){var t=e.x,i=e.y,a=e.val,r=e.i,l=e.j,o=e.textRects,h=e.barHeight,d=e.barWidth,p=e.dataLabelsConfig,x=this.w,b="rotate(0)";x.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(b="rotate(-90, ".concat(t,", ").concat(i,")"));var y=new Te(this.barCtx.ctx),S=new H(this.barCtx.ctx),A=p.formatter,E=null,_=x.globals.collapsedSeriesIndices.indexOf(r)>-1;if(p.enabled&&!_){E=S.group({class:"apexcharts-data-labels",transform:b});var R="";a!==void 0&&(R=A(a,{seriesIndex:r,dataPointIndex:l,w:x}));var F=x.globals.series[r][l]<0,f=x.config.plotOptions.bar.dataLabels.position;x.config.plotOptions.bar.dataLabels.orientation==="vertical"&&(f==="top"&&(p.textAnchor=F?"end":"start"),f==="center"&&(p.textAnchor="middle"),f==="bottom"&&(p.textAnchor=F?"end":"start")),this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&d<S.getTextRects(R,parseFloat(p.style.fontSize)).width&&(R=""),x.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?o.width/1.6>Math.abs(d)&&(R=""):o.height/1.6>Math.abs(h)&&(R=""));var v=u({},p);this.barCtx.isHorizontal&&a<0&&(p.textAnchor==="start"?v.textAnchor="end":p.textAnchor==="end"&&(v.textAnchor="start")),y.plotDataLabelsText({x:t,y:i,text:R,i:r,j:l,parent:E,dataLabelsConfig:v,alwaysDrawDataLabel:!0,offsetCorrection:!0})}return E}}]),L}(),$e=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.legendInactiveClass="legend-mouseover-inactive"}return k(L,[{key:"getAllSeriesEls",value:function(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")}},{key:"getSeriesByName",value:function(e){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(T.escapeString(e),"']"))}},{key:"isSeriesHidden",value:function(e){var t=this.getSeriesByName(e),i=parseInt(t.getAttribute("data:realIndex"),10);return{isHidden:t.classList.contains("apexcharts-series-collapsed"),realIndex:i}}},{key:"addCollapsedClassToSeries",value:function(e,t){var i=this.w;function a(r){for(var l=0;l<r.length;l++)r[l].index===t&&e.node.classList.add("apexcharts-series-collapsed")}a(i.globals.collapsedSeries),a(i.globals.ancillaryCollapsedSeries)}},{key:"toggleSeries",value:function(e){var t=this.isSeriesHidden(e);return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,t.isHidden),t.isHidden}},{key:"showSeries",value:function(e){var t=this.isSeriesHidden(e);t.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,!0)}},{key:"hideSeries",value:function(e){var t=this.isSeriesHidden(e);t.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex,!1)}},{key:"resetSeries",value:function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=this.w,r=T.clone(a.globals.initialSeries);a.globals.previousPaths=[],i?(a.globals.collapsedSeries=[],a.globals.ancillaryCollapsedSeries=[],a.globals.collapsedSeriesIndices=[],a.globals.ancillaryCollapsedSeriesIndices=[]):r=this.emptyCollapsedSeries(r),a.config.series=r,e&&(t&&(a.globals.zoomed=!1,this.ctx.updateHelpers.revertDefaultAxisMinMax()),this.ctx.updateHelpers._updateSeries(r,a.config.chart.animations.dynamicAnimation.enabled))}},{key:"emptyCollapsedSeries",value:function(e){for(var t=this.w,i=0;i<e.length;i++)t.globals.collapsedSeriesIndices.indexOf(i)>-1&&(e[i].data=[]);return e}},{key:"toggleSeriesOnHover",value:function(e,t){var i=this.w;t||(t=e.target);var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if(e.type==="mousemove"){var r=parseInt(t.getAttribute("rel"),10)-1,l=null,o=null;i.globals.axisCharts||i.config.chart.type==="radialBar"?i.globals.axisCharts?(l=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(r,"']")),o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(r,"']"))):l=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r+1,"']")):l=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r+1,"'] path"));for(var h=0;h<a.length;h++)a[h].classList.add(this.legendInactiveClass);l!==null&&(i.globals.axisCharts||l.parentNode.classList.remove(this.legendInactiveClass),l.classList.remove(this.legendInactiveClass),o!==null&&o.classList.remove(this.legendInactiveClass))}else if(e.type==="mouseout")for(var d=0;d<a.length;d++)a[d].classList.remove(this.legendInactiveClass)}},{key:"highlightRangeInSeries",value:function(e,t){var i=this,a=this.w,r=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"),l=function(h){for(var d=0;d<r.length;d++)r[d].classList[h](i.legendInactiveClass)};if(e.type==="mousemove"){var o=parseInt(t.getAttribute("rel"),10)-1;l("add"),function(h){for(var d=0;d<r.length;d++){var p=parseInt(r[d].getAttribute("val"),10);p>=h.from&&p<=h.to&&r[d].classList.remove(i.legendInactiveClass)}}(a.config.plotOptions.heatmap.colorScale.ranges[o])}else e.type==="mouseout"&&l("remove")}},{key:"getActiveConfigSeriesIndex",value:function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"asc",i=this.w,a=0;if(i.config.series.length>1){for(var r=i.config.series.map(function(o,h){var d=!1;return e&&(d=i.config.series[h].type==="bar"||i.config.series[h].type==="column"),o.data&&o.data.length>0&&!d?h:-1}),l=t==="asc"?0:r.length-1;t==="asc"?l<r.length:l>=0;t==="asc"?l++:l--)if(r[l]!==-1){a=r[l];break}}return a}},{key:"getPreviousPaths",value:function(){var e=this.w;function t(l,o,h){for(var d=l[o].childNodes,p={type:h,paths:[],realIndex:l[o].getAttribute("data:realIndex")},x=0;x<d.length;x++)if(d[x].hasAttribute("pathTo")){var b=d[x].getAttribute("pathTo");p.paths.push({d:b})}e.globals.previousPaths.push(p)}e.globals.previousPaths=[],["line","area","bar","rangebar","candlestick","radar"].forEach(function(l){for(var o,h=(o=l,e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o,"-series .apexcharts-series"))),d=0;d<h.length;d++)t(h,d,l)}),this.handlePrevBubbleScatterPaths("bubble"),this.handlePrevBubbleScatterPaths("scatter");var i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type," .apexcharts-series"));if(i.length>0)for(var a=function(l){for(var o=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(l,"'] rect")),h=[],d=function(x){var b=function(S){return o[x].getAttribute(S)},y={x:parseFloat(b("x")),y:parseFloat(b("y")),width:parseFloat(b("width")),height:parseFloat(b("height"))};h.push({rect:y,color:o[x].getAttribute("color")})},p=0;p<o.length;p++)d(p);e.globals.previousPaths.push(h)},r=0;r<i.length;r++)a(r);e.globals.axisCharts||(e.globals.previousPaths=e.globals.series)}},{key:"handlePrevBubbleScatterPaths",value:function(e){var t=this.w,i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e,"-series .apexcharts-series"));if(i.length>0)for(var a=0;a<i.length;a++){for(var r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e,"-series .apexcharts-series[data\\:realIndex='").concat(a,"'] circle")),l=[],o=0;o<r.length;o++)l.push({x:r[o].getAttribute("cx"),y:r[o].getAttribute("cy"),r:r[o].getAttribute("r")});t.globals.previousPaths.push(l)}}},{key:"clearPreviousPaths",value:function(){var e=this.w;e.globals.previousPaths=[],e.globals.allSeriesCollapsed=!1}},{key:"handleNoData",value:function(){var e=this.w,t=e.config.noData,i=new H(this.ctx),a=e.globals.svgWidth/2,r=e.globals.svgHeight/2,l="middle";if(e.globals.noData=!0,e.globals.animationEnded=!0,t.align==="left"?(a=10,l="start"):t.align==="right"&&(a=e.globals.svgWidth-10,l="end"),t.verticalAlign==="top"?r=50:t.verticalAlign==="bottom"&&(r=e.globals.svgHeight-50),a+=t.offsetX,r=r+parseInt(t.style.fontSize,10)+2+t.offsetY,t.text!==void 0&&t.text!==""){var o=i.drawText({x:a,y:r,text:t.text,textAnchor:l,fontSize:t.style.fontSize,fontFamily:t.style.fontFamily,foreColor:t.style.color,opacity:1,class:"apexcharts-text-nodata"});e.globals.dom.Paper.add(o)}}},{key:"setNullSeriesToZeroValues",value:function(e){for(var t=this.w,i=0;i<e.length;i++)if(e[i].length===0)for(var a=0;a<e[t.globals.maxValsInArrayIndex].length;a++)e[i].push(0);return e}},{key:"hasAllSeriesEqualX",value:function(){for(var e=!0,t=this.w,i=this.filteredSeriesX(),a=0;a<i.length-1;a++)if(i[a][0]!==i[a+1][0]){e=!1;break}return t.globals.allSeriesHasEqualX=e,e}},{key:"filteredSeriesX",value:function(){var e=this.w.globals.seriesX.map(function(t){return t.length>0?t:[]});return e}}]),L}(),Gt=function(){function L(e){m(this,L),this.w=e.w,this.barCtx=e}return k(L,[{key:"initVariables",value:function(e){var t=this.w;this.barCtx.series=e,this.barCtx.totalItems=0,this.barCtx.seriesLen=0,this.barCtx.visibleI=-1,this.barCtx.visibleItems=1;for(var i=0;i<e.length;i++)if(e[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1,this.barCtx.totalItems+=e[i].length),t.globals.isXNumeric)for(var a=0;a<e[i].length;a++)t.globals.seriesX[i][a]>t.globals.minX&&t.globals.seriesX[i][a]<t.globals.maxX&&this.barCtx.visibleItems++;else this.barCtx.visibleItems=t.globals.dataPoints;this.barCtx.seriesLen===0&&(this.barCtx.seriesLen=1),this.barCtx.zeroSerieses=[],this.barCtx.radiusOnSeriesNumber=e.length-1,t.globals.comboCharts||this.checkZeroSeries({series:e})}},{key:"initialPositions",value:function(){var e,t,i,a,r,l,o,h,d=this.w,p=d.globals.dataPoints;this.barCtx.isRangeBar&&(p=d.globals.labels.length);var x=this.barCtx.seriesLen;if(d.config.plotOptions.bar.rangeBarGroupRows&&(x=1),this.barCtx.isHorizontal)r=(i=d.globals.gridHeight/p)/x,d.globals.isXNumeric&&(r=(i=d.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen),r=r*parseInt(this.barCtx.barOptions.barHeight,10)/100,h=this.barCtx.baseLineInvertedY+d.globals.padHorizontal+(this.barCtx.isReversed?d.globals.gridWidth:0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0),t=(i-r*this.barCtx.seriesLen)/2;else{if(a=d.globals.gridWidth/this.barCtx.visibleItems,d.config.xaxis.convertedCatToNumeric&&(a=d.globals.gridWidth/d.globals.dataPoints),l=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100,d.globals.isXNumeric){var b=this.barCtx.xRatio;d.config.xaxis.convertedCatToNumeric&&(b=this.barCtx.initialXRatio),d.globals.minXDiff&&d.globals.minXDiff!==.5&&d.globals.minXDiff/b>0&&(a=d.globals.minXDiff/b),(l=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100)<1&&(l=1)}o=d.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?d.globals.gridHeight:0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0),e=d.globals.padHorizontal+(a-l*this.barCtx.seriesLen)/2}return{x:e,y:t,yDivision:i,xDivision:a,barHeight:r,barWidth:l,zeroH:o,zeroW:h}}},{key:"getPathFillColor",value:function(e,t,i,a){var r=this.w,l=new ge(this.barCtx.ctx),o=null,h=this.barCtx.barOptions.distributed?i:t;return this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map(function(d){e[t][i]>=d.from&&e[t][i]<=d.to&&(o=d.color)}),r.config.series[t].data[i]&&r.config.series[t].data[i].fillColor&&(o=r.config.series[t].data[i].fillColor),l.fillPath({seriesNumber:this.barCtx.barOptions.distributed?h:a,dataPointIndex:i,color:o,value:e[t][i]})}},{key:"getStrokeWidth",value:function(e,t,i){var a=0,r=this.w;return this.barCtx.series[e][t]===void 0||this.barCtx.series[e][t]===null?this.barCtx.isNullValue=!0:this.barCtx.isNullValue=!1,r.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)),a}},{key:"barBackground",value:function(e){var t=e.j,i=e.i,a=e.x1,r=e.x2,l=e.y1,o=e.y2,h=e.elSeries,d=this.w,p=new H(this.barCtx.ctx),x=new $e(this.barCtx.ctx).getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&x===i){t>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(t%=this.barCtx.barOptions.colors.backgroundBarColors.length);var b=this.barCtx.barOptions.colors.backgroundBarColors[t],y=p.drawRect(a!==void 0?a:0,l!==void 0?l:0,r!==void 0?r:d.globals.gridWidth,o!==void 0?o:d.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,b,this.barCtx.barOptions.colors.backgroundBarOpacity);h.add(y),y.node.classList.add("apexcharts-backgroundBar")}}},{key:"getColumnPaths",value:function(e){var t=e.barWidth,i=e.barXPosition,a=e.yRatio,r=e.y1,l=e.y2,o=e.strokeWidth,h=e.series,d=e.realIndex,p=e.i,x=e.j,b=e.w,y=new H(this.barCtx.ctx);(o=Array.isArray(o)?o[d]:o)||(o=0);var S={barWidth:t,strokeWidth:o,yRatio:a,barXPosition:i,y1:r,y2:l},A=this.getRoundedBars(b,S,h,p,x),E=i,_=i+t,R=y.move(E,r),F=y.move(E,r),f=y.line(_-o,r);return b.globals.previousPaths.length>0&&(F=this.barCtx.getPreviousPath(d,x,!1)),R=R+y.line(E,A.y2)+A.pathWithRadius+y.line(_-o,A.y2)+f+f+"z",F=F+y.line(E,r)+f+f+f+f+f+y.line(E,r),b.config.chart.stacked&&(this.barCtx.yArrj.push(A.y2WithRadius),this.barCtx.yArrjF.push(Math.abs(r-A.y2WithRadius)),this.barCtx.yArrjVal.push(this.barCtx.series[p][x])),{pathTo:R,pathFrom:F}}},{key:"getBarpaths",value:function(e){var t=e.barYPosition,i=e.barHeight,a=e.x1,r=e.x2,l=e.strokeWidth,o=e.series,h=e.realIndex,d=e.i,p=e.j,x=e.w,b=new H(this.barCtx.ctx);(l=Array.isArray(l)?l[h]:l)||(l=0);var y={barHeight:i,strokeWidth:l,barYPosition:t,x2:r,x1:a},S=this.getRoundedBars(x,y,o,d,p),A=b.move(a,t),E=b.move(a,t);x.globals.previousPaths.length>0&&(E=this.barCtx.getPreviousPath(h,p,!1));var _=t,R=t+i,F=b.line(a,R-l);return A=A+b.line(S.x2,_)+S.pathWithRadius+b.line(S.x2,R-l)+F+F+"z",E=E+b.line(a,_)+F+F+F+F+F+b.line(a,_),x.config.chart.stacked&&(this.barCtx.xArrj.push(S.x2WithRadius),this.barCtx.xArrjF.push(Math.abs(a-S.x2WithRadius)),this.barCtx.xArrjVal.push(this.barCtx.series[d][p])),{pathTo:A,pathFrom:E}}},{key:"getRoundedBars",value:function(e,t,i,a,r){var l=new H(this.barCtx.ctx),o=0,h=e.config.plotOptions.bar.borderRadius,d=Array.isArray(h);if(d?o=h[a>h.length-1?h.length-1:a]:o=h,e.config.chart.stacked&&i.length>1&&a!==this.barCtx.radiusOnSeriesNumber&&!d&&(o=0),this.barCtx.isHorizontal){var p="",x=t.x2;if(Math.abs(t.x1-t.x2)<o&&(o=Math.abs(t.x1-t.x2)),i[a][r]!==void 0||i[a][r]!==null){var b=this.barCtx.isReversed?i[a][r]>0:i[a][r]<0;b&&(o*=-1),x-=o,p=l.quadraticCurve(x+o,t.barYPosition,x+o,t.barYPosition+(b?-1*o:o))+l.line(x+o,t.barYPosition+t.barHeight-t.strokeWidth-(b?-1*o:o))+l.quadraticCurve(x+o,t.barYPosition+t.barHeight-t.strokeWidth,x,t.barYPosition+t.barHeight-t.strokeWidth)}return{pathWithRadius:p,x2WithRadius:x+o,x2:x}}var y="",S=t.y2;if(Math.abs(t.y1-t.y2)<o&&(o=Math.abs(t.y1-t.y2)),i[a][r]!==void 0||i[a][r]!==null){var A=i[a][r]<0;A&&(o*=-1),S+=o,y=l.quadraticCurve(t.barXPosition,S-o,t.barXPosition+(A?-1*o:o),S-o)+l.line(t.barXPosition+t.barWidth-t.strokeWidth-(A?-1*o:o),S-o)+l.quadraticCurve(t.barXPosition+t.barWidth-t.strokeWidth,S-o,t.barXPosition+t.barWidth-t.strokeWidth,S)}return{pathWithRadius:y,y2WithRadius:S-o,y2:S}}},{key:"checkZeroSeries",value:function(e){for(var t=e.series,i=this.w,a=0;a<t.length;a++){for(var r=0,l=0;l<t[i.globals.maxValsInArrayIndex].length;l++)r+=t[a][l];r===0&&this.barCtx.zeroSerieses.push(a)}for(var o=t.length-1;o>=0;o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);for(var h=t.length-1;h>=0;h--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1)}},{key:"getXForValue",value:function(e,t){var i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=i?t:null;return e!=null&&(a=t+e/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?e/this.barCtx.invertedYRatio:0)),a}},{key:"getYForValue",value:function(e,t){var i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=i?t:null;return e!=null&&(a=t-e/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?e/this.barCtx.yRatio[this.barCtx.yaxisIndex]:0)),a}},{key:"getGoalValues",value:function(e,t,i,a,r){var l=this,o=this.w,h=[];return o.globals.seriesGoals[a]&&o.globals.seriesGoals[a][r]&&Array.isArray(o.globals.seriesGoals[a][r])&&o.globals.seriesGoals[a][r].forEach(function(d){var p;h.push((P(p={},e,e==="x"?l.getXForValue(d.value,t,!1):l.getYForValue(d.value,i,!1)),P(p,"attrs",d),p))}),h}},{key:"drawGoalLine",value:function(e){var t=e.barXPosition,i=e.barYPosition,a=e.goalX,r=e.goalY,l=e.barWidth,o=e.barHeight,h=new H(this.barCtx.ctx),d=h.group({className:"apexcharts-bar-goals-groups"}),p=null;return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach(function(x){var b=x.attrs.strokeHeight!==void 0?x.attrs.strokeHeight:o/2,y=i+b+o/2;p=h.drawLine(x.x,y-2*b,x.x,y,x.attrs.strokeColor?x.attrs.strokeColor:void 0,x.attrs.strokeDashArray,x.attrs.strokeWidth?x.attrs.strokeWidth:2,x.attrs.strokeLineCap),d.add(p)}):Array.isArray(r)&&r.forEach(function(x){var b=x.attrs.strokeWidth!==void 0?x.attrs.strokeWidth:l/2,y=t+b+l/2;p=h.drawLine(y-2*b,x.y,y,x.y,x.attrs.strokeColor?x.attrs.strokeColor:void 0,x.attrs.strokeDashArray,x.attrs.strokeHeight?x.attrs.strokeHeight:2,x.attrs.strokeLineCap),d.add(p)}),d}}]),L}(),nt=function(){function L(e,t){m(this,L),this.ctx=e,this.w=e.w;var i=this.w;this.barOptions=i.config.plotOptions.bar,this.isHorizontal=this.barOptions.horizontal,this.strokeWidth=i.config.stroke.width,this.isNullValue=!1,this.isRangeBar=i.globals.seriesRangeBar.length&&this.isHorizontal,this.xyRatios=t,this.xyRatios!==null&&(this.xRatio=t.xRatio,this.initialXRatio=t.initialXRatio,this.yRatio=t.yRatio,this.invertedXRatio=t.invertedXRatio,this.invertedYRatio=t.invertedYRatio,this.baseLineY=t.baseLineY,this.baseLineInvertedY=t.baseLineInvertedY),this.yaxisIndex=0,this.seriesLen=0,this.barHelpers=new Gt(this)}return k(L,[{key:"draw",value:function(e,t){var i=this.w,a=new H(this.ctx),r=new ce(this.ctx,i);e=r.getLogSeries(e),this.series=e,this.yRatio=r.getLogYRatios(this.yRatio),this.barHelpers.initVariables(e);var l=a.group({class:"apexcharts-bar-series apexcharts-plot-series"});i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");for(var o=0,h=0;o<e.length;o++,h++){var d,p,x,b,y=void 0,S=void 0,A=[],E=[],_=i.globals.comboCharts?t[o]:o,R=a.group({class:"apexcharts-series",rel:o+1,seriesName:T.escapeString(i.globals.seriesNames[_]),"data:realIndex":_});this.ctx.series.addCollapsedClassToSeries(R,_),e[o].length>0&&(this.visibleI=this.visibleI+1);var F=0,f=0;this.yRatio.length>1&&(this.yaxisIndex=_),this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;var v=this.barHelpers.initialPositions();S=v.y,F=v.barHeight,p=v.yDivision,b=v.zeroW,y=v.x,f=v.barWidth,d=v.xDivision,x=v.zeroH,this.horizontal||E.push(y+f/2);for(var C=a.group({class:"apexcharts-datalabels","data:realIndex":_}),M=a.group({class:"apexcharts-bar-goals-markers",style:"pointer-events: none"}),X=0;X<i.globals.dataPoints;X++){var G=this.barHelpers.getStrokeWidth(o,X,_),Y=null,re={indexes:{i:o,j:X,realIndex:_,bc:h},x:y,y:S,strokeWidth:G,elSeries:R};this.isHorizontal?(Y=this.drawBarPaths(u(u({},re),{},{barHeight:F,zeroW:b,yDivision:p})),f=this.series[o][X]/this.invertedYRatio):(Y=this.drawColumnPaths(u(u({},re),{},{xDivision:d,barWidth:f,zeroH:x})),F=this.series[o][X]/this.yRatio[this.yaxisIndex]);var te=this.barHelpers.drawGoalLine({barXPosition:Y.barXPosition,barYPosition:Y.barYPosition,goalX:Y.goalX,goalY:Y.goalY,barHeight:F,barWidth:f});te&&M.add(te),S=Y.y,y=Y.x,X>0&&E.push(y+f/2),A.push(S);var pe=this.barHelpers.getPathFillColor(e,o,X,_);this.renderSeries({realIndex:_,pathFill:pe,j:X,i:o,pathFrom:Y.pathFrom,pathTo:Y.pathTo,strokeWidth:G,elSeries:R,x:y,y:S,series:e,barHeight:F,barWidth:f,elDataLabelsWrap:C,elGoalsMarkers:M,visibleSeries:this.visibleI,type:"bar"})}i.globals.seriesXvalues[_]=E,i.globals.seriesYvalues[_]=A,l.add(R)}return l}},{key:"renderSeries",value:function(e){var t=e.realIndex,i=e.pathFill,a=e.lineFill,r=e.j,l=e.i,o=e.pathFrom,h=e.pathTo,d=e.strokeWidth,p=e.elSeries,x=e.x,b=e.y,y=e.y1,S=e.y2,A=e.series,E=e.barHeight,_=e.barWidth,R=e.barYPosition,F=e.elDataLabelsWrap,f=e.elGoalsMarkers,v=e.visibleSeries,C=e.type,M=this.w,X=new H(this.ctx);a||(a=this.barOptions.distributed?M.globals.stroke.colors[r]:M.globals.stroke.colors[t]),M.config.series[l].data[r]&&M.config.series[l].data[r].strokeColor&&(a=M.config.series[l].data[r].strokeColor),this.isNullValue&&(i="none");var G=r/M.config.chart.animations.animateGradually.delay*(M.config.chart.animations.speed/M.globals.dataPoints)/2.4,Y=X.renderPaths({i:l,j:r,realIndex:t,pathFrom:o,pathTo:h,stroke:a,strokeWidth:d,strokeLineCap:M.config.stroke.lineCap,fill:i,animationDelay:G,initialSpeed:M.config.chart.animations.speed,dataChangeSpeed:M.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(C,"-area")});Y.attr("clip-path","url(#gridRectMask".concat(M.globals.cuid,")"));var re=M.config.forecastDataPoints;re.count>0&&r>=M.globals.dataPoints-re.count&&(Y.node.setAttribute("stroke-dasharray",re.dashArray),Y.node.setAttribute("stroke-width",re.strokeWidth),Y.node.setAttribute("fill-opacity",re.fillOpacity)),y!==void 0&&S!==void 0&&(Y.attr("data-range-y1",y),Y.attr("data-range-y2",S)),new Z(this.ctx).setSelectionFilter(Y,t,r),p.add(Y);var te=new Ye(this).handleBarDataLabels({x,y:b,y1:y,y2:S,i:l,j:r,series:A,realIndex:t,barHeight:E,barWidth:_,barYPosition:R,renderedPath:Y,visibleSeries:v});return te!==null&&F.add(te),p.add(F),f&&p.add(f),p}},{key:"drawBarPaths",value:function(e){var t=e.indexes,i=e.barHeight,a=e.strokeWidth,r=e.zeroW,l=e.x,o=e.y,h=e.yDivision,d=e.elSeries,p=this.w,x=t.i,b=t.j;p.globals.isXNumeric&&(o=(p.globals.seriesX[x][b]-p.globals.minX)/this.invertedXRatio-i);var y=o+i*this.visibleI;l=this.barHelpers.getXForValue(this.series[x][b],r);var S=this.barHelpers.getBarpaths({barYPosition:y,barHeight:i,x1:r,x2:l,strokeWidth:a,series:this.series,realIndex:t.realIndex,i:x,j:b,w:p});return p.globals.isXNumeric||(o+=h),this.barHelpers.barBackground({j:b,i:x,y1:y-i*this.visibleI,y2:i*this.seriesLen,elSeries:d}),{pathTo:S.pathTo,pathFrom:S.pathFrom,x:l,y:o,goalX:this.barHelpers.getGoalValues("x",r,null,x,b),barYPosition:y}}},{key:"drawColumnPaths",value:function(e){var t=e.indexes,i=e.x,a=e.y,r=e.xDivision,l=e.barWidth,o=e.zeroH,h=e.strokeWidth,d=e.elSeries,p=this.w,x=t.realIndex,b=t.i,y=t.j,S=t.bc;if(p.globals.isXNumeric){var A=x;p.globals.seriesX[x].length||(A=p.globals.maxValsInArrayIndex),i=(p.globals.seriesX[A][y]-p.globals.minX)/this.xRatio-l*this.seriesLen/2}var E=i+l*this.visibleI;a=this.barHelpers.getYForValue(this.series[b][y],o);var _=this.barHelpers.getColumnPaths({barXPosition:E,barWidth:l,y1:o,y2:a,strokeWidth:h,series:this.series,realIndex:t.realIndex,i:b,j:y,w:p});return p.globals.isXNumeric||(i+=r),this.barHelpers.barBackground({bc:S,j:y,i:b,x1:E-h/2-l*this.visibleI,x2:l*this.seriesLen+h/2,elSeries:d}),{pathTo:_.pathTo,pathFrom:_.pathFrom,x:i,y:a,goalY:this.barHelpers.getGoalValues("y",null,o,b,y),barXPosition:E}}},{key:"getPreviousPath",value:function(e,t){for(var i,a=this.w,r=0;r<a.globals.previousPaths.length;r++){var l=a.globals.previousPaths[r];l.paths&&l.paths.length>0&&parseInt(l.realIndex,10)===parseInt(e,10)&&a.globals.previousPaths[r].paths[t]!==void 0&&(i=a.globals.previousPaths[r].paths[t].d)}return i}}]),L}(),je=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.months31=[1,3,5,7,8,10,12],this.months30=[2,4,6,9,11],this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334]}return k(L,[{key:"isValidDate",value:function(e){return!isNaN(this.parseDate(e))}},{key:"getTimeStamp",value:function(e){return Date.parse(e)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(e).toISOString().substr(0,25)).getTime():new Date(e).getTime():e}},{key:"getDate",value:function(e){return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(e).toUTCString()):new Date(e)}},{key:"parseDate",value:function(e){var t=Date.parse(e);if(!isNaN(t))return this.getTimeStamp(e);var i=Date.parse(e.replace(/-/g,"/").replace(/[a-z]+/gi," "));return i=this.getTimeStamp(i)}},{key:"parseDateWithTimezone",value:function(e){return Date.parse(e.replace(/-/g,"/").replace(/[a-z]+/gi," "))}},{key:"formatDate",value:function(e,t){var i=this.w.globals.locale,a=this.w.config.xaxis.labels.datetimeUTC,r=["\0"].concat(K(i.months)),l=[""].concat(K(i.shortMonths)),o=[""].concat(K(i.days)),h=[""].concat(K(i.shortDays));function d(X,G){var Y=X+"";for(G=G||2;Y.length<G;)Y="0"+Y;return Y}var p=a?e.getUTCFullYear():e.getFullYear();t=(t=(t=t.replace(/(^|[^\\])yyyy+/g,"$1"+p)).replace(/(^|[^\\])yy/g,"$1"+p.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+p);var x=(a?e.getUTCMonth():e.getMonth())+1;t=(t=(t=(t=t.replace(/(^|[^\\])MMMM+/g,"$1"+r[0])).replace(/(^|[^\\])MMM/g,"$1"+l[0])).replace(/(^|[^\\])MM/g,"$1"+d(x))).replace(/(^|[^\\])M/g,"$1"+x);var b=a?e.getUTCDate():e.getDate();t=(t=(t=(t=t.replace(/(^|[^\\])dddd+/g,"$1"+o[0])).replace(/(^|[^\\])ddd/g,"$1"+h[0])).replace(/(^|[^\\])dd/g,"$1"+d(b))).replace(/(^|[^\\])d/g,"$1"+b);var y=a?e.getUTCHours():e.getHours(),S=y>12?y-12:y===0?12:y;t=(t=(t=(t=t.replace(/(^|[^\\])HH+/g,"$1"+d(y))).replace(/(^|[^\\])H/g,"$1"+y)).replace(/(^|[^\\])hh+/g,"$1"+d(S))).replace(/(^|[^\\])h/g,"$1"+S);var A=a?e.getUTCMinutes():e.getMinutes();t=(t=t.replace(/(^|[^\\])mm+/g,"$1"+d(A))).replace(/(^|[^\\])m/g,"$1"+A);var E=a?e.getUTCSeconds():e.getSeconds();t=(t=t.replace(/(^|[^\\])ss+/g,"$1"+d(E))).replace(/(^|[^\\])s/g,"$1"+E);var _=a?e.getUTCMilliseconds():e.getMilliseconds();t=t.replace(/(^|[^\\])fff+/g,"$1"+d(_,3)),_=Math.round(_/10),t=t.replace(/(^|[^\\])ff/g,"$1"+d(_)),_=Math.round(_/10);var R=y<12?"AM":"PM";t=(t=(t=t.replace(/(^|[^\\])f/g,"$1"+_)).replace(/(^|[^\\])TT+/g,"$1"+R)).replace(/(^|[^\\])T/g,"$1"+R.charAt(0));var F=R.toLowerCase();t=(t=t.replace(/(^|[^\\])tt+/g,"$1"+F)).replace(/(^|[^\\])t/g,"$1"+F.charAt(0));var f=-e.getTimezoneOffset(),v=a||!f?"Z":f>0?"+":"-";if(!a){var C=(f=Math.abs(f))%60;v+=d(Math.floor(f/60))+":"+d(C)}t=t.replace(/(^|[^\\])K/g,"$1"+v);var M=(a?e.getUTCDay():e.getDay())+1;return t=(t=(t=(t=(t=t.replace(new RegExp(o[0],"g"),o[M])).replace(new RegExp(h[0],"g"),h[M])).replace(new RegExp(r[0],"g"),r[x])).replace(new RegExp(l[0],"g"),l[x])).replace(/\\(.)/g,"$1")}},{key:"getTimeUnitsfromTimestamp",value:function(e,t,i){var a=this.w;a.config.xaxis.min!==void 0&&(e=a.config.xaxis.min),a.config.xaxis.max!==void 0&&(t=a.config.xaxis.max);var r=this.getDate(e),l=this.getDate(t),o=this.formatDate(r,"yyyy MM dd HH mm ss fff").split(" "),h=this.formatDate(l,"yyyy MM dd HH mm ss fff").split(" ");return{minMillisecond:parseInt(o[6],10),maxMillisecond:parseInt(h[6],10),minSecond:parseInt(o[5],10),maxSecond:parseInt(h[5],10),minMinute:parseInt(o[4],10),maxMinute:parseInt(h[4],10),minHour:parseInt(o[3],10),maxHour:parseInt(h[3],10),minDate:parseInt(o[2],10),maxDate:parseInt(h[2],10),minMonth:parseInt(o[1],10)-1,maxMonth:parseInt(h[1],10)-1,minYear:parseInt(o[0],10),maxYear:parseInt(h[0],10)}}},{key:"isLeapYear",value:function(e){return e%4==0&&e%100!=0||e%400==0}},{key:"calculcateLastDaysOfMonth",value:function(e,t,i){return this.determineDaysOfMonths(e,t)-i}},{key:"determineDaysOfYear",value:function(e){var t=365;return this.isLeapYear(e)&&(t=366),t}},{key:"determineRemainingDaysOfYear",value:function(e,t,i){var a=this.daysCntOfYear[t]+i;return t>1&&this.isLeapYear()&&a++,a}},{key:"determineDaysOfMonths",value:function(e,t){var i=30;switch(e=T.monthMod(e),!0){case this.months30.indexOf(e)>-1:e===2&&(i=this.isLeapYear(t)?29:28);break;case this.months31.indexOf(e)>-1:default:i=31}return i}}]),L}(),ot=function(L){I(t,nt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return k(t,[{key:"draw",value:function(i,a){var r=this.w,l=new H(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar,this.series=i,this.seriesRangeStart=r.globals.seriesRangeStart,this.seriesRangeEnd=r.globals.seriesRangeEnd,this.barHelpers.initVariables(i);for(var o=l.group({class:"apexcharts-rangebar-series apexcharts-plot-series"}),h=0;h<i.length;h++){var d,p,x,b=void 0,y=void 0,S=void 0,A=r.globals.comboCharts?a[h]:h,E=l.group({class:"apexcharts-series",seriesName:T.escapeString(r.globals.seriesNames[A]),rel:h+1,"data:realIndex":A});this.ctx.series.addCollapsedClassToSeries(E,A),i[h].length>0&&(this.visibleI=this.visibleI+1);var _=0,R=0;this.yRatio.length>1&&(this.yaxisIndex=A);var F=this.barHelpers.initialPositions();y=F.y,x=F.zeroW,b=F.x,R=F.barWidth,d=F.xDivision,p=F.zeroH;for(var f=l.group({class:"apexcharts-datalabels","data:realIndex":A}),v=l.group({class:"apexcharts-rangebar-goals-markers",style:"pointer-events: none"}),C=0;C<r.globals.dataPoints;C++){var M=this.barHelpers.getStrokeWidth(h,C,A),X=this.seriesRangeStart[h][C],G=this.seriesRangeEnd[h][C],Y=null,re=null,te={x:b,y,strokeWidth:M,elSeries:E};if(S=F.yDivision,_=F.barHeight,this.isHorizontal){re=y+_*this.visibleI;var pe=this.seriesLen;r.config.plotOptions.bar.rangeBarGroupRows&&(pe=1);var Ce=(S-_*pe)/2;if(r.config.series[h].data[C]===void 0)break;if(r.config.series[h].data[C].x){var Je=this.detectOverlappingBars({i:h,j:C,barYPosition:re,srty:Ce,barHeight:_,yDivision:S,initPositions:F});_=Je.barHeight,re=Je.barYPosition}R=(Y=this.drawRangeBarPaths(u({indexes:{i:h,j:C,realIndex:A},barHeight:_,barYPosition:re,zeroW:x,yDivision:S,y1:X,y2:G},te))).barWidth}else _=(Y=this.drawRangeColumnPaths(u({indexes:{i:h,j:C,realIndex:A},zeroH:p,barWidth:R,xDivision:d},te))).barHeight;var He=this.barHelpers.drawGoalLine({barXPosition:Y.barXPosition,barYPosition:re,goalX:Y.goalX,goalY:Y.goalY,barHeight:_,barWidth:R});He&&v.add(He),y=Y.y,b=Y.x;var ft=this.barHelpers.getPathFillColor(i,h,C,A),wt=r.globals.stroke.colors[A];this.renderSeries({realIndex:A,pathFill:ft,lineFill:wt,j:C,i:h,x:b,y,y1:X,y2:G,pathFrom:Y.pathFrom,pathTo:Y.pathTo,strokeWidth:M,elSeries:E,series:i,barHeight:_,barYPosition:re,barWidth:R,elDataLabelsWrap:f,elGoalsMarkers:v,visibleSeries:this.visibleI,type:"rangebar"})}o.add(E)}return o}},{key:"detectOverlappingBars",value:function(i){var a=i.i,r=i.j,l=i.barYPosition,o=i.srty,h=i.barHeight,d=i.yDivision,p=i.initPositions,x=this.w,b=[],y=x.config.series[a].data[r].rangeName,S=x.config.series[a].data[r].x,A=x.globals.labels.indexOf(S),E=x.globals.seriesRangeBar[a].findIndex(function(_){return _.x===S&&_.overlaps.length>0});return l=x.config.plotOptions.bar.rangeBarGroupRows?o+d*A:o+h*this.visibleI+d*A,E>-1&&!x.config.plotOptions.bar.rangeBarOverlap&&(b=x.globals.seriesRangeBar[a][E].overlaps).indexOf(y)>-1&&(l=(h=p.barHeight/b.length)*this.visibleI+d*(100-parseInt(this.barOptions.barHeight,10))/100/2+h*(this.visibleI+b.indexOf(y))+d*A),{barYPosition:l,barHeight:h}}},{key:"drawRangeColumnPaths",value:function(i){var a=i.indexes,r=i.x;i.strokeWidth;var l=i.xDivision,o=i.barWidth,h=i.zeroH,d=this.w,p=a.i,x=a.j,b=this.yRatio[this.yaxisIndex],y=a.realIndex,S=this.getRangeValue(y,x),A=Math.min(S.start,S.end),E=Math.max(S.start,S.end);d.globals.isXNumeric&&(r=(d.globals.seriesX[p][x]-d.globals.minX)/this.xRatio-o/2);var _=r+o*this.visibleI;this.series[p][x]===void 0||this.series[p][x]===null?A=h:(A=h-A/b,E=h-E/b);var R=Math.abs(E-A),F=this.barHelpers.getColumnPaths({barXPosition:_,barWidth:o,y1:A,y2:E,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:a.realIndex,i:y,j:x,w:d});return d.globals.isXNumeric||(r+=l),{pathTo:F.pathTo,pathFrom:F.pathFrom,barHeight:R,x:r,y:E,goalY:this.barHelpers.getGoalValues("y",null,h,p,x),barXPosition:_}}},{key:"drawRangeBarPaths",value:function(i){var a=i.indexes,r=i.y,l=i.y1,o=i.y2,h=i.yDivision,d=i.barHeight,p=i.barYPosition,x=i.zeroW,b=this.w,y=x+l/this.invertedYRatio,S=x+o/this.invertedYRatio,A=Math.abs(S-y),E=this.barHelpers.getBarpaths({barYPosition:p,barHeight:d,x1:y,x2:S,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:a.realIndex,realIndex:a.realIndex,j:a.j,w:b});return b.globals.isXNumeric||(r+=h),{pathTo:E.pathTo,pathFrom:E.pathFrom,barWidth:A,x:S,goalX:this.barHelpers.getGoalValues("x",x,null,a.realIndex,a.j),y:r}}},{key:"getRangeValue",value:function(i,a){var r=this.w;return{start:r.globals.seriesRangeStart[i][a],end:r.globals.seriesRangeEnd[i][a]}}},{key:"getTooltipValues",value:function(i){var a=i.ctx,r=i.seriesIndex,l=i.dataPointIndex,o=i.y1,h=i.y2,d=i.w,p=d.globals.seriesRangeStart[r][l],x=d.globals.seriesRangeEnd[r][l],b=d.globals.labels[l],y=d.config.series[r].name?d.config.series[r].name:"",S=d.config.tooltip.y.formatter,A=d.config.tooltip.y.title.formatter,E={w:d,seriesIndex:r,dataPointIndex:l,start:p,end:x};typeof A=="function"&&(y=A(y,E)),Number.isFinite(o)&&Number.isFinite(h)&&(p=o,x=h,d.config.series[r].data[l].x&&(b=d.config.series[r].data[l].x+":"),typeof S=="function"&&(b=S(b,E)));var _="",R="",F=d.globals.colors[r];if(d.config.tooltip.x.formatter===void 0)if(d.config.xaxis.type==="datetime"){var f=new je(a);_=f.formatDate(f.getDate(p),d.config.tooltip.x.format),R=f.formatDate(f.getDate(x),d.config.tooltip.x.format)}else _=p,R=x;else _=d.config.tooltip.x.formatter(p),R=d.config.tooltip.x.formatter(x);return{start:p,end:x,startVal:_,endVal:R,ylabel:b,color:F,seriesName:y}}},{key:"buildCustomTooltipHTML",value:function(i){var a=i.color,r=i.seriesName;return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: '+a+'">'+(r||"")+'</span></div><div> <span class="category">'+i.ylabel+' </span> <span class="value start-value">'+i.start+'</span> <span class="separator">-</span> <span class="value end-value">'+i.end+"</span></div></div>"}}]),t}(),ht=function(){function L(e){m(this,L),this.opts=e}return k(L,[{key:"line",value:function(){return{chart:{animations:{easing:"swing"}},dataLabels:{enabled:!1},stroke:{width:5,curve:"straight"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}}}},{key:"sparkline",value:function(e){return this.opts.yaxis[0].show=!1,this.opts.yaxis[0].title.text="",this.opts.yaxis[0].axisBorder.show=!1,this.opts.yaxis[0].axisTicks.show=!1,this.opts.yaxis[0].floating=!0,T.extend(e,{grid:{show:!1,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:!1},xaxis:{labels:{show:!1},tooltip:{enabled:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1}})}},{key:"bar",value:function(){return{chart:{stacked:!1,animations:{easing:"swing"}},plotOptions:{bar:{dataLabels:{position:"center"}}},dataLabels:{style:{colors:["#fff"]},background:{enabled:!1}},stroke:{width:0,lineCap:"round"},fill:{opacity:.85},legend:{markers:{shape:"square",radius:2,size:8}},tooltip:{shared:!1,intersect:!0},xaxis:{tooltip:{enabled:!1},tickPlacement:"between",crosshairs:{width:"barWidth",position:"back",fill:{type:"gradient"},dropShadow:{enabled:!1},stroke:{width:0}}}}}},{key:"candlestick",value:function(){var e=this;return{stroke:{width:1,colors:["#333"]},fill:{opacity:1},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var i=t.seriesIndex,a=t.dataPointIndex,r=t.w;return e._getBoxTooltip(r,i,a,["Open","High","","Low","Close"],"candlestick")}},states:{active:{filter:{type:"none"}}},xaxis:{crosshairs:{width:1}}}}},{key:"boxPlot",value:function(){var e=this;return{chart:{animations:{dynamicAnimation:{enabled:!1}}},stroke:{width:1,colors:["#24292e"]},dataLabels:{enabled:!1},tooltip:{shared:!0,custom:function(t){var i=t.seriesIndex,a=t.dataPointIndex,r=t.w;return e._getBoxTooltip(r,i,a,["Minimum","Q1","Median","Q3","Maximum"],"boxPlot")}},markers:{size:5,strokeWidth:1,strokeColors:"#111"},xaxis:{crosshairs:{width:1}}}}},{key:"rangeBar",value:function(){return{stroke:{width:0,lineCap:"square"},plotOptions:{bar:{borderRadius:0,dataLabels:{position:"center"}}},dataLabels:{enabled:!1,formatter:function(e,t){t.ctx;var i=t.seriesIndex,a=t.dataPointIndex,r=t.w,l=r.globals.seriesRangeStart[i][a];return r.globals.seriesRangeEnd[i][a]-l},background:{enabled:!1},style:{colors:["#fff"]}},tooltip:{shared:!1,followCursor:!0,custom:function(e){return e.w.config.plotOptions&&e.w.config.plotOptions.bar&&e.w.config.plotOptions.bar.horizontal?function(t){var i=new ot(t.ctx,null),a=i.getTooltipValues(t),r=a.color,l=a.seriesName,o=a.ylabel,h=a.startVal,d=a.endVal;return i.buildCustomTooltipHTML({color:r,seriesName:l,ylabel:o,start:h,end:d})}(e):function(t){var i=new ot(t.ctx,null),a=i.getTooltipValues(t),r=a.color,l=a.seriesName,o=a.ylabel,h=a.start,d=a.end;return i.buildCustomTooltipHTML({color:r,seriesName:l,ylabel:o,start:h,end:d})}(e)}},xaxis:{tickPlacement:"between",tooltip:{enabled:!1},crosshairs:{stroke:{width:0}}}}}},{key:"area",value:function(){return{stroke:{width:4,fill:{type:"solid",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}}},fill:{type:"gradient",gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.65,opacityTo:.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:!1}}}},{key:"brush",value:function(e){return T.extend(e,{chart:{toolbar:{autoSelected:"selection",show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:1},tooltip:{enabled:!1},xaxis:{tooltip:{enabled:!1}}})}},{key:"stacked100",value:function(e){e.dataLabels=e.dataLabels||{},e.dataLabels.formatter=e.dataLabels.formatter||void 0;var t=e.dataLabels.formatter;return e.yaxis.forEach(function(i,a){e.yaxis[a].min=0,e.yaxis[a].max=100}),e.chart.type==="bar"&&(e.dataLabels.formatter=t||function(i){return typeof i=="number"&&i?i.toFixed(0)+"%":i}),e}},{key:"convertCatToNumeric",value:function(e){return e.xaxis.convertedCatToNumeric=!0,e}},{key:"convertCatToNumericXaxis",value:function(e,t,i){e.xaxis.type="numeric",e.xaxis.labels=e.xaxis.labels||{},e.xaxis.labels.formatter=e.xaxis.labels.formatter||function(l){return T.isNumber(l)?Math.floor(l):l};var a=e.xaxis.labels.formatter,r=e.xaxis.categories&&e.xaxis.categories.length?e.xaxis.categories:e.labels;return i&&i.length&&(r=i.map(function(l){return Array.isArray(l)?l:String(l)})),r&&r.length&&(e.xaxis.labels.formatter=function(l){return T.isNumber(l)?a(r[Math.floor(l)-1]):a(l)}),e.xaxis.categories=[],e.labels=[],e.xaxis.tickAmount=e.xaxis.tickAmount||"dataPoints",e}},{key:"bubble",value:function(){return{dataLabels:{style:{colors:["#fff"]}},tooltip:{shared:!1,intersect:!0},xaxis:{crosshairs:{width:0}},fill:{type:"solid",gradient:{shade:"light",inverse:!0,shadeIntensity:.55,opacityFrom:.4,opacityTo:.8}}}}},{key:"scatter",value:function(){return{dataLabels:{enabled:!1},tooltip:{shared:!1,intersect:!0},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}}}},{key:"heatmap",value:function(){return{chart:{stacked:!1},fill:{opacity:1},dataLabels:{style:{colors:["#fff"]}},stroke:{colors:["#fff"]},tooltip:{followCursor:!0,marker:{show:!1},x:{show:!1}},legend:{position:"top",markers:{shape:"square",size:10,offsetY:2}},grid:{padding:{right:20}}}}},{key:"treemap",value:function(){return{chart:{zoom:{enabled:!1}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:["#fff"]}},stroke:{show:!0,width:2,colors:["#fff"]},legend:{show:!1},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:!0,x:{show:!1}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:!1},tooltip:{enabled:!1}}}}},{key:"pie",value:function(){return{chart:{toolbar:{show:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",stops:[0,100]}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"donut",value:function(){return{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},style:{colors:["#fff"]},background:{enabled:!1},dropShadow:{enabled:!0}},stroke:{colors:["#fff"]},fill:{opacity:1,gradient:{shade:"light",shadeIntensity:.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"polarArea",value:function(){return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount:6,{chart:{toolbar:{show:!1}},dataLabels:{formatter:function(e){return e.toFixed(1)+"%"},enabled:!1},stroke:{show:!0,width:2},fill:{opacity:.7},tooltip:{theme:"dark",fillSeriesColor:!0},legend:{position:"right"}}}},{key:"radar",value:function(){return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6,{dataLabels:{enabled:!1,style:{fontSize:"11px"}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:.2},tooltip:{shared:!1,intersect:!0,followCursor:!0},grid:{show:!1},xaxis:{labels:{formatter:function(e){return e},style:{colors:["#a8a8a8"],fontSize:"11px"}},tooltip:{enabled:!1},crosshairs:{show:!1}}}}},{key:"radialBar",value:function(){return{chart:{animations:{dynamicAnimation:{enabled:!0,speed:800}},toolbar:{show:!1}},fill:{gradient:{shade:"dark",shadeIntensity:.4,inverseColors:!1,type:"diagonal2",opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:!1,position:"right"},tooltip:{enabled:!1,fillSeriesColor:!0}}}},{key:"_getBoxTooltip",value:function(e,t,i,a,r){var l=e.globals.seriesCandleO[t][i],o=e.globals.seriesCandleH[t][i],h=e.globals.seriesCandleM[t][i],d=e.globals.seriesCandleL[t][i],p=e.globals.seriesCandleC[t][i];return e.config.series[t].type&&e.config.series[t].type!==r?`<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name?e.config.series[t].name:"series-"+(t+1),": <strong>").concat(e.globals.series[t][i],`</strong>
        </div>`):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type,'">')+"<div>".concat(a[0],': <span class="value">')+l+"</span></div>"+"<div>".concat(a[1],': <span class="value">')+o+"</span></div>"+(h?"<div>".concat(a[2],': <span class="value">')+h+"</span></div>":"")+"<div>".concat(a[3],': <span class="value">')+d+"</span></div>"+"<div>".concat(a[4],': <span class="value">')+p+"</span></div></div>"}}]),L}(),U=function(){function L(e){m(this,L),this.opts=e}return k(L,[{key:"init",value:function(e){var t=e.responsiveOverride,i=this.opts,a=new se,r=new ht(i);this.chartType=i.chart.type,this.chartType==="histogram"&&(i.chart.type="bar",i=T.extend({plotOptions:{bar:{columnWidth:"99.99%"}}},i)),i=this.extendYAxis(i),i=this.extendAnnotations(i);var l=a.init(),o={};if(i&&g(i)==="object"){var h={};h=["line","area","bar","candlestick","boxPlot","rangeBar","histogram","bubble","scatter","heatmap","treemap","pie","polarArea","donut","radar","radialBar"].indexOf(i.chart.type)!==-1?r[i.chart.type]():r.line(),i.chart.brush&&i.chart.brush.enabled&&(h=r.brush(h)),i.chart.stacked&&i.chart.stackType==="100%"&&(i=r.stacked100(i)),this.checkForDarkTheme(window.Apex),this.checkForDarkTheme(i),i.xaxis=i.xaxis||window.Apex.xaxis||{},t||(i.xaxis.convertedCatToNumeric=!1),((i=this.checkForCatToNumericXAxis(this.chartType,h,i)).chart.sparkline&&i.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(h=r.sparkline(h)),o=T.extend(l,h)}var d=T.extend(o,window.Apex);return l=T.extend(d,i),l=this.handleUserInputErrors(l)}},{key:"checkForCatToNumericXAxis",value:function(e,t,i){var a=new ht(i),r=(e==="bar"||e==="boxPlot")&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal,l=e==="pie"||e==="polarArea"||e==="donut"||e==="radar"||e==="radialBar"||e==="heatmap",o=i.xaxis.type!=="datetime"&&i.xaxis.type!=="numeric",h=i.xaxis.tickPlacement?i.xaxis.tickPlacement:t.xaxis&&t.xaxis.tickPlacement;return r||l||!o||h==="between"||(i=a.convertCatToNumeric(i)),i}},{key:"extendYAxis",value:function(e,t){var i=new se;(e.yaxis===void 0||!e.yaxis||Array.isArray(e.yaxis)&&e.yaxis.length===0)&&(e.yaxis={}),e.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(e.yaxis=T.extend(e.yaxis,window.Apex.yaxis)),e.yaxis.constructor!==Array?e.yaxis=[T.extend(i.yAxis,e.yaxis)]:e.yaxis=T.extendArray(e.yaxis,i.yAxis);var a=!1;e.yaxis.forEach(function(l){l.logarithmic&&(a=!0)});var r=e.series;return t&&!r&&(r=t.config.series),a&&r.length!==e.yaxis.length&&r.length&&(e.yaxis=r.map(function(l,o){if(l.name||(r[o].name="series-".concat(o+1)),e.yaxis[o])return e.yaxis[o].seriesName=r[o].name,e.yaxis[o];var h=T.extend(i.yAxis,e.yaxis[0]);return h.show=!1,h})),a&&r.length>1&&r.length!==e.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."),e}},{key:"extendAnnotations",value:function(e){return e.annotations===void 0&&(e.annotations={},e.annotations.yaxis=[],e.annotations.xaxis=[],e.annotations.points=[]),e=this.extendYAxisAnnotations(e),e=this.extendXAxisAnnotations(e),e=this.extendPointAnnotations(e)}},{key:"extendYAxisAnnotations",value:function(e){var t=new se;return e.annotations.yaxis=T.extendArray(e.annotations.yaxis!==void 0?e.annotations.yaxis:[],t.yAxisAnnotation),e}},{key:"extendXAxisAnnotations",value:function(e){var t=new se;return e.annotations.xaxis=T.extendArray(e.annotations.xaxis!==void 0?e.annotations.xaxis:[],t.xAxisAnnotation),e}},{key:"extendPointAnnotations",value:function(e){var t=new se;return e.annotations.points=T.extendArray(e.annotations.points!==void 0?e.annotations.points:[],t.pointAnnotation),e}},{key:"checkForDarkTheme",value:function(e){e.theme&&e.theme.mode==="dark"&&(e.tooltip||(e.tooltip={}),e.tooltip.theme!=="light"&&(e.tooltip.theme="dark"),e.chart.foreColor||(e.chart.foreColor="#f6f7f8"),e.chart.background||(e.chart.background="#424242"),e.theme.palette||(e.theme.palette="palette4"))}},{key:"handleUserInputErrors",value:function(e){var t=e;if(t.tooltip.shared&&t.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");if(t.chart.type==="bar"&&t.plotOptions.bar.horizontal){if(t.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");t.yaxis[0].reversed&&(t.yaxis[0].opposite=!0),t.xaxis.tooltip.enabled=!1,t.yaxis[0].tooltip.enabled=!1,t.chart.zoom.enabled=!1}return t.chart.type!=="bar"&&t.chart.type!=="rangeBar"||t.tooltip.shared&&t.xaxis.crosshairs.width==="barWidth"&&t.series.length>1&&(t.xaxis.crosshairs.width="tickWidth"),t.chart.type!=="candlestick"&&t.chart.type!=="boxPlot"||t.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(t.chart.type," chart is not supported.")),t.yaxis[0].reversed=!1),t}}]),L}(),ue=function(){function L(){m(this,L)}return k(L,[{key:"initGlobalVars",value:function(e){e.series=[],e.seriesCandleO=[],e.seriesCandleH=[],e.seriesCandleM=[],e.seriesCandleL=[],e.seriesCandleC=[],e.seriesRangeStart=[],e.seriesRangeEnd=[],e.seriesRangeBar=[],e.seriesPercent=[],e.seriesGoals=[],e.seriesX=[],e.seriesZ=[],e.seriesNames=[],e.seriesTotals=[],e.seriesLog=[],e.seriesColors=[],e.stackedSeriesTotals=[],e.seriesXvalues=[],e.seriesYvalues=[],e.labels=[],e.hasGroups=!1,e.groups=[],e.categoryLabels=[],e.timescaleLabels=[],e.noLabelsProvided=!1,e.resizeTimer=null,e.selectionResizeTimer=null,e.delayedElements=[],e.pointsArray=[],e.dataLabelsRects=[],e.isXNumeric=!1,e.xaxisLabelsCount=0,e.skipLastTimelinelabel=!1,e.skipFirstTimelinelabel=!1,e.isDataXYZ=!1,e.isMultiLineX=!1,e.isMultipleYAxis=!1,e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE,e.minYArr=[],e.maxYArr=[],e.maxX=-Number.MAX_VALUE,e.minX=Number.MAX_VALUE,e.initialMaxX=-Number.MAX_VALUE,e.initialMinX=Number.MAX_VALUE,e.maxDate=0,e.minDate=Number.MAX_VALUE,e.minZ=Number.MAX_VALUE,e.maxZ=-Number.MAX_VALUE,e.minXDiff=Number.MAX_VALUE,e.yAxisScale=[],e.xAxisScale=null,e.xAxisTicksPositions=[],e.yLabelsCoords=[],e.yTitleCoords=[],e.barPadForNumericAxis=0,e.padHorizontal=0,e.xRange=0,e.yRange=[],e.zRange=0,e.dataPoints=0,e.xTickAmount=0}},{key:"globalVars",value:function(e){return{chartID:null,cuid:null,events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:e.markers.size,largestSize:0},animationEnded:!1,isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints,isDirty:!1,isExecCalled:!1,initialConfig:null,initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],timescaleLabels:[],noLabelsProvided:!1,allSeriesCollapsed:!1,collapsedSeries:[],collapsedSeriesIndices:[],ancillaryCollapsedSeries:[],ancillaryCollapsedSeriesIndices:[],risingSeries:[],dataFormatXNumeric:!1,capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,invalidLogScale:!1,ignoreYAxisIndexes:[],yAxisSameScaleIndices:[],maxValsInArrayIndex:0,radialSize:0,selection:void 0,zoomEnabled:e.chart.toolbar.autoSelected==="zoom"&&e.chart.toolbar.tools.zoom&&e.chart.zoom.enabled,panEnabled:e.chart.toolbar.autoSelected==="pan"&&e.chart.toolbar.tools.pan,selectionEnabled:e.chart.toolbar.autoSelected==="selection"&&e.chart.toolbar.tools.selection,yaxis:null,mousedown:!1,lastClientPosition:{},visibleXRange:void 0,yValueDecimal:0,total:0,SVGNS:"http://www.w3.org/2000/svg",svgWidth:0,svgHeight:0,noData:!1,locale:{},dom:{},memory:{methodsToExec:[]},shouldAnimate:!0,skipLastTimelinelabel:!1,skipFirstTimelinelabel:!1,delayedElements:[],axisCharts:!0,isDataXYZ:!1,resized:!1,resizeTimer:null,comboCharts:!1,dataChanged:!1,previousPaths:[],allSeriesHasEqualX:!0,pointsArray:[],dataLabelsRects:[],lastDrawnDataLabelsIndexes:[],hasNullValues:!1,easing:null,zoomed:!1,gridWidth:0,gridHeight:0,rotateXLabels:!1,defaultLabels:!1,xLabelFormatter:void 0,yLabelFormatters:[],xaxisTooltipFormatter:void 0,ttKeyFormatter:void 0,ttVal:void 0,ttZFormatter:void 0,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null}}},{key:"init",value:function(e){var t=this.globalVars(e);return this.initGlobalVars(t),t.initialConfig=T.extend({},e),t.initialSeries=T.clone(e.series),t.lastXAxis=T.clone(t.initialConfig.xaxis),t.lastYAxis=T.clone(t.initialConfig.yaxis),t}}]),L}(),de=function(){function L(e){m(this,L),this.opts=e}return k(L,[{key:"init",value:function(){var e=new U(this.opts).init({responsiveOverride:!1});return{config:e,globals:new ue().init(e)}}}]),L}(),be=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.twoDSeries=[],this.threeDSeries=[],this.twoDSeriesX=[],this.seriesGoals=[],this.coreUtils=new ce(this.ctx)}return k(L,[{key:"isMultiFormat",value:function(){return this.isFormatXY()||this.isFormat2DArray()}},{key:"isFormatXY",value:function(){var e=this.w.config.series.slice(),t=new $e(this.ctx);if(this.activeSeriesIndex=t.getActiveConfigSeriesIndex(),e[this.activeSeriesIndex].data!==void 0&&e[this.activeSeriesIndex].data.length>0&&e[this.activeSeriesIndex].data[0]!==null&&e[this.activeSeriesIndex].data[0].x!==void 0&&e[this.activeSeriesIndex].data[0]!==null)return!0}},{key:"isFormat2DArray",value:function(){var e=this.w.config.series.slice(),t=new $e(this.ctx);if(this.activeSeriesIndex=t.getActiveConfigSeriesIndex(),e[this.activeSeriesIndex].data!==void 0&&e[this.activeSeriesIndex].data.length>0&&e[this.activeSeriesIndex].data[0]!==void 0&&e[this.activeSeriesIndex].data[0]!==null&&e[this.activeSeriesIndex].data[0].constructor===Array)return!0}},{key:"handleFormat2DArray",value:function(e,t){for(var i=this.w.config,a=this.w.globals,r=i.chart.type==="boxPlot"||i.series[t].type==="boxPlot",l=0;l<e[t].data.length;l++)if(e[t].data[l][1]!==void 0&&(Array.isArray(e[t].data[l][1])&&e[t].data[l][1].length===4&&!r?this.twoDSeries.push(T.parseNumber(e[t].data[l][1][3])):e[t].data[l].length>=5?this.twoDSeries.push(T.parseNumber(e[t].data[l][4])):this.twoDSeries.push(T.parseNumber(e[t].data[l][1])),a.dataFormatXNumeric=!0),i.xaxis.type==="datetime"){var o=new Date(e[t].data[l][0]);o=new Date(o).getTime(),this.twoDSeriesX.push(o)}else this.twoDSeriesX.push(e[t].data[l][0]);for(var h=0;h<e[t].data.length;h++)e[t].data[h][2]!==void 0&&(this.threeDSeries.push(e[t].data[h][2]),a.isDataXYZ=!0)}},{key:"handleFormatXY",value:function(e,t){var i=this.w.config,a=this.w.globals,r=new je(this.ctx),l=t;a.collapsedSeriesIndices.indexOf(t)>-1&&(l=this.activeSeriesIndex);for(var o=0;o<e[t].data.length;o++)e[t].data[o].y!==void 0&&(Array.isArray(e[t].data[o].y)?this.twoDSeries.push(T.parseNumber(e[t].data[o].y[e[t].data[o].y.length-1])):this.twoDSeries.push(T.parseNumber(e[t].data[o].y))),e[t].data[o].goals!==void 0&&Array.isArray(e[t].data[o].goals)?(this.seriesGoals[t]===void 0&&(this.seriesGoals[t]=[]),this.seriesGoals[t].push(e[t].data[o].goals)):(this.seriesGoals[t]===void 0&&(this.seriesGoals[t]=[]),this.seriesGoals[t].push(null));for(var h=0;h<e[l].data.length;h++){var d=typeof e[l].data[h].x=="string",p=Array.isArray(e[l].data[h].x),x=!p&&!!r.isValidDate(e[l].data[h].x.toString());if(d||x)if(d||i.xaxis.convertedCatToNumeric){var b=a.isBarHorizontal&&a.isRangeData;i.xaxis.type!=="datetime"||b?(this.fallbackToCategory=!0,this.twoDSeriesX.push(e[l].data[h].x)):this.twoDSeriesX.push(r.parseDate(e[l].data[h].x))}else i.xaxis.type==="datetime"?this.twoDSeriesX.push(r.parseDate(e[l].data[h].x.toString())):(a.dataFormatXNumeric=!0,a.isXNumeric=!0,this.twoDSeriesX.push(parseFloat(e[l].data[h].x)));else p?(this.fallbackToCategory=!0,this.twoDSeriesX.push(e[l].data[h].x)):(a.isXNumeric=!0,a.dataFormatXNumeric=!0,this.twoDSeriesX.push(e[l].data[h].x))}if(e[t].data[0]&&e[t].data[0].z!==void 0){for(var y=0;y<e[t].data.length;y++)this.threeDSeries.push(e[t].data[y].z);a.isDataXYZ=!0}}},{key:"handleRangeData",value:function(e,t){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleRangeDataFormat("array",e,t):this.isFormatXY()&&(a=this.handleRangeDataFormat("xy",e,t)),i.seriesRangeStart.push(a.start),i.seriesRangeEnd.push(a.end),i.seriesRangeBar.push(a.rangeUniques),i.seriesRangeBar.forEach(function(r,l){r&&r.forEach(function(o,h){o.y.forEach(function(d,p){for(var x=0;x<o.y.length;x++)if(p!==x){var b=d.y1,y=d.y2,S=o.y[x].y1;b<=o.y[x].y2&&S<=y&&(o.overlaps.indexOf(d.rangeName)<0&&o.overlaps.push(d.rangeName),o.overlaps.indexOf(o.y[x].rangeName)<0&&o.overlaps.push(o.y[x].rangeName))}})})}),a}},{key:"handleCandleStickBoxData",value:function(e,t){var i=this.w.globals,a={};return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array",e,t):this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy",e,t)),i.seriesCandleO[t]=a.o,i.seriesCandleH[t]=a.h,i.seriesCandleM[t]=a.m,i.seriesCandleL[t]=a.l,i.seriesCandleC[t]=a.c,a}},{key:"handleRangeDataFormat",value:function(e,t,i){var a=[],r=[],l=t[i].data.filter(function(b,y,S){return y===S.findIndex(function(A){return A.x===b.x})}).map(function(b,y){return{x:b.x,overlaps:[],y:[]}}),o="Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",h=new $e(this.ctx).getActiveConfigSeriesIndex();if(e==="array"){if(t[h].data[0][1].length!==2)throw new Error(o);for(var d=0;d<t[i].data.length;d++)a.push(t[i].data[d][1][0]),r.push(t[i].data[d][1][1])}else if(e==="xy"){if(t[h].data[0].y.length!==2)throw new Error(o);for(var p=function(b){var y=T.randomId(),S=t[i].data[b].x,A={y1:t[i].data[b].y[0],y2:t[i].data[b].y[1],rangeName:y};t[i].data[b].rangeName=y;var E=l.findIndex(function(_){return _.x===S});l[E].y.push(A),a.push(A.y1),r.push(A.y2)},x=0;x<t[i].data.length;x++)p(x)}return{start:a,end:r,rangeUniques:l}}},{key:"handleCandleStickBoxDataFormat",value:function(e,t,i){var a=this.w,r=a.config.chart.type==="boxPlot"||a.config.series[i].type==="boxPlot",l=[],o=[],h=[],d=[],p=[];if(e==="array")if(r&&t[i].data[0].length===6||!r&&t[i].data[0].length===5)for(var x=0;x<t[i].data.length;x++)l.push(t[i].data[x][1]),o.push(t[i].data[x][2]),r?(h.push(t[i].data[x][3]),d.push(t[i].data[x][4]),p.push(t[i].data[x][5])):(d.push(t[i].data[x][3]),p.push(t[i].data[x][4]));else for(var b=0;b<t[i].data.length;b++)Array.isArray(t[i].data[b][1])&&(l.push(t[i].data[b][1][0]),o.push(t[i].data[b][1][1]),r?(h.push(t[i].data[b][1][2]),d.push(t[i].data[b][1][3]),p.push(t[i].data[b][1][4])):(d.push(t[i].data[b][1][2]),p.push(t[i].data[b][1][3])));else if(e==="xy")for(var y=0;y<t[i].data.length;y++)Array.isArray(t[i].data[y].y)&&(l.push(t[i].data[y].y[0]),o.push(t[i].data[y].y[1]),r?(h.push(t[i].data[y].y[2]),d.push(t[i].data[y].y[3]),p.push(t[i].data[y].y[4])):(d.push(t[i].data[y].y[2]),p.push(t[i].data[y].y[3])));return{o:l,h:o,m:h,l:d,c:p}}},{key:"parseDataAxisCharts",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.ctx,a=this.w.config,r=this.w.globals,l=new je(i),o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();r.isRangeBar=a.chart.type==="rangeBar"&&r.isBarHorizontal,r.hasGroups=a.xaxis.type==="category"&&a.xaxis.group.groups.length>0,r.hasGroups&&(r.groups=a.xaxis.group.groups);for(var h=function(){for(var x=0;x<o.length;x++)if(typeof o[x]=="string"){if(!l.isValidDate(o[x]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");t.twoDSeriesX.push(l.parseDate(o[x]))}else t.twoDSeriesX.push(o[x])},d=0;d<e.length;d++){if(this.twoDSeries=[],this.twoDSeriesX=[],this.threeDSeries=[],e[d].data===void 0)return void console.error("It is a possibility that you may have not included 'data' property in series.");if(a.chart.type!=="rangeBar"&&a.chart.type!=="rangeArea"&&e[d].type!=="rangeBar"&&e[d].type!=="rangeArea"||(r.isRangeData=!0,this.handleRangeData(e,d)),this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(e,d):this.isFormatXY()&&this.handleFormatXY(e,d),a.chart.type!=="candlestick"&&e[d].type!=="candlestick"&&a.chart.type!=="boxPlot"&&e[d].type!=="boxPlot"||this.handleCandleStickBoxData(e,d),r.series.push(this.twoDSeries),r.labels.push(this.twoDSeriesX),r.seriesX.push(this.twoDSeriesX),r.seriesGoals=this.seriesGoals,d!==this.activeSeriesIndex||this.fallbackToCategory||(r.isXNumeric=!0);else{a.xaxis.type==="datetime"?(r.isXNumeric=!0,h(),r.seriesX.push(this.twoDSeriesX)):a.xaxis.type==="numeric"&&(r.isXNumeric=!0,o.length>0&&(this.twoDSeriesX=o,r.seriesX.push(this.twoDSeriesX))),r.labels.push(this.twoDSeriesX);var p=e[d].data.map(function(x){return T.parseNumber(x)});r.series.push(p)}r.seriesZ.push(this.threeDSeries),e[d].name!==void 0?r.seriesNames.push(e[d].name):r.seriesNames.push("series-"+parseInt(d+1,10)),e[d].color!==void 0?r.seriesColors.push(e[d].color):r.seriesColors.push(void 0)}return this.w}},{key:"parseDataNonAxisCharts",value:function(e){var t=this.w.globals,i=this.w.config;t.series=e.slice(),t.seriesNames=i.labels.slice();for(var a=0;a<t.series.length;a++)t.seriesNames[a]===void 0&&t.seriesNames.push("series-"+(a+1));return this.w}},{key:"handleExternalLabelsData",value:function(e){var t=this.w.config,i=this.w.globals;t.xaxis.categories.length>0?i.labels=t.xaxis.categories:t.labels.length>0?i.labels=t.labels.slice():this.fallbackToCategory?(i.labels=i.labels[0],i.seriesRangeBar.length&&(i.seriesRangeBar.map(function(a){a.forEach(function(r){i.labels.indexOf(r.x)<0&&r.x&&i.labels.push(r.x)})}),i.labels=i.labels.filter(function(a,r,l){return l.indexOf(a)===r})),t.xaxis.convertedCatToNumeric&&(new ht(t).convertCatToNumericXaxis(t,this.ctx,i.seriesX[0]),this._generateExternalLabels(e))):this._generateExternalLabels(e)}},{key:"_generateExternalLabels",value:function(e){var t=this.w.globals,i=this.w.config,a=[];if(t.axisCharts){if(t.series.length>0)if(this.isFormatXY())for(var r=i.series.map(function(x,b){return x.data.filter(function(y,S,A){return A.findIndex(function(E){return E.x===y.x})===S})}),l=r.reduce(function(x,b,y,S){return S[x].length>b.length?x:y},0),o=0;o<r[l].length;o++)a.push(o+1);else for(var h=0;h<t.series[t.maxValsInArrayIndex].length;h++)a.push(h+1);t.seriesX=[];for(var d=0;d<e.length;d++)t.seriesX.push(a);t.isXNumeric=!0}if(a.length===0){a=t.axisCharts?[]:t.series.map(function(x,b){return b+1});for(var p=0;p<e.length;p++)t.seriesX.push(a)}t.labels=a,i.xaxis.convertedCatToNumeric&&(t.categoryLabels=a.map(function(x){return i.xaxis.labels.formatter(x)})),t.noLabelsProvided=!0}},{key:"parseData",value:function(e){var t=this.w,i=t.config,a=t.globals;if(this.excludeCollapsedSeriesInYAxis(),this.fallbackToCategory=!1,this.ctx.core.resetGlobals(),this.ctx.core.isMultipleY(),a.axisCharts?this.parseDataAxisCharts(e):this.parseDataNonAxisCharts(e),this.coreUtils.getLargestSeries(),i.chart.type==="bar"&&i.chart.stacked){var r=new $e(this.ctx);a.series=r.setNullSeriesToZeroValues(a.series)}this.coreUtils.getSeriesTotals(),a.axisCharts&&this.coreUtils.getStackedSeriesTotals(),this.coreUtils.getPercentSeries(),a.dataFormatXNumeric||a.isXNumeric&&(i.xaxis.type!=="numeric"||i.labels.length!==0||i.xaxis.categories.length!==0)||this.handleExternalLabelsData(e);for(var l=this.coreUtils.getCategoryLabels(a.labels),o=0;o<l.length;o++)if(Array.isArray(l[o])){a.isMultiLineX=!0;break}}},{key:"excludeCollapsedSeriesInYAxis",value:function(){var e=this,t=this.w;t.globals.ignoreYAxisIndexes=t.globals.collapsedSeries.map(function(i,a){if(e.w.globals.isMultipleYAxis&&!t.config.chart.stacked)return i.index})}}]),L}(),Oe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.tooltipKeyFormat="dd MMM"}return k(L,[{key:"xLabelFormat",value:function(e,t,i,a){var r=this.w;if(r.config.xaxis.type==="datetime"&&r.config.xaxis.labels.formatter===void 0&&r.config.tooltip.x.formatter===void 0){var l=new je(this.ctx);return l.formatDate(l.getDate(t),r.config.tooltip.x.format)}return e(t,i,a)}},{key:"defaultGeneralFormatter",value:function(e){return Array.isArray(e)?e.map(function(t){return t}):e}},{key:"defaultYFormatter",value:function(e,t,i){var a=this.w;return T.isNumber(e)&&(e=a.globals.yValueDecimal!==0?e.toFixed(t.decimalsInFloat!==void 0?t.decimalsInFloat:a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?e.toFixed(1):e.toFixed(0)),e}},{key:"setLabelFormatters",value:function(){var e=this,t=this.w;return t.globals.xaxisTooltipFormatter=function(i){return e.defaultGeneralFormatter(i)},t.globals.ttKeyFormatter=function(i){return e.defaultGeneralFormatter(i)},t.globals.ttZFormatter=function(i){return i},t.globals.legendFormatter=function(i){return e.defaultGeneralFormatter(i)},t.config.xaxis.labels.formatter!==void 0?t.globals.xLabelFormatter=t.config.xaxis.labels.formatter:t.globals.xLabelFormatter=function(i){if(T.isNumber(i)){if(!t.config.xaxis.convertedCatToNumeric&&t.config.xaxis.type==="numeric"){if(T.isNumber(t.config.xaxis.decimalsInFloat))return i.toFixed(t.config.xaxis.decimalsInFloat);var a=t.globals.maxX-t.globals.minX;return a>0&&a<100?i.toFixed(1):i.toFixed(0)}return t.globals.isBarHorizontal&&t.globals.maxY-t.globals.minYArr<4?i.toFixed(1):i.toFixed(0)}return i},typeof t.config.tooltip.x.formatter=="function"?t.globals.ttKeyFormatter=t.config.tooltip.x.formatter:t.globals.ttKeyFormatter=t.globals.xLabelFormatter,typeof t.config.xaxis.tooltip.formatter=="function"&&(t.globals.xaxisTooltipFormatter=t.config.xaxis.tooltip.formatter),(Array.isArray(t.config.tooltip.y)||t.config.tooltip.y.formatter!==void 0)&&(t.globals.ttVal=t.config.tooltip.y),t.config.tooltip.z.formatter!==void 0&&(t.globals.ttZFormatter=t.config.tooltip.z.formatter),t.config.legend.formatter!==void 0&&(t.globals.legendFormatter=t.config.legend.formatter),t.config.yaxis.forEach(function(i,a){i.labels.formatter!==void 0?t.globals.yLabelFormatters[a]=i.labels.formatter:t.globals.yLabelFormatters[a]=function(r){return t.globals.xyCharts?Array.isArray(r)?r.map(function(l){return e.defaultYFormatter(l,i,a)}):e.defaultYFormatter(r,i,a):r}}),t.globals}},{key:"heatmapLabelFormatters",value:function(){var e=this.w;if(e.config.chart.type==="heatmap"){e.globals.yAxisScale[0].result=e.globals.seriesNames.slice();var t=e.globals.seriesNames.reduce(function(i,a){return i.length>a.length?i:a},0);e.globals.yAxisScale[0].niceMax=t,e.globals.yAxisScale[0].niceMin=t}}}]),L}(),Re=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"getLabel",value:function(e,t,i,a){var r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"12px",o=!(arguments.length>6&&arguments[6]!==void 0)||arguments[6],h=this.w,d=e[a]===void 0?"":e[a],p=d,x=h.globals.xLabelFormatter,b=h.config.xaxis.labels.formatter,y=!1,S=new Oe(this.ctx),A=d;o&&(p=S.xLabelFormat(x,d,A,{i:a,dateFormatter:new je(this.ctx).formatDate,w:h}),b!==void 0&&(p=b(d,e[a],{i:a,dateFormatter:new je(this.ctx).formatDate,w:h})));var E=function(f){var v=null;return t.forEach(function(C){C.unit==="month"?v="year":C.unit==="day"?v="month":C.unit==="hour"?v="day":C.unit==="minute"&&(v="hour")}),v===f};t.length>0?(y=E(t[a].unit),i=t[a].position,p=t[a].value):h.config.xaxis.type==="datetime"&&b===void 0&&(p=""),p===void 0&&(p=""),p=Array.isArray(p)?p:p.toString();var _=new H(this.ctx),R={};R=h.globals.rotateXLabels&&o?_.getTextRects(p,parseInt(l,10),null,"rotate(".concat(h.config.xaxis.labels.rotate," 0 0)"),!1):_.getTextRects(p,parseInt(l,10));var F=!h.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;return!Array.isArray(p)&&(p.indexOf("NaN")===0||p.toLowerCase().indexOf("invalid")===0||p.toLowerCase().indexOf("infinity")>=0||r.indexOf(p)>=0&&F)&&(p=""),{x:i,text:p,textRect:R,isBold:y}}},{key:"checkLabelBasedOnTickamount",value:function(e,t,i){var a=this.w,r=a.config.xaxis.tickAmount;return r==="dataPoints"&&(r=Math.round(a.globals.gridWidth/120)),r>i||e%Math.round(i/(r+1))==0||(t.text=""),t}},{key:"checkForOverflowingLabels",value:function(e,t,i,a,r){var l=this.w;if(e===0&&l.globals.skipFirstTimelinelabel&&(t.text=""),e===i-1&&l.globals.skipLastTimelinelabel&&(t.text=""),l.config.xaxis.labels.hideOverlappingLabels&&a.length>0){var o=r[r.length-1];t.x<o.textRect.width/(l.globals.rotateXLabels?Math.abs(l.config.xaxis.labels.rotate)/12:1.01)+o.x&&(t.text="")}return t}},{key:"checkForReversedLabels",value:function(e,t){var i=this.w;return i.config.yaxis[e]&&i.config.yaxis[e].reversed&&t.reverse(),t}},{key:"isYAxisHidden",value:function(e){var t=this.w,i=new ce(this.ctx);return!t.config.yaxis[e].show||!t.config.yaxis[e].showForNullSeries&&i.isSeriesNull(e)&&t.globals.collapsedSeriesIndices.indexOf(e)===-1}},{key:"getYAxisForeColor",value:function(e,t){var i=this.w;return Array.isArray(e)&&i.globals.yAxisScale[t]&&this.ctx.theme.pushExtraColors(e,i.globals.yAxisScale[t].result.length,!1),e}},{key:"drawYAxisTicks",value:function(e,t,i,a,r,l,o){var h=this.w,d=new H(this.ctx),p=h.globals.translateY;if(a.show&&t>0){h.config.yaxis[r].opposite===!0&&(e+=a.width);for(var x=t;x>=0;x--){var b=p+t/10+h.config.yaxis[r].labels.offsetY-1;h.globals.isBarHorizontal&&(b=l*x),h.config.chart.type==="heatmap"&&(b+=l/2);var y=d.drawLine(e+i.offsetX-a.width+a.offsetX,b+a.offsetY,e+i.offsetX+a.offsetX,b+a.offsetY,a.color);o.add(y),p+=l}}}}]),L}(),Pe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"scaleSvgNode",value:function(e,t){var i=parseFloat(e.getAttributeNS(null,"width")),a=parseFloat(e.getAttributeNS(null,"height"));e.setAttributeNS(null,"width",i*t),e.setAttributeNS(null,"height",a*t),e.setAttributeNS(null,"viewBox","0 0 "+i+" "+a)}},{key:"fixSvgStringForIe11",value:function(e){if(!T.isIE11())return e.replace(/&nbsp;/g,"&#160;");var t=0,i=e.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,function(a){return++t===2?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':a});return i=(i=i.replace(/xmlns:NS\d+=""/g,"")).replace(/NS\d+:(\w+:\w+=")/g,"$1")}},{key:"getSvgString",value:function(e){e==null&&(e=1);var t=this.w.globals.dom.Paper.svg();if(e!==1){var i=this.w.globals.dom.Paper.node.cloneNode(!0);this.scaleSvgNode(i,e),t=new XMLSerializer().serializeToString(i)}return this.fixSvgStringForIe11(t)}},{key:"cleanup",value:function(){var e=this.w,t=e.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),i=e.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");Array.prototype.forEach.call(a,function(r){r.setAttribute("width",0)}),t&&t[0]&&(t[0].setAttribute("x",-500),t[0].setAttribute("x1",-500),t[0].setAttribute("x2",-500)),i&&i[0]&&(i[0].setAttribute("y",-100),i[0].setAttribute("y1",-100),i[0].setAttribute("y2",-100))}},{key:"svgUrl",value:function(){this.cleanup();var e=this.getSvgString(),t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(t)}},{key:"dataURI",value:function(e){var t=this;return new Promise(function(i){var a=t.w,r=e?e.scale||e.width/a.globals.svgWidth:1;t.cleanup();var l=document.createElement("canvas");l.width=a.globals.svgWidth*r,l.height=parseInt(a.globals.dom.elWrap.style.height,10)*r;var o=a.config.chart.background==="transparent"?"#fff":a.config.chart.background,h=l.getContext("2d");h.fillStyle=o,h.fillRect(0,0,l.width*r,l.height*r);var d=t.getSvgString(r);if(window.canvg&&T.isIE11()){var p=window.canvg.Canvg.fromString(h,d,{ignoreClear:!0,ignoreDimensions:!0});p.start();var x=l.msToBlob();p.stop(),i({blob:x})}else{var b="data:image/svg+xml,"+encodeURIComponent(d),y=new Image;y.crossOrigin="anonymous",y.onload=function(){if(h.drawImage(y,0,0),l.msToBlob){var S=l.msToBlob();i({blob:S})}else{var A=l.toDataURL("image/png");i({imgURI:A})}},y.src=b}})}},{key:"exportToSVG",value:function(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,".svg")}},{key:"exportToPng",value:function(){var e=this;this.dataURI().then(function(t){var i=t.imgURI,a=t.blob;a?navigator.msSaveOrOpenBlob(a,e.w.globals.chartID+".png"):e.triggerDownload(i,e.w.config.chart.toolbar.export.png.filename,".png")})}},{key:"exportToCSV",value:function(e){var t=this,i=e.series,a=e.columnDelimiter,r=a===void 0?",":a,l=e.lineDelimiter,o=l===void 0?`
`:l,h=this.w;i||(i=h.config.series);var d=[],p=[],x="",b=new be(this.ctx),y=new Re(this.ctx),S=function(A){var E="";if(h.globals.axisCharts){if(h.config.xaxis.type==="category"||h.config.xaxis.convertedCatToNumeric)if(h.globals.isBarHorizontal){var _=h.globals.yLabelFormatters[0],R=new $e(t.ctx).getActiveConfigSeriesIndex();E=_(h.globals.labels[A],{seriesIndex:R,dataPointIndex:A,w:h})}else E=y.getLabel(h.globals.labels,h.globals.timescaleLabels,0,A).text;h.config.xaxis.type==="datetime"&&(h.config.xaxis.categories.length?E=h.config.xaxis.categories[A]:h.config.labels.length&&(E=h.config.labels[A]))}else E=h.config.labels[A];return Array.isArray(E)&&(E=E.join(" ")),T.isNumber(E)?E:E.split(r).join("")};d.push(h.config.chart.toolbar.export.csv.headerCategory),i.map(function(A,E){var _=A.name?A.name:"series-".concat(E);h.globals.axisCharts&&d.push(_.split(r).join("")?_.split(r).join(""):"series-".concat(E))}),h.globals.axisCharts||(d.push(h.config.chart.toolbar.export.csv.headerValue),p.push(d.join(r))),i.map(function(A,E){h.globals.axisCharts?function(_,R){if(d.length&&R===0&&p.push(d.join(r)),_.data&&_.data.length)for(var F=0;F<_.data.length;F++){d=[];var f=S(F);if(f||(b.isFormatXY()?f=i[R].data[F].x:b.isFormat2DArray()&&(f=i[R].data[F]?i[R].data[F][0]:"")),R===0){d.push((C=f,h.config.xaxis.type==="datetime"&&String(C).length>=10?h.config.chart.toolbar.export.csv.dateFormatter(f):T.isNumber(f)?f:f.split(r).join("")));for(var v=0;v<h.globals.series.length;v++)b.isFormatXY()?d.push(i[v].data[F].y):d.push(h.globals.series[v][F])}(h.config.chart.type==="candlestick"||_.type&&_.type==="candlestick")&&(d.pop(),d.push(h.globals.seriesCandleO[R][F]),d.push(h.globals.seriesCandleH[R][F]),d.push(h.globals.seriesCandleL[R][F]),d.push(h.globals.seriesCandleC[R][F])),(h.config.chart.type==="boxPlot"||_.type&&_.type==="boxPlot")&&(d.pop(),d.push(h.globals.seriesCandleO[R][F]),d.push(h.globals.seriesCandleH[R][F]),d.push(h.globals.seriesCandleM[R][F]),d.push(h.globals.seriesCandleL[R][F]),d.push(h.globals.seriesCandleC[R][F])),h.config.chart.type==="rangeBar"&&(d.pop(),d.push(h.globals.seriesRangeStart[R][F]),d.push(h.globals.seriesRangeEnd[R][F])),d.length&&p.push(d.join(r))}var C}(A,E):((d=[]).push(h.globals.labels[E].split(r).join("")),d.push(h.globals.series[E]),p.push(d.join(r)))}),x+=p.join(o),this.triggerDownload("data:text/csv; charset=utf-8,"+encodeURIComponent("\uFEFF"+x),h.config.chart.toolbar.export.csv.filename,".csv")}},{key:"triggerDownload",value:function(e,t,i){var a=document.createElement("a");a.href=e,a.download=(t||this.w.globals.chartID)+i,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}]),L}(),Ee=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.axesUtils=new Re(e),this.xaxisLabels=t.globals.labels.slice(),t.globals.timescaleLabels.length>0&&!t.globals.isBarHorizontal&&(this.xaxisLabels=t.globals.timescaleLabels.slice()),t.config.xaxis.overwriteCategories&&(this.xaxisLabels=t.config.xaxis.overwriteCategories),this.drawnLabels=[],this.drawnLabelsRects=[],t.config.xaxis.position==="top"?this.offY=0:this.offY=t.globals.gridHeight+1,this.offY=this.offY+t.config.xaxis.axisBorder.offsetY,this.isCategoryBarHorizontal=t.config.chart.type==="bar"&&t.config.plotOptions.bar.horizontal,this.xaxisFontSize=t.config.xaxis.labels.style.fontSize,this.xaxisFontFamily=t.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=t.config.xaxis.labels.style.colors,this.xaxisBorderWidth=t.config.xaxis.axisBorder.width,this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=t.config.yaxis[0].axisBorder.width.toString()),this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=t.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10),this.xaxisBorderHeight=t.config.xaxis.axisBorder.height,this.yaxis=t.config.yaxis[0]}return k(L,[{key:"drawXaxis",value:function(){var e=this.w,t=new H(this.ctx),i=t.group({class:"apexcharts-xaxis",transform:"translate(".concat(e.config.xaxis.offsetX,", ").concat(e.config.xaxis.offsetY,")")}),a=t.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(e.globals.translateXAxisX,", ").concat(e.globals.translateXAxisY,")")});i.add(a);for(var r=[],l=0;l<this.xaxisLabels.length;l++)r.push(this.xaxisLabels[l]);if(this.drawXAxisLabelAndGroup(!0,t,a,r,e.globals.isXNumeric,function(S,A){return A}),e.globals.hasGroups){var o=e.globals.groups;r=[];for(var h=0;h<o.length;h++)r.push(o[h].title);var d={};e.config.xaxis.group.style&&(d.xaxisFontSize=e.config.xaxis.group.style.fontSize,d.xaxisFontFamily=e.config.xaxis.group.style.fontFamily,d.xaxisForeColors=e.config.xaxis.group.style.colors,d.fontWeight=e.config.xaxis.group.style.fontWeight,d.cssClass=e.config.xaxis.group.style.cssClass),this.drawXAxisLabelAndGroup(!1,t,a,r,!1,function(S,A){return o[S].cols*A},d)}if(e.config.xaxis.title.text!==void 0){var p=t.group({class:"apexcharts-xaxis-title"}),x=t.drawText({x:e.globals.gridWidth/2+e.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+e.globals.xAxisLabelsHeight+e.config.xaxis.title.offsetY,text:e.config.xaxis.title.text,textAnchor:"middle",fontSize:e.config.xaxis.title.style.fontSize,fontFamily:e.config.xaxis.title.style.fontFamily,fontWeight:e.config.xaxis.title.style.fontWeight,foreColor:e.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass});p.add(x),i.add(p)}if(e.config.xaxis.axisBorder.show){var b=e.globals.barPadForNumericAxis,y=t.drawLine(e.globals.padHorizontal+e.config.xaxis.axisBorder.offsetX-b,this.offY,this.xaxisBorderWidth+b,this.offY,e.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);i.add(y)}return i}},{key:"drawXAxisLabelAndGroup",value:function(e,t,i,a,r,l){var o,h=this,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:{},p=[],x=[],b=this.w,y=d.xaxisFontSize||this.xaxisFontSize,S=d.xaxisFontFamily||this.xaxisFontFamily,A=d.xaxisForeColors||this.xaxisForeColors,E=d.fontWeight||b.config.xaxis.labels.style.fontWeight,_=d.cssClass||b.config.xaxis.labels.style.cssClass,R=b.globals.padHorizontal,F=a.length,f=b.config.xaxis.type==="category"?b.globals.dataPoints:F;if(r){var v=f>1?f-1:f;o=b.globals.gridWidth/v,R=R+l(0,o)/2+b.config.xaxis.labels.offsetX}else o=b.globals.gridWidth/f,R=R+l(0,o)+b.config.xaxis.labels.offsetX;for(var C=function(X){var G=R-l(X,o)/2+b.config.xaxis.labels.offsetX;X===0&&F===1&&o/2===R&&f===1&&(G=b.globals.gridWidth/2);var Y=h.axesUtils.getLabel(a,b.globals.timescaleLabels,G,X,p,y,e),re=28;if(b.globals.rotateXLabels&&e&&(re=22),e||(re=re+parseFloat(y)+(b.globals.xAxisLabelsHeight-b.globals.xAxisGroupLabelsHeight)+(b.globals.rotateXLabels?10:0)),Y=b.config.xaxis.tickAmount!==void 0&&b.config.xaxis.tickAmount!=="dataPoints"&&b.config.xaxis.type!=="datetime"?h.axesUtils.checkLabelBasedOnTickamount(X,Y,F):h.axesUtils.checkForOverflowingLabels(X,Y,F,p,x),e&&Y.text&&b.globals.xaxisLabelsCount++,b.config.xaxis.labels.show){var te=t.drawText({x:Y.x,y:h.offY+b.config.xaxis.labels.offsetY+re-(b.config.xaxis.position==="top"?b.globals.xAxisHeight+b.config.xaxis.axisTicks.height-2:0),text:Y.text,textAnchor:"middle",fontWeight:Y.isBold?600:E,fontSize:y,fontFamily:S,foreColor:Array.isArray(A)?e&&b.config.xaxis.convertedCatToNumeric?A[b.globals.minX+X-1]:A[X]:A,isPlainText:!1,cssClass:(e?"apexcharts-xaxis-label ":"apexcharts-xaxis-group-label ")+_});if(i.add(te),e){var pe=document.createElementNS(b.globals.SVGNS,"title");pe.textContent=Array.isArray(Y.text)?Y.text.join(" "):Y.text,te.node.appendChild(pe),Y.text!==""&&(p.push(Y.text),x.push(Y))}}X<F-1&&(R+=l(X+1,o))},M=0;M<=F-1;M++)C(M)}},{key:"drawXaxisInversed",value:function(e){var t,i,a=this,r=this.w,l=new H(this.ctx),o=r.config.yaxis[0].opposite?r.globals.translateYAxisX[e]:0,h=l.group({class:"apexcharts-yaxis apexcharts-xaxis-inversed",rel:e}),d=l.group({class:"apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",transform:"translate("+o+", 0)"});h.add(d);var p=[];if(r.config.yaxis[e].show)for(var x=0;x<this.xaxisLabels.length;x++)p.push(this.xaxisLabels[x]);t=r.globals.gridHeight/p.length,i=-t/2.2;var b=r.globals.yLabelFormatters[0],y=r.config.yaxis[0].labels;if(y.show)for(var S=function(v){var C=p[v]===void 0?"":p[v];C=b(C,{seriesIndex:e,dataPointIndex:v,w:r});var M=a.axesUtils.getYAxisForeColor(y.style.colors,e),X=0;Array.isArray(C)&&(X=C.length/2*parseInt(y.style.fontSize,10));var G=l.drawText({x:y.offsetX-15,y:i+t+y.offsetY-X,text:C,textAnchor:a.yaxis.opposite?"start":"end",foreColor:Array.isArray(M)?M[v]:M,fontSize:y.style.fontSize,fontFamily:y.style.fontFamily,fontWeight:y.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+y.style.cssClass,maxWidth:y.maxWidth});d.add(G);var Y=document.createElementNS(r.globals.SVGNS,"title");if(Y.textContent=Array.isArray(C)?C.join(" "):C,G.node.appendChild(Y),r.config.yaxis[e].labels.rotate!==0){var re=l.rotateAroundCenter(G.node);G.node.setAttribute("transform","rotate(".concat(r.config.yaxis[e].labels.rotate," 0 ").concat(re.y,")"))}i+=t},A=0;A<=p.length-1;A++)S(A);if(r.config.yaxis[0].title.text!==void 0){var E=l.group({class:"apexcharts-yaxis-title apexcharts-xaxis-title-inversed",transform:"translate("+o+", 0)"}),_=l.drawText({x:0,y:r.globals.gridHeight/2,text:r.config.yaxis[0].title.text,textAnchor:"middle",foreColor:r.config.yaxis[0].title.style.color,fontSize:r.config.yaxis[0].title.style.fontSize,fontWeight:r.config.yaxis[0].title.style.fontWeight,fontFamily:r.config.yaxis[0].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+r.config.yaxis[0].title.style.cssClass});E.add(_),h.add(E)}var R=0;this.isCategoryBarHorizontal&&r.config.yaxis[0].opposite&&(R=r.globals.gridWidth);var F=r.config.xaxis.axisBorder;if(F.show){var f=l.drawLine(r.globals.padHorizontal+F.offsetX+R,1+F.offsetY,r.globals.padHorizontal+F.offsetX+R,r.globals.gridHeight+F.offsetY,F.color,0);h.add(f)}return r.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(R,p.length,r.config.yaxis[0].axisBorder,r.config.yaxis[0].axisTicks,0,t,h),h}},{key:"drawXaxisTicks",value:function(e,t,i){var a=this.w,r=e;if(!(e<0||e-2>a.globals.gridWidth)){var l=this.offY+a.config.xaxis.axisTicks.offsetY;if(t=t+l+a.config.xaxis.axisTicks.height,a.config.xaxis.position==="top"&&(t=l-a.config.xaxis.axisTicks.height),a.config.xaxis.axisTicks.show){var o=new H(this.ctx).drawLine(e+a.config.xaxis.axisTicks.offsetX,l+a.config.xaxis.offsetY,r+a.config.xaxis.axisTicks.offsetX,t+a.config.xaxis.offsetY,a.config.xaxis.axisTicks.color);i.add(o),o.node.classList.add("apexcharts-xaxis-tick")}}}},{key:"getXAxisTicksPositions",value:function(){var e=this.w,t=[],i=this.xaxisLabels.length,a=e.globals.padHorizontal;if(e.globals.timescaleLabels.length>0)for(var r=0;r<i;r++)a=this.xaxisLabels[r].position,t.push(a);else for(var l=i,o=0;o<l;o++){var h=l;e.globals.isXNumeric&&e.config.chart.type!=="bar"&&(h-=1),a+=e.globals.gridWidth/h,t.push(a)}return t}},{key:"xAxisLabelCorrections",value:function(){var e=this.w,t=new H(this.ctx),i=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),r=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),l=e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");if(e.globals.rotateXLabels||e.config.xaxis.labels.rotateAlways)for(var o=0;o<a.length;o++){var h=t.rotateAroundCenter(a[o]);h.y=h.y-1,h.x=h.x+1,a[o].setAttribute("transform","rotate(".concat(e.config.xaxis.labels.rotate," ").concat(h.x," ").concat(h.y,")")),a[o].setAttribute("text-anchor","end"),i.setAttribute("transform","translate(0, ".concat(-10,")"));var d=a[o].childNodes;e.config.xaxis.labels.trim&&Array.prototype.forEach.call(d,function(y){t.placeTextWithEllipsis(y,y.textContent,e.globals.xAxisLabelsHeight-(e.config.legend.position==="bottom"?20:10))})}else(function(){for(var y=e.globals.gridWidth/(e.globals.labels.length+1),S=0;S<a.length;S++){var A=a[S].childNodes;e.config.xaxis.labels.trim&&e.config.xaxis.type!=="datetime"&&Array.prototype.forEach.call(A,function(E){t.placeTextWithEllipsis(E,E.textContent,y)})}})();if(r.length>0){var p=r[r.length-1].getBBox(),x=r[0].getBBox();p.x<-20&&r[r.length-1].parentNode.removeChild(r[r.length-1]),x.x+x.width>e.globals.gridWidth&&!e.globals.isBarHorizontal&&r[0].parentNode.removeChild(r[0]);for(var b=0;b<l.length;b++)t.placeTextWithEllipsis(l[b],l[b].textContent,e.config.yaxis[0].labels.maxWidth-(e.config.yaxis[0].title.text?2*parseFloat(e.config.yaxis[0].title.style.fontSize):0)-15)}}}]),L}(),D=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.xaxisLabels=t.globals.labels.slice(),this.axesUtils=new Re(e),this.isRangeBar=t.globals.seriesRangeBar.length,t.globals.timescaleLabels.length>0&&(this.xaxisLabels=t.globals.timescaleLabels.slice())}return k(L,[{key:"drawGridArea",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,t=this.w,i=new H(this.ctx);e===null&&(e=i.group({class:"apexcharts-grid"}));var a=i.drawLine(t.globals.padHorizontal,1,t.globals.padHorizontal,t.globals.gridHeight,"transparent"),r=i.drawLine(t.globals.padHorizontal,t.globals.gridHeight,t.globals.gridWidth,t.globals.gridHeight,"transparent");return e.add(r),e.add(a),e}},{key:"drawGrid",value:function(){var e=null;return this.w.globals.axisCharts&&(e=this.renderGrid(),this.drawGridArea(e.el)),e}},{key:"createGridMask",value:function(){var e=this.w,t=e.globals,i=new H(this.ctx),a=Array.isArray(e.config.stroke.width)?0:e.config.stroke.width;if(Array.isArray(e.config.stroke.width)){var r=0;e.config.stroke.width.forEach(function(x){r=Math.max(r,x)}),a=r}t.dom.elGridRectMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elGridRectMask.setAttribute("id","gridRectMask".concat(t.cuid)),t.dom.elGridRectMarkerMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elGridRectMarkerMask.setAttribute("id","gridRectMarkerMask".concat(t.cuid)),t.dom.elForecastMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elForecastMask.setAttribute("id","forecastMask".concat(t.cuid)),t.dom.elNonForecastMask=document.createElementNS(t.SVGNS,"clipPath"),t.dom.elNonForecastMask.setAttribute("id","nonForecastMask".concat(t.cuid));var l=e.config.chart.type,o=0,h=0;(l==="bar"||l==="rangeBar"||l==="candlestick"||l==="boxPlot"||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&(o=e.config.grid.padding.left,h=e.config.grid.padding.right,t.barPadForNumericAxis>o&&(o=t.barPadForNumericAxis,h=t.barPadForNumericAxis)),t.dom.elGridRect=i.drawRect(-a/2-o-2,-a/2,t.gridWidth+a+h+o+4,t.gridHeight+a,0,"#fff");var d=e.globals.markers.largestSize+1;t.dom.elGridRectMarker=i.drawRect(2*-d,2*-d,t.gridWidth+4*d,t.gridHeight+4*d,0,"#fff"),t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node),t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);var p=t.dom.baseEl.querySelector("defs");p.appendChild(t.dom.elGridRectMask),p.appendChild(t.dom.elForecastMask),p.appendChild(t.dom.elNonForecastMask),p.appendChild(t.dom.elGridRectMarkerMask)}},{key:"_drawGridLines",value:function(e){var t=e.i,i=e.x1,a=e.y1,r=e.x2,l=e.y2,o=e.xCount,h=e.parent,d=this.w;if(!(t===0&&d.globals.skipFirstTimelinelabel||t===o-1&&d.globals.skipLastTimelinelabel&&!d.config.xaxis.labels.formatter||d.config.chart.type==="radar")){d.config.grid.xaxis.lines.show&&this._drawGridLine({x1:i,y1:a,x2:r,y2:l,parent:h});var p=0;if(d.globals.hasGroups&&d.config.xaxis.tickPlacement==="between"){var x=d.globals.groups;if(x){for(var b=0,y=0;b<t&&y<x.length;y++)b+=x[y].cols;b===t&&(p=.6*d.globals.xAxisLabelsHeight)}}new Ee(this.ctx).drawXaxisTicks(i,p,this.elg)}}},{key:"_drawGridLine",value:function(e){var t=e.x1,i=e.y1,a=e.x2,r=e.y2,l=e.parent,o=this.w,h=l.node.classList.contains("apexcharts-gridlines-horizontal"),d=o.config.grid.strokeDashArray,p=o.globals.barPadForNumericAxis,x=new H(this).drawLine(t-(h?p:0),i,a+(h?p:0),r,o.config.grid.borderColor,d);x.node.classList.add("apexcharts-gridline"),l.add(x)}},{key:"_drawGridBandRect",value:function(e){var t=e.c,i=e.x1,a=e.y1,r=e.x2,l=e.y2,o=e.type,h=this.w,d=new H(this.ctx),p=h.globals.barPadForNumericAxis;if(o!=="column"||h.config.xaxis.type!=="datetime"){var x=h.config.grid[o].colors[t],b=d.drawRect(i-(o==="row"?p:0),a,r+(o==="row"?2*p:0),l,0,x,h.config.grid[o].opacity);this.elg.add(b),b.attr("clip-path","url(#gridRectMask".concat(h.globals.cuid,")")),b.node.classList.add("apexcharts-grid-".concat(o))}}},{key:"_drawXYLines",value:function(e){var t=this,i=e.xCount,a=e.tickAmount,r=this.w;if(r.config.grid.xaxis.lines.show||r.config.xaxis.axisTicks.show){var l,o=r.globals.padHorizontal,h=r.globals.gridHeight;r.globals.timescaleLabels.length?function(S){for(var A=S.xC,E=S.x1,_=S.y1,R=S.x2,F=S.y2,f=0;f<A;f++)E=t.xaxisLabels[f].position,R=t.xaxisLabels[f].position,t._drawGridLines({i:f,x1:E,y1:_,x2:R,y2:F,xCount:i,parent:t.elgridLinesV})}({xC:i,x1:o,y1:0,x2:l,y2:h}):(r.globals.isXNumeric&&(i=r.globals.xAxisScale.result.length),r.config.xaxis.convertedCatToNumeric&&(i=r.globals.xaxisLabelsCount),function(S){var A=S.xC,E=S.x1,_=S.y1,R=S.x2,F=S.y2;if(r.config.xaxis.tickAmount!==void 0&&r.config.xaxis.tickAmount!=="dataPoints"&&r.config.xaxis.tickPlacement==="on")r.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan:not(:empty)").forEach(function(v,C){var M=v.getBBox();t._drawGridLines({i:C,x1:M.x+M.width/2,y1:_,x2:M.x+M.width/2,y2:F,xCount:i,parent:t.elgridLinesV})});else for(var f=0;f<A+(r.globals.isXNumeric?0:1);f++)f===0&&A===1&&r.globals.dataPoints===1&&(R=E=r.globals.gridWidth/2),t._drawGridLines({i:f,x1:E,y1:_,x2:R,y2:F,xCount:i,parent:t.elgridLinesV}),R=E+=r.globals.gridWidth/(r.globals.isXNumeric?A-1:A)}({xC:i,x1:o,y1:0,x2:l,y2:h}))}if(r.config.grid.yaxis.lines.show){var d=0,p=0,x=r.globals.gridWidth,b=a+1;this.isRangeBar&&(b=r.globals.labels.length);for(var y=0;y<b+(this.isRangeBar?1:0);y++)this._drawGridLine({x1:0,y1:d,x2:x,y2:p,parent:this.elgridLinesH}),p=d+=r.globals.gridHeight/(this.isRangeBar?b:a)}}},{key:"_drawInvertedXYLines",value:function(e){var t=e.xCount,i=this.w;if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a,r=i.globals.padHorizontal,l=i.globals.gridHeight,o=0;o<t+1;o++)i.config.grid.xaxis.lines.show&&this._drawGridLine({x1:r,y1:0,x2:a,y2:l,parent:this.elgridLinesV}),new Ee(this.ctx).drawXaxisTicks(r,0,this.elg),a=r=r+i.globals.gridWidth/t+.3;if(i.config.grid.yaxis.lines.show)for(var h=0,d=0,p=i.globals.gridWidth,x=0;x<i.globals.dataPoints+1;x++)this._drawGridLine({x1:0,y1:h,x2:p,y2:d,parent:this.elgridLinesH}),d=h+=i.globals.gridHeight/i.globals.dataPoints}},{key:"renderGrid",value:function(){var e=this.w,t=new H(this.ctx);this.elg=t.group({class:"apexcharts-grid"}),this.elgridLinesH=t.group({class:"apexcharts-gridlines-horizontal"}),this.elgridLinesV=t.group({class:"apexcharts-gridlines-vertical"}),this.elg.add(this.elgridLinesH),this.elg.add(this.elgridLinesV),e.config.grid.show||(this.elgridLinesV.hide(),this.elgridLinesH.hide());for(var i,a=e.globals.yAxisScale.length?e.globals.yAxisScale[0].result.length-1:5,r=0;r<e.globals.series.length&&(e.globals.yAxisScale[r]!==void 0&&(a=e.globals.yAxisScale[r].result.length-1),!(a>2));r++);return!e.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length,this.isRangeBar&&(a=e.globals.labels.length,e.config.xaxis.tickAmount&&e.config.xaxis.labels.formatter&&(i=e.config.xaxis.tickAmount)),this._drawXYLines({xCount:i,tickAmount:a})):(i=a,a=e.globals.xTickAmount,this._drawInvertedXYLines({xCount:i,tickAmount:a})),this.drawGridBands(i,a),{el:this.elg,xAxisTickWidth:e.globals.gridWidth/i}}},{key:"drawGridBands",value:function(e,t){var i=this.w;if(i.config.grid.row.colors!==void 0&&i.config.grid.row.colors.length>0)for(var a=0,r=i.globals.gridHeight/t,l=i.globals.gridWidth,o=0,h=0;o<t;o++,h++)h>=i.config.grid.row.colors.length&&(h=0),this._drawGridBandRect({c:h,x1:0,y1:a,x2:l,y2:r,type:"row"}),a+=i.globals.gridHeight/t;if(i.config.grid.column.colors!==void 0&&i.config.grid.column.colors.length>0)for(var d=i.globals.isBarHorizontal||i.config.xaxis.type!=="category"&&!i.config.xaxis.convertedCatToNumeric?e:e-1,p=i.globals.padHorizontal,x=i.globals.padHorizontal+i.globals.gridWidth/d,b=i.globals.gridHeight,y=0,S=0;y<e;y++,S++)S>=i.config.grid.column.colors.length&&(S=0),this._drawGridBandRect({c:S,x1:p,y1:0,x2:x,y2:b,type:"column"}),p+=i.globals.gridWidth/d}}]),L}(),B=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"niceScale",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4?arguments[4]:void 0,l=this.w,o=Math.abs(t-e);if((i=this._adjustTicksForSmallRange(i,a,o))==="dataPoints"&&(i=l.globals.dataPoints-1),e===Number.MIN_VALUE&&t===0||!T.isNumber(e)&&!T.isNumber(t)||e===Number.MIN_VALUE&&t===-Number.MAX_VALUE){e=0,t=i;var h=this.linearScale(e,t,i);return h}e>t?(console.warn("axis.min cannot be greater than axis.max"),t=e+.1):e===t&&(e=e===0?0:e-.5,t=t===0?2:t+.5);var d=[];o<1&&r&&(l.config.chart.type==="candlestick"||l.config.series[a].type==="candlestick"||l.config.chart.type==="boxPlot"||l.config.series[a].type==="boxPlot"||l.globals.isRangeData)&&(t*=1.01);var p=i+1;p<2?p=2:p>2&&(p-=2);var x=o/p,b=Math.floor(T.log10(x)),y=Math.pow(10,b),S=Math.round(x/y);S<1&&(S=1);var A=S*y,E=A*Math.floor(e/A),_=A*Math.ceil(t/A),R=E;if(r&&o>2){for(;d.push(R),!((R+=A)>_););return{result:d,niceMin:d[0],niceMax:d[d.length-1]}}var F=e;(d=[]).push(F);for(var f=Math.abs(t-e)/i,v=0;v<=i;v++)F+=f,d.push(F);return d[d.length-2]>=t&&d.pop(),{result:d,niceMin:d[0],niceMax:d[d.length-1]}}},{key:"linearScale",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,a=arguments.length>3?arguments[3]:void 0,r=Math.abs(t-e);(i=this._adjustTicksForSmallRange(i,a,r))==="dataPoints"&&(i=this.w.globals.dataPoints-1);var l=r/i;i===Number.MAX_VALUE&&(i=10,l=1);for(var o=[],h=e;i>=0;)o.push(h),h+=l,i-=1;return{result:o,niceMin:o[0],niceMax:o[o.length-1]}}},{key:"logarithmicScaleNice",value:function(e,t,i){t<=0&&(t=Math.max(e,i)),e<=0&&(e=Math.min(t,i));for(var a=[],r=Math.ceil(Math.log(t)/Math.log(i)+1),l=Math.floor(Math.log(e)/Math.log(i));l<r;l++)a.push(Math.pow(i,l));return{result:a,niceMin:a[0],niceMax:a[a.length-1]}}},{key:"logarithmicScale",value:function(e,t,i){t<=0&&(t=Math.max(e,i)),e<=0&&(e=Math.min(t,i));for(var a=[],r=Math.log(t)/Math.log(i),l=Math.log(e)/Math.log(i),o=r-l,h=Math.round(o),d=o/h,p=0,x=l;p<h;p++,x+=d)a.push(Math.pow(i,x));return a.push(Math.pow(i,r)),{result:a,niceMin:e,niceMax:t}}},{key:"_adjustTicksForSmallRange",value:function(e,t,i){var a=e;if(t!==void 0&&this.w.config.yaxis[t].labels.formatter&&this.w.config.yaxis[t].tickAmount===void 0){var r=this.w.config.yaxis[t].labels.formatter(1);T.isNumber(Number(r))&&!T.isFloat(r)&&(a=Math.ceil(i))}return a<e?a:e}},{key:"setYScaleForIndex",value:function(e,t,i){var a=this.w.globals,r=this.w.config,l=a.isBarHorizontal?r.xaxis:r.yaxis[e];a.yAxisScale[e]===void 0&&(a.yAxisScale[e]=[]);var o=Math.abs(i-t);if(l.logarithmic&&o<=5&&(a.invalidLogScale=!0),l.logarithmic&&o>5)a.allSeriesCollapsed=!1,a.yAxisScale[e]=this.logarithmicScale(t,i,l.logBase),a.yAxisScale[e]=l.forceNiceScale?this.logarithmicScaleNice(t,i,l.logBase):this.logarithmicScale(t,i,l.logBase);else if(i!==-Number.MAX_VALUE&&T.isNumber(i))if(a.allSeriesCollapsed=!1,l.min===void 0&&l.max===void 0||l.forceNiceScale){var h=r.yaxis[e].max===void 0&&r.yaxis[e].min===void 0||r.yaxis[e].forceNiceScale;a.yAxisScale[e]=this.niceScale(t,i,l.tickAmount?l.tickAmount:o<5&&o>1?o+1:5,e,h)}else a.yAxisScale[e]=this.linearScale(t,i,l.tickAmount,e);else a.yAxisScale[e]=this.linearScale(0,5,5)}},{key:"setXScale",value:function(e,t){var i=this.w,a=i.globals,r=i.config.xaxis,l=Math.abs(t-e);return t!==-Number.MAX_VALUE&&T.isNumber(t)?a.xAxisScale=this.linearScale(e,t,r.tickAmount?r.tickAmount:l<5&&l>1?l+1:5,0):a.xAxisScale=this.linearScale(0,5,5),a.xAxisScale}},{key:"setMultipleYScales",value:function(){var e=this,t=this.w.globals,i=this.w.config,a=t.minYArr.concat([]),r=t.maxYArr.concat([]),l=[];i.yaxis.forEach(function(o,h){var d=h;i.series.forEach(function(b,y){b.name===o.seriesName&&(d=y,h!==y?l.push({index:y,similarIndex:h,alreadyExists:!0}):l.push({index:y}))});var p=a[d],x=r[d];e.setYScaleForIndex(h,p,x)}),this.sameScaleInMultipleAxes(a,r,l)}},{key:"sameScaleInMultipleAxes",value:function(e,t,i){var a=this,r=this.w.config,l=this.w.globals,o=[];i.forEach(function(A){A.alreadyExists&&(o[A.index]===void 0&&(o[A.index]=[]),o[A.index].push(A.index),o[A.index].push(A.similarIndex))}),l.yAxisSameScaleIndices=o,o.forEach(function(A,E){o.forEach(function(_,R){var F,f;E!==R&&(F=A,f=_,F.filter(function(v){return f.indexOf(v)!==-1})).length>0&&(o[E]=o[E].concat(o[R]))})});var h=o.map(function(A){return A.filter(function(E,_){return A.indexOf(E)===_})}).map(function(A){return A.sort()});o=o.filter(function(A){return!!A});var d=h.slice(),p=d.map(function(A){return JSON.stringify(A)});d=d.filter(function(A,E){return p.indexOf(JSON.stringify(A))===E});var x=[],b=[];e.forEach(function(A,E){d.forEach(function(_,R){_.indexOf(E)>-1&&(x[R]===void 0&&(x[R]=[],b[R]=[]),x[R].push({key:E,value:A}),b[R].push({key:E,value:t[E]}))})});var y=Array.apply(null,Array(d.length)).map(Number.prototype.valueOf,Number.MIN_VALUE),S=Array.apply(null,Array(d.length)).map(Number.prototype.valueOf,-Number.MAX_VALUE);x.forEach(function(A,E){A.forEach(function(_,R){y[E]=Math.min(_.value,y[E])})}),b.forEach(function(A,E){A.forEach(function(_,R){S[E]=Math.max(_.value,S[E])})}),e.forEach(function(A,E){b.forEach(function(_,R){var F=y[R],f=S[R];r.chart.stacked&&(f=0,_.forEach(function(v,C){v.value!==-Number.MAX_VALUE&&(f+=v.value),F!==Number.MIN_VALUE&&(F+=x[R][C].value)})),_.forEach(function(v,C){_[C].key===E&&(r.yaxis[E].min!==void 0&&(F=typeof r.yaxis[E].min=="function"?r.yaxis[E].min(l.minY):r.yaxis[E].min),r.yaxis[E].max!==void 0&&(f=typeof r.yaxis[E].max=="function"?r.yaxis[E].max(l.maxY):r.yaxis[E].max),a.setYScaleForIndex(E,F,f))})})})}},{key:"autoScaleY",value:function(e,t,i){e||(e=this);var a=e.w;if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."),t;var r=a.globals.seriesX[0],l=a.config.chart.stacked;return t.forEach(function(o,h){for(var d=0,p=0;p<r.length;p++)if(r[p]>=i.xaxis.min){d=p;break}var x,b,y=a.globals.minYArr[h],S=a.globals.maxYArr[h],A=a.globals.stackedSeriesTotals;a.globals.series.forEach(function(E,_){var R=E[d];l?(R=A[d],x=b=R,A.forEach(function(F,f){r[f]<=i.xaxis.max&&r[f]>=i.xaxis.min&&(F>b&&F!==null&&(b=F),E[f]<x&&E[f]!==null&&(x=E[f]))})):(x=b=R,E.forEach(function(F,f){if(r[f]<=i.xaxis.max&&r[f]>=i.xaxis.min){var v=F,C=F;a.globals.series.forEach(function(M,X){F!==null&&(v=Math.min(M[f],v),C=Math.max(M[f],C))}),C>b&&C!==null&&(b=C),v<x&&v!==null&&(x=v)}})),x===void 0&&b===void 0&&(x=y,b=S),b*=b<0?.9:1.1,(x*=x<0?1.1:.9)===0&&b===0&&(x=-1,b=1),b<0&&b<S&&(b=S),x<0&&x>y&&(x=y),t.length>1?(t[_].min=o.min===void 0?x:o.min,t[_].max=o.max===void 0?b:o.max):(t[0].min=o.min===void 0?x:o.min,t[0].max=o.max===void 0?b:o.max)})}),t}}]),L}(),$=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.scales=new B(e)}return k(L,[{key:"init",value:function(){this.setYRange(),this.setXRange(),this.setZRange()}},{key:"getMinYMaxY",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-Number.MAX_VALUE,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,r=this.w.config,l=this.w.globals,o=-Number.MAX_VALUE,h=Number.MIN_VALUE;a===null&&(a=e+1);var d=l.series,p=d,x=d;r.chart.type==="candlestick"?(p=l.seriesCandleL,x=l.seriesCandleH):r.chart.type==="boxPlot"?(p=l.seriesCandleO,x=l.seriesCandleC):l.isRangeData&&(p=l.seriesRangeStart,x=l.seriesRangeEnd);for(var b=e;b<a;b++){l.dataPoints=Math.max(l.dataPoints,d[b].length),l.categoryLabels.length&&(l.dataPoints=l.categoryLabels.filter(function(A){return A!==void 0}).length);for(var y=0;y<l.series[b].length;y++){var S=d[b][y];S!==null&&T.isNumber(S)?(x[b][y]!==void 0&&(o=Math.max(o,x[b][y]),t=Math.min(t,x[b][y])),p[b][y]!==void 0&&(t=Math.min(t,p[b][y]),i=Math.max(i,p[b][y])),this.w.config.chart.type!=="candlestick"&&this.w.config.chart.type!=="boxPlot"||(l.seriesCandleC[b][y]!==void 0&&(o=Math.max(o,l.seriesCandleO[b][y]),o=Math.max(o,l.seriesCandleH[b][y]),o=Math.max(o,l.seriesCandleL[b][y]),o=Math.max(o,l.seriesCandleC[b][y]),this.w.config.chart.type==="boxPlot"&&(o=Math.max(o,l.seriesCandleM[b][y]))),!r.series[b].type||r.series[b].type==="candlestick"&&r.series[b].type==="boxPlot"||(o=Math.max(o,l.series[b][y]),t=Math.min(t,l.series[b][y])),i=o),l.seriesGoals[b]&&l.seriesGoals[b][y]&&Array.isArray(l.seriesGoals[b][y])&&l.seriesGoals[b][y].forEach(function(A){h!==Number.MIN_VALUE&&(h=Math.min(h,A.value),t=h),o=Math.max(o,A.value),i=o}),T.isFloat(S)&&(S=T.noExponents(S),l.yValueDecimal=Math.max(l.yValueDecimal,S.toString().split(".")[1].length)),h>p[b][y]&&p[b][y]<0&&(h=p[b][y])):l.hasNullValues=!0}}return r.chart.type==="rangeBar"&&l.seriesRangeStart.length&&l.isBarHorizontal&&(h=t),r.chart.type==="bar"&&(h<0&&o<0&&(o=0),h===Number.MIN_VALUE&&(h=0)),{minY:h,maxY:o,lowestY:t,highestY:i}}},{key:"setYRange",value:function(){var e=this.w.globals,t=this.w.config;e.maxY=-Number.MAX_VALUE,e.minY=Number.MIN_VALUE;var i=Number.MAX_VALUE;if(e.isMultipleYAxis)for(var a=0;a<e.series.length;a++){var r=this.getMinYMaxY(a,i,null,a+1);e.minYArr.push(r.minY),e.maxYArr.push(r.maxY),i=r.lowestY}var l=this.getMinYMaxY(0,i,null,e.series.length);if(e.minY=l.minY,e.maxY=l.maxY,i=l.lowestY,t.chart.stacked&&this._setStackedMinMax(),(t.chart.type==="line"||t.chart.type==="area"||t.chart.type==="candlestick"||t.chart.type==="boxPlot"||t.chart.type==="rangeBar"&&!e.isBarHorizontal)&&e.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==e.maxY){var o=e.maxY-i;(i>=0&&i<=10||t.yaxis[0].min!==void 0||t.yaxis[0].max!==void 0)&&(o=0),e.minY=i-5*o/100,i>0&&e.minY<0&&(e.minY=0),e.maxY=e.maxY+5*o/100}return t.yaxis.forEach(function(h,d){h.max!==void 0&&(typeof h.max=="number"?e.maxYArr[d]=h.max:typeof h.max=="function"&&(e.maxYArr[d]=h.max(e.isMultipleYAxis?e.maxYArr[d]:e.maxY)),e.maxY=e.maxYArr[d]),h.min!==void 0&&(typeof h.min=="number"?e.minYArr[d]=h.min:typeof h.min=="function"&&(e.minYArr[d]=h.min(e.isMultipleYAxis?e.minYArr[d]===Number.MIN_VALUE?0:e.minYArr[d]:e.minY)),e.minY=e.minYArr[d])}),e.isBarHorizontal&&["min","max"].forEach(function(h){t.xaxis[h]!==void 0&&typeof t.xaxis[h]=="number"&&(h==="min"?e.minY=t.xaxis[h]:e.maxY=t.xaxis[h])}),e.isMultipleYAxis?(this.scales.setMultipleYScales(),e.minY=i,e.yAxisScale.forEach(function(h,d){e.minYArr[d]=h.niceMin,e.maxYArr[d]=h.niceMax})):(this.scales.setYScaleForIndex(0,e.minY,e.maxY),e.minY=e.yAxisScale[0].niceMin,e.maxY=e.yAxisScale[0].niceMax,e.minYArr[0]=e.yAxisScale[0].niceMin,e.maxYArr[0]=e.yAxisScale[0].niceMax),{minY:e.minY,maxY:e.maxY,minYArr:e.minYArr,maxYArr:e.maxYArr,yAxisScale:e.yAxisScale}}},{key:"setXRange",value:function(){var e=this.w.globals,t=this.w.config,i=t.xaxis.type==="numeric"||t.xaxis.type==="datetime"||t.xaxis.type==="category"&&!e.noLabelsProvided||e.noLabelsProvided||e.isXNumeric;if(e.isXNumeric&&function(){for(var o=0;o<e.series.length;o++)if(e.labels[o])for(var h=0;h<e.labels[o].length;h++)e.labels[o][h]!==null&&T.isNumber(e.labels[o][h])&&(e.maxX=Math.max(e.maxX,e.labels[o][h]),e.initialMaxX=Math.max(e.maxX,e.labels[o][h]),e.minX=Math.min(e.minX,e.labels[o][h]),e.initialMinX=Math.min(e.minX,e.labels[o][h]))}(),e.noLabelsProvided&&t.xaxis.categories.length===0&&(e.maxX=e.labels[e.labels.length-1],e.initialMaxX=e.labels[e.labels.length-1],e.minX=1,e.initialMinX=1),e.isXNumeric||e.noLabelsProvided||e.dataFormatXNumeric){var a;if(t.xaxis.tickAmount===void 0?(a=Math.round(e.svgWidth/150),t.xaxis.type==="numeric"&&e.dataPoints<30&&(a=e.dataPoints-1),a>e.dataPoints&&e.dataPoints!==0&&(a=e.dataPoints-1)):t.xaxis.tickAmount==="dataPoints"?(e.series.length>1&&(a=e.series[e.maxValsInArrayIndex].length-1),e.isXNumeric&&(a=e.maxX-e.minX-1)):a=t.xaxis.tickAmount,e.xTickAmount=a,t.xaxis.max!==void 0&&typeof t.xaxis.max=="number"&&(e.maxX=t.xaxis.max),t.xaxis.min!==void 0&&typeof t.xaxis.min=="number"&&(e.minX=t.xaxis.min),t.xaxis.range!==void 0&&(e.minX=e.maxX-t.xaxis.range),e.minX!==Number.MAX_VALUE&&e.maxX!==-Number.MAX_VALUE)if(t.xaxis.convertedCatToNumeric&&!e.dataFormatXNumeric){for(var r=[],l=e.minX-1;l<e.maxX;l++)r.push(l+1);e.xAxisScale={result:r,niceMin:r[0],niceMax:r[r.length-1]}}else e.xAxisScale=this.scales.setXScale(e.minX,e.maxX);else e.xAxisScale=this.scales.linearScale(1,a,a),e.noLabelsProvided&&e.labels.length>0&&(e.xAxisScale=this.scales.linearScale(1,e.labels.length,a-1),e.seriesX=e.labels.slice());i&&(e.labels=e.xAxisScale.result.slice())}return e.isBarHorizontal&&e.labels.length&&(e.xTickAmount=e.labels.length),this._handleSingleDataPoint(),this._getMinXDiff(),{minX:e.minX,maxX:e.maxX}}},{key:"setZRange",value:function(){var e=this.w.globals;if(e.isDataXYZ){for(var t=0;t<e.series.length;t++)if(e.seriesZ[t]!==void 0)for(var i=0;i<e.seriesZ[t].length;i++)e.seriesZ[t][i]!==null&&T.isNumber(e.seriesZ[t][i])&&(e.maxZ=Math.max(e.maxZ,e.seriesZ[t][i]),e.minZ=Math.min(e.minZ,e.seriesZ[t][i]))}}},{key:"_handleSingleDataPoint",value:function(){var e=this.w.globals,t=this.w.config;if(e.minX===e.maxX){var i=new je(this.ctx);if(t.xaxis.type==="datetime"){var a=i.getDate(e.minX);t.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2):a.setDate(a.getDate()-2),e.minX=new Date(a).getTime();var r=i.getDate(e.maxX);t.xaxis.labels.datetimeUTC?r.setUTCDate(r.getUTCDate()+2):r.setDate(r.getDate()+2),e.maxX=new Date(r).getTime()}else(t.xaxis.type==="numeric"||t.xaxis.type==="category"&&!e.noLabelsProvided)&&(e.minX=e.minX-2,e.initialMinX=e.minX,e.maxX=e.maxX+2,e.initialMaxX=e.maxX)}}},{key:"_getMinXDiff",value:function(){var e=this.w.globals;e.isXNumeric&&e.seriesX.forEach(function(t,i){t.length===1&&t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length-1]);var a=t.slice();a.sort(function(r,l){return r-l}),a.forEach(function(r,l){if(l>0){var o=r-a[l-1];o>0&&(e.minXDiff=Math.min(o,e.minXDiff))}}),e.dataPoints!==1&&e.minXDiff!==Number.MAX_VALUE||(e.minXDiff=.5)})}},{key:"_setStackedMinMax",value:function(){var e=this.w.globals,t=[],i=[];if(e.series.length)for(var a=0;a<e.series[e.maxValsInArrayIndex].length;a++)for(var r=0,l=0,o=0;o<e.series.length;o++)e.series[o][a]!==null&&T.isNumber(e.series[o][a])&&(e.series[o][a]>0?r=r+parseFloat(e.series[o][a])+1e-4:l+=parseFloat(e.series[o][a])),o===e.series.length-1&&(t.push(r),i.push(l));for(var h=0;h<t.length;h++)e.maxY=Math.max(e.maxY,t[h]),e.minY=Math.min(e.minY,i[h])}}]),L}(),ae=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.xaxisFontSize=t.config.xaxis.labels.style.fontSize,this.axisFontFamily=t.config.xaxis.labels.style.fontFamily,this.xaxisForeColors=t.config.xaxis.labels.style.colors,this.isCategoryBarHorizontal=t.config.chart.type==="bar"&&t.config.plotOptions.bar.horizontal,this.xAxisoffX=0,t.config.xaxis.position==="bottom"&&(this.xAxisoffX=t.globals.gridHeight),this.drawnLabels=[],this.axesUtils=new Re(e)}return k(L,[{key:"drawYaxis",value:function(e){var t=this,i=this.w,a=new H(this.ctx),r=i.config.yaxis[e].labels.style,l=r.fontSize,o=r.fontFamily,h=r.fontWeight,d=a.group({class:"apexcharts-yaxis",rel:e,transform:"translate("+i.globals.translateYAxisX[e]+", 0)"});if(this.axesUtils.isYAxisHidden(e))return d;var p=a.group({class:"apexcharts-yaxis-texts-g"});d.add(p);var x=i.globals.yAxisScale[e].result.length-1,b=i.globals.gridHeight/x,y=i.globals.translateY,S=i.globals.yLabelFormatters[e],A=i.globals.yAxisScale[e].result.slice();A=this.axesUtils.checkForReversedLabels(e,A);var E="";if(i.config.yaxis[e].labels.show)for(var _=function(G){var Y=A[G];Y=S(Y,G,i);var re=i.config.yaxis[e].labels.padding;i.config.yaxis[e].opposite&&i.config.yaxis.length!==0&&(re*=-1);var te=t.axesUtils.getYAxisForeColor(r.colors,e),pe=a.drawText({x:re,y:y+x/10+i.config.yaxis[e].labels.offsetY+1,text:Y,textAnchor:i.config.yaxis[e].opposite?"start":"end",fontSize:l,fontFamily:o,fontWeight:h,maxWidth:i.config.yaxis[e].labels.maxWidth,foreColor:Array.isArray(te)?te[G]:te,isPlainText:!1,cssClass:"apexcharts-yaxis-label "+r.cssClass});G===x&&(E=pe),p.add(pe);var Ce=document.createElementNS(i.globals.SVGNS,"title");if(Ce.textContent=Array.isArray(Y)?Y.join(" "):Y,pe.node.appendChild(Ce),i.config.yaxis[e].labels.rotate!==0){var Je=a.rotateAroundCenter(E.node),He=a.rotateAroundCenter(pe.node);pe.node.setAttribute("transform","rotate(".concat(i.config.yaxis[e].labels.rotate," ").concat(Je.x," ").concat(He.y,")"))}y+=b},R=x;R>=0;R--)_(R);if(i.config.yaxis[e].title.text!==void 0){var F=a.group({class:"apexcharts-yaxis-title"}),f=0;i.config.yaxis[e].opposite&&(f=i.globals.translateYAxisX[e]);var v=a.drawText({x:f,y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[e].title.offsetY,text:i.config.yaxis[e].title.text,textAnchor:"end",foreColor:i.config.yaxis[e].title.style.color,fontSize:i.config.yaxis[e].title.style.fontSize,fontWeight:i.config.yaxis[e].title.style.fontWeight,fontFamily:i.config.yaxis[e].title.style.fontFamily,cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[e].title.style.cssClass});F.add(v),d.add(F)}var C=i.config.yaxis[e].axisBorder,M=31+C.offsetX;if(i.config.yaxis[e].opposite&&(M=-31-C.offsetX),C.show){var X=a.drawLine(M,i.globals.translateY+C.offsetY-2,M,i.globals.gridHeight+i.globals.translateY+C.offsetY+2,C.color,0,C.width);d.add(X)}return i.config.yaxis[e].axisTicks.show&&this.axesUtils.drawYAxisTicks(M,x,C,i.config.yaxis[e].axisTicks,e,b,d),d}},{key:"drawYaxisInversed",value:function(e){var t=this.w,i=new H(this.ctx),a=i.group({class:"apexcharts-xaxis apexcharts-yaxis-inversed"}),r=i.group({class:"apexcharts-xaxis-texts-g",transform:"translate(".concat(t.globals.translateXAxisX,", ").concat(t.globals.translateXAxisY,")")});a.add(r);var l=t.globals.yAxisScale[e].result.length-1,o=t.globals.gridWidth/l+.1,h=o+t.config.xaxis.labels.offsetX,d=t.globals.xLabelFormatter,p=t.globals.yAxisScale[e].result.slice(),x=t.globals.timescaleLabels;x.length>0&&(this.xaxisLabels=x.slice(),l=(p=x.slice()).length),p=this.axesUtils.checkForReversedLabels(e,p);var b=x.length;if(t.config.xaxis.labels.show)for(var y=b?0:l;b?y<b:y>=0;b?y++:y--){var S=p[y];S=d(S,y,t);var A=t.globals.gridWidth+t.globals.padHorizontal-(h-o+t.config.xaxis.labels.offsetX);if(x.length){var E=this.axesUtils.getLabel(p,x,A,y,this.drawnLabels,this.xaxisFontSize);A=E.x,S=E.text,this.drawnLabels.push(E.text),y===0&&t.globals.skipFirstTimelinelabel&&(S=""),y===p.length-1&&t.globals.skipLastTimelinelabel&&(S="")}var _=i.drawText({x:A,y:this.xAxisoffX+t.config.xaxis.labels.offsetY+30-(t.config.xaxis.position==="top"?t.globals.xAxisHeight+t.config.xaxis.axisTicks.height-2:0),text:S,textAnchor:"middle",foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[e]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:t.config.xaxis.labels.style.fontWeight,isPlainText:!1,cssClass:"apexcharts-xaxis-label "+t.config.xaxis.labels.style.cssClass});r.add(_),_.tspan(S);var R=document.createElementNS(t.globals.SVGNS,"title");R.textContent=S,_.node.appendChild(R),h+=o}return this.inversedYAxisTitleText(a),this.inversedYAxisBorder(a),a}},{key:"inversedYAxisBorder",value:function(e){var t=this.w,i=new H(this.ctx),a=t.config.xaxis.axisBorder;if(a.show){var r=0;t.config.chart.type==="bar"&&t.globals.isXNumeric&&(r-=15);var l=i.drawLine(t.globals.padHorizontal+r+a.offsetX,this.xAxisoffX,t.globals.gridWidth,this.xAxisoffX,a.color,0,a.height);e.add(l)}}},{key:"inversedYAxisTitleText",value:function(e){var t=this.w,i=new H(this.ctx);if(t.config.xaxis.title.text!==void 0){var a=i.group({class:"apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),r=i.drawText({x:t.globals.gridWidth/2+t.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(t.config.xaxis.title.style.fontSize)+t.config.xaxis.title.offsetY+20,text:t.config.xaxis.title.text,textAnchor:"middle",fontSize:t.config.xaxis.title.style.fontSize,fontFamily:t.config.xaxis.title.style.fontFamily,fontWeight:t.config.xaxis.title.style.fontWeight,foreColor:t.config.xaxis.title.style.color,cssClass:"apexcharts-xaxis-title-text "+t.config.xaxis.title.style.cssClass});a.add(r),e.add(a)}}},{key:"yAxisTitleRotate",value:function(e,t){var i=this.w,a=new H(this.ctx),r={width:0,height:0},l={width:0,height:0},o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(e,"'] .apexcharts-yaxis-texts-g"));o!==null&&(r=o.getBoundingClientRect());var h=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e,"'] .apexcharts-yaxis-title text"));if(h!==null&&(l=h.getBoundingClientRect()),h!==null){var d=this.xPaddingForYAxisTitle(e,r,l,t);h.setAttribute("x",d.xPos-(t?10:0))}if(h!==null){var p=a.rotateAroundCenter(h);h.setAttribute("transform","rotate(".concat(t?-1*i.config.yaxis[e].title.rotate:i.config.yaxis[e].title.rotate," ").concat(p.x," ").concat(p.y,")"))}}},{key:"xPaddingForYAxisTitle",value:function(e,t,i,a){var r=this.w,l=0,o=0,h=10;return r.config.yaxis[e].title.text===void 0||e<0?{xPos:o,padd:0}:(a?(o=t.width+r.config.yaxis[e].title.offsetX+i.width/2+h/2,(l+=1)===0&&(o-=h/2)):(o=-1*t.width+r.config.yaxis[e].title.offsetX+h/2+i.width/2,r.globals.isBarHorizontal&&(h=25,o=-1*t.width-r.config.yaxis[e].title.offsetX-h)),{xPos:o,padd:h})}},{key:"setYAxisXPosition",value:function(e,t){var i=this.w,a=0,r=0,l=18,o=1;i.config.yaxis.length>1&&(this.multipleYs=!0),i.config.yaxis.map(function(h,d){var p=i.globals.ignoreYAxisIndexes.indexOf(d)>-1||!h.show||h.floating||e[d].width===0,x=e[d].width+t[d].width;h.opposite?i.globals.isBarHorizontal?(r=i.globals.gridWidth+i.globals.translateX-1,i.globals.translateYAxisX[d]=r-h.labels.offsetX):(r=i.globals.gridWidth+i.globals.translateX+o,p||(o=o+x+20),i.globals.translateYAxisX[d]=r-h.labels.offsetX+20):(a=i.globals.translateX-l,p||(l=l+x+20),i.globals.translateYAxisX[d]=a+h.labels.offsetX)})}},{key:"setYAxisTextAlignments",value:function(){var e=this.w,t=e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");(t=T.listToArray(t)).forEach(function(i,a){var r=e.config.yaxis[a];if(r&&r.labels.align!==void 0){var l=e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(a,"'] .apexcharts-yaxis-texts-g")),o=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(a,"'] .apexcharts-yaxis-label"));o=T.listToArray(o);var h=l.getBoundingClientRect();r.labels.align==="left"?(o.forEach(function(d,p){d.setAttribute("text-anchor","start")}),r.opposite||l.setAttribute("transform","translate(-".concat(h.width,", 0)"))):r.labels.align==="center"?(o.forEach(function(d,p){d.setAttribute("text-anchor","middle")}),l.setAttribute("transform","translate(".concat(h.width/2*(r.opposite?1:-1),", 0)"))):r.labels.align==="right"&&(o.forEach(function(d,p){d.setAttribute("text-anchor","end")}),r.opposite&&l.setAttribute("transform","translate(".concat(h.width,", 0)")))}})}}]),L}(),oe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.documentEvent=T.bind(this.documentEvent,this)}return k(L,[{key:"addEventListener",value:function(e,t){var i=this.w;i.globals.events.hasOwnProperty(e)?i.globals.events[e].push(t):i.globals.events[e]=[t]}},{key:"removeEventListener",value:function(e,t){var i=this.w;if(i.globals.events.hasOwnProperty(e)){var a=i.globals.events[e].indexOf(t);a!==-1&&i.globals.events[e].splice(a,1)}}},{key:"fireEvent",value:function(e,t){var i=this.w;if(i.globals.events.hasOwnProperty(e)){t&&t.length||(t=[]);for(var a=i.globals.events[e],r=a.length,l=0;l<r;l++)a[l].apply(null,t)}}},{key:"setupEventHandlers",value:function(){var e=this,t=this.w,i=this.ctx,a=t.globals.dom.baseEl.querySelector(t.globals.chartClass);this.ctx.eventList.forEach(function(r){a.addEventListener(r,function(l){var o=Object.assign({},t,{seriesIndex:t.globals.capturedSeriesIndex,dataPointIndex:t.globals.capturedDataPointIndex});l.type==="mousemove"||l.type==="touchmove"?typeof t.config.chart.events.mouseMove=="function"&&t.config.chart.events.mouseMove(l,i,o):l.type==="mouseleave"||l.type==="touchleave"?typeof t.config.chart.events.mouseLeave=="function"&&t.config.chart.events.mouseLeave(l,i,o):(l.type==="mouseup"&&l.which===1||l.type==="touchend")&&(typeof t.config.chart.events.click=="function"&&t.config.chart.events.click(l,i,o),i.ctx.events.fireEvent("click",[l,i,o]))},{capture:!1,passive:!0})}),this.ctx.eventList.forEach(function(r){t.globals.dom.baseEl.addEventListener(r,e.documentEvent,{passive:!0})}),this.ctx.core.setupBrushHandler()}},{key:"documentEvent",value:function(e){var t=this.w,i=e.target.className;if(e.type==="click"){var a=t.globals.dom.baseEl.querySelector(".apexcharts-menu");a&&a.classList.contains("apexcharts-menu-open")&&i!=="apexcharts-menu-icon"&&a.classList.remove("apexcharts-menu-open")}t.globals.clientX=e.type==="touchmove"?e.touches[0].clientX:e.clientX,t.globals.clientY=e.type==="touchmove"?e.touches[0].clientY:e.clientY}}]),L}(),xe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"setCurrentLocaleValues",value:function(e){var t=this.w.config.chart.locales;window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(t=this.w.config.chart.locales.concat(window.Apex.chart.locales));var i=t.filter(function(r){return r.name===e})[0];if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");var a=T.extend(le,i);this.w.globals.locale=a.options}}]),L}(),ve=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"drawAxis",value:function(e,t){var i,a,r=this.w.globals,l=this.w.config,o=new Ee(this.ctx),h=new ae(this.ctx);r.axisCharts&&e!=="radar"&&(r.isBarHorizontal?(a=h.drawYaxisInversed(0),i=o.drawXaxisInversed(0),r.dom.elGraphical.add(i),r.dom.elGraphical.add(a)):(i=o.drawXaxis(),r.dom.elGraphical.add(i),l.yaxis.map(function(d,p){r.ignoreYAxisIndexes.indexOf(p)===-1&&(a=h.drawYaxis(p),r.dom.Paper.add(a))})))}}]),L}(),fe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"drawXCrosshairs",value:function(){var e=this.w,t=new H(this.ctx),i=new Z(this.ctx),a=e.config.xaxis.crosshairs.fill.gradient,r=e.config.xaxis.crosshairs.dropShadow,l=e.config.xaxis.crosshairs.fill.type,o=a.colorFrom,h=a.colorTo,d=a.opacityFrom,p=a.opacityTo,x=a.stops,b=r.enabled,y=r.left,S=r.top,A=r.blur,E=r.color,_=r.opacity,R=e.config.xaxis.crosshairs.fill.color;if(e.config.xaxis.crosshairs.show){l==="gradient"&&(R=t.drawGradient("vertical",o,h,d,p,null,x,null));var F=t.drawRect();e.config.xaxis.crosshairs.width===1&&(F=t.drawLine());var f=e.globals.gridHeight;(!T.isNumber(f)||f<0)&&(f=0);var v=e.config.xaxis.crosshairs.width;(!T.isNumber(v)||v<0)&&(v=0),F.attr({class:"apexcharts-xcrosshairs",x:0,y:0,y2:f,width:v,height:f,fill:R,filter:"none","fill-opacity":e.config.xaxis.crosshairs.opacity,stroke:e.config.xaxis.crosshairs.stroke.color,"stroke-width":e.config.xaxis.crosshairs.stroke.width,"stroke-dasharray":e.config.xaxis.crosshairs.stroke.dashArray}),b&&(F=i.dropShadow(F,{left:y,top:S,blur:A,color:E,opacity:_})),e.globals.dom.elGraphical.add(F)}}},{key:"drawYCrosshairs",value:function(){var e=this.w,t=new H(this.ctx),i=e.config.yaxis[0].crosshairs,a=e.globals.barPadForNumericAxis;if(e.config.yaxis[0].crosshairs.show){var r=t.drawLine(-a,0,e.globals.gridWidth+a,0,i.stroke.color,i.stroke.dashArray,i.stroke.width);r.attr({class:"apexcharts-ycrosshairs"}),e.globals.dom.elGraphical.add(r)}var l=t.drawLine(-a,0,e.globals.gridWidth+a,0,i.stroke.color,0,0);l.attr({class:"apexcharts-ycrosshairs-hidden"}),e.globals.dom.elGraphical.add(l)}}]),L}(),me=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"checkResponsiveConfig",value:function(e){var t=this,i=this.w,a=i.config;if(a.responsive.length!==0){var r=a.responsive.slice();r.sort(function(d,p){return d.breakpoint>p.breakpoint?1:p.breakpoint>d.breakpoint?-1:0}).reverse();var l=new U({}),o=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=r[0].breakpoint,x=window.innerWidth>0?window.innerWidth:screen.width;if(x>p){var b=ce.extendArrayProps(l,i.globals.initialConfig,i);d=T.extend(b,d),d=T.extend(i.config,d),t.overrideResponsiveOptions(d)}else for(var y=0;y<r.length;y++)x<r[y].breakpoint&&(d=ce.extendArrayProps(l,r[y].options,i),d=T.extend(i.config,d),t.overrideResponsiveOptions(d))};if(e){var h=ce.extendArrayProps(l,e,i);h=T.extend(i.config,h),o(h=T.extend(h,e))}else o({})}}},{key:"overrideResponsiveOptions",value:function(e){var t=new U(e).init({responsiveOverride:!0});this.w.config=t}}]),L}(),he=function(){function L(e){m(this,L),this.ctx=e,this.colors=[],this.w=e.w;var t=this.w;this.isColorFn=!1,this.isHeatmapDistributed=t.config.chart.type==="treemap"&&t.config.plotOptions.treemap.distributed||t.config.chart.type==="heatmap"&&t.config.plotOptions.heatmap.distributed,this.isBarDistributed=t.config.plotOptions.bar.distributed&&(t.config.chart.type==="bar"||t.config.chart.type==="rangeBar")}return k(L,[{key:"init",value:function(){this.setDefaultColors()}},{key:"setDefaultColors",value:function(){var e=this,t=this.w,i=new T;if(t.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t.config.theme.mode)),t.config.colors===void 0?t.globals.colors=this.predefined():(t.globals.colors=t.config.colors,Array.isArray(t.config.colors)&&t.config.colors.length>0&&typeof t.config.colors[0]=="function"&&(t.globals.colors=t.config.series.map(function(y,S){var A=t.config.colors[S];return A||(A=t.config.colors[0]),typeof A=="function"?(e.isColorFn=!0,A({value:t.globals.axisCharts?t.globals.series[S][0]?t.globals.series[S][0]:0:t.globals.series[S],seriesIndex:S,dataPointIndex:S,w:t})):A}))),t.globals.seriesColors.map(function(y,S){y&&(t.globals.colors[S]=y)}),t.config.theme.monochrome.enabled){var a=[],r=t.globals.series.length;(this.isBarDistributed||this.isHeatmapDistributed)&&(r=t.globals.series[0].length*t.globals.series.length);for(var l=t.config.theme.monochrome.color,o=1/(r/t.config.theme.monochrome.shadeIntensity),h=t.config.theme.monochrome.shadeTo,d=0,p=0;p<r;p++){var x=void 0;h==="dark"?(x=i.shadeColor(-1*d,l),d+=o):(x=i.shadeColor(d,l),d+=o),a.push(x)}t.globals.colors=a.slice()}var b=t.globals.colors.slice();this.pushExtraColors(t.globals.colors),["fill","stroke"].forEach(function(y){t.config[y].colors===void 0?t.globals[y].colors=e.isColorFn?t.config.colors:b:t.globals[y].colors=t.config[y].colors.slice(),e.pushExtraColors(t.globals[y].colors)}),t.config.dataLabels.style.colors===void 0?t.globals.dataLabels.style.colors=b:t.globals.dataLabels.style.colors=t.config.dataLabels.style.colors.slice(),this.pushExtraColors(t.globals.dataLabels.style.colors,50),t.config.plotOptions.radar.polygons.fill.colors===void 0?t.globals.radarPolygons.fill.colors=[t.config.theme.mode==="dark"?"#424242":"none"]:t.globals.radarPolygons.fill.colors=t.config.plotOptions.radar.polygons.fill.colors.slice(),this.pushExtraColors(t.globals.radarPolygons.fill.colors,20),t.config.markers.colors===void 0?t.globals.markers.colors=b:t.globals.markers.colors=t.config.markers.colors.slice(),this.pushExtraColors(t.globals.markers.colors)}},{key:"pushExtraColors",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.w,r=t||a.globals.series.length;if(i===null&&(i=this.isBarDistributed||this.isHeatmapDistributed||a.config.chart.type==="heatmap"&&a.config.plotOptions.heatmap.colorScale.inverse),i&&a.globals.series.length&&(r=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length),e.length<r)for(var l=r-e.length,o=0;o<l;o++)e.push(e[o])}},{key:"updateThemeOptions",value:function(e){e.chart=e.chart||{},e.tooltip=e.tooltip||{};var t=e.theme.mode||"light",i=e.theme.palette?e.theme.palette:t==="dark"?"palette4":"palette1",a=e.chart.foreColor?e.chart.foreColor:t==="dark"?"#f6f7f8":"#373d3f";return e.tooltip.theme=t,e.chart.foreColor=a,e.theme.palette=i,e}},{key:"predefined",value:function(){switch(this.w.config.theme.palette){case"palette1":this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"];break;case"palette2":this.colors=["#3f51b5","#03a9f4","#4caf50","#f9ce1d","#FF9800"];break;case"palette3":this.colors=["#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"];break;case"palette4":this.colors=["#4ecdc4","#c7f464","#81D4FA","#fd6a6a","#546E7A"];break;case"palette5":this.colors=["#2b908f","#f9a3a4","#90ee7e","#fa4443","#69d2e7"];break;case"palette6":this.colors=["#449DD1","#F86624","#EA3546","#662E9B","#C5D86D"];break;case"palette7":this.colors=["#D7263D","#1B998B","#2E294E","#F46036","#E2C044"];break;case"palette8":this.colors=["#662E9B","#F86624","#F9C80E","#EA3546","#43BCCD"];break;case"palette9":this.colors=["#5C4742","#A5978B","#8D5B4C","#5A2A27","#C4BBAF"];break;case"palette10":this.colors=["#A300D6","#7D02EB","#5653FE","#2983FF","#00B1F2"];break;default:this.colors=["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}return this.colors}}]),L}(),Ae=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"draw",value:function(){this.drawTitleSubtitle("title"),this.drawTitleSubtitle("subtitle")}},{key:"drawTitleSubtitle",value:function(e){var t=this.w,i=e==="title"?t.config.title:t.config.subtitle,a=t.globals.svgWidth/2,r=i.offsetY,l="middle";if(i.align==="left"?(a=10,l="start"):i.align==="right"&&(a=t.globals.svgWidth-10,l="end"),a+=i.offsetX,r=r+parseInt(i.style.fontSize,10)+i.margin/2,i.text!==void 0){var o=new H(this.ctx).drawText({x:a,y:r,text:i.text,textAnchor:l,fontSize:i.style.fontSize,fontFamily:i.style.fontFamily,fontWeight:i.style.fontWeight,foreColor:i.style.color,opacity:1});o.node.setAttribute("class","apexcharts-".concat(e,"-text")),t.globals.dom.Paper.add(o)}}}]),L}(),we=function(){function L(e){m(this,L),this.w=e.w,this.dCtx=e}return k(L,[{key:"getTitleSubtitleCoords",value:function(e){var t=this.w,i=0,a=0,r=e==="title"?t.config.title.floating:t.config.subtitle.floating,l=t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e,"-text"));if(l!==null&&!r){var o=l.getBoundingClientRect();i=o.width,a=t.globals.axisCharts?o.height+5:o.height}return{width:i,height:a}}},{key:"getLegendsRect",value:function(){var e=this.w,t=e.globals.dom.baseEl.querySelector(".apexcharts-legend");e.config.legend.height||e.config.legend.position!=="top"&&e.config.legend.position!=="bottom"||(t.style.maxHeight=e.globals.svgHeight/2+"px");var i=Object.assign({},T.getBoundingClientRect(t));return t!==null&&!e.config.legend.floating&&e.config.legend.show?this.dCtx.lgRect={x:i.x,y:i.y,height:i.height,width:i.height===0?0:i.width}:this.dCtx.lgRect={x:0,y:0,height:0,width:0},e.config.legend.position!=="left"&&e.config.legend.position!=="right"||1.5*this.dCtx.lgRect.width>e.globals.svgWidth&&(this.dCtx.lgRect.width=e.globals.svgWidth/1.5),this.dCtx.lgRect}},{key:"getLargestStringFromMultiArr",value:function(e,t){var i=e;if(this.w.globals.isMultiLineX){var a=t.map(function(l,o){return Array.isArray(l)?l.length:1}),r=Math.max.apply(Math,K(a));i=t[a.indexOf(r)]}return i}}]),L}(),Se=function(){function L(e){m(this,L),this.w=e.w,this.dCtx=e}return k(L,[{key:"getxAxisLabelsCoords",value:function(){var e,t=this.w,i=t.globals.labels.slice();if(t.config.xaxis.convertedCatToNumeric&&i.length===0&&(i=t.globals.categoryLabels),t.globals.timescaleLabels.length>0){var a=this.getxAxisTimeScaleLabelsCoords();e={width:a.width,height:a.height},t.globals.rotateXLabels=!1}else{this.dCtx.lgWidthForSideLegends=t.config.legend.position!=="left"&&t.config.legend.position!=="right"||t.config.legend.floating?0:this.dCtx.lgRect.width;var r=t.globals.xLabelFormatter,l=T.getLargestStringFromArr(i),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(l,i);t.globals.isBarHorizontal&&(o=l=t.globals.yAxisScale[0].result.reduce(function(S,A){return S.length>A.length?S:A},0));var h=new Oe(this.dCtx.ctx),d=l;l=h.xLabelFormat(r,l,d,{i:void 0,dateFormatter:new je(this.dCtx.ctx).formatDate,w:t}),o=h.xLabelFormat(r,o,d,{i:void 0,dateFormatter:new je(this.dCtx.ctx).formatDate,w:t}),(t.config.xaxis.convertedCatToNumeric&&l===void 0||String(l).trim()==="")&&(o=l="1");var p=new H(this.dCtx.ctx),x=p.getTextRects(l,t.config.xaxis.labels.style.fontSize),b=x;if(l!==o&&(b=p.getTextRects(o,t.config.xaxis.labels.style.fontSize)),(e={width:x.width>=b.width?x.width:b.width,height:x.height>=b.height?x.height:b.height}).width*i.length>t.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&t.config.xaxis.labels.rotate!==0||t.config.xaxis.labels.rotateAlways){if(!t.globals.isBarHorizontal){t.globals.rotateXLabels=!0;var y=function(S){return p.getTextRects(S,t.config.xaxis.labels.style.fontSize,t.config.xaxis.labels.style.fontFamily,"rotate(".concat(t.config.xaxis.labels.rotate," 0 0)"),!1)};x=y(l),l!==o&&(b=y(o)),e.height=(x.height>b.height?x.height:b.height)/1.5,e.width=x.width>b.width?x.width:b.width}}else t.globals.rotateXLabels=!1}return t.config.xaxis.labels.show||(e={width:0,height:0}),{width:e.width,height:e.height}}},{key:"getxAxisGroupLabelsCoords",value:function(){var e,t=this.w;if(!t.globals.hasGroups)return{width:0,height:0};var i,a=((e=t.config.xaxis.group.style)===null||e===void 0?void 0:e.fontSize)||t.config.xaxis.labels.style.fontSize,r=t.globals.groups.map(function(x){return x.title}),l=T.getLargestStringFromArr(r),o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(l,r),h=new H(this.dCtx.ctx),d=h.getTextRects(l,a),p=d;return l!==o&&(p=h.getTextRects(o,a)),i={width:d.width>=p.width?d.width:p.width,height:d.height>=p.height?d.height:p.height},t.config.xaxis.labels.show||(i={width:0,height:0}),{width:i.width,height:i.height}}},{key:"getxAxisTitleCoords",value:function(){var e=this.w,t=0,i=0;if(e.config.xaxis.title.text!==void 0){var a=new H(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text,e.config.xaxis.title.style.fontSize);t=a.width,i=a.height}return{width:t,height:i}}},{key:"getxAxisTimeScaleLabelsCoords",value:function(){var e,t=this.w;this.dCtx.timescaleLabels=t.globals.timescaleLabels.slice();var i=this.dCtx.timescaleLabels.map(function(r){return r.value}),a=i.reduce(function(r,l){return r===void 0?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"),0):r.length>l.length?r:l},0);return 1.05*(e=new H(this.dCtx.ctx).getTextRects(a,t.config.xaxis.labels.style.fontSize)).width*i.length>t.globals.gridWidth&&t.config.xaxis.labels.rotate!==0&&(t.globals.overlappingXLabels=!0),e}},{key:"additionalPaddingXLabels",value:function(e){var t=this,i=this.w,a=i.globals,r=i.config,l=r.xaxis.type,o=e.width;a.skipLastTimelinelabel=!1,a.skipFirstTimelinelabel=!1;var h=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal,d=function(p,x){(function(b){return a.collapsedSeriesIndices.indexOf(b)!==-1})(x)||function(b){if(t.dCtx.timescaleLabels&&t.dCtx.timescaleLabels.length){var y=t.dCtx.timescaleLabels[0],S=t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length-1].position+o/1.75-t.dCtx.yAxisWidthRight,A=y.position-o/1.75+t.dCtx.yAxisWidthLeft,E=i.config.legend.position==="right"&&t.dCtx.lgRect.width>0?t.dCtx.lgRect.width:0;S>a.svgWidth-a.translateX-E&&(a.skipLastTimelinelabel=!0),A<-(b.show&&!b.floating||r.chart.type!=="bar"&&r.chart.type!=="candlestick"&&r.chart.type!=="rangeBar"&&r.chart.type!=="boxPlot"?10:o/1.75)&&(a.skipFirstTimelinelabel=!0)}else l==="datetime"?t.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):l!=="datetime"&&t.dCtx.gridPad.right<o/2-t.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&(i.config.xaxis.tickPlacement!=="between"||i.globals.isBarHorizontal)&&(t.dCtx.xPadRight=o/2+1)}(p)};r.yaxis.forEach(function(p,x){h?(t.dCtx.gridPad.left<o&&(t.dCtx.xPadLeft=o/2+1),t.dCtx.xPadRight=o/2+1):d(p,x)})}}]),L}(),Me=function(){function L(e){m(this,L),this.w=e.w,this.dCtx=e}return k(L,[{key:"getyAxisLabelsCoords",value:function(){var e=this,t=this.w,i=[],a=10,r=new Re(this.dCtx.ctx);return t.config.yaxis.map(function(l,o){var h=t.globals.yAxisScale[o],d=0;if(!r.isYAxisHidden(o)&&l.labels.show&&l.labels.minWidth!==void 0&&(d=l.labels.minWidth),!r.isYAxisHidden(o)&&l.labels.show&&h.result.length){var p=t.globals.yLabelFormatters[o],x=h.niceMin===Number.MIN_VALUE?0:h.niceMin,b=String(x).length>String(h.niceMax).length?x:h.niceMax,y=p(b,{seriesIndex:o,dataPointIndex:-1,w:t}),S=y;if(y!==void 0&&y.length!==0||(y=b),t.globals.isBarHorizontal){a=0;var A=t.globals.labels.slice();y=p(y=T.getLargestStringFromArr(A),{seriesIndex:o,dataPointIndex:-1,w:t}),S=e.dCtx.dimHelpers.getLargestStringFromMultiArr(y,A)}var E=new H(e.dCtx.ctx),_="rotate(".concat(l.labels.rotate," 0 0)"),R=E.getTextRects(y,l.labels.style.fontSize,l.labels.style.fontFamily,_,!1),F=R;y!==S&&(F=E.getTextRects(S,l.labels.style.fontSize,l.labels.style.fontFamily,_,!1)),i.push({width:(d>F.width||d>R.width?d:F.width>R.width?F.width:R.width)+a,height:F.height>R.height?F.height:R.height})}else i.push({width:0,height:0})}),i}},{key:"getyAxisTitleCoords",value:function(){var e=this,t=this.w,i=[];return t.config.yaxis.map(function(a,r){if(a.show&&a.title.text!==void 0){var l=new H(e.dCtx.ctx),o="rotate(".concat(a.title.rotate," 0 0)"),h=l.getTextRects(a.title.text,a.title.style.fontSize,a.title.style.fontFamily,o,!1);i.push({width:h.width,height:h.height})}else i.push({width:0,height:0})}),i}},{key:"getTotalYAxisWidth",value:function(){var e=this.w,t=0,i=0,a=0,r=e.globals.yAxisScale.length>1?10:0,l=new Re(this.dCtx.ctx),o=function(h,d){var p=e.config.yaxis[d].floating,x=0;h.width>0&&!p?(x=h.width+r,function(b){return e.globals.ignoreYAxisIndexes.indexOf(b)>-1}(d)&&(x=x-h.width-r)):x=p||l.isYAxisHidden(d)?0:5,e.config.yaxis[d].opposite?a+=x:i+=x,t+=x};return e.globals.yLabelsCoords.map(function(h,d){o(h,d)}),e.globals.yTitleCoords.map(function(h,d){o(h,d)}),e.globals.isBarHorizontal&&!e.config.yaxis[0].floating&&(t=e.globals.yLabelsCoords[0].width+e.globals.yTitleCoords[0].width+15),this.dCtx.yAxisWidthLeft=i,this.dCtx.yAxisWidthRight=a,t}}]),L}(),ze=function(){function L(e){m(this,L),this.w=e.w,this.dCtx=e}return k(L,[{key:"gridPadForColumnsInNumericAxis",value:function(e){var t=this.w;if(t.globals.noData||t.globals.allSeriesCollapsed)return 0;var i=function(p){return p==="bar"||p==="rangeBar"||p==="candlestick"||p==="boxPlot"},a=t.config.chart.type,r=0,l=i(a)?t.config.series.length:1;if(t.globals.comboBarCount>0&&(l=t.globals.comboBarCount),t.globals.collapsedSeries.forEach(function(p){i(p.type)&&(l-=1)}),t.config.chart.stacked&&(l=1),(i(a)||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&l>0){var o,h,d=Math.abs(t.globals.initialMaxX-t.globals.initialMinX);d<=3&&(d=t.globals.dataPoints),o=d/e,t.globals.minXDiff&&t.globals.minXDiff/o>0&&(h=t.globals.minXDiff/o),h>e/2&&(h/=2),(r=h/l*parseInt(t.config.plotOptions.bar.columnWidth,10)/100)<1&&(r=1),r=r/(l>1?1:1.5)+5,t.globals.barPadForNumericAxis=r}return r}},{key:"gridPadFortitleSubtitle",value:function(){var e=this,t=this.w,i=t.globals,a=this.dCtx.isSparkline||!t.globals.axisCharts?0:10;["title","subtitle"].forEach(function(o){t.config[o].text!==void 0?a+=t.config[o].margin:a+=e.dCtx.isSparkline||!t.globals.axisCharts?0:5}),!t.config.legend.show||t.config.legend.position!=="bottom"||t.config.legend.floating||t.globals.axisCharts||(a+=10);var r=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),l=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");i.gridHeight=i.gridHeight-r.height-l.height-a,i.translateY=i.translateY+r.height+l.height+a}},{key:"setGridXPosForDualYAxis",value:function(e,t){var i=this.w,a=new Re(this.dCtx.ctx);i.config.yaxis.map(function(r,l){i.globals.ignoreYAxisIndexes.indexOf(l)!==-1||r.floating||a.isYAxisHidden(l)||(r.opposite&&(i.globals.translateX=i.globals.translateX-(t[l].width+e[l].width)-parseInt(i.config.yaxis[l].labels.style.fontSize,10)/1.2-12),i.globals.translateX<2&&(i.globals.translateX=2))})}}]),L}(),Xe=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.lgRect={},this.yAxisWidth=0,this.yAxisWidthLeft=0,this.yAxisWidthRight=0,this.xAxisHeight=0,this.isSparkline=this.w.config.chart.sparkline.enabled,this.dimHelpers=new we(this),this.dimYAxis=new Me(this),this.dimXAxis=new Se(this),this.dimGrid=new ze(this),this.lgWidthForSideLegends=0,this.gridPad=this.w.config.grid.padding,this.xPadRight=0,this.xPadLeft=0}return k(L,[{key:"plotCoords",value:function(){var e=this,t=this.w,i=t.globals;this.lgRect=this.dimHelpers.getLegendsRect(),this.isSparkline&&(t.config.markers.discrete.length>0||t.config.markers.size>0)&&Object.entries(this.gridPad).forEach(function(r){var l=q(r,2),o=l[0],h=l[1];e.gridPad[o]=Math.max(h,e.w.globals.markers.largestSize/1.5)}),i.axisCharts?this.setDimensionsForAxisCharts():this.setDimensionsForNonAxisCharts(),this.dimGrid.gridPadFortitleSubtitle(),i.gridHeight=i.gridHeight-this.gridPad.top-this.gridPad.bottom,i.gridWidth=i.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var a=this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);i.gridWidth=i.gridWidth-2*a,i.translateX=i.translateX+this.gridPad.left+this.xPadLeft+(a>0?a+4:0),i.translateY=i.translateY+this.gridPad.top}},{key:"setDimensionsForAxisCharts",value:function(){var e=this,t=this.w,i=t.globals,a=this.dimYAxis.getyAxisLabelsCoords(),r=this.dimYAxis.getyAxisTitleCoords();t.globals.yLabelsCoords=[],t.globals.yTitleCoords=[],t.config.yaxis.map(function(y,S){t.globals.yLabelsCoords.push({width:a[S].width,index:S}),t.globals.yTitleCoords.push({width:r[S].width,index:S})}),this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var l=this.dimXAxis.getxAxisLabelsCoords(),o=this.dimXAxis.getxAxisGroupLabelsCoords(),h=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(l,h,o),i.translateXAxisY=t.globals.rotateXLabels?this.xAxisHeight/8:-4,i.translateXAxisX=t.globals.rotateXLabels&&t.globals.isXNumeric&&t.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0,t.globals.isBarHorizontal&&(i.rotateXLabels=!1,i.translateXAxisY=parseInt(t.config.xaxis.labels.style.fontSize,10)/1.5*-1),i.translateXAxisY=i.translateXAxisY+t.config.xaxis.labels.offsetY,i.translateXAxisX=i.translateXAxisX+t.config.xaxis.labels.offsetX;var d=this.yAxisWidth,p=this.xAxisHeight;i.xAxisLabelsHeight=this.xAxisHeight-h.height,i.xAxisGroupLabelsHeight=i.xAxisLabelsHeight-l.height,i.xAxisLabelsWidth=this.xAxisWidth,i.xAxisHeight=this.xAxisHeight;var x=10;(t.config.chart.type==="radar"||this.isSparkline)&&(d=0,p=i.goldenPadding),this.isSparkline&&(this.lgRect={height:0,width:0}),(this.isSparkline||t.config.chart.type==="treemap")&&(d=0,p=0,x=0),this.isSparkline||this.dimXAxis.additionalPaddingXLabels(l);var b=function(){i.translateX=d,i.gridHeight=i.svgHeight-e.lgRect.height-p-(e.isSparkline||t.config.chart.type==="treemap"?0:t.globals.rotateXLabels?10:15),i.gridWidth=i.svgWidth-d};switch(t.config.xaxis.position==="top"&&(x=i.xAxisHeight-t.config.xaxis.axisTicks.height-5),t.config.legend.position){case"bottom":i.translateY=x,b();break;case"top":i.translateY=this.lgRect.height+x,b();break;case"left":i.translateY=x,i.translateX=this.lgRect.width+d,i.gridHeight=i.svgHeight-p-12,i.gridWidth=i.svgWidth-this.lgRect.width-d;break;case"right":i.translateY=x,i.translateX=d,i.gridHeight=i.svgHeight-p-12,i.gridWidth=i.svgWidth-this.lgRect.width-d-5;break;default:throw new Error("Legend position not supported")}this.dimGrid.setGridXPosForDualYAxis(r,a),new ae(this.ctx).setYAxisXPosition(a,r)}},{key:"setDimensionsForNonAxisCharts",value:function(){var e=this.w,t=e.globals,i=e.config,a=0;e.config.legend.show&&!e.config.legend.floating&&(a=20);var r=i.chart.type==="pie"||i.chart.type==="polarArea"||i.chart.type==="donut"?"pie":"radialBar",l=i.plotOptions[r].offsetY,o=i.plotOptions[r].offsetX;if(!i.legend.show||i.legend.floating)return t.gridHeight=t.svgHeight-i.grid.padding.left+i.grid.padding.right,t.gridWidth=t.gridHeight,t.translateY=l,void(t.translateX=o+(t.svgWidth-t.gridWidth)/2);switch(i.legend.position){case"bottom":t.gridHeight=t.svgHeight-this.lgRect.height-t.goldenPadding,t.gridWidth=t.svgWidth,t.translateY=l-10,t.translateX=o+(t.svgWidth-t.gridWidth)/2;break;case"top":t.gridHeight=t.svgHeight-this.lgRect.height-t.goldenPadding,t.gridWidth=t.svgWidth,t.translateY=this.lgRect.height+l+10,t.translateX=o+(t.svgWidth-t.gridWidth)/2;break;case"left":t.gridWidth=t.svgWidth-this.lgRect.width-a,t.gridHeight=i.chart.height!=="auto"?t.svgHeight:t.gridWidth,t.translateY=l,t.translateX=o+this.lgRect.width+a;break;case"right":t.gridWidth=t.svgWidth-this.lgRect.width-a-5,t.gridHeight=i.chart.height!=="auto"?t.svgHeight:t.gridWidth,t.translateY=l,t.translateX=o+10;break;default:throw new Error("Legend position not supported")}}},{key:"conditionalChecksForAxisCoords",value:function(e,t,i){var a=this.w,r=a.globals.hasGroups?2:1,l=i.height+e.height+t.height,o=a.globals.isMultiLineX?1.2:a.globals.LINE_HEIGHT_RATIO,h=a.globals.rotateXLabels?22:10,d=a.globals.rotateXLabels&&a.config.legend.position==="bottom"?10:0;this.xAxisHeight=l*o+r*h+d,this.xAxisWidth=e.width,this.xAxisHeight-t.height>a.config.xaxis.labels.maxHeight&&(this.xAxisHeight=a.config.xaxis.labels.maxHeight),a.config.xaxis.labels.minHeight&&this.xAxisHeight<a.config.xaxis.labels.minHeight&&(this.xAxisHeight=a.config.xaxis.labels.minHeight),a.config.xaxis.floating&&(this.xAxisHeight=0);var p=0,x=0;a.config.yaxis.forEach(function(b){p+=b.labels.minWidth,x+=b.labels.maxWidth}),this.yAxisWidth<p&&(this.yAxisWidth=p),this.yAxisWidth>x&&(this.yAxisWidth=x)}}]),L}(),Ge=function(){function L(e){m(this,L),this.w=e.w,this.lgCtx=e}return k(L,[{key:"getLegendStyles",value:function(){var e=document.createElement("style");e.setAttribute("type","text/css");var t=document.createTextNode(`	
    	
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
      }`);return e.appendChild(t),e}},{key:"getLegendBBox",value:function(){var e=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),t=e.width;return{clwh:e.height,clww:t}}},{key:"appendToForeignObject",value:function(){var e=this.w.globals;e.dom.elLegendForeign=document.createElementNS(e.SVGNS,"foreignObject");var t=e.dom.elLegendForeign;t.setAttribute("x",0),t.setAttribute("y",0),t.setAttribute("width",e.svgWidth),t.setAttribute("height",e.svgHeight),e.dom.elLegendWrap.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),t.appendChild(e.dom.elLegendWrap),t.appendChild(this.getLegendStyles()),e.dom.Paper.node.insertBefore(t,e.dom.elGraphical.node)}},{key:"toggleDataSeries",value:function(e,t){var i=this,a=this.w;if(a.globals.axisCharts||a.config.chart.type==="radialBar"){a.globals.resized=!0;var r=null,l=null;a.globals.risingSeries=[],a.globals.axisCharts?(r=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e,"']")),l=parseInt(r.getAttribute("data:realIndex"),10)):(r=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e+1,"']")),l=parseInt(r.getAttribute("rel"),10)-1),t?[{cs:a.globals.collapsedSeries,csi:a.globals.collapsedSeriesIndices},{cs:a.globals.ancillaryCollapsedSeries,csi:a.globals.ancillaryCollapsedSeriesIndices}].forEach(function(p){i.riseCollapsedSeries(p.cs,p.csi,l)}):this.hideSeries({seriesEl:r,realIndex:l})}else{var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(e+1,"'] path")),h=a.config.chart.type;if(h==="pie"||h==="polarArea"||h==="donut"){var d=a.config.plotOptions.pie.donut.labels;new H(this.lgCtx.ctx).pathMouseDown(o.members[0],null),this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node,d)}o.fire("click")}}},{key:"hideSeries",value:function(e){var t=e.seriesEl,i=e.realIndex,a=this.w,r=T.clone(a.config.series);if(a.globals.axisCharts){var l=!1;if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(l=!0,a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push({index:i,data:r[i].data.slice(),type:t.parentNode.className.baseVal.split("-")[1]}),a.globals.ancillaryCollapsedSeriesIndices.push(i))),!l){a.globals.collapsedSeries.push({index:i,data:r[i].data.slice(),type:t.parentNode.className.baseVal.split("-")[1]}),a.globals.collapsedSeriesIndices.push(i);var o=a.globals.risingSeries.indexOf(i);a.globals.risingSeries.splice(o,1)}}else a.globals.collapsedSeries.push({index:i,data:r[i]}),a.globals.collapsedSeriesIndices.push(i);for(var h=t.childNodes,d=0;d<h.length;d++)h[d].classList.contains("apexcharts-series-markers-wrap")&&(h[d].classList.contains("apexcharts-hide")?h[d].classList.remove("apexcharts-hide"):h[d].classList.add("apexcharts-hide"));a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length,r=this._getSeriesBasedOnCollapsedState(r),this.lgCtx.ctx.updateHelpers._updateSeries(r,a.config.chart.animations.dynamicAnimation.enabled)}},{key:"riseCollapsedSeries",value:function(e,t,i){var a=this.w,r=T.clone(a.config.series);if(e.length>0){for(var l=0;l<e.length;l++)e[l].index===i&&(a.globals.axisCharts?(r[i].data=e[l].data.slice(),e.splice(l,1),t.splice(l,1),a.globals.risingSeries.push(i)):(r[i]=e[l].data,e.splice(l,1),t.splice(l,1),a.globals.risingSeries.push(i)));r=this._getSeriesBasedOnCollapsedState(r),this.lgCtx.ctx.updateHelpers._updateSeries(r,a.config.chart.animations.dynamicAnimation.enabled)}}},{key:"_getSeriesBasedOnCollapsedState",value:function(e){var t=this.w;return t.globals.axisCharts?e.forEach(function(i,a){t.globals.collapsedSeriesIndices.indexOf(a)>-1&&(e[a].data=[])}):e.forEach(function(i,a){t.globals.collapsedSeriesIndices.indexOf(a)>-1&&(e[a]=0)}),e}}]),L}(),qe=function(){function L(e,t){m(this,L),this.ctx=e,this.w=e.w,this.onLegendClick=this.onLegendClick.bind(this),this.onLegendHovered=this.onLegendHovered.bind(this),this.isBarsDistributed=this.w.config.chart.type==="bar"&&this.w.config.plotOptions.bar.distributed&&this.w.config.series.length===1,this.legendHelpers=new Ge(this)}return k(L,[{key:"init",value:function(){var e=this.w,t=e.globals,i=e.config;if((i.legend.showForSingleSeries&&t.series.length===1||this.isBarsDistributed||t.series.length>1||!t.axisCharts)&&i.legend.show){for(;t.dom.elLegendWrap.firstChild;)t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);this.drawLegends(),T.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()):this.legendHelpers.appendToForeignObject(),i.legend.position==="bottom"||i.legend.position==="top"?this.legendAlignHorizontal():i.legend.position!=="right"&&i.legend.position!=="left"||this.legendAlignVertical()}}},{key:"drawLegends",value:function(){var e=this,t=this.w,i=t.config.legend.fontFamily,a=t.globals.seriesNames,r=t.globals.colors.slice();if(t.config.chart.type==="heatmap"){var l=t.config.plotOptions.heatmap.colorScale.ranges;a=l.map(function(te){return te.name?te.name:te.from+" - "+te.to}),r=l.map(function(te){return te.color})}else this.isBarsDistributed&&(a=t.globals.labels.slice());t.config.legend.customLegendItems.length&&(a=t.config.legend.customLegendItems);for(var o=t.globals.legendFormatter,h=t.config.legend.inverseOrder,d=h?a.length-1:0;h?d>=0:d<=a.length-1;h?d--:d++){var p=o(a[d],{seriesIndex:d,w:t}),x=!1,b=!1;if(t.globals.collapsedSeries.length>0)for(var y=0;y<t.globals.collapsedSeries.length;y++)t.globals.collapsedSeries[y].index===d&&(x=!0);if(t.globals.ancillaryCollapsedSeriesIndices.length>0)for(var S=0;S<t.globals.ancillaryCollapsedSeriesIndices.length;S++)t.globals.ancillaryCollapsedSeriesIndices[S]===d&&(b=!0);var A=document.createElement("span");A.classList.add("apexcharts-legend-marker");var E=t.config.legend.markers.offsetX,_=t.config.legend.markers.offsetY,R=t.config.legend.markers.height,F=t.config.legend.markers.width,f=t.config.legend.markers.strokeWidth,v=t.config.legend.markers.strokeColor,C=t.config.legend.markers.radius,M=A.style;M.background=r[d],M.color=r[d],M.setProperty("background",r[d],"important"),t.config.legend.markers.fillColors&&t.config.legend.markers.fillColors[d]&&(M.background=t.config.legend.markers.fillColors[d]),t.globals.seriesColors[d]!==void 0&&(M.background=t.globals.seriesColors[d],M.color=t.globals.seriesColors[d]),M.height=Array.isArray(R)?parseFloat(R[d])+"px":parseFloat(R)+"px",M.width=Array.isArray(F)?parseFloat(F[d])+"px":parseFloat(F)+"px",M.left=(Array.isArray(E)?parseFloat(E[d]):parseFloat(E))+"px",M.top=(Array.isArray(_)?parseFloat(_[d]):parseFloat(_))+"px",M.borderWidth=Array.isArray(f)?f[d]:f,M.borderColor=Array.isArray(v)?v[d]:v,M.borderRadius=Array.isArray(C)?parseFloat(C[d])+"px":parseFloat(C)+"px",t.config.legend.markers.customHTML&&(Array.isArray(t.config.legend.markers.customHTML)?t.config.legend.markers.customHTML[d]&&(A.innerHTML=t.config.legend.markers.customHTML[d]()):A.innerHTML=t.config.legend.markers.customHTML()),H.setAttrs(A,{rel:d+1,"data:collapsed":x||b}),(x||b)&&A.classList.add("apexcharts-inactive-legend");var X=document.createElement("div"),G=document.createElement("span");G.classList.add("apexcharts-legend-text"),G.innerHTML=Array.isArray(p)?p.join(" "):p;var Y=t.config.legend.labels.useSeriesColors?t.globals.colors[d]:t.config.legend.labels.colors;Y||(Y=t.config.chart.foreColor),G.style.color=Y,G.style.fontSize=parseFloat(t.config.legend.fontSize)+"px",G.style.fontWeight=t.config.legend.fontWeight,G.style.fontFamily=i||t.config.chart.fontFamily,H.setAttrs(G,{rel:d+1,i:d,"data:default-text":encodeURIComponent(p),"data:collapsed":x||b}),X.appendChild(A),X.appendChild(G);var re=new ce(this.ctx);t.config.legend.showForZeroSeries||re.getSeriesTotalByIndex(d)===0&&re.seriesHaveSameValues(d)&&!re.isSeriesNull(d)&&t.globals.collapsedSeriesIndices.indexOf(d)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(d)===-1&&X.classList.add("apexcharts-hidden-zero-series"),t.config.legend.showForNullSeries||re.isSeriesNull(d)&&t.globals.collapsedSeriesIndices.indexOf(d)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(d)===-1&&X.classList.add("apexcharts-hidden-null-series"),t.globals.dom.elLegendWrap.appendChild(X),t.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(t.config.legend.horizontalAlign)),t.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+t.config.legend.position),X.classList.add("apexcharts-legend-series"),X.style.margin="".concat(t.config.legend.itemMargin.vertical,"px ").concat(t.config.legend.itemMargin.horizontal,"px"),t.globals.dom.elLegendWrap.style.width=t.config.legend.width?t.config.legend.width+"px":"",t.globals.dom.elLegendWrap.style.height=t.config.legend.height?t.config.legend.height+"px":"",H.setAttrs(X,{rel:d+1,seriesName:T.escapeString(a[d]),"data:collapsed":x||b}),(x||b)&&X.classList.add("apexcharts-inactive-legend"),t.config.legend.onItemClick.toggleDataSeries||X.classList.add("apexcharts-no-click")}t.globals.dom.elWrap.addEventListener("click",e.onLegendClick,!0),t.config.legend.onItemHover.highlightDataSeries&&t.config.legend.customLegendItems.length===0&&(t.globals.dom.elWrap.addEventListener("mousemove",e.onLegendHovered,!0),t.globals.dom.elWrap.addEventListener("mouseout",e.onLegendHovered,!0))}},{key:"setLegendWrapXY",value:function(e,t){var i=this.w,a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"),r=a.getBoundingClientRect(),l=0,o=0;if(i.config.legend.position==="bottom")o+=i.globals.svgHeight-r.height/2;else if(i.config.legend.position==="top"){var h=new Xe(this.ctx),d=h.dimHelpers.getTitleSubtitleCoords("title").height,p=h.dimHelpers.getTitleSubtitleCoords("subtitle").height;o=o+(d>0?d-10:0)+(p>0?p-10:0)}a.style.position="absolute",l=l+e+i.config.legend.offsetX,o=o+t+i.config.legend.offsetY,a.style.left=l+"px",a.style.top=o+"px",i.config.legend.position==="bottom"?(a.style.top="auto",a.style.bottom=5-i.config.legend.offsetY+"px"):i.config.legend.position==="right"&&(a.style.left="auto",a.style.right=25+i.config.legend.offsetX+"px"),["width","height"].forEach(function(x){a.style[x]&&(a.style[x]=parseInt(i.config.legend[x],10)+"px")})}},{key:"legendAlignHorizontal",value:function(){var e=this.w;e.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;var t=this.legendHelpers.getLegendBBox(),i=new Xe(this.ctx),a=i.dimHelpers.getTitleSubtitleCoords("title"),r=i.dimHelpers.getTitleSubtitleCoords("subtitle"),l=0;e.config.legend.position==="bottom"?l=-t.clwh/1.8:e.config.legend.position==="top"&&(l=a.height+r.height+e.config.title.margin+e.config.subtitle.margin-10),this.setLegendWrapXY(20,l)}},{key:"legendAlignVertical",value:function(){var e=this.w,t=this.legendHelpers.getLegendBBox(),i=0;e.config.legend.position==="left"&&(i=20),e.config.legend.position==="right"&&(i=e.globals.svgWidth-t.clww-10),this.setLegendWrapXY(i,20)}},{key:"onLegendHovered",value:function(e){var t=this.w,i=e.target.classList.contains("apexcharts-legend-text")||e.target.classList.contains("apexcharts-legend-marker");if(t.config.chart.type==="heatmap"||this.isBarsDistributed){if(i){var a=parseInt(e.target.getAttribute("rel"),10)-1;this.ctx.events.fireEvent("legendHover",[this.ctx,a,this.w]),new $e(this.ctx).highlightRangeInSeries(e,e.target)}}else!e.target.classList.contains("apexcharts-inactive-legend")&&i&&new $e(this.ctx).toggleSeriesOnHover(e,e.target)}},{key:"onLegendClick",value:function(e){var t=this.w;if(!t.config.legend.customLegendItems.length&&(e.target.classList.contains("apexcharts-legend-text")||e.target.classList.contains("apexcharts-legend-marker"))){var i=parseInt(e.target.getAttribute("rel"),10)-1,a=e.target.getAttribute("data:collapsed")==="true",r=this.w.config.chart.events.legendClick;typeof r=="function"&&r(this.ctx,i,this.w),this.ctx.events.fireEvent("legendClick",[this.ctx,i,this.w]);var l=this.w.config.legend.markers.onClick;typeof l=="function"&&e.target.classList.contains("apexcharts-legend-marker")&&(l(this.ctx,i,this.w),this.ctx.events.fireEvent("legendMarkerClick",[this.ctx,i,this.w])),t.config.chart.type!=="treemap"&&t.config.chart.type!=="heatmap"&&!this.isBarsDistributed&&t.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i,a)}}}]),L}(),yt=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.ev=this.w.config.chart.events,this.selectedClass="apexcharts-selected",this.localeValues=this.w.globals.locale.toolbar,this.minX=t.globals.minX,this.maxX=t.globals.maxX}return k(L,[{key:"createToolbar",value:function(){var e=this,t=this.w,i=function(){return document.createElement("div")},a=i();if(a.setAttribute("class","apexcharts-toolbar"),a.style.top=t.config.chart.toolbar.offsetY+"px",a.style.right=3-t.config.chart.toolbar.offsetX+"px",t.globals.dom.elWrap.appendChild(a),this.elZoom=i(),this.elZoomIn=i(),this.elZoomOut=i(),this.elPan=i(),this.elSelection=i(),this.elZoomReset=i(),this.elMenuIcon=i(),this.elMenu=i(),this.elCustomIcons=[],this.t=t.config.chart.toolbar.tools,Array.isArray(this.t.customIcons))for(var r=0;r<this.t.customIcons.length;r++)this.elCustomIcons.push(i());var l=[],o=function(x,b,y){var S=x.toLowerCase();e.t[S]&&t.config.chart.zoom.enabled&&l.push({el:b,icon:typeof e.t[S]=="string"?e.t[S]:y,title:e.localeValues[x],class:"apexcharts-".concat(S,"-icon")})};o("zoomIn",this.elZoomIn,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`),o("zoomOut",this.elZoomOut,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);var h=function(x){e.t[x]&&t.config.chart[x].enabled&&l.push({el:x==="zoom"?e.elZoom:e.elSelection,icon:typeof e.t[x]=="string"?e.t[x]:x==="zoom"?`<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>`:`<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`,title:e.localeValues[x==="zoom"?"selectionZoom":"selection"],class:t.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(x,"-icon")})};h("zoom"),h("selection"),this.t.pan&&t.config.chart.zoom.enabled&&l.push({el:this.elPan,icon:typeof this.t.pan=="string"?this.t.pan:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
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
</svg>`),this.t.download&&l.push({el:this.elMenuIcon,icon:typeof this.t.download=="string"?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',title:this.localeValues.menu,class:"apexcharts-menu-icon"});for(var d=0;d<this.elCustomIcons.length;d++)l.push({el:this.elCustomIcons[d],icon:this.t.customIcons[d].icon,title:this.t.customIcons[d].title,index:this.t.customIcons[d].index,class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[d].class});l.forEach(function(x,b){x.index&&T.moveIndexInArray(l,b,x.index)});for(var p=0;p<l.length;p++)H.setAttrs(l[p].el,{class:l[p].class,title:l[p].title}),l[p].el.innerHTML=l[p].icon,a.appendChild(l[p].el);this._createHamburgerMenu(a),t.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass):t.globals.panEnabled?this.elPan.classList.add(this.selectedClass):t.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass),this.addToolbarEventListeners()}},{key:"_createHamburgerMenu",value:function(e){this.elMenuItems=[],e.appendChild(this.elMenu),H.setAttrs(this.elMenu,{class:"apexcharts-menu"});var t=[{name:"exportSVG",title:this.localeValues.exportToSVG},{name:"exportPNG",title:this.localeValues.exportToPNG},{name:"exportCSV",title:this.localeValues.exportToCSV}];this.w.globals.allSeriesHasEqualX||t.splice(2,1);for(var i=0;i<t.length;i++)this.elMenuItems.push(document.createElement("div")),this.elMenuItems[i].innerHTML=t[i].title,H.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(t[i].name),title:t[i].title}),this.elMenu.appendChild(this.elMenuItems[i])}},{key:"addToolbarEventListeners",value:function(){var e=this;this.elZoomReset.addEventListener("click",this.handleZoomReset.bind(this)),this.elSelection.addEventListener("click",this.toggleZoomSelection.bind(this,"selection")),this.elZoom.addEventListener("click",this.toggleZoomSelection.bind(this,"zoom")),this.elZoomIn.addEventListener("click",this.handleZoomIn.bind(this)),this.elZoomOut.addEventListener("click",this.handleZoomOut.bind(this)),this.elPan.addEventListener("click",this.togglePanning.bind(this)),this.elMenuIcon.addEventListener("click",this.toggleMenu.bind(this)),this.elMenuItems.forEach(function(i){i.classList.contains("exportSVG")?i.addEventListener("click",e.handleDownload.bind(e,"svg")):i.classList.contains("exportPNG")?i.addEventListener("click",e.handleDownload.bind(e,"png")):i.classList.contains("exportCSV")&&i.addEventListener("click",e.handleDownload.bind(e,"csv"))});for(var t=0;t<this.t.customIcons.length;t++)this.elCustomIcons[t].addEventListener("click",this.t.customIcons[t].click.bind(this,this.ctx,this.ctx.w))}},{key:"toggleZoomSelection",value:function(e){this.ctx.getSyncedCharts().forEach(function(t){t.ctx.toolbar.toggleOtherControls();var i=e==="selection"?t.ctx.toolbar.elSelection:t.ctx.toolbar.elZoom,a=e==="selection"?"selectionEnabled":"zoomEnabled";t.w.globals[a]=!t.w.globals[a],i.classList.contains(t.ctx.toolbar.selectedClass)?i.classList.remove(t.ctx.toolbar.selectedClass):i.classList.add(t.ctx.toolbar.selectedClass)})}},{key:"getToolbarIconsReference",value:function(){var e=this.w;this.elZoom||(this.elZoom=e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")),this.elPan||(this.elPan=e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")),this.elSelection||(this.elSelection=e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))}},{key:"enableZoomPanFromToolbar",value:function(e){this.toggleOtherControls(),e==="pan"?this.w.globals.panEnabled=!0:this.w.globals.zoomEnabled=!0;var t=e==="pan"?this.elPan:this.elZoom,i=e==="pan"?this.elZoom:this.elPan;t&&t.classList.add(this.selectedClass),i&&i.classList.remove(this.selectedClass)}},{key:"togglePanning",value:function(){this.ctx.getSyncedCharts().forEach(function(e){e.ctx.toolbar.toggleOtherControls(),e.w.globals.panEnabled=!e.w.globals.panEnabled,e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass)?e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass):e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass)})}},{key:"toggleOtherControls",value:function(){var e=this,t=this.w;t.globals.panEnabled=!1,t.globals.zoomEnabled=!1,t.globals.selectionEnabled=!1,this.getToolbarIconsReference(),[this.elPan,this.elSelection,this.elZoom].forEach(function(i){i&&i.classList.remove(e.selectedClass)})}},{key:"handleZoomIn",value:function(){var e=this.w;e.globals.isRangeBar&&(this.minX=e.globals.minY,this.maxX=e.globals.maxY);var t=(this.minX+this.maxX)/2,i=(this.minX+t)/2,a=(this.maxX+t)/2,r=this._getNewMinXMaxX(i,a);e.globals.disableZoomIn||this.zoomUpdateOptions(r.minX,r.maxX)}},{key:"handleZoomOut",value:function(){var e=this.w;if(e.globals.isRangeBar&&(this.minX=e.globals.minY,this.maxX=e.globals.maxY),!(e.config.xaxis.type==="datetime"&&new Date(this.minX).getUTCFullYear()<1e3)){var t=(this.minX+this.maxX)/2,i=this.minX-(t-this.minX),a=this.maxX-(t-this.maxX),r=this._getNewMinXMaxX(i,a);e.globals.disableZoomOut||this.zoomUpdateOptions(r.minX,r.maxX)}}},{key:"_getNewMinXMaxX",value:function(e,t){var i=this.w.config.xaxis.convertedCatToNumeric;return{minX:i?Math.floor(e):e,maxX:i?Math.floor(t):t}}},{key:"zoomUpdateOptions",value:function(e,t){var i=this.w;if(e!==void 0||t!==void 0){if(!(i.config.xaxis.convertedCatToNumeric&&(e<1&&(e=1,t=i.globals.dataPoints),t-e<2))){var a={min:e,max:t},r=this.getBeforeZoomRange(a);r&&(a=r.xaxis);var l={xaxis:a},o=T.clone(i.globals.initialConfig.yaxis);i.config.chart.zoom.autoScaleYaxis&&(o=new B(this.ctx).autoScaleY(this.ctx,o,{xaxis:a})),i.config.chart.group||(l.yaxis=o),this.w.globals.zoomed=!0,this.ctx.updateHelpers._updateOptions(l,!1,this.w.config.chart.animations.dynamicAnimation.enabled),this.zoomCallback(a,o)}}else this.handleZoomReset()}},{key:"zoomCallback",value:function(e,t){typeof this.ev.zoomed=="function"&&this.ev.zoomed(this.ctx,{xaxis:e,yaxis:t})}},{key:"getBeforeZoomRange",value:function(e,t){var i=null;return typeof this.ev.beforeZoom=="function"&&(i=this.ev.beforeZoom(this,{xaxis:e,yaxis:t})),i}},{key:"toggleMenu",value:function(){var e=this;window.setTimeout(function(){e.elMenu.classList.contains("apexcharts-menu-open")?e.elMenu.classList.remove("apexcharts-menu-open"):e.elMenu.classList.add("apexcharts-menu-open")},0)}},{key:"handleDownload",value:function(e){var t=this.w,i=new Pe(this.ctx);switch(e){case"svg":i.exportToSVG(this.ctx);break;case"png":i.exportToPng(this.ctx);break;case"csv":i.exportToCSV({series:t.config.series,columnDelimiter:t.config.chart.toolbar.export.csv.columnDelimiter})}}},{key:"handleZoomReset",value:function(e){this.ctx.getSyncedCharts().forEach(function(t){var i=t.w;if(i.globals.lastXAxis.min=void 0,i.globals.lastXAxis.max=void 0,t.updateHelpers.revertDefaultAxisMinMax(),typeof i.config.chart.events.beforeResetZoom=="function"){var a=i.config.chart.events.beforeResetZoom(t,i);a&&t.updateHelpers.revertDefaultAxisMinMax(a)}typeof i.config.chart.events.zoomed=="function"&&t.ctx.toolbar.zoomCallback({min:i.config.xaxis.min,max:i.config.xaxis.max}),i.globals.zoomed=!1;var r=t.ctx.series.emptyCollapsedSeries(T.clone(i.globals.initialSeries));t.updateHelpers._updateSeries(r,i.config.chart.animations.dynamicAnimation.enabled)})}},{key:"destroy",value:function(){this.elZoom=null,this.elZoomIn=null,this.elZoomOut=null,this.elPan=null,this.elSelection=null,this.elZoomReset=null,this.elMenuIcon=null}}]),L}(),hi=function(L){I(t,yt);var e=W(t);function t(i){var a;return m(this,t),(a=e.call(this,i)).ctx=i,a.w=i.w,a.dragged=!1,a.graphics=new H(a.ctx),a.eventList=["mousedown","mouseleave","mousemove","touchstart","touchmove","mouseup","touchend"],a.clientX=0,a.clientY=0,a.startX=0,a.endX=0,a.dragX=0,a.startY=0,a.endY=0,a.dragY=0,a.moveDirection="none",a}return k(t,[{key:"init",value:function(i){var a=this,r=i.xyRatios,l=this.w,o=this;this.xyRatios=r,this.zoomRect=this.graphics.drawRect(0,0,0,0),this.selectionRect=this.graphics.drawRect(0,0,0,0),this.gridRect=l.globals.dom.baseEl.querySelector(".apexcharts-grid"),this.zoomRect.node.classList.add("apexcharts-zoom-rect"),this.selectionRect.node.classList.add("apexcharts-selection-rect"),l.globals.dom.elGraphical.add(this.zoomRect),l.globals.dom.elGraphical.add(this.selectionRect),l.config.chart.selection.type==="x"?this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:l.globals.gridWidth,maxY:l.globals.gridHeight}).on("dragmove",this.selectionDragging.bind(this,"dragging")):l.config.chart.selection.type==="y"?this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:l.globals.gridWidth}).on("dragmove",this.selectionDragging.bind(this,"dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove",this.selectionDragging.bind(this,"dragging")),this.preselectedSelection(),this.hoverArea=l.globals.dom.baseEl.querySelector("".concat(l.globals.chartClass," .apexcharts-svg")),this.hoverArea.classList.add("apexcharts-zoomable"),this.eventList.forEach(function(h){a.hoverArea.addEventListener(h,o.svgMouseEvents.bind(o,r),{capture:!1,passive:!0})})}},{key:"destroy",value:function(){this.slDraggableRect&&(this.slDraggableRect.draggable(!1),this.slDraggableRect.off(),this.selectionRect.off()),this.selectionRect=null,this.zoomRect=null,this.gridRect=null}},{key:"svgMouseEvents",value:function(i,a){var r=this.w,l=this,o=this.ctx.toolbar,h=r.globals.zoomEnabled?r.config.chart.zoom.type:r.config.chart.selection.type,d=r.config.chart.toolbar.autoSelected;if(a.shiftKey?(this.shiftWasPressed=!0,o.enableZoomPanFromToolbar(d==="pan"?"zoom":"pan")):this.shiftWasPressed&&(o.enableZoomPanFromToolbar(d),this.shiftWasPressed=!1),a.target){var p,x=a.target.classList;if(a.target.parentNode&&a.target.parentNode!==null&&(p=a.target.parentNode.classList),!(x.contains("apexcharts-selection-rect")||x.contains("apexcharts-legend-marker")||x.contains("apexcharts-legend-text")||p&&p.contains("apexcharts-toolbar"))){if(l.clientX=a.type==="touchmove"||a.type==="touchstart"?a.touches[0].clientX:a.type==="touchend"?a.changedTouches[0].clientX:a.clientX,l.clientY=a.type==="touchmove"||a.type==="touchstart"?a.touches[0].clientY:a.type==="touchend"?a.changedTouches[0].clientY:a.clientY,a.type==="mousedown"&&a.which===1){var b=l.gridRect.getBoundingClientRect();l.startX=l.clientX-b.left,l.startY=l.clientY-b.top,l.dragged=!1,l.w.globals.mousedown=!0}if((a.type==="mousemove"&&a.which===1||a.type==="touchmove")&&(l.dragged=!0,r.globals.panEnabled?(r.globals.selection=null,l.w.globals.mousedown&&l.panDragging({context:l,zoomtype:h,xyRatios:i})):(l.w.globals.mousedown&&r.globals.zoomEnabled||l.w.globals.mousedown&&r.globals.selectionEnabled)&&(l.selection=l.selectionDrawing({context:l,zoomtype:h}))),a.type==="mouseup"||a.type==="touchend"||a.type==="mouseleave"){var y=l.gridRect.getBoundingClientRect();l.w.globals.mousedown&&(l.endX=l.clientX-y.left,l.endY=l.clientY-y.top,l.dragX=Math.abs(l.endX-l.startX),l.dragY=Math.abs(l.endY-l.startY),(r.globals.zoomEnabled||r.globals.selectionEnabled)&&l.selectionDrawn({context:l,zoomtype:h}),r.globals.panEnabled&&r.config.xaxis.convertedCatToNumeric&&l.delayedPanScrolled()),r.globals.zoomEnabled&&l.hideSelectionRect(this.selectionRect),l.dragged=!1,l.w.globals.mousedown=!1}this.makeSelectionRectDraggable()}}}},{key:"makeSelectionRectDraggable",value:function(){var i=this.w;if(this.selectionRect){var a=this.selectionRect.node.getBoundingClientRect();a.width>0&&a.height>0&&this.slDraggableRect.selectize({points:"l, r",pointSize:8,pointType:"rect"}).resize({constraint:{minX:0,minY:0,maxX:i.globals.gridWidth,maxY:i.globals.gridHeight}}).on("resizing",this.selectionDragging.bind(this,"resizing"))}}},{key:"preselectedSelection",value:function(){var i=this.w,a=this.xyRatios;if(!i.globals.zoomEnabled){if(i.globals.selection!==void 0&&i.globals.selection!==null)this.drawSelectionRect(i.globals.selection);else if(i.config.chart.selection.xaxis.min!==void 0&&i.config.chart.selection.xaxis.max!==void 0){var r=(i.config.chart.selection.xaxis.min-i.globals.minX)/a.xRatio,l={x:r,y:0,width:i.globals.gridWidth-(i.globals.maxX-i.config.chart.selection.xaxis.max)/a.xRatio-r,height:i.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:!0};this.drawSelectionRect(l),this.makeSelectionRectDraggable(),typeof i.config.chart.events.selection=="function"&&i.config.chart.events.selection(this.ctx,{xaxis:{min:i.config.chart.selection.xaxis.min,max:i.config.chart.selection.xaxis.max},yaxis:{}})}}}},{key:"drawSelectionRect",value:function(i){var a=i.x,r=i.y,l=i.width,o=i.height,h=i.translateX,d=h===void 0?0:h,p=i.translateY,x=p===void 0?0:p,b=this.w,y=this.zoomRect,S=this.selectionRect;if(this.dragged||b.globals.selection!==null){var A={transform:"translate("+d+", "+x+")"};b.globals.zoomEnabled&&this.dragged&&(l<0&&(l=1),y.attr({x:a,y:r,width:l,height:o,fill:b.config.chart.zoom.zoomedArea.fill.color,"fill-opacity":b.config.chart.zoom.zoomedArea.fill.opacity,stroke:b.config.chart.zoom.zoomedArea.stroke.color,"stroke-width":b.config.chart.zoom.zoomedArea.stroke.width,"stroke-opacity":b.config.chart.zoom.zoomedArea.stroke.opacity}),H.setAttrs(y.node,A)),b.globals.selectionEnabled&&(S.attr({x:a,y:r,width:l>0?l:0,height:o>0?o:0,fill:b.config.chart.selection.fill.color,"fill-opacity":b.config.chart.selection.fill.opacity,stroke:b.config.chart.selection.stroke.color,"stroke-width":b.config.chart.selection.stroke.width,"stroke-dasharray":b.config.chart.selection.stroke.dashArray,"stroke-opacity":b.config.chart.selection.stroke.opacity}),H.setAttrs(S.node,A))}}},{key:"hideSelectionRect",value:function(i){i&&i.attr({x:0,y:0,width:0,height:0})}},{key:"selectionDrawing",value:function(i){var a=i.context,r=i.zoomtype,l=this.w,o=a,h=this.gridRect.getBoundingClientRect(),d=o.startX-1,p=o.startY,x=!1,b=!1,y=o.clientX-h.left-d,S=o.clientY-h.top-p,A={};return Math.abs(y+d)>l.globals.gridWidth?y=l.globals.gridWidth-d:o.clientX-h.left<0&&(y=d),d>o.clientX-h.left&&(x=!0,y=Math.abs(y)),p>o.clientY-h.top&&(b=!0,S=Math.abs(S)),A=r==="x"?{x:x?d-y:d,y:0,width:y,height:l.globals.gridHeight}:r==="y"?{x:0,y:b?p-S:p,width:l.globals.gridWidth,height:S}:{x:x?d-y:d,y:b?p-S:p,width:y,height:S},o.drawSelectionRect(A),o.selectionDragging("resizing"),A}},{key:"selectionDragging",value:function(i,a){var r=this,l=this.w,o=this.xyRatios,h=this.selectionRect,d=0;i==="resizing"&&(d=30);var p=function(b){return parseFloat(h.node.getAttribute(b))},x={x:p("x"),y:p("y"),width:p("width"),height:p("height")};l.globals.selection=x,typeof l.config.chart.events.selection=="function"&&l.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer),this.w.globals.selectionResizeTimer=window.setTimeout(function(){var b=r.gridRect.getBoundingClientRect(),y=h.node.getBoundingClientRect(),S={xaxis:{min:l.globals.xAxisScale.niceMin+(y.left-b.left)*o.xRatio,max:l.globals.xAxisScale.niceMin+(y.right-b.left)*o.xRatio},yaxis:{min:l.globals.yAxisScale[0].niceMin+(b.bottom-y.bottom)*o.yRatio[0],max:l.globals.yAxisScale[0].niceMax-(y.top-b.top)*o.yRatio[0]}};l.config.chart.events.selection(r.ctx,S),l.config.chart.brush.enabled&&l.config.chart.events.brushScrolled!==void 0&&l.config.chart.events.brushScrolled(r.ctx,S)},d))}},{key:"selectionDrawn",value:function(i){var a=i.context,r=i.zoomtype,l=this.w,o=a,h=this.xyRatios,d=this.ctx.toolbar;if(o.startX>o.endX){var p=o.startX;o.startX=o.endX,o.endX=p}if(o.startY>o.endY){var x=o.startY;o.startY=o.endY,o.endY=x}var b=void 0,y=void 0;l.globals.isRangeBar?(b=l.globals.yAxisScale[0].niceMin+o.startX*h.invertedYRatio,y=l.globals.yAxisScale[0].niceMin+o.endX*h.invertedYRatio):(b=l.globals.xAxisScale.niceMin+o.startX*h.xRatio,y=l.globals.xAxisScale.niceMin+o.endX*h.xRatio);var S=[],A=[];if(l.config.yaxis.forEach(function(M,X){S.push(l.globals.yAxisScale[X].niceMax-h.yRatio[X]*o.startY),A.push(l.globals.yAxisScale[X].niceMax-h.yRatio[X]*o.endY)}),o.dragged&&(o.dragX>10||o.dragY>10)&&b!==y){if(l.globals.zoomEnabled){var E=T.clone(l.globals.initialConfig.yaxis),_=T.clone(l.globals.initialConfig.xaxis);if(l.globals.zoomed=!0,l.config.xaxis.convertedCatToNumeric&&(b=Math.floor(b),y=Math.floor(y),b<1&&(b=1,y=l.globals.dataPoints),y-b<2&&(y=b+1)),r!=="xy"&&r!=="x"||(_={min:b,max:y}),r!=="xy"&&r!=="y"||E.forEach(function(M,X){E[X].min=A[X],E[X].max=S[X]}),l.config.chart.zoom.autoScaleYaxis){var R=new B(o.ctx);E=R.autoScaleY(o.ctx,E,{xaxis:_})}if(d){var F=d.getBeforeZoomRange(_,E);F&&(_=F.xaxis?F.xaxis:_,E=F.yaxis?F.yaxis:E)}var f={xaxis:_};l.config.chart.group||(f.yaxis=E),o.ctx.updateHelpers._updateOptions(f,!1,o.w.config.chart.animations.dynamicAnimation.enabled),typeof l.config.chart.events.zoomed=="function"&&d.zoomCallback(_,E)}else if(l.globals.selectionEnabled){var v,C=null;v={min:b,max:y},r!=="xy"&&r!=="y"||(C=T.clone(l.config.yaxis)).forEach(function(M,X){C[X].min=A[X],C[X].max=S[X]}),l.globals.selection=o.selection,typeof l.config.chart.events.selection=="function"&&l.config.chart.events.selection(o.ctx,{xaxis:v,yaxis:C})}}}},{key:"panDragging",value:function(i){var a=i.context,r=this.w,l=a;if(r.globals.lastClientPosition.x!==void 0){var o=r.globals.lastClientPosition.x-l.clientX,h=r.globals.lastClientPosition.y-l.clientY;Math.abs(o)>Math.abs(h)&&o>0?this.moveDirection="left":Math.abs(o)>Math.abs(h)&&o<0?this.moveDirection="right":Math.abs(h)>Math.abs(o)&&h>0?this.moveDirection="up":Math.abs(h)>Math.abs(o)&&h<0&&(this.moveDirection="down")}r.globals.lastClientPosition={x:l.clientX,y:l.clientY};var d=r.globals.isRangeBar?r.globals.minY:r.globals.minX,p=r.globals.isRangeBar?r.globals.maxY:r.globals.maxX;r.config.xaxis.convertedCatToNumeric||l.panScrolled(d,p)}},{key:"delayedPanScrolled",value:function(){var i=this.w,a=i.globals.minX,r=i.globals.maxX,l=(i.globals.maxX-i.globals.minX)/2;this.moveDirection==="left"?(a=i.globals.minX+l,r=i.globals.maxX+l):this.moveDirection==="right"&&(a=i.globals.minX-l,r=i.globals.maxX-l),a=Math.floor(a),r=Math.floor(r),this.updateScrolledChart({xaxis:{min:a,max:r}},a,r)}},{key:"panScrolled",value:function(i,a){var r=this.w,l=this.xyRatios,o=T.clone(r.globals.initialConfig.yaxis),h=l.xRatio,d=r.globals.minX,p=r.globals.maxX;r.globals.isRangeBar&&(h=l.invertedYRatio,d=r.globals.minY,p=r.globals.maxY),this.moveDirection==="left"?(i=d+r.globals.gridWidth/15*h,a=p+r.globals.gridWidth/15*h):this.moveDirection==="right"&&(i=d-r.globals.gridWidth/15*h,a=p-r.globals.gridWidth/15*h),r.globals.isRangeBar||(i<r.globals.initialMinX||a>r.globals.initialMaxX)&&(i=d,a=p);var x={min:i,max:a};r.config.chart.zoom.autoScaleYaxis&&(o=new B(this.ctx).autoScaleY(this.ctx,o,{xaxis:x}));var b={xaxis:{min:i,max:a}};r.config.chart.group||(b.yaxis=o),this.updateScrolledChart(b,i,a)}},{key:"updateScrolledChart",value:function(i,a,r){var l=this.w;this.ctx.updateHelpers._updateOptions(i,!1,!1),typeof l.config.chart.events.scrolled=="function"&&l.config.chart.events.scrolled(this.ctx,{xaxis:{min:a,max:r}})}}]),t}(),Ts=function(){function L(e){m(this,L),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx}return k(L,[{key:"getNearestValues",value:function(e){var t=e.hoverArea,i=e.elGrid,a=e.clientX,r=e.clientY,l=this.w,o=i.getBoundingClientRect(),h=o.width,d=o.height,p=h/(l.globals.dataPoints-1),x=d/l.globals.dataPoints,b=this.hasBars();!l.globals.comboCharts&&!b||l.config.xaxis.convertedCatToNumeric||(p=h/l.globals.dataPoints);var y=a-o.left-l.globals.barPadForNumericAxis,S=r-o.top;y<0||S<0||y>h||S>d?(t.classList.remove("hovering-zoom"),t.classList.remove("hovering-pan")):l.globals.zoomEnabled?(t.classList.remove("hovering-pan"),t.classList.add("hovering-zoom")):l.globals.panEnabled&&(t.classList.remove("hovering-zoom"),t.classList.add("hovering-pan"));var A=Math.round(y/p),E=Math.floor(S/x);b&&!l.config.xaxis.convertedCatToNumeric&&(A=Math.ceil(y/p),A-=1);var _=null,R=null,F=[],f=[];if(l.globals.seriesXvalues.forEach(function(X){F.push([X[0]+1e-6].concat(X))}),l.globals.seriesYvalues.forEach(function(X){f.push([X[0]+1e-6].concat(X))}),F=F.map(function(X){return X.filter(function(G){return T.isNumber(G)})}),f=f.map(function(X){return X.filter(function(G){return T.isNumber(G)})}),l.globals.isXNumeric){var v=this.ttCtx.getElGrid().getBoundingClientRect(),C=y*(v.width/h),M=S*(v.height/d);_=(R=this.closestInMultiArray(C,M,F,f)).index,A=R.j,_!==null&&(F=l.globals.seriesXvalues[_],A=(R=this.closestInArray(C,F)).index)}return l.globals.capturedSeriesIndex=_===null?-1:_,(!A||A<1)&&(A=0),l.globals.isBarHorizontal?l.globals.capturedDataPointIndex=E:l.globals.capturedDataPointIndex=A,{capturedSeries:_,j:l.globals.isBarHorizontal?E:A,hoverX:y,hoverY:S}}},{key:"closestInMultiArray",value:function(e,t,i,a){var r=this.w,l=0,o=null,h=-1;r.globals.series.length>1?l=this.getFirstActiveXArray(i):o=0;var d=i[l][0],p=Math.abs(e-d);if(i.forEach(function(y){y.forEach(function(S,A){var E=Math.abs(e-S);E<p&&(p=E,h=A)})}),h!==-1){var x=a[l][h],b=Math.abs(t-x);o=l,a.forEach(function(y,S){var A=Math.abs(t-y[h]);A<b&&(b=A,o=S)})}return{index:o,j:h}}},{key:"getFirstActiveXArray",value:function(e){for(var t=this.w,i=0,a=e.map(function(l,o){return l.length>0?o:-1}),r=0;r<a.length;r++)if(a[r]!==-1&&t.globals.collapsedSeriesIndices.indexOf(r)===-1&&t.globals.ancillaryCollapsedSeriesIndices.indexOf(r)===-1){i=a[r];break}return i}},{key:"closestInArray",value:function(e,t){for(var i=t[0],a=null,r=Math.abs(e-i),l=0;l<t.length;l++){var o=Math.abs(e-t[l]);o<r&&(r=o,a=l)}return{index:a}}},{key:"isXoverlap",value:function(e){var t=[],i=this.w.globals.seriesX.filter(function(r){return r[0]!==void 0});if(i.length>0)for(var a=0;a<i.length-1;a++)i[a][e]!==void 0&&i[a+1][e]!==void 0&&i[a][e]!==i[a+1][e]&&t.push("unEqual");return t.length===0}},{key:"isInitialSeriesSameLen",value:function(){for(var e=!0,t=this.w.globals.initialSeries,i=0;i<t.length-1;i++)if(t[i].data.length!==t[i+1].data.length){e=!1;break}return e}},{key:"getBarsHeight",value:function(e){return K(e).reduce(function(t,i){return t+i.getBBox().height},0)}},{key:"getElMarkers",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")}},{key:"getAllMarkers",value:function(){var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");(e=K(e)).sort(function(i,a){var r=Number(i.getAttribute("data:realIndex")),l=Number(a.getAttribute("data:realIndex"));return l<r?1:l>r?-1:0});var t=[];return e.forEach(function(i){t.push(i.querySelector(".apexcharts-marker"))}),t}},{key:"hasMarkers",value:function(){return this.getElMarkers().length>0}},{key:"getElBars",value:function(){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")}},{key:"hasBars",value:function(){return this.getElBars().length>0}},{key:"getHoverMarkerSize",value:function(e){var t=this.w,i=t.config.markers.hover.size;return i===void 0&&(i=t.globals.markers.size[e]+t.config.markers.hover.sizeOffset),i}},{key:"toggleAllTooltipSeriesGroups",value:function(e){var t=this.w,i=this.ttCtx;i.allTooltipSeriesGroups.length===0&&(i.allTooltipSeriesGroups=t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));for(var a=i.allTooltipSeriesGroups,r=0;r<a.length;r++)e==="enable"?(a[r].classList.add("apexcharts-active"),a[r].style.display=t.config.tooltip.items.display):(a[r].classList.remove("apexcharts-active"),a[r].style.display="none")}}]),L}(),Oi=function(){function L(e){m(this,L),this.w=e.w,this.ctx=e.ctx,this.ttCtx=e,this.tooltipUtil=new Ts(e)}return k(L,[{key:"drawSeriesTexts",value:function(e){var t=e.shared,i=t===void 0||t,a=e.ttItems,r=e.i,l=r===void 0?0:r,o=e.j,h=o===void 0?null:o,d=e.y1,p=e.y2,x=e.e,b=this.w;b.config.tooltip.custom!==void 0?this.handleCustomTooltip({i:l,j:h,y1:d,y2:p,w:b}):this.toggleActiveInactiveSeries(i);var y=this.getValuesToPrint({i:l,j:h});this.printLabels({i:l,j:h,values:y,ttItems:a,shared:i,e:x});var S=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=S.getBoundingClientRect().width,this.ttCtx.tooltipRect.ttHeight=S.getBoundingClientRect().height}},{key:"printLabels",value:function(e){var t,i=this,a=e.i,r=e.j,l=e.values,o=e.ttItems,h=e.shared,d=e.e,p=this.w,x=[],b=function(v){return p.globals.seriesGoals[v]&&p.globals.seriesGoals[v][r]&&Array.isArray(p.globals.seriesGoals[v][r])},y=l.xVal,S=l.zVal,A=l.xAxisTTVal,E="",_=p.globals.colors[a];r!==null&&p.config.plotOptions.bar.distributed&&(_=p.globals.colors[r]);for(var R=function(v,C){var M=i.getFormatters(a);E=i.getSeriesName({fn:M.yLbTitleFormatter,index:a,seriesIndex:a,j:r}),p.config.chart.type==="treemap"&&(E=M.yLbTitleFormatter(String(p.config.series[a].data[r].x),{series:p.globals.series,seriesIndex:a,dataPointIndex:r,w:p}));var X=p.config.tooltip.inverseOrder?C:v;if(p.globals.axisCharts){var G=function(te){return M.yLbFormatter(p.globals.series[te][r],{series:p.globals.series,seriesIndex:te,dataPointIndex:r,w:p})};if(h)M=i.getFormatters(X),E=i.getSeriesName({fn:M.yLbTitleFormatter,index:X,seriesIndex:a,j:r}),_=p.globals.colors[X],t=G(X),b(X)&&(x=p.globals.seriesGoals[X][r].map(function(te){return{attrs:te,val:M.yLbFormatter(te.value,{seriesIndex:X,dataPointIndex:r,w:p})}}));else{var Y,re=d==null||(Y=d.target)===null||Y===void 0?void 0:Y.getAttribute("fill");re&&(_=re.indexOf("url")!==-1?document.querySelector(re.substr(4).slice(0,-1)).childNodes[0].getAttribute("stroke"):re),t=G(a),b(a)&&Array.isArray(p.globals.seriesGoals[a][r])&&(x=p.globals.seriesGoals[a][r].map(function(te){return{attrs:te,val:M.yLbFormatter(te.value,{seriesIndex:a,dataPointIndex:r,w:p})}}))}}r===null&&(t=M.yLbFormatter(p.globals.series[a],u(u({},p),{},{seriesIndex:a,dataPointIndex:a}))),i.DOMHandling({i:a,t:X,j:r,ttItems:o,values:{val:t,goalVals:x,xVal:y,xAxisTTVal:A,zVal:S},seriesName:E,shared:h,pColor:_})},F=0,f=p.globals.series.length-1;F<p.globals.series.length;F++,f--)R(F,f)}},{key:"getFormatters",value:function(e){var t,i=this.w,a=i.globals.yLabelFormatters[e];return i.globals.ttVal!==void 0?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[e]&&i.globals.ttVal[e].formatter,t=i.globals.ttVal[e]&&i.globals.ttVal[e].title&&i.globals.ttVal[e].title.formatter):(a=i.globals.ttVal.formatter,typeof i.globals.ttVal.title.formatter=="function"&&(t=i.globals.ttVal.title.formatter)):t=i.config.tooltip.y.title.formatter,typeof a!="function"&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(r){return r}),typeof t!="function"&&(t=function(r){return r}),{yLbFormatter:a,yLbTitleFormatter:t}}},{key:"getSeriesName",value:function(e){var t=e.fn,i=e.index,a=e.seriesIndex,r=e.j,l=this.w;return t(String(l.globals.seriesNames[i]),{series:l.globals.series,seriesIndex:a,dataPointIndex:r,w:l})}},{key:"DOMHandling",value:function(e){e.i;var t=e.t,i=e.j,a=e.ttItems,r=e.values,l=e.seriesName,o=e.shared,h=e.pColor,d=this.w,p=this.ttCtx,x=r.val,b=r.goalVals,y=r.xVal,S=r.xAxisTTVal,A=r.zVal,E=null;E=a[t].children,d.config.tooltip.fillSeriesColor&&(a[t].style.backgroundColor=h,E[0].style.display="none"),p.showTooltipTitle&&(p.tooltipTitle===null&&(p.tooltipTitle=d.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")),p.tooltipTitle.innerHTML=y),p.isXAxisTooltipEnabled&&(p.xaxisTooltipText.innerHTML=S!==""?S:y);var _=a[t].querySelector(".apexcharts-tooltip-text-y-label");_&&(_.innerHTML=l||"");var R=a[t].querySelector(".apexcharts-tooltip-text-y-value");R&&(R.innerHTML=x!==void 0?x:""),E[0]&&E[0].classList.contains("apexcharts-tooltip-marker")&&(d.config.tooltip.marker.fillColors&&Array.isArray(d.config.tooltip.marker.fillColors)&&(h=d.config.tooltip.marker.fillColors[t]),E[0].style.backgroundColor=h),d.config.tooltip.marker.show||(E[0].style.display="none");var F=a[t].querySelector(".apexcharts-tooltip-text-goals-label"),f=a[t].querySelector(".apexcharts-tooltip-text-goals-value");if(b.length&&d.globals.seriesGoals[t]){var v=function(){var C="<div >",M="<div>";b.forEach(function(X,G){C+=' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(X.attrs.strokeColor,'; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(X.attrs.name,"</div>"),M+="<div>".concat(X.val,"</div>")}),F.innerHTML=C+"</div>",f.innerHTML=M+"</div>"};o?d.globals.seriesGoals[t][i]&&Array.isArray(d.globals.seriesGoals[t][i])?v():(F.innerHTML="",f.innerHTML=""):v()}else F.innerHTML="",f.innerHTML="";A!==null&&(a[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=d.config.tooltip.z.title,a[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=A!==void 0?A:""),o&&E[0]&&(x==null||d.globals.ancillaryCollapsedSeriesIndices.indexOf(t)>-1||d.globals.collapsedSeriesIndices.indexOf(t)>-1?E[0].parentNode.style.display="none":E[0].parentNode.style.display=d.config.tooltip.items.display)}},{key:"toggleActiveInactiveSeries",value:function(e){var t=this.w;if(e)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");else{this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");var i=t.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");i&&(i.classList.add("apexcharts-active"),i.style.display=t.config.tooltip.items.display)}}},{key:"getValuesToPrint",value:function(e){var t=e.i,i=e.j,a=this.w,r=this.ctx.series.filteredSeriesX(),l="",o="",h=null,d=null,p={series:a.globals.series,seriesIndex:t,dataPointIndex:i,w:a},x=a.globals.ttZFormatter;i===null?d=a.globals.series[t]:a.globals.isXNumeric&&a.config.chart.type!=="treemap"?(l=r[t][i],r[t].length===0&&(l=r[this.tooltipUtil.getFirstActiveXArray(r)][i])):l=a.globals.labels[i]!==void 0?a.globals.labels[i]:"";var b=l;return a.globals.isXNumeric&&a.config.xaxis.type==="datetime"?l=new Oe(this.ctx).xLabelFormat(a.globals.ttKeyFormatter,b,b,{i:void 0,dateFormatter:new je(this.ctx).formatDate,w:this.w}):l=a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](b,p):a.globals.xLabelFormatter(b,p),a.config.tooltip.x.formatter!==void 0&&(l=a.globals.ttKeyFormatter(b,p)),a.globals.seriesZ.length>0&&a.globals.seriesZ[t].length>0&&(h=x(a.globals.seriesZ[t][i],a)),o=typeof a.config.xaxis.tooltip.formatter=="function"?a.globals.xaxisTooltipFormatter(b,p):l,{val:Array.isArray(d)?d.join(" "):d,xVal:Array.isArray(l)?l.join(" "):l,xAxisTTVal:Array.isArray(o)?o.join(" "):o,zVal:h}}},{key:"handleCustomTooltip",value:function(e){var t=e.i,i=e.j,a=e.y1,r=e.y2,l=e.w,o=this.ttCtx.getElTooltip(),h=l.config.tooltip.custom;Array.isArray(h)&&h[t]&&(h=h[t]),o.innerHTML=h({ctx:this.ctx,series:l.globals.series,seriesIndex:t,dataPointIndex:i,y1:a,y2:r,w:l})}}]),L}(),Ls=function(){function L(e){m(this,L),this.ttCtx=e,this.ctx=e.ctx,this.w=e.w}return k(L,[{key:"moveXCrosshairs",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,i=this.ttCtx,a=this.w,r=i.getElXCrosshairs(),l=e-i.xcrosshairsWidth/2,o=a.globals.labels.slice().length;if(t!==null&&(l=a.globals.gridWidth/o*t),r===null||a.globals.isBarHorizontal||(r.setAttribute("x",l),r.setAttribute("x1",l),r.setAttribute("x2",l),r.setAttribute("y2",a.globals.gridHeight),r.classList.add("apexcharts-active")),l<0&&(l=0),l>a.globals.gridWidth&&(l=a.globals.gridWidth),i.isXAxisTooltipEnabled){var h=l;a.config.xaxis.crosshairs.width!=="tickWidth"&&a.config.xaxis.crosshairs.width!=="barWidth"||(h=l+i.xcrosshairsWidth/2),this.moveXAxisTooltip(h)}}},{key:"moveYCrosshairs",value:function(e){var t=this.ttCtx;t.ycrosshairs!==null&&H.setAttrs(t.ycrosshairs,{y1:e,y2:e}),t.ycrosshairsHidden!==null&&H.setAttrs(t.ycrosshairsHidden,{y1:e,y2:e})}},{key:"moveXAxisTooltip",value:function(e){var t=this.w,i=this.ttCtx;if(i.xaxisTooltip!==null&&i.xcrosshairsWidth!==0){i.xaxisTooltip.classList.add("apexcharts-active");var a=i.xaxisOffY+t.config.xaxis.tooltip.offsetY+t.globals.translateY+1+t.config.xaxis.offsetY;if(e-=i.xaxisTooltip.getBoundingClientRect().width/2,!isNaN(e)){e+=t.globals.translateX;var r;r=new H(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML),i.xaxisTooltipText.style.minWidth=r.width+"px",i.xaxisTooltip.style.left=e+"px",i.xaxisTooltip.style.top=a+"px"}}}},{key:"moveYAxisTooltip",value:function(e){var t=this.w,i=this.ttCtx;i.yaxisTTEls===null&&(i.yaxisTTEls=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"),10),r=t.globals.translateY+a,l=i.yaxisTTEls[e].getBoundingClientRect().height,o=t.globals.translateYAxisX[e]-2;t.config.yaxis[e].opposite&&(o-=26),r-=l/2,t.globals.ignoreYAxisIndexes.indexOf(e)===-1?(i.yaxisTTEls[e].classList.add("apexcharts-active"),i.yaxisTTEls[e].style.top=r+"px",i.yaxisTTEls[e].style.left=o+t.config.yaxis[e].tooltip.offsetX+"px"):i.yaxisTTEls[e].classList.remove("apexcharts-active")}},{key:"moveTooltip",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this.w,r=this.ttCtx,l=r.getElTooltip(),o=r.tooltipRect,h=i!==null?parseFloat(i):1,d=parseFloat(e)+h+5,p=parseFloat(t)+h/2;if(d>a.globals.gridWidth/2&&(d=d-o.ttWidth-h-10),d>a.globals.gridWidth-o.ttWidth-10&&(d=a.globals.gridWidth-o.ttWidth),d<-20&&(d=-20),a.config.tooltip.followCursor){var x=r.getElGrid(),b=x.getBoundingClientRect();p=r.e.clientY+a.globals.translateY-b.top-o.ttHeight/2}else a.globals.isBarHorizontal||(o.ttHeight/2+p>a.globals.gridHeight&&(p=a.globals.gridHeight-o.ttHeight+a.globals.translateY),p<0&&(p=0));isNaN(d)||(d+=a.globals.translateX,l.style.left=d+"px",l.style.top=p+"px")}},{key:"moveMarkers",value:function(e,t){var i=this.w,a=this.ttCtx;if(i.globals.markers.size[e]>0)for(var r=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e,"'] .apexcharts-marker")),l=0;l<r.length;l++)parseInt(r[l].getAttribute("rel"),10)===t&&(a.marker.resetPointsSize(),a.marker.enlargeCurrentPoint(t,r[l]));else a.marker.resetPointsSize(),this.moveDynamicPointOnHover(t,e)}},{key:"moveDynamicPointOnHover",value:function(e,t){var i,a,r=this.w,l=this.ttCtx,o=r.globals.pointsArray,h=l.tooltipUtil.getHoverMarkerSize(t),d=r.config.series[t].type;if(!d||d!=="column"&&d!=="candlestick"&&d!=="boxPlot"){i=o[t][e][0],a=o[t][e][1]?o[t][e][1]:0;var p=r.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t,"'] .apexcharts-series-markers circle"));p&&a<r.globals.gridHeight&&a>0&&(p.setAttribute("r",h),p.setAttribute("cx",i),p.setAttribute("cy",a)),this.moveXCrosshairs(i),l.fixedTooltip||this.moveTooltip(i,a,h)}}},{key:"moveDynamicPointsOnHover",value:function(e){var t,i=this.ttCtx,a=i.w,r=0,l=0,o=a.globals.pointsArray;t=new $e(this.ctx).getActiveConfigSeriesIndex(!0);var h=i.tooltipUtil.getHoverMarkerSize(t);o[t]&&(r=o[t][e][0],l=o[t][e][1]);var d=i.tooltipUtil.getAllMarkers();if(d!==null)for(var p=0;p<a.globals.series.length;p++){var x=o[p];if(a.globals.comboCharts&&x===void 0&&d.splice(p,0,null),x&&x.length){var b=o[p][e][1];d[p].setAttribute("cx",r),b!==null&&!isNaN(b)&&b<a.globals.gridHeight+h&&b+h>0?(d[p]&&d[p].setAttribute("r",h),d[p]&&d[p].setAttribute("cy",b)):d[p]&&d[p].setAttribute("r",0)}}if(this.moveXCrosshairs(r),!i.fixedTooltip){var y=l||a.globals.gridHeight;this.moveTooltip(r,y,h)}}},{key:"moveStickyTooltipOverBars",value:function(e){var t=this.w,i=this.ttCtx,a=t.globals.columnSeries?t.globals.columnSeries.length:t.globals.series.length,r=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;t.globals.isBarHorizontal&&(r=new $e(this.ctx).getActiveConfigSeriesIndex(!1,"desc")+1);var l=t.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r,"'] path[j='").concat(e,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(e,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(e,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r,"'] path[j='").concat(e,"']")),o=l?parseFloat(l.getAttribute("cx")):0,h=l?parseFloat(l.getAttribute("cy")):0,d=l?parseFloat(l.getAttribute("barWidth")):0,p=l?parseFloat(l.getAttribute("barHeight")):0,x=i.getElGrid().getBoundingClientRect(),b=l.classList.contains("apexcharts-candlestick-area")||l.classList.contains("apexcharts-boxPlot-area");if(t.globals.isXNumeric?(l&&!b&&(o-=a%2!=0?d/2:0),l&&b&&t.globals.comboCharts&&(o-=d/2)):t.globals.isBarHorizontal||(o=i.xAxisTicksPositions[e-1]+i.dataPointsDividedWidth/2,isNaN(o)&&(o=i.xAxisTicksPositions[e]-i.dataPointsDividedWidth/2)),t.globals.isBarHorizontal?(h>t.globals.gridHeight/2&&(h-=i.tooltipRect.ttHeight),(h=h+t.config.grid.padding.top+p/3)+p>t.globals.gridHeight&&(h=t.globals.gridHeight-p)):t.config.tooltip.followCursor?h=i.e.clientY-x.top-i.tooltipRect.ttHeight/2:h+i.tooltipRect.ttHeight+15>t.globals.gridHeight&&(h=t.globals.gridHeight),h<-10&&(h=-10),t.globals.isBarHorizontal||this.moveXCrosshairs(o),!i.fixedTooltip){var y=h||t.globals.gridHeight;this.moveTooltip(o,y)}}}]),L}(),bt=function(){function L(e){m(this,L),this.w=e.w,this.ttCtx=e,this.ctx=e.ctx,this.tooltipPosition=new Ls(e)}return k(L,[{key:"drawDynamicPoints",value:function(){var e=this.w,t=new H(this.ctx),i=new Ve(this.ctx),a=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");a=K(a),e.config.chart.stacked&&a.sort(function(x,b){return parseFloat(x.getAttribute("data:realIndex"))-parseFloat(b.getAttribute("data:realIndex"))});for(var r=0;r<a.length;r++){var l=a[r].querySelector(".apexcharts-series-markers-wrap");if(l!==null){var o=void 0,h="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));e.config.chart.type!=="line"&&e.config.chart.type!=="area"||e.globals.comboCharts||e.config.tooltip.intersect||(h+=" no-pointer-events");var d=i.getMarkerConfig({cssClass:h,seriesIndex:Number(l.getAttribute("data:realIndex"))});(o=t.drawMarker(0,0,d)).node.setAttribute("default-marker-size",0);var p=document.createElementNS(e.globals.SVGNS,"g");p.classList.add("apexcharts-series-markers"),p.appendChild(o.node),l.appendChild(p)}}}},{key:"enlargeCurrentPoint",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,r=this.w;r.config.chart.type!=="bubble"&&this.newPointSize(e,t);var l=t.getAttribute("cx"),o=t.getAttribute("cy");if(i!==null&&a!==null&&(l=i,o=a),this.tooltipPosition.moveXCrosshairs(l),!this.fixedTooltip){if(r.config.chart.type==="radar"){var h=this.ttCtx.getElGrid(),d=h.getBoundingClientRect();l=this.ttCtx.e.clientX-d.left}this.tooltipPosition.moveTooltip(l,o,r.config.markers.hover.size)}}},{key:"enlargePoints",value:function(e){for(var t=this.w,i=this,a=this.ttCtx,r=e,l=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),o=t.config.markers.hover.size,h=0;h<l.length;h++){var d=l[h].getAttribute("rel"),p=l[h].getAttribute("index");if(o===void 0&&(o=t.globals.markers.size[p]+t.config.markers.hover.sizeOffset),r===parseInt(d,10)){i.newPointSize(r,l[h]);var x=l[h].getAttribute("cx"),b=l[h].getAttribute("cy");i.tooltipPosition.moveXCrosshairs(x),a.fixedTooltip||i.tooltipPosition.moveTooltip(x,b,o)}else i.oldPointSize(l[h])}}},{key:"newPointSize",value:function(e,t){var i=this.w,a=i.config.markers.hover.size,r=e===0?t.parentNode.firstChild:t.parentNode.lastChild;if(r.getAttribute("default-marker-size")!=="0"){var l=parseInt(r.getAttribute("index"),10);a===void 0&&(a=i.globals.markers.size[l]+i.config.markers.hover.sizeOffset),a<0&&(a=0),r.setAttribute("r",a)}}},{key:"oldPointSize",value:function(e){var t=parseFloat(e.getAttribute("default-marker-size"));e.setAttribute("r",t)}},{key:"resetPointsSize",value:function(){for(var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"),t=0;t<e.length;t++){var i=parseFloat(e[t].getAttribute("default-marker-size"));T.isNumber(i)&&i>=0?e[t].setAttribute("r",i):e[t].setAttribute("r",0)}}}]),L}(),zt=function(){function L(e){m(this,L),this.w=e.w,this.ttCtx=e}return k(L,[{key:"getAttr",value:function(e,t){return parseFloat(e.target.getAttribute(t))}},{key:"handleHeatTreeTooltip",value:function(e){var t=e.e,i=e.opt,a=e.x,r=e.y,l=e.type,o=this.ttCtx,h=this.w;if(t.target.classList.contains("apexcharts-".concat(l,"-rect"))){var d=this.getAttr(t,"i"),p=this.getAttr(t,"j"),x=this.getAttr(t,"cx"),b=this.getAttr(t,"cy"),y=this.getAttr(t,"width"),S=this.getAttr(t,"height");if(o.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:d,j:p,shared:!1,e:t}),h.globals.capturedSeriesIndex=d,h.globals.capturedDataPointIndex=p,a=x+o.tooltipRect.ttWidth/2+y,r=b+o.tooltipRect.ttHeight/2-S/2,o.tooltipPosition.moveXCrosshairs(x+y/2),a>h.globals.gridWidth/2&&(a=x-o.tooltipRect.ttWidth/2+y),o.w.config.tooltip.followCursor){var A=h.globals.dom.elWrap.getBoundingClientRect();a=h.globals.clientX-A.left-(a>h.globals.gridWidth/2?o.tooltipRect.ttWidth:0),r=h.globals.clientY-A.top-(r>h.globals.gridHeight/2?o.tooltipRect.ttHeight:0)}}return{x:a,y:r}}},{key:"handleMarkerTooltip",value:function(e){var t,i,a=e.e,r=e.opt,l=e.x,o=e.y,h=this.w,d=this.ttCtx;if(a.target.classList.contains("apexcharts-marker")){var p=parseInt(r.paths.getAttribute("cx"),10),x=parseInt(r.paths.getAttribute("cy"),10),b=parseFloat(r.paths.getAttribute("val"));if(i=parseInt(r.paths.getAttribute("rel"),10),t=parseInt(r.paths.parentNode.parentNode.parentNode.getAttribute("rel"),10)-1,d.intersect){var y=T.findAncestor(r.paths,"apexcharts-series");y&&(t=parseInt(y.getAttribute("data:realIndex"),10))}if(d.tooltipLabels.drawSeriesTexts({ttItems:r.ttItems,i:t,j:i,shared:!d.showOnIntersect&&h.config.tooltip.shared,e:a}),a.type==="mouseup"&&d.markerClick(a,t,i),h.globals.capturedSeriesIndex=t,h.globals.capturedDataPointIndex=i,l=p,o=x+h.globals.translateY-1.4*d.tooltipRect.ttHeight,d.w.config.tooltip.followCursor){var S=d.getElGrid().getBoundingClientRect();o=d.e.clientY+h.globals.translateY-S.top}b<0&&(o=x),d.marker.enlargeCurrentPoint(i,r.paths,l,o)}return{x:l,y:o}}},{key:"handleBarTooltip",value:function(e){var t,i,a=e.e,r=e.opt,l=this.w,o=this.ttCtx,h=o.getElTooltip(),d=0,p=0,x=0,b=this.getBarTooltipXY({e:a,opt:r});t=b.i;var y=b.barHeight,S=b.j;l.globals.capturedSeriesIndex=t,l.globals.capturedDataPointIndex=S,l.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!l.config.tooltip.shared?(p=b.x,x=b.y,i=Array.isArray(l.config.stroke.width)?l.config.stroke.width[t]:l.config.stroke.width,d=p):l.globals.comboCharts||l.config.tooltip.shared||(d/=2),isNaN(x)?x=l.globals.svgHeight-o.tooltipRect.ttHeight:x<0&&(x=0);var A=parseInt(r.paths.parentNode.getAttribute("data:realIndex"),10),E=l.globals.isMultipleYAxis?l.config.yaxis[A]&&l.config.yaxis[A].reversed:l.config.yaxis[0].reversed;if(p+o.tooltipRect.ttWidth>l.globals.gridWidth&&!E?p-=o.tooltipRect.ttWidth:p<0&&(p=0),o.w.config.tooltip.followCursor){var _=o.getElGrid().getBoundingClientRect();x=o.e.clientY-_.top}o.tooltip===null&&(o.tooltip=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip")),l.config.tooltip.shared||(l.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(d+i/2):o.tooltipPosition.moveXCrosshairs(d)),!o.fixedTooltip&&(!l.config.tooltip.shared||l.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(E&&(p-=o.tooltipRect.ttWidth)<0&&(p=0),!E||l.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(x=x+y-2*(l.globals.series[t][S]<0?y:0)),o.tooltipRect.ttHeight+x>l.globals.gridHeight?x=l.globals.gridHeight-o.tooltipRect.ttHeight+l.globals.translateY:(x=x+l.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(x=0),h.style.left=p+l.globals.translateX+"px",h.style.top=x+"px")}},{key:"getBarTooltipXY",value:function(e){var t=e.e,i=e.opt,a=this.w,r=null,l=this.ttCtx,o=0,h=0,d=0,p=0,x=0,b=t.target.classList;if(b.contains("apexcharts-bar-area")||b.contains("apexcharts-candlestick-area")||b.contains("apexcharts-boxPlot-area")||b.contains("apexcharts-rangebar-area")){var y=t.target,S=y.getBoundingClientRect(),A=i.elGrid.getBoundingClientRect(),E=S.height;x=S.height;var _=S.width,R=parseInt(y.getAttribute("cx"),10),F=parseInt(y.getAttribute("cy"),10);p=parseFloat(y.getAttribute("barWidth"));var f=t.type==="touchmove"?t.touches[0].clientX:t.clientX;r=parseInt(y.getAttribute("j"),10),o=parseInt(y.parentNode.getAttribute("rel"),10)-1;var v=y.getAttribute("data-range-y1"),C=y.getAttribute("data-range-y2");a.globals.comboCharts&&(o=parseInt(y.parentNode.getAttribute("data:realIndex"),10)),l.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:o,j:r,y1:v?parseInt(v,10):null,y2:C?parseInt(C,10):null,shared:!l.showOnIntersect&&a.config.tooltip.shared,e:t}),a.config.tooltip.followCursor?a.globals.isBarHorizontal?(h=f-A.left+15,d=F-l.dataPointsDividedHeight+E/2-l.tooltipRect.ttHeight/2):(h=a.globals.isXNumeric?R-_/2:R-l.dataPointsDividedWidth+_/2,d=t.clientY-A.top-l.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((h=R)<l.xyRatios.baseLineInvertedY&&(h=R-l.tooltipRect.ttWidth),d=F-l.dataPointsDividedHeight+E/2-l.tooltipRect.ttHeight/2):(h=a.globals.isXNumeric?R-_/2:R-l.dataPointsDividedWidth+_/2,d=F)}return{x:h,y:d,barHeight:x,barWidth:p,i:o,j:r}}}]),L}(),ga=function(){function L(e){m(this,L),this.w=e.w,this.ttCtx=e}return k(L,[{key:"drawXaxisTooltip",value:function(){var e=this.w,t=this.ttCtx,i=e.config.xaxis.position==="bottom";t.xaxisOffY=i?e.globals.gridHeight+1:-e.globals.xAxisHeight-e.config.xaxis.axisTicks.height+3;var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom":"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",r=e.globals.dom.elWrap;t.isXAxisTooltipEnabled&&e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")===null&&(t.xaxisTooltip=document.createElement("div"),t.xaxisTooltip.setAttribute("class",a+" apexcharts-theme-"+e.config.tooltip.theme),r.appendChild(t.xaxisTooltip),t.xaxisTooltipText=document.createElement("div"),t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"),t.xaxisTooltipText.style.fontFamily=e.config.xaxis.tooltip.style.fontFamily||e.config.chart.fontFamily,t.xaxisTooltipText.style.fontSize=e.config.xaxis.tooltip.style.fontSize,t.xaxisTooltip.appendChild(t.xaxisTooltipText))}},{key:"drawYaxisTooltip",value:function(){for(var e=this.w,t=this.ttCtx,i=function(r){var l=e.config.yaxis[r].opposite||e.config.yaxis[r].crosshairs.opposite;t.yaxisOffX=l?e.globals.gridWidth+1:1;var o="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(r,l?" apexcharts-yaxistooltip-right":" apexcharts-yaxistooltip-left");e.globals.yAxisSameScaleIndices.map(function(d,p){d.map(function(x,b){b===r&&(o+=e.config.yaxis[b].show?" ":" apexcharts-yaxistooltip-hidden")})});var h=e.globals.dom.elWrap;e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(r))===null&&(t.yaxisTooltip=document.createElement("div"),t.yaxisTooltip.setAttribute("class",o+" apexcharts-theme-"+e.config.tooltip.theme),h.appendChild(t.yaxisTooltip),r===0&&(t.yaxisTooltipText=[]),t.yaxisTooltipText[r]=document.createElement("div"),t.yaxisTooltipText[r].classList.add("apexcharts-yaxistooltip-text"),t.yaxisTooltip.appendChild(t.yaxisTooltipText[r]))},a=0;a<e.config.yaxis.length;a++)i(a)}},{key:"setXCrosshairWidth",value:function(){var e=this.w,t=this.ttCtx,i=t.getElXCrosshairs();if(t.xcrosshairsWidth=parseInt(e.config.xaxis.crosshairs.width,10),e.globals.comboCharts){var a=e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(a!==null&&e.config.xaxis.crosshairs.width==="barWidth"){var r=parseFloat(a.getAttribute("barWidth"));t.xcrosshairsWidth=r}else if(e.config.xaxis.crosshairs.width==="tickWidth"){var l=e.globals.labels.length;t.xcrosshairsWidth=e.globals.gridWidth/l}}else if(e.config.xaxis.crosshairs.width==="tickWidth"){var o=e.globals.labels.length;t.xcrosshairsWidth=e.globals.gridWidth/o}else if(e.config.xaxis.crosshairs.width==="barWidth"){var h=e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");if(h!==null){var d=parseFloat(h.getAttribute("barWidth"));t.xcrosshairsWidth=d}else t.xcrosshairsWidth=1}e.globals.isBarHorizontal&&(t.xcrosshairsWidth=0),i!==null&&t.xcrosshairsWidth>0&&i.setAttribute("width",t.xcrosshairsWidth)}},{key:"handleYCrosshair",value:function(){var e=this.w,t=this.ttCtx;t.ycrosshairs=e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"),t.ycrosshairsHidden=e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")}},{key:"drawYaxisTooltipText",value:function(e,t,i){var a=this.ttCtx,r=this.w,l=r.globals.yLabelFormatters[e];if(a.yaxisTooltips[e]){var o=a.getElGrid().getBoundingClientRect(),h=(t-o.top)*i.yRatio[e],d=r.globals.maxYArr[e]-r.globals.minYArr[e],p=r.globals.minYArr[e]+(d-h);a.tooltipPosition.moveYCrosshairs(t-o.top),a.yaxisTooltipText[e].innerHTML=l(p),a.tooltipPosition.moveYAxisTooltip(e)}}}]),L}(),Nu=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.tConfig=t.config.tooltip,this.tooltipUtil=new Ts(this),this.tooltipLabels=new Oi(this),this.tooltipPosition=new Ls(this),this.marker=new bt(this),this.intersect=new zt(this),this.axesTooltip=new ga(this),this.showOnIntersect=this.tConfig.intersect,this.showTooltipTitle=this.tConfig.x.show,this.fixedTooltip=this.tConfig.fixed.enabled,this.xaxisTooltip=null,this.yaxisTTEls=null,this.isBarShared=!t.globals.isBarHorizontal&&this.tConfig.shared,this.lastHoverTime=Date.now()}return k(L,[{key:"getElTooltip",value:function(e){return e||(e=this),e.w.globals.dom.baseEl?e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"):null}},{key:"getElXCrosshairs",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")}},{key:"getElGrid",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")}},{key:"drawTooltip",value:function(e){var t=this.w;this.xyRatios=e,this.isXAxisTooltipEnabled=t.config.xaxis.tooltip.enabled&&t.globals.axisCharts,this.yaxisTooltips=t.config.yaxis.map(function(l,o){return!!(l.show&&l.tooltip.enabled&&t.globals.axisCharts)}),this.allTooltipSeriesGroups=[],t.globals.axisCharts||(this.showTooltipTitle=!1);var i=document.createElement("div");if(i.classList.add("apexcharts-tooltip"),t.config.tooltip.cssClass&&i.classList.add(t.config.tooltip.cssClass),i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)),t.globals.dom.elWrap.appendChild(i),t.globals.axisCharts){this.axesTooltip.drawXaxisTooltip(),this.axesTooltip.drawYaxisTooltip(),this.axesTooltip.setXCrosshairWidth(),this.axesTooltip.handleYCrosshair();var a=new Ee(this.ctx);this.xAxisTicksPositions=a.getXAxisTicksPositions()}if(!t.globals.comboCharts&&!this.tConfig.intersect&&t.config.chart.type!=="rangeBar"||this.tConfig.shared||(this.showOnIntersect=!0),t.config.markers.size!==0&&t.globals.markers.largestSize!==0||this.marker.drawDynamicPoints(this),t.globals.collapsedSeries.length!==t.globals.series.length){this.dataPointsDividedHeight=t.globals.gridHeight/t.globals.dataPoints,this.dataPointsDividedWidth=t.globals.gridWidth/t.globals.dataPoints,this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"),this.tooltipTitle.classList.add("apexcharts-tooltip-title"),this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||t.config.chart.fontFamily,this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize,i.appendChild(this.tooltipTitle));var r=t.globals.series.length;(t.globals.xyCharts||t.globals.comboCharts)&&this.tConfig.shared&&(r=this.showOnIntersect?1:t.globals.series.length),this.legendLabels=t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"),this.ttItems=this.createTTElements(r),this.addSVGEvents()}}},{key:"createTTElements",value:function(e){for(var t=this,i=this.w,a=[],r=this.getElTooltip(),l=function(h){var d=document.createElement("div");d.classList.add("apexcharts-tooltip-series-group"),d.style.order=i.config.tooltip.inverseOrder?e-h:h+1,t.tConfig.shared&&t.tConfig.enabledOnSeries&&Array.isArray(t.tConfig.enabledOnSeries)&&t.tConfig.enabledOnSeries.indexOf(h)<0&&d.classList.add("apexcharts-tooltip-series-group-hidden");var p=document.createElement("span");p.classList.add("apexcharts-tooltip-marker"),p.style.backgroundColor=i.globals.colors[h],d.appendChild(p);var x=document.createElement("div");x.classList.add("apexcharts-tooltip-text"),x.style.fontFamily=t.tConfig.style.fontFamily||i.config.chart.fontFamily,x.style.fontSize=t.tConfig.style.fontSize,["y","goals","z"].forEach(function(b){var y=document.createElement("div");y.classList.add("apexcharts-tooltip-".concat(b,"-group"));var S=document.createElement("span");S.classList.add("apexcharts-tooltip-text-".concat(b,"-label")),y.appendChild(S);var A=document.createElement("span");A.classList.add("apexcharts-tooltip-text-".concat(b,"-value")),y.appendChild(A),x.appendChild(y)}),d.appendChild(x),r.appendChild(d),a.push(d)},o=0;o<e;o++)l(o);return a}},{key:"addSVGEvents",value:function(){var e=this.w,t=e.config.chart.type,i=this.getElTooltip(),a=!(t!=="bar"&&t!=="candlestick"&&t!=="boxPlot"&&t!=="rangeBar"),r=t==="area"||t==="line"||t==="scatter"||t==="bubble"||t==="radar",l=e.globals.dom.Paper.node,o=this.getElGrid();o&&(this.seriesBound=o.getBoundingClientRect());var h,d=[],p=[],x={hoverArea:l,elGrid:o,tooltipEl:i,tooltipY:d,tooltipX:p,ttItems:this.ttItems};if(e.globals.axisCharts&&(r?h=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker"):a?h=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area"):t!=="heatmap"&&t!=="treemap"||(h=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")),h&&h.length))for(var b=0;b<h.length;b++)d.push(h[b].getAttribute("cy")),p.push(h[b].getAttribute("cx"));if(e.globals.xyCharts&&!this.showOnIntersect||e.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([l],x);else if(a&&!e.globals.comboCharts||r&&this.showOnIntersect)this.addDatapointEventsListeners(x);else if(!e.globals.axisCharts||t==="heatmap"||t==="treemap"){var y=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");this.addPathsEventListeners(y,x)}if(this.showOnIntersect){var S=e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");S.length>0&&this.addPathsEventListeners(S,x),this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(x)}}},{key:"drawFixedTooltipRect",value:function(){var e=this.w,t=this.getElTooltip(),i=t.getBoundingClientRect(),a=i.width+10,r=i.height+10,l=this.tConfig.fixed.offsetX,o=this.tConfig.fixed.offsetY,h=this.tConfig.fixed.position.toLowerCase();return h.indexOf("right")>-1&&(l=l+e.globals.svgWidth-a+10),h.indexOf("bottom")>-1&&(o=o+e.globals.svgHeight-r-10),t.style.left=l+"px",t.style.top=o+"px",{x:l,y:o,ttWidth:a,ttHeight:r}}},{key:"addDatapointEventsListeners",value:function(e){var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");this.addPathsEventListeners(t,e)}},{key:"addPathsEventListeners",value:function(e,t){for(var i=this,a=function(l){var o={paths:e[l],tooltipEl:t.tooltipEl,tooltipY:t.tooltipY,tooltipX:t.tooltipX,elGrid:t.elGrid,hoverArea:t.hoverArea,ttItems:t.ttItems};["mousemove","mouseup","touchmove","mouseout","touchend"].map(function(h){return e[l].addEventListener(h,i.onSeriesHover.bind(i,o),{capture:!1,passive:!0})})},r=0;r<e.length;r++)a(r)}},{key:"onSeriesHover",value:function(e,t){var i=this,a=Date.now()-this.lastHoverTime;a>=100?this.seriesHover(e,t):(clearTimeout(this.seriesHoverTimeout),this.seriesHoverTimeout=setTimeout(function(){i.seriesHover(e,t)},100-a))}},{key:"seriesHover",value:function(e,t){var i=this;this.lastHoverTime=Date.now();var a=[],r=this.w;r.config.chart.group&&(a=this.ctx.getGroupedCharts()),r.globals.axisCharts&&(r.globals.minX===-1/0&&r.globals.maxX===1/0||r.globals.dataPoints===0)||(a.length?a.forEach(function(l){var o=i.getElTooltip(l),h={paths:e.paths,tooltipEl:o,tooltipY:e.tooltipY,tooltipX:e.tooltipX,elGrid:e.elGrid,hoverArea:e.hoverArea,ttItems:l.w.globals.tooltip.ttItems};l.w.globals.minX===i.w.globals.minX&&l.w.globals.maxX===i.w.globals.maxX&&l.w.globals.tooltip.seriesHoverByContext({chartCtx:l,ttCtx:l.w.globals.tooltip,opt:h,e:t})}):this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:e,e:t}))}},{key:"seriesHoverByContext",value:function(e){var t=e.chartCtx,i=e.ttCtx,a=e.opt,r=e.e,l=t.w,o=this.getElTooltip();o&&(i.tooltipRect={x:0,y:0,ttWidth:o.getBoundingClientRect().width,ttHeight:o.getBoundingClientRect().height},i.e=r,i.tooltipUtil.hasBars()&&!l.globals.comboCharts&&!i.isBarShared&&this.tConfig.onDatasetHover.highlightDataSeries&&new $e(t).toggleSeriesOnHover(r,r.target.parentNode),i.fixedTooltip&&i.drawFixedTooltipRect(),l.globals.axisCharts?i.axisChartsTooltips({e:r,opt:a,tooltipRect:i.tooltipRect}):i.nonAxisChartsTooltips({e:r,opt:a,tooltipRect:i.tooltipRect}))}},{key:"axisChartsTooltips",value:function(e){var t,i,a=e.e,r=e.opt,l=this.w,o=r.elGrid.getBoundingClientRect(),h=a.type==="touchmove"?a.touches[0].clientX:a.clientX,d=a.type==="touchmove"?a.touches[0].clientY:a.clientY;if(this.clientY=d,this.clientX=h,l.globals.capturedSeriesIndex=-1,l.globals.capturedDataPointIndex=-1,d<o.top||d>o.top+o.height)this.handleMouseOut(r);else{if(Array.isArray(this.tConfig.enabledOnSeries)&&!l.config.tooltip.shared){var p=parseInt(r.paths.getAttribute("index"),10);if(this.tConfig.enabledOnSeries.indexOf(p)<0)return void this.handleMouseOut(r)}var x=this.getElTooltip(),b=this.getElXCrosshairs(),y=l.globals.xyCharts||l.config.chart.type==="bar"&&!l.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||l.globals.comboCharts&&this.tooltipUtil.hasBars();if(a.type==="mousemove"||a.type==="touchmove"||a.type==="mouseup"){if(l.globals.collapsedSeries.length+l.globals.ancillaryCollapsedSeries.length===l.globals.series.length)return;b!==null&&b.classList.add("apexcharts-active");var S=this.yaxisTooltips.filter(function(_){return _===!0});if(this.ycrosshairs!==null&&S.length&&this.ycrosshairs.classList.add("apexcharts-active"),y&&!this.showOnIntersect)this.handleStickyTooltip(a,h,d,r);else if(l.config.chart.type==="heatmap"||l.config.chart.type==="treemap"){var A=this.intersect.handleHeatTreeTooltip({e:a,opt:r,x:t,y:i,type:l.config.chart.type});t=A.x,i=A.y,x.style.left=t+"px",x.style.top=i+"px"}else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip({e:a,opt:r}),this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip({e:a,opt:r,x:t,y:i});if(this.yaxisTooltips.length)for(var E=0;E<l.config.yaxis.length;E++)this.axesTooltip.drawYaxisTooltipText(E,d,this.xyRatios);r.tooltipEl.classList.add("apexcharts-active")}else a.type!=="mouseout"&&a.type!=="touchend"||this.handleMouseOut(r)}}},{key:"nonAxisChartsTooltips",value:function(e){var t=e.e,i=e.opt,a=e.tooltipRect,r=this.w,l=i.paths.getAttribute("rel"),o=this.getElTooltip(),h=r.globals.dom.elWrap.getBoundingClientRect();if(t.type==="mousemove"||t.type==="touchmove"){o.classList.add("apexcharts-active"),this.tooltipLabels.drawSeriesTexts({ttItems:i.ttItems,i:parseInt(l,10)-1,shared:!1});var d=r.globals.clientX-h.left-a.ttWidth/2,p=r.globals.clientY-h.top-a.ttHeight-10;if(o.style.left=d+"px",o.style.top=p+"px",r.config.legend.tooltipHoverFormatter){var x=l-1,b=(0,r.config.legend.tooltipHoverFormatter)(this.legendLabels[x].getAttribute("data:default-text"),{seriesIndex:x,dataPointIndex:x,w:r});this.legendLabels[x].innerHTML=b}}else t.type!=="mouseout"&&t.type!=="touchend"||(o.classList.remove("apexcharts-active"),r.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(y){var S=y.getAttribute("data:default-text");y.innerHTML=decodeURIComponent(S)}))}},{key:"handleStickyTooltip",value:function(e,t,i,a){var r=this.w,l=this.tooltipUtil.getNearestValues({context:this,hoverArea:a.hoverArea,elGrid:a.elGrid,clientX:t,clientY:i}),o=l.j,h=l.capturedSeries,d=a.elGrid.getBoundingClientRect();l.hoverX<0||l.hoverX>d.width?this.handleMouseOut(a):h!==null?this.handleStickyCapturedSeries(e,h,a,o):(this.tooltipUtil.isXoverlap(o)||r.globals.isBarHorizontal)&&this.create(e,this,0,o,a.ttItems)}},{key:"handleStickyCapturedSeries",value:function(e,t,i,a){var r=this.w;if(!this.tConfig.shared&&r.globals.series[t][a]===null)return void this.handleMouseOut(i);r.globals.series[t][a]!==void 0?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(e,this,t,a,i.ttItems):this.create(e,this,t,a,i.ttItems,!1):this.tooltipUtil.isXoverlap(a)&&this.create(e,this,0,a,i.ttItems)}},{key:"deactivateHoverFilter",value:function(){for(var e=this.w,t=new H(this.ctx),i=e.globals.dom.Paper.select(".apexcharts-bar-area"),a=0;a<i.length;a++)t.pathMouseLeave(i[a])}},{key:"handleMouseOut",value:function(e){var t=this.w,i=this.getElXCrosshairs();if(e.tooltipEl.classList.remove("apexcharts-active"),this.deactivateHoverFilter(),t.config.chart.type!=="bubble"&&this.marker.resetPointsSize(),i!==null&&i.classList.remove("apexcharts-active"),this.ycrosshairs!==null&&this.ycrosshairs.classList.remove("apexcharts-active"),this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"),this.yaxisTooltips.length){this.yaxisTTEls===null&&(this.yaxisTTEls=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));for(var a=0;a<this.yaxisTTEls.length;a++)this.yaxisTTEls[a].classList.remove("apexcharts-active")}t.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach(function(r){var l=r.getAttribute("data:default-text");r.innerHTML=decodeURIComponent(l)})}},{key:"markerClick",value:function(e,t,i){var a=this.w;typeof a.config.chart.events.markerClick=="function"&&a.config.chart.events.markerClick(e,this.ctx,{seriesIndex:t,dataPointIndex:i,w:a}),this.ctx.events.fireEvent("markerClick",[e,this.ctx,{seriesIndex:t,dataPointIndex:i,w:a}])}},{key:"create",value:function(e,t,i,a,r){var l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,o=this.w,h=t;e.type==="mouseup"&&this.markerClick(e,i,a),l===null&&(l=this.tConfig.shared);var d=this.tooltipUtil.hasMarkers(),p=this.tooltipUtil.getElBars();if(o.config.legend.tooltipHoverFormatter){var x=o.config.legend.tooltipHoverFormatter,b=Array.from(this.legendLabels);b.forEach(function(v){var C=v.getAttribute("data:default-text");v.innerHTML=decodeURIComponent(C)});for(var y=0;y<b.length;y++){var S=b[y],A=parseInt(S.getAttribute("i"),10),E=decodeURIComponent(S.getAttribute("data:default-text")),_=x(E,{seriesIndex:l?A:i,dataPointIndex:a,w:o});if(l)S.innerHTML=o.globals.collapsedSeriesIndices.indexOf(A)<0?_:E;else if(S.innerHTML=A===i?_:E,i===A)break}}if(l){if(h.tooltipLabels.drawSeriesTexts({ttItems:r,i,j:a,shared:!this.showOnIntersect&&this.tConfig.shared}),d&&(o.globals.markers.largestSize>0?h.marker.enlargePoints(a):h.tooltipPosition.moveDynamicPointsOnHover(a)),this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(p),this.barSeriesHeight>0)){var R=new H(this.ctx),F=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a,"']"));this.deactivateHoverFilter(),this.tooltipPosition.moveStickyTooltipOverBars(a);for(var f=0;f<F.length;f++)R.pathMouseEnter(F[f])}}else h.tooltipLabels.drawSeriesTexts({shared:!1,ttItems:r,i,j:a}),this.tooltipUtil.hasBars()&&h.tooltipPosition.moveStickyTooltipOverBars(a),d&&h.tooltipPosition.moveMarkers(i,a)}}]),L}(),Ao=function(L){I(t,nt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return k(t,[{key:"draw",value:function(i,a){var r=this,l=this.w;this.graphics=new H(this.ctx),this.bar=new nt(this.ctx,this.xyRatios);var o=new ce(this.ctx,l);i=o.getLogSeries(i),this.yRatio=o.getLogYRatios(this.yRatio),this.barHelpers.initVariables(i),l.config.chart.stackType==="100%"&&(i=l.globals.seriesPercent.slice()),this.series=i,this.totalItems=0,this.prevY=[],this.prevX=[],this.prevYF=[],this.prevXF=[],this.prevYVal=[],this.prevXVal=[],this.xArrj=[],this.xArrjF=[],this.xArrjVal=[],this.yArrj=[],this.yArrjF=[],this.yArrjVal=[];for(var h=0;h<i.length;h++)i[h].length>0&&(this.totalItems+=i[h].length);for(var d=this.graphics.group({class:"apexcharts-bar-series apexcharts-plot-series"}),p=0,x=0,b=function(A,E){var _=void 0,R=void 0,F=void 0,f=void 0,v=[],C=[],M=l.globals.comboCharts?a[A]:A;r.yRatio.length>1&&(r.yaxisIndex=M),r.isReversed=l.config.yaxis[r.yaxisIndex]&&l.config.yaxis[r.yaxisIndex].reversed;var X=r.graphics.group({class:"apexcharts-series",seriesName:T.escapeString(l.globals.seriesNames[M]),rel:A+1,"data:realIndex":M});r.ctx.series.addCollapsedClassToSeries(X,M);var G=r.graphics.group({class:"apexcharts-datalabels","data:realIndex":M}),Y=0,re=0,te=r.initialPositions(p,x,_,R,F,f);x=te.y,Y=te.barHeight,R=te.yDivision,f=te.zeroW,p=te.x,re=te.barWidth,_=te.xDivision,F=te.zeroH,r.yArrj=[],r.yArrjF=[],r.yArrjVal=[],r.xArrj=[],r.xArrjF=[],r.xArrjVal=[],r.prevY.length===1&&r.prevY[0].every(function(wt){return isNaN(wt)})&&(r.prevY[0]=r.prevY[0].map(function(wt){return F}),r.prevYF[0]=r.prevYF[0].map(function(wt){return 0}));for(var pe=0;pe<l.globals.dataPoints;pe++){var Ce=r.barHelpers.getStrokeWidth(A,pe,M),Je={indexes:{i:A,j:pe,realIndex:M,bc:E},strokeWidth:Ce,x:p,y:x,elSeries:X},He=null;r.isHorizontal?(He=r.drawStackedBarPaths(u(u({},Je),{},{zeroW:f,barHeight:Y,yDivision:R})),re=r.series[A][pe]/r.invertedYRatio):(He=r.drawStackedColumnPaths(u(u({},Je),{},{xDivision:_,barWidth:re,zeroH:F})),Y=r.series[A][pe]/r.yRatio[r.yaxisIndex]),x=He.y,p=He.x,v.push(p),C.push(x);var ft=r.barHelpers.getPathFillColor(i,A,pe,M);X=r.renderSeries({realIndex:M,pathFill:ft,j:pe,i:A,pathFrom:He.pathFrom,pathTo:He.pathTo,strokeWidth:Ce,elSeries:X,x:p,y:x,series:i,barHeight:Y,barWidth:re,elDataLabelsWrap:G,type:"bar",visibleSeries:0})}l.globals.seriesXvalues[M]=v,l.globals.seriesYvalues[M]=C,r.prevY.push(r.yArrj),r.prevYF.push(r.yArrjF),r.prevYVal.push(r.yArrjVal),r.prevX.push(r.xArrj),r.prevXF.push(r.xArrjF),r.prevXVal.push(r.xArrjVal),d.add(X)},y=0,S=0;y<i.length;y++,S++)b(y,S);return d}},{key:"initialPositions",value:function(i,a,r,l,o,h){var d,p,x=this.w;return this.isHorizontal?(d=(d=l=x.globals.gridHeight/x.globals.dataPoints)*parseInt(x.config.plotOptions.bar.barHeight,10)/100,h=this.baseLineInvertedY+x.globals.padHorizontal+(this.isReversed?x.globals.gridWidth:0)-(this.isReversed?2*this.baseLineInvertedY:0),a=(l-d)/2):(p=r=x.globals.gridWidth/x.globals.dataPoints,p=x.globals.isXNumeric&&x.globals.dataPoints>1?(r=x.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth,10)/100:p*parseInt(x.config.plotOptions.bar.columnWidth,10)/100,o=this.baseLineY[this.yaxisIndex]+(this.isReversed?x.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),i=x.globals.padHorizontal+(r-p)/2),{x:i,y:a,yDivision:l,xDivision:r,barHeight:d,barWidth:p,zeroH:o,zeroW:h}}},{key:"drawStackedBarPaths",value:function(i){for(var a,r=i.indexes,l=i.barHeight,o=i.strokeWidth,h=i.zeroW,d=i.x,p=i.y,x=i.yDivision,b=i.elSeries,y=this.w,S=p,A=r.i,E=r.j,_=0,R=0;R<this.prevXF.length;R++)_+=this.prevXF[R][E];if(A>0){var F=h;this.prevXVal[A-1][E]<0?F=this.series[A][E]>=0?this.prevX[A-1][E]+_-2*(this.isReversed?_:0):this.prevX[A-1][E]:this.prevXVal[A-1][E]>=0&&(F=this.series[A][E]>=0?this.prevX[A-1][E]:this.prevX[A-1][E]-_+2*(this.isReversed?_:0)),a=F}else a=h;d=this.series[A][E]===null?a:a+this.series[A][E]/this.invertedYRatio-2*(this.isReversed?this.series[A][E]/this.invertedYRatio:0);var f=this.barHelpers.getBarpaths({barYPosition:S,barHeight:l,x1:a,x2:d,strokeWidth:o,series:this.series,realIndex:r.realIndex,i:A,j:E,w:y});return this.barHelpers.barBackground({j:E,i:A,y1:S,y2:l,elSeries:b}),p+=x,{pathTo:f.pathTo,pathFrom:f.pathFrom,x:d,y:p}}},{key:"drawStackedColumnPaths",value:function(i){var a=i.indexes,r=i.x,l=i.y,o=i.xDivision,h=i.barWidth,d=i.zeroH;i.strokeWidth;var p=i.elSeries,x=this.w,b=a.i,y=a.j,S=a.bc;if(x.globals.isXNumeric){var A=x.globals.seriesX[b][y];A||(A=0),r=(A-x.globals.minX)/this.xRatio-h/2}for(var E,_=r,R=0,F=0;F<this.prevYF.length;F++)R+=isNaN(this.prevYF[F][y])?0:this.prevYF[F][y];if(b>0&&!x.globals.isXNumeric||b>0&&x.globals.isXNumeric&&x.globals.seriesX[b-1][y]===x.globals.seriesX[b][y]){var f,v,C=Math.min(this.yRatio.length+1,b+1);if(this.prevY[b-1]!==void 0){for(var M=1;M<C;M++)if(!isNaN(this.prevY[b-M][y])){v=this.prevY[b-M][y];break}}for(var X=1;X<C;X++){if(this.prevYVal[b-X][y]<0){f=this.series[b][y]>=0?v-R+2*(this.isReversed?R:0):v;break}if(this.prevYVal[b-X][y]>=0){f=this.series[b][y]>=0?v:v+R-2*(this.isReversed?R:0);break}}f===void 0&&(f=x.globals.gridHeight),E=this.prevYF[0].every(function(Y){return Y===0})&&this.prevYF.slice(1,b).every(function(Y){return Y.every(function(re){return isNaN(re)})})?x.globals.gridHeight-d:f}else E=x.globals.gridHeight-d;l=E-this.series[b][y]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[b][y]/this.yRatio[this.yaxisIndex]:0);var G=this.barHelpers.getColumnPaths({barXPosition:_,barWidth:h,y1:E,y2:l,yRatio:this.yRatio[this.yaxisIndex],strokeWidth:this.strokeWidth,series:this.series,realIndex:a.realIndex,i:b,j:y,w:x});return this.barHelpers.barBackground({bc:S,j:y,i:b,x1:_,x2:h,elSeries:p}),r+=o,{pathTo:G.pathTo,pathFrom:G.pathFrom,x:x.globals.isXNumeric?r-o:r,y:l}}}]),t}(),Sr=function(L){I(t,nt);var e=W(t);function t(){return m(this,t),e.apply(this,arguments)}return k(t,[{key:"draw",value:function(i,a){var r=this,l=this.w,o=new H(this.ctx),h=new ge(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick,this.boxOptions=this.w.config.plotOptions.boxPlot,this.isHorizontal=l.config.plotOptions.bar.horizontal;var d=new ce(this.ctx,l);i=d.getLogSeries(i),this.series=i,this.yRatio=d.getLogYRatios(this.yRatio),this.barHelpers.initVariables(i);for(var p=o.group({class:"apexcharts-".concat(l.config.chart.type,"-series apexcharts-plot-series")}),x=function(y){r.isBoxPlot=l.config.chart.type==="boxPlot"||l.config.series[y].type==="boxPlot";var S,A,E,_,R=void 0,F=void 0,f=[],v=[],C=l.globals.comboCharts?a[y]:y,M=o.group({class:"apexcharts-series",seriesName:T.escapeString(l.globals.seriesNames[C]),rel:y+1,"data:realIndex":C});r.ctx.series.addCollapsedClassToSeries(M,C),i[y].length>0&&(r.visibleI=r.visibleI+1);var X,G;r.yRatio.length>1&&(r.yaxisIndex=C);var Y=r.barHelpers.initialPositions();F=Y.y,X=Y.barHeight,A=Y.yDivision,_=Y.zeroW,R=Y.x,G=Y.barWidth,S=Y.xDivision,E=Y.zeroH,v.push(R+G/2);for(var re=o.group({class:"apexcharts-datalabels","data:realIndex":C}),te=function(Ce){var Je=r.barHelpers.getStrokeWidth(y,Ce,C),He=null,ft={indexes:{i:y,j:Ce,realIndex:C},x:R,y:F,strokeWidth:Je,elSeries:M};He=r.isHorizontal?r.drawHorizontalBoxPaths(u(u({},ft),{},{yDivision:A,barHeight:X,zeroW:_})):r.drawVerticalBoxPaths(u(u({},ft),{},{xDivision:S,barWidth:G,zeroH:E})),F=He.y,R=He.x,Ce>0&&v.push(R+G/2),f.push(F),He.pathTo.forEach(function(wt,Xt){var ui=!r.isBoxPlot&&r.candlestickOptions.wick.useFillColor?He.color[Xt]:l.globals.stroke.colors[y],zi=h.fillPath({seriesNumber:C,dataPointIndex:Ce,color:He.color[Xt],value:i[y][Ce]});r.renderSeries({realIndex:C,pathFill:zi,lineFill:ui,j:Ce,i:y,pathFrom:He.pathFrom,pathTo:wt,strokeWidth:Je,elSeries:M,x:R,y:F,series:i,barHeight:X,barWidth:G,elDataLabelsWrap:re,visibleSeries:r.visibleI,type:l.config.chart.type})})},pe=0;pe<l.globals.dataPoints;pe++)te(pe);l.globals.seriesXvalues[C]=v,l.globals.seriesYvalues[C]=f,p.add(M)},b=0;b<i.length;b++)x(b);return p}},{key:"drawVerticalBoxPaths",value:function(i){var a=i.indexes,r=i.x;i.y;var l=i.xDivision,o=i.barWidth,h=i.zeroH,d=i.strokeWidth,p=this.w,x=new H(this.ctx),b=a.i,y=a.j,S=!0,A=p.config.plotOptions.candlestick.colors.upward,E=p.config.plotOptions.candlestick.colors.downward,_="";this.isBoxPlot&&(_=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var R=this.yRatio[this.yaxisIndex],F=a.realIndex,f=this.getOHLCValue(F,y),v=h,C=h;f.o>f.c&&(S=!1);var M=Math.min(f.o,f.c),X=Math.max(f.o,f.c),G=f.m;p.globals.isXNumeric&&(r=(p.globals.seriesX[F][y]-p.globals.minX)/this.xRatio-o/2);var Y=r+o*this.visibleI;this.series[b][y]===void 0||this.series[b][y]===null?(M=h,X=h):(M=h-M/R,X=h-X/R,v=h-f.h/R,C=h-f.l/R,G=h-f.m/R);var re=x.move(Y,h),te=x.move(Y+o/2,M);return p.globals.previousPaths.length>0&&(te=this.getPreviousPath(F,y,!0)),re=this.isBoxPlot?[x.move(Y,M)+x.line(Y+o/2,M)+x.line(Y+o/2,v)+x.line(Y+o/4,v)+x.line(Y+o-o/4,v)+x.line(Y+o/2,v)+x.line(Y+o/2,M)+x.line(Y+o,M)+x.line(Y+o,G)+x.line(Y,G)+x.line(Y,M+d/2),x.move(Y,G)+x.line(Y+o,G)+x.line(Y+o,X)+x.line(Y+o/2,X)+x.line(Y+o/2,C)+x.line(Y+o-o/4,C)+x.line(Y+o/4,C)+x.line(Y+o/2,C)+x.line(Y+o/2,X)+x.line(Y,X)+x.line(Y,G)+"z"]:[x.move(Y,X)+x.line(Y+o/2,X)+x.line(Y+o/2,v)+x.line(Y+o/2,X)+x.line(Y+o,X)+x.line(Y+o,M)+x.line(Y+o/2,M)+x.line(Y+o/2,C)+x.line(Y+o/2,M)+x.line(Y,M)+x.line(Y,X-d/2)],te+=x.move(Y,M),p.globals.isXNumeric||(r+=l),{pathTo:re,pathFrom:te,x:r,y:X,barXPosition:Y,color:this.isBoxPlot?_:S?[A]:[E]}}},{key:"drawHorizontalBoxPaths",value:function(i){var a=i.indexes;i.x;var r=i.y,l=i.yDivision,o=i.barHeight,h=i.zeroW,d=i.strokeWidth,p=this.w,x=new H(this.ctx),b=a.i,y=a.j,S=this.boxOptions.colors.lower;this.isBoxPlot&&(S=[this.boxOptions.colors.lower,this.boxOptions.colors.upper]);var A=this.invertedYRatio,E=a.realIndex,_=this.getOHLCValue(E,y),R=h,F=h,f=Math.min(_.o,_.c),v=Math.max(_.o,_.c),C=_.m;p.globals.isXNumeric&&(r=(p.globals.seriesX[E][y]-p.globals.minX)/this.invertedXRatio-o/2);var M=r+o*this.visibleI;this.series[b][y]===void 0||this.series[b][y]===null?(f=h,v=h):(f=h+f/A,v=h+v/A,R=h+_.h/A,F=h+_.l/A,C=h+_.m/A);var X=x.move(h,M),G=x.move(f,M+o/2);return p.globals.previousPaths.length>0&&(G=this.getPreviousPath(E,y,!0)),X=[x.move(f,M)+x.line(f,M+o/2)+x.line(R,M+o/2)+x.line(R,M+o/2-o/4)+x.line(R,M+o/2+o/4)+x.line(R,M+o/2)+x.line(f,M+o/2)+x.line(f,M+o)+x.line(C,M+o)+x.line(C,M)+x.line(f+d/2,M),x.move(C,M)+x.line(C,M+o)+x.line(v,M+o)+x.line(v,M+o/2)+x.line(F,M+o/2)+x.line(F,M+o-o/4)+x.line(F,M+o/4)+x.line(F,M+o/2)+x.line(v,M+o/2)+x.line(v,M)+x.line(C,M)+"z"],G+=x.move(f,M),p.globals.isXNumeric||(r+=l),{pathTo:X,pathFrom:G,x:v,y:r,barYPosition:M,color:S}}},{key:"getOHLCValue",value:function(i,a){var r=this.w;return{o:this.isBoxPlot?r.globals.seriesCandleH[i][a]:r.globals.seriesCandleO[i][a],h:this.isBoxPlot?r.globals.seriesCandleO[i][a]:r.globals.seriesCandleH[i][a],m:r.globals.seriesCandleM[i][a],l:this.isBoxPlot?r.globals.seriesCandleC[i][a]:r.globals.seriesCandleL[i][a],c:this.isBoxPlot?r.globals.seriesCandleL[i][a]:r.globals.seriesCandleC[i][a]}}}]),t}(),So=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"checkColorRange",value:function(){var e=this.w,t=!1,i=e.config.plotOptions[e.config.chart.type];return i.colorScale.ranges.length>0&&i.colorScale.ranges.map(function(a,r){a.from<=0&&(t=!0)}),t}},{key:"getShadeColor",value:function(e,t,i,a){var r=this.w,l=1,o=r.config.plotOptions[e].shadeIntensity,h=this.determineColor(e,t,i);r.globals.hasNegs||a?l=r.config.plotOptions[e].reverseNegativeShade?h.percent<0?h.percent/100*(1.25*o):(1-h.percent/100)*(1.25*o):h.percent<=0?1-(1+h.percent/100)*o:(1-h.percent/100)*o:(l=1-h.percent/100,e==="treemap"&&(l=(1-h.percent/100)*(1.25*o)));var d=h.color,p=new T;return r.config.plotOptions[e].enableShades&&(d=this.w.config.theme.mode==="dark"?T.hexToRgba(p.shadeColor(-1*l,h.color),r.config.fill.opacity):T.hexToRgba(p.shadeColor(l,h.color),r.config.fill.opacity)),{color:d,colorProps:h}}},{key:"determineColor",value:function(e,t,i){var a=this.w,r=a.globals.series[t][i],l=a.config.plotOptions[e],o=l.colorScale.inverse?i:t;l.distributed&&a.config.chart.type==="treemap"&&(o=i);var h=a.globals.colors[o],d=null,p=Math.min.apply(Math,K(a.globals.series[t])),x=Math.max.apply(Math,K(a.globals.series[t]));l.distributed||e!=="heatmap"||(p=a.globals.minY,x=a.globals.maxY),l.colorScale.min!==void 0&&(p=l.colorScale.min<a.globals.minY?l.colorScale.min:a.globals.minY,x=l.colorScale.max>a.globals.maxY?l.colorScale.max:a.globals.maxY);var b=Math.abs(x)+Math.abs(p),y=100*r/(b===0?b-1e-6:b);return l.colorScale.ranges.length>0&&l.colorScale.ranges.map(function(S,A){if(r>=S.from&&r<=S.to){h=S.color,d=S.foreColor?S.foreColor:null,p=S.from,x=S.to;var E=Math.abs(x)+Math.abs(p);y=100*r/(E===0?E-1e-6:E)}}),{color:h,foreColor:d,percent:y}}},{key:"calculateDataLabels",value:function(e){var t=e.text,i=e.x,a=e.y,r=e.i,l=e.j,o=e.colorProps,h=e.fontSize,d=this.w.config.dataLabels,p=new H(this.ctx),x=new Te(this.ctx),b=null;if(d.enabled){b=p.group({class:"apexcharts-data-labels"});var y=d.offsetX,S=d.offsetY,A=i+y,E=a+parseFloat(d.style.fontSize)/3+S;x.plotDataLabelsText({x:A,y:E,text:t,i:r,j:l,color:o.foreColor,parent:b,fontSize:h,dataLabelsConfig:d})}return b}},{key:"addListeners",value:function(e){var t=new H(this.ctx);e.node.addEventListener("mouseenter",t.pathMouseEnter.bind(this,e)),e.node.addEventListener("mouseleave",t.pathMouseLeave.bind(this,e)),e.node.addEventListener("mousedown",t.pathMouseDown.bind(this,e))}}]),L}(),Du=function(){function L(e,t){m(this,L),this.ctx=e,this.w=e.w,this.xRatio=t.xRatio,this.yRatio=t.yRatio,this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.helpers=new So(e),this.rectRadius=this.w.config.plotOptions.heatmap.radius,this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0}return k(L,[{key:"draw",value:function(e){var t=this.w,i=new H(this.ctx),a=i.group({class:"apexcharts-heatmap"});a.attr("clip-path","url(#gridRectMask".concat(t.globals.cuid,")"));var r=t.globals.gridWidth/t.globals.dataPoints,l=t.globals.gridHeight/t.globals.series.length,o=0,h=!1;this.negRange=this.helpers.checkColorRange();var d=e.slice();t.config.yaxis[0].reversed&&(h=!0,d.reverse());for(var p=h?0:d.length-1;h?p<d.length:p>=0;h?p++:p--){var x=i.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:T.escapeString(t.globals.seriesNames[p]),rel:p+1,"data:realIndex":p});if(this.ctx.series.addCollapsedClassToSeries(x,p),t.config.chart.dropShadow.enabled){var b=t.config.chart.dropShadow;new Z(this.ctx).dropShadow(x,b,p)}for(var y=0,S=t.config.plotOptions.heatmap.shadeIntensity,A=0;A<d[p].length;A++){var E=this.helpers.getShadeColor(t.config.chart.type,p,A,this.negRange),_=E.color,R=E.colorProps;t.config.fill.type==="image"&&(_=new ge(this.ctx).fillPath({seriesNumber:p,dataPointIndex:A,opacity:t.globals.hasNegs?R.percent<0?1-(1+R.percent/100):S+R.percent/100:R.percent/100,patternID:T.randomId(),width:t.config.fill.image.width?t.config.fill.image.width:r,height:t.config.fill.image.height?t.config.fill.image.height:l}));var F=this.rectRadius,f=i.drawRect(y,o,r,l,F);if(f.attr({cx:y,cy:o}),f.node.classList.add("apexcharts-heatmap-rect"),x.add(f),f.attr({fill:_,i:p,index:p,j:A,val:d[p][A],"stroke-width":this.strokeWidth,stroke:t.config.plotOptions.heatmap.useFillColorAsStroke?_:t.globals.stroke.colors[0],color:_}),this.helpers.addListeners(f),t.config.chart.animations.enabled&&!t.globals.dataChanged){var v=1;t.globals.resized||(v=t.config.chart.animations.speed),this.animateHeatMap(f,y,o,r,l,v)}if(t.globals.dataChanged){var C=1;if(this.dynamicAnim.enabled&&t.globals.shouldAnimate){C=this.dynamicAnim.speed;var M=t.globals.previousPaths[p]&&t.globals.previousPaths[p][A]&&t.globals.previousPaths[p][A].color;M||(M="rgba(255, 255, 255, 0)"),this.animateHeatColor(f,T.isColorHex(M)?M:T.rgb2hex(M),T.isColorHex(_)?_:T.rgb2hex(_),C)}}var X=(0,t.config.dataLabels.formatter)(t.globals.series[p][A],{value:t.globals.series[p][A],seriesIndex:p,dataPointIndex:A,w:t}),G=this.helpers.calculateDataLabels({text:X,x:y+r/2,y:o+l/2,i:p,j:A,colorProps:R,series:d});G!==null&&x.add(G),y+=r}o+=l,a.add(x)}var Y=t.globals.yAxisScale[0].result.slice();t.config.yaxis[0].reversed?Y.unshift(""):Y.push(""),t.globals.yAxisScale[0].result=Y;var re=t.globals.gridHeight/t.globals.series.length;return t.config.yaxis[0].labels.offsetY=-re/2,a}},{key:"animateHeatMap",value:function(e,t,i,a,r,l){var o=new j(this.ctx);o.animateRect(e,{x:t+a/2,y:i+r/2,width:0,height:0},{x:t,y:i,width:a,height:r},l,function(){o.animationCompleted(e)})}},{key:"animateHeatColor",value:function(e,t,i,a){e.attr({fill:t}).animate(a).attr({fill:i})}}]),L}(),Co=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"drawYAxisTexts",value:function(e,t,i,a){var r=this.w,l=r.config.yaxis[0],o=r.globals.yLabelFormatters[0];return new H(this.ctx).drawText({x:e+l.labels.offsetX,y:t+l.labels.offsetY,text:o(a,i),textAnchor:"middle",fontSize:l.labels.style.fontSize,fontFamily:l.labels.style.fontFamily,foreColor:Array.isArray(l.labels.style.colors)?l.labels.style.colors[i]:l.labels.style.colors})}}]),L}(),Eo=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w;var t=this.w;this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animBeginArr=[0],this.animDur=0,this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels,this.lineColorArr=t.globals.stroke.colors!==void 0?t.globals.stroke.colors:t.globals.colors,this.defaultSize=Math.min(t.globals.gridWidth,t.globals.gridHeight),this.centerY=this.defaultSize/2,this.centerX=t.globals.gridWidth/2,t.config.chart.type==="radialBar"?this.fullAngle=360:this.fullAngle=Math.abs(t.config.plotOptions.pie.endAngle-t.config.plotOptions.pie.startAngle),this.initialAngle=t.config.plotOptions.pie.startAngle%this.fullAngle,t.globals.radialSize=this.defaultSize/2.05-t.config.stroke.width-(t.config.chart.sparkline.enabled?0:t.config.chart.dropShadow.blur),this.donutSize=t.globals.radialSize*parseInt(t.config.plotOptions.pie.donut.size,10)/100,this.maxY=0,this.sliceLabels=[],this.sliceSizes=[],this.prevSectorAngleArr=[]}return k(L,[{key:"draw",value:function(e){var t=this,i=this.w,a=new H(this.ctx);if(this.ret=a.group({class:"apexcharts-pie"}),i.globals.noData)return this.ret;for(var r=0,l=0;l<e.length;l++)r+=T.negToZero(e[l]);var o=[],h=a.group();r===0&&(r=1e-5),e.forEach(function(M){t.maxY=Math.max(t.maxY,M)}),i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max),i.config.grid.position==="back"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret);for(var d=0;d<e.length;d++){var p=this.fullAngle*T.negToZero(e[d])/r;o.push(p),this.chartType==="polarArea"?(o[d]=this.fullAngle/e.length,this.sliceSizes.push(i.globals.radialSize*e[d]/this.maxY)):this.sliceSizes.push(i.globals.radialSize)}if(i.globals.dataChanged){for(var x,b=0,y=0;y<i.globals.previousPaths.length;y++)b+=T.negToZero(i.globals.previousPaths[y]);for(var S=0;S<i.globals.previousPaths.length;S++)x=this.fullAngle*T.negToZero(i.globals.previousPaths[S])/b,this.prevSectorAngleArr.push(x)}this.donutSize<0&&(this.donutSize=0);var A=i.config.plotOptions.pie.customScale,E=i.globals.gridWidth/2,_=i.globals.gridHeight/2,R=E-i.globals.gridWidth/2*A,F=_-i.globals.gridHeight/2*A;if(this.chartType==="donut"){var f=a.drawCircle(this.donutSize);f.attr({cx:this.centerX,cy:this.centerY,fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}),h.add(f)}var v=this.drawArcs(o,e);if(this.sliceLabels.forEach(function(M){v.add(M)}),h.attr({transform:"translate(".concat(R,", ").concat(F,") scale(").concat(A,")")}),h.add(v),this.ret.add(h),this.donutDataLabels.show){var C=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:R,translateY:F});this.ret.add(C)}return i.config.grid.position==="front"&&this.chartType==="polarArea"&&this.drawPolarElements(this.ret),this.ret}},{key:"drawArcs",value:function(e,t){var i=this.w,a=new Z(this.ctx),r=new H(this.ctx),l=new ge(this.ctx),o=r.group({class:"apexcharts-slices"}),h=this.initialAngle,d=this.initialAngle,p=this.initialAngle,x=this.initialAngle;this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0;for(var b=0;b<e.length;b++){var y=r.group({class:"apexcharts-series apexcharts-pie-series",seriesName:T.escapeString(i.globals.seriesNames[b]),rel:b+1,"data:realIndex":b});o.add(y),d=x,p=(h=p)+e[b],x=d+this.prevSectorAngleArr[b];var S=p<h?this.fullAngle+p-h:p-h,A=l.fillPath({seriesNumber:b,size:this.sliceSizes[b],value:t[b]}),E=this.getChangedPath(d,x),_=r.drawPath({d:E,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[b]:this.lineColorArr,strokeWidth:0,fill:A,fillOpacity:i.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(b)});if(_.attr({index:0,j:b}),a.setSelectionFilter(_,0,b),i.config.chart.dropShadow.enabled){var R=i.config.chart.dropShadow;a.dropShadow(_,R,b)}this.addListeners(_,this.donutDataLabels),H.setAttrs(_.node,{"data:angle":S,"data:startAngle":h,"data:strokeWidth":this.strokeWidth,"data:value":t[b]});var F={x:0,y:0};this.chartType==="pie"||this.chartType==="polarArea"?F=T.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset,(h+S/2)%this.fullAngle):this.chartType==="donut"&&(F=T.polarToCartesian(this.centerX,this.centerY,(i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset,(h+S/2)%this.fullAngle)),y.add(_);var f=0;if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0):((f=S/this.fullAngle*i.config.chart.animations.speed)===0&&(f=1),this.animDur=f+this.animDur,this.animBeginArr.push(this.animDur)),this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(_,{size:this.sliceSizes[b],endAngle:p,startAngle:h,prevStartAngle:d,prevEndAngle:x,animateStartingPos:!0,i:b,animBeginArr:this.animBeginArr,shouldSetPrevPaths:!0,dur:i.config.chart.animations.dynamicAnimation.speed}):this.animatePaths(_,{size:this.sliceSizes[b],endAngle:p,startAngle:h,i:b,totalItems:e.length-1,animBeginArr:this.animBeginArr,dur:f}),i.config.plotOptions.pie.expandOnClick&&this.chartType!=="polarArea"&&_.click(this.pieClicked.bind(this,b)),i.globals.selectedDataPoints[0]!==void 0&&i.globals.selectedDataPoints[0].indexOf(b)>-1&&this.pieClicked(b),i.config.dataLabels.enabled){var v=F.x,C=F.y,M=100*S/this.fullAngle+"%";if(S!==0&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<e[b]){var X=i.config.dataLabels.formatter;X!==void 0&&(M=X(i.globals.seriesPercent[b][0],{seriesIndex:b,w:i}));var G=i.globals.dataLabels.style.colors[b],Y=r.group({class:"apexcharts-datalabels"}),re=r.drawText({x:v,y:C,text:M,textAnchor:"middle",fontSize:i.config.dataLabels.style.fontSize,fontFamily:i.config.dataLabels.style.fontFamily,fontWeight:i.config.dataLabels.style.fontWeight,foreColor:G});if(Y.add(re),i.config.dataLabels.dropShadow.enabled){var te=i.config.dataLabels.dropShadow;a.dropShadow(re,te)}re.node.classList.add("apexcharts-pie-label"),i.config.chart.animations.animate&&i.globals.resized===!1&&(re.node.classList.add("apexcharts-pie-label-delay"),re.node.style.animationDelay=i.config.chart.animations.speed/940+"s"),this.sliceLabels.push(Y)}}}return o}},{key:"addListeners",value:function(e,t){var i=new H(this.ctx);e.node.addEventListener("mouseenter",i.pathMouseEnter.bind(this,e)),e.node.addEventListener("mouseleave",i.pathMouseLeave.bind(this,e)),e.node.addEventListener("mouseleave",this.revertDataLabelsInner.bind(this,e.node,t)),e.node.addEventListener("mousedown",i.pathMouseDown.bind(this,e)),this.donutDataLabels.total.showAlways||(e.node.addEventListener("mouseenter",this.printDataLabelsInner.bind(this,e.node,t)),e.node.addEventListener("mousedown",this.printDataLabelsInner.bind(this,e.node,t)))}},{key:"animatePaths",value:function(e,t){var i=this.w,a=t.endAngle<t.startAngle?this.fullAngle+t.endAngle-t.startAngle:t.endAngle-t.startAngle,r=a,l=t.startAngle,o=t.startAngle;t.prevStartAngle!==void 0&&t.prevEndAngle!==void 0&&(l=t.prevEndAngle,r=t.prevEndAngle<t.prevStartAngle?this.fullAngle+t.prevEndAngle-t.prevStartAngle:t.prevEndAngle-t.prevStartAngle),t.i===i.config.series.length-1&&(a+o>this.fullAngle?t.endAngle=t.endAngle-(a+o):a+o<this.fullAngle&&(t.endAngle=t.endAngle+(this.fullAngle-(a+o)))),a===this.fullAngle&&(a=this.fullAngle-.01),this.animateArc(e,l,o,a,r,t)}},{key:"animateArc",value:function(e,t,i,a,r,l){var o,h=this,d=this.w,p=new j(this.ctx),x=l.size;(isNaN(t)||isNaN(r))&&(t=i,r=a,l.dur=0);var b=a,y=i,S=t<i?this.fullAngle+t-i:t-i;d.globals.dataChanged&&l.shouldSetPrevPaths&&l.prevEndAngle&&(o=h.getPiePath({me:h,startAngle:l.prevStartAngle,angle:l.prevEndAngle<l.prevStartAngle?this.fullAngle+l.prevEndAngle-l.prevStartAngle:l.prevEndAngle-l.prevStartAngle,size:x}),e.attr({d:o})),l.dur!==0?e.animate(l.dur,d.globals.easing,l.animBeginArr[l.i]).afterAll(function(){h.chartType!=="pie"&&h.chartType!=="donut"&&h.chartType!=="polarArea"||this.animate(d.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width":h.strokeWidth}),l.i===d.config.series.length-1&&p.animationCompleted(e)}).during(function(A){b=S+(a-S)*A,l.animateStartingPos&&(b=r+(a-r)*A,y=t-r+(i-(t-r))*A),o=h.getPiePath({me:h,startAngle:y,angle:b,size:x}),e.node.setAttribute("data:pathOrig",o),e.attr({d:o})}):(o=h.getPiePath({me:h,startAngle:y,angle:a,size:x}),l.isTrack||(d.globals.animationEnded=!0),e.node.setAttribute("data:pathOrig",o),e.attr({d:o,"stroke-width":h.strokeWidth}))}},{key:"pieClicked",value:function(e){var t,i=this.w,a=this,r=a.sliceSizes[e]+(i.config.plotOptions.pie.expandOnClick?4:0),l=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(),"-slice-").concat(e)).members[0];if(l.attr("data:pieClicked")!=="true"){var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");Array.prototype.forEach.call(o,function(x){x.setAttribute("data:pieClicked","false");var b=x.getAttribute("data:pathOrig");x.setAttribute("d",b)}),l.attr("data:pieClicked","true");var h=parseInt(l.attr("data:startAngle"),10),d=parseInt(l.attr("data:angle"),10);t=a.getPiePath({me:a,startAngle:h,angle:d,size:r}),d!==360&&l.plot(t)}else{l.attr({"data:pieClicked":"false"}),this.revertDataLabelsInner(l.node,this.donutDataLabels);var p=l.attr("data:pathOrig");l.attr({d:p})}}},{key:"getChangedPath",value:function(e,t){var i="";return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath({me:this,startAngle:e,angle:t-e,size:this.size})),i}},{key:"getPiePath",value:function(e){var t=e.me,i=e.startAngle,a=e.angle,r=e.size,l=i,o=Math.PI*(l-90)/180,h=a+i;Math.ceil(h)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(h=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01),Math.ceil(h)>this.fullAngle&&(h-=this.fullAngle);var d=Math.PI*(h-90)/180,p=t.centerX+r*Math.cos(o),x=t.centerY+r*Math.sin(o),b=t.centerX+r*Math.cos(d),y=t.centerY+r*Math.sin(d),S=T.polarToCartesian(t.centerX,t.centerY,t.donutSize,h),A=T.polarToCartesian(t.centerX,t.centerY,t.donutSize,l),E=a>180?1:0,_=["M",p,x,"A",r,r,0,E,1,b,y];return t.chartType==="donut"?[].concat(_,["L",S.x,S.y,"A",t.donutSize,t.donutSize,0,E,0,A.x,A.y,"L",p,x,"z"]).join(" "):t.chartType==="pie"||t.chartType==="polarArea"?[].concat(_,["L",t.centerX,t.centerY,"L",p,x]).join(" "):[].concat(_).join(" ")}},{key:"drawPolarElements",value:function(e){var t=this.w,i=new B(this.ctx),a=new H(this.ctx),r=new Co(this.ctx),l=a.group(),o=a.group(),h=i.niceScale(0,Math.ceil(this.maxY),t.config.yaxis[0].tickAmount,0,!0),d=h.result.reverse(),p=h.result.length;this.maxY=h.niceMax;for(var x=t.globals.radialSize,b=x/(p-1),y=0;y<p-1;y++){var S=a.drawCircle(x);if(S.attr({cx:this.centerX,cy:this.centerY,fill:"none","stroke-width":t.config.plotOptions.polarArea.rings.strokeWidth,stroke:t.config.plotOptions.polarArea.rings.strokeColor}),t.config.yaxis[0].show){var A=r.drawYAxisTexts(this.centerX,this.centerY-x+parseInt(t.config.yaxis[0].labels.style.fontSize,10)/2,y,d[y]);o.add(A)}l.add(S),x-=b}this.drawSpokes(e),e.add(l),e.add(o)}},{key:"renderInnerDataLabels",value:function(e,t){var i=this.w,a=new H(this.ctx),r=a.group({class:"apexcharts-datalabels-group",transform:"translate(".concat(t.translateX?t.translateX:0,", ").concat(t.translateY?t.translateY:0,") scale(").concat(i.config.plotOptions.pie.customScale,")")}),l=e.total.show;r.node.style.opacity=t.opacity;var o,h,d=t.centerX,p=t.centerY;o=e.name.color===void 0?i.globals.colors[0]:e.name.color;var x=e.name.fontSize,b=e.name.fontFamily,y=e.name.fontWeight;h=e.value.color===void 0?i.config.chart.foreColor:e.value.color;var S=e.value.formatter,A="",E="";if(l?(o=e.total.color,x=e.total.fontSize,b=e.total.fontFamily,y=e.total.fontWeight,E=e.total.label,A=e.total.formatter(i)):i.globals.series.length===1&&(A=S(i.globals.series[0],i),E=i.globals.seriesNames[0]),E&&(E=e.name.formatter(E,e.total.show,i)),e.name.show){var _=a.drawText({x:d,y:p+parseFloat(e.name.offsetY),text:E,textAnchor:"middle",foreColor:o,fontSize:x,fontWeight:y,fontFamily:b});_.node.classList.add("apexcharts-datalabel-label"),r.add(_)}if(e.value.show){var R=e.name.show?parseFloat(e.value.offsetY)+16:e.value.offsetY,F=a.drawText({x:d,y:p+R,text:A,textAnchor:"middle",foreColor:h,fontWeight:e.value.fontWeight,fontSize:e.value.fontSize,fontFamily:e.value.fontFamily});F.node.classList.add("apexcharts-datalabel-value"),r.add(F)}return r}},{key:"printInnerLabels",value:function(e,t,i,a){var r,l=this.w;a?r=e.name.color===void 0?l.globals.colors[parseInt(a.parentNode.getAttribute("rel"),10)-1]:e.name.color:l.globals.series.length>1&&e.total.show&&(r=e.total.color);var o=l.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),h=l.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");i=(0,e.value.formatter)(i,l),a||typeof e.total.formatter!="function"||(i=e.total.formatter(l));var d=t===e.total.label;t=e.name.formatter(t,d,l),o!==null&&(o.textContent=t),h!==null&&(h.textContent=i),o!==null&&(o.style.fill=r)}},{key:"printDataLabelsInner",value:function(e,t){var i=this.w,a=e.getAttribute("data:value"),r=i.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"),10)-1];i.globals.series.length>1&&this.printInnerLabels(t,r,a,e);var l=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");l!==null&&(l.style.opacity=1)}},{key:"drawSpokes",value:function(e){var t=this,i=this.w,a=new H(this.ctx),r=i.config.plotOptions.polarArea.spokes;if(r.strokeWidth!==0){for(var l=[],o=360/i.globals.series.length,h=0;h<i.globals.series.length;h++)l.push(T.polarToCartesian(this.centerX,this.centerY,i.globals.radialSize,i.config.plotOptions.pie.startAngle+o*h));l.forEach(function(d,p){var x=a.drawLine(d.x,d.y,t.centerX,t.centerY,Array.isArray(r.connectorColors)?r.connectorColors[p]:r.connectorColors);e.add(x)})}}},{key:"revertDataLabelsInner",value:function(e,t,i){var a=this,r=this.w,l=r.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),o=!1,h=r.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),d=function(b){var y=b.makeSliceOut,S=b.printLabel;Array.prototype.forEach.call(h,function(A){A.getAttribute("data:pieClicked")==="true"&&(y&&(o=!0),S&&a.printDataLabelsInner(A,t))})};if(d({makeSliceOut:!0,printLabel:!1}),t.total.show&&r.globals.series.length>1)o&&!t.total.showAlways?d({makeSliceOut:!1,printLabel:!0}):this.printInnerLabels(t,t.total.label,t.total.formatter(r));else if(d({makeSliceOut:!1,printLabel:!0}),!o)if(r.globals.selectedDataPoints.length&&r.globals.series.length>1)if(r.globals.selectedDataPoints[0].length>0){var p=r.globals.selectedDataPoints[0],x=r.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(p));this.printDataLabelsInner(x,t)}else l&&r.globals.selectedDataPoints.length&&r.globals.selectedDataPoints[0].length===0&&(l.style.opacity=0);else l&&r.globals.series.length>1&&(l.style.opacity=0)}}]),L}(),Xu=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.chartType=this.w.config.chart.type,this.initialAnim=this.w.config.chart.animations.enabled,this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled,this.animDur=0;var t=this.w;this.graphics=new H(this.ctx),this.lineColorArr=t.globals.stroke.colors!==void 0?t.globals.stroke.colors:t.globals.colors,this.defaultSize=t.globals.svgHeight<t.globals.svgWidth?t.globals.gridHeight+1.5*t.globals.goldenPadding:t.globals.gridWidth,this.isLog=t.config.yaxis[0].logarithmic,this.coreUtils=new ce(this.ctx),this.maxValue=this.isLog?this.coreUtils.getLogVal(t.globals.maxY,0):t.globals.maxY,this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY,0):t.globals.minY,this.polygons=t.config.plotOptions.radar.polygons,this.strokeWidth=t.config.stroke.show?t.config.stroke.width:0,this.size=this.defaultSize/2.1-this.strokeWidth-t.config.chart.dropShadow.blur,t.config.xaxis.labels.show&&(this.size=this.size-t.globals.xAxisLabelsWidth/1.75),t.config.plotOptions.radar.size!==void 0&&(this.size=t.config.plotOptions.radar.size),this.dataRadiusOfPercent=[],this.dataRadius=[],this.angleArr=[],this.yaxisLabelsTextsPos=[]}return k(L,[{key:"draw",value:function(e){var t=this,i=this.w,a=new ge(this.ctx),r=[],l=new Te(this.ctx);e.length&&(this.dataPointsLen=e[i.globals.maxValsInArrayIndex].length),this.disAngle=2*Math.PI/this.dataPointsLen;var o=i.globals.gridWidth/2,h=i.globals.gridHeight/2,d=o+i.config.plotOptions.radar.offsetX,p=h+i.config.plotOptions.radar.offsetY,x=this.graphics.group({class:"apexcharts-radar-series apexcharts-plot-series",transform:"translate(".concat(d||0,", ").concat(p||0,")")}),b=[],y=null,S=null;if(this.yaxisLabels=this.graphics.group({class:"apexcharts-yaxis"}),e.forEach(function(E,_){var R=E.length===i.globals.dataPoints,F=t.graphics.group().attr({class:"apexcharts-series","data:longestSeries":R,seriesName:T.escapeString(i.globals.seriesNames[_]),rel:_+1,"data:realIndex":_});t.dataRadiusOfPercent[_]=[],t.dataRadius[_]=[],t.angleArr[_]=[],E.forEach(function(pe,Ce){var Je=Math.abs(t.maxValue-t.minValue);pe+=Math.abs(t.minValue),t.isLog&&(pe=t.coreUtils.getLogVal(pe,0)),t.dataRadiusOfPercent[_][Ce]=pe/Je,t.dataRadius[_][Ce]=t.dataRadiusOfPercent[_][Ce]*t.size,t.angleArr[_][Ce]=Ce*t.disAngle}),b=t.getDataPointsPos(t.dataRadius[_],t.angleArr[_]);var f=t.createPaths(b,{x:0,y:0});y=t.graphics.group({class:"apexcharts-series-markers-wrap apexcharts-element-hidden"}),S=t.graphics.group({class:"apexcharts-datalabels","data:realIndex":_}),i.globals.delayedElements.push({el:y.node,index:_});var v={i:_,realIndex:_,animationDelay:_,initialSpeed:i.config.chart.animations.speed,dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:!1,bindEventsOnPaths:!1,stroke:i.globals.stroke.colors[_],strokeLineCap:i.config.stroke.lineCap},C=null;i.globals.previousPaths.length>0&&(C=t.getPreviousPath(_));for(var M=0;M<f.linePathsTo.length;M++){var X=t.graphics.renderPaths(u(u({},v),{},{pathFrom:C===null?f.linePathsFrom[M]:C,pathTo:f.linePathsTo[M],strokeWidth:Array.isArray(t.strokeWidth)?t.strokeWidth[_]:t.strokeWidth,fill:"none",drawShadow:!1}));F.add(X);var G=a.fillPath({seriesNumber:_}),Y=t.graphics.renderPaths(u(u({},v),{},{pathFrom:C===null?f.areaPathsFrom[M]:C,pathTo:f.areaPathsTo[M],strokeWidth:0,fill:G,drawShadow:!1}));if(i.config.chart.dropShadow.enabled){var re=new Z(t.ctx),te=i.config.chart.dropShadow;re.dropShadow(Y,Object.assign({},te,{noUserSpaceOnUse:!0}),_)}F.add(Y)}E.forEach(function(pe,Ce){var Je=new Ve(t.ctx).getMarkerConfig({cssClass:"apexcharts-marker",seriesIndex:_,dataPointIndex:Ce}),He=t.graphics.drawMarker(b[Ce].x,b[Ce].y,Je);He.attr("rel",Ce),He.attr("j",Ce),He.attr("index",_),He.node.setAttribute("default-marker-size",Je.pSize);var ft=t.graphics.group({class:"apexcharts-series-markers"});ft&&ft.add(He),y.add(ft),F.add(y);var wt=i.config.dataLabels;if(wt.enabled){var Xt=wt.formatter(i.globals.series[_][Ce],{seriesIndex:_,dataPointIndex:Ce,w:i});l.plotDataLabelsText({x:b[Ce].x,y:b[Ce].y,text:Xt,textAnchor:"middle",i:_,j:_,parent:S,offsetCorrection:!1,dataLabelsConfig:u({},wt)})}F.add(S)}),r.push(F)}),this.drawPolygons({parent:x}),i.config.xaxis.labels.show){var A=this.drawXAxisTexts();x.add(A)}return r.forEach(function(E){x.add(E)}),x.add(this.yaxisLabels),x}},{key:"drawPolygons",value:function(e){for(var t=this,i=this.w,a=e.parent,r=new Co(this.ctx),l=i.globals.yAxisScale[0].result.reverse(),o=l.length,h=[],d=this.size/(o-1),p=0;p<o;p++)h[p]=d*p;h.reverse();var x=[],b=[];h.forEach(function(y,S){var A=T.getPolygonPos(y,t.dataPointsLen),E="";A.forEach(function(_,R){if(S===0){var F=t.graphics.drawLine(_.x,_.y,0,0,Array.isArray(t.polygons.connectorColors)?t.polygons.connectorColors[R]:t.polygons.connectorColors);b.push(F)}R===0&&t.yaxisLabelsTextsPos.push({x:_.x,y:_.y}),E+=_.x+","+_.y+" "}),x.push(E)}),x.forEach(function(y,S){var A=t.polygons.strokeColors,E=t.polygons.strokeWidth,_=t.graphics.drawPolygon(y,Array.isArray(A)?A[S]:A,Array.isArray(E)?E[S]:E,i.globals.radarPolygons.fill.colors[S]);a.add(_)}),b.forEach(function(y){a.add(y)}),i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach(function(y,S){var A=r.drawYAxisTexts(y.x,y.y,S,l[S]);t.yaxisLabels.add(A)})}},{key:"drawXAxisTexts",value:function(){var e=this,t=this.w,i=t.config.xaxis.labels,a=this.graphics.group({class:"apexcharts-xaxis"}),r=T.getPolygonPos(this.size,this.dataPointsLen);return t.globals.labels.forEach(function(l,o){var h=t.config.xaxis.labels.formatter,d=new Te(e.ctx);if(r[o]){var p=e.getTextPos(r[o],e.size),x=h(l,{seriesIndex:-1,dataPointIndex:o,w:t});d.plotDataLabelsText({x:p.newX,y:p.newY,text:x,textAnchor:p.textAnchor,i:o,j:o,parent:a,color:Array.isArray(i.style.colors)&&i.style.colors[o]?i.style.colors[o]:"#a8a8a8",dataLabelsConfig:u({textAnchor:p.textAnchor,dropShadow:{enabled:!1}},i),offsetCorrection:!1})}}),a}},{key:"createPaths",value:function(e,t){var i=this,a=[],r=[],l=[],o=[];if(e.length){r=[this.graphics.move(t.x,t.y)],o=[this.graphics.move(t.x,t.y)];var h=this.graphics.move(e[0].x,e[0].y),d=this.graphics.move(e[0].x,e[0].y);e.forEach(function(p,x){h+=i.graphics.line(p.x,p.y),d+=i.graphics.line(p.x,p.y),x===e.length-1&&(h+="Z",d+="Z")}),a.push(h),l.push(d)}return{linePathsFrom:r,linePathsTo:a,areaPathsFrom:o,areaPathsTo:l}}},{key:"getTextPos",value:function(e,t){var i="middle",a=e.x,r=e.y;return Math.abs(e.x)>=10?e.x>0?(i="start",a+=10):e.x<0&&(i="end",a-=10):i="middle",Math.abs(e.y)>=t-10&&(e.y<0?r-=10:e.y>0&&(r+=10)),{textAnchor:i,newX:a,newY:r}}},{key:"getPreviousPath",value:function(e){for(var t=this.w,i=null,a=0;a<t.globals.previousPaths.length;a++){var r=t.globals.previousPaths[a];r.paths.length>0&&parseInt(r.realIndex,10)===parseInt(e,10)&&t.globals.previousPaths[a].paths[0]!==void 0&&(i=t.globals.previousPaths[a].paths[0].d)}return i}},{key:"getDataPointsPos",value:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.dataPointsLen;e=e||[],t=t||[];for(var a=[],r=0;r<i;r++){var l={};l.x=e[r]*Math.sin(t[r]),l.y=-e[r]*Math.cos(t[r]),a.push(l)}return a}}]),L}(),Hu=function(L){I(t,Eo);var e=W(t);function t(i){var a;m(this,t),(a=e.call(this,i)).ctx=i,a.w=i.w,a.animBeginArr=[0],a.animDur=0;var r=a.w;return a.startAngle=r.config.plotOptions.radialBar.startAngle,a.endAngle=r.config.plotOptions.radialBar.endAngle,a.totalAngle=Math.abs(r.config.plotOptions.radialBar.endAngle-r.config.plotOptions.radialBar.startAngle),a.trackStartAngle=r.config.plotOptions.radialBar.track.startAngle,a.trackEndAngle=r.config.plotOptions.radialBar.track.endAngle,a.donutDataLabels=a.w.config.plotOptions.radialBar.dataLabels,a.radialDataLabels=a.donutDataLabels,a.trackStartAngle||(a.trackStartAngle=a.startAngle),a.trackEndAngle||(a.trackEndAngle=a.endAngle),a.endAngle===360&&(a.endAngle=359.99),a.margin=parseInt(r.config.plotOptions.radialBar.track.margin,10),a}return k(t,[{key:"draw",value:function(i){var a=this.w,r=new H(this.ctx),l=r.group({class:"apexcharts-radialbar"});if(a.globals.noData)return l;var o=r.group(),h=this.defaultSize/2,d=a.globals.gridWidth/2,p=this.defaultSize/2.05;a.config.chart.sparkline.enabled||(p=p-a.config.stroke.width-a.config.chart.dropShadow.blur);var x=a.globals.fill.colors;if(a.config.plotOptions.radialBar.track.show){var b=this.drawTracks({size:p,centerX:d,centerY:h,colorArr:x,series:i});o.add(b)}var y=this.drawArcs({size:p,centerX:d,centerY:h,colorArr:x,series:i}),S=360;a.config.plotOptions.radialBar.startAngle<0&&(S=this.totalAngle);var A=(360-S)/360;if(a.globals.radialSize=p-p*A,this.radialDataLabels.value.show){var E=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);a.globals.radialSize+=E*A}return o.add(y.g),a.config.plotOptions.radialBar.hollow.position==="front"&&(y.g.add(y.elHollow),y.dataLabels&&y.g.add(y.dataLabels)),l.add(o),l}},{key:"drawTracks",value:function(i){var a=this.w,r=new H(this.ctx),l=r.group({class:"apexcharts-tracks"}),o=new Z(this.ctx),h=new ge(this.ctx),d=this.getStrokeWidth(i);i.size=i.size-d/2;for(var p=0;p<i.series.length;p++){var x=r.group({class:"apexcharts-radialbar-track apexcharts-track"});l.add(x),x.attr({rel:p+1}),i.size=i.size-d-this.margin;var b=a.config.plotOptions.radialBar.track,y=h.fillPath({seriesNumber:0,size:i.size,fillColors:Array.isArray(b.background)?b.background[p]:b.background,solid:!0}),S=this.trackStartAngle,A=this.trackEndAngle;Math.abs(A)+Math.abs(S)>=360&&(A=360-Math.abs(this.startAngle)-.1);var E=r.drawPath({d:"",stroke:y,strokeWidth:d*parseInt(b.strokeWidth,10)/100,fill:"none",strokeOpacity:b.opacity,classes:"apexcharts-radialbar-area"});if(b.dropShadow.enabled){var _=b.dropShadow;o.dropShadow(E,_)}x.add(E),E.attr("id","apexcharts-radialbarTrack-"+p),this.animatePaths(E,{centerX:i.centerX,centerY:i.centerY,endAngle:A,startAngle:S,size:i.size,i:p,totalItems:2,animBeginArr:0,dur:0,isTrack:!0,easing:a.globals.easing})}return l}},{key:"drawArcs",value:function(i){var a=this.w,r=new H(this.ctx),l=new ge(this.ctx),o=new Z(this.ctx),h=r.group(),d=this.getStrokeWidth(i);i.size=i.size-d/2;var p=a.config.plotOptions.radialBar.hollow.background,x=i.size-d*i.series.length-this.margin*i.series.length-d*parseInt(a.config.plotOptions.radialBar.track.strokeWidth,10)/100/2,b=x-a.config.plotOptions.radialBar.hollow.margin;a.config.plotOptions.radialBar.hollow.image!==void 0&&(p=this.drawHollowImage(i,h,x,p));var y=this.drawHollow({size:b,centerX:i.centerX,centerY:i.centerY,fill:p||"transparent"});if(a.config.plotOptions.radialBar.hollow.dropShadow.enabled){var S=a.config.plotOptions.radialBar.hollow.dropShadow;o.dropShadow(y,S)}var A=1;!this.radialDataLabels.total.show&&a.globals.series.length>1&&(A=0);var E=null;this.radialDataLabels.show&&(E=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:x,centerX:i.centerX,centerY:i.centerY,opacity:A})),a.config.plotOptions.radialBar.hollow.position==="back"&&(h.add(y),E&&h.add(E));var _=!1;a.config.plotOptions.radialBar.inverseOrder&&(_=!0);for(var R=_?i.series.length-1:0;_?R>=0:R<i.series.length;_?R--:R++){var F=r.group({class:"apexcharts-series apexcharts-radial-series",seriesName:T.escapeString(a.globals.seriesNames[R])});h.add(F),F.attr({rel:R+1,"data:realIndex":R}),this.ctx.series.addCollapsedClassToSeries(F,R),i.size=i.size-d-this.margin;var f=l.fillPath({seriesNumber:R,size:i.size,value:i.series[R]}),v=this.startAngle,C=void 0,M=T.negToZero(i.series[R]>100?100:i.series[R])/100,X=Math.round(this.totalAngle*M)+this.startAngle,G=void 0;a.globals.dataChanged&&(C=this.startAngle,G=Math.round(this.totalAngle*T.negToZero(a.globals.previousPaths[R])/100)+C),Math.abs(X)+Math.abs(v)>=360&&(X-=.01),Math.abs(G)+Math.abs(C)>=360&&(G-=.01);var Y=X-v,re=Array.isArray(a.config.stroke.dashArray)?a.config.stroke.dashArray[R]:a.config.stroke.dashArray,te=r.drawPath({d:"",stroke:f,strokeWidth:d,fill:"none",fillOpacity:a.config.fill.opacity,classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+R,strokeDashArray:re});if(H.setAttrs(te.node,{"data:angle":Y,"data:value":i.series[R]}),a.config.chart.dropShadow.enabled){var pe=a.config.chart.dropShadow;o.dropShadow(te,pe,R)}o.setSelectionFilter(te,0,R),this.addListeners(te,this.radialDataLabels),F.add(te),te.attr({index:0,j:R});var Ce=0;!this.initialAnim||a.globals.resized||a.globals.dataChanged||(Ce=a.config.chart.animations.speed),a.globals.dataChanged&&(Ce=a.config.chart.animations.dynamicAnimation.speed),this.animDur=Ce/(1.2*i.series.length)+this.animDur,this.animBeginArr.push(this.animDur),this.animatePaths(te,{centerX:i.centerX,centerY:i.centerY,endAngle:X,startAngle:v,prevEndAngle:G,prevStartAngle:C,size:i.size,i:R,totalItems:2,animBeginArr:this.animBeginArr,dur:Ce,shouldSetPrevPaths:!0,easing:a.globals.easing})}return{g:h,elHollow:y,dataLabels:E}}},{key:"drawHollow",value:function(i){var a=new H(this.ctx).drawCircle(2*i.size);return a.attr({class:"apexcharts-radialbar-hollow",cx:i.centerX,cy:i.centerY,r:i.size,fill:i.fill}),a}},{key:"drawHollowImage",value:function(i,a,r,l){var o=this.w,h=new ge(this.ctx),d=T.randomId(),p=o.config.plotOptions.radialBar.hollow.image;if(o.config.plotOptions.radialBar.hollow.imageClipped)h.clippedImgArea({width:r,height:r,image:p,patternID:"pattern".concat(o.globals.cuid).concat(d)}),l="url(#pattern".concat(o.globals.cuid).concat(d,")");else{var x=o.config.plotOptions.radialBar.hollow.imageWidth,b=o.config.plotOptions.radialBar.hollow.imageHeight;if(x===void 0&&b===void 0){var y=o.globals.dom.Paper.image(p).loaded(function(A){this.move(i.centerX-A.width/2+o.config.plotOptions.radialBar.hollow.imageOffsetX,i.centerY-A.height/2+o.config.plotOptions.radialBar.hollow.imageOffsetY)});a.add(y)}else{var S=o.globals.dom.Paper.image(p).loaded(function(A){this.move(i.centerX-x/2+o.config.plotOptions.radialBar.hollow.imageOffsetX,i.centerY-b/2+o.config.plotOptions.radialBar.hollow.imageOffsetY),this.size(x,b)});a.add(S)}}return l}},{key:"getStrokeWidth",value:function(i){var a=this.w;return i.size*(100-parseInt(a.config.plotOptions.radialBar.hollow.size,10))/100/(i.series.length+1)-this.margin}}]),t}(),Yu=function(){function L(e){m(this,L),this.w=e.w,this.lineCtx=e}return k(L,[{key:"sameValueSeriesFix",value:function(e,t){var i=this.w;if(i.config.chart.type==="line"&&(i.config.fill.type==="gradient"||i.config.fill.type[e]==="gradient")&&new ce(this.lineCtx.ctx,i).seriesHaveSameValues(e)){var a=t[e].slice();a[a.length-1]=a[a.length-1]+1e-6,t[e]=a}return t}},{key:"calculatePoints",value:function(e){var t=e.series,i=e.realIndex,a=e.x,r=e.y,l=e.i,o=e.j,h=e.prevY,d=this.w,p=[],x=[];if(o===0){var b=this.lineCtx.categoryAxisCorrection+d.config.markers.offsetX;d.globals.isXNumeric&&(b=(d.globals.seriesX[i][0]-d.globals.minX)/this.lineCtx.xRatio+d.config.markers.offsetX),p.push(b),x.push(T.isNumber(t[l][0])?h+d.config.markers.offsetY:null),p.push(a+d.config.markers.offsetX),x.push(T.isNumber(t[l][o+1])?r+d.config.markers.offsetY:null)}else p.push(a+d.config.markers.offsetX),x.push(T.isNumber(t[l][o+1])?r+d.config.markers.offsetY:null);return{x:p,y:x}}},{key:"checkPreviousPaths",value:function(e){for(var t=e.pathFromLine,i=e.pathFromArea,a=e.realIndex,r=this.w,l=0;l<r.globals.previousPaths.length;l++){var o=r.globals.previousPaths[l];(o.type==="line"||o.type==="area")&&o.paths.length>0&&parseInt(o.realIndex,10)===parseInt(a,10)&&(o.type==="line"?(this.lineCtx.appendPathFrom=!1,t=r.globals.previousPaths[l].paths[0].d):o.type==="area"&&(this.lineCtx.appendPathFrom=!1,i=r.globals.previousPaths[l].paths[0].d,r.config.stroke.show&&r.globals.previousPaths[l].paths[1]&&(t=r.globals.previousPaths[l].paths[1].d)))}return{pathFromLine:t,pathFromArea:i}}},{key:"determineFirstPrevY",value:function(e){var t=e.i,i=e.series,a=e.prevY,r=e.lineYPosition,l=this.w;if(i[t][0]!==void 0)a=(r=l.config.chart.stacked&&t>0?this.lineCtx.prevSeriesY[t-1][0]:this.lineCtx.zeroY)-i[t][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[t][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);else if(l.config.chart.stacked&&t>0&&i[t][0]===void 0){for(var o=t-1;o>=0;o--)if(i[o][0]!==null&&i[o][0]!==void 0){a=r=this.lineCtx.prevSeriesY[o][0];break}}return{prevY:a,lineYPosition:r}}}]),L}(),Cr=function(){function L(e,t,i){m(this,L),this.ctx=e,this.w=e.w,this.xyRatios=t,this.pointsChart=!(this.w.config.chart.type!=="bubble"&&this.w.config.chart.type!=="scatter")||i,this.scatter=new Le(this.ctx),this.noNegatives=this.w.globals.minX===Number.MAX_VALUE,this.lineHelpers=new Yu(this),this.markers=new Ve(this.ctx),this.prevSeriesY=[],this.categoryAxisCorrection=0,this.yaxisIndex=0}return k(L,[{key:"draw",value:function(e,t,i){var a=this.w,r=new H(this.ctx),l=a.globals.comboCharts?t:a.config.chart.type,o=r.group({class:"apexcharts-".concat(l,"-series apexcharts-plot-series")}),h=new ce(this.ctx,a);this.yRatio=this.xyRatios.yRatio,this.zRatio=this.xyRatios.zRatio,this.xRatio=this.xyRatios.xRatio,this.baseLineY=this.xyRatios.baseLineY,e=h.getLogSeries(e),this.yRatio=h.getLogYRatios(this.yRatio);for(var d=[],p=0;p<e.length;p++){e=this.lineHelpers.sameValueSeriesFix(p,e);var x=a.globals.comboCharts?i[p]:p;this._initSerieVariables(e,p,x);var b=[],y=[],S=a.globals.padHorizontal+this.categoryAxisCorrection;this.ctx.series.addCollapsedClassToSeries(this.elSeries,x),a.globals.isXNumeric&&a.globals.seriesX.length>0&&(S=(a.globals.seriesX[x][0]-a.globals.minX)/this.xRatio),y.push(S);var A,E=S,_=E,R=this.zeroY;R=this.lineHelpers.determineFirstPrevY({i:p,series:e,prevY:R,lineYPosition:0}).prevY,b.push(R),A=R;var F=this._calculatePathsFrom({series:e,i:p,realIndex:x,prevX:_,prevY:R}),f=this._iterateOverDataPoints({series:e,realIndex:x,i:p,x:S,y:1,pX:E,pY:A,pathsFrom:F,linePaths:[],areaPaths:[],seriesIndex:i,lineYPosition:0,xArrj:y,yArrj:b});this._handlePaths({type:l,realIndex:x,i:p,paths:f}),this.elSeries.add(this.elPointsMain),this.elSeries.add(this.elDataLabelsWrap),d.push(this.elSeries)}if(a.config.chart.stacked)for(var v=d.length;v>0;v--)o.add(d[v-1]);else for(var C=0;C<d.length;C++)o.add(d[C]);return o}},{key:"_initSerieVariables",value:function(e,t,i){var a=this.w,r=new H(this.ctx);this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-(a.config.xaxis.tickPlacement==="on"?1:0)),this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width,this.yRatio.length>1&&(this.yaxisIndex=i),this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed,this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0),this.areaBottomY=this.zeroY,(this.zeroY>a.globals.gridHeight||a.config.plotOptions.area.fillTo==="end")&&(this.areaBottomY=a.globals.gridHeight),this.categoryAxisCorrection=this.xDivision/2,this.elSeries=r.group({class:"apexcharts-series",seriesName:T.escapeString(a.globals.seriesNames[i])}),this.elPointsMain=r.group({class:"apexcharts-series-markers-wrap","data:realIndex":i}),this.elDataLabelsWrap=r.group({class:"apexcharts-datalabels","data:realIndex":i});var l=e[t].length===a.globals.dataPoints;this.elSeries.attr({"data:longestSeries":l,rel:t+1,"data:realIndex":i}),this.appendPathFrom=!0}},{key:"_calculatePathsFrom",value:function(e){var t,i,a,r,l=e.series,o=e.i,h=e.realIndex,d=e.prevX,p=e.prevY,x=this.w,b=new H(this.ctx);if(l[o][0]===null){for(var y=0;y<l[o].length;y++)if(l[o][y]!==null){d=this.xDivision*y,p=this.zeroY-l[o][y]/this.yRatio[this.yaxisIndex],t=b.move(d,p),i=b.move(d,this.areaBottomY);break}}else t=b.move(d,p),i=b.move(d,this.areaBottomY)+b.line(d,p);if(a=b.move(-1,this.zeroY)+b.line(-1,this.zeroY),r=b.move(-1,this.zeroY)+b.line(-1,this.zeroY),x.globals.previousPaths.length>0){var S=this.lineHelpers.checkPreviousPaths({pathFromLine:a,pathFromArea:r,realIndex:h});a=S.pathFromLine,r=S.pathFromArea}return{prevX:d,prevY:p,linePath:t,areaPath:i,pathFromLine:a,pathFromArea:r}}},{key:"_handlePaths",value:function(e){var t=e.type,i=e.realIndex,a=e.i,r=e.paths,l=this.w,o=new H(this.ctx),h=new ge(this.ctx);this.prevSeriesY.push(r.yArrj),l.globals.seriesXvalues[i]=r.xArrj,l.globals.seriesYvalues[i]=r.yArrj;var d=l.config.forecastDataPoints;if(d.count>0){var p=l.globals.seriesXvalues[i][l.globals.seriesXvalues[i].length-d.count-1],x=o.drawRect(p,0,l.globals.gridWidth,l.globals.gridHeight,0);l.globals.dom.elForecastMask.appendChild(x.node);var b=o.drawRect(0,0,p,l.globals.gridHeight,0);l.globals.dom.elNonForecastMask.appendChild(b.node)}this.pointsChart||l.globals.delayedElements.push({el:this.elPointsMain.node,index:i});var y={i:a,realIndex:i,animationDelay:a,initialSpeed:l.config.chart.animations.speed,dataChangeSpeed:l.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(t)};if(t==="area")for(var S=h.fillPath({seriesNumber:i}),A=0;A<r.areaPaths.length;A++){var E=o.renderPaths(u(u({},y),{},{pathFrom:r.pathFromArea,pathTo:r.areaPaths[A],stroke:"none",strokeWidth:0,strokeLineCap:null,fill:S}));this.elSeries.add(E)}if(l.config.stroke.show&&!this.pointsChart){var _=null;if(t==="line")_=h.fillPath({seriesNumber:i,i:a});else if(l.config.stroke.fill.type==="solid")_=l.globals.stroke.colors[i];else{var R=l.config.fill;l.config.fill=l.config.stroke.fill,_=h.fillPath({seriesNumber:i,i:a}),l.config.fill=R}for(var F=0;F<r.linePaths.length;F++){var f=u(u({},y),{},{pathFrom:r.pathFromLine,pathTo:r.linePaths[F],stroke:_,strokeWidth:this.strokeWidth,strokeLineCap:l.config.stroke.lineCap,fill:"none"}),v=o.renderPaths(f);if(this.elSeries.add(v),d.count>0){var C=o.renderPaths(f);C.node.setAttribute("stroke-dasharray",d.dashArray),d.strokeWidth&&C.node.setAttribute("stroke-width",d.strokeWidth),this.elSeries.add(C),C.attr("clip-path","url(#forecastMask".concat(l.globals.cuid,")")),v.attr("clip-path","url(#nonForecastMask".concat(l.globals.cuid,")"))}}}}},{key:"_iterateOverDataPoints",value:function(e){for(var t=e.series,i=e.realIndex,a=e.i,r=e.x,l=e.y,o=e.pX,h=e.pY,d=e.pathsFrom,p=e.linePaths,x=e.areaPaths,b=e.seriesIndex,y=e.lineYPosition,S=e.xArrj,A=e.yArrj,E=this.w,_=new H(this.ctx),R=this.yRatio,F=d.prevY,f=d.linePath,v=d.areaPath,C=d.pathFromLine,M=d.pathFromArea,X=T.isNumber(E.globals.minYArr[i])?E.globals.minYArr[i]:E.globals.minY,G=E.globals.dataPoints>1?E.globals.dataPoints-1:E.globals.dataPoints,Y=0;Y<G;Y++){var re=t[a][Y+1]===void 0||t[a][Y+1]===null;if(E.globals.isXNumeric){var te=E.globals.seriesX[i][Y+1];E.globals.seriesX[i][Y+1]===void 0&&(te=E.globals.seriesX[i][G-1]),r=(te-E.globals.minX)/this.xRatio}else r+=this.xDivision;E.config.chart.stacked?a>0&&E.globals.collapsedSeries.length<E.config.series.length-1?y=this.prevSeriesY[function(Je){for(var He=Je,ft=0;ft<E.globals.series.length;ft++)if(E.globals.collapsedSeriesIndices.indexOf(Je)>-1){He--;break}return He>=0?He:0}(a-1)][Y+1]:y=this.zeroY:y=this.zeroY,l=re?y-X/R[this.yaxisIndex]+2*(this.isReversed?X/R[this.yaxisIndex]:0):y-t[a][Y+1]/R[this.yaxisIndex]+2*(this.isReversed?t[a][Y+1]/R[this.yaxisIndex]:0),S.push(r),A.push(l);var pe=this.lineHelpers.calculatePoints({series:t,x:r,y:l,realIndex:i,i:a,j:Y,prevY:F}),Ce=this._createPaths({series:t,i:a,realIndex:i,j:Y,x:r,y:l,pX:o,pY:h,linePath:f,areaPath:v,linePaths:p,areaPaths:x,seriesIndex:b});x=Ce.areaPaths,p=Ce.linePaths,o=Ce.pX,h=Ce.pY,v=Ce.areaPath,f=Ce.linePath,this.appendPathFrom&&(C+=_.line(r,this.zeroY),M+=_.line(r,this.zeroY)),this.handleNullDataPoints(t,pe,a,Y,i),this._handleMarkersAndLabels({pointsPos:pe,series:t,x:r,y:l,prevY:F,i:a,j:Y,realIndex:i})}return{yArrj:A,xArrj:S,pathFromArea:M,areaPaths:x,pathFromLine:C,linePaths:p}}},{key:"_handleMarkersAndLabels",value:function(e){var t=e.pointsPos;e.series,e.x,e.y,e.prevY;var i=e.i,a=e.j,r=e.realIndex,l=this.w,o=new Te(this.ctx);if(this.pointsChart)this.scatter.draw(this.elSeries,a,{realIndex:r,pointsPos:t,zRatio:this.zRatio,elParent:this.elPointsMain});else{l.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");var h=this.markers.plotChartMarkers(t,r,a+1);h!==null&&this.elPointsMain.add(h)}var d=o.drawDataLabel(t,r,a+1,null);d!==null&&this.elDataLabelsWrap.add(d)}},{key:"_createPaths",value:function(e){var t=e.series,i=e.i,a=e.realIndex,r=e.j,l=e.x,o=e.y,h=e.pX,d=e.pY,p=e.linePath,x=e.areaPath,b=e.linePaths,y=e.areaPaths,S=e.seriesIndex,A=this.w,E=new H(this.ctx),_=A.config.stroke.curve,R=this.areaBottomY;if(Array.isArray(A.config.stroke.curve)&&(_=Array.isArray(S)?A.config.stroke.curve[S[i]]:A.config.stroke.curve[i]),_==="smooth"){var F=.35*(l-h);A.globals.hasNullValues?(t[i][r]!==null&&(t[i][r+1]!==null?(p=E.move(h,d)+E.curve(h+F,d,l-F,o,l+1,o),x=E.move(h+1,d)+E.curve(h+F,d,l-F,o,l+1,o)+E.line(l,R)+E.line(h,R)+"z"):(p=E.move(h,d),x=E.move(h,d)+"z")),b.push(p),y.push(x)):(p+=E.curve(h+F,d,l-F,o,l,o),x+=E.curve(h+F,d,l-F,o,l,o)),h=l,d=o,r===t[i].length-2&&(x=x+E.curve(h,d,l,o,l,R)+E.move(l,o)+"z",A.globals.hasNullValues||(b.push(p),y.push(x)))}else{if(t[i][r+1]===null){p+=E.move(l,o);var f=A.globals.isXNumeric?(A.globals.seriesX[a][r]-A.globals.minX)/this.xRatio:l-this.xDivision;x=x+E.line(f,R)+E.move(l,o)+"z"}t[i][r]===null&&(p+=E.move(l,o),x+=E.move(l,R)),_==="stepline"?(p=p+E.line(l,null,"H")+E.line(null,o,"V"),x=x+E.line(l,null,"H")+E.line(null,o,"V")):_==="straight"&&(p+=E.line(l,o),x+=E.line(l,o)),r===t[i].length-2&&(x=x+E.line(l,R)+E.move(l,o)+"z",b.push(p),y.push(x))}return{linePaths:b,areaPaths:y,pX:h,pY:d,linePath:p,areaPath:x}}},{key:"handleNullDataPoints",value:function(e,t,i,a,r){var l=this.w;if(e[i][a]===null&&l.config.markers.showNullDataPoints||e[i].length===1){var o=this.markers.plotChartMarkers(t,r,a+1,this.strokeWidth-l.config.markers.strokeWidth/2,!0);o!==null&&this.elPointsMain.add(o)}}}]),L}();window.TreemapSquared={},window.TreemapSquared.generate=function(){function L(o,h,d,p){this.xoffset=o,this.yoffset=h,this.height=p,this.width=d,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(x){var b,y=[],S=this.xoffset,A=this.yoffset,E=r(x)/this.height,_=r(x)/this.width;if(this.width>=this.height)for(b=0;b<x.length;b++)y.push([S,A,S+E,A+x[b]/E]),A+=x[b]/E;else for(b=0;b<x.length;b++)y.push([S,A,S+x[b]/_,A+_]),S+=x[b]/_;return y},this.cutArea=function(x){var b;if(this.width>=this.height){var y=x/this.height,S=this.width-y;b=new L(this.xoffset+y,this.yoffset,S,this.height)}else{var A=x/this.width,E=this.height-A;b=new L(this.xoffset,this.yoffset+A,this.width,E)}return b}}function e(o,h,d,p,x){return p=p===void 0?0:p,x=x===void 0?0:x,function(b){var y,S,A=[];for(y=0;y<b.length;y++)for(S=0;S<b[y].length;S++)A.push(b[y][S]);return A}(t(function(b,y){var S,A=[],E=y/r(b);for(S=0;S<b.length;S++)A[S]=b[S]*E;return A}(o,h*d),[],new L(p,x,h,d),[]))}function t(o,h,d,p){var x,b,y;if(o.length!==0)return x=d.shortestEdge(),function(S,A,E){var _;if(S.length===0)return!0;(_=S.slice()).push(A);var R=i(S,E),F=i(_,E);return R>=F}(h,b=o[0],x)?(h.push(b),t(o.slice(1),h,d,p)):(y=d.cutArea(r(h),p),p.push(d.getCoordinates(h)),t(o,[],y,p)),p;p.push(d.getCoordinates(h))}function i(o,h){var d=Math.min.apply(Math,o),p=Math.max.apply(Math,o),x=r(o);return Math.max(Math.pow(h,2)*p/Math.pow(x,2),Math.pow(x,2)/(Math.pow(h,2)*d))}function a(o){return o&&o.constructor===Array}function r(o){var h,d=0;for(h=0;h<o.length;h++)d+=o[h];return d}function l(o){var h,d=0;if(a(o[0]))for(h=0;h<o.length;h++)d+=l(o[h]);else d=r(o);return d}return function o(h,d,p,x,b){x=x===void 0?0:x,b=b===void 0?0:b;var y,S,A=[],E=[];if(a(h[0])){for(S=0;S<h.length;S++)A[S]=l(h[S]);for(y=e(A,d,p,x,b),S=0;S<h.length;S++)E.push(o(h[S],y[S][2]-y[S][0],y[S][3]-y[S][1],y[S][0],y[S][1]))}else E=e(h,d,p,x,b);return E}}();var Fi,pa,Bu=function(){function L(e,t){m(this,L),this.ctx=e,this.w=e.w,this.strokeWidth=this.w.config.stroke.width,this.helpers=new So(e),this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation,this.labels=[]}return k(L,[{key:"draw",value:function(e){var t=this,i=this.w,a=new H(this.ctx),r=new ge(this.ctx),l=a.group({class:"apexcharts-treemap"});if(i.globals.noData)return l;var o=[];return e.forEach(function(h){var d=h.map(function(p){return Math.abs(p)});o.push(d)}),this.negRange=this.helpers.checkColorRange(),i.config.series.forEach(function(h,d){h.data.forEach(function(p){Array.isArray(t.labels[d])||(t.labels[d]=[]),t.labels[d].push(p.x)})}),window.TreemapSquared.generate(o,i.globals.gridWidth,i.globals.gridHeight).forEach(function(h,d){var p=a.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:T.escapeString(i.globals.seriesNames[d]),rel:d+1,"data:realIndex":d});if(i.config.chart.dropShadow.enabled){var x=i.config.chart.dropShadow;new Z(t.ctx).dropShadow(l,x,d)}var b=a.group({class:"apexcharts-data-labels"});h.forEach(function(y,S){var A=y[0],E=y[1],_=y[2],R=y[3],F=a.drawRect(A,E,_-A,R-E,0,"#fff",1,t.strokeWidth,i.config.plotOptions.treemap.useFillColorAsStroke?v:i.globals.stroke.colors[d]);F.attr({cx:A,cy:E,index:d,i:d,j:S,width:_-A,height:R-E});var f=t.helpers.getShadeColor(i.config.chart.type,d,S,t.negRange),v=f.color;i.config.series[d].data[S]!==void 0&&i.config.series[d].data[S].fillColor&&(v=i.config.series[d].data[S].fillColor);var C=r.fillPath({color:v,seriesNumber:d,dataPointIndex:S});F.node.classList.add("apexcharts-treemap-rect"),F.attr({fill:C}),t.helpers.addListeners(F);var M={x:A+(_-A)/2,y:E+(R-E)/2,width:0,height:0},X={x:A,y:E,width:_-A,height:R-E};if(i.config.chart.animations.enabled&&!i.globals.dataChanged){var G=1;i.globals.resized||(G=i.config.chart.animations.speed),t.animateTreemap(F,M,X,G)}if(i.globals.dataChanged){var Y=1;t.dynamicAnim.enabled&&i.globals.shouldAnimate&&(Y=t.dynamicAnim.speed,i.globals.previousPaths[d]&&i.globals.previousPaths[d][S]&&i.globals.previousPaths[d][S].rect&&(M=i.globals.previousPaths[d][S].rect),t.animateTreemap(F,M,X,Y))}var re=t.getFontSize(y),te=i.config.dataLabels.formatter(t.labels[d][S],{value:i.globals.series[d][S],seriesIndex:d,dataPointIndex:S,w:i}),pe=t.helpers.calculateDataLabels({text:te,x:(A+_)/2,y:(E+R)/2+t.strokeWidth/2+re/3,i:d,j:S,colorProps:f,fontSize:re,series:e});i.config.dataLabels.enabled&&pe&&t.rotateToFitLabel(pe,re,te,A,E,_,R),p.add(F),pe!==null&&p.add(pe)}),p.add(b),l.add(p)}),l}},{key:"getFontSize",value:function(e){var t=this.w,i,a,r,l,o=function h(d){var p,x=0;if(Array.isArray(d[0]))for(p=0;p<d.length;p++)x+=h(d[p]);else for(p=0;p<d.length;p++)x+=d[p].length;return x}(this.labels)/function h(d){var p,x=0;if(Array.isArray(d[0]))for(p=0;p<d.length;p++)x+=h(d[p]);else for(p=0;p<d.length;p++)x+=1;return x}(this.labels);return i=e[2]-e[0],a=e[3]-e[1],r=i*a,l=Math.pow(r,.5),Math.min(l/o,parseInt(t.config.dataLabels.style.fontSize,10))}},{key:"rotateToFitLabel",value:function(e,t,i,a,r,l,o){var h=new H(this.ctx),d=h.getTextRects(i,t);if(d.width+this.w.config.stroke.width+5>l-a&&d.width<=o-r){var p=h.rotateAroundCenter(e.node);e.node.setAttribute("transform","rotate(-90 ".concat(p.x," ").concat(p.y,")"))}}},{key:"animateTreemap",value:function(e,t,i,a){var r=new j(this.ctx);r.animateRect(e,{x:t.x,y:t.y,width:t.width,height:t.height},{x:i.x,y:i.y,width:i.width,height:i.height},a,function(){r.animationCompleted(e)})}}]),L}(),Wu=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w,this.timeScaleArray=[],this.utc=this.w.config.xaxis.labels.datetimeUTC}return k(L,[{key:"calculateTimeScaleTicks",value:function(e,t){var i=this,a=this.w;if(a.globals.allSeriesCollapsed)return a.globals.labels=[],a.globals.timescaleLabels=[],[];var r=new je(this.ctx),l=(t-e)/864e5;this.determineInterval(l),a.globals.disableZoomIn=!1,a.globals.disableZoomOut=!1,l<.00011574074074074075?a.globals.disableZoomIn=!0:l>5e4&&(a.globals.disableZoomOut=!0);var o=r.getTimeUnitsfromTimestamp(e,t,this.utc),h=a.globals.gridWidth/l,d=h/24,p=d/60,x=p/60,b=Math.floor(24*l),y=Math.floor(1440*l),S=Math.floor(86400*l),A=Math.floor(l),E=Math.floor(l/30),_=Math.floor(l/365),R={minMillisecond:o.minMillisecond,minSecond:o.minSecond,minMinute:o.minMinute,minHour:o.minHour,minDate:o.minDate,minMonth:o.minMonth,minYear:o.minYear},F={firstVal:R,currentMillisecond:R.minMillisecond,currentSecond:R.minSecond,currentMinute:R.minMinute,currentHour:R.minHour,currentMonthDate:R.minDate,currentDate:R.minDate,currentMonth:R.minMonth,currentYear:R.minYear,daysWidthOnXAxis:h,hoursWidthOnXAxis:d,minutesWidthOnXAxis:p,secondsWidthOnXAxis:x,numberOfSeconds:S,numberOfMinutes:y,numberOfHours:b,numberOfDays:A,numberOfMonths:E,numberOfYears:_};switch(this.tickInterval){case"years":this.generateYearScale(F);break;case"months":case"half_year":this.generateMonthScale(F);break;case"months_days":case"months_fortnight":case"days":case"week_days":this.generateDayScale(F);break;case"hours":this.generateHourScale(F);break;case"minutes_fives":case"minutes":this.generateMinuteScale(F);break;case"seconds_tens":case"seconds_fives":case"seconds":this.generateSecondScale(F)}var f=this.timeScaleArray.map(function(v){var C={position:v.position,unit:v.unit,year:v.year,day:v.day?v.day:1,hour:v.hour?v.hour:0,month:v.month+1};return v.unit==="month"?u(u({},C),{},{day:1,value:v.value+1}):v.unit==="day"||v.unit==="hour"?u(u({},C),{},{value:v.value}):v.unit==="minute"?u(u({},C),{},{value:v.value,minute:v.value}):v.unit==="second"?u(u({},C),{},{value:v.value,minute:v.minute,second:v.second}):v});return f.filter(function(v){var C=1,M=Math.ceil(a.globals.gridWidth/120),X=v.value;a.config.xaxis.tickAmount!==void 0&&(M=a.config.xaxis.tickAmount),f.length>M&&(C=Math.floor(f.length/M));var G=!1,Y=!1;switch(i.tickInterval){case"years":v.unit==="year"&&(G=!0);break;case"half_year":C=7,v.unit==="year"&&(G=!0);break;case"months":C=1,v.unit==="year"&&(G=!0);break;case"months_fortnight":C=15,v.unit!=="year"&&v.unit!=="month"||(G=!0),X===30&&(Y=!0);break;case"months_days":C=10,v.unit==="month"&&(G=!0),X===30&&(Y=!0);break;case"week_days":C=8,v.unit==="month"&&(G=!0);break;case"days":C=1,v.unit==="month"&&(G=!0);break;case"hours":v.unit==="day"&&(G=!0);break;case"minutes_fives":X%5!=0&&(Y=!0);break;case"seconds_tens":X%10!=0&&(Y=!0);break;case"seconds_fives":X%5!=0&&(Y=!0)}if(i.tickInterval==="hours"||i.tickInterval==="minutes_fives"||i.tickInterval==="seconds_tens"||i.tickInterval==="seconds_fives"){if(!Y)return!0}else if((X%C==0||G)&&!Y)return!0})}},{key:"recalcDimensionsBasedOnFormat",value:function(e,t){var i=this.w,a=this.formatDates(e),r=this.removeOverlappingTS(a);i.globals.timescaleLabels=r.slice(),new Xe(this.ctx).plotCoords()}},{key:"determineInterval",value:function(e){var t=24*e,i=60*t;switch(!0){case e/365>5:this.tickInterval="years";break;case e>800:this.tickInterval="half_year";break;case e>180:this.tickInterval="months";break;case e>90:this.tickInterval="months_fortnight";break;case e>60:this.tickInterval="months_days";break;case e>30:this.tickInterval="week_days";break;case e>2:this.tickInterval="days";break;case t>2.4:this.tickInterval="hours";break;case i>15:this.tickInterval="minutes_fives";break;case i>5:this.tickInterval="minutes";break;case i>1:this.tickInterval="seconds_tens";break;case 60*i>20:this.tickInterval="seconds_fives";break;default:this.tickInterval="seconds"}}},{key:"generateYearScale",value:function(e){var t=e.firstVal,i=e.currentMonth,a=e.currentYear,r=e.daysWidthOnXAxis,l=e.numberOfYears,o=t.minYear,h=0,d=new je(this.ctx),p="year";if(t.minDate>1||t.minMonth>0){var x=d.determineRemainingDaysOfYear(t.minYear,t.minMonth,t.minDate);h=(d.determineDaysOfYear(t.minYear)-x+1)*r,o=t.minYear+1,this.timeScaleArray.push({position:h,value:o,unit:p,year:o,month:T.monthMod(i+1)})}else t.minDate===1&&t.minMonth===0&&this.timeScaleArray.push({position:h,value:o,unit:p,year:a,month:T.monthMod(i+1)});for(var b=o,y=h,S=0;S<l;S++)b++,y=d.determineDaysOfYear(b-1)*r+y,this.timeScaleArray.push({position:y,value:b,unit:p,year:b,month:1})}},{key:"generateMonthScale",value:function(e){var t=e.firstVal,i=e.currentMonthDate,a=e.currentMonth,r=e.currentYear,l=e.daysWidthOnXAxis,o=e.numberOfMonths,h=a,d=0,p=new je(this.ctx),x="month",b=0;if(t.minDate>1){d=(p.determineDaysOfMonths(a+1,t.minYear)-i+1)*l,h=T.monthMod(a+1);var y=r+b,S=T.monthMod(h),A=h;h===0&&(x="year",A=y,S=1,y+=b+=1),this.timeScaleArray.push({position:d,value:A,unit:x,year:y,month:S})}else this.timeScaleArray.push({position:d,value:h,unit:x,year:r,month:T.monthMod(a)});for(var E=h+1,_=d,R=0,F=1;R<o;R++,F++){(E=T.monthMod(E))===0?(x="year",b+=1):x="month";var f=this._getYear(r,E,b);_=p.determineDaysOfMonths(E,f)*l+_;var v=E===0?f:E;this.timeScaleArray.push({position:_,value:v,unit:x,year:f,month:E===0?1:E}),E++}}},{key:"generateDayScale",value:function(e){var t=e.firstVal,i=e.currentMonth,a=e.currentYear,r=e.hoursWidthOnXAxis,l=e.numberOfDays,o=new je(this.ctx),h="day",d=t.minDate+1,p=d,x=function(F,f,v){return F>o.determineDaysOfMonths(f+1,v)&&(p=1,h="month",y=f+=1),f},b=(24-t.minHour)*r,y=d,S=x(p,i,a);t.minHour===0&&t.minDate===1?(b=0,y=T.monthMod(t.minMonth),h="month",p=t.minDate,l++):t.minDate!==1&&t.minHour===0&&t.minMinute===0&&(b=0,d=t.minDate,y=d,S=x(p=d,i,a)),this.timeScaleArray.push({position:b,value:y,unit:h,year:this._getYear(a,S,0),month:T.monthMod(S),day:p});for(var A=b,E=0;E<l;E++){h="day",S=x(p+=1,S,this._getYear(a,S,0));var _=this._getYear(a,S,0);A=24*r+A;var R=p===1?T.monthMod(S):p;this.timeScaleArray.push({position:A,value:R,unit:h,year:_,month:T.monthMod(S),day:R})}}},{key:"generateHourScale",value:function(e){var t=e.firstVal,i=e.currentDate,a=e.currentMonth,r=e.currentYear,l=e.minutesWidthOnXAxis,o=e.numberOfHours,h=new je(this.ctx),d="hour",p=function(C,M){return C>h.determineDaysOfMonths(M+1,r)&&(E=1,M+=1),{month:M,date:E}},x=function(C,M){return C>h.determineDaysOfMonths(M+1,r)?M+=1:M},b=60-(t.minMinute+t.minSecond/60),y=b*l,S=t.minHour+1,A=S+1;b===60&&(y=0,A=(S=t.minHour)+1);var E=i,_=x(E,a);this.timeScaleArray.push({position:y,value:S,unit:d,day:E,hour:A,year:r,month:T.monthMod(_)});for(var R=y,F=0;F<o;F++){d="hour",A>=24&&(A=0,d="day",_=p(E+=1,_).month,_=x(E,_));var f=this._getYear(r,_,0);R=A===0&&F===0?b*l:60*l+R;var v=A===0?E:A;this.timeScaleArray.push({position:R,value:v,unit:d,hour:A,day:E,year:f,month:T.monthMod(_)}),A++}}},{key:"generateMinuteScale",value:function(e){for(var t=e.currentMillisecond,i=e.currentSecond,a=e.currentMinute,r=e.currentHour,l=e.currentDate,o=e.currentMonth,h=e.currentYear,d=e.minutesWidthOnXAxis,p=e.secondsWidthOnXAxis,x=e.numberOfMinutes,b=a+1,y=l,S=o,A=h,E=r,_=(60-i-t/1e3)*p,R=0;R<x;R++)b>=60&&(b=0,(E+=1)===24&&(E=0)),this.timeScaleArray.push({position:_,value:b,unit:"minute",hour:E,minute:b,day:y,year:this._getYear(A,S,0),month:T.monthMod(S)}),_+=d,b++}},{key:"generateSecondScale",value:function(e){for(var t=e.currentMillisecond,i=e.currentSecond,a=e.currentMinute,r=e.currentHour,l=e.currentDate,o=e.currentMonth,h=e.currentYear,d=e.secondsWidthOnXAxis,p=e.numberOfSeconds,x=i+1,b=a,y=l,S=o,A=h,E=r,_=(1e3-t)/1e3*d,R=0;R<p;R++)x>=60&&(x=0,++b>=60&&(b=0,++E===24&&(E=0))),this.timeScaleArray.push({position:_,value:x,unit:"second",hour:E,minute:b,second:x,day:y,year:this._getYear(A,S,0),month:T.monthMod(S)}),_+=d,x++}},{key:"createRawDateString",value:function(e,t){var i=e.year;return e.month===0&&(e.month=1),i+="-"+("0"+e.month.toString()).slice(-2),e.unit==="day"?i+=e.unit==="day"?"-"+("0"+t).slice(-2):"-01":i+="-"+("0"+(e.day?e.day:"1")).slice(-2),e.unit==="hour"?i+=e.unit==="hour"?"T"+("0"+t).slice(-2):"T00":i+="T"+("0"+(e.hour?e.hour:"0")).slice(-2),e.unit==="minute"?i+=":"+("0"+t).slice(-2):i+=":"+(e.minute?("0"+e.minute).slice(-2):"00"),e.unit==="second"?i+=":"+("0"+t).slice(-2):i+=":00",this.utc&&(i+=".000Z"),i}},{key:"formatDates",value:function(e){var t=this,i=this.w;return e.map(function(a){var r=a.value.toString(),l=new je(t.ctx),o=t.createRawDateString(a,r),h=l.getDate(l.parseDate(o));if(t.utc||(h=l.getDate(l.parseDateWithTimezone(o))),i.config.xaxis.labels.format===void 0){var d="dd MMM",p=i.config.xaxis.labels.datetimeFormatter;a.unit==="year"&&(d=p.year),a.unit==="month"&&(d=p.month),a.unit==="day"&&(d=p.day),a.unit==="hour"&&(d=p.hour),a.unit==="minute"&&(d=p.minute),a.unit==="second"&&(d=p.second),r=l.formatDate(h,d)}else r=l.formatDate(h,i.config.xaxis.labels.format);return{dateString:o,position:a.position,value:r,unit:a.unit,year:a.year,month:a.month}})}},{key:"removeOverlappingTS",value:function(e){var t,i=this,a=new H(this.ctx),r=!1;e.length>0&&e[0].value&&e.every(function(h){return h.value.length===e[0].value.length})&&(r=!0,t=a.getTextRects(e[0].value).width);var l=0,o=e.map(function(h,d){if(d>0&&i.w.config.xaxis.labels.hideOverlappingLabels){var p=r?t:a.getTextRects(e[l].value).width,x=e[l].position;return h.position>x+p+10?(l=d,h):null}return h});return o=o.filter(function(h){return h!==null})}},{key:"_getYear",value:function(e,t,i){return e+Math.floor(t/12)+i}}]),L}(),Vu=function(){function L(e,t){m(this,L),this.ctx=t,this.w=t.w,this.el=e}return k(L,[{key:"setupElements",value:function(){var e=this.w.globals,t=this.w.config,i=t.chart.type;e.axisCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble","radar","heatmap","treemap"].indexOf(i)>-1,e.xyCharts=["line","area","bar","rangeBar","candlestick","boxPlot","scatter","bubble"].indexOf(i)>-1,e.isBarHorizontal=(t.chart.type==="bar"||t.chart.type==="rangeBar"||t.chart.type==="boxPlot")&&t.plotOptions.bar.horizontal,e.chartClass=".apexcharts"+e.chartID,e.dom.baseEl=this.el,e.dom.elWrap=document.createElement("div"),H.setAttrs(e.dom.elWrap,{id:e.chartClass.substring(1),class:"apexcharts-canvas "+e.chartClass.substring(1)}),this.el.appendChild(e.dom.elWrap),e.dom.Paper=new window.SVG.Doc(e.dom.elWrap),e.dom.Paper.attr({class:"apexcharts-svg","xmlns:data":"ApexChartsNS",transform:"translate(".concat(t.chart.offsetX,", ").concat(t.chart.offsetY,")")}),e.dom.Paper.node.style.background=t.chart.background,this.setSVGDimensions(),e.dom.elGraphical=e.dom.Paper.group().attr({class:"apexcharts-inner apexcharts-graphical"}),e.dom.elAnnotations=e.dom.Paper.group().attr({class:"apexcharts-annotations"}),e.dom.elDefs=e.dom.Paper.defs(),e.dom.elLegendWrap=document.createElement("div"),e.dom.elLegendWrap.classList.add("apexcharts-legend"),e.dom.elWrap.appendChild(e.dom.elLegendWrap),e.dom.Paper.add(e.dom.elGraphical),e.dom.elGraphical.add(e.dom.elDefs)}},{key:"plotChartType",value:function(e,t){var i=this.w,a=i.config,r=i.globals,l={series:[],i:[]},o={series:[],i:[]},h={series:[],i:[]},d={series:[],i:[]},p={series:[],i:[]},x={series:[],i:[]},b={series:[],i:[]};r.series.map(function(v,C){var M=0;e[C].type!==void 0?(e[C].type==="column"||e[C].type==="bar"?(r.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"),p.series.push(v),p.i.push(C),M++,i.globals.columnSeries=p.series):e[C].type==="area"?(o.series.push(v),o.i.push(C),M++):e[C].type==="line"?(l.series.push(v),l.i.push(C),M++):e[C].type==="scatter"?(h.series.push(v),h.i.push(C)):e[C].type==="bubble"?(d.series.push(v),d.i.push(C),M++):e[C].type==="candlestick"?(x.series.push(v),x.i.push(C),M++):e[C].type==="boxPlot"?(b.series.push(v),b.i.push(C),M++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"),M>1&&(r.comboCharts=!0)):(l.series.push(v),l.i.push(C))});var y=new Cr(this.ctx,t),S=new Sr(this.ctx,t);this.ctx.pie=new Eo(this.ctx);var A=new Hu(this.ctx);this.ctx.rangeBar=new ot(this.ctx,t);var E=new Xu(this.ctx),_=[];if(r.comboCharts){if(o.series.length>0&&_.push(y.draw(o.series,"area",o.i)),p.series.length>0)if(i.config.chart.stacked){var R=new Ao(this.ctx,t);_.push(R.draw(p.series,p.i))}else this.ctx.bar=new nt(this.ctx,t),_.push(this.ctx.bar.draw(p.series,p.i));if(l.series.length>0&&_.push(y.draw(l.series,"line",l.i)),x.series.length>0&&_.push(S.draw(x.series,x.i)),b.series.length>0&&_.push(S.draw(b.series,b.i)),h.series.length>0){var F=new Cr(this.ctx,t,!0);_.push(F.draw(h.series,"scatter",h.i))}if(d.series.length>0){var f=new Cr(this.ctx,t,!0);_.push(f.draw(d.series,"bubble",d.i))}}else switch(a.chart.type){case"line":_=y.draw(r.series,"line");break;case"area":_=y.draw(r.series,"area");break;case"bar":a.chart.stacked?_=new Ao(this.ctx,t).draw(r.series):(this.ctx.bar=new nt(this.ctx,t),_=this.ctx.bar.draw(r.series));break;case"candlestick":_=new Sr(this.ctx,t).draw(r.series);break;case"boxPlot":_=new Sr(this.ctx,t).draw(r.series);break;case"rangeBar":_=this.ctx.rangeBar.draw(r.series);break;case"heatmap":_=new Du(this.ctx,t).draw(r.series);break;case"treemap":_=new Bu(this.ctx,t).draw(r.series);break;case"pie":case"donut":case"polarArea":_=this.ctx.pie.draw(r.series);break;case"radialBar":_=A.draw(r.series);break;case"radar":_=E.draw(r.series);break;default:_=y.draw(r.series)}return _}},{key:"setSVGDimensions",value:function(){var e=this.w.globals,t=this.w.config;e.svgWidth=t.chart.width,e.svgHeight=t.chart.height;var i=T.getDimensions(this.el),a=t.chart.width.toString().split(/[0-9]+/g).pop();a==="%"?T.isNumber(i[0])&&(i[0].width===0&&(i=T.getDimensions(this.el.parentNode)),e.svgWidth=i[0]*parseInt(t.chart.width,10)/100):a!=="px"&&a!==""||(e.svgWidth=parseInt(t.chart.width,10));var r=t.chart.height.toString().split(/[0-9]+/g).pop();if(e.svgHeight!=="auto"&&e.svgHeight!=="")if(r==="%"){var l=T.getDimensions(this.el.parentNode);e.svgHeight=l[1]*parseInt(t.chart.height,10)/100}else e.svgHeight=parseInt(t.chart.height,10);else e.axisCharts?e.svgHeight=e.svgWidth/1.61:e.svgHeight=e.svgWidth/1.2;if(e.svgWidth<0&&(e.svgWidth=0),e.svgHeight<0&&(e.svgHeight=0),H.setAttrs(e.dom.Paper.node,{width:e.svgWidth,height:e.svgHeight}),r!=="%"){var o=t.chart.sparkline.enabled?0:e.axisCharts?t.chart.parentHeightOffset:0;e.dom.Paper.node.parentNode.parentNode.style.minHeight=e.svgHeight+o+"px"}e.dom.elWrap.style.width=e.svgWidth+"px",e.dom.elWrap.style.height=e.svgHeight+"px"}},{key:"shiftGraphPosition",value:function(){var e=this.w.globals,t=e.translateY,i={transform:"translate("+e.translateX+", "+t+")"};H.setAttrs(e.dom.elGraphical.node,i)}},{key:"resizeNonAxisCharts",value:function(){var e=this.w,t=e.globals,i=0,a=e.config.chart.sparkline.enabled?1:15;a+=e.config.grid.padding.bottom,e.config.legend.position!=="top"&&e.config.legend.position!=="bottom"||!e.config.legend.show||e.config.legend.floating||(i=new qe(this.ctx).legendHelpers.getLegendBBox().clwh+10);var r=e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),l=2.05*e.globals.radialSize;if(r&&!e.config.chart.sparkline.enabled&&e.config.plotOptions.radialBar.startAngle!==0){var o=T.getBoundingClientRect(r);l=o.bottom;var h=o.bottom-o.top;l=Math.max(2.05*e.globals.radialSize,h)}var d=l+t.translateY+i+a;t.dom.elLegendForeign&&t.dom.elLegendForeign.setAttribute("height",d),e.config.chart.height&&String(e.config.chart.height).indexOf("%")>0||(t.dom.elWrap.style.height=d+"px",H.setAttrs(t.dom.Paper.node,{height:d}),t.dom.Paper.node.parentNode.parentNode.style.minHeight=d+"px")}},{key:"coreCalculations",value:function(){new $(this.ctx).init()}},{key:"resetGlobals",value:function(){var e=this,t=function(){return e.w.config.series.map(function(r){return[]})},i=new ue,a=this.w.globals;i.initGlobalVars(a),a.seriesXvalues=t(),a.seriesYvalues=t()}},{key:"isMultipleY",value:function(){if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0,!0}},{key:"xySettings",value:function(){var e=null,t=this.w;if(t.globals.axisCharts){if(t.config.xaxis.crosshairs.position==="back"&&new fe(this.ctx).drawXCrosshairs(),t.config.yaxis[0].crosshairs.position==="back"&&new fe(this.ctx).drawYCrosshairs(),t.config.xaxis.type==="datetime"&&t.config.xaxis.labels.formatter===void 0){this.ctx.timeScale=new Wu(this.ctx);var i=[];isFinite(t.globals.minX)&&isFinite(t.globals.maxX)&&!t.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minX,t.globals.maxX):t.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minY,t.globals.maxY)),this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)}e=new ce(this.ctx).getCalculatedRatios()}return e}},{key:"updateSourceChart",value:function(e){this.ctx.w.globals.selection=void 0,this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:e.w.globals.minX,max:e.w.globals.maxX}}}},!1,!1)}},{key:"setupBrushHandler",value:function(){var e=this,t=this.w;if(t.config.chart.brush.enabled&&typeof t.config.chart.events.selection!="function"){var i=t.config.chart.brush.targets||[t.config.chart.brush.target];i.forEach(function(a){var r=ApexCharts.getChartByID(a);r.w.globals.brushSource=e.ctx,typeof r.w.config.chart.events.zoomed!="function"&&(r.w.config.chart.events.zoomed=function(){e.updateSourceChart(r)}),typeof r.w.config.chart.events.scrolled!="function"&&(r.w.config.chart.events.scrolled=function(){e.updateSourceChart(r)})}),t.config.chart.events.selection=function(a,r){i.forEach(function(l){var o=ApexCharts.getChartByID(l),h=T.clone(t.config.yaxis);if(t.config.chart.brush.autoScaleYaxis&&o.w.globals.series.length===1){var d=new B(o);h=d.autoScaleY(o,h,r)}var p=o.w.config.yaxis.reduce(function(x,b,y){return[].concat(K(x),[u(u({},o.w.config.yaxis[y]),{},{min:h[0].min,max:h[0].max})])},[]);o.ctx.updateHelpers._updateOptions({xaxis:{min:r.xaxis.min,max:r.xaxis.max},yaxis:p},!1,!1,!1,!1)})}}}}]),L}(),ju=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"_updateOptions",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],l=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return new Promise(function(o){var h=[t.ctx];r&&(h=t.ctx.getSyncedCharts()),t.ctx.w.globals.isExecCalled&&(h=[t.ctx],t.ctx.w.globals.isExecCalled=!1),h.forEach(function(d,p){var x=d.w;if(x.globals.shouldAnimate=a,i||(x.globals.resized=!0,x.globals.dataChanged=!0,a&&d.series.getPreviousPaths()),e&&g(e)==="object"&&(d.config=new U(e),e=ce.extendArrayProps(d.config,e,x),d.w.globals.chartID!==t.ctx.w.globals.chartID&&delete e.series,x.config=T.extend(x.config,e),l&&(x.globals.lastXAxis=e.xaxis?T.clone(e.xaxis):[],x.globals.lastYAxis=e.yaxis?T.clone(e.yaxis):[],x.globals.initialConfig=T.extend({},x.config),x.globals.initialSeries=T.clone(x.config.series),e.series))){for(var b=0;b<x.globals.collapsedSeriesIndices.length;b++){var y=x.config.series[x.globals.collapsedSeriesIndices[b]];x.globals.collapsedSeries[b].data=x.globals.axisCharts?y.data.slice():y}for(var S=0;S<x.globals.ancillaryCollapsedSeriesIndices.length;S++){var A=x.config.series[x.globals.ancillaryCollapsedSeriesIndices[S]];x.globals.ancillaryCollapsedSeries[S].data=x.globals.axisCharts?A.data.slice():A}d.series.emptyCollapsedSeries(x.config.series)}return d.update(e).then(function(){p===h.length-1&&o(d)})})})}},{key:"_updateSeries",value:function(e,t){var i=this,a=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return new Promise(function(r){var l,o=i.w;return o.globals.shouldAnimate=t,o.globals.dataChanged=!0,t&&i.ctx.series.getPreviousPaths(),o.globals.axisCharts?((l=e.map(function(h,d){return i._extendSeries(h,d)})).length===0&&(l=[{data:[]}]),o.config.series=l):o.config.series=e.slice(),a&&(o.globals.initialSeries=T.clone(o.config.series)),i.ctx.update().then(function(){r(i.ctx)})})}},{key:"_extendSeries",value:function(e,t){var i=this.w,a=i.config.series[t];return u(u({},i.config.series[t]),{},{name:e.name?e.name:a&&a.name,color:e.color?e.color:a&&a.color,type:e.type?e.type:a&&a.type,data:e.data?e.data:a&&a.data})}},{key:"toggleDataPointSelection",value:function(e,t){var i=this.w,a=null,r=".apexcharts-series[data\\:realIndex='".concat(e,"']");return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(r," path[j='").concat(t,"'], ").concat(r," circle[j='").concat(t,"'], ").concat(r," rect[j='").concat(t,"']")).members[0]:t===void 0&&(a=i.globals.dom.Paper.select("".concat(r," path[j='").concat(e,"']")).members[0],i.config.chart.type!=="pie"&&i.config.chart.type!=="polarArea"&&i.config.chart.type!=="donut"||this.ctx.pie.pieClicked(e)),a?(new H(this.ctx).pathMouseDown(a,null),a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"),null)}},{key:"forceXAxisUpdate",value:function(e){var t=this.w;if(["min","max"].forEach(function(a){e.xaxis[a]!==void 0&&(t.config.xaxis[a]=e.xaxis[a],t.globals.lastXAxis[a]=e.xaxis[a])}),e.xaxis.categories&&e.xaxis.categories.length&&(t.config.xaxis.categories=e.xaxis.categories),t.config.xaxis.convertedCatToNumeric){var i=new ht(e);e=i.convertCatToNumericXaxis(e,this.ctx)}return e}},{key:"forceYAxisUpdate",value:function(e){return e.chart&&e.chart.stacked&&e.chart.stackType==="100%"&&(Array.isArray(e.yaxis)?e.yaxis.forEach(function(t,i){e.yaxis[i].min=0,e.yaxis[i].max=100}):(e.yaxis.min=0,e.yaxis.max=100)),e}},{key:"revertDefaultAxisMinMax",value:function(e){var t=this,i=this.w,a=i.globals.lastXAxis,r=i.globals.lastYAxis;e&&e.xaxis&&(a=e.xaxis),e&&e.yaxis&&(r=e.yaxis),i.config.xaxis.min=a.min,i.config.xaxis.max=a.max;var l=function(o){r[o]!==void 0&&(i.config.yaxis[o].min=r[o].min,i.config.yaxis[o].max=r[o].max)};i.config.yaxis.map(function(o,h){i.globals.zoomed||r[h]!==void 0?l(h):t.ctx.opts.yaxis[h]!==void 0&&(o.min=t.ctx.opts.yaxis[h].min,o.max=t.ctx.opts.yaxis[h].max)})}}]),L}();Fi=typeof window<"u"?window:void 0,pa=function(L,e){var t=(this!==void 0?this:L).SVG=function(f){if(t.supported)return f=new t.Doc(f),t.parser.draw||t.prepare(),f};if(t.ns="http://www.w3.org/2000/svg",t.xmlns="http://www.w3.org/2000/xmlns/",t.xlink="http://www.w3.org/1999/xlink",t.svgjs="http://svgjs.dev",t.supported=!0,!t.supported)return!1;t.did=1e3,t.eid=function(f){return"Svgjs"+p(f)+t.did++},t.create=function(f){var v=e.createElementNS(this.ns,f);return v.setAttribute("id",this.eid(f)),v},t.extend=function(){var f,v;v=(f=[].slice.call(arguments)).pop();for(var C=f.length-1;C>=0;C--)if(f[C])for(var M in v)f[C].prototype[M]=v[M];t.Set&&t.Set.inherit&&t.Set.inherit()},t.invent=function(f){var v=typeof f.create=="function"?f.create:function(){this.constructor.call(this,t.create(f.create))};return f.inherit&&(v.prototype=new f.inherit),f.extend&&t.extend(v,f.extend),f.construct&&t.extend(f.parent||t.Container,f.construct),v},t.adopt=function(f){return f?f.instance?f.instance:((v=f.nodeName=="svg"?f.parentNode instanceof L.SVGElement?new t.Nested:new t.Doc:f.nodeName=="linearGradient"?new t.Gradient("linear"):f.nodeName=="radialGradient"?new t.Gradient("radial"):t[p(f.nodeName)]?new t[p(f.nodeName)]:new t.Element(f)).type=f.nodeName,v.node=f,f.instance=v,v instanceof t.Doc&&v.namespace().defs(),v.setData(JSON.parse(f.getAttribute("svgjs:data"))||{}),v):null;var v},t.prepare=function(){var f=e.getElementsByTagName("body")[0],v=(f?new t.Doc(f):t.adopt(e.documentElement).nested()).size(2,0);t.parser={body:f||e.documentElement,draw:v.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,poly:v.polyline().node,path:v.path().node,native:t.create("svg")}},t.parser={native:t.create("svg")},e.addEventListener("DOMContentLoaded",function(){t.parser.draw||t.prepare()},!1),t.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,transforms:/\)\s*,?\s*/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},t.utils={map:function(f,v){for(var C=f.length,M=[],X=0;X<C;X++)M.push(v(f[X]));return M},filter:function(f,v){for(var C=f.length,M=[],X=0;X<C;X++)v(f[X])&&M.push(f[X]);return M},filterSVGElements:function(f){return this.filter(f,function(v){return v instanceof L.SVGElement})}},t.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},t.Color=function(f){var v,C;this.r=0,this.g=0,this.b=0,f&&(typeof f=="string"?t.regex.isRgb.test(f)?(v=t.regex.rgb.exec(f.replace(t.regex.whitespace,"")),this.r=parseInt(v[1]),this.g=parseInt(v[2]),this.b=parseInt(v[3])):t.regex.isHex.test(f)&&(v=t.regex.hex.exec((C=f).length==4?["#",C.substring(1,2),C.substring(1,2),C.substring(2,3),C.substring(2,3),C.substring(3,4),C.substring(3,4)].join(""):C),this.r=parseInt(v[1],16),this.g=parseInt(v[2],16),this.b=parseInt(v[3],16)):g(f)==="object"&&(this.r=f.r,this.g=f.g,this.b=f.b))},t.extend(t.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+x(this.r)+x(this.g)+x(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(f){return this.destination=new t.Color(f),this},at:function(f){return this.destination?(f=f<0?0:f>1?1:f,new t.Color({r:~~(this.r+(this.destination.r-this.r)*f),g:~~(this.g+(this.destination.g-this.g)*f),b:~~(this.b+(this.destination.b-this.b)*f)})):this}}),t.Color.test=function(f){return f+="",t.regex.isHex.test(f)||t.regex.isRgb.test(f)},t.Color.isRgb=function(f){return f&&typeof f.r=="number"&&typeof f.g=="number"&&typeof f.b=="number"},t.Color.isColor=function(f){return t.Color.isRgb(f)||t.Color.test(f)},t.Array=function(f,v){(f=(f||[]).valueOf()).length==0&&v&&(f=v.valueOf()),this.value=this.parse(f)},t.extend(t.Array,{toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(f){return f=f.valueOf(),Array.isArray(f)?f:this.split(f)}}),t.PointArray=function(f,v){t.Array.call(this,f,v||[[0,0]])},t.PointArray.prototype=new t.Array,t.PointArray.prototype.constructor=t.PointArray;for(var i={M:function(f,v,C){return v.x=C.x=f[0],v.y=C.y=f[1],["M",v.x,v.y]},L:function(f,v){return v.x=f[0],v.y=f[1],["L",f[0],f[1]]},H:function(f,v){return v.x=f[0],["H",f[0]]},V:function(f,v){return v.y=f[0],["V",f[0]]},C:function(f,v){return v.x=f[4],v.y=f[5],["C",f[0],f[1],f[2],f[3],f[4],f[5]]},Q:function(f,v){return v.x=f[2],v.y=f[3],["Q",f[0],f[1],f[2],f[3]]},Z:function(f,v,C){return v.x=C.x,v.y=C.y,["Z"]}},a="mlhvqtcsaz".split(""),r=0,l=a.length;r<l;++r)i[a[r]]=function(f){return function(v,C,M){if(f=="H")v[0]=v[0]+C.x;else if(f=="V")v[0]=v[0]+C.y;else if(f=="A")v[5]=v[5]+C.x,v[6]=v[6]+C.y;else for(var X=0,G=v.length;X<G;++X)v[X]=v[X]+(X%2?C.y:C.x);if(i&&typeof i[f]=="function")return i[f](v,C,M)}}(a[r].toUpperCase());t.PathArray=function(f,v){t.Array.call(this,f,v||[["M",0,0]])},t.PathArray.prototype=new t.Array,t.PathArray.prototype.constructor=t.PathArray,t.extend(t.PathArray,{toString:function(){return function(f){for(var v=0,C=f.length,M="";v<C;v++)M+=f[v][0],f[v][1]!=null&&(M+=f[v][1],f[v][2]!=null&&(M+=" ",M+=f[v][2],f[v][3]!=null&&(M+=" ",M+=f[v][3],M+=" ",M+=f[v][4],f[v][5]!=null&&(M+=" ",M+=f[v][5],M+=" ",M+=f[v][6],f[v][7]!=null&&(M+=" ",M+=f[v][7])))));return M+" "}(this.value)},move:function(f,v){var C=this.bbox();return C.x,C.y,this},at:function(f){if(!this.destination)return this;for(var v=this.value,C=this.destination.value,M=[],X=new t.PathArray,G=0,Y=v.length;G<Y;G++){M[G]=[v[G][0]];for(var re=1,te=v[G].length;re<te;re++)M[G][re]=v[G][re]+(C[G][re]-v[G][re])*f;M[G][0]==="A"&&(M[G][4]=+(M[G][4]!=0),M[G][5]=+(M[G][5]!=0))}return X.value=M,X},parse:function(f){if(f instanceof t.PathArray)return f.valueOf();var v,C={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0};f=typeof f=="string"?f.replace(t.regex.numbersWithDots,h).replace(t.regex.pathLetters," $& ").replace(t.regex.hyphen,"$1 -").trim().split(t.regex.delimiter):f.reduce(function(te,pe){return[].concat.call(te,pe)},[]);var M=[],X=new t.Point,G=new t.Point,Y=0,re=f.length;do t.regex.isPathLetter.test(f[Y])?(v=f[Y],++Y):v=="M"?v="L":v=="m"&&(v="l"),M.push(i[v].call(null,f.slice(Y,Y+=C[v.toUpperCase()]).map(parseFloat),X,G));while(re>Y);return M},bbox:function(){return t.parser.draw||t.prepare(),t.parser.path.setAttribute("d",this.toString()),t.parser.path.getBBox()}}),t.Number=t.invent({create:function(f,v){this.value=0,this.unit=v||"",typeof f=="number"?this.value=isNaN(f)?0:isFinite(f)?f:f<0?-34e37:34e37:typeof f=="string"?(v=f.match(t.regex.numberAndUnit))&&(this.value=parseFloat(v[1]),v[5]=="%"?this.value/=100:v[5]=="s"&&(this.value*=1e3),this.unit=v[5]):f instanceof t.Number&&(this.value=f.valueOf(),this.unit=f.unit)},extend:{toString:function(){return(this.unit=="%"?~~(1e8*this.value)/1e6:this.unit=="s"?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(f){return f=new t.Number(f),new t.Number(this+f,this.unit||f.unit)},minus:function(f){return f=new t.Number(f),new t.Number(this-f,this.unit||f.unit)},times:function(f){return f=new t.Number(f),new t.Number(this*f,this.unit||f.unit)},divide:function(f){return f=new t.Number(f),new t.Number(this/f,this.unit||f.unit)},to:function(f){var v=new t.Number(this);return typeof f=="string"&&(v.unit=f),v},morph:function(f){return this.destination=new t.Number(f),f.relative&&(this.destination.value+=this.value),this},at:function(f){return this.destination?new t.Number(this.destination).minus(this).times(f).plus(this):this}}}),t.Element=t.invent({create:function(f){this._stroke=t.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=f)&&(this.type=f.nodeName,this.node.instance=this,this._stroke=f.getAttribute("stroke")||this._stroke)},extend:{x:function(f){return this.attr("x",f)},y:function(f){return this.attr("y",f)},cx:function(f){return f==null?this.x()+this.width()/2:this.x(f-this.width()/2)},cy:function(f){return f==null?this.y()+this.height()/2:this.y(f-this.height()/2)},move:function(f,v){return this.x(f).y(v)},center:function(f,v){return this.cx(f).cy(v)},width:function(f){return this.attr("width",f)},height:function(f){return this.attr("height",f)},size:function(f,v){var C=b(this,f,v);return this.width(new t.Number(C.width)).height(new t.Number(C.height))},clone:function(f){this.writeDataToDom();var v=A(this.node.cloneNode(!0));return f?f.add(v):this.after(v),v},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(f){return this.after(f).remove(),f},addTo:function(f){return f.put(this)},putIn:function(f){return f.add(this)},id:function(f){return this.attr("id",f)},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return this.style("display")!="none"},toString:function(){return this.attr("id")},classes:function(){var f=this.attr("class");return f==null?[]:f.trim().split(t.regex.delimiter)},hasClass:function(f){return this.classes().indexOf(f)!=-1},addClass:function(f){if(!this.hasClass(f)){var v=this.classes();v.push(f),this.attr("class",v.join(" "))}return this},removeClass:function(f){return this.hasClass(f)&&this.attr("class",this.classes().filter(function(v){return v!=f}).join(" ")),this},toggleClass:function(f){return this.hasClass(f)?this.removeClass(f):this.addClass(f)},reference:function(f){return t.get(this.attr(f))},parent:function(f){var v=this;if(!v.node.parentNode)return null;if(v=t.adopt(v.node.parentNode),!f)return v;for(;v&&v.node instanceof L.SVGElement;){if(typeof f=="string"?v.matches(f):v instanceof f)return v;if(!v.node.parentNode||v.node.parentNode.nodeName=="#document")return null;v=t.adopt(v.node.parentNode)}},doc:function(){return this instanceof t.Doc?this:this.parent(t.Doc)},parents:function(f){var v=[],C=this;do{if(!(C=C.parent(f))||!C.node)break;v.push(C)}while(C.parent);return v},matches:function(f){return function(v,C){return(v.matches||v.matchesSelector||v.msMatchesSelector||v.mozMatchesSelector||v.webkitMatchesSelector||v.oMatchesSelector).call(v,C)}(this.node,f)},native:function(){return this.node},svg:function(f){var v=e.createElement("svg");if(!(f&&this instanceof t.Parent))return v.appendChild(f=e.createElement("svg")),this.writeDataToDom(),f.appendChild(this.node.cloneNode(!0)),v.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");v.innerHTML="<svg>"+f.replace(/\n/,"").replace(/<([\w:-]+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var C=0,M=v.firstChild.childNodes.length;C<M;C++)this.node.appendChild(v.firstChild.firstChild);return this},writeDataToDom:function(){return(this.each||this.lines)&&(this.each?this:this.lines()).each(function(){this.writeDataToDom()}),this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(f){return this.dom=f,this},is:function(f){return function(v,C){return v instanceof C}(this,f)}}}),t.easing={"-":function(f){return f},"<>":function(f){return-Math.cos(f*Math.PI)/2+.5},">":function(f){return Math.sin(f*Math.PI/2)},"<":function(f){return 1-Math.cos(f*Math.PI/2)}},t.morph=function(f){return function(v,C){return new t.MorphObj(v,C).at(f)}},t.Situation=t.invent({create:function(f){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new t.Number(f.duration).valueOf(),this.delay=new t.Number(f.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=f.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),t.FX=t.invent({create:function(f){this._target=f,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(f,v,C){g(f)==="object"&&(v=f.ease,C=f.delay,f=f.duration);var M=new t.Situation({duration:f||1e3,delay:C||0,ease:t.easing[v||"-"]||v});return this.queue(M),this},target:function(f){return f&&f instanceof t.Element?(this._target=f,this):this._target},timeToAbsPos:function(f){return(f-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(f){return this.situation.duration/this._speed*f+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=L.requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){L.cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(f){return(typeof f=="function"||f instanceof t.Situation)&&this.situations.push(f),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof t.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var f,v=this.situation;if(v.init)return this;for(var C in v.animations){f=this.target()[C](),Array.isArray(f)||(f=[f]),Array.isArray(v.animations[C])||(v.animations[C]=[v.animations[C]]);for(var M=f.length;M--;)v.animations[C][M]instanceof t.Number&&(f[M]=new t.Number(f[M])),v.animations[C][M]=f[M].morph(v.animations[C][M])}for(var C in v.attrs)v.attrs[C]=new t.MorphObj(this.target().attr(C),v.attrs[C]);for(var C in v.styles)v.styles[C]=new t.MorphObj(this.target().style(C),v.styles[C]);return v.initialTransformation=this.target().matrixify(),v.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(f,v){var C=this.active;return this.active=!1,v&&this.clearQueue(),f&&this.situation&&(!C&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},after:function(f){var v=this.last();return this.target().on("finished.fx",function C(M){M.detail.situation==v&&(f.call(this,v),this.off("finished.fx",C))}),this._callStart()},during:function(f){var v=this.last(),C=function(M){M.detail.situation==v&&f.call(this,M.detail.pos,t.morph(M.detail.pos),M.detail.eased,v)};return this.target().off("during.fx",C).on("during.fx",C),this.after(function(){this.off("during.fx",C)}),this._callStart()},afterAll:function(f){var v=function C(M){f.call(this),this.off("allfinished.fx",C)};return this.target().off("allfinished.fx",v).on("allfinished.fx",v),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(f,v,C){return this.last()[C||"animations"][f]=v,this._callStart()},step:function(f){var v,C,M;f||(this.absPos=this.timeToAbsPos(+new Date)),this.situation.loops!==!1?(v=Math.max(this.absPos,0),C=Math.floor(v),this.situation.loops===!0||C<this.situation.loops?(this.pos=v-C,M=this.situation.loop,this.situation.loop=C):(this.absPos=this.situation.loops,this.pos=1,M=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-M)%2))):(this.absPos=Math.min(this.absPos,1),this.pos=this.absPos),this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var X=this.situation.ease(this.pos);for(var G in this.situation.once)G>this.lastPos&&G<=X&&(this.situation.once[G].call(this.target(),this.pos,X),delete this.situation.once[G]);return this.active&&this.target().fire("during",{pos:this.pos,eased:X,fx:this,situation:this.situation}),this.situation?(this.eachAt(),this.pos==1&&!this.situation.reversed||this.situation.reversed&&this.pos==0?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.situations.length||(this.target().off(".fx"),this.active=!1)),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=X,this):this},eachAt:function(){var f,v=this,C=this.target(),M=this.situation;for(var X in M.animations)f=[].concat(M.animations[X]).map(function(re){return typeof re!="string"&&re.at?re.at(M.ease(v.pos),v.pos):re}),C[X].apply(C,f);for(var X in M.attrs)f=[X].concat(M.attrs[X]).map(function(te){return typeof te!="string"&&te.at?te.at(M.ease(v.pos),v.pos):te}),C.attr.apply(C,f);for(var X in M.styles)f=[X].concat(M.styles[X]).map(function(te){return typeof te!="string"&&te.at?te.at(M.ease(v.pos),v.pos):te}),C.style.apply(C,f);if(M.transforms.length){f=M.initialTransformation,X=0;for(var G=M.transforms.length;X<G;X++){var Y=M.transforms[X];Y instanceof t.Matrix?f=Y.relative?f.multiply(new t.Matrix().morph(Y).at(M.ease(this.pos))):f.morph(Y).at(M.ease(this.pos)):(Y.relative||Y.undo(f.extract()),f=f.multiply(Y.at(M.ease(this.pos))))}C.matrix(f)}return this},once:function(f,v,C){var M=this.last();return C||(f=M.ease(f)),M.once[f]=v,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:t.Element,construct:{animate:function(f,v,C){return(this.fx||(this.fx=new t.FX(this))).animate(f,v,C)},delay:function(f){return(this.fx||(this.fx=new t.FX(this))).delay(f)},stop:function(f,v){return this.fx&&this.fx.stop(f,v),this},finish:function(){return this.fx&&this.fx.finish(),this}}}),t.MorphObj=t.invent({create:function(f,v){return t.Color.isColor(v)?new t.Color(f).morph(v):t.regex.delimiter.test(f)?t.regex.pathLetters.test(f)?new t.PathArray(f).morph(v):new t.Array(f).morph(v):t.regex.numberAndUnit.test(v)?new t.Number(f).morph(v):(this.value=f,void(this.destination=v))},extend:{at:function(f,v){return v<1?this.value:this.destination},valueOf:function(){return this.value}}}),t.extend(t.FX,{attr:function(f,v,C){if(g(f)==="object")for(var M in f)this.attr(M,f[M]);else this.add(f,v,"attrs");return this},plot:function(f,v,C,M){return arguments.length==4?this.plot([f,v,C,M]):this.add("plot",new(this.target()).morphArray(f))}}),t.Box=t.invent({create:function(f,v,C,M){if(!(g(f)!=="object"||f instanceof t.Element))return t.Box.call(this,f.left!=null?f.left:f.x,f.top!=null?f.top:f.y,f.width,f.height);arguments.length==4&&(this.x=f,this.y=v,this.width=C,this.height=M),E(this)}}),t.BBox=t.invent({create:function(f){if(t.Box.apply(this,[].slice.call(arguments)),f instanceof t.Element){var v;try{if(!e.documentElement.contains){for(var C=f.node;C.parentNode;)C=C.parentNode;if(C!=e)throw new Error("Element not in the dom")}v=f.node.getBBox()}catch{if(f instanceof t.Shape){t.parser.draw||t.prepare();var M=f.clone(t.parser.draw.instance).show();M&&M.node&&typeof M.node.getBBox=="function"&&(v=M.node.getBBox()),M&&typeof M.remove=="function"&&M.remove()}else v={x:f.node.clientLeft,y:f.node.clientTop,width:f.node.clientWidth,height:f.node.clientHeight}}t.Box.call(this,v)}},inherit:t.Box,parent:t.Element,construct:{bbox:function(){return new t.BBox(this)}}}),t.BBox.prototype.constructor=t.BBox,t.Matrix=t.invent({create:function(f){var v=S([1,0,0,1,0,0]);f=f===null?v:f instanceof t.Element?f.matrixify():typeof f=="string"?S(f.split(t.regex.delimiter).map(parseFloat)):arguments.length==6?S([].slice.call(arguments)):Array.isArray(f)?S(f):f&&g(f)==="object"?f:v;for(var C=R.length-1;C>=0;--C)this[R[C]]=f[R[C]]!=null?f[R[C]]:v[R[C]]},extend:{extract:function(){var f=y(this,0,1);y(this,1,0);var v=180/Math.PI*Math.atan2(f.y,f.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(v*Math.PI/180)+this.f*Math.sin(v*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(v*Math.PI/180)+this.e*Math.sin(-v*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),rotation:v,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new t.Matrix(this)}},clone:function(){return new t.Matrix(this)},morph:function(f){return this.destination=new t.Matrix(f),this},multiply:function(f){return new t.Matrix(this.native().multiply(function(v){return v instanceof t.Matrix||(v=new t.Matrix(v)),v}(f).native()))},inverse:function(){return new t.Matrix(this.native().inverse())},translate:function(f,v){return new t.Matrix(this.native().translate(f||0,v||0))},native:function(){for(var f=t.parser.native.createSVGMatrix(),v=R.length-1;v>=0;v--)f[R[v]]=this[R[v]];return f},toString:function(){return"matrix("+_(this.a)+","+_(this.b)+","+_(this.c)+","+_(this.d)+","+_(this.e)+","+_(this.f)+")"}},parent:t.Element,construct:{ctm:function(){return new t.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof t.Nested){var f=this.rect(1,1),v=f.node.getScreenCTM();return f.remove(),new t.Matrix(v)}return new t.Matrix(this.node.getScreenCTM())}}}),t.Point=t.invent({create:function(f,v){var C;C=Array.isArray(f)?{x:f[0],y:f[1]}:g(f)==="object"?{x:f.x,y:f.y}:f!=null?{x:f,y:v!=null?v:f}:{x:0,y:0},this.x=C.x,this.y=C.y},extend:{clone:function(){return new t.Point(this)},morph:function(f,v){return this.destination=new t.Point(f,v),this}}}),t.extend(t.Element,{point:function(f,v){return new t.Point(f,v).transform(this.screenCTM().inverse())}}),t.extend(t.Element,{attr:function(f,v,C){if(f==null){for(f={},C=(v=this.node.attributes).length-1;C>=0;C--)f[v[C].nodeName]=t.regex.isNumber.test(v[C].nodeValue)?parseFloat(v[C].nodeValue):v[C].nodeValue;return f}if(g(f)==="object")for(var M in f)this.attr(M,f[M]);else if(v===null)this.node.removeAttribute(f);else{if(v==null)return(v=this.node.getAttribute(f))==null?t.defaults.attrs[f]:t.regex.isNumber.test(v)?parseFloat(v):v;f=="stroke-width"?this.attr("stroke",parseFloat(v)>0?this._stroke:null):f=="stroke"&&(this._stroke=v),f!="fill"&&f!="stroke"||(t.regex.isImage.test(v)&&(v=this.doc().defs().image(v,0,0)),v instanceof t.Image&&(v=this.doc().defs().pattern(0,0,function(){this.add(v)}))),typeof v=="number"?v=new t.Number(v):t.Color.isColor(v)?v=new t.Color(v):Array.isArray(v)&&(v=new t.Array(v)),f=="leading"?this.leading&&this.leading(v):typeof C=="string"?this.node.setAttributeNS(C,f,v.toString()):this.node.setAttribute(f,v.toString()),!this.rebuild||f!="font-size"&&f!="x"||this.rebuild(f,v)}return this}}),t.extend(t.Element,{transform:function(f,v){var C;return g(f)!=="object"?(C=new t.Matrix(this).extract(),typeof f=="string"?C[f]:C):(C=new t.Matrix(this),v=!!v||!!f.relative,f.a!=null&&(C=v?C.multiply(new t.Matrix(f)):new t.Matrix(f)),this.attr("transform",C))}}),t.extend(t.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){return(this.attr("transform")||"").split(t.regex.transforms).slice(0,-1).map(function(f){var v=f.trim().split("(");return[v[0],v[1].split(t.regex.delimiter).map(function(C){return parseFloat(C)})]}).reduce(function(f,v){return v[0]=="matrix"?f.multiply(S(v[1])):f[v[0]].apply(f,v[1])},new t.Matrix)},toParent:function(f){if(this==f)return this;var v=this.screenCTM(),C=f.screenCTM().inverse();return this.addTo(f).untransform().transform(C.multiply(v)),this},toDoc:function(){return this.toParent(this.doc())}}),t.Transformation=t.invent({create:function(f,v){if(arguments.length>1&&typeof v!="boolean")return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(f))for(var C=0,M=this.arguments.length;C<M;++C)this[this.arguments[C]]=f[C];else if(f&&g(f)==="object")for(C=0,M=this.arguments.length;C<M;++C)this[this.arguments[C]]=f[this.arguments[C]];this.inversed=!1,v===!0&&(this.inversed=!0)}}),t.Translate=t.invent({parent:t.Matrix,inherit:t.Transformation,create:function(f,v){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),t.extend(t.Element,{style:function(f,v){if(arguments.length==0)return this.node.style.cssText||"";if(arguments.length<2)if(g(f)==="object")for(var C in f)this.style(C,f[C]);else{if(!t.regex.isCss.test(f))return this.node.style[d(f)];for(f=f.split(/\s*;\s*/).filter(function(M){return!!M}).map(function(M){return M.split(/\s*:\s*/)});v=f.pop();)this.style(v[0],v[1])}else this.node.style[d(f)]=v===null||t.regex.isBlank.test(v)?"":v;return this}}),t.Parent=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Element,extend:{children:function(){return t.utils.map(t.utils.filterSVGElements(this.node.childNodes),function(f){return t.adopt(f)})},add:function(f,v){return v==null?this.node.appendChild(f.node):f.node!=this.node.childNodes[v]&&this.node.insertBefore(f.node,this.node.childNodes[v]),this},put:function(f,v){return this.add(f,v),f},has:function(f){return this.index(f)>=0},index:function(f){return[].slice.call(this.node.childNodes).indexOf(f.node)},get:function(f){return t.adopt(this.node.childNodes[f])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(f,v){for(var C=this.children(),M=0,X=C.length;M<X;M++)C[M]instanceof t.Element&&f.apply(C[M],[M,C]),v&&C[M]instanceof t.Container&&C[M].each(f,v);return this},removeElement:function(f){return this.node.removeChild(f.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),t.extend(t.Parent,{ungroup:function(f,v){return v===0||this instanceof t.Defs||this.node==t.parser.draw||(f=f||(this instanceof t.Doc?this:this.parent(t.Parent)),v=v||1/0,this.each(function(){return this instanceof t.Defs?this:this instanceof t.Parent?this.ungroup(f,v-1):this.toParent(f)}),this.node.firstChild||this.remove()),this},flatten:function(f,v){return this.ungroup(f,v)}}),t.Container=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Parent}),t.ViewBox=t.invent({parent:t.Container,construct:{}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(f){t.Element.prototype[f]=function(v){return t.on(this.node,f,v),this}}),t.listeners=[],t.handlerMap=[],t.listenerId=0,t.on=function(f,v,C,M,X){var G=C.bind(M||f.instance||f),Y=(t.handlerMap.indexOf(f)+1||t.handlerMap.push(f))-1,re=v.split(".")[0],te=v.split(".")[1]||"*";t.listeners[Y]=t.listeners[Y]||{},t.listeners[Y][re]=t.listeners[Y][re]||{},t.listeners[Y][re][te]=t.listeners[Y][re][te]||{},C._svgjsListenerId||(C._svgjsListenerId=++t.listenerId),t.listeners[Y][re][te][C._svgjsListenerId]=G,f.addEventListener(re,G,X||{passive:!0})},t.off=function(f,v,C){var M=t.handlerMap.indexOf(f),X=v&&v.split(".")[0],G=v&&v.split(".")[1],Y="";if(M!=-1)if(C){if(typeof C=="function"&&(C=C._svgjsListenerId),!C)return;t.listeners[M][X]&&t.listeners[M][X][G||"*"]&&(f.removeEventListener(X,t.listeners[M][X][G||"*"][C],!1),delete t.listeners[M][X][G||"*"][C])}else if(G&&X){if(t.listeners[M][X]&&t.listeners[M][X][G]){for(var re in t.listeners[M][X][G])t.off(f,[X,G].join("."),re);delete t.listeners[M][X][G]}}else if(G)for(var te in t.listeners[M])for(var Y in t.listeners[M][te])G===Y&&t.off(f,[te,G].join("."));else if(X){if(t.listeners[M][X]){for(var Y in t.listeners[M][X])t.off(f,[X,Y].join("."));delete t.listeners[M][X]}}else{for(var te in t.listeners[M])t.off(f,te);delete t.listeners[M],delete t.handlerMap[M]}},t.extend(t.Element,{on:function(f,v,C,M){return t.on(this.node,f,v,C,M),this},off:function(f,v){return t.off(this.node,f,v),this},fire:function(f,v){return f instanceof L.Event?this.node.dispatchEvent(f):this.node.dispatchEvent(f=new t.CustomEvent(f,{detail:v,cancelable:!0})),this._event=f,this},event:function(){return this._event}}),t.Defs=t.invent({create:"defs",inherit:t.Container}),t.G=t.invent({create:"g",inherit:t.Container,extend:{x:function(f){return f==null?this.transform("x"):this.transform({x:f-this.x()},!0)}},construct:{group:function(){return this.put(new t.G)}}}),t.Doc=t.invent({create:function(f){f&&((f=typeof f=="string"?e.getElementById(f):f).nodeName=="svg"?this.constructor.call(this,f):(this.constructor.call(this,t.create("svg")),f.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:t.Container,extend:{namespace:function(){return this.attr({xmlns:t.ns,version:"1.1"}).attr("xmlns:xlink",t.xlink,t.xmlns).attr("xmlns:svgjs",t.svgjs,t.xmlns)},defs:function(){var f;return this._defs||((f=this.node.getElementsByTagName("defs")[0])?this._defs=t.adopt(f):this._defs=new t.Defs,this.node.appendChild(this._defs.node)),this._defs},parent:function(){return this.node.parentNode&&this.node.parentNode.nodeName!="#document"?this.node.parentNode:null},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,t.parser.draw&&!t.parser.draw.parentNode&&this.node.appendChild(t.parser.draw),this},clone:function(f){this.writeDataToDom();var v=this.node,C=A(v.cloneNode(!0));return f?(f.node||f).appendChild(C.node):v.parentNode.insertBefore(C.node,v.nextSibling),C}}}),t.extend(t.Element,{}),t.Gradient=t.invent({create:function(f){this.constructor.call(this,t.create(f+"Gradient")),this.type=f},inherit:t.Container,extend:{at:function(f,v,C){return this.put(new t.Stop).update(f,v,C)},update:function(f){return this.clear(),typeof f=="function"&&f.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(f,v,C){return f=="transform"&&(f="gradientTransform"),t.Container.prototype.attr.call(this,f,v,C)}},construct:{gradient:function(f,v){return this.defs().gradient(f,v)}}}),t.extend(t.Gradient,t.FX,{from:function(f,v){return(this._target||this).type=="radial"?this.attr({fx:new t.Number(f),fy:new t.Number(v)}):this.attr({x1:new t.Number(f),y1:new t.Number(v)})},to:function(f,v){return(this._target||this).type=="radial"?this.attr({cx:new t.Number(f),cy:new t.Number(v)}):this.attr({x2:new t.Number(f),y2:new t.Number(v)})}}),t.extend(t.Defs,{gradient:function(f,v){return this.put(new t.Gradient(f)).update(v)}}),t.Stop=t.invent({create:"stop",inherit:t.Element,extend:{update:function(f){return(typeof f=="number"||f instanceof t.Number)&&(f={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),f.opacity!=null&&this.attr("stop-opacity",f.opacity),f.color!=null&&this.attr("stop-color",f.color),f.offset!=null&&this.attr("offset",new t.Number(f.offset)),this}}}),t.Pattern=t.invent({create:"pattern",inherit:t.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(f){return this.clear(),typeof f=="function"&&f.call(this,this),this},toString:function(){return this.fill()},attr:function(f,v,C){return f=="transform"&&(f="patternTransform"),t.Container.prototype.attr.call(this,f,v,C)}},construct:{pattern:function(f,v,C){return this.defs().pattern(f,v,C)}}}),t.extend(t.Defs,{pattern:function(f,v,C){return this.put(new t.Pattern).update(C).attr({x:0,y:0,width:f,height:v,patternUnits:"userSpaceOnUse"})}}),t.Shape=t.invent({create:function(f){this.constructor.call(this,f)},inherit:t.Element}),t.Symbol=t.invent({create:"symbol",inherit:t.Container,construct:{symbol:function(){return this.put(new t.Symbol)}}}),t.Use=t.invent({create:"use",inherit:t.Shape,extend:{element:function(f,v){return this.attr("href",(v||"")+"#"+f,t.xlink)}},construct:{use:function(f,v){return this.put(new t.Use).element(f,v)}}}),t.Rect=t.invent({create:"rect",inherit:t.Shape,construct:{rect:function(f,v){return this.put(new t.Rect).size(f,v)}}}),t.Circle=t.invent({create:"circle",inherit:t.Shape,construct:{circle:function(f){return this.put(new t.Circle).rx(new t.Number(f).divide(2)).move(0,0)}}}),t.extend(t.Circle,t.FX,{rx:function(f){return this.attr("r",f)},ry:function(f){return this.rx(f)}}),t.Ellipse=t.invent({create:"ellipse",inherit:t.Shape,construct:{ellipse:function(f,v){return this.put(new t.Ellipse).size(f,v).move(0,0)}}}),t.extend(t.Ellipse,t.Rect,t.FX,{rx:function(f){return this.attr("rx",f)},ry:function(f){return this.attr("ry",f)}}),t.extend(t.Circle,t.Ellipse,{x:function(f){return f==null?this.cx()-this.rx():this.cx(f+this.rx())},y:function(f){return f==null?this.cy()-this.ry():this.cy(f+this.ry())},cx:function(f){return f==null?this.attr("cx"):this.attr("cx",f)},cy:function(f){return f==null?this.attr("cy"):this.attr("cy",f)},width:function(f){return f==null?2*this.rx():this.rx(new t.Number(f).divide(2))},height:function(f){return f==null?2*this.ry():this.ry(new t.Number(f).divide(2))},size:function(f,v){var C=b(this,f,v);return this.rx(new t.Number(C.width).divide(2)).ry(new t.Number(C.height).divide(2))}}),t.Line=t.invent({create:"line",inherit:t.Shape,extend:{array:function(){return new t.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(f,v,C,M){return f==null?this.array():(f=v!==void 0?{x1:f,y1:v,x2:C,y2:M}:new t.PointArray(f).toLine(),this.attr(f))},move:function(f,v){return this.attr(this.array().move(f,v).toLine())},size:function(f,v){var C=b(this,f,v);return this.attr(this.array().size(C.width,C.height).toLine())}},construct:{line:function(f,v,C,M){return t.Line.prototype.plot.apply(this.put(new t.Line),f!=null?[f,v,C,M]:[0,0,0,0])}}}),t.Polyline=t.invent({create:"polyline",inherit:t.Shape,construct:{polyline:function(f){return this.put(new t.Polyline).plot(f||new t.PointArray)}}}),t.Polygon=t.invent({create:"polygon",inherit:t.Shape,construct:{polygon:function(f){return this.put(new t.Polygon).plot(f||new t.PointArray)}}}),t.extend(t.Polyline,t.Polygon,{array:function(){return this._array||(this._array=new t.PointArray(this.attr("points")))},plot:function(f){return f==null?this.array():this.clear().attr("points",typeof f=="string"?f:this._array=new t.PointArray(f))},clear:function(){return delete this._array,this},move:function(f,v){return this.attr("points",this.array().move(f,v))},size:function(f,v){var C=b(this,f,v);return this.attr("points",this.array().size(C.width,C.height))}}),t.extend(t.Line,t.Polyline,t.Polygon,{morphArray:t.PointArray,x:function(f){return f==null?this.bbox().x:this.move(f,this.bbox().y)},y:function(f){return f==null?this.bbox().y:this.move(this.bbox().x,f)},width:function(f){var v=this.bbox();return f==null?v.width:this.size(f,v.height)},height:function(f){var v=this.bbox();return f==null?v.height:this.size(v.width,f)}}),t.Path=t.invent({create:"path",inherit:t.Shape,extend:{morphArray:t.PathArray,array:function(){return this._array||(this._array=new t.PathArray(this.attr("d")))},plot:function(f){return f==null?this.array():this.clear().attr("d",typeof f=="string"?f:this._array=new t.PathArray(f))},clear:function(){return delete this._array,this}},construct:{path:function(f){return this.put(new t.Path).plot(f||new t.PathArray)}}}),t.Image=t.invent({create:"image",inherit:t.Shape,extend:{load:function(f){if(!f)return this;var v=this,C=new L.Image;return t.on(C,"load",function(){t.off(C);var M=v.parent(t.Pattern);M!==null&&(v.width()==0&&v.height()==0&&v.size(C.width,C.height),M&&M.width()==0&&M.height()==0&&M.size(v.width(),v.height()),typeof v._loaded=="function"&&v._loaded.call(v,{width:C.width,height:C.height,ratio:C.width/C.height,url:f}))}),t.on(C,"error",function(M){t.off(C),typeof v._error=="function"&&v._error.call(v,M)}),this.attr("href",C.src=this.src=f,t.xlink)},loaded:function(f){return this._loaded=f,this},error:function(f){return this._error=f,this}},construct:{image:function(f,v,C){return this.put(new t.Image).load(f).size(v||0,C||v||0)}}}),t.Text=t.invent({create:function(){this.constructor.call(this,t.create("text")),this.dom.leading=new t.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",t.defaults.attrs["font-family"])},inherit:t.Shape,extend:{x:function(f){return f==null?this.attr("x"):this.attr("x",f)},text:function(f){if(f===void 0){f="";for(var v=this.node.childNodes,C=0,M=v.length;C<M;++C)C!=0&&v[C].nodeType!=3&&t.adopt(v[C]).dom.newLined==1&&(f+=`
`),f+=v[C].textContent;return f}if(this.clear().build(!0),typeof f=="function")f.call(this,this);else{C=0;for(var X=(f=f.split(`
`)).length;C<X;C++)this.tspan(f[C]).newLine()}return this.build(!1).rebuild()},size:function(f){return this.attr("font-size",f).rebuild()},leading:function(f){return f==null?this.dom.leading:(this.dom.leading=new t.Number(f),this.rebuild())},lines:function(){var f=(this.textPath&&this.textPath()||this).node,v=t.utils.map(t.utils.filterSVGElements(f.childNodes),function(C){return t.adopt(C)});return new t.Set(v)},rebuild:function(f){if(typeof f=="boolean"&&(this._rebuild=f),this._rebuild){var v=this,C=0,M=this.dom.leading*new t.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(v.textPath()||this.attr("x",v.attr("x")),this.text()==`
`?C+=M:(this.attr("dy",M+C),C=0))}),this.fire("rebuild")}return this},build:function(f){return this._build=!!f,this},setData:function(f){return this.dom=f,this.dom.leading=new t.Number(f.leading||1.3),this}},construct:{text:function(f){return this.put(new t.Text).text(f)},plain:function(f){return this.put(new t.Text).plain(f)}}}),t.Tspan=t.invent({create:"tspan",inherit:t.Shape,extend:{text:function(f){return f==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof f=="function"?f.call(this,this):this.plain(f),this)},dx:function(f){return this.attr("dx",f)},dy:function(f){return this.attr("dy",f)},newLine:function(){var f=this.parent(t.Text);return this.dom.newLined=!0,this.dy(f.dom.leading*f.attr("font-size")).attr("x",f.x())}}}),t.extend(t.Text,t.Tspan,{plain:function(f){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(f)),this},tspan:function(f){var v=(this.textPath&&this.textPath()||this).node,C=new t.Tspan;return this._build===!1&&this.clear(),v.appendChild(C.node),C.text(f)},clear:function(){for(var f=(this.textPath&&this.textPath()||this).node;f.hasChildNodes();)f.removeChild(f.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),t.TextPath=t.invent({create:"textPath",inherit:t.Parent,parent:t.Text,construct:{morphArray:t.PathArray,array:function(){var f=this.track();return f?f.array():null},plot:function(f){var v=this.track(),C=null;return v&&(C=v.plot(f)),f==null?C:this},track:function(){var f=this.textPath();if(f)return f.reference("href")},textPath:function(){if(this.node.firstChild&&this.node.firstChild.nodeName=="textPath")return t.adopt(this.node.firstChild)}}}),t.Nested=t.invent({create:function(){this.constructor.call(this,t.create("svg")),this.style("overflow","visible")},inherit:t.Container,construct:{nested:function(){return this.put(new t.Nested)}}});var o={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(f,v){return v=="color"?f:f+"-"+v}};function h(f,v,C,M){return C+M.replace(t.regex.dots," .")}function d(f){return f.toLowerCase().replace(/-(.)/g,function(v,C){return C.toUpperCase()})}function p(f){return f.charAt(0).toUpperCase()+f.slice(1)}function x(f){var v=f.toString(16);return v.length==1?"0"+v:v}function b(f,v,C){if(v==null||C==null){var M=f.bbox();v==null?v=M.width/M.height*C:C==null&&(C=M.height/M.width*v)}return{width:v,height:C}}function y(f,v,C){return{x:v*f.a+C*f.c+0,y:v*f.b+C*f.d+0}}function S(f){return{a:f[0],b:f[1],c:f[2],d:f[3],e:f[4],f:f[5]}}function A(f){for(var v=f.childNodes.length-1;v>=0;v--)f.childNodes[v]instanceof L.SVGElement&&A(f.childNodes[v]);return t.adopt(f).id(t.eid(f.nodeName))}function E(f){return f.x==null&&(f.x=0,f.y=0,f.width=0,f.height=0),f.w=f.width,f.h=f.height,f.x2=f.x+f.width,f.y2=f.y+f.height,f.cx=f.x+f.width/2,f.cy=f.y+f.height/2,f}function _(f){return Math.abs(f)>1e-37?f:0}["fill","stroke"].forEach(function(f){var v={};v[f]=function(C){if(C===void 0)return this;if(typeof C=="string"||t.Color.isRgb(C)||C&&typeof C.fill=="function")this.attr(f,C);else for(var M=o[f].length-1;M>=0;M--)C[o[f][M]]!=null&&this.attr(o.prefix(f,o[f][M]),C[o[f][M]]);return this},t.extend(t.Element,t.FX,v)}),t.extend(t.Element,t.FX,{translate:function(f,v){return this.transform({x:f,y:v})},matrix:function(f){return this.attr("transform",new t.Matrix(arguments.length==6?[].slice.call(arguments):f))},opacity:function(f){return this.attr("opacity",f)},dx:function(f){return this.x(new t.Number(f).plus(this instanceof t.FX?0:this.x()),!0)},dy:function(f){return this.y(new t.Number(f).plus(this instanceof t.FX?0:this.y()),!0)}}),t.extend(t.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(f){return this.node.getPointAtLength(f)}}),t.Set=t.invent({create:function(f){Array.isArray(f)?this.members=f:this.clear()},extend:{add:function(){for(var f=[].slice.call(arguments),v=0,C=f.length;v<C;v++)this.members.push(f[v]);return this},remove:function(f){var v=this.index(f);return v>-1&&this.members.splice(v,1),this},each:function(f){for(var v=0,C=this.members.length;v<C;v++)f.apply(this.members[v],[v,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(f){return this.index(f)>=0},index:function(f){return this.members.indexOf(f)},get:function(f){return this.members[f]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members}},construct:{set:function(f){return new t.Set(f)}}}),t.FX.Set=t.invent({create:function(f){this.set=f}}),t.Set.inherit=function(){var f=[];for(var v in t.Shape.prototype)typeof t.Shape.prototype[v]=="function"&&typeof t.Set.prototype[v]!="function"&&f.push(v);for(var v in f.forEach(function(M){t.Set.prototype[M]=function(){for(var X=0,G=this.members.length;X<G;X++)this.members[X]&&typeof this.members[X][M]=="function"&&this.members[X][M].apply(this.members[X],arguments);return M=="animate"?this.fx||(this.fx=new t.FX.Set(this)):this}}),f=[],t.FX.prototype)typeof t.FX.prototype[v]=="function"&&typeof t.FX.Set.prototype[v]!="function"&&f.push(v);f.forEach(function(C){t.FX.Set.prototype[C]=function(){for(var M=0,X=this.set.members.length;M<X;M++)this.set.members[M].fx[C].apply(this.set.members[M].fx,arguments);return this}})},t.extend(t.Element,{}),t.extend(t.Element,{remember:function(f,v){if(g(arguments[0])==="object")for(var C in f)this.remember(C,f[C]);else{if(arguments.length==1)return this.memory()[f];this.memory()[f]=v}return this},forget:function(){if(arguments.length==0)this._memory={};else for(var f=arguments.length-1;f>=0;f--)delete this.memory()[arguments[f]];return this},memory:function(){return this._memory||(this._memory={})}}),t.get=function(f){var v=e.getElementById(function(C){var M=(C||"").toString().match(t.regex.reference);if(M)return M[1]}(f)||f);return t.adopt(v)},t.select=function(f,v){return new t.Set(t.utils.map((v||e).querySelectorAll(f),function(C){return t.adopt(C)}))},t.extend(t.Parent,{select:function(f){return t.select(f,this.node)}});var R="abcdef".split("");if(typeof L.CustomEvent!="function"){var F=function(f,v){v=v||{bubbles:!1,cancelable:!1,detail:void 0};var C=e.createEvent("CustomEvent");return C.initCustomEvent(f,v.bubbles,v.cancelable,v.detail),C};F.prototype=L.Event.prototype,t.CustomEvent=F}else t.CustomEvent=L.CustomEvent;return t},g(n)==="object"?s.exports=Fi.document?pa(Fi,Fi.document):function(L){return pa(L,L.document)}:Fi.SVG=pa(Fi,Fi.document),function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(o,h){return this.add(o,h),!o.attr("in")&&this.autoSetIn&&o.attr("in",this.source),o.attr("result")||o.attr("result",o),o},blend:function(o,h,d){return this.put(new SVG.BlendEffect(o,h,d))},colorMatrix:function(o,h){return this.put(new SVG.ColorMatrixEffect(o,h))},convolveMatrix:function(o){return this.put(new SVG.ConvolveMatrixEffect(o))},componentTransfer:function(o){return this.put(new SVG.ComponentTransferEffect(o))},composite:function(o,h,d){return this.put(new SVG.CompositeEffect(o,h,d))},flood:function(o,h){return this.put(new SVG.FloodEffect(o,h))},offset:function(o,h){return this.put(new SVG.OffsetEffect(o,h))},image:function(o){return this.put(new SVG.ImageEffect(o))},merge:function(){var o=[void 0];for(var h in arguments)o.push(arguments[h]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,o)))},gaussianBlur:function(o,h){return this.put(new SVG.GaussianBlurEffect(o,h))},morphology:function(o,h){return this.put(new SVG.MorphologyEffect(o,h))},diffuseLighting:function(o,h,d){return this.put(new SVG.DiffuseLightingEffect(o,h,d))},displacementMap:function(o,h,d,p,x){return this.put(new SVG.DisplacementMapEffect(o,h,d,p,x))},specularLighting:function(o,h,d,p){return this.put(new SVG.SpecularLightingEffect(o,h,d,p))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(o,h,d,p,x){return this.put(new SVG.TurbulenceEffect(o,h,d,p,x))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(o){var h=this.put(new SVG.Filter);return typeof o=="function"&&o.call(h,h),h}}),SVG.extend(SVG.Container,{filter:function(o){return this.defs().filter(o)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(o){return this.filterer=o instanceof SVG.Element?o:this.doc().filter(o),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(o){return this.filterer&&o===!0&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",o)},result:function(o){return o==null?this.attr("result"):this.attr("result",o)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",o)},result:function(o){return o==null?this.attr("result"):this.attr("result",o)},toString:function(){return this.result()}}});var L={blend:function(o,h){return this.parent()&&this.parent().blend(this,o,h)},colorMatrix:function(o,h){return this.parent()&&this.parent().colorMatrix(o,h).in(this)},convolveMatrix:function(o){return this.parent()&&this.parent().convolveMatrix(o).in(this)},componentTransfer:function(o){return this.parent()&&this.parent().componentTransfer(o).in(this)},composite:function(o,h){return this.parent()&&this.parent().composite(this,o,h)},flood:function(o,h){return this.parent()&&this.parent().flood(o,h)},offset:function(o,h){return this.parent()&&this.parent().offset(o,h).in(this)},image:function(o){return this.parent()&&this.parent().image(o)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(o,h){return this.parent()&&this.parent().gaussianBlur(o,h).in(this)},morphology:function(o,h){return this.parent()&&this.parent().morphology(o,h).in(this)},diffuseLighting:function(o,h,d){return this.parent()&&this.parent().diffuseLighting(o,h,d).in(this)},displacementMap:function(o,h,d,p){return this.parent()&&this.parent().displacementMap(this,o,h,d,p)},specularLighting:function(o,h,d,p){return this.parent()&&this.parent().specularLighting(o,h,d,p).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(o,h,d,p,x){return this.parent()&&this.parent().turbulence(o,h,d,p,x).in(this)}};SVG.extend(SVG.Effect,L),SVG.extend(SVG.ParentEffect,L),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(o){this.attr("in",o)}}});var e={blend:function(o,h,d){this.attr({in:o,in2:h,mode:d||"normal"})},colorMatrix:function(o,h){o=="matrix"&&(h=a(h)),this.attr({type:o,values:h===void 0?null:h})},convolveMatrix:function(o){o=a(o),this.attr({order:Math.sqrt(o.split(" ").length),kernelMatrix:o})},composite:function(o,h,d){this.attr({in:o,in2:h,operator:d})},flood:function(o,h){this.attr("flood-color",o),h!=null&&this.attr("flood-opacity",h)},offset:function(o,h){this.attr({dx:o,dy:h})},image:function(o){this.attr("href",o,SVG.xlink)},displacementMap:function(o,h,d,p,x){this.attr({in:o,in2:h,scale:d,xChannelSelector:p,yChannelSelector:x})},gaussianBlur:function(o,h){o!=null||h!=null?this.attr("stdDeviation",r(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(o,h){this.attr({operator:o,radius:h})},tile:function(){},turbulence:function(o,h,d,p,x){this.attr({numOctaves:h,seed:d,stitchTiles:p,baseFrequency:o,type:x})}},t={merge:function(){var o;if(arguments[0]instanceof SVG.Set){var h=this;arguments[0].each(function(p){this instanceof SVG.MergeNode?h.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&h.put(new SVG.MergeNode(this))})}else{o=Array.isArray(arguments[0])?arguments[0]:arguments;for(var d=0;d<o.length;d++)o[d]instanceof SVG.MergeNode?this.put(o[d]):this.put(new SVG.MergeNode(o[d]))}},componentTransfer:function(o){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(d){this[d]=new SVG["Func"+d.toUpperCase()]("identity"),this.rgb.add(this[d]),this.node.appendChild(this[d].node)}.bind(this)),o)for(var h in o.rgb&&(["r","g","b"].forEach(function(d){this[d].attr(o.rgb)}.bind(this)),delete o.rgb),o)this[h].attr(o[h])},diffuseLighting:function(o,h,d){this.attr({surfaceScale:o,diffuseConstant:h,kernelUnitLength:d})},specularLighting:function(o,h,d,p){this.attr({surfaceScale:o,diffuseConstant:h,specularExponent:d,kernelUnitLength:p})}},i={distantLight:function(o,h){this.attr({azimuth:o,elevation:h})},pointLight:function(o,h,d){this.attr({x:o,y:h,z:d})},spotLight:function(o,h,d,p,x,b){this.attr({x:o,y:h,z:d,pointsAtX:p,pointsAtY:x,pointsAtZ:b})},mergeNode:function(o){this.attr("in",o)}};function a(o){return Array.isArray(o)&&(o=new SVG.Array(o)),o.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function r(o){if(!Array.isArray(o))return o;for(var h=0,d=o.length,p=[];h<d;h++)p.push(o[h]);return p.join(" ")}function l(){var o=function(){};for(var h in typeof arguments[arguments.length-1]=="function"&&(o=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var d in arguments[h])o(arguments[h][d],d,arguments[h])}["r","g","b","a"].forEach(function(o){i["Func"+o.toUpperCase()]=function(h){switch(this.attr("type",h),h){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),l(e,function(o,h){var d=h.charAt(0).toUpperCase()+h.slice(1);SVG[d+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),l(t,function(o,h){var d=h.charAt(0).toUpperCase()+h.slice(1);SVG[d+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),l(i,function(o,h){var d=h.charAt(0).toUpperCase()+h.slice(1);SVG[d]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+d)),o.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(o){return o instanceof SVG.MergeNode?this.add(o,0):this.add(new SVG.MergeNode(o),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(o){return o==null?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",o)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function L(r,l,o,h,d,p,x){for(var b=r.slice(l,o||x),y=h.slice(d,p||x),S=0,A={pos:[0,0],start:[0,0]},E={pos:[0,0],start:[0,0]};b[S]=e.call(A,b[S]),y[S]=e.call(E,y[S]),b[S][0]!=y[S][0]||b[S][0]=="M"||b[S][0]=="A"&&(b[S][4]!=y[S][4]||b[S][5]!=y[S][5])?(Array.prototype.splice.apply(b,[S,1].concat(i.call(A,b[S]))),Array.prototype.splice.apply(y,[S,1].concat(i.call(E,y[S])))):(b[S]=t.call(A,b[S]),y[S]=t.call(E,y[S])),!(++S==b.length&&S==y.length);)S==b.length&&b.push(["C",A.pos[0],A.pos[1],A.pos[0],A.pos[1],A.pos[0],A.pos[1]]),S==y.length&&y.push(["C",E.pos[0],E.pos[1],E.pos[0],E.pos[1],E.pos[0],E.pos[1]]);return{start:b,dest:y}}function e(r){switch(r[0]){case"z":case"Z":r[0]="L",r[1]=this.start[0],r[2]=this.start[1];break;case"H":r[0]="L",r[2]=this.pos[1];break;case"V":r[0]="L",r[2]=r[1],r[1]=this.pos[0];break;case"T":r[0]="Q",r[3]=r[1],r[4]=r[2],r[1]=this.reflection[1],r[2]=this.reflection[0];break;case"S":r[0]="C",r[6]=r[4],r[5]=r[3],r[4]=r[2],r[3]=r[1],r[2]=this.reflection[1],r[1]=this.reflection[0]}return r}function t(r){var l=r.length;return this.pos=[r[l-2],r[l-1]],"SCQT".indexOf(r[0])!=-1&&(this.reflection=[2*this.pos[0]-r[l-4],2*this.pos[1]-r[l-3]]),r}function i(r){var l=[r];switch(r[0]){case"M":return this.pos=this.start=[r[1],r[2]],l;case"L":r[5]=r[3]=r[1],r[6]=r[4]=r[2],r[1]=this.pos[0],r[2]=this.pos[1];break;case"Q":r[6]=r[4],r[5]=r[3],r[4]=1*r[4]/3+2*r[2]/3,r[3]=1*r[3]/3+2*r[1]/3,r[2]=1*this.pos[1]/3+2*r[2]/3,r[1]=1*this.pos[0]/3+2*r[1]/3;break;case"A":r=(l=function(o,h){var d,p,x,b,y,S,A,E,_,R,F,f,v,C,M,X,G,Y,re,te,pe,Ce,Je,He,ft,wt,Xt=Math.abs(h[1]),ui=Math.abs(h[2]),zi=h[3]%360,Uu=h[4],Pr=h[5],Tr=h[6],Lr=h[7],kt=new SVG.Point(o),gt=new SVG.Point(Tr,Lr),Lo=[];if(Xt===0||ui===0||kt.x===gt.x&&kt.y===gt.y)return[["C",kt.x,kt.y,gt.x,gt.y,gt.x,gt.y]];for(d=new SVG.Point((kt.x-gt.x)/2,(kt.y-gt.y)/2).transform(new SVG.Matrix().rotate(zi)),(p=d.x*d.x/(Xt*Xt)+d.y*d.y/(ui*ui))>1&&(Xt*=p=Math.sqrt(p),ui*=p),x=new SVG.Matrix().rotate(zi).scale(1/Xt,1/ui).rotate(-zi),kt=kt.transform(x),gt=gt.transform(x),b=[gt.x-kt.x,gt.y-kt.y],S=b[0]*b[0]+b[1]*b[1],y=Math.sqrt(S),b[0]/=y,b[1]/=y,A=S<4?Math.sqrt(1-S/4):0,Uu===Pr&&(A*=-1),E=new SVG.Point((gt.x+kt.x)/2+A*-b[1],(gt.y+kt.y)/2+A*b[0]),_=new SVG.Point(kt.x-E.x,kt.y-E.y),R=new SVG.Point(gt.x-E.x,gt.y-E.y),F=Math.acos(_.x/Math.sqrt(_.x*_.x+_.y*_.y)),_.y<0&&(F*=-1),f=Math.acos(R.x/Math.sqrt(R.x*R.x+R.y*R.y)),R.y<0&&(f*=-1),Pr&&F>f&&(f+=2*Math.PI),!Pr&&F<f&&(f-=2*Math.PI),C=Math.ceil(2*Math.abs(F-f)/Math.PI),X=[],G=F,v=(f-F)/C,M=4*Math.tan(v/4)/3,pe=0;pe<=C;pe++)re=Math.cos(G),Y=Math.sin(G),te=new SVG.Point(E.x+re,E.y+Y),X[pe]=[new SVG.Point(te.x+M*Y,te.y-M*re),te,new SVG.Point(te.x-M*Y,te.y+M*re)],G+=v;for(X[0][0]=X[0][1].clone(),X[X.length-1][2]=X[X.length-1][1].clone(),x=new SVG.Matrix().rotate(zi).scale(Xt,ui).rotate(-zi),pe=0,Ce=X.length;pe<Ce;pe++)X[pe][0]=X[pe][0].transform(x),X[pe][1]=X[pe][1].transform(x),X[pe][2]=X[pe][2].transform(x);for(pe=1,Ce=X.length;pe<Ce;pe++)Je=(te=X[pe-1][2]).x,He=te.y,ft=(te=X[pe][0]).x,wt=te.y,Tr=(te=X[pe][1]).x,Lr=te.y,Lo.push(["C",Je,He,ft,wt,Tr,Lr]);return Lo}(this.pos,r))[0]}return r[0]="C",this.pos=[r[5],r[6]],this.reflection=[2*r[5]-r[3],2*r[6]-r[4]],l}function a(r,l){if(l===!1)return!1;for(var o=l,h=r.length;o<h;++o)if(r[o][0]=="M")return o;return!1}SVG.extend(SVG.PathArray,{morph:function(r){for(var l=this.value,o=this.parse(r),h=0,d=0,p=!1,x=!1;h!==!1||d!==!1;){var b;p=a(l,h!==!1&&h+1),x=a(o,d!==!1&&d+1),h===!1&&(h=(b=new SVG.PathArray(y.start).bbox()).height==0||b.width==0?l.push(l[0])-1:l.push(["M",b.x+b.width/2,b.y+b.height/2])-1),d===!1&&(d=(b=new SVG.PathArray(y.dest).bbox()).height==0||b.width==0?o.push(o[0])-1:o.push(["M",b.x+b.width/2,b.y+b.height/2])-1);var y=L(l,h,p,o,d,x);l=l.slice(0,h).concat(y.start,p===!1?[]:l.slice(p)),o=o.slice(0,d).concat(y.dest,x===!1?[]:o.slice(x)),h=p!==!1&&h+y.start.length,d=x!==!1&&d+y.dest.length}return this.value=l,this.destination=new SVG.PathArray,this.destination.value=o,this}})}(),function(){function L(e){e.remember("_draggable",this),this.el=e}L.prototype.init=function(e,t){var i=this;this.constraint=e,this.value=t,this.el.on("mousedown.drag",function(a){i.start(a)}),this.el.on("touchstart.drag",function(a){i.start(a)})},L.prototype.transformPoint=function(e,t){var i=(e=e||window.event).changedTouches&&e.changedTouches[0]||e;return this.p.x=i.clientX-(t||0),this.p.y=i.clientY,this.p.matrixTransform(this.m)},L.prototype.getBBox=function(){var e=this.el.bbox();return this.el instanceof SVG.Nested&&(e=this.el.rbox()),(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(e.x=this.el.x(),e.y=this.el.y()),e},L.prototype.start=function(e){if(e.type!="click"&&e.type!="mousedown"&&e.type!="mousemove"||(e.which||e.buttons)==1){var t=this;if(this.el.fire("beforedrag",{event:e,handler:this}),!this.el.event().defaultPrevented){e.preventDefault(),e.stopPropagation(),this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc),this.p=this.parent.node.createSVGPoint(),this.m=this.el.node.getScreenCTM().inverse();var i,a=this.getBBox();if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(),this.el.attr("text-anchor")){case"middle":i/=2;break;case"start":i=0}this.startPoints={point:this.transformPoint(e,i),box:a,transform:this.el.transform()},SVG.on(window,"mousemove.drag",function(r){t.drag(r)}),SVG.on(window,"touchmove.drag",function(r){t.drag(r)}),SVG.on(window,"mouseup.drag",function(r){t.end(r)}),SVG.on(window,"touchend.drag",function(r){t.end(r)}),this.el.fire("dragstart",{event:e,p:this.startPoints.point,m:this.m,handler:this})}}},L.prototype.drag=function(e){var t=this.getBBox(),i=this.transformPoint(e),a=this.startPoints.box.x+i.x-this.startPoints.point.x,r=this.startPoints.box.y+i.y-this.startPoints.point.y,l=this.constraint,o=i.x-this.startPoints.point.x,h=i.y-this.startPoints.point.y;if(this.el.fire("dragmove",{event:e,p:i,m:this.m,handler:this}),this.el.event().defaultPrevented)return i;if(typeof l=="function"){var d=l.call(this.el,a,r,this.m);typeof d=="boolean"&&(d={x:d,y:d}),d.x===!0?this.el.x(a):d.x!==!1&&this.el.x(d.x),d.y===!0?this.el.y(r):d.y!==!1&&this.el.y(d.y)}else typeof l=="object"&&(l.minX!=null&&a<l.minX?o=(a=l.minX)-this.startPoints.box.x:l.maxX!=null&&a>l.maxX-t.width&&(o=(a=l.maxX-t.width)-this.startPoints.box.x),l.minY!=null&&r<l.minY?h=(r=l.minY)-this.startPoints.box.y:l.maxY!=null&&r>l.maxY-t.height&&(h=(r=l.maxY-t.height)-this.startPoints.box.y),l.snapToGrid!=null&&(a-=a%l.snapToGrid,r-=r%l.snapToGrid,o-=o%l.snapToGrid,h-=h%l.snapToGrid),this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform({x:o,y:h},!0):this.el.move(a,r));return i},L.prototype.end=function(e){var t=this.drag(e);this.el.fire("dragend",{event:e,p:t,m:this.m,handler:this}),SVG.off(window,"mousemove.drag"),SVG.off(window,"touchmove.drag"),SVG.off(window,"mouseup.drag"),SVG.off(window,"touchend.drag")},SVG.extend(SVG.Element,{draggable:function(e,t){typeof e!="function"&&typeof e!="object"||(t=e,e=!0);var i=this.remember("_draggable")||new L(this);return(e=e===void 0||e)?i.init(t||{},e):(this.off("mousedown.drag"),this.off("touchstart.drag")),this}})}.call(void 0),function(){function L(e){this.el=e,e.remember("_selectHandler",this),this.pointSelection={isSelected:!1},this.rectSelection={isSelected:!1},this.pointsList={lt:[0,0],rt:["width",0],rb:["width","height"],lb:[0,"height"],t:["width",0],r:["width","height"],b:["width","height"],l:[0,"height"]},this.pointCoord=function(t,i,a){var r=typeof t!="string"?t:i[t];return a?r/2:r},this.pointCoords=function(t,i){var a=this.pointsList[t];return{x:this.pointCoord(a[0],i,t==="t"||t==="b"),y:this.pointCoord(a[1],i,t==="r"||t==="l")}}}L.prototype.init=function(e,t){var i=this.el.bbox();this.options={};var a=this.el.selectize.defaults.points;for(var r in this.el.selectize.defaults)this.options[r]=this.el.selectize.defaults[r],t[r]!==void 0&&(this.options[r]=t[r]);var l=["points","pointsExclude"];for(var r in l){var o=this.options[l[r]];typeof o=="string"?o=o.length>0?o.split(/\s*,\s*/i):[]:typeof o=="boolean"&&l[r]==="points"&&(o=o?a:[]),this.options[l[r]]=o}this.options.points=[a,this.options.points].reduce(function(h,d){return h.filter(function(p){return d.indexOf(p)>-1})}),this.options.points=[this.options.points,this.options.pointsExclude].reduce(function(h,d){return h.filter(function(p){return d.indexOf(p)<0})}),this.parent=this.el.parent(),this.nested=this.nested||this.parent.group(),this.nested.matrix(new SVG.Matrix(this.el).translate(i.x,i.y)),this.options.deepSelect&&["line","polyline","polygon"].indexOf(this.el.type)!==-1?this.selectPoints(e):this.selectRect(e),this.observe(),this.cleanup()},L.prototype.selectPoints=function(e){return this.pointSelection.isSelected=e,this.pointSelection.set||(this.pointSelection.set=this.parent.set(),this.drawPoints()),this},L.prototype.getPointArray=function(){var e=this.el.bbox();return this.el.array().valueOf().map(function(t){return[t[0]-e.x,t[1]-e.y]})},L.prototype.drawPoints=function(){for(var e=this,t=this.getPointArray(),i=0,a=t.length;i<a;++i){var r=function(o){return function(h){(h=h||window.event).preventDefault?h.preventDefault():h.returnValue=!1,h.stopPropagation();var d=h.pageX||h.touches[0].pageX,p=h.pageY||h.touches[0].pageY;e.el.fire("point",{x:d,y:p,i:o,event:h})}}(i),l=this.drawPoint(t[i][0],t[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart",r).on("mousedown",r);this.pointSelection.set.add(l)}},L.prototype.drawPoint=function(e,t){var i=this.options.pointType;switch(i){case"circle":return this.drawCircle(e,t);case"rect":return this.drawRect(e,t);default:if(typeof i=="function")return i.call(this,e,t);throw new Error("Unknown "+i+" point type!")}},L.prototype.drawCircle=function(e,t){return this.nested.circle(this.options.pointSize).center(e,t)},L.prototype.drawRect=function(e,t){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(e,t)},L.prototype.updatePointSelection=function(){var e=this.getPointArray();this.pointSelection.set.each(function(t){this.cx()===e[t][0]&&this.cy()===e[t][1]||this.center(e[t][0],e[t][1])})},L.prototype.updateRectSelection=function(){var e=this,t=this.el.bbox();if(this.rectSelection.set.get(0).attr({width:t.width,height:t.height}),this.options.points.length&&this.options.points.map(function(a,r){var l=e.pointCoords(a,t);e.rectSelection.set.get(r+1).center(l.x,l.y)}),this.options.rotationPoint){var i=this.rectSelection.set.length();this.rectSelection.set.get(i-1).center(t.width/2,20)}},L.prototype.selectRect=function(e){var t=this,i=this.el.bbox();function a(o){return function(h){(h=h||window.event).preventDefault?h.preventDefault():h.returnValue=!1,h.stopPropagation();var d=h.pageX||h.touches[0].pageX,p=h.pageY||h.touches[0].pageY;t.el.fire(o,{x:d,y:p,event:h})}}if(this.rectSelection.isSelected=e,this.rectSelection.set=this.rectSelection.set||this.parent.set(),this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width,i.height).addClass(this.options.classRect)),this.options.points.length&&this.rectSelection.set.length()<2&&(this.options.points.map(function(o,h){var d=t.pointCoords(o,i),p=t.drawPoint(d.x,d.y).attr("class",t.options.classPoints+"_"+o).on("mousedown",a(o)).on("touchstart",a(o));t.rectSelection.set.add(p)}),this.rectSelection.set.each(function(){this.addClass(t.options.classPoints)})),this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var r=function(o){(o=o||window.event).preventDefault?o.preventDefault():o.returnValue=!1,o.stopPropagation();var h=o.pageX||o.touches[0].pageX,d=o.pageY||o.touches[0].pageY;t.el.fire("rot",{x:h,y:d,event:o})},l=this.drawPoint(i.width/2,20).attr("class",this.options.classPoints+"_rot").on("touchstart",r).on("mousedown",r);this.rectSelection.set.add(l)}},L.prototype.handler=function(){var e=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(e.x,e.y)),this.rectSelection.isSelected&&this.updateRectSelection(),this.pointSelection.isSelected&&this.updatePointSelection()},L.prototype.observe=function(){var e=this;if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver(function(){e.handler()}),this.observerInst.observe(this.el.node,{attributes:!0});else try{this.observerInst.disconnect(),delete this.observerInst}catch{}else this.el.off("DOMAttrModified.select"),(this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select",function(){e.handler()})},L.prototype.cleanup=function(){!this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each(function(){this.remove()}),this.rectSelection.set.clear(),delete this.rectSelection.set),!this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each(function(){this.remove()}),this.pointSelection.set.clear(),delete this.pointSelection.set),this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(),delete this.nested)},SVG.extend(SVG.Element,{selectize:function(e,t){return typeof e=="object"&&(t=e,e=!0),(this.remember("_selectHandler")||new L(this)).init(e===void 0||e,t||{}),this}}),SVG.Element.prototype.selectize.defaults={points:["lt","rt","rb","lb","t","r","b","l"],pointsExclude:[],classRect:"svg_select_boundingRect",classPoints:"svg_select_points",pointSize:7,rotationPoint:!0,deepSelect:!1,pointType:"circle"}}(),function(){(function(){function L(e){e.remember("_resizeHandler",this),this.el=e,this.parameters={},this.lastUpdateCall=null,this.p=e.doc().node.createSVGPoint()}L.prototype.transformPoint=function(e,t,i){return this.p.x=e-(this.offset.x-window.pageXOffset),this.p.y=t-(this.offset.y-window.pageYOffset),this.p.matrixTransform(i||this.m)},L.prototype._extractPosition=function(e){return{x:e.clientX!=null?e.clientX:e.touches[0].clientX,y:e.clientY!=null?e.clientY:e.touches[0].clientY}},L.prototype.init=function(e){var t=this;if(this.stop(),e!=="stop"){for(var i in this.options={},this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i],e[i]!==void 0&&(this.options[i]=e[i]);this.el.on("lt.resize",function(a){t.resize(a||window.event)}),this.el.on("rt.resize",function(a){t.resize(a||window.event)}),this.el.on("rb.resize",function(a){t.resize(a||window.event)}),this.el.on("lb.resize",function(a){t.resize(a||window.event)}),this.el.on("t.resize",function(a){t.resize(a||window.event)}),this.el.on("r.resize",function(a){t.resize(a||window.event)}),this.el.on("b.resize",function(a){t.resize(a||window.event)}),this.el.on("l.resize",function(a){t.resize(a||window.event)}),this.el.on("rot.resize",function(a){t.resize(a||window.event)}),this.el.on("point.resize",function(a){t.resize(a||window.event)}),this.update()}},L.prototype.stop=function(){return this.el.off("lt.resize"),this.el.off("rt.resize"),this.el.off("rb.resize"),this.el.off("lb.resize"),this.el.off("t.resize"),this.el.off("r.resize"),this.el.off("b.resize"),this.el.off("l.resize"),this.el.off("rot.resize"),this.el.off("point.resize"),this},L.prototype.resize=function(e){var t=this;this.m=this.el.node.getScreenCTM().inverse(),this.offset={x:window.pageXOffset,y:window.pageYOffset};var i=this._extractPosition(e.detail.event);if(this.parameters={type:this.el.type,p:this.transformPoint(i.x,i.y),x:e.detail.x,y:e.detail.y,box:this.el.bbox(),rotation:this.el.transform().rotation},this.el.type==="text"&&(this.parameters.fontSize=this.el.attr()["font-size"]),e.detail.i!==void 0){var a=this.el.array().valueOf();this.parameters.i=e.detail.i,this.parameters.pointCoords=[a[e.detail.i][0],a[e.detail.i][1]]}switch(e.type){case"lt":this.calc=function(r,l){var o=this.snapToGrid(r,l);if(this.parameters.box.width-o[0]>0&&this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-o[0]);o=this.checkAspectRatio(o),this.el.move(this.parameters.box.x+o[0],this.parameters.box.y+o[1]).size(this.parameters.box.width-o[0],this.parameters.box.height-o[1])}};break;case"rt":this.calc=function(r,l){var o=this.snapToGrid(r,l,2);if(this.parameters.box.width+o[0]>0&&this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+o[0]);o=this.checkAspectRatio(o,!0),this.el.move(this.parameters.box.x,this.parameters.box.y+o[1]).size(this.parameters.box.width+o[0],this.parameters.box.height-o[1])}};break;case"rb":this.calc=function(r,l){var o=this.snapToGrid(r,l,0);if(this.parameters.box.width+o[0]>0&&this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x-o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize+o[0]);o=this.checkAspectRatio(o),this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+o[0],this.parameters.box.height+o[1])}};break;case"lb":this.calc=function(r,l){var o=this.snapToGrid(r,l,1);if(this.parameters.box.width-o[0]>0&&this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return this.el.move(this.parameters.box.x+o[0],this.parameters.box.y),void this.el.attr("font-size",this.parameters.fontSize-o[0]);o=this.checkAspectRatio(o,!0),this.el.move(this.parameters.box.x+o[0],this.parameters.box.y).size(this.parameters.box.width-o[0],this.parameters.box.height+o[1])}};break;case"t":this.calc=function(r,l){var o=this.snapToGrid(r,l,2);if(this.parameters.box.height-o[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y+o[1]).height(this.parameters.box.height-o[1])}};break;case"r":this.calc=function(r,l){var o=this.snapToGrid(r,l,0);if(this.parameters.box.width+o[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+o[0])}};break;case"b":this.calc=function(r,l){var o=this.snapToGrid(r,l,0);if(this.parameters.box.height+o[1]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+o[1])}};break;case"l":this.calc=function(r,l){var o=this.snapToGrid(r,l,1);if(this.parameters.box.width-o[0]>0){if(this.parameters.type==="text")return;this.el.move(this.parameters.box.x+o[0],this.parameters.box.y).width(this.parameters.box.width-o[0])}};break;case"rot":this.calc=function(r,l){var o=r+this.parameters.p.x,h=l+this.parameters.p.y,d=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2),p=Math.atan2(h-this.parameters.box.y-this.parameters.box.height/2,o-this.parameters.box.x-this.parameters.box.width/2),x=this.parameters.rotation+180*(p-d)/Math.PI+this.options.snapToAngle/2;this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(x-x%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy)};break;case"point":this.calc=function(r,l){var o=this.snapToGrid(r,l,this.parameters.pointCoords[0],this.parameters.pointCoords[1]),h=this.el.array().valueOf();h[this.parameters.i][0]=this.parameters.pointCoords[0]+o[0],h[this.parameters.i][1]=this.parameters.pointCoords[1]+o[1],this.el.plot(h)}}this.el.fire("resizestart",{dx:this.parameters.x,dy:this.parameters.y,event:e}),SVG.on(window,"touchmove.resize",function(r){t.update(r||window.event)}),SVG.on(window,"touchend.resize",function(){t.done()}),SVG.on(window,"mousemove.resize",function(r){t.update(r||window.event)}),SVG.on(window,"mouseup.resize",function(){t.done()})},L.prototype.update=function(e){if(e){var t=this._extractPosition(e),i=this.transformPoint(t.x,t.y),a=i.x-this.parameters.p.x,r=i.y-this.parameters.p.y;this.lastUpdateCall=[a,r],this.calc(a,r),this.el.fire("resizing",{dx:a,dy:r,event:e})}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1])},L.prototype.done=function(){this.lastUpdateCall=null,SVG.off(window,"mousemove.resize"),SVG.off(window,"mouseup.resize"),SVG.off(window,"touchmove.resize"),SVG.off(window,"touchend.resize"),this.el.fire("resizedone")},L.prototype.snapToGrid=function(e,t,i,a){var r;return a!==void 0?r=[(i+e)%this.options.snapToGrid,(a+t)%this.options.snapToGrid]:(i=i==null?3:i,r=[(this.parameters.box.x+e+(1&i?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+t+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]),e<0&&(r[0]-=this.options.snapToGrid),t<0&&(r[1]-=this.options.snapToGrid),e-=Math.abs(r[0])<this.options.snapToGrid/2?r[0]:r[0]-(e<0?-this.options.snapToGrid:this.options.snapToGrid),t-=Math.abs(r[1])<this.options.snapToGrid/2?r[1]:r[1]-(t<0?-this.options.snapToGrid:this.options.snapToGrid),this.constraintToBox(e,t,i,a)},L.prototype.constraintToBox=function(e,t,i,a){var r,l,o=this.options.constraint||{};return a!==void 0?(r=i,l=a):(r=this.parameters.box.x+(1&i?0:this.parameters.box.width),l=this.parameters.box.y+(2&i?0:this.parameters.box.height)),o.minX!==void 0&&r+e<o.minX&&(e=o.minX-r),o.maxX!==void 0&&r+e>o.maxX&&(e=o.maxX-r),o.minY!==void 0&&l+t<o.minY&&(t=o.minY-l),o.maxY!==void 0&&l+t>o.maxY&&(t=o.maxY-l),[e,t]},L.prototype.checkAspectRatio=function(e,t){if(!this.options.saveAspectRatio)return e;var i=e.slice(),a=this.parameters.box.width/this.parameters.box.height,r=this.parameters.box.width+e[0],l=this.parameters.box.height-e[1],o=r/l;return o<a?(i[1]=r/a-this.parameters.box.height,t&&(i[1]=-i[1])):o>a&&(i[0]=this.parameters.box.width-l*a,t&&(i[0]=-i[0])),i},SVG.extend(SVG.Element,{resize:function(e){return(this.remember("_resizeHandler")||new L(this)).init(e||{}),this}}),SVG.Element.prototype.resize.defaults={snapToAngle:.1,snapToGrid:1,constraint:{},saveAspectRatio:!1}}).call(this)}(),window.Apex===void 0&&(window.Apex={});var Po=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"initModules",value:function(){this.ctx.publicMethods=["updateOptions","updateSeries","appendData","appendSeries","toggleSeries","showSeries","hideSeries","setLocale","resetSeries","zoomX","toggleDataPointSelection","dataURI","exportToCSV","addXaxisAnnotation","addYaxisAnnotation","addPointAnnotation","clearAnnotations","removeAnnotation","paper","destroy"],this.ctx.eventList=["click","mousedown","mousemove","mouseleave","touchstart","touchmove","touchleave","mouseup","touchend"],this.ctx.animations=new j(this.ctx),this.ctx.axes=new ve(this.ctx),this.ctx.core=new Vu(this.ctx.el,this.ctx),this.ctx.config=new U({}),this.ctx.data=new be(this.ctx),this.ctx.grid=new D(this.ctx),this.ctx.graphics=new H(this.ctx),this.ctx.coreUtils=new ce(this.ctx),this.ctx.crosshairs=new fe(this.ctx),this.ctx.events=new oe(this.ctx),this.ctx.exports=new Pe(this.ctx),this.ctx.localization=new xe(this.ctx),this.ctx.options=new se,this.ctx.responsive=new me(this.ctx),this.ctx.series=new $e(this.ctx),this.ctx.theme=new he(this.ctx),this.ctx.formatters=new Oe(this.ctx),this.ctx.titleSubtitle=new Ae(this.ctx),this.ctx.legend=new qe(this.ctx),this.ctx.toolbar=new yt(this.ctx),this.ctx.dimensions=new Xe(this.ctx),this.ctx.updateHelpers=new ju(this.ctx),this.ctx.zoomPanSelection=new hi(this.ctx),this.ctx.w.globals.tooltip=new Nu(this.ctx)}}]),L}(),To=function(){function L(e){m(this,L),this.ctx=e,this.w=e.w}return k(L,[{key:"clear",value:function(e){var t=e.isUpdating;this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(),this.ctx.toolbar&&this.ctx.toolbar.destroy(),this.ctx.animations=null,this.ctx.axes=null,this.ctx.annotations=null,this.ctx.core=null,this.ctx.data=null,this.ctx.grid=null,this.ctx.series=null,this.ctx.responsive=null,this.ctx.theme=null,this.ctx.formatters=null,this.ctx.titleSubtitle=null,this.ctx.legend=null,this.ctx.dimensions=null,this.ctx.options=null,this.ctx.crosshairs=null,this.ctx.zoomPanSelection=null,this.ctx.updateHelpers=null,this.ctx.toolbar=null,this.ctx.localization=null,this.ctx.w.globals.tooltip=null,this.clearDomElements({isUpdating:t})}},{key:"killSVG",value:function(e){e.each(function(t,i){this.removeClass("*"),this.off(),this.stop()},!0),e.ungroup(),e.clear()}},{key:"clearDomElements",value:function(e){var t=this,i=e.isUpdating,a=this.w.globals.dom.Paper.node;a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");var r=this.w.globals.dom.baseEl;r&&this.ctx.eventList.forEach(function(o){r.removeEventListener(o,t.ctx.events.documentEvent)});var l=this.w.globals.dom;if(this.ctx.el!==null)for(;this.ctx.el.firstChild;)this.ctx.el.removeChild(this.ctx.el.firstChild);this.killSVG(l.Paper),l.Paper.remove(),l.elWrap=null,l.elGraphical=null,l.elAnnotations=null,l.elLegendWrap=null,l.baseEl=null,l.elGridRect=null,l.elGridRectMask=null,l.elGridRectMarkerMask=null,l.elForecastMask=null,l.elNonForecastMask=null,l.elDefs=null}}]),L}(),Er=new WeakMap,Gu=function(){function L(e,t){m(this,L),this.opts=t,this.ctx=this,this.w=new de(t).init(),this.el=e,this.w.globals.cuid=T.randomId(),this.w.globals.chartID=this.w.config.chart.id?T.escapeString(this.w.config.chart.id):this.w.globals.cuid,new Po(this).initModules(),this.create=T.bind(this.create,this),this.windowResizeHandler=this._windowResizeHandler.bind(this),this.parentResizeHandler=this._parentResizeCallback.bind(this)}return k(L,[{key:"render",value:function(){var e=this;return new Promise(function(t,i){if(e.el!==null){Apex._chartInstances===void 0&&(Apex._chartInstances=[]),e.w.config.chart.id&&Apex._chartInstances.push({id:e.w.globals.chartID,group:e.w.config.chart.group,chart:e}),e.setLocale(e.w.config.chart.defaultLocale);var a=e.w.config.chart.events.beforeMount;if(typeof a=="function"&&a(e,e.w),e.events.fireEvent("beforeMount",[e,e.w]),window.addEventListener("resize",e.windowResizeHandler),function(p,x){var b=!1;if(p.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var y=p.getBoundingClientRect();p.style.display!=="none"&&y.width!==0||(b=!0)}var S=new ResizeObserver(function(A){b&&x.call(p,A),b=!0});p.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(p.children).forEach(function(A){return S.observe(A)}):S.observe(p),Er.set(x,S)}(e.el.parentNode,e.parentResizeHandler),!e.css){var r=e.el.getRootNode&&e.el.getRootNode(),l=T.is("ShadowRoot",r),o=e.el.ownerDocument,h=o.getElementById("apexcharts-css");!l&&h||(e.css=document.createElement("style"),e.css.id="apexcharts-css",e.css.textContent=`.apexcharts-canvas {
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
}`,l?r.prepend(e.css):o.head.appendChild(e.css))}var d=e.create(e.w.config.series,{});if(!d)return t(e);e.mount(d).then(function(){typeof e.w.config.chart.events.mounted=="function"&&e.w.config.chart.events.mounted(e,e.w),e.events.fireEvent("mounted",[e,e.w]),t(d)}).catch(function(p){i(p)})}else i(new Error("Element not found"))})}},{key:"create",value:function(e,t){var i=this.w;new Po(this).initModules();var a=this.w.globals;if(a.noData=!1,a.animationEnded=!1,this.responsive.checkResponsiveConfig(t),i.config.xaxis.convertedCatToNumeric&&new ht(i.config).convertCatToNumericXaxis(i.config,this.ctx),this.el===null||(this.core.setupElements(),i.config.chart.type==="treemap"&&(i.config.grid.show=!1,i.config.yaxis[0].show=!1),a.svgWidth===0))return a.animationEnded=!0,null;var r=ce.checkComboSeries(e);a.comboCharts=r.comboCharts,a.comboBarCount=r.comboBarCount;var l=e.every(function(x){return x.data&&x.data.length===0});(e.length===0||l)&&this.series.handleNoData(),this.events.setupEventHandlers(),this.data.parseData(e),this.theme.init(),new Ve(this).setGlobalMarkerSize(),this.formatters.setLabelFormatters(),this.titleSubtitle.draw(),a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(),this.series.hasAllSeriesEqualX(),a.axisCharts&&(this.core.coreCalculations(),i.config.xaxis.type!=="category"&&this.formatters.setLabelFormatters(),this.ctx.toolbar.minX=i.globals.minX,this.ctx.toolbar.maxX=i.globals.maxX),this.formatters.heatmapLabelFormatters(),new ce(this).getLargestMarkerSize(),this.dimensions.plotCoords();var o=this.core.xySettings();this.grid.createGridMask();var h=this.core.plotChartType(e,o),d=new Te(this);d.bringForward(),i.config.dataLabels.background.enabled&&d.dataLabelsBackground(),this.core.shiftGraphPosition();var p={plot:{left:i.globals.translateX,top:i.globals.translateY,width:i.globals.gridWidth,height:i.globals.gridHeight}};return{elGraph:h,xyRatios:o,elInner:i.globals.dom.elGraphical,dimensions:p}}},{key:"mount",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this,a=i.w;return new Promise(function(r,l){if(i.el===null)return l(new Error("Not enough data to display or target element not found"));(t===null||a.globals.allSeriesCollapsed)&&i.series.handleNoData(),a.config.chart.type!=="treemap"&&i.axes.drawAxis(a.config.chart.type,t.xyRatios),i.grid=new D(i);var o=i.grid.drawGrid();i.annotations=new ye(i),i.annotations.drawImageAnnos(),i.annotations.drawTextAnnos(),a.config.grid.position==="back"&&o&&a.globals.dom.elGraphical.add(o.el);var h=new Ee(e.ctx),d=new ae(e.ctx);if(o!==null&&(h.xAxisLabelCorrections(o.xAxisTickWidth),d.setYAxisTextAlignments(),a.config.yaxis.map(function(b,y){a.globals.ignoreYAxisIndexes.indexOf(y)===-1&&d.yAxisTitleRotate(y,b.opposite)})),a.config.annotations.position==="back"&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),Array.isArray(t.elGraph))for(var p=0;p<t.elGraph.length;p++)a.globals.dom.elGraphical.add(t.elGraph[p]);else a.globals.dom.elGraphical.add(t.elGraph);if(a.config.grid.position==="front"&&o&&a.globals.dom.elGraphical.add(o.el),a.config.xaxis.crosshairs.position==="front"&&i.crosshairs.drawXCrosshairs(),a.config.yaxis[0].crosshairs.position==="front"&&i.crosshairs.drawYCrosshairs(),a.config.annotations.position==="front"&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations),i.annotations.drawAxesAnnotations()),!a.globals.noData){if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(t.xyRatios),a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init({xyRatios:t.xyRatios});else{var x=a.config.chart.toolbar.tools;["zoom","zoomin","zoomout","selection","pan","reset"].forEach(function(b){x[b]=!1})}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar()}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach(function(b){b.method(b.params,!1,b.context)}),a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(),r(i)})}},{key:"destroy",value:function(){var e,t;window.removeEventListener("resize",this.windowResizeHandler),this.el.parentNode,e=this.parentResizeHandler,(t=Er.get(e))&&(t.disconnect(),Er.delete(e));var i=this.w.config.chart.id;i&&Apex._chartInstances.forEach(function(a,r){a.id===T.escapeString(i)&&Apex._chartInstances.splice(r,1)}),new To(this.ctx).clear({isUpdating:!1})}},{key:"updateOptions",value:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],l=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=this.w;return o.globals.selection=void 0,e.series&&(this.series.resetSeries(!1,!0,!1),e.series.length&&e.series[0].data&&(e.series=e.series.map(function(h,d){return t.updateHelpers._extendSeries(h,d)})),this.updateHelpers.revertDefaultAxisMinMax()),e.xaxis&&(e=this.updateHelpers.forceXAxisUpdate(e)),e.yaxis&&(e=this.updateHelpers.forceYAxisUpdate(e)),o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(),e.theme&&(e=this.theme.updateThemeOptions(e)),this.updateHelpers._updateOptions(e,i,a,r,l)}},{key:"updateSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];return this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(e,t,i)}},{key:"appendSeries",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=this.w.config.series.slice();return a.push(e),this.series.resetSeries(!1),this.updateHelpers.revertDefaultAxisMinMax(),this.updateHelpers._updateSeries(a,t,i)}},{key:"appendData",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=this;i.w.globals.dataChanged=!0,i.series.getPreviousPaths();for(var a=i.w.config.series.slice(),r=0;r<a.length;r++)if(e[r]!==null&&e[r]!==void 0)for(var l=0;l<e[r].data.length;l++)a[r].data.push(e[r].data[l]);return i.w.config.series=a,t&&(i.w.globals.initialSeries=T.clone(i.w.config.series)),this.update()}},{key:"update",value:function(e){var t=this;return new Promise(function(i,a){new To(t.ctx).clear({isUpdating:!0});var r=t.create(t.w.config.series,e);if(!r)return i(t);t.mount(r).then(function(){typeof t.w.config.chart.events.updated=="function"&&t.w.config.chart.events.updated(t,t.w),t.events.fireEvent("updated",[t,t.w]),t.w.globals.isDirty=!0,i(t)}).catch(function(l){a(l)})})}},{key:"getSyncedCharts",value:function(){var e=this.getGroupedCharts(),t=[this];return e.length&&(t=[],e.forEach(function(i){t.push(i)})),t}},{key:"getGroupedCharts",value:function(){var e=this;return Apex._chartInstances.filter(function(t){if(t.group)return!0}).map(function(t){return e.w.config.chart.group===t.group?t.chart:e})}},{key:"toggleSeries",value:function(e){return this.series.toggleSeries(e)}},{key:"highlightSeriesOnLegendHover",value:function(e,t){return this.series.toggleSeriesOnHover(e,t)}},{key:"showSeries",value:function(e){this.series.showSeries(e)}},{key:"hideSeries",value:function(e){this.series.hideSeries(e)}},{key:"resetSeries",value:function(){var e=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0],t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];this.series.resetSeries(e,t)}},{key:"addEventListener",value:function(e,t){this.events.addEventListener(e,t)}},{key:"removeEventListener",value:function(e,t){this.events.removeEventListener(e,t)}},{key:"addXaxisAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addXaxisAnnotationExternal(e,t,a)}},{key:"addYaxisAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addYaxisAnnotationExternal(e,t,a)}},{key:"addPointAnnotation",value:function(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,a=this;i&&(a=i),a.annotations.addPointAnnotationExternal(e,t,a)}},{key:"clearAnnotations",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0,t=this;e&&(t=e),t.annotations.clearAnnotations(t)}},{key:"removeAnnotation",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,i=this;t&&(i=t),i.annotations.removeAnnotation(i,e)}},{key:"getChartArea",value:function(){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")}},{key:"getSeriesTotalXRange",value:function(e,t){return this.coreUtils.getSeriesTotalsXRange(e,t)}},{key:"getHighestValueInSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=new $(this.ctx);return t.getMinYMaxY(e).highestY}},{key:"getLowestValueInSeries",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=new $(this.ctx);return t.getMinYMaxY(e).lowestY}},{key:"getSeriesTotal",value:function(){return this.w.globals.seriesTotals}},{key:"toggleDataPointSelection",value:function(e,t){return this.updateHelpers.toggleDataPointSelection(e,t)}},{key:"zoomX",value:function(e,t){this.ctx.toolbar.zoomUpdateOptions(e,t)}},{key:"setLocale",value:function(e){this.localization.setCurrentLocaleValues(e)}},{key:"dataURI",value:function(e){return new Pe(this.ctx).dataURI(e)}},{key:"exportToCSV",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=new Pe(this.ctx);return t.exportToCSV(e)}},{key:"paper",value:function(){return this.w.globals.dom.Paper}},{key:"_parentResizeCallback",value:function(){this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize()}},{key:"_windowResize",value:function(){var e=this;clearTimeout(this.w.globals.resizeTimer),this.w.globals.resizeTimer=window.setTimeout(function(){e.w.globals.resized=!0,e.w.globals.dataChanged=!1,e.ctx.update()},150)}},{key:"_windowResizeHandler",value:function(){var e=this.w.config.chart.redrawOnWindowResize;typeof e=="function"&&(e=e()),e&&this._windowResize()}}],[{key:"getChartByID",value:function(e){var t=T.escapeString(e),i=Apex._chartInstances.filter(function(a){return a.id===t})[0];return i&&i.chart}},{key:"initOnLoad",value:function(){for(var e=document.querySelectorAll("[data-apexcharts]"),t=0;t<e.length;t++)new L(e[t],JSON.parse(e[t].getAttribute("data-options"))).render()}},{key:"exec",value:function(e,t){var i=this.getChartByID(e);if(i){i.w.globals.isExecCalled=!0;var a=null;if(i.publicMethods.indexOf(t)!==-1){for(var r=arguments.length,l=new Array(r>2?r-2:0),o=2;o<r;o++)l[o-2]=arguments[o];a=i[t].apply(i,l)}return a}}},{key:"merge",value:function(e,t){return T.extend(e,t)}}]),L}();s.exports=Gu}(Pa,Pa.exports)),Pa.exports}(function(s){s.exports=function(n){var c={};function u(g){if(c[g])return c[g].exports;var m=c[g]={i:g,l:!1,exports:{}};return n[g].call(m.exports,m,m.exports,u),m.l=!0,m.exports}return u.m=n,u.c=c,u.d=function(g,m,w){u.o(g,m)||Object.defineProperty(g,m,{enumerable:!0,get:w})},u.r=function(g){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},u.t=function(g,m){if(m&1&&(g=u(g)),m&8||m&4&&typeof g=="object"&&g&&g.__esModule)return g;var w=Object.create(null);if(u.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:g}),m&2&&typeof g!="string")for(var k in g)u.d(w,k,function(P){return g[P]}.bind(null,k));return w},u.n=function(g){var m=g&&g.__esModule?function(){return g.default}:function(){return g};return u.d(m,"a",m),m},u.o=function(g,m){return Object.prototype.hasOwnProperty.call(g,m)},u.p="",u(u.s="fb15")}({8875:function(n,c,u){var g,m,w;(function(k,P){m=[],g=P,w=typeof g=="function"?g.apply(c,m):g,w!==void 0&&(n.exports=w)})(typeof self<"u"?self:this,function(){function k(){var P=Object.getOwnPropertyDescriptor(document,"currentScript");if(!P&&"currentScript"in document&&document.currentScript||P&&P.get!==k&&document.currentScript)return document.currentScript;try{throw new Error}catch(Z){var I=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,O=/@([^@]*):(\d+):(\d+)\s*$/ig,N=I.exec(Z.stack)||O.exec(Z.stack),z=N&&N[1]||!1,W=N&&N[2]||!1,q=document.location.href.replace(document.location.hash,""),K,ee,V,T=document.getElementsByTagName("script");z===q&&(K=document.documentElement.outerHTML,ee=new RegExp("(?:[^\\n]+?\\n){0,"+(W-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),V=K.replace(ee,"$1").trim());for(var j=0;j<T.length;j++)if(T[j].readyState==="interactive"||T[j].src===z||z===q&&T[j].innerHTML&&T[j].innerHTML.trim()===V)return T[j];return null}}return k})},"8bbf":function(n,c){n.exports=Yp},"95e6":function(n,c){n.exports=Bp()},fb15:function(n,c,u){if(u.r(c),typeof window<"u"){var g=window.document.currentScript;{var m=u("8875");g=m(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:m})}var w=g&&g.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);w&&(u.p=w[1])}var k=u("8bbf"),P=u("95e6"),I=u.n(P);const O=["animationEnd","beforeMount","mounted","updated","click","mouseMove","legendClick","markerClick","selection","dataPointSelection","dataPointMouseEnter","dataPointMouseLeave","beforeZoom","beforeResetZoom","zoomed","scrolled","scrolled"];var z=Object(k.defineComponent)({name:"apexchart",props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0},width:{default:"100%"},height:{default:"auto"}},emits:O,setup(K,{emit:ee}){const V=Object(k.ref)(null),T=Object(k.ref)(null),j=U=>U&&typeof U=="object"&&!Array.isArray(U)&&U!=null,Z=(U,ue)=>{typeof Object.assign!="function"&&function(){Object.assign=function(be){if(be==null)throw new TypeError("Cannot convert undefined or null to object");let Oe=Object(be);for(let Re=1;Re<arguments.length;Re++){let Pe=arguments[Re];if(Pe!=null)for(let Ee in Pe)Pe.hasOwnProperty(Ee)&&(Oe[Ee]=Pe[Ee])}return Oe}}();let de=Object.assign({},U);return j(U)&&j(ue)&&Object.keys(ue).forEach(be=>{j(ue[be])?be in U?de[be]=Z(U[be],ue[be]):Object.assign(de,{[be]:ue[be]}):Object.assign(de,{[be]:ue[be]})}),de},H=async()=>{await Object(k.nextTick)();const U={chart:{type:K.type||K.options.chart.type||"line",height:K.height,width:K.width,events:{}},series:K.series};O.forEach(de=>{let be=(...Oe)=>ee(de,...Oe);U.chart.events[de]=be});const ue=Z(K.options,U);return T.value=new I.a(V.value,ue),T.value.render()},ce=()=>(J(),H()),J=()=>{T.value.destroy()},ie=(U,ue)=>T.value.updateSeries(U,ue),ne=(U,ue,de,be)=>T.value.updateOptions(U,ue,de,be),Q=U=>T.value.toggleSeries(U),le=U=>{T.value.showSeries(U)},se=U=>{T.value.hideSeries(U)},ye=(U,ue)=>T.value.appendSeries(U,ue),ge=()=>{T.value.resetSeries()},Ve=(U,ue)=>{T.value.toggleDataPointSelection(U,ue)},Le=U=>T.value.appendData(U),Te=(U,ue)=>T.value.zoomX(U,ue),Ye=()=>T.value.dataURI(),$e=(U,ue)=>{T.value.addXaxisAnnotation(U,ue)},Gt=(U,ue)=>{T.value.addYaxisAnnotation(U,ue)},nt=(U,ue)=>{T.value.addPointAnnotation(U,ue)},je=(U,ue)=>{T.value.removeAnnotation(U,ue)},ot=()=>{T.value.clearAnnotations()};Object(k.onBeforeMount)(()=>{window.ApexCharts=I.a}),Object(k.onMounted)(()=>{V.value=Object(k.getCurrentInstance)().proxy.$el,H()}),Object(k.onBeforeUnmount)(()=>{!T.value||J()});const ht=Object(k.toRefs)(K);return Object(k.watch)(ht.options,()=>{!T.value&&K.options?H():T.value.updateOptions(K.options)}),Object(k.watch)(ht.series,()=>{!T.value&&K.series?H():T.value.updateSeries(K.series)},{deep:!0}),Object(k.watch)(ht.type,()=>{ce()}),Object(k.watch)(ht.width,()=>{ce()}),Object(k.watch)(ht.height,()=>{ce()}),{chart:T,init:H,refresh:ce,destroy:J,updateOptions:ne,updateSeries:ie,toggleSeries:Q,showSeries:le,hideSeries:se,resetSeries:ge,zoomX:Te,toggleDataPointSelection:Ve,appendData:Le,appendSeries:ye,addXaxisAnnotation:$e,addYaxisAnnotation:Gt,addPointAnnotation:nt,removeAnnotation:je,clearAnnotations:ot,dataURI:Ye}},render(){return Object(k.h)("div",{class:"vue-apexcharts"})}});const W=K=>{K.component(z.name,z)};z.install=W;var q=z;c.default=q}})})(au);const Wp=su(au.exports),Vp={width:"249",height:"53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jp=io('<path d="M90.278 16.382v-4.564h21.503v4.564h-8.015V38h-5.472V16.382h-8.016Zm25.694 28.982c-.69 0-1.338-.056-1.943-.167-.596-.102-1.091-.234-1.483-.396l1.228-4.065c.639.196 1.214.302 1.725.32.52.016.968-.103 1.343-.359.383-.255.694-.69.933-1.303l.32-.831-7.044-20.2h5.727l4.065 14.421h.205l4.103-14.42h5.766l-7.632 21.758c-.367 1.057-.865 1.977-1.496 2.761a6.126 6.126 0 0 1-2.365 1.829c-.954.434-2.105.652-3.452.652Zm17.372 0v-27h5.369v3.298h.243a7.21 7.21 0 0 1 1.036-1.61c.46-.555 1.056-1.015 1.789-1.381.742-.375 1.662-.563 2.762-.563a7.38 7.38 0 0 1 3.963 1.125c1.21.741 2.177 1.862 2.902 3.362.724 1.492 1.086 3.362 1.086 5.612 0 2.19-.353 4.04-1.061 5.549-.698 1.5-1.653 2.638-2.863 3.413-1.202.767-2.549 1.15-4.04 1.15-1.057 0-1.956-.174-2.697-.524-.733-.349-1.334-.788-1.803-1.316a6.674 6.674 0 0 1-1.074-1.624h-.166v10.509h-5.446Zm5.331-17.182c0 1.167.162 2.186.486 3.055.324.87.792 1.547 1.406 2.033.614.477 1.359.716 2.237.716.887 0 1.637-.243 2.25-.729.614-.494 1.078-1.176 1.394-2.045.323-.878.485-1.888.485-3.03 0-1.134-.157-2.13-.473-2.992-.315-.86-.779-1.534-1.393-2.02-.614-.485-1.368-.728-2.263-.728-.886 0-1.636.234-2.25.703-.605.469-1.069 1.133-1.393 1.994-.324.861-.486 1.875-.486 3.043Zm26.039 10.201c-2.02 0-3.758-.409-5.216-1.227-1.449-.826-2.565-1.994-3.349-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.887-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.295 0 2.501.209 3.618.626a8.023 8.023 0 0 1 2.94 1.854c.844.827 1.5 1.866 1.969 3.12.468 1.244.703 2.701.703 4.372v1.495h-16.581V26.2H168.6c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.559.192-2.199.576a4.039 4.039 0 0 0-1.483 1.52 4.29 4.29 0 0 0-.549 2.11v3.21c0 .97.179 1.81.537 2.517a3.93 3.93 0 0 0 1.546 1.637c.665.383 1.454.575 2.366.575a5.14 5.14 0 0 0 1.661-.255c.503-.171.934-.427 1.292-.768.358-.34.63-.758.818-1.252l5.037.332a6.879 6.879 0 0 1-1.573 3.17c-.784.895-1.798 1.594-3.042 2.097-1.236.494-2.664.741-4.283.741Zm28.545-14.42-4.986.307a2.567 2.567 0 0 0-.55-1.15 2.917 2.917 0 0 0-1.112-.832c-.452-.213-.993-.32-1.623-.32-.844 0-1.556.18-2.135.538-.58.35-.87.818-.87 1.406 0 .469.188.865.563 1.189.375.324 1.018.584 1.93.78l3.554.716c1.909.392 3.333 1.022 4.27 1.892.938.869 1.406 2.011 1.406 3.426 0 1.287-.379 2.416-1.137 3.388-.75.971-1.782 1.73-3.094 2.275-1.304.537-2.808.805-4.513.805-2.599 0-4.67-.54-6.213-1.623-1.534-1.091-2.433-2.574-2.698-4.449l5.357-.281c.162.792.554 1.398 1.176 1.815.622.41 1.419.614 2.391.614.954 0 1.721-.183 2.301-.55.588-.375.886-.856.895-1.444-.009-.495-.218-.9-.627-1.215-.409-.324-1.039-.571-1.892-.741l-3.4-.678c-1.918-.384-3.345-1.048-4.283-1.994-.929-.946-1.393-2.152-1.393-3.618 0-1.262.341-2.348 1.022-3.26.691-.912 1.658-1.615 2.902-2.11 1.253-.494 2.719-.741 4.398-.741 2.48 0 4.432.524 5.855 1.572 1.432 1.049 2.267 2.476 2.506 4.283Zm13.961-5.6v4.091h-11.825v-4.09h11.825Zm-9.14-4.704h5.446v18.307c0 .503.076.895.23 1.176.153.273.366.464.639.575.281.111.605.166.972.166.255 0 .511-.02.767-.063.255-.051.451-.09.588-.115l.856 4.052a15.39 15.39 0 0 1-1.15.294c-.495.12-1.096.192-1.803.218-1.312.05-2.463-.124-3.452-.525-.98-.4-1.743-1.022-2.288-1.866-.545-.844-.814-1.91-.805-3.196V13.659Zm21.066 24.724c-2.02 0-3.759-.409-5.216-1.227-1.449-.826-2.566-1.994-3.35-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.888-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.296 0 2.502.209 3.618.626a8.035 8.035 0 0 1 2.941 1.854c.843.827 1.5 1.866 1.968 3.12.469 1.244.704 2.701.704 4.372v1.495h-16.581V26.2h11.454c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.56.192-2.199.576a4.032 4.032 0 0 0-1.483 1.52 4.301 4.301 0 0 0-.55 2.11v3.21c0 .97.179 1.81.537 2.517a3.932 3.932 0 0 0 1.547 1.637c.665.383 1.453.575 2.365.575a5.15 5.15 0 0 0 1.662-.255c.503-.171.933-.427 1.291-.768.358-.34.631-.758.819-1.252l5.036.332a6.868 6.868 0 0 1-1.572 3.17c-.784.895-1.798 1.594-3.043 2.097-1.235.494-2.663.741-4.282.741ZM231.353 38V18.364h5.279v3.426h.205c.358-1.219.959-2.14 1.802-2.762.844-.63 1.816-.946 2.915-.946.273 0 .567.017.882.052.316.034.593.08.831.14v4.832a7.082 7.082 0 0 0-1.061-.204 9.528 9.528 0 0 0-1.24-.09c-.801 0-1.517.175-2.148.525a3.865 3.865 0 0 0-1.483 1.431c-.357.614-.536 1.322-.536 2.123V38h-5.446Z" fill="#fff"></path><path d="M121.082 17.023c-.521 0-.976-.068-1.368-.204a2.939 2.939 0 0 1-.989-.547 2.628 2.628 0 0 1-.626-.78l.726-.478c.109.192.255.381.437.567.186.186.426.34.721.462.298.123.664.184 1.099.184.676 0 1.221-.169 1.635-.507.418-.338.627-.863.627-1.576v-1.72h-.08c-.103.232-.25.464-.442.696a2.28 2.28 0 0 1-.756.572c-.308.152-.691.229-1.148.229-.61 0-1.152-.151-1.626-.453-.471-.302-.842-.732-1.114-1.293-.268-.563-.402-1.234-.402-2.013 0-.772.13-1.452.392-2.038.265-.587.635-1.044 1.109-1.373.474-.328 1.026-.492 1.656-.492.467 0 .855.083 1.163.249.308.162.555.364.741.606.189.242.336.478.442.706h.09V6.364h.865v7.835c0 .646-.138 1.178-.413 1.596-.275.417-.65.726-1.124.925-.474.202-1.012.303-1.615.303Zm-.06-3.913c.491 0 .91-.118 1.258-.353.348-.239.615-.58.8-1.024.186-.444.279-.973.279-1.586 0-.597-.091-1.125-.274-1.586-.182-.464-.447-.829-.795-1.094-.345-.268-.768-.402-1.268-.402-.51 0-.941.137-1.293.412-.351.275-.616.647-.795 1.114a4.294 4.294 0 0 0-.269 1.556c0 .583.092 1.099.274 1.546.182.444.449.792.8 1.044.352.249.779.373 1.283.373Zm8.383 1.05c-.66 0-1.243-.168-1.75-.503a3.398 3.398 0 0 1-1.184-1.387c-.285-.593-.427-1.278-.427-2.053 0-.783.142-1.47.427-2.064.285-.596.68-1.06 1.184-1.392.507-.334 1.09-.502 1.75-.502.659 0 1.241.168 1.745.502.503.335.898.8 1.183 1.392.288.594.432 1.281.432 2.064 0 .775-.142 1.46-.427 2.053a3.385 3.385 0 0 1-1.188 1.387c-.504.335-1.086.502-1.745.502Zm0-.811c.53 0 .979-.143 1.347-.428.368-.285.646-.664.835-1.138.192-.474.288-.996.288-1.566 0-.57-.096-1.094-.288-1.571a2.673 2.673 0 0 0-.835-1.149c-.368-.288-.817-.432-1.347-.432-.527 0-.977.144-1.348.432a2.707 2.707 0 0 0-.84 1.149 4.23 4.23 0 0 0-.283 1.57c0 .57.094 1.093.283 1.567.192.474.472.853.84 1.138.368.285.817.428 1.348.428Zm12.103-6.985v.77h-3.754v-.77h3.754ZM138.927 14V5.245c0-.411.095-.757.284-1.039a1.85 1.85 0 0 1 .75-.641c.309-.146.635-.22.98-.22.232 0 .424.02.576.06.156.037.279.073.368.11l-.258.775c-.066-.02-.148-.043-.244-.07a1.391 1.391 0 0 0-.363-.039c-.384 0-.681.108-.89.323-.208.216-.313.524-.313.925L139.812 14h-.885Zm6.134.174c-.46 0-.881-.09-1.262-.268a2.208 2.208 0 0 1-.91-.786c-.226-.345-.338-.762-.338-1.253 0-.378.071-.696.214-.954.142-.259.344-.471.606-.637a3.36 3.36 0 0 1 .93-.392c.358-.097.752-.171 1.183-.224.428-.053.789-.1 1.084-.14.298-.04.525-.102.681-.188.156-.087.234-.226.234-.418v-.179c0-.52-.156-.93-.468-1.228-.308-.302-.752-.452-1.332-.452-.55 0-.999.12-1.347.363-.345.242-.587.527-.726.855l-.84-.304c.172-.417.411-.75.715-.999a2.829 2.829 0 0 1 1.025-.542 3.99 3.99 0 0 1 1.148-.169c.292 0 .595.038.91.115.318.076.613.208.885.397.272.186.492.446.661.78.169.332.254.753.254 1.264V14h-.885v-1.208h-.055a2.45 2.45 0 0 1-1.258 1.178c-.315.136-.684.204-1.109.204Zm.12-.81c.47 0 .878-.105 1.223-.314.344-.208.61-.485.795-.83.189-.348.284-.73.284-1.148V9.968a.891.891 0 0 1-.333.17c-.153.049-.33.094-.532.133-.199.037-.398.068-.597.095a69.4 69.4 0 0 1-.537.07 4.964 4.964 0 0 0-1.104.248c-.305.113-.538.268-.701.467-.162.196-.243.448-.243.756 0 .464.165.824.497 1.079.331.252.747.378 1.248.378Zm10.531-5.325-.81.229a2.138 2.138 0 0 0-.338-.622 1.54 1.54 0 0 0-.572-.442c-.232-.11-.52-.164-.865-.164-.517 0-.941.122-1.273.368-.331.245-.497.561-.497.95 0 .327.113.594.338.8.229.202.58.363 1.054.482l1.154.283c.639.156 1.118.403 1.436.741.322.338.483.762.483 1.273 0 .43-.12.814-.358 1.148-.239.335-.572.598-1 .79-.424.19-.916.284-1.476.284-.746 0-1.361-.167-1.845-.502-.484-.338-.793-.825-.929-1.462l.85-.209c.109.455.323.798.641 1.03.322.232.744.348 1.268.348.587 0 1.056-.131 1.407-.393.351-.265.527-.597.527-.994 0-.309-.103-.567-.308-.776-.206-.212-.517-.368-.935-.467l-1.248-.299c-.663-.159-1.153-.41-1.471-.755-.319-.345-.478-.773-.478-1.283 0-.42.115-.79.343-1.109.229-.321.544-.573.945-.755a3.28 3.28 0 0 1 1.372-.274c.699 0 1.258.16 1.675.478.421.314.725.749.91 1.302Zm4.915-1.675v.77h-3.644v-.77h3.644Zm-2.506-1.83h.89v7.472c0 .319.055.569.164.751.11.18.252.307.428.383.176.073.363.11.562.11.116 0 .215-.007.298-.02.083-.017.156-.034.219-.05l.189.8a2.093 2.093 0 0 1-.318.09c-.126.03-.282.044-.468.044a2.17 2.17 0 0 1-.939-.213 1.834 1.834 0 0 1-.736-.637c-.192-.281-.289-.631-.289-1.049v-7.68Zm7.381 9.625c-.712 0-1.329-.166-1.849-.497a3.327 3.327 0 0 1-1.208-1.387c-.282-.593-.423-1.276-.423-2.048 0-.77.141-1.452.423-2.049.285-.6.678-1.069 1.178-1.407.504-.341 1.085-.512 1.745-.512.414 0 .814.076 1.198.229.385.15.729.38 1.034.691.308.308.552.698.731 1.168.179.468.269 1.021.269 1.66v.438h-5.966v-.78h5.061c0-.49-.1-.932-.299-1.323a2.317 2.317 0 0 0-.82-.934 2.15 2.15 0 0 0-1.208-.343c-.484 0-.91.129-1.278.387-.368.259-.656.6-.865 1.025-.205.424-.31.888-.313 1.392v.467c0 .607.104 1.137.313 1.59.212.452.512.801.9 1.05.388.248.847.373 1.377.373.362 0 .678-.057.95-.17a2.005 2.005 0 0 0 1.118-1.084l.841.274a2.477 2.477 0 0 1-.572.89c-.262.272-.59.49-.984.656-.392.163-.842.244-1.353.244ZM170.41 14V6.364h.86v1.173h.064c.153-.385.418-.694.796-.93a2.384 2.384 0 0 1 1.292-.358 12.569 12.569 0 0 1 .468.015v.9a8.008 8.008 0 0 0-.209-.03 2.446 2.446 0 0 0-.323-.02c-.398 0-.753.085-1.064.254a1.882 1.882 0 0 0-.731.69 1.906 1.906 0 0 0-.268 1.01V14h-.885Z" fill="#EBEBEB" fill-opacity=".6"></path><g clip-path="url(#a)" fill="#fff"><path d="M40 22.504c-7.172-6.63-11.055 3.811-19.11-.549C21.866 27.01 33.127 34.6 40 25.55c6.874 9.05 18.135 1.46 19.11-3.595-8.055 4.36-11.938-6.08-19.11.55Z"></path><path d="M32.105 30.657c-.856 0-1.735-.104-2.63-.313-2.223-.52-4.44-1.686-6.242-3.285-1.737-1.541-2.91-3.34-3.217-4.935a.891.891 0 0 1 1.299-.952c3.429 1.857 5.961.756 8.642-.41 1.552-.674 3.158-1.372 4.9-1.416 1.776-.047 3.465.602 5.143 1.977 1.678-1.375 3.368-2.024 5.142-1.977 1.743.044 3.348.742 4.901 1.417 2.681 1.165 5.213 2.265 8.642.41a.89.89 0 0 1 1.299.951c-.308 1.596-1.48 3.394-3.217 4.935-1.803 1.6-4.02 2.766-6.242 3.285-4.032.942-7.73-.261-10.525-3.393-2.174 2.436-4.896 3.706-7.895 3.706Zm-9.554-7.05c1.332 2.074 4.11 4.25 7.33 5.002 2.586.605 6.319.471 9.41-3.598a.89.89 0 0 1 1.418 0c3.09 4.07 6.823 4.203 9.41 3.599 3.219-.753 5.997-2.929 7.33-5.003-3.199.927-5.786-.198-8.116-1.21-3.004-1.306-5.377-2.337-8.728.761a.89.89 0 0 1-1.21 0c-3.352-3.098-5.724-2.067-8.728-.761-1.72.747-3.579 1.555-5.72 1.555a8.541 8.541 0 0 1-2.396-.345Z"></path><rect x="22" y="15" width="6" height="2" rx="1"></rect><rect x="30" y="15" width="6" height="2" rx="1"></rect><rect x="46" y="15" width="6" height="2" rx="1"></rect><rect x="54" y="15" width="6" height="2" rx="1"></rect><rect x="38" y="15" width="6" height="2" rx="1"></rect><rect x="26" y="33" width="6" height="2" rx="1"></rect><rect x="42" y="33" width="6" height="2" rx="1"></rect><rect x="50" y="33" width="6" height="2" rx="1"></rect><rect x="34" y="33" width="6" height="2" rx="1"></rect><rect x="22" y="37" width="38" height="2" rx="1"></rect></g><rect x="18" y="33" width="6" height="2" rx="1" fill="#fff"></rect><rect x="6" y="33" width="8" height="2" rx="1" fill="#fff"></rect><rect x="6" y="27" width="6" height="2" rx="1" fill="#fff"></rect><rect x="14" y="27" width="6" height="2" rx="1" fill="#fff"></rect><rect x="6" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="12" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="18" y="37" width="2" height="2" rx="1" fill="#fff"></rect><rect x="62" y="37" width="6" height="2" rx="1" fill="#fff"></rect><rect x="70" y="37" width="4" height="2" rx="1" fill="#fff"></rect><rect x="6" y="19" width="10" height="2" rx="1" fill="#fff"></rect><rect x="6" y="23" width="8" height="2" rx="1" fill="#fff"></rect><rect x="62" y="15" width="6" height="2" rx="1" fill="#fff"></rect><rect x="70" y="15" width="6" height="2" rx="1" fill="#fff"></rect><rect x=".5" y="9.5" width="79" height="33" rx="3.5" stroke="#fff"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="#fff"></rect><rect x="62" y="19" width="14" height="2" rx="1" fill="#fff"></rect><rect x="66" y="23" width="10" height="2" rx="1" fill="#fff"></rect><rect x="68" y="27" width="8" height="2" rx="1" fill="#fff"></rect><rect x="66" y="33" width="10" height="2" rx="1" fill="#fff"></rect><rect x="62" y="27" width="4" height="2" rx="1" fill="#fff"></rect><rect x="60" y="33" width="4" height="2" rx="1" fill="#fff"></rect><defs><clipPath id="a"><path fill="#fff" transform="translate(20 5)" d="M0 0h40v40H0z"></path></clipPath></defs>',25),Gp=[jp];function Up(s,n){return Ke(),at("svg",Vp,Gp)}const $p={render:Up},qp={width:"249",height:"53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Zp=io('<path d="M90.278 16.382v-4.564h21.503v4.564h-8.015V38h-5.472V16.382h-8.016Zm25.694 28.982c-.69 0-1.338-.056-1.943-.167-.596-.102-1.091-.234-1.483-.396l1.228-4.065c.639.196 1.214.302 1.725.32.52.016.968-.103 1.343-.359.383-.255.694-.69.933-1.303l.32-.831-7.044-20.2h5.727l4.065 14.421h.205l4.103-14.42h5.766l-7.632 21.758c-.367 1.057-.865 1.977-1.496 2.761a6.126 6.126 0 0 1-2.365 1.829c-.954.434-2.105.652-3.452.652Zm17.372 0v-27h5.369v3.298h.243a7.21 7.21 0 0 1 1.036-1.61c.46-.555 1.056-1.015 1.789-1.381.742-.375 1.662-.563 2.762-.563a7.38 7.38 0 0 1 3.963 1.125c1.21.741 2.177 1.862 2.902 3.362.724 1.492 1.086 3.362 1.086 5.612 0 2.19-.353 4.04-1.061 5.549-.698 1.5-1.653 2.638-2.863 3.413-1.202.767-2.549 1.15-4.04 1.15-1.057 0-1.956-.174-2.697-.524-.733-.349-1.334-.788-1.803-1.316a6.674 6.674 0 0 1-1.074-1.624h-.166v10.509h-5.446Zm5.331-17.182c0 1.167.162 2.186.486 3.055.324.87.792 1.547 1.406 2.033.614.477 1.359.716 2.237.716.887 0 1.637-.243 2.25-.729.614-.494 1.078-1.176 1.394-2.045.323-.878.485-1.888.485-3.03 0-1.134-.157-2.13-.473-2.992-.315-.86-.779-1.534-1.393-2.02-.614-.485-1.368-.728-2.263-.728-.886 0-1.636.234-2.25.703-.605.469-1.069 1.133-1.393 1.994-.324.861-.486 1.875-.486 3.043Zm26.039 10.201c-2.02 0-3.758-.409-5.216-1.227-1.449-.826-2.565-1.994-3.349-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.887-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.295 0 2.501.209 3.618.626a8.023 8.023 0 0 1 2.94 1.854c.844.827 1.5 1.866 1.969 3.12.468 1.244.703 2.701.703 4.372v1.495h-16.581V26.2H168.6c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.559.192-2.199.576a4.039 4.039 0 0 0-1.483 1.52 4.29 4.29 0 0 0-.549 2.11v3.21c0 .97.179 1.81.537 2.517a3.93 3.93 0 0 0 1.546 1.637c.665.383 1.454.575 2.366.575a5.14 5.14 0 0 0 1.661-.255c.503-.171.934-.427 1.292-.768.358-.34.63-.758.818-1.252l5.037.332a6.879 6.879 0 0 1-1.573 3.17c-.784.895-1.798 1.594-3.042 2.097-1.236.494-2.664.741-4.283.741Zm28.545-14.42-4.986.307a2.567 2.567 0 0 0-.55-1.15 2.917 2.917 0 0 0-1.112-.832c-.452-.213-.993-.32-1.623-.32-.844 0-1.556.18-2.135.538-.58.35-.87.818-.87 1.406 0 .469.188.865.563 1.189.375.324 1.018.584 1.93.78l3.554.716c1.909.392 3.333 1.022 4.27 1.892.938.869 1.406 2.011 1.406 3.426 0 1.287-.379 2.416-1.137 3.388-.75.971-1.782 1.73-3.094 2.275-1.304.537-2.808.805-4.513.805-2.599 0-4.67-.54-6.213-1.623-1.534-1.091-2.433-2.574-2.698-4.449l5.357-.281c.162.792.554 1.398 1.176 1.815.622.41 1.419.614 2.391.614.954 0 1.721-.183 2.301-.55.588-.375.886-.856.895-1.444-.009-.495-.218-.9-.627-1.215-.409-.324-1.039-.571-1.892-.741l-3.4-.678c-1.918-.384-3.345-1.048-4.283-1.994-.929-.946-1.393-2.152-1.393-3.618 0-1.262.341-2.348 1.022-3.26.691-.912 1.658-1.615 2.902-2.11 1.253-.494 2.719-.741 4.398-.741 2.48 0 4.432.524 5.855 1.572 1.432 1.049 2.267 2.476 2.506 4.283Zm13.961-5.6v4.091h-11.825v-4.09h11.825Zm-9.14-4.704h5.446v18.307c0 .503.076.895.23 1.176.153.273.366.464.639.575.281.111.605.166.972.166.255 0 .511-.02.767-.063.255-.051.451-.09.588-.115l.856 4.052a15.39 15.39 0 0 1-1.15.294c-.495.12-1.096.192-1.803.218-1.312.05-2.463-.124-3.452-.525-.98-.4-1.743-1.022-2.288-1.866-.545-.844-.814-1.91-.805-3.196V13.659Zm21.066 24.724c-2.02 0-3.759-.409-5.216-1.227-1.449-.826-2.566-1.994-3.35-3.503-.784-1.517-1.176-3.31-1.176-5.382 0-2.02.392-3.792 1.176-5.318.784-1.525 1.888-2.714 3.311-3.567 1.432-.852 3.111-1.278 5.037-1.278 1.296 0 2.502.209 3.618.626a8.035 8.035 0 0 1 2.941 1.854c.843.827 1.5 1.866 1.968 3.12.469 1.244.704 2.701.704 4.372v1.495h-16.581V26.2h11.454c0-.784-.17-1.478-.511-2.084a3.665 3.665 0 0 0-1.419-1.419c-.597-.349-1.291-.524-2.084-.524-.827 0-1.56.192-2.199.576a4.032 4.032 0 0 0-1.483 1.52 4.301 4.301 0 0 0-.55 2.11v3.21c0 .97.179 1.81.537 2.517a3.932 3.932 0 0 0 1.547 1.637c.665.383 1.453.575 2.365.575a5.15 5.15 0 0 0 1.662-.255c.503-.171.933-.427 1.291-.768.358-.34.631-.758.819-1.252l5.036.332a6.868 6.868 0 0 1-1.572 3.17c-.784.895-1.798 1.594-3.043 2.097-1.235.494-2.663.741-4.282.741ZM231.353 38V18.364h5.279v3.426h.205c.358-1.219.959-2.14 1.802-2.762.844-.63 1.816-.946 2.915-.946.273 0 .567.017.882.052.316.034.593.08.831.14v4.832a7.082 7.082 0 0 0-1.061-.204 9.528 9.528 0 0 0-1.24-.09c-.801 0-1.517.175-2.148.525a3.865 3.865 0 0 0-1.483 1.431c-.357.614-.536 1.322-.536 2.123V38h-5.446Z" fill="#000"></path><path d="M121.082 17.023c-.521 0-.976-.068-1.368-.204a2.939 2.939 0 0 1-.989-.547 2.628 2.628 0 0 1-.626-.78l.726-.478c.109.192.255.381.437.567.186.186.426.34.721.462.298.123.664.184 1.099.184.676 0 1.221-.169 1.635-.507.418-.338.627-.863.627-1.576v-1.72h-.08c-.103.232-.25.464-.442.696a2.28 2.28 0 0 1-.756.572c-.308.152-.691.229-1.148.229-.61 0-1.152-.151-1.626-.453-.471-.302-.842-.732-1.114-1.293-.268-.563-.402-1.234-.402-2.013 0-.772.13-1.452.392-2.038.265-.587.635-1.044 1.109-1.373.474-.328 1.026-.492 1.656-.492.467 0 .855.083 1.163.249.308.162.555.364.741.606.189.242.336.478.442.706h.09V6.364h.865v7.835c0 .646-.138 1.178-.413 1.596-.275.417-.65.726-1.124.925-.474.202-1.012.303-1.615.303Zm-.06-3.913c.491 0 .91-.118 1.258-.353.348-.239.615-.58.8-1.024.186-.444.279-.973.279-1.586 0-.597-.091-1.125-.274-1.586-.182-.464-.447-.829-.795-1.094-.345-.268-.768-.402-1.268-.402-.51 0-.941.137-1.293.412-.351.275-.616.647-.795 1.114a4.294 4.294 0 0 0-.269 1.556c0 .583.092 1.099.274 1.546.182.444.449.792.8 1.044.352.249.779.373 1.283.373Zm8.383 1.05c-.66 0-1.243-.168-1.75-.503a3.398 3.398 0 0 1-1.184-1.387c-.285-.593-.427-1.278-.427-2.053 0-.783.142-1.47.427-2.064.285-.596.68-1.06 1.184-1.392.507-.334 1.09-.502 1.75-.502.659 0 1.241.168 1.745.502.503.335.898.8 1.183 1.392.288.594.432 1.281.432 2.064 0 .775-.142 1.46-.427 2.053a3.385 3.385 0 0 1-1.188 1.387c-.504.335-1.086.502-1.745.502Zm0-.811c.53 0 .979-.143 1.347-.428.368-.285.646-.664.835-1.138.192-.474.288-.996.288-1.566 0-.57-.096-1.094-.288-1.571a2.673 2.673 0 0 0-.835-1.149c-.368-.288-.817-.432-1.347-.432-.527 0-.977.144-1.348.432a2.707 2.707 0 0 0-.84 1.149 4.23 4.23 0 0 0-.283 1.57c0 .57.094 1.093.283 1.567.192.474.472.853.84 1.138.368.285.817.428 1.348.428Zm12.103-6.985v.77h-3.754v-.77h3.754ZM138.927 14V5.245c0-.411.095-.757.284-1.039a1.85 1.85 0 0 1 .75-.641c.309-.146.635-.22.98-.22.232 0 .424.02.576.06.156.037.279.073.368.11l-.258.775c-.066-.02-.148-.043-.244-.07a1.391 1.391 0 0 0-.363-.039c-.384 0-.681.108-.89.323-.208.216-.313.524-.313.925L139.812 14h-.885Zm6.134.174c-.46 0-.881-.09-1.262-.268a2.208 2.208 0 0 1-.91-.786c-.226-.345-.338-.762-.338-1.253 0-.378.071-.696.214-.954.142-.259.344-.471.606-.637a3.36 3.36 0 0 1 .93-.392c.358-.097.752-.171 1.183-.224.428-.053.789-.1 1.084-.14.298-.04.525-.102.681-.188.156-.087.234-.226.234-.418v-.179c0-.52-.156-.93-.468-1.228-.308-.302-.752-.452-1.332-.452-.55 0-.999.12-1.347.363-.345.242-.587.527-.726.855l-.84-.304c.172-.417.411-.75.715-.999a2.829 2.829 0 0 1 1.025-.542 3.99 3.99 0 0 1 1.148-.169c.292 0 .595.038.91.115.318.076.613.208.885.397.272.186.492.446.661.78.169.332.254.753.254 1.264V14h-.885v-1.208h-.055a2.45 2.45 0 0 1-1.258 1.178c-.315.136-.684.204-1.109.204Zm.12-.81c.47 0 .878-.105 1.223-.314.344-.208.61-.485.795-.83.189-.348.284-.73.284-1.148V9.968a.891.891 0 0 1-.333.17c-.153.049-.33.094-.532.133-.199.037-.398.068-.597.095a69.4 69.4 0 0 1-.537.07 4.964 4.964 0 0 0-1.104.248c-.305.113-.538.268-.701.467-.162.196-.243.448-.243.756 0 .464.165.824.497 1.079.331.252.747.378 1.248.378Zm10.531-5.325-.81.229a2.138 2.138 0 0 0-.338-.622 1.54 1.54 0 0 0-.572-.442c-.232-.11-.52-.164-.865-.164-.517 0-.941.122-1.273.368-.331.245-.497.561-.497.95 0 .327.113.594.338.8.229.202.58.363 1.054.482l1.154.283c.639.156 1.118.403 1.436.741.322.338.483.762.483 1.273 0 .43-.12.814-.358 1.148-.239.335-.572.598-1 .79-.424.19-.916.284-1.476.284-.746 0-1.361-.167-1.845-.502-.484-.338-.793-.825-.929-1.462l.85-.209c.109.455.323.798.641 1.03.322.232.744.348 1.268.348.587 0 1.056-.131 1.407-.393.351-.265.527-.597.527-.994 0-.309-.103-.567-.308-.776-.206-.212-.517-.368-.935-.467l-1.248-.299c-.663-.159-1.153-.41-1.471-.755-.319-.345-.478-.773-.478-1.283 0-.42.115-.79.343-1.109.229-.321.544-.573.945-.755a3.28 3.28 0 0 1 1.372-.274c.699 0 1.258.16 1.675.478.421.314.725.749.91 1.302Zm4.915-1.675v.77h-3.644v-.77h3.644Zm-2.506-1.83h.89v7.472c0 .319.055.569.164.751.11.18.252.307.428.383.176.073.363.11.562.11.116 0 .215-.007.298-.02.083-.017.156-.034.219-.05l.189.8a2.093 2.093 0 0 1-.318.09c-.126.03-.282.044-.468.044a2.17 2.17 0 0 1-.939-.213 1.834 1.834 0 0 1-.736-.637c-.192-.281-.289-.631-.289-1.049v-7.68Zm7.381 9.625c-.712 0-1.329-.166-1.849-.497a3.327 3.327 0 0 1-1.208-1.387c-.282-.593-.423-1.276-.423-2.048 0-.77.141-1.452.423-2.049.285-.6.678-1.069 1.178-1.407.504-.341 1.085-.512 1.745-.512.414 0 .814.076 1.198.229.385.15.729.38 1.034.691.308.308.552.698.731 1.168.179.468.269 1.021.269 1.66v.438h-5.966v-.78h5.061c0-.49-.1-.932-.299-1.323a2.317 2.317 0 0 0-.82-.934 2.15 2.15 0 0 0-1.208-.343c-.484 0-.91.129-1.278.387-.368.259-.656.6-.865 1.025-.205.424-.31.888-.313 1.392v.467c0 .607.104 1.137.313 1.59.212.452.512.801.9 1.05.388.248.847.373 1.377.373.362 0 .678-.057.95-.17a2.005 2.005 0 0 0 1.118-1.084l.841.274a2.477 2.477 0 0 1-.572.89c-.262.272-.59.49-.984.656-.392.163-.842.244-1.353.244ZM170.41 14V6.364h.86v1.173h.064c.153-.385.418-.694.796-.93a2.384 2.384 0 0 1 1.292-.358 12.569 12.569 0 0 1 .468.015v.9a8.008 8.008 0 0 0-.209-.03 2.446 2.446 0 0 0-.323-.02c-.398 0-.753.085-1.064.254a1.882 1.882 0 0 0-.731.69 1.906 1.906 0 0 0-.268 1.01V14h-.885Z" fill="#000" fill-opacity=".6"></path><g clip-path="url(#a)" fill="#000"><path d="M40 22.504c-7.172-6.63-11.055 3.811-19.11-.549C21.866 27.01 33.127 34.6 40 25.55c6.874 9.05 18.135 1.46 19.11-3.595-8.055 4.36-11.938-6.08-19.11.55Z"></path><path d="M32.105 30.657c-.856 0-1.735-.104-2.63-.313-2.223-.52-4.44-1.686-6.242-3.285-1.737-1.541-2.91-3.34-3.217-4.935a.89.89 0 0 1 1.299-.952c3.43 1.857 5.961.756 8.642-.41 1.552-.674 3.158-1.372 4.9-1.416 1.776-.047 3.465.602 5.143 1.977 1.678-1.375 3.368-2.024 5.142-1.977 1.743.044 3.348.742 4.901 1.417 2.681 1.165 5.213 2.265 8.642.41a.89.89 0 0 1 1.299.951c-.308 1.596-1.48 3.394-3.217 4.935-1.803 1.6-4.02 2.766-6.242 3.285-4.032.942-7.73-.261-10.525-3.393-2.174 2.436-4.896 3.706-7.895 3.706Zm-9.554-7.05c1.332 2.074 4.11 4.25 7.33 5.002 2.586.605 6.319.471 9.41-3.598a.89.89 0 0 1 1.418 0c3.09 4.07 6.823 4.203 9.41 3.599 3.219-.753 5.998-2.929 7.33-5.003-3.198.927-5.786-.198-8.116-1.21-3.004-1.306-5.376-2.337-8.728.761a.89.89 0 0 1-1.21 0c-3.352-3.098-5.724-2.067-8.728-.761-1.72.747-3.579 1.555-5.72 1.555a8.541 8.541 0 0 1-2.396-.345Z"></path><rect x="22" y="15" width="6" height="2" rx="1"></rect><rect x="30" y="15" width="6" height="2" rx="1"></rect><rect x="46" y="15" width="6" height="2" rx="1"></rect><rect x="54" y="15" width="6" height="2" rx="1"></rect><rect x="38" y="15" width="6" height="2" rx="1"></rect><rect x="26" y="33" width="6" height="2" rx="1"></rect><rect x="42" y="33" width="6" height="2" rx="1"></rect><rect x="50" y="33" width="6" height="2" rx="1"></rect><rect x="34" y="33" width="6" height="2" rx="1"></rect><rect x="22" y="37" width="38" height="2" rx="1"></rect></g><rect x="18" y="33" width="6" height="2" rx="1" fill="#000"></rect><rect x="6" y="33" width="8" height="2" rx="1" fill="#000"></rect><rect x="6" y="27" width="6" height="2" rx="1" fill="#000"></rect><rect x="14" y="27" width="6" height="2" rx="1" fill="#000"></rect><rect x="6" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="12" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="18" y="37" width="2" height="2" rx="1" fill="#000"></rect><rect x="62" y="37" width="6" height="2" rx="1" fill="#000"></rect><rect x="70" y="37" width="4" height="2" rx="1" fill="#000"></rect><rect x="6" y="19" width="10" height="2" rx="1" fill="#000"></rect><rect x="6" y="23" width="8" height="2" rx="1" fill="#000"></rect><rect x="62" y="15" width="6" height="2" rx="1" fill="#000"></rect><rect x="70" y="15" width="6" height="2" rx="1" fill="#000"></rect><rect x=".5" y="9.5" width="79" height="33" rx="3.5" stroke="#000"></rect><rect x="6" y="15" width="14" height="2" rx="1" fill="#000"></rect><rect x="62" y="19" width="14" height="2" rx="1" fill="#000"></rect><rect x="66" y="23" width="10" height="2" rx="1" fill="#000"></rect><rect x="68" y="27" width="8" height="2" rx="1" fill="#000"></rect><rect x="66" y="33" width="10" height="2" rx="1" fill="#000"></rect><rect x="62" y="27" width="4" height="2" rx="1" fill="#000"></rect><rect x="60" y="33" width="4" height="2" rx="1" fill="#000"></rect><defs><clipPath id="a"><path fill="#fff" transform="translate(20 5)" d="M0 0h40v40H0z"></path></clipPath></defs>',25),Kp=[Zp];function Jp(s,n){return Ke(),at("svg",qp,Kp)}const Qp={render:Jp};function ex(s,n){return Ke(),at("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[De("path",{"fill-rule":"evenodd",d:"M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}function tx(s,n){return Ke(),at("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[De("path",{"fill-rule":"evenodd",d:"M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z","clip-rule":"evenodd"})])}const ix={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 455 455",style:{"enable-background":"new 0 0 455 455"},"xml:space":"preserve"},sx=De("path",{d:"m227.495 150-93.749 50-88.279-50 38.8 180h286.466l38.8-180-88.286 50zM87.5 360h280v55h-280z"},null,-1),ax=De("circle",{cx:"40",cy:"80",r:"40"},null,-1),rx=De("circle",{cx:"415",cy:"80",r:"40"},null,-1),nx=De("circle",{cx:"227.5",cy:"80",r:"40"},null,-1),ox=[sx,ax,rx,nx];function lx(s,n){return Ke(),at("svg",ix,ox)}const cx={render:lx},hx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 285.5 285.5",style:{"enable-background":"new 0 0 285.5 285.5"},"xml:space":"preserve"},ux=De("path",{d:"M79.999 62.75c0 34.601 28.149 62.75 62.751 62.75s62.751-28.149 62.751-62.75S177.352 0 142.75 0 79.999 28.149 79.999 62.75zM42.75 285.5h200c8.284 0 15-6.716 15-15 0-63.411-51.589-115-115-115s-115 51.589-115 115c0 8.284 6.716 15 15 15z"},null,-1),dx=[ux];function fx(s,n){return Ke(),at("svg",hx,dx)}const gx={render:fx},px={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 489.802 489.802",style:{"enable-background":"new 0 0 489.802 489.802"},"xml:space":"preserve"},xx=De("path",{d:"m20.701 281.901 32.1.2c4.8 24.7 14.3 48.7 28.7 70.5l-22.8 22.6c-8.2 8.1-8.2 21.2-.2 29.4l24.6 24.9c8.1 8.2 21.2 8.2 29.4.2l22.8-22.6c21.6 14.6 45.5 24.5 70.2 29.5l-.2 32.1c-.1 11.5 9.2 20.8 20.7 20.9l35 .2c11.5.1 20.8-9.2 20.9-20.7l.2-32.1c24.7-4.8 48.7-14.3 70.5-28.7l22.6 22.8c8.1 8.2 21.2 8.2 29.4.2l24.9-24.6c8.2-8.1 8.2-21.2.2-29.4l-22.6-22.8c14.6-21.6 24.5-45.5 29.5-70.2l32.1.2c11.5.1 20.8-9.2 20.9-20.7l.2-35c.1-11.5-9.2-20.8-20.7-20.9l-32.1-.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1 8.2-21.2.2-29.4l-24.6-24.9c-8.1-8.2-21.2-8.2-29.4-.2l-22.8 22.6c-21.6-14.6-45.5-24.5-70.2-29.5l.2-32.1c.1-11.5-9.2-20.8-20.7-20.9l-35-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.3 32.1c-24.8 4.8-48.8 14.3-70.5 28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-.2l-24.8 24.6c-8.2 8.1-8.2 21.2-.2 29.4l22.6 22.8c-14.6 21.6-24.5 45.5-29.5 70.2l-32.1-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.2 35c-.1 11.4 9.2 20.8 20.7 20.9zm158.6-103.3c36.6-36.2 95.5-35.9 131.7.7s35.9 95.5-.7 131.7-95.5 35.9-131.7-.7-35.9-95.5.7-131.7z"},null,-1),mx=[xx];function bx(s,n){return Ke(),at("svg",px,mx)}const vx={render:bx},yx={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 463 463",style:{"enable-background":"new 0 0 463 463"},"xml:space":"preserve"},wx=De("path",{d:"M431.5 120h-400C14.131 120 0 134.131 0 151.5v160C0 328.869 14.131 343 31.5 343h400c17.369 0 31.5-14.131 31.5-31.5v-160c0-17.369-14.131-31.5-31.5-31.5zM448 311.5c0 9.099-7.402 16.5-16.5 16.5h-400c-9.098 0-16.5-7.401-16.5-16.5v-160c0-9.099 7.402-16.5 16.5-16.5h400c9.098 0 16.5 7.401 16.5 16.5v160z"},null,-1),kx=De("path",{d:"M327.5 280h-192c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h192c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM103.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM55.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 280h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 248h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM367 255.5a7.5 7.5 0 0 0-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16a7.5 7.5 0 0 0 7.5-7.5zM295.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM247.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM199.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM151.5 263h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM119.5 248h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM71.5 248h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM423.5 184h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM343.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM295.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM247.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM199.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM151.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM103.5 199h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM39.5 199h32c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM423.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM327.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM279.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM231.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM183.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM135.5 216h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM39.5 231h48c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-48c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM423.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM375.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM327.5 152h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5zM263.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM215.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM167.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM119.5 167h16c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-16c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5zM39.5 167h48c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-48c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"},null,-1),Ax=[wx,kx];function Sx(s,n){return Ke(),at("svg",yx,Ax)}const Cx={render:Sx};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof window<"u";function Ex(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function Nr(s,n){const c={};for(const u in n){const g=n[u];c[u]=jt(g)?g.map(s):s(g)}return c}const Us=()=>{},jt=Array.isArray,Px=/\/$/,Tx=s=>s.replace(Px,"");function Dr(s,n,c="/"){let u,g={},m="",w="";const k=n.indexOf("#");let P=n.indexOf("?");return k<P&&k>=0&&(P=-1),P>-1&&(u=n.slice(0,P),m=n.slice(P+1,k>-1?k:n.length),g=s(m)),k>-1&&(u=u||n.slice(0,k),w=n.slice(k,n.length)),u=Ix(u!=null?u:n,c),{fullPath:u+(m&&"?")+m+w,path:u,query:g,hash:w}}function Lx(s,n){const c=n.query?s(n.query):"";return n.path+(c&&"?")+c+(n.hash||"")}function yl(s,n){return!n||!s.toLowerCase().startsWith(n.toLowerCase())?s:s.slice(n.length)||"/"}function Mx(s,n,c){const u=n.matched.length-1,g=c.matched.length-1;return u>-1&&u===g&&As(n.matched[u],c.matched[g])&&ru(n.params,c.params)&&s(n.query)===s(c.query)&&n.hash===c.hash}function As(s,n){return(s.aliasOf||s)===(n.aliasOf||n)}function ru(s,n){if(Object.keys(s).length!==Object.keys(n).length)return!1;for(const c in s)if(!_x(s[c],n[c]))return!1;return!0}function _x(s,n){return jt(s)?wl(s,n):jt(n)?wl(n,s):s===n}function wl(s,n){return jt(n)?s.length===n.length&&s.every((c,u)=>c===n[u]):s.length===1&&s[0]===n}function Ix(s,n){if(s.startsWith("/"))return s;if(!s)return n;const c=n.split("/"),u=s.split("/");let g=c.length-1,m,w;for(m=0;m<u.length;m++)if(w=u[m],w!==".")if(w==="..")g>1&&g--;else break;return c.slice(0,g).join("/")+"/"+u.slice(m-(m===u.length?1:0)).join("/")}var ia;(function(s){s.pop="pop",s.push="push"})(ia||(ia={}));var $s;(function(s){s.back="back",s.forward="forward",s.unknown=""})($s||($s={}));function Rx(s){if(!s)if(cs){const n=document.querySelector("base");s=n&&n.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),Tx(s)}const Ox=/^[^#]+#/;function Fx(s,n){return s.replace(Ox,"#")+n}function zx(s,n){const c=document.documentElement.getBoundingClientRect(),u=s.getBoundingClientRect();return{behavior:n.behavior,left:u.left-c.left-(n.left||0),top:u.top-c.top-(n.top||0)}}const mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nx(s){let n;if("el"in s){const c=s.el,u=typeof c=="string"&&c.startsWith("#"),g=typeof c=="string"?u?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!g)return;n=zx(g,s)}else n=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function kl(s,n){return(history.state?history.state.position-n:-1)+s}const Tn=new Map;function Dx(s,n){Tn.set(s,n)}function Xx(s){const n=Tn.get(s);return Tn.delete(s),n}let Hx=()=>location.protocol+"//"+location.host;function nu(s,n){const{pathname:c,search:u,hash:g}=n,m=s.indexOf("#");if(m>-1){let k=g.includes(s.slice(m))?s.slice(m).length:1,P=g.slice(k);return P[0]!=="/"&&(P="/"+P),yl(P,"")}return yl(c,s)+u+g}function Yx(s,n,c,u){let g=[],m=[],w=null;const k=({state:z})=>{const W=nu(s,location),q=c.value,K=n.value;let ee=0;if(z){if(c.value=W,n.value=z,w&&w===q){w=null;return}ee=K?z.position-K.position:0}else u(W);g.forEach(V=>{V(c.value,q,{delta:ee,type:ia.pop,direction:ee?ee>0?$s.forward:$s.back:$s.unknown})})};function P(){w=c.value}function I(z){g.push(z);const W=()=>{const q=g.indexOf(z);q>-1&&g.splice(q,1)};return m.push(W),W}function O(){const{history:z}=window;!z.state||z.replaceState(Ze({},z.state,{scroll:mr()}),"")}function N(){for(const z of m)z();m=[],window.removeEventListener("popstate",k),window.removeEventListener("beforeunload",O)}return window.addEventListener("popstate",k),window.addEventListener("beforeunload",O),{pauseListeners:P,listen:I,destroy:N}}function Al(s,n,c,u=!1,g=!1){return{back:s,current:n,forward:c,replaced:u,position:window.history.length,scroll:g?mr():null}}function Bx(s){const{history:n,location:c}=window,u={value:nu(s,c)},g={value:n.state};g.value||m(u.value,{back:null,current:u.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function m(P,I,O){const N=s.indexOf("#"),z=N>-1?(c.host&&document.querySelector("base")?s:s.slice(N))+P:Hx()+s+P;try{n[O?"replaceState":"pushState"](I,"",z),g.value=I}catch(W){console.error(W),c[O?"replace":"assign"](z)}}function w(P,I){const O=Ze({},n.state,Al(g.value.back,P,g.value.forward,!0),I,{position:g.value.position});m(P,O,!0),u.value=P}function k(P,I){const O=Ze({},g.value,n.state,{forward:P,scroll:mr()});m(O.current,O,!0);const N=Ze({},Al(u.value,P,null),{position:O.position+1},I);m(P,N,!1),u.value=P}return{location:u,state:g,push:k,replace:w}}function Wx(s){s=Rx(s);const n=Bx(s),c=Yx(s,n.state,n.location,n.replace);function u(m,w=!0){w||c.pauseListeners(),history.go(m)}const g=Ze({location:"",base:s,go:u,createHref:Fx.bind(null,s)},n,c);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>n.state.value}),g}function Vx(s){return typeof s=="string"||s&&typeof s=="object"}function ou(s){return typeof s=="string"||typeof s=="symbol"}const pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lu=Symbol("");var Sl;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Sl||(Sl={}));function Ss(s,n){return Ze(new Error,{type:s,[lu]:!0},n)}function si(s,n){return s instanceof Error&&lu in s&&(n==null||!!(s.type&n))}const Cl="[^/]+?",jx={sensitive:!1,strict:!1,start:!0,end:!0},Gx=/[.+*?^${}()[\]/\\]/g;function Ux(s,n){const c=Ze({},jx,n),u=[];let g=c.start?"^":"";const m=[];for(const I of s){const O=I.length?[]:[90];c.strict&&!I.length&&(g+="/");for(let N=0;N<I.length;N++){const z=I[N];let W=40+(c.sensitive?.25:0);if(z.type===0)N||(g+="/"),g+=z.value.replace(Gx,"\\$&"),W+=40;else if(z.type===1){const{value:q,repeatable:K,optional:ee,regexp:V}=z;m.push({name:q,repeatable:K,optional:ee});const T=V||Cl;if(T!==Cl){W+=10;try{new RegExp(`(${T})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${q}" (${T}): `+Z.message)}}let j=K?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;N||(j=ee&&I.length<2?`(?:/${j})`:"/"+j),ee&&(j+="?"),g+=j,W+=20,ee&&(W+=-8),K&&(W+=-20),T===".*"&&(W+=-50)}O.push(W)}u.push(O)}if(c.strict&&c.end){const I=u.length-1;u[I][u[I].length-1]+=.7000000000000001}c.strict||(g+="/?"),c.end?g+="$":c.strict&&(g+="(?:/|$)");const w=new RegExp(g,c.sensitive?"":"i");function k(I){const O=I.match(w),N={};if(!O)return null;for(let z=1;z<O.length;z++){const W=O[z]||"",q=m[z-1];N[q.name]=W&&q.repeatable?W.split("/"):W}return N}function P(I){let O="",N=!1;for(const z of s){(!N||!O.endsWith("/"))&&(O+="/"),N=!1;for(const W of z)if(W.type===0)O+=W.value;else if(W.type===1){const{value:q,repeatable:K,optional:ee}=W,V=q in I?I[q]:"";if(jt(V)&&!K)throw new Error(`Provided param "${q}" is an array but it is not repeatable (* or + modifiers)`);const T=jt(V)?V.join("/"):V;if(!T)if(ee)z.length<2&&(O.endsWith("/")?O=O.slice(0,-1):N=!0);else throw new Error(`Missing required param "${q}"`);O+=T}}return O||"/"}return{re:w,score:u,keys:m,parse:k,stringify:P}}function $x(s,n){let c=0;for(;c<s.length&&c<n.length;){const u=n[c]-s[c];if(u)return u;c++}return s.length<n.length?s.length===1&&s[0]===40+40?-1:1:s.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function qx(s,n){let c=0;const u=s.score,g=n.score;for(;c<u.length&&c<g.length;){const m=$x(u[c],g[c]);if(m)return m;c++}if(Math.abs(g.length-u.length)===1){if(El(u))return 1;if(El(g))return-1}return g.length-u.length}function El(s){const n=s[s.length-1];return s.length>0&&n[n.length-1]<0}const Zx={type:0,value:""},Kx=/[a-zA-Z0-9_]/;function Jx(s){if(!s)return[[]];if(s==="/")return[[Zx]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function n(W){throw new Error(`ERR (${c})/"${I}": ${W}`)}let c=0,u=c;const g=[];let m;function w(){m&&g.push(m),m=[]}let k=0,P,I="",O="";function N(){!I||(c===0?m.push({type:0,value:I}):c===1||c===2||c===3?(m.length>1&&(P==="*"||P==="+")&&n(`A repeatable param (${I}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:I,regexp:O,repeatable:P==="*"||P==="+",optional:P==="*"||P==="?"})):n("Invalid state to consume buffer"),I="")}function z(){I+=P}for(;k<s.length;){if(P=s[k++],P==="\\"&&c!==2){u=c,c=4;continue}switch(c){case 0:P==="/"?(I&&N(),w()):P===":"?(N(),c=1):z();break;case 4:z(),c=u;break;case 1:P==="("?c=2:Kx.test(P)?z():(N(),c=0,P!=="*"&&P!=="?"&&P!=="+"&&k--);break;case 2:P===")"?O[O.length-1]=="\\"?O=O.slice(0,-1)+P:c=3:O+=P;break;case 3:N(),c=0,P!=="*"&&P!=="?"&&P!=="+"&&k--,O="";break;default:n("Unknown state");break}}return c===2&&n(`Unfinished custom RegExp for param "${I}"`),N(),w(),g}function Qx(s,n,c){const u=Ux(Jx(s.path),c),g=Ze(u,{record:s,parent:n,children:[],alias:[]});return n&&!g.record.aliasOf==!n.record.aliasOf&&n.children.push(g),g}function em(s,n){const c=[],u=new Map;n=Tl({strict:!1,end:!0,sensitive:!1},n);function g(O){return u.get(O)}function m(O,N,z){const W=!z,q=im(O);q.aliasOf=z&&z.record;const K=Tl(n,O),ee=[q];if("alias"in O){const j=typeof O.alias=="string"?[O.alias]:O.alias;for(const Z of j)ee.push(Ze({},q,{components:z?z.record.components:q.components,path:Z,aliasOf:z?z.record:q}))}let V,T;for(const j of ee){const{path:Z}=j;if(N&&Z[0]!=="/"){const H=N.record.path,ce=H[H.length-1]==="/"?"":"/";j.path=N.record.path+(Z&&ce+Z)}if(V=Qx(j,N,K),z?z.alias.push(V):(T=T||V,T!==V&&T.alias.push(V),W&&O.name&&!Pl(V)&&w(O.name)),q.children){const H=q.children;for(let ce=0;ce<H.length;ce++)m(H[ce],V,z&&z.children[ce])}z=z||V,P(V)}return T?()=>{w(T)}:Us}function w(O){if(ou(O)){const N=u.get(O);N&&(u.delete(O),c.splice(c.indexOf(N),1),N.children.forEach(w),N.alias.forEach(w))}else{const N=c.indexOf(O);N>-1&&(c.splice(N,1),O.record.name&&u.delete(O.record.name),O.children.forEach(w),O.alias.forEach(w))}}function k(){return c}function P(O){let N=0;for(;N<c.length&&qx(O,c[N])>=0&&(O.record.path!==c[N].record.path||!cu(O,c[N]));)N++;c.splice(N,0,O),O.record.name&&!Pl(O)&&u.set(O.record.name,O)}function I(O,N){let z,W={},q,K;if("name"in O&&O.name){if(z=u.get(O.name),!z)throw Ss(1,{location:O});K=z.record.name,W=Ze(tm(N.params,z.keys.filter(T=>!T.optional).map(T=>T.name)),O.params),q=z.stringify(W)}else if("path"in O)q=O.path,z=c.find(T=>T.re.test(q)),z&&(W=z.parse(q),K=z.record.name);else{if(z=N.name?u.get(N.name):c.find(T=>T.re.test(N.path)),!z)throw Ss(1,{location:O,currentLocation:N});K=z.record.name,W=Ze({},N.params,O.params),q=z.stringify(W)}const ee=[];let V=z;for(;V;)ee.unshift(V.record),V=V.parent;return{name:K,path:q,params:W,matched:ee,meta:am(ee)}}return s.forEach(O=>m(O)),{addRoute:m,resolve:I,removeRoute:w,getRoutes:k,getRecordMatcher:g}}function tm(s,n){const c={};for(const u of n)u in s&&(c[u]=s[u]);return c}function im(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:sm(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function sm(s){const n={},c=s.props||!1;if("component"in s)n.default=c;else for(const u in s.components)n[u]=typeof c=="boolean"?c:c[u];return n}function Pl(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function am(s){return s.reduce((n,c)=>Ze(n,c.meta),{})}function Tl(s,n){const c={};for(const u in s)c[u]=u in n?n[u]:s[u];return c}function cu(s,n){return n.children.some(c=>c===s||cu(s,c))}const hu=/#/g,rm=/&/g,nm=/\//g,om=/=/g,lm=/\?/g,uu=/\+/g,cm=/%5B/g,hm=/%5D/g,du=/%5E/g,um=/%60/g,fu=/%7B/g,dm=/%7C/g,gu=/%7D/g,fm=/%20/g;function lo(s){return encodeURI(""+s).replace(dm,"|").replace(cm,"[").replace(hm,"]")}function gm(s){return lo(s).replace(fu,"{").replace(gu,"}").replace(du,"^")}function Ln(s){return lo(s).replace(uu,"%2B").replace(fm,"+").replace(hu,"%23").replace(rm,"%26").replace(um,"`").replace(fu,"{").replace(gu,"}").replace(du,"^")}function pm(s){return Ln(s).replace(om,"%3D")}function xm(s){return lo(s).replace(hu,"%23").replace(lm,"%3F")}function mm(s){return s==null?"":xm(s).replace(nm,"%2F")}function $a(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function bm(s){const n={};if(s===""||s==="?")return n;const u=(s[0]==="?"?s.slice(1):s).split("&");for(let g=0;g<u.length;++g){const m=u[g].replace(uu," "),w=m.indexOf("="),k=$a(w<0?m:m.slice(0,w)),P=w<0?null:$a(m.slice(w+1));if(k in n){let I=n[k];jt(I)||(I=n[k]=[I]),I.push(P)}else n[k]=P}return n}function Ll(s){let n="";for(let c in s){const u=s[c];if(c=pm(c),u==null){u!==void 0&&(n+=(n.length?"&":"")+c);continue}(jt(u)?u.map(m=>m&&Ln(m)):[u&&Ln(u)]).forEach(m=>{m!==void 0&&(n+=(n.length?"&":"")+c,m!=null&&(n+="="+m))})}return n}function vm(s){const n={};for(const c in s){const u=s[c];u!==void 0&&(n[c]=jt(u)?u.map(g=>g==null?null:""+g):u==null?u:""+u)}return n}const ym=Symbol(""),Ml=Symbol(""),br=Symbol(""),co=Symbol(""),Mn=Symbol("");function Is(){let s=[];function n(u){return s.push(u),()=>{const g=s.indexOf(u);g>-1&&s.splice(g,1)}}function c(){s=[]}return{add:n,list:()=>s,reset:c}}function vi(s,n,c,u,g){const m=u&&(u.enterCallbacks[g]=u.enterCallbacks[g]||[]);return()=>new Promise((w,k)=>{const P=N=>{N===!1?k(Ss(4,{from:c,to:n})):N instanceof Error?k(N):Vx(N)?k(Ss(2,{from:n,to:N})):(m&&u.enterCallbacks[g]===m&&typeof N=="function"&&m.push(N),w())},I=s.call(u&&u.instances[g],n,c,P);let O=Promise.resolve(I);s.length<3&&(O=O.then(P)),O.catch(N=>k(N))})}function Xr(s,n,c,u){const g=[];for(const m of s)for(const w in m.components){let k=m.components[w];if(!(n!=="beforeRouteEnter"&&!m.instances[w]))if(wm(k)){const I=(k.__vccOpts||k)[n];I&&g.push(vi(I,c,u,m,w))}else{let P=k();g.push(()=>P.then(I=>{if(!I)return Promise.reject(new Error(`Couldn't resolve component "${w}" at "${m.path}"`));const O=Ex(I)?I.default:I;m.components[w]=O;const z=(O.__vccOpts||O)[n];return z&&vi(z,c,u,m,w)()}))}}return g}function wm(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function _l(s){const n=Rt(br),c=Rt(co),u=We(()=>n.resolve(Ue(s.to))),g=We(()=>{const{matched:P}=u.value,{length:I}=P,O=P[I-1],N=c.matched;if(!O||!N.length)return-1;const z=N.findIndex(As.bind(null,O));if(z>-1)return z;const W=Il(P[I-2]);return I>1&&Il(O)===W&&N[N.length-1].path!==W?N.findIndex(As.bind(null,P[I-2])):z}),m=We(()=>g.value>-1&&Cm(c.params,u.value.params)),w=We(()=>g.value>-1&&g.value===c.matched.length-1&&ru(c.params,u.value.params));function k(P={}){return Sm(P)?n[Ue(s.replace)?"replace":"push"](Ue(s.to)).catch(Us):Promise.resolve()}return{route:u,href:We(()=>u.value.href),isActive:m,isExactActive:w,navigate:k}}const km=li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_l,setup(s,{slots:n}){const c=Ii(_l(s)),{options:u}=Rt(br),g=We(()=>({[Rl(s.activeClass,u.linkActiveClass,"router-link-active")]:c.isActive,[Rl(s.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const m=n.default&&n.default(c);return s.custom?m:gr("a",{"aria-current":c.isExactActive?s.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:g.value},m)}}}),Am=km;function Sm(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const n=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return s.preventDefault&&s.preventDefault(),!0}}function Cm(s,n){for(const c in n){const u=n[c],g=s[c];if(typeof u=="string"){if(u!==g)return!1}else if(!jt(g)||g.length!==u.length||u.some((m,w)=>m!==g[w]))return!1}return!0}function Il(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const Rl=(s,n,c)=>s!=null?s:n!=null?n:c,Em=li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:n,slots:c}){const u=Rt(Mn),g=We(()=>s.route||u.value),m=Rt(Ml,0),w=We(()=>{let I=Ue(m);const{matched:O}=g.value;let N;for(;(N=O[I])&&!N.components;)I++;return I}),k=We(()=>g.value.matched[w.value]);Ws(Ml,We(()=>w.value+1)),Ws(ym,k),Ws(Mn,g);const P=Ct();return Ai(()=>[P.value,k.value,s.name],([I,O,N],[z,W,q])=>{O&&(O.instances[N]=I,W&&W!==O&&I&&I===z&&(O.leaveGuards.size||(O.leaveGuards=W.leaveGuards),O.updateGuards.size||(O.updateGuards=W.updateGuards))),I&&O&&(!W||!As(O,W)||!z)&&(O.enterCallbacks[N]||[]).forEach(K=>K(I))},{flush:"post"}),()=>{const I=g.value,O=s.name,N=k.value,z=N&&N.components[O];if(!z)return Ol(c.default,{Component:z,route:I});const W=N.props[O],q=W?W===!0?I.params:typeof W=="function"?W(I):W:null,ee=gr(z,Ze({},q,n,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(N.instances[O]=null)},ref:P}));return Ol(c.default,{Component:ee,route:I})||ee}}});function Ol(s,n){if(!s)return null;const c=s(n);return c.length===1?c[0]:c}const Pm=Em;function Tm(s){const n=em(s.routes,s),c=s.parseQuery||bm,u=s.stringifyQuery||Ll,g=s.history,m=Is(),w=Is(),k=Is(),P=Sc(pi);let I=pi;cs&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=Nr.bind(null,U=>""+U),N=Nr.bind(null,mm),z=Nr.bind(null,$a);function W(U,ue){let de,be;return ou(U)?(de=n.getRecordMatcher(U),be=ue):be=U,n.addRoute(be,de)}function q(U){const ue=n.getRecordMatcher(U);ue&&n.removeRoute(ue)}function K(){return n.getRoutes().map(U=>U.record)}function ee(U){return!!n.getRecordMatcher(U)}function V(U,ue){if(ue=Ze({},ue||P.value),typeof U=="string"){const Ee=Dr(c,U,ue.path),D=n.resolve({path:Ee.path},ue),B=g.createHref(Ee.fullPath);return Ze(Ee,D,{params:z(D.params),hash:$a(Ee.hash),redirectedFrom:void 0,href:B})}let de;if("path"in U)de=Ze({},U,{path:Dr(c,U.path,ue.path).path});else{const Ee=Ze({},U.params);for(const D in Ee)Ee[D]==null&&delete Ee[D];de=Ze({},U,{params:N(U.params)}),ue.params=N(ue.params)}const be=n.resolve(de,ue),Oe=U.hash||"";be.params=O(z(be.params));const Re=Lx(u,Ze({},U,{hash:gm(Oe),path:be.path})),Pe=g.createHref(Re);return Ze({fullPath:Re,hash:Oe,query:u===Ll?vm(U.query):U.query||{}},be,{redirectedFrom:void 0,href:Pe})}function T(U){return typeof U=="string"?Dr(c,U,P.value.path):Ze({},U)}function j(U,ue){if(I!==U)return Ss(8,{from:ue,to:U})}function Z(U){return J(U)}function H(U){return Z(Ze(T(U),{replace:!0}))}function ce(U){const ue=U.matched[U.matched.length-1];if(ue&&ue.redirect){const{redirect:de}=ue;let be=typeof de=="function"?de(U):de;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=T(be):{path:be},be.params={}),Ze({query:U.query,hash:U.hash,params:"path"in be?{}:U.params},be)}}function J(U,ue){const de=I=V(U),be=P.value,Oe=U.state,Re=U.force,Pe=U.replace===!0,Ee=ce(de);if(Ee)return J(Ze(T(Ee),{state:Oe,force:Re,replace:Pe}),ue||de);const D=de;D.redirectedFrom=ue;let B;return!Re&&Mx(u,be,de)&&(B=Ss(16,{to:D,from:be}),Gt(be,be,!0,!1)),(B?Promise.resolve(B):ne(D,be)).catch($=>si($)?si($,2)?$:$e($):Te($,D,be)).then($=>{if($){if(si($,2))return J(Ze({replace:Pe},T($.to),{state:Oe,force:Re}),ue||D)}else $=le(D,be,!0,Pe,Oe);return Q(D,be,$),$})}function ie(U,ue){const de=j(U,ue);return de?Promise.reject(de):Promise.resolve()}function ne(U,ue){let de;const[be,Oe,Re]=Lm(U,ue);de=Xr(be.reverse(),"beforeRouteLeave",U,ue);for(const Ee of be)Ee.leaveGuards.forEach(D=>{de.push(vi(D,U,ue))});const Pe=ie.bind(null,U,ue);return de.push(Pe),ss(de).then(()=>{de=[];for(const Ee of m.list())de.push(vi(Ee,U,ue));return de.push(Pe),ss(de)}).then(()=>{de=Xr(Oe,"beforeRouteUpdate",U,ue);for(const Ee of Oe)Ee.updateGuards.forEach(D=>{de.push(vi(D,U,ue))});return de.push(Pe),ss(de)}).then(()=>{de=[];for(const Ee of U.matched)if(Ee.beforeEnter&&!ue.matched.includes(Ee))if(jt(Ee.beforeEnter))for(const D of Ee.beforeEnter)de.push(vi(D,U,ue));else de.push(vi(Ee.beforeEnter,U,ue));return de.push(Pe),ss(de)}).then(()=>(U.matched.forEach(Ee=>Ee.enterCallbacks={}),de=Xr(Re,"beforeRouteEnter",U,ue),de.push(Pe),ss(de))).then(()=>{de=[];for(const Ee of w.list())de.push(vi(Ee,U,ue));return de.push(Pe),ss(de)}).catch(Ee=>si(Ee,8)?Ee:Promise.reject(Ee))}function Q(U,ue,de){for(const be of k.list())be(U,ue,de)}function le(U,ue,de,be,Oe){const Re=j(U,ue);if(Re)return Re;const Pe=ue===pi,Ee=cs?history.state:{};de&&(be||Pe?g.replace(U.fullPath,Ze({scroll:Pe&&Ee&&Ee.scroll},Oe)):g.push(U.fullPath,Oe)),P.value=U,Gt(U,ue,de,Pe),$e()}let se;function ye(){se||(se=g.listen((U,ue,de)=>{if(!ht.listening)return;const be=V(U),Oe=ce(be);if(Oe){J(Ze(Oe,{replace:!0}),be).catch(Us);return}I=be;const Re=P.value;cs&&Dx(kl(Re.fullPath,de.delta),mr()),ne(be,Re).catch(Pe=>si(Pe,12)?Pe:si(Pe,2)?(J(Pe.to,be).then(Ee=>{si(Ee,20)&&!de.delta&&de.type===ia.pop&&g.go(-1,!1)}).catch(Us),Promise.reject()):(de.delta&&g.go(-de.delta,!1),Te(Pe,be,Re))).then(Pe=>{Pe=Pe||le(be,Re,!1),Pe&&(de.delta&&!si(Pe,8)?g.go(-de.delta,!1):de.type===ia.pop&&si(Pe,20)&&g.go(-1,!1)),Q(be,Re,Pe)}).catch(Us)}))}let ge=Is(),Ve=Is(),Le;function Te(U,ue,de){$e(U);const be=Ve.list();return be.length?be.forEach(Oe=>Oe(U,ue,de)):console.error(U),Promise.reject(U)}function Ye(){return Le&&P.value!==pi?Promise.resolve():new Promise((U,ue)=>{ge.add([U,ue])})}function $e(U){return Le||(Le=!U,ye(),ge.list().forEach(([ue,de])=>U?de(U):ue()),ge.reset()),U}function Gt(U,ue,de,be){const{scrollBehavior:Oe}=s;if(!cs||!Oe)return Promise.resolve();const Re=!de&&Xx(kl(U.fullPath,0))||(be||!de)&&history.state&&history.state.scroll||null;return bs().then(()=>Oe(U,ue,Re)).then(Pe=>Pe&&Nx(Pe)).catch(Pe=>Te(Pe,U,ue))}const nt=U=>g.go(U);let je;const ot=new Set,ht={currentRoute:P,listening:!0,addRoute:W,removeRoute:q,hasRoute:ee,getRoutes:K,resolve:V,options:s,push:Z,replace:H,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:m.add,beforeResolve:w.add,afterEach:k.add,onError:Ve.add,isReady:Ye,install(U){const ue=this;U.component("RouterLink",Am),U.component("RouterView",Pm),U.config.globalProperties.$router=ue,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(P)}),cs&&!je&&P.value===pi&&(je=!0,Z(g.location).catch(Oe=>{}));const de={};for(const Oe in pi)de[Oe]=We(()=>P.value[Oe]);U.provide(br,ue),U.provide(co,Ii(de)),U.provide(Mn,P);const be=U.unmount;ot.add(U),U.unmount=function(){ot.delete(U),ot.size<1&&(I=pi,se&&se(),se=null,P.value=pi,je=!1,Le=!1),be()}}};return ht}function ss(s){return s.reduce((n,c)=>n.then(()=>c()),Promise.resolve())}function Lm(s,n){const c=[],u=[],g=[],m=Math.max(n.matched.length,s.matched.length);for(let w=0;w<m;w++){const k=n.matched[w];k&&(s.matched.find(I=>As(I,k))?u.push(k):c.push(k));const P=s.matched[w];P&&(n.matched.find(I=>As(I,P))||g.push(P))}return[c,u,g]}function Mm(){return Rt(br)}function pu(){return Rt(co)}const _m=`a
abandon
ability
able
abortion
about
above
abroad
absence
absolute
absolutely
absorb
abuse
academic
accept
access
accident
accompany
accomplish
according
account
accurate
accuse
achieve
achievement
acid
acknowledge
acquire
across
act
action
active
activist
activity
actor
actress
actual
actually
ad
adapt
add
addition
additional
address
adequate
adjust
adjustment
administration
administrator
admire
admission
admit
adolescent
adopt
adult
advance
advanced
advantage
adventure
advertising
advice
advise
adviser
advocate
affair
affect
afford
afraid
African
African-American
after
afternoon
again
against
age
agency
agenda
agent
aggressive
ago
agree
agreement
agricultural
ah
ahead
aid
aide
AIDS
aim
air
aircraft
airline
airport
album
alcohol
alive
all
alliance
allow
ally
almost
alone
along
already
also
alter
alternative
although
always
AM
amazing
American
among
amount
analysis
analyst
analyze
ancient
and
anger
angle
angry
animal
anniversary
announce
annual
another
answer
anticipate
anxiety
any
anybody
anymore
anyone
anything
anyway
anywhere
apart
apartment
apparent
apparently
appeal
appear
appearance
apple
application
apply
appoint
appointment
appreciate
approach
appropriate
approval
approve
approximately
Arab
architect
area
argue
argument
arise
arm
armed
army
around
arrange
arrangement
arrest
arrival
arrive
art
article
artist
artistic
as
Asian
aside
ask
asleep
aspect
assault
assert
assess
assessment
asset
assign
assignment
assist
assistance
assistant
associate
association
assume
assumption
assure
at
athlete
athletic
atmosphere
attach
attack
attempt
attend
attention
attitude
attorney
attract
attractive
attribute
audience
author
authority
auto
available
average
avoid
award
aware
awareness
away
awful
baby
back
background
bad
badly
bag
bake
balance
ball
ban
band
bank
bar
barely
barrel
barrier
base
baseball
basic
basically
basis
basket
basketball
bathroom
battery
battle
be
beach
bean
bear
beat
beautiful
beauty
because
become
bed
bedroom
beer
before
begin
beginning
behavior
behind
being
belief
believe
bell
belong
below
belt
bench
bend
beneath
benefit
beside
besides
best
bet
better
between
beyond
Bible
big
bike
bill
billion
bind
biological
bird
birth
birthday
bit
bite
black
blade
blame
blanket
blind
block
blood
blow
blue
board
boat
body
bomb
bombing
bond
bone
book
boom
boot
border
born
borrow
boss
both
bother
bottle
bottom
boundary
bowl
box
boy
boyfriend
brain
branch
brand
bread
break
breakfast
breast
breath
breathe
brick
bridge
brief
briefly
bright
brilliant
bring
British
broad
broken
brother
brown
brush
buck
budget
build
building
bullet
bunch
burden
burn
bury
bus
business
busy
but
butter
button
buy
buyer
by
cabin
cabinet
cable
cake
calculate
call
camera
camp
campaign
campus
can
Canadian
cancer
candidate
cap
capability
capable
capacity
capital
captain
capture
car
carbon
card
care
career
careful
carefully
carrier
carry
case
cash
cast
cat
catch
category
Catholic
cause
ceiling
celebrate
celebration
celebrity
cell
center
central
century
CEO
ceremony
certain
certainly
chain
chair
chairman
challenge
chamber
champion
championship
chance
change
changing
channel
chapter
character
characteristic
characterize
charge
charity
chart
chase
cheap
check
cheek
cheese
chef
chemical
chest
chicken
chief
child
childhood
Chinese
chip
chocolate
choice
cholesterol
choose
Christian
Christmas
church
cigarette
circle
circumstance
cite
citizen
city
civil
civilian
claim
class
classic
classroom
clean
clear
clearly
client
climate
climb
clinic
clinical
clock
close
closely
closer
clothes
clothing
cloud
club
clue
cluster
coach
coal
coalition
coast
coat
code
coffee
cognitive
cold
collapse
colleague
collect
collection
collective
college
colonial
color
column
combination
combine
come
comedy
comfort
comfortable
command
commander
comment
commercial
commission
commit
commitment
committee
common
communicate
communication
community
company
compare
comparison
compete
competition
competitive
competitor
complain
complaint
complete
completely
complex
complicated
component
compose
composition
comprehensive
computer
concentrate
concentration
concept
concern
concerned
concert
conclude
conclusion
concrete
condition
conduct
conference
confidence
confident
confirm
conflict
confront
confusion
Congress
congressional
connect
connection
consciousness
consensus
consequence
conservative
consider
considerable
consideration
consist
consistent
constant
constantly
constitute
constitutional
construct
construction
consultant
consume
consumer
consumption
contact
contain
container
contemporary
content
contest
context
continue
continued
contract
contrast
contribute
contribution
control
controversial
controversy
convention
conventional
conversation
convert
conviction
convince
cook
cookie
cooking
cool
cooperation
cop
cope
copy
core
corn
corner
corporate
corporation
correct
correspondent
cost
cotton
couch
could
council
counselor
count
counter
country
county
couple
courage
course
court
cousin
cover
coverage
cow
crack
craft
crash
crazy
cream
create
creation
creative
creature
credit
crew
crime
criminal
crisis
criteria
critic
critical
criticism
criticize
crop
cross
crowd
crucial
cry
cultural
culture
cup
curious
current
currently
curriculum
custom
customer
cut
cycle
dad
daily
damage
dance
danger
dangerous
dare
dark
darkness
data
date
daughter
day
dead
deal
dealer
dear
death
debate
debt
decade
decide
decision
deck
declare
decline
decrease
deep
deeply
deer
defeat
defend
defendant
defense
defensive
deficit
define
definitely
definition
degree
delay
deliver
delivery
demand
democracy
Democrat
democratic
demonstrate
demonstration
deny
department
depend
dependent
depending
depict
depression
depth
deputy
derive
describe
description
desert
deserve
design
designer
desire
desk
desperate
despite
destroy
destruction
detail
detailed
detect
determine
develop
developing
development
device
devote
dialogue
die
diet
differ
difference
different
differently
difficult
difficulty
dig
digital
dimension
dining
dinner
direct
direction
directly
director
dirt
dirty
disability
disagree
disappear
disaster
discipline
discourse
discover
discovery
discrimination
discuss
discussion
disease
dish
dismiss
disorder
display
dispute
distance
distant
distinct
distinction
distinguish
distribute
distribution
district
diverse
diversity
divide
division
divorce
DNA
do
doctor
document
dog
domestic
dominant
dominate
door
double
doubt
down
downtown
dozen
draft
drag
drama
dramatic
dramatically
draw
drawing
dream
dress
drink
drive
driver
drop
drug
dry
due
during
dust
duty
each
eager
ear
early
earn
earnings
earth
ease
easily
east
eastern
easy
eat
economic
economics
economist
economy
edge
edition
editor
educate
education
educational
educator
effect
effective
effectively
efficiency
efficient
effort
egg
eight
either
elderly
elect
election
electric
electricity
electronic
element
elementary
eliminate
elite
else
elsewhere
e-mail
embrace
emerge
emergency
emission
emotion
emotional
emphasis
emphasize
employ
employee
employer
employment
empty
enable
encounter
encourage
end
enemy
energy
enforcement
engage
engine
engineer
engineering
English
enhance
enjoy
enormous
enough
ensure
enter
enterprise
entertainment
entire
entirely
entrance
entry
environment
environmental
episode
equal
equally
equipment
era
error
escape
especially
essay
essential
essentially
establish
establishment
estate
estimate
etc
ethics
ethnic
European
evaluate
evaluation
even
evening
event
eventually
ever
every
everybody
everyday
everyone
everything
everywhere
evidence
evolution
evolve
exact
exactly
examination
examine
example
exceed
excellent
except
exception
exchange
exciting
executive
exercise
exhibit
exhibition
exist
existence
existing
expand
expansion
expect
expectation
expense
expensive
experience
experiment
expert
explain
explanation
explode
explore
explosion
expose
exposure
express
expression
extend
extension
extensive
extent
external
extra
extraordinary
extreme
extremely
eye
fabric
face
facility
fact
factor
factory
faculty
fade
fail
failure
fair
fairly
faith
fall
false
familiar
family
famous
fan
fantasy
far
farm
farmer
fashion
fast
fat
fate
father
fault
favor
favorite
fear
feature
federal
fee
feed
feel
feeling
fellow
female
fence
few
fewer
fiber
fiction
field
fifteen
fifth
fifty
fight
fighter
fighting
figure
file
fill
film
final
finally
finance
financial
find
finding
fine
finger
finish
fire
firm
first
fish
fishing
fit
fitness
five
fix
flag
flame
flat
flavor
flee
flesh
flight
float
floor
flow
flower
fly
focus
folk
follow
following
food
foot
football
for
force
foreign
forest
forever
forget
form
formal
formation
former
formula
forth
fortune
forward
found
foundation
founder
four
fourth
frame
framework
free
freedom
freeze
French
frequency
frequent
frequently
fresh
friend
friendly
friendship
from
front
fruit
frustration
fuel
full
fully
fun
function
fund
fundamental
funding
funeral
funny
furniture
furthermore
future
gain
galaxy
gallery
game
gang
gap
garage
garden
garlic
gas
gate
gather
gay
gaze
gear
gender
gene
general
generally
generate
generation
genetic
gentleman
gently
German
gesture
get
ghost
giant
gift
gifted
girl
girlfriend
give
given
glad
glance
glass
global
glove
go
goal
God
gold
golden
golf
good
government
governor
grab
grade
gradually
graduate
grain
grand
grandfather
grandmother
grant
grass
grave
gray
great
greatest
green
grocery
ground
group
grow
growing
growth
guarantee
guard
guess
guest
guide
guideline
guilty
gun
guy
habit
habitat
hair
half
hall
hand
handful
handle
hang
happen
happy
hard
hardly
hat
hate
have
he
head
headline
headquarters
health
healthy
hear
hearing
heart
heat
heaven
heavily
heavy
heel
height
helicopter
hell
hello
help
helpful
her
here
heritage
hero
herself
hey
hi
hide
high
highlight
highly
highway
hill
him
himself
hip
hire
his
historian
historic
historical
history
hit
hold
hole
holiday
holy
home
homeless
honest
honey
honor
hope
horizon
horror
horse
hospital
host
hot
hotel
hour
house
household
housing
how
however
huge
human
humor
hundred
hungry
hunter
hunting
hurt
husband
hypothesis
I
ice
idea
ideal
identification
identify
identity
ie
if
ignore
ill
illegal
illness
illustrate
image
imagination
imagine
immediate
immediately
immigrant
immigration
impact
implement
implication
imply
importance
important
impose
impossible
impress
impression
impressive
improve
improvement
in
incentive
incident
include
including
income
incorporate
increase
increased
increasing
increasingly
incredible
indeed
independence
independent
index
Indian
indicate
indication
individual
industrial
industry
infant
infection
inflation
influence
inform
information
ingredient
initial
initially
initiative
injury
inner
innocent
inquiry
inside
insight
insist
inspire
install
instance
instead
institution
institutional
instruction
instructor
instrument
insurance
intellectual
intelligence
intend
intense
intensity
intention
interaction
interest
interested
interesting
internal
international
Internet
interpret
interpretation
intervention
interview
into
introduce
introduction
invasion
invest
investigate
investigation
investigator
investment
investor
invite
involve
involved
involvement
Iraqi
Irish
iron
Islamic
island
Israeli
issue
it
Italian
item
its
itself
jacket
jail
Japanese
jet
Jew
Jewish
job
join
joint
joke
journal
journalist
journey
joy
judge
judgment
juice
jump
junior
jury
just
justice
justify
keep
key
kick
kid
kill
killer
killing
kind
king
kiss
kitchen
knee
knife
knock
know
knowledge
lab
label
labor
laboratory
lack
lady
lake
land
landscape
language
lap
large
largely
last
late
later
Latin
latter
laugh
launch
law
lawn
lawsuit
lawyer
lay
layer
lead
leader
leadership
leading
leaf
league
lean
learn
learning
least
leather
leave
left
leg
legacy
legal
legend
legislation
legitimate
lemon
length
less
lesson
let
letter
level
liberal
library
license
lie
life
lifestyle
lifetime
lift
light
like
likely
limit
limitation
limited
line
link
lip
list
listen
literally
literary
literature
little
live
living
load
loan
local
locate
location
lock
long
long-term
look
loose
lose
loss
lost
lot
lots
loud
love
lovely
lover
low
lower
luck
lucky
lunch
lung
machine
mad
magazine
mail
main
mainly
maintain
maintenance
major
majority
make
maker
makeup
male
mall
man
manage
management
manager
manner
manufacturer
manufacturing
many
map
margin
mark
market
marketing
marriage
married
marry
mask
mass
massive
master
match
material
math
matter
may
maybe
mayor
me
meal
mean
meaning
meanwhile
measure
measurement
meat
mechanism
media
medical
medication
medicine
medium
meet
meeting
member
membership
memory
mental
mention
menu
mere
merely
mess
message
metal
meter
method
Mexican
middle
might
military
milk
million
mind
mine
minister
minor
minority
minute
miracle
mirror
miss
missile
mission
mistake
mix
mixture
mm-hmm
mode
model
moderate
modern
modest
mom
moment
money
monitor
month
mood
moon
moral
more
moreover
morning
mortgage
most
mostly
mother
motion
motivation
motor
mount
mountain
mouse
mouth
move
movement
movie
Mr
Mrs
Ms
much
multiple
murder
muscle
museum
music
musical
musician
Muslim
must
mutual
my
myself
mystery
myth
naked
name
narrative
narrow
nation
national
native
natural
naturally
nature
near
nearby
nearly
necessarily
necessary
neck
need
negative
negotiate
negotiation
neighbor
neighborhood
neither
nerve
nervous
net
network
never
nevertheless
new
newly
news
newspaper
next
nice
night
nine
no
nobody
nod
noise
nomination
none
nonetheless
nor
normal
normally
north
northern
nose
not
note
nothing
notice
notion
novel
now
nowhere
n't
nuclear
number
numerous
nurse
nut
object
objective
obligation
observation
observe
observer
obtain
obvious
obviously
occasion
occasionally
occupation
occupy
occur
ocean
odd
odds
of
off
offense
offensive
offer
office
officer
official
often
oh
oil
ok
okay
old
Olympic
on
once
one
ongoing
onion
online
only
onto
open
opening
operate
operating
operation
operator
opinion
opponent
opportunity
oppose
opposite
opposition
option
or
orange
order
ordinary
organic
organization
organize
orientation
origin
original
originally
other
others
otherwise
ought
our
ourselves
out
outcome
outside
oven
over
overall
overcome
overlook
owe
own
owner
pace
pack
package
page
pain
painful
paint
painter
painting
pair
pale
Palestinian
palm
pan
panel
pant
paper
parent
park
parking
part
participant
participate
participation
particular
particularly
partly
partner
partnership
party
pass
passage
passenger
passion
past
patch
path
patient
pattern
pause
pay
payment
PC
peace
peak
peer
penalty
people
pepper
per
perceive
percentage
perception
perfect
perfectly
perform
performance
perhaps
period
permanent
permission
permit
person
personal
personality
personally
personnel
perspective
persuade
pet
phase
phenomenon
philosophy
phone
photo
photograph
photographer
phrase
physical
physically
physician
piano
pick
picture
pie
piece
pile
pilot
pine
pink
pipe
pitch
place
plan
plane
planet
planning
plant
plastic
plate
platform
play
player
please
pleasure
plenty
plot
plus
PM
pocket
poem
poet
poetry
point
pole
police
policy
political
politically
politician
politics
poll
pollution
pool
poor
pop
popular
population
porch
port
portion
portrait
portray
pose
position
positive
possess
possibility
possible
possibly
post
pot
potato
potential
potentially
pound
pour
poverty
powder
power
powerful
practical
practice
pray
prayer
precisely
predict
prefer
preference
pregnancy
pregnant
preparation
prepare
prescription
presence
present
presentation
preserve
president
presidential
press
pressure
pretend
pretty
prevent
previous
previously
price
pride
priest
primarily
primary
prime
principal
principle
print
prior
priority
prison
prisoner
privacy
private
probably
problem
procedure
proceed
process
produce
producer
product
production
profession
professional
professor
profile
profit
program
progress
project
prominent
promise
promote
prompt
proof
proper
properly
property
proportion
proposal
propose
proposed
prosecutor
prospect
protect
protection
protein
protest
proud
prove
provide
provider
province
provision
psychological
psychologist
psychology
public
publication
publicly
publish
publisher
pull
punishment
purchase
pure
purpose
pursue
push
put
qualify
quality
quarter
quarterback
question
quick
quickly
quiet
quietly
quit
quite
quote
race
racial
radical
radio
rail
rain
raise
range
rank
rapid
rapidly
rare
rarely
rate
rather
rating
ratio
raw
reach
react
reaction
read
reader
reading
ready
real
reality
realize
really
reason
reasonable
recall
receive
recent
recently
recipe
recognition
recognize
recommend
recommendation
record
recording
recover
recovery
recruit
red
reduce
reduction
refer
reference
reflect
reflection
reform
refugee
refuse
regard
regarding
regardless
regime
region
regional
register
regular
regularly
regulate
regulation
reinforce
reject
relate
relation
relationship
relative
relatively
relax
release
relevant
relief
religion
religious
rely
remain
remaining
remarkable
remember
remind
remote
remove
repeat
repeatedly
replace
reply
report
reporter
represent
representation
representative
Republican
reputation
request
require
requirement
research
researcher
resemble
reservation
resident
resist
resistance
resolution
resolve
resort
resource
respect
respond
respondent
response
responsibility
responsible
rest
restaurant
restore
restriction
result
retain
retire
retirement
return
reveal
revenue
review
revolution
rhythm
rice
rich
rid
ride
rifle
right
ring
rise
risk
river
road
rock
role
roll
romantic
roof
room
root
rope
rose
rough
roughly
round
route
routine
row
rub
rule
run
running
rural
rush
Russian
sacred
sad
safe
safety
sake
salad
salary
sale
sales
salt
same
sample
sanction
sand
satellite
satisfaction
satisfy
sauce
save
saving
say
scale
scandal
scared
scenario
scene
schedule
scheme
scholar
scholarship
school
science
scientific
scientist
scope
score
scream
screen
script
sea
search
season
seat
second
secret
secretary
section
sector
secure
security
see
seed
seek
seem
segment
seize
select
selection
self
sell
Senate
senator
send
senior
sense
sensitive
sentence
separate
sequence
series
serious
seriously
serve
service
session
set
setting
settle
settlement
seven
several
severe
sex
sexual
shade
shadow
shake
shall
shape
share
sharp
she
sheet
shelf
shell
shelter
shift
shine
ship
shirt
shit
shock
shoe
shoot
shooting
shop
shopping
shore
short
shortly
shot
should
shoulder
shout
show
shower
shrug
shut
sick
side
sigh
sight
sign
signal
significance
significant
significantly
silence
silent
silver
similar
similarly
simple
simply
sin
since
sing
singer
single
sink
sir
sister
sit
site
situation
six
size
ski
skill
skin
sky
slave
sleep
slice
slide
slight
slightly
slip
slow
slowly
small
smart
smell
smile
smoke
smooth
snap
snow
so
so-called
soccer
social
society
soft
software
soil
solar
soldier
solid
solution
solve
some
somebody
somehow
someone
something
sometimes
somewhat
somewhere
son
song
soon
sophisticated
sorry
sort
soul
sound
soup
source
south
southern
Soviet
space
Spanish
speak
speaker
special
specialist
species
specific
specifically
speech
speed
spend
spending
spin
spirit
spiritual
split
spokesman
sport
spot
spread
spring
square
squeeze
stability
stable
staff
stage
stair
stake
stand
standard
standing
star
stare
start
state
statement
station
statistics
status
stay
steady
steal
steel
step
stick
still
stir
stock
stomach
stone
stop
storage
store
storm
story
straight
strange
stranger
strategic
strategy
stream
street
strength
strengthen
stress
stretch
strike
string
strip
stroke
strong
strongly
structure
struggle
student
studio
study
stuff
stupid
style
subject
submit
subsequent
substance
substantial
succeed
success
successful
successfully
such
sudden
suddenly
sue
suffer
sufficient
sugar
suggest
suggestion
suicide
suit
summer
summit
sun
super
supply
support
supporter
suppose
supposed
Supreme
sure
surely
surface
surgery
surprise
surprised
surprising
surprisingly
surround
survey
survival
survive
survivor
suspect
sustain
swear
sweep
sweet
swim
swing
switch
symbol
symptom
system
table
tablespoon
tactic
tail
take
tale
talent
talk
tall
tank
tap
tape
target
task
taste
tax
taxpayer
tea
teach
teacher
teaching
team
tear
teaspoon
technical
technique
technology
teen
teenager
telephone
telescope
television
tell
temperature
temporary
ten
tend
tendency
tennis
tension
tent
term
terms
terrible
territory
terror
terrorism
terrorist
test
testify
testimony
testing
text
than
thank
thanks
that
the
theater
their
them
theme
themselves
then
theory
therapy
there
therefore
these
they
thick
thin
thing
think
thinking
third
thirty
this
those
though
thought
thousand
threat
threaten
three
throat
through
throughout
throw
thus
ticket
tie
tight
time
tiny
tip
tire
tired
tissue
title
to
tobacco
today
toe
together
tomato
tomorrow
tone
tongue
tonight
too
tool
tooth
top
topic
toss
total
totally
touch
tough
tour
tourist
tournament
toward
towards
tower
town
toy
trace
track
trade
tradition
traditional
traffic
tragedy
trail
train
training
transfer
transform
transformation
transition
translate
transportation
travel
treat
treatment
treaty
tree
tremendous
trend
trial
tribe
trick
trip
troop
trouble
truck
true
truly
trust
truth
try
tube
tunnel
turn
TV
twelve
twenty
twice
twin
two
type
typical
typically
ugly
ultimate
ultimately
unable
uncle
under
undergo
understand
understanding
unfortunately
uniform
union
unique
unit
United
universal
universe
university
unknown
unless
unlike
unlikely
until
unusual
up
upon
upper
urban
urge
us
use
used
useful
user
usual
usually
utility
vacation
valley
valuable
value
variable
variation
variety
various
vary
vast
vegetable
vehicle
venture
version
versus
very
vessel
veteran
via
victim
victory
video
view
viewer
village
violate
violation
violence
violent
virtually
virtue
virus
visible
vision
visit
visitor
visual
vital
voice
volume
volunteer
vote
voter
vs
vulnerable
wage
wait
wake
walk
wall
wander
want
war
warm
warn
warning
wash
waste
watch
water
wave
way
we
weak
wealth
wealthy
weapon
wear
weather
wedding
week
weekend
weekly
weigh
weight
welcome
welfare
well
west
western
wet
what
whatever
wheel
when
whenever
where
whereas
whether
which
while
whisper
white
who
whole
whom
whose
why
wide
widely
widespread
wife
wild
will
willing
win
wind
window
wine
wing
winner
winter
wipe
wire
wisdom
wise
wish
with
withdraw
within
without
witness
woman
wonder
wonderful
wood
wooden
word
work
worker
working
works
workshop
world
worried
worry
worth
would
wound
wrap
write
writer
writing
wrong
yard
yeah
year
yell
yellow
yes
yesterday
yet
yield
you
young
your
yours
yourself
youth
zone`,us={checkTestEnd:Im,countTypos:Fm,calcWpm:Om,countCorrectChars:zm,calcWpmRaw:Rm};function Im(s,n,c){return!(c-1!==s.currWord.idx||s.currLatter.idx!==s.currWord.str.length-1||!n)}function Rm(s,n,c){return Math.round((s-n)*(60/c)/5)}function Om(s,n,c){return Math.round((s+n)*(60/c)/5)}function Fm(s){return s.latters.reduce((n,c)=>(c.isCorrect===!1&&n++,n),0)}function zm(s){return s.latters.reduce((n,c)=>(c.isCorrect===!0&&n++,n),0)}const Dt={generateNewTest:Xm,retest:Hm,countAllTypos:Gm,calcWordWpm:jm,calcTestWpm:Vm,saveTestToLocalStorage:Wm,localOption:Nm,saveLocalOption:Dm};function Nm(){const s=localStorage.getItem("testOptions");return s?JSON.parse(s):(localStorage.setItem("testOptions",JSON.stringify({mode:"time",level:15})),{mode:"time",level:15})}function Dm(s){localStorage.setItem("testOptions",JSON.stringify(s))}function Xm(s="english"){const n=Ym().map(u=>({word:u,isCorrect:null,wpm:0,wpmRaw:0,typeCount:0,time:0,latters:u.split("").map(g=>({latter:g,isCorrect:null}))}));return{currLatter:{idx:0,str:n[0].latters[0].latter},currWord:{idx:0,str:n[0].word},time:0,typoCount:0,sumType:0,acc:0,realAcc:0,wpm:0,wpmRaw:0,txt:n}}function Hm(s){const n={...s};return n.currLatter={idx:0,str:n.txt[0].latters[0].latter},n.currWord={idx:0,str:n.txt[0].word},n.typoCount=0,n.sumType=0,n.txt=Bm(s.txt),n}function Ym(s="english"){return _m.split(`
`).sort(()=>Math.random()-.5).slice(0,100)}function Bm(s){return s.map(n=>({word:n.word,typeCount:0,wpm:0,wpmRaw:0,time:0,isCorrect:null,latters:n.word.split("").map(c=>({latter:c,isCorrect:null}))}))}function Wm(s){window.localStorage.setItem("test",JSON.stringify(s))}function Vm(s){const n=s.txt.map(({wpm:m})=>m).slice(0,s.currWord.idx).reduce((m,w)=>m+=w,0),c=s.txt.map(({wpmRaw:m})=>m).slice(0,s.currWord.idx).reduce((m,w)=>m+=w,0),u=Math.round(n/s.currWord.idx),g=Math.round(c/s.currWord.idx);return[u,g]}function jm(s){return s.txt.map((c,u)=>{let g=0,m=0;for(let w=0;w<u;w++)g+=us.countTypos(s.txt[w]),m+=us.countCorrectChars(s.txt[w]);return u<s.currWord.idx&&(c.wpm=us.calcWpm(m,u,c.time),c.wpmRaw=us.calcWpmRaw(c.typeCount,u,c.time)),c})}function Gm(s){return s.txt.reduce((n,c)=>(n+=us.countTypos(c),n),0)}var xu={exports:{}},ho={exports:{}},mu=function(n,c){return function(){for(var g=new Array(arguments.length),m=0;m<g.length;m++)g[m]=arguments[m];return n.apply(c,g)}},Um=mu,uo=Object.prototype.toString,fo=function(s){return function(n){var c=uo.call(n);return s[c]||(s[c]=c.slice(8,-1).toLowerCase())}}(Object.create(null));function es(s){return s=s.toLowerCase(),function(c){return fo(c)===s}}function go(s){return Array.isArray(s)}function qa(s){return typeof s>"u"}function $m(s){return s!==null&&!qa(s)&&s.constructor!==null&&!qa(s.constructor)&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}var bu=es("ArrayBuffer");function qm(s){var n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(s):n=s&&s.buffer&&bu(s.buffer),n}function Zm(s){return typeof s=="string"}function Km(s){return typeof s=="number"}function vu(s){return s!==null&&typeof s=="object"}function Fa(s){if(fo(s)!=="object")return!1;var n=Object.getPrototypeOf(s);return n===null||n===Object.prototype}var Jm=es("Date"),Qm=es("File"),eb=es("Blob"),tb=es("FileList");function po(s){return uo.call(s)==="[object Function]"}function ib(s){return vu(s)&&po(s.pipe)}function sb(s){var n="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||uo.call(s)===n||po(s.toString)&&s.toString()===n)}var ab=es("URLSearchParams");function rb(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")}function nb(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function xo(s,n){if(!(s===null||typeof s>"u"))if(typeof s!="object"&&(s=[s]),go(s))for(var c=0,u=s.length;c<u;c++)n.call(null,s[c],c,s);else for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&n.call(null,s[g],g,s)}function _n(){var s={};function n(g,m){Fa(s[m])&&Fa(g)?s[m]=_n(s[m],g):Fa(g)?s[m]=_n({},g):go(g)?s[m]=g.slice():s[m]=g}for(var c=0,u=arguments.length;c<u;c++)xo(arguments[c],n);return s}function ob(s,n,c){return xo(n,function(g,m){c&&typeof g=="function"?s[m]=Um(g,c):s[m]=g}),s}function lb(s){return s.charCodeAt(0)===65279&&(s=s.slice(1)),s}function cb(s,n,c,u){s.prototype=Object.create(n.prototype,u),s.prototype.constructor=s,c&&Object.assign(s.prototype,c)}function hb(s,n,c){var u,g,m,w={};n=n||{};do{for(u=Object.getOwnPropertyNames(s),g=u.length;g-- >0;)m=u[g],w[m]||(n[m]=s[m],w[m]=!0);s=Object.getPrototypeOf(s)}while(s&&(!c||c(s,n))&&s!==Object.prototype);return n}function ub(s,n,c){s=String(s),(c===void 0||c>s.length)&&(c=s.length),c-=n.length;var u=s.indexOf(n,c);return u!==-1&&u===c}function db(s){if(!s)return null;var n=s.length;if(qa(n))return null;for(var c=new Array(n);n-- >0;)c[n]=s[n];return c}var fb=function(s){return function(n){return s&&n instanceof s}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),dt={isArray:go,isArrayBuffer:bu,isBuffer:$m,isFormData:sb,isArrayBufferView:qm,isString:Zm,isNumber:Km,isObject:vu,isPlainObject:Fa,isUndefined:qa,isDate:Jm,isFile:Qm,isBlob:eb,isFunction:po,isStream:ib,isURLSearchParams:ab,isStandardBrowserEnv:nb,forEach:xo,merge:_n,extend:ob,trim:rb,stripBOM:lb,inherits:cb,toFlatObject:hb,kindOf:fo,kindOfTest:es,endsWith:ub,toArray:db,isTypedArray:fb,isFileList:tb},as=dt;function Fl(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var yu=function(n,c,u){if(!c)return n;var g;if(u)g=u(c);else if(as.isURLSearchParams(c))g=c.toString();else{var m=[];as.forEach(c,function(P,I){P===null||typeof P>"u"||(as.isArray(P)?I=I+"[]":P=[P],as.forEach(P,function(N){as.isDate(N)?N=N.toISOString():as.isObject(N)&&(N=JSON.stringify(N)),m.push(Fl(I)+"="+Fl(N))}))}),g=m.join("&")}if(g){var w=n.indexOf("#");w!==-1&&(n=n.slice(0,w)),n+=(n.indexOf("?")===-1?"?":"&")+g}return n},gb=dt;function vr(){this.handlers=[]}vr.prototype.use=function(n,c,u){return this.handlers.push({fulfilled:n,rejected:c,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1};vr.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)};vr.prototype.forEach=function(n){gb.forEach(this.handlers,function(u){u!==null&&n(u)})};var pb=vr,xb=dt,mb=function(n,c){xb.forEach(n,function(g,m){m!==c&&m.toUpperCase()===c.toUpperCase()&&(n[c]=g,delete n[m])})},wu=dt;function Cs(s,n,c,u,g){Error.call(this),this.message=s,this.name="AxiosError",n&&(this.code=n),c&&(this.config=c),u&&(this.request=u),g&&(this.response=g)}wu.inherits(Cs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ku=Cs.prototype,Au={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(s){Au[s]={value:s}});Object.defineProperties(Cs,Au);Object.defineProperty(ku,"isAxiosError",{value:!0});Cs.from=function(s,n,c,u,g,m){var w=Object.create(ku);return wu.toFlatObject(s,w,function(P){return P!==Error.prototype}),Cs.call(w,s.message,n,c,u,g),w.name=s.name,m&&Object.assign(w,m),w};var Ps=Cs,Su={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=dt;function bb(s,n){n=n||new FormData;var c=[];function u(m){return m===null?"":Ht.isDate(m)?m.toISOString():Ht.isArrayBuffer(m)||Ht.isTypedArray(m)?typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function g(m,w){if(Ht.isPlainObject(m)||Ht.isArray(m)){if(c.indexOf(m)!==-1)throw Error("Circular reference detected in "+w);c.push(m),Ht.forEach(m,function(P,I){if(!Ht.isUndefined(P)){var O=w?w+"."+I:I,N;if(P&&!w&&typeof P=="object"){if(Ht.endsWith(I,"{}"))P=JSON.stringify(P);else if(Ht.endsWith(I,"[]")&&(N=Ht.toArray(P))){N.forEach(function(z){!Ht.isUndefined(z)&&n.append(O,u(z))});return}}g(P,O)}}),c.pop()}else n.append(w,u(m))}return g(s),n}var Cu=bb,Hr,zl;function vb(){if(zl)return Hr;zl=1;var s=Ps;return Hr=function(c,u,g){var m=g.config.validateStatus;!g.status||!m||m(g.status)?c(g):u(new s("Request failed with status code "+g.status,[s.ERR_BAD_REQUEST,s.ERR_BAD_RESPONSE][Math.floor(g.status/100)-4],g.config,g.request,g))},Hr}var Yr,Nl;function yb(){if(Nl)return Yr;Nl=1;var s=dt;return Yr=s.isStandardBrowserEnv()?function(){return{write:function(u,g,m,w,k,P){var I=[];I.push(u+"="+encodeURIComponent(g)),s.isNumber(m)&&I.push("expires="+new Date(m).toGMTString()),s.isString(w)&&I.push("path="+w),s.isString(k)&&I.push("domain="+k),P===!0&&I.push("secure"),document.cookie=I.join("; ")},read:function(u){var g=document.cookie.match(new RegExp("(^|;\\s*)("+u+")=([^;]*)"));return g?decodeURIComponent(g[3]):null},remove:function(u){this.write(u,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Yr}var wb=function(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)},kb=function(n,c){return c?n.replace(/\/+$/,"")+"/"+c.replace(/^\/+/,""):n},Ab=wb,Sb=kb,Eu=function(n,c){return n&&!Ab(c)?Sb(n,c):c},Br,Dl;function Cb(){if(Dl)return Br;Dl=1;var s=dt,n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Br=function(u){var g={},m,w,k;return u&&s.forEach(u.split(`
`),function(I){if(k=I.indexOf(":"),m=s.trim(I.substr(0,k)).toLowerCase(),w=s.trim(I.substr(k+1)),m){if(g[m]&&n.indexOf(m)>=0)return;m==="set-cookie"?g[m]=(g[m]?g[m]:[]).concat([w]):g[m]=g[m]?g[m]+", "+w:w}}),g},Br}var Wr,Xl;function Eb(){if(Xl)return Wr;Xl=1;var s=dt;return Wr=s.isStandardBrowserEnv()?function(){var c=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a"),g;function m(w){var k=w;return c&&(u.setAttribute("href",k),k=u.href),u.setAttribute("href",k),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return g=m(window.location.href),function(k){var P=s.isString(k)?m(k):k;return P.protocol===g.protocol&&P.host===g.host}}():function(){return function(){return!0}}(),Wr}var Vr,Hl;function yr(){if(Hl)return Vr;Hl=1;var s=Ps,n=dt;function c(u){s.call(this,u==null?"canceled":u,s.ERR_CANCELED),this.name="CanceledError"}return n.inherits(c,s,{__CANCEL__:!0}),Vr=c,Vr}var jr,Yl;function Pb(){return Yl||(Yl=1,jr=function(n){var c=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return c&&c[1]||""}),jr}var Gr,Bl;function Wl(){if(Bl)return Gr;Bl=1;var s=dt,n=vb(),c=yb(),u=yu,g=Eu,m=Cb(),w=Eb(),k=Su,P=Ps,I=yr(),O=Pb();return Gr=function(z){return new Promise(function(q,K){var ee=z.data,V=z.headers,T=z.responseType,j;function Z(){z.cancelToken&&z.cancelToken.unsubscribe(j),z.signal&&z.signal.removeEventListener("abort",j)}s.isFormData(ee)&&s.isStandardBrowserEnv()&&delete V["Content-Type"];var H=new XMLHttpRequest;if(z.auth){var ce=z.auth.username||"",J=z.auth.password?unescape(encodeURIComponent(z.auth.password)):"";V.Authorization="Basic "+btoa(ce+":"+J)}var ie=g(z.baseURL,z.url);H.open(z.method.toUpperCase(),u(ie,z.params,z.paramsSerializer),!0),H.timeout=z.timeout;function ne(){if(!!H){var se="getAllResponseHeaders"in H?m(H.getAllResponseHeaders()):null,ye=!T||T==="text"||T==="json"?H.responseText:H.response,ge={data:ye,status:H.status,statusText:H.statusText,headers:se,config:z,request:H};n(function(Le){q(Le),Z()},function(Le){K(Le),Z()},ge),H=null}}if("onloadend"in H?H.onloadend=ne:H.onreadystatechange=function(){!H||H.readyState!==4||H.status===0&&!(H.responseURL&&H.responseURL.indexOf("file:")===0)||setTimeout(ne)},H.onabort=function(){!H||(K(new P("Request aborted",P.ECONNABORTED,z,H)),H=null)},H.onerror=function(){K(new P("Network Error",P.ERR_NETWORK,z,H,H)),H=null},H.ontimeout=function(){var ye=z.timeout?"timeout of "+z.timeout+"ms exceeded":"timeout exceeded",ge=z.transitional||k;z.timeoutErrorMessage&&(ye=z.timeoutErrorMessage),K(new P(ye,ge.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,z,H)),H=null},s.isStandardBrowserEnv()){var Q=(z.withCredentials||w(ie))&&z.xsrfCookieName?c.read(z.xsrfCookieName):void 0;Q&&(V[z.xsrfHeaderName]=Q)}"setRequestHeader"in H&&s.forEach(V,function(ye,ge){typeof ee>"u"&&ge.toLowerCase()==="content-type"?delete V[ge]:H.setRequestHeader(ge,ye)}),s.isUndefined(z.withCredentials)||(H.withCredentials=!!z.withCredentials),T&&T!=="json"&&(H.responseType=z.responseType),typeof z.onDownloadProgress=="function"&&H.addEventListener("progress",z.onDownloadProgress),typeof z.onUploadProgress=="function"&&H.upload&&H.upload.addEventListener("progress",z.onUploadProgress),(z.cancelToken||z.signal)&&(j=function(se){!H||(K(!se||se&&se.type?new I:se),H.abort(),H=null)},z.cancelToken&&z.cancelToken.subscribe(j),z.signal&&(z.signal.aborted?j():z.signal.addEventListener("abort",j))),ee||(ee=null);var le=O(ie);if(le&&["http","https","file"].indexOf(le)===-1){K(new P("Unsupported protocol "+le+":",P.ERR_BAD_REQUEST,z));return}H.send(ee)})},Gr}var Ur,Vl;function Tb(){return Vl||(Vl=1,Ur=null),Ur}var lt=dt,jl=mb,Gl=Ps,Lb=Su,Mb=Cu,_b={"Content-Type":"application/x-www-form-urlencoded"};function Ul(s,n){!lt.isUndefined(s)&&lt.isUndefined(s["Content-Type"])&&(s["Content-Type"]=n)}function Ib(){var s;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(s=Wl()),s}function Rb(s,n,c){if(lt.isString(s))try{return(n||JSON.parse)(s),lt.trim(s)}catch(u){if(u.name!=="SyntaxError")throw u}return(c||JSON.stringify)(s)}var wr={transitional:Lb,adapter:Ib(),transformRequest:[function(n,c){if(jl(c,"Accept"),jl(c,"Content-Type"),lt.isFormData(n)||lt.isArrayBuffer(n)||lt.isBuffer(n)||lt.isStream(n)||lt.isFile(n)||lt.isBlob(n))return n;if(lt.isArrayBufferView(n))return n.buffer;if(lt.isURLSearchParams(n))return Ul(c,"application/x-www-form-urlencoded;charset=utf-8"),n.toString();var u=lt.isObject(n),g=c&&c["Content-Type"],m;if((m=lt.isFileList(n))||u&&g==="multipart/form-data"){var w=this.env&&this.env.FormData;return Mb(m?{"files[]":n}:n,w&&new w)}else if(u||g==="application/json")return Ul(c,"application/json"),Rb(n);return n}],transformResponse:[function(n){var c=this.transitional||wr.transitional,u=c&&c.silentJSONParsing,g=c&&c.forcedJSONParsing,m=!u&&this.responseType==="json";if(m||g&&lt.isString(n)&&n.length)try{return JSON.parse(n)}catch(w){if(m)throw w.name==="SyntaxError"?Gl.from(w,Gl.ERR_BAD_RESPONSE,this,null,this.response):w}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tb()},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};lt.forEach(["delete","get","head"],function(n){wr.headers[n]={}});lt.forEach(["post","put","patch"],function(n){wr.headers[n]=lt.merge(_b)});var mo=wr,Ob=dt,Fb=mo,zb=function(n,c,u){var g=this||Fb;return Ob.forEach(u,function(w){n=w.call(g,n,c)}),n},$r,$l;function Pu(){return $l||($l=1,$r=function(n){return!!(n&&n.__CANCEL__)}),$r}var ql=dt,qr=zb,Nb=Pu(),Db=mo,Xb=yr();function Zr(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Xb}var Hb=function(n){Zr(n),n.headers=n.headers||{},n.data=qr.call(n,n.data,n.headers,n.transformRequest),n.headers=ql.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),ql.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]});var c=n.adapter||Db.adapter;return c(n).then(function(g){return Zr(n),g.data=qr.call(n,g.data,g.headers,n.transformResponse),g},function(g){return Nb(g)||(Zr(n),g&&g.response&&(g.response.data=qr.call(n,g.response.data,g.response.headers,n.transformResponse))),Promise.reject(g)})},Pt=dt,Tu=function(n,c){c=c||{};var u={};function g(O,N){return Pt.isPlainObject(O)&&Pt.isPlainObject(N)?Pt.merge(O,N):Pt.isPlainObject(N)?Pt.merge({},N):Pt.isArray(N)?N.slice():N}function m(O){if(Pt.isUndefined(c[O])){if(!Pt.isUndefined(n[O]))return g(void 0,n[O])}else return g(n[O],c[O])}function w(O){if(!Pt.isUndefined(c[O]))return g(void 0,c[O])}function k(O){if(Pt.isUndefined(c[O])){if(!Pt.isUndefined(n[O]))return g(void 0,n[O])}else return g(void 0,c[O])}function P(O){if(O in c)return g(n[O],c[O]);if(O in n)return g(void 0,n[O])}var I={url:w,method:w,data:w,baseURL:k,transformRequest:k,transformResponse:k,paramsSerializer:k,timeout:k,timeoutMessage:k,withCredentials:k,adapter:k,responseType:k,xsrfCookieName:k,xsrfHeaderName:k,onUploadProgress:k,onDownloadProgress:k,decompress:k,maxContentLength:k,maxBodyLength:k,beforeRedirect:k,transport:k,httpAgent:k,httpsAgent:k,cancelToken:k,socketPath:k,responseEncoding:k,validateStatus:P};return Pt.forEach(Object.keys(n).concat(Object.keys(c)),function(N){var z=I[N]||m,W=z(N);Pt.isUndefined(W)&&z!==P||(u[N]=W)}),u},Kr,Zl;function Lu(){return Zl||(Zl=1,Kr={version:"0.27.2"}),Kr}var Yb=Lu().version,yi=Ps,bo={};["object","boolean","number","function","string","symbol"].forEach(function(s,n){bo[s]=function(u){return typeof u===s||"a"+(n<1?"n ":" ")+s}});var Kl={};bo.transitional=function(n,c,u){function g(m,w){return"[Axios v"+Yb+"] Transitional option '"+m+"'"+w+(u?". "+u:"")}return function(m,w,k){if(n===!1)throw new yi(g(w," has been removed"+(c?" in "+c:"")),yi.ERR_DEPRECATED);return c&&!Kl[w]&&(Kl[w]=!0,console.warn(g(w," has been deprecated since v"+c+" and will be removed in the near future"))),n?n(m,w,k):!0}};function Bb(s,n,c){if(typeof s!="object")throw new yi("options must be an object",yi.ERR_BAD_OPTION_VALUE);for(var u=Object.keys(s),g=u.length;g-- >0;){var m=u[g],w=n[m];if(w){var k=s[m],P=k===void 0||w(k,m,s);if(P!==!0)throw new yi("option "+m+" must be "+P,yi.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new yi("Unknown option "+m,yi.ERR_BAD_OPTION)}}var Wb={assertOptions:Bb,validators:bo},Mu=dt,Vb=yu,Jl=pb,Ql=Hb,kr=Tu,jb=Eu,_u=Wb,rs=_u.validators;function Es(s){this.defaults=s,this.interceptors={request:new Jl,response:new Jl}}Es.prototype.request=function(n,c){typeof n=="string"?(c=c||{},c.url=n):c=n||{},c=kr(this.defaults,c),c.method?c.method=c.method.toLowerCase():this.defaults.method?c.method=this.defaults.method.toLowerCase():c.method="get";var u=c.transitional;u!==void 0&&_u.assertOptions(u,{silentJSONParsing:rs.transitional(rs.boolean),forcedJSONParsing:rs.transitional(rs.boolean),clarifyTimeoutError:rs.transitional(rs.boolean)},!1);var g=[],m=!0;this.interceptors.request.forEach(function(W){typeof W.runWhen=="function"&&W.runWhen(c)===!1||(m=m&&W.synchronous,g.unshift(W.fulfilled,W.rejected))});var w=[];this.interceptors.response.forEach(function(W){w.push(W.fulfilled,W.rejected)});var k;if(!m){var P=[Ql,void 0];for(Array.prototype.unshift.apply(P,g),P=P.concat(w),k=Promise.resolve(c);P.length;)k=k.then(P.shift(),P.shift());return k}for(var I=c;g.length;){var O=g.shift(),N=g.shift();try{I=O(I)}catch(z){N(z);break}}try{k=Ql(I)}catch(z){return Promise.reject(z)}for(;w.length;)k=k.then(w.shift(),w.shift());return k};Es.prototype.getUri=function(n){n=kr(this.defaults,n);var c=jb(n.baseURL,n.url);return Vb(c,n.params,n.paramsSerializer)};Mu.forEach(["delete","get","head","options"],function(n){Es.prototype[n]=function(c,u){return this.request(kr(u||{},{method:n,url:c,data:(u||{}).data}))}});Mu.forEach(["post","put","patch"],function(n){function c(u){return function(m,w,k){return this.request(kr(k||{},{method:n,headers:u?{"Content-Type":"multipart/form-data"}:{},url:m,data:w}))}}Es.prototype[n]=c(),Es.prototype[n+"Form"]=c(!0)});var Gb=Es,Jr,ec;function Ub(){if(ec)return Jr;ec=1;var s=yr();function n(c){if(typeof c!="function")throw new TypeError("executor must be a function.");var u;this.promise=new Promise(function(w){u=w});var g=this;this.promise.then(function(m){if(!!g._listeners){var w,k=g._listeners.length;for(w=0;w<k;w++)g._listeners[w](m);g._listeners=null}}),this.promise.then=function(m){var w,k=new Promise(function(P){g.subscribe(P),w=P}).then(m);return k.cancel=function(){g.unsubscribe(w)},k},c(function(w){g.reason||(g.reason=new s(w),u(g.reason))})}return n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(u){if(this.reason){u(this.reason);return}this._listeners?this._listeners.push(u):this._listeners=[u]},n.prototype.unsubscribe=function(u){if(!!this._listeners){var g=this._listeners.indexOf(u);g!==-1&&this._listeners.splice(g,1)}},n.source=function(){var u,g=new n(function(w){u=w});return{token:g,cancel:u}},Jr=n,Jr}var Qr,tc;function $b(){return tc||(tc=1,Qr=function(n){return function(u){return n.apply(null,u)}}),Qr}var en,ic;function qb(){if(ic)return en;ic=1;var s=dt;return en=function(c){return s.isObject(c)&&c.isAxiosError===!0},en}var sc=dt,Zb=mu,za=Gb,Kb=Tu,Jb=mo;function Iu(s){var n=new za(s),c=Zb(za.prototype.request,n);return sc.extend(c,za.prototype,n),sc.extend(c,n),c.create=function(g){return Iu(Kb(s,g))},c}var Et=Iu(Jb);Et.Axios=za;Et.CanceledError=yr();Et.CancelToken=Ub();Et.isCancel=Pu();Et.VERSION=Lu().version;Et.toFormData=Cu;Et.AxiosError=Ps;Et.Cancel=Et.CanceledError;Et.all=function(n){return Promise.all(n)};Et.spread=$b();Et.isAxiosError=qb();ho.exports=Et;ho.exports.default=Et;(function(s){s.exports=ho.exports})(xu);const Ri=su(xu.exports),Ru="/api/test",Ou={saveTest:Qb,getUserTests:ev};async function Qb(s,n){return Ri.post(`${Ru}/save`,{test:s,uid:n}).then(({data:c})=>c)}async function ev(s){return Ri.get(`${Ru}/${s}`).then(({data:n})=>n)}async function ac(s,n){if(n===null)return null;const c=s.getBoundingClientRect(),u=n.getBoundingClientRect();return Ii({top:s.offsetTop-Math.round(s.clientHeight/5),bottom:c.bottom-u.bottom,right:c.right-u.right,left:c.left-u.left,leftEnd:c.left-u.left+c.width})}const Rs=da({id:"caret",state:()=>({caretPos:null,isLatterEnd:!1,currLineIdx:1,relativeTop:0,caretCurrWordIdx:0}),getters:{getCaretPos:({caretPos:s})=>s,getIslatterEnd:({isLatterEnd:s})=>s,getRelativeTop:({relativeTop:s})=>s,getCurrLineIdx:({currLineIdx:s})=>s},actions:{async updatedCaretPos(s,n){const c=yo();if(this.caretPos===null){this.caretPos=await ac(s,n);return}const{top:u,left:g,leftEnd:m,bottom:w}=await ac(s,n);u===this.caretPos.top?(this.caretPos.left=g,this.caretPos.leftEnd=m):(this.currLineIdx++,this.currLineIdx>=3&&(c.cutWordsToRender(),this.caretCurrWordIdx=0),this.caretPos.top=u,this.caretPos.left=g,this.caretPos.leftEnd=m,this.caretPos.bottom=w,this.relativeTop+=u)},setLatterEnd(s){this.isLatterEnd=s},resetCaret(){this.relativeTop=0,this.caretPos=null}}});Ri.defaults.withCredentials=!0;const fa="/api/user",Ta={logout:tv,login:iv,signup:sv,loginWithGoogle:av,getLoggedInUser:rv};async function tv(){return Ri.post(`${fa}/logout`).then(({data:s})=>s)}async function iv(s){return Ri.post(`${fa}/signin`,s,{withCredentials:!0}).then(({data:n})=>n)}async function sv(s){return Ri.post(`${fa}/signup`,s,{withCredentials:!0}).then(({data:n})=>n)}async function av(){return Ri.get(`${fa}/google/login`,{withCredentials:!0}).then(({data:s})=>s)}async function rv(){try{const{data:s}=await Ri.get(`${fa}/current_user`,{withCredentials:!0});return s||null}catch(s){console.log("cant get current user",s)}}const vo=da("user",()=>{const s=Ct(null),n=Ct(null),c=We(()=>s.value),u=We(()=>n.value);async function g(){!s.value||(n.value=await Ou.getUserTests(s.value.id))}async function m(){s.value=await Ta.getLoggedInUser(),g()}async function w(){window.open("/api/user/google/login")}async function k(O){s.value=await Ta.login(O)}async function P(O){await Ta.signup(O),document.location.reload()}async function I(){await Ta.logout()}return{user:s,userTests:n,getLoggedInUser:c,login:k,setLoggedInUser:m,loginWithGoogle:w,logout:I,signup:P,getUserTests:u}}),yo=da({id:"test",state:()=>({test:Dt.generateNewTest(),isActive:!1,AFKtimeout:null,testTimeInterval:null,isNewTest:!1,wordsToCut:0}),getters:{getTest:({test:s})=>s,getIsNewTest:({isNewTest:s})=>s,getWordFromTxt:({test:s})=>s==null?void 0:s.txt[s.currWord.idx],getLatterFromTxt:({test:s})=>s==null?void 0:s.txt[s.currWord.idx].latters[s.currLatter.idx],getIsActiveTest:({isActive:s})=>s},actions:{cutWordsToRender(){this.wordsToCut=this.test.currWord.idx},loadTest(){this.test=Dt.generateNewTest()},setNewTest(){this.isNewTest=!0},activateTest(){this.isActive=!0,this.handleTime(!0)},newTest(){this.test=Dt.generateNewTest(),this.test.time=0,this.isNewTest=!1,this.handleTime(!1),this.$router.push("/test")},reloadTest(){this.test.time=0,this.handleTime(!1),this.test=Dt.retest(this.test)},setAFK(){this.isActive=!1,this.handleTime(!1)},handleTime(s){s?(this.isActive=!0,this.testTimeInterval=setInterval(()=>this.test.time+=.25,250)):(clearInterval(this.testTimeInterval),this.testTimeInterval=null)},finishTest(){const s=vo();this.handleTime(!1),this.test.txt=Dt.calcWordWpm(this.test),this.test.realAcc=Math.round(100-this.test.typoCount*100/this.test.sumType),this.test.acc=Math.round(100-Dt.countAllTypos(this.test)*100/this.test.sumType);const[n,c]=Dt.calcTestWpm(this.test);this.test.wpm=n,this.test.wpmRaw=c,Dt.saveTestToLocalStorage(this.test),this.$router.push("/testResult"),s.getLoggedInUser&&Ou.saveTest(this.test,s.getLoggedInUser.id)},handleType(s){var m;if(this.test===null)return;const n=Fu(),c=Rs(),{currLatter:u,currWord:g}=this.test;if(this.test.txt[g.idx].latters[u.idx],this.isActive||this.handleTime(!0),n.getTestMode==="words"&&us.checkTestEnd(this.test,c.getIslatterEnd,n.getTestLevel)){this.handleTime(!1),this.finishTest();return}this.test.sumType++,this.AFKtimeout!==null&&clearTimeout(this.AFKtimeout),this.AFKtimeout=setTimeout(()=>{this.setAFK()},3e3),s===((m=this.test)==null?void 0:m.currLatter.str)?u.str==="space"?this.setNextWord(!0):this.setLatterNewStatus(!0):(this.test.typoCount++,u.str==="space"?this.setNextWord(!1):this.setLatterNewStatus(!1))},finishWord(){const{currWord:s}=this.test;this.test.txt[s.idx].time=this.test.time,this.test.txt[s.idx].typeCount=this.test.sumType,this.test.txt[s.idx].latters.every(n=>n.isCorrect)?this.test.txt[s.idx].isCorrect=!0:this.test.txt[s.idx].isCorrect=!1},setNextWord(s){this.finishWord();const{currLatter:n,currWord:c}=this.test;Rs().setLatterEnd(!1),c.idx++,c.str=this.test.txt[c.idx].word,n.idx=0,n.str=c.str[0]},setPrevWord(){const{currLatter:s,currWord:n}=this.test;Rs().setLatterEnd(!0),n.idx--;const u=this.test.txt[n.idx];s.idx=u.latters.length-1,n.str=u.word,s.str=n.str[n.str.length-1]},setLatterNewStatus(s){const{currLatter:n,currWord:c}=this.test,u=Rs();this.test.txt[c.idx].latters[n.idx].isCorrect=!!s,n.idx===c.str.length-1?(n.str="space",u.setLatterEnd(!0)):(n.idx++,n.str=c.str[n.idx])},hendleSpicialKeys(s){switch(s){case"Backspace":this.hendleBackspace();break;case"Escape":this.setAFK()}},hendleBackspace(){const{currWord:s,currLatter:n}=this.test,c=Rs();n.idx===0&&s.idx===0||s.idx>1&&this.test.txt.slice(0,s.idx).every(g=>g.isCorrect)&&n.idx===0||(n.idx===0?this.setPrevWord():n.idx===s.str.length-1&&c.$state.isLatterEnd?(c.setLatterEnd(!1),n.str=s.str[s.str.length-1],this.test.txt[s.idx].latters[n.idx].isCorrect=null):(n.idx--,this.test.txt[s.idx].latters[n.idx].isCorrect=null,n.str=s.str[n.idx]))}}}),Fu=da("testPtions",()=>{const s=yo(),n=Mm(),c=Ct(Dt.localOption().mode),u=Ct(Dt.localOption().level),g=We(()=>c.value),m=We(()=>u.value),w=We(()=>u.value===15&&c.value==="words");function k(I){c.value=I,Dt.saveLocalOption({mode:c.value,level:u.value}),s.setNewTest(),n.push("/test")}function P(I){u.value=I,Dt.saveLocalOption({mode:c.value,level:u.value}),s.setNewTest(),n.push("/test")}return{getTestLevel:m,getTestMode:g,setTestMode:k,setTestLevel:P,getIsOnMinWords:w}}),wo=da("theme",()=>{const s=Ct(c()),n=We(()=>s.value);function c(){var m;const g=localStorage.getItem("AppTheme");return g?((m=document.querySelector("body"))==null||m.classList.add(g),g):(localStorage.setItem("AppTheme","light"),"light")}function u(g){s.value=g,localStorage.setItem("AppTheme",g)}return{appTheme:s,getAppTheme:n,setTheme:u,localTheme:c}}),nv="modulepreload",ov=function(s){return"/"+s},rc={},La=function(n,c,u){return!c||c.length===0?n():Promise.all(c.map(g=>{if(g=ov(g),g in rc)return;rc[g]=!0;const m=g.endsWith(".css"),w=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const k=document.createElement("link");if(k.rel=m?"stylesheet":nv,m||(k.as="script",k.crossOrigin=""),k.href=g,document.head.appendChild(k),m)return new Promise((P,I)=>{k.addEventListener("load",P),k.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${g}`)))})})).then(()=>n())},ko=Tm({history:Wx("/"),routes:[{path:"/",name:"Home",component:()=>La(()=>import("./Home.2e1dc8b1.js"),["assets/Home.2e1dc8b1.js","assets/Home.dede0365.css"])},{path:"/test",name:"Test",component:()=>La(()=>import("./Test.7869bb15.js"),["assets/Test.7869bb15.js","assets/Test.9b27496e.css"])},{path:"/testResult",name:"test result",component:()=>La(()=>import("./TestResult.2d9f5791.js"),["assets/TestResult.2d9f5791.js","assets/TestResult.8788244b.css"])},{path:"/profile",name:"profile",component:()=>La(()=>import("./Profile.2118c12b.js"),["assets/Profile.2118c12b.js","assets/Profile.8d209eb9.css"])}]}),lv={class:"header-contianer flex"},cv={class:"logo-and-nav flex"},hv={class:"nav flex"},uv={key:0,class:"username"},dv={key:0,class:"test-options flex"},fv={class:"time-or-number-option test-option flex"},gv={class:"numbers-options test-option flex"},pv=["onClick"],xv=dr("Logout "),mv=li({__name:"Header",setup(s){const n=Fu(),c=vo(),u=wo(),g=yo(),m=We(()=>u.getAppTheme),w=We(()=>c.getLoggedInUser),k=pu(),P=We(()=>n.getTestMode),I=We(()=>n.getTestLevel);function O(ee){typeof ee=="string"?n.setTestMode(ee):n.setTestLevel(ee)}function N(){c.logout(),document.location.reload()}const z=We(()=>!!(k.name==="profile"&&c.getLoggedInUser));function W(ee){ee==="/test"&&g.setNewTest(),ko.push(ee)}const q=We(()=>({hidden:k.name==="Home"})),K=We(()=>{var V,T;return((V=w.value)==null?void 0:V.username[0].toUpperCase())+((T=w.value)==null?void 0:T.username.split(" ").slice(0,1).join().slice(1))});return(ee,V)=>(Ke(),at("header",{class:qt([Ue(q),"app-header"])},[De("div",lv,[De("nav",cv,[Ue(m)==="light"?(Ke(),Ti(Ue($p),{key:0,onClick:V[0]||(V[0]=T=>W("/")),class:"logo"})):(Ke(),Ti(Ue(Qp),{key:1,onClick:V[1]||(V[1]=T=>W("/")),class:"logo"})),De("div",hv,[Fe(Ue(Cx),{onClick:V[2]||(V[2]=T=>W("/test")),class:"nav-svg keyboard"}),Fe(Ue(cx),{onClick:V[3]||(V[3]=T=>W("/leaderboard")),class:"nav-svg"}),Fe(Ue(vx),{onClick:V[4]||(V[4]=T=>W("/settings")),class:"nav-svg"}),De("div",{onClick:V[5]||(V[5]=T=>W("/profile")),class:"user-nav-link flex align-center"},[Fe(Ue(gx),{class:"nav-svg"}),Ue(w)?(Ke(),at("span",uv,tn(Ue(K)),1)):ph("",!0)])])]),Ue(z)?(Ke(),at("button",{key:1,onClick:N,class:"logout-btn flex"},[xv,Fe(Ue(ex),{class:"logout-svg"})])):(Ke(),at("div",dv,[De("div",fv,[De("h2",{class:qt(["txt-light",{"active-option":Ue(P)==="time"}]),onClick:V[6]||(V[6]=T=>O("time"))},"time",2),De("h2",{class:qt(["txt-light",{"active-option":Ue(P)==="words"}]),onClick:V[7]||(V[7]=T=>O("words"))},"words",2)]),De("div",gv,[(Ke(),at(st,null,Jc(4,T=>De("h2",{key:T,onClick:j=>O(T*15),class:qt(["txt-light",{"active-option":Ue(I)===T*15}])},tn(T*15),11,pv)),64))])]))])],2))}});function bv(s,n){return Ke(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[De("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})])}function vv(s,n){return Ke(),at("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[De("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})])}const yv=["checked"],wv={for:"switch"},kv=li({__name:"CustomToggleSwitch",setup(s){const n=wo(),c=We(()=>n.getAppTheme);Ct(document.querySelector("body"));function u(){const g=c.value==="dark"?"light":"dark";n.setTheme(g)}return zc(()=>{var g,m,w,k;console.log(c.value),c.value=="dark"?((g=document.querySelector("body"))==null||g.classList.remove("dark"),(m=document.querySelector("body"))==null||m.classList.add("light")):((w=document.querySelector("body"))==null||w.classList.remove("light"),(k=document.querySelector("body"))==null||k.classList.add("dark"))}),(g,m)=>(Ke(),at(st,null,[De("input",{onChange:u,type:"checkbox",id:"switch",checked:Ue(c)==="dark"},null,40,yv),De("label",wv,[Ue(c)!=="dark"?(Ke(),Ti(Ue(bv),{key:0,class:"moon-svg"})):(Ke(),Ti(Ue(vv),{key:1,class:"sun-svg"}))])],64))}});const Av=(s,n)=>{const c=s.__vccOpts||s;for(const[u,g]of n)c[u]=g;return c},Sv=Av(kv,[["__scopeId","data-v-d3ec2b67"]]),Cv=De("div",{class:"set-goal"},null,-1),Ev={class:"main-footer flex"},Pv={class:"footer-links flex"},Tv=De("h2",{class:"txt-light"},"Linkedin",-1),Lv=[Tv],Mv=De("h2",{class:"txt-light"},"code",-1),_v=li({__name:"Footer",setup(s){const n=pu(),c=We(()=>({hidden:n.name==="Home"}));function u(){window.open("https://github.com/YoavDn/typester")}function g(){window.open("https://www.linkedin.com/in/yoav-mendelson/")}return(m,w)=>(Ke(),at("section",{class:qt(["botton",Ue(c)])},[Cv,De("footer",Ev,[De("div",Pv,[De("div",{onClick:g,class:"footer-link flex"},Lv),De("div",{onClick:u,class:"footer-link flex align-center"},[Fe(Ue(tx),{class:"code-svg"}),Mv])]),Fe(Sv)])],2))}});const Iv={class:"main-app"},Rv=li({__name:"App",setup(s){const n=vo(),c=wo();return n.setLoggedInUser(),c.localTheme(),(u,g)=>{const m=qc("RouterView");return Ke(),at("main",Iv,[Fe(mv),Fe(m,null,{default:Qs(({Component:w})=>[Fe(xr,{name:"fade",mode:"out-in"},{default:Qs(()=>[(Ke(),Ti(Kc(w)))]),_:2},1024)]),_:1}),Fe(_v)])}}});const zu=zp(),Ar=Vh(Rv);console.log("production");zu.use(({store:s})=>{s.$router=Lt(ko)});Ar.use(zu);Ar.use(ko);Ar.use(Wp);Ar.mount("#app");export{Ti as A,Qs as B,Cf as C,Ga as D,st as F,Wp as V,Av as _,at as a,De as b,We as c,li as d,Ue as e,Mm as f,Fe as g,yo as h,Rs as i,sa as j,Fu as k,Ct as l,ua as m,qt as n,Ke as o,ha as p,ph as q,Jc as r,ap as s,tn as t,wo as u,Ii as v,zc as w,qc as x,dr as y,vo as z};
