"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8942,313],{801:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1413),i=r(7294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"check-square",theme:"outlined"},c=r(2135),s=function(t,e){return i.createElement(c.Z,(0,n.Z)((0,n.Z)({},t),{},{ref:e,icon:a}))};s.displayName="CheckSquareOutlined";var o=i.forwardRef(s)},6159:function(t,e,r){r.d(e,{Tm:function(){return a},l$:function(){return i}});var n=r(7294),i=n.isValidElement;function a(t,e){return function(t,e,r){return i(t)?n.cloneElement(t,"function"===typeof r?r(t.props||{}):r):e}(t,t,e)}},7049:function(t,e,r){var n=r(7462),i=r(4942),a=r(7294),c=r(4184),s=r.n(c),o=r(9844),l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};e.Z=function(t){var e,r=a.useContext(o.E_),c=r.getPrefixCls,d=r.direction,u=t.prefixCls,p=t.type,f=void 0===p?"horizontal":p,h=t.orientation,m=void 0===h?"center":h,g=t.orientationMargin,x=t.className,v=t.children,b=t.dashed,_=t.plain,j=l(t,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),y=c("divider",u),N=m.length>0?"-".concat(m):m,w=!!v,k="left"===m&&null!=g,Z="right"===m&&null!=g,P=s()(y,"".concat(y,"-").concat(f),(e={},(0,i.Z)(e,"".concat(y,"-with-text"),w),(0,i.Z)(e,"".concat(y,"-with-text").concat(N),w),(0,i.Z)(e,"".concat(y,"-dashed"),!!b),(0,i.Z)(e,"".concat(y,"-plain"),!!_),(0,i.Z)(e,"".concat(y,"-rtl"),"rtl"===d),(0,i.Z)(e,"".concat(y,"-no-default-orientation-margin-left"),k),(0,i.Z)(e,"".concat(y,"-no-default-orientation-margin-right"),Z),e),x),S=(0,n.Z)((0,n.Z)({},k&&{marginLeft:g}),Z&&{marginRight:g});return a.createElement("div",(0,n.Z)({className:P},j,{role:"separator"}),v&&a.createElement("span",{className:"".concat(y,"-inner-text"),style:S},v))}},8597:function(t,e,r){r.r(e);var n=r(4051),i=r.n(n),a=r(5893),c=r(9669),s=r.n(c),o=r(7294),l=r(1163),d=r.n(l),u=r(6536),p=r(1577),f=r(7049),h=r(313),m=r(801),g=r(5617),x=r(1674),v=r(1541),b=r(4840);function _(t,e,r,n,i,a,c){try{var s=t[a](c),o=s.value}catch(l){return void r(l)}s.done?e(o):Promise.resolve(o).then(n,i)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){_(a,n,i,c,s,"next",t)}function s(t){_(a,n,i,c,s,"throw",t)}c(void 0)}))}}e.default=function(){var t=(0,g.v9)((function(t){return t.basket})).basket,e=(0,g.v9)((function(t){return t.login})).user,r=(0,o.useState)({}),n=r[0],c=r[1],l=(0,o.useState)({}),_=l[0],y=l[1],N=(0,o.useState)({cargo_price_discount:0,cargo_price:0,selectedCargo:0}),w=N[0],k=N[1],Z=(0,o.useState)({total:0,discount:0,cargo_price:0,cargo_price_discount:0}),P=Z[0],S=Z[1],q=(0,g.I0)(),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,n=0,i=[];e.map((function(e){var a=t.find((function(t){return t._id==e.product_id}));if(a){var c=a;if(void 0!==e.selectedVariants){var s=v.Z.filter_array_in_obj(c.variant_products,e.selectedVariants);!1===s[0].visible?i.push("Product Not Active"):Number(s[0].qty)<Number(e.qty)?i.push("Product Not in Stock"):i.push(null),r+=e.qty*s[0].price,n+=e.qty*s[0].before_price}else!1===c.isActive?i.push("Product Not Active"):Number(c.qty)<Number(e.qty)?i.push("Product Not in Stock"):i.push(null),r+=e.qty*c.price,n+=e.qty*c.before_price}})),S({total:r,discount:n,error:i})},A=function(){var e=j(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=7;break}return r=[],t[0].products.map((function(t){r.push(t.product_id)})),e.next=5,s().post("".concat(x.API_URL,"/basket/allproducts"),{_id:r}).then((function(e){C(e.data,t[0].products)}));case 5:c(t[0].billing_address),y(t[0].shipping_address);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=j(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(x.API_URL,"/cargoespublic")).then((function(e){t.length>0&&(t[0].cargoes_id?k({cargo_price:t[0].cargo_price,cargo_price_discount:t[0].cargo_price_discount,selectedCargo:t[0].cargoes_id}):k({cargo_price:e.data[0].price,cargo_price_discount:e.data[0].before_price,selectedCargo:e.data[0]._id}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var r=j(i().mark((function r(){var n,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=[],a=[],t[0].products.map((function(t){a.push(t.product_id)})),r.next=5,s().post("".concat(x.API_URL,"/basket/allproducts"),{_id:a}).then((function(e){var r=e.data,i=t[0].products;i.map((function(t){var e=r.find((function(e){return e._id==t.product_id}));if(e){var i=e;if(void 0!==t.selectedVariants){var a=v.Z.filter_array_in_obj(i.variant_products,t.selectedVariants);!1===a[0].visible||Number(a[0].qty)<Number(t.qty)?n.push(!0):n.push(!1),t.qty*a[0].price,t.qty*a[0].before_price}else!1===i.isActive||Number(i.qty)<Number(t.qty)?n.push(!0):n.push(!1),t.qty*i.price,t.qty*i.before_price}}))}));case 5:!1,void 0===n.find((function(t){return 1==t}))?d().push("/basket/payment"):(q((0,b.XJ)(e.id)),u.ZP.loading("Action in progress..",.5).then((function(){return u.ZP.error("Please Control Your Basket",2.5)})),d().push("/basket"));case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,o.useEffect)((function(){E(),A()}),[t[0]]),(0,a.jsxs)("div",{className:"h-full relative",children:[(0,a.jsx)("div",{className:" h-20",children:(0,a.jsxs)(p.Z,{disabled:!n||!_,className:"bg-black w-full h-auto absolute top-0 cursor-pointer hover:text-white hover:bg-brand-color transition-all text-xl text-white p-5",onClick:O,children:["Save and Continue",(0,a.jsx)(m.Z,{className:"float-right text-3xl"})]})}),(0,a.jsx)("div",{className:"text-lg p-3 -mt-2 bg-gray-50 font-semibold",children:"Shipping Address Summary"}),(0,a.jsx)("div",{className:"w-full p-4",children:_?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("b",{children:[_.name," "]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"flex w-full justify-between pt-1 ",children:[_.address,(0,a.jsx)("br",{}),_.village_id,"/",_.town_id,"/",_.city_id,"/",_.country_id]})]}):(0,a.jsx)("div",{className:"text-red-500 text-center font-semibold p-4",children:"Please Select Address"})}),(0,a.jsx)("div",{className:"text-lg p-3 bg-gray-50 font-semibold",children:"Billing Address Summary"}),(0,a.jsx)("div",{className:"w-full p-4 ",children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("b",{children:[n.name," "]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"flex w-full justify-between pt-1 ",children:[n.address,(0,a.jsx)("br",{}),n.village_id,"/",n.town_id,"/",n.city_id,"/",n.country_id]})]}):(0,a.jsx)("div",{className:"text-red-500 text-center font-semibold p-4",children:"Please Select Address"})}),(0,a.jsx)("div",{className:"text-lg p-3 bg-gray-50 font-semibold",children:"Cargo Summary"}),(0,a.jsxs)("div",{className:"w-full px-4 ",children:[w.cargo_price_discount>0?(0,a.jsxs)("div",{className:"w-full mt-3 ",children:[(0,a.jsx)("span",{children:"Cargo Discount:"}),(0,a.jsx)("span",{className:"float-right font-semibold line-through",children:(0,a.jsx)(h.default,{data:w.cargo_price_discount})})]}):"",(0,a.jsxs)("div",{className:"w-full mt-3 ",children:[(0,a.jsx)("span",{children:"Cargo Price:"}),(0,a.jsx)("span",{className:"float-right font-semibold",children:(0,a.jsx)(h.default,{data:w.cargo_price})})]})]}),(0,a.jsx)("div",{className:"text-lg p-3 my-5 bg-gray-50 font-semibold",children:"Basket Summary"}),P.discount+w.cargo_price_discount>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full px-4 mt-1",children:[(0,a.jsx)("span",{children:"Total Discount:"}),(0,a.jsx)("span",{className:"float-right line-through font-semibold",children:(0,a.jsx)(h.default,{data:P.discount+w.cargo_price_discount})})]}),(0,a.jsx)(f.Z,{})]}):"",(0,a.jsxs)("div",{className:"w-full px-4 text-lg mb-6",children:[(0,a.jsx)("span",{children:"Total Price:"}),(0,a.jsx)("span",{className:"float-right font-semibold text-brand-color",children:(0,a.jsx)(h.default,{data:P.total+w.cargo_price})})]}),(0,a.jsx)("div",{className:" h-20",children:(0,a.jsxs)(p.Z,{disabled:!n||!_,className:"bg-black w-full h-auto absolute bottom-0 cursor-pointer hover:text-white hover:bg-brand-color transition-all text-xl text-white p-5",onClick:O,children:["Save and Continue",(0,a.jsx)(m.Z,{className:"float-right text-3xl"})]})})]})}},313:function(t,e,r){r.r(e);var n=r(5893),i=r(5617);e.default=function(t){var e=t.data,r=void 0===e?0:e,a=(0,i.v9)((function(t){return t.settings})).settings;return(0,n.jsx)(n.Fragment,{children:a.price_type?(0,n.jsxs)(n.Fragment,{children:[a.price_icon,r.toLocaleString(void 0,{minimumFractionDigits:2})]}):(0,n.jsxs)(n.Fragment,{children:[r.toLocaleString(void 0,{minimumFractionDigits:2}),a.price_icon]})})}}}]);