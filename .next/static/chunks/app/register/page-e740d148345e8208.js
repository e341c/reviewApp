(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{3532:function(e,l,a){Promise.resolve().then(a.bind(a,8991))},8991:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return m}});var s=a(7437),t=a(1396),r=a.n(t),n=a(6716),o=a(4883),i=a(9222),c=a(2265),d=a(4033);function m(){let[e,l]=(0,c.useState)(null),a=(0,d.useRouter)(),t=async e=>{e.preventDefault();let s=e.target[0].value,t=e.target[1].value,r=e.target[2].value;try{let e=await i.Z.post("/api/auth/register",{name:s,email:t,password:r});201===e.status&&a.push("/login?success=Account has been created")}catch(e){l(e),console.log(e)}};return(0,s.jsx)("main",{className:"w-100 h-100 d-flex justify-content-center align-items-center",children:(0,s.jsxs)(o.Z,{onSubmit:t,className:"mt-5 mb-5 p-4 d-flex flex-column align-items-center bg-body shadow-lg",style:{border:"0",borderRadius:"8px",minWidth:"340px"},children:[(0,s.jsx)("h3",{className:"mb-3",children:"Sign up"}),(0,s.jsxs)(o.Z.Group,{className:"mb-3 w-100",children:[(0,s.jsx)(o.Z.Label,{children:"Name"}),(0,s.jsx)(o.Z.Control,{type:"text",placeholder:"Enter your name"})]}),(0,s.jsxs)(o.Z.Group,{className:"mb-3 w-100",children:[(0,s.jsx)(o.Z.Label,{children:"Email address"}),(0,s.jsx)(o.Z.Control,{type:"email",placeholder:"Enter email"})]}),(0,s.jsxs)(o.Z.Group,{className:"mb-4 w-100",children:[(0,s.jsx)(o.Z.Label,{children:"Password"}),(0,s.jsx)(o.Z.Control,{type:"password",placeholder:"Password"})]}),(0,s.jsxs)(o.Z.Group,{className:"mb-4 w-100",children:[(0,s.jsx)(o.Z.Label,{children:"Repeat password"}),(0,s.jsx)(o.Z.Control,{type:"password",placeholder:"Repeat password"})]}),e&&"Something went wrong!",(0,s.jsx)(n.Z,{className:"mb-4 w-100 shadow-sm",variant:"primary",type:"submit",children:"Sign up"}),(0,s.jsxs)("p",{children:["Alreade have an account? &nbspl;",(0,s.jsx)(r(),{href:"/login",children:(0,s.jsx)("strong",{children:"Login now"})})]})]})})}},4883:function(e,l,a){"use strict";a.d(l,{Z:function(){return L}});var s=a(4440),t=a.n(s),r=a(4275),n=a.n(r),o=a(2265),i=a(7437);let c={type:n().string,tooltip:n().bool,as:n().elementType},d=o.forwardRef(({as:e="div",className:l,type:a="valid",tooltip:s=!1,...r},n)=>(0,i.jsx)(e,{...r,ref:n,className:t()(l,`${a}-${s?"tooltip":"feedback"}`)}));d.displayName="Feedback",d.propTypes=c;var m=a(6681),u=a(7516),f=a(7127);let p=o.forwardRef(({bsPrefix:e,className:l,htmlFor:a,...s},r)=>{let{controlId:n}=(0,o.useContext)(u.Z);return e=(0,f.vE)(e,"form-check-label"),(0,i.jsx)("label",{...s,ref:r,htmlFor:a||n,className:t()(l,e)})});p.displayName="FormCheckLabel";let h=o.forwardRef(({id:e,bsPrefix:l,bsSwitchPrefix:a,inline:s=!1,reverse:r=!1,disabled:n=!1,isValid:c=!1,isInvalid:h=!1,feedbackTooltip:x=!1,feedback:b,feedbackType:j,className:v,style:y,title:w="",type:N="checkbox",label:g,children:Z,as:$="input",...C},F)=>{l=(0,f.vE)(l,"form-check"),a=(0,f.vE)(a,"form-switch");let{controlId:R}=(0,o.useContext)(u.Z),E=(0,o.useMemo)(()=>({controlId:e||R}),[R,e]),k=!Z&&null!=g&&!1!==g||o.Children.toArray(Z).some(e=>o.isValidElement(e)&&e.type===p),L=(0,i.jsx)(m.Z,{...C,type:"switch"===N?"checkbox":N,ref:F,isValid:c,isInvalid:h,disabled:n,as:$});return(0,i.jsx)(u.Z.Provider,{value:E,children:(0,i.jsx)("div",{style:y,className:t()(v,k&&l,s&&`${l}-inline`,r&&`${l}-reverse`,"switch"===N&&a),children:Z||(0,i.jsxs)(i.Fragment,{children:[L,k&&(0,i.jsx)(p,{title:w,children:g}),b&&(0,i.jsx)(d,{type:j,tooltip:x,children:b})]})})})});h.displayName="FormCheck";var x=Object.assign(h,{Input:m.Z,Label:p});a(267);let b=o.forwardRef(({bsPrefix:e,type:l,size:a,htmlSize:s,id:r,className:n,isValid:c=!1,isInvalid:d=!1,plaintext:m,readOnly:p,as:h="input",...x},b)=>{let j;let{controlId:v}=(0,o.useContext)(u.Z);return e=(0,f.vE)(e,"form-control"),j=m?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,i.jsx)(h,{...x,type:l,size:s,ref:b,readOnly:p,id:r||v,className:t()(n,j,c&&"is-valid",d&&"is-invalid","color"===l&&`${e}-color`)})});b.displayName="FormControl";var j=Object.assign(b,{Feedback:d}),v=(0,a(2510).Z)("form-floating");let y=o.forwardRef(({controlId:e,as:l="div",...a},s)=>{let t=(0,o.useMemo)(()=>({controlId:e}),[e]);return(0,i.jsx)(u.Z.Provider,{value:t,children:(0,i.jsx)(l,{...a,ref:s})})});y.displayName="FormGroup";let w=o.forwardRef((e,l)=>{let[{className:a,...s},{as:r="div",bsPrefix:n,spans:o}]=function({as:e,bsPrefix:l,className:a,...s}){l=(0,f.vE)(l,"col");let r=(0,f.pi)(),n=(0,f.zG)(),o=[],i=[];return r.forEach(e=>{let a,t,r;let c=s[e];delete s[e],"object"==typeof c&&null!=c?{span:a,offset:t,order:r}=c:a=c;let d=e!==n?`-${e}`:"";a&&o.push(!0===a?`${l}${d}`:`${l}${d}-${a}`),null!=r&&i.push(`order${d}-${r}`),null!=t&&i.push(`offset${d}-${t}`)}),[{...s,className:t()(a,...o,...i)},{as:e,bsPrefix:l,spans:o}]}(e);return(0,i.jsx)(r,{...s,ref:l,className:t()(a,!o.length&&n)})});w.displayName="Col";let N=o.forwardRef(({as:e="label",bsPrefix:l,column:a=!1,visuallyHidden:s=!1,className:r,htmlFor:n,...c},d)=>{let{controlId:m}=(0,o.useContext)(u.Z);l=(0,f.vE)(l,"form-label");let p="col-form-label";"string"==typeof a&&(p=`${p} ${p}-${a}`);let h=t()(r,l,s&&"visually-hidden",a&&p);return(n=n||m,a)?(0,i.jsx)(w,{ref:d,as:"label",className:h,htmlFor:n,...c}):(0,i.jsx)(e,{ref:d,className:h,htmlFor:n,...c})});N.displayName="FormLabel";let g=o.forwardRef(({bsPrefix:e,className:l,id:a,...s},r)=>{let{controlId:n}=(0,o.useContext)(u.Z);return e=(0,f.vE)(e,"form-range"),(0,i.jsx)("input",{...s,type:"range",ref:r,className:t()(l,e),id:a||n})});g.displayName="FormRange";let Z=o.forwardRef(({bsPrefix:e,size:l,htmlSize:a,className:s,isValid:r=!1,isInvalid:n=!1,id:c,...d},m)=>{let{controlId:p}=(0,o.useContext)(u.Z);return e=(0,f.vE)(e,"form-select"),(0,i.jsx)("select",{...d,size:a,ref:m,className:t()(s,e,l&&`${e}-${l}`,r&&"is-valid",n&&"is-invalid"),id:c||p})});Z.displayName="FormSelect";let $=o.forwardRef(({bsPrefix:e,className:l,as:a="small",muted:s,...r},n)=>(e=(0,f.vE)(e,"form-text"),(0,i.jsx)(a,{...r,ref:n,className:t()(l,e,s&&"text-muted")})));$.displayName="FormText";let C=o.forwardRef((e,l)=>(0,i.jsx)(x,{...e,ref:l,type:"switch"}));C.displayName="Switch";var F=Object.assign(C,{Input:x.Input,Label:x.Label});let R=o.forwardRef(({bsPrefix:e,className:l,children:a,controlId:s,label:r,...n},o)=>(e=(0,f.vE)(e,"form-floating"),(0,i.jsxs)(y,{ref:o,className:t()(l,e),controlId:s,...n,children:[a,(0,i.jsx)("label",{htmlFor:s,children:r})]})));R.displayName="FloatingLabel";let E={_ref:n().any,validated:n().bool,as:n().elementType},k=o.forwardRef(({className:e,validated:l,as:a="form",...s},r)=>(0,i.jsx)(a,{...s,ref:r,className:t()(e,l&&"was-validated")}));k.displayName="Form",k.propTypes=E;var L=Object.assign(k,{Group:y,Control:j,Floating:v,Check:x,Switch:F,Label:N,Text:$,Range:g,Select:Z,FloatingLabel:R})},6681:function(e,l,a){"use strict";var s=a(4440),t=a.n(s),r=a(2265),n=a(7516),o=a(7127),i=a(7437);let c=r.forwardRef(({id:e,bsPrefix:l,className:a,type:s="checkbox",isValid:c=!1,isInvalid:d=!1,as:m="input",...u},f)=>{let{controlId:p}=(0,r.useContext)(n.Z);return l=(0,o.vE)(l,"form-check-input"),(0,i.jsx)(m,{...u,ref:f,type:s,id:e||p,className:t()(a,l,c&&"is-valid",d&&"is-invalid")})});c.displayName="FormCheckInput",l.Z=c},7516:function(e,l,a){"use strict";var s=a(2265);let t=s.createContext({});l.Z=t}},function(e){e.O(0,[146,222,971,596,744],function(){return e(e.s=3532)}),_N_E=e.O()}]);