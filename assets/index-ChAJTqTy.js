(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Iu={exports:{}},bi={},Ru={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),xf=Symbol.for("react.portal"),wf=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),Cf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),jf=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),Pf=Symbol.for("react.memo"),zf=Symbol.for("react.lazy"),as=Symbol.iterator;function Nf(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var $u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Du={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||$u}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=Bn.prototype;function oa(e,t,n){this.props=e,this.context=t,this.refs=Du,this.updater=n||$u}var la=oa.prototype=new Ou;la.constructor=oa;Lu(la,Bn.prototype);la.isPureReactComponent=!0;var ss=Array.isArray,Au=Object.prototype.hasOwnProperty,aa={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Au.call(t,r)&&!Mu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lr,type:e,key:o,ref:l,props:i,_owner:aa.current}}function Tf(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function If(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var us=/\/+/g;function Eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?If(""+e.key):t.toString(36)}function ai(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Lr:case xf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Eo(l,0):r,ss(i)?(n="",e!=null&&(n=e.replace(us,"$&/")+"/"),ai(i,t,n,"",function(c){return c})):i!=null&&(sa(i)&&(i=Tf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(us,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ss(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Eo(o,a);l+=ai(o,t,n,s,i)}else if(s=Nf(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Eo(o,a++),l+=ai(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Hr(e,t,n){if(e==null)return e;var r=[],i=0;return ai(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},si={transition:null},$f={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:si,ReactCurrentOwner:aa};function Uu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Bn;L.Fragment=wf;L.Profiler=Sf;L.PureComponent=oa;L.StrictMode=kf;L.Suspense=_f;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$f;L.act=Uu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=aa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Au.call(t,s)&&!Mu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lr,type:e.type,key:i,ref:o,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Ef,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cf,_context:e},e.Consumer=e};L.createElement=Fu;L.createFactory=function(e){var t=Fu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:jf,render:e}};L.isValidElement=sa;L.lazy=function(e){return{$$typeof:zf,_payload:{_status:-1,_result:e},_init:Rf}};L.memo=function(e,t){return{$$typeof:Pf,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=si.transition;si.transition={};try{e()}finally{si.transition=t}};L.unstable_act=Uu;L.useCallback=function(e,t){return he.current.useCallback(e,t)};L.useContext=function(e){return he.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return he.current.useDeferredValue(e)};L.useEffect=function(e,t){return he.current.useEffect(e,t)};L.useId=function(){return he.current.useId()};L.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return he.current.useMemo(e,t)};L.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};L.useRef=function(e){return he.current.useRef(e)};L.useState=function(e){return he.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return he.current.useTransition()};L.version="18.3.1";Ru.exports=L;var $e=Ru.exports;const be=yf($e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=$e,Df=Symbol.for("react.element"),Of=Symbol.for("react.fragment"),Af=Object.prototype.hasOwnProperty,Mf=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ff={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Af.call(t,r)&&!Ff.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Df,type:e,key:o,ref:l,props:i,_owner:Mf.current}}bi.Fragment=Of;bi.jsx=Bu;bi.jsxs=Bu;Iu.exports=bi;var d=Iu.exports,il={},Hu={exports:{}},ze={},Vu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,N){var T=_.length;_.push(N);e:for(;0<T;){var M=T-1>>>1,F=_[M];if(0<i(F,N))_[M]=N,_[T]=F,T=M;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],T=_.pop();if(T!==N){_[0]=T;e:for(var M=0,F=_.length,Bt=F>>>1;M<Bt;){var Me=2*(M+1)-1,ht=_[Me],Se=Me+1,nt=_[Se];if(0>i(ht,T))Se<F&&0>i(nt,ht)?(_[M]=nt,_[Se]=T,M=Se):(_[M]=ht,_[Me]=T,M=Me);else if(Se<F&&0>i(nt,T))_[M]=nt,_[Se]=T,M=Se;else break e}}return N}function i(_,N){var T=_.sortIndex-N.sortIndex;return T!==0?T:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],g=1,m=null,h=3,y=!1,x=!1,C=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=_)r(c),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(c)}}function v(_){if(C=!1,p(_),!x)if(n(s)!==null)x=!0,Qn(j);else{var N=n(c);N!==null&&Ut(v,N.startTime-_)}}function j(_,N){x=!1,C&&(C=!1,f(z),z=-1),y=!0;var T=h;try{for(p(N),m=n(s);m!==null&&(!(m.expirationTime>N)||_&&!ke());){var M=m.callback;if(typeof M=="function"){m.callback=null,h=m.priorityLevel;var F=M(m.expirationTime<=N);N=e.unstable_now(),typeof F=="function"?m.callback=F:m===n(s)&&r(s),p(N)}else r(s);m=n(s)}if(m!==null)var Bt=!0;else{var Me=n(c);Me!==null&&Ut(v,Me.startTime-N),Bt=!1}return Bt}finally{m=null,h=T,y=!1}}var E=!1,w=null,z=-1,U=5,$=-1;function ke(){return!(e.unstable_now()-$<U)}function Mt(){if(w!==null){var _=e.unstable_now();$=_;var N=!0;try{N=w(!0,_)}finally{N?Ft():(E=!1,w=null)}}else E=!1}var Ft;if(typeof u=="function")Ft=function(){u(Mt)};else if(typeof MessageChannel<"u"){var Ur=new MessageChannel,So=Ur.port2;Ur.port1.onmessage=Mt,Ft=function(){So.postMessage(null)}}else Ft=function(){R(Mt,0)};function Qn(_){w=_,E||(E=!0,Ft())}function Ut(_,N){z=R(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Qn(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var T=h;h=N;try{return _()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=h;h=_;try{return N()}finally{h=T}},e.unstable_scheduleCallback=function(_,N,T){var M=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?M+T:M):T=M,_){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=T+F,_={id:g++,callback:N,priorityLevel:_,startTime:T,expirationTime:F,sortIndex:-1},T>M?(_.sortIndex=T,t(c,_),n(s)===null&&_===n(c)&&(C?(f(z),z=-1):C=!0,Ut(v,T-M))):(_.sortIndex=F,t(s,_),x||y||(x=!0,Qn(j))),_},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(_){var N=h;return function(){var T=h;h=N;try{return _.apply(this,arguments)}finally{h=T}}}})(Wu);Vu.exports=Wu;var Uf=Vu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=$e,Pe=Uf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,gr={};function rn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(gr[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cs={},ds={};function Vf(e){return ol.call(ds,e)?!0:ol.call(cs,e)?!1:Hf.test(e)?ds[e]=!0:(cs[e]=!0,!1)}function Wf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qf(e,t,n,r){if(t===null||typeof t>"u"||Wf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,ca);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function da(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qf(t,n,i,r)&&(n=null),r||i===null?Vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),pa=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),fs=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=fs&&e[fs]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,jo;function tr(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||""}return`
`+jo+e}var _o=!1;function Po(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?tr(e):""}function Yf(e){switch(e.tag){case 5:return tr(e.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 2:case 15:return e=Po(e.type,!1),e;case 11:return e=Po(e.type.render,!1),e;case 1:return e=Po(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case ll:return"Profiler";case fa:return"StrictMode";case al:return"Suspense";case sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case Yu:return(e._context.displayName||"Context")+".Provider";case pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Gf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kf(e){var t=Xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Kf(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ju(e,t){t=t.checked,t!=null&&da(e,"checked",t,!1)}function dl(e,t){Ju(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var nr=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ms(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(nr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function qu(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xf=["Webkit","ms","Moz","O"];Object.keys(lr).forEach(function(e){Xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lr[t]=lr[e]})});function tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lr.hasOwnProperty(e)&&lr[e]?(""+t).trim():t+"px"}function nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zf=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,Cn=null,En=null;function vs(e){if(e=Ar(e)){if(typeof yl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=io(t),yl(e.stateNode,e.type,t))}}function rc(e){Cn?En?En.push(e):En=[e]:Cn=e}function ic(){if(Cn){var e=Cn,t=En;if(En=Cn=null,vs(e),t)for(e=0;e<t.length;e++)vs(t[e])}}function oc(e,t){return e(t)}function lc(){}var zo=!1;function ac(e,t,n){if(zo)return e(t,n);zo=!0;try{return oc(e,t,n)}finally{zo=!1,(Cn!==null||En!==null)&&(lc(),ic())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var r=io(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var xl=!1;if(ut)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){xl=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{xl=!1}function Jf(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var ar=!1,ji=null,_i=!1,wl=null,qf={onError:function(e){ar=!0,ji=e}};function bf(e,t,n,r,i,o,l,a,s){ar=!1,ji=null,Jf.apply(qf,arguments)}function ep(e,t,n,r,i,o,l,a,s){if(bf.apply(this,arguments),ar){if(ar){var c=ji;ar=!1,ji=null}else throw Error(k(198));_i||(_i=!0,wl=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ys(e){if(on(e)!==e)throw Error(k(188))}function tp(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ys(i),e;if(o===r)return ys(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function uc(e){return e=tp(e),e!==null?cc(e):null}function cc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cc(e);if(t!==null)return t;e=e.sibling}return null}var dc=Pe.unstable_scheduleCallback,xs=Pe.unstable_cancelCallback,np=Pe.unstable_shouldYield,rp=Pe.unstable_requestPaint,Z=Pe.unstable_now,ip=Pe.unstable_getCurrentPriorityLevel,ga=Pe.unstable_ImmediatePriority,fc=Pe.unstable_UserBlockingPriority,Pi=Pe.unstable_NormalPriority,op=Pe.unstable_LowPriority,pc=Pe.unstable_IdlePriority,eo=null,et=null;function lp(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:up,ap=Math.log,sp=Math.LN2;function up(e){return e>>>=0,e===0?32:31-(ap(e)/sp|0)|0}var Yr=64,Gr=4194304;function rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=rr(a):(o&=l,o!==0&&(r=rr(o)))}else l=n&~i,l!==0?r=rr(l):o!==0&&(r=rr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=cp(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function fp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gc,ya,vc,yc,xc,Sl=!1,Kr=[],Et=null,jt=null,_t=null,xr=new Map,wr=new Map,wt=[],pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ws(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(t.pointerId)}}function Xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ar(t),t!==null&&ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hp(e,t,n,r,i){switch(t){case"focusin":return Et=Xn(Et,e,t,n,r,i),!0;case"dragenter":return jt=Xn(jt,e,t,n,r,i),!0;case"mouseover":return _t=Xn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xr.set(o,Xn(xr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wr.set(o,Xn(wr.get(o)||null,e,t,n,r,i)),!0}return!1}function wc(e){var t=Qt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,xc(e.priority,function(){vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Ar(n),t!==null&&ya(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){ui(e)&&n.delete(t)}function mp(){Sl=!1,Et!==null&&ui(Et)&&(Et=null),jt!==null&&ui(jt)&&(jt=null),_t!==null&&ui(_t)&&(_t=null),xr.forEach(ks),wr.forEach(ks)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,mp)))}function kr(e){function t(i){return Zn(i,e)}if(0<Kr.length){Zn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Zn(Et,e),jt!==null&&Zn(jt,e),_t!==null&&Zn(_t,e),xr.forEach(t),wr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)wc(n),n.blockedOn===null&&wt.shift()}var jn=pt.ReactCurrentBatchConfig,Ni=!0;function gp(e,t,n,r){var i=A,o=jn.transition;jn.transition=null;try{A=1,xa(e,t,n,r)}finally{A=i,jn.transition=o}}function vp(e,t,n,r){var i=A,o=jn.transition;jn.transition=null;try{A=4,xa(e,t,n,r)}finally{A=i,jn.transition=o}}function xa(e,t,n,r){if(Ni){var i=Cl(e,t,n,r);if(i===null)Fo(e,t,r,Ti,n),ws(e,r);else if(hp(i,e,t,n,r))r.stopPropagation();else if(ws(e,r),t&4&&-1<pp.indexOf(e)){for(;i!==null;){var o=Ar(i);if(o!==null&&gc(o),o=Cl(e,t,n,r),o===null&&Fo(e,t,r,Ti,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var Ti=null;function Cl(e,t,n,r){if(Ti=null,e=ma(r),e=Qt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case ga:return 1;case fc:return 4;case Pi:case op:return 16;case pc:return 536870912;default:return 16}default:return 16}}var St=null,wa=null,ci=null;function Sc(){if(ci)return ci;var e,t=wa,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ci=i.slice(e,1<r?1-r:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ss(){return!1}function Ne(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xr:Ss,this.isPropagationStopped=Ss,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Ne(Hn),Or=K({},Hn,{view:0,detail:0}),yp=Ne(Or),To,Io,Jn,to=K({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(To=e.screenX-Jn.screenX,Io=e.screenY-Jn.screenY):Io=To=0,Jn=e),To)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Cs=Ne(to),xp=K({},to,{dataTransfer:0}),wp=Ne(xp),kp=K({},Or,{relatedTarget:0}),Ro=Ne(kp),Sp=K({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Ne(Sp),Ep=K({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jp=Ne(Ep),_p=K({},Hn,{data:0}),Es=Ne(_p),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function Sa(){return Tp}var Ip=K({},Or,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rp=Ne(Ip),$p=K({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Ne($p),Lp=K({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),Dp=Ne(Lp),Op=K({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=Ne(Op),Mp=K({},to,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fp=Ne(Mp),Up=[9,13,27,32],Ca=ut&&"CompositionEvent"in window,sr=null;ut&&"documentMode"in document&&(sr=document.documentMode);var Bp=ut&&"TextEvent"in window&&!sr,Cc=ut&&(!Ca||sr&&8<sr&&11>=sr),_s=" ",Ps=!1;function Ec(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Hp(e,t){switch(e){case"compositionend":return jc(t);case"keypress":return t.which!==32?null:(Ps=!0,_s);case"textInput":return e=t.data,e===_s&&Ps?null:e;default:return null}}function Vp(e,t){if(dn)return e==="compositionend"||!Ca&&Ec(e,t)?(e=Sc(),ci=wa=St=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wp[e.type]:t==="textarea"}function _c(e,t,n,r){rc(r),t=Ii(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,Sr=null;function Qp(e){Ac(e,0)}function no(e){var t=hn(e);if(Zu(t))return e}function Yp(e,t){if(e==="change")return t}var Pc=!1;if(ut){var $o;if(ut){var Lo="oninput"in document;if(!Lo){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Lo=typeof Ns.oninput=="function"}$o=Lo}else $o=!1;Pc=$o&&(!document.documentMode||9<document.documentMode)}function Ts(){ur&&(ur.detachEvent("onpropertychange",zc),Sr=ur=null)}function zc(e){if(e.propertyName==="value"&&no(Sr)){var t=[];_c(t,Sr,e,ma(e)),ac(Qp,t)}}function Gp(e,t,n){e==="focusin"?(Ts(),ur=t,Sr=n,ur.attachEvent("onpropertychange",zc)):e==="focusout"&&Ts()}function Kp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Sr)}function Xp(e,t){if(e==="click")return no(t)}function Zp(e,t){if(e==="input"||e==="change")return no(t)}function Jp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Jp;function Cr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ol.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var n=Is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Is(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qp(e){var t=Tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rs(n,o);var l=Rs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bp=ut&&"documentMode"in document&&11>=document.documentMode,fn=null,El=null,cr=null,jl=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||fn==null||fn!==Ei(r)||(r=fn,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&Cr(cr,r)||(cr=r,r=Ii(El,"onSelect"),0<r.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Do={},Ic={};ut&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function ro(e){if(Do[e])return Do[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ic)return Do[e]=t[n];return e}var Rc=ro("animationend"),$c=ro("animationiteration"),Lc=ro("animationstart"),Dc=ro("transitionend"),Oc=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Oc.set(e,t),rn(t,[e])}for(var Oo=0;Oo<Ls.length;Oo++){var Ao=Ls[Oo],eh=Ao.toLowerCase(),th=Ao[0].toUpperCase()+Ao.slice(1);Dt(eh,"on"+th)}Dt(Rc,"onAnimationEnd");Dt($c,"onAnimationIteration");Dt(Lc,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(Dc,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function Ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ep(r,t,void 0,e),e.currentTarget=null}function Ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Ds(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Ds(i,a,c),o=s}}}if(_i)throw e=wl,_i=!1,wl=null,e}function H(e,t){var n=t[Tl];n===void 0&&(n=t[Tl]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Mo(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Jr]){e[Jr]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(nh.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,Mo("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(kc(t)){case 1:var i=gp;break;case 4:i=vp;break;default:i=xa}n=i.bind(null,t,n,e),i=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Qt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ac(function(){var c=o,g=ma(n),m=[];e:{var h=Oc.get(e);if(h!==void 0){var y=ka,x=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":y=Rp;break;case"focusin":x="focus",y=Ro;break;case"focusout":x="blur",y=Ro;break;case"beforeblur":case"afterblur":y=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Dp;break;case Rc:case $c:case Lc:y=Cp;break;case Dc:y=Ap;break;case"scroll":y=yp;break;case"wheel":y=Fp;break;case"copy":case"cut":case"paste":y=jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=js}var C=(t&4)!==0,R=!C&&e==="scroll",f=C?h!==null?h+"Capture":null:h;C=[];for(var u=c,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=yr(u,f),v!=null&&C.push(jr(u,v,p)))),R)break;u=u.return}0<C.length&&(h=new y(h,x,null,n,g),m.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==vl&&(x=n.relatedTarget||n.fromElement)&&(Qt(x)||x[ct]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Qt(x):null,x!==null&&(R=on(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(C=Cs,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=js,v="onPointerLeave",f="onPointerEnter",u="pointer"),R=y==null?h:hn(y),p=x==null?h:hn(x),h=new C(v,u+"leave",y,n,g),h.target=R,h.relatedTarget=p,v=null,Qt(g)===c&&(C=new C(f,u+"enter",x,n,g),C.target=p,C.relatedTarget=R,v=C),R=v,y&&x)t:{for(C=y,f=x,u=0,p=C;p;p=an(p))u++;for(p=0,v=f;v;v=an(v))p++;for(;0<u-p;)C=an(C),u--;for(;0<p-u;)f=an(f),p--;for(;u--;){if(C===f||f!==null&&C===f.alternate)break t;C=an(C),f=an(f)}C=null}else C=null;y!==null&&Os(m,h,y,C,!1),x!==null&&R!==null&&Os(m,R,x,C,!0)}}e:{if(h=c?hn(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var j=Yp;else if(zs(h))if(Pc)j=Zp;else{j=Kp;var E=Gp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Xp);if(j&&(j=j(e,c))){_c(m,j,n,g);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&fl(h,"number",h.value)}switch(E=c?hn(c):window,e){case"focusin":(zs(E)||E.contentEditable==="true")&&(fn=E,El=c,cr=null);break;case"focusout":cr=El=fn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,$s(m,n,g);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":$s(m,n,g)}var w;if(Ca)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else dn?Ec(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Cc&&n.locale!=="ko"&&(dn||z!=="onCompositionStart"?z==="onCompositionEnd"&&dn&&(w=Sc()):(St=g,wa="value"in St?St.value:St.textContent,dn=!0)),E=Ii(c,z),0<E.length&&(z=new Es(z,e,null,n,g),m.push({event:z,listeners:E}),w?z.data=w:(w=jc(n),w!==null&&(z.data=w)))),(w=Bp?Hp(e,n):Vp(e,n))&&(c=Ii(c,"onBeforeInput"),0<c.length&&(g=new Es("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=w))}Ac(m,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=yr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=yr(n,o),s!=null&&l.unshift(jr(n,s,a))):i||(s=yr(n,o),s!=null&&l.push(jr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var rh=/\r\n?/g,ih=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(rh,`
`).replace(ih,"")}function qr(e,t,n){if(t=As(t),As(e)!==t&&n)throw Error(k(425))}function Ri(){}var _l=null,Pl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,oh=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(ah)}:Nl;function ah(e){setTimeout(function(){throw e})}function Uo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);kr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Vn,_r="__reactProps$"+Vn,ct="__reactContainer$"+Vn,Tl="__reactEvents$"+Vn,sh="__reactListeners$"+Vn,uh="__reactHandles$"+Vn;function Qt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fs(e);e!==null;){if(n=e[qe])return n;e=Fs(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[qe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function io(e){return e[_r]||null}var Il=[],mn=-1;function Ot(e){return{current:e}}function W(e){0>mn||(e.current=Il[mn],Il[mn]=null,mn--)}function B(e,t){mn++,Il[mn]=e.current,e.current=t}var Lt={},de=Ot(Lt),ye=Ot(!1),qt=Lt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function $i(){W(ye),W(de)}function Us(e,t,n){if(de.current!==Lt)throw Error(k(168));B(de,t),B(ye,n)}function Fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Gf(e)||"Unknown",i));return K({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,qt=de.current,B(de,e),B(ye,ye.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Fc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,W(ye),W(de),B(de,e)):W(ye),B(ye,n)}var ot=null,oo=!1,Bo=!1;function Uc(e){ot===null?ot=[e]:ot.push(e)}function ch(e){oo=!0,Uc(e)}function At(){if(!Bo&&ot!==null){Bo=!0;var e=0,t=A;try{var n=ot;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,oo=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),dc(ga,At),i}finally{A=t,Bo=!1}}return null}var gn=[],vn=0,Di=null,Oi=0,Te=[],Ie=0,bt=null,lt=1,at="";function Vt(e,t){gn[vn++]=Oi,gn[vn++]=Di,Di=e,Oi=t}function Bc(e,t,n){Te[Ie++]=lt,Te[Ie++]=at,Te[Ie++]=bt,bt=e;var r=lt;e=at;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,lt=1<<32-Ve(t)+i|n<<i|r,at=o+e}else lt=1<<o|n<<i|r,at=e}function ja(e){e.return!==null&&(Vt(e,1),Bc(e,1,0))}function _a(e){for(;e===Di;)Di=gn[--vn],gn[vn]=null,Oi=gn[--vn],gn[vn]=null;for(;e===bt;)bt=Te[--Ie],Te[Ie]=null,at=Te[--Ie],Te[Ie]=null,lt=Te[--Ie],Te[Ie]=null}var _e=null,je=null,Q=!1,He=null;function Hc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,je=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:lt,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,je=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(Q){var t=je;if(t){var n=t;if(!Hs(e,t)){if(Rl(e))throw Error(k(418));t=Pt(n.nextSibling);var r=_e;t&&Hs(e,t)?Hc(r,n):(e.flags=e.flags&-4097|2,Q=!1,_e=e)}}else{if(Rl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,_e=e}}}function Vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function br(e){if(e!==_e)return!1;if(!Q)return Vs(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=je)){if(Rl(e))throw Vc(),Error(k(418));for(;t;)Hc(e,t),t=Pt(t.nextSibling)}if(Vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=_e?Pt(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=je;e;)e=Pt(e.nextSibling)}function Tn(){je=_e=null,Q=!1}function Pa(e){He===null?He=[e]:He.push(e)}var dh=pt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ws(e){var t=e._init;return t(e._payload)}function Wc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=It(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,v){return u===null||u.tag!==6?(u=Ko(p,f.mode,v),u.return=f,u):(u=i(u,p),u.return=f,u)}function s(f,u,p,v){var j=p.type;return j===cn?g(f,u,p.props.children,v,p.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&Ws(j)===u.type)?(v=i(u,p.props),v.ref=qn(f,u,p),v.return=f,v):(v=yi(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,u,p),v.return=f,v)}function c(f,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Xo(p,f.mode,v),u.return=f,u):(u=i(u,p.children||[]),u.return=f,u)}function g(f,u,p,v,j){return u===null||u.tag!==7?(u=Zt(p,f.mode,v,j),u.return=f,u):(u=i(u,p),u.return=f,u)}function m(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ko(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Vr:return p=yi(u.type,u.key,u.props,null,f.mode,p),p.ref=qn(f,null,u),p.return=f,p;case un:return u=Xo(u,f.mode,p),u.return=f,u;case yt:var v=u._init;return m(f,v(u._payload),p)}if(nr(u)||Gn(u))return u=Zt(u,f.mode,p,null),u.return=f,u;ei(f,u)}return null}function h(f,u,p,v){var j=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:a(f,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:return p.key===j?s(f,u,p,v):null;case un:return p.key===j?c(f,u,p,v):null;case yt:return j=p._init,h(f,u,j(p._payload),v)}if(nr(p)||Gn(p))return j!==null?null:g(f,u,p,v,null);ei(f,p)}return null}function y(f,u,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(u,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vr:return f=f.get(v.key===null?p:v.key)||null,s(u,f,v,j);case un:return f=f.get(v.key===null?p:v.key)||null,c(u,f,v,j);case yt:var E=v._init;return y(f,u,p,E(v._payload),j)}if(nr(v)||Gn(v))return f=f.get(p)||null,g(u,f,v,j,null);ei(u,v)}return null}function x(f,u,p,v){for(var j=null,E=null,w=u,z=u=0,U=null;w!==null&&z<p.length;z++){w.index>z?(U=w,w=null):U=w.sibling;var $=h(f,w,p[z],v);if($===null){w===null&&(w=U);break}e&&w&&$.alternate===null&&t(f,w),u=o($,u,z),E===null?j=$:E.sibling=$,E=$,w=U}if(z===p.length)return n(f,w),Q&&Vt(f,z),j;if(w===null){for(;z<p.length;z++)w=m(f,p[z],v),w!==null&&(u=o(w,u,z),E===null?j=w:E.sibling=w,E=w);return Q&&Vt(f,z),j}for(w=r(f,w);z<p.length;z++)U=y(w,f,z,p[z],v),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?z:U.key),u=o(U,u,z),E===null?j=U:E.sibling=U,E=U);return e&&w.forEach(function(ke){return t(f,ke)}),Q&&Vt(f,z),j}function C(f,u,p,v){var j=Gn(p);if(typeof j!="function")throw Error(k(150));if(p=j.call(p),p==null)throw Error(k(151));for(var E=j=null,w=u,z=u=0,U=null,$=p.next();w!==null&&!$.done;z++,$=p.next()){w.index>z?(U=w,w=null):U=w.sibling;var ke=h(f,w,$.value,v);if(ke===null){w===null&&(w=U);break}e&&w&&ke.alternate===null&&t(f,w),u=o(ke,u,z),E===null?j=ke:E.sibling=ke,E=ke,w=U}if($.done)return n(f,w),Q&&Vt(f,z),j;if(w===null){for(;!$.done;z++,$=p.next())$=m(f,$.value,v),$!==null&&(u=o($,u,z),E===null?j=$:E.sibling=$,E=$);return Q&&Vt(f,z),j}for(w=r(f,w);!$.done;z++,$=p.next())$=y(w,f,z,$.value,v),$!==null&&(e&&$.alternate!==null&&w.delete($.key===null?z:$.key),u=o($,u,z),E===null?j=$:E.sibling=$,E=$);return e&&w.forEach(function(Mt){return t(f,Mt)}),Q&&Vt(f,z),j}function R(f,u,p,v){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:e:{for(var j=p.key,E=u;E!==null;){if(E.key===j){if(j=p.type,j===cn){if(E.tag===7){n(f,E.sibling),u=i(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yt&&Ws(j)===E.type){n(f,E.sibling),u=i(E,p.props),u.ref=qn(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===cn?(u=Zt(p.props.children,f.mode,v,p.key),u.return=f,f=u):(v=yi(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,u,p),v.return=f,f=v)}return l(f);case un:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=i(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Xo(p,f.mode,v),u.return=f,f=u}return l(f);case yt:return E=p._init,R(f,u,E(p._payload),v)}if(nr(p))return x(f,u,p,v);if(Gn(p))return C(f,u,p,v);ei(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,p),u.return=f,f=u):(n(f,u),u=Ko(p,f.mode,v),u.return=f,f=u),l(f)):n(f,u)}return R}var In=Wc(!0),Qc=Wc(!1),Ai=Ot(null),Mi=null,yn=null,za=null;function Na(){za=yn=Mi=null}function Ta(e){var t=Ai.current;W(Ai),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Mi=e,za=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Mi===null)throw Error(k(308));yn=e,Mi.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Yt=null;function Ia(e){Yt===null?Yt=[e]:Yt.push(e)}function Yc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ia(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ia(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;l=0,g=c=s=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,C=a;switch(h=t,y=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){m=x.call(y,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,h=typeof x=="function"?x.call(y,m,h):x,h==null)break e;m=K({},m,h);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=m):g=g.next=y,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=m}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Mr={},tt=Ot(Mr),Pr=Ot(Mr),zr=Ot(Mr);function Gt(e){if(e===Mr)throw Error(k(174));return e}function $a(e,t){switch(B(zr,t),B(Pr,e),B(tt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}W(tt),B(tt,t)}function Rn(){W(tt),W(Pr),W(zr)}function Kc(e){Gt(zr.current);var t=Gt(tt.current),n=hl(t,e.type);t!==n&&(B(Pr,e),B(tt,n))}function La(e){Pr.current===e&&(W(tt),W(Pr))}var Y=Ot(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function Da(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var pi=pt.ReactCurrentDispatcher,Vo=pt.ReactCurrentBatchConfig,en=0,G=null,b=null,te=null,Bi=!1,dr=!1,Nr=0,fh=0;function ae(){throw Error(k(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,o){if(en=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,pi.current=e===null||e.memoizedState===null?gh:vh,e=n(r,i),dr){o=0;do{if(dr=!1,Nr=0,25<=o)throw Error(k(301));o+=1,te=b=null,t.updateQueue=null,pi.current=yh,e=n(r,i)}while(dr)}if(pi.current=Hi,t=b!==null&&b.next!==null,en=0,te=b=G=null,Bi=!1,t)throw Error(k(300));return e}function Ma(){var e=Nr!==0;return Nr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Oe(){if(b===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=te===null?G.memoizedState:te.next;if(t!==null)te=t,b=e;else{if(e===null)throw Error(k(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function Tr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=b,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var g=c.lane;if((en&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,G.lanes|=g,tn|=g}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Ye(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qo(e){var t=Oe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xc(){}function Zc(e,t){var n=G,r=Oe(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Fa(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,Ir(9,qc.bind(null,n,r,i,t),void 0,null),re===null)throw Error(k(349));en&30||Jc(n,t,i)}return i}function Jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qc(e,t,n,r){t.value=n,t.getSnapshot=r,ed(t)&&td(e)}function bc(e,t,n){return n(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function td(e){var t=dt(e,1);t!==null&&We(t,e,1,-1)}function Gs(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=mh.bind(null,G,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nd(){return Oe().memoizedState}function hi(e,t,n,r){var i=Ze();G.flags|=e,i.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(b!==null){var l=b.memoizedState;if(o=l.destroy,r!==null&&Oa(r,l.deps)){i.memoizedState=Ir(t,n,o,r);return}}G.flags|=e,i.memoizedState=Ir(1|t,n,o,r)}function Ks(e,t){return hi(8390656,8,e,t)}function Fa(e,t){return lo(2048,8,e,t)}function rd(e,t){return lo(4,2,e,t)}function id(e,t){return lo(4,4,e,t)}function od(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,od.bind(null,t,e),n)}function Ua(){}function ad(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ud(e,t,n){return en&21?(Ye(n,t)||(n=hc(),G.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function ph(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Vo.transition;Vo.transition={};try{e(!1),t()}finally{A=n,Vo.transition=r}}function cd(){return Oe().memoizedState}function hh(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dd(e))fd(t,n);else if(n=Yc(e,t,n,r),n!==null){var i=pe();We(n,e,r,i),pd(n,t,r)}}function mh(e,t,n){var r=Tt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dd(e))fd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,l)){var s=t.interleaved;s===null?(i.next=i,Ia(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Yc(e,t,i,r),n!==null&&(i=pe(),We(n,e,r,i),pd(n,t,r))}}function dd(e){var t=e.alternate;return e===G||t!==null&&t===G}function fd(e,t){dr=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var Hi={readContext:De,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},gh={readContext:De,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hi(4194308,4,od.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hh.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Gs,useDebugValue:Ua,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Gs(!1),t=e[0];return e=ph.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=Ze();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),re===null)throw Error(k(349));en&30||Jc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ks(bc.bind(null,r,o,e),[e]),r.flags|=2048,Ir(9,qc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ze(),t=re.identifierPrefix;if(Q){var n=at,r=lt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vh={readContext:De,useCallback:ad,useContext:De,useEffect:Fa,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:id,useMemo:sd,useReducer:Wo,useRef:nd,useState:function(){return Wo(Tr)},useDebugValue:Ua,useDeferredValue:function(e){var t=Oe();return ud(t,b.memoizedState,e)},useTransition:function(){var e=Wo(Tr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:cd,unstable_isNewReconciler:!1},yh={readContext:De,useCallback:ad,useContext:De,useEffect:Fa,useImperativeHandle:ld,useInsertionEffect:rd,useLayoutEffect:id,useMemo:sd,useReducer:Qo,useRef:nd,useState:function(){return Qo(Tr)},useDebugValue:Ua,useDeferredValue:function(e){var t=Oe();return b===null?t.memoizedState=e:ud(t,b.memoizedState,e)},useTransition:function(){var e=Qo(Tr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Xc,useSyncExternalStore:Zc,useId:cd,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Tt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=zt(e,o,i),t!==null&&(We(t,e,i,r),fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Tt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zt(e,o,i),t!==null&&(We(t,e,i,r),fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Tt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=zt(e,i,r),t!==null&&(We(t,e,r,n),fi(t,e,r))}};function Xs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,o):!0}function hd(e,t,n){var r=!1,i=Lt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(i=xe(t)?qt:de.current,r=t.contextTypes,o=(r=r!=null)?Nn(e,i):Lt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function Ol(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ra(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=De(o):(o=xe(t)?qt:de.current,i.context=Nn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ao.enqueueReplaceState(i,i.state,null),Fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=Yf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Yo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xh=typeof WeakMap=="function"?WeakMap:Map;function md(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wi||(Wi=!0,Gl=r),Al(e,t)},n}function gd(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Al(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$h.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var wh=pt.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?Qc(t,null,n,r):In(t,e.child,n,r)}function eu(e,t,n,r,i){n=n.render;var o=t.ref;return _n(t,i),r=Aa(e,t,n,r,o,i),n=Ma(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(Q&&n&&ja(t),t.flags|=1,fe(e,t,r,i),t.child)}function tu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ka(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vd(e,t,o,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ft(e,t,i)}return Ml(e,t,n,r,i)}function yd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(wn,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(wn,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(wn,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(wn,Ee),Ee|=r;return fe(e,t,i,n),t.child}function xd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,i){var o=xe(n)?qt:de.current;return o=Nn(t,o),_n(t,i),n=Aa(e,t,n,r,o,i),r=Ma(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(Q&&r&&ja(t),t.flags|=1,fe(e,t,n,i),t.child)}function nu(e,t,n,r,i){if(xe(n)){var o=!0;Li(t)}else o=!1;if(_n(t,i),t.stateNode===null)mi(e,t),hd(t,n,r),Ol(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=xe(n)?qt:de.current,c=Nn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Zs(t,l,r,c),xt=!1;var h=t.memoizedState;l.state=h,Fi(t,r,l,i),s=t.memoizedState,a!==r||h!==s||ye.current||xt?(typeof g=="function"&&(Dl(t,n,g,r),s=t.memoizedState),(a=xt||Xs(t,n,a,r,h,s,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),l.props=c,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=xe(n)?qt:de.current,s=Nn(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Zs(t,l,r,s),xt=!1,h=t.memoizedState,l.state=h,Fi(t,r,l,i);var x=t.memoizedState;a!==m||h!==x||ye.current||xt?(typeof y=="function"&&(Dl(t,n,y,r),x=t.memoizedState),(c=xt||Xs(t,n,c,r,h,x,s)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,o,i)}function Fl(e,t,n,r,i,o){xd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Bs(t,n,!1),ft(e,t,o);r=t.stateNode,wh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=In(t,e.child,null,o),t.child=In(t,null,a,o)):fe(e,t,a,o),t.memoizedState=r.state,i&&Bs(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),$a(e,t.containerInfo)}function ru(e,t,n,r,i){return Tn(),Pa(i),t.flags|=256,fe(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=co(l,r,0,null),e=Zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bl(n),t.memoizedState=Ul,e):Ba(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kh(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=It(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=It(a,o):(o=Zt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Bl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,n,r){return r!==null&&Pa(r),In(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Yo(Error(k(422))),ti(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=co({mode:"visible",children:r.children},i,0,null),o=Zt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&In(t,e.child,null,l),t.child.memoizedState=Bl(l),t.memoizedState=Ul,o);if(!(t.mode&1))return ti(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Yo(o,r,void 0),ti(e,t,l,r)}if(a=(l&e.childLanes)!==0,ve||a){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dt(e,i),We(r,e,i,-1))}return Ga(),r=Yo(Error(k(421))),ti(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,je=Pt(i.nextSibling),_e=t,Q=!0,He=null,e!==null&&(Te[Ie++]=lt,Te[Ie++]=at,Te[Ie++]=bt,lt=e.id,at=e.overflow,bt=t),t=Ba(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Go(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Sd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Go(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Go(t,!0,n,null,o);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sh(e,t,n){switch(t.tag){case 3:wd(t),Tn();break;case 5:Kc(t);break;case 1:xe(t.type)&&Li(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ai,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?kd(e,t,n):(B(Y,Y.current&1),e=ft(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,n)}return ft(e,t,n)}var Cd,Hl,Ed,jd;Cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};Ed=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(tt.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}ml(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};jd=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ch(e,t,n){var r=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return xe(t.type)&&$i(),se(t),null;case 3:return r=t.stateNode,Rn(),W(ye),W(de),Da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Zl(He),He=null))),Hl(e,t),se(t),null;case 5:La(t);var i=Gt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ed(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=Gt(tt.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[_r]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ir.length;i++)H(ir[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ps(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ms(r,o),H("invalid",r)}ml(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,a,e),i=["children",""+a]):gr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Wr(r),hs(r,o,!0);break;case"textarea":Wr(r),gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[_r]=r,Cd(e,t,!1,!1),t.stateNode=e;e:{switch(l=gl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<ir.length;i++)H(ir[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":ps(e,r),i=cl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":ms(e,r),i=pl(e,r),H("invalid",e);break;default:i=r}ml(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?nc(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ec(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vr(e,s):typeof s=="number"&&vr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&da(e,o,s,l))}switch(n){case"input":Wr(e),hs(e,r,!1);break;case"textarea":Wr(e),gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)jd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Gt(zr.current),Gt(tt.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return se(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))Vc(),Tn(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[qe]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else He!==null&&(Zl(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ee===0&&(ee=3):Ga())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Rn(),Hl(e,t),e===null&&Er(t.stateNode.containerInfo),se(t),null;case 10:return Ta(t.type._context),se(t),null;case 17:return xe(t.type)&&$i(),se(t),null;case 19:if(W(Y),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)bn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ui(e),l!==null){for(t.flags|=128,bn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>Ln&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return se(t),null}else 2*Z()-o.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Eh(e,t){switch(_a(t),t.tag){case 1:return xe(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),W(ye),W(de),Da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return La(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return Rn(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var ni=!1,ue=!1,jh=typeof WeakSet=="function"?WeakSet:Set,P=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){X(e,t,r)}}var ou=!1;function _h(e,t){if(_l=Ni,e=Tc(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,g=0,m=e,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++c===i&&(a=l),h===o&&++g===r&&(s=l),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Ni=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,R=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:Ue(t.type,C),R);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=ou,ou=!1,x}function fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vl(t,n,o)}i=i.next}while(i!==r)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _d(e){var t=e.alternate;t!==null&&(e.alternate=null,_d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[_r],delete t[Tl],delete t[sh],delete t[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pd(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var ie=null,Be=!1;function gt(e,t,n){for(n=n.child;n!==null;)zd(e,t,n),n=n.sibling}function zd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(eo,n)}catch{}switch(n.tag){case 5:ue||xn(n,t);case 6:var r=ie,i=Be;ie=null,gt(e,t,n),ie=r,Be=i,ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),kr(e)):Uo(ie,n.stateNode));break;case 4:r=ie,i=Be,ie=n.stateNode.containerInfo,Be=!0,gt(e,t,n),ie=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Vl(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!ue&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,gt(e,t,n),ue=r):gt(e,t,n);break;default:gt(e,t,n)}}function au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jh),t.forEach(function(r){var i=Dh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,Be=!1;break e;case 3:ie=a.stateNode.containerInfo,Be=!0;break e;case 4:ie=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(ie===null)throw Error(k(160));zd(o,l,i),ie=null,Be=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nd(t,e),t=t.sibling}function Nd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ke(e),r&4){try{fr(3,e,e.return),so(3,e)}catch(C){X(e,e.return,C)}try{fr(5,e,e.return)}catch(C){X(e,e.return,C)}}break;case 1:Fe(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Fe(t,e),Ke(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(C){X(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ju(i,o),gl(a,l);var c=gl(a,o);for(l=0;l<s.length;l+=2){var g=s[l],m=s[l+1];g==="style"?nc(i,m):g==="dangerouslySetInnerHTML"?ec(i,m):g==="children"?vr(i,m):da(i,g,m,c)}switch(a){case"input":dl(i,o);break;case"textarea":qu(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Sn(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[_r]=o}catch(C){X(e,e.return,C)}}break;case 6:if(Fe(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){X(e,e.return,C)}}break;case 3:if(Fe(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(C){X(e,e.return,C)}break;case 4:Fe(t,e),Ke(e);break;case 13:Fe(t,e),Ke(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wa=Z())),r&4&&au(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||g,Fe(t,e),ue=c):Fe(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(P=e,g=e.child;g!==null;){for(m=P=g;P!==null;){switch(h=P,y=h.child,h.tag){case 0:case 11:case 14:case 15:fr(4,h,h.return);break;case 1:xn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(C){X(r,n,C)}}break;case 5:xn(h,h.return);break;case 22:if(h.memoizedState!==null){uu(m);continue}}y!==null?(y.return=h,P=y):uu(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=tc("display",l))}catch(C){X(e,e.return,C)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){X(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fe(t,e),Ke(e),r&4&&au(e);break;case 21:break;default:Fe(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var o=lu(e);Yl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=lu(e);Ql(e,a,l);break;default:throw Error(k(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ph(e,t,n){P=e,Td(e)}function Td(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ni;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||ue;a=ni;var c=ue;if(ni=l,(ue=s)&&!c)for(P=i;P!==null;)l=P,s=l.child,l.tag===22&&l.memoizedState!==null?cu(i):s!==null?(s.return=l,P=s):cu(i);for(;o!==null;)P=o,Td(o),o=o.sibling;P=i,ni=a,ue=c}su(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):su(e)}}function su(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||so(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ys(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&kr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ue||t.flags&512&&Wl(t)}catch(h){X(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function uu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function cu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){X(t,i,s)}}var o=t.return;try{Wl(t)}catch(s){X(t,o,s)}break;case 5:var l=t.return;try{Wl(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var zh=Math.ceil,Vi=pt.ReactCurrentDispatcher,Ha=pt.ReactCurrentOwner,Le=pt.ReactCurrentBatchConfig,D=0,re=null,q=null,oe=0,Ee=0,wn=Ot(0),ee=0,Rr=null,tn=0,uo=0,Va=0,pr=null,ge=null,Wa=0,Ln=1/0,rt=null,Wi=!1,Gl=null,Nt=null,ri=!1,Ct=null,Qi=0,hr=0,Kl=null,gi=-1,vi=0;function pe(){return D&6?Z():gi!==-1?gi:gi=Z()}function Tt(e){return e.mode&1?D&2&&oe!==0?oe&-oe:dh.transition!==null?(vi===0&&(vi=hc()),vi):(e=A,e!==0||(e=window.event,e=e===void 0?16:kc(e.type)),e):1}function We(e,t,n,r){if(50<hr)throw hr=0,Kl=null,Error(k(185));Dr(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(uo|=n),ee===4&&kt(e,oe)),we(e,r),n===1&&D===0&&!(t.mode&1)&&(Ln=Z()+500,oo&&At()))}function we(e,t){var n=e.callbackNode;dp(e,t);var r=zi(e,e===re?oe:0);if(r===0)n!==null&&xs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xs(n),t===1)e.tag===0?ch(du.bind(null,e)):Uc(du.bind(null,e)),lh(function(){!(D&6)&&At()}),n=null;else{switch(mc(r)){case 1:n=ga;break;case 4:n=fc;break;case 16:n=Pi;break;case 536870912:n=pc;break;default:n=Pi}n=Md(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(gi=-1,vi=0,D&6)throw Error(k(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=zi(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yi(e,r);else{t=r;var i=D;D|=2;var o=$d();(re!==e||oe!==t)&&(rt=null,Ln=Z()+500,Xt(e,t));do try{Ih();break}catch(a){Rd(e,a)}while(!0);Na(),Vi.current=o,D=i,q!==null?t=0:(re=null,oe=0,t=ee)}if(t!==0){if(t===2&&(i=kl(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=Rr,Xt(e,0),kt(e,r),we(e,Z()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nh(i)&&(t=Yi(e,r),t===2&&(o=kl(e),o!==0&&(r=o,t=Xl(e,o))),t===1))throw n=Rr,Xt(e,0),kt(e,r),we(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wt(e,ge,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Wa+500-Z(),10<t)){if(zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(Wt.bind(null,e,ge,rt),t);break}Wt(e,ge,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zh(r/1960))-r,10<r){e.timeoutHandle=Nl(Wt.bind(null,e,ge,rt),r);break}Wt(e,ge,rt);break;case 5:Wt(e,ge,rt);break;default:throw Error(k(329))}}}return we(e,Z()),e.callbackNode===n?Id.bind(null,e):null}function Xl(e,t){var n=pr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=ge,ge=n,t!==null&&Zl(t)),e}function Zl(e){ge===null?ge=e:ge.push.apply(ge,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Va,t&=~uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(D&6)throw Error(k(327));Pn();var t=zi(e,0);if(!(t&1))return we(e,Z()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=kl(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=Rr,Xt(e,0),kt(e,t),we(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ge,rt),we(e,Z()),null}function Qa(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(Ln=Z()+500,oo&&At())}}function nn(e){Ct!==null&&Ct.tag===0&&!(D&6)&&Pn();var t=D;D|=1;var n=Le.transition,r=A;try{if(Le.transition=null,A=1,e)return e()}finally{A=r,Le.transition=n,D=t,!(D&6)&&At()}}function Ya(){Ee=wn.current,W(wn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oh(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(_a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:Rn(),W(ye),W(de),Da();break;case 5:La(r);break;case 4:Rn();break;case 13:W(Y);break;case 19:W(Y);break;case 10:Ta(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(re=e,q=e=It(e.current,null),oe=Ee=t,ee=0,Rr=null,Va=uo=tn=0,ge=pr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function Rd(e,t){do{var n=q;try{if(Na(),pi.current=Hi,Bi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bi=!1}if(en=0,te=b=G=null,dr=!1,Nr=0,Ha.current=null,n===null||n.return===null){ee=1,Rr=t,q=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=qs(l);if(y!==null){y.flags&=-257,bs(y,l,a,o,t),y.mode&1&&Js(o,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var C=new Set;C.add(s),t.updateQueue=C}else x.add(s);break e}else{if(!(t&1)){Js(o,c,t),Ga();break e}s=Error(k(426))}}else if(Q&&a.mode&1){var R=qs(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),bs(R,l,a,o,t),Pa($n(s,a));break e}}o=s=$n(s,a),ee!==4&&(ee=2),pr===null?pr=[o]:pr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=md(o,s,t);Qs(o,f);break e;case 1:a=s;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Nt===null||!Nt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=gd(o,a,t);Qs(o,v);break e}}o=o.return}while(o!==null)}Dd(n)}catch(j){t=j,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function $d(){var e=Vi.current;return Vi.current=Hi,e===null?Hi:e}function Ga(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(tn&268435455)&&!(uo&268435455)||kt(re,oe)}function Yi(e,t){var n=D;D|=2;var r=$d();(re!==e||oe!==t)&&(rt=null,Xt(e,t));do try{Th();break}catch(i){Rd(e,i)}while(!0);if(Na(),D=n,Vi.current=r,q!==null)throw Error(k(261));return re=null,oe=0,ee}function Th(){for(;q!==null;)Ld(q)}function Ih(){for(;q!==null&&!np();)Ld(q)}function Ld(e){var t=Ad(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?Dd(e):q=t,Ha.current=null}function Dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Eh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=Ch(n,t,Ee),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Wt(e,t,n){var r=A,i=Le.transition;try{Le.transition=null,A=1,Rh(e,t,n,r)}finally{Le.transition=i,A=r}return null}function Rh(e,t,n,r){do Pn();while(Ct!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fp(e,o),e===re&&(q=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,Md(Pi,function(){return Pn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var l=A;A=1;var a=D;D|=4,Ha.current=null,_h(e,n),Nd(n,e),qp(Pl),Ni=!!_l,Pl=_l=null,e.current=n,Ph(n),rp(),D=a,A=l,Le.transition=o}else e.current=n;if(ri&&(ri=!1,Ct=e,Qi=i),o=e.pendingLanes,o===0&&(Nt=null),lp(n.stateNode),we(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wi)throw Wi=!1,e=Gl,Gl=null,e;return Qi&1&&e.tag!==0&&Pn(),o=e.pendingLanes,o&1?e===Kl?hr++:(hr=0,Kl=e):hr=0,At(),null}function Pn(){if(Ct!==null){var e=mc(Qi),t=Le.transition,n=A;try{if(Le.transition=null,A=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Qi=0,D&6)throw Error(k(331));var i=D;for(D|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(P=c;P!==null;){var g=P;switch(g.tag){case 0:case 11:case 15:fr(8,g,o)}var m=g.child;if(m!==null)m.return=g,P=m;else for(;P!==null;){g=P;var h=g.sibling,y=g.return;if(_d(g),g===c){P=null;break}if(h!==null){h.return=y,P=h;break}P=y}}}var x=o.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var R=C.sibling;C.sibling=null,C=R}while(C!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var u=e.current;for(P=u;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:so(9,a)}}catch(j){X(a,a.return,j)}if(a===l){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(D=i,At(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(eo,e)}catch{}r=!0}return r}finally{A=n,Le.transition=t}}return!1}function fu(e,t,n){t=$n(n,t),t=md(e,t,1),e=zt(e,t,1),t=pe(),e!==null&&(Dr(e,1,t),we(e,t))}function X(e,t,n){if(e.tag===3)fu(e,e,n);else for(;t!==null;){if(t.tag===3){fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nt===null||!Nt.has(r))){e=$n(n,e),e=gd(t,e,1),t=zt(t,e,1),e=pe(),t!==null&&(Dr(t,1,e),we(t,e));break}}t=t.return}}function $h(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(ee===4||ee===3&&(oe&130023424)===oe&&500>Z()-Wa?Xt(e,0):Va|=n),we(e,t)}function Od(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var n=pe();e=dt(e,t),e!==null&&(Dr(e,t,n),we(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Od(e,n)}function Dh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Od(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Sh(e,t,n);ve=!!(e.flags&131072)}else ve=!1,Q&&t.flags&1048576&&Bc(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mi(e,t),e=t.pendingProps;var i=Nn(t,de.current);_n(t,n),i=Aa(null,t,r,e,i,n);var o=Ma();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Li(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ra(t),i.updater=ao,t.stateNode=i,i._reactInternals=t,Ol(t,r,e,n),t=Fl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ja(t),fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ah(r),e=Ue(r,e),i){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=nu(null,t,r,e,n);break e;case 11:t=eu(null,t,r,e,n);break e;case 14:t=tu(null,t,r,Ue(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),Ml(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),nu(e,t,r,i,n);case 3:e:{if(wd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gc(e,t),Fi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$n(Error(k(423)),t),t=ru(e,t,r,n,i);break e}else if(r!==i){i=$n(Error(k(424)),t),t=ru(e,t,r,n,i);break e}else for(je=Pt(t.stateNode.containerInfo.firstChild),_e=t,Q=!0,He=null,n=Qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=ft(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Kc(t),e===null&&$l(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,zl(r,i)?l=null:o!==null&&zl(r,o)&&(t.flags|=32),xd(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&$l(t),null;case 13:return kd(e,t,n);case 4:return $a(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),eu(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B(Ai,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!ye.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=st(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ll(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ll(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=De(i),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),tu(e,t,r,i,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),mi(e,t),t.tag=1,xe(r)?(e=!0,Li(t)):e=!1,_n(t,n),hd(t,r,i),Ol(t,r,i,n),Fl(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return yd(e,t,n)}throw Error(k(156,t.tag))};function Md(e,t){return dc(e,t)}function Oh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new Oh(e,t,n,r)}function Ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ah(e){if(typeof e=="function")return Ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pa)return 11;if(e===ha)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Zt(n.children,i,o,t);case fa:l=8,i|=8;break;case ll:return e=Re(12,n,t,i|2),e.elementType=ll,e.lanes=o,e;case al:return e=Re(13,n,t,i),e.elementType=al,e.lanes=o,e;case sl:return e=Re(19,n,t,i),e.elementType=sl,e.lanes=o,e;case Ku:return co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yu:l=10;break e;case Gu:l=9;break e;case pa:l=11;break e;case ha:l=14;break e;case yt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Re(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function co(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Xo(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,i,o,l,a,s){return e=new Mh(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Re(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(o),e}function Fh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fd(e){if(!e)return Lt;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Fc(e,n,t)}return t}function Ud(e,t,n,r,i,o,l,a,s){return e=Xa(n,r,!0,e,i,o,l,a,s),e.context=Fd(null),n=e.current,r=pe(),i=Tt(n),o=st(r,i),o.callback=t??null,zt(n,o,i),e.current.lanes=i,Dr(e,i,r),we(e,r),e}function fo(e,t,n,r){var i=t.current,o=pe(),l=Tt(i);return n=Fd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(i,t,l),e!==null&&(We(e,i,l,o),fi(e,i,l)),l}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Za(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function Uh(){return null}var Bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}po.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));fo(e,t,null,null)};po.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){fo(null,e,null,null)}),t[ct]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var t=yc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&wc(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hu(){}function Bh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Gi(l);o.call(c)}}var l=Ud(t,r,e,0,null,!1,!1,"",hu);return e._reactRootContainer=l,e[ct]=l.current,Er(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Gi(s);a.call(c)}}var s=Xa(e,0,!1,null,null,!1,!1,"",hu);return e._reactRootContainer=s,e[ct]=s.current,Er(e.nodeType===8?e.parentNode:e),nn(function(){fo(t,s,n,r)}),s}function mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Gi(l);a.call(s)}}fo(t,l,e,i)}else l=Bh(n,t,e,i,r);return Gi(l)}gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=rr(t.pendingLanes);n!==0&&(va(t,n|1),we(t,Z()),!(D&6)&&(Ln=Z()+500,At()))}break;case 13:nn(function(){var r=dt(e,1);if(r!==null){var i=pe();We(r,e,1,i)}}),Za(e,1)}};ya=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=pe();We(t,e,134217728,n)}Za(e,134217728)}};vc=function(e){if(e.tag===13){var t=Tt(e),n=dt(e,t);if(n!==null){var r=pe();We(n,e,t,r)}Za(e,t)}};yc=function(){return A};xc=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};yl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=io(r);if(!i)throw Error(k(90));Zu(r),dl(r,i)}}}break;case"textarea":qu(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};oc=Qa;lc=nn;var Hh={usingClientEntryPoint:!1,Events:[Ar,hn,io,rc,ic,Qa]},er={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vh={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||Uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{eo=ii.inject(Vh),et=ii}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hh;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(k(200));return Fh(e,t,null,n)};ze.createRoot=function(e,t){if(!qa(e))throw Error(k(299));var n=!1,r="",i=Bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,Er(e.nodeType===8?e.parentNode:e),new Ja(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=uc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return nn(e)};ze.hydrate=function(e,t,n){if(!ho(t))throw Error(k(200));return mo(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Bd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ud(t,null,e,1,n??null,i,!1,o,l),e[ct]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new po(t)};ze.render=function(e,t,n){if(!ho(t))throw Error(k(200));return mo(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!ho(e))throw Error(k(40));return e._reactRootContainer?(nn(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};ze.unstable_batchedUpdates=Qa;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ho(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return mo(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd)}catch(e){console.error(e)}}Hd(),Hu.exports=ze;var Wh=Hu.exports,mu=Wh;il.createRoot=mu.createRoot,il.hydrateRoot=mu.hydrateRoot;const Qh=$e.createContext(),Yh=({children:e})=>($e.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark")},[]),d.jsx(Qh.Provider,{value:{isDark:!0},children:e}));var ce=function(){return ce=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ce.apply(this,arguments)};function Dn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",mr="-moz-",O="-webkit-",Vd="comm",go="rule",ba="decl",Gh="@import",Wd="@keyframes",Kh="@layer",Qd=Math.abs,es=String.fromCharCode,Jl=Object.assign;function Xh(e,t){return ne(e,0)^45?(((t<<2^ne(e,0))<<2^ne(e,1))<<2^ne(e,2))<<2^ne(e,3):0}function Yd(e){return e.trim()}function it(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function xi(e,t,n){return e.indexOf(t,n)}function ne(e,t){return e.charCodeAt(t)|0}function On(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Gd(e){return e.length}function or(e,t){return t.push(e),e}function Zh(e,t){return e.map(t).join("")}function gu(e,t){return e.filter(function(n){return!it(n,t)})}var vo=1,An=1,Kd=0,Ae=0,J=0,Wn="";function yo(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:vo,column:An,length:l,return:"",siblings:a}}function vt(e,t){return Jl(yo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sn(e){for(;e.root;)e=vt(e.root,{children:[e]});or(e,e.siblings)}function Jh(){return J}function qh(){return J=Ae>0?ne(Wn,--Ae):0,An--,J===10&&(An=1,vo--),J}function Qe(){return J=Ae<Kd?ne(Wn,Ae++):0,An++,J===10&&(An=1,vo++),J}function Jt(){return ne(Wn,Ae)}function wi(){return Ae}function xo(e,t){return On(Wn,e,t)}function ql(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bh(e){return vo=An=1,Kd=Je(Wn=e),Ae=0,[]}function em(e){return Wn="",e}function Zo(e){return Yd(xo(Ae-1,bl(e===91?e+2:e===40?e+1:e)))}function tm(e){for(;(J=Jt())&&J<33;)Qe();return ql(e)>2||ql(J)>3?"":" "}function nm(e,t){for(;--t&&Qe()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return xo(e,wi()+(t<6&&Jt()==32&&Qe()==32))}function bl(e){for(;Qe();)switch(J){case e:return Ae;case 34:case 39:e!==34&&e!==39&&bl(J);break;case 40:e===41&&bl(e);break;case 92:Qe();break}return Ae}function rm(e,t){for(;Qe()&&e+J!==57;)if(e+J===84&&Jt()===47)break;return"/*"+xo(t,Ae-1)+"*"+es(e===47?e:Qe())}function im(e){for(;!ql(Jt());)Qe();return xo(e,Ae)}function om(e){return em(ki("",null,null,null,[""],e=bh(e),0,[0],e))}function ki(e,t,n,r,i,o,l,a,s){for(var c=0,g=0,m=l,h=0,y=0,x=0,C=1,R=1,f=1,u=0,p="",v=i,j=o,E=r,w=p;R;)switch(x=u,u=Qe()){case 40:if(x!=108&&ne(w,m-1)==58){xi(w+=I(Zo(u),"&","&\f"),"&\f",Qd(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:w+=Zo(u);break;case 9:case 10:case 13:case 32:w+=tm(x);break;case 92:w+=nm(wi()-1,7);continue;case 47:switch(Jt()){case 42:case 47:or(lm(rm(Qe(),wi()),t,n,s),s);break;default:w+="/"}break;case 123*C:a[c++]=Je(w)*f;case 125*C:case 59:case 0:switch(u){case 0:case 125:R=0;case 59+g:f==-1&&(w=I(w,/\f/g,"")),y>0&&Je(w)-m&&or(y>32?yu(w+";",r,n,m-1,s):yu(I(w," ","")+";",r,n,m-2,s),s);break;case 59:w+=";";default:if(or(E=vu(w,t,n,c,g,i,a,p,v=[],j=[],m,o),o),u===123)if(g===0)ki(w,t,E,E,v,o,m,a,j);else switch(h===99&&ne(w,3)===110?100:h){case 100:case 108:case 109:case 115:ki(e,E,E,r&&or(vu(e,E,E,0,0,i,a,p,i,v=[],m,j),j),i,j,m,a,r?v:j);break;default:ki(w,E,E,E,[""],j,0,a,j)}}c=g=y=0,C=f=1,p=w="",m=l;break;case 58:m=1+Je(w),y=x;default:if(C<1){if(u==123)--C;else if(u==125&&C++==0&&qh()==125)continue}switch(w+=es(u),u*C){case 38:f=g>0?1:(w+="\f",-1);break;case 44:a[c++]=(Je(w)-1)*f,f=1;break;case 64:Jt()===45&&(w+=Zo(Qe())),h=Jt(),g=m=Je(p=w+=im(wi())),u++;break;case 45:x===45&&Je(w)==2&&(C=0)}}return o}function vu(e,t,n,r,i,o,l,a,s,c,g,m){for(var h=i-1,y=i===0?o:[""],x=Gd(y),C=0,R=0,f=0;C<r;++C)for(var u=0,p=On(e,h+1,h=Qd(R=l[C])),v=e;u<x;++u)(v=Yd(R>0?y[u]+" "+p:I(p,/&\f/g,y[u])))&&(s[f++]=v);return yo(e,t,n,i===0?go:a,s,c,g,m)}function lm(e,t,n,r){return yo(e,t,n,Vd,es(Jh()),On(e,2,-2),0,r)}function yu(e,t,n,r,i){return yo(e,t,n,ba,On(e,0,r),On(e,r+1,-1),r,i)}function Xd(e,t,n){switch(Xh(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return mr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+mr+e+V+e+e;case 5936:switch(ne(e,t+11)){case 114:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+V+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+V+e+e;case 6165:return O+e+V+"flex-"+e+e;case 5187:return O+e+I(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return O+e+V+"flex-item-"+I(e,/flex-|-self/g,"")+(it(e,/flex-|baseline/)?"":V+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return O+e+V+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+V+I(e,"shrink","negative")+e;case 5292:return O+e+V+I(e,"basis","preferred-size")+e;case 6060:return O+"box-"+I(e,"-grow","")+O+e+V+I(e,"grow","positive")+e;case 4554:return O+I(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!it(e,/flex-|baseline/))return V+"grid-column-align"+On(e,t)+e;break;case 2592:case 3360:return V+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,it(r.props,/grid-\w+-end/)})?~xi(e+(n=n[t].value),"span",0)?e:V+I(e,"-start","")+e+V+"grid-row-span:"+(~xi(n,"span",0)?it(n,/\d+/):+it(n,/\d+/)-+it(e,/\d+/))+";":V+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return it(r.props,/grid-\w+-start/)})?e:V+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ne(e,t+1)){case 109:if(ne(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+mr+(ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xi(e,"stretch",0)?Xd(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return V+i+":"+o+c+(l?V+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(ne(e,t+6)===121)return I(e,":",":"+O)+e;break;case 6444:switch(ne(e,ne(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(ne(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+V+"$2box$3")+e;case 100:return I(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Ki(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function am(e,t,n,r){switch(e.type){case Kh:if(e.children.length)break;case Gh:case ba:return e.return=e.return||e.value;case Vd:return"";case Wd:return e.return=e.value+"{"+Ki(e.children,r)+"}";case go:if(!Je(e.value=e.props.join(",")))return""}return Je(n=Ki(e.children,r))?e.return=e.value+"{"+n+"}":""}function sm(e){var t=Gd(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function um(e){return function(t){t.root||(t=t.return)&&e(t)}}function cm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ba:e.return=Xd(e.value,e.length,n);return;case Wd:return Ki([vt(e,{value:I(e.value,"@","@"+O)})],r);case go:if(e.length)return Zh(n=e.props,function(i){switch(it(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(vt(e,{props:[I(i,/:(read-\w+)/,":"+mr+"$1")]})),sn(vt(e,{props:[i]})),Jl(e,{props:gu(n,r)});break;case"::placeholder":sn(vt(e,{props:[I(i,/:(plac\w+)/,":"+O+"input-$1")]})),sn(vt(e,{props:[I(i,/:(plac\w+)/,":"+mr+"$1")]})),sn(vt(e,{props:[I(i,/:(plac\w+)/,V+"input-$1")]})),sn(vt(e,{props:[i]})),Jl(e,{props:gu(n,r)});break}return""})}}var dm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},Mn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Zd="active",Jd="data-styled-version",wo="6.1.18",ts=`/*!sc*/
`,Xi=typeof window<"u"&&typeof document<"u",fm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),pm={},ko=Object.freeze([]),Fn=Object.freeze({});function qd(e,t,n){return n===void 0&&(n=Fn),e.theme!==n.theme&&e.theme||t||n.theme}var bd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mm=/(^-|-$)/g;function xu(e){return e.replace(hm,"-").replace(mm,"")}var gm=/(a)(d)/gi,oi=52,wu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ea(e){var t,n="";for(t=Math.abs(e);t>oi;t=t/oi|0)n=wu(t%oi)+n;return(wu(t%oi)+n).replace(gm,"$1-$2")}var Jo,ef=5381,kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tf=function(e){return kn(ef,e)};function ns(e){return ea(tf(e)>>>0)}function vm(e){return e.displayName||e.name||"Component"}function qo(e){return typeof e=="string"&&!0}var nf=typeof Symbol=="function"&&Symbol.for,rf=nf?Symbol.for("react.memo"):60115,ym=nf?Symbol.for("react.forward_ref"):60112,xm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},of={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},km=((Jo={})[ym]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jo[rf]=of,Jo);function ku(e){return("type"in(t=e)&&t.type.$$typeof)===rf?of:"$$typeof"in e?km[e.$$typeof]:xm;var t}var Sm=Object.defineProperty,Cm=Object.getOwnPropertyNames,Su=Object.getOwnPropertySymbols,Em=Object.getOwnPropertyDescriptor,jm=Object.getPrototypeOf,Cu=Object.prototype;function lf(e,t,n){if(typeof t!="string"){if(Cu){var r=jm(t);r&&r!==Cu&&lf(e,r,n)}var i=Cm(t);Su&&(i=i.concat(Su(t)));for(var o=ku(e),l=ku(t),a=0;a<i.length;++a){var s=i[a];if(!(s in wm||n&&n[s]||l&&s in l||o&&s in o)){var c=Em(t,s);try{Sm(e,s,c)}catch{}}}}return e}function Un(e){return typeof e=="function"}function rs(e){return typeof e=="object"&&"styledComponentId"in e}function Kt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zi(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function $r(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ta(e,t,n){if(n===void 0&&(n=!1),!n&&!$r(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ta(e[r],t[r]);else if($r(t))for(var r in t)e[r]=ta(e[r],t[r]);return e}function is(e,t){Object.defineProperty(e,"toString",{value:t})}function Fr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _m=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(ts);return n},e}(),Si=new Map,Ji=new Map,Ci=1,li=function(e){if(Si.has(e))return Si.get(e);for(;Ji.has(Ci);)Ci++;var t=Ci++;return Si.set(e,t),Ji.set(t,e),t},Pm=function(e,t){Ci=t+1,Si.set(e,t),Ji.set(t,e)},zm="style[".concat(Mn,"][").concat(Jd,'="').concat(wo,'"]'),Nm=new RegExp("^".concat(Mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tm=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Im=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ts),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(Nm);if(s){var c=0|parseInt(s[1],10),g=s[2];c!==0&&(Pm(g,c),Tm(e,g,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Eu=function(e){for(var t=document.querySelectorAll(zm),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Mn)!==Zd&&(Im(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Rm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var af=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Mn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Mn,Zd),r.setAttribute(Jd,wo);var l=Rm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},$m=function(){function e(t){this.element=af(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Lm=function(){function e(t){this.element=af(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ju=Xi,Om={isServer:!Xi,useCSSOMInjection:!fm},qi=function(){function e(t,n,r){t===void 0&&(t=Fn),n===void 0&&(n={});var i=this;this.options=ce(ce({},Om),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xi&&ju&&(ju=!1,Eu(this)),is(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",c=function(m){var h=function(f){return Ji.get(f)}(m);if(h===void 0)return"continue";var y=o.names.get(h),x=l.getGroup(m);if(y===void 0||!y.size||x.length===0)return"continue";var C="".concat(Mn,".g").concat(m,'[id="').concat(h,'"]'),R="";y!==void 0&&y.forEach(function(f){f.length>0&&(R+="".concat(f,","))}),s+="".concat(x).concat(C,'{content:"').concat(R,'"}').concat(ts)},g=0;g<a;g++)c(g);return s}(i)})}return e.registerId=function(t){return li(t)},e.prototype.rehydrate=function(){!this.server&&Xi&&Eu(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ce(ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Dm(i):r?new $m(i):new Lm(i)}(this.options),new _m(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(li(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(li(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(li(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Am=/&/g,Mm=/^\s*\/\/.*$/gm;function sf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sf(n.children,t)),n})}function Fm(e){var t,n,r,i=Fn,o=i.options,l=o===void 0?Fn:o,a=i.plugins,s=a===void 0?ko:a,c=function(h,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},g=s.slice();g.push(function(h){h.type===go&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Am,n).replace(r,c))}),l.prefix&&g.push(cm),g.push(am);var m=function(h,y,x,C){y===void 0&&(y=""),x===void 0&&(x=""),C===void 0&&(C="&"),t=C,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var R=h.replace(Mm,""),f=om(x||y?"".concat(x," ").concat(y," { ").concat(R," }"):R);l.namespace&&(f=sf(f,l.namespace));var u=[];return Ki(f,sm(g.concat(um(function(p){return u.push(p)})))),u};return m.hash=s.length?s.reduce(function(h,y){return y.name||Fr(15),kn(h,y.name)},ef).toString():"",m}var Um=new qi,na=Fm(),uf=be.createContext({shouldForwardProp:void 0,styleSheet:Um,stylis:na});uf.Consumer;be.createContext(void 0);function ra(){return $e.useContext(uf)}var cf=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=na);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,is(this,function(){throw Fr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=na),this.name+t.hash},e}(),Bm=function(e){return e>="A"&&e<="Z"};function _u(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Bm(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var df=function(e){return e==null||e===!1||e===""},ff=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!df(o)&&(Array.isArray(o)&&o.isCss||Un(o)?r.push("".concat(_u(i),":"),o,";"):$r(o)?r.push.apply(r,Dn(Dn(["".concat(i," {")],ff(o),!1),["}"],!1)):r.push("".concat(_u(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in dm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rt(e,t,n,r){if(df(e))return[];if(rs(e))return[".".concat(e.styledComponentId)];if(Un(e)){if(!Un(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Rt(i,t,n,r)}var o;return e instanceof cf?n?(e.inject(n,r),[e.getName(r)]):[e]:$r(e)?ff(e):Array.isArray(e)?Array.prototype.concat.apply(ko,e.map(function(l){return Rt(l,t,n,r)})):[e.toString()]}function pf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!rs(n))return!1}return!0}var Hm=tf(wo),Vm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pf(t),this.componentId=n,this.baseHash=kn(Hm,n),this.baseStyle=r,qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Kt(i,this.staticRulesId);else{var o=Zi(Rt(this.rules,t,n,r)),l=ea(kn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Kt(i,l),this.staticRulesId=l}else{for(var s=kn(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var m=this.rules[g];if(typeof m=="string")c+=m;else if(m){var h=Zi(Rt(m,t,n,r));s=kn(s,h+g),c+=h}}if(c){var y=ea(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Kt(i,y)}}return i},e}(),os=be.createContext(void 0);os.Consumer;var bo={};function Wm(e,t,n){var r=rs(e),i=e,o=!qo(e),l=t.attrs,a=l===void 0?ko:l,s=t.componentId,c=s===void 0?function(v,j){var E=typeof v!="string"?"sc":xu(v);bo[E]=(bo[E]||0)+1;var w="".concat(E,"-").concat(ns(wo+E+bo[E]));return j?"".concat(j,"-").concat(w):w}(t.displayName,t.parentComponentId):s,g=t.displayName,m=g===void 0?function(v){return qo(v)?"styled.".concat(v):"Styled(".concat(vm(v),")")}(e):g,h=t.displayName&&t.componentId?"".concat(xu(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;x=function(v,j){return C(v,j)&&R(v,j)}}else x=C}var f=new Vm(n,h,r?i.componentStyle:void 0);function u(v,j){return function(E,w,z){var U=E.attrs,$=E.componentStyle,ke=E.defaultProps,Mt=E.foldedComponentIds,Ft=E.styledComponentId,Ur=E.target,So=be.useContext(os),Qn=ra(),Ut=E.shouldForwardProp||Qn.shouldForwardProp,_=qd(w,So,ke)||Fn,N=function(ht,Se,nt){for(var Yn,Ht=ce(ce({},Se),{className:void 0,theme:nt}),Co=0;Co<ht.length;Co+=1){var Br=Un(Yn=ht[Co])?Yn(Ht):Yn;for(var mt in Br)Ht[mt]=mt==="className"?Kt(Ht[mt],Br[mt]):mt==="style"?ce(ce({},Ht[mt]),Br[mt]):Br[mt]}return Se.className&&(Ht.className=Kt(Ht.className,Se.className)),Ht}(U,w,_),T=N.as||Ur,M={};for(var F in N)N[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&N.theme===_||(F==="forwardedAs"?M.as=N.forwardedAs:Ut&&!Ut(F,T)||(M[F]=N[F]));var Bt=function(ht,Se){var nt=ra(),Yn=ht.generateAndInjectStyles(Se,nt.styleSheet,nt.stylis);return Yn}($,N),Me=Kt(Mt,Ft);return Bt&&(Me+=" "+Bt),N.className&&(Me+=" "+N.className),M[qo(T)&&!bd.has(T)?"class":"className"]=Me,z&&(M.ref=z),$e.createElement(T,M)}(p,v,j)}u.displayName=m;var p=be.forwardRef(u);return p.attrs=y,p.componentStyle=f,p.displayName=m,p.shouldForwardProp=x,p.foldedComponentIds=r?Kt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=h,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(j){for(var E=[],w=1;w<arguments.length;w++)E[w-1]=arguments[w];for(var z=0,U=E;z<U.length;z++)ta(j,U[z],!0);return j}({},i.defaultProps,v):v}}),is(p,function(){return".".concat(p.styledComponentId)}),o&&lf(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Pu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var zu=function(e){return Object.assign(e,{isCss:!0})};function ls(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||$r(e))return zu(Rt(Pu(ko,Dn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Rt(r):zu(Rt(Pu(r,t)))}function ia(e,t,n){if(n===void 0&&(n=Fn),!t)throw Fr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,ls.apply(void 0,Dn([i],o,!1)))};return r.attrs=function(i){return ia(e,t,ce(ce({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ia(e,t,ce(ce({},n),i))},r}var hf=function(e){return ia(Wm,e)},S=hf;bd.forEach(function(e){S[e]=hf(e)});var Qm=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pf(t),qi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Zi(Rt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&qi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ym(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ls.apply(void 0,Dn([e],t,!1)),i="sc-global-".concat(ns(JSON.stringify(r))),o=new Qm(r,i),l=function(s){var c=ra(),g=be.useContext(os),m=be.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(m,s,c.styleSheet,g,c.stylis),be.useLayoutEffect(function(){if(!c.styleSheet.server)return a(m,s,c.styleSheet,g,c.stylis),function(){return o.removeStyles(m,c.styleSheet)}},[m,s,c.styleSheet,g,c.stylis]),null};function a(s,c,g,m,h){if(o.isStatic)o.renderStyles(s,pm,g,h);else{var y=ce(ce({},c),{theme:qd(c,m,l.defaultProps)});o.renderStyles(s,y,g,h)}}return be.memo(l)}function mf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zi(ls.apply(void 0,Dn([e],t,!1))),i=ns(r);return new cf(i,r)}const Gm=Ym`
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
`,Km=mf`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Xm=S.a`
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
    animation: ${Km} 3s linear infinite;
    border-color: transparent;
    color: var(--background);
    
    /* Add a glow effect */
    box-shadow: 0 4px 15px rgba(255, 230, 128, 0.2);
  }

  /* Ensure text remains readable on all gradient colors */
  mix-blend-mode: difference;
`,Ge=({href:e,children:t,...n})=>d.jsx(Xm,{href:e,...n,children:t}),Zm=S.header`
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
`,Jm=S.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
`,qm=S(Ge)`
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
`,bm=S.div`
  display: flex;
  gap: var(--space-xl);
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,eg=S.div`
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
`,Xe=S(Ge)`
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
`,tg=S.button`
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
`,ng=()=>{const[e,t]=$e.useState(!1),[n,r]=$e.useState(!1);$e.useEffect(()=>{const o=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const i=o=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth"}),r(!1))};return d.jsxs(Zm,{isScrolled:e,children:[d.jsxs(Jm,{children:[d.jsx(qm,{href:"#",onClick:o=>{o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:"AV"}),d.jsxs(bm,{children:[d.jsx(Xe,{href:"#about",onClick:o=>{o.preventDefault(),i("about")},children:"About"}),d.jsx(Xe,{href:"#projects",onClick:o=>{o.preventDefault(),i("projects")},children:"Projects"}),d.jsx(Xe,{href:"#resume",onClick:o=>{o.preventDefault(),i("resume")},children:"Resume"}),d.jsx(Xe,{href:"#writing",onClick:o=>{o.preventDefault(),i("writing")},children:"Writing"}),d.jsx(Xe,{href:"#contact",onClick:o=>{o.preventDefault(),i("contact")},children:"Contact"})]}),d.jsx(tg,{onClick:()=>r(!n),isOpen:n,"aria-label":"Toggle menu",children:d.jsx("span",{})})]}),d.jsxs(eg,{isOpen:n,children:[d.jsx(Xe,{href:"#about",onClick:o=>{o.preventDefault(),i("about")},children:"About"}),d.jsx(Xe,{href:"#projects",onClick:o=>{o.preventDefault(),i("projects")},children:"Projects"}),d.jsx(Xe,{href:"#resume",onClick:o=>{o.preventDefault(),i("resume")},children:"Resume"}),d.jsx(Xe,{href:"#writing",onClick:o=>{o.preventDefault(),i("writing")},children:"Writing"}),d.jsx(Xe,{href:"#contact",onClick:o=>{o.preventDefault(),i("contact")},children:"Contact"})]})]})},rg=S.section`
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
`,ig=S.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,og=S.div`
  margin-bottom: var(--space-2xl);
  position: relative;
  display: inline-block;
`,lg=S.div`
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
`,ag=S.img`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 4px solid var(--background);
  background-color: var(--background);
`,sg=S.div`
  max-width: 800px;
  margin: 0 auto;
`,ug=S.h1`
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
`,cg=S.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  animation: fadeIn 1s ease-out 0.2s backwards;
`,dg=S.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  animation: fadeIn 1s ease-out 0.4s backwards;
`,fg=()=>d.jsx(rg,{id:"hero",children:d.jsxs(ig,{children:[d.jsx(og,{children:d.jsx(lg,{children:d.jsx(ag,{src:"assets/images/pfp.png",alt:"Aahad Vakani"})})}),d.jsxs(sg,{children:[d.jsx(ug,{children:"Hi, I'm Aahad Vakani"}),d.jsx(cg,{children:"Computer Science Student & AI Researcher"}),d.jsxs(dg,{children:[d.jsx(Ge,{href:"#projects",onClick:e=>{e.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})},children:"View Projects"}),d.jsx(Ge,{href:"#contact",onClick:e=>{e.preventDefault(),document.getElementById("contact").scrollIntoView({behavior:"smooth"})},children:"Get in Touch"})]})]})]})}),pg=mf`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,ln=S.div`
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
      animation: ${pg} 3s linear infinite;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`,hg=S.section`
  background-color: var(--background-alt);
  padding: var(--space-3xl) 0;
`,mg=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,gg=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
`,vg=S.div`
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
`,yg=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-md);
`,xg=S(ln)`
  padding: var(--space-lg);
  text-align: center;
`,wg=S.div`
  font-size: 2rem;
  margin-bottom: var(--space-sm);
  color: var(--accent-primary);
`,kg=S.h3`
  font-size: 1rem;
  color: var(--text-primary);
  margin: 0;
`,Sg=S.div`
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
`,Cg=()=>{const e=[{name:"Python",level:90,icon:"🐍"},{name:"JavaScript",level:85,icon:"⚡"},{name:"React",level:80,icon:"⚛️"},{name:"Machine Learning",level:85,icon:"🤖"},{name:"Data Science",level:80,icon:"📊"},{name:"Node.js",level:75,icon:"🟢"},{name:"SQL",level:80,icon:"🗄️"},{name:"Git",level:85,icon:"📦"}];return d.jsx(hg,{id:"about",children:d.jsx(mg,{children:d.jsxs(gg,{children:[d.jsxs(vg,{children:[d.jsx("h2",{children:"About Me"}),d.jsx("p",{children:"I'm a Computer Science student passionate about artificial intelligence, machine learning, and software development. My journey in tech has been driven by curiosity and a desire to solve complex problems."}),d.jsx("p",{children:"Currently, I'm focused on AI research and developing innovative solutions that can make a positive impact. I love exploring new technologies and contributing to open-source projects."})]}),d.jsxs("div",{children:[d.jsx("h2",{children:"Skills"}),d.jsx(yg,{children:e.map((t,n)=>d.jsxs(xg,{children:[d.jsx(wg,{children:t.icon}),d.jsx(kg,{children:t.name}),d.jsx(Sg,{level:t.level})]},n))})]})]})})})},Eg=S.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`,jg=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,_g=S.div`
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
`,Pg=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gf=S(ln)`
  display: flex;
  flex-direction: column;
`,zg=S.div`
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

  ${gf}:hover & img {
    transform: scale(1.05);
  }
`,Ng=S.div`
  padding: var(--space-xl);
`,Tg=S.h3`
  color: var(--text-primary);
  margin-bottom: var(--space-sm);
  font-size: 1.5rem;
`,Ig=S.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`,Rg=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
`,$g=S.span`
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
`,Lg=S.div`
  display: flex;
  gap: var(--space-md);
`,Dg=()=>{const e=[{title:"Project Management App",description:"A full-stack project management application with real-time updates and team collaboration features.",image:"/assets/projects/project1.jpg",tech:["React","Node.js","MongoDB","Socket.IO"],liveUrl:"#",githubUrl:"#"},{title:"AI Image Generator",description:"An AI-powered image generation tool that creates unique artwork based on text descriptions.",image:"/assets/projects/project2.jpg",tech:["Python","TensorFlow","Flask","AWS"],liveUrl:"#",githubUrl:"#"},{title:"Blockchain Explorer",description:"A web-based blockchain explorer for tracking transactions and analyzing smart contracts.",image:"/assets/projects/project3.jpg",tech:["Solidity","Web3.js","Vue.js","Ethereum"],liveUrl:"#",githubUrl:"#"}];return d.jsx(Eg,{id:"projects",children:d.jsxs(jg,{children:[d.jsxs(_g,{children:[d.jsx("h2",{children:"Featured Projects"}),d.jsx("p",{children:"A selection of my recent work in AI, machine learning, and software development. Each project represents a unique challenge and innovative solution."})]}),d.jsx(Pg,{children:e.map((t,n)=>d.jsxs(gf,{children:[d.jsx(zg,{children:d.jsx("img",{src:t.image,alt:t.title})}),d.jsxs(Ng,{children:[d.jsx(Tg,{children:t.title}),d.jsx(Ig,{children:t.description}),d.jsx(Rg,{children:t.tech.map((r,i)=>d.jsx($g,{children:r},i))}),d.jsxs(Lg,{children:[d.jsx(Ge,{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo →"}),d.jsx(Ge,{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"View Code →"})]})]})]},n))})]})})},Og=S.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`,Ag=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Nu=S.h2`
  text-align: center;
  margin-bottom: var(--space-2xl);
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-primary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Mg=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`,Fg=S(ln)`
  aspect-ratio: 1;
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  min-height: 150px;
  max-width: 150px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
`,Ug=S.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  margin-bottom: 0;
`,Tu=S.div`
  font-size: 1.25rem;
  color: var(--accent-primary);
  flex-shrink: 0;
`,Bg=S.div`
  flex: 1;
`,Hg=S.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 0.9rem;
`,Vg=S.div`
  color: var(--text-secondary);
  font-size: 0.75rem;
  margin-top: var(--space-xs);
`;S.div`
  color: var(--text-secondary);
  max-height: ${e=>e.isExpanded?"250px":"0"};
  opacity: ${e=>e.isExpanded?"1":"0"};
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  margin-top: ${e=>e.isExpanded?"var(--space-md)":"0"};
  padding-right: var(--space-sm);
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
    position: relative;
    font-size: 0.875rem;
    line-height: 1.5;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;S.button`
  background: none;
  border: none;
  color: var(--accent-primary);
  font-size: 0.875rem;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
  opacity: ${e=>e.isExpanded?"1":"0"};
  transition: all var(--transition-normal);

  &:hover {
    color: var(--accent-secondary);
  }

  span {
    transition: transform var(--transition-fast);
    transform: rotate(${e=>e.isExpanded?"180deg":"0deg"});
  }
`;const Wg=S(ln)`
  text-align: center;
  padding: var(--space-xl);
  margin-top: var(--space-2xl);
`,Qg=S(Ge)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 1rem;
  padding: var(--space-md) var(--space-xl);
`,Yg=S.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--background);
  padding: var(--space-lg);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-alt);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
  }
`,Gg=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Kg=S.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
`,Xg=S.h3`
  margin: 0;
  color: var(--text-primary);
`,Zg=S.div`
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-top: var(--space-xs);
`,Jg=S.div`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: var(--space-sm);
    padding-left: var(--space-lg);
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent-primary);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`,qg=S.button`
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: var(--background-alt);
    color: var(--text-primary);
  }
`,bg=()=>{const[e,t]=$e.useState(null),n=o=>{t(o)},r=()=>{t(null)},i=[{icon:"💻",title:"Information Technology Intern",subtitle:"DePauw University, May 2024 – Present",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Provide technical support and troubleshooting for campus-wide IT infrastructure"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Provide technical support and troubleshooting for campus-wide IT infrastructure"}),d.jsx("li",{children:"Manage and maintain computer labs, network equipment, and software systems"}),d.jsx("li",{children:"Assist in implementing new technology solutions and upgrades"}),d.jsx("li",{children:"Document technical procedures and create user guides"})]})},{icon:"🏫",title:"Resident Assistant",subtitle:"DePauw University, Jan 2025 – Present",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Foster a supportive and inclusive residential community for 40+ students"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Foster a supportive and inclusive residential community for 40+ students"}),d.jsx("li",{children:"Plan and execute educational and social programming events"}),d.jsx("li",{children:"Mediate conflicts and provide crisis response when needed"}),d.jsx("li",{children:"Enforce university policies and maintain safety protocols"})]})},{icon:"🏫",title:"First Year Mentor",subtitle:"DePauw University, Aug 2024 – Present",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Guide and support first-year students in their transition to college life"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Guide and support first-year students in their transition to college life"}),d.jsx("li",{children:"Lead weekly mentoring sessions and workshops"}),d.jsx("li",{children:"Collaborate with faculty and staff to address student needs"}),d.jsx("li",{children:"Help students develop academic and personal success strategies"})]})},{icon:"🏫",title:"HRL Intern",subtitle:"DePauw University, May 2023 – Aug 2023",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Assisted in summer housing operations and residence hall management"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Assisted in summer housing operations and residence hall management"}),d.jsx("li",{children:"Coordinated check-in/check-out processes for summer residents"}),d.jsx("li",{children:"Conducted facility inspections and maintenance reporting"}),d.jsx("li",{children:"Developed and updated housing policies and procedures"})]})},{icon:"📚",title:"ML & Data Analysis Research",subtitle:"DePauw University, Jan 2025 – May 2025",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Conducted research on machine learning applications in data analysis"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Conducted research on machine learning applications in data analysis"}),d.jsx("li",{children:"Developed and implemented ML models for pattern recognition"}),d.jsx("li",{children:"Analyzed large datasets using Python and statistical methods"}),d.jsx("li",{children:"Presented findings at academic conferences and workshops"})]})},{icon:"📚",title:"Sustainable Recipe Recommender",subtitle:"DePauw University, Aug 2024 – Nov 2024",shortDescription:d.jsx("ul",{children:d.jsx("li",{children:"Developed an AI-powered recipe recommendation system focusing on sustainability"})}),fullDescription:d.jsxs("ul",{children:[d.jsx("li",{children:"Developed an AI-powered recipe recommendation system focusing on sustainability"}),d.jsx("li",{children:"Implemented machine learning algorithms for personalized suggestions"}),d.jsx("li",{children:"Created a user-friendly web interface using React and Node.js"}),d.jsx("li",{children:"Integrated carbon footprint calculations for ingredients"})]})}];return d.jsx(Og,{id:"resume",children:d.jsxs(Ag,{children:[d.jsx(Nu,{children:"Experience"}),d.jsx(Mg,{children:i.map((o,l)=>d.jsx(Fg,{onClick:()=>n(o),children:d.jsxs(Ug,{children:[d.jsx(Tu,{children:o.icon}),d.jsxs(Bg,{children:[d.jsx(Hg,{children:o.title}),d.jsx(Vg,{children:o.subtitle})]})]})},l))}),e&&d.jsxs(d.Fragment,{children:[d.jsx(Gg,{onClick:r}),d.jsxs(Yg,{children:[d.jsx(qg,{onClick:r,children:"×"}),d.jsxs(Kg,{children:[d.jsx(Tu,{children:e.icon}),d.jsxs("div",{children:[d.jsx(Xg,{children:e.title}),d.jsx(Zg,{children:e.subtitle})]})]}),d.jsx(Jg,{children:e.fullDescription})]})]}),d.jsxs(Wg,{children:[d.jsx(Nu,{as:"h3",style:{marginBottom:"2rem"},children:"📄 View Full Resume"}),d.jsxs(Qg,{href:"/portfolioWebsite/resume.pdf",target:"_blank",rel:"noopener noreferrer",children:[d.jsx("i",{className:"fas fa-download"}),"Download PDF"]})]})]})})},ev=S.section`
  background-color: var(--background-alt);
  padding: var(--space-3xl) 0;
`,tv=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,nv=S.div`
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
`,rv=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,vf=S(ln)`
  display: flex;
  flex-direction: column;
`,iv=S.div`
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

  ${vf}:hover & img {
    transform: scale(1.05);
  }
`,ov=S.div`
  padding: var(--space-xl);
`,lv=S.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  color: var(--text-tertiary);
  font-size: 0.875rem;
`,av=S.span`
  background-color: var(--background);
  color: var(--accent-primary);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
`,sv=S.h3`
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
`,uv=S.p`
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`,cv=S.a`
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
`,dv=()=>{const e=[{title:"Tweets and Tags: A Study of Code-Switching in Online Contexts",excerpt:"This paper analyzes Hindi-English code-switching patterns on Twitter using the L3Cube-HingCorpus. It examines the frequency, placement, and function of inter-, intra-, and tag-level switches within bilingual online discourse. The study draws on sociolinguistic theory to explore how code-switching reflects identity, emotion, and interactional context in digital communication.",image:"/portfolioWebsite/assets/writing/nlp-advances.jpg",date:"April 2025",category:"Research",url:"/portfolioWebsite/assets/papers/codeswitching.pdf"},{title:"The Never-Ending Western Exit",excerpt:"This paper explores Mohsin Hamid's Exit West as a reimagining of migration through magical realism, focusing on the psychological and cultural dislocation of refugees. It analyzes how Hamid uses surreal elements—such as the magical doors—to blur borders of space, identity, and time. The novel is read as a critique of Western perceptions of migration and an invocation of shared global responsibility.",image:"/assets/writing/ml-future.jpg",date:"Spring 2025",category:"Analysis",url:"/assets/papers/exitwest.pdf"},{title:"Ethics in Artificial Intelligence",excerpt:"Discussing the importance of ethical considerations in AI development and deployment, focusing on bias mitigation, transparency, and responsible innovation. This paper examines real-world case studies and proposes frameworks for ethical AI development.",image:"/assets/writing/ai-ethics.jpg",date:"January 2024",category:"Opinion",url:"/assets/papers/ai-ethics.pdf"}];return d.jsx(ev,{id:"writing",children:d.jsxs(tv,{children:[d.jsxs(nv,{children:[d.jsx("h2",{children:"Research & Writing"}),d.jsx("p",{children:"Exploring the intersection of technology, ethics, and society through research papers and thought-provoking articles."})]}),d.jsx(rv,{children:e.map((t,n)=>d.jsxs(vf,{children:[d.jsx(iv,{children:d.jsx("img",{src:t.image,alt:t.title})}),d.jsxs(ov,{children:[d.jsxs(lv,{children:[d.jsx(av,{children:t.category}),d.jsx("span",{children:t.date})]}),d.jsx(sv,{children:d.jsx("a",{href:t.url,children:t.title})}),d.jsx(uv,{children:t.excerpt}),d.jsxs(cv,{href:t.url,children:["Read Article ",d.jsx("span",{children:"→"})]})]})]},n))})]})})},fv=S.section`
  background-color: var(--background);
  padding: var(--space-3xl) 0;
`,pv=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,hv=S.div`
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
`,mv=S.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gv=S.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
`,el=S(ln)`
  padding: 0;
  overflow: visible;
`,tl=S(Ge)`
  width: 100%;
  justify-content: flex-start;
  padding: var(--space-md);
  font-size: 0.9rem;
  background: var(--card-bg);
  
  div {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    color: var(--text-primary);
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  span {
    font-size: 1.25rem;
  }
`,vv=S(ln)`
  padding: var(--space-xl);
`,nl=S.div`
  margin-bottom: var(--space-lg);

  label {
    display: block;
    color: var(--text-secondary);
    margin-bottom: var(--space-xs);
    font-size: 0.875rem;
  }

  input,
  textarea {
    width: 100%;
    padding: var(--space-md);
    background-color: var(--background);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: 1rem;
    transition: all var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
      box-shadow: 0 0 0 2px var(--accent-primary-hover);
    }

    &::placeholder {
      color: var(--text-tertiary);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`,yv=S(Ge)`
  width: auto;
  padding: var(--space-sm) var(--space-xl);
  font-size: 0.9rem;
  background: var(--card-bg);
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,xv=()=>{const[e,t]=$e.useState({name:"",email:"",message:""}),n=i=>{const{name:o,value:l}=i.target;t(a=>({...a,[o]:l}))},r=i=>{i.preventDefault(),console.log("Form submitted:",e)};return d.jsx(fv,{id:"contact",children:d.jsxs(pv,{children:[d.jsxs(hv,{children:[d.jsx("h2",{children:"Get in Touch"}),d.jsx("p",{children:"Have a question or want to collaborate? Feel free to reach out through any of the following channels or send me a message directly."})]}),d.jsxs(mv,{children:[d.jsxs(gv,{children:[d.jsx(el,{children:d.jsxs(tl,{href:"mailto:aahavakani@gmail.com",children:[d.jsx("span",{children:"📧"}),d.jsxs("div",{children:[d.jsx("h3",{children:"Email"}),d.jsx("p",{children:"aahadvakani@gmail.com"})]})]})}),d.jsx(el,{children:d.jsxs(tl,{href:"https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",target:"_blank",children:[d.jsx("span",{children:"💼"}),d.jsxs("div",{children:[d.jsx("h3",{children:"LinkedIn"}),d.jsx("p",{children:"Connect with me"})]})]})}),d.jsx(el,{children:d.jsxs(tl,{href:"https://github.com/aavrar",target:"_blank",children:[d.jsx("span",{children:"💻"}),d.jsxs("div",{children:[d.jsx("h3",{children:"GitHub"}),d.jsx("p",{children:"Check out my code"})]})]})})]}),d.jsxs(vv,{onSubmit:r,children:[d.jsxs(nl,{children:[d.jsx("label",{htmlFor:"name",children:"Name"}),d.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:n,placeholder:"Your name",required:!0})]}),d.jsxs(nl,{children:[d.jsx("label",{htmlFor:"email",children:"Email"}),d.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:n,placeholder:"Your email address",required:!0})]}),d.jsxs(nl,{children:[d.jsx("label",{htmlFor:"message",children:"Message"}),d.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:n,placeholder:"Your message",required:!0})]}),d.jsx(yv,{as:"button",type:"submit",children:"Send Message"})]})]})]})})},wv=S.footer`
  background-color: var(--background-elevated);
  padding: var(--space-2xl) 0;
  border-top: 1px solid var(--card-border);
`,kv=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`,Sv=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-xl);
    text-align: center;
  }
`,Cv=S.div`
  h3 {
    color: var(--text-primary);
    margin-bottom: var(--space-sm);
    font-size: 1.5rem;
  }

  p {
    color: var(--text-secondary);
    margin: 0;
  }
`,Ev=S.div`
  display: flex;
  gap: var(--space-md);
`,rl=S(Ge)`
  width: 40px;
  height: 40px;
  padding: var(--space-sm);
  justify-content: center;
  font-size: 1.5rem;
`,jv=S(Ge)`
  padding: 0;
  background: none;
  border: none;
  
  &:hover {
    background: none;
    transform: none;
    box-shadow: none;
    color: var(--accent-primary);
  }
`,_v=S.div`
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
`,Pv=()=>{const e=new Date().getFullYear();return d.jsx(wv,{children:d.jsxs(kv,{children:[d.jsxs(Sv,{children:[d.jsxs(Cv,{children:[d.jsx("h3",{children:"Aahad Vakani"}),d.jsx("p",{children:"Computer Science Student & AI Researcher"})]}),d.jsxs(Ev,{children:[d.jsx(rl,{href:"https://github.com/aavrar",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:"💻"}),d.jsx(rl,{href:"https://www.linkedin.com/in/abdul-aahad-vakani-793aa0234/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:"💼"}),d.jsx(rl,{href:"mailto:aahadvakani@gmail.com","aria-label":"Email",children:"📧"})]})]}),d.jsxs(_v,{children:["© ",e," Aahad Vakani. All rights reserved. Built with"," ",d.jsx(jv,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React"})]})]})})};function zv(){return d.jsxs(Yh,{children:[d.jsx(Gm,{}),d.jsxs("div",{className:"app",children:[d.jsx(ng,{}),d.jsxs("main",{children:[d.jsx(fg,{}),d.jsx(Cg,{}),d.jsx(Dg,{}),d.jsx(bg,{}),d.jsx(dv,{}),d.jsx(xv,{})]}),d.jsx(Pv,{})]})]})}il.createRoot(document.getElementById("root")).render(d.jsx(be.StrictMode,{children:d.jsx(zv,{})}));
