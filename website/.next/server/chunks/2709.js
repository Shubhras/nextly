"use strict";
exports.id = 2709;
exports.ids = [2709];
exports.modules = {

/***/ 2709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Default = ({ Data , seTfields , seTnewAddress , newAddress , onChanheShppingAddress , selectedShippingAddress , onChanheBillingAddress , selectedBillingAddress ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " mb-5 mt-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "float-right font-xs p-2 cursor-pointer -mb-10 z-10 relative",
                    onClick: ()=>{
                        seTnewAddress({
                            id: JSON.stringify(Data),
                            open: !newAddress.open
                        });
                        seTfields(Object.entries(Data).map(([name, value])=>({
                                name,
                                value
                            })
                        ));
                    },
                    children: "Update"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>{
                        onChanheShppingAddress ? onChanheShppingAddress(JSON.stringify(Data)) : null;
                        onChanheBillingAddress ? onChanheBillingAddress(JSON.stringify(Data)) : null;
                    },
                    className: `${selectedShippingAddress == JSON.stringify(Data) || selectedBillingAddress == JSON.stringify(Data) ? "border-brand-color bg-red-50" : ""}  border h-22 w-full bg-gray-50 focus:bg-red-50  focus:border-brand-color hover:bg-gray-100 rounded hover:shadow-sm hover:border-red-200 cursor-pointer text-left `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-b w-full p-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-semibold w-full p-1",
                                children: Data.name
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " w-full float-left p-3 pb-0 ",
                                    children: [
                                        " ",
                                        Data.address
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex w-full justify-between p-3 pt-1 ",
                                    children: [
                                        Data.village_id,
                                        "/",
                                        Data.town_id,
                                        "/",
                                        Data.city_id,
                                        "/",
                                        Data.country_id
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ })

};
;