(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{8897:function(e,a,l){Promise.resolve().then(l.bind(l,2297))},2297:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return x}});var s=l(7437),t=l(1279),i=l(2759),n=l(2749),r=l(6525),c=l(9222),o=l(4033),d=l(6526),u=l(2265),h=l(3270);function x(e){let{params:a}=e,[l,x]=(0,u.useState)([]),[v,m]=(0,u.useState)(),[j,p]=(0,u.useState)(""),{id:g}=a,{data:f,status:Z}=(0,n.useSession)(),y=(0,o.useRouter)();g===(null==f?void 0:f.user.id)&&y.push("/profile");let{data:b,error:w,isLoading:N}=(0,r.ZP)("/api/profile/".concat(g),async()=>{let e=await c.Z.get("/api/profile/".concat(g)),a=await c.Z.get("/api/profile/user/".concat(g));return x(e.data),m(a.data),e.data},{revalidateOnFocus:!1,revalidateOnMount:!0});if(N)return(0,s.jsx)("p",{children:"Loading..."});if(w)return console.log(w),(0,s.jsx)("p",{children:"Something went wrong. Try to reload page"});let S=[];return null==l||l.filter(e=>{e.likes.length>0&&S.push(...e.likes)}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"row",style:{marginTop:"80px"},children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("h3",{className:"mb-4",children:[null==v?void 0:v.name,"'s profile"]}),(0,s.jsx)("div",{className:"col col-md-3 mb-4",children:(0,s.jsxs)("div",{className:"p-3 shadow rounded",children:[(0,s.jsx)("p",{children:null==v?void 0:v.name}),(0,s.jsx)("p",{children:null==v?void 0:v.email}),(0,s.jsxs)("p",{children:[(0,s.jsxs)("strong",{children:[" ",null==l?void 0:l.length," "]})," reviews"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(t.G,{icon:i.m6i}),"\xa0",(0,s.jsx)("strong",{children:S.length}),"\xa0likes"]})]})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(h.Z,{url:"/api/profile/".concat(g),getQuery:e=>{p(e)},getReviews:e=>{x(e)}})})]}),(0,s.jsxs)("div",{className:"col",style:{minWidth:"70%"},children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)("h3",{children:[null==v?void 0:v.name," reviews"]})}),0===l.length&&(0,s.jsx)("p",{children:"There are no reviews here yet"}),null==l?void 0:l.map(e=>(0,s.jsx)(d.Z,{data:e,id:g,highlight:j}))]})]})})}},3270:function(e,a,l){"use strict";l.d(a,{Z:function(){return j}});var s=l(7437),t=l(6716),i=l(4883),n=l(9222),r=l(6525),c=l(3075);function o(e){let{url:a,getCategory:l}=e,{data:t,error:o,isLoading:d}=(0,r.ZP)("http://localhost:3000/api/category",async()=>{let e=await n.Z.get("/api/category");return e.data},{revalidateOnMount:!0,revalidateOnFocus:!1});return(0,s.jsxs)(i.Z.Group,{className:"col col-auto mb-3",children:[(0,s.jsx)(i.Z.Label,{children:"Choice category"}),(0,s.jsx)(c.Z,{children:(0,s.jsxs)(i.Z.Select,{name:"category",placeholder:"Choice category","aria-label":"category",onChange:e=>{l(e.target.value)},children:[(0,s.jsx)("option",{value:"",children:"All categories"}),null==t?void 0:t.map(e=>(0,s.jsx)("option",{value:e.name,children:e.name},e.key))]})})]})}var d=l(1279),u=l(2265),h=l(2759);function x(e){let{url:a,getSearch:l}=e,[n,r]=(0,u.useState)("");return l(n),(0,s.jsxs)(i.Z.Group,{className:"col col-auto mb-3",children:[(0,s.jsx)(i.Z.Label,{children:"Enter review title, text, author or comment"}),(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(c.Z.Text,{className:"text-secondary",children:(0,s.jsx)(d.G,{icon:h.Y$T})}),(0,s.jsx)(i.Z.Control,{placeholder:"Find a review",value:n,"aria-label":"Find a review","aria-describedby":"basic-addon2",onChange:e=>r(e.target.value)}),(0,s.jsx)(t.Z,{variant:"outline-secondary",className:"input-group-text ",id:"basic-addon3",onClick:()=>{r("")},children:(0,s.jsx)(d.G,{icon:h.g82})})]})]})}l(6282);var v=l(3538);function m(e){let{url:a,getTags:l}=e,[t,c]=(0,u.useState)([]),[o,d]=(0,u.useState)([]),{data:h,error:x,isLoading:m}=(0,r.ZP)("http://localhost:3000/api/tags",async()=>{let e=await n.Z.get("/api/tags");return d(e.data.map(e=>e.name)),e.data},{revalidateOnMount:!0,revalidateOnFocus:!1});return l(t),(0,s.jsxs)(i.Z.Group,{className:"col col-auto mb-3",children:[(0,s.jsx)(i.Z.Label,{children:"Choice tags"}),(0,s.jsx)(v.pY,{id:"basic-typeahead-multiple",labelKey:"name",multiple:!0,onChange:c,options:o,placeholder:"Choose several tags...",selected:t,className:"text-body"})]})}function j(e){let{url:a,getReviews:l,getQuery:r}=e,[c,d]=(0,u.useState)(""),[h,v]=(0,u.useState)(""),[j,p]=(0,u.useState)([]);console.log(j,h,c);let g=async e=>{e.preventDefault();let s=await n.Z.get("http://localhost:3000"+"".concat(a,"?category=").concat(c,"&search=").concat(h,"&tags=").concat(j));l(s.data),r(h)};return(0,s.jsx)("div",{className:"col col-auto",children:(0,s.jsxs)(i.Z,{onSubmit:g,className:"row",children:[(0,s.jsx)(m,{getTags:e=>{p(e)}}),(0,s.jsx)(o,{getCategory:e=>{d(e)}}),(0,s.jsx)(x,{getSearch:e=>{v(e)}}),(0,s.jsx)(i.Z.Group,{children:(0,s.jsx)(t.Z,{variant:"primary",type:"submit",children:"Search"})})]})})}},6526:function(e,a,l){"use strict";l.d(a,{Z:function(){return u}});var s=l(7437),t=l(9222),i=l(2749),n=l(1396),r=l.n(n);l(2265);var c=l(2615),o=l(8829),d=l.n(o);function u(e){var a,l;let{data:n,id:o,highlight:u}=e,{data:h,status:x}=(0,i.useSession)();return(0,s.jsxs)("div",{className:"mb-5",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)(r(),{href:"/review/".concat(null==n?void 0:n._id),className:"col text-decoration-none text-body d-flex ",children:[(0,s.jsx)("div",{className:"mt-2 me-3",style:{maxWidth:"150px"},children:(0,s.jsx)("img",{src:null==n?void 0:n.img,alt:"",className:"object-fit-cover w-100 h-auto",style:{minWidth:"70px"}})}),(0,s.jsxs)("div",{style:{minWidth:"180px"},children:[(0,s.jsx)("h2",{children:null==n?void 0:n.titleReview}),(0,s.jsx)("h4",{children:null==n?void 0:n.titleItem}),(0,s.jsx)("p",{children:null==n?void 0:null===(a=n.category)||void 0===a?void 0:a.name}),(0,s.jsx)("p",{children:null==n?void 0:n.tags.map(e=>(0,s.jsx)("span",{className:"rbt-token p-1",children:e+" "}))}),(0,s.jsx)("div",{className:"mb-3",children:(0,s.jsx)(d(),{highlightClassName:"bg-warning",searchWords:[u],autoEscape:!0,textToHighlight:(null==n?void 0:null===(l=n.desc)||void 0===l?void 0:l.substring(0,200))+"..."})}),(0,s.jsxs)("p",{children:["Rate: ",null==n?void 0:n.rating]}),(0,s.jsx)("div",{className:"d-flex justify-content-between",children:(0,s.jsxs)("p",{children:["Review likes: ",null==n?void 0:n.likes.length]})})]})]}),(o===(null==h?void 0:h.user.id)||(null==h?void 0:h.user.admin))&&(0,s.jsxs)(c.Z,{className:"col col-auto",children:[(0,s.jsx)(c.Z.Toggle,{variant:"secondary",id:"dropdown-basic",children:"More actions"}),(0,s.jsxs)(c.Z.Menu,{children:[(0,s.jsx)(c.Z.Item,{href:"/review/edit/".concat(null==n?void 0:n._id),children:"Edit"}),(0,s.jsx)(c.Z.Divider,{}),(0,s.jsx)(c.Z.Item,{className:"text-danger",onClick:()=>t.Z.delete("/api/review/delete/".concat(null==n?void 0:n._id)),children:"Delete"})]})]})]})}),(0,s.jsx)("hr",{className:"w-100"})]},null==n?void 0:n._id)}},4033:function(e,a,l){e.exports=l(8165)}},function(e){e.O(0,[676,504,749,222,883,279,471,195,333,615,971,596,744],function(){return e(e.s=8897)}),_N_E=e.O()}]);