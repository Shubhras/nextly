"use strict";
exports.id = 2547;
exports.ids = [2547];
exports.modules = {

/***/ 2547:
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
/* harmony import */ var _util_helpers_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1541);
/* harmony import */ var _filterRouterLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6227);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4840);








const Page = ()=>{
    const { categories: categories1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ categories  })=>categories
    );
    const { filterProducts: filterProducts1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(({ filterProducts  })=>filterProducts
    );
    const { 0: state , 1: seTstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        categories: [],
        allData: []
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const getcategories = ()=>{
        const dataManipulate = _util_helpers_func__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getCategoriesTreeOptions */ .Z.getCategoriesTreeOptions(categories1, true);
        seTstate({
            ...state,
            categories: dataManipulate,
            allData: dataManipulate
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getcategories();
    }, []);
    const onChangeSearch = (e)=>{
        const filterData = _util_helpers_func__WEBPACK_IMPORTED_MODULE_5__/* ["default"].search_array_object_tree */ .Z.search_array_object_tree(e.target.value, state.allData);
        seTstate({
            ...state,
            categories: filterData,
            skip: 0
        });
    };
    const onChange = (checkedValues)=>{
        dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__/* .filterProducts_r */ .z3)({
            ...filterProducts1,
            categories: checkedValues,
            skip: 0
        }));
        (0,_filterRouterLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
            ...filterProducts1,
            categories: checkedValues,
            skip: 0
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "search_icon",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {
                    style: {
                        border: "none",
                        fontWeight: "bold",
                        marginLeft: "-10px"
                    },
                    placeholder: "Categories",
                    className: "svg-background",
                    onChange: onChangeSearch,
                    suffix: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, {
                        className: "search_icon-1"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "CategoriesFilter rounded-bottom bg-transparent",
                style: {
                    border: "none"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Tree, {
                    expandedKeys: _util_helpers_func__WEBPACK_IMPORTED_MODULE_5__/* ["default"].selectCategoriesFilterData */ .Z.selectCategoriesFilterData(state.allData),
                    multiple: true,
                    className: "bg-transparent",
                    selectedKeys: filterProducts1.categories,
                    onSelect: onChange,
                    treeData: state.categories
                })
            })
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