(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{8939:function(e,t,n){Promise.resolve().then(n.bind(n,6456))},6456:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7437),a=n(2265),i=n(9222),s=n(5566);let o=s.env.REACT_APP_API_URL,l=i.Z.create({baseURL:o,headers:{"x-user-id":123}});var u=e=>{let{url:t,method:n="POST"}=e,[r,i]=(0,a.useState)({isLoading:!1,error:""}),s=async e=>{i(e=>({...e,isLoading:!0})),l({url:t,method:n,data:e}).then(()=>{i({isLoading:!1,error:""})}).catch(e=>{i({isLoading:!1,error:e.message})})};return{mutate:s,...r}};let c=["image/jpg","image/jpeg","image/png"];var g=()=>{let{mutate:e,isLoading:t,error:n}=u({url:"http://localhost:3001/images"}),a=async t=>{let n=t.target.files[0];if(console.log(n),!c.find(e=>e===n.type)){console.log("File must be in JPG/PNG format");return}let r=new FormData;r.append("image",n),await e(r)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"file",onChange:a}),(0,r.jsx)("button",{children:"Upload"})]})}}},function(e){e.O(0,[815,222,971,596,744],function(){return e(e.s=8939)}),_N_E=e.O()}]);