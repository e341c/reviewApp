"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{521:function(e,t,r){var n=r(2265);let i=n.createContext(null);i.displayName="InputGroupContext",t.Z=i},1853:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,u=n.useEffect,o=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},6272:function(e,t,r){e.exports=r(1853)},2333:function(e,t,r){r.d(t,{ZP:function(){return ee}});var n,i=r(2265),a=r(6272);let u=()=>{},o=u(),l=Object,s=e=>e===o,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),E=new WeakMap,g=0,p=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(l(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=E.get(e))return t;if(t=++g+"~",E.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=p(e[r])+",";E.set(e,t)}if(i==l){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+p(e[r])+",");E.set(e,t)}}return t},w=new WeakMap,h={},v={},y="undefined",_=typeof window!=y,m=typeof document!=y,R=()=>_&&typeof window.requestAnimationFrame!=y,T=(e,t)=>{let r=w.get(e);return[()=>!s(t)&&e.get(t)||h,n=>{if(!s(t)){let i=e.get(t);t in v||(v[t]=i),r[5](t,d(i,n),i||h)}},r[6],()=>!s(t)&&t in v?v[t]:!s(t)&&e.get(t)||h]},b=!0,[S,O]=_&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],V={initFocus:e=>(m&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{m&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{b=!0,e()},r=()=>{b=!1};return S("online",t),S("offline",r),()=>{O("online",t),O("offline",r)}}},L=!i.useId,C=!_||"Deno"in window,k=e=>R()?window.requestAnimationFrame(e):setTimeout(e,1),N=C?i.useEffect:i.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,A=!C&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),x=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]},I=0,P=()=>++I;var F={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){let[t,r,n,i]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,l=a.rollbackOnError,E=a.optimisticData,g=!1!==a.revalidate,p=e=>"function"==typeof l?l(e):!1!==l,h=a.throwOnError;if(c(r)){let e=[],n=t.keys();for(let i of n)!/^\$(inf|sub)\$/.test(i)&&r(t.get(i)._k)&&e.push(i);return Promise.all(e.map(v))}return v(r);async function v(r){let i;let[a]=x(r);if(!a)return;let[l,d]=T(t,a),[v,y,_,m]=w.get(t),R=()=>{let e=v[a];return g&&(delete _[a],delete m[a],e&&e[0])?e[0](2).then(()=>l().data):l().data};if(e.length<3)return R();let b=n,S=P();y[a]=[S,0];let O=!s(E),V=l(),L=V.data,C=V._c,k=s(C)?L:C;if(O&&d({data:E=c(E)?E(k,L):E,_c:k}),c(b))try{b=b(k)}catch(e){i=e}if(b&&f(b)){if(b=await b.catch(e=>{i=e}),S!==y[a][0]){if(i)throw i;return b}i&&O&&p(i)&&(u=!0,d({data:k,_c:o}))}if(u&&!i){if(c(u)){let e=u(b,k);d({data:e,error:o,_c:o})}else d({data:b,error:o,_c:o})}if(y[a][1]=P(),Promise.resolve(R()).then(()=>{d({_c:o})}),i){if(h)throw i;return}return b}}let U=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},W=(e,t)=>{if(!w.has(e)){let r=d(V,t),n={},i=M.bind(o,e),a=u,l={},s=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!w.has(e)&&(w.set(e,[n,{},{},{},i,c,s]),!C)){let t=r.initFocus(setTimeout.bind(o,U.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,U.bind(o,n,1)));a=()=>{t&&t(),i&&i(),w.delete(e)}}};return f(),[e,i,f,a]}return[e,w.get(e)[4]]},[j,$]=W(new Map),q=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,o=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,o,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:(e,t)=>p(e)==p(t),isPaused:()=>!1,cache:j,mutate:$,fallback:{}},{isOnline:()=>b,isVisible:()=>{let e=m&&document.visibilityState;return s(e)||"hidden"!==e}}),J=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=d(i,u))}return r},Z=(0,i.createContext)({}),G=_&&window.__SWR_DEVTOOLS_USE__,z=G?window.__SWR_DEVTOOLS_USE__:[],B=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>d(q,(0,i.useContext)(Z)),K=z.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=x(t),[,,,i]=w.get(j);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};G&&(window.__SWR_DEVTOOLS_REACT__=i);let X=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};l.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(Z),n=c(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,i.useMemo)(()=>n?a:J(r,a),[n,r,a]),l=a&&a.provider,s=(0,i.useRef)(o);l&&!s.current&&(s.current=W(l(u.cache||j),a));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(Z.Provider,d(e,{value:u}))},"defaultValue",{value:q});let ee=(n=(e,t,r)=>{let{cache:n,compare:u,suspense:l,fallbackData:f,revalidateOnMount:E,revalidateIfStale:g,refreshInterval:p,refreshWhenHidden:h,refreshWhenOffline:v,keepPreviousData:y}=r,[_,m,R,b]=w.get(n),[S,O]=x(e),V=(0,i.useRef)(!1),D=(0,i.useRef)(!1),A=(0,i.useRef)(S),I=(0,i.useRef)(t),U=(0,i.useRef)(r),W=()=>U.current,j=()=>W().isVisible()&&W().isOnline(),[$,q,J,Z]=T(n,S),G=(0,i.useRef)({}).current,z=s(f)?r.fallback[S]:f,B=(e,t)=>{for(let r in G)if("data"===r){if(!u(e[r],t[r])&&(!s(e[r])||!u(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,i.useMemo)(()=>{let e=!!S&&!!t&&(s(E)?!W().isPaused()&&!l&&(!!s(g)||g):E),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),i=Z(),a=r(n),u=n===i?a:r(i),o=a;return[()=>{let e=r($()),t=B(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>u]},[n,S]),K=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>J(S,(t,r)=>{B(r,t)||e()}),[n,S]),H[0],H[1]),ee=!V.current,et=_[S]&&_[S].length>0,er=K.data,en=s(er)?z:er,ei=K.error,ea=(0,i.useRef)(en),eu=y?s(er)?ea.current:er:en,eo=(!et||!!s(ei))&&(ee&&!s(E)?E:!W().isPaused()&&(l?!s(en)&&g:s(en)||g)),el=!!(S&&t&&ee&&eo),es=s(K.isValidating)?el:K.isValidating,ec=s(K.isLoading)?el:K.isLoading,ed=(0,i.useCallback)(async e=>{let t,n;let i=I.current;if(!S||!i||D.current||W().isPaused())return!1;let a=!0,l=e||{},d=!R[S]||!l.dedupe,f=()=>L?!D.current&&S===A.current&&V.current:S===A.current,E={isValidating:!1,isLoading:!1},g=()=>{q(E)},p=()=>{let e=R[S];e&&e[1]===n&&delete R[S]},w={isValidating:!0};s($().data)&&(w.isLoading=!0);try{if(d&&(q(w),r.loadingTimeout&&s($().data)&&setTimeout(()=>{a&&f()&&W().onLoadingSlow(S,r)},r.loadingTimeout),R[S]=[i(O),P()]),[t,n]=R[S],t=await t,d&&setTimeout(p,r.dedupingInterval),!R[S]||R[S][1]!==n)return d&&f()&&W().onDiscarded(S),!1;E.error=o;let e=m[S];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return g(),d&&f()&&W().onDiscarded(S),!1;let l=$().data;E.data=u(l,t)?l:t,d&&f()&&W().onSuccess(t,S,r)}catch(r){p();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(E.error=r,d&&f()&&(e.onError(r,S,e),(!0===t||c(t)&&t(r))&&j()&&e.onErrorRetry(r,S,e,e=>{let t=_[S];t&&t[0]&&t[0](F.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return a=!1,g(),!0},[S,n]),ef=(0,i.useCallback)((...e)=>M(n,A.current,...e),[]);if(N(()=>{I.current=t,U.current=r,s(er)||(ea.current=er)}),N(()=>{if(!S)return;let e=ed.bind(o,Y),t=0,r=Q(S,_,(r,n={})=>{if(r==F.FOCUS_EVENT){let r=Date.now();W().revalidateOnFocus&&r>t&&j()&&(t=r+W().focusThrottleInterval,e())}else if(r==F.RECONNECT_EVENT)W().revalidateOnReconnect&&j()&&e();else if(r==F.MUTATE_EVENT)return ed();else if(r==F.ERROR_REVALIDATE_EVENT)return ed(n)});return D.current=!1,A.current=S,V.current=!0,q({_k:O}),eo&&(s(en)||C?e():k(e)),()=>{D.current=!0,r()}},[S]),N(()=>{let e;function t(){let t=c(p)?p($().data):p;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(h||W().isVisible())&&(v||W().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[p,h,v,S]),(0,i.useDebugValue)(eu),l&&s(en)&&S){if(!L&&C)throw Error("Fallback data is required when using suspense in SSR.");I.current=t,U.current=r,D.current=!1;let e=b[S];if(!s(e)){let t=ef(e);X(t)}if(s(ei)){let e=ed(Y);s(eu)||(e.status="fulfilled",e.value=!0),X(e)}else throw ei}return{mutate:ef,get data(){return G.data=!0,eu},get error(){return G.error=!0,ei},get isValidating(){return G.isValidating=!0,es},get isLoading(){return G.isLoading=!0,ec}}},function(...e){let t=H(),[r,i,a]=B(e),u=J(t,a),o=n,{use:l}=u,s=(l||[]).concat(K);for(let e=s.length;e--;)o=s[e](o);return o(r,i||u.fetcher||null,u)})}}]);