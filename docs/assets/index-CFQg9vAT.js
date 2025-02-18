var Xw=Object.defineProperty;var Zw=(r,e,n)=>e in r?Xw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var vl=(r,e,n)=>Zw(r,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function eE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fc={exports:{}},gs={},hc={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function tE(){if(Jp)return re;Jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=_&&S[_]||S["@@iterator"],typeof S=="function"?S:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,L={};function x(S,M,ne){this.props=S,this.context=M,this.refs=L,this.updater=ne||k}x.prototype.isReactComponent={},x.prototype.setState=function(S,M){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,M,"setState")},x.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function O(){}O.prototype=x.prototype;function B(S,M,ne){this.props=S,this.context=M,this.refs=L,this.updater=ne||k}var z=B.prototype=new O;z.constructor=B,R(z,x.prototype),z.isPureReactComponent=!0;var te=Array.isArray,he=Object.prototype.hasOwnProperty,ye={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Oe(S,M,ne){var se,ue={},ce=null,Ee=null;if(M!=null)for(se in M.ref!==void 0&&(Ee=M.ref),M.key!==void 0&&(ce=""+M.key),M)he.call(M,se)&&!ve.hasOwnProperty(se)&&(ue[se]=M[se]);var pe=arguments.length-2;if(pe===1)ue.children=ne;else if(1<pe){for(var Re=Array(pe),vt=0;vt<pe;vt++)Re[vt]=arguments[vt+2];ue.children=Re}if(S&&S.defaultProps)for(se in pe=S.defaultProps,pe)ue[se]===void 0&&(ue[se]=pe[se]);return{$$typeof:r,type:S,key:ce,ref:Ee,props:ue,_owner:ye.current}}function we(S,M){return{$$typeof:r,type:S.type,key:M,ref:S.ref,props:S.props,_owner:S._owner}}function Ue(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function $t(S){var M={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ne){return M[ne]})}var Gt=/\/+/g;function yt(S,M){return typeof S=="object"&&S!==null&&S.key!=null?$t(""+S.key):M.toString(36)}function At(S,M,ne,se,ue){var ce=typeof S;(ce==="undefined"||ce==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(ce){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,ue=ue(Ee),S=se===""?"."+yt(Ee,0):se,te(ue)?(ne="",S!=null&&(ne=S.replace(Gt,"$&/")+"/"),At(ue,M,ne,"",function(vt){return vt})):ue!=null&&(Ue(ue)&&(ue=we(ue,ne+(!ue.key||Ee&&Ee.key===ue.key?"":(""+ue.key).replace(Gt,"$&/")+"/")+S)),M.push(ue)),1;if(Ee=0,se=se===""?".":se+":",te(S))for(var pe=0;pe<S.length;pe++){ce=S[pe];var Re=se+yt(ce,pe);Ee+=At(ce,M,ne,Re,ue)}else if(Re=w(S),typeof Re=="function")for(S=Re.call(S),pe=0;!(ce=S.next()).done;)ce=ce.value,Re=se+yt(ce,pe++),Ee+=At(ce,M,ne,Re,ue);else if(ce==="object")throw M=String(S),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Kt(S,M,ne){if(S==null)return S;var se=[],ue=0;return At(S,se,"","",function(ce){return M.call(ne,ce,ue++)}),se}function at(S){if(S._status===-1){var M=S._result;M=M(),M.then(function(ne){(S._status===0||S._status===-1)&&(S._status=1,S._result=ne)},function(ne){(S._status===0||S._status===-1)&&(S._status=2,S._result=ne)}),S._status===-1&&(S._status=0,S._result=M)}if(S._status===1)return S._result.default;throw S._result}var De={current:null},W={transition:null},J={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:W,ReactCurrentOwner:ye};function $(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Kt,forEach:function(S,M,ne){Kt(S,function(){M.apply(this,arguments)},ne)},count:function(S){var M=0;return Kt(S,function(){M++}),M},toArray:function(S){return Kt(S,function(M){return M})||[]},only:function(S){if(!Ue(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=x,re.Fragment=n,re.Profiler=l,re.PureComponent=B,re.StrictMode=s,re.Suspense=p,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,re.act=$,re.cloneElement=function(S,M,ne){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var se=R({},S.props),ue=S.key,ce=S.ref,Ee=S._owner;if(M!=null){if(M.ref!==void 0&&(ce=M.ref,Ee=ye.current),M.key!==void 0&&(ue=""+M.key),S.type&&S.type.defaultProps)var pe=S.type.defaultProps;for(Re in M)he.call(M,Re)&&!ve.hasOwnProperty(Re)&&(se[Re]=M[Re]===void 0&&pe!==void 0?pe[Re]:M[Re])}var Re=arguments.length-2;if(Re===1)se.children=ne;else if(1<Re){pe=Array(Re);for(var vt=0;vt<Re;vt++)pe[vt]=arguments[vt+2];se.children=pe}return{$$typeof:r,type:S.type,key:ue,ref:ce,props:se,_owner:Ee}},re.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:a,_context:S},S.Consumer=S},re.createElement=Oe,re.createFactory=function(S){var M=Oe.bind(null,S);return M.type=S,M},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:h,render:S}},re.isValidElement=Ue,re.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:at}},re.memo=function(S,M){return{$$typeof:m,type:S,compare:M===void 0?null:M}},re.startTransition=function(S){var M=W.transition;W.transition={};try{S()}finally{W.transition=M}},re.unstable_act=$,re.useCallback=function(S,M){return De.current.useCallback(S,M)},re.useContext=function(S){return De.current.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S){return De.current.useDeferredValue(S)},re.useEffect=function(S,M){return De.current.useEffect(S,M)},re.useId=function(){return De.current.useId()},re.useImperativeHandle=function(S,M,ne){return De.current.useImperativeHandle(S,M,ne)},re.useInsertionEffect=function(S,M){return De.current.useInsertionEffect(S,M)},re.useLayoutEffect=function(S,M){return De.current.useLayoutEffect(S,M)},re.useMemo=function(S,M){return De.current.useMemo(S,M)},re.useReducer=function(S,M,ne){return De.current.useReducer(S,M,ne)},re.useRef=function(S){return De.current.useRef(S)},re.useState=function(S){return De.current.useState(S)},re.useSyncExternalStore=function(S,M,ne){return De.current.useSyncExternalStore(S,M,ne)},re.useTransition=function(){return De.current.useTransition()},re.version="18.3.1",re}var Xp;function rd(){return Xp||(Xp=1,hc.exports=tE()),hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function nE(){if(Zp)return gs;Zp=1;var r=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var y,_={},w=null,k=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(k=p.ref);for(y in p)s.call(p,y)&&!a.hasOwnProperty(y)&&(_[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)_[y]===void 0&&(_[y]=p[y]);return{$$typeof:e,type:h,key:w,ref:k,props:_,_owner:l.current}}return gs.Fragment=n,gs.jsx=c,gs.jsxs=c,gs}var em;function rE(){return em||(em=1,fc.exports=nE()),fc.exports}var D=rE(),N=rd();const Ig=eE(N);var wl={},pc={exports:{}},pt={},mc={exports:{}},gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function iE(){return tm||(tm=1,function(r){function e(W,J){var $=W.length;W.push(J);e:for(;0<$;){var S=$-1>>>1,M=W[S];if(0<l(M,J))W[S]=J,W[$]=M,$=S;else break e}}function n(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var J=W[0],$=W.pop();if($!==J){W[0]=$;e:for(var S=0,M=W.length,ne=M>>>1;S<ne;){var se=2*(S+1)-1,ue=W[se],ce=se+1,Ee=W[ce];if(0>l(ue,$))ce<M&&0>l(Ee,ue)?(W[S]=Ee,W[ce]=$,S=ce):(W[S]=ue,W[se]=$,S=se);else if(ce<M&&0>l(Ee,$))W[S]=Ee,W[ce]=$,S=ce;else break e}}return J}function l(W,J){var $=W.sortIndex-J.sortIndex;return $!==0?$:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],y=1,_=null,w=3,k=!1,R=!1,L=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(W){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=W)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(m)}}function te(W){if(L=!1,z(W),!R)if(n(p)!==null)R=!0,at(he);else{var J=n(m);J!==null&&De(te,J.startTime-W)}}function he(W,J){R=!1,L&&(L=!1,O(Oe),Oe=-1),k=!0;var $=w;try{for(z(J),_=n(p);_!==null&&(!(_.expirationTime>J)||W&&!$t());){var S=_.callback;if(typeof S=="function"){_.callback=null,w=_.priorityLevel;var M=S(_.expirationTime<=J);J=r.unstable_now(),typeof M=="function"?_.callback=M:_===n(p)&&s(p),z(J)}else s(p);_=n(p)}if(_!==null)var ne=!0;else{var se=n(m);se!==null&&De(te,se.startTime-J),ne=!1}return ne}finally{_=null,w=$,k=!1}}var ye=!1,ve=null,Oe=-1,we=5,Ue=-1;function $t(){return!(r.unstable_now()-Ue<we)}function Gt(){if(ve!==null){var W=r.unstable_now();Ue=W;var J=!0;try{J=ve(!0,W)}finally{J?yt():(ye=!1,ve=null)}}else ye=!1}var yt;if(typeof B=="function")yt=function(){B(Gt)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Kt=At.port2;At.port1.onmessage=Gt,yt=function(){Kt.postMessage(null)}}else yt=function(){x(Gt,0)};function at(W){ve=W,ye||(ye=!0,yt())}function De(W,J){Oe=x(function(){W(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){R||k||(R=!0,at(he))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(W){switch(w){case 1:case 2:case 3:var J=3;break;default:J=w}var $=w;w=J;try{return W()}finally{w=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var $=w;w=W;try{return J()}finally{w=$}},r.unstable_scheduleCallback=function(W,J,$){var S=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?S+$:S):$=S,W){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=$+M,W={id:y++,callback:J,priorityLevel:W,startTime:$,expirationTime:M,sortIndex:-1},$>S?(W.sortIndex=$,e(m,W),n(p)===null&&W===n(m)&&(L?(O(Oe),Oe=-1):L=!0,De(te,$-S))):(W.sortIndex=M,e(p,W),R||k||(R=!0,at(he))),W},r.unstable_shouldYield=$t,r.unstable_wrapCallback=function(W){var J=w;return function(){var $=w;w=J;try{return W.apply(this,arguments)}finally{w=$}}}}(gc)),gc}var nm;function sE(){return nm||(nm=1,mc.exports=iE()),mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function oE(){if(rm)return pt;rm=1;var r=rd(),e=sE();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(t){return p.call(_,t)?!0:p.call(y,t)?!1:m.test(t)?_[t]=!0:(y[t]=!0,!1)}function k(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,u){if(i===null||typeof i>"u"||k(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function L(t,i,o,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new L(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new L(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new L(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new L(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new L(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new L(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new L(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new L(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new L(t,5,!1,t.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function B(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(O,B);x[i]=new L(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(O,B);x[i]=new L(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(O,B);x[i]=new L(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new L(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new L(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,u)&&(o=null),u||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),ye=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Ue=Symbol.for("react.provider"),$t=Symbol.for("react.context"),Gt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),W=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,S;function M(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var ne=!1;function se(t,i){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(t,[],i)}else{try{i.call()}catch(P){u=P}t.call(i.prototype)}else{try{throw Error()}catch(P){u=P}t()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,v=f.length-1;1<=g&&0<=v&&d[g]!==f[v];)v--;for(;1<=g&&0<=v;g--,v--)if(d[g]!==f[v]){if(g!==1||v!==1)do if(g--,v--,0>v||d[g]!==f[v]){var E=`
`+d[g].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=g&&0<=v);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?M(t):""}function ue(t){switch(t.tag){case 5:return M(t.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ve:return"Fragment";case ye:return"Portal";case we:return"Profiler";case Oe:return"StrictMode";case yt:return"Suspense";case At:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $t:return(t.displayName||"Context")+".Consumer";case Ue:return(t._context.displayName||"Context")+".Provider";case Gt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kt:return i=t.displayName||null,i!==null?i:ce(t.type)||"Memo";case at:i=t._payload,t=t._init;try{return ce(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ao(t){t._valueTracker||(t._valueTracker=vt(t))}function nf(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Re(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function va(t,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function rf(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function sf(t,i){i=i.checked,i!=null&&z(t,"checked",i,!1)}function wa(t,i){sf(t,i);var o=pe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ea(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ea(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function of(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ea(t,i,o){(i!=="number"||uo(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ai=Array.isArray;function Fr(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function Ca(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lf(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ai(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:pe(o)}}function af(t,i){var o=pe(i.value),u=pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function uf(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function cf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?cf(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,df=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Oi(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(t){rv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Di[i]=Di[t]})});function ff(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Di.hasOwnProperty(t)&&Di[t]?(""+i).trim():i+"px"}function hf(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=ff(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var iv=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(t,i){if(i){if(iv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ta(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ka=null;function Ra(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pa=null,Ur=null,jr=null;function pf(t){if(t=ts(t)){if(typeof Pa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Lo(i),Pa(t.stateNode,t.type,i))}}function mf(t){Ur?jr?jr.push(t):jr=[t]:Ur=t}function gf(){if(Ur){var t=Ur,i=jr;if(jr=Ur=null,pf(t),i)for(t=0;t<i.length;t++)pf(i[t])}}function _f(t,i){return t(i)}function yf(){}var Na=!1;function vf(t,i,o){if(Na)return t(i,o);Na=!0;try{return _f(t,i,o)}finally{Na=!1,(Ur!==null||jr!==null)&&(yf(),gf())}}function Li(t,i){var o=t.stateNode;if(o===null)return null;var u=Lo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var xa=!1;if(h)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){xa=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{xa=!1}function sv(t,i,o,u,d,f,g,v,E){var P=Array.prototype.slice.call(arguments,3);try{i.apply(o,P)}catch(b){this.onError(b)}}var bi=!1,fo=null,ho=!1,Aa=null,ov={onError:function(t){bi=!0,fo=t}};function lv(t,i,o,u,d,f,g,v,E){bi=!1,fo=null,sv.apply(ov,arguments)}function av(t,i,o,u,d,f,g,v,E){if(lv.apply(this,arguments),bi){if(bi){var P=fo;bi=!1,fo=null}else throw Error(n(198));ho||(ho=!0,Aa=P)}}function ar(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function wf(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ef(t){if(ar(t)!==t)throw Error(n(188))}function uv(t){var i=t.alternate;if(!i){if(i=ar(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return Ef(d),t;if(f===u)return Ef(d),i;f=f.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=f;else{for(var g=!1,v=d.child;v;){if(v===o){g=!0,o=d,u=f;break}if(v===u){g=!0,u=d,o=f;break}v=v.sibling}if(!g){for(v=f.child;v;){if(v===o){g=!0,o=f,u=d;break}if(v===u){g=!0,u=f,o=d;break}v=v.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Cf(t){return t=uv(t),t!==null?Sf(t):null}function Sf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Sf(t);if(i!==null)return i;t=t.sibling}return null}var If=e.unstable_scheduleCallback,Tf=e.unstable_cancelCallback,cv=e.unstable_shouldYield,dv=e.unstable_requestPaint,be=e.unstable_now,fv=e.unstable_getCurrentPriorityLevel,Oa=e.unstable_ImmediatePriority,kf=e.unstable_UserBlockingPriority,po=e.unstable_NormalPriority,hv=e.unstable_LowPriority,Rf=e.unstable_IdlePriority,mo=null,qt=null;function pv(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(mo,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:_v,mv=Math.log,gv=Math.LN2;function _v(t){return t>>>=0,t===0?32:31-(mv(t)/gv|0)|0}var go=64,_o=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yo(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,f=t.pingedLanes,g=o&268435455;if(g!==0){var v=g&~d;v!==0?u=Fi(v):(f&=g,f!==0&&(u=Fi(f)))}else g=o&~d,g!==0?u=Fi(g):f!==0&&(u=Fi(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Ot(i),d=1<<o,u|=t[o],i&=~d;return u}function yv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes;0<f;){var g=31-Ot(f),v=1<<g,E=d[g];E===-1?(!(v&o)||v&u)&&(d[g]=yv(v,i)):E<=i&&(t.expiredLanes|=v),f&=~v}}function Da(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pf(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function La(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ui(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ot(i),t[i]=o}function wv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Ot(o),f=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~f}}function Ma(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Ot(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var me=0;function Nf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xf,ba,Af,Of,Df,Fa=!1,vo=[],Tn=null,kn=null,Rn=null,ji=new Map,zi=new Map,Pn=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,i){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(i.pointerId)}}function Wi(t,i,o,u,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ts(i),i!==null&&ba(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Cv(t,i,o,u,d){switch(i){case"focusin":return Tn=Wi(Tn,t,i,o,u,d),!0;case"dragenter":return kn=Wi(kn,t,i,o,u,d),!0;case"mouseover":return Rn=Wi(Rn,t,i,o,u,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,Wi(ji.get(f)||null,t,i,o,u,d)),!0;case"gotpointercapture":return f=d.pointerId,zi.set(f,Wi(zi.get(f)||null,t,i,o,u,d)),!0}return!1}function Mf(t){var i=ur(t.target);if(i!==null){var o=ar(i);if(o!==null){if(i=o.tag,i===13){if(i=wf(o),i!==null){t.blockedOn=i,Df(t.priority,function(){Af(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ja(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);ka=u,o.target.dispatchEvent(u),ka=null}else return i=ts(o),i!==null&&ba(i),t.blockedOn=o,!1;i.shift()}return!0}function bf(t,i,o){wo(t)&&o.delete(i)}function Sv(){Fa=!1,Tn!==null&&wo(Tn)&&(Tn=null),kn!==null&&wo(kn)&&(kn=null),Rn!==null&&wo(Rn)&&(Rn=null),ji.forEach(bf),zi.forEach(bf)}function Hi(t,i){t.blockedOn===i&&(t.blockedOn=null,Fa||(Fa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sv)))}function Bi(t){function i(d){return Hi(d,t)}if(0<vo.length){Hi(vo[0],t);for(var o=1;o<vo.length;o++){var u=vo[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Tn!==null&&Hi(Tn,t),kn!==null&&Hi(kn,t),Rn!==null&&Hi(Rn,t),ji.forEach(i),zi.forEach(i),o=0;o<Pn.length;o++)u=Pn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Pn.length&&(o=Pn[0],o.blockedOn===null);)Mf(o),o.blockedOn===null&&Pn.shift()}var zr=te.ReactCurrentBatchConfig,Eo=!0;function Iv(t,i,o,u){var d=me,f=zr.transition;zr.transition=null;try{me=1,Ua(t,i,o,u)}finally{me=d,zr.transition=f}}function Tv(t,i,o,u){var d=me,f=zr.transition;zr.transition=null;try{me=4,Ua(t,i,o,u)}finally{me=d,zr.transition=f}}function Ua(t,i,o,u){if(Eo){var d=ja(t,i,o,u);if(d===null)nu(t,i,u,Co,o),Lf(t,u);else if(Cv(d,t,i,o,u))u.stopPropagation();else if(Lf(t,u),i&4&&-1<Ev.indexOf(t)){for(;d!==null;){var f=ts(d);if(f!==null&&xf(f),f=ja(t,i,o,u),f===null&&nu(t,i,u,Co,o),f===d)break;d=f}d!==null&&u.stopPropagation()}else nu(t,i,u,null,o)}}var Co=null;function ja(t,i,o,u){if(Co=null,t=Ra(u),t=ur(t),t!==null)if(i=ar(t),i===null)t=null;else if(o=i.tag,o===13){if(t=wf(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Co=t,null}function Ff(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fv()){case Oa:return 1;case kf:return 4;case po:case hv:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var Nn=null,za=null,So=null;function Uf(){if(So)return So;var t,i=za,o=i.length,u,d="value"in Nn?Nn.value:Nn.textContent,f=d.length;for(t=0;t<o&&i[t]===d[t];t++);var g=o-t;for(u=1;u<=g&&i[o-u]===d[f-u];u++);return So=d.slice(t,1<u?1-u:void 0)}function Io(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function To(){return!0}function jf(){return!1}function wt(t){function i(o,u,d,f,g){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(f):f[v]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?To:jf,this.isPropagationStopped=jf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=wt(Wr),Vi=$({},Wr,{view:0,detail:0}),kv=wt(Vi),Ha,Ba,$i,ko=$({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(Ha=t.screenX-$i.screenX,Ba=t.screenY-$i.screenY):Ba=Ha=0,$i=t),Ha)},movementY:function(t){return"movementY"in t?t.movementY:Ba}}),zf=wt(ko),Rv=$({},ko,{dataTransfer:0}),Pv=wt(Rv),Nv=$({},Vi,{relatedTarget:0}),Va=wt(Nv),xv=$({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=wt(xv),Ov=$({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=wt(Ov),Lv=$({},Wr,{data:0}),Wf=wt(Lv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fv[t])?!!i[t]:!1}function $a(){return Uv}var jv=$({},Vi,{key:function(t){if(t.key){var i=Mv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=wt(jv),Wv=$({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=wt(Wv),Hv=$({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),Bv=wt(Hv),Vv=$({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=wt(Vv),Gv=$({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=wt(Gv),qv=[9,13,27,32],Ga=h&&"CompositionEvent"in window,Gi=null;h&&"documentMode"in document&&(Gi=document.documentMode);var Yv=h&&"TextEvent"in window&&!Gi,Bf=h&&(!Ga||Gi&&8<Gi&&11>=Gi),Vf=" ",$f=!1;function Gf(t,i){switch(t){case"keyup":return qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Qv(t,i){switch(t){case"compositionend":return Kf(i);case"keypress":return i.which!==32?null:($f=!0,Vf);case"textInput":return t=i.data,t===Vf&&$f?null:t;default:return null}}function Jv(t,i){if(Hr)return t==="compositionend"||!Ga&&Gf(t,i)?(t=Uf(),So=za=Nn=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Bf&&i.locale!=="ko"?null:i.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Xv[t.type]:i==="textarea"}function Yf(t,i,o,u){mf(u),i=Ao(i,"onChange"),0<i.length&&(o=new Wa("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Ki=null,qi=null;function Zv(t){hh(t,0)}function Ro(t){var i=Kr(t);if(nf(i))return t}function ew(t,i){if(t==="change")return i}var Qf=!1;if(h){var Ka;if(h){var qa="oninput"in document;if(!qa){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),qa=typeof Jf.oninput=="function"}Ka=qa}else Ka=!1;Qf=Ka&&(!document.documentMode||9<document.documentMode)}function Xf(){Ki&&(Ki.detachEvent("onpropertychange",Zf),qi=Ki=null)}function Zf(t){if(t.propertyName==="value"&&Ro(qi)){var i=[];Yf(i,qi,t,Ra(t)),vf(Zv,i)}}function tw(t,i,o){t==="focusin"?(Xf(),Ki=i,qi=o,Ki.attachEvent("onpropertychange",Zf)):t==="focusout"&&Xf()}function nw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ro(qi)}function rw(t,i){if(t==="click")return Ro(i)}function iw(t,i){if(t==="input"||t==="change")return Ro(i)}function sw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Dt=typeof Object.is=="function"?Object.is:sw;function Yi(t,i){if(Dt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!Dt(t[d],i[d]))return!1}return!0}function eh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function th(t,i){var o=eh(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=eh(o)}}function nh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var t=window,i=uo();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=uo(t.document)}return i}function Ya(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function ow(t){var i=rh(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nh(o.ownerDocument.documentElement,o)){if(u!==null&&Ya(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!t.extend&&f>u&&(d=u,u=f,f=d),d=th(o,f);var g=th(o,u);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),f>u?(t.addRange(i),t.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lw=h&&"documentMode"in document&&11>=document.documentMode,Br=null,Qa=null,Qi=null,Ja=!1;function ih(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ja||Br==null||Br!==uo(u)||(u=Br,"selectionStart"in u&&Ya(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qi&&Yi(Qi,u)||(Qi=u,u=Ao(Qa,"onSelect"),0<u.length&&(i=new Wa("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Br)))}function Po(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Vr={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Xa={},sh={};h&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function No(t){if(Xa[t])return Xa[t];if(!Vr[t])return t;var i=Vr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in sh)return Xa[t]=i[o];return t}var oh=No("animationend"),lh=No("animationiteration"),ah=No("animationstart"),uh=No("transitionend"),ch=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,i){ch.set(t,i),a(i,[t])}for(var Za=0;Za<dh.length;Za++){var eu=dh[Za],aw=eu.toLowerCase(),uw=eu[0].toUpperCase()+eu.slice(1);xn(aw,"on"+uw)}xn(oh,"onAnimationEnd"),xn(lh,"onAnimationIteration"),xn(ah,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(uh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function fh(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,av(u,i,void 0,t),t.currentTarget=null}function hh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var v=u[g],E=v.instance,P=v.currentTarget;if(v=v.listener,E!==f&&d.isPropagationStopped())break e;fh(d,v,P),f=E}else for(g=0;g<u.length;g++){if(v=u[g],E=v.instance,P=v.currentTarget,v=v.listener,E!==f&&d.isPropagationStopped())break e;fh(d,v,P),f=E}}}if(ho)throw t=Aa,ho=!1,Aa=null,t}function Ie(t,i){var o=i[au];o===void 0&&(o=i[au]=new Set);var u=t+"__bubble";o.has(u)||(ph(i,t,2,!1),o.add(u))}function tu(t,i,o){var u=0;i&&(u|=4),ph(o,t,u,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[xo]){t[xo]=!0,s.forEach(function(o){o!=="selectionchange"&&(cw.has(o)||tu(o,!1,t),tu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,tu("selectionchange",!1,i))}}function ph(t,i,o,u){switch(Ff(i)){case 1:var d=Iv;break;case 4:d=Tv;break;default:d=Ua}o=d.bind(null,i,o,t),d=void 0,!xa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function nu(t,i,o,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var v=u.stateNode.containerInfo;if(v===d||v.nodeType===8&&v.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;v!==null;){if(g=ur(v),g===null)return;if(E=g.tag,E===5||E===6){u=f=g;continue e}v=v.parentNode}}u=u.return}vf(function(){var P=f,b=Ra(o),F=[];e:{var A=ch.get(t);if(A!==void 0){var H=Wa,G=t;switch(t){case"keypress":if(Io(o)===0)break e;case"keydown":case"keyup":H=zv;break;case"focusin":G="focus",H=Va;break;case"focusout":G="blur",H=Va;break;case"beforeblur":case"afterblur":H=Va;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Bv;break;case oh:case lh:case ah:H=Av;break;case uh:H=$v;break;case"scroll":H=kv;break;case"wheel":H=Kv;break;case"copy":case"cut":case"paste":H=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Hf}var K=(i&4)!==0,Fe=!K&&t==="scroll",I=K?A!==null?A+"Capture":null:A;K=[];for(var C=P,T;C!==null;){T=C;var U=T.stateNode;if(T.tag===5&&U!==null&&(T=U,I!==null&&(U=Li(C,I),U!=null&&K.push(Zi(C,U,T)))),Fe)break;C=C.return}0<K.length&&(A=new H(A,G,null,o,b),F.push({event:A,listeners:K}))}}if(!(i&7)){e:{if(A=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",A&&o!==ka&&(G=o.relatedTarget||o.fromElement)&&(ur(G)||G[sn]))break e;if((H||A)&&(A=b.window===b?b:(A=b.ownerDocument)?A.defaultView||A.parentWindow:window,H?(G=o.relatedTarget||o.toElement,H=P,G=G?ur(G):null,G!==null&&(Fe=ar(G),G!==Fe||G.tag!==5&&G.tag!==6)&&(G=null)):(H=null,G=P),H!==G)){if(K=zf,U="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(K=Hf,U="onPointerLeave",I="onPointerEnter",C="pointer"),Fe=H==null?A:Kr(H),T=G==null?A:Kr(G),A=new K(U,C+"leave",H,o,b),A.target=Fe,A.relatedTarget=T,U=null,ur(b)===P&&(K=new K(I,C+"enter",G,o,b),K.target=T,K.relatedTarget=Fe,U=K),Fe=U,H&&G)t:{for(K=H,I=G,C=0,T=K;T;T=$r(T))C++;for(T=0,U=I;U;U=$r(U))T++;for(;0<C-T;)K=$r(K),C--;for(;0<T-C;)I=$r(I),T--;for(;C--;){if(K===I||I!==null&&K===I.alternate)break t;K=$r(K),I=$r(I)}K=null}else K=null;H!==null&&mh(F,A,H,K,!1),G!==null&&Fe!==null&&mh(F,Fe,G,K,!0)}}e:{if(A=P?Kr(P):window,H=A.nodeName&&A.nodeName.toLowerCase(),H==="select"||H==="input"&&A.type==="file")var q=ew;else if(qf(A))if(Qf)q=iw;else{q=nw;var Y=tw}else(H=A.nodeName)&&H.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(q=rw);if(q&&(q=q(t,P))){Yf(F,q,o,b);break e}Y&&Y(t,A,P),t==="focusout"&&(Y=A._wrapperState)&&Y.controlled&&A.type==="number"&&Ea(A,"number",A.value)}switch(Y=P?Kr(P):window,t){case"focusin":(qf(Y)||Y.contentEditable==="true")&&(Br=Y,Qa=P,Qi=null);break;case"focusout":Qi=Qa=Br=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,ih(F,o,b);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":ih(F,o,b)}var Q;if(Ga)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Hr?Gf(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Bf&&o.locale!=="ko"&&(Hr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Hr&&(Q=Uf()):(Nn=b,za="value"in Nn?Nn.value:Nn.textContent,Hr=!0)),Y=Ao(P,ee),0<Y.length&&(ee=new Wf(ee,t,null,o,b),F.push({event:ee,listeners:Y}),Q?ee.data=Q:(Q=Kf(o),Q!==null&&(ee.data=Q)))),(Q=Yv?Qv(t,o):Jv(t,o))&&(P=Ao(P,"onBeforeInput"),0<P.length&&(b=new Wf("onBeforeInput","beforeinput",null,o,b),F.push({event:b,listeners:P}),b.data=Q))}hh(F,i)})}function Zi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Ao(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Li(t,o),f!=null&&u.unshift(Zi(t,f,d)),f=Li(t,i),f!=null&&u.push(Zi(t,f,d))),t=t.return}return u}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,i,o,u,d){for(var f=i._reactName,g=[];o!==null&&o!==u;){var v=o,E=v.alternate,P=v.stateNode;if(E!==null&&E===u)break;v.tag===5&&P!==null&&(v=P,d?(E=Li(o,f),E!=null&&g.unshift(Zi(o,E,v))):d||(E=Li(o,f),E!=null&&g.push(Zi(o,E,v)))),o=o.return}g.length!==0&&t.push({event:i,listeners:g})}var dw=/\r\n?/g,fw=/\u0000|\uFFFD/g;function gh(t){return(typeof t=="string"?t:""+t).replace(dw,`
`).replace(fw,"")}function Oo(t,i,o){if(i=gh(i),gh(t)!==i&&o)throw Error(n(425))}function Do(){}var ru=null,iu=null;function su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,_h=typeof Promise=="function"?Promise:void 0,pw=typeof queueMicrotask=="function"?queueMicrotask:typeof _h<"u"?function(t){return _h.resolve(null).then(t).catch(mw)}:ou;function mw(t){setTimeout(function(){throw t})}function lu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),Bi(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Bi(i)}function An(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function yh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Gr,es="__reactProps$"+Gr,sn="__reactContainer$"+Gr,au="__reactEvents$"+Gr,gw="__reactListeners$"+Gr,_w="__reactHandles$"+Gr;function ur(t){var i=t[Yt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[sn]||o[Yt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=yh(t);t!==null;){if(o=t[Yt])return o;t=yh(t)}return i}t=o,o=t.parentNode}return null}function ts(t){return t=t[Yt]||t[sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Lo(t){return t[es]||null}var uu=[],qr=-1;function On(t){return{current:t}}function Te(t){0>qr||(t.current=uu[qr],uu[qr]=null,qr--)}function Ce(t,i){qr++,uu[qr]=t.current,t.current=i}var Dn={},Xe=On(Dn),ut=On(!1),cr=Dn;function Yr(t,i){var o=t.type.contextTypes;if(!o)return Dn;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=i[f];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ct(t){return t=t.childContextTypes,t!=null}function Mo(){Te(ut),Te(Xe)}function vh(t,i,o){if(Xe.current!==Dn)throw Error(n(168));Ce(Xe,i),Ce(ut,o)}function wh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return $({},o,u)}function bo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,cr=Xe.current,Ce(Xe,t),Ce(ut,ut.current),!0}function Eh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=wh(t,i,cr),u.__reactInternalMemoizedMergedChildContext=t,Te(ut),Te(Xe),Ce(Xe,t)):Te(ut),Ce(ut,o)}var on=null,Fo=!1,cu=!1;function Ch(t){on===null?on=[t]:on.push(t)}function yw(t){Fo=!0,Ch(t)}function Ln(){if(!cu&&on!==null){cu=!0;var t=0,i=me;try{var o=on;for(me=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}on=null,Fo=!1}catch(d){throw on!==null&&(on=on.slice(t+1)),If(Oa,Ln),d}finally{me=i,cu=!1}}return null}var Qr=[],Jr=0,Uo=null,jo=0,It=[],Tt=0,dr=null,ln=1,an="";function fr(t,i){Qr[Jr++]=jo,Qr[Jr++]=Uo,Uo=t,jo=i}function Sh(t,i,o){It[Tt++]=ln,It[Tt++]=an,It[Tt++]=dr,dr=t;var u=ln;t=an;var d=32-Ot(u)-1;u&=~(1<<d),o+=1;var f=32-Ot(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,ln=1<<32-Ot(i)+d|o<<d|u,an=f+t}else ln=1<<f|o<<d|u,an=t}function du(t){t.return!==null&&(fr(t,1),Sh(t,1,0))}function fu(t){for(;t===Uo;)Uo=Qr[--Jr],Qr[Jr]=null,jo=Qr[--Jr],Qr[Jr]=null;for(;t===dr;)dr=It[--Tt],It[Tt]=null,an=It[--Tt],It[Tt]=null,ln=It[--Tt],It[Tt]=null}var Et=null,Ct=null,Pe=!1,Lt=null;function Ih(t,i){var o=Nt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Th(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,Ct=An(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=dr!==null?{id:ln,overflow:an}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Nt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,Ct=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(Pe){var i=Ct;if(i){var o=i;if(!Th(t,i)){if(hu(t))throw Error(n(418));i=An(o.nextSibling);var u=Et;i&&Th(t,i)?Ih(u,o):(t.flags=t.flags&-4097|2,Pe=!1,Et=t)}}else{if(hu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Pe=!1,Et=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function zo(t){if(t!==Et)return!1;if(!Pe)return kh(t),Pe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!su(t.type,t.memoizedProps)),i&&(i=Ct)){if(hu(t))throw Rh(),Error(n(418));for(;i;)Ih(t,i),i=An(i.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ct=An(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ct=null}}else Ct=Et?An(t.stateNode.nextSibling):null;return!0}function Rh(){for(var t=Ct;t;)t=An(t.nextSibling)}function Xr(){Ct=Et=null,Pe=!1}function mu(t){Lt===null?Lt=[t]:Lt.push(t)}var vw=te.ReactCurrentBatchConfig;function ns(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,f=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var v=d.refs;g===null?delete v[f]:v[f]=g},i._stringRef=f,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ph(t){var i=t._init;return i(t._payload)}function Nh(t){function i(I,C){if(t){var T=I.deletions;T===null?(I.deletions=[C],I.flags|=16):T.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)i(I,C),C=C.sibling;return null}function u(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function d(I,C){return I=Hn(I,C),I.index=0,I.sibling=null,I}function f(I,C,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<C?(I.flags|=2,C):T):(I.flags|=2,C)):(I.flags|=1048576,C)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function v(I,C,T,U){return C===null||C.tag!==6?(C=oc(T,I.mode,U),C.return=I,C):(C=d(C,T),C.return=I,C)}function E(I,C,T,U){var q=T.type;return q===ve?b(I,C,T.props.children,U,T.key):C!==null&&(C.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===at&&Ph(q)===C.type)?(U=d(C,T.props),U.ref=ns(I,C,T),U.return=I,U):(U=dl(T.type,T.key,T.props,null,I.mode,U),U.ref=ns(I,C,T),U.return=I,U)}function P(I,C,T,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=lc(T,I.mode,U),C.return=I,C):(C=d(C,T.children||[]),C.return=I,C)}function b(I,C,T,U,q){return C===null||C.tag!==7?(C=wr(T,I.mode,U,q),C.return=I,C):(C=d(C,T),C.return=I,C)}function F(I,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=oc(""+C,I.mode,T),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case he:return T=dl(C.type,C.key,C.props,null,I.mode,T),T.ref=ns(I,null,C),T.return=I,T;case ye:return C=lc(C,I.mode,T),C.return=I,C;case at:var U=C._init;return F(I,U(C._payload),T)}if(Ai(C)||J(C))return C=wr(C,I.mode,T,null),C.return=I,C;Wo(I,C)}return null}function A(I,C,T,U){var q=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return q!==null?null:v(I,C,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case he:return T.key===q?E(I,C,T,U):null;case ye:return T.key===q?P(I,C,T,U):null;case at:return q=T._init,A(I,C,q(T._payload),U)}if(Ai(T)||J(T))return q!==null?null:b(I,C,T,U,null);Wo(I,T)}return null}function H(I,C,T,U,q){if(typeof U=="string"&&U!==""||typeof U=="number")return I=I.get(T)||null,v(C,I,""+U,q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case he:return I=I.get(U.key===null?T:U.key)||null,E(C,I,U,q);case ye:return I=I.get(U.key===null?T:U.key)||null,P(C,I,U,q);case at:var Y=U._init;return H(I,C,T,Y(U._payload),q)}if(Ai(U)||J(U))return I=I.get(T)||null,b(C,I,U,q,null);Wo(C,U)}return null}function G(I,C,T,U){for(var q=null,Y=null,Q=C,ee=C=0,Ge=null;Q!==null&&ee<T.length;ee++){Q.index>ee?(Ge=Q,Q=null):Ge=Q.sibling;var de=A(I,Q,T[ee],U);if(de===null){Q===null&&(Q=Ge);break}t&&Q&&de.alternate===null&&i(I,Q),C=f(de,C,ee),Y===null?q=de:Y.sibling=de,Y=de,Q=Ge}if(ee===T.length)return o(I,Q),Pe&&fr(I,ee),q;if(Q===null){for(;ee<T.length;ee++)Q=F(I,T[ee],U),Q!==null&&(C=f(Q,C,ee),Y===null?q=Q:Y.sibling=Q,Y=Q);return Pe&&fr(I,ee),q}for(Q=u(I,Q);ee<T.length;ee++)Ge=H(Q,I,ee,T[ee],U),Ge!==null&&(t&&Ge.alternate!==null&&Q.delete(Ge.key===null?ee:Ge.key),C=f(Ge,C,ee),Y===null?q=Ge:Y.sibling=Ge,Y=Ge);return t&&Q.forEach(function(Bn){return i(I,Bn)}),Pe&&fr(I,ee),q}function K(I,C,T,U){var q=J(T);if(typeof q!="function")throw Error(n(150));if(T=q.call(T),T==null)throw Error(n(151));for(var Y=q=null,Q=C,ee=C=0,Ge=null,de=T.next();Q!==null&&!de.done;ee++,de=T.next()){Q.index>ee?(Ge=Q,Q=null):Ge=Q.sibling;var Bn=A(I,Q,de.value,U);if(Bn===null){Q===null&&(Q=Ge);break}t&&Q&&Bn.alternate===null&&i(I,Q),C=f(Bn,C,ee),Y===null?q=Bn:Y.sibling=Bn,Y=Bn,Q=Ge}if(de.done)return o(I,Q),Pe&&fr(I,ee),q;if(Q===null){for(;!de.done;ee++,de=T.next())de=F(I,de.value,U),de!==null&&(C=f(de,C,ee),Y===null?q=de:Y.sibling=de,Y=de);return Pe&&fr(I,ee),q}for(Q=u(I,Q);!de.done;ee++,de=T.next())de=H(Q,I,ee,de.value,U),de!==null&&(t&&de.alternate!==null&&Q.delete(de.key===null?ee:de.key),C=f(de,C,ee),Y===null?q=de:Y.sibling=de,Y=de);return t&&Q.forEach(function(Jw){return i(I,Jw)}),Pe&&fr(I,ee),q}function Fe(I,C,T,U){if(typeof T=="object"&&T!==null&&T.type===ve&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case he:e:{for(var q=T.key,Y=C;Y!==null;){if(Y.key===q){if(q=T.type,q===ve){if(Y.tag===7){o(I,Y.sibling),C=d(Y,T.props.children),C.return=I,I=C;break e}}else if(Y.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===at&&Ph(q)===Y.type){o(I,Y.sibling),C=d(Y,T.props),C.ref=ns(I,Y,T),C.return=I,I=C;break e}o(I,Y);break}else i(I,Y);Y=Y.sibling}T.type===ve?(C=wr(T.props.children,I.mode,U,T.key),C.return=I,I=C):(U=dl(T.type,T.key,T.props,null,I.mode,U),U.ref=ns(I,C,T),U.return=I,I=U)}return g(I);case ye:e:{for(Y=T.key;C!==null;){if(C.key===Y)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(I,C.sibling),C=d(C,T.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else i(I,C);C=C.sibling}C=lc(T,I.mode,U),C.return=I,I=C}return g(I);case at:return Y=T._init,Fe(I,C,Y(T._payload),U)}if(Ai(T))return G(I,C,T,U);if(J(T))return K(I,C,T,U);Wo(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(I,C.sibling),C=d(C,T),C.return=I,I=C):(o(I,C),C=oc(T,I.mode,U),C.return=I,I=C),g(I)):o(I,C)}return Fe}var Zr=Nh(!0),xh=Nh(!1),Ho=On(null),Bo=null,ei=null,gu=null;function _u(){gu=ei=Bo=null}function yu(t){var i=Ho.current;Te(Ho),t._currentValue=i}function vu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function ti(t,i){Bo=t,gu=ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(dt=!0),t.firstContext=null)}function kt(t){var i=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:i,next:null},ei===null){if(Bo===null)throw Error(n(308));ei=t,Bo.dependencies={lanes:0,firstContext:t}}else ei=ei.next=t;return i}var hr=null;function wu(t){hr===null?hr=[t]:hr.push(t)}function Ah(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,wu(i)):(o.next=d.next,d.next=o),i.interleaved=o,un(t,u)}function un(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Mn=!1;function Eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function bn(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,ae&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,un(t,o)}return d=u.interleaved,d===null?(i.next=i,wu(u)):(i.next=d.next,d.next=i),u.interleaved=i,un(t,o)}function Vo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ma(t,o)}}function Dh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?d=f=i:f=f.next=i}else d=f=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function $o(t,i,o,u){var d=t.updateQueue;Mn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,v=d.shared.pending;if(v!==null){d.shared.pending=null;var E=v,P=E.next;E.next=null,g===null?f=P:g.next=P,g=E;var b=t.alternate;b!==null&&(b=b.updateQueue,v=b.lastBaseUpdate,v!==g&&(v===null?b.firstBaseUpdate=P:v.next=P,b.lastBaseUpdate=E))}if(f!==null){var F=d.baseState;g=0,b=P=E=null,v=f;do{var A=v.lane,H=v.eventTime;if((u&A)===A){b!==null&&(b=b.next={eventTime:H,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var G=t,K=v;switch(A=i,H=o,K.tag){case 1:if(G=K.payload,typeof G=="function"){F=G.call(H,F,A);break e}F=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,A=typeof G=="function"?G.call(H,F,A):G,A==null)break e;F=$({},F,A);break e;case 2:Mn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,A=d.effects,A===null?d.effects=[v]:A.push(v))}else H={eventTime:H,lane:A,tag:v.tag,payload:v.payload,callback:v.callback,next:null},b===null?(P=b=H,E=F):b=b.next=H,g|=A;if(v=v.next,v===null){if(v=d.shared.pending,v===null)break;A=v,v=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(b===null&&(E=F),d.baseState=E,d.firstBaseUpdate=P,d.lastBaseUpdate=b,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);gr|=g,t.lanes=g,t.memoizedState=F}}function Lh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var rs={},Qt=On(rs),is=On(rs),ss=On(rs);function pr(t){if(t===rs)throw Error(n(174));return t}function Cu(t,i){switch(Ce(ss,i),Ce(is,t),Ce(Qt,rs),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Sa(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Sa(i,t)}Te(Qt),Ce(Qt,i)}function ni(){Te(Qt),Te(is),Te(ss)}function Mh(t){pr(ss.current);var i=pr(Qt.current),o=Sa(i,t.type);i!==o&&(Ce(is,t),Ce(Qt,o))}function Su(t){is.current===t&&(Te(Qt),Te(is))}var xe=On(0);function Go(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Tu(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Ko=te.ReactCurrentDispatcher,ku=te.ReactCurrentBatchConfig,mr=0,Ae=null,ze=null,Ve=null,qo=!1,os=!1,ls=0,ww=0;function Ze(){throw Error(n(321))}function Ru(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Dt(t[o],i[o]))return!1;return!0}function Pu(t,i,o,u,d,f){if(mr=f,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=t===null||t.memoizedState===null?Iw:Tw,t=o(u,d),os){f=0;do{if(os=!1,ls=0,25<=f)throw Error(n(301));f+=1,Ve=ze=null,i.updateQueue=null,Ko.current=kw,t=o(u,d)}while(os)}if(Ko.current=Jo,i=ze!==null&&ze.next!==null,mr=0,Ve=ze=Ae=null,qo=!1,i)throw Error(n(300));return t}function Nu(){var t=ls!==0;return ls=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ae.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Rt(){if(ze===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var i=Ve===null?Ae.memoizedState:Ve.next;if(i!==null)Ve=i,ze=t;else{if(t===null)throw Error(n(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ve===null?Ae.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function as(t,i){return typeof i=="function"?i(t):i}function xu(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=ze,d=u.baseQueue,f=o.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,u=u.baseState;var v=g=null,E=null,P=f;do{var b=P.lane;if((mr&b)===b)E!==null&&(E=E.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:t(u,P.action);else{var F={lane:b,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};E===null?(v=E=F,g=u):E=E.next=F,Ae.lanes|=b,gr|=b}P=P.next}while(P!==null&&P!==f);E===null?g=u:E.next=v,Dt(u,i.memoizedState)||(dt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do f=d.lane,Ae.lanes|=f,gr|=f,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Au(t){var i=Rt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,f=i.memoizedState;if(d!==null){o.pending=null;var g=d=d.next;do f=t(f,g.action),g=g.next;while(g!==d);Dt(f,i.memoizedState)||(dt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,u]}function bh(){}function Fh(t,i){var o=Ae,u=Rt(),d=i(),f=!Dt(u.memoizedState,d);if(f&&(u.memoizedState=d,dt=!0),u=u.queue,Ou(zh.bind(null,o,u,t),[t]),u.getSnapshot!==i||f||Ve!==null&&Ve.memoizedState.tag&1){if(o.flags|=2048,us(9,jh.bind(null,o,u,d,i),void 0,null),$e===null)throw Error(n(349));mr&30||Uh(o,i,d)}return d}function Uh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function jh(t,i,o,u){i.value=o,i.getSnapshot=u,Wh(i)&&Hh(t)}function zh(t,i,o){return o(function(){Wh(i)&&Hh(t)})}function Wh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Dt(t,o)}catch{return!0}}function Hh(t){var i=un(t,1);i!==null&&Ut(i,t,1,-1)}function Bh(t){var i=Jt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},i.queue=t,t=t.dispatch=Sw.bind(null,Ae,t),[i.memoizedState,t]}function us(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Vh(){return Rt().memoizedState}function Yo(t,i,o,u){var d=Jt();Ae.flags|=t,d.memoizedState=us(1|i,o,void 0,u===void 0?null:u)}function Qo(t,i,o,u){var d=Rt();u=u===void 0?null:u;var f=void 0;if(ze!==null){var g=ze.memoizedState;if(f=g.destroy,u!==null&&Ru(u,g.deps)){d.memoizedState=us(i,o,f,u);return}}Ae.flags|=t,d.memoizedState=us(1|i,o,f,u)}function $h(t,i){return Yo(8390656,8,t,i)}function Ou(t,i){return Qo(2048,8,t,i)}function Gh(t,i){return Qo(4,2,t,i)}function Kh(t,i){return Qo(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yh(t,i,o){return o=o!=null?o.concat([t]):null,Qo(4,4,qh.bind(null,i,t),o)}function Du(){}function Qh(t,i){var o=Rt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ru(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Jh(t,i){var o=Rt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ru(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Xh(t,i,o){return mr&21?(Dt(o,i)||(o=Pf(),Ae.lanes|=o,gr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=o)}function Ew(t,i){var o=me;me=o!==0&&4>o?o:4,t(!0);var u=ku.transition;ku.transition={};try{t(!1),i()}finally{me=o,ku.transition=u}}function Zh(){return Rt().memoizedState}function Cw(t,i,o){var u=zn(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ep(t))tp(i,o);else if(o=Ah(t,i,o,u),o!==null){var d=st();Ut(o,t,u,d),np(o,i,u)}}function Sw(t,i,o){var u=zn(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ep(t))tp(i,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,v=f(g,o);if(d.hasEagerState=!0,d.eagerState=v,Dt(v,g)){var E=i.interleaved;E===null?(d.next=d,wu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Ah(t,i,d,u),o!==null&&(d=st(),Ut(o,t,u,d),np(o,i,u))}}function ep(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function tp(t,i){os=qo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function np(t,i,o){if(o&4194240){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ma(t,o)}}var Jo={readContext:kt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Iw={readContext:kt,useCallback:function(t,i){return Jt().memoizedState=[t,i===void 0?null:i],t},useContext:kt,useEffect:$h,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Yo(4194308,4,qh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Yo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Yo(4,2,t,i)},useMemo:function(t,i){var o=Jt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=Jt();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Cw.bind(null,Ae,t),[u.memoizedState,t]},useRef:function(t){var i=Jt();return t={current:t},i.memoizedState=t},useState:Bh,useDebugValue:Du,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Bh(!1),i=t[0];return t=Ew.bind(null,t[1]),Jt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ae,d=Jt();if(Pe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),$e===null)throw Error(n(349));mr&30||Uh(u,i,o)}d.memoizedState=o;var f={value:o,getSnapshot:i};return d.queue=f,$h(zh.bind(null,u,f,t),[t]),u.flags|=2048,us(9,jh.bind(null,u,f,o,i),void 0,null),o},useId:function(){var t=Jt(),i=$e.identifierPrefix;if(Pe){var o=an,u=ln;o=(u&~(1<<32-Ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ls++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ww++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Tw={readContext:kt,useCallback:Qh,useContext:kt,useEffect:Ou,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:Jh,useReducer:xu,useRef:Vh,useState:function(){return xu(as)},useDebugValue:Du,useDeferredValue:function(t){var i=Rt();return Xh(i,ze.memoizedState,t)},useTransition:function(){var t=xu(as)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Fh,useId:Zh,unstable_isNewReconciler:!1},kw={readContext:kt,useCallback:Qh,useContext:kt,useEffect:Ou,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:Kh,useMemo:Jh,useReducer:Au,useRef:Vh,useState:function(){return Au(as)},useDebugValue:Du,useDeferredValue:function(t){var i=Rt();return ze===null?i.memoizedState=t:Xh(i,ze.memoizedState,t)},useTransition:function(){var t=Au(as)[0],i=Rt().memoizedState;return[t,i]},useMutableSource:bh,useSyncExternalStore:Fh,useId:Zh,unstable_isNewReconciler:!1};function Mt(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Lu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:$({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Xo={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=st(),d=zn(t),f=cn(u,d);f.payload=i,o!=null&&(f.callback=o),i=bn(t,f,d),i!==null&&(Ut(i,t,d,u),Vo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=st(),d=zn(t),f=cn(u,d);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=bn(t,f,d),i!==null&&(Ut(i,t,d,u),Vo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=st(),u=zn(t),d=cn(o,u);d.tag=2,i!=null&&(d.callback=i),i=bn(t,d,u),i!==null&&(Ut(i,t,u,o),Vo(i,t,u))}};function rp(t,i,o,u,d,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!Yi(o,u)||!Yi(d,f):!0}function ip(t,i,o){var u=!1,d=Dn,f=i.contextType;return typeof f=="object"&&f!==null?f=kt(f):(d=ct(i)?cr:Xe.current,u=i.contextTypes,f=(u=u!=null)?Yr(t,d):Dn),i=new i(o,f),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=f),i}function sp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Xo.enqueueReplaceState(i,i.state,null)}function Mu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Eu(t);var f=i.contextType;typeof f=="object"&&f!==null?d.context=kt(f):(f=ct(i)?cr:Xe.current,d.context=Yr(t,f)),d.state=t.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Lu(t,i,f,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Xo.enqueueReplaceState(d,d.state,null),$o(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,i){try{var o="",u=i;do o+=ue(u),u=u.return;while(u);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:i,stack:d,digest:null}}function bu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Fu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function op(t,i,o){o=cn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){sl||(sl=!0,Xu=u),Fu(t,i)},o}function lp(t,i,o){o=cn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Fu(t,i)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Fu(t,i),typeof u!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function ap(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Rw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=Ww.bind(null,t,i,o),i.then(t,t))}function up(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function cp(t,i,o,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=cn(-1,1),i.tag=2,bn(o,i,1))),o.lanes|=1),t)}var Pw=te.ReactCurrentOwner,dt=!1;function it(t,i,o,u){i.child=t===null?xh(i,null,o,u):Zr(i,t.child,o,u)}function dp(t,i,o,u,d){o=o.render;var f=i.ref;return ti(i,d),u=Pu(t,i,o,u,f,d),o=Nu(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Pe&&o&&du(i),i.flags|=1,it(t,i,u,d),i.child)}function fp(t,i,o,u,d){if(t===null){var f=o.type;return typeof f=="function"&&!sc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=f,hp(t,i,f,u,d)):(t=dl(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,!(t.lanes&d)){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:Yi,o(g,u)&&t.ref===i.ref)return dn(t,i,d)}return i.flags|=1,t=Hn(f,u),t.ref=i.ref,t.return=i,i.child=t}function hp(t,i,o,u,d){if(t!==null){var f=t.memoizedProps;if(Yi(f,u)&&t.ref===i.ref)if(dt=!1,i.pendingProps=u=f,(t.lanes&d)!==0)t.flags&131072&&(dt=!0);else return i.lanes=t.lanes,dn(t,i,d)}return Uu(t,i,o,u,d)}function pp(t,i,o){var u=i.pendingProps,d=u.children,f=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(si,St),St|=o;else{if(!(o&1073741824))return t=f!==null?f.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ce(si,St),St|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:o,Ce(si,St),St|=u}else f!==null?(u=f.baseLanes|o,i.memoizedState=null):u=o,Ce(si,St),St|=u;return it(t,i,d,o),i.child}function mp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,o,u,d){var f=ct(o)?cr:Xe.current;return f=Yr(i,f),ti(i,d),o=Pu(t,i,o,u,f,d),u=Nu(),t!==null&&!dt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,dn(t,i,d)):(Pe&&u&&du(i),i.flags|=1,it(t,i,o,d),i.child)}function gp(t,i,o,u,d){if(ct(o)){var f=!0;bo(i)}else f=!1;if(ti(i,d),i.stateNode===null)el(t,i),ip(i,o,u),Mu(i,o,u,d),u=!0;else if(t===null){var g=i.stateNode,v=i.memoizedProps;g.props=v;var E=g.context,P=o.contextType;typeof P=="object"&&P!==null?P=kt(P):(P=ct(o)?cr:Xe.current,P=Yr(i,P));var b=o.getDerivedStateFromProps,F=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==u||E!==P)&&sp(i,g,u,P),Mn=!1;var A=i.memoizedState;g.state=A,$o(i,u,g,d),E=i.memoizedState,v!==u||A!==E||ut.current||Mn?(typeof b=="function"&&(Lu(i,o,b,u),E=i.memoizedState),(v=Mn||rp(i,o,v,u,A,E,P))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=P,u=v):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Oh(t,i),v=i.memoizedProps,P=i.type===i.elementType?v:Mt(i.type,v),g.props=P,F=i.pendingProps,A=g.context,E=o.contextType,typeof E=="object"&&E!==null?E=kt(E):(E=ct(o)?cr:Xe.current,E=Yr(i,E));var H=o.getDerivedStateFromProps;(b=typeof H=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(v!==F||A!==E)&&sp(i,g,u,E),Mn=!1,A=i.memoizedState,g.state=A,$o(i,u,g,d);var G=i.memoizedState;v!==F||A!==G||ut.current||Mn?(typeof H=="function"&&(Lu(i,o,H,u),G=i.memoizedState),(P=Mn||rp(i,o,P,u,A,G,E)||!1)?(b||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,G,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,G,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=G),g.props=u,g.state=G,g.context=E,u=P):(typeof g.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),u=!1)}return ju(t,i,o,u,f,d)}function ju(t,i,o,u,d,f){mp(t,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Eh(i,o,!1),dn(t,i,f);u=i.stateNode,Pw.current=i;var v=g&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&g?(i.child=Zr(i,t.child,null,f),i.child=Zr(i,null,v,f)):it(t,i,v,f),i.memoizedState=u.state,d&&Eh(i,o,!0),i.child}function _p(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),Cu(t,i.containerInfo)}function yp(t,i,o,u,d){return Xr(),mu(d),i.flags|=256,it(t,i,o,u),i.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var u=i.pendingProps,d=xe.current,f=!1,g=(i.flags&128)!==0,v;if((v=g)||(v=t!==null&&t.memoizedState===null?!1:(d&2)!==0),v?(f=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ce(xe,d&1),t===null)return pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,t=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=fl(g,u,0,null),t=wr(t,u,o,null),f.return=i,t.return=i,f.sibling=t,i.child=f,i.child.memoizedState=Wu(o),i.memoizedState=zu,t):Hu(i,g));if(d=t.memoizedState,d!==null&&(v=d.dehydrated,v!==null))return Nw(t,i,g,u,v,d,o);if(f){f=u.fallback,g=i.mode,d=t.child,v=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Hn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),v!==null?f=Hn(v,f):(f=wr(f,g,o,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=t.child.memoizedState,g=g===null?Wu(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=t.childLanes&~o,i.memoizedState=zu,u}return f=t.child,t=f.sibling,u=Hn(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Hu(t,i){return i=fl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Zo(t,i,o,u){return u!==null&&mu(u),Zr(i,t.child,null,o),t=Hu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Nw(t,i,o,u,d,f,g){if(o)return i.flags&256?(i.flags&=-257,u=bu(Error(n(422))),Zo(t,i,g,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=fl({mode:"visible",children:u.children},d,0,null),f=wr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&Zr(i,t.child,null,g),i.child.memoizedState=Wu(g),i.memoizedState=zu,f);if(!(i.mode&1))return Zo(t,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var v=u.dgst;return u=v,f=Error(n(419)),u=bu(f,u,void 0),Zo(t,i,g,u)}if(v=(g&t.childLanes)!==0,dt||v){if(u=$e,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,un(t,d),Ut(u,t,d,-1))}return ic(),u=bu(Error(n(421))),Zo(t,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Hw.bind(null,t),d._reactRetry=i,null):(t=f.treeContext,Ct=An(d.nextSibling),Et=i,Pe=!0,Lt=null,t!==null&&(It[Tt++]=ln,It[Tt++]=an,It[Tt++]=dr,ln=t.id,an=t.overflow,dr=i),i=Hu(i,u.children),i.flags|=4096,i)}function wp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),vu(t.return,i,o)}function Bu(t,i,o,u,d){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=o,f.tailMode=d)}function Ep(t,i,o){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(it(t,i,u.children,o),u=xe.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,o,i);else if(t.tag===19)wp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ce(xe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Go(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Bu(i,!1,d,o,f);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Go(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Bu(i,!0,o,null,f);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function dn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),gr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Hn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function xw(t,i,o){switch(i.tag){case 3:_p(i),Xr();break;case 5:Mh(i);break;case 1:ct(i.type)&&bo(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ce(Ho,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ce(xe,xe.current&1),i.flags|=128,null):o&i.child.childLanes?vp(t,i,o):(Ce(xe,xe.current&1),t=dn(t,i,o),t!==null?t.sibling:null);Ce(xe,xe.current&1);break;case 19:if(u=(o&i.childLanes)!==0,t.flags&128){if(u)return Ep(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(xe,xe.current),u)break;return null;case 22:case 23:return i.lanes=0,pp(t,i,o)}return dn(t,i,o)}var Cp,Vu,Sp,Ip;Cp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vu=function(){},Sp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,pr(Qt.current);var f=null;switch(o){case"input":d=va(t,d),u=va(t,u),f=[];break;case"select":d=$({},d,{value:void 0}),u=$({},u,{value:void 0}),f=[];break;case"textarea":d=Ca(t,d),u=Ca(t,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Do)}Ia(o,u);var g;o=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var v=d[P];for(g in v)v.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(l.hasOwnProperty(P)?f||(f=[]):(f=f||[]).push(P,null));for(P in u){var E=u[P];if(v=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&E!==v&&(E!=null||v!=null))if(P==="style")if(v){for(g in v)!v.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in E)E.hasOwnProperty(g)&&v[g]!==E[g]&&(o||(o={}),o[g]=E[g])}else o||(f||(f=[]),f.push(P,o)),o=E;else P==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,v=v?v.__html:void 0,E!=null&&v!==E&&(f=f||[]).push(P,E)):P==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(P,""+E):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(l.hasOwnProperty(P)?(E!=null&&P==="onScroll"&&Ie("scroll",t),f||v===E||(f=[])):(f=f||[]).push(P,E))}o&&(f=f||[]).push("style",o);var P=f;(i.updateQueue=P)&&(i.flags|=4)}},Ip=function(t,i,o,u){o!==u&&(i.flags|=4)};function cs(t,i){if(!Pe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Aw(t,i,o){var u=i.pendingProps;switch(fu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return ct(i.type)&&Mo(),et(i),null;case 3:return u=i.stateNode,ni(),Te(ut),Te(Xe),Tu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(zo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Lt!==null&&(tc(Lt),Lt=null))),Vu(t,i),et(i),null;case 5:Su(i);var d=pr(ss.current);if(o=i.type,t!==null&&i.stateNode!=null)Sp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return et(i),null}if(t=pr(Qt.current),zo(i)){u=i.stateNode,o=i.type;var f=i.memoizedProps;switch(u[Yt]=i,u[es]=f,t=(i.mode&1)!==0,o){case"dialog":Ie("cancel",u),Ie("close",u);break;case"iframe":case"object":case"embed":Ie("load",u);break;case"video":case"audio":for(d=0;d<Ji.length;d++)Ie(Ji[d],u);break;case"source":Ie("error",u);break;case"img":case"image":case"link":Ie("error",u),Ie("load",u);break;case"details":Ie("toggle",u);break;case"input":rf(u,f),Ie("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Ie("invalid",u);break;case"textarea":lf(u,f),Ie("invalid",u)}Ia(o,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var v=f[g];g==="children"?typeof v=="string"?u.textContent!==v&&(f.suppressHydrationWarning!==!0&&Oo(u.textContent,v,t),d=["children",v]):typeof v=="number"&&u.textContent!==""+v&&(f.suppressHydrationWarning!==!0&&Oo(u.textContent,v,t),d=["children",""+v]):l.hasOwnProperty(g)&&v!=null&&g==="onScroll"&&Ie("scroll",u)}switch(o){case"input":ao(u),of(u,f,!0);break;case"textarea":ao(u),uf(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Do)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cf(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=g.createElement(o,{is:u.is}):(t=g.createElement(o),o==="select"&&(g=t,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):t=g.createElementNS(t,o),t[Yt]=i,t[es]=u,Cp(t,i,!1,!1),i.stateNode=t;e:{switch(g=Ta(o,u),o){case"dialog":Ie("cancel",t),Ie("close",t),d=u;break;case"iframe":case"object":case"embed":Ie("load",t),d=u;break;case"video":case"audio":for(d=0;d<Ji.length;d++)Ie(Ji[d],t);d=u;break;case"source":Ie("error",t),d=u;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),d=u;break;case"details":Ie("toggle",t),d=u;break;case"input":rf(t,u),d=va(t,u),Ie("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=$({},u,{value:void 0}),Ie("invalid",t);break;case"textarea":lf(t,u),d=Ca(t,u),Ie("invalid",t);break;default:d=u}Ia(o,d),v=d;for(f in v)if(v.hasOwnProperty(f)){var E=v[f];f==="style"?hf(t,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&df(t,E)):f==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Oi(t,E):typeof E=="number"&&Oi(t,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?E!=null&&f==="onScroll"&&Ie("scroll",t):E!=null&&z(t,f,E,g))}switch(o){case"input":ao(t),of(t,u,!1);break;case"textarea":ao(t),uf(t);break;case"option":u.value!=null&&t.setAttribute("value",""+pe(u.value));break;case"select":t.multiple=!!u.multiple,f=u.value,f!=null?Fr(t,!!u.multiple,f,!1):u.defaultValue!=null&&Fr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Do)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return et(i),null;case 6:if(t&&i.stateNode!=null)Ip(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=pr(ss.current),pr(Qt.current),zo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Yt]=i,(f=u.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:Oo(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(u.nodeValue,o,(t.mode&1)!==0)}f&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Yt]=i,i.stateNode=u}return et(i),null;case 13:if(Te(xe),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Ct!==null&&i.mode&1&&!(i.flags&128))Rh(),Xr(),i.flags|=98560,f=!1;else if(f=zo(i),u!==null&&u.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Yt]=i}else Xr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;et(i),f=!1}else Lt!==null&&(tc(Lt),Lt=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||xe.current&1?We===0&&(We=3):ic())),i.updateQueue!==null&&(i.flags|=4),et(i),null);case 4:return ni(),Vu(t,i),t===null&&Xi(i.stateNode.containerInfo),et(i),null;case 10:return yu(i.type._context),et(i),null;case 17:return ct(i.type)&&Mo(),et(i),null;case 19:if(Te(xe),f=i.memoizedState,f===null)return et(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)cs(f,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(g=Go(t),g!==null){for(i.flags|=128,cs(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)f=o,t=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,t=g.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ce(xe,xe.current&1|2),i.child}t=t.sibling}f.tail!==null&&be()>oi&&(i.flags|=128,u=!0,cs(f,!1),i.lanes=4194304)}else{if(!u)if(t=Go(g),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),cs(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Pe)return et(i),null}else 2*be()-f.renderingStartTime>oi&&o!==1073741824&&(i.flags|=128,u=!0,cs(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(o=f.last,o!==null?o.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=be(),i.sibling=null,o=xe.current,Ce(xe,u?o&1|2:o&1),i):(et(i),null);case 22:case 23:return rc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?St&1073741824&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Ow(t,i){switch(fu(i),i.tag){case 1:return ct(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ni(),Te(ut),Te(Xe),Tu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Su(i),null;case 13:if(Te(xe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Xr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Te(xe),null;case 4:return ni(),null;case 10:return yu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var tl=!1,tt=!1,Dw=typeof WeakSet=="function"?WeakSet:Set,V=null;function ii(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Le(t,i,u)}else o.current=null}function $u(t,i,o){try{o()}catch(u){Le(t,i,u)}}var Tp=!1;function Lw(t,i){if(ru=Eo,t=rh(),Ya(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,v=-1,E=-1,P=0,b=0,F=t,A=null;t:for(;;){for(var H;F!==o||d!==0&&F.nodeType!==3||(v=g+d),F!==f||u!==0&&F.nodeType!==3||(E=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(H=F.firstChild)!==null;)A=F,F=H;for(;;){if(F===t)break t;if(A===o&&++P===d&&(v=g),A===f&&++b===u&&(E=g),(H=F.nextSibling)!==null)break;F=A,A=F.parentNode}F=H}o=v===-1||E===-1?null:{start:v,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(iu={focusedElem:t,selectionRange:o},Eo=!1,V=i;V!==null;)if(i=V,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,V=t;else for(;V!==null;){i=V;try{var G=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,Fe=G.memoizedState,I=i.stateNode,C=I.getSnapshotBeforeUpdate(i.elementType===i.type?K:Mt(i.type,K),Fe);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(U){Le(i,i.return,U)}if(t=i.sibling,t!==null){t.return=i.return,V=t;break}V=i.return}return G=Tp,Tp=!1,G}function ds(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var f=d.destroy;d.destroy=void 0,f!==void 0&&$u(i,o,f)}d=d.next}while(d!==u)}}function nl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Gu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function kp(t){var i=t.alternate;i!==null&&(t.alternate=null,kp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Yt],delete i[es],delete i[au],delete i[gw],delete i[_w])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rp(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Do));else if(u!==4&&(t=t.child,t!==null))for(Ku(t,i,o),t=t.sibling;t!==null;)Ku(t,i,o),t=t.sibling}function qu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}var Qe=null,bt=!1;function Fn(t,i,o){for(o=o.child;o!==null;)Np(t,i,o),o=o.sibling}function Np(t,i,o){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(mo,o)}catch{}switch(o.tag){case 5:tt||ii(o,i);case 6:var u=Qe,d=bt;Qe=null,Fn(t,i,o),Qe=u,bt=d,Qe!==null&&(bt?(t=Qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Qe.removeChild(o.stateNode));break;case 18:Qe!==null&&(bt?(t=Qe,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),Bi(t)):lu(Qe,o.stateNode));break;case 4:u=Qe,d=bt,Qe=o.stateNode.containerInfo,bt=!0,Fn(t,i,o),Qe=u,bt=d;break;case 0:case 11:case 14:case 15:if(!tt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&$u(o,i,g),d=d.next}while(d!==u)}Fn(t,i,o);break;case 1:if(!tt&&(ii(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(v){Le(o,i,v)}Fn(t,i,o);break;case 21:Fn(t,i,o);break;case 22:o.mode&1?(tt=(u=tt)||o.memoizedState!==null,Fn(t,i,o),tt=u):Fn(t,i,o);break;default:Fn(t,i,o)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Dw),i.forEach(function(u){var d=Bw.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Ft(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var f=t,g=i,v=g;e:for(;v!==null;){switch(v.tag){case 5:Qe=v.stateNode,bt=!1;break e;case 3:Qe=v.stateNode.containerInfo,bt=!0;break e;case 4:Qe=v.stateNode.containerInfo,bt=!0;break e}v=v.return}if(Qe===null)throw Error(n(160));Np(f,g,d),Qe=null,bt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(P){Le(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,t),i=i.sibling}function Ap(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(i,t),Xt(t),u&4){try{ds(3,t,t.return),nl(3,t)}catch(K){Le(t,t.return,K)}try{ds(5,t,t.return)}catch(K){Le(t,t.return,K)}}break;case 1:Ft(i,t),Xt(t),u&512&&o!==null&&ii(o,o.return);break;case 5:if(Ft(i,t),Xt(t),u&512&&o!==null&&ii(o,o.return),t.flags&32){var d=t.stateNode;try{Oi(d,"")}catch(K){Le(t,t.return,K)}}if(u&4&&(d=t.stateNode,d!=null)){var f=t.memoizedProps,g=o!==null?o.memoizedProps:f,v=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{v==="input"&&f.type==="radio"&&f.name!=null&&sf(d,f),Ta(v,g);var P=Ta(v,f);for(g=0;g<E.length;g+=2){var b=E[g],F=E[g+1];b==="style"?hf(d,F):b==="dangerouslySetInnerHTML"?df(d,F):b==="children"?Oi(d,F):z(d,b,F,P)}switch(v){case"input":wa(d,f);break;case"textarea":af(d,f);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var H=f.value;H!=null?Fr(d,!!f.multiple,H,!1):A!==!!f.multiple&&(f.defaultValue!=null?Fr(d,!!f.multiple,f.defaultValue,!0):Fr(d,!!f.multiple,f.multiple?[]:"",!1))}d[es]=f}catch(K){Le(t,t.return,K)}}break;case 6:if(Ft(i,t),Xt(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,f=t.memoizedProps;try{d.nodeValue=f}catch(K){Le(t,t.return,K)}}break;case 3:if(Ft(i,t),Xt(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Bi(i.containerInfo)}catch(K){Le(t,t.return,K)}break;case 4:Ft(i,t),Xt(t);break;case 13:Ft(i,t),Xt(t),d=t.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Ju=be())),u&4&&xp(t);break;case 22:if(b=o!==null&&o.memoizedState!==null,t.mode&1?(tt=(P=tt)||b,Ft(i,t),tt=P):Ft(i,t),Xt(t),u&8192){if(P=t.memoizedState!==null,(t.stateNode.isHidden=P)&&!b&&t.mode&1)for(V=t,b=t.child;b!==null;){for(F=V=b;V!==null;){switch(A=V,H=A.child,A.tag){case 0:case 11:case 14:case 15:ds(4,A,A.return);break;case 1:ii(A,A.return);var G=A.stateNode;if(typeof G.componentWillUnmount=="function"){u=A,o=A.return;try{i=u,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(K){Le(u,o,K)}}break;case 5:ii(A,A.return);break;case 22:if(A.memoizedState!==null){Lp(F);continue}}H!==null?(H.return=A,V=H):Lp(F)}b=b.sibling}e:for(b=null,F=t;;){if(F.tag===5){if(b===null){b=F;try{d=F.stateNode,P?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(v=F.stateNode,E=F.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,v.style.display=ff("display",g))}catch(K){Le(t,t.return,K)}}}else if(F.tag===6){if(b===null)try{F.stateNode.nodeValue=P?"":F.memoizedProps}catch(K){Le(t,t.return,K)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;b===F&&(b=null),F=F.return}b===F&&(b=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Ft(i,t),Xt(t),u&4&&xp(t);break;case 21:break;default:Ft(i,t),Xt(t)}}function Xt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Rp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Oi(d,""),u.flags&=-33);var f=Pp(t);qu(t,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,v=Pp(t);Ku(t,v,g);break;default:throw Error(n(161))}}catch(E){Le(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Mw(t,i,o){V=t,Op(t)}function Op(t,i,o){for(var u=(t.mode&1)!==0;V!==null;){var d=V,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||tl;if(!g){var v=d.alternate,E=v!==null&&v.memoizedState!==null||tt;v=tl;var P=tt;if(tl=g,(tt=E)&&!P)for(V=d;V!==null;)g=V,E=g.child,g.tag===22&&g.memoizedState!==null?Mp(d):E!==null?(E.return=g,V=E):Mp(d);for(;f!==null;)V=f,Op(f),f=f.sibling;V=d,tl=v,tt=P}Dp(t)}else d.subtreeFlags&8772&&f!==null?(f.return=d,V=f):Dp(t)}}function Dp(t){for(;V!==null;){var i=V;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:tt||nl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!tt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Mt(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Lh(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Lh(i,g,o)}break;case 5:var v=i.stateNode;if(o===null&&i.flags&4){o=v;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var b=P.memoizedState;if(b!==null){var F=b.dehydrated;F!==null&&Bi(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tt||i.flags&512&&Gu(i)}catch(A){Le(i,i.return,A)}}if(i===t){V=null;break}if(o=i.sibling,o!==null){o.return=i.return,V=o;break}V=i.return}}function Lp(t){for(;V!==null;){var i=V;if(i===t){V=null;break}var o=i.sibling;if(o!==null){o.return=i.return,V=o;break}V=i.return}}function Mp(t){for(;V!==null;){var i=V;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{nl(4,i)}catch(E){Le(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Le(i,d,E)}}var f=i.return;try{Gu(i)}catch(E){Le(i,f,E)}break;case 5:var g=i.return;try{Gu(i)}catch(E){Le(i,g,E)}}}catch(E){Le(i,i.return,E)}if(i===t){V=null;break}var v=i.sibling;if(v!==null){v.return=i.return,V=v;break}V=i.return}}var bw=Math.ceil,rl=te.ReactCurrentDispatcher,Yu=te.ReactCurrentOwner,Pt=te.ReactCurrentBatchConfig,ae=0,$e=null,je=null,Je=0,St=0,si=On(0),We=0,fs=null,gr=0,il=0,Qu=0,hs=null,ft=null,Ju=0,oi=1/0,fn=null,sl=!1,Xu=null,Un=null,ol=!1,jn=null,ll=0,ps=0,Zu=null,al=-1,ul=0;function st(){return ae&6?be():al!==-1?al:al=be()}function zn(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:vw.transition!==null?(ul===0&&(ul=Pf()),ul):(t=me,t!==0||(t=window.event,t=t===void 0?16:Ff(t.type)),t):1}function Ut(t,i,o,u){if(50<ps)throw ps=0,Zu=null,Error(n(185));Ui(t,o,u),(!(ae&2)||t!==$e)&&(t===$e&&(!(ae&2)&&(il|=o),We===4&&Wn(t,Je)),ht(t,u),o===1&&ae===0&&!(i.mode&1)&&(oi=be()+500,Fo&&Ln()))}function ht(t,i){var o=t.callbackNode;vv(t,i);var u=yo(t,t===$e?Je:0);if(u===0)o!==null&&Tf(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Tf(o),i===1)t.tag===0?yw(Fp.bind(null,t)):Ch(Fp.bind(null,t)),pw(function(){!(ae&6)&&Ln()}),o=null;else{switch(Nf(u)){case 1:o=Oa;break;case 4:o=kf;break;case 16:o=po;break;case 536870912:o=Rf;break;default:o=po}o=$p(o,bp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function bp(t,i){if(al=-1,ul=0,ae&6)throw Error(n(327));var o=t.callbackNode;if(li()&&t.callbackNode!==o)return null;var u=yo(t,t===$e?Je:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=cl(t,u);else{i=u;var d=ae;ae|=2;var f=jp();($e!==t||Je!==i)&&(fn=null,oi=be()+500,yr(t,i));do try{jw();break}catch(v){Up(t,v)}while(!0);_u(),rl.current=f,ae=d,je!==null?i=0:($e=null,Je=0,i=We)}if(i!==0){if(i===2&&(d=Da(t),d!==0&&(u=d,i=ec(t,d))),i===1)throw o=fs,yr(t,0),Wn(t,u),ht(t,be()),o;if(i===6)Wn(t,u);else{if(d=t.current.alternate,!(u&30)&&!Fw(d)&&(i=cl(t,u),i===2&&(f=Da(t),f!==0&&(u=f,i=ec(t,f))),i===1))throw o=fs,yr(t,0),Wn(t,u),ht(t,be()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:vr(t,ft,fn);break;case 3:if(Wn(t,u),(u&130023424)===u&&(i=Ju+500-be(),10<i)){if(yo(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){st(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=ou(vr.bind(null,t,ft,fn),i);break}vr(t,ft,fn);break;case 4:if(Wn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var g=31-Ot(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=be()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*bw(u/1960))-u,10<u){t.timeoutHandle=ou(vr.bind(null,t,ft,fn),u);break}vr(t,ft,fn);break;case 5:vr(t,ft,fn);break;default:throw Error(n(329))}}}return ht(t,be()),t.callbackNode===o?bp.bind(null,t):null}function ec(t,i){var o=hs;return t.current.memoizedState.isDehydrated&&(yr(t,i).flags|=256),t=cl(t,i),t!==2&&(i=ft,ft=o,i!==null&&tc(i)),t}function tc(t){ft===null?ft=t:ft.push.apply(ft,t)}function Fw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],f=d.getSnapshot;d=d.value;try{if(!Dt(f(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wn(t,i){for(i&=~Qu,i&=~il,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Ot(i),u=1<<o;t[o]=-1,i&=~u}}function Fp(t){if(ae&6)throw Error(n(327));li();var i=yo(t,0);if(!(i&1))return ht(t,be()),null;var o=cl(t,i);if(t.tag!==0&&o===2){var u=Da(t);u!==0&&(i=u,o=ec(t,u))}if(o===1)throw o=fs,yr(t,0),Wn(t,i),ht(t,be()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,vr(t,ft,fn),ht(t,be()),null}function nc(t,i){var o=ae;ae|=1;try{return t(i)}finally{ae=o,ae===0&&(oi=be()+500,Fo&&Ln())}}function _r(t){jn!==null&&jn.tag===0&&!(ae&6)&&li();var i=ae;ae|=1;var o=Pt.transition,u=me;try{if(Pt.transition=null,me=1,t)return t()}finally{me=u,Pt.transition=o,ae=i,!(ae&6)&&Ln()}}function rc(){St=si.current,Te(si)}function yr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,hw(o)),je!==null)for(o=je.return;o!==null;){var u=o;switch(fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Mo();break;case 3:ni(),Te(ut),Te(Xe),Tu();break;case 5:Su(u);break;case 4:ni();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:yu(u.type._context);break;case 22:case 23:rc()}o=o.return}if($e=t,je=t=Hn(t.current,null),Je=St=i,We=0,fs=null,Qu=il=gr=0,ft=hs=null,hr!==null){for(i=0;i<hr.length;i++)if(o=hr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,f=o.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}o.pending=u}hr=null}return t}function Up(t,i){do{var o=je;try{if(_u(),Ko.current=Jo,qo){for(var u=Ae.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}qo=!1}if(mr=0,Ve=ze=Ae=null,os=!1,ls=0,Yu.current=null,o===null||o.return===null){We=1,fs=i,je=null;break}e:{var f=t,g=o.return,v=o,E=i;if(i=Je,v.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var P=E,b=v,F=b.tag;if(!(b.mode&1)&&(F===0||F===11||F===15)){var A=b.alternate;A?(b.updateQueue=A.updateQueue,b.memoizedState=A.memoizedState,b.lanes=A.lanes):(b.updateQueue=null,b.memoizedState=null)}var H=up(g);if(H!==null){H.flags&=-257,cp(H,g,v,f,i),H.mode&1&&ap(f,P,i),i=H,E=P;var G=i.updateQueue;if(G===null){var K=new Set;K.add(E),i.updateQueue=K}else G.add(E);break e}else{if(!(i&1)){ap(f,P,i),ic();break e}E=Error(n(426))}}else if(Pe&&v.mode&1){var Fe=up(g);if(Fe!==null){!(Fe.flags&65536)&&(Fe.flags|=256),cp(Fe,g,v,f,i),mu(ri(E,v));break e}}f=E=ri(E,v),We!==4&&(We=2),hs===null?hs=[f]:hs.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var I=op(f,E,i);Dh(f,I);break e;case 1:v=E;var C=f.type,T=f.stateNode;if(!(f.flags&128)&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Un===null||!Un.has(T)))){f.flags|=65536,i&=-i,f.lanes|=i;var U=lp(f,v,i);Dh(f,U);break e}}f=f.return}while(f!==null)}Wp(o)}catch(q){i=q,je===o&&o!==null&&(je=o=o.return);continue}break}while(!0)}function jp(){var t=rl.current;return rl.current=Jo,t===null?Jo:t}function ic(){(We===0||We===3||We===2)&&(We=4),$e===null||!(gr&268435455)&&!(il&268435455)||Wn($e,Je)}function cl(t,i){var o=ae;ae|=2;var u=jp();($e!==t||Je!==i)&&(fn=null,yr(t,i));do try{Uw();break}catch(d){Up(t,d)}while(!0);if(_u(),ae=o,rl.current=u,je!==null)throw Error(n(261));return $e=null,Je=0,We}function Uw(){for(;je!==null;)zp(je)}function jw(){for(;je!==null&&!cv();)zp(je)}function zp(t){var i=Vp(t.alternate,t,St);t.memoizedProps=t.pendingProps,i===null?Wp(t):je=i,Yu.current=null}function Wp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=Ow(o,i),o!==null){o.flags&=32767,je=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,je=null;return}}else if(o=Aw(o,i,St),o!==null){je=o;return}if(i=i.sibling,i!==null){je=i;return}je=i=t}while(i!==null);We===0&&(We=5)}function vr(t,i,o){var u=me,d=Pt.transition;try{Pt.transition=null,me=1,zw(t,i,o,u)}finally{Pt.transition=d,me=u}return null}function zw(t,i,o,u){do li();while(jn!==null);if(ae&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=o.lanes|o.childLanes;if(wv(t,f),t===$e&&(je=$e=null,Je=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ol||(ol=!0,$p(po,function(){return li(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=Pt.transition,Pt.transition=null;var g=me;me=1;var v=ae;ae|=4,Yu.current=null,Lw(t,o),Ap(o,t),ow(iu),Eo=!!ru,iu=ru=null,t.current=o,Mw(o),dv(),ae=v,me=g,Pt.transition=f}else t.current=o;if(ol&&(ol=!1,jn=t,ll=d),f=t.pendingLanes,f===0&&(Un=null),pv(o.stateNode),ht(t,be()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(sl)throw sl=!1,t=Xu,Xu=null,t;return ll&1&&t.tag!==0&&li(),f=t.pendingLanes,f&1?t===Zu?ps++:(ps=0,Zu=t):ps=0,Ln(),null}function li(){if(jn!==null){var t=Nf(ll),i=Pt.transition,o=me;try{if(Pt.transition=null,me=16>t?16:t,jn===null)var u=!1;else{if(t=jn,jn=null,ll=0,ae&6)throw Error(n(331));var d=ae;for(ae|=4,V=t.current;V!==null;){var f=V,g=f.child;if(V.flags&16){var v=f.deletions;if(v!==null){for(var E=0;E<v.length;E++){var P=v[E];for(V=P;V!==null;){var b=V;switch(b.tag){case 0:case 11:case 15:ds(8,b,f)}var F=b.child;if(F!==null)F.return=b,V=F;else for(;V!==null;){b=V;var A=b.sibling,H=b.return;if(kp(b),b===P){V=null;break}if(A!==null){A.return=H,V=A;break}V=H}}}var G=f.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var Fe=K.sibling;K.sibling=null,K=Fe}while(K!==null)}}V=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,V=g;else e:for(;V!==null;){if(f=V,f.flags&2048)switch(f.tag){case 0:case 11:case 15:ds(9,f,f.return)}var I=f.sibling;if(I!==null){I.return=f.return,V=I;break e}V=f.return}}var C=t.current;for(V=C;V!==null;){g=V;var T=g.child;if(g.subtreeFlags&2064&&T!==null)T.return=g,V=T;else e:for(g=C;V!==null;){if(v=V,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:nl(9,v)}}catch(q){Le(v,v.return,q)}if(v===g){V=null;break e}var U=v.sibling;if(U!==null){U.return=v.return,V=U;break e}V=v.return}}if(ae=d,Ln(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(mo,t)}catch{}u=!0}return u}finally{me=o,Pt.transition=i}}return!1}function Hp(t,i,o){i=ri(o,i),i=op(t,i,1),t=bn(t,i,1),i=st(),t!==null&&(Ui(t,1,i),ht(t,i))}function Le(t,i,o){if(t.tag===3)Hp(t,t,o);else for(;i!==null;){if(i.tag===3){Hp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Un===null||!Un.has(u))){t=ri(o,t),t=lp(i,t,1),i=bn(i,t,1),t=st(),i!==null&&(Ui(i,1,t),ht(i,t));break}}i=i.return}}function Ww(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=st(),t.pingedLanes|=t.suspendedLanes&o,$e===t&&(Je&o)===o&&(We===4||We===3&&(Je&130023424)===Je&&500>be()-Ju?yr(t,0):Qu|=o),ht(t,i)}function Bp(t,i){i===0&&(t.mode&1?(i=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):i=1);var o=st();t=un(t,i),t!==null&&(Ui(t,i,o),ht(t,o))}function Hw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Bp(t,o)}function Bw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Bp(t,o)}var Vp;Vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ut.current)dt=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return dt=!1,xw(t,i,o);dt=!!(t.flags&131072)}else dt=!1,Pe&&i.flags&1048576&&Sh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;el(t,i),t=i.pendingProps;var d=Yr(i,Xe.current);ti(i,o),d=Pu(null,i,u,t,d,o);var f=Nu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ct(u)?(f=!0,bo(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Eu(i),d.updater=Xo,i.stateNode=d,d._reactInternals=i,Mu(i,u,t,o),i=ju(null,i,u,!0,f,o)):(i.tag=0,Pe&&f&&du(i),it(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(el(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=$w(u),t=Mt(u,t),d){case 0:i=Uu(null,i,u,t,o);break e;case 1:i=gp(null,i,u,t,o);break e;case 11:i=dp(null,i,u,t,o);break e;case 14:i=fp(null,i,u,Mt(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Mt(u,d),Uu(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Mt(u,d),gp(t,i,u,d,o);case 3:e:{if(_p(i),t===null)throw Error(n(387));u=i.pendingProps,f=i.memoizedState,d=f.element,Oh(t,i),$o(i,u,null,o);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=ri(Error(n(423)),i),i=yp(t,i,u,o,d);break e}else if(u!==d){d=ri(Error(n(424)),i),i=yp(t,i,u,o,d);break e}else for(Ct=An(i.stateNode.containerInfo.firstChild),Et=i,Pe=!0,Lt=null,o=xh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xr(),u===d){i=dn(t,i,o);break e}it(t,i,u,o)}i=i.child}return i;case 5:return Mh(i),t===null&&pu(i),u=i.type,d=i.pendingProps,f=t!==null?t.memoizedProps:null,g=d.children,su(u,d)?g=null:f!==null&&su(u,f)&&(i.flags|=32),mp(t,i),it(t,i,g,o),i.child;case 6:return t===null&&pu(i),null;case 13:return vp(t,i,o);case 4:return Cu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Zr(i,null,u,o):it(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Mt(u,d),dp(t,i,u,d,o);case 7:return it(t,i,i.pendingProps,o),i.child;case 8:return it(t,i,i.pendingProps.children,o),i.child;case 12:return it(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,Ce(Ho,u._currentValue),u._currentValue=g,f!==null)if(Dt(f.value,g)){if(f.children===d.children&&!ut.current){i=dn(t,i,o);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var v=f.dependencies;if(v!==null){g=f.child;for(var E=v.firstContext;E!==null;){if(E.context===u){if(f.tag===1){E=cn(-1,o&-o),E.tag=2;var P=f.updateQueue;if(P!==null){P=P.shared;var b=P.pending;b===null?E.next=E:(E.next=b.next,b.next=E),P.pending=E}}f.lanes|=o,E=f.alternate,E!==null&&(E.lanes|=o),vu(f.return,o,i),v.lanes|=o;break}E=E.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(n(341));g.lanes|=o,v=g.alternate,v!==null&&(v.lanes|=o),vu(g,o,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}it(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ti(i,o),d=kt(d),u=u(d),i.flags|=1,it(t,i,u,o),i.child;case 14:return u=i.type,d=Mt(u,i.pendingProps),d=Mt(u.type,d),fp(t,i,u,d,o);case 15:return hp(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Mt(u,d),el(t,i),i.tag=1,ct(u)?(t=!0,bo(i)):t=!1,ti(i,o),ip(i,u,d),Mu(i,u,d,o),ju(null,i,u,!0,t,o);case 19:return Ep(t,i,o);case 22:return pp(t,i,o)}throw Error(n(156,i.tag))};function $p(t,i){return If(t,i)}function Vw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,i,o,u){return new Vw(t,i,o,u)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $w(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gt)return 11;if(t===Kt)return 14}return 2}function Hn(t,i){var o=t.alternate;return o===null?(o=Nt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function dl(t,i,o,u,d,f){var g=2;if(u=t,typeof t=="function")sc(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ve:return wr(o.children,d,f,i);case Oe:g=8,d|=8;break;case we:return t=Nt(12,o,i,d|2),t.elementType=we,t.lanes=f,t;case yt:return t=Nt(13,o,i,d),t.elementType=yt,t.lanes=f,t;case At:return t=Nt(19,o,i,d),t.elementType=At,t.lanes=f,t;case De:return fl(o,d,f,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ue:g=10;break e;case $t:g=9;break e;case Gt:g=11;break e;case Kt:g=14;break e;case at:g=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Nt(g,o,i,d),i.elementType=t,i.type=u,i.lanes=f,i}function wr(t,i,o,u){return t=Nt(7,t,u,i),t.lanes=o,t}function fl(t,i,o,u){return t=Nt(22,t,u,i),t.elementType=De,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,i,o){return t=Nt(6,t,null,i),t.lanes=o,t}function lc(t,i,o){return i=Nt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Gw(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ac(t,i,o,u,d,f,g,v,E){return t=new Gw(t,i,o,v,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Nt(3,null,null,i),t.current=f,f.stateNode=t,f.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(f),t}function Kw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Gp(t){if(!t)return Dn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ct(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ct(o))return wh(t,o,i)}return i}function Kp(t,i,o,u,d,f,g,v,E){return t=ac(o,u,!0,t,d,f,g,v,E),t.context=Gp(null),o=t.current,u=st(),d=zn(o),f=cn(u,d),f.callback=i??null,bn(o,f,d),t.current.lanes=d,Ui(t,d,u),ht(t,u),t}function hl(t,i,o,u){var d=i.current,f=st(),g=zn(d);return o=Gp(o),i.context===null?i.context=o:i.pendingContext=o,i=cn(f,g),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=bn(d,i,g),t!==null&&(Ut(t,d,g,f),Vo(t,d,g)),g}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uc(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}var Yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function cc(t){this._internalRoot=t}ml.prototype.render=cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));hl(t,i,null,null)},ml.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;_r(function(){hl(null,t,null,null)}),i[sn]=null}};function ml(t){this._internalRoot=t}ml.prototype.unstable_scheduleHydration=function(t){if(t){var i=Of();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Pn.length&&i!==0&&i<Pn[o].priority;o++);Pn.splice(o,0,t),o===0&&Mf(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function qw(t,i,o,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var P=pl(g);f.call(P)}}var g=Kp(i,u,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=g,t[sn]=g.current,Xi(t.nodeType===8?t.parentNode:t),_r(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var v=u;u=function(){var P=pl(E);v.call(P)}}var E=ac(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=E,t[sn]=E.current,Xi(t.nodeType===8?t.parentNode:t),_r(function(){hl(i,E,o,u)}),E}function _l(t,i,o,u,d){var f=o._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var v=d;d=function(){var E=pl(g);v.call(E)}}hl(i,g,t,d)}else g=qw(o,i,t,d,u);return pl(g)}xf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Fi(i.pendingLanes);o!==0&&(Ma(i,o|1),ht(i,be()),!(ae&6)&&(oi=be()+500,Ln()))}break;case 13:_r(function(){var u=un(t,1);if(u!==null){var d=st();Ut(u,t,1,d)}}),uc(t,1)}},ba=function(t){if(t.tag===13){var i=un(t,134217728);if(i!==null){var o=st();Ut(i,t,134217728,o)}uc(t,134217728)}},Af=function(t){if(t.tag===13){var i=zn(t),o=un(t,i);if(o!==null){var u=st();Ut(o,t,i,u)}uc(t,i)}},Of=function(){return me},Df=function(t,i){var o=me;try{return me=t,i()}finally{me=o}},Pa=function(t,i,o){switch(i){case"input":if(wa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=Lo(u);if(!d)throw Error(n(90));nf(u),wa(u,d)}}}break;case"textarea":af(t,o);break;case"select":i=o.value,i!=null&&Fr(t,!!o.multiple,i,!1)}},_f=nc,yf=_r;var Yw={usingClientEntryPoint:!1,Events:[ts,Kr,Lo,mf,gf,nc]},ms={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cf(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{mo=yl.inject(Qw),qt=yl}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw,pt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return Kw(t,i,null,o)},pt.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,u="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ac(t,1,!1,null,null,o,!1,u,d),t[sn]=i.current,Xi(t.nodeType===8?t.parentNode:t),new cc(i)},pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Cf(i),t=t===null?null:t.stateNode,t},pt.flushSync=function(t){return _r(t)},pt.hydrate=function(t,i,o){if(!gl(i))throw Error(n(200));return _l(null,t,i,!0,o)},pt.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,f="",g=Yp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Kp(i,null,t,1,o??null,d,!1,f,g),t[sn]=i.current,Xi(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ml(i)},pt.render=function(t,i,o){if(!gl(i))throw Error(n(200));return _l(null,t,i,!1,o)},pt.unmountComponentAtNode=function(t){if(!gl(t))throw Error(n(40));return t._reactRootContainer?(_r(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[sn]=null})}),!0):!1},pt.unstable_batchedUpdates=nc,pt.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!gl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return _l(t,i,o,!1,u)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var im;function lE(){if(im)return pc.exports;im=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pc.exports=oE(),pc.exports}var sm;function aE(){if(sm)return wl;sm=1;var r=lE();return wl.createRoot=r.createRoot,wl.hydrateRoot=r.hydrateRoot,wl}var uE=aE(),_s={},om;function cE(){if(om)return _s;om=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.parse=c,_s.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,k){const R=new a,L=w.length;if(L<2)return R;const x=(k==null?void 0:k.decode)||y;let O=0;do{const B=w.indexOf("=",O);if(B===-1)break;const z=w.indexOf(";",O),te=z===-1?L:z;if(B>te){O=w.lastIndexOf(";",B-1)+1;continue}const he=h(w,O,B),ye=p(w,B,he),ve=w.slice(he,ye);if(R[ve]===void 0){let Oe=h(w,B+1,te),we=p(w,te,Oe);const Ue=x(w.slice(Oe,we));R[ve]=Ue}O=te+1}while(O<L);return R}function h(w,k,R){do{const L=w.charCodeAt(k);if(L!==32&&L!==9)return k}while(++k<R);return R}function p(w,k,R){for(;k>R;){const L=w.charCodeAt(--k);if(L!==32&&L!==9)return k+1}return R}function m(w,k,R){const L=(R==null?void 0:R.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const x=L(k);if(!e.test(x))throw new TypeError(`argument val is invalid: ${k}`);let O=w+"="+x;if(!R)return O;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);O+="; Max-Age="+R.maxAge}if(R.domain){if(!n.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);O+="; Domain="+R.domain}if(R.path){if(!s.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);O+="; Path="+R.path}if(R.expires){if(!_(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);O+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(O+="; HttpOnly"),R.secure&&(O+="; Secure"),R.partitioned&&(O+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return O}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function _(w){return l.call(w)==="[object Date]"}return _s}cE();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lm="popstate";function dE(r={}){function e(s,l){let{pathname:a,search:c,hash:h}=s.location;return Dc("",{pathname:a,search:c,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Ds(l)}return hE(e,n,null,r)}function Ne(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ht(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fE(){return Math.random().toString(36).substring(2,10)}function am(r,e){return{usr:r.state,key:r.key,idx:e}}function Dc(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ei(e):e,state:n,key:e&&e.key||s||fE()}}function Ds({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ei(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function hE(r,e,n,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,h="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let x=y(),O=x==null?null:x-m;m=x,p&&p({action:h,location:L.location,delta:O})}function w(x,O){h="PUSH";let B=Dc(L.location,x,O);m=y()+1;let z=am(B,m),te=L.createHref(B);try{c.pushState(z,"",te)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;l.location.assign(te)}a&&p&&p({action:h,location:L.location,delta:1})}function k(x,O){h="REPLACE";let B=Dc(L.location,x,O);m=y();let z=am(B,m),te=L.createHref(B);c.replaceState(z,"",te),a&&p&&p({action:h,location:L.location,delta:0})}function R(x){let O=l.location.origin!=="null"?l.location.origin:l.location.href,B=typeof x=="string"?x:Ds(x);return B=B.replace(/ $/,"%20"),Ne(O,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,O)}let L={get action(){return h},get location(){return r(l,c)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(lm,_),p=x,()=>{l.removeEventListener(lm,_),p=null}},createHref(x){return e(l,x)},createURL:R,encodeLocation(x){let O=R(x);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:k,go(x){return c.go(x)}};return L}function Tg(r,e,n="/"){return pE(r,e,n,!1)}function pE(r,e,n,s){let l=typeof e=="string"?Ei(e):e,a=er(l.pathname||"/",n);if(a==null)return null;let c=kg(r);mE(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=kE(a);h=IE(c[p],m,s)}return h}function kg(r,e=[],n=[],s=""){let l=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Ne(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=_n([s,p.relativePath]),y=n.concat(p);a.children&&a.children.length>0&&(Ne(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),kg(a.children,e,y,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:CE(m,a.index),routesMeta:y})};return r.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))l(a,c);else for(let p of Rg(a.path))l(a,c,p)}),e}function Rg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=Rg(s.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function mE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:SE(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var gE=/^:[\w-]+$/,_E=3,yE=2,vE=1,wE=10,EE=-2,um=r=>r==="*";function CE(r,e){let n=r.split("/"),s=n.length;return n.some(um)&&(s+=EE),e&&(s+=yE),n.filter(l=>!um(l)).reduce((l,a)=>l+(gE.test(a)?_E:a===""?vE:wE),s)}function SE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function IE(r,e,n=!1){let{routesMeta:s}=r,l={},a="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,y=a==="/"?e:e.slice(a.length)||"/",_=Ol({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=Ol({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(l,_.params),c.push({params:l,pathname:_n([a,_.pathname]),pathnameBase:xE(_n([a,_.pathnameBase])),route:w}),_.pathnameBase!=="/"&&(a=_n([a,_.pathnameBase]))}return c}function Ol(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=TE(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},w)=>{if(y==="*"){let R=h[w]||"";c=a.slice(0,a.length-R.length).replace(/(.)\/+$/,"$1")}const k=h[w];return _&&!k?m[y]=void 0:m[y]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function TE(r,e=!1,n=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function kE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function er(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function RE(r,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ei(r):r;return{pathname:n?n.startsWith("/")?n:PE(n,e):e,search:AE(s),hash:OE(l)}}function PE(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function _c(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function NE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function id(r){let e=NE(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function sd(r,e,n,s=!1){let l;typeof r=="string"?l=Ei(r):(l={...r},Ne(!l.pathname||!l.pathname.includes("?"),_c("?","pathname","search",l)),Ne(!l.pathname||!l.pathname.includes("#"),_c("#","pathname","hash",l)),Ne(!l.search||!l.search.includes("#"),_c("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),_-=1;l.pathname=w.join("/")}h=_>=0?e[_]:"/"}let p=RE(l,h),m=c&&c!=="/"&&c.endsWith("/"),y=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var _n=r=>r.join("/").replace(/\/\/+/g,"/"),xE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,OE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function DE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Pg=["POST","PUT","PATCH","DELETE"];new Set(Pg);var LE=["GET",...Pg];new Set(LE);var Ci=N.createContext(null);Ci.displayName="DataRouter";var ta=N.createContext(null);ta.displayName="DataRouterState";var Ng=N.createContext({isTransitioning:!1});Ng.displayName="ViewTransition";var ME=N.createContext(new Map);ME.displayName="Fetchers";var bE=N.createContext(null);bE.displayName="Await";var Vt=N.createContext(null);Vt.displayName="Navigation";var qs=N.createContext(null);qs.displayName="Location";var rn=N.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var od=N.createContext(null);od.displayName="RouteError";function FE(r,{relative:e}={}){Ne(Si(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=N.useContext(Vt),{hash:l,pathname:a,search:c}=Qs(r,{relative:e}),h=a;return n!=="/"&&(h=a==="/"?n:_n([n,a])),s.createHref({pathname:h,search:c,hash:l})}function Si(){return N.useContext(qs)!=null}function ir(){return Ne(Si(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(qs).location}var xg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ag(r){N.useContext(Vt).static||N.useLayoutEffect(r)}function Ys(){let{isDataRoute:r}=N.useContext(rn);return r?QE():UE()}function UE(){Ne(Si(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(Ci),{basename:e,navigator:n}=N.useContext(Vt),{matches:s}=N.useContext(rn),{pathname:l}=ir(),a=JSON.stringify(id(s)),c=N.useRef(!1);return Ag(()=>{c.current=!0}),N.useCallback((p,m={})=>{if(Ht(c.current,xg),!c.current)return;if(typeof p=="number"){n.go(p);return}let y=sd(p,JSON.parse(a),l,m.relative==="path");r==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:_n([e,y.pathname])),(m.replace?n.replace:n.push)(y,m.state,m)},[e,n,a,l,r])}N.createContext(null);function Qs(r,{relative:e}={}){let{matches:n}=N.useContext(rn),{pathname:s}=ir(),l=JSON.stringify(id(n));return N.useMemo(()=>sd(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function jE(r,e){return Og(r,e)}function Og(r,e,n,s){var B;Ne(Si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:a}=N.useContext(Vt),{matches:c}=N.useContext(rn),h=c[c.length-1],p=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let z=_&&_.path||"";Dg(m,!_||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let w=ir(),k;if(e){let z=typeof e=="string"?Ei(e):e;Ne(y==="/"||((B=z.pathname)==null?void 0:B.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${z.pathname}" was given in the \`location\` prop.`),k=z}else k=w;let R=k.pathname||"/",L=R;if(y!=="/"){let z=y.replace(/^\//,"").split("/");L="/"+R.replace(/^\//,"").split("/").slice(z.length).join("/")}let x=!a&&n&&n.matches&&n.matches.length>0?n.matches:Tg(r,{pathname:L});Ht(_||x!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Ht(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=VE(x&&x.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:_n([y,l.encodeLocation?l.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:_n([y,l.encodeLocation?l.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),c,n,s);return e&&O?N.createElement(qs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},O):O}function zE(){let r=YE(),e=DE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:l},n):null,c)}var WE=N.createElement(zE,null),HE=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?N.createElement(rn.Provider,{value:this.props.routeContext},N.createElement(od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function BE({routeContext:r,match:e,children:n}){let s=N.useContext(Ci);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(rn.Provider,{value:r},n)}function VE(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let l=r,a=n==null?void 0:n.errors;if(a!=null){let p=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Ne(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:y,errors:_}=n,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!_||_[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,y)=>{let _,w=!1,k=null,R=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,k=m.route.errorElement||WE,c&&(h<0&&y===0?(Dg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,R=null):h===y&&(w=!0,R=m.route.hydrateFallbackElement||null)));let L=e.concat(l.slice(0,y+1)),x=()=>{let O;return _?O=k:w?O=R:m.route.Component?O=N.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=p,N.createElement(BE,{match:m,routeContext:{outlet:p,matches:L,isDataRoute:n!=null},children:O})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?N.createElement(HE,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:x(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):x()},null)}function ld(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $E(r){let e=N.useContext(Ci);return Ne(e,ld(r)),e}function GE(r){let e=N.useContext(ta);return Ne(e,ld(r)),e}function KE(r){let e=N.useContext(rn);return Ne(e,ld(r)),e}function ad(r){let e=KE(r),n=e.matches[e.matches.length-1];return Ne(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function qE(){return ad("useRouteId")}function YE(){var s;let r=N.useContext(od),e=GE("useRouteError"),n=ad("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[n]}function QE(){let{router:r}=$E("useNavigate"),e=ad("useNavigate"),n=N.useRef(!1);return Ag(()=>{n.current=!0}),N.useCallback(async(l,a={})=>{Ht(n.current,xg),n.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...a}))},[r,e])}var cm={};function Dg(r,e,n){!e&&!cm[r]&&(cm[r]=!0,Ht(!1,n))}N.memo(JE);function JE({routes:r,future:e,state:n}){return Og(r,void 0,n,e)}function Lg({to:r,replace:e,state:n,relative:s}){Ne(Si(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=N.useContext(Vt);Ht(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=N.useContext(rn),{pathname:c}=ir(),h=Ys(),p=sd(r,id(a),c,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{h(JSON.parse(m),{replace:e,state:n,relative:s})},[h,m,s,e,n]),null}function Er(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function XE({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:a=!1}){Ne(!Si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),h=N.useMemo(()=>({basename:c,navigator:l,static:a,future:{}}),[c,l,a]);typeof n=="string"&&(n=Ei(n));let{pathname:p="/",search:m="",hash:y="",state:_=null,key:w="default"}=n,k=N.useMemo(()=>{let R=er(p,c);return R==null?null:{location:{pathname:R,search:m,hash:y,state:_,key:w},navigationType:s}},[c,p,m,y,_,w,s]);return Ht(k!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:N.createElement(Vt.Provider,{value:h},N.createElement(qs.Provider,{children:e,value:k}))}function ZE({children:r,location:e}){return jE(Lc(r),e)}function Lc(r,e=[]){let n=[];return N.Children.forEach(r,(s,l)=>{if(!N.isValidElement(s))return;let a=[...e,l];if(s.type===N.Fragment){n.push.apply(n,Lc(s.props.children,a));return}Ne(s.type===Er,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Lc(s.props.children,a)),n.push(c)}),n}var Tl="get",kl="application/x-www-form-urlencoded";function na(r){return r!=null&&typeof r.tagName=="string"}function eC(r){return na(r)&&r.tagName.toLowerCase()==="button"}function tC(r){return na(r)&&r.tagName.toLowerCase()==="form"}function nC(r){return na(r)&&r.tagName.toLowerCase()==="input"}function rC(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function iC(r,e){return r.button===0&&(!e||e==="_self")&&!rC(r)}var El=null;function sC(){if(El===null)try{new FormData(document.createElement("form"),0),El=!1}catch{El=!0}return El}var oC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yc(r){return r!=null&&!oC.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kl}"`),null):r}function lC(r,e){let n,s,l,a,c;if(tC(r)){let h=r.getAttribute("action");s=h?er(h,e):null,n=r.getAttribute("method")||Tl,l=yc(r.getAttribute("enctype"))||kl,a=new FormData(r)}else if(eC(r)||nC(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?er(p,e):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||Tl,l=yc(r.getAttribute("formenctype"))||yc(h.getAttribute("enctype"))||kl,a=new FormData(h,r),!sC()){let{name:m,type:y,value:_}=r;if(y==="image"){let w=m?`${m}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else m&&a.append(m,_)}}else{if(na(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Tl,s=null,l=kl,c=r}return a&&l==="text/plain"&&(c=a,a=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:a,body:c}}function ud(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function aC(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uC(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function cC(r,e,n){let s=await Promise.all(r.map(async l=>{let a=e.routes[l.route.id];if(a){let c=await aC(a,n);return c.links?c.links():[]}return[]}));return pC(s.flat(1).filter(uC).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function dm(r,e,n,s,l,a){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var y;return n[m].pathname!==p.pathname||((y=n[m].route.path)==null?void 0:y.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):a==="data"?e.filter((p,m)=>{var _;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function dC(r,e){return fC(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let l=[s.module];return s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function fC(r){return[...new Set(r)]}function hC(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function pC(r,e){let n=new Set;return new Set(e),r.reduce((s,l)=>{let a=JSON.stringify(hC(l));return n.has(a)||(n.add(a),s.push({key:a,link:l})),s},[])}function mC(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function gC(){let r=N.useContext(Ci);return ud(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function _C(){let r=N.useContext(ta);return ud(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var cd=N.createContext(void 0);cd.displayName="FrameworkContext";function Mg(){let r=N.useContext(cd);return ud(r,"You must render this element inside a <HydratedRouter> element"),r}function yC(r,e){let n=N.useContext(cd),[s,l]=N.useState(!1),[a,c]=N.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,w=N.useRef(null);N.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let L=O=>{O.forEach(B=>{c(B.isIntersecting)})},x=new IntersectionObserver(L,{threshold:.5});return w.current&&x.observe(w.current),()=>{x.disconnect()}}},[r]),N.useEffect(()=>{if(s){let L=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(L)}}},[s]);let k=()=>{l(!0)},R=()=>{l(!1),c(!1)};return n?r!=="intent"?[a,w,{}]:[a,w,{onFocus:ys(h,k),onBlur:ys(p,R),onMouseEnter:ys(m,k),onMouseLeave:ys(y,R),onTouchStart:ys(_,k)}]:[!1,w,{}]}function ys(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function vC({page:r,...e}){let{router:n}=gC(),s=N.useMemo(()=>Tg(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?N.createElement(EC,{page:r,matches:s,...e}):null}function wC(r){let{manifest:e,routeModules:n}=Mg(),[s,l]=N.useState([]);return N.useEffect(()=>{let a=!1;return cC(r,e,n).then(c=>{a||l(c)}),()=>{a=!0}},[r,e,n]),s}function EC({page:r,matches:e,...n}){let s=ir(),{manifest:l,routeModules:a}=Mg(),{loaderData:c,matches:h}=_C(),p=N.useMemo(()=>dm(r,e,h,l,s,"data"),[r,e,h,l,s]),m=N.useMemo(()=>dm(r,e,h,l,s,"assets"),[r,e,h,l,s]),y=N.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let k=new Set,R=!1;if(e.forEach(x=>{var B;let O=l.routes[x.route.id];!O||!O.hasLoader||(!p.some(z=>z.route.id===x.route.id)&&x.route.id in c&&((B=a[x.route.id])!=null&&B.shouldRevalidate)||O.hasClientLoader?R=!0:k.add(x.route.id))}),k.size===0)return[];let L=mC(r);return R&&k.size>0&&L.searchParams.set("_routes",e.filter(x=>k.has(x.route.id)).map(x=>x.route.id).join(",")),[L.pathname+L.search]},[c,s,l,p,e,r,a]),_=N.useMemo(()=>dC(m,l),[m,l]),w=wC(m);return N.createElement(N.Fragment,null,y.map(k=>N.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),_.map(k=>N.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),w.map(({key:k,link:R})=>N.createElement("link",{key:k,...R})))}function CC(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bg&&(window.__reactRouterVersion="7.1.5")}catch{}function SC({basename:r,children:e,window:n}){let s=N.useRef();s.current==null&&(s.current=dE({window:n,v5Compat:!0}));let l=s.current,[a,c]=N.useState({action:l.action,location:l.location}),h=N.useCallback(p=>{N.startTransition(()=>c(p))},[c]);return N.useLayoutEffect(()=>l.listen(h),[l,h]),N.createElement(XE,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:l})}var Fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ir=N.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:a,replace:c,state:h,target:p,to:m,preventScrollReset:y,viewTransition:_,...w},k){let{basename:R}=N.useContext(Vt),L=typeof m=="string"&&Fg.test(m),x,O=!1;if(typeof m=="string"&&L&&(x=m,bg))try{let we=new URL(window.location.href),Ue=m.startsWith("//")?new URL(we.protocol+m):new URL(m),$t=er(Ue.pathname,R);Ue.origin===we.origin&&$t!=null?m=$t+Ue.search+Ue.hash:O=!0}catch{Ht(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=FE(m,{relative:l}),[z,te,he]=yC(s,w),ye=RC(m,{replace:c,state:h,target:p,preventScrollReset:y,relative:l,viewTransition:_});function ve(we){e&&e(we),we.defaultPrevented||ye(we)}let Oe=N.createElement("a",{...w,...he,href:x||B,onClick:O||a?e:ve,ref:CC(k,te),target:p,"data-discover":!L&&n==="render"?"true":void 0});return z&&!L?N.createElement(N.Fragment,null,Oe,N.createElement(vC,{page:B})):Oe});Ir.displayName="Link";var IC=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:h,children:p,...m},y){let _=Qs(c,{relative:m.relative}),w=ir(),k=N.useContext(ta),{navigator:R,basename:L}=N.useContext(Vt),x=k!=null&&OC(_)&&h===!0,O=R.encodeLocation?R.encodeLocation(_).pathname:_.pathname,B=w.pathname,z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(B=B.toLowerCase(),z=z?z.toLowerCase():null,O=O.toLowerCase()),z&&L&&(z=er(z,L)||z);const te=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let he=B===O||!l&&B.startsWith(O)&&B.charAt(te)==="/",ye=z!=null&&(z===O||!l&&z.startsWith(O)&&z.charAt(O.length)==="/"),ve={isActive:he,isPending:ye,isTransitioning:x},Oe=he?e:void 0,we;typeof s=="function"?we=s(ve):we=[s,he?"active":null,ye?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof a=="function"?a(ve):a;return N.createElement(Ir,{...m,"aria-current":Oe,className:we,ref:y,style:Ue,to:c,viewTransition:h},typeof p=="function"?p(ve):p)});IC.displayName="NavLink";var TC=N.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:a,method:c=Tl,action:h,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:_,...w},k)=>{let R=xC(),L=AC(h,{relative:m}),x=c.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&Fg.test(h),B=z=>{if(p&&p(z),z.defaultPrevented)return;z.preventDefault();let te=z.nativeEvent.submitter,he=(te==null?void 0:te.getAttribute("formmethod"))||c;R(te||z.currentTarget,{fetcherKey:e,method:he,navigate:n,replace:l,state:a,relative:m,preventScrollReset:y,viewTransition:_})};return N.createElement("form",{ref:k,method:x,action:L,onSubmit:s?p:B,...w,"data-discover":!O&&r==="render"?"true":void 0})});TC.displayName="Form";function kC(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ug(r){let e=N.useContext(Ci);return Ne(e,kC(r)),e}function RC(r,{target:e,replace:n,state:s,preventScrollReset:l,relative:a,viewTransition:c}={}){let h=Ys(),p=ir(),m=Qs(r,{relative:a});return N.useCallback(y=>{if(iC(y,e)){y.preventDefault();let _=n!==void 0?n:Ds(p)===Ds(m);h(r,{replace:_,state:s,preventScrollReset:l,relative:a,viewTransition:c})}},[p,h,m,n,s,e,r,l,a,c])}var PC=0,NC=()=>`__${String(++PC)}__`;function xC(){let{router:r}=Ug("useSubmit"),{basename:e}=N.useContext(Vt),n=qE();return N.useCallback(async(s,l={})=>{let{action:a,method:c,encType:h,formData:p,body:m}=lC(s,e);if(l.navigate===!1){let y=l.fetcherKey||NC();await r.fetch(y,n,l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,n])}function AC(r,{relative:e}={}){let{basename:n}=N.useContext(Vt),s=N.useContext(rn);Ne(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Qs(r||".",{relative:e})},c=ir();if(r==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();a.search=y?`?${y}`:""}}return(!r||r===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:_n([n,a.pathname])),Ds(a)}function OC(r,e={}){let n=N.useContext(Ng);Ne(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ug("useViewTransitionState"),l=Qs(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=er(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=er(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ol(l.pathname,c)!=null||Ol(l.pathname,a)!=null}new TextEncoder;var Rr=(r=>(r.ADMIN="ADMIN",r.USER="USER",r))(Rr||{}),fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(r,e){if(!r)throw Ii(e)},Ii=function(r){return new Error("Firebase Database ("+jg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},DC=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],c=r[n++],h=r[n++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,h=c?r[l+1]:0,p=l+2<r.length,m=p?r[l+2]:0,y=a>>2,_=(a&3)<<4|h>>4;let w=(h&15)<<2|m>>6,k=m&63;p||(k=64,c||(w=64)),s.push(n[y],n[_],n[w],n[k])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):DC(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],h=l<r.length?n[r.charAt(l)]:0;++l;const m=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||h==null||m==null||_==null)throw new LC;const w=a<<2|h>>4;if(s.push(w),m!==64){const k=h<<4&240|m>>2;if(s.push(k),_!==64){const R=m<<6&192|_;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class LC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(r){const e=zg(r);return dd.encodeByteArray(e,!0)},Dl=function(r){return Wg(r).replace(/\./g,"")},Ll=function(r){try{return dd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(r){return Hg(void 0,r)}function Hg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bC(n)||(r[n]=Hg(r[n],e[n]));return r}function bC(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=()=>FC().__FIREBASE_DEFAULTS__,jC=()=>{if(typeof process>"u"||typeof fm>"u")return;const r=fm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zC=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ll(r[1]);return e&&JSON.parse(e)},fd=()=>{try{return UC()||jC()||zC()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Bg=r=>{var e,n;return(n=(e=fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},WC=r=>{const e=Bg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Vg=()=>{var r;return(r=fd())===null||r===void 0?void 0:r.config},$g=r=>{var e;return(e=fd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Dl(JSON.stringify(n)),Dl(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function BC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $C(){const r=lt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function GC(){return jg.NODE_ADMIN===!0}function KC(){try{return typeof indexedDB=="object"}catch{return!1}}function qC(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="FirebaseError";class sr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=YC,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?QC(a,s):"Error",h=`${this.serviceName}: ${c} (${l}).`;return new sr(l,h,s)}}function QC(r,e){return r.replace(JC,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const JC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){return JSON.parse(r)}function He(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=Ls(Ll(a[0])||""),n=Ls(Ll(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},XC=function(r){const e=Kg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZC=function(r){const e=Kg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Mc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ml(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function bl(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(hm(a)&&hm(c)){if(!bl(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function hm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ts(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,a]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(a)}}),e}function ks(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^a&(c^h),y=1518500249):(m=a^c^h,y=1859775393):_<60?(m=a&c|h&(a|c),y=2400959708):(m=a^c^h,y=3395469782);const w=(l<<5|l>>>27)+m+p+y+s[_]&4294967295;p=h,h=c,c=(a<<30|a>>>2)&4294967295,a=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<n;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function tS(r,e){const n=new nS(r,e);return n.subscribe.bind(n)}class nS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=vc),l.error===void 0&&(l.error=vc),l.complete===void 0&&(l.complete=vc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function vc(){}function pd(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,j(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},ia=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r){return r&&r._delegate?r._delegate:r}class Nr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ra;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lS(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);s===h&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oS(r){return r===Cr?void 0:r}function lS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const uS={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},cS=ge.INFO,dS={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},fS=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=dS[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let md=class{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=fS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}};const hS=(r,e)=>e.some(n=>r instanceof n);let pm,mm;function pS(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mS(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,bc=new WeakMap,Yg=new WeakMap,wc=new WeakMap,gd=new WeakMap;function gS(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Yn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&qg.set(n,r)}).catch(()=>{}),gd.set(e,r),e}function _S(r){if(bc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});bc.set(r,e)}let Fc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return bc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Yg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function yS(r){Fc=r(Fc)}function vS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Ec(this),e,...n);return Yg.set(s,e.sort?e.sort():[e]),Yn(s)}:mS().includes(r)?function(...e){return r.apply(Ec(this),e),Yn(qg.get(this))}:function(...e){return Yn(r.apply(Ec(this),e))}}function wS(r){return typeof r=="function"?vS(r):(r instanceof IDBTransaction&&_S(r),hS(r,pS())?new Proxy(r,Fc):r)}function Yn(r){if(r instanceof IDBRequest)return gS(r);if(wc.has(r))return wc.get(r);const e=wS(r);return e!==r&&(wc.set(r,e),gd.set(e,r)),e}const Ec=r=>gd.get(r);function ES(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),h=Yn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Yn(c.result),p.oldVersion,p.newVersion,Yn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const CS=["get","getKey","getAll","getAllKeys","count"],SS=["put","add","delete","clear"],Cc=new Map;function gm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=SS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||CS.includes(n)))return;const a=async function(c,...h){const p=this.transaction(c,l?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),l&&p.done]))[0]};return Cc.set(e,a),a}yS(r=>({...r,get:(e,n,s)=>gm(e,n)||r.get(e,n,s),has:(e,n)=>!!gm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function TS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",_m="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new md("@firebase/app"),kS="@firebase/app-compat",RS="@firebase/analytics-compat",PS="@firebase/analytics",NS="@firebase/app-check-compat",xS="@firebase/app-check",AS="@firebase/auth",OS="@firebase/auth-compat",DS="@firebase/database",LS="@firebase/data-connect",MS="@firebase/database-compat",bS="@firebase/functions",FS="@firebase/functions-compat",US="@firebase/installations",jS="@firebase/installations-compat",zS="@firebase/messaging",WS="@firebase/messaging-compat",HS="@firebase/performance",BS="@firebase/performance-compat",VS="@firebase/remote-config",$S="@firebase/remote-config-compat",GS="@firebase/storage",KS="@firebase/storage-compat",qS="@firebase/firestore",YS="@firebase/vertexai",QS="@firebase/firestore-compat",JS="firebase",XS="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",ZS={[Uc]:"fire-core",[kS]:"fire-core-compat",[PS]:"fire-analytics",[RS]:"fire-analytics-compat",[xS]:"fire-app-check",[NS]:"fire-app-check-compat",[AS]:"fire-auth",[OS]:"fire-auth-compat",[DS]:"fire-rtdb",[LS]:"fire-data-connect",[MS]:"fire-rtdb-compat",[bS]:"fire-fn",[FS]:"fire-fn-compat",[US]:"fire-iid",[jS]:"fire-iid-compat",[zS]:"fire-fcm",[WS]:"fire-fcm-compat",[HS]:"fire-perf",[BS]:"fire-perf-compat",[VS]:"fire-rc",[$S]:"fire-rc-compat",[GS]:"fire-gcs",[KS]:"fire-gcs-compat",[qS]:"fire-fst",[QS]:"fire-fst-compat",[YS]:"fire-vertex","fire-js":"fire-js",[JS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Map,eI=new Map,zc=new Map;function ym(r,e){try{r.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function gi(r){const e=r.name;if(zc.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,r);for(const n of Ms.values())ym(n,r);for(const n of eI.values())ym(n,r);return!0}function _d(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function xt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Js("app","Firebase",tI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=XS;function Qg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jc,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=Vg()),!n)throw Qn.create("no-options");const a=Ms.get(l);if(a){if(bl(n,a.options)&&bl(s,a.config))return a;throw Qn.create("duplicate-app",{appName:l})}const c=new aS(l);for(const p of zc.values())c.addComponent(p);const h=new nI(n,s,c);return Ms.set(l,h),h}function Jg(r=jc){const e=Ms.get(r);if(!e&&r===jc&&Vg())return Qg();if(!e)throw Qn.create("no-app",{appName:r});return e}function vm(){return Array.from(Ms.values())}function Jn(r,e,n){var s;let l=(s=ZS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${l}" with version "${e}":`];a&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(h.join(" "));return}gi(new Nr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebase-heartbeat-database",iI=1,bs="firebase-heartbeat-store";let Sc=null;function Xg(){return Sc||(Sc=ES(rI,iI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),Sc}async function sI(r){try{const n=(await Xg()).transaction(bs),s=await n.objectStore(bs).get(Zg(r));return await n.done,s}catch(e){if(e instanceof sr)wn.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function wm(r,e){try{const s=(await Xg()).transaction(bs,"readwrite");await s.objectStore(bs).put(e,Zg(r)),await s.done}catch(n){if(n instanceof sr)wn.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(s.message)}}}function Zg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=1024,lI=30;class aI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Em();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>lI){const c=dI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Em(),{heartbeatsToSend:s,unsentEntries:l}=uI(this._heartbeatsCache.heartbeats),a=Dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return wn.warn(n),""}}}function Em(){return new Date().toISOString().substring(0,10)}function uI(r,e=oI){const n=[];let s=r.slice();for(const l of r){const a=n.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),Cm(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Cm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KC()?qC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Cm(r){return Dl(JSON.stringify({version:2,heartbeats:r})).length}function dI(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r){gi(new Nr("platform-logger",e=>new IS(e),"PRIVATE")),gi(new Nr("heartbeat",e=>new aI(e),"PRIVATE")),Jn(Uc,_m,r),Jn(Uc,_m,"esm2017"),Jn("fire-js","")}fI("");function yd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=e_,t_=new Js("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new md("@firebase/auth");function pI(r,...e){Fl.logLevel<=ge.WARN&&Fl.warn(`Auth (${ki}): ${r}`,...e)}function Rl(r,...e){Fl.logLevel<=ge.ERROR&&Fl.error(`Auth (${ki}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(r,...e){throw vd(r,...e)}function en(r,...e){return vd(r,...e)}function n_(r,e,n){const s=Object.assign(Object.assign({},hI()),{[e]:n});return new Js("auth","Firebase",s).create(e,{appName:r.name})}function yn(r){return n_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return t_.create(r,...e)}function Z(r,e,...n){if(!r)throw vd(e,...n)}function hn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Rl(e),new Error(e)}function En(r,e){r||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function mI(){return Sm()==="http:"||Sm()==="https:"}function Sm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mI()||VC()||"connection"in navigator)?navigator.onLine:!0}function _I(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||Gg()}get(){return gI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(r,e){En(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new Xs(3e4,6e4);function or(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function lr(r,e,n,s,l={}){return i_(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const h=Ti(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return BC()||(m.referrerPolicy="no-referrer"),r_.fetch()(s_(r,r.config.apiHost,n,h),m)})}async function i_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},yI),e);try{const l=new EI(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Cl(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Cl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw Cl(r,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw n_(r,y,m);Bt(r,y)}}catch(l){if(l instanceof sr)throw l;Bt(r,"network-request-failed",{message:String(l)})}}async function Zs(r,e,n,s,l={}){const a=await lr(r,e,n,s,l);return"mfaPendingCredential"in a&&Bt(r,"multi-factor-auth-required",{_serverResponse:a}),a}function s_(r,e,n,s){const l=`${e}${n}?${s}`;return r.config.emulator?wd(r.config,l):`${r.config.apiScheme}://${l}`}function wI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(en(this.auth,"network-request-failed")),vI.get())})}}function Cl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=en(r,e,s);return l.customData._tokenResponse=n,l}function Im(r){return r!==void 0&&r.enterprise!==void 0}class CI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SI(r,e){return lr(r,"GET","/v2/recaptchaConfig",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r,e){return lr(r,"POST","/v1/accounts:delete",e)}async function o_(r,e){return lr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TI(r,e=!1){const n=rt(r),s=await n.getIdToken(e),l=Ed(s);Z(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Rs(Ic(l.auth_time)),issuedAtTime:Rs(Ic(l.iat)),expirationTime:Rs(Ic(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ic(r){return Number(r)*1e3}function Ed(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Ll(n);return l?JSON.parse(l):(Rl("Failed to decode base64 JWT payload"),null)}catch(l){return Rl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Tm(r){const e=Ed(r);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sr&&kI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function kI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Fs(r,o_(n,{idToken:s}));Z(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?l_(a.providerUserInfo):[],h=NI(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(h!=null&&h.length),y=p?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Hc(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function PI(r){const e=rt(r);await Ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NI(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function l_(r){return r.map(e=>{var{providerId:n}=e,s=yd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(r,e){const n=await i_(r,{},async()=>{const s=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=s_(r,l,"/v1/token",`key=${a}`),h=await r._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AI(r,e){return lr(r,"POST","/v2/accounts:revokeToken",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await xI(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,c=new ci;return s&&(Z(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(Z(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(Z(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(r,e){Z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Hc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TI(this,e)}reload(){return PI(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ul(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await Fs(this,II(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,c,h,p,m,y;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,k=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,R=(c=n.photoURL)!==null&&c!==void 0?c:void 0,L=(h=n.tenantId)!==null&&h!==void 0?h:void 0,x=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,O=(m=n.createdAt)!==null&&m!==void 0?m:void 0,B=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:z,emailVerified:te,isAnonymous:he,providerData:ye,stsTokenManager:ve}=n;Z(z&&ve,e,"internal-error");const Oe=ci.fromJSON(this.name,ve);Z(typeof z=="string",e,"internal-error"),Vn(_,e.name),Vn(w,e.name),Z(typeof te=="boolean",e,"internal-error"),Z(typeof he=="boolean",e,"internal-error"),Vn(k,e.name),Vn(R,e.name),Vn(L,e.name),Vn(x,e.name),Vn(O,e.name),Vn(B,e.name);const we=new pn({uid:z,auth:e,email:w,emailVerified:te,displayName:_,isAnonymous:he,photoURL:R,phoneNumber:k,tenantId:L,stsTokenManager:Oe,createdAt:O,lastLoginAt:B});return ye&&Array.isArray(ye)&&(we.providerData=ye.map(Ue=>Object.assign({},Ue))),x&&(we._redirectEventId=x),we}static async _fromIdTokenResponse(e,n,s=!1){const l=new ci;l.updateFromServerResponse(n);const a=new pn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Ul(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Z(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?l_(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),h=new ci;h.updateFromIdToken(s);const p=new pn({uid:l.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new Hc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;function mn(r){En(r instanceof Function,"Expected a class definition");let e=km.get(r);return e?(En(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,km.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const Rm=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(r,e,n){return`firebase:${r}:${e}:${n}`}class di{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=Pl(this.userKey,l.apiKey,a),this.fullPersistenceKey=Pl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new di(mn(Rm),e,s);const l=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=l[0]||mn(Rm);const c=Pl(s,e.config.apiKey,e.name);let h=null;for(const m of n)try{const y=await m._get(c);if(y){const _=pn._fromJSON(e,y);m!==a&&(h=_),a=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new di(a,e,s):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new di(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function u_(r=lt()){return/firefox\//i.test(r)}function c_(r=lt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(r=lt()){return/crios\//i.test(r)}function f_(r=lt()){return/iemobile/i.test(r)}function h_(r=lt()){return/android/i.test(r)}function p_(r=lt()){return/blackberry/i.test(r)}function m_(r=lt()){return/webos/i.test(r)}function Cd(r=lt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OI(r=lt()){var e;return Cd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return $C()&&document.documentMode===10}function g_(r=lt()){return Cd(r)||h_(r)||m_(r)||p_(r)||/windows phone/i.test(r)||f_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(r,e=[]){let n;switch(r){case"Browser":n=Pm(lt());break;case"Worker":n=`${Pm(lt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(r,e={}){return lr(r,"GET","/v2/passwordPolicy",or(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=6;class FI{constructor(e){var n,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:bI,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nm(this),this.idTokenSubscription=new Nm(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await o_(this,{idToken:e}),s=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(yn(this));const n=e?rt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MI(this),n=new FI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await AI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(r){return rt(r)}class Nm{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jI(r){sa=r}function y_(r){return sa.loadJS(r)}function zI(){return sa.recaptchaEnterpriseScript}function WI(){return sa.gapiScript}function HI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class BI{constructor(){this.enterprise=new VI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $I="recaptcha-enterprise",v_="NO_RECAPTCHA";class GI{constructor(e){this.type=$I,this.auth=Mr(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{SI(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new CI(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function l(a,c,h){const p=window.grecaptcha;Im(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(v_)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new BI().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(h=>{if(!n&&Im(window.grecaptcha))l(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=zI();p.length!==0&&(p+=h),y_(p).then(()=>{l(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function xm(r,e,n,s=!1,l=!1){const a=new GI(r);let c;if(l)c=v_;else try{c=await a.verify(n)}catch{c=await a.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Bc(r,e,n,s,l){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await xm(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await xm(r,e,n,n==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(r,e){const n=_d(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(bl(a,e??{}))return l;Bt(l,"already-initialized")}return n.initialize({options:e})}function qI(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function YI(r,e,n){const s=Mr(r);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=w_(e),{host:c,port:h}=QI(e),p=h===null?"":`:${h}`;s.config.emulator={url:`${a}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})}),JI()}function w_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function QI(r){const e=w_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:Am(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Am(c)}}}function Am(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function JI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function XI(r,e){return lr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(r,e){return Zs(r,"POST","/v1/accounts:signInWithPassword",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(r,e){return Zs(r,"POST","/v1/accounts:signInWithEmailLink",or(r,e))}async function tT(r,e){return Zs(r,"POST","/v1/accounts:signInWithEmailLink",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Sd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Us(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,n,"signInWithPassword",ZI);case"emailLink":return eT(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,s,"signUpPassword",XI);case"emailLink":return tT(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(r,e){return Zs(r,"POST","/v1/accounts:signInWithIdp",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="http://localhost";class xr extends Sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=yd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new xr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return fi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fi(e,n)}buildRequest(){const e={requestUri:nT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iT(r){const e=Ts(ks(r)).link,n=e?Ts(ks(e)).deep_link_id:null,s=Ts(ks(r)).deep_link_id;return(s?Ts(ks(s)).link:null)||s||n||e||r}class Id{constructor(e){var n,s,l,a,c,h;const p=Ts(ks(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,_=rT((l=p.mode)!==null&&l!==void 0?l:null);Z(m&&y&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=y,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=iT(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Id.parseLink(n);return Z(s,"argument-error"),Us._fromEmailAndCode(e,s.code,s.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends eo{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends eo{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends eo{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(r,e){return Zs(r,"POST","/v1/accounts:signUp",or(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await pn._fromIdTokenResponse(e,s,l),c=Om(s);return new Ar({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Om(s);return new Ar({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Om(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends sr{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new jl(e,n,s,l)}}function C_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(r,a,e,s):a})}async function oT(r,e,n=!1){const s=await Fs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ar._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(r,e,n=!1){const{auth:s}=r;if(xt(s.app))return Promise.reject(yn(s));const l="reauthenticate";try{const a=await Fs(r,C_(s,l,e,r),n);Z(a.idToken,s,"internal-error");const c=Ed(a.idToken);Z(c,s,"internal-error");const{sub:h}=c;return Z(r.uid===h,s,"user-mismatch"),Ar._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Bt(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(r,e,n=!1){if(xt(r.app))return Promise.reject(yn(r));const s="signIn",l=await C_(r,s,e),a=await Ar._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}async function aT(r,e){return S_(Mr(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(r){const e=Mr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uT(r,e,n){if(xt(r.app))return Promise.reject(yn(r));const s=Mr(r),c=await Bc(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sT).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&I_(r),p}),h=await Ar._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function cT(r,e,n){return xt(r.app)?Promise.reject(yn(r)):aT(rt(r),Ri.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&I_(r),s})}function dT(r,e,n,s){return rt(r).onIdTokenChanged(e,n,s)}function fT(r,e,n){return rt(r).beforeAuthStateChanged(e,n)}function hT(r,e,n,s){return rt(r).onAuthStateChanged(e,n,s)}function pT(r){return rt(r).signOut()}const zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=1e3,gT=10;class k_ extends T_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);DI()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,gT):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const _T=k_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends T_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R_.type="SESSION";const P_=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const h=Array.from(c).map(async m=>m(n.origin,a)),p=await yT(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const m=Td("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(_){const w=_;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function wT(r){tn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function ET(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CT(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ST(){return N_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebaseLocalStorageDb",IT=1,Wl="firebaseLocalStorage",A_="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(r,e){return r.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function TT(){const r=indexedDB.deleteDatabase(x_);return new to(r).toPromise()}function Vc(){const r=indexedDB.open(x_,IT);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Wl,{keyPath:A_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Wl)?e(s):(s.close(),await TT(),e(await Vc()))})})}async function Dm(r,e,n){const s=la(r,!0).put({[A_]:e,value:n});return new to(s).toPromise()}async function kT(r,e){const n=la(r,!1).get(e),s=await new to(n).toPromise();return s===void 0?null:s.value}function Lm(r,e){const n=la(r,!0).delete(e);return new to(n).toPromise()}const RT=800,PT=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>PT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(ST()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ET(),!this.activeServiceWorker)return;this.sender=new vT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await Dm(e,zl,"1"),await Lm(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=la(l,!1).getAll();return new to(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const NT=O_;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(r,e){return e?mn(e):(Z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AT(r){return S_(r.auth,new kd(r),r.bypassAuthState)}function OT(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),lT(n,new kd(r),r.bypassAuthState)}async function DT(r){const{auth:e,user:n}=r;return Z(n,e,"internal-error"),oT(n,new kd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AT;case"linkViaPopup":case"linkViaRedirect":return DT;case"reauthViaPopup":case"reauthViaRedirect":return OT;default:Bt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=new Xs(2e3,1e4);class ai extends D_{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,ai.currentPopupAction&&ai.currentPopupAction.cancel(),ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LT.get())};e()}}ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="pendingRedirect",Nl=new Map;class bT extends D_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Nl.get(this.auth._key());if(!e){try{const s=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Nl.set(this.auth._key(),e)}return this.bypassAuthState||Nl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FT(r,e){const n=zT(e),s=jT(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function UT(r,e){Nl.set(r._key(),e)}function jT(r){return mn(r._redirectPersistence)}function zT(r){return Pl(MT,r.config.apiKey,r.name)}async function WT(r,e,n=!1){if(xt(r.app))return Promise.reject(yn(r));const s=Mr(r),l=xT(s,e),c=await new bT(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=10*60*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!L_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(en(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mm(e))}saveEventToCache(e){this.cachedEventUids.add(Mm(e)),this.lastProcessedEventTime=Date.now()}}function Mm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function L_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(r,e={}){return lr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KT=/^https?/;async function qT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await $T(r);for(const n of e)try{if(YT(n))return}catch{}Bt(r,"unauthorized-domain")}function YT(r){const e=Wc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!KT.test(n))return!1;if(GT.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new Xs(3e4,6e4);function bm(){const r=tn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function JT(r){return new Promise((e,n)=>{var s,l,a;function c(){bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bm(),n(en(r,"network-request-failed"))},timeout:QT.get()})}if(!((l=(s=tn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=tn().gapi)===null||a===void 0)&&a.load)c();else{const h=HI("iframefcb");return tn()[h]=()=>{gapi.load?c():n(en(r,"network-request-failed"))},y_(`${WI()}?onload=${h}`).catch(p=>n(p))}}).catch(e=>{throw xl=null,e})}let xl=null;function XT(r){return xl=xl||JT(r),xl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new Xs(5e3,15e3),ek="__/auth/iframe",tk="emulator/auth/iframe",nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(r){const e=r.config;Z(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?wd(e,tk):`https://${r.config.authDomain}/${ek}`,s={apiKey:e.apiKey,appName:r.name,v:ki},l=rk.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ti(s).slice(1)}`}async function sk(r){const e=await XT(r),n=tn().gapi;return Z(n,r,"internal-error"),e.open({where:document.body,url:ik(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nk,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=en(r,"network-request-failed"),h=tn().setTimeout(()=>{a(c)},ZT.get());function p(){tn().clearTimeout(h),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lk=500,ak=600,uk="_blank",ck="http://localhost";class Fm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dk(r,e,n,s=lk,l=ak){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},ok),{width:s.toString(),height:l.toString(),top:a,left:c}),m=lt().toLowerCase();n&&(h=d_(m)?uk:n),u_(m)&&(e=e||ck,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[k,R])=>`${w}${k}=${R},`,"");if(OI(m)&&h!=="_self")return fk(e||"",h),new Fm(null);const _=window.open(e||"",h,y);Z(_,r,"popup-blocked");try{_.focus()}catch{}return new Fm(_)}function fk(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="__/auth/handler",pk="emulator/auth/handler",mk=encodeURIComponent("fac");async function Um(r,e,n,s,l,a){Z(r.config.authDomain,r,"auth-domain-config-required"),Z(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ki,eventId:l};if(e instanceof E_){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Mc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof eo){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}r.tenantId&&(c.tid=r.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const p=await r._getAppCheckToken(),m=p?`#${mk}=${encodeURIComponent(p)}`:"";return`${gk(r)}?${Ti(h).slice(1)}${m}`}function gk({config:r}){return r.emulator?wd(r,pk):`https://${r.authDomain}/${hk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=WT,this._overrideRedirectResult=UT}async _openPopup(e,n,s,l){var a;En((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Um(e,n,s,Wc(),l);return dk(e,c,Td())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await Um(e,n,s,Wc(),l);return wT(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(En(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sk(e),s=new BT(e);return n.register("authEvent",l=>(Z(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[Tc];c!==void 0&&n(!!c),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||c_()||Cd()}}const yk=_k;var jm="@firebase/auth",zm="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ek(r){gi(new Nr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;Z(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(r)},m=new UI(s,l,a,p);return qI(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Nr("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(s=>new vk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(jm,zm,wk(r)),Jn(jm,zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=5*60,Sk=$g("authIdTokenMaxAge")||Ck;let Wm=null;const Ik=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Sk)return;const l=n==null?void 0:n.token;Wm!==l&&(Wm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Tk(r=Jg()){const e=_d(r,"auth");if(e.isInitialized())return e.getImmediate();const n=KI(r,{popupRedirectResolver:yk,persistence:[NT,_T,P_]}),s=$g("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=Ik(a.toString());fT(n,c,()=>c(n.currentUser)),dT(n,h=>c(h))}}const l=Bg("auth");return l&&YI(n,`http://${l}`),n}function kk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}jI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=en("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",kk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ek("Browser");var Rk="firebase",Pk="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(Rk,Pk,"app");const Nk={apiKey:"AIzaSyCNEJDVMHQY8BnaO2ZKkGBQbvoEHXhZBeo",authDomain:"diri-9ed53.firebaseapp.com",databaseURL:"https://diri-9ed53-default-rtdb.firebaseio.com",projectId:"diri-9ed53",storageBucket:"diri-9ed53.firebasestorage.app",messagingSenderId:"710505225558",appId:"1:710505225558:web:a1489ff5c4b458c28b4af7",measurementId:"G-4SMWBK22RK"},Hl=vm().length?vm()[0]:Qg(Nk);var Hm={};const Bm="@firebase/database",Vm="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M_="";function xk(r){M_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ak(e)}}catch{}return new Ok},Tr=b_("localStorage"),Dk=b_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new md("@firebase/database"),Lk=function(){let r=1;return function(){return r++}}(),F_=function(r){const e=iS(r),n=new eS;n.update(e);const s=n.digest();return dd.encodeByteArray(s)},no=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=no.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Ps=null,$m=!0;const Mk=function(r,e){j(!0,"Can't turn on custom loggers persistently."),hi.logLevel=ge.VERBOSE,Ps=hi.log.bind(hi)},nt=function(...r){if($m===!0&&($m=!1,Ps===null&&Dk.get("logging_enabled")===!0&&Mk()),Ps){const e=no.apply(null,r);Ps(e)}},ro=function(r){return function(...e){nt(r,...e)}},$c=function(...r){const e="FIREBASE INTERNAL ERROR: "+no(...r);hi.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${no(...r)}`;throw hi.error(e),new Error(e)},gt=function(...r){const e="FIREBASE WARNING: "+no(...r);hi.warn(e)},bk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},U_=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},Fk=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Or="[MAX_NAME]",Pi=function(r,e){if(r===e)return 0;if(r===_i||e===Or)return-1;if(e===_i||r===Or)return 1;{const n=Gm(r),s=Gm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},Uk=function(r,e){return r===e?0:r<e?-1:1},vs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},Rd=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=Rd(r[e[s]]);return n+="}",n},j_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function _t(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const z_=function(r){j(!U_(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,c,h,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=h+s,c=Math.round(r*Math.pow(2,n-h)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(l?1:0),m.reverse();const y=m.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},jk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Wk(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const Hk=new RegExp("^-?(0*)\\d{1,10}$"),Bk=-2147483648,Vk=2147483647,Gm=function(r){if(Hk.test(r)){const e=Number(r);if(e>=Bk&&e<=Vk)return e}return null},Ni=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},$k=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ns=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,xt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class Al{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Al.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="5",W_="v",H_="s",B_="r",V_="f",$_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G_="ls",K_="p",Gc="ac",q_="websocket",Y_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,s,l,a=!1,c="",h=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qk(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function J_(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===q_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Y_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qk(r)&&(n.ns=r.namespace);const l=[];return _t(n,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return MC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={},Rc={};function Nd(r){const e=r.toString();return kc[e]||(kc[e]=new Yk),kc[e]}function Qk(r,e){const n=r.toString();return Rc[n]||(Rc[n]=e()),Rc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ni(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="start",Xk="close",Zk="pLPCommand",e0="pRTLPCB",X_="id",Z_="pw",ey="ser",t0="cb",n0="seg",r0="ts",i0="d",s0="dframe",ty=1870,ny=30,o0=ty-ny,l0=25e3,a0=3e4;class ui{constructor(e,n,s,l,a,c,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=Nd(n),this.urlFn=p=>(this.appCheckToken&&(p[Gc]=this.appCheckToken),J_(n,Y_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Jk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(a0)),Fk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xd((...a)=>{const[c,h,p,m,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Km)this.id=h,this.password=p;else if(c===Xk)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Km]="t",s[ey]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[t0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[W_]=Pd,this.transportSessionId&&(s[H_]=this.transportSessionId),this.lastSessionId&&(s[G_]=this.lastSessionId),this.applicationId&&(s[K_]=this.applicationId),this.appCheckToken&&(s[Gc]=this.appCheckToken),typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(s[B_]=V_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jk()&&!zk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wg(n),l=j_(s,o0);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[s0]="t",s[X_]=e,s[Z_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lk(),window[Zk+this.uniqueCallbackIdentifier]=e,window[e0+this.uniqueCallbackIdentifier]=n,this.myIFrame=xd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){nt("frame writing exception"),h.stack&&nt(h.stack),nt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[X_]=this.myID,e[Z_]=this.myPW,e[ey]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ny+s.length<=ty;){const c=this.pendingSegs.shift();s=s+"&"+n0+l+"="+c.seg+"&"+r0+l+"="+c.ts+"&"+i0+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(l0)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=16384,c0=45e3;let Bl=null;typeof MozWebSocket<"u"?Bl=MozWebSocket:typeof WebSocket<"u"&&(Bl=WebSocket);class Zt{constructor(e,n,s,l,a,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=Nd(n),this.connURL=Zt.connectionURL_(n,c,h,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const c={};return c[W_]=Pd,typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(c[B_]=V_),n&&(c[H_]=n),s&&(c[G_]=s),l&&(c[Gc]=l),a&&(c[K_]=a),J_(e,q_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let s;GC(),this.mySock=new Bl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Bl!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=j_(n,u0);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static get ALL_TRANSPORTS(){return[ui,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Zt.isAvailable();let s=n&&!Zt.previouslyFailed();if(e.webSocketOnly&&(n||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Zt];else{const l=this.transports_=[];for(const a of js.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}js.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=6e4,f0=5e3,h0=10*1024,p0=100*1024,Pc="t",qm="d",m0="s",Ym="r",g0="e",Qm="o",Jm="a",Xm="n",Zm="p",_0="h";class y0{constructor(e,n,s,l,a,c,h,p,m,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new js(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>p0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>h0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pc in e){const n=e[Pc];n===Jm?this.upgradeIfSecondaryHealthy_():n===Ym?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vs(Pc,e);if(qm in e){const s=e[qm];if(n===_0){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===m0?this.onConnectionShutdown_(s):n===Ym?this.onReset_(s):n===g0?$c("Server Error: "+s):n===Qm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$c("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pd!==s&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(f0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends iy{static getInstance(){return new Vl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=32,tg=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new _e("")}function le(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function Se(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new _e(r.pieces_,e)}function sy(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function v0(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function oy(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function ly(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new _e(e,0)}function Be(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new _e(n,0)}function oe(r){return r.pieceNum_>=r.pieces_.length}function ot(r,e){const n=le(r),s=le(e);if(n===null)return e;if(n===s)return ot(Se(r),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function ay(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function jt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class w0{constructor(e,n){this.errorPrefix_=n,this.parts_=oy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ia(this.parts_[s]);uy(this)}}function E0(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ia(e),uy(r)}function C0(r){const e=r.parts_.pop();r.byteLength_-=ia(e),r.parts_.length>0&&(r.byteLength_-=1)}function uy(r){if(r.byteLength_>tg)throw new Error(r.errorPrefix_+"has a key path longer than "+tg+" bytes ("+r.byteLength_+").");if(r.parts_.length>eg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eg+") or object contains a cycle "+Sr(r))}function Sr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends iy{static getInstance(){return new Ad}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=1e3,S0=60*5*1e3,ng=30*1e3,I0=1.3,T0=3e4,k0="server_kill",rg=3;class vn extends ry{constructor(e,n,s,l,a,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=vn.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=S0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(He(a)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new ra,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const p=h.d,m=h.s;vn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ng)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$c("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>T0&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*I0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(_){j(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,h=new y0(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,k=>{gt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(k0)},a))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&gt(_),p())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mc(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>Rd(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rg&&(this.reconnectDelay_=ng,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+M_.replace(/\./g,"-")]=1,hd()?e["framework.cordova"]=1:Gg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vl.getInstance().currentlyOnline();return Mc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ie(_i,e),l=new ie(_i,n);return this.compare(s,l)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;class cy extends aa{static get __EMPTY_NODE(){return Sl}static set __EMPTY_NODE(e){Sl=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Or,Sl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,Sl)}toString(){return".key"}}const pi=new cy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??qe.RED,this.left=l??mt.EMPTY_NODE,this.right=a??mt.EMPTY_NODE}copy(e,n,s,l,a){return new qe(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class R0{copy(e,n,s,l,a){return this}insert(e,n,s){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new R0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(r,e){return Pi(r.name,e.name)}function Od(r,e){return Pi(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;function N0(r){Kc=r}const dy=function(r){return typeof r=="number"?"number:"+z_(r):"string:"+r},fy=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else j(r===Kc||r.isEmpty(),"priority of unexpected type.");j(r===Kc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig;class Ke{static set __childrenNodeConstructor(e){ig=e}static get __childrenNodeConstructor(){return ig}constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:le(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=le(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=z_(this.value_):e+=this.value_,this.lazyHash_=F_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ke.VALUE_TYPE_ORDER.indexOf(n),a=Ke.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hy,py;function x0(r){hy=r}function A0(r){py=r}class O0 extends aa{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Pi(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Or,new Ke("[PRIORITY-POST]",py))}makePost(e,n){const s=hy(e);return new ie(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new O0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=Math.log(2);class L0{constructor(e){const n=a=>parseInt(Math.log(a)/D0,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(r,e,n,s){r.sort(e);const l=function(p,m){const y=m-p;let _,w;if(y===0)return null;if(y===1)return _=r[p],w=n?n(_):_,new qe(w,_.node,qe.BLACK,null,null);{const k=parseInt(y/2,10)+p,R=l(p,k),L=l(k+1,m);return _=r[k],w=n?n(_):_,new qe(w,_.node,qe.BLACK,R,L)}},a=function(p){let m=null,y=null,_=r.length;const w=function(R,L){const x=_-R,O=_;_-=R;const B=l(x+1,O),z=r[x],te=n?n(z):z;k(new qe(te,z.node,L,null,B))},k=function(R){m?(m.left=R,m=R):(y=R,m=R)};for(let R=0;R<p.count;++R){const L=p.nextBitIsOne(),x=Math.pow(2,p.count-(R+1));L?w(x,qe.BLACK):(w(x,qe.BLACK),w(x,qe.RED))}return y},c=new L0(r.length),h=a(c);return new mt(s||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;const Es={};class gn{static get Default(){return j(Me,"ChildrenNode.ts has not been loaded"),Nc=Nc||new gn({".priority":Es},{".priority":Me}),Nc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(ie.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let h;l?h=$l(s,e.getCompare()):h=Es;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=h,new gn(y,m)}addToIndexes(e,n){const s=Ml(this.indexes_,(l,a)=>{const c=mi(this.indexSet_,a);if(j(c,"Missing index implementation for "+a),l===Es)if(c.isDefinedOn(e.node)){const h=[],p=n.getIterator(ie.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),$l(h,c.getCompare())}else return Es;else{const h=n.get(e.name);let p=l;return h&&(p=p.remove(new ie(e.name,h))),p.insert(e,e.node)}});return new gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ml(this.indexes_,l=>{if(l===Es)return l;{const a=n.get(e.name);return a?l.remove(new ie(e.name,a)):l}});return new gn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;class X{static get EMPTY_NODE(){return Cs||(Cs=new X(new mt(Od),null,gn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&fy(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Cs}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Cs:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ie(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Cs:this.priorityNode_;return new X(l,c,a)}}updateChild(e,n){const s=le(e);if(s===null)return n;{j(le(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(Me,(c,h)=>{n[c]=h.val(e),s++,a&&X.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const h in n)c[h]=n[h];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dy(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":F_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new ie(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ie.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),l=n.getIterator(Me);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class M0 extends X{constructor(){super(new mt(Od),X.EMPTY_NODE,gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const io=new M0;Object.defineProperties(ie,{MIN:{value:new ie(_i,X.EMPTY_NODE)},MAX:{value:new ie(Or,io)}});cy.__EMPTY_NODE=X.EMPTY_NODE;Ke.__childrenNodeConstructor=X;N0(io);A0(io);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=!0;function Ye(r,e=null){if(r===null)return X.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ke(n,Ye(e))}if(!(r instanceof Array)&&b0){const n=[];let s=!1;if(_t(r,(c,h)=>{if(c.substring(0,1)!=="."){const p=Ye(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ie(c,p)))}}),n.length===0)return X.EMPTY_NODE;const a=$l(n,P0,c=>c.name,Od);if(s){const c=$l(n,Me.getCompare());return new X(a,Ye(e),new gn({".priority":c},{".priority":Me}))}else return new X(a,Ye(e),gn.Default)}else{let n=X.EMPTY_NODE;return _t(r,(s,l)=>{if(Sn(r,s)&&s.substring(0,1)!=="."){const a=Ye(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(Ye(e))}}x0(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0 extends aa{constructor(e){super(),this.indexPath_=e,j(!oe(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Pi(e.name,n.name):a}makePost(e,n){const s=Ye(e),l=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new ie(n,l)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,io);return new ie(Or,e)}toString(){return oy(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends aa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const s=Ye(e);return new ie(n,s)}toString(){return".value"}}const j0=new U0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function zs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ws(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function z0(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.index_=e}updateChild(e,n,s,l,a,c){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(l).equals(s.getChild(l))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(zs(n,h)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(yi(n,s)):c.trackChildChange(Ws(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(l,a)=>{n.hasChild(l)||s.trackChildChange(zs(l,a))}),n.isLeafNode()||n.forEachChild(Me,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(Ws(l,a,c))}else s.trackChildChange(yi(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.indexedFilter_=new Dd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hs.getStartPost_(e),this.endPost_=Hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,c){return this.matches(new ie(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(X.EMPTY_NODE);const a=this;return n.forEachChild(Me,(c,h)=>{a.matches(new ie(c,h))||(l=l.updateImmediateChild(c,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,c){return this.rangedFilter_.matches(new ie(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=X.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))l=l.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(X.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:l=l.updateImmediateChild(h.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,k)=>_(k,w)}else c=this.index_.getCompare();const h=e;j(h.numChildren()===this.limit_,"");const p=new ie(n,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(h.hasChild(n)){const _=h.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===n||h.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const k=w==null?1:c(w,p);if(y&&!s.isEmpty()&&k>=0)return a!=null&&a.trackChildChange(Ws(n,s,_)),h.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(zs(n,_));const L=h.updateImmediateChild(n,X.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(yi(w.name,w.node)),L.updateImmediateChild(w.name,w.node)):L}}else return s.isEmpty()?e:y&&c(m,p)>=0?(a!=null&&(a.trackChildChange(zs(m.name,m.node)),a.trackChildChange(yi(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(m.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function H0(r){return r.loadsAllData()?new Dd(r.getIndex()):r.hasLimit()?new W0(r):new Hs(r)}function sg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Me?n="$priority":r.index_===j0?n="$value":r.index_===pi?n="$key":(j(r.index_ instanceof F0,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function og(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Me&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends ry{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=ro("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Gl.getListenId_(e,s),h={};this.listens_[c]=h;const p=sg(e._queryParams);this.restRequest_(a+".json",p,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(a,_,!1,s),mi(this.listens_,c)===h){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",l(w,null)}})}unlisten(e,n){const s=Gl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sg(e._queryParams),s=e._path.toString(),l=new ra;return this.restRequest_(s+".json",n,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(s,h,!1,null),l.resolve(h)):l.reject(new Error(h))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=Ls(h.responseText)}catch{gt("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&gt("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){return{value:null,children:new Map}}function gy(r,e,n){if(oe(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=le(e);r.children.has(s)||r.children.set(s,Kl());const l=r.children.get(s);e=Se(e),gy(l,e,n)}}function qc(r,e,n){r.value!==null?n(e,r.value):V0(r,(s,l)=>{const a=new _e(e.toString()+"/"+s);qc(l,a,n)})}function V0(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_t(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=10*1e3,G0=30*1e3,K0=5*60*1e3;class q0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $0(e);const s=lg+(G0-lg)*Math.random();Ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;_t(e,(l,a)=>{a>0&&Sn(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),Ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*K0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zt||(zt={}));function _y(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=zt.ACK_USER_WRITE,this.source=_y()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new ql(fe(),n,this.revert)}}else return j(le(this.path)===e,"operationForChild called for unrelated child."),new ql(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=zt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Bs(this.source,fe()):new Bs(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=zt.OVERWRITE}operationForChild(e){return oe(this.path)?new Dr(this.source,fe(),this.snap.getImmediateChild(e)):new Dr(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=zt.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Dr(this.source,fe(),n.value):new Vs(this.source,fe(),n)}else return j(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vs(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Q0(r,e,n,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(z0(c.childName,c.snapshotNode))}),Ss(r,l,"child_removed",e,s,n),Ss(r,l,"child_added",e,s,n),Ss(r,l,"child_moved",a,s,n),Ss(r,l,"child_changed",e,s,n),Ss(r,l,"value",e,s,n),l}function Ss(r,e,n,s,l,a){const c=s.filter(h=>h.type===n);c.sort((h,p)=>X0(r,h,p)),c.forEach(h=>{const p=J0(r,h,a);l.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,r.query_))})})}function J0(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function X0(r,e,n){if(e.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const s=new ie(e.childName,e.snapshotNode),l=new ie(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(r,e){return{eventCache:r,serverCache:e}}function xs(r,e,n,s){return ua(new nr(e,n,s),r.serverCache)}function yy(r,e,n,s){return ua(r.eventCache,new nr(e,n,s))}function Yl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Lr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;const Z0=()=>(xc||(xc=new mt(Uk)),xc);class ke{static fromObject(e){let n=new ke(null);return _t(e,(s,l)=>{n=n.set(new _e(s),l)}),n}constructor(e,n=Z0()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(oe(e))return null;{const s=le(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(Se(e),n);return a!=null?{path:Be(new _e(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=le(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new ke(null)}}set(e,n){if(oe(e))return new ke(n,this.children);{const s=le(e),a=(this.children.get(s)||new ke(null)).set(Se(e),n),c=this.children.insert(s,a);return new ke(this.value,c)}}remove(e){if(oe(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=le(e),s=this.children.get(n);if(s){const l=s.remove(Se(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new ke(null):new ke(this.value,a)}else return this}}get(e){if(oe(e))return this.value;{const n=le(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(oe(e))return n;{const s=le(e),a=(this.children.get(s)||new ke(null)).setTree(Se(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new ke(this.value,c)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(Be(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(oe(e))return null;{const a=le(e),c=this.children.get(a);return c?c.findOnPath_(Se(e),Be(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(oe(e))return this;{this.value&&s(n,this.value);const l=le(e),a=this.children.get(l);return a?a.foreachOnPath_(Se(e),Be(n,l),s):new ke(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.writeTree_=e}static empty(){return new Wt(new ke(null))}}function As(r,e,n){if(oe(e))return new Wt(new ke(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=ot(l,e);return a=a.updateChild(c,n),new Wt(r.writeTree_.set(l,a))}else{const l=new ke(n),a=r.writeTree_.setTree(e,l);return new Wt(a)}}}function ag(r,e,n){let s=r;return _t(n,(l,a)=>{s=As(s,Be(e,l),a)}),s}function ug(r,e){if(oe(e))return Wt.empty();{const n=r.writeTree_.setTree(e,new ke(null));return new Wt(n)}}function Yc(r,e){return br(r,e)!=null}function br(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function cg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,l)=>{e.push(new ie(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ie(s,l.value))}),e}function Xn(r,e){if(oe(e))return r;{const n=br(r,e);return n!=null?new Wt(new ke(n)):new Wt(r.writeTree_.subtree(e))}}function Qc(r){return r.writeTree_.isEmpty()}function vi(r,e){return vy(fe(),r.writeTree_,e)}function vy(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(j(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=vy(Be(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Be(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(r,e){return Sy(e,r)}function eR(r,e,n,s,l){j(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=As(r.visibleWrites,e,n)),r.lastWriteId=s}function tR(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function nR(r,e){const n=r.allWrites.findIndex(h=>h.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const h=r.allWrites[c];h.visible&&(c>=n&&rR(h,s.path)?l=!1:jt(s.path,h.path)&&(a=!0)),c--}if(l){if(a)return iR(r),!0;if(s.snap)r.visibleWrites=ug(r.visibleWrites,s.path);else{const h=s.children;_t(h,p=>{r.visibleWrites=ug(r.visibleWrites,Be(s.path,p))})}return!0}else return!1}function rR(r,e){if(r.snap)return jt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&jt(Be(r.path,n),e))return!0;return!1}function iR(r){r.visibleWrites=wy(r.allWrites,sR,fe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function sR(r){return r.visible}function wy(r,e,n){let s=Wt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let h;if(a.snap)jt(n,c)?(h=ot(n,c),s=As(s,h,a.snap)):jt(c,n)&&(h=ot(c,n),s=As(s,fe(),a.snap.getChild(h)));else if(a.children){if(jt(n,c))h=ot(n,c),s=ag(s,h,a.children);else if(jt(c,n))if(h=ot(c,n),oe(h))s=ag(s,fe(),a.children);else{const p=mi(a.children,le(h));if(p){const m=p.getChild(Se(h));s=As(s,fe(),m)}}}else throw Ii("WriteRecord should have .snap or .children")}}return s}function Ey(r,e,n,s,l){if(!s&&!l){const a=br(r.visibleWrites,e);if(a!=null)return a;{const c=Xn(r.visibleWrites,e);if(Qc(c))return n;if(n==null&&!Yc(c,fe()))return null;{const h=n||X.EMPTY_NODE;return vi(c,h)}}}else{const a=Xn(r.visibleWrites,e);if(!l&&Qc(a))return n;if(!l&&n==null&&!Yc(a,fe()))return null;{const c=function(m){return(m.visible||l)&&(!s||!~s.indexOf(m.writeId))&&(jt(m.path,e)||jt(e,m.path))},h=wy(r.allWrites,c,e),p=n||X.EMPTY_NODE;return vi(h,p)}}}function oR(r,e,n){let s=X.EMPTY_NODE;const l=br(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Me,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=Xn(r.visibleWrites,e);return n.forEachChild(Me,(c,h)=>{const p=vi(Xn(a,new _e(c)),h);s=s.updateImmediateChild(c,p)}),cg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=Xn(r.visibleWrites,e);return cg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function lR(r,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=Be(e,n);if(Yc(r.visibleWrites,a))return null;{const c=Xn(r.visibleWrites,a);return Qc(c)?l.getChild(n):vi(c,l.getChild(n))}}function aR(r,e,n,s){const l=Be(e,n),a=br(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=Xn(r.visibleWrites,l);return vi(c,s.getNode().getImmediateChild(n))}else return null}function uR(r,e){return br(r.visibleWrites,e)}function cR(r,e,n,s,l,a,c){let h;const p=Xn(r.visibleWrites,e),m=br(p,fe());if(m!=null)h=m;else if(n!=null)h=vi(p,n);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),w=a?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let k=w.getNext();for(;k&&y.length<l;)_(k,s)!==0&&y.push(k),k=w.getNext();return y}else return[]}function dR(){return{visibleWrites:Wt.empty(),allWrites:[],lastWriteId:-1}}function Ql(r,e,n,s){return Ey(r.writeTree,r.treePath,e,n,s)}function Fd(r,e){return oR(r.writeTree,r.treePath,e)}function dg(r,e,n,s){return lR(r.writeTree,r.treePath,e,n,s)}function Jl(r,e){return uR(r.writeTree,Be(r.treePath,e))}function fR(r,e,n,s,l,a){return cR(r.writeTree,r.treePath,e,n,s,l,a)}function Ud(r,e,n){return aR(r.writeTree,r.treePath,e,n)}function Cy(r,e){return Sy(Be(r.treePath,e),r.writeTree)}function Sy(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,Ws(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,zs(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,Ws(s,e.snapshotNode,l.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Iy=new pR;class jd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ud(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),a=fR(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(r){return{filter:r}}function gR(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function _R(r,e,n,s,l){const a=new hR;let c,h;if(n.type===zt.OVERWRITE){const m=n;m.source.fromUser?c=Jc(r,e,m.path,m.snap,s,l,a):(j(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!oe(m.path),c=Xl(r,e,m.path,m.snap,s,l,h,a))}else if(n.type===zt.MERGE){const m=n;m.source.fromUser?c=vR(r,e,m.path,m.children,s,l,a):(j(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Xc(r,e,m.path,m.children,s,l,h,a))}else if(n.type===zt.ACK_USER_WRITE){const m=n;m.revert?c=CR(r,e,m.path,s,l,a):c=wR(r,e,m.path,m.affectedTree,s,l,a)}else if(n.type===zt.LISTEN_COMPLETE)c=ER(r,e,n.path,s,a);else throw Ii("Unknown operation type: "+n.type);const p=a.getChanges();return yR(e,c,p),{viewCache:c,changes:p}}function yR(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Yl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(my(Yl(e)))}}function Ty(r,e,n,s,l,a){const c=e.eventCache;if(Jl(s,n)!=null)return e;{let h,p;if(oe(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Lr(e),y=m instanceof X?m:X.EMPTY_NODE,_=Fd(s,y);h=r.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const m=Ql(s,Lr(e));h=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=le(n);if(m===".priority"){j(tr(n)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const _=dg(s,n,y,p);_!=null?h=r.filter.updatePriority(y,_):h=c.getNode()}else{const y=Se(n);let _;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=dg(s,n,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(m).updateChild(y,w):_=c.getNode().getImmediateChild(m)}else _=Ud(s,m,e.serverCache);_!=null?h=r.filter.updateChild(c.getNode(),m,_,y,l,a):h=c.getNode()}}return xs(e,h,c.isFullyInitialized()||oe(n),r.filter.filtersNodes())}}function Xl(r,e,n,s,l,a,c,h){const p=e.serverCache;let m;const y=c?r.filter:r.filter.getIndexedFilter();if(oe(n))m=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(n,s);m=y.updateFullNode(p.getNode(),k,null)}else{const k=le(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const R=Se(n),x=p.getNode().getImmediateChild(k).updateChild(R,s);k===".priority"?m=y.updatePriority(p.getNode(),x):m=y.updateChild(p.getNode(),k,x,R,Iy,null)}const _=yy(e,m,p.isFullyInitialized()||oe(n),y.filtersNodes()),w=new jd(l,_,a);return Ty(r,_,n,l,w,h)}function Jc(r,e,n,s,l,a,c){const h=e.eventCache;let p,m;const y=new jd(l,e,a);if(oe(n))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=xs(e,m,!0,r.filter.filtersNodes());else{const _=le(n);if(_===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=xs(e,m,h.isFullyInitialized(),h.isFiltered());else{const w=Se(n),k=h.getNode().getImmediateChild(_);let R;if(oe(w))R=s;else{const L=y.getCompleteChild(_);L!=null?sy(w)===".priority"&&L.getChild(ly(w)).isEmpty()?R=L:R=L.updateChild(w,s):R=X.EMPTY_NODE}if(k.equals(R))p=e;else{const L=r.filter.updateChild(h.getNode(),_,R,w,y,c);p=xs(e,L,h.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function fg(r,e){return r.eventCache.isCompleteForChild(e)}function vR(r,e,n,s,l,a,c){let h=e;return s.foreach((p,m)=>{const y=Be(n,p);fg(e,le(y))&&(h=Jc(r,h,y,m,l,a,c))}),s.foreach((p,m)=>{const y=Be(n,p);fg(e,le(y))||(h=Jc(r,h,y,m,l,a,c))}),h}function hg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Xc(r,e,n,s,l,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;oe(n)?m=s:m=new ke(null).setTree(n,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,w)=>{if(y.hasChild(_)){const k=e.serverCache.getNode().getImmediateChild(_),R=hg(r,k,w);p=Xl(r,p,new _e(_),R,l,a,c,h)}}),m.children.inorderTraversal((_,w)=>{const k=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!y.hasChild(_)&&!k){const R=e.serverCache.getNode().getImmediateChild(_),L=hg(r,R,w);p=Xl(r,p,new _e(_),L,l,a,c,h)}}),p}function wR(r,e,n,s,l,a,c){if(Jl(l,n)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(oe(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Xl(r,e,n,p.getNode().getChild(n),l,a,h,c);if(oe(n)){let m=new ke(null);return p.getNode().forEachChild(pi,(y,_)=>{m=m.set(new _e(y),_)}),Xc(r,e,n,m,l,a,h,c)}else return e}else{let m=new ke(null);return s.foreach((y,_)=>{const w=Be(n,y);p.isCompleteForPath(w)&&(m=m.set(y,p.getNode().getChild(w)))}),Xc(r,e,n,m,l,a,h,c)}}function ER(r,e,n,s,l){const a=e.serverCache,c=yy(e,a.getNode(),a.isFullyInitialized()||oe(n),a.isFiltered());return Ty(r,c,n,s,Iy,l)}function CR(r,e,n,s,l,a){let c;if(Jl(s,n)!=null)return e;{const h=new jd(s,e,l),p=e.eventCache.getNode();let m;if(oe(n)||le(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Ql(s,Lr(e));else{const _=e.serverCache.getNode();j(_ instanceof X,"serverChildren would be complete if leaf node"),y=Fd(s,_)}y=y,m=r.filter.updateFullNode(p,y,a)}else{const y=le(n);let _=Ud(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?m=r.filter.updateChild(p,y,_,Se(n),h,a):e.eventCache.getNode().hasChild(y)?m=r.filter.updateChild(p,y,X.EMPTY_NODE,Se(n),h,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Ql(s,Lr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||Jl(s,fe())!=null,xs(e,m,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Dd(s.getIndex()),a=H0(s);this.processor_=mR(a);const c=n.serverCache,h=n.eventCache,p=l.updateFullNode(X.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(X.EMPTY_NODE,h.getNode(),null),y=new nr(p,c.isFullyInitialized(),l.filtersNodes()),_=new nr(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=ua(_,y),this.eventGenerator_=new Y0(this.query_)}get query(){return this.query_}}function IR(r){return r.viewCache_.serverCache.getNode()}function TR(r){return Yl(r.viewCache_)}function kR(r,e){const n=Lr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function pg(r){return r.eventRegistrations_.length===0}function RR(r,e){r.eventRegistrations_.push(e)}function mg(r,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function gg(r,e,n,s){e.type===zt.MERGE&&e.source.queryId!==null&&(j(Lr(r.viewCache_),"We should always have a full cache before handling merges"),j(Yl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=_R(r.processor_,l,e,n,s);return gR(r.processor_,a.viewCache),j(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,ky(r,a.changes,a.viewCache.eventCache.getNode(),null)}function PR(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(a,c)=>{s.push(yi(a,c))}),n.isFullyInitialized()&&s.push(my(n.getNode())),ky(r,s,n.getNode(),e)}function ky(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return Q0(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl;class Ry{constructor(){this.views=new Map}}function NR(r){j(!Zl,"__referenceConstructor has already been defined"),Zl=r}function xR(){return j(Zl,"Reference.ts has not been loaded"),Zl}function AR(r){return r.views.size===0}function zd(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return j(a!=null,"SyncTree gave us an op for an invalid query."),gg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(gg(c,e,n,s));return a}}function Py(r,e,n,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let h=Ql(n,l?s:null),p=!1;h?p=!0:s instanceof X?(h=Fd(n,s),p=!1):(h=X.EMPTY_NODE,p=!1);const m=ua(new nr(h,p,!1),new nr(s,l,!1));return new SR(e,m)}return c}function OR(r,e,n,s,l,a){const c=Py(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),RR(c,n),PR(c,n)}function DR(r,e,n,s){const l=e._queryIdentifier,a=[];let c=[];const h=rr(r);if(l==="default")for(const[p,m]of r.views.entries())c=c.concat(mg(m,n,s)),pg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(l);p&&(c=c.concat(mg(p,n,s)),pg(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return h&&!rr(r)&&a.push(new(xR())(e._repo,e._path)),{removed:a,events:c}}function Ny(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zn(r,e){let n=null;for(const s of r.views.values())n=n||kR(s,e);return n}function xy(r,e){if(e._queryParams.loadsAllData())return da(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Ay(r,e){return xy(r,e)!=null}function rr(r){return da(r)!=null}function da(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;function LR(r){j(!ea,"__referenceConstructor has already been defined"),ea=r}function MR(){return j(ea,"Reference.ts has not been loaded"),ea}let bR=1;class _g{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=dR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Oy(r,e,n,s,l){return eR(r.pendingWriteTree_,e,n,s,l),l?oo(r,new Dr(_y(),e,n)):[]}function kr(r,e,n=!1){const s=tR(r.pendingWriteTree_,e);if(nR(r.pendingWriteTree_,e)){let a=new ke(null);return s.snap!=null?a=a.set(fe(),!0):_t(s.children,c=>{a=a.set(new _e(c),!0)}),oo(r,new ql(s.path,a,n))}else return[]}function so(r,e,n){return oo(r,new Dr(Md(),e,n))}function FR(r,e,n){const s=ke.fromObject(n);return oo(r,new Vs(Md(),e,s))}function UR(r,e){return oo(r,new Bs(Md(),e))}function jR(r,e,n){const s=Hd(r,n);if(s){const l=Bd(s),a=l.path,c=l.queryId,h=ot(a,e),p=new Bs(bd(c),h);return Vd(r,a,p)}else return[]}function Dy(r,e,n,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||Ay(c,e))){const p=DR(c,e,n,s);AR(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(h=p.events,!l){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(a,(w,k)=>rr(k));if(y&&!_){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const k=BR(w);for(let R=0;R<k.length;++R){const L=k[R],x=L.query,O=Fy(r,L);r.listenProvider_.startListening(Os(x),$s(r,x),O.hashFn,O.onComplete)}}}!_&&m.length>0&&!s&&(y?r.listenProvider_.stopListening(Os(e),null):m.forEach(w=>{const k=r.queryToTagMap.get(fa(w));r.listenProvider_.stopListening(Os(w),k)}))}VR(r,m)}return h}function Ly(r,e,n,s){const l=Hd(r,s);if(l!=null){const a=Bd(l),c=a.path,h=a.queryId,p=ot(c,e),m=new Dr(bd(h),p,n);return Vd(r,c,m)}else return[]}function zR(r,e,n,s){const l=Hd(r,s);if(l){const a=Bd(l),c=a.path,h=a.queryId,p=ot(c,e),m=ke.fromObject(n),y=new Vs(bd(h),p,m);return Vd(r,c,y)}else return[]}function WR(r,e,n,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,k)=>{const R=ot(w,l);a=a||Zn(k,R),c=c||rr(k)});let h=r.syncPointTree_.get(l);h?(c=c||rr(h),a=a||Zn(h,fe())):(h=new Ry,r.syncPointTree_=r.syncPointTree_.set(l,h));let p;a!=null?p=!0:(p=!1,a=X.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((k,R)=>{const L=Zn(R,fe());L&&(a=a.updateImmediateChild(k,L))}));const m=Ay(h,e);if(!m&&!e._queryParams.loadsAllData()){const w=fa(e);j(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const k=$R();r.queryToTagMap.set(w,k),r.tagToQueryMap.set(k,w)}const y=ca(r.pendingWriteTree_,l);let _=OR(h,e,n,y,a,p);if(!m&&!c&&!s){const w=xy(h,e);_=_.concat(GR(r,e,w))}return _}function Wd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,h)=>{const p=ot(c,e),m=Zn(h,p);if(m)return m});return Ey(l,e,a,n,!0)}function HR(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(m,y)=>{const _=ot(m,n);s=s||Zn(y,_)});let l=r.syncPointTree_.get(n);l?s=s||Zn(l,fe()):(l=new Ry,r.syncPointTree_=r.syncPointTree_.set(n,l));const a=s!=null,c=a?new nr(s,!0,!1):null,h=ca(r.pendingWriteTree_,e._path),p=Py(l,e,h,a?c.getNode():X.EMPTY_NODE,a);return TR(p)}function oo(r,e){return My(e,r.syncPointTree_,null,ca(r.pendingWriteTree_,fe()))}function My(r,e,n,s){if(oe(r.path))return by(r,e,n,s);{const l=e.get(fe());n==null&&l!=null&&(n=Zn(l,fe()));let a=[];const c=le(r.path),h=r.operationForChild(c),p=e.children.get(c);if(p&&h){const m=n?n.getImmediateChild(c):null,y=Cy(s,c);a=a.concat(My(h,p,m,y))}return l&&(a=a.concat(zd(l,r,s,n))),a}}function by(r,e,n,s){const l=e.get(fe());n==null&&l!=null&&(n=Zn(l,fe()));let a=[];return e.children.inorderTraversal((c,h)=>{const p=n?n.getImmediateChild(c):null,m=Cy(s,c),y=r.operationForChild(c);y&&(a=a.concat(by(y,h,p,m)))}),l&&(a=a.concat(zd(l,r,s,n))),a}function Fy(r,e){const n=e.query,s=$s(r,n);return{hashFn:()=>(IR(e)||X.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?jR(r,n._path,s):UR(r,n._path);{const a=Wk(l,n);return Dy(r,n,null,a)}}}}function $s(r,e){const n=fa(e);return r.queryToTagMap.get(n)}function fa(r){return r._path.toString()+"$"+r._queryIdentifier}function Hd(r,e){return r.tagToQueryMap.get(e)}function Bd(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new _e(r.substr(0,e))}}function Vd(r,e,n){const s=r.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=ca(r.pendingWriteTree_,e);return zd(s,n,l,null)}function BR(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[da(n)];{let l=[];return n&&(l=Ny(n)),_t(s,(a,c)=>{l=l.concat(c)}),l}})}function Os(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(MR())(r._repo,r._path):r}function VR(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=fa(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function $R(){return bR++}function GR(r,e,n){const s=e._path,l=$s(r,e),a=Fy(r,n),c=r.listenProvider_.startListening(Os(e),l,a.hashFn,a.onComplete),h=r.syncPointTree_.subtree(s);if(l)j(!rr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,y,_)=>{if(!oe(m)&&y&&rr(y))return[da(y).query];{let w=[];return y&&(w=w.concat(Ny(y).map(k=>k.query))),_t(_,(k,R)=>{w=w.concat(R)}),w}});for(let m=0;m<p.length;++m){const y=p[m];r.listenProvider_.stopListening(Os(y),$s(r,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $d(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Gd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const KR=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},yg=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return qR(r[".sv"],e,n);if(typeof r[".sv"]=="object")return YR(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},qR=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},YR=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},QR=function(r,e,n,s){return Kd(e,new Gd(n,r),s)},Uy=function(r,e,n){return Kd(r,new $d(e),n)};function Kd(r,e,n){const s=r.getPriority().val(),l=yg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,h=yg(c.getValue(),e,n);return h!==c.getValue()||l!==c.getPriority().val()?new Ke(h,Ye(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new Ke(l))),c.forEachChild(Me,(h,p)=>{const m=Kd(p,e.getImmediateChild(h),n);m!==p&&(a=a.updateImmediateChild(h,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yd(r,e){let n=e instanceof _e?e:new _e(e),s=r,l=le(n);for(;l!==null;){const a=mi(s.node.children,l)||{children:{},childCount:0};s=new qd(l,s,a),n=Se(n),l=le(n)}return s}function xi(r){return r.node.value}function jy(r,e){r.node.value=e,Zc(r)}function zy(r){return r.node.childCount>0}function JR(r){return xi(r)===void 0&&!zy(r)}function ha(r,e){_t(r.node.children,(n,s)=>{e(new qd(n,r,s))})}function Wy(r,e,n,s){n&&e(r),ha(r,l=>{Wy(l,e,!0)})}function XR(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function lo(r){return new _e(r.parent===null?r.name:lo(r.parent)+"/"+r.name)}function Zc(r){r.parent!==null&&ZR(r.parent,r.name,r)}function ZR(r,e,n){const s=JR(n),l=Sn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Zc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Zc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/[\[\].#$\/\u0000-\u001F\u007F]/,tP=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,Hy=function(r){return typeof r=="string"&&r.length!==0&&!eP.test(r)},By=function(r){return typeof r=="string"&&r.length!==0&&!tP.test(r)},nP=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),By(r)},Vy=function(r,e,n,s){s&&e===void 0||Qd(pd(r,"value"),e,n)},Qd=function(r,e,n){const s=n instanceof _e?new w0(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Sr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Sr(s)+" with contents = "+e.toString());if(U_(e))throw new Error(r+"contains "+e.toString()+" "+Sr(s));if(typeof e=="string"&&e.length>Ac/3&&ia(e)>Ac)throw new Error(r+"contains a string greater than "+Ac+" utf8 bytes "+Sr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(_t(e,(c,h)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Hy(c)))throw new Error(r+" contains an invalid key ("+c+") "+Sr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E0(s,c),Qd(r,h,s),C0(s)}),l&&a)throw new Error(r+' contains ".value" child '+Sr(s)+" in addition to actual children.")}},$y=function(r,e,n,s){if(!By(n))throw new Error(pd(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rP=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$y(r,e,n)},Gy=function(r,e){if(le(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},iP=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nP(n))throw new Error(pd(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ky(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!ay(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function nn(r,e,n){Ky(r,n),oP(r,s=>jt(s,e)||jt(e,s))}function oP(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(lP(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function lP(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Ps&&nt("event: "+n.toString()),Ni(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="repo_interrupt",uP=25;class cP{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kl(),this.transactionQueueTree_=new qd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dP(r,e,n){if(r.stats_=Nd(r.repoInfo_),r.forceRestClient_||$k())r.server_=new Gl(r.repoInfo_,(s,l,a,c)=>{vg(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>wg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,a,c)=>{vg(r,s,l,a,c)},s=>{wg(r,s)},s=>{fP(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=Qk(r.repoInfo_,()=>new q0(r.stats_,r.server_)),r.infoData_=new B0,r.infoSyncTree_=new _g({startListening:(s,l,a,c)=>{let h=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(h=so(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Xd(r,"connected",!1),r.serverSyncTree_=new _g({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(h,p)=>{const m=c(h,p);nn(r.eventQueue_,s._path,m)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function qy(r){const n=r.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jd(r){return KR({timestamp:qy(r)})}function vg(r,e,n,s,l){r.dataUpdateCount++;const a=new _e(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Ml(n,m=>Ye(m));c=zR(r.serverSyncTree_,a,p,l)}else{const p=Ye(n);c=Ly(r.serverSyncTree_,a,p,l)}else if(s){const p=Ml(n,m=>Ye(m));c=FR(r.serverSyncTree_,a,p)}else{const p=Ye(n);c=so(r.serverSyncTree_,a,p)}let h=a;c.length>0&&(h=ma(r,a)),nn(r.eventQueue_,h,c)}function wg(r,e){Xd(r,"connected",e),e===!1&&mP(r)}function fP(r,e){_t(e,(n,s)=>{Xd(r,n,s)})}function Xd(r,e,n){const s=new _e("/.info/"+e),l=Ye(n);r.infoData_.updateSnapshot(s,l);const a=so(r.infoSyncTree_,s,l);nn(r.eventQueue_,s,a)}function Yy(r){return r.nextWriteId_++}function hP(r,e,n){const s=HR(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const a=Ye(l).withIndex(e._queryParams.getIndex());WR(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=so(r.serverSyncTree_,e._path,a);else{const h=$s(r.serverSyncTree_,e);c=Ly(r.serverSyncTree_,e._path,a,h)}return nn(r.eventQueue_,e._path,c),Dy(r.serverSyncTree_,e,n,null,!0),a},l=>(pa(r,"get for query "+He(e)+" failed: "+l),Promise.reject(new Error(l))))}function pP(r,e,n,s,l){pa(r,"set",{path:e.toString(),value:n,priority:s});const a=Jd(r),c=Ye(n,s),h=Wd(r.serverSyncTree_,e),p=Uy(c,h,a),m=Yy(r),y=Oy(r.serverSyncTree_,e,p,m,!0);Ky(r.eventQueue_,y),r.server_.put(e.toString(),c.val(!0),(w,k)=>{const R=w==="ok";R||gt("set at "+e+" failed: "+w);const L=kr(r.serverSyncTree_,m,!R);nn(r.eventQueue_,e,L),_P(r,l,w,k)});const _=ev(r,e);ma(r,_),nn(r.eventQueue_,_,[])}function mP(r){pa(r,"onDisconnectEvents");const e=Jd(r),n=Kl();qc(r.onDisconnect_,fe(),(l,a)=>{const c=QR(l,a,r.serverSyncTree_,e);gy(n,l,c)});let s=[];qc(n,fe(),(l,a)=>{s=s.concat(so(r.serverSyncTree_,l,a));const c=ev(r,l);ma(r,c)}),r.onDisconnect_=Kl(),nn(r.eventQueue_,fe(),s)}function gP(r){r.persistentConnection_&&r.persistentConnection_.interrupt(aP)}function pa(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),nt(n,...e)}function _P(r,e,n,s){e&&Ni(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function Qy(r,e,n){return Wd(r.serverSyncTree_,e,n)||X.EMPTY_NODE}function Zd(r,e=r.transactionQueueTree_){if(e||ga(r,e),xi(e)){const n=Xy(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&yP(r,lo(e),n)}else zy(e)&&ha(e,n=>{Zd(r,n)})}function yP(r,e,n){const s=n.map(m=>m.currentWriteId),l=Qy(r,e,s);let a=l;const c=l.hash();for(let m=0;m<n.length;m++){const y=n[m];j(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=ot(e,y.path);a=a.updateChild(_,y.currentOutputSnapshotRaw)}const h=a.val(!0),p=e;r.server_.put(p.toString(),h,m=>{pa(r,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let w=0;w<n.length;w++)n[w].status=2,y=y.concat(kr(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&_.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();ga(r,Yd(r.transactionQueueTree_,e)),Zd(r,r.transactionQueueTree_),nn(r.eventQueue_,e,y);for(let w=0;w<_.length;w++)Ni(_[w])}else{if(m==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{gt("transaction at "+p.toString()+" failed: "+m);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=m}ma(r,e)}},c)}function ma(r,e){const n=Jy(r,e),s=lo(n),l=Xy(r,n);return vP(r,l,s),s}function vP(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=ot(n,p.path);let y=!1,_;if(j(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,l=l.concat(kr(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=uP)y=!0,_="maxretry",l=l.concat(kr(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Qy(r,p.path,c);p.currentInputSnapshot=w;const k=e[h].update(w.val());if(k!==void 0){Qd("transaction failed: Data returned ",k,p.path);let R=Ye(k);typeof k=="object"&&k!=null&&Sn(k,".priority")||(R=R.updatePriority(w.getPriority()));const x=p.currentWriteId,O=Jd(r),B=Uy(R,w,O);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=B,p.currentWriteId=Yy(r),c.splice(c.indexOf(x),1),l=l.concat(Oy(r.serverSyncTree_,p.path,B,p.currentWriteId,p.applyLocally)),l=l.concat(kr(r.serverSyncTree_,x,!0))}else y=!0,_="nodata",l=l.concat(kr(r.serverSyncTree_,p.currentWriteId,!0))}nn(r.eventQueue_,n,l),l=[],y&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}ga(r,r.transactionQueueTree_);for(let h=0;h<s.length;h++)Ni(s[h]);Zd(r,r.transactionQueueTree_)}function Jy(r,e){let n,s=r.transactionQueueTree_;for(n=le(e);n!==null&&xi(s)===void 0;)s=Yd(s,n),e=Se(e),n=le(e);return s}function Xy(r,e){const n=[];return Zy(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Zy(r,e,n){const s=xi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);ha(e,l=>{Zy(r,l,n)})}function ga(r,e){const n=xi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,jy(e,n.length>0?n:void 0)}ha(e,s=>{ga(r,s)})}function ev(r,e){const n=lo(Jy(r,e)),s=Yd(r.transactionQueueTree_,e);return XR(s,l=>{Oc(r,l)}),Oc(r,s),Wy(s,l=>{Oc(r,l)}),n}function Oc(r,e){const n=xi(e);if(n){const s=[];let l=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(j(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(j(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(kr(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?jy(e,void 0):n.length=a+1,nn(r.eventQueue_,lo(e),l);for(let c=0;c<s.length;c++)Ni(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function EP(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):gt(`Invalid query segment '${n}' in query '${r}'`)}return e}const Eg=function(r,e){const n=CP(r),s=n.namespace;n.domain==="firebase.com"&&Cn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bk();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Q_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new _e(n.pathString)}},CP=function(r){let e="",n="",s="",l="",a="",c=!0,h="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(h=r.substring(0,m-1),r=r.substring(m+2));let y=r.indexOf("/");y===-1&&(y=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(y,_)),y<_&&(l=wP(r.substring(y,_)));const w=EP(r.substring(Math.min(r.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:h,pathString:l,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SP=function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=Cg.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Cg.charAt(e[l]);return j(c.length===20,"nextPushId: Length should be 20."),c}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class TP{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return oe(this._path)?null:sy(this._path)}get ref(){return new In(this._repo,this._path)}get _queryIdentifier(){const e=og(this._queryParams),n=Rd(e);return n==="{}"?"default":n}get _queryObject(){return og(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof ef))return!1;const n=this._repo===e._repo,s=ay(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+v0(this._path)}}class In extends ef{constructor(e,n){super(e,n,new Ld,!1)}get parent(){const e=ly(this._path);return e===null?null:new In(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Ks(this.ref,e);return new Gs(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Gs(l,Ks(this.ref,s),Me)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ed(r,e){return r=rt(r),r._checkNotDeleted("ref"),e!==void 0?Ks(r._root,e):r._root}function Ks(r,e){return r=rt(r),le(r._path)===null?rP("child","path",e):$y("child","path",e),new In(r._repo,Be(r._path,e))}function RP(r,e){r=rt(r),Gy("push",r._path),Vy("push",e,r._path,!0);const n=qy(r._repo),s=SP(n),l=Ks(r,s),a=Ks(r,s);let c;return e!=null?c=tv(a,e).then(()=>a):c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function tv(r,e){r=rt(r),Gy("set",r._path),Vy("set",e,r._path,!1);const n=new ra;return pP(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function PP(r){r=rt(r);const e=new kP(()=>{}),n=new tf(e);return hP(r._repo,r,n).then(s=>new Gs(s,new In(r._repo,r._path),r._queryParams.getIndex()))}class tf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new IP("value",this,new Gs(e.snapshotNode,new In(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TP(this,e,n):null}matches(e){return e instanceof tf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}NR(In);LR(In);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="FIREBASE_DATABASE_EMULATOR_HOST",td={};let xP=!1;function AP(r,e,n,s){r.repoInfo_=new Q_(`${e}:${n}`,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0),s&&(r.authTokenProvider_=s)}function OP(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Eg(a,l),h=c.repoInfo,p;typeof process<"u"&&Hm&&(p=Hm[NP]),p?(a=`http://${p}?ns=${h.namespace}`,c=Eg(a,l),h=c.repoInfo):c.repoInfo.secure;const m=new Kk(r.name,r.options,e);iP("Invalid Firebase Database URL",c),oe(c.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=LP(h,r,m,new Gk(r,n));return new MP(y,r)}function DP(r,e){const n=td[e];(!n||n[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),gP(r),delete n[r.key]}function LP(r,e,n,s){let l=td[e.name];l||(l={},td[e.name]=l);let a=l[r.toURLString()];return a&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new cP(r,xP,n,s),l[r.toURLString()]=a,a}class MP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new In(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function nd(r=Jg(),e){const n=_d(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=WC("database");s&&bP(n,...s)}return n}function bP(r,e,n,s={}){r=rt(r),r._checkNotDeleted("useEmulator"),r._instanceStarted&&Cn("Cannot call useEmulator() after instance has already been initialized.");const l=r._repoInternal;let a;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Al(Al.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:HC(s.mockUserToken,r.app.options.projectId);a=new Al(c)}AP(l,e,n,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(r){xk(ki),gi(new Nr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return OP(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),Jn(Bm,Vm,r),Jn(Bm,Vm,"esm2017")}vn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};vn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};FP();class UP{async getUserRoles(e){const n=nd(Hl),s=ed(n,`users/${e}/roles`),l=await PP(s);if(l.exists()){const a=l.val(),c=[];return a.admin===!0&&c.push(Rr.ADMIN),c.length===0&&c.push(Rr.USER),c}return[Rr.USER]}async setUserRoles(e,n){const s=nd(Hl),l=ed(s,`users/${e}`);try{await tv(l,n),console.log("User roles set successfully for UID:",e)}catch(a){throw console.error("Error setting user roles:",a),a}}}const Is=Tk(Hl);class jP{constructor(){vl(this,"databaseService");this.databaseService=new UP}signIn(e,n){return cT(Is,e,n)}signUp(e,n){return uT(Is,e,n)}signOut(){return pT(Is)}onAuthStateChanged(e){return hT(Is,e)}getCurrentUser(){return Is.currentUser}async getUserRoles(e){return e.email==="ricf1@mscloud.ua.es"?[Rr.ADMIN]:this.databaseService.getUserRoles(e.uid)}async setUserRoles(e,n){try{await this.databaseService.setUserRoles(e,{email:n.email,roles:{admin:!1}}),console.log("Roles de usuario establecidos correctamente.")}catch(s){throw console.error("Error al establecer roles de usuario:",s),s}}}const wi=new jP,_a=N.createContext({user:null,roles:null}),zP=({children:r})=>{const[e,n]=N.useState(null),[s,l]=N.useState(null);return N.useEffect(()=>wi.onAuthStateChanged(async c=>{if(n(c),c)try{const h=await wi.getUserRoles(c);l(h)}catch(h){console.error("Error al obtener los roles:",h),l(null)}else l(null)}),[]),D.jsx(_a.Provider,{value:{user:e,roles:s},children:r})},WP=()=>{const{user:r,roles:e}=N.useContext(_a),n=Ys(),s=async()=>{try{await wi.signOut(),n("/login")}catch(l){console.error("Error al cerrar sesión:",l)}};return D.jsx("nav",{className:"navbar",children:D.jsxs("ul",{className:"nav-menu",children:[D.jsx("li",{children:D.jsx(Ir,{to:"/",children:"Home"})}),r&&D.jsx("li",{children:D.jsx(Ir,{to:"/dashboard",children:"Dashboard"})}),r&&e&&e.includes(Rr.ADMIN)&&D.jsx("li",{children:D.jsx(Ir,{to:"/admin",children:"Admin"})}),!r&&D.jsx("li",{children:D.jsx(Ir,{to:"/login",children:"Login"})}),!r&&D.jsx("li",{children:D.jsx(Ir,{to:"/register",children:"Registro"})}),r&&D.jsx("li",{children:D.jsx("button",{onClick:s,children:"Logout"})})]})})},HP=({children:r})=>{const{user:e,roles:n}=N.useContext(_a);return!e||!n||!n.includes(Rr.ADMIN)?D.jsx(Lg,{to:"/",replace:!0}):D.jsx(D.Fragment,{children:r})},BP=({children:r})=>{const{user:e}=N.useContext(_a);return e?r:D.jsx(Lg,{to:"/login",replace:!0})};function VP(){const r=N.useContext(ya);return D.jsxs(D.Fragment,{children:[D.jsx("h4",{className:"subTitle",children:"Menús"}),D.jsx("ul",{className:"ulApp",children:r.map(e=>D.jsxs("li",{className:"liApp",children:[D.jsx("p",{children:e.name}),D.jsxs("p",{children:["#",e.quantity]})]},e.id))})]})}const $P=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),[l,a]=N.useState(""),c=Ys(),h=async p=>{p.preventDefault(),a("");try{const m=await wi.signIn(r,n);console.log("Usuario autenticado:",m.user),c("/dashboard")}catch(m){console.error("Error al iniciar sesión:",m),a(m.message)}};return D.jsxs("form",{onSubmit:h,children:[D.jsx("h2",{children:"Iniciar Sesión"}),D.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:p=>e(p.target.value)}),D.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:p=>s(p.target.value)}),D.jsx("button",{type:"submit",children:"Login"}),l&&D.jsx("p",{className:"error-message",children:l})]})},GP=()=>{const[r,e]=N.useState(""),[n,s]=N.useState(""),[l,a]=N.useState(""),[c,h]=N.useState(""),p=Ys(),m=async y=>{y.preventDefault(),a("");try{const _=await wi.signUp(r,n);console.log("Usuario registrado:",_.user),await wi.setUserRoles(_.user.uid,{email:_.user.email,roles:{admin:!1}}),h("Registro exitoso. Redirigiendo al Dashboard..."),setTimeout(()=>{p("/dashboard")},2e3)}catch(_){console.error("Error al registrarse:",_),a(_.message)}};return D.jsxs("form",{onSubmit:m,children:[D.jsx("h2",{children:"Registrarse"}),D.jsx("input",{type:"email",placeholder:"Correo electrónico",value:r,onChange:y=>e(y.target.value)}),D.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:y=>s(y.target.value)}),D.jsx("button",{type:"submit",children:"Registrarse"}),l&&D.jsx("p",{className:"error-message",children:l}),c&&D.jsx("p",{className:"success-message",children:c})]})};function Sg(){return D.jsx(D.Fragment,{children:D.jsx("div",{children:"Primero debes registrate O iniciar sesión"})})}const nv="/DIRI_AUTH/assets/Hamburg-5kXPp-4v.jpg";class KP{constructor(){vl(this,"levels");vl(this,"currentLevel");this.levels=["debug","info","warn","error"],this.currentLevel="debug"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`Nivel de log no válido: ${e}`)}log(e,n){const s=this.levels.indexOf(e),l=this.levels.indexOf(this.currentLevel);if(s>=l){const a=new Date().toISOString();console[e](`[${e.toUpperCase()}] ${a}: ${n}`)}}debug(e){this.log("debug",e)}info(e){this.log("info",e)}warn(e){this.log("warn",e)}error(e){this.log("error",e)}}const Pr=new KP,qP=async(r,e,n)=>{n(!0);try{const s=await fetch(`https://timeapi.io/api/time/current/zone?timeZone=${r}`);if(!s.ok)throw new Error(`Error: ${s.status}`);const l=await s.json();return e(l),l}catch(s){console.error("Fetch error:",s),e(void 0)}finally{Pr.debug("Finaliza"),n(!1)}};function YP(r){if(r.food.quantity<=0)throw new Error("Ya no quedan hamburguesas "+r.food.name+" ,tenemos "+r.food.quantity+" ahora mismo");const[e,n]=N.useState({timeZone:"",dateTime:""}),[s,l]=N.useState(1),[a,c]=N.useState(0),h=N.useContext(ya),[p,m]=N.useState(void 0),[y,_]=N.useState(!1),w="Europe/Amsterdam",k=async()=>{const O=h.find(B=>B.id===r.food.id);if(O)try{n(await qP(w,n,m)),O.quantity=O.quantity-s}catch{Pr.error("Error en fetchData: ");return}else Pr.warn("No se encontró el item con id: "+r.food.id)},R=()=>{Pr.debug("Entendido el excede"),c(0),_(!1),m(!1)},L=O=>{const B=O.target.value,z=parseInt(B,10);isNaN(z)?B===""&&l(0):z<r.food.quantity-1?(c(0),_(!1),l(z)):(c(z),_(!0))},x=async()=>{let O=null;if(O={fecha:e.dateTime.toString(),id_menu:r.food.id,nombre_menu:r.food.name,cantidad:s,precio_total:r.food.price*s},O){console.log("Pedido listo para enviar:",O);const B=ed(nd(Hl),"pedidos");await RP(B,O)}};return N.useEffect(()=>{if(p===!1&&e){async function O(){try{await x(),_(!1)}catch(B){console.error("Error al crear pedido:",B)}}O()}},[x,p,e]),D.jsxs(D.Fragment,{children:[p===!0?D.jsx("p",{children:"Realizando petición de datos..."}):p===!1&&e?D.jsxs("div",{children:[D.jsx("h4",{children:"Pedido realizado"}),D.jsxs("p",{children:["Hora actual: ",e.dateTime]})]}):p===!1&&!e?D.jsx("p",{children:"No se pudieron obtener los datos."}):null,y===!0&&D.jsxs("div",{children:[D.jsxs("h4",{children:["Excedes la cantidad total de hamburguesas que puedes pedir: ",r.food.quantity-1,"y estas ingresando ",a]}),D.jsx("button",{onClick:()=>R(),children:"Entendido"})]}),D.jsxs("div",{children:[D.jsx("img",{className:"foodImg",src:nv,alt:r.food.name}),D.jsx("h5",{children:"Nombre: "}),D.jsx("p",{children:r.food.name}),D.jsx("h5",{children:"Precio: "}),D.jsx("p",{children:r.food.price*s}),D.jsx("h5",{children:"Cantidad total que se puede pedir: "}),D.jsx("p",{children:r.food.quantity-1}),D.jsx("br",{}),D.jsxs("div",{children:[D.jsx("label",{children:"Cantidad a ordenar: "}),D.jsx("input",{"data-testid":"foodPriceF",type:"number",id:"cantidad",className:"number",value:s,onChange:L,min:"0"}),D.jsx("button",{onClick:async()=>{await k()},children:"Ordenar"})]}),D.jsx("button",{onClick:r.onReturnToMenu,children:"Volver al menú"})]})]})}class QP extends Ig.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){Pr.warn("Error capturado por ErrorBoundary: "+e.message),Pr.debug("Detalles del error: "+n.componentStack)}render(){return this.state.hasError?this.props.fallback:this.props.children}}function JP(){const r=N.useContext(ya),[e,n]=N.useState(!1),[s,l]=N.useState(),a=()=>{n(!e)},c=h=>{Pr.debug("El usuario quiere ordenar: "+h.name),l(h),n(!e)};return D.jsxs(D.Fragment,{children:[!e&&D.jsxs(D.Fragment,{children:[D.jsx("h4",{className:"foodTitle",children:"Choose from our Menu"}),D.jsx("ul",{className:"ulFoods",children:r.map(h=>D.jsxs("li",{className:"liFoods",onClick:()=>c(h),children:[D.jsx("img",{className:"foodImg",src:nv,alt:h.name}),D.jsxs("div",{className:"foodItem",children:[D.jsx("p",{className:"foodDesc",children:h.desc}),D.jsxs("p",{"data-testid":"foodPrice",className:"foodPrice",children:[h.price,"$"]})]})]},h.id))})]}),e&&D.jsx(QP,{fallback:D.jsx("div",{children:"¡No nos quedan de esas hamburguesas!"}),children:D.jsx(YP,{food:s,onReturnToMenu:a})})]})}const ya=Ig.createContext([]),XP=()=>{const[r]=N.useState([{id:1,name:"Hamburguesa de Pollo",quantity:40,desc:"Hamburguesa de pollo frito - … y mayonesa",price:24,image:"Hamburg.jpg"},{id:2,name:"Hamburguesa de Vacuno",quantity:50,desc:"Hamburguesa de Vacuno frito - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"},{id:3,name:"Hamburguesa de Cerdo",quantity:60,desc:"Hamburguesa de Cerdo frito - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"},{id:4,name:"Hamburguesa de Hormiga",quantity:70,desc:"Hamburguesa de Hormiga frita - … con tomate y mayonesa",price:26,image:"Hamburg.jpg"}]);return D.jsx(ya.Provider,{value:r,children:D.jsx(zP,{children:D.jsxs(SC,{children:[D.jsx(WP,{}),D.jsx("div",{className:"main-content",children:D.jsxs(ZE,{children:[D.jsx(Er,{path:"/",element:D.jsx(Sg,{})}),D.jsx(Er,{path:"/login",element:D.jsx($P,{})}),D.jsx(Er,{path:"/register",element:D.jsx(GP,{})}),D.jsx(Er,{path:"/dashboard",element:D.jsx(BP,{children:D.jsx(JP,{})})}),D.jsx(Er,{path:"/admin",element:D.jsx(HP,{children:D.jsx(VP,{})})}),D.jsx(Er,{path:"*",element:D.jsx(Sg,{})})]})})]})})})};uE.createRoot(document.getElementById("root")).render(D.jsx(N.StrictMode,{children:D.jsx(XP,{})}));
