"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2434],{2709:function(e,t,r){var n=r(5893);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(i){l=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.Data,r=e.seTfields,a=e.seTnewAddress,o=e.newAddress,l=e.onChanheShppingAddress,i=e.selectedShippingAddress,u=e.onChanheBillingAddress,c=e.selectedBillingAddress;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:" mb-5 mt-2",children:[(0,n.jsx)("span",{className:"float-right font-xs p-2 cursor-pointer -mb-10 z-10 relative",onClick:function(){a({id:JSON.stringify(t),open:!o.open}),r(Object.entries(t).map((function(e){var t=s(e,2);return{name:t[0],value:t[1]}})))},children:"Update"}),(0,n.jsxs)("button",{onClick:function(){l&&l(JSON.stringify(t)),u&&u(JSON.stringify(t))},className:"".concat(i==JSON.stringify(t)||c==JSON.stringify(t)?"border-brand-color bg-red-50":"","  border h-22 w-full bg-gray-50 focus:bg-red-50  focus:border-brand-color hover:bg-gray-100 rounded hover:shadow-sm hover:border-red-200 cursor-pointer text-left "),children:[(0,n.jsx)("div",{className:"border-b w-full p-2",children:(0,n.jsx)("span",{className:"font-semibold w-full p-1",children:t.name})}),(0,n.jsxs)("div",{className:"w-full ",children:[(0,n.jsxs)("div",{className:" w-full float-left p-3 pb-0 ",children:[" ",t.address]}),(0,n.jsxs)("div",{className:"flex w-full justify-between p-3 pt-1 ",children:[t.village_id,"/",t.town_id,"/",t.city_id,"/",t.country_id]})]})]})]})})}},2434:function(e,t,r){r.r(t);var n=r(4051),a=r.n(n),s=r(5893),o=r(7294),l=r(6536),i=r(1577),u=r(8453),c=r(3798),d=r(2688),f=r(1369),p=r(6896),m=r(2709),h=r(5617),y=r(1674),g=r(1874),b=r(9669),v=r.n(b);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t,r,n,a,s,o){try{var l=e[s](o),i=l.value}catch(u){return void r(u)}l.done?t(i):Promise.resolve(i).then(n,a)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){w(s,n,a,o,l,"next",e)}function l(e){w(s,n,a,o,l,"throw",e)}o(void 0)}))}}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){S(e,t,r[t])}))}return e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(i){l=!0,a=i}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,p.Z)(),t=(0,h.v9)((function(e){return e.login})),r=t.isAuthenticated,n=t.user,b=(0,o.useState)(Object.entries(n.address).map((function(e){var t=A(e,2);return{name:t[0],value:t[1]}}))),x=b[0],w=b[1],S=(0,o.useState)([]),N=S[0],O=S[1],I=(0,o.useState)({open:!1,id:null}),Z=I[0],_=I[1],k=(0,o.useState)([]),T=k[0],P=k[1],L=(0,o.useState)([]),M=L[0],F=L[1],K=(0,o.useState)({}),U=K[0],E=K[1],q=(0,o.useState)([]),D=q[0],J=q[1],R=(0,o.useState)([]),B=R[0],V=R[1],$=(0,o.useState)([]),z=$[0],G=$[1],H=(0,o.useState)([]),Q=H[0],W=H[1],X=(0,o.useState)([]),Y=X[0],ee=X[1];(0,o.useEffect)((function(){n.id&&v().get("".concat(y.API_URL,"/customers/").concat(n.id)).then((function(e){var t=e.data;t.password="",w(Object.entries(t.address).map((function(e){var t=A(e,2);return{name:t[0],value:t[1]}}))),O(t.address)})),re(),te()}),[n]);var te=function(){v().get("".concat(y.API_URL,"/turkey")).then((function(e){var t=[];for(var r in e.data)t.push({label:e.data[r].Il,value:e.data[r].Il});J(t),P(e.data)}))},re=function(){v().get("".concat(y.API_URL,"/country")).then((function(e){var t=[];for(var r in e.data)t.push({label:e.data[r].name,value:e.data[r].name});V(t),F(e.data)}))},ne=function(){r&&g.Z.isAuthenticated().then(function(){var e=j(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t.user.address);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ae=function(){var e=j(a().mark((function e(t){var n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z.id){e.next=12;break}if((n=N.filter((function(e){return JSON.stringify(e)!==Z.id}))).push(t),n.reverse(),!r){e.next=9;break}return e.next=7,v().post("".concat(y.API_URL,"/customerspublic/address"),n).then((function(){ne(),_({open:!1,id:null})})).catch((function(e){return console.log("err",e)}));case 7:e.next=10;break;case 9:l.ZP.success({content:"Next Stage :)",duration:3}),_({open:!1,id:null}),O(n);case 10:e.next=13;break;case 12:(s=N).push(t),s.reverse(),v().post("".concat(y.API_URL,"/customerspublic/address"),s).then((function(){setTimeout((function(){ne(),_({open:!1,id:null})}),500)})).catch((function(e){return console.log("err",e)}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(i.Z,{className:"float-left font-semibold text-sm w-full py-7 text-center h-auto mb-5 ",onClick:function(){w(Object.entries(N[0]?N[0]:{}).map((function(e){return{name:A(e,1)[0],value:null}}))),_(C({},Z,{open:!Z.open}))},children:"New Address"})," ",N&&N.map((function(e,t){return(0,s.jsx)(m.Z,{Data:e,seTnewAddress:_,seTfields:w,newAddress:Z},t)})),(0,s.jsxs)(u.Z,{title:"Address",placement:"right",onClose:function(){_(C({},Z,{open:!Z.open}))},visible:Z.open,children:[(0,s.jsxs)(c.Z,{onFinish:ae,fields:x,scrollToFirstError:!0,layout:"vertical",children:[(0,s.jsx)(c.Z.Item,{className:"float-left w-full mx-0 px-0",name:"name",label:e.messages["app.pages.customers.addressName"],fieldKey:"name",rules:[{required:!0,message:"Missing Area"}],children:(0,s.jsx)(d.Z,{autocomplete:"chrome-off"})}),(0,s.jsx)(c.Z.Item,{name:"type",className:"float-left w-full mx-0 px-0",label:"Type",fieldKey:"type",children:(0,s.jsx)(f.Z,{defaultValue:!0,options:[{label:"Billing Address",value:!0},{label:"Shipping Address",value:!1}],placeholder:"Select Address Type",autoComplete:"none"})}),(0,s.jsxs)(c.Z.Item,{name:"country_id",className:"float-left w-full mx-0 px-0",label:"Country",fieldKey:"country_id",children:[(0,s.jsx)(f.Z,{showSearch:!0,options:B,autoComplete:"none",placeholder:"Search to Country",optionFilterProp:"children",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){if("Turkey"==e)te();else{var t=M.filter((function(t){return t.name===e})),r=[];for(var n in t[0].states)r.push({label:t[0].states[n].name,value:t[0].states[n].name});J(r)}E(C({},U,{selectedCountry:e}))}})," "]}),(0,s.jsxs)(c.Z.Item,{className:"float-left w-full mx-0 px-0",name:"city_id",fieldKey:"city_id",label:"City",rules:[{required:!0,message:"Missing Area"}],children:[(0,s.jsx)(f.Z,{showSearch:!0,autoComplete:"none",options:D,placeholder:e.messages["app.pages.customers.addressCity"],optionFilterProp:"children",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){if("Turkey"==U.selectedCountry){var t=T.filter((function(t){return t.Il===e})),r=[];for(var n in t[0].Ilce)r.push({label:t[0].Ilce[n].Ilce,value:t[0].Ilce[n].Ilce});E(C({},U,{selectedCity:e})),G({option:r,data:t[0].Ilce})}}})," "]}),(0,s.jsxs)(c.Z.Item,{className:"float-left w-full mx-0 px-0",name:"town_id",label:"Town",fieldKey:"town_id",rules:[{required:!0,message:"Missing Area"}],children:["Turkey"==U.selectedCountry?(0,s.jsx)(f.Z,{showSearch:!0,autoComplete:"none",options:z.option,name:"town_id",placeholder:e.messages["app.pages.customers.addressTown"],optionFilterProp:"children",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){var t=z.data.filter((function(t){return t.Ilce===e})),r=[];for(var n in t[0].Semt)r.push({label:t[0].Semt[n].Semt,value:t[0].Semt[n].Semt});E(C({},U,{selectedIlce:e})),W({option:r,data:t[0].Semt})}}):(0,s.jsx)(d.Z,{placeholder:e.messages["app.pages.customers.addressTown"],autocomplete:"chrome-off"})," "]}),(0,s.jsxs)(c.Z.Item,{className:"float-left w-full mx-0 px-0",name:"district_id",label:"District",fieldKey:"district_id",rules:[{required:!0,message:"Missing Area"}],children:["Turkey"==U.selectedCountry?(0,s.jsx)(f.Z,{showSearch:!0,autoComplete:"none",options:Q.option,placeholder:e.messages["app.pages.customers.addressDistrict"],name:"district_id",optionFilterProp:"children",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){var t=Q.data.filter((function(t){return t.Semt===e})),r=[];for(var n in t[0].Mahalle)r.push({label:t[0].Mahalle[n].Mahalle,value:t[0].Mahalle[n].Mahalle});E(C({},U,{selectedSemt:e})),ee({option:r,data:t[0].Mahalle})}}):(0,s.jsx)(d.Z,{placeholder:e.messages["app.pages.customers.addressDistrict"],autocomplete:"chrome-off"})," "]}),(0,s.jsxs)(c.Z.Item,{name:"village_id",className:"float-left w-full mx-0 px-0",label:"Village",fieldKey:"village_id",rules:[{required:!0,message:"Missing Area"}],children:["Turkey"==U.selectedCountry?(0,s.jsx)(f.Z,{showSearch:!0,autoComplete:"none",options:Y.option,placeholder:e.messages["app.pages.customers.addressNeighbour"],name:"village_id",optionFilterProp:"children",filterOption:function(e,t){return t.label.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(e){E(C({},U,{selectedMahalle:e}))}}):(0,s.jsx)(d.Z,{placeholder:e.messages["app.pages.customers.addressNeighbour"],autocomplete:"chrome-off"})," "]})," ",(0,s.jsx)(c.Z.Item,{className:"float-left w-full mx-0 px-0",name:"address",label:"Address",fieldKey:"address",rules:[{required:!0,message:"Missing Area"}],children:(0,s.jsx)(d.Z.TextArea,{rows:3,placeholder:e.messages["app.pages.customers.addressFull"],autocomplete:"chrome-off"})})," ",(0,s.jsx)(i.Z,{htmlType:"submit",className:"w-full p-3 h-auto",children:"Save "})," "]})," "]})," "]})}}}]);