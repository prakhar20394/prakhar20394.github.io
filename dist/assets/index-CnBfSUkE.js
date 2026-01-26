(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function bm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zf={exports:{}},wu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=Symbol.for("react.transitional.element"),wm=Symbol.for("react.fragment");function Vf(t,e,a){var l=null;if(a!==void 0&&(l=""+a),e.key!==void 0&&(l=""+e.key),"key"in e){a={};for(var n in e)n!=="key"&&(a[n]=e[n])}else a=e;return e=a.ref,{$$typeof:Sm,type:t,key:l,ref:e!==void 0?e:null,props:a}}wu.Fragment=wm;wu.jsx=Vf;wu.jsxs=Vf;Zf.exports=wu;var d=Zf.exports,Kf={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.transitional.element"),zm=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Tm=Symbol.for("react.profiler"),Mm=Symbol.for("react.consumer"),jm=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),Cm=Symbol.for("react.activity"),ts=Symbol.iterator;function Hm(t){return t===null||typeof t!="object"?null:(t=ts&&t[ts]||t["@@iterator"],typeof t=="function"?t:null)}var $f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,Wf={};function kl(t,e,a){this.props=t,this.context=e,this.refs=Wf,this.updater=a||$f}kl.prototype.isReactComponent={};kl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};kl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function If(){}If.prototype=kl.prototype;function Ko(t,e,a){this.props=t,this.context=e,this.refs=Wf,this.updater=a||$f}var Jo=Ko.prototype=new If;Jo.constructor=Ko;Ff(Jo,kl.prototype);Jo.isPureReactComponent=!0;var es=Array.isArray;function qr(){}var ot={H:null,A:null,T:null,S:null},Pf=Object.prototype.hasOwnProperty;function $o(t,e,a){var l=a.ref;return{$$typeof:Vo,type:t,key:e,ref:l!==void 0?l:null,props:a}}function Nm(t,e){return $o(t.type,e,t.props)}function Fo(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function Um(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var as=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Um(""+t.key):e.toString(36)}function Rm(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(qr,qr):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function al(t,e,a,l,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Vo:case zm:u=!0;break;case Jf:return u=t._init,al(u(t._payload),e,a,l,n)}}if(u)return n=n(t),u=l===""?"."+Fu(t,0):l,es(n)?(a="",u!=null&&(a=u.replace(as,"$&/")+"/"),al(n,e,a,"",function(f){return f})):n!=null&&(Fo(n)&&(n=Nm(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(as,"$&/")+"/")+u)),e.push(n)),1;u=0;var r=l===""?".":l+":";if(es(t))for(var o=0;o<t.length;o++)l=t[o],i=r+Fu(l,o),u+=al(l,e,a,i,n);else if(o=Hm(t),typeof o=="function")for(t=o.call(t),o=0;!(l=t.next()).done;)l=l.value,i=r+Fu(l,o++),u+=al(l,e,a,i,n);else if(i==="object"){if(typeof t.then=="function")return al(Rm(t),e,a,l,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function ui(t,e,a){if(t==null)return t;var l=[],n=0;return al(t,l,"","",function(i){return e.call(a,i,n++)}),l}function Bm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ls=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ym={map:ui,forEach:function(t,e,a){ui(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return ui(t,function(){e++}),e},toArray:function(t){return ui(t,function(e){return e})||[]},only:function(t){if(!Fo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=Cm;U.Children=Ym;U.Component=kl;U.Fragment=Am;U.Profiler=Tm;U.PureComponent=Ko;U.StrictMode=Em;U.Suspense=_m;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ot;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ot.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Ff({},t.props),n=t.key;if(e!=null)for(i in e.key!==void 0&&(n=""+e.key),e)!Pf.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(l[i]=e[i]);var i=arguments.length-2;if(i===1)l.children=a;else if(1<i){for(var u=Array(i),r=0;r<i;r++)u[r]=arguments[r+2];l.children=u}return $o(t.type,n,l)};U.createContext=function(t){return t={$$typeof:jm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Mm,_context:t},t};U.createElement=function(t,e,a){var l,n={},i=null;if(e!=null)for(l in e.key!==void 0&&(i=""+e.key),e)Pf.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=e[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var r=Array(u),o=0;o<u;o++)r[o]=arguments[o+2];n.children=r}if(t&&t.defaultProps)for(l in u=t.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return $o(t,i,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Dm,render:t}};U.isValidElement=Fo;U.lazy=function(t){return{$$typeof:Jf,_payload:{_status:-1,_result:t},_init:Bm}};U.memo=function(t,e){return{$$typeof:Om,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=ot.T,a={};ot.T=a;try{var l=t(),n=ot.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(qr,ls)}catch(i){ls(i)}finally{e!==null&&a.types!==null&&(e.types=a.types),ot.T=e}};U.unstable_useCacheRefresh=function(){return ot.H.useCacheRefresh()};U.use=function(t){return ot.H.use(t)};U.useActionState=function(t,e,a){return ot.H.useActionState(t,e,a)};U.useCallback=function(t,e){return ot.H.useCallback(t,e)};U.useContext=function(t){return ot.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,e){return ot.H.useDeferredValue(t,e)};U.useEffect=function(t,e){return ot.H.useEffect(t,e)};U.useEffectEvent=function(t){return ot.H.useEffectEvent(t)};U.useId=function(){return ot.H.useId()};U.useImperativeHandle=function(t,e,a){return ot.H.useImperativeHandle(t,e,a)};U.useInsertionEffect=function(t,e){return ot.H.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return ot.H.useLayoutEffect(t,e)};U.useMemo=function(t,e){return ot.H.useMemo(t,e)};U.useOptimistic=function(t,e){return ot.H.useOptimistic(t,e)};U.useReducer=function(t,e,a){return ot.H.useReducer(t,e,a)};U.useRef=function(t){return ot.H.useRef(t)};U.useState=function(t){return ot.H.useState(t)};U.useSyncExternalStore=function(t,e,a){return ot.H.useSyncExternalStore(t,e,a)};U.useTransition=function(){return ot.H.useTransition()};U.version="19.2.3";Kf.exports=U;var B=Kf.exports;const Ut=bm(B);var td={exports:{}},zu={},ed={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,C){var O=T.length;T.push(C);t:for(;0<O;){var G=O-1>>>1,Z=T[G];if(0<n(Z,C))T[G]=C,T[O]=Z,O=G;else break t}}function a(T){return T.length===0?null:T[0]}function l(T){if(T.length===0)return null;var C=T[0],O=T.pop();if(O!==C){T[0]=O;t:for(var G=0,Z=T.length,zt=Z>>>1;G<zt;){var Ht=2*(G+1)-1,We=T[Ht],qt=Ht+1,ge=T[qt];if(0>n(We,O))qt<Z&&0>n(ge,We)?(T[G]=ge,T[qt]=O,G=qt):(T[G]=We,T[Ht]=O,G=Ht);else if(qt<Z&&0>n(ge,O))T[G]=ge,T[qt]=O,G=qt;else break t}}return C}function n(T,C){var O=T.sortIndex-C.sortIndex;return O!==0?O:T.id-C.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,r=u.now();t.unstable_now=function(){return u.now()-r}}var o=[],f=[],g=1,y=null,m=3,h=!1,S=!1,E=!1,_=!1,s=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function v(T){for(var C=a(f);C!==null;){if(C.callback===null)l(f);else if(C.startTime<=T)l(f),C.sortIndex=C.expirationTime,e(o,C);else break;C=a(f)}}function b(T){if(E=!1,v(T),!S)if(a(o)!==null)S=!0,A||(A=!0,et());else{var C=a(f);C!==null&&at(b,C.startTime-T)}}var A=!1,x=-1,M=5,D=-1;function j(){return _?!0:!(t.unstable_now()-D<M)}function K(){if(_=!1,A){var T=t.unstable_now();D=T;var C=!0;try{t:{S=!1,E&&(E=!1,c(x),x=-1),h=!0;var O=m;try{e:{for(v(T),y=a(o);y!==null&&!(y.expirationTime>T&&j());){var G=y.callback;if(typeof G=="function"){y.callback=null,m=y.priorityLevel;var Z=G(y.expirationTime<=T);if(T=t.unstable_now(),typeof Z=="function"){y.callback=Z,v(T),C=!0;break e}y===a(o)&&l(o),v(T)}else l(o);y=a(o)}if(y!==null)C=!0;else{var zt=a(f);zt!==null&&at(b,zt.startTime-T),C=!1}}break t}finally{y=null,m=O,h=!1}C=void 0}}finally{C?et():A=!1}}}var et;if(typeof p=="function")et=function(){p(K)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,R=N.port2;N.port1.onmessage=K,et=function(){R.postMessage(null)}}else et=function(){s(K,0)};function at(T,C){x=s(function(){T(t.unstable_now())},C)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(T){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var O=m;m=C;try{return T()}finally{m=O}},t.unstable_requestPaint=function(){_=!0},t.unstable_runWithPriority=function(T,C){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=m;m=T;try{return C()}finally{m=O}},t.unstable_scheduleCallback=function(T,C,O){var G=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=O+Z,T={id:g++,callback:C,priorityLevel:T,startTime:O,expirationTime:Z,sortIndex:-1},O>G?(T.sortIndex=O,e(f,T),a(o)===null&&T===a(f)&&(E?(c(x),x=-1):E=!0,at(b,O-G))):(T.sortIndex=Z,e(o,T),S||h||(S=!0,A||(A=!0,et()))),T},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(T){var C=m;return function(){var O=m;m=C;try{return T.apply(this,arguments)}finally{m=O}}}})(ad);ed.exports=ad;var Gm=ed.exports,ld={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm=B;function nd(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ie(){}var Yt={d:{f:Ie,r:function(){throw Error(nd(522))},D:Ie,C:Ie,L:Ie,m:Ie,X:Ie,S:Ie,M:Ie},p:0,findDOMNode:null},Xm=Symbol.for("react.portal");function km(t,e,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xm,key:l==null?null:""+l,children:t,containerInfo:e,implementation:a}}var dn=qm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Au(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Yt;Gt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(nd(299));return km(t,e,null,a)};Gt.flushSync=function(t){var e=dn.T,a=Yt.p;try{if(dn.T=null,Yt.p=2,t)return t()}finally{dn.T=e,Yt.p=a,Yt.d.f()}};Gt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Yt.d.C(t,e))};Gt.prefetchDNS=function(t){typeof t=="string"&&Yt.d.D(t)};Gt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,l=Au(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Yt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&Yt.d.X(t,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Gt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Au(e.as,e.crossOrigin);Yt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Yt.d.M(t)};Gt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,l=Au(a,e.crossOrigin);Yt.d.L(t,a,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Gt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Au(e.as,e.crossOrigin);Yt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Yt.d.m(t)};Gt.requestFormReset=function(t){Yt.d.r(t)};Gt.unstable_batchedUpdates=function(t,e){return t(e)};Gt.useFormState=function(t,e,a){return dn.H.useFormState(t,e,a)};Gt.useFormStatus=function(){return dn.H.useHostTransitionStatus()};Gt.version="19.2.3";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(t){console.error(t)}}id(),ld.exports=Gt;var Lm=ld.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=Gm,ud=B,Qm=Lm;function z(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qn(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function od(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cd(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ns(t){if(Qn(t)!==t)throw Error(z(188))}function Zm(t){var e=t.alternate;if(!e){if(e=Qn(t),e===null)throw Error(z(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return ns(n),t;if(i===l)return ns(n),e;i=i.sibling}throw Error(z(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,r=n.child;r;){if(r===a){u=!0,a=n,l=i;break}if(r===l){u=!0,l=n,a=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===a){u=!0,a=i,l=n;break}if(r===l){u=!0,l=i,a=n;break}r=r.sibling}if(!u)throw Error(z(189))}}if(a.alternate!==l)throw Error(z(190))}if(a.tag!==3)throw Error(z(188));return a.stateNode.current===a?t:e}function sd(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=sd(t),e!==null)return e;t=t.sibling}return null}var ct=Object.assign,Vm=Symbol.for("react.element"),ri=Symbol.for("react.transitional.element"),un=Symbol.for("react.portal"),il=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),Xr=Symbol.for("react.profiler"),dd=Symbol.for("react.consumer"),Ye=Symbol.for("react.context"),Wo=Symbol.for("react.forward_ref"),kr=Symbol.for("react.suspense"),Lr=Symbol.for("react.suspense_list"),Io=Symbol.for("react.memo"),ta=Symbol.for("react.lazy"),Qr=Symbol.for("react.activity"),Km=Symbol.for("react.memo_cache_sentinel"),is=Symbol.iterator;function Il(t){return t===null||typeof t!="object"?null:(t=is&&t[is]||t["@@iterator"],typeof t=="function"?t:null)}var Jm=Symbol.for("react.client.reference");function Zr(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Jm?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case il:return"Fragment";case Xr:return"Profiler";case fd:return"StrictMode";case kr:return"Suspense";case Lr:return"SuspenseList";case Qr:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case un:return"Portal";case Ye:return t.displayName||"Context";case dd:return(t._context.displayName||"Context")+".Consumer";case Wo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Io:return e=t.displayName||null,e!==null?e:Zr(t.type)||"Memo";case ta:e=t._payload,t=t._init;try{return Zr(t(e))}catch{}}return null}var rn=Array.isArray,H=ud.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Qm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Na={pending:!1,data:null,method:null,action:null},Vr=[],ul=-1;function Te(t){return{current:t}}function Tt(t){0>ul||(t.current=Vr[ul],Vr[ul]=null,ul--)}function nt(t,e){ul++,Vr[ul]=t.current,t.current=e}var Ee=Te(null),Mn=Te(null),da=Te(null),Li=Te(null);function Qi(t,e){switch(nt(da,e),nt(Mn,t),nt(Ee,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?df(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=df(e),t=Cp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Tt(Ee),nt(Ee,t)}function Ml(){Tt(Ee),Tt(Mn),Tt(da)}function Kr(t){t.memoizedState!==null&&nt(Li,t);var e=Ee.current,a=Cp(e,t.type);e!==a&&(nt(Mn,t),nt(Ee,a))}function Zi(t){Mn.current===t&&(Tt(Ee),Tt(Mn)),Li.current===t&&(Tt(Li),Yn._currentValue=Na)}var Wu,us;function Da(t){if(Wu===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||"",us=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wu+t+us}var Iu=!1;function Pu(t,e){if(!t||Iu)return"";Iu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(h){var m=h}Reflect.construct(t,[],y)}else{try{y.call()}catch(h){m=h}t.call(y.prototype)}}else{try{throw Error()}catch(h){m=h}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(h){if(h&&m&&typeof h.stack=="string")return[h.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var o=u.split(`
`),f=r.split(`
`);for(n=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;n<f.length&&!f[n].includes("DetermineComponentFrameRoot");)n++;if(l===o.length||n===f.length)for(l=o.length-1,n=f.length-1;1<=l&&0<=n&&o[l]!==f[n];)n--;for(;1<=l&&0<=n;l--,n--)if(o[l]!==f[n]){if(l!==1||n!==1)do if(l--,n--,0>n||o[l]!==f[n]){var g=`
`+o[l].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=l&&0<=n);break}}}finally{Iu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Da(a):""}function $m(t,e){switch(t.tag){case 26:case 27:case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return t.child!==e&&e!==null?Da("Suspense Fallback"):Da("Suspense");case 19:return Da("SuspenseList");case 0:case 15:return Pu(t.type,!1);case 11:return Pu(t.type.render,!1);case 1:return Pu(t.type,!0);case 31:return Da("Activity");default:return""}}function rs(t){try{var e="",a=null;do e+=$m(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Jr=Object.prototype.hasOwnProperty,Po=wt.unstable_scheduleCallback,tr=wt.unstable_cancelCallback,Fm=wt.unstable_shouldYield,Wm=wt.unstable_requestPaint,Pt=wt.unstable_now,Im=wt.unstable_getCurrentPriorityLevel,pd=wt.unstable_ImmediatePriority,md=wt.unstable_UserBlockingPriority,Vi=wt.unstable_NormalPriority,Pm=wt.unstable_LowPriority,hd=wt.unstable_IdlePriority,th=wt.log,eh=wt.unstable_setDisableYieldValue,Zn=null,te=null;function ua(t){if(typeof th=="function"&&eh(t),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(Zn,t)}catch{}}var ee=Math.clz32?Math.clz32:nh,ah=Math.log,lh=Math.LN2;function nh(t){return t>>>=0,t===0?32:31-(ah(t)/lh|0)|0}var oi=256,ci=262144,si=4194304;function _a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Eu(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=_a(l):(u&=r,u!==0?n=_a(u):a||(a=r&~t,a!==0&&(n=_a(a))))):(r=l&~i,r!==0?n=_a(r):u!==0?n=_a(u):a||(a=l&~t,a!==0&&(n=_a(a)))),n===0?0:e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Vn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ih(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(){var t=si;return si<<=1,!(si&62914560)&&(si=4194304),t}function er(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Kn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function uh(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var r=t.entanglements,o=t.expirationTimes,f=t.hiddenUpdates;for(a=u&~a;0<a;){var g=31-ee(a),y=1<<g;r[g]=0,o[g]=-1;var m=f[g];if(m!==null)for(f[g]=null,g=0;g<m.length;g++){var h=m[g];h!==null&&(h.lane&=-536870913)}a&=~y}l!==0&&yd(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function yd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ee(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function vd(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-ee(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function xd(t,e){var a=e&-e;return a=a&42?1:tc(a),a&(t.suspendedLanes|e)?0:a}function tc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ec(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function bd(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Lp(t.type))}function os(t,e){var a=F.p;try{return F.p=t,e()}finally{F.p=a}}var Ta=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ta,Vt="__reactProps$"+Ta,Ll="__reactContainer$"+Ta,$r="__reactEvents$"+Ta,rh="__reactListeners$"+Ta,oh="__reactHandles$"+Ta,cs="__reactResources$"+Ta,Jn="__reactMarker$"+Ta;function ac(t){delete t[Dt],delete t[Vt],delete t[$r],delete t[rh],delete t[oh]}function rl(t){var e=t[Dt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ll]||a[Dt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yf(t);t!==null;){if(a=t[Dt])return a;t=yf(t)}return e}t=a,a=t.parentNode}return null}function Ql(t){if(t=t[Dt]||t[Ll]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function on(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(z(33))}function bl(t){var e=t[cs];return e||(e=t[cs]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Et(t){t[Jn]=!0}var Sd=new Set,wd={};function Za(t,e){jl(t,e),jl(t+"Capture",e)}function jl(t,e){for(wd[t]=e,t=0;t<e.length;t++)Sd.add(e[t])}var ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ss={},fs={};function sh(t){return Jr.call(fs,t)?!0:Jr.call(ss,t)?!1:ch.test(t)?fs[t]=!0:(ss[t]=!0,!1)}function zi(t,e,a){if(sh(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function fi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function _e(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fh(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fr(t){if(!t._valueTracker){var e=zd(t)?"checked":"value";t._valueTracker=fh(t,e,""+t[e])}}function Ad(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=zd(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Ki(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var dh=/[\n"\\]/g;function ce(t){return t.replace(dh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Wr(t,e,a,l,n,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ue(e)):t.value!==""+ue(e)&&(t.value=""+ue(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Ir(t,u,ue(e)):a!=null?Ir(t,u,ue(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+ue(r):t.removeAttribute("name")}function Ed(t,e,a,l,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Fr(t);return}a=a!=null?""+ue(a):"",e=e!=null?""+ue(e):a,r||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=r?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Fr(t)}function Ir(t,e,a){e==="number"&&Ki(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Td(t,e,a){if(e!=null&&(e=""+ue(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ue(a):""}function Md(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(z(92));if(rn(l)){if(1<l.length)throw Error(z(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ue(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Fr(t)}function Dl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var ph=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ds(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||ph.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function jd(t,e,a){if(e!=null&&typeof e!="object")throw Error(z(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&ds(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&ds(t,i,e[i])}function lc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(t){return hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ge(){}var Pr=null;function nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ol=null,wl=null;function ps(t){var e=Ql(t);if(e&&(t=e.stateNode)){var a=t[Vt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Wr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Vt]||null;if(!n)throw Error(z(90));Wr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Ad(l)}break t;case"textarea":Td(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Sl(t,!!a.multiple,e,!1)}}}var ar=!1;function Dd(t,e,a){if(ar)return t(e,a);ar=!0;try{var l=t(e);return l}finally{if(ar=!1,(ol!==null||wl!==null)&&(Bu(),ol&&(e=ol,t=wl,wl=ol=null,ps(e),t)))for(e=0;e<t.length;e++)ps(t[e])}}function jn(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Vt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(z(231,e,typeof a));return a}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=!1;if(Ze)try{var Pl={};Object.defineProperty(Pl,"passive",{get:function(){to=!0}}),window.addEventListener("test",Pl,Pl),window.removeEventListener("test",Pl,Pl)}catch{to=!1}var ra=null,ic=null,Ei=null;function _d(){if(Ei)return Ei;var t,e=ic,a=e.length,l,n="value"in ra?ra.value:ra.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Ei=n.slice(t,1<l?1-l:void 0)}function Ti(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function di(){return!0}function ms(){return!1}function Kt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(a=t[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?di:ms,this.isPropagationStopped=ms,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),e}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Kt(Va),$n=ct({},Va,{view:0,detail:0}),gh=Kt($n),lr,nr,tn,Mu=ct({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tn&&(tn&&t.type==="mousemove"?(lr=t.screenX-tn.screenX,nr=t.screenY-tn.screenY):nr=lr=0,tn=t),lr)},movementY:function(t){return"movementY"in t?t.movementY:nr}}),hs=Kt(Mu),yh=ct({},Mu,{dataTransfer:0}),vh=Kt(yh),xh=ct({},$n,{relatedTarget:0}),ir=Kt(xh),bh=ct({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=Kt(bh),wh=ct({},Va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zh=Kt(wh),Ah=ct({},Va,{data:0}),gs=Kt(Ah),Eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mh[t])?!!e[t]:!1}function uc(){return jh}var Dh=ct({},$n,{key:function(t){if(t.key){var e=Eh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ti(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Th[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(t){return t.type==="keypress"?Ti(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ti(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_h=Kt(Dh),Oh=ct({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=Kt(Oh),Ch=ct({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),Hh=Kt(Ch),Nh=ct({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=Kt(Nh),Rh=ct({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=Kt(Rh),Yh=ct({},Va,{newState:0,oldState:0}),Gh=Kt(Yh),qh=[9,13,27,32],rc=Ze&&"CompositionEvent"in window,pn=null;Ze&&"documentMode"in document&&(pn=document.documentMode);var Xh=Ze&&"TextEvent"in window&&!pn,Od=Ze&&(!rc||pn&&8<pn&&11>=pn),vs=" ",xs=!1;function Cd(t,e){switch(t){case"keyup":return qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cl=!1;function kh(t,e){switch(t){case"compositionend":return Hd(e);case"keypress":return e.which!==32?null:(xs=!0,vs);case"textInput":return t=e.data,t===vs&&xs?null:t;default:return null}}function Lh(t,e){if(cl)return t==="compositionend"||!rc&&Cd(t,e)?(t=_d(),Ei=ic=ra=null,cl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Od&&e.locale!=="ko"?null:e.data;default:return null}}var Qh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qh[t.type]:e==="textarea"}function Nd(t,e,a,l){ol?wl?wl.push(l):wl=[l]:ol=l,e=fu(e,"onChange"),0<e.length&&(a=new Tu("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var mn=null,Dn=null;function Zh(t){Dp(t,0)}function ju(t){var e=on(t);if(Ad(e))return t}function Ss(t,e){if(t==="change")return e}var Ud=!1;if(Ze){var ur;if(Ze){var rr="oninput"in document;if(!rr){var ws=document.createElement("div");ws.setAttribute("oninput","return;"),rr=typeof ws.oninput=="function"}ur=rr}else ur=!1;Ud=ur&&(!document.documentMode||9<document.documentMode)}function zs(){mn&&(mn.detachEvent("onpropertychange",Rd),Dn=mn=null)}function Rd(t){if(t.propertyName==="value"&&ju(Dn)){var e=[];Nd(e,Dn,t,nc(t)),Dd(Zh,e)}}function Vh(t,e,a){t==="focusin"?(zs(),mn=e,Dn=a,mn.attachEvent("onpropertychange",Rd)):t==="focusout"&&zs()}function Kh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ju(Dn)}function Jh(t,e){if(t==="click")return ju(e)}function $h(t,e){if(t==="input"||t==="change")return ju(e)}function Fh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var le=typeof Object.is=="function"?Object.is:Fh;function _n(t,e){if(le(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Jr.call(e,n)||!le(t[n],e[n]))return!1}return!0}function As(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Es(t,e){var a=As(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=As(a)}}function Bd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ki(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ki(t.document)}return e}function oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Wh=Ze&&"documentMode"in document&&11>=document.documentMode,sl=null,eo=null,hn=null,ao=!1;function Ts(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ao||sl==null||sl!==Ki(l)||(l=sl,"selectionStart"in l&&oc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hn&&_n(hn,l)||(hn=l,l=fu(eo,"onSelect"),0<l.length&&(e=new Tu("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=sl)))}function ja(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var fl={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},or={},Gd={};Ze&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function Ka(t){if(or[t])return or[t];if(!fl[t])return t;var e=fl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Gd)return or[t]=e[a];return t}var qd=Ka("animationend"),Xd=Ka("animationiteration"),kd=Ka("animationstart"),Ih=Ka("transitionrun"),Ph=Ka("transitionstart"),tg=Ka("transitioncancel"),Ld=Ka("transitionend"),Qd=new Map,lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lo.push("scrollEnd");function Se(t,e){Qd.set(t,e),Za(e,[t])}var Ji=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ie=[],dl=0,cc=0;function Du(){for(var t=dl,e=cc=dl=0;e<t;){var a=ie[e];ie[e++]=null;var l=ie[e];ie[e++]=null;var n=ie[e];ie[e++]=null;var i=ie[e];if(ie[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Zd(a,n,i)}}function _u(t,e,a,l){ie[dl++]=t,ie[dl++]=e,ie[dl++]=a,ie[dl++]=l,cc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function sc(t,e,a,l){return _u(t,e,a,l),$i(t)}function Ja(t,e){return _u(t,null,null,e),$i(t)}function Zd(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ee(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function $i(t){if(50<An)throw An=0,Eo=null,Error(z(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var pl={};function eg(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,a,l){return new eg(t,e,a,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xe(t,e){var a=t.alternate;return a===null?(a=Wt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Mi(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")fc(t)&&(u=1);else if(typeof t=="string")u=u1(t,a,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Qr:return t=Wt(31,a,e,n),t.elementType=Qr,t.lanes=i,t;case il:return Ua(a.children,n,i,e);case fd:u=8,n|=24;break;case Xr:return t=Wt(12,a,e,n|2),t.elementType=Xr,t.lanes=i,t;case kr:return t=Wt(13,a,e,n),t.elementType=kr,t.lanes=i,t;case Lr:return t=Wt(19,a,e,n),t.elementType=Lr,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ye:u=10;break t;case dd:u=9;break t;case Wo:u=11;break t;case Io:u=14;break t;case ta:u=16,l=null;break t}u=29,a=Error(z(130,t===null?"null":typeof t,"")),l=null}return e=Wt(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ua(t,e,a,l){return t=Wt(7,t,l,e),t.lanes=a,t}function cr(t,e,a){return t=Wt(6,t,null,e),t.lanes=a,t}function Kd(t){var e=Wt(18,null,null,0);return e.stateNode=t,e}function sr(t,e,a){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ms=new WeakMap;function se(t,e){if(typeof t=="object"&&t!==null){var a=Ms.get(t);return a!==void 0?a:(e={value:t,source:e,stack:rs(e)},Ms.set(t,e),e)}return{value:t,source:e,stack:rs(e)}}var ml=[],hl=0,Fi=null,On=0,re=[],oe=0,wa=null,we=1,ze="";function Re(t,e){ml[hl++]=On,ml[hl++]=Fi,Fi=t,On=e}function Jd(t,e,a){re[oe++]=we,re[oe++]=ze,re[oe++]=wa,wa=t;var l=we;t=ze;var n=32-ee(l)-1;l&=~(1<<n),a+=1;var i=32-ee(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,we=1<<32-ee(e)+n|a<<n|l,ze=i+t}else we=1<<i|a<<n|l,ze=t}function dc(t){t.return!==null&&(Re(t,1),Jd(t,1,0))}function pc(t){for(;t===Fi;)Fi=ml[--hl],ml[hl]=null,On=ml[--hl],ml[hl]=null;for(;t===wa;)wa=re[--oe],re[oe]=null,ze=re[--oe],re[oe]=null,we=re[--oe],re[oe]=null}function $d(t,e){re[oe++]=we,re[oe++]=ze,re[oe++]=wa,we=e.id,ze=e.overflow,wa=t}var _t=null,rt=null,Q=!1,pa=null,fe=!1,no=Error(z(519));function za(t){var e=Error(z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cn(se(e,t)),no}function js(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Dt]=t,e[Vt]=l,a){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(a=0;a<Rn.length;a++)X(Rn[a],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),Ed(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),Md(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Op(e.textContent,a)?(l.popover!=null&&(X("beforetoggle",e),X("toggle",e)),l.onScroll!=null&&X("scroll",e),l.onScrollEnd!=null&&X("scrollend",e),l.onClick!=null&&(e.onclick=Ge),e=!0):e=!1,e||za(t,!0)}function Ds(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 31:case 13:fe=!1;return;case 27:case 3:fe=!0;return;default:_t=_t.return}}function Pa(t){if(t!==_t)return!1;if(!Q)return Ds(t),Q=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_o(t.type,t.memoizedProps)),a=!a),a&&rt&&za(t),Ds(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));rt=gf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));rt=gf(t)}else e===27?(e=rt,Ma(t.type)?(t=No,No=null,rt=t):rt=e):rt=_t?pe(t.stateNode.nextSibling):null;return!0}function Ga(){rt=_t=null,Q=!1}function fr(){var t=pa;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),pa=null),t}function Cn(t){pa===null?pa=[t]:pa.push(t)}var io=Te(null),$a=null,qe=null;function aa(t,e,a){nt(io,e._currentValue),e._currentValue=a}function ke(t){t._currentValue=io.current,Tt(io)}function uo(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function ro(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=n;for(var o=0;o<e.length;o++)if(r.context===e[o]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),uo(i.return,a,t),l||(u=null);break t}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(z(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),uo(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Zl(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(z(387));if(u=u.memoizedProps,u!==null){var r=n.type;le(n.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(n===Li.current){if(u=n.alternate,u===null)throw Error(z(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Yn):t=[Yn])}n=n.return}t!==null&&ro(e,t,a,l),e.flags|=262144}function Wi(t){for(t=t.firstContext;t!==null;){if(!le(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function qa(t){$a=t,qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return Fd($a,t)}function pi(t,e){return $a===null&&qa(t),Fd(t,e)}function Fd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},qe===null){if(t===null)throw Error(z(308));qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else qe=qe.next=e;return a}var ag=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},lg=wt.unstable_scheduleCallback,ng=wt.unstable_NormalPriority,yt={$$typeof:Ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mc(){return{controller:new ag,data:new Map,refCount:0}}function Fn(t){t.refCount--,t.refCount===0&&lg(ng,function(){t.controller.abort()})}var gn=null,oo=0,_l=0,zl=null;function ig(t,e){if(gn===null){var a=gn=[];oo=0,_l=Gc(),zl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return oo++,e.then(_s,_s),e}function _s(){if(--oo===0&&gn!==null){zl!==null&&(zl.status="fulfilled");var t=gn;gn=null,_l=0,zl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ug(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Os=H.S;H.S=function(t,e){sp=Pt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ig(t,e),Os!==null&&Os(t,e)};var Ra=Te(null);function hc(){var t=Ra.current;return t!==null?t:lt.pooledCache}function ji(t,e){e===null?nt(Ra,Ra.current):nt(Ra,e.pool)}function Wd(){var t=hc();return t===null?null:{parent:yt._currentValue,pool:t}}var Vl=Error(z(460)),gc=Error(z(474)),Ou=Error(z(542)),Ii={then:function(){}};function Cs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Id(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ge,Ge),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ns(t),t;default:if(typeof e.status=="string")e.then(Ge,Ge);else{if(t=lt,t!==null&&100<t.shellSuspendCounter)throw Error(z(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ns(t),t}throw Ba=e,Vl}}function Oa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,Vl):a}}var Ba=null;function Hs(){if(Ba===null)throw Error(z(459));var t=Ba;return Ba=null,t}function Ns(t){if(t===Vl||t===Ou)throw Error(z(483))}var Al=null,Hn=0;function mi(t){var e=Hn;return Hn+=1,Al===null&&(Al=[]),Id(Al,t,e)}function en(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hi(t,e){throw e.$$typeof===Vm?Error(z(525)):(t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Pd(t){function e(s,c){if(t){var p=s.deletions;p===null?(s.deletions=[c],s.flags|=16):p.push(c)}}function a(s,c){if(!t)return null;for(;c!==null;)e(s,c),c=c.sibling;return null}function l(s){for(var c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function n(s,c){return s=Xe(s,c),s.index=0,s.sibling=null,s}function i(s,c,p){return s.index=p,t?(p=s.alternate,p!==null?(p=p.index,p<c?(s.flags|=67108866,c):p):(s.flags|=67108866,c)):(s.flags|=1048576,c)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function r(s,c,p,v){return c===null||c.tag!==6?(c=cr(p,s.mode,v),c.return=s,c):(c=n(c,p),c.return=s,c)}function o(s,c,p,v){var b=p.type;return b===il?g(s,c,p.props.children,v,p.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ta&&Oa(b)===c.type)?(c=n(c,p.props),en(c,p),c.return=s,c):(c=Mi(p.type,p.key,p.props,null,s.mode,v),en(c,p),c.return=s,c)}function f(s,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sr(p,s.mode,v),c.return=s,c):(c=n(c,p.children||[]),c.return=s,c)}function g(s,c,p,v,b){return c===null||c.tag!==7?(c=Ua(p,s.mode,v,b),c.return=s,c):(c=n(c,p),c.return=s,c)}function y(s,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=cr(""+c,s.mode,p),c.return=s,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ri:return p=Mi(c.type,c.key,c.props,null,s.mode,p),en(p,c),p.return=s,p;case un:return c=sr(c,s.mode,p),c.return=s,c;case ta:return c=Oa(c),y(s,c,p)}if(rn(c)||Il(c))return c=Ua(c,s.mode,p,null),c.return=s,c;if(typeof c.then=="function")return y(s,mi(c),p);if(c.$$typeof===Ye)return y(s,pi(s,c),p);hi(s,c)}return null}function m(s,c,p,v){var b=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return b!==null?null:r(s,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:return p.key===b?o(s,c,p,v):null;case un:return p.key===b?f(s,c,p,v):null;case ta:return p=Oa(p),m(s,c,p,v)}if(rn(p)||Il(p))return b!==null?null:g(s,c,p,v,null);if(typeof p.then=="function")return m(s,c,mi(p),v);if(p.$$typeof===Ye)return m(s,c,pi(s,p),v);hi(s,p)}return null}function h(s,c,p,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return s=s.get(p)||null,r(c,s,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:return s=s.get(v.key===null?p:v.key)||null,o(c,s,v,b);case un:return s=s.get(v.key===null?p:v.key)||null,f(c,s,v,b);case ta:return v=Oa(v),h(s,c,p,v,b)}if(rn(v)||Il(v))return s=s.get(p)||null,g(c,s,v,b,null);if(typeof v.then=="function")return h(s,c,p,mi(v),b);if(v.$$typeof===Ye)return h(s,c,p,pi(c,v),b);hi(c,v)}return null}function S(s,c,p,v){for(var b=null,A=null,x=c,M=c=0,D=null;x!==null&&M<p.length;M++){x.index>M?(D=x,x=null):D=x.sibling;var j=m(s,x,p[M],v);if(j===null){x===null&&(x=D);break}t&&x&&j.alternate===null&&e(s,x),c=i(j,c,M),A===null?b=j:A.sibling=j,A=j,x=D}if(M===p.length)return a(s,x),Q&&Re(s,M),b;if(x===null){for(;M<p.length;M++)x=y(s,p[M],v),x!==null&&(c=i(x,c,M),A===null?b=x:A.sibling=x,A=x);return Q&&Re(s,M),b}for(x=l(x);M<p.length;M++)D=h(x,s,M,p[M],v),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?M:D.key),c=i(D,c,M),A===null?b=D:A.sibling=D,A=D);return t&&x.forEach(function(K){return e(s,K)}),Q&&Re(s,M),b}function E(s,c,p,v){if(p==null)throw Error(z(151));for(var b=null,A=null,x=c,M=c=0,D=null,j=p.next();x!==null&&!j.done;M++,j=p.next()){x.index>M?(D=x,x=null):D=x.sibling;var K=m(s,x,j.value,v);if(K===null){x===null&&(x=D);break}t&&x&&K.alternate===null&&e(s,x),c=i(K,c,M),A===null?b=K:A.sibling=K,A=K,x=D}if(j.done)return a(s,x),Q&&Re(s,M),b;if(x===null){for(;!j.done;M++,j=p.next())j=y(s,j.value,v),j!==null&&(c=i(j,c,M),A===null?b=j:A.sibling=j,A=j);return Q&&Re(s,M),b}for(x=l(x);!j.done;M++,j=p.next())j=h(x,s,M,j.value,v),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?M:j.key),c=i(j,c,M),A===null?b=j:A.sibling=j,A=j);return t&&x.forEach(function(et){return e(s,et)}),Q&&Re(s,M),b}function _(s,c,p,v){if(typeof p=="object"&&p!==null&&p.type===il&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ri:t:{for(var b=p.key;c!==null;){if(c.key===b){if(b=p.type,b===il){if(c.tag===7){a(s,c.sibling),v=n(c,p.props.children),v.return=s,s=v;break t}}else if(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ta&&Oa(b)===c.type){a(s,c.sibling),v=n(c,p.props),en(v,p),v.return=s,s=v;break t}a(s,c);break}else e(s,c);c=c.sibling}p.type===il?(v=Ua(p.props.children,s.mode,v,p.key),v.return=s,s=v):(v=Mi(p.type,p.key,p.props,null,s.mode,v),en(v,p),v.return=s,s=v)}return u(s);case un:t:{for(b=p.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){a(s,c.sibling),v=n(c,p.children||[]),v.return=s,s=v;break t}else{a(s,c);break}else e(s,c);c=c.sibling}v=sr(p,s.mode,v),v.return=s,s=v}return u(s);case ta:return p=Oa(p),_(s,c,p,v)}if(rn(p))return S(s,c,p,v);if(Il(p)){if(b=Il(p),typeof b!="function")throw Error(z(150));return p=b.call(p),E(s,c,p,v)}if(typeof p.then=="function")return _(s,c,mi(p),v);if(p.$$typeof===Ye)return _(s,c,pi(s,p),v);hi(s,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(a(s,c.sibling),v=n(c,p),v.return=s,s=v):(a(s,c),v=cr(p,s.mode,v),v.return=s,s=v),u(s)):a(s,c)}return function(s,c,p,v){try{Hn=0;var b=_(s,c,p,v);return Al=null,b}catch(x){if(x===Vl||x===Ou)throw x;var A=Wt(29,x,null,s.mode);return A.lanes=v,A.return=s,A}finally{}}}var Xa=Pd(!0),t0=Pd(!1),ea=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ha(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,$&2){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=$i(t),Zd(t,null,a),e}return _u(t,l,e,a),$i(t)}function yn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,vd(t,a)}}function dr(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var so=!1;function vn(){if(so){var t=zl;if(t!==null)throw t}}function xn(t,e,a,l){so=!1;var n=t.updateQueue;ea=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var o=r,f=o.next;o.next=null,u===null?i=f:u.next=f,u=o;var g=t.alternate;g!==null&&(g=g.updateQueue,r=g.lastBaseUpdate,r!==u&&(r===null?g.firstBaseUpdate=f:r.next=f,g.lastBaseUpdate=o))}if(i!==null){var y=n.baseState;u=0,g=f=o=null,r=i;do{var m=r.lane&-536870913,h=m!==r.lane;if(h?(L&m)===m:(l&m)===m){m!==0&&m===_l&&(so=!0),g!==null&&(g=g.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var S=t,E=r;m=e;var _=a;switch(E.tag){case 1:if(S=E.payload,typeof S=="function"){y=S.call(_,y,m);break t}y=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,m=typeof S=="function"?S.call(_,y,m):S,m==null)break t;y=ct({},y,m);break t;case 2:ea=!0}}m=r.callback,m!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[m]:h.push(m))}else h={lane:m,tag:r.tag,payload:r.payload,callback:r.callback,next:null},g===null?(f=g=h,o=y):g=g.next=h,u|=m;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;h=r,r=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(o=y),n.baseState=o,n.firstBaseUpdate=f,n.lastBaseUpdate=g,i===null&&(n.shared.lanes=0),Ea|=u,t.lanes=u,t.memoizedState=y}}function e0(t,e){if(typeof t!="function")throw Error(z(191,t));t.call(e)}function a0(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)e0(a[t],e)}var Ol=Te(null),Pi=Te(0);function Us(t,e){t=$e,nt(Pi,t),nt(Ol,e),$e=t|e.baseLanes}function fo(){nt(Pi,$e),nt(Ol,Ol.current)}function vc(){$e=Pi.current,Tt(Ol),Tt(Pi)}var ne=Te(null),de=null;function la(t){var e=t.alternate;nt(pt,pt.current&1),nt(ne,t),de===null&&(e===null||Ol.current!==null||e.memoizedState!==null)&&(de=t)}function po(t){nt(pt,pt.current),nt(ne,t),de===null&&(de=t)}function l0(t){t.tag===22?(nt(pt,pt.current),nt(ne,t),de===null&&(de=t)):na()}function na(){nt(pt,pt.current),nt(ne,ne.current)}function Ft(t){Tt(ne),de===t&&(de=null),Tt(pt)}var pt=Te(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Co(a)||Ho(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ve=0,Y=null,tt=null,ht=null,eu=!1,El=!1,ka=!1,au=0,Nn=0,Tl=null,rg=0;function ft(){throw Error(z(321))}function xc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!le(t[a],e[a]))return!1;return!0}function bc(t,e,a,l,n,i){return Ve=i,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,H.H=t===null||t.memoizedState===null?N0:Oc,ka=!1,i=a(l,n),ka=!1,El&&(i=i0(e,a,l,n)),n0(t),i}function n0(t){H.H=Un;var e=tt!==null&&tt.next!==null;if(Ve=0,ht=tt=Y=null,eu=!1,Nn=0,Tl=null,e)throw Error(z(300));t===null||xt||(t=t.dependencies,t!==null&&Wi(t)&&(xt=!0))}function i0(t,e,a,l){Y=t;var n=0;do{if(El&&(Tl=null),Nn=0,El=!1,25<=n)throw Error(z(301));if(n+=1,ht=tt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=U0,i=e(a,l)}while(El);return i}function og(){var t=H.H,e=t.useState()[0];return e=typeof e.then=="function"?Wn(e):e,t=t.useState()[0],(tt!==null?tt.memoizedState:null)!==t&&(Y.flags|=1024),e}function Sc(){var t=au!==0;return au=0,t}function wc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function zc(t){if(eu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}eu=!1}Ve=0,ht=tt=Y=null,El=!1,Nn=au=0,Tl=null}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Y.memoizedState=ht=t:ht=ht.next=t,ht}function mt(){if(tt===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ht===null?Y.memoizedState:ht.next;if(e!==null)ht=e,tt=t;else{if(t===null)throw Y.alternate===null?Error(z(467)):Error(z(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ht===null?Y.memoizedState=ht=t:ht=ht.next=t}return ht}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wn(t){var e=Nn;return Nn+=1,Tl===null&&(Tl=[]),t=Id(Tl,t,e),e=Y,(ht===null?e.memoizedState:ht.next)===null&&(e=e.alternate,H.H=e===null||e.memoizedState===null?N0:Oc),t}function Hu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wn(t);if(t.$$typeof===Ye)return Ot(t)}throw Error(z(438,String(t)))}function Ac(t){var e=null,a=Y.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Cu(),Y.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Km;return e.index++,a}function Ke(t,e){return typeof e=="function"?e(t):e}function Di(t){var e=mt();return Ec(e,tt,t)}function Ec(t,e,a){var l=t.queue;if(l===null)throw Error(z(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var r=u=null,o=null,f=e,g=!1;do{var y=f.lane&-536870913;if(y!==f.lane?(L&y)===y:(Ve&y)===y){var m=f.revertLane;if(m===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),y===_l&&(g=!0);else if((Ve&m)===m){f=f.next,m===_l&&(g=!0);continue}else y={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},o===null?(r=o=y,u=i):o=o.next=y,Y.lanes|=m,Ea|=m;y=f.action,ka&&a(i,y),i=f.hasEagerState?f.eagerState:a(i,y)}else m={lane:y,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},o===null?(r=o=m,u=i):o=o.next=m,Y.lanes|=y,Ea|=y;f=f.next}while(f!==null&&f!==e);if(o===null?u=i:o.next=r,!le(i,t.memoizedState)&&(xt=!0,g&&(a=zl,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=o,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function pr(t){var e=mt(),a=e.queue;if(a===null)throw Error(z(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);le(i,e.memoizedState)||(xt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function u0(t,e,a){var l=Y,n=mt(),i=Q;if(i){if(a===void 0)throw Error(z(407));a=a()}else a=e();var u=!le((tt||n).memoizedState,a);if(u&&(n.memoizedState=a,xt=!0),n=n.queue,Tc(c0.bind(null,l,n,t),[t]),n.getSnapshot!==e||u||ht!==null&&ht.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},o0.bind(null,l,n,a,e),null),lt===null)throw Error(z(349));i||Ve&127||r0(l,e,a)}return a}function r0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Y.updateQueue,e===null?(e=Cu(),Y.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function o0(t,e,a,l){e.value=a,e.getSnapshot=l,s0(e)&&f0(t)}function c0(t,e,a){return a(function(){s0(e)&&f0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!le(t,a)}catch{return!0}}function f0(t){var e=Ja(t,2);e!==null&&Zt(e,t,2)}function mo(t){var e=Bt();if(typeof t=="function"){var a=t;if(t=a(),ka){ua(!0);try{a()}finally{ua(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:t},e}function d0(t,e,a,l){return t.baseState=a,Ec(t,tt,typeof l=="function"?l:Ke)}function cg(t,e,a,l,n){if(Uu(t))throw Error(z(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};H.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,p0(e,i)):(i.next=a.next,e.pending=a.next=i)}}function p0(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=H.T,u={};H.T=u;try{var r=a(n,l),o=H.S;o!==null&&o(u,r),Rs(t,e,r)}catch(f){ho(t,e,f)}finally{i!==null&&u.types!==null&&(i.types=u.types),H.T=i}}else try{i=a(n,l),Rs(t,e,i)}catch(f){ho(t,e,f)}}function Rs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Bs(t,e,l)},function(l){return ho(t,e,l)}):Bs(t,e,a)}function Bs(t,e,a){e.status="fulfilled",e.value=a,m0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,p0(t,a)))}function ho(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,m0(e),e=e.next;while(e!==l)}t.action=null}function m0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function h0(t,e){return e}function Ys(t,e){if(Q){var a=lt.formState;if(a!==null){t:{var l=Y;if(Q){if(rt){e:{for(var n=rt,i=fe;n.nodeType!==8;){if(!i){n=null;break e}if(n=pe(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){rt=pe(n.nextSibling),l=n.data==="F!";break t}}za(l)}l=!1}l&&(e=a[0])}}return a=Bt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h0,lastRenderedState:e},a.queue=l,a=O0.bind(null,Y,l),l.dispatch=a,l=mo(!1),i=_c.bind(null,Y,!1,l.queue),l=Bt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=cg.bind(null,Y,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Gs(t){var e=mt();return g0(e,tt,t)}function g0(t,e,a){if(e=Ec(t,e,h0)[0],t=Di(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Wn(e)}catch(u){throw u===Vl?Ou:u}else l=e;e=mt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(Y.flags|=2048,Cl(9,{destroy:void 0},sg.bind(null,n,a),null)),[l,i,t]}function sg(t,e){t.action=e}function qs(t){var e=mt(),a=tt;if(a!==null)return g0(e,a,t);mt(),e=e.memoizedState,a=mt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Cl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=Y.updateQueue,e===null&&(e=Cu(),Y.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function y0(){return mt().memoizedState}function _i(t,e,a,l){var n=Bt();Y.flags|=t,n.memoizedState=Cl(1|e,{destroy:void 0},a,l===void 0?null:l)}function Nu(t,e,a,l){var n=mt();l=l===void 0?null:l;var i=n.memoizedState.inst;tt!==null&&l!==null&&xc(l,tt.memoizedState.deps)?n.memoizedState=Cl(e,i,a,l):(Y.flags|=t,n.memoizedState=Cl(1|e,i,a,l))}function Xs(t,e){_i(8390656,8,t,e)}function Tc(t,e){Nu(2048,8,t,e)}function fg(t){Y.flags|=4;var e=Y.updateQueue;if(e===null)e=Cu(),Y.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function v0(t){var e=mt().memoizedState;return fg({ref:e,nextImpl:t}),function(){if($&2)throw Error(z(440));return e.impl.apply(void 0,arguments)}}function x0(t,e){return Nu(4,2,t,e)}function b0(t,e){return Nu(4,4,t,e)}function S0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w0(t,e,a){a=a!=null?a.concat([t]):null,Nu(4,4,S0.bind(null,e,t),a)}function Mc(){}function z0(t,e){var a=mt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&xc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function A0(t,e){var a=mt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&xc(e,l[1]))return l[0];if(l=t(),ka){ua(!0);try{t()}finally{ua(!1)}}return a.memoizedState=[l,e],l}function jc(t,e,a){return a===void 0||Ve&1073741824&&!(L&261930)?t.memoizedState=e:(t.memoizedState=a,t=dp(),Y.lanes|=t,Ea|=t,a)}function E0(t,e,a,l){return le(a,e)?a:Ol.current!==null?(t=jc(t,a,l),le(t,e)||(xt=!0),t):!(Ve&42)||Ve&1073741824&&!(L&261930)?(xt=!0,t.memoizedState=a):(t=dp(),Y.lanes|=t,Ea|=t,e)}function T0(t,e,a,l,n){var i=F.p;F.p=i!==0&&8>i?i:8;var u=H.T,r={};H.T=r,_c(t,!1,e,a);try{var o=n(),f=H.S;if(f!==null&&f(r,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var g=ug(o,l);bn(t,e,g,ae(t))}else bn(t,e,l,ae(t))}catch(y){bn(t,e,{then:function(){},status:"rejected",reason:y},ae())}finally{F.p=i,u!==null&&r.types!==null&&(u.types=r.types),H.T=u}}function dg(){}function go(t,e,a,l){if(t.tag!==5)throw Error(z(476));var n=M0(t).queue;T0(t,n,e,Na,a===null?dg:function(){return j0(t),a(l)})}function M0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Na,baseState:Na,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:Na},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function j0(t){var e=M0(t);e.next===null&&(e=t.alternate.memoizedState),bn(t,e.next.queue,{},ae())}function Dc(){return Ot(Yn)}function D0(){return mt().memoizedState}function _0(){return mt().memoizedState}function pg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ae();t=ma(a);var l=ha(e,t,a);l!==null&&(Zt(l,e,a),yn(l,e,a)),e={cache:mc()},t.payload=e;return}e=e.return}}function mg(t,e,a){var l=ae();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(t)?C0(e,a):(a=sc(t,e,a,l),a!==null&&(Zt(a,t,l),H0(a,e,l)))}function O0(t,e,a){var l=ae();bn(t,e,a,l)}function bn(t,e,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(t))C0(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,r=i(u,a);if(n.hasEagerState=!0,n.eagerState=r,le(r,u))return _u(t,e,n,0),lt===null&&Du(),!1}catch{}finally{}if(a=sc(t,e,n,l),a!==null)return Zt(a,t,l),H0(a,e,l),!0}return!1}function _c(t,e,a,l){if(l={lane:2,revertLane:Gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Uu(t)){if(e)throw Error(z(479))}else e=sc(t,a,l,2),e!==null&&Zt(e,t,2)}function Uu(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function C0(t,e){El=eu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function H0(t,e,a){if(a&4194048){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,vd(t,a)}}var Un={readContext:Ot,use:Hu,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};Un.useEffectEvent=ft;var N0={readContext:Ot,use:Hu,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Xs,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,_i(4194308,4,S0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return _i(4194308,4,t,e)},useInsertionEffect:function(t,e){_i(4,2,t,e)},useMemo:function(t,e){var a=Bt();e=e===void 0?null:e;var l=t();if(ka){ua(!0);try{t()}finally{ua(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Bt();if(a!==void 0){var n=a(e);if(ka){ua(!0);try{a(e)}finally{ua(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=mg.bind(null,Y,t),[l.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:function(t){t=mo(t);var e=t.queue,a=O0.bind(null,Y,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Mc,useDeferredValue:function(t,e){var a=Bt();return jc(a,t,e)},useTransition:function(){var t=mo(!1);return t=T0.bind(null,Y,t.queue,!0,!1),Bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=Y,n=Bt();if(Q){if(a===void 0)throw Error(z(407));a=a()}else{if(a=e(),lt===null)throw Error(z(349));L&127||r0(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Xs(c0.bind(null,l,i,t),[t]),l.flags|=2048,Cl(9,{destroy:void 0},o0.bind(null,l,i,a,e),null),a},useId:function(){var t=Bt(),e=lt.identifierPrefix;if(Q){var a=ze,l=we;a=(l&~(1<<32-ee(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=au++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=rg++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Dc,useFormState:Ys,useActionState:Ys,useOptimistic:function(t){var e=Bt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=_c.bind(null,Y,!0,a),a.dispatch=e,[t,e]},useMemoCache:Ac,useCacheRefresh:function(){return Bt().memoizedState=pg.bind(null,Y)},useEffectEvent:function(t){var e=Bt(),a={impl:t};return e.memoizedState=a,function(){if($&2)throw Error(z(440));return a.impl.apply(void 0,arguments)}}},Oc={readContext:Ot,use:Hu,useCallback:z0,useContext:Ot,useEffect:Tc,useImperativeHandle:w0,useInsertionEffect:x0,useLayoutEffect:b0,useMemo:A0,useReducer:Di,useRef:y0,useState:function(){return Di(Ke)},useDebugValue:Mc,useDeferredValue:function(t,e){var a=mt();return E0(a,tt.memoizedState,t,e)},useTransition:function(){var t=Di(Ke)[0],e=mt().memoizedState;return[typeof t=="boolean"?t:Wn(t),e]},useSyncExternalStore:u0,useId:D0,useHostTransitionStatus:Dc,useFormState:Gs,useActionState:Gs,useOptimistic:function(t,e){var a=mt();return d0(a,tt,t,e)},useMemoCache:Ac,useCacheRefresh:_0};Oc.useEffectEvent=v0;var U0={readContext:Ot,use:Hu,useCallback:z0,useContext:Ot,useEffect:Tc,useImperativeHandle:w0,useInsertionEffect:x0,useLayoutEffect:b0,useMemo:A0,useReducer:pr,useRef:y0,useState:function(){return pr(Ke)},useDebugValue:Mc,useDeferredValue:function(t,e){var a=mt();return tt===null?jc(a,t,e):E0(a,tt.memoizedState,t,e)},useTransition:function(){var t=pr(Ke)[0],e=mt().memoizedState;return[typeof t=="boolean"?t:Wn(t),e]},useSyncExternalStore:u0,useId:D0,useHostTransitionStatus:Dc,useFormState:qs,useActionState:qs,useOptimistic:function(t,e){var a=mt();return tt!==null?d0(a,tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ac,useCacheRefresh:_0};U0.useEffectEvent=v0;function mr(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:ct({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yo={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ae(),n=ma(l);n.payload=e,a!=null&&(n.callback=a),e=ha(t,n,l),e!==null&&(Zt(e,t,l),yn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ae(),n=ma(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ha(t,n,l),e!==null&&(Zt(e,t,l),yn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ae(),l=ma(a);l.tag=2,e!=null&&(l.callback=e),e=ha(t,l,a),e!==null&&(Zt(e,t,a),yn(e,t,a))}};function ks(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!_n(a,l)||!_n(n,i):!0}function Ls(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&yo.enqueueReplaceState(e,e.state,null)}function La(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=ct({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function R0(t){Ji(t)}function B0(t){console.error(t)}function Y0(t){Ji(t)}function lu(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Qs(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function vo(t,e,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){lu(t,e)},a}function G0(t){return t=ma(t),t.tag=3,t}function q0(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Qs(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Qs(e,a,l),typeof n!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function hg(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&Zl(e,a,n,!0),a=ne.current,a!==null){switch(a.tag){case 31:case 13:return de===null?ou():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Ii?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Er(t,l,n)),!1;case 22:return a.flags|=65536,l===Ii?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Er(t,l,n)),!1}throw Error(z(435,a.tag))}return Er(t,l,n),ou(),!1}if(Q)return e=ne.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==no&&(t=Error(z(422),{cause:l}),Cn(se(t,a)))):(l!==no&&(e=Error(z(423),{cause:l}),Cn(se(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=se(l,a),n=vo(t.stateNode,l,n),dr(t,n),dt!==4&&(dt=2)),!1;var i=Error(z(520),{cause:l});if(i=se(i,a),zn===null?zn=[i]:zn.push(i),dt!==4&&(dt=2),e===null)return!0;l=se(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=vo(a.stateNode,l,t),dr(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ga===null||!ga.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=G0(n),q0(n,t,a,l),dr(a,n),!1}a=a.return}while(a!==null);return!1}var Cc=Error(z(461)),xt=!1;function jt(t,e,a,l){e.child=t===null?t0(e,null,a,l):Xa(e,t.child,a,l)}function Zs(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var r in l)r!=="ref"&&(u[r]=l[r])}else u=l;return qa(e),l=bc(t,e,a,u,i,n),r=Sc(),t!==null&&!xt?(wc(t,e,n),Je(t,e,n)):(Q&&r&&dc(e),e.flags|=1,jt(t,e,l,n),e.child)}function Vs(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!fc(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,X0(t,e,i,l,n)):(t=Mi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Hc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:_n,a(u,l)&&t.ref===e.ref)return Je(t,e,n)}return e.flags|=1,t=Xe(i,l),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(_n(i,l)&&t.ref===e.ref)if(xt=!1,e.pendingProps=l=i,Hc(t,n))t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Je(t,e,n)}return xo(t,e,a,l,n)}function k0(t,e,a,l){var n=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(e.flags&128){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,e.child=null;return Ks(t,e,i,a,l)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ji(e,i!==null?i.cachePool:null),i!==null?Us(e,i):fo(),l0(e);else return l=e.lanes=536870912,Ks(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(ji(e,i.cachePool),Us(e,i),na(),e.memoizedState=null):(t!==null&&ji(e,null),fo(),na());return jt(t,e,n,a),e.child}function cn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ks(t,e,a,l,n){var i=hc();return i=i===null?null:{parent:yt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&ji(e,null),fo(),l0(e),t!==null&&Zl(t,e,l,!0),e.childLanes=n,null}function Oi(t,e){return e=nu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Js(t,e,a){return Xa(e,t.child,null,a),t=Oi(e,e.pendingProps),t.flags|=2,Ft(e),e.memoizedState=null,t}function gg(t,e,a){var l=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Q){if(l.mode==="hidden")return t=Oi(e,l),e.lanes=536870912,cn(null,t);if(po(e),(t=rt)?(t=Np(t,fe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:wa!==null?{id:we,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=e,e.child=a,_t=e,rt=null)):t=null,t===null)throw za(e);return e.lanes=536870912,null}return Oi(e,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(po(e),n)if(e.flags&256)e.flags&=-257,e=Js(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(z(558));else if(xt||Zl(t,e,a,!1),n=(a&t.childLanes)!==0,xt||n){if(l=lt,l!==null&&(u=xd(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ja(t,u),Zt(l,t,u),Cc;ou(),e=Js(t,e,a)}else t=i.treeContext,rt=pe(u.nextSibling),_t=e,Q=!0,pa=null,fe=!1,t!==null&&$d(e,t),e=Oi(e,l),e.flags|=4096;return e}return t=Xe(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ci(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(z(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function xo(t,e,a,l,n){return qa(e),a=bc(t,e,a,l,void 0,n),l=Sc(),t!==null&&!xt?(wc(t,e,n),Je(t,e,n)):(Q&&l&&dc(e),e.flags|=1,jt(t,e,a,n),e.child)}function $s(t,e,a,l,n,i){return qa(e),e.updateQueue=null,a=i0(e,l,a,n),n0(t),l=Sc(),t!==null&&!xt?(wc(t,e,i),Je(t,e,i)):(Q&&l&&dc(e),e.flags|=1,jt(t,e,a,i),e.child)}function Fs(t,e,a,l,n){if(qa(e),e.stateNode===null){var i=pl,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ot(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yo,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},yc(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ot(u):pl,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(mr(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&yo.enqueueReplaceState(i,i.state,null),xn(e,l,i,n),vn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,o=La(a,r);i.props=o;var f=i.context,g=a.contextType;u=pl,typeof g=="object"&&g!==null&&(u=Ot(g));var y=a.getDerivedStateFromProps;g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||f!==u)&&Ls(e,i,l,u),ea=!1;var m=e.memoizedState;i.state=m,xn(e,l,i,n),vn(),f=e.memoizedState,r||m!==f||ea?(typeof y=="function"&&(mr(e,a,y,l),f=e.memoizedState),(o=ea||ks(e,a,o,l,m,f,u))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=f),i.props=l,i.state=f,i.context=u,l=o):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,co(t,e),u=e.memoizedProps,g=La(a,u),i.props=g,y=e.pendingProps,m=i.context,f=a.contextType,o=pl,typeof f=="object"&&f!==null&&(o=Ot(f)),r=a.getDerivedStateFromProps,(f=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||m!==o)&&Ls(e,i,l,o),ea=!1,m=e.memoizedState,i.state=m,xn(e,l,i,n),vn();var h=e.memoizedState;u!==y||m!==h||ea||t!==null&&t.dependencies!==null&&Wi(t.dependencies)?(typeof r=="function"&&(mr(e,a,r,l),h=e.memoizedState),(g=ea||ks(e,a,g,l,m,h,o)||t!==null&&t.dependencies!==null&&Wi(t.dependencies))?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=h),i.props=l,i.state=h,i.context=o,l=g):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Ci(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=Xa(e,t.child,null,n),e.child=Xa(e,null,a,n)):jt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Je(t,e,n),t}function Ws(t,e,a,l){return Ga(),e.flags|=256,jt(t,e,a,l),e.child}var hr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gr(t){return{baseLanes:t,cachePool:Wd()}}function yr(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=It),t}function L0(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(pt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(Q){if(n?la(e):na(),(t=rt)?(t=Np(t,fe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:wa!==null?{id:we,overflow:ze}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=e,e.child=a,_t=e,rt=null)):t=null,t===null)throw za(e);return Ho(t)?e.lanes=32:e.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(na(),n=e.mode,r=nu({mode:"hidden",children:r},n),l=Ua(l,n,a,null),r.return=e,l.return=e,r.sibling=l,e.child=r,l=e.child,l.memoizedState=gr(a),l.childLanes=yr(t,u,a),e.memoizedState=hr,cn(null,l)):(la(e),bo(e,r))}var o=t.memoizedState;if(o!==null&&(r=o.dehydrated,r!==null)){if(i)e.flags&256?(la(e),e.flags&=-257,e=vr(t,e,a)):e.memoizedState!==null?(na(),e.child=t.child,e.flags|=128,e=null):(na(),r=l.fallback,n=e.mode,l=nu({mode:"visible",children:l.children},n),r=Ua(r,n,a,null),r.flags|=2,l.return=e,r.return=e,l.sibling=r,e.child=l,Xa(e,t.child,null,a),l=e.child,l.memoizedState=gr(a),l.childLanes=yr(t,u,a),e.memoizedState=hr,e=cn(null,l));else if(la(e),Ho(r)){if(u=r.nextSibling&&r.nextSibling.dataset,u)var f=u.dgst;u=f,l=Error(z(419)),l.stack="",l.digest=u,Cn({value:l,source:null,stack:null}),e=vr(t,e,a)}else if(xt||Zl(t,e,a,!1),u=(a&t.childLanes)!==0,xt||u){if(u=lt,u!==null&&(l=xd(u,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,Ja(t,l),Zt(u,t,l),Cc;Co(r)||ou(),e=vr(t,e,a)}else Co(r)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,rt=pe(r.nextSibling),_t=e,Q=!0,pa=null,fe=!1,t!==null&&$d(e,t),e=bo(e,l.children),e.flags|=4096);return e}return n?(na(),r=l.fallback,n=e.mode,o=t.child,f=o.sibling,l=Xe(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,f!==null?r=Xe(f,r):(r=Ua(r,n,a,null),r.flags|=2),r.return=e,l.return=e,l.sibling=r,e.child=l,cn(null,l),l=e.child,r=t.child.memoizedState,r===null?r=gr(a):(n=r.cachePool,n!==null?(o=yt._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Wd(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=yr(t,u,a),e.memoizedState=hr,cn(t.child,l)):(la(e),a=t.child,t=a.sibling,a=Xe(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function bo(t,e){return e=nu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nu(t,e){return t=Wt(22,t,null,e),t.lanes=0,t}function vr(t,e,a){return Xa(e,t.child,null,a),t=bo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Is(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),uo(t.return,e,a)}function xr(t,e,a,l,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Q0(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=pt.current,r=(u&2)!==0;if(r?(u=u&1|2,e.flags|=128):u&=1,nt(pt,u),jt(t,e,l,a),l=Q?On:0,!r&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Is(t,a,e);else if(t.tag===19)Is(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&tu(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),xr(e,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&tu(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}xr(e,!0,a,null,i,l);break;case"together":xr(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Je(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ea|=e.lanes,!(a&e.childLanes))if(t!==null){if(Zl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,a=Xe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Xe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Hc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Wi(t)))}function yg(t,e,a){switch(e.tag){case 3:Qi(e,e.stateNode.containerInfo),aa(e,yt,t.memoizedState.cache),Ga();break;case 27:case 5:Kr(e);break;case 4:Qi(e,e.stateNode.containerInfo);break;case 10:aa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,po(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(la(e),e.flags|=128,null):a&e.child.childLanes?L0(t,e,a):(la(e),t=Je(t,e,a),t!==null?t.sibling:null);la(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(Zl(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Q0(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),nt(pt,pt.current),l)break;return null;case 22:return e.lanes=0,k0(t,e,a,e.pendingProps);case 24:aa(e,yt,t.memoizedState.cache)}return Je(t,e,a)}function Z0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)xt=!0;else{if(!Hc(t,a)&&!(e.flags&128))return xt=!1,yg(t,e,a);xt=!!(t.flags&131072)}else xt=!1,Q&&e.flags&1048576&&Jd(e,On,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Oa(e.elementType),e.type=t,typeof t=="function")fc(t)?(l=La(t,l),e.tag=1,e=Fs(null,e,t,l,a)):(e.tag=0,e=xo(null,e,t,l,a));else{if(t!=null){var n=t.$$typeof;if(n===Wo){e.tag=11,e=Zs(null,e,t,l,a);break t}else if(n===Io){e.tag=14,e=Vs(null,e,t,l,a);break t}}throw e=Zr(t)||t,Error(z(306,e,""))}}return e;case 0:return xo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=La(l,e.pendingProps),Fs(t,e,l,n,a);case 3:t:{if(Qi(e,e.stateNode.containerInfo),t===null)throw Error(z(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,co(t,e),xn(e,l,null,a);var u=e.memoizedState;if(l=u.cache,aa(e,yt,l),l!==i.cache&&ro(e,[yt],a,!0),vn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Ws(t,e,l,a);break t}else if(l!==n){n=se(Error(z(424)),e),Cn(n),e=Ws(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rt=pe(t.firstChild),_t=e,Q=!0,pa=null,fe=!0,a=t0(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ga(),l===n){e=Je(t,e,a);break t}jt(t,e,l,a)}e=e.child}return e;case 26:return Ci(t,e),t===null?(a=xf(e.type,null,e.pendingProps,null))?e.memoizedState=a:Q||(a=e.type,t=e.pendingProps,l=du(da.current).createElement(a),l[Dt]=e,l[Vt]=t,Ct(l,a,t),Et(l),e.stateNode=l):e.memoizedState=xf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Kr(e),t===null&&Q&&(l=e.stateNode=Up(e.type,e.pendingProps,da.current),_t=e,fe=!0,n=rt,Ma(e.type)?(No=n,rt=pe(l.firstChild)):rt=n),jt(t,e,e.pendingProps.children,a),Ci(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Q&&((n=l=rt)&&(l=Kg(l,e.type,e.pendingProps,fe),l!==null?(e.stateNode=l,_t=e,rt=pe(l.firstChild),fe=!1,n=!0):n=!1),n||za(e)),Kr(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,_o(n,i)?l=null:u!==null&&_o(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=bc(t,e,og,null,null,a),Yn._currentValue=n),Ci(t,e),jt(t,e,l,a),e.child;case 6:return t===null&&Q&&((t=a=rt)&&(a=Jg(a,e.pendingProps,fe),a!==null?(e.stateNode=a,_t=e,rt=null,t=!0):t=!1),t||za(e)),null;case 13:return L0(t,e,a);case 4:return Qi(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Xa(e,null,l,a):jt(t,e,l,a),e.child;case 11:return Zs(t,e,e.type,e.pendingProps,a);case 7:return jt(t,e,e.pendingProps,a),e.child;case 8:return jt(t,e,e.pendingProps.children,a),e.child;case 12:return jt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,aa(e,e.type,l.value),jt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,qa(e),n=Ot(n),l=l(n),e.flags|=1,jt(t,e,l,a),e.child;case 14:return Vs(t,e,e.type,e.pendingProps,a);case 15:return X0(t,e,e.type,e.pendingProps,a);case 19:return Q0(t,e,a);case 31:return gg(t,e,a);case 22:return k0(t,e,a,e.pendingProps);case 24:return qa(e),l=Ot(yt),t===null?(n=hc(),n===null&&(n=lt,i=mc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},yc(e),aa(e,yt,n)):(t.lanes&a&&(co(t,e),xn(e,null,null,a),vn()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),aa(e,yt,l)):(l=i.cache,aa(e,yt,l),l!==n.cache&&ro(e,[yt],a,!0))),jt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(z(156,e.tag))}function Oe(t){t.flags|=4}function br(t,e,a,l,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(hp())t.flags|=8192;else throw Ba=Ii,gc}else t.flags&=-16777217}function Ps(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Yp(e))if(hp())t.flags|=8192;else throw Ba=Ii,gc}function gi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?gd():536870912,t.lanes|=e,Hl|=e)}function an(t,e){if(!Q)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function vg(t,e,a){var l=e.pendingProps;switch(pc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return it(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ke(yt),Ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?Oe(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fr())),it(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Oe(e),i!==null?(it(e),Ps(e,i)):(it(e),br(e,n,null,l,a))):i?i!==t.memoizedState?(Oe(e),it(e),Ps(e,i)):(it(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Oe(e),it(e),br(e,n,t,l,a)),null;case 27:if(Zi(e),a=da.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Oe(e);else{if(!l){if(e.stateNode===null)throw Error(z(166));return it(e),null}t=Ee.current,Pa(e)?js(e):(t=Up(n,l,a),e.stateNode=t,Oe(e))}return it(e),null;case 5:if(Zi(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Oe(e);else{if(!l){if(e.stateNode===null)throw Error(z(166));return it(e),null}if(i=Ee.current,Pa(e))js(e);else{var u=du(da.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[Dt]=e,i[Vt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(Ct(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Oe(e)}}return it(e),br(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Oe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(z(166));if(t=da.current,Pa(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=_t,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Dt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Op(t.nodeValue,a)),t||za(e,!0)}else t=du(t).createTextNode(l),t[Dt]=e,e.stateNode=t}return it(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Pa(e),a!==null){if(t===null){if(!l)throw Error(z(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(557));t[Dt]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),t=!1}else a=fr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ft(e),e):(Ft(e),null);if(e.flags&128)throw Error(z(558))}return it(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Pa(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(z(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(z(317));n[Dt]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;it(e),n=!1}else n=fr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ft(e),e):(Ft(e),null)}return Ft(e),e.flags&128?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),gi(e,e.updateQueue),it(e),null);case 4:return Ml(),t===null&&qc(e.stateNode.containerInfo),it(e),null;case 10:return ke(e.type),it(e),null;case 19:if(Tt(pt),l=e.memoizedState,l===null)return it(e),null;if(n=(e.flags&128)!==0,i=l.rendering,i===null)if(n)an(l,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=tu(t),i!==null){for(e.flags|=128,an(l,!1),t=i.updateQueue,e.updateQueue=t,gi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Vd(a,t),a=a.sibling;return nt(pt,pt.current&1|2),Q&&Re(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&Pt()>uu&&(e.flags|=128,n=!0,an(l,!1),e.lanes=4194304)}else{if(!n)if(t=tu(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,gi(e,t),an(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Q)return it(e),null}else 2*Pt()-l.renderingStartTime>uu&&a!==536870912&&(e.flags|=128,n=!0,an(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Pt(),t.sibling=null,a=pt.current,nt(pt,n?a&1|2:a&1),Q&&Re(e,l.treeForkCount),t):(it(e),null);case 22:case 23:return Ft(e),vc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?a&536870912&&!(e.flags&128)&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),a=e.updateQueue,a!==null&&gi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&Tt(Ra),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ke(yt),it(e),null;case 25:return null;case 30:return null}throw Error(z(156,e.tag))}function xg(t,e){switch(pc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ke(yt),Ml(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Zi(e),null;case 31:if(e.memoizedState!==null){if(Ft(e),e.alternate===null)throw Error(z(340));Ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ft(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(pt),null;case 4:return Ml(),null;case 10:return ke(e.type),null;case 22:case 23:return Ft(e),vc(),t!==null&&Tt(Ra),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ke(yt),null;case 25:return null;default:return null}}function V0(t,e){switch(pc(e),e.tag){case 3:ke(yt),Ml();break;case 26:case 27:case 5:Zi(e);break;case 4:Ml();break;case 31:e.memoizedState!==null&&Ft(e);break;case 13:Ft(e);break;case 19:Tt(pt);break;case 10:ke(e.type);break;case 22:case 23:Ft(e),vc(),t!==null&&Tt(Ra);break;case 24:ke(yt)}}function In(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(r){I(e,e.return,r)}}function Aa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=e;var o=a,f=r;try{f()}catch(g){I(n,o,g)}}}l=l.next}while(l!==i)}}catch(g){I(e,e.return,g)}}function K0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{a0(e,a)}catch(l){I(t,t.return,l)}}}function J0(t,e,a){a.props=La(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){I(t,e,l)}}function Sn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){I(t,e,n)}}function Ae(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){I(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){I(t,e,n)}else a.current=null}function $0(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){I(t,t.return,n)}}function Sr(t,e,a){try{var l=t.stateNode;Xg(l,t.type,a,e),l[Vt]=e}catch(n){I(t,t.return,n)}}function F0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function wr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function So(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ge));else if(l!==4&&(l===27&&Ma(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(So(t,e,a),t=t.sibling;t!==null;)So(t,e,a),t=t.sibling}function iu(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(iu(t,e,a),t=t.sibling;t!==null;)iu(t,e,a),t=t.sibling}function W0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ct(e,l,a),e[Dt]=t,e[Vt]=a}catch(i){I(t,t.return,i)}}var Be=!1,gt=!1,zr=!1,tf=typeof WeakSet=="function"?WeakSet:Set,At=null;function bg(t,e){if(t=t.containerInfo,jo=gu,t=Yd(t),oc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,r=-1,o=-1,f=0,g=0,y=t,m=null;e:for(;;){for(var h;y!==a||n!==0&&y.nodeType!==3||(r=u+n),y!==i||l!==0&&y.nodeType!==3||(o=u+l),y.nodeType===3&&(u+=y.nodeValue.length),(h=y.firstChild)!==null;)m=y,y=h;for(;;){if(y===t)break e;if(m===a&&++f===n&&(r=u),m===i&&++g===l&&(o=u),(h=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=h}a=r===-1||o===-1?null:{start:r,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Do={focusedElem:t,selectionRange:a},gu=!1,At=e;At!==null;)if(e=At,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,At=t;else for(;At!==null;){switch(e=At,i=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var S=La(a.type,n);t=l.getSnapshotBeforeUpdate(S,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(E){I(a,a.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Oo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(z(163))}if(t=e.sibling,t!==null){t.return=e.return,At=t;break}At=e.return}}function I0(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:He(t,a),l&4&&In(5,a);break;case 1:if(He(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){I(a,a.return,u)}else{var n=La(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){I(a,a.return,u)}}l&64&&K0(a),l&512&&Sn(a,a.return);break;case 3:if(He(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{a0(t,e)}catch(u){I(a,a.return,u)}}break;case 27:e===null&&l&4&&W0(a);case 26:case 5:He(t,a),e===null&&l&4&&$0(a),l&512&&Sn(a,a.return);break;case 12:He(t,a);break;case 31:He(t,a),l&4&&ep(t,a);break;case 13:He(t,a),l&4&&ap(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Dg.bind(null,a),$g(t,a))));break;case 22:if(l=a.memoizedState!==null||Be,!l){e=e!==null&&e.memoizedState!==null||gt,n=Be;var i=gt;Be=l,(gt=e)&&!i?Ne(t,a,(a.subtreeFlags&8772)!==0):He(t,a),Be=n,gt=i}break;case 30:break;default:He(t,a)}}function P0(t){var e=t.alternate;e!==null&&(t.alternate=null,P0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ac(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,Lt=!1;function Ce(t,e,a){for(a=a.child;a!==null;)tp(t,e,a),a=a.sibling}function tp(t,e,a){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(Zn,a)}catch{}switch(a.tag){case 26:gt||Ae(a,e),Ce(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||Ae(a,e);var l=st,n=Lt;Ma(a.type)&&(st=a.stateNode,Lt=!1),Ce(t,e,a),En(a.stateNode),st=l,Lt=n;break;case 5:gt||Ae(a,e);case 6:if(l=st,n=Lt,st=null,Ce(t,e,a),st=l,Lt=n,st!==null)if(Lt)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(a.stateNode)}catch(i){I(a,e,i)}else try{st.removeChild(a.stateNode)}catch(i){I(a,e,i)}break;case 18:st!==null&&(Lt?(t=st,mf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bl(t)):mf(st,a.stateNode));break;case 4:l=st,n=Lt,st=a.stateNode.containerInfo,Lt=!0,Ce(t,e,a),st=l,Lt=n;break;case 0:case 11:case 14:case 15:Aa(2,a,e),gt||Aa(4,a,e),Ce(t,e,a);break;case 1:gt||(Ae(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&J0(a,e,l)),Ce(t,e,a);break;case 21:Ce(t,e,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,Ce(t,e,a),gt=l;break;default:Ce(t,e,a)}}function ep(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bl(t)}catch(a){I(e,e.return,a)}}}function ap(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(a){I(e,e.return,a)}}function Sg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tf),e;default:throw Error(z(435,t.tag))}}function yi(t,e){var a=Sg(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var n=_g.bind(null,t,l);l.then(n,n)}})}function Xt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,r=u;t:for(;r!==null;){switch(r.tag){case 27:if(Ma(r.type)){st=r.stateNode,Lt=!1;break t}break;case 5:st=r.stateNode,Lt=!1;break t;case 3:case 4:st=r.stateNode.containerInfo,Lt=!0;break t}r=r.return}if(st===null)throw Error(z(160));tp(i,u,n),st=null,Lt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)lp(e,t),e=e.sibling}var ve=null;function lp(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xt(e,t),kt(t),l&4&&(Aa(3,t,t.return),In(3,t),Aa(5,t,t.return));break;case 1:Xt(e,t),kt(t),l&512&&(gt||a===null||Ae(a,a.return)),l&64&&Be&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=ve;if(Xt(e,t),kt(t),l&512&&(gt||a===null||Ae(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Jn]||i[Dt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ct(i,l,a),i[Dt]=t,Et(i),l=i;break t;case"link":var u=Sf("link","href",n).get(l+(a.href||""));if(u){for(var r=0;r<u.length;r++)if(i=u[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(r,1);break e}}i=n.createElement(l),Ct(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Sf("meta","content",n).get(l+(a.content||""))){for(r=0;r<u.length;r++)if(i=u[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(r,1);break e}}i=n.createElement(l),Ct(i,l,a),n.head.appendChild(i);break;default:throw Error(z(468,l))}i[Dt]=t,Et(i),l=i}t.stateNode=l}else wf(n,t.type,t.stateNode);else t.stateNode=bf(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?wf(n,t.type,t.stateNode):bf(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Sr(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xt(e,t),kt(t),l&512&&(gt||a===null||Ae(a,a.return)),a!==null&&l&4&&Sr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xt(e,t),kt(t),l&512&&(gt||a===null||Ae(a,a.return)),t.flags&32){n=t.stateNode;try{Dl(n,"")}catch(S){I(t,t.return,S)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Sr(t,n,a!==null?a.memoizedProps:n)),l&1024&&(zr=!0);break;case 6:if(Xt(e,t),kt(t),l&4){if(t.stateNode===null)throw Error(z(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(S){I(t,t.return,S)}}break;case 3:if(Ui=null,n=ve,ve=pu(e.containerInfo),Xt(e,t),ve=n,kt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(e.containerInfo)}catch(S){I(t,t.return,S)}zr&&(zr=!1,np(t));break;case 4:l=ve,ve=pu(t.stateNode.containerInfo),Xt(e,t),kt(t),ve=l;break;case 12:Xt(e,t),kt(t);break;case 31:Xt(e,t),kt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yi(t,l)));break;case 13:Xt(e,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ru=Pt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yi(t,l)));break;case 22:n=t.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,f=Be,g=gt;if(Be=f||n,gt=g||o,Xt(e,t),gt=g,Be=f,kt(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||o||Be||gt||Ca(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){o=a=e;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{r=o.stateNode;var y=o.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(S){I(o,o.return,S)}}}else if(e.tag===6){if(a===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(S){I(o,o.return,S)}}}else if(e.tag===18){if(a===null){o=e;try{var h=o.stateNode;n?hf(h,!0):hf(o.stateNode,!1)}catch(S){I(o,o.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,yi(t,a))));break;case 19:Xt(e,t),kt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,yi(t,l)));break;case 30:break;case 21:break;default:Xt(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(F0(l)){a=l;break}l=l.return}if(a==null)throw Error(z(160));switch(a.tag){case 27:var n=a.stateNode,i=wr(t);iu(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Dl(u,""),a.flags&=-33);var r=wr(t);iu(t,r,u);break;case 3:case 4:var o=a.stateNode.containerInfo,f=wr(t);So(t,f,o);break;default:throw Error(z(161))}}catch(g){I(t,t.return,g)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function np(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;np(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function He(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)I0(t,e.alternate,e),e=e.sibling}function Ca(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Aa(4,e,e.return),Ca(e);break;case 1:Ae(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&J0(e,e.return,a),Ca(e);break;case 27:En(e.stateNode);case 26:case 5:Ae(e,e.return),Ca(e);break;case 22:e.memoizedState===null&&Ca(e);break;case 30:Ca(e);break;default:Ca(e)}t=t.sibling}}function Ne(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ne(n,i,a),In(4,i);break;case 1:if(Ne(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(f){I(l,l.return,f)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)e0(o[n],r)}catch(f){I(l,l.return,f)}}a&&u&64&&K0(i),Sn(i,i.return);break;case 27:W0(i);case 26:case 5:Ne(n,i,a),a&&l===null&&u&4&&$0(i),Sn(i,i.return);break;case 12:Ne(n,i,a);break;case 31:Ne(n,i,a),a&&u&4&&ep(n,i);break;case 13:Ne(n,i,a),a&&u&4&&ap(n,i);break;case 22:i.memoizedState===null&&Ne(n,i,a),Sn(i,i.return);break;case 30:break;default:Ne(n,i,a)}e=e.sibling}}function Nc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Fn(a))}function Uc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fn(t))}function ye(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ip(t,e,a,l),e=e.sibling}function ip(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ye(t,e,a,l),n&2048&&In(9,e);break;case 1:ye(t,e,a,l);break;case 3:ye(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Fn(t)));break;case 12:if(n&2048){ye(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,r=i.onPostCommit;typeof r=="function"&&r(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){I(e,e.return,o)}}else ye(t,e,a,l);break;case 31:ye(t,e,a,l);break;case 13:ye(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?ye(t,e,a,l):wn(t,e):i._visibility&2?ye(t,e,a,l):(i._visibility|=2,ll(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Nc(u,e);break;case 24:ye(t,e,a,l),n&2048&&Uc(e.alternate,e);break;default:ye(t,e,a,l)}}function ll(t,e,a,l,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,r=a,o=l,f=u.flags;switch(u.tag){case 0:case 11:case 15:ll(i,u,r,o,n),In(8,u);break;case 23:break;case 22:var g=u.stateNode;u.memoizedState!==null?g._visibility&2?ll(i,u,r,o,n):wn(i,u):(g._visibility|=2,ll(i,u,r,o,n)),n&&f&2048&&Nc(u.alternate,u);break;case 24:ll(i,u,r,o,n),n&&f&2048&&Uc(u.alternate,u);break;default:ll(i,u,r,o,n)}e=e.sibling}}function wn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:wn(a,l),n&2048&&Nc(l.alternate,l);break;case 24:wn(a,l),n&2048&&Uc(l.alternate,l);break;default:wn(a,l)}e=e.sibling}}var sn=8192;function tl(t,e,a){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)up(t,e,a),t=t.sibling}function up(t,e,a){switch(t.tag){case 26:tl(t,e,a),t.flags&sn&&t.memoizedState!==null&&r1(a,ve,t.memoizedState,t.memoizedProps);break;case 5:tl(t,e,a);break;case 3:case 4:var l=ve;ve=pu(t.stateNode.containerInfo),tl(t,e,a),ve=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=sn,sn=16777216,tl(t,e,a),sn=l):tl(t,e,a));break;default:tl(t,e,a)}}function rp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ln(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];At=l,cp(l,t)}rp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)op(t),t=t.sibling}function op(t){switch(t.tag){case 0:case 11:case 15:ln(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:ln(t);break;case 12:ln(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Hi(t)):ln(t);break;default:ln(t)}}function Hi(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];At=l,cp(l,t)}rp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Aa(8,e,e.return),Hi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Hi(e));break;default:Hi(e)}t=t.sibling}}function cp(t,e){for(;At!==null;){var a=At;switch(a.tag){case 0:case 11:case 15:Aa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Fn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,At=l;else t:for(a=t;At!==null;){l=At;var n=l.sibling,i=l.return;if(P0(l),l===a){At=null;break t}if(n!==null){n.return=i,At=n;break t}At=i}}}var wg={getCacheForType:function(t){var e=Ot(yt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Ot(yt).controller.signal}},zg=typeof WeakMap=="function"?WeakMap:Map,$=0,lt=null,k=null,L=0,W=0,$t=null,oa=!1,Kl=!1,Rc=!1,$e=0,dt=0,Ea=0,Ya=0,Bc=0,It=0,Hl=0,zn=null,Qt=null,wo=!1,Ru=0,sp=0,uu=1/0,ru=null,ga=null,St=0,ya=null,Nl=null,Le=0,zo=0,Ao=null,fp=null,An=0,Eo=null;function ae(){return $&2&&L!==0?L&-L:H.T!==null?Gc():bd()}function dp(){if(It===0)if(!(L&536870912)||Q){var t=ci;ci<<=1,!(ci&3932160)&&(ci=262144),It=t}else It=536870912;return t=ne.current,t!==null&&(t.flags|=32),It}function Zt(t,e,a){(t===lt&&(W===2||W===9)||t.cancelPendingCommit!==null)&&(Ul(t,0),ca(t,L,It,!1)),Kn(t,a),(!($&2)||t!==lt)&&(t===lt&&(!($&2)&&(Ya|=a),dt===4&&ca(t,L,It,!1)),Me(t))}function pp(t,e,a){if($&6)throw Error(z(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Vn(t,e),n=l?Tg(t,e):Ar(t,e,!0),i=l;do{if(n===0){Kl&&!l&&ca(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Ag(a)){n=Ar(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var r=t;n=zn;var o=r.current.memoizedState.isDehydrated;if(o&&(Ul(r,u).flags|=256),u=Ar(r,u,!1),u!==2){if(Rc&&!o){r.errorRecoveryDisabledLanes|=i,Ya|=i,n=4;break t}i=Qt,Qt=n,i!==null&&(Qt===null?Qt=i:Qt.push.apply(Qt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ul(t,0),ca(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(z(345));case 4:if((e&4194048)!==e)break;case 6:ca(l,e,It,!oa);break t;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(z(329))}if((e&62914560)===e&&(n=Ru+300-Pt(),10<n)){if(ca(l,e,It,!oa),Eu(l,0,!0)!==0)break t;Le=e,l.timeoutHandle=Hp(ef.bind(null,l,a,Qt,ru,wo,e,It,Ya,Hl,oa,i,"Throttled",-0,0),n);break t}ef(l,a,Qt,ru,wo,e,It,Ya,Hl,oa,i,null,-0,0)}}break}while(!0);Me(t)}function ef(t,e,a,l,n,i,u,r,o,f,g,y,m,h){if(t.timeoutHandle=-1,y=e.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ge},up(e,i,y);var S=(i&62914560)===i?Ru-Pt():(i&4194048)===i?sp-Pt():0;if(S=o1(y,S),S!==null){Le=i,t.cancelPendingCommit=S(lf.bind(null,t,e,i,a,l,n,u,r,o,g,y,null,m,h)),ca(t,i,u,!f);return}}lf(t,e,i,a,l,n,u,r,o)}function Ag(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!le(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ca(t,e,a,l){e&=~Bc,e&=~Ya,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-ee(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&yd(t,a,e)}function Bu(){return $&6?!0:(Pn(0),!1)}function Yc(){if(k!==null){if(W===0)var t=k.return;else t=k,qe=$a=null,zc(t),Al=null,Hn=0,t=k;for(;t!==null;)V0(t.alternate,t),t=t.return;k=null}}function Ul(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Le=0,Yc(),lt=t,k=a=Xe(t.current,null),L=e,W=0,$t=null,oa=!1,Kl=Vn(t,e),Rc=!1,Hl=It=Bc=Ya=Ea=dt=0,Qt=zn=null,wo=!1,e&8&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-ee(l),i=1<<n;e|=t[n],l&=~i}return $e=e,Du(),a}function mp(t,e){Y=null,H.H=Un,e===Vl||e===Ou?(e=Hs(),W=3):e===gc?(e=Hs(),W=4):W=e===Cc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$t=e,k===null&&(dt=1,lu(t,se(e,t.current)))}function hp(){var t=ne.current;return t===null?!0:(L&4194048)===L?de===null:(L&62914560)===L||L&536870912?t===de:!1}function gp(){var t=H.H;return H.H=Un,t===null?Un:t}function yp(){var t=H.A;return H.A=wg,t}function ou(){dt=4,oa||(L&4194048)!==L&&ne.current!==null||(Kl=!0),!(Ea&134217727)&&!(Ya&134217727)||lt===null||ca(lt,L,It,!1)}function Ar(t,e,a){var l=$;$|=2;var n=gp(),i=yp();(lt!==t||L!==e)&&(ru=null,Ul(t,e)),e=!1;var u=dt;t:do try{if(W!==0&&k!==null){var r=k,o=$t;switch(W){case 8:Yc(),u=6;break t;case 3:case 2:case 9:case 6:ne.current===null&&(e=!0);var f=W;if(W=0,$t=null,gl(t,r,o,f),a&&Kl){u=0;break t}break;default:f=W,W=0,$t=null,gl(t,r,o,f)}}Eg(),u=dt;break}catch(g){mp(t,g)}while(!0);return e&&t.shellSuspendCounter++,qe=$a=null,$=l,H.H=n,H.A=i,k===null&&(lt=null,L=0,Du()),u}function Eg(){for(;k!==null;)vp(k)}function Tg(t,e){var a=$;$|=2;var l=gp(),n=yp();lt!==t||L!==e?(ru=null,uu=Pt()+500,Ul(t,e)):Kl=Vn(t,e);t:do try{if(W!==0&&k!==null){e=k;var i=$t;e:switch(W){case 1:W=0,$t=null,gl(t,e,i,1);break;case 2:case 9:if(Cs(i)){W=0,$t=null,af(e);break}e=function(){W!==2&&W!==9||lt!==t||(W=7),Me(t)},i.then(e,e);break t;case 3:W=7;break t;case 4:W=5;break t;case 7:Cs(i)?(W=0,$t=null,af(e)):(W=0,$t=null,gl(t,e,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var r=k;if(u?Yp(u):r.stateNode.complete){W=0,$t=null;var o=r.sibling;if(o!==null)k=o;else{var f=r.return;f!==null?(k=f,Yu(f)):k=null}break e}}W=0,$t=null,gl(t,e,i,5);break;case 6:W=0,$t=null,gl(t,e,i,6);break;case 8:Yc(),dt=6;break t;default:throw Error(z(462))}}Mg();break}catch(g){mp(t,g)}while(!0);return qe=$a=null,H.H=l,H.A=n,$=a,k!==null?0:(lt=null,L=0,Du(),dt)}function Mg(){for(;k!==null&&!Fm();)vp(k)}function vp(t){var e=Z0(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Yu(t):k=e}function af(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=$s(a,e,e.pendingProps,e.type,void 0,L);break;case 11:e=$s(a,e,e.pendingProps,e.type.render,e.ref,L);break;case 5:zc(e);default:V0(a,e),e=k=Vd(e,$e),e=Z0(a,e,$e)}t.memoizedProps=t.pendingProps,e===null?Yu(t):k=e}function gl(t,e,a,l){qe=$a=null,zc(e),Al=null,Hn=0;var n=e.return;try{if(hg(t,n,e,a,L)){dt=1,lu(t,se(a,t.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;dt=1,lu(t,se(a,t.current)),k=null;return}e.flags&32768?(Q||l===1?t=!0:Kl||L&536870912?t=!1:(oa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ne.current,l!==null&&l.tag===13&&(l.flags|=16384))),xp(e,t)):Yu(e)}function Yu(t){var e=t;do{if(e.flags&32768){xp(e,oa);return}t=e.return;var a=vg(e.alternate,e,$e);if(a!==null){k=a;return}if(e=e.sibling,e!==null){k=e;return}k=e=t}while(e!==null);dt===0&&(dt=5)}function xp(t,e){do{var a=xg(t.alternate,t);if(a!==null){a.flags&=32767,k=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){k=t;return}k=t=a}while(t!==null);dt=6,k=null}function lf(t,e,a,l,n,i,u,r,o){t.cancelPendingCommit=null;do Gu();while(St!==0);if($&6)throw Error(z(327));if(e!==null){if(e===t.current)throw Error(z(177));if(i=e.lanes|e.childLanes,i|=cc,uh(t,a,i,u,r,o),t===lt&&(k=lt=null,L=0),Nl=e,ya=t,Le=a,zo=i,Ao=n,fp=l,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Og(Vi,function(){return Ap(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,e.subtreeFlags&13878||l){l=H.T,H.T=null,n=F.p,F.p=2,u=$,$|=4;try{bg(t,e,a)}finally{$=u,F.p=n,H.T=l}}St=1,bp(),Sp(),wp()}}function bp(){if(St===1){St=0;var t=ya,e=Nl,a=(e.flags&13878)!==0;if(e.subtreeFlags&13878||a){a=H.T,H.T=null;var l=F.p;F.p=2;var n=$;$|=4;try{lp(e,t);var i=Do,u=Yd(t.containerInfo),r=i.focusedElem,o=i.selectionRange;if(u!==r&&r&&r.ownerDocument&&Bd(r.ownerDocument.documentElement,r)){if(o!==null&&oc(r)){var f=o.start,g=o.end;if(g===void 0&&(g=f),"selectionStart"in r)r.selectionStart=f,r.selectionEnd=Math.min(g,r.value.length);else{var y=r.ownerDocument||document,m=y&&y.defaultView||window;if(m.getSelection){var h=m.getSelection(),S=r.textContent.length,E=Math.min(o.start,S),_=o.end===void 0?E:Math.min(o.end,S);!h.extend&&E>_&&(u=_,_=E,E=u);var s=Es(r,E),c=Es(r,_);if(s&&c&&(h.rangeCount!==1||h.anchorNode!==s.node||h.anchorOffset!==s.offset||h.focusNode!==c.node||h.focusOffset!==c.offset)){var p=y.createRange();p.setStart(s.node,s.offset),h.removeAllRanges(),E>_?(h.addRange(p),h.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),h.addRange(p))}}}}for(y=[],h=r;h=h.parentNode;)h.nodeType===1&&y.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<y.length;r++){var v=y[r];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}gu=!!jo,Do=jo=null}finally{$=n,F.p=l,H.T=a}}t.current=e,St=2}}function Sp(){if(St===2){St=0;var t=ya,e=Nl,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=H.T,H.T=null;var l=F.p;F.p=2;var n=$;$|=4;try{I0(t,e.alternate,e)}finally{$=n,F.p=l,H.T=a}}St=3}}function wp(){if(St===4||St===3){St=0,Wm();var t=ya,e=Nl,a=Le,l=fp;e.subtreeFlags&10256||e.flags&10256?St=5:(St=0,Nl=ya=null,zp(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ga=null),ec(a),e=e.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(Zn,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=H.T,n=F.p,F.p=2,H.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var r=l[u];i(r.value,{componentStack:r.stack})}}finally{H.T=e,F.p=n}}Le&3&&Gu(),Me(t),n=t.pendingLanes,a&261930&&n&42?t===Eo?An++:(An=0,Eo=t):An=0,Pn(0)}}function zp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Fn(e)))}function Gu(){return bp(),Sp(),wp(),Ap()}function Ap(){if(St!==5)return!1;var t=ya,e=zo;zo=0;var a=ec(Le),l=H.T,n=F.p;try{F.p=32>a?32:a,H.T=null,a=Ao,Ao=null;var i=ya,u=Le;if(St=0,Nl=ya=null,Le=0,$&6)throw Error(z(331));var r=$;if($|=4,op(i.current),ip(i,i.current,u,a),$=r,Pn(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(Zn,i)}catch{}return!0}finally{F.p=n,H.T=l,zp(t,e)}}function nf(t,e,a){e=se(a,e),e=vo(t.stateNode,e,2),t=ha(t,e,2),t!==null&&(Kn(t,2),Me(t))}function I(t,e,a){if(t.tag===3)nf(t,t,a);else for(;e!==null;){if(e.tag===3){nf(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ga===null||!ga.has(l))){t=se(a,t),a=G0(2),l=ha(e,a,2),l!==null&&(q0(a,l,e,t),Kn(l,2),Me(l));break}}e=e.return}}function Er(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new zg;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Rc=!0,n.add(a),t=jg.bind(null,t,e,a),e.then(t,t))}function jg(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,lt===t&&(L&a)===a&&(dt===4||dt===3&&(L&62914560)===L&&300>Pt()-Ru?!($&2)&&Ul(t,0):Bc|=a,Hl===L&&(Hl=0)),Me(t)}function Ep(t,e){e===0&&(e=gd()),t=Ja(t,e),t!==null&&(Kn(t,e),Me(t))}function Dg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ep(t,a)}function _g(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(z(314))}l!==null&&l.delete(e),Ep(t,a)}function Og(t,e){return Po(t,e)}var cu=null,nl=null,To=!1,su=!1,Tr=!1,sa=0;function Me(t){t!==nl&&t.next===null&&(nl===null?cu=nl=t:nl=nl.next=t),su=!0,To||(To=!0,Hg())}function Pn(t,e){if(!Tr&&su){Tr=!0;do for(var a=!1,l=cu;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-ee(42|t)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,uf(l,i))}else i=L,i=Eu(l,l===lt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||Vn(l,i)||(a=!0,uf(l,i));l=l.next}while(a);Tr=!1}}function Cg(){Tp()}function Tp(){su=To=!1;var t=0;sa!==0&&Lg()&&(t=sa);for(var e=Pt(),a=null,l=cu;l!==null;){var n=l.next,i=Mp(l,e);i===0?(l.next=null,a===null?cu=n:a.next=n,n===null&&(nl=a)):(a=l,(t!==0||i&3)&&(su=!0)),l=n}St!==0&&St!==5||Pn(t),sa!==0&&(sa=0)}function Mp(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ee(i),r=1<<u,o=n[u];o===-1?(!(r&a)||r&l)&&(n[u]=ih(r,e)):o<=e&&(t.expiredLanes|=r),i&=~r}if(e=lt,a=L,a=Eu(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(W===2||W===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&tr(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||Vn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&tr(l),ec(a)){case 2:case 8:a=md;break;case 32:a=Vi;break;case 268435456:a=hd;break;default:a=Vi}return l=jp.bind(null,t),a=Po(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&tr(l),t.callbackPriority=2,t.callbackNode=null,2}function jp(t,e){if(St!==0&&St!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gu()&&t.callbackNode!==a)return null;var l=L;return l=Eu(t,t===lt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(pp(t,l,e),Mp(t,Pt()),t.callbackNode!=null&&t.callbackNode===a?jp.bind(null,t):null)}function uf(t,e){if(Gu())return null;pp(t,e,!0)}function Hg(){Zg(function(){$&6?Po(pd,Cg):Tp()})}function Gc(){if(sa===0){var t=_l;t===0&&(t=oi,oi<<=1,!(oi&261888)&&(oi=256)),sa=t}return sa}function rf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ai(""+t)}function of(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Ng(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=rf((n[Vt]||null).action),u=l.submitter;u&&(e=(e=u[Vt]||null)?rf(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var r=new Tu("action","action",null,l,n);t.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(sa!==0){var o=u?of(n,u):new FormData(n);go(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(r.preventDefault(),o=u?of(n,u):new FormData(n),go(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Mr=0;Mr<lo.length;Mr++){var jr=lo[Mr],Ug=jr.toLowerCase(),Rg=jr[0].toUpperCase()+jr.slice(1);Se(Ug,"on"+Rg)}Se(qd,"onAnimationEnd");Se(Xd,"onAnimationIteration");Se(kd,"onAnimationStart");Se("dblclick","onDoubleClick");Se("focusin","onFocus");Se("focusout","onBlur");Se(Ih,"onTransitionRun");Se(Ph,"onTransitionStart");Se(tg,"onTransitionCancel");Se(Ld,"onTransitionEnd");jl("onMouseEnter",["mouseout","mouseover"]);jl("onMouseLeave",["mouseout","mouseover"]);jl("onPointerEnter",["pointerout","pointerover"]);jl("onPointerLeave",["pointerout","pointerover"]);Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Za("onBeforeInput",["compositionend","keypress","textInput","paste"]);Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn));function Dp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var r=l[u],o=r.instance,f=r.currentTarget;if(r=r.listener,o!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=f;try{i(n)}catch(g){Ji(g)}n.currentTarget=null,i=o}else for(u=0;u<l.length;u++){if(r=l[u],o=r.instance,f=r.currentTarget,r=r.listener,o!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=f;try{i(n)}catch(g){Ji(g)}n.currentTarget=null,i=o}}}}function X(t,e){var a=e[$r];a===void 0&&(a=e[$r]=new Set);var l=t+"__bubble";a.has(l)||(_p(e,t,2,!1),a.add(l))}function Dr(t,e,a){var l=0;e&&(l|=4),_p(a,t,l,e)}var vi="_reactListening"+Math.random().toString(36).slice(2);function qc(t){if(!t[vi]){t[vi]=!0,Sd.forEach(function(a){a!=="selectionchange"&&(Bg.has(a)||Dr(a,!1,t),Dr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vi]||(e[vi]=!0,Dr("selectionchange",!1,e))}}function _p(t,e,a,l){switch(Lp(e)){case 2:var n=f1;break;case 8:n=d1;break;default:n=Qc}a=n.bind(null,e,a,t),n=void 0,!to||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function _r(t,e,a,l,n){var i=l;if(!(e&1)&&!(e&2)&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var r=l.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=rl(r),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=i=u;continue t}r=r.parentNode}}l=l.return}Dd(function(){var f=i,g=nc(a),y=[];t:{var m=Qd.get(t);if(m!==void 0){var h=Tu,S=t;switch(t){case"keypress":if(Ti(a)===0)break t;case"keydown":case"keyup":h=_h;break;case"focusin":S="focus",h=ir;break;case"focusout":S="blur",h=ir;break;case"beforeblur":case"afterblur":h=ir;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Hh;break;case qd:case Xd:case kd:h=Sh;break;case Ld:h=Uh;break;case"scroll":case"scrollend":h=gh;break;case"wheel":h=Bh;break;case"copy":case"cut":case"paste":h=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ys;break;case"toggle":case"beforetoggle":h=Gh}var E=(e&4)!==0,_=!E&&(t==="scroll"||t==="scrollend"),s=E?m!==null?m+"Capture":null:m;E=[];for(var c=f,p;c!==null;){var v=c;if(p=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||p===null||s===null||(v=jn(c,s),v!=null&&E.push(Bn(c,v,p))),_)break;c=c.return}0<E.length&&(m=new h(m,S,null,a,g),y.push({event:m,listeners:E}))}}if(!(e&7)){t:{if(m=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",m&&a!==Pr&&(S=a.relatedTarget||a.fromElement)&&(rl(S)||S[Ll]))break t;if((h||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,h?(S=a.relatedTarget||a.toElement,h=f,S=S?rl(S):null,S!==null&&(_=Qn(S),E=S.tag,S!==_||E!==5&&E!==27&&E!==6)&&(S=null)):(h=null,S=f),h!==S)){if(E=hs,v="onMouseLeave",s="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(E=ys,v="onPointerLeave",s="onPointerEnter",c="pointer"),_=h==null?m:on(h),p=S==null?m:on(S),m=new E(v,c+"leave",h,a,g),m.target=_,m.relatedTarget=p,v=null,rl(g)===f&&(E=new E(s,c+"enter",S,a,g),E.target=p,E.relatedTarget=_,v=E),_=v,h&&S)e:{for(E=Yg,s=h,c=S,p=0,v=s;v;v=E(v))p++;v=0;for(var b=c;b;b=E(b))v++;for(;0<p-v;)s=E(s),p--;for(;0<v-p;)c=E(c),v--;for(;p--;){if(s===c||c!==null&&s===c.alternate){E=s;break e}s=E(s),c=E(c)}E=null}else E=null;h!==null&&cf(y,m,h,E,!1),S!==null&&_!==null&&cf(y,_,S,E,!0)}}t:{if(m=f?on(f):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var A=Ss;else if(bs(m))if(Ud)A=$h;else{A=Kh;var x=Vh}else h=m.nodeName,!h||h.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?f&&lc(f.elementType)&&(A=Ss):A=Jh;if(A&&(A=A(t,f))){Nd(y,A,a,g);break t}x&&x(t,m,f),t==="focusout"&&f&&m.type==="number"&&f.memoizedProps.value!=null&&Ir(m,"number",m.value)}switch(x=f?on(f):window,t){case"focusin":(bs(x)||x.contentEditable==="true")&&(sl=x,eo=f,hn=null);break;case"focusout":hn=eo=sl=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,Ts(y,a,g);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":Ts(y,a,g)}var M;if(rc)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else cl?Cd(t,a)&&(D="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(Od&&a.locale!=="ko"&&(cl||D!=="onCompositionStart"?D==="onCompositionEnd"&&cl&&(M=_d()):(ra=g,ic="value"in ra?ra.value:ra.textContent,cl=!0)),x=fu(f,D),0<x.length&&(D=new gs(D,t,null,a,g),y.push({event:D,listeners:x}),M?D.data=M:(M=Hd(a),M!==null&&(D.data=M)))),(M=Xh?kh(t,a):Lh(t,a))&&(D=fu(f,"onBeforeInput"),0<D.length&&(x=new gs("onBeforeInput","beforeinput",null,a,g),y.push({event:x,listeners:D}),x.data=M)),Ng(y,t,f,a,g)}Dp(y,e)})}function Bn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function fu(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=jn(t,a),n!=null&&l.unshift(Bn(t,n,i)),n=jn(t,e),n!=null&&l.push(Bn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Yg(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cf(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var r=a,o=r.alternate,f=r.stateNode;if(r=r.tag,o!==null&&o===l)break;r!==5&&r!==26&&r!==27||f===null||(o=f,n?(f=jn(a,i),f!=null&&u.unshift(Bn(a,f,o))):n||(f=jn(a,i),f!=null&&u.push(Bn(a,f,o)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var Gg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(Gg,`
`).replace(qg,"")}function Op(t,e){return e=sf(e),sf(t)===e}function P(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Dl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Dl(t,""+l);break;case"className":fi(t,"class",l);break;case"tabIndex":fi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(t,a,l);break;case"style":jd(t,l,i);break;case"data":if(e!=="object"){fi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ai(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&P(t,e,"name",n.name,n,null),P(t,e,"formEncType",n.formEncType,n,null),P(t,e,"formMethod",n.formMethod,n,null),P(t,e,"formTarget",n.formTarget,n,null)):(P(t,e,"encType",n.encType,n,null),P(t,e,"method",n.method,n,null),P(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ai(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Ge);break;case"onScroll":l!=null&&X("scroll",t);break;case"onScrollEnd":l!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(z(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(z(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ai(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":X("beforetoggle",t),X("toggle",t),zi(t,"popover",l);break;case"xlinkActuate":_e(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_e(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_e(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_e(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_e(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_e(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_e(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":zi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mh.get(a)||a,zi(t,a,l))}}function Mo(t,e,a,l,n,i){switch(a){case"style":jd(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(z(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(z(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Dl(t,l):(typeof l=="number"||typeof l=="bigint")&&Dl(t,""+l);break;case"onScroll":l!=null&&X("scroll",t);break;case"onScrollEnd":l!=null&&X("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Vt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):zi(t,a,l)}}}function Ct(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(z(137,e));default:P(t,e,i,u,a,null)}}n&&P(t,e,"srcSet",a.srcSet,a,null),l&&P(t,e,"src",a.src,a,null);return;case"input":X("invalid",t);var r=i=u=n=null,o=null,f=null;for(l in a)if(a.hasOwnProperty(l)){var g=a[l];if(g!=null)switch(l){case"name":n=g;break;case"type":u=g;break;case"checked":o=g;break;case"defaultChecked":f=g;break;case"value":i=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(z(137,e));break;default:P(t,e,l,g,a,null)}}Ed(t,i,r,o,f,u,n,!1);return;case"select":X("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":l=r;default:P(t,e,n,r,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Sl(t,!!l,e,!1):a!=null&&Sl(t,!!l,a,!0);return;case"textarea":X("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(r=a[u],r!=null))switch(u){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(z(91));break;default:P(t,e,u,r,a,null)}Md(t,l,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(l=a[o],l!=null))switch(o){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:P(t,e,o,l,a,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(l=0;l<Rn.length;l++)X(Rn[l],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(z(137,e));default:P(t,e,f,l,a,null)}return;default:if(lc(e)){for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!==void 0&&Mo(t,e,g,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&P(t,e,r,l,a,null))}function Xg(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,o=null,f=null,g=null;for(h in a){var y=a[h];if(a.hasOwnProperty(h)&&y!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=y;default:l.hasOwnProperty(h)||P(t,e,h,null,l,y)}}for(var m in l){var h=l[m];if(y=a[m],l.hasOwnProperty(m)&&(h!=null||y!=null))switch(m){case"type":i=h;break;case"name":n=h;break;case"checked":f=h;break;case"defaultChecked":g=h;break;case"value":u=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(z(137,e));break;default:h!==y&&P(t,e,m,h,l,y)}}Wr(t,u,r,o,f,g,i,n);return;case"select":h=u=r=m=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":h=o;default:l.hasOwnProperty(i)||P(t,e,i,null,l,o)}for(n in l)if(i=l[n],o=a[n],l.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":m=i;break;case"defaultValue":r=i;break;case"multiple":u=i;default:i!==o&&P(t,e,n,i,l,o)}e=r,a=u,l=h,m!=null?Sl(t,!!a,m,!1):!!l!=!!a&&(e!=null?Sl(t,!!a,e,!0):Sl(t,!!a,a?[]:"",!1));return;case"textarea":h=m=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:P(t,e,r,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(z(91));break;default:n!==i&&P(t,e,u,n,l,i)}Td(t,m,h);return;case"option":for(var S in a)if(m=a[S],a.hasOwnProperty(S)&&m!=null&&!l.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:P(t,e,S,null,l,m)}for(o in l)if(m=l[o],h=a[o],l.hasOwnProperty(o)&&m!==h&&(m!=null||h!=null))switch(o){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:P(t,e,o,m,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in a)m=a[E],a.hasOwnProperty(E)&&m!=null&&!l.hasOwnProperty(E)&&P(t,e,E,null,l,m);for(f in l)if(m=l[f],h=a[f],l.hasOwnProperty(f)&&m!==h&&(m!=null||h!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(z(137,e));break;default:P(t,e,f,m,l,h)}return;default:if(lc(e)){for(var _ in a)m=a[_],a.hasOwnProperty(_)&&m!==void 0&&!l.hasOwnProperty(_)&&Mo(t,e,_,void 0,l,m);for(g in l)m=l[g],h=a[g],!l.hasOwnProperty(g)||m===h||m===void 0&&h===void 0||Mo(t,e,g,m,l,h);return}}for(var s in a)m=a[s],a.hasOwnProperty(s)&&m!=null&&!l.hasOwnProperty(s)&&P(t,e,s,null,l,m);for(y in l)m=l[y],h=a[y],!l.hasOwnProperty(y)||m===h||m==null&&h==null||P(t,e,y,m,l,h)}function ff(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,r=n.duration;if(i&&r&&ff(u)){for(u=0,r=n.responseEnd,l+=1;l<a.length;l++){var o=a[l],f=o.startTime;if(f>r)break;var g=o.transferSize,y=o.initiatorType;g&&ff(y)&&(o=o.responseEnd,u+=g*(o<r?1:(r-f)/(o-f)))}if(--l,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jo=null,Do=null;function du(t){return t.nodeType===9?t:t.ownerDocument}function df(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function _o(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Or=null;function Lg(){var t=window.event;return t&&t.type==="popstate"?t===Or?!1:(Or=t,!0):(Or=null,!1)}var Hp=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(t){return pf.resolve(null).then(t).catch(Vg)}:Hp;function Vg(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function mf(t,e){var a=e,l=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(n),Bl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")En(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,En(a);for(var i=a.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[Jn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&En(t.ownerDocument.body);a=n}while(a);Bl(e)}function hf(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Oo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Oo(a),ac(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Kg(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Jn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=pe(t.nextSibling),t===null)break}return null}function Jg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pe(t.nextSibling),t===null))return null;return t}function Np(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pe(t.nextSibling),t===null))return null;return t}function Co(t){return t.data==="$?"||t.data==="$~"}function Ho(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $g(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function pe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var No=null;function gf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return pe(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Up(t,e,a){switch(e=du(a),t){case"html":if(t=e.documentElement,!t)throw Error(z(452));return t;case"head":if(t=e.head,!t)throw Error(z(453));return t;case"body":if(t=e.body,!t)throw Error(z(454));return t;default:throw Error(z(451))}}function En(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ac(t)}var me=new Map,vf=new Set;function pu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=F.d;F.d={f:Fg,r:Wg,D:Ig,C:Pg,L:t1,m:e1,X:l1,S:a1,M:n1};function Fg(){var t=Fe.f(),e=Bu();return t||e}function Wg(t){var e=Ql(t);e!==null&&e.tag===5&&e.type==="form"?j0(e):Fe.r(t)}var Jl=typeof document>"u"?null:document;function Rp(t,e,a){var l=Jl;if(l&&typeof e=="string"&&e){var n=ce(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),vf.has(n)||(vf.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Ct(e,"link",t),Et(e),l.head.appendChild(e)))}}function Ig(t){Fe.D(t),Rp("dns-prefetch",t,null)}function Pg(t,e){Fe.C(t,e),Rp("preconnect",t,e)}function t1(t,e,a){Fe.L(t,e,a);var l=Jl;if(l&&t&&e){var n='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ce(a.imageSizes)+'"]')):n+='[href="'+ce(t)+'"]';var i=n;switch(e){case"style":i=Rl(t);break;case"script":i=$l(t)}me.has(i)||(t=ct({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),me.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(ti(i))||e==="script"&&l.querySelector(ei(i))||(e=l.createElement("link"),Ct(e,"link",t),Et(e),l.head.appendChild(e)))}}function e1(t,e){Fe.m(t,e);var a=Jl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+ce(l)+'"][href="'+ce(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=$l(t)}if(!me.has(i)&&(t=ct({rel:"modulepreload",href:t},e),me.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ei(i)))return}l=a.createElement("link"),Ct(l,"link",t),Et(l),a.head.appendChild(l)}}}function a1(t,e,a){Fe.S(t,e,a);var l=Jl;if(l&&t){var n=bl(l).hoistableStyles,i=Rl(t);e=e||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=l.querySelector(ti(i)))r.loading=5;else{t=ct({rel:"stylesheet",href:t,"data-precedence":e},a),(a=me.get(i))&&Xc(t,a);var o=u=l.createElement("link");Et(o),Ct(o,"link",t),o._p=new Promise(function(f,g){o.onload=f,o.onerror=g}),o.addEventListener("load",function(){r.loading|=1}),o.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ni(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function l1(t,e){Fe.X(t,e);var a=Jl;if(a&&t){var l=bl(a).hoistableScripts,n=$l(t),i=l.get(n);i||(i=a.querySelector(ei(n)),i||(t=ct({src:t,async:!0},e),(e=me.get(n))&&kc(t,e),i=a.createElement("script"),Et(i),Ct(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function n1(t,e){Fe.M(t,e);var a=Jl;if(a&&t){var l=bl(a).hoistableScripts,n=$l(t),i=l.get(n);i||(i=a.querySelector(ei(n)),i||(t=ct({src:t,async:!0,type:"module"},e),(e=me.get(n))&&kc(t,e),i=a.createElement("script"),Et(i),Ct(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function xf(t,e,a,l){var n=(n=da.current)?pu(n):null;if(!n)throw Error(z(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Rl(a.href),a=bl(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Rl(a.href);var i=bl(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(ti(t)))&&!i._p&&(u.instance=i,u.state.loading=5),me.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},me.set(t,a),i||i1(n,t,a,u.state))),e&&l===null)throw Error(z(528,""));return u}if(e&&l!==null)throw Error(z(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=$l(a),a=bl(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(z(444,t))}}function Rl(t){return'href="'+ce(t)+'"'}function ti(t){return'link[rel="stylesheet"]['+t+"]"}function Bp(t){return ct({},t,{"data-precedence":t.precedence,precedence:null})}function i1(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ct(e,"link",a),Et(e),t.head.appendChild(e))}function $l(t){return'[src="'+ce(t)+'"]'}function ei(t){return"script[async]"+t}function bf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ce(a.href)+'"]');if(l)return e.instance=l,Et(l),l;var n=ct({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Et(l),Ct(l,"style",n),Ni(l,a.precedence,t),e.instance=l;case"stylesheet":n=Rl(a.href);var i=t.querySelector(ti(n));if(i)return e.state.loading|=4,e.instance=i,Et(i),i;l=Bp(a),(n=me.get(n))&&Xc(l,n),i=(t.ownerDocument||t).createElement("link"),Et(i);var u=i;return u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),Ct(i,"link",l),e.state.loading|=4,Ni(i,a.precedence,t),e.instance=i;case"script":return i=$l(a.src),(n=t.querySelector(ei(i)))?(e.instance=n,Et(n),n):(l=a,(n=me.get(i))&&(l=ct({},a),kc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),Et(n),Ct(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(z(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(l=e.instance,e.state.loading|=4,Ni(l,a.precedence,t));return e.instance}function Ni(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var r=l[u];if(r.dataset.precedence===e)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Xc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ui=null;function Sf(t,e,a){if(Ui===null){var l=new Map,n=Ui=new Map;n.set(a,l)}else n=Ui,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Jn]||i[Dt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var r=l.get(u);r?r.push(i):l.set(u,[i])}}return l}function wf(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function u1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Yp(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function r1(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=Rl(l.href),i=e.querySelector(ti(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=mu.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,Et(i);return}i=e.ownerDocument||e,l=Bp(l),(n=me.get(n))&&Xc(l,n),i=i.createElement("link"),Et(i);var u=i;u._p=new Promise(function(r,o){u.onload=r,u.onerror=o}),Ct(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&!(a.state.loading&3)&&(t.count++,a=mu.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Cr=0;function o1(t,e){return t.stylesheets&&t.count===0&&Ri(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Ri(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Cr===0&&(Cr=62500*kg());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ri(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Cr?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ri(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hu=null;function Ri(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hu=new Map,e.forEach(c1,t),hu=null,mu.call(t))}function c1(t,e){if(!(e.state.loading&4)){var a=hu.get(t);if(a)var l=a.get(null);else{a=new Map,hu.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=mu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Yn={$$typeof:Ye,Provider:null,Consumer:null,_currentValue:Na,_currentValue2:Na,_threadCount:0};function s1(t,e,a,l,n,i,u,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.hiddenUpdates=er(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Gp(t,e,a,l,n,i,u,r,o,f,g,y){return t=new s1(t,e,a,u,o,f,g,y,r),e=1,i===!0&&(e|=24),i=Wt(3,null,null,e),t.current=i,i.stateNode=t,e=mc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},yc(i),t}function qp(t){return t?(t=pl,t):pl}function Xp(t,e,a,l,n,i){n=qp(n),l.context===null?l.context=n:l.pendingContext=n,l=ma(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ha(t,l,e),a!==null&&(Zt(a,t,e),yn(a,t,e))}function zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Lc(t,e){zf(t,e),(t=t.alternate)&&zf(t,e)}function kp(t){if(t.tag===13||t.tag===31){var e=Ja(t,67108864);e!==null&&Zt(e,t,67108864),Lc(t,67108864)}}function Af(t){if(t.tag===13||t.tag===31){var e=ae();e=tc(e);var a=Ja(t,e);a!==null&&Zt(a,t,e),Lc(t,e)}}var gu=!0;function f1(t,e,a,l){var n=H.T;H.T=null;var i=F.p;try{F.p=2,Qc(t,e,a,l)}finally{F.p=i,H.T=n}}function d1(t,e,a,l){var n=H.T;H.T=null;var i=F.p;try{F.p=8,Qc(t,e,a,l)}finally{F.p=i,H.T=n}}function Qc(t,e,a,l){if(gu){var n=Uo(l);if(n===null)_r(t,e,l,yu,a),Ef(t,l);else if(m1(n,t,e,a,l))l.stopPropagation();else if(Ef(t,l),e&4&&-1<p1.indexOf(t)){for(;n!==null;){var i=Ql(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=_a(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var o=1<<31-ee(u);r.entanglements[1]|=o,u&=~o}Me(i),!($&6)&&(uu=Pt()+500,Pn(0))}}break;case 31:case 13:r=Ja(i,2),r!==null&&Zt(r,i,2),Bu(),Lc(i,2)}if(i=Uo(l),i===null&&_r(t,e,l,yu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else _r(t,e,l,null,a)}}function Uo(t){return t=nc(t),Zc(t)}var yu=null;function Zc(t){if(yu=null,t=rl(t),t!==null){var e=Qn(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=od(e),t!==null)return t;t=null}else if(a===31){if(t=cd(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return yu=t,null}function Lp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Im()){case pd:return 2;case md:return 8;case Vi:case Pm:return 32;case hd:return 268435456;default:return 32}default:return 32}}var Ro=!1,va=null,xa=null,ba=null,Gn=new Map,qn=new Map,ia=[],p1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(t,e){switch(t){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":Gn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(e.pointerId)}}function nn(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Ql(e),e!==null&&kp(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function m1(t,e,a,l,n){switch(e){case"focusin":return va=nn(va,t,e,a,l,n),!0;case"dragenter":return xa=nn(xa,t,e,a,l,n),!0;case"mouseover":return ba=nn(ba,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Gn.set(i,nn(Gn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,qn.set(i,nn(qn.get(i)||null,t,e,a,l,n)),!0}return!1}function Qp(t){var e=rl(t.target);if(e!==null){var a=Qn(e);if(a!==null){if(e=a.tag,e===13){if(e=od(a),e!==null){t.blockedOn=e,os(t.priority,function(){Af(a)});return}}else if(e===31){if(e=cd(a),e!==null){t.blockedOn=e,os(t.priority,function(){Af(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Uo(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Pr=l,a.target.dispatchEvent(l),Pr=null}else return e=Ql(a),e!==null&&kp(e),t.blockedOn=a,!1;e.shift()}return!0}function Tf(t,e,a){Bi(t)&&a.delete(e)}function h1(){Ro=!1,va!==null&&Bi(va)&&(va=null),xa!==null&&Bi(xa)&&(xa=null),ba!==null&&Bi(ba)&&(ba=null),Gn.forEach(Tf),qn.forEach(Tf)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ro||(Ro=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,h1)))}var bi=null;function Mf(t){bi!==t&&(bi=t,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,function(){bi===t&&(bi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(Zc(l||a)===null)continue;break}var i=Ql(a);i!==null&&(t.splice(e,3),e-=3,go(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(t){function e(o){return xi(o,t)}va!==null&&xi(va,t),xa!==null&&xi(xa,t),ba!==null&&xi(ba,t),Gn.forEach(e),qn.forEach(e);for(var a=0;a<ia.length;a++){var l=ia[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ia.length&&(a=ia[0],a.blockedOn===null);)Qp(a),a.blockedOn===null&&ia.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Vt]||null;if(typeof i=="function")u||Mf(a);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Vt]||null)r=u.formAction;else if(Zc(n)!==null)continue}else r=u.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Mf(a)}}}function Zp(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Vc(t){this._internalRoot=t}qu.prototype.render=Vc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));var a=e.current,l=ae();Xp(a,l,t,e,null,null)};qu.prototype.unmount=Vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xp(t.current,2,null,t,null,null),Bu(),e[Ll]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bd();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ia.length&&e!==0&&e<ia[a].priority;a++);ia.splice(a,0,t),a===0&&Qp(t)}};var jf=ud.version;if(jf!=="19.2.3")throw Error(z(527,jf,"19.2.3"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Zm(e),t=t!==null?sd(t):null,t=t===null?null:t.stateNode,t};var g1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{Zn=Si.inject(g1),te=Si}catch{}}zu.createRoot=function(t,e){if(!rd(t))throw Error(z(299));var a=!1,l="",n=R0,i=B0,u=Y0;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Gp(t,1,!1,null,null,a,l,null,n,i,u,Zp),t[Ll]=e.current,qc(t),new Vc(e)};zu.hydrateRoot=function(t,e,a){if(!rd(t))throw Error(z(299));var l=!1,n="",i=R0,u=B0,r=Y0,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),e=Gp(t,1,!0,e,a??null,l,n,o,i,u,r,Zp),e.context=qp(null),a=e.current,l=ae(),l=tc(l),n=ma(l),n.callback=null,ha(a,n,l),a=l,e.current.lanes=a,Kn(e,a),Me(e),t[Ll]=e.current,qc(t),new qu(e)};zu.version="19.2.3";function Vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp)}catch(t){console.error(t)}}Vp(),td.exports=zu;var y1=td.exports,Rt=function(){return Rt=Object.assign||function(e){for(var a,l=1,n=arguments.length;l<n;l++){a=arguments[l];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Rt.apply(this,arguments)};function Xn(t,e,a){if(a||arguments.length===2)for(var l=0,n=e.length,i;l<n;l++)(i||!(l in e))&&(i||(i=Array.prototype.slice.call(e,0,l)),i[l]=e[l]);return t.concat(i||Array.prototype.slice.call(e))}var ut="-ms-",Tn="-moz-",J="-webkit-",Kp="comm",Xu="rule",Kc="decl",v1="@import",x1="@namespace",Jp="@keyframes",b1="@layer",$p=Math.abs,Jc=String.fromCharCode,Bo=Object.assign;function S1(t,e){return bt(t,0)^45?(((e<<2^bt(t,0))<<2^bt(t,1))<<2^bt(t,2))<<2^bt(t,3):0}function Fp(t){return t.trim()}function Ue(t,e){return(t=e.exec(t))?t[0]:t}function q(t,e,a){return t.replace(e,a)}function Yi(t,e,a){return t.indexOf(e,a)}function bt(t,e){return t.charCodeAt(e)|0}function Qa(t,e,a){return t.slice(e,a)}function xe(t){return t.length}function Wp(t){return t.length}function fn(t,e){return e.push(t),t}function w1(t,e){return t.map(e).join("")}function Df(t,e){return t.filter(function(a){return!Ue(a,e)})}var ku=1,Yl=1,Ip=0,he=0,vt=0,Fl="";function Lu(t,e,a,l,n,i,u,r){return{value:t,root:e,parent:a,type:l,props:n,children:i,line:ku,column:Yl,length:u,return:"",siblings:r}}function Pe(t,e){return Bo(Lu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function el(t){for(;t.root;)t=Pe(t.root,{children:[t]});fn(t,t.siblings)}function z1(){return vt}function A1(){return vt=he>0?bt(Fl,--he):0,Yl--,vt===10&&(Yl=1,ku--),vt}function be(){return vt=he<Ip?bt(Fl,he++):0,Yl++,vt===10&&(Yl=1,ku++),vt}function fa(){return bt(Fl,he)}function Gi(){return he}function Qu(t,e){return Qa(Fl,t,e)}function kn(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E1(t){return ku=Yl=1,Ip=xe(Fl=t),he=0,[]}function T1(t){return Fl="",t}function Hr(t){return Fp(Qu(he-1,Yo(t===91?t+2:t===40?t+1:t)))}function M1(t){for(;(vt=fa())&&vt<33;)be();return kn(t)>2||kn(vt)>3?"":" "}function j1(t,e){for(;--e&&be()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return Qu(t,Gi()+(e<6&&fa()==32&&be()==32))}function Yo(t){for(;be();)switch(vt){case t:return he;case 34:case 39:t!==34&&t!==39&&Yo(vt);break;case 40:t===41&&Yo(t);break;case 92:be();break}return he}function D1(t,e){for(;be()&&t+vt!==57;)if(t+vt===84&&fa()===47)break;return"/*"+Qu(e,he-1)+"*"+Jc(t===47?t:be())}function _1(t){for(;!kn(fa());)be();return Qu(t,he)}function O1(t){return T1(qi("",null,null,null,[""],t=E1(t),0,[0],t))}function qi(t,e,a,l,n,i,u,r,o){for(var f=0,g=0,y=u,m=0,h=0,S=0,E=1,_=1,s=1,c=0,p="",v=n,b=i,A=l,x=p;_;)switch(S=c,c=be()){case 40:if(S!=108&&bt(x,y-1)==58){Yi(x+=q(Hr(c),"&","&\f"),"&\f",$p(f?r[f-1]:0))!=-1&&(s=-1);break}case 34:case 39:case 91:x+=Hr(c);break;case 9:case 10:case 13:case 32:x+=M1(S);break;case 92:x+=j1(Gi()-1,7);continue;case 47:switch(fa()){case 42:case 47:fn(C1(D1(be(),Gi()),e,a,o),o),(kn(S||1)==5||kn(fa()||1)==5)&&xe(x)&&Qa(x,-1,void 0)!==" "&&(x+=" ");break;default:x+="/"}break;case 123*E:r[f++]=xe(x)*s;case 125*E:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+g:s==-1&&(x=q(x,/\f/g,"")),h>0&&(xe(x)-y||E===0&&S===47)&&fn(h>32?Of(x+";",l,a,y-1,o):Of(q(x," ","")+";",l,a,y-2,o),o);break;case 59:x+=";";default:if(fn(A=_f(x,e,a,f,g,n,r,p,v=[],b=[],y,i),i),c===123)if(g===0)qi(x,e,A,A,v,i,y,r,b);else{switch(m){case 99:if(bt(x,3)===110)break;case 108:if(bt(x,2)===97)break;default:g=0;case 100:case 109:case 115:}g?qi(t,A,A,l&&fn(_f(t,A,A,0,0,n,r,p,n,v=[],y,b),b),n,b,y,r,l?v:b):qi(x,A,A,A,[""],b,0,r,b)}}f=g=h=0,E=s=1,p=x="",y=u;break;case 58:y=1+xe(x),h=S;default:if(E<1){if(c==123)--E;else if(c==125&&E++==0&&A1()==125)continue}switch(x+=Jc(c),c*E){case 38:s=g>0?1:(x+="\f",-1);break;case 44:r[f++]=(xe(x)-1)*s,s=1;break;case 64:fa()===45&&(x+=Hr(be())),m=fa(),g=y=xe(p=x+=_1(Gi())),c++;break;case 45:S===45&&xe(x)==2&&(E=0)}}return i}function _f(t,e,a,l,n,i,u,r,o,f,g,y){for(var m=n-1,h=n===0?i:[""],S=Wp(h),E=0,_=0,s=0;E<l;++E)for(var c=0,p=Qa(t,m+1,m=$p(_=u[E])),v=t;c<S;++c)(v=Fp(_>0?h[c]+" "+p:q(p,/&\f/g,h[c])))&&(o[s++]=v);return Lu(t,e,a,n===0?Xu:r,o,f,g,y)}function C1(t,e,a,l){return Lu(t,e,a,Kp,Jc(z1()),Qa(t,2,-2),0,l)}function Of(t,e,a,l,n){return Lu(t,e,a,Kc,Qa(t,0,l),Qa(t,l+1,-1),l,n)}function Pp(t,e,a){switch(S1(t,e)){case 5103:return J+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return J+t+t;case 4855:return J+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Tn+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return J+t+Tn+t+ut+t+t;case 5936:switch(bt(t,e+11)){case 114:return J+t+ut+q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return J+t+ut+q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return J+t+ut+q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return J+t+ut+t+t;case 6165:return J+t+ut+"flex-"+t+t;case 5187:return J+t+q(t,/(\w+).+(:[^]+)/,J+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return J+t+ut+"flex-item-"+q(t,/flex-|-self/g,"")+(Ue(t,/flex-|baseline/)?"":ut+"grid-row-"+q(t,/flex-|-self/g,""))+t;case 4675:return J+t+ut+"flex-line-pack"+q(t,/align-content|flex-|-self/g,"")+t;case 5548:return J+t+ut+q(t,"shrink","negative")+t;case 5292:return J+t+ut+q(t,"basis","preferred-size")+t;case 6060:return J+"box-"+q(t,"-grow","")+J+t+ut+q(t,"grow","positive")+t;case 4554:return J+q(t,/([^-])(transform)/g,"$1"+J+"$2")+t;case 6187:return q(q(q(t,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),t,"")+t;case 5495:case 3959:return q(t,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return q(q(t,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+ut+"flex-pack:$3"),/space-between/,"justify")+J+t+t;case 4200:if(!Ue(t,/flex-|baseline/))return ut+"grid-column-align"+Qa(t,e)+t;break;case 2592:case 3360:return ut+q(t,"template-","")+t;case 4384:case 3616:return a&&a.some(function(l,n){return e=n,Ue(l.props,/grid-\w+-end/)})?~Yi(t+(a=a[e].value),"span",0)?t:ut+q(t,"-start","")+t+ut+"grid-row-span:"+(~Yi(a,"span",0)?Ue(a,/\d+/):+Ue(a,/\d+/)-+Ue(t,/\d+/))+";":ut+q(t,"-start","")+t;case 4896:case 4128:return a&&a.some(function(l){return Ue(l.props,/grid-\w+-start/)})?t:ut+q(q(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return q(t,/(.+)-inline(.+)/,J+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xe(t)-1-e>6)switch(bt(t,e+1)){case 109:if(bt(t,e+4)!==45)break;case 102:return q(t,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+Tn+(bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yi(t,"stretch",0)?Pp(q(t,"stretch","fill-available"),e,a)+t:t}break;case 5152:case 5920:return q(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,n,i,u,r,o,f){return ut+n+":"+i+f+(u?ut+n+"-span:"+(r?o:+o-+i)+f:"")+t});case 4949:if(bt(t,e+6)===121)return q(t,":",":"+J)+t;break;case 6444:switch(bt(t,bt(t,14)===45?18:11)){case 120:return q(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(bt(t,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+ut+"$2box$3")+t;case 100:return q(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(t,"scroll-","scroll-snap-")+t}return t}function vu(t,e){for(var a="",l=0;l<t.length;l++)a+=e(t[l],l,t,e)||"";return a}function H1(t,e,a,l){switch(t.type){case b1:if(t.children.length)break;case v1:case x1:case Kc:return t.return=t.return||t.value;case Kp:return"";case Jp:return t.return=t.value+"{"+vu(t.children,l)+"}";case Xu:if(!xe(t.value=t.props.join(",")))return""}return xe(a=vu(t.children,l))?t.return=t.value+"{"+a+"}":""}function N1(t){var e=Wp(t);return function(a,l,n,i){for(var u="",r=0;r<e;r++)u+=t[r](a,l,n,i)||"";return u}}function U1(t){return function(e){e.root||(e=e.return)&&t(e)}}function R1(t,e,a,l){if(t.length>-1&&!t.return)switch(t.type){case Kc:t.return=Pp(t.value,t.length,a);return;case Jp:return vu([Pe(t,{value:q(t.value,"@","@"+J)})],l);case Xu:if(t.length)return w1(a=t.props,function(n){switch(Ue(n,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":el(Pe(t,{props:[q(n,/:(read-\w+)/,":"+Tn+"$1")]})),el(Pe(t,{props:[n]})),Bo(t,{props:Df(a,l)});break;case"::placeholder":el(Pe(t,{props:[q(n,/:(plac\w+)/,":"+J+"input-$1")]})),el(Pe(t,{props:[q(n,/:(plac\w+)/,":"+Tn+"$1")]})),el(Pe(t,{props:[q(n,/:(plac\w+)/,ut+"input-$1")]})),el(Pe(t,{props:[n]})),Bo(t,{props:Df(a,l)});break}return""})}}var B1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},Gl=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",tm="active",em="data-styled-version",Zu="6.3.8",$c=`/*!sc*/
`,xu=typeof window<"u"&&typeof document<"u",Qe=Ut.createContext===void 0,Y1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),G1={},Vu=Object.freeze([]),ql=Object.freeze({});function am(t,e,a){return a===void 0&&(a=ql),t.theme!==a.theme&&t.theme||e||a.theme}var lm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),q1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X1=/(^-|-$)/g;function Cf(t){return t.replace(q1,"-").replace(X1,"")}var k1=/(a)(d)/gi,Hf=function(t){return String.fromCharCode(t+(t>25?39:97))};function Go(t){var e,a="";for(e=Math.abs(t);e>52;e=e/52|0)a=Hf(e%52)+a;return(Hf(e%52)+a).replace(k1,"$1-$2")}var Nr,yl=function(t,e){for(var a=e.length;a;)t=33*t^e.charCodeAt(--a);return t},nm=function(t){return yl(5381,t)};function im(t){return Go(nm(t)>>>0)}function L1(t){return t.displayName||t.name||"Component"}function Ur(t){return typeof t=="string"&&!0}var um=typeof Symbol=="function"&&Symbol.for,rm=um?Symbol.for("react.memo"):60115,Q1=um?Symbol.for("react.forward_ref"):60112,Z1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K1=((Nr={})[Q1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nr[rm]=om,Nr);function Nf(t){return("type"in(e=t)&&e.type.$$typeof)===rm?om:"$$typeof"in t?K1[t.$$typeof]:Z1;var e}var J1=Object.defineProperty,$1=Object.getOwnPropertyNames,Uf=Object.getOwnPropertySymbols,F1=Object.getOwnPropertyDescriptor,W1=Object.getPrototypeOf,Rf=Object.prototype;function cm(t,e,a){if(typeof e!="string"){if(Rf){var l=W1(e);l&&l!==Rf&&cm(t,l,a)}var n=$1(e);Uf&&(n=n.concat(Uf(e)));for(var i=Nf(t),u=Nf(e),r=0;r<n.length;++r){var o=n[r];if(!(o in V1||a&&a[o]||u&&o in u||i&&o in i)){var f=F1(e,o);try{J1(t,o,f)}catch{}}}}return t}function Xl(t){return typeof t=="function"}function Fc(t){return typeof t=="object"&&"styledComponentId"in t}function Ha(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function qo(t,e){if(t.length===0)return"";for(var a=t[0],l=1;l<t.length;l++)a+=t[l];return a}function Ln(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Xo(t,e,a){if(a===void 0&&(a=!1),!a&&!Ln(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var l=0;l<e.length;l++)t[l]=Xo(t[l],e[l]);else if(Ln(e))for(var l in e)t[l]=Xo(t[l],e[l]);return t}function Wc(t,e){Object.defineProperty(t,"toString",{value:e})}function ai(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var I1=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var a=0,l=0;l<e;l++)a+=this.groupSizes[l];return a},t.prototype.insertRules=function(e,a){if(e>=this.groupSizes.length){for(var l=this.groupSizes,n=l.length,i=n;e>=i;)if((i<<=1)<0)throw ai(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(l),this.length=i;for(var u=n;u<i;u++)this.groupSizes[u]=0}for(var r=this.indexOfGroup(e+1),o=(u=0,a.length);u<o;u++)this.tag.insertRule(r,a[u])&&(this.groupSizes[e]++,r++)},t.prototype.clearGroup=function(e){if(e<this.length){var a=this.groupSizes[e],l=this.indexOfGroup(e),n=l+a;this.groupSizes[e]=0;for(var i=l;i<n;i++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(e){var a="";if(e>=this.length||this.groupSizes[e]===0)return a;for(var l=this.groupSizes[e],n=this.indexOfGroup(e),i=n+l,u=n;u<i;u++)a+="".concat(this.tag.getRule(u)).concat($c);return a},t}(),Xi=new Map,bu=new Map,ki=1,vl=function(t){if(Xi.has(t))return Xi.get(t);for(;bu.has(ki);)ki++;var e=ki++;return Xi.set(t,e),bu.set(e,t),e},P1=function(t,e){ki=e+1,Xi.set(t,e),bu.set(e,t)},ty="style[".concat(Gl,"][").concat(em,'="').concat(Zu,'"]'),ey=new RegExp("^".concat(Gl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ay=function(t,e,a){for(var l,n=a.split(","),i=0,u=n.length;i<u;i++)(l=n[i])&&t.registerName(e,l)},ly=function(t,e){for(var a,l=((a=e.textContent)!==null&&a!==void 0?a:"").split($c),n=[],i=0,u=l.length;i<u;i++){var r=l[i].trim();if(r){var o=r.match(ey);if(o){var f=0|parseInt(o[1],10),g=o[2];f!==0&&(P1(g,f),ay(t,g,o[3]),t.getTag().insertRules(f,n)),n.length=0}else n.push(r)}}},Bf=function(t){for(var e=document.querySelectorAll(ty),a=0,l=e.length;a<l;a++){var n=e[a];n&&n.getAttribute(Gl)!==tm&&(ly(t,n),n.parentNode&&n.parentNode.removeChild(n))}};function ny(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sm=function(t){var e=document.head,a=t||e,l=document.createElement("style"),n=function(r){var o=Array.from(r.querySelectorAll("style[".concat(Gl,"]")));return o[o.length-1]}(a),i=n!==void 0?n.nextSibling:null;l.setAttribute(Gl,tm),l.setAttribute(em,Zu);var u=ny();return u&&l.setAttribute("nonce",u),a.insertBefore(l,i),l},iy=function(){function t(e){this.element=sm(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var l=document.styleSheets,n=0,i=l.length;n<i;n++){var u=l[n];if(u.ownerNode===a)return u}throw ai(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""},t}(),uy=function(){function t(e){this.element=sm(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,a){if(e<=this.length&&e>=0){var l=document.createTextNode(a);return this.element.insertBefore(l,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ry=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,a){return e<=this.length&&(this.rules.splice(e,0,a),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Yf=xu,oy={isServer:!xu,useCSSOMInjection:!Y1},Su=function(){function t(e,a,l){e===void 0&&(e=ql),a===void 0&&(a={});var n=this;this.options=Rt(Rt({},oy),e),this.gs=a,this.names=new Map(l),this.server=!!e.isServer,!this.server&&xu&&Yf&&(Yf=!1,Bf(this)),Wc(this,function(){return function(i){for(var u=i.getTag(),r=u.length,o="",f=function(y){var m=function(s){return bu.get(s)}(y);if(m===void 0)return"continue";var h=i.names.get(m),S=u.getGroup(y);if(h===void 0||!h.size||S.length===0)return"continue";var E="".concat(Gl,".g").concat(y,'[id="').concat(m,'"]'),_="";h!==void 0&&h.forEach(function(s){s.length>0&&(_+="".concat(s,","))}),o+="".concat(S).concat(E,'{content:"').concat(_,'"}').concat($c)},g=0;g<r;g++)f(g);return o}(n)})}return t.registerId=function(e){return vl(e)},t.prototype.rehydrate=function(){!this.server&&xu&&Bf(this)},t.prototype.reconstructWithOptions=function(e,a){return a===void 0&&(a=!0),new t(Rt(Rt({},this.options),e),this.gs,a&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(a){var l=a.useCSSOMInjection,n=a.target;return a.isServer?new ry(n):l?new iy(n):new uy(n)}(this.options),new I1(e)));var e},t.prototype.hasNameForId=function(e,a){return this.names.has(e)&&this.names.get(e).has(a)},t.prototype.registerName=function(e,a){if(vl(e),this.names.has(e))this.names.get(e).add(a);else{var l=new Set;l.add(a),this.names.set(e,l)}},t.prototype.insertRules=function(e,a,l){this.registerName(e,a),this.getTag().insertRules(vl(e),l)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(vl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),cy=/&/g,xl=47;function Gf(t){if(t.indexOf("}")===-1)return!1;for(var e=t.length,a=0,l=0,n=!1,i=0;i<e;i++){var u=t.charCodeAt(i);if(l!==0||n||u!==xl||t.charCodeAt(i+1)!==42)if(n)u===42&&t.charCodeAt(i+1)===xl&&(n=!1,i++);else if(u!==34&&u!==39||i!==0&&t.charCodeAt(i-1)===92){if(l===0){if(u===123)a++;else if(u===125&&--a<0)return!0}}else l===0?l=u:l===u&&(l=0);else n=!0,i++}return a!==0||l!==0}function fm(t,e){return t.map(function(a){return a.type==="rule"&&(a.value="".concat(e," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(e," ")),a.props=a.props.map(function(l){return"".concat(e," ").concat(l)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=fm(a.children,e)),a})}function sy(t){var e,a,l,n=ql,i=n.options,u=i===void 0?ql:i,r=n.plugins,o=r===void 0?Vu:r,f=function(m,h,S){return S.startsWith(a)&&S.endsWith(a)&&S.replaceAll(a,"").length>0?".".concat(e):m},g=o.slice();g.push(function(m){m.type===Xu&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(cy,a).replace(l,f))}),u.prefix&&g.push(R1),g.push(H1);var y=function(m,h,S,E){h===void 0&&(h=""),S===void 0&&(S=""),E===void 0&&(E="&"),e=E,a=h,l=new RegExp("\\".concat(a,"\\b"),"g");var _=function(p){if(!Gf(p))return p;for(var v=p.length,b="",A=0,x=0,M=0,D=!1,j=0;j<v;j++){var K=p.charCodeAt(j);if(M!==0||D||K!==xl||p.charCodeAt(j+1)!==42)if(D)K===42&&p.charCodeAt(j+1)===xl&&(D=!1,j++);else if(K!==34&&K!==39||j!==0&&p.charCodeAt(j-1)===92){if(M===0)if(K===123)x++;else if(K===125){if(--x<0){for(var et=j+1;et<v;){var N=p.charCodeAt(et);if(N===59||N===10)break;et++}et<v&&p.charCodeAt(et)===59&&et++,x=0,j=et-1,A=et;continue}x===0&&(b+=p.substring(A,j+1),A=j+1)}else K===59&&x===0&&(b+=p.substring(A,j+1),A=j+1)}else M===0?M=K:M===K&&(M=0);else D=!0,j++}if(A<v){var R=p.substring(A);Gf(R)||(b+=R)}return b}(function(p){if(p.indexOf("//")===-1)return p;for(var v=p.length,b=[],A=0,x=0,M=0,D=0;x<v;){var j=p.charCodeAt(x);if(j!==34&&j!==39||x!==0&&p.charCodeAt(x-1)===92)if(M===0)if(j===40&&x>=3&&(32|p.charCodeAt(x-1))==108&&(32|p.charCodeAt(x-2))==114&&(32|p.charCodeAt(x-3))==117)D=1,x++;else if(D>0)j===41?D--:j===40&&D++,x++;else if(j===xl&&x+1<v&&p.charCodeAt(x+1)===xl){for(x>A&&b.push(p.substring(A,x));x<v&&p.charCodeAt(x)!==10;)x++;A=x}else x++;else x++;else M===0?M=j:M===j&&(M=0),x++}return A===0?p:(A<v&&b.push(p.substring(A)),b.join(""))}(m)),s=O1(S||h?"".concat(S," ").concat(h," { ").concat(_," }"):_);u.namespace&&(s=fm(s,u.namespace));var c=[];return vu(s,N1(g.concat(U1(function(p){return c.push(p)})))),c};return y.hash=o.length?o.reduce(function(m,h){return h.name||ai(15),yl(m,h.name)},5381).toString():"",y}var fy=new Su,ko=sy(),Lo={shouldForwardProp:void 0,styleSheet:fy,stylis:ko},dm=Qe?{Provider:function(t){return t.children},Consumer:function(t){return(0,t.children)(Lo)}}:Ut.createContext(Lo);dm.Consumer;Qe||Ut.createContext(void 0);function Qo(){return Qe?Lo:Ut.useContext(dm)}var dy=function(){function t(e,a){var l=this;this.inject=function(n,i){i===void 0&&(i=ko);var u=l.name+i.hash;n.hasNameForId(l.id,u)||n.insertRules(l.id,u,i(l.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=a,Wc(this,function(){throw ai(12,String(l.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ko),this.name+e.hash},t}();function py(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in B1||t.startsWith("--")?String(e).trim():"".concat(e,"px")}var my=function(t){return t>="A"&&t<="Z"};function qf(t){for(var e="",a=0;a<t.length;a++){var l=t[a];if(a===1&&l==="-"&&t[0]==="-")return t;my(l)?e+="-"+l.toLowerCase():e+=l}return e.startsWith("ms-")?"-"+e:e}var pm=function(t){return t==null||t===!1||t===""},mm=function(t){var e=[];for(var a in t){var l=t[a];t.hasOwnProperty(a)&&!pm(l)&&(Array.isArray(l)&&l.isCss||Xl(l)?e.push("".concat(qf(a),":"),l,";"):Ln(l)?e.push.apply(e,Xn(Xn(["".concat(a," {")],mm(l),!1),["}"],!1)):e.push("".concat(qf(a),": ").concat(py(a,l),";")))}return e};function Sa(t,e,a,l){if(pm(t))return[];if(Fc(t))return[".".concat(t.styledComponentId)];if(Xl(t)){if(!Xl(i=t)||i.prototype&&i.prototype.isReactComponent||!e)return[t];var n=t(e);return Sa(n,e,a,l)}var i;return t instanceof dy?a?(t.inject(a,l),[t.getName(l)]):[t]:Ln(t)?mm(t):Array.isArray(t)?Array.prototype.concat.apply(Vu,t.map(function(u){return Sa(u,e,a,l)})):[t.toString()]}function hm(t){for(var e=0;e<t.length;e+=1){var a=t[e];if(Xl(a)&&!Fc(a))return!1}return!0}var hy=nm(Zu),gy=function(){function t(e,a,l){this.rules=e,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&hm(e),this.componentId=a,this.baseHash=yl(hy,a),this.baseStyle=l,Su.registerId(a)}return t.prototype.generateAndInjectStyles=function(e,a,l){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,a,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))n=Ha(n,this.staticRulesId);else{var i=qo(Sa(this.rules,e,a,l)),u=Go(yl(this.baseHash,i)>>>0);if(!a.hasNameForId(this.componentId,u)){var r=l(i,".".concat(u),void 0,this.componentId);a.insertRules(this.componentId,u,r)}n=Ha(n,u),this.staticRulesId=u}else{for(var o=yl(this.baseHash,l.hash),f="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")f+=y;else if(y){var m=qo(Sa(y,e,a,l));o=yl(o,m+g),f+=m}}if(f){var h=Go(o>>>0);if(!a.hasNameForId(this.componentId,h)){var S=l(f,".".concat(h),void 0,this.componentId);a.insertRules(this.componentId,h,S)}n=Ha(n,h)}}return{className:n,css:typeof window>"u"?a.getTag().getGroup(vl(this.componentId)):""}},t}(),Ic=Qe?{Provider:function(t){return t.children},Consumer:function(t){return(0,t.children)(void 0)}}:Ut.createContext(void 0);Ic.Consumer;var Rr={};function yy(t,e,a){var l=Fc(t),n=t,i=!Ur(t),u=e.attrs,r=u===void 0?Vu:u,o=e.componentId,f=o===void 0?function(v,b){var A=typeof v!="string"?"sc":Cf(v);Rr[A]=(Rr[A]||0)+1;var x="".concat(A,"-").concat(im(Zu+A+Rr[A]));return b?"".concat(b,"-").concat(x):x}(e.displayName,e.parentComponentId):o,g=e.displayName,y=g===void 0?function(v){return Ur(v)?"styled.".concat(v):"Styled(".concat(L1(v),")")}(t):g,m=e.displayName&&e.componentId?"".concat(Cf(e.displayName),"-").concat(e.componentId):e.componentId||f,h=l&&n.attrs?n.attrs.concat(r).filter(Boolean):r,S=e.shouldForwardProp;if(l&&n.shouldForwardProp){var E=n.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;S=function(v,b){return E(v,b)&&_(v,b)}}else S=E}var s=new gy(a,m,l?n.componentStyle:void 0);function c(v,b){return function(A,x,M){var D=A.attrs,j=A.componentStyle,K=A.defaultProps,et=A.foldedComponentIds,N=A.styledComponentId,R=A.target,at=Qe?void 0:Ut.useContext(Ic),T=Qo(),C=A.shouldForwardProp||T.shouldForwardProp,O=am(x,at,K)||ql,G=function(Wa,je,ni){for(var Wl,De=Rt(Rt({},je),{className:void 0,theme:ni}),$u=0;$u<Wa.length;$u+=1){var ii=Xl(Wl=Wa[$u])?Wl(De):Wl;for(var Ia in ii)Ia==="className"?De.className=Ha(De.className,ii[Ia]):Ia==="style"?De.style=Rt(Rt({},De.style),ii[Ia]):De[Ia]=ii[Ia]}return"className"in je&&typeof je.className=="string"&&(De.className=Ha(De.className,je.className)),De}(D,x,O),Z=G.as||R,zt={};for(var Ht in G)G[Ht]===void 0||Ht[0]==="$"||Ht==="as"||Ht==="theme"&&G.theme===O||(Ht==="forwardedAs"?zt.as=G.forwardedAs:C&&!C(Ht,Z)||(zt[Ht]=G[Ht]));var We=function(Wa,je){var ni=Qo(),Wl=Wa.generateAndInjectStyles(je,ni.styleSheet,ni.stylis);return Wl}(j,G),qt=We.className,ge=We.css,Fa=Ha(et,N);qt&&(Fa+=" "+qt),G.className&&(Fa+=" "+G.className),zt[Ur(Z)&&!lm.has(Z)?"class":"className"]=Fa,M&&(zt.ref=M);var li=B.createElement(Z,zt);return Qe&&ge?Ut.createElement(Ut.Fragment,null,Ut.createElement("style",{precedence:"styled-components",href:"sc-".concat(N,"-").concat(qt),children:ge}),li):li}(p,v,b)}c.displayName=y;var p=Ut.forwardRef(c);return p.attrs=h,p.componentStyle=s,p.displayName=y,p.shouldForwardProp=S,p.foldedComponentIds=l?Ha(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=m,p.target=l?n.target:t,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=l?function(b){for(var A=[],x=1;x<arguments.length;x++)A[x-1]=arguments[x];for(var M=0,D=A;M<D.length;M++)Xo(b,D[M],!0);return b}({},n.defaultProps,v):v}}),Wc(p,function(){return".".concat(p.styledComponentId)}),i&&cm(p,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Xf(t,e){for(var a=[t[0]],l=0,n=e.length;l<n;l+=1)a.push(e[l],t[l+1]);return a}var kf=function(t){return Object.assign(t,{isCss:!0})};function gm(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];if(Xl(t)||Ln(t))return kf(Sa(Xf(Vu,Xn([t],e,!0))));var l=t;return e.length===0&&l.length===1&&typeof l[0]=="string"?Sa(l):kf(Sa(Xf(l,e)))}function Zo(t,e,a){if(a===void 0&&(a=ql),!e)throw ai(1,e);var l=function(n){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return t(e,a,gm.apply(void 0,Xn([n],i,!1)))};return l.attrs=function(n){return Zo(t,e,Rt(Rt({},a),{attrs:Array.prototype.concat(a.attrs,n).filter(Boolean)}))},l.withConfig=function(n){return Zo(t,e,Rt(Rt({},a),n))},l}var ym=function(t){return Zo(yy,t)},w=ym;lm.forEach(function(t){w[t]=ym(t)});var vy=function(){function t(e,a){this.rules=e,this.componentId=a,this.isStatic=hm(e),Su.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,a,l,n){var i=n(qo(Sa(this.rules,a,l,n)),""),u=this.componentId+e;l.insertRules(u,u,i)},t.prototype.removeStyles=function(e,a){a.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,a,l,n){e>2&&Su.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?l.hasNameForId(i,i)||this.createStyles(e,a,l,n):(this.removeStyles(e,l),this.createStyles(e,a,l,n))},t}();function xy(t){for(var e=[],a=1;a<arguments.length;a++)e[a-1]=arguments[a];var l=gm.apply(void 0,Xn([t],e,!1)),n="sc-global-".concat(im(JSON.stringify(l))),i=new vy(l,n),u=new WeakMap,r=function(o){var f=Qo(),g=Qe?void 0:Ut.useContext(Ic),y=u.get(f.styleSheet);if(y===void 0&&(y=f.styleSheet.allocateGSInstance(n),u.set(f.styleSheet,y)),(typeof window>"u"||!f.styleSheet.server)&&function(_,s,c,p,v){if(i.isStatic)i.renderStyles(_,G1,c,v);else{var b=Rt(Rt({},s),{theme:am(s,p,r.defaultProps)});i.renderStyles(_,b,c,v)}}(y,o,f.styleSheet,g,f.stylis),!Qe){var m=Ut.useRef(!0);Ut.useLayoutEffect(function(){return m.current=!1,function(){m.current=!0,queueMicrotask(function(){m.current&&(i.removeStyles(y,f.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(n,'"]')).forEach(function(_){return _.remove()}))})}},[y,f.styleSheet])}if(Qe){var h=n+y,S=typeof window>"u"?f.styleSheet.getTag().getGroup(vl(h)):"";if(S){var E="".concat(n,"-").concat(y);return Ut.createElement("style",{key:E,"data-styled-global":n,precedence:"styled-components",href:E,children:S})}}return null};return Ut.memo(r)}const by=xy`
  :root{
    --bg: #f7f7f7;
    --card: #ffffff;
    --rule: #e8e8e8;
    --muted: #6b717d;
    --text: #0b0f14;
    --accentGradient: linear-gradient(135deg, #FF512F, #DD2476);
    --accent: #DD2476; /* fallback solid accent for gaps */
    --shadow: 0 10px 30px rgba(0,0,0,.06);
    --radius: 20px;
  }

  /* Dark theme overrides */
  .theme-dark {
    --bg: #070914;
    --card: #0e1220;
    --rule: rgba(233,236,244,0.12);
    --muted: #A9B3C8;
    --text: #E9ECF4;
    --accentGradient: linear-gradient(135deg, #0D9488, #14B8A6);
    --accent: #14B8A6;
    --shadow: 0 14px 40px rgba(0,0,0,0.45);
  }

  * { box-sizing: border-box; }
  html { 
    font-size: 112%; /* Makes content slightly larger at 100% zoom */
    scroll-behavior: smooth;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
    overflow-x: hidden;
  }

  /* Responsive font sizing for mobile */
  @media (max-width: 768px) {
    html {
      font-size: 100%; /* Slightly smaller on tablets */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 95%; /* Even smaller on mobile */
    }
  }

  body { 
    height: 100%; 
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: var(--text);
    background: var(--bg);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow: hidden;
    overflow-x: hidden;
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
  }

  /* Star cursor for dark mode */
  .theme-dark html,
  .theme-dark body {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%231AE5D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, auto;
  }

  /* Pointer cursor for interactive elements */
  a, button, [role="button"] {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23FF512F" stroke="%23FF512F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, pointer;
  }
  
  .theme-dark a,
  .theme-dark button,
  .theme-dark [role="button"] {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%231AE5D4" stroke="%231AE5D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 10 22 12 15 14 12 22 9 14 2 12 9 10"/></svg>') 12 12, pointer;
  }
  #root {
    height: 100%;
    overflow: hidden;
  }

  /* Main scroll container */
  main {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 50px; /* Reduced from 300px */
  }

  /* Disable snap on mobile for better scrolling */
  @media (max-width: 768px) {
    main {
      scroll-snap-type: none;
      padding-bottom: 30px;
    }
  }

  /* Better touch scrolling on mobile */
  @media (hover: none) and (pointer: coarse) {
    main {
      scroll-snap-type: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-style: italic;
    transition: all 0.2s ease;
  }

  a:hover {
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    opacity: 0.7;
  }

  /* Don't style emojis in links */
  a:hover::before,
  a:hover::after {
    text-decoration: none;
  }

  /* Buttons and icons should never be underlined */
  button,
  button a,
  button:hover,
  button a:hover,
  a button,
  a button:hover {
    text-decoration: none !important;
  }

  /* Icon elements should never be underlined */
  a span[class*="material"],
  a span[class*="Material"],
  a svg,
  a img {
    text-decoration: none !important;
    font-style: normal;
  }

  /* Styled buttons/links with inline-flex + border should use transform animation, not underline */
  a[style*="inline-flex"][style*="border"]:hover,
  a[style*="inline-flex"][style*="border"] *,
  a[style*="display: flex"][style*="border"]:hover,
  a[style*="display: flex"][style*="border"] *,
  a[style*="display:flex"][style*="border"]:hover,
  a[style*="display:flex"][style*="border"] * {
    text-decoration: none !important;
  }

  /* Nav links shouldn't be italic/underlined */
  nav a,
  [role="navigation"] a {
    text-decoration: none;
    font-style: normal;
  }

  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    min-height: 100vh;
    position: relative;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Maintain full viewport height on mobile */
  @media (max-width: 768px) {
    section {
      scroll-snap-align: none;
      padding-top: 70px;
      min-height: 100vh;
    }
  }

  @media (max-width: 480px) {
    section {
      padding-top: 60px;
      min-height: 100vh;
    }
  }

  /* Footer should not snap but should be visible */
  footer {
    scroll-snap-align: end;
    min-height: auto;
    scroll-snap-stop: normal;
  }

  /* Avatar-synced heading animations */
  .avatar-synced {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    will-change: transform, opacity;
    display: inline-block;
  }

  /* Animate when parent has .visible class */
  .visible .avatar-synced {
    animation: hello-fade 0.7s 0.2s 1 ease forwards, music-move 1s 2.5s infinite alternate ease-in-out;
  }

  .avatar-accent {
    display: inline-block;
    opacity: 0;
    transform: translateY(8px) scale(0.96);
    background-image: var(--accentGradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .visible .avatar-accent {
    animation: hello-fade 0.7s 0.4s 1 ease forwards;
  }

  @keyframes hello-fade { to { opacity: 1; transform: translateY(0) scale(1); } }

  /* subtle music-move used by avatar and hero text */
  @keyframes music-move{0%,100%{transform:rotate(0)}33%{transform:rotate(-5deg)}66%{transform:rotate(5deg)}}
`;function Sy({isDarkMode:t}){const e=B.useRef(null),a=B.useRef([]),l=B.useRef(null);return B.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;a.current=[];const i=t?{primary:"rgba(13,148,136,",secondary:"rgba(20,184,166,",glowColor:"rgba(13,148,136,0.85)",starColors:["20 184 166","45 212 191"]}:{primary:"rgba(239,65,54,",secondary:"rgba(220,50,80,",glowColor:"rgba(176,30,94,0.85)",starColors:["249 146 253","252 254 255"]},u="cursor-glow-container";let r=document.getElementById(u);r||(r=document.createElement("div"),r.id=u,r.style.position="fixed",r.style.inset="0",r.style.pointerEvents="none",r.style.zIndex="99998",r.style.top="0",r.style.left="0",document.body.appendChild(r));const o="cursor-trail-styles";if(document.getElementById(o)){const N=document.getElementById(o);N.textContent=`
          .glow-point { position: fixed; pointer-events: none; border-radius: 50%; box-shadow: 0 0 18px 8px ${i.glowColor}; }
          .star { position: absolute; z-index: 9999; color: white; font-size: 1rem; pointer-events: none; }
          @keyframes fall-1 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 5%{ transform: translate(10px,-10px) scale(1); opacity:1 } 100%{ transform: translate(25px,200px) scale(1); opacity:0 } }
          @keyframes fall-2 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 10%{ transform: translate(-10px,-5px) scale(1); opacity:1 } 100%{ transform: translate(-10px,160px) scale(0.25); opacity:0 } }
          @keyframes fall-3 { 0%{ transform: translate(0,0) scale(0.5); opacity:0 } 15%{ transform: translate(7px,5px) scale(1); opacity:1 } 100%{ transform: translate(20px,120px) scale(0.5); opacity:0 } }
        `}else{const N=document.createElement("style");N.id=o,N.textContent=`
          .glow-point { position: fixed; pointer-events: none; border-radius: 50%; box-shadow: 0 0 18px 8px ${i.glowColor}; }
          .star { position: absolute; z-index: 9999; color: white; font-size: 1rem; pointer-events: none; }
          @keyframes fall-1 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 5%{ transform: translate(10px,-10px) scale(1); opacity:1 } 100%{ transform: translate(25px,200px) scale(1); opacity:0 } }
          @keyframes fall-2 { 0%{ transform: translate(0,0) scale(0.25); opacity:0 } 10%{ transform: translate(-10px,-5px) scale(1); opacity:1 } 100%{ transform: translate(-10px,160px) scale(0.25); opacity:0 } }
          @keyframes fall-3 { 0%{ transform: translate(0,0) scale(0.5); opacity:0 } 15%{ transform: translate(7px,5px) scale(1); opacity:1 } 100%{ transform: translate(20px,120px) scale(0.5); opacity:0 } }
        `,document.head.appendChild(N)}const f={starAnimationDuration:500,minimumTimeBetweenStars:160,minimumDistanceBetweenStars:75,glowDuration:20,maximumGlowPointSpacing:10,colors:i.starColors,sizes:["1.4rem","1rem","0.6rem"],animations:["fall-1","fall-2","fall-3"]};let g=Date.now(),y={x:0,y:0},m={x:0,y:0};const h=(N,R)=>Math.floor(Math.random()*(R-N+1))+N,S=N=>N[h(0,N.length-1)],E=N=>`${N}px`,_=N=>{const R=document.createElement("span"),at=S(f.colors);R.className="star",R.style.left=E(N.x),R.style.top=E(N.y),R.style.fontSize=S(f.sizes),R.style.color=`rgb(${at})`,R.style.textShadow=`0 0 24px rgb(${at} / 0.45)`;const T=S(f.animations);R.style.animationName=T,R.style.animationDuration=`${f.starAnimationDuration}ms`,R.style.animationFillMode="forwards",document.body.appendChild(R),setTimeout(()=>R.remove(),f.starAnimationDuration+50)},s=N=>{const R=document.createElement("div");R.className="glow-point";const at=Math.random()*8+4;R.style.width=`${at}px`,R.style.height=`${at}px`,R.style.left=E(N.x-at/2),R.style.top=E(N.y-at/2),r.appendChild(R),setTimeout(()=>R.remove(),f.glowDuration+30)},c=(N,R)=>{const at=R.x-N.x,T=R.y-N.y;return Math.hypot(at,T)},p=N=>Math.max(Math.floor(N/f.maximumGlowPointSpacing),1),v=(N,R)=>{const at=c(N,R),T=p(at),C=(R.x-N.x)/T,O=(R.y-N.y)/T;for(let G=0;G<T;G++){const Z=N.x+C*G,zt=N.y+O*G;s({x:Z,y:zt})}},b=e.current;if(!b)return;const A=b.getContext("2d");let x=Math.max(1,window.devicePixelRatio||1);const M=()=>{x=Math.max(1,window.devicePixelRatio||1),b.width=Math.floor(window.innerWidth*x),b.height=Math.floor(window.innerHeight*x),b.style.width=`${window.innerWidth}px`,b.style.height=`${window.innerHeight}px`,A.setTransform(x,0,0,x,0,0)};M(),window.addEventListener("resize",M);const D=N=>{A.globalCompositeOperation="destination-out",A.fillStyle="rgba(0,0,0,0.9)",A.fillRect(0,0,b.width/x,b.height/x),A.globalCompositeOperation="lighter";const R=Date.now();for(let at=a.current.length-1;at>=0;at--){const T=a.current[at],O=1-(R-T.t)/50;if(O<=0){a.current.splice(at,1);continue}const G=T.s*(.15+O*.85),Z=A.createRadialGradient(T.x,T.y,0,T.x,T.y,G*3);Z.addColorStop(0,`${i.primary}${.95*O})`),Z.addColorStop(.4,`${i.primary}${.7*O})`),Z.addColorStop(.7,`${i.secondary}${.5*O})`),Z.addColorStop(1,`${i.secondary}${.02*O})`),A.fillStyle=Z,A.beginPath(),A.arc(T.x,T.y,G*1.6,0,Math.PI*2),A.fill()}l.current=requestAnimationFrame(D)};l.current=requestAnimationFrame(D);let j=null;const K=N=>{const R=N.clientX,at=N.clientY,T=Date.now();if(j){const zt=R-j.x,Ht=at-j.y,We=Math.hypot(zt,Ht),qt=Math.max(1,Math.floor(We/1.5));for(let ge=0;ge<=qt;ge++){const Fa=ge/qt,li=j.x+zt*Fa,Wa=j.y+Ht*Fa;for(let je=0;je<2;je++)a.current.push({x:li+(Math.random()-.5)*1.2,y:Wa+(Math.random()-.5)*1.2,t:T,s:Math.random()*1.8+.6})}}else for(let zt=0;zt<3;zt++)a.current.push({x:R+(Math.random()-.5)*2,y:at+(Math.random()-.5)*2,t:T,s:Math.random()*1.8+.6});const C={x:R,y:at};m.x===0&&m.y===0&&(m=C);const O=Date.now(),G=c(y,C)>=f.minimumDistanceBetweenStars,Z=O-g>f.minimumTimeBetweenStars;(G||Z)&&(_(C),g=O,y=C),v(m,C),m=C,j={x:R,y:at},a.current.length>2500&&a.current.splice(0,600)},et=()=>j=null;return window.addEventListener("mousemove",K),window.addEventListener("mouseup",et),window.addEventListener("mouseleave",et),()=>{cancelAnimationFrame(l.current),window.removeEventListener("resize",M),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",et),window.removeEventListener("mouseleave",et)}},[t]),d.jsx("canvas",{ref:e,style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:99999,top:0,left:0}})}function wy({size:t=80,color:e="currentColor",animate:a=!0,className:l="",style:n,...i}){return d.jsxs("svg",{width:t,height:t,viewBox:"0 0 160 120",fill:"none",role:"img","aria-label":"PB Signature Logo",className:l,style:{display:"block",overflow:"visible",...n},...i,children:[d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:"pb-ink",x1:"0",y1:"0",x2:"1",y2:"1",children:[d.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"1"}),d.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.65"})]}),d.jsx("filter",{id:"ink-bleed",x:"-20%",y:"-20%",width:"140%",height:"140%",children:d.jsx("feGaussianBlur",{stdDeviation:"0.6"})})]}),d.jsxs("g",{fill:"none",stroke:"url(#pb-ink)",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#ink-bleed)",children:[d.jsx("path",{d:`
            M 34 18
            Q 26 58, 34 102
          `,strokeWidth:"7.5"}),d.jsx("path",{d:`
            M 34 22
            C 56 12, 86 18, 86 42
            C 86 64, 52 62, 36 56
          `,strokeWidth:"4.2",style:{transition:a?"transform 0.6s ease":"none",transformOrigin:"60px 42px"},onMouseEnter:u=>a&&(u.currentTarget.style.transform="scale(1.06)"),onMouseLeave:u=>a&&(u.currentTarget.style.transform="scale(1)")}),d.jsx("path",{d:`
            M 38 60
            C 52 70, 66 74, 82 72
          `,strokeWidth:"2.6",opacity:"0.7"}),d.jsx("path",{d:`
            M 92 20
            Q 84 60, 92 104
          `,strokeWidth:"6.8"}),d.jsx("path",{d:`
            M 92 26
            C 120 20, 138 34, 134 52
            C 130 70, 102 68, 92 62
          `,strokeWidth:"4"}),d.jsx("path",{d:`
            M 92 60
            C 126 56, 146 70, 142 90
            C 138 112, 106 112, 92 100
          `,strokeWidth:"5.2",style:{transition:a?"transform 0.6s ease":"none",transformOrigin:"118px 82px"},onMouseEnter:u=>a&&(u.currentTarget.style.transform="scale(1.05)"),onMouseLeave:u=>a&&(u.currentTarget.style.transform="scale(1)")}),d.jsx("path",{d:`
            M 132 96
            Q 150 102, 154 90
          `,strokeWidth:"2.2",opacity:"0.55"})]})]})}const zy=w.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Ay=w.div`
  background: var(--bg);
  border-radius: 16px;
  width: min(95vw, 1200px);
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideUp 0.3s ease;
  overflow: hidden;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Ey=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: var(--bg);
`,Ty=w.div`
  flex: 1;
  width: 100%;
  overflow: hidden;
  background: #525659;
`,My=w.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.2s;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.06);
  }
`,jy=w.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  color: inherit;
  border: 1px solid currentColor;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
    text-decoration: none !important;
  }

  * {
    text-decoration: none !important;
  }
`,Dy=w.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
`;function vm({isOpen:t,onClose:e,pdfUrl:a,fileName:l,title:n}){const i=B.useRef(null);return B.useEffect(()=>{if(!t)return;const u=document.createElement("script");return u.src="https://documentservices.adobe.com/view-sdk/viewer.js",u.async=!0,document.body.appendChild(u),u.onload=()=>{window.AdobeDC&&i.current&&new window.AdobeDC.View({clientId:"bf0db43412bf45feb5bff182047986aa",divId:"adobe-dc-view"}).previewFile({content:{location:{url:a}},metaData:{fileName:l}},{embedMode:"SIZED_CONTAINER",showDownloadPDF:!0,showPrintPDF:!0,showLeftHandPanel:!1,showAnnotationTools:!1})},()=>{document.body.contains(u)&&document.body.removeChild(u)}},[t,a,l]),t?d.jsx(zy,{onClick:e,children:d.jsxs(Ay,{onClick:u=>u.stopPropagation(),children:[d.jsxs(Ey,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[d.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:600,fontFamily:"Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",letterSpacing:"-0.01em"},children:n||"Resume"}),d.jsxs(jy,{href:a,download:l,children:[d.jsx(Dy,{style:{fontSize:18},children:"download"}),"Download PDF"]})]}),d.jsx(My,{onClick:e,children:"×"})]}),d.jsx(Ty,{children:d.jsx("div",{id:"adobe-dc-view",ref:i,style:{width:"100%",height:"100%"}})})]})}):null}const _y="Prakhar Bhargava",Oy="AI Product Manager · UX Strategy · Applied AI",Cy="I build AI products that align real user needs with business outcomes — by blending product thinking, UX research, and engineering execution.",Hy="/img/profile.jpg",Ny=[{label:"About",href:"#about"},{label:"Background",href:"#background"},{label:"Contact",href:"#contact"}],Uy=[{Discover:["User interviews","Field studies","Journey mapping","Competitor analysis","Value Discovery"],Define:["Problem framing","Impact metrics","MVP scope & prioritization","Business alignment","Roadmapping"],Design:["Flows & wireframes","Prototyping","AI UX patterns","Design systems","Usability Testing"],Deliver:["Spec to build","Cross-functional alignment","KPI Tracking","Feedback loops","Training & Adoption"]}],Ry=[{title:"AI Deployment at Scale",subtitle:"Measurable quality improvement & AI adoption at industrial scale.",tag:"AI Adoption",image:"/img/work/ai-industrial.jpg",href:"#",phases:["Discover","Define","Deliver"],workId:"ai-deployment-at-scale"},{title:"Clinical AI for Screenings",subtitle:"Workflows that help clinicians act faster with confidence.",tag:"Healthcare AI",image:"/img/work/health-ai.jpg",href:"#",phases:["Discover","Design","Deliver"],workId:"clinical-ai-screenings"},{title:"GovTech at Population Scale",subtitle:"Reduced friction for millions of public platform users.",tag:"GovTech",image:"/img/work/govtech.jpg",href:"#",phases:["Define","Design","Deliver"],workId:"govtech-population-scale"},{title:"AR & HCI for Learning",subtitle:"Immersive interactions for early childhood education.",tag:"HCI · EdTech",image:"/img/work/ar-learning.jpg",href:"#",phases:["Design","Deliver"],workId:"ar-hci-learning"}],By=[{company:"Ripik AI",companyUrl:"https://ripik.ai",logo:"/img/logos/ripik.jpeg",period:"July 2024 — Present",summary:"Led the lifecycle for 15+ AI deployments across manufacturing, improving yield, compliance, and decision making.",tags:["0→1 Products","AI Adoption","Pilot to Scale","Impact Delivery"],default:"Open",positions:[{title:"Senior Solutions Associate — Product",period:"August 2025 — Present",bullets:["Drove value discovery workshops across domains — unlocking a ₹2Cr+ business pipeline.","Managing portfolio of Hindalco - Aluminum & Copper (Mines, Upstream, Downstream), ITC(Paper), Hindustan Zinc (Mines), Alicon(Process Optimisation)"]},{title:"Solutions Associate",period:"November 2024 — July 2025",bullets:["Collaborated with data scientists, engineers, and designers to align technical and design requirements.","Performed data analytics with Python and Excel, transforming insights into actionable improvements and reducing rejection rates by 25.2% for a leading automobile parts manufacturing plant.","Implemented Vision AI analytics solutions to improve yield consistency, raw material analysis and safety monitoring"]},{title:"Frontend Engineer",period:"July 2024 — December 2024",bullets:["Utilizing technologies such as React, Redux, Tailwind, and AWS.","Contributing to the design and development of an internal design system to streamline DesignOps and establish a cohesive design language."]}]},{company:"Wadhwani AI",companyUrl:"https://wadhwaniai.org",logo:"/img/logos/wadhwani.jpeg",period:"2023 — 2024",summary:"Improved clinical screening workflows and built a scalable design system used across 5+ verticals.",tags:["Healthcare UX","Design Systems","Public Impact"],default:"Closed",positions:[{title:"UX/UI Design Intern",period:"2023 — 2024",bullets:["Conducted user research and usability testing at AIIMS Delhi and Vision Centres to inform the design of an AI-based Diabetic Retinopathy screening solution, set for pilot in August 2023.","Contributed to solution development in diverse domains, including Agriculture (KKMS), Tuberculosis (TB Triage), and Education (Swayam, Swayam Prabha), enhancing user experience and adoption.","Created a comprehensive Design System adopted by the entire Design team, enhancing consistency and efficiency across projects.","Initiated and led the Design Playbook project to document internal design and solution practices, fostering knowledge sharing and standardization.","Partnered with the Punjab government to design their Public Redressal System, streamlining citizen feedback and issue resolution processes."]}]},{company:"Government e-Marketplace",companyUrl:"https://gem.gov.in",logo:"/img/logos/gem.png",period:"2022",summary:"Reduced drop-offs and improved flows for millions of registered businesses.",tags:["Scale UX","Friction Removal","Service Design"],default:"Closed",positions:[{title:"UX Intern",period:"2022",bullets:["Resolved 200+ UX issues and achieved a 36% reduction in drop-offs.","Built a scalable Design System to unify 100+ vendor-developed screens."]}]}],Yy=["I'm a Product Manager with a deep foundation in UX design and a passion for applied AI. My career has been about bridging the gap between user empathy and engineering excellence—taking products from concept to market with measurable impact.","My approach combines first-principles thinking, rigorous user research, and cross-functional collaboration. I thrive at the intersection of design, product strategy, and technology—where good ideas become great products that people actually want to use."],Gy=[{title:"Project Name",role:"Product Manager / Designer",description:"Brief description of the project and its impact.",responsibilities:["Led cross-functional team of engineers and designers","Defined product strategy and roadmap","Managed stakeholder communications"]}],qy={lastUpdated:"January 2026",avatar:"/img/profile-illustration.jpg",mosaicFolder:"/img/mosaic",phone:"+91 98993 26396",lines:["AI Product • UX Strategy • Applied AI","India / Remote"],links:[{label:"Email",href:"mailto:hello@prakharbhargava.in"},{label:"Behance",href:"https://behance.net/prakharbhargava1"},{label:"LinkedIn",href:"https://linkedin.com/in/prakharbhargava35"},{label:"GitHub",href:"https://github.com/prakhar-bhargava"},{label:"Resume",href:"/documents/Resume - Prakhar Bhargava.pdf"}]},Xy="Excited for the future. Let's connect!",Mt={name:_y,role:Oy,tagline:Cy,heroImage:Hy,nav:Ny,method:Uy,work:Ry,experience:By,about:Yy,projects:Gy,contact:qy,footerNote:Xy},V={lg:"1120px",md:"980px",sm:"740px",xs:"480px"},Ku=w.section`
  min-height: 100vh; /* full viewport */
  display: flex;
  align-items: center;
  padding: clamp(18px, 4vw, 48px) 0;
  border-top: 1px solid var(--rule);
  background: var(--bg);

  @media (max-width: ${V.sm}) {
    padding: clamp(24px, 6vw, 40px) 0;
    min-height: 100vh;
  }
`,Ju=w.div`
  width: min(${V.lg}, 92%);
  margin: 0 auto;

  @media (max-width: ${V.sm}) {
    width: 90%;
  }
`,ky=w.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  pointer-events: none;
  transition: transform 0.25s ease;
  transform: translateY(${t=>t.$hidden?"-120%":"0"});
  padding: 8px 0;

  @media (max-width: ${V.sm}) {
    padding: 6px 0;
  }
`,Ly=w.div`
  width: min(${V.lg}, 92%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  pointer-events: auto;
`,Qy=w.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,Zy=w.div`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;

  /* subtle glass with gradient tint */
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.55),
      rgba(255, 255, 255, 0.55)
    ),
    var(--accentGradient);
  background-blend-mode: overlay, normal;

  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;w.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow);

  @media (max-width: ${V.xs}) {
    width: 28px;
    height: 28px;
  }
`;const Vy=w.span`
  font-weight: 800;
  @media (max-width: ${V.xs}) {
    font-size: 14px;
  }
`,Ky=w.div`
  display: flex;
  gap: 8px;
  align-items: center;

  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 16px;
  padding: 10px 10px;
  box-shadow: var(--shadow);

  @media (max-width: 740px) {
    display: none;
  }
`,Jy=w.a`
  padding: 10px 14px;
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 999px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 14px;
  box-shadow: var(--shadow);
  transition: transform 0.12s;
  white-space: nowrap; /* keep pills on one line */
  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: ${V.xs}) {
    padding: 8px 12px;
    font-size: 13px;
  }
`,$y=w.a`
  padding: 10px 14px;
  background: var(--accentGradient);
  color: #fff;
  border-color: transparent;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid transparent;
  white-space: nowrap;

  @media (max-width: ${V.xs}) {
    padding: 8px 12px;
    font-size: 13px;
  }
`,Fy=w.div`
  display: grid;
  gap: clamp(16px, 2.5vw, 28px);
  align-items: center;
  grid-template-columns: 1.15fr 0.85fr;

  @media (max-width: ${V.md}) {
    grid-template-columns: 1fr;
    gap: clamp(20px, 4vw, 32px);
  }

  @media (max-width: ${V.sm}) {
    gap: clamp(18px, 3.5vw, 24px);
  }

  @media (max-width: 480px) {
    gap: clamp(16px, 3vw, 20px);
  }
`,Wy=w.div``,Pc=w.h1`
  font-size: clamp(28px, 5.6vw, 54px);
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0;

  @media (max-width: ${V.sm}) {
    font-size: clamp(24px, 6vw, 36px);
    line-height: 1.15;
  }

  @media (max-width: ${V.xs}) {
    font-size: clamp(22px, 7vw, 32px);
    line-height: 1.2;
  }
`,Nt=w.span`
  background: var(--accentGradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: 700;
`,xm=w.p`
  color: var(--muted);
  font-size: clamp(14px, 2vw, 16px);

  @media (max-width: ${V.xs}) {
    font-size: 14px;
  }
`,Iy=w.span`
  display: inline-block;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: var(--card);
  border: 1px solid var(--rule);
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  box-shadow: var(--shadow);
  color: var(--text);

  @media (max-width: ${V.xs}) {
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
`;w.div`
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1/1;
  border-radius: 24px;
  background: center/cover no-repeat url(${t=>t.$img});
  box-shadow: var(--shadow);
  margin: 0 auto;

  @media (max-width: ${V.md}) {
    max-width: 360px;
  }

  @media (max-width: ${V.sm}) {
    max-width: 280px;
    border-radius: 18px;
  }

  @media (max-width: ${V.xs}) {
    max-width: 240px;
    border-radius: 16px;
  }
`;w.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${V.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${V.sm}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;w.a`
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;w.div`
  aspect-ratio: 16/9;
  background: center/cover no-repeat url(${t=>t.$img});
`;w.div`
  padding: 14px;
`;w.div`
  color: var(--muted);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;w.h3`
  margin: 6px 0 4px;
  font-size: clamp(16px, 2.2vw, 18px);
`;w.p`
  color: var(--muted);
  font-size: 14px;
`;const Py=w.div`
  display: grid;
  gap: clamp(20px, 3vw, 40px);
  grid-template-columns: 1fr 1.4fr;
  @media (max-width: ${V.md}) {
    grid-template-columns: 1fr;
  }
`,tv=w.div``,ev=w.h1`
  font-size: clamp(26px, 5vw, 56px);
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0;

  @media (max-width: ${V.sm}) {
    font-size: clamp(22px, 6vw, 36px);
    line-height: 1.15;
  }

  @media (max-width: ${V.xs}) {
    font-size: clamp(20px, 7vw, 28px);
    line-height: 1.2;
  }
`,av=w.p`
  color: var(--muted);
  margin-top: 14px;
  max-width: 65ch;

  @media (max-width: ${V.xs}) {
    font-size: 14px;
  }
`,lv=w.div`
  display: grid;
  gap: 18px;
`,nv=w.div`
  padding: 16px 0;
  border-top: 1px solid var(--rule);

  @media (max-width: ${V.xs}) {
    padding: 12px 0;
  }
`,iv=w.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`,uv=w.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow);
`,rv=w.a`
  color: var(--gradientaccent);
  font-weight: 700;
  text-decoration: none;
`,ov=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,cv=w.h3`
  margin: 0;
  font-size: clamp(17px, 2.2vw, 20px);
`,sv=w.div`
  color: var(--muted);
  font-size: 13px;
  margin: 6px 0 8px;
`;w.div`
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
`;const fv=w.button`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--rule);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 18px;
  transition: background 0.15s, transform 0.12s;
  &:hover {
    background: #f7f7f7;
    transform: translateY(-1px);
  }
  @media (max-width: ${V.xs}) {
    width: 32px;
    height: 32px;
  }
`,dv=w.p`
  color: var(--muted);
  margin: 6px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 65ch;

  @media (max-width: ${V.xs}) {
    font-size: 14px;
  }
`,pv=w.div`
  margin-top: 8px;
  display: grid;
  gap: 12px;
`,mv=w.div`
  font-weight: 700;
`,hv=w.div`
  color: var(--muted);
  font-size: 12px;
`,gv=w.ul`
  margin: 6px 0 0 0;
  padding-left: 18px;
  color: var(--muted);
  li {
    margin: 3px 0;
    font-size: 13px;
    line-height: 1.5;
  }

  @media (max-width: ${V.xs}) {
    padding-left: 16px;
    li {
      font-size: 12px;
    }
  }
`,yv=w.span`
  color: var(--muted);
  font-size: 14px;

  @media (max-width: ${V.xs}) {
    font-size: 13px;
  }
`;w.div`
  font-size: 14px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  align-items: center;

  @media (max-width: ${V.md}) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;w.div`
  width: 38px;
  height: 38px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 12px;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow);
  @media (max-width: ${V.xs}) {
    width: 34px;
    height: 34px;
  }
`;w.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: ${V.md}) {
    grid-template-columns: 1fr;
  }
`;w.button`
  width: 100%;
  text-align: left;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 16px;
  padding: 14px;
  box-shadow: var(--shadow);
  cursor: pointer;

  outline: none;
  transition: transform 0.12s, border-color 0.12s, box-shadow 0.12s,
    background 0.12s;
  transform: translateY(${t=>t.$active?"-1px":"0"});
  border-color: ${t=>t.$active?"var(--accentGradient)":"var(--rule)"};
  box-shadow: ${t=>t.$active?"0 10px 30px rgba(36,180,126,.18)":"var(--shadow)"};
  background: ${t=>t.$active?"linear-gradient(0deg, #fff, #fff)":"#fff"};

  &:hover {
    transform: translateY(-1px);
  }

  /* preserve your mobile tweaks */
  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 12px;
  }
`;w.h3`
  margin: 0 0 6px;
  font-size: 18px;
  @media (max-width: ${V.xs}) {
    font-size: 16px;
  }
`;w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;w.span`
  padding: 0.38rem 0.6rem;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid var(--rule);
  background: #fff;
  box-shadow: var(--shadow);
`;const vv=w.button`
  display: none;
  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid var(--rule);
    background: #fff;
    box-shadow: var(--shadow);
    cursor: pointer;
    padding: 0;
    position: relative;
  }
`,Br=w.span`
  width: 18px;
  height: 2px;
  background: #000;
  border-radius: 2px;
  transition: all 0.25s ease;
  position: absolute;

  &:nth-child(1) {
    transform: translateY(${t=>t.$open?"0px":"-6px"})
      rotate(${t=>t.$open?"45deg":"0"});
  }
  &:nth-child(2) {
    opacity: ${t=>t.$open?0:1};
  }
  &:nth-child(3) {
    transform: translateY(${t=>t.$open?"0px":"6px"})
      rotate(${t=>t.$open?"-45deg":"0"});
  }
`,xv=w.div`
  position: fixed;
  top: env(safe-area-inset-top, 0);
  right: 0;
  width: 72%;
  max-width: 320px;
  height: 100vh;
  background: #fff;
  border-left: 1px solid var(--rule);
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.08);
  transform: translateX(${t=>t.$open?"0":"100%"});
  transition: transform 0.28s ease;
  z-index: 60;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  gap: 16px;

  @media (min-width: 741px) {
    display: none;
  }

  a {
    padding: 12px 0;
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
  }
`;w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 10px;
`;w.button`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--rule);
  background: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform 0.12s, border-color 0.12s, box-shadow 0.12s,
    background 0.12s;
  white-space: nowrap;

  ${t=>t.$active&&`
    border-color: var(--accent);
    color: var(--accent);
  `}

  &:hover {
    transform: translateY(-1px);
  }
`;w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;function bv({isDarkMode:t,toggleDarkMode:e}){const[a,l]=B.useState(!1),[n,i]=B.useState(!1),[u,r]=B.useState(!1),o=B.useRef(typeof window<"u"?window.scrollY:0),f=B.useRef(null),g="/documents/Prakhar Bhargava Resume.pdf",y="Resume — Prakhar Bhargava";return B.useEffect(()=>{const m=()=>{const h=window.scrollY,S=h<o.current,E=h<24;l(!S&&!E),o.current=h,f.current&&clearTimeout(f.current),(S||E)&&l(!1)};return window.addEventListener("scroll",m,{passive:!0}),()=>{window.removeEventListener("scroll",m),f.current&&clearTimeout(f.current)}},[]),B.useEffect(()=>{const m=h=>h.key==="Escape"&&i(!1);return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),d.jsxs(d.Fragment,{children:[d.jsx(ky,{$hidden:a,children:d.jsxs(Ly,{children:[d.jsxs(Qy,{href:"#intro",children:[d.jsx(Zy,{"aria-hidden":!0,children:d.jsx(wy,{size:22,variant:"gradient",strokeWidth:5})}),d.jsx(Vy,{children:"Prakhar Bhargava"})]}),d.jsxs(Ky,{children:[(Mt.nav||[]).map((m,h)=>d.jsx(Jy,{href:m.href||m.to||"#",children:m.label},h)),d.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",padding:"8px",color:"var(--text)",transition:"all 0.2s ease"},title:t?"Light mode":"Dark mode","aria-label":"Toggle dark mode",children:t?"☀️":"🌙"}),d.jsx($y,{onClick:m=>{m.preventDefault(),r(!0)},as:"button",style:{cursor:"pointer"},children:"View Resume"})]}),d.jsxs(vv,{onClick:()=>i(m=>!m),"aria-label":"Toggle Navigation",children:[d.jsx(Br,{$open:n}),d.jsx(Br,{$open:n}),d.jsx(Br,{$open:n})]})]})}),d.jsxs(xv,{$open:n,children:[(Mt.nav||[]).map((m,h)=>d.jsx("a",{href:m.href||m.to||"#",onClick:()=>i(!1),children:m.label},h)),d.jsx("button",{onClick:()=>{e(),i(!1)},style:{background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"var(--text)",padding:"12px",textAlign:"left",fontFamily:"inherit",transition:"all 0.2s ease"},children:t?"☀️ Light mode":"🌙 Dark mode"}),d.jsx("a",{onClick:m=>{m.preventDefault(),i(!1),r(!0)},style:{cursor:"pointer"},children:"View Resume"})]}),n&&d.jsx("div",{onClick:()=>i(!1),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.2)",backdropFilter:"blur(2px)",zIndex:55}}),d.jsx(vm,{isOpen:u,onClose:()=>r(!1),pdfUrl:g,fileName:"Prakhar-Bhargava-Resume.pdf",title:y})]})}function Sv(){const t=B.useRef(null),[e,a]=B.useState(!1),[l,n]=B.useState(!1),i=B.useRef(null),u=B.useRef(null),r=B.useRef(null);B.useEffect(()=>{const f="montserrat-700";if(!document.getElementById(f)){const g=document.createElement("link");g.id=f,g.rel="stylesheet",g.href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap",document.head.appendChild(g)}},[]),B.useEffect(()=>{const f=i.current;f&&(e?f.classList.add("isPlaying"):f.classList.remove("isPlaying"))},[e]),B.useEffect(()=>{const f=u.current,g=r.current;if(!f||!g)return;const y=S=>{const E=S.clientX,_=S.clientY,s=c=>{const p=c.getBoundingClientRect(),v=p.left+p.width/2,b=p.top+p.height/2,A=Math.atan2(_-b,E-v),x=8,M=Math.cos(A)*x,D=Math.sin(A)*x;c.style.transform=`translate(${M}px, ${D}px)`};try{s(f),s(g)}catch{}};let m=0;const h=S=>{const E=Date.now();E-m>16&&(y(S),m=E)};return window.addEventListener("mousemove",h),()=>window.removeEventListener("mousemove",h)},[]);const o=async()=>{const f=t.current;if(f)if(e)f.pause(),f.currentTime=0,a(!1);else try{await f.play(),a(!0)}catch(g){console.warn("Autoplay blocked or missing audio file:",g)}};return d.jsxs("div",{className:`avatarHero ${l?"isTickled":""}`,ref:i,"aria-hidden":"true",children:[d.jsx("style",{children:wv}),d.jsx("audio",{ref:t,preload:"auto",src:"/audio/theme.mp3"}),d.jsxs("div",{className:"wrapper",children:[d.jsx("div",{className:"border-circle",id:"one"}),d.jsx("div",{className:"border-circle",id:"two"}),d.jsxs("div",{className:"background-circle",children:[d.jsx("div",{className:"triangle-light"}),d.jsx("div",{className:"body",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),tabIndex:0}),d.jsx("span",{className:"shirt-text t1",children:"AI"}),d.jsx("span",{className:"shirt-text t2",children:"Design"}),d.jsx("span",{className:"shirt-text t3",children:"Strategy"}),d.jsx("span",{className:"shirt-text t4",children:"Product"}),d.jsx("span",{className:"shirt-text t5",children:"Growth"}),d.jsx("div",{className:"triangle-dark"})]}),d.jsxs("div",{className:"head",children:[d.jsx("div",{className:"ear",id:"left"}),d.jsx("div",{className:"ear",id:"right"}),d.jsxs("div",{className:"hair-main",children:[d.jsx("div",{className:"sideburn",id:"left"}),d.jsx("div",{className:"sideburn",id:"right"}),d.jsx("div",{className:"hair-top"})]}),d.jsxs("div",{className:"face",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),tabIndex:0,children:[d.jsx("div",{className:"hair-bottom"}),d.jsxs("div",{className:"eye-shadow",id:"left",children:[d.jsx("div",{className:"eyebrow"}),d.jsx("div",{className:"eye-tracker",ref:u,children:d.jsx("div",{className:"eye"})})]}),d.jsxs("div",{className:"eye-shadow",id:"right",children:[d.jsx("div",{className:"eyebrow"}),d.jsx("div",{className:"eye-tracker",ref:r,children:d.jsx("div",{className:"eye"})})]}),d.jsx("div",{className:"nose"}),d.jsx("div",{className:"mouth"}),d.jsx("div",{className:"beard"}),d.jsx("div",{className:"shadow-wrapper",children:d.jsx("div",{className:"shadow"})})]}),d.jsxs("div",{className:"headphones",children:[d.jsx("div",{className:"band"}),d.jsx("div",{className:"cup left"}),d.jsx("div",{className:"cup right"})]})]}),d.jsx("button",{type:"button",className:"soundToggle",onClick:o,"aria-pressed":e,"aria-label":e?"Pause soundtrack":"Play soundtrack",title:e?"Pause soundtrack":"Play soundtrack",children:e?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"icon",children:"⏸"}),d.jsx("span",{children:"Pause"})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"icon",children:"🔊"}),d.jsx("span",{children:"Play"})]})})]})]})}const wv=`
/* ===== Scoped Avatar CSS ===== */
.avatarHero {
  --skin: #F1C08E;
  --hair: #1A1A1A;
  --bg: #95B3BF;
  --heart: #EF4136;

  /* Instagram-like gradient for background plate */
  --accentGradient: radial-gradient(60% 60% at 60% 30%, #FFB46D 0%, #F77737 35%, #C13584 65%, #5851DB 100%);

  display:grid;
  place-items:center;
  width:100%;
}

/* A responsive canvas so it works on mobile too */
.avatarHero .wrapper{
  width: clamp(160px, 32vw, 320px);
  margin: 0 auto;
  position: relative;
  text-align: center;
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .avatarHero .wrapper {
    width: clamp(200px, 40vw, 280px);
  }
}

@media (max-width: 480px) {
  .avatarHero .wrapper {
    width: clamp(180px, 50vw, 240px);
  }
}

.avatarHero .background-circle{
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background: var(--accent);
  position: relative;
  animation: grow 0.7s 1 ease;
  transform-origin: center;
  -webkit-mask-image: -webkit-radial-gradient(#000, #000);
}

/* Pulsing outer rings */
.avatarHero .border-circle{
  position: absolute;
  inset: 0;
  margin: auto;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: 50%;
  border: 5px solid var(--accent);
  transform: scale(0);
  transform-origin: center;
  pointer-events: none;
  z-index: 1;
}
.avatarHero .border-circle#one{ animation: border-pulse 1s 3.1s 1 ease forwards; }
.avatarHero .border-circle#two{ animation: border-pulse 1s 3.3s 1 ease forwards; }

.avatarHero .body{
  width: 68%;
  height: 150%;
  left: 16%;
  background: #222;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(0) scale(0);
  animation: body-enter 0.7s 0.2s 1 ease forwards;
  z-index: 4;
}

/* Shift controls (negative = left/up, positive = right/down) */
.avatarHero {
  --head-shift-x: -25%;
  --head-shift-y: -52%;
}

/* HEAD */
.avatarHero .head{
  width: 48%;
  aspect-ratio: 0.88 / 1;            
  border-radius: 55px 55px 52px 52px; 
  background: var(--skin);
  position: absolute;
  left: calc(50% + var(--head-shift-x));
  top:  calc(50% + var(--head-shift-y));
  transform: translate(-50%, calc(-50% - 10%)) scale(0);
  transform-origin: bottom;
  --tickle-head-anim: none;
  animation: grow 0.7s 0.4s 1 ease forwards, music-move 1s 3.3s infinite alternate ease-in-out, var(--tickle-head-anim);
  z-index: 5; /* stacking context for headphones */
}

/* Ears */
.avatarHero .ear{
  width: 28px;
  height: 36px;
  background: var(--skin);
  border: 3px solid #B8845F;
  border-radius: 50%;
  position: absolute;
  top: 15%;
  opacity: 0;
  animation: grow 0.7s 1.2s ease forwards;
  z-index: 4;
}
.avatarHero .ear#left{ left: -16px; }
.avatarHero .ear#right{ right: -16px; }

.avatarHero .hair-main{
  width:115%;
  height: 0px;
  background: #000;
  border-radius: 56px 56px 0 0;
  position: absolute;
  left: -7.5%;
  top: -2%;
  z-index: 6;
  animation: hair-anim 0.7s 0.9s 1 ease forwards;
}
.avatarHero .hair-top{
  width: 70%;
  height: 48px;  
  border-radius: 26px;
  opacity: 0;
  border-top-right-radius: 32px;
  background: var(--hair);
  position: relative;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: right;
  animation: hair-top-anim 0.7s 1s 1 ease forwards;
}
.avatarHero .hair-bottom{
  width: 30%;
  height: 40px;
  opacity: 0;
  border-bottom-left-radius: 20px;
  background: var(--hair);
  position: relative;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: left;
  animation: hair-bottom-anim 0.7s 1.4s 1 ease forwards;
}
.avatarHero .sideburn{
  width: 8px;
  height: 25px;
  background: var(--hair);
  position: absolute;
  bottom: -25px;
  opacity: 0;
  animation: sideburn-anim 0.7s 0.9s 1 ease forwards;
}
.avatarHero .sideburn#left{ left: 12px; }
.avatarHero .sideburn#right{ right: 12px; }

.avatarHero .face{
  width: 92%;
  height: 0px;
  border-radius: 48px 48px 0 0;
  background: var(--skin);
  position: absolute;
  top: 18%;
  left: 4%;
  z-index: 7;
  animation: hair-anim 0.1s 0.8s 1 linear forwards;
  outline: none;
}
.avatarHero .face:focus-visible{ box-shadow: 0 0 0 3px rgba(0,0,0,0.1); }
.avatarHero .face::after{
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(30% 24% at 32% 65%, rgba(240,72,72,0.7) 0%, rgba(240,72,72,0.25) 55%, rgba(240,72,72,0) 70%),
    radial-gradient(30% 24% at 68% 65%, rgba(240,72,72,0.7) 0%, rgba(240,72,72,0.25) 55%, rgba(240,72,72,0) 70%);
  opacity: 0;
  transition: opacity 0.45s ease-out;
  border-radius: inherit;
}
.avatarHero.isTickled .face::after{ opacity: 0.8; }

/* Eyes + brows */
.avatarHero .eye-shadow{
  width:30px; height: 15px;
  border-radius: 0 0 15px 15px;
  background:rgba(0,0,0,0);
  position: absolute;
  top: 50%;
  transform: scale(0);
  animation: grow 0.7s 2s 1 ease forwards;
  z-index: 12;
  pointer-events: none;
}
.avatarHero .eye-shadow#left{ left: 28%; }
.avatarHero .eye-shadow#right{ right: 28%; }

.avatarHero .eye-tracker{
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  will-change: transform;
  transform: translate(0, 0);
  transition: transform 0.05s ease-out;
  pointer-events: auto;
}

.avatarHero .eyebrow{
  width: 42px; height: 12px;
  background: var(--hair);
  position: absolute;
  top: -36px;
  left: 50%;
  margin-left: -21px;
  opacity: 0;
  backface-visibility: hidden;
  z-index: 13;
  border-radius: 6px;
}
.avatarHero .eye-shadow#left .eyebrow{ animation: eyebrow-anim-left 0.7s 2.2s 1 ease forwards; }
.avatarHero .eye-shadow#right .eyebrow{ animation: eyebrow-anim-right 0.7s 2.2s 1 ease forwards, eyebrow-raise 2s 6.6s infinite alternate ease-in-out; }

.avatarHero .eye{
  width: 22px;
  height: 26px;
  border-radius: 50% 50% 45% 45%;
  background: #2D1810;
  position: absolute;
  top: -19px;
  left: 50%;
  margin-left: -11px;
  transform: scale(0);
  transform-origin: bottom;
  --tickle-eye-anim: none;
  animation: grow 0.7s 2.2s 1 ease forwards, eye-blink 4s 4.4s infinite linear, var(--tickle-eye-anim);
  z-index: 11;
  box-shadow: inset -2px -1px 3px rgba(0,0,0,0.3);
}
}

/* Nose, mouth, beard */
.avatarHero .nose{
  width: 18px;
  height: 42px;
  background: #B8845F;
  border-radius: 0 0 12px 12px;
  position: absolute;
  left: 45%;
  top: 58%;
  transform: translateX(-50%);
  opacity: 0;
  animation: shadow-anim 0.7s 3s 1 ease forwards;
  z-index: 9;
}

.avatarHero .mouth{
  width: 62px;
  height: 28px;
  border-radius: 0 0 31px 31px;
  background: #9B6B5F;
  position: absolute;
  top: 96%;
  left: 35%;
  transform: translateX(-50%) scale(0);
  --tickle-mouth-anim: none;
  animation: grow 0.7s 2.6s 1 ease forwards, var(--tickle-mouth-anim);
  z-index: 9;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}
.avatarHero.isTickled .head{
  --tickle-head-anim: tickle-head-rise 0.45s ease-out 1 forwards, tickle-head 0.36s 0.35s infinite linear;
}
.avatarHero.isTickled .eye{
  --tickle-eye-anim: tickle-eye-rise 0.45s ease-out 1 forwards, eye-squint 0.32s 0.35s infinite ease-in-out;
}
.avatarHero.isTickled .mouth{
  --tickle-mouth-anim: mouth-twitch-rise 0.45s ease-out 1 forwards, mouth-twitch 0.48s 0.35s infinite steps(3, end);
}

@media (max-width: 480px) {
  .avatarHero .mouth {
    top: 84%;
  }
}

.avatarHero .beard {
  position: absolute;
  width: 82%;
  height: 48%;
  left: 50%;
  top: 64%;
  transform: translateX(-50%);
  background: var(--hair);
  border-radius: 0 0 75px 75px;
  clip-path: ellipse(46% 42% at 50% 0%);
  opacity: 0;
  transform-origin: top center;
  animation: grow 0.8s 2.5s ease forwards;
  z-index: 8;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.3);
}

// /* Face shadow */
// .avatarHero .shadow-wrapper{
//   width: 98px;
//   height: 260px;
//   position: absolute;
//   left: -8px;
//   bottom: -84px;
//   z-index: 4;
//   overflow: hidden;
// }
// .avatarHero .shadow{
//   width: 98px;
//   height: 260px;
//   border-radius: 50px;
//   background: rgba(0,0,0,0.1);
//   position: absolute;
//   z-index: 4;
//   opacity: 0;
//   animation: shadow-anim 1s 2.8s 1 ease forwards;
// }

/* Triangles */
.avatarHero .triangle-light{
  width: 130%;
  height: 160%;
  background: #FFFFFF;
  opacity: 0.2;
  position: absolute;
  right: -65%;
  transform: translate(200px,0);
  animation: triangle-light-anim 1s 2.8s 1 ease forwards;
  z-index: 3;
  pointer-events: none;
}
.avatarHero .triangle-dark{
  width: 130%;
  height: 160%;
  background: #000000;
  opacity: 0.2;
  position: absolute;
  left: -60%;
  top: 30%;
  transform: translate(-200px,0);
  animation: triangle-dark-anim 1s 3s 1 ease forwards;
  z-index: 3;
  pointer-events: none;
}

/* ✅ Headphones (funky, above everything on head) */
.avatarHero .headphones{
  position: absolute;
  top: -8%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: none;
  transition: opacity .3s ease, transform .3s ease;
}
.avatarHero.isPlaying .headphones{
  opacity: 0;
  transform: translateX(-50%) scale(0.92);
}

/* Band */
.avatarHero .headphones .band{
  position: absolute;
  left: 50%;
  top: -14%;
  width: 82%;
  height: 48%;
  transform: translateX(-50%);
  border-radius: 200px 200px 0 0;
  background: linear-gradient(250deg, #14C6A7, #33FFC9);
  border: 4px solid #0A5F4D;
  border-bottom: none;
  box-shadow:
    0 3px 6px rgba(0,0,0,.3),
    inset 0 -4px 6px rgba(0,0,0,.4),
    inset 0 3px 6px rgba(255,255,255,.5);
  animation: grow .6s .7s ease forwards;
  opacity: 0;
}

/* Cups */
.avatarHero .headphones .cup{
  position: absolute;
  top: 42%;
  width: 42px;
  height: 58px;
  border-radius: 22px;
  background: linear-gradient(180deg, #33FFC9 0%, #14C6A7 100%);
  border: 3px solid #0A5F4D;
  box-shadow:
     0 4px 8px rgba(0,0,0,.35),
     inset 0 0 6px rgba(255,255,255,.35),
     inset 0 -4px 8px rgba(0,0,0,.35);
  animation: grow .6s .8s ease forwards;
  opacity: 0;
}
.avatarHero .headphones .cup.left{ left: -8%; }
.avatarHero .headphones .cup.right{ right: -8%; }

/* Floating icons */
.avatarHero .floating-icon{
  position: absolute;
  font-size: clamp(34px, 5vw, 56px);
  width: 1px;
  left: 50%;
  opacity: 0;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,.15));
  z-index: 9;
}
.avatarHero .floating-icon[data-pos="left"]{ margin-left:-60%; top:52%; }
.avatarHero .floating-icon[data-pos="right"]{ margin-left:40%; top:32%; }
.avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-45%; top:22%; }
.avatarHero .floating-icon[data-pos="far-right"]{ margin-left:52%; top:60%; }

.avatarHero .floating-icon.i1{ animation: icon-float 2.2s 3.5s infinite ease; }
.avatarHero .floating-icon.i2{ animation: icon-float 2.2s 3.9s infinite ease; }
.avatarHero .floating-icon.i3{ animation: icon-float 2.2s 4.3s infinite ease; }
.avatarHero .floating-icon.i4{ animation: icon-float 2.2s 4.7s infinite ease; }

/* Cycling shirt text - HIDDEN for professional look */
.avatarHero .shirt-text{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  position: absolute;
  bottom: 15%;
  left: 30%;
  transform: translateX(-50%);
  font-size: clamp(20px, 3.8vw, 38px);
  white-space: nowrap;
  color: white;
  -webkit-text-stroke: 2px rgba(0,0,0,0.6);
  z-index: 10;
  pointer-events: none;
  opacity: 0 !important;
  animation-fill-mode: both !important;
  display: none !important;
}
.avatarHero .shirt-text.t1{ animation: none; }
.avatarHero .shirt-text.t2{ animation: none; }
.avatarHero .shirt-text.t3{ animation: none; }
.avatarHero .shirt-text.t4{ animation: none; }
.avatarHero .shirt-text.t5{ animation: none; }

/* Play/Pause button (glass, minimal) */
.avatarHero .soundToggle{
  position: absolute;
  right: 6%;
  bottom: 6%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 2px solid #333;
  background: #ffffff;
  color: #333;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: .02em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  transition: transform .15s ease, background .15s ease, box-shadow .15s ease;
  z-index: 30;
  font-size: 0.85rem;
}

/* Mobile adjustments for sound toggle */
@media (max-width: 480px) {
  .avatarHero .soundToggle {
    padding: 8px 12px;
    font-size: 0.75rem;
    gap: 4px;
    right: 4%;
    bottom: 4%;
  }
  .avatarHero .soundToggle .icon {
    font-size: 1rem;
  }
}

.avatarHero .soundToggle .icon{
  display: inline-block;
  font-size: 1.1rem;
}
.avatarHero .soundToggle:hover{
  transform: translateY(-1px);
  background: #f0f0f0;
  box-shadow: 0 4px 12px rgba(0,0,0,.2);
}

/* Keyframes */
@keyframes tickle-head-rise{0%{transform:translate(0,0) rotate(0deg)}60%{transform:translate(-0.4px,0.4px) rotate(0.4deg)}100%{transform:translate(0.6px,-0.4px) rotate(-0.6deg)}}
@keyframes tickle-head{0%{transform:translate(-0.6px,0.6px) rotate(0deg)}18%{transform:translate(0.8px,-0.8px) rotate(-1deg)}42%{transform:translate(-1.2px,0px) rotate(1.6deg)}68%{transform:translate(1.2px,0.6px) rotate(-0.9deg)}100%{transform:translate(-0.6px,-0.6px) rotate(1deg)}}
@keyframes tickle-eye-rise{0%{transform:scaleY(1) translate(0,0)}60%{transform:scaleY(0.96) translate(0,-0.2px)}100%{transform:scaleY(0.92) translate(0,-0.4px) rotate(-0.6deg)}}
@keyframes eye-squint{0%{transform:scaleY(1) translate(0,0)}24%{transform:scaleY(0.9) translate(0,-0.5px)}52%{transform:scaleY(0.94) translate(0,0.5px)}78%{transform:scaleY(0.88) translate(0,-0.5px) rotate(-1.8deg)}100%{transform:scaleY(1) translate(0,0)}}
@keyframes mouth-twitch-rise{0%{transform:translateX(-50%) scale(1,1)}60%{transform:translateX(-50%) scale(1.015,0.985)}100%{transform:translateX(-50%) scale(1.03,0.97)}}
@keyframes mouth-twitch{0%{transform:translateX(-50%) scale(1,1)}30%{transform:translateX(-50%) scale(1.04,0.97)}55%{transform:translateX(-50%) scale(0.99,1.02)}78%{transform:translateX(-50%) scale(1.03,0.96)}100%{transform:translateX(-50%) scale(1,1)}}
@keyframes grow{0%{transform:scale(0)}60%{transform:scale(1.15)}80%{transform:scale(0.95)}100%{transform:scale(1)}}
@keyframes body-enter{0%{transform:translateY(200px)}60%{transform:translateY(-20px)}80%{transform:translateY(30px)}100%{transform:translateY(0)}}
@keyframes hair-anim{0%{height:0;transform:translateY(137px)}100%{height:137px;transform:translateY(0)}}
@keyframes sideburn-anim{0%{opacity:0;transform:translateY(-25px)}100%{opacity:1;transform:translateY(0)}}
@keyframes hair-top-anim{0%{opacity:0;transform:translate(-50%,30px)}60%{opacity:1;transform:translate(-50%,30px)}80%{opacity:1;transform:rotate(10deg) translate(-50%,-5px)}100%{opacity:1;transform:rotate(0) translate(-50%,0)}}
@keyframes hair-bottom-anim{0%{opacity:0;transform:translate(-50%,-40px)}60%{opacity:1;transform:translate(-50%,-40px)}80%{opacity:1;transform:rotate(10deg) translate(-50%,5px)}100%{opacity:1;transform:rotate(0) translate(-50%,0)}}
@keyframes music-move{0%,100%{transform:rotate(0)}33%{transform:rotate(-5deg)}66%{transform:rotate(5deg)}}
@keyframes eyebrow-anim-right{0%{opacity:0;transform:translateY(-25px)}70%{opacity:1;transform:translateY(5px)}100%{opacity:1;transform:rotate(9deg) translateY(0)}}
@keyframes eyebrow-raise{0%{top:-35px}80%{top:-35px}100%{top:-45px}}
@keyframes eyebrow-anim-left{0%{opacity:0;transform:translateY(-25px)}70%{opacity:1;transform:translateY(5px)}100%{opacity:1;transform:translateY(0)}}
@keyframes border-pulse{0%{transform:scale(0);border-width:20px}40%{transform:scale(1);border-width:20px}100%{transform:scale(1.5);border-width:0}}
@keyframes shadow-anim{0%{opacity:0;transform:translate(98px,0)}50%{opacity:0}100%{opacity:1;transform:translate(0,0)}}
@keyframes triangle-light-anim{0%{transform:translate(200px,0)}100%{transform:rotate(45deg) translate(0,0)}}
@keyframes triangle-dark-anim{0%{transform:translate(-200px,0)}100%{transform:rotate(-45deg) translate(0,0)}}
@keyframes icon-float{0%{opacity:0;transform:translate(0,50px)}30%{transform:rotate(8deg) translate(-20px,0)}45%{opacity:1}60%{transform:rotate(-8deg) translate(20px,-90px)}100%{opacity:0;transform:rotate(0) translate(0,-180px)}}
@keyframes text-cycle{0%{opacity:0;transform:translateY(100px)}5%{opacity:1;transform:translateY(-10px)}20%{opacity:1;transform:translateY(0)}25%{opacity:0;transform:translateY(5px)}100%{opacity:0;transform:translateY(100px)}}

/* Extra small phones */
@media (max-width: 360px){
  .avatarHero .wrapper{
    width: clamp(180px, 90vw, 280px);
    padding: 0 8px;
  }
  .avatarHero .soundToggle{
    right: 8px;
    bottom: 8px;
    padding: 6px 10px;
    font-size: 0.7rem;
    gap: 4px;
  }
  .avatarHero .shirt-text{
    bottom: 12%;
    left: 28%;
    font-size: clamp(12px, 2vw, 16px);
  }
  .avatarHero .floating-icon{
    font-size: clamp(20px, 3vw, 28px);
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-56%; top:56%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:40%; top:38%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-44%; top:26%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:50%; top:62%; }
}

/* Small phones */
@media (min-width: 361px) and (max-width: 480px){
  .avatarHero .wrapper{
    width: clamp(240px, 85vw, 360px);
    padding: 0 10px;
  }
  .avatarHero .soundToggle{
    right: 10px;
    bottom: 10px;
    padding: 8px 12px;
    font-size: 0.8rem;
    gap: 6px;
  }
  .avatarHero .shirt-text{
    font-size: clamp(14px, 2.8vw, 22px);
  }
  .avatarHero .floating-icon{
    font-size: clamp(26px, 3.5vw, 40px);
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-55%; top:54%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:39%; top:35%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-43%; top:24%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:49%; top:61%; }
}

/* Medium phones */
@media (min-width: 481px) and (max-width: 600px){
  .avatarHero .wrapper{
    width: clamp(320px, 80vw, 420px);
  }
  .avatarHero .soundToggle{
    right: 12px;
    bottom: 12px;
  }
  .avatarHero .floating-icon[data-pos="left"]{ margin-left:-54%; top:52%; }
  .avatarHero .floating-icon[data-pos="right"]{ margin-left:38%; top:33%; }
  .avatarHero .floating-icon[data-pos="far-left"]{ margin-left:-42%; top:23%; }
  .avatarHero .floating-icon[data-pos="far-right"]{ margin-left:48%; top:60%; }
}

/* Tablets */
@media (min-width: 601px) and (max-width: 900px){
  .avatarHero .wrapper{
    width: clamp(280px, 40vw, 400px);
  }
}

/* Desktop */
@media (min-width: 901px){
  .avatarHero .wrapper{
    width: clamp(300px, 35vw, 450px);
  }
}
`,zv=w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
  animation: fadeSlideUp 0.6s 0.1s forwards;

  @media (max-width: 480px) {
    font-size: 11px;
    gap: 8px;
  }

  @keyframes fadeSlideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Av=w.span`
  display: inline-block;
  font-size: 1.2em;
  transform-origin: 70% 70%;
  animation: wave 0.6s ease-in-out 0.4s 2;

  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-25deg); }
    40% { transform: rotate(15deg); }
    60% { transform: rotate(-15deg); }
    80% { transform: rotate(10deg); }
  }
`,Ev=w.div`
  pointer-events: none;
  transition: pointer-events 0.7s ease;

  &.visible {
    pointer-events: auto;
  }

  /* H1 text reveal left to right */
  & h1 {
    overflow: hidden;
    clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    animation: revealText 1s ease-out 0.2s forwards;
  }

  /* Muted text reveal */
  & p {
    overflow: hidden;
    clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
    animation: revealText 0.8s ease-out 1.2s forwards;
  }

  /* Pills container fade in after text loads */
  & > div {
    opacity: 0;
    animation: fadeIn 0.8s ease-out 2s forwards;
  }

  @keyframes revealText {
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;w.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 400px;

  @media (max-width: 480px) {
    min-height: 320px;
  }

  @media (max-width: 360px) {
    min-height: 280px;
  }
`;const Tv=w.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`,Lf=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none !important;
  font-style: normal !important;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 200px;

  &.primary {
    background: var(--accentGradient);
    color: white;
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(221, 36, 118, 0.3);
      opacity: 1;
    }
  }

  &.secondary {
    background: transparent;
    color: inherit;
    border: 1.5px solid currentColor;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 640px) {
    width: auto;
    min-width: 160px;
    padding: 10px 16px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 12px 20px;
    font-size: 14px;
  }
`;w.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  display: inline-flex;
  text-decoration: none !important;
`;function Mv({content:t}){const[e,a]=B.useState(!1);return B.useEffect(()=>{const l=setTimeout(()=>a(!0),2e3);return()=>clearTimeout(l)},[]),d.jsxs(d.Fragment,{children:[d.jsxs(zv,{children:["Hello, I'm ",t.name,d.jsx(Av,{children:"👋"})]}),d.jsxs(Ev,{className:e?"visible":"",children:[d.jsxs(Pc,{children:["I deliver AI products rooted in",d.jsx(Nt,{children:" user empathy"})," and",d.jsx(Nt,{children:" measurable impact"}),"."]}),d.jsxs(xm,{style:{marginTop:12},children:["Taking products from ",d.jsx(Nt,{children:" 0→1 "})," and"," ",d.jsx(Nt,{children:" 1→n "})," — balancing strategy, design, and build to deliver outcomes that matter."]}),d.jsx("div",{style:{marginTop:10},children:["Solution Engineering","Product & Strategy","Execution"].map((l,n)=>d.jsx(Iy,{children:l},n))}),d.jsxs(Tv,{children:[d.jsx(Lf,{className:"primary",href:"/documents/Prakhar Bhargava Resume.pdf",target:"_blank",rel:"noreferrer",children:"See my Resume"}),d.jsx(Lf,{className:"secondary",href:"https://linkedin.com/in/prakharbhargava35",target:"_blank",rel:"noreferrer",children:"Connect on LinkedIn"})]})]})]})}function jv(){const[t,e]=B.useState(!1),a="/documents/Prakhar Bhargava Resume.pdf";return d.jsxs(Ku,{id:"intro",style:{borderTop:"none"},children:[d.jsx(Ju,{children:d.jsxs(Fy,{children:[d.jsxs(Wy,{children:[d.jsx(Mv,{content:Mt}),d.jsxs("div",{style:{display:"flex",gap:12,marginTop:20,flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>e(!0),style:{padding:"12px 16px",borderRadius:12,border:"1px solid transparent",background:"linear-gradient(135deg, #6c5ce7, #00b894)",color:"white",fontWeight:600,letterSpacing:"-0.01em",cursor:"pointer",boxShadow:"0 10px 30px rgba(0,0,0,0.15)",transition:"transform 0.15s ease, box-shadow 0.15s ease"},onMouseDown:n=>n.currentTarget.style.transform="translateY(1px)",onMouseUp:n=>n.currentTarget.style.transform="translateY(0)",children:"View Resume"}),d.jsx("a",{href:a,download:"Prakhar-Bhargava-Resume.pdf",style:{padding:"12px 16px",borderRadius:12,border:"1px solid rgba(255,255,255,0.12)",background:"rgba(255,255,255,0.04)",color:"var(--text)",textDecoration:"none",fontWeight:600,letterSpacing:"-0.01em",backdropFilter:"blur(6px)",transition:"border-color 0.15s ease, transform 0.15s ease"},children:"Download PDF"})]})]}),d.jsx("div",{style:{display:"grid",placeItems:"center"},children:d.jsx(Sv,{})})]})}),d.jsx(vm,{isOpen:t,onClose:()=>e(!1),pdfUrl:a,fileName:"Prakhar-Bhargava-Resume.pdf",title:"Resume — Prakhar Bhargava"})]})}w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;w.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;w.div`
  background: var(--bg);
  border-radius: 16px;
  width: min(90vw, 1100px);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    width: 95vw;
    flex-direction: column;
  }
`;w.div`
  width: 200px;
  padding: 40px 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 52px;
    width: 2px;
    height: calc(100% - 52px);
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;w.div`
  position: absolute;
  left: 0;
  top: 52px;
  width: 2px;
  background: var(--accent);
  transition: height 0.3s ease;
  height: ${t=>t.$progress}%;
`;const Dv=w.div`
  font-size: 13px;
  color: ${t=>t.$active?"var(--accent)":"var(--muted)"};
  padding: 8px 12px;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: ${t=>t.$active?"600":"400"};
  border-left: 2px solid
    ${t=>t.$active?"var(--accent)":"transparent"};
  padding-left: 10px;
  position: relative;

  &:hover {
    color: var(--text);
    background: rgba(0, 0, 0, 0.03);
  }
`;w(Dv)`
  font-size: 12px;
  padding-left: 22px;
  margin-left: 12px;
  border-left: 1px solid
    ${t=>t.$active?"var(--accent)":"rgba(0, 0, 0, 0.1)"};

  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${t=>t.$active?"var(--accent)":"var(--muted)"};
    transition: all 0.2s;
  }
`;w.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 640px) {
    padding: 24px;
  }
`;w.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.2s;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.05);
  }
`;w.div`
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 32px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 24px;
    color: var(--text);
  }

  p {
    line-height: 1.6;
    margin-bottom: 16px;
    color: var(--text);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin: 24px 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 16px;

    li {
      padding-left: 24px;
      margin-bottom: 8px;
      position: relative;

      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--muted);
      }
    }
  }
`;const _v=w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;function Ov(){const[t,e]=B.useState(0),a=l=>e(n=>n===l?-1:l);return d.jsx(Ku,{id:"background",children:d.jsxs(Ju,{children:[d.jsx(_v,{children:"Background"}),d.jsxs(Py,{children:[d.jsxs(tv,{children:[d.jsxs(ev,{children:["Building ",d.jsx(Nt,{children:"AI products"})," that users ",d.jsx(Nt,{children:"adopt"})," - not just demos that ship."]}),d.jsx(av,{children:"I connect user reality, engineering, and business intent to take products from 0→1 and beyond, with a relentless focus on clarity and impact."})]}),d.jsx(lv,{children:Mt.experience.map((l,n)=>{const i=t===n;return d.jsxs(nv,{children:[d.jsxs(iv,{children:[l.logo&&d.jsx(uv,{src:l.logo,alt:l.company}),d.jsx(rv,{href:l.companyUrl||"#",target:"_blank",rel:"noreferrer",children:l.company})]}),d.jsxs(ov,{children:[d.jsx(cv,{children:(l.tags||[]).join(" • ")}),d.jsx(fv,{onClick:()=>a(n),"aria-label":i?"Collapse":"Expand",children:i?"–":"+"})]}),d.jsx(sv,{children:l.period}),l.summary&&d.jsx(dv,{children:l.summary}),i&&d.jsx(pv,{children:(l.positions||[]).map((u,r)=>d.jsxs("div",{children:[d.jsx(mv,{children:u.title}),u.period&&d.jsx(hv,{children:u.period}),Array.isArray(u.bullets)&&u.bullets.length>0&&d.jsx(gv,{children:u.bullets.map((o,f)=>d.jsx("li",{children:o},f))})]},r))})]},n)})})]})]})})}const Cv=w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`,wi=w.span`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-flex;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,Yr=w.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,Hv=w.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: 640px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`,Nv=w.div`
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 32px;
  padding: 24px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  height: auto;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px) {
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    border-radius: 24px;
    padding: 12px;
    aspect-ratio: 1 / 1;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    padding: 8px;
    max-width: 280px;
  }
`,Uv=w.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  overflow: visible;
  touch-action: none;

  @media (max-width: 640px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`,Rv=w.div`
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 18px;
  background: #fff;
  border: 10px solid #fff;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  will-change: transform;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 70px;
    height: 70px;
    border-radius: 12px;
    border: 6px solid #fff;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 5px solid #fff;
  }

  &:active {
    cursor: grabbing;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    background: white;
  }
`;function Bv(){var E,_;const[t,e]=B.useState(!1),a=B.useRef(null),l=B.useRef(null),[n,i]=B.useState(null),[u,r]=B.useState([]),[o,f]=B.useState([]),[g,y]=B.useState(!1);(E=(Mt.contact.links||[]).find(s=>s.label.toLowerCase()==="resume"))!=null&&E.href,B.useEffect(()=>{const c=["excel.png","figma.png","n8n.png","photoshop.png","powerpoint.png","claude.svg","v0.png","python.png","react.png"].map(v=>`/img/logos/${v}`);f(c);const p=setTimeout(()=>{if(!l.current)return;const v=l.current.getBoundingClientRect(),b=v.width/2,A=v.height/2,M=window.innerWidth<=640?80:120,D=c.map((j,K)=>{const et=K/c.length*Math.PI*2+(Math.random()-.5)*.8,N=M*(.4+Math.random()*.6);return{id:`logo-${K}`,x:b+Math.cos(et)*N,y:A+Math.sin(et)*N,rotation:(Math.random()-.5)*20}});r(D),y(!0)},300);return()=>clearTimeout(p)},[]);const m=s=>c=>{var D,j;c.preventDefault(),c.stopPropagation();const p=c.pointerId;c.currentTarget.setPointerCapture&&c.currentTarget.setPointerCapture(p);const v=u.find(K=>K.id===s),b=c.clientX||c.touches&&((D=c.touches[0])==null?void 0:D.clientX)||0,A=c.clientY||c.touches&&((j=c.touches[0])==null?void 0:j.clientY)||0,x=b-v.x,M=A-v.y;i({id:s,pointerId:p,offsetX:x,offsetY:M})},h=s=>{var v,b;if(!n||s.pointerId!==n.pointerId)return;const c=s.clientX||s.touches&&((v=s.touches[0])==null?void 0:v.clientX)||0,p=s.clientY||s.touches&&((b=s.touches[0])==null?void 0:b.clientY)||0;r(A=>A.map(x=>x.id===n.id?{...x,x:c-n.offsetX,y:p-n.offsetY}:x))},S=()=>{i(null)};return d.jsxs(Ku,{id:"contact",children:[d.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      `}),d.jsx(Ju,{children:d.jsxs(Hv,{onPointerMove:h,onPointerUp:S,onPointerCancel:S,children:[d.jsxs("div",{children:[d.jsx(Cv,{children:"Contact"}),d.jsxs(Pc,{style:{marginBottom:8},children:["Let's Create ",d.jsx(Nt,{children:" Products"})," that ",d.jsx(Nt,{children:"Matter"}),"."]}),Mt.contact.lastUpdated&&d.jsxs(yv,{children:["Last updated ",Mt.contact.lastUpdated]}),d.jsx("div",{style:{marginTop:14},children:Mt.contact.lines.map((s,c)=>d.jsx(xm,{style:{margin:"4px 0"},children:s},c))}),d.jsxs("div",{style:{marginTop:28,display:"grid",gap:16},children:[d.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[Mt.contact.phone&&d.jsxs("a",{href:`tel:${Mt.contact.phone.replace(/\s+/g,"")}`,style:{display:"flex",alignItems:"center",gap:8,color:"inherit",fontSize:14,fontWeight:500,transition:"all 0.2s ease",transform:"scale(1)"},onMouseEnter:s=>{s.style.opacity=.7,s.style.transform="scale(1.05)",s.style.textDecoration="underline"},onMouseLeave:s=>{s.style.opacity=1,s.style.transform="scale(1)",s.style.textDecoration="none"},children:[d.jsx(wi,{children:"phone"}),Mt.contact.phone]}),(Mt.contact.links||[]).find(s=>s.label.toLowerCase()==="email")&&d.jsxs(d.Fragment,{children:[d.jsx("span",{style:{color:"var(--muted)"},children:"·"}),d.jsxs("a",{href:(Mt.contact.links.find(s=>s.label.toLowerCase()==="email")||{}).href,style:{display:"flex",alignItems:"center",gap:8,color:"inherit",fontSize:14,fontWeight:500,transition:"all 0.2s ease",transform:"scale(1)"},onMouseEnter:s=>{s.style.opacity=.7,s.style.transform="scale(1.05)";const c=s.querySelector(".email-icon");c&&(c.style.opacity=1)},onMouseLeave:s=>{s.style.opacity=1,s.style.transform="scale(1)";const c=s.querySelector(".email-icon");c&&(c.style.opacity=0)},children:[d.jsx(wi,{children:"mail"}),d.jsx("span",{children:((_=(Mt.contact.links.find(s=>s.label.toLowerCase()==="email")||{}).href)==null?void 0:_.replace("mailto:",""))||"Email"}),d.jsx(wi,{className:"email-icon",style:{fontSize:14,opacity:0,transition:"opacity 0.2s"},children:"open_in_new"})]})]})]}),d.jsx("div",{style:{display:"inline-flex",gap:2,alignItems:"center",flexWrap:"wrap"},children:[{label:"GitHub",icon:d.jsx(Yr,{viewBox:"0 0 24 24",children:d.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})},{label:"LinkedIn",icon:d.jsxs(Yr,{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),d.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})},{label:"Behance",icon:d.jsxs(Yr,{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M3 8h4c2 0 3.5 1.5 3.5 3s-1.5 3-3.5 3H3V8z"}),d.jsx("path",{d:"M3 14h4.5c2 0 3.5 1.5 3.5 3s-1.5 3-3.5 3H3v-6z"}),d.jsx("circle",{cx:"17",cy:"14",r:"3.5"}),d.jsx("path",{d:"M14 6h6"})]})}].map(({label:s,icon:c})=>{const p=(Mt.contact.links||[]).find(b=>b.label===s);if(!p)return null;const v=p.href.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"").substring(0,20);return d.jsxs("a",{href:p.href,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:8,color:"inherit",fontSize:13,fontWeight:500,transition:"all 0.2s ease",position:"relative",transform:"scale(1)"},onMouseEnter:b=>{b.style.opacity=.7,b.style.transform="scale(1.05)";const A=b.querySelector(`.label-${s}`),x=b.querySelector(`.url-${s}`),M=b.querySelector(`.new-icon-${s}`);A&&(A.style.opacity=0),x&&(x.style.opacity=1),M&&(M.style.opacity=1)},onMouseLeave:b=>{b.style.opacity=1,b.style.transform="scale(1)";const A=b.querySelector(`.label-${s}`),x=b.querySelector(`.url-${s}`),M=b.querySelector(`.new-icon-${s}`);A&&(A.style.opacity=1),x&&(x.style.opacity=0),M&&(M.style.opacity=0)},children:[c,d.jsx("span",{className:`label-${s}`,style:{transition:"opacity 0.2s"},children:s}),d.jsx("span",{className:`url-${s}`,style:{opacity:0,transition:"opacity 0.2s",fontSize:12,color:"var(--muted)",marginRight:4},children:v}),d.jsx(wi,{className:`new-icon-${s}`,style:{fontSize:14,opacity:0,transition:"opacity 0.2s"},children:"open_in_new"})]},s)})})]})]}),d.jsx(Nv,{ref:l,onPointerMove:h,onPointerUp:S,onPointerCancel:S,children:d.jsxs(Uv,{ref:a,children:[g&&u.length>0&&o.map((s,c)=>{const p=u[c];return p?(console.log(`Rendering sticker ${c} at:`,p),d.jsx(Rv,{style:{left:`${p.x}px`,top:`${p.y}px`,transform:`translate(-50%, -50%) rotate(${p.rotation}deg)`},onPointerDown:m(`logo-${c}`),"aria-label":`Logo ${c+1} sticker`,children:d.jsx("img",{src:s,alt:`Logo ${c+1}`,loading:"lazy"})},`logo-${c}`)):null}),!g&&d.jsx("div",{style:{color:"var(--muted)"},children:"Loading stickers..."})]})})]})})]})}const Yv=w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`,Gv=w.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Qf=w.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin: 0 0 16px 0;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;function qv(){return d.jsx(Ku,{id:"about",children:d.jsx(Ju,{children:d.jsxs(Gv,{children:[d.jsx(Yv,{children:"About"}),d.jsxs(Pc,{style:{marginBottom:24},children:["Translating  ",d.jsx(Nt,{children:"complex"})," user needs  to ",d.jsx(Nt,{children:"AI systems"}),"."]}),d.jsxs(Qf,{children:["I hold a B.Tech in ",d.jsx(Nt,{children:"Computer Science & Design"})," , from ",d.jsx(Nt,{children:" IIIT-Delhi, 2024"}),", and currently work at ",d.jsx(Nt,{children:d.jsx("a",{href:"https://ripikai.com",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none",fontStyle:"inherit",cursor:"pointer",opacity:1},onMouseEnter:t=>t.target.style.textDecoration="underline",onMouseLeave:t=>t.target.style.textDecoration="none",children:"RipikAI"})})," with prior experience at ",d.jsx(Nt,{children:d.jsx("a",{href:"https://wadhwaniai.org",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none",fontStyle:"inherit",cursor:"pointer",opacity:1},onMouseEnter:t=>t.target.style.textDecoration="underline",onMouseLeave:t=>t.target.style.textDecoration="none",children:"Wadhwani AI"})})]}),d.jsxs(Qf,{children:["Translating user needs into scalable solutions through data-driven decision-making, UX research, and cross-functional team execution. Passionate about ",d.jsx(Nt,{children:"building technology"})," that aligns business goals with ",d.jsx(Nt,{children:"real-world outcomes"}),"."]})]})})})}const Xv=w.footer`
  background: var(--accentGradient);
  border-top: none;
  padding: 20px 0 16px;
  margin-top: 0;
  scroll-snap-align: end;
  scroll-snap-stop: always;
  min-height: auto;
  position: relative;
  z-index: 10;
  color: white;

  @media (max-width: 640px) {
    padding: 16px 0 12px;
  }
`,kv=w.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 640px) {
    padding: 0 16px;
    gap: 12px;
  }
`;w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: white;
`;w.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;w.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 12px;
  max-width: 300px;
  line-height: 1.4;
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
    width: 100%;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;w.h4`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.75);
`;w.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
    opacity: 0.9;
  }
`;const Lv=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  font-size: 11px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`,Qv=w.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 12px;
    text-align: center;
    
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Gr=w.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  
  svg {
    width: 100%;
    height: 100%;
    stroke: white;
    stroke-width: 1.5;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`,Zv=w.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Vv=w.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;function Kv(){var e;const t=new Date().getFullYear();return Mt.nav,(((e=Mt.contact)==null?void 0:e.links)||[]).filter(a=>["GitHub","LinkedIn","Behance"].includes(a.label)),d.jsx(Xv,{children:d.jsx(kv,{children:d.jsxs(Lv,{children:[d.jsxs(Qv,{children:[d.jsx("span",{children:"Building AI products that make a difference. Let's Connect!"}),d.jsxs(Zv,{children:[d.jsx(Gr,{href:"mailto:hello@prakharbhargava.in",title:"Email","aria-label":"Email",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}),d.jsx("path",{d:"m2 6 10 7 10-7"})]})}),d.jsx(Gr,{href:"https://linkedin.com/in/prakharbhargava35",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn","aria-label":"LinkedIn",children:d.jsxs("svg",{viewBox:"0 0 24 24",children:[d.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),d.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),d.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}),d.jsx(Gr,{href:"https://wa.me/919899326396",target:"_blank",rel:"noopener noreferrer",title:"WhatsApp","aria-label":"WhatsApp",children:d.jsx("svg",{viewBox:"0 0 24 24",children:d.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.3L2 22l6.3-1.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"})})})]})]}),d.jsxs(Vv,{children:[d.jsxs("span",{children:["© ",t," Prakhar Bhargava"]}),d.jsx("span",{children:"·"}),d.jsx("span",{children:"Made with 🤍 in India"})]})]})})})}w.div`
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 8px;
`;w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;w.div`
  border: 1px solid var(--rule);
  border-radius: 12px;
  padding: 24px;
  background: var(--card);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--accent, #0066ff);
    box-shadow: 0 8px 24px rgba(0, 102, 255, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;w.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
`;w.p`
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
`;w.p`
  margin: 0 0 12px 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text);
`;w.ul`
  margin: 0;
  padding-left: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text);
    position: relative;
    padding-left: 12px;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--muted);
    }
  }
`;w.div`
  text-align: center;
  padding: 48px 24px;
  color: var(--muted);
  font-size: 15px;

  p {
    margin: 0;
  }
`;function Jv(){const[t,e]=B.useState(!0);B.useEffect(()=>{const n="i36g6d2vrr";typeof window>"u"||window.clarity||function(i,u,r,o,f,g,y){i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},g=u.createElement(o),g.async=1,g.src="https://www.clarity.ms/tag/"+f,y=u.getElementsByTagName(o)[0],y.parentNode.insertBefore(g,y)}(window,document,"clarity","script",n)},[]),B.useEffect(()=>{const n=localStorage.getItem("theme"),i=window.matchMedia("(prefers-color-scheme: dark)").matches,u=n?n==="dark":i;e(u),a(u)},[]);const a=n=>{const i=document.documentElement;n?i.classList.add("theme-dark"):i.classList.remove("theme-dark"),localStorage.setItem("theme",n?"dark":"light")},l=()=>{e(!t),a(!t)};return B.useEffect(()=>{const n={root:null,rootMargin:"-50% 0px -50% 0px",threshold:0},i=o=>{o.forEach(f=>{if(f.isIntersecting){const g=f.target.id;window.history.replaceState(null,"",`#${g}`)}})},u=new IntersectionObserver(i,n),r=document.querySelectorAll("section[id]");return r.forEach(o=>u.observe(o)),()=>{r.forEach(o=>u.unobserve(o)),u.disconnect()}},[]),d.jsxs(d.Fragment,{children:[d.jsx(by,{}),d.jsx(Sy,{isDarkMode:t}),d.jsx(bv,{isDarkMode:t,toggleDarkMode:l}),d.jsxs("main",{style:{scrollBehavior:"smooth"},children:[d.jsx(jv,{}),d.jsx(qv,{}),d.jsx(Ov,{}),d.jsx(Bv,{}),d.jsx(Kv,{})]})]})}const $v=document.getElementById("root");y1.createRoot($v).render(d.jsx(Ut.StrictMode,{children:d.jsx(Jv,{})}));
