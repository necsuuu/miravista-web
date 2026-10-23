(()=>{var wE=Object.create;var wv=Object.defineProperty;var CE=Object.getOwnPropertyDescriptor;var RE=Object.getOwnPropertyNames;var NE=Object.getPrototypeOf,DE=Object.prototype.hasOwnProperty;var ji=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var UE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of RE(t))!DE.call(e,a)&&a!==n&&wv(e,a,{get:()=>t[a],enumerable:!(i=CE(t,a))||i.enumerable});return e};var je=(e,t,n)=>(n=e!=null?wE(NE(e)):{},UE(t||!e||!e.__esModule?wv(n,"default",{value:e,enumerable:!0}):n,e));var Bv=ji(Fe=>{"use strict";function Up(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,a=e[i];if(0<Ou(a,t))e[i]=t,e[n]=a,n=i;else break t}}function Qi(e){return e.length===0?null:e[0]}function Pu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,a=e.length,s=a>>>1;i<s;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ou(o,n))l<a&&0>Ou(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<a&&0>Ou(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ou(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Fe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Cv=performance,Fe.unstable_now=function(){return Cv.now()}):(Rp=Date,Rv=Rp.now(),Fe.unstable_now=function(){return Rp.now()-Rv});var Cv,Rp,Rv,Aa=[],ts=[],LE=1,vi=null,Cn=3,Lp=!1,wl=!1,Cl=!1,Op=!1,Uv=typeof setTimeout=="function"?setTimeout:null,Lv=typeof clearTimeout=="function"?clearTimeout:null,Nv=typeof setImmediate<"u"?setImmediate:null;function Iu(e){for(var t=Qi(ts);t!==null;){if(t.callback===null)Pu(ts);else if(t.startTime<=e)Pu(ts),t.sortIndex=t.expirationTime,Up(Aa,t);else break;t=Qi(ts)}}function Ip(e){if(Cl=!1,Iu(e),!wl)if(Qi(Aa)!==null)wl=!0,kr||(kr=!0,Gr());else{var t=Qi(ts);t!==null&&Pp(Ip,t.startTime-e)}}var kr=!1,Rl=-1,Ov=5,Iv=-1;function Pv(){return Op?!0:!(Fe.unstable_now()-Iv<Ov)}function Np(){if(Op=!1,kr){var e=Fe.unstable_now();Iv=e;var t=!0;try{t:{wl=!1,Cl&&(Cl=!1,Lv(Rl),Rl=-1),Lp=!0;var n=Cn;try{e:{for(Iu(e),vi=Qi(Aa);vi!==null&&!(vi.expirationTime>e&&Pv());){var i=vi.callback;if(typeof i=="function"){vi.callback=null,Cn=vi.priorityLevel;var a=i(vi.expirationTime<=e);if(e=Fe.unstable_now(),typeof a=="function"){vi.callback=a,Iu(e),t=!0;break e}vi===Qi(Aa)&&Pu(Aa),Iu(e)}else Pu(Aa);vi=Qi(Aa)}if(vi!==null)t=!0;else{var s=Qi(ts);s!==null&&Pp(Ip,s.startTime-e),t=!1}}break t}finally{vi=null,Cn=n,Lp=!1}t=void 0}}finally{t?Gr():kr=!1}}}var Gr;typeof Nv=="function"?Gr=function(){Nv(Np)}:typeof MessageChannel<"u"?(Dp=new MessageChannel,Dv=Dp.port2,Dp.port1.onmessage=Np,Gr=function(){Dv.postMessage(null)}):Gr=function(){Uv(Np,0)};var Dp,Dv;function Pp(e,t){Rl=Uv(function(){e(Fe.unstable_now())},t)}Fe.unstable_IdlePriority=5;Fe.unstable_ImmediatePriority=1;Fe.unstable_LowPriority=4;Fe.unstable_NormalPriority=3;Fe.unstable_Profiling=null;Fe.unstable_UserBlockingPriority=2;Fe.unstable_cancelCallback=function(e){e.callback=null};Fe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ov=0<e?Math.floor(1e3/e):5};Fe.unstable_getCurrentPriorityLevel=function(){return Cn};Fe.unstable_next=function(e){switch(Cn){case 1:case 2:case 3:var t=3;break;default:t=Cn}var n=Cn;Cn=t;try{return e()}finally{Cn=n}};Fe.unstable_requestPaint=function(){Op=!0};Fe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Cn;Cn=e;try{return t()}finally{Cn=n}};Fe.unstable_scheduleCallback=function(e,t,n){var i=Fe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:LE++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,Up(ts,e),Qi(Aa)===null&&e===Qi(ts)&&(Cl?(Lv(Rl),Rl=-1):Cl=!0,Pp(Ip,n-i))):(e.sortIndex=a,Up(Aa,e),wl||Lp||(wl=!0,kr||(kr=!0,Gr()))),e};Fe.unstable_shouldYield=Pv;Fe.unstable_wrapCallback=function(e){var t=Cn;return function(){var n=Cn;Cn=t;try{return e.apply(this,arguments)}finally{Cn=n}}}});var Fv=ji((vL,zv)=>{"use strict";zv.exports=Bv()});var Qv=ji(kt=>{"use strict";var Fp=Symbol.for("react.transitional.element"),OE=Symbol.for("react.portal"),IE=Symbol.for("react.fragment"),PE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),zE=Symbol.for("react.consumer"),FE=Symbol.for("react.context"),VE=Symbol.for("react.forward_ref"),HE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),kE=Symbol.for("react.activity"),XE=Symbol.for("react.view_transition"),Vv=Symbol.iterator;function WE(e){return e===null||typeof e!="object"?null:(e=Vv&&e[Vv]||e["@@iterator"],typeof e=="function"?e:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Yv={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=Yv,this.updater=n||Wv}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zv(){}Zv.prototype=Wr.prototype;function Vp(e,t,n){this.props=e,this.context=t,this.refs=Yv,this.updater=n||Wv}var Hp=Vp.prototype=new Zv;Hp.constructor=Vp;qv(Hp,Wr.prototype);Hp.isPureReactComponent=!0;var Hv=Array.isArray;function zp(){}var Le={H:null,A:null,T:null,S:null},Jv=Object.prototype.hasOwnProperty;function Gp(e,t,n){var i=n.ref;return{$$typeof:Fp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function qE(e,t){return Gp(e.type,t,e.props)}function kp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fp}function YE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gv=/\/+/g;function Bp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?YE(""+e.key):t.toString(36)}function ZE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(zp,zp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Xr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Fp:case OE:r=!0;break;case Xv:return r=e._init,Xr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Bp(e,0):i,Hv(a)?(n="",r!=null&&(n=r.replace(Gv,"$&/")+"/"),Xr(a,t,n,"",function(c){return c})):a!=null&&(kp(a)&&(a=qE(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Gv,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Hv(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Bp(i,l),r+=Xr(i,t,n,s,a);else if(l=WE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Bp(i,l++),r+=Xr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Xr(ZE(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Bu(e,t,n){if(e==null)return e;var i=[],a=0;return Xr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function JE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var kv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Kv(e){var t=Le.T,n={};n.types=t!==null?t.types:null,Le.T=n;try{var i=e(),a=Le.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(zp,kv)}catch(s){kv(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Le.T=t}}function jv(e){var t=Le.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Kv(jv.bind(null,e))}var KE={map:Bu,forEach:function(e,t,n){Bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bu(e,function(){t++}),t},toArray:function(e){return Bu(e,function(t){return t})||[]},only:function(e){if(!kp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};kt.Activity=kE;kt.Children=KE;kt.Component=Wr;kt.Fragment=IE;kt.Profiler=BE;kt.PureComponent=Vp;kt.StrictMode=PE;kt.Suspense=HE;kt.ViewTransition=XE;kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Le.H.useMemoCache(e)}};kt.addTransitionType=jv;kt.cache=function(e){return function(){return e.apply(null,arguments)}};kt.cacheSignal=function(){return null};kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=qv({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!Jv.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Gp(e.type,a,i)};kt.createContext=function(e){return e={$$typeof:FE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:zE,_context:e},e};kt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)Jv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Gp(e,s,a)};kt.createRef=function(){return{current:null}};kt.forwardRef=function(e){return{$$typeof:VE,render:e}};kt.isValidElement=kp;kt.lazy=function(e){return{$$typeof:Xv,_payload:{_status:-1,_result:e},_init:JE}};kt.memo=function(e,t){return{$$typeof:GE,type:e,compare:t===void 0?null:t}};kt.startTransition=Kv;kt.unstable_useCacheRefresh=function(){return Le.H.useCacheRefresh()};kt.use=function(e){return Le.H.use(e)};kt.useActionState=function(e,t,n){return Le.H.useActionState(e,t,n)};kt.useCallback=function(e,t){return Le.H.useCallback(e,t)};kt.useContext=function(e){return Le.H.useContext(e)};kt.useDebugValue=function(){};kt.useDeferredValue=function(e,t){return Le.H.useDeferredValue(e,t)};kt.useEffect=function(e,t){return Le.H.useEffect(e,t)};kt.useEffectEvent=function(e){return Le.H.useEffectEvent(e)};kt.useId=function(){return Le.H.useId()};kt.useImperativeHandle=function(e,t,n){return Le.H.useImperativeHandle(e,t,n)};kt.useInsertionEffect=function(e,t){return Le.H.useInsertionEffect(e,t)};kt.useLayoutEffect=function(e,t){return Le.H.useLayoutEffect(e,t)};kt.useMemo=function(e,t){return Le.H.useMemo(e,t)};kt.useOptimistic=function(e,t){return Le.H.useOptimistic(e,t)};kt.useReducer=function(e,t,n){return Le.H.useReducer(e,t,n)};kt.useRef=function(e){return Le.H.useRef(e)};kt.useState=function(e){return Le.H.useState(e)};kt.useSyncExternalStore=function(e,t,n){return Le.H.useSyncExternalStore(e,t,n)};kt.useTransition=function(){return Le.H.useTransition()};kt.version="19.3.0"});var es=ji((xL,$v)=>{"use strict";$v.exports=Qv()});var ny=ji(Rn=>{"use strict";var jE=es();function ey(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ns(){}var In={d:{f:ns,r:function(){throw Error(ey(522))},D:ns,C:ns,L:ns,m:ns,X:ns,S:ns,M:ns},p:0,findDOMNode:null},QE=Symbol.for("react.portal"),$E=Symbol.for("react.recoverable"),ty=Symbol.for("react.optimistic_key");function tA(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:QE,key:i==null?null:i===ty?ty:""+i,children:e,containerInfo:t,implementation:n}}var Nl=jE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=In;Rn.browser=function(e){return{$$typeof:$E,_reason:e}};Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(ey(299));return tA(e,t,null,n)};Rn.flushSync=function(e){var t=Nl.T,n=In.p;try{if(Nl.T=null,In.p=2,e)return e()}finally{Nl.T=t,In.p=n,In.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,In.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&In.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=zu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?In.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&In.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=zu(t.as,t.crossOrigin);In.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&In.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=zu(n,t.crossOrigin);In.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=zu(t.as,t.crossOrigin);In.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else In.d.m(e)};Rn.requestFormReset=function(e){In.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return Nl.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return Nl.H.useHostTransitionStatus()};Rn.version="19.3.0"});var sy=ji((ML,ay)=>{"use strict";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(e){console.error(e)}}iy(),ay.exports=ny()});var Wb=ji(xf=>{"use strict";var sn=Fv(),Xx=es(),eA=sy();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _c(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function qx(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ry(e){if(_c(e)!==e)throw Error(j(188))}function nA(e){var t=e.alternate;if(!t){if(t=_c(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return ry(a),e;if(s===i)return ry(a),t;s=s.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Zx(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Zx(e),t!==null)return t;e=e.sibling}return null}function Yn(e,t,n,i,a,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,a,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Yn(e.child,t,n,i,a,s))return!0;e=e.sibling}return!1}function gr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function oy(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Jx(e){var t=[null,null],n=gr(e);return n===null||Kx(t,e,n.child,{foundSelf:!1}),t}function Kx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Kx(e,t,n.child,i))return!0;n=n.sibling}return!1}function an(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(j(559))}}var Qr=null,Sm=null;function iA(e,t,n){return e===n?!0:e===t?(Qr=e,!0):!1}function aA(e,t,n){return e===n?(Sm=e,!1):e===t?(Sm!==null&&(Qr=e),!0):!1}function ly(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Mm(e,t,n){for(var i=0,a=e;a;a=n(a))i++;a=0;for(var s=t;s;s=n(s))a++;for(;0<i-a;)e=n(e),i--;for(;0<a-i;)t=n(t),a--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Ce=Object.assign,sA=Symbol.for("react.element"),Fu=Symbol.for("react.transitional.element"),Bl=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),Qx=Symbol.for("react.consumer"),aa=Symbol.for("react.context"),U0=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),Em=Symbol.for("react.suspense_list"),L0=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),Am=Symbol.for("react.activity"),rA=Symbol.for("react.legacy_hidden"),oA=Symbol.for("react.memo_cache_sentinel"),wm=Symbol.for("react.view_transition"),lA=Symbol.for("react.recoverable"),cy=Symbol.iterator;function Dl(e){return e===null||typeof e!="object"?null:(e=cy&&e[cy]||e["@@iterator"],typeof e=="function"?e:null)}var cA=Symbol.for("react.client.reference");function Cm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===cA?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case bm:return"Profiler";case jx:return"StrictMode";case Tm:return"Suspense";case Em:return"SuspenseList";case Am:return"Activity";case wm:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Bl:return"Portal";case aa:return e.displayName||"Context";case Qx:return(e._context.displayName||"Context")+".Consumer";case U0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L0:return t=e.displayName||null,t!==null?t:Cm(e.type)||"Memo";case rs:t=e._payload,e=e._init;try{return Cm(e(t))}catch{}}return null}var zl=Array.isArray,Gt=Xx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=eA.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ir={pending:!1,data:null,method:null,action:null},Rm=[],to=-1;function ha(e){return{current:e}}function vn(e){0>to||(e.current=Rm[to],Rm[to]=null,to--)}function Pe(e,t){to++,Rm[to]=e.current,e.current=t}var la=ha(null),ec=ha(null),ms=ha(null),Eh=ha(null);function Ah(e,t){switch(Pe(ms,t),Pe(ec,e),Pe(la,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bx(t),e=xb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vn(la),Pe(la,e)}function So(){vn(la),vn(ec),vn(ms)}function Nm(e){var t=e.memoizedState;t!==null&&(Do._currentValue=t.memoizedState,Pe(Eh,e)),t=la.current;var n=xb(t,e.type);t!==n&&(Pe(ec,e),Pe(la,n))}function wh(e){ec.current===e&&(vn(la),vn(ec)),Eh.current===e&&(vn(Eh),Do._currentValue=ir)}var Xp,uy;function as(e){if(Xp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xp=t&&t[1]||"",uy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xp+e+uy}var Wp=!1;function qp(e,t){if(!e||Wp)return"";Wp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(m){var u=m}Reflect.construct(e,[],p)}else{try{p.call()}catch(m){u=m}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(m){u=m}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(m){if(m&&u&&typeof m.stack=="string")return[m.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Wp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?as(n):""}function uA(e,t){switch(e.tag){case 26:case 27:case 5:return as(e.type);case 16:return as("Lazy");case 13:return e.child!==t&&t!==null?as("Suspense Fallback"):as("Suspense");case 19:return as("SuspenseList");case 0:case 15:return qp(e.type,!1);case 11:return qp(e.type.render,!1);case 1:return qp(e.type,!0);case 31:return as("Activity");case 30:return as("ViewTransition");default:return""}}function hy(e){try{var t="",n=null;do t+=uA(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Dm=Object.prototype.hasOwnProperty,O0=sn.unstable_scheduleCallback,Yp=sn.unstable_cancelCallback,hA=sn.unstable_shouldYield,fA=sn.unstable_requestPaint,ai=sn.unstable_now,dA=sn.unstable_getCurrentPriorityLevel,$x=sn.unstable_ImmediatePriority,tS=sn.unstable_UserBlockingPriority,Ch=sn.unstable_NormalPriority,pA=sn.unstable_LowPriority,eS=sn.unstable_IdlePriority,mA=sn.log,gA=sn.unstable_setDisableYieldValue,vc=null,si=null;function cs(e){if(typeof mA=="function"&&gA(e),si&&typeof si.setStrictMode=="function")try{si.setStrictMode(vc,e)}catch{}}var ri=Math.clz32?Math.clz32:yA,_A=Math.log,vA=Math.LN2;function yA(e){return e>>>=0,e===0?32:31-(_A(e)/vA|0)|0}var Vu=256,Hu=262144,Gu=4194304;function Qs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=Qs(i):(r&=o,r!==0?a=Qs(r):n||(n=o&~e,n!==0&&(a=Qs(n))))):(o=i&~s,o!==0?a=Qs(o):r!==0?a=Qs(r):n||(n=i&~e,n!==0&&(a=Qs(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function yc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nS(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ri(n),a=1<<i;t|=e[i],n&=~a}return t}function xA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(){var e=Gu;return Gu<<=1,(Gu&62914560)===0&&(Gu=4194304),e}function Zp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function SA(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-ri(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&aS(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function aS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ri(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function sS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ri(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function rS(e,t){var n=t&-t;return n=(n&42)!==0?1:I0(n),(n&(e.suspendedLanes|t))!==0?0:n}function I0(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function P0(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oS(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:Gb(e.type))}function fy(e,t){var n=he.p;try{return he.p=e,t()}finally{he.p=n}}var Fa=Math.random().toString(36).slice(2),gn="__reactFiber$"+Fa,Zn="__reactProps$"+Fa,Oo="__reactContainer$"+Fa,dy="__reactEvents$"+Fa,MA="__reactListeners$"+Fa,bA="__reactHandles$"+Fa,py="__reactResources$"+Fa,Sc="__reactMarker$"+Fa,Rh="__reactLoad$"+Fa;function ef(e){delete e[gn],delete e[Zn],delete e[MA],delete e[bA]}function er(e){var t;if(t=e[gn])return t;for(var n=e.parentNode;n;){if(t=n[Oo]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dx(e);e!==null;){if(n=e[gn])return n;e=Dx(e)}return t}e=n,n=e.parentNode}return null}function Io(e){if(e=e[gn]||e[Oo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function uo(e){var t=e[py];return t||(t=e[py]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function hn(e){e[Sc]=!0}function lS(e){e[Rh]=void 0}var cS=new Set,uS={};function _r(e,t){Mo(e,t),Mo(e+"Capture",t)}function Mo(e,t){for(uS[e]=t,e=0;e<t.length;e++)cS.add(t[e])}var TA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),my={},gy={};function EA(e){return Dm.call(gy,e)?!0:Dm.call(my,e)?!1:TA.test(e)?gy[e]=!0:(my[e]=!0,!1)}var le=!1;function _y(){var e=le;return le=!1,e}function rh(e,t,n){if(EA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function ku(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function wa(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function AA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Um(e){if(!e._valueTracker){var t=hS(e)?"checked":"value";e._valueTracker=AA(e,t,""+e[t])}}function fS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hS(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var wA=/[\n"\\]/g;function bi(e){return e.replace(wA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lm(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ti(t)):e.value!==""+ti(t)&&(e.value=""+ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Jp(e,ti(e.value)):Jp(e,ti(t)):n!=null?Jp(e,ti(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ti(o):e.removeAttribute("name")}function dS(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Um(e);return}n=n!=null?""+ti(n):"",t=t!=null?""+ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Um(e)}function Jp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ho(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function pS(e,t,n){if(t!=null&&(t=""+ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ti(n):""}function mS(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(zl(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Um(e)}function bo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var CA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||CA.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gS(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",le=!0);for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&(vy(e,a,i),le=!0)}else for(var s in t)t.hasOwnProperty(s)&&vy(e,s,t[s])}function B0(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),NA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oh(e){return NA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Om=null;function z0(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var eo=null,fo=null;function yy(e){var t=Io(e);if(t&&(e=t.stateNode)){var n=e[Zn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Lm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+bi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Zn]||null;if(!a)throw Error(j(90));Lm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fS(i)}break t;case"textarea":pS(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&ho(e,!!n.multiple,t,!1)}}}var Kp=!1;function _S(e,t,n){if(Kp)return e(t,n);Kp=!0;try{var i=e(t);return i}finally{if(Kp=!1,(eo!==null||fo!==null)&&(gf(),eo&&(t=eo,e=fo,fo=eo=null,yy(t),e)))for(t=0;t<e.length;t++)yy(e[t])}}function nc(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Zn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Im=!1;if(La)try{qr={},Object.defineProperty(qr,"passive",{get:function(){Im=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Im=!1}var qr,us=null,F0=null,lh=null;function vS(){if(lh)return lh;var e,t=F0,n=t.length,i,a="value"in us?us.value:us.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return lh=a.slice(e,1<i?1-i:void 0)}function ch(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xu(){return!0}function xy(){return!1}function Fn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xu:xy,this.isPropagationStopped=xy,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),t}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=Fn(Ns),Mc=Ce({},Ns,{view:0,detail:0}),DA=Fn(Mc),jp,Qp,Ul,af=Ce({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:V0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(jp=e.screenX-Ul.screenX,Qp=e.screenY-Ul.screenY):Qp=jp=0,Ul=e),jp)},movementY:function(e){return"movementY"in e?e.movementY:Qp}}),Sy=Fn(af),UA=Ce({},af,{dataTransfer:0}),LA=Fn(UA),OA=Ce({},Mc,{relatedTarget:0}),$p=Fn(OA),IA=Ce({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),PA=Fn(IA),BA=Ce({},Ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zA=Fn(BA),FA=Ce({},Ns,{data:0}),My=Fn(FA),VA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=GA[e])?!!t[e]:!1}function V0(){return kA}var XA=Ce({},Mc,{key:function(e){if(e.key){var t=VA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ch(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:V0,charCode:function(e){return e.type==="keypress"?ch(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ch(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),WA=Fn(XA),qA=Ce({},af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),by=Fn(qA),YA=Ce({},Ns,{submitter:0}),ZA=Fn(YA),JA=Ce({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:V0}),KA=Fn(JA),jA=Ce({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),QA=Fn(jA),$A=Ce({},af,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tw=Fn($A),ew=Ce({},Ns,{newState:0,oldState:0,source:0}),nw=Fn(ew),iw=[9,13,27,32],H0=La&&"CompositionEvent"in window,Gl=null;La&&"documentMode"in document&&(Gl=document.documentMode);var aw=La&&"TextEvent"in window&&!Gl,yS=La&&(!H0||Gl&&8<Gl&&11>=Gl),Ty=" ",Ey=!1;function xS(e,t){switch(e){case"keyup":return iw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var no=!1;function sw(e,t){switch(e){case"compositionend":return SS(t);case"keypress":return t.which!==32?null:(Ey=!0,Ty);case"textInput":return e=t.data,e===Ty&&Ey?null:e;default:return null}}function rw(e,t){if(no)return e==="compositionend"||!H0&&xS(e,t)?(e=vS(),lh=F0=us=null,no=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yS&&t.locale!=="ko"?null:t.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ay(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ow[e.type]:t==="textarea"}function MS(e,t,n,i){eo?fo?fo.push(i):fo=[i]:eo=i,t=jh(t,"onChange"),0<t.length&&(n=new nf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var kl=null,ic=null;function lw(e){_b(e,0)}function sf(e){var t=Fl(e);if(fS(t))return e}function wy(e,t){if(e==="change")return t}var bS=!1;La&&(La?(qu="oninput"in document,qu||(tm=document.createElement("div"),tm.setAttribute("oninput","return;"),qu=typeof tm.oninput=="function"),Wu=qu):Wu=!1,bS=Wu&&(!document.documentMode||9<document.documentMode));var Wu,qu,tm;function Cy(){kl&&(kl.detachEvent("onpropertychange",TS),ic=kl=null)}function TS(e){if(e.propertyName==="value"&&sf(ic)){var t=[];MS(t,ic,e,z0(e)),_S(lw,t)}}function cw(e,t,n){e==="focusin"?(Cy(),kl=t,ic=n,kl.attachEvent("onpropertychange",TS)):e==="focusout"&&Cy()}function uw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sf(ic)}function hw(e,t){if(e==="click")return sf(t)}function fw(e,t){if(e==="input"||e==="change")return sf(t)}function dw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var li=typeof Object.is=="function"?Object.is:dw;function ac(e,t){if(li(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Dm.call(t,a)||!li(e[a],t[a]))return!1}return!0}function Pm(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ry(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ny(e,t){var n=Ry(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ry(n)}}function ES(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ES(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function AS(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Pm(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pm(e.document)}return t}function G0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pw=La&&"documentMode"in document&&11>=document.documentMode,io=null,Bm=null,Xl=null,zm=!1;function Dy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zm||io==null||io!==Pm(i)||(i=io,"selectionStart"in i&&G0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xl&&ac(Xl,i)||(Xl=i,i=jh(Bm,"onSelect"),0<i.length&&(t=new nf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=io)))}function Ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionrun:Ks("Transition","TransitionRun"),transitionstart:Ks("Transition","TransitionStart"),transitioncancel:Ks("Transition","TransitionCancel"),transitionend:Ks("Transition","TransitionEnd")},em={},wS={};La&&(wS=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function vr(e){if(em[e])return em[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wS)return em[e]=t[n];return e}var CS=vr("animationend"),RS=vr("animationiteration"),NS=vr("animationstart"),mw=vr("transitionrun"),gw=vr("transitionstart"),_w=vr("transitioncancel"),DS=vr("transitionend"),US=new Map,Fm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fm.push("scrollEnd");function Fi(e,t){US.set(e,t),_r(t,[e])}var vw=0;function Oa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=zi.identifierPrefix;var n=vw++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Uy(e){if(e==null||typeof e=="string")return e;var t=null,n=xo;if(n!==null)for(var i=0;i<n.length;i++){var a=e[n[i]];if(a!=null){if(a==="none")return"none";t=t==null?a:t+(" "+a)}}return t??e.default}function Va(e,t){return e=Uy(e),t=Uy(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Nh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],so=0,k0=0;function rf(){for(var e=so,t=k0=so=0;t<e;){var n=xi[t];xi[t++]=null;var i=xi[t];xi[t++]=null;var a=xi[t];xi[t++]=null;var s=xi[t];if(xi[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&LS(n,a,s)}}function of(e,t,n,i){xi[so++]=e,xi[so++]=t,xi[so++]=n,xi[so++]=i,k0|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function X0(e,t,n,i){return of(e,t,n,i),Dh(e)}function yr(e,t){return of(e,null,null,t),Dh(e)}function LS(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-ri(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Dh(e){if(50<tc)throw tc=0,yh=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ro={};function yw(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,t,n,i){return new yw(e,t,n,i)}function W0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Da(e,t){var n=e.alternate;return n===null?(n=Wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function OS(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function uh(e,t,n,i,a,s){var r=0;if(i=e,typeof i=="function")W0(i)&&(r=1);else if(typeof i=="string")r=WC(e,n,la.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Am:return e=Wn(31,n,t,a),e.elementType=Am,e.lanes=s,e;case $r:return ar(n.children,a,s,t);case jx:r=8,a|=24;break;case bm:return e=Wn(12,n,t,a|2),e.elementType=bm,e.lanes=s,e;case Tm:return e=Wn(13,n,t,a),e.elementType=Tm,e.lanes=s,e;case Em:return e=Wn(19,n,t,a),e.elementType=Em,e.lanes=s,e;case rA:case wm:return e=a|32,e=Wn(30,n,t,e),e.elementType=wm,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case aa:r=10;break t;case Qx:r=9;break t;case U0:r=11;break t;case L0:r=14;break t;case rs:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Wn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function ar(e,t,n,i){return e=Wn(7,e,i,t),e.lanes=n,e}function nm(e,t,n){return e=Wn(6,e,null,t),e.lanes=n,e}function IS(e){var t=Wn(18,null,null,0);return t.stateNode=e,t}function im(e,t,n){return t=Wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ly=new WeakMap;function Ti(e,t){if(typeof e=="object"&&e!==null){var n=Ly.get(e);return n!==void 0?n:(t={value:e,source:t,stack:hy(t)},Ly.set(e,t),t)}return{value:e,source:t,stack:hy(t)}}var oo=[],lo=0,Uh=null,sc=0,Si=[],Mi=0,Es=null,ra=1,oa="";function Ra(e,t){oo[lo++]=sc,oo[lo++]=Uh,Uh=e,sc=t}function PS(e,t,n){Si[Mi++]=ra,Si[Mi++]=oa,Si[Mi++]=Es,Es=e;var i=ra;e=oa;var a=32-ri(i)-1;i&=~(1<<a),n+=1;var s=32-ri(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,ra=1<<32-ri(t)+a|n<<a|i,oa=s+e}else ra=1<<s|n<<a|i,oa=e}function lf(e){e.return!==null&&(Ra(e,1),PS(e,1,0))}function q0(e){for(;e===Uh;)Uh=oo[--lo],oo[lo]=null,sc=oo[--lo],oo[lo]=null;for(;e===Es;)Es=Si[--Mi],Si[Mi]=null,oa=Si[--Mi],Si[Mi]=null,ra=Si[--Mi],Si[Mi]=null}function BS(e,t){Si[Mi++]=ra,Si[Mi++]=oa,Si[Mi++]=Es,ra=t.id,oa=t.overflow,Es=e}var fn=null,Ie=null,jt=!1,gs=null,Ei=!1,Vm=Error(j(519));function As(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rc(Ti(t,e)),Vm}function Oy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[gn]=e,t[Zn]=i,n){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(n=0;n<uc.length;n++)ne(uc[n],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),dS(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),mS(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||yb(t.textContent,n)?(i.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),i.onScroll!=null&&ne("scroll",t),i.onScrollEnd!=null&&ne("scrollend",t),i.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||As(e,!0)}function Lh(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:fn=fn.return}}function Yr(e){if(e!==fn)return!1;if(!jt)return Lh(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||T0(e.type,e.memoizedProps)),n=!n),n&&Ie&&As(e),Lh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ie=Nx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Ie=Nx(e)}else t===27?(t=Ie,Ds(e.type)?(e=C0,C0=null,Ie=e):Ie=t):Ie=fn?Ai(e.stateNode.nextSibling):null;return!0}function lr(){Ie=fn=null,jt=!1}function am(){var e=gs;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),gs=null),e}function rc(e){gs===null?gs=[e]:gs.push(e)}var Hm=ha(null),xr=null,Na=null;function hs(e,t,n){Pe(Hm,t._currentValue),t._currentValue=n}function Ua(e){e._currentValue=Hm.current,vn(Hm)}function hh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gm(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),hh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(j(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),hh(r,n,e),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),hh(a.return,n,e),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function cr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=a.type;li(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Eh.current){if(r=a.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}a=a.return}return e!==null&&Gm(t,e,n,i),t.flags|=262144,e!==null}function Oh(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){xr=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return zS(xr,e)}function Yu(e,t){return xr===null&&ur(e),zS(e,t)}function zS(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Na===null){if(e===null)throw Error(j(308));Na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Na=Na.next=t;return n}var xw=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sw=sn.unstable_scheduleCallback,Mw=sn.unstable_NormalPriority,$e={$$typeof:aa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Y0(){return{controller:new xw,data:new Map,refCount:0}}function bc(e){e.refCount--,e.refCount===0&&Sw(Mw,function(){e.controller.abort()})}function Iy(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Vl=null;function bw(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Wl=null,km=0,hr=0,po=null;function Tw(e,t){if(Wl===null){var n=Wl=[];km=0,hr=Sg(),po={status:"pending",value:void 0,then:function(i){n.push(i)}}}return km++,t.then(Py,Py),t}function Py(){if(--km===0&&(Vl=null,Wl!==null)){po!==null&&(po.status="fulfilled");var e=Wl;Wl=null,hr=0,po=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ew(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var By=Gt.S;Gt.S=function(e,t){if(nb=ai(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Tw(e,t),Vl!==null)for(var n=Co;n!==null;)Iy(n,Vl),n=n.next;if(n=e.types,n!==null){for(var i=Co;i!==null;)Iy(i,n),i=i.next;if(hr!==0){i=Vl,i===null&&(i=Vl=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}By!==null&&By(e,t)};var sr=ha(null);function Z0(){var e=sr.current;return e!==null?e:we.pooledCache}function fh(e,t){t===null?Pe(sr,sr.current):Pe(sr,t.pool)}function FS(){var e=Z0();return e===null?null:{parent:$e._currentValue,pool:e}}var Po=Error(j(460)),J0=Error(j(474)),cf=Error(j(542)),Ih={then:function(){}};function zy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function VS(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sa,sa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vy(e),e===void 0&&!("reason"in t)?Error(j(600)):e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vy(e),e}throw rr=t,Po}}function $s(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(rr=n,Po):n}}var rr=null;function Fy(){if(rr===null)throw Error(j(459));var e=rr;return rr=null,e}function Vy(e){if(e===Po||e===cf)throw Error(j(483))}var mo=null,oc=0;function Zu(e){var t=oc;return oc+=1,mo===null&&(mo=[]),VS(mo,e,t)}function is(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ju(e,t){throw t.$$typeof===sA?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function HS(e){function t(f,_){if(e){var S=f.deletions;S===null?(f.deletions=[_],f.flags|=16):S.push(_)}}function n(f,_){if(!e)return null;for(;_!==null;)t(f,_),_=_.sibling;return null}function i(f){for(var _=new Map;f!==null;)f.key===null?_.set(f.index,f):_.set(f.key,f),f=f.sibling;return _}function a(f,_){return f=Da(f,_),f.index=0,f.sibling=null,f}function s(f,_,S){return f.index=S,e?(S=f.alternate,S!==null?(S=S.index,S<_?(f.flags|=2,_):S):(f.flags|=134217730,_)):(f.flags|=1048576,_)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,_,S,v){return _===null||_.tag!==6?(_=nm(S,f.mode,v),_.return=f,_):(_=a(_,S),_.return=f,_)}function l(f,_,S,v){var T=S.type;return T===$r?(f=h(f,_,S.props.children,v,S.key),is(f,S),f):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rs&&$s(T)===_.type)?(_=a(_,S.props),is(_,S),_.return=f,_):(_=uh(S.type,S.key,S.props,null,f.mode,v),is(_,S),_.return=f,_)}function c(f,_,S,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=im(S,f.mode,v),_.return=f,_):(_=a(_,S.children||[]),_.return=f,_)}function h(f,_,S,v,T){return _===null||_.tag!==7?(_=ar(S,f.mode,v,T),_.return=f,_):(_=a(_,S),_.return=f,_)}function p(f,_,S){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=nm(""+_,f.mode,S),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fu:return S=uh(_.type,_.key,_.props,null,f.mode,S),is(S,_),S.return=f,S;case Bl:return _=im(_,f.mode,S),_.return=f,_;case rs:return _=$s(_),p(f,_,S)}if(zl(_)||Dl(_))return _=ar(_,f.mode,S,null),_.return=f,_;if(typeof _.then=="function")return p(f,Zu(_),S);if(_.$$typeof===aa)return p(f,Yu(f,_),S);Ju(f,_)}return null}function u(f,_,S,v){var T=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return T!==null?null:o(f,_,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fu:return S.key===T?l(f,_,S,v):null;case Bl:return S.key===T?c(f,_,S,v):null;case rs:return S=$s(S),u(f,_,S,v)}if(zl(S)||Dl(S))return T!==null?null:h(f,_,S,v,null);if(typeof S.then=="function")return u(f,_,Zu(S),v);if(S.$$typeof===aa)return u(f,_,Yu(f,S),v);Ju(f,S)}return null}function d(f,_,S,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(S)||null,o(_,f,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fu:return f=f.get(v.key===null?S:v.key)||null,l(_,f,v,T);case Bl:return f=f.get(v.key===null?S:v.key)||null,c(_,f,v,T);case rs:return v=$s(v),d(f,_,S,v,T)}if(zl(v)||Dl(v))return f=f.get(S)||null,h(_,f,v,T,null);if(typeof v.then=="function")return d(f,_,S,Zu(v),T);if(v.$$typeof===aa)return d(f,_,S,Yu(_,v),T);Ju(_,v)}return null}function m(f,_,S,v){for(var T=null,E=null,A=_,x=_=0,w=null;A!==null&&x<S.length;x++){A.index>x?(w=A,A=null):w=A.sibling;var R=u(f,A,S[x],v);if(R===null){A===null&&(A=w);break}e&&A&&R.alternate===null&&t(f,A),_=s(R,_,x),E===null?T=R:E.sibling=R,E=R,A=w}if(x===S.length)return n(f,A),jt&&Ra(f,x),T;if(A===null){for(;x<S.length;x++)A=p(f,S[x],v),A!==null&&(_=s(A,_,x),E===null?T=A:E.sibling=A,E=A);return jt&&Ra(f,x),T}for(A=i(A);x<S.length;x++)w=d(A,f,x,S[x],v),w!==null&&(e&&(R=w.alternate,R!==null&&A.delete(R.key===null?x:R.key)),_=s(w,_,x),E===null?T=w:E.sibling=w,E=w);return e&&A.forEach(function(L){return t(f,L)}),jt&&Ra(f,x),T}function M(f,_,S,v){if(S==null)throw Error(j(151));for(var T=null,E=null,A=_,x=_=0,w=null,R=S.next();A!==null&&!R.done;x++,R=S.next()){A.index>x?(w=A,A=null):w=A.sibling;var L=u(f,A,R.value,v);if(L===null){A===null&&(A=w);break}e&&A&&L.alternate===null&&t(f,A),_=s(L,_,x),E===null?T=L:E.sibling=L,E=L,A=w}if(R.done)return n(f,A),jt&&Ra(f,x),T;if(A===null){for(;!R.done;x++,R=S.next())R=p(f,R.value,v),R!==null&&(_=s(R,_,x),E===null?T=R:E.sibling=R,E=R);return jt&&Ra(f,x),T}for(A=i(A);!R.done;x++,R=S.next())R=d(A,f,x,R.value,v),R!==null&&(e&&(w=R.alternate,w!==null&&A.delete(w.key===null?x:w.key)),_=s(R,_,x),E===null?T=R:E.sibling=R,E=R);return e&&A.forEach(function(H){return t(f,H)}),jt&&Ra(f,x),T}function g(f,_,S,v){if(typeof S=="object"&&S!==null&&S.type===$r&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Fu:t:{for(var T=S.key;_!==null;){if(_.key===T){if(T=S.type,T===$r){if(_.tag===7){n(f,_.sibling),v=a(_,S.props.children),is(v,S),v.return=f,f=v;break t}}else if(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rs&&$s(T)===_.type){n(f,_.sibling),v=a(_,S.props),is(v,S),v.return=f,f=v;break t}n(f,_);break}else t(f,_);_=_.sibling}S.type===$r?(v=ar(S.props.children,f.mode,v,S.key),is(v,S),v.return=f,f=v):(v=uh(S.type,S.key,S.props,null,f.mode,v),is(v,S),v.return=f,f=v)}return r(f);case Bl:t:{for(T=S.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(f,_.sibling),v=a(_,S.children||[]),v.return=f,f=v;break t}else{n(f,_);break}else t(f,_);_=_.sibling}v=im(S,f.mode,v),v.return=f,f=v}return r(f);case rs:return S=$s(S),g(f,_,S,v)}if(zl(S))return m(f,_,S,v);if(Dl(S)){if(T=Dl(S),typeof T!="function")throw Error(j(150));return S=T.call(S),M(f,_,S,v)}if(typeof S.then=="function")return g(f,_,Zu(S),v);if(S.$$typeof===aa)return g(f,_,Yu(f,S),v);Ju(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,_!==null&&_.tag===6?(n(f,_.sibling),v=a(_,S),v.return=f,f=v):(n(f,_),v=nm(S,f.mode,v),v.return=f,f=v),r(f)):n(f,_)}return function(f,_,S,v){try{oc=0;var T=g(f,_,S,v);return mo=null,T}catch(A){if(A===Po||A===cf)throw A;var E=Wn(29,A,null,f.mode);return E.lanes=v,E.return=f,E}}}var fr=HS(!0),GS=HS(!1),os=!1;function K0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _s(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ue&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Dh(e),LS(e,null,n),t}return of(e,i,t,n),Dh(e)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sS(e,n)}}function sm(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wm=!1;function Yl(){if(Wm){var e=po;if(e!==null)throw e}}function Zl(e,t,n,i){Wm=!1;var a=e.updateQueue;os=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ae&u)===u:(i&u)===u){u!==0&&u===hr&&(Wm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(m=M.payload,typeof m=="function"){p=m.call(g,p,u);break t}p=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=M.payload,u=typeof m=="function"?m.call(g,p,u):m,u==null)break t;p=Ce({},p,u);break t;case 2:os=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),Rs|=r,e.lanes=r,e.memoizedState=p}}function kS(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function XS(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kS(n[e],t)}var ws=ha(null),Ph=ha(0);function Hy(e,t){e=za,Pe(Ph,e),Pe(ws,t),za=e|t.baseLanes}function qm(){Pe(Ph,za),Pe(ws,ws.current)}function j0(){za=Ph.current,vn(ws),vn(Ph)}var Sn=ha(null),Nn=null;function ys(e){var t=e.alternate;Pe(yn,yn.current&1),Pe(Sn,e),Nn===null&&(t===null||ws.current!==null||t.memoizedState!==null)&&(Nn=e)}function Ym(e){Pe(yn,yn.current),Pe(Sn,e),Nn===null&&(Nn=e)}function WS(e){e.tag===22?(Pe(yn,yn.current),Pe(Sn,e),Nn===null&&(Nn=e)):xs()}function xs(){Pe(yn,yn.current),Pe(Sn,Sn.current)}function ei(e){vn(Sn),Nn===e&&(Nn=null),vn(yn)}var yn=ha(0);function lc(e,t){Pe(Sn,Sn.current),Pe(yn,t)}function Q0(e){vn(yn),vn(Sn),Nn===e&&(Nn=null)}function Bh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||w0(n)||Eg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=0,Yt=null,Ee=null,Qe=null,zh=!1,go=!1,dr=!1,Fh=0,cc=0,_o=null,Aw=0;function qe(){throw Error(j(321))}function $0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function tg(e,t,n,i,a,s){return Ia=s,Yt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?MM:bM,dr=!1,s=n(i,a),dr=!1,go&&(s=YS(t,n,i,a)),qS(e),s}function qS(e){Gt.H=Vh;var t=Ee!==null&&Ee.next!==null;if(Ia=0,Qe=Ee=Yt=null,zh=!1,cc=0,_o=null,t)throw Error(j(300));e===null||tn||(e=e.dependencies,e!==null&&Oh(e)&&(tn=!0))}function YS(e,t,n,i){Yt=e;var a=0;do{if(go&&(_o=null),cc=0,go=!1,25<=a)throw Error(j(301));if(a+=1,Qe=Ee=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=Ow,s=t(n,i)}while(go);return s}function ww(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Tc(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Yt.flags|=1024),t}function eg(){var e=Fh!==0;return Fh=0,e}function ng(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ig(e){if(zh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zh=!1}Ia=0,Qe=Ee=Yt=null,go=!1,cc=Fh=0,_o=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Yt.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Je(){if(Ee===null){var e=Yt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Qe===null?Yt.memoizedState:Qe.next;if(t!==null)Qe=t,Ee=e;else{if(e===null)throw Yt.alternate===null?Error(j(467)):Error(j(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Qe===null?Yt.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tc(e){var t=cc;return cc+=1,_o===null&&(_o=[]),e=VS(_o,e,t),t=Yt,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?MM:bM),e}function hf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tc(e);if(e.$$typeof===lA)return;if(e.$$typeof===aa)return _n(e)}throw Error(j(438,String(e)))}function ag(e){var t=null,n=Yt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Yt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=uf(),Yt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=oA;return t.index++,n}function Pa(e,t){return typeof t=="function"?t(e):t}function dh(e){var t=Je();return sg(t,Ee,e)}function sg(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ae&p)===p:(Ia&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===hr&&(h=!0);else if((Ia&u)===u){c=c.next,u===hr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Yt.lanes|=u,Rs|=u;p=c.action,dr&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Yt.lanes|=p,Rs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!li(s,e.memoizedState)&&(tn=!0,h&&(n=po,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function rm(e){var t=Je(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);li(s,t.memoizedState)||(tn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function ZS(e,t,n){var i=Yt,a=Je(),s=jt;if(s){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!li((Ee||a).memoizedState,n);if(r&&(a.memoizedState=n,tn=!0),a=a.queue,rg(jS.bind(null,i,a,e),[e]),e=a.getSnapshot!==t||r||Qe!==null&&(Qe.memoizedState.tag&1)!==0,To(e?9:8,{destroy:void 0},KS.bind(null,i,a,n,t),null),e){if(i.flags|=2048,we===null)throw Error(j(349));s||(Ia&127)!==0||JS(i,t,n)}return n}function JS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Yt.updateQueue,t===null?(t=uf(),Yt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function KS(e,t,n,i){t.value=n,t.getSnapshot=i,QS(t)&&$S(e)}function jS(e,t,n){return n(function(){QS(t)&&$S(e)})}function QS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch{return!0}}function $S(e){var t=yr(e,2);t!==null&&qn(t,e,2)}function Zm(e){var t=zn();if(typeof e=="function"){var n=e;if(e=n(),dr){cs(!0);try{n()}finally{cs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t}function tM(e,t,n,i){return e.baseState=n,sg(e,Ee,typeof i=="function"?i:Pa)}function Cw(e,t,n,i,a){if(df(e))throw Error(j(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,eM(t,s)):(s.next=n.next,t.pending=n.next=s)}}function eM(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};r.types=s!==null?s.types:null,Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),Gy(e,t,o)}catch(c){Jm(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),Gy(e,t,s)}catch(c){Jm(e,t,c)}}function Gy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ky(e,t,i)},function(i){return Jm(e,t,i)}):ky(e,t,n)}function ky(e,t,n){t.status="fulfilled",t.value=n,nM(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,eM(e,n)))}function Jm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,nM(t),t=t.next;while(t!==i)}e.action=null}function nM(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iM(e,t){return t}function Xy(e,t){if(jt){var n=we.formState;if(n!==null){t:{var i=Yt;if(jt){if(Ie){e:{for(var a=Ie,s=Ei;a.nodeType!==8;){if(!s){a=null;break e}if(a=Ai(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ie=Ai(a.nextSibling),i=a.data==="F!";break t}}As(i)}i=!1}i&&(t=n[0])}}return n=zn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iM,lastRenderedState:t},n.queue=i,n=yM.bind(null,Yt,i),i.dispatch=n,i=Zm(!1),s=ug.bind(null,Yt,!1,i.queue),i=zn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Cw.bind(null,Yt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Wy(e){var t=Je();return aM(t,Ee,e)}function aM(e,t,n){if(t=sg(e,t,iM)[0],e=dh(Pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Tc(t)}catch(r){throw r===Po?cf:r}else i=t;t=Je();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Yt.flags|=2048,To(9,{destroy:void 0},Rw.bind(null,a,n),null)),[i,s,e]}function Rw(e,t){e.action=t}function qy(e){var t=Je(),n=Ee;if(n!==null)return aM(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function To(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Yt.updateQueue,t===null&&(t=uf(),Yt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function sM(){return Je().memoizedState}function ph(e,t,n,i){var a=zn();Yt.flags|=e,a.memoizedState=To(1|t,{destroy:void 0},n,i===void 0?null:i)}function ff(e,t,n,i){var a=Je();i=i===void 0?null:i;var s=a.memoizedState.inst;Ee!==null&&i!==null&&$0(i,Ee.memoizedState.deps)?a.memoizedState=To(t,s,n,i):(Yt.flags|=e,a.memoizedState=To(1|t,s,n,i))}function Yy(e,t){ph(8390656,8,e,t)}function rg(e,t){ff(2048,8,e,t)}function Nw(e){Yt.flags|=4;var t=Yt.updateQueue;if(t===null)t=uf(),Yt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rM(e){var t=Je().memoizedState;return Nw({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function oM(e,t){return ff(4,2,e,t)}function lM(e,t){return ff(4,4,e,t)}function cM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uM(e,t,n){n=n!=null?n.concat([e]):null,ff(4,4,cM.bind(null,t,e),n)}function og(){}function hM(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&$0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fM(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&$0(t,i[1]))return i[0];if(i=e(),dr){cs(!0);try{e()}finally{cs(!1)}}return n.memoizedState=[i,t],i}function lg(e,t,n){return n===void 0||(Ia&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ab(),Yt.lanes|=e,Rs|=e,n)}function dM(e,t,n,i){return li(n,t)?n:ws.current!==null?(e=lg(e,n,i),li(e,t)||(tn=!0),e):(Ia&106)===0||(Ia&1073741824)!==0&&(ae&261930)===0?(tn=!0,e.memoizedState=n):(e=ab(),Yt.lanes|=e,Rs|=e,t)}function pM(e,t,n,i,a){var s=he.p;he.p=s!==0&&8>s?s:8;var r=Gt.T,o={};o.types=r!==null?r.types:null,Gt.T=o,ug(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Ew(l,i);Jl(e,t,h,oi(e))}else Jl(e,t,i,oi(e))}catch(p){Jl(e,t,{then:function(){},status:"rejected",reason:p},oi())}finally{he.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function Dw(){}function Km(e,t,n,i){if(e.tag!==5)throw Error(j(476));var a=mM(e).queue;pM(e,a,t,ir,n===null?Dw:function(){return gM(e),n(i)})}function mM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ir,baseState:ir,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:ir},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gM(e){var t=mM(e);t.next===null&&(t=e.alternate.memoizedState),Jl(e,t.next.queue,{},oi())}function cg(){return _n(Do)}function _M(){return Je().memoizedState}function vM(){return Je().memoizedState}function Uw(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=oi();e=_s(n);var i=vs(t,e,n);i!==null&&(qn(i,t,n),ql(i,t,n)),t={cache:Y0()},e.payload=t;return}t=t.return}}function Lw(e,t,n){var i=oi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},df(e)?xM(t,n):(n=X0(e,t,n,i),n!==null&&(qn(n,e,i),SM(n,t,i)))}function yM(e,t,n){var i=oi();Jl(e,t,n,i)}function Jl(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(df(e))xM(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,li(o,r))return of(e,t,a,0),we===null&&rf(),!1}catch{}if(n=X0(e,t,a,i),n!==null)return qn(n,e,i),SM(n,t,i),!0}return!1}function ug(e,t,n,i){if(i={lane:2,revertLane:Sg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},df(e)){if(t)throw Error(j(479))}else t=X0(e,n,i,2),t!==null&&qn(t,e,2)}function df(e){var t=e.alternate;return e===Yt||t!==null&&t===Yt}function xM(e,t){go=zh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function SM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sS(e,n)}}var Vh={readContext:_n,use:hf,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe,useEffectEvent:qe},MM={readContext:_n,use:hf,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:Yy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ph(4194308,4,cM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ph(4194308,4,e,t)},useInsertionEffect:function(e,t){ph(4,2,e,t)},useMemo:function(e,t){var n=zn();t=t===void 0?null:t;var i=e();if(dr){cs(!0);try{e()}finally{cs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zn();if(n!==void 0){var a=n(t);if(dr){cs(!0);try{n(t)}finally{cs(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Lw.bind(null,Yt,e),[i.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:function(e){e=Zm(e);var t=e.queue,n=yM.bind(null,Yt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:og,useDeferredValue:function(e,t){var n=zn();return lg(n,e,t)},useTransition:function(){var e=Zm(!1);return e=pM.bind(null,Yt,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Yt,a=zn();if(jt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),we===null)throw Error(j(349));(ae&127)!==0||JS(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Yy(jS.bind(null,i,s,e),[e]),i.flags|=2048,To(9,{destroy:void 0},KS.bind(null,i,s,n,t),null),n},useId:function(){var e=zn(),t=we.identifierPrefix;if(jt){var n=oa,i=ra;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Fh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Aw++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:cg,useFormState:Xy,useActionState:Xy,useOptimistic:function(e){var t=zn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ug.bind(null,Yt,!0,n),n.dispatch=t,[e,t]},useMemoCache:ag,useCacheRefresh:function(){return zn().memoizedState=Uw.bind(null,Yt)},useEffectEvent:function(e){var t=zn(),n={impl:e};return t.memoizedState=n,function(){if((ue&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},bM={readContext:_n,use:hf,useCallback:hM,useContext:_n,useEffect:rg,useImperativeHandle:uM,useInsertionEffect:oM,useLayoutEffect:lM,useMemo:fM,useReducer:dh,useRef:sM,useState:function(){return dh(Pa)},useDebugValue:og,useDeferredValue:function(e,t){var n=Je();return dM(n,Ee.memoizedState,e,t)},useTransition:function(){var e=dh(Pa)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Tc(e),t]},useSyncExternalStore:ZS,useId:_M,useHostTransitionStatus:cg,useFormState:Wy,useActionState:Wy,useOptimistic:function(e,t){var n=Je();return tM(n,Ee,e,t)},useMemoCache:ag,useCacheRefresh:vM,useEffectEvent:rM},Ow={readContext:_n,use:hf,useCallback:hM,useContext:_n,useEffect:rg,useImperativeHandle:uM,useInsertionEffect:oM,useLayoutEffect:lM,useMemo:fM,useReducer:rm,useRef:sM,useState:function(){return rm(Pa)},useDebugValue:og,useDeferredValue:function(e,t){var n=Je();return Ee===null?lg(n,e,t):dM(n,Ee.memoizedState,e,t)},useTransition:function(){var e=rm(Pa)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Tc(e),t]},useSyncExternalStore:ZS,useId:_M,useHostTransitionStatus:cg,useFormState:qy,useActionState:qy,useOptimistic:function(e,t){var n=Je();return Ee!==null?tM(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ag,useCacheRefresh:vM,useEffectEvent:rM};function om(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=oi(),a=_s(i);a.payload=t,n!=null&&(a.callback=n),t=vs(e,a,i),t!==null&&(qn(t,e,i),ql(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=oi(),a=_s(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=vs(e,a,i),t!==null&&(qn(t,e,i),ql(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oi(),i=_s(n);i.tag=2,t!=null&&(i.callback=t),t=vs(e,i,n),t!==null&&(qn(t,e,n),ql(t,e,n))}};function Zy(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!ac(n,i)||!ac(a,s):!0}function Jy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&jm.enqueueReplaceState(t,t.state,null)}function pr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function TM(e){Nh(e)}function EM(e){console.error(e)}function AM(e){Nh(e)}function Hh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ky(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Qm(e,t,n){return n=_s(n),n.tag=3,n.payload={element:null},n.callback=function(){Hh(e,t)},n}function wM(e){return e=_s(e),e.tag=3,e}function CM(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Ky(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ky(t,n,i),typeof a!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Iw(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&cr(t,n,a,!0),n=Sn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Nn===null?Jh():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Ih?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),pm(e,i,a)),!1;case 22:return n.flags|=65536,i===Ih?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),pm(e,i,a)),!1}throw Error(j(435,n.tag))}return pm(e,i,a),Jh(),!1}if(jt)return t=Sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Vm&&(e=Error(j(422),{cause:i}),rc(Ti(e,n)))):(i!==Vm&&(t=Error(j(423),{cause:i}),rc(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ti(i,n),a=Qm(e.stateNode,i,a),sm(e,a),Ye!==4&&(Ye=2)),!1;var s=Error(j(520),{cause:i});if(s=Ti(s,n),$l===null?$l=[s]:$l.push(s),Ye!==4&&(Ye=2),t===null)return!0;i=Ti(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qm(n.stateNode,i,e),sm(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ss===null||!Ss.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wM(a),CM(a,e,n,i),sm(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var hg=Error(j(461)),tn=!1;function nn(e,t,n,i){t.child=e===null?GS(t,null,n,i):fr(t,e.child,n,i)}function jy(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return ur(t),i=tg(e,t,n,r,s,a),o=eg(),e!==null&&!tn?(ng(e,t,a),Ba(e,t,a)):(jt&&o&&lf(t),t.flags|=1,nn(e,t,i,a),t.child)}function Qy(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!W0(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,RM(e,t,s,i,a)):(e=uh(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!dg(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:ac,n(r,i)&&e.ref===t.ref)return Ba(e,t,a)}return t.flags|=1,e=Da(s,i),e.ref=t.ref,e.return=t,t.child=e}function RM(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(ac(s,i)&&e.ref===t.ref)if(tn=!1,t.pendingProps=i=s,dg(e,a))(e.flags&131072)!==0&&(tn=!0);else return t.lanes=e.lanes,Ba(e,t,a)}return $m(e,t,n,i,a)}function NM(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return $y(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fh(t,s!==null?s.cachePool:null),s!==null?Hy(t,s):qm(),WS(t);else return i=t.lanes=536870912,$y(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(fh(t,s.cachePool),Hy(t,s),xs(),t.memoizedState=null):(e!==null&&fh(t,null),qm(),xs());return nn(e,t,a,n),t.child}function Kl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $y(e,t,n,i,a){var s=Z0();return s=s===null?null:{parent:$e._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&fh(t,null),qm(),WS(t),e!==null&&cr(e,t,i,!0),t.childLanes=a,null}function mh(e,t){return t=pf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tx(e,t,n){return fr(t,e.child,null,n),e=mh(t,t.pendingProps),e.flags|=2,ei(t),t.memoizedState=null,e}function Pw(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=mh(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Kl(null,e);if(Ym(t),(e=Ie)?(e=Nb(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Es!==null?{id:ra,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},n=IS(e),n.return=t,t.child=n,fn=t,Ie=null)):e=null,e===null)throw As(t);return t.lanes=536870912,null}return mh(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Ym(t),a)if(t.flags&256)t.flags&=-257,t=tx(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(tn||cr(e,t,n,!1),a=(n&e.childLanes)!==0,tn||a){if(ws.current===null){if(i=we,i!==null&&(r=rS(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,yr(e,r),qn(i,e,r),hg;Jh()}t=tx(e,t,n)}else e=s.treeContext,Ie=Ai(r.nextSibling),fn=t,jt=!0,gs=null,Ei=!1,e!==null&&BS(t,e),t=mh(t,i),t.flags|=134221824;return t}return e=Da(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Jr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function $m(e,t,n,i,a){return ur(t),n=tg(e,t,n,i,void 0,a),i=eg(),e!==null&&!tn?(ng(e,t,a),Ba(e,t,a)):(jt&&i&&lf(t),t.flags|=1,nn(e,t,n,a),t.child)}function ex(e,t,n,i,a,s){return ur(t),t.updateQueue=null,n=YS(t,i,n,a),qS(e),i=eg(),e!==null&&!tn?(ng(e,t,s),Ba(e,t,s)):(jt&&i&&lf(t),t.flags|=1,nn(e,t,n,s),t.child)}function nx(e,t,n,i,a){if(ur(t),t.stateNode===null){var s=ro,r=n.contextType;typeof r=="object"&&r!==null&&(s=_n(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=jm,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},K0(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?_n(r):ro,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(om(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&jm.enqueueReplaceState(s,s.state,null),Zl(t,i,s,a),Yl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=pr(n,o);s.props=l;var c=s.context,h=n.contextType;r=ro,typeof h=="object"&&h!==null&&(r=_n(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Jy(t,s,i,r),os=!1;var u=t.memoizedState;s.state=u,Zl(t,i,s,a),Yl(),c=t.memoizedState,o||u!==c||os?(typeof p=="function"&&(om(t,n,p,i),c=t.memoizedState),(l=os||Zy(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Xm(e,t),r=t.memoizedProps,h=pr(n,r),s.props=h,p=t.pendingProps,u=s.context,c=n.contextType,l=ro,typeof c=="object"&&c!==null&&(l=_n(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Jy(t,s,i,l),os=!1,u=t.memoizedState,s.state=u,Zl(t,i,s,a),Yl();var d=t.memoizedState;r!==p||u!==d||os||e!==null&&e.dependencies!==null&&Oh(e.dependencies)?(typeof o=="function"&&(om(t,n,o,i),d=t.memoizedState),(h=os||Zy(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Oh(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Jr(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,n,a)):nn(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Ba(e,t,a),e}function ix(e,t,n,i){return lr(),t.flags|=256,nn(e,t,n,i),t.child}var t0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function e0(e){return{baseLanes:e,cachePool:FS()}}function n0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ii),e}function DM(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(yn.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(a?ys(t):xs(),(e=Ie)?(e=Nb(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Es!==null?{id:ra,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},n=IS(e),n.return=t,t.child=n,fn=t,Ie=null)):e=null,e===null)throw As(t);return Eg(e)?t.lanes=32:t.lanes=536870912,null}return s=i.children,i=i.fallback,a?(xs(),a=t.mode,s=pf({mode:"hidden",children:s},a),i=ar(i,a,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=e0(n),i.childLanes=n0(e,r,n),t.memoizedState=t0,Kl(null,i)):(ys(t),fg(t,s))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return Bw(e,t,s,r,i,l,o,n)}return a?(xs(),a=i.fallback,s=t.mode,o=e.child,l=o.sibling,i=Da(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=Da(l,a):(a=ar(a,s,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,Kl(null,i),i=t.child,a=e.child.memoizedState,a===null?a=e0(n):(s=a.cachePool,s!==null?(o=$e._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=FS(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=n0(e,r,n),t.memoizedState=t0,Kl(e.child,i)):(ys(t),n=e.child,e=n.sibling,n=Da(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function fg(e,t){return t=pf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pf(e,t){return e=Wn(22,e,null,t),e.lanes=0,e}function Ku(e,t,n){return fr(t,e.child,null,n),e=fg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bw(e,t,n,i,a,s,r,o){if(n)return t.flags&256?(ys(t),t.flags&=-257,Ku(e,t,o)):t.memoizedState!==null?(xs(),t.child=e.child,t.flags|=128,null):(xs(),s=a.fallback,r=t.mode,a=pf({mode:"visible",children:a.children},r),s=ar(s,r,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,fr(t,e.child,null,o),a=t.child,a.memoizedState=e0(o),a.childLanes=n0(e,i,o),t.memoizedState=t0,Kl(null,a));if(ys(t),Eg(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(j(419)),a.stack="",a.digest=i,rc({value:a,source:null,stack:null})),Ku(e,t,o)}if(tn||cr(e,t,o,!1),i=(o&e.childLanes)!==0,tn||i){if(ws.current!==null)return Ku(e,t,o);if(i=we,i!==null&&(a=rS(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,yr(e,a),qn(i,e,a),hg;return w0(s)||Jh(),Ku(e,t,o)}return w0(s)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ie=Ai(s.nextSibling),fn=t,jt=!0,gs=null,Ei=!1,e!==null&&BS(t,e),t=fg(t,a.children),t.flags|=134221824,t)}function ax(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),hh(e.return,t,n)}function sx(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bh(n)===null&&(t=e),e=e.sibling}return t}function ju(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function lm(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function i0(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=yn.current;if(t.flags&128)return lc(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,lc(t,r),a==="backwards"&&e!==null?(lm(e),nn(e,t,i,n),lm(e)):nn(e,t,i,n),i=jt?sc:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ax(e,n,t);else if(e.tag===19)ax(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"backwards":n=sx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null,lm(t)),ju(t,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Bh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ju(t,!0,n,null,s,i);break;case"together":ju(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=sx(t.child),n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ju(t,!1,a,n,s,i)}return t.child}function rx(e,t,n){var i=t.pendingProps;return hs(t,t.type,i.value),nn(e,t,i.children,n),t.child}function Ba(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(cr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Da(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Da(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oh(e)))}function zw(e,t,n){switch(t.tag){case 3:Ah(t,t.stateNode.containerInfo),hs(t,$e,e.memoizedState.cache),lr();break;case 27:case 5:Nm(t);break;case 4:Ah(t,t.stateNode.containerInfo);break;case 10:hs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ym(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ys(t),t.flags|=128,null;i=cr(e,t,n,!1);var a=t.child.childLanes;return i||(n&a)!==0?DM(e,t,n):(ys(t),e=Ba(e,t,n),e!==null?e.sibling:null)}ys(t);break;case 19:if(t.flags&128)return i0(e,t,n);if(a=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(cr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return i0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),lc(t,yn.current),i)break;return null;case 22:return t.lanes=0,NM(e,t,n,t.pendingProps);case 24:hs(t,$e,e.memoizedState.cache)}return Ba(e,t,n)}function UM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tn=!0;else{if(!dg(e,n)&&(t.flags&128)===0)return tn=!1,zw(e,t,n);tn=(e.flags&131072)!==0}else tn=!1,jt&&(t.flags&1048576)!==0&&PS(t,sc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=$s(t.elementType),t.type=e,typeof e=="function")W0(e)?(i=pr(e,i),t.tag=1,t=nx(null,t,e,i,n)):(t.tag=0,t=$m(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===U0){t.tag=11,t=jy(null,t,e,i,n);break t}else if(a===L0){t.tag=14,t=Qy(null,t,e,i,n);break t}else if(a===aa){t.tag=10,t.type=e,t=rx(null,t,n);break t}}throw t=Cm(e)||e,Error(j(306,t,""))}}return t;case 0:return $m(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=pr(i,t.pendingProps),nx(e,t,i,a,n);case 3:t:{if(Ah(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Xm(e,t),Zl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,hs(t,$e,i),i!==s.cache&&Gm(t,[$e],n,!0),Yl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=ix(e,t,i,n);break t}else if(i!==a){a=Ti(Error(j(424)),t),rc(a),t=ix(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ie=Ai(e.firstChild),fn=t,jt=!0,gs=null,Ei=!0,n=GS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(lr(),i===a){t=Ba(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return Jr(e,t),e===null?(n=Lx(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(t.stateNode=Sb(t.type,t.pendingProps,ms.current,t)):t.memoizedState=Lx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Nm(t),e===null&&jt&&(i=t.stateNode=Db(t.type,t.pendingProps,ms.current),fn=t,Ei=!0,a=Ie,Ds(t.type)?(C0=a,Ie=Ai(i.firstChild)):Ie=a),nn(e,t,t.pendingProps.children,n),Jr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((a=i=Ie)&&(i=NC(i,t.type,t.pendingProps,Ei),i!==null?(t.stateNode=i,fn=t,Ie=Ai(i.firstChild),Ei=!1,a=!0):a=!1),a||As(t)),Nm(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,T0(a,s)?i=null:r!==null&&T0(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=tg(e,t,ww,null,null,n),Do._currentValue=a),Jr(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=Ie)&&(n=DC(n,t.pendingProps,Ei),n!==null?(t.stateNode=n,fn=t,Ie=null,e=!0):e=!1),e||As(t)),null;case 13:return DM(e,t,n);case 4:return Ah(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fr(t,null,i,n):nn(e,t,i,n),t.child;case 11:return jy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Jr(e,t),nn(e,t,i,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return rx(e,t,n);case 9:return a=t.type._context,i=t.pendingProps.children,ur(t),a=_n(a),i=i(a),t.flags|=1,nn(e,t,i,n),t.child;case 14:return Qy(e,t,t.type,t.pendingProps,n);case 15:return RM(e,t,t.type,t.pendingProps,n);case 19:return i0(e,t,n);case 31:return Pw(e,t,n);case 22:return NM(e,t,n,t.pendingProps);case 24:return ur(t),i=_n($e),e===null?(a=Z0(),a===null&&(a=we,s=Y0(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},K0(t),hs(t,$e,a)):((e.lanes&n)!==0&&(Xm(e,t),Zl(t,null,null,n),Yl()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),hs(t,$e,i)):(i=s.cache,hs(t,$e,i),i!==a.cache&&Gm(t,[$e],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:jt&&lf(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Jr(e,t),nn(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function Ca(e){e.flags|=4}function cm(e,t,n,i,a){var s;if((s=(e.mode&32)!==0)&&(s=n===null?Px(t,i):Px(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(ob())e.flags|=8192;else throw rr=Ih,J0}else e.flags&=-16777217}function ox(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ib(t))if(ob())e.flags|=8192;else throw rr=Ih,J0}function Qu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?iS():536870912,e.lanes|=t,Eo|=t)}function Ll(e,t){if(!jt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Fw(e,t,n){var i=t.pendingProps;switch(q0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ua($e),So(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?Ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,am())),Oe(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Ca(t),s!==null?(Oe(t),ox(t,s)):(Oe(t),cm(t,a,null,i,n))):s?s!==e.memoizedState?(Ca(t),Oe(t),ox(t,s)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ca(t),Oe(t),cm(t,a,e,i,n)),null;case 27:if(wh(t),n=ms.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ca(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Oe(t),t.subtreeFlags&=-33554433,null}e=la.current,Yr(t)?Oy(t,e):(e=Db(a,i,n),t.stateNode=e,Ca(t))}return Oe(t),t.subtreeFlags&=-33554433,null;case 5:if(wh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ca(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Oe(t),t.subtreeFlags&=-33554433,null}if(s=la.current,Yr(t))Oy(t,s);else{var r=fc(ms.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[gn]=t,s[Zn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(xn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ca(t)}}return Oe(t),t.subtreeFlags&=-33554433,cm(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ca(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=ms.current,Yr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=fn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[gn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||yb(e.nodeValue,n)),e||As(t,!0)}else e=fc(e).createTextNode(i),e[gn]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Yr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[gn]=t}else lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=am(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ei(t),t):(ei(t),null);if((t.flags&128)!==0)throw Error(j(558))}return Oe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[gn]=t}else lr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else a=am(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ei(t),t):(ei(t),null)}return ei(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qu(t,t.updateQueue),Oe(t),null);case 4:return So(),e===null&&Mg(t.stateNode.containerInfo),t.flags|=67108864,Oe(t),null;case 10:return Ua(t.type),Oe(t),null;case 19:if(Q0(t),i=t.memoizedState,i===null)return Oe(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Ll(i,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Bh(e),s!==null){for(t.flags|=128,Ll(i,!1),e=s.updateQueue,t.updateQueue=e,Qu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)OS(n,e),n=n.sibling;return lc(t,yn.current&1|2),jt&&Ra(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ai()>Yh&&(t.flags|=128,a=!0,Ll(i,!1),t.lanes=4194304)}else{if(!a)if(e=Bh(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Qu(t,e),Ll(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!jt)return Oe(t),null}else 2*ai()-i.renderingStartTime>Yh&&n!==536870912&&(t.flags|=128,a=!0,Ll(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ai(),e.sibling=null,s=yn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||jt?lc(t,s):(n=s,Pe(Sn,t),Pe(yn,n),Nn===null&&(Nn=t)),jt&&Ra(t,i.treeForkCount),e}return Oe(t),null;case 22:case 23:return ei(t),j0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&Qu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&vn(sr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ua($e),Oe(t),null;case 25:return null;case 30:return t.flags|=33554432,Oe(t),null}throw Error(j(156,t.tag))}function Vw(e,t){switch(q0(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ua($e),So(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wh(t),null;case 31:if(t.memoizedState!==null){if(ei(t),t.alternate===null)throw Error(j(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ei(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return So(),null;case 10:return Ua(t.type),null;case 22:case 23:return ei(t),j0(),e!==null&&vn(sr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ua($e),null;case 25:return null;default:return null}}function LM(e,t){switch(q0(t),t.tag){case 3:Ua($e),So();break;case 26:case 27:case 5:wh(t);break;case 4:So();break;case 31:t.memoizedState!==null&&ei(t);break;case 13:ei(t);break;case 19:Q0(t);break;case 10:Ua(t.type);break;case 22:case 23:ei(t),j0(),e!==null&&vn(sr);break;case 24:Ua($e)}}function Ec(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){Me(t,t.return,o)}}function Cs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){Me(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){Me(t,t.return,h)}}function OM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{XS(t,n)}catch(i){Me(e,e.return,i)}}}function IM(e,t,n){n.props=pr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Me(e,t,i)}}function na(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var a=e.stateNode,s=Oa(e.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=Eb(s)),i=a.ref;break;case 7:if(e.stateNode===null){var r=new ci(e);Yn(e.child,!1,CC,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Me(e,t,o)}}function mn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Me(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Me(e,t,a)}else n.current=null}function Gh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Rb(e.stateNode,t[n])}function lx(e){for(var t=e.return;t!==null&&(mg(t)&&Rb(e.stateNode,t.stateNode),!pg(t));)t=t.return}function jl(e){for(var t=e.return;t!==null&&(mg(t)&&RC(e.stateNode,t.stateNode),!pg(t));)t=t.return}function pg(e){return e.tag===5||e.tag===3||e.tag===27}function mg(e){return e&&e.tag===7&&e.stateNode!==null}function a0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Me(e,e.return,a)}}function um(e,t,n){try{var i=e.stateNode;uC(i,e.type,n,t),i[Zn]=t}catch(a){Me(e,e.return,a)}}function PM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ds(e.type)||e.tag===4}function hm(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||PM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ds(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function s0(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(a),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sa)),Gh(e,i),le=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Ds(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(s0(e,t,n,i),e=e.sibling;e!==null;)s0(e,t,n,i),e=e.sibling}function kh(e,t,n,i){var a=e.tag;if(a===5||a===6)a=e.stateNode,t?n.insertBefore(a,t):n.appendChild(a),Gh(e,i),le=!0;else if(a!==4&&(a===27&&(Gh(e,i),i=null,Ds(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(kh(e,t,n,i),e=e.sibling;e!==null;)kh(e,t,n,i),e=e.sibling}function BM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xn(t,i,n),t[gn]=e,t[Zn]=n}catch(s){Me(e,e.return,s)}}var Xh=!1,ni=null;function cx(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Xh=!0)}var ia=null;function ux(){var e=ia;return ia=null,e}var Xn=0;function Bo(e,t,n,i,a){return Xn=0,zM(e.child,t,n,i,a)}function zM(e,t,n,i,a){for(var s=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=E0(r);i.push(o),o.view&&(s=!0)}else s||E0(r).view&&(s=!0);Xh=!0,Mb(r,Xn===0?t:t+"_"+Xn,n),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||zM(e.child,t,n,i,a)&&(s=!0));e=e.sibling}return s}function ua(e,t){for(;e!==null;)e.tag===5?bb(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ua(e.child,t)),e=e.sibling}function gh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(gh(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(j(544));var n=t.name;t=Va(t.default,t.share),t!=="none"&&(Bo(e,n,t,null,!1)||ua(e.child,!1))}e=e.sibling}}function r0(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,a=Oa(i,n),s=Va(i.default,n.paired?i.share:i.enter);s!=="none"?Bo(e,a,s,null,!1)?(gh(e),n.paired||t||Ao(e,i.onEnter)):ua(e.child,!1):gh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)r0(e,t),e=e.sibling;else gh(e)}function o0(e){if(ni!==null&&ni.size!==0){var t=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=t.get(i);if(a!==void 0){var s=Va(n.default,n.share);if(s!=="none"&&(Bo(e,i,s,null,!1)?(s=e.stateNode,a.paired=s,s.paired=a,Ao(e,n.onShare)):ua(e.child,!1)),t.delete(i),t.size===0)break}}}o0(e)}e=e.sibling}}}function l0(e){if(e.tag===30){var t=e.memoizedProps,n=Oa(t,e.stateNode),i=ni!==null?ni.get(n):void 0,a=Va(t.default,i!==void 0?t.share:t.exit);a!=="none"&&(Bo(e,n,a,null,!1)?i!==void 0?(a=e.stateNode,i.paired=a,a.paired=i,ni.delete(n),Ao(e,t.onShare)):Ao(e,t.onExit):ua(e.child,!1)),ni!==null&&o0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)l0(e),e=e.sibling;else ni!==null&&o0(e)}function FM(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Oa(t,e.stateNode);t=Va(t.default,t.update),e.flags&=-5,t!=="none"&&Bo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&FM(e);e=e.sibling}}function c0(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ua(e.child,!1))}c0(e)}e=e.sibling}}function _h(e){if(e.tag===30)e.stateNode.paired=null,ua(e.child,!1),c0(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_h(e),e=e.sibling;else c0(e)}function VM(e){for(e=e.child;e!==null;)e.tag===30?ua(e.child,!1):(e.subtreeFlags&33554432)!==0&&VM(e),e=e.sibling}function gg(e,t,n,i,a,s,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(s!==null&&Xn<s.length){var c=s[Xn],h=E0(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Mb(l,Xn===0?n:n+"_"+Xn,a),o&&(e.flags&4)!==0||(ia===null&&(ia=[]),ia.push(l,Xn===0?i:i+"_"+Xn,t.memoizedProps)),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:gg(e,t.child,n,i,a,s,r)&&(o=!0));t=t.sibling}return o}function HM(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,a=Oa(n,i),s=Va(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(gC)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Xn=0,a=gg(i,o,a,a,s,r,!1),(e.flags&4)!==0&&a&&(t||Ao(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&HM(e,t);e=e.sibling}}var cn=!1,ge=!1,$i=!1,fm=!1,hx=typeof WeakSet=="function"?WeakSet:Set,un=null,ta=!1,Hl=!1,Wh=!1,u0=!1;function Hw(e,t,n){if(e=e.containerInfo,M0=Uo,e=AS(e),G0(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var m;u!==i||s!==0&&u.nodeType!==3||(l=o+s),u!==r||a!==0&&u.nodeType!==3||(c=o+a),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)d=u,u=m;for(;;){if(u===e)break e;if(d===i&&++h===s&&(l=o),d===r&&++p===a&&(c=o),(m=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=m}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(b0={focusedElem:e,selectionRange:i},Uo=!1,n=(n&335544064)===n,un=t,t=n?9270:1024;un!==null;){if(e=un,n&&(i=e.deletions,i!==null))for(s=0;s<i.length;s++)n&&l0(i[s]);if(e.alternate===null&&(e.flags&2)!==0)n&&cx(e),$u(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&l0(i),$u(n);continue}else if(i!==null&&i.memoizedState!==null){n&&cx(e),$u(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,un=i):(n&&FM(e),$u(n))}}ni=null}function $u(e){for(;un!==null;){var t=un,n=e,i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=t.stateNode;try{var r=pr(t.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){Me(t,t.return,o)}}break;case 3:if((a&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)A0(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":A0(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Oa(i.memoizedProps,i.stateNode),a=t.memoizedProps,a=Va(a.default,a.update),a!=="none"&&Bo(i,n,a,i.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error(j(163))}if(i=t.sibling,i!==null){i.return=t.return,un=i;break}un=t.return}}function GM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n),i&4&&Ec(5,n);break;case 1:if(ea(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Me(n,n.return,r)}else{var a=pr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Me(n,n.return,r)}}i&64&&OM(n),i&512&&na(n,n.return);break;case 3:if(ea(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{XS(e,t)}catch(r){Me(n,n.return,r)}}break;case 27:t===null&&i&4&&BM(n);case 26:case 5:ea(e,n),t===null&&i&4&&a0(n),i&512&&na(n,n.return);break;case 12:ea(e,n);break;case 31:ea(e,n),i&4&&qM(e,n);break;case 13:ea(e,n),i&4&&YM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$w.bind(null,n),UC(e,n))));break;case 22:if(i=n.memoizedState!==null||cn,!i){var s=t!==null&&t.memoizedState!==null||ge;t=cn,a=ge,cn=i,(ge=s)&&!a?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ii(e,n,i)):ea(e,n),cn=t,ge=a}break;case 30:ea(e,n),i&512&&na(n,n.return);break;case 7:i&512&&na(n,n.return);default:ea(e,n)}}function h0(e,t){for(e=e.child;e!==null;)kM(e,t),e=e.sibling}function kM(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=e.stateNode,s=e.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){Me(e,e.return,l)}f0(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,le=!0}catch(l){Me(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?wx(o,!0):wx(e.stateNode,!1)}catch(l){Me(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&h0(e,t);break;default:h0(e,t)}}function f0(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:kM(n,i);break t;case 22:n.memoizedState===null&&f0(n,i);break t;default:f0(n,i)}}e=e.sibling}}function XM(e){var t=e.alternate;t!==null&&(e.alternate=null,XM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ef(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Gn=!1;function Oi(e,t,n){for(n=n.child;n!==null;)WM(e,t,n),n=n.sibling}function WM(e,t,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 26:ge||mn(n,t),Oi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ge&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ge||mn(n,t),jl(n);var i=Ve,a=Gn;Ds(n.type)&&(Ve=n.stateNode,Gn=!1),Oi(e,t,n),Ub(n.stateNode,n.type,n.memoizedProps),Ve=i,Gn=a;break;case 5:ge||mn(n,t),jl(n);case 6:if(n.tag===6&&jl(n),i=Ve,a=Gn,Ve=null,Oi(e,t,n),Ve=i,Gn=a,Ve!==null)if(Gn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode),le=!0}catch(s){Me(n,t,s)}else try{Ve.removeChild(n.stateNode),le=!0}catch(s){Me(n,t,s)}break;case 18:Ve!==null&&(Gn?(e=Ve,Ax(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Lo(e)):Ax(Ve,n.stateNode));break;case 4:i=Ve,a=Gn,Ve=n.stateNode.containerInfo,Gn=!0,Oi(e,t,n),Ve=i,Gn=a;break;case 0:case 11:case 14:case 15:Cs(2,n,t),ge||Cs(4,n,t),Oi(e,t,n);break;case 1:ge||(mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&IM(n,t,i)),Oi(e,t,n);break;case 21:Oi(e,t,n);break;case 22:ge=(i=ge)||n.memoizedState!==null,Oi(e,t,n),ge=i;break;case 30:mn(n,t),Oi(e,t,n);break;case 7:ge||mn(n,t),Oi(e,t,n);break;default:Oi(e,t,n)}}function qM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lo(e)}catch(n){Me(t,t.return,n)}}}function YM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(n){Me(t,t.return,n)}}function Gw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hx),t;default:throw Error(j(435,e.tag))}}function th(e,t){var n=Gw(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=tC.bind(null,e,i);i.then(a,a)}})}function Pn(e,t,n){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ds(l.type)){Ve=l.stateNode,Gn=!1;break t}break;case 5:Ve=l.stateNode,Gn=!1;break t;case 3:case 4:Ve=l.stateNode.containerInfo,Gn=!0;break t}l=l.return}if(Ve===null)throw Error(j(160));WM(r,o,s),Ve=null,Gn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ZM(t,e,n),t=t.sibling}var Pi=null;function ZM(e,t,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Pn(t,e,n),Bn(e),a&4&&(Cs(3,e,e.return),Ec(3,e),Cs(5,e,e.return));break;case 1:Pn(t,e,n),Bn(e),a&512&&(ge||i===null||mn(i,i.return)),a&64&&cn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(s=Pi,Pn(t,e,n),Bn(e),a&512&&(ge||i===null||mn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(cn)e.stateNode=Sb(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,a=s.ownerDocument||s;e:switch(t){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Sc]||i[gn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(t),a.head.insertBefore(i,a.querySelector("head > title"))),xn(i,t,n),i[gn]=e,hn(i),t=i;break t;case"link":if(s=Ix("link","href",a).get(t+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break e}}i=a.createElement(t),xn(i,t,n),a.head.appendChild(i);break;case"meta":if(s=Ix("meta","content",a).get(t+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break e}}i=a.createElement(t),xn(i,t,n),a.head.appendChild(i);break;default:throw Error(j(468,t))}i[gn]=e,hn(i),t=i}e.stateNode=t}else cn||R0(s,e.type,e.stateNode);else e.stateNode=Ox(s,n,e.memoizedProps);else a!==n?(a===null?(t=i.stateNode,t===null||ge||t.parentNode.removeChild(t)):a.count--,n===null?cn||R0(s,e.type,e.stateNode):Ox(s,n,e.memoizedProps)):n===null&&e.stateNode!==null&&um(e,e.memoizedProps,i.memoizedProps);break;case 27:Pn(t,e,n),Bn(e),a&512&&(ge||i===null||mn(i,i.return)),i!==null&&a&4&&um(e,e.memoizedProps,i.memoizedProps);break;case 5:if(s=$i,$i=!1,Pn(t,e,n),$i=s,Bn(e),a&512&&(ge||i===null||mn(i,i.return)),e.flags&32){t=e.stateNode;try{bo(t,""),le=!0}catch(h){Me(e,e.return,h)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,um(e,t,i!==null?i.memoizedProps:t)),a&1024&&(fm=!0);break;case 6:if(Pn(t,e,n),Bn(e),a&4){if(e.stateNode===null)throw Error(j(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,le=!0}catch(h){Me(e,e.return,h)}}break;case 3:if(le=!1,Sh=null,s=Pi,Pi=dc(t.containerInfo),Pn(t,e,n),Pi=s,Bn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(h){Me(e,e.return,h)}fm&&(fm=!1,JM(e)),le=!1;break;case 4:a=$i,$i=cn,i=_y(),s=Pi,Pi=dc(e.stateNode.containerInfo),Pn(t,e,n),Bn(e),Pi=s,le&&Hl&&(Wh=!0),le=i,$i=a;break;case 12:Pn(t,e,n),Bn(e);break;case 31:Pn(t,e,n),Bn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,th(e,t)));break;case 13:Pn(t,e,n),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(mf=ai()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,th(e,t)));break;case 22:s=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=cn,l=ge,c=$i;cn=o||s,$i=c||s,ge=l||r,Pn(t,e,n),ge=l,$i=c,cn=o,Bn(e),a&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||i===null||r||cn||ge||(t=r||ge,n=cn,i=ge,cn=s||cn,ge=t,ss(e,2),cn=n,ge=i),!s&&$i||h0(e,s)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,th(e,n))));break;case 19:Pn(t,e,n),Bn(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,th(e,t)));break;case 30:a&512&&(ge||i===null||mn(i,i.return)),a=_y(),s=Hl,r=(n&335544064)===n,o=e.memoizedProps,Hl=r&&Va(o.default,o.update)!=="none",Pn(t,e,n),Bn(e),r&&i!==null&&le&&(e.flags|=4),Hl=s,le=a;break;case 21:break;case 7:a&512&&(ge||i===null||mn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Pn(t,e,n),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(PM(i)){n=i;break}i=i.return}i=null;for(var a=e.return;a!==null;){if(mg(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(pg(a))break;a=a.return}var r=i;if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,l=hm(e);kh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(bo(c,""),n.flags&=-33);var h=hm(e);kh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=hm(e);s0(e,u,p,r);break;default:throw Error(j(161))}}catch(d){Me(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;JM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Uo=!0,t.reset(),Uo=!1),e=e.sibling}}function Zr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)KM(t,e),t=t.sibling;else HM(t,!1)}function KM(e,t){var n=e.alternate;if(n===null)r0(e,!1);else switch(e.tag){case 3:if(u0=ta=!1,ux(),Zr(t,e),!ta&&!Wh){if(e=ia,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var a=e[i+1];bb(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),u0=!0}ia=null;break;case 5:Zr(t,e);break;case 4:i=ta,ta=!1,Zr(t,e),ta&&(Wh=!0),ta=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?r0(e,!1):Zr(t,e));break;case 30:i=ta,a=ux(),ta=!1,Zr(t,e),ta&&(e.flags|=4);var s=e.memoizedProps,r=e.stateNode;t=Oa(s,r),r=Oa(n.memoizedProps,r);var o=Va(s.default,s.update);o==="none"?t=!1:(s=n.memoizedState,n.memoizedState=null,n=e.child,Xn=0,t=gg(e,n,t,r,o,s,!0),Xn!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ao(e,e.memoizedProps.onUpdate),ia=a):a!==null&&(a.push.apply(a,ia),ia=a),ta=(e.flags&32)!==0?!0:i;break;default:Zr(t,e)}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)GM(e,t.alternate,t),t=t.sibling}function ss(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Cs(4,n,n.return),ss(n,i);break;case 1:mn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&IM(n,n.return,a),ss(n,i);break;case 27:(i&2)!==0&&Ub(n.stateNode,n.type,n.memoizedProps);case 5:mn(n,n.return),n.tag!==5&&n.tag!==27||jl(n),ss(n,i);break;case 6:jl(n);break;case 26:mn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||ge||a.parentNode.removeChild(a),ss(n,i);break;case 22:n.memoizedState===null&&ss(n,i);break;case 30:mn(n,n.return),ss(n,i);break;case 7:mn(n,n.return);default:ss(n,i)}e=e.sibling}}function Ii(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Ii(a,s,n),Ec(4,s);break;case 1:if(Ii(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){Me(i,i.return,h)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)kS(c[a],l)}catch(h){Me(i,i.return,h)}}o&&r&64&&OM(s),na(s,s.return);break;case 27:(n&2)!==0&&BM(s);case 5:s.tag!==5&&s.tag!==27||lx(s),Ii(a,s,n),o&&i===null&&r&4&&a0(s),na(s,s.return);break;case 6:lx(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||cn||R0(dc(l.ownerDocument),s.type,l),Ii(a,s,n),o&&i===null&&r&4&&a0(s),na(s,s.return);break;case 12:Ii(a,s,n);break;case 31:Ii(a,s,n),o&&r&4&&qM(a,s);break;case 13:Ii(a,s,n),o&&r&4&&YM(a,s);break;case 22:s.memoizedState===null&&Ii(a,s,n),na(s,s.return);break;case 30:Ii(a,s,n),na(s,s.return);break;case 7:na(s,s.return);default:Ii(a,s,n)}t=t.sibling}}function _g(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bc(n))}function vg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bc(e))}function yi(e,t,n,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256))for(t=t.child;t!==null;)jM(e,t,n,i),t=t.sibling;else a&&VM(t)}function jM(e,t,n,i){var a=(n&335544064)===n;a&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&_h(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:yi(e,t,n,i),s&2048&&Ec(9,t);break;case 1:yi(e,t,n,i);break;case 3:yi(e,t,n,i),a&&u0&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&bc(s)));break;case 12:if(s&2048){yi(e,t,n,i),s=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){Me(t,t.return,c)}}else yi(e,t,n,i);break;case 31:yi(e,t,n,i);break;case 13:yi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&_h(o),r._visibility&2?yi(e,t,n,i):Ql(e,t)):(a&&o!==null&&o.memoizedState!==null&&_h(t),r._visibility&2?yi(e,t,n,i):(r._visibility|=2,Kr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),s&2048&&_g(o,t);break;case 24:yi(e,t,n,i),s&2048&&vg(t.alternate,t);break;case 30:a&&(s=t.alternate,s!==null&&(ua(s.child,!0),ua(t.child,!0))),yi(e,t,n,i);break;default:yi(e,t,n,i)}}function Kr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Kr(s,r,o,l,a),Ec(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Kr(s,r,o,l,a):Ql(s,r):(h._visibility|=2,Kr(s,r,o,l,a)),a&&c&2048&&_g(r.alternate,r);break;case 24:Kr(s,r,o,l,a),a&&c&2048&&vg(r.alternate,r);break;default:Kr(s,r,o,l,a)}t=t.sibling}}function Ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ql(n,i),a&2048&&_g(i.alternate,i);break;case 24:Ql(n,i),a&2048&&vg(i.alternate,i);break;default:Ql(n,i)}t=t.sibling}}var tr=8192;function js(e,t,n){if(e.subtreeFlags&tr)for(e=e.child;e!==null;)QM(e,t,n),e=e.sibling}function QM(e,t,n){switch(e.tag){case 26:js(e,t,n),e.flags&tr&&(e.memoizedState!==null?qC(n,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Bx(n,e)));break;case 5:js(e,t,n),e.flags&tr&&(e=e.stateNode,(t&335544128)===t&&Bx(n,e));break;case 3:case 4:var i=Pi;Pi=dc(e.stateNode.containerInfo),js(e,t,n),Pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=tr,tr=16777216,js(e,t,n),tr=i):js(e,t,n));break;case 30:if((e.flags&tr)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var a=e.stateNode;a.paired=null,ni===null&&(ni=new Map),ni.set(i,a)}js(e,t,n);break;default:js(e,t,n)}}function $M(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,eb(i,e)}$M(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tb(e),e=e.sibling}function tb(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Cs(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vh(e)):Ol(e);break;default:Ol(e)}}function vh(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,eb(i,e)}$M(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cs(8,t,t.return),vh(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vh(t));break;default:vh(t)}e=e.sibling}}function eb(e,t){for(;un!==null;){var n=un;switch(n.tag){case 0:case 11:case 15:Cs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,un=i;else t:for(n=e;un!==null;){i=un;var a=i.sibling,s=i.return;if(XM(i),i===n){un=null;break t}if(a!==null){a.return=s,un=a;break t}un=s}}}var kw={getCacheForType:function(e){var t=_n($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _n($e).controller.signal}},Xw=typeof WeakMap=="function"?WeakMap:Map,ue=0,we=null,ie=null,ae=0,xe=0,$n=null,fs=!1,zo=!1,yg=!1,za=0,Ye=0,Rs=0,or=0,qh=0,ii=0,Eo=0,$l=null,kn=null,d0=!1,mf=0,nb=0,Yh=1/0,Zh=null,Ss=null,ke=0,zi=null,mr=null,ca=0,p0=0,m0=null,ib=null,vo=null,yo=null,xo=null,tc=0,yh=null;function oi(){return(ue&2)!==0&&ae!==0?ae&-ae:Gt.T!==null?Sg():oS()}function ab(){if(ii===0)if((ae&536870912)===0||jt){var e=Hu;Hu<<=1,(Hu&3932160)===0&&(Hu=262144),ii=e}else ii=536870912;return e=Sn.current,e!==null&&(e.flags|=32),ii}function Ao(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=Eb(Oa(e.memoizedProps,n))),yo===null&&(yo=[]),yo.push(t.bind(null,i))}}function qn(e,t,n){(e===we&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(wo(e,0),ds(e,ae,ii,!1)),xc(e,n),((ue&2)===0||e!==we)&&(e===we&&((ue&2)===0&&(or|=n),Ye===4&&ds(e,ae,ii,!1)),fa(e))}function sb(e,t,n){if((ue&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yc(e,t),a=i?Yw(e,t):dm(e,t,!0),s=i;do{if(a===0){zo&&!i&&ds(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Ww(n)){a=dm(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=$l;var l=o.current.memoizedState.isDehydrated;if(l&&(wo(o,r).flags|=256),r=dm(o,r,!1),r!==2&&r!==6){if(yg&&!l){o.errorRecoveryDisabledLanes|=s,or|=s,a=4;break t}s=kn,kn=a,s!==null&&(kn===null?kn=s:kn.push.apply(kn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){wo(e,0),ds(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ds(i,t,ii,!fs);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(a=mf+300-ai(),10<a)){if(ds(i,t,ii,!fs),tf(i,0,!0)!==0)break t;ca=t,i.timeoutHandle=bg(fx.bind(null,i,n,kn,Zh,d0,t,ii,or,Eo,fs,s,"Throttled",-0,0),a);break t}fx(i,n,kn,Zh,d0,t,ii,or,Eo,fs,s,null,-0,0)}}break}while(!0);fa(e)}function fx(e,t,n,i,a,s,r,o,l,c,h,p,u,d){e.timeoutHandle=-1;var m=t.subtreeFlags,M=(s&335544064)===s;if(p=null,(M||m&8192||(m&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},ni=null,QM(t,s,p),M&&(m=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(m.count++,m.waitingForViewTransition=!0,m=pc.bind(m),M.finished.then(m,m))),m=(s&62914560)===s?mf-ai():(s&4194048)===s?nb-ai():0,m=YC(p,m),m!==null)){ca=s,e.cancelPendingCommit=m(px.bind(null,e,t,s,n,i,a,r,o,l,c,h,p,null,u,d)),ds(e,s,r,!c);return}px(e,t,s,n,i,a,r,o,l,c,h,p)}function Ww(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!li(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ds(e,t,n,i){t=nS(e,t),t&=~qh,t&=~or,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-ri(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&aS(e,n,t)}function gf(){return(ue&6)===0?(Ac(0,!1),!1):!0}function xg(){if(ie!==null){if(xe===0)var e=ie.return;else e=ie,Na=xr=null,ig(e),mo=null,oc=0,e=ie;for(;e!==null;)LM(e.alternate,e),e=e.return;ie=null}}function wo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,dC(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ca=0,xg(),we=e,ie=n=Da(e.current,null),ae=t,xe=0,$n=null,fs=!1,zo=yc(e,t),yg=!1,Eo=ii=qh=or=Rs=Ye=0,kn=$l=null,d0=!1,za=nS(e,t),rf(),n}function rb(e,t){Yt=null,Gt.H=Vh,t===Po||t===cf?(t=Fy(),xe=3):t===J0?(t=Fy(),xe=4):xe=t===hg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$n=t,ie===null&&(Ye=1,Hh(e,Ti(t,e.current)))}function ob(){var e=Sn.current;return e===null?!0:(ae&4194048)===ae?Nn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Nn:!1}function lb(){var e=Gt.H;return Gt.H=Vh,e===null?Vh:e}function cb(){var e=Gt.A;return Gt.A=kw,e}function Jh(){Ye=4,fs||(ae&4194048)!==ae&&Sn.current!==null||(zo=!0),(Rs&134217727)===0&&(or&134217727)===0||we===null||ds(we,ae,ii,!1)}function dm(e,t,n){var i=ue;ue|=2;var a=lb(),s=cb();(we!==e||ae!==t)&&(Zh=null,wo(e,t)),t=!1;var r=Ye;t:do try{if(xe!==0&&ie!==null){var o=ie,l=$n;switch(xe){case 8:xg(),r=6;break t;case 3:case 2:case 9:case 6:Sn.current===null&&(t=!0);var c=xe;if(xe=0,$n=null,co(e,o,l,c),n&&zo){r=0;break t}break;default:c=xe,xe=0,$n=null,co(e,o,l,c)}}qw(),r=Ye;break}catch(h){rb(e,h)}while(!0);return t&&e.shellSuspendCounter++,Na=xr=null,ue=i,Gt.H=a,Gt.A=s,ie===null&&(we=null,ae=0,rf()),r}function qw(){for(;ie!==null;)ub(ie)}function Yw(e,t){var n=ue;ue|=2;var i=lb(),a=cb();we!==e||ae!==t?(Zh=null,Yh=ai()+500,wo(e,t)):zo=yc(e,t);t:do try{if(xe!==0&&ie!==null){t=ie;var s=$n;e:switch(xe){case 1:xe=0,$n=null,co(e,t,s,1);break;case 2:case 9:if(zy(s)){xe=0,$n=null,dx(t);break}t=function(){xe!==2&&xe!==9||we!==e||(xe=7),fa(e)},s.then(t,t);break t;case 3:xe=7;break t;case 4:xe=5;break t;case 7:zy(s)?(xe=0,$n=null,dx(t)):(xe=0,$n=null,co(e,t,s,7));break;case 5:var r=null;switch(ie.tag){case 26:r=ie.memoizedState;case 5:case 27:var o=ie;if(r?Ib(r):o.stateNode.complete){xe=0,$n=null;var l=o.sibling;if(l!==null)ie=l;else{var c=o.return;c!==null?(ie=c,_f(c)):ie=null}break e}}xe=0,$n=null,co(e,t,s,5);break;case 6:xe=0,$n=null,co(e,t,s,6);break;case 8:xg(),Ye=6;break t;default:throw Error(j(462))}}Zw();break}catch(h){rb(e,h)}while(!0);return Na=xr=null,Gt.H=i,Gt.A=a,ue=n,ie!==null?0:(we=null,ae=0,rf(),Ye)}function Zw(){for(;ie!==null&&!hA();)ub(ie)}function ub(e){var t=UM(e.alternate,e,za);e.memoizedProps=e.pendingProps,t===null?_f(e):ie=t}function dx(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ex(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=ex(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:ig(t);var i=t;i===fn&&(jt?(Lh(i),i.tag===5&&i.stateNode!=null&&(Ie=i.stateNode)):(Lh(i),jt=!0));default:LM(n,t),t=ie=OS(t,za),t=UM(n,t,za)}e.memoizedProps=e.pendingProps,t===null?_f(e):ie=t}function co(e,t,n,i){Na=xr=null,ig(t),mo=null,oc=0;var a=t.return;try{if(Iw(e,a,t,n,ae)){Ye=1,Hh(e,Ti(n,e.current)),ie=null;return}}catch(s){if(a!==null)throw ie=a,s;Ye=1,Hh(e,Ti(n,e.current)),ie=null;return}t.flags&32768?(jt||i===1?e=!0:zo||(ae&536870912)!==0?e=!1:(fs=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),hb(t,e)):_f(t)}function _f(e){var t=e;do{if((t.flags&32768)!==0){hb(t,fs);return}e=t.return;var n=Fw(t.alternate,t,za);if(n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ye===0&&(Ye=5)}function hb(e,t){do{var n=Vw(e.alternate,e);if(n!==null){n.flags&=32767,ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=n}while(e!==null);Ye=6,ie=null}function px(e,t,n,i,a,s,r,o,l,c,h,p){e.cancelPendingCommit=null;do vf();while(ke!==0);if((ue&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));e===we&&(ie=we=null,ae=0),mr=t,zi=e,ca=n,m0=a,ib=i,Jw(e,t,n,r,o,l,p)}}function Jw(e,t,n,i,a,s,r){var o=t.lanes|t.childLanes;if(p0=o,o|=k0,SA(e,n,o,i,a,s),yo=null,(n&335544064)===n?(xo=bw(e),i=10262):(xo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,eC(Ch,function(){return y0(),null})):(e.callbackNode=null,e.callbackPriority=0),Xh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null,a=he.p,he.p=2,s=ue,ue|=4;try{Hw(e,t,n)}finally{ue=s,he.p=a,Gt.T=i}}ke=1,Xh?vo=yC(r,e.containerInfo,xo,g0,_0,jw,v0,y0,Kw,null,null):(g0(),_0(),v0())}function Kw(e){if(ke!==0){var t=zi.onRecoverableError;t(e,{componentStack:null})}}function jw(){ke===3&&(ke=0,KM(mr,zi),ke=4)}function g0(){if(ke===1){ke=0;var e=zi,t=mr,n=ca,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Gt.T,Gt.T=null;var a=he.p;he.p=2;var s=ue;ue|=4;try{Hl=Wh=!1,ZM(t,e,n),n=b0;var r=AS(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&ES(o.ownerDocument.documentElement,o)){if(l!==null&&G0(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),m=o.textContent.length,M=Math.min(l.start,m),g=l.end===void 0?M:Math.min(l.end,m);!d.extend&&M>g&&(r=g,g=M,M=r);var f=Ny(o,M),_=Ny(o,g);if(f&&_&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var S=p.createRange();S.setStart(f.node,f.offset),d.removeAllRanges(),M>g?(d.addRange(S),d.extend(_.node,_.offset)):(S.setEnd(_.node,_.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Uo=!!M0,b0=M0=null}finally{ue=s,he.p=a,Gt.T=i}}e.current=t,ke=2}}function _0(){if(ke===2){ke=0;var e=zi,t=mr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Gt.T,Gt.T=null;var i=he.p;he.p=2;var a=ue;ue|=4;try{GM(e,t.alternate,t)}finally{ue=a,he.p=i,Gt.T=n}}ke=3}}function v0(){if(ke===4||ke===3){ke=0;var e=vo;vo=null,fA();var t=zi,n=mr,i=ca,a=ib,s=(i&335544064)===i?10262:10256;if((n.subtreeFlags&s)!==0||(n.flags&s)!==0?ke=5:(ke=0,mr=zi=null,fb(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(Ss=null),P0(i),n=n.stateNode,si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(vc,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=Gt.T,s=he.p,he.p=2,Gt.T=null;try{for(var r=t.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{Gt.T=n,he.p=s}}if(a=yo,r=xo,xo=null,a!==null&&(yo=null,r===null&&(r=[]),e!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&e.finished.finally(n);(ca&3)!==0&&vf(),fa(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===yh?tc++:(tc=0,yh=t):(tc=0,yh=null),Ac(0,!1)}}function fb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bc(t)))}function vf(){return vo!==null&&(vo.skipTransition(),vo=null),g0(),_0(),v0(),y0()}function y0(){if(ke!==5)return!1;var e=zi,t=p0;p0=0;var n=P0(ca),i=Gt.T,a=he.p;try{he.p=32>n?32:n,Gt.T=null,n=m0,m0=null;var s=zi,r=ca;if(ke=0,mr=zi=null,ca=0,(ue&6)!==0)throw Error(j(331));var o=ue;if(ue|=4,tb(s.current),jM(s,s.current,r,n),ue=o,Ac(0,!1),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(vc,s)}catch{}return!0}finally{he.p=a,Gt.T=i,fb(e,t)}}function mx(e,t,n){t=Ti(n,t),t=Qm(e.stateNode,t,2),e=vs(e,t,2),e!==null&&(xc(e,2),fa(e))}function Me(e,t,n){if(e.tag===3)mx(e,e,n);else for(;t!==null;){if(t.tag===3){mx(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ss===null||!Ss.has(i))){e=Ti(n,e),n=wM(2),i=vs(t,n,2),i!==null&&(CM(n,i,t,e),xc(i,2),fa(i));break}}t=t.return}}function pm(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Xw;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(yg=!0,a.add(n),e=Qw.bind(null,e,t,n),t.then(e,e))}function Qw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,we===e&&(ae&n)===n&&((Ye===4||Ye===3&&(ae&62914560)===ae&&300>ai()-mf)&&(ue&2)===0?wo(e,0):qh|=n,Eo===ae&&(Eo=0)),fa(e)}function db(e,t){t===0&&(t=iS()),e=yr(e,t),e!==null&&(xc(e,t),fa(e))}function $w(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),db(e,n)}function tC(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),db(e,n)}function eC(e,t){return O0(e,t)}var Co=null,jr=null,x0=!1,Kh=!1,mm=!1,ps=0;function fa(e){e!==jr&&e.next===null&&(jr===null?Co=jr=e:jr=jr.next=e),Kh=!0,x0||(x0=!0,iC())}function Ac(e,t){if(!mm&&Kh){mm=!0;do for(var n=!1,i=Co;i!==null;){if(!t)if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-ri(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,gx(i,s))}else s=ae,s=tf(i,i===we?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||yc(i,s)||(n=!0,gx(i,s));i=i.next}while(n);mm=!1}}function nC(){pb()}function pb(){Kh=x0=!1;var e=0;ps!==0&&fC()&&(e=ps);for(var t=ai(),n=null,i=Co;i!==null;){var a=i.next,s=mb(i,t);s===0?(i.next=null,n===null?Co=a:n.next=a,a===null&&(jr=n)):(n=i,(e!==0||(s&3)!==0)&&(Kh=!0)),i=a}ke!==0&&ke!==5||Ac(e,!1),ps!==0&&(ps=0)}function mb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-ri(s),o=1<<r,l=a[r];l===-1?((o&n)===0||(o&i)!==0)&&(a[r]=xA(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=we,n=ae,n=tf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Yp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Yp(i),P0(n)){case 2:case 8:n=tS;break;case 32:n=Ch;break;case 268435456:n=eS;break;default:n=Ch}return i=gb.bind(null,e),n=O0(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Yp(i),e.callbackPriority=2,e.callbackNode=null,2}function gb(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vf()&&e.callbackNode!==n)return null;var i=ae;return i=tf(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(sb(e,i,t),mb(e,ai()),e.callbackNode!=null&&e.callbackNode===n?gb.bind(null,e):null)}function gx(e,t){if(vf())return null;sb(e,t,!0)}function iC(){pC(function(){(ue&6)!==0?O0($x,nC):pb()})}function Sg(){if(ps===0){var e=hr;e===0&&(e=Vu,Vu<<=1,(Vu&261888)===0&&(Vu=256)),ps=e}return ps}function _x(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:oh(e)}function aC(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=_x((a[Zn]||null).action),r=i.submitter;r&&(t=(t=r[Zn]||null)?_x(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new nf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ps!==0){var l=new FormData(a,r);Km(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),Km(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(eh=0;eh<Fm.length;eh++)nh=Fm[eh],vx=nh.toLowerCase(),yx=nh[0].toUpperCase()+nh.slice(1),Fi(vx,"on"+yx);var nh,vx,yx,eh;Fi(CS,"onAnimationEnd");Fi(RS,"onAnimationIteration");Fi(NS,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(mw,"onTransitionRun");Fi(gw,"onTransitionStart");Fi(_w,"onTransitionCancel");Fi(DS,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uc));function _b(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Nh(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Nh(h)}a.currentTarget=null,s=l}}}}function ne(e,t){var n=t[dy];n===void 0&&(n=t[dy]=new Set);var i=e+"__bubble";n.has(i)||(vb(t,e,2,!1),n.add(i))}function gm(e,t,n){var i=0;t&&(i|=4),vb(n,e,i,t)}var ih="_reactListening"+Math.random().toString(36).slice(2);function Mg(e){if(!e[ih]){e[ih]=!0,cS.forEach(function(n){n!=="selectionchange"&&(sC.has(n)||gm(n,!1,e),gm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ih]||(t[ih]=!0,gm("selectionchange",!1,t))}}function vb(e,t,n,i){switch(Gb(t)){case 2:var a=jC;break;case 8:a=QC;break;default:a=Rg}n=a.bind(null,t,n,e),a=void 0,!Im||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _m(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=er(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}_S(function(){var c=s,h=z0(n),p=[];t:{var u=US.get(e);if(u!==void 0){var d=nf,m=e;switch(e){case"keypress":if(ch(n)===0)break t;case"keydown":case"keyup":d=WA;break;case"focusin":m="focus",d=$p;break;case"focusout":m="blur",d=$p;break;case"beforeblur":case"afterblur":d=$p;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=LA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=KA;break;case CS:case RS:case NS:d=PA;break;case DS:d=QA;break;case"scroll":case"scrollend":d=DA;break;case"wheel":d=tw;break;case"copy":case"cut":case"paste":d=zA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=by;break;case"submit":d=ZA;break;case"toggle":case"beforetoggle":d=nw}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var _=c,S;_!==null;){var v=_;if(S=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||S===null||f===null||(v=nc(_,f),v!=null&&M.push(hc(_,v,S))),g)break;_=_.return}0<M.length&&(u=new d(u,m,null,n,h),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Om&&(m=n.relatedTarget||n.fromElement)&&(er(m)||m[Oo]))break t;(u||d)&&(m=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?er(d):null,d!==null&&(g=_c(d),M=d.tag,d!==g||M!==5&&M!==27&&M!==6)&&(d=null)):(u=null,d=c),u!==d&&(M=Sy,v="onMouseLeave",f="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(M=by,v="onPointerLeave",f="onPointerEnter",_="pointer"),g=u==null?m:Fl(u),S=d==null?m:Fl(d),m=new M(v,_+"leave",u,n,h),m.target=g,m.relatedTarget=S,v=null,er(h)===c&&(M=new M(f,_+"enter",d,n,h),M.target=S,M.relatedTarget=g,v=M),g=v,M=u&&d?Mm(u,d,rC):null,u!==null&&xx(p,m,u,M,!1),d!==null&&g!==null&&xx(p,g,d,M,!0)))}t:{if(u=c?Fl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var T=wy;else if(Ay(u))if(bS)T=fw;else{T=uw;var E=cw}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&B0(c.elementType)&&(T=wy):T=hw;if(T&&(T=T(e,c))){MS(p,T,n,h);break t}E&&E(e,u,c)}switch(E=c?Fl(c):window,e){case"focusin":(Ay(E)||E.contentEditable==="true")&&(io=E,Bm=c,Xl=null);break;case"focusout":Xl=Bm=io=null;break;case"mousedown":zm=!0;break;case"contextmenu":case"mouseup":case"dragend":zm=!1,Dy(p,n,h);break;case"selectionchange":if(pw)break;case"keydown":case"keyup":Dy(p,n,h)}var A;if(H0)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else no?xS(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(yS&&n.locale!=="ko"&&(no||x!=="onCompositionStart"?x==="onCompositionEnd"&&no&&(A=vS()):(us=h,F0="value"in us?us.value:us.textContent,no=!0)),E=jh(c,x),0<E.length&&(x=new My(x,e,null,n,h),p.push({event:x,listeners:E}),A?x.data=A:(A=SS(n),A!==null&&(x.data=A)))),(A=aw?sw(e,n):rw(e,n))&&(x=jh(c,"onBeforeInput"),0<x.length&&(E=new My("onBeforeInput","beforeinput",null,n,h),p.push({event:E,listeners:x}),E.data=A)),aC(p,e,c,n,h)}_b(p,t)})}function hc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jh(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=nc(e,n),a!=null&&i.unshift(hc(e,a,s)),a=nc(e,t),a!=null&&i.push(hc(e,a,s))),e.tag===3)return i;e=e.return}return[]}function rC(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xx(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=nc(n,s),c!=null&&r.unshift(hc(n,c,l))):a||(c=nc(n,s),c!=null&&r.push(hc(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var oC=/\r\n?/g,lC=/\u0000|\uFFFD/g;function Sx(e){return(typeof e=="string"?e:""+e).replace(oC,`
`).replace(lC,"")}function yb(e,t){return t=Sx(t),Sx(e)===t}function Se(e,t,n,i,a,s){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||bo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&bo(e,""+i);else return;break;case"className":ku(e,"class",i);break;case"tabIndex":ku(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ku(e,n,i);break;case"style":gS(e,i,s);return;case"data":if(t!=="object"){ku(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=oh(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=oh(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=sa);return;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=oh(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ne("beforetoggle",e),ne("toggle",e),rh(e,"popover",i);break;case"xlinkActuate":wa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":rh(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=RA.get(n)||n,rh(e,n,i);else return}le=!0}function S0(e,t,n,i,a,s){switch(n){case"style":gS(e,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));s?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")bo(e,i);else if(typeof i=="number"||typeof i=="bigint")bo(e,""+i);else return;break;case"onScroll":i!=null&&ne("scroll",e);return;case"onScrollEnd":i!=null&&ne("scrollend",e);return;case"onClick":i!=null&&(e.onclick=sa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!uS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),t=e[Zn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(s,t,a),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(s,i,a);break t}le=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):rh(e,n,i)}return}le=!0}function xn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:Se(e,t,s,r,n,null)}}a&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":ne("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(j(137,t));break;default:Se(e,t,i,h,n,null)}}dS(e,s,o,l,c,r,a,!1);return;case"select":ne("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Se(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?ho(e,!!i,t,!1):n!=null&&ho(e,!!i,n,!0);return;case"textarea":ne("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:Se(e,t,r,o,n,null)}mS(e,i,a,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Se(e,t,l,i,n,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(i=0;i<uc.length;i++)ne(uc[i],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:Se(e,t,c,i,n,null)}return;default:if(B0(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&S0(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Se(e,t,o,i,n,null))}var cC={};function uC(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Se(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(le=!0),s=d;break;case"name":d!==p&&(le=!0),a=d;break;case"checked":d!==p&&(le=!0),c=d;break;case"defaultChecked":d!==p&&(le=!0),h=d;break;case"value":d!==p&&(le=!0),r=d;break;case"defaultValue":d!==p&&(le=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:d!==p&&Se(e,t,u,d,i,p)}}Lm(e,r,o,l,c,h,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||Se(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(le=!0),u=s;break;case"defaultValue":s!==l&&(le=!0),o=s;break;case"multiple":s!==l&&(le=!0),r=s;default:s!==l&&Se(e,t,a,s,i,l)}t=o,n=r,i=d,u!=null?ho(e,!!n,u,!1):!!i!=!!n&&(t!=null?ho(e,!!n,t,!0):ho(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Se(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(le=!0),u=a;break;case"defaultValue":a!==s&&(le=!0),d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==s&&Se(e,t,r,a,i,s)}pS(e,u,d);return;case"option":for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!=null&&!i.hasOwnProperty(m)&&(m==="selected"?e.selected=!1:Se(e,t,m,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(le=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):Se(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&Se(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:Se(e,t,c,u,i,d)}return;default:if(B0(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&S0(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||S0(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&Se(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Se(e,t,p,u,i,d)}function Mx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hC(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Mx(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Mx(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var M0=null,b0=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function bx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sb(e,t,n,i){return n=fc(n).createElement(e),n[gn]=i,n[Zn]=t,xn(n,e,t),hn(n),n}function T0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vm=null;function fC(){var e=window.event;return e&&e.type==="popstate"?e===vm?!1:(vm=e,!0):(vm=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,dC=typeof clearTimeout=="function"?clearTimeout:void 0,Tx=typeof Promise=="function"?Promise:void 0,Ex=typeof requestAnimationFrame=="function"?requestAnimationFrame:bg,pC=typeof queueMicrotask=="function"?queueMicrotask:typeof Tx<"u"?function(e){return Tx.resolve(null).then(e).catch(mC)}:bg;function mC(e){setTimeout(function(){throw e})}function Ds(e){return e==="head"}function Ax(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Lo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")xm(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,xm(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Sc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&xm(e.ownerDocument.body);n=a}while(n);Lo(t)}function wx(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Mb(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var a=i=0;a<t.length;a++){var s=t[a];0<s.width&&0<s.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function bb(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Tb(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function E0(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Tb(t,n,e)}function gC(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Tb(t,n,e)}function _C(e){return e.documentElement.clientHeight}function vC(e){this.addEventListener("load",e),this.addEventListener("error",e)}function yC(e,t,n,i,a,s,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,m=c.fonts.status;i();var M=[];if(m==="loaded"&&(_C(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),m=M.length,e!==null)for(var g=e.suspenseyImages,f=0,_=0;_<g.length;_++){var S=g[_];if(!S.complete){var v=S.getBoundingClientRect();if(0<v.bottom&&0<v.right&&v.top<u.innerHeight&&v.left<u.innerWidth){if(f+=Pb(S),f>Mh){M.length=m;break}S=new Promise(vC.bind(S)),M.push(S)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(T){return setTimeout(T,500)})]).then(a,a),(d?Promise.allSettled([d.finished,u]):u).then(s,s);if(a(),d)return d.finished.then(s,s);s()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var m=u[d],M=m.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(m),m=M.getKeyframes();for(var f=g=void 0,_=!0,S=0;S<m.length;S++){var v=m[S],T=v.width;if(g===void 0)g=T;else if(g!==T){_=!1;break}if(T=v.height,f===void 0)f=T;else if(f!==T){_=!1;break}delete v.width,delete v.height,v.transform==="none"&&delete v.transform}_&&g!==void 0&&f!==void 0&&(M.setKeyframes(m),_=getComputedStyle(M.target,M.pseudoElement),_.width!==g||_.height!==f)&&(_=m[0],_.width=g,_.height=f,_=m[m.length-1],_.width=g,_.height=f,M.setKeyframes(m))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),a(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),a(),r(),null}}function nr(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}nr.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Ce({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};nr.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===e&&s.pseudoElement===t&&i.push(n[a])}return i};nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Eb(e){return{name:e,group:new nr("group",e),imagePair:new nr("image-pair",e),old:new nr("old",e),new:new nr("new",e)}}function ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(e,t,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(Ab(s,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=Ro(n),s.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Yn(this._fragmentFiber.child,!1,xC,e,o,i)}this._eventListeners=s}};function xC(e,t,n,i){return an(e).addEventListener(t,n,i),!1}ci.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=Ab(i,e,t,n),t!==-1)){var a=i[t];n=a.attachedListener;var s=a.cleanup;a=Ro(a.optionsOrUseCapture),Yn(this._fragmentFiber.child,!1,SC,e,n,a),i.splice(t,1),s!==null&&s()}};function SC(e,t,n,i){return an(e).removeEventListener(t,n,i),!1}function Ro(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Cx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Ab(e,t,n,i){if(e.length===0)return-1;i=Cx(i);for(var a=0;a<e.length;a++){var s=e[a];if(s.type===t&&s.listener===n&&Cx(s.optionsOrUseCapture)===i)return a}return-1}ci.prototype.dispatchEvent=function(e){var t=gr(this._fragmentFiber);if(t===null)return!0;t=an(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,Ro(s.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ci.prototype.focus=function(e){Yn(this._fragmentFiber.child,!0,wb,e,void 0,void 0)};function wb(e,t){return e.tag===6?!1:(e=an(e),LC(e,t))}ci.prototype.focusLast=function(e){var t=[];Yn(this._fragmentFiber.child,!0,Tg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!wb(t[n],e);n--);};function Tg(e,t){return t.push(e),!1}ci.prototype.blur=function(){var e=gr(this._fragmentFiber);e!==null&&(e=an(e),e=fc(e).activeElement,e!==null&&Yn(this._fragmentFiber.child,!1,MC,e,void 0,void 0))};function MC(e,t){return e.tag===6?!1:(e=an(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Yn(this._fragmentFiber.child,!1,bC,e,void 0,void 0)};function bC(e,t){return e.tag===6||(e=an(e),t.observe(e)),!1}ci.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Yn(this._fragmentFiber.child,!1,TC,e,void 0,void 0);for(var n=t=0;n<Bi.length;n++){var i=Bi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Bi[t++]=i}Bi.length=t}};function TC(e,t){return e.tag===6||(e=an(e),t.unobserve(e)),!1}var Bi=[],ym=!1;function EC(e,t,n){Bi.push({fragmentInstance:e,observer:t,instance:n}),ym||(ym=!0,OC(function(){ym=!1;var i=Bi;Bi=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}ci.prototype.getClientRects=function(){var e=[];return Yn(this._fragmentFiber.child,!1,AC,e,void 0,void 0),e};function AC(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=an(e),t.push.apply(t,e.getClientRects());return!1}ci.prototype.getRootNode=function(e){var t=gr(this._fragmentFiber);return t===null?this:an(t).getRootNode(e)};ci.prototype.compareDocumentPosition=function(e){var t=gr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Yn(this._fragmentFiber.child,!1,Tg,n,void 0,void 0);var i=an(t);if(n.length===0){if(n=i,oy(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var a=i=n.compareDocumentPosition(e);return n===e?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Jx(t)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(e=an(n).compareDocumentPosition(e),a=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=an(n[0]),a=an(n[n.length-1]);var s=oy(this._fragmentFiber)?t.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=a.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||s&&a===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!s&&a===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||wC(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function wC(e,t,n,i,a){var s=er(a);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)t:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){n=!0;break t}s=s.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;t:{for(s=t,t=gr(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break t}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===n)&&(t=Mm(n,s,ly),t===null?t=!1:(Yn(t,!0,iA,s,n),s=Qr,Qr=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===i)&&(t=Mm(i,s,ly),t===null?t=!1:(Yn(t,!0,aA,s,i),s=Qr,Sm=Qr=null,t=s!==null)),t):!1}function Rx(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(j(566));var t=[];Yn(this._fragmentFiber.child,!1,Tg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Jx(this._fragmentFiber);if(i=n?i[1]||i[0]||gr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=an(i),Rx(e,n);return}if(i=an(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var a=t[i];a.tag===6?(a=an(a),Rx(a,n)):an(a).scrollIntoView(e),i+=n?-1:1}};function CC(e,t){return e=an(e),Cb(e,t),!1}function Cb(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Rb(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.addEventListener(a.type,a.attachedListener,Ro(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<Bi.length;o++){var l=Bi[o];(l.fragmentInstance!==t||l.observer!==s||l.instance!==e)&&(Bi[r++]=l)}Bi.length=r,s.observe(e)}),Cb(e,t))}function RC(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];e.removeEventListener(a.type,a.attachedListener,Ro(a.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?EC(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function A0(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":A0(n),ef(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function NC(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Sc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function DC(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function Nb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ai(e.nextSibling),e===null))return null;return e}function w0(e){return e.data==="$?"||e.data==="$~"}function Eg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function UC(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var C0=null;function Nx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ai(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Dx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function LC(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function OC(e){Ex(function(){Ex(function(t){return e(t)})})}function Db(e,t,n){switch(t=fc(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function Ub(e,t,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Se(e,t,i,null,cC,a)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===sa&&(e.onclick=null),ef(e)}function xm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ef(e)}var wi=new Map,Ux=new Set;function dc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ha=he.d;he.d={f:IC,r:PC,D:BC,C:zC,L:FC,m:VC,X:GC,S:HC,M:kC};function IC(){var e=Ha.f(),t=gf();return e||t}function PC(e){var t=Io(e);t!==null&&t.tag===5&&t.type==="form"?gM(t):Ha.r(e)}var Fo=typeof document>"u"?null:document;function Lb(e,t,n){var i=Fo;if(i&&typeof t=="string"&&t){var a=bi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Ux.has(a)||(Ux.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),xn(t,"link",e),hn(t),i.head.appendChild(t)))}}function BC(e){Ha.D(e),Lb("dns-prefetch",e,null)}function zC(e,t){Ha.C(e,t),Lb("preconnect",e,t)}function FC(e,t,n){Ha.L(e,t,n);var i=Fo;if(i&&e&&t){var a='link[rel="preload"][as="'+bi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+bi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+bi(n.imageSizes)+'"]')):a+='[href="'+bi(e)+'"]';var s=a;switch(t){case"style":s=No(e);break;case"script":s=Vo(e)}if(!(wi.has(s)||(e=Ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(wc(s))||t==="script"&&i.querySelector(Cc(s))))){var r=i.createElement("link");xn(r,"link",e),t==="style"&&(r[Rh]=!0,r.onload=r.onerror=function(){lS(r)}),hn(r),i.head.appendChild(r)}}}function VC(e,t){Ha.m(e,t);var n=Fo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+bi(i)+'"][href="'+bi(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Vo(e)}if(!wi.has(s)&&(e=Ce({rel:"modulepreload",href:e},t),wi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cc(s)))return}i=n.createElement("link"),xn(i,"link",e),hn(i),n.head.appendChild(i)}}}function HC(e,t,n){Ha.S(e,t,n);var i=Fo;if(i&&e){var a=uo(i).hoistableStyles,s=No(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(wc(s)))o.loading=5;else{e=Ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wi.get(s))&&Ag(e,n);var l=r=i.createElement("link");hn(l),xn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xh(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function GC(e,t){Ha.X(e,t);var n=Fo;if(n&&e){var i=uo(n).hoistableScripts,a=Vo(e),s=i.get(a);s||(s=n.querySelector(Cc(a)),s||(e=Ce({src:e,async:!0},t),(t=wi.get(a))&&wg(e,t),s=n.createElement("script"),hn(s),xn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function kC(e,t){Ha.M(e,t);var n=Fo;if(n&&e){var i=uo(n).hoistableScripts,a=Vo(e),s=i.get(a);s||(s=n.querySelector(Cc(a)),s||(e=Ce({src:e,async:!0,type:"module"},t),(t=wi.get(a))&&wg(e,t),s=n.createElement("script"),hn(s),xn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Lx(e,t,n,i){var a=(a=ms.current)?dc(a):null;if(!a)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=No(n.href),t=uo(a).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=No(n.href);var s=uo(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(wc(e)))?s._p||(r.instance=s,r.state.loading=5):(s=wi.get(e),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wi.set(e,s)),XC(a,e,s,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Vo(n),t=uo(a).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function No(e){return'href="'+bi(e)+'"'}function wc(e){return'link[rel="stylesheet"]['+e+"]"}function Ob(e){return Ce({},e,{"data-precedence":e.precedence,precedence:null})}function XC(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Rh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Rh]=!0,t.onload=t.onerror=lS.bind(null,t),xn(t,"link",n),hn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Vo(e){return'[src="'+bi(e)+'"]'}function Cc(e){return"script[async]"+e}function Ox(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+bi(n.href)+'"]');if(i)return t.instance=i,hn(i),i;var a=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),hn(i),xn(i,"style",a),xh(i,n.precedence,e),t.instance=i;case"stylesheet":a=No(n.href);var s=e.querySelector(wc(a));if(s)return t.state.loading|=4,t.instance=s,hn(s),s;i=Ob(n),(a=wi.get(a))&&Ag(i,a),s=(e.ownerDocument||e).createElement("link"),hn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),xn(s,"link",i),t.state.loading|=4,xh(s,n.precedence,e),t.instance=s;case"script":return s=Vo(n.src),(a=e.querySelector(Cc(s)))?(t.instance=a,hn(a),a):(i=n,(a=wi.get(s))&&(i=Ce({},n),wg(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),hn(a),xn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xh(i,n.precedence,e));return t.instance}function xh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ag(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Sh=null;function Ix(e,t,n){if(Sh===null){var i=new Map,a=Sh=new Map;a.set(n,i)}else a=Sh,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Sc]||s[gn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function R0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function WC(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Px(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Ib(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Pb(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Bx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Pb(t),e.suspenseyImages.push(t)),e=ZC.bind(e),t.decode().then(e,e))}function qC(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=No(i.href),s=t.querySelector(wc(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pc.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,hn(s);return}s=t.ownerDocument||t,i=Ob(i),(a=wi.get(a))&&Ag(i,a),s=s.createElement("link"),hn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),xn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=pc.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mh=0;function YC(e,t){return e.stylesheets&&e.count===0&&bh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&bh(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Mh===0&&(Mh=62500*hC());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bh(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Mh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Bb(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)bh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function pc(){this.count--,Bb(this)}function ZC(){this.imgCount--,Bb(this)}var Qh=null;function bh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qh=new Map,t.forEach(JC,e),Qh=null,pc.call(e))}function JC(e,t){if(!(t.state.loading&4)){var n=Qh.get(e);if(n)var i=n.get(null);else{n=new Map,Qh.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=pc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Do={$$typeof:aa,Provider:null,Consumer:null,_currentValue:ir,_currentValue2:ir,_threadCount:0};function KC(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zp(0),this.hiddenUpdates=Zp(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function zb(e,t,n,i,a,s,r,o,l,c,h,p){return e=new KC(e,t,n,r,l,c,h,p,o),t=1,s===!0&&(t|=24),s=Wn(3,null,null,t),e.current=s,s.stateNode=e,t=Y0(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},K0(s),e}function Fb(e){return e?(e=ro,e):ro}function Vb(e,t,n,i,a,s){a=Fb(a),i.context===null?i.context=a:i.pendingContext=a,i=_s(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=vs(e,i,t),n!==null&&(qn(n,e,t),ql(n,e,t))}function zx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cg(e,t){zx(e,t),(e=e.alternate)&&zx(e,t)}function Hb(e){if(e.tag===13||e.tag===31){var t=yr(e,67108864);t!==null&&qn(t,e,67108864),Cg(e,67108864)}}function Fx(e){if(e.tag===13||e.tag===31){var t=oi();t=I0(t);var n=yr(e,t);n!==null&&qn(n,e,t),Cg(e,t)}}var Uo=!0;function jC(e,t,n,i){var a=Gt.T;Gt.T=null;var s=he.p;try{he.p=2,Rg(e,t,n,i)}finally{he.p=s,Gt.T=a}}function QC(e,t,n,i){var a=Gt.T;Gt.T=null;var s=he.p;try{he.p=8,Rg(e,t,n,i)}finally{he.p=s,Gt.T=a}}function Rg(e,t,n,i){if(Uo){var a=N0(i);if(a===null)_m(e,t,i,$h,n),Vx(e,i);else if(tR(a,e,t,n,i))i.stopPropagation();else if(Vx(e,i),t&4&&-1<$C.indexOf(e)){for(;a!==null;){var s=Io(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Qs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ri(r);o.entanglements[1]|=l,r&=~l}fa(s),(ue&6)===0&&(Yh=ai()+500,Ac(0,!1))}}break;case 31:case 13:o=yr(s,2),o!==null&&qn(o,s,2),gf(),Cg(s,2)}if(s=N0(i),s===null&&_m(e,t,i,$h,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else _m(e,t,i,null,n)}}function N0(e){return e=z0(e),Ng(e)}var $h=null;function Ng(e){if($h=null,e=er(e),e!==null){var t=_c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=qx(t),e!==null)return e;e=null}else if(n===31){if(e=Yx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $h=e,null}function Gb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dA()){case $x:return 2;case tS:return 8;case Ch:case pA:return 32;case eS:return 268435456;default:return 32}default:return 32}}var D0=!1,Ms=null,bs=null,Ts=null,mc=new Map,gc=new Map,ls=[],$C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vx(e,t){switch(e){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":mc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gc.delete(t.pointerId)}}function Il(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Io(t),t!==null&&Hb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function tR(e,t,n,i,a){switch(t){case"focusin":return Ms=Il(Ms,e,t,n,i,a),!0;case"dragenter":return bs=Il(bs,e,t,n,i,a),!0;case"mouseover":return Ts=Il(Ts,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return mc.set(s,Il(mc.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,gc.set(s,Il(gc.get(s)||null,e,t,n,i,a)),!0}return!1}function kb(e){var t=er(e.target);if(t!==null){var n=_c(t);if(n!==null){if(t=n.tag,t===13){if(t=qx(n),t!==null){e.blockedOn=t,fy(e.priority,function(){Fx(n)});return}}else if(t===31){if(t=Yx(n),t!==null){e.blockedOn=t,fy(e.priority,function(){Fx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Th(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=N0(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Om=i,n.target.dispatchEvent(i),Om=null}else return t=Io(n),t!==null&&Hb(t),e.blockedOn=n,!1;t.shift()}return!0}function Hx(e,t,n){Th(e)&&n.delete(t)}function eR(){D0=!1,Ms!==null&&Th(Ms)&&(Ms=null),bs!==null&&Th(bs)&&(bs=null),Ts!==null&&Th(Ts)&&(Ts=null),mc.forEach(Hx),gc.forEach(Hx)}function ah(e,t){e.blockedOn===t&&(e.blockedOn=null,D0||(D0=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,eR)))}var sh=null;function Gx(e){sh!==e&&(sh=e,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,function(){sh===e&&(sh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Ng(i||n)===null)continue;break}var s=Io(n);s!==null&&(e.splice(t,3),t-=3,Km(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Lo(e){function t(l){return ah(l,e)}Ms!==null&&ah(Ms,e),bs!==null&&ah(bs,e),Ts!==null&&ah(Ts,e),mc.forEach(t),gc.forEach(t);for(var n=0;n<ls.length;n++){var i=ls[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ls.length&&(n=ls[0],n.blockedOn===null);)kb(n),n.blockedOn===null&&ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Zn]||null;if(typeof s=="function")r||Gx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Zn]||null)o=r.formAction;else if(Ng(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Gx(n)}}}function Xb(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Dg(e){this._internalRoot=e}yf.prototype.render=Dg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=oi();Vb(n,i,e,t,null,null)};yf.prototype.unmount=Dg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vb(e.current,2,null,e,null,null),gf(),t[Oo]=null}};function yf(e){this._internalRoot=e}yf.prototype.unstable_scheduleHydration=function(e){if(e){var t=oS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ls.length&&t!==0&&t<ls[n].priority;n++);ls.splice(n,0,e),n===0&&kb(e)}};var kx=Xx.version;if(kx!=="19.3.0")throw Error(j(527,kx,"19.3.0"));he.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=nA(t),e=e!==null?Zx(e):null,e=e===null?null:e.stateNode,e};var nR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Pl.isDisabled&&Pl.supportsFiber))try{vc=Pl.inject(nR),si=Pl}catch{}var Pl;xf.createRoot=function(e,t){if(!Wx(e))throw Error(j(299));var n=!1,i="",a=TM,s=EM,r=AM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=zb(e,1,!1,null,null,n,i,null,a,s,r,Xb),e[Oo]=t.current,Mg(e),new Dg(t)};xf.hydrateRoot=function(e,t,n){if(!Wx(e))throw Error(j(299));var i=!1,a="",s=TM,r=EM,o=AM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=zb(e,1,!0,t,n??null,i,a,l,s,r,o,Xb),t.context=Fb(null),n=t.current,i=oi(),i=I0(i),a=_s(i),a.callback=null,vs(n,a,i),n=i,t.current.lanes=n,xc(t,n),fa(t),e[Oo]=t.current,Mg(e),new yf(t)};xf.version="19.3.0"});var Zb=ji((TL,Yb)=>{"use strict";function qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb)}catch(e){console.error(e)}}qb(),Yb.exports=Wb()});var eE=ji(Ap=>{"use strict";var lL=Symbol.for("react.transitional.element"),cL=Symbol.for("react.fragment");function tE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:lL,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ap.Fragment=cL;Ap.jsx=tE;Ap.jsxs=tE});var Hn=ji(($P,nE)=>{"use strict";nE.exports=eE()});var yE=je(Zb(),1);var Ea=je(es(),1);var T1=0,m_=1,E1=2;var _u=1,A1=2,dl=3,ks=0,An=1,Ni=2,Ma=0,pl=1,g_=2,__=3,v_=4,w1=5;var Ir=100,C1=101,R1=102,N1=103,D1=104,U1=200,L1=201,O1=202,I1=203,y_=204,x_=205,P1=206,B1=207,z1=208,F1=209,V1=210,H1=211,G1=212,k1=213,X1=214,Wf=0,qf=1,Yf=2,nl=3,Zf=4,Jf=5,Kf=6,jf=7,wd=0,W1=1,q1=2,Wi=0,S_=1,M_=2,b_=3,vu=4,T_=5,E_=6,A_=7;var w_=300,Xs=301,Pr=302,Cd=303,Rd=304,yu=306,il=1e3,pa=1001,Qf=1002,pn=1003,Y1=1004;var xu=1005;var Tn=1006,Nd=1007;var Ws=1008;var Qn=1009,C_=1010,R_=1011,ml=1012,Dd=1013,qi=1014,Di=1015,Yi=1016,Ud=1017,Ld=1018,gl=1020,N_=35902,D_=35899,U_=1021,L_=1022,Ui=1023,ga=1026,qs=1027,Od=1028,Id=1029,Ys=1030,Pd=1031;var Bd=1033,Su=33776,Mu=33777,bu=33778,Tu=33779,zd=35840,Fd=35841,Vd=35842,Hd=35843,Gd=36196,kd=37492,Xd=37496,Wd=37488,qd=37489,Eu=37490,Yd=37491,Zd=37808,Jd=37809,Kd=37810,jd=37811,Qd=37812,$d=37813,tp=37814,ep=37815,np=37816,ip=37817,ap=37818,sp=37819,rp=37820,op=37821,lp=36492,cp=36494,up=36495,hp=36283,fp=36284,Au=36285,dp=36286;var Fc=2300,$f=2301,kf=2302,a_=2303,s_=2400,r_=2401,o_=2402;var Z1=3200;var wu=0,J1=1,Ja="",Mn="srgb",Vc="srgb-linear",Hc="linear",_e="srgb";var Xf=7680;var K1=519,j1=512,Q1=513,$1=514,pp=515,tT=516,eT=517,mp=518,nT=519,iT=35044;var O_="300 es",Xi=2e3,al=2001;function iR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function aR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Gc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function aT(){let e=Gc("canvas");return e.style.display="block",e}var Jb={},sl=null;function I_(...e){let t="THREE."+e.shift();sl?sl("log",t,...e):console.log(t,...e)}function sT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Bt(...e){e=sT(e);let t="THREE."+e.shift();if(sl)sl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ft(...e){e=sT(e);let t="THREE."+e.shift();if(sl)sl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Er(...e){let t=e.join(" ");t in Jb||(Jb[t]=!0,Bt(...e))}function rT(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var oT={[Wf]:qf,[Yf]:Kf,[Zf]:jf,[nl]:Jf,[qf]:Wf,[Kf]:Yf,[jf]:Zf,[Jf]:nl},_a=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let a=i[t];if(a!==void 0){let s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ug=Math.PI/180,td=180/Math.PI;function _l(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[e&255]+Dn[e>>8&255]+Dn[e>>16&255]+Dn[e>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function sR(e,t){return(e%t+t)%t}function Lg(e,t,n){return(1-n)*e+n*t}function Rc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var H_=class H_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};H_.prototype.isVector2=!0;var ct=H_,va=class{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],m=s[r+2],M=s[r+3];if(p!==M||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+p*M;g<0&&(u=-u,d=-d,m=-m,M=-M,g=-g);let f=1-o;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);f=Math.sin(f*_)/S,o=Math.sin(o*_)/S,l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+M*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+m*o,p=p*f+M*o;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){let o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],d=s[r+2],m=s[r+3];return t[n]=o*m+h*p+l*d-c*u,t[n+1]=l*m+h*u+c*p-o*d,t[n+2]=c*m+h*d+o*u-l*p,t[n+3]=h*m-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),m=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"YXZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"ZXY":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"ZYX":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"YZX":this._x=u*h*p+c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p-u*d*m;break;case"XZY":this._x=u*h*p-c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p+u*d*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G_=class G_{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Kb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Kb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Og.copy(this).projectOnVector(t),this.sub(Og)}reflect(t){return this.sub(Og.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};G_.prototype.isVector3=!0;var O=G_,Og=new O,Kb=new va,k_=class k_{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],m=i[8],M=a[0],g=a[3],f=a[6],_=a[1],S=a[4],v=a[7],T=a[2],E=a[5],A=a[8];return s[0]=r*M+o*_+l*T,s[3]=r*g+o*S+l*E,s[6]=r*f+o*v+l*A,s[1]=c*M+h*_+p*T,s[4]=c*g+h*S+p*E,s[7]=c*f+h*v+p*A,s[2]=u*M+d*_+m*T,s[5]=u*g+d*S+m*E,s[8]=u*f+d*v+m*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*s,d=c*s-r*l,m=n*p+i*u+a*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=p*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(h*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ig.makeScale(t,n)),this}rotate(t){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ig.makeRotation(-t)),this}translate(t,n){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ig.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};k_.prototype.isMatrix3=!0;var Xt=k_,Ig=new Xt,jb=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qb=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rR(){let e={enabled:!0,workingColorSpace:Vc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_e&&(a.r=Ya(a.r),a.g=Ya(a.g),a.b=Ya(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_e&&(a.r=el(a.r),a.g=el(a.g),a.b=el(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ja?Hc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Vc]:{primaries:t,whitePoint:i,transfer:Hc,toXYZ:jb,fromXYZ:Qb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:jb,fromXYZ:Qb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),e}var se=rR();function Ya(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function el(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ho,ed=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ho===void 0&&(Ho=Gc("canvas")),Ho.width=t.width,Ho.height=t.height;let a=Ho.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ho}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Gc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ya(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ya(n[i]/255)*255):n[i]=Ya(n[i]);return{data:n,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oR=0,rl=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=_l(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Pg(a[r].image)):s.push(Pg(a[r]))}else s=Pg(a);i.url=s}return n||(t.images[this.uuid]=i),i}};function Pg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ed.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var lR=0,Bg=new O,Vn=class e extends _a{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=pa,a=pa,s=Tn,r=Ws,o=Ui,l=Qn,c=e.DEFAULT_ANISOTROPY,h=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=_l(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bg).x}get height(){return this.source.getSize(Bg).y}get depth(){return this.source.getSize(Bg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Bt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Bt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case il:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case Qf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case il:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case Qf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=w_;Vn.DEFAULT_ANISOTROPY=1;var X_=class X_{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],m=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,v=(d+1)/2,T=(f+1)/2,E=(h+u)/4,A=(p+M)/4,x=(m+g)/4;return S>v&&S>T?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=E/i,s=A/i):v>T?v<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),i=E/a,s=x/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=A/s,a=x/s),this.set(i,a,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(p-M)*(p-M)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(p-M)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};X_.prototype.isVector4=!0;var He=X_,nd=class extends _a{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n),this.textures=[];let a={width:t,height:n,depth:i.depth},s=new Vn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let a=Object.assign({},t.textures[n].image);this.textures[n].source=new rl(a)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends nd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},kc=class extends Vn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var id=class extends Vn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ad=class Ad{constructor(t,n,i,a,s,r,o,l,c,h,p,u,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,p,u,d,m,M,g)}set(t,n,i,a,s,r,o,l,c,h,p,u,d,m,M,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=m,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ad().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,a=1/Go.setFromMatrixColumn(t,0).length(),s=1/Go.setFromMatrixColumn(t,1).length(),r=1/Go.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let u=r*h,d=r*p,m=o*h,M=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+m*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=m+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,m=c*h,M=c*p;n[0]=u+M*o,n[4]=m*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-m,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,m=c*h,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=m+d*o,n[1]=d+m*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,m=o*h,M=o*p;n[0]=l*h,n[4]=m*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-m,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,m=o*l,M=o*c;n[0]=l*h,n[4]=M-u*p,n[8]=m*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+m,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,m=o*l,M=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+M,n[5]=r*h,n[9]=d*p-m,n[2]=m*p-d,n[6]=o*h,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cR,t,uR)}lookAt(t,n,i){let a=this.elements;return ui.subVectors(t,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Us.crossVectors(i,ui),Us.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Us.crossVectors(i,ui)),Us.normalize(),Sf.crossVectors(ui,Us),a[0]=Us.x,a[4]=Sf.x,a[8]=ui.x,a[1]=Us.y,a[5]=Sf.y,a[9]=ui.y,a[2]=Us.z,a[6]=Sf.z,a[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],m=i[2],M=i[6],g=i[10],f=i[14],_=i[3],S=i[7],v=i[11],T=i[15],E=a[0],A=a[4],x=a[8],w=a[12],R=a[1],L=a[5],H=a[9],k=a[13],I=a[2],F=a[6],J=a[10],X=a[14],at=a[3],W=a[7],$=a[11],nt=a[15];return s[0]=r*E+o*R+l*I+c*at,s[4]=r*A+o*L+l*F+c*W,s[8]=r*x+o*H+l*J+c*$,s[12]=r*w+o*k+l*X+c*nt,s[1]=h*E+p*R+u*I+d*at,s[5]=h*A+p*L+u*F+d*W,s[9]=h*x+p*H+u*J+d*$,s[13]=h*w+p*k+u*X+d*nt,s[2]=m*E+M*R+g*I+f*at,s[6]=m*A+M*L+g*F+f*W,s[10]=m*x+M*H+g*J+f*$,s[14]=m*w+M*k+g*X+f*nt,s[3]=_*E+S*R+v*I+T*at,s[7]=_*A+S*L+v*F+T*W,s[11]=_*x+S*H+v*J+T*$,s[15]=_*w+S*k+v*X+T*nt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],m=t[3],M=t[7],g=t[11],f=t[15],_=l*d-c*u,S=o*d-c*p,v=o*u-l*p,T=r*d-c*h,E=r*u-l*h,A=r*p-o*h;return n*(M*_-g*S+f*v)-i*(m*_-g*T+f*E)+a*(m*S-M*T+f*A)-s*(m*v-M*E+g*A)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],a=t[8],s=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(s*h-o*l)+a*(s*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],m=t[12],M=t[13],g=t[14],f=t[15],_=n*o-i*r,S=n*l-a*r,v=n*c-s*r,T=i*l-a*o,E=i*c-s*o,A=a*c-s*l,x=h*M-p*m,w=h*g-u*m,R=h*f-d*m,L=p*g-u*M,H=p*f-d*M,k=u*f-d*g,I=_*k-S*H+v*L+T*R-E*w+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(o*k-l*H+c*L)*F,t[1]=(a*H-i*k-s*L)*F,t[2]=(M*A-g*E+f*T)*F,t[3]=(u*E-p*A-d*T)*F,t[4]=(l*R-r*k-c*w)*F,t[5]=(n*k-a*R+s*w)*F,t[6]=(g*v-m*A-f*S)*F,t[7]=(h*A-u*v+d*S)*F,t[8]=(r*H-o*R+c*x)*F,t[9]=(i*R-n*H-s*x)*F,t[10]=(m*E-M*v+f*_)*F,t[11]=(p*v-h*E-d*_)*F,t[12]=(o*w-r*L-l*x)*F,t[13]=(n*L-i*w+a*x)*F,t[14]=(M*S-m*T-g*_)*F,t[15]=(h*T-p*S+u*_)*F,this}scale(t){let n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){let a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,d=s*h,m=s*p,M=r*h,g=r*p,f=o*p,_=l*c,S=l*h,v=l*p,T=i.x,E=i.y,A=i.z;return a[0]=(1-(M+f))*T,a[1]=(d+v)*T,a[2]=(m-S)*T,a[3]=0,a[4]=(d-v)*E,a[5]=(1-(u+f))*E,a[6]=(g+_)*E,a[7]=0,a[8]=(m+S)*A,a[9]=(g-_)*A,a[10]=(1-(u+M))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Go.set(a[0],a[1],a[2]).length(),o=Go.set(a[4],a[5],a[6]).length(),l=Go.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Vi.copy(this);let c=1/r,h=1/o,p=1/l;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,n.setFromRotationMatrix(Vi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Xi,l=!1){let c=this.elements,h=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a),m,M;if(l)m=s/(r-s),M=r*s/(r-s);else if(o===Xi)m=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===al)m=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Xi,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a),m,M;if(l)m=1/(r-s),M=r/(r-s);else if(o===Xi)m=-2/(r-s),M=-(r+s)/(r-s);else if(o===al)m=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Ad.prototype.isMatrix4=!0;var Re=Ad,Go=new O,Vi=new Re,cR=new O(0,0,0),uR=new O(1,1,1),Us=new O,Sf=new O,ui=new O,$b=new Re,t1=new va,ya=class e{constructor(t=0,n=0,i=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return $b.makeRotationFromQuaternion(t),this.setFromRotationMatrix($b,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return t1.setFromEuler(this),this.setFromQuaternion(t1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ya.DEFAULT_ORDER="XYZ";var Xc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hR=0,e1=new O,ko=new va,Ga=new Re,Mf=new O,Nc=new O,fR=new O,dR=new va,n1=new O(1,0,0),i1=new O(0,1,0),a1=new O(0,0,1),s1={type:"added"},pR={type:"removed"},Xo={type:"childadded",child:null},zg={type:"childremoved",child:null},En=class e extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new ya,i=new va,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Re},normalMatrix:{value:new Xt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ko.setFromAxisAngle(t,n),this.quaternion.multiply(ko),this}rotateOnWorldAxis(t,n){return ko.setFromAxisAngle(t,n),this.quaternion.premultiply(ko),this}rotateX(t){return this.rotateOnAxis(n1,t)}rotateY(t){return this.rotateOnAxis(i1,t)}rotateZ(t){return this.rotateOnAxis(a1,t)}translateOnAxis(t,n){return e1.copy(t).applyQuaternion(this.quaternion),this.position.add(e1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(n1,t)}translateY(t){return this.translateOnAxis(i1,t)}translateZ(t){return this.translateOnAxis(a1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Mf.copy(t):Mf.set(t,n,i);let a=this.parent;this.updateWorldMatrix(!0,!1),Nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(Nc,Mf,this.up):Ga.lookAt(Mf,Nc,this.up),this.quaternion.setFromRotationMatrix(Ga),a&&(Ga.extractRotation(a.matrixWorld),ko.setFromRotationMatrix(Ga),this.quaternion.premultiply(ko.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s1),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pR),zg.child=t,this.dispatchEvent(zg),zg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s1),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nc,t,fR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nc,dR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=a,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let a=t.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new O(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},mR={type:"move"},ol=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},lT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},bf={h:0,s:0,l:0};function Fg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=se.workingColorSpace){if(t=sR(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Fg(r,s,t+1/3),this.g=Fg(r,s,t),this.b=Fg(r,s,t-1/3)}return se.colorSpaceToWorking(this,a),this}setStyle(t,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Bt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mn){let i=lT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}copyLinearToSRGB(t){return this.r=el(t.r),this.g=el(t.g),this.b=el(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return se.workingToColorSpace(Un.copy(this),t),Math.round(Qt(Un.r*255,0,255))*65536+Math.round(Qt(Un.g*255,0,255))*256+Math.round(Qt(Un.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.workingToColorSpace(Un.copy(this),n);let i=Un.r,a=Un.g,s=Un.b,r=Math.max(i,a,s),o=Math.min(i,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=se.workingColorSpace){return se.workingToColorSpace(Un.copy(this),n),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=Mn){se.workingToColorSpace(Un.copy(this),t);let n=Un.r,i=Un.g,a=Un.b;return t!==Mn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ls),this.setHSL(Ls.h+t,Ls.s+n,Ls.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ls),t.getHSL(bf);let i=Lg(Ls.h,bf.h,n),a=Lg(Ls.s,bf.s,n),s=Lg(Ls.l,bf.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Zt;Zt.NAMES=lT;var Ar=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Hi=new O,ka=new O,Vg=new O,Xa=new O,Wo=new O,qo=new O,r1=new O,Hg=new O,Gg=new O,kg=new O,Xg=new He,Wg=new He,qg=new He,Bs=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Hi.subVectors(t,n),a.cross(Hi);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){Hi.subVectors(a,n),ka.subVectors(i,n),Vg.subVectors(t,n);let r=Hi.dot(Hi),o=Hi.dot(ka),l=Hi.dot(Vg),c=ka.dot(ka),h=ka.dot(Vg),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,m=(r*h-o*l)*u;return s.set(1-d-m,m,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Xa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xa.x),l.addScaledVector(r,Xa.y),l.addScaledVector(o,Xa.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Xg.setScalar(0),Wg.setScalar(0),qg.setScalar(0),Xg.fromBufferAttribute(t,n),Wg.fromBufferAttribute(t,i),qg.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Xg,s.x),r.addScaledVector(Wg,s.y),r.addScaledVector(qg,s.z),r}static isFrontFacing(t,n,i,a){return Hi.subVectors(i,n),ka.subVectors(t,n),Hi.cross(ka).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),Hi.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return e.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,a=this.b,s=this.c,r,o;Wo.subVectors(a,i),qo.subVectors(s,i),Hg.subVectors(t,i);let l=Wo.dot(Hg),c=qo.dot(Hg);if(l<=0&&c<=0)return n.copy(i);Gg.subVectors(t,a);let h=Wo.dot(Gg),p=qo.dot(Gg);if(h>=0&&p<=h)return n.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Wo,r);kg.subVectors(t,s);let d=Wo.dot(kg),m=qo.dot(kg);if(m>=0&&d<=m)return n.copy(s);let M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(qo,o);let g=h*m-d*p;if(g<=0&&p-h>=0&&d-m>=0)return r1.subVectors(s,a),o=(p-h)/(p-h+(d-m)),n.copy(a).addScaledVector(r1,o);let f=1/(g+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(Wo,r).addScaledVector(qo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xa=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Gi):Gi.fromBufferAttribute(s,r),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tf.copy(i.boundingBox)),Tf.applyMatrix4(t.matrixWorld),this.union(Tf)}let a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dc),Ef.subVectors(this.max,Dc),Yo.subVectors(t.a,Dc),Zo.subVectors(t.b,Dc),Jo.subVectors(t.c,Dc),Os.subVectors(Zo,Yo),Is.subVectors(Jo,Zo),Sr.subVectors(Yo,Jo);let n=[0,-Os.z,Os.y,0,-Is.z,Is.y,0,-Sr.z,Sr.y,Os.z,0,-Os.x,Is.z,0,-Is.x,Sr.z,0,-Sr.x,-Os.y,Os.x,0,-Is.y,Is.x,0,-Sr.y,Sr.x,0];return!Yg(n,Yo,Zo,Jo,Ef)||(n=[1,0,0,0,1,0,0,0,1],!Yg(n,Yo,Zo,Jo,Ef))?!1:(Af.crossVectors(Os,Is),n=[Af.x,Af.y,Af.z],Yg(n,Yo,Zo,Jo,Ef))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wa=[new O,new O,new O,new O,new O,new O,new O,new O],Gi=new O,Tf=new xa,Yo=new O,Zo=new O,Jo=new O,Os=new O,Is=new O,Sr=new O,Dc=new O,Ef=new O,Af=new O,Mr=new O;function Yg(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){Mr.fromArray(e,s);let o=a.x*Math.abs(Mr.x)+a.y*Math.abs(Mr.y)+a.z*Math.abs(Mr.z),l=t.dot(Mr),c=n.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new O,wf=new ct,gR=0,fi=class extends _a{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=iT,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wf.fromBufferAttribute(this,n),wf.applyMatrix3(t),this.setXY(n,wf.x,wf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(t),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(t),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(t),this.setXYZ(n,en.x,en.y,en.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Rc(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Rc(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Rc(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Rc(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Rc(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),i=Jn(i,this.array),a=Jn(a,this.array),s=Jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wc=class extends fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var qc=class extends fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var We=class extends fi{constructor(t,n,i){super(new Float32Array(t),n,i)}},_R=new xa,Uc=new O,Zg=new O,zs=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_R.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uc.subVectors(t,this.center);let n=Uc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Uc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uc.copy(t.center).add(Zg)),this.expandByPoint(Uc.copy(t.center).sub(Zg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vR=0,Ci=new Re,Jg=new En,Ko=new O,hi=new xa,Lc=new xa,dn=new O,jn=class e extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iR(t)?qc:Wc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,n,i){return Ci.makeTranslation(t,n,i),this.applyMatrix4(Ci),this}scale(t,n,i){return Ci.makeScale(t,n,i),this.applyMatrix4(Ci),this}lookAt(t){return Jg.lookAt(t),Jg.updateMatrix(),this.applyMatrix4(Jg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let a=0,s=t.length;a<s;a++){let r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new We(i,3))}else{let i=Math.min(t.length,n.count);for(let a=0;a<i;a++){let s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){let s=n[i];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Lc.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(hi.min,Lc.min),hi.expandByPoint(dn),dn.addVectors(hi.max,Lc.max),hi.expandByPoint(dn)):(hi.expandByPoint(Lc.min),hi.expandByPoint(Lc.max))}hi.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)dn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(dn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(Ko.fromBufferAttribute(t,c),dn.add(Ko)),a=Math.max(a,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,a=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new fi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;let c=new O,h=new O,p=new O,u=new ct,d=new ct,m=new ct,M=new O,g=new O;function f(x,w,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,R),h.sub(c),p.sub(c),d.sub(u),m.sub(u);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(M.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(L),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[x].add(M),o[w].add(M),o[R].add(M),l[x].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,w=_.length;x<w;++x){let R=_[x],L=R.start,H=R.count;for(let k=L,I=L+H;k<I;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new O,v=new O,T=new O,E=new O;function A(x){T.fromBufferAttribute(a,x),E.copy(T);let w=o[x];S.copy(w),S.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(E,w);let L=v.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,w=_.length;x<w;++x){let R=_[x],L=R.start,H=R.count;for(let k=L,I=L+H;k<I;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,m),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let f=0;f<h;f++)u[m++]=c[d++]}return new fi(u,h,p)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,i);n.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(n))}let s=t.morphAttributes;for(let c in s){let h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kg=new O,yR=new O,xR=new Xt,ki=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let a=Kg.subVectors(i,n).cross(yR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let a=t.delta(Kg),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||xR.getNormalMatrix(t),a=this.coplanarPoint(Kg).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},SR=0,Za=class extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=pl,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=y_,this.blendDst=x_,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xf,this.stencilZFail=Xf,this.stencilZPass=Xf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Bt(`Material: parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){Bt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ki().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qa=new O,jg=new O,Cf=new O,Rf=new O,ad=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=qa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(qa.copy(this.origin).addScaledVector(this.direction,n),qa.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){jg.copy(t).add(n).multiplyScalar(.5),Cf.copy(n).sub(t).normalize(),Rf.copy(this.origin).sub(jg);let s=t.distanceTo(n)*.5,r=-this.direction.dot(Cf),o=Rf.dot(this.direction),l=-Rf.dot(Cf),c=Rf.lengthSq(),h=Math.abs(1-r*r),p,u,d,m;if(h>0)if(p=r*l-o,u=r*o-l,m=s*h,p>=0)if(u>=-m)if(u<=m){let M=1/h;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(jg).addScaledVector(Cf,u),d}intersectSphere(t,n){if(t.radius<0)return null;qa.subVectors(t.center,this.origin);let i=qa.dot(this.direction),a=qa.dot(qa)-i*i,s=t.radius*t.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,qa)!==null}intersectTriangle(t,n,i,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,m=n.x-r.x,M=n.y-r.y,g=n.z-r.z,f=i.x-r.x,_=i.y-r.y,S=i.z-r.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(h),A,x,w,R,L,H,k,I,F,J,X,at;if(v>=T&&v>=E?(w=l,H=p,F=m,at=f,l>=0?(A=c,x=h,R=u,L=d,k=M,I=g,J=_,X=S):(A=h,x=c,R=d,L=u,k=g,I=M,J=S,X=_)):T>=E?(w=c,H=u,F=M,at=_,c>=0?(A=h,x=l,R=d,L=p,k=g,I=m,J=S,X=f):(A=l,x=h,R=p,L=d,k=m,I=g,J=f,X=S)):(w=h,H=d,F=g,at=S,h>=0?(A=l,x=c,R=p,L=u,k=m,I=M,J=f,X=_):(A=c,x=l,R=u,L=p,k=M,I=m,J=_,X=f)),w===0)return null;let W=A/w,$=x/w,nt=1/w,Nt=R-W*H,Et=L-$*H,ce=k-W*F,$t=I-$*F,re=J-W*at,Z=X-$*at,tt=re*$t-Z*ce,vt=Nt*Z-Et*re,zt=ce*Et-$t*Nt;if(a){if(tt<0||vt<0||zt<0)return null}else if((tt<0||vt<0||zt<0)&&(tt>0||vt>0||zt>0))return null;let Mt=tt+vt+zt;if(Mt===0)return null;let Vt=nt*(tt*H+vt*F+zt*at);return(Mt>0?Vt<0:Vt>0)?null:this.at(Vt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wr=class extends Za{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},o1=new Re,br=new ad,Nf=new zs,l1=new O,Df=new O,Uf=new O,Lf=new O,Qg=new O,Of=new O,c1=new O,If=new O,ve=class extends En{constructor(t=new jn,n=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){let i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);let o=this.morphTargetInfluences;if(s&&o){Of.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],p=s[l];h!==0&&(Qg.fromBufferAttribute(p,t),r?Of.addScaledVector(Qg,h):Of.addScaledVector(Qg.sub(n),h))}n.add(Of)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nf.copy(i.boundingSphere),Nf.applyMatrix4(s),br.copy(t.ray).recast(t.near),!(Nf.containsPoint(br.origin)===!1&&(br.intersectSphere(Nf,l1)===null||br.origin.distanceToSquared(l1)>(t.far-t.near)**2))&&(o1.copy(s).invert(),br.copy(t.ray).applyMatrix4(o1),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,br)))}_computeIntersections(t,n,i){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,M=u.length;m<M;m++){let g=u[m],f=r[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,T=S;v<T;v+=3){let E=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);a=Pf(this,f,t,i,c,h,p,E,A,x),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,f=M;g<f;g+=3){let _=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);a=Pf(this,r,t,i,c,h,p,_,S,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,M=u.length;m<M;m++){let g=u[m],f=r[g.materialIndex],_=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=_,T=S;v<T;v+=3){let E=v,A=v+1,x=v+2;a=Pf(this,f,t,i,c,h,p,E,A,x),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{let m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=m,f=M;g<f;g+=3){let _=g,S=g+1,v=g+2;a=Pf(this,r,t,i,c,h,p,_,S,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}};function MR(e,t,n,i,a,s,r,o){let l;if(t.side===An?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ks,o),l===null)return null;If.copy(o),If.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(If);return c<n.near||c>n.far?null:{distance:c,point:If.clone(),object:e}}function Pf(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Df),e.getVertexPosition(l,Uf),e.getVertexPosition(c,Lf);let h=MR(e,t,n,i,Df,Uf,Lf,c1);if(h){let p=new O;Bs.getBarycoord(c1,Df,Uf,Lf,p),a&&(h.uv=Bs.getInterpolatedAttribute(a,o,l,c,p,new ct)),s&&(h.uv1=Bs.getInterpolatedAttribute(s,o,l,c,p,new ct)),r&&(h.normal=Bs.getInterpolatedAttribute(r,o,l,c,p,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Bs.getNormal(Df,Uf,Lf,u.normal),h.face=u,h.barycoord=p}return h}var Yc=class extends Vn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=pn,h=pn,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zc=class extends fi{constructor(t,n,i,a=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},jo=new Re,u1=new Re,Bf=[],h1=new xa,bR=new Re,Oc=new ve,Ic=new zs,Jc=class extends ve{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,bR)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xa),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jo),h1.copy(t.boundingBox).applyMatrix4(jo),this.boundingBox.union(h1)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jo),Ic.copy(t.boundingSphere).applyMatrix4(jo),this.boundingSphere.union(Ic)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let i=n.morphTargetInfluences,a=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let o=0;o<i.length;o++)i[o]=a[r+o]}raycast(t,n){let i=this.matrixWorld,a=this.count;if(Oc.geometry=this.geometry,Oc.material=this.material,Oc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(i),t.ray.intersectsSphere(Ic)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,jo),u1.multiplyMatrices(i,jo),Oc.matrixWorld=u1,Oc.raycast(t,Bf);for(let r=0,o=Bf.length;r<o;r++){let l=Bf[r];l.instanceId=s,l.object=this,n.push(l)}Bf.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let i=n.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yc(new Float32Array(a*this.count),a,this.count,Od,Di));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=a*t;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tr=new zs,TR=new ct(.5,.5),zf=new O,ll=class{constructor(t=new ki,n=new ki,i=new ki,a=new ki,s=new ki,r=new ki){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Xi,i=!1){let a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],m=s[8],M=s[9],g=s[10],f=s[11],_=s[12],S=s[13],v=s[14],T=s[15];if(a[0].setComponents(c-r,d-h,f-m,T-_).normalize(),a[1].setComponents(c+r,d+h,f+m,T+_).normalize(),a[2].setComponents(c+o,d+p,f+M,T+S).normalize(),a[3].setComponents(c-o,d-p,f-M,T-S).normalize(),i)a[4].setComponents(l,u,g,v).normalize(),a[5].setComponents(c-l,d-u,f-g,T-v).normalize();else if(a[4].setComponents(c-l,d-u,f-g,T-v).normalize(),n===Xi)a[5].setComponents(c+l,d+u,f+g,T+v).normalize();else if(n===al)a[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);let n=TR.distanceTo(t.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){let n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let a=n[i];if(zf.x=a.normal.x>0?t.max.x:t.min.x,zf.y=a.normal.y>0?t.max.y:t.min.y,zf.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(zf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Kc=class extends Vn{constructor(t=[],n=Xs,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cr=class extends Vn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fs=class extends Vn{constructor(t,n,i=qi,a,s,r,o=pn,l=pn,c,h=ga,p=1){if(h!==ga&&h!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},sd=class extends Fs{constructor(t,n=qi,i=Xs,a,s,r=pn,o=pn,l,c=ga){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jc=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Sa=class e extends jn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;m("z","y","x",-1,-1,i,n,t,r,s,0),m("z","y","x",1,-1,i,n,-t,r,s,1),m("x","z","y",1,1,t,i,n,a,r,2),m("x","z","y",1,-1,t,i,-n,a,r,3),m("x","y","z",1,-1,t,n,i,a,s,4),m("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(p,2));function m(M,g,f,_,S,v,T,E,A,x,w){let R=v/A,L=T/x,H=v/2,k=T/2,I=E/2,F=A+1,J=x+1,X=0,at=0,W=new O;for(let $=0;$<J;$++){let nt=$*L-k;for(let Nt=0;Nt<F;Nt++){let Et=Nt*R-H;W[M]=Et*_,W[g]=nt*S,W[f]=I,c.push(W.x,W.y,W.z),W[M]=0,W[g]=0,W[f]=E>0?1:-1,h.push(W.x,W.y,W.z),p.push(Nt/A),p.push(1-$/x),X+=1}}for(let $=0;$<x;$++)for(let nt=0;nt<A;nt++){let Nt=u+nt+F*$,Et=u+nt+F*($+1),ce=u+(nt+1)+F*($+1),$t=u+(nt+1)+F*$;l.push(Nt,Et,$t),l.push(Et,ce,$t),at+=6}o.addGroup(d,at,w),d+=at,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),a=0,s=i.length,r;n?r=n:r=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);let h=i[a],u=i[a+1]-h,d=(r-h)/u;return(a+d)/(s-1)}getTangent(t,n){let a=t-1e-4,s=t+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new ct:new O);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new O,a=[],s=[],r=[],o=new O,l=new Re;for(let d=0;d<=t;d++){let m=d/t;a[d]=this.getTangentAt(m,new O)}s[0]=new O,r[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(a[0].x),p=Math.abs(a[0].y),u=Math.abs(a[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(a[d-1],a[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qt(a[d-1].dot(a[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}r[d].crossVectors(a[d],s[d])}if(n===!0){let d=Math.acos(Qt(s[0].dot(s[t]),-1,1));d/=t,a[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(a[m],d*m)),r[m].crossVectors(a[m],s[m])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cl=class extends di{constructor(t=0,n=0,i=1,a=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new ct){let i=n,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let o=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rd=class extends cl{constructor(t,n,i,a,s,r){super(t,n,i,i,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function P_(){let e=0,t=0,n=0,i=0;function a(s,r,o,l){e=s,t=o,n=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,p){let u=(r-s)/c-(o-s)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,d*=h,a(r,o,u,d)},calc:function(s){let r=s*s,o=r*s;return e+t*s+n*r+i*o}}}var f1=new O,d1=new O,$g=new P_,t_=new P_,e_=new P_,ul=class extends di{constructor(t=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=a}getPoint(t,n=new O){let i=n,a=this.points,s=a.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=a[(o-1)%s]:(d1.subVectors(a[0],a[1]).add(a[0]),c=d1);let p=a[o%s],u=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(f1.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=f1),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(p),d),M=Math.pow(p.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),$g.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,m,M,g),t_.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,m,M,g),e_.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,m,M,g)}else this.curveType==="catmullrom"&&($g.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),t_.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),e_.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set($g.calc(l),t_.calc(l),e_.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new O().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function p1(e,t,n,i,a){let s=(i-t)*.5,r=(a-n)*.5,o=e*e,l=e*o;return(2*n-2*i+s+r)*l+(-3*n+3*i-2*s-r)*o+s*e+n}function ER(e,t){let n=1-e;return n*n*t}function AR(e,t){return 2*(1-e)*e*t}function wR(e,t){return e*e*t}function Bc(e,t,n,i){return ER(e,t)+AR(e,n)+wR(e,i)}function CR(e,t){let n=1-e;return n*n*n*t}function RR(e,t){let n=1-e;return 3*n*n*e*t}function NR(e,t){return 3*(1-e)*e*e*t}function DR(e,t){return e*e*e*t}function zc(e,t,n,i,a){return CR(e,t)+RR(e,n)+NR(e,i)+DR(e,a)}var Qc=class extends di{constructor(t=new ct,n=new ct,i=new ct,a=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new ct){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(zc(t,a.x,s.x,r.x,o.x),zc(t,a.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},od=class extends di{constructor(t=new O,n=new O,i=new O,a=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=a}getPoint(t,n=new O){let i=n,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(zc(t,a.x,s.x,r.x,o.x),zc(t,a.y,s.y,r.y,o.y),zc(t,a.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends di{constructor(t=new ct,n=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ct){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ct){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ld=class extends di{constructor(t=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new O){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tu=class extends di{constructor(t=new ct,n=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ct){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(Bc(t,a.x,s.x,r.x),Bc(t,a.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eu=class extends di{constructor(t=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new O){let i=n,a=this.v0,s=this.v1,r=this.v2;return i.set(Bc(t,a.x,s.x,r.x),Bc(t,a.y,s.y,r.y),Bc(t,a.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nu=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ct){let i=n,a=this.points,s=(a.length-1)*t,r=Math.floor(s),o=s-r,l=a[r===0?r:r-1],c=a[r],h=a[r>a.length-2?a.length-1:r+1],p=a[r>a.length-3?a.length-1:r+2];return i.set(p1(o,l.x,c.x,h.x,p.x),p1(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let a=this.points[n];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let a=t.points[n];this.points.push(new ct().fromArray(a))}return this}},cd=Object.freeze({__proto__:null,ArcCurve:rd,CatmullRomCurve3:ul,CubicBezierCurve:Qc,CubicBezierCurve3:od,EllipseCurve:cl,LineCurve:$c,LineCurve3:ld,QuadraticBezierCurve:tu,QuadraticBezierCurve3:eu,SplineCurve:nu}),ud=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cd[i](n,t))}return this}getPoint(t,n){let i=t*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=i){let r=a[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,n)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],n=0;for(let i=0,a=this.curves.length;i<a;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){let n=[],i;for(let a=0,s=this.curves;a<s.length;a++){let r=s[a],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let a=this.curves[n];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){let a=t.curves[n];this.curves.push(new cd[a.type]().fromJSON(a))}return this}},Rr=class extends ud{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){let i=new $c(this.currentPoint.clone(),new ct(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,a){let s=new tu(this.currentPoint.clone(),new ct(t,n),new ct(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(t,n,i,a,s,r){let o=new Qc(this.currentPoint.clone(),new ct(t,n),new ct(i,a),new ct(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let n=[this.currentPoint.clone()].concat(t),i=new nu(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,a,s,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,n+l,i,a,s,r),this}absarc(t,n,i,a,s,r){return this.absellipse(t,n,i,i,a,s,r),this}ellipse(t,n,i,a,s,r,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,n+h,i,a,s,r,o,l),this}absellipse(t,n,i,a,s,r,o,l){let c=new cl(t,n,i,a,s,r,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nr=class extends Rr{constructor(t){super(t),this.uuid=_l(),this.type="Shape",this.holes=[]}getPointsHoles(t){let n=[];for(let i=0,a=this.holes.length;i<a;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let a=this.holes[n];t.holes.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){let a=t.holes[n];this.holes.push(new Rr().fromJSON(a))}return this}};function UR(e,t,n=2){let i=t&&t.length,a=i?t[0]*n:e.length,s=cT(e,0,a,n,!0),r=[];if(!s||s.next===s.prev)return r;let o,l,c;if(i&&(s=BR(e,t,s,n)),e.length>80*n){o=e[0],l=e[1];let h=o,p=l;for(let u=n;u<a;u+=n){let d=e[u],m=e[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>p&&(p=m)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return iu(s,r,n,o,l,c,0),r}function cT(e,t,n,i,a){let s;if(a===ZR(e,t,n,i)>0)for(let r=t;r<n;r+=i)s=m1(r/i|0,e[r],e[r+1],s);else for(let r=n-i;r>=t;r-=i)s=m1(r/i|0,e[r],e[r+1],s);return s&&hl(s,s.next)&&(su(s),s=s.next),s}function Dr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(hl(n,n.next)||Xe(n.prev,n,n.next)===0)){if(su(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function iu(e,t,n,i,a,s,r){if(!e)return;!r&&s&&GR(e,i,a,s);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(s?OR(e,i,a,s):LR(e)){t.push(l.i,e.i,c.i),su(e),e=c.next,o=c.next;continue}if(e=c,e===o){r?r===1?(e=IR(Dr(e),t),iu(e,t,n,i,a,s,2)):r===2&&PR(e,t,n,i,a,s):iu(Dr(e),t,n,i,a,s,1);break}}}function LR(e){let t=e.prev,n=e,i=e.next;if(Xe(t,n,i)>=0)return!1;let a=t.x,s=n.x,r=i.x,o=t.y,l=n.y,c=i.y,h=Math.min(a,s,r),p=Math.min(o,l,c),u=Math.max(a,s,r),d=Math.max(o,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=p&&m.y<=d&&Pc(a,o,s,l,r,c,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function OR(e,t,n,i){let a=e.prev,s=e,r=e.next;if(Xe(a,s,r)>=0)return!1;let o=a.x,l=s.x,c=r.x,h=a.y,p=s.y,u=r.y,d=Math.min(o,l,c),m=Math.min(h,p,u),M=Math.max(o,l,c),g=Math.max(h,p,u),f=l_(d,m,t,n,i),_=l_(M,g,t,n,i),S=e.prevZ,v=e.nextZ;for(;S&&S.z>=f&&v&&v.z<=_;){if(S.x>=d&&S.x<=M&&S.y>=m&&S.y<=g&&S!==a&&S!==r&&Pc(o,h,l,p,c,u,S.x,S.y)&&Xe(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=M&&v.y>=m&&v.y<=g&&v!==a&&v!==r&&Pc(o,h,l,p,c,u,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=M&&S.y>=m&&S.y<=g&&S!==a&&S!==r&&Pc(o,h,l,p,c,u,S.x,S.y)&&Xe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=M&&v.y>=m&&v.y<=g&&v!==a&&v!==r&&Pc(o,h,l,p,c,u,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function IR(e,t){let n=e;do{let i=n.prev,a=n.next.next;!hl(i,a)&&hT(i,n,n.next,a)&&au(i,a)&&au(a,i)&&(t.push(i.i,n.i,a.i),su(n),su(n.next),n=e=a),n=n.next}while(n!==e);return Dr(n)}function PR(e,t,n,i,a,s){let r=e;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&WR(r,o)){let l=fT(r,o);r=Dr(r,r.next),l=Dr(l,l.next),iu(r,t,n,i,a,s,0),iu(l,t,n,i,a,s,0);return}o=o.next}r=r.next}while(r!==e)}function BR(e,t,n,i){let a=[];for(let s=0,r=t.length;s<r;s++){let o=t[s]*i,l=s<r-1?t[s+1]*i:e.length,c=cT(e,o,l,i,!1);c===c.next&&(c.steiner=!0),a.push(XR(c))}a.sort(zR);for(let s=0;s<a.length;s++)n=FR(a[s],n);return n}function zR(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){let i=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);n=i-a}return n}function FR(e,t){let n=VR(e,t);if(!n)return t;let i=fT(n,e);return Dr(i,i.next),Dr(n,n.next)}function VR(e,t){let n=t,i=e.x,a=e.y,s=-1/0,r;if(hl(e,n))return n;do{if(hl(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let p=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>s&&(s=p,r=n.x<n.next.x?n:n.next,p===i))return r}n=n.next}while(n!==t);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0;n=r;do{if(i>=n.x&&n.x>=l&&i!==n.x&&uT(a<c?i:s,a,l,c,a<c?s:i,a,n.x,n.y)){let p=Math.abs(a-n.y)/(i-n.x);au(n,e)&&(p<h||p===h&&(n.x>r.x||n.x===r.x&&HR(r,n)))&&(r=n,h=p)}n=n.next}while(n!==o);return r}function HR(e,t){return Xe(e.prev,e,t.prev)<0&&Xe(t.next,e,e.next)<0}function GR(e,t,n,i){let a=e;do a.z===0&&(a.z=l_(a.x,a.y,t,n,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,kR(a)}function kR(e){let t,n=1;do{let i=e,a;e=null;let s=null;for(t=0;i;){t++;let r=i,o=0;for(let c=0;c<n&&(o++,r=r.nextZ,!!r);c++);let l=n;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,n*=2}while(t>1);return e}function l_(e,t,n,i,a){return e=(e-n)*a|0,t=(t-i)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function XR(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function uT(e,t,n,i,a,s,r,o){return(a-r)*(t-o)>=(e-r)*(s-o)&&(e-r)*(i-o)>=(n-r)*(t-o)&&(n-r)*(s-o)>=(a-r)*(i-o)}function Pc(e,t,n,i,a,s,r,o){return!(e===r&&t===o)&&uT(e,t,n,i,a,s,r,o)}function WR(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!qR(e,t)&&(au(e,t)&&au(t,e)&&YR(e,t)&&(Xe(e.prev,e,t.prev)||Xe(e,t.prev,t))||hl(e,t)&&Xe(e.prev,e,e.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function hl(e,t){return e.x===t.x&&e.y===t.y}function hT(e,t,n,i){let a=Vf(Xe(e,t,n)),s=Vf(Xe(e,t,i)),r=Vf(Xe(n,i,e)),o=Vf(Xe(n,i,t));return!!(a!==s&&r!==o||a===0&&Ff(e,n,t)||s===0&&Ff(e,i,t)||r===0&&Ff(n,e,i)||o===0&&Ff(n,t,i))}function Ff(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Vf(e){return e>0?1:e<0?-1:0}function qR(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&hT(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function au(e,t){return Xe(e.prev,e,e.next)<0?Xe(e,t,e.next)>=0&&Xe(e,e.prev,t)>=0:Xe(e,t,e.prev)<0||Xe(e,e.next,t)<0}function YR(e,t){let n=e,i=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&a<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function fT(e,t){let n=c_(e.i,e.x,e.y),i=c_(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function m1(e,t,n,i){let a=c_(e,t,n);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function su(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function c_(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ZR(e,t,n,i){let a=0;for(let s=t,r=n-i;s<n;s+=i)a+=(e[r]-e[s])*(e[s+1]+e[r+1]),r=s;return a}var u_=class{static triangulate(t,n,i=2){return UR(t,n,i)}},ma=class e{static area(t){let n=t.length,i=0;for(let a=n-1,s=0;s<n;a=s++)i+=t[a].x*t[s].y-t[s].x*t[a].y;return i*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(t,n){let i=[],a=[],s=[];g1(t),_1(i,t);let r=t.length;n.forEach(g1);for(let l=0;l<n.length;l++)a.push(r),r+=n[l].length,_1(i,n[l]);let o=u_.triangulate(i,a);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function g1(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function _1(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ru=class e extends jn{constructor(t=new Nr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];let i=this,a=[],s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];r(c)}this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function r(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,p=n.depth!==void 0?n.depth:1,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:d-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:JR,S,v=!1,T,E,A,x;if(f){S=f.getSpacedPoints(h),v=!0,u=!1;let et=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(h,et),E=new O,A=new O,x=new O}u||(g=0,d=0,m=0,M=0);let w=o.extractPoints(c),R=w.shape,L=w.holes;if(!ma.isClockWise(R)){R=R.reverse();for(let et=0,st=L.length;et<st;et++){let rt=L[et];ma.isClockWise(rt)&&(L[et]=rt.reverse())}}function k(et){let rt=10000000000000001e-36,ot=et[0];for(let ht=1;ht<=et.length;ht++){let It=ht%et.length,Ot=et[It],Ht=Ot.x-ot.x,Wt=Ot.y-ot.y,N=Ht*Ht+Wt*Wt,de=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ot.x),Math.abs(ot.y)),te=rt*de*de;if(N<=te){et.splice(It,1),ht--;continue}ot=Ot}}k(R),L.forEach(k);let I=L.length,F=R;for(let et=0;et<I;et++){let st=L[et];R=R.concat(st)}function J(et,st,rt){return st||Ft("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(st,rt)}let X=R.length;function at(et,st,rt){let ot,ht,It,Ot=et.x-st.x,Ht=et.y-st.y,Wt=rt.x-et.x,N=rt.y-et.y,de=Ot*Ot+Ht*Ht,te=Ot*N-Ht*Wt;if(Math.abs(te)>Number.EPSILON){let C=Math.sqrt(de),y=Math.sqrt(Wt*Wt+N*N),P=st.x-Ht/C,V=st.y+Ot/C,q=rt.x-N/y,lt=rt.y+Wt/y,ut=((q-P)*N-(lt-V)*Wt)/(Ot*N-Ht*Wt);ot=P+Ot*ut-et.x,ht=V+Ht*ut-et.y;let Y=ot*ot+ht*ht;if(Y<=2)return new ct(ot,ht);It=Math.sqrt(Y/2)}else{let C=!1;Ot>Number.EPSILON?Wt>Number.EPSILON&&(C=!0):Ot<-Number.EPSILON?Wt<-Number.EPSILON&&(C=!0):Math.sign(Ht)===Math.sign(N)&&(C=!0),C?(ot=-Ht,ht=Ot,It=Math.sqrt(de)):(ot=Ot,ht=Ht,It=Math.sqrt(de/2))}return new ct(ot/It,ht/It)}let W=[];for(let et=0,st=F.length,rt=st-1,ot=et+1;et<st;et++,rt++,ot++)rt===st&&(rt=0),ot===st&&(ot=0),W[et]=at(F[et],F[rt],F[ot]);let $=[],nt,Nt=W.concat();for(let et=0,st=I;et<st;et++){let rt=L[et];nt=[];for(let ot=0,ht=rt.length,It=ht-1,Ot=ot+1;ot<ht;ot++,It++,Ot++)It===ht&&(It=0),Ot===ht&&(Ot=0),nt[ot]=at(rt[ot],rt[It],rt[Ot]);$.push(nt),Nt=Nt.concat(nt)}let Et;if(g===0)Et=ma.triangulateShape(F,L);else{let et=[],st=[];for(let rt=0;rt<g;rt++){let ot=rt/g,ht=d*Math.cos(ot*Math.PI/2),It=m*Math.sin(ot*Math.PI/2)+M;for(let Ot=0,Ht=F.length;Ot<Ht;Ot++){let Wt=J(F[Ot],W[Ot],It);vt(Wt.x,Wt.y,-ht),ot===0&&et.push(Wt)}for(let Ot=0,Ht=I;Ot<Ht;Ot++){let Wt=L[Ot];nt=$[Ot];let N=[];for(let de=0,te=Wt.length;de<te;de++){let C=J(Wt[de],nt[de],It);vt(C.x,C.y,-ht),ot===0&&N.push(C)}ot===0&&st.push(N)}}Et=ma.triangulateShape(et,st)}let ce=Et.length,$t=m+M;for(let et=0;et<X;et++){let st=u?J(R[et],Nt[et],$t):R[et];v?(A.copy(T.normals[0]).multiplyScalar(st.x),E.copy(T.binormals[0]).multiplyScalar(st.y),x.copy(S[0]).add(A).add(E),vt(x.x,x.y,x.z)):vt(st.x,st.y,0)}for(let et=1;et<=h;et++)for(let st=0;st<X;st++){let rt=u?J(R[st],Nt[st],$t):R[st];v?(A.copy(T.normals[et]).multiplyScalar(rt.x),E.copy(T.binormals[et]).multiplyScalar(rt.y),x.copy(S[et]).add(A).add(E),vt(x.x,x.y,x.z)):vt(rt.x,rt.y,p/h*et)}for(let et=g-1;et>=0;et--){let st=et/g,rt=d*Math.cos(st*Math.PI/2),ot=m*Math.sin(st*Math.PI/2)+M;for(let ht=0,It=F.length;ht<It;ht++){let Ot=J(F[ht],W[ht],ot);vt(Ot.x,Ot.y,p+rt)}for(let ht=0,It=L.length;ht<It;ht++){let Ot=L[ht];nt=$[ht];for(let Ht=0,Wt=Ot.length;Ht<Wt;Ht++){let N=J(Ot[Ht],nt[Ht],ot);v?vt(N.x,N.y+S[h-1].y,S[h-1].x+rt):vt(N.x,N.y,p+rt)}}}re(),Z();function re(){let et=a.length/3;if(u){let st=0,rt=X*st;for(let ot=0;ot<ce;ot++){let ht=Et[ot];zt(ht[2]+rt,ht[1]+rt,ht[0]+rt)}st=h+g*2,rt=X*st;for(let ot=0;ot<ce;ot++){let ht=Et[ot];zt(ht[0]+rt,ht[1]+rt,ht[2]+rt)}}else{for(let st=0;st<ce;st++){let rt=Et[st];zt(rt[2],rt[1],rt[0])}for(let st=0;st<ce;st++){let rt=Et[st];zt(rt[0]+X*h,rt[1]+X*h,rt[2]+X*h)}}i.addGroup(et,a.length/3-et,0)}function Z(){let et=a.length/3,st=0;tt(F,st),st+=F.length;for(let rt=0,ot=L.length;rt<ot;rt++){let ht=L[rt];tt(ht,st),st+=ht.length}i.addGroup(et,a.length/3-et,1)}function tt(et,st){let rt=et.length;for(;--rt>=0;){let ot=rt,ht=rt-1;ht<0&&(ht=et.length-1);for(let It=0,Ot=h+g*2;It<Ot;It++){let Ht=X*It,Wt=X*(It+1),N=st+ot+Ht,de=st+ht+Ht,te=st+ht+Wt,C=st+ot+Wt;Mt(N,de,te,C)}}}function vt(et,st,rt){l.push(et),l.push(st),l.push(rt)}function zt(et,st,rt){Vt(et),Vt(st),Vt(rt);let ot=a.length/3,ht=_.generateTopUV(i,a,ot-3,ot-2,ot-1);ye(ht[0]),ye(ht[1]),ye(ht[2])}function Mt(et,st,rt,ot){Vt(et),Vt(st),Vt(ot),Vt(st),Vt(rt),Vt(ot);let ht=a.length/3,It=_.generateSideWallUV(i,a,ht-6,ht-3,ht-2,ht-1);ye(It[0]),ye(It[1]),ye(It[3]),ye(It[1]),ye(It[2]),ye(It[3])}function Vt(et){a.push(l[et*3+0]),a.push(l[et*3+1]),a.push(l[et*3+2])}function ye(et){s.push(et.x),s.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return KR(n,i,t)}static fromJSON(t,n){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=n[t.shapes[s]];i.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new cd[a.type]().fromJSON(a)),new e(i,t.options)}},JR={generateTopUV:function(e,t,n,i,a){let s=t[n*3],r=t[n*3+1],o=t[i*3],l=t[i*3+1],c=t[a*3],h=t[a*3+1];return[new ct(s,r),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(e,t,n,i,a,s){let r=t[n*3],o=t[n*3+1],l=t[n*3+2],c=t[i*3],h=t[i*3+1],p=t[i*3+2],u=t[a*3],d=t[a*3+1],m=t[a*3+2],M=t[s*3],g=t[s*3+1],f=t[s*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ct(r,1-l),new ct(c,1-p),new ct(u,1-m),new ct(M,1-f)]:[new ct(o,1-l),new ct(h,1-p),new ct(d,1-m),new ct(g,1-f)]}};function KR(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,a=e.length;i<a;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ur=class e extends jn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};let s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],m=[],M=[],g=[];for(let f=0;f<h;f++){let _=f*u-r;for(let S=0;S<c;S++){let v=S*p-s;m.push(v,-_,0),M.push(0,0,1),g.push(S/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let S=_+c*f,v=_+c*(f+1),T=_+1+c*(f+1),E=_+1+c*f;d.push(S,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var ou=class e extends jn{constructor(t=new Nr([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};let i=[],a=[],s=[],r=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(r,2));function c(h){let p=a.length/3,u=h.extractPoints(n),d=u.shape,m=u.holes;ma.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,f=m.length;g<f;g++){let _=m[g];ma.isClockWise(_)===!0&&(m[g]=_.reverse())}let M=ma.triangulateShape(d,m);for(let g=0,f=m.length;g<f;g++){let _=m[g];d=d.concat(_)}for(let g=0,f=d.length;g<f;g++){let _=d[g];a.push(_.x,_.y,0),s.push(0,0,1),r.push(_.x,_.y)}for(let g=0,f=M.length;g<f;g++){let _=M[g],S=_[0]+p,v=_[1]+p,T=_[2]+p;i.push(S,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),n=this.parameters.shapes;return jR(n,t)}static fromJSON(t,n){let i=[];for(let a=0,s=t.shapes.length;a<s;a++){let r=n[t.shapes[a]];i.push(r)}return new e(i,t.curveSegments)}};function jR(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var lu=class e extends jn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,h=[],p=new O,u=new O,d=[],m=[],M=[],g=[];for(let f=0;f<=i;f++){let _=[],S=f/i,v=r+S*o,T=t*Math.cos(v),E=Math.sqrt(t*t-T*T),A=0;f===0&&r===0?A=.5/n:f===i&&l===Math.PI&&(A=-.5/n);for(let x=0;x<=n;x++){let w=x/n,R=a+w*s;p.x=-E*Math.cos(R),p.y=T,p.z=E*Math.sin(R),m.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),g.push(w+A,1-S),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){let S=h[f][_+1],v=h[f][_],T=h[f+1][_],E=h[f+1][_+1];(f!==0||r>0)&&d.push(S,v,E),(f!==i-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(M,3)),this.setAttribute("uv",new We(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cu=class e extends jn{constructor(t=new eu(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:a,closed:s};let r=t.computeFrenetFrames(n,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new O,l=new O,c=new ct,h=new O,p=[],u=[],d=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2));function M(){for(let S=0;S<n;S++)g(S);g(s===!1?n:0),_(),f()}function g(S){h=t.getPointAt(S/n,h);let v=r.normals[S],T=r.binormals[S];for(let E=0;E<=a;E++){let A=E/a*Math.PI*2,x=Math.sin(A),w=-Math.cos(A);l.x=w*v.x+x*T.x,l.y=w*v.y+x*T.y,l.z=w*v.z+x*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=n;S++)for(let v=1;v<=a;v++){let T=(a+1)*(S-1)+(v-1),E=(a+1)*S+(v-1),A=(a+1)*S+v,x=(a+1)*(S-1)+v;m.push(T,E,x),m.push(E,A,x)}}function _(){for(let S=0;S<=n;S++)for(let v=0;v<=a;v++)c.x=S/n,c.y=v/a,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new cd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Br(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let a=e[n][i];if(v1(a))a.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(v1(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Ln(e){let t={};for(let n=0;n<e.length;n++){let i=Br(e[n]);for(let a in i)t[a]=i[a]}return t}function v1(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function QR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function B_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var dT={clone:Br,merge:Ln},$R=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Za{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$R,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=QR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let a=t.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(a.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[i].value=new O().fromArray(a.value);break;case"v4":this.uniforms[i].value=new He().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Re().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hd=class extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lr=class extends Za{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Or=class extends Lr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var uu=class extends Za{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=wd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fd=class extends Za{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dd=class extends Za{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function n_(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Vs=class{constructor(t,n,i,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,a=n[i],s=n[i-1];t:{e:{let r;n:{i:if(!(t<a)){for(let o=i+2;;){if(a===void 0){if(t<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=a,a=n[++i],t<a)break e}r=n.length;break n}if(!(t>=s)){let o=n[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(a=s,s=n[--i-1],t>=s)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(a=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,a)}return this.interpolate_(i,s,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,a=this.valueSize,s=t*a;for(let r=0;r!==a;++r)n[r]=i[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pd=class extends Vs{constructor(t,n,i,a){super(t,n,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s_,endingEnd:s_}}intervalChanged_(t,n,i){let a=this.parameterPositions,s=t-2,r=t+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case r_:s=t,o=2*n-i;break;case o_:s=a.length-2,o=n+a[s]-a[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case r_:r=t,l=2*i-n;break;case o_:r=1,l=i+a[1]-a[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-n)/(a-n),M=m*m,g=M*m,f=-u*g+2*u*M-u*m,_=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*m+1,S=(-1-d)*g+(1.5+d)*M+.5*m,v=d*g-d*M;for(let T=0;T!==o;++T)s[T]=f*r[h+T]+_*r[c+T]+S*r[l+T]+v*r[p+T];return s}},md=class extends Vs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(a-n),p=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*p+r[l+u]*h;return s}},gd=class extends Vs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t){return this.copySampleValue_(t-1)}},_d=class extends Vs{interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(i-n)/(a-n),M=1-m;for(let g=0;g!==o;++g)s[g]=r[c+g]*M+r[l+g]*m;return s}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let M=r[c+m],g=r[l+m],f=d*u+m*2,_=p[f],S=p[f+1],v=t*u+m*2,T=h[v],E=h[v+1],A=n2(i,n,_,T,a);s[m]=pT(A,M,S,E,g)}return s}};function pT(e,t,n,i,a){let s=1-e;return s*s*s*t+3*s*s*e*n+3*s*e*e*i+e*e*e*a}function e2(e,t,n,i,a){let s=1-e;return 3*s*s*(n-t)+6*s*e*(i-n)+3*e*e*(a-i)}function n2(e,t,n,i,a){let s=(e-t)/(a-t);for(let r=0;r<8;r++){let o=pT(s,t,n,i,a)-e;if(Math.abs(o)<1e-10)break;let l=e2(s,t,n,i,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var mi=class{constructor(t,n,i,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qo(n,this.TimeBufferType),this.values=Qo(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Qo(t.times,Array),values:Qo(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(i.interpolation=a),n_(t.settings)&&(i.settings={inTangents:Qo(t.settings.inTangents,Array),outTangents:Qo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new md(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new _d(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Fc:n=this.InterpolantFactoryMethodDiscrete;break;case $f:n=this.InterpolantFactoryMethodLinear;break;case kf:n=this.InterpolantFactoryMethodSmooth;break;case a_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Bt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fc;case this.InterpolantFactoryMethodLinear:return $f;case this.InterpolantFactoryMethodSmooth:return kf;case this.InterpolantFactoryMethodBezier:return a_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,a=n.length;i!==a;++i)n[i]*=t;n_(this.settings)&&(y1(this.settings.inTangents,t),y1(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,a=i.length,s=0,r=a-1;for(;s!==a&&i[s]<t;)++s;for(;r!==-1&&i[r]>n;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,a=this.values,s=i.length;s===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ft("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(a!==void 0&&aR(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===kf,s=t.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(a)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let m=0;m!==i;++m){let M=n[p+m];if(M!==n[u+m]||M!==n[d+m]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,a=new i(this.name,t,n);return a.createInterpolant=this.createInterpolant,n_(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function y1(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=$f;var Hs=class extends mi{constructor(t,n,i){super(t,n,i)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Fc;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var vd=class extends mi{constructor(t,n,i,a){super(t,n,i,a)}};vd.prototype.ValueTypeName="color";var yd=class extends mi{constructor(t,n,i,a){super(t,n,i,a)}};yd.prototype.ValueTypeName="number";var xd=class extends Vs{constructor(t,n,i,a){super(t,n,i,a)}interpolate_(t,n,i,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(a-n),c=t*o;for(let h=c+o;c!==h;c+=4)va.slerpFlat(s,0,r,c-o,r,c,l);return s}},hu=class extends mi{constructor(t,n,i,a){super(t,n,i,a)}InterpolantFactoryMethodLinear(t){return new xd(this.times,this.values,this.getValueSize(),t)}};hu.prototype.ValueTypeName="quaternion";hu.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends mi{constructor(t,n,i){super(t,n,i)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Fc;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sd=class extends mi{constructor(t,n,i,a){super(t,n,i,a)}};Sd.prototype.ValueTypeName="vector";var Md=class{constructor(t,n,i){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],m=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mT=new Md,bd=class{constructor(t){this.manager=t!==void 0?t:mT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(a,s){i.load(t,a,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bd.DEFAULT_MATERIAL_NAME="__DEFAULT";var fu=class extends En{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var i_=new Re,x1=new O,S1=new O,du=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;x1.setFromMatrixPosition(t.matrixWorld),n.position.copy(x1),S1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(S1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,a){i_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(i_,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;t.coordinateSystem===al||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(i_)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hf=new O,Gf=new va,da=new O,pu=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hf,Gf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,da.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Hf,Gf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hf,Gf,da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new O,M1=new ct,b1=new ct,bn=class extends pu{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=td*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ug*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Ug*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ps.x,Ps.y).multiplyScalar(-t/Ps.z)}getViewSize(t,n){return this.getViewBounds(t,M1,b1),n.subVectors(b1,M1)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Ug*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var h_=class extends du{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},mu=class extends fu{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new h_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},fl=class extends pu{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},f_=class extends du{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gu=class extends fu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new f_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var $o=-90,tl=1,Td=class extends En{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new bn($o,tl,t,n);a.layers=this.layers,this.add(a);let s=new bn($o,tl,t,n);s.layers=this.layers,this.add(s);let r=new bn($o,tl,t,n);r.layers=this.layers,this.add(r);let o=new bn($o,tl,t,n);o.layers=this.layers,this.add(o);let l=new bn($o,tl,t,n);l.layers=this.layers,this.add(l);let c=new bn($o,tl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(let c of n)this.remove(c);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ed=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var z_="\\[\\]\\.:\\/",i2=new RegExp("["+z_+"]","g"),F_="[^"+z_+"]",a2="[^"+z_.replace("\\.","")+"]",s2=/((?:WC+[\/:])*)/.source.replace("WC",F_),r2=/(WCOD+)?/.source.replace("WCOD",a2),o2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",F_),l2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",F_),c2=new RegExp("^"+s2+r2+o2+l2+"$"),u2=["material","materials","bones","map"],d_=class{constructor(t,n,i){let a=i||ze.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,a)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=i.length;a!==s;++a)i[a].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},ze=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i2,"")}static parseTrackName(t){let n=c2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=i.nodeName.substring(a+1);u2.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},a=i(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)t[n++]=i[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let a=0,s=i.length;a!==s;++a)i[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,a=n.propertyName,s=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[a];if(r===void 0){let c=n.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=d_;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EL=new Float32Array(1);var W_=class W_{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){let s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};W_.prototype.isMatrix2=!0;var p_=W_;function V_(e,t,n,i){let a=h2(i);switch(n){case U_:return e*t;case Od:return e*t/a.components*a.byteLength;case Id:return e*t/a.components*a.byteLength;case Ys:return e*t*2/a.components*a.byteLength;case Pd:return e*t*2/a.components*a.byteLength;case L_:return e*t*3/a.components*a.byteLength;case Ui:return e*t*4/a.components*a.byteLength;case Bd:return e*t*4/a.components*a.byteLength;case Su:case Mu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bu:case Tu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Hd:return Math.max(e,16)*Math.max(t,8)/4;case zd:case Vd:return Math.max(e,8)*Math.max(t,8)/2;case Gd:case kd:case Wd:case qd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xd:case Eu:case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case np:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case op:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case lp:case cp:case up:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hp:case fp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Au:case dp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function h2(e){switch(e){case Qn:case C_:return{byteLength:1,components:1};case ml:case R_:case Yi:return{byteLength:2,components:1};case Ud:case Ld:return{byteLength:2,components:4};case qi:case Dd:case Di:return{byteLength:4,components:1};case N_:case D_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function BT(){let e=null,t=!1,n=null,i=null;function a(s,r){i=e.requestAnimationFrame(a),n(s,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function d2(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<p.length;d++){let m=p[u],M=p[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,m=p.length;d<m;d++){let M=p[d];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var p2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w2=`#ifdef USE_IRIDESCENCE
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
#endif`,C2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,B2=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,F2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,V2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X2="gl_FragColor = linearToOutputTexel( gl_FragColor );",W2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Y2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,j2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e3=`#ifdef USE_GRADIENTMAP
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
}`,n3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,r3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,$3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iN=`#ifdef USE_SKINNING
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
#endif`,aN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cN=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mN=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,gN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_N=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,SN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,bN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,RN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,DN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LN=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,BN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,FN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,kN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,WN=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,YN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:p2,alphahash_pars_fragment:m2,alphamap_fragment:g2,alphamap_pars_fragment:_2,alphatest_fragment:v2,alphatest_pars_fragment:y2,aomap_fragment:x2,aomap_pars_fragment:S2,batching_pars_vertex:M2,batching_vertex:b2,begin_vertex:T2,beginnormal_vertex:E2,bsdfs:A2,iridescence_fragment:w2,bumpmap_pars_fragment:C2,clipping_planes_fragment:R2,clipping_planes_pars_fragment:N2,clipping_planes_pars_vertex:D2,clipping_planes_vertex:U2,color_fragment:L2,color_pars_fragment:O2,color_pars_vertex:I2,color_vertex:P2,common:B2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:F2,displacementmap_pars_vertex:V2,displacementmap_vertex:H2,emissivemap_fragment:G2,emissivemap_pars_fragment:k2,colorspace_fragment:X2,colorspace_pars_fragment:W2,envmap_fragment:q2,envmap_common_pars_fragment:Y2,envmap_pars_fragment:Z2,envmap_pars_vertex:J2,envmap_physical_pars_fragment:r3,envmap_vertex:K2,fog_vertex:j2,fog_pars_vertex:Q2,fog_fragment:$2,fog_pars_fragment:t3,gradientmap_pars_fragment:e3,lightmap_pars_fragment:n3,lights_lambert_fragment:i3,lights_lambert_pars_fragment:a3,lights_pars_begin:s3,lights_toon_fragment:o3,lights_toon_pars_fragment:l3,lights_phong_fragment:c3,lights_phong_pars_fragment:u3,lights_physical_fragment:h3,lights_physical_pars_fragment:f3,lights_fragment_begin:d3,lights_fragment_maps:p3,lights_fragment_end:m3,lightprobes_pars_fragment:g3,logdepthbuf_fragment:_3,logdepthbuf_pars_fragment:v3,logdepthbuf_pars_vertex:y3,logdepthbuf_vertex:x3,map_fragment:S3,map_pars_fragment:M3,map_particle_fragment:b3,map_particle_pars_fragment:T3,metalnessmap_fragment:E3,metalnessmap_pars_fragment:A3,morphinstance_vertex:w3,morphcolor_vertex:C3,morphnormal_vertex:R3,morphtarget_pars_vertex:N3,morphtarget_vertex:D3,normal_fragment_begin:U3,normal_fragment_maps:L3,normal_pars_fragment:O3,normal_pars_vertex:I3,normal_vertex:P3,normalmap_pars_fragment:B3,clearcoat_normal_fragment_begin:z3,clearcoat_normal_fragment_maps:F3,clearcoat_pars_fragment:V3,iridescence_pars_fragment:H3,opaque_fragment:G3,packing:k3,premultiplied_alpha_fragment:X3,project_vertex:W3,dithering_fragment:q3,dithering_pars_fragment:Y3,roughnessmap_fragment:Z3,roughnessmap_pars_fragment:J3,shadowmap_pars_fragment:K3,shadowmap_pars_vertex:j3,shadowmap_vertex:Q3,shadowmask_pars_fragment:$3,skinbase_vertex:tN,skinning_pars_vertex:eN,skinning_vertex:nN,skinnormal_vertex:iN,specularmap_fragment:aN,specularmap_pars_fragment:sN,tonemapping_fragment:rN,tonemapping_pars_fragment:oN,transmission_fragment:lN,transmission_pars_fragment:cN,uv_pars_fragment:uN,uv_pars_vertex:hN,uv_vertex:fN,worldpos_vertex:dN,background_vert:pN,background_frag:mN,backgroundCube_vert:gN,backgroundCube_frag:_N,cube_vert:vN,cube_frag:yN,depth_vert:xN,depth_frag:SN,distance_vert:MN,distance_frag:bN,equirect_vert:TN,equirect_frag:EN,linedashed_vert:AN,linedashed_frag:wN,meshbasic_vert:CN,meshbasic_frag:RN,meshlambert_vert:NN,meshlambert_frag:DN,meshmatcap_vert:UN,meshmatcap_frag:LN,meshnormal_vert:ON,meshnormal_frag:IN,meshphong_vert:PN,meshphong_frag:BN,meshphysical_vert:zN,meshphysical_frag:FN,meshtoon_vert:VN,meshtoon_frag:HN,points_vert:GN,points_frag:kN,shadow_vert:XN,shadow_frag:WN,sprite_vert:qN,sprite_frag:YN},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ta={basic:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ln([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ln([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ln([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ln([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ln([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ln([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ln([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ln([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ln([_t.common,_t.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ln([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ta.physical={uniforms:Ln([Ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var gp={r:0,b:0,g:0},ZN=new Re,zT=new Xt;zT.set(-1,0,0,0,1,0,0,0,1);function JN(e,t,n,i,a,s){let r=new Zt(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function m(_){let S=!1,v=d(_);v===null?g(r,o):v&&v.isColor&&(g(v,1),S=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(_,S){let v=d(S);v&&(v.isCubeTexture||v.mapping===yu)?(c===void 0&&(c=new ve(new Sa(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Br(Ta.backgroundCube.uniforms),vertexShader:Ta.backgroundCube.vertexShader,fragmentShader:Ta.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ZN.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zT),c.material.toneMapped=se.getTransfer(v.colorSpace)!==_e,(h!==v||p!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ve(new Ur(2,2),new pi({name:"BackgroundMaterial",uniforms:Br(Ta.background.uniforms),vertexShader:Ta.background.vertexShader,fragmentShader:Ta.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(gp,B_(e)),n.buffers.color.setClear(gp.r,gp.g,gp.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(r,o)},render:m,addToRenderList:M,dispose:f}}function KN(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null),s=a,r=!1;function o(L,H,k,I,F){let J=!1,X=p(L,I,k,H);s!==X&&(s=X,c(s.object)),J=d(L,I,k,F),J&&m(L,I,k,F),F!==null&&t.update(F,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(L,H,k,I),F!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function p(L,H,k,I){let F=I.wireframe===!0,J=i[H.id];J===void 0&&(J={},i[H.id]=J);let X=L.isInstancedMesh===!0?L.id:0,at=J[X];at===void 0&&(at={},J[X]=at);let W=at[k.id];W===void 0&&(W={},at[k.id]=W);let $=W[F];return $===void 0&&($=u(l()),W[F]=$),$}function u(L){let H=[],k=[],I=[];for(let F=0;F<n;F++)H[F]=0,k[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,H,k,I){let F=s.attributes,J=H.attributes,X=0,at=k.getAttributes();for(let W in at)if(at[W].location>=0){let nt=F[W],Nt=J[W];if(Nt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor)),nt===void 0||nt.attribute!==Nt||Nt&&nt.data!==Nt.data)return!0;X++}return s.attributesNum!==X||s.index!==I}function m(L,H,k,I){let F={},J=H.attributes,X=0,at=k.getAttributes();for(let W in at)if(at[W].location>=0){let nt=J[W];nt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let Nt={};Nt.attribute=nt,nt&&nt.data&&(Nt.data=nt.data),F[W]=Nt,X++}s.attributes=F,s.attributesNum=X,s.index=I}function M(){let L=s.newAttributes;for(let H=0,k=L.length;H<k;H++)L[H]=0}function g(L){f(L,0)}function f(L,H){let k=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;k[L]=1,I[L]===0&&(e.enableVertexAttribArray(L),I[L]=1),F[L]!==H&&(e.vertexAttribDivisor(L,H),F[L]=H)}function _(){let L=s.newAttributes,H=s.enabledAttributes;for(let k=0,I=H.length;k<I;k++)H[k]!==L[k]&&(e.disableVertexAttribArray(k),H[k]=0)}function S(L,H,k,I,F,J,X){X===!0?e.vertexAttribIPointer(L,H,k,F,J):e.vertexAttribPointer(L,H,k,I,F,J)}function v(L,H,k,I){M();let F=I.attributes,J=k.getAttributes(),X=H.defaultAttributeValues;for(let at in J){let W=J[at];if(W.location>=0){let $=F[at];if($===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let nt=$.normalized,Nt=$.itemSize,Et=t.get($);if(Et===void 0)continue;let ce=Et.buffer,$t=Et.type,re=Et.bytesPerElement,Z=$t===e.INT||$t===e.UNSIGNED_INT||$.gpuType===Dd;if($.isInterleavedBufferAttribute){let tt=$.data,vt=tt.stride,zt=$.offset;if(tt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<W.locationSize;Mt++)f(W.location+Mt,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Mt=0;Mt<W.locationSize;Mt++)g(W.location+Mt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let Mt=0;Mt<W.locationSize;Mt++)S(W.location+Mt,Nt/W.locationSize,$t,nt,vt*re,(zt+Nt/W.locationSize*Mt)*re,Z)}else{if($.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)f(W.location+tt,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let tt=0;tt<W.locationSize;tt++)g(W.location+tt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let tt=0;tt<W.locationSize;tt++)S(W.location+tt,Nt/W.locationSize,$t,nt,Nt*re,Nt/W.locationSize*tt*re,Z)}}else if(X!==void 0){let nt=X[at];if(nt!==void 0)switch(nt.length){case 2:e.vertexAttrib2fv(W.location,nt);break;case 3:e.vertexAttrib3fv(W.location,nt);break;case 4:e.vertexAttrib4fv(W.location,nt);break;default:e.vertexAttrib1fv(W.location,nt)}}}}_()}function T(){w();for(let L in i){let H=i[L];for(let k in H){let I=H[k];for(let F in I){let J=I[F];for(let X in J)h(J[X].object),delete J[X];delete I[F]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let H=i[L.id];for(let k in H){let I=H[k];for(let F in I){let J=I[F];for(let X in J)h(J[X].object),delete J[X];delete I[F]}}delete i[L.id]}function A(L){for(let H in i){let k=i[H];for(let I in k){let F=k[I];if(F[L.id]===void 0)continue;let J=F[L.id];for(let X in J)h(J[X].object),delete J[X];delete F[L.id]}}}function x(L){for(let H in i){let k=i[H],I=L.isInstancedMesh===!0?L.id:0,F=k[I];if(F!==void 0){for(let J in F){let X=F[J];for(let at in X)h(X[at].object),delete X[at];delete F[J]}delete k[I],Object.keys(k).length===0&&delete i[H]}}}function w(){R(),r=!0,s!==a&&(s=a,c(s.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:g,disableUnusedAttributes:_}}function jN(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function QN(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==Ui&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qn&&A!==Di&&!x&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:E}}function $N(e){let t=this,n=null,i=0,a=!1,s=!1,r=new ki,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let m=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||m===null||m.length===0||s&&!g)s?h(null):c();else{let _=s?0:i,S=_*4,v=f.clippingState||null;l.value=v,v=h(m,u,S,d);for(let T=0;T!==S;++T)v[T]=n[T];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,m){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,m!==!0||g===null){let f=d+M*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,v=d;S!==M;++S,v+=4)r.copy(p[S]).applyMatrix4(_,o),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var yl=4,tD=6,eD=20,nD=256,Cu=new fl,gT=new Zt,q_=null,Y_=0,Z_=0,J_=!1,iD=new O,zr=new O,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){let{size:r=256,position:o=iD}=s;q_=this._renderer.getRenderTarget(),Y_=this._renderer.getActiveCubeFace(),Z_=this._renderer.getActiveMipmapLevel(),J_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(q_,Y_,Z_),this._renderer.xr.enabled=J_,t.scissorTest=!1,vl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Xs||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),q_=this._renderer.getRenderTarget(),Y_=this._renderer.getActiveCubeFace(),Z_=this._renderer.getActiveMipmapLevel(),J_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Yi,format:Ui,colorSpace:Vc,depthBuffer:!1},a=_T(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_T(t,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aD(s)),this._blurMaterial=rD(s,t,n),this._ggxMaterial=sD(s,t,n)}return a}_compileMaterial(t){let n=new ve(new jn,t);this._renderer.compile(n,Cu)}_sceneToCubeUV(t,n,i,a,s){let l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(gT),p.toneMapping=Wi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Sa,new wr({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,f=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,f=!0):(g.color.copy(gT),f=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let T=this._cubeSize;vl(a,v*T,S>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,a=t.mapping===Xs||t.mapping===Pr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=yT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vT());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;vl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Cu)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:m}=this,M=this._sizeLods[i],g=3*M*(i>m-yl?i-m+yl:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-n,vl(s,g,f,3*M,2*M),a.setRenderTarget(s),a.render(o,Cu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,vl(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,Cu)}_blur(t,n,i,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(t,s,n,i,r),this._blurPass(s,t,i,i,r)}_blurPass(t,n,i,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[a],p=3*h*(a>this._lodMax-yl?a-this._lodMax+yl:0),u=4*(this._cubeSize-h);vl(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,Cu)}};function aD(e){let t=[],n=[],i=e,a=e-yl+1+tD;for(let s=0;s<a;s++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,m=new Float32Array(d*u*p),M=new Float32Array(d*u*p);for(let f=0;f<p;f++){let _=f%3*2/3-1,S=f>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];m.set(v,d*u*f);for(let T=0;T<u;T++){let E=h[T*2]*2-1,A=h[T*2+1]*2-1;f===0?zr.set(1,A,E):f===1?zr.set(-E,1,-A):f===2?zr.set(-E,A,1):f===3?zr.set(-1,A,-E):f===4?zr.set(-E,-1,A):zr.set(E,A,-1),zr.toArray(M,(f*u+T)*d)}}let g=new jn;g.setAttribute("position",new fi(m,d)),g.setAttribute("outputDirection",new fi(M,d)),n.push(new ve(g,null)),i>yl&&i--}return{lodMeshes:n,sizeLods:t}}function _T(e,t,n){let i=new Kn(e,t,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function sD(e,t,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nD,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function rD(e,t,n){return new pi({name:"SphericalGaussianBlur",defines:{SAMPLES:eD,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function vT(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function yT(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function xp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vp=class extends Kn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Kc(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Sa(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ma});s.uniforms.tEquirect.value=n;let r=new ve(a,s),o=n.minFilter;return n.minFilter===Ws&&(n.minFilter=Tn),new Td(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}};function oD(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===Cd||d===Rd)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new vp(m.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,m=d===Cd||d===Rd,M=d===Xs||d===Pr;if(m||M){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Sl(e)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return m&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Sl(e)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Cd?u.mapping=Xs:d===Rd&&(u.mapping=Pr),u}function l(u){let d=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function lD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let a=n(i);return a===null&&Er("WebGLRenderer: "+i+" extension not supported."),a}}}function cD(e,t,n,i){let a={},s=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete a[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,m=p.attributes.position,M=0;if(m===void 0)return;if(d!==null){let _=d.array;M=d.version;for(let S=0,v=_.length;S<v;S+=3){let T=_[S+0],E=_[S+1],A=_[S+2];u.push(T,E,E,A,A,T)}}else{let _=m.array;M=m.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let T=S+0,E=S+1,A=S+2;u.push(T,E,E,A,A,T)}}let g=new(m.count>=65535?qc:Wc)(u,1);g.version=M;let f=s.get(p);f&&t.remove(f),s.set(p,g)}function h(p){let u=s.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function uD(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:Ft("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function fD(e,t,n){let i=new WeakMap,a=new He;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),M===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*T*4*p),A=new kc(E,v,T,p);A.type=Di,A.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let L=g[R],H=f[R],k=_[R],I=v*T*4*R;for(let F=0;F<L.count;F++){let J=F*x;d===!0&&(a.fromBufferAttribute(L,F),E[I+J+0]=a.x,E[I+J+1]=a.y,E[I+J+2]=a.z,E[I+J+3]=0),m===!0&&(a.fromBufferAttribute(H,F),E[I+J+4]=a.x,E[I+J+5]=a.y,E[I+J+6]=a.z,E[I+J+7]=0),M===!0&&(a.fromBufferAttribute(k,F),E[I+J+8]=a.x,E[I+J+9]=a.y,E[I+J+10]=a.z,E[I+J+11]=k.itemSize===4?a.w:1)}}u={count:p,texture:A,size:new ct(v,T)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function dD(e,t,n,i,a){let s=new WeakMap;function r(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var pD={[S_]:"LINEAR_TONE_MAPPING",[M_]:"REINHARD_TONE_MAPPING",[b_]:"CINEON_TONE_MAPPING",[vu]:"ACES_FILMIC_TONE_MAPPING",[E_]:"AGX_TONE_MAPPING",[A_]:"NEUTRAL_TONE_MAPPING",[T_]:"CUSTOM_TONE_MAPPING"};function mD(e,t,n,i,a,s){let r=new Kn(t,n,{type:e,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new jn;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));let h=new hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ve(c,h),u=new fl(-1,1,1,-1,0,1),d=null,m=null,M=!1,g,f=null,_=[],S=!1;this.setSize=function(v,T){r.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let E=0;E<_.length;E++){let A=_[E];A.setSize&&A.setSize(v,T)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let T=r.width,E=r.height;_.length>0&&o===null&&(o=new Kn(T,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(T,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let x=_[A];x.setSize&&x.setSize(T,E)}},this.begin=function(v,T){if(M||v.toneMapping===Wi&&_.length===0)return!1;if(f=T,T!==null){let E=T.width,A=T.height;(r.width!==E||r.height!==A)&&this.setSize(E,A)}return S===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=Wi,!0},this.hasRenderPass=function(){return S},this.end=function(v,T){v.toneMapping=g,M=!0;let E=r,A=o;for(let x=0;x<_.length;x++){let w=_[x];w.enabled!==!1&&(w.render(v,A,E,T),w.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},se.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let x=pD[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(f),v.render(p,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var FT=new Vn,Q_=new Fs(1,1),VT=new kc,HT=new id,GT=new Kc,xT=[],ST=[],MT=new Float32Array(16),bT=new Float32Array(9),TT=new Float32Array(4);function Ml(e,t,n){let i=e[0];if(i<=0||i>0)return e;let a=t*n,s=xT[a];if(s===void 0&&(s=new Float32Array(a),xT[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function rn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function on(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Sp(e,t){let n=ST[t];n===void 0&&(n=new Int32Array(t),ST[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function gD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function _D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2fv(this.addr,t),on(n,t)}}function vD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(rn(n,t))return;e.uniform3fv(this.addr,t),on(n,t)}}function yD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4fv(this.addr,t),on(n,t)}}function xD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;TT.set(i),e.uniformMatrix2fv(this.addr,!1,TT),on(n,i)}}function SD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;bT.set(i),e.uniformMatrix3fv(this.addr,!1,bT),on(n,i)}}function MD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(rn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),on(n,t)}else{if(rn(n,i))return;MT.set(i),e.uniformMatrix4fv(this.addr,!1,MT),on(n,i)}}function bD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function TD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2iv(this.addr,t),on(n,t)}}function ED(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3iv(this.addr,t),on(n,t)}}function AD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4iv(this.addr,t),on(n,t)}}function wD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function CD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(rn(n,t))return;e.uniform2uiv(this.addr,t),on(n,t)}}function RD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(rn(n,t))return;e.uniform3uiv(this.addr,t),on(n,t)}}function ND(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(rn(n,t))return;e.uniform4uiv(this.addr,t),on(n,t)}}function DD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Q_.compareFunction=n.isReversedDepthBuffer()?mp:pp,s=Q_):s=FT,n.setTexture2D(t||s,a)}function UD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||HT,a)}function LD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||GT,a)}function OD(e,t,n){let i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||VT,a)}function ID(e){switch(e){case 5126:return gD;case 35664:return _D;case 35665:return vD;case 35666:return yD;case 35674:return xD;case 35675:return SD;case 35676:return MD;case 5124:case 35670:return bD;case 35667:case 35671:return TD;case 35668:case 35672:return ED;case 35669:case 35673:return AD;case 5125:return wD;case 36294:return CD;case 36295:return RD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return DD;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return LD;case 36289:case 36303:case 36311:case 36292:return OD}}function PD(e,t){e.uniform1fv(this.addr,t)}function BD(e,t){let n=Ml(t,this.size,2);e.uniform2fv(this.addr,n)}function zD(e,t){let n=Ml(t,this.size,3);e.uniform3fv(this.addr,n)}function FD(e,t){let n=Ml(t,this.size,4);e.uniform4fv(this.addr,n)}function VD(e,t){let n=Ml(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function HD(e,t){let n=Ml(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function GD(e,t){let n=Ml(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kD(e,t){e.uniform1iv(this.addr,t)}function XD(e,t){e.uniform2iv(this.addr,t)}function WD(e,t){e.uniform3iv(this.addr,t)}function qD(e,t){e.uniform4iv(this.addr,t)}function YD(e,t){e.uniform1uiv(this.addr,t)}function ZD(e,t){e.uniform2uiv(this.addr,t)}function JD(e,t){e.uniform3uiv(this.addr,t)}function KD(e,t){e.uniform4uiv(this.addr,t)}function jD(e,t,n){let i=this.cache,a=t.length,s=Sp(n,a);rn(i,s)||(e.uniform1iv(this.addr,s),on(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Q_:r=FT;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function QD(e,t,n){let i=this.cache,a=t.length,s=Sp(n,a);rn(i,s)||(e.uniform1iv(this.addr,s),on(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||HT,s[r])}function $D(e,t,n){let i=this.cache,a=t.length,s=Sp(n,a);rn(i,s)||(e.uniform1iv(this.addr,s),on(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||GT,s[r])}function tU(e,t,n){let i=this.cache,a=t.length,s=Sp(n,a);rn(i,s)||(e.uniform1iv(this.addr,s),on(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||VT,s[r])}function eU(e){switch(e){case 5126:return PD;case 35664:return BD;case 35665:return zD;case 35666:return FD;case 35674:return VD;case 35675:return HD;case 35676:return GD;case 5124:case 35670:return kD;case 35667:case 35671:return XD;case 35668:case 35672:return WD;case 35669:case 35673:return qD;case 5125:return YD;case 36294:return ZD;case 36295:return JD;case 36296:return KD;case 35678:case 36198:case 36298:case 36306:case 35682:return jD;case 35679:case 36299:case 36307:return QD;case 35680:case 36300:case 36308:case 36293:return $D;case 36289:case 36303:case 36311:case 36292:return tU}}var $_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ID(n.type)}},tv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eU(n.type)}},ev=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(t,n[o.id],i)}}},K_=/(\w+)(\])?(\[|\.)?/g;function ET(e,t){e.seq.push(t),e.map[t.id]=t}function nU(e,t,n){let i=e.name,a=i.length;for(K_.lastIndex=0;;){let s=K_.exec(i),r=K_.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){ET(n,c===void 0?new $_(o,e,t):new tv(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new ev(o),ET(n,p)),n=p}}}var xl=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);nU(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){let s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){let a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){let i=[];for(let a=0,s=t.length;a!==s;++a){let r=t[a];r.id in n&&i.push(r)}return i}};function AT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var iU=37297,aU=0;function sU(e,t){let n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var wT=new Xt;function rU(e){se._getMatrix(wT,se.workingColorSpace,e);let t=`mat3( ${wT.elements.map(n=>n.toFixed(4))} )`;switch(se.getTransfer(e)){case Hc:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function CT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+sU(e.getShaderSource(t),o)}else return s}function oU(e,t){let n=rU(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var lU={[S_]:"Linear",[M_]:"Reinhard",[b_]:"Cineon",[vu]:"ACESFilmic",[E_]:"AgX",[A_]:"Neutral",[T_]:"Custom"};function cU(e,t){let n=lU[t];return n===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var _p=new O;function uU(){se.getLuminanceCoefficients(_p);let e=_p.x.toFixed(4),t=_p.y.toFixed(4),n=_p.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hU(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nu).join(`
`)}function fU(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function dU(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let s=e.getActiveAttrib(t,a),r=s.name,o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Nu(e){return e!==""}function RT(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function NT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pU=/^[ \t]*#include +<([\w\d./]+)>/gm;function nv(e){return e.replace(pU,gU)}var mU=new Map;function gU(e,t){let n=Kt[t];if(n===void 0){let i=mU.get(t);if(i!==void 0)n=Kt[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nv(n)}var _U=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DT(e){return e.replace(_U,vU)}function vU(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function UT(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var yU={[_u]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function xU(e){return yU[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var SU={[Xs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[yu]:"ENVMAP_TYPE_CUBE_UV"};function MU(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":SU[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var bU={[Pr]:"ENVMAP_MODE_REFRACTION"};function TU(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":bU[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var EU={[wd]:"ENVMAP_BLENDING_MULTIPLY",[W1]:"ENVMAP_BLENDING_MIX",[q1]:"ENVMAP_BLENDING_ADD"};function AU(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":EU[e.combine]||"ENVMAP_BLENDING_NONE"}function wU(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function CU(e,t,n,i){let a=e.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=xU(n),c=MU(n),h=TU(n),p=AU(n),u=wU(n),d=hU(n),m=fU(s),M=a.createProgram(),g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Nu).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Nu).join(`
`),f.length>0&&(f+=`
`)):(g=[UT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nu).join(`
`),f=[UT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Kt.tonemapping_pars_fragment:"",n.toneMapping!==Wi?cU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,oU("linearToOutputTexel",n.outputColorSpace),uU(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nu).join(`
`)),r=nv(r),r=RT(r,n),r=NT(r,n),o=nv(o),o=RT(o,n),o=NT(o,n),r=DT(r),o=DT(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=_+g+r,v=_+f+o,T=AT(a,a.VERTEX_SHADER,S),E=AT(a,a.FRAGMENT_SHADER,v);a.attachShader(M,T),a.attachShader(M,E),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function A(L){if(e.debug.checkShaderErrors){let H=a.getProgramInfoLog(M)||"",k=a.getShaderInfoLog(T)||"",I=a.getShaderInfoLog(E)||"",F=H.trim(),J=k.trim(),X=I.trim(),at=!0,W=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(at=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,T,E);else{let $=CT(a,T,"vertex"),nt=CT(a,E,"fragment");Ft("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+$+`
`+nt)}else F!==""?Bt("WebGLProgram: Program Info Log:",F):(J===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:at,programLog:F,vertexShader:{log:J,prefix:g},fragmentShader:{log:X,prefix:f}})}a.deleteShader(T),a.deleteShader(E),x=new xl(a,M),w=dU(a,M)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,iU)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aU++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}var RU=0,iv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new av(t),n.set(t,i)),i}},av=class{constructor(t){this.id=RU++,this.code=t,this.usedTimes=0}};function NU(e){return e===Ys||e===Eu||e===Au}function DU(e,t,n,i,a,s){let r=new Xc,o=new iv,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,R,L,H,k){let I=L.fog,F=H.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||J,X),W=at&&at.mapping===yu?at.image.height:null,$=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let nt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Nt=nt!==void 0?nt.length:0,Et=0;F.morphAttributes.position!==void 0&&(Et=1),F.morphAttributes.normal!==void 0&&(Et=2),F.morphAttributes.color!==void 0&&(Et=3);let ce,$t,re,Z;if($){let De=Ta[$];ce=De.vertexShader,$t=De.fragmentShader}else{ce=x.vertexShader,$t=x.fragmentShader;let De=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,De,pe),re=De.id,Z=pe.id}let tt=e.getRenderTarget(),vt=e.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,Mt=H.isBatchedMesh===!0,Vt=!!x.map,ye=!!x.matcap,et=!!at,st=!!x.aoMap,rt=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,It=!!x.displacementMap,Ot=!!x.emissiveMap,Ht=!!x.metalnessMap,Wt=!!x.roughnessMap,N=x.anisotropy>0,de=x.clearcoat>0,te=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,P=x.sheen>0,V=x.transmission>0,q=N&&!!x.anisotropyMap,lt=de&&!!x.clearcoatMap,ut=de&&!!x.clearcoatNormalMap,Y=de&&!!x.clearcoatRoughnessMap,Q=y&&!!x.iridescenceMap,ft=y&&!!x.iridescenceThicknessMap,Dt=P&&!!x.sheenColorMap,gt=P&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Ut=!!x.specularColorMap,Pt=!!x.specularIntensityMap,qt=V&&!!x.transmissionMap,U=V&&!!x.thicknessMap,pt=!!x.gradientMap,K=!!x.alphaMap,mt=x.alphaTest>0,St=!!x.alphaHash,it=!!x.extensions,Lt=Wi;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Lt=e.toneMapping);let Ct={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:$t,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Vt,matcap:ye,envMap:et,envMapMode:et&&at.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:rt,bumpMap:ot,normalMap:ht,displacementMap:It,emissiveMap:Ot,normalMapObjectSpace:ht&&x.normalMapType===J1,normalMapTangentSpace:ht&&x.normalMapType===wu,packedNormalMap:ht&&x.normalMapType===wu&&NU(x.normalMap.format),metalnessMap:Ht,roughnessMap:Wt,anisotropy:N,anisotropyMap:q,clearcoat:de,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Y,dispersion:te,retroreflection:C,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:ft,sheen:P,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:dt,specularColorMap:Ut,specularIntensityMap:Pt,transmission:V,transmissionMap:qt,thicknessMap:U,gradientMap:pt,opaque:x.transparent===!1&&x.blending===pl&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:St,combine:x.combine,mapUv:Vt&&m(x.map.channel),aoMapUv:st&&m(x.aoMap.channel),lightMapUv:rt&&m(x.lightMap.channel),bumpMapUv:ot&&m(x.bumpMap.channel),normalMapUv:ht&&m(x.normalMap.channel),displacementMapUv:It&&m(x.displacementMap.channel),emissiveMapUv:Ot&&m(x.emissiveMap.channel),metalnessMapUv:Ht&&m(x.metalnessMap.channel),roughnessMapUv:Wt&&m(x.roughnessMap.channel),anisotropyMapUv:q&&m(x.anisotropyMap.channel),clearcoatMapUv:lt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(x.sheenRoughnessMap.channel),specularMapUv:dt&&m(x.specularMap.channel),specularColorMapUv:Ut&&m(x.specularColorMap.channel),specularIntensityMapUv:Pt&&m(x.specularIntensityMap.channel),transmissionMapUv:qt&&m(x.transmissionMap.channel),thicknessMapUv:U&&m(x.thicknessMap.channel),alphaMapUv:K&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ht||N),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!F.attributes.uv&&(Vt||K),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:vt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Et,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Vt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===_e,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ni,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(w,x),_(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let w=d[x.type],R;if(w){let L=Ta[w];R=dT.clone(L.uniforms)}else R=x.uniforms;return R}function v(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new CU(e,w,x,a),c.push(R),h.set(w,R)),R}function T(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function UU(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function LU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function LT(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function OT(){let e=[],t=0,n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,g,f){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.materialVariant=r(u),_.groupOrder=M,_.renderOrder=u.renderOrder,_.z=g,_.group=f),t++,_}function l(u,d,m,M,g,f,_){_.reversedDepth===!0&&(g=-g);let S=o(u,d,m,M,g,f);m.transmission>0?i.push(S):m.transparent===!0?a.push(S):n.push(S)}function c(u,d,m,M,g,f){let _=o(u,d,m,M,g,f);m.transmission>0?i.unshift(_):m.transparent===!0?a.unshift(_):n.unshift(_)}function h(u,d){n.length>1&&n.sort(u||LU),i.length>1&&i.sort(d||LT),a.length>1&&a.sort(d||LT)}function p(){for(let u=t,d=e.length;u<d;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function OU(){let e=new WeakMap;function t(i,a){let s=e.get(i),r;return s===void 0?(r=new OT,e.set(i,[r])):a>=s.length?(r=new OT,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function IU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Zt};break;case"SpotLight":n={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function PU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var BU=0;function zU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function FU(e){let t=new IU,n=PU(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let a=new O,s=new Re,r=new Re;function o(c){let h=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,m=0,M=0,g=0,f=0,_=0,S=0,v=0,T=0,E=0,A=0,x=0,w=0,R=0;c.sort(zU);for(let H=0,k=c.length;H<k;H++){let I=c[H],F=I.color,J=I.intensity,X=I.distance,at=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ys?at=I.shadow.map.texture:at=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*J,p+=F.g*J,u+=F.b*J;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],J);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,nt=n.get(I);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[m]=nt,i.sunShadowMap[m]=at;let Nt=$.getViewportCount();for(let Et=0;Et<Nt;Et++)i.sunShadowMatrix[M+Et]=$.getMatrix(Et),i.sunShadowCascade[M+Et]=$._cascadeData[Et];M+=Nt,m++}i.sun[d]=W,d++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,nt=n.get(I);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=at,i.directionalShadowMatrix[g]=I.shadow.matrix,T++}i.directional[g]=W,g++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(J),W.distance=X,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;let $=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,$.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=$.matrix,I.castShadow){let nt=n.get(I);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,i.spotShadow[_]=nt,i.spotShadowMap[_]=at,A++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(F).multiplyScalar(J),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=W,S++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let $=I.shadow,nt=n.get(I);nt.shadowIntensity=$.intensity,nt.shadowBias=$.bias,nt.shadowNormalBias=$.normalBias,nt.shadowRadius=$.radius,nt.shadowMapSize=$.mapSize,nt.shadowCameraNear=$.camera.near,nt.shadowCameraFar=$.camera.far,i.pointShadow[f]=nt,i.pointShadowMap[f]=at,i.pointShadowMatrix[f]=I.shadow.matrix,E++}i.point[f]=W,f++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(J),W.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[v]=W,v++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=f,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,i.version=BU++)}function l(c,h){let p=0,u=0,d=0,m=0,M=0,g=0,f=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),u++}else if(v.isSpotLight){let T=i.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),r.identity(),s.copy(v.matrixWorld),s.premultiply(f),r.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),M++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function IT(e){let t=new FU(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function VU(e){let t=new WeakMap;function n(a,s=0){let r=t.get(a),o;return r===void 0?(o=new IT(e),t.set(a,[o])):s>=r.length?(o=new IT(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var HU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kU=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],XU=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],PT=new Re,Ru=new O,j_=new O;function WU(e,t,n){let i=new ll,a=new ct,s=new ct,r=new He,o=new fd,l=new dd,c={},h=n.maxTextureSize,p={[ks]:An,[An]:ks,[Ni]:Ni},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:HU,fragmentShader:GU}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new jn;m.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ve(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let f=this.type;this.render=function(E,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===A1&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_u);let w=e.getRenderTarget(),R=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Ma),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=f!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){let J=E[I],X=J.shadow;if(X===void 0){Bt("WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);let at=X.getFrameExtents();a.multiply(at),s.copy(X.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/at.x),a.x=s.x*at.x,X.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/at.y),a.y=s.y*at.y,X.mapSize.y=s.y));let W=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===dl){if(J.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Kn(a.x,a.y,{format:Ys,type:Yi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),X.map.texture.name=J.name+".shadowMap",X.map.depthTexture=new Fs(a.x,a.y,Di),X.map.depthTexture.name=J.name+".shadowMapDepth",X.map.depthTexture.format=ga,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn}else J.isPointLight?(X.map=new vp(a.x),X.map.depthTexture=new sd(a.x,qi)):(X.map=new Kn(a.x,a.y),X.map.depthTexture=new Fs(a.x,a.y,qi)),X.map.depthTexture.name=J.name+".shadowMap",X.map.depthTexture.format=ga,this.type===_u?(X.map.depthTexture.compareFunction=W?mp:pp,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);let $=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();J.isPointLight!==!0&&X.updateMatrices(J,x);for(let nt=0;nt<$;nt++){let Nt=X.getCamera(nt);if(J.isPointLight){let Et=X.camera,ce=X.matrix,$t=J.distance||Et.far;$t!==Et.far&&(Et.far=$t,Et.updateProjectionMatrix()),Ru.setFromMatrixPosition(J.matrixWorld),Et.position.copy(Ru),j_.copy(Et.position),j_.add(kU[nt]),Et.up.copy(XU[nt]),Et.lookAt(j_),Et.updateMatrixWorld(),ce.makeTranslation(-Ru.x,-Ru.y,-Ru.z),PT.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),X._frustum.setFromProjectionMatrix(PT,Et.coordinateSystem,Et.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,nt),e.clear();else{nt===0&&(e.setRenderTarget(X.map),e.clear());let Et=X.getViewport(nt);r.set(s.x*Et.x,s.y*Et.y,s.x*Et.z,s.y*Et.w),H.viewport(r)}i=X.getFrustum(nt),v(A,x,Nt,J,this.type)}X.isPointLightShadow!==!0&&this.type===dl&&_(X,x),X.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(w,R,L)};function _(E,A){let x=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Kn(a.x,a.y,{format:Ys,type:Yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(A,null,x,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(A,null,x,d,M,null)}function S(E,A,x,w){let R=null,L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let H=R.uuid,k=A.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let F=I[k];F===void 0&&(F=R.clone(),I[k]=F,A.addEventListener("dispose",T)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,w===dl?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:p[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=x}return R}function v(E,A,x,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===dl)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=t.update(E),I=E.material;if(Array.isArray(I)){let F=k.groups;for(let J=0,X=F.length;J<X;J++){let at=F[J],W=I[at.materialIndex];if(W&&W.visible){let $=S(E,W,w,R);E.onBeforeShadow(e,E,A,x,k,$,at),e.renderBufferDirect(x,null,k,$,E,at),E.onAfterShadow(e,E,A,x,k,$,at)}}}else if(I.visible){let F=S(E,I,w,R);E.onBeforeShadow(e,E,A,x,k,F,null),e.renderBufferDirect(x,null,k,F,E,null),E.onAfterShadow(e,E,A,x,k,F,null)}}let H=E.children;for(let k=0,I=H.length;k<I;k++)v(H[k],A,x,w,R)}function T(E){E.target.removeEventListener("dispose",T);for(let x in c){let w=c[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function qU(e,t){function n(){let U=!1,pt=new He,K=null,mt=new He(0,0,0,0);return{setMask:function(St){K!==St&&!U&&(e.colorMask(St,St,St,St),K=St)},setLocked:function(St){U=St},setClear:function(St,it,Lt,Ct,De){De===!0&&(St*=Ct,it*=Ct,Lt*=Ct),pt.set(St,it,Lt,Ct),mt.equals(pt)===!1&&(e.clearColor(St,it,Lt,Ct),mt.copy(pt))},reset:function(){U=!1,K=null,mt.set(-1,0,0,0)}}}function i(){let U=!1,pt=!1,K=null,mt=null,St=null;return{setReversed:function(it){if(pt!==it){let Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),pt=it;let Ct=St;St=null,this.setClear(Ct)}},getReversed:function(){return pt},setTest:function(it){it?tt(e.DEPTH_TEST):vt(e.DEPTH_TEST)},setMask:function(it){K!==it&&!U&&(e.depthMask(it),K=it)},setFunc:function(it){if(pt&&(it=oT[it]),mt!==it){switch(it){case Wf:e.depthFunc(e.NEVER);break;case qf:e.depthFunc(e.ALWAYS);break;case Yf:e.depthFunc(e.LESS);break;case nl:e.depthFunc(e.LEQUAL);break;case Zf:e.depthFunc(e.EQUAL);break;case Jf:e.depthFunc(e.GEQUAL);break;case Kf:e.depthFunc(e.GREATER);break;case jf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=it}},setLocked:function(it){U=it},setClear:function(it){St!==it&&(St=it,pt&&(it=1-it),e.clearDepth(it))},reset:function(){U=!1,K=null,mt=null,St=null,pt=!1}}}function a(){let U=!1,pt=null,K=null,mt=null,St=null,it=null,Lt=null,Ct=null,De=null;return{setTest:function(pe){U||(pe?tt(e.STENCIL_TEST):vt(e.STENCIL_TEST))},setMask:function(pe){pt!==pe&&!U&&(e.stencilMask(pe),pt=pe)},setFunc:function(pe,Li,Ji){(K!==pe||mt!==Li||St!==Ji)&&(e.stencilFunc(pe,Li,Ji),K=pe,mt=Li,St=Ji)},setOp:function(pe,Li,Ji){(it!==pe||Lt!==Li||Ct!==Ji)&&(e.stencilOp(pe,Li,Ji),it=pe,Lt=Li,Ct=Ji)},setLocked:function(pe){U=pe},setClear:function(pe){De!==pe&&(e.clearStencil(pe),De=pe)},reset:function(){U=!1,pt=null,K=null,mt=null,St=null,it=null,Lt=null,Ct=null,De=null}}}let s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,m=[],M=null,g=!1,f=null,_=null,S=null,v=null,T=null,E=null,A=null,x=new Zt(0,0,0),w=0,R=!1,L=null,H=null,k=null,I=null,F=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,at=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=at>=1):W.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=at>=2);let $=null,nt={},Nt=e.getParameter(e.SCISSOR_BOX),Et=e.getParameter(e.VIEWPORT),ce=new He().fromArray(Nt),$t=new He().fromArray(Et);function re(U,pt,K,mt){let St=new Uint8Array(4),it=e.createTexture();e.bindTexture(U,it),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Lt=0;Lt<K;Lt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(pt,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(pt+Lt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return it}let Z={};Z[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(nl),ot(!1),ht(m_),tt(e.CULL_FACE),st(Ma);function tt(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function vt(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function zt(U,pt){return u[U]!==pt?(e.bindFramebuffer(U,pt),u[U]=pt,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=pt),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=pt),!0):!1}function Mt(U,pt){let K=m,mt=!1;if(U){K=d.get(pt),K===void 0&&(K=[],d.set(pt,K));let St=U.textures;if(K.length!==St.length||K[0]!==e.COLOR_ATTACHMENT0){for(let it=0,Lt=St.length;it<Lt;it++)K[it]=e.COLOR_ATTACHMENT0+it;K.length=St.length,mt=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,mt=!0);mt&&e.drawBuffers(K)}function Vt(U){return M!==U?(e.useProgram(U),M=U,!0):!1}let ye={[Ir]:e.FUNC_ADD,[C1]:e.FUNC_SUBTRACT,[R1]:e.FUNC_REVERSE_SUBTRACT};ye[N1]=e.MIN,ye[D1]=e.MAX;let et={[U1]:e.ZERO,[L1]:e.ONE,[O1]:e.SRC_COLOR,[y_]:e.SRC_ALPHA,[V1]:e.SRC_ALPHA_SATURATE,[z1]:e.DST_COLOR,[P1]:e.DST_ALPHA,[I1]:e.ONE_MINUS_SRC_COLOR,[x_]:e.ONE_MINUS_SRC_ALPHA,[F1]:e.ONE_MINUS_DST_COLOR,[B1]:e.ONE_MINUS_DST_ALPHA,[H1]:e.CONSTANT_COLOR,[G1]:e.ONE_MINUS_CONSTANT_COLOR,[k1]:e.CONSTANT_ALPHA,[X1]:e.ONE_MINUS_CONSTANT_ALPHA};function st(U,pt,K,mt,St,it,Lt,Ct,De,pe){if(U===Ma){g===!0&&(vt(e.BLEND),g=!1);return}if(g===!1&&(tt(e.BLEND),g=!0),U!==w1){if(U!==f||pe!==R){if((_!==Ir||T!==Ir)&&(e.blendEquation(e.FUNC_ADD),_=Ir,T=Ir),pe)switch(U){case pl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFunc(e.ONE,e.ONE);break;case __:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case v_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ft("WebGLState: Invalid blending: ",U);break}else switch(U){case pl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case __:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",U);break}S=null,v=null,E=null,A=null,x.set(0,0,0),w=0,f=U,R=pe}return}St=St||pt,it=it||K,Lt=Lt||mt,(pt!==_||St!==T)&&(e.blendEquationSeparate(ye[pt],ye[St]),_=pt,T=St),(K!==S||mt!==v||it!==E||Lt!==A)&&(e.blendFuncSeparate(et[K],et[mt],et[it],et[Lt]),S=K,v=mt,E=it,A=Lt),(Ct.equals(x)===!1||De!==w)&&(e.blendColor(Ct.r,Ct.g,Ct.b,De),x.copy(Ct),w=De),f=U,R=!1}function rt(U,pt){U.side===Ni?vt(e.CULL_FACE):tt(e.CULL_FACE);let K=U.side===An;pt&&(K=!K),ot(K),U.blending===pl&&U.transparent===!1?st(Ma):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let mt=U.stencilWrite;o.setTest(mt),mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ot(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):vt(e.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){L!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),L=U)}function ht(U){U!==T1?(tt(e.CULL_FACE),U!==H&&(U===m_?e.cullFace(e.BACK):U===E1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):vt(e.CULL_FACE),H=U}function It(U){U!==k&&(X&&e.lineWidth(U),k=U)}function Ot(U,pt,K){U?(tt(e.POLYGON_OFFSET_FILL),(I!==pt||F!==K)&&(I=pt,F=K,r.getReversed()&&(pt=-pt),e.polygonOffset(pt,K))):vt(e.POLYGON_OFFSET_FILL)}function Ht(U){U?tt(e.SCISSOR_TEST):vt(e.SCISSOR_TEST)}function Wt(U){U===void 0&&(U=e.TEXTURE0+J-1),$!==U&&(e.activeTexture(U),$=U)}function N(U,pt,K){K===void 0&&($===null?K=e.TEXTURE0+J-1:K=$);let mt=nt[K];mt===void 0&&(mt={type:void 0,texture:void 0},nt[K]=mt),(mt.type!==U||mt.texture!==pt)&&($!==K&&(e.activeTexture(K),$=K),e.bindTexture(U,pt||Z[U]),mt.type=U,mt.texture=pt)}function de(){let U=nt[$];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{e.compressedTexImage2D(...arguments)}catch(U){Ft("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){Ft("WebGLState:",U)}}function y(){try{e.texSubImage2D(...arguments)}catch(U){Ft("WebGLState:",U)}}function P(){try{e.texSubImage3D(...arguments)}catch(U){Ft("WebGLState:",U)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ft("WebGLState:",U)}}function q(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ft("WebGLState:",U)}}function lt(){try{e.texStorage2D(...arguments)}catch(U){Ft("WebGLState:",U)}}function ut(){try{e.texStorage3D(...arguments)}catch(U){Ft("WebGLState:",U)}}function Y(){try{e.texImage2D(...arguments)}catch(U){Ft("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){Ft("WebGLState:",U)}}function ft(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function Dt(U,pt){p[U]!==pt&&(e.pixelStorei(U,pt),p[U]=pt)}function gt(U){ce.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function dt(U){$t.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function Ut(U,pt){let K=c.get(pt);K===void 0&&(K=new WeakMap,c.set(pt,K));let mt=K.get(U);mt===void 0&&(mt=e.getUniformBlockIndex(pt,U.name),K.set(U,mt))}function Pt(U,pt){let mt=c.get(pt).get(U);l.get(pt)!==mt&&(e.uniformBlockBinding(pt,mt,U.__bindingPointIndex),l.set(pt,mt))}function qt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,nt={},u={},d=new WeakMap,m=[],M=null,g=!1,f=null,_=null,S=null,v=null,T=null,E=null,A=null,x=new Zt(0,0,0),w=0,R=!1,L=null,H=null,k=null,I=null,F=null,ce.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:tt,disable:vt,bindFramebuffer:zt,drawBuffers:Mt,useProgram:Vt,setBlending:st,setMaterial:rt,setFlipSided:ot,setCullFace:ht,setLineWidth:It,setPolygonOffset:Ot,setScissorTest:Ht,activeTexture:Wt,bindTexture:N,unbindTexture:de,compressedTexImage2D:te,compressedTexImage3D:C,texImage2D:Y,texImage3D:Q,pixelStorei:Dt,getParameter:ft,updateUBOMapping:Ut,uniformBlockBinding:Pt,texStorage2D:lt,texStorage3D:ut,texSubImage2D:y,texSubImage3D:P,compressedTexSubImage2D:V,compressedTexSubImage3D:q,scissor:gt,viewport:dt,reset:qt}}function YU(e,t,n,i,a,s,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,p=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return m?new OffscreenCanvas(C,y):Gc("canvas")}function g(C,y,P){let V=1,q=te(C);if((q.width>P||q.height>P)&&(V=P/Math.max(q.width,q.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(V*q.width),ut=Math.floor(V*q.height);u===void 0&&(u=M(lt,ut));let Y=y?M(lt,ut):u;return Y.width=lt,Y.height=ut,Y.getContext("2d").drawImage(C,0,0,lt,ut),Bt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+lt+"x"+ut+")."),Y}else return"data"in C&&Bt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function f(C){return C.generateMipmaps}function _(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,y,P,V,q,lt=!1){if(C!==null){if(e[C]!==void 0)return e[C];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===e.RED&&(P===e.FLOAT&&(Y=e.R32F),P===e.HALF_FLOAT&&(Y=e.R16F),P===e.UNSIGNED_BYTE&&(Y=e.R8),P===e.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),P===e.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),y===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.R8UI),P===e.UNSIGNED_SHORT&&(Y=e.R16UI),P===e.UNSIGNED_INT&&(Y=e.R32UI),P===e.BYTE&&(Y=e.R8I),P===e.SHORT&&(Y=e.R16I),P===e.INT&&(Y=e.R32I)),y===e.RG&&(P===e.FLOAT&&(Y=e.RG32F),P===e.HALF_FLOAT&&(Y=e.RG16F),P===e.UNSIGNED_BYTE&&(Y=e.RG8),P===e.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),P===e.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RG8UI),P===e.UNSIGNED_SHORT&&(Y=e.RG16UI),P===e.UNSIGNED_INT&&(Y=e.RG32UI),P===e.BYTE&&(Y=e.RG8I),P===e.SHORT&&(Y=e.RG16I),P===e.INT&&(Y=e.RG32I)),y===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),P===e.UNSIGNED_INT&&(Y=e.RGB32UI),P===e.BYTE&&(Y=e.RGB8I),P===e.SHORT&&(Y=e.RGB16I),P===e.INT&&(Y=e.RGB32I)),y===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),P===e.UNSIGNED_INT&&(Y=e.RGBA32UI),P===e.BYTE&&(Y=e.RGBA8I),P===e.SHORT&&(Y=e.RGBA16I),P===e.INT&&(Y=e.RGBA32I)),y===e.RGB&&(P===e.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),P===e.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),y===e.RGBA){let Q=lt?Hc:se.getTransfer(q);P===e.FLOAT&&(Y=e.RGBA32F),P===e.HALF_FLOAT&&(Y=e.RGBA16F),P===e.UNSIGNED_BYTE&&(Y=Q===_e?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),P===e.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function T(C,y){let P;return C?y===null||y===qi||y===gl?P=e.DEPTH24_STENCIL8:y===Di?P=e.DEPTH32F_STENCIL8:y===ml&&(P=e.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===gl?P=e.DEPTH_COMPONENT24:y===Di?P=e.DEPTH_COMPONENT32F:y===ml&&(P=e.DEPTH_COMPONENT16),P}function E(C,y){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==pn&&C.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),L(y)}function w(C){let y=i.get(C);if(y.__webglInit===void 0)return;let P=C.source,V=d.get(P);if(V){let q=V[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(P)}i.remove(C)}function R(C){let y=i.get(C);e.deleteTexture(y.__webglTexture);let P=C.source,V=d.get(P);delete V[y.__cacheKey],r.memory.textures--}function L(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let q=0;q<y.__webglFramebuffer[V].length;q++)e.deleteFramebuffer(y.__webglFramebuffer[V][q]);else e.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)e.deleteFramebuffer(y.__webglFramebuffer[V]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=C.textures;for(let V=0,q=P.length;V<q;V++){let lt=i.get(P[V]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(P[V])}i.remove(C)}let H=0;function k(){H=0}function I(){return H}function F(C){H=C}function J(){let C=H;return C>=a.maxTextures&&Bt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+a.maxTextures),H+=1,C}function X(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function at(C,y){let P=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let V=C.image;if(V===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(P,C,y);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+y)}function W(C,y){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){vt(P,C,y);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+y)}function $(C,y){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){vt(P,C,y);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+y)}function nt(C,y){let P=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){zt(P,C,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+y)}let Nt={[il]:e.REPEAT,[pa]:e.CLAMP_TO_EDGE,[Qf]:e.MIRRORED_REPEAT},Et={[pn]:e.NEAREST,[Y1]:e.NEAREST_MIPMAP_NEAREST,[xu]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[Nd]:e.LINEAR_MIPMAP_NEAREST,[Ws]:e.LINEAR_MIPMAP_LINEAR},ce={[j1]:e.NEVER,[nT]:e.ALWAYS,[Q1]:e.LESS,[pp]:e.LEQUAL,[$1]:e.EQUAL,[mp]:e.GEQUAL,[tT]:e.GREATER,[eT]:e.NOTEQUAL};function $t(C,y){if(y.type===Di&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Tn||y.magFilter===Nd||y.magFilter===xu||y.magFilter===Ws||y.minFilter===Tn||y.minFilter===Nd||y.minFilter===xu||y.minFilter===Ws)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Nt[y.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Nt[y.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Nt[y.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Et[y.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==xu&&y.minFilter!==Ws||y.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function re(C,y){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let V=y.source,q=d.get(V);q===void 0&&(q={},d.set(V,q));let lt=X(y);if(lt!==C.__cacheKey){q[lt]===void 0&&(q[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),q[lt].usedTimes++;let ut=q[C.__cacheKey];ut!==void 0&&(q[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(y)),C.__cacheKey=lt,C.__webglTexture=q[lt].texture}return P}function Z(C,y,P){return Math.floor(Math.floor(C/P)/y)}function tt(C,y,P,V){let lt=C.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,P,V,y.data);else{lt.sort((Dt,gt)=>Dt.start-gt.start);let ut=0;for(let Dt=1;Dt<lt.length;Dt++){let gt=lt[ut],dt=lt[Dt],Ut=gt.start+gt.count,Pt=Z(dt.start,y.width,4),qt=Z(gt.start,y.width,4);dt.start<=Ut+1&&Pt===qt&&Z(dt.start+dt.count-1,y.width,4)===Pt?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++ut,lt[ut]=dt)}lt.length=ut+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),ft=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Dt=0,gt=lt.length;Dt<gt;Dt++){let dt=lt[Dt],Ut=Math.floor(dt.start/4),Pt=Math.ceil(dt.count/4),qt=Ut%y.width,U=Math.floor(Ut/y.width),pt=Pt,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,qt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,qt,U,pt,K,P,V,y.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,ft)}}function vt(C,y,P){let V=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=e.TEXTURE_3D);let q=re(C,y),lt=y.source;n.bindTexture(V,C.__webglTexture,e.TEXTURE0+P);let ut=i.get(lt);if(lt.version!==ut.__version||q===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=se.getPrimaries(se.workingColorSpace),mt=y.colorSpace===Ja?null:se.getPrimaries(y.colorSpace),St=y.colorSpace===Ja||K===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=g(y.image,!1,a.maxTextureSize);Q=de(y,Q);let ft=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type),gt=v(y.internalFormat,ft,Dt,y.normalized,y.colorSpace,y.isVideoTexture);$t(V,y);let dt,Ut=y.mipmaps,Pt=y.isVideoTexture!==!0,qt=ut.__version===void 0||q===!0,U=lt.dataReady,pt=E(y,Q);if(y.isDepthTexture)gt=T(y.format===qs,y.type),qt&&(Pt?n.texStorage2D(e.TEXTURE_2D,1,gt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,gt,Q.width,Q.height,0,ft,Dt,null));else if(y.isDataTexture)if(Ut.length>0){Pt&&qt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,Ut[0].width,Ut[0].height);for(let K=0,mt=Ut.length;K<mt;K++)dt=Ut[K],Pt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,dt.width,dt.height,ft,Dt,dt.data):n.texImage2D(e.TEXTURE_2D,K,gt,dt.width,dt.height,0,ft,Dt,dt.data);y.generateMipmaps=!1}else Pt?(qt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,Q.width,Q.height),U&&tt(y,Q,ft,Dt)):n.texImage2D(e.TEXTURE_2D,0,gt,Q.width,Q.height,0,ft,Dt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pt&&qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,gt,Ut[0].width,Ut[0].height,Q.depth);for(let K=0,mt=Ut.length;K<mt;K++)if(dt=Ut[K],y.format!==Ui)if(ft!==null)if(Pt){if(U)if(y.layerUpdates.size>0){let St=V_(dt.width,dt.height,y.format,y.type);for(let it of y.layerUpdates){let Lt=dt.data.subarray(it*St/dt.data.BYTES_PER_ELEMENT,(it+1)*St/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,it,dt.width,dt.height,1,ft,Lt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,Q.depth,ft,dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,gt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,dt.width,dt.height,Q.depth,ft,Dt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,gt,dt.width,dt.height,Q.depth,0,ft,Dt,dt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Pt&&qt&&n.texStorage2D(e.TEXTURE_2D,pt,gt,Ut[0].width,Ut[0].height);for(let K=0,mt=Ut.length;K<mt;K++)dt=Ut[K],y.format!==Ui?ft!==null?Pt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,dt.width,dt.height,ft,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,K,gt,dt.width,dt.height,0,dt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,dt.width,dt.height,ft,Dt,dt.data):n.texImage2D(e.TEXTURE_2D,K,gt,dt.width,dt.height,0,ft,Dt,dt.data)}else if(y.isDataArrayTexture)if(Pt){if(qt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,gt,Q.width,Q.height,Q.depth),U)if(y.layerUpdates.size>0){let K=V_(Q.width,Q.height,y.format,y.type);for(let mt of y.layerUpdates){let St=Q.data.subarray(mt*K/Q.data.BYTES_PER_ELEMENT,(mt+1)*K/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,mt,Q.width,Q.height,1,ft,Dt,St)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Dt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,gt,Q.width,Q.height,Q.depth,0,ft,Dt,Q.data);else if(y.isData3DTexture)Pt?(qt&&n.texStorage3D(e.TEXTURE_3D,pt,gt,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Dt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,gt,Q.width,Q.height,Q.depth,0,ft,Dt,Q.data);else if(y.isFramebufferTexture){if(qt)if(Pt)n.texStorage2D(e.TEXTURE_2D,pt,gt,Q.width,Q.height);else{let K=Q.width,mt=Q.height;for(let St=0;St<pt;St++)n.texImage2D(e.TEXTURE_2D,St,gt,K,mt,0,ft,Dt,null),K>>=1,mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),p.add(y),K.onpaint=mt=>{let St=mt.changedElements;for(let it of p)St.includes(it.image)&&(it.needsUpdate=!0)},K.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{let St=e.RGBA,it=e.RGBA,Lt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,St,it,Lt,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Pt&&qt){let K=te(Ut[0]);n.texStorage2D(e.TEXTURE_2D,pt,gt,K.width,K.height)}for(let K=0,mt=Ut.length;K<mt;K++)dt=Ut[K],Pt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ft,Dt,dt):n.texImage2D(e.TEXTURE_2D,K,gt,ft,Dt,dt);y.generateMipmaps=!1}else if(Pt){if(qt){let K=te(Q);n.texStorage2D(e.TEXTURE_2D,pt,gt,K.width,K.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Dt,Q)}else n.texImage2D(e.TEXTURE_2D,0,gt,ft,Dt,Q);f(y)&&_(V),ut.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function zt(C,y,P){if(y.image.length!==6)return;let V=re(C,y),q=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let lt=i.get(q);if(q.version!==lt.__version||V===!0){n.activeTexture(e.TEXTURE0+P);let ut=se.getPrimaries(se.workingColorSpace),Y=y.colorSpace===Ja?null:se.getPrimaries(y.colorSpace),Q=y.colorSpace===Ja||ut===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ft=y.isCompressedTexture||y.image[0].isCompressedTexture,Dt=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!ft&&!Dt?gt[it]=g(y.image[it],!0,a.maxCubemapSize):gt[it]=Dt?y.image[it].image:y.image[it],gt[it]=de(y,gt[it]);let dt=gt[0],Ut=s.convert(y.format,y.colorSpace),Pt=s.convert(y.type),qt=v(y.internalFormat,Ut,Pt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pt=lt.__version===void 0||V===!0,K=q.dataReady,mt=E(y,dt);$t(e.TEXTURE_CUBE_MAP,y);let St;if(ft){U&&pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,qt,dt.width,dt.height);for(let it=0;it<6;it++){St=gt[it].mipmaps;for(let Lt=0;Lt<St.length;Lt++){let Ct=St[Lt];y.format!==Ui?Ut!==null?U?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Ct.width,Ct.height,Ut,Ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,qt,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Ct.width,Ct.height,Ut,Pt,Ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,qt,Ct.width,Ct.height,0,Ut,Pt,Ct.data)}}}else{if(St=y.mipmaps,U&&pt){St.length>0&&mt++;let it=te(gt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Dt){U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Ut,Pt,gt[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,gt[it].width,gt[it].height,0,Ut,Pt,gt[it].data);for(let Lt=0;Lt<St.length;Lt++){let De=St[Lt].image[it].image;U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,De.width,De.height,Ut,Pt,De.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,qt,De.width,De.height,0,Ut,Pt,De.data)}}else{U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,Pt,gt[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Ut,Pt,gt[it]);for(let Lt=0;Lt<St.length;Lt++){let Ct=St[Lt];U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,Ut,Pt,Ct.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,qt,Ut,Pt,Ct.image[it])}}}f(y)&&_(e.TEXTURE_CUBE_MAP),lt.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Mt(C,y,P,V,q,lt){let ut=s.convert(P.format,P.colorSpace),Y=s.convert(P.type),Q=v(P.internalFormat,ut,Y,P.normalized,P.colorSpace),ft=i.get(y),Dt=i.get(P);if(Dt.__renderTarget=y,!ft.__hasExternalTextures){let gt=Math.max(1,y.width>>lt),dt=Math.max(1,y.height>>lt);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?n.texImage3D(q,lt,Q,gt,dt,y.depth,0,ut,Y,null):n.texImage2D(q,lt,Q,gt,dt,0,ut,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Wt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,q,Dt.__webglTexture,0,Ht(y)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,q,Dt.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(C,y,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),y.depthBuffer){let V=y.depthTexture,q=V&&V.isDepthTexture?V.type:null,lt=T(y.stencilBuffer,q),ut=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Wt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ht(y),lt,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ht(y),lt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,lt,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,C)}else{let V=y.textures;for(let q=0;q<V.length;q++){let lt=V[q],ut=s.convert(lt.format,lt.colorSpace),Y=s.convert(lt.type),Q=v(lt.internalFormat,ut,Y,lt.normalized,lt.colorSpace);Wt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ht(y),Q,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ht(y),Q,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,Q,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(C,y,P){let V=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),$t(e.TEXTURE_CUBE_MAP,y.depthTexture);let ft=s.convert(y.depthTexture.format),Dt=s.convert(y.depthTexture.type),gt;y.depthTexture.format===ga?gt=e.DEPTH_COMPONENT24:y.depthTexture.format===qs&&(gt=e.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,y.width,y.height,0,ft,Dt,null)}}else at(y.depthTexture,0);let lt=q.__webglTexture,ut=Ht(y),Y=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,Q=y.depthTexture.format===qs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===ga)Wt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,lt,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,lt,0);else if(y.depthTexture.format===qs)Wt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,Y,lt,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,Q,Y,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){let y=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",q)};V.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=V}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let V=0;V<6;V++)ye(y.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?ye(y.__webglFramebuffer[0],C,0):ye(y.__webglFramebuffer,C,0)}else if(P){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=e.createRenderbuffer(),Vt(y.__webglDepthbuffer[V],C,!1);else{let q=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Vt(y.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function st(C,y,P){let V=i.get(C);y!==void 0&&Mt(V.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&et(C)}function rt(C){let y=C.texture,P=i.get(C),V=i.get(y);C.addEventListener("dispose",x);let q=C.textures,lt=C.isWebGLCubeRenderTarget===!0,ut=q.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=y.version,r.memory.textures++),lt){P.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[Y]=[];for(let Q=0;Q<y.mipmaps.length;Q++)P.__webglFramebuffer[Y][Q]=e.createFramebuffer()}else P.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)P.__webglFramebuffer[Y]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ut)for(let Y=0,Q=q.length;Y<Q;Y++){let ft=i.get(q[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Wt(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let Q=q[Y];P.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[Y]);let ft=s.convert(Q.format,Q.colorSpace),Dt=s.convert(Q.type),gt=v(Q.internalFormat,ft,Dt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),dt=Ht(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,dt,gt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,P.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),$t(e.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Mt(P.__webglFramebuffer[Y][Q],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Mt(P.__webglFramebuffer[Y],C,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(y)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ut){for(let Y=0,Q=q.length;Y<Q;Y++){let ft=q[Y],Dt=i.get(ft),gt=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(gt,Dt.__webglTexture),$t(gt,ft),Mt(P.__webglFramebuffer,C,ft,e.COLOR_ATTACHMENT0+Y,gt,0),f(ft)&&_(gt)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,V.__webglTexture),$t(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Mt(P.__webglFramebuffer[Q],C,y,e.COLOR_ATTACHMENT0,Y,Q);else Mt(P.__webglFramebuffer,C,y,e.COLOR_ATTACHMENT0,Y,0);f(y)&&_(Y),n.unbindTexture()}C.depthBuffer&&et(C)}function ot(C){let y=C.textures;for(let P=0,V=y.length;P<V;P++){let q=y[P];if(f(q)){let lt=S(C),ut=i.get(q).__webglTexture;n.bindTexture(lt,ut),_(lt),n.unbindTexture()}}}let ht=[],It=[];function Ot(C){if(C.samples>0){if(Wt(C)===!1){let y=C.textures,P=C.width,V=C.height,q=e.COLOR_BUFFER_BIT,lt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(C),Y=y.length>1;if(Y)for(let ft=0;ft<y.length;ft++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Dt=i.get(y[ft]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Dt,0)}e.blitFramebuffer(0,0,P,V,0,0,P,V,q,e.NEAREST),l===!0&&(ht.length=0,It.length=0,ht.push(e.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ht.push(lt),It.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,It)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ht))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<y.length;ft++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Dt=i.get(y[ft]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ft,e.TEXTURE_2D,Dt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ht(C){return Math.min(a.maxSamples,C.samples)}function Wt(C){let y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(C){let y=r.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function de(C,y){let P=C.colorSpace,V=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Vc&&P!==Ja&&(se.getTransfer(P)===_e?(V!==Ui||q!==Qn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",P)),y}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=at,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=nt,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ZU(e,t){function n(i,a=Ja){let s,r=se.getTransfer(a);if(i===Qn)return e.UNSIGNED_BYTE;if(i===Ud)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ld)return e.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===D_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===C_)return e.BYTE;if(i===R_)return e.SHORT;if(i===ml)return e.UNSIGNED_SHORT;if(i===Dd)return e.INT;if(i===qi)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===Yi)return e.HALF_FLOAT;if(i===U_)return e.ALPHA;if(i===L_)return e.RGB;if(i===Ui)return e.RGBA;if(i===ga)return e.DEPTH_COMPONENT;if(i===qs)return e.DEPTH_STENCIL;if(i===Od)return e.RED;if(i===Id)return e.RED_INTEGER;if(i===Ys)return e.RG;if(i===Pd)return e.RG_INTEGER;if(i===Bd)return e.RGBA_INTEGER;if(i===Su||i===Mu||i===bu||i===Tu)if(r===_e)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Su)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Su)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zd||i===Fd||i===Vd||i===Hd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===kd||i===Xd||i===Wd||i===qd||i===Eu||i===Yd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===kd)return r===_e?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return s.COMPRESSED_R11_EAC;if(i===qd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Eu)return s.COMPRESSED_RG11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zd||i===Jd||i===Kd||i===jd||i===Qd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===sp||i===rp||i===op)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ep)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===np)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ip)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ap)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rp)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===op)return r===_e?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lp||i===cp||i===up)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===lp)return r===_e?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===fp||i===Au||i===dp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===hp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var JU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new jc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new pi({vertexShader:JU,fragmentShader:KU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ve(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rv=class extends _a{constructor(t,n){super();let i=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,m=null,M=typeof XRWebGLBinding<"u",g=new sv,f={},_=n.getContextAttributes(),S=null,v=null,T=[],E=[],A=new ct,x=null,w=null,R=new bn;R.viewport=new He;let L=new bn;L.viewport=new He;let H=[R,L],k=new Ed,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let tt=T[Z];return tt===void 0&&(tt=new ol,T[Z]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Z){let tt=T[Z];return tt===void 0&&(tt=new ol,T[Z]=tt),tt.getGripSpace()},this.getHand=function(Z){let tt=T[Z];return tt===void 0&&(tt=new ol,T[Z]=tt),tt.getHandSpace()};function J(Z){let tt=E.indexOf(Z.inputSource);if(tt===-1)return;let vt=T[tt];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||r),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",at);for(let Z=0;Z<T.length;Z++){let tt=E[Z];tt!==null&&(E[Z]=null,T[Z].disconnect(tt))}I=null,F=null,g.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(S),d=null,u=null,p=null,a=null,v=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",X),a.addEventListener("inputsourceschange",at),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,zt=null,Mt=null;_.depth&&(Mt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,vt=_.stencil?qs:ga,zt=_.stencil?gl:qi);let Vt={colorFormat:n.RGBA8,depthFormat:Mt,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Vt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Kn(u.textureWidth,u.textureHeight,{format:Ui,type:Qn,depthTexture:new Fs(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,vt),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Ui,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),re.setContext(a),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(Z){for(let tt=0;tt<Z.removed.length;tt++){let vt=Z.removed[tt],zt=E.indexOf(vt);zt>=0&&(E[zt]=null,T[zt].disconnect(vt))}for(let tt=0;tt<Z.added.length;tt++){let vt=Z.added[tt],zt=E.indexOf(vt);if(zt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=E.length){E.push(vt),zt=Vt;break}else if(E[Vt]===null){E[Vt]=vt,zt=Vt;break}if(zt===-1)break}let Mt=T[zt];Mt&&Mt.connect(vt)}}let W=new O,$=new O;function nt(Z,tt,vt){W.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(vt.matrixWorld);let zt=W.distanceTo($),Mt=tt.projectionMatrix.elements,Vt=vt.projectionMatrix.elements,ye=Mt[14]/(Mt[10]-1),et=Mt[14]/(Mt[10]+1),st=(Mt[9]+1)/Mt[5],rt=(Mt[9]-1)/Mt[5],ot=(Mt[8]-1)/Mt[0],ht=(Vt[8]+1)/Vt[0],It=ye*ot,Ot=ye*ht,Ht=zt/(-ot+ht),Wt=Ht*-ot;if(tt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Mt[10]===-1)Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let N=ye+Ht,de=et+Ht,te=It-Wt,C=Ot+(zt-Wt),y=st*et/de*N,P=rt*et/de*N;Z.projectionMatrix.makePerspective(te,C,y,P,N,de),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Nt(Z,tt){tt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(tt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let tt=Z.near,vt=Z.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),k.near=L.near=R.near=tt,k.far=L.far=R.far=vt,(I!==k.near||F!==k.far)&&(a.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,F=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let zt=Z.parent,Mt=k.cameras;Nt(k,zt);for(let Vt=0;Vt<Mt.length;Vt++)Nt(Mt[Vt],zt);Mt.length===2?nt(k,R,L):k.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),Et(Z,k,zt)};function Et(Z,tt,vt){vt===null?Z.matrix.copy(tt.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(tt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(tt.projectionMatrix),Z.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=td*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Z){return f[Z]};let ce=null;function $t(Z,tt){if(h=tt.getViewerPose(c||r),m=tt,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let zt=!1;vt.length!==k.cameras.length&&(k.cameras.length=0,zt=!0);for(let et=0;et<vt.length;et++){let st=vt[et],rt=null;if(d!==null)rt=d.getViewport(st);else{let ht=p.getViewSubImage(u,st);rt=ht.viewport,et===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let ot=H[et];ot===void 0&&(ot=new bn,ot.layers.enable(et),ot.viewport=new He,H[et]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(rt.x,rt.y,rt.width,rt.height),et===0&&(k.matrix.copy(ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),zt===!0&&k.cameras.push(ot)}let Mt=a.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let et=p.getDepthInformation(vt[0]);et&&et.isValid&&et.texture&&g.init(et,a.renderState)}if(Mt&&Mt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let et=0;et<vt.length;et++){let st=vt[et].camera;if(st){let rt=f[st];rt||(rt=new jc,f[st]=rt);let ot=p.getCameraImage(st);rt.sourceTexture=ot}}}}for(let vt=0;vt<T.length;vt++){let zt=E[vt],Mt=T[vt];zt!==null&&Mt!==void 0&&Mt.update(zt,tt,c||r)}ce&&ce(Z,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),m=null}let re=new BT;re.setAnimationLoop($t),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}},jU=new Re,kT=new Xt;kT.set(-1,0,0,0,1,0,0,0,1);function QU(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,B_(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,_,S,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,S):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===An&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===An&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let _=t.get(f),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(jU.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kT),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=S*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){let _=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function $U(e,t,n,i){let a={},s={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let E=T.program;i.uniformBlockBinding(v,E)}function c(v,T){let E=a[v.id];E===void 0&&(g(v),E=h(v),a[v.id]=E,v.addEventListener("dispose",_));let A=T.program;i.updateUBOMapping(v,A);let x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){let T=p();v.__bindingPointIndex=T;let E=e.createBuffer(),A=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,A,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=a[v.id],E=v.uniforms,A=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let L=0,H=R.length;L<H;L++)d(R[L],x,L,A);else d(R,x,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,T,E,A){if(M(v,T,E,A)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){let H=w[L],k=f(H);m(H,v.__data,R),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function m(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function M(v,T,E,A){let x=v.value,w=T+"_"+E;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(v){let T=v.uniforms,E=0,A=16;for(let w=0,R=T.length;w<R;w++){let L=Array.isArray(T[w])?T[w]:[T[w]];for(let H=0,k=L.length;H<k;H++){let I=L[H],F=Array.isArray(I.value)?I.value:[I.value];for(let J=0,X=F.length;J<X;J++){let at=F[J],W=f(at),$=E%A,nt=$%W.boundary,Nt=$+nt;E+=nt,Nt!==0&&A-Nt<W.storage&&(E+=A-Nt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=W.storage}}}let x=E%A;return x>0&&(E+=A-x),v.__size=E,v.__cache={},this}function f(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),T}function _(v){let T=v.target;T.removeEventListener("dispose",_);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function S(){for(let v in a)e.deleteBuffer(a[v]);r=[],a={},s={}}return{bind:l,update:c,dispose:S}}var tL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ba=null;function eL(){return ba===null&&(ba=new Yc(tL,16,16,Ys,Yi),ba.name="DFG_LUT",ba.minFilter=Tn,ba.magFilter=Tn,ba.wrapS=pa,ba.wrapT=pa,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}var yp=class{constructor(t={}){let{canvas:n=aT(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;let M=d,g=new Set([Bd,Pd,Id]),f=new Set([Qn,qi,ml,gl,Ud,Ld]),_=new Uint32Array(4),S=new Int32Array(4),v=new O,T=null,E=null,A=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,H=null,k=null,I=null,F=null;this._outputColorSpace=Mn;let J=0,X=0,at=null,W=-1,$=null,nt=new He,Nt=new He,Et=null,ce=new Zt(0),$t=0,re=n.width,Z=n.height,tt=1,vt=null,zt=null,Mt=new He(0,0,re,Z),Vt=new He(0,0,re,Z),ye=!1,et=new ll,st=!1,rt=!1,ot=new Re,ht=new O,It=new He,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Wt(){return at===null?tt:1}let N=i;function de(b,D){return n.getContext(b,D)}let te,C,y,P,V,q,lt,ut,Y,Q,ft,Dt,gt,dt,Ut,Pt,qt,U,pt,K,mt,St,it;try{let b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",Li,!1),N===null){let D="webgl2";if(N=de(D,b),N===null)throw de(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(b){throw n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Li,!1),Ft("WebGLRenderer: "+b.message),b}function Lt(){te=new lD(N),te.init(),mt=new ZU(N,te),C=new QN(N,te,t,mt),y=new qU(N,te),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=N.createFramebuffer(),I=N.createFramebuffer(),F=N.createFramebuffer(),P=new hD(N),V=new UU,q=new YU(N,te,y,V,C,mt,P),lt=new oD(R),ut=new d2(N),St=new KN(N,ut),Y=new cD(N,ut,P,St),Q=new dD(N,Y,ut,St,P),U=new fD(N,C,q),Ut=new $N(V),ft=new DU(R,lt,te,C,St,Ut),Dt=new QU(R,V),gt=new OU,dt=new VU(te),qt=new JN(R,lt,y,Q,m,l),Pt=new WU(R,Q,C),it=new $U(N,P,C,y),pt=new jN(N,te,P),K=new uD(N,te,P),P.programs=ft.programs,R.capabilities=C,R.extensions=te,R.properties=V,R.renderLists=gt,R.shadowMap=Pt,R.state=y,R.info=P}M!==Qn&&(w=new mD(M,n.width,n.height,o,a,s));let Ct=new rv(R,N);this.xr=Ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(re,Z,!1))},this.getSize=function(b){return b.set(re,Z)},this.setSize=function(b,D,G=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,Z=D,n.width=Math.floor(b*tt),n.height=Math.floor(D*tt),G===!0&&(n.style.width=b+"px",n.style.height=D+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(re*tt,Z*tt).floor()},this.setDrawingBufferSize=function(b,D,G){re=b,Z=D,tt=G,n.width=Math.floor(b*G),n.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(M===Qn){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(nt)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,D,G,B){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,D,G,B),y.viewport(nt.copy(Mt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Vt)},this.setScissor=function(b,D,G,B){b.isVector4?Vt.set(b.x,b.y,b.z,b.w):Vt.set(b,D,G,B),y.scissor(Nt.copy(Vt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){y.setScissorTest(ye=b)},this.setOpaqueSort=function(b){vt=b},this.setTransparentSort=function(b){zt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let B=0;if(b){let z=!1;if(at!==null){let xt=at.texture.format;z=g.has(xt)}if(z){let xt=at.texture.type,Tt=f.has(xt),yt=qt.getClearColor(),At=qt.getClearAlpha(),Rt=yt.r,Jt=yt.g,ee=yt.b;Tt?(_[0]=Rt,_[1]=Jt,_[2]=ee,_[3]=At,N.clearBufferuiv(N.COLOR,0,_)):(S[0]=Rt,S[1]=Jt,S[2]=ee,S[3]=At,N.clearBufferiv(N.COLOR,0,S))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Li,!1),qt.dispose(),gt.dispose(),dt.dispose(),V.dispose(),lt.dispose(),Q.dispose(),St.dispose(),it.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",vv),Ct.removeEventListener("sessionend",yv),Js.stop()};function De(b){b.preventDefault(),I_("WebGLRenderer: Context Lost."),L=!0}function pe(){I_("WebGLRenderer: Context Restored."),L=!1;let b=P.autoReset,D=Pt.enabled,G=Pt.autoUpdate,B=Pt.needsUpdate,z=Pt.type;Lt(),P.autoReset=b,Pt.enabled=D,Pt.autoUpdate=G,Pt.needsUpdate=B,Pt.type=z}function Li(b){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ji(b){let D=b.target;D.removeEventListener("dispose",Ji),xE(D)}function xE(b){SE(b),V.remove(b)}function SE(b){let D=V.get(b).programs;D!==void 0&&(D.forEach(function(G){ft.releaseProgram(G)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,B,z,xt){D===null&&(D=Ot);let Tt=z.isMesh&&z.matrixWorld.determinantAffine()<0,yt=TE(b,D,G,B,z);y.setMaterial(B,Tt);let At=G.index,Rt=1;if(B.wireframe===!0){if(At=Y.getWireframeAttribute(G),At===void 0)return;Rt=2}let Jt=G.drawRange,ee=G.attributes.position,wt=Jt.start*Rt,me=(Jt.start+Jt.count)*Rt;xt!==null&&(wt=Math.max(wt,xt.start*Rt),me=Math.min(me,(xt.start+xt.count)*Rt)),At!==null?(wt=Math.max(wt,0),me=Math.min(me,At.count)):ee!=null&&(wt=Math.max(wt,0),me=Math.min(me,ee.count));let Ke=me-wt;if(Ke<0||Ke===1/0)return;St.setup(z,B,yt,G,At);let Be,Ae=pt;if(At!==null&&(Be=ut.get(At),Ae=K,Ae.setIndex(Be)),z.isMesh)B.wireframe===!0?(y.setLineWidth(B.wireframeLinewidth*Wt()),Ae.setMode(N.LINES)):Ae.setMode(N.TRIANGLES);else if(z.isLine){let wn=B.linewidth;wn===void 0&&(wn=1),y.setLineWidth(wn*Wt()),z.isLineSegments?Ae.setMode(N.LINES):z.isLineLoop?Ae.setMode(N.LINE_LOOP):Ae.setMode(N.LINE_STRIP)}else z.isPoints?Ae.setMode(N.POINTS):z.isSprite&&Ae.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let wn=z._multiDrawStarts,bt=z._multiDrawCounts,On=z._multiDrawCount,oe=At?ut.get(At).bytesPerElement:1,_i=V.get(B).currentProgram.getUniforms();for(let Ki=0;Ki<On;Ki++)_i.setValue(N,"_gl_DrawID",Ki),Ae.render(wn[Ki]/oe,bt[Ki])}else if(z.isInstancedMesh)Ae.renderInstances(wt,Ke,z.count);else if(G.isInstancedBufferGeometry){let wn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,wn);Ae.renderInstances(wt,Ke,bt)}else Ae.render(wt,Ke)};function _v(b,D,G,B){H!==null&&b.isNodeMaterial&&H.setObject(B,b),st===!0&&Ut.setState(b,G,!1),b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,Lu(b,D,B),b.side=ks,b.needsUpdate=!0,Lu(b,D,B),b.side=Ni):Lu(b,D,B)}this.compile=function(b,D,G=null){G===null&&(G=b),H!==null&&H.renderStart(b,D,G),E=dt.get(G),E.init(D),x.push(E),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),b!==G&&b.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),st===!0&&Ut.setGlobalState(this.clippingPlanes,D),H!==null&&Pt.render(E.state.shadowsArray,G,D);let B=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let xt=z.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){let yt=xt[Tt];_v(yt,G,D,z),B.add(yt)}else _v(xt,G,D,z),B.add(xt)}),E=x.pop(),H!==null&&H.renderEnd(),B},this.compileAsync=function(b,D,G=null){let B=this.compile(b,D,G);return new Promise(z=>{function xt(){if(B.forEach(function(Tt){let At=V.get(Tt).currentProgram;(At===void 0||At.isReady())&&B.delete(Tt)}),B.size===0){z(b);return}setTimeout(xt,10)}te.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let wp=null;function ME(b){wp&&wp(b)}function vv(){Js.stop()}function yv(){Js.start()}let Js=new BT;Js.setAnimationLoop(ME),typeof self<"u"&&Js.setContext(self),this.setAnimationLoop=function(b){wp=b,Ct.setAnimationLoop(b),b===null?Js.stop():Js.start()},Ct.addEventListener("sessionstart",vv),Ct.addEventListener("sessionend",yv),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;H!==null&&H.renderStart(b,D);let G=Ct.enabled===!0&&Ct.isPresenting===!0,B=w!==null&&(at===null||G)&&w.begin(R,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(D),D=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,at),E=dt.get(b,x.length),E.init(D),E.state.textureUnits=q.getTextureUnits(),x.push(E),ot.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),et.setFromProjectionMatrix(ot,Xi,D.reversedDepth),rt=this.localClippingEnabled,st=Ut.init(this.clippingPlanes,rt),T=gt.get(b,A.length),T.init(),A.push(T),Ct.enabled===!0&&Ct.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Cp(Tt,D,-1/0,R.sortObjects)}Cp(b,D,0,R.sortObjects),T.finish(),H!==null&&H.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(vt,zt),Ht=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Ht&&qt.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ut.beginShadows();let z=E.state.shadowsArray;if(Pt.render(z,b,D),st===!0&&Ut.endShadows(),(B&&w.hasRenderPass())===!1){let Tt=T.opaque,yt=T.transmissive;if(E.setupLights(),D.isArrayCamera){let At=D.cameras;if(yt.length>0)for(let Rt=0,Jt=At.length;Rt<Jt;Rt++){let ee=At[Rt];Sv(Tt,yt,b,ee)}Ht&&qt.render(b);for(let Rt=0,Jt=At.length;Rt<Jt;Rt++){let ee=At[Rt];xv(T,b,ee,ee.viewport)}}else yt.length>0&&Sv(Tt,yt,b,D),Ht&&qt.render(b),xv(T,b,D)}at!==null&&X===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),B&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),St.resetDefaultState(),W=-1,$=null,x.pop(),x.length>0?(E=x[x.length-1],q.setTextureUnits(E.state.textureUnits),st===!0&&Ut.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,H!==null&&H.renderEnd()};function Cp(b,D,G,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(et)){B&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);let Tt=Q.update(b),yt=b.material;yt.visible&&T.push(b,Tt,yt,G,It.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(et))){let Tt=Q.update(b),yt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),It.copy(Tt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(yt)){let At=Tt.groups;for(let Rt=0,Jt=At.length;Rt<Jt;Rt++){let ee=At[Rt],wt=yt[ee.materialIndex];wt&&wt.visible&&T.push(b,Tt,wt,G,It.z,ee,D)}}else yt.visible&&T.push(b,Tt,yt,G,It.z,null,D)}}let xt=b.children;for(let Tt=0,yt=xt.length;Tt<yt;Tt++)Cp(xt[Tt],D,G,B)}function xv(b,D,G,B){let{opaque:z,transmissive:xt,transparent:Tt}=b;E.setupLightsView(G),st===!0&&Ut.setGlobalState(R.clippingPlanes,G),B&&y.viewport(nt.copy(B)),z.length>0&&Uu(z,D,G),xt.length>0&&Uu(xt,D,G),Tt.length>0&&Uu(Tt,D,G),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Sv(b,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let wt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new Kn(1,1,{generateMipmaps:!0,type:wt?Yi:Qn,minFilter:Ws,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let xt=E.state.transmissionRenderTarget[B.id],Tt=B.viewport||nt;xt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),At=R.getActiveCubeFace(),Rt=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(ce),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),Ht&&qt.render(G);let Jt=R.toneMapping;R.toneMapping=Wi;let ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),st===!0&&Ut.setGlobalState(R.clippingPlanes,B),Uu(b,G,B),q.updateMultisampleRenderTarget(xt),q.updateRenderTargetMipmap(xt),te.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let me=0,Ke=D.length;me<Ke;me++){let Be=D[me],{object:Ae,geometry:wn,material:bt,group:On}=Be;if(bt.side===Ni&&Ae.layers.test(B.layers)){let oe=bt.side;bt.side=An,bt.needsUpdate=!0,Mv(Ae,G,B,wn,bt,On),bt.side=oe,bt.needsUpdate=!0,wt=!0}}wt===!0&&(q.updateMultisampleRenderTarget(xt),q.updateRenderTargetMipmap(xt))}R.setRenderTarget(yt,At,Rt),R.setClearColor(ce,$t),ee!==void 0&&(B.viewport=ee),R.toneMapping=Jt}function Uu(b,D,G){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,xt=b.length;z<xt;z++){let Tt=b[z],{object:yt,geometry:At,group:Rt}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&B!==null&&(Jt=B),yt.layers.test(G.layers)&&Mv(yt,D,G,At,Jt,Rt)}}function Mv(b,D,G,B,z,xt){H!==null&&z.isNodeMaterial&&H.setObject(b,z),b.onBeforeRender(R,D,G,B,z,xt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(R,D,G,B,b,xt),z.transparent===!0&&z.side===Ni&&z.forceSinglePass===!1?(z.side=An,z.needsUpdate=!0,R.renderBufferDirect(G,D,B,z,b,xt),z.side=ks,z.needsUpdate=!0,R.renderBufferDirect(G,D,B,z,b,xt),z.side=Ni):R.renderBufferDirect(G,D,B,z,b,xt),b.onAfterRender(R,D,G,B,z,xt)}function Lu(b,D,G){D.isScene!==!0&&(D=Ot);let B=V.get(b),z=E.state.lights,xt=E.state.shadowsArray,Tt=z.state.version,yt=ft.getParameters(b,z.state,xt,D,G,E.state.lightProbeGridArray),At=ft.getProgramCacheKey(yt),Rt=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=lt.get(b.envMap||B.environment,Jt),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",Ji),Rt=new Map,B.programs=Rt);let ee=Rt.get(At);if(ee!==void 0){if(B.currentProgram===ee&&B.lightsStateVersion===Tt)return Tv(b,yt),ee}else yt.uniforms=ft.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,G,yt),b.onBeforeCompile(yt,R),ee=ft.acquireProgram(yt,At),Rt.set(At,ee),B.uniforms=yt.uniforms;let wt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=Ut.uniform),Tv(b,yt),B.needsLights=AE(b),B.lightsStateVersion=Tt,B.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.sunLights.value=z.state.sun,wt.sunLightShadows.value=z.state.sunShadow,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.sunShadowMatrix.value=z.state.sunShadowMatrix,wt.sunShadowCascade.value=z.state.sunShadowCascade,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=ee,B.uniformsList=null,ee}function bv(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=xl.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Tv(b,D){let G=V.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function bE(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let G=0,B=b.length;G<B;G++){let z=b[G];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function TE(b,D,G,B,z){D.isScene!==!0&&(D=Ot),q.resetTextureUnits();let xt=D.fog,Tt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,yt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:se.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=lt.get(B.envMap||Tt,At),Jt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ee=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!G.morphAttributes.position,me=!!G.morphAttributes.normal,Ke=!!G.morphAttributes.color,Be=Wi;B.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Be=R.toneMapping);let Ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wn=Ae!==void 0?Ae.length:0,bt=V.get(B),On=E.state.lights;if(st===!0&&(rt===!0||b!==$)){let Ue=b===$&&B.id===W;Ut.setState(B,b,Ue)}let oe=!1;B.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==On.state.version||bt.outputColorSpace!==yt||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==Rt||B.fog===!0&&bt.fog!==xt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Ut.numPlanes||bt.numIntersection!==Ut.numIntersection)||bt.vertexAlphas!==Jt||bt.vertexTangents!==ee||bt.morphTargets!==wt||bt.morphNormals!==me||bt.morphColors!==Ke||bt.toneMapping!==Be||bt.morphTargetsCount!==wn||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,bt.__version=B.version);let _i=bt.currentProgram;oe===!0&&(_i=Lu(B,D,z),H&&B.isNodeMaterial&&H.onUpdateProgram(B,_i,bt));let Ki=!1,ja=!1,Vr=!1,Te=_i.getUniforms(),Ze=bt.uniforms;if(y.useProgram(_i.program)&&(Ki=!0,ja=!0,Vr=!0),B.id!==W&&(W=B.id,ja=!0),bt.needsLights){let Ue=bE(E.state.lightProbeGridArray,z);bt.lightProbeGrid!==Ue&&(bt.lightProbeGrid=Ue,ja=!0)}if(Ki||$!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Te.setValue(N,"projectionMatrix",b.projectionMatrix),Te.setValue(N,"viewMatrix",b.matrixWorldInverse);let $a=Te.map.cameraPosition;$a!==void 0&&$a.setValue(N,ht.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Te.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Te.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,ja=!0,Vr=!0)}if(bt.needsLights&&(On.state.sunShadowMap.length>0&&Te.setValue(N,"sunShadowMap",On.state.sunShadowMap,q),On.state.directionalShadowMap.length>0&&Te.setValue(N,"directionalShadowMap",On.state.directionalShadowMap,q),On.state.spotShadowMap.length>0&&Te.setValue(N,"spotShadowMap",On.state.spotShadowMap,q),On.state.pointShadowMap.length>0&&Te.setValue(N,"pointShadowMap",On.state.pointShadowMap,q)),z.isSkinnedMesh){Te.setOptional(N,z,"bindMatrix"),Te.setOptional(N,z,"bindMatrixInverse");let Ue=z.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Te.setValue(N,"boneTexture",Ue.boneTexture,q))}z.isBatchedMesh&&(Te.setOptional(N,z,"batchingTexture"),Te.setValue(N,"batchingTexture",z._matricesTexture,q),Te.setOptional(N,z,"batchingIdTexture"),Te.setValue(N,"batchingIdTexture",z._indirectTexture,q),Te.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Te.setValue(N,"batchingColorTexture",z._colorsTexture,q));let Qa=G.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0)&&U.update(z,G,_i),(ja||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,Te.setValue(N,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ze.envMapIntensity.value=D.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=eL()),ja){if(Te.setValue(N,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&EE(Ze,Vr),xt&&B.fog===!0&&Dt.refreshFogUniforms(Ze,xt),Dt.refreshMaterialUniforms(Ze,B,tt,Z,E.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.lightProbeGrid){let Ue=bt.lightProbeGrid;Ze.probesSH.value=Ue.texture,Ze.probesMin.value.copy(Ue.boundingBox.min),Ze.probesMax.value.copy(Ue.boundingBox.max),Ze.probesResolution.value.copy(Ue.resolution)}xl.upload(N,bv(bt),Ze,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xl.upload(N,bv(bt),Ze,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Te.setValue(N,"center",z.center),Te.setValue(N,"modelViewMatrix",z.modelViewMatrix),Te.setValue(N,"normalMatrix",z.normalMatrix),Te.setValue(N,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ue=B.uniformsGroups;for(let $a=0,Hr=Ue.length;$a<Hr;$a++){let Av=Ue[$a];it.update(Av,_i),it.bind(Av,_i)}}return _i}function EE(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function AE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,D,G){let B=V.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=D,V.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=V.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){at=b,J=D,X=G;let B=null,z=!1,xt=!1;if(b){let yt=V.get(b);if(yt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,yt.__webglFramebuffer),nt.copy(b.viewport),Nt.copy(b.scissor),Et=b.scissorTest,y.viewport(nt),y.scissor(Nt),y.setScissorTest(Et),W=-1;return}else if(yt.__webglFramebuffer===void 0)q.setupRenderTarget(b);else if(yt.__hasExternalTextures)q.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Jt=b.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&V.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(xt=!0);let Rt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Rt[D])?B=Rt[D][G]:B=Rt[D],z=!0):b.samples>0&&q.useMultisampledRTT(b)===!1?B=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[G]:B=Rt,nt.copy(b.viewport),Nt.copy(b.scissor),Et=b.scissorTest}else nt.copy(Mt).multiplyScalar(tt).floor(),Nt.copy(Vt).multiplyScalar(tt).floor(),Et=ye;if(G!==0&&(B=k),y.bindFramebuffer(N.FRAMEBUFFER,B)&&y.drawBuffers(b,B),y.viewport(nt),y.scissor(Nt),y.setScissorTest(Et),z){let yt=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,G)}else if(xt){let yt=D;for(let At=0;At<b.textures.length;At++){let Rt=V.get(b.textures[At]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+At,Rt.__webglTexture,G,yt)}}else if(b!==null&&G!==0){let yt=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,G)}W=-1};function Ev(b){let D=V.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=C.textureFormatReadable(b.format),D.__typeReadable=C.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,G,B,z,xt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){y.bindFramebuffer(N.FRAMEBUFFER,At);try{let Rt=b.textures[yt],Jt=Rt.format,ee=Rt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let wt=Ev(Rt);if(wt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-B&&G>=0&&G<=b.height-z&&N.readPixels(D,G,B,z,mt.convert(Jt),mt.convert(ee),xt)}finally{let Rt=at!==null?V.get(at).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,B,z,xt,Tt,yt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(D>=0&&D<=b.width-B&&G>=0&&G<=b.height-z){y.bindFramebuffer(N.FRAMEBUFFER,At);let Rt=b.textures[yt],Jt=Rt.format,ee=Rt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let wt=Ev(Rt);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,xt.byteLength,N.STREAM_READ),N.readPixels(D,G,B,z,mt.convert(Jt),mt.convert(ee),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ke=at!==null?V.get(at).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Ke);let Be=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rT(N,Be,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(me),N.deleteSync(Be),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,G=0){let B=Math.pow(2,-G),z=Math.floor(b.image.width*B),xt=Math.floor(b.image.height*B),Tt=D!==null?D.x:0,yt=D!==null?D.y:0;q.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,Tt,yt,z,xt),y.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,B=null,z=0,xt=0){let Tt,yt,At,Rt,Jt,ee,wt,me,Ke,Be=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(G!==null)Tt=G.max.x-G.min.x,yt=G.max.y-G.min.y,At=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,Jt=G.min.y,ee=G.isBox3?G.min.z:0;else{let Ze=Math.pow(2,-z);Tt=Math.floor(Be.width*Ze),yt=Math.floor(Be.height*Ze),b.isDataArrayTexture?At=Be.depth:b.isData3DTexture?At=Math.floor(Be.depth*Ze):At=1,Rt=0,Jt=0,ee=0}B!==null?(wt=B.x,me=B.y,Ke=B.z):(wt=0,me=0,Ke=0);let Ae=mt.convert(D.format),wn=mt.convert(D.type),bt;D.isData3DTexture?(q.setTexture3D(D,0),bt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),bt=N.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),bt=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let On=y.getParameter(N.UNPACK_ROW_LENGTH),oe=y.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=y.getParameter(N.UNPACK_SKIP_PIXELS),Ki=y.getParameter(N.UNPACK_SKIP_ROWS),ja=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,Be.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),y.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);let Vr=b.isDataArrayTexture||b.isData3DTexture,Te=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Ze=V.get(b),Qa=V.get(D),Ue=V.get(Ze.__renderTarget),$a=V.get(Qa.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,Ue.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,$a.__webglFramebuffer);for(let Hr=0;Hr<At;Hr++)Vr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(b).__webglTexture,z,ee+Hr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(D).__webglTexture,xt,Ke+Hr)),N.blitFramebuffer(Rt,Jt,Tt,yt,wt,me,Tt,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||V.has(b)){let Ze=V.get(b),Qa=V.get(D);y.bindFramebuffer(N.READ_FRAMEBUFFER,I),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let Ue=0;Ue<At;Ue++)Vr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,z,ee+Ue):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,z),Te?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qa.__webglTexture,xt,Ke+Ue):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qa.__webglTexture,xt),z!==0?N.blitFramebuffer(Rt,Jt,Tt,yt,wt,me,Tt,yt,N.COLOR_BUFFER_BIT,N.NEAREST):Te?N.copyTexSubImage3D(bt,xt,wt,me,Ke+Ue,Rt,Jt,Tt,yt):N.copyTexSubImage2D(bt,xt,wt,me,Rt,Jt,Tt,yt);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(bt,xt,wt,me,Ke,Tt,yt,At,Ae,wn,Be.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,xt,wt,me,Ke,Tt,yt,At,Ae,Be.data):N.texSubImage3D(bt,xt,wt,me,Ke,Tt,yt,At,Ae,wn,Be):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xt,wt,me,Tt,yt,Ae,wn,Be.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xt,wt,me,Be.width,Be.height,Ae,Be.data):N.texSubImage2D(N.TEXTURE_2D,xt,wt,me,Tt,yt,Ae,wn,Be);y.pixelStorei(N.UNPACK_ROW_LENGTH,On),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),y.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),y.pixelStorei(N.UNPACK_SKIP_ROWS,Ki),y.pixelStorei(N.UNPACK_SKIP_IMAGES,ja),xt===0&&D.generateMipmaps&&N.generateMipmap(bt),y.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?q.setTextureCube(b,0):b.isData3DTexture?q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?q.setTexture2DArray(b,0):q.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){J=0,X=0,at=null,y.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),n.unpackColorSpace=se._getUnpackColorSpace()}};var Mp=class extends Ar{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Sa;t.deleteAttribute("uv");let n=new Lr({side:An}),i=new Lr,a=new mu(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);let s=new ve(t,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new Jc(t,i,6),o=new En;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new ve(t,bl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ve(t,bl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ve(t,bl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let p=new ve(t,bl(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let u=new ve(t,bl(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ve(t,bl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(let n of t)n.dispose()}};function bl(e){return new uu({color:0,emissive:16777215,emissiveIntensity:e})}function bp(e){let t=[];for(let n=0;n<96;n++){let i=n/96*Math.PI*2;t.push(e(i))}return t}var WT=(e,t,n)=>i=>{let a=Math.cos(i),s=Math.sin(i);return[e*Math.sign(a)*Math.abs(a)**(2/n),t*Math.sign(s)*Math.abs(s)**(2/n)]};function Zs(e,t){let i=t/50/2;switch(e){case"rectangular":return bp(WT(i,i*.7,4.2));case"aviador":return bp(a=>{let s=Math.cos(a),r=Math.sin(a);return r>=0?[i*Math.sign(s)*Math.abs(s)**.8,i*.5*r**1.4+i*.12]:[i*s+i*.26*-r*(.5+.5*s),i*1.12*r+i*.12]});case"gato":return bp(a=>{let[s,r]=WT(i,i*.6,2.6)(a),o=Math.sin(a),l=Math.max(0,-s/i),c=Math.max(0,s/i);return o>0?[s-i*.12*l**2*o,r+i*.55*l**2.5*o]:[s,r*(1-.3*c)]});default:return bp(a=>[i*Math.cos(a),i*.94*Math.sin(a)])}}function qT(e,t){let n=e.length;return e.map((i,a)=>{let s=e[(a-1+n)%n],r=e[(a+1)%n],o=r[0]-s[0],l=r[1]-s[1],c=Math.hypot(o,l)||1;return[i[0]+l/c*t,i[1]-o/c*t]})}function Tl(e){let t=e.map(i=>i[0]),n=e.map(i=>i[1]);return{minX:Math.min(...t),maxX:Math.max(...t),minY:Math.min(...n),maxY:Math.max(...n)}}function El(e,t=1,n=0,i=0,a=!1){return e.map(([s,r],o)=>`${o?"L":"M"}${((a?-s:s)*t+n).toFixed(2)},${(-r*t+i).toFixed(2)}`).join(" ")+" Z"}var gi={redondo:{nombre:"Redondo",medidas:{lente:48,puente:21,patilla:145}},rectangular:{nombre:"Rectangular",medidas:{lente:54,puente:18,patilla:145}},aviador:{nombre:"Aviador",medidas:{lente:58,puente:14,patilla:140}},gato:{nombre:"Ojo de gato",medidas:{lente:53,puente:17,patilla:140}}},Fr={negro:{nombre:"Negro",color:"#08090a",metal:!1,rugosidad:.35},carey:{nombre:"Carey",color:"#6b3a1c",metal:!1,rugosidad:.25,carey:!0},dorado:{nombre:"Dorado",color:"#c9a35a",metal:!0,rugosidad:.22},cristal:{nombre:"Transparente",color:"#dfe7ea",metal:!1,rugosidad:.08,translucido:!0},oliva:{nombre:"Verde oliva",color:"#4d5a3a",metal:!1,rugosidad:.4}},Al={receta:{nombre:"Transparente",uso:"receta",color:"#e8f4f6",opacidad:.14,espejo:!1},gris:{nombre:"Sol gris",uso:"sol",color:"#2b2f33",opacidad:.82,espejo:!1},verde:{nombre:"Sol verde",uso:"sol",color:"#2f4a33",opacidad:.8,espejo:!1},marron:{nombre:"Sol marr\xF3n",uso:"sol",color:"#5a3a22",opacidad:.75,espejo:!1},espejado:{nombre:"Espejado azul",uso:"sol",color:"#2a6fb0",opacidad:.9,espejo:!0}},YT={forma:"redondo",armazon:"carey",cristal:"receta"};function ZT({forma:e,armazon:t,cristal:n}){let i=Al[n];return`\xA1Hola Miravista! Vi su p\xE1gina y me gustaron unos anteojos ${i.uso==="sol"?`de sol con cristal ${i.nombre.replace("Sol ","").toLowerCase()}`:"para receta"}, forma ${gi[e].nombre.toLowerCase()} y armaz\xF3n ${Fr[t].nombre.toLowerCase()}. \xBFTienen algo parecido?`}var JT=[{id:"clasico-carey",titulo:"Redondo carey",uso:"receta",forma:"redondo",armazon:"carey",cristal:"receta"},{id:"ejecutivo",titulo:"Rectangular negro",uso:"receta",forma:"rectangular",armazon:"negro",cristal:"receta"},{id:"gato-cristal",titulo:"Ojo de gato transparente",uso:"receta",forma:"gato",armazon:"cristal",cristal:"receta"},{id:"aviador-verde",titulo:"Aviador dorado, cristal verde",uso:"sol",forma:"aviador",armazon:"dorado",cristal:"verde"},{id:"redondo-espejo",titulo:"Redondo dorado, espejado",uso:"sol",forma:"redondo",armazon:"dorado",cristal:"espejado"},{id:"gato-sol",titulo:"Ojo de gato carey, cristal marr\xF3n",uso:"sol",forma:"gato",armazon:"carey",cristal:"marron"},{id:"rect-oliva",titulo:"Rectangular oliva, cristal gris",uso:"sol",forma:"rectangular",armazon:"oliva",cristal:"gris"},{id:"redondo-negro",titulo:"Redondo negro",uso:"receta",forma:"redondo",armazon:"negro",cristal:"receta"}],ov={ovalada:{nombre:"Ovalada",consejo:"Tiene proporciones equilibradas, as\xED que le quedan bien casi todas las formas. Busc\xE1 un armaz\xF3n igual o un poco m\xE1s ancho que la parte m\xE1s ancha de tu cara.",formas:["rectangular","redondo","aviador","gato"]},redonda:{nombre:"Redonda",consejo:"Los armazones angulosos, m\xE1s anchos que altos, estilizan la cara y suman l\xEDneas rectas a las curvas.",formas:["rectangular","gato"]},cuadrada:{nombre:"Cuadrada",consejo:"Con mand\xEDbula marcada, los armazones curvos o redondeados suavizan los \xE1ngulos.",formas:["redondo","aviador"]},corazon:{nombre:"Coraz\xF3n",consejo:"Frente ancha y ment\xF3n angosto: van bien los armazones m\xE1s anchos abajo, como el aviador, o los livianos y transparentes.",formas:["aviador","redondo"]},alargada:{nombre:"Alargada",consejo:"Los armazones m\xE1s altos que angostos acortan visualmente la cara, y los detalles en los costados le dan ancho.",formas:["redondo","gato","aviador"]}};var Ka=null;function nL(){if(Ka)return Ka;let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#3a1d0c",t.fillRect(0,0,256,256);let n=7,i=()=>(n=n*16807%2147483647)/2147483647;for(let a=0;a<90;a++){let s=i()*256,r=i()*256,o=6+i()*26,l=t.createRadialGradient(s,r,0,s,r,o),c=i()>.5?"196,120,48":"120,60,22";l.addColorStop(0,`rgba(${c},${.35+i()*.3})`),l.addColorStop(1,`rgba(${c},0)`),t.fillStyle=l,t.beginPath(),t.ellipse(s,r,o,o*(.5+i()),i()*Math.PI,0,Math.PI*2),t.fill()}return Ka=new Cr(e),Ka.colorSpace=Mn,Ka.wrapS=Ka.wrapT=il,Ka.repeat.set(.7,.7),Ka}function iL(e){let t=Fr[e],n=new Or({color:t.carey?"#ffffff":t.color,roughness:t.rugosidad,metalness:t.metal?1:0,clearcoat:t.metal?0:.8,clearcoatRoughness:.15});return t.carey&&(n.map=nL()),t.translucido&&(n.transparent=!0,n.opacity=.5,n.depthWrite=!1),n}function aL(e){let t=Al[e];return new Or({color:t.color,transparent:!0,opacity:t.opacidad,roughness:.04,metalness:t.espejo?.95:0,envMapIntensity:t.espejo?1.6:1,side:Ni,depthWrite:!1})}var KT=e=>new Nr(e.map(([t,n])=>new ct(t,n))),sL=e=>e.map(([t,n])=>[-t,n]).reverse();function rL(e,t,n,i){let a=qT(e,t),s=KT(a);s.holes.push(new Rr(e.map(([o,l])=>new ct(o,l))));let r=new ru(s,{depth:n,bevelEnabled:!0,bevelThickness:n*.25,bevelSize:t*.25,bevelSegments:3,curveSegments:4});return r.translate(0,0,-n/2),new ve(r,i)}function lv(e,t,n){let i=new ul(e.map(a=>new O(...a)));return new ve(new cu(i,48,t,12,!1),n)}function jT({forma:e,armazon:t,cristal:n}){let i=new Ri,{lente:a,puente:s,patilla:r}=gi[e].medidas,o=Fr[t].metal,l=o?.032:.058,c=o?.04:.09,h=iL(t),p=aL(n),u=Zs(e,a),d=Tl(u),m=s/100,M=m+d.maxX;for(let _ of[-1,1]){let S=_===-1?u:sL(u),v=new Ri;v.position.x=_*M,v.add(rL(S,l,c,h));let T=new ve(new ou(KT(S),6),p);v.add(T),i.add(v);let E=_*(M+d.maxX+l*.6),A=d.maxY*.55,x=new ve(new Sa(.08,.14,.16),h);x.position.set(E,A,-.04),i.add(x);let w=r/50;if(i.add(lv([[E,A,-.1],[E+_*.04,A,-w*.35],[E+_*.06,A-.03,-w*.8],[E+_*.05,A-.3,-w]],o?.022:.04,h)),o){let R=new ve(new lu(.06,16,12),new Or({color:"#e9eef0",transparent:!0,opacity:.6,roughness:.1}));R.scale.set(.6,1,.4),R.position.set(_*(m+.04),d.minY*.15,.12),i.add(R)}}let g=d.maxY*.42,f=m+.02;if(i.add(lv([[-f,g,0],[0,g+.08,.02],[f,g,0]],o?.024:.05,h)),e==="aviador"){let _=d.maxY*.98;i.add(lv([[-f-.2,_,0],[0,_+.02,.02],[f+.2,_,0]],.02,h))}return i}function cv(e){e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.map!==Ka&&i.dispose())})}var uv={frente:{y:0,x:.05},tresCuartos:{y:-.6,x:.12},perfil:{y:-Math.PI/2+.05,x:.05}};function QT(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var Tp=class{constructor(t,{autoGiro:n=!0,alPrimerCuadro:i}={}){this.contenedor=t,this.renderer=new yp({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=vu,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Mn,t.appendChild(this.renderer.domElement),this.escena=new Ar;let a=new Sl(this.renderer);this.escena.environment=a.fromScene(new Mp,.04).texture;let s=new gu("#ffffff",1.4);s.position.set(2,4,5),this.escena.add(s),this.camara=new bn(28,1,.1,50),this.camara.position.set(0,.25,6),this.camara.lookAt(0,-.1,-.6),this.pivote=new Ri,this.pivote.position.z=-.4,this.escena.add(this.pivote),this.escena.add(this.sombra()),this.rot={...uv.tresCuartos},this.objetivo={...uv.tresCuartos},this.autoGiro=n&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.ultimoToque=0,this.alPrimerCuadro=i,this.ajustar=this.ajustar.bind(this),this.cuadro=this.cuadro.bind(this),this.ro=new ResizeObserver(this.ajustar),this.ro.observe(t),this.ajustar(),this.arrastre(),this.raf=requestAnimationFrame(this.cuadro)}sombra(){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(0,0,0,0.45)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);let a=new ve(new Ur(4.2,2.2),new wr({map:new Cr(t),transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.set(0,-1.05,-1),a}configurar(t){this.anteojos&&(this.pivote.remove(this.anteojos),cv(this.anteojos)),this.anteojos=jT(t),this.pivote.add(this.anteojos)}vista(t){this.objetivo={...uv[t]},this.ultimoToque=performance.now()}girar(t,n=0){this.objetivo.y+=t,this.objetivo.x=Math.max(-.5,Math.min(.6,this.objetivo.x+n)),this.ultimoToque=performance.now()}arrastre(){let t=this.renderer.domElement,n=null;t.style.touchAction="pan-y",t.addEventListener("pointerdown",a=>{n={x:a.clientX,y:a.clientY},t.setPointerCapture(a.pointerId)}),t.addEventListener("pointermove",a=>{n&&(this.girar((a.clientX-n.x)*.01,(a.clientY-n.y)*.006),n={x:a.clientX,y:a.clientY})});let i=()=>n=null;t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i)}ajustar(){let{clientWidth:t,clientHeight:n}=this.contenedor;!t||!n||(this.renderer.setSize(t,n,!1),this.camara.aspect=t/n,this.camara.position.z=6*Math.min(Math.max(1.45/(t/n),1),2.2),this.camara.updateProjectionMatrix())}cuadro(t){this.raf=requestAnimationFrame(this.cuadro),this.autoGiro&&t-this.ultimoToque>4e3&&(this.objetivo.y+=.004),this.rot.y+=(this.objetivo.y-this.rot.y)*.12,this.rot.x+=(this.objetivo.x-this.rot.x)*.12,this.pivote.rotation.set(this.rot.x,this.rot.y,0),this.renderer.render(this.escena,this.camara),this.alPrimerCuadro&&(this.alPrimerCuadro(),this.alPrimerCuadro=null)}capturar(t="image/webp"){return this.rot={...this.objetivo},this.pivote.rotation.set(this.rot.x,this.rot.y,0),this.renderer.render(this.escena,this.camara),this.renderer.domElement.toDataURL(t,.9)}destruir(){cancelAnimationFrame(this.raf),this.ro.disconnect(),this.anteojos&&cv(this.anteojos),this.renderer.dispose(),this.renderer.domElement.remove()}};var oL=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function $T(e,t){return`https://wa.me/${e}?text=${encodeURIComponent(t)}`}function Ep(e){window.dispatchEvent(new CustomEvent("gafas:probar",{detail:e})),document.getElementById("probador")?.scrollIntoView({behavior:oL()?"auto":"smooth"})}var aE=je(es(),1);var Ge=je(Hn(),1),iE={lente:"Ancho de cada cristal, en mil\xEDmetros.",puente:"Distancia entre los dos cristales, donde apoya la nariz.",patilla:"Largo de la patilla, desde la bisagra hasta la punta."};function sE({forma:e}){let[t,n]=(0,aE.useState)("lente"),{lente:i,puente:a,patilla:s}=gi[e].medidas,r=2,o=Zs(e,i),l=Tl(o),c=(l.maxX-l.minX)*50*r,h=(l.maxY-l.minY)*50*r,p=a*r/2,u=170,d=u-p-c/2,m=u+p+c/2,M=30+l.maxY*50*r,g=50*r,f=M+-l.minY*g+22;return(0,Ge.jsxs)("div",{className:"medidas",children:[(0,Ge.jsx)("p",{className:"medidas__titulo",children:"As\xED se leen las medidas"}),(0,Ge.jsx)("p",{className:"medidas__codigo","aria-label":`Medidas de referencia: cristal ${i}, puente ${a}, patilla ${s} mil\xEDmetros`,children:["lente","puente","patilla"].map((_,S)=>(0,Ge.jsxs)("button",{type:"button",className:`medidas__num${t===_?" is-activa":""}`,"aria-pressed":t===_,onClick:()=>n(_),onMouseEnter:()=>n(_),onFocus:()=>n(_),children:[{lente:i,puente:a,patilla:s}[_],S===0&&(0,Ge.jsx)("span",{className:"medidas__sep","aria-hidden":"true",children:"\u25A1"})]},_))}),(0,Ge.jsxs)("svg",{className:"medidas__plano",viewBox:"0 0 340 200",role:"img","aria-label":`Plano frontal: ${iE[t]}`,children:[(0,Ge.jsx)("path",{className:"medidas__contorno",d:El(o,g,d-(l.maxX+l.minX)/2*g,M)}),(0,Ge.jsx)("path",{className:"medidas__contorno",d:El(o,g,m+(l.maxX+l.minX)/2*g,M,!0)}),(0,Ge.jsxs)("g",{className:`medidas__cota${t==="lente"?" is-activa":""}`,children:[(0,Ge.jsx)("line",{x1:d-c/2,x2:d+c/2,y1:f,y2:f}),(0,Ge.jsx)("line",{x1:d-c/2,x2:d-c/2,y1:f-6,y2:f+6}),(0,Ge.jsx)("line",{x1:d+c/2,x2:d+c/2,y1:f-6,y2:f+6}),(0,Ge.jsxs)("text",{x:d,y:f+20,textAnchor:"middle",children:[i," mm"]})]}),(0,Ge.jsxs)("g",{className:`medidas__cota${t==="puente"?" is-activa":""}`,children:[(0,Ge.jsx)("line",{x1:u-p,x2:u+p,y1:20,y2:20}),(0,Ge.jsx)("line",{x1:u-p,x2:u-p,y1:14,y2:26}),(0,Ge.jsx)("line",{x1:u+p,x2:u+p,y1:14,y2:26}),(0,Ge.jsxs)("text",{x:u,y:12,textAnchor:"middle",children:[a," mm"]})]}),(0,Ge.jsxs)("g",{className:`medidas__cota${t==="patilla"?" is-activa":""}`,children:[(0,Ge.jsx)("line",{x1:m+c/2+6,x2:336,y1:M-h*.2,y2:M-h*.2}),(0,Ge.jsxs)("text",{x:334,y:M-h*.2-8,textAnchor:"end",children:[s," mm"]})]})]}),(0,Ge.jsxs)("p",{className:"medidas__ayuda","aria-live":"polite",children:[iE[t]," Son medidas t\xEDpicas de esta forma: cada armaz\xF3n trae las suyas grabadas en la patilla."]})]})}var hv=je(Hn(),1);function rE(){return(0,hv.jsx)("svg",{className:"icono-wa",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:(0,hv.jsx)("path",{fill:"currentColor",d:"M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.2-1.4-.6-.5-1-1.1-1.2-1.6-.1-.2 0-.4.1-.5l.4-.4.3-.4v-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 4 3.5 1.4.6 2 .7 2.7.6.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1l-.5-.3z"})})}var be=je(Hn(),1);function fv({titulo:e,nombre:t,opciones:n,valor:i,alCambiar:a,muestra:s}){return(0,be.jsxs)("fieldset",{className:"opciones",children:[(0,be.jsx)("legend",{children:e}),(0,be.jsx)("div",{className:"opciones__lista",children:Object.entries(n).map(([r,o])=>(0,be.jsxs)("label",{className:`opcion${i===r?" is-elegida":""}`,children:[(0,be.jsx)("input",{type:"radio",name:t,value:r,checked:i===r,onChange:()=>a(r)}),s&&(0,be.jsx)("span",{className:`opcion__muestra opcion__muestra--${t}-${r}`,"aria-hidden":"true"}),(0,be.jsx)("span",{children:o.nombre})]},r))})]})}function oE({whatsapp:e,foto:t}){let[n,i]=(0,Ea.useState)(YT),[a,s]=(0,Ea.useState)("cargando"),r=(0,Ea.useRef)(null),o=(0,Ea.useRef)(null);(0,Ea.useEffect)(()=>{if(!QT()){s("error");return}try{o.current=new Tp(r.current,{alPrimerCuadro:()=>s("listo")}),o.current.configurar(n)}catch{s("error")}return()=>o.current?.destruir()},[]),(0,Ea.useEffect)(()=>{o.current?.configurar(n)},[n]),(0,Ea.useEffect)(()=>{let p=u=>i(d=>({...d,...u.detail}));return window.addEventListener("gafas:probar",p),()=>window.removeEventListener("gafas:probar",p)},[]);let l=p=>{let u={ArrowLeft:[-.25,0],ArrowRight:[.25,0],ArrowUp:[0,-.12],ArrowDown:[0,.12]};!u[p.key]||!o.current||(p.preventDefault(),o.current.girar(...u[p.key]))},c=p=>u=>i(d=>({...d,[p]:u})),h=`${gi[n.forma].nombre}, armaz\xF3n ${Fr[n.armazon].nombre.toLowerCase()}, cristal ${Al[n.cristal].nombre.toLowerCase()}`;return(0,be.jsxs)("div",{className:"probador",children:[(0,be.jsxs)("div",{className:"probador__escenario",children:[(0,be.jsx)("div",{className:"probador__lienzo",ref:r,tabIndex:a==="listo"?0:-1,role:"img","aria-label":`Anteojos en 3D: ${h}. Arrastr\xE1 o us\xE1 las flechas del teclado para girarlos.`,onKeyDown:l}),a==="cargando"&&(0,be.jsx)("p",{className:"probador__aviso",role:"status",children:"Preparando el probador 3D\u2026"}),a==="error"&&(0,be.jsxs)("div",{className:"probador__aviso probador__aviso--error",role:"status",children:[(0,be.jsx)("img",{src:t,alt:"Anteojos redondos de carey",width:"450",height:"320"}),(0,be.jsx)("p",{children:"Tu navegador no puede mostrar el modelo 3D. Igual pod\xE9s elegir las opciones y consultarnos por WhatsApp."})]}),a==="listo"&&(0,be.jsxs)("div",{className:"probador__vistas",role:"group","aria-label":"Cambiar la vista",children:[(0,be.jsx)("button",{type:"button",onClick:()=>o.current.vista("frente"),children:"Frente"}),(0,be.jsx)("button",{type:"button",onClick:()=>o.current.vista("tresCuartos"),children:"3/4"}),(0,be.jsx)("button",{type:"button",onClick:()=>o.current.vista("perfil"),children:"Perfil"})]}),(0,be.jsx)("p",{className:"probador__pista","aria-hidden":"true",children:"Arrastr\xE1 para girar"})]}),(0,be.jsxs)("div",{className:"probador__panel",children:[(0,be.jsx)(fv,{titulo:"Forma",nombre:"forma",opciones:gi,valor:n.forma,alCambiar:c("forma")}),(0,be.jsx)(fv,{titulo:"Armaz\xF3n",nombre:"armazon",opciones:Fr,valor:n.armazon,alCambiar:c("armazon"),muestra:!0}),(0,be.jsx)(fv,{titulo:"Cristal",nombre:"cristal",opciones:Al,valor:n.cristal,alCambiar:c("cristal"),muestra:!0}),(0,be.jsx)(sE,{forma:n.forma}),(0,be.jsxs)("a",{className:"boton boton--wa probador__consultar",href:$T(e,ZT(n)),target:"_blank",rel:"noopener",children:[(0,be.jsx)(rE,{}),"Consultar por estos anteojos"]}),(0,be.jsx)("p",{className:"probador__nota",children:"Son modelos de referencia. En el local te mostramos los armazones reales que se parecen a tu elecci\xF3n."})]})]})}var Zi=je(es(),1);function dv(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function pv(e,t,n,{brillo:i=1}={}){let a=e.createLinearGradient(0,0,0,n*.5);a.addColorStop(0,"#6fa9d6"),a.addColorStop(1,"#d9ecf5"),e.fillStyle=a,e.fillRect(0,0,t,n*.5),e.fillStyle="#fff6d6",e.beginPath(),e.arc(t*.52,n*.16,n*.07,0,Math.PI*2),e.fill();let s=dv(11);e.fillStyle="#2f5a3a",e.beginPath(),e.moveTo(0,n*.5);for(let o=0;o<=t;o+=t/24)e.lineTo(o,n*(.4+s()*.06));e.lineTo(t,n*.5),e.fill();let r=e.createLinearGradient(0,n*.5,0,n);if(r.addColorStop(0,"#4b86a8"),r.addColorStop(1,"#1f4d66"),e.fillStyle=r,e.fillRect(0,n*.5,t,n*.5),i>0){let o=dv(5);e.save(),e.globalAlpha=i;let l=e.createLinearGradient(t*.32,0,t*.72,0);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.5,"rgba(255,255,255,0.75)"),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.fillRect(t*.32,n*.5,t*.4,n*.5),e.fillStyle="#ffffff";for(let c=0;c<220;c++){let h=n*.52+o()*n*.46,p=t*.52+(o()-.5)*t*(.2+h/n*.5);e.globalAlpha=i*(.4+o()*.6),e.beginPath(),e.ellipse(p,h,4+o()*14,1+o()*2,0,0,Math.PI*2),e.fill()}e.restore()}e.fillStyle="#d7d2c4",e.fillRect(0,n*.86,t,n*.03);for(let o=t*.03;o<t;o+=t/14)e.fillRect(o,n*.86,t*.008,n*.14)}function lE(e,t,n,{reflejos:i=!0}={}){let a=e.createLinearGradient(0,0,0,n);a.addColorStop(0,"#0b1420"),a.addColorStop(1,"#1a2533"),e.fillStyle=a,e.fillRect(0,0,t,n);let s=dv(3);e.fillStyle="#05090f";for(let o=0;o<t;o+=t/9){let l=n*(.25+s()*.3);e.fillRect(o,n*.62-l,t/9-4,l)}e.fillStyle="#20262e",e.fillRect(0,n*.62,t,n*.38);let r=[];for(let o=0;o<6;o++)r.push([t*(.08+o*.17),n*.3,"#ffc46b",1]);r.push([t*.42,n*.78,"#fff4d8",1.6],[t*.52,n*.78,"#fff4d8",1.6]);for(let[o,l,c,h]of r){let p=(i?46:16)*h*(t/800),u=e.createRadialGradient(o,l,0,o,l,p);u.addColorStop(0,c),u.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=u,e.beginPath(),e.arc(o,l,p,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(o,l,3*h,0,Math.PI*2),e.fill(),i&&(e.globalAlpha=.28,e.fillStyle=c,e.beginPath(),e.arc(t-o*.92,n-l*.85,6*h,0,Math.PI*2),e.fill(),e.globalAlpha=1)}i&&(e.save(),e.globalAlpha=.12,e.fillStyle="#cfe3ff",e.translate(t*.5,n*.5),e.rotate(-.5),e.fillRect(-t*.6,-n*.05,t*1.2,n*.1),e.restore())}function cE(e,t,n,{filtro:i=!1}={}){e.fillStyle="#141a22",e.fillRect(0,0,t,n);let a=e.createRadialGradient(t*.5,n*.42,0,t*.5,n*.42,t*.6);a.addColorStop(0,"rgba(120,170,255,0.35)"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(0,0,t,n);let s=t*.2,r=n*.14,o=t*.6,l=n*.55;e.fillStyle="#2a3038",e.fillRect(s-10,r-10,o+20,l+20),e.fillStyle="#f4f8ff",e.fillRect(s,r,o,l),e.fillStyle="#9aa7b6";for(let c=0;c<9;c++)e.fillRect(s+o*.08,r+l*(.12+c*.09),o*(.84-c%3*.18),l*.03);e.fillStyle="#2a3038",e.fillRect(s-30,r+l+10,o+60,n*.05),e.fillStyle="#3b2c20",e.fillRect(0,n*.82,t,n*.18),i&&(e.save(),e.globalCompositeOperation="multiply",e.fillStyle="rgba(255,226,170,0.55)",e.fillRect(0,0,t,n),e.restore())}function uE(e,t,n,i){let a=Zs("redondo",48),s=Math.min(t,n*1.6)*.17,r=n*.5;e.save();for(let o of[-1,1]){let l=t*.5+o*s*.6;e.beginPath(),a.forEach(([c,h],p)=>{let u=l+(o===-1?c:-c)*s,d=r-h*s;p?e.lineTo(u,d):e.moveTo(u,d)}),e.closePath(),e.fillStyle=`rgba(48,40,32,${i*.78})`,e.fill(),e.lineWidth=Math.max(3,s*.06),e.strokeStyle="#0d1b24",e.stroke()}e.beginPath(),e.moveTo(t*.5-s*.12,r-s*.12),e.quadraticCurveTo(t*.5,r-s*.22,t*.5+s*.12,r-s*.12),e.stroke(),e.restore()}var fe=je(Hn(),1),hE={polarizado:{nombre:"Polarizado",titulo:"Polarizado: menos encandilamiento",texto:"Filtra la luz que rebota en superficies planas como el agua, el asfalto mojado o el cap\xF3 del auto. Se ve con menos destellos y m\xE1s contraste. Es para anteojos de sol.",etiquetas:["Cristal de sol com\xFAn","Cristal polarizado"]},antirreflejo:{nombre:"Antirreflejo",titulo:"Antirreflejo: menos halos de noche",texto:"Es una capa que evita que la luz rebote en las caras del cristal. De noche se notan menos los halos y los reflejos fantasma de faroles y autos, y de frente se te ven mejor los ojos.",etiquetas:["Sin antirreflejo","Con antirreflejo"]},azul:{nombre:"Filtro azul",titulo:"Filtro de luz azul: imagen apenas m\xE1s c\xE1lida",texto:"Bloquea parte de la luz azul de las pantallas, por eso la imagen se ve un poco m\xE1s c\xE1lida. Hoy no hay pruebas firmes de que la luz azul de las pantallas da\xF1e la vista: hay quienes lo eligen por comodidad. Preguntanos si te conviene.",etiquetas:["Sin filtro","Con filtro"]},fotocromatico:{nombre:"Fotocrom\xE1tico",titulo:"Fotocrom\xE1tico: se oscurece con el sol",texto:"Es transparente adentro y se oscurece con los rayos UV del sol, aunque est\xE9 nublado. Dentro del auto casi no se oscurece, porque el parabrisas frena la mayor parte de los rayos UV."}};function fE(){let[e,t]=(0,Zi.useState)("polarizado"),[n,i]=(0,Zi.useState)(50),[a,s]=(0,Zi.useState)(70),[r,o]=(0,Zi.useState)(!1),l=(0,Zi.useRef)(null),c=(0,Zi.useRef)(null),h=(0,Zi.useRef)(!1);(0,Zi.useEffect)(()=>{let m=()=>{let g=l.current,{clientWidth:f}=c.current,_=Math.round(f*.56),S=Math.min(window.devicePixelRatio||1,2);g.width=f*S,g.height=_*S,g.style.height=`${_}px`;let v=g.getContext("2d");if(v.setTransform(S,0,0,S,0,0),e==="fotocromatico"){pv(v,f,_,{brillo:.6}),r&&(v.fillStyle="rgba(13,27,36,0.35)",v.fillRect(0,0,f,_*.12),v.fillRect(0,_*.88,f,_*.12)),uE(v,f,_,a/100*(r?.12:1));return}let T=n/100*f,E=A=>{e==="polarizado"?(pv(v,f,_,{brillo:A?.1:1}),v.fillStyle=A?"rgba(30,40,30,0.28)":"rgba(40,40,40,0.22)",v.fillRect(0,0,f,_)):e==="antirreflejo"?lE(v,f,_,{reflejos:!A}):cE(v,f,_,{filtro:A})};E(!1),v.save(),v.beginPath(),v.rect(T,0,f-T,_),v.clip(),E(!0),v.restore()};m();let M=new ResizeObserver(m);return M.observe(c.current),()=>M.disconnect()},[e,n,a,r]);let p=m=>{let M=c.current.getBoundingClientRect();i(Math.round(Math.min(95,Math.max(5,(m.clientX-M.left)/M.width*100))))},u=hE[e],d=e!=="fotocromatico";return(0,fe.jsxs)("div",{className:"comparador",children:[(0,fe.jsx)("div",{className:"comparador__modos",role:"group","aria-label":"Tipo de cristal",children:Object.entries(hE).map(([m,M])=>(0,fe.jsx)("button",{type:"button","aria-pressed":e===m,className:`chip${e===m?" is-elegido":""}`,onClick:()=>t(m),children:M.nombre},m))}),(0,fe.jsxs)("div",{className:"comparador__cuerpo",children:[(0,fe.jsxs)("figure",{className:"comparador__visor",children:[(0,fe.jsxs)("div",{className:"comparador__marco",ref:c,onPointerDown:m=>{d&&(h.current=!0,m.currentTarget.setPointerCapture(m.pointerId),p(m))},onPointerMove:m=>h.current&&p(m),onPointerUp:()=>h.current=!1,children:[(0,fe.jsx)("canvas",{ref:l,"aria-hidden":"true"}),d&&(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)("span",{className:"comparador__linea",style:{left:`${n}%`},"aria-hidden":"true"}),(0,fe.jsx)("span",{className:"comparador__etiqueta comparador__etiqueta--izq",children:u.etiquetas[0]}),(0,fe.jsx)("span",{className:"comparador__etiqueta comparador__etiqueta--der",children:u.etiquetas[1]})]})]}),(0,fe.jsx)("figcaption",{children:"Simulaci\xF3n ilustrativa, no es una foto real."})]}),(0,fe.jsxs)("div",{className:"comparador__texto",children:[(0,fe.jsx)("h3",{children:u.titulo}),(0,fe.jsx)("p",{children:u.texto}),d?(0,fe.jsxs)("label",{className:"deslizador",children:[(0,fe.jsx)("span",{children:"Mov\xE9 la divisi\xF3n para comparar"}),(0,fe.jsx)("input",{type:"range",min:"5",max:"95",value:n,onChange:m=>i(+m.target.value)})]}):(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsxs)("label",{className:"deslizador",children:[(0,fe.jsxs)("span",{children:["Cantidad de sol: ",a,"%"]}),(0,fe.jsx)("input",{type:"range",min:"0",max:"100",value:a,onChange:m=>s(+m.target.value)})]}),(0,fe.jsxs)("label",{className:"interruptor",children:[(0,fe.jsx)("input",{type:"checkbox",checked:r,onChange:m=>o(m.target.checked)}),(0,fe.jsx)("span",{children:"Dentro del auto"})]})]}),(0,fe.jsx)("p",{className:"comparador__nota",children:"Consultanos qu\xE9 opciones tenemos para tu receta."})]})]})]})}var mv=je(es(),1);var Ne=je(Hn(),1),dE={ovalada:"M100 22 C150 22 172 70 172 120 C172 178 140 222 100 222 C60 222 28 178 28 120 C28 70 50 22 100 22 Z",redonda:"M100 30 C152 30 184 70 184 124 C184 182 148 216 100 216 C52 216 16 182 16 124 C16 70 48 30 100 30 Z",cuadrada:"M44 28 H156 C172 28 178 40 178 56 V176 C178 202 160 216 136 218 H64 C40 216 22 202 22 176 V56 C22 40 28 28 44 28 Z",corazon:"M100 24 C160 24 182 54 180 100 C178 150 142 196 100 224 C58 196 22 150 20 100 C18 54 40 24 100 24 Z",alargada:"M100 10 C142 10 160 56 160 120 C160 190 134 232 100 232 C66 232 40 190 40 120 C40 56 58 10 100 10 Z"};function uL({forma:e}){let{lente:t,puente:n}=gi[e].medidas,i=Zs(e,t),a=Tl(i),s=50*1.05,r=(a.maxX+a.minX)/2*s,o=n*1.05/2+(a.maxX-a.minX)/2*s;return(0,Ne.jsxs)("g",{className:"cara__anteojos",children:[(0,Ne.jsx)("path",{d:El(i,s,100-o-r,112)}),(0,Ne.jsx)("path",{d:El(i,s,100+o+r,112,!0)})]})}function pE(){let[e,t]=(0,mv.useState)("ovalada"),[n,i]=(0,mv.useState)("rectangular"),a=ov[e];return(0,Ne.jsxs)("div",{className:"guia",children:[(0,Ne.jsxs)("fieldset",{className:"guia__caras",children:[(0,Ne.jsx)("legend",{children:"\xBFQu\xE9 forma tiene tu cara?"}),Object.entries(ov).map(([s,r])=>(0,Ne.jsxs)("label",{className:`guia__cara${e===s?" is-elegida":""}`,children:[(0,Ne.jsx)("input",{type:"radio",name:"cara",value:s,checked:e===s,onChange:()=>{t(s),i(r.formas[0])}}),(0,Ne.jsx)("svg",{viewBox:"0 0 200 240","aria-hidden":"true",children:(0,Ne.jsx)("path",{d:dE[s]})}),(0,Ne.jsx)("span",{children:r.nombre})]},s))]}),(0,Ne.jsxs)("div",{className:"guia__resultado",children:[(0,Ne.jsxs)("svg",{className:"cara",viewBox:"0 0 200 240",role:"img","aria-label":`Cara ${a.nombre.toLowerCase()} con anteojos ${gi[n].nombre.toLowerCase()}`,children:[(0,Ne.jsx)("path",{className:"cara__silueta",d:dE[e]}),(0,Ne.jsx)("circle",{className:"cara__ojo",cx:"70",cy:"112",r:"5"}),(0,Ne.jsx)("circle",{className:"cara__ojo",cx:"130",cy:"112",r:"5"}),(0,Ne.jsx)("path",{className:"cara__boca",d:"M84 176 Q100 186 116 176"}),(0,Ne.jsx)(uL,{forma:n})]}),(0,Ne.jsxs)("div",{className:"guia__texto",children:[(0,Ne.jsxs)("h3",{children:["Cara ",a.nombre.toLowerCase()]}),(0,Ne.jsx)("p",{children:a.consejo}),(0,Ne.jsx)("div",{className:"guia__formas",role:"group","aria-label":"Probar forma de armaz\xF3n",children:Object.entries(gi).map(([s,r])=>{let o=a.formas.includes(s);return(0,Ne.jsxs)("button",{type:"button","aria-pressed":n===s,className:`chip${n===s?" is-elegido":""}${o?" chip--recomendado":""}`,onClick:()=>i(s),children:[r.nombre,o&&(0,Ne.jsx)("span",{className:"chip__marca",children:"Recomendado"})]},s)})}),(0,Ne.jsxs)("button",{type:"button",className:"boton boton--linea",onClick:()=>Ep({forma:n}),children:["Ver el ",gi[n].nombre.toLowerCase()," en 3D"]})]})]})]})}var gv=je(es(),1);var ln=je(Hn(),1),hL={todos:"Todos",receta:"Para receta",sol:"De sol"};function fL({e,base:t}){let[n,i]=(0,gv.useState)(!1);return(0,ln.jsxs)("li",{className:"estilo",children:[(0,ln.jsx)("div",{className:"estilo__foto",children:n?(0,ln.jsx)("p",{className:"estilo__falla",children:"No se pudo cargar la imagen."}):(0,ln.jsxs)(ln.Fragment,{children:[(0,ln.jsx)("img",{src:`${t}/${e.id}-tresCuartos.webp`,alt:`${e.titulo}, vista de tres cuartos`,width:"900",height:"640",loading:"lazy",onError:()=>i(!0)}),(0,ln.jsx)("img",{className:"estilo__frente",src:`${t}/${e.id}-frente.webp`,alt:"",width:"900",height:"640",loading:"lazy","aria-hidden":"true"})]})}),(0,ln.jsxs)("div",{className:"estilo__pie",children:[(0,ln.jsx)("h3",{children:e.titulo}),(0,ln.jsx)("button",{type:"button",className:"boton boton--chico boton--linea",onClick:()=>Ep({forma:e.forma,armazon:e.armazon,cristal:e.cristal}),children:"Probar en 3D"})]})]})}function mE({base:e}){let[t,n]=(0,gv.useState)("todos"),i=JT.filter(a=>t==="todos"||a.uso===t);return(0,ln.jsxs)("div",{className:"estilos",children:[(0,ln.jsx)("div",{className:"estilos__filtros",role:"group","aria-label":"Filtrar estilos",children:Object.entries(hL).map(([a,s])=>(0,ln.jsx)("button",{type:"button","aria-pressed":t===a,className:`chip${t===a?" is-elegido":""}`,onClick:()=>n(a),children:s},a))}),i.length?(0,ln.jsx)("ul",{className:"estilos__grilla",children:i.map(a=>(0,ln.jsx)(fL,{e:a,base:e},a.id))}):(0,ln.jsx)("p",{className:"estilos__vacio",children:"No hay estilos para este filtro."})]})}var gE=e=>{let[t,n]=e.split(":").map(Number);return t*60+n};function dL(e,t){let n=t.getHours()*60+t.getMinutes();return(e[t.getDay()||7]||[]).some(([i,a])=>n>=gE(i)&&n<gE(a))}function pL(){let e=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:"America/Argentina/Cordoba",hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).formatToParts(new Date).map(({type:t,value:n})=>[t,n]));return new Date(+e.year,+e.month-1,+e.day,+e.hour%24,+e.minute)}function _E(){let e=document.querySelector("[data-estado]");if(!e)return;let t;try{t=JSON.parse(e.dataset.horarios)}catch{return}let n=e.querySelector("[data-estado-texto]"),i=()=>{let a=dL(t,pL());e.classList.toggle("estado--abierto",a),e.classList.toggle("estado--cerrado",!a),n.textContent=a?"Abierto ahora":"Cerrado ahora"};i(),setInterval(i,6e4)}function vE(){let e=document.querySelector("[data-menu-toggle]"),t=document.getElementById("nav-principal");if(!e||!t)return;let n=()=>{t.classList.remove("is-abierta"),e.setAttribute("aria-expanded","false")};e.addEventListener("click",()=>{let i=t.classList.toggle("is-abierta");e.setAttribute("aria-expanded",String(i)),i&&t.querySelector("a")?.focus()}),t.addEventListener("click",i=>i.target.closest("a")&&n()),document.addEventListener("keydown",i=>{i.key==="Escape"&&t.classList.contains("is-abierta")&&(n(),e.focus())})}var Du=je(Hn(),1);document.documentElement.classList.remove("sin-js");var mL={"isla-probador":e=>(0,Du.jsx)(oE,{whatsapp:e.dataset.whatsapp,foto:e.dataset.foto}),"isla-estilos":e=>(0,Du.jsx)(mE,{base:e.dataset.base}),"isla-cara":()=>(0,Du.jsx)(pE,{}),"isla-cristales":()=>(0,Du.jsx)(fE,{})};for(let[e,t]of Object.entries(mL)){let n=document.getElementById(e);n&&(0,yE.createRoot)(n).render(t(n))}vE();_E();})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
