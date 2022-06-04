"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7286,313],{6743:function(e,t,n){var r=n(7462),i=n(7685),a=n(7294),o=n(470),c=n(1577),s=n(6134);function l(e){return!(!e||!e.then)}t.Z=function(e){var t=a.useRef(!1),n=a.useRef(),u=(0,o.Z)(!1),d=(0,i.Z)(u,2),f=d[0],m=d[1];a.useEffect((function(){var t;if(e.autoFocus){var r=n.current;t=setTimeout((function(){return r.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var p=e.type,h=e.children,v=e.prefixCls,x=e.buttonProps;return a.createElement(c.Z,(0,r.Z)({},(0,s.n)(p),{onClick:function(n){var r=e.actionFn,i=e.close;if(!t.current)if(t.current=!0,r){var a;if(e.emitEvent){if(a=r(n),e.quitOnNullishReturnValue&&!l(a))return t.current=!1,void i(n)}else if(r.length)a=r(i),t.current=!1;else if(!(a=r()))return void i();!function(n){var r=e.close;l(n)&&(m(!0),n.then((function(){m(!1,!0),r.apply(void 0,arguments),t.current=!1}),(function(e){console.error(e),m(!1,!0),t.current=!1})))}(a)}else i()},loading:f,prefixCls:v},x,{ref:n}),h)}},7286:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(4051),i=n.n(r),a=n(5893),o=n(9669),c=n.n(o),s=n(7294),l=n(7462),u=n(7685),d=n(4184),f=n.n(d),m=n(1770),p=n(1640),h=n(5105),v=n(8469),x=n(1577),b=n(6134),y=n(3715),g=n(6213),N=n(9844),_=n(6159),j=n(3603),k=n(6743),w=void 0,S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},V=s.forwardRef((function(e,t){var n=s.useContext(N.E_).getPrefixCls,r=(0,m.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),i=(0,u.Z)(r,2),a=i[0],o=i[1],c=function(t,n){var r;o(t,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,t,n)},d=function(e){c(!1,e)},p=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(w,t)},V=function(t){var n;c(!1,t),null===(n=e.onCancel)||void 0===n||n.call(w,t)},C=e.prefixCls,P=e.placement,O=e.children,Z=e.overlayClassName,E=S(e,["prefixCls","placement","children","overlayClassName"]),q=n("popover",C),A=n("popconfirm",C),I=f()(A,Z),J=s.createElement(y.Z,{componentName:"Popconfirm",defaultLocale:g.Z.Popconfirm},(function(t){return function(t,r){var i,a=e.okButtonProps,o=e.cancelButtonProps,c=e.title,u=e.cancelText,f=e.okText,m=e.okType,h=e.icon,v=e.showCancel,y=void 0===v||v;return s.createElement("div",{className:"".concat(t,"-inner-content")},s.createElement("div",{className:"".concat(t,"-message")},h,s.createElement("div",{className:"".concat(t,"-message-title")},(i=c)?"function"===typeof i?i():i:null)),s.createElement("div",{className:"".concat(t,"-buttons")},y&&s.createElement(x.Z,(0,l.Z)({onClick:V,size:"small"},o),u||r.cancelText),s.createElement(k.Z,{buttonProps:(0,l.Z)((0,l.Z)({size:"small"},(0,b.n)(m)),a),actionFn:p,close:d,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},f||r.okText)))}(q,t)})),T=n();return s.createElement(v.Z,(0,l.Z)({},E,{prefixCls:q,placement:P,onVisibleChange:function(t){e.disabled||c(t)},visible:a,overlay:J,overlayClassName:I,ref:t,transitionName:(0,j.mL)(T,"zoom-big",e.transitionName)}),(0,_.Tm)(O,{onKeyDown:function(e){var t,n;s.isValidElement(O)&&(null===(n=null===O||void 0===O?void 0:(t=O.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===h.Z.ESC&&a&&c(!1,e)}(e)}}))}));V.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:s.createElement(p.Z,null),disabled:!1};var C=V,P=n(6536),O=n(3048),Z=n(313),E=n(1413),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},A=n(2135),I=function(e,t){return s.createElement(A.Z,(0,E.Z)((0,E.Z)({},e),{},{ref:t,icon:q}))};I.displayName="DeleteOutlined";var J=s.forwardRef(I),T=n(5617),F=n(1674),z=n(1541),L=n(4840);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){D(a,r,i,o,c,"next",e)}function c(e){D(a,r,i,o,c,"throw",e)}o(void 0)}))}}function U(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(){var e=(0,T.v9)((function(e){return e.basket})).basket,t=(0,T.v9)((function(e){return e.login})),n=t.isAuthenticated,r=t.user,o=(0,s.useState)([]),l=o[0],u=o[1],d=(0,s.useState)(!1),f=d[0],m=d[1],p=(0,T.I0)(),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];t.map((function(t){var r=e.find((function(e){return e._id==t.product_id}));if(r){var i=r,a=[];if(void 0!==t.selectedVariants){var o=z.Z.filter_array_in_obj(i.variant_products,t.selectedVariants);!1===o[0].visible?a.push("Product Not Active"):Number(o[0].qty)<Number(t.qty)?a.push("Product Not in Stock"):a.push(null),n.push({_id:i._id,title:i.title,selectedVariants:t.selectedVariants,qty:t.qty,price:o[0].price,before_price:o[0].before_price,total_price:t.qty*o[0].price,total_discount:t.qty*o[0].before_price,error:a,seo:i.seo})}else!1===i.isActive?a.push("Product Not Active"):Number(i.qty)<Number(t.qty)?a.push("Product Not in Stock"):a.push(null),n.push({_id:i._id,title:i.title,selectedVariants:t.selectedVariants,qty:t.qty,price:i.price,before_price:i.before_price,total_price:t.qty*i.price,total_discount:t.qty*i.before_price,error:a,seo:i.seo})}})),u(n.sort((function(e,t){return(e.price+e.seo+JSON.stringify(e.selectedVariants)).length-(t.price+t.seo+JSON.stringify(t.selectedVariants)).length})))},v=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Product Update!";n?c().post("".concat(F.API_URL,"/basket/").concat(e[0]._id),t).then(H(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.ZP.success({content:a,duration:3}),e.next=3,p((0,L.XJ)(r.id));case 3:m(!1);case 4:case"end":return e.stop()}}),e)})))).catch((function(e){P.ZP.error({content:"Some Error, Please Try Again",duration:3}),console.log(e)})):(P.ZP.success({content:a,duration:3}),p((0,L.j7)([t])),x(),m(!1))},x=function(){var t=H(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length>0)){t.next=5;break}return n=[],e[0].products.map((function(e){n.push(e.product_id)})),t.next=5,c().post("".concat(F.API_URL,"/basket/allproducts"),{_id:n}).then((function(t){h(t.data,e[0].products)}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){x()}),[e[0]]);var b=function(t){var n;m(!0);var i=[],a=e[0].products.filter((function(e){return e.product_id!=t._id||JSON.stringify(e.selectedVariants)!=JSON.stringify(t.selectedVariants)}));(n=i).push.apply(n,U(a));var o={created_user:{name:r.name,id:r.id},customer_id:r.id,products:i};v(o,"Delete Product!")},y=function(t){var n;m(!0);var i=e[0].products,a=[],o=i.find((function(e){return e.product_id==t._id&&JSON.stringify(e.selectedVariants)==JSON.stringify(t.selectedVariants)})),c=i.filter((function(e){return e.product_id!=t._id||JSON.stringify(e.selectedVariants)!=JSON.stringify(t.selectedVariants)}));(n=a).push.apply(n,U(c).concat([{product_id:t._id,selectedVariants:t.selectedVariants,qty:o.qty+1,seo:t.seo}]));var s={created_user:{name:r.name,id:r.id},customer_id:r.id,products:a};v(s)},g=function(t){var n;m(!0);var i=e[0].products,a=[],o=i.find((function(e){return e.product_id==t._id&&JSON.stringify(e.selectedVariants)==JSON.stringify(t.selectedVariants)})),c=i.filter((function(e){return e.product_id!=t._id||JSON.stringify(e.selectedVariants)!=JSON.stringify(t.selectedVariants)}));(n=a).push.apply(n,U(c).concat([{product_id:t._id,selectedVariants:t.selectedVariants,qty:o.qty>1?o.qty-1:o.qty,seo:t.seo}]));var s={created_user:{name:r.name,id:r.id},customer_id:r.id,products:a};v(s)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(O.Z,{pagination:!1,loading:f,columns:[{title:"Title",dataIndex:"title",key:"title",render:function(e,t){var n=[];t.error.map((function(e){n.push((0,a.jsxs)("div",{className:"text-xs ",children:[" ",e," "]}))}));var r=[];for(var i in t.selectedVariants)r.push((0,a.jsxs)("div",{className:"text-xs ",children:[" ",(0,a.jsxs)("span",{className:"font-semibold",children:[" ",i]}),":"," ",t.selectedVariants[i]," "]}));return(0,a.jsxs)("span",{className:"link",children:[(0,a.jsxs)("div",{className:"float-left mb-5 w-full",children:[(0,a.jsx)("span",{className:"float-right text-right sm:hidden ",children:(0,a.jsx)(C,{placement:"left",title:"Are You Sure?",onConfirm:function(){b(t)},children:(0,a.jsxs)("a",{children:[(0,a.jsx)(J,{style:{fontSize:"150%",marginLeft:"15px"}})," "]})})}),(0,a.jsx)("div",{className:"text-red-500 float-left",children:n}),(0,a.jsx)("span",{className:"font-semibold",children:e}),r.length>0?(0,a.jsxs)(a.Fragment,{children:[" ",r]}):(0,a.jsx)(a.Fragment,{children:" "})]}),(0,a.jsxs)("div",{className:" float-left sm:hidden flex flex-row h-10 my-2 rounded w-24 relative bg-transparent border-gray-200 border ",children:[(0,a.jsx)("button",{"data-action":"decrement",className:" bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-l cursor-pointer outline-none",onClick:function(){g(t)},children:(0,a.jsx)("span",{className:"m-auto text-2xl font-thin",children:"\u2212"})}),(0,a.jsx)("input",{type:"number",className:"outline-none hiddenArrowInputNumber focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 ",name:"custom-input-number",value:t.qty}),(0,a.jsx)("button",{"data-action":"increment",className:"bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-r cursor-pointer",onClick:function(){y(t)},children:(0,a.jsx)("span",{className:"m-auto text-2xl font-thin",children:"+"})})]}),(0,a.jsxs)("div",{className:"text-center float-right sm:hidden ",children:[(0,a.jsxs)("span",{className:" text-md line-through",children:[" ",0!=t.total_discount?(0,a.jsx)(Z.default,{data:t.total_discount}):""]}),(0,a.jsx)("div",{className:" text-lg text-brand-color",children:(0,a.jsx)(Z.default,{data:t.total_price})})]})]})}},{title:"Price",dataIndex:"price",key:"price",className:"hidden sm:table-cell ",render:function(e,t){return(0,a.jsxs)("div",{className:"text-center ",children:[(0,a.jsx)("span",{className:" text-md line-through",children:0!=t.before_price?(0,a.jsx)(Z.default,{data:t.before_price}):""}),(0,a.jsx)("div",{className:" text-sm ",children:(0,a.jsx)(Z.default,{data:t.price})})]})}},{title:"Qty",dataIndex:"action",key:"action",className:"hidden sm:table-cell ",render:function(e,t){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-row h-10 rounded w-24 relative bg-transparent border-gray-200 border mt-1",children:[(0,a.jsx)("button",{"data-action":"decrement",className:" bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-l cursor-pointer outline-none",onClick:function(){g(t)},children:(0,a.jsx)("span",{className:"m-auto text-2xl font-thin",children:"\u2212"})}),(0,a.jsx)("input",{type:"number",className:"outline-none hiddenArrowInputNumber focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 ",name:"custom-input-number",value:t.qty}),(0,a.jsx)("button",{"data-action":"increment",className:"bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-r cursor-pointer",onClick:function(){y(t)},children:(0,a.jsx)("span",{className:"m-auto text-2xl font-thin",children:"+"})})]})})}},{title:"Total Price",dataIndex:"total_price",key:"total_price",className:"hidden sm:table-cell ",render:function(e,t){return(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsxs)("span",{className:" text-md line-through",children:[" ",0!=t.total_discount?(0,a.jsx)(Z.default,{data:t.total_discount}):""]}),(0,a.jsx)("div",{className:" text-lg text-brand-color",children:(0,a.jsx)(Z.default,{data:t.total_price})})]})}},{title:"Delete",dataIndex:"action",key:"action",className:"hidden sm:table-cell ",render:function(e,t){return(0,a.jsx)(C,{placement:"left",title:"Are You Sure?",onConfirm:function(){b(t)},children:(0,a.jsxs)("a",{children:[(0,a.jsx)(J,{style:{fontSize:"150%",marginLeft:"15px"}})," "]})})}}],dataSource:U(l)})})}},313:function(e,t,n){n.r(t);var r=n(5893),i=n(5617);t.default=function(e){var t=e.data,n=void 0===t?0:t,a=(0,i.v9)((function(e){return e.settings})).settings;return(0,r.jsx)(r.Fragment,{children:a.price_type?(0,r.jsxs)(r.Fragment,{children:[a.price_icon,n.toLocaleString(void 0,{minimumFractionDigits:2})]}):(0,r.jsxs)(r.Fragment,{children:[n.toLocaleString(void 0,{minimumFractionDigits:2}),a.price_icon]})})}}}]);