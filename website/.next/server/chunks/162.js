"use strict";
exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filterRouterLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6227);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4840);







const Page = ()=>{
    const { filterProducts: filterProducts1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ filterProducts  })=>filterProducts
    );
    const { 0: state , 1: seTstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filterProducts1);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        seTstate(filterProducts1);
    }, [
        filterProducts1
    ]);
    const onChange = (Data)=>{
        if (Data) {
            seTstate({
                minPrice: Data.minPrice,
                maxPrice: Data.maxPrice
            });
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__/* .filterProducts_r */ .z3)({
                ...filterProducts1,
                minPrice: Data.minPrice,
                maxPrice: Data.maxPrice,
                skip: 0
            }));
            (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
                ...filterProducts1,
                minPrice: Data.minPrice,
                maxPrice: Data.maxPrice,
                skip: 0
            });
        }
    };
    const InputsPrices = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Group, {
            compact: true,
            className: "w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                    name: "minPrice",
                    style: {
                        width: "42%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.InputNumber, {
                        placeholder: "Min",
                        min: 0,
                        className: "w-full"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        padding: "5px"
                    },
                    children: "To"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {
                    name: "maxPrice",
                    style: {
                        width: "42%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.InputNumber, {
                        min: 0,
                        placeholder: "Max",
                        className: "w-full"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    style: {
                        width: "16%"
                    },
                    onClick: ()=>onChange()
                    ,
                    type: "primary",
                    htmlType: "submit",
                    className: "m-0 p-1 bg-brand-color"
                })
            ]
        })
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                marginBottom: "-44px"
            },
            className: "float-left w-full mt-3 filter-line",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        fontSize: "17px"
                    },
                    className: "mt-4 font-semibold",
                    children: "Price "
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {
                    onFinish: onChange,
                    fields: Object.entries(state).map(([name, value])=>({
                            name,
                            value
                        })
                    ),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputsPrices, {
                        className: "w-full bg-brand-color"
                    })
                })
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