"use strict";
exports.id = 9491;
exports.ids = [9491,313];
exports.modules = {

/***/ 9491:
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_helpers_func__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1541);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4840);










const Default = ()=>{
    const { basket  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.basket
    );
    const { isAuthenticated , user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(({ login  })=>login
    );
    const { 0: state1 , 1: seTstate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: isLoaded , 1: seTisLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const getBasketProducts = (data = [], products = [])=>{
        const BasketAllProducts = [];
        products.map((x)=>{
            const array = data.find((y)=>y._id == x.product_id
            );
            if (array) {
                const resData = array;
                const errorArray = [];
                if (x.selectedVariants !== undefined) {
                    const priceMath = _util_helpers_func__WEBPACK_IMPORTED_MODULE_8__/* ["default"].filter_array_in_obj */ .Z.filter_array_in_obj(resData.variant_products, x.selectedVariants);
                    if (priceMath[0].visible === false) {
                        errorArray.push("Product Not Active");
                    } else if (Number(priceMath[0].qty) < Number(x.qty)) {
                        errorArray.push("Product Not in Stock");
                    } else {
                        errorArray.push(null);
                    }
                    BasketAllProducts.push({
                        _id: resData._id,
                        title: resData.title,
                        selectedVariants: x.selectedVariants,
                        qty: x.qty,
                        price: priceMath[0].price,
                        before_price: priceMath[0].before_price,
                        total_price: x.qty * priceMath[0].price,
                        total_discount: x.qty * priceMath[0].before_price,
                        error: errorArray,
                        seo: resData.seo
                    });
                } else {
                    if (resData.isActive === false) {
                        errorArray.push("Product Not Active");
                    } else if (Number(resData.qty) < Number(x.qty)) {
                        errorArray.push("Product Not in Stock");
                    } else {
                        errorArray.push(null);
                    }
                    BasketAllProducts.push({
                        _id: resData._id,
                        title: resData.title,
                        selectedVariants: x.selectedVariants,
                        qty: x.qty,
                        price: resData.price,
                        before_price: resData.before_price,
                        total_price: x.qty * resData.price,
                        total_discount: x.qty * resData.before_price,
                        error: errorArray,
                        seo: resData.seo
                    });
                }
            }
        });
        seTstate(BasketAllProducts.sort((a, b)=>(a.price + a.seo + JSON.stringify(a.selectedVariants)).length - (b.price + b.seo + JSON.stringify(b.selectedVariants)).length
        ));
    };
    const basketProductUpdate = (post, messageStr = "Product Update!")=>{
        if (isAuthenticated) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_7__.API_URL}/basket/${basket[0]._id}`, post).then(async ()=>{
                antd__WEBPACK_IMPORTED_MODULE_3__.message.success({
                    content: messageStr,
                    duration: 3
                });
                await dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_9__/* .getBasket_r */ .XJ)(user.id));
                seTisLoaded(false);
            }).catch((err)=>{
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error({
                    content: "Some Error, Please Try Again",
                    duration: 3
                });
                console.log(err);
            });
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success({
                content: messageStr,
                duration: 3
            });
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_9__/* .updateBasket_r */ .j7)([
                post
            ]));
            getProducts();
            seTisLoaded(false);
        }
    };
    const getProducts = async ()=>{
        if (basket.length > 0) {
            const arrayId = [];
            basket[0].products.map((x)=>{
                arrayId.push(x.product_id);
            });
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_7__.API_URL}/basket/allproducts`, {
                _id: arrayId
            }).then((res)=>{
                getBasketProducts(res.data, basket[0].products);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getProducts();
    }, [
        basket[0]
    ]);
    const deleteProduct = (dataRecord)=>{
        seTisLoaded(true);
        const productsDataArray = basket[0].products;
        const productsData = [];
        const variantControlNot = productsDataArray.filter((x)=>x.product_id != dataRecord._id || JSON.stringify(x.selectedVariants) != JSON.stringify(dataRecord.selectedVariants)
        );
        productsData.push(...variantControlNot);
        const post = {
            created_user: {
                name: user.name,
                id: user.id
            },
            customer_id: user.id,
            products: productsData
        };
        basketProductUpdate(post, "Delete Product!");
    };
    const plusProduct = (dataRecord)=>{
        seTisLoaded(true);
        const productsDataArray = basket[0].products;
        const productsData = [];
        const variantControl = productsDataArray.find((x)=>x.product_id == dataRecord._id && JSON.stringify(x.selectedVariants) == JSON.stringify(dataRecord.selectedVariants)
        );
        const variantControlNot = productsDataArray.filter((x)=>x.product_id != dataRecord._id || JSON.stringify(x.selectedVariants) != JSON.stringify(dataRecord.selectedVariants)
        );
        productsData.push(...variantControlNot, {
            product_id: dataRecord._id,
            selectedVariants: dataRecord.selectedVariants,
            qty: variantControl.qty + 1,
            seo: dataRecord.seo
        });
        const post = {
            created_user: {
                name: user.name,
                id: user.id
            },
            customer_id: user.id,
            products: productsData
        };
        basketProductUpdate(post);
    };
    const notPlusProduct = (dataRecord)=>{
        seTisLoaded(true);
        const productsDataArray = basket[0].products;
        const productsData = [];
        const variantControl = productsDataArray.find((x)=>x.product_id == dataRecord._id && JSON.stringify(x.selectedVariants) == JSON.stringify(dataRecord.selectedVariants)
        );
        const variantControlNot = productsDataArray.filter((x)=>x.product_id != dataRecord._id || JSON.stringify(x.selectedVariants) != JSON.stringify(dataRecord.selectedVariants)
        );
        productsData.push(...variantControlNot, {
            product_id: dataRecord._id,
            selectedVariants: dataRecord.selectedVariants,
            qty: variantControl.qty > 1 ? variantControl.qty - 1 : variantControl.qty,
            seo: dataRecord.seo
        });
        const post = {
            created_user: {
                name: user.name,
                id: user.id
            },
            customer_id: user.id,
            products: productsData
        };
        basketProductUpdate(post);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Table, {
            pagination: false,
            loading: isLoaded,
            columns: [
                {
                    title: "Title",
                    dataIndex: "title",
                    key: "title",
                    render: (text, record)=>{
                        const errorArray = [];
                        record.error.map((x)=>{
                            errorArray.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-xs ",
                                children: [
                                    " ",
                                    x,
                                    " "
                                ]
                            }));
                        });
                        const variants = [];
                        for(const property in record.selectedVariants){
                            variants.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-xs ",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-semibold",
                                        children: [
                                            " ",
                                            property
                                        ]
                                    }),
                                    ":",
                                    " ",
                                    record.selectedVariants[property],
                                    " "
                                ]
                            }));
                        }
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "link",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "float-left mb-5 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "float-right text-right sm:hidden ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Popconfirm, {
                                                placement: "left",
                                                title: "Are You Sure?",
                                                onConfirm: ()=>{
                                                    deleteProduct(record);
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteOutlined, {
                                                            style: {
                                                                fontSize: "150%",
                                                                marginLeft: "15px"
                                                            }
                                                        }),
                                                        " "
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-red-500 float-left",
                                            children: errorArray
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-semibold",
                                            children: text
                                        }),
                                        variants.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                " ",
                                                variants
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: " "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " float-left sm:hidden flex flex-row h-10 my-2 rounded w-24 relative bg-transparent border-gray-200 border ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            "data-action": "decrement",
                                            className: " bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-l cursor-pointer outline-none",
                                            onClick: ()=>{
                                                notPlusProduct(record);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "m-auto text-2xl font-thin",
                                                children: "\u2212"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            className: "outline-none hiddenArrowInputNumber focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 ",
                                            name: "custom-input-number",
                                            value: record.qty
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            "data-action": "increment",
                                            className: "bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-r cursor-pointer",
                                            onClick: ()=>{
                                                plusProduct(record);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "m-auto text-2xl font-thin",
                                                children: "+"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center float-right sm:hidden ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: " text-md line-through",
                                            children: [
                                                " ",
                                                record.total_discount != 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    data: record.total_discount
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " text-lg text-brand-color",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                data: record.total_price
                                            })
                                        })
                                    ]
                                })
                            ]
                        });
                    }
                },
                {
                    title: "Price",
                    dataIndex: "price",
                    key: "price",
                    className: "hidden sm:table-cell ",
                    render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: " text-md line-through",
                                    children: record.before_price != 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        data: record.before_price
                                    }) : ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " text-sm ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        data: record.price
                                    })
                                })
                            ]
                        })
                },
                {
                    title: "Qty",
                    dataIndex: "action",
                    key: "action",
                    className: "hidden sm:table-cell ",
                    render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row h-10 rounded w-24 relative bg-transparent border-gray-200 border mt-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        "data-action": "decrement",
                                        className: " bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-l cursor-pointer outline-none",
                                        onClick: ()=>{
                                            notPlusProduct(record);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "m-auto text-2xl font-thin",
                                            children: "\u2212"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "number",
                                        className: "outline-none hiddenArrowInputNumber focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 ",
                                        name: "custom-input-number",
                                        value: record.qty
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        "data-action": "increment",
                                        className: "bg-white text-gray-700 hover:text-black hover:bg-brand-color h-full w-20 rounded-r cursor-pointer",
                                        onClick: ()=>{
                                            plusProduct(record);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "m-auto text-2xl font-thin",
                                            children: "+"
                                        })
                                    })
                                ]
                            })
                        })
                },
                {
                    title: "Total Price",
                    dataIndex: "total_price",
                    key: "total_price",
                    className: "hidden sm:table-cell ",
                    render: (text, record)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: " text-md line-through",
                                    children: [
                                        " ",
                                        record.total_discount != 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            data: record.total_discount
                                        }) : ""
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " text-lg text-brand-color",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        data: record.total_price
                                    })
                                })
                            ]
                        })
                },
                {
                    title: "Delete",
                    dataIndex: "action",
                    key: "action",
                    className: "hidden sm:table-cell ",
                    render: (text, record)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Popconfirm, {
                            placement: "left",
                            title: "Are You Sure?",
                            onConfirm: ()=>{
                                deleteProduct(record);
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteOutlined, {
                                        style: {
                                            fontSize: "150%",
                                            marginLeft: "15px"
                                        }
                                    }),
                                    " "
                                ]
                            })
                        })
                }, 
            ],
            dataSource: [
                ...state1
            ]
        })
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