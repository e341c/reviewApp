(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{8949:function(e,t,r){"use strict";r.d(t,{FT:function(){return s}});var a=r(2265),l=r(7437);let n=["as","disabled"];function s({tagName:e,disabled:t,href:r,target:a,rel:l,role:n,onClick:s,tabIndex:o=0,type:i}){e||(e=null!=r||null!=a||null!=l?"a":"button");let c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];let u=a=>{var l;if(!t&&("a"!==e||(l=r)&&"#"!==l.trim())||a.preventDefault(),t){a.stopPropagation();return}null==s||s(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?l:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}let o=a.forwardRef((e,t)=>{let{as:r,disabled:a}=e,o=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n),[i,{tagName:c}]=s(Object.assign({tagName:r,disabled:a},o));return(0,l.jsx)(c,Object.assign({},o,i,{ref:t}))});o.displayName="Button",t.ZP=o},4440:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var s=l.apply(null,r);s&&e.push(s)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(r=(function(){return l}).apply(t,[]))&&(e.exports=r)}()},3532:function(e,t,r){Promise.resolve().then(r.bind(r,8991))},8991:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),l=r(1396),n=r.n(l),s=r(6716),o=r(4883),i=r(9222),c=r(2265),u=r(4033);function d(){let[e,t]=(0,c.useState)(null),r=(0,u.useRouter)(),l=async e=>{e.preventDefault();let a=e.target[0].value,l=e.target[1].value,n=e.target[2].value;try{let e=await i.Z.post("/api/auth/register",{name:a,email:l,password:n});201===e.status&&r.push("/login?success=Account has been created")}catch(e){t(e),console.log(e)}};return(0,a.jsx)("main",{className:"w-100 vh-100 d-flex justify-content-center align-items-center",children:(0,a.jsxs)(o.Z,{onSubmit:l,className:"p-4 d-flex flex-column align-items-center bg-body shadow-lg",style:{border:"0",borderRadius:"8px",minWidth:"340px"},children:[(0,a.jsx)("h3",{className:"mb-3",children:"Sign up"}),(0,a.jsxs)(o.Z.Group,{className:"mb-3 w-100",children:[(0,a.jsx)(o.Z.Label,{children:"Name"}),(0,a.jsx)(o.Z.Control,{type:"text",placeholder:"Enter your name"})]}),(0,a.jsxs)(o.Z.Group,{className:"mb-3 w-100",children:[(0,a.jsx)(o.Z.Label,{children:"Email address"}),(0,a.jsx)(o.Z.Control,{type:"email",placeholder:"Enter email"})]}),(0,a.jsxs)(o.Z.Group,{className:"mb-4 w-100",children:[(0,a.jsx)(o.Z.Label,{children:"Password"}),(0,a.jsx)(o.Z.Control,{type:"password",placeholder:"Password"})]}),(0,a.jsxs)(o.Z.Group,{className:"mb-4 w-100",children:[(0,a.jsx)(o.Z.Label,{children:"Repeat password"}),(0,a.jsx)(o.Z.Control,{type:"password",placeholder:"Repeat password"})]}),e&&"Something went wrong!",(0,a.jsx)(s.Z,{className:"mb-4 w-100 shadow-sm",variant:"primary",type:"submit",children:"Sign up"}),(0,a.jsxs)("p",{children:["Alreade have an account?"," ",(0,a.jsxs)(n(),{href:"/login",children:[" ",(0,a.jsx)("strong",{children:"Login now"})," "]})," "]})]})})}},4033:function(e,t,r){e.exports=r(8165)},6716:function(e,t,r){"use strict";var a=r(4440),l=r.n(a),n=r(2265),s=r(8949),o=r(7127),i=r(7437);let c=n.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:a,active:n=!1,disabled:c=!1,className:u,...d},f)=>{let p=(0,o.vE)(t,"btn"),[m,{tagName:x}]=(0,s.FT)({tagName:e,disabled:c,...d});return(0,i.jsx)(x,{...m,...d,ref:f,disabled:c,className:l()(u,p,n&&"active",r&&`${p}-${r}`,a&&`${p}-${a}`,d.href&&c&&"disabled")})});c.displayName="Button",t.Z=c},4883:function(e,t,r){"use strict";r.d(t,{Z:function(){return S}});var a=r(4440),l=r.n(a),n=r(4275),s=r.n(n),o=r(2265),i=r(7437);let c={type:s().string,tooltip:s().bool,as:s().elementType},u=o.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:a=!1,...n},s)=>(0,i.jsx)(e,{...n,ref:s,className:l()(t,`${r}-${a?"tooltip":"feedback"}`)}));u.displayName="Feedback",u.propTypes=c;var d=r(6681),f=r(7516),p=r(7127);let m=o.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...a},n)=>{let{controlId:s}=(0,o.useContext)(f.Z);return e=(0,p.vE)(e,"form-check-label"),(0,i.jsx)("label",{...a,ref:n,htmlFor:r||s,className:l()(t,e)})});m.displayName="FormCheckLabel";let x=o.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:a=!1,reverse:n=!1,disabled:s=!1,isValid:c=!1,isInvalid:x=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:b,className:y,style:j,title:g="",type:N="checkbox",label:w,children:Z,as:C="input",...$},R)=>{t=(0,p.vE)(t,"form-check"),r=(0,p.vE)(r,"form-switch");let{controlId:k}=(0,o.useContext)(f.Z),E=(0,o.useMemo)(()=>({controlId:e||k}),[k,e]),F=!Z&&null!=w&&!1!==w||o.Children.toArray(Z).some(e=>o.isValidElement(e)&&e.type===m),S=(0,i.jsx)(d.Z,{...$,type:"switch"===N?"checkbox":N,ref:R,isValid:c,isInvalid:x,disabled:s,as:C});return(0,i.jsx)(f.Z.Provider,{value:E,children:(0,i.jsx)("div",{style:j,className:l()(y,F&&t,a&&`${t}-inline`,n&&`${t}-reverse`,"switch"===N&&r),children:Z||(0,i.jsxs)(i.Fragment,{children:[S,F&&(0,i.jsx)(m,{title:g,children:w}),v&&(0,i.jsx)(u,{type:b,tooltip:h,children:v})]})})})});x.displayName="FormCheck";var h=Object.assign(x,{Input:d.Z,Label:m});r(267);let v=o.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:a,id:n,className:s,isValid:c=!1,isInvalid:u=!1,plaintext:d,readOnly:m,as:x="input",...h},v)=>{let b;let{controlId:y}=(0,o.useContext)(f.Z);return e=(0,p.vE)(e,"form-control"),b=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,i.jsx)(x,{...h,type:t,size:a,ref:v,readOnly:m,id:n||y,className:l()(s,b,c&&"is-valid",u&&"is-invalid","color"===t&&`${e}-color`)})});v.displayName="FormControl";var b=Object.assign(v,{Feedback:u}),y=(0,r(2510).Z)("form-floating");let j=o.forwardRef(({controlId:e,as:t="div",...r},a)=>{let l=(0,o.useMemo)(()=>({controlId:e}),[e]);return(0,i.jsx)(f.Z.Provider,{value:l,children:(0,i.jsx)(t,{...r,ref:a})})});j.displayName="FormGroup";let g=o.forwardRef((e,t)=>{let[{className:r,...a},{as:n="div",bsPrefix:s,spans:o}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,p.vE)(t,"col");let n=(0,p.pi)(),s=(0,p.zG)(),o=[],i=[];return n.forEach(e=>{let r,l,n;let c=a[e];delete a[e],"object"==typeof c&&null!=c?{span:r,offset:l,order:n}=c:r=c;let u=e!==s?`-${e}`:"";r&&o.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=n&&i.push(`order${u}-${n}`),null!=l&&i.push(`offset${u}-${l}`)}),[{...a,className:l()(r,...o,...i)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(n,{...a,ref:t,className:l()(r,!o.length&&s)})});g.displayName="Col";let N=o.forwardRef(({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:a=!1,className:n,htmlFor:s,...c},u)=>{let{controlId:d}=(0,o.useContext)(f.Z);t=(0,p.vE)(t,"form-label");let m="col-form-label";"string"==typeof r&&(m=`${m} ${m}-${r}`);let x=l()(n,t,a&&"visually-hidden",r&&m);return(s=s||d,r)?(0,i.jsx)(g,{ref:u,as:"label",className:x,htmlFor:s,...c}):(0,i.jsx)(e,{ref:u,className:x,htmlFor:s,...c})});N.displayName="FormLabel";let w=o.forwardRef(({bsPrefix:e,className:t,id:r,...a},n)=>{let{controlId:s}=(0,o.useContext)(f.Z);return e=(0,p.vE)(e,"form-range"),(0,i.jsx)("input",{...a,type:"range",ref:n,className:l()(t,e),id:r||s})});w.displayName="FormRange";let Z=o.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:a,isValid:n=!1,isInvalid:s=!1,id:c,...u},d)=>{let{controlId:m}=(0,o.useContext)(f.Z);return e=(0,p.vE)(e,"form-select"),(0,i.jsx)("select",{...u,size:r,ref:d,className:l()(a,e,t&&`${e}-${t}`,n&&"is-valid",s&&"is-invalid"),id:c||m})});Z.displayName="FormSelect";let C=o.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:a,...n},s)=>(e=(0,p.vE)(e,"form-text"),(0,i.jsx)(r,{...n,ref:s,className:l()(t,e,a&&"text-muted")})));C.displayName="FormText";let $=o.forwardRef((e,t)=>(0,i.jsx)(h,{...e,ref:t,type:"switch"}));$.displayName="Switch";var R=Object.assign($,{Input:h.Input,Label:h.Label});let k=o.forwardRef(({bsPrefix:e,className:t,children:r,controlId:a,label:n,...s},o)=>(e=(0,p.vE)(e,"form-floating"),(0,i.jsxs)(j,{ref:o,className:l()(t,e),controlId:a,...s,children:[r,(0,i.jsx)("label",{htmlFor:a,children:n})]})));k.displayName="FloatingLabel";let E={_ref:s().any,validated:s().bool,as:s().elementType},F=o.forwardRef(({className:e,validated:t,as:r="form",...a},n)=>(0,i.jsx)(r,{...a,ref:n,className:l()(e,t&&"was-validated")}));F.displayName="Form",F.propTypes=E;var S=Object.assign(F,{Group:j,Control:b,Floating:y,Check:h,Switch:R,Label:N,Text:C,Range:w,Select:Z,FloatingLabel:k})},6681:function(e,t,r){"use strict";var a=r(4440),l=r.n(a),n=r(2265),s=r(7516),o=r(7127),i=r(7437);let c=n.forwardRef(({id:e,bsPrefix:t,className:r,type:a="checkbox",isValid:c=!1,isInvalid:u=!1,as:d="input",...f},p)=>{let{controlId:m}=(0,n.useContext)(s.Z);return t=(0,o.vE)(t,"form-check-input"),(0,i.jsx)(d,{...f,ref:p,type:a,id:e||m,className:l()(r,t,c&&"is-valid",u&&"is-invalid")})});c.displayName="FormCheckInput",t.Z=c},7516:function(e,t,r){"use strict";var a=r(2265);let l=a.createContext({});t.Z=l},7127:function(e,t,r){"use strict";r.d(t,{SC:function(){return u},pi:function(){return i},vE:function(){return o},zG:function(){return c}});var a=r(2265);r(7437);let l=a.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:n,Provider:s}=l;function o(e,t){let{prefixes:r}=(0,a.useContext)(l);return e||r[t]||t}function i(){let{breakpoints:e}=(0,a.useContext)(l);return e}function c(){let{minBreakpoint:e}=(0,a.useContext)(l);return e}function u(){let{dir:e}=(0,a.useContext)(l);return"rtl"===e}},2510:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(4440),l=r.n(a),n=/-(.)/g,s=r(2265),o=r(7127),i=r(7437);let c=e=>e[0].toUpperCase()+e.replace(n,function(e,t){return t.toUpperCase()}).slice(1);function u(e,{displayName:t=c(e),Component:r,defaultProps:a}={}){let n=s.forwardRef(({className:t,bsPrefix:n,as:s=r||"div",...c},u)=>{let d={...a,...c},f=(0,o.vE)(n,e);return(0,i.jsx)(s,{ref:u,className:l()(t,f),...d})});return n.displayName=t,n}},267:function(e){"use strict";e.exports=function(){}}},function(e){e.O(0,[726,222,971,596,744],function(){return e(e.s=3532)}),_N_E=e.O()}]);