"use strict";
exports.id = 9946;
exports.ids = [9946,313];
exports.modules = {

/***/ 291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FilterProductArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./app/components/ProductCard/index.js
var ProductCard = __webpack_require__(3434);
// EXTERNAL MODULE: ./app/components/FilterProducts/filterRouterLink.js
var filterRouterLink = __webpack_require__(6227);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./redux/actions/index.js + 7 modules
var actions = __webpack_require__(4840);
// EXTERNAL MODULE: external "react-infinite-scroll-component"
var external_react_infinite_scroll_component_ = __webpack_require__(4336);
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_);
;// CONCATENATED MODULE: ./app/components/CircularProgress/index.js

const CircularProgress = ({ className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `loader ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/images/loader.svg",
            alt: "loader",
            style: {
                height: 60
            }
        })
    })
;
/* harmony default export */ const components_CircularProgress = (CircularProgress);
CircularProgress.defaultProps = {
    className: ""
};

// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
;// CONCATENATED MODULE: ./app/components/FilterProducts/FilterProductArea.js










const Page = ()=>{
    const { filterProducts: filterProducts1  } = (0,external_react_redux_.useSelector)(({ filterProducts  })=>filterProducts
    );
    const { 0: products , 1: seTproducts  } = (0,external_react_.useState)([]);
    const { 0: hasMore , 1: seThasMore  } = (0,external_react_.useState)(null);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const getProducts = ()=>{
        external_axios_default().post(`${config.API_URL}/productspublic`, filterProducts1).then((res)=>{
            if (res.data.length > 0) {
                // seTproducts([...products, ...res.data])
                if (filterProducts1.skip == 0) {
                    seTproducts(res.data);
                    if (res.data.length == 12) {
                        seThasMore(true);
                    } else {
                        seThasMore(false);
                    }
                } else {
                    seTproducts([
                        ...products,
                        ...res.data
                    ]);
                    seThasMore(false);
                }
            }
            if (res.data.length == 0 && filterProducts1.skip == 0) {
                seTproducts([]);
                seThasMore(false);
            }
        }).catch((err)=>console.log(err)
        );
    };
    (0,external_react_.useEffect)(()=>{
        getProducts();
    }, [
        filterProducts1
    ]);
    const fetchMoreData = ()=>{
        dispatch((0,actions/* filterProducts_r */.z3)({
            ...filterProducts1,
            skip: filterProducts1.skip + filterProducts1.limit,
            limit: filterProducts1.limit
        }));
        (0,filterRouterLink/* default */.Z)({
            ...filterProducts1,
            skip: filterProducts1.skip + filterProducts1.limit,
            limit: filterProducts1.limit
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container ",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
                dataLength: products.length,
                next: fetchMoreData,
                hasMore: hasMore,
                loader: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-12 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CircularProgress, {})
                }),
                className: "grid grid-cols-3 pb-16",
                children: products && products.map((data, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                        data: data,
                        className: " xl:col-span-3 lg:col-span-4 rounded-lg col-span-6 m-2 md:m-3 bg-white group overflow-hidden shadow-xl hover:shadow-2xl pb-0"
                    }, i)
                )
            })
        })
    });
};
/* harmony default export */ const FilterProductArea = (Page);


/***/ }),

/***/ 6227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const filterRouteLinkGenerate = (filterProducts)=>{
    const urlBrands = filterProducts.brands.length > 0 ? `&brands=${filterProducts.brands}` : "";
    const urlCategory = filterProducts.categories.length > 0 ? `&categories=${filterProducts.categories}` : "";
    const urlMinPrice = filterProducts.minPrice > 0 ? `&minprice=${filterProducts.minPrice}` : "";
    const urlMaxPrice = filterProducts.maxPrice > 0 ? `&maxprice=${filterProducts.maxPrice}` : "";
    const urlText = filterProducts.text != "" ? `&text=${filterProducts.text}` : "";
    const totalUrl = urlText + urlBrands + urlCategory + urlMinPrice + urlMaxPrice;
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push({}, `/search?${totalUrl}`, {
        shallow: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterRouteLinkGenerate);


/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const Default = ({ data =0  })=>{
    const { settings: settings1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ settings  })=>settings
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: settings1.price_type ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                settings1.price_icon,
                data.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                data.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                }),
                settings1.price_icon
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ })

};
;