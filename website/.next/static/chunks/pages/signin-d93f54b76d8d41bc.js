(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2176],{6159:function(n,e,r){"use strict";r.d(e,{Tm:function(){return i},l$:function(){return o}});var t=r(7294),o=t.isValidElement;function i(n,e){return function(n,e,r){return o(n)?t.cloneElement(n,"function"===typeof r?r(n.props||{}):r):e}(n,n,e)}},7752:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return r(126)}])},126:function(n,e,r){"use strict";r.r(e);var t=r(5893),o=r(7294),i=r(3798),u=r(6536),s=r(4840),a=r(9669),c=r.n(a),l=r(1674),f=r(5617),d=r(1163),m=r.n(d),h=r(1874),g=r(7041),p=r(5152),b=r.n(p);function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],u=!0,s=!1;try{for(r=r.call(n);!(u=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);u=!0);}catch(a){s=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return v(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=b()((function(){return Promise.all([r.e(1577),r.e(2688),r.e(8751)]).then(r.bind(r,9606))}),{loadableGenerated:{webpack:function(){return[9606]}}}),x=b()((function(){return Promise.all([r.e(1577),r.e(2688),r.e(418)]).then(r.bind(r,418))}),{loadableGenerated:{webpack:function(){return[418]}}});e.default=function(){var n=y(i.Z.useForm(),1)[0],e=(0,f.I0)(),r=(0,f.v9)((function(n){return n.login})).isAuthenticated;(0,o.useEffect)((function(){if(r)return m().push("/")}),[r]);var a=function(){},d=function(n){n.username=n.username.toLowerCase(),h.Z.login(n).then((function(n){var r=n.isAuthenticated,t=n.user;r?(e((0,s.oL)(t)),e((0,s.c8)(!0)),m().push("/"),u.ZP.success("Login Successfully"),(0,g.setCookies)("isuser",!0)):u.ZP.error("Login not Successfully")}))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"grid container-custom gap-10 p-20 grid-cols-12",children:[(0,t.jsxs)("div",{className:"col-span-6",children:[(0,t.jsxs)("div",{className:"text-lg font-semibold col-span-12 text-brand-color mb-5 ",children:["Login"," "]}),(0,t.jsx)(w,{onSubmitLogin:d,handleCancelLogin:a})]}),(0,t.jsxs)("div",{className:"col-span-6",children:[(0,t.jsxs)("div",{className:"text-lg font-semibold col-span-12 text-brand-color mb-5 ",children:["Register"," "]}),(0,t.jsx)(x,{onSubmitSignup:function(e){e.username=e.username.toLowerCase(),c().post("".concat(l.API_URL,"/users/register"),e).then((function(r){r.data.error?u.ZP.error(r.data.messagge):(n.resetFields(),u.ZP.success(r.data.messagge),d(e))})).catch((function(n){return console.log("err",n)}))}})]})]})})}}},function(n){n.O(0,[3798,9774,2888,179],(function(){return e=7752,n(n.s=e);var e}));var e=n.O();_N_E=e}]);