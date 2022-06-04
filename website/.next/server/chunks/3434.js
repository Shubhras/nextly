"use strict";
exports.id = 3434;
exports.ids = [3434];
exports.modules = {

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_helpers_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1541);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









const Default = ({ data: data1 = null , className  })=>{
    var ref;
    const { settings: settings1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(({ settings  })=>settings
    );
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);
    const getVariantPrice = (data)=>{
        if (data.length > 0) {
            const newData = data.sort((a, b)=>{
                return a.price - b.price;
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        data: newData[0].price
                    }),
                    " -",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        data: newData[data.length - 1].price
                    }),
                    " "
                ]
            });
        }
    };
    const allImgData = data1 === null || data1 === void 0 ? void 0 : (ref = data1.allImages) === null || ref === void 0 ? void 0 : ref.sort((a, b)=>a.order - b.order
    );
    const img = allImgData[0] ? _config__WEBPACK_IMPORTED_MODULE_7__.IMG_URL + allImgData[0].image : "/images/nofoto.jpg";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "product-card",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " m-2 sm:m-3 bg-white group overflow-hidden pb-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " relative cursor-pointer rounded-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/product/" + data1.seo,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full relative overflow-hidden ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: `${_util_helpers_func__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getDiscount */ .Z.getDiscount(data1) ? "visible" : "invisible"} absolute z-10 top-0 mt-2 text-xs float-right py-1 px-2  bg-red-600 text-white`,
                                        children: [
                                            settings1.price_type ? "%" + Number(_util_helpers_func__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getDiscount */ .Z.getDiscount(data1)).toFixed(0) : Number(_util_helpers_func__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getDiscount */ .Z.getDiscount(data1)).toFixed(0) + "%",
                                            " ",
                                            "discount"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "w-full h-full bg-center group-hover:scale-105 transition-all ",
                                        src: img,
                                        width: "220",
                                        height: "220",
                                        alt: data1.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "product-links"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-2 w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "rating",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "fas fa-star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "fas fa-star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "fas fa-star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "far fa-star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "far fa-star"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " font-bold pro-detail w-full h-11 overflow-hidden px-1 mt-2 text-black",
                                        children: data1.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " text-md h-12 z-10 relative ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold",
                                                children: data1.type ? getVariantPrice(data1.variant_products) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    data: data1.price
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: " line-through w-3/12 float-left ",
                                                children: !data1.type ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        " ",
                                                        data1.before_price != 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                            data: data1.before_price
                                                        }) : ""
                                                    ]
                                                }) : ""
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        }, data1._id)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ })

};
;