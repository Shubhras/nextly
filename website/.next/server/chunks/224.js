"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 224:
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4840);
/* harmony import */ var _filterRouterLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6227);





const Page = ()=>{
    const { filterProducts: filterProducts1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ filterProducts  })=>filterProducts
    );
    const { brands: brands1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ brands  })=>brands
    );
    const { categories: categories1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(({ categories  })=>categories
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const changeBrandsClose = (removedTag)=>{
        const tags = filterProducts1.brands.filter((tag)=>tag !== removedTag
        );
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            brands: tags,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            ...filterProducts1,
            brands: tags,
            skip: 0
        });
    };
    const changeCategoriesClose = (removedTag)=>{
        const tags = filterProducts1.categories.filter((tag)=>tag !== removedTag
        );
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            categories: tags,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            ...filterProducts1,
            categories: tags,
            skip: 0
        });
    };
    const changeMinPriceClose = ()=>{
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            minPrice: null,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            ...filterProducts1,
            minPrice: null,
            skip: 0
        });
    };
    const changeMaxPriceClose = ()=>{
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            maxPrice: null,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            ...filterProducts1,
            maxPrice: null,
            skip: 0
        });
    };
    const changeTextClose = ()=>{
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            text: "",
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
            ...filterProducts1,
            text: "",
            skip: 0
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-5",
        children: [
            filterProducts1.text != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    display: "inline-block"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                    className: "select-categaries",
                    color: "#fff",
                    closable: true,
                    onClose: (e)=>{
                        e.preventDefault();
                        changeTextClose();
                    },
                    children: [
                        "Text: ",
                        filterProducts1.text
                    ]
                })
            }, "text") : "",
            filterProducts1.brands.map((val)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        display: "inline-block"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                        className: "select-categaries",
                        color: "#fff",
                        closable: true,
                        onClose: (e)=>{
                            e.preventDefault();
                            changeBrandsClose(val);
                        },
                        children: brands1.find((find)=>find._id == val
                        ).title
                    })
                }, val)
            ),
            filterProducts1.minPrice > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    display: "inline-block"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                    className: "select-categaries",
                    color: "#fff",
                    closable: true,
                    onClose: (e)=>{
                        e.preventDefault();
                        changeMinPriceClose();
                    },
                    children: [
                        "Min Price: ",
                        filterProducts1.minPrice
                    ]
                })
            }, "minprice") : "",
            filterProducts1.maxPrice > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                    display: "inline-block"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                    className: "select-categaries",
                    color: "#fff",
                    closable: true,
                    onClose: (e)=>{
                        e.preventDefault();
                        changeMaxPriceClose();
                    },
                    children: [
                        "Max Price: ",
                        filterProducts1.maxPrice
                    ]
                })
            }, "maxprice") : "",
            filterProducts1.categories.map((val)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        display: "inline-block"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                        className: "select-categaries",
                        color: "#fff",
                        closable: true,
                        onClose: (e)=>{
                            e.preventDefault();
                            changeCategoriesClose(val);
                        },
                        children: categories1.find((find)=>find._id == val
                        ).title
                    })
                }, val)
            )
        ]
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