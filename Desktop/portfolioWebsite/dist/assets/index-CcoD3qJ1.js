(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nu={exports:{}},ei={},$u={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),yf=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),_f=Symbol.for("react.memo"),Pf=Symbol.for("react.lazy"),ls=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=ls&&e[ls]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iu=Object.assign,Du={};function Un(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Tu}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ru(){}Ru.prototype=Un.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||Tu}var ra=na.prototype=new Ru;ra.constructor=na;Iu(ra,Un.prototype);ra.isPureReactComponent=!0;var as=Array.isArray,Lu=Object.prototype.hasOwnProperty,oa={current:null},Ou={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Lu.call(t,r)&&!Ou.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Dr,type:e,key:i,ref:l,props:o,_owner:oa.current}}function Nf(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function $f(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ss=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$f(""+e.key):t.toString(36)}function ao(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Dr:case yf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ci(l,0):r,as(o)?(n="",e!=null&&(n=e.replace(ss,"$&/")+"/"),ao(o,t,n,"",function(u){return u})):o!=null&&(ia(o)&&(o=Nf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ss,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",as(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ci(i,a);l+=ao(i,t,n,s,o)}else if(s=zf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ci(i,a++),l+=ao(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hr(e,t,n){if(e==null)return e;var r=[],o=0;return ao(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Tf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},so={transition:null},If={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:so,ReactCurrentOwner:oa};function Au(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Un;R.Fragment=xf;R.Profiler=kf;R.PureComponent=na;R.StrictMode=wf;R.Suspense=jf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;R.act=Au;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Iu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Lu.call(t,s)&&!Ou.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Dr,type:e.type,key:o,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:Ef,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sf,_context:e},e.Consumer=e};R.createElement=Mu;R.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Cf,render:e}};R.isValidElement=ia;R.lazy=function(e){return{$$typeof:Pf,_payload:{_status:-1,_result:e},_init:Tf}};R.memo=function(e,t){return{$$typeof:_f,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};R.unstable_act=Au;R.useCallback=function(e,t){return he.current.useCallback(e,t)};R.useContext=function(e){return he.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return he.current.useDeferredValue(e)};R.useEffect=function(e,t){return he.current.useEffect(e,t)};R.useId=function(){return he.current.useId()};R.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return he.current.useMemo(e,t)};R.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};R.useRef=function(e){return he.current.useRef(e)};R.useState=function(e){return he.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return he.current.useTransition()};R.version="18.3.1";$u.exports=R;var W=$u.exports;const De=vf(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=W,Rf=Symbol.for("react.element"),Lf=Symbol.for("react.fragment"),Of=Object.prototype.hasOwnProperty,Mf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Of.call(t,r)&&!Af.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rf,type:e,key:i,ref:l,props:o,_owner:Mf.current}}ei.Fragment=Lf;ei.jsx=Fu;ei.jsxs=Fu;Nu.exports=ei;var p=Nu.exports,tl={},Uu={exports:{}},Ne={},Bu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,N){var T=_.length;_.push(N);e:for(;0<T;){var A=T-1>>>1,F=_[A];if(0<o(F,N))_[A]=N,_[T]=F,T=A;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],T=_.pop();if(T!==N){_[0]=T;e:for(var A=0,F=_.length,Bt=F>>>1;A<Bt;){var Ue=2*(A+1)-1,mt=_[Ue],Ee=Ue+1,nt=_[Ee];if(0>o(mt,T))Ee<F&&0>o(nt,mt)?(_[A]=nt,_[Ee]=T,A=Ee):(_[A]=mt,_[Ue]=T,A=Ue);else if(Ee<F&&0>o(nt,T))_[A]=nt,_[Ee]=T,A=Ee;else break e}}return N}function o(_,N){var T=_.sortIndex-N.sortIndex;return T!==0?T:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],g=1,h=null,m=3,v=!1,w=!1,k=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=_)r(u),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(u)}}function x(_){if(k=!1,f(_),!w)if(n(s)!==null)w=!0,Wn(j);else{var N=n(u);N!==null&&Ut(x,N.startTime-_)}}function j(_,N){w=!1,k&&(k=!1,d(z),z=-1),v=!0;var T=m;try{for(f(N),h=n(s);h!==null&&(!(h.expirationTime>N)||_&&!Se());){var A=h.callback;if(typeof A=="function"){h.callback=null,m=h.priorityLevel;var F=A(h.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?h.callback=F:h===n(s)&&r(s),f(N)}else r(s);h=n(s)}if(h!==null)var Bt=!0;else{var Ue=n(u);Ue!==null&&Ut(x,Ue.startTime-N),Bt=!1}return Bt}finally{h=null,m=T,v=!1}}var C=!1,S=null,z=-1,U=5,D=-1;function Se(){return!(e.unstable_now()-D<U)}function At(){if(S!==null){var _=e.unstable_now();D=_;var N=!0;try{N=S(!0,_)}finally{N?Ft():(C=!1,S=null)}}else C=!1}var Ft;if(typeof c=="function")Ft=function(){c(At)};else if(typeof MessageChannel<"u"){var Ur=new MessageChannel,Si=Ur.port2;Ur.port1.onmessage=At,Ft=function(){Si.postMessage(null)}}else Ft=function(){$(At,0)};function Wn(_){S=_,C||(C=!0,Ft())}function Ut(_,N){z=$(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Wn(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var T=m;m=N;try{return _()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=m;m=_;try{return N()}finally{m=T}},e.unstable_scheduleCallback=function(_,N,T){var A=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?A+T:A):T=A,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,_={id:g++,callback:N,priorityLevel:_,startTime:T,expirationTime:F,sortIndex:-1},T>A?(_.sortIndex=T,t(u,_),n(s)===null&&_===n(u)&&(k?(d(z),z=-1):k=!0,Ut(x,T-A))):(_.sortIndex=F,t(s,_),w||v||(w=!0,Wn(j))),_},e.unstable_shouldYield=Se,e.unstable_wrapCallback=function(_){var N=m;return function(){var T=m;m=N;try{return _.apply(this,arguments)}finally{m=T}}}})(Hu);Bu.exports=Hu;var Ff=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf=W,ze=Ff;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,hr={};function rn(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(hr[e]=t,e=0;e<t.length;e++)Vu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,Bf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,us={},cs={};function Hf(e){return nl.call(cs,e)?!0:nl.call(us,e)?!1:Bf.test(e)?cs[e]=!0:(us[e]=!0,!1)}function Vf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wf(e,t,n,r){if(t===null||typeof t>"u"||Vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,aa);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,aa);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,aa);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wf(t,n,o,r)&&(n=null),r||o===null?Hf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),ds=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ji;function er(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var _i=!1;function Pi(e,t){if(!e||_i)return"";_i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{_i=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function Qf(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=Pi(e.type,!1),e;case 11:return e=Pi(e.type.render,!1),e;case 1:return e=Pi(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case rl:return"Profiler";case ua:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function Yf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bf(e){var t=bu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=bf(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function sl(e,t){Ku(e,t);var n=Dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,Dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ms(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(tr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dt(n)}}function Xu(e,t){var n=Dt(t.value),r=Dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gf=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Gf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(Kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Sn=null,En=null;function gs(e){if(e=Or(e)){if(typeof hl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ii(t),hl(e.stateNode,e.type,t))}}function tc(e){Sn?En?En.push(e):En=[e]:Sn=e}function nc(){if(Sn){var e=Sn,t=En;if(En=Sn=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function rc(e,t){return e(t)}function oc(){}var zi=!1;function ic(e,t,n){if(zi)return e(t,n);zi=!0;try{return rc(e,t,n)}finally{zi=!1,(Sn!==null||En!==null)&&(oc(),nc())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var gl=!1;if(ut)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){gl=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{gl=!1}function Xf(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var lr=!1,_o=null,Po=!1,vl=null,Zf={onError:function(e){lr=!0,_o=e}};function Jf(e,t,n,r,o,i,l,a,s){lr=!1,_o=null,Xf.apply(Zf,arguments)}function qf(e,t,n,r,o,i,l,a,s){if(Jf.apply(this,arguments),lr){if(lr){var u=_o;lr=!1,_o=null}else throw Error(E(198));Po||(Po=!0,vl=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vs(e){if(on(e)!==e)throw Error(E(188))}function ep(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return vs(o),e;if(i===r)return vs(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function ac(e){return e=ep(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var uc=ze.unstable_scheduleCallback,ys=ze.unstable_cancelCallback,tp=ze.unstable_shouldYield,np=ze.unstable_requestPaint,Z=ze.unstable_now,rp=ze.unstable_getCurrentPriorityLevel,pa=ze.unstable_ImmediatePriority,cc=ze.unstable_UserBlockingPriority,zo=ze.unstable_NormalPriority,op=ze.unstable_LowPriority,dc=ze.unstable_IdlePriority,ti=null,et=null;function ip(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:sp,lp=Math.log,ap=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(lp(e)/ap|0)|0}var Yr=64,br=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function No(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=nr(a):(i&=l,i!==0&&(r=nr(i)))}else l=n&~o,l!==0?r=nr(l):i!==0&&(r=nr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),o=1<<n,r|=e[n],t&=~o;return r}function up(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Qe(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=up(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function Ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mc,ha,hc,gc,vc,xl=!1,Gr=[],Ct=null,jt=null,_t=null,yr=new Map,xr=new Map,wt=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Gn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Or(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pp(e,t,n,r,o){switch(t){case"focusin":return Ct=Gn(Ct,e,t,n,r,o),!0;case"dragenter":return jt=Gn(jt,e,t,n,r,o),!0;case"mouseover":return _t=Gn(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return yr.set(i,Gn(yr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xr.set(i,Gn(xr.get(i)||null,e,t,n,r,o)),!0}return!1}function yc(e){var t=Qt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,vc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ml=r,n.target.dispatchEvent(r),ml=null}else return t=Or(n),t!==null&&ha(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){uo(e)&&n.delete(t)}function mp(){xl=!1,Ct!==null&&uo(Ct)&&(Ct=null),jt!==null&&uo(jt)&&(jt=null),_t!==null&&uo(_t)&&(_t=null),yr.forEach(ws),xr.forEach(ws)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,mp)))}function wr(e){function t(o){return Kn(o,e)}if(0<Gr.length){Kn(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Kn(Ct,e),jt!==null&&Kn(jt,e),_t!==null&&Kn(_t,e),yr.forEach(t),xr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&wt.shift()}var Cn=pt.ReactCurrentBatchConfig,$o=!0;function hp(e,t,n,r){var o=M,i=Cn.transition;Cn.transition=null;try{M=1,ga(e,t,n,r)}finally{M=o,Cn.transition=i}}function gp(e,t,n,r){var o=M,i=Cn.transition;Cn.transition=null;try{M=4,ga(e,t,n,r)}finally{M=o,Cn.transition=i}}function ga(e,t,n,r){if($o){var o=wl(e,t,n,r);if(o===null)Fi(e,t,r,To,n),xs(e,r);else if(pp(o,e,t,n,r))r.stopPropagation();else if(xs(e,r),t&4&&-1<fp.indexOf(e)){for(;o!==null;){var i=Or(o);if(i!==null&&mc(i),i=wl(e,t,n,r),i===null&&Fi(e,t,r,To,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Fi(e,t,r,null,n)}}var To=null;function wl(e,t,n,r){if(To=null,e=fa(r),e=Qt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return To=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rp()){case pa:return 1;case cc:return 4;case zo:case op:return 16;case dc:return 536870912;default:return 16}default:return 16}}var St=null,va=null,co=null;function wc(){if(co)return co;var e,t=va,n=t.length,r,o="value"in St?St.value:St.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return co=o.slice(e,1<r?1-r:void 0)}function fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function ks(){return!1}function $e(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:ks,this.isPropagationStopped=ks,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=$e(Bn),Lr=K({},Bn,{view:0,detail:0}),vp=$e(Lr),$i,Ti,Xn,ni=K({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?($i=e.screenX-Xn.screenX,Ti=e.screenY-Xn.screenY):Ti=$i=0,Xn=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Ss=$e(ni),yp=K({},ni,{dataTransfer:0}),xp=$e(yp),wp=K({},Lr,{relatedTarget:0}),Ii=$e(wp),kp=K({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sp=$e(kp),Ep=K({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cp=$e(Ep),jp=K({},Bn,{data:0}),Es=$e(jp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zp[e])?!!t[e]:!1}function xa(){return Np}var $p=K({},Lr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tp=$e($p),Ip=K({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=$e(Ip),Dp=K({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Rp=$e(Dp),Lp=K({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=$e(Lp),Mp=K({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ap=$e(Mp),Fp=[9,13,27,32],wa=ut&&"CompositionEvent"in window,ar=null;ut&&"documentMode"in document&&(ar=document.documentMode);var Up=ut&&"TextEvent"in window&&!ar,kc=ut&&(!wa||ar&&8<ar&&11>=ar),js=" ",_s=!1;function Sc(e,t){switch(e){case"keyup":return Fp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Bp(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(_s=!0,js);case"textInput":return e=t.data,e===js&&_s?null:e;default:return null}}function Hp(e,t){if(cn)return e==="compositionend"||!wa&&Sc(e,t)?(e=wc(),co=va=St=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var Vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vp[e.type]:t==="textarea"}function Cc(e,t,n,r){tc(r),t=Io(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,kr=null;function Wp(e){Lc(e,0)}function ri(e){var t=pn(e);if(Gu(t))return e}function Qp(e,t){if(e==="change")return t}var jc=!1;if(ut){var Di;if(ut){var Ri="oninput"in document;if(!Ri){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Ri=typeof zs.oninput=="function"}Di=Ri}else Di=!1;jc=Di&&(!document.documentMode||9<document.documentMode)}function Ns(){sr&&(sr.detachEvent("onpropertychange",_c),kr=sr=null)}function _c(e){if(e.propertyName==="value"&&ri(kr)){var t=[];Cc(t,kr,e,fa(e)),ic(Wp,t)}}function Yp(e,t,n){e==="focusin"?(Ns(),sr=t,kr=n,sr.attachEvent("onpropertychange",_c)):e==="focusout"&&Ns()}function bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(kr)}function Gp(e,t){if(e==="click")return ri(t)}function Kp(e,t){if(e==="input"||e==="change")return ri(t)}function Xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Xp;function Sr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ts(e,t){var n=$s(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$s(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zp(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ts(n,i);var l=Ts(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=ut&&"documentMode"in document&&11>=document.documentMode,dn=null,kl=null,ur=null,Sl=!1;function Is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||dn==null||dn!==jo(r)||(r=dn,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&Sr(ur,r)||(ur=r,r=Io(kl,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Li={},Nc={};ut&&(Nc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function oi(e){if(Li[e])return Li[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nc)return Li[e]=t[n];return e}var $c=oi("animationend"),Tc=oi("animationiteration"),Ic=oi("animationstart"),Dc=oi("transitionend"),Rc=new Map,Ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Rc.set(e,t),rn(t,[e])}for(var Oi=0;Oi<Ds.length;Oi++){var Mi=Ds[Oi],qp=Mi.toLowerCase(),em=Mi[0].toUpperCase()+Mi.slice(1);Lt(qp,"on"+em)}Lt($c,"onAnimationEnd");Lt(Tc,"onAnimationIteration");Lt(Ic,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Dc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function Rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qf(r,t,void 0,e),e.currentTarget=null}function Lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Rs(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Rs(o,a,u),i=s}}}if(Po)throw e=vl,Po=!1,vl=null,e}function H(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||(Oc(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),Oc(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Zr]){e[Zr]=!0,Vu.forEach(function(n){n!=="selectionchange"&&(tm.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ai("selectionchange",!1,t))}}function Oc(e,t,n,r){switch(xc(t)){case 1:var o=hp;break;case 4:o=gp;break;default:o=ga}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Qt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ic(function(){var u=i,g=fa(n),h=[];e:{var m=Rc.get(e);if(m!==void 0){var v=ya,w=e;switch(e){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":v=Tp;break;case"focusin":w="focus",v=Ii;break;case"focusout":w="blur",v=Ii;break;case"beforeblur":case"afterblur":v=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ss;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rp;break;case $c:case Tc:case Ic:v=Sp;break;case Dc:v=Op;break;case"scroll":v=vp;break;case"wheel":v=Ap;break;case"copy":case"cut":case"paste":v=Cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cs}var k=(t&4)!==0,$=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=vr(c,d),x!=null&&k.push(Cr(c,x,f)))),$)break;c=c.return}0<k.length&&(m=new v(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==ml&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[ct]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Qt(w):null,w!==null&&($=on(w),w!==$||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(k=Ss,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Cs,x="onPointerLeave",d="onPointerEnter",c="pointer"),$=v==null?m:pn(v),f=w==null?m:pn(w),m=new k(x,c+"leave",v,n,g),m.target=$,m.relatedTarget=f,x=null,Qt(g)===u&&(k=new k(d,c+"enter",w,n,g),k.target=f,k.relatedTarget=$,x=k),$=x,v&&w)t:{for(k=v,d=w,c=0,f=k;f;f=ln(f))c++;for(f=0,x=d;x;x=ln(x))f++;for(;0<c-f;)k=ln(k),c--;for(;0<f-c;)d=ln(d),f--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=ln(k),d=ln(d)}k=null}else k=null;v!==null&&Ls(h,m,v,k,!1),w!==null&&$!==null&&Ls(h,$,w,k,!0)}}e:{if(m=u?pn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=Qp;else if(Ps(m))if(jc)j=Kp;else{j=bp;var C=Yp}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Gp);if(j&&(j=j(e,u))){Cc(h,j,n,g);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ul(m,"number",m.value)}switch(C=u?pn(u):window,e){case"focusin":(Ps(C)||C.contentEditable==="true")&&(dn=C,kl=u,ur=null);break;case"focusout":ur=kl=dn=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Is(h,n,g);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":Is(h,n,g)}var S;if(wa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else cn?Sc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(kc&&n.locale!=="ko"&&(cn||z!=="onCompositionStart"?z==="onCompositionEnd"&&cn&&(S=wc()):(St=g,va="value"in St?St.value:St.textContent,cn=!0)),C=Io(u,z),0<C.length&&(z=new Es(z,e,null,n,g),h.push({event:z,listeners:C}),S?z.data=S:(S=Ec(n),S!==null&&(z.data=S)))),(S=Up?Bp(e,n):Hp(e,n))&&(u=Io(u,"onBeforeInput"),0<u.length&&(g=new Es("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:u}),g.data=S))}Lc(h,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=vr(e,n),i!=null&&r.unshift(Cr(e,i,o)),i=vr(e,t),i!=null&&r.push(Cr(e,i,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=vr(n,i),s!=null&&l.unshift(Cr(n,s,a))):o||(s=vr(n,i),s!=null&&l.push(Cr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var nm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(rm,"")}function Jr(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(E(425))}function Do(){}var El=null,Cl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _l=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(lm)}:_l;function lm(e){setTimeout(function(){throw e})}function Ui(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function As(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Hn,jr="__reactProps$"+Hn,ct="__reactContainer$"+Hn,Pl="__reactEvents$"+Hn,am="__reactListeners$"+Hn,sm="__reactHandles$"+Hn;function Qt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=As(e);e!==null;){if(n=e[qe])return n;e=As(e)}return t}e=n,n=e.parentNode}return null}function Or(e){return e=e[qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ii(e){return e[jr]||null}var zl=[],mn=-1;function Ot(e){return{current:e}}function Q(e){0>mn||(e.current=zl[mn],zl[mn]=null,mn--)}function B(e,t){mn++,zl[mn]=e.current,e.current=t}var Rt={},fe=Ot(Rt),xe=Ot(!1),Jt=Rt;function zn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function Ro(){Q(xe),Q(fe)}function Fs(e,t,n){if(fe.current!==Rt)throw Error(E(168));B(fe,t),B(xe,n)}function Mc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,Yf(e)||"Unknown",o));return K({},n,r)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Jt=fe.current,B(fe,e),B(xe,xe.current),!0}function Us(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Mc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,Q(xe),Q(fe),B(fe,e)):Q(xe),B(xe,n)}var it=null,li=!1,Bi=!1;function Ac(e){it===null?it=[e]:it.push(e)}function um(e){li=!0,Ac(e)}function Mt(){if(!Bi&&it!==null){Bi=!0;var e=0,t=M;try{var n=it;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,li=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),uc(pa,Mt),o}finally{M=t,Bi=!1}}return null}var hn=[],gn=0,Oo=null,Mo=0,Te=[],Ie=0,qt=null,lt=1,at="";function Vt(e,t){hn[gn++]=Mo,hn[gn++]=Oo,Oo=e,Mo=t}function Fc(e,t,n){Te[Ie++]=lt,Te[Ie++]=at,Te[Ie++]=qt,qt=e;var r=lt;e=at;var o=32-Qe(r)-1;r&=~(1<<o),n+=1;var i=32-Qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-Qe(t)+o|n<<o|r,at=i+e}else lt=1<<i|n<<o|r,at=e}function Sa(e){e.return!==null&&(Vt(e,1),Fc(e,1,0))}function Ea(e){for(;e===Oo;)Oo=hn[--gn],hn[gn]=null,Mo=hn[--gn],hn[gn]=null;for(;e===qt;)qt=Te[--Ie],Te[Ie]=null,at=Te[--Ie],Te[Ie]=null,lt=Te[--Ie],Te[Ie]=null}var Pe=null,_e=null,Y=!1,We=null;function Uc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,_e=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,_e=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(Y){var t=_e;if(t){var n=t;if(!Bs(e,t)){if(Nl(e))throw Error(E(418));t=Pt(n.nextSibling);var r=Pe;t&&Bs(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Pe=e)}}else{if(Nl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Y=!1,Pe=e}}}function Hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function qr(e){if(e!==Pe)return!1;if(!Y)return Hs(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=_e)){if(Nl(e))throw Bc(),Error(E(418));for(;t;)Uc(e,t),t=Pt(t.nextSibling)}if(Hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Pe?Pt(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=_e;e;)e=Pt(e.nextSibling)}function Nn(){_e=Pe=null,Y=!1}function Ca(e){We===null?We=[e]:We.push(e)}var cm=pt.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vs(e){var t=e._init;return t(e._payload)}function Hc(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Tt(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,x){return c===null||c.tag!==6?(c=Gi(f,d.mode,x),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,x){var j=f.type;return j===un?g(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&Vs(j)===c.type)?(x=o(c,f.props),x.ref=Zn(d,c,f),x.return=d,x):(x=xo(f.type,f.key,f.props,null,d.mode,x),x.ref=Zn(d,c,f),x.return=d,x)}function u(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ki(f,d.mode,x),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function g(d,c,f,x,j){return c===null||c.tag!==7?(c=Xt(f,d.mode,x,j),c.return=d,c):(c=o(c,f),c.return=d,c)}function h(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gi(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vr:return f=xo(c.type,c.key,c.props,null,d.mode,f),f.ref=Zn(d,null,c),f.return=d,f;case sn:return c=Ki(c,d.mode,f),c.return=d,c;case yt:var x=c._init;return h(d,x(c._payload),f)}if(tr(c)||Yn(c))return c=Xt(c,d.mode,f,null),c.return=d,c;eo(d,c)}return null}function m(d,c,f,x){var j=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:a(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vr:return f.key===j?s(d,c,f,x):null;case sn:return f.key===j?u(d,c,f,x):null;case yt:return j=f._init,m(d,c,j(f._payload),x)}if(tr(f)||Yn(f))return j!==null?null:g(d,c,f,x,null);eo(d,f)}return null}function v(d,c,f,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,a(c,d,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vr:return d=d.get(x.key===null?f:x.key)||null,s(c,d,x,j);case sn:return d=d.get(x.key===null?f:x.key)||null,u(c,d,x,j);case yt:var C=x._init;return v(d,c,f,C(x._payload),j)}if(tr(x)||Yn(x))return d=d.get(f)||null,g(c,d,x,j,null);eo(c,x)}return null}function w(d,c,f,x){for(var j=null,C=null,S=c,z=c=0,U=null;S!==null&&z<f.length;z++){S.index>z?(U=S,S=null):U=S.sibling;var D=m(d,S,f[z],x);if(D===null){S===null&&(S=U);break}e&&S&&D.alternate===null&&t(d,S),c=i(D,c,z),C===null?j=D:C.sibling=D,C=D,S=U}if(z===f.length)return n(d,S),Y&&Vt(d,z),j;if(S===null){for(;z<f.length;z++)S=h(d,f[z],x),S!==null&&(c=i(S,c,z),C===null?j=S:C.sibling=S,C=S);return Y&&Vt(d,z),j}for(S=r(d,S);z<f.length;z++)U=v(S,d,z,f[z],x),U!==null&&(e&&U.alternate!==null&&S.delete(U.key===null?z:U.key),c=i(U,c,z),C===null?j=U:C.sibling=U,C=U);return e&&S.forEach(function(Se){return t(d,Se)}),Y&&Vt(d,z),j}function k(d,c,f,x){var j=Yn(f);if(typeof j!="function")throw Error(E(150));if(f=j.call(f),f==null)throw Error(E(151));for(var C=j=null,S=c,z=c=0,U=null,D=f.next();S!==null&&!D.done;z++,D=f.next()){S.index>z?(U=S,S=null):U=S.sibling;var Se=m(d,S,D.value,x);if(Se===null){S===null&&(S=U);break}e&&S&&Se.alternate===null&&t(d,S),c=i(Se,c,z),C===null?j=Se:C.sibling=Se,C=Se,S=U}if(D.done)return n(d,S),Y&&Vt(d,z),j;if(S===null){for(;!D.done;z++,D=f.next())D=h(d,D.value,x),D!==null&&(c=i(D,c,z),C===null?j=D:C.sibling=D,C=D);return Y&&Vt(d,z),j}for(S=r(d,S);!D.done;z++,D=f.next())D=v(S,d,z,D.value,x),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?z:D.key),c=i(D,c,z),C===null?j=D:C.sibling=D,C=D);return e&&S.forEach(function(At){return t(d,At)}),Y&&Vt(d,z),j}function $(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Vr:e:{for(var j=f.key,C=c;C!==null;){if(C.key===j){if(j=f.type,j===un){if(C.tag===7){n(d,C.sibling),c=o(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&Vs(j)===C.type){n(d,C.sibling),c=o(C,f.props),c.ref=Zn(d,C,f),c.return=d,d=c;break e}n(d,C);break}else t(d,C);C=C.sibling}f.type===un?(c=Xt(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=xo(f.type,f.key,f.props,null,d.mode,x),x.ref=Zn(d,c,f),x.return=d,d=x)}return l(d);case sn:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ki(f,d.mode,x),c.return=d,d=c}return l(d);case yt:return C=f._init,$(d,c,C(f._payload),x)}if(tr(f))return w(d,c,f,x);if(Yn(f))return k(d,c,f,x);eo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Gi(f,d.mode,x),c.return=d,d=c),l(d)):n(d,c)}return $}var $n=Hc(!0),Vc=Hc(!1),Ao=Ot(null),Fo=null,vn=null,ja=null;function _a(){ja=vn=Fo=null}function Pa(e){var t=Ao.current;Q(Ao),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Fo=e,ja=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Fo===null)throw Error(E(308));vn=e,Fo.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Yt=null;function za(e){Yt===null?Yt=[e]:Yt.push(e)}function Wc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,za(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,za(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}function Ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;xt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=u:a.next=u,g.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,g=u=s=null,a=i;do{var m=a.lane,v=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(m=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(v,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(v,h,m):w,m==null)break e;h=K({},h,m);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(u=g=v,s=h):g=g.next=v,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=h}}function Qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Mr={},tt=Ot(Mr),_r=Ot(Mr),Pr=Ot(Mr);function bt(e){if(e===Mr)throw Error(E(174));return e}function $a(e,t){switch(B(Pr,t),B(_r,e),B(tt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}Q(tt),B(tt,t)}function Tn(){Q(tt),Q(_r),Q(Pr)}function Yc(e){bt(Pr.current);var t=bt(tt.current),n=dl(t,e.type);t!==n&&(B(_r,e),B(tt,n))}function Ta(e){_r.current===e&&(Q(tt),Q(_r))}var b=Ot(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function Ia(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var mo=pt.ReactCurrentDispatcher,Vi=pt.ReactCurrentBatchConfig,en=0,G=null,ee=null,ne=null,Ho=!1,cr=!1,zr=0,dm=0;function se(){throw Error(E(321))}function Da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,o,i){if(en=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mo.current=e===null||e.memoizedState===null?hm:gm,e=n(r,o),cr){i=0;do{if(cr=!1,zr=0,25<=i)throw Error(E(301));i+=1,ne=ee=null,t.updateQueue=null,mo.current=vm,e=n(r,o)}while(cr)}if(mo.current=Vo,t=ee!==null&&ee.next!==null,en=0,ne=ee=G=null,Ho=!1,t)throw Error(E(300));return e}function La(){var e=zr!==0;return zr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function Ae(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(E(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function Nr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var g=u.lane;if((en&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,G.lanes|=g,tn|=g}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Ge(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,tn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bc(){}function Gc(e,t){var n=G,r=Ae(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,ye=!0),r=r.queue,Oa(Zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,$r(9,Xc.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(E(349));en&30||Kc(n,t,o)}return o}function Kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&qc(e)}function Zc(e,t,n){return n(function(){Jc(t)&&qc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function qc(e){var t=dt(e,1);t!==null&&Ye(t,e,1,-1)}function Ys(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=mm.bind(null,G,e),[t.memoizedState,e]}function $r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ed(){return Ae().memoizedState}function ho(e,t,n,r){var o=Ze();G.flags|=e,o.memoizedState=$r(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var o=Ae();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Da(r,l.deps)){o.memoizedState=$r(t,n,i,r);return}}G.flags|=e,o.memoizedState=$r(1|t,n,i,r)}function bs(e,t){return ho(8390656,8,e,t)}function Oa(e,t){return ai(2048,8,e,t)}function td(e,t){return ai(4,2,e,t)}function nd(e,t){return ai(4,4,e,t)}function rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,rd.bind(null,t,e),n)}function Ma(){}function id(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ld(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ad(e,t,n){return en&21?(Ge(n,t)||(n=fc(),G.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function fm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{M=n,Vi.transition=r}}function sd(){return Ae().memoizedState}function pm(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ud(e))cd(t,n);else if(n=Wc(e,t,n,r),n!==null){var o=me();Ye(n,e,r,o),dd(n,t,r)}}function mm(e,t,n){var r=$t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ud(e))cd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Ge(a,l)){var s=t.interleaved;s===null?(o.next=o,za(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Wc(e,t,o,r),n!==null&&(o=me(),Ye(n,e,r,o),dd(n,t,r))}}function ud(e){var t=e.alternate;return e===G||t!==null&&t===G}function cd(e,t){cr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}var Vo={readContext:Me,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},hm={readContext:Me,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:bs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,rd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Ys,useDebugValue:Ma,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=fm.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Ze();if(Y){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),oe===null)throw Error(E(349));en&30||Kc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,bs(Zc.bind(null,r,i,e),[e]),r.flags|=2048,$r(9,Xc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ze(),t=oe.identifierPrefix;if(Y){var n=at,r=lt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gm={readContext:Me,useCallback:id,useContext:Me,useEffect:Oa,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:Wi,useRef:ed,useState:function(){return Wi(Nr)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ae();return ad(t,ee.memoizedState,e)},useTransition:function(){var e=Wi(Nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:Gc,useId:sd,unstable_isNewReconciler:!1},vm={readContext:Me,useCallback:id,useContext:Me,useEffect:Oa,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:ld,useReducer:Qi,useRef:ed,useState:function(){return Qi(Nr)},useDebugValue:Ma,useDeferredValue:function(e){var t=Ae();return ee===null?t.memoizedState=e:ad(t,ee.memoizedState,e)},useTransition:function(){var e=Qi(Nr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:bc,useSyncExternalStore:Gc,useId:sd,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Il(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var si={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),o=$t(e),i=st(r,o);i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ye(t,e,o,r),po(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),o=$t(e),i=st(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zt(e,i,o),t!==null&&(Ye(t,e,o,r),po(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=$t(e),o=st(n,r);o.tag=2,t!=null&&(o.callback=t),t=zt(e,o,r),t!==null&&(Ye(t,e,r,n),po(t,e,r))}};function Gs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(o,i):!0}function fd(e,t,n){var r=!1,o=Rt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(o=we(t)?Jt:fe.current,r=t.contextTypes,i=(r=r!=null)?zn(e,o):Rt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&si.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Na(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Me(i):(i=we(t)?Jt:fe.current,o.context=zn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Il(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&si.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=Qf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ym=typeof WeakMap=="function"?WeakMap:Map;function pd(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,Wl=r),Rl(e,t)},n}function md(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ym;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Im.bind(null,e,t,n),t.then(e,e))}function Zs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Js(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var xm=pt.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?Vc(t,null,n,r):$n(t,e.child,n,r)}function qs(e,t,n,r,o){n=n.render;var i=t.ref;return jn(t,o),r=Ra(e,t,n,r,i,o),n=La(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(Y&&n&&Sa(t),t.flags|=1,pe(e,t,r,o),t.child)}function eu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hd(e,t,i,r,o)):(e=xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(l,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=Tt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Sr(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ft(e,t,o)}return Ll(e,t,n,r,o)}function gd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(xn,je),je|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(xn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(xn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(xn,je),je|=r;return pe(e,t,o,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,n,r,o){var i=we(n)?Jt:fe.current;return i=zn(t,i),jn(t,o),n=Ra(e,t,n,r,i,o),r=La(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(Y&&r&&Sa(t),t.flags|=1,pe(e,t,n,o),t.child)}function tu(e,t,n,r,o){if(we(n)){var i=!0;Lo(t)}else i=!1;if(jn(t,o),t.stateNode===null)go(e,t),fd(t,n,r),Dl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=we(n)?Jt:fe.current,u=zn(t,u));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ks(t,l,r,u),xt=!1;var m=t.memoizedState;l.state=m,Uo(t,r,l,o),s=t.memoizedState,a!==r||m!==s||xe.current||xt?(typeof g=="function"&&(Il(t,n,g,r),s=t.memoizedState),(a=xt||Gs(t,n,a,r,m,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Qc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:He(t.type,a),l.props=u,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=we(n)?Jt:fe.current,s=zn(t,s));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Ks(t,l,r,s),xt=!1,m=t.memoizedState,l.state=m,Uo(t,r,l,o);var w=t.memoizedState;a!==h||m!==w||xe.current||xt?(typeof v=="function"&&(Il(t,n,v,r),w=t.memoizedState),(u=xt||Gs(t,n,u,r,m,w,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,i,o)}function Ol(e,t,n,r,o,i){vd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Us(t,n,!1),ft(e,t,i);r=t.stateNode,xm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,a,i)):pe(e,t,a,i),t.memoizedState=r.state,o&&Us(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fs(e,t.context,!1),$a(e,t.containerInfo)}function nu(e,t,n,r,o){return Nn(),Ca(o),t.flags|=256,pe(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,t,n){var r=t.pendingProps,o=b.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(b,o&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=di(l,r,0,null),e=Xt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Ml,e):Aa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return wm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Tt(a,i):(i=Xt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return i=e.child,e=i.sibling,r=Tt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&Ca(r),$n(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(E(422))),to(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=di({mode:"visible",children:r.children},o,0,null),i=Xt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&$n(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Ml,i);if(!(t.mode&1))return to(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=Yi(i,r,void 0),to(e,t,l,r)}if(a=(l&e.childLanes)!==0,ye||a){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dt(e,o),Ye(r,e,o,-1))}return Wa(),r=Yi(Error(E(421))),to(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,_e=Pt(o.nextSibling),Pe=t,Y=!0,We=null,e!==null&&(Te[Ie++]=lt,Te[Ie++]=at,Te[Ie++]=qt,lt=e.id,at=e.overflow,qt=t),t=Aa(t,r.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function bi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function wd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pe(e,t,r.children,n),r=b.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(b,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Bo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bi(t,!0,n,null,i);break;case"together":bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function km(e,t,n){switch(t.tag){case 3:yd(t),Nn();break;case 5:Yc(t);break;case 1:we(t.type)&&Lo(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Ao,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(b,b.current&1),t.flags|=128,null):n&t.child.childLanes?xd(e,t,n):(B(b,b.current&1),e=ft(e,t,n),e!==null?e.sibling:null);B(b,b.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(b,b.current),r)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return ft(e,t,n)}var kd,Fl,Sd,Ed;kd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};Sd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bt(tt.current);var i=null;switch(n){case"input":o=al(e,o),r=al(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=cl(e,o),r=cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}fl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sm(e,t,n){var r=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&Ro(),ue(t),null;case 3:return r=t.stateNode,Tn(),Q(xe),Q(fe),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(bl(We),We=null))),Fl(e,t),ue(t),null;case 5:Ta(t);var o=bt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ue(t),null}if(e=bt(tt.current),qr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qe]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<rr.length;o++)H(rr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":fs(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ms(r,i),H("invalid",r)}fl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),o=["children",""+a]):hr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Wr(r),ps(r,i,!0);break;case"textarea":Wr(r),hs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Do)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[jr]=r,kd(e,t,!1,!1),t.stateNode=e;e:{switch(l=pl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<rr.length;o++)H(rr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":fs(e,r),o=al(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":ms(e,r),o=cl(e,r),H("invalid",e);break;default:o=r}fl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ec(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ju(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&gr(e,s):typeof s=="number"&&gr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(hr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&sa(e,i,s,l))}switch(n){case"input":Wr(e),ps(e,r,!1);break;case"textarea":Wr(e),hs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=bt(Pr.current),bt(tt.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(i=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return ue(t),null;case 13:if(Q(b),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&_e!==null&&t.mode&1&&!(t.flags&128))Bc(),Nn(),t.flags|=98560,i=!1;else if(i=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[qe]=t}else Nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else We!==null&&(bl(We),We=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||b.current&1?te===0&&(te=3):Wa())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return Tn(),Fl(e,t),e===null&&Er(t.stateNode.containerInfo),ue(t),null;case 10:return Pa(t.type._context),ue(t),null;case 17:return we(t.type)&&Ro(),ue(t),null;case 19:if(Q(b),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Jn(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bo(e),l!==null){for(t.flags|=128,Jn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(b,b.current&1|2),t.child}e=e.sibling}i.tail!==null&&Z()>Dn&&(t.flags|=128,r=!0,Jn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ue(t),null}else 2*Z()-i.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Z(),t.sibling=null,n=b.current,B(b,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Em(e,t){switch(Ea(t),t.tag){case 1:return we(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),Q(xe),Q(fe),Ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(Q(b),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(b),null;case 4:return Tn(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var no=!1,ce=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,P=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){X(e,t,r)}}var ou=!1;function jm(e,t){if(El=$o,e=zc(),ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,g=0,h=e,m=null;t:for(;;){for(var v;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++u===o&&(a=l),m===i&&++g===r&&(s=l),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},$o=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,$=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:He(t.type,k),$);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=ou,ou=!1,w}function dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ul(t,n,i)}o=o.next}while(o!==r)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cd(e){var t=e.alternate;t!==null&&(e.alternate=null,Cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[jr],delete t[Pl],delete t[am],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jd(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var ie=null,Ve=!1;function gt(e,t,n){for(n=n.child;n!==null;)_d(e,t,n),n=n.sibling}function _d(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ti,n)}catch{}switch(n.tag){case 5:ce||yn(n,t);case 6:var r=ie,o=Ve;ie=null,gt(e,t,n),ie=r,Ve=o,ie!==null&&(Ve?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Ve?(e=ie,n=n.stateNode,e.nodeType===8?Ui(e.parentNode,n):e.nodeType===1&&Ui(e,n),wr(e)):Ui(ie,n.stateNode));break;case 4:r=ie,o=Ve,ie=n.stateNode.containerInfo,Ve=!0,gt(e,t,n),ie=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ul(n,t,l),o=o.next}while(o!==r)}gt(e,t,n);break;case 1:if(!ce&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,gt(e,t,n),ce=r):gt(e,t,n);break;default:gt(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cm),t.forEach(function(r){var o=Rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Ve=!1;break e;case 3:ie=a.stateNode.containerInfo,Ve=!0;break e;case 4:ie=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(ie===null)throw Error(E(160));_d(i,l,o),ie=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){X(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ke(e),r&4){try{dr(3,e,e.return),ui(3,e)}catch(k){X(e,e.return,k)}try{dr(5,e,e.return)}catch(k){X(e,e.return,k)}}break;case 1:Be(t,e),Ke(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Be(t,e),Ke(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var o=e.stateNode;try{gr(o,"")}catch(k){X(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ku(o,i),pl(a,l);var u=pl(a,i);for(l=0;l<s.length;l+=2){var g=s[l],h=s[l+1];g==="style"?ec(o,h):g==="dangerouslySetInnerHTML"?Ju(o,h):g==="children"?gr(o,h):sa(o,g,h,u)}switch(a){case"input":sl(o,i);break;case"textarea":Xu(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?kn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?kn(o,!!i.multiple,i.defaultValue,!0):kn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(k){X(e,e.return,k)}}break;case 6:if(Be(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){X(e,e.return,k)}}break;case 3:if(Be(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(k){X(e,e.return,k)}break;case 4:Be(t,e),Ke(e);break;case 13:Be(t,e),Ke(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ba=Z())),r&4&&lu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||g,Be(t,e),ce=u):Be(t,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(h=P=g;P!==null;){switch(m=P,v=m.child,m.tag){case 0:case 11:case 14:case 15:dr(4,m,m.return);break;case 1:yn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){X(r,n,k)}}break;case 5:yn(m,m.return);break;case 22:if(m.memoizedState!==null){su(h);continue}}v!==null?(v.return=m,P=v):su(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=qu("display",l))}catch(k){X(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(k){X(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Be(t,e),Ke(e),r&4&&lu(e);break;case 21:break;default:Be(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gr(o,""),r.flags&=-33);var i=iu(e);Vl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=iu(e);Hl(e,a,l);break;default:throw Error(E(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _m(e,t,n){P=e,zd(e)}function zd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||no;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ce;a=no;var u=ce;if(no=l,(ce=s)&&!u)for(P=o;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?uu(o):s!==null?(s.return=l,P=s):uu(o);for(;i!==null;)P=i,zd(i),i=i.sibling;P=o,no=a,ce=u}au(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):au(e)}}function au(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||ui(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&wr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ce||t.flags&512&&Bl(t)}catch(m){X(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function su(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function uu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ui(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){X(t,o,s)}}var i=t.return;try{Bl(t)}catch(s){X(t,i,s)}break;case 5:var l=t.return;try{Bl(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var Pm=Math.ceil,Wo=pt.ReactCurrentDispatcher,Fa=pt.ReactCurrentOwner,Le=pt.ReactCurrentBatchConfig,L=0,oe=null,q=null,le=0,je=0,xn=Ot(0),te=0,Tr=null,tn=0,ci=0,Ua=0,fr=null,ve=null,Ba=0,Dn=1/0,rt=null,Qo=!1,Wl=null,Nt=null,ro=!1,Et=null,Yo=0,pr=0,Ql=null,vo=-1,yo=0;function me(){return L&6?Z():vo!==-1?vo:vo=Z()}function $t(e){return e.mode&1?L&2&&le!==0?le&-le:cm.transition!==null?(yo===0&&(yo=fc()),yo):(e=M,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function Ye(e,t,n,r){if(50<pr)throw pr=0,Ql=null,Error(E(185));Rr(e,n,r),(!(L&2)||e!==oe)&&(e===oe&&(!(L&2)&&(ci|=n),te===4&&kt(e,le)),ke(e,r),n===1&&L===0&&!(t.mode&1)&&(Dn=Z()+500,li&&Mt()))}function ke(e,t){var n=e.callbackNode;cp(e,t);var r=No(e,e===oe?le:0);if(r===0)n!==null&&ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ys(n),t===1)e.tag===0?um(cu.bind(null,e)):Ac(cu.bind(null,e)),im(function(){!(L&6)&&Mt()}),n=null;else{switch(pc(r)){case 1:n=pa;break;case 4:n=cc;break;case 16:n=zo;break;case 536870912:n=dc;break;default:n=zo}n=Od(n,Nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nd(e,t){if(vo=-1,yo=0,L&6)throw Error(E(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var r=No(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var o=L;L|=2;var i=Td();(oe!==e||le!==t)&&(rt=null,Dn=Z()+500,Kt(e,t));do try{$m();break}catch(a){$d(e,a)}while(!0);_a(),Wo.current=i,L=o,q!==null?t=0:(oe=null,le=0,t=te)}if(t!==0){if(t===2&&(o=yl(e),o!==0&&(r=o,t=Yl(e,o))),t===1)throw n=Tr,Kt(e,0),kt(e,r),ke(e,Z()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!zm(o)&&(t=bo(e,r),t===2&&(i=yl(e),i!==0&&(r=i,t=Yl(e,i))),t===1))throw n=Tr,Kt(e,0),kt(e,r),ke(e,Z()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Wt(e,ve,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ba+500-Z(),10<t)){if(No(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_l(Wt.bind(null,e,ve,rt),t);break}Wt(e,ve,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pm(r/1960))-r,10<r){e.timeoutHandle=_l(Wt.bind(null,e,ve,rt),r);break}Wt(e,ve,rt);break;case 5:Wt(e,ve,rt);break;default:throw Error(E(329))}}}return ke(e,Z()),e.callbackNode===n?Nd.bind(null,e):null}function Yl(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=bo(e,t),e!==2&&(t=ve,ve=n,t!==null&&bl(t)),e}function bl(e){ve===null?ve=e:ve.push.apply(ve,e)}function zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Ua,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if(L&6)throw Error(E(327));_n();var t=No(e,0);if(!(t&1))return ke(e,Z()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=yl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=Tr,Kt(e,0),kt(e,t),ke(e,Z()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ve,rt),ke(e,Z()),null}function Ha(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Dn=Z()+500,li&&Mt())}}function nn(e){Et!==null&&Et.tag===0&&!(L&6)&&_n();var t=L;L|=1;var n=Le.transition,r=M;try{if(Le.transition=null,M=1,e)return e()}finally{M=r,Le.transition=n,L=t,!(L&6)&&Mt()}}function Va(){je=xn.current,Q(xn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,om(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Tn(),Q(xe),Q(fe),Ia();break;case 5:Ta(r);break;case 4:Tn();break;case 13:Q(b);break;case 19:Q(b);break;case 10:Pa(r.type._context);break;case 22:case 23:Va()}n=n.return}if(oe=e,q=e=Tt(e.current,null),le=je=t,te=0,Tr=null,Ua=ci=tn=0,ve=fr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Yt=null}return e}function $d(e,t){do{var n=q;try{if(_a(),mo.current=Vo,Ho){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ho=!1}if(en=0,ne=ee=G=null,cr=!1,zr=0,Fa.current=null,n===null||n.return===null){te=1,Tr=t,q=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=le,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=a,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Zs(l);if(v!==null){v.flags&=-257,Js(v,l,a,i,t),v.mode&1&&Xs(i,u,t),t=v,s=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){Xs(i,u,t),Wa();break e}s=Error(E(426))}}else if(Y&&a.mode&1){var $=Zs(l);if($!==null){!($.flags&65536)&&($.flags|=256),Js($,l,a,i,t),Ca(In(s,a));break e}}i=s=In(s,a),te!==4&&(te=2),fr===null?fr=[i]:fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=pd(i,s,t);Ws(i,d);break e;case 1:a=s;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Nt===null||!Nt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=md(i,a,t);Ws(i,x);break e}}i=i.return}while(i!==null)}Dd(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Td(){var e=Wo.current;return Wo.current=Vo,e===null?Vo:e}function Wa(){(te===0||te===3||te===2)&&(te=4),oe===null||!(tn&268435455)&&!(ci&268435455)||kt(oe,le)}function bo(e,t){var n=L;L|=2;var r=Td();(oe!==e||le!==t)&&(rt=null,Kt(e,t));do try{Nm();break}catch(o){$d(e,o)}while(!0);if(_a(),L=n,Wo.current=r,q!==null)throw Error(E(261));return oe=null,le=0,te}function Nm(){for(;q!==null;)Id(q)}function $m(){for(;q!==null&&!tp();)Id(q)}function Id(e){var t=Ld(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Dd(e):q=t,Fa.current=null}function Dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Em(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Sm(n,t,je),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Wt(e,t,n){var r=M,o=Le.transition;try{Le.transition=null,M=1,Tm(e,t,n,r)}finally{Le.transition=o,M=r}return null}function Tm(e,t,n,r){do _n();while(Et!==null);if(L&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dp(e,i),e===oe&&(q=oe=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Od(zo,function(){return _n(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Le.transition,Le.transition=null;var l=M;M=1;var a=L;L|=4,Fa.current=null,jm(e,n),Pd(n,e),Zp(Cl),$o=!!El,Cl=El=null,e.current=n,_m(n),np(),L=a,M=l,Le.transition=i}else e.current=n;if(ro&&(ro=!1,Et=e,Yo=o),i=e.pendingLanes,i===0&&(Nt=null),ip(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=Wl,Wl=null,e;return Yo&1&&e.tag!==0&&_n(),i=e.pendingLanes,i&1?e===Ql?pr++:(pr=0,Ql=e):pr=0,Mt(),null}function _n(){if(Et!==null){var e=pc(Yo),t=Le.transition,n=M;try{if(Le.transition=null,M=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,Yo=0,L&6)throw Error(E(331));var o=L;for(L|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(P=u;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:dr(8,g,i)}var h=g.child;if(h!==null)h.return=g,P=h;else for(;P!==null;){g=P;var m=g.sibling,v=g.return;if(Cd(g),g===u){P=null;break}if(m!==null){m.return=v,P=m;break}P=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var $=k.sibling;k.sibling=null,k=$}while(k!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:dr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var c=e.current;for(P=c;P!==null;){l=P;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,P=f;else e:for(l=c;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ui(9,a)}}catch(j){X(a,a.return,j)}if(a===l){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}if(L=o,Mt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ti,e)}catch{}r=!0}return r}finally{M=n,Le.transition=t}}return!1}function du(e,t,n){t=In(n,t),t=pd(e,t,1),e=zt(e,t,1),t=me(),e!==null&&(Rr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)du(e,e,n);else for(;t!==null;){if(t.tag===3){du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=In(n,e),e=md(t,e,1),t=zt(t,e,1),e=me(),t!==null&&(Rr(t,1,e),ke(t,e));break}}t=t.return}}function Im(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>Z()-Ba?Kt(e,0):Ua|=n),ke(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=me();e=dt(e,t),e!==null&&(Rr(e,t,n),ke(e,n))}function Dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Rd(e,n)}var Ld;Ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,km(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Y&&t.flags&1048576&&Fc(t,Mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=zn(t,fe.current);jn(t,n),o=Ra(null,t,r,e,o,n);var i=La();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(i=!0,Lo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Na(t),o.updater=si,t.stateNode=o,o._reactInternals=t,Dl(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Sa(t),pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Om(r),e=He(r,e),o){case 0:t=Ll(null,t,r,e,n);break e;case 1:t=tu(null,t,r,e,n);break e;case 11:t=qs(null,t,r,e,n);break e;case 14:t=eu(null,t,r,He(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ll(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),tu(e,t,r,o,n);case 3:e:{if(yd(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Qc(e,t),Uo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=In(Error(E(423)),t),t=nu(e,t,r,n,o);break e}else if(r!==o){o=In(Error(E(424)),t),t=nu(e,t,r,n,o);break e}else for(_e=Pt(t.stateNode.containerInfo.firstChild),Pe=t,Y=!0,We=null,n=Vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===o){t=ft(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&$l(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,jl(r,o)?l=null:i!==null&&jl(r,i)&&(t.flags|=32),vd(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&$l(t),null;case 13:return xd(e,t,n);case 4:return $a(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),qs(e,t,r,o,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Ao,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!xe.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=st(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Tl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Tl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Me(o),r=r(o),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),eu(e,t,r,o,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),go(e,t),t.tag=1,we(r)?(e=!0,Lo(t)):e=!1,jn(t,n),fd(t,r,o),Dl(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return wd(e,t,n);case 22:return gd(e,t,n)}throw Error(E(156,t.tag))};function Od(e,t){return uc(e,t)}function Lm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Lm(e,t,n,r)}function Qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Om(e){if(typeof e=="function")return Qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Xt(n.children,o,i,t);case ua:l=8,o|=8;break;case rl:return e=Re(12,n,t,o|2),e.elementType=rl,e.lanes=i,e;case ol:return e=Re(13,n,t,o),e.elementType=ol,e.lanes=i,e;case il:return e=Re(19,n,t,o),e.elementType=il,e.lanes=i,e;case Yu:return di(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:l=10;break e;case Qu:l=9;break e;case ca:l=11;break e;case da:l=14;break e;case yt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Re(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Xt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function di(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function Gi(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,r,o,i,l,a,s){return e=new Mm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(i),e}function Am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Md(e){if(!e)return Rt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(we(n))return Mc(e,n,t)}return t}function Ad(e,t,n,r,o,i,l,a,s){return e=Ya(n,r,!0,e,o,i,l,a,s),e.context=Md(null),n=e.current,r=me(),o=$t(n),i=st(r,o),i.callback=t??null,zt(n,i,o),e.current.lanes=o,Rr(e,o,r),ke(e,r),e}function fi(e,t,n,r){var o=t.current,i=me(),l=$t(o);return n=Md(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(o,t,l),e!==null&&(Ye(e,o,l,i),po(e,o,l)),l}function Go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ba(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}function Fm(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}pi.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));fi(e,t,null,null)};pi.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){fi(null,e,null,null)}),t[ct]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&yc(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pu(){}function Um(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Go(l);i.call(u)}}var l=Ad(t,r,e,0,null,!1,!1,"",pu);return e._reactRootContainer=l,e[ct]=l.current,Er(e.nodeType===8?e.parentNode:e),nn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Go(s);a.call(u)}}var s=Ya(e,0,!1,null,null,!1,!1,"",pu);return e._reactRootContainer=s,e[ct]=s.current,Er(e.nodeType===8?e.parentNode:e),nn(function(){fi(t,s,n,r)}),s}function hi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Go(l);a.call(s)}}fi(t,l,e,o)}else l=Um(n,t,e,o,r);return Go(l)}mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(ma(t,n|1),ke(t,Z()),!(L&6)&&(Dn=Z()+500,Mt()))}break;case 13:nn(function(){var r=dt(e,1);if(r!==null){var o=me();Ye(r,e,1,o)}}),ba(e,1)}};ha=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=me();Ye(t,e,134217728,n)}ba(e,134217728)}};hc=function(e){if(e.tag===13){var t=$t(e),n=dt(e,t);if(n!==null){var r=me();Ye(n,e,t,r)}ba(e,t)}};gc=function(){return M};vc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};hl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ii(r);if(!o)throw Error(E(90));Gu(r),sl(r,o)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};rc=Ha;oc=nn;var Bm={usingClientEntryPoint:!1,Events:[Or,pn,ii,tc,nc,Ha]},qn={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hm={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||Fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{ti=oo.inject(Hm),et=oo}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(E(200));return Am(e,t,null,n)};Ne.createRoot=function(e,t){if(!Ka(e))throw Error(E(299));var n=!1,r="",o=Fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,Er(e.nodeType===8?e.parentNode:e),new Ga(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return nn(e)};Ne.hydrate=function(e,t,n){if(!mi(t))throw Error(E(200));return hi(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Fd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ad(t,null,e,1,n??null,o,!1,i,l),e[ct]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new pi(t)};Ne.render=function(e,t,n){if(!mi(t))throw Error(E(200));return hi(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!mi(e))throw Error(E(40));return e._reactRootContainer?(nn(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ha;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return hi(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)}catch(e){console.error(e)}}Ud(),Uu.exports=Ne;var Bd=Uu.exports,mu=Bd;tl.createRoot=mu.createRoot,tl.hydrateRoot=mu.hydrateRoot;var de=function(){return de=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},de.apply(this,arguments)};function Rn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var V="-ms-",mr="-moz-",O="-webkit-",Hd="comm",gi="rule",Xa="decl",Vm="@import",Vd="@keyframes",Wm="@layer",Wd=Math.abs,Za=String.fromCharCode,Gl=Object.assign;function Qm(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function Qd(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function wo(e,t,n){return e.indexOf(t,n)}function re(e,t){return e.charCodeAt(t)|0}function Ln(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Yd(e){return e.length}function or(e,t){return t.push(e),e}function Ym(e,t){return e.map(t).join("")}function hu(e,t){return e.filter(function(n){return!ot(n,t)})}var vi=1,On=1,bd=0,Fe=0,J=0,Vn="";function yi(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:vi,column:On,length:l,return:"",siblings:a}}function vt(e,t){return Gl(yi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function an(e){for(;e.root;)e=vt(e.root,{children:[e]});or(e,e.siblings)}function bm(){return J}function Gm(){return J=Fe>0?re(Vn,--Fe):0,On--,J===10&&(On=1,vi--),J}function be(){return J=Fe<bd?re(Vn,Fe++):0,On++,J===10&&(On=1,vi++),J}function Zt(){return re(Vn,Fe)}function ko(){return Fe}function xi(e,t){return Ln(Vn,e,t)}function Kl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Km(e){return vi=On=1,bd=Je(Vn=e),Fe=0,[]}function Xm(e){return Vn="",e}function Xi(e){return Qd(xi(Fe-1,Xl(e===91?e+2:e===40?e+1:e)))}function Zm(e){for(;(J=Zt())&&J<33;)be();return Kl(e)>2||Kl(J)>3?"":" "}function Jm(e,t){for(;--t&&be()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return xi(e,ko()+(t<6&&Zt()==32&&be()==32))}function Xl(e){for(;be();)switch(J){case e:return Fe;case 34:case 39:e!==34&&e!==39&&Xl(J);break;case 40:e===41&&Xl(e);break;case 92:be();break}return Fe}function qm(e,t){for(;be()&&e+J!==57;)if(e+J===84&&Zt()===47)break;return"/*"+xi(t,Fe-1)+"*"+Za(e===47?e:be())}function eh(e){for(;!Kl(Zt());)be();return xi(e,Fe)}function th(e){return Xm(So("",null,null,null,[""],e=Km(e),0,[0],e))}function So(e,t,n,r,o,i,l,a,s){for(var u=0,g=0,h=l,m=0,v=0,w=0,k=1,$=1,d=1,c=0,f="",x=o,j=i,C=r,S=f;$;)switch(w=c,c=be()){case 40:if(w!=108&&re(S,h-1)==58){wo(S+=I(Xi(c),"&","&\f"),"&\f",Wd(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=Xi(c);break;case 9:case 10:case 13:case 32:S+=Zm(w);break;case 92:S+=Jm(ko()-1,7);continue;case 47:switch(Zt()){case 42:case 47:or(nh(qm(be(),ko()),t,n,s),s);break;default:S+="/"}break;case 123*k:a[u++]=Je(S)*d;case 125*k:case 59:case 0:switch(c){case 0:case 125:$=0;case 59+g:d==-1&&(S=I(S,/\f/g,"")),v>0&&Je(S)-h&&or(v>32?vu(S+";",r,n,h-1,s):vu(I(S," ","")+";",r,n,h-2,s),s);break;case 59:S+=";";default:if(or(C=gu(S,t,n,u,g,o,a,f,x=[],j=[],h,i),i),c===123)if(g===0)So(S,t,C,C,x,i,h,a,j);else switch(m===99&&re(S,3)===110?100:m){case 100:case 108:case 109:case 115:So(e,C,C,r&&or(gu(e,C,C,0,0,o,a,f,o,x=[],h,j),j),o,j,h,a,r?x:j);break;default:So(S,C,C,C,[""],j,0,a,j)}}u=g=v=0,k=d=1,f=S="",h=l;break;case 58:h=1+Je(S),v=w;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&Gm()==125)continue}switch(S+=Za(c),c*k){case 38:d=g>0?1:(S+="\f",-1);break;case 44:a[u++]=(Je(S)-1)*d,d=1;break;case 64:Zt()===45&&(S+=Xi(be())),m=Zt(),g=h=Je(f=S+=eh(ko())),c++;break;case 45:w===45&&Je(S)==2&&(k=0)}}return i}function gu(e,t,n,r,o,i,l,a,s,u,g,h){for(var m=o-1,v=o===0?i:[""],w=Yd(v),k=0,$=0,d=0;k<r;++k)for(var c=0,f=Ln(e,m+1,m=Wd($=l[k])),x=e;c<w;++c)(x=Qd($>0?v[c]+" "+f:I(f,/&\f/g,v[c])))&&(s[d++]=x);return yi(e,t,n,o===0?gi:a,s,u,g,h)}function nh(e,t,n,r){return yi(e,t,n,Hd,Za(bm()),Ln(e,2,-2),0,r)}function vu(e,t,n,r,o){return yi(e,t,n,Xa,Ln(e,0,r),Ln(e,r+1,-1),r,o)}function Gd(e,t,n){switch(Qm(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return mr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+mr+e+V+e+e;case 5936:switch(re(e,t+11)){case 114:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+V+e+e;case 6165:return O+e+V+"flex-"+e+e;case 5187:return O+e+I(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return O+e+V+"flex-item-"+I(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":V+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return O+e+V+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+V+I(e,"shrink","negative")+e;case 5292:return O+e+V+I(e,"basis","preferred-size")+e;case 6060:return O+"box-"+I(e,"-grow","")+O+e+V+I(e,"grow","positive")+e;case 4554:return O+I(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!ot(e,/flex-|baseline/))return V+"grid-column-align"+Ln(e,t)+e;break;case 2592:case 3360:return V+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ot(r.props,/grid-\w+-end/)})?~wo(e+(n=n[t].value),"span",0)?e:V+I(e,"-start","")+e+V+"grid-row-span:"+(~wo(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":V+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:V+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+mr+(re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wo(e,"stretch",0)?Gd(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return V+o+":"+i+u+(l?V+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(re(e,t+6)===121)return I(e,":",":"+O)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(re(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+V+"$2box$3")+e;case 100:return I(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ko(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function rh(e,t,n,r){switch(e.type){case Wm:if(e.children.length)break;case Vm:case Xa:return e.return=e.return||e.value;case Hd:return"";case Vd:return e.return=e.value+"{"+Ko(e.children,r)+"}";case gi:if(!Je(e.value=e.props.join(",")))return""}return Je(n=Ko(e.children,r))?e.return=e.value+"{"+n+"}":""}function oh(e){var t=Yd(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function ih(e){return function(t){t.root||(t=t.return)&&e(t)}}function lh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Xa:e.return=Gd(e.value,e.length,n);return;case Vd:return Ko([vt(e,{value:I(e.value,"@","@"+O)})],r);case gi:if(e.length)return Ym(n=e.props,function(o){switch(ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(vt(e,{props:[I(o,/:(read-\w+)/,":"+mr+"$1")]})),an(vt(e,{props:[o]})),Gl(e,{props:hu(n,r)});break;case"::placeholder":an(vt(e,{props:[I(o,/:(plac\w+)/,":"+O+"input-$1")]})),an(vt(e,{props:[I(o,/:(plac\w+)/,":"+mr+"$1")]})),an(vt(e,{props:[I(o,/:(plac\w+)/,V+"input-$1")]})),an(vt(e,{props:[o]})),Gl(e,{props:hu(n,r)});break}return""})}}var ah={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Mn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Kd="active",Xd="data-styled-version",wi="6.1.18",Ja=`/*!sc*/
`,Xo=typeof window<"u"&&typeof document<"u",sh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),uh={},ki=Object.freeze([]),An=Object.freeze({});function Zd(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme}var Jd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ch=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dh=/(^-|-$)/g;function yu(e){return e.replace(ch,"-").replace(dh,"")}var fh=/(a)(d)/gi,io=52,xu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Zl(e){var t,n="";for(t=Math.abs(e);t>io;t=t/io|0)n=xu(t%io)+n;return(xu(t%io)+n).replace(fh,"$1-$2")}var Zi,qd=5381,wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ef=function(e){return wn(qd,e)};function qa(e){return Zl(ef(e)>>>0)}function ph(e){return e.displayName||e.name||"Component"}function Ji(e){return typeof e=="string"&&!0}var tf=typeof Symbol=="function"&&Symbol.for,nf=tf?Symbol.for("react.memo"):60115,mh=tf?Symbol.for("react.forward_ref"):60112,hh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vh=((Zi={})[mh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zi[nf]=rf,Zi);function wu(e){return("type"in(t=e)&&t.type.$$typeof)===nf?rf:"$$typeof"in e?vh[e.$$typeof]:hh;var t}var yh=Object.defineProperty,xh=Object.getOwnPropertyNames,ku=Object.getOwnPropertySymbols,wh=Object.getOwnPropertyDescriptor,kh=Object.getPrototypeOf,Su=Object.prototype;function of(e,t,n){if(typeof t!="string"){if(Su){var r=kh(t);r&&r!==Su&&of(e,r,n)}var o=xh(t);ku&&(o=o.concat(ku(t)));for(var i=wu(e),l=wu(t),a=0;a<o.length;++a){var s=o[a];if(!(s in gh||n&&n[s]||l&&s in l||i&&s in i)){var u=wh(t,s);try{yh(e,s,u)}catch{}}}}return e}function Fn(e){return typeof e=="function"}function es(e){return typeof e=="object"&&"styledComponentId"in e}function Gt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ir(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jl(e,t,n){if(n===void 0&&(n=!1),!n&&!Ir(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Jl(e[r],t[r]);else if(Ir(t))for(var r in t)e[r]=Jl(e[r],t[r]);return e}function ts(e,t){Object.defineProperty(e,"toString",{value:t})}function Ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Ar(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Ja);return n},e}(),Eo=new Map,Jo=new Map,Co=1,lo=function(e){if(Eo.has(e))return Eo.get(e);for(;Jo.has(Co);)Co++;var t=Co++;return Eo.set(e,t),Jo.set(t,e),t},Eh=function(e,t){Co=t+1,Eo.set(e,t),Jo.set(t,e)},Ch="style[".concat(Mn,"][").concat(Xd,'="').concat(wi,'"]'),jh=new RegExp("^".concat(Mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_h=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ph=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ja),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(jh);if(s){var u=0|parseInt(s[1],10),g=s[2];u!==0&&(Eh(g,u),_h(e,g,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Eu=function(e){for(var t=document.querySelectorAll(Ch),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Mn)!==Kd&&(Ph(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function zh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Mn,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Mn,Kd),r.setAttribute(Xd,wi);var l=zh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Nh=function(){function e(t){this.element=lf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Ar(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$h=function(){function e(t){this.element=lf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Th=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cu=Xo,Ih={isServer:!Xo,useCSSOMInjection:!sh},qo=function(){function e(t,n,r){t===void 0&&(t=An),n===void 0&&(n={});var o=this;this.options=de(de({},Ih),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xo&&Cu&&(Cu=!1,Eu(this)),ts(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(h){var m=function(d){return Jo.get(d)}(h);if(m===void 0)return"continue";var v=i.names.get(m),w=l.getGroup(h);if(v===void 0||!v.size||w.length===0)return"continue";var k="".concat(Mn,".g").concat(h,'[id="').concat(m,'"]'),$="";v!==void 0&&v.forEach(function(d){d.length>0&&($+="".concat(d,","))}),s+="".concat(w).concat(k,'{content:"').concat($,'"}').concat(Ja)},g=0;g<a;g++)u(g);return s}(o)})}return e.registerId=function(t){return lo(t)},e.prototype.rehydrate=function(){!this.server&&Xo&&Eu(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(de(de({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Th(o):r?new Nh(o):new $h(o)}(this.options),new Sh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(lo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(lo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(lo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Dh=/&/g,Rh=/^\s*\/\/.*$/gm;function af(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=af(n.children,t)),n})}function Lh(e){var t,n,r,o=An,i=o.options,l=i===void 0?An:i,a=o.plugins,s=a===void 0?ki:a,u=function(m,v,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},g=s.slice();g.push(function(m){m.type===gi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Dh,n).replace(r,u))}),l.prefix&&g.push(lh),g.push(rh);var h=function(m,v,w,k){v===void 0&&(v=""),w===void 0&&(w=""),k===void 0&&(k="&"),t=k,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var $=m.replace(Rh,""),d=th(w||v?"".concat(w," ").concat(v," { ").concat($," }"):$);l.namespace&&(d=af(d,l.namespace));var c=[];return Ko(d,oh(g.concat(ih(function(f){return c.push(f)})))),c};return h.hash=s.length?s.reduce(function(m,v){return v.name||Ar(15),wn(m,v.name)},qd).toString():"",h}var Oh=new qo,ql=Lh(),sf=De.createContext({shouldForwardProp:void 0,styleSheet:Oh,stylis:ql});sf.Consumer;De.createContext(void 0);function ea(){return W.useContext(sf)}var uf=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ql);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ts(this,function(){throw Ar(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ql),this.name+t.hash},e}(),Mh=function(e){return e>="A"&&e<="Z"};function ju(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Mh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var cf=function(e){return e==null||e===!1||e===""},df=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!cf(i)&&(Array.isArray(i)&&i.isCss||Fn(i)?r.push("".concat(ju(o),":"),i,";"):Ir(i)?r.push.apply(r,Rn(Rn(["".concat(o," {")],df(i),!1),["}"],!1)):r.push("".concat(ju(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ah||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function It(e,t,n,r){if(cf(e))return[];if(es(e))return[".".concat(e.styledComponentId)];if(Fn(e)){if(!Fn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return It(o,t,n,r)}var i;return e instanceof uf?n?(e.inject(n,r),[e.getName(r)]):[e]:Ir(e)?df(e):Array.isArray(e)?Array.prototype.concat.apply(ki,e.map(function(l){return It(l,t,n,r)})):[e.toString()]}function ff(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fn(n)&&!es(n))return!1}return!0}var Ah=ef(wi),Fh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ff(t),this.componentId=n,this.baseHash=wn(Ah,n),this.baseStyle=r,qo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Gt(o,this.staticRulesId);else{var i=Zo(It(this.rules,t,n,r)),l=Zl(wn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=Gt(o,l),this.staticRulesId=l}else{for(var s=wn(this.baseHash,r.hash),u="",g=0;g<this.rules.length;g++){var h=this.rules[g];if(typeof h=="string")u+=h;else if(h){var m=Zo(It(h,t,n,r));s=wn(s,m+g),u+=m}}if(u){var v=Zl(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=Gt(o,v)}}return o},e}(),ns=De.createContext(void 0);ns.Consumer;var qi={};function Uh(e,t,n){var r=es(e),o=e,i=!Ji(e),l=t.attrs,a=l===void 0?ki:l,s=t.componentId,u=s===void 0?function(x,j){var C=typeof x!="string"?"sc":yu(x);qi[C]=(qi[C]||0)+1;var S="".concat(C,"-").concat(qa(wi+C+qi[C]));return j?"".concat(j,"-").concat(S):S}(t.displayName,t.parentComponentId):s,g=t.displayName,h=g===void 0?function(x){return Ji(x)?"styled.".concat(x):"Styled(".concat(ph(x),")")}(e):g,m=t.displayName&&t.componentId?"".concat(yu(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;w=function(x,j){return k(x,j)&&$(x,j)}}else w=k}var d=new Fh(n,m,r?o.componentStyle:void 0);function c(x,j){return function(C,S,z){var U=C.attrs,D=C.componentStyle,Se=C.defaultProps,At=C.foldedComponentIds,Ft=C.styledComponentId,Ur=C.target,Si=De.useContext(ns),Wn=ea(),Ut=C.shouldForwardProp||Wn.shouldForwardProp,_=Zd(S,Si,Se)||An,N=function(mt,Ee,nt){for(var Qn,Ht=de(de({},Ee),{className:void 0,theme:nt}),Ei=0;Ei<mt.length;Ei+=1){var Br=Fn(Qn=mt[Ei])?Qn(Ht):Qn;for(var ht in Br)Ht[ht]=ht==="className"?Gt(Ht[ht],Br[ht]):ht==="style"?de(de({},Ht[ht]),Br[ht]):Br[ht]}return Ee.className&&(Ht.className=Gt(Ht.className,Ee.className)),Ht}(U,S,_),T=N.as||Ur,A={};for(var F in N)N[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&N.theme===_||(F==="forwardedAs"?A.as=N.forwardedAs:Ut&&!Ut(F,T)||(A[F]=N[F]));var Bt=function(mt,Ee){var nt=ea(),Qn=mt.generateAndInjectStyles(Ee,nt.styleSheet,nt.stylis);return Qn}(D,N),Ue=Gt(At,Ft);return Bt&&(Ue+=" "+Bt),N.className&&(Ue+=" "+N.className),A[Ji(T)&&!Jd.has(T)?"class":"className"]=Ue,z&&(A.ref=z),W.createElement(T,A)}(f,x,j)}c.displayName=h;var f=De.forwardRef(c);return f.attrs=v,f.componentStyle=d,f.displayName=h,f.shouldForwardProp=w,f.foldedComponentIds=r?Gt(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=m,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(j){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var z=0,U=C;z<U.length;z++)Jl(j,U[z],!0);return j}({},o.defaultProps,x):x}}),ts(f,function(){return".".concat(f.styledComponentId)}),i&&of(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function _u(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Pu=function(e){return Object.assign(e,{isCss:!0})};function rs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Fn(e)||Ir(e))return Pu(It(_u(ki,Rn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?It(r):Pu(It(_u(r,t)))}function ta(e,t,n){if(n===void 0&&(n=An),!t)throw Ar(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,rs.apply(void 0,Rn([o],i,!1)))};return r.attrs=function(o){return ta(e,t,de(de({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ta(e,t,de(de({},n),o))},r}var pf=function(e){return ta(Uh,e)},y=pf;Jd.forEach(function(e){y[e]=pf(e)});var Bh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ff(t),qo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Zo(It(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&qo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Hh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=rs.apply(void 0,Rn([e],t,!1)),o="sc-global-".concat(qa(JSON.stringify(r))),i=new Bh(r,o),l=function(s){var u=ea(),g=De.useContext(ns),h=De.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(h,s,u.styleSheet,g,u.stylis),De.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,s,u.styleSheet,g,u.stylis),function(){return i.removeStyles(h,u.styleSheet)}},[h,s,u.styleSheet,g,u.stylis]),null};function a(s,u,g,h,m){if(i.isStatic)i.renderStyles(s,uh,g,m);else{var v=de(de({},u),{theme:Zd(u,h,l.defaultProps)});i.renderStyles(s,v,g,m)}}return De.memo(l)}function os(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zo(rs.apply(void 0,Rn([e],t,!1))),o=qa(r);return new uf(o,r)}const Vh=W.createContext(),Wh=({children:e})=>(W.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark")},[]),p.jsx(Vh.Provider,{value:{isDark:!0},children:e})),Qh=Hh`
  :root {
    /* Core Colors */
    --background: #2b2a33;
    --background-alt: #2f2e36;
    --background-elevated: #34333b;
    
    /* Typography */
    --text-primary: #f5f2eb;
    --text-secondary: #aaa6b2;
    --text-tertiary: rgba(170, 166, 178, 0.8);
    
    /* Accent Colors */
    --accent-primary: #ffe680;
    --accent-secondary: #ff9b9b;
    --accent-primary-hover: #fff0b3;
    --accent-secondary-hover: #ffb3b3;
    
    /* UI Elements */
    --card-bg: #363540;
    --card-border: rgba(255, 255, 255, 0.1);
    --card-hover: #3d3c48;
    
    /* Shadows & Effects */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.3);
    --glow-primary: 0 0 20px rgba(255, 230, 128, 0.15);
    --glow-secondary: 0 0 20px rgba(255, 155, 155, 0.15);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Spacing */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all var(--transition-normal);
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    line-height: 1.7;
    color: var(--text-primary);
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: var(--space-lg);
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
    line-height: 1.7;
  }

  a {
    color: var(--accent-primary);
    text-decoration: none;
    transition: all var(--transition-fast);
    
    &:hover {
      color: var(--accent-primary-hover);
    }
  }

  /* Section Styling */
  section {
    padding: var(--space-3xl) 0;
    
    &:nth-child(even) {
      background-color: var(--background-alt);
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
  }

  /* Button Base Styles */
  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-weight: 500;
    transition: all var(--transition-fast);

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  /* Card Base Styles */
  .card {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: var(--space-xl);
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-sm);

    &:hover {
      background-color: var(--card-hover);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0% { box-shadow: var(--glow-primary); }
    50% { box-shadow: var(--glow-secondary); }
    100% { box-shadow: var(--glow-primary); }
  }

  /* Media Queries */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    section {
      padding: var(--space-2xl) 0;
    }

    .container {
      padding: 0 var(--space-md);
    }
  }
`,Yh=os`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,bh=y.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text-secondary);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(270deg, #ffe680, #ff9b9b, #b8f2e6, #ffe680);
    background-size: 300% 100%;
    animation: ${Yh} 3s linear infinite;
    border-color: transparent;
    color: var(--background);
    
    /* Add a glow effect */
    box-shadow: 0 4px 15px rgba(255, 230, 128, 0.2);
  }

  /* Ensure text remains readable on all gradient colors */
  mix-blend-mode: difference;
`,Oe=({href:e,children:t,...n})=>p.jsx(bh,{href:e,...n,children:t}),Gh=y.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(43, 42, 51, 0.95);
  backdrop-filter: blur(8px);
  transition: all var(--transition-normal);
  border-bottom: 1px solid var(--card-border);
  padding: var(--space-md) 0;
  box-shadow: ${e=>e.isScrolled?"var(--shadow-md)":"none"};
  transform: translateY(${e=>e.isHidden?"-100%":"0"});
  opacity: ${e=>e.isHidden?"0":"1"};
`,Kh=y.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xh=y(Oe)`
  font-size: 1.5rem;
  font-weight: bold;
  padding: var(--space-xs);
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`,Zh=y.div`
  display: flex;
  gap: var(--space-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Jh=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  padding: var(--space-3xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  transform: translateX(${e=>e.isOpen?"0":"100%"});
  transition: transform var(--transition-normal);
  z-index: 900;
`,Xe=y(Oe)`
  padding: var(--space-xs) var(--space-sm);
  font-size: 0.9rem;
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`,qh=y.button`
  display: none;
  background: none;
  border: none;
  padding: var(--space-sm);
  color: var(--text-primary);
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text-primary);
    transition: all var(--transition-normal);
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: var(--text-primary);
      transition: all var(--transition-normal);
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }
  }

  ${e=>e.isOpen&&`
    span {
      background-color: transparent;

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  `}
`,eg=()=>{const[e,t]=W.useState(!1),[n,r]=W.useState(!1),[o,i]=W.useState(!1);W.useEffect(()=>{const a=()=>{t(window.scrollY>20),r(window.scrollY>60)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const l=a=>{const s=document.getElementById(a);s&&(s.scrollIntoView({behavior:"smooth"}),i(!1))};return p.jsxs(Gh,{isScrolled:e,isHidden:n,children:[p.jsxs(Kh,{children:[p.jsx(Xh,{href:"#",onClick:a=>{a.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"AV"}),p.jsxs(Zh,{children:[p.jsx(Xe,{href:"#about",onClick:a=>{a.preventDefault(),l("about")},children:"About"}),p.jsx(Xe,{href:"#projects",onClick:a=>{a.preventDefault(),l("projects")},children:"Projects"}),p.jsx(Xe,{href:"#resume",onClick:a=>{a.preventDefault(),l("resume")},children:"Resume"}),p.jsx(Xe,{href:"#writing",onClick:a=>{a.preventDefault(),l("writing")},children:"Research & Writing"}),p.jsx(Xe,{href:"#contact",onClick:a=>{a.preventDefault(),l("contact")},children:"Contact"})]}),p.jsx(qh,{onClick:()=>i(!o),isOpen:o,"aria-label":"Toggle menu",children:p.jsx("span",{})})]}),p.jsxs(Jh,{isOpen:o,children:[p.jsx(Xe,{href:"#about",onClick:a=>{a.preventDefault(),l("about")},children:"About"}),p.jsx(Xe,{href:"#projects",onClick:a=>{a.preventDefault(),l("projects")},children:"Projects"}),p.jsx(Xe,{href:"#resume",onClick:a=>{a.preventDefault(),l("resume")},children:"Resume"}),p.jsx(Xe,{href:"#writing",onClick:a=>{a.preventDefault(),l("writing")},children:"Research & Writing"}),p.jsx(Xe,{href:"#contact",onClick:a=>{a.preventDefault(),l("contact")},children:"Contact"})]})]})},tg=y.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--background);
  overflow: hidden;
  padding: var(--space-3xl) var(--space-lg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, var(--accent-secondary) 0%, transparent 70%);
    opacity: 0.05;
    animation: pulse 8s ease-in-out infinite;
  }
`,ng=y.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,rg=y.div`
  margin-bottom: var(--space-2xl);
  position: relative;
  display: inline-block;
`,og=y.div`
  width: 200px;
  height: 200px;
  border-radius: var(--radius-full);
  padding: 5px;
  position: relative;
  margin: 0 auto;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-full);
    background: linear-gradient(
      45deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    opacity: 0.5;
    z-index: -1;
    transition: opacity var(--transition-normal);
  }

  &:hover::before {
    opacity: 0.8;
  }
`,ig=y.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 4px solid var(--background);
  background-color: var(--background);
`,lg=y.div`
  max-width: 800px;
  margin: 0 auto;
`,ag=y.h1`
  margin-bottom: var(--space-lg);
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-primary) 50%,
    var(--accent-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease-out;
`,sg=y.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  animation: fadeIn 1s ease-out 0.2s backwards;
`,ug=y.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  animation: fadeIn 1s ease-out 0.4s backwards;
`,cg=()=>p.jsx(tg,{id:"hero",children:p.jsxs(ng,{children:[p.jsx(rg,{children:p.jsx(og,{children:p.jsx(ig,{src:"assets/images/pfp.png",alt:"Aahad Vakani"})})}),p.jsxs(lg,{children:[p.jsx(ag,{children:"Hi, I'm Aahad Vakani"}),p.jsx(sg,{children:"I'm a passionate software developer focused on building innovative solutions"}),p.jsxs(ug,{children:[p.jsx(Oe,{href:"#projects",onClick:e=>{e.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})},children:"View Projects"}),p.jsx(Oe,{href:"#contact",onClick:e=>{e.preventDefault(),document.getElementById("contact").scrollIntoView({behavior:"smooth"})},children:"Get in Touch"})]})]})]})}),dg=os`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Fr=y.div`
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(270deg, #ffe680, #ff9b9b, #b8f2e6, #ffe680);
    background-size: 300% 100%;
    border-radius: var(--radius-lg);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: transparent;
    box-shadow: var(--shadow-lg);

    &::before {
      opacity: 0.1;
      animation: ${dg} 3s linear infinite;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,fg=y.section`
  background-color: var(--background-alt);
  padding: var(--space-3xl) 0;
`,pg=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,mg=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,hg=y.div`
  h2 {
    margin-bottom: var(--space-xl);
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-primary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: var(--space-lg);
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
  }
`,gg=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-md);
`,vg=y(Fr)`
  padding: var(--space-lg);
  text-align: center;
`,yg=y.div`
  font-size: 2rem;
  margin-bottom: var(--space-sm);
  color: var(--accent-primary);
`,xg=y.h3`
  font-size: 1rem;
  color: var(--text-primary);
  margin: 0;
`,wg=y.div`
  margin-top: var(--space-xs);
  height: 4px;
  background-color: var(--background);
  border-radius: var(--radius-full);
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${e=>e.level}%;
    background: linear-gradient(
      90deg,
      var(--accent-primary),
      var(--accent-secondary)
    );
    border-radius: var(--radius-full);
  }
`,kg=()=>{const e=[{name:"Python",level:90,icon:"🐍"},{name:"JavaScript",level:85,icon:"⚡"},{name:"React",level:80,icon:"⚛️"},{name:"Machine Learning",level:85,icon:"🤖"},{name:"Data Science",level:80,icon:"📊"},{name:"Node.js",level:75,icon:"🟢"},{name:"SQL",level:80,icon:"🗄️"},{name:"Git",level:85,icon:"📦"}];return p.jsx(fg,{id:"about",children:p.jsx(pg,{children:p.jsxs(mg,{children:[p.jsxs(hg,{children:[p.jsx("h2",{children:"About Me"}),p.jsx("p",{children:"I'm a Computer Science student passionate about artificial intelligence, machine learning, and software development. My journey in tech has been driven by curiosity and a desire to solve complex problems."}),p.jsx("p",{children:"Currently, I'm focused on AI research and developing innovative solutions that can make a positive impact. I love exploring new technologies and contributing to open-source projects."})]}),p.jsxs("div",{children:[p.jsx("h2",{children:"Skills"}),p.jsx(gg,{children:e.map((t,n)=>p.jsxs(vg,{children:[p.jsx(yg,{children:t.icon}),p.jsx(xg,{children:t.name}),p.jsx(wg,{level:t.level})]},n))})]})]})})})},Sg=y.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`,Eg=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Cg=y.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`,jg=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,mf=y(Fr)`
  display: flex;
  flex-direction: column;
`,_g=y.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-normal);
  }

  ${mf}:hover & img {
    transform: scale(1.05);
  }
`,Pg=y.div`
  padding: var(--space-xl);
`,zg=y.h3`
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  font-size: 1.5rem;
`,Ng=y.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`,$g=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
`,Tg=y.span`
  background-color: var(--background);
  color: var(--accent-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--accent-primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`,Ig=y.div`
  display: flex;
  gap: var(--space-md);
`,Dg=()=>{const e=[{title:"Project Management App",description:"A full-stack project management application with real-time updates and team collaboration features.",image:"/assets/projects/project1.jpg",tech:["React","Node.js","MongoDB","Socket.IO"],liveUrl:"#",githubUrl:"#"},{title:"AI Image Generator",description:"An AI-powered image generation tool that creates unique artwork based on text descriptions.",image:"/assets/projects/project2.jpg",tech:["Python","TensorFlow","Flask","AWS"],liveUrl:"#",githubUrl:"#"},{title:"Blockchain Explorer",description:"A web-based blockchain explorer for tracking transactions and analyzing smart contracts.",image:"/assets/projects/project3.jpg",tech:["Solidity","Web3.js","Vue.js","Ethereum"],liveUrl:"#",githubUrl:"#"}];return p.jsx(Sg,{id:"projects",children:p.jsxs(Eg,{children:[p.jsxs(Cg,{children:[p.jsx("h2",{children:"Featured Projects"}),p.jsx("p",{children:"A selection of my recent work in AI, machine learning, and software development. Each project represents a unique challenge and innovative solution."})]}),p.jsx(jg,{children:e.map((t,n)=>p.jsxs(mf,{children:[p.jsx(_g,{children:p.jsx("img",{src:t.image,alt:t.title})}),p.jsxs(Pg,{children:[p.jsx(zg,{children:t.title}),p.jsx(Ng,{children:t.description}),p.jsx($g,{children:t.tech.map((r,o)=>p.jsx(Tg,{children:r},o))}),p.jsxs(Ig,{children:[p.jsx(Oe,{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo →"}),p.jsx(Oe,{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View Code →"})]})]})]},n))})]})})},Rg=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${e=>e.$isOpen?"1":"0"};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
`,Lg=y.div`
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--hover-shadow);
  border: 1px solid var(--card-border);
  transform: ${e=>e.$isOpen?"scale(1) translateY(0)":"scale(0.95) translateY(20px)"};
  opacity: ${e=>e.$isOpen?"1":"0"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--card-bg);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 4px;
    
    &:hover {
      background: var(--gray-400);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`,Og=y.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--button-hover-bg);
    color: var(--accent-color);
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent-color);
  }
`,Mg=y.div`
  margin-bottom: 1.5rem;
  padding-right: 2.5rem;
`,Ag=y.h2`
  color: var(--primary-color);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span.icon {
    color: var(--accent-color);
  }
`,Fg=y.p`
  color: var(--text-secondary);
  margin: 0.5rem 0 0;
  font-size: 1rem;
`,Ug=y.div`
  color: var(--text-color);
`,Bg=({isOpen:e,onClose:t,title:n,subtitle:r,icon:o,children:i,initialFocus:l=null})=>{const a=W.useRef(null),s=W.useRef(null),u=W.useRef(null);W.useEffect(()=>{if(e){u.current=document.activeElement;const h=(l==null?void 0:l.current)||s.current;h==null||h.focus(),document.body.style.overflow="hidden";const m=v=>{v.key==="Escape"&&t()};return document.addEventListener("keydown",m),()=>{var v;document.removeEventListener("keydown",m),document.body.style.overflow="",(v=u.current)==null||v.focus()}}},[e,t,l]);const g=h=>{h.target===a.current&&t()};return e?Bd.createPortal(p.jsx(Rg,{ref:a,onClick:g,$isOpen:e,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:p.jsxs(Lg,{ref:s,$isOpen:e,tabIndex:"-1",children:[p.jsx(Og,{onClick:t,"aria-label":"Close modal",children:p.jsx("i",{className:"fas fa-times"})}),p.jsxs(Mg,{children:[p.jsxs(Ag,{id:"modal-title",children:[o&&p.jsx("span",{className:"icon",children:o}),n]}),r&&p.jsx(Fg,{children:r})]}),p.jsx(Ug,{children:i})]})}),document.body):null},Hg=y.div`
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--card-border);
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
    border-color: var(--accent-color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`,Vg=y.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${e=>e.$isExpanded?"1.5rem":"0"};
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: ${e=>e.$isExpanded?"column":"row"};
    gap: ${e=>e.$isExpanded?"1rem":"0.75rem"};
  }
`,Wg=y.div`
  flex: 1;
`,Qg=y.h3`
  font-size: 1.25rem;
  color: var(--primary-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;

  span.icon {
    font-size: 1.5rem;
    color: var(--accent-color);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover span.icon {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    
    span.icon {
      font-size: 1.3rem;
    }
  }
`,Yg=y.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.25rem 0 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`,bg=y.span`
  color: var(--text-tertiary);
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--date-badge-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`,Gg=y.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: contain;
  background: white;
  padding: 6px;
  border: 1px solid var(--card-border);
  flex-shrink: 0;
  margin-right: 8px;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    padding: 4px;
  }
`,Kg=y.button`
  background: none;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  margin-left: auto;

  &:hover {
    color: var(--accent-color);
    background: var(--button-hover-bg);
  }

  i {
    transition: transform 0.3s ease;
    transform: rotate(${e=>e.$isExpanded?"180deg":"0deg"});
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    font-size: 0.85rem;
  }
`,Xg=y.div`
  max-height: ${e=>e.$isExpanded?"1000px":"0"};
  opacity: ${e=>e.$isExpanded?"1":"0"};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${e=>e.$isExpanded?"1rem":"0"};
`,Zg=y.div`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;

    ul {
      padding-left: 1rem;
    }
  }
`,hf=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--card-border);
`,zu=y.span`
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: var(--tag-hover-bg);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`,Jg=y.div`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;

  ul {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
    position: relative;
    
    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;

    ul {
      padding-left: 1rem;
    }
  }
`,qg=y(hf)`
  margin-top: 2rem;
  padding-top: 1.5rem;
`,ev=({icon:e,title:t,subtitle:n,shortDescription:r,fullDescription:o,startDate:i,endDate:l,companyLogo:a,tags:s=[]})=>{const[u,g]=W.useState(!1),[h,m]=W.useState(!1),v=$=>$?new Date($).toLocaleDateString("en-US",{month:"short",year:"numeric"}):"Present",w=()=>{g(!u)},k=$=>{$.stopPropagation(),m(!0)};return p.jsxs(p.Fragment,{children:[p.jsxs(Hg,{onClick:w,children:[p.jsxs(Vg,{$isExpanded:u,children:[p.jsxs(Wg,{children:[p.jsxs(Qg,{children:[p.jsx("span",{className:"icon",children:e}),t]}),p.jsxs(Yg,{children:[a&&p.jsx(Gg,{src:a,alt:n}),n,p.jsxs(bg,{children:[v(i)," - ",v(l)]})]})]}),p.jsxs(Kg,{$isExpanded:u,onClick:k,"aria-label":"View full details",children:["View Details",p.jsx("i",{className:"fas fa-external-link-alt"})]})]}),p.jsx(Xg,{$isExpanded:u,children:p.jsxs(Zg,{children:[r,s.length>0&&p.jsx(hf,{children:s.map(($,d)=>p.jsx(zu,{children:$},d))})]})})]}),p.jsx(Bg,{isOpen:h,onClose:()=>m(!1),title:t,subtitle:n,icon:e,children:p.jsxs(Jg,{children:[o,s.length>0&&p.jsx(qg,{children:s.map(($,d)=>p.jsx(zu,{children:$},d))})]})})]})},tv=y.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--card-border);
  box-shadow: var(--hover-shadow);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,nv=y.h3`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span.icon {
    color: var(--accent-color);
  }
`,rv=y.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`,ov=y.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--hover-shadow);
    background: transparent;
    color: var(--primary-color);
  }

  i {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateY(2px);
  }
`,iv=y.div`
  margin-top: 1.5rem;
  color: var(--text-tertiary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,lv=({pdfUrl:e="assets/resume.pdf",fileSize:t="245 KB",lastUpdated:n="May 2025"})=>{const[r,o]=W.useState(!1);return p.jsxs(tv,{children:[p.jsxs(nv,{children:[p.jsx("span",{className:"icon",children:"📄"}),"Download Complete Resume"]}),p.jsx(rv,{children:"Get a detailed overview of my experience, skills, and achievements"}),p.jsxs(ov,{href:e,download:"Aahad_Vakani_Resume.pdf",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[p.jsx("i",{className:`fas ${r?"fa-file-download":"fa-file-pdf"}`}),"Download PDF"]}),p.jsxs(iv,{children:[p.jsx("i",{className:"fas fa-info-circle"}),t," • Last updated: ",n]})]})},is=[{id:"work-1",title:"Information Technology Intern",subtitle:"DePauw University",icon:"💻",shortDescription:"Providing technical support and troubleshooting for campus-wide IT infrastructure.",fullDescription:`
      • Provide technical support and troubleshooting for campus-wide IT infrastructure
      • Manage and maintain computer labs, network equipment, and software systems
      • Assist in implementing new technology solutions and upgrades
      • Document technical procedures and create user guides
      • Collaborate with team members to resolve complex technical issues
    `,startDate:"2024-05-01",endDate:null,companyLogo:"logos/depauw-logo.jpg",tags:["IT Support","Network Management","Technical Documentation","System Administration"],type:"work"},{id:"work-2",title:"Resident Assistant",subtitle:"DePauw University",icon:"🏫",shortDescription:"Foster a supportive and inclusive residential community for 40+ students.",fullDescription:`
      • Foster a supportive and inclusive residential community for 40+ students
      • Plan and execute educational and social programming events
      • Mediate conflicts and provide crisis response when needed
      • Enforce university policies and maintain safety protocols
      • Develop and implement community-building initiatives
    `,startDate:"2024-01-01",endDate:null,companyLogo:"logos/depauw-logo.jpg",tags:["Leadership","Event Planning","Conflict Resolution","Community Building"],type:"work"},{id:"edu-1",title:"Bachelor of Arts in Computer Science",subtitle:"DePauw University",icon:"🎓",shortDescription:"Pursuing a comprehensive computer science education with a focus on artificial intelligence and software development.",fullDescription:`
      • Major in Computer Science with focus on AI and Machine Learning
      • Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI, Software Development
      • Active member of Computer Science Club and AI Research Group
      • Dean's List recipient
      • Expected Graduation: May 2026
    `,startDate:"2022-08-01",endDate:"2026-05-30",companyLogo:"logos/depauw-logo.jpg",tags:["Computer Science","AI/ML","Software Development","Data Structures","Algorithms"],type:"education"},{id:"edu-2",title:"Bachelor of Arts in English Writing",subtitle:"DePauw University",icon:"🎓",shortDescription:"Pursuing a comprehensive English education with courses on fiction, non-fiction, and playwriting among other forms.",fullDescription:`
      • Major in English Writing with focus on fiction, non-fiction, and playwriting
      • Honors Courses
      • Dean's List recipient
      • Expected Graduation: May 2026
    `,startDate:"2022-08-01",endDate:"2026-05-30",companyLogo:"logos/depauw-logo.jpg",tags:["English Writing","Prose","Poetry","Fiction","Non-Fiction","Playwriting"],type:"education"},{id:"proj-1",title:"AI-Powered Task Management System",subtitle:"Personal Project",icon:"🤖",shortDescription:"Developed an intelligent task management system using AI to automate task breakdown and prioritization.",fullDescription:`
      • Built a sophisticated task management system with AI integration
      • Implemented natural language processing for task analysis
      • Created an intuitive user interface using React and styled-components
      • Integrated with OpenAI's API for intelligent task processing
      • Developed RESTful APIs using Node.js and Express
    `,startDate:"2024-01-01",endDate:"2024-03-01",tags:["React","Node.js","AI/ML","OpenAI","REST APIs","TypeScript"],type:"project"},{id:"proj-2",title:"Portfolio Website",subtitle:"Personal Project",icon:"🌐",shortDescription:"Designed and developed a modern, responsive portfolio website showcasing projects and skills.",fullDescription:`
      • Created a responsive portfolio website using React and styled-components
      • Implemented modern UI/UX design principles and animations
      • Integrated dark/light theme support
      • Optimized performance and accessibility
      • Added interactive components and smooth transitions
    `,startDate:"2024-02-01",endDate:"2024-03-01",tags:["React","Styled Components","UI/UX Design","Responsive Design","Web Development"],type:"project"}],av=e=>is.filter(t=>t.type===e),sv=()=>{const e=new Set;return is.forEach(t=>{t.tags.forEach(n=>e.add(n))}),Array.from(e).sort()},uv=e=>is.filter(t=>t.tags.includes(e)),cv=(e,t=!1)=>[...e].sort((n,r)=>{const o=n.endDate||new Date().toISOString(),i=r.endDate||new Date().toISOString();return t?new Date(o)-new Date(i):new Date(i)-new Date(o)}),dv=y.section`
  padding: 4rem 0;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,fv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`,pv=y.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,mv=y.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`,hv=y.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`,gv=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  animation: fadeIn 0.5s ease-out 0.2s backwards;
`,gf=y.button`
  background: ${e=>e.$active?"var(--primary-color)":"var(--card-bg)"};
  color: ${e=>e.$active?"white":"var(--text-color)"};
  border: 1px solid ${e=>e.$active?"var(--primary-color)":"var(--card-border)"};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--hover-shadow);
  }
`,vv=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  padding: 0 1rem;
  animation: fadeIn 0.5s ease-out 0.3s backwards;
`,yv=y(gf)`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
`,xv=y.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  align-content: start;
  
  /* Base layout for small screens */
  grid-template-columns: 1fr;
  max-width: 600px;
  
  /* Tablet layout */
  @media (min-width: 768px) {
    max-width: 1200px;
    grid-template-columns: ${e=>e.$fullWidth?"1fr":"repeat(auto-fit, minmax(400px, 1fr))"};
  }
  
  /* Desktop layout adjustments */
  @media (min-width: 1024px) {
    gap: 2rem;
    grid-template-columns: ${e=>e.$fullWidth?"1fr":"repeat(auto-fit, minmax(450px, 1fr))"};
  }

  /* Ensure single column for work experience */
  ${e=>e.$fullWidth&&`
    max-width: 800px;
    margin: 0 auto;
  `}

  /* Animation for grid items */
  & > * {
    animation: cardFadeIn 0.5s ease-out backwards;
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,wv=y.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 2rem 0;
`,kv=()=>{const[e,t]=W.useState("work"),[n,r]=W.useState(null),o=[{id:"work",label:"Work Experience",icon:"💼"},{id:"education",label:"Education",icon:"🎓"},{id:"project",label:"Projects",icon:"🚀"}],i=W.useMemo(()=>sv(),[]),l=W.useMemo(()=>{let u=n?uv(n):av(e);return cv(u)},[e,n]),a=u=>{t(u),r(null)},s=u=>{r(u===n?null:u)};return p.jsx(dv,{id:"resume",children:p.jsxs(fv,{children:[p.jsxs(pv,{children:[p.jsx(mv,{children:"My Journey"}),p.jsx(hv,{children:"Explore my professional experience, education, and notable projects"})]}),p.jsx(gv,{children:o.map(u=>p.jsxs(gf,{$active:e===u.id&&!n,onClick:()=>a(u.id),children:[u.icon," ",u.label]},u.id))}),p.jsx(vv,{children:i.map(u=>p.jsxs(yv,{$active:n===u,onClick:()=>s(u),children:["#",u]},u))}),l.length>0?p.jsx(xv,{$fullWidth:e==="work",children:l.map(u=>p.jsx(ev,{...u},u.id))}):p.jsx(wv,{children:"No entries found for the selected filter."}),p.jsx(lv,{})]})})},Sv=y.section`
  background-color: var(--background-alt);
  padding: var(--space-3xl) 0;
`,Ev=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Cv=y.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-primary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`,jv=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_v=y(Fr)`
  display: flex;
  flex-direction: column;
`,Pv=y.div`
  padding: var(--space-xl);
`,zv=y.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.875rem;
`,Nv=y.span`
  background-color: var(--background);
  color: var(--accent-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
`,$v=y.h3`
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  font-size: 1.5rem;
  line-height: 1.4;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--accent-secondary);
    }
  }
`,Tv=y.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`,Iv=y.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  color: var(--accent-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-fast);

  &:hover {
    color: var(--accent-primary-hover);
    transform: translateX(4px);
  }
`,Dv=()=>{const e=[{title:"Tweets and Tags: A Study of Code-Switching in Online Contexts",excerpt:"This paper analyzes Hindi-English code-switching patterns on Twitter using the L3Cube-HingCorpus. It examines the frequency, placement, and function of inter-, intra-, and tag-level switches within bilingual online discourse. The study draws on sociolinguistic theory to explore how code-switching reflects identity, emotion, and interactional context in digital communication.",date:"April 2025",category:"Research",url:"assets/papers/codeswitching.pdf"},{title:"The Never-Ending Western Exit",excerpt:"This paper explores Mohsin Hamid's Exit West as a reimagining of migration through magical realism, focusing on the psychological and cultural dislocation of refugees. It analyzes how Hamid uses surreal elements—such as the magical doors—to blur borders of space, identity, and time. The novel is read as a critique of Western perceptions of migration and an invocation of shared global responsibility.",date:"Spring 2025",category:"Analysis",url:"assets/papers/exitwest.pdf"},{title:"Stacked Ensemble Classification",excerpt:"This report documents the development of a high-accuracy classification pipeline using a stacked ensemble of SVM, MLP, and XGBoost models trained on extracted image features. It emphasizes methodical experimentation, including structured hyperparameter tuning and rigorous 4-fold cross-validation to evaluate model stability. The report integrates quantitative performance analysis (accuracy, F1, ROC AUC) with qualitative interpretation of class probabilities and model uncertainty. Visualizations and tables in the appendix enhance transparency and provide interpretive depth.",date:"Spring 2025",category:"Experimental Report",url:"assets/ML Reports/ensemble.pdf"}];return p.jsx(Sv,{id:"writing",children:p.jsxs(Ev,{children:[p.jsxs(Cv,{children:[p.jsx("h2",{children:"Research & Writing"}),p.jsx("p",{children:"Exploring the intersection of technology, ethics, and society through research papers and thought-provoking articles."})]}),p.jsx(jv,{children:e.map((t,n)=>p.jsx(_v,{children:p.jsxs(Pv,{children:[p.jsxs(zv,{children:[p.jsx(Nv,{children:t.category}),p.jsx("span",{children:t.date})]}),p.jsx($v,{children:p.jsx("a",{href:t.url,children:t.title})}),p.jsx(Tv,{children:t.excerpt}),p.jsxs(Iv,{href:t.url,children:["Read Paper ",p.jsx("span",{children:"→"})]})]})},n))})]})})},Rv=y.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`,Lv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Ov=y.div`
  text-align: center;
  margin-bottom: var(--space-2xl);

  h2 {
    background: linear-gradient(
      135deg,
      var(--text-primary) 0%,
      var(--accent-secondary) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }
`,Mv=y(Fr)`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-2xl);
  text-align: center;
`,Av=y.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  align-items: center;
`,Fv=()=>p.jsx(Rv,{id:"contact",children:p.jsxs(Lv,{children:[p.jsxs(Ov,{children:[p.jsx("h2",{children:"Get in Touch"}),p.jsx("p",{children:"Have a question or want to collaborate? Feel free to reach out through any of the following channels."})]}),p.jsx(Mv,{children:p.jsxs(Av,{children:[p.jsx(Oe,{href:"mailto:aahadvakani@gmail.com",children:"📧 Email Me"}),p.jsx(Oe,{href:"https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",target:"_blank",children:"💼 LinkedIn Profile"}),p.jsx(Oe,{href:"https://github.com/aavrar",target:"_blank",children:"💻 View GitHub"})]})})]})}),Uv=y.footer`
  background-color: var(--background-elevated);
  padding: var(--space-2xl) 0;
  border-top: 1px solid var(--card-border);
`,Bv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Hv=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-xl);
    text-align: center;
  }
`,Vv=y.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
    font-size: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
  }
`,Wv=y.div`
  display: flex;
  gap: var(--space-md);
`,el=y(Oe)`
  width: 40px;
  height: 40px;
  padding: var(--space-sm);
  justify-content: center;
  font-size: 1.5rem;
`,Qv=y(Oe)`
  padding: 0;
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`,Yv=y.div`
  text-align: center;
  color: var(--text-tertiary);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--card-border);
  font-size: 0.875rem;

  a {
    color: var(--accent-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--accent-primary);
    }
  }
`,bv=()=>{const e=new Date().getFullYear();return p.jsx(Uv,{children:p.jsxs(Bv,{children:[p.jsxs(Hv,{children:[p.jsxs(Vv,{children:[p.jsx("h3",{children:"Aahad Vakani"}),p.jsx("p",{children:"Computer Science Student & AI Researcher"})]}),p.jsxs(Wv,{children:[p.jsx(el,{href:"https://github.com/aavrar",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:"💻"}),p.jsx(el,{href:"https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:"💼"}),p.jsx(el,{href:"mailto:aahadvakani@gmail.com","aria-label":"Email",children:"📧"})]})]}),p.jsxs(Yv,{children:["© ",e," Aahad Vakani. All rights reserved. Built with"," ",p.jsx(Qv,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React"})]})]})})};y.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: var(--background);
  padding: var(--space-lg);
  transform: translateX(${e=>e.isVisible?"0":"-100%"});
  transition: transform var(--transition-slow) ease-in-out;
  z-index: 100;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;y.nav`
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
`;y.a`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(
      135deg,
      var(--accent-primary) 0%,
      var(--accent-secondary) 100%
    );
    transform: scaleY(0);
    transition: transform var(--transition-fast);
  }

  &:hover {
    color: var(--text-primary);
    background-color: var(--background-alt);
    
    &:before {
      transform: scaleY(1);
    }
  }

  &.active {
    color: var(--text-primary);
    background-color: var(--background-alt);
    
    &:before {
      transform: scaleY(1);
    }
  }
`;y.button`
  position: fixed;
  left: var(--space-md);
  top: var(--space-md);
  z-index: 101;
  background: var(--background);
  border: none;
  padding: var(--space-sm);
  border-radius: var(--radius-full);
  cursor: pointer;
  display: none;
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--background-alt);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;const Gv=y.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`,Kv=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Xv=y(Fr)`
  max-width: 600px;
  margin: 0 auto;
  padding: var(--space-2xl);
  text-align: center;
  position: relative;
`,Zv=y.h3`
  font-size: 1.5rem;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
`,Jv=y.textarea`
  width: 100%;
  min-height: 80px;
  padding: var(--space-md);
  font-size: 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  resize: vertical;
`,qv=y.div`
  display: flex;
  justify-content: center;
`,e0=y.blockquote`
  margin-top: var(--space-xl);
  font-style: italic;
  color: var(--text-secondary);
  white-space: pre-wrap;
  line-height: 1.6;
`,t0=y.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: var(--card-border);
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  overflow: hidden;
`,n0=os`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
`,r0=y.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--accent-secondary), var(--accent-primary));
  animation: ${n0} 2s linear infinite;
`,o0=y.div`
  margin-top: var(--space-lg);
  font-size: 0.75rem;
  color: var(--text-tertiary);
`,i0=()=>{const[e,t]=W.useState(""),[n,r]=W.useState(""),[o,i]=W.useState(!1),l="mistralai/mistral-7b-instruct",a=async()=>{var g,h,m;if(!n.trim()){t("Please describe something to write about.");return}const s=`Write a microfiction story about ${n.trim()}.`;i(!0),t("");const u="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";try{const k=((m=(h=(g=(await(await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${u}`,"Content-Type":"application/json"},body:JSON.stringify({model:l,messages:[{role:"system",content:"You are a creative writing assistant that writes surreal microfiction. Always respond with a 3–4 sentence story, no more and no less. Do not include introductions or explanations—just the story."},{role:"user",content:s}],max_tokens:200,temperature:.9})})).json()).choices)==null?void 0:g[0])==null?void 0:h.message)==null?void 0:m.content)||"No story generated.";t(k.trim())}catch(v){console.error("Error:",v),t("Failed to generate story.")}i(!1)};return p.jsx(Gv,{id:"microfiction",children:p.jsx(Kv,{children:p.jsxs(Xv,{children:[p.jsx(Zv,{children:"Microfiction Generator"}),p.jsx(Jv,{placeholder:"e.g. a forgotten machine, the last sunrise, a secret beneath the sea...",value:n,onChange:s=>r(s.target.value)}),p.jsx(qv,{children:p.jsx(Oe,{as:"button",onClick:a,disabled:o,children:o?"Generating...":"Generate Microfiction"})}),e&&p.jsxs(e0,{children:["“",e,"”"]}),p.jsxs(o0,{children:["AI Model: ",l]}),o&&p.jsx(t0,{children:p.jsx(r0,{})})]})})})},l0=y.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,a0=y.main`
  flex: 1;
  transition: padding-left var(--transition-slow);
  padding-left: ${e=>e.sidebarVisible?"240px":"0"};

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;function s0(){const[e,t]=De.useState(!1);return De.useEffect(()=>{const n=()=>{t(window.scrollY>60)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),p.jsxs(Wh,{children:[p.jsx(Qh,{}),p.jsxs(l0,{children:[p.jsx(eg,{}),p.jsxs(a0,{sidebarVisible:e,children:[p.jsx(cg,{}),p.jsx(kg,{}),p.jsx(Dg,{}),p.jsx(kv,{}),p.jsx(Dv,{}),p.jsx(i0,{}),p.jsx(Fv,{})]}),p.jsx(bv,{})]})]})}tl.createRoot(document.getElementById("root")).render(p.jsx(De.StrictMode,{children:p.jsx(s0,{})}));
