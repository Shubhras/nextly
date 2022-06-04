"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418,2076],{7049:function(e,t,n){var r=n(7462),a=n(4942),s=n(7294),o=n(4184),i=n.n(o),l=n(9844),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.Z=function(e){var t,n=s.useContext(l.E_),o=n.getPrefixCls,u=n.direction,m=e.prefixCls,p=e.type,f=void 0===p?"horizontal":p,d=e.orientation,g=void 0===d?"center":d,h=e.orientationMargin,y=e.className,b=e.children,v=e.dashed,j=e.plain,Z=c(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),x=o("divider",m),w=g.length>0?"-".concat(g):g,O=!!b,P="left"===g&&null!=h,S="right"===g&&null!=h,N=i()(x,"".concat(x,"-").concat(f),(t={},(0,a.Z)(t,"".concat(x,"-with-text"),O),(0,a.Z)(t,"".concat(x,"-with-text").concat(w),O),(0,a.Z)(t,"".concat(x,"-dashed"),!!v),(0,a.Z)(t,"".concat(x,"-plain"),!!j),(0,a.Z)(t,"".concat(x,"-rtl"),"rtl"===u),(0,a.Z)(t,"".concat(x,"-no-default-orientation-margin-left"),P),(0,a.Z)(t,"".concat(x,"-no-default-orientation-margin-right"),S),t),y),E=(0,r.Z)((0,r.Z)({},P&&{marginLeft:h}),S&&{marginRight:h});return s.createElement("div",(0,r.Z)({className:N},Z,{role:"separator"}),b&&s.createElement("span",{className:"".concat(x,"-inner-text"),style:E},b))}},418:function(e,t,n){n.r(t);var r=n(5893),a=n(7294),s=n(3798),o=n(1369),i=n(2688),l=n(7049),c=n(1577),u=n(6896),m=n(2076);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(e){var t=e.onSubmitSignup,n=(0,u.Z)(),p=d(s.Z.useForm(),1)[0],g=(0,a.useState)(),h=g[0],y=g[1],b=(0,r.jsx)(s.Z.Item,{name:"prefix",noStyle:!0,initialValue:"90",children:(0,r.jsxs)(o.Z,{onChange:function(e){y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({},h,{prefix:e}))},style:{width:70},children:[(0,r.jsx)(o.Z.Option,{value:"90",children:"+90"}),(0,r.jsx)(o.Z.Option,{value:"1",children:"+1"})]})});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.Z,{onFinish:t,layout:"vertical",form:p,children:[(0,r.jsx)(s.Z.Item,{name:"username",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:n.messages["app.pages.common.inputNotValid"]}],children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(s.Z.Item,{name:"password",label:n.messages["app.pages.common.password"],rules:[{message:n.messages["app.pages.common.inputNotValid"]}],hasFeedback:!0,children:(0,r.jsx)(i.Z.Password,{})}),(0,r.jsx)(s.Z.Item,{name:"confirm",label:n.messages["app.pages.common.confirmPassword"],dependencies:["password"],hasFeedback:!0,rules:[{message:n.messages["app.pages.common.inputNotValid"]},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("password")!==r?Promise.reject(n.messages["app.pages.common.passwordNotMatch"]):Promise.resolve()}}}],children:(0,r.jsx)(i.Z.Password,{})}),(0,r.jsx)(s.Z.Item,{name:"name",label:n.messages["app.pages.customers.name"],rules:[{required:!0,message:n.messages["app.pages.common.pleaseFill"],whitespace:!0}],children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(s.Z.Item,{name:"surname",label:n.messages["app.pages.customers.surname"],rules:[{required:!0,message:n.messages["app.pages.common.pleaseFill"],whitespace:!0}],children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(s.Z.Item,{name:"phone",label:n.messages["app.pages.customers.phone"],rules:[{required:!0,message:n.messages["app.pages.common.pleaseFill"]}],children:(0,r.jsx)(i.Z,{addonBefore:b})}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(c.Z,{type:"primary",className:"w-full",htmlType:"submit",children:(0,r.jsx)(m.default,{id:"app.pages.common.save"})})})]})})}},2076:function(e,t,n){n.r(t);var r=n(5893),a=n(4012),s=n(4806);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=(0,s.ZP)((function(e){return(0,r.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},e))}),{withRef:!1})},4012:function(e,t,n){var r=n(5719),a=n(7294),s=n(6896),o=n(680);function i(e){var t=(0,s.Z)(),n=t.formatMessage,r=t.textComponent,o=void 0===r?a.Fragment:r,i=e.id,l=e.description,c=e.defaultMessage,u=e.values,m=e.children,p=e.tagName,f=void 0===p?o:p,d=n({id:i,description:l,defaultMessage:c},u,{ignoreTag:e.ignoreTag});return"function"===typeof m?m(Array.isArray(d)?d:[d]):f?a.createElement(f,null,a.Children.toArray(d)):a.createElement(a.Fragment,null,d)}i.displayName="FormattedMessage";var l=a.memo(i,(function(e,t){var n=e.values,a=(0,r._T)(e,["values"]),s=t.values,i=(0,r._T)(t,["values"]);return(0,o.wU)(s,n)&&(0,o.wU)(a,i)}));l.displayName="MemoizedFormattedMessage",t.Z=l},6896:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4806),s=n(680);function o(){var e=r.useContext(a._y);return(0,s.lq)(e),e}}}]);