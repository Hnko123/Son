(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function vr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vx={exports:{}},Uu={},xx={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),KS=Symbol.for("react.portal"),ZS=Symbol.for("react.fragment"),QS=Symbol.for("react.strict_mode"),JS=Symbol.for("react.profiler"),e1=Symbol.for("react.provider"),t1=Symbol.for("react.context"),n1=Symbol.for("react.forward_ref"),r1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),gm=Symbol.iterator;function o1(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var yx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_x=Object.assign,bx={};function so(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||yx}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sx(){}Sx.prototype=so.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=bx,this.updater=n||yx}var kp=Np.prototype=new Sx;kp.constructor=Np;_x(kp,so.prototype);kp.isPureReactComponent=!0;var vm=Array.isArray,wx=Object.prototype.hasOwnProperty,Op={current:null},Mx={key:!0,ref:!0,__self:!0,__source:!0};function Ex(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)wx.call(e,r)&&!Mx.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Cs,type:t,key:a,ref:o,props:i,_owner:Op.current}}function s1(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function l1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xm=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l1(""+t.key):e.toString(36)}function Gl(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case KS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zc(o,0):r,vm(i)?(n="",t!=null&&(n=t.replace(xm,"$&/")+"/"),Gl(i,e,n,"",function(u){return u})):i!=null&&(Fp(i)&&(i=s1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vm(t))for(var s=0;s<t.length;s++){a=t[s];var l=r+zc(a,s);o+=Gl(a,e,n,l,i)}else if(l=o1(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=r+zc(a,s++),o+=Gl(a,e,n,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qs(t,e,n){if(t==null)return t;var r=[],i=0;return Gl(t,r,"","",function(a){return e.call(n,a,i++)}),r}function u1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Vl={transition:null},c1={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Op};function Cx(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:qs,forEach:function(t,e,n){qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qs(t,function(){e++}),e},toArray:function(t){return qs(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=so;ze.Fragment=ZS;ze.Profiler=JS;ze.PureComponent=Np;ze.StrictMode=QS;ze.Suspense=r1;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;ze.act=Cx;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_x({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)wx.call(e,l)&&!Mx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Cs,type:t.type,key:i,ref:a,props:r,_owner:o}};ze.createContext=function(t){return t={$$typeof:t1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e1,_context:t},t.Consumer=t};ze.createElement=Ex;ze.createFactory=function(t){var e=Ex.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:n1,render:t}};ze.isValidElement=Fp;ze.lazy=function(t){return{$$typeof:a1,_payload:{_status:-1,_result:t},_init:u1}};ze.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};ze.unstable_act=Cx;ze.useCallback=function(t,e){return rn.current.useCallback(t,e)};ze.useContext=function(t){return rn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return rn.current.useEffect(t,e)};ze.useId=function(){return rn.current.useId()};ze.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return rn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};ze.useRef=function(t){return rn.current.useRef(t)};ze.useState=function(t){return rn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return rn.current.useTransition()};ze.version="18.3.1";xx.exports=ze;var se=xx.exports;const Ke=vr(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=se,f1=Symbol.for("react.element"),p1=Symbol.for("react.fragment"),h1=Object.prototype.hasOwnProperty,m1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g1={key:!0,ref:!0,__self:!0,__source:!0};function Tx(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)h1.call(e,r)&&!g1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:f1,type:t,key:a,ref:o,props:i,_owner:m1.current}}Uu.Fragment=p1;Uu.jsx=Tx;Uu.jsxs=Tx;vx.exports=Uu;var T=vx.exports,Dx={exports:{}},Pn={},Ax={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var G=N.length;N.push(q);e:for(;0<G;){var le=G-1>>>1,P=N[le];if(0<i(P,q))N[le]=q,N[G]=P,G=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var q=N[0],G=N.pop();if(G!==q){N[0]=G;e:for(var le=0,P=N.length,F=P>>>1;le<F;){var V=2*(le+1)-1,I=N[V],L=V+1,ne=N[L];if(0>i(I,G))L<P&&0>i(ne,I)?(N[le]=ne,N[L]=G,le=L):(N[le]=I,N[V]=G,le=V);else if(L<P&&0>i(ne,G))N[le]=ne,N[L]=G,le=L;else break e}}return q}function i(N,q){var G=N.sortIndex-q.sortIndex;return G!==0?G:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],f=1,d=null,c=3,p=!1,x=!1,h=!1,m=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=N)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function _(N){if(h=!1,y(N),!x)if(n(l)!==null)x=!0,J(S);else{var q=n(u);q!==null&&ee(_,q.startTime-N)}}function S(N,q){x=!1,h&&(h=!1,g(b),b=-1),p=!0;var G=c;try{for(y(q),d=n(l);d!==null&&(!(d.expirationTime>q)||N&&!H());){var le=d.callback;if(typeof le=="function"){d.callback=null,c=d.priorityLevel;var P=le(d.expirationTime<=q);q=t.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),y(q)}else r(l);d=n(l)}if(d!==null)var F=!0;else{var V=n(u);V!==null&&ee(_,V.startTime-q),F=!1}return F}finally{d=null,c=G,p=!1}}var M=!1,A=null,b=-1,E=5,R=-1;function H(){return!(t.unstable_now()-R<E)}function Y(){if(A!==null){var N=t.unstable_now();R=N;var q=!0;try{q=A(!0,N)}finally{q?z():(M=!1,A=null)}}else M=!1}var z;if(typeof v=="function")z=function(){v(Y)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,$=k.port2;k.port1.onmessage=Y,z=function(){$.postMessage(null)}}else z=function(){m(Y,0)};function J(N){A=N,M||(M=!0,z())}function ee(N,q){b=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,J(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(c){case 1:case 2:case 3:var q=3;break;default:q=c}var G=c;c=q;try{return N()}finally{c=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=c;c=N;try{return q()}finally{c=G}},t.unstable_scheduleCallback=function(N,q,G){var le=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?le+G:le):G=le,N){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=G+P,N={id:f++,callback:q,priorityLevel:N,startTime:G,expirationTime:P,sortIndex:-1},G>le?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(h?(g(b),b=-1):h=!0,ee(_,G-le))):(N.sortIndex=P,e(l,N),x||p||(x=!0,J(S))),N},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(N){var q=c;return function(){var G=c;c=q;try{return N.apply(this,arguments)}finally{c=G}}}})(Px);Ax.exports=Px;var v1=Ax.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=se,An=v1;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rx=new Set,es={};function Ji(t,e){Ha(t,e),Ha(t+"Capture",e)}function Ha(t,e){for(es[t]=e,t=0;t<e.length;t++)Rx.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},_m={};function _1(t){return wf.call(_m,t)?!0:wf.call(ym,t)?!1:y1.test(t)?_m[t]=!0:(ym[t]=!0,!1)}function b1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S1(t,e,n,r){if(e===null||typeof e>"u"||b1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var zp=/[\-:]([a-z])/g;function Bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zp,Bp);Ft[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zp,Bp);Ft[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zp,Bp);Ft[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S1(e,n,i,r)&&(n=null),r||i===null?_1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xs=Symbol.for("react.element"),ba=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Ix=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),Nx=Symbol.for("react.offscreen"),bm=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Bc;function Oo(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var Uc=!1;function Gc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function w1(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sa:return"Fragment";case ba:return"Portal";case Mf:return"Profiler";case Gp:return"StrictMode";case Ef:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ix:return(t.displayName||"Context")+".Consumer";case Lx:return(t._context.displayName||"Context")+".Provider";case Vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===Gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(t){var e=kx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ys(t){t._valueTracker||(t._valueTracker=E1(t))}function Ox(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function Af(t,e){Fx(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fo=Array.isArray;function ka(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Fo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function zx(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ks,Ux=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ks.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C1=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){C1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function Gx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function Vx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var T1=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(T1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function Hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,Oa=null,Fa=null;function Cm(t){if(t=As(t)){if(typeof Of!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=ju(e),Of(t.stateNode,t.type,e))}}function Wx(t){Oa?Fa?Fa.push(t):Fa=[t]:Oa=t}function Hx(){if(Oa){var t=Oa,e=Fa;if(Fa=Oa=null,Cm(t),e)for(t=0;t<e.length;t++)Cm(e[t])}}function jx(t,e){return t(e)}function $x(){}var Vc=!1;function qx(t,e,n){if(Vc)return t(e,n);Vc=!0;try{return jx(t,e,n)}finally{Vc=!1,(Oa!==null||Fa!==null)&&($x(),Hx())}}function ns(t,e){var n=t.stateNode;if(n===null)return null;var r=ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ff=!1;if(kr)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Ff=!1}function D1(t,e,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Wo=!1,ru=null,iu=!1,zf=null,A1={onError:function(t){Wo=!0,ru=t}};function P1(t,e,n,r,i,a,o,s,l){Wo=!1,ru=null,D1.apply(A1,arguments)}function R1(t,e,n,r,i,a,o,s,l){if(P1.apply(this,arguments),Wo){if(Wo){var u=ru;Wo=!1,ru=null}else throw Error(oe(198));iu||(iu=!0,zf=u)}}function ea(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(ea(t)!==t)throw Error(oe(188))}function L1(t){var e=t.alternate;if(!e){if(e=ea(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Tm(i),t;if(a===r)return Tm(i),e;a=a.sibling}throw Error(oe(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==r)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Yx(t){return t=L1(t),t!==null?Kx(t):null}function Kx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=An.unstable_scheduleCallback,Dm=An.unstable_cancelCallback,I1=An.unstable_shouldYield,N1=An.unstable_requestPaint,ht=An.unstable_now,k1=An.unstable_getCurrentPriorityLevel,jp=An.unstable_ImmediatePriority,Qx=An.unstable_UserBlockingPriority,au=An.unstable_NormalPriority,O1=An.unstable_LowPriority,Jx=An.unstable_IdlePriority,Gu=null,pr=null;function F1(t){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:U1,z1=Math.log,B1=Math.LN2;function U1(t){return t>>>=0,t===0?32:31-(z1(t)/B1|0)|0}var Zs=64,Qs=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=zo(s):(a&=o,a!==0&&(r=zo(a)))}else o=n&~i,o!==0?r=zo(o):a!==0&&(r=zo(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-er(e),i=1<<n,r|=t[n],e&=~i;return r}function G1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-er(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=G1(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ey(){var t=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),t}function Wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function W1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-er(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function $p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-er(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ze=0;function ty(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ny,qp,ry,iy,ay,Uf=!1,Js=[],ni=null,ri=null,ii=null,rs=new Map,is=new Map,Kr=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Am(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(e.pointerId)}}function yo(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=As(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j1(t,e,n,r,i){switch(e){case"focusin":return ni=yo(ni,t,e,n,r,i),!0;case"dragenter":return ri=yo(ri,t,e,n,r,i),!0;case"mouseover":return ii=yo(ii,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return rs.set(a,yo(rs.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,is.set(a,yo(is.get(a)||null,t,e,n,r,i)),!0}return!1}function oy(t){var e=ki(t.target);if(e!==null){var n=ea(e);if(n!==null){if(e=n.tag,e===13){if(e=Xx(n),e!==null){t.blockedOn=e,ay(t.priority,function(){ry(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=As(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Pm(t,e,n){Wl(t)&&n.delete(e)}function $1(){Uf=!1,ni!==null&&Wl(ni)&&(ni=null),ri!==null&&Wl(ri)&&(ri=null),ii!==null&&Wl(ii)&&(ii=null),rs.forEach(Pm),is.forEach(Pm)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,$1)))}function as(t){function e(i){return _o(i,t)}if(0<Js.length){_o(Js[0],t);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&_o(ni,t),ri!==null&&_o(ri,t),ii!==null&&_o(ii,t),rs.forEach(e),is.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)oy(n),n.blockedOn===null&&Kr.shift()}var za=Br.ReactCurrentBatchConfig,su=!0;function q1(t,e,n,r){var i=Ze,a=za.transition;za.transition=null;try{Ze=1,Xp(t,e,n,r)}finally{Ze=i,za.transition=a}}function X1(t,e,n,r){var i=Ze,a=za.transition;za.transition=null;try{Ze=4,Xp(t,e,n,r)}finally{Ze=i,za.transition=a}}function Xp(t,e,n,r){if(su){var i=Gf(t,e,n,r);if(i===null)Jc(t,e,r,lu,n),Am(t,r);else if(j1(i,t,e,n,r))r.stopPropagation();else if(Am(t,r),e&4&&-1<H1.indexOf(t)){for(;i!==null;){var a=As(i);if(a!==null&&ny(a),a=Gf(t,e,n,r),a===null&&Jc(t,e,r,lu,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jc(t,e,r,null,n)}}var lu=null;function Gf(t,e,n,r){if(lu=null,t=Hp(r),t=ki(t),t!==null)if(e=ea(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lu=t,null}function sy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k1()){case jp:return 1;case Qx:return 4;case au:case O1:return 16;case Jx:return 536870912;default:return 16}default:return 16}}var Qr=null,Yp=null,Hl=null;function ly(){if(Hl)return Hl;var t,e=Yp,n=e.length,r,i="value"in Qr?Qr.value:Qr.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return Hl=i.slice(t,1<r?1-r:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Rm(){return!1}function Rn(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?el:Rm,this.isPropagationStopped=Rm,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=Rn(lo),Ds=dt({},lo,{view:0,detail:0}),Y1=Rn(Ds),Hc,jc,bo,Vu=dt({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Hc=t.screenX-bo.screenX,jc=t.screenY-bo.screenY):jc=Hc=0,bo=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Lm=Rn(Vu),K1=dt({},Vu,{dataTransfer:0}),Z1=Rn(K1),Q1=dt({},Ds,{relatedTarget:0}),$c=Rn(Q1),J1=dt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),ew=Rn(J1),tw=dt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nw=Rn(tw),rw=dt({},lo,{data:0}),Im=Rn(rw),iw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ow={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ow[t])?!!e[t]:!1}function Zp(){return sw}var lw=dt({},Ds,{key:function(t){if(t.key){var e=iw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uw=Rn(lw),cw=dt({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Rn(cw),dw=dt({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),fw=Rn(dw),pw=dt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hw=Rn(pw),mw=dt({},Vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gw=Rn(mw),vw=[9,13,27,32],Qp=kr&&"CompositionEvent"in window,Ho=null;kr&&"documentMode"in document&&(Ho=document.documentMode);var xw=kr&&"TextEvent"in window&&!Ho,uy=kr&&(!Qp||Ho&&8<Ho&&11>=Ho),km=" ",Om=!1;function cy(t,e){switch(t){case"keyup":return vw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function yw(t,e){switch(t){case"compositionend":return dy(e);case"keypress":return e.which!==32?null:(Om=!0,km);case"textInput":return t=e.data,t===km&&Om?null:t;default:return null}}function _w(t,e){if(wa)return t==="compositionend"||!Qp&&cy(t,e)?(t=ly(),Hl=Yp=Qr=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uy&&e.locale!=="ko"?null:e.data;default:return null}}var bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bw[t.type]:e==="textarea"}function fy(t,e,n,r){Wx(r),e=uu(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,os=null;function Sw(t){wy(t,0)}function Wu(t){var e=Ca(t);if(Ox(e))return t}function ww(t,e){if(t==="change")return e}var py=!1;if(kr){var qc;if(kr){var Xc="oninput"in document;if(!Xc){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Xc=typeof zm.oninput=="function"}qc=Xc}else qc=!1;py=qc&&(!document.documentMode||9<document.documentMode)}function Bm(){jo&&(jo.detachEvent("onpropertychange",hy),os=jo=null)}function hy(t){if(t.propertyName==="value"&&Wu(os)){var e=[];fy(e,os,t,Hp(t)),qx(Sw,e)}}function Mw(t,e,n){t==="focusin"?(Bm(),jo=e,os=n,jo.attachEvent("onpropertychange",hy)):t==="focusout"&&Bm()}function Ew(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(os)}function Cw(t,e){if(t==="click")return Wu(e)}function Tw(t,e){if(t==="input"||t==="change")return Wu(e)}function Dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:Dw;function ss(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,e){var n=Um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function my(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?my(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gy(){for(var t=window,e=nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nu(t.document)}return e}function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Aw(t){var e=gy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&my(n.ownerDocument.documentElement,n)){if(r!==null&&Jp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=Gm(n,a);var o=Gm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pw=kr&&"documentMode"in document&&11>=document.documentMode,Ma=null,Vf=null,$o=null,Wf=!1;function Vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||Ma==null||Ma!==nu(r)||(r=Ma,"selectionStart"in r&&Jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&ss($o,r)||($o=r,r=uu(Vf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ma)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ea={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Yc={},vy={};kr&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Hu(t){if(Yc[t])return Yc[t];if(!Ea[t])return t;var e=Ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vy)return Yc[t]=e[n];return t}var xy=Hu("animationend"),yy=Hu("animationiteration"),_y=Hu("animationstart"),by=Hu("transitionend"),Sy=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(t,e){Sy.set(t,e),Ji(e,[t])}for(var Kc=0;Kc<Wm.length;Kc++){var Zc=Wm[Kc],Rw=Zc.toLowerCase(),Lw=Zc[0].toUpperCase()+Zc.slice(1);xi(Rw,"on"+Lw)}xi(xy,"onAnimationEnd");xi(yy,"onAnimationIteration");xi(_y,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(by,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,R1(r,e,void 0,t),t.currentTarget=null}function wy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Hm(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Hm(i,s,u),a=l}}}if(iu)throw t=zf,iu=!1,zf=null,t}function rt(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var r=t+"__bubble";n.has(r)||(My(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),My(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[nl]){t[nl]=!0,Rx.forEach(function(n){n!=="selectionchange"&&(Iw.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Qc("selectionchange",!1,e))}}function My(t,e,n,r){switch(sy(e)){case 1:var i=q1;break;case 4:i=X1;break;default:i=Xp}n=i.bind(null,e,n,t),i=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jc(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=ki(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}qx(function(){var u=a,f=Hp(n),d=[];e:{var c=Sy.get(t);if(c!==void 0){var p=Kp,x=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=uw;break;case"focusin":x="focus",p=$c;break;case"focusout":x="blur",p=$c;break;case"beforeblur":case"afterblur":p=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fw;break;case xy:case yy:case _y:p=ew;break;case by:p=hw;break;case"scroll":p=Y1;break;case"wheel":p=gw;break;case"copy":case"cut":case"paste":p=nw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nm}var h=(e&4)!==0,m=!h&&t==="scroll",g=h?c!==null?c+"Capture":null:c;h=[];for(var v=u,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,g!==null&&(_=ns(v,g),_!=null&&h.push(us(v,_,y)))),m)break;v=v.return}0<h.length&&(c=new p(c,x,null,n,f),d.push({event:c,listeners:h}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==kf&&(x=n.relatedTarget||n.fromElement)&&(ki(x)||x[Or]))break e;if((p||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?ki(x):null,x!==null&&(m=ea(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(h=Lm,_="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Nm,_="onPointerLeave",g="onPointerEnter",v="pointer"),m=p==null?c:Ca(p),y=x==null?c:Ca(x),c=new h(_,v+"leave",p,n,f),c.target=m,c.relatedTarget=y,_=null,ki(f)===u&&(h=new h(g,v+"enter",x,n,f),h.target=y,h.relatedTarget=m,_=h),m=_,p&&x)t:{for(h=p,g=x,v=0,y=h;y;y=ra(y))v++;for(y=0,_=g;_;_=ra(_))y++;for(;0<v-y;)h=ra(h),v--;for(;0<y-v;)g=ra(g),y--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=ra(h),g=ra(g)}h=null}else h=null;p!==null&&jm(d,c,p,h,!1),x!==null&&m!==null&&jm(d,m,x,h,!0)}}e:{if(c=u?Ca(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var S=ww;else if(Fm(c))if(py)S=Tw;else{S=Ew;var M=Mw}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(S=Cw);if(S&&(S=S(t,u))){fy(d,S,n,f);break e}M&&M(t,c,u),t==="focusout"&&(M=c._wrapperState)&&M.controlled&&c.type==="number"&&Pf(c,"number",c.value)}switch(M=u?Ca(u):window,t){case"focusin":(Fm(M)||M.contentEditable==="true")&&(Ma=M,Vf=u,$o=null);break;case"focusout":$o=Vf=Ma=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,Vm(d,n,f);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":Vm(d,n,f)}var A;if(Qp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else wa?cy(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(uy&&n.locale!=="ko"&&(wa||b!=="onCompositionStart"?b==="onCompositionEnd"&&wa&&(A=ly()):(Qr=f,Yp="value"in Qr?Qr.value:Qr.textContent,wa=!0)),M=uu(u,b),0<M.length&&(b=new Im(b,t,null,n,f),d.push({event:b,listeners:M}),A?b.data=A:(A=dy(n),A!==null&&(b.data=A)))),(A=xw?yw(t,n):_w(t,n))&&(u=uu(u,"onBeforeInput"),0<u.length&&(f=new Im("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}wy(d,e)})}function us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ns(t,n),a!=null&&r.unshift(us(t,a,i)),a=ns(t,e),a!=null&&r.push(us(t,a,i))),t=t.return}return r}function ra(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jm(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ns(n,a),l!=null&&o.unshift(us(n,l,s))):i||(l=ns(n,a),l!=null&&o.push(us(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Nw=/\r\n?/g,kw=/\u0000|\uFFFD/g;function $m(t){return(typeof t=="string"?t:""+t).replace(Nw,`
`).replace(kw,"")}function rl(t,e,n){if(e=$m(e),$m(t)!==e&&n)throw Error(oe(425))}function cu(){}var Hf=null,jf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,Ow=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(zw)}:qf;function zw(t){setTimeout(function(){throw t})}function ed(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),as(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);as(e)}function ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),dr="__reactFiber$"+uo,cs="__reactProps$"+uo,Or="__reactContainer$"+uo,Xf="__reactEvents$"+uo,Bw="__reactListeners$"+uo,Uw="__reactHandles$"+uo;function ki(t){var e=t[dr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[dr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xm(t);t!==null;){if(n=t[dr])return n;t=Xm(t)}return e}t=n,n=t.parentNode}return null}function As(t){return t=t[dr]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ca(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function ju(t){return t[cs]||null}var Yf=[],Ta=-1;function yi(t){return{current:t}}function at(t){0>Ta||(t.current=Yf[Ta],Yf[Ta]=null,Ta--)}function et(t,e){Ta++,Yf[Ta]=t.current,t.current=e}var gi={},$t=yi(gi),cn=yi(!1),Wi=gi;function ja(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dn(t){return t=t.childContextTypes,t!=null}function du(){at(cn),at($t)}function Ym(t,e,n){if($t.current!==gi)throw Error(oe(168));et($t,e),et(cn,n)}function Ey(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(oe(108,M1(t)||"Unknown",i));return dt({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,Wi=$t.current,et($t,t),et(cn,cn.current),!0}function Km(t,e,n){var r=t.stateNode;if(!r)throw Error(oe(169));n?(t=Ey(t,e,Wi),r.__reactInternalMemoizedMergedChildContext=t,at(cn),at($t),et($t,t)):at(cn),et(cn,n)}var Cr=null,$u=!1,td=!1;function Cy(t){Cr===null?Cr=[t]:Cr.push(t)}function Gw(t){$u=!0,Cy(t)}function _i(){if(!td&&Cr!==null){td=!0;var t=0,e=Ze;try{var n=Cr;for(Ze=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cr=null,$u=!1}catch(i){throw Cr!==null&&(Cr=Cr.slice(t+1)),Zx(jp,_i),i}finally{Ze=e,td=!1}}return null}var Da=[],Aa=0,pu=null,hu=0,Fn=[],zn=0,Hi=null,Dr=1,Ar="";function Ai(t,e){Da[Aa++]=hu,Da[Aa++]=pu,pu=t,hu=e}function Ty(t,e,n){Fn[zn++]=Dr,Fn[zn++]=Ar,Fn[zn++]=Hi,Hi=t;var r=Dr;t=Ar;var i=32-er(r)-1;r&=~(1<<i),n+=1;var a=32-er(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dr=1<<32-er(e)+i|n<<i|r,Ar=a+t}else Dr=1<<a|n<<i|r,Ar=t}function eh(t){t.return!==null&&(Ai(t,1),Ty(t,1,0))}function th(t){for(;t===pu;)pu=Da[--Aa],Da[Aa]=null,hu=Da[--Aa],Da[Aa]=null;for(;t===Hi;)Hi=Fn[--zn],Fn[zn]=null,Ar=Fn[--zn],Fn[zn]=null,Dr=Fn[--zn],Fn[zn]=null}var Sn=null,bn=null,ot=!1,Zn=null;function Dy(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,bn=ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hi!==null?{id:Dr,overflow:Ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,bn=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(ot){var e=bn;if(e){var n=e;if(!Zm(t,e)){if(Kf(t))throw Error(oe(418));e=ai(n.nextSibling);var r=Sn;e&&Zm(t,e)?Dy(r,n):(t.flags=t.flags&-4097|2,ot=!1,Sn=t)}}else{if(Kf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ot=!1,Sn=t}}}function Qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function il(t){if(t!==Sn)return!1;if(!ot)return Qm(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=bn)){if(Kf(t))throw Ay(),Error(oe(418));for(;e;)Dy(t,e),e=ai(e.nextSibling)}if(Qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Sn?ai(t.stateNode.nextSibling):null;return!0}function Ay(){for(var t=bn;t;)t=ai(t.nextSibling)}function $a(){bn=Sn=null,ot=!1}function nh(t){Zn===null?Zn=[t]:Zn.push(t)}var Vw=Br.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var r=n.stateNode}if(!r)throw Error(oe(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jm(t){var e=t._init;return e(t._payload)}function Py(t){function e(g,v){if(t){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=ui(g,v),g.index=0,g.sibling=null,g}function a(g,v,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function s(g,v,y,_){return v===null||v.tag!==6?(v=ld(y,g.mode,_),v.return=g,v):(v=i(v,y),v.return=g,v)}function l(g,v,y,_){var S=y.type;return S===Sa?f(g,v,y.props.children,_,y.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xr&&Jm(S)===v.type)?(_=i(v,y.props),_.ref=So(g,v,y),_.return=g,_):(_=Ql(y.type,y.key,y.props,null,g.mode,_),_.ref=So(g,v,y),_.return=g,_)}function u(g,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ud(y,g.mode,_),v.return=g,v):(v=i(v,y.children||[]),v.return=g,v)}function f(g,v,y,_,S){return v===null||v.tag!==7?(v=Gi(y,g.mode,_,S),v.return=g,v):(v=i(v,y),v.return=g,v)}function d(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ld(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:return y=Ql(v.type,v.key,v.props,null,g.mode,y),y.ref=So(g,null,v),y.return=g,y;case ba:return v=ud(v,g.mode,y),v.return=g,v;case Xr:var _=v._init;return d(g,_(v._payload),y)}if(Fo(v)||vo(v))return v=Gi(v,g.mode,y,null),v.return=g,v;al(g,v)}return null}function c(g,v,y,_){var S=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:s(g,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xs:return y.key===S?l(g,v,y,_):null;case ba:return y.key===S?u(g,v,y,_):null;case Xr:return S=y._init,c(g,v,S(y._payload),_)}if(Fo(y)||vo(y))return S!==null?null:f(g,v,y,_,null);al(g,y)}return null}function p(g,v,y,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(y)||null,s(v,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xs:return g=g.get(_.key===null?y:_.key)||null,l(v,g,_,S);case ba:return g=g.get(_.key===null?y:_.key)||null,u(v,g,_,S);case Xr:var M=_._init;return p(g,v,y,M(_._payload),S)}if(Fo(_)||vo(_))return g=g.get(y)||null,f(v,g,_,S,null);al(v,_)}return null}function x(g,v,y,_){for(var S=null,M=null,A=v,b=v=0,E=null;A!==null&&b<y.length;b++){A.index>b?(E=A,A=null):E=A.sibling;var R=c(g,A,y[b],_);if(R===null){A===null&&(A=E);break}t&&A&&R.alternate===null&&e(g,A),v=a(R,v,b),M===null?S=R:M.sibling=R,M=R,A=E}if(b===y.length)return n(g,A),ot&&Ai(g,b),S;if(A===null){for(;b<y.length;b++)A=d(g,y[b],_),A!==null&&(v=a(A,v,b),M===null?S=A:M.sibling=A,M=A);return ot&&Ai(g,b),S}for(A=r(g,A);b<y.length;b++)E=p(A,g,b,y[b],_),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?b:E.key),v=a(E,v,b),M===null?S=E:M.sibling=E,M=E);return t&&A.forEach(function(H){return e(g,H)}),ot&&Ai(g,b),S}function h(g,v,y,_){var S=vo(y);if(typeof S!="function")throw Error(oe(150));if(y=S.call(y),y==null)throw Error(oe(151));for(var M=S=null,A=v,b=v=0,E=null,R=y.next();A!==null&&!R.done;b++,R=y.next()){A.index>b?(E=A,A=null):E=A.sibling;var H=c(g,A,R.value,_);if(H===null){A===null&&(A=E);break}t&&A&&H.alternate===null&&e(g,A),v=a(H,v,b),M===null?S=H:M.sibling=H,M=H,A=E}if(R.done)return n(g,A),ot&&Ai(g,b),S;if(A===null){for(;!R.done;b++,R=y.next())R=d(g,R.value,_),R!==null&&(v=a(R,v,b),M===null?S=R:M.sibling=R,M=R);return ot&&Ai(g,b),S}for(A=r(g,A);!R.done;b++,R=y.next())R=p(A,g,b,R.value,_),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?b:R.key),v=a(R,v,b),M===null?S=R:M.sibling=R,M=R);return t&&A.forEach(function(Y){return e(g,Y)}),ot&&Ai(g,b),S}function m(g,v,y,_){if(typeof y=="object"&&y!==null&&y.type===Sa&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Xs:e:{for(var S=y.key,M=v;M!==null;){if(M.key===S){if(S=y.type,S===Sa){if(M.tag===7){n(g,M.sibling),v=i(M,y.props.children),v.return=g,g=v;break e}}else if(M.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xr&&Jm(S)===M.type){n(g,M.sibling),v=i(M,y.props),v.ref=So(g,M,y),v.return=g,g=v;break e}n(g,M);break}else e(g,M);M=M.sibling}y.type===Sa?(v=Gi(y.props.children,g.mode,_,y.key),v.return=g,g=v):(_=Ql(y.type,y.key,y.props,null,g.mode,_),_.ref=So(g,v,y),_.return=g,g=_)}return o(g);case ba:e:{for(M=y.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),v=i(v,y.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=ud(y,g.mode,_),v.return=g,g=v}return o(g);case Xr:return M=y._init,m(g,v,M(y._payload),_)}if(Fo(y))return x(g,v,y,_);if(vo(y))return h(g,v,y,_);al(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,y),v.return=g,g=v):(n(g,v),v=ld(y,g.mode,_),v.return=g,g=v),o(g)):n(g,v)}return m}var qa=Py(!0),Ry=Py(!1),mu=yi(null),gu=null,Pa=null,rh=null;function ih(){rh=Pa=gu=null}function ah(t){var e=mu.current;at(mu),t._currentValue=e}function Qf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ba(t,e){gu=t,rh=Pa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(rh!==t)if(t={context:t,memoizedValue:e,next:null},Pa===null){if(gu===null)throw Error(oe(308));Pa=t,gu.dependencies={lanes:0,firstContext:t}}else Pa=Pa.next=t;return e}var Oi=null;function oh(t){Oi===null?Oi=[t]:Oi.push(t)}function Ly(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,oh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fr(t,r)}function Fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fr(t,n)}return i=r.interleaved,i===null?(e.next=e,oh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fr(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;Yr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,f=u=l=null,s=a;do{var c=s.lane,p=s.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=t,h=s;switch(c=e,p=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(p,d,c);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,c=typeof x=="function"?x.call(p,d,c):x,c==null)break e;d=dt({},d,c);break e;case 2:Yr=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[s]:c.push(s))}else p={eventTime:p,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=c;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;c=s,s=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);$i|=o,t.lanes=o,t.memoizedState=d}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(oe(191,i));i.call(r)}}}var Ps={},hr=yi(Ps),ds=yi(Ps),fs=yi(Ps);function Fi(t){if(t===Ps)throw Error(oe(174));return t}function lh(t,e){switch(et(fs,e),et(ds,t),et(hr,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}at(hr),et(hr,e)}function Xa(){at(hr),at(ds),at(fs)}function Ny(t){Fi(fs.current);var e=Fi(hr.current),n=Lf(e,t.type);e!==n&&(et(ds,t),et(hr,n))}function uh(t){ds.current===t&&(at(hr),at(ds))}var ut=yi(0);function xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nd=[];function ch(){for(var t=0;t<nd.length;t++)nd[t]._workInProgressVersionPrimary=null;nd.length=0}var ql=Br.ReactCurrentDispatcher,rd=Br.ReactCurrentBatchConfig,ji=0,ct=null,yt=null,Tt=null,yu=!1,qo=!1,ps=0,Ww=0;function Bt(){throw Error(oe(321))}function dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function fh(t,e,n,r,i,a){if(ji=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ql.current=t===null||t.memoizedState===null?qw:Xw,t=n(r,i),qo){a=0;do{if(qo=!1,ps=0,25<=a)throw Error(oe(301));a+=1,Tt=yt=null,e.updateQueue=null,ql.current=Yw,t=n(r,i)}while(qo)}if(ql.current=_u,e=yt!==null&&yt.next!==null,ji=0,Tt=yt=ct=null,yu=!1,e)throw Error(oe(300));return t}function ph(){var t=ps!==0;return ps=0,t}function lr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ct.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Hn(){if(yt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Tt===null?ct.memoizedState:Tt.next;if(e!==null)Tt=e,yt=t;else{if(t===null)throw Error(oe(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?ct.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function hs(t,e){return typeof e=="function"?e(t):e}function id(t){var e=Hn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var r=yt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var f=u.lane;if((ji&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,ct.lanes|=f,$i|=f}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,nr(r,e.memoizedState)||(ln=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,ct.lanes|=a,$i|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ad(t){var e=Hn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);nr(a,e.memoizedState)||(ln=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function ky(){}function Oy(t,e){var n=ct,r=Hn(),i=e(),a=!nr(r.memoizedState,i);if(a&&(r.memoizedState=i,ln=!0),r=r.queue,hh(By.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,ms(9,zy.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(oe(349));ji&30||Fy(n,e,i)}return i}function Fy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zy(t,e,n,r){e.value=n,e.getSnapshot=r,Uy(e)&&Gy(t)}function By(t,e,n){return n(function(){Uy(e)&&Gy(t)})}function Uy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function Gy(t){var e=Fr(t,1);e!==null&&tr(e,t,1,-1)}function ng(t){var e=lr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:t},e.queue=t,t=t.dispatch=$w.bind(null,ct,t),[e.memoizedState,t]}function ms(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vy(){return Hn().memoizedState}function Xl(t,e,n,r){var i=lr();ct.flags|=t,i.memoizedState=ms(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=Hn();r=r===void 0?null:r;var a=void 0;if(yt!==null){var o=yt.memoizedState;if(a=o.destroy,r!==null&&dh(r,o.deps)){i.memoizedState=ms(e,n,a,r);return}}ct.flags|=t,i.memoizedState=ms(1|e,n,a,r)}function rg(t,e){return Xl(8390656,8,t,e)}function hh(t,e){return qu(2048,8,t,e)}function Wy(t,e){return qu(4,2,t,e)}function Hy(t,e){return qu(4,4,t,e)}function jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $y(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,jy.bind(null,e,t),n)}function mh(){}function qy(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xy(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yy(t,e,n){return ji&21?(nr(n,e)||(n=ey(),ct.lanes|=n,$i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function Hw(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var r=rd.transition;rd.transition={};try{t(!1),e()}finally{Ze=n,rd.transition=r}}function Ky(){return Hn().memoizedState}function jw(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zy(t))Qy(e,n);else if(n=Ly(t,e,n,r),n!==null){var i=nn();tr(n,t,r,i),Jy(n,e,r)}}function $w(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zy(t))Qy(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,nr(s,o)){var l=e.interleaved;l===null?(i.next=i,oh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ly(t,e,i,r),n!==null&&(i=nn(),tr(n,t,r,i),Jy(n,e,r))}}function Zy(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Qy(t,e){qo=yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$p(t,n)}}var _u={readContext:Wn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},qw={readContext:Wn,useCallback:function(t,e){return lr().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=lr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jw.bind(null,ct,t),[r.memoizedState,t]},useRef:function(t){var e=lr();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:mh,useDeferredValue:function(t){return lr().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=Hw.bind(null,t[1]),lr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ct,i=lr();if(ot){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Dt===null)throw Error(oe(349));ji&30||Fy(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,rg(By.bind(null,r,a,t),[t]),r.flags|=2048,ms(9,zy.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=lr(),e=Dt.identifierPrefix;if(ot){var n=Ar,r=Dr;n=(r&~(1<<32-er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ww++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xw={readContext:Wn,useCallback:qy,useContext:Wn,useEffect:hh,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Hy,useMemo:Xy,useReducer:id,useRef:Vy,useState:function(){return id(hs)},useDebugValue:mh,useDeferredValue:function(t){var e=Hn();return Yy(e,yt.memoizedState,t)},useTransition:function(){var t=id(hs)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1},Yw={readContext:Wn,useCallback:qy,useContext:Wn,useEffect:hh,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Hy,useMemo:Xy,useReducer:ad,useRef:Vy,useState:function(){return ad(hs)},useDebugValue:mh,useDeferredValue:function(t){var e=Hn();return yt===null?e.memoizedState=t:Yy(e,yt.memoizedState,t)},useTransition:function(){var t=ad(hs)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:ky,useSyncExternalStore:Oy,useId:Ky,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xu={isMounted:function(t){return(t=t._reactInternals)?ea(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nn(),i=li(t),a=Ir(r,i);a.payload=e,n!=null&&(a.callback=n),e=oi(t,a,i),e!==null&&(tr(e,t,i,r),$l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nn(),i=li(t),a=Ir(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=oi(t,a,i),e!==null&&(tr(e,t,i,r),$l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),r=li(t),i=Ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(tr(e,t,r,n),$l(e,t,r))}};function ig(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!ss(n,r)||!ss(i,a):!0}function e_(t,e,n){var r=!1,i=gi,a=e.contextType;return typeof a=="object"&&a!==null?a=Wn(a):(i=dn(e)?Wi:$t.current,r=e.contextTypes,a=(r=r!=null)?ja(t,i):gi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function ag(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xu.enqueueReplaceState(e,e.state,null)}function ep(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sh(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Wn(a):(a=dn(e)?Wi:$t.current,i.context=ja(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Jf(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xu.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ya(t,e){try{var n="",r=e;do n+=w1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kw=typeof WeakMap=="function"?WeakMap:Map;function t_(t,e,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,dp=r),tp(t,e)},n}function n_(t,e,n){n=Ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tp(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){tp(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cM.bind(null,t,e,n),e.then(t,t))}function sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ir(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var Zw=Br.ReactCurrentOwner,ln=!1;function Jt(t,e,n,r){e.child=t===null?Ry(e,null,n,r):qa(e,t.child,n,r)}function ug(t,e,n,r,i){n=n.render;var a=e.ref;return Ba(e,i),r=fh(t,e,n,r,a,i),n=ph(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(ot&&n&&eh(e),e.flags|=1,Jt(t,e,r,i),e.child)}function cg(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!wh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,r_(t,e,a,r,i)):(t=Ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(o,r)&&t.ref===e.ref)return zr(t,e,i)}return e.flags|=1,t=ui(a,r),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(ss(a,r)&&t.ref===e.ref)if(ln=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,zr(t,e,i)}return np(t,e,n,r,i)}function i_(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(La,xn),xn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(La,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,et(La,xn),xn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,et(La,xn),xn|=r;return Jt(t,e,i,n),e.child}function a_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function np(t,e,n,r,i){var a=dn(n)?Wi:$t.current;return a=ja(e,a),Ba(e,i),n=fh(t,e,n,r,a,i),r=ph(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zr(t,e,i)):(ot&&r&&eh(e),e.flags|=1,Jt(t,e,n,i),e.child)}function dg(t,e,n,r,i){if(dn(n)){var a=!0;fu(e)}else a=!1;if(Ba(e,i),e.stateNode===null)Yl(t,e),e_(e,n,r),ep(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=dn(n)?Wi:$t.current,u=ja(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&ag(e,o,r,u),Yr=!1;var c=e.memoizedState;o.state=c,vu(e,r,o,i),l=e.memoizedState,s!==r||c!==l||cn.current||Yr?(typeof f=="function"&&(Jf(e,n,f,r),l=e.memoizedState),(s=Yr||ig(e,n,s,r,c,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iy(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Yn(e.type,s),o.props=u,d=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=dn(n)?Wi:$t.current,l=ja(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||c!==l)&&ag(e,o,r,l),Yr=!1,c=e.memoizedState,o.state=c,vu(e,r,o,i);var x=e.memoizedState;s!==d||c!==x||cn.current||Yr?(typeof p=="function"&&(Jf(e,n,p,r),x=e.memoizedState),(u=Yr||ig(e,n,u,r,c,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return rp(t,e,n,r,a,i)}function rp(t,e,n,r,i,a){a_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Km(e,n,!1),zr(t,e,a);r=e.stateNode,Zw.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qa(e,t.child,null,a),e.child=qa(e,null,s,a)):Jt(t,e,s,a),e.memoizedState=r.state,i&&Km(e,n,!0),e.child}function o_(t){var e=t.stateNode;e.pendingContext?Ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ym(t,e.context,!1),lh(t,e.containerInfo)}function fg(t,e,n,r,i){return $a(),nh(i),e.flags|=256,Jt(t,e,n,r),e.child}var ip={dehydrated:null,treeContext:null,retryLane:0};function ap(t){return{baseLanes:t,cachePool:null,transitions:null}}function s_(t,e,n){var r=e.pendingProps,i=ut.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),et(ut,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Zu(o,r,0,null),t=Gi(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=ap(n),e.memoizedState=ip,t):gh(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qw(t,e,o,r,s,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=ui(s,a):(a=Gi(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?ap(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=ip,r}return a=t.child,t=a.sibling,r=ui(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gh(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&nh(r),qa(e,t.child,null,n),t=gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qw(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=od(Error(oe(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),a=Gi(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&qa(e,t.child,null,o),e.child.memoizedState=ap(o),e.memoizedState=ip,a);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(oe(419)),r=od(a,r,void 0),ol(t,e,o,r)}if(s=(o&t.childLanes)!==0,ln||s){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Fr(t,i),tr(r,t,i,-1))}return Sh(),r=od(Error(oe(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dM.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,bn=ai(i.nextSibling),Sn=e,ot=!0,Zn=null,t!==null&&(Fn[zn++]=Dr,Fn[zn++]=Ar,Fn[zn++]=Hi,Dr=t.id,Ar=t.overflow,Hi=e),e=gh(e,r.children),e.flags|=4096,e)}function pg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qf(t.return,e,n)}function sd(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function l_(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Jt(t,e,r.children,n),r=ut.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,n,e);else if(t.tag===19)pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(et(ut,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sd(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sd(e,!0,n,null,a);break;case"together":sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jw(t,e,n){switch(e.tag){case 3:o_(e),$a();break;case 5:Ny(e);break;case 1:dn(e.type)&&fu(e);break;case 4:lh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;et(mu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(et(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?s_(t,e,n):(et(ut,ut.current&1),t=zr(t,e,n),t!==null?t.sibling:null);et(ut,ut.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return l_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(ut,ut.current),r)break;return null;case 22:case 23:return e.lanes=0,i_(t,e,n)}return zr(t,e,n)}var u_,op,c_,d_;u_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};op=function(){};c_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(hr.current);var a=null;switch(n){case"input":i=Df(t,i),r=Df(t,r),a=[];break;case"select":i=dt({},i,{value:void 0}),r=dt({},r,{value:void 0}),a=[];break;case"textarea":i=Rf(t,i),r=Rf(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cu)}If(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};d_=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eM(t,e,n){var r=e.pendingProps;switch(th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return dn(e.type)&&du(),Ut(e),null;case 3:return r=e.stateNode,Xa(),at(cn),at($t),ch(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(hp(Zn),Zn=null))),op(t,e),Ut(e),null;case 5:uh(e);var i=Fi(fs.current);if(n=e.type,t!==null&&e.stateNode!=null)c_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(oe(166));return Ut(e),null}if(t=Fi(hr.current),il(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[dr]=e,r[cs]=a,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",r),rt("close",r);break;case"iframe":case"object":case"embed":rt("load",r);break;case"video":case"audio":for(i=0;i<Bo.length;i++)rt(Bo[i],r);break;case"source":rt("error",r);break;case"img":case"image":case"link":rt("error",r),rt("load",r);break;case"details":rt("toggle",r);break;case"input":Sm(r,a),rt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},rt("invalid",r);break;case"textarea":Mm(r,a),rt("invalid",r)}If(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&rl(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&rl(r.textContent,s,t),i=["children",""+s]):es.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&rt("scroll",r)}switch(n){case"input":Ys(r),wm(r,a,!0);break;case"textarea":Ys(r),Em(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=cu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dr]=e,t[cs]=r,u_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,r),n){case"dialog":rt("cancel",t),rt("close",t),i=r;break;case"iframe":case"object":case"embed":rt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bo.length;i++)rt(Bo[i],t);i=r;break;case"source":rt("error",t),i=r;break;case"img":case"image":case"link":rt("error",t),rt("load",t),i=r;break;case"details":rt("toggle",t),i=r;break;case"input":Sm(t,r),i=Df(t,r),rt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=dt({},r,{value:void 0}),rt("invalid",t);break;case"textarea":Mm(t,r),i=Rf(t,r),rt("invalid",t);break;default:i=r}If(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Vx(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ux(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ts(t,l):typeof l=="number"&&ts(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?l!=null&&a==="onScroll"&&rt("scroll",t):l!=null&&Up(t,a,l,o))}switch(n){case"input":Ys(t),wm(t,r,!1);break;case"textarea":Ys(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?ka(t,!!r.multiple,a,!1):r.defaultValue!=null&&ka(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)d_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Fi(fs.current),Fi(hr.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[dr]=e,(a=r.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dr]=e,e.stateNode=r}return Ut(e),null;case 13:if(at(ut),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&bn!==null&&e.mode&1&&!(e.flags&128))Ay(),$a(),e.flags|=98560,a=!1;else if(a=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(oe(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(oe(317));a[dr]=e}else $a(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),a=!1}else Zn!==null&&(hp(Zn),Zn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?_t===0&&(_t=3):Sh())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Xa(),op(t,e),t===null&&ls(e.stateNode.containerInfo),Ut(e),null;case 10:return ah(e.type._context),Ut(e),null;case 17:return dn(e.type)&&du(),Ut(e),null;case 19:if(at(ut),a=e.memoizedState,a===null)return Ut(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)wo(a,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xu(t),o!==null){for(e.flags|=128,wo(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ut,ut.current&1|2),e.child}t=t.sibling}a.tail!==null&&ht()>Ka&&(e.flags|=128,r=!0,wo(a,!1),e.lanes=4194304)}else{if(!r)if(t=xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ot)return Ut(e),null}else 2*ht()-a.renderingStartTime>Ka&&n!==1073741824&&(e.flags|=128,r=!0,wo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ht(),e.sibling=null,n=ut.current,et(ut,r?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return bh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function tM(t,e){switch(th(e),e.tag){case 1:return dn(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xa(),at(cn),at($t),ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uh(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));$a()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Xa(),null;case 10:return ah(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var sl=!1,Ht=!1,nM=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ra(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function sp(t,e,n){try{n()}catch(r){ft(t,e,r)}}var hg=!1;function rM(t,e){if(Hf=su,t=gy(),Jp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,f=0,d=t,c=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===i&&(s=o),c===a&&++f===r&&(l=o),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jf={focusedElem:t,selectionRange:n},su=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,m=x.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Yn(e.type,h),m);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){ft(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=hg,hg=!1,x}function Xo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&sp(e,n,a)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f_(t){var e=t.alternate;e!==null&&(t.alternate=null,f_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dr],delete e[cs],delete e[Xf],delete e[Bw],delete e[Uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cu));else if(r!==4&&(t=t.child,t!==null))for(up(t,e,n),t=t.sibling;t!==null;)up(t,e,n),t=t.sibling}function cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cp(t,e,n),t=t.sibling;t!==null;)cp(t,e,n),t=t.sibling}var It=null,Kn=!1;function Gr(t,e,n){for(n=n.child;n!==null;)h_(t,e,n),n=n.sibling}function h_(t,e,n){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:Ht||Ra(n,e);case 6:var r=It,i=Kn;It=null,Gr(t,e,n),It=r,Kn=i,It!==null&&(Kn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Kn?(t=It,n=n.stateNode,t.nodeType===8?ed(t.parentNode,n):t.nodeType===1&&ed(t,n),as(t)):ed(It,n.stateNode));break;case 4:r=It,i=Kn,It=n.stateNode.containerInfo,Kn=!0,Gr(t,e,n),It=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&sp(n,e,o),i=i.next}while(i!==r)}Gr(t,e,n);break;case 1:if(!Ht&&(Ra(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ft(n,e,s)}Gr(t,e,n);break;case 21:Gr(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,Gr(t,e,n),Ht=r):Gr(t,e,n);break;default:Gr(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nM),e.forEach(function(r){var i=fM.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:It=s.stateNode,Kn=!1;break e;case 3:It=s.stateNode.containerInfo,Kn=!0;break e;case 4:It=s.stateNode.containerInfo,Kn=!0;break e}s=s.return}if(It===null)throw Error(oe(160));h_(a,o,i),It=null,Kn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ft(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,t),e=e.sibling}function m_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),or(t),r&4){try{Xo(3,t,t.return),Yu(3,t)}catch(h){ft(t,t.return,h)}try{Xo(5,t,t.return)}catch(h){ft(t,t.return,h)}}break;case 1:jn(e,t),or(t),r&512&&n!==null&&Ra(n,n.return);break;case 5:if(jn(e,t),or(t),r&512&&n!==null&&Ra(n,n.return),t.flags&32){var i=t.stateNode;try{ts(i,"")}catch(h){ft(t,t.return,h)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Fx(i,a),Nf(s,o);var u=Nf(s,a);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Vx(i,d):f==="dangerouslySetInnerHTML"?Ux(i,d):f==="children"?ts(i,d):Up(i,f,d,u)}switch(s){case"input":Af(i,a);break;case"textarea":zx(i,a);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?ka(i,!!a.multiple,p,!1):c!==!!a.multiple&&(a.defaultValue!=null?ka(i,!!a.multiple,a.defaultValue,!0):ka(i,!!a.multiple,a.multiple?[]:"",!1))}i[cs]=a}catch(h){ft(t,t.return,h)}}break;case 6:if(jn(e,t),or(t),r&4){if(t.stateNode===null)throw Error(oe(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(h){ft(t,t.return,h)}}break;case 3:if(jn(e,t),or(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(h){ft(t,t.return,h)}break;case 4:jn(e,t),or(t);break;case 13:jn(e,t),or(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(yh=ht())),r&4&&gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||f,jn(e,t),Ht=u):jn(e,t),or(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(d=xe=f;xe!==null;){switch(c=xe,p=c.child,c.tag){case 0:case 11:case 14:case 15:Xo(4,c,c.return);break;case 1:Ra(c,c.return);var x=c.stateNode;if(typeof x.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){ft(r,n,h)}}break;case 5:Ra(c,c.return);break;case 22:if(c.memoizedState!==null){xg(d);continue}}p!==null?(p.return=c,xe=p):xg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Gx("display",o))}catch(h){ft(t,t.return,h)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){ft(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,t),or(t),r&4&&gg(t);break;case 21:break;default:jn(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var r=n;break e}n=n.return}throw Error(oe(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ts(i,""),r.flags&=-33);var a=mg(t);cp(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=mg(t);up(t,s,o);break;default:throw Error(oe(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iM(t,e,n){xe=t,g_(t)}function g_(t,e,n){for(var r=(t.mode&1)!==0;xe!==null;){var i=xe,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ht;s=sl;var u=Ht;if(sl=o,(Ht=l)&&!u)for(xe=i;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?yg(i):l!==null?(l.return=o,xe=l):yg(i);for(;a!==null;)xe=a,g_(a),a=a.sibling;xe=i,sl=s,Ht=u}vg(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,xe=a):vg(t)}}function vg(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&tg(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&as(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Ht||e.flags&512&&lp(e)}catch(c){ft(e,e.return,c)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function xg(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function yg(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){ft(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ft(e,i,l)}}var a=e.return;try{lp(e)}catch(l){ft(e,a,l)}break;case 5:var o=e.return;try{lp(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){xe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,xe=s;break}xe=e.return}}var aM=Math.ceil,bu=Br.ReactCurrentDispatcher,vh=Br.ReactCurrentOwner,Vn=Br.ReactCurrentBatchConfig,je=0,Dt=null,xt=null,kt=0,xn=0,La=yi(0),_t=0,gs=null,$i=0,Ku=0,xh=0,Yo=null,sn=null,yh=0,Ka=1/0,Er=null,Su=!1,dp=null,si=null,ll=!1,Jr=null,wu=0,Ko=0,fp=null,Kl=-1,Zl=0;function nn(){return je&6?ht():Kl!==-1?Kl:Kl=ht()}function li(t){return t.mode&1?je&2&&kt!==0?kt&-kt:Vw.transition!==null?(Zl===0&&(Zl=ey()),Zl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:sy(t.type)),t):1}function tr(t,e,n,r){if(50<Ko)throw Ko=0,fp=null,Error(oe(185));Ts(t,n,r),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&(Ku|=n),_t===4&&Zr(t,kt)),fn(t,r),n===1&&je===0&&!(e.mode&1)&&(Ka=ht()+500,$u&&_i()))}function fn(t,e){var n=t.callbackNode;V1(t,e);var r=ou(t,t===Dt?kt:0);if(r===0)n!==null&&Dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dm(n),e===1)t.tag===0?Gw(_g.bind(null,t)):Cy(_g.bind(null,t)),Fw(function(){!(je&6)&&_i()}),n=null;else{switch(ty(r)){case 1:n=jp;break;case 4:n=Qx;break;case 16:n=au;break;case 536870912:n=Jx;break;default:n=au}n=M_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(Kl=-1,Zl=0,je&6)throw Error(oe(327));var n=t.callbackNode;if(Ua()&&t.callbackNode!==n)return null;var r=ou(t,t===Dt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mu(t,r);else{e=r;var i=je;je|=2;var a=y_();(Dt!==t||kt!==e)&&(Er=null,Ka=ht()+500,Ui(t,e));do try{lM();break}catch(s){x_(t,s)}while(!0);ih(),bu.current=a,je=i,xt!==null?e=0:(Dt=null,kt=0,e=_t)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=pp(t,i))),e===1)throw n=gs,Ui(t,0),Zr(t,r),fn(t,ht()),n;if(e===6)Zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oM(i)&&(e=Mu(t,r),e===2&&(a=Bf(t),a!==0&&(r=a,e=pp(t,a))),e===1))throw n=gs,Ui(t,0),Zr(t,r),fn(t,ht()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(oe(345));case 2:Pi(t,sn,Er);break;case 3:if(Zr(t,r),(r&130023424)===r&&(e=yh+500-ht(),10<e)){if(ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Pi.bind(null,t,sn,Er),e);break}Pi(t,sn,Er);break;case 4:if(Zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-er(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aM(r/1960))-r,10<r){t.timeoutHandle=qf(Pi.bind(null,t,sn,Er),r);break}Pi(t,sn,Er);break;case 5:Pi(t,sn,Er);break;default:throw Error(oe(329))}}}return fn(t,ht()),t.callbackNode===n?v_.bind(null,t):null}function pp(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Ui(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=sn,sn=n,e!==null&&hp(e)),t}function hp(t){sn===null?sn=t:sn.push.apply(sn,t)}function oM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!nr(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zr(t,e){for(e&=~xh,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),r=1<<n;t[n]=-1,e&=~r}}function _g(t){if(je&6)throw Error(oe(327));Ua();var e=ou(t,0);if(!(e&1))return fn(t,ht()),null;var n=Mu(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=pp(t,r))}if(n===1)throw n=gs,Ui(t,0),Zr(t,e),fn(t,ht()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pi(t,sn,Er),fn(t,ht()),null}function _h(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ka=ht()+500,$u&&_i())}}function qi(t){Jr!==null&&Jr.tag===0&&!(je&6)&&Ua();var e=je;je|=1;var n=Vn.transition,r=Ze;try{if(Vn.transition=null,Ze=1,t)return t()}finally{Ze=r,Vn.transition=n,je=e,!(je&6)&&_i()}}function bh(){xn=La.current,at(La)}function Ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ow(n)),xt!==null)for(n=xt.return;n!==null;){var r=n;switch(th(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:Xa(),at(cn),at($t),ch();break;case 5:uh(r);break;case 4:Xa();break;case 13:at(ut);break;case 19:at(ut);break;case 10:ah(r.type._context);break;case 22:case 23:bh()}n=n.return}if(Dt=t,xt=t=ui(t.current,null),kt=xn=e,_t=0,gs=null,xh=Ku=$i=0,sn=Yo=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Oi=null}return t}function x_(t,e){do{var n=xt;try{if(ih(),ql.current=_u,yu){for(var r=ct.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yu=!1}if(ji=0,Tt=yt=ct=null,qo=!1,ps=0,vh.current=null,n===null||n.return===null){_t=1,gs=e,xt=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=kt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=sg(o);if(p!==null){p.flags&=-257,lg(p,o,s,a,e),p.mode&1&&og(a,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){og(a,u,e),Sh();break e}l=Error(oe(426))}}else if(ot&&s.mode&1){var m=sg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lg(m,o,s,a,e),nh(Ya(l,s));break e}}a=l=Ya(l,s),_t!==4&&(_t=2),Yo===null?Yo=[a]:Yo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var g=t_(a,l,e);eg(a,g);break e;case 1:s=l;var v=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(si===null||!si.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=n_(a,s,e);eg(a,_);break e}}a=a.return}while(a!==null)}b_(n)}catch(S){e=S,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function y_(){var t=bu.current;return bu.current=_u,t===null?_u:t}function Sh(){(_t===0||_t===3||_t===2)&&(_t=4),Dt===null||!($i&268435455)&&!(Ku&268435455)||Zr(Dt,kt)}function Mu(t,e){var n=je;je|=2;var r=y_();(Dt!==t||kt!==e)&&(Er=null,Ui(t,e));do try{sM();break}catch(i){x_(t,i)}while(!0);if(ih(),je=n,bu.current=r,xt!==null)throw Error(oe(261));return Dt=null,kt=0,_t}function sM(){for(;xt!==null;)__(xt)}function lM(){for(;xt!==null&&!I1();)__(xt)}function __(t){var e=w_(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?b_(t):xt=e,vh.current=null}function b_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tM(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,xt=null;return}}else if(n=eM(n,e,xn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);_t===0&&(_t=5)}function Pi(t,e,n){var r=Ze,i=Vn.transition;try{Vn.transition=null,Ze=1,uM(t,e,n,r)}finally{Vn.transition=i,Ze=r}return null}function uM(t,e,n,r){do Ua();while(Jr!==null);if(je&6)throw Error(oe(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(W1(t,a),t===Dt&&(xt=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,M_(au,function(){return Ua(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Vn.transition,Vn.transition=null;var o=Ze;Ze=1;var s=je;je|=4,vh.current=null,rM(t,n),m_(n,t),Aw(jf),su=!!Hf,jf=Hf=null,t.current=n,iM(n),N1(),je=s,Ze=o,Vn.transition=a}else t.current=n;if(ll&&(ll=!1,Jr=t,wu=i),a=t.pendingLanes,a===0&&(si=null),F1(n.stateNode),fn(t,ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=dp,dp=null,t;return wu&1&&t.tag!==0&&Ua(),a=t.pendingLanes,a&1?t===fp?Ko++:(Ko=0,fp=t):Ko=0,_i(),null}function Ua(){if(Jr!==null){var t=ty(wu),e=Vn.transition,n=Ze;try{if(Vn.transition=null,Ze=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,wu=0,je&6)throw Error(oe(331));var i=je;for(je|=4,xe=t.current;xe!==null;){var a=xe,o=a.child;if(xe.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(xe=u;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:Xo(8,f,a)}var d=f.child;if(d!==null)d.return=f,xe=d;else for(;xe!==null;){f=xe;var c=f.sibling,p=f.return;if(f_(f),f===u){xe=null;break}if(c!==null){c.return=p,xe=c;break}xe=p}}}var x=a.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var m=h.sibling;h.sibling=null,h=m}while(h!==null)}}xe=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,xe=o;else e:for(;xe!==null;){if(a=xe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xo(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,xe=g;break e}xe=a.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,xe=y;else e:for(o=v;xe!==null;){if(s=xe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Yu(9,s)}}catch(S){ft(s,s.return,S)}if(s===o){xe=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,xe=_;break e}xe=s.return}}if(je=i,_i(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(Gu,t)}catch{}r=!0}return r}finally{Ze=n,Vn.transition=e}}return!1}function bg(t,e,n){e=Ya(n,e),e=t_(t,e,1),t=oi(t,e,1),e=nn(),t!==null&&(Ts(t,1,e),fn(t,e))}function ft(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=Ya(n,t),t=n_(e,t,1),e=oi(e,t,1),t=nn(),e!==null&&(Ts(e,1,t),fn(e,t));break}}e=e.return}}function cM(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(_t===4||_t===3&&(kt&130023424)===kt&&500>ht()-yh?Ui(t,0):xh|=n),fn(t,e)}function S_(t,e){e===0&&(t.mode&1?(e=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):e=1);var n=nn();t=Fr(t,e),t!==null&&(Ts(t,e,n),fn(t,n))}function dM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),S_(t,n)}function fM(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(oe(314))}r!==null&&r.delete(e),S_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Jw(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ot&&e.flags&1048576&&Ty(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yl(t,e),t=e.pendingProps;var i=ja(e,$t.current);Ba(e,n),i=fh(null,e,r,t,i,n);var a=ph();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(a=!0,fu(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sh(e),i.updater=Xu,e.stateNode=i,i._reactInternals=e,ep(e,r,t,n),e=rp(null,e,r,!0,a,n)):(e.tag=0,ot&&a&&eh(e),Jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hM(r),t=Yn(r,t),i){case 0:e=np(null,e,r,t,n);break e;case 1:e=dg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,Yn(r.type,t),n);break e}throw Error(oe(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),np(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),dg(t,e,r,i,n);case 3:e:{if(o_(e),t===null)throw Error(oe(387));r=e.pendingProps,a=e.memoizedState,i=a.element,Iy(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=Ya(Error(oe(423)),e),e=fg(t,e,r,n,i);break e}else if(r!==i){i=Ya(Error(oe(424)),e),e=fg(t,e,r,n,i);break e}else for(bn=ai(e.stateNode.containerInfo.firstChild),Sn=e,ot=!0,Zn=null,n=Ry(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($a(),r===i){e=zr(t,e,n);break e}Jt(t,e,r,n)}e=e.child}return e;case 5:return Ny(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,$f(r,i)?o=null:a!==null&&$f(r,a)&&(e.flags|=32),a_(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return s_(t,e,n);case 4:return lh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qa(e,null,r,n):Jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),ug(t,e,r,i,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,et(mu,r._currentValue),r._currentValue=o,a!==null)if(nr(a.value,o)){if(a.children===i.children&&!cn.current){e=zr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Ir(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qf(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(oe(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qf(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ba(e,n),i=Wn(i),r=r(i),e.flags|=1,Jt(t,e,r,n),e.child;case 14:return r=e.type,i=Yn(r,e.pendingProps),i=Yn(r.type,i),cg(t,e,r,i,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yn(r,i),Yl(t,e),e.tag=1,dn(r)?(t=!0,fu(e)):t=!1,Ba(e,n),e_(e,r,i),ep(e,r,i,n),rp(null,e,r,!0,t,n);case 19:return l_(t,e,n);case 22:return i_(t,e,n)}throw Error(oe(156,e.tag))};function M_(t,e){return Zx(t,e)}function pM(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,r){return new pM(t,e,n,r)}function wh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hM(t){if(typeof t=="function")return wh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vp)return 11;if(t===Wp)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")wh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sa:return Gi(n.children,i,a,e);case Gp:o=8,i|=8;break;case Mf:return t=Un(12,n,e,i|2),t.elementType=Mf,t.lanes=a,t;case Ef:return t=Un(13,n,e,i),t.elementType=Ef,t.lanes=a,t;case Cf:return t=Un(19,n,e,i),t.elementType=Cf,t.lanes=a,t;case Nx:return Zu(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lx:o=10;break e;case Ix:o=9;break e;case Vp:o=11;break e;case Wp:o=14;break e;case Xr:o=16,r=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function Gi(t,e,n,r){return t=Un(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=Un(22,t,r,e),t.elementType=Nx,t.lanes=n,t.stateNode={isHidden:!1},t}function ld(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function ud(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mM(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,r,i,a,o,s,l){return t=new mM(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Un(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(a),t}function gM(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ba,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function E_(t){if(!t)return gi;t=t._reactInternals;e:{if(ea(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(dn(n))return Ey(t,n,e)}return e}function C_(t,e,n,r,i,a,o,s,l){return t=Mh(n,r,!0,t,i,a,o,s,l),t.context=E_(null),n=t.current,r=nn(),i=li(n),a=Ir(r,i),a.callback=e??null,oi(n,a,i),t.current.lanes=i,Ts(t,i,r),fn(t,r),t}function Qu(t,e,n,r){var i=e.current,a=nn(),o=li(i);return n=E_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ir(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(tr(t,i,o,a),$l(t,i,o)),o}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eh(t,e){Sg(t,e),(t=t.alternate)&&Sg(t,e)}function vM(){return null}var T_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ch(t){this._internalRoot=t}Ju.prototype.render=Ch.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Qu(t,e,null,null)};Ju.prototype.unmount=Ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qi(function(){Qu(null,t,null,null)}),e[Or]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=iy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&oy(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wg(){}function xM(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Eu(o);a.call(u)}}var o=C_(e,r,t,0,null,!1,!1,"",wg);return t._reactRootContainer=o,t[Or]=o.current,ls(t.nodeType===8?t.parentNode:t),qi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Eu(l);s.call(u)}}var l=Mh(t,0,!1,null,null,!1,!1,"",wg);return t._reactRootContainer=l,t[Or]=l.current,ls(t.nodeType===8?t.parentNode:t),qi(function(){Qu(e,l,n,r)}),l}function tc(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Eu(o);s.call(l)}}Qu(e,o,t,i)}else o=xM(n,e,t,i,r);return Eu(o)}ny=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&($p(e,n|1),fn(e,ht()),!(je&6)&&(Ka=ht()+500,_i()))}break;case 13:qi(function(){var r=Fr(t,1);if(r!==null){var i=nn();tr(r,t,1,i)}}),Eh(t,1)}};qp=function(t){if(t.tag===13){var e=Fr(t,134217728);if(e!==null){var n=nn();tr(e,t,134217728,n)}Eh(t,134217728)}};ry=function(t){if(t.tag===13){var e=li(t),n=Fr(t,e);if(n!==null){var r=nn();tr(n,t,e,r)}Eh(t,e)}};iy=function(){return Ze};ay=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Of=function(t,e,n){switch(e){case"input":if(Af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ju(r);if(!i)throw Error(oe(90));Ox(r),Af(r,i)}}}break;case"textarea":zx(t,n);break;case"select":e=n.value,e!=null&&ka(t,!!n.multiple,e,!1)}};jx=_h;$x=qi;var yM={usingClientEntryPoint:!1,Events:[As,Ca,ju,Wx,Hx,_h]},Mo={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_M={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yx(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||vM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Gu=ul.inject(_M),pr=ul}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yM;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(oe(200));return gM(t,e,null,n)};Pn.createRoot=function(t,e){if(!Th(t))throw Error(oe(299));var n=!1,r="",i=T_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,r,i),t[Or]=e.current,ls(t.nodeType===8?t.parentNode:t),new Ch(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Yx(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return qi(t)};Pn.hydrate=function(t,e,n){if(!ec(e))throw Error(oe(200));return tc(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(oe(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=T_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C_(e,null,t,1,n??null,i,!1,a,o),t[Or]=e.current,ls(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ju(e)};Pn.render=function(t,e,n){if(!ec(e))throw Error(oe(200));return tc(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!ec(t))throw Error(oe(40));return t._reactRootContainer?(qi(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};Pn.unstable_batchedUpdates=_h;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return tc(t,e,n,!1,r)};Pn.version="18.3.1-next-f1338f8080-20240426";function D_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D_)}catch(t){console.error(t)}}D_(),Dx.exports=Pn;var Dh=Dx.exports;const bM=vr(Dh);var A_,Mg=Dh;A_=Mg.createRoot,Mg.hydrateRoot;var P_={exports:{}},Je={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=60103,rc=60106,Rs=60107,Ls=60108,Is=60114,Ns=60109,ks=60110,Os=60112,Fs=60113,Ah=60120,zs=60115,Bs=60116,R_=60121,L_=60122,I_=60117,N_=60129,k_=60131;if(typeof Symbol=="function"&&Symbol.for){var Lt=Symbol.for;nc=Lt("react.element"),rc=Lt("react.portal"),Rs=Lt("react.fragment"),Ls=Lt("react.strict_mode"),Is=Lt("react.profiler"),Ns=Lt("react.provider"),ks=Lt("react.context"),Os=Lt("react.forward_ref"),Fs=Lt("react.suspense"),Ah=Lt("react.suspense_list"),zs=Lt("react.memo"),Bs=Lt("react.lazy"),R_=Lt("react.block"),L_=Lt("react.server.block"),I_=Lt("react.fundamental"),N_=Lt("react.debug_trace_mode"),k_=Lt("react.legacy_hidden")}function rr(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case nc:switch(t=t.type,t){case Rs:case Is:case Ls:case Fs:case Ah:return t;default:switch(t=t&&t.$$typeof,t){case ks:case Os:case Bs:case zs:case Ns:return t;default:return e}}case rc:return e}}}var SM=Ns,wM=nc,MM=Os,EM=Rs,CM=Bs,TM=zs,DM=rc,AM=Is,PM=Ls,RM=Fs;Je.ContextConsumer=ks;Je.ContextProvider=SM;Je.Element=wM;Je.ForwardRef=MM;Je.Fragment=EM;Je.Lazy=CM;Je.Memo=TM;Je.Portal=DM;Je.Profiler=AM;Je.StrictMode=PM;Je.Suspense=RM;Je.isAsyncMode=function(){return!1};Je.isConcurrentMode=function(){return!1};Je.isContextConsumer=function(t){return rr(t)===ks};Je.isContextProvider=function(t){return rr(t)===Ns};Je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nc};Je.isForwardRef=function(t){return rr(t)===Os};Je.isFragment=function(t){return rr(t)===Rs};Je.isLazy=function(t){return rr(t)===Bs};Je.isMemo=function(t){return rr(t)===zs};Je.isPortal=function(t){return rr(t)===rc};Je.isProfiler=function(t){return rr(t)===Is};Je.isStrictMode=function(t){return rr(t)===Ls};Je.isSuspense=function(t){return rr(t)===Fs};Je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Rs||t===Is||t===N_||t===Ls||t===Fs||t===Ah||t===k_||typeof t=="object"&&t!==null&&(t.$$typeof===Bs||t.$$typeof===zs||t.$$typeof===Ns||t.$$typeof===ks||t.$$typeof===Os||t.$$typeof===I_||t.$$typeof===R_||t[0]===L_)};Je.typeOf=rr;P_.exports=Je;var Ph=P_.exports;function LM(t){function e(P,F,V,I,L){for(var ne=0,j=0,ce=0,ae=0,me,fe,Me=0,Be=0,Ae,Ue=Ae=me=0,Te=0,Ne=0,Ge=0,$e=0,zt=V.length,D=zt-1,w,B="",re="",pe="",ge="",_e;Te<zt;){if(fe=V.charCodeAt(Te),Te===D&&j+ae+ce+ne!==0&&(j!==0&&(fe=j===47?10:47),ae=ce=ne=0,zt++,D++),j+ae+ce+ne===0){if(Te===D&&(0<Ne&&(B=B.replace(c,"")),0<B.trim().length)){switch(fe){case 32:case 9:case 59:case 13:case 10:break;default:B+=V.charAt(Te)}fe=59}switch(fe){case 123:for(B=B.trim(),me=B.charCodeAt(0),Ae=1,$e=++Te;Te<zt;){switch(fe=V.charCodeAt(Te)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(fe=V.charCodeAt(Te+1)){case 42:case 47:e:{for(Ue=Te+1;Ue<D;++Ue)switch(V.charCodeAt(Ue)){case 47:if(fe===42&&V.charCodeAt(Ue-1)===42&&Te+2!==Ue){Te=Ue+1;break e}break;case 10:if(fe===47){Te=Ue+1;break e}}Te=Ue}}break;case 91:fe++;case 40:fe++;case 34:case 39:for(;Te++<D&&V.charCodeAt(Te)!==fe;);}if(Ae===0)break;Te++}switch(Ae=V.substring($e,Te),me===0&&(me=(B=B.replace(d,"").trim()).charCodeAt(0)),me){case 64:switch(0<Ne&&(B=B.replace(c,"")),fe=B.charCodeAt(1),fe){case 100:case 109:case 115:case 45:Ne=F;break;default:Ne=J}if(Ae=e(F,Ne,Ae,fe,L+1),$e=Ae.length,0<N&&(Ne=n(J,B,Ge),_e=s(3,Ae,Ne,F,z,Y,$e,fe,L,I),B=Ne.join(""),_e!==void 0&&($e=(Ae=_e.trim()).length)===0&&(fe=0,Ae="")),0<$e)switch(fe){case 115:B=B.replace(M,o);case 100:case 109:case 45:Ae=B+"{"+Ae+"}";break;case 107:B=B.replace(v,"$1 $2"),Ae=B+"{"+Ae+"}",Ae=$===1||$===2&&a("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=B+Ae,I===112&&(Ae=(re+=Ae,""))}else Ae="";break;default:Ae=e(F,n(F,B,Ge),Ae,I,L+1)}pe+=Ae,Ae=Ge=Ne=Ue=me=0,B="",fe=V.charCodeAt(++Te);break;case 125:case 59:if(B=(0<Ne?B.replace(c,""):B).trim(),1<($e=B.length))switch(Ue===0&&(me=B.charCodeAt(0),me===45||96<me&&123>me)&&($e=(B=B.replace(" ",":")).length),0<N&&(_e=s(1,B,F,P,z,Y,re.length,I,L,I))!==void 0&&($e=(B=_e.trim()).length)===0&&(B="\0\0"),me=B.charCodeAt(0),fe=B.charCodeAt(1),me){case 0:break;case 64:if(fe===105||fe===99){ge+=B+V.charAt(Te);break}default:B.charCodeAt($e-1)!==58&&(re+=i(B,me,fe,B.charCodeAt(2)))}Ge=Ne=Ue=me=0,B="",fe=V.charCodeAt(++Te)}}switch(fe){case 13:case 10:j===47?j=0:1+me===0&&I!==107&&0<B.length&&(Ne=1,B+="\0"),0<N*G&&s(0,B,F,P,z,Y,re.length,I,L,I),Y=1,z++;break;case 59:case 125:if(j+ae+ce+ne===0){Y++;break}default:switch(Y++,w=V.charAt(Te),fe){case 9:case 32:if(ae+ne+j===0)switch(Me){case 44:case 58:case 9:case 32:w="";break;default:fe!==32&&(w=" ")}break;case 0:w="\\0";break;case 12:w="\\f";break;case 11:w="\\v";break;case 38:ae+j+ne===0&&(Ne=Ge=1,w="\f"+w);break;case 108:if(ae+j+ne+k===0&&0<Ue)switch(Te-Ue){case 2:Me===112&&V.charCodeAt(Te-3)===58&&(k=Me);case 8:Be===111&&(k=Be)}break;case 58:ae+j+ne===0&&(Ue=Te);break;case 44:j+ce+ae+ne===0&&(Ne=1,w+="\r");break;case 34:case 39:j===0&&(ae=ae===fe?0:ae===0?fe:ae);break;case 91:ae+j+ce===0&&ne++;break;case 93:ae+j+ce===0&&ne--;break;case 41:ae+j+ne===0&&ce--;break;case 40:if(ae+j+ne===0){if(me===0)switch(2*Me+3*Be){case 533:break;default:me=1}ce++}break;case 64:j+ce+ae+ne+Ue+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<ae+ne+ce))switch(j){case 0:switch(2*fe+3*V.charCodeAt(Te+1)){case 235:j=47;break;case 220:$e=Te,j=42}break;case 42:fe===47&&Me===42&&$e+2!==Te&&(V.charCodeAt($e+2)===33&&(re+=V.substring($e,Te+1)),w="",j=0)}}j===0&&(B+=w)}Be=Me,Me=fe,Te++}if($e=re.length,0<$e){if(Ne=F,0<N&&(_e=s(2,re,Ne,P,z,Y,$e,I,L,I),_e!==void 0&&(re=_e).length===0))return ge+re+pe;if(re=Ne.join(",")+"{"+re+"}",$*k!==0){switch($!==2||a(re,2)||(k=0),k){case 111:re=re.replace(_,":-moz-$1")+re;break;case 112:re=re.replace(y,"::-webkit-input-$1")+re.replace(y,"::-moz-$1")+re.replace(y,":-ms-input-$1")+re}k=0}}return ge+re+pe}function n(P,F,V){var I=F.trim().split(m);F=I;var L=I.length,ne=P.length;switch(ne){case 0:case 1:var j=0;for(P=ne===0?"":P[0]+" ";j<L;++j)F[j]=r(P,F[j],V).trim();break;default:var ce=j=0;for(F=[];j<L;++j)for(var ae=0;ae<ne;++ae)F[ce++]=r(P[ae]+" ",I[j],V).trim()}return F}function r(P,F,V){var I=F.charCodeAt(0);switch(33>I&&(I=(F=F.trim()).charCodeAt(0)),I){case 38:return F.replace(g,"$1"+P.trim());case 58:return P.trim()+F.replace(g,"$1"+P.trim());default:if(0<1*V&&0<F.indexOf("\f"))return F.replace(g,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+F}function i(P,F,V,I){var L=P+";",ne=2*F+3*V+4*I;if(ne===944){P=L.indexOf(":",9)+1;var j=L.substring(P,L.length-1).trim();return j=L.substring(0,P).trim()+j+";",$===1||$===2&&a(j,1)?"-webkit-"+j+j:j}if($===0||$===2&&!a(L,1))return L;switch(ne){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(H,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return j=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+L+"-ms-flex-pack"+j+L;case 1005:return x.test(L)?L.replace(p,":-webkit-")+L.replace(p,":-moz-")+L:L;case 1e3:switch(j=L.substring(13).trim(),F=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(F)){case 226:j=L.replace(S,"tb");break;case 232:j=L.replace(S,"tb-rl");break;case 220:j=L.replace(S,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+j+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(F=(L=P).length-10,j=(L.charCodeAt(F)===33?L.substring(0,F):L).substring(P.indexOf(":",7)+1).trim(),ne=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:L=L.replace(j,"-webkit-"+j)+";"+L;break;case 207:case 102:L=L.replace(j,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+L.replace(j,"-webkit-"+j)+";"+L.replace(j,"-ms-"+j+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return j=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+j+"-ms-flex-"+j+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(b,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(b,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(R.test(P)===!0)return(j=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),F,V,I).replace(":fill-available",":stretch"):L.replace(j,"-webkit-"+j)+L.replace(j,"-moz-"+j.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,V+I===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+L}return L}function a(P,F){var V=P.indexOf(F===1?":":"{"),I=P.substring(0,F!==3?V:10);return V=P.substring(V+1,P.length-1),q(F!==2?I:I.replace(E,"$1"),V,F)}function o(P,F){var V=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return V!==F+";"?V.replace(A," or ($1)").substring(4):"("+F+")"}function s(P,F,V,I,L,ne,j,ce,ae,me){for(var fe=0,Me=F,Be;fe<N;++fe)switch(Be=ee[fe].call(f,P,Me,V,I,L,ne,j,ce,ae,me)){case void 0:case!1:case!0:case null:break;default:Me=Be}if(Me!==F)return Me}function l(P){switch(P){case void 0:case null:N=ee.length=0;break;default:if(typeof P=="function")ee[N++]=P;else if(typeof P=="object")for(var F=0,V=P.length;F<V;++F)l(P[F]);else G=!!P|0}return l}function u(P){return P=P.prefix,P!==void 0&&(q=null,P?typeof P!="function"?$=1:($=2,q=P):$=0),u}function f(P,F){var V=P;if(33>V.charCodeAt(0)&&(V=V.trim()),le=V,V=[le],0<N){var I=s(-1,F,V,V,z,Y,0,0,0,0);I!==void 0&&typeof I=="string"&&(F=I)}var L=e(J,V,F,0,0);return 0<N&&(I=s(-2,L,V,V,z,Y,L.length,0,0,0),I!==void 0&&(L=I)),le="",k=0,Y=z=1,L}var d=/^\0+/g,c=/[\0\r\f]/g,p=/: */g,x=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,b=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,H=/([^-])(image-set\()/,Y=1,z=1,k=0,$=1,J=[],ee=[],N=0,q=null,G=0,le="";return f.use=l,f.set=u,t!==void 0&&u(t),f}var IM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NM(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var kM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Eg=NM(function(t){return kM.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),O_={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt=typeof Symbol=="function"&&Symbol.for,Rh=Rt?Symbol.for("react.element"):60103,Lh=Rt?Symbol.for("react.portal"):60106,ic=Rt?Symbol.for("react.fragment"):60107,ac=Rt?Symbol.for("react.strict_mode"):60108,oc=Rt?Symbol.for("react.profiler"):60114,sc=Rt?Symbol.for("react.provider"):60109,lc=Rt?Symbol.for("react.context"):60110,Ih=Rt?Symbol.for("react.async_mode"):60111,uc=Rt?Symbol.for("react.concurrent_mode"):60111,cc=Rt?Symbol.for("react.forward_ref"):60112,dc=Rt?Symbol.for("react.suspense"):60113,OM=Rt?Symbol.for("react.suspense_list"):60120,fc=Rt?Symbol.for("react.memo"):60115,pc=Rt?Symbol.for("react.lazy"):60116,FM=Rt?Symbol.for("react.block"):60121,zM=Rt?Symbol.for("react.fundamental"):60117,BM=Rt?Symbol.for("react.responder"):60118,UM=Rt?Symbol.for("react.scope"):60119;function Ln(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Rh:switch(t=t.type,t){case Ih:case uc:case ic:case oc:case ac:case dc:return t;default:switch(t=t&&t.$$typeof,t){case lc:case cc:case pc:case fc:case sc:return t;default:return e}}case Lh:return e}}}function F_(t){return Ln(t)===uc}Qe.AsyncMode=Ih;Qe.ConcurrentMode=uc;Qe.ContextConsumer=lc;Qe.ContextProvider=sc;Qe.Element=Rh;Qe.ForwardRef=cc;Qe.Fragment=ic;Qe.Lazy=pc;Qe.Memo=fc;Qe.Portal=Lh;Qe.Profiler=oc;Qe.StrictMode=ac;Qe.Suspense=dc;Qe.isAsyncMode=function(t){return F_(t)||Ln(t)===Ih};Qe.isConcurrentMode=F_;Qe.isContextConsumer=function(t){return Ln(t)===lc};Qe.isContextProvider=function(t){return Ln(t)===sc};Qe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rh};Qe.isForwardRef=function(t){return Ln(t)===cc};Qe.isFragment=function(t){return Ln(t)===ic};Qe.isLazy=function(t){return Ln(t)===pc};Qe.isMemo=function(t){return Ln(t)===fc};Qe.isPortal=function(t){return Ln(t)===Lh};Qe.isProfiler=function(t){return Ln(t)===oc};Qe.isStrictMode=function(t){return Ln(t)===ac};Qe.isSuspense=function(t){return Ln(t)===dc};Qe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ic||t===uc||t===oc||t===ac||t===dc||t===OM||typeof t=="object"&&t!==null&&(t.$$typeof===pc||t.$$typeof===fc||t.$$typeof===sc||t.$$typeof===lc||t.$$typeof===cc||t.$$typeof===zM||t.$$typeof===BM||t.$$typeof===UM||t.$$typeof===FM)};Qe.typeOf=Ln;O_.exports=Qe;var GM=O_.exports,Nh=GM,VM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},z_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kh={};kh[Nh.ForwardRef]=HM;kh[Nh.Memo]=z_;function Cg(t){return Nh.isMemo(t)?z_:kh[t.$$typeof]||VM}var jM=Object.defineProperty,$M=Object.getOwnPropertyNames,Tg=Object.getOwnPropertySymbols,qM=Object.getOwnPropertyDescriptor,XM=Object.getPrototypeOf,Dg=Object.prototype;function B_(t,e,n){if(typeof e!="string"){if(Dg){var r=XM(e);r&&r!==Dg&&B_(t,r,n)}var i=$M(e);Tg&&(i=i.concat(Tg(e)));for(var a=Cg(t),o=Cg(e),s=0;s<i.length;++s){var l=i[s];if(!WM[l]&&!(n&&n[l])&&!(o&&o[l])&&!(a&&a[l])){var u=qM(e,l);try{jM(t,l,u)}catch{}}}}return t}var YM=B_;const mp=vr(YM);var On={};function Pr(){return(Pr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Ag=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},gp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Ph.typeOf(t)},Cu=Object.freeze([]),ci=Object.freeze({});function vs(t){return typeof t=="function"}function Pg(t){return t.displayName||t.name||"Component"}function Oh(t){return t&&typeof t.styledComponentId=="string"}var Za=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",Fh=typeof window<"u"&&"HTMLElement"in window,KM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY));function Us(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ZM=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&Us(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=a;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,s=a;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},t}(),Jl=new Map,Tu=new Map,Zo=1,cl=function(t){if(Jl.has(t))return Jl.get(t);for(;Tu.has(Zo);)Zo++;var e=Zo++;return Jl.set(t,e),Tu.set(e,t),e},QM=function(t){return Tu.get(t)},JM=function(t,e){e>=Zo&&(Zo=e+1),Jl.set(t,e),Tu.set(e,t)},eE="style["+Za+'][data-styled-version="5.3.11"]',tE=new RegExp("^"+Za+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nE=function(t,e,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&t.registerName(e,r)},rE=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(tE);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(JM(u,l),nE(t,u,s[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},iE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},U_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Za))return f}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Za,"active"),r.setAttribute("data-styled-version","5.3.11");var o=iE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},aE=function(){function t(n){var r=this.element=U_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,s=a.length;o<s;o++){var l=a[o];if(l.ownerNode===i)return l}Us(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),oE=function(){function t(n){var r=this.element=U_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),sE=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Rg=Fh,lE={isServer:!Fh,useCSSOMInjection:!KM},G_=function(){function t(n,r,i){n===void 0&&(n=ci),r===void 0&&(r={}),this.options=Pr({},lE,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fh&&Rg&&(Rg=!1,function(a){for(var o=document.querySelectorAll(eE),s=0,l=o.length;s<l;s++){var u=o[s];u&&u.getAttribute(Za)!=="active"&&(rE(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return cl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Pr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new sE(o):a?new aE(o):new oE(o),new ZM(n)));var n,r,i,a,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(cl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(cl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(cl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var s=QM(o);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(o);if(l&&u&&l.size){var f=Za+".g"+o+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(c){c.length>0&&(d+=c+",")}),a+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},t}(),uE=/(a)(d)/gi,Lg=function(t){return String.fromCharCode(t+(t>25?39:97))};function vp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Lg(e%52)+n;return(Lg(e%52)+n).replace(uE,"$1-$2")}var Ia=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},V_=function(t){return Ia(5381,t)};function cE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(vs(n)&&!Oh(n))return!1}return!0}var dE=V_("5.3.11"),fE=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cE(e),this.componentId=n,this.baseHash=Ia(dE,n),this.baseStyle=r,G_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=Qa(this.rules,e,n,r).join(""),s=vp(Ia(this.baseHash,o)>>>0);if(!n.hasNameForId(i,s)){var l=r(o,"."+s,void 0,i);n.insertRules(i,s,l)}a.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=Ia(this.baseHash,r.hash),d="",c=0;c<u;c++){var p=this.rules[c];if(typeof p=="string")d+=p;else if(p){var x=Qa(p,e,n,r),h=Array.isArray(x)?x.join(""):x;f=Ia(f,h+c),d+=h}}if(d){var m=vp(f>>>0);if(!n.hasNameForId(i,m)){var g=r(d,"."+m,void 0,i);n.insertRules(i,m,g)}a.push(m)}}return a.join(" ")},t}(),pE=/^\s*\/\/.*$/gm,hE=[":","[",".","#"];function mE(t){var e,n,r,i,a=ci,o=a.options,s=o===void 0?ci:o,l=a.plugins,u=l===void 0?Cu:l,f=new LM(s),d=[],c=function(h){function m(g){if(g)try{h(g+"}")}catch{}}return function(g,v,y,_,S,M,A,b,E,R){switch(g){case 1:if(E===0&&v.charCodeAt(0)===64)return h(v+";"),"";break;case 2:if(b===0)return v+"/*|*/";break;case 3:switch(b){case 102:case 112:return h(y[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(m)}}}(function(h){d.push(h)}),p=function(h,m,g){return m===0&&hE.indexOf(g[n.length])!==-1||g.match(i)?h:"."+e};function x(h,m,g,v){v===void 0&&(v="&");var y=h.replace(pE,""),_=m&&g?g+" "+m+" { "+y+" }":y;return e=v,n=m,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(g||!m?"":m,_)}return f.use([].concat(u,[function(h,m,g){h===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,p))},c,function(h){if(h===-2){var m=d;return d=[],m}}])),x.hash=u.length?u.reduce(function(h,m){return m.name||Us(15),Ia(h,m.name)},5381).toString():"",x}var W_=Ke.createContext();W_.Consumer;var H_=Ke.createContext(),gE=(H_.Consumer,new G_),xp=mE();function vE(){return se.useContext(W_)||gE}function xE(){return se.useContext(H_)||xp}var yE=function(){function t(e,n){var r=this;this.inject=function(i,a){a===void 0&&(a=xp);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return Us(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=xp),this.name+e.hash},t}(),_E=/([A-Z])/,bE=/([A-Z])/g,SE=/^ms-/,wE=function(t){return"-"+t.toLowerCase()};function Ig(t){return _E.test(t)?t.replace(bE,wE).replace(SE,"-ms-"):t}var Ng=function(t){return t==null||t===!1||t===""};function Qa(t,e,n,r){if(Array.isArray(t)){for(var i,a=[],o=0,s=t.length;o<s;o+=1)(i=Qa(t[o],e,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Ng(t))return"";if(Oh(t))return"."+t.styledComponentId;if(vs(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Qa(l,e,n,r)}var u;return t instanceof yE?n?(t.inject(n,r),t.getName(r)):t:gp(t)?function f(d,c){var p,x,h=[];for(var m in d)d.hasOwnProperty(m)&&!Ng(d[m])&&(Array.isArray(d[m])&&d[m].isCss||vs(d[m])?h.push(Ig(m)+":",d[m],";"):gp(d[m])?h.push.apply(h,f(d[m],m)):h.push(Ig(m)+": "+(p=m,(x=d[m])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||p in IM||p.startsWith("--")?String(x).trim():x+"px")+";"));return c?[c+" {"].concat(h,["}"]):h}(t):t.toString()}var kg=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function ME(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return vs(t)||gp(t)?kg(Qa(Ag(Cu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:kg(Qa(Ag(t,n)))}var EE=function(t,e,n){return n===void 0&&(n=ci),t.theme!==n.theme&&t.theme||e||n.theme},CE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TE=/(^-|-$)/g;function cd(t){return t.replace(CE,"-").replace(TE,"")}var DE=function(t){return vp(V_(t)>>>0)};function dl(t){return typeof t=="string"&&!0}var yp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},AE=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function PE(t,e,n){var r=t[n];yp(e)&&yp(r)?j_(r,e):t[n]=e}function j_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(yp(o))for(var s in o)AE(s)&&PE(t,o[s],s)}return t}var $_=Ke.createContext();$_.Consumer;var dd={};function q_(t,e,n){var r=Oh(t),i=!dl(t),a=e.attrs,o=a===void 0?Cu:a,s=e.componentId,l=s===void 0?function(v,y){var _=typeof v!="string"?"sc":cd(v);dd[_]=(dd[_]||0)+1;var S=_+"-"+DE("5.3.11"+_+dd[_]);return y?y+"-"+S:S}(e.displayName,e.parentComponentId):s,u=e.displayName,f=u===void 0?function(v){return dl(v)?"styled."+v:"Styled("+Pg(v)+")"}(t):u,d=e.displayName&&e.componentId?cd(e.displayName)+"-"+e.componentId:e.componentId||l,c=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(v,y,_){return t.shouldForwardProp(v,y,_)&&e.shouldForwardProp(v,y,_)}:t.shouldForwardProp);var x,h=new fE(n,d,r?t.componentStyle:void 0),m=h.isStatic&&o.length===0,g=function(v,y){return function(_,S,M,A){var b=_.attrs,E=_.componentStyle,R=_.defaultProps,H=_.foldedComponentIds,Y=_.shouldForwardProp,z=_.styledComponentId,k=_.target,$=function(I,L,ne){I===void 0&&(I=ci);var j=Pr({},L,{theme:I}),ce={};return ne.forEach(function(ae){var me,fe,Me,Be=ae;for(me in vs(Be)&&(Be=Be(j)),Be)j[me]=ce[me]=me==="className"?(fe=ce[me],Me=Be[me],fe&&Me?fe+" "+Me:fe||Me):Be[me]}),[j,ce]}(EE(S,se.useContext($_),R)||ci,S,b),J=$[0],ee=$[1],N=function(I,L,ne,j){var ce=vE(),ae=xE(),me=L?I.generateAndInjectStyles(ci,ce,ae):I.generateAndInjectStyles(ne,ce,ae);return me}(E,A,J),q=M,G=ee.$as||S.$as||ee.as||S.as||k,le=dl(G),P=ee!==S?Pr({},S,{},ee):S,F={};for(var V in P)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?F.as=P[V]:(Y?Y(V,Eg,G):!le||Eg(V))&&(F[V]=P[V]));return S.style&&ee.style!==S.style&&(F.style=Pr({},S.style,{},ee.style)),F.className=Array.prototype.concat(H,z,N!==z?N:null,S.className,ee.className).filter(Boolean).join(" "),F.ref=q,se.createElement(G,F)}(x,v,y,m)};return g.displayName=f,(x=Ke.forwardRef(g)).attrs=c,x.componentStyle=h,x.displayName=f,x.shouldForwardProp=p,x.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Cu,x.styledComponentId=d,x.target=r?t.target:t,x.withComponent=function(v){var y=e.componentId,_=function(M,A){if(M==null)return{};var b,E,R={},H=Object.keys(M);for(E=0;E<H.length;E++)b=H[E],A.indexOf(b)>=0||(R[b]=M[b]);return R}(e,["componentId"]),S=y&&y+"-"+(dl(v)?v:cd(Pg(v)));return q_(v,Pr({},_,{attrs:c,componentId:S}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?j_({},t.defaultProps,v):v}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&mp(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ie=function(t){return function e(n,r,i){if(i===void 0&&(i=ci),!Ph.isValidElementType(r))return Us(1,String(r));var a=function(){return n(r,i,ME.apply(void 0,arguments))};return a.withConfig=function(o){return e(n,r,Pr({},i,{},o))},a.attrs=function(o){return e(n,r,Pr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(q_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ie[t]=ie(t)});const RE=ie.div`
  width: ${t=>t.collapsed?"60px":"250px"};
  height: 100vh;
  background: #1a1a1a;
  border-right: 1px solid #3a3a3a;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: width 0.3s ease;
  overflow: hidden;
`,LE=ie.div`
  padding: 20px;
  border-bottom: 1px solid #3a3a3a;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  
  .logo-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
    flex-shrink: 0;
    transform: perspective(100px) rotateX(10deg) rotateY(-5deg);
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.3),
      0 8px 16px rgba(102, 126, 234, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      transform: perspective(100px) rotateX(15deg) rotateY(-10deg) scale(1.05);
      box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.4),
        0 12px 24px rgba(102, 126, 234, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
  
  .logo-text {
    color: white;
    font-size: 18px;
    font-weight: 600;
    opacity: ${t=>t.collapsed?0:1};
    transition: opacity 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transform: perspective(200px) rotateX(5deg);
  }
`,IE=ie.nav`
  padding: 20px 0;
`,NE=ie.div`
  padding: 12px 20px;
  color: ${t=>t.active?"#667eea":"#a0a0a0"};
  background: ${t=>t.active?"#2a2a2a":"transparent"};
  border-left: 3px solid ${t=>t.active?"#667eea":"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: #2a2a2a;
    color: white;
  }
  
  .nav-icon {
    font-size: 18px;
    flex-shrink: 0;
  }
  
  .nav-text {
    font-size: 14px;
    font-weight: 500;
    opacity: ${t=>t.collapsed?0:1};
    transition: opacity 0.3s ease;
  }
`,kE=({activePage:t,onPageChange:e,onStateChange:n})=>{const[r,i]=se.useState(!1),a=se.useRef(null),o=[{id:"dashboard",icon:"📊",text:"Dashboard"},{id:"orders",icon:"📦",text:"Orders"},{id:"tasks",icon:"✅",text:"Tasks"},{id:"calendar",icon:"📅",text:"Calendar"},{id:"chat",icon:"💬",text:"Chat"}],s=()=>{a.current&&(clearTimeout(a.current),a.current=null),i(!1)},l=()=>{a.current=setTimeout(()=>{i(!0)},3e3)};return se.useEffect(()=>{n&&n(r)},[r,n]),se.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),T.jsxs(RE,{collapsed:r,onMouseEnter:s,onMouseLeave:l,children:[T.jsxs(LE,{collapsed:r,children:[T.jsx("div",{className:"logo-icon",children:"🐒"}),T.jsx("div",{className:"logo-text",children:"Five Monkeys"})]}),T.jsx(IE,{children:o.map(u=>T.jsxs(NE,{active:t===u.id,collapsed:r,onClick:()=>e(u.id),children:[T.jsx("span",{className:"nav-icon",children:u.icon}),T.jsx("span",{className:"nav-text",children:u.text})]},u.id))})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="150",OE=0,Og=1,FE=2,X_=1,zE=2,Uo=3,vi=0,wn=1,Rr=2,di=0,Ga=1,Fg=2,zg=3,Bg=4,BE=5,_a=100,UE=101,GE=102,Ug=103,Gg=104,VE=200,WE=201,HE=202,jE=203,Y_=204,K_=205,$E=206,qE=207,XE=208,YE=209,KE=210,ZE=0,QE=1,JE=2,_p=3,eC=4,tC=5,nC=6,rC=7,Z_=0,iC=1,aC=2,Nr=0,oC=1,sC=2,lC=3,uC=4,cC=5,Q_=300,Ja=301,eo=302,bp=303,Sp=304,hc=306,wp=1e3,Qn=1001,Mp=1002,en=1003,Vg=1004,fd=1005,Bn=1006,dC=1007,xs=1008,Xi=1009,fC=1010,pC=1011,J_=1012,hC=1013,zi=1014,Bi=1015,ys=1016,mC=1017,gC=1018,Va=1020,vC=1021,Jn=1023,xC=1024,yC=1025,Vi=1026,to=1027,_C=1028,bC=1029,SC=1030,wC=1031,MC=1033,pd=33776,hd=33777,md=33778,gd=33779,Wg=35840,Hg=35841,jg=35842,$g=35843,EC=36196,qg=37492,Xg=37496,Yg=37808,Kg=37809,Zg=37810,Qg=37811,Jg=37812,ev=37813,tv=37814,nv=37815,rv=37816,iv=37817,av=37818,ov=37819,sv=37820,lv=37821,vd=36492,CC=36283,uv=36284,cv=36285,dv=36286,Yi=3e3,it=3001,TC=3200,DC=3201,AC=0,PC=1,ur="srgb",_s="srgb-linear",eb="display-p3",xd=7680,RC=519,fv=35044,pv="300 es",Ep=1035;class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,hv=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]).toLowerCase()}function yn(t,e,n){return Math.max(e,Math.min(n,t))}function LC(t,e){return(t%e+e)%e}function _d(t,e,n){return(1-n)*t+n*e}function mv(t){return(t&t-1)===0&&t!==0}function IC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fl(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*i+e.x,this.y=a*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(){tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,r,i,a,o,s,l,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=s,f[3]=n,f[4]=a,f[5]=l,f[6]=r,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],f=r[4],d=r[7],c=r[2],p=r[5],x=r[8],h=i[0],m=i[3],g=i[6],v=i[1],y=i[4],_=i[7],S=i[2],M=i[5],A=i[8];return a[0]=o*h+s*v+l*S,a[3]=o*m+s*y+l*M,a[6]=o*g+s*_+l*A,a[1]=u*h+f*v+d*S,a[4]=u*m+f*y+d*M,a[7]=u*g+f*_+d*A,a[2]=c*h+p*v+x*S,a[5]=c*m+p*y+x*M,a[8]=c*g+p*_+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*s*u-r*a*f+r*s*l+i*a*u-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=f*o-s*u,c=s*l-f*a,p=u*a-o*l,x=n*d+r*c+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(i*u-f*r)*h,e[2]=(s*r-i*o)*h,e[3]=c*h,e[4]=(f*n-i*l)*h,e[5]=(i*a-s*n)*h,e[6]=p*h,e[7]=(r*l-u*n)*h,e[8]=(o*n-r*a)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*o+u*s)+o+e,-i*u,i*l,-i*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(bd.makeScale(e,n)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,n){return this.premultiply(bd.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bd=new tn;function tb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class Vs{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,o,s){let l=r[i+0],u=r[i+1],f=r[i+2],d=r[i+3];const c=a[o+0],p=a[o+1],x=a[o+2],h=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(s===1){e[n+0]=c,e[n+1]=p,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==c||u!==p||f!==x){let m=1-s;const g=l*c+u*p+f*x+d*h,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const S=Math.sqrt(y),M=Math.atan2(S,g*v);m=Math.sin(m*M)/S,s=Math.sin(s*M)/S}const _=s*v;if(l=l*m+c*_,u=u*m+p*_,f=f*m+x*_,d=d*m+h*_,m===1-s){const S=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=S,u*=S,f*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,a,o){const s=r[i],l=r[i+1],u=r[i+2],f=r[i+3],d=a[o],c=a[o+1],p=a[o+2],x=a[o+3];return e[n]=s*x+f*d+l*p-u*c,e[n+1]=l*x+f*c+u*d-s*p,e[n+2]=u*x+f*p+s*c-l*d,e[n+3]=f*x-s*d-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(r/2),f=s(i/2),d=s(a/2),c=l(r/2),p=l(i/2),x=l(a/2);switch(o){case"XYZ":this._x=c*f*d+u*p*x,this._y=u*p*d-c*f*x,this._z=u*f*x+c*p*d,this._w=u*f*d-c*p*x;break;case"YXZ":this._x=c*f*d+u*p*x,this._y=u*p*d-c*f*x,this._z=u*f*x-c*p*d,this._w=u*f*d+c*p*x;break;case"ZXY":this._x=c*f*d-u*p*x,this._y=u*p*d+c*f*x,this._z=u*f*x+c*p*d,this._w=u*f*d-c*p*x;break;case"ZYX":this._x=c*f*d-u*p*x,this._y=u*p*d+c*f*x,this._z=u*f*x-c*p*d,this._w=u*f*d+c*p*x;break;case"YZX":this._x=c*f*d+u*p*x,this._y=u*p*d+c*f*x,this._z=u*f*x-c*p*d,this._w=u*f*d-c*p*x;break;case"XZY":this._x=c*f*d-u*p*x,this._y=u*p*d-c*f*x,this._z=u*f*x+c*p*d,this._w=u*f*d+c*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],f=n[6],d=n[10],c=r+s+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-u)*p,this._z=(o-i)*p}else if(r>s&&r>d){const p=2*Math.sqrt(1+r-s-d);this._w=(f-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(a+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-r-d);this._w=(a-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-r-s);this._w=(o-i)/p,this._x=(a+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,f=n._w;return this._x=r*f+o*s+i*u-a*l,this._y=i*f+o*l+a*s-r*u,this._z=a*f+o*u+r*l-i*s,this._w=o*f-r*s-i*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=i,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,s),d=Math.sin((1-n)*f)/u,c=Math.sin(n*f)/u;return this._w=o*d+this._w*c,this._x=r*d+this._x*c,this._y=i*d+this._y*c,this._z=a*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(a),r*Math.cos(a),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*i-s*r,f=l*r+s*n-a*i,d=l*i+a*r-o*n,c=-a*n-o*r-s*i;return this.x=u*l+c*-a+f*-s-d*-o,this.y=f*l+c*-o+d*-a-u*-s,this.z=d*l+c*-s+u*-o-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=i*l-a*s,this.y=a*o-r*l,this.z=r*s-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new X,gv=new Vs;function Wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const NC=new tn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),kC=new tn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),ei=new X;function OC(t){return t.convertSRGBToLinear(),ei.set(t.r,t.g,t.b).applyMatrix3(kC),t.setRGB(ei.x,ei.y,ei.z)}function FC(t){return ei.set(t.r,t.g,t.b).applyMatrix3(NC),t.setRGB(ei.x,ei.y,ei.z).convertLinearToSRGB()}const zC={[_s]:t=>t,[ur]:t=>t.convertSRGBToLinear(),[eb]:OC},BC={[_s]:t=>t,[ur]:t=>t.convertLinearToSRGB(),[eb]:FC},Yt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return _s},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=zC[e],i=BC[n];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ia;class nb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ia===void 0&&(ia=Du("canvas")),ia.width=e.width,ia.height=e.height;const r=ia.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ia}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Du("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=Wa(a[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wa(n[r]/255)*255):n[r]=Wa(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rb{constructor(e=null){this.isSource=!0,this.uuid=Gs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?a.push(Md(i[o].image)):a.push(Md(i[o]))}else a=Md(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function Md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UC=0;class Mn extends co{constructor(e=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,r=Qn,i=Qn,a=Bn,o=xs,s=Jn,l=Xi,u=Mn.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=Gs(),this.name="",this.source=new rb(e),this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wp:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Mp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wp:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Mp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Q_;Mn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,r=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const l=e.elements,u=l[0],f=l[4],d=l[8],c=l[1],p=l[5],x=l[9],h=l[2],m=l[6],g=l[10];if(Math.abs(f-c)<.01&&Math.abs(d-h)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+h)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,_=(p+1)/2,S=(g+1)/2,M=(f+c)/4,A=(d+h)/4,b=(x+m)/4;return y>_&&y>S?y<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(y),i=M/r,a=A/r):_>S?_<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),r=M/i,a=b/i):S<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(S),r=A/a,i=b/a),this.set(r,i,a,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-h)*(d-h)+(c-f)*(c-f));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-h)/v,this.z=(c-f)/v,this.w=Math.acos((u+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends co{constructor(e=1,n=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const i={width:e,height:n,depth:1};this.texture=new Mn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Bn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rb(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ib extends Mn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GC extends Mn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],d=e[l+1],c=e[l+2];f<n&&(n=f),d<r&&(r=d),c<i&&(i=c),f>a&&(a=f),d>o&&(o=d),c>s&&(s=c)}return this.min.set(n,r,i),this.max.set(a,o,s),this}setFromBufferAttribute(e){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),d=e.getY(l),c=e.getZ(l);f<n&&(n=f),d<r&&(r=d),c<i&&(i=c),f>a&&(a=f),d>o&&(o=d),c>s&&(s=c)}return this.min.set(n,r,i),this.max.set(a,o,s),this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(n&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Ei.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else r.boundingBox===null&&r.computeBoundingBox(),Ed.copy(r.boundingBox),Ed.applyMatrix4(e.matrixWorld),this.union(Ed);const i=e.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),pl.subVectors(this.max,Eo),aa.subVectors(e.a,Eo),oa.subVectors(e.b,Eo),sa.subVectors(e.c,Eo),Vr.subVectors(oa,aa),Wr.subVectors(sa,oa),Ci.subVectors(aa,sa);let n=[0,-Vr.z,Vr.y,0,-Wr.z,Wr.y,0,-Ci.z,Ci.y,Vr.z,0,-Vr.x,Wr.z,0,-Wr.x,Ci.z,0,-Ci.x,-Vr.y,Vr.x,0,-Wr.y,Wr.x,0,-Ci.y,Ci.x,0];return!Cd(n,aa,oa,sa,pl)||(n=[1,0,0,0,1,0,0,0,1],!Cd(n,aa,oa,sa,pl))?!1:(hl.crossVectors(Vr,Wr),n=[hl.x,hl.y,hl.z],Cd(n,aa,oa,sa,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _r=[new X,new X,new X,new X,new X,new X,new X,new X],Ei=new X,Ed=new Ws,aa=new X,oa=new X,sa=new X,Vr=new X,Wr=new X,Ci=new X,Eo=new X,pl=new X,hl=new X,Ti=new X;function Cd(t,e,n,r,i){for(let a=0,o=t.length-3;a<=o;a+=3){Ti.fromArray(t,a);const s=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=e.dot(Ti),u=n.dot(Ti),f=r.dot(Ti);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>s)return!1}return!0}const VC=new Ws,Co=new X,Td=new X;class Bh{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):VC.setFromPoints(e).getCenter(r);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Co,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Td)),this.expandByPoint(Co.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new X,Dd=new X,ml=new X,Hr=new X,Ad=new X,gl=new X,Pd=new X;class WC{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=br.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,n),br.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Dd.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),Hr.copy(this.origin).sub(Dd);const a=e.distanceTo(n)*.5,o=-this.direction.dot(ml),s=Hr.dot(this.direction),l=-Hr.dot(ml),u=Hr.lengthSq(),f=Math.abs(1-o*o);let d,c,p,x;if(f>0)if(d=o*l-s,c=o*s-l,x=a*f,d>=0)if(c>=-x)if(c<=x){const h=1/f;d*=h,c*=h,p=d*(d+o*c+2*s)+c*(o*d+c+2*l)+u}else c=a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;else c=-a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;else c<=-x?(d=Math.max(0,-(-o*a+s)),c=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+c*(c+2*l)+u):c<=x?(d=0,c=Math.min(Math.max(-a,-l),a),p=c*(c+2*l)+u):(d=Math.max(0,-(o*a+s)),c=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+c*(c+2*l)+u);else c=o>0?-a:a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dd).addScaledVector(ml,c),p}intersectSphere(e,n){br.subVectors(e.center,this.origin);const r=br.dot(this.direction),i=br.dot(br)-r*r,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,o,s,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(r=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(r=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(a=(e.min.y-c.y)*f,o=(e.max.y-c.y)*f):(a=(e.max.y-c.y)*f,o=(e.min.y-c.y)*f),r>o||a>i||((a>r||isNaN(r))&&(r=a),(o<i||isNaN(i))&&(i=o),d>=0?(s=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(s=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,n,r,i,a){Ad.subVectors(n,e),gl.subVectors(r,e),Pd.crossVectors(Ad,gl);let o=this.direction.dot(Pd),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=s*this.direction.dot(gl.crossVectors(Hr,gl));if(l<0)return null;const u=s*this.direction.dot(Ad.cross(Hr));if(u<0||l+u>o)return null;const f=-s*Hr.dot(Pd);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,r,i,a,o,s,l,u,f,d,c,p,x,h,m){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=i,g[1]=a,g[5]=o,g[9]=s,g[13]=l,g[2]=u,g[6]=f,g[10]=d,g[14]=c,g[3]=p,g[7]=x,g[11]=h,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/la.setFromMatrixColumn(e,0).length(),a=1/la.setFromMatrixColumn(e,1).length(),o=1/la.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),f=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const c=o*f,p=o*d,x=s*f,h=s*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+x*u,n[5]=c-h*u,n[9]=-s*l,n[2]=h-c*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const c=l*f,p=l*d,x=u*f,h=u*d;n[0]=c+h*s,n[4]=x*s-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-s,n[2]=p*s-x,n[6]=h+c*s,n[10]=o*l}else if(e.order==="ZXY"){const c=l*f,p=l*d,x=u*f,h=u*d;n[0]=c-h*s,n[4]=-o*d,n[8]=x+p*s,n[1]=p+x*s,n[5]=o*f,n[9]=h-c*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const c=o*f,p=o*d,x=s*f,h=s*d;n[0]=l*f,n[4]=x*u-p,n[8]=c*u+h,n[1]=l*d,n[5]=h*u+c,n[9]=p*u-x,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const c=o*l,p=o*u,x=s*l,h=s*u;n[0]=l*f,n[4]=h-c*d,n[8]=x*d+p,n[1]=d,n[5]=o*f,n[9]=-s*f,n[2]=-u*f,n[6]=p*d+x,n[10]=c-h*d}else if(e.order==="XZY"){const c=o*l,p=o*u,x=s*l,h=s*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=c*d+h,n[5]=o*f,n[9]=p*d-x,n[2]=x*d-p,n[6]=s*f,n[10]=h*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HC,e,jC)}lookAt(e,n,r){const i=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),jr.crossVectors(r,gn),jr.lengthSq()===0&&(Math.abs(r.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),jr.crossVectors(r,gn)),jr.normalize(),vl.crossVectors(gn,jr),i[0]=jr.x,i[4]=vl.x,i[8]=gn.x,i[1]=jr.y,i[5]=vl.y,i[9]=gn.y,i[2]=jr.z,i[6]=vl.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],f=r[1],d=r[5],c=r[9],p=r[13],x=r[2],h=r[6],m=r[10],g=r[14],v=r[3],y=r[7],_=r[11],S=r[15],M=i[0],A=i[4],b=i[8],E=i[12],R=i[1],H=i[5],Y=i[9],z=i[13],k=i[2],$=i[6],J=i[10],ee=i[14],N=i[3],q=i[7],G=i[11],le=i[15];return a[0]=o*M+s*R+l*k+u*N,a[4]=o*A+s*H+l*$+u*q,a[8]=o*b+s*Y+l*J+u*G,a[12]=o*E+s*z+l*ee+u*le,a[1]=f*M+d*R+c*k+p*N,a[5]=f*A+d*H+c*$+p*q,a[9]=f*b+d*Y+c*J+p*G,a[13]=f*E+d*z+c*ee+p*le,a[2]=x*M+h*R+m*k+g*N,a[6]=x*A+h*H+m*$+g*q,a[10]=x*b+h*Y+m*J+g*G,a[14]=x*E+h*z+m*ee+g*le,a[3]=v*M+y*R+_*k+S*N,a[7]=v*A+y*H+_*$+S*q,a[11]=v*b+y*Y+_*J+S*G,a[15]=v*E+y*z+_*ee+S*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],f=e[2],d=e[6],c=e[10],p=e[14],x=e[3],h=e[7],m=e[11],g=e[15];return x*(+a*l*d-i*u*d-a*s*c+r*u*c+i*s*p-r*l*p)+h*(+n*l*p-n*u*c+a*o*c-i*o*p+i*u*f-a*l*f)+m*(+n*u*d-n*s*p-a*o*d+r*o*p+a*s*f-r*u*f)+g*(-i*s*f-n*l*d+n*s*c+i*o*d-r*o*c+r*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=e[9],c=e[10],p=e[11],x=e[12],h=e[13],m=e[14],g=e[15],v=d*m*u-h*c*u+h*l*p-s*m*p-d*l*g+s*c*g,y=x*c*u-f*m*u-x*l*p+o*m*p+f*l*g-o*c*g,_=f*h*u-x*d*u+x*s*p-o*h*p-f*s*g+o*d*g,S=x*d*l-f*h*l-x*s*c+o*h*c+f*s*m-o*d*m,M=n*v+r*y+i*_+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(h*c*a-d*m*a-h*i*p+r*m*p+d*i*g-r*c*g)*A,e[2]=(s*m*a-h*l*a+h*i*u-r*m*u-s*i*g+r*l*g)*A,e[3]=(d*l*a-s*c*a-d*i*u+r*c*u+s*i*p-r*l*p)*A,e[4]=y*A,e[5]=(f*m*a-x*c*a+x*i*p-n*m*p-f*i*g+n*c*g)*A,e[6]=(x*l*a-o*m*a-x*i*u+n*m*u+o*i*g-n*l*g)*A,e[7]=(o*c*a-f*l*a+f*i*u-n*c*u-o*i*p+n*l*p)*A,e[8]=_*A,e[9]=(x*d*a-f*h*a-x*r*p+n*h*p+f*r*g-n*d*g)*A,e[10]=(o*h*a-x*s*a+x*r*u-n*h*u-o*r*g+n*s*g)*A,e[11]=(f*s*a-o*d*a-f*r*u+n*d*u+o*r*p-n*s*p)*A,e[12]=S*A,e[13]=(f*h*i-x*d*i+x*r*c-n*h*c-f*r*m+n*d*m)*A,e[14]=(x*s*i-o*h*i-x*r*l+n*h*l+o*r*m-n*s*m)*A,e[15]=(o*d*i-f*s*i+f*r*l-n*d*l-o*r*c+n*s*c)*A,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,o=e.x,s=e.y,l=e.z,u=a*o,f=a*s;return this.set(u*o+r,u*s-i*l,u*l+i*s,0,u*s+i*l,f*s+r,f*l-i*o,0,u*l-i*s,f*l+i*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,o){return this.set(1,r,a,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,f=o+o,d=s+s,c=a*u,p=a*f,x=a*d,h=o*f,m=o*d,g=s*d,v=l*u,y=l*f,_=l*d,S=r.x,M=r.y,A=r.z;return i[0]=(1-(h+g))*S,i[1]=(p+_)*S,i[2]=(x-y)*S,i[3]=0,i[4]=(p-_)*M,i[5]=(1-(c+g))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(x+y)*A,i[9]=(m-v)*A,i[10]=(1-(c+h))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=la.set(i[0],i[1],i[2]).length();const o=la.set(i[4],i[5],i[6]).length(),s=la.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);const u=1/a,f=1/o,d=1/s;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,n.setFromRotationMatrix($n),r.x=a,r.y=o,r.z=s,this}makePerspective(e,n,r,i,a,o){const s=this.elements,l=2*a/(n-e),u=2*a/(r-i),f=(n+e)/(n-e),d=(r+i)/(r-i),c=-(o+a)/(o-a),p=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=u,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=c,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,n,r,i,a,o){const s=this.elements,l=1/(n-e),u=1/(r-i),f=1/(o-a),d=(n+e)*l,c=(r+i)*u,p=(o+a)*f;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-c,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const la=new X,$n=new Ot,HC=new X(0,0,0),jC=new X(1,1,1),jr=new X,vl=new X,gn=new X,vv=new Ot,xv=new Vs;class mc{constructor(e=0,n=0,r=0,i=mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],f=i[9],d=i[2],c=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(yn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(yn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mc.DEFAULT_ORDER="XYZ";class ab{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $C=0;const yv=new X,ua=new Vs,Sr=new Ot,xl=new X,To=new X,qC=new X,XC=new Vs,_v=new X(1,0,0),bv=new X(0,1,0),Sv=new X(0,0,1),YC={type:"added"},wv={type:"removed"};class En extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$C++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new X,n=new mc,r=new Vs,i=new X(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new tn}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ab,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(bv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return yv.copy(e).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(bv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(To,xl,this.up):Sr.lookAt(xl,To,this.up),this.quaternion.setFromRotationMatrix(Sr),i&&(Sr.extractRotation(i.matrixWorld),ua.setFromRotationMatrix(Sr),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(wv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectsByProperty(e,n);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,qC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,XC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const a=n[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),c=o(e.skeletons),p=o(e.animations),x=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),x.length>0&&(r.nodes=x)}return r.object=i,r;function o(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}En.DEFAULT_UP=new X(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new X,wr=new X,Rd=new X,Mr=new X,ca=new X,da=new X,Mv=new X,Ld=new X,Id=new X,Nd=new X;class Tr{constructor(e=new X,n=new X,r=new X){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),qn.subVectors(e,n),i.cross(qn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){qn.subVectors(i,n),wr.subVectors(r,n),Rd.subVectors(e,n);const o=qn.dot(qn),s=qn.dot(wr),l=qn.dot(Rd),u=wr.dot(wr),f=wr.dot(Rd),d=o*u-s*s;if(d===0)return a.set(-2,-1,-1);const c=1/d,p=(u*l-s*f)*c,x=(o*f-s*l)*c;return a.set(1-p-x,x,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Mr),Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getUV(e,n,r,i,a,o,s,l){return this.getBarycoord(e,n,r,i,Mr),l.set(0,0),l.addScaledVector(a,Mr.x),l.addScaledVector(o,Mr.y),l.addScaledVector(s,Mr.z),l}static isFrontFacing(e,n,r,i){return qn.subVectors(r,n),wr.subVectors(e,n),qn.cross(wr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),qn.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tr.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,a){return Tr.getUV(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Tr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let o,s;ca.subVectors(i,r),da.subVectors(a,r),Ld.subVectors(e,r);const l=ca.dot(Ld),u=da.dot(Ld);if(l<=0&&u<=0)return n.copy(r);Id.subVectors(e,i);const f=ca.dot(Id),d=da.dot(Id);if(f>=0&&d<=f)return n.copy(i);const c=l*d-f*u;if(c<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(r).addScaledVector(ca,o);Nd.subVectors(e,a);const p=ca.dot(Nd),x=da.dot(Nd);if(x>=0&&p<=x)return n.copy(a);const h=p*u-l*x;if(h<=0&&u>=0&&x<=0)return s=u/(u-x),n.copy(r).addScaledVector(da,s);const m=f*x-p*d;if(m<=0&&d-f>=0&&p-x>=0)return Mv.subVectors(a,i),s=(d-f)/(d-f+(p-x)),n.copy(i).addScaledVector(Mv,s);const g=1/(m+h+c);return o=h*g,s=c*g,n.copy(r).addScaledVector(ca,o).addScaledVector(da,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let KC=0;class gc extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Ga,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Y_,this.blendDst=K_,this.blendEquation=_a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_p,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xd,this.stencilZFail=xd,this.stencilZPass=xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const i=this[n];if(i===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ga&&(r.blending=this.blending),this.side!==vi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=i(e.textures),o=i(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ob={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},yl={h:0,s:0,l:0};function kd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&r===void 0?this.set(e):this.setRGB(e,n,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ur){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Yt.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Yt.workingColorSpace){if(e=LC(e,1),n=yn(n,0,1),r=yn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,o=2*r-a;this.r=kd(o,a,e+1/3),this.g=kd(o,a,e),this.b=kd(o,a,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,n=ur){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Yt.toWorkingColorSpace(this,n),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Yt.toWorkingColorSpace(this,n),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(a[1])/360,u=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return r(a[4]),this.setHSL(l,u,f,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Yt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Yt.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ur){const r=ob[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=wd(e.r),this.g=wd(e.g),this.b=wd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ur){return Yt.fromWorkingColorSpace(Vt.copy(this),e),yn(Vt.r*255,0,255)<<16^yn(Vt.g*255,0,255)<<8^yn(Vt.b*255,0,255)<<0}getHexString(e=ur){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Vt.copy(this),n);const r=Vt.r,i=Vt.g,a=Vt.b,o=Math.max(r,i,a),s=Math.min(r,i,a);let l,u;const f=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=f<=.5?d/(o+s):d/(2-o-s),o){case r:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-r)/d+2;break;case a:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ur){Yt.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,r=Vt.g,i=Vt.b;return e!==ur?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${n*255|0},${r*255|0},${i*255|0})`}offsetHSL(e,n,r){return this.getHSL(Xn),Xn.h+=e,Xn.s+=n,Xn.l+=r,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Xn),e.getHSL(yl);const r=_d(Xn.h,yl.h,n),i=_d(Xn.s,yl.s,n),a=_d(Xn.l,yl.l,n);return this.setHSL(r,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new st;st.NAMES=ob;class Uh extends gc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new X,_l=new tt;class mr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=fv,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fl(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fl(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fl(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array),a=mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sb extends mr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class lb extends mr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class gr extends mr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ZC=0;const Nn=new Ot,Od=new En,fa=new X,vn=new Ws,Do=new Ws,Ct=new X;class bi extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tb(e)?lb:sb)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new tn().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,r){return Nn.makeTranslation(e,n,r),this.applyMatrix4(Nn),this}scale(e,n,r){return Nn.makeScale(e,n,r),this.applyMatrix4(Nn),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new gr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Do.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(vn.min,Do.min),vn.expandByPoint(Ct),Ct.addVectors(vn.max,Do.max),vn.expandByPoint(Ct)):(vn.expandByPoint(Do.min),vn.expandByPoint(Do.max))}vn.getCenter(r);let i=0;for(let a=0,o=e.count;a<o;a++)Ct.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(Ct));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,f=s.count;u<f;u++)Ct.fromBufferAttribute(s,u),l&&(fa.fromBufferAttribute(e,u),Ct.add(fa)),i=Math.max(i,r.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,a=n.normal.array,o=n.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let R=0;R<s;R++)u[R]=new X,f[R]=new X;const d=new X,c=new X,p=new X,x=new tt,h=new tt,m=new tt,g=new X,v=new X;function y(R,H,Y){d.fromArray(i,R*3),c.fromArray(i,H*3),p.fromArray(i,Y*3),x.fromArray(o,R*2),h.fromArray(o,H*2),m.fromArray(o,Y*2),c.sub(d),p.sub(d),h.sub(x),m.sub(x);const z=1/(h.x*m.y-m.x*h.y);isFinite(z)&&(g.copy(c).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(z),v.copy(p).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(z),u[R].add(g),u[H].add(g),u[Y].add(g),f[R].add(v),f[H].add(v),f[Y].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:r.length}]);for(let R=0,H=_.length;R<H;++R){const Y=_[R],z=Y.start,k=Y.count;for(let $=z,J=z+k;$<J;$+=3)y(r[$+0],r[$+1],r[$+2])}const S=new X,M=new X,A=new X,b=new X;function E(R){A.fromArray(a,R*3),b.copy(A);const H=u[R];S.copy(H),S.sub(A.multiplyScalar(A.dot(H))).normalize(),M.crossVectors(b,H);const z=M.dot(f[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=z}for(let R=0,H=_.length;R<H;++R){const Y=_[R],z=Y.start,k=Y.count;for(let $=z,J=z+k;$<J;$+=3)E(r[$+0]),E(r[$+1]),E(r[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);const i=new X,a=new X,o=new X,s=new X,l=new X,u=new X,f=new X,d=new X;if(e)for(let c=0,p=e.count;c<p;c+=3){const x=e.getX(c+0),h=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(n,x),a.fromBufferAttribute(n,h),o.fromBufferAttribute(n,m),f.subVectors(o,a),d.subVectors(i,a),f.cross(d),s.fromBufferAttribute(r,x),l.fromBufferAttribute(r,h),u.fromBufferAttribute(r,m),s.add(f),l.add(f),u.add(f),r.setXYZ(x,s.x,s.y,s.z),r.setXYZ(h,l.x,l.y,l.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)i.fromBufferAttribute(n,c+0),a.fromBufferAttribute(n,c+1),o.fromBufferAttribute(n,c+2),f.subVectors(o,a),d.subVectors(i,a),f.cross(d),r.setXYZ(c+0,f.x,f.y,f.z),r.setXYZ(c+1,f.x,f.y,f.z),r.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(s,l){const u=s.array,f=s.itemSize,d=s.normalized,c=new u.constructor(l.length*f);let p=0,x=0;for(let h=0,m=l.length;h<m;h++){s.isInterleavedBufferAttribute?p=l[h]*s.data.stride+s.offset:p=l[h]*f;for(let g=0;g<f;g++)c[x++]=u[p++]}return new mr(c,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,r);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let f=0,d=u.length;f<d;f++){const c=u[f],p=e(c,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(i[l]=f,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(n))}const a=e.morphAttributes;for(const u in a){const f=[],d=a[u];for(let c=0,p=d.length;c<p;c++)f.push(d[c].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new Ot,sr=new WC,bl=new Bh,Cv=new X,Ao=new X,Po=new X,Ro=new X,Fd=new X,Sl=new X,wl=new tt,Ml=new tt,El=new tt,zd=new X,Cl=new X;class Lr extends En{constructor(e=new bi,n=new Uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(a&&s){Sl.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const f=s[l],d=a[l];f!==0&&(Fd.fromBufferAttribute(d,e),o?Sl.addScaledVector(Fd,f):Sl.addScaledVector(Fd.sub(n),f))}n.add(Sl)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(a),sr.copy(e.ray).recast(e.near),bl.containsPoint(sr.origin)===!1&&(sr.intersectSphere(bl,Cv)===null||sr.origin.distanceToSquared(Cv)>(e.far-e.near)**2))||(Ev.copy(a).invert(),sr.copy(e.ray).applyMatrix4(Ev),r.boundingBox!==null&&sr.intersectsBox(r.boundingBox)===!1))return;let o;const s=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv2,d=r.groups,c=r.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){const h=d[p],m=i[h.materialIndex],g=Math.max(h.start,c.start),v=Math.min(s.count,Math.min(h.start+h.count,c.start+c.count));for(let y=g,_=v;y<_;y+=3){const S=s.getX(y),M=s.getX(y+1),A=s.getX(y+2);o=Tl(this,m,e,sr,u,f,S,M,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const p=Math.max(0,c.start),x=Math.min(s.count,c.start+c.count);for(let h=p,m=x;h<m;h+=3){const g=s.getX(h),v=s.getX(h+1),y=s.getX(h+2);o=Tl(this,i,e,sr,u,f,g,v,y),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,x=d.length;p<x;p++){const h=d[p],m=i[h.materialIndex],g=Math.max(h.start,c.start),v=Math.min(l.count,Math.min(h.start+h.count,c.start+c.count));for(let y=g,_=v;y<_;y+=3){const S=y,M=y+1,A=y+2;o=Tl(this,m,e,sr,u,f,S,M,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const p=Math.max(0,c.start),x=Math.min(l.count,c.start+c.count);for(let h=p,m=x;h<m;h+=3){const g=h,v=h+1,y=h+2;o=Tl(this,i,e,sr,u,f,g,v,y),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function QC(t,e,n,r,i,a,o,s){let l;if(e.side===wn?l=r.intersectTriangle(o,a,i,!0,s):l=r.intersectTriangle(i,a,o,e.side===vi,s),l===null)return null;Cl.copy(s),Cl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Cl);return u<n.near||u>n.far?null:{distance:u,point:Cl.clone(),object:t}}function Tl(t,e,n,r,i,a,o,s,l){t.getVertexPosition(o,Ao),t.getVertexPosition(s,Po),t.getVertexPosition(l,Ro);const u=QC(t,e,n,r,Ao,Po,Ro,zd);if(u){i&&(wl.fromBufferAttribute(i,o),Ml.fromBufferAttribute(i,s),El.fromBufferAttribute(i,l),u.uv=Tr.getUV(zd,Ao,Po,Ro,wl,Ml,El,new tt)),a&&(wl.fromBufferAttribute(a,o),Ml.fromBufferAttribute(a,s),El.fromBufferAttribute(a,l),u.uv2=Tr.getUV(zd,Ao,Po,Ro,wl,Ml,El,new tt));const f={a:o,b:s,c:l,normal:new X,materialIndex:0};Tr.getNormal(Ao,Po,Ro,f.normal),u.face=f}return u}class Hs extends bi{constructor(e=1,n=1,r=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:o};const s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],f=[],d=[];let c=0,p=0;x("z","y","x",-1,-1,r,n,e,o,a,0),x("z","y","x",1,-1,r,n,-e,o,a,1),x("x","z","y",1,1,e,r,n,i,o,2),x("x","z","y",1,-1,e,r,-n,i,o,3),x("x","y","z",1,-1,e,n,r,i,a,4),x("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new gr(u,3)),this.setAttribute("normal",new gr(f,3)),this.setAttribute("uv",new gr(d,2));function x(h,m,g,v,y,_,S,M,A,b,E){const R=_/A,H=S/b,Y=_/2,z=S/2,k=M/2,$=A+1,J=b+1;let ee=0,N=0;const q=new X;for(let G=0;G<J;G++){const le=G*H-z;for(let P=0;P<$;P++){const F=P*R-Y;q[h]=F*v,q[m]=le*y,q[g]=k,u.push(q.x,q.y,q.z),q[h]=0,q[m]=0,q[g]=M>0?1:-1,f.push(q.x,q.y,q.z),d.push(P/A),d.push(1-G/b),ee+=1}}for(let G=0;G<b;G++)for(let le=0;le<A;le++){const P=c+le+$*G,F=c+le+$*(G+1),V=c+(le+1)+$*(G+1),I=c+(le+1)+$*G;l.push(P,F,I),l.push(F,V,I),N+=6}s.addGroup(p,N,E),p+=N,c+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const r=no(t[n]);for(const i in r)e[i]=r[i]}return e}function JC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ub(t){return t.getRenderTarget()===null&&t.outputEncoding===it?ur:_s}const e2={clone:no,merge:Qt};var t2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends gc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t2,this.fragmentShader=n2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=JC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class cb extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends cb{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hv*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hv*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*i/l,n-=o.offsetY*r/u,i*=o.width/l,r*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pa=-90,ha=1;class r2 extends En{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r;const i=new _n(pa,ha,e,n);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const a=new _n(pa,ha,e,n);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new _n(pa,ha,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new _n(pa,ha,e,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new _n(pa,ha,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new _n(pa,ha,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[i,a,o,s,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,c=e.xr.enabled;e.toneMapping=Nr,e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,i),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,o),e.setRenderTarget(r,3),e.render(n,s),e.setRenderTarget(r,4),e.render(n,l),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=c,r.texture.needsPMREMUpdate=!0}}class db extends Mn{constructor(e,n,r,i,a,o,s,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ja,super(e,n,r,i,a,o,s,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i2 extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new db(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hs(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:di});a.uniforms.tEquirect.value=n;const o=new Lr(i,a),s=n.minFilter;return n.minFilter===xs&&(n.minFilter=Bn),new r2(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(a)}}const Bd=new X,a2=new X,o2=new tn;class Ri{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Bd.subVectors(r,n).cross(a2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||o2.getNormalMatrix(e),i=this.coplanarPoint(Bd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ma=new Bh,Dl=new X;class fb{constructor(e=new Ri,n=new Ri,r=new Ri,i=new Ri,a=new Ri,o=new Ri){this.planes=[e,n,r,i,a,o]}set(e,n,r,i,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],l=r[4],u=r[5],f=r[6],d=r[7],c=r[8],p=r[9],x=r[10],h=r[11],m=r[12],g=r[13],v=r[14],y=r[15];return n[0].setComponents(s-i,d-l,h-c,y-m).normalize(),n[1].setComponents(s+i,d+l,h+c,y+m).normalize(),n[2].setComponents(s+a,d+u,h+p,y+g).normalize(),n[3].setComponents(s-a,d-u,h-p,y-g).normalize(),n[4].setComponents(s-o,d-f,h-x,y-v).normalize(),n[5].setComponents(s+o,d+f,h+x,y+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ma)}intersectsSprite(e){return ma.center.set(0,0,0),ma.radius=.7071067811865476,ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(ma)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Dl.x=i.normal.x>0?e.max.x:e.min.x,Dl.y=i.normal.y>0?e.max.y:e.min.y,Dl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pb(){let t=null,e=!1,n=null,r=null;function i(a,o){n(a,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function s2(t,e){const n=e.isWebGL2,r=new WeakMap;function i(u,f){const d=u.array,c=u.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,d,c),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function a(u,f,d){const c=f.array,p=f.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,c):(n?t.bufferSubData(d,p.offset*c.BYTES_PER_ELEMENT,c,p.offset,p.count):t.bufferSubData(d,p.offset*c.BYTES_PER_ELEMENT,c.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f&&(t.deleteBuffer(f.buffer),r.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const c=r.get(u);(!c||c.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=r.get(u);d===void 0?r.set(u,i(u,f)):d.version<u.version&&(a(d.buffer,u,f),d.version=u.version)}return{get:o,remove:s,update:l}}class Gh extends bi{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,o=n/2,s=Math.floor(r),l=Math.floor(i),u=s+1,f=l+1,d=e/s,c=n/l,p=[],x=[],h=[],m=[];for(let g=0;g<f;g++){const v=g*c-o;for(let y=0;y<u;y++){const _=y*d-a;x.push(_,-v,0),h.push(0,0,1),m.push(y/s),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<s;v++){const y=v+u*g,_=v+u*(g+1),S=v+1+u*(g+1),M=v+1+u*g;p.push(y,_,M),p.push(_,S,M)}this.setIndex(p),this.setAttribute("position",new gr(x,3)),this.setAttribute("normal",new gr(h,3)),this.setAttribute("uv",new gr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.width,e.height,e.widthSegments,e.heightSegments)}}var l2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,u2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,d2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h2="vec3 transformed = vec3( position );",m2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g2=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,v2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,T2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,D2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A2=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N2="gl_FragColor = linearToOutputTexel( gl_FragColor );",k2=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z2=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Q2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,r3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,s3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,c3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,S3=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,T3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,D3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,A3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,P3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,I3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,U3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,W3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,j3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Q3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,J3=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,iT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ET=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:l2,alphamap_pars_fragment:u2,alphatest_fragment:c2,alphatest_pars_fragment:d2,aomap_fragment:f2,aomap_pars_fragment:p2,begin_vertex:h2,beginnormal_vertex:m2,bsdfs:g2,iridescence_fragment:v2,bumpmap_pars_fragment:x2,clipping_planes_fragment:y2,clipping_planes_pars_fragment:_2,clipping_planes_pars_vertex:b2,clipping_planes_vertex:S2,color_fragment:w2,color_pars_fragment:M2,color_pars_vertex:E2,color_vertex:C2,common:T2,cube_uv_reflection_fragment:D2,defaultnormal_vertex:A2,displacementmap_pars_vertex:P2,displacementmap_vertex:R2,emissivemap_fragment:L2,emissivemap_pars_fragment:I2,encodings_fragment:N2,encodings_pars_fragment:k2,envmap_fragment:O2,envmap_common_pars_fragment:F2,envmap_pars_fragment:z2,envmap_pars_vertex:B2,envmap_physical_pars_fragment:Z2,envmap_vertex:U2,fog_vertex:G2,fog_pars_vertex:V2,fog_fragment:W2,fog_pars_fragment:H2,gradientmap_pars_fragment:j2,lightmap_fragment:$2,lightmap_pars_fragment:q2,lights_lambert_fragment:X2,lights_lambert_pars_fragment:Y2,lights_pars_begin:K2,lights_toon_fragment:Q2,lights_toon_pars_fragment:J2,lights_phong_fragment:e3,lights_phong_pars_fragment:t3,lights_physical_fragment:n3,lights_physical_pars_fragment:r3,lights_fragment_begin:i3,lights_fragment_maps:a3,lights_fragment_end:o3,logdepthbuf_fragment:s3,logdepthbuf_pars_fragment:l3,logdepthbuf_pars_vertex:u3,logdepthbuf_vertex:c3,map_fragment:d3,map_pars_fragment:f3,map_particle_fragment:p3,map_particle_pars_fragment:h3,metalnessmap_fragment:m3,metalnessmap_pars_fragment:g3,morphcolor_vertex:v3,morphnormal_vertex:x3,morphtarget_pars_vertex:y3,morphtarget_vertex:_3,normal_fragment_begin:b3,normal_fragment_maps:S3,normal_pars_fragment:w3,normal_pars_vertex:M3,normal_vertex:E3,normalmap_pars_fragment:C3,clearcoat_normal_fragment_begin:T3,clearcoat_normal_fragment_maps:D3,clearcoat_pars_fragment:A3,iridescence_pars_fragment:P3,output_fragment:R3,packing:L3,premultiplied_alpha_fragment:I3,project_vertex:N3,dithering_fragment:k3,dithering_pars_fragment:O3,roughnessmap_fragment:F3,roughnessmap_pars_fragment:z3,shadowmap_pars_fragment:B3,shadowmap_pars_vertex:U3,shadowmap_vertex:G3,shadowmask_pars_fragment:V3,skinbase_vertex:W3,skinning_pars_vertex:H3,skinning_vertex:j3,skinnormal_vertex:$3,specularmap_fragment:q3,specularmap_pars_fragment:X3,tonemapping_fragment:Y3,tonemapping_pars_fragment:K3,transmission_fragment:Z3,transmission_pars_fragment:Q3,uv_pars_fragment:J3,uv_pars_vertex:eT,uv_vertex:tT,uv2_pars_fragment:nT,uv2_pars_vertex:rT,uv2_vertex:iT,worldpos_vertex:aT,background_vert:oT,background_frag:sT,backgroundCube_vert:lT,backgroundCube_frag:uT,cube_vert:cT,cube_frag:dT,depth_vert:fT,depth_frag:pT,distanceRGBA_vert:hT,distanceRGBA_frag:mT,equirect_vert:gT,equirect_frag:vT,linedashed_vert:xT,linedashed_frag:yT,meshbasic_vert:_T,meshbasic_frag:bT,meshlambert_vert:ST,meshlambert_frag:wT,meshmatcap_vert:MT,meshmatcap_frag:ET,meshnormal_vert:CT,meshnormal_frag:TT,meshphong_vert:DT,meshphong_frag:AT,meshphysical_vert:PT,meshphysical_frag:RT,meshtoon_vert:LT,meshtoon_frag:IT,points_vert:NT,points_frag:kT,shadow_vert:OT,shadow_frag:FT,sprite_vert:zT,sprite_frag:BT},he={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tn},uv2Transform:{value:new tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}}},cr={basic:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new st(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new st(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Qt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Qt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Qt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Qt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Qt([he.lights,he.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};cr.physical={uniforms:Qt([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Al={r:0,b:0,g:0};function UT(t,e,n,r,i,a,o){const s=new st(0);let l=a===!0?0:1,u,f,d=null,c=0,p=null;function x(m,g){let v=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y));const _=t.xr,S=_.getSession&&_.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?h(s,l):y&&y.isColor&&(h(y,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===hc)?(f===void 0&&(f=new Lr(new Hs(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:no(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=y.encoding!==it,(d!==y||c!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=y,c=y.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Lr(new Gh(2,2),new Zi({name:"BackgroundMaterial",uniforms:no(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=y.encoding!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||c!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,c=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function h(m,g){m.getRGB(Al,ub(t)),r.buffers.color.setClear(Al.r,Al.g,Al.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(m,g=1){s.set(m),l=g,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(s,l)},render:x}}function GT(t,e,n,r){const i=t.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let u=l,f=!1;function d(k,$,J,ee,N){let q=!1;if(o){const G=h(ee,J,$);u!==G&&(u=G,p(u.object)),q=g(k,ee,J,N),q&&v(k,ee,J,N)}else{const G=$.wireframe===!0;(u.geometry!==ee.id||u.program!==J.id||u.wireframe!==G)&&(u.geometry=ee.id,u.program=J.id,u.wireframe=G,q=!0)}N!==null&&n.update(N,34963),(q||f)&&(f=!1,b(k,$,J,ee),N!==null&&t.bindBuffer(34963,n.get(N).buffer))}function c(){return r.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(k){return r.isWebGL2?t.bindVertexArray(k):a.bindVertexArrayOES(k)}function x(k){return r.isWebGL2?t.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function h(k,$,J){const ee=J.wireframe===!0;let N=s[k.id];N===void 0&&(N={},s[k.id]=N);let q=N[$.id];q===void 0&&(q={},N[$.id]=q);let G=q[ee];return G===void 0&&(G=m(c()),q[ee]=G),G}function m(k){const $=[],J=[],ee=[];for(let N=0;N<i;N++)$[N]=0,J[N]=0,ee[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:ee,object:k,attributes:{},index:null}}function g(k,$,J,ee){const N=u.attributes,q=$.attributes;let G=0;const le=J.getAttributes();for(const P in le)if(le[P].location>=0){const V=N[P];let I=q[P];if(I===void 0&&(P==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),P==="instanceColor"&&k.instanceColor&&(I=k.instanceColor)),V===void 0||V.attribute!==I||I&&V.data!==I.data)return!0;G++}return u.attributesNum!==G||u.index!==ee}function v(k,$,J,ee){const N={},q=$.attributes;let G=0;const le=J.getAttributes();for(const P in le)if(le[P].location>=0){let V=q[P];V===void 0&&(P==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),P==="instanceColor"&&k.instanceColor&&(V=k.instanceColor));const I={};I.attribute=V,V&&V.data&&(I.data=V.data),N[P]=I,G++}u.attributes=N,u.attributesNum=G,u.index=ee}function y(){const k=u.newAttributes;for(let $=0,J=k.length;$<J;$++)k[$]=0}function _(k){S(k,0)}function S(k,$){const J=u.newAttributes,ee=u.enabledAttributes,N=u.attributeDivisors;J[k]=1,ee[k]===0&&(t.enableVertexAttribArray(k),ee[k]=1),N[k]!==$&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,$),N[k]=$)}function M(){const k=u.newAttributes,$=u.enabledAttributes;for(let J=0,ee=$.length;J<ee;J++)$[J]!==k[J]&&(t.disableVertexAttribArray(J),$[J]=0)}function A(k,$,J,ee,N,q){r.isWebGL2===!0&&(J===5124||J===5125)?t.vertexAttribIPointer(k,$,J,N,q):t.vertexAttribPointer(k,$,J,ee,N,q)}function b(k,$,J,ee){if(r.isWebGL2===!1&&(k.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const N=ee.attributes,q=J.getAttributes(),G=$.defaultAttributeValues;for(const le in q){const P=q[le];if(P.location>=0){let F=N[le];if(F===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(F=k.instanceColor)),F!==void 0){const V=F.normalized,I=F.itemSize,L=n.get(F);if(L===void 0)continue;const ne=L.buffer,j=L.type,ce=L.bytesPerElement;if(F.isInterleavedBufferAttribute){const ae=F.data,me=ae.stride,fe=F.offset;if(ae.isInstancedInterleavedBuffer){for(let Me=0;Me<P.locationSize;Me++)S(P.location+Me,ae.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Me=0;Me<P.locationSize;Me++)_(P.location+Me);t.bindBuffer(34962,ne);for(let Me=0;Me<P.locationSize;Me++)A(P.location+Me,I/P.locationSize,j,V,me*ce,(fe+I/P.locationSize*Me)*ce)}else{if(F.isInstancedBufferAttribute){for(let ae=0;ae<P.locationSize;ae++)S(P.location+ae,F.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<P.locationSize;ae++)_(P.location+ae);t.bindBuffer(34962,ne);for(let ae=0;ae<P.locationSize;ae++)A(P.location+ae,I/P.locationSize,j,V,I*ce,I/P.locationSize*ae*ce)}}else if(G!==void 0){const V=G[le];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(P.location,V);break;case 3:t.vertexAttrib3fv(P.location,V);break;case 4:t.vertexAttrib4fv(P.location,V);break;default:t.vertexAttrib1fv(P.location,V)}}}}M()}function E(){Y();for(const k in s){const $=s[k];for(const J in $){const ee=$[J];for(const N in ee)x(ee[N].object),delete ee[N];delete $[J]}delete s[k]}}function R(k){if(s[k.id]===void 0)return;const $=s[k.id];for(const J in $){const ee=$[J];for(const N in ee)x(ee[N].object),delete ee[N];delete $[J]}delete s[k.id]}function H(k){for(const $ in s){const J=s[$];if(J[k.id]===void 0)continue;const ee=J[k.id];for(const N in ee)x(ee[N].object),delete ee[N];delete J[k.id]}}function Y(){z(),f=!0,u!==l&&(u=l,p(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:_,disableUnusedAttributes:M}}function VT(t,e,n,r){const i=r.isWebGL2;let a;function o(u){a=u}function s(u,f){t.drawArrays(a,u,f),n.update(f,a,1)}function l(u,f,d){if(d===0)return;let c,p;if(i)c=t,p="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[p](a,u,f,d),n.update(f,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function WT(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){if(A==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),c=t.getParameter(35660),p=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),m=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),y=c>0,_=o||e.has("OES_texture_float"),S=y&&_,M=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:c,maxTextureSize:p,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:S,maxSamples:M}}function HT(t){const e=this;let n=null,r=0,i=!1,a=!1;const o=new Ri,s=new tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||r!==0||i;return i=c,r=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){n=f(d,c,0)},this.setState=function(d,c,p){const x=d.clippingPlanes,h=d.clipIntersection,m=d.clipShadows,g=t.get(d);if(!i||x===null||x.length===0||a&&!m)a?f(null):u();else{const v=a?0:r,y=v*4;let _=g.clippingState||null;l.value=_,_=f(x,c,y,p);for(let S=0;S!==y;++S)_[S]=n[S];g.clippingState=_,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(d,c,p,x){const h=d!==null?d.length:0;let m=null;if(h!==0){if(m=l.value,x!==!0||m===null){const g=p+h*4,v=c.matrixWorldInverse;s.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,_=p;y!==h;++y,_+=4)o.copy(d[y]).applyMatrix4(v,s),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,m}}function jT(t){let e=new WeakMap;function n(o,s){return s===bp?o.mapping=Ja:s===Sp&&(o.mapping=eo),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===bp||s===Sp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new i2(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",i),n(u.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class $T extends cb{constructor(e=-1,n=1,r=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Na=4,Tv=[.125,.215,.35,.446,.526,.582],Ni=20,Ud=new $T,Dv=new st;let Gd=null;const Li=(1+Math.sqrt(5))/2,ga=1/Li,Av=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Li,ga),new X(0,Li,-ga),new X(ga,0,Li),new X(-ga,0,Li),new X(Li,ga,0),new X(-Li,ga,0)];class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Gd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ja||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ys,format:Jn,encoding:Yi,depthBuffer:!1},i=Rv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qT(a)),this._blurMaterial=XT(a,e,n)}return i}_compileMaterial(e){const n=new Lr(this._lodPlanes[0],e);this._renderer.compile(n,Ud)}_sceneToCubeUV(e,n,r,i){const s=new _n(90,1,n,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(Dv),f.toneMapping=Nr,f.autoClear=!1;const p=new Uh({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),x=new Lr(new Hs,p);let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(Dv),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(s.up.set(0,l[g],0),s.lookAt(u[g],0,0)):v===1?(s.up.set(0,0,l[g]),s.lookAt(0,u[g],0)):(s.up.set(0,l[g],0),s.lookAt(0,0,u[g]));const y=this._cubeSize;Pl(i,v*y,g>2?y:0,y,y),f.setRenderTarget(i),h&&f.render(x,s),f.render(e,s)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=c,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ja||e.mapping===eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new Lr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,Ud)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Av[(i-1)%Av.length];this._blur(e,i-1,i,a,o)}n.autoClear=r}_blur(e,n,r,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",a),this._halfBlur(o,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Lr(this._lodPlanes[i],u),c=u.uniforms,p=this._sizeLods[r]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),h=a/x,m=isFinite(a)?1+Math.floor(f*h):Ni;m>Ni&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const g=[];let v=0;for(let A=0;A<Ni;++A){const b=A/h,E=Math.exp(-b*b/2);g.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=g,c.latitudinal.value=o==="latitudinal",s&&(c.poleAxis.value=s);const{_lodMax:y}=this;c.dTheta.value=x,c.mipInt.value=y-r;const _=this._sizeLods[i],S=3*_*(i>y-Na?i-y+Na:0),M=4*(this._cubeSize-_);Pl(n,S,M,3*_,2*_),l.setRenderTarget(n),l.render(d,Ud)}}function qT(t){const e=[],n=[],r=[];let i=t;const a=t-Na+1+Tv.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);n.push(s);let l=1/s;o>t-Na?l=Tv[o-t+Na-1]:o===0&&(l=0),r.push(l);const u=1/(s-2),f=-u,d=1+u,c=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,x=6,h=3,m=2,g=1,v=new Float32Array(h*x*p),y=new Float32Array(m*x*p),_=new Float32Array(g*x*p);for(let M=0;M<p;M++){const A=M%3*2/3-1,b=M>2?0:-1,E=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(E,h*x*M),y.set(c,m*x*M);const R=[M,M,M,M,M,M];_.set(R,g*x*M)}const S=new bi;S.setAttribute("position",new mr(v,h)),S.setAttribute("uv",new mr(y,m)),S.setAttribute("faceIndex",new mr(_,g)),e.push(S),i>Na&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Rv(t,e,n){const r=new Ki(t,e,n);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pl(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function XT(t,e,n){const r=new Float32Array(Ni),i=new X(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Lv(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Iv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YT(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===bp||l===Sp,f=l===Ja||l===eo;if(u||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new Pv(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||f&&d&&i(d)){n===null&&(n=new Pv(t));const c=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,c),s.addEventListener("dispose",a),c.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function KT(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function ZT(t,e,n,r){const i={},a=new WeakMap;function o(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const x in c.attributes)e.remove(c.attributes[x]);c.removeEventListener("dispose",o),delete i[c.id];const p=a.get(c);p&&(e.remove(p),a.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function s(d,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const x in c)e.update(c[x],34962);const p=d.morphAttributes;for(const x in p){const h=p[x];for(let m=0,g=h.length;m<g;m++)e.update(h[m],34962)}}function u(d){const c=[],p=d.index,x=d.attributes.position;let h=0;if(p!==null){const v=p.array;h=p.version;for(let y=0,_=v.length;y<_;y+=3){const S=v[y+0],M=v[y+1],A=v[y+2];c.push(S,M,M,A,A,S)}}else{const v=x.array;h=x.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const S=y+0,M=y+1,A=y+2;c.push(S,M,M,A,A,S)}}const m=new(tb(c)?lb:sb)(c,1);m.version=h;const g=a.get(d);g&&e.remove(g),a.set(d,m)}function f(d){const c=a.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:f}}function QT(t,e,n,r){const i=r.isWebGL2;let a;function o(c){a=c}let s,l;function u(c){s=c.type,l=c.bytesPerElement}function f(c,p){t.drawElements(a,p,s,c*l),n.update(p,a,1)}function d(c,p,x){if(x===0)return;let h,m;if(i)h=t,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](a,p,s,c*l,x),n.update(p,a,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d}function JT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(n.calls++,o){case 4:n.triangles+=s*(a/3);break;case 1:n.lines+=s*(a/2);break;case 3:n.lines+=s*(a-1);break;case 2:n.lines+=s*a;break;case 0:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function eD(t,e){return t[0]-e[0]}function tD(t,e){return Math.abs(e[1])-Math.abs(t[1])}function nD(t,e,n){const r={},i=new Float32Array(8),a=new WeakMap,o=new Nt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,f,d){const c=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,h=x!==void 0?x.length:0;let m=a.get(f);if(m===void 0||m.count!==h){let $=function(){z.dispose(),a.delete(f),f.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let E=0;y===!0&&(E=1),_===!0&&(E=2),S===!0&&(E=3);let R=f.attributes.position.count*E,H=1;R>e.maxTextureSize&&(H=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const Y=new Float32Array(R*H*4*h),z=new ib(Y,R,H,h);z.type=Bi,z.needsUpdate=!0;const k=E*4;for(let J=0;J<h;J++){const ee=M[J],N=A[J],q=b[J],G=R*H*4*J;for(let le=0;le<ee.count;le++){const P=le*k;y===!0&&(o.fromBufferAttribute(ee,le),Y[G+P+0]=o.x,Y[G+P+1]=o.y,Y[G+P+2]=o.z,Y[G+P+3]=0),_===!0&&(o.fromBufferAttribute(N,le),Y[G+P+4]=o.x,Y[G+P+5]=o.y,Y[G+P+6]=o.z,Y[G+P+7]=0),S===!0&&(o.fromBufferAttribute(q,le),Y[G+P+8]=o.x,Y[G+P+9]=o.y,Y[G+P+10]=o.z,Y[G+P+11]=q.itemSize===4?o.w:1)}}m={count:h,texture:z,size:new tt(R,H)},a.set(f,m),f.addEventListener("dispose",$)}let g=0;for(let y=0;y<c.length;y++)g+=c[y];const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",c),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=c===void 0?0:c.length;let h=r[f.id];if(h===void 0||h.length!==x){h=[];for(let _=0;_<x;_++)h[_]=[_,0];r[f.id]=h}for(let _=0;_<x;_++){const S=h[_];S[0]=_,S[1]=c[_]}h.sort(tD);for(let _=0;_<8;_++)_<x&&h[_][1]?(s[_][0]=h[_][0],s[_][1]=h[_][1]):(s[_][0]=Number.MAX_SAFE_INTEGER,s[_][1]=0);s.sort(eD);const m=f.morphAttributes.position,g=f.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const S=s[_],M=S[0],A=S[1];M!==Number.MAX_SAFE_INTEGER&&A?(m&&f.getAttribute("morphTarget"+_)!==m[M]&&f.setAttribute("morphTarget"+_,m[M]),g&&f.getAttribute("morphNormal"+_)!==g[M]&&f.setAttribute("morphNormal"+_,g[M]),i[_]=A,v+=A):(m&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),g&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),i[_]=0)}const y=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function rD(t,e,n,r){let i=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);return i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const hb=new Mn,mb=new ib,gb=new GC,vb=new db,Nv=[],kv=[],Ov=new Float32Array(16),Fv=new Float32Array(9),zv=new Float32Array(4);function fo(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=Nv[i];if(a===void 0&&(a=new Float32Array(i),Nv[i]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function vc(t,e){let n=kv[e];n===void 0&&(n=new Int32Array(e),kv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function iD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function oD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function sD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function lD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(bt(n,r))return;zv.set(r),t.uniformMatrix2fv(this.addr,!1,zv),St(n,r)}}function uD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(bt(n,r))return;Fv.set(r),t.uniformMatrix3fv(this.addr,!1,Fv),St(n,r)}}function cD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(bt(n,r))return;Ov.set(r),t.uniformMatrix4fv(this.addr,!1,Ov),St(n,r)}}function dD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function pD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function hD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function mD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function vD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function xD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function yD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2D(e||hb,i)}function _D(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||gb,i)}function bD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||vb,i)}function SD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||mb,i)}function wD(t){switch(t){case 5126:return iD;case 35664:return aD;case 35665:return oD;case 35666:return sD;case 35674:return lD;case 35675:return uD;case 35676:return cD;case 5124:case 35670:return dD;case 35667:case 35671:return fD;case 35668:case 35672:return pD;case 35669:case 35673:return hD;case 5125:return mD;case 36294:return gD;case 36295:return vD;case 36296:return xD;case 35678:case 36198:case 36298:case 36306:case 35682:return yD;case 35679:case 36299:case 36307:return _D;case 35680:case 36300:case 36308:case 36293:return bD;case 36289:case 36303:case 36311:case 36292:return SD}}function MD(t,e){t.uniform1fv(this.addr,e)}function ED(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function CD(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function TD(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function DD(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AD(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PD(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function RD(t,e){t.uniform1iv(this.addr,e)}function LD(t,e){t.uniform2iv(this.addr,e)}function ID(t,e){t.uniform3iv(this.addr,e)}function ND(t,e){t.uniform4iv(this.addr,e)}function kD(t,e){t.uniform1uiv(this.addr,e)}function OD(t,e){t.uniform2uiv(this.addr,e)}function FD(t,e){t.uniform3uiv(this.addr,e)}function zD(t,e){t.uniform4uiv(this.addr,e)}function BD(t,e,n){const r=this.cache,i=e.length,a=vc(n,i);bt(r,a)||(t.uniform1iv(this.addr,a),St(r,a));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||hb,a[o])}function UD(t,e,n){const r=this.cache,i=e.length,a=vc(n,i);bt(r,a)||(t.uniform1iv(this.addr,a),St(r,a));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||gb,a[o])}function GD(t,e,n){const r=this.cache,i=e.length,a=vc(n,i);bt(r,a)||(t.uniform1iv(this.addr,a),St(r,a));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||vb,a[o])}function VD(t,e,n){const r=this.cache,i=e.length,a=vc(n,i);bt(r,a)||(t.uniform1iv(this.addr,a),St(r,a));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||mb,a[o])}function WD(t){switch(t){case 5126:return MD;case 35664:return ED;case 35665:return CD;case 35666:return TD;case 35674:return DD;case 35675:return AD;case 35676:return PD;case 5124:case 35670:return RD;case 35667:case 35671:return LD;case 35668:case 35672:return ID;case 35669:case 35673:return ND;case 5125:return kD;case 36294:return OD;case 36295:return FD;case 36296:return zD;case 35678:case 36198:case 36298:case 36306:case 35682:return BD;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return GD;case 36289:case 36303:case 36311:case 36292:return VD}}class HD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=wD(n.type)}}class jD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=WD(n.type)}}class $D{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(e,n[s.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Bv(t,e){t.seq.push(e),t.map[e.id]=e}function qD(t,e,n){const r=t.name,i=r.length;for(Vd.lastIndex=0;;){const a=Vd.exec(r),o=Vd.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){Bv(n,u===void 0?new HD(s,t,e):new jD(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new $D(s),Bv(n,d)),n=d}}}class eu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,35718);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),o=e.getUniformLocation(n,a.name);qD(a,o,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function Uv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}let XD=0;function YD(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=i;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return r.join(`
`)}function KD(t){switch(t){case Yi:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Gv(t,e,n){const r=t.getShaderParameter(e,35713),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+YD(t.getShaderSource(e),o)}else return i}function ZD(t,e){const n=KD(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function QD(t,e){let n;switch(e){case oC:n="Linear";break;case sC:n="Reinhard";break;case lC:n="OptimizedCineon";break;case uC:n="ACESFilmic";break;case cC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function JD(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Go).join(`
`)}function eA(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tA(t,e){const n={},r=t.getProgramParameter(e,35721);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),o=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Go(t){return t!==""}function Vv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(t){return t.replace(nA,rA)}function rA(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Cp(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(t){return t.replace(iA,aA)}function aA(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function jv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Uo&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ja:case eo:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function uA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Z_:e="ENVMAP_BLENDING_MULTIPLY";break;case iC:e="ENVMAP_BLENDING_MIX";break;case aC:e="ENVMAP_BLENDING_ADD";break}return e}function cA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function dA(t,e,n,r){const i=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=oA(n),u=sA(n),f=lA(n),d=uA(n),c=cA(n),p=n.isWebGL2?"":JD(n),x=eA(a),h=i.createProgram();let m,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[x].filter(Go).join(`
`),m.length>0&&(m+=`
`),g=[p,x].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(m=[jv(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[p,jv(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?ke.tonemapping_pars_fragment:"",n.toneMapping!==Nr?QD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,ZD("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=Cp(o),o=Vv(o,n),o=Wv(o,n),s=Cp(s),s=Vv(s,n),s=Wv(s,n),o=Hv(o),s=Hv(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",n.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+m+o,_=v+g+s,S=Uv(i,35633,y),M=Uv(i,35632,_);if(i.attachShader(h,S),i.attachShader(h,M),n.index0AttributeName!==void 0?i.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),t.debug.checkShaderErrors){const E=i.getProgramInfoLog(h).trim(),R=i.getShaderInfoLog(S).trim(),H=i.getShaderInfoLog(M).trim();let Y=!0,z=!0;if(i.getProgramParameter(h,35714)===!1){Y=!1;const k=Gv(i,S,"vertex"),$=Gv(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+E+`
`+k+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||H==="")&&(z=!1);z&&(this.diagnostics={runnable:Y,programLog:E,vertexShader:{log:R,prefix:m},fragmentShader:{log:H,prefix:g}})}i.deleteShader(S),i.deleteShader(M);let A;this.getUniforms=function(){return A===void 0&&(A=new eu(i,h)),A};let b;return this.getAttributes=function(){return b===void 0&&(b=tA(i,h)),b},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=XD++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=M,this}let fA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new hA(e),n.set(e,r)),r}}class hA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function mA(t,e,n,r,i,a,o){const s=new ab,l=new pA,u=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,c=i.vertexTextures;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b,E,R,H,Y){const z=H.fog,k=Y.geometry,$=b.isMeshStandardMaterial?H.environment:null,J=(b.isMeshStandardMaterial?n:e).get(b.envMap||$),ee=J&&J.mapping===hc?J.image.height:null,N=x[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=q!==void 0?q.length:0;let le=0;k.morphAttributes.position!==void 0&&(le=1),k.morphAttributes.normal!==void 0&&(le=2),k.morphAttributes.color!==void 0&&(le=3);let P,F,V,I;if(N){const me=cr[N];P=me.vertexShader,F=me.fragmentShader}else P=b.vertexShader,F=b.fragmentShader,l.update(b),V=l.getVertexShaderID(b),I=l.getFragmentShaderID(b);const L=t.getRenderTarget(),ne=b.alphaTest>0,j=b.clearcoat>0,ce=b.iridescence>0;return{isWebGL2:f,shaderID:N,shaderName:b.type,vertexShader:P,fragmentShader:F,defines:b.defines,customVertexShaderID:V,customFragmentShaderID:I,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:c,outputEncoding:L===null?t.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:Yi,map:!!b.map,matcap:!!b.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===PC,tangentSpaceNormalMap:b.normalMapType===AC,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===it,clearcoat:j,clearcoatMap:j&&!!b.clearcoatMap,clearcoatRoughnessMap:j&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:j&&!!b.clearcoatNormalMap,iridescence:ce,iridescenceMap:ce&&!!b.iridescenceMap,iridescenceThicknessMap:ce&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Ga,alphaMap:!!b.alphaMap,alphaTest:ne,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!k.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:b.toneMapped?t.toneMapping:Nr,useLegacyLights:t.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rr,flipSided:b.side===wn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)E.push(R),E.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(g(E,b),v(E,b),E.push(t.outputEncoding)),E.push(b.customProgramCacheKey),E.join()}function g(b,E){b.push(E.precision),b.push(E.outputEncoding),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.combine),b.push(E.vertexUvs),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.map&&s.enable(4),E.matcap&&s.enable(5),E.envMap&&s.enable(6),E.lightMap&&s.enable(7),E.aoMap&&s.enable(8),E.emissiveMap&&s.enable(9),E.bumpMap&&s.enable(10),E.normalMap&&s.enable(11),E.objectSpaceNormalMap&&s.enable(12),E.tangentSpaceNormalMap&&s.enable(13),E.clearcoat&&s.enable(14),E.clearcoatMap&&s.enable(15),E.clearcoatRoughnessMap&&s.enable(16),E.clearcoatNormalMap&&s.enable(17),E.iridescence&&s.enable(18),E.iridescenceMap&&s.enable(19),E.iridescenceThicknessMap&&s.enable(20),E.displacementMap&&s.enable(21),E.specularMap&&s.enable(22),E.roughnessMap&&s.enable(23),E.metalnessMap&&s.enable(24),E.gradientMap&&s.enable(25),E.alphaMap&&s.enable(26),E.alphaTest&&s.enable(27),E.vertexColors&&s.enable(28),E.vertexAlphas&&s.enable(29),E.vertexUvs&&s.enable(30),E.vertexTangents&&s.enable(31),E.uvsVertexOnly&&s.enable(32),b.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.specularIntensityMap&&s.enable(15),E.specularColorMap&&s.enable(16),E.transmission&&s.enable(17),E.transmissionMap&&s.enable(18),E.thicknessMap&&s.enable(19),E.sheen&&s.enable(20),E.sheenColorMap&&s.enable(21),E.sheenRoughnessMap&&s.enable(22),E.decodeVideoTexture&&s.enable(23),E.opaque&&s.enable(24),b.push(s.mask)}function y(b){const E=x[b.type];let R;if(E){const H=cr[E];R=e2.clone(H.uniforms)}else R=b.uniforms;return R}function _(b,E){let R;for(let H=0,Y=u.length;H<Y;H++){const z=u[H];if(z.cacheKey===E){R=z,++R.usedTimes;break}}return R===void 0&&(R=new dA(t,E,b,a),u.push(R)),R}function S(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function M(b){l.remove(b)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:S,releaseShaderCache:M,programs:u,dispose:A}}function gA(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function r(a,o,s){t.get(a)[o]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function vA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $v(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qv(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function o(d,c,p,x,h,m){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:c,material:p,groupOrder:x,renderOrder:d.renderOrder,z:h,group:m},t[e]=g):(g.id=d.id,g.object=d,g.geometry=c,g.material=p,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=m),e++,g}function s(d,c,p,x,h,m){const g=o(d,c,p,x,h,m);p.transmission>0?r.push(g):p.transparent===!0?i.push(g):n.push(g)}function l(d,c,p,x,h,m){const g=o(d,c,p,x,h,m);p.transmission>0?r.unshift(g):p.transparent===!0?i.unshift(g):n.unshift(g)}function u(d,c){n.length>1&&n.sort(d||vA),r.length>1&&r.sort(c||$v),i.length>1&&i.sort(c||$v)}function f(){for(let d=e,c=t.length;d<c;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:l,finish:f,sort:u}}function xA(){let t=new WeakMap;function e(r,i){const a=t.get(r);let o;return a===void 0?(o=new qv,t.set(r,[o])):i>=a.length?(o=new qv,a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new st};break;case"SpotLight":n={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bA=0;function SA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wA(t,e){const n=new yA,r=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new X);const a=new X,o=new Ot,s=new Ot;function l(f,d){let c=0,p=0,x=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,m=0,g=0,v=0,y=0,_=0,S=0,M=0,A=0,b=0;f.sort(SA);const E=d===!0?Math.PI:1;for(let H=0,Y=f.length;H<Y;H++){const z=f[H],k=z.color,$=z.intensity,J=z.distance,ee=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)c+=k.r*$*E,p+=k.g*$*E,x+=k.b*$*E;else if(z.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(z.sh.coefficients[N],$);else if(z.isDirectionalLight){const N=n.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const q=z.shadow,G=r.get(z);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=ee,i.directionalShadowMatrix[h]=z.shadow.matrix,_++}i.directional[h]=N,h++}else if(z.isSpotLight){const N=n.get(z);N.position.setFromMatrixPosition(z.matrixWorld),N.color.copy(k).multiplyScalar($*E),N.distance=J,N.coneCos=Math.cos(z.angle),N.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),N.decay=z.decay,i.spot[g]=N;const q=z.shadow;if(z.map&&(i.spotLightMap[A]=z.map,A++,q.updateMatrices(z),z.castShadow&&b++),i.spotLightMatrix[g]=q.matrix,z.castShadow){const G=r.get(z);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[g]=G,i.spotShadowMap[g]=ee,M++}g++}else if(z.isRectAreaLight){const N=n.get(z);N.color.copy(k).multiplyScalar($),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=N,v++}else if(z.isPointLight){const N=n.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity*E),N.distance=z.distance,N.decay=z.decay,z.castShadow){const q=z.shadow,G=r.get(z);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=z.shadow.matrix,S++}i.point[m]=N,m++}else if(z.isHemisphereLight){const N=n.get(z);N.skyColor.copy(z.color).multiplyScalar($*E),N.groundColor.copy(z.groundColor).multiplyScalar($*E),i.hemi[y]=N,y++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=p,i.ambient[2]=x;const R=i.hash;(R.directionalLength!==h||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==v||R.hemiLength!==y||R.numDirectionalShadows!==_||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==A)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,R.directionalLength=h,R.pointLength=m,R.spotLength=g,R.rectAreaLength=v,R.hemiLength=y,R.numDirectionalShadows=_,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=A,i.version=bA++)}function u(f,d){let c=0,p=0,x=0,h=0,m=0;const g=d.matrixWorldInverse;for(let v=0,y=f.length;v<y;v++){const _=f[v];if(_.isDirectionalLight){const S=i.directional[c];S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),c++}else if(_.isSpotLight){const S=i.spot[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),x++}else if(_.isRectAreaLight){const S=i.rectArea[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),s.identity(),o.copy(_.matrixWorld),o.premultiply(g),s.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),h++}else if(_.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),p++}else if(_.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:l,setupView:u,state:i}}function Xv(t,e){const n=new wA(t,e),r=[],i=[];function a(){r.length=0,i.length=0}function o(d){r.push(d)}function s(d){i.push(d)}function l(d){n.setup(r,d)}function u(d){n.setupView(r,d)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function MA(t,e){let n=new WeakMap;function r(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new Xv(t,e),n.set(a,[l])):o>=s.length?(l=new Xv(t,e),s.push(l)):l=s[o],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class EA extends gc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CA extends gc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AA(t,e,n){let r=new fb;const i=new tt,a=new tt,o=new Nt,s=new EA({depthPacking:DC}),l=new CA,u={},f=n.maxTextureSize,d={[vi]:wn,[wn]:vi,[Rr]:Rr},c=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:TA,fragmentShader:DA}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const x=new bi;x.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Lr(x,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X_,this.render=function(_,S,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;const A=t.getRenderTarget(),b=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.state;R.setBlending(di),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let H=0,Y=_.length;H<Y;H++){const z=_[H],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();if(i.multiply($),a.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/$.x),i.x=a.x*$.x,k.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/$.y),i.y=a.y*$.y,k.mapSize.y=a.y)),k.map===null){const ee=this.type!==Uo?{minFilter:en,magFilter:en}:{};k.map=new Ki(i.x,i.y,ee),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const J=k.getViewportCount();for(let ee=0;ee<J;ee++){const N=k.getViewport(ee);o.set(a.x*N.x,a.y*N.y,a.x*N.z,a.y*N.w),R.viewport(o),k.updateMatrices(z,ee),r=k.getFrustum(),y(S,M,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Uo&&g(k,M),k.needsUpdate=!1}m.needsUpdate=!1,t.setRenderTarget(A,b,E)};function g(_,S){const M=e.update(h);c.defines.VSM_SAMPLES!==_.blurSamples&&(c.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Ki(i.x,i.y)),c.uniforms.shadow_pass.value=_.map.texture,c.uniforms.resolution.value=_.mapSize,c.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(S,null,M,c,h,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(S,null,M,p,h,null)}function v(_,S,M,A,b,E){let R=null;const H=M.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(H!==void 0)R=H;else if(R=M.isPointLight===!0?l:s,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Y=R.uuid,z=S.uuid;let k=u[Y];k===void 0&&(k={},u[Y]=k);let $=k[z];$===void 0&&($=R.clone(),k[z]=$),R=$}return R.visible=S.visible,R.wireframe=S.wireframe,E===Uo?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:d[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(M.matrixWorld),R.nearDistance=A,R.farDistance=b),R}function y(_,S,M,A,b){if(_.visible===!1)return;if(_.layers.test(S.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===Uo)&&(!_.frustumCulled||r.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,_.matrixWorld);const H=e.update(_),Y=_.material;if(Array.isArray(Y)){const z=H.groups;for(let k=0,$=z.length;k<$;k++){const J=z[k],ee=Y[J.materialIndex];if(ee&&ee.visible){const N=v(_,ee,A,M.near,M.far,b);t.renderBufferDirect(M,null,H,N,_,J)}}}else if(Y.visible){const z=v(_,Y,A,M.near,M.far,b);t.renderBufferDirect(M,null,H,z,_,null)}}const R=_.children;for(let H=0,Y=R.length;H<Y;H++)y(R[H],S,M,A,b)}}function PA(t,e,n){const r=n.isWebGL2;function i(){let O=!1;const Z=new Nt;let ue=null;const ve=new Nt(0,0,0,0);return{setMask:function(be){ue!==be&&!O&&(t.colorMask(be,be,be,be),ue=be)},setLocked:function(be){O=be},setClear:function(be,nt,Mt,qt,ir){ir===!0&&(be*=qt,nt*=qt,Mt*=qt),Z.set(be,nt,Mt,qt),ve.equals(Z)===!1&&(t.clearColor(be,nt,Mt,qt),ve.copy(Z))},reset:function(){O=!1,ue=null,ve.set(-1,0,0,0)}}}function a(){let O=!1,Z=null,ue=null,ve=null;return{setTest:function(be){be?ne(2929):j(2929)},setMask:function(be){Z!==be&&!O&&(t.depthMask(be),Z=be)},setFunc:function(be){if(ue!==be){switch(be){case ZE:t.depthFunc(512);break;case QE:t.depthFunc(519);break;case JE:t.depthFunc(513);break;case _p:t.depthFunc(515);break;case eC:t.depthFunc(514);break;case tC:t.depthFunc(518);break;case nC:t.depthFunc(516);break;case rC:t.depthFunc(517);break;default:t.depthFunc(515)}ue=be}},setLocked:function(be){O=be},setClear:function(be){ve!==be&&(t.clearDepth(be),ve=be)},reset:function(){O=!1,Z=null,ue=null,ve=null}}}function o(){let O=!1,Z=null,ue=null,ve=null,be=null,nt=null,Mt=null,qt=null,ir=null;return{setTest:function(pt){O||(pt?ne(2960):j(2960))},setMask:function(pt){Z!==pt&&!O&&(t.stencilMask(pt),Z=pt)},setFunc:function(pt,In,ar){(ue!==pt||ve!==In||be!==ar)&&(t.stencilFunc(pt,In,ar),ue=pt,ve=In,be=ar)},setOp:function(pt,In,ar){(nt!==pt||Mt!==In||qt!==ar)&&(t.stencilOp(pt,In,ar),nt=pt,Mt=In,qt=ar)},setLocked:function(pt){O=pt},setClear:function(pt){ir!==pt&&(t.clearStencil(pt),ir=pt)},reset:function(){O=!1,Z=null,ue=null,ve=null,be=null,nt=null,Mt=null,qt=null,ir=null}}}const s=new i,l=new a,u=new o,f=new WeakMap,d=new WeakMap;let c={},p={},x=new WeakMap,h=[],m=null,g=!1,v=null,y=null,_=null,S=null,M=null,A=null,b=null,E=!1,R=null,H=null,Y=null,z=null,k=null;const $=t.getParameter(35661);let J=!1,ee=0;const N=t.getParameter(7938);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),J=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),J=ee>=2);let q=null,G={};const le=t.getParameter(3088),P=t.getParameter(2978),F=new Nt().fromArray(le),V=new Nt().fromArray(P);function I(O,Z,ue){const ve=new Uint8Array(4),be=t.createTexture();t.bindTexture(O,be),t.texParameteri(O,10241,9728),t.texParameteri(O,10240,9728);for(let nt=0;nt<ue;nt++)t.texImage2D(Z+nt,0,6408,1,1,0,6408,5121,ve);return be}const L={};L[3553]=I(3553,3553,1),L[34067]=I(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ne(2929),l.setFunc(_p),Ue(!1),Te(Og),ne(2884),Be(di);function ne(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function j(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function ce(O,Z){return p[O]!==Z?(t.bindFramebuffer(O,Z),p[O]=Z,r&&(O===36009&&(p[36160]=Z),O===36160&&(p[36009]=Z)),!0):!1}function ae(O,Z){let ue=h,ve=!1;if(O)if(ue=x.get(Z),ue===void 0&&(ue=[],x.set(Z,ue)),O.isWebGLMultipleRenderTargets){const be=O.texture;if(ue.length!==be.length||ue[0]!==36064){for(let nt=0,Mt=be.length;nt<Mt;nt++)ue[nt]=36064+nt;ue.length=be.length,ve=!0}}else ue[0]!==36064&&(ue[0]=36064,ve=!0);else ue[0]!==1029&&(ue[0]=1029,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function me(O){return m!==O?(t.useProgram(O),m=O,!0):!1}const fe={[_a]:32774,[UE]:32778,[GE]:32779};if(r)fe[Ug]=32775,fe[Gg]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(fe[Ug]=O.MIN_EXT,fe[Gg]=O.MAX_EXT)}const Me={[VE]:0,[WE]:1,[HE]:768,[Y_]:770,[KE]:776,[XE]:774,[$E]:772,[jE]:769,[K_]:771,[YE]:775,[qE]:773};function Be(O,Z,ue,ve,be,nt,Mt,qt){if(O===di){g===!0&&(j(3042),g=!1);return}if(g===!1&&(ne(3042),g=!0),O!==BE){if(O!==v||qt!==E){if((y!==_a||M!==_a)&&(t.blendEquation(32774),y=_a,M=_a),qt)switch(O){case Ga:t.blendFuncSeparate(1,771,1,771);break;case Fg:t.blendFunc(1,1);break;case zg:t.blendFuncSeparate(0,769,0,1);break;case Bg:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ga:t.blendFuncSeparate(770,771,1,771);break;case Fg:t.blendFunc(770,1);break;case zg:t.blendFuncSeparate(0,769,0,1);break;case Bg:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,S=null,A=null,b=null,v=O,E=qt}return}be=be||Z,nt=nt||ue,Mt=Mt||ve,(Z!==y||be!==M)&&(t.blendEquationSeparate(fe[Z],fe[be]),y=Z,M=be),(ue!==_||ve!==S||nt!==A||Mt!==b)&&(t.blendFuncSeparate(Me[ue],Me[ve],Me[nt],Me[Mt]),_=ue,S=ve,A=nt,b=Mt),v=O,E=!1}function Ae(O,Z){O.side===Rr?j(2884):ne(2884);let ue=O.side===wn;Z&&(ue=!ue),Ue(ue),O.blending===Ga&&O.transparent===!1?Be(di):Be(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),s.setMask(O.colorWrite);const ve=O.stencilWrite;u.setTest(ve),ve&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(32926):j(32926)}function Ue(O){R!==O&&(O?t.frontFace(2304):t.frontFace(2305),R=O)}function Te(O){O!==OE?(ne(2884),O!==H&&(O===Og?t.cullFace(1029):O===FE?t.cullFace(1028):t.cullFace(1032))):j(2884),H=O}function Ne(O){O!==Y&&(J&&t.lineWidth(O),Y=O)}function Ge(O,Z,ue){O?(ne(32823),(z!==Z||k!==ue)&&(t.polygonOffset(Z,ue),z=Z,k=ue)):j(32823)}function $e(O){O?ne(3089):j(3089)}function zt(O){O===void 0&&(O=33984+$-1),q!==O&&(t.activeTexture(O),q=O)}function D(O,Z,ue){ue===void 0&&(q===null?ue=33984+$-1:ue=q);let ve=G[ue];ve===void 0&&(ve={type:void 0,texture:void 0},G[ue]=ve),(ve.type!==O||ve.texture!==Z)&&(q!==ue&&(t.activeTexture(ue),q=ue),t.bindTexture(O,Z||L[O]),ve.type=O,ve.texture=Z)}function w(){const O=G[q];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){F.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),F.copy(O))}function Ee(O){V.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function qe(O,Z){let ue=d.get(Z);ue===void 0&&(ue=new WeakMap,d.set(Z,ue));let ve=ue.get(O);ve===void 0&&(ve=t.getUniformBlockIndex(Z,O.name),ue.set(O,ve))}function lt(O,Z){const ve=d.get(Z).get(O);f.get(Z)!==ve&&(t.uniformBlockBinding(Z,ve,O.__bindingPointIndex),f.set(Z,ve))}function wt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),r===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},q=null,G={},p={},x=new WeakMap,h=[],m=null,g=!1,v=null,y=null,_=null,S=null,M=null,A=null,b=null,E=!1,R=null,H=null,Y=null,z=null,k=null,F.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:ne,disable:j,bindFramebuffer:ce,drawBuffers:ae,useProgram:me,setBlending:Be,setMaterial:Ae,setFlipSided:Ue,setCullFace:Te,setLineWidth:Ne,setPolygonOffset:Ge,setScissorTest:$e,activeTexture:zt,bindTexture:D,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:re,texImage2D:Se,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:lt,texStorage2D:te,texStorage3D:Pe,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:_e,compressedTexSubImage3D:ye,scissor:De,viewport:Ee,reset:wt}}function RA(t,e,n,r,i,a,o){const s=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,w){return g?new OffscreenCanvas(D,w):Du("canvas")}function y(D,w,B,re){let pe=1;if((D.width>re||D.height>re)&&(pe=re/Math.max(D.width,D.height)),pe<1||w===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ge=w?IC:Math.floor,_e=ge(pe*D.width),ye=ge(pe*D.height);h===void 0&&(h=v(_e,ye));const te=B?v(_e,ye):h;return te.width=_e,te.height=ye,te.getContext("2d").drawImage(D,0,0,_e,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+_e+"x"+ye+")."),te}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function _(D){return mv(D.width)&&mv(D.height)}function S(D){return s?!1:D.wrapS!==Qn||D.wrapT!==Qn||D.minFilter!==en&&D.minFilter!==Bn}function M(D,w){return D.generateMipmaps&&w&&D.minFilter!==en&&D.minFilter!==Bn}function A(D){t.generateMipmap(D)}function b(D,w,B,re,pe=!1){if(s===!1)return w;if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ge=w;return w===6403&&(B===5126&&(ge=33326),B===5131&&(ge=33325),B===5121&&(ge=33321)),w===33319&&(B===5126&&(ge=33328),B===5131&&(ge=33327),B===5121&&(ge=33323)),w===6408&&(B===5126&&(ge=34836),B===5131&&(ge=34842),B===5121&&(ge=re===it&&pe===!1?35907:32856),B===32819&&(ge=32854),B===32820&&(ge=32855)),(ge===33325||ge===33326||ge===33327||ge===33328||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function E(D,w,B){return M(D,B)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function R(D){return D===en||D===Vg||D===fd?9728:9729}function H(D){const w=D.target;w.removeEventListener("dispose",H),z(w),w.isVideoTexture&&x.delete(w)}function Y(D){const w=D.target;w.removeEventListener("dispose",Y),$(w)}function z(D){const w=r.get(D);if(w.__webglInit===void 0)return;const B=D.source,re=m.get(B);if(re){const pe=re[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&k(D),Object.keys(re).length===0&&m.delete(B)}r.remove(D)}function k(D){const w=r.get(D);t.deleteTexture(w.__webglTexture);const B=D.source,re=m.get(B);delete re[w.__cacheKey],o.memory.textures--}function $(D){const w=D.texture,B=r.get(D),re=r.get(w);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)t.deleteFramebuffer(B.__webglFramebuffer[pe]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[pe]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let pe=0;pe<B.__webglColorRenderbuffer.length;pe++)B.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[pe]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let pe=0,ge=w.length;pe<ge;pe++){const _e=r.get(w[pe]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),r.remove(w[pe])}r.remove(w),r.remove(D)}let J=0;function ee(){J=0}function N(){const D=J;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),J+=1,D}function q(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.encoding),w.join()}function G(D,w){const B=r.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,D,w);return}}n.bindTexture(3553,B.__webglTexture,33984+w)}function le(D,w){const B=r.get(D);if(D.version>0&&B.__version!==D.version){j(B,D,w);return}n.bindTexture(35866,B.__webglTexture,33984+w)}function P(D,w){const B=r.get(D);if(D.version>0&&B.__version!==D.version){j(B,D,w);return}n.bindTexture(32879,B.__webglTexture,33984+w)}function F(D,w){const B=r.get(D);if(D.version>0&&B.__version!==D.version){ce(B,D,w);return}n.bindTexture(34067,B.__webglTexture,33984+w)}const V={[wp]:10497,[Qn]:33071,[Mp]:33648},I={[en]:9728,[Vg]:9984,[fd]:9986,[Bn]:9729,[dC]:9985,[xs]:9987};function L(D,w,B){if(B?(t.texParameteri(D,10242,V[w.wrapS]),t.texParameteri(D,10243,V[w.wrapT]),(D===32879||D===35866)&&t.texParameteri(D,32882,V[w.wrapR]),t.texParameteri(D,10240,I[w.magFilter]),t.texParameteri(D,10241,I[w.minFilter])):(t.texParameteri(D,10242,33071),t.texParameteri(D,10243,33071),(D===32879||D===35866)&&t.texParameteri(D,32882,33071),(w.wrapS!==Qn||w.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(D,10240,R(w.magFilter)),t.texParameteri(D,10241,R(w.minFilter)),w.minFilter!==en&&w.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===en||w.minFilter!==fd&&w.minFilter!==xs||w.type===Bi&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===ys&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(t.texParameterf(D,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function ne(D,w){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",H));const re=w.source;let pe=m.get(re);pe===void 0&&(pe={},m.set(re,pe));const ge=q(w);if(ge!==D.__cacheKey){pe[ge]===void 0&&(pe[ge]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),pe[ge].usedTimes++;const _e=pe[D.__cacheKey];_e!==void 0&&(pe[D.__cacheKey].usedTimes--,_e.usedTimes===0&&k(w)),D.__cacheKey=ge,D.__webglTexture=pe[ge].texture}return B}function j(D,w,B){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const pe=ne(D,w),ge=w.source;n.bindTexture(re,D.__webglTexture,33984+B);const _e=r.get(ge);if(ge.version!==_e.__version||pe===!0){n.activeTexture(33984+B),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const ye=S(w)&&_(w.image)===!1;let te=y(w.image,ye,!1,f);te=zt(w,te);const Pe=_(te)||s,Se=a.convert(w.format,w.encoding);let Re=a.convert(w.type),De=b(w.internalFormat,Se,Re,w.encoding,w.isVideoTexture);L(re,w,Pe);let Ee;const qe=w.mipmaps,lt=s&&w.isVideoTexture!==!0,wt=_e.__version===void 0||pe===!0,O=E(w,te,Pe);if(w.isDepthTexture)De=6402,s?w.type===Bi?De=36012:w.type===zi?De=33190:w.type===Va?De=35056:De=33189:w.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Vi&&De===6402&&w.type!==J_&&w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=zi,Re=a.convert(w.type)),w.format===to&&De===6402&&(De=34041,w.type!==Va&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Va,Re=a.convert(w.type))),wt&&(lt?n.texStorage2D(3553,1,De,te.width,te.height):n.texImage2D(3553,0,De,te.width,te.height,0,Se,Re,null));else if(w.isDataTexture)if(qe.length>0&&Pe){lt&&wt&&n.texStorage2D(3553,O,De,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Ee=qe[Z],lt?n.texSubImage2D(3553,Z,0,0,Ee.width,Ee.height,Se,Re,Ee.data):n.texImage2D(3553,Z,De,Ee.width,Ee.height,0,Se,Re,Ee.data);w.generateMipmaps=!1}else lt?(wt&&n.texStorage2D(3553,O,De,te.width,te.height),n.texSubImage2D(3553,0,0,0,te.width,te.height,Se,Re,te.data)):n.texImage2D(3553,0,De,te.width,te.height,0,Se,Re,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&wt&&n.texStorage3D(35866,O,De,qe[0].width,qe[0].height,te.depth);for(let Z=0,ue=qe.length;Z<ue;Z++)Ee=qe[Z],w.format!==Jn?Se!==null?lt?n.compressedTexSubImage3D(35866,Z,0,0,0,Ee.width,Ee.height,te.depth,Se,Ee.data,0,0):n.compressedTexImage3D(35866,Z,De,Ee.width,Ee.height,te.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?n.texSubImage3D(35866,Z,0,0,0,Ee.width,Ee.height,te.depth,Se,Re,Ee.data):n.texImage3D(35866,Z,De,Ee.width,Ee.height,te.depth,0,Se,Re,Ee.data)}else{lt&&wt&&n.texStorage2D(3553,O,De,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Ee=qe[Z],w.format!==Jn?Se!==null?lt?n.compressedTexSubImage2D(3553,Z,0,0,Ee.width,Ee.height,Se,Ee.data):n.compressedTexImage2D(3553,Z,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?n.texSubImage2D(3553,Z,0,0,Ee.width,Ee.height,Se,Re,Ee.data):n.texImage2D(3553,Z,De,Ee.width,Ee.height,0,Se,Re,Ee.data)}else if(w.isDataArrayTexture)lt?(wt&&n.texStorage3D(35866,O,De,te.width,te.height,te.depth),n.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,Se,Re,te.data)):n.texImage3D(35866,0,De,te.width,te.height,te.depth,0,Se,Re,te.data);else if(w.isData3DTexture)lt?(wt&&n.texStorage3D(32879,O,De,te.width,te.height,te.depth),n.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,Se,Re,te.data)):n.texImage3D(32879,0,De,te.width,te.height,te.depth,0,Se,Re,te.data);else if(w.isFramebufferTexture){if(wt)if(lt)n.texStorage2D(3553,O,De,te.width,te.height);else{let Z=te.width,ue=te.height;for(let ve=0;ve<O;ve++)n.texImage2D(3553,ve,De,Z,ue,0,Se,Re,null),Z>>=1,ue>>=1}}else if(qe.length>0&&Pe){lt&&wt&&n.texStorage2D(3553,O,De,qe[0].width,qe[0].height);for(let Z=0,ue=qe.length;Z<ue;Z++)Ee=qe[Z],lt?n.texSubImage2D(3553,Z,0,0,Se,Re,Ee):n.texImage2D(3553,Z,De,Se,Re,Ee);w.generateMipmaps=!1}else lt?(wt&&n.texStorage2D(3553,O,De,te.width,te.height),n.texSubImage2D(3553,0,0,0,Se,Re,te)):n.texImage2D(3553,0,De,Se,Re,te);M(w,Pe)&&A(re),_e.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ce(D,w,B){if(w.image.length!==6)return;const re=ne(D,w),pe=w.source;n.bindTexture(34067,D.__webglTexture,33984+B);const ge=r.get(pe);if(pe.version!==ge.__version||re===!0){n.activeTexture(33984+B),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const _e=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,te=[];for(let Z=0;Z<6;Z++)!_e&&!ye?te[Z]=y(w.image[Z],!1,!0,u):te[Z]=ye?w.image[Z].image:w.image[Z],te[Z]=zt(w,te[Z]);const Pe=te[0],Se=_(Pe)||s,Re=a.convert(w.format,w.encoding),De=a.convert(w.type),Ee=b(w.internalFormat,Re,De,w.encoding),qe=s&&w.isVideoTexture!==!0,lt=ge.__version===void 0||re===!0;let wt=E(w,Pe,Se);L(34067,w,Se);let O;if(_e){qe&&lt&&n.texStorage2D(34067,wt,Ee,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){O=te[Z].mipmaps;for(let ue=0;ue<O.length;ue++){const ve=O[ue];w.format!==Jn?Re!==null?qe?n.compressedTexSubImage2D(34069+Z,ue,0,0,ve.width,ve.height,Re,ve.data):n.compressedTexImage2D(34069+Z,ue,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(34069+Z,ue,0,0,ve.width,ve.height,Re,De,ve.data):n.texImage2D(34069+Z,ue,Ee,ve.width,ve.height,0,Re,De,ve.data)}}}else{O=w.mipmaps,qe&&lt&&(O.length>0&&wt++,n.texStorage2D(34067,wt,Ee,te[0].width,te[0].height));for(let Z=0;Z<6;Z++)if(ye){qe?n.texSubImage2D(34069+Z,0,0,0,te[Z].width,te[Z].height,Re,De,te[Z].data):n.texImage2D(34069+Z,0,Ee,te[Z].width,te[Z].height,0,Re,De,te[Z].data);for(let ue=0;ue<O.length;ue++){const be=O[ue].image[Z].image;qe?n.texSubImage2D(34069+Z,ue+1,0,0,be.width,be.height,Re,De,be.data):n.texImage2D(34069+Z,ue+1,Ee,be.width,be.height,0,Re,De,be.data)}}else{qe?n.texSubImage2D(34069+Z,0,0,0,Re,De,te[Z]):n.texImage2D(34069+Z,0,Ee,Re,De,te[Z]);for(let ue=0;ue<O.length;ue++){const ve=O[ue];qe?n.texSubImage2D(34069+Z,ue+1,0,0,Re,De,ve.image[Z]):n.texImage2D(34069+Z,ue+1,Ee,Re,De,ve.image[Z])}}}M(w,Se)&&A(34067),ge.__version=pe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ae(D,w,B,re,pe){const ge=a.convert(B.format,B.encoding),_e=a.convert(B.type),ye=b(B.internalFormat,ge,_e,B.encoding);r.get(w).__hasExternalTextures||(pe===32879||pe===35866?n.texImage3D(pe,0,ye,w.width,w.height,w.depth,0,ge,_e,null):n.texImage2D(pe,0,ye,w.width,w.height,0,ge,_e,null)),n.bindFramebuffer(36160,D),Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,re,pe,r.get(B).__webglTexture,0,Ne(w)):(pe===3553||pe>=34069&&pe<=34074)&&t.framebufferTexture2D(36160,re,pe,r.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function me(D,w,B){if(t.bindRenderbuffer(36161,D),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(B||Ge(w)){const pe=w.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Bi?re=36012:pe.type===zi&&(re=33190));const ge=Ne(w);Ge(w)?c.renderbufferStorageMultisampleEXT(36161,ge,re,w.width,w.height):t.renderbufferStorageMultisample(36161,ge,re,w.width,w.height)}else t.renderbufferStorage(36161,re,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,D)}else if(w.depthBuffer&&w.stencilBuffer){const re=Ne(w);B&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Ge(w)?c.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,D)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let pe=0;pe<re.length;pe++){const ge=re[pe],_e=a.convert(ge.format,ge.encoding),ye=a.convert(ge.type),te=b(ge.internalFormat,_e,ye,ge.encoding),Pe=Ne(w);B&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,Pe,te,w.width,w.height):Ge(w)?c.renderbufferStorageMultisampleEXT(36161,Pe,te,w.width,w.height):t.renderbufferStorage(36161,te,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function fe(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const re=r.get(w.depthTexture).__webglTexture,pe=Ne(w);if(w.depthTexture.format===Vi)Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,pe):t.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===to)Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,pe):t.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Me(D){const w=r.get(D),B=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,D)}else if(B){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=t.createRenderbuffer(),me(w.__webglDepthbuffer[re],D,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),me(w.__webglDepthbuffer,D,!1);n.bindFramebuffer(36160,null)}function Be(D,w,B){const re=r.get(D);w!==void 0&&ae(re.__webglFramebuffer,D,D.texture,36064,3553),B!==void 0&&Me(D)}function Ae(D){const w=D.texture,B=r.get(D),re=r.get(w);D.addEventListener("dispose",Y),D.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,o.memory.textures++);const pe=D.isWebGLCubeRenderTarget===!0,ge=D.isWebGLMultipleRenderTargets===!0,_e=_(D)||s;if(pe){B.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)B.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),ge)if(i.drawBuffers){const ye=D.texture;for(let te=0,Pe=ye.length;te<Pe;te++){const Se=r.get(ye[te]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&D.samples>0&&Ge(D)===!1){const ye=ge?w:[w];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let te=0;te<ye.length;te++){const Pe=ye[te];B.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[te]);const Se=a.convert(Pe.format,Pe.encoding),Re=a.convert(Pe.type),De=b(Pe.internalFormat,Se,Re,Pe.encoding,D.isXRRenderTarget===!0),Ee=Ne(D);t.renderbufferStorageMultisample(36161,Ee,De,D.width,D.height),t.framebufferRenderbuffer(36160,36064+te,36161,B.__webglColorRenderbuffer[te])}t.bindRenderbuffer(36161,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),me(B.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(36160,null)}}if(pe){n.bindTexture(34067,re.__webglTexture),L(34067,w,_e);for(let ye=0;ye<6;ye++)ae(B.__webglFramebuffer[ye],D,w,36064,34069+ye);M(w,_e)&&A(34067),n.unbindTexture()}else if(ge){const ye=D.texture;for(let te=0,Pe=ye.length;te<Pe;te++){const Se=ye[te],Re=r.get(Se);n.bindTexture(3553,Re.__webglTexture),L(3553,Se,_e),ae(B.__webglFramebuffer,D,Se,36064+te,3553),M(Se,_e)&&A(3553)}n.unbindTexture()}else{let ye=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(s?ye=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,re.__webglTexture),L(ye,w,_e),ae(B.__webglFramebuffer,D,w,36064,ye),M(w,_e)&&A(ye),n.unbindTexture()}D.depthBuffer&&Me(D)}function Ue(D){const w=_(D)||s,B=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let re=0,pe=B.length;re<pe;re++){const ge=B[re];if(M(ge,w)){const _e=D.isWebGLCubeRenderTarget?34067:3553,ye=r.get(ge).__webglTexture;n.bindTexture(_e,ye),A(_e),n.unbindTexture()}}}function Te(D){if(s&&D.samples>0&&Ge(D)===!1){const w=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],B=D.width,re=D.height;let pe=16384;const ge=[],_e=D.stencilBuffer?33306:36096,ye=r.get(D),te=D.isWebGLMultipleRenderTargets===!0;if(te)for(let Pe=0;Pe<w.length;Pe++)n.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Pe,36161,null),n.bindFramebuffer(36160,ye.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Pe,3553,null,0);n.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){ge.push(36064+Pe),D.depthBuffer&&ge.push(_e);const Se=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Se===!1&&(D.depthBuffer&&(pe|=256),D.stencilBuffer&&(pe|=1024)),te&&t.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Pe]),Se===!0&&(t.invalidateFramebuffer(36008,[_e]),t.invalidateFramebuffer(36009,[_e])),te){const Re=r.get(w[Pe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Re,0)}t.blitFramebuffer(0,0,B,re,0,0,B,re,pe,9728),p&&t.invalidateFramebuffer(36008,ge)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),te)for(let Pe=0;Pe<w.length;Pe++){n.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Pe,36161,ye.__webglColorRenderbuffer[Pe]);const Se=r.get(w[Pe]).__webglTexture;n.bindFramebuffer(36160,ye.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Pe,3553,Se,0)}n.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function Ne(D){return Math.min(d,D.samples)}function Ge(D){const w=r.get(D);return s&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(D){const w=o.render.frame;x.get(D)!==w&&(x.set(D,w),D.update())}function zt(D,w){const B=D.encoding,re=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ep||B!==Yi&&(B===it?s===!1?e.has("EXT_sRGB")===!0&&re===Jn?(D.format=Ep,D.minFilter=Bn,D.generateMipmaps=!1):w=nb.sRGBToLinear(w):(re!==Jn||pe!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=N,this.resetTextureUnits=ee,this.setTexture2D=G,this.setTexture2DArray=le,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=Be,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ge}function LA(t,e,n){const r=n.isWebGL2;function i(a,o=null){let s;if(a===Xi)return 5121;if(a===mC)return 32819;if(a===gC)return 32820;if(a===fC)return 5120;if(a===pC)return 5122;if(a===J_)return 5123;if(a===hC)return 5124;if(a===zi)return 5125;if(a===Bi)return 5126;if(a===ys)return r?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===vC)return 6406;if(a===Jn)return 6408;if(a===xC)return 6409;if(a===yC)return 6410;if(a===Vi)return 6402;if(a===to)return 34041;if(a===Ep)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===_C)return 6403;if(a===bC)return 36244;if(a===SC)return 33319;if(a===wC)return 33320;if(a===MC)return 36249;if(a===pd||a===hd||a===md||a===gd)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===pd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===md)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===pd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===md)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Wg||a===Hg||a===jg||a===$g)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Wg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===jg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$g)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===EC)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===qg||a===Xg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===qg)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Xg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Yg||a===Kg||a===Zg||a===Qg||a===Jg||a===ev||a===tv||a===nv||a===rv||a===iv||a===av||a===ov||a===sv||a===lv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Yg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Zg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ev)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===nv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===rv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===iv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===av)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ov)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lv)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===vd)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===CC||a===uv||a===cv||a===dv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===vd)return s.COMPRESSED_RED_RGTC1_EXT;if(a===uv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===dv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Va?r?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:i}}class IA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NA={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const m=n.getJointPose(h,r),g=this._getHandJoint(u,h);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=f.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&c>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(NA)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class kA extends Mn{constructor(e,n,r,i,a,o,s,l,u,f){if(f=f!==void 0?f:Vi,f!==Vi&&f!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===Vi&&(r=zi),r===void 0&&f===to&&(r=Va),super(null,i,a,o,s,l,f,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1}}class OA extends co{constructor(e,n){super();const r=this;let i=null,a=1,o=null,s="local-floor",l=1,u=null,f=null,d=null,c=null,p=null,x=null;const h=n.getContextAttributes();let m=null,g=null;const v=[],y=[],_=new Set,S=new Map,M=new _n;M.layers.enable(1),M.viewport=new Nt;const A=new _n;A.layers.enable(2),A.viewport=new Nt;const b=[M,A],E=new IA;E.layers.enable(1),E.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let F=v[P];return F===void 0&&(F=new Wd,v[P]=F),F.getTargetRaySpace()},this.getControllerGrip=function(P){let F=v[P];return F===void 0&&(F=new Wd,v[P]=F),F.getGripSpace()},this.getHand=function(P){let F=v[P];return F===void 0&&(F=new Wd,v[P]=F),F.getHandSpace()};function Y(P){const F=y.indexOf(P.inputSource);if(F===-1)return;const V=v[F];V!==void 0&&V.dispatchEvent({type:P.type,data:P.inputSource})}function z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let P=0;P<v.length;P++){const F=y[P];F!==null&&(y[P]=null,v[P].disconnect(F))}R=null,H=null,e.setRenderTarget(m),p=null,c=null,d=null,i=null,g=null,le.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){a=P,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){s=P,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await n.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,n,F),i.updateRenderState({baseLayer:p}),g=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Xi,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let F=null,V=null,I=null;h.depth&&(I=h.stencil?35056:33190,F=h.stencil?to:Vi,V=h.stencil?Va:zi);const L={colorFormat:32856,depthFormat:I,scaleFactor:a};d=new XRWebGLBinding(i,n),c=d.createProjectionLayer(L),i.updateRenderState({layers:[c]}),g=new Ki(c.textureWidth,c.textureHeight,{format:Jn,type:Xi,depthTexture:new kA(c.textureWidth,c.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ne=e.properties.get(g);ne.__ignoreDepthValues=c.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(s),le.setContext(i),le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function k(P){for(let F=0;F<P.removed.length;F++){const V=P.removed[F],I=y.indexOf(V);I>=0&&(y[I]=null,v[I].disconnect(V))}for(let F=0;F<P.added.length;F++){const V=P.added[F];let I=y.indexOf(V);if(I===-1){for(let ne=0;ne<v.length;ne++)if(ne>=y.length){y.push(V),I=ne;break}else if(y[ne]===null){y[ne]=V,I=ne;break}if(I===-1)break}const L=v[I];L&&L.connect(V)}}const $=new X,J=new X;function ee(P,F,V){$.setFromMatrixPosition(F.matrixWorld),J.setFromMatrixPosition(V.matrixWorld);const I=$.distanceTo(J),L=F.projectionMatrix.elements,ne=V.projectionMatrix.elements,j=L[14]/(L[10]-1),ce=L[14]/(L[10]+1),ae=(L[9]+1)/L[5],me=(L[9]-1)/L[5],fe=(L[8]-1)/L[0],Me=(ne[8]+1)/ne[0],Be=j*fe,Ae=j*Me,Ue=I/(-fe+Me),Te=Ue*-fe;F.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Te),P.translateZ(Ue),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Ne=j+Ue,Ge=ce+Ue,$e=Be-Te,zt=Ae+(I-Te),D=ae*ce/Ge*Ne,w=me*ce/Ge*Ne;P.projectionMatrix.makePerspective($e,zt,D,w,Ne,Ge)}function N(P,F){F===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(F.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;E.near=A.near=M.near=P.near,E.far=A.far=M.far=P.far,(R!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,H=E.far);const F=P.parent,V=E.cameras;N(E,F);for(let L=0;L<V.length;L++)N(V[L],F);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),P.matrix.copy(E.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const I=P.children;for(let L=0,ne=I.length;L<ne;L++)I[L].updateMatrixWorld(!0);V.length===2?ee(E,M,A):E.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(P){l=P,c!==null&&(c.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.getPlanes=function(){return _};let q=null;function G(P,F){if(f=F.getViewerPose(u||o),x=F,f!==null){const V=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let I=!1;V.length!==E.cameras.length&&(E.cameras.length=0,I=!0);for(let L=0;L<V.length;L++){const ne=V[L];let j=null;if(p!==null)j=p.getViewport(ne);else{const ae=d.getViewSubImage(c,ne);j=ae.viewport,L===0&&(e.setRenderTargetTextures(g,ae.colorTexture,c.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(g))}let ce=b[L];ce===void 0&&(ce=new _n,ce.layers.enable(L),ce.viewport=new Nt,b[L]=ce),ce.matrix.fromArray(ne.transform.matrix),ce.projectionMatrix.fromArray(ne.projectionMatrix),ce.viewport.set(j.x,j.y,j.width,j.height),L===0&&E.matrix.copy(ce.matrix),I===!0&&E.cameras.push(ce)}}for(let V=0;V<v.length;V++){const I=y[V],L=v[V];I!==null&&L!==void 0&&L.update(I,F,u||o)}if(q&&q(P,F),F.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:F.detectedPlanes});let V=null;for(const I of _)F.detectedPlanes.has(I)||(V===null&&(V=[]),V.push(I));if(V!==null)for(const I of V)_.delete(I),S.delete(I),r.dispatchEvent({type:"planeremoved",data:I});for(const I of F.detectedPlanes)if(!_.has(I))_.add(I),S.set(I,F.lastChangedTime),r.dispatchEvent({type:"planeadded",data:I});else{const L=S.get(I);I.lastChangedTime>L&&(S.set(I,I.lastChangedTime),r.dispatchEvent({type:"planechanged",data:I}))}}x=null}const le=new pb;le.setAnimationLoop(G),this.setAnimationLoop=function(P){q=P},this.dispose=function(){}}}function FA(t,e){function n(h,m){m.color.getRGB(h.fogColor.value,ub(t)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function r(h,m,g,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(h,m):m.isMeshToonMaterial?(i(h,m),f(h,m)):m.isMeshPhongMaterial?(i(h,m),u(h,m)):m.isMeshStandardMaterial?(i(h,m),d(h,m),m.isMeshPhysicalMaterial&&c(h,m,y)):m.isMeshMatcapMaterial?(i(h,m),p(h,m)):m.isMeshDepthMaterial?i(h,m):m.isMeshDistanceMaterial?(i(h,m),x(h,m)):m.isMeshNormalMaterial?i(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?s(h,m,g,v):m.isSpriteMaterial?l(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.bumpMap&&(h.bumpMap.value=m.bumpMap,h.bumpScale.value=m.bumpScale,m.side===wn&&(h.bumpScale.value*=-1)),m.displacementMap&&(h.displacementMap.value=m.displacementMap,h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap),m.normalMap&&(h.normalMap.value=m.normalMap,h.normalScale.value.copy(m.normalScale),m.side===wn&&h.normalScale.value.negate()),m.specularMap&&(h.specularMap.value=m.specularMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*_}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.iridescenceMap?v=m.iridescenceMap:m.iridescenceThicknessMap?v=m.iridescenceThicknessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uv2Transform.value.copy(y.matrix))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function s(h,m,g,v){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*g,h.scale.value=v*.5,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function f(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.roughness.value=m.roughness,h.metalness.value=m.metalness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function c(h,m,g){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),h.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===wn&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap)}function p(h,m){m.matcap&&(h.matcap.value=m.matcap)}function x(h,m){h.referencePosition.value.copy(m.referencePosition),h.nearDistance.value=m.nearDistance,h.farDistance.value=m.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zA(t,e,n,r){let i={},a={},o=[];const s=n.isWebGL2?t.getParameter(35375):0;function l(v,y){const _=y.program;r.uniformBlockBinding(v,_)}function u(v,y){let _=i[v.id];_===void 0&&(x(v),_=f(v),i[v.id]=_,v.addEventListener("dispose",m));const S=y.program;r.updateUBOMapping(v,S);const M=e.render.frame;a[v.id]!==M&&(c(v),a[v.id]=M)}function f(v){const y=d();v.__bindingPointIndex=y;const _=t.createBuffer(),S=v.__size,M=v.usage;return t.bindBuffer(35345,_),t.bufferData(35345,S,M),t.bindBuffer(35345,null),t.bindBufferBase(35345,y,_),_}function d(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const y=i[v.id],_=v.uniforms,S=v.__cache;t.bindBuffer(35345,y);for(let M=0,A=_.length;M<A;M++){const b=_[M];if(p(b,M,S)===!0){const E=b.__offset,R=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let Y=0;Y<R.length;Y++){const z=R[Y],k=h(z);typeof z=="number"?(b.__data[0]=z,t.bufferSubData(35345,E+H,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=z.elements[0],b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=z.elements[0],b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=z.elements[0]):(z.toArray(b.__data,H),H+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,E,b.__data)}}t.bindBuffer(35345,null)}function p(v,y,_){const S=v.value;if(_[y]===void 0){if(typeof S=="number")_[y]=S;else{const M=Array.isArray(S)?S:[S],A=[];for(let b=0;b<M.length;b++)A.push(M[b].clone());_[y]=A}return!0}else if(typeof S=="number"){if(_[y]!==S)return _[y]=S,!0}else{const M=Array.isArray(_[y])?_[y]:[_[y]],A=Array.isArray(S)?S:[S];for(let b=0;b<M.length;b++){const E=M[b];if(E.equals(A[b])===!1)return E.copy(A[b]),!0}}return!1}function x(v){const y=v.uniforms;let _=0;const S=16;let M=0;for(let A=0,b=y.length;A<b;A++){const E=y[A],R={boundary:0,storage:0},H=Array.isArray(E.value)?E.value:[E.value];for(let Y=0,z=H.length;Y<z;Y++){const k=H[Y],$=h(k);R.boundary+=$.boundary,R.storage+=$.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,A>0){M=_%S;const Y=S-M;M!==0&&Y-R.boundary<0&&(_+=S-M,E.__offset=_)}_+=R.storage}return M=_%S,M>0&&(_+=S-M),v.__size=_,v.__cache={},this}function h(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(i[y.id]),delete i[y.id],delete a[y.id]}function g(){for(const v in i)t.deleteBuffer(i[v]);o=[],i={},a={}}return{bind:l,update:u,dispose:g}}function BA(){const t=Du("canvas");return t.style.display="block",t}function Au(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:BA(),n=t.context!==void 0?t.context:null,r=t.depth!==void 0?t.depth:!0,i=t.stencil!==void 0?t.stencil:!0,a=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,s=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let f;n!==null?f=n.getContextAttributes().alpha:f=t.alpha!==void 0?t.alpha:!1;let d=null,c=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yi,this.useLegacyLights=!0,this.toneMapping=Nr,this.toneMappingExposure=1;const h=this;let m=!1,g=0,v=0,y=null,_=-1,S=null;const M=new Nt,A=new Nt;let b=null,E=e.width,R=e.height,H=1,Y=null,z=null;const k=new Nt(0,0,E,R),$=new Nt(0,0,E,R);let J=!1;const ee=new fb;let N=!1,q=!1,G=null;const le=new Ot,P=new X,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return y===null?H:1}let I=n;function L(C,W){for(let K=0;K<C.length;K++){const U=C[K],Q=e.getContext(U,W);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:r,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zh}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&W.shift(),I=L(W,C),I===null)throw L(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,j,ce,ae,me,fe,Me,Be,Ae,Ue,Te,Ne,Ge,$e,zt,D,w,B,re,pe,ge,_e,ye,te;function Pe(){ne=new KT(I),j=new WT(I,ne,t),ne.init(j),_e=new LA(I,ne,j),ce=new PA(I,ne,j),ae=new JT,me=new gA,fe=new RA(I,ne,ce,me,j,_e,ae),Me=new jT(h),Be=new YT(h),Ae=new s2(I,j),ye=new GT(I,ne,Ae,j),Ue=new ZT(I,Ae,ae,ye),Te=new rD(I,Ue,Ae,ae),re=new nD(I,j,fe),D=new HT(me),Ne=new mA(h,Me,Be,ne,j,ye,D),Ge=new FA(h,me),$e=new xA,zt=new MA(ne,j),B=new UT(h,Me,Be,ce,Te,f,o),w=new AA(h,Te,j),te=new zA(I,ae,j,ce),pe=new VT(I,ne,ae,j),ge=new QT(I,ne,ae,j),ae.programs=Ne.programs,h.capabilities=j,h.extensions=ne,h.properties=me,h.renderLists=$e,h.shadowMap=w,h.state=ce,h.info=ae}Pe();const Se=new OA(h,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(E,R,!1))},this.getSize=function(C){return C.set(E,R)},this.setSize=function(C,W,K=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,R=W,e.width=Math.floor(C*H),e.height=Math.floor(W*H),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(E*H,R*H).floor()},this.setDrawingBufferSize=function(C,W,K){E=C,R=W,H=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,W,K,U){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,W,K,U),ce.viewport(M.copy(k).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,W,K,U){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,W,K,U),ce.scissor(A.copy($).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){ce.setScissorTest(J=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(C=!0,W=!0,K=!0){let U=0;C&&(U|=16384),W&&(U|=256),K&&(U|=1024),I.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),$e.dispose(),zt.dispose(),me.dispose(),Me.dispose(),Be.dispose(),Te.dispose(),ye.dispose(),te.dispose(),Ne.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ue),Se.removeEventListener("sessionend",ve),G&&(G.dispose(),G=null),be.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=ae.autoReset,W=w.enabled,K=w.autoUpdate,U=w.needsUpdate,Q=w.type;Pe(),ae.autoReset=C,w.enabled=W,w.autoUpdate=K,w.needsUpdate=U,w.type=Q}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const W=C.target;W.removeEventListener("dispose",qe),lt(W)}function lt(C){wt(C),me.remove(C)}function wt(C){const W=me.get(C).programs;W!==void 0&&(W.forEach(function(K){Ne.releaseProgram(K)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,U,Q,Ce){W===null&&(W=F);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=$S(C,W,K,U,Q);ce.setMaterial(U,Ie);let Fe=K.index,Xe=1;U.wireframe===!0&&(Fe=Ue.getWireframeAttribute(K),Xe=2);const Ve=K.drawRange,We=K.attributes.position;let mt=Ve.start*Xe,pn=(Ve.start+Ve.count)*Xe;Ce!==null&&(mt=Math.max(mt,Ce.start*Xe),pn=Math.min(pn,(Ce.start+Ce.count)*Xe)),Fe!==null?(mt=Math.max(mt,0),pn=Math.min(pn,Fe.count)):We!=null&&(mt=Math.max(mt,0),pn=Math.min(pn,We.count));const yr=pn-mt;if(yr<0||yr===1/0)return;ye.setup(Q,U,Oe,K,Fe);let Si,gt=pe;if(Fe!==null&&(Si=Ae.get(Fe),gt=ge,gt.setIndex(Si)),Q.isMesh)U.wireframe===!0?(ce.setLineWidth(U.wireframeLinewidth*V()),gt.setMode(1)):gt.setMode(4);else if(Q.isLine){let He=U.linewidth;He===void 0&&(He=1),ce.setLineWidth(He*V()),Q.isLineSegments?gt.setMode(1):Q.isLineLoop?gt.setMode(2):gt.setMode(3)}else Q.isPoints?gt.setMode(0):Q.isSprite&&gt.setMode(4);if(Q.isInstancedMesh)gt.renderInstances(mt,yr,Q.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nc=Math.min(K.instanceCount,He);gt.renderInstances(mt,yr,Nc)}else gt.render(mt,yr)},this.compile=function(C,W){function K(U,Q,Ce){U.transparent===!0&&U.side===Rr&&U.forceSinglePass===!1?(U.side=wn,U.needsUpdate=!0,In(U,Q,Ce),U.side=vi,U.needsUpdate=!0,In(U,Q,Ce),U.side=Rr):In(U,Q,Ce)}c=zt.get(C),c.init(),x.push(c),C.traverseVisible(function(U){U.isLight&&U.layers.test(W.layers)&&(c.pushLight(U),U.castShadow&&c.pushShadow(U))}),c.setupLights(h.useLegacyLights),C.traverse(function(U){const Q=U.material;if(Q)if(Array.isArray(Q))for(let Ce=0;Ce<Q.length;Ce++){const Ie=Q[Ce];K(Ie,C,U)}else K(Q,C,U)}),x.pop(),c=null};let O=null;function Z(C){O&&O(C)}function ue(){be.stop()}function ve(){be.start()}const be=new pb;be.setAnimationLoop(Z),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(C){O=C,Se.setAnimationLoop(C),C===null?be.stop():be.start()},Se.addEventListener("sessionstart",ue),Se.addEventListener("sessionend",ve),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(W),W=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,W,y),c=zt.get(C,x.length),c.init(),x.push(c),le.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(le),q=this.localClippingEnabled,N=D.init(this.clippingPlanes,q),d=$e.get(C,p.length),d.init(),p.push(d),nt(C,W,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Y,z),N===!0&&D.beginShadows();const K=c.state.shadowsArray;if(w.render(K,C,W),N===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(d,C),c.setupLights(h.useLegacyLights),W.isArrayCamera){const U=W.cameras;for(let Q=0,Ce=U.length;Q<Ce;Q++){const Ie=U[Q];Mt(d,C,Ie,Ie.viewport)}}else Mt(d,C,W);y!==null&&(fe.updateMultisampleRenderTarget(y),fe.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(h,C,W),ye.resetDefaultState(),_=-1,S=null,x.pop(),x.length>0?c=x[x.length-1]:c=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function nt(C,W,K,U){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)c.pushLight(C),C.castShadow&&c.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){U&&P.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Ie=Te.update(C),Oe=C.material;Oe.visible&&d.push(C,Ie,Oe,K,P.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ae.render.frame&&(C.skeleton.update(),C.skeleton.frame=ae.render.frame),!C.frustumCulled||ee.intersectsObject(C))){U&&P.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Ie=Te.update(C),Oe=C.material;if(Array.isArray(Oe)){const Fe=Ie.groups;for(let Xe=0,Ve=Fe.length;Xe<Ve;Xe++){const We=Fe[Xe],mt=Oe[We.materialIndex];mt&&mt.visible&&d.push(C,Ie,mt,K,P.z,We)}}else Oe.visible&&d.push(C,Ie,Oe,K,P.z,null)}}const Ce=C.children;for(let Ie=0,Oe=Ce.length;Ie<Oe;Ie++)nt(Ce[Ie],W,K,U)}function Mt(C,W,K,U){const Q=C.opaque,Ce=C.transmissive,Ie=C.transparent;c.setupLightsView(K),N===!0&&D.setGlobalState(h.clippingPlanes,K),Ce.length>0&&qt(Q,W,K),U&&ce.viewport(M.copy(U)),Q.length>0&&ir(Q,W,K),Ce.length>0&&ir(Ce,W,K),Ie.length>0&&ir(Ie,W,K),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function qt(C,W,K){const U=j.isWebGL2;G===null&&(G=new Ki(1024,1024,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?ys:Xi,minFilter:xs,samples:U&&a===!0?4:0}));const Q=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Ce=h.toneMapping;h.toneMapping=Nr,ir(C,W,K),h.toneMapping=Ce,fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G),h.setRenderTarget(Q)}function ir(C,W,K){const U=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ce=C.length;Q<Ce;Q++){const Ie=C[Q],Oe=Ie.object,Fe=Ie.geometry,Xe=U===null?Ie.material:U,Ve=Ie.group;Oe.layers.test(K.layers)&&pt(Oe,W,K,Fe,Xe,Ve)}}function pt(C,W,K,U,Q,Ce){C.onBeforeRender(h,W,K,U,Q,Ce),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(h,W,K,U,C,Ce),Q.transparent===!0&&Q.side===Rr&&Q.forceSinglePass===!1?(Q.side=wn,Q.needsUpdate=!0,h.renderBufferDirect(K,W,U,Q,C,Ce),Q.side=vi,Q.needsUpdate=!0,h.renderBufferDirect(K,W,U,Q,C,Ce),Q.side=Rr):h.renderBufferDirect(K,W,U,Q,C,Ce),C.onAfterRender(h,W,K,U,Q,Ce)}function In(C,W,K){W.isScene!==!0&&(W=F);const U=me.get(C),Q=c.state.lights,Ce=c.state.shadowsArray,Ie=Q.state.version,Oe=Ne.getParameters(C,Q.state,Ce,W,K),Fe=Ne.getProgramCacheKey(Oe);let Xe=U.programs;U.environment=C.isMeshStandardMaterial?W.environment:null,U.fog=W.fog,U.envMap=(C.isMeshStandardMaterial?Be:Me).get(C.envMap||U.environment),Xe===void 0&&(C.addEventListener("dispose",qe),Xe=new Map,U.programs=Xe);let Ve=Xe.get(Fe);if(Ve!==void 0){if(U.currentProgram===Ve&&U.lightsStateVersion===Ie)return ar(C,Oe),Ve}else Oe.uniforms=Ne.getUniforms(C),C.onBuild(K,Oe,h),C.onBeforeCompile(Oe,h),Ve=Ne.acquireProgram(Oe,Fe),Xe.set(Fe,Ve),U.uniforms=Oe.uniforms;const We=U.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=D.uniform),ar(C,Oe),U.needsLights=XS(C),U.lightsStateVersion=Ie,U.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix);const mt=Ve.getUniforms(),pn=eu.seqWithValue(mt.seq,We);return U.currentProgram=Ve,U.uniformsList=pn,Ve}function ar(C,W){const K=me.get(C);K.outputEncoding=W.outputEncoding,K.instancing=W.instancing,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function $S(C,W,K,U,Q){W.isScene!==!0&&(W=F),fe.resetTextureUnits();const Ce=W.fog,Ie=U.isMeshStandardMaterial?W.environment:null,Oe=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Yi,Fe=(U.isMeshStandardMaterial?Be:Me).get(U.envMap||Ie),Xe=U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!U.normalMap&&!!K.attributes.tangent,We=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,pn=!!K.morphAttributes.color,yr=U.toneMapped?h.toneMapping:Nr,Si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=Si!==void 0?Si.length:0,He=me.get(U),Nc=c.state.lights;if(N===!0&&(q===!0||C!==S)){const hn=C===S&&U.id===_;D.setState(U,C,hn)}let Et=!1;U.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Nc.state.version||He.outputEncoding!==Oe||Q.isInstancedMesh&&He.instancing===!1||!Q.isInstancedMesh&&He.instancing===!0||Q.isSkinnedMesh&&He.skinning===!1||!Q.isSkinnedMesh&&He.skinning===!0||He.envMap!==Fe||U.fog===!0&&He.fog!==Ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==D.numPlanes||He.numIntersection!==D.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Ve||He.morphTargets!==We||He.morphNormals!==mt||He.morphColors!==pn||He.toneMapping!==yr||j.isWebGL2===!0&&He.morphTargetsCount!==gt)&&(Et=!0):(Et=!0,He.__version=U.version);let wi=He.currentProgram;Et===!0&&(wi=In(U,W,Q));let hm=!1,go=!1,kc=!1;const Xt=wi.getUniforms(),Mi=He.uniforms;if(ce.useProgram(wi.program)&&(hm=!0,go=!0,kc=!0),U.id!==_&&(_=U.id,go=!0),hm||S!==C){if(Xt.setValue(I,"projectionMatrix",C.projectionMatrix),j.logarithmicDepthBuffer&&Xt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,go=!0,kc=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const hn=Xt.map.cameraPosition;hn!==void 0&&hn.setValue(I,P.setFromMatrixPosition(C.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Xt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Q.isSkinnedMesh)&&Xt.setValue(I,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){Xt.setOptional(I,Q,"bindMatrix"),Xt.setOptional(I,Q,"bindMatrixInverse");const hn=Q.skeleton;hn&&(j.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Xt.setValue(I,"boneTexture",hn.boneTexture,fe),Xt.setValue(I,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oc=K.morphAttributes;if((Oc.position!==void 0||Oc.normal!==void 0||Oc.color!==void 0&&j.isWebGL2===!0)&&re.update(Q,K,wi),(go||He.receiveShadow!==Q.receiveShadow)&&(He.receiveShadow=Q.receiveShadow,Xt.setValue(I,"receiveShadow",Q.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Mi.envMap.value=Fe,Mi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),go&&(Xt.setValue(I,"toneMappingExposure",h.toneMappingExposure),He.needsLights&&qS(Mi,kc),Ce&&U.fog===!0&&Ge.refreshFogUniforms(Mi,Ce),Ge.refreshMaterialUniforms(Mi,U,H,R,G),eu.upload(I,He.uniformsList,Mi,fe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(eu.upload(I,He.uniformsList,Mi,fe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Xt.setValue(I,"center",Q.center),Xt.setValue(I,"modelViewMatrix",Q.modelViewMatrix),Xt.setValue(I,"normalMatrix",Q.normalMatrix),Xt.setValue(I,"modelMatrix",Q.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const hn=U.uniformsGroups;for(let Fc=0,YS=hn.length;Fc<YS;Fc++)if(j.isWebGL2){const mm=hn[Fc];te.update(mm,wi),te.bind(mm,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function qS(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function XS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,W,K){me.get(C.texture).__webglTexture=W,me.get(C.depthTexture).__webglTexture=K;const U=me.get(C);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=K===void 0,U.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const K=me.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){y=C,g=W,v=K;let U=!0,Q=null,Ce=!1,Ie=!1;if(C){const Fe=me.get(C);Fe.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),U=!1):Fe.__webglFramebuffer===void 0?fe.setupRenderTarget(C):Fe.__hasExternalTextures&&fe.rebindTextures(C,me.get(C.texture).__webglTexture,me.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ve=me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=Ve[W],Ce=!0):j.isWebGL2&&C.samples>0&&fe.useMultisampledRTT(C)===!1?Q=me.get(C).__webglMultisampledFramebuffer:Q=Ve,M.copy(C.viewport),A.copy(C.scissor),b=C.scissorTest}else M.copy(k).multiplyScalar(H).floor(),A.copy($).multiplyScalar(H).floor(),b=J;if(ce.bindFramebuffer(36160,Q)&&j.drawBuffers&&U&&ce.drawBuffers(C,Q),ce.viewport(M),ce.scissor(A),ce.setScissorTest(b),Ce){const Fe=me.get(C.texture);I.framebufferTexture2D(36160,36064,34069+W,Fe.__webglTexture,K)}else if(Ie){const Fe=me.get(C.texture),Xe=W||0;I.framebufferTextureLayer(36160,36064,Fe.__webglTexture,K||0,Xe)}_=-1},this.readRenderTargetPixels=function(C,W,K,U,Q,Ce,Ie){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){ce.bindFramebuffer(36160,Oe);try{const Fe=C.texture,Xe=Fe.format,Ve=Fe.type;if(Xe!==Jn&&_e.convert(Xe)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ys&&(ne.has("EXT_color_buffer_half_float")||j.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Ve!==Xi&&_e.convert(Ve)!==I.getParameter(35738)&&!(Ve===Bi&&(j.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-U&&K>=0&&K<=C.height-Q&&I.readPixels(W,K,U,Q,_e.convert(Xe),_e.convert(Ve),Ce)}finally{const Fe=y!==null?me.get(y).__webglFramebuffer:null;ce.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(C,W,K=0){const U=Math.pow(2,-K),Q=Math.floor(W.image.width*U),Ce=Math.floor(W.image.height*U);fe.setTexture2D(W,0),I.copyTexSubImage2D(3553,K,0,0,C.x,C.y,Q,Ce),ce.unbindTexture()},this.copyTextureToTexture=function(C,W,K,U=0){const Q=W.image.width,Ce=W.image.height,Ie=_e.convert(K.format),Oe=_e.convert(K.type);fe.setTexture2D(K,0),I.pixelStorei(37440,K.flipY),I.pixelStorei(37441,K.premultiplyAlpha),I.pixelStorei(3317,K.unpackAlignment),W.isDataTexture?I.texSubImage2D(3553,U,C.x,C.y,Q,Ce,Ie,Oe,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(3553,U,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ie,W.mipmaps[0].data):I.texSubImage2D(3553,U,C.x,C.y,Ie,Oe,W.image),U===0&&K.generateMipmaps&&I.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K,U,Q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Ie=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Fe=_e.convert(U.format),Xe=_e.convert(U.type);let Ve;if(U.isData3DTexture)fe.setTexture3D(U,0),Ve=32879;else if(U.isDataArrayTexture)fe.setTexture2DArray(U,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,U.flipY),I.pixelStorei(37441,U.premultiplyAlpha),I.pixelStorei(3317,U.unpackAlignment);const We=I.getParameter(3314),mt=I.getParameter(32878),pn=I.getParameter(3316),yr=I.getParameter(3315),Si=I.getParameter(32877),gt=K.isCompressedTexture?K.mipmaps[0]:K.image;I.pixelStorei(3314,gt.width),I.pixelStorei(32878,gt.height),I.pixelStorei(3316,C.min.x),I.pixelStorei(3315,C.min.y),I.pixelStorei(32877,C.min.z),K.isDataTexture||K.isData3DTexture?I.texSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,Xe,gt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,gt.data)):I.texSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,Xe,gt),I.pixelStorei(3314,We),I.pixelStorei(32878,mt),I.pixelStorei(3316,pn),I.pixelStorei(3315,yr),I.pixelStorei(32877,Si),Q===0&&U.generateMipmaps&&I.generateMipmap(Ve),ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),ce.unbindTexture()},this.resetState=function(){g=0,v=0,y=null,ce.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Au.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}});class UA extends Au{}UA.prototype.isWebGL1Renderer=!0;class Yv extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Wh extends bi{constructor(e=.5,n=1,r=32,i=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:i,thetaStart:a,thetaLength:o},r=Math.max(3,r),i=Math.max(1,i);const s=[],l=[],u=[],f=[];let d=e;const c=(n-e)/i,p=new X,x=new tt;for(let h=0;h<=i;h++){for(let m=0;m<=r;m++){const g=a+m/r*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),u.push(0,0,1),x.x=(p.x/n+1)/2,x.y=(p.y/n+1)/2,f.push(x.x,x.y)}d+=c}for(let h=0;h<i;h++){const m=h*(r+1);for(let g=0;g<r;g++){const v=g+m,y=v,_=v+r+1,S=v+r+2,M=v+1;s.push(y,_,M),s.push(_,S,M)}}this.setIndex(s),this.setAttribute("position",new gr(l,3)),this.setAttribute("normal",new gr(u,3)),this.setAttribute("uv",new gr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);const GA=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,VA=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 20px 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #a0a0a0;
    margin: 0;
    font-size: 14px;
  }
`,WA=ie.div`
  padding: 30px;
`,HA=ie.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,va=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  .stat-icon {
    font-size: 24px;
    color: #a0a0a0;
  }
  
  .stat-content {
    display: flex;
    flex-direction: column;
  }
  
  .stat-value {
    color: white;
    font-size: 28px;
    font-weight: 600;
  }
  
  .stat-label {
    color: #a0a0a0;
    font-size: 14px;
  }
`,jA=ie.div`
  background: #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  
  .chart-title {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .chart-canvas {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background: #1f1f1f;
  }
`,Kv=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .chart-title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 16px;
    text-align: center;
  }
  
  .chart-canvas {
    width: 180px;
    height: 180px;
    border-radius: 8px;
    background: #1f1f1f;
  }
`,Zv=({orders:t})=>{const e=se.useRef(),n=se.useRef(),r={total:t.length,pending:t.filter(a=>a.status==="pending").length,cut:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.cut}).length,ready:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.ready}).length,shipped:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.shipped}).length,totalRevenue:t.reduce((a,o)=>{var s;return a+(((s=o.pricing)==null?void 0:s.order_total)||0)},0)};se.useEffect(()=>{if(e.current&&n.current){e.current.innerHTML="",n.current.innerHTML="";const a=new Yv,o=new _n(75,1,.1,1e3),s=new Au({alpha:!0,antialias:!0});s.setSize(180,180),e.current.appendChild(s.domElement);const l=new Yv,u=new _n(75,1,.1,1e3),f=new Au({alpha:!0,antialias:!0});f.setSize(180,180),n.current.appendChild(f.domElement);const d=[{value:r.pending,color:6717162,label:"Pending"},{value:r.cut,color:16096779,label:"Cut"},{value:r.ready,color:1096065,label:"Ready"},{value:r.shipped,color:9133302,label:"Shipped"}].filter(p=>p.value>0),c=[{value:r.cut,color:16096779,label:"Cut"},{value:r.ready,color:1096065,label:"Ready"},{value:r.shipped,color:9133302,label:"Shipped"}].filter(p=>p.value>0);i(a,o,s,d),i(l,u,f,c)}},[r]);const i=(a,o,s,l,u)=>{const f=l.reduce((p,x)=>p+x.value,0);if(f===0)return;let d=0;l.forEach((p,x)=>{const h=p.value/f*Math.PI*2,m=new Wh(.3,.8,32),g=new Uh({color:p.color,side:Rr}),v=new Lr(m,g);v.rotation.z=d,a.add(v),d+=h}),o.position.z=2;const c=()=>{requestAnimationFrame(c),a.rotation.z+=.005,s.render(a,o)};c()};return T.jsxs(GA,{children:[T.jsxs(VA,{children:[T.jsx("h1",{children:"Dashboard"}),T.jsx("p",{children:"Overview of your Etsy orders and business metrics"})]}),T.jsxs(WA,{children:[T.jsxs(HA,{children:[T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"📦"}),T.jsxs("div",{className:"stat-content",children:[T.jsx("div",{className:"stat-value",children:r.total}),T.jsx("div",{className:"stat-label",children:"Total Orders"})]})]}),T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"⏳"}),T.jsxs("div",{className:"stat-content",children:[T.jsx("div",{className:"stat-value",children:r.pending}),T.jsx("div",{className:"stat-label",children:"Pending"})]})]}),T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"✂️"}),T.jsxs("div",{className:"stat-content",children:[T.jsx("div",{className:"stat-value",children:r.cut}),T.jsx("div",{className:"stat-label",children:"Cut"})]})]}),T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"✅"}),T.jsxs("div",{className:"stat-content",children:[T.jsx("div",{className:"stat-value",children:r.ready}),T.jsx("div",{className:"stat-label",children:"Ready"})]})]}),T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"🚚"}),T.jsxs("div",{className:"stat-content",children:[T.jsx("div",{className:"stat-value",children:r.shipped}),T.jsx("div",{className:"stat-label",children:"Shipped"})]})]}),T.jsxs(va,{children:[T.jsx("div",{className:"stat-icon",children:"💰"}),T.jsxs("div",{className:"stat-content",children:[T.jsxs("div",{className:"stat-value",children:["$",r.totalRevenue.toFixed(2)]}),T.jsx("div",{className:"stat-label",children:"Total Revenue"})]})]})]}),T.jsxs(jA,{children:[T.jsxs(Kv,{children:[T.jsx("div",{className:"chart-title",children:"Order Status Distribution"}),T.jsx("div",{ref:e,className:"chart-canvas"})]}),T.jsxs(Kv,{children:[T.jsx("div",{className:"chart-title",children:"Fulfillment Progress"}),T.jsx("div",{ref:n,className:"chart-canvas"})]})]})]})]})};function $A(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function xb(t,e){var n=se.useState(function(){return{inputs:e,result:t()}})[0],r=se.useRef(!0),i=se.useRef(n),a=r.current||!!(e&&i.current.inputs&&$A(e,i.current.inputs)),o=a?i.current:{inputs:e,result:t()};return se.useEffect(function(){r.current=!1,i.current=o},[o]),o.result}function qA(t,e){return xb(function(){return t},e)}var Ye=xb,we=qA,yb={exports:{}},XA=yb.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=XA);var xc=yb.exports,_b={exports:{}},YA=_b.exports={version:"2.6.12"};typeof __e=="number"&&(__e=YA);var xr=_b.exports,KA=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},ZA=KA,bb=function(t,e,n){if(ZA(t),e===void 0)return t;switch(n){case 1:return function(r){return t.call(e,r)};case 2:return function(r,i){return t.call(e,r,i)};case 3:return function(r,i,a){return t.call(e,r,i,a)}}return function(){return t.apply(e,arguments)}},Hh={},Hd,Qv;function js(){return Qv||(Qv=1,Hd=function(t){return typeof t=="object"?t!==null:typeof t=="function"}),Hd}var jd,Jv;function yc(){if(Jv)return jd;Jv=1;var t=js();return jd=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},jd}var _c=function(t){try{return!!t()}catch{return!0}},ta=!_c(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),$d,e0;function Sb(){if(e0)return $d;e0=1;var t=js(),e=xc.document,n=t(e)&&t(e.createElement);return $d=function(r){return n?e.createElement(r):{}},$d}var wb=!ta&&!_c(function(){return Object.defineProperty(Sb()("div"),"a",{get:function(){return 7}}).a!=7}),Ll=js(),Mb=function(t,e){if(!Ll(t))return t;var n,r;if(e&&typeof(n=t.toString)=="function"&&!Ll(r=n.call(t))||typeof(n=t.valueOf)=="function"&&!Ll(r=n.call(t))||!e&&typeof(n=t.toString)=="function"&&!Ll(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},t0=yc(),QA=wb,JA=Mb,eP=Object.defineProperty;Hh.f=ta?Object.defineProperty:function(e,n,r){if(t0(e),n=JA(n,!0),t0(r),QA)try{return eP(e,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[n]=r.value),e};var Eb=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},tP=Hh,nP=Eb,rP=ta?function(t,e,n){return tP.f(t,e,nP(1,n))}:function(t,e,n){return t[e]=n,t},iP={}.hasOwnProperty,jh=function(t,e){return iP.call(t,e)},Il=xc,qd=xr,n0=bb,aP=rP,oP=jh,Nl="prototype",Wt=function(t,e,n){var r=t&Wt.F,i=t&Wt.G,a=t&Wt.S,o=t&Wt.P,s=t&Wt.B,l=t&Wt.W,u=i?qd:qd[e]||(qd[e]={}),f=u[Nl],d=i?Il:a?Il[e]:(Il[e]||{})[Nl],c,p,x;i&&(n=e);for(c in n)p=!r&&d&&d[c]!==void 0,!(p&&oP(u,c))&&(x=p?d[c]:n[c],u[c]=i&&typeof d[c]!="function"?n[c]:s&&p?n0(x,Il):l&&d[c]==x?function(h){var m=function(g,v,y){if(this instanceof h){switch(arguments.length){case 0:return new h;case 1:return new h(g);case 2:return new h(g,v)}return new h(g,v,y)}return h.apply(this,arguments)};return m[Nl]=h[Nl],m}(x):o&&typeof x=="function"?n0(Function.call,x):x,o&&((u.virtual||(u.virtual={}))[c]=x,t&Wt.R&&f&&!f[c]&&aP(f,c,x)))};Wt.F=1;Wt.G=2;Wt.S=4;Wt.P=8;Wt.B=16;Wt.W=32;Wt.U=64;Wt.R=128;var na=Wt,Xd,r0;function sP(){if(r0)return Xd;r0=1;var t={}.toString;return Xd=function(e){return t.call(e).slice(8,-1)},Xd}var Yd,i0;function Cb(){if(i0)return Yd;i0=1;var t=sP();return Yd=Object("z").propertyIsEnumerable(0)?Object:function(e){return t(e)=="String"?e.split(""):Object(e)},Yd}var Tb=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},lP=Cb(),uP=Tb,bc=function(t){return lP(uP(t))},cP=Math.ceil,dP=Math.floor,Db=function(t){return isNaN(t=+t)?0:(t>0?dP:cP)(t)},fP=Db,pP=Math.min,hP=function(t){return t>0?pP(fP(t),9007199254740991):0},mP=Db,gP=Math.max,vP=Math.min,xP=function(t,e){return t=mP(t),t<0?gP(t+e,0):vP(t,e)},yP=bc,_P=hP,bP=xP,SP=function(t){return function(e,n,r){var i=yP(e),a=_P(i.length),o=bP(r,a),s;if(t&&n!=n){for(;a>o;)if(s=i[o++],s!=s)return!0}else for(;a>o;o++)if((t||o in i)&&i[o]===n)return t||o||0;return!t&&-1}},Ab={exports:{}},wP=xr,a0=xc,o0="__core-js_shared__",s0=a0[o0]||(a0[o0]={});(Ab.exports=function(t,e){return s0[t]||(s0[t]=e!==void 0?e:{})})("versions",[]).push({version:wP.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var MP=Ab.exports,EP=0,CP=Math.random(),TP=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++EP+CP).toString(36))},l0=MP("keys"),DP=TP,Pb=function(t){return l0[t]||(l0[t]=DP(t))},u0=jh,AP=bc,PP=SP(!1),RP=Pb("IE_PROTO"),LP=function(t,e){var n=AP(t),r=0,i=[],a;for(a in n)a!=RP&&u0(n,a)&&i.push(a);for(;e.length>r;)u0(n,a=e[r++])&&(~PP(i,a)||i.push(a));return i},Rb="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),IP=LP,NP=Rb,Sc=Object.keys||function(e){return IP(e,NP)},Kd,c0;function kP(){if(c0)return Kd;c0=1;var t=Hh,e=yc(),n=Sc;return Kd=ta?Object.defineProperties:function(i,a){e(i);for(var o=n(a),s=o.length,l=0,u;s>l;)t.f(i,u=o[l++],a[u]);return i},Kd}var Zd,d0;function OP(){if(d0)return Zd;d0=1;var t=xc.document;return Zd=t&&t.documentElement,Zd}var Qd,f0;function FP(){if(f0)return Qd;f0=1;var t=yc(),e=kP(),n=Rb,r=Pb("IE_PROTO"),i=function(){},a="prototype",o=function(){var s=Sb()("iframe"),l=n.length,u="<",f=">",d;for(s.style.display="none",OP().appendChild(s),s.src="javascript:",d=s.contentWindow.document,d.open(),d.write(u+"script"+f+"document.F=Object"+u+"/script"+f),d.close(),o=d.F;l--;)delete o[a][n[l]];return o()};return Qd=Object.create||function(l,u){var f;return l!==null?(i[a]=t(l),f=new i,i[a]=null,f[r]=l):f=o(),u===void 0?f:e(f,u)},Qd}var p0=na;p0(p0.S,"Object",{create:FP()});var zP=xr.Object,BP=function(e,n){return zP.create(e,n)};const UP=vr(BP);var Jd={},wc={};wc.f={}.propertyIsEnumerable;var h0;function GP(){if(h0)return Jd;h0=1;var t=wc,e=Eb,n=bc,r=Mb,i=jh,a=wb,o=Object.getOwnPropertyDescriptor;return Jd.f=ta?o:function(l,u){if(l=n(l),u=r(u,!0),a)try{return o(l,u)}catch{}if(i(l,u))return e(!t.f.call(l,u),l[u])},Jd}var ef,m0;function VP(){if(m0)return ef;m0=1;var t=js(),e=yc(),n=function(r,i){if(e(r),!t(i)&&i!==null)throw TypeError(i+": can't set as prototype!")};return ef={set:Object.setPrototypeOf||("__proto__"in{}?function(r,i,a){try{a=bb(Function.call,GP().f(Object.prototype,"__proto__").set,2),a(r,[]),i=!(r instanceof Array)}catch{i=!0}return function(s,l){return n(s,l),i?s.__proto__=l:a(s,l),s}}({},!1):void 0),check:n},ef}var g0=na;g0(g0.S,"Object",{setPrototypeOf:VP().set});var WP=xr.Object.setPrototypeOf;const v0=vr(WP);function Tp(t,e){return Tp=v0?v0.bind():function(n,r){return n.__proto__=r,n},Tp(t,e)}function Lb(t,e){t.prototype=UP(e.prototype),t.prototype.constructor=t,Tp(t,e)}var tf={},x0;function HP(){return x0||(x0=1,tf.f=Object.getOwnPropertySymbols),tf}var jP=Tb,Ib=function(t){return Object(jP(t))},nf,y0;function $P(){if(y0)return nf;y0=1;var t=ta,e=Sc,n=HP(),r=wc,i=Ib,a=Cb(),o=Object.assign;return nf=!o||_c(function(){var s={},l={},u=Symbol(),f="abcdefghijklmnopqrst";return s[u]=7,f.split("").forEach(function(d){l[d]=d}),o({},s)[u]!=7||Object.keys(o({},l)).join("")!=f})?function(l,u){for(var f=i(l),d=arguments.length,c=1,p=n.f,x=r.f;d>c;)for(var h=a(arguments[c++]),m=p?e(h).concat(p(h)):e(h),g=m.length,v=0,y;g>v;)y=m[v++],(!t||x.call(h,y))&&(f[y]=h[y]);return f}:o,nf}var rf=na;rf(rf.S+rf.F,"Object",{assign:$P()});var Nb=xr.Object.assign;const _0=vr(Nb);function Le(){return Le=_0?_0.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Le.apply(null,arguments)}function bs(t){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bs(t)}function qP(t,e){if(bs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(bs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function XP(t){var e=qP(t,"string");return bs(e)=="symbol"?e:e+""}function YP(t,e,n){return(e=XP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function S0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b0(Object(n),!0).forEach(function(r){YP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function on(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var w0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),M0=function(){return Math.random().toString(36).substring(7).split("").join(".")},E0={INIT:"@@redux/INIT"+M0(),REPLACE:"@@redux/REPLACE"+M0()};function KP(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function kb(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(on(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(on(1));return n(kb)(t,e)}if(typeof t!="function")throw new Error(on(2));var i=t,a=e,o=[],s=o,l=!1;function u(){s===o&&(s=o.slice())}function f(){if(l)throw new Error(on(3));return a}function d(h){if(typeof h!="function")throw new Error(on(4));if(l)throw new Error(on(5));var m=!0;return u(),s.push(h),function(){if(m){if(l)throw new Error(on(6));m=!1,u();var v=s.indexOf(h);s.splice(v,1),o=null}}}function c(h){if(!KP(h))throw new Error(on(7));if(typeof h.type>"u")throw new Error(on(8));if(l)throw new Error(on(9));try{l=!0,a=i(a,h)}finally{l=!1}for(var m=o=s,g=0;g<m.length;g++){var v=m[g];v()}return h}function p(h){if(typeof h!="function")throw new Error(on(10));i=h,c({type:E0.REPLACE})}function x(){var h,m=d;return h={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(on(11));function y(){v.next&&v.next(f())}y();var _=m(y);return{unsubscribe:_}}},h[w0]=function(){return this},h}return c({type:E0.INIT}),r={dispatch:c,subscribe:d,getState:f,replaceReducer:p},r[w0]=x,r}function C0(t,e){return function(){return e(t.apply(this,arguments))}}function T0(t,e){if(typeof t=="function")return C0(t,e);if(typeof t!="object"||t===null)throw new Error(on(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=C0(i,e))}return n}function Ob(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function ZP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(on(15))},o={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=e.map(function(l){return l(o)});return a=Ob.apply(void 0,s)(i.dispatch),S0(S0({},i),{},{dispatch:a})}}}var Fb=Ke.createContext(null);function QP(t){t()}var zb=QP,JP=function(e){return zb=e},eR=function(){return zb};function tR(){var t=eR(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],a=e;a;)i.push(a),a=a.next;return i},subscribe:function(i){var a=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!a||e===null||(a=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var D0={notify:function(){},get:function(){return[]}};function Bb(t,e){var n,r=D0;function i(d){return l(),r.subscribe(d)}function a(){r.notify()}function o(){f.onStateChange&&f.onStateChange()}function s(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=tR())}function u(){n&&(n(),n=void 0,r.clear(),r=D0)}var f={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:o,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:function(){return r}};return f}var Ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?se.useLayoutEffect:se.useEffect;function nR(t){var e=t.store,n=t.context,r=t.children,i=se.useMemo(function(){var s=Bb(e);return{store:e,subscription:s}},[e]),a=se.useMemo(function(){return e.getState()},[e]);Ub(function(){var s=i.subscription;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==e.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[i,a]);var o=n||Fb;return Ke.createElement(o.Provider,{value:i},r)}function ti(){return ti=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ti.apply(null,arguments)}function Pu(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var rR=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],iR=["reactReduxForwardedRef"],aR=[],oR=[null,null];function sR(t,e){var n=t[1];return[e.payload,n+1]}function A0(t,e,n){Ub(function(){return t.apply(void 0,e)},n)}function lR(t,e,n,r,i,a,o){t.current=r,e.current=i,n.current=!1,a.current&&(a.current=null,o())}function uR(t,e,n,r,i,a,o,s,l,u){if(t){var f=!1,d=null,c=function(){if(!f){var h=e.getState(),m,g;try{m=r(h,i.current)}catch(v){g=v,d=v}g||(d=null),m===a.current?o.current||l():(a.current=m,s.current=m,o.current=!0,u({type:"STORE_UPDATED",payload:{error:g}}))}};n.onStateChange=c,n.trySubscribe(),c();var p=function(){if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return p}}var cR=function(){return[null,0]};function dR(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(y){return"ConnectAdvanced("+y+")"}:r,a=n.methodName,o=a===void 0?"connectAdvanced":a,s=n.renderCountProp,l=s===void 0?void 0:s,u=n.shouldHandleStateChanges,f=u===void 0?!0:u,d=n.storeKey,c=d===void 0?"store":d;n.withRef;var p=n.forwardRef,x=p===void 0?!1:p,h=n.context,m=h===void 0?Fb:h,g=Pu(n,rR),v=m;return function(_){var S=_.displayName||_.name||"Component",M=i(S),A=ti({},g,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:f,storeKey:c,displayName:M,wrappedComponentName:S,WrappedComponent:_}),b=g.pure;function E(k){return t(k.dispatch,A)}var R=b?se.useMemo:function(k){return k()};function H(k){var $=se.useMemo(function(){var Ge=k.reactReduxForwardedRef,$e=Pu(k,iR);return[k.context,Ge,$e]},[k]),J=$[0],ee=$[1],N=$[2],q=se.useMemo(function(){return J&&J.Consumer&&Ph.isContextConsumer(Ke.createElement(J.Consumer,null))?J:v},[J,v]),G=se.useContext(q),le=!!k.store&&!!k.store.getState&&!!k.store.dispatch;G&&G.store;var P=le?k.store:G.store,F=se.useMemo(function(){return E(P)},[P]),V=se.useMemo(function(){if(!f)return oR;var Ge=Bb(P,le?null:G.subscription),$e=Ge.notifyNestedSubs.bind(Ge);return[Ge,$e]},[P,le,G]),I=V[0],L=V[1],ne=se.useMemo(function(){return le?G:ti({},G,{subscription:I})},[le,G,I]),j=se.useReducer(sR,aR,cR),ce=j[0],ae=ce[0],me=j[1];if(ae&&ae.error)throw ae.error;var fe=se.useRef(),Me=se.useRef(N),Be=se.useRef(),Ae=se.useRef(!1),Ue=R(function(){return Be.current&&N===Me.current?Be.current:F(P.getState(),N)},[P,ae,N]);A0(lR,[Me,fe,Ae,N,Ue,Be,L]),A0(uR,[f,P,I,F,Me,fe,Ae,Be,L,me],[P,I,F]);var Te=se.useMemo(function(){return Ke.createElement(_,ti({},Ue,{ref:ee}))},[ee,_,Ue]),Ne=se.useMemo(function(){return f?Ke.createElement(q.Provider,{value:ne},Te):Te},[q,Te,ne]);return Ne}var Y=b?Ke.memo(H):H;if(Y.WrappedComponent=_,Y.displayName=H.displayName=M,x){var z=Ke.forwardRef(function($,J){return Ke.createElement(Y,ti({},$,{reactReduxForwardedRef:J}))});return z.displayName=M,z.WrappedComponent=_,mp(z,_)}return mp(Y,_)}}function P0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function af(t,e){if(P0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!P0(t[n[i]],e[n[i]]))return!1;return!0}function fR(t,e){var n={},r=function(o){var s=t[o];typeof s=="function"&&(n[o]=function(){return e(s.apply(void 0,arguments))})};for(var i in t)r(i);return n}function $h(t){return function(n,r){var i=t(n,r);function a(){return i}return a.dependsOnOwnProps=!1,a}}function R0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function Gb(t,e){return function(r,i){i.displayName;var a=function(s,l){return a.dependsOnOwnProps?a.mapToProps(s,l):a.mapToProps(s)};return a.dependsOnOwnProps=!0,a.mapToProps=function(s,l){a.mapToProps=t,a.dependsOnOwnProps=R0(t);var u=a(s,l);return typeof u=="function"&&(a.mapToProps=u,a.dependsOnOwnProps=R0(u),u=a(s,l)),u},a}}function pR(t){return typeof t=="function"?Gb(t):void 0}function hR(t){return t?void 0:$h(function(e){return{dispatch:e}})}function mR(t){return t&&typeof t=="object"?$h(function(e){return fR(t,e)}):void 0}const gR=[pR,hR,mR];function vR(t){return typeof t=="function"?Gb(t):void 0}function xR(t){return t?void 0:$h(function(){return{}})}const yR=[vR,xR];function _R(t,e,n){return ti({},n,t,e)}function bR(t){return function(n,r){r.displayName;var i=r.pure,a=r.areMergedPropsEqual,o=!1,s;return function(u,f,d){var c=t(u,f,d);return o?(!i||!a(c,s))&&(s=c):(o=!0,s=c),s}}}function SR(t){return typeof t=="function"?bR(t):void 0}function wR(t){return t?void 0:function(){return _R}}const MR=[SR,wR];var ER=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function CR(t,e,n,r){return function(a,o){return n(t(a,o),e(r,o),o)}}function TR(t,e,n,r,i){var a=i.areStatesEqual,o=i.areOwnPropsEqual,s=i.areStatePropsEqual,l=!1,u,f,d,c,p;function x(y,_){return u=y,f=_,d=t(u,f),c=e(r,f),p=n(d,c,f),l=!0,p}function h(){return d=t(u,f),e.dependsOnOwnProps&&(c=e(r,f)),p=n(d,c,f),p}function m(){return t.dependsOnOwnProps&&(d=t(u,f)),e.dependsOnOwnProps&&(c=e(r,f)),p=n(d,c,f),p}function g(){var y=t(u,f),_=!s(y,d);return d=y,_&&(p=n(d,c,f)),p}function v(y,_){var S=!o(_,f),M=!a(y,u,_,f);return u=y,f=_,S&&M?h():S?m():M?g():p}return function(_,S){return l?v(_,S):x(_,S)}}function DR(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,a=Pu(e,ER),o=n(t,a),s=r(t,a),l=i(t,a),u=a.pure?TR:CR;return u(o,s,l,t,a)}var AR=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function of(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(a,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function PR(t,e){return t===e}function RR(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?dR:n,i=e.mapStateToPropsFactories,a=i===void 0?yR:i,o=e.mapDispatchToPropsFactories,s=o===void 0?gR:o,l=e.mergePropsFactories,u=l===void 0?MR:l,f=e.selectorFactory,d=f===void 0?DR:f;return function(p,x,h,m){m===void 0&&(m={});var g=m,v=g.pure,y=v===void 0?!0:v,_=g.areStatesEqual,S=_===void 0?PR:_,M=g.areOwnPropsEqual,A=M===void 0?af:M,b=g.areStatePropsEqual,E=b===void 0?af:b,R=g.areMergedPropsEqual,H=R===void 0?af:R,Y=Pu(g,AR),z=of(p,a,"mapStateToProps"),k=of(x,s,"mapDispatchToProps"),$=of(h,u,"mergeProps");return r(d,ti({methodName:"connect",getDisplayName:function(ee){return"Connect("+ee+")"},shouldHandleStateChanges:!!p,initMapStateToProps:z,initMapDispatchToProps:k,initMergeProps:$,pure:y,areStatesEqual:S,areOwnPropsEqual:A,areStatePropsEqual:E,areMergedPropsEqual:H},Y))}}const Vb=RR();JP(Dh.unstable_batchedUpdates);var LR="Invariant failed";function IR(t,e){throw new Error(LR)}var fr=function(e){var n=e.top,r=e.right,i=e.bottom,a=e.left,o=r-a,s=i-n,l={top:n,right:r,bottom:i,left:a,width:o,height:s,x:a,y:n,center:{x:(r+a)/2,y:(i+n)/2}};return l},qh=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},L0=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},NR=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},sf={top:0,right:0,bottom:0,left:0},Xh=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?sf:r,a=e.border,o=a===void 0?sf:a,s=e.padding,l=s===void 0?sf:s,u=fr(qh(n,i)),f=fr(L0(n,o)),d=fr(L0(f,l));return{marginBox:u,borderBox:fr(n),paddingBox:f,contentBox:d,margin:i,border:o,padding:l}},kn=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&IR(),i},kR=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Ru=function(e,n){var r=e.borderBox,i=e.border,a=e.margin,o=e.padding,s=NR(r,n);return Xh({borderBox:s,border:i,margin:a,padding:o})},Lu=function(e,n){return n===void 0&&(n=kR()),Ru(e,n)},Wb=function(e,n){var r={top:kn(n.marginTop),right:kn(n.marginRight),bottom:kn(n.marginBottom),left:kn(n.marginLeft)},i={top:kn(n.paddingTop),right:kn(n.paddingRight),bottom:kn(n.paddingBottom),left:kn(n.paddingLeft)},a={top:kn(n.borderTopWidth),right:kn(n.borderRightWidth),bottom:kn(n.borderBottomWidth),left:kn(n.borderLeftWidth)};return Xh({borderBox:e,margin:r,padding:i,border:a})},Hb=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return Wb(n,r)},I0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function OR(t,e){return!!(t===e||I0(t)&&I0(e))}function FR(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!OR(t[n],e[n]))return!1;return!0}function At(t,e){e===void 0&&(e=FR);var n,r=[],i,a=!1;function o(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return a&&n===this&&e(s,r)||(i=t.apply(this,s),a=!0,n=this,r=s),i}return o}var zR=ta,BR=Sc,UR=bc,GR=wc.f,VR=function(t){return function(e){for(var n=UR(e),r=BR(n),i=r.length,a=0,o=[],s;i>a;)s=r[a++],(!zR||GR.call(n,s))&&o.push(t?[s,n[s]]:n[s]);return o}},N0=na,WR=VR(!1);N0(N0.S,"Object",{values:function(e){return WR(e)}});var HR=xr.Object.values,jR=HR;const $R=vr(jR);var lf=na,qR=xr,XR=_c,YR=function(t,e){var n=(qR.Object||{})[t]||Object[t],r={};r[t]=e(n),lf(lf.S+lf.F*XR(function(){n(1)}),"Object",r)},KR=Ib,ZR=Sc;YR("keys",function(){return function(e){return ZR(KR(e))}});var QR=xr.Object.keys,JR=QR;const uf=vr(JR);var Ss=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];n=s,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i},k0=na;k0(k0.S,"Date",{now:function(){return new Date().getTime()}});var eL=xr.Date.now,tL=eL;const jb=vr(tL);var nL=Nb;const $b=vr(nL);var cf,O0;function rL(){if(O0)return cf;O0=1;var t=js(),e=Math.floor;return cf=function(r){return!t(r)&&isFinite(r)&&e(r)===r},cf}var F0=na;F0(F0.S,"Number",{isInteger:rL()});xr.Number.isInteger;function qb(t,e){}qb.bind(null,"warn");qb.bind(null,"error");function fi(){}function iL(t,e){return Le({},t,{},e)}function Gn(t,e,n){var r=e.map(function(i){var a=iL(n,i.options);return t.addEventListener(i.eventName,i.fn,a),function(){t.removeEventListener(i.eventName,i.fn,a)}});return function(){r.forEach(function(a){a()})}}var aL="Invariant failed";function Iu(t){this.message=t}Iu.prototype.toString=function(){return this.message};function de(t,e){throw new Iu(aL)}var oL=function(t){Lb(e,t);function e(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a))||this,r.callbacks=null,r.unbind=fi,r.onWindowError=function(s){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var u=s.error;u instanceof Iu&&s.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(s){r.callbacks=s},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Gn(window,[{eventName:"error",fn:this.onWindowError}])},n.componentWillUnmount=function(){this.unbind()},n.componentDidCatch=function(i){if(i instanceof Iu){this.setState({});return}throw i},n.render=function(){return this.props.children(this.setCallbacks)},e}(Ke.Component),sL="Draggable item. Ensure your screen reader is not in browse mode and then press space bar to lift.",Nu=function(e){return e+1},lL=function(e){return`
  You have lifted an item in position `+Nu(e.source.index)+`.
  Use the arrow keys to move, space bar to drop, and escape to cancel.
`},Xb=function(e,n){var r=e.droppableId===n.droppableId,i=Nu(e.index),a=Nu(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+a+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+a+`
  `},Yb=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},uL=function(e){var n=e.destination;if(n)return Xb(e.source,n);var r=e.combine;return r?Yb(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},z0=function(e){return`
  The item has returned to its starting position
  of `+Nu(e.index)+`
`},cL=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+z0(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+Xb(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+Yb(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+z0(e.source)+`
  `},tu={liftInstruction:sL,onDragStart:lL,onDragUpdate:uL,onDragEnd:cL},Pt={x:0,y:0},jt=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},un=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},pi=function(e,n){return e.x===n.x&&e.y===n.y},po=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},ro=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},ku=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},B0=function(e,n){return Math.min.apply(Math,n.map(function(r){return ku(e,r)}))},Kb=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},dL=function(t,e){var n=fr({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},Mc=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},U0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},fL={top:0,right:0,bottom:0,left:0},pL=function(e,n){return n?Mc(e,n.scroll.diff.displacement):e},hL=function(e,n,r){if(r&&r.increasedBy){var i;return Le({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},mL=function(e,n){return n&&n.shouldClipSubject?dL(n.pageMarginBox,e):fr(e)},io=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,a=pL(e.marginBox,i),o=hL(a,r,n),s=mL(o,i);return{page:e,withPlaceholder:n,active:s}},Yh=function(t,e){t.frame||de();var n=t.frame,r=un(e,n.scroll.initial),i=po(r),a=Le({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=io({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a}),s=Le({},t,{frame:a,subject:o});return s};function Ou(t){return $R(t)}function Kh(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Ur(t,e){if(t.find)return t.find(e);var n=Kh(t,e);if(n!==-1)return t[n]}function Zb(t){return Array.prototype.slice.call(t)}var Qb=At(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Jb=At(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Ec=At(function(t){return Ou(t)}),gL=At(function(t){return Ou(t)}),ho=At(function(t,e){var n=gL(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n}),eS={vertical:"down",horizontal:"right"},vL={vertical:"up",horizontal:"left"};function Zh(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function Cc(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Tc=At(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),xL=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,a=t.previousImpact;if(!r.isCombineEnabled)return null;var o=Zh(a);if(!o)return null;function s(h){var m={type:"COMBINE",whenEntered:e?eS:vL,combine:{draggableId:h,droppableId:r.descriptor.id}};return Le({},a,{at:m})}var l=a.displaced.all,u=l.length?l[0]:null;if(e)return u?s(u):null;var f=Tc(n,i);if(!u){if(!f.length)return null;var d=f[f.length-1];return s(d.descriptor.id)}var c=Kh(f,function(h){return h.descriptor.id===u});c===-1&&de();var p=c-1;if(p<0)return null;var x=f[p];return s(x.descriptor.id)},mo=function(t,e){return t.descriptor.droppableId===e.descriptor.id},tS={point:Pt,value:0},ws={invisible:{},visible:{},all:[]},yL={displaced:ws,displacedBy:tS,at:null},Cn=function(t,e){return function(n){return t<=n&&n<=e}},nS=function(t){var e=Cn(t.top,t.bottom),n=Cn(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var a=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),s=a&&o;if(s)return!0;var l=r.top<t.top&&r.bottom>t.bottom,u=r.left<t.left&&r.right>t.right,f=l&&u;if(f)return!0;var d=l&&o||u&&a;return d}},_L=function(t){var e=Cn(t.top,t.bottom),n=Cn(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},Dc={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},rS={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},bL=function(t){return function(e){var n=Cn(e.top,e.bottom),r=Cn(e.left,e.right);return function(i){return t===Dc?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},SL=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:Pt;return Mc(e,r)},wL=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},ML=function(e,n,r){return r(n)(e)},Qh=function(e){var n=e.target,r=e.destination,i=e.viewport,a=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,s=a?SL(n,r):n;return wL(s,r,o)&&ML(s,i,o)},EL=function(e){return Qh(Le({},e,{isVisibleThroughFrameFn:nS}))},iS=function(e){return Qh(Le({},e,{isVisibleThroughFrameFn:_L}))},CL=function(e){return Qh(Le({},e,{isVisibleThroughFrameFn:bL(e.destination.axis)}))},TL=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,a=n.visible;if(i[e])return!1;var o=a[e];return o?o.shouldAnimate:!0};function DL(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return fr(qh(n,r))}function Ms(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,a=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,u){var f=DL(u,r),d=u.descriptor.id;l.all.push(d);var c=EL({target:f,destination:n,viewport:i,withDroppableDisplacement:!0});if(!c)return l.invisible[u.descriptor.id]=!0,l;var p=TL(d,o,a),x={draggableId:d,shouldAnimate:p};return l.visible[d]=x,l},{all:[],visible:{},invisible:{}})}function AL(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function G0(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,a=AL(e,{inHomeList:n});return{displaced:ws,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:a}}}}function Fu(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,a=t.displacedBy,o=t.last,s=t.index,l=t.forceShouldAnimate,u=mo(e,r);if(s==null)return G0({insideDestination:n,inHomeList:u,displacedBy:a,destination:r});var f=Ur(n,function(h){return h.descriptor.index===s});if(!f)return G0({insideDestination:n,inHomeList:u,displacedBy:a,destination:r});var d=Tc(e,n),c=n.indexOf(f),p=d.slice(c),x=Ms({afterDragging:p,destination:r,displacedBy:a,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:x,displacedBy:a,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:s}}}}function Qi(t,e){return!!e.effected[t]}var PL=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,a=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,s=r[o],l=s.descriptor.index,u=Qi(o,a);return u?e?l:l-1:e?l+1:l},RL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var a=i.index,o=e?a+1:a-1,s=r[0].descriptor.index,l=r[r.length-1].descriptor.index,u=n?l:l+1;return o<s||o>u?null:o},LL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,a=t.destination,o=t.insideDestination,s=t.previousImpact,l=t.viewport,u=t.afterCritical,f=s.at;if(f||de(),f.type==="REORDER"){var d=RL({isMovingForward:e,isInHomeList:n,location:f.destination,insideDestination:o});return d==null?null:Fu({draggable:r,insideDestination:o,destination:a,viewport:l,last:s.displaced,displacedBy:s.displacedBy,index:d})}var c=PL({isMovingForward:e,destination:a,displaced:s.displaced,draggables:i,combine:f.combine,afterCritical:u});return c==null?null:Fu({draggable:r,insideDestination:o,destination:a,viewport:l,last:s.displaced,displacedBy:s.displacedBy,index:c})},aS=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,a=!!(e.visible[r]||e.invisible[r]);return Qi(r,n)?a?Pt:po(i.point):a?i.point:Pt},IL=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=Cc(n);i||de();var a=i.draggableId,o=r[a].page.borderBox.center,s=aS({displaced:n.displaced,afterCritical:e,combineWith:a,displacedBy:n.displacedBy});return jt(o,s)},oS=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},NL=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Jh=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},V0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return ro(n.line,r.marginBox[n.end]+oS(n,i),Jh(n,r.marginBox,i))},W0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return ro(n.line,r.marginBox[n.start]-NL(n,i),Jh(n,r.marginBox,i))},kL=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return ro(n.line,r.contentBox[n.start]+oS(n,i),Jh(n,r.contentBox,i))},OL=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,a=t.afterCritical,o=ho(i.descriptor.id,r),s=n.page,l=i.axis;if(!o.length)return kL({axis:l,moveInto:i.page,isMoving:s});var u=e.displaced,f=e.displacedBy,d=u.all[0];if(d){var c=r[d];if(Qi(d,a))return W0({axis:l,moveRelativeTo:c.page,isMoving:s});var p=Ru(c.page,f.point);return W0({axis:l,moveRelativeTo:p,isMoving:s})}var x=o[o.length-1];if(x.descriptor.id===n.descriptor.id)return s.borderBox.center;if(Qi(x.descriptor.id,a)){var h=Ru(x.page,po(a.displacedBy.point));return V0({axis:l,moveRelativeTo:h,isMoving:s})}return V0({axis:l,moveRelativeTo:x.page,isMoving:s})},Dp=function(t,e){var n=t.frame;return n?jt(e,n.scroll.diff.displacement):e},FL=function(e){var n=e.impact,r=e.draggable,i=e.droppable,a=e.draggables,o=e.afterCritical,s=r.page.borderBox.center,l=n.at;return!i||!l?s:l.type==="REORDER"?OL({impact:n,draggable:r,draggables:a,droppable:i,afterCritical:o}):IL({impact:n,draggables:a,afterCritical:o})},Ac=function(t){var e=FL(t),n=t.droppable,r=n?Dp(n,e):e;return r},sS=function(t,e){var n=un(e,t.scroll.initial),r=po(n),i=fr({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),a={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return a};function H0(t,e){return t.map(function(n){return e[n]})}function zL(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var BL=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,a=t.maxScrollChange,o=sS(n,jt(n.scroll.current,a)),s=r.frame?Yh(r,jt(r.frame.scroll.current,a)):r,l=e.displaced,u=Ms({afterDragging:H0(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),f=Ms({afterDragging:H0(l.all,i),destination:s,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},c={},p=[l,u,f];l.all.forEach(function(h){var m=zL(h,p);if(m){c[h]=m;return}d[h]=!0});var x=Le({},e,{displaced:{all:l.all,invisible:d,visible:c}});return x},UL=function(t,e){return jt(t.scroll.diff.displacement,e)},em=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=UL(r,e),a=un(i,n.page.borderBox.center);return jt(n.client.borderBox.center,a)},lS=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,a=t.withDroppableDisplacement,o=t.onlyOnMainAxis,s=o===void 0?!1:o,l=un(r,e.page.borderBox.center),u=Mc(e.page.borderBox,l),f={target:u,destination:n,withDroppableDisplacement:a,viewport:i};return s?CL(f):iS(f)},GL=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,a=t.previousImpact,o=t.viewport,s=t.previousPageBorderBoxCenter,l=t.previousClientSelection,u=t.afterCritical;if(!r.isEnabled)return null;var f=ho(r.descriptor.id,i),d=mo(n,r),c=xL({isMovingForward:e,draggable:n,destination:r,insideDestination:f,previousImpact:a})||LL({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:f,previousImpact:a,viewport:o,afterCritical:u});if(!c)return null;var p=Ac({impact:c,draggable:n,droppable:r,draggables:i,afterCritical:u}),x=lS({draggable:n,destination:r,newPageBorderBoxCenter:p,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(x){var h=em({pageBorderBoxCenter:p,draggable:n,viewport:o});return{clientSelection:h,impact:c,scrollJumpRequest:null}}var m=un(p,s),g=BL({impact:c,viewport:o,destination:r,draggables:i,maxScrollChange:m});return{clientSelection:l,impact:g,scrollJumpRequest:m}},Kt=function(e){var n=e.subject.active;return n||de(),n},VL=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,a=t.viewport,o=r.subject.active;if(!o)return null;var s=r.axis,l=Cn(o[s.start],o[s.end]),u=Ec(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return nS(a.frame)(Kt(d))}).filter(function(d){var c=Kt(d);return e?o[s.crossAxisEnd]<c[s.crossAxisEnd]:c[s.crossAxisStart]<o[s.crossAxisStart]}).filter(function(d){var c=Kt(d),p=Cn(c[s.start],c[s.end]);return l(c[s.start])||l(c[s.end])||p(o[s.start])||p(o[s.end])}).sort(function(d,c){var p=Kt(d)[s.crossAxisStart],x=Kt(c)[s.crossAxisStart];return e?p-x:x-p}).filter(function(d,c,p){return Kt(d)[s.crossAxisStart]===Kt(p[0])[s.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var f=u.filter(function(d){var c=Cn(Kt(d)[s.start],Kt(d)[s.end]);return c(n[s.line])});return f.length===1?f[0]:f.length>1?f.sort(function(d,c){return Kt(d)[s.start]-Kt(c)[s.start]})[0]:u.sort(function(d,c){var p=B0(n,U0(Kt(d))),x=B0(n,U0(Kt(c)));return p!==x?p-x:Kt(d)[s.start]-Kt(c)[s.start]})[0]},j0=function(e,n){var r=e.page.borderBox.center;return Qi(e.descriptor.id,n)?un(r,n.displacedBy.point):r},WL=function(e,n){var r=e.page.borderBox;return Qi(e.descriptor.id,n)?Mc(r,po(n.displacedBy.point)):r},HL=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,a=t.afterCritical,o=i.filter(function(s){return iS({target:WL(s,a),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(s,l){var u=ku(e,Dp(r,j0(s,a))),f=ku(e,Dp(r,j0(l,a)));return u<f?-1:f<u?1:s.descriptor.index-l.descriptor.index});return o[0]||null},$s=At(function(e,n){var r=n[e.line];return{value:r,point:ro(e.line,r)}}),jL=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return ro(i.line,n[i.line]);var a=e.subject.page.contentBox[i.size],o=ho(e.descriptor.id,r),s=o.reduce(function(f,d){return f+d.client.marginBox[i.size]},0),l=s+n[i.line],u=l-a;return u<=0?null:ro(i.line,u)},uS=function(e,n){return Le({},e,{scroll:Le({},e.scroll,{max:n})})},cS=function(e,n,r){var i=e.frame;mo(n,e)&&de(),e.subject.withPlaceholder&&de();var a=$s(e.axis,n.displaceBy).point,o=jL(e,a,r),s={placeholderSize:a,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=io({page:e.subject.page,withPlaceholder:s,axis:e.axis,frame:e.frame});return Le({},e,{subject:l})}var u=o?jt(i.scroll.max,o):i.scroll.max,f=uS(i,u),d=io({page:e.subject.page,withPlaceholder:s,axis:e.axis,frame:f});return Le({},e,{subject:d,frame:f})},$L=function(e){var n=e.subject.withPlaceholder;n||de();var r=e.frame;if(!r){var i=io({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Le({},e,{subject:i})}var a=n.oldFrameMaxScroll;a||de();var o=uS(r,a),s=io({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return Le({},e,{subject:s,frame:o})},qL=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,a=t.draggables,o=t.destination,s=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var u={displaced:ws,displacedBy:tS,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},f=Ac({impact:u,draggable:i,droppable:o,draggables:a,afterCritical:l}),d=mo(i,o)?o:cS(o,i,a),c=lS({draggable:i,destination:d,newPageBorderBoxCenter:f,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return c?u:null}var p=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],x=function(){var m=n.descriptor.index;return n.descriptor.id===i.descriptor.id||p?m:m+1}(),h=$s(o.axis,i.displaceBy);return Fu({draggable:i,insideDestination:r,destination:o,viewport:s,displacedBy:h,last:ws,index:x})},XL=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,a=t.draggables,o=t.droppables,s=t.viewport,l=t.afterCritical,u=VL({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:s});if(!u)return null;var f=ho(u.descriptor.id,a),d=HL({pageBorderBoxCenter:n,viewport:s,destination:u,insideDestination:f,afterCritical:l}),c=qL({previousPageBorderBoxCenter:n,destination:u,draggable:r,draggables:a,moveRelativeTo:d,insideDestination:f,viewport:s,afterCritical:l});if(!c)return null;var p=Ac({impact:c,draggable:r,droppable:u,draggables:a,afterCritical:l}),x=em({pageBorderBoxCenter:p,draggable:r,viewport:s});return{clientSelection:x,impact:c,scrollJumpRequest:null}},Tn=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},YL=function(e,n){var r=Tn(e);return r?n[r]:null},KL=function(t){var e=t.state,n=t.type,r=YL(e.impact,e.dimensions.droppables),i=!!r,a=e.dimensions.droppables[e.critical.droppable.id],o=r||a,s=o.axis.direction,l=s==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||s==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var u=n==="MOVE_DOWN"||n==="MOVE_RIGHT",f=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,c=e.dimensions,p=c.draggables,x=c.droppables;return l?GL({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,destination:o,draggables:p,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):XL({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,isOver:o,draggables:p,droppables:x,viewport:e.viewport,afterCritical:e.afterCritical})};function Ii(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}var dS=function(t){var e=Cn(t.top,t.bottom),n=Cn(t.left,t.right);return function(r){return e(r.y)&&e(r.y)&&n(r.x)&&n(r.x)}},ZL=function(t){var e=t.target,n=t.droppables,r=Ur(Ec(n),function(i){if(!i.isEnabled)return!1;var a=i.subject.active;return a?dS(a)(e):!1});return r?r.descriptor.id:null},QL=function(t,e){var n=t.frame;return n?jt(e,n.scroll.diff.value):e},fS=function(t,e){return t===Dc?e.vertical==="down":e.horizontal==="right"};function JL(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var eI=function(t){var e=t.pageBorderBoxCenterWithDroppableScrollChange,n=t.draggable,r=t.destination,i=t.insideDestination,a=t.last,o=t.viewport,s=t.userDirection,l=t.afterCritical,u=r.axis,f=fS(r.axis,s),d=$s(r.axis,n.displaceBy),c=e[u.line],p=d.value,x=Tc(n,i),h=Ur(x,function(g){var v=g.descriptor.id,y=g.page.borderBox,_=y[u.start],S=y[u.end],M=Qi(v,l);return f?M?c<_:c<_+p:M?c<=S-p:c<=S}),m=JL({draggable:n,closest:h,inHomeList:mo(n,r)});return Fu({draggable:n,insideDestination:i,destination:r,viewport:o,last:a,displacedBy:d,index:m})};function tI(t,e,n){return!n||t!==n.combine.draggableId?e:n.whenEntered}function nI(t){return t.at&&t.at.type==="COMBINE"?t.at:null}function rI(t){var e=t.combineWithId,n=t.destinationId,r=t.userDirection,i=t.previousImpact,a=nI(i),o=tI(e,r,a),s={displacedBy:i.displacedBy,displaced:i.displaced,at:{type:"COMBINE",whenEntered:o,combine:{draggableId:e,droppableId:n}}};return s}function iI(t,e,n){return!n||t!==n.combine.draggableId?e:n.whenEntered}var aI=function(e){var n=e.id,r=e.currentCenter,i=e.axis,a=e.borderBox,o=e.displaceBy,s=e.currentUserDirection,l=e.lastCombineImpact,u=a[i.start]+o[i.line],f=a[i.end]+o[i.line],d=a[i.size],c=d*.666,p=iI(n,s,l),x=fS(i,p),h=r[i.line];return x?Cn(u,u+c)(h):Cn(f-c,f)(h)};function oI(t){return t.at&&t.at.type==="COMBINE"?t.at:null}var sI=function(t){var e=t.draggable,n=t.pageBorderBoxCenterWithDroppableScrollChange,r=t.previousImpact,i=t.destination,a=t.insideDestination,o=t.userDirection,s=t.afterCritical;if(!i.isCombineEnabled)return null;var l=i.axis,u=r.displaced,f=$s(i.axis,e.displaceBy),d=oI(r),c=Ur(Tc(e,a),function(p){var x=p.descriptor.id,h=aS({displaced:u,afterCritical:s,combineWith:x,displacedBy:f});return aI({id:x,currentCenter:n,axis:l,borderBox:p.page.borderBox,displaceBy:h,currentUserDirection:o,lastCombineImpact:d})});return c?rI({combineWithId:c.descriptor.id,destinationId:i.descriptor.id,previousImpact:r,userDirection:o}):null},pS=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.draggables,i=t.droppables,a=t.previousImpact,o=t.viewport,s=t.userDirection,l=t.afterCritical,u=ZL({target:e,droppables:i});if(!u)return yL;var f=i[u],d=ho(f.descriptor.id,r),c=QL(f,e);return sI({pageBorderBoxCenterWithDroppableScrollChange:c,draggable:n,previousImpact:a,destination:f,insideDestination:d,userDirection:s,afterCritical:l})||eI({pageBorderBoxCenterWithDroppableScrollChange:c,draggable:n,destination:f,insideDestination:d,last:a.displaced,viewport:o,userDirection:s,afterCritical:l})},lI=function(e,n){return n===0?e:n>0?"down":"up"},uI=function(e,n){return n===0?e:n>0?"right":"left"},cI=function(t,e,n){var r=un(n,e);return{horizontal:uI(t.horizontal,r.x),vertical:lI(t.vertical,r.y)}},tm=function(t,e){var n;return Le({},t,(n={},n[e.descriptor.id]=e,n))},dI=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,a=Tn(n),o=Tn(r);if(!a||a===o)return i;var s=i[a];if(!s.subject.withPlaceholder)return i;var l=$L(s);return tm(i,l)},fI=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,a=t.impact,o=dI({previousImpact:i,impact:a,droppables:r}),s=Tn(a);if(!s)return o;var l=r[s];if(mo(e,l)||l.subject.withPlaceholder)return o;var u=cS(l,e,n);return tm(o,u)},Qo=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,a=t.impact,o=t.scrollJumpRequest,s=i||e.viewport,l=s.scroll.current,u=r||e.dimensions,f=n||e.current.client.selection,d=un(f,e.initial.client.selection),c={offset:d,selection:f,borderBoxCenter:jt(e.initial.client.borderBoxCenter,d)},p={selection:jt(c.selection,l),borderBoxCenter:jt(c.borderBoxCenter,l)},x={client:c,page:p},h=cI(e.userDirection,e.current.page.borderBoxCenter,x.page.borderBoxCenter);if(e.phase==="COLLECTING")return Le({phase:"COLLECTING"},e,{dimensions:u,viewport:s,current:x,userDirection:h});var m=u.draggables[e.critical.draggable.id],g=a||pS({pageBorderBoxCenter:p.borderBoxCenter,draggable:m,draggables:u.draggables,droppables:u.droppables,previousImpact:e.impact,viewport:s,userDirection:h,afterCritical:e.afterCritical}),v=fI({draggable:m,impact:g,previousImpact:e.impact,draggables:u.draggables,droppables:u.droppables}),y=Le({},e,{current:x,userDirection:h,dimensions:{draggables:u.draggables,droppables:v},impact:g,viewport:s,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return y};function pI(t,e){return t.map(function(n){return e[n]})}var hS=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,a=t.forceShouldAnimate,o=e.displaced,s=pI(o.all,r),l=Ms({afterDragging:s,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:a,last:o});return Le({},e,{displaced:l})},mS=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,a=t.viewport,o=t.afterCritical,s=Ac({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return em({pageBorderBoxCenter:s,draggable:n,viewport:a})},gS=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&de();var i=e.impact,a=r||e.viewport,o=n||e.dimensions,s=o.draggables,l=o.droppables,u=s[e.critical.draggable.id],f=Tn(i);f||de();var d=l[f],c=hS({impact:i,viewport:a,destination:d,draggables:s}),p=mS({impact:c,draggable:u,droppable:d,draggables:s,viewport:a,afterCritical:e.afterCritical});return Qo({impact:c,clientSelection:p,state:e,dimensions:o,viewport:a})},hI=function(t){return{index:t.index,droppableId:t.droppableId}},vS=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,a=$s(n.axis,e.displaceBy),o=ho(n.descriptor.id,r),s=o.indexOf(e);s===-1&&de();var l=o.slice(s+1),u=l.reduce(function(p,x){return p[x.descriptor.id]=!0,p},{}),f={inVirtualList:n.descriptor.mode==="virtual",displacedBy:a,effected:u},d=Ms({afterDragging:l,destination:n,displacedBy:a,last:null,viewport:i.frame,forceShouldAnimate:!1}),c={displaced:d,displacedBy:a,at:{type:"REORDER",destination:hI(e.descriptor)}};return{impact:c,afterCritical:f}},mI=function(t,e){return{draggables:t.draggables,droppables:tm(t.droppables,e)}},gI=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=Ru(e.client,n),a=Lu(i,r),o=Le({},e,{placeholder:Le({},e.placeholder,{client:i}),client:i,page:a});return o},vI=function(t){var e=t.frame;return e||de(),e},xI=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(a){var o=a.descriptor.droppableId,s=n[o],l=vI(s),u=l.scroll.diff.value,f=jt(i,u),d=gI({draggable:a,offset:f,initialWindowScroll:r.scroll.initial});return d})},yI=function(t){var e,n,r=t.state,i=t.published,a=i.modified.map(function(S){var M=r.dimensions.droppables[S.droppableId],A=Yh(M,S.scroll);return A}),o=Le({},r.dimensions.droppables,{},Qb(a)),s=Jb(xI({additions:i.additions,updatedDroppables:o,viewport:r.viewport})),l=Le({},r.dimensions.draggables,{},s);i.removals.forEach(function(S){delete l[S]});var u={droppables:o,draggables:l},f=Tn(r.impact),d=f?u.droppables[f]:null,c=u.draggables[r.critical.draggable.id],p=u.droppables[r.critical.droppable.id],x=vS({draggable:c,home:p,draggables:l,viewport:r.viewport}),h=x.impact,m=x.afterCritical,g=d&&d.isCombineEnabled?r.impact:h,v=pS({pageBorderBoxCenter:r.current.page.borderBoxCenter,draggable:u.draggables[r.critical.draggable.id],draggables:u.draggables,droppables:u.droppables,previousImpact:g,viewport:r.viewport,userDirection:r.userDirection,afterCritical:m}),y=Le({phase:"DRAGGING"},r,(e={},e.phase="DRAGGING",e.impact=v,e.onLiftImpact=h,e.dimensions=u,e.afterCritical=m,e.forceShouldAnimate=!1,e));if(r.phase==="COLLECTING")return y;var _=Le({phase:"DROP_PENDING"},y,(n={},n.phase="DROP_PENDING",n.reason=r.reason,n.isWaiting=!1,n));return _},Ap=function(e){return e.movementMode==="SNAP"},df=function(e,n,r){var i=mI(e.dimensions,n);return!Ap(e)||r?Qo({state:e,dimensions:i}):gS({state:e,dimensions:i})};function ff(t){return t.isDragging&&t.movementMode==="SNAP"?Le({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var $0={phase:"IDLE",completed:null,shouldFlush:!1},_I=function(t,e){if(t===void 0&&(t=$0),e.type==="FLUSH")return Le({},$0,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&de();var n=e.payload,r=n.critical,i=n.clientSelection,a=n.viewport,o=n.dimensions,s=n.movementMode,l=o.draggables[r.draggable.id],u=o.droppables[r.droppable.id],f={selection:i,borderBoxCenter:l.client.borderBox.center,offset:Pt},d={client:f,page:{selection:jt(f.selection,a.scroll.initial),borderBoxCenter:jt(f.selection,a.scroll.initial)}},c=Ec(o.droppables).every(function(Me){return!Me.isFixedOnPage}),p=vS({draggable:l,home:u,draggables:o.draggables,viewport:a}),x=p.impact,h=p.afterCritical,m={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:s,dimensions:o,initial:d,current:d,isWindowScrollAllowed:c,impact:x,afterCritical:h,onLiftImpact:x,viewport:a,userDirection:eS,scrollJumpRequest:null,forceShouldAnimate:null};return m}if(e.type==="COLLECTION_STARTING"){var g;if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&de();var v=Le({phase:"COLLECTING"},t,(g={},g.phase="COLLECTING",g));return v}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||de(),yI({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Ii(t)||de();var y=e.payload.client;return pi(y,t.current.client.selection)?t:Qo({state:t,clientSelection:y,impact:Ap(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return ff(t);Ii(t)||de();var _=e.payload,S=_.id,M=_.newScroll,A=t.dimensions.droppables[S];if(!A)return t;var b=Yh(A,M);return df(t,b,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ii(t)||de();var E=e.payload,R=E.id,H=E.isEnabled,Y=t.dimensions.droppables[R];Y||de(),Y.isEnabled===H&&de();var z=Le({},Y,{isEnabled:H});return df(t,z,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ii(t)||de();var k=e.payload,$=k.id,J=k.isCombineEnabled,ee=t.dimensions.droppables[$];ee||de(),ee.isCombineEnabled===J&&de();var N=Le({},ee,{isCombineEnabled:J});return df(t,N,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Ii(t)||de(),t.isWindowScrollAllowed||de();var q=e.payload.newScroll;if(pi(t.viewport.scroll.current,q))return ff(t);var G=sS(t.viewport,q);return Ap(t)?gS({state:t,viewport:G}):Qo({state:t,viewport:G})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Ii(t))return t;var le=e.payload.maxScroll;if(pi(le,t.viewport.scroll.max))return t;var P=Le({},t.viewport,{scroll:Le({},t.viewport.scroll,{max:le})});return Le({phase:"DRAGGING"},t,{viewport:P})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&de();var F=KL({state:t,type:e.type});return F?Qo({state:t,impact:F.impact,clientSelection:F.clientSelection,scrollJumpRequest:F.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var V,I=e.payload.reason;t.phase!=="COLLECTING"&&de();var L=Le({phase:"DROP_PENDING"},t,(V={},V.phase="DROP_PENDING",V.isWaiting=!0,V.reason=I,V));return L}if(e.type==="DROP_ANIMATE"){var ne=e.payload,j=ne.completed,ce=ne.dropDuration,ae=ne.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||de();var me={phase:"DROP_ANIMATING",completed:j,dropDuration:ce,newHomeClientOffset:ae,dimensions:t.dimensions};return me}if(e.type==="DROP_COMPLETE"){var fe=e.payload.completed;return{phase:"IDLE",completed:fe,shouldFlush:!1}}return t},bI=function(e){return{type:"LIFT",payload:e}},SI=function(e){return{type:"INITIAL_PUBLISH",payload:e}},wI=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},MI=function(){return{type:"COLLECTION_STARTING",payload:null}},EI=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},CI=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},TI=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},xS=function(e){return{type:"MOVE",payload:e}},DI=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},AI=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},PI=function(){return{type:"MOVE_UP",payload:null}},RI=function(){return{type:"MOVE_DOWN",payload:null}},LI=function(){return{type:"MOVE_RIGHT",payload:null}},II=function(){return{type:"MOVE_LEFT",payload:null}},yS=function(){return{type:"FLUSH",payload:null}},NI=function(e){return{type:"DROP_ANIMATE",payload:e}},nm=function(e){return{type:"DROP_COMPLETE",payload:e}},_S=function(e){return{type:"DROP",payload:e}},kI=function(e){return{type:"DROP_PENDING",payload:e}},bS=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},OI=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(a){if(a.type!=="LIFT"){i(a);return}var o=a.payload,s=o.id,l=o.clientSelection,u=o.movementMode,f=n();f.phase==="DROP_ANIMATING"&&r(nm({completed:f.completed})),n().phase!=="IDLE"&&de(),r(yS());var d={shouldPublishImmediately:u==="SNAP"},c={draggableId:s,scrollOptions:d},p=t.startPublishing(c),x=p.critical,h=p.dimensions,m=p.viewport;r(SI({critical:x,dimensions:h,clientSelection:l,movementMode:u,viewport:m}))}}}},FI=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},rm={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Es={opacity:{drop:0,combining:.7},scale:{drop:.75}},im={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Di=im.outOfTheWay+"s "+rm.outOfTheWay,Jo={fluid:"opacity "+Di,snap:"transform "+Di+", opacity "+Di,drop:function(e){var n=e+"s "+rm.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Di,placeholder:"height "+Di+", width "+Di+", margin "+Di},q0=function(e){return pi(e,Pt)?null:"translate("+e.x+"px, "+e.y+"px)"},Pp={moveTo:q0,drop:function(e,n){var r=q0(e);return r?n?r+" scale("+Es.scale.drop+")":r:null}},Rp=im.minDropTime,SS=im.maxDropTime,zI=SS-Rp,X0=1500,BI=.6,UI=function(t){var e=t.current,n=t.destination,r=t.reason,i=ku(e,n);if(i<=0)return Rp;if(i>=X0)return SS;var a=i/X0,o=Rp+zI*a,s=r==="CANCEL"?o*BI:o;return Number(s.toFixed(2))},GI=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,a=t.afterCritical,o=r.draggables,s=r.droppables,l=Tn(e),u=l?s[l]:null,f=s[n.descriptor.droppableId],d=mS({impact:e,draggable:n,draggables:o,afterCritical:a,droppable:u||f,viewport:i}),c=un(d,n.client.borderBox.center);return c},VI=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,a=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var s=hS({draggables:e,impact:o,destination:i,viewport:a,forceShouldAnimate:!0});return{impact:s,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=Le({},r,{displaced:ws});return{impact:l,didDropInsideDroppable:!0}},WI=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var a=e(),o=i.payload.reason;if(a.phase==="COLLECTING"){n(kI({reason:o}));return}if(a.phase!=="IDLE"){var s=a.phase==="DROP_PENDING"&&a.isWaiting;s&&de(),a.phase==="DRAGGING"||a.phase==="DROP_PENDING"||de();var l=a.critical,u=a.dimensions,f=u.draggables[a.critical.draggable.id],d=VI({reason:o,lastImpact:a.impact,afterCritical:a.afterCritical,onLiftImpact:a.onLiftImpact,home:a.dimensions.droppables[a.critical.droppable.id],viewport:a.viewport,draggables:a.dimensions.draggables}),c=d.impact,p=d.didDropInsideDroppable,x=p?Zh(c):null,h=p?Cc(c):null,m={index:l.draggable.index,droppableId:l.droppable.id},g={draggableId:f.descriptor.id,type:f.descriptor.type,source:m,reason:o,mode:a.movementMode,destination:x,combine:h},v=GI({impact:c,draggable:f,dimensions:u,viewport:a.viewport,afterCritical:a.afterCritical}),y={critical:a.critical,afterCritical:a.afterCritical,result:g,impact:c},_=!pi(a.current.client.offset,v)||!!g.combine;if(!_){n(nm({completed:y}));return}var S=UI({current:a.current.client.offset,destination:v,reason:o}),M={newHomeClientOffset:v,dropDuration:S,completed:y};n(NI(M))}}}},wS=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function HI(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function jI(t){var e=t.onWindowScroll;function n(){e(wS())}var r=Ss(n),i=HI(r),a=fi;function o(){return a!==fi}function s(){o()&&de(),a=Gn(window,[i])}function l(){o()||de(),r.cancel(),a(),a=fi}return{start:s,stop:l,isActive:o}}var $I=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},qI=function(t){var e=jI({onWindowScroll:function(r){t.dispatch(DI({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&$I(r)&&e.stop(),n(r)}}},XI=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},YI=function(){var t=[],e=function(a){var o=Kh(t,function(u){return u.timerId===a});o===-1&&de();var s=t.splice(o,1),l=s[0];l.callback()},n=function(a){var o=setTimeout(function(){return e(o)}),s={timerId:o,callback:a};t.push(s)},r=function(){if(t.length){var a=[].concat(t);t.length=0,a.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},KI=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},ZI=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},QI=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},kl=function(e,n){n()},Ol=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},pf=function(e,n,r,i){if(!e){r(i(n));return}var a=XI(r),o={announce:a};e(n,o),a.wasCalled()||r(i(n))},JI=function(t,e){var n=YI(),r=null,i=function(d,c){r&&de(),kl("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p(Ol(d,c))})},a=function(d,c){r&&de();var p=Ol(d,c);r={mode:c,lastCritical:d,lastLocation:p.source,lastCombine:null},n.add(function(){kl("onDragStart",function(){return pf(t().onDragStart,p,e,tu.onDragStart)})})},o=function(d,c){var p=Zh(c),x=Cc(c);r||de();var h=!QI(d,r.lastCritical);h&&(r.lastCritical=d);var m=!KI(r.lastLocation,p);m&&(r.lastLocation=p);var g=!ZI(r.lastCombine,x);if(g&&(r.lastCombine=x),!(!h&&!m&&!g)){var v=Le({},Ol(d,r.mode),{combine:x,destination:p});n.add(function(){kl("onDragUpdate",function(){return pf(t().onDragUpdate,v,e,tu.onDragUpdate)})})}},s=function(){r||de(),n.flush()},l=function(d){r||de(),r=null,kl("onDragEnd",function(){return pf(t().onDragEnd,d,e,tu.onDragEnd)})},u=function(){if(r){var d=Le({},Ol(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});l(d)}};return{beforeStart:i,start:a,update:o,flush:s,drop:l,abort:u}},eN=function(t,e){var n=JI(t,e);return function(r){return function(i){return function(a){if(a.type==="INITIAL_PUBLISH"){var o=a.payload.critical;n.beforeStart(o,a.payload.movementMode),i(a),n.start(o,a.payload.movementMode);return}if(a.type==="DROP_COMPLETE"){var s=a.payload.completed.result;n.flush(),i(a),n.drop(s);return}if(i(a),a.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},tN=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&de(),t.dispatch(nm({completed:r.completed}))}}},nN=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(a){if((a.type==="FLUSH"||a.type==="DROP_COMPLETE"||a.type==="DROP_ANIMATION_FINISHED")&&r(),i(a),a.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(bS())}};n=requestAnimationFrame(function(){n=null,e=Gn(window,[o])})}}}},rN=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},iN=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},aN=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},oN=function(t){return function(e){return function(n){return function(r){if(aN(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&de(),t.start(i);return}n(r),t.scroll(e.getState())}}}},sN=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(_S({reason:r.reason})))}}}},lN=Ob,uN=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,a=t.announce,o=t.autoScroller;return kb(_I,lN(ZP(FI(r),rN(e),OI(e),WI,tN,nN,sN,oN(o),qI,iN(n),eN(i,a))))},hf=function(){return{additions:{},removals:{},modified:{}}};function cN(t){var e=t.registry,n=t.callbacks,r=hf(),i=null,a=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var f=r,d=f.additions,c=f.removals,p=f.modified,x=uf(d).map(function(g){return e.draggable.getById(g).getDimension(Pt)}).sort(function(g,v){return g.descriptor.index-v.descriptor.index}),h=uf(p).map(function(g){var v=e.droppable.getById(g),y=v.callbacks.getScrollWhileDragging();return{droppableId:g,scroll:y}}),m={additions:x,removals:uf(c),modified:h};r=hf(),n.publish(m)}))},o=function(f){var d=f.descriptor.id;r.additions[d]=f,r.modified[f.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],a()},s=function(f){var d=f.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],a()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=hf())};return{add:o,remove:s,stop:l}}var MS=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,a=un({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,a.x),y:Math.max(0,a.y)};return o},ES=function(){var t=document.documentElement;return t||de(),t},CS=function(){var t=ES(),e=MS({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},dN=function(){var t=wS(),e=CS(),n=t.y,r=t.x,i=ES(),a=i.clientWidth,o=i.clientHeight,s=r+a,l=n+o,u=fr({top:n,left:r,right:s,bottom:l}),f={frame:u,scroll:{initial:t,current:t,max:e,diff:{value:Pt,displacement:Pt}}};return f},fN=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=dN(),a=i.scroll.current,o=e.droppable,s=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(a,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(a)}),u={draggables:Jb(l),droppables:Qb(s)},f={dimensions:u,critical:e,viewport:i};return f};function Y0(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var pN=function(t,e){var n=null,r=cN({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(p,x){t.droppable.exists(p)||de(),n&&e.updateDroppableIsEnabled({id:p,isEnabled:x})},a=function(p,x){n&&(t.droppable.exists(p)||de(),e.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:x}))},o=function(p,x){n&&(t.droppable.exists(p)||de(),e.updateDroppableScroll({id:p,newScroll:x}))},s=function(p,x){n&&t.droppable.getById(p).callbacks.scroll(x)},l=function(){if(n){r.stop();var p=n.critical.droppable;t.droppable.getAllByType(p.type).forEach(function(x){return x.callbacks.dragStopped()}),n.unsubscribe(),n=null}},u=function(p){n||de();var x=n.critical.draggable;p.type==="ADDITION"&&Y0(t,x,p.value)&&r.add(p.value),p.type==="REMOVAL"&&Y0(t,x,p.value)&&r.remove(p.value)},f=function(p){n&&de();var x=t.draggable.getById(p.draggableId),h=t.droppable.getById(x.descriptor.droppableId),m={draggable:x.descriptor,droppable:h.descriptor},g=t.subscribe(u);return n={critical:m,unsubscribe:g},fN({critical:m,registry:t,scrollOptions:p.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:a,scrollDroppable:s,updateDroppableScroll:o,startPublishing:f,stopPublishing:l};return d},TS=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},hN=function(t){window.scrollBy(t.x,t.y)},mN=At(function(t){return Ec(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),gN=function(e,n){var r=Ur(mN(n),function(i){return i.frame||de(),dS(i.frame.pageMarginBox)(e)});return r},vN=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var a=gN(e,r);return a},hi={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},xN=function(t,e){var n=t[e.size]*hi.startFromPercentage,r=t[e.size]*hi.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},DS=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var a=r-e,o=a/i;return o},am=1,yN=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return hi.maxPixelScroll;if(t===e.startScrollingFrom)return am;var n=DS({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=hi.maxPixelScroll*hi.ease(r);return Math.ceil(i)},K0=hi.durationDampening.accelerateAt,Z0=hi.durationDampening.stopDampeningAt,_N=function(t,e){var n=e,r=Z0,i=jb(),a=i-n;if(a>=Z0)return t;if(a<K0)return am;var o=DS({startOfRange:K0,endOfRange:r,current:a}),s=t*hi.ease(o);return Math.ceil(s)},Q0=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,a=yN(e,n);return a===0?0:i?Math.max(_N(a,r),am):a},J0=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,a=t.shouldUseTimeDampening,o=xN(e,i),s=n[i.end]<n[i.start];return s?Q0({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a}):-1*Q0({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a})},bN=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,a=n.width>e.width;return!a&&!i?r:a&&i?null:{x:a?0:r.x,y:i?0:r.y}},SN=Kb(function(t){return t===0?0:t}),AS=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,a=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},s=J0({container:n,distanceToEdges:o,dragStartTime:e,axis:Dc,shouldUseTimeDampening:a}),l=J0({container:n,distanceToEdges:o,dragStartTime:e,axis:rS,shouldUseTimeDampening:a}),u=SN({x:l,y:s});if(pi(u,Pt))return null;var f=bN({container:n,subject:r,proposedScroll:u});return f?pi(f,Pt)?null:f:null},wN=Kb(function(t){return t===0?0:t>0?1:-1}),om=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,a=jt(n,i),o={x:t(a.x,r.x),y:t(a.y,r.y)};return pi(o,Pt)?null:o}}(),PS=function(e){var n=e.max,r=e.current,i=e.change,a={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=wN(i),s=om({max:a,current:r,change:o});return!s||o.x!==0&&s.x===0||o.y!==0&&s.y===0},sm=function(e,n){return PS({current:e.scroll.current,max:e.scroll.max,change:n})},MN=function(e,n){if(!sm(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return om({current:i,max:r,change:n})},lm=function(e,n){var r=e.frame;return r?PS({current:r.scroll.current,max:r.scroll.max,change:n}):!1},EN=function(e,n){var r=e.frame;return!r||!lm(e,n)?null:om({current:r.scroll.current,max:r.scroll.max,change:n})},CN=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,a=t.shouldUseTimeDampening,o=AS({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:a});return o&&sm(e,o)?o:null},TN=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,a=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var s=AS({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:a});return s&&lm(e,s)?s:null},ex=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,a=t.scrollDroppable,o=e.current.page.borderBoxCenter,s=e.dimensions.draggables[e.critical.draggable.id],l=s.page.marginBox;if(e.isWindowScrollAllowed){var u=e.viewport,f=CN({dragStartTime:n,viewport:u,subject:l,center:o,shouldUseTimeDampening:r});if(f){i(f);return}}var d=vN({center:o,destination:Tn(e.impact),droppables:e.dimensions.droppables});if(d){var c=TN({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});c&&a(d.descriptor.id,c)}},DN=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=Ss(e),i=Ss(n),a=null,o=function(f){a||de();var d=a,c=d.shouldUseTimeDampening,p=d.dragStartTime;ex({state:f,scrollWindow:r,scrollDroppable:i,dragStartTime:p,shouldUseTimeDampening:c})},s=function(f){a&&de();var d=jb(),c=!1,p=function(){c=!0};ex({state:f,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),a={dragStartTime:d,shouldUseTimeDampening:c},c&&o(f)},l=function(){a&&(r.cancel(),i.cancel(),a=null)};return{start:s,stop:l,scroll:o}},AN=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(u,f){var d=jt(u.current.client.selection,f);e({client:d})},a=function(u,f){if(!lm(u,f))return f;var d=EN(u,f);if(!d)return n(u.descriptor.id,f),null;var c=un(f,d);n(u.descriptor.id,c);var p=un(f,c);return p},o=function(u,f,d){if(!u||!sm(f,d))return d;var c=MN(f,d);if(!c)return r(d),null;var p=un(d,c);r(p);var x=un(d,p);return x},s=function(u){var f=u.scrollJumpRequest;if(f){var d=Tn(u.impact);d||de();var c=a(u.dimensions.droppables[d],f);if(c){var p=u.viewport,x=o(u.isWindowScrollAllowed,p,c);x&&i(u,x)}}};return s},PN=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=DN({scrollWindow:n,scrollDroppable:e}),a=AN({move:r,scrollWindow:n,scrollDroppable:e}),o=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){i.scroll(u);return}u.scrollJumpRequest&&a(u)}},s={scroll:o,start:i.start,stop:i.stop};return s},ao="data-rbd",oo=function(){var t=ao+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Lp=function(){var t=ao+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),RN=function(){var t=ao+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),tx={contextId:ao+"-scroll-container-context-id"},LN=function(e){return function(n){return"["+n+'="'+e+'"]'}},Lo=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},IN="pointer-events: none;",NN=function(t){var e=LN(t),n=function(){var s=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(oo.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:s,dragging:IN,dropAnimating:s}}}(),r=function(){var s=`
      transition: `+Jo.outOfTheWay+`;
    `;return{selector:e(Lp.contextId),styles:{dragging:s,dropAnimating:s,userCancel:s}}}(),i={selector:e(RN.contextId),styles:{always:"overflow-anchor: none;"}},a={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,a];return{always:Lo(o,"always"),resting:Lo(o,"resting"),dragging:Lo(o,"dragging"),dropAnimating:Lo(o,"dropAnimating"),userCancel:Lo(o,"userCancel")}},Dn=typeof window<"u"?se.useLayoutEffect:se.useEffect,mf=function(){var e=document.querySelector("head");return e||de(),e},nx=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function kN(t,e){var n=Ye(function(){return NN(t)},[t]),r=se.useRef(null),i=se.useRef(null),a=we(At(function(d){var c=i.current;c||de(),c.textContent=d}),[]),o=we(function(d){var c=r.current;c||de(),c.textContent=d},[]);Dn(function(){!r.current&&!i.current||de();var d=nx(e),c=nx(e);return r.current=d,i.current=c,d.setAttribute(ao+"-always",t),c.setAttribute(ao+"-dynamic",t),mf().appendChild(d),mf().appendChild(c),o(n.always),a(n.resting),function(){var p=function(h){var m=h.current;m||de(),mf().removeChild(m),h.current=null};p(r),p(i)}},[e,o,a,n.always,n.resting,t]);var s=we(function(){return a(n.dragging)},[a,n.dragging]),l=we(function(d){if(d==="DROP"){a(n.dropAnimating);return}a(n.userCancel)},[a,n.dropAnimating,n.userCancel]),u=we(function(){i.current&&a(n.resting)},[a,n.resting]),f=Ye(function(){return{dragging:s,dropping:l,resting:u}},[s,l,u]);return f}var RS=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Pc(t){return t instanceof RS(t).HTMLElement}function ON(t,e){var n="["+oo.contextId+'="'+t+'"]',r=Zb(document.querySelectorAll(n));if(!r.length)return null;var i=Ur(r,function(a){return a.getAttribute(oo.draggableId)===e});return!i||!Pc(i)?null:i}function FN(t){var e=se.useRef({}),n=se.useRef(null),r=se.useRef(null),i=se.useRef(!1),a=we(function(c,p){var x={id:c,focus:p};return e.current[c]=x,function(){var m=e.current,g=m[c];g!==x&&delete m[c]}},[]),o=we(function(c){var p=ON(t,c);p&&p!==document.activeElement&&p.focus()},[t]),s=we(function(c,p){n.current===c&&(n.current=p)},[]),l=we(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var c=n.current;c&&o(c)}))},[o]),u=we(function(c){n.current=null;var p=document.activeElement;p&&p.getAttribute(oo.draggableId)===c&&(n.current=c)},[]);Dn(function(){return i.current=!0,function(){i.current=!1;var c=r.current;c&&cancelAnimationFrame(c)}},[]);var f=Ye(function(){return{register:a,tryRecordFocus:u,tryRestoreFocusRecorded:l,tryShiftRecord:s}},[a,u,l,s]);return f}function zN(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var p=e.indexOf(d);p!==-1&&e.splice(p,1)}}function r(d){e.length&&e.forEach(function(c){return c(d)})}function i(d){return t.draggables[d]||null}function a(d){var c=i(d);return c||de(),c}var o={register:function(c){t.draggables[c.descriptor.id]=c,r({type:"ADDITION",value:c})},update:function(c,p){var x=t.draggables[p.descriptor.id];x&&x.uniqueId===c.uniqueId&&(delete t.draggables[p.descriptor.id],t.draggables[c.descriptor.id]=c)},unregister:function(c){var p=c.descriptor.id,x=i(p);x&&c.uniqueId===x.uniqueId&&(delete t.draggables[p],r({type:"REMOVAL",value:c}))},getById:a,findById:i,exists:function(c){return!!i(c)},getAllByType:function(c){return Ou(t.draggables).filter(function(p){return p.descriptor.type===c})}};function s(d){return t.droppables[d]||null}function l(d){var c=s(d);return c||de(),c}var u={register:function(c){t.droppables[c.descriptor.id]=c},unregister:function(c){var p=s(c.descriptor.id);p&&c.uniqueId===p.uniqueId&&delete t.droppables[c.descriptor.id]},getById:l,findById:s,exists:function(c){return!!s(c)},getAllByType:function(c){return Ou(t.droppables).filter(function(p){return p.descriptor.type===c})}};function f(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:u,subscribe:n,clean:f}}function BN(){var t=Ye(zN,[]);return se.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var um=Ke.createContext(null),zu=function(){var t=document.body;return t||de(),t},LS={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},UN=function(e){return"rbd-announcement-"+e};function GN(t){var e=Ye(function(){return UN(t)},[t]),n=se.useRef(null);se.useEffect(function(){n.current&&de();var i=document.createElement("div");return n.current=i,i.id=e,i.setAttribute("aria-live","assertive"),i.setAttribute("role","log"),i.setAttribute("aria-atomic","true"),$b(i.style,LS),zu().appendChild(i),function(){setTimeout(function(){var o=n.current;o||de(),zu().removeChild(o),n.current=null})}},[e]);var r=we(function(i){var a=n.current;if(a){a.textContent=i;return}},[]);return r}var VN=function(e){return"rbd-lift-instruction-"+e};function WN(t,e){var n=Ye(function(){return VN(t)},[t]);return se.useEffect(function(){var i=document.createElement("div");return i.id=n,i.textContent=e,$b(i.style,LS),zu().appendChild(i),function(){zu().removeChild(i)}},[n,e]),n}var Rc=Ke.createContext(null);function IS(t){var e=se.useRef(t);return se.useEffect(function(){e.current=t}),e}function HN(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&de();var s={abandon:o};return t=s,s}function i(){t||de(),t=null}function a(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:a}}var jN=9,$N=13,cm=27,NS=32,qN=33,XN=34,YN=35,KN=36,ZN=37,QN=38,JN=39,ek=40,Fl,tk=(Fl={},Fl[$N]=!0,Fl[jN]=!0,Fl),kS=function(t){tk[t.keyCode]&&t.preventDefault()},Lc=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Ur(e,function(r){return"on"+r in document});return n||t}(),OS=0,rx=5;function nk(t,e){return Math.abs(e.x-t.x)>=rx||Math.abs(e.y-t.y)>=rx}var ix={type:"IDLE"};function rk(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var s=o.button,l=o.clientX,u=o.clientY;if(s===OS){var f={x:l,y:u},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(f);return}d.type!=="PENDING"&&de();var c=d.point;if(nk(c,f)){o.preventDefault();var p=d.actions.fluidLift(f);i({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(o){var s=r();if(s.type!=="DRAGGING"){e();return}o.preventDefault(),s.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var s=r();if(s.type==="PENDING"){e();return}if(o.keyCode===cm){o.preventDefault(),e();return}kS(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var s=r();if(s.type==="IDLE"&&de(),s.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:Lc,fn:e}]}function ik(t){var e=se.useRef(ix),n=se.useRef(fi),r=Ye(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===OS&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var c=t.findClosestDraggableId(d);if(c){var p=t.tryGetLock(c,o,{sourceEvent:d});if(p){d.preventDefault();var x={x:d.clientX,y:d.clientY};n.current(),u(p,x)}}}}}},[t]),i=Ye(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var c=t.findClosestDraggableId(d);if(c){var p=t.findOptionsForDraggable(c);p&&(p.shouldRespectForcePress||t.canGetLock(c)&&d.preventDefault())}}}}},[t]),a=we(function(){var d={passive:!1,capture:!0};n.current=Gn(window,[i,r],d)},[i,r]),o=we(function(){var f=e.current;f.type!=="IDLE"&&(e.current=ix,n.current(),a())},[a]),s=we(function(){var f=e.current;o(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[o]),l=we(function(){var d={capture:!0,passive:!1},c=rk({cancel:s,completed:o,getPhase:function(){return e.current},setPhase:function(x){e.current=x}});n.current=Gn(window,c,d)},[s,o]),u=we(function(d,c){e.current.type!=="IDLE"&&de(),e.current={type:"PENDING",point:c,actions:d},l()},[l]);Dn(function(){return a(),function(){n.current()}},[a])}var xa;function ak(){}var ok=(xa={},xa[XN]=!0,xa[qN]=!0,xa[KN]=!0,xa[YN]=!0,xa);function sk(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(a){if(a.keyCode===cm){a.preventDefault(),n();return}if(a.keyCode===NS){a.preventDefault(),r();return}if(a.keyCode===ek){a.preventDefault(),t.moveDown();return}if(a.keyCode===QN){a.preventDefault(),t.moveUp();return}if(a.keyCode===JN){a.preventDefault(),t.moveRight();return}if(a.keyCode===ZN){a.preventDefault(),t.moveLeft();return}if(ok[a.keyCode]){a.preventDefault();return}kS(a)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:Lc,fn:n}]}function lk(t){var e=se.useRef(ak),n=Ye(function(){return{eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==NS)return;var o=t.findClosestDraggableId(a);if(!o)return;var s=t.tryGetLock(o,f,{sourceEvent:a});if(!s)return;a.preventDefault();var l=!0,u=s.snapLift();e.current();function f(){l||de(),l=!1,e.current(),r()}e.current=Gn(window,sk(u,f),{capture:!0,passive:!1})}}},[t]),r=we(function(){var a={passive:!1,capture:!0};e.current=Gn(window,[n],a)},[n]);Dn(function(){return r(),function(){e.current()}},[r])}var gf={type:"IDLE"},uk=120,ck=.15;function dk(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===cm&&i.preventDefault(),e()}},{eventName:Lc,fn:e}]}function fk(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(a){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var s=a.touches[0],l=s.clientX,u=s.clientY,f={x:l,y:u};a.preventDefault(),o.actions.move(f)}},{eventName:"touchend",fn:function(a){var o=r();if(o.type!=="DRAGGING"){e();return}a.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(a){if(r().type!=="DRAGGING"){e();return}a.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(a){var o=r();o.type==="IDLE"&&de();var s=a.touches[0];if(s){var l=s.force>=ck;if(l){var u=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){u&&e();return}if(u){if(o.hasMoved){a.preventDefault();return}e();return}a.preventDefault()}}}},{eventName:Lc,fn:e}]}function pk(t){var e=se.useRef(gf),n=se.useRef(fi),r=we(function(){return e.current},[]),i=we(function(p){e.current=p},[]),a=Ye(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var x=t.findClosestDraggableId(p);if(x){var h=t.tryGetLock(x,s,{sourceEvent:p});if(h){var m=p.touches[0],g=m.clientX,v=m.clientY,y={x:g,y:v};n.current(),d(h,y)}}}}}},[t]),o=we(function(){var p={capture:!0,passive:!1};n.current=Gn(window,[a],p)},[a]),s=we(function(){var c=e.current;c.type!=="IDLE"&&(c.type==="PENDING"&&clearTimeout(c.longPressTimerId),i(gf),n.current(),o())},[o,i]),l=we(function(){var c=e.current;s(),c.type==="DRAGGING"&&c.actions.cancel({shouldBlockNextClick:!0}),c.type==="PENDING"&&c.actions.abort()},[s]),u=we(function(){var p={capture:!0,passive:!1},x={cancel:l,completed:s,getPhase:r},h=Gn(window,fk(x),p),m=Gn(window,dk(x),p);n.current=function(){h(),m()}},[l,r,s]),f=we(function(){var p=r();p.type!=="PENDING"&&de();var x=p.actions.fluidLift(p.point);i({type:"DRAGGING",actions:x,hasMoved:!1})},[r,i]),d=we(function(p,x){r().type!=="IDLE"&&de();var h=setTimeout(f,uk);i({type:"PENDING",point:x,actions:p,longPressTimerId:h}),u()},[u,r,i,f]);Dn(function(){return o(),function(){n.current();var x=r();x.type==="PENDING"&&(clearTimeout(x.longPressTimerId),i(gf))}},[r,o,i]),Dn(function(){var p=Gn(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var hk={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function FS(t,e){if(e==null)return!1;var n=!!hk[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:FS(t,e.parentElement)}function mk(t,e){var n=e.target;return Pc(n)?FS(t,n):!1}var gk=function(t){return fr(t.getBoundingClientRect()).center};function vk(t){return t instanceof RS(t).Element}var xk=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Ur(e,function(r){return r in Element.prototype});return n||t}();function zS(t,e){return t==null?null:t[xk](e)?t:zS(t.parentElement,e)}function yk(t,e){return t.closest?t.closest(e):zS(t,e)}function _k(t){return"["+oo.contextId+'="'+t+'"]'}function bk(t,e){var n=e.target;if(!vk(n))return null;var r=_k(t),i=yk(n,r);return!i||!Pc(i)?null:i}function Sk(t,e){var n=bk(t,e);return n?n.getAttribute(oo.draggableId):null}function wk(t,e){var n="["+Lp.contextId+'="'+t+'"]',r=Zb(document.querySelectorAll(n)),i=Ur(r,function(a){return a.getAttribute(Lp.id)===e});return!i||!Pc(i)?null:i}function Mk(t){t.preventDefault()}function zl(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function BS(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var a=r.draggable.findById(i);return!(!a||!a.options.isEnabled||!TS(n.getState(),i))}function Ek(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,a=t.draggableId,o=t.forceSensorStop,s=t.sourceEvent,l=BS({lockAPI:e,store:r,registry:i,draggableId:a});if(!l)return null;var u=i.draggable.getById(a),f=wk(n,u.descriptor.id);if(!f||s&&!u.options.canDragInteractiveElements&&mk(f,s))return null;var d=e.claim(o||fi),c="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function x(){return e.isActive(d)}function h(M,A){zl({expected:M,phase:c,isLockActive:x,shouldWarn:!0})&&r.dispatch(A())}var m=h.bind(this,"DRAGGING");function g(M){function A(){e.release(),c="COMPLETED"}c!=="PRE_DRAG"&&(A(),c!=="PRE_DRAG"&&de()),r.dispatch(bI(M.liftActionArgs)),c="DRAGGING";function b(E,R){if(R===void 0&&(R={shouldBlockNextClick:!1}),M.cleanup(),R.shouldBlockNextClick){var H=Gn(window,[{eventName:"click",fn:Mk,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(H)}A(),r.dispatch(_S({reason:E}))}return Le({isActive:function(){return zl({expected:"DRAGGING",phase:c,isLockActive:x,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(R){return b("DROP",R)},cancel:function(R){return b("CANCEL",R)}},M.actions)}function v(M){var A=Ss(function(E){m(function(){return xS({client:E})})}),b=g({liftActionArgs:{id:a,clientSelection:M,movementMode:"FLUID"},cleanup:function(){return A.cancel()},actions:{move:A}});return Le({},b,{move:A})}function y(){var M={moveUp:function(){return m(PI)},moveRight:function(){return m(LI)},moveDown:function(){return m(RI)},moveLeft:function(){return m(II)}};return g({liftActionArgs:{id:a,clientSelection:gk(f),movementMode:"SNAP"},cleanup:fi,actions:M})}function _(){var M=zl({expected:"PRE_DRAG",phase:c,isLockActive:x,shouldWarn:!0});M&&e.release()}var S={isActive:function(){return zl({expected:"PRE_DRAG",phase:c,isLockActive:x,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:v,snapLift:y,abort:_};return S}var Ck=[ik,lk,pk];function Tk(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,a=t.enableDefaultSensors,o=[].concat(a?Ck:[],i||[]),s=se.useState(function(){return HN()})[0],l=we(function(v,y){v.isDragging&&!y.isDragging&&s.tryAbandon()},[s]);Dn(function(){var v=n.getState(),y=n.subscribe(function(){var _=n.getState();l(v,_),v=_});return y},[s,n,l]),Dn(function(){return s.tryAbandon},[s.tryAbandon]);for(var u=we(function(g){return BS({lockAPI:s,registry:r,store:n,draggableId:g})},[s,r,n]),f=we(function(g,v,y){return Ek({lockAPI:s,registry:r,contextId:e,store:n,draggableId:g,forceSensorStop:v,sourceEvent:y&&y.sourceEvent?y.sourceEvent:null})},[e,s,r,n]),d=we(function(g){return Sk(e,g)},[e]),c=we(function(g){var v=r.draggable.findById(g);return v?v.options:null},[r.draggable]),p=we(s.tryAbandon,[s]),x=we(s.isClaimed,[s]),h=Ye(function(){return{canGetLock:u,tryGetLock:f,findClosestDraggableId:d,findOptionsForDraggable:c,tryReleaseLock:p,isLockClaimed:x}},[u,f,d,c,p,x]),m=0;m<o.length;m++)o[m](h)}var Dk=function(e){return{onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Io(t){return t.current||de(),t.current}function Ak(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,a=t.liftInstruction,o=se.useRef(null),s=IS(t),l=we(function(){return Dk(s.current)},[s]),u=GN(e),f=WN(e,a),d=kN(e,i),c=we(function(E){Io(o).dispatch(E)},[]),p=Ye(function(){return T0({publishWhileDragging:wI,updateDroppableScroll:EI,updateDroppableIsEnabled:CI,updateDroppableIsCombineEnabled:TI,collectionStarting:MI},c)},[c]),x=BN(),h=Ye(function(){return pN(x,p)},[x,p]),m=Ye(function(){return PN(Le({scrollWindow:hN,scrollDroppable:h.scrollDroppable},T0({move:xS},c)))},[h.scrollDroppable,c]),g=FN(e),v=Ye(function(){return uN({announce:u,autoScroller:m,dimensionMarshal:h,focusMarshal:g,getResponders:l,styleMarshal:d})},[u,m,h,g,l,d]);o.current=v;var y=we(function(){var E=Io(o),R=E.getState();R.phase!=="IDLE"&&E.dispatch(yS())},[]),_=we(function(){var E=Io(o).getState();return E.isDragging||E.phase==="DROP_ANIMATING"},[]),S=Ye(function(){return{isDragging:_,tryAbort:y}},[_,y]);n(S);var M=we(function(E){return TS(Io(o).getState(),E)},[]),A=we(function(){return Ii(Io(o).getState())},[]),b=Ye(function(){return{marshal:h,focus:g,contextId:e,canLift:M,isMovementAllowed:A,liftInstructionId:f,registry:x}},[e,h,g,M,A,f,x]);return Tk({contextId:e,store:v,registry:x,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),se.useEffect(function(){return y},[y]),Ke.createElement(Rc.Provider,{value:b},Ke.createElement(nR,{context:um,store:v},t.children))}var Pk=0;function dm(t){var e=Ye(function(){return""+Pk++},[]),n=t.liftInstruction||tu.liftInstruction;return Ke.createElement(oL,null,function(r){return Ke.createElement(Ak,{nonce:t.nonce,contextId:e,setCallbacks:r,liftInstruction:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var US=function(e){return function(n){return e===n}},Rk=US("scroll"),Lk=US("auto"),ax=function(e,n){return n(e.overflowX)||n(e.overflowY)},Ik=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return ax(r,Rk)||ax(r,Lk)},Nk=function(){return!1},kk=function t(e){return e==null?null:e===document.body?Nk()?e:null:e===document.documentElement?null:Ik(e)?e:t(e.parentElement)},Ip=function(t){return{x:t.scrollLeft,y:t.scrollTop}},Ok=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},Fk=function(t){var e=kk(t),n=Ok(t);return{closestScrollable:e,isFixedOnPage:n}},zk=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,a=t.direction,o=t.client,s=t.page,l=t.closest,u=function(){if(!l)return null;var p=l.scrollSize,x=l.client,h=MS({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:x.paddingBox.height,width:x.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:x,scrollSize:p,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:h,diff:{value:Pt,displacement:Pt}}}}(),f=a==="vertical"?Dc:rS,d=io({page:s,withPlaceholder:null,axis:f,frame:u}),c={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:f,isEnabled:n,client:o,page:s,frame:u,subject:d};return c},Bk=function(e,n){var r=Hb(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,a=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,s=a+n.scrollWidth,l={top:i,right:s,bottom:o,left:a},u=qh(l,r.border),f=Xh({borderBox:u,margin:r.margin,border:r.border,padding:r.padding});return f},Uk=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,a=t.direction,o=t.isDropDisabled,s=t.isCombineEnabled,l=t.shouldClipSubject,u=r.closestScrollable,f=Bk(e,u),d=Lu(f,i),c=function(){if(!u)return null;var x=Hb(u),h={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:x,page:Lu(x,i),scroll:Ip(u),scrollSize:h,shouldClipSubject:l}}(),p=zk({descriptor:n,isEnabled:!o,isCombineEnabled:s,isFixedOnPage:r.isFixedOnPage,direction:a,client:f,page:d,closest:c});return p},Gk={passive:!1},Vk={passive:!0},ox=function(t){return t.shouldPublishImmediately?Gk:Vk};function Bu(t){var e=se.useContext(t);return e||de(),e}var Wk=0;function GS(t){var e=se.useRef(Wk++);return t+"::"+e.current}var Bl=function(e){return e&&e.env.closestScrollable||null};function Hk(t){var e=se.useRef(null),n=Bu(Rc),r=GS("droppable"),i=n.registry,a=n.marshal,o=IS(t),s=Ye(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=se.useRef(s),u=Ye(function(){return At(function(_,S){e.current||de();var M={x:_,y:S};a.updateDroppableScroll(s.id,M)})},[s.id,a]),f=we(function(){var _=e.current;return!_||!_.env.closestScrollable?Pt:Ip(_.env.closestScrollable)},[]),d=we(function(){var _=f();u(_.x,_.y)},[f,u]),c=Ye(function(){return Ss(d)},[d]),p=we(function(){var _=e.current,S=Bl(_);_&&S||de();var M=_.scrollOptions;if(M.shouldPublishImmediately){d();return}c()},[c,d]),x=we(function(_,S){e.current&&de();var M=o.current,A=M.getDroppableRef();A||de();var b=Fk(A),E={ref:A,descriptor:s,env:b,scrollOptions:S};e.current=E;var R=Uk({ref:A,descriptor:s,env:b,windowScroll:_,direction:M.direction,isDropDisabled:M.isDropDisabled,isCombineEnabled:M.isCombineEnabled,shouldClipSubject:!M.ignoreContainerClipping}),H=b.closestScrollable;return H&&(H.setAttribute(tx.contextId,n.contextId),H.addEventListener("scroll",p,ox(E.scrollOptions))),R},[n.contextId,s,p,o]),h=we(function(){var _=e.current,S=Bl(_);return _&&S||de(),Ip(S)},[]),m=we(function(){var _=e.current;_||de();var S=Bl(_);e.current=null,S&&(c.cancel(),S.removeAttribute(tx.contextId),S.removeEventListener("scroll",p,ox(_.scrollOptions)))},[p,c]),g=we(function(_){var S=e.current;S||de();var M=Bl(S);M||de(),M.scrollTop+=_.y,M.scrollLeft+=_.x},[]),v=Ye(function(){return{getDimensionAndWatchScroll:x,getScrollWhileDragging:h,dragStopped:m,scroll:g}},[m,x,h,g]),y=Ye(function(){return{uniqueId:r,descriptor:s,callbacks:v}},[v,s,r]);Dn(function(){return l.current=y.descriptor,i.droppable.register(y),function(){e.current&&m(),i.droppable.unregister(y)}},[v,s,m,y,a,i.droppable]),Dn(function(){e.current&&a.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),Dn(function(){e.current&&a.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function vf(){}var sx={width:0,height:0,margin:fL},jk=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?sx:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},$k=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,a=jk({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:a.width,height:a.height,marginTop:a.margin.top,marginRight:a.margin.right,marginBottom:a.margin.bottom,marginLeft:a.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?Jo.placeholder:null}};function qk(t){var e=se.useRef(null),n=we(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,a=t.onClose,o=t.contextId,s=se.useState(t.animate==="open"),l=s[0],u=s[1];se.useEffect(function(){return l?r!=="open"?(n(),u(!1),vf):e.current?vf:(e.current=setTimeout(function(){e.current=null,u(!1)}),n):vf},[r,l,n]);var f=we(function(c){c.propertyName==="height"&&(i(),r==="close"&&a())},[r,a,i]),d=$k({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return Ke.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:f,ref:t.innerRef})}var Xk=Ke.memo(qk),fm=Ke.createContext(null),Yk=function(t){Lb(e,t);function e(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,a){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:a.isVisible?{isVisible:!0,data:a.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(Ke.PureComponent),lx={dragging:5e3,dropAnimating:4500},Kk=function(e,n){return n?Jo.drop(n.duration):e?Jo.snap:Jo.fluid},Zk=function(e,n){return e?n?Es.opacity.drop:Es.opacity.combining:null},Qk=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Jk(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,a=t.dropping,o=!!i,s=Qk(t),l=!!a,u=l?Pp.drop(r,o):Pp.moveTo(r),f={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Kk(s,a),transform:u,opacity:Zk(o,l),zIndex:l?lx.dropAnimating:lx.dragging,pointerEvents:"none"};return f}function eO(t){return{transform:Pp.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function tO(t){return t.type==="DRAGGING"?Jk(t):eO(t)}function nO(t,e,n){n===void 0&&(n=Pt);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),a=Wb(i,r),o=Lu(a,n),s={client:a,tagName:e.tagName.toLowerCase(),display:r.display},l={x:a.marginBox.width,y:a.marginBox.height},u={descriptor:t,placeholder:s,displaceBy:l,client:a,page:o};return u}function rO(t){var e=GS("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,a=t.canDragInteractiveElements,o=t.shouldRespectForcePress,s=t.isEnabled,l=Ye(function(){return{canDragInteractiveElements:a,shouldRespectForcePress:o,isEnabled:s}},[a,s,o]),u=we(function(p){var x=i();return x||de(),nO(n,x,p)},[n,i]),f=Ye(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:u}},[n,u,l,e]),d=se.useRef(f),c=se.useRef(!0);Dn(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),Dn(function(){if(c.current){c.current=!1;return}var p=d.current;d.current=f,r.draggable.update(f,p)},[f,r.draggable])}function iO(t){t.preventDefault()}function aO(t){var e=se.useRef(null),n=we(function(E){e.current=E},[]),r=we(function(){return e.current},[]),i=Bu(Rc),a=i.contextId,o=i.liftInstructionId,s=i.registry,l=Bu(fm),u=l.type,f=l.droppableId,d=Ye(function(){return{id:t.draggableId,index:t.index,type:u,droppableId:f}},[t.draggableId,t.index,u,f]),c=t.children,p=t.draggableId,x=t.isEnabled,h=t.shouldRespectForcePress,m=t.canDragInteractiveElements,g=t.isClone,v=t.mapped,y=t.dropAnimationFinished;if(!g){var _=Ye(function(){return{descriptor:d,registry:s,getDraggableRef:r,canDragInteractiveElements:m,shouldRespectForcePress:h,isEnabled:x}},[d,s,r,m,h,x]);rO(_)}var S=Ye(function(){return x?{tabIndex:0,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":a,"aria-labelledby":o,draggable:!1,onDragStart:iO}:null},[a,p,x,o]),M=we(function(E){v.type==="DRAGGING"&&v.dropping&&E.propertyName==="transform"&&y()},[y,v]),A=Ye(function(){var E=tO(v),R=v.type==="DRAGGING"&&v.dropping?M:null,H={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":a,"data-rbd-draggable-id":p,style:E,onTransitionEnd:R},dragHandleProps:S};return H},[a,S,p,v,M,n]),b=Ye(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return c(A,v.snapshot,b)}var VS=function(t,e){return t===e},WS=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},oO=function(e){return e.combine?e.combine.draggableId:null},sO=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function lO(){var t=At(function(i,a){return{x:i,y:a}}),e=At(function(i,a,o,s,l){return{isDragging:!0,isClone:a,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:s,combineTargetFor:null}}),n=At(function(i,a,o,s,l,u,f){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:u,mode:a,offset:i,dimension:o,forceShouldAnimate:f,snapshot:e(a,s,l,u,null)}}}),r=function(a,o){if(a.isDragging){if(a.critical.draggable.id!==o.draggableId)return null;var s=a.current.client.offset,l=a.dimensions.draggables[o.draggableId],u=Tn(a.impact),f=sO(a.impact),d=a.forceShouldAnimate;return n(t(s.x,s.y),a.movementMode,l,o.isClone,u,f,d)}if(a.phase==="DROP_ANIMATING"){var c=a.completed;if(c.result.draggableId!==o.draggableId)return null;var p=o.isClone,x=a.dimensions.draggables[o.draggableId],h=c.result,m=h.mode,g=WS(h),v=oO(h),y=a.dropDuration,_={duration:y,curve:rm.drop,moveTo:a.newHomeClientOffset,opacity:v?Es.opacity.drop:null,scale:v?Es.scale.drop:null};return{mapped:{type:"DRAGGING",offset:a.newHomeClientOffset,dimension:x,dropping:_,draggingOver:g,combineWith:v,mode:m,forceShouldAnimate:null,snapshot:e(m,p,g,v,_)}}}return null};return r}function HS(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var uO={mapped:{type:"SECONDARY",offset:Pt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:HS(null)}};function cO(){var t=At(function(o,s){return{x:o,y:s}}),e=At(HS),n=At(function(o,s,l){return s===void 0&&(s=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:s,shouldAnimateDisplacement:l,snapshot:e(s)}}}),r=function(s){return s?n(Pt,s,!0):null},i=function(s,l,u,f){var d=u.displaced.visible[s],c=!!(f.inVirtualList&&f.effected[s]),p=Cc(u),x=p&&p.draggableId===s?l:null;if(!d){if(!c)return r(x);if(u.displaced.invisible[s])return null;var h=po(f.displacedBy.point),m=t(h.x,h.y);return n(m,x,!0)}if(c)return r(x);var g=u.displacedBy.point,v=t(g.x,g.y);return n(v,x,d.shouldAnimate)},a=function(s,l){if(s.isDragging)return s.critical.draggable.id===l.draggableId?null:i(l.draggableId,s.critical.draggable.id,s.impact,s.afterCritical);if(s.phase==="DROP_ANIMATING"){var u=s.completed;return u.result.draggableId===l.draggableId?null:i(l.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return a}var dO=function(){var e=lO(),n=cO(),r=function(a,o){return e(a,o)||n(a,o)||uO};return r},fO={dropAnimationFinished:bS},pO=Vb(dO,fO,null,{context:um,pure:!0,areStatePropsEqual:VS})(aO);function jS(t){var e=Bu(fm),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:Ke.createElement(pO,t)}function pm(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return Ke.createElement(jS,Le({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function hO(t){var e=se.useContext(Rc);e||de();var n=e.contextId,r=e.isMovementAllowed,i=se.useRef(null),a=se.useRef(null),o=t.children,s=t.droppableId,l=t.type,u=t.mode,f=t.direction,d=t.ignoreContainerClipping,c=t.isDropDisabled,p=t.isCombineEnabled,x=t.snapshot,h=t.useClone,m=t.updateViewportMaxScroll,g=t.getContainerForClone,v=we(function(){return i.current},[]),y=we(function(H){i.current=H},[]);we(function(){return a.current},[]);var _=we(function(H){a.current=H},[]),S=we(function(){r()&&m({maxScroll:CS()})},[r,m]);Hk({droppableId:s,type:l,mode:u,direction:f,isDropDisabled:c,isCombineEnabled:p,ignoreContainerClipping:d,getDroppableRef:v});var M=Ke.createElement(Yk,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(H){var Y=H.onClose,z=H.data,k=H.animate;return Ke.createElement(Xk,{placeholder:z,onClose:Y,innerRef:_,animate:k,contextId:n,onTransitionEnd:S})}),A=Ye(function(){return{innerRef:y,placeholder:M,droppableProps:{"data-rbd-droppable-id":s,"data-rbd-droppable-context-id":n}}},[n,s,M,y]),b=h?h.dragging.draggableId:null,E=Ye(function(){return{droppableId:s,type:l,isUsingCloneFor:b}},[s,b,l]);function R(){if(!h)return null;var H=h.dragging,Y=h.render,z=Ke.createElement(jS,{draggableId:H.draggableId,index:H.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(k,$){return Y(k,$,H)});return bM.createPortal(z,g())}return Ke.createElement(fm.Provider,{value:E},o(A,x),R())}var xf=function(e,n){return e===n.droppable.type},ux=function(e,n){return n.draggables[e.draggable.id]},mO=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=Le({},e,{shouldAnimatePlaceholder:!1}),r=At(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=At(function(o,s,l,u,f,d){var c=f.descriptor.id,p=f.descriptor.droppableId===o;if(p){var x=d?{render:d,dragging:r(f.descriptor)}:null,h={isDraggingOver:l,draggingOverWith:l?c:null,draggingFromThisWith:c,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!1,snapshot:h,useClone:x}}if(!s)return n;if(!u)return e;var m={isDraggingOver:l,draggingOverWith:c,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!0,snapshot:m,useClone:null}}),a=function(s,l){var u=l.droppableId,f=l.type,d=!l.isDropDisabled,c=l.renderClone;if(s.isDragging){var p=s.critical;if(!xf(f,p))return n;var x=ux(p,s.dimensions),h=Tn(s.impact)===u;return i(u,d,h,h,x,c)}if(s.phase==="DROP_ANIMATING"){var m=s.completed;if(!xf(f,m.critical))return n;var g=ux(m.critical,s.dimensions);return i(u,d,WS(m.result)===u,Tn(m.impact)===u,g,c)}if(s.phase==="IDLE"&&s.completed&&!s.shouldFlush){var v=s.completed;if(!xf(f,v.critical))return n;var y=Tn(v.impact)===u,_=!!(v.impact.at&&v.impact.at.type==="COMBINE"),S=v.critical.droppable.id===u;return y?_?e:n:S?e:n}return n};return a},gO={updateViewportMaxScroll:AI};function vO(){return document.body||de(),document.body}var xO={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:vO},Ic=Vb(mO,gO,null,{context:um,pure:!0,areStatePropsEqual:VS})(hO);Ic.defaultProps=xO;const yO=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
  }
`,_O=ie.div`
  padding: 12px 16px;
  border-bottom: 1px solid #3a3a3a;
  background: #1f1f1f;
`,bO=ie.div`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  .card-icon {
    width: 16px;
    height: 16px;
    background: #667eea;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
  }
`,SO=ie.div`
  font-size: 12px;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  gap: 8px;
`,wO=ie.div`
  padding: 16px;
`,$r=ie.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,qr=ie.span`
  font-size: 12px;
  color: #a0a0a0;
  font-weight: 500;
`,ya=ie.span`
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
`,MO=ie.div`
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`,EO=ie.span`
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  color: white;
  background: ${t=>{switch(t.status){case"pending":return"#667eea";case"cut":return"#f59e0b";case"ready":return"#10b981";case"shipped":return"#8b5cf6";default:return"#6b7280"}}};
`,CO=ie.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
`,cx=ie.div`
  height: 1px;
  background: #3a3a3a;
  margin: 8px 0;
`,TO=t=>t?t.split(" ").map(e=>e[0]).join("").toUpperCase().substring(0,2):"?",DO=t=>t?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t):"$0.00",dx=t=>{if(!t)return"N/A";try{return new Date(t).toLocaleDateString("tr-TR",{day:"2-digit",month:"2-digit",year:"numeric"})}catch{return"N/A"}},yf=(t,e=30)=>t?t.length>e?t.substring(0,e)+"...":t:"",AO=t=>{if(!t)return"Order";const e=t.toLowerCase();return e.includes("pendant")?"Pendant":e.includes("necklace")?"Necklace":e.includes("ring")?"Ring":e.includes("bracelet")?"Bracelet":e.includes("earring")?"Earring":"Order"};function PO({order:t}){var a,o,s,l,u,f,d,c;const[e,n]=se.useState(!1),r=AO((a=t.product)==null?void 0:a.name),i=((o=t.transaction_id)==null?void 0:o.toString().slice(-4))||"0000";return T.jsxs(yO,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[T.jsxs(_O,{children:[T.jsxs(bO,{children:[T.jsx("div",{className:"card-icon",children:"📦"}),r," - ",i]}),T.jsxs(SO,{children:[T.jsx("span",{children:"📧 Email Thread"}),T.jsx("span",{children:"•"}),T.jsx("span",{children:dx(t.order_date)})]})]}),T.jsxs(wO,{children:[T.jsxs($r,{children:[T.jsx(qr,{children:"$ Amount"}),T.jsx(MO,{children:DO((s=t.pricing)==null?void 0:s.order_total)})]}),T.jsxs($r,{children:[T.jsx(qr,{children:"rest"}),T.jsx(ya,{children:"API"})]}),T.jsxs($r,{children:[T.jsx(qr,{children:"Close date"}),T.jsx(ya,{children:dx(t.order_date)})]}),T.jsx(cx,{}),T.jsxs($r,{children:[T.jsx(qr,{children:"Company"}),T.jsx(ya,{children:yf((l=t.shop)==null?void 0:l.name,15)})]}),T.jsxs($r,{children:[T.jsx(qr,{children:"Point of Contact"}),T.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[T.jsx(CO,{children:TO((u=t.customer)==null?void 0:u.name)}),T.jsx(ya,{children:yf((f=t.customer)==null?void 0:f.name,12)})]})]}),T.jsxs($r,{children:[T.jsx(qr,{children:"Status"}),T.jsxs(EO,{status:t.status,children:[t.status==="pending"&&"New",t.status==="cut"&&"Screening",t.status==="ready"&&"Meeting",t.status==="shipped"&&"Customer"]})]}),((d=t.product)==null?void 0:d.quantity)>1&&T.jsxs($r,{children:[T.jsx(qr,{children:"Quantity"}),T.jsxs(ya,{children:["x",t.product.quantity]})]}),((c=t.customer)==null?void 0:c.note)&&T.jsxs(T.Fragment,{children:[T.jsx(cx,{}),T.jsxs($r,{children:[T.jsx(qr,{children:"Note"}),T.jsx(ya,{style:{fontSize:"11px",color:"#a0a0a0"},children:yf(t.customer.note,25)})]})]})]})]})}const RO=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,LO=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;ie.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .brand-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 18px;
  }
  
  .brand-name {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }
`;const IO=ie.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  
  .title-icon {
    width: 24px;
    height: 24px;
    background: #667eea;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`,NO=ie.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;ie.div`
  background: #1e3a8a;
  color: white;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3a3a3a;
  
  .sync-text {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .reconnect-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;const kO=ie.div`
  background: #2a2a2a;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #3a3a3a;
`,No=ie.button`
  background: ${t=>t.active?"#667eea":"transparent"};
  color: ${t=>t.active?"white":"#a0a0a0"};
  border: 1px solid ${t=>t.active?"#667eea":"#3a3a3a"};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${t=>t.active?"#667eea":"#3a3a3a"};
    color: white;
  }
`,OO=ie.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  overflow-x: auto;
  min-height: calc(100vh - 200px);
`,FO=ie.div`
  background: #2a2a2a;
  border-radius: 12px;
  min-width: 320px;
  max-width: 320px;
  border: 1px solid #3a3a3a;
  display: flex;
  flex-direction: column;
`,zO=ie.div`
  padding: 16px;
  border-bottom: 1px solid #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .column-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    color: #ffffff;
  }
  
  .column-count {
    background: #3a3a3a;
    color: #a0a0a0;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .column-actions {
    display: flex;
    gap: 4px;
    
    button {
      background: transparent;
      border: none;
      color: #a0a0a0;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      
      &:hover {
        background: #3a3a3a;
        color: white;
      }
    }
  }
`,BO=ie.div`
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`,UO=ie.div`
  padding: 40px 20px;
  text-align: center;
  color: #a0a0a0;
  font-style: italic;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,GO={pending:{label:"New",color:"#667eea",icon:"📋"},cut:{label:"Screening",color:"#f59e0b",icon:"✂️"},ready:{label:"Meeting",color:"#10b981",icon:"📦"},shipped:{label:"Customer",color:"#8b5cf6",icon:"🚚"}};function VO({orders:t}){const[e,n]=se.useState(t),[r,i]=se.useState("all"),a=s=>{if(!s.destination)return;const{draggableId:l,destination:u}=s,f=u.droppableId;n(d=>d.map(c=>c.transaction_id===parseInt(l)?{...c,status:f}:c)),fetch(`/api/orders/${l}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:f})}).catch(d=>{console.error("Failed to update status:",d),n(c=>c.map(p=>p.transaction_id===parseInt(l)?{...p,status:s.source.droppableId}:p))})},o=r==="all"?e:e.filter(s=>s.status===r);return T.jsxs(RO,{children:[T.jsxs(LO,{children:[T.jsxs(IO,{children:[T.jsx("div",{className:"title-icon",children:"📦"}),"Görevler"]}),T.jsx(NO,{children:"+ New record"})]}),T.jsxs(kO,{children:[T.jsx(No,{active:r==="all",onClick:()=>i("all"),children:"All Opportunities"}),T.jsx(No,{active:r==="pending",onClick:()=>i("pending"),children:"New"}),T.jsx(No,{active:r==="cut",onClick:()=>i("cut"),children:"Screening"}),T.jsx(No,{active:r==="ready",onClick:()=>i("ready"),children:"Meeting"}),T.jsx(No,{active:r==="shipped",onClick:()=>i("shipped"),children:"Customer"})]}),T.jsx(OO,{children:T.jsx(dm,{onDragEnd:a,children:Object.entries(GO).map(([s,l])=>{const u=o.filter(f=>f.status===s);return T.jsx(Ic,{droppableId:s,children:(f,d)=>T.jsxs(FO,{ref:f.innerRef,...f.droppableProps,style:{borderColor:d.isDraggingOver?l.color:"#3a3a3a",background:d.isDraggingOver?"#2f2f2f":"#2a2a2a"},children:[T.jsxs(zO,{children:[T.jsxs("div",{className:"column-title",children:[T.jsx("span",{children:l.icon}),T.jsx("span",{children:l.label})]}),T.jsxs("div",{className:"column-actions",children:[T.jsx("span",{className:"column-count",children:u.length}),T.jsx("button",{children:"-"}),T.jsx("button",{children:"+ New"})]})]}),u.length===0?T.jsx(UO,{children:"No opportunities in this stage"}):u.map((c,p)=>T.jsx(pm,{draggableId:String(c.transaction_id),index:p,children:(x,h)=>T.jsx(BO,{ref:x.innerRef,...x.draggableProps,...x.dragHandleProps,style:{...x.draggableProps.style,transform:h.isDragging?x.draggableProps.style.transform:"none",opacity:h.isDragging?.8:1},children:T.jsx(PO,{order:c})})},c.transaction_id)),f.placeholder]})},s)})})})]})}const WO=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,HO=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;ie.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  .brand-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 18px;
  }
  
  .brand-name {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }
`;const jO=ie.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  
  .title-icon {
    width: 24px;
    height: 24px;
    background: #667eea;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`,$O=ie.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;ie.div`
  background: #4a67f7;
  color: white;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3a3a3a;
  
  .sync-text {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  
  .reconnect-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;const qO=ie.div`
  background: #2a2a2a;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3a3a3a;
`,XO=ie.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`,YO=ie.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`,_f=ie.button`
  background: transparent;
  border: 1px solid #3a3a3a;
  color: #a0a0a0;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #3a3a3a;
    color: white;
  }
`,KO=ie.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 8px 0;
  min-width: 200px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: ${t=>t.show?"block":"none"};
`,ko=ie.div`
  padding: 8px 16px;
  color: #e0e0e0;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #3a3a3a;
  }
`,fx=ie.div`
  height: 1px;
  background: #3a3a3a;
  margin: 4px 0;
`,ZO=ie.div`
  margin: 20px 24px;
  display: flex;
  gap: 10px;
  align-items: center;
  
  input {
    padding: 12px 16px;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    font-size: 14px;
    flex: 1;
    max-width: 400px;
    background: #2a2a2a;
    color: #ffffff;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
      color: #a0a0a0;
    }
  }
`,QO=ie.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
  border-radius: 8px;
  background: #1f1f1f;
  
  /* Custom scrollbar for horizontal scroll */
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #4a4a4a;
  }
`,JO=ie.table`
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
  background: #1f1f1f;
`,eF=ie.th`
  background: #1f1f1f;
  color: #a0a0a0;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 16px 12px;
  text-align: left;
  border-bottom: 2px solid #3a3a3a;
  border-right: 1px solid #3a3a3a;
  cursor: ${t=>t.draggable?"grab":"default"};
  min-width: ${t=>{switch(t.columnId){case"checkbox":return"50px";case"orderId":return"120px";case"product":return"150px";case"customer":return"140px";case"email":return"180px";case"amount":return"100px";case"status":return"100px";case"company":return"120px";case"createdBy":return"100px";case"creationDate":return"120px";case"material":return"120px";case"size":return"100px";case"quantity":return"80px";case"chain":return"100px";case"personalization":return"130px";case"address":return"200px";case"note":return"150px";case"shop":return"120px";case"ioss":return"100px";case"vatCollected":return"100px";case"vatChf":return"100px";case"cut":return"60px";case"ready":return"60px";case"shipped":return"60px";case"tracking":return"120px";default:return"120px"}}};
  
  &:active {
    cursor: ${t=>t.draggable?"grabbing":"default"};
  }
  
  &:hover {
    background: #2a2a2a;
  }
  
  &:last-child {
    border-right: none;
  }
`,tF=ie.td`
  padding: 16px 12px;
  border-bottom: 1px solid #2a2a2a;
  border-right: 1px solid #2a2a2a;
  font-size: 14px;
  color: #e0e0e0;
  min-width: ${t=>{switch(t.columnId){case"checkbox":return"50px";case"orderId":return"120px";case"product":return"150px";case"customer":return"140px";case"email":return"180px";case"amount":return"100px";case"status":return"100px";case"company":return"120px";case"createdBy":return"100px";case"creationDate":return"120px";case"material":return"120px";case"size":return"100px";case"quantity":return"80px";case"chain":return"100px";case"personalization":return"130px";case"address":return"200px";case"note":return"150px";case"shop":return"120px";case"ioss":return"100px";case"vatCollected":return"100px";case"vatChf":return"100px";case"cut":return"60px";case"ready":return"60px";case"shipped":return"60px";case"tracking":return"120px";default:return"120px"}}};
  
  &:last-child {
    border-right: none;
  }
`,nF=ie.tr`
  &:hover {
    background: #3a3a3a;
  }
`;ie.input`
  width: 16px;
  height: 16px;
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  background: #2a2a2a;
  cursor: pointer;
`;const Ul=ie.button`
  width: 20px;
  height: 20px;
  border: 2px solid #3a3a3a;
  border-radius: 4px;
  background: ${t=>t.checked?"#10b981":"#2a2a2a"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #10b981;
    background: ${t=>t.checked?"#10b981":"#3a3a3a"};
  }
`,rF=ie.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: ${t=>{switch(t.status){case"pending":return"#667eea";case"cut":return"#f59e0b";case"ready":return"#10b981";case"shipped":return"#8b5cf6";default:return"#6b7280"}}};
`,iF=ie.span`
  color: #10b981;
  font-weight: 600;
  font-size: 14px;
`,px=ie.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${t=>t.color||"#667eea"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-right: 8px;
`,aF=t=>t?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t):"$0.00",oF=t=>{if(!t)return"N/A";try{const e=new Date(t),r=Math.abs(new Date-e),i=Math.ceil(r/(1e3*60*60*24));return i===1?"about 1 day ago":i<7?`about ${i} days ago`:i<30?`about ${Math.floor(i/7)} weeks ago`:e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return"N/A"}},Zt=(t,e=30)=>t?t.length>e?t.substring(0,e)+"...":t:"",sF=t=>{if(!t)return{type:"",material:"",size:""};const e=t.toLowerCase();let n="",r="",i="";e.includes("pendant")?n="Pendant":e.includes("necklace")?n="Necklace":e.includes("ring")?n="Ring":e.includes("bracelet")?n="Bracelet":e.includes("earring")?n="Earring":n="Order",e.includes("14k gold")||e.includes("14k solid gold")?r="14K Gold":e.includes("sterling silver")?r="Sterling Silver":e.includes("gold plated")?r="Gold Plated":e.includes("silver plated")?r="Silver Plated":r="Other";const a=t.match(/(\d+mm)/i);return a&&(i=a[1]),{type:n,material:r,size:i}},hx=t=>{if(!t)return"#667eea";const e=["#667eea","#f59e0b","#10b981","#8b5cf6","#ef4444","#06b6d4"],n=t.charCodeAt(0)%e.length;return e[n]};function lF({orders:t,onViewModeChange:e,viewMode:n}){const[r,i]=se.useState(""),[a,o]=se.useState([]),[s,l]=se.useState(!1),[u,f]=se.useState([{id:"checkbox",label:"",draggable:!1},{id:"orderId",label:"Order ID",draggable:!0},{id:"product",label:"Product",draggable:!0},{id:"customer",label:"Customer",draggable:!0},{id:"email",label:"Email",draggable:!0},{id:"amount",label:"Amount",draggable:!0},{id:"status",label:"Status",draggable:!0},{id:"company",label:"Company",draggable:!0},{id:"createdBy",label:"Created by",draggable:!0},{id:"creationDate",label:"Creation date",draggable:!0},{id:"material",label:"Material",draggable:!0},{id:"size",label:"Size",draggable:!0},{id:"quantity",label:"Quantity",draggable:!0},{id:"chain",label:"Chain",draggable:!0},{id:"personalization",label:"Personalization",draggable:!0},{id:"address",label:"Address",draggable:!0},{id:"note",label:"Note",draggable:!0},{id:"shop",label:"Shop",draggable:!0},{id:"ioss",label:"IOSS",draggable:!0},{id:"vatCollected",label:"VAT Collected",draggable:!0},{id:"vatChf",label:"VAT CHF",draggable:!0},{id:"cut",label:"Cut",draggable:!0},{id:"ready",label:"Ready",draggable:!0},{id:"shipped",label:"Shipped",draggable:!0},{id:"tracking",label:"Tracking",draggable:!0}]),d=t.filter(g=>{var v,y,_,S,M,A,b,E;return((y=(v=g.product)==null?void 0:v.name)==null?void 0:y.toLowerCase().includes(r.toLowerCase()))||((S=(_=g.customer)==null?void 0:_.name)==null?void 0:S.toLowerCase().includes(r.toLowerCase()))||((A=(M=g.customer)==null?void 0:M.email)==null?void 0:A.toLowerCase().includes(r.toLowerCase()))||((E=(b=g.shop)==null?void 0:b.name)==null?void 0:E.toLowerCase().includes(r.toLowerCase()))}),c=(g,v)=>{o(v?y=>[...y,g]:y=>y.filter(_=>_!==g))},p=g=>{if(!g.destination)return;const v=Array.from(u),[y]=v.splice(g.source.index,1);v.splice(g.destination.index,0,y),f(v)},x=g=>{e&&e(g),l(!1)},h=(g,v)=>{var S,M,A,b,E,R,H,Y,z,k,$,J,ee,N,q,G,le,P,F,V,I,L,ne,j,ce;sF((S=g.product)==null?void 0:S.name);const y=((M=g.transaction_id)==null?void 0:M.toString())||"0000",_=((A=g.customer)==null?void 0:A.name)||"Unknown Buyer";switch(v){case"checkbox":return T.jsx(Ul,{checked:a.includes(g.transaction_id),onClick:()=>c(g.transaction_id,!a.includes(g.transaction_id)),children:a.includes(g.transaction_id)?"✓":""});case"orderId":return T.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[T.jsx(px,{color:hx(y),children:y.slice(0,1)}),y]});case"product":return Zt((b=g.product)==null?void 0:b.name,25);case"customer":return T.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[T.jsx(px,{color:hx(_),children:_.slice(0,1)}),Zt(_,15)]});case"email":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((E=g.customer)==null?void 0:E.email,20)});case"amount":return T.jsx(iF,{children:aF((R=g.pricing)==null?void 0:R.order_total)});case"status":return T.jsx(rF,{status:g.status,children:g.status});case"company":return Zt((H=g.shop)==null?void 0:H.name,15);case"createdBy":return T.jsx("span",{style:{color:"#a0a0a0"},children:"API rest"});case"creationDate":return T.jsx("span",{style:{color:"#a0a0a0"},children:oF(g.order_date)});case"material":return Zt((Y=g.product)==null?void 0:Y.material_size,15);case"size":return Zt((z=g.product)==null?void 0:z.material_size,15);case"quantity":return((k=g.product)==null?void 0:k.quantity)||1;case"chain":return Zt(($=g.product)==null?void 0:$.chain_length,12);case"personalization":return Zt((J=g.product)==null?void 0:J.personalization,15);case"address":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((ee=g.customer)==null?void 0:ee.address,20)});case"note":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((N=g.customer)==null?void 0:N.note,15)});case"shop":return Zt((q=g.shop)==null?void 0:q.name,12);case"ioss":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((G=g.shop)==null?void 0:G.ioss_number,10)});case"vatCollected":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((le=g.vat)==null?void 0:le.vat_collected,8)});case"vatChf":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((P=g.vat)==null?void 0:P.vat_paid_chf,8)});case"cut":return T.jsx(Ul,{checked:(F=g.fulfillment)==null?void 0:F.cut,onClick:()=>{var ae;return m(g.transaction_id,"cut",!((ae=g.fulfillment)!=null&&ae.cut))},children:(V=g.fulfillment)!=null&&V.cut?"✓":""});case"ready":return T.jsx(Ul,{checked:(I=g.fulfillment)==null?void 0:I.ready,onClick:()=>{var ae;return m(g.transaction_id,"ready",!((ae=g.fulfillment)!=null&&ae.ready))},children:(L=g.fulfillment)!=null&&L.ready?"✓":""});case"shipped":return T.jsx(Ul,{checked:(ne=g.fulfillment)==null?void 0:ne.shipped,onClick:()=>{var ae;return m(g.transaction_id,"shipped",!((ae=g.fulfillment)!=null&&ae.shipped))},children:(j=g.fulfillment)!=null&&j.shipped?"✓":""});case"tracking":return T.jsx("span",{style:{color:"#a0a0a0"},children:Zt((ce=g.fulfillment)==null?void 0:ce.tracking_number,12)});default:return""}},m=async(g,v,y)=>{try{(await fetch(`/api/orders/${g}/fulfillment`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[v]:y})})).ok&&window.location.reload()}catch(_){console.error("Error updating status:",_)}};return T.jsxs(WO,{children:[T.jsxs(HO,{children:[T.jsxs(jO,{children:[T.jsx("div",{className:"title-icon",children:"📦"}),"Orders"]}),T.jsx($O,{children:"+ New record"})]}),T.jsxs(qO,{children:[T.jsxs(XO,{children:["All Orders • ",d.length]}),T.jsxs(YO,{children:[T.jsx(_f,{children:"Filter"}),T.jsx(_f,{children:"Sort"}),T.jsx(_f,{onClick:()=>l(!s),children:"Options ▼"}),T.jsxs(KO,{show:s,children:[T.jsx(ko,{onClick:()=>x("kanban"),children:"📋 Switch to Kanban View"}),T.jsx(ko,{onClick:()=>x("table"),children:"📊 Switch to Table View"}),T.jsx(fx,{}),T.jsx(ko,{children:"Export Data"}),T.jsx(ko,{children:"Import Data"}),T.jsx(fx,{}),T.jsx(ko,{children:"Settings"})]})]})]}),T.jsx(ZO,{children:T.jsx("input",{type:"text",placeholder:"🔍 Search orders...",value:r,onChange:g=>i(g.target.value)})}),T.jsx(QO,{children:T.jsxs(JO,{children:[T.jsx("thead",{children:T.jsx(dm,{onDragEnd:p,children:T.jsx(Ic,{droppableId:"headers",direction:"horizontal",children:g=>T.jsxs("tr",{...g.droppableProps,ref:g.innerRef,children:[u.map((v,y)=>T.jsx(pm,{draggableId:v.id,index:y,isDragDisabled:!v.draggable,children:(_,S)=>T.jsx(eF,{ref:_.innerRef,..._.draggableProps,..._.dragHandleProps,draggable:v.draggable,columnId:v.id,style:{..._.draggableProps.style,opacity:S.isDragging?.8:1,background:S.isDragging?"#3a3a3a":"#1f1f1f"},children:v.label})},v.id)),g.placeholder]})})})}),T.jsx("tbody",{children:d.map(g=>T.jsx(nF,{children:u.map(v=>T.jsx(tF,{columnId:v.id,children:h(g,v.id)},v.id))},g.transaction_id))})]})})]})}const uF=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,cF=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 20px 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #a0a0a0;
    margin: 0;
    font-size: 14px;
  }
`,dF=ie.div`
  display: flex;
  gap: 24px;
  padding: 30px;
  min-height: calc(100vh - 100px);
  overflow-x: auto;
  
  /* Custom scrollbar for horizontal scroll */
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #4a4a4a;
  }
`,fF=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  min-width: 320px;
  max-width: 320px;
  height: fit-content;
  max-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
`,pF=ie.div`
  padding: 20px;
  border-bottom: 1px solid #3a3a3a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .column-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .column-count {
    background: #3a3a3a;
    color: #a0a0a0;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  
  .add-button {
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    
    &:hover {
      background: #5a67d8;
    }
  }
`,hF=ie.div`
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  min-height: 200px;
  
  /* Custom scrollbar for task list */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #2a2a2a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4a4a4a;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #5a5a5a;
  }
`,mF=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #3a3a3a;
    border-color: #667eea;
  }
  
  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }
  
  .task-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .task-description {
    color: #a0a0a0;
    font-size: 12px;
    margin-bottom: 8px;
    line-height: 1.4;
  }
  
  .task-meta {
    display: flex;
    gap: 8px;
    font-size: 11px;
    color: #808080;
  }
  
  .task-priority {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .priority-high { background: #ef4444; color: white; }
  .priority-medium { background: #f59e0b; color: white; }
  .priority-low { background: #10b981; color: white; }
`;ie.div`
  padding: 40px 20px;
  text-align: center;
  color: #a0a0a0;
  font-size: 14px;
  font-style: italic;
`;const gF=ie.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,vF=ie.div`
  background: #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  border: 1px solid #3a3a3a;
`,bf=ie.input`
  width: 100%;
  padding: 12px;
  background: #1f1f1f;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 12px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,xF=ie.textarea`
  width: 100%;
  padding: 12px;
  background: #1f1f1f;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 12px;
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,yF=ie.select`
  width: 100%;
  padding: 12px;
  background: #1f1f1f;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 12px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,_F=ie.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`,Sf=ie.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  &.primary {
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a67d8;
    }
  }
  
  &.secondary {
    background: transparent;
    color: #a0a0a0;
    border: 1px solid #3a3a3a;
    
    &:hover {
      background: #3a3a3a;
      color: white;
    }
  }
  
  &.danger {
    background: #ef4444;
    color: white;
    
    &:hover {
      background: #dc2626;
    }
  }
`,bF=()=>{const[t,e]=se.useState({todo:[{id:"1",title:"Untitled",description:"Click to edit this task",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""}],inProgress:[],review:[],done:[{id:"4",title:"Untitled",description:"Click to edit this task",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""}]}),[n,r]=se.useState(null),[i,a]=se.useState(!1),o={todo:{title:"📋 To do",color:"#667eea"},inProgress:{title:"⚡ In progress",color:"#8b5cf6"},review:{title:"👀 Review",color:"#f59e0b"},done:{title:"✅ Done",color:"#10b981"}},s=c=>{if(!c.destination)return;const{source:p,destination:x}=c,h=p.droppableId,m=x.droppableId,g=[...t[h]],v=h===m?g:[...t[m]],[y]=g.splice(p.index,1);v.splice(x.index,0,y),e({...t,[h]:g,[m]:v})},l=c=>{const p={id:Date.now().toString(),title:"New Task",description:"Task description",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""};e({...t,[c]:[...t[c],p]})},u=c=>{r({...c}),a(!0)},f=()=>{if(!n)return;const c={};Object.keys(t).forEach(p=>{c[p]=t[p].map(x=>x.id===n.id?n:x)}),e(c),a(!1),r(null)},d=()=>{if(!n)return;const c={};Object.keys(t).forEach(p=>{c[p]=t[p].filter(x=>x.id!==n.id)}),e(c),a(!1),r(null)};return T.jsxs(uF,{children:[T.jsxs(cF,{children:[T.jsx("h1",{children:"Tasks"}),T.jsx("p",{children:"Manage your tasks and projects"})]}),T.jsx(dF,{children:T.jsx(dm,{onDragEnd:s,children:Object.entries(o).map(([c,p])=>T.jsx(Ic,{droppableId:c,children:(x,h)=>T.jsxs(fF,{ref:x.innerRef,...x.droppableProps,style:{borderColor:h.isDraggingOver?p.color:"#3a3a3a",background:h.isDraggingOver?"#2f2f2f":"#2a2a2a"},children:[T.jsxs(pF,{children:[T.jsx("div",{className:"column-title",children:p.title}),T.jsx("div",{className:"column-count",children:t[c].length}),T.jsx("button",{className:"add-button",onClick:()=>l(c),children:"+ New"})]}),T.jsxs(hF,{children:[t[c].map((m,g)=>T.jsx(pm,{draggableId:m.id,index:g,children:(v,y)=>T.jsx("div",{ref:v.innerRef,...v.draggableProps,...v.dragHandleProps,style:{...v.draggableProps.style,opacity:y.isDragging?.8:1},children:T.jsxs(mF,{onClick:()=>u(m),children:[T.jsxs("div",{className:"task-header",children:[T.jsx("div",{className:"task-title",children:m.title}),T.jsx("span",{className:`task-priority priority-${m.priority}`,children:m.priority})]}),T.jsx("div",{className:"task-description",children:m.description}),T.jsxs("div",{className:"task-meta",children:[T.jsxs("span",{children:["👤 ",m.assigned]}),T.jsxs("span",{children:["📅 ",m.createdAt]}),m.endDate&&T.jsxs("span",{children:["⏰ ",m.endDate]})]})]})})},m.id)),x.placeholder]})]})},c))})}),i&&T.jsx(gF,{onClick:()=>a(!1),children:T.jsxs(vF,{onClick:c=>c.stopPropagation(),children:[T.jsx("h3",{style:{marginBottom:"20px",color:"#ffffff"},children:"Edit Task"}),T.jsx(bf,{placeholder:"Task Title",value:(n==null?void 0:n.title)||"",onChange:c=>r({...n,title:c.target.value})}),T.jsx(xF,{placeholder:"Task Description",value:(n==null?void 0:n.description)||"",onChange:c=>r({...n,description:c.target.value})}),T.jsxs(yF,{value:(n==null?void 0:n.priority)||"medium",onChange:c=>r({...n,priority:c.target.value}),children:[T.jsx("option",{value:"low",children:"Low Priority"}),T.jsx("option",{value:"medium",children:"Medium Priority"}),T.jsx("option",{value:"high",children:"High Priority"})]}),T.jsx(bf,{placeholder:"Assigned To",value:(n==null?void 0:n.assigned)||"",onChange:c=>r({...n,assigned:c.target.value})}),T.jsx(bf,{type:"date",placeholder:"End Date",value:(n==null?void 0:n.endDate)||"",onChange:c=>r({...n,endDate:c.target.value})}),T.jsxs(_F,{children:[T.jsx(Sf,{className:"danger",onClick:d,children:"Delete"}),T.jsx(Sf,{className:"secondary",onClick:()=>a(!1),children:"Cancel"}),T.jsx(Sf,{className:"primary",onClick:f,children:"Save"})]})]})})]})},SF=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,wF=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 20px 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #a0a0a0;
    margin: 0;
    font-size: 14px;
  }
`,MF=ie.div`
  padding: 30px;
`,EF=ie.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 20px;
  min-height: calc(100vh - 200px);
`,CF=ie.div`
  background: #2a2a2a;
  padding: 15px;
  text-align: center;
  color: #a0a0a0;
  font-weight: 600;
  font-size: 14px;
`,TF=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 16px;
  min-height: 120px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    background: #3a3a3a;
    border-color: #667eea;
  }
  
  .day-number {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
  }
  
  .note {
    font-size: 12px;
    color: #a0a0a0;
    background: #1f1f1f;
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: auto;
    word-break: break-word;
  }
`,DF=ie.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,AF=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 30px;
  width: 400px;
  max-width: 90vw;
  
  h3 {
    color: white;
    margin: 0 0 20px 0;
    font-size: 18px;
  }
  
  textarea {
    width: 100%;
    height: 120px;
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 12px;
    color: white;
    font-size: 14px;
    resize: vertical;
    margin-bottom: 20px;
    
    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
  
  .modal-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
`,mx=ie.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a67d8;
    }
  }
  
  &.secondary {
    background: #3a3a3a;
    color: #a0a0a0;
    
    &:hover {
      background: #4a4a4a;
      color: white;
    }
  }
`,PF=()=>{const[t,e]=se.useState({}),[n,r]=se.useState(null),[i,a]=se.useState(!1),o=Array.from({length:30},(d,c)=>c+1),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d=>{r(d),a(!0)},u=()=>{n&&e(d=>({...d,[n]:document.getElementById("note-textarea").value})),a(!1),r(null)},f=()=>{a(!1),r(null)};return T.jsxs(SF,{children:[T.jsxs(wF,{children:[T.jsx("h1",{children:"Calendar"}),T.jsx("p",{children:"30-day calendar view with notes"})]}),T.jsx(MF,{children:T.jsxs(EF,{children:[s.map(d=>T.jsx(CF,{children:d},d)),o.map(d=>T.jsxs(TF,{onClick:()=>l(d),children:[T.jsx("div",{className:"day-number",children:d}),t[d]&&T.jsx("div",{className:"note",children:t[d]})]},d))]})}),i&&T.jsx(DF,{children:T.jsxs(AF,{children:[T.jsxs("h3",{children:["Add Note for Day ",n]}),T.jsx("textarea",{id:"note-textarea",placeholder:"Enter your note here...",defaultValue:t[n]||""}),T.jsxs("div",{className:"modal-actions",children:[T.jsx(mx,{className:"secondary",onClick:f,children:"Cancel"}),T.jsx(mx,{className:"primary",onClick:u,children:"Save Note"})]})]})})]})},RF=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,LF=ie.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 20px 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  p {
    color: #a0a0a0;
    margin: 0;
    font-size: 14px;
  }
`,IF=ie.div`
  padding: 30px;
  height: calc(100vh - 100px);
`,NF=ie.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,kF=ie.div`
  padding: 20px;
  border-bottom: 1px solid #3a3a3a;
  
  h3 {
    color: white;
    margin: 0;
    font-size: 18px;
  }
  
  .status {
    color: #10b981;
    font-size: 12px;
    margin-top: 5px;
  }
`,OF=ie.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #2a2a2a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4a4a4a;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #5a5a5a;
  }
`,FF=ie.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  
  &.own {
    flex-direction: row-reverse;
    
    .message-content {
      background: #667eea;
      color: white;
    }
  }
`,zF=ie.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${t=>t.color||"#667eea"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
`,BF=ie.div`
  background: #3a3a3a;
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  max-width: 70%;
  word-wrap: break-word;
  
  .message-text {
    margin: 0;
    line-height: 1.4;
  }
  
  .message-time {
    font-size: 11px;
    color: #a0a0a0;
    margin-top: 5px;
  }
`,UF=ie.div`
  padding: 20px;
  border-top: 1px solid #3a3a3a;
  display: flex;
  gap: 10px;
`,GF=ie.input`
  flex: 1;
  background: #1a1a1a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`,VF=ie.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #5a67d8;
  }
  
  &:disabled {
    background: #3a3a3a;
    color: #a0a0a0;
    cursor: not-allowed;
  }
`,WF=()=>{const[t,e]=se.useState([{id:1,text:"Merhaba! Etsy siparişlerinizle ilgili yardıma ihtiyacınız var mı?",sender:"support",time:"10:30",own:!1},{id:2,text:"Evet, sipariş durumunu kontrol etmek istiyorum.",sender:"user",time:"10:32",own:!0}]),[n,r]=se.useState(""),i=()=>{if(n.trim()){const o={id:t.length+1,text:n,sender:"user",time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),own:!0};e([...t,o]),r(""),setTimeout(()=>{const s={id:t.length+2,text:"Sipariş durumunuzu kontrol ediyorum. Lütfen bekleyin...",sender:"support",time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),own:!1};e(l=>[...l,s])},1e3)}},a=o=>{o.key==="Enter"&&i()};return T.jsxs(RF,{children:[T.jsxs(LF,{children:[T.jsx("h1",{children:"Chat"}),T.jsx("p",{children:"Customer support and messaging"})]}),T.jsx(IF,{children:T.jsxs(NF,{children:[T.jsxs(kF,{children:[T.jsx("h3",{children:"Etsy Support"}),T.jsx("div",{className:"status",children:"🟢 Online"})]}),T.jsx(OF,{children:t.map(o=>T.jsxs(FF,{className:o.own?"own":"",children:[T.jsx(zF,{color:o.own?"#667eea":"#10b981",children:o.sender==="user"?"U":"S"}),T.jsxs(BF,{className:"message-content",children:[T.jsx("p",{className:"message-text",children:o.text}),T.jsx("div",{className:"message-time",children:o.time})]})]},o.id))}),T.jsxs(UF,{children:[T.jsx(GF,{type:"text",placeholder:"Mesajınızı yazın...",value:n,onChange:o=>r(o.target.value),onKeyPress:a}),T.jsx(VF,{onClick:i,disabled:!n.trim(),children:"Gönder"})]})]})})]})},gx=ie.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
`,HF=ie.div`
  flex: 1;
  margin-left: ${t=>t.sidebarCollapsed?"60px":"250px"};
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  transition: margin-left 0.3s ease;
  /* Custom scrollbar styles */
  &::-webkit-scrollbar { 
    width: 8px; 
  }
  &::-webkit-scrollbar-track { 
    background: #1a1a1a; 
  }
  &::-webkit-scrollbar-thumb { 
    background: #3a3a3a; 
    border-radius: 4px; 
  }
  &::-webkit-scrollbar-thumb:hover { 
    background: #4a4a4a; 
  }
  
  /* Remove any default margins/padding */
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`;function jF(){const[t,e]=se.useState([]),[n,r]=se.useState(!0),[i,a]=se.useState("dashboard"),[o,s]=se.useState("kanban"),[l,u]=se.useState(!1);se.useEffect(()=>{(async()=>{try{const x=await(await fetch("/api/orders")).json();e(x)}catch(p){console.error("Error fetching orders:",p)}finally{r(!1)}})()},[]);const f=c=>{u(c)},d=()=>{switch(i){case"dashboard":return T.jsx(Zv,{orders:t});case"orders":return T.jsx(T.Fragment,{children:o==="kanban"?T.jsx(VO,{orders:t}):T.jsx(lF,{orders:t,onViewModeChange:s,viewMode:o})});case"tasks":return T.jsx(bF,{});case"calendar":return T.jsx(PF,{});case"chat":return T.jsx(WF,{});default:return T.jsx(Zv,{orders:t})}};return n?T.jsx(gx,{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1.2rem"},children:"📊 Veriler yükleniyor..."}):T.jsxs(gx,{children:[T.jsx(kE,{activePage:i,onPageChange:a,onStateChange:f}),T.jsx(HF,{sidebarCollapsed:l,children:d()})]})}const $F=document.getElementById("root"),qF=A_($F);qF.render(T.jsx(Ke.StrictMode,{children:T.jsx(jF,{})}));
