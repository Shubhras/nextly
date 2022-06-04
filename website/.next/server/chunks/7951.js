"use strict";
exports.id = 7951;
exports.ids = [7951];
exports.modules = {

/***/ 7951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PoductVariants)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./redux/actions/index.js + 7 modules
var actions = __webpack_require__(4840);
// EXTERNAL MODULE: ./app/components/Price/index.js
var Price = __webpack_require__(313);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./app/components/ProductDetail/AddProductButton.js








const Page = ({ form , disabledVariant =true , seTloadingButton , loadingButton , basket , isAuthenticated , user , state , priceAdd , getBasket ,  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    // const seo = router.query.seo
    const router = (0,router_.useRouter)();
    const addBasket = (res)=>{
        if (basket.length < 1) {
            const post = {
                created_user: {
                    name: user.name,
                    id: user.id
                },
                customer_id: user.id,
                products: [
                    {
                        product_id: state._id,
                        seo: state.seo,
                        selectedVariants: res,
                        qty: 1
                    }, 
                ],
                total_price: priceAdd.price,
                discount_price: priceAdd.before_price
            };
            if (isAuthenticated) {
                external_axios_default().post(`${config.API_URL}/basket/add`, post).then(()=>{
                    getBasket(user.id);
                    seTloadingButton(true);
                    form.resetFields();
                    external_antd_.message.success({
                        content: "Product Added!",
                        duration: 3
                    });
                }).catch((err)=>{
                    external_antd_.message.error({
                        content: "Some Error, Please Try Again " + err,
                        duration: 3
                    });
                });
            } else {
                seTloadingButton(true);
                form.resetFields();
                external_antd_.message.success({
                    content: "Product Added!",
                    duration: 3
                });
                dispatch((0,actions/* updateBasket_r */.j7)([
                    post
                ]));
            }
        } else {
            const productsDataArray = basket[0].products;
            const productsData = [];
            if (state.type) {
                const variantControl = productsDataArray.find((x)=>(x.product_id._id == state._id || x.product_id == state._id) && JSON.stringify(x.selectedVariants) == JSON.stringify(res)
                );
                const variantControlNot = productsDataArray.filter((x)=>JSON.stringify(x.selectedVariants) != JSON.stringify(res)
                );
                if (variantControl == undefined) {
                    productsData.push(...productsDataArray, {
                        product_id: state._id,
                        selectedVariants: res,
                        seo: state.seo,
                        qty: 1
                    });
                } else {
                    productsData.push(...variantControlNot, {
                        product_id: state._id,
                        selectedVariants: res,
                        seo: state.seo,
                        qty: variantControl.qty + 1
                    });
                }
            } else {
                const variantControlId = productsDataArray.find((x)=>x.product_id._id == state._id || x.product_id == state._id
                );
                const variantControlIdNot = productsDataArray.filter((x)=>JSON.stringify(x.selectedVariants) != JSON.stringify(res) && x.product_id != state._id
                );
                if (variantControlId == undefined) {
                    productsData.push(...productsDataArray, {
                        product_id: state._id,
                        selectedVariants: undefined,
                        seo: state.seo,
                        qty: 1
                    });
                } else {
                    productsData.push(...variantControlIdNot, {
                        product_id: state._id,
                        selectedVariants: undefined,
                        seo: state.seo,
                        qty: variantControlId.qty + 1
                    });
                }
            }
            const post = {
                created_user: {
                    name: user.name,
                    id: user.id
                },
                customer_id: user.id,
                products: productsData.sort((a, b)=>(a.seo + JSON.stringify(a.selectedVariants)).length - (b.seo + JSON.stringify(b.selectedVariants)).length
                )
            };
            if (isAuthenticated) {
                external_axios_default().post(`${config.API_URL}/basket/${basket[0]._id}`, post).then(()=>{
                    getBasket(user.id);
                    seTloadingButton(true);
                    form.resetFields();
                    external_antd_.message.success({
                        content: "Product Added!",
                        duration: 3
                    });
                }).catch((err)=>{
                    external_antd_.message.error({
                        content: "Some Error, Please Try Again",
                        duration: 3
                    });
                    console.log(err);
                });
            } else {
                seTloadingButton(true);
                form.resetFields();
                external_antd_.message.success({
                    content: "Product Added!",
                    duration: 3
                });
                dispatch((0,actions/* updateBasket_r */.j7)([
                    post
                ]));
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " gap-4 lg:grid",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                type: "primary",
                className: " xl:w-12/12 w-full border-black bg-black text-2xl h-auto hover:bg-white hover:border-black hover:text-black",
                disabled: !disabledVariant,
                onClick: ()=>{
                    form.validateFields().then((res)=>{
                        seTloadingButton(false);
                        if (loadingButton) {
                            addBasket(res);
                            router.push("/basket");
                        }
                    }).catch((err)=>console.log("err", err)
                    );
                },
                children: [
                    "Buy Now",
                    loadingButton ? null : /*#__PURE__*/ jsx_runtime_.jsx(icons_.LoadingOutlined, {
                        className: "animate-spin h-5 w-5 mr-3 "
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                type: "primary",
                className: " xl:w-12/12 w-full border-brand-color bg-brand-color text-2xl h-auto hover:bg-white hover:border-brand-color hover:text-brand-color",
                disabled: !disabledVariant,
                onClick: ()=>{
                    form.validateFields().then((res)=>{
                        seTloadingButton(false);
                        if (loadingButton) {
                            addBasket(res);
                        }
                    }).catch((err)=>console.log("err", err)
                    );
                },
                children: [
                    "Add to Basket",
                    loadingButton ? null : /*#__PURE__*/ jsx_runtime_.jsx(icons_.LoadingOutlined, {
                        className: "animate-spin h-5 w-6 mr-3 "
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AddProductButton = (Page);

// EXTERNAL MODULE: ./util/helpers/func.js
var func = __webpack_require__(1541);
;// CONCATENATED MODULE: ./app/components/ProductDetail/PoductVariants.js








const PoductVariants_Page = ({ data: data1 = {}  })=>{
    const { isAuthenticated , user  } = (0,external_react_redux_.useSelector)(({ login  })=>login
    );
    const { basket: basket1  } = (0,external_react_redux_.useSelector)(({ basket  })=>basket
    );
    const state = data1;
    const { 0: loadingButton , 1: seTloadingButton  } = (0,external_react_.useState)(true);
    const { 0: disabledVariant , 1: seTdisabledVariant  } = (0,external_react_.useState)(true);
    const { 0: priceAdd , 1: seTpriceAdd  } = (0,external_react_.useState)({
        before_price: 0,
        price: 0,
        qty: 1
    });
    const [form] = external_antd_.Form.useForm();
    const dispatch = (0,external_react_redux_.useDispatch)();
    // const seo = router.query.seo
    const getBasket = (id)=>{
        dispatch((0,actions/* getBasket_r */.XJ)(id));
    };
    (0,external_react_.useEffect)(()=>{
        getBasket(user.id);
    }, []);
    const onFinishFailed = (errorInfo)=>{
        console.log(errorInfo);
    };
    const getVariantPrice = (data)=>{
        if (data.length > 0) {
            const newData = data.sort((a, b)=>{
                return a.price - b.price;
            });
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                        data: newData[0].price
                    }),
                    " -",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                        data: newData[data.length - 1].price
                    }),
                    " "
                ]
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "lg:pl-10 px-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: " mt-5",
                children: state.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-gray-500",
                children: state.description_short
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-4 w-full",
                children: state.type ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: disabledVariant ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: " text-brand-color text-2xl",
                        children: [
                            priceAdd.price != 0 ? /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                data: priceAdd.price
                            }) : getVariantPrice(state.variant_products),
                            priceAdd.before_price != 0 && priceAdd.before_price > priceAdd.price ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "line-through ml-3 text-sm text-black",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                    data: priceAdd.before_price
                                })
                            }) : ""
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-red-500",
                        children: "This is variant not shipping."
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-brand-color font-semibold text-2xl",
                    children: disabledVariant ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                data: state.price
                            }),
                            state.before_price != 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "line-through ml-3 text-sm text-black",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Price["default"], {
                                    data: state.before_price
                                })
                            }) : ""
                        ]
                    }) : ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Form, {
                        form: form,
                        name: "add",
                        onFinishFailed: onFinishFailed,
                        scrollToFirstError: true,
                        layout: "vertical",
                        className: "w-full ",
                        children: [
                            state.type ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {}),
                                    state.variants.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                                                name: x.name,
                                                label: form.getFieldValue(x.name) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "font-normal",
                                                    children: [
                                                        x.name,
                                                        " :",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "font-semibold",
                                                            children: [
                                                                " ",
                                                                form.getFieldValue(x.name),
                                                                " "
                                                            ]
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "font-normal",
                                                    children: [
                                                        x.name,
                                                        " :",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-gray-500",
                                                            children: " Please Select"
                                                        })
                                                    ]
                                                }),
                                                labelAlign: "left",
                                                className: "mb-0 pb-0 mt-5 ",
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Please Select",
                                                        whitespace: true
                                                    }, 
                                                ],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Radio.Group, {
                                                    name: x.name,
                                                    optionType: "button",
                                                    buttonStyle: "outline",
                                                    className: "pl-2 mt-2 mb-1 ",
                                                    required: true,
                                                    onChange: (y)=>{
                                                        const data = state;
                                                        data.selectedVariants = {
                                                            ...data.selectedVariants,
                                                            [y.target.name]: y.target.value
                                                        };
                                                        const priceMath = func/* default.filter_array_in_obj */.Z.filter_array_in_obj(data.variant_products, data.selectedVariants);
                                                        if (priceMath.length == 1) {
                                                            if (priceMath[0].qty == "0") {
                                                                seTdisabledVariant(false);
                                                            } else if (priceMath[0].visible) {
                                                                seTdisabledVariant(true);
                                                            } else {
                                                                seTdisabledVariant(false);
                                                            }
                                                        }
                                                        seTpriceAdd({
                                                            qty: priceAdd.qty,
                                                            price: priceMath[0].price * priceAdd.qty,
                                                            before_price: priceMath[0].before_price * priceAdd.qty
                                                        });
                                                    },
                                                    children: x.value.map((z, i)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Radio.Button, {
                                                            value: z,
                                                            children: z
                                                        }, i);
                                                    })
                                                })
                                            })
                                        }, x.name)
                                    )
                                ]
                            }) : "",
                            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(AddProductButton, {
                                disabledVariant: disabledVariant,
                                form: form,
                                seTloadingButton: seTloadingButton,
                                loadingButton: loadingButton,
                                basket: basket1,
                                isAuthenticated: isAuthenticated,
                                user: user,
                                state: state,
                                priceAdd: priceAdd,
                                getBasket: getBasket
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Divider, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const PoductVariants = (PoductVariants_Page);


/***/ })

};
;