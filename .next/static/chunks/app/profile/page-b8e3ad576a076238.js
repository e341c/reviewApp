(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{6245:function(e,t,i){Promise.resolve().then(i.bind(i,3952))},3952:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var a=i(7437),s=i(504),n=i(2759),l=i(1396),r=i.n(l),c=i(2749),d=i(6525),o=i(9222),u=i(6716),h=i(6526),x=i(2265),v=i(3270),m=i(1512),j=i(3795);function p(e){let{params:t}=e,[i,l]=(0,x.useState)([]),[p,g]=(0,x.useState)(""),[b,f]=(0,x.useState)(),{data:w,status:y}=(0,c.useSession)(),N=null==w?void 0:w.user.id,{data:Z,error:S,isLoading:C}=(0,d.ZP)("/api/profile/".concat(N),async()=>{let e=await o.Z.get("/api/profile/".concat(N));return l(e.data),e.data},{revalidateOnMount:!0,revalidateOnFocus:!1});if(C)return(0,a.jsxs)("div",{className:"vh-100",children:[" ",(0,a.jsx)(m.Z,{})," "]});if(S)return console.log(S),(0,a.jsx)("p",{children:"Something went wrong. Try to reload page"});let k=[];return null==i||i.filter(e=>{e.likes.length>0&&k.push(...e.likes)}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"row",style:{marginTop:"80px"},children:[(0,a.jsxs)("div",{className:"row mb-3",children:[(0,a.jsx)("h3",{className:"mb-4",children:"Your profile"}),(0,a.jsx)("div",{className:"col col-md-3 mb-4",style:{minWidth:"260px"},children:(0,a.jsxs)("div",{className:"p-4 shadow rounded",children:[(0,a.jsx)("p",{children:null==w?void 0:w.user.name}),(0,a.jsx)("p",{children:null==w?void 0:w.user.email}),(0,a.jsxs)("p",{children:["Reviews:\xa0",(0,a.jsxs)("strong",{children:[" ",null==i?void 0:i.length," "]})]}),(0,a.jsxs)("p",{children:["Likes:\xa0",(0,a.jsx)("strong",{children:k.length}),"\xa0",(0,a.jsx)(s.G,{icon:n.m6i})]}),N===(null==w?void 0:w.user.id)&&(0,a.jsx)(u.Z,{variant:"outline-danger",onClick:()=>(0,c.signOut)(),children:"Log Out"})]})}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsx)(v.Z,{url:"/api/profile/".concat(N),getQuery:e=>{g(e)},getReviews:e=>{l(e)}}),(0,a.jsx)(j.Z,{reviews:i,getSort:e=>{f(e)}})]})]}),(0,a.jsxs)("div",{className:"col",style:{minWidth:"70%"},children:[(0,a.jsxs)("div",{className:"mb-4 d-flex justify-content-between",children:[(0,a.jsx)("h3",{children:"Your reviews"}),N===(null==w?void 0:w.user.id)&&(0,a.jsx)("div",{className:"",children:(0,a.jsxs)(r(),{href:"/review/add",className:"btn btn-primary",children:[(0,a.jsx)(s.G,{icon:n.r8p,style:{width:"14px",height:"16px"}}),"\xa0 Add new"]})})]}),0===i.length&&(0,a.jsx)("p",{children:"There are no reviews here yet"}),null==b?void 0:b.map(e=>(0,a.jsx)(h.Z,{data:e,id:N,highlight:p},e._id))]})]})})}},3270:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var a=i(7437),s=i(6716),n=i(4883),l=i(9222),r=i(6525),c=i(3075);function d(e){let{url:t,getCategory:i}=e,{data:s,error:d,isLoading:o}=(0,r.ZP)("http://localhost:3000/api/category",async()=>{let e=await l.Z.get("/api/category");return e.data},{revalidateOnMount:!0,revalidateOnFocus:!1});return(0,a.jsxs)(n.Z.Group,{className:"col col-auto mb-3",children:[(0,a.jsx)(n.Z.Label,{children:"Choice category"}),(0,a.jsx)(c.Z,{children:(0,a.jsxs)(n.Z.Select,{name:"category",placeholder:"Choice category","aria-label":"category",onChange:e=>{i(e.target.value)},children:[(0,a.jsx)("option",{value:"",children:"All categories"}),null==s?void 0:s.map(e=>(0,a.jsx)("option",{value:e.name,children:e.name},e._id))]})})]})}var o=i(504),u=i(2265),h=i(2759);function x(e){let{url:t,getSearch:i}=e,[l,r]=(0,u.useState)("");return i(l),(0,a.jsxs)(n.Z.Group,{className:"col col-auto mb-3",children:[(0,a.jsx)(n.Z.Label,{children:"Enter review title, text, author or comment"}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(c.Z.Text,{className:"text-secondary",children:(0,a.jsx)(o.G,{icon:h.Y$T})}),(0,a.jsx)(n.Z.Control,{placeholder:"Find a review",value:l,"aria-label":"Find a review","aria-describedby":"basic-addon2",onChange:e=>r(e.target.value)}),(0,a.jsx)(s.Z,{variant:"outline-secondary",className:"input-group-text ",id:"basic-addon3",onClick:()=>{r("")},children:(0,a.jsx)(o.G,{icon:h.g82})})]})]})}i(6282);var v=i(3538);function m(e){let{url:t,getTags:i}=e,[s,c]=(0,u.useState)([]),[d,o]=(0,u.useState)([]),{data:h,error:x,isLoading:m}=(0,r.ZP)("http://localhost:3000/api/tags",async()=>{let e=await l.Z.get("/api/tags");return o(e.data.map(e=>e.name)),e.data},{revalidateOnMount:!0,revalidateOnFocus:!1});return i(s),(0,a.jsxs)(n.Z.Group,{className:"col col-auto mb-3",children:[(0,a.jsx)(n.Z.Label,{children:"Choice tags"}),(0,a.jsx)(v.pY,{id:"basic-typeahead-multiple",labelKey:"name",multiple:!0,onChange:c,options:d,placeholder:"Choose several tags...",selected:s,className:"text-body"})]})}function j(e){let{url:t,getReviews:i,getQuery:r}=e,[c,o]=(0,u.useState)(""),[h,v]=(0,u.useState)(""),[j,p]=(0,u.useState)([]),g=async e=>{e.preventDefault();let a=await l.Z.get("http://localhost:3000"+"".concat(t,"?category=").concat(c,"&search=").concat(h,"&tags=").concat(j));i(a.data),r(h)};return(0,a.jsx)("div",{className:"col col-auto mb-3",children:(0,a.jsxs)(n.Z,{onSubmit:g,className:"row",children:[(0,a.jsx)(m,{getTags:e=>{p(e)}}),(0,a.jsx)(d,{getCategory:e=>{o(e)}}),(0,a.jsx)(x,{getSearch:e=>{v(e)}}),(0,a.jsx)(n.Z.Group,{children:(0,a.jsx)(s.Z,{variant:"primary",type:"submit",children:"Search"})})]})})}},1512:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var a=i(7437),s=i(9639);function n(){return(0,a.jsx)("div",{className:"w-100 h-100 position-absolute z-2 d-flex justify-content-center align-items-center",children:(0,a.jsxs)("div",{className:"py-4 px-5 bg-primary rounded d-flex justify-content-center align-items-center",children:[(0,a.jsx)(s.Z,{animation:"border",variant:"light"}),"\xa0",(0,a.jsx)("p",{className:"m-0 text-light",children:"Loading... Please wait"})]})})}},6526:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var a=i(7437),s=i(9222),n=i(2749),l=i(1396),r=i.n(l),c=i(2615),d=i(8829),o=i.n(d);function u(e){var t,i;let{data:l,id:d,highlight:u}=e,{data:h,status:x}=(0,n.useSession)();return(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)(r(),{href:"/review/".concat(null==l?void 0:l._id),className:"col text-decoration-none text-body d-flex ",children:[(0,a.jsx)("div",{className:"mt-2 me-3",style:{maxWidth:"150px"},children:(0,a.jsx)("img",{src:null==l?void 0:l.img,alt:"",className:"object-fit-cover w-100 h-auto",style:{minWidth:"70px"}})}),(0,a.jsxs)("div",{style:{minWidth:"180px"},children:[(0,a.jsx)("h2",{children:null==l?void 0:l.titleReview}),(0,a.jsx)("h4",{children:null==l?void 0:l.titleItem}),(0,a.jsx)("p",{children:null==l?void 0:null===(t=l.category)||void 0===t?void 0:t.name}),(0,a.jsx)("p",{children:null==l?void 0:l.tags.map(e=>(0,a.jsx)("span",{className:"rbt-token p-1",children:e+" "}))}),(0,a.jsx)("div",{className:"mb-3",children:(0,a.jsx)(o(),{highlightClassName:"bg-warning",searchWords:[u],autoEscape:!0,textToHighlight:(null==l?void 0:null===(i=l.desc)||void 0===i?void 0:i.substring(0,200))+"..."})}),(0,a.jsxs)("p",{children:["Rate: ",null==l?void 0:l.rating]}),(0,a.jsx)("div",{className:"d-flex justify-content-between",children:(0,a.jsxs)("p",{children:["Review likes: ",null==l?void 0:l.likes.length]})})]})]}),(d===(null==h?void 0:h.user.id)||(null==h?void 0:h.user.admin))&&(0,a.jsxs)(c.Z,{className:"col col-auto",children:[(0,a.jsx)(c.Z.Toggle,{variant:"secondary",id:"dropdown-basic",children:"More actions"}),(0,a.jsxs)(c.Z.Menu,{children:[(0,a.jsx)(c.Z.Item,{href:"/review/edit/".concat(null==l?void 0:l._id),children:"Edit"}),(0,a.jsx)(c.Z.Divider,{}),(0,a.jsx)(c.Z.Item,{className:"text-danger",onClick:()=>s.Z.delete("/api/review/delete/".concat(null==l?void 0:l._id)),children:"Delete"})]})]})]})}),(0,a.jsx)("hr",{className:"w-100"})]})}},3795:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var a=i(7437),s=i(2265),n=i(4883);function l(e){let{reviews:t,getSort:i}=e,[l,r]=(0,s.useState)("");return""===l&&i(t),(0,a.jsx)("div",{className:"mb-3 col col-auto",children:(0,a.jsxs)(n.Z.Group,{children:[(0,a.jsx)(n.Z.Label,{children:"Sort by"}),(0,a.jsxs)(n.Z.Select,{name:"sort",placeholder:"Sort by","aria-label":"Sort",onChange:e=>{let a=e.target.value;r(a),("title-descending"===a||"title-ascending"===a)&&("title-descending"===a&&t.sort((e,t)=>{let i=e.titleReview.toUpperCase(),a=t.titleReview.toUpperCase();return i<a?1:i>a?-1:0}),"title-ascending"===a&&t.sort((e,t)=>{let i=e.titleReview.toUpperCase(),a=t.titleReview.toUpperCase();return i>a?1:i<a?-1:0}),i(t));let s=t.map(e=>({...e,createdAt:new Date(e.createdAt)}));"date-last"===a&&s.sort((e,t)=>Number(t.createdAt)-Number(e.createdAt)),"date-new"===a&&s.sort((e,t)=>Number(e.createdAt)-Number(t.createdAt)),i(s)},value:l,children:[(0,a.jsx)("option",{value:"",children:"Select Sort Type"}),(0,a.jsx)("option",{value:"title-ascending",children:"Review title ascending"}),(0,a.jsx)("option",{value:"title-descending",children:"Review title descending"}),(0,a.jsx)("option",{value:"date-last",children:"Date latest"}),(0,a.jsx)("option",{value:"date-new",children:"Date oldest"})]})]})})}},9639:function(e,t,i){"use strict";var a=i(4440),s=i.n(a),n=i(2265),l=i(7127),r=i(7437);let c=n.forwardRef(({bsPrefix:e,variant:t,animation:i="border",size:a,as:n="div",className:c,...d},o)=>{e=(0,l.vE)(e,"spinner");let u=`${e}-${i}`;return(0,r.jsx)(n,{ref:o,...d,className:s()(c,u,a&&`${u}-${a}`,t&&`text-${t}`)})});c.displayName="Spinner",t.Z=c}},function(e){e.O(0,[676,302,222,396,883,504,471,753,333,615,829,971,596,744],function(){return e(e.s=6245)}),_N_E=e.O()}]);