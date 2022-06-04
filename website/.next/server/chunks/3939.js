"use strict";
exports.id = 3939;
exports.ids = [3939];
exports.modules = {

/***/ 3939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4840);
/* harmony import */ var _filterRouterLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6227);






const Page = ()=>{
    const { filterProducts: filterProducts1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ filterProducts  })=>filterProducts
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const sortItem = (data)=>{
        const newData = JSON.parse(data);
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            sort: newData,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
            ...filterProducts1,
            sort: newData,
            skip: 0
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
            className: "w-full text-center md:text-left text-base bg-white ",
            placeholder: " Sort",
            defaultValue: "  Sort",
            onChange: (newValue)=>{
                sortItem(newValue);
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                    value: JSON.stringify({
                        "variant_products.price": -1,
                        price: -1
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SortDescendingOutlined, {}),
                        " Increased Price"
                    ]
                }, 1),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                    value: JSON.stringify({
                        "variant_products.price": 1,
                        price: 1
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SortAscendingOutlined, {}),
                        " Decreasing Price"
                    ]
                }, 2)
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


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


/***/ })

};
;