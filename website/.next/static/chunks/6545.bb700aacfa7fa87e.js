"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6545,313],{6545:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),o=n(7294),s=n(5617),i=n(182),l=n(6227),a=n(9669),c=n.n(a),u=n(4840),h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},h(e,t)};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};var d="Pixel",f="Percent",m={unit:f,value:.8};function g(e){return"number"===typeof e?{unit:f,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:d,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:f,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),m):(console.warn("scrollThreshold should be string or number"),m)}var v=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,s=!1,i=0;function l(){o&&clearTimeout(o)}function a(){var a=this,c=Date.now()-i,u=arguments;function h(){i=Date.now(),n.apply(a,u)}function p(){o=void 0}s||(r&&!o&&h(),l(),void 0===r&&c>e?h():!0!==t&&(o=setTimeout(r?p:h,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?p(p({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===d?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===d?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=p({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},o.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&o.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},o.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component),b=v,w=function(e){var t=e.className;return(0,r.jsx)("div",{className:"loader ".concat(t),children:(0,r.jsx)("img",{src:"/images/loader.svg",alt:"loader",style:{height:60}})})},y=w;w.defaultProps={className:""};var x=n(1674);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function j(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(){var e=(0,s.v9)((function(e){return e.filterProducts})).filterProducts,t=(0,o.useState)([]),n=t[0],a=t[1],h=(0,o.useState)(null),p=h[0],d=h[1],f=(0,s.I0)();(0,o.useEffect)((function(){c().post("".concat(x.API_URL,"/productspublic"),e).then((function(t){t.data.length>0&&(0==e.skip?(a(t.data),12==t.data.length?d(!0):d(!1)):(a(j(n).concat(j(t.data))),d(!1))),0==t.data.length&&0==e.skip&&(a([]),d(!1))})).catch((function(e){return console.log(e)}))}),[e]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container ",children:(0,r.jsx)(b,{dataLength:n.length,next:function(){f((0,u.z3)(E({},e,{skip:e.skip+e.limit,limit:e.limit}))),(0,l.Z)(E({},e,{skip:e.skip+e.limit,limit:e.limit}))},hasMore:p,loader:(0,r.jsx)("div",{className:"col-span-12 ",children:(0,r.jsx)(y,{})}),className:"grid grid-cols-3 pb-16",children:n&&n.map((function(e,t){return(0,r.jsx)(i.Z,{data:e,className:" xl:col-span-3 lg:col-span-4 rounded-lg col-span-6 m-2 md:m-3 bg-white group overflow-hidden shadow-xl hover:shadow-2xl pb-0"},t)}))})})})}},6227:function(e,t,n){var r=n(1163),o=n.n(r);t.Z=function(e){var t=e.brands.length>0?"&brands=".concat(e.brands):"",n=e.categories.length>0?"&categories=".concat(e.categories):"",r=e.minPrice>0?"&minprice=".concat(e.minPrice):"",s=e.maxPrice>0?"&maxprice=".concat(e.maxPrice):"",i=(""!=e.text?"&text=".concat(e.text):"")+t+n+r+s;o().push({},"/search?".concat(i),{shallow:!0})}},313:function(e,t,n){n.r(t);var r=n(5893),o=n(5617);t.default=function(e){var t=e.data,n=void 0===t?0:t,s=(0,o.v9)((function(e){return e.settings})).settings;return(0,r.jsx)(r.Fragment,{children:s.price_type?(0,r.jsxs)(r.Fragment,{children:[s.price_icon,n.toLocaleString(void 0,{minimumFractionDigits:2})]}):(0,r.jsxs)(r.Fragment,{children:[n.toLocaleString(void 0,{minimumFractionDigits:2}),s.price_icon]})})}},182:function(e,t,n){var r=n(5893),o=n(1664),s=n.n(o),i=n(1541),l=n(5617),a=n(313),c=n(1674),u=n(7294);t.Z=function(e){var t,n=e.data,o=void 0===n?null:n,h=(e.className,(0,l.v9)((function(e){return e.settings})).settings),p=((0,u.useRef)(null),null===o||void 0===o||null===(t=o.allImages)||void 0===t?void 0:t.sort((function(e,t){return e.order-t.order}))),d=p[0]?c.IMG_URL+p[0].image:"/images/nofoto.jpg";return(0,r.jsx)("div",{className:"product-card",children:(0,r.jsx)("div",{className:" m-2 sm:m-3 bg-white group overflow-hidden pb-0",children:(0,r.jsx)("div",{className:" relative cursor-pointer rounded-lg",children:(0,r.jsx)(s(),{href:"/product/"+o.seo,children:(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("div",{className:"w-full relative overflow-hidden ",children:[(0,r.jsxs)("span",{className:"".concat(i.Z.getDiscount(o)?"visible":"invisible"," absolute z-10 top-0 mt-2 text-xs float-right py-1 px-2  bg-red-600 text-white"),children:[h.price_type?"%"+Number(i.Z.getDiscount(o)).toFixed(0):Number(i.Z.getDiscount(o)).toFixed(0)+"%"," ","discount"]}),(0,r.jsx)("img",{className:"w-full h-full bg-center group-hover:scale-105 transition-all ",src:d,width:"220",height:"220",alt:o.title}),(0,r.jsx)("ul",{className:"product-links"})]}),(0,r.jsxs)("div",{className:"mt-2 w-full",children:[(0,r.jsxs)("ul",{className:"rating",children:[(0,r.jsx)("li",{className:"fas fa-star"}),(0,r.jsx)("li",{className:"fas fa-star"}),(0,r.jsx)("li",{className:"fas fa-star"}),(0,r.jsx)("li",{className:"far fa-star"}),(0,r.jsx)("li",{className:"far fa-star"})]}),(0,r.jsx)("div",{className:" font-bold pro-detail w-full h-11 overflow-hidden px-1 mt-2 text-black",children:o.title}),(0,r.jsxs)("div",{className:" text-md h-12 z-10 relative ",children:[(0,r.jsx)("span",{className:"font-bold",children:o.type?function(e){if(e.length>0){var t=e.sort((function(e,t){return e.price-t.price}));return(0,r.jsxs)("span",{children:[(0,r.jsx)(a.default,{data:t[0].price})," -"," ",(0,r.jsx)(a.default,{data:t[e.length-1].price})," "]})}}(o.variant_products):(0,r.jsx)(a.default,{data:o.price})}),(0,r.jsx)("span",{className:" line-through w-3/12 float-left ",children:o.type?"":(0,r.jsxs)(r.Fragment,{children:[" ",0!=o.before_price?(0,r.jsx)(a.default,{data:o.before_price}):""]})})]})]})]})})})},o._id)})}}}]);