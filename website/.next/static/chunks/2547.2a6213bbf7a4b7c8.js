"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2547],{2547:function(e,t,r){r.r(t);var a=r(5893),n=r(7294),c=r(5617),s=r(8795),o=r(2688),i=r(4621),l=r(1541),u=r(6227),g=r(4840);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){f(e,t,r[t])}))}return e}t.default=function(){var e=(0,c.v9)((function(e){return e.categories})).categories,t=(0,c.v9)((function(e){return e.filterProducts})).filterProducts,r=(0,n.useState)({categories:[],allData:[]}),f=r[0],p=r[1],d=(0,c.I0)();(0,n.useEffect)((function(){!function(){var t=l.Z.getCategoriesTreeOptions(e,!0);p(b({},f,{categories:t,allData:t}))}()}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"search_icon",children:(0,a.jsx)(o.Z,{style:{border:"none",fontWeight:"bold",marginLeft:"-10px"},placeholder:"Categories",className:"svg-background",onChange:function(e){var t=l.Z.search_array_object_tree(e.target.value,f.allData);p(b({},f,{categories:t,skip:0}))},suffix:(0,a.jsx)(s.Z,{className:"search_icon-1"})})}),(0,a.jsx)("div",{className:"CategoriesFilter rounded-bottom bg-transparent",style:{border:"none"},children:(0,a.jsx)(i.Z,{expandedKeys:l.Z.selectCategoriesFilterData(f.allData),multiple:!0,className:"bg-transparent",selectedKeys:t.categories,onSelect:function(e){d((0,g.z3)(b({},t,{categories:e,skip:0}))),(0,u.Z)(b({},t,{categories:e,skip:0}))},treeData:f.categories})})]})}},6227:function(e,t,r){var a=r(1163),n=r.n(a);t.Z=function(e){var t=e.brands.length>0?"&brands=".concat(e.brands):"",r=e.categories.length>0?"&categories=".concat(e.categories):"",a=e.minPrice>0?"&minprice=".concat(e.minPrice):"",c=e.maxPrice>0?"&maxprice=".concat(e.maxPrice):"",s=(""!=e.text?"&text=".concat(e.text):"")+t+r+a+c;n().push({},"/search?".concat(s),{shallow:!0})}}}]);