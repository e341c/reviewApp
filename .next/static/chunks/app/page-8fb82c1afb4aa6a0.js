(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5440:function(e,i,n){Promise.resolve().then(n.bind(n,4976))},4976:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return a}});var s=n(7437),l=n(2115),r=n(9222),t=n(2333);function a(){let{data:e,error:i,isLoading:n}=(0,t.ZP)("/api/review",async()=>{let e=await r.Z.get("/api/review");return e.data});return(console.log(e),n)?(0,s.jsx)("p",{children:"Loading..."}):i?(console.log(i),(0,s.jsx)("p",{children:i.message})):0===e.length?(0,s.jsx)("p",{children:"There are no reviews here yet"}):(0,s.jsxs)("div",{className:"vh-100",children:[(0,s.jsx)("h1",{className:"display-3 mb-5",children:"HOME PAGE"}),e.map(e=>(0,s.jsx)(l.Z,{reviewData:e}))]})}},2115:function(e,i,n){"use strict";n.d(i,{Z:function(){return d}});var s=n(7437),l=n(2749),r=n(1396),t=n.n(r),a=n(9588);function d(e){var i,n,r;let{reviewData:d}=e,c=JSON.parse(JSON.stringify(d.tags)),{data:o,status:u}=(0,l.useSession)();return(0,s.jsxs)("div",{className:"mb-5",children:[(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)(t(),{href:"/review/".concat(null==d?void 0:d._id),className:"text-decoration-none text-body",children:(0,s.jsx)("div",{className:"me-5 mt-2",children:(0,s.jsx)("img",{src:null==d?void 0:d.img,alt:"",className:"object-fit-cover",style:{width:"156px",height:"231px",background:"red"}})})}),(0,s.jsxs)("div",{className:"w-75",children:[(0,s.jsxs)(t(),{href:"/review/".concat(d._id),className:"text-decoration-none text-body",children:[(0,s.jsx)("h2",{children:null==d?void 0:d.titleReview}),(0,s.jsx)("h4",{children:null==d?void 0:d.titleItem}),(0,s.jsx)("p",{children:null==d?void 0:null===(i=d.category)||void 0===i?void 0:i.name}),(0,s.jsx)("p",{children:c.map(e=>{let i=JSON.parse(e);return i.name+" "})}),(0,s.jsx)(a.D,{children:(null==d?void 0:null===(n=d.desc)||void 0===n?void 0:n.substring(0,200))+"..."}),(0,s.jsxs)("p",{children:["Rate: ",null==d?void 0:d.rating]})]}),(0,s.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,s.jsxs)("p",{children:["Review likes: ",null==d?void 0:d.likes]}),d.author.name&&(0,s.jsxs)("p",{children:["Author: \xa0",(0,s.jsx)(t(),{href:(null==d?void 0:d.author._id)===o.user.id?"/profile":"/profile/".concat(null==d?void 0:null===(r=d.author)||void 0===r?void 0:r._id),className:"text-primary",children:null==d?void 0:d.author.name})]})]})]})]}),(0,s.jsx)("hr",{className:"w-100"})]})}}},function(e){e.O(0,[726,222,749,588,333,971,596,744],function(){return e(e.s=5440)}),_N_E=e.O()}]);