"use strict";
exports.id = 2747;
exports.ids = [2747];
exports.modules = {

/***/ 2747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Default)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(943);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(4515);
// EXTERNAL MODULE: ../config.js
var config = __webpack_require__(1674);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/actions/index.js + 7 modules
var actions = __webpack_require__(4840);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./app/components/Stripe/CheckoutForm.js









function CheckoutForm({ contract  }) {
    const stripe = (0,react_stripe_js_.useStripe)();
    const elements = (0,react_stripe_js_.useElements)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { basket  } = (0,external_react_redux_.useSelector)((state)=>state.basket
    );
    const { user , isAuthenticated  } = (0,external_react_redux_.useSelector)((state)=>state.login
    );
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const { 0: isChecked , 1: seTisChecked  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!stripe) {
            return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        if (!clientSecret) {
            return;
        }
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent  })=>{
            switch(paymentIntent.status){
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [
        stripe,
        user
    ]);
    const handleSubmit = async (data)=>{
        basket[0].receiver_name = data.name;
        basket[0].receiver_email = data.email;
        basket[0].receiver_phone = data.phone;
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        setIsLoading(true);
        stripe.confirmPayment({
            elements,
            redirect: "if_required"
        }).then(async (res)=>{
            if (res.error) {
                setMessage(res.error.message);
            } else {
                if (basket[0].products.length > 0) {
                    const arrayId = [];
                    basket[0].products.map((x)=>{
                        arrayId.push(x.product_id);
                    });
                    basket[0].payment_intent = res.paymentIntent.id;
                    const id = basket[0]._id;
                    delete basket[0]._id;
                    const dataRes = await external_axios_default().post(`${config.API_URL}/payment/stripeokey`, {
                        ids: arrayId,
                        items: basket[0].products,
                        basket: basket
                    });
                    basket[0].products = [];
                    basket[0].cargoes_id = null;
                    basket[0].total_price = 0;
                    basket[0].total_discount = 0;
                    basket[0].cargo_price = 0;
                    basket[0].cargo_price_discount = 0;
                    if (isAuthenticated) {
                        await external_axios_default().post(`${config.API_URL}/basket/${id}`, basket[0]).then(async ()=>{
                            await dispatch((0,actions/* getBasket_r */.XJ)(user.id));
                            router_default().push("/basket/paymentokey?payment_intent=" + dataRes.data.payment_intent + "&ordernumber=" + dataRes.data.ordernumber);
                        }).catch((err)=>{
                            console.log(err);
                        });
                    } else {
                        await dispatch((0,actions/* updateBasket_r */.j7)(basket[0]));
                        router_default().push("/basket/paymentokey?payment_intent=" + dataRes.data.payment_intent + "&ordernumber=" + dataRes.data.ordernumber);
                    }
                }
            }
        });
        setIsLoading(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form, {
        onFinish: handleSubmit,
        layout: "vertical",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-12 lg:gap-10 lg:m-10 lg:p-0 p-5 ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:col-span-4 col-span-12 ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-lg font-semibold col-span-12 text-brand-color mb-5 mt-5",
                            children: [
                                "Receiver",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "name",
                            label: "Name",
                            className: "col-span-4 mb-3",
                            initialValue: user.name,
                            rules: [
                                {
                                    required: true,
                                    message: "Please Fill"
                                }, 
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                size: "large",
                                className: "p-2"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "email",
                            label: "E-mail",
                            className: "col-span-4 mb-3",
                            initialValue: user.username,
                            rules: [
                                {
                                    type: "email",
                                    message: "input not valid"
                                },
                                {
                                    required: true,
                                    message: "The input is not valid E-mail!"
                                }, 
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                size: "large",
                                className: "p-2"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            name: "phone",
                            label: "Phone",
                            className: "col-span-4 mb-3",
                            initialValue: user.phone ? user.prefix + user.phone : "",
                            rules: [
                                {
                                    required: true,
                                    message: "Please Fill"
                                }, 
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Input, {
                                size: "large",
                                className: "p-2"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:col-span-8 col-span-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-lg font-semibold text-brand-color mt-5",
                            children: [
                                "Stripe Payment",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.PaymentElement, {
                            className: " mt-5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-lg font-semibold text-brand-color",
                            children: "Contract"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " overflow-y-scroll h-36 my-2 bg-gray-50 text-gray-500 p-7 rounded-t-none rounded-lg w-auto",
                            children: contract
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Checkbox, {
                            className: " w-auto my-4 ",
                            onChange: ()=>{
                                seTisChecked(!isChecked);
                            },
                            checked: isChecked,
                            children: "I accept the contract"
                        }),
                        message && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-red-600 font-semibold text-center text-xl m-10",
                            children: message
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                                disabled: !isChecked && !isLoading || !stripe || !elements,
                                className: "bg-black focus:bg-black w-full h-auto mb-5 cursor-pointer hover:text-white hover:bg-brand-color transition-all text-xl text-white focus:text-white p-5",
                                htmlType: "submit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    id: "button-text",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "spinner",
                                        id: "spinner"
                                    }) : "Pay now"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./app/components/Stripe/index.js







// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
function Default({ basket , public_key , contract  }) {
    const { 0: clientSecret , 1: setClientSecret  } = (0,external_react_.useState)("");
    const stripePromise = (0,stripe_js_.loadStripe)(public_key);
    const getProductAmounth = ()=>{
        if (basket.length > 0) {
            const arrayId = [];
            basket[0].products.map((x)=>{
                arrayId.push(x.product_id);
            });
            external_axios_default().post(config.API_URL + "/payment/stripe", {
                ids: arrayId,
                items: basket[0].products,
                cargoes_id: basket[0].cargoes_id,
                allBasket: basket
            }).then((res)=>setClientSecret(res.data.clientSecret)
            );
        }
    };
    (0,external_react_.useEffect)(()=>{
        getProductAmounth();
    }, [
        basket[0]
    ]);
    const appearance = {
        theme: "stripe"
    };
    const options = {
        clientSecret,
        appearance
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: clientSecret && /*#__PURE__*/ jsx_runtime_.jsx(react_stripe_js_.Elements, {
            options: options,
            stripe: stripePromise,
            children: /*#__PURE__*/ jsx_runtime_.jsx(CheckoutForm, {
                contract: contract
            })
        })
    });
};


/***/ })

};
;