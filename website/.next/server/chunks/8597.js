"use strict";
exports.id = 8597;
exports.ids = [8597,313];
exports.modules = {

/***/ 8597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(313);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_helpers_func__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1541);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4840);











const Default = ()=>{
    const { basket  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.basket
    );
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(({ login  })=>login
    );
    const { 0: billingAddress , 1: seTbillingAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: shippingAddress , 1: seTshippingAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: selectedCargo , 1: seTselectedCargo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        cargo_price_discount: 0,
        cargo_price: 0,
        selectedCargo: 0
    });
    const { 0: allPrice , 1: seTallPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        total: 0,
        discount: 0,
        cargo_price: 0,
        cargo_price_discount: 0
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const getBasketProducts = (data = [], products = [])=>{
        let basketTotalPrice = 0;
        let basketTotalDiscountPrice = 0;
        const errorArray = [];
        products.map((x)=>{
            const array = data.find((y)=>y._id == x.product_id
            );
            if (array) {
                const resData = array;
                if (x.selectedVariants !== undefined) {
                    const priceMath = _util_helpers_func__WEBPACK_IMPORTED_MODULE_9__/* ["default"].filter_array_in_obj */ .Z.filter_array_in_obj(resData.variant_products, x.selectedVariants);
                    if (priceMath[0].visible === false) {
                        errorArray.push("Product Not Active");
                    } else if (Number(priceMath[0].qty) < Number(x.qty)) {
                        errorArray.push("Product Not in Stock");
                    } else {
                        errorArray.push(null);
                    }
                    basketTotalPrice = basketTotalPrice + x.qty * priceMath[0].price;
                    basketTotalDiscountPrice = basketTotalDiscountPrice + x.qty * priceMath[0].before_price;
                } else {
                    if (resData.isActive === false) {
                        errorArray.push("Product Not Active");
                    } else if (Number(resData.qty) < Number(x.qty)) {
                        errorArray.push("Product Not in Stock");
                    } else {
                        errorArray.push(null);
                    }
                    basketTotalPrice = basketTotalPrice + x.qty * resData.price;
                    basketTotalDiscountPrice = basketTotalDiscountPrice + x.qty * resData.before_price;
                }
            }
        });
        seTallPrice({
            total: basketTotalPrice,
            discount: basketTotalDiscountPrice,
            error: errorArray
        });
    };
    const getProducts = async ()=>{
        if (basket.length > 0) {
            const arrayId = [];
            basket[0].products.map((x)=>{
                arrayId.push(x.product_id);
            });
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_8__.API_URL}/basket/allproducts`, {
                _id: arrayId
            }).then((res)=>{
                getBasketProducts(res.data, basket[0].products);
            });
            seTbillingAddress(basket[0].billing_address);
            seTshippingAddress(basket[0].shipping_address);
        }
    };
    const getCargoes = async ()=>{
        await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_8__.API_URL}/cargoespublic`).then((res)=>{
            if (basket.length > 0) {
                if (basket[0].cargoes_id) {
                    seTselectedCargo({
                        cargo_price: basket[0].cargo_price,
                        cargo_price_discount: basket[0].cargo_price_discount,
                        selectedCargo: basket[0].cargoes_id
                    });
                } else {
                    seTselectedCargo({
                        cargo_price: res.data[0].price,
                        cargo_price_discount: res.data[0].before_price,
                        selectedCargo: res.data[0]._id
                    });
                }
            }
        });
    };
    const onSubmit = async ()=>{
        const errorArray = [];
        const arrayId = [];
        basket[0].products.map((x)=>{
            arrayId.push(x.product_id);
        });
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_8__.API_URL}/basket/allproducts`, {
            _id: arrayId
        }).then((res)=>{
            const data = res.data;
            const products = basket[0].products;
            let basketTotalPrice = 0;
            let basketTotalDiscountPrice = 0;
            products.map((x)=>{
                const array = data.find((y)=>y._id == x.product_id
                );
                if (array) {
                    const resData = array;
                    if (x.selectedVariants !== undefined) {
                        const priceMath = _util_helpers_func__WEBPACK_IMPORTED_MODULE_9__/* ["default"].filter_array_in_obj */ .Z.filter_array_in_obj(resData.variant_products, x.selectedVariants);
                        if (priceMath[0].visible === false) {
                            errorArray.push(true);
                        } else if (Number(priceMath[0].qty) < Number(x.qty)) {
                            errorArray.push(true);
                        } else {
                            errorArray.push(false);
                        }
                        basketTotalPrice = basketTotalPrice + x.qty * priceMath[0].price;
                        basketTotalDiscountPrice = basketTotalDiscountPrice + x.qty * priceMath[0].before_price;
                    } else {
                        if (resData.isActive === false) {
                            errorArray.push(true);
                        } else if (Number(resData.qty) < Number(x.qty)) {
                            errorArray.push(true);
                        } else {
                            errorArray.push(false);
                        }
                        basketTotalPrice = basketTotalPrice + x.qty * resData.price;
                        basketTotalDiscountPrice = basketTotalDiscountPrice + x.qty * resData.before_price;
                    }
                }
            });
        });
        let control = false;
        control = errorArray.find((x)=>x == true
        );
        if (control === undefined) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/basket/payment");
        } else {
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_10__/* .getBasket_r */ .XJ)(user.id));
            antd__WEBPACK_IMPORTED_MODULE_4__.message.loading("Action in progress..", 0.5).then(()=>antd__WEBPACK_IMPORTED_MODULE_4__.message.error("Please Control Your Basket", 2.5)
            );
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/basket");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getCargoes();
        getProducts();
    }, [
        basket[0]
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " h-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    disabled: billingAddress && shippingAddress ? false : true,
                    className: "bg-black w-full h-auto absolute top-0 cursor-pointer hover:text-white hover:bg-brand-color transition-all text-xl text-white p-5",
                    onClick: onSubmit,
                    children: [
                        "Save and Continue",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CheckSquareOutlined, {
                            className: "float-right text-3xl"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-lg p-3 -mt-2 bg-gray-50 font-semibold",
                children: "Shipping Address Summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full p-4",
                children: shippingAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                shippingAddress.name,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full justify-between pt-1 ",
                            children: [
                                shippingAddress.address,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                shippingAddress.village_id,
                                "/",
                                shippingAddress.town_id,
                                "/",
                                shippingAddress.city_id,
                                "/",
                                shippingAddress.country_id
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-red-500 text-center font-semibold p-4",
                    children: "Please Select Address"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-lg p-3 bg-gray-50 font-semibold",
                children: "Billing Address Summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full p-4 ",
                children: billingAddress ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                            children: [
                                billingAddress.name,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full justify-between pt-1 ",
                            children: [
                                billingAddress.address,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                billingAddress.village_id,
                                "/",
                                billingAddress.town_id,
                                "/",
                                billingAddress.city_id,
                                "/",
                                billingAddress.country_id
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-red-500 text-center font-semibold p-4",
                    children: "Please Select Address"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-lg p-3 bg-gray-50 font-semibold",
                children: "Cargo Summary"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full px-4 ",
                children: [
                    selectedCargo.cargo_price_discount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Cargo Discount:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "float-right font-semibold line-through",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    data: selectedCargo.cargo_price_discount
                                })
                            })
                        ]
                    }) : "",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full mt-3 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Cargo Price:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "float-right font-semibold",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    data: selectedCargo.cargo_price
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-lg p-3 my-5 bg-gray-50 font-semibold",
                children: "Basket Summary"
            }),
            allPrice.discount + selectedCargo.cargo_price_discount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full px-4 mt-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Total Discount:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "float-right line-through font-semibold",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    data: allPrice.discount + selectedCargo.cargo_price_discount
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Divider, {})
                ]
            }) : "",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full px-4 text-lg mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Total Price:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "float-right font-semibold text-brand-color",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            data: allPrice.total + selectedCargo.cargo_price
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " h-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    disabled: billingAddress && shippingAddress ? false : true,
                    className: "bg-black w-full h-auto absolute bottom-0 cursor-pointer hover:text-white hover:bg-brand-color transition-all text-xl text-white p-5",
                    onClick: onSubmit,
                    children: [
                        "Save and Continue",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CheckSquareOutlined, {
                            className: "float-right text-3xl"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


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