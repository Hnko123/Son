(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function gr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z0={exports:{}},Nu={},Q0={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),Rb=Symbol.for("react.portal"),Lb=Symbol.for("react.fragment"),Ib=Symbol.for("react.strict_mode"),Nb=Symbol.for("react.profiler"),kb=Symbol.for("react.provider"),Ob=Symbol.for("react.context"),Fb=Symbol.for("react.forward_ref"),zb=Symbol.for("react.suspense"),Bb=Symbol.for("react.memo"),Ub=Symbol.for("react.lazy"),rm=Symbol.iterator;function Gb(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var J0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ex=Object.assign,tx={};function ro(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||J0}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nx(){}nx.prototype=ro.prototype;function wp(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||J0}var Mp=wp.prototype=new nx;Mp.constructor=wp;ex(Mp,ro.prototype);Mp.isPureReactComponent=!0;var im=Array.isArray,rx=Object.prototype.hasOwnProperty,Ep={current:null},ix={key:!0,ref:!0,__self:!0,__source:!0};function ax(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)rx.call(e,r)&&!ix.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:_s,type:t,key:a,ref:o,props:i,_owner:Ep.current}}function Vb(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function Wb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var am=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wb(""+t.key):e.toString(36)}function kl(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case Rb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rc(o,0):r,im(i)?(n="",t!=null&&(n=t.replace(am,"$&/")+"/"),kl(i,e,n,"",function(u){return u})):i!=null&&(Cp(i)&&(i=Vb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",im(t))for(var s=0;s<t.length;s++){a=t[s];var l=r+Rc(a,s);o+=kl(a,e,n,l,i)}else if(l=Gb(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=r+Rc(a,s++),o+=kl(a,e,n,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gs(t,e,n){if(t==null)return t;var r=[],i=0;return kl(t,r,"","",function(a){return e.call(n,a,i++)}),r}function Hb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Ol={transition:null},jb={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Ep};function ox(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Gs,forEach:function(t,e,n){Gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gs(t,function(){e++}),e},toArray:function(t){return Gs(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=ro;ze.Fragment=Lb;ze.Profiler=Nb;ze.PureComponent=wp;ze.StrictMode=Ib;ze.Suspense=zb;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jb;ze.act=ox;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ex({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)rx.call(e,l)&&!ix.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:_s,type:t.type,key:i,ref:a,props:r,_owner:o}};ze.createContext=function(t){return t={$$typeof:Ob,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kb,_context:t},t.Consumer=t};ze.createElement=ax;ze.createFactory=function(t){var e=ax.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Fb,render:t}};ze.isValidElement=Cp;ze.lazy=function(t){return{$$typeof:Ub,_payload:{_status:-1,_result:t},_init:Hb}};ze.memo=function(t,e){return{$$typeof:Bb,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};ze.unstable_act=ox;ze.useCallback=function(t,e){return nn.current.useCallback(t,e)};ze.useContext=function(t){return nn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return nn.current.useEffect(t,e)};ze.useId=function(){return nn.current.useId()};ze.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return nn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};ze.useRef=function(t){return nn.current.useRef(t)};ze.useState=function(t){return nn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return nn.current.useTransition()};ze.version="18.3.1";Q0.exports=ze;var se=Q0.exports;const Ke=gr(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $b=se,qb=Symbol.for("react.element"),Xb=Symbol.for("react.fragment"),Yb=Object.prototype.hasOwnProperty,Kb=$b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zb={key:!0,ref:!0,__self:!0,__source:!0};function sx(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Yb.call(e,r)&&!Zb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qb,type:t,key:a,ref:o,props:i,_owner:Kb.current}}Nu.Fragment=Xb;Nu.jsx=sx;Nu.jsxs=sx;Z0.exports=Nu;var U=Z0.exports,lx={exports:{}},An={},ux={exports:{}},cx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,q){var G=I.length;I.push(q);e:for(;0<G;){var oe=G-1>>>1,A=I[oe];if(0<i(A,q))I[oe]=q,I[G]=A,G=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var q=I[0],G=I.pop();if(G!==q){I[0]=G;e:for(var oe=0,A=I.length,O=A>>>1;oe<O;){var V=2*(oe+1)-1,L=I[V],R=V+1,ne=I[R];if(0>i(L,G))R<A&&0>i(ne,L)?(I[oe]=ne,I[R]=G,oe=R):(I[oe]=L,I[V]=G,oe=V);else if(R<A&&0>i(ne,G))I[oe]=ne,I[R]=G,oe=R;else break e}}return q}function i(I,q){var G=I.sortIndex-q.sortIndex;return G!==0?G:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],f=1,d=null,c=3,p=!1,g=!1,h=!1,m=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=I)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function _(I){if(h=!1,y(I),!g)if(n(l)!==null)g=!0,J(b);else{var q=n(u);q!==null&&ee(_,q.startTime-I)}}function b(I,q){g=!1,h&&(h=!1,v(S),S=-1),p=!0;var G=c;try{for(y(q),d=n(l);d!==null&&(!(d.expirationTime>q)||I&&!H());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,c=d.priorityLevel;var A=oe(d.expirationTime<=q);q=t.unstable_now(),typeof A=="function"?d.callback=A:d===n(l)&&r(l),y(q)}else r(l);d=n(l)}if(d!==null)var O=!0;else{var V=n(u);V!==null&&ee(_,V.startTime-q),O=!1}return O}finally{d=null,c=G,p=!1}}var M=!1,D=null,S=-1,E=5,P=-1;function H(){return!(t.unstable_now()-P<E)}function Y(){if(D!==null){var I=t.unstable_now();P=I;var q=!0;try{q=D(!0,I)}finally{q?F():(M=!1,D=null)}}else M=!1}var F;if(typeof x=="function")F=function(){x(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,$=N.port2;N.port1.onmessage=Y,F=function(){$.postMessage(null)}}else F=function(){m(Y,0)};function J(I){D=I,M||(M=!0,F())}function ee(I,q){S=m(function(){I(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,J(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(c){case 1:case 2:case 3:var q=3;break;default:q=c}var G=c;c=q;try{return I()}finally{c=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=c;c=I;try{return q()}finally{c=G}},t.unstable_scheduleCallback=function(I,q,G){var oe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?oe+G:oe):G=oe,I){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=G+A,I={id:f++,callback:q,priorityLevel:I,startTime:G,expirationTime:A,sortIndex:-1},G>oe?(I.sortIndex=G,e(u,I),n(l)===null&&I===n(u)&&(h?(v(S),S=-1):h=!0,ee(_,G-oe))):(I.sortIndex=A,e(l,I),g||p||(g=!0,J(b))),I},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(I){var q=c;return function(){var G=c;c=q;try{return I.apply(this,arguments)}finally{c=G}}}})(cx);ux.exports=cx;var Qb=ux.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jb=se,Dn=Qb;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,Xo={};function Ki(t,e){Ua(t,e),Ua(t+"Capture",e)}function Ua(t,e){for(Xo[t]=e,t=0;t<e.length;t++)dx.add(e[t])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,e1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},sm={};function t1(t){return ff.call(sm,t)?!0:ff.call(om,t)?!1:e1.test(t)?sm[t]=!0:(om[t]=!0,!1)}function n1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r1(t,e,n,r){if(e===null||typeof e>"u"||n1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tp=/[\-:]([a-z])/g;function Dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tp,Dp);Ft[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tp,Dp);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tp,Dp);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ap(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r1(e,n,i,r)&&(n=null),r||i===null?t1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zr=Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),va=Symbol.for("react.portal"),xa=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),px=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),Lp=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),hx=Symbol.for("react.offscreen"),lm=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Lc;function Po(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Ic=!1;function Nc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Po(t):""}function i1(t){switch(t.tag){case 5:return Po(t.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xa:return"Fragment";case va:return"Portal";case pf:return"Profiler";case Pp:return"StrictMode";case hf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case px:return(t.displayName||"Context")+".Consumer";case fx:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lp:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function a1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o1(t){var e=mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ws(t){t._valueTracker||(t._valueTracker=o1(t))}function gx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function um(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&Ap(t,"checked",e,!1)}function xf(t,e){vx(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yf(t,e.type,n):e.hasOwnProperty("defaultValue")&&yf(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Ra(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ro(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function xx(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,_x=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function bx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var l1=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(l1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,La=null,Ia=null;function pm(t){if(t=ws(t)){if(typeof Ef!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Bu(e),Ef(t.stateNode,t.type,e))}}function wx(t){La?Ia?Ia.push(t):Ia=[t]:La=t}function Mx(){if(La){var t=La,e=Ia;if(Ia=La=null,pm(t),e)for(t=0;t<e.length;t++)pm(e[t])}}function Ex(t,e){return t(e)}function Cx(){}var kc=!1;function Tx(t,e,n){if(kc)return t(e,n);kc=!0;try{return Ex(t,e,n)}finally{kc=!1,(La!==null||Ia!==null)&&(Cx(),Mx())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Cf=!1;if(Nr)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Cf=!1}function u1(t,e,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Fo=!1,Zl=null,Ql=!1,Tf=null,c1={onError:function(t){Fo=!0,Zl=t}};function d1(t,e,n,r,i,a,o,s,l){Fo=!1,Zl=null,u1.apply(c1,arguments)}function f1(t,e,n,r,i,a,o,s,l){if(d1.apply(this,arguments),Fo){if(Fo){var u=Zl;Fo=!1,Zl=null}else throw Error(ie(198));Ql||(Ql=!0,Tf=u)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(Zi(t)!==t)throw Error(ie(188))}function p1(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return hm(i),t;if(a===r)return hm(i),e;a=a.sibling}throw Error(ie(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==r)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Ax(t){return t=p1(t),t!==null?Px(t):null}function Px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Px(t);if(e!==null)return e;t=t.sibling}return null}var Rx=Dn.unstable_scheduleCallback,mm=Dn.unstable_cancelCallback,h1=Dn.unstable_shouldYield,m1=Dn.unstable_requestPaint,ht=Dn.unstable_now,g1=Dn.unstable_getCurrentPriorityLevel,Np=Dn.unstable_ImmediatePriority,Lx=Dn.unstable_UserBlockingPriority,Jl=Dn.unstable_NormalPriority,v1=Dn.unstable_LowPriority,Ix=Dn.unstable_IdlePriority,ku=null,fr=null;function x1(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(ku,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:S1,y1=Math.log,_1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(y1(t)/_1|0)|0}var js=64,$s=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Lo(s):(a&=o,a!==0&&(r=Lo(a)))}else o=n&~i,o!==0?r=Lo(o):a!==0&&(r=Lo(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function b1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Jn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=b1(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nx(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ss(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ze=0;function kx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ox,Op,Fx,zx,Bx,Af=!1,qs=[],Jr=null,ei=null,ti=null,Zo=new Map,Qo=new Map,qr=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function mo(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=ws(e),e!==null&&Op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function C1(t,e,n,r,i){switch(e){case"focusin":return Jr=mo(Jr,t,e,n,r,i),!0;case"dragenter":return ei=mo(ei,t,e,n,r,i),!0;case"mouseover":return ti=mo(ti,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return Zo.set(a,mo(Zo.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Qo.set(a,mo(Qo.get(a)||null,t,e,n,r,i)),!0}return!1}function Ux(t){var e=Li(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=Dx(n),e!==null){t.blockedOn=e,Bx(t.priority,function(){Fx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mf=r,n.target.dispatchEvent(r),Mf=null}else return e=ws(n),e!==null&&Op(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){Fl(t)&&n.delete(e)}function T1(){Af=!1,Jr!==null&&Fl(Jr)&&(Jr=null),ei!==null&&Fl(ei)&&(ei=null),ti!==null&&Fl(ti)&&(ti=null),Zo.forEach(vm),Qo.forEach(vm)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,Af||(Af=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,T1)))}function Jo(t){function e(i){return go(i,t)}if(0<qs.length){go(qs[0],t);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&go(Jr,t),ei!==null&&go(ei,t),ti!==null&&go(ti,t),Zo.forEach(e),Qo.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)Ux(n),n.blockedOn===null&&qr.shift()}var Na=zr.ReactCurrentBatchConfig,tu=!0;function D1(t,e,n,r){var i=Ze,a=Na.transition;Na.transition=null;try{Ze=1,Fp(t,e,n,r)}finally{Ze=i,Na.transition=a}}function A1(t,e,n,r){var i=Ze,a=Na.transition;Na.transition=null;try{Ze=4,Fp(t,e,n,r)}finally{Ze=i,Na.transition=a}}function Fp(t,e,n,r){if(tu){var i=Pf(t,e,n,r);if(i===null)$c(t,e,r,nu,n),gm(t,r);else if(C1(i,t,e,n,r))r.stopPropagation();else if(gm(t,r),e&4&&-1<E1.indexOf(t)){for(;i!==null;){var a=ws(i);if(a!==null&&Ox(a),a=Pf(t,e,n,r),a===null&&$c(t,e,r,nu,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var nu=null;function Pf(t,e,n,r){if(nu=null,t=Ip(r),t=Li(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nu=t,null}function Gx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g1()){case Np:return 1;case Lx:return 4;case Jl:case v1:return 16;case Ix:return 536870912;default:return 16}default:return 16}}var Yr=null,zp=null,zl=null;function Vx(){if(zl)return zl;var t,e=zp,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xs(){return!0}function xm(){return!1}function Pn(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Xs:xm,this.isPropagationStopped=xm,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bp=Pn(io),bs=dt({},io,{view:0,detail:0}),P1=Pn(bs),Fc,zc,vo,Ou=dt({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Fc=t.screenX-vo.screenX,zc=t.screenY-vo.screenY):zc=Fc=0,vo=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),ym=Pn(Ou),R1=dt({},Ou,{dataTransfer:0}),L1=Pn(R1),I1=dt({},bs,{relatedTarget:0}),Bc=Pn(I1),N1=dt({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=Pn(N1),O1=dt({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F1=Pn(O1),z1=dt({},io,{data:0}),_m=Pn(z1),B1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G1[t])?!!e[t]:!1}function Up(){return V1}var W1=dt({},bs,{key:function(t){if(t.key){var e=B1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H1=Pn(W1),j1=dt({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Pn(j1),$1=dt({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),q1=Pn($1),X1=dt({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=Pn(X1),K1=dt({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Pn(K1),Q1=[9,13,27,32],Gp=Nr&&"CompositionEvent"in window,zo=null;Nr&&"documentMode"in document&&(zo=document.documentMode);var J1=Nr&&"TextEvent"in window&&!zo,Wx=Nr&&(!Gp||zo&&8<zo&&11>=zo),bm=" ",wm=!1;function Hx(t,e){switch(t){case"keyup":return Q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ya=!1;function ew(t,e){switch(t){case"compositionend":return jx(e);case"keypress":return e.which!==32?null:(wm=!0,bm);case"textInput":return t=e.data,t===bm&&wm?null:t;default:return null}}function tw(t,e){if(ya)return t==="compositionend"||!Gp&&Hx(t,e)?(t=Vx(),zl=zp=Yr=null,ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wx&&e.locale!=="ko"?null:e.data;default:return null}}var nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nw[t.type]:e==="textarea"}function $x(t,e,n,r){wx(r),e=ru(e,"onChange"),0<e.length&&(n=new Bp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bo=null,es=null;function rw(t){ry(t,0)}function Fu(t){var e=ba(t);if(gx(e))return t}function iw(t,e){if(t==="change")return e}var qx=!1;if(Nr){var Uc;if(Nr){var Gc="oninput"in document;if(!Gc){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),Gc=typeof Em.oninput=="function"}Uc=Gc}else Uc=!1;qx=Uc&&(!document.documentMode||9<document.documentMode)}function Cm(){Bo&&(Bo.detachEvent("onpropertychange",Xx),es=Bo=null)}function Xx(t){if(t.propertyName==="value"&&Fu(es)){var e=[];$x(e,es,t,Ip(t)),Tx(rw,e)}}function aw(t,e,n){t==="focusin"?(Cm(),Bo=e,es=n,Bo.attachEvent("onpropertychange",Xx)):t==="focusout"&&Cm()}function ow(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(es)}function sw(t,e){if(t==="click")return Fu(e)}function lw(t,e){if(t==="input"||t==="change")return Fu(e)}function uw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tr=typeof Object.is=="function"?Object.is:uw;function ts(t,e){if(tr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(e,i)||!tr(t[i],e[i]))return!1}return!0}function Tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=Tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tm(n)}}function Yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kx(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cw(t){var e=Kx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yx(n.ownerDocument.documentElement,n)){if(r!==null&&Vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=Dm(n,a);var o=Dm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dw=Nr&&"documentMode"in document&&11>=document.documentMode,_a=null,Rf=null,Uo=null,Lf=!1;function Am(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||_a==null||_a!==Kl(r)||(r=_a,"selectionStart"in r&&Vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&ts(Uo,r)||(Uo=r,r=ru(Rf,"onSelect"),0<r.length&&(e=new Bp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_a)))}function Ys(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Sa={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},Vc={},Zx={};Nr&&(Zx=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function zu(t){if(Vc[t])return Vc[t];if(!Sa[t])return t;var e=Sa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zx)return Vc[t]=e[n];return t}var Qx=zu("animationend"),Jx=zu("animationiteration"),ey=zu("animationstart"),ty=zu("transitionend"),ny=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){ny.set(t,e),Ki(e,[t])}for(var Wc=0;Wc<Pm.length;Wc++){var Hc=Pm[Wc],fw=Hc.toLowerCase(),pw=Hc[0].toUpperCase()+Hc.slice(1);mi(fw,"on"+pw)}mi(Qx,"onAnimationEnd");mi(Jx,"onAnimationIteration");mi(ey,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(ty,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function Rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f1(r,e,void 0,t),t.currentTarget=null}function ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Rm(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Rm(i,s,u),a=l}}}if(Ql)throw t=Tf,Ql=!1,Tf=null,t}function rt(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(iy(e,t,2,!1),n.add(r))}function jc(t,e,n){var r=0;e&&(r|=4),iy(n,t,r,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[Ks]){t[Ks]=!0,dx.forEach(function(n){n!=="selectionchange"&&(hw.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,jc("selectionchange",!1,e))}}function iy(t,e,n,r){switch(Gx(e)){case 1:var i=D1;break;case 4:i=A1;break;default:i=Fp}n=i.bind(null,e,n,t),i=void 0,!Cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Li(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Tx(function(){var u=a,f=Ip(n),d=[];e:{var c=ny.get(t);if(c!==void 0){var p=Bp,g=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":p=H1;break;case"focusin":g="focus",p=Bc;break;case"focusout":g="blur",p=Bc;break;case"beforeblur":case"afterblur":p=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=q1;break;case Qx:case Jx:case ey:p=k1;break;case ty:p=Y1;break;case"scroll":p=P1;break;case"wheel":p=Z1;break;case"copy":case"cut":case"paste":p=F1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sm}var h=(e&4)!==0,m=!h&&t==="scroll",v=h?c!==null?c+"Capture":null:c;h=[];for(var x=u,y;x!==null;){y=x;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=Ko(x,v),_!=null&&h.push(rs(x,_,y)))),m)break;x=x.return}0<h.length&&(c=new p(c,g,null,n,f),d.push({event:c,listeners:h}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==Mf&&(g=n.relatedTarget||n.fromElement)&&(Li(g)||g[kr]))break e;if((p||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Li(g):null,g!==null&&(m=Zi(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(h=ym,_="onMouseLeave",v="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(h=Sm,_="onPointerLeave",v="onPointerEnter",x="pointer"),m=p==null?c:ba(p),y=g==null?c:ba(g),c=new h(_,x+"leave",p,n,f),c.target=m,c.relatedTarget=y,_=null,Li(f)===u&&(h=new h(v,x+"enter",g,n,f),h.target=y,h.relatedTarget=m,_=h),m=_,p&&g)t:{for(h=p,v=g,x=0,y=h;y;y=ea(y))x++;for(y=0,_=v;_;_=ea(_))y++;for(;0<x-y;)h=ea(h),x--;for(;0<y-x;)v=ea(v),y--;for(;x--;){if(h===v||v!==null&&h===v.alternate)break t;h=ea(h),v=ea(v)}h=null}else h=null;p!==null&&Lm(d,c,p,h,!1),g!==null&&m!==null&&Lm(d,m,g,h,!0)}}e:{if(c=u?ba(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var b=iw;else if(Mm(c))if(qx)b=lw;else{b=ow;var M=aw}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(b=sw);if(b&&(b=b(t,u))){$x(d,b,n,f);break e}M&&M(t,c,u),t==="focusout"&&(M=c._wrapperState)&&M.controlled&&c.type==="number"&&yf(c,"number",c.value)}switch(M=u?ba(u):window,t){case"focusin":(Mm(M)||M.contentEditable==="true")&&(_a=M,Rf=u,Uo=null);break;case"focusout":Uo=Rf=_a=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Am(d,n,f);break;case"selectionchange":if(dw)break;case"keydown":case"keyup":Am(d,n,f)}var D;if(Gp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ya?Hx(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Wx&&n.locale!=="ko"&&(ya||S!=="onCompositionStart"?S==="onCompositionEnd"&&ya&&(D=Vx()):(Yr=f,zp="value"in Yr?Yr.value:Yr.textContent,ya=!0)),M=ru(u,S),0<M.length&&(S=new _m(S,t,null,n,f),d.push({event:S,listeners:M}),D?S.data=D:(D=jx(n),D!==null&&(S.data=D)))),(D=J1?ew(t,n):tw(t,n))&&(u=ru(u,"onBeforeInput"),0<u.length&&(f=new _m("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=D))}ry(d,e)})}function rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ko(t,n),a!=null&&r.unshift(rs(t,a,i)),a=Ko(t,e),a!=null&&r.push(rs(t,a,i))),t=t.return}return r}function ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Ko(n,a),l!=null&&o.unshift(rs(n,l,s))):i||(l=Ko(n,a),l!=null&&o.push(rs(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function Im(t){return(typeof t=="string"?t:""+t).replace(mw,`
`).replace(gw,"")}function Zs(t,e,n){if(e=Im(e),Im(t)!==e&&n)throw Error(ie(425))}function iu(){}var If=null,Nf=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(t){return Nm.resolve(null).then(t).catch(yw)}:Of;function yw(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),cr="__reactFiber$"+ao,is="__reactProps$"+ao,kr="__reactContainer$"+ao,Ff="__reactEvents$"+ao,_w="__reactListeners$"+ao,Sw="__reactHandles$"+ao;function Li(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=km(t);t!==null;){if(n=t[cr])return n;t=km(t)}return e}t=n,n=t.parentNode}return null}function ws(t){return t=t[cr]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ba(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Bu(t){return t[is]||null}var zf=[],wa=-1;function gi(t){return{current:t}}function at(t){0>wa||(t.current=zf[wa],zf[wa]=null,wa--)}function et(t,e){wa++,zf[wa]=t.current,t.current=e}var pi={},$t=gi(pi),un=gi(!1),Ui=pi;function Ga(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function cn(t){return t=t.childContextTypes,t!=null}function au(){at(un),at($t)}function Om(t,e,n){if($t.current!==pi)throw Error(ie(168));et($t,e),et(un,n)}function ay(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ie(108,a1(t)||"Unknown",i));return dt({},n,r)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Ui=$t.current,et($t,t),et(un,un.current),!0}function Fm(t,e,n){var r=t.stateNode;if(!r)throw Error(ie(169));n?(t=ay(t,e,Ui),r.__reactInternalMemoizedMergedChildContext=t,at(un),at($t),et($t,t)):at(un),et(un,n)}var Er=null,Uu=!1,Xc=!1;function oy(t){Er===null?Er=[t]:Er.push(t)}function bw(t){Uu=!0,oy(t)}function vi(){if(!Xc&&Er!==null){Xc=!0;var t=0,e=Ze;try{var n=Er;for(Ze=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,Uu=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),Rx(Np,vi),i}finally{Ze=e,Xc=!1}}return null}var Ma=[],Ea=0,su=null,lu=0,On=[],Fn=0,Gi=null,Tr=1,Dr="";function Ci(t,e){Ma[Ea++]=lu,Ma[Ea++]=su,su=t,lu=e}function sy(t,e,n){On[Fn++]=Tr,On[Fn++]=Dr,On[Fn++]=Gi,Gi=t;var r=Tr;t=Dr;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var a=32-Jn(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-Jn(e)+i|n<<i|r,Dr=a+t}else Tr=1<<a|n<<i|r,Dr=t}function Wp(t){t.return!==null&&(Ci(t,1),sy(t,1,0))}function Hp(t){for(;t===su;)su=Ma[--Ea],Ma[Ea]=null,lu=Ma[--Ea],Ma[Ea]=null;for(;t===Gi;)Gi=On[--Fn],On[Fn]=null,Dr=On[--Fn],On[Fn]=null,Tr=On[--Fn],On[Fn]=null}var Sn=null,_n=null,ot=!1,Kn=null;function ly(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,_n=ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:Tr,overflow:Dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,_n=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(ot){var e=_n;if(e){var n=e;if(!zm(t,e)){if(Bf(t))throw Error(ie(418));e=ni(n.nextSibling);var r=Sn;e&&zm(t,e)?ly(r,n):(t.flags=t.flags&-4097|2,ot=!1,Sn=t)}}else{if(Bf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ot=!1,Sn=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Qs(t){if(t!==Sn)return!1;if(!ot)return Bm(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=_n)){if(Bf(t))throw uy(),Error(ie(418));for(;e;)ly(t,e),e=ni(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=Sn?ni(t.stateNode.nextSibling):null;return!0}function uy(){for(var t=_n;t;)t=ni(t.nextSibling)}function Va(){_n=Sn=null,ot=!1}function jp(t){Kn===null?Kn=[t]:Kn.push(t)}var ww=zr.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var r=n.stateNode}if(!r)throw Error(ie(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Js(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function cy(t){function e(v,x){if(t){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function n(v,x){if(!t)return null;for(;x!==null;)e(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(v,x){return v=oi(v,x),v.index=0,v.sibling=null,v}function a(v,x,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,x,y,_){return x===null||x.tag!==6?(x=td(y,v.mode,_),x.return=v,x):(x=i(x,y),x.return=v,x)}function l(v,x,y,_){var b=y.type;return b===xa?f(v,x,y.props.children,_,y.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jr&&Um(b)===x.type)?(_=i(x,y.props),_.ref=xo(v,x,y),_.return=v,_):(_=$l(y.type,y.key,y.props,null,v.mode,_),_.ref=xo(v,x,y),_.return=v,_)}function u(v,x,y,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=nd(y,v.mode,_),x.return=v,x):(x=i(x,y.children||[]),x.return=v,x)}function f(v,x,y,_,b){return x===null||x.tag!==7?(x=zi(y,v.mode,_,b),x.return=v,x):(x=i(x,y),x.return=v,x)}function d(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=td(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return y=$l(x.type,x.key,x.props,null,v.mode,y),y.ref=xo(v,null,x),y.return=v,y;case va:return x=nd(x,v.mode,y),x.return=v,x;case jr:var _=x._init;return d(v,_(x._payload),y)}if(Ro(x)||po(x))return x=zi(x,v.mode,y,null),x.return=v,x;Js(v,x)}return null}function c(v,x,y,_){var b=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:s(v,x,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:return y.key===b?l(v,x,y,_):null;case va:return y.key===b?u(v,x,y,_):null;case jr:return b=y._init,c(v,x,b(y._payload),_)}if(Ro(y)||po(y))return b!==null?null:f(v,x,y,_,null);Js(v,y)}return null}function p(v,x,y,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,s(x,v,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vs:return v=v.get(_.key===null?y:_.key)||null,l(x,v,_,b);case va:return v=v.get(_.key===null?y:_.key)||null,u(x,v,_,b);case jr:var M=_._init;return p(v,x,y,M(_._payload),b)}if(Ro(_)||po(_))return v=v.get(y)||null,f(x,v,_,b,null);Js(x,_)}return null}function g(v,x,y,_){for(var b=null,M=null,D=x,S=x=0,E=null;D!==null&&S<y.length;S++){D.index>S?(E=D,D=null):E=D.sibling;var P=c(v,D,y[S],_);if(P===null){D===null&&(D=E);break}t&&D&&P.alternate===null&&e(v,D),x=a(P,x,S),M===null?b=P:M.sibling=P,M=P,D=E}if(S===y.length)return n(v,D),ot&&Ci(v,S),b;if(D===null){for(;S<y.length;S++)D=d(v,y[S],_),D!==null&&(x=a(D,x,S),M===null?b=D:M.sibling=D,M=D);return ot&&Ci(v,S),b}for(D=r(v,D);S<y.length;S++)E=p(D,v,S,y[S],_),E!==null&&(t&&E.alternate!==null&&D.delete(E.key===null?S:E.key),x=a(E,x,S),M===null?b=E:M.sibling=E,M=E);return t&&D.forEach(function(H){return e(v,H)}),ot&&Ci(v,S),b}function h(v,x,y,_){var b=po(y);if(typeof b!="function")throw Error(ie(150));if(y=b.call(y),y==null)throw Error(ie(151));for(var M=b=null,D=x,S=x=0,E=null,P=y.next();D!==null&&!P.done;S++,P=y.next()){D.index>S?(E=D,D=null):E=D.sibling;var H=c(v,D,P.value,_);if(H===null){D===null&&(D=E);break}t&&D&&H.alternate===null&&e(v,D),x=a(H,x,S),M===null?b=H:M.sibling=H,M=H,D=E}if(P.done)return n(v,D),ot&&Ci(v,S),b;if(D===null){for(;!P.done;S++,P=y.next())P=d(v,P.value,_),P!==null&&(x=a(P,x,S),M===null?b=P:M.sibling=P,M=P);return ot&&Ci(v,S),b}for(D=r(v,D);!P.done;S++,P=y.next())P=p(D,v,S,P.value,_),P!==null&&(t&&P.alternate!==null&&D.delete(P.key===null?S:P.key),x=a(P,x,S),M===null?b=P:M.sibling=P,M=P);return t&&D.forEach(function(Y){return e(v,Y)}),ot&&Ci(v,S),b}function m(v,x,y,_){if(typeof y=="object"&&y!==null&&y.type===xa&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:e:{for(var b=y.key,M=x;M!==null;){if(M.key===b){if(b=y.type,b===xa){if(M.tag===7){n(v,M.sibling),x=i(M,y.props.children),x.return=v,v=x;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jr&&Um(b)===M.type){n(v,M.sibling),x=i(M,y.props),x.ref=xo(v,M,y),x.return=v,v=x;break e}n(v,M);break}else e(v,M);M=M.sibling}y.type===xa?(x=zi(y.props.children,v.mode,_,y.key),x.return=v,v=x):(_=$l(y.type,y.key,y.props,null,v.mode,_),_.ref=xo(v,x,y),_.return=v,v=_)}return o(v);case va:e:{for(M=y.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(v,x.sibling),x=i(x,y.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else e(v,x);x=x.sibling}x=nd(y,v.mode,_),x.return=v,v=x}return o(v);case jr:return M=y._init,m(v,x,M(y._payload),_)}if(Ro(y))return g(v,x,y,_);if(po(y))return h(v,x,y,_);Js(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(v,x.sibling),x=i(x,y),x.return=v,v=x):(n(v,x),x=td(y,v.mode,_),x.return=v,v=x),o(v)):n(v,x)}return m}var Wa=cy(!0),dy=cy(!1),uu=gi(null),cu=null,Ca=null,$p=null;function qp(){$p=Ca=cu=null}function Xp(t){var e=uu.current;at(uu),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ka(t,e){cu=t,$p=Ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if($p!==t)if(t={context:t,memoizedValue:e,next:null},Ca===null){if(cu===null)throw Error(ie(308));Ca=t,cu.dependencies={lanes:0,firstContext:t}}else Ca=Ca.next=t;return e}var Ii=null;function Yp(t){Ii===null?Ii=[t]:Ii.push(t)}function fy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Yp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function Kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ri(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,Yp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kp(t,n)}}function Gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function du(t,e,n,r){var i=t.updateQueue;$r=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,f=u=l=null,s=a;do{var c=s.lane,p=s.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,h=s;switch(c=e,p=n,h.tag){case 1:if(g=h.payload,typeof g=="function"){d=g.call(p,d,c);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=h.payload,c=typeof g=="function"?g.call(p,d,c):g,c==null)break e;d=dt({},d,c);break e;case 2:$r=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[s]:c.push(s))}else p={eventTime:p,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=c;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;c=s,s=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);Wi|=o,t.lanes=o,t.memoizedState=d}}function Vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ie(191,i));i.call(r)}}}var Ms={},pr=gi(Ms),as=gi(Ms),os=gi(Ms);function Ni(t){if(t===Ms)throw Error(ie(174));return t}function Zp(t,e){switch(et(os,e),et(as,t),et(pr,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}at(pr),et(pr,e)}function Ha(){at(pr),at(as),at(os)}function hy(t){Ni(os.current);var e=Ni(pr.current),n=Sf(e,t.type);e!==n&&(et(as,t),et(pr,n))}function Qp(t){as.current===t&&(at(pr),at(as))}var ut=gi(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Jp(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var Gl=zr.ReactCurrentDispatcher,Kc=zr.ReactCurrentBatchConfig,Vi=0,ct=null,yt=null,Tt=null,pu=!1,Go=!1,ss=0,Mw=0;function Bt(){throw Error(ie(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tr(t[n],e[n]))return!1;return!0}function th(t,e,n,r,i,a){if(Vi=a,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?Dw:Aw,t=n(r,i),Go){a=0;do{if(Go=!1,ss=0,25<=a)throw Error(ie(301));a+=1,Tt=yt=null,e.updateQueue=null,Gl.current=Pw,t=n(r,i)}while(Go)}if(Gl.current=hu,e=yt!==null&&yt.next!==null,Vi=0,Tt=yt=ct=null,pu=!1,e)throw Error(ie(300));return t}function nh(){var t=ss!==0;return ss=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ct.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Wn(){if(yt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Tt===null?ct.memoizedState:Tt.next;if(e!==null)Tt=e,yt=t;else{if(t===null)throw Error(ie(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Tt===null?ct.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ls(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var r=yt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var f=u.lane;if((Vi&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,ct.lanes|=f,Wi|=f}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,tr(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,ct.lanes|=a,Wi|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);tr(a,e.memoizedState)||(sn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function my(){}function gy(t,e){var n=ct,r=Wn(),i=e(),a=!tr(r.memoizedState,i);if(a&&(r.memoizedState=i,sn=!0),r=r.queue,rh(yy.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,us(9,xy.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(ie(349));Vi&30||vy(n,e,i)}return i}function vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xy(t,e,n,r){e.value=n,e.getSnapshot=r,_y(e)&&Sy(t)}function yy(t,e,n){return n(function(){_y(e)&&Sy(t)})}function _y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tr(t,n)}catch{return!0}}function Sy(t){var e=Or(t,1);e!==null&&er(e,t,1,-1)}function Wm(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=Tw.bind(null,ct,t),[e.memoizedState,t]}function us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function by(){return Wn().memoizedState}function Vl(t,e,n,r){var i=sr();ct.flags|=t,i.memoizedState=us(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=Wn();r=r===void 0?null:r;var a=void 0;if(yt!==null){var o=yt.memoizedState;if(a=o.destroy,r!==null&&eh(r,o.deps)){i.memoizedState=us(e,n,a,r);return}}ct.flags|=t,i.memoizedState=us(1|e,n,a,r)}function Hm(t,e){return Vl(8390656,8,t,e)}function rh(t,e){return Gu(2048,8,t,e)}function wy(t,e){return Gu(4,2,t,e)}function My(t,e){return Gu(4,4,t,e)}function Ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cy(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,Ey.bind(null,e,t),n)}function ih(){}function Ty(t,e){var n=Wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dy(t,e){var n=Wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&eh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ay(t,e,n){return Vi&21?(tr(n,e)||(n=Nx(),ct.lanes|=n,Wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Ew(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{Ze=n,Kc.transition=r}}function Py(){return Wn().memoizedState}function Cw(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ry(t))Ly(e,n);else if(n=fy(t,e,n,r),n!==null){var i=tn();er(n,t,r,i),Iy(n,e,r)}}function Tw(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ry(t))Ly(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,tr(s,o)){var l=e.interleaved;l===null?(i.next=i,Yp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fy(t,e,i,r),n!==null&&(i=tn(),er(n,t,r,i),Iy(n,e,r))}}function Ry(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Ly(t,e){Go=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kp(t,n)}}var hu={readContext:Vn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Dw={readContext:Vn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,Ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cw.bind(null,ct,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:ih,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=Ew.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ct,i=sr();if(ot){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Dt===null)throw Error(ie(349));Vi&30||vy(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,Hm(yy.bind(null,r,a,t),[t]),r.flags|=2048,us(9,xy.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=sr(),e=Dt.identifierPrefix;if(ot){var n=Dr,r=Tr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Aw={readContext:Vn,useCallback:Ty,useContext:Vn,useEffect:rh,useImperativeHandle:Cy,useInsertionEffect:wy,useLayoutEffect:My,useMemo:Dy,useReducer:Zc,useRef:by,useState:function(){return Zc(ls)},useDebugValue:ih,useDeferredValue:function(t){var e=Wn();return Ay(e,yt.memoizedState,t)},useTransition:function(){var t=Zc(ls)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1},Pw={readContext:Vn,useCallback:Ty,useContext:Vn,useEffect:rh,useImperativeHandle:Cy,useInsertionEffect:wy,useLayoutEffect:My,useMemo:Dy,useReducer:Qc,useRef:by,useState:function(){return Qc(ls)},useDebugValue:ih,useDeferredValue:function(t){var e=Wn();return yt===null?e.memoizedState=t:Ay(e,yt.memoizedState,t)},useTransition:function(){var t=Qc(ls)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Py,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tn(),i=ai(t),a=Lr(r,i);a.payload=e,n!=null&&(a.callback=n),e=ri(t,a,i),e!==null&&(er(e,t,i,r),Ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tn(),i=ai(t),a=Lr(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ri(t,a,i),e!==null&&(er(e,t,i,r),Ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),r=ai(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ri(t,i,r),e!==null&&(er(e,t,r,n),Ul(e,t,r))}};function jm(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!ts(n,r)||!ts(i,a):!0}function Ny(t,e,n){var r=!1,i=pi,a=e.contextType;return typeof a=="object"&&a!==null?a=Vn(a):(i=cn(e)?Ui:$t.current,r=e.contextTypes,a=(r=r!=null)?Ga(t,i):pi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function $m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kp(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Vn(a):(a=cn(e)?Ui:$t.current,i.context=Ga(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Vf(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vu.enqueueReplaceState(i,i.state,null),du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ja(t,e){try{var n="",r=e;do n+=i1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function ky(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gu||(gu=!0,ep=r),Hf(t,e)},n}function Oy(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hf(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Hf(t,e),typeof r!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jw.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,ri(n,e,1))),n.lanes|=1),t)}var Lw=zr.ReactCurrentOwner,sn=!1;function Qt(t,e,n,r){e.child=t===null?dy(e,null,n,r):Wa(e,t.child,n,r)}function Km(t,e,n,r,i){n=n.render;var a=e.ref;return ka(e,i),r=th(t,e,n,r,a,i),n=nh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(ot&&n&&Wp(e),e.flags|=1,Qt(t,e,r,i),e.child)}function Zm(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!fh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Fy(t,e,a,r,i)):(t=$l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(o,r)&&t.ref===e.ref)return Fr(t,e,i)}return e.flags|=1,t=oi(a,r),t.ref=e.ref,t.return=e,e.child=t}function Fy(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(ts(a,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Fr(t,e,i)}return jf(t,e,n,r,i)}function zy(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Da,vn),vn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Da,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,et(Da,vn),vn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,et(Da,vn),vn|=r;return Qt(t,e,i,n),e.child}function By(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jf(t,e,n,r,i){var a=cn(n)?Ui:$t.current;return a=Ga(e,a),ka(e,i),n=th(t,e,n,r,a,i),r=nh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fr(t,e,i)):(ot&&r&&Wp(e),e.flags|=1,Qt(t,e,n,i),e.child)}function Qm(t,e,n,r,i){if(cn(n)){var a=!0;ou(e)}else a=!1;if(ka(e,i),e.stateNode===null)Wl(t,e),Ny(e,n,r),Wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=cn(n)?Ui:$t.current,u=Ga(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&$m(e,o,r,u),$r=!1;var c=e.memoizedState;o.state=c,du(e,r,o,i),l=e.memoizedState,s!==r||c!==l||un.current||$r?(typeof f=="function"&&(Vf(e,n,f,r),l=e.memoizedState),(s=$r||jm(e,n,s,r,c,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,py(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Xn(e.type,s),o.props=u,d=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=cn(n)?Ui:$t.current,l=Ga(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||c!==l)&&$m(e,o,r,l),$r=!1,c=e.memoizedState,o.state=c,du(e,r,o,i);var g=e.memoizedState;s!==d||c!==g||un.current||$r?(typeof p=="function"&&(Vf(e,n,p,r),g=e.memoizedState),(u=$r||jm(e,n,u,r,c,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return $f(t,e,n,r,a,i)}function $f(t,e,n,r,i,a){By(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fm(e,n,!1),Fr(t,e,a);r=e.stateNode,Lw.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wa(e,t.child,null,a),e.child=Wa(e,null,s,a)):Qt(t,e,s,a),e.memoizedState=r.state,i&&Fm(e,n,!0),e.child}function Uy(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),Zp(t,e.containerInfo)}function Jm(t,e,n,r,i){return Va(),jp(i),e.flags|=256,Qt(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var r=e.pendingProps,i=ut.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),et(ut,i&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ju(o,r,0,null),t=zi(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Xf(n),e.memoizedState=qf,t):ah(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Iw(t,e,o,r,s,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=oi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=oi(s,a):(a=zi(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?Xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=qf,r}return a=t.child,t=a.sibling,r=oi(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ah(t,e){return e=ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&jp(r),Wa(e,t.child,null,n),t=ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iw(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(ie(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=ju({mode:"visible",children:r.children},i,0,null),a=zi(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Wa(e,t.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=qf,a);if(!(e.mode&1))return el(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(ie(419)),r=Jc(a,r,void 0),el(t,e,o,r)}if(s=(o&t.childLanes)!==0,sn||s){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Or(t,i),er(r,t,i,-1))}return dh(),r=Jc(Error(ie(421))),el(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$w.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,_n=ni(i.nextSibling),Sn=e,ot=!0,Kn=null,t!==null&&(On[Fn++]=Tr,On[Fn++]=Dr,On[Fn++]=Gi,Tr=t.id,Dr=t.overflow,Gi=e),e=ah(e,r.children),e.flags|=4096,e)}function eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function ed(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Vy(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Qt(t,e,r.children,n),r=ut.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,n,e);else if(t.tag===19)eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(et(ut,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ed(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ed(e,!0,n,null,a);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=oi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=oi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nw(t,e,n){switch(e.tag){case 3:Uy(e),Va();break;case 5:hy(e);break;case 1:cn(e.type)&&ou(e);break;case 4:Zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;et(uu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(et(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(et(ut,ut.current&1),t=Fr(t,e,n),t!==null?t.sibling:null);et(ut,ut.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(ut,ut.current),r)break;return null;case 22:case 23:return e.lanes=0,zy(t,e,n)}return Fr(t,e,n)}var Wy,Yf,Hy,jy;Wy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};Hy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ni(pr.current);var a=null;switch(n){case"input":i=vf(t,i),r=vf(t,r),a=[];break;case"select":i=dt({},i,{value:void 0}),r=dt({},r,{value:void 0}),a=[];break;case"textarea":i=_f(t,i),r=_f(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=iu)}bf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};jy=function(t,e,n,r){n!==r&&(e.flags|=4)};function yo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kw(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return cn(e.type)&&au(),Ut(e),null;case 3:return r=e.stateNode,Ha(),at(un),at($t),Jp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(rp(Kn),Kn=null))),Yf(t,e),Ut(e),null;case 5:Qp(e);var i=Ni(os.current);if(n=e.type,t!==null&&e.stateNode!=null)Hy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ie(166));return Ut(e),null}if(t=Ni(pr.current),Qs(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[cr]=e,r[is]=a,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",r),rt("close",r);break;case"iframe":case"object":case"embed":rt("load",r);break;case"video":case"audio":for(i=0;i<Io.length;i++)rt(Io[i],r);break;case"source":rt("error",r);break;case"img":case"image":case"link":rt("error",r),rt("load",r);break;case"details":rt("toggle",r);break;case"input":um(r,a),rt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},rt("invalid",r);break;case"textarea":dm(r,a),rt("invalid",r)}bf(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Zs(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Zs(r.textContent,s,t),i=["children",""+s]):Xo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&rt("scroll",r)}switch(n){case"input":Ws(r),cm(r,a,!0);break;case"textarea":Ws(r),fm(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cr]=e,t[is]=r,Wy(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":rt("cancel",t),rt("close",t),i=r;break;case"iframe":case"object":case"embed":rt("load",t),i=r;break;case"video":case"audio":for(i=0;i<Io.length;i++)rt(Io[i],t);i=r;break;case"source":rt("error",t),i=r;break;case"img":case"image":case"link":rt("error",t),rt("load",t),i=r;break;case"details":rt("toggle",t),i=r;break;case"input":um(t,r),i=vf(t,r),rt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=dt({},r,{value:void 0}),rt("invalid",t);break;case"textarea":dm(t,r),i=_f(t,r),rt("invalid",t);break;default:i=r}bf(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?bx(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_x(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yo(t,l):typeof l=="number"&&Yo(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&rt("scroll",t):l!=null&&Ap(t,a,l,o))}switch(n){case"input":Ws(t),cm(t,r,!1);break;case"textarea":Ws(t),fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Ra(t,!!r.multiple,a,!1):r.defaultValue!=null&&Ra(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)jy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Ni(os.current),Ni(pr.current),Qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(a=r.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zs(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Ut(e),null;case 13:if(at(ut),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&_n!==null&&e.mode&1&&!(e.flags&128))uy(),Va(),e.flags|=98560,a=!1;else if(a=Qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[cr]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),a=!1}else Kn!==null&&(rp(Kn),Kn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?_t===0&&(_t=3):dh())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Ha(),Yf(t,e),t===null&&ns(e.stateNode.containerInfo),Ut(e),null;case 10:return Xp(e.type._context),Ut(e),null;case 17:return cn(e.type)&&au(),Ut(e),null;case 19:if(at(ut),a=e.memoizedState,a===null)return Ut(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)yo(a,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,yo(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ut,ut.current&1|2),e.child}t=t.sibling}a.tail!==null&&ht()>$a&&(e.flags|=128,r=!0,yo(a,!1),e.lanes=4194304)}else{if(!r)if(t=fu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ot)return Ut(e),null}else 2*ht()-a.renderingStartTime>$a&&n!==1073741824&&(e.flags|=128,r=!0,yo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ht(),e.sibling=null,n=ut.current,et(ut,r?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return ch(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Ow(t,e){switch(Hp(e),e.tag){case 1:return cn(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ha(),at(un),at($t),Jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Ha(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var tl=!1,Ht=!1,Fw=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ta(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ft(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){ft(t,e,r)}}var tg=!1;function zw(t,e){if(If=tu,t=Kx(),Vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,f=0,d=t,c=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)c=d,d=p;for(;;){if(d===t)break t;if(c===n&&++u===i&&(s=o),c===a&&++f===r&&(l=o),(p=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nf={focusedElem:t,selectionRange:n},tu=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var h=g.memoizedProps,m=g.memoizedState,v=e.stateNode,x=v.getSnapshotBeforeUpdate(e.elementType===e.type?h:Xn(e.type,h),m);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(_){ft(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=tg,tg=!1,g}function Vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Kf(e,n,a)}i=i.next}while(i!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $y(t){var e=t.alternate;e!==null&&(t.alternate=null,$y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[is],delete e[Ff],delete e[_w],delete e[Sw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(r!==4&&(t=t.child,t!==null))for(Qf(t,e,n),t=t.sibling;t!==null;)Qf(t,e,n),t=t.sibling}function Jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var It=null,Yn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)Xy(t,e,n),n=n.sibling}function Xy(t,e,n){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(ku,n)}catch{}switch(n.tag){case 5:Ht||Ta(n,e);case 6:var r=It,i=Yn;It=null,Ur(t,e,n),It=r,Yn=i,It!==null&&(Yn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Yn?(t=It,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),Jo(t)):qc(It,n.stateNode));break;case 4:r=It,i=Yn,It=n.stateNode.containerInfo,Yn=!0,Ur(t,e,n),It=r,Yn=i;break;case 0:case 11:case 14:case 15:if(!Ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Kf(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!Ht&&(Ta(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ft(n,e,s)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(Ht=(r=Ht)||n.memoizedState!==null,Ur(t,e,n),Ht=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fw),e.forEach(function(r){var i=qw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:It=s.stateNode,Yn=!1;break e;case 3:It=s.stateNode.containerInfo,Yn=!0;break e;case 4:It=s.stateNode.containerInfo,Yn=!0;break e}s=s.return}if(It===null)throw Error(ie(160));Xy(a,o,i),It=null,Yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ft(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yy(e,t),e=e.sibling}function Yy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ar(t),r&4){try{Vo(3,t,t.return),Wu(3,t)}catch(h){ft(t,t.return,h)}try{Vo(5,t,t.return)}catch(h){ft(t,t.return,h)}}break;case 1:Hn(e,t),ar(t),r&512&&n!==null&&Ta(n,n.return);break;case 5:if(Hn(e,t),ar(t),r&512&&n!==null&&Ta(n,n.return),t.flags&32){var i=t.stateNode;try{Yo(i,"")}catch(h){ft(t,t.return,h)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&vx(i,a),wf(s,o);var u=wf(s,a);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?bx(i,d):f==="dangerouslySetInnerHTML"?_x(i,d):f==="children"?Yo(i,d):Ap(i,f,d,u)}switch(s){case"input":xf(i,a);break;case"textarea":xx(i,a);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ra(i,!!a.multiple,p,!1):c!==!!a.multiple&&(a.defaultValue!=null?Ra(i,!!a.multiple,a.defaultValue,!0):Ra(i,!!a.multiple,a.multiple?[]:"",!1))}i[is]=a}catch(h){ft(t,t.return,h)}}break;case 6:if(Hn(e,t),ar(t),r&4){if(t.stateNode===null)throw Error(ie(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(h){ft(t,t.return,h)}}break;case 3:if(Hn(e,t),ar(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(h){ft(t,t.return,h)}break;case 4:Hn(e,t),ar(t);break;case 13:Hn(e,t),ar(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(lh=ht())),r&4&&rg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||f,Hn(e,t),Ht=u):Hn(e,t),ar(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(d=xe=f;xe!==null;){switch(c=xe,p=c.child,c.tag){case 0:case 11:case 14:case 15:Vo(4,c,c.return);break;case 1:Ta(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(h){ft(r,n,h)}}break;case 5:Ta(c,c.return);break;case 22:if(c.memoizedState!==null){ag(d);continue}}p!==null?(p.return=c,xe=p):ag(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Sx("display",o))}catch(h){ft(t,t.return,h)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){ft(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ar(t),r&4&&rg(t);break;case 21:break;default:Hn(e,t),ar(t)}}function ar(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var r=n;break e}n=n.return}throw Error(ie(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yo(i,""),r.flags&=-33);var a=ng(t);Jf(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ng(t);Qf(t,s,o);break;default:throw Error(ie(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bw(t,e,n){xe=t,Ky(t)}function Ky(t,e,n){for(var r=(t.mode&1)!==0;xe!==null;){var i=xe,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ht;s=tl;var u=Ht;if(tl=o,(Ht=l)&&!u)for(xe=i;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?og(i):l!==null?(l.return=o,xe=l):og(i);for(;a!==null;)xe=a,Ky(a),a=a.sibling;xe=i,tl=s,Ht=u}ig(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,xe=a):ig(t)}}function ig(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Vm(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vm(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ht||e.flags&512&&Zf(e)}catch(c){ft(e,e.return,c)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function ag(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function og(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(l){ft(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ft(e,i,l)}}var a=e.return;try{Zf(e)}catch(l){ft(e,a,l)}break;case 5:var o=e.return;try{Zf(e)}catch(l){ft(e,o,l)}}}catch(l){ft(e,e.return,l)}if(e===t){xe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,xe=s;break}xe=e.return}}var Uw=Math.ceil,mu=zr.ReactCurrentDispatcher,oh=zr.ReactCurrentOwner,Gn=zr.ReactCurrentBatchConfig,je=0,Dt=null,xt=null,kt=0,vn=0,Da=gi(0),_t=0,cs=null,Wi=0,Hu=0,sh=0,Wo=null,on=null,lh=0,$a=1/0,Mr=null,gu=!1,ep=null,ii=null,nl=!1,Kr=null,vu=0,Ho=0,tp=null,Hl=-1,jl=0;function tn(){return je&6?ht():Hl!==-1?Hl:Hl=ht()}function ai(t){return t.mode&1?je&2&&kt!==0?kt&-kt:ww.transition!==null?(jl===0&&(jl=Nx()),jl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Gx(t.type)),t):1}function er(t,e,n,r){if(50<Ho)throw Ho=0,tp=null,Error(ie(185));Ss(t,n,r),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&(Hu|=n),_t===4&&Xr(t,kt)),dn(t,r),n===1&&je===0&&!(e.mode&1)&&($a=ht()+500,Uu&&vi()))}function dn(t,e){var n=t.callbackNode;w1(t,e);var r=eu(t,t===Dt?kt:0);if(r===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?bw(sg.bind(null,t)):oy(sg.bind(null,t)),xw(function(){!(je&6)&&vi()}),n=null;else{switch(kx(r)){case 1:n=Np;break;case 4:n=Lx;break;case 16:n=Jl;break;case 536870912:n=Ix;break;default:n=Jl}n=i_(n,Zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zy(t,e){if(Hl=-1,jl=0,je&6)throw Error(ie(327));var n=t.callbackNode;if(Oa()&&t.callbackNode!==n)return null;var r=eu(t,t===Dt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var i=je;je|=2;var a=Jy();(Dt!==t||kt!==e)&&(Mr=null,$a=ht()+500,Fi(t,e));do try{Ww();break}catch(s){Qy(t,s)}while(!0);qp(),mu.current=a,je=i,xt!==null?e=0:(Dt=null,kt=0,e=_t)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=np(t,i))),e===1)throw n=cs,Fi(t,0),Xr(t,r),dn(t,ht()),n;if(e===6)Xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Gw(i)&&(e=xu(t,r),e===2&&(a=Df(t),a!==0&&(r=a,e=np(t,a))),e===1))throw n=cs,Fi(t,0),Xr(t,r),dn(t,ht()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ie(345));case 2:Ti(t,on,Mr);break;case 3:if(Xr(t,r),(r&130023424)===r&&(e=lh+500-ht(),10<e)){if(eu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(Ti.bind(null,t,on,Mr),e);break}Ti(t,on,Mr);break;case 4:if(Xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uw(r/1960))-r,10<r){t.timeoutHandle=Of(Ti.bind(null,t,on,Mr),r);break}Ti(t,on,Mr);break;case 5:Ti(t,on,Mr);break;default:throw Error(ie(329))}}}return dn(t,ht()),t.callbackNode===n?Zy.bind(null,t):null}function np(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=xu(t,e),t!==2&&(e=on,on=n,e!==null&&rp(e)),t}function rp(t){on===null?on=t:on.push.apply(on,t)}function Gw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!tr(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~sh,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function sg(t){if(je&6)throw Error(ie(327));Oa();var e=eu(t,0);if(!(e&1))return dn(t,ht()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=np(t,r))}if(n===1)throw n=cs,Fi(t,0),Xr(t,e),dn(t,ht()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,on,Mr),dn(t,ht()),null}function uh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&($a=ht()+500,Uu&&vi())}}function Hi(t){Kr!==null&&Kr.tag===0&&!(je&6)&&Oa();var e=je;je|=1;var n=Gn.transition,r=Ze;try{if(Gn.transition=null,Ze=1,t)return t()}finally{Ze=r,Gn.transition=n,je=e,!(je&6)&&vi()}}function ch(){vn=Da.current,at(Da)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vw(n)),xt!==null)for(n=xt.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&au();break;case 3:Ha(),at(un),at($t),Jp();break;case 5:Qp(r);break;case 4:Ha();break;case 13:at(ut);break;case 19:at(ut);break;case 10:Xp(r.type._context);break;case 22:case 23:ch()}n=n.return}if(Dt=t,xt=t=oi(t.current,null),kt=vn=e,_t=0,cs=null,sh=Hu=Wi=0,on=Wo=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ii=null}return t}function Qy(t,e){do{var n=xt;try{if(qp(),Gl.current=hu,pu){for(var r=ct.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pu=!1}if(Vi=0,Tt=yt=ct=null,Go=!1,ss=0,oh.current=null,n===null||n.return===null){_t=1,cs=e,xt=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=kt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Xm(o);if(p!==null){p.flags&=-257,Ym(p,o,s,a,e),p.mode&1&&qm(a,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var h=new Set;h.add(l),e.updateQueue=h}else g.add(l);break e}else{if(!(e&1)){qm(a,u,e),dh();break e}l=Error(ie(426))}}else if(ot&&s.mode&1){var m=Xm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ym(m,o,s,a,e),jp(ja(l,s));break e}}a=l=ja(l,s),_t!==4&&(_t=2),Wo===null?Wo=[a]:Wo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var v=ky(a,l,e);Gm(a,v);break e;case 1:s=l;var x=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ii===null||!ii.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var _=Oy(a,s,e);Gm(a,_);break e}}a=a.return}while(a!==null)}t_(n)}catch(b){e=b,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Jy(){var t=mu.current;return mu.current=hu,t===null?hu:t}function dh(){(_t===0||_t===3||_t===2)&&(_t=4),Dt===null||!(Wi&268435455)&&!(Hu&268435455)||Xr(Dt,kt)}function xu(t,e){var n=je;je|=2;var r=Jy();(Dt!==t||kt!==e)&&(Mr=null,Fi(t,e));do try{Vw();break}catch(i){Qy(t,i)}while(!0);if(qp(),je=n,mu.current=r,xt!==null)throw Error(ie(261));return Dt=null,kt=0,_t}function Vw(){for(;xt!==null;)e_(xt)}function Ww(){for(;xt!==null&&!h1();)e_(xt)}function e_(t){var e=r_(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?t_(t):xt=e,oh.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ow(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,xt=null;return}}else if(n=kw(n,e,vn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);_t===0&&(_t=5)}function Ti(t,e,n){var r=Ze,i=Gn.transition;try{Gn.transition=null,Ze=1,Hw(t,e,n,r)}finally{Gn.transition=i,Ze=r}return null}function Hw(t,e,n,r){do Oa();while(Kr!==null);if(je&6)throw Error(ie(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(M1(t,a),t===Dt&&(xt=Dt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,i_(Jl,function(){return Oa(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Gn.transition,Gn.transition=null;var o=Ze;Ze=1;var s=je;je|=4,oh.current=null,zw(t,n),Yy(n,t),cw(Nf),tu=!!If,Nf=If=null,t.current=n,Bw(n),m1(),je=s,Ze=o,Gn.transition=a}else t.current=n;if(nl&&(nl=!1,Kr=t,vu=i),a=t.pendingLanes,a===0&&(ii=null),x1(n.stateNode),dn(t,ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gu)throw gu=!1,t=ep,ep=null,t;return vu&1&&t.tag!==0&&Oa(),a=t.pendingLanes,a&1?t===tp?Ho++:(Ho=0,tp=t):Ho=0,vi(),null}function Oa(){if(Kr!==null){var t=kx(vu),e=Gn.transition,n=Ze;try{if(Gn.transition=null,Ze=16>t?16:t,Kr===null)var r=!1;else{if(t=Kr,Kr=null,vu=0,je&6)throw Error(ie(331));var i=je;for(je|=4,xe=t.current;xe!==null;){var a=xe,o=a.child;if(xe.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(xe=u;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:Vo(8,f,a)}var d=f.child;if(d!==null)d.return=f,xe=d;else for(;xe!==null;){f=xe;var c=f.sibling,p=f.return;if($y(f),f===u){xe=null;break}if(c!==null){c.return=p,xe=c;break}xe=p}}}var g=a.alternate;if(g!==null){var h=g.child;if(h!==null){g.child=null;do{var m=h.sibling;h.sibling=null,h=m}while(h!==null)}}xe=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,xe=o;else e:for(;xe!==null;){if(a=xe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Vo(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,xe=v;break e}xe=a.return}}var x=t.current;for(xe=x;xe!==null;){o=xe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,xe=y;else e:for(o=x;xe!==null;){if(s=xe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wu(9,s)}}catch(b){ft(s,s.return,b)}if(s===o){xe=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,xe=_;break e}xe=s.return}}if(je=i,vi(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(ku,t)}catch{}r=!0}return r}finally{Ze=n,Gn.transition=e}}return!1}function lg(t,e,n){e=ja(n,e),e=ky(t,e,1),t=ri(t,e,1),e=tn(),t!==null&&(Ss(t,1,e),dn(t,e))}function ft(t,e,n){if(t.tag===3)lg(t,t,n);else for(;e!==null;){if(e.tag===3){lg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ii===null||!ii.has(r))){t=ja(n,t),t=Oy(e,t,1),e=ri(e,t,1),t=tn(),e!==null&&(Ss(e,1,t),dn(e,t));break}}e=e.return}}function jw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(kt&n)===n&&(_t===4||_t===3&&(kt&130023424)===kt&&500>ht()-lh?Fi(t,0):sh|=n),dn(t,e)}function n_(t,e){e===0&&(t.mode&1?(e=$s,$s<<=1,!($s&130023424)&&($s=4194304)):e=1);var n=tn();t=Or(t,e),t!==null&&(Ss(t,e,n),dn(t,n))}function $w(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function qw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ie(314))}r!==null&&r.delete(e),n_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,Nw(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ot&&e.flags&1048576&&sy(e,lu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var i=Ga(e,$t.current);ka(e,n),i=th(null,e,r,t,i,n);var a=nh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(r)?(a=!0,ou(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kp(e),i.updater=Vu,e.stateNode=i,i._reactInternals=e,Wf(e,r,t,n),e=$f(null,e,r,!0,a,n)):(e.tag=0,ot&&a&&Wp(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Yw(r),t=Xn(r,t),i){case 0:e=jf(null,e,r,t,n);break e;case 1:e=Qm(null,e,r,t,n);break e;case 11:e=Km(null,e,r,t,n);break e;case 14:e=Zm(null,e,r,Xn(r.type,t),n);break e}throw Error(ie(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),jf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),Qm(t,e,r,i,n);case 3:e:{if(Uy(e),t===null)throw Error(ie(387));r=e.pendingProps,a=e.memoizedState,i=a.element,py(t,e),du(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=ja(Error(ie(423)),e),e=Jm(t,e,r,n,i);break e}else if(r!==i){i=ja(Error(ie(424)),e),e=Jm(t,e,r,n,i);break e}else for(_n=ni(e.stateNode.containerInfo.firstChild),Sn=e,ot=!0,Kn=null,n=dy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Va(),r===i){e=Fr(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return hy(e),t===null&&Uf(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,kf(r,i)?o=null:a!==null&&kf(r,a)&&(e.flags|=32),By(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return Gy(t,e,n);case 4:return Zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wa(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),Km(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,et(uu,r._currentValue),r._currentValue=o,a!==null)if(tr(a.value,o)){if(a.children===i.children&&!un.current){e=Fr(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Lr(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Gf(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ie(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Gf(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ka(e,n),i=Vn(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Xn(r,e.pendingProps),i=Xn(r.type,i),Zm(t,e,r,i,n);case 15:return Fy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),Wl(t,e),e.tag=1,cn(r)?(t=!0,ou(e)):t=!1,ka(e,n),Ny(e,r,i),Wf(e,r,i,n),$f(null,e,r,!0,t,n);case 19:return Vy(t,e,n);case 22:return zy(t,e,n)}throw Error(ie(156,e.tag))};function i_(t,e){return Rx(t,e)}function Xw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,r){return new Xw(t,e,n,r)}function fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yw(t){if(typeof t=="function")return fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Lp)return 14}return 2}function oi(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xa:return zi(n.children,i,a,e);case Pp:o=8,i|=8;break;case pf:return t=Bn(12,n,e,i|2),t.elementType=pf,t.lanes=a,t;case hf:return t=Bn(13,n,e,i),t.elementType=hf,t.lanes=a,t;case mf:return t=Bn(19,n,e,i),t.elementType=mf,t.lanes=a,t;case hx:return ju(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fx:o=10;break e;case px:o=9;break e;case Rp:o=11;break e;case Lp:o=14;break e;case jr:o=16,r=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function zi(t,e,n,r){return t=Bn(7,t,r,e),t.lanes=n,t}function ju(t,e,n,r){return t=Bn(22,t,r,e),t.elementType=hx,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,r,i,a,o,s,l){return t=new Kw(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Bn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(a),t}function Zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:va,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function a_(t){if(!t)return pi;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(cn(n))return ay(t,n,e)}return e}function o_(t,e,n,r,i,a,o,s,l){return t=ph(n,r,!0,t,i,a,o,s,l),t.context=a_(null),n=t.current,r=tn(),i=ai(n),a=Lr(r,i),a.callback=e??null,ri(n,a,i),t.current.lanes=i,Ss(t,i,r),dn(t,r),t}function $u(t,e,n,r){var i=e.current,a=tn(),o=ai(i);return n=a_(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ri(i,e,o),t!==null&&(er(t,i,o,a),Ul(t,i,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hh(t,e){ug(t,e),(t=t.alternate)&&ug(t,e)}function Qw(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}qu.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));$u(t,e,null,null)};qu.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hi(function(){$u(null,t,null,null)}),e[kr]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=zx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&Ux(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cg(){}function Jw(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=yu(o);a.call(u)}}var o=o_(e,r,t,0,null,!1,!1,"",cg);return t._reactRootContainer=o,t[kr]=o.current,ns(t.nodeType===8?t.parentNode:t),Hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=yu(l);s.call(u)}}var l=ph(t,0,!1,null,null,!1,!1,"",cg);return t._reactRootContainer=l,t[kr]=l.current,ns(t.nodeType===8?t.parentNode:t),Hi(function(){$u(e,l,n,r)}),l}function Yu(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=yu(o);s.call(l)}}$u(e,o,t,i)}else o=Jw(n,e,t,i,r);return yu(o)}Ox=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(kp(e,n|1),dn(e,ht()),!(je&6)&&($a=ht()+500,vi()))}break;case 13:Hi(function(){var r=Or(t,1);if(r!==null){var i=tn();er(r,t,1,i)}}),hh(t,1)}};Op=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=tn();er(e,t,134217728,n)}hh(t,134217728)}};Fx=function(t){if(t.tag===13){var e=ai(t),n=Or(t,e);if(n!==null){var r=tn();er(n,t,e,r)}hh(t,e)}};zx=function(){return Ze};Bx=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Ef=function(t,e,n){switch(e){case"input":if(xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bu(r);if(!i)throw Error(ie(90));gx(r),xf(r,i)}}}break;case"textarea":xx(t,n);break;case"select":e=n.value,e!=null&&Ra(t,!!n.multiple,e,!1)}};Ex=uh;Cx=Hi;var eM={usingClientEntryPoint:!1,Events:[ws,ba,Bu,wx,Mx,uh]},_o={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tM={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ax(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{ku=rl.inject(tM),fr=rl}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eM;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(ie(200));return Zw(t,e,null,n)};An.createRoot=function(t,e){if(!gh(t))throw Error(ie(299));var n=!1,r="",i=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,ns(t.nodeType===8?t.parentNode:t),new mh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Ax(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Hi(t)};An.hydrate=function(t,e,n){if(!Xu(e))throw Error(ie(200));return Yu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(ie(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o_(e,null,t,1,n??null,i,!1,a,o),t[kr]=e.current,ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qu(e)};An.render=function(t,e,n){if(!Xu(e))throw Error(ie(200));return Yu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(ie(40));return t._reactRootContainer?(Hi(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};An.unstable_batchedUpdates=uh;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Yu(t,e,n,!1,r)};An.version="18.3.1-next-f1338f8080-20240426";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(t){console.error(t)}}l_(),lx.exports=An;var vh=lx.exports;const nM=gr(vh);var u_,dg=vh;u_=dg.createRoot,dg.hydrateRoot;var c_={exports:{}},Je={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=60103,Zu=60106,Es=60107,Cs=60108,Ts=60114,Ds=60109,As=60110,Ps=60112,Rs=60113,xh=60120,Ls=60115,Is=60116,d_=60121,f_=60122,p_=60117,h_=60129,m_=60131;if(typeof Symbol=="function"&&Symbol.for){var Lt=Symbol.for;Ku=Lt("react.element"),Zu=Lt("react.portal"),Es=Lt("react.fragment"),Cs=Lt("react.strict_mode"),Ts=Lt("react.profiler"),Ds=Lt("react.provider"),As=Lt("react.context"),Ps=Lt("react.forward_ref"),Rs=Lt("react.suspense"),xh=Lt("react.suspense_list"),Ls=Lt("react.memo"),Is=Lt("react.lazy"),d_=Lt("react.block"),f_=Lt("react.server.block"),p_=Lt("react.fundamental"),h_=Lt("react.debug_trace_mode"),m_=Lt("react.legacy_hidden")}function nr(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ku:switch(t=t.type,t){case Es:case Ts:case Cs:case Rs:case xh:return t;default:switch(t=t&&t.$$typeof,t){case As:case Ps:case Is:case Ls:case Ds:return t;default:return e}}case Zu:return e}}}var rM=Ds,iM=Ku,aM=Ps,oM=Es,sM=Is,lM=Ls,uM=Zu,cM=Ts,dM=Cs,fM=Rs;Je.ContextConsumer=As;Je.ContextProvider=rM;Je.Element=iM;Je.ForwardRef=aM;Je.Fragment=oM;Je.Lazy=sM;Je.Memo=lM;Je.Portal=uM;Je.Profiler=cM;Je.StrictMode=dM;Je.Suspense=fM;Je.isAsyncMode=function(){return!1};Je.isConcurrentMode=function(){return!1};Je.isContextConsumer=function(t){return nr(t)===As};Je.isContextProvider=function(t){return nr(t)===Ds};Je.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ku};Je.isForwardRef=function(t){return nr(t)===Ps};Je.isFragment=function(t){return nr(t)===Es};Je.isLazy=function(t){return nr(t)===Is};Je.isMemo=function(t){return nr(t)===Ls};Je.isPortal=function(t){return nr(t)===Zu};Je.isProfiler=function(t){return nr(t)===Ts};Je.isStrictMode=function(t){return nr(t)===Cs};Je.isSuspense=function(t){return nr(t)===Rs};Je.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Es||t===Ts||t===h_||t===Cs||t===Rs||t===xh||t===m_||typeof t=="object"&&t!==null&&(t.$$typeof===Is||t.$$typeof===Ls||t.$$typeof===Ds||t.$$typeof===As||t.$$typeof===Ps||t.$$typeof===p_||t.$$typeof===d_||t[0]===f_)};Je.typeOf=nr;c_.exports=Je;var yh=c_.exports;function pM(t){function e(A,O,V,L,R){for(var ne=0,j=0,ue=0,ce=0,me,fe,Me=0,Be=0,Ae,Ue=Ae=me=0,Te=0,Ne=0,Ge=0,$e=0,zt=V.length,T=zt-1,w,z="",re="",pe="",ge="",_e;Te<zt;){if(fe=V.charCodeAt(Te),Te===T&&j+ce+ue+ne!==0&&(j!==0&&(fe=j===47?10:47),ce=ue=ne=0,zt++,T++),j+ce+ue+ne===0){if(Te===T&&(0<Ne&&(z=z.replace(c,"")),0<z.trim().length)){switch(fe){case 32:case 9:case 59:case 13:case 10:break;default:z+=V.charAt(Te)}fe=59}switch(fe){case 123:for(z=z.trim(),me=z.charCodeAt(0),Ae=1,$e=++Te;Te<zt;){switch(fe=V.charCodeAt(Te)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(fe=V.charCodeAt(Te+1)){case 42:case 47:e:{for(Ue=Te+1;Ue<T;++Ue)switch(V.charCodeAt(Ue)){case 47:if(fe===42&&V.charCodeAt(Ue-1)===42&&Te+2!==Ue){Te=Ue+1;break e}break;case 10:if(fe===47){Te=Ue+1;break e}}Te=Ue}}break;case 91:fe++;case 40:fe++;case 34:case 39:for(;Te++<T&&V.charCodeAt(Te)!==fe;);}if(Ae===0)break;Te++}switch(Ae=V.substring($e,Te),me===0&&(me=(z=z.replace(d,"").trim()).charCodeAt(0)),me){case 64:switch(0<Ne&&(z=z.replace(c,"")),fe=z.charCodeAt(1),fe){case 100:case 109:case 115:case 45:Ne=O;break;default:Ne=J}if(Ae=e(O,Ne,Ae,fe,R+1),$e=Ae.length,0<I&&(Ne=n(J,z,Ge),_e=s(3,Ae,Ne,O,F,Y,$e,fe,R,L),z=Ne.join(""),_e!==void 0&&($e=(Ae=_e.trim()).length)===0&&(fe=0,Ae="")),0<$e)switch(fe){case 115:z=z.replace(M,o);case 100:case 109:case 45:Ae=z+"{"+Ae+"}";break;case 107:z=z.replace(x,"$1 $2"),Ae=z+"{"+Ae+"}",Ae=$===1||$===2&&a("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=z+Ae,L===112&&(Ae=(re+=Ae,""))}else Ae="";break;default:Ae=e(O,n(O,z,Ge),Ae,L,R+1)}pe+=Ae,Ae=Ge=Ne=Ue=me=0,z="",fe=V.charCodeAt(++Te);break;case 125:case 59:if(z=(0<Ne?z.replace(c,""):z).trim(),1<($e=z.length))switch(Ue===0&&(me=z.charCodeAt(0),me===45||96<me&&123>me)&&($e=(z=z.replace(" ",":")).length),0<I&&(_e=s(1,z,O,A,F,Y,re.length,L,R,L))!==void 0&&($e=(z=_e.trim()).length)===0&&(z="\0\0"),me=z.charCodeAt(0),fe=z.charCodeAt(1),me){case 0:break;case 64:if(fe===105||fe===99){ge+=z+V.charAt(Te);break}default:z.charCodeAt($e-1)!==58&&(re+=i(z,me,fe,z.charCodeAt(2)))}Ge=Ne=Ue=me=0,z="",fe=V.charCodeAt(++Te)}}switch(fe){case 13:case 10:j===47?j=0:1+me===0&&L!==107&&0<z.length&&(Ne=1,z+="\0"),0<I*G&&s(0,z,O,A,F,Y,re.length,L,R,L),Y=1,F++;break;case 59:case 125:if(j+ce+ue+ne===0){Y++;break}default:switch(Y++,w=V.charAt(Te),fe){case 9:case 32:if(ce+ne+j===0)switch(Me){case 44:case 58:case 9:case 32:w="";break;default:fe!==32&&(w=" ")}break;case 0:w="\\0";break;case 12:w="\\f";break;case 11:w="\\v";break;case 38:ce+j+ne===0&&(Ne=Ge=1,w="\f"+w);break;case 108:if(ce+j+ne+N===0&&0<Ue)switch(Te-Ue){case 2:Me===112&&V.charCodeAt(Te-3)===58&&(N=Me);case 8:Be===111&&(N=Be)}break;case 58:ce+j+ne===0&&(Ue=Te);break;case 44:j+ue+ce+ne===0&&(Ne=1,w+="\r");break;case 34:case 39:j===0&&(ce=ce===fe?0:ce===0?fe:ce);break;case 91:ce+j+ue===0&&ne++;break;case 93:ce+j+ue===0&&ne--;break;case 41:ce+j+ne===0&&ue--;break;case 40:if(ce+j+ne===0){if(me===0)switch(2*Me+3*Be){case 533:break;default:me=1}ue++}break;case 64:j+ue+ce+ne+Ue+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<ce+ne+ue))switch(j){case 0:switch(2*fe+3*V.charCodeAt(Te+1)){case 235:j=47;break;case 220:$e=Te,j=42}break;case 42:fe===47&&Me===42&&$e+2!==Te&&(V.charCodeAt($e+2)===33&&(re+=V.substring($e,Te+1)),w="",j=0)}}j===0&&(z+=w)}Be=Me,Me=fe,Te++}if($e=re.length,0<$e){if(Ne=O,0<I&&(_e=s(2,re,Ne,A,F,Y,$e,L,R,L),_e!==void 0&&(re=_e).length===0))return ge+re+pe;if(re=Ne.join(",")+"{"+re+"}",$*N!==0){switch($!==2||a(re,2)||(N=0),N){case 111:re=re.replace(_,":-moz-$1")+re;break;case 112:re=re.replace(y,"::-webkit-input-$1")+re.replace(y,"::-moz-$1")+re.replace(y,":-ms-input-$1")+re}N=0}}return ge+re+pe}function n(A,O,V){var L=O.trim().split(m);O=L;var R=L.length,ne=A.length;switch(ne){case 0:case 1:var j=0;for(A=ne===0?"":A[0]+" ";j<R;++j)O[j]=r(A,O[j],V).trim();break;default:var ue=j=0;for(O=[];j<R;++j)for(var ce=0;ce<ne;++ce)O[ue++]=r(A[ce]+" ",L[j],V).trim()}return O}function r(A,O,V){var L=O.charCodeAt(0);switch(33>L&&(L=(O=O.trim()).charCodeAt(0)),L){case 38:return O.replace(v,"$1"+A.trim());case 58:return A.trim()+O.replace(v,"$1"+A.trim());default:if(0<1*V&&0<O.indexOf("\f"))return O.replace(v,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+O}function i(A,O,V,L){var R=A+";",ne=2*O+3*V+4*L;if(ne===944){A=R.indexOf(":",9)+1;var j=R.substring(A,R.length-1).trim();return j=R.substring(0,A).trim()+j+";",$===1||$===2&&a(j,1)?"-webkit-"+j+j:j}if($===0||$===2&&!a(R,1))return R;switch(ne){case 1015:return R.charCodeAt(10)===97?"-webkit-"+R+R:R;case 951:return R.charCodeAt(3)===116?"-webkit-"+R+R:R;case 963:return R.charCodeAt(5)===110?"-webkit-"+R+R:R;case 1009:if(R.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+R+R;case 978:return"-webkit-"+R+"-moz-"+R+R;case 1019:case 983:return"-webkit-"+R+"-moz-"+R+"-ms-"+R+R;case 883:if(R.charCodeAt(8)===45)return"-webkit-"+R+R;if(0<R.indexOf("image-set(",11))return R.replace(H,"$1-webkit-$2")+R;break;case 932:if(R.charCodeAt(4)===45)switch(R.charCodeAt(5)){case 103:return"-webkit-box-"+R.replace("-grow","")+"-webkit-"+R+"-ms-"+R.replace("grow","positive")+R;case 115:return"-webkit-"+R+"-ms-"+R.replace("shrink","negative")+R;case 98:return"-webkit-"+R+"-ms-"+R.replace("basis","preferred-size")+R}return"-webkit-"+R+"-ms-"+R+R;case 964:return"-webkit-"+R+"-ms-flex-"+R+R;case 1023:if(R.charCodeAt(8)!==99)break;return j=R.substring(R.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+R+"-ms-flex-pack"+j+R;case 1005:return g.test(R)?R.replace(p,":-webkit-")+R.replace(p,":-moz-")+R:R;case 1e3:switch(j=R.substring(13).trim(),O=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(O)){case 226:j=R.replace(b,"tb");break;case 232:j=R.replace(b,"tb-rl");break;case 220:j=R.replace(b,"lr");break;default:return R}return"-webkit-"+R+"-ms-"+j+R;case 1017:if(R.indexOf("sticky",9)===-1)break;case 975:switch(O=(R=A).length-10,j=(R.charCodeAt(O)===33?R.substring(0,O):R).substring(A.indexOf(":",7)+1).trim(),ne=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:R=R.replace(j,"-webkit-"+j)+";"+R;break;case 207:case 102:R=R.replace(j,"-webkit-"+(102<ne?"inline-":"")+"box")+";"+R.replace(j,"-webkit-"+j)+";"+R.replace(j,"-ms-"+j+"box")+";"+R}return R+";";case 938:if(R.charCodeAt(5)===45)switch(R.charCodeAt(6)){case 105:return j=R.replace("-items",""),"-webkit-"+R+"-webkit-box-"+j+"-ms-flex-"+j+R;case 115:return"-webkit-"+R+"-ms-flex-item-"+R.replace(S,"")+R;default:return"-webkit-"+R+"-ms-flex-line-pack"+R.replace("align-content","").replace(S,"")+R}break;case 973:case 989:if(R.charCodeAt(3)!==45||R.charCodeAt(4)===122)break;case 931:case 953:if(P.test(A)===!0)return(j=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),O,V,L).replace(":fill-available",":stretch"):R.replace(j,"-webkit-"+j)+R.replace(j,"-moz-"+j.replace("fill-",""))+R;break;case 962:if(R="-webkit-"+R+(R.charCodeAt(5)===102?"-ms-"+R:"")+R,V+L===211&&R.charCodeAt(13)===105&&0<R.indexOf("transform",10))return R.substring(0,R.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+R}return R}function a(A,O){var V=A.indexOf(O===1?":":"{"),L=A.substring(0,O!==3?V:10);return V=A.substring(V+1,A.length-1),q(O!==2?L:L.replace(E,"$1"),V,O)}function o(A,O){var V=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return V!==O+";"?V.replace(D," or ($1)").substring(4):"("+O+")"}function s(A,O,V,L,R,ne,j,ue,ce,me){for(var fe=0,Me=O,Be;fe<I;++fe)switch(Be=ee[fe].call(f,A,Me,V,L,R,ne,j,ue,ce,me)){case void 0:case!1:case!0:case null:break;default:Me=Be}if(Me!==O)return Me}function l(A){switch(A){case void 0:case null:I=ee.length=0;break;default:if(typeof A=="function")ee[I++]=A;else if(typeof A=="object")for(var O=0,V=A.length;O<V;++O)l(A[O]);else G=!!A|0}return l}function u(A){return A=A.prefix,A!==void 0&&(q=null,A?typeof A!="function"?$=1:($=2,q=A):$=0),u}function f(A,O){var V=A;if(33>V.charCodeAt(0)&&(V=V.trim()),oe=V,V=[oe],0<I){var L=s(-1,O,V,V,F,Y,0,0,0,0);L!==void 0&&typeof L=="string"&&(O=L)}var R=e(J,V,O,0,0);return 0<I&&(L=s(-2,R,V,V,F,Y,R.length,0,0,0),L!==void 0&&(R=L)),oe="",N=0,Y=F=1,R}var d=/^\0+/g,c=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,S=/-self|flex-/g,E=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,H=/([^-])(image-set\()/,Y=1,F=1,N=0,$=1,J=[],ee=[],I=0,q=null,G=0,oe="";return f.use=l,f.set=u,t!==void 0&&u(t),f}var hM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mM(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var gM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fg=mM(function(t){return gM.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),g_={exports:{}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt=typeof Symbol=="function"&&Symbol.for,_h=Rt?Symbol.for("react.element"):60103,Sh=Rt?Symbol.for("react.portal"):60106,Qu=Rt?Symbol.for("react.fragment"):60107,Ju=Rt?Symbol.for("react.strict_mode"):60108,ec=Rt?Symbol.for("react.profiler"):60114,tc=Rt?Symbol.for("react.provider"):60109,nc=Rt?Symbol.for("react.context"):60110,bh=Rt?Symbol.for("react.async_mode"):60111,rc=Rt?Symbol.for("react.concurrent_mode"):60111,ic=Rt?Symbol.for("react.forward_ref"):60112,ac=Rt?Symbol.for("react.suspense"):60113,vM=Rt?Symbol.for("react.suspense_list"):60120,oc=Rt?Symbol.for("react.memo"):60115,sc=Rt?Symbol.for("react.lazy"):60116,xM=Rt?Symbol.for("react.block"):60121,yM=Rt?Symbol.for("react.fundamental"):60117,_M=Rt?Symbol.for("react.responder"):60118,SM=Rt?Symbol.for("react.scope"):60119;function Rn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case _h:switch(t=t.type,t){case bh:case rc:case Qu:case ec:case Ju:case ac:return t;default:switch(t=t&&t.$$typeof,t){case nc:case ic:case sc:case oc:case tc:return t;default:return e}}case Sh:return e}}}function v_(t){return Rn(t)===rc}Qe.AsyncMode=bh;Qe.ConcurrentMode=rc;Qe.ContextConsumer=nc;Qe.ContextProvider=tc;Qe.Element=_h;Qe.ForwardRef=ic;Qe.Fragment=Qu;Qe.Lazy=sc;Qe.Memo=oc;Qe.Portal=Sh;Qe.Profiler=ec;Qe.StrictMode=Ju;Qe.Suspense=ac;Qe.isAsyncMode=function(t){return v_(t)||Rn(t)===bh};Qe.isConcurrentMode=v_;Qe.isContextConsumer=function(t){return Rn(t)===nc};Qe.isContextProvider=function(t){return Rn(t)===tc};Qe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===_h};Qe.isForwardRef=function(t){return Rn(t)===ic};Qe.isFragment=function(t){return Rn(t)===Qu};Qe.isLazy=function(t){return Rn(t)===sc};Qe.isMemo=function(t){return Rn(t)===oc};Qe.isPortal=function(t){return Rn(t)===Sh};Qe.isProfiler=function(t){return Rn(t)===ec};Qe.isStrictMode=function(t){return Rn(t)===Ju};Qe.isSuspense=function(t){return Rn(t)===ac};Qe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qu||t===rc||t===ec||t===Ju||t===ac||t===vM||typeof t=="object"&&t!==null&&(t.$$typeof===sc||t.$$typeof===oc||t.$$typeof===tc||t.$$typeof===nc||t.$$typeof===ic||t.$$typeof===yM||t.$$typeof===_M||t.$$typeof===SM||t.$$typeof===xM)};Qe.typeOf=Rn;g_.exports=Qe;var bM=g_.exports,wh=bM,wM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},MM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EM={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh={};Mh[wh.ForwardRef]=EM;Mh[wh.Memo]=x_;function pg(t){return wh.isMemo(t)?x_:Mh[t.$$typeof]||wM}var CM=Object.defineProperty,TM=Object.getOwnPropertyNames,hg=Object.getOwnPropertySymbols,DM=Object.getOwnPropertyDescriptor,AM=Object.getPrototypeOf,mg=Object.prototype;function y_(t,e,n){if(typeof e!="string"){if(mg){var r=AM(e);r&&r!==mg&&y_(t,r,n)}var i=TM(e);hg&&(i=i.concat(hg(e)));for(var a=pg(t),o=pg(e),s=0;s<i.length;++s){var l=i[s];if(!MM[l]&&!(n&&n[l])&&!(o&&o[l])&&!(a&&a[l])){var u=DM(e,l);try{CM(t,l,u)}catch{}}}}return t}var PM=y_;const ip=gr(PM);var kn={};function Ar(){return(Ar=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var gg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},ap=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!yh.typeOf(t)},_u=Object.freeze([]),si=Object.freeze({});function ds(t){return typeof t=="function"}function vg(t){return t.displayName||t.name||"Component"}function Eh(t){return t&&typeof t.styledComponentId=="string"}var qa=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",Ch=typeof window<"u"&&"HTMLElement"in window,RM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY));function Ns(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var LM=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&Ns(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=a;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,s=a;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},t}(),ql=new Map,Su=new Map,jo=1,il=function(t){if(ql.has(t))return ql.get(t);for(;Su.has(jo);)jo++;var e=jo++;return ql.set(t,e),Su.set(e,t),e},IM=function(t){return Su.get(t)},NM=function(t,e){e>=jo&&(jo=e+1),ql.set(t,e),Su.set(e,t)},kM="style["+qa+'][data-styled-version="5.3.11"]',OM=new RegExp("^"+qa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),FM=function(t,e,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&t.registerName(e,r)},zM=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(OM);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(NM(u,l),FM(t,u,s[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},BM=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},__=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(qa))return f}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(qa,"active"),r.setAttribute("data-styled-version","5.3.11");var o=BM();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},UM=function(){function t(n){var r=this.element=__(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,s=a.length;o<s;o++){var l=a[o];if(l.ownerNode===i)return l}Ns(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),GM=function(){function t(n){var r=this.element=__(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),VM=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),xg=Ch,WM={isServer:!Ch,useCSSOMInjection:!RM},S_=function(){function t(n,r,i){n===void 0&&(n=si),r===void 0&&(r={}),this.options=Ar({},WM,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ch&&xg&&(xg=!1,function(a){for(var o=document.querySelectorAll(kM),s=0,l=o.length;s<l;s++){var u=o[s];u&&u.getAttribute(qa)!=="active"&&(zM(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return il(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Ar({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new VM(o):a?new UM(o):new GM(o),new LM(n)));var n,r,i,a,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(il(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(il(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(il(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var s=IM(o);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(o);if(l&&u&&l.size){var f=qa+".g"+o+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(c){c.length>0&&(d+=c+",")}),a+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},t}(),HM=/(a)(d)/gi,yg=function(t){return String.fromCharCode(t+(t>25?39:97))};function op(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=yg(e%52)+n;return(yg(e%52)+n).replace(HM,"$1-$2")}var Aa=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},b_=function(t){return Aa(5381,t)};function jM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ds(n)&&!Eh(n))return!1}return!0}var $M=b_("5.3.11"),qM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jM(e),this.componentId=n,this.baseHash=Aa($M,n),this.baseStyle=r,S_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=Xa(this.rules,e,n,r).join(""),s=op(Aa(this.baseHash,o)>>>0);if(!n.hasNameForId(i,s)){var l=r(o,"."+s,void 0,i);n.insertRules(i,s,l)}a.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=Aa(this.baseHash,r.hash),d="",c=0;c<u;c++){var p=this.rules[c];if(typeof p=="string")d+=p;else if(p){var g=Xa(p,e,n,r),h=Array.isArray(g)?g.join(""):g;f=Aa(f,h+c),d+=h}}if(d){var m=op(f>>>0);if(!n.hasNameForId(i,m)){var v=r(d,"."+m,void 0,i);n.insertRules(i,m,v)}a.push(m)}}return a.join(" ")},t}(),XM=/^\s*\/\/.*$/gm,YM=[":","[",".","#"];function KM(t){var e,n,r,i,a=si,o=a.options,s=o===void 0?si:o,l=a.plugins,u=l===void 0?_u:l,f=new pM(s),d=[],c=function(h){function m(v){if(v)try{h(v+"}")}catch{}}return function(v,x,y,_,b,M,D,S,E,P){switch(v){case 1:if(E===0&&x.charCodeAt(0)===64)return h(x+";"),"";break;case 2:if(S===0)return x+"/*|*/";break;case 3:switch(S){case 102:case 112:return h(y[0]+x),"";default:return x+(P===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(m)}}}(function(h){d.push(h)}),p=function(h,m,v){return m===0&&YM.indexOf(v[n.length])!==-1||v.match(i)?h:"."+e};function g(h,m,v,x){x===void 0&&(x="&");var y=h.replace(XM,""),_=m&&v?v+" "+m+" { "+y+" }":y;return e=x,n=m,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(v||!m?"":m,_)}return f.use([].concat(u,[function(h,m,v){h===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,p))},c,function(h){if(h===-2){var m=d;return d=[],m}}])),g.hash=u.length?u.reduce(function(h,m){return m.name||Ns(15),Aa(h,m.name)},5381).toString():"",g}var w_=Ke.createContext();w_.Consumer;var M_=Ke.createContext(),ZM=(M_.Consumer,new S_),sp=KM();function QM(){return se.useContext(w_)||ZM}function JM(){return se.useContext(M_)||sp}var eE=function(){function t(e,n){var r=this;this.inject=function(i,a){a===void 0&&(a=sp);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return Ns(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=sp),this.name+e.hash},t}(),tE=/([A-Z])/,nE=/([A-Z])/g,rE=/^ms-/,iE=function(t){return"-"+t.toLowerCase()};function _g(t){return tE.test(t)?t.replace(nE,iE).replace(rE,"-ms-"):t}var Sg=function(t){return t==null||t===!1||t===""};function Xa(t,e,n,r){if(Array.isArray(t)){for(var i,a=[],o=0,s=t.length;o<s;o+=1)(i=Xa(t[o],e,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Sg(t))return"";if(Eh(t))return"."+t.styledComponentId;if(ds(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Xa(l,e,n,r)}var u;return t instanceof eE?n?(t.inject(n,r),t.getName(r)):t:ap(t)?function f(d,c){var p,g,h=[];for(var m in d)d.hasOwnProperty(m)&&!Sg(d[m])&&(Array.isArray(d[m])&&d[m].isCss||ds(d[m])?h.push(_g(m)+":",d[m],";"):ap(d[m])?h.push.apply(h,f(d[m],m)):h.push(_g(m)+": "+(p=m,(g=d[m])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in hM||p.startsWith("--")?String(g).trim():g+"px")+";"));return c?[c+" {"].concat(h,["}"]):h}(t):t.toString()}var bg=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function aE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ds(t)||ap(t)?bg(Xa(gg(_u,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:bg(Xa(gg(t,n)))}var oE=function(t,e,n){return n===void 0&&(n=si),t.theme!==n.theme&&t.theme||e||n.theme},sE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lE=/(^-|-$)/g;function rd(t){return t.replace(sE,"-").replace(lE,"")}var uE=function(t){return op(b_(t)>>>0)};function al(t){return typeof t=="string"&&!0}var lp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},cE=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function dE(t,e,n){var r=t[n];lp(e)&&lp(r)?E_(r,e):t[n]=e}function E_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(lp(o))for(var s in o)cE(s)&&dE(t,o[s],s)}return t}var C_=Ke.createContext();C_.Consumer;var id={};function T_(t,e,n){var r=Eh(t),i=!al(t),a=e.attrs,o=a===void 0?_u:a,s=e.componentId,l=s===void 0?function(x,y){var _=typeof x!="string"?"sc":rd(x);id[_]=(id[_]||0)+1;var b=_+"-"+uE("5.3.11"+_+id[_]);return y?y+"-"+b:b}(e.displayName,e.parentComponentId):s,u=e.displayName,f=u===void 0?function(x){return al(x)?"styled."+x:"Styled("+vg(x)+")"}(t):u,d=e.displayName&&e.componentId?rd(e.displayName)+"-"+e.componentId:e.componentId||l,c=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(x,y,_){return t.shouldForwardProp(x,y,_)&&e.shouldForwardProp(x,y,_)}:t.shouldForwardProp);var g,h=new qM(n,d,r?t.componentStyle:void 0),m=h.isStatic&&o.length===0,v=function(x,y){return function(_,b,M,D){var S=_.attrs,E=_.componentStyle,P=_.defaultProps,H=_.foldedComponentIds,Y=_.shouldForwardProp,F=_.styledComponentId,N=_.target,$=function(L,R,ne){L===void 0&&(L=si);var j=Ar({},R,{theme:L}),ue={};return ne.forEach(function(ce){var me,fe,Me,Be=ce;for(me in ds(Be)&&(Be=Be(j)),Be)j[me]=ue[me]=me==="className"?(fe=ue[me],Me=Be[me],fe&&Me?fe+" "+Me:fe||Me):Be[me]}),[j,ue]}(oE(b,se.useContext(C_),P)||si,b,S),J=$[0],ee=$[1],I=function(L,R,ne,j){var ue=QM(),ce=JM(),me=R?L.generateAndInjectStyles(si,ue,ce):L.generateAndInjectStyles(ne,ue,ce);return me}(E,D,J),q=M,G=ee.$as||b.$as||ee.as||b.as||N,oe=al(G),A=ee!==b?Ar({},b,{},ee):b,O={};for(var V in A)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?O.as=A[V]:(Y?Y(V,fg,G):!oe||fg(V))&&(O[V]=A[V]));return b.style&&ee.style!==b.style&&(O.style=Ar({},b.style,{},ee.style)),O.className=Array.prototype.concat(H,F,I!==F?I:null,b.className,ee.className).filter(Boolean).join(" "),O.ref=q,se.createElement(G,O)}(g,x,y,m)};return v.displayName=f,(g=Ke.forwardRef(v)).attrs=c,g.componentStyle=h,g.displayName=f,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):_u,g.styledComponentId=d,g.target=r?t.target:t,g.withComponent=function(x){var y=e.componentId,_=function(M,D){if(M==null)return{};var S,E,P={},H=Object.keys(M);for(E=0;E<H.length;E++)S=H[E],D.indexOf(S)>=0||(P[S]=M[S]);return P}(e,["componentId"]),b=y&&y+"-"+(al(x)?x:rd(vg(x)));return T_(x,Ar({},_,{attrs:c,componentId:b}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?E_({},t.defaultProps,x):x}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&ip(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var le=function(t){return function e(n,r,i){if(i===void 0&&(i=si),!yh.isValidElementType(r))return Ns(1,String(r));var a=function(){return n(r,i,aE.apply(void 0,arguments))};return a.withConfig=function(o){return e(n,r,Ar({},i,{},o))},a.attrs=function(o){return e(n,r,Ar({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(T_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){le[t]=le(t)});const fE=le.div`
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
`,pE=le.div`
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
`,hE=le.nav`
  padding: 20px 0;
`,mE=le.div`
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
`,gE=({activePage:t,onPageChange:e,onStateChange:n})=>{const[r,i]=se.useState(!1),a=se.useRef(null),o=[{id:"dashboard",icon:"📊",text:"Dashboard"},{id:"orders",icon:"📦",text:"Orders"},{id:"tasks",icon:"✅",text:"Tasks"},{id:"calendar",icon:"📅",text:"Calendar"},{id:"chat",icon:"💬",text:"Chat"}],s=()=>{a.current&&(clearTimeout(a.current),a.current=null),i(!1)},l=()=>{a.current=setTimeout(()=>{i(!0)},3e3)};return se.useEffect(()=>{n&&n(r)},[r,n]),se.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),U.jsxs(fE,{collapsed:r,onMouseEnter:s,onMouseLeave:l,children:[U.jsxs(pE,{collapsed:r,children:[U.jsx("div",{className:"logo-icon",children:"🐒"}),U.jsx("div",{className:"logo-text",children:"Five Monkeys"})]}),U.jsx(hE,{children:o.map(u=>U.jsxs(mE,{active:t===u.id,collapsed:r,onClick:()=>e(u.id),children:[U.jsx("span",{className:"nav-icon",children:u.icon}),U.jsx("span",{className:"nav-text",children:u.text})]},u.id))})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="150",vE=0,wg=1,xE=2,D_=1,yE=2,No=3,hi=0,bn=1,Pr=2,li=0,Fa=1,Mg=2,Eg=3,Cg=4,_E=5,ga=100,SE=101,bE=102,Tg=103,Dg=104,wE=200,ME=201,EE=202,CE=203,A_=204,P_=205,TE=206,DE=207,AE=208,PE=209,RE=210,LE=0,IE=1,NE=2,up=3,kE=4,OE=5,FE=6,zE=7,R_=0,BE=1,UE=2,Ir=0,GE=1,VE=2,WE=3,HE=4,jE=5,L_=300,Ya=301,Ka=302,cp=303,dp=304,lc=306,fp=1e3,Zn=1001,pp=1002,Jt=1003,Ag=1004,ad=1005,zn=1006,$E=1007,fs=1008,ji=1009,qE=1010,XE=1011,I_=1012,YE=1013,ki=1014,Oi=1015,ps=1016,KE=1017,ZE=1018,za=1020,QE=1021,Qn=1023,JE=1024,eC=1025,Bi=1026,Za=1027,tC=1028,nC=1029,rC=1030,iC=1031,aC=1033,od=33776,sd=33777,ld=33778,ud=33779,Pg=35840,Rg=35841,Lg=35842,Ig=35843,oC=36196,Ng=37492,kg=37496,Og=37808,Fg=37809,zg=37810,Bg=37811,Ug=37812,Gg=37813,Vg=37814,Wg=37815,Hg=37816,jg=37817,$g=37818,qg=37819,Xg=37820,Yg=37821,cd=36492,sC=36283,Kg=36284,Zg=36285,Qg=36286,$i=3e3,it=3001,lC=3200,uC=3201,cC=0,dC=1,lr="srgb",hs="srgb-linear",N_="display-p3",dd=7680,fC=519,Jg=35044,ev="300 es",hp=1035;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,o=i.length;a<o;a++)i[a].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,tv=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]).toLowerCase()}function xn(t,e,n){return Math.max(e,Math.min(n,t))}function pC(t,e){return(t%e+e)%e}function pd(t,e,n){return(1-n)*t+n*e}function nv(t){return(t&t-1)===0&&t!==0}function hC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ol(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*i+e.x,this.y=a*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(){en.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,r,i,a,o,s,l,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=s,f[3]=n,f[4]=a,f[5]=l,f[6]=r,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],f=r[4],d=r[7],c=r[2],p=r[5],g=r[8],h=i[0],m=i[3],v=i[6],x=i[1],y=i[4],_=i[7],b=i[2],M=i[5],D=i[8];return a[0]=o*h+s*x+l*b,a[3]=o*m+s*y+l*M,a[6]=o*v+s*_+l*D,a[1]=u*h+f*x+d*b,a[4]=u*m+f*y+d*M,a[7]=u*v+f*_+d*D,a[2]=c*h+p*x+g*b,a[5]=c*m+p*y+g*M,a[8]=c*v+p*_+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*s*u-r*a*f+r*s*l+i*a*u-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=f*o-s*u,c=s*l-f*a,p=u*a-o*l,g=n*d+r*c+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=d*h,e[1]=(i*u-f*r)*h,e[2]=(s*r-i*o)*h,e[3]=c*h,e[4]=(f*n-i*l)*h,e[5]=(i*a-s*n)*h,e[6]=p*h,e[7]=(r*l-u*n)*h,e[8]=(o*n-r*a)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*o+u*s)+o+e,-i*u,i*l,-i*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(hd.makeScale(e,n)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,n){return this.premultiply(hd.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new en;function k_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class Os{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,a,o,s){let l=r[i+0],u=r[i+1],f=r[i+2],d=r[i+3];const c=a[o+0],p=a[o+1],g=a[o+2],h=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(s===1){e[n+0]=c,e[n+1]=p,e[n+2]=g,e[n+3]=h;return}if(d!==h||l!==c||u!==p||f!==g){let m=1-s;const v=l*c+u*p+f*g+d*h,x=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,v*x);m=Math.sin(m*M)/b,s=Math.sin(s*M)/b}const _=s*x;if(l=l*m+c*_,u=u*m+p*_,f=f*m+g*_,d=d*m+h*_,m===1-s){const b=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=b,u*=b,f*=b,d*=b}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,a,o){const s=r[i],l=r[i+1],u=r[i+2],f=r[i+3],d=a[o],c=a[o+1],p=a[o+2],g=a[o+3];return e[n]=s*g+f*d+l*p-u*c,e[n+1]=l*g+f*c+u*d-s*p,e[n+2]=u*g+f*p+s*c-l*d,e[n+3]=f*g-s*d-l*c-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,i=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(r/2),f=s(i/2),d=s(a/2),c=l(r/2),p=l(i/2),g=l(a/2);switch(o){case"XYZ":this._x=c*f*d+u*p*g,this._y=u*p*d-c*f*g,this._z=u*f*g+c*p*d,this._w=u*f*d-c*p*g;break;case"YXZ":this._x=c*f*d+u*p*g,this._y=u*p*d-c*f*g,this._z=u*f*g-c*p*d,this._w=u*f*d+c*p*g;break;case"ZXY":this._x=c*f*d-u*p*g,this._y=u*p*d+c*f*g,this._z=u*f*g+c*p*d,this._w=u*f*d-c*p*g;break;case"ZYX":this._x=c*f*d-u*p*g,this._y=u*p*d+c*f*g,this._z=u*f*g-c*p*d,this._w=u*f*d+c*p*g;break;case"YZX":this._x=c*f*d+u*p*g,this._y=u*p*d+c*f*g,this._z=u*f*g-c*p*d,this._w=u*f*d-c*p*g;break;case"XZY":this._x=c*f*d-u*p*g,this._y=u*p*d-c*f*g,this._z=u*f*g+c*p*d,this._w=u*f*d+c*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],f=n[6],d=n[10],c=r+s+d;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-u)*p,this._z=(o-i)*p}else if(r>s&&r>d){const p=2*Math.sqrt(1+r-s-d);this._w=(f-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(a+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-r-d);this._w=(a-u)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-r-s);this._w=(o-i)/p,this._x=(a+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,f=n._w;return this._x=r*f+o*s+i*u-a*l,this._y=i*f+o*l+a*s-r*u,this._z=a*f+o*u+r*l-i*s,this._w=o*f-r*s-i*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,o=this._w;let s=o*e._w+r*e._x+i*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=r,this._y=i,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,s),d=Math.sin((1-n)*f)/u,c=Math.sin(n*f)/u;return this._w=o*d+this._w*c,this._x=r*d+this._x*c,this._y=i*d+this._y*c,this._z=a*d+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(a),r*Math.cos(a),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=e.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*i-s*r,f=l*r+s*n-a*i,d=l*i+a*r-o*n,c=-a*n-o*r-s*i;return this.x=u*l+c*-a+f*-s-d*-o,this.y=f*l+c*-o+d*-a-u*-s,this.z=d*l+c*-s+u*-o-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=i*l-a*s,this.y=a*o-r*l,this.z=r*s-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return md.copy(this).projectOnVector(e),this.sub(md)}reflect(e){return this.sub(md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new X,rv=new Os;function Ba(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const mC=new en().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gC=new en().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Zr=new X;function vC(t){return t.convertSRGBToLinear(),Zr.set(t.r,t.g,t.b).applyMatrix3(gC),t.setRGB(Zr.x,Zr.y,Zr.z)}function xC(t){return Zr.set(t.r,t.g,t.b).applyMatrix3(mC),t.setRGB(Zr.x,Zr.y,Zr.z).convertLinearToSRGB()}const yC={[hs]:t=>t,[lr]:t=>t.convertSRGBToLinear(),[N_]:vC},_C={[hs]:t=>t,[lr]:t=>t.convertLinearToSRGB(),[N_]:xC},Yt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return hs},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=yC[e],i=_C[n];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ta;class O_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ta===void 0&&(ta=bu("canvas")),ta.width=e.width,ta.height=e.height;const r=ta.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ta}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let o=0;o<a.length;o++)a[o]=Ba(a[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ba(n[r]/255)*255):n[r]=Ba(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class F_{constructor(e=null){this.isSource=!0,this.uuid=ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?a.push(vd(i[o].image)):a.push(vd(i[o]))}else a=vd(i);r.url=a}return n||(e.images[this.uuid]=r),r}}function vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SC=0;class wn extends oo{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=Zn,i=Zn,a=zn,o=fs,s=Qn,l=ji,u=wn.DEFAULT_ANISOTROPY,f=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=ks(),this.name="",this.source=new F_(e),this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fp:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fp:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=L_;wn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,r=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,a;const l=e.elements,u=l[0],f=l[4],d=l[8],c=l[1],p=l[5],g=l[9],h=l[2],m=l[6],v=l[10];if(Math.abs(f-c)<.01&&Math.abs(d-h)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+c)<.1&&Math.abs(d+h)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,_=(p+1)/2,b=(v+1)/2,M=(f+c)/4,D=(d+h)/4,S=(g+m)/4;return y>_&&y>b?y<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(y),i=M/r,a=D/r):_>b?_<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),r=M/i,a=S/i):b<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(b),r=D/a,i=S/a),this.set(r,i,a,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-h)*(d-h)+(c-f)*(c-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-h)/x,this.z=(c-f)/x,this.w=Math.acos((u+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qi extends oo{constructor(e=1,n=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const i={width:e,height:n,depth:1};this.texture=new wn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:zn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class z_ extends wn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bC extends wn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.length;l<u;l+=3){const f=e[l],d=e[l+1],c=e[l+2];f<n&&(n=f),d<r&&(r=d),c<i&&(i=c),f>a&&(a=f),d>o&&(o=d),c>s&&(s=c)}return this.min.set(n,r,i),this.max.set(a,o,s),this}setFromBufferAttribute(e){let n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0;for(let l=0,u=e.count;l<u;l++){const f=e.getX(l),d=e.getY(l),c=e.getZ(l);f<n&&(n=f),d<r&&(r=d),c<i&&(i=c),f>a&&(a=f),d>o&&(o=d),c>s&&(s=c)}return this.min.set(n,r,i),this.max.set(a,o,s),this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0)if(n&&r.attributes!=null&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)bi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else r.boundingBox===null&&r.computeBoundingBox(),xd.copy(r.boundingBox),xd.applyMatrix4(e.matrixWorld),this.union(xd);const i=e.children;for(let a=0,o=i.length;a<o;a++)this.expandByObject(i[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),sl.subVectors(this.max,So),na.subVectors(e.a,So),ra.subVectors(e.b,So),ia.subVectors(e.c,So),Gr.subVectors(ra,na),Vr.subVectors(ia,ra),wi.subVectors(na,ia);let n=[0,-Gr.z,Gr.y,0,-Vr.z,Vr.y,0,-wi.z,wi.y,Gr.z,0,-Gr.x,Vr.z,0,-Vr.x,wi.z,0,-wi.x,-Gr.y,Gr.x,0,-Vr.y,Vr.x,0,-wi.y,wi.x,0];return!yd(n,na,ra,ia,sl)||(n=[1,0,0,0,1,0,0,0,1],!yd(n,na,ra,ia,sl))?!1:(ll.crossVectors(Gr,Vr),n=[ll.x,ll.y,ll.z],yd(n,na,ra,ia,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yr=[new X,new X,new X,new X,new X,new X,new X,new X],bi=new X,xd=new Fs,na=new X,ra=new X,ia=new X,Gr=new X,Vr=new X,wi=new X,So=new X,sl=new X,ll=new X,Mi=new X;function yd(t,e,n,r,i){for(let a=0,o=t.length-3;a<=o;a+=3){Mi.fromArray(t,a);const s=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=e.dot(Mi),u=n.dot(Mi),f=r.dot(Mi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>s)return!1}return!0}const wC=new Fs,bo=new X,_d=new X;class Dh{constructor(e=new X,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):wC.setFromPoints(e).getCenter(r);let i=0;for(let a=0,o=e.length;a<o;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(bo,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(_d)),this.expandByPoint(bo.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _r=new X,Sd=new X,ul=new X,Wr=new X,bd=new X,cl=new X,wd=new X;class MC{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_r.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,n),_r.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Sd.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),Wr.copy(this.origin).sub(Sd);const a=e.distanceTo(n)*.5,o=-this.direction.dot(ul),s=Wr.dot(this.direction),l=-Wr.dot(ul),u=Wr.lengthSq(),f=Math.abs(1-o*o);let d,c,p,g;if(f>0)if(d=o*l-s,c=o*s-l,g=a*f,d>=0)if(c>=-g)if(c<=g){const h=1/f;d*=h,c*=h,p=d*(d+o*c+2*s)+c*(o*d+c+2*l)+u}else c=a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;else c=-a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;else c<=-g?(d=Math.max(0,-(-o*a+s)),c=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+c*(c+2*l)+u):c<=g?(d=0,c=Math.min(Math.max(-a,-l),a),p=c*(c+2*l)+u):(d=Math.max(0,-(o*a+s)),c=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+c*(c+2*l)+u);else c=o>0?-a:a,d=Math.max(0,-(o*c+s)),p=-d*d+c*(c+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sd).addScaledVector(ul,c),p}intersectSphere(e,n){_r.subVectors(e.center,this.origin);const r=_r.dot(this.direction),i=_r.dot(_r)-r*r,a=e.radius*e.radius;if(i>a)return null;const o=Math.sqrt(a-i),s=r-o,l=r+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,a,o,s,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,c=this.origin;return u>=0?(r=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(r=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(a=(e.min.y-c.y)*f,o=(e.max.y-c.y)*f):(a=(e.max.y-c.y)*f,o=(e.min.y-c.y)*f),r>o||a>i||((a>r||isNaN(r))&&(r=a),(o<i||isNaN(i))&&(i=o),d>=0?(s=(e.min.z-c.z)*d,l=(e.max.z-c.z)*d):(s=(e.max.z-c.z)*d,l=(e.min.z-c.z)*d),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,n,r,i,a){bd.subVectors(n,e),cl.subVectors(r,e),wd.crossVectors(bd,cl);let o=this.direction.dot(wd),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Wr.subVectors(this.origin,e);const l=s*this.direction.dot(cl.crossVectors(Wr,cl));if(l<0)return null;const u=s*this.direction.dot(bd.cross(Wr));if(u<0||l+u>o)return null;const f=-s*Wr.dot(wd);return f<0?null:this.at(f/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,r,i,a,o,s,l,u,f,d,c,p,g,h,m){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=i,v[1]=a,v[5]=o,v[9]=s,v[13]=l,v[2]=u,v[6]=f,v[10]=d,v[14]=c,v[3]=p,v[7]=g,v[11]=h,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/aa.setFromMatrixColumn(e,0).length(),a=1/aa.setFromMatrixColumn(e,1).length(),o=1/aa.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,a=e.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),f=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const c=o*f,p=o*d,g=s*f,h=s*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=c-h*u,n[9]=-s*l,n[2]=h-c*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const c=l*f,p=l*d,g=u*f,h=u*d;n[0]=c+h*s,n[4]=g*s-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-s,n[2]=p*s-g,n[6]=h+c*s,n[10]=o*l}else if(e.order==="ZXY"){const c=l*f,p=l*d,g=u*f,h=u*d;n[0]=c-h*s,n[4]=-o*d,n[8]=g+p*s,n[1]=p+g*s,n[5]=o*f,n[9]=h-c*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const c=o*f,p=o*d,g=s*f,h=s*d;n[0]=l*f,n[4]=g*u-p,n[8]=c*u+h,n[1]=l*d,n[5]=h*u+c,n[9]=p*u-g,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const c=o*l,p=o*u,g=s*l,h=s*u;n[0]=l*f,n[4]=h-c*d,n[8]=g*d+p,n[1]=d,n[5]=o*f,n[9]=-s*f,n[2]=-u*f,n[6]=p*d+g,n[10]=c-h*d}else if(e.order==="XZY"){const c=o*l,p=o*u,g=s*l,h=s*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=c*d+h,n[5]=o*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=s*f,n[10]=h*d+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EC,e,CC)}lookAt(e,n,r){const i=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Hr.crossVectors(r,mn),Hr.lengthSq()===0&&(Math.abs(r.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Hr.crossVectors(r,mn)),Hr.normalize(),dl.crossVectors(mn,Hr),i[0]=Hr.x,i[4]=dl.x,i[8]=mn.x,i[1]=Hr.y,i[5]=dl.y,i[9]=mn.y,i[2]=Hr.z,i[6]=dl.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],f=r[1],d=r[5],c=r[9],p=r[13],g=r[2],h=r[6],m=r[10],v=r[14],x=r[3],y=r[7],_=r[11],b=r[15],M=i[0],D=i[4],S=i[8],E=i[12],P=i[1],H=i[5],Y=i[9],F=i[13],N=i[2],$=i[6],J=i[10],ee=i[14],I=i[3],q=i[7],G=i[11],oe=i[15];return a[0]=o*M+s*P+l*N+u*I,a[4]=o*D+s*H+l*$+u*q,a[8]=o*S+s*Y+l*J+u*G,a[12]=o*E+s*F+l*ee+u*oe,a[1]=f*M+d*P+c*N+p*I,a[5]=f*D+d*H+c*$+p*q,a[9]=f*S+d*Y+c*J+p*G,a[13]=f*E+d*F+c*ee+p*oe,a[2]=g*M+h*P+m*N+v*I,a[6]=g*D+h*H+m*$+v*q,a[10]=g*S+h*Y+m*J+v*G,a[14]=g*E+h*F+m*ee+v*oe,a[3]=x*M+y*P+_*N+b*I,a[7]=x*D+y*H+_*$+b*q,a[11]=x*S+y*Y+_*J+b*G,a[15]=x*E+y*F+_*ee+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],f=e[2],d=e[6],c=e[10],p=e[14],g=e[3],h=e[7],m=e[11],v=e[15];return g*(+a*l*d-i*u*d-a*s*c+r*u*c+i*s*p-r*l*p)+h*(+n*l*p-n*u*c+a*o*c-i*o*p+i*u*f-a*l*f)+m*(+n*u*d-n*s*p-a*o*d+r*o*p+a*s*f-r*u*f)+v*(-i*s*f-n*l*d+n*s*c+i*o*d-r*o*c+r*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],f=e[8],d=e[9],c=e[10],p=e[11],g=e[12],h=e[13],m=e[14],v=e[15],x=d*m*u-h*c*u+h*l*p-s*m*p-d*l*v+s*c*v,y=g*c*u-f*m*u-g*l*p+o*m*p+f*l*v-o*c*v,_=f*h*u-g*d*u+g*s*p-o*h*p-f*s*v+o*d*v,b=g*d*l-f*h*l-g*s*c+o*h*c+f*s*m-o*d*m,M=n*x+r*y+i*_+a*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/M;return e[0]=x*D,e[1]=(h*c*a-d*m*a-h*i*p+r*m*p+d*i*v-r*c*v)*D,e[2]=(s*m*a-h*l*a+h*i*u-r*m*u-s*i*v+r*l*v)*D,e[3]=(d*l*a-s*c*a-d*i*u+r*c*u+s*i*p-r*l*p)*D,e[4]=y*D,e[5]=(f*m*a-g*c*a+g*i*p-n*m*p-f*i*v+n*c*v)*D,e[6]=(g*l*a-o*m*a-g*i*u+n*m*u+o*i*v-n*l*v)*D,e[7]=(o*c*a-f*l*a+f*i*u-n*c*u-o*i*p+n*l*p)*D,e[8]=_*D,e[9]=(g*d*a-f*h*a-g*r*p+n*h*p+f*r*v-n*d*v)*D,e[10]=(o*h*a-g*s*a+g*r*u-n*h*u-o*r*v+n*s*v)*D,e[11]=(f*s*a-o*d*a-f*r*u+n*d*u+o*r*p-n*s*p)*D,e[12]=b*D,e[13]=(f*h*i-g*d*i+g*r*c-n*h*c-f*r*m+n*d*m)*D,e[14]=(g*s*i-o*h*i-g*r*l+n*h*l+o*r*m-n*s*m)*D,e[15]=(o*d*i-f*s*i+f*r*l-n*d*l-o*r*c+n*s*c)*D,this}scale(e){const n=this.elements,r=e.x,i=e.y,a=e.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),a=1-r,o=e.x,s=e.y,l=e.z,u=a*o,f=a*s;return this.set(u*o+r,u*s-i*l,u*l+i*s,0,u*s+i*l,f*s+r,f*l-i*o,0,u*l-i*s,f*l+i*o,a*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,a,o){return this.set(1,r,a,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,f=o+o,d=s+s,c=a*u,p=a*f,g=a*d,h=o*f,m=o*d,v=s*d,x=l*u,y=l*f,_=l*d,b=r.x,M=r.y,D=r.z;return i[0]=(1-(h+v))*b,i[1]=(p+_)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(p-_)*M,i[5]=(1-(c+v))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(g+y)*D,i[9]=(m-x)*D,i[10]=(1-(c+h))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let a=aa.set(i[0],i[1],i[2]).length();const o=aa.set(i[4],i[5],i[6]).length(),s=aa.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const u=1/a,f=1/o,d=1/s;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=f,jn.elements[5]*=f,jn.elements[6]*=f,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,n.setFromRotationMatrix(jn),r.x=a,r.y=o,r.z=s,this}makePerspective(e,n,r,i,a,o){const s=this.elements,l=2*a/(n-e),u=2*a/(r-i),f=(n+e)/(n-e),d=(r+i)/(r-i),c=-(o+a)/(o-a),p=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=f,s[12]=0,s[1]=0,s[5]=u,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=c,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,n,r,i,a,o){const s=this.elements,l=1/(n-e),u=1/(r-i),f=1/(o-a),d=(n+e)*l,c=(r+i)*u,p=(o+a)*f;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-c,s[2]=0,s[6]=0,s[10]=-2*f,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const aa=new X,jn=new Ot,EC=new X(0,0,0),CC=new X(1,1,1),Hr=new X,dl=new X,mn=new X,iv=new Ot,av=new Os;class uc{constructor(e=0,n=0,r=0,i=uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,a=i[0],o=i[4],s=i[8],l=i[1],u=i[5],f=i[9],d=i[2],c=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(xn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return av.setFromEuler(this),this.setFromQuaternion(av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uc.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TC=0;const ov=new X,oa=new Os,Sr=new Ot,fl=new X,wo=new X,DC=new X,AC=new Os,sv=new X(1,0,0),lv=new X(0,1,0),uv=new X(0,0,1),PC={type:"added"},cv={type:"removed"};class Mn extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TC++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new X,n=new uc,r=new Os,i=new X(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new en}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oa.setFromAxisAngle(e,n),this.quaternion.multiply(oa),this}rotateOnWorldAxis(e,n){return oa.setFromAxisAngle(e,n),this.quaternion.premultiply(oa),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(lv,e)}rotateZ(e){return this.rotateOnAxis(uv,e)}translateOnAxis(e,n){return ov.copy(e).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(lv,e)}translateZ(e){return this.translateOnAxis(uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?fl.copy(e):fl.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(wo,fl,this.up):Sr.lookAt(fl,wo,this.up),this.quaternion.setFromRotationMatrix(Sr),i&&(Sr.extractRotation(i.matrixWorld),oa.setFromRotationMatrix(Sr),this.quaternion.premultiply(oa.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(cv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectsByProperty(e,n);o.length>0&&(r=r.concat(o))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,AC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const a=n[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let a=0,o=i.length;a<o;a++){const s=i[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));i.material=s}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),c=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),f.length>0&&(r.images=f),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=i,r;function o(s){const l=[];for(const u in s){const f=s[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Mn.DEFAULT_UP=new X(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new X,br=new X,Md=new X,wr=new X,sa=new X,la=new X,dv=new X,Ed=new X,Cd=new X,Td=new X;class Cr{constructor(e=new X,n=new X,r=new X){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),$n.subVectors(e,n),i.cross($n);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,n,r,i,a){$n.subVectors(i,n),br.subVectors(r,n),Md.subVectors(e,n);const o=$n.dot($n),s=$n.dot(br),l=$n.dot(Md),u=br.dot(br),f=br.dot(Md),d=o*u-s*s;if(d===0)return a.set(-2,-1,-1);const c=1/d,p=(u*l-s*f)*c,g=(o*f-s*l)*c;return a.set(1-p-g,g,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,wr),wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getUV(e,n,r,i,a,o,s,l){return this.getBarycoord(e,n,r,i,wr),l.set(0,0),l.addScaledVector(a,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(s,wr.z),l}static isFrontFacing(e,n,r,i){return $n.subVectors(r,n),br.subVectors(e,n),$n.cross(br).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),br.subVectors(this.a,this.b),$n.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cr.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,a){return Cr.getUV(e,this.a,this.b,this.c,n,r,i,a)}containsPoint(e){return Cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,a=this.c;let o,s;sa.subVectors(i,r),la.subVectors(a,r),Ed.subVectors(e,r);const l=sa.dot(Ed),u=la.dot(Ed);if(l<=0&&u<=0)return n.copy(r);Cd.subVectors(e,i);const f=sa.dot(Cd),d=la.dot(Cd);if(f>=0&&d<=f)return n.copy(i);const c=l*d-f*u;if(c<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(r).addScaledVector(sa,o);Td.subVectors(e,a);const p=sa.dot(Td),g=la.dot(Td);if(g>=0&&p<=g)return n.copy(a);const h=p*u-l*g;if(h<=0&&u>=0&&g<=0)return s=u/(u-g),n.copy(r).addScaledVector(la,s);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return dv.subVectors(a,i),s=(d-f)/(d-f+(p-g)),n.copy(i).addScaledVector(dv,s);const v=1/(m+h+c);return o=h*v,s=c*v,n.copy(r).addScaledVector(sa,o).addScaledVector(la,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let RC=0;class cc extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Fa,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=A_,this.blendDst=P_,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=up,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dd,this.stencilZFail=dd,this.stencilZPass=dd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const i=this[n];if(i===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(r.blending=this.blending),this.side!==hi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=i(e.textures),o=i(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=n[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&r===void 0?this.set(e):this.setRGB(e,n,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=lr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=Yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Yt.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=Yt.workingColorSpace){if(e=pC(e,1),n=xn(n,0,1),r=xn(r,0,1),n===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+n):r+n-r*n,o=2*r-a;this.r=Dd(o,a,e+1/3),this.g=Dd(o,a,e),this.b=Dd(o,a,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,n=lr){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Yt.toWorkingColorSpace(this,n),r(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Yt.toWorkingColorSpace(this,n),r(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(a[1])/360,u=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return r(a[4]),this.setHSL(l,u,f,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Yt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Yt.toWorkingColorSpace(this,n),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=lr){const r=U_[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=gd(e.r),this.g=gd(e.g),this.b=gd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lr){return Yt.fromWorkingColorSpace(Vt.copy(this),e),xn(Vt.r*255,0,255)<<16^xn(Vt.g*255,0,255)<<8^xn(Vt.b*255,0,255)<<0}getHexString(e=lr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Vt.copy(this),n);const r=Vt.r,i=Vt.g,a=Vt.b,o=Math.max(r,i,a),s=Math.min(r,i,a);let l,u;const f=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=f<=.5?d/(o+s):d/(2-o-s),o){case r:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-r)/d+2;break;case a:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=lr){Yt.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,r=Vt.g,i=Vt.b;return e!==lr?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${n*255|0},${r*255|0},${i*255|0})`}offsetHSL(e,n,r){return this.getHSL(qn),qn.h+=e,qn.s+=n,qn.l+=r,this.setHSL(qn.h,qn.s,qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(qn),e.getHSL(pl);const r=pd(qn.h,pl.h,n),i=pd(qn.s,pl.s,n),a=pd(qn.l,pl.l,n);return this.setHSL(r,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new st;st.NAMES=U_;class Ah extends cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new X,hl=new tt;class hr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ol(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ol(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ol(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ol(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),r=hn(r,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,a){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),r=hn(r,this.array),i=hn(i,this.array),a=hn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class G_ extends hr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class V_ extends hr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class mr extends hr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let LC=0;const In=new Ot,Ad=new Mn,ua=new X,gn=new Fs,Mo=new Fs,Ct=new X;class xi extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?V_:G_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new en().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,r){return In.makeTranslation(e,n,r),this.applyMatrix4(In),this}scale(e,n,r){return In.makeScale(e,n,r),this.applyMatrix4(In),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new mr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const a=n[r];gn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];Mo.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(gn.min,Mo.min),gn.expandByPoint(Ct),Ct.addVectors(gn.max,Mo.max),gn.expandByPoint(Ct)):(gn.expandByPoint(Mo.min),gn.expandByPoint(Mo.max))}gn.getCenter(r);let i=0;for(let a=0,o=e.count;a<o;a++)Ct.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(Ct));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,f=s.count;u<f;u++)Ct.fromBufferAttribute(s,u),l&&(ua.fromBufferAttribute(e,u),Ct.add(ua)),i=Math.max(i,r.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,a=n.normal.array,o=n.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let P=0;P<s;P++)u[P]=new X,f[P]=new X;const d=new X,c=new X,p=new X,g=new tt,h=new tt,m=new tt,v=new X,x=new X;function y(P,H,Y){d.fromArray(i,P*3),c.fromArray(i,H*3),p.fromArray(i,Y*3),g.fromArray(o,P*2),h.fromArray(o,H*2),m.fromArray(o,Y*2),c.sub(d),p.sub(d),h.sub(g),m.sub(g);const F=1/(h.x*m.y-m.x*h.y);isFinite(F)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(F),x.copy(p).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(F),u[P].add(v),u[H].add(v),u[Y].add(v),f[P].add(x),f[H].add(x),f[Y].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:r.length}]);for(let P=0,H=_.length;P<H;++P){const Y=_[P],F=Y.start,N=Y.count;for(let $=F,J=F+N;$<J;$+=3)y(r[$+0],r[$+1],r[$+2])}const b=new X,M=new X,D=new X,S=new X;function E(P){D.fromArray(a,P*3),S.copy(D);const H=u[P];b.copy(H),b.sub(D.multiplyScalar(D.dot(H))).normalize(),M.crossVectors(S,H);const F=M.dot(f[P])<0?-1:1;l[P*4]=b.x,l[P*4+1]=b.y,l[P*4+2]=b.z,l[P*4+3]=F}for(let P=0,H=_.length;P<H;++P){const Y=_[P],F=Y.start,N=Y.count;for(let $=F,J=F+N;$<J;$+=3)E(r[$+0]),E(r[$+1]),E(r[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);const i=new X,a=new X,o=new X,s=new X,l=new X,u=new X,f=new X,d=new X;if(e)for(let c=0,p=e.count;c<p;c+=3){const g=e.getX(c+0),h=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(n,g),a.fromBufferAttribute(n,h),o.fromBufferAttribute(n,m),f.subVectors(o,a),d.subVectors(i,a),f.cross(d),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,h),u.fromBufferAttribute(r,m),s.add(f),l.add(f),u.add(f),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(h,l.x,l.y,l.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let c=0,p=n.count;c<p;c+=3)i.fromBufferAttribute(n,c+0),a.fromBufferAttribute(n,c+1),o.fromBufferAttribute(n,c+2),f.subVectors(o,a),d.subVectors(i,a),f.cross(d),r.setXYZ(c+0,f.x,f.y,f.z),r.setXYZ(c+1,f.x,f.y,f.z),r.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(s,l){const u=s.array,f=s.itemSize,d=s.normalized,c=new u.constructor(l.length*f);let p=0,g=0;for(let h=0,m=l.length;h<m;h++){s.isInterleavedBufferAttribute?p=l[h]*s.data.stride+s.offset:p=l[h]*f;for(let v=0;v<f;v++)c[g++]=u[p++]}return new hr(c,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,r);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let f=0,d=u.length;f<d;f++){const c=u[f],p=e(c,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,c=u.length;d<c;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(i[l]=f,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(n))}const a=e.morphAttributes;for(const u in a){const f=[],d=a[u];for(let c=0,p=d.length;c<p;c++)f.push(d[c].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fv=new Ot,or=new MC,ml=new Dh,pv=new X,Eo=new X,Co=new X,To=new X,Pd=new X,gl=new X,vl=new tt,xl=new tt,yl=new tt,Rd=new X,_l=new X;class Rr extends Mn{constructor(e=new xi,n=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=i.length;a<o;a++){const s=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(a&&s){gl.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const f=s[l],d=a[l];f!==0&&(Pd.fromBufferAttribute(d,e),o?gl.addScaledVector(Pd,f):gl.addScaledVector(Pd.sub(n),f))}n.add(gl)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const r=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(a),or.copy(e.ray).recast(e.near),ml.containsPoint(or.origin)===!1&&(or.intersectSphere(ml,pv)===null||or.origin.distanceToSquared(pv)>(e.far-e.near)**2))||(fv.copy(a).invert(),or.copy(e.ray).applyMatrix4(fv),r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1))return;let o;const s=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv2,d=r.groups,c=r.drawRange;if(s!==null)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const h=d[p],m=i[h.materialIndex],v=Math.max(h.start,c.start),x=Math.min(s.count,Math.min(h.start+h.count,c.start+c.count));for(let y=v,_=x;y<_;y+=3){const b=s.getX(y),M=s.getX(y+1),D=s.getX(y+2);o=Sl(this,m,e,or,u,f,b,M,D),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const p=Math.max(0,c.start),g=Math.min(s.count,c.start+c.count);for(let h=p,m=g;h<m;h+=3){const v=s.getX(h),x=s.getX(h+1),y=s.getX(h+2);o=Sl(this,i,e,or,u,f,v,x,y),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=d.length;p<g;p++){const h=d[p],m=i[h.materialIndex],v=Math.max(h.start,c.start),x=Math.min(l.count,Math.min(h.start+h.count,c.start+c.count));for(let y=v,_=x;y<_;y+=3){const b=y,M=y+1,D=y+2;o=Sl(this,m,e,or,u,f,b,M,D),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const p=Math.max(0,c.start),g=Math.min(l.count,c.start+c.count);for(let h=p,m=g;h<m;h+=3){const v=h,x=h+1,y=h+2;o=Sl(this,i,e,or,u,f,v,x,y),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function IC(t,e,n,r,i,a,o,s){let l;if(e.side===bn?l=r.intersectTriangle(o,a,i,!0,s):l=r.intersectTriangle(i,a,o,e.side===hi,s),l===null)return null;_l.copy(s),_l.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(_l);return u<n.near||u>n.far?null:{distance:u,point:_l.clone(),object:t}}function Sl(t,e,n,r,i,a,o,s,l){t.getVertexPosition(o,Eo),t.getVertexPosition(s,Co),t.getVertexPosition(l,To);const u=IC(t,e,n,r,Eo,Co,To,Rd);if(u){i&&(vl.fromBufferAttribute(i,o),xl.fromBufferAttribute(i,s),yl.fromBufferAttribute(i,l),u.uv=Cr.getUV(Rd,Eo,Co,To,vl,xl,yl,new tt)),a&&(vl.fromBufferAttribute(a,o),xl.fromBufferAttribute(a,s),yl.fromBufferAttribute(a,l),u.uv2=Cr.getUV(Rd,Eo,Co,To,vl,xl,yl,new tt));const f={a:o,b:s,c:l,normal:new X,materialIndex:0};Cr.getNormal(Eo,Co,To,f.normal),u.face=f}return u}class zs extends xi{constructor(e=1,n=1,r=1,i=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:o};const s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],f=[],d=[];let c=0,p=0;g("z","y","x",-1,-1,r,n,e,o,a,0),g("z","y","x",1,-1,r,n,-e,o,a,1),g("x","z","y",1,1,e,r,n,i,o,2),g("x","z","y",1,-1,e,r,-n,i,o,3),g("x","y","z",1,-1,e,n,r,i,a,4),g("x","y","z",-1,-1,e,n,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new mr(u,3)),this.setAttribute("normal",new mr(f,3)),this.setAttribute("uv",new mr(d,2));function g(h,m,v,x,y,_,b,M,D,S,E){const P=_/D,H=b/S,Y=_/2,F=b/2,N=M/2,$=D+1,J=S+1;let ee=0,I=0;const q=new X;for(let G=0;G<J;G++){const oe=G*H-F;for(let A=0;A<$;A++){const O=A*P-Y;q[h]=O*x,q[m]=oe*y,q[v]=N,u.push(q.x,q.y,q.z),q[h]=0,q[m]=0,q[v]=M>0?1:-1,f.push(q.x,q.y,q.z),d.push(A/D),d.push(1-G/S),ee+=1}}for(let G=0;G<S;G++)for(let oe=0;oe<D;oe++){const A=c+oe+$*G,O=c+oe+$*(G+1),V=c+(oe+1)+$*(G+1),L=c+(oe+1)+$*G;l.push(A,O,L),l.push(O,V,L),I+=6}s.addGroup(p,I,E),p+=I,c+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const r=Qa(t[n]);for(const i in r)e[i]=r[i]}return e}function NC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W_(t){return t.getRenderTarget()===null&&t.outputEncoding===it?lr:hs}const kC={clone:Qa,merge:Zt};var OC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OC,this.fragmentShader=FC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=NC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class H_ extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yn extends H_{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tv*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tv*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*i/l,n-=o.offsetY*r/u,i*=o.width/l,r*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ca=-90,da=1;class zC extends Mn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r;const i=new yn(ca,da,e,n);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const a=new yn(ca,da,e,n);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new yn(ca,da,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new yn(ca,da,e,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new yn(ca,da,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new yn(ca,da,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[i,a,o,s,l,u]=this.children,f=e.getRenderTarget(),d=e.toneMapping,c=e.xr.enabled;e.toneMapping=Ir,e.xr.enabled=!1;const p=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,i),e.setRenderTarget(r,1),e.render(n,a),e.setRenderTarget(r,2),e.render(n,o),e.setRenderTarget(r,3),e.render(n,s),e.setRenderTarget(r,4),e.render(n,l),r.texture.generateMipmaps=p,e.setRenderTarget(r,5),e.render(n,u),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=c,r.texture.needsPMREMUpdate=!0}}class j_ extends wn{constructor(e,n,r,i,a,o,s,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ya,super(e,n,r,i,a,o,s,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BC extends qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new j_(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zs(5,5,5),a=new Xi({name:"CubemapFromEquirect",uniforms:Qa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:li});a.uniforms.tEquirect.value=n;const o=new Rr(i,a),s=n.minFilter;return n.minFilter===fs&&(n.minFilter=zn),new zC(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(a)}}const Ld=new X,UC=new X,GC=new en;class Di{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Ld.subVectors(r,n).cross(UC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ld),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||GC.getNormalMatrix(e),i=this.coplanarPoint(Ld).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fa=new Dh,bl=new X;class $_{constructor(e=new Di,n=new Di,r=new Di,i=new Di,a=new Di,o=new Di){this.planes=[e,n,r,i,a,o]}set(e,n,r,i,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],l=r[4],u=r[5],f=r[6],d=r[7],c=r[8],p=r[9],g=r[10],h=r[11],m=r[12],v=r[13],x=r[14],y=r[15];return n[0].setComponents(s-i,d-l,h-c,y-m).normalize(),n[1].setComponents(s+i,d+l,h+c,y+m).normalize(),n[2].setComponents(s+a,d+u,h+p,y+v).normalize(),n[3].setComponents(s-a,d-u,h-p,y-v).normalize(),n[4].setComponents(s-o,d-f,h-g,y-x).normalize(),n[5].setComponents(s+o,d+f,h+g,y+x).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSprite(e){return fa.center.set(0,0,0),fa.radius=.7071067811865476,fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(bl.x=i.normal.x>0?e.max.x:e.min.x,bl.y=i.normal.y>0?e.max.y:e.min.y,bl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q_(){let t=null,e=!1,n=null,r=null;function i(a,o){n(a,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function VC(t,e){const n=e.isWebGL2,r=new WeakMap;function i(u,f){const d=u.array,c=u.usage,p=t.createBuffer();t.bindBuffer(f,p),t.bufferData(f,d,c),u.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function a(u,f,d){const c=f.array,p=f.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,c):(n?t.bufferSubData(d,p.offset*c.BYTES_PER_ELEMENT,c,p.offset,p.count):t.bufferSubData(d,p.offset*c.BYTES_PER_ELEMENT,c.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=r.get(u);f&&(t.deleteBuffer(f.buffer),r.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const c=r.get(u);(!c||c.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=r.get(u);d===void 0?r.set(u,i(u,f)):d.version<u.version&&(a(d.buffer,u,f),d.version=u.version)}return{get:o,remove:s,update:l}}class Ph extends xi{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const a=e/2,o=n/2,s=Math.floor(r),l=Math.floor(i),u=s+1,f=l+1,d=e/s,c=n/l,p=[],g=[],h=[],m=[];for(let v=0;v<f;v++){const x=v*c-o;for(let y=0;y<u;y++){const _=y*d-a;g.push(_,-x,0),h.push(0,0,1),m.push(y/s),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<s;x++){const y=x+u*v,_=x+u*(v+1),b=x+1+u*(v+1),M=x+1+u*v;p.push(y,_,M),p.push(_,b,M)}this.setIndex(p),this.setAttribute("position",new mr(g,3)),this.setAttribute("normal",new mr(h,3)),this.setAttribute("uv",new mr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.width,e.height,e.widthSegments,e.heightSegments)}}var WC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,HC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$C=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YC="vec3 transformed = vec3( position );",KC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZC=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,QC=`#ifdef USE_IRIDESCENCE
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
#endif`,JC=`#ifdef USE_BUMPMAP
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
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l2=`#define PI 3.141592653589793
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
}`,u2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c2=`vec3 transformedNormal = objectNormal;
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
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m2="gl_FragColor = linearToOutputTexel( gl_FragColor );",g2=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v2=`#ifdef USE_ENVMAP
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
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y2=`#ifdef USE_ENVMAP
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
#endif`,_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
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
#endif`,b2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C2=`#ifdef USE_GRADIENTMAP
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
}`,T2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R2=`uniform bool receiveShadow;
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
#endif`,L2=`#if defined( USE_ENVMAP )
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
#endif`,I2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F2=`PhysicalMaterial material;
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
#endif`,z2=`struct PhysicalMaterial {
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
}`,B2=`
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
#endif`,U2=`#if defined( RE_IndirectDiffuse )
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
#endif`,G2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,V2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,j2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J2=`#ifdef USE_MORPHNORMALS
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
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,tT=`#ifdef USE_MORPHTARGETS
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
#endif`,nT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rT=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,iT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,lT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ST=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wT=`float getShadowMask() {
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
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,DT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,OT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,FT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,BT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,UT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qT=`#include <common>
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
}`,XT=`#if DEPTH_PACKING == 3200
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
}`,YT=`#define DISTANCE
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
}`,KT=`#define DISTANCE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JT=`uniform float scale;
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
}`,e3=`uniform vec3 diffuse;
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
}`,t3=`#include <common>
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
}`,n3=`uniform vec3 diffuse;
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
}`,r3=`#define LAMBERT
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
}`,i3=`#define LAMBERT
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
}`,a3=`#define MATCAP
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
}`,o3=`#define MATCAP
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
}`,s3=`#define NORMAL
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
}`,l3=`#define NORMAL
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
}`,u3=`#define PHONG
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
}`,c3=`#define PHONG
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
}`,d3=`#define STANDARD
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
}`,f3=`#define STANDARD
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
}`,p3=`#define TOON
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
}`,h3=`#define TOON
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
}`,m3=`uniform float size;
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
}`,g3=`uniform vec3 diffuse;
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
}`,v3=`#include <common>
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
}`,x3=`uniform vec3 color;
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
}`,y3=`uniform float rotation;
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
}`,_3=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:WC,alphamap_pars_fragment:HC,alphatest_fragment:jC,alphatest_pars_fragment:$C,aomap_fragment:qC,aomap_pars_fragment:XC,begin_vertex:YC,beginnormal_vertex:KC,bsdfs:ZC,iridescence_fragment:QC,bumpmap_pars_fragment:JC,clipping_planes_fragment:e2,clipping_planes_pars_fragment:t2,clipping_planes_pars_vertex:n2,clipping_planes_vertex:r2,color_fragment:i2,color_pars_fragment:a2,color_pars_vertex:o2,color_vertex:s2,common:l2,cube_uv_reflection_fragment:u2,defaultnormal_vertex:c2,displacementmap_pars_vertex:d2,displacementmap_vertex:f2,emissivemap_fragment:p2,emissivemap_pars_fragment:h2,encodings_fragment:m2,encodings_pars_fragment:g2,envmap_fragment:v2,envmap_common_pars_fragment:x2,envmap_pars_fragment:y2,envmap_pars_vertex:_2,envmap_physical_pars_fragment:L2,envmap_vertex:S2,fog_vertex:b2,fog_pars_vertex:w2,fog_fragment:M2,fog_pars_fragment:E2,gradientmap_pars_fragment:C2,lightmap_fragment:T2,lightmap_pars_fragment:D2,lights_lambert_fragment:A2,lights_lambert_pars_fragment:P2,lights_pars_begin:R2,lights_toon_fragment:I2,lights_toon_pars_fragment:N2,lights_phong_fragment:k2,lights_phong_pars_fragment:O2,lights_physical_fragment:F2,lights_physical_pars_fragment:z2,lights_fragment_begin:B2,lights_fragment_maps:U2,lights_fragment_end:G2,logdepthbuf_fragment:V2,logdepthbuf_pars_fragment:W2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:j2,map_fragment:$2,map_pars_fragment:q2,map_particle_fragment:X2,map_particle_pars_fragment:Y2,metalnessmap_fragment:K2,metalnessmap_pars_fragment:Z2,morphcolor_vertex:Q2,morphnormal_vertex:J2,morphtarget_pars_vertex:eT,morphtarget_vertex:tT,normal_fragment_begin:nT,normal_fragment_maps:rT,normal_pars_fragment:iT,normal_pars_vertex:aT,normal_vertex:oT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:lT,clearcoat_normal_fragment_maps:uT,clearcoat_pars_fragment:cT,iridescence_pars_fragment:dT,output_fragment:fT,packing:pT,premultiplied_alpha_fragment:hT,project_vertex:mT,dithering_fragment:gT,dithering_pars_fragment:vT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:yT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:ST,shadowmap_vertex:bT,shadowmask_pars_fragment:wT,skinbase_vertex:MT,skinning_pars_vertex:ET,skinning_vertex:CT,skinnormal_vertex:TT,specularmap_fragment:DT,specularmap_pars_fragment:AT,tonemapping_fragment:PT,tonemapping_pars_fragment:RT,transmission_fragment:LT,transmission_pars_fragment:IT,uv_pars_fragment:NT,uv_pars_vertex:kT,uv_vertex:OT,uv2_pars_fragment:FT,uv2_pars_vertex:zT,uv2_vertex:BT,worldpos_vertex:UT,background_vert:GT,background_frag:VT,backgroundCube_vert:WT,backgroundCube_frag:HT,cube_vert:jT,cube_frag:$T,depth_vert:qT,depth_frag:XT,distanceRGBA_vert:YT,distanceRGBA_frag:KT,equirect_vert:ZT,equirect_frag:QT,linedashed_vert:JT,linedashed_frag:e3,meshbasic_vert:t3,meshbasic_frag:n3,meshlambert_vert:r3,meshlambert_frag:i3,meshmatcap_vert:a3,meshmatcap_frag:o3,meshnormal_vert:s3,meshnormal_frag:l3,meshphong_vert:u3,meshphong_frag:c3,meshphysical_vert:d3,meshphysical_frag:f3,meshtoon_vert:p3,meshtoon_frag:h3,points_vert:m3,points_frag:g3,shadow_vert:v3,shadow_frag:x3,sprite_vert:y3,sprite_frag:_3},he={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}}},ur={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new st(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new st(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ur.physical={uniforms:Zt([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const wl={r:0,b:0,g:0};function S3(t,e,n,r,i,a,o){const s=new st(0);let l=a===!0?0:1,u,f,d=null,c=0,p=null;function g(m,v){let x=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y));const _=t.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?h(s,l):y&&y.isColor&&(h(y,1),x=!0),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===lc)?(f===void 0&&(f=new Rr(new zs(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Qa(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=y.encoding!==it,(d!==y||c!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=y,c=y.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Rr(new Ph(2,2),new Xi({name:"BackgroundMaterial",uniforms:Qa(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=y.encoding!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||c!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,c=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function h(m,v){m.getRGB(wl,W_(t)),r.buffers.color.setClear(wl.r,wl.g,wl.b,v,o)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),l=v,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,h(s,l)},render:g}}function b3(t,e,n,r){const i=t.getParameter(34921),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=m(null);let u=l,f=!1;function d(N,$,J,ee,I){let q=!1;if(o){const G=h(ee,J,$);u!==G&&(u=G,p(u.object)),q=v(N,ee,J,I),q&&x(N,ee,J,I)}else{const G=$.wireframe===!0;(u.geometry!==ee.id||u.program!==J.id||u.wireframe!==G)&&(u.geometry=ee.id,u.program=J.id,u.wireframe=G,q=!0)}I!==null&&n.update(I,34963),(q||f)&&(f=!1,S(N,$,J,ee),I!==null&&t.bindBuffer(34963,n.get(I).buffer))}function c(){return r.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(N){return r.isWebGL2?t.bindVertexArray(N):a.bindVertexArrayOES(N)}function g(N){return r.isWebGL2?t.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function h(N,$,J){const ee=J.wireframe===!0;let I=s[N.id];I===void 0&&(I={},s[N.id]=I);let q=I[$.id];q===void 0&&(q={},I[$.id]=q);let G=q[ee];return G===void 0&&(G=m(c()),q[ee]=G),G}function m(N){const $=[],J=[],ee=[];for(let I=0;I<i;I++)$[I]=0,J[I]=0,ee[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:ee,object:N,attributes:{},index:null}}function v(N,$,J,ee){const I=u.attributes,q=$.attributes;let G=0;const oe=J.getAttributes();for(const A in oe)if(oe[A].location>=0){const V=I[A];let L=q[A];if(L===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),V===void 0||V.attribute!==L||L&&V.data!==L.data)return!0;G++}return u.attributesNum!==G||u.index!==ee}function x(N,$,J,ee){const I={},q=$.attributes;let G=0;const oe=J.getAttributes();for(const A in oe)if(oe[A].location>=0){let V=q[A];V===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(V=N.instanceColor));const L={};L.attribute=V,V&&V.data&&(L.data=V.data),I[A]=L,G++}u.attributes=I,u.attributesNum=G,u.index=ee}function y(){const N=u.newAttributes;for(let $=0,J=N.length;$<J;$++)N[$]=0}function _(N){b(N,0)}function b(N,$){const J=u.newAttributes,ee=u.enabledAttributes,I=u.attributeDivisors;J[N]=1,ee[N]===0&&(t.enableVertexAttribArray(N),ee[N]=1),I[N]!==$&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),I[N]=$)}function M(){const N=u.newAttributes,$=u.enabledAttributes;for(let J=0,ee=$.length;J<ee;J++)$[J]!==N[J]&&(t.disableVertexAttribArray(J),$[J]=0)}function D(N,$,J,ee,I,q){r.isWebGL2===!0&&(J===5124||J===5125)?t.vertexAttribIPointer(N,$,J,I,q):t.vertexAttribPointer(N,$,J,ee,I,q)}function S(N,$,J,ee){if(r.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const I=ee.attributes,q=J.getAttributes(),G=$.defaultAttributeValues;for(const oe in q){const A=q[oe];if(A.location>=0){let O=I[oe];if(O===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){const V=O.normalized,L=O.itemSize,R=n.get(O);if(R===void 0)continue;const ne=R.buffer,j=R.type,ue=R.bytesPerElement;if(O.isInterleavedBufferAttribute){const ce=O.data,me=ce.stride,fe=O.offset;if(ce.isInstancedInterleavedBuffer){for(let Me=0;Me<A.locationSize;Me++)b(A.location+Me,ce.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Me=0;Me<A.locationSize;Me++)_(A.location+Me);t.bindBuffer(34962,ne);for(let Me=0;Me<A.locationSize;Me++)D(A.location+Me,L/A.locationSize,j,V,me*ue,(fe+L/A.locationSize*Me)*ue)}else{if(O.isInstancedBufferAttribute){for(let ce=0;ce<A.locationSize;ce++)b(A.location+ce,O.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ce=0;ce<A.locationSize;ce++)_(A.location+ce);t.bindBuffer(34962,ne);for(let ce=0;ce<A.locationSize;ce++)D(A.location+ce,L/A.locationSize,j,V,L*ue,L/A.locationSize*ce*ue)}}else if(G!==void 0){const V=G[oe];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(A.location,V);break;case 3:t.vertexAttrib3fv(A.location,V);break;case 4:t.vertexAttrib4fv(A.location,V);break;default:t.vertexAttrib1fv(A.location,V)}}}}M()}function E(){Y();for(const N in s){const $=s[N];for(const J in $){const ee=$[J];for(const I in ee)g(ee[I].object),delete ee[I];delete $[J]}delete s[N]}}function P(N){if(s[N.id]===void 0)return;const $=s[N.id];for(const J in $){const ee=$[J];for(const I in ee)g(ee[I].object),delete ee[I];delete $[J]}delete s[N.id]}function H(N){for(const $ in s){const J=s[$];if(J[N.id]===void 0)continue;const ee=J[N.id];for(const I in ee)g(ee[I].object),delete ee[I];delete J[N.id]}}function Y(){F(),f=!0,u!==l&&(u=l,p(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:_,disableUnusedAttributes:M}}function w3(t,e,n,r){const i=r.isWebGL2;let a;function o(u){a=u}function s(u,f){t.drawArrays(a,u,f),n.update(f,a,1)}function l(u,f,d){if(d===0)return;let c,p;if(i)c=t,p="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",c===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[p](a,u,f,d),n.update(f,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function M3(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){if(D==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),c=t.getParameter(35660),p=t.getParameter(3379),g=t.getParameter(34076),h=t.getParameter(34921),m=t.getParameter(36347),v=t.getParameter(36348),x=t.getParameter(36349),y=c>0,_=o||e.has("OES_texture_float"),b=y&&_,M=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:c,maxTextureSize:p,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:M}}function E3(t){const e=this;let n=null,r=0,i=!1,a=!1;const o=new Di,s=new en,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const p=d.length!==0||c||r!==0||i;return i=c,r=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){n=f(d,c,0)},this.setState=function(d,c,p){const g=d.clippingPlanes,h=d.clipIntersection,m=d.clipShadows,v=t.get(d);if(!i||g===null||g.length===0||a&&!m)a?f(null):u();else{const x=a?0:r,y=x*4;let _=v.clippingState||null;l.value=_,_=f(g,c,y,p);for(let b=0;b!==y;++b)_[b]=n[b];v.clippingState=_,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function f(d,c,p,g){const h=d!==null?d.length:0;let m=null;if(h!==0){if(m=l.value,g!==!0||m===null){const v=p+h*4,x=c.matrixWorldInverse;s.getNormalMatrix(x),(m===null||m.length<v)&&(m=new Float32Array(v));for(let y=0,_=p;y!==h;++y,_+=4)o.copy(d[y]).applyMatrix4(x,s),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,m}}function C3(t){let e=new WeakMap;function n(o,s){return s===cp?o.mapping=Ya:s===dp&&(o.mapping=Ka),o}function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===cp||s===dp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new BC(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",i),n(u.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class T3 extends H_{constructor(e=-1,n=1,r=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,o=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=f*this.view.offsetY,l=s-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Pa=4,hv=[.125,.215,.35,.446,.526,.582],Ri=20,Id=new T3,mv=new st;let Nd=null;const Ai=(1+Math.sqrt(5))/2,pa=1/Ai,gv=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Ai,pa),new X(0,Ai,-pa),new X(pa,0,Ai),new X(-pa,0,Ai),new X(Ai,pa,0),new X(-Ai,pa,0)];class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Nd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd),e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ya||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ps,format:Qn,encoding:$i,depthBuffer:!1},i=xv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,n,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D3(a)),this._blurMaterial=A3(a,e,n)}return i}_compileMaterial(e){const n=new Rr(this._lodPlanes[0],e);this._renderer.compile(n,Id)}_sceneToCubeUV(e,n,r,i){const s=new yn(90,1,n,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,c=f.toneMapping;f.getClearColor(mv),f.toneMapping=Ir,f.autoClear=!1;const p=new Ah({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),g=new Rr(new zs,p);let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(mv),h=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(s.up.set(0,l[v],0),s.lookAt(u[v],0,0)):x===1?(s.up.set(0,0,l[v]),s.lookAt(0,u[v],0)):(s.up.set(0,l[v],0),s.lookAt(0,0,u[v]));const y=this._cubeSize;Ml(i,x*y,v>2?y:0,y,y),f.setRenderTarget(i),h&&f.render(g,s),f.render(e,s)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=c,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ya||e.mapping===Ka;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new Rr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ml(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,Id)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=gv[(i-1)%gv.length];this._blur(e,i-1,i,a,o)}n.autoClear=r}_blur(e,n,r,i,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",a),this._halfBlur(o,e,r,r,i,"longitudinal",a)}_halfBlur(e,n,r,i,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Rr(this._lodPlanes[i],u),c=u.uniforms,p=this._sizeLods[r]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),h=a/g,m=isFinite(a)?1+Math.floor(f*h):Ri;m>Ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const v=[];let x=0;for(let D=0;D<Ri;++D){const S=D/h,E=Math.exp(-S*S/2);v.push(E),D===0?x+=E:D<m&&(x+=2*E)}for(let D=0;D<v.length;D++)v[D]=v[D]/x;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=v,c.latitudinal.value=o==="latitudinal",s&&(c.poleAxis.value=s);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-r;const _=this._sizeLods[i],b=3*_*(i>y-Pa?i-y+Pa:0),M=4*(this._cubeSize-_);Ml(n,b,M,3*_,2*_),l.setRenderTarget(n),l.render(d,Id)}}function D3(t){const e=[],n=[],r=[];let i=t;const a=t-Pa+1+hv.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);n.push(s);let l=1/s;o>t-Pa?l=hv[o-t+Pa-1]:o===0&&(l=0),r.push(l);const u=1/(s-2),f=-u,d=1+u,c=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,h=3,m=2,v=1,x=new Float32Array(h*g*p),y=new Float32Array(m*g*p),_=new Float32Array(v*g*p);for(let M=0;M<p;M++){const D=M%3*2/3-1,S=M>2?0:-1,E=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];x.set(E,h*g*M),y.set(c,m*g*M);const P=[M,M,M,M,M,M];_.set(P,v*g*M)}const b=new xi;b.setAttribute("position",new hr(x,h)),b.setAttribute("uv",new hr(y,m)),b.setAttribute("faceIndex",new hr(_,v)),e.push(b),i>Pa&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function xv(t,e,n){const r=new qi(t,e,n);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ml(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function A3(t,e,n){const r=new Float32Array(Ri),i=new X(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function yv(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function _v(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function P3(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===cp||l===dp,f=l===Ya||l===Ka;if(u||f)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new vv(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||f&&d&&i(d)){n===null&&(n=new vv(t));const c=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,c),s.addEventListener("dispose",a),c.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function R3(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function L3(t,e,n,r){const i={},a=new WeakMap;function o(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",o),delete i[c.id];const p=a.get(c);p&&(e.remove(p),a.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function s(d,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,n.memory.geometries++),c}function l(d){const c=d.attributes;for(const g in c)e.update(c[g],34962);const p=d.morphAttributes;for(const g in p){const h=p[g];for(let m=0,v=h.length;m<v;m++)e.update(h[m],34962)}}function u(d){const c=[],p=d.index,g=d.attributes.position;let h=0;if(p!==null){const x=p.array;h=p.version;for(let y=0,_=x.length;y<_;y+=3){const b=x[y+0],M=x[y+1],D=x[y+2];c.push(b,M,M,D,D,b)}}else{const x=g.array;h=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const b=y+0,M=y+1,D=y+2;c.push(b,M,M,D,D,b)}}const m=new(k_(c)?V_:G_)(c,1);m.version=h;const v=a.get(d);v&&e.remove(v),a.set(d,m)}function f(d){const c=a.get(d);if(c){const p=d.index;p!==null&&c.version<p.version&&u(d)}else u(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:f}}function I3(t,e,n,r){const i=r.isWebGL2;let a;function o(c){a=c}let s,l;function u(c){s=c.type,l=c.bytesPerElement}function f(c,p){t.drawElements(a,p,s,c*l),n.update(p,a,1)}function d(c,p,g){if(g===0)return;let h,m;if(i)h=t,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](a,p,s,c*l,g),n.update(p,a,g)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d}function N3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(n.calls++,o){case 4:n.triangles+=s*(a/3);break;case 1:n.lines+=s*(a/2);break;case 3:n.lines+=s*(a-1);break;case 2:n.lines+=s*a;break;case 0:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function k3(t,e){return t[0]-e[0]}function O3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function F3(t,e,n){const r={},i=new Float32Array(8),a=new WeakMap,o=new Nt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,f,d){const c=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,h=g!==void 0?g.length:0;let m=a.get(f);if(m===void 0||m.count!==h){let $=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",$)};var p=$;m!==void 0&&m.texture.dispose();const y=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],S=f.morphAttributes.color||[];let E=0;y===!0&&(E=1),_===!0&&(E=2),b===!0&&(E=3);let P=f.attributes.position.count*E,H=1;P>e.maxTextureSize&&(H=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Y=new Float32Array(P*H*4*h),F=new z_(Y,P,H,h);F.type=Oi,F.needsUpdate=!0;const N=E*4;for(let J=0;J<h;J++){const ee=M[J],I=D[J],q=S[J],G=P*H*4*J;for(let oe=0;oe<ee.count;oe++){const A=oe*N;y===!0&&(o.fromBufferAttribute(ee,oe),Y[G+A+0]=o.x,Y[G+A+1]=o.y,Y[G+A+2]=o.z,Y[G+A+3]=0),_===!0&&(o.fromBufferAttribute(I,oe),Y[G+A+4]=o.x,Y[G+A+5]=o.y,Y[G+A+6]=o.z,Y[G+A+7]=0),b===!0&&(o.fromBufferAttribute(q,oe),Y[G+A+8]=o.x,Y[G+A+9]=o.y,Y[G+A+10]=o.z,Y[G+A+11]=q.itemSize===4?o.w:1)}}m={count:h,texture:F,size:new tt(P,H)},a.set(f,m),f.addEventListener("dispose",$)}let v=0;for(let y=0;y<c.length;y++)v+=c[y];const x=f.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",c),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=c===void 0?0:c.length;let h=r[f.id];if(h===void 0||h.length!==g){h=[];for(let _=0;_<g;_++)h[_]=[_,0];r[f.id]=h}for(let _=0;_<g;_++){const b=h[_];b[0]=_,b[1]=c[_]}h.sort(O3);for(let _=0;_<8;_++)_<g&&h[_][1]?(s[_][0]=h[_][0],s[_][1]=h[_][1]):(s[_][0]=Number.MAX_SAFE_INTEGER,s[_][1]=0);s.sort(k3);const m=f.morphAttributes.position,v=f.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const b=s[_],M=b[0],D=b[1];M!==Number.MAX_SAFE_INTEGER&&D?(m&&f.getAttribute("morphTarget"+_)!==m[M]&&f.setAttribute("morphTarget"+_,m[M]),v&&f.getAttribute("morphNormal"+_)!==v[M]&&f.setAttribute("morphNormal"+_,v[M]),i[_]=D,x+=D):(m&&f.hasAttribute("morphTarget"+_)===!0&&f.deleteAttribute("morphTarget"+_),v&&f.hasAttribute("morphNormal"+_)===!0&&f.deleteAttribute("morphNormal"+_),i[_]=0)}const y=f.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function z3(t,e,n,r){let i=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,d=e.get(l,f);return i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const X_=new wn,Y_=new z_,K_=new bC,Z_=new j_,Sv=[],bv=[],wv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function so(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let a=Sv[i];if(a===void 0&&(a=new Float32Array(i),Sv[i]=a),e!==0){r.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function dc(t,e){let n=bv[e];n===void 0&&(n=new Int32Array(e),bv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function B3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function U3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function G3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function V3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function W3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(St(n,r))return;Ev.set(r),t.uniformMatrix2fv(this.addr,!1,Ev),bt(n,r)}}function H3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(St(n,r))return;Mv.set(r),t.uniformMatrix3fv(this.addr,!1,Mv),bt(n,r)}}function j3(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(St(n,r))return;wv.set(r),t.uniformMatrix4fv(this.addr,!1,wv),bt(n,r)}}function $3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function X3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function Y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function K3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Z3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function Q3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function J3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function eD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2D(e||X_,i)}function tD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||K_,i)}function nD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||Z_,i)}function rD(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Y_,i)}function iD(t){switch(t){case 5126:return B3;case 35664:return U3;case 35665:return G3;case 35666:return V3;case 35674:return W3;case 35675:return H3;case 35676:return j3;case 5124:case 35670:return $3;case 35667:case 35671:return q3;case 35668:case 35672:return X3;case 35669:case 35673:return Y3;case 5125:return K3;case 36294:return Z3;case 36295:return Q3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return eD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return rD}}function aD(t,e){t.uniform1fv(this.addr,e)}function oD(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function sD(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function lD(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function uD(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cD(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dD(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fD(t,e){t.uniform1iv(this.addr,e)}function pD(t,e){t.uniform2iv(this.addr,e)}function hD(t,e){t.uniform3iv(this.addr,e)}function mD(t,e){t.uniform4iv(this.addr,e)}function gD(t,e){t.uniform1uiv(this.addr,e)}function vD(t,e){t.uniform2uiv(this.addr,e)}function xD(t,e){t.uniform3uiv(this.addr,e)}function yD(t,e){t.uniform4uiv(this.addr,e)}function _D(t,e,n){const r=this.cache,i=e.length,a=dc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||X_,a[o])}function SD(t,e,n){const r=this.cache,i=e.length,a=dc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||K_,a[o])}function bD(t,e,n){const r=this.cache,i=e.length,a=dc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||Z_,a[o])}function wD(t,e,n){const r=this.cache,i=e.length,a=dc(n,i);St(r,a)||(t.uniform1iv(this.addr,a),bt(r,a));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||Y_,a[o])}function MD(t){switch(t){case 5126:return aD;case 35664:return oD;case 35665:return sD;case 35666:return lD;case 35674:return uD;case 35675:return cD;case 35676:return dD;case 5124:case 35670:return fD;case 35667:case 35671:return pD;case 35668:case 35672:return hD;case 35669:case 35673:return mD;case 5125:return gD;case 36294:return vD;case 36295:return xD;case 36296:return yD;case 35678:case 36198:case 36298:case 36306:case 35682:return _D;case 35679:case 36299:case 36307:return SD;case 35680:case 36300:case 36308:case 36293:return bD;case 36289:case 36303:case 36311:case 36292:return wD}}class ED{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=iD(n.type)}}class CD{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=MD(n.type)}}class TD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(e,n[s.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Cv(t,e){t.seq.push(e),t.map[e.id]=e}function DD(t,e,n){const r=t.name,i=r.length;for(kd.lastIndex=0;;){const a=kd.exec(r),o=kd.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){Cv(n,u===void 0?new ED(s,t,e):new CD(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new TD(s),Cv(n,d)),n=d}}}class Xl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,35718);for(let i=0;i<r;++i){const a=e.getActiveUniform(n,i),o=e.getUniformLocation(n,a.name);DD(a,o,this)}}setValue(e,n,r,i){const a=this.map[n];a!==void 0&&a.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,a=e.length;i!==a;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function Tv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}let AD=0;function PD(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=i;o<a;o++){const s=o+1;r.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return r.join(`
`)}function RD(t){switch(t){case $i:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Dv(t,e,n){const r=t.getShaderParameter(e,35713),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+PD(t.getShaderSource(e),o)}else return i}function LD(t,e){const n=RD(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function ID(t,e){let n;switch(e){case GE:n="Linear";break;case VE:n="Reinhard";break;case WE:n="OptimizedCineon";break;case HE:n="ACESFilmic";break;case jE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function ND(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ko).join(`
`)}function kD(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function OD(t,e){const n={},r=t.getProgramParameter(e,35721);for(let i=0;i<r;i++){const a=t.getActiveAttrib(e,i),o=a.name;let s=1;a.type===35674&&(s=2),a.type===35675&&(s=3),a.type===35676&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function ko(t){return t!==""}function Av(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FD=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(t){return t.replace(FD,zD)}function zD(t,e){const n=ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return mp(n)}const BD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(t){return t.replace(BD,UD)}function UD(t,e,n,r){let i="";for(let a=parseInt(e);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Lv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===D_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===No&&(e="SHADOWMAP_TYPE_VSM"),e}function VD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ya:case Ka:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function HD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case UE:e="ENVMAP_BLENDING_ADD";break}return e}function jD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function $D(t,e,n,r){const i=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=GD(n),u=VD(n),f=WD(n),d=HD(n),c=jD(n),p=n.isWebGL2?"":ND(n),g=kD(a),h=i.createProgram();let m,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[g].filter(ko).join(`
`),m.length>0&&(m+=`
`),v=[p,g].filter(ko).join(`
`),v.length>0&&(v+=`
`)):(m=[Lv(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),v=[p,Lv(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ir?ID("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,LD("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ko).join(`
`)),o=mp(o),o=Av(o,n),o=Pv(o,n),s=mp(s),s=Av(s,n),s=Pv(s,n),o=Rv(o),s=Rv(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",n.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+m+o,_=x+v+s,b=Tv(i,35633,y),M=Tv(i,35632,_);if(i.attachShader(h,b),i.attachShader(h,M),n.index0AttributeName!==void 0?i.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),t.debug.checkShaderErrors){const E=i.getProgramInfoLog(h).trim(),P=i.getShaderInfoLog(b).trim(),H=i.getShaderInfoLog(M).trim();let Y=!0,F=!0;if(i.getProgramParameter(h,35714)===!1){Y=!1;const N=Dv(i,b,"vertex"),$=Dv(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+E+`
`+N+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||H==="")&&(F=!1);F&&(this.diagnostics={runnable:Y,programLog:E,vertexShader:{log:P,prefix:m},fragmentShader:{log:H,prefix:v}})}i.deleteShader(b),i.deleteShader(M);let D;this.getUniforms=function(){return D===void 0&&(D=new Xl(i,h)),D};let S;return this.getAttributes=function(){return S===void 0&&(S=OD(i,h)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=AD++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=b,this.fragmentShader=M,this}let qD=0;class XD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new YD(e),n.set(e,r)),r}}class YD{constructor(e){this.id=qD++,this.code=e,this.usedTimes=0}}function KD(t,e,n,r,i,a,o){const s=new B_,l=new XD,u=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,c=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,E,P,H,Y){const F=H.fog,N=Y.geometry,$=S.isMeshStandardMaterial?H.environment:null,J=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),ee=J&&J.mapping===lc?J.image.height:null,I=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,G=q!==void 0?q.length:0;let oe=0;N.morphAttributes.position!==void 0&&(oe=1),N.morphAttributes.normal!==void 0&&(oe=2),N.morphAttributes.color!==void 0&&(oe=3);let A,O,V,L;if(I){const me=ur[I];A=me.vertexShader,O=me.fragmentShader}else A=S.vertexShader,O=S.fragmentShader,l.update(S),V=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);const R=t.getRenderTarget(),ne=S.alphaTest>0,j=S.clearcoat>0,ue=S.iridescence>0;return{isWebGL2:f,shaderID:I,shaderName:S.type,vertexShader:A,fragmentShader:O,defines:S.defines,customVertexShaderID:V,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:c,outputEncoding:R===null?t.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:$i,map:!!S.map,matcap:!!S.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===dC,tangentSpaceNormalMap:S.normalMapType===cC,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===it,clearcoat:j,clearcoatMap:j&&!!S.clearcoatMap,clearcoatRoughnessMap:j&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:j&&!!S.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!S.iridescenceMap,iridescenceThicknessMap:ue&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Fa,alphaMap:!!S.alphaMap,alphaTest:ne,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Ir,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pr,flipSided:S.side===bn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(t.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.combine),S.push(E.vertexUvs),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.map&&s.enable(4),E.matcap&&s.enable(5),E.envMap&&s.enable(6),E.lightMap&&s.enable(7),E.aoMap&&s.enable(8),E.emissiveMap&&s.enable(9),E.bumpMap&&s.enable(10),E.normalMap&&s.enable(11),E.objectSpaceNormalMap&&s.enable(12),E.tangentSpaceNormalMap&&s.enable(13),E.clearcoat&&s.enable(14),E.clearcoatMap&&s.enable(15),E.clearcoatRoughnessMap&&s.enable(16),E.clearcoatNormalMap&&s.enable(17),E.iridescence&&s.enable(18),E.iridescenceMap&&s.enable(19),E.iridescenceThicknessMap&&s.enable(20),E.displacementMap&&s.enable(21),E.specularMap&&s.enable(22),E.roughnessMap&&s.enable(23),E.metalnessMap&&s.enable(24),E.gradientMap&&s.enable(25),E.alphaMap&&s.enable(26),E.alphaTest&&s.enable(27),E.vertexColors&&s.enable(28),E.vertexAlphas&&s.enable(29),E.vertexUvs&&s.enable(30),E.vertexTangents&&s.enable(31),E.uvsVertexOnly&&s.enable(32),S.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.specularIntensityMap&&s.enable(15),E.specularColorMap&&s.enable(16),E.transmission&&s.enable(17),E.transmissionMap&&s.enable(18),E.thicknessMap&&s.enable(19),E.sheen&&s.enable(20),E.sheenColorMap&&s.enable(21),E.sheenRoughnessMap&&s.enable(22),E.decodeVideoTexture&&s.enable(23),E.opaque&&s.enable(24),S.push(s.mask)}function y(S){const E=g[S.type];let P;if(E){const H=ur[E];P=kC.clone(H.uniforms)}else P=S.uniforms;return P}function _(S,E){let P;for(let H=0,Y=u.length;H<Y;H++){const F=u[H];if(F.cacheKey===E){P=F,++P.usedTimes;break}}return P===void 0&&(P=new $D(t,E,S,a),u.push(P)),P}function b(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function D(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:D}}function ZD(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function r(a,o,s){t.get(a)[o]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function QD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Iv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nv(){const t=[];let e=0;const n=[],r=[],i=[];function a(){e=0,n.length=0,r.length=0,i.length=0}function o(d,c,p,g,h,m){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:c,material:p,groupOrder:g,renderOrder:d.renderOrder,z:h,group:m},t[e]=v):(v.id=d.id,v.object=d,v.geometry=c,v.material=p,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=h,v.group=m),e++,v}function s(d,c,p,g,h,m){const v=o(d,c,p,g,h,m);p.transmission>0?r.push(v):p.transparent===!0?i.push(v):n.push(v)}function l(d,c,p,g,h,m){const v=o(d,c,p,g,h,m);p.transmission>0?r.unshift(v):p.transparent===!0?i.unshift(v):n.unshift(v)}function u(d,c){n.length>1&&n.sort(d||QD),r.length>1&&r.sort(c||Iv),i.length>1&&i.sort(c||Iv)}function f(){for(let d=e,c=t.length;d<c;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:l,finish:f,sort:u}}function JD(){let t=new WeakMap;function e(r,i){const a=t.get(r);let o;return a===void 0?(o=new Nv,t.set(r,[o])):i>=a.length?(o=new Nv,a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new st};break;case"SpotLight":n={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nA=0;function rA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iA(t,e){const n=new eA,r=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new X);const a=new X,o=new Ot,s=new Ot;function l(f,d){let c=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,m=0,v=0,x=0,y=0,_=0,b=0,M=0,D=0,S=0;f.sort(rA);const E=d===!0?Math.PI:1;for(let H=0,Y=f.length;H<Y;H++){const F=f[H],N=F.color,$=F.intensity,J=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=N.r*$*E,p+=N.g*$*E,g+=N.b*$*E;else if(F.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(F.sh.coefficients[I],$);else if(F.isDirectionalLight){const I=n.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const q=F.shadow,G=r.get(F);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=ee,i.directionalShadowMatrix[h]=F.shadow.matrix,_++}i.directional[h]=I,h++}else if(F.isSpotLight){const I=n.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(N).multiplyScalar($*E),I.distance=J,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,i.spot[v]=I;const q=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,q.updateMatrices(F),F.castShadow&&S++),i.spotLightMatrix[v]=q.matrix,F.castShadow){const G=r.get(F);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ee,M++}v++}else if(F.isRectAreaLight){const I=n.get(F);I.color.copy(N).multiplyScalar($),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=I,x++}else if(F.isPointLight){const I=n.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity*E),I.distance=F.distance,I.decay=F.decay,F.castShadow){const q=F.shadow,G=r.get(F);G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=F.shadow.matrix,b++}i.point[m]=I,m++}else if(F.isHemisphereLight){const I=n.get(F);I.skyColor.copy(F.color).multiplyScalar($*E),I.groundColor.copy(F.groundColor).multiplyScalar($*E),i.hemi[y]=I,y++}}x>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==h||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==x||P.hemiLength!==y||P.numDirectionalShadows!==_||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+D-S,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=S,P.directionalLength=h,P.pointLength=m,P.spotLength=v,P.rectAreaLength=x,P.hemiLength=y,P.numDirectionalShadows=_,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=D,i.version=nA++)}function u(f,d){let c=0,p=0,g=0,h=0,m=0;const v=d.matrixWorldInverse;for(let x=0,y=f.length;x<y;x++){const _=f[x];if(_.isDirectionalLight){const b=i.directional[c];b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),c++}else if(_.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const b=i.rectArea[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(v),s.identity(),o.copy(_.matrixWorld),o.premultiply(v),s.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),h++}else if(_.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(v),p++}else if(_.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(v),m++}}}return{setup:l,setupView:u,state:i}}function kv(t,e){const n=new iA(t,e),r=[],i=[];function a(){r.length=0,i.length=0}function o(d){r.push(d)}function s(d){i.push(d)}function l(d){n.setup(r,d)}function u(d){n.setupView(r,d)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function aA(t,e){let n=new WeakMap;function r(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new kv(t,e),n.set(a,[l])):o>=s.length?(l=new kv(t,e),s.push(l)):l=s[o],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class oA extends cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
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
}`;function cA(t,e,n){let r=new $_;const i=new tt,a=new tt,o=new Nt,s=new oA({depthPacking:uC}),l=new sA,u={},f=n.maxTextureSize,d={[hi]:bn,[bn]:hi,[Pr]:Pr},c=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:lA,fragmentShader:uA}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Rr(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_,this.render=function(_,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;const D=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),P=t.state;P.setBlending(li),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let H=0,Y=_.length;H<Y;H++){const F=_[H],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const $=N.getFrameExtents();if(i.multiply($),a.copy(N.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/$.x),i.x=a.x*$.x,N.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/$.y),i.y=a.y*$.y,N.mapSize.y=a.y)),N.map===null){const ee=this.type!==No?{minFilter:Jt,magFilter:Jt}:{};N.map=new qi(i.x,i.y,ee),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const J=N.getViewportCount();for(let ee=0;ee<J;ee++){const I=N.getViewport(ee);o.set(a.x*I.x,a.y*I.y,a.x*I.z,a.y*I.w),P.viewport(o),N.updateMatrices(F,ee),r=N.getFrustum(),y(b,M,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===No&&v(N,M),N.needsUpdate=!1}m.needsUpdate=!1,t.setRenderTarget(D,S,E)};function v(_,b){const M=e.update(h);c.defines.VSM_SAMPLES!==_.blurSamples&&(c.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new qi(i.x,i.y)),c.uniforms.shadow_pass.value=_.map.texture,c.uniforms.resolution.value=_.mapSize,c.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(b,null,M,c,h,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(b,null,M,p,h,null)}function x(_,b,M,D,S,E){let P=null;const H=M.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(H!==void 0)P=H;else if(P=M.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=P.uuid,F=b.uuid;let N=u[Y];N===void 0&&(N={},u[Y]=N);let $=N[F];$===void 0&&($=P.clone(),N[F]=$),P=$}return P.visible=b.visible,P.wireframe=b.wireframe,E===No?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:d[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(M.matrixWorld),P.nearDistance=D,P.farDistance=S),P}function y(_,b,M,D,S){if(_.visible===!1)return;if(_.layers.test(b.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&S===No)&&(!_.frustumCulled||r.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,_.matrixWorld);const H=e.update(_),Y=_.material;if(Array.isArray(Y)){const F=H.groups;for(let N=0,$=F.length;N<$;N++){const J=F[N],ee=Y[J.materialIndex];if(ee&&ee.visible){const I=x(_,ee,D,M.near,M.far,S);t.renderBufferDirect(M,null,H,I,_,J)}}}else if(Y.visible){const F=x(_,Y,D,M.near,M.far,S);t.renderBufferDirect(M,null,H,F,_,null)}}const P=_.children;for(let H=0,Y=P.length;H<Y;H++)y(P[H],b,M,D,S)}}function dA(t,e,n){const r=n.isWebGL2;function i(){let k=!1;const Z=new Nt;let ae=null;const ve=new Nt(0,0,0,0);return{setMask:function(Se){ae!==Se&&!k&&(t.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){k=Se},setClear:function(Se,nt,Mt,qt,rr){rr===!0&&(Se*=qt,nt*=qt,Mt*=qt),Z.set(Se,nt,Mt,qt),ve.equals(Z)===!1&&(t.clearColor(Se,nt,Mt,qt),ve.copy(Z))},reset:function(){k=!1,ae=null,ve.set(-1,0,0,0)}}}function a(){let k=!1,Z=null,ae=null,ve=null;return{setTest:function(Se){Se?ne(2929):j(2929)},setMask:function(Se){Z!==Se&&!k&&(t.depthMask(Se),Z=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case LE:t.depthFunc(512);break;case IE:t.depthFunc(519);break;case NE:t.depthFunc(513);break;case up:t.depthFunc(515);break;case kE:t.depthFunc(514);break;case OE:t.depthFunc(518);break;case FE:t.depthFunc(516);break;case zE:t.depthFunc(517);break;default:t.depthFunc(515)}ae=Se}},setLocked:function(Se){k=Se},setClear:function(Se){ve!==Se&&(t.clearDepth(Se),ve=Se)},reset:function(){k=!1,Z=null,ae=null,ve=null}}}function o(){let k=!1,Z=null,ae=null,ve=null,Se=null,nt=null,Mt=null,qt=null,rr=null;return{setTest:function(pt){k||(pt?ne(2960):j(2960))},setMask:function(pt){Z!==pt&&!k&&(t.stencilMask(pt),Z=pt)},setFunc:function(pt,Ln,ir){(ae!==pt||ve!==Ln||Se!==ir)&&(t.stencilFunc(pt,Ln,ir),ae=pt,ve=Ln,Se=ir)},setOp:function(pt,Ln,ir){(nt!==pt||Mt!==Ln||qt!==ir)&&(t.stencilOp(pt,Ln,ir),nt=pt,Mt=Ln,qt=ir)},setLocked:function(pt){k=pt},setClear:function(pt){rr!==pt&&(t.clearStencil(pt),rr=pt)},reset:function(){k=!1,Z=null,ae=null,ve=null,Se=null,nt=null,Mt=null,qt=null,rr=null}}}const s=new i,l=new a,u=new o,f=new WeakMap,d=new WeakMap;let c={},p={},g=new WeakMap,h=[],m=null,v=!1,x=null,y=null,_=null,b=null,M=null,D=null,S=null,E=!1,P=null,H=null,Y=null,F=null,N=null;const $=t.getParameter(35661);let J=!1,ee=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(I)[1]),J=ee>=1):I.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),J=ee>=2);let q=null,G={};const oe=t.getParameter(3088),A=t.getParameter(2978),O=new Nt().fromArray(oe),V=new Nt().fromArray(A);function L(k,Z,ae){const ve=new Uint8Array(4),Se=t.createTexture();t.bindTexture(k,Se),t.texParameteri(k,10241,9728),t.texParameteri(k,10240,9728);for(let nt=0;nt<ae;nt++)t.texImage2D(Z+nt,0,6408,1,1,0,6408,5121,ve);return Se}const R={};R[3553]=L(3553,3553,1),R[34067]=L(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ne(2929),l.setFunc(up),Ue(!1),Te(wg),ne(2884),Be(li);function ne(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function j(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function ue(k,Z){return p[k]!==Z?(t.bindFramebuffer(k,Z),p[k]=Z,r&&(k===36009&&(p[36160]=Z),k===36160&&(p[36009]=Z)),!0):!1}function ce(k,Z){let ae=h,ve=!1;if(k)if(ae=g.get(Z),ae===void 0&&(ae=[],g.set(Z,ae)),k.isWebGLMultipleRenderTargets){const Se=k.texture;if(ae.length!==Se.length||ae[0]!==36064){for(let nt=0,Mt=Se.length;nt<Mt;nt++)ae[nt]=36064+nt;ae.length=Se.length,ve=!0}}else ae[0]!==36064&&(ae[0]=36064,ve=!0);else ae[0]!==1029&&(ae[0]=1029,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function me(k){return m!==k?(t.useProgram(k),m=k,!0):!1}const fe={[ga]:32774,[SE]:32778,[bE]:32779};if(r)fe[Tg]=32775,fe[Dg]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(fe[Tg]=k.MIN_EXT,fe[Dg]=k.MAX_EXT)}const Me={[wE]:0,[ME]:1,[EE]:768,[A_]:770,[RE]:776,[AE]:774,[TE]:772,[CE]:769,[P_]:771,[PE]:775,[DE]:773};function Be(k,Z,ae,ve,Se,nt,Mt,qt){if(k===li){v===!0&&(j(3042),v=!1);return}if(v===!1&&(ne(3042),v=!0),k!==_E){if(k!==x||qt!==E){if((y!==ga||M!==ga)&&(t.blendEquation(32774),y=ga,M=ga),qt)switch(k){case Fa:t.blendFuncSeparate(1,771,1,771);break;case Mg:t.blendFunc(1,1);break;case Eg:t.blendFuncSeparate(0,769,0,1);break;case Cg:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fa:t.blendFuncSeparate(770,771,1,771);break;case Mg:t.blendFunc(770,1);break;case Eg:t.blendFuncSeparate(0,769,0,1);break;case Cg:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,b=null,D=null,S=null,x=k,E=qt}return}Se=Se||Z,nt=nt||ae,Mt=Mt||ve,(Z!==y||Se!==M)&&(t.blendEquationSeparate(fe[Z],fe[Se]),y=Z,M=Se),(ae!==_||ve!==b||nt!==D||Mt!==S)&&(t.blendFuncSeparate(Me[ae],Me[ve],Me[nt],Me[Mt]),_=ae,b=ve,D=nt,S=Mt),x=k,E=!1}function Ae(k,Z){k.side===Pr?j(2884):ne(2884);let ae=k.side===bn;Z&&(ae=!ae),Ue(ae),k.blending===Fa&&k.transparent===!1?Be(li):Be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),s.setMask(k.colorWrite);const ve=k.stencilWrite;u.setTest(ve),ve&&(u.setMask(k.stencilWriteMask),u.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),u.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ne(32926):j(32926)}function Ue(k){P!==k&&(k?t.frontFace(2304):t.frontFace(2305),P=k)}function Te(k){k!==vE?(ne(2884),k!==H&&(k===wg?t.cullFace(1029):k===xE?t.cullFace(1028):t.cullFace(1032))):j(2884),H=k}function Ne(k){k!==Y&&(J&&t.lineWidth(k),Y=k)}function Ge(k,Z,ae){k?(ne(32823),(F!==Z||N!==ae)&&(t.polygonOffset(Z,ae),F=Z,N=ae)):j(32823)}function $e(k){k?ne(3089):j(3089)}function zt(k){k===void 0&&(k=33984+$-1),q!==k&&(t.activeTexture(k),q=k)}function T(k,Z,ae){ae===void 0&&(q===null?ae=33984+$-1:ae=q);let ve=G[ae];ve===void 0&&(ve={type:void 0,texture:void 0},G[ae]=ve),(ve.type!==k||ve.texture!==Z)&&(q!==ae&&(t.activeTexture(ae),q=ae),t.bindTexture(k,Z||R[k]),ve.type=k,ve.texture=Z)}function w(){const k=G[q];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(k){O.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),O.copy(k))}function Ee(k){V.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function qe(k,Z){let ae=d.get(Z);ae===void 0&&(ae=new WeakMap,d.set(Z,ae));let ve=ae.get(k);ve===void 0&&(ve=t.getUniformBlockIndex(Z,k.name),ae.set(k,ve))}function lt(k,Z){const ve=d.get(Z).get(k);f.get(Z)!==ve&&(t.uniformBlockBinding(Z,ve,k.__bindingPointIndex),f.set(Z,ve))}function wt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),r===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},q=null,G={},p={},g=new WeakMap,h=[],m=null,v=!1,x=null,y=null,_=null,b=null,M=null,D=null,S=null,E=!1,P=null,H=null,Y=null,F=null,N=null,O.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:ne,disable:j,bindFramebuffer:ue,drawBuffers:ce,useProgram:me,setBlending:Be,setMaterial:Ae,setFlipSided:Ue,setCullFace:Te,setLineWidth:Ne,setPolygonOffset:Ge,setScissorTest:$e,activeTexture:zt,bindTexture:T,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:re,texImage2D:be,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:lt,texStorage2D:te,texStorage3D:Pe,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:_e,compressedTexSubImage3D:ye,scissor:De,viewport:Ee,reset:wt}}function fA(t,e,n,r,i,a,o){const s=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,w){return v?new OffscreenCanvas(T,w):bu("canvas")}function y(T,w,z,re){let pe=1;if((T.width>re||T.height>re)&&(pe=re/Math.max(T.width,T.height)),pe<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ge=w?hC:Math.floor,_e=ge(pe*T.width),ye=ge(pe*T.height);h===void 0&&(h=x(_e,ye));const te=z?x(_e,ye):h;return te.width=_e,te.height=ye,te.getContext("2d").drawImage(T,0,0,_e,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+ye+")."),te}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return nv(T.width)&&nv(T.height)}function b(T){return s?!1:T.wrapS!==Zn||T.wrapT!==Zn||T.minFilter!==Jt&&T.minFilter!==zn}function M(T,w){return T.generateMipmaps&&w&&T.minFilter!==Jt&&T.minFilter!==zn}function D(T){t.generateMipmap(T)}function S(T,w,z,re,pe=!1){if(s===!1)return w;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ge=w;return w===6403&&(z===5126&&(ge=33326),z===5131&&(ge=33325),z===5121&&(ge=33321)),w===33319&&(z===5126&&(ge=33328),z===5131&&(ge=33327),z===5121&&(ge=33323)),w===6408&&(z===5126&&(ge=34836),z===5131&&(ge=34842),z===5121&&(ge=re===it&&pe===!1?35907:32856),z===32819&&(ge=32854),z===32820&&(ge=32855)),(ge===33325||ge===33326||ge===33327||ge===33328||ge===34842||ge===34836)&&e.get("EXT_color_buffer_float"),ge}function E(T,w,z){return M(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function P(T){return T===Jt||T===Ag||T===ad?9728:9729}function H(T){const w=T.target;w.removeEventListener("dispose",H),F(w),w.isVideoTexture&&g.delete(w)}function Y(T){const w=T.target;w.removeEventListener("dispose",Y),$(w)}function F(T){const w=r.get(T);if(w.__webglInit===void 0)return;const z=T.source,re=m.get(z);if(re){const pe=re[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&N(T),Object.keys(re).length===0&&m.delete(z)}r.remove(T)}function N(T){const w=r.get(T);t.deleteTexture(w.__webglTexture);const z=T.source,re=m.get(z);delete re[w.__cacheKey],o.memory.textures--}function $(T){const w=T.texture,z=r.get(T),re=r.get(w);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)t.deleteFramebuffer(z.__webglFramebuffer[pe]),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[pe]);else{if(t.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let pe=0;pe<z.__webglColorRenderbuffer.length;pe++)z.__webglColorRenderbuffer[pe]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[pe]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let pe=0,ge=w.length;pe<ge;pe++){const _e=r.get(w[pe]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),r.remove(w[pe])}r.remove(w),r.remove(T)}let J=0;function ee(){J=0}function I(){const T=J;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),J+=1,T}function q(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function G(T,w){const z=r.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,T,w);return}}n.bindTexture(3553,z.__webglTexture,33984+w)}function oe(T,w){const z=r.get(T);if(T.version>0&&z.__version!==T.version){j(z,T,w);return}n.bindTexture(35866,z.__webglTexture,33984+w)}function A(T,w){const z=r.get(T);if(T.version>0&&z.__version!==T.version){j(z,T,w);return}n.bindTexture(32879,z.__webglTexture,33984+w)}function O(T,w){const z=r.get(T);if(T.version>0&&z.__version!==T.version){ue(z,T,w);return}n.bindTexture(34067,z.__webglTexture,33984+w)}const V={[fp]:10497,[Zn]:33071,[pp]:33648},L={[Jt]:9728,[Ag]:9984,[ad]:9986,[zn]:9729,[$E]:9985,[fs]:9987};function R(T,w,z){if(z?(t.texParameteri(T,10242,V[w.wrapS]),t.texParameteri(T,10243,V[w.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,V[w.wrapR]),t.texParameteri(T,10240,L[w.magFilter]),t.texParameteri(T,10241,L[w.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(w.wrapS!==Zn||w.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,P(w.magFilter)),t.texParameteri(T,10241,P(w.minFilter)),w.minFilter!==Jt&&w.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Jt||w.minFilter!==ad&&w.minFilter!==fs||w.type===Oi&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(t.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function ne(T,w){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",H));const re=w.source;let pe=m.get(re);pe===void 0&&(pe={},m.set(re,pe));const ge=q(w);if(ge!==T.__cacheKey){pe[ge]===void 0&&(pe[ge]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),pe[ge].usedTimes++;const _e=pe[T.__cacheKey];_e!==void 0&&(pe[T.__cacheKey].usedTimes--,_e.usedTimes===0&&N(w)),T.__cacheKey=ge,T.__webglTexture=pe[ge].texture}return z}function j(T,w,z){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const pe=ne(T,w),ge=w.source;n.bindTexture(re,T.__webglTexture,33984+z);const _e=r.get(ge);if(ge.version!==_e.__version||pe===!0){n.activeTexture(33984+z),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const ye=b(w)&&_(w.image)===!1;let te=y(w.image,ye,!1,f);te=zt(w,te);const Pe=_(te)||s,be=a.convert(w.format,w.encoding);let Re=a.convert(w.type),De=S(w.internalFormat,be,Re,w.encoding,w.isVideoTexture);R(re,w,Pe);let Ee;const qe=w.mipmaps,lt=s&&w.isVideoTexture!==!0,wt=_e.__version===void 0||pe===!0,k=E(w,te,Pe);if(w.isDepthTexture)De=6402,s?w.type===Oi?De=36012:w.type===ki?De=33190:w.type===za?De=35056:De=33189:w.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Bi&&De===6402&&w.type!==I_&&w.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ki,Re=a.convert(w.type)),w.format===Za&&De===6402&&(De=34041,w.type!==za&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=za,Re=a.convert(w.type))),wt&&(lt?n.texStorage2D(3553,1,De,te.width,te.height):n.texImage2D(3553,0,De,te.width,te.height,0,be,Re,null));else if(w.isDataTexture)if(qe.length>0&&Pe){lt&&wt&&n.texStorage2D(3553,k,De,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)Ee=qe[Z],lt?n.texSubImage2D(3553,Z,0,0,Ee.width,Ee.height,be,Re,Ee.data):n.texImage2D(3553,Z,De,Ee.width,Ee.height,0,be,Re,Ee.data);w.generateMipmaps=!1}else lt?(wt&&n.texStorage2D(3553,k,De,te.width,te.height),n.texSubImage2D(3553,0,0,0,te.width,te.height,be,Re,te.data)):n.texImage2D(3553,0,De,te.width,te.height,0,be,Re,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&wt&&n.texStorage3D(35866,k,De,qe[0].width,qe[0].height,te.depth);for(let Z=0,ae=qe.length;Z<ae;Z++)Ee=qe[Z],w.format!==Qn?be!==null?lt?n.compressedTexSubImage3D(35866,Z,0,0,0,Ee.width,Ee.height,te.depth,be,Ee.data,0,0):n.compressedTexImage3D(35866,Z,De,Ee.width,Ee.height,te.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?n.texSubImage3D(35866,Z,0,0,0,Ee.width,Ee.height,te.depth,be,Re,Ee.data):n.texImage3D(35866,Z,De,Ee.width,Ee.height,te.depth,0,be,Re,Ee.data)}else{lt&&wt&&n.texStorage2D(3553,k,De,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)Ee=qe[Z],w.format!==Qn?be!==null?lt?n.compressedTexSubImage2D(3553,Z,0,0,Ee.width,Ee.height,be,Ee.data):n.compressedTexImage2D(3553,Z,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?n.texSubImage2D(3553,Z,0,0,Ee.width,Ee.height,be,Re,Ee.data):n.texImage2D(3553,Z,De,Ee.width,Ee.height,0,be,Re,Ee.data)}else if(w.isDataArrayTexture)lt?(wt&&n.texStorage3D(35866,k,De,te.width,te.height,te.depth),n.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,be,Re,te.data)):n.texImage3D(35866,0,De,te.width,te.height,te.depth,0,be,Re,te.data);else if(w.isData3DTexture)lt?(wt&&n.texStorage3D(32879,k,De,te.width,te.height,te.depth),n.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,be,Re,te.data)):n.texImage3D(32879,0,De,te.width,te.height,te.depth,0,be,Re,te.data);else if(w.isFramebufferTexture){if(wt)if(lt)n.texStorage2D(3553,k,De,te.width,te.height);else{let Z=te.width,ae=te.height;for(let ve=0;ve<k;ve++)n.texImage2D(3553,ve,De,Z,ae,0,be,Re,null),Z>>=1,ae>>=1}}else if(qe.length>0&&Pe){lt&&wt&&n.texStorage2D(3553,k,De,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)Ee=qe[Z],lt?n.texSubImage2D(3553,Z,0,0,be,Re,Ee):n.texImage2D(3553,Z,De,be,Re,Ee);w.generateMipmaps=!1}else lt?(wt&&n.texStorage2D(3553,k,De,te.width,te.height),n.texSubImage2D(3553,0,0,0,be,Re,te)):n.texImage2D(3553,0,De,be,Re,te);M(w,Pe)&&D(re),_e.__version=ge.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ue(T,w,z){if(w.image.length!==6)return;const re=ne(T,w),pe=w.source;n.bindTexture(34067,T.__webglTexture,33984+z);const ge=r.get(pe);if(pe.version!==ge.__version||re===!0){n.activeTexture(33984+z),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const _e=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,te=[];for(let Z=0;Z<6;Z++)!_e&&!ye?te[Z]=y(w.image[Z],!1,!0,u):te[Z]=ye?w.image[Z].image:w.image[Z],te[Z]=zt(w,te[Z]);const Pe=te[0],be=_(Pe)||s,Re=a.convert(w.format,w.encoding),De=a.convert(w.type),Ee=S(w.internalFormat,Re,De,w.encoding),qe=s&&w.isVideoTexture!==!0,lt=ge.__version===void 0||re===!0;let wt=E(w,Pe,be);R(34067,w,be);let k;if(_e){qe&&lt&&n.texStorage2D(34067,wt,Ee,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){k=te[Z].mipmaps;for(let ae=0;ae<k.length;ae++){const ve=k[ae];w.format!==Qn?Re!==null?qe?n.compressedTexSubImage2D(34069+Z,ae,0,0,ve.width,ve.height,Re,ve.data):n.compressedTexImage2D(34069+Z,ae,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?n.texSubImage2D(34069+Z,ae,0,0,ve.width,ve.height,Re,De,ve.data):n.texImage2D(34069+Z,ae,Ee,ve.width,ve.height,0,Re,De,ve.data)}}}else{k=w.mipmaps,qe&&lt&&(k.length>0&&wt++,n.texStorage2D(34067,wt,Ee,te[0].width,te[0].height));for(let Z=0;Z<6;Z++)if(ye){qe?n.texSubImage2D(34069+Z,0,0,0,te[Z].width,te[Z].height,Re,De,te[Z].data):n.texImage2D(34069+Z,0,Ee,te[Z].width,te[Z].height,0,Re,De,te[Z].data);for(let ae=0;ae<k.length;ae++){const Se=k[ae].image[Z].image;qe?n.texSubImage2D(34069+Z,ae+1,0,0,Se.width,Se.height,Re,De,Se.data):n.texImage2D(34069+Z,ae+1,Ee,Se.width,Se.height,0,Re,De,Se.data)}}else{qe?n.texSubImage2D(34069+Z,0,0,0,Re,De,te[Z]):n.texImage2D(34069+Z,0,Ee,Re,De,te[Z]);for(let ae=0;ae<k.length;ae++){const ve=k[ae];qe?n.texSubImage2D(34069+Z,ae+1,0,0,Re,De,ve.image[Z]):n.texImage2D(34069+Z,ae+1,Ee,Re,De,ve.image[Z])}}}M(w,be)&&D(34067),ge.__version=pe.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ce(T,w,z,re,pe){const ge=a.convert(z.format,z.encoding),_e=a.convert(z.type),ye=S(z.internalFormat,ge,_e,z.encoding);r.get(w).__hasExternalTextures||(pe===32879||pe===35866?n.texImage3D(pe,0,ye,w.width,w.height,w.depth,0,ge,_e,null):n.texImage2D(pe,0,ye,w.width,w.height,0,ge,_e,null)),n.bindFramebuffer(36160,T),Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,re,pe,r.get(z).__webglTexture,0,Ne(w)):(pe===3553||pe>=34069&&pe<=34074)&&t.framebufferTexture2D(36160,re,pe,r.get(z).__webglTexture,0),n.bindFramebuffer(36160,null)}function me(T,w,z){if(t.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(z||Ge(w)){const pe=w.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Oi?re=36012:pe.type===ki&&(re=33190));const ge=Ne(w);Ge(w)?c.renderbufferStorageMultisampleEXT(36161,ge,re,w.width,w.height):t.renderbufferStorageMultisample(36161,ge,re,w.width,w.height)}else t.renderbufferStorage(36161,re,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const re=Ne(w);z&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):Ge(w)?c.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let pe=0;pe<re.length;pe++){const ge=re[pe],_e=a.convert(ge.format,ge.encoding),ye=a.convert(ge.type),te=S(ge.internalFormat,_e,ye,ge.encoding),Pe=Ne(w);z&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,Pe,te,w.width,w.height):Ge(w)?c.renderbufferStorageMultisampleEXT(36161,Pe,te,w.width,w.height):t.renderbufferStorage(36161,te,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function fe(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const re=r.get(w.depthTexture).__webglTexture,pe=Ne(w);if(w.depthTexture.format===Bi)Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,pe):t.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===Za)Ge(w)?c.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,pe):t.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Me(T){const w=r.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,T)}else if(z){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=t.createRenderbuffer(),me(w.__webglDepthbuffer[re],T,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),me(w.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function Be(T,w,z){const re=r.get(T);w!==void 0&&ce(re.__webglFramebuffer,T,T.texture,36064,3553),z!==void 0&&Me(T)}function Ae(T){const w=T.texture,z=r.get(T),re=r.get(w);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,o.memory.textures++);const pe=T.isWebGLCubeRenderTarget===!0,ge=T.isWebGLMultipleRenderTargets===!0,_e=_(T)||s;if(pe){z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)z.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(z.__webglFramebuffer=t.createFramebuffer(),ge)if(i.drawBuffers){const ye=T.texture;for(let te=0,Pe=ye.length;te<Pe;te++){const be=r.get(ye[te]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&Ge(T)===!1){const ye=ge?w:[w];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let te=0;te<ye.length;te++){const Pe=ye[te];z.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(36161,z.__webglColorRenderbuffer[te]);const be=a.convert(Pe.format,Pe.encoding),Re=a.convert(Pe.type),De=S(Pe.internalFormat,be,Re,Pe.encoding,T.isXRRenderTarget===!0),Ee=Ne(T);t.renderbufferStorageMultisample(36161,Ee,De,T.width,T.height),t.framebufferRenderbuffer(36160,36064+te,36161,z.__webglColorRenderbuffer[te])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),me(z.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(pe){n.bindTexture(34067,re.__webglTexture),R(34067,w,_e);for(let ye=0;ye<6;ye++)ce(z.__webglFramebuffer[ye],T,w,36064,34069+ye);M(w,_e)&&D(34067),n.unbindTexture()}else if(ge){const ye=T.texture;for(let te=0,Pe=ye.length;te<Pe;te++){const be=ye[te],Re=r.get(be);n.bindTexture(3553,Re.__webglTexture),R(3553,be,_e),ce(z.__webglFramebuffer,T,be,36064+te,3553),M(be,_e)&&D(3553)}n.unbindTexture()}else{let ye=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?ye=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,re.__webglTexture),R(ye,w,_e),ce(z.__webglFramebuffer,T,w,36064,ye),M(w,_e)&&D(ye),n.unbindTexture()}T.depthBuffer&&Me(T)}function Ue(T){const w=_(T)||s,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,pe=z.length;re<pe;re++){const ge=z[re];if(M(ge,w)){const _e=T.isWebGLCubeRenderTarget?34067:3553,ye=r.get(ge).__webglTexture;n.bindTexture(_e,ye),D(_e),n.unbindTexture()}}}function Te(T){if(s&&T.samples>0&&Ge(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,re=T.height;let pe=16384;const ge=[],_e=T.stencilBuffer?33306:36096,ye=r.get(T),te=T.isWebGLMultipleRenderTargets===!0;if(te)for(let Pe=0;Pe<w.length;Pe++)n.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Pe,36161,null),n.bindFramebuffer(36160,ye.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Pe,3553,null,0);n.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){ge.push(36064+Pe),T.depthBuffer&&ge.push(_e);const be=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(be===!1&&(T.depthBuffer&&(pe|=256),T.stencilBuffer&&(pe|=1024)),te&&t.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Pe]),be===!0&&(t.invalidateFramebuffer(36008,[_e]),t.invalidateFramebuffer(36009,[_e])),te){const Re=r.get(w[Pe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Re,0)}t.blitFramebuffer(0,0,z,re,0,0,z,re,pe,9728),p&&t.invalidateFramebuffer(36008,ge)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),te)for(let Pe=0;Pe<w.length;Pe++){n.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+Pe,36161,ye.__webglColorRenderbuffer[Pe]);const be=r.get(w[Pe]).__webglTexture;n.bindFramebuffer(36160,ye.__webglFramebuffer),t.framebufferTexture2D(36009,36064+Pe,3553,be,0)}n.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function Ne(T){return Math.min(d,T.samples)}function Ge(T){const w=r.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(T){const w=o.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function zt(T,w){const z=T.encoding,re=T.format,pe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===hp||z!==$i&&(z===it?s===!1?e.has("EXT_sRGB")===!0&&re===Qn?(T.format=hp,T.minFilter=zn,T.generateMipmaps=!1):w=O_.sRGBToLinear(w):(re!==Qn||pe!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),w}this.allocateTextureUnit=I,this.resetTextureUnits=ee,this.setTexture2D=G,this.setTexture2DArray=oe,this.setTexture3D=A,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ge}function pA(t,e,n){const r=n.isWebGL2;function i(a,o=null){let s;if(a===ji)return 5121;if(a===KE)return 32819;if(a===ZE)return 32820;if(a===qE)return 5120;if(a===XE)return 5122;if(a===I_)return 5123;if(a===YE)return 5124;if(a===ki)return 5125;if(a===Oi)return 5126;if(a===ps)return r?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===QE)return 6406;if(a===Qn)return 6408;if(a===JE)return 6409;if(a===eC)return 6410;if(a===Bi)return 6402;if(a===Za)return 34041;if(a===hp)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===tC)return 6403;if(a===nC)return 36244;if(a===rC)return 33319;if(a===iC)return 33320;if(a===aC)return 36249;if(a===od||a===sd||a===ld||a===ud)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===od)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===sd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ld)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ud)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===od)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===sd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ld)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ud)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pg||a===Rg||a===Lg||a===Ig)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Pg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Lg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ig)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===oC)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ng||a===kg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ng)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===kg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Og||a===Fg||a===zg||a===Bg||a===Ug||a===Gg||a===Vg||a===Wg||a===Hg||a===jg||a===$g||a===qg||a===Xg||a===Yg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Og)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Fg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===zg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Bg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ug)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Vg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Wg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===$g)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===qg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yg)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===cd)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===sC||a===Kg||a===Zg||a===Qg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===cd)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Kg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Qg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===za?r?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:i}}class hA extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mA={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const m=n.getJointPose(h,r),v=this._getHandJoint(u,h);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],c=f.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&c>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(mA)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new El;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class gA extends wn{constructor(e,n,r,i,a,o,s,l,u,f){if(f=f!==void 0?f:Bi,f!==Bi&&f!==Za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===Bi&&(r=ki),r===void 0&&f===Za&&(r=za),super(null,i,a,o,s,l,f,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1}}class vA extends oo{constructor(e,n){super();const r=this;let i=null,a=1,o=null,s="local-floor",l=1,u=null,f=null,d=null,c=null,p=null,g=null;const h=n.getContextAttributes();let m=null,v=null;const x=[],y=[],_=new Set,b=new Map,M=new yn;M.layers.enable(1),M.viewport=new Nt;const D=new yn;D.layers.enable(2),D.viewport=new Nt;const S=[M,D],E=new hA;E.layers.enable(1),E.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let O=x[A];return O===void 0&&(O=new Od,x[A]=O),O.getTargetRaySpace()},this.getControllerGrip=function(A){let O=x[A];return O===void 0&&(O=new Od,x[A]=O),O.getGripSpace()},this.getHand=function(A){let O=x[A];return O===void 0&&(O=new Od,x[A]=O),O.getHandSpace()};function Y(A){const O=y.indexOf(A.inputSource);if(O===-1)return;const V=x[O];V!==void 0&&V.dispatchEvent({type:A.type,data:A.inputSource})}function F(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",N);for(let A=0;A<x.length;A++){const O=y[A];O!==null&&(y[A]=null,x[A].disconnect(O))}P=null,H=null,e.setRenderTarget(m),p=null,c=null,d=null,i=null,v=null,oe.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){a=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){s=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(A){u=A},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",F),i.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await n.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,n,O),i.updateRenderState({baseLayer:p}),v=new qi(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:ji,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let O=null,V=null,L=null;h.depth&&(L=h.stencil?35056:33190,O=h.stencil?Za:Bi,V=h.stencil?za:ki);const R={colorFormat:32856,depthFormat:L,scaleFactor:a};d=new XRWebGLBinding(i,n),c=d.createProjectionLayer(R),i.updateRenderState({layers:[c]}),v=new qi(c.textureWidth,c.textureHeight,{format:Qn,type:ji,depthTexture:new gA(c.textureWidth,c.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ne=e.properties.get(v);ne.__ignoreDepthValues=c.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(s),oe.setContext(i),oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function N(A){for(let O=0;O<A.removed.length;O++){const V=A.removed[O],L=y.indexOf(V);L>=0&&(y[L]=null,x[L].disconnect(V))}for(let O=0;O<A.added.length;O++){const V=A.added[O];let L=y.indexOf(V);if(L===-1){for(let ne=0;ne<x.length;ne++)if(ne>=y.length){y.push(V),L=ne;break}else if(y[ne]===null){y[ne]=V,L=ne;break}if(L===-1)break}const R=x[L];R&&R.connect(V)}}const $=new X,J=new X;function ee(A,O,V){$.setFromMatrixPosition(O.matrixWorld),J.setFromMatrixPosition(V.matrixWorld);const L=$.distanceTo(J),R=O.projectionMatrix.elements,ne=V.projectionMatrix.elements,j=R[14]/(R[10]-1),ue=R[14]/(R[10]+1),ce=(R[9]+1)/R[5],me=(R[9]-1)/R[5],fe=(R[8]-1)/R[0],Me=(ne[8]+1)/ne[0],Be=j*fe,Ae=j*Me,Ue=L/(-fe+Me),Te=Ue*-fe;O.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Te),A.translateZ(Ue),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const Ne=j+Ue,Ge=ue+Ue,$e=Be-Te,zt=Ae+(L-Te),T=ce*ue/Ge*Ne,w=me*ue/Ge*Ne;A.projectionMatrix.makePerspective($e,zt,T,w,Ne,Ge)}function I(A,O){O===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(O.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;E.near=D.near=M.near=A.near,E.far=D.far=M.far=A.far,(P!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,H=E.far);const O=A.parent,V=E.cameras;I(E,O);for(let R=0;R<V.length;R++)I(V[R],O);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),A.matrix.copy(E.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);const L=A.children;for(let R=0,ne=L.length;R<ne;R++)L[R].updateMatrixWorld(!0);V.length===2?ee(E,M,D):E.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(A){l=A,c!==null&&(c.fixedFoveation=A),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=A)},this.getPlanes=function(){return _};let q=null;function G(A,O){if(f=O.getViewerPose(u||o),g=O,f!==null){const V=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let L=!1;V.length!==E.cameras.length&&(E.cameras.length=0,L=!0);for(let R=0;R<V.length;R++){const ne=V[R];let j=null;if(p!==null)j=p.getViewport(ne);else{const ce=d.getViewSubImage(c,ne);j=ce.viewport,R===0&&(e.setRenderTargetTextures(v,ce.colorTexture,c.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(v))}let ue=S[R];ue===void 0&&(ue=new yn,ue.layers.enable(R),ue.viewport=new Nt,S[R]=ue),ue.matrix.fromArray(ne.transform.matrix),ue.projectionMatrix.fromArray(ne.projectionMatrix),ue.viewport.set(j.x,j.y,j.width,j.height),R===0&&E.matrix.copy(ue.matrix),L===!0&&E.cameras.push(ue)}}for(let V=0;V<x.length;V++){const L=y[V],R=x[V];L!==null&&R!==void 0&&R.update(L,O,u||o)}if(q&&q(A,O),O.detectedPlanes){r.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let V=null;for(const L of _)O.detectedPlanes.has(L)||(V===null&&(V=[]),V.push(L));if(V!==null)for(const L of V)_.delete(L),b.delete(L),r.dispatchEvent({type:"planeremoved",data:L});for(const L of O.detectedPlanes)if(!_.has(L))_.add(L),b.set(L,O.lastChangedTime),r.dispatchEvent({type:"planeadded",data:L});else{const R=b.get(L);L.lastChangedTime>R&&(b.set(L,L.lastChangedTime),r.dispatchEvent({type:"planechanged",data:L}))}}g=null}const oe=new q_;oe.setAnimationLoop(G),this.setAnimationLoop=function(A){q=A},this.dispose=function(){}}}function xA(t,e){function n(h,m){m.color.getRGB(h.fogColor.value,W_(t)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function r(h,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(h,m):m.isMeshToonMaterial?(i(h,m),f(h,m)):m.isMeshPhongMaterial?(i(h,m),u(h,m)):m.isMeshStandardMaterial?(i(h,m),d(h,m),m.isMeshPhysicalMaterial&&c(h,m,y)):m.isMeshMatcapMaterial?(i(h,m),p(h,m)):m.isMeshDepthMaterial?i(h,m):m.isMeshDistanceMaterial?(i(h,m),g(h,m)):m.isMeshNormalMaterial?i(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?s(h,m,v,x):m.isSpriteMaterial?l(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.bumpMap&&(h.bumpMap.value=m.bumpMap,h.bumpScale.value=m.bumpScale,m.side===bn&&(h.bumpScale.value*=-1)),m.displacementMap&&(h.displacementMap.value=m.displacementMap,h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap),m.normalMap&&(h.normalMap.value=m.normalMap,h.normalScale.value.copy(m.normalScale),m.side===bn&&h.normalScale.value.negate()),m.specularMap&&(h.specularMap.value=m.specularMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*_}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uv2Transform.value.copy(y.matrix))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function s(h,m,v,x){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*v,h.scale.value=x*.5,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function f(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.roughness.value=m.roughness,h.metalness.value=m.metalness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function c(h,m,v){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),h.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===bn&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap)}function p(h,m){m.matcap&&(h.matcap.value=m.matcap)}function g(h,m){h.referencePosition.value.copy(m.referencePosition),h.nearDistance.value=m.nearDistance,h.farDistance.value=m.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function yA(t,e,n,r){let i={},a={},o=[];const s=n.isWebGL2?t.getParameter(35375):0;function l(x,y){const _=y.program;r.uniformBlockBinding(x,_)}function u(x,y){let _=i[x.id];_===void 0&&(g(x),_=f(x),i[x.id]=_,x.addEventListener("dispose",m));const b=y.program;r.updateUBOMapping(x,b);const M=e.render.frame;a[x.id]!==M&&(c(x),a[x.id]=M)}function f(x){const y=d();x.__bindingPointIndex=y;const _=t.createBuffer(),b=x.__size,M=x.usage;return t.bindBuffer(35345,_),t.bufferData(35345,b,M),t.bindBuffer(35345,null),t.bindBufferBase(35345,y,_),_}function d(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const y=i[x.id],_=x.uniforms,b=x.__cache;t.bindBuffer(35345,y);for(let M=0,D=_.length;M<D;M++){const S=_[M];if(p(S,M,b)===!0){const E=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let Y=0;Y<P.length;Y++){const F=P[Y],N=h(F);typeof F=="number"?(S.__data[0]=F,t.bufferSubData(35345,E+H,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=F.elements[0],S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=F.elements[0],S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=F.elements[0]):(F.toArray(S.__data,H),H+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,E,S.__data)}}t.bindBuffer(35345,null)}function p(x,y,_){const b=x.value;if(_[y]===void 0){if(typeof b=="number")_[y]=b;else{const M=Array.isArray(b)?b:[b],D=[];for(let S=0;S<M.length;S++)D.push(M[S].clone());_[y]=D}return!0}else if(typeof b=="number"){if(_[y]!==b)return _[y]=b,!0}else{const M=Array.isArray(_[y])?_[y]:[_[y]],D=Array.isArray(b)?b:[b];for(let S=0;S<M.length;S++){const E=M[S];if(E.equals(D[S])===!1)return E.copy(D[S]),!0}}return!1}function g(x){const y=x.uniforms;let _=0;const b=16;let M=0;for(let D=0,S=y.length;D<S;D++){const E=y[D],P={boundary:0,storage:0},H=Array.isArray(E.value)?E.value:[E.value];for(let Y=0,F=H.length;Y<F;Y++){const N=H[Y],$=h(N);P.boundary+=$.boundary,P.storage+=$.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,D>0){M=_%b;const Y=b-M;M!==0&&Y-P.boundary<0&&(_+=b-M,E.__offset=_)}_+=P.storage}return M=_%b,M>0&&(_+=b-M),x.__size=_,x.__cache={},this}function h(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(i[y.id]),delete i[y.id],delete a[y.id]}function v(){for(const x in i)t.deleteBuffer(i[x]);o=[],i={},a={}}return{bind:l,update:u,dispose:v}}function _A(){const t=bu("canvas");return t.style.display="block",t}function wu(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:_A(),n=t.context!==void 0?t.context:null,r=t.depth!==void 0?t.depth:!0,i=t.stencil!==void 0?t.stencil:!0,a=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,s=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let f;n!==null?f=n.getContextAttributes().alpha:f=t.alpha!==void 0?t.alpha:!1;let d=null,c=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$i,this.useLegacyLights=!0,this.toneMapping=Ir,this.toneMappingExposure=1;const h=this;let m=!1,v=0,x=0,y=null,_=-1,b=null;const M=new Nt,D=new Nt;let S=null,E=e.width,P=e.height,H=1,Y=null,F=null;const N=new Nt(0,0,E,P),$=new Nt(0,0,E,P);let J=!1;const ee=new $_;let I=!1,q=!1,G=null;const oe=new Ot,A=new X,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return y===null?H:1}let L=n;function R(C,W){for(let K=0;K<C.length;K++){const B=C[K],Q=e.getContext(B,W);if(Q!==null)return Q}return null}try{const C={alpha:!0,depth:r,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),L===null){const W=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&W.shift(),L=R(W,C),L===null)throw R(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,j,ue,ce,me,fe,Me,Be,Ae,Ue,Te,Ne,Ge,$e,zt,T,w,z,re,pe,ge,_e,ye,te;function Pe(){ne=new R3(L),j=new M3(L,ne,t),ne.init(j),_e=new pA(L,ne,j),ue=new dA(L,ne,j),ce=new N3,me=new ZD,fe=new fA(L,ne,ue,me,j,_e,ce),Me=new C3(h),Be=new P3(h),Ae=new VC(L,j),ye=new b3(L,ne,Ae,j),Ue=new L3(L,Ae,ce,ye),Te=new z3(L,Ue,Ae,ce),re=new F3(L,j,fe),T=new E3(me),Ne=new KD(h,Me,Be,ne,j,ye,T),Ge=new xA(h,me),$e=new JD,zt=new aA(ne,j),z=new S3(h,Me,Be,ue,Te,f,o),w=new cA(h,Te,j),te=new yA(L,ce,j,ue),pe=new w3(L,ne,ce,j),ge=new I3(L,ne,ce,j),ce.programs=Ne.programs,h.capabilities=j,h.extensions=ne,h.properties=me,h.renderLists=$e,h.shadowMap=w,h.state=ue,h.info=ce}Pe();const be=new vA(h,L);this.xr=be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(E,P,!1))},this.getSize=function(C){return C.set(E,P)},this.setSize=function(C,W,K=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,P=W,e.width=Math.floor(C*H),e.height=Math.floor(W*H),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(E*H,P*H).floor()},this.setDrawingBufferSize=function(C,W,K){E=C,P=W,H=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,W,K,B){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,W,K,B),ue.viewport(M.copy(N).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,W,K,B){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,W,K,B),ue.scissor(D.copy($).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){ue.setScissorTest(J=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(C=!0,W=!0,K=!0){let B=0;C&&(B|=16384),W&&(B|=256),K&&(B|=1024),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),$e.dispose(),zt.dispose(),me.dispose(),Me.dispose(),Be.dispose(),Te.dispose(),ye.dispose(),te.dispose(),Ne.dispose(),be.dispose(),be.removeEventListener("sessionstart",ae),be.removeEventListener("sessionend",ve),G&&(G.dispose(),G=null),Se.stop()};function Re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=ce.autoReset,W=w.enabled,K=w.autoUpdate,B=w.needsUpdate,Q=w.type;Pe(),ce.autoReset=C,w.enabled=W,w.autoUpdate=K,w.needsUpdate=B,w.type=Q}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function qe(C){const W=C.target;W.removeEventListener("dispose",qe),lt(W)}function lt(C){wt(C),me.remove(C)}function wt(C){const W=me.get(C).programs;W!==void 0&&(W.forEach(function(K){Ne.releaseProgram(K)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,B,Q,Ce){W===null&&(W=O);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Oe=Tb(C,W,K,B,Q);ue.setMaterial(B,Ie);let Fe=K.index,Xe=1;B.wireframe===!0&&(Fe=Ue.getWireframeAttribute(K),Xe=2);const Ve=K.drawRange,We=K.attributes.position;let mt=Ve.start*Xe,fn=(Ve.start+Ve.count)*Xe;Ce!==null&&(mt=Math.max(mt,Ce.start*Xe),fn=Math.min(fn,(Ce.start+Ce.count)*Xe)),Fe!==null?(mt=Math.max(mt,0),fn=Math.min(fn,Fe.count)):We!=null&&(mt=Math.max(mt,0),fn=Math.min(fn,We.count));const xr=fn-mt;if(xr<0||xr===1/0)return;ye.setup(Q,B,Oe,K,Fe);let yi,gt=pe;if(Fe!==null&&(yi=Ae.get(Fe),gt=ge,gt.setIndex(yi)),Q.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*V()),gt.setMode(1)):gt.setMode(4);else if(Q.isLine){let He=B.linewidth;He===void 0&&(He=1),ue.setLineWidth(He*V()),Q.isLineSegments?gt.setMode(1):Q.isLineLoop?gt.setMode(2):gt.setMode(3)}else Q.isPoints?gt.setMode(0):Q.isSprite&&gt.setMode(4);if(Q.isInstancedMesh)gt.renderInstances(mt,xr,Q.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tc=Math.min(K.instanceCount,He);gt.renderInstances(mt,xr,Tc)}else gt.render(mt,xr)},this.compile=function(C,W){function K(B,Q,Ce){B.transparent===!0&&B.side===Pr&&B.forceSinglePass===!1?(B.side=bn,B.needsUpdate=!0,Ln(B,Q,Ce),B.side=hi,B.needsUpdate=!0,Ln(B,Q,Ce),B.side=Pr):Ln(B,Q,Ce)}c=zt.get(C),c.init(),g.push(c),C.traverseVisible(function(B){B.isLight&&B.layers.test(W.layers)&&(c.pushLight(B),B.castShadow&&c.pushShadow(B))}),c.setupLights(h.useLegacyLights),C.traverse(function(B){const Q=B.material;if(Q)if(Array.isArray(Q))for(let Ce=0;Ce<Q.length;Ce++){const Ie=Q[Ce];K(Ie,C,B)}else K(Q,C,B)}),g.pop(),c=null};let k=null;function Z(C){k&&k(C)}function ae(){Se.stop()}function ve(){Se.start()}const Se=new q_;Se.setAnimationLoop(Z),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(C){k=C,be.setAnimationLoop(C),C===null?Se.stop():Se.start()},be.addEventListener("sessionstart",ae),be.addEventListener("sessionend",ve),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(W),W=be.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,W,y),c=zt.get(C,g.length),c.init(),g.push(c),oe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(oe),q=this.localClippingEnabled,I=T.init(this.clippingPlanes,q),d=$e.get(C,p.length),d.init(),p.push(d),nt(C,W,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Y,F),I===!0&&T.beginShadows();const K=c.state.shadowsArray;if(w.render(K,C,W),I===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(d,C),c.setupLights(h.useLegacyLights),W.isArrayCamera){const B=W.cameras;for(let Q=0,Ce=B.length;Q<Ce;Q++){const Ie=B[Q];Mt(d,C,Ie,Ie.viewport)}}else Mt(d,C,W);y!==null&&(fe.updateMultisampleRenderTarget(y),fe.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(h,C,W),ye.resetDefaultState(),_=-1,b=null,g.pop(),g.length>0?c=g[g.length-1]:c=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function nt(C,W,K,B){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)c.pushLight(C),C.castShadow&&c.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){B&&A.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const Ie=Te.update(C),Oe=C.material;Oe.visible&&d.push(C,Ie,Oe,K,A.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ce.render.frame&&(C.skeleton.update(),C.skeleton.frame=ce.render.frame),!C.frustumCulled||ee.intersectsObject(C))){B&&A.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const Ie=Te.update(C),Oe=C.material;if(Array.isArray(Oe)){const Fe=Ie.groups;for(let Xe=0,Ve=Fe.length;Xe<Ve;Xe++){const We=Fe[Xe],mt=Oe[We.materialIndex];mt&&mt.visible&&d.push(C,Ie,mt,K,A.z,We)}}else Oe.visible&&d.push(C,Ie,Oe,K,A.z,null)}}const Ce=C.children;for(let Ie=0,Oe=Ce.length;Ie<Oe;Ie++)nt(Ce[Ie],W,K,B)}function Mt(C,W,K,B){const Q=C.opaque,Ce=C.transmissive,Ie=C.transparent;c.setupLightsView(K),I===!0&&T.setGlobalState(h.clippingPlanes,K),Ce.length>0&&qt(Q,W,K),B&&ue.viewport(M.copy(B)),Q.length>0&&rr(Q,W,K),Ce.length>0&&rr(Ce,W,K),Ie.length>0&&rr(Ie,W,K),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function qt(C,W,K){const B=j.isWebGL2;G===null&&(G=new qi(1024,1024,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?ps:ji,minFilter:fs,samples:B&&a===!0?4:0}));const Q=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Ce=h.toneMapping;h.toneMapping=Ir,rr(C,W,K),h.toneMapping=Ce,fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G),h.setRenderTarget(Q)}function rr(C,W,K){const B=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ce=C.length;Q<Ce;Q++){const Ie=C[Q],Oe=Ie.object,Fe=Ie.geometry,Xe=B===null?Ie.material:B,Ve=Ie.group;Oe.layers.test(K.layers)&&pt(Oe,W,K,Fe,Xe,Ve)}}function pt(C,W,K,B,Q,Ce){C.onBeforeRender(h,W,K,B,Q,Ce),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(h,W,K,B,C,Ce),Q.transparent===!0&&Q.side===Pr&&Q.forceSinglePass===!1?(Q.side=bn,Q.needsUpdate=!0,h.renderBufferDirect(K,W,B,Q,C,Ce),Q.side=hi,Q.needsUpdate=!0,h.renderBufferDirect(K,W,B,Q,C,Ce),Q.side=Pr):h.renderBufferDirect(K,W,B,Q,C,Ce),C.onAfterRender(h,W,K,B,Q,Ce)}function Ln(C,W,K){W.isScene!==!0&&(W=O);const B=me.get(C),Q=c.state.lights,Ce=c.state.shadowsArray,Ie=Q.state.version,Oe=Ne.getParameters(C,Q.state,Ce,W,K),Fe=Ne.getProgramCacheKey(Oe);let Xe=B.programs;B.environment=C.isMeshStandardMaterial?W.environment:null,B.fog=W.fog,B.envMap=(C.isMeshStandardMaterial?Be:Me).get(C.envMap||B.environment),Xe===void 0&&(C.addEventListener("dispose",qe),Xe=new Map,B.programs=Xe);let Ve=Xe.get(Fe);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===Ie)return ir(C,Oe),Ve}else Oe.uniforms=Ne.getUniforms(C),C.onBuild(K,Oe,h),C.onBeforeCompile(Oe,h),Ve=Ne.acquireProgram(Oe,Fe),Xe.set(Fe,Ve),B.uniforms=Oe.uniforms;const We=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=T.uniform),ir(C,Oe),B.needsLights=Ab(C),B.lightsStateVersion=Ie,B.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix);const mt=Ve.getUniforms(),fn=Xl.seqWithValue(mt.seq,We);return B.currentProgram=Ve,B.uniformsList=fn,Ve}function ir(C,W){const K=me.get(C);K.outputEncoding=W.outputEncoding,K.instancing=W.instancing,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Tb(C,W,K,B,Q){W.isScene!==!0&&(W=O),fe.resetTextureUnits();const Ce=W.fog,Ie=B.isMeshStandardMaterial?W.environment:null,Oe=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:$i,Fe=(B.isMeshStandardMaterial?Be:Me).get(B.envMap||Ie),Xe=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!K.attributes.tangent,We=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,fn=!!K.morphAttributes.color,xr=B.toneMapped?h.toneMapping:Ir,yi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=yi!==void 0?yi.length:0,He=me.get(B),Tc=c.state.lights;if(I===!0&&(q===!0||C!==b)){const pn=C===b&&B.id===_;T.setState(B,C,pn)}let Et=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Tc.state.version||He.outputEncoding!==Oe||Q.isInstancedMesh&&He.instancing===!1||!Q.isInstancedMesh&&He.instancing===!0||Q.isSkinnedMesh&&He.skinning===!1||!Q.isSkinnedMesh&&He.skinning===!0||He.envMap!==Fe||B.fog===!0&&He.fog!==Ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==T.numPlanes||He.numIntersection!==T.numIntersection)||He.vertexAlphas!==Xe||He.vertexTangents!==Ve||He.morphTargets!==We||He.morphNormals!==mt||He.morphColors!==fn||He.toneMapping!==xr||j.isWebGL2===!0&&He.morphTargetsCount!==gt)&&(Et=!0):(Et=!0,He.__version=B.version);let _i=He.currentProgram;Et===!0&&(_i=Ln(B,W,Q));let tm=!1,fo=!1,Dc=!1;const Xt=_i.getUniforms(),Si=He.uniforms;if(ue.useProgram(_i.program)&&(tm=!0,fo=!0,Dc=!0),B.id!==_&&(_=B.id,fo=!0),tm||b!==C){if(Xt.setValue(L,"projectionMatrix",C.projectionMatrix),j.logarithmicDepthBuffer&&Xt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),b!==C&&(b=C,fo=!0,Dc=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const pn=Xt.map.cameraPosition;pn!==void 0&&pn.setValue(L,A.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Xt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Q.isSkinnedMesh)&&Xt.setValue(L,"viewMatrix",C.matrixWorldInverse)}if(Q.isSkinnedMesh){Xt.setOptional(L,Q,"bindMatrix"),Xt.setOptional(L,Q,"bindMatrixInverse");const pn=Q.skeleton;pn&&(j.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),Xt.setValue(L,"boneTexture",pn.boneTexture,fe),Xt.setValue(L,"boneTextureSize",pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ac=K.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0&&j.isWebGL2===!0)&&re.update(Q,K,_i),(fo||He.receiveShadow!==Q.receiveShadow)&&(He.receiveShadow=Q.receiveShadow,Xt.setValue(L,"receiveShadow",Q.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Si.envMap.value=Fe,Si.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),fo&&(Xt.setValue(L,"toneMappingExposure",h.toneMappingExposure),He.needsLights&&Db(Si,Dc),Ce&&B.fog===!0&&Ge.refreshFogUniforms(Si,Ce),Ge.refreshMaterialUniforms(Si,B,H,P,G),Xl.upload(L,He.uniformsList,Si,fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xl.upload(L,He.uniformsList,Si,fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Xt.setValue(L,"center",Q.center),Xt.setValue(L,"modelViewMatrix",Q.modelViewMatrix),Xt.setValue(L,"normalMatrix",Q.normalMatrix),Xt.setValue(L,"modelMatrix",Q.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const pn=B.uniformsGroups;for(let Pc=0,Pb=pn.length;Pc<Pb;Pc++)if(j.isWebGL2){const nm=pn[Pc];te.update(nm,_i),te.bind(nm,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function Db(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ab(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,W,K){me.get(C.texture).__webglTexture=W,me.get(C.depthTexture).__webglTexture=K;const B=me.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const K=me.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){y=C,v=W,x=K;let B=!0,Q=null,Ce=!1,Ie=!1;if(C){const Fe=me.get(C);Fe.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),B=!1):Fe.__webglFramebuffer===void 0?fe.setupRenderTarget(C):Fe.__hasExternalTextures&&fe.rebindTextures(C,me.get(C.texture).__webglTexture,me.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Ve=me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Q=Ve[W],Ce=!0):j.isWebGL2&&C.samples>0&&fe.useMultisampledRTT(C)===!1?Q=me.get(C).__webglMultisampledFramebuffer:Q=Ve,M.copy(C.viewport),D.copy(C.scissor),S=C.scissorTest}else M.copy(N).multiplyScalar(H).floor(),D.copy($).multiplyScalar(H).floor(),S=J;if(ue.bindFramebuffer(36160,Q)&&j.drawBuffers&&B&&ue.drawBuffers(C,Q),ue.viewport(M),ue.scissor(D),ue.setScissorTest(S),Ce){const Fe=me.get(C.texture);L.framebufferTexture2D(36160,36064,34069+W,Fe.__webglTexture,K)}else if(Ie){const Fe=me.get(C.texture),Xe=W||0;L.framebufferTextureLayer(36160,36064,Fe.__webglTexture,K||0,Xe)}_=-1},this.readRenderTargetPixels=function(C,W,K,B,Q,Ce,Ie){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){ue.bindFramebuffer(36160,Oe);try{const Fe=C.texture,Xe=Fe.format,Ve=Fe.type;if(Xe!==Qn&&_e.convert(Xe)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ps&&(ne.has("EXT_color_buffer_half_float")||j.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Ve!==ji&&_e.convert(Ve)!==L.getParameter(35738)&&!(Ve===Oi&&(j.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-B&&K>=0&&K<=C.height-Q&&L.readPixels(W,K,B,Q,_e.convert(Xe),_e.convert(Ve),Ce)}finally{const Fe=y!==null?me.get(y).__webglFramebuffer:null;ue.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(C,W,K=0){const B=Math.pow(2,-K),Q=Math.floor(W.image.width*B),Ce=Math.floor(W.image.height*B);fe.setTexture2D(W,0),L.copyTexSubImage2D(3553,K,0,0,C.x,C.y,Q,Ce),ue.unbindTexture()},this.copyTextureToTexture=function(C,W,K,B=0){const Q=W.image.width,Ce=W.image.height,Ie=_e.convert(K.format),Oe=_e.convert(K.type);fe.setTexture2D(K,0),L.pixelStorei(37440,K.flipY),L.pixelStorei(37441,K.premultiplyAlpha),L.pixelStorei(3317,K.unpackAlignment),W.isDataTexture?L.texSubImage2D(3553,B,C.x,C.y,Q,Ce,Ie,Oe,W.image.data):W.isCompressedTexture?L.compressedTexSubImage2D(3553,B,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ie,W.mipmaps[0].data):L.texSubImage2D(3553,B,C.x,C.y,Ie,Oe,W.image),B===0&&K.generateMipmaps&&L.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K,B,Q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Ie=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Fe=_e.convert(B.format),Xe=_e.convert(B.type);let Ve;if(B.isData3DTexture)fe.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)fe.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,B.flipY),L.pixelStorei(37441,B.premultiplyAlpha),L.pixelStorei(3317,B.unpackAlignment);const We=L.getParameter(3314),mt=L.getParameter(32878),fn=L.getParameter(3316),xr=L.getParameter(3315),yi=L.getParameter(32877),gt=K.isCompressedTexture?K.mipmaps[0]:K.image;L.pixelStorei(3314,gt.width),L.pixelStorei(32878,gt.height),L.pixelStorei(3316,C.min.x),L.pixelStorei(3315,C.min.y),L.pixelStorei(32877,C.min.z),K.isDataTexture||K.isData3DTexture?L.texSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,Xe,gt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,gt.data)):L.texSubImage3D(Ve,Q,W.x,W.y,W.z,Ce,Ie,Oe,Fe,Xe,gt),L.pixelStorei(3314,We),L.pixelStorei(32878,mt),L.pixelStorei(3316,fn),L.pixelStorei(3315,xr),L.pixelStorei(32877,yi),Q===0&&B.generateMipmaps&&L.generateMipmap(Ve),ue.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),ue.unbindTexture()},this.resetState=function(){v=0,x=0,y=null,ue.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(wu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}});class SA extends wu{}SA.prototype.isWebGL1Renderer=!0;class Ov extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Lh extends xi{constructor(e=.5,n=1,r=32,i=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:i,thetaStart:a,thetaLength:o},r=Math.max(3,r),i=Math.max(1,i);const s=[],l=[],u=[],f=[];let d=e;const c=(n-e)/i,p=new X,g=new tt;for(let h=0;h<=i;h++){for(let m=0;m<=r;m++){const v=a+m/r*o;p.x=d*Math.cos(v),p.y=d*Math.sin(v),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,f.push(g.x,g.y)}d+=c}for(let h=0;h<i;h++){const m=h*(r+1);for(let v=0;v<r;v++){const x=v+m,y=x,_=x+r+1,b=x+r+2,M=x+1;s.push(y,_,M),s.push(_,b,M)}}this.setIndex(s),this.setAttribute("position",new mr(l,3)),this.setAttribute("normal",new mr(u,3)),this.setAttribute("uv",new mr(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);const bA=le.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,wA=le.div`
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
`,MA=le.div`
  padding: 30px;
`,EA=le.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`,ha=le.div`
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
`,CA=le.div`
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
`,Fv=le.div`
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
`,zv=({orders:t})=>{const e=se.useRef(),n=se.useRef(),r={total:t.length,pending:t.filter(a=>a.status==="pending").length,cut:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.cut}).length,ready:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.ready}).length,shipped:t.filter(a=>{var o;return(o=a.fulfillment)==null?void 0:o.shipped}).length,totalRevenue:t.reduce((a,o)=>{var s;return a+(((s=o.pricing)==null?void 0:s.order_total)||0)},0)};se.useEffect(()=>{if(e.current&&n.current){e.current.innerHTML="",n.current.innerHTML="";const a=new Ov,o=new yn(75,1,.1,1e3),s=new wu({alpha:!0,antialias:!0});s.setSize(180,180),e.current.appendChild(s.domElement);const l=new Ov,u=new yn(75,1,.1,1e3),f=new wu({alpha:!0,antialias:!0});f.setSize(180,180),n.current.appendChild(f.domElement);const d=[{value:r.pending,color:6717162,label:"Pending"},{value:r.cut,color:16096779,label:"Cut"},{value:r.ready,color:1096065,label:"Ready"},{value:r.shipped,color:9133302,label:"Shipped"}].filter(p=>p.value>0),c=[{value:r.cut,color:16096779,label:"Cut"},{value:r.ready,color:1096065,label:"Ready"},{value:r.shipped,color:9133302,label:"Shipped"}].filter(p=>p.value>0);i(a,o,s,d),i(l,u,f,c)}},[r]);const i=(a,o,s,l,u)=>{const f=l.reduce((p,g)=>p+g.value,0);if(f===0)return;let d=0;l.forEach((p,g)=>{const h=p.value/f*Math.PI*2,m=new Lh(.3,.8,32),v=new Ah({color:p.color,side:Pr}),x=new Rr(m,v);x.rotation.z=d,a.add(x),d+=h}),o.position.z=2;const c=()=>{requestAnimationFrame(c),a.rotation.z+=.005,s.render(a,o)};c()};return U.jsxs(bA,{children:[U.jsxs(wA,{children:[U.jsx("h1",{children:"Dashboard"}),U.jsx("p",{children:"Overview of your Etsy orders and business metrics"})]}),U.jsxs(MA,{children:[U.jsxs(EA,{children:[U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"📦"}),U.jsxs("div",{className:"stat-content",children:[U.jsx("div",{className:"stat-value",children:r.total}),U.jsx("div",{className:"stat-label",children:"Total Orders"})]})]}),U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"⏳"}),U.jsxs("div",{className:"stat-content",children:[U.jsx("div",{className:"stat-value",children:r.pending}),U.jsx("div",{className:"stat-label",children:"Pending"})]})]}),U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"✂️"}),U.jsxs("div",{className:"stat-content",children:[U.jsx("div",{className:"stat-value",children:r.cut}),U.jsx("div",{className:"stat-label",children:"Cut"})]})]}),U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"✅"}),U.jsxs("div",{className:"stat-content",children:[U.jsx("div",{className:"stat-value",children:r.ready}),U.jsx("div",{className:"stat-label",children:"Ready"})]})]}),U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"🚚"}),U.jsxs("div",{className:"stat-content",children:[U.jsx("div",{className:"stat-value",children:r.shipped}),U.jsx("div",{className:"stat-label",children:"Shipped"})]})]}),U.jsxs(ha,{children:[U.jsx("div",{className:"stat-icon",children:"💰"}),U.jsxs("div",{className:"stat-content",children:[U.jsxs("div",{className:"stat-value",children:["$",r.totalRevenue.toFixed(2)]}),U.jsx("div",{className:"stat-label",children:"Total Revenue"})]})]})]}),U.jsxs(CA,{children:[U.jsxs(Fv,{children:[U.jsx("div",{className:"chart-title",children:"Order Status Distribution"}),U.jsx("div",{ref:e,className:"chart-canvas"})]}),U.jsxs(Fv,{children:[U.jsx("div",{className:"chart-title",children:"Fulfillment Progress"}),U.jsx("div",{ref:n,className:"chart-canvas"})]})]})]})]})};function TA(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Q_(t,e){var n=se.useState(function(){return{inputs:e,result:t()}})[0],r=se.useRef(!0),i=se.useRef(n),a=r.current||!!(e&&i.current.inputs&&TA(e,i.current.inputs)),o=a?i.current:{inputs:e,result:t()};return se.useEffect(function(){r.current=!1,i.current=o},[o]),o.result}function DA(t,e){return Q_(function(){return t},e)}var Ye=Q_,we=DA,J_={exports:{}},AA=J_.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=AA);var fc=J_.exports,eS={exports:{}},PA=eS.exports={version:"2.6.12"};typeof __e=="number"&&(__e=PA);var vr=eS.exports,RA=function(t){if(typeof t!="function")throw TypeError(t+" is not a function!");return t},LA=RA,tS=function(t,e,n){if(LA(t),e===void 0)return t;switch(n){case 1:return function(r){return t.call(e,r)};case 2:return function(r,i){return t.call(e,r,i)};case 3:return function(r,i,a){return t.call(e,r,i,a)}}return function(){return t.apply(e,arguments)}},Ih={},Fd,Bv;function Bs(){return Bv||(Bv=1,Fd=function(t){return typeof t=="object"?t!==null:typeof t=="function"}),Fd}var zd,Uv;function pc(){if(Uv)return zd;Uv=1;var t=Bs();return zd=function(e){if(!t(e))throw TypeError(e+" is not an object!");return e},zd}var hc=function(t){try{return!!t()}catch{return!0}},Qi=!hc(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}),Bd,Gv;function nS(){if(Gv)return Bd;Gv=1;var t=Bs(),e=fc.document,n=t(e)&&t(e.createElement);return Bd=function(r){return n?e.createElement(r):{}},Bd}var rS=!Qi&&!hc(function(){return Object.defineProperty(nS()("div"),"a",{get:function(){return 7}}).a!=7}),Cl=Bs(),iS=function(t,e){if(!Cl(t))return t;var n,r;if(e&&typeof(n=t.toString)=="function"&&!Cl(r=n.call(t))||typeof(n=t.valueOf)=="function"&&!Cl(r=n.call(t))||!e&&typeof(n=t.toString)=="function"&&!Cl(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},Vv=pc(),IA=rS,NA=iS,kA=Object.defineProperty;Ih.f=Qi?Object.defineProperty:function(e,n,r){if(Vv(e),n=NA(n,!0),Vv(r),IA)try{return kA(e,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[n]=r.value),e};var aS=function(t,e){return{enumerable:!(t&1),configurable:!(t&2),writable:!(t&4),value:e}},OA=Ih,FA=aS,zA=Qi?function(t,e,n){return OA.f(t,e,FA(1,n))}:function(t,e,n){return t[e]=n,t},BA={}.hasOwnProperty,Nh=function(t,e){return BA.call(t,e)},Tl=fc,Ud=vr,Wv=tS,UA=zA,GA=Nh,Dl="prototype",Wt=function(t,e,n){var r=t&Wt.F,i=t&Wt.G,a=t&Wt.S,o=t&Wt.P,s=t&Wt.B,l=t&Wt.W,u=i?Ud:Ud[e]||(Ud[e]={}),f=u[Dl],d=i?Tl:a?Tl[e]:(Tl[e]||{})[Dl],c,p,g;i&&(n=e);for(c in n)p=!r&&d&&d[c]!==void 0,!(p&&GA(u,c))&&(g=p?d[c]:n[c],u[c]=i&&typeof d[c]!="function"?n[c]:s&&p?Wv(g,Tl):l&&d[c]==g?function(h){var m=function(v,x,y){if(this instanceof h){switch(arguments.length){case 0:return new h;case 1:return new h(v);case 2:return new h(v,x)}return new h(v,x,y)}return h.apply(this,arguments)};return m[Dl]=h[Dl],m}(g):o&&typeof g=="function"?Wv(Function.call,g):g,o&&((u.virtual||(u.virtual={}))[c]=g,t&Wt.R&&f&&!f[c]&&UA(f,c,g)))};Wt.F=1;Wt.G=2;Wt.S=4;Wt.P=8;Wt.B=16;Wt.W=32;Wt.U=64;Wt.R=128;var Ji=Wt,VA={}.toString,WA=function(t){return VA.call(t).slice(8,-1)},HA=WA,oS=Object("z").propertyIsEnumerable(0)?Object:function(t){return HA(t)=="String"?t.split(""):Object(t)},sS=function(t){if(t==null)throw TypeError("Can't call method on  "+t);return t},jA=oS,$A=sS,mc=function(t){return jA($A(t))},qA=Math.ceil,XA=Math.floor,lS=function(t){return isNaN(t=+t)?0:(t>0?XA:qA)(t)},YA=lS,KA=Math.min,ZA=function(t){return t>0?KA(YA(t),9007199254740991):0},QA=lS,JA=Math.max,eP=Math.min,tP=function(t,e){return t=QA(t),t<0?JA(t+e,0):eP(t,e)},nP=mc,rP=ZA,iP=tP,aP=function(t){return function(e,n,r){var i=nP(e),a=rP(i.length),o=iP(r,a),s;if(t&&n!=n){for(;a>o;)if(s=i[o++],s!=s)return!0}else for(;a>o;o++)if((t||o in i)&&i[o]===n)return t||o||0;return!t&&-1}},uS={exports:{}},oP=vr,Hv=fc,jv="__core-js_shared__",$v=Hv[jv]||(Hv[jv]={});(uS.exports=function(t,e){return $v[t]||($v[t]=e!==void 0?e:{})})("versions",[]).push({version:oP.version,mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});var sP=uS.exports,lP=0,uP=Math.random(),cP=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++lP+uP).toString(36))},qv=sP("keys"),dP=cP,cS=function(t){return qv[t]||(qv[t]=dP(t))},Xv=Nh,fP=mc,pP=aP(!1),hP=cS("IE_PROTO"),mP=function(t,e){var n=fP(t),r=0,i=[],a;for(a in n)a!=hP&&Xv(n,a)&&i.push(a);for(;e.length>r;)Xv(n,a=e[r++])&&(~pP(i,a)||i.push(a));return i},dS="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),gP=mP,vP=dS,gc=Object.keys||function(e){return gP(e,vP)},Gd,Yv;function xP(){if(Yv)return Gd;Yv=1;var t=Ih,e=pc(),n=gc;return Gd=Qi?Object.defineProperties:function(i,a){e(i);for(var o=n(a),s=o.length,l=0,u;s>l;)t.f(i,u=o[l++],a[u]);return i},Gd}var Vd,Kv;function yP(){if(Kv)return Vd;Kv=1;var t=fc.document;return Vd=t&&t.documentElement,Vd}var Wd,Zv;function _P(){if(Zv)return Wd;Zv=1;var t=pc(),e=xP(),n=dS,r=cS("IE_PROTO"),i=function(){},a="prototype",o=function(){var s=nS()("iframe"),l=n.length,u="<",f=">",d;for(s.style.display="none",yP().appendChild(s),s.src="javascript:",d=s.contentWindow.document,d.open(),d.write(u+"script"+f+"document.F=Object"+u+"/script"+f),d.close(),o=d.F;l--;)delete o[a][n[l]];return o()};return Wd=Object.create||function(l,u){var f;return l!==null?(i[a]=t(l),f=new i,i[a]=null,f[r]=l):f=o(),u===void 0?f:e(f,u)},Wd}var Qv=Ji;Qv(Qv.S,"Object",{create:_P()});var SP=vr.Object,bP=function(e,n){return SP.create(e,n)};const wP=gr(bP);var Hd={},vc={};vc.f={}.propertyIsEnumerable;var Jv;function MP(){if(Jv)return Hd;Jv=1;var t=vc,e=aS,n=mc,r=iS,i=Nh,a=rS,o=Object.getOwnPropertyDescriptor;return Hd.f=Qi?o:function(l,u){if(l=n(l),u=r(u,!0),a)try{return o(l,u)}catch{}if(i(l,u))return e(!t.f.call(l,u),l[u])},Hd}var jd,e0;function EP(){if(e0)return jd;e0=1;var t=Bs(),e=pc(),n=function(r,i){if(e(r),!t(i)&&i!==null)throw TypeError(i+": can't set as prototype!")};return jd={set:Object.setPrototypeOf||("__proto__"in{}?function(r,i,a){try{a=tS(Function.call,MP().f(Object.prototype,"__proto__").set,2),a(r,[]),i=!(r instanceof Array)}catch{i=!0}return function(s,l){return n(s,l),i?s.__proto__=l:a(s,l),s}}({},!1):void 0),check:n},jd}var t0=Ji;t0(t0.S,"Object",{setPrototypeOf:EP().set});var CP=vr.Object.setPrototypeOf;const n0=gr(CP);function gp(t,e){return gp=n0?n0.bind():function(n,r){return n.__proto__=r,n},gp(t,e)}function fS(t,e){t.prototype=wP(e.prototype),t.prototype.constructor=t,gp(t,e)}var $d={},r0;function TP(){return r0||(r0=1,$d.f=Object.getOwnPropertySymbols),$d}var DP=sS,pS=function(t){return Object(DP(t))},qd,i0;function AP(){if(i0)return qd;i0=1;var t=Qi,e=gc,n=TP(),r=vc,i=pS,a=oS,o=Object.assign;return qd=!o||hc(function(){var s={},l={},u=Symbol(),f="abcdefghijklmnopqrst";return s[u]=7,f.split("").forEach(function(d){l[d]=d}),o({},s)[u]!=7||Object.keys(o({},l)).join("")!=f})?function(l,u){for(var f=i(l),d=arguments.length,c=1,p=n.f,g=r.f;d>c;)for(var h=a(arguments[c++]),m=p?e(h).concat(p(h)):e(h),v=m.length,x=0,y;v>x;)y=m[x++],(!t||g.call(h,y))&&(f[y]=h[y]);return f}:o,qd}var Xd=Ji;Xd(Xd.S+Xd.F,"Object",{assign:AP()});var hS=vr.Object.assign;const a0=gr(hS);function Le(){return Le=a0?a0.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Le.apply(null,arguments)}function ms(t){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ms(t)}function PP(t,e){if(ms(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(ms(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RP(t){var e=PP(t,"string");return ms(e)=="symbol"?e:e+""}function LP(t,e,n){return(e=RP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function s0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o0(Object(n),!0).forEach(function(r){LP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function an(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var l0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),u0=function(){return Math.random().toString(36).substring(7).split("").join(".")},c0={INIT:"@@redux/INIT"+u0(),REPLACE:"@@redux/REPLACE"+u0()};function IP(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function mS(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(an(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(an(1));return n(mS)(t,e)}if(typeof t!="function")throw new Error(an(2));var i=t,a=e,o=[],s=o,l=!1;function u(){s===o&&(s=o.slice())}function f(){if(l)throw new Error(an(3));return a}function d(h){if(typeof h!="function")throw new Error(an(4));if(l)throw new Error(an(5));var m=!0;return u(),s.push(h),function(){if(m){if(l)throw new Error(an(6));m=!1,u();var x=s.indexOf(h);s.splice(x,1),o=null}}}function c(h){if(!IP(h))throw new Error(an(7));if(typeof h.type>"u")throw new Error(an(8));if(l)throw new Error(an(9));try{l=!0,a=i(a,h)}finally{l=!1}for(var m=o=s,v=0;v<m.length;v++){var x=m[v];x()}return h}function p(h){if(typeof h!="function")throw new Error(an(10));i=h,c({type:c0.REPLACE})}function g(){var h,m=d;return h={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(an(11));function y(){x.next&&x.next(f())}y();var _=m(y);return{unsubscribe:_}}},h[l0]=function(){return this},h}return c({type:c0.INIT}),r={dispatch:c,subscribe:d,getState:f,replaceReducer:p},r[l0]=g,r}function d0(t,e){return function(){return e(t.apply(this,arguments))}}function f0(t,e){if(typeof t=="function")return d0(t,e);if(typeof t!="object"||t===null)throw new Error(an(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=d0(i,e))}return n}function gS(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function NP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(an(15))},o={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=e.map(function(l){return l(o)});return a=gS.apply(void 0,s)(i.dispatch),s0(s0({},i),{},{dispatch:a})}}}var vS=Ke.createContext(null);function kP(t){t()}var xS=kP,OP=function(e){return xS=e},FP=function(){return xS};function zP(){var t=FP(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],a=e;a;)i.push(a),a=a.next;return i},subscribe:function(i){var a=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!a||e===null||(a=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var p0={notify:function(){},get:function(){return[]}};function yS(t,e){var n,r=p0;function i(d){return l(),r.subscribe(d)}function a(){r.notify()}function o(){f.onStateChange&&f.onStateChange()}function s(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=zP())}function u(){n&&(n(),n=void 0,r.clear(),r=p0)}var f={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:o,isSubscribed:s,trySubscribe:l,tryUnsubscribe:u,getListeners:function(){return r}};return f}var _S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?se.useLayoutEffect:se.useEffect;function BP(t){var e=t.store,n=t.context,r=t.children,i=se.useMemo(function(){var s=yS(e);return{store:e,subscription:s}},[e]),a=se.useMemo(function(){return e.getState()},[e]);_S(function(){var s=i.subscription;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),a!==e.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[i,a]);var o=n||vS;return Ke.createElement(o.Provider,{value:i},r)}function Qr(){return Qr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qr.apply(null,arguments)}function Mu(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var UP=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],GP=["reactReduxForwardedRef"],VP=[],WP=[null,null];function HP(t,e){var n=t[1];return[e.payload,n+1]}function h0(t,e,n){_S(function(){return t.apply(void 0,e)},n)}function jP(t,e,n,r,i,a,o){t.current=r,e.current=i,n.current=!1,a.current&&(a.current=null,o())}function $P(t,e,n,r,i,a,o,s,l,u){if(t){var f=!1,d=null,c=function(){if(!f){var h=e.getState(),m,v;try{m=r(h,i.current)}catch(x){v=x,d=x}v||(d=null),m===a.current?o.current||l():(a.current=m,s.current=m,o.current=!0,u({type:"STORE_UPDATED",payload:{error:v}}))}};n.onStateChange=c,n.trySubscribe(),c();var p=function(){if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return p}}var qP=function(){return[null,0]};function XP(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(y){return"ConnectAdvanced("+y+")"}:r,a=n.methodName,o=a===void 0?"connectAdvanced":a,s=n.renderCountProp,l=s===void 0?void 0:s,u=n.shouldHandleStateChanges,f=u===void 0?!0:u,d=n.storeKey,c=d===void 0?"store":d;n.withRef;var p=n.forwardRef,g=p===void 0?!1:p,h=n.context,m=h===void 0?vS:h,v=Mu(n,UP),x=m;return function(_){var b=_.displayName||_.name||"Component",M=i(b),D=Qr({},v,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:f,storeKey:c,displayName:M,wrappedComponentName:b,WrappedComponent:_}),S=v.pure;function E(N){return t(N.dispatch,D)}var P=S?se.useMemo:function(N){return N()};function H(N){var $=se.useMemo(function(){var Ge=N.reactReduxForwardedRef,$e=Mu(N,GP);return[N.context,Ge,$e]},[N]),J=$[0],ee=$[1],I=$[2],q=se.useMemo(function(){return J&&J.Consumer&&yh.isContextConsumer(Ke.createElement(J.Consumer,null))?J:x},[J,x]),G=se.useContext(q),oe=!!N.store&&!!N.store.getState&&!!N.store.dispatch;G&&G.store;var A=oe?N.store:G.store,O=se.useMemo(function(){return E(A)},[A]),V=se.useMemo(function(){if(!f)return WP;var Ge=yS(A,oe?null:G.subscription),$e=Ge.notifyNestedSubs.bind(Ge);return[Ge,$e]},[A,oe,G]),L=V[0],R=V[1],ne=se.useMemo(function(){return oe?G:Qr({},G,{subscription:L})},[oe,G,L]),j=se.useReducer(HP,VP,qP),ue=j[0],ce=ue[0],me=j[1];if(ce&&ce.error)throw ce.error;var fe=se.useRef(),Me=se.useRef(I),Be=se.useRef(),Ae=se.useRef(!1),Ue=P(function(){return Be.current&&I===Me.current?Be.current:O(A.getState(),I)},[A,ce,I]);h0(jP,[Me,fe,Ae,I,Ue,Be,R]),h0($P,[f,A,L,O,Me,fe,Ae,Be,R,me],[A,L,O]);var Te=se.useMemo(function(){return Ke.createElement(_,Qr({},Ue,{ref:ee}))},[ee,_,Ue]),Ne=se.useMemo(function(){return f?Ke.createElement(q.Provider,{value:ne},Te):Te},[q,Te,ne]);return Ne}var Y=S?Ke.memo(H):H;if(Y.WrappedComponent=_,Y.displayName=H.displayName=M,g){var F=Ke.forwardRef(function($,J){return Ke.createElement(Y,Qr({},$,{reactReduxForwardedRef:J}))});return F.displayName=M,F.WrappedComponent=_,ip(F,_)}return ip(Y,_)}}function m0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Yd(t,e){if(m0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!m0(t[n[i]],e[n[i]]))return!1;return!0}function YP(t,e){var n={},r=function(o){var s=t[o];typeof s=="function"&&(n[o]=function(){return e(s.apply(void 0,arguments))})};for(var i in t)r(i);return n}function kh(t){return function(n,r){var i=t(n,r);function a(){return i}return a.dependsOnOwnProps=!1,a}}function g0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function SS(t,e){return function(r,i){i.displayName;var a=function(s,l){return a.dependsOnOwnProps?a.mapToProps(s,l):a.mapToProps(s)};return a.dependsOnOwnProps=!0,a.mapToProps=function(s,l){a.mapToProps=t,a.dependsOnOwnProps=g0(t);var u=a(s,l);return typeof u=="function"&&(a.mapToProps=u,a.dependsOnOwnProps=g0(u),u=a(s,l)),u},a}}function KP(t){return typeof t=="function"?SS(t):void 0}function ZP(t){return t?void 0:kh(function(e){return{dispatch:e}})}function QP(t){return t&&typeof t=="object"?kh(function(e){return YP(t,e)}):void 0}const JP=[KP,ZP,QP];function eR(t){return typeof t=="function"?SS(t):void 0}function tR(t){return t?void 0:kh(function(){return{}})}const nR=[eR,tR];function rR(t,e,n){return Qr({},n,t,e)}function iR(t){return function(n,r){r.displayName;var i=r.pure,a=r.areMergedPropsEqual,o=!1,s;return function(u,f,d){var c=t(u,f,d);return o?(!i||!a(c,s))&&(s=c):(o=!0,s=c),s}}}function aR(t){return typeof t=="function"?iR(t):void 0}function oR(t){return t?void 0:function(){return rR}}const sR=[aR,oR];var lR=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function uR(t,e,n,r){return function(a,o){return n(t(a,o),e(r,o),o)}}function cR(t,e,n,r,i){var a=i.areStatesEqual,o=i.areOwnPropsEqual,s=i.areStatePropsEqual,l=!1,u,f,d,c,p;function g(y,_){return u=y,f=_,d=t(u,f),c=e(r,f),p=n(d,c,f),l=!0,p}function h(){return d=t(u,f),e.dependsOnOwnProps&&(c=e(r,f)),p=n(d,c,f),p}function m(){return t.dependsOnOwnProps&&(d=t(u,f)),e.dependsOnOwnProps&&(c=e(r,f)),p=n(d,c,f),p}function v(){var y=t(u,f),_=!s(y,d);return d=y,_&&(p=n(d,c,f)),p}function x(y,_){var b=!o(_,f),M=!a(y,u,_,f);return u=y,f=_,b&&M?h():b?m():M?v():p}return function(_,b){return l?x(_,b):g(_,b)}}function dR(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,a=Mu(e,lR),o=n(t,a),s=r(t,a),l=i(t,a),u=a.pure?cR:uR;return u(o,s,l,t,a)}var fR=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Kd(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(a,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function pR(t,e){return t===e}function hR(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?XP:n,i=e.mapStateToPropsFactories,a=i===void 0?nR:i,o=e.mapDispatchToPropsFactories,s=o===void 0?JP:o,l=e.mergePropsFactories,u=l===void 0?sR:l,f=e.selectorFactory,d=f===void 0?dR:f;return function(p,g,h,m){m===void 0&&(m={});var v=m,x=v.pure,y=x===void 0?!0:x,_=v.areStatesEqual,b=_===void 0?pR:_,M=v.areOwnPropsEqual,D=M===void 0?Yd:M,S=v.areStatePropsEqual,E=S===void 0?Yd:S,P=v.areMergedPropsEqual,H=P===void 0?Yd:P,Y=Mu(v,fR),F=Kd(p,a,"mapStateToProps"),N=Kd(g,s,"mapDispatchToProps"),$=Kd(h,u,"mergeProps");return r(d,Qr({methodName:"connect",getDisplayName:function(ee){return"Connect("+ee+")"},shouldHandleStateChanges:!!p,initMapStateToProps:F,initMapDispatchToProps:N,initMergeProps:$,pure:y,areStatesEqual:b,areOwnPropsEqual:D,areStatePropsEqual:E,areMergedPropsEqual:H},Y))}}const bS=hR();OP(vh.unstable_batchedUpdates);var mR="Invariant failed";function gR(t,e){throw new Error(mR)}var dr=function(e){var n=e.top,r=e.right,i=e.bottom,a=e.left,o=r-a,s=i-n,l={top:n,right:r,bottom:i,left:a,width:o,height:s,x:a,y:n,center:{x:(r+a)/2,y:(i+n)/2}};return l},Oh=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},v0=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},vR=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Zd={top:0,right:0,bottom:0,left:0},Fh=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?Zd:r,a=e.border,o=a===void 0?Zd:a,s=e.padding,l=s===void 0?Zd:s,u=dr(Oh(n,i)),f=dr(v0(n,o)),d=dr(v0(f,l));return{marginBox:u,borderBox:dr(n),paddingBox:f,contentBox:d,margin:i,border:o,padding:l}},Nn=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&gR(),i},xR=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Eu=function(e,n){var r=e.borderBox,i=e.border,a=e.margin,o=e.padding,s=vR(r,n);return Fh({borderBox:s,border:i,margin:a,padding:o})},Cu=function(e,n){return n===void 0&&(n=xR()),Eu(e,n)},wS=function(e,n){var r={top:Nn(n.marginTop),right:Nn(n.marginRight),bottom:Nn(n.marginBottom),left:Nn(n.marginLeft)},i={top:Nn(n.paddingTop),right:Nn(n.paddingRight),bottom:Nn(n.paddingBottom),left:Nn(n.paddingLeft)},a={top:Nn(n.borderTopWidth),right:Nn(n.borderRightWidth),bottom:Nn(n.borderBottomWidth),left:Nn(n.borderLeftWidth)};return Fh({borderBox:e,margin:r,padding:i,border:a})},MS=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return wS(n,r)},x0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function yR(t,e){return!!(t===e||x0(t)&&x0(e))}function _R(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!yR(t[n],e[n]))return!1;return!0}function At(t,e){e===void 0&&(e=_R);var n,r=[],i,a=!1;function o(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return a&&n===this&&e(s,r)||(i=t.apply(this,s),a=!0,n=this,r=s),i}return o}var SR=Qi,bR=gc,wR=mc,MR=vc.f,ER=function(t){return function(e){for(var n=wR(e),r=bR(n),i=r.length,a=0,o=[],s;i>a;)s=r[a++],(!SR||MR.call(n,s))&&o.push(t?[s,n[s]]:n[s]);return o}},y0=Ji,CR=ER(!1);y0(y0.S,"Object",{values:function(e){return CR(e)}});var TR=vr.Object.values,DR=TR;const AR=gr(DR);var Qd=Ji,PR=vr,RR=hc,LR=function(t,e){var n=(PR.Object||{})[t]||Object[t],r={};r[t]=e(n),Qd(Qd.S+Qd.F*RR(function(){n(1)}),"Object",r)},IR=pS,NR=gc;LR("keys",function(){return function(e){return NR(IR(e))}});var kR=vr.Object.keys,OR=kR;const Jd=gr(OR);var gs=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];n=s,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i},_0=Ji;_0(_0.S,"Date",{now:function(){return new Date().getTime()}});var FR=vr.Date.now,zR=FR;const ES=gr(zR);var BR=hS;const CS=gr(BR);var ef,S0;function UR(){if(S0)return ef;S0=1;var t=Bs(),e=Math.floor;return ef=function(r){return!t(r)&&isFinite(r)&&e(r)===r},ef}var b0=Ji;b0(b0.S,"Number",{isInteger:UR()});vr.Number.isInteger;function TS(t,e){}TS.bind(null,"warn");TS.bind(null,"error");function ui(){}function GR(t,e){return Le({},t,{},e)}function Un(t,e,n){var r=e.map(function(i){var a=GR(n,i.options);return t.addEventListener(i.eventName,i.fn,a),function(){t.removeEventListener(i.eventName,i.fn,a)}});return function(){r.forEach(function(a){a()})}}var VR="Invariant failed";function Tu(t){this.message=t}Tu.prototype.toString=function(){return this.message};function de(t,e){throw new Tu(VR)}var WR=function(t){fS(e,t);function e(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a))||this,r.callbacks=null,r.unbind=ui,r.onWindowError=function(s){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var u=s.error;u instanceof Tu&&s.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(s){r.callbacks=s},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Un(window,[{eventName:"error",fn:this.onWindowError}])},n.componentWillUnmount=function(){this.unbind()},n.componentDidCatch=function(i){if(i instanceof Tu){this.setState({});return}throw i},n.render=function(){return this.props.children(this.setCallbacks)},e}(Ke.Component),HR="Draggable item. Ensure your screen reader is not in browse mode and then press space bar to lift.",Du=function(e){return e+1},jR=function(e){return`
  You have lifted an item in position `+Du(e.source.index)+`.
  Use the arrow keys to move, space bar to drop, and escape to cancel.
`},DS=function(e,n){var r=e.droppableId===n.droppableId,i=Du(e.index),a=Du(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+a+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+a+`
  `},AS=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},$R=function(e){var n=e.destination;if(n)return DS(e.source,n);var r=e.combine;return r?AS(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},w0=function(e){return`
  The item has returned to its starting position
  of `+Du(e.index)+`
`},qR=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+w0(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+DS(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+AS(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+w0(e.source)+`
  `},Yl={liftInstruction:HR,onDragStart:jR,onDragUpdate:$R,onDragEnd:qR},Pt={x:0,y:0},jt=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},ln=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},ci=function(e,n){return e.x===n.x&&e.y===n.y},lo=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Ja=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},Au=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},M0=function(e,n){return Math.min.apply(Math,n.map(function(r){return Au(e,r)}))},PS=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},XR=function(t,e){var n=dr({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},xc=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},E0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},YR={top:0,right:0,bottom:0,left:0},KR=function(e,n){return n?xc(e,n.scroll.diff.displacement):e},ZR=function(e,n,r){if(r&&r.increasedBy){var i;return Le({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},QR=function(e,n){return n&&n.shouldClipSubject?XR(n.pageMarginBox,e):dr(e)},eo=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,a=KR(e.marginBox,i),o=ZR(a,r,n),s=QR(o,i);return{page:e,withPlaceholder:n,active:s}},zh=function(t,e){t.frame||de();var n=t.frame,r=ln(e,n.scroll.initial),i=lo(r),a=Le({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=eo({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a}),s=Le({},t,{frame:a,subject:o});return s};function Pu(t){return AR(t)}function Bh(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Br(t,e){if(t.find)return t.find(e);var n=Bh(t,e);if(n!==-1)return t[n]}function RS(t){return Array.prototype.slice.call(t)}var LS=At(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),IS=At(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),yc=At(function(t){return Pu(t)}),JR=At(function(t){return Pu(t)}),uo=At(function(t,e){var n=JR(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n}),NS={vertical:"down",horizontal:"right"},eL={vertical:"up",horizontal:"left"};function Uh(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function _c(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Sc=At(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),tL=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,a=t.previousImpact;if(!r.isCombineEnabled)return null;var o=Uh(a);if(!o)return null;function s(h){var m={type:"COMBINE",whenEntered:e?NS:eL,combine:{draggableId:h,droppableId:r.descriptor.id}};return Le({},a,{at:m})}var l=a.displaced.all,u=l.length?l[0]:null;if(e)return u?s(u):null;var f=Sc(n,i);if(!u){if(!f.length)return null;var d=f[f.length-1];return s(d.descriptor.id)}var c=Bh(f,function(h){return h.descriptor.id===u});c===-1&&de();var p=c-1;if(p<0)return null;var g=f[p];return s(g.descriptor.id)},co=function(t,e){return t.descriptor.droppableId===e.descriptor.id},kS={point:Pt,value:0},vs={invisible:{},visible:{},all:[]},nL={displaced:vs,displacedBy:kS,at:null},En=function(t,e){return function(n){return t<=n&&n<=e}},OS=function(t){var e=En(t.top,t.bottom),n=En(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var a=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),s=a&&o;if(s)return!0;var l=r.top<t.top&&r.bottom>t.bottom,u=r.left<t.left&&r.right>t.right,f=l&&u;if(f)return!0;var d=l&&o||u&&a;return d}},rL=function(t){var e=En(t.top,t.bottom),n=En(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},bc={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},FS={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},iL=function(t){return function(e){var n=En(e.top,e.bottom),r=En(e.left,e.right);return function(i){return t===bc?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},aL=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:Pt;return xc(e,r)},oL=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},sL=function(e,n,r){return r(n)(e)},Gh=function(e){var n=e.target,r=e.destination,i=e.viewport,a=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,s=a?aL(n,r):n;return oL(s,r,o)&&sL(s,i,o)},lL=function(e){return Gh(Le({},e,{isVisibleThroughFrameFn:OS}))},zS=function(e){return Gh(Le({},e,{isVisibleThroughFrameFn:rL}))},uL=function(e){return Gh(Le({},e,{isVisibleThroughFrameFn:iL(e.destination.axis)}))},cL=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,a=n.visible;if(i[e])return!1;var o=a[e];return o?o.shouldAnimate:!0};function dL(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return dr(Oh(n,r))}function xs(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,a=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,u){var f=dL(u,r),d=u.descriptor.id;l.all.push(d);var c=lL({target:f,destination:n,viewport:i,withDroppableDisplacement:!0});if(!c)return l.invisible[u.descriptor.id]=!0,l;var p=cL(d,o,a),g={draggableId:d,shouldAnimate:p};return l.visible[d]=g,l},{all:[],visible:{},invisible:{}})}function fL(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function C0(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,a=fL(e,{inHomeList:n});return{displaced:vs,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:a}}}}function Ru(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,a=t.displacedBy,o=t.last,s=t.index,l=t.forceShouldAnimate,u=co(e,r);if(s==null)return C0({insideDestination:n,inHomeList:u,displacedBy:a,destination:r});var f=Br(n,function(h){return h.descriptor.index===s});if(!f)return C0({insideDestination:n,inHomeList:u,displacedBy:a,destination:r});var d=Sc(e,n),c=n.indexOf(f),p=d.slice(c),g=xs({afterDragging:p,destination:r,displacedBy:a,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:g,displacedBy:a,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:s}}}}function Yi(t,e){return!!e.effected[t]}var pL=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,a=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,s=r[o],l=s.descriptor.index,u=Yi(o,a);return u?e?l:l-1:e?l+1:l},hL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var a=i.index,o=e?a+1:a-1,s=r[0].descriptor.index,l=r[r.length-1].descriptor.index,u=n?l:l+1;return o<s||o>u?null:o},mL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,a=t.destination,o=t.insideDestination,s=t.previousImpact,l=t.viewport,u=t.afterCritical,f=s.at;if(f||de(),f.type==="REORDER"){var d=hL({isMovingForward:e,isInHomeList:n,location:f.destination,insideDestination:o});return d==null?null:Ru({draggable:r,insideDestination:o,destination:a,viewport:l,last:s.displaced,displacedBy:s.displacedBy,index:d})}var c=pL({isMovingForward:e,destination:a,displaced:s.displaced,draggables:i,combine:f.combine,afterCritical:u});return c==null?null:Ru({draggable:r,insideDestination:o,destination:a,viewport:l,last:s.displaced,displacedBy:s.displacedBy,index:c})},BS=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,a=!!(e.visible[r]||e.invisible[r]);return Yi(r,n)?a?Pt:lo(i.point):a?i.point:Pt},gL=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=_c(n);i||de();var a=i.draggableId,o=r[a].page.borderBox.center,s=BS({displaced:n.displaced,afterCritical:e,combineWith:a,displacedBy:n.displacedBy});return jt(o,s)},US=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},vL=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Vh=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},T0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Ja(n.line,r.marginBox[n.end]+US(n,i),Vh(n,r.marginBox,i))},D0=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Ja(n.line,r.marginBox[n.start]-vL(n,i),Vh(n,r.marginBox,i))},xL=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return Ja(n.line,r.contentBox[n.start]+US(n,i),Vh(n,r.contentBox,i))},yL=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,a=t.afterCritical,o=uo(i.descriptor.id,r),s=n.page,l=i.axis;if(!o.length)return xL({axis:l,moveInto:i.page,isMoving:s});var u=e.displaced,f=e.displacedBy,d=u.all[0];if(d){var c=r[d];if(Yi(d,a))return D0({axis:l,moveRelativeTo:c.page,isMoving:s});var p=Eu(c.page,f.point);return D0({axis:l,moveRelativeTo:p,isMoving:s})}var g=o[o.length-1];if(g.descriptor.id===n.descriptor.id)return s.borderBox.center;if(Yi(g.descriptor.id,a)){var h=Eu(g.page,lo(a.displacedBy.point));return T0({axis:l,moveRelativeTo:h,isMoving:s})}return T0({axis:l,moveRelativeTo:g.page,isMoving:s})},vp=function(t,e){var n=t.frame;return n?jt(e,n.scroll.diff.displacement):e},_L=function(e){var n=e.impact,r=e.draggable,i=e.droppable,a=e.draggables,o=e.afterCritical,s=r.page.borderBox.center,l=n.at;return!i||!l?s:l.type==="REORDER"?yL({impact:n,draggable:r,draggables:a,droppable:i,afterCritical:o}):gL({impact:n,draggables:a,afterCritical:o})},wc=function(t){var e=_L(t),n=t.droppable,r=n?vp(n,e):e;return r},GS=function(t,e){var n=ln(e,t.scroll.initial),r=lo(n),i=dr({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),a={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return a};function A0(t,e){return t.map(function(n){return e[n]})}function SL(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var bL=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,a=t.maxScrollChange,o=GS(n,jt(n.scroll.current,a)),s=r.frame?zh(r,jt(r.frame.scroll.current,a)):r,l=e.displaced,u=xs({afterDragging:A0(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),f=xs({afterDragging:A0(l.all,i),destination:s,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},c={},p=[l,u,f];l.all.forEach(function(h){var m=SL(h,p);if(m){c[h]=m;return}d[h]=!0});var g=Le({},e,{displaced:{all:l.all,invisible:d,visible:c}});return g},wL=function(t,e){return jt(t.scroll.diff.displacement,e)},Wh=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=wL(r,e),a=ln(i,n.page.borderBox.center);return jt(n.client.borderBox.center,a)},VS=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,a=t.withDroppableDisplacement,o=t.onlyOnMainAxis,s=o===void 0?!1:o,l=ln(r,e.page.borderBox.center),u=xc(e.page.borderBox,l),f={target:u,destination:n,withDroppableDisplacement:a,viewport:i};return s?uL(f):zS(f)},ML=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,a=t.previousImpact,o=t.viewport,s=t.previousPageBorderBoxCenter,l=t.previousClientSelection,u=t.afterCritical;if(!r.isEnabled)return null;var f=uo(r.descriptor.id,i),d=co(n,r),c=tL({isMovingForward:e,draggable:n,destination:r,insideDestination:f,previousImpact:a})||mL({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:f,previousImpact:a,viewport:o,afterCritical:u});if(!c)return null;var p=wc({impact:c,draggable:n,droppable:r,draggables:i,afterCritical:u}),g=VS({draggable:n,destination:r,newPageBorderBoxCenter:p,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(g){var h=Wh({pageBorderBoxCenter:p,draggable:n,viewport:o});return{clientSelection:h,impact:c,scrollJumpRequest:null}}var m=ln(p,s),v=bL({impact:c,viewport:o,destination:r,draggables:i,maxScrollChange:m});return{clientSelection:l,impact:v,scrollJumpRequest:m}},Kt=function(e){var n=e.subject.active;return n||de(),n},EL=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,a=t.viewport,o=r.subject.active;if(!o)return null;var s=r.axis,l=En(o[s.start],o[s.end]),u=yc(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return OS(a.frame)(Kt(d))}).filter(function(d){var c=Kt(d);return e?o[s.crossAxisEnd]<c[s.crossAxisEnd]:c[s.crossAxisStart]<o[s.crossAxisStart]}).filter(function(d){var c=Kt(d),p=En(c[s.start],c[s.end]);return l(c[s.start])||l(c[s.end])||p(o[s.start])||p(o[s.end])}).sort(function(d,c){var p=Kt(d)[s.crossAxisStart],g=Kt(c)[s.crossAxisStart];return e?p-g:g-p}).filter(function(d,c,p){return Kt(d)[s.crossAxisStart]===Kt(p[0])[s.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var f=u.filter(function(d){var c=En(Kt(d)[s.start],Kt(d)[s.end]);return c(n[s.line])});return f.length===1?f[0]:f.length>1?f.sort(function(d,c){return Kt(d)[s.start]-Kt(c)[s.start]})[0]:u.sort(function(d,c){var p=M0(n,E0(Kt(d))),g=M0(n,E0(Kt(c)));return p!==g?p-g:Kt(d)[s.start]-Kt(c)[s.start]})[0]},P0=function(e,n){var r=e.page.borderBox.center;return Yi(e.descriptor.id,n)?ln(r,n.displacedBy.point):r},CL=function(e,n){var r=e.page.borderBox;return Yi(e.descriptor.id,n)?xc(r,lo(n.displacedBy.point)):r},TL=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,a=t.afterCritical,o=i.filter(function(s){return zS({target:CL(s,a),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(s,l){var u=Au(e,vp(r,P0(s,a))),f=Au(e,vp(r,P0(l,a)));return u<f?-1:f<u?1:s.descriptor.index-l.descriptor.index});return o[0]||null},Us=At(function(e,n){var r=n[e.line];return{value:r,point:Ja(e.line,r)}}),DL=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return Ja(i.line,n[i.line]);var a=e.subject.page.contentBox[i.size],o=uo(e.descriptor.id,r),s=o.reduce(function(f,d){return f+d.client.marginBox[i.size]},0),l=s+n[i.line],u=l-a;return u<=0?null:Ja(i.line,u)},WS=function(e,n){return Le({},e,{scroll:Le({},e.scroll,{max:n})})},HS=function(e,n,r){var i=e.frame;co(n,e)&&de(),e.subject.withPlaceholder&&de();var a=Us(e.axis,n.displaceBy).point,o=DL(e,a,r),s={placeholderSize:a,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=eo({page:e.subject.page,withPlaceholder:s,axis:e.axis,frame:e.frame});return Le({},e,{subject:l})}var u=o?jt(i.scroll.max,o):i.scroll.max,f=WS(i,u),d=eo({page:e.subject.page,withPlaceholder:s,axis:e.axis,frame:f});return Le({},e,{subject:d,frame:f})},AL=function(e){var n=e.subject.withPlaceholder;n||de();var r=e.frame;if(!r){var i=eo({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Le({},e,{subject:i})}var a=n.oldFrameMaxScroll;a||de();var o=WS(r,a),s=eo({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return Le({},e,{subject:s,frame:o})},PL=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,a=t.draggables,o=t.destination,s=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var u={displaced:vs,displacedBy:kS,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},f=wc({impact:u,draggable:i,droppable:o,draggables:a,afterCritical:l}),d=co(i,o)?o:HS(o,i,a),c=VS({draggable:i,destination:d,newPageBorderBoxCenter:f,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return c?u:null}var p=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],g=function(){var m=n.descriptor.index;return n.descriptor.id===i.descriptor.id||p?m:m+1}(),h=Us(o.axis,i.displaceBy);return Ru({draggable:i,insideDestination:r,destination:o,viewport:s,displacedBy:h,last:vs,index:g})},RL=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,a=t.draggables,o=t.droppables,s=t.viewport,l=t.afterCritical,u=EL({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:s});if(!u)return null;var f=uo(u.descriptor.id,a),d=TL({pageBorderBoxCenter:n,viewport:s,destination:u,insideDestination:f,afterCritical:l}),c=PL({previousPageBorderBoxCenter:n,destination:u,draggable:r,draggables:a,moveRelativeTo:d,insideDestination:f,viewport:s,afterCritical:l});if(!c)return null;var p=wc({impact:c,draggable:r,droppable:u,draggables:a,afterCritical:l}),g=Wh({pageBorderBoxCenter:p,draggable:r,viewport:s});return{clientSelection:g,impact:c,scrollJumpRequest:null}},Cn=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},LL=function(e,n){var r=Cn(e);return r?n[r]:null},IL=function(t){var e=t.state,n=t.type,r=LL(e.impact,e.dimensions.droppables),i=!!r,a=e.dimensions.droppables[e.critical.droppable.id],o=r||a,s=o.axis.direction,l=s==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||s==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var u=n==="MOVE_DOWN"||n==="MOVE_RIGHT",f=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,c=e.dimensions,p=c.draggables,g=c.droppables;return l?ML({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,destination:o,draggables:p,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):RL({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,isOver:o,draggables:p,droppables:g,viewport:e.viewport,afterCritical:e.afterCritical})};function Pi(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}var jS=function(t){var e=En(t.top,t.bottom),n=En(t.left,t.right);return function(r){return e(r.y)&&e(r.y)&&n(r.x)&&n(r.x)}},NL=function(t){var e=t.target,n=t.droppables,r=Br(yc(n),function(i){if(!i.isEnabled)return!1;var a=i.subject.active;return a?jS(a)(e):!1});return r?r.descriptor.id:null},kL=function(t,e){var n=t.frame;return n?jt(e,n.scroll.diff.value):e},$S=function(t,e){return t===bc?e.vertical==="down":e.horizontal==="right"};function OL(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var FL=function(t){var e=t.pageBorderBoxCenterWithDroppableScrollChange,n=t.draggable,r=t.destination,i=t.insideDestination,a=t.last,o=t.viewport,s=t.userDirection,l=t.afterCritical,u=r.axis,f=$S(r.axis,s),d=Us(r.axis,n.displaceBy),c=e[u.line],p=d.value,g=Sc(n,i),h=Br(g,function(v){var x=v.descriptor.id,y=v.page.borderBox,_=y[u.start],b=y[u.end],M=Yi(x,l);return f?M?c<_:c<_+p:M?c<=b-p:c<=b}),m=OL({draggable:n,closest:h,inHomeList:co(n,r)});return Ru({draggable:n,insideDestination:i,destination:r,viewport:o,last:a,displacedBy:d,index:m})};function zL(t,e,n){return!n||t!==n.combine.draggableId?e:n.whenEntered}function BL(t){return t.at&&t.at.type==="COMBINE"?t.at:null}function UL(t){var e=t.combineWithId,n=t.destinationId,r=t.userDirection,i=t.previousImpact,a=BL(i),o=zL(e,r,a),s={displacedBy:i.displacedBy,displaced:i.displaced,at:{type:"COMBINE",whenEntered:o,combine:{draggableId:e,droppableId:n}}};return s}function GL(t,e,n){return!n||t!==n.combine.draggableId?e:n.whenEntered}var VL=function(e){var n=e.id,r=e.currentCenter,i=e.axis,a=e.borderBox,o=e.displaceBy,s=e.currentUserDirection,l=e.lastCombineImpact,u=a[i.start]+o[i.line],f=a[i.end]+o[i.line],d=a[i.size],c=d*.666,p=GL(n,s,l),g=$S(i,p),h=r[i.line];return g?En(u,u+c)(h):En(f-c,f)(h)};function WL(t){return t.at&&t.at.type==="COMBINE"?t.at:null}var HL=function(t){var e=t.draggable,n=t.pageBorderBoxCenterWithDroppableScrollChange,r=t.previousImpact,i=t.destination,a=t.insideDestination,o=t.userDirection,s=t.afterCritical;if(!i.isCombineEnabled)return null;var l=i.axis,u=r.displaced,f=Us(i.axis,e.displaceBy),d=WL(r),c=Br(Sc(e,a),function(p){var g=p.descriptor.id,h=BS({displaced:u,afterCritical:s,combineWith:g,displacedBy:f});return VL({id:g,currentCenter:n,axis:l,borderBox:p.page.borderBox,displaceBy:h,currentUserDirection:o,lastCombineImpact:d})});return c?UL({combineWithId:c.descriptor.id,destinationId:i.descriptor.id,previousImpact:r,userDirection:o}):null},qS=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.draggables,i=t.droppables,a=t.previousImpact,o=t.viewport,s=t.userDirection,l=t.afterCritical,u=NL({target:e,droppables:i});if(!u)return nL;var f=i[u],d=uo(f.descriptor.id,r),c=kL(f,e);return HL({pageBorderBoxCenterWithDroppableScrollChange:c,draggable:n,previousImpact:a,destination:f,insideDestination:d,userDirection:s,afterCritical:l})||FL({pageBorderBoxCenterWithDroppableScrollChange:c,draggable:n,destination:f,insideDestination:d,last:a.displaced,viewport:o,userDirection:s,afterCritical:l})},jL=function(e,n){return n===0?e:n>0?"down":"up"},$L=function(e,n){return n===0?e:n>0?"right":"left"},qL=function(t,e,n){var r=ln(n,e);return{horizontal:$L(t.horizontal,r.x),vertical:jL(t.vertical,r.y)}},Hh=function(t,e){var n;return Le({},t,(n={},n[e.descriptor.id]=e,n))},XL=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,a=Cn(n),o=Cn(r);if(!a||a===o)return i;var s=i[a];if(!s.subject.withPlaceholder)return i;var l=AL(s);return Hh(i,l)},YL=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,a=t.impact,o=XL({previousImpact:i,impact:a,droppables:r}),s=Cn(a);if(!s)return o;var l=r[s];if(co(e,l)||l.subject.withPlaceholder)return o;var u=HS(l,e,n);return Hh(o,u)},$o=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,a=t.impact,o=t.scrollJumpRequest,s=i||e.viewport,l=s.scroll.current,u=r||e.dimensions,f=n||e.current.client.selection,d=ln(f,e.initial.client.selection),c={offset:d,selection:f,borderBoxCenter:jt(e.initial.client.borderBoxCenter,d)},p={selection:jt(c.selection,l),borderBoxCenter:jt(c.borderBoxCenter,l)},g={client:c,page:p},h=qL(e.userDirection,e.current.page.borderBoxCenter,g.page.borderBoxCenter);if(e.phase==="COLLECTING")return Le({phase:"COLLECTING"},e,{dimensions:u,viewport:s,current:g,userDirection:h});var m=u.draggables[e.critical.draggable.id],v=a||qS({pageBorderBoxCenter:p.borderBoxCenter,draggable:m,draggables:u.draggables,droppables:u.droppables,previousImpact:e.impact,viewport:s,userDirection:h,afterCritical:e.afterCritical}),x=YL({draggable:m,impact:v,previousImpact:e.impact,draggables:u.draggables,droppables:u.droppables}),y=Le({},e,{current:g,userDirection:h,dimensions:{draggables:u.draggables,droppables:x},impact:v,viewport:s,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return y};function KL(t,e){return t.map(function(n){return e[n]})}var XS=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,a=t.forceShouldAnimate,o=e.displaced,s=KL(o.all,r),l=xs({afterDragging:s,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:a,last:o});return Le({},e,{displaced:l})},YS=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,a=t.viewport,o=t.afterCritical,s=wc({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return Wh({pageBorderBoxCenter:s,draggable:n,viewport:a})},KS=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&de();var i=e.impact,a=r||e.viewport,o=n||e.dimensions,s=o.draggables,l=o.droppables,u=s[e.critical.draggable.id],f=Cn(i);f||de();var d=l[f],c=XS({impact:i,viewport:a,destination:d,draggables:s}),p=YS({impact:c,draggable:u,droppable:d,draggables:s,viewport:a,afterCritical:e.afterCritical});return $o({impact:c,clientSelection:p,state:e,dimensions:o,viewport:a})},ZL=function(t){return{index:t.index,droppableId:t.droppableId}},ZS=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,a=Us(n.axis,e.displaceBy),o=uo(n.descriptor.id,r),s=o.indexOf(e);s===-1&&de();var l=o.slice(s+1),u=l.reduce(function(p,g){return p[g.descriptor.id]=!0,p},{}),f={inVirtualList:n.descriptor.mode==="virtual",displacedBy:a,effected:u},d=xs({afterDragging:l,destination:n,displacedBy:a,last:null,viewport:i.frame,forceShouldAnimate:!1}),c={displaced:d,displacedBy:a,at:{type:"REORDER",destination:ZL(e.descriptor)}};return{impact:c,afterCritical:f}},QL=function(t,e){return{draggables:t.draggables,droppables:Hh(t.droppables,e)}},JL=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=Eu(e.client,n),a=Cu(i,r),o=Le({},e,{placeholder:Le({},e.placeholder,{client:i}),client:i,page:a});return o},eI=function(t){var e=t.frame;return e||de(),e},tI=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(a){var o=a.descriptor.droppableId,s=n[o],l=eI(s),u=l.scroll.diff.value,f=jt(i,u),d=JL({draggable:a,offset:f,initialWindowScroll:r.scroll.initial});return d})},nI=function(t){var e,n,r=t.state,i=t.published,a=i.modified.map(function(b){var M=r.dimensions.droppables[b.droppableId],D=zh(M,b.scroll);return D}),o=Le({},r.dimensions.droppables,{},LS(a)),s=IS(tI({additions:i.additions,updatedDroppables:o,viewport:r.viewport})),l=Le({},r.dimensions.draggables,{},s);i.removals.forEach(function(b){delete l[b]});var u={droppables:o,draggables:l},f=Cn(r.impact),d=f?u.droppables[f]:null,c=u.draggables[r.critical.draggable.id],p=u.droppables[r.critical.droppable.id],g=ZS({draggable:c,home:p,draggables:l,viewport:r.viewport}),h=g.impact,m=g.afterCritical,v=d&&d.isCombineEnabled?r.impact:h,x=qS({pageBorderBoxCenter:r.current.page.borderBoxCenter,draggable:u.draggables[r.critical.draggable.id],draggables:u.draggables,droppables:u.droppables,previousImpact:v,viewport:r.viewport,userDirection:r.userDirection,afterCritical:m}),y=Le({phase:"DRAGGING"},r,(e={},e.phase="DRAGGING",e.impact=x,e.onLiftImpact=h,e.dimensions=u,e.afterCritical=m,e.forceShouldAnimate=!1,e));if(r.phase==="COLLECTING")return y;var _=Le({phase:"DROP_PENDING"},y,(n={},n.phase="DROP_PENDING",n.reason=r.reason,n.isWaiting=!1,n));return _},xp=function(e){return e.movementMode==="SNAP"},tf=function(e,n,r){var i=QL(e.dimensions,n);return!xp(e)||r?$o({state:e,dimensions:i}):KS({state:e,dimensions:i})};function nf(t){return t.isDragging&&t.movementMode==="SNAP"?Le({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var R0={phase:"IDLE",completed:null,shouldFlush:!1},rI=function(t,e){if(t===void 0&&(t=R0),e.type==="FLUSH")return Le({},R0,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&de();var n=e.payload,r=n.critical,i=n.clientSelection,a=n.viewport,o=n.dimensions,s=n.movementMode,l=o.draggables[r.draggable.id],u=o.droppables[r.droppable.id],f={selection:i,borderBoxCenter:l.client.borderBox.center,offset:Pt},d={client:f,page:{selection:jt(f.selection,a.scroll.initial),borderBoxCenter:jt(f.selection,a.scroll.initial)}},c=yc(o.droppables).every(function(Me){return!Me.isFixedOnPage}),p=ZS({draggable:l,home:u,draggables:o.draggables,viewport:a}),g=p.impact,h=p.afterCritical,m={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:s,dimensions:o,initial:d,current:d,isWindowScrollAllowed:c,impact:g,afterCritical:h,onLiftImpact:g,viewport:a,userDirection:NS,scrollJumpRequest:null,forceShouldAnimate:null};return m}if(e.type==="COLLECTION_STARTING"){var v;if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&de();var x=Le({phase:"COLLECTING"},t,(v={},v.phase="COLLECTING",v));return x}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||de(),nI({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Pi(t)||de();var y=e.payload.client;return ci(y,t.current.client.selection)?t:$o({state:t,clientSelection:y,impact:xp(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return nf(t);Pi(t)||de();var _=e.payload,b=_.id,M=_.newScroll,D=t.dimensions.droppables[b];if(!D)return t;var S=zh(D,M);return tf(t,S,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pi(t)||de();var E=e.payload,P=E.id,H=E.isEnabled,Y=t.dimensions.droppables[P];Y||de(),Y.isEnabled===H&&de();var F=Le({},Y,{isEnabled:H});return tf(t,F,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pi(t)||de();var N=e.payload,$=N.id,J=N.isCombineEnabled,ee=t.dimensions.droppables[$];ee||de(),ee.isCombineEnabled===J&&de();var I=Le({},ee,{isCombineEnabled:J});return tf(t,I,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Pi(t)||de(),t.isWindowScrollAllowed||de();var q=e.payload.newScroll;if(ci(t.viewport.scroll.current,q))return nf(t);var G=GS(t.viewport,q);return xp(t)?KS({state:t,viewport:G}):$o({state:t,viewport:G})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Pi(t))return t;var oe=e.payload.maxScroll;if(ci(oe,t.viewport.scroll.max))return t;var A=Le({},t.viewport,{scroll:Le({},t.viewport.scroll,{max:oe})});return Le({phase:"DRAGGING"},t,{viewport:A})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&de();var O=IL({state:t,type:e.type});return O?$o({state:t,impact:O.impact,clientSelection:O.clientSelection,scrollJumpRequest:O.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var V,L=e.payload.reason;t.phase!=="COLLECTING"&&de();var R=Le({phase:"DROP_PENDING"},t,(V={},V.phase="DROP_PENDING",V.isWaiting=!0,V.reason=L,V));return R}if(e.type==="DROP_ANIMATE"){var ne=e.payload,j=ne.completed,ue=ne.dropDuration,ce=ne.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||de();var me={phase:"DROP_ANIMATING",completed:j,dropDuration:ue,newHomeClientOffset:ce,dimensions:t.dimensions};return me}if(e.type==="DROP_COMPLETE"){var fe=e.payload.completed;return{phase:"IDLE",completed:fe,shouldFlush:!1}}return t},iI=function(e){return{type:"LIFT",payload:e}},aI=function(e){return{type:"INITIAL_PUBLISH",payload:e}},oI=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},sI=function(){return{type:"COLLECTION_STARTING",payload:null}},lI=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},uI=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},cI=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},QS=function(e){return{type:"MOVE",payload:e}},dI=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},fI=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},pI=function(){return{type:"MOVE_UP",payload:null}},hI=function(){return{type:"MOVE_DOWN",payload:null}},mI=function(){return{type:"MOVE_RIGHT",payload:null}},gI=function(){return{type:"MOVE_LEFT",payload:null}},JS=function(){return{type:"FLUSH",payload:null}},vI=function(e){return{type:"DROP_ANIMATE",payload:e}},jh=function(e){return{type:"DROP_COMPLETE",payload:e}},eb=function(e){return{type:"DROP",payload:e}},xI=function(e){return{type:"DROP_PENDING",payload:e}},tb=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},yI=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(a){if(a.type!=="LIFT"){i(a);return}var o=a.payload,s=o.id,l=o.clientSelection,u=o.movementMode,f=n();f.phase==="DROP_ANIMATING"&&r(jh({completed:f.completed})),n().phase!=="IDLE"&&de(),r(JS());var d={shouldPublishImmediately:u==="SNAP"},c={draggableId:s,scrollOptions:d},p=t.startPublishing(c),g=p.critical,h=p.dimensions,m=p.viewport;r(aI({critical:g,dimensions:h,clientSelection:l,movementMode:u,viewport:m}))}}}},_I=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},$h={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},ys={opacity:{drop:0,combining:.7},scale:{drop:.75}},qh={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Ei=qh.outOfTheWay+"s "+$h.outOfTheWay,qo={fluid:"opacity "+Ei,snap:"transform "+Ei+", opacity "+Ei,drop:function(e){var n=e+"s "+$h.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Ei,placeholder:"height "+Ei+", width "+Ei+", margin "+Ei},L0=function(e){return ci(e,Pt)?null:"translate("+e.x+"px, "+e.y+"px)"},yp={moveTo:L0,drop:function(e,n){var r=L0(e);return r?n?r+" scale("+ys.scale.drop+")":r:null}},_p=qh.minDropTime,nb=qh.maxDropTime,SI=nb-_p,I0=1500,bI=.6,wI=function(t){var e=t.current,n=t.destination,r=t.reason,i=Au(e,n);if(i<=0)return _p;if(i>=I0)return nb;var a=i/I0,o=_p+SI*a,s=r==="CANCEL"?o*bI:o;return Number(s.toFixed(2))},MI=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,a=t.afterCritical,o=r.draggables,s=r.droppables,l=Cn(e),u=l?s[l]:null,f=s[n.descriptor.droppableId],d=YS({impact:e,draggable:n,draggables:o,afterCritical:a,droppable:u||f,viewport:i}),c=ln(d,n.client.borderBox.center);return c},EI=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,a=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var s=XS({draggables:e,impact:o,destination:i,viewport:a,forceShouldAnimate:!0});return{impact:s,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=Le({},r,{displaced:vs});return{impact:l,didDropInsideDroppable:!0}},CI=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var a=e(),o=i.payload.reason;if(a.phase==="COLLECTING"){n(xI({reason:o}));return}if(a.phase!=="IDLE"){var s=a.phase==="DROP_PENDING"&&a.isWaiting;s&&de(),a.phase==="DRAGGING"||a.phase==="DROP_PENDING"||de();var l=a.critical,u=a.dimensions,f=u.draggables[a.critical.draggable.id],d=EI({reason:o,lastImpact:a.impact,afterCritical:a.afterCritical,onLiftImpact:a.onLiftImpact,home:a.dimensions.droppables[a.critical.droppable.id],viewport:a.viewport,draggables:a.dimensions.draggables}),c=d.impact,p=d.didDropInsideDroppable,g=p?Uh(c):null,h=p?_c(c):null,m={index:l.draggable.index,droppableId:l.droppable.id},v={draggableId:f.descriptor.id,type:f.descriptor.type,source:m,reason:o,mode:a.movementMode,destination:g,combine:h},x=MI({impact:c,draggable:f,dimensions:u,viewport:a.viewport,afterCritical:a.afterCritical}),y={critical:a.critical,afterCritical:a.afterCritical,result:v,impact:c},_=!ci(a.current.client.offset,x)||!!v.combine;if(!_){n(jh({completed:y}));return}var b=wI({current:a.current.client.offset,destination:x,reason:o}),M={newHomeClientOffset:x,dropDuration:b,completed:y};n(vI(M))}}}},rb=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function TI(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function DI(t){var e=t.onWindowScroll;function n(){e(rb())}var r=gs(n),i=TI(r),a=ui;function o(){return a!==ui}function s(){o()&&de(),a=Un(window,[i])}function l(){o()||de(),r.cancel(),a(),a=ui}return{start:s,stop:l,isActive:o}}var AI=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},PI=function(t){var e=DI({onWindowScroll:function(r){t.dispatch(dI({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&AI(r)&&e.stop(),n(r)}}},RI=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},LI=function(){var t=[],e=function(a){var o=Bh(t,function(u){return u.timerId===a});o===-1&&de();var s=t.splice(o,1),l=s[0];l.callback()},n=function(a){var o=setTimeout(function(){return e(o)}),s={timerId:o,callback:a};t.push(s)},r=function(){if(t.length){var a=[].concat(t);t.length=0,a.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},II=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},NI=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},kI=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},Al=function(e,n){n()},Pl=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},rf=function(e,n,r,i){if(!e){r(i(n));return}var a=RI(r),o={announce:a};e(n,o),a.wasCalled()||r(i(n))},OI=function(t,e){var n=LI(),r=null,i=function(d,c){r&&de(),Al("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p(Pl(d,c))})},a=function(d,c){r&&de();var p=Pl(d,c);r={mode:c,lastCritical:d,lastLocation:p.source,lastCombine:null},n.add(function(){Al("onDragStart",function(){return rf(t().onDragStart,p,e,Yl.onDragStart)})})},o=function(d,c){var p=Uh(c),g=_c(c);r||de();var h=!kI(d,r.lastCritical);h&&(r.lastCritical=d);var m=!II(r.lastLocation,p);m&&(r.lastLocation=p);var v=!NI(r.lastCombine,g);if(v&&(r.lastCombine=g),!(!h&&!m&&!v)){var x=Le({},Pl(d,r.mode),{combine:g,destination:p});n.add(function(){Al("onDragUpdate",function(){return rf(t().onDragUpdate,x,e,Yl.onDragUpdate)})})}},s=function(){r||de(),n.flush()},l=function(d){r||de(),r=null,Al("onDragEnd",function(){return rf(t().onDragEnd,d,e,Yl.onDragEnd)})},u=function(){if(r){var d=Le({},Pl(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});l(d)}};return{beforeStart:i,start:a,update:o,flush:s,drop:l,abort:u}},FI=function(t,e){var n=OI(t,e);return function(r){return function(i){return function(a){if(a.type==="INITIAL_PUBLISH"){var o=a.payload.critical;n.beforeStart(o,a.payload.movementMode),i(a),n.start(o,a.payload.movementMode);return}if(a.type==="DROP_COMPLETE"){var s=a.payload.completed.result;n.flush(),i(a),n.drop(s);return}if(i(a),a.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},zI=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&de(),t.dispatch(jh({completed:r.completed}))}}},BI=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(a){if((a.type==="FLUSH"||a.type==="DROP_COMPLETE"||a.type==="DROP_ANIMATION_FINISHED")&&r(),i(a),a.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(tb())}};n=requestAnimationFrame(function(){n=null,e=Un(window,[o])})}}}},UI=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},GI=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},VI=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},WI=function(t){return function(e){return function(n){return function(r){if(VI(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&de(),t.start(i);return}n(r),t.scroll(e.getState())}}}},HI=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(eb({reason:r.reason})))}}}},jI=gS,$I=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,a=t.announce,o=t.autoScroller;return mS(rI,jI(NP(_I(r),UI(e),yI(e),CI,zI,BI,HI,WI(o),PI,GI(n),FI(i,a))))},af=function(){return{additions:{},removals:{},modified:{}}};function qI(t){var e=t.registry,n=t.callbacks,r=af(),i=null,a=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var f=r,d=f.additions,c=f.removals,p=f.modified,g=Jd(d).map(function(v){return e.draggable.getById(v).getDimension(Pt)}).sort(function(v,x){return v.descriptor.index-x.descriptor.index}),h=Jd(p).map(function(v){var x=e.droppable.getById(v),y=x.callbacks.getScrollWhileDragging();return{droppableId:v,scroll:y}}),m={additions:g,removals:Jd(c),modified:h};r=af(),n.publish(m)}))},o=function(f){var d=f.descriptor.id;r.additions[d]=f,r.modified[f.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],a()},s=function(f){var d=f.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],a()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=af())};return{add:o,remove:s,stop:l}}var ib=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,a=ln({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,a.x),y:Math.max(0,a.y)};return o},ab=function(){var t=document.documentElement;return t||de(),t},ob=function(){var t=ab(),e=ib({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},XI=function(){var t=rb(),e=ob(),n=t.y,r=t.x,i=ab(),a=i.clientWidth,o=i.clientHeight,s=r+a,l=n+o,u=dr({top:n,left:r,right:s,bottom:l}),f={frame:u,scroll:{initial:t,current:t,max:e,diff:{value:Pt,displacement:Pt}}};return f},YI=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=XI(),a=i.scroll.current,o=e.droppable,s=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(a,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(a)}),u={draggables:IS(l),droppables:LS(s)},f={dimensions:u,critical:e,viewport:i};return f};function N0(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var KI=function(t,e){var n=null,r=qI({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(p,g){t.droppable.exists(p)||de(),n&&e.updateDroppableIsEnabled({id:p,isEnabled:g})},a=function(p,g){n&&(t.droppable.exists(p)||de(),e.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:g}))},o=function(p,g){n&&(t.droppable.exists(p)||de(),e.updateDroppableScroll({id:p,newScroll:g}))},s=function(p,g){n&&t.droppable.getById(p).callbacks.scroll(g)},l=function(){if(n){r.stop();var p=n.critical.droppable;t.droppable.getAllByType(p.type).forEach(function(g){return g.callbacks.dragStopped()}),n.unsubscribe(),n=null}},u=function(p){n||de();var g=n.critical.draggable;p.type==="ADDITION"&&N0(t,g,p.value)&&r.add(p.value),p.type==="REMOVAL"&&N0(t,g,p.value)&&r.remove(p.value)},f=function(p){n&&de();var g=t.draggable.getById(p.draggableId),h=t.droppable.getById(g.descriptor.droppableId),m={draggable:g.descriptor,droppable:h.descriptor},v=t.subscribe(u);return n={critical:m,unsubscribe:v},YI({critical:m,registry:t,scrollOptions:p.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:a,scrollDroppable:s,updateDroppableScroll:o,startPublishing:f,stopPublishing:l};return d},sb=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},ZI=function(t){window.scrollBy(t.x,t.y)},QI=At(function(t){return yc(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),JI=function(e,n){var r=Br(QI(n),function(i){return i.frame||de(),jS(i.frame.pageMarginBox)(e)});return r},eN=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var a=JI(e,r);return a},di={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},tN=function(t,e){var n=t[e.size]*di.startFromPercentage,r=t[e.size]*di.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},lb=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var a=r-e,o=a/i;return o},Xh=1,nN=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return di.maxPixelScroll;if(t===e.startScrollingFrom)return Xh;var n=lb({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=di.maxPixelScroll*di.ease(r);return Math.ceil(i)},k0=di.durationDampening.accelerateAt,O0=di.durationDampening.stopDampeningAt,rN=function(t,e){var n=e,r=O0,i=ES(),a=i-n;if(a>=O0)return t;if(a<k0)return Xh;var o=lb({startOfRange:k0,endOfRange:r,current:a}),s=t*di.ease(o);return Math.ceil(s)},F0=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,a=nN(e,n);return a===0?0:i?Math.max(rN(a,r),Xh):a},z0=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,a=t.shouldUseTimeDampening,o=tN(e,i),s=n[i.end]<n[i.start];return s?F0({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a}):-1*F0({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a})},iN=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,a=n.width>e.width;return!a&&!i?r:a&&i?null:{x:a?0:r.x,y:i?0:r.y}},aN=PS(function(t){return t===0?0:t}),ub=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,a=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},s=z0({container:n,distanceToEdges:o,dragStartTime:e,axis:bc,shouldUseTimeDampening:a}),l=z0({container:n,distanceToEdges:o,dragStartTime:e,axis:FS,shouldUseTimeDampening:a}),u=aN({x:l,y:s});if(ci(u,Pt))return null;var f=iN({container:n,subject:r,proposedScroll:u});return f?ci(f,Pt)?null:f:null},oN=PS(function(t){return t===0?0:t>0?1:-1}),Yh=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,a=jt(n,i),o={x:t(a.x,r.x),y:t(a.y,r.y)};return ci(o,Pt)?null:o}}(),cb=function(e){var n=e.max,r=e.current,i=e.change,a={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=oN(i),s=Yh({max:a,current:r,change:o});return!s||o.x!==0&&s.x===0||o.y!==0&&s.y===0},Kh=function(e,n){return cb({current:e.scroll.current,max:e.scroll.max,change:n})},sN=function(e,n){if(!Kh(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return Yh({current:i,max:r,change:n})},Zh=function(e,n){var r=e.frame;return r?cb({current:r.scroll.current,max:r.scroll.max,change:n}):!1},lN=function(e,n){var r=e.frame;return!r||!Zh(e,n)?null:Yh({current:r.scroll.current,max:r.scroll.max,change:n})},uN=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,a=t.shouldUseTimeDampening,o=ub({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:a});return o&&Kh(e,o)?o:null},cN=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,a=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var s=ub({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:a});return s&&Zh(e,s)?s:null},B0=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,a=t.scrollDroppable,o=e.current.page.borderBoxCenter,s=e.dimensions.draggables[e.critical.draggable.id],l=s.page.marginBox;if(e.isWindowScrollAllowed){var u=e.viewport,f=uN({dragStartTime:n,viewport:u,subject:l,center:o,shouldUseTimeDampening:r});if(f){i(f);return}}var d=eN({center:o,destination:Cn(e.impact),droppables:e.dimensions.droppables});if(d){var c=cN({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});c&&a(d.descriptor.id,c)}},dN=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=gs(e),i=gs(n),a=null,o=function(f){a||de();var d=a,c=d.shouldUseTimeDampening,p=d.dragStartTime;B0({state:f,scrollWindow:r,scrollDroppable:i,dragStartTime:p,shouldUseTimeDampening:c})},s=function(f){a&&de();var d=ES(),c=!1,p=function(){c=!0};B0({state:f,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),a={dragStartTime:d,shouldUseTimeDampening:c},c&&o(f)},l=function(){a&&(r.cancel(),i.cancel(),a=null)};return{start:s,stop:l,scroll:o}},fN=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(u,f){var d=jt(u.current.client.selection,f);e({client:d})},a=function(u,f){if(!Zh(u,f))return f;var d=lN(u,f);if(!d)return n(u.descriptor.id,f),null;var c=ln(f,d);n(u.descriptor.id,c);var p=ln(f,c);return p},o=function(u,f,d){if(!u||!Kh(f,d))return d;var c=sN(f,d);if(!c)return r(d),null;var p=ln(d,c);r(p);var g=ln(d,p);return g},s=function(u){var f=u.scrollJumpRequest;if(f){var d=Cn(u.impact);d||de();var c=a(u.dimensions.droppables[d],f);if(c){var p=u.viewport,g=o(u.isWindowScrollAllowed,p,c);g&&i(u,g)}}};return s},pN=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=dN({scrollWindow:n,scrollDroppable:e}),a=fN({move:r,scrollWindow:n,scrollDroppable:e}),o=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){i.scroll(u);return}u.scrollJumpRequest&&a(u)}},s={scroll:o,start:i.start,stop:i.stop};return s},to="data-rbd",no=function(){var t=to+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Sp=function(){var t=to+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),hN=function(){var t=to+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),U0={contextId:to+"-scroll-container-context-id"},mN=function(e){return function(n){return"["+n+'="'+e+'"]'}},Do=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},gN="pointer-events: none;",vN=function(t){var e=mN(t),n=function(){var s=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(no.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:s,dragging:gN,dropAnimating:s}}}(),r=function(){var s=`
      transition: `+qo.outOfTheWay+`;
    `;return{selector:e(Sp.contextId),styles:{dragging:s,dropAnimating:s,userCancel:s}}}(),i={selector:e(hN.contextId),styles:{always:"overflow-anchor: none;"}},a={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,a];return{always:Do(o,"always"),resting:Do(o,"resting"),dragging:Do(o,"dragging"),dropAnimating:Do(o,"dropAnimating"),userCancel:Do(o,"userCancel")}},Tn=typeof window<"u"?se.useLayoutEffect:se.useEffect,of=function(){var e=document.querySelector("head");return e||de(),e},G0=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function xN(t,e){var n=Ye(function(){return vN(t)},[t]),r=se.useRef(null),i=se.useRef(null),a=we(At(function(d){var c=i.current;c||de(),c.textContent=d}),[]),o=we(function(d){var c=r.current;c||de(),c.textContent=d},[]);Tn(function(){!r.current&&!i.current||de();var d=G0(e),c=G0(e);return r.current=d,i.current=c,d.setAttribute(to+"-always",t),c.setAttribute(to+"-dynamic",t),of().appendChild(d),of().appendChild(c),o(n.always),a(n.resting),function(){var p=function(h){var m=h.current;m||de(),of().removeChild(m),h.current=null};p(r),p(i)}},[e,o,a,n.always,n.resting,t]);var s=we(function(){return a(n.dragging)},[a,n.dragging]),l=we(function(d){if(d==="DROP"){a(n.dropAnimating);return}a(n.userCancel)},[a,n.dropAnimating,n.userCancel]),u=we(function(){i.current&&a(n.resting)},[a,n.resting]),f=Ye(function(){return{dragging:s,dropping:l,resting:u}},[s,l,u]);return f}var db=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Mc(t){return t instanceof db(t).HTMLElement}function yN(t,e){var n="["+no.contextId+'="'+t+'"]',r=RS(document.querySelectorAll(n));if(!r.length)return null;var i=Br(r,function(a){return a.getAttribute(no.draggableId)===e});return!i||!Mc(i)?null:i}function _N(t){var e=se.useRef({}),n=se.useRef(null),r=se.useRef(null),i=se.useRef(!1),a=we(function(c,p){var g={id:c,focus:p};return e.current[c]=g,function(){var m=e.current,v=m[c];v!==g&&delete m[c]}},[]),o=we(function(c){var p=yN(t,c);p&&p!==document.activeElement&&p.focus()},[t]),s=we(function(c,p){n.current===c&&(n.current=p)},[]),l=we(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var c=n.current;c&&o(c)}))},[o]),u=we(function(c){n.current=null;var p=document.activeElement;p&&p.getAttribute(no.draggableId)===c&&(n.current=c)},[]);Tn(function(){return i.current=!0,function(){i.current=!1;var c=r.current;c&&cancelAnimationFrame(c)}},[]);var f=Ye(function(){return{register:a,tryRecordFocus:u,tryRestoreFocusRecorded:l,tryShiftRecord:s}},[a,u,l,s]);return f}function SN(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var p=e.indexOf(d);p!==-1&&e.splice(p,1)}}function r(d){e.length&&e.forEach(function(c){return c(d)})}function i(d){return t.draggables[d]||null}function a(d){var c=i(d);return c||de(),c}var o={register:function(c){t.draggables[c.descriptor.id]=c,r({type:"ADDITION",value:c})},update:function(c,p){var g=t.draggables[p.descriptor.id];g&&g.uniqueId===c.uniqueId&&(delete t.draggables[p.descriptor.id],t.draggables[c.descriptor.id]=c)},unregister:function(c){var p=c.descriptor.id,g=i(p);g&&c.uniqueId===g.uniqueId&&(delete t.draggables[p],r({type:"REMOVAL",value:c}))},getById:a,findById:i,exists:function(c){return!!i(c)},getAllByType:function(c){return Pu(t.draggables).filter(function(p){return p.descriptor.type===c})}};function s(d){return t.droppables[d]||null}function l(d){var c=s(d);return c||de(),c}var u={register:function(c){t.droppables[c.descriptor.id]=c},unregister:function(c){var p=s(c.descriptor.id);p&&c.uniqueId===p.uniqueId&&delete t.droppables[c.descriptor.id]},getById:l,findById:s,exists:function(c){return!!s(c)},getAllByType:function(c){return Pu(t.droppables).filter(function(p){return p.descriptor.type===c})}};function f(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:u,subscribe:n,clean:f}}function bN(){var t=Ye(SN,[]);return se.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var Qh=Ke.createContext(null),Lu=function(){var t=document.body;return t||de(),t},fb={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},wN=function(e){return"rbd-announcement-"+e};function MN(t){var e=Ye(function(){return wN(t)},[t]),n=se.useRef(null);se.useEffect(function(){n.current&&de();var i=document.createElement("div");return n.current=i,i.id=e,i.setAttribute("aria-live","assertive"),i.setAttribute("role","log"),i.setAttribute("aria-atomic","true"),CS(i.style,fb),Lu().appendChild(i),function(){setTimeout(function(){var o=n.current;o||de(),Lu().removeChild(o),n.current=null})}},[e]);var r=we(function(i){var a=n.current;if(a){a.textContent=i;return}},[]);return r}var EN=function(e){return"rbd-lift-instruction-"+e};function CN(t,e){var n=Ye(function(){return EN(t)},[t]);return se.useEffect(function(){var i=document.createElement("div");return i.id=n,i.textContent=e,CS(i.style,fb),Lu().appendChild(i),function(){Lu().removeChild(i)}},[n,e]),n}var Ec=Ke.createContext(null);function pb(t){var e=se.useRef(t);return se.useEffect(function(){e.current=t}),e}function TN(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&de();var s={abandon:o};return t=s,s}function i(){t||de(),t=null}function a(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:a}}var DN=9,AN=13,Jh=27,hb=32,PN=33,RN=34,LN=35,IN=36,NN=37,kN=38,ON=39,FN=40,Rl,zN=(Rl={},Rl[AN]=!0,Rl[DN]=!0,Rl),mb=function(t){zN[t.keyCode]&&t.preventDefault()},Cc=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Br(e,function(r){return"on"+r in document});return n||t}(),gb=0,V0=5;function BN(t,e){return Math.abs(e.x-t.x)>=V0||Math.abs(e.y-t.y)>=V0}var W0={type:"IDLE"};function UN(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var s=o.button,l=o.clientX,u=o.clientY;if(s===gb){var f={x:l,y:u},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(f);return}d.type!=="PENDING"&&de();var c=d.point;if(BN(c,f)){o.preventDefault();var p=d.actions.fluidLift(f);i({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(o){var s=r();if(s.type!=="DRAGGING"){e();return}o.preventDefault(),s.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var s=r();if(s.type==="PENDING"){e();return}if(o.keyCode===Jh){o.preventDefault(),e();return}mb(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var s=r();if(s.type==="IDLE"&&de(),s.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:Cc,fn:e}]}function GN(t){var e=se.useRef(W0),n=se.useRef(ui),r=Ye(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===gb&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var c=t.findClosestDraggableId(d);if(c){var p=t.tryGetLock(c,o,{sourceEvent:d});if(p){d.preventDefault();var g={x:d.clientX,y:d.clientY};n.current(),u(p,g)}}}}}},[t]),i=Ye(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var c=t.findClosestDraggableId(d);if(c){var p=t.findOptionsForDraggable(c);p&&(p.shouldRespectForcePress||t.canGetLock(c)&&d.preventDefault())}}}}},[t]),a=we(function(){var d={passive:!1,capture:!0};n.current=Un(window,[i,r],d)},[i,r]),o=we(function(){var f=e.current;f.type!=="IDLE"&&(e.current=W0,n.current(),a())},[a]),s=we(function(){var f=e.current;o(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[o]),l=we(function(){var d={capture:!0,passive:!1},c=UN({cancel:s,completed:o,getPhase:function(){return e.current},setPhase:function(g){e.current=g}});n.current=Un(window,c,d)},[s,o]),u=we(function(d,c){e.current.type!=="IDLE"&&de(),e.current={type:"PENDING",point:c,actions:d},l()},[l]);Tn(function(){return a(),function(){n.current()}},[a])}var ma;function VN(){}var WN=(ma={},ma[RN]=!0,ma[PN]=!0,ma[IN]=!0,ma[LN]=!0,ma);function HN(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(a){if(a.keyCode===Jh){a.preventDefault(),n();return}if(a.keyCode===hb){a.preventDefault(),r();return}if(a.keyCode===FN){a.preventDefault(),t.moveDown();return}if(a.keyCode===kN){a.preventDefault(),t.moveUp();return}if(a.keyCode===ON){a.preventDefault(),t.moveRight();return}if(a.keyCode===NN){a.preventDefault(),t.moveLeft();return}if(WN[a.keyCode]){a.preventDefault();return}mb(a)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:Cc,fn:n}]}function jN(t){var e=se.useRef(VN),n=Ye(function(){return{eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==hb)return;var o=t.findClosestDraggableId(a);if(!o)return;var s=t.tryGetLock(o,f,{sourceEvent:a});if(!s)return;a.preventDefault();var l=!0,u=s.snapLift();e.current();function f(){l||de(),l=!1,e.current(),r()}e.current=Un(window,HN(u,f),{capture:!0,passive:!1})}}},[t]),r=we(function(){var a={passive:!1,capture:!0};e.current=Un(window,[n],a)},[n]);Tn(function(){return r(),function(){e.current()}},[r])}var sf={type:"IDLE"},$N=120,qN=.15;function XN(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===Jh&&i.preventDefault(),e()}},{eventName:Cc,fn:e}]}function YN(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(a){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var s=a.touches[0],l=s.clientX,u=s.clientY,f={x:l,y:u};a.preventDefault(),o.actions.move(f)}},{eventName:"touchend",fn:function(a){var o=r();if(o.type!=="DRAGGING"){e();return}a.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(a){if(r().type!=="DRAGGING"){e();return}a.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(a){var o=r();o.type==="IDLE"&&de();var s=a.touches[0];if(s){var l=s.force>=qN;if(l){var u=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){u&&e();return}if(u){if(o.hasMoved){a.preventDefault();return}e();return}a.preventDefault()}}}},{eventName:Cc,fn:e}]}function KN(t){var e=se.useRef(sf),n=se.useRef(ui),r=we(function(){return e.current},[]),i=we(function(p){e.current=p},[]),a=Ye(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var g=t.findClosestDraggableId(p);if(g){var h=t.tryGetLock(g,s,{sourceEvent:p});if(h){var m=p.touches[0],v=m.clientX,x=m.clientY,y={x:v,y:x};n.current(),d(h,y)}}}}}},[t]),o=we(function(){var p={capture:!0,passive:!1};n.current=Un(window,[a],p)},[a]),s=we(function(){var c=e.current;c.type!=="IDLE"&&(c.type==="PENDING"&&clearTimeout(c.longPressTimerId),i(sf),n.current(),o())},[o,i]),l=we(function(){var c=e.current;s(),c.type==="DRAGGING"&&c.actions.cancel({shouldBlockNextClick:!0}),c.type==="PENDING"&&c.actions.abort()},[s]),u=we(function(){var p={capture:!0,passive:!1},g={cancel:l,completed:s,getPhase:r},h=Un(window,YN(g),p),m=Un(window,XN(g),p);n.current=function(){h(),m()}},[l,r,s]),f=we(function(){var p=r();p.type!=="PENDING"&&de();var g=p.actions.fluidLift(p.point);i({type:"DRAGGING",actions:g,hasMoved:!1})},[r,i]),d=we(function(p,g){r().type!=="IDLE"&&de();var h=setTimeout(f,$N);i({type:"PENDING",point:g,actions:p,longPressTimerId:h}),u()},[u,r,i,f]);Tn(function(){return o(),function(){n.current();var g=r();g.type==="PENDING"&&(clearTimeout(g.longPressTimerId),i(sf))}},[r,o,i]),Tn(function(){var p=Un(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var ZN={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function vb(t,e){if(e==null)return!1;var n=!!ZN[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:vb(t,e.parentElement)}function QN(t,e){var n=e.target;return Mc(n)?vb(t,n):!1}var JN=function(t){return dr(t.getBoundingClientRect()).center};function ek(t){return t instanceof db(t).Element}var tk=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Br(e,function(r){return r in Element.prototype});return n||t}();function xb(t,e){return t==null?null:t[tk](e)?t:xb(t.parentElement,e)}function nk(t,e){return t.closest?t.closest(e):xb(t,e)}function rk(t){return"["+no.contextId+'="'+t+'"]'}function ik(t,e){var n=e.target;if(!ek(n))return null;var r=rk(t),i=nk(n,r);return!i||!Mc(i)?null:i}function ak(t,e){var n=ik(t,e);return n?n.getAttribute(no.draggableId):null}function ok(t,e){var n="["+Sp.contextId+'="'+t+'"]',r=RS(document.querySelectorAll(n)),i=Br(r,function(a){return a.getAttribute(Sp.id)===e});return!i||!Mc(i)?null:i}function sk(t){t.preventDefault()}function Ll(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function yb(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var a=r.draggable.findById(i);return!(!a||!a.options.isEnabled||!sb(n.getState(),i))}function lk(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,a=t.draggableId,o=t.forceSensorStop,s=t.sourceEvent,l=yb({lockAPI:e,store:r,registry:i,draggableId:a});if(!l)return null;var u=i.draggable.getById(a),f=ok(n,u.descriptor.id);if(!f||s&&!u.options.canDragInteractiveElements&&QN(f,s))return null;var d=e.claim(o||ui),c="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function g(){return e.isActive(d)}function h(M,D){Ll({expected:M,phase:c,isLockActive:g,shouldWarn:!0})&&r.dispatch(D())}var m=h.bind(this,"DRAGGING");function v(M){function D(){e.release(),c="COMPLETED"}c!=="PRE_DRAG"&&(D(),c!=="PRE_DRAG"&&de()),r.dispatch(iI(M.liftActionArgs)),c="DRAGGING";function S(E,P){if(P===void 0&&(P={shouldBlockNextClick:!1}),M.cleanup(),P.shouldBlockNextClick){var H=Un(window,[{eventName:"click",fn:sk,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(H)}D(),r.dispatch(eb({reason:E}))}return Le({isActive:function(){return Ll({expected:"DRAGGING",phase:c,isLockActive:g,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(P){return S("DROP",P)},cancel:function(P){return S("CANCEL",P)}},M.actions)}function x(M){var D=gs(function(E){m(function(){return QS({client:E})})}),S=v({liftActionArgs:{id:a,clientSelection:M,movementMode:"FLUID"},cleanup:function(){return D.cancel()},actions:{move:D}});return Le({},S,{move:D})}function y(){var M={moveUp:function(){return m(pI)},moveRight:function(){return m(mI)},moveDown:function(){return m(hI)},moveLeft:function(){return m(gI)}};return v({liftActionArgs:{id:a,clientSelection:JN(f),movementMode:"SNAP"},cleanup:ui,actions:M})}function _(){var M=Ll({expected:"PRE_DRAG",phase:c,isLockActive:g,shouldWarn:!0});M&&e.release()}var b={isActive:function(){return Ll({expected:"PRE_DRAG",phase:c,isLockActive:g,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:x,snapLift:y,abort:_};return b}var uk=[GN,jN,KN];function ck(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,a=t.enableDefaultSensors,o=[].concat(a?uk:[],i||[]),s=se.useState(function(){return TN()})[0],l=we(function(x,y){x.isDragging&&!y.isDragging&&s.tryAbandon()},[s]);Tn(function(){var x=n.getState(),y=n.subscribe(function(){var _=n.getState();l(x,_),x=_});return y},[s,n,l]),Tn(function(){return s.tryAbandon},[s.tryAbandon]);for(var u=we(function(v){return yb({lockAPI:s,registry:r,store:n,draggableId:v})},[s,r,n]),f=we(function(v,x,y){return lk({lockAPI:s,registry:r,contextId:e,store:n,draggableId:v,forceSensorStop:x,sourceEvent:y&&y.sourceEvent?y.sourceEvent:null})},[e,s,r,n]),d=we(function(v){return ak(e,v)},[e]),c=we(function(v){var x=r.draggable.findById(v);return x?x.options:null},[r.draggable]),p=we(s.tryAbandon,[s]),g=we(s.isClaimed,[s]),h=Ye(function(){return{canGetLock:u,tryGetLock:f,findClosestDraggableId:d,findOptionsForDraggable:c,tryReleaseLock:p,isLockClaimed:g}},[u,f,d,c,p,g]),m=0;m<o.length;m++)o[m](h)}var dk=function(e){return{onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Ao(t){return t.current||de(),t.current}function fk(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,a=t.liftInstruction,o=se.useRef(null),s=pb(t),l=we(function(){return dk(s.current)},[s]),u=MN(e),f=CN(e,a),d=xN(e,i),c=we(function(E){Ao(o).dispatch(E)},[]),p=Ye(function(){return f0({publishWhileDragging:oI,updateDroppableScroll:lI,updateDroppableIsEnabled:uI,updateDroppableIsCombineEnabled:cI,collectionStarting:sI},c)},[c]),g=bN(),h=Ye(function(){return KI(g,p)},[g,p]),m=Ye(function(){return pN(Le({scrollWindow:ZI,scrollDroppable:h.scrollDroppable},f0({move:QS},c)))},[h.scrollDroppable,c]),v=_N(e),x=Ye(function(){return $I({announce:u,autoScroller:m,dimensionMarshal:h,focusMarshal:v,getResponders:l,styleMarshal:d})},[u,m,h,v,l,d]);o.current=x;var y=we(function(){var E=Ao(o),P=E.getState();P.phase!=="IDLE"&&E.dispatch(JS())},[]),_=we(function(){var E=Ao(o).getState();return E.isDragging||E.phase==="DROP_ANIMATING"},[]),b=Ye(function(){return{isDragging:_,tryAbort:y}},[_,y]);n(b);var M=we(function(E){return sb(Ao(o).getState(),E)},[]),D=we(function(){return Pi(Ao(o).getState())},[]),S=Ye(function(){return{marshal:h,focus:v,contextId:e,canLift:M,isMovementAllowed:D,liftInstructionId:f,registry:g}},[e,h,v,M,D,f,g]);return ck({contextId:e,store:x,registry:g,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),se.useEffect(function(){return y},[y]),Ke.createElement(Ec.Provider,{value:S},Ke.createElement(BP,{context:Qh,store:x},t.children))}var pk=0;function hk(t){var e=Ye(function(){return""+pk++},[]),n=t.liftInstruction||Yl.liftInstruction;return Ke.createElement(WR,null,function(r){return Ke.createElement(fk,{nonce:t.nonce,contextId:e,setCallbacks:r,liftInstruction:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var _b=function(e){return function(n){return e===n}},mk=_b("scroll"),gk=_b("auto"),H0=function(e,n){return n(e.overflowX)||n(e.overflowY)},vk=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return H0(r,mk)||H0(r,gk)},xk=function(){return!1},yk=function t(e){return e==null?null:e===document.body?xk()?e:null:e===document.documentElement?null:vk(e)?e:t(e.parentElement)},bp=function(t){return{x:t.scrollLeft,y:t.scrollTop}},_k=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},Sk=function(t){var e=yk(t),n=_k(t);return{closestScrollable:e,isFixedOnPage:n}},bk=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,a=t.direction,o=t.client,s=t.page,l=t.closest,u=function(){if(!l)return null;var p=l.scrollSize,g=l.client,h=ib({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:g.paddingBox.height,width:g.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:g,scrollSize:p,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:h,diff:{value:Pt,displacement:Pt}}}}(),f=a==="vertical"?bc:FS,d=eo({page:s,withPlaceholder:null,axis:f,frame:u}),c={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:f,isEnabled:n,client:o,page:s,frame:u,subject:d};return c},wk=function(e,n){var r=MS(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,a=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,s=a+n.scrollWidth,l={top:i,right:s,bottom:o,left:a},u=Oh(l,r.border),f=Fh({borderBox:u,margin:r.margin,border:r.border,padding:r.padding});return f},Mk=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,a=t.direction,o=t.isDropDisabled,s=t.isCombineEnabled,l=t.shouldClipSubject,u=r.closestScrollable,f=wk(e,u),d=Cu(f,i),c=function(){if(!u)return null;var g=MS(u),h={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:g,page:Cu(g,i),scroll:bp(u),scrollSize:h,shouldClipSubject:l}}(),p=bk({descriptor:n,isEnabled:!o,isCombineEnabled:s,isFixedOnPage:r.isFixedOnPage,direction:a,client:f,page:d,closest:c});return p},Ek={passive:!1},Ck={passive:!0},j0=function(t){return t.shouldPublishImmediately?Ek:Ck};function Iu(t){var e=se.useContext(t);return e||de(),e}var Tk=0;function Sb(t){var e=se.useRef(Tk++);return t+"::"+e.current}var Il=function(e){return e&&e.env.closestScrollable||null};function Dk(t){var e=se.useRef(null),n=Iu(Ec),r=Sb("droppable"),i=n.registry,a=n.marshal,o=pb(t),s=Ye(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=se.useRef(s),u=Ye(function(){return At(function(_,b){e.current||de();var M={x:_,y:b};a.updateDroppableScroll(s.id,M)})},[s.id,a]),f=we(function(){var _=e.current;return!_||!_.env.closestScrollable?Pt:bp(_.env.closestScrollable)},[]),d=we(function(){var _=f();u(_.x,_.y)},[f,u]),c=Ye(function(){return gs(d)},[d]),p=we(function(){var _=e.current,b=Il(_);_&&b||de();var M=_.scrollOptions;if(M.shouldPublishImmediately){d();return}c()},[c,d]),g=we(function(_,b){e.current&&de();var M=o.current,D=M.getDroppableRef();D||de();var S=Sk(D),E={ref:D,descriptor:s,env:S,scrollOptions:b};e.current=E;var P=Mk({ref:D,descriptor:s,env:S,windowScroll:_,direction:M.direction,isDropDisabled:M.isDropDisabled,isCombineEnabled:M.isCombineEnabled,shouldClipSubject:!M.ignoreContainerClipping}),H=S.closestScrollable;return H&&(H.setAttribute(U0.contextId,n.contextId),H.addEventListener("scroll",p,j0(E.scrollOptions))),P},[n.contextId,s,p,o]),h=we(function(){var _=e.current,b=Il(_);return _&&b||de(),bp(b)},[]),m=we(function(){var _=e.current;_||de();var b=Il(_);e.current=null,b&&(c.cancel(),b.removeAttribute(U0.contextId),b.removeEventListener("scroll",p,j0(_.scrollOptions)))},[p,c]),v=we(function(_){var b=e.current;b||de();var M=Il(b);M||de(),M.scrollTop+=_.y,M.scrollLeft+=_.x},[]),x=Ye(function(){return{getDimensionAndWatchScroll:g,getScrollWhileDragging:h,dragStopped:m,scroll:v}},[m,g,h,v]),y=Ye(function(){return{uniqueId:r,descriptor:s,callbacks:x}},[x,s,r]);Tn(function(){return l.current=y.descriptor,i.droppable.register(y),function(){e.current&&m(),i.droppable.unregister(y)}},[x,s,m,y,a,i.droppable]),Tn(function(){e.current&&a.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),Tn(function(){e.current&&a.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function lf(){}var $0={width:0,height:0,margin:YR},Ak=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?$0:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},Pk=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,a=Ak({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:a.width,height:a.height,marginTop:a.margin.top,marginRight:a.margin.right,marginBottom:a.margin.bottom,marginLeft:a.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?qo.placeholder:null}};function Rk(t){var e=se.useRef(null),n=we(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,a=t.onClose,o=t.contextId,s=se.useState(t.animate==="open"),l=s[0],u=s[1];se.useEffect(function(){return l?r!=="open"?(n(),u(!1),lf):e.current?lf:(e.current=setTimeout(function(){e.current=null,u(!1)}),n):lf},[r,l,n]);var f=we(function(c){c.propertyName==="height"&&(i(),r==="close"&&a())},[r,a,i]),d=Pk({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return Ke.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:f,ref:t.innerRef})}var Lk=Ke.memo(Rk),em=Ke.createContext(null),Ik=function(t){fS(e,t);function e(){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return r=t.call.apply(t,[this].concat(a))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,a){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:a.isVisible?{isVisible:!0,data:a.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(Ke.PureComponent),q0={dragging:5e3,dropAnimating:4500},Nk=function(e,n){return n?qo.drop(n.duration):e?qo.snap:qo.fluid},kk=function(e,n){return e?n?ys.opacity.drop:ys.opacity.combining:null},Ok=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Fk(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,a=t.dropping,o=!!i,s=Ok(t),l=!!a,u=l?yp.drop(r,o):yp.moveTo(r),f={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Nk(s,a),transform:u,opacity:kk(o,l),zIndex:l?q0.dropAnimating:q0.dragging,pointerEvents:"none"};return f}function zk(t){return{transform:yp.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function Bk(t){return t.type==="DRAGGING"?Fk(t):zk(t)}function Uk(t,e,n){n===void 0&&(n=Pt);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),a=wS(i,r),o=Cu(a,n),s={client:a,tagName:e.tagName.toLowerCase(),display:r.display},l={x:a.marginBox.width,y:a.marginBox.height},u={descriptor:t,placeholder:s,displaceBy:l,client:a,page:o};return u}function Gk(t){var e=Sb("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,a=t.canDragInteractiveElements,o=t.shouldRespectForcePress,s=t.isEnabled,l=Ye(function(){return{canDragInteractiveElements:a,shouldRespectForcePress:o,isEnabled:s}},[a,s,o]),u=we(function(p){var g=i();return g||de(),Uk(n,g,p)},[n,i]),f=Ye(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:u}},[n,u,l,e]),d=se.useRef(f),c=se.useRef(!0);Tn(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),Tn(function(){if(c.current){c.current=!1;return}var p=d.current;d.current=f,r.draggable.update(f,p)},[f,r.draggable])}function Vk(t){t.preventDefault()}function Wk(t){var e=se.useRef(null),n=we(function(E){e.current=E},[]),r=we(function(){return e.current},[]),i=Iu(Ec),a=i.contextId,o=i.liftInstructionId,s=i.registry,l=Iu(em),u=l.type,f=l.droppableId,d=Ye(function(){return{id:t.draggableId,index:t.index,type:u,droppableId:f}},[t.draggableId,t.index,u,f]),c=t.children,p=t.draggableId,g=t.isEnabled,h=t.shouldRespectForcePress,m=t.canDragInteractiveElements,v=t.isClone,x=t.mapped,y=t.dropAnimationFinished;if(!v){var _=Ye(function(){return{descriptor:d,registry:s,getDraggableRef:r,canDragInteractiveElements:m,shouldRespectForcePress:h,isEnabled:g}},[d,s,r,m,h,g]);Gk(_)}var b=Ye(function(){return g?{tabIndex:0,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":a,"aria-labelledby":o,draggable:!1,onDragStart:Vk}:null},[a,p,g,o]),M=we(function(E){x.type==="DRAGGING"&&x.dropping&&E.propertyName==="transform"&&y()},[y,x]),D=Ye(function(){var E=Bk(x),P=x.type==="DRAGGING"&&x.dropping?M:null,H={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":a,"data-rbd-draggable-id":p,style:E,onTransitionEnd:P},dragHandleProps:b};return H},[a,b,p,x,M,n]),S=Ye(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return c(D,x.snapshot,S)}var bb=function(t,e){return t===e},wb=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},Hk=function(e){return e.combine?e.combine.draggableId:null},jk=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function $k(){var t=At(function(i,a){return{x:i,y:a}}),e=At(function(i,a,o,s,l){return{isDragging:!0,isClone:a,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:s,combineTargetFor:null}}),n=At(function(i,a,o,s,l,u,f){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:u,mode:a,offset:i,dimension:o,forceShouldAnimate:f,snapshot:e(a,s,l,u,null)}}}),r=function(a,o){if(a.isDragging){if(a.critical.draggable.id!==o.draggableId)return null;var s=a.current.client.offset,l=a.dimensions.draggables[o.draggableId],u=Cn(a.impact),f=jk(a.impact),d=a.forceShouldAnimate;return n(t(s.x,s.y),a.movementMode,l,o.isClone,u,f,d)}if(a.phase==="DROP_ANIMATING"){var c=a.completed;if(c.result.draggableId!==o.draggableId)return null;var p=o.isClone,g=a.dimensions.draggables[o.draggableId],h=c.result,m=h.mode,v=wb(h),x=Hk(h),y=a.dropDuration,_={duration:y,curve:$h.drop,moveTo:a.newHomeClientOffset,opacity:x?ys.opacity.drop:null,scale:x?ys.scale.drop:null};return{mapped:{type:"DRAGGING",offset:a.newHomeClientOffset,dimension:g,dropping:_,draggingOver:v,combineWith:x,mode:m,forceShouldAnimate:null,snapshot:e(m,p,v,x,_)}}}return null};return r}function Mb(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var qk={mapped:{type:"SECONDARY",offset:Pt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:Mb(null)}};function Xk(){var t=At(function(o,s){return{x:o,y:s}}),e=At(Mb),n=At(function(o,s,l){return s===void 0&&(s=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:s,shouldAnimateDisplacement:l,snapshot:e(s)}}}),r=function(s){return s?n(Pt,s,!0):null},i=function(s,l,u,f){var d=u.displaced.visible[s],c=!!(f.inVirtualList&&f.effected[s]),p=_c(u),g=p&&p.draggableId===s?l:null;if(!d){if(!c)return r(g);if(u.displaced.invisible[s])return null;var h=lo(f.displacedBy.point),m=t(h.x,h.y);return n(m,g,!0)}if(c)return r(g);var v=u.displacedBy.point,x=t(v.x,v.y);return n(x,g,d.shouldAnimate)},a=function(s,l){if(s.isDragging)return s.critical.draggable.id===l.draggableId?null:i(l.draggableId,s.critical.draggable.id,s.impact,s.afterCritical);if(s.phase==="DROP_ANIMATING"){var u=s.completed;return u.result.draggableId===l.draggableId?null:i(l.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return a}var Yk=function(){var e=$k(),n=Xk(),r=function(a,o){return e(a,o)||n(a,o)||qk};return r},Kk={dropAnimationFinished:tb},Zk=bS(Yk,Kk,null,{context:Qh,pure:!0,areStatePropsEqual:bb})(Wk);function Eb(t){var e=Iu(em),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:Ke.createElement(Zk,t)}function Qk(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return Ke.createElement(Eb,Le({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function Jk(t){var e=se.useContext(Ec);e||de();var n=e.contextId,r=e.isMovementAllowed,i=se.useRef(null),a=se.useRef(null),o=t.children,s=t.droppableId,l=t.type,u=t.mode,f=t.direction,d=t.ignoreContainerClipping,c=t.isDropDisabled,p=t.isCombineEnabled,g=t.snapshot,h=t.useClone,m=t.updateViewportMaxScroll,v=t.getContainerForClone,x=we(function(){return i.current},[]),y=we(function(H){i.current=H},[]);we(function(){return a.current},[]);var _=we(function(H){a.current=H},[]),b=we(function(){r()&&m({maxScroll:ob()})},[r,m]);Dk({droppableId:s,type:l,mode:u,direction:f,isDropDisabled:c,isCombineEnabled:p,ignoreContainerClipping:d,getDroppableRef:x});var M=Ke.createElement(Ik,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(H){var Y=H.onClose,F=H.data,N=H.animate;return Ke.createElement(Lk,{placeholder:F,onClose:Y,innerRef:_,animate:N,contextId:n,onTransitionEnd:b})}),D=Ye(function(){return{innerRef:y,placeholder:M,droppableProps:{"data-rbd-droppable-id":s,"data-rbd-droppable-context-id":n}}},[n,s,M,y]),S=h?h.dragging.draggableId:null,E=Ye(function(){return{droppableId:s,type:l,isUsingCloneFor:S}},[s,S,l]);function P(){if(!h)return null;var H=h.dragging,Y=h.render,F=Ke.createElement(Eb,{draggableId:H.draggableId,index:H.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(N,$){return Y(N,$,H)});return nM.createPortal(F,v())}return Ke.createElement(em.Provider,{value:E},o(D,g),P())}var uf=function(e,n){return e===n.droppable.type},X0=function(e,n){return n.draggables[e.draggable.id]},eO=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=Le({},e,{shouldAnimatePlaceholder:!1}),r=At(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=At(function(o,s,l,u,f,d){var c=f.descriptor.id,p=f.descriptor.droppableId===o;if(p){var g=d?{render:d,dragging:r(f.descriptor)}:null,h={isDraggingOver:l,draggingOverWith:l?c:null,draggingFromThisWith:c,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!1,snapshot:h,useClone:g}}if(!s)return n;if(!u)return e;var m={isDraggingOver:l,draggingOverWith:c,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!0,snapshot:m,useClone:null}}),a=function(s,l){var u=l.droppableId,f=l.type,d=!l.isDropDisabled,c=l.renderClone;if(s.isDragging){var p=s.critical;if(!uf(f,p))return n;var g=X0(p,s.dimensions),h=Cn(s.impact)===u;return i(u,d,h,h,g,c)}if(s.phase==="DROP_ANIMATING"){var m=s.completed;if(!uf(f,m.critical))return n;var v=X0(m.critical,s.dimensions);return i(u,d,wb(m.result)===u,Cn(m.impact)===u,v,c)}if(s.phase==="IDLE"&&s.completed&&!s.shouldFlush){var x=s.completed;if(!uf(f,x.critical))return n;var y=Cn(x.impact)===u,_=!!(x.impact.at&&x.impact.at.type==="COMBINE"),b=x.critical.droppable.id===u;return y?_?e:n:b?e:n}return n};return a},tO={updateViewportMaxScroll:fI};function nO(){return document.body||de(),document.body}var rO={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:nO},Cb=bS(eO,tO,null,{context:Qh,pure:!0,areStatePropsEqual:bb})(Jk);Cb.defaultProps=rO;le.div`
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
`;le.div`
  padding: 12px 16px;
  border-bottom: 1px solid #3a3a3a;
  background: #1f1f1f;
`;le.div`
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
`;le.div`
  font-size: 12px;
  color: #a0a0a0;
  display: flex;
  align-items: center;
  gap: 8px;
`;le.div`
  padding: 16px;
`;le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;le.span`
  font-size: 12px;
  color: #a0a0a0;
  font-weight: 500;
`;le.span`
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
`;le.div`
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`;le.span`
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
  color: white;
  background: ${t=>{switch(t.status){case"pending":return"#667eea";case"cut":return"#f59e0b";case"ready":return"#10b981";case"shipped":return"#8b5cf6";default:return"#6b7280"}}};
`;le.div`
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
`;le.div`
  height: 1px;
  background: #3a3a3a;
  margin: 8px 0;
`;le.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;le.div`
  background: #2a2a2a;
  border-bottom: 1px solid #3a3a3a;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;le.div`
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
`;le.div`
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
`;le.button`
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
`;le.div`
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
`;le.div`
  background: #2a2a2a;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #3a3a3a;
`;le.button`
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
`;le.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  overflow-x: auto;
  min-height: calc(100vh - 200px);
`;le.div`
  background: #2a2a2a;
  border-radius: 12px;
  min-width: 320px;
  max-width: 320px;
  border: 1px solid #3a3a3a;
  display: flex;
  flex-direction: column;
`;le.div`
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
`;le.div`
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;le.div`
  padding: 40px 20px;
  text-align: center;
  color: #a0a0a0;
  font-style: italic;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;const iO=({orders:t})=>{const[e]=se.useState([{id:"product_image",label:"Image",width:80,render:a=>{var s;const o=(s=a.product)==null?void 0:s.image_data;if(o)try{const l=`data:image/jpeg;base64,${o}`;return U.jsx(dO,{children:U.jsx("img",{src:l,alt:"Ürün"})})}catch(l){console.error("Resim dönüştürme hatası:",l)}return U.jsx(fO,{children:"🖼️"})}},{id:"buyer",label:"Buyer",width:150,render:a=>{var s;const o=((s=a.customer)==null?void 0:s.name)||"Unknown";return U.jsx("span",{children:o})}},{id:"cut",label:"Cut",width:80,render:a=>{var o;return U.jsx(Nl,{checked:((o=a.fulfillment)==null?void 0:o.cut)||!1,onChange:s=>n(a.transaction_id,"cut",s.target.checked)})}},{id:"ready",label:"Ready",width:80,render:a=>{var o;return U.jsx(Nl,{checked:((o=a.fulfillment)==null?void 0:o.ready)||!1,onChange:s=>n(a.transaction_id,"ready",s.target.checked)})}},{id:"shipped",label:"Shipped",width:80,render:a=>{var o;return U.jsx(Nl,{checked:((o=a.fulfillment)==null?void 0:o.shipped)||!1,onChange:s=>n(a.transaction_id,"shipped",s.target.checked)})}},{id:"material",label:"Material",width:120,render:a=>{var o;return((o=a.product)==null?void 0:o.material_size)||""}},{id:"size",label:"Size",width:80,render:a=>{var l;const s=(((l=a.product)==null?void 0:l.material_size)||"").match(/(\d+)mm/);return s?s[1]+"mm":""}},{id:"product_name",label:"Product Name",width:200,render:a=>{var o;return((o=a.product)==null?void 0:o.name)||""}},{id:"chain_length",label:"Chain Length",width:120,render:a=>{var o;return((o=a.product)==null?void 0:o.chain_length)||""}},{id:"personalization",label:"Personalization",width:150,render:a=>{var o;return((o=a.product)==null?void 0:o.personalization)||""}},{id:"quantity",label:"Quantity",width:80,render:a=>{var o;return((o=a.product)==null?void 0:o.quantity)||1}},{id:"shop_name",label:"Shop Name",width:120,render:a=>{var o;return((o=a.shop)==null?void 0:o.name)||""}},{id:"buyer_note",label:"Buyer Note",width:150,render:a=>{var o;return((o=a.customer)==null?void 0:o.note)||""}},{id:"total_price",label:"Total Price",width:100,render:a=>{var l,u;const o=((l=a.pricing)==null?void 0:l.item_price)||0;return`${((u=a.pricing)==null?void 0:u.currency)||"USD"} ${o.toFixed(2)}`}},{id:"discount",label:"Discount",width:100,render:a=>{var s;const o=((s=a.pricing)==null?void 0:s.discount)||0;return o>0?`-${o.toFixed(2)}`:""}},{id:"order_total",label:"Order Total",width:100,render:a=>{var l,u;const o=((l=a.pricing)==null?void 0:l.order_total)||0;return`${((u=a.pricing)==null?void 0:u.currency)||"USD"} ${o.toFixed(2)}`}},{id:"shipping_price",label:"Shipping Price",width:100,render:a=>{var l,u;const o=((l=a.pricing)==null?void 0:l.shipping_price)||0;return`${((u=a.pricing)==null?void 0:u.currency)||"USD"} ${o.toFixed(2)}`}},{id:"transaction_id",label:"Transaction ID",width:120,render:a=>a.transaction_id},{id:"address",label:"Address",width:200,render:a=>{var o;return((o=a.customer)==null?void 0:o.address)||""}},{id:"country",label:"Country",width:100,render:a=>{var o,s;return((s=(o=a.customer)==null?void 0:o.address_components)==null?void 0:s.country)||"Unknown"}},{id:"vat_collected",label:"VAT Collected",width:100,render:a=>{var o;return((o=a.vat)==null?void 0:o.vat_collected)||""}},{id:"currency",label:"Currency",width:80,render:a=>{var o;return((o=a.pricing)==null?void 0:o.currency)||"USD"}},{id:"vat_number",label:"VAT Number",width:120,render:a=>{var o;return((o=a.vat)==null?void 0:o.vat_id)||""}},{id:"ioss_number",label:"IOSS Number",width:120,render:a=>{var o;return((o=a.shop)==null?void 0:o.ioss_number)||""}},{id:"buyer_email",label:"Buyer Email",width:150,render:a=>{var o;return((o=a.customer)==null?void 0:o.email)||""}},{id:"important_note",label:"Important Note",width:150,render:a=>U.jsx(pO,{placeholder:"Not ekle...",value:a.important_note||"",onChange:o=>r(a.transaction_id,o.target.value)})},{id:"problem",label:"Problem",width:80,render:a=>U.jsx(Nl,{checked:a.problem||!1,onChange:o=>i(a.transaction_id,o.target.checked)})}]),n=async(a,o,s)=>{try{(await fetch(`/api/orders/${a}/fulfillment`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({[o]:s})})).ok&&window.location.reload()}catch(l){console.error("Status update error:",l)}},r=async(a,o)=>{try{(await fetch(`/api/orders/${a}/note`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({important_note:o})})).ok}catch(s){console.error("Note update error:",s)}},i=async(a,o)=>{try{(await fetch(`/api/orders/${a}/problem`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({problem:o})})).ok&&window.location.reload()}catch(s){console.error("Problem update error:",s)}};return U.jsx(aO,{children:U.jsx(oO,{children:U.jsxs(sO,{children:[U.jsx("thead",{children:U.jsx("tr",{children:e.map(a=>U.jsx(lO,{style:{width:a.width},children:a.label},a.id))})}),U.jsx("tbody",{children:t.map(a=>U.jsx(uO,{children:e.map(o=>U.jsx(cO,{children:o.render(a)},o.id))},a.transaction_id))})]})})})},aO=le.div`
  background: #000;
  min-height: 100vh;
  color: white;
  padding: 20px;
`,oO=le.div`
  overflow-x: auto;
  background: #000;
`,sO=le.table`
  width: 100%;
  border-collapse: collapse;
  background: #000;
  color: white;
`,lO=le.th`
  background: #000;
  color: white;
  padding: 12px 8px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #333;
  white-space: nowrap;
`,uO=le.tr`
  border-bottom: 1px solid #333;
  
  &:hover {
    background: #111;
  }
`,cO=le.td`
  padding: 12px 8px;
  font-size: 14px;
  border-bottom: 1px solid #333;
  white-space: nowrap;
`,dO=le.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,fO=le.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`,Nl=le.input.attrs({type:"checkbox"})`
  width: 18px;
  height: 18px;
  cursor: pointer;
`,pO=le.input`
  background: #333;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  width: 100%;
  
  &::placeholder {
    color: #888;
  }
`,hO=le.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,mO=le.div`
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
`,gO=le.div`
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
`,vO=le.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  min-width: 320px;
  max-width: 320px;
  height: fit-content;
  max-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
`,xO=le.div`
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
`,yO=le.div`
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
`,_O=le.div`
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
`;le.div`
  padding: 40px 20px;
  text-align: center;
  color: #a0a0a0;
  font-size: 14px;
  font-style: italic;
`;const SO=le.div`
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
`,bO=le.div`
  background: #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  border: 1px solid #3a3a3a;
`,cf=le.input`
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
`,wO=le.textarea`
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
`,MO=le.select`
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
`,EO=le.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`,df=le.button`
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
`,CO=()=>{const[t,e]=se.useState({todo:[{id:"1",title:"Untitled",description:"Click to edit this task",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""}],inProgress:[],review:[],done:[{id:"4",title:"Untitled",description:"Click to edit this task",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""}]}),[n,r]=se.useState(null),[i,a]=se.useState(!1),o={todo:{title:"📋 To do",color:"#667eea"},inProgress:{title:"⚡ In progress",color:"#8b5cf6"},review:{title:"👀 Review",color:"#f59e0b"},done:{title:"✅ Done",color:"#10b981"}},s=c=>{if(!c.destination)return;const{source:p,destination:g}=c,h=p.droppableId,m=g.droppableId,v=[...t[h]],x=h===m?v:[...t[m]],[y]=v.splice(p.index,1);x.splice(g.index,0,y),e({...t,[h]:v,[m]:x})},l=c=>{const p={id:Date.now().toString(),title:"New Task",description:"Task description",priority:"medium",assigned:"Unassigned",createdAt:new Date().toLocaleDateString(),endDate:""};e({...t,[c]:[...t[c],p]})},u=c=>{r({...c}),a(!0)},f=()=>{if(!n)return;const c={};Object.keys(t).forEach(p=>{c[p]=t[p].map(g=>g.id===n.id?n:g)}),e(c),a(!1),r(null)},d=()=>{if(!n)return;const c={};Object.keys(t).forEach(p=>{c[p]=t[p].filter(g=>g.id!==n.id)}),e(c),a(!1),r(null)};return U.jsxs(hO,{children:[U.jsxs(mO,{children:[U.jsx("h1",{children:"Tasks"}),U.jsx("p",{children:"Manage your tasks and projects"})]}),U.jsx(gO,{children:U.jsx(hk,{onDragEnd:s,children:Object.entries(o).map(([c,p])=>U.jsx(Cb,{droppableId:c,children:(g,h)=>U.jsxs(vO,{ref:g.innerRef,...g.droppableProps,style:{borderColor:h.isDraggingOver?p.color:"#3a3a3a",background:h.isDraggingOver?"#2f2f2f":"#2a2a2a"},children:[U.jsxs(xO,{children:[U.jsx("div",{className:"column-title",children:p.title}),U.jsx("div",{className:"column-count",children:t[c].length}),U.jsx("button",{className:"add-button",onClick:()=>l(c),children:"+ New"})]}),U.jsxs(yO,{children:[t[c].map((m,v)=>U.jsx(Qk,{draggableId:m.id,index:v,children:(x,y)=>U.jsx("div",{ref:x.innerRef,...x.draggableProps,...x.dragHandleProps,style:{...x.draggableProps.style,opacity:y.isDragging?.8:1},children:U.jsxs(_O,{onClick:()=>u(m),children:[U.jsxs("div",{className:"task-header",children:[U.jsx("div",{className:"task-title",children:m.title}),U.jsx("span",{className:`task-priority priority-${m.priority}`,children:m.priority})]}),U.jsx("div",{className:"task-description",children:m.description}),U.jsxs("div",{className:"task-meta",children:[U.jsxs("span",{children:["👤 ",m.assigned]}),U.jsxs("span",{children:["📅 ",m.createdAt]}),m.endDate&&U.jsxs("span",{children:["⏰ ",m.endDate]})]})]})})},m.id)),g.placeholder]})]})},c))})}),i&&U.jsx(SO,{onClick:()=>a(!1),children:U.jsxs(bO,{onClick:c=>c.stopPropagation(),children:[U.jsx("h3",{style:{marginBottom:"20px",color:"#ffffff"},children:"Edit Task"}),U.jsx(cf,{placeholder:"Task Title",value:(n==null?void 0:n.title)||"",onChange:c=>r({...n,title:c.target.value})}),U.jsx(wO,{placeholder:"Task Description",value:(n==null?void 0:n.description)||"",onChange:c=>r({...n,description:c.target.value})}),U.jsxs(MO,{value:(n==null?void 0:n.priority)||"medium",onChange:c=>r({...n,priority:c.target.value}),children:[U.jsx("option",{value:"low",children:"Low Priority"}),U.jsx("option",{value:"medium",children:"Medium Priority"}),U.jsx("option",{value:"high",children:"High Priority"})]}),U.jsx(cf,{placeholder:"Assigned To",value:(n==null?void 0:n.assigned)||"",onChange:c=>r({...n,assigned:c.target.value})}),U.jsx(cf,{type:"date",placeholder:"End Date",value:(n==null?void 0:n.endDate)||"",onChange:c=>r({...n,endDate:c.target.value})}),U.jsxs(EO,{children:[U.jsx(df,{className:"danger",onClick:d,children:"Delete"}),U.jsx(df,{className:"secondary",onClick:()=>a(!1),children:"Cancel"}),U.jsx(df,{className:"primary",onClick:f,children:"Save"})]})]})})]})},TO=le.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,DO=le.div`
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
`,AO=le.div`
  padding: 30px;
`,PO=le.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 20px;
  min-height: calc(100vh - 200px);
`,RO=le.div`
  background: #2a2a2a;
  padding: 15px;
  text-align: center;
  color: #a0a0a0;
  font-weight: 600;
  font-size: 14px;
`,LO=le.div`
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
`,IO=le.div`
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
`,NO=le.div`
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
`,Y0=le.button`
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
`,kO=()=>{const[t,e]=se.useState({}),[n,r]=se.useState(null),[i,a]=se.useState(!1),o=Array.from({length:30},(d,c)=>c+1),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d=>{r(d),a(!0)},u=()=>{n&&e(d=>({...d,[n]:document.getElementById("note-textarea").value})),a(!1),r(null)},f=()=>{a(!1),r(null)};return U.jsxs(TO,{children:[U.jsxs(DO,{children:[U.jsx("h1",{children:"Calendar"}),U.jsx("p",{children:"30-day calendar view with notes"})]}),U.jsx(AO,{children:U.jsxs(PO,{children:[s.map(d=>U.jsx(RO,{children:d},d)),o.map(d=>U.jsxs(LO,{onClick:()=>l(d),children:[U.jsx("div",{className:"day-number",children:d}),t[d]&&U.jsx("div",{className:"note",children:t[d]})]},d))]})}),i&&U.jsx(IO,{children:U.jsxs(NO,{children:[U.jsxs("h3",{children:["Add Note for Day ",n]}),U.jsx("textarea",{id:"note-textarea",placeholder:"Enter your note here...",defaultValue:t[n]||""}),U.jsxs("div",{className:"modal-actions",children:[U.jsx(Y0,{className:"secondary",onClick:f,children:"Cancel"}),U.jsx(Y0,{className:"primary",onClick:u,children:"Save Note"})]})]})})]})},OO=le.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 0;
  margin: 0;
`,FO=le.div`
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
`,zO=le.div`
  padding: 30px;
  height: calc(100vh - 100px);
`,BO=le.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
`,UO=le.div`
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
`,GO=le.div`
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
`,VO=le.div`
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
`,WO=le.div`
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
`,HO=le.div`
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
`,jO=le.div`
  padding: 20px;
  border-top: 1px solid #3a3a3a;
  display: flex;
  gap: 10px;
`,$O=le.input`
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
`,qO=le.button`
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
`,XO=()=>{const[t,e]=se.useState([{id:1,text:"Merhaba! Etsy siparişlerinizle ilgili yardıma ihtiyacınız var mı?",sender:"support",time:"10:30",own:!1},{id:2,text:"Evet, sipariş durumunu kontrol etmek istiyorum.",sender:"user",time:"10:32",own:!0}]),[n,r]=se.useState(""),i=()=>{if(n.trim()){const o={id:t.length+1,text:n,sender:"user",time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),own:!0};e([...t,o]),r(""),setTimeout(()=>{const s={id:t.length+2,text:"Sipariş durumunuzu kontrol ediyorum. Lütfen bekleyin...",sender:"support",time:new Date().toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),own:!1};e(l=>[...l,s])},1e3)}},a=o=>{o.key==="Enter"&&i()};return U.jsxs(OO,{children:[U.jsxs(FO,{children:[U.jsx("h1",{children:"Chat"}),U.jsx("p",{children:"Customer support and messaging"})]}),U.jsx(zO,{children:U.jsxs(BO,{children:[U.jsxs(UO,{children:[U.jsx("h3",{children:"Etsy Support"}),U.jsx("div",{className:"status",children:"🟢 Online"})]}),U.jsx(GO,{children:t.map(o=>U.jsxs(VO,{className:o.own?"own":"",children:[U.jsx(WO,{color:o.own?"#667eea":"#10b981",children:o.sender==="user"?"U":"S"}),U.jsxs(HO,{className:"message-content",children:[U.jsx("p",{className:"message-text",children:o.text}),U.jsx("div",{className:"message-time",children:o.time})]})]},o.id))}),U.jsxs(jO,{children:[U.jsx($O,{type:"text",placeholder:"Mesajınızı yazın...",value:n,onChange:o=>r(o.target.value),onKeyPress:a}),U.jsx(qO,{onClick:i,disabled:!n.trim(),children:"Gönder"})]})]})})]})},K0=le.div`
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
`,YO=le.div`
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
`;function KO(){const[t,e]=se.useState([]),[n,r]=se.useState(!0),[i,a]=se.useState("dashboard"),[o,s]=se.useState("kanban"),[l,u]=se.useState(!1);se.useEffect(()=>{(async()=>{try{const g=await(await fetch("/api/orders")).json();e(g)}catch(p){console.error("Error fetching orders:",p)}finally{r(!1)}})()},[]);const f=c=>{u(c)},d=()=>{switch(i){case"dashboard":return U.jsx(zv,{orders:t});case"orders":return U.jsx(iO,{orders:t});case"tasks":return U.jsx(CO,{});case"calendar":return U.jsx(kO,{});case"chat":return U.jsx(XO,{});default:return U.jsx(zv,{orders:t})}};return n?U.jsx(K0,{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"1.2rem"},children:"📊 Veriler yükleniyor..."}):U.jsxs(K0,{children:[U.jsx(gE,{activePage:i,onPageChange:a,onStateChange:f}),U.jsx(YO,{sidebarCollapsed:l,children:d()})]})}const ZO=document.getElementById("root"),QO=u_(ZO);QO.render(U.jsx(Ke.StrictMode,{children:U.jsx(KO,{})}));
