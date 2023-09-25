(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var a=n(2265);let r=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,a.createContext)(void 0),o={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,a.useContext)(i))&&void 0!==e?e:o},d=e=>(0,a.useContext)(i)?a.createElement(a.Fragment,null,e.children):a.createElement(u,e),m=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:o="theme",themes:c=m,defaultTheme:d=n?"system":"light",attribute:u="data-theme",value:g,children:x,nonce:y})=>{let[p,j]=(0,a.useState)(()=>f(o,d)),[$,S]=(0,a.useState)(()=>f(o)),k=g?Object.values(g):c,N=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&n&&(a=b());let s=g?g[a]:a,i=t?v():null,o=document.documentElement;if("class"===u?(o.classList.remove(...k),s&&o.classList.add(s)):s?o.setAttribute(u,s):o.removeAttribute(u),l){let e=r.includes(d)?d:null,t=r.includes(a)?a:e;o.style.colorScheme=t}null==i||i()},[]),C=(0,a.useCallback)(e=>{j(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),w=(0,a.useCallback)(t=>{let a=b(t);S(a),"system"===p&&n&&!e&&N("system")},[p,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(w),w(e),()=>e.removeListener(w)},[w]),(0,a.useEffect)(()=>{let e=e=>{e.key===o&&C(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,a.useEffect)(()=>{N(null!=e?e:p)},[e,p]);let E=(0,a.useMemo)(()=>({theme:p,setTheme:C,forcedTheme:e,resolvedTheme:"system"===p?$:p,themes:n?[...c,"system"]:c,systemTheme:n?$:void 0}),[p,C,e,$,n,c]);return a.createElement(i.Provider,{value:E},a.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:o,themes:c,defaultTheme:d,attribute:u,value:g,children:x,attrs:k,nonce:y}),x)},h=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:o,value:c,attrs:d,nonce:m})=>{let u="system"===o,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?r.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,a=!0)=>{let s=c?c[e]:e,l=t?e+"|| ''":`'${s}'`,o="";return i&&a&&!t&&r.includes(e)&&(o+=`d.style.colorScheme = '${e}';`),"class"===n?o+=t||s?`c.add(${l})`:"null":s&&(o+=`d[s](n,${l})`),o},b=e?`!function(){${h}${v(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${u?"":"else{"+v(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(o,!1,!1)};}${f}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:b}})},()=>!0),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},7087:function(e,t,n){Promise.resolve().then(n.bind(n,7378)),Promise.resolve().then(n.bind(n,7531)),Promise.resolve().then(n.bind(n,2848)),Promise.resolve().then(n.t.bind(n,9796,23)),Promise.resolve().then(n.t.bind(n,7373,23))},2848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(7437),r=n(2749),s=n(2265),l=n(1396),i=n.n(l),o=n(6435),c=n(6716),d=n(1279),m=n(2759),u=()=>{let{resolvedTheme:e,setTheme:t}=(0,o.F)(),[n,r]=(0,s.useState)(!1);return((0,s.useEffect)(()=>r(!0),[]),n)?(0,a.jsx)(c.Z,{variant:"outline-secondary",style:{width:"42px"},onClick:()=>t("dark"===e?"light":"dark"),children:"dark"===e?(0,a.jsx)(d.G,{icon:m.enB}):(0,a.jsx)(d.G,{icon:m.DBF})}):null};function h(){let{data:e,status:t}=(0,r.useSession)();return null==e||e.user.id,(0,s.useEffect)(()=>{Promise.all([n.e(471),n.e(722)]).then(n.t.bind(n,2722,23))},[]),(0,a.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg bg-body shadow",style:{zIndex:"1090"},children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(i(),{href:"/",className:"navbar-brand",children:(0,a.jsx)("h3",{className:"mb-0",children:(0,a.jsx)("strong",{children:"HOME"})})}),(0,a.jsx)("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"navbar-toggler-icon"})}),(0,a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,a.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,a.jsx)("li",{className:"nav-item",children:"unauthenticated"===t&&(0,a.jsxs)("div",{className:"d-flex me-3 align-items-center",children:[(0,a.jsx)(i(),{href:"/register",className:"nav-link text-primary",children:(0,a.jsx)("strong",{children:"Sign up"})}),(0,a.jsx)("p",{className:"m-0",children:"\xa0or\xa0"}),(0,a.jsx)(i(),{href:"/login",className:"nav-link text-primary",children:(0,a.jsx)("strong",{children:"Login"})})]})}),(0,a.jsx)("li",{className:"nav-item",children:"authenticated"===t&&(0,a.jsx)(i(),{href:"/profile",className:"nav-link text-primary me-2",children:(0,a.jsx)("strong",{children:"Profile"})})}),(0,a.jsx)("li",{className:"nav-item",children:(null==e?void 0:e.user.admin)&&(0,a.jsx)(i(),{href:"/admin",className:"nav-link text-primary me-2",children:(0,a.jsx)("strong",{children:"Admin"})})})]}),(0,a.jsx)(u,{})]})]})})}},7531:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(7437),r=n(2749);function s(e){let{children:t}=e;return(0,a.jsx)(r.SessionProvider,{children:t})}},7378:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(7437),r=n(6435);function s(e){let{children:t}=e;return(0,a.jsx)(r.f,{attribute:"data-bs-theme",children:t})}},7373:function(){},9796:function(){}},function(e){e.O(0,[676,504,749,279,971,596,744],function(){return e(e.s=7087)}),_N_E=e.O()}]);