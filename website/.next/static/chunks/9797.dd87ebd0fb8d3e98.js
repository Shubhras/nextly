"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9797,2847,313],{9797:function(e,s,i){i.r(s);var t=i(5893),a=i(182);s.default=function(e){var s=e.state,i=void 0===s?[]:s,l=e.title,r=void 0===l?{title:"",description:""}:l;return(0,t.jsx)("div",{className:"ProductCard-new",children:(0,t.jsx)("div",{className:"w-full product-top ",children:(0,t.jsxs)("div",{className:" container-custom pb-5 grid grid-cols-12",children:[(0,t.jsxs)("div",{className:" col-span-12 text-center mb-5 ",children:[(0,t.jsx)("h1",{children:r.title}),(0,t.jsx)("h2",{className:"text-lg ",children:r.description})]}),(0,t.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-5 col-span-12 float-left",children:i&&i.map((function(e,s){return(0,t.jsx)(t.Fragment,{children:s<5?(0,t.jsx)("div",{children:(0,t.jsx)(a.Z,{data:e,className:"rounded-lg m-2 sm:m-3 bg-white group overflow-hidden shadow-sm hover:shadow-xl pb-0 "})},s):""})}))})]})})})}},313:function(e,s,i){i.r(s);var t=i(5893),a=i(5617);s.default=function(e){var s=e.data,i=void 0===s?0:s,l=(0,a.v9)((function(e){return e.settings})).settings;return(0,t.jsx)(t.Fragment,{children:l.price_type?(0,t.jsxs)(t.Fragment,{children:[l.price_icon,i.toLocaleString(void 0,{minimumFractionDigits:2})]}):(0,t.jsxs)(t.Fragment,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2}),l.price_icon]})})}},182:function(e,s,i){var t=i(5893),a=i(1664),l=i.n(a),r=i(1541),n=i(5617),c=i(313),d=i(1674),o=i(7294);s.Z=function(e){var s,i=e.data,a=void 0===i?null:i,u=(e.className,(0,n.v9)((function(e){return e.settings})).settings),m=((0,o.useRef)(null),null===a||void 0===a||null===(s=a.allImages)||void 0===s?void 0:s.sort((function(e,s){return e.order-s.order}))),h=m[0]?d.IMG_URL+m[0].image:"/images/nofoto.jpg";return(0,t.jsx)("div",{className:"product-card",children:(0,t.jsx)("div",{className:" m-2 sm:m-3 bg-white group overflow-hidden pb-0",children:(0,t.jsx)("div",{className:" relative cursor-pointer rounded-lg",children:(0,t.jsx)(l(),{href:"/product/"+a.seo,children:(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsxs)("div",{className:"w-full relative overflow-hidden ",children:[(0,t.jsxs)("span",{className:"".concat(r.Z.getDiscount(a)?"visible":"invisible"," absolute z-10 top-0 mt-2 text-xs float-right py-1 px-2  bg-red-600 text-white"),children:[u.price_type?"%"+Number(r.Z.getDiscount(a)).toFixed(0):Number(r.Z.getDiscount(a)).toFixed(0)+"%"," ","discount"]}),(0,t.jsx)("img",{className:"w-full h-full bg-center group-hover:scale-105 transition-all ",src:h,width:"220",height:"220",alt:a.title}),(0,t.jsx)("ul",{className:"product-links"})]}),(0,t.jsxs)("div",{className:"mt-2 w-full",children:[(0,t.jsxs)("ul",{className:"rating",children:[(0,t.jsx)("li",{className:"fas fa-star"}),(0,t.jsx)("li",{className:"fas fa-star"}),(0,t.jsx)("li",{className:"fas fa-star"}),(0,t.jsx)("li",{className:"far fa-star"}),(0,t.jsx)("li",{className:"far fa-star"})]}),(0,t.jsx)("div",{className:" font-bold pro-detail w-full h-11 overflow-hidden px-1 mt-2 text-black",children:a.title}),(0,t.jsxs)("div",{className:" text-md h-12 z-10 relative ",children:[(0,t.jsx)("span",{className:"font-bold",children:a.type?function(e){if(e.length>0){var s=e.sort((function(e,s){return e.price-s.price}));return(0,t.jsxs)("span",{children:[(0,t.jsx)(c.default,{data:s[0].price})," -"," ",(0,t.jsx)(c.default,{data:s[e.length-1].price})," "]})}}(a.variant_products):(0,t.jsx)(c.default,{data:a.price})}),(0,t.jsx)("span",{className:" line-through w-3/12 float-left ",children:a.type?"":(0,t.jsxs)(t.Fragment,{children:[" ",0!=a.before_price?(0,t.jsx)(c.default,{data:a.before_price}):""]})})]})]})]})})})},a._id)})}}}]);