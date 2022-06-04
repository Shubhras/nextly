"use strict";
exports.id = 551;
exports.ids = [551];
exports.modules = {

/***/ 551:
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
/* harmony import */ var _AddressSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2709);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4840);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_services_authservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1874);










const Default = ()=>{
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
    const { basket  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.basket
    );
    const { isAuthenticated , user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(({ login  })=>login
    );
    const { 0: fields , 1: seTfields  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: address , 1: seTaddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: selectedShippingAddress , 1: seTselectedShippingAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: selectedBillingAddress , 1: seTselectedBillingAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: billingAdressSame , 1: seTbillingAdressSame  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: newAddress , 1: seTnewAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        open: false,
        id: null
    });
    const { 0: city , 1: seTcity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: country , 1: seTcountry  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: selectedO , 1: seTselectedO  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: cityOption , 1: seTcityOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: countryOption , 1: seTcountryOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: ilceOption , 1: seTilceOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: semtOption , 1: seTsemtOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: mahalleOption , 1: seTmahalleOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [form] = antd__WEBPACK_IMPORTED_MODULE_3__.Form.useForm();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const updateAddress = async (newAddresArr)=>{
        if (isAuthenticated) {
            await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/customerspublic/address`, newAddresArr).then(()=>{
                setTimeout(()=>{
                    getAddress();
                    seTnewAddress({
                        open: false,
                        id: null
                    });
                }, 500);
            }).catch((err)=>console.log("err", err)
            );
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success({
                content: "Next Stage :)",
                duration: 3
            });
            seTnewAddress({
                open: false,
                id: null
            });
            seTaddress(newAddresArr);
        }
    };
    const updateBasket = async (post)=>{
        if (isAuthenticated) {
            axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/basket/${basket[0]._id}`, post).then(async ()=>{
                antd__WEBPACK_IMPORTED_MODULE_3__.message.success({
                    content: "Address Selected",
                    duration: 3
                });
                await dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__/* .getBasket_r */ .XJ)(user.id));
            }).catch((err)=>{
                antd__WEBPACK_IMPORTED_MODULE_3__.message.error({
                    content: "Some Error, Please Try Again",
                    duration: 3
                });
                console.log(err);
            });
        } else {
            antd__WEBPACK_IMPORTED_MODULE_3__.message.success({
                content: "Next Stage :)",
                duration: 3
            });
            dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__/* .updateBasket_r */ .j7)([
                post
            ]));
        }
    };
    const getCity = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/turkey`).then((getData)=>{
            const dataManipulate = [];
            for(const i in getData.data){
                dataManipulate.push({
                    label: getData.data[i].Il,
                    value: getData.data[i].Il
                });
            }
            seTcityOption(dataManipulate);
            seTcity(getData.data);
        });
    };
    const getCountry = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/country`).then((getData)=>{
            const dataManipulate = [];
            for(const i in getData.data){
                dataManipulate.push({
                    label: getData.data[i].name,
                    value: getData.data[i].name
                });
            }
            seTcountryOption(dataManipulate);
            seTcountry(getData.data);
        });
    };
    const getAddress = ()=>{
        if (isAuthenticated) {
            _util_services_authservice__WEBPACK_IMPORTED_MODULE_9__/* ["default"].isAuthenticated */ .Z.isAuthenticated().then(async (auth)=>{
                await seTaddress(auth.user.address);
            });
        }
    };
    const onSubmitAddress = async (Data)=>{
        if (newAddress.id) {
            const newAddresArr = address.filter((x)=>JSON.stringify(x) !== newAddress.id
            );
            newAddresArr.push(Data);
            newAddresArr.reverse();
            updateAddress(newAddresArr);
        } else {
            const newAddresArr = address;
            newAddresArr.push(Data);
            newAddresArr.reverse();
            updateAddress(newAddresArr);
        }
    };
    const onFinishFailedAddress = (errorInfo)=>{
        console.log(errorInfo);
    };
    const getSelectedAddress = ()=>{
        if (basket.length > 0) {
            if (basket[0].shipping_address) {
                seTselectedShippingAddress(JSON.stringify(basket[0].shipping_address));
            }
            if (basket[0].billing_address) {
                seTselectedBillingAddress(JSON.stringify(basket[0].billing_address));
            }
            const stringifBillingAddres = JSON.stringify(basket[0].billing_address);
            const stringifShippingAddres = JSON.stringify(basket[0].shipping_address);
            if (stringifBillingAddres != stringifShippingAddres) {
                seTbillingAdressSame(false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getCountry();
        getAddress();
        getSelectedAddress();
    }, [
        basket[0]
    ]);
    const onChanheShppingAddress = (data)=>{
        if (billingAdressSame) {
            seTselectedShippingAddress(data);
            seTselectedBillingAddress(data);
            const newBasketPost = {
                created_user: {
                    name: user.name,
                    id: user.id
                },
                customer_id: user.id,
                products: basket[0].products,
                cargoes_id: basket[0].cargoes_id,
                total_price: basket[0].total_price,
                total_discount: basket[0].total_discount,
                cargo_price: basket[0].cargo_price,
                cargo_price_discount: basket[0].cargo_price_discount,
                shipping_address: JSON.parse(data),
                billing_address: JSON.parse(data)
            };
            updateBasket(newBasketPost);
        } else {
            seTselectedShippingAddress(data);
            const newBasketPost = {
                created_user: {
                    name: user.name,
                    id: user.id
                },
                customer_id: user.id,
                products: basket[0].products,
                cargoes_id: basket[0].cargoes_id,
                total_price: basket[0].total_price,
                total_discount: basket[0].total_discount,
                cargo_price: basket[0].cargo_price,
                cargo_price_discount: basket[0].cargo_price_discount,
                shipping_address: JSON.parse(data)
            };
            updateBasket(newBasketPost);
        }
    };
    const onChanheBillingAddress = (data)=>{
        seTselectedBillingAddress(data);
        const newBasketPost = {
            created_user: {
                name: user.name,
                id: user.id
            },
            customer_id: user.id,
            products: basket[0].products,
            cargoes_id: basket[0].cargoes_id,
            total_price: basket[0].total_price,
            total_discount: basket[0].total_discount,
            cargo_price: basket[0].cargo_price,
            cargo_price_discount: basket[0].cargo_price_discount,
            shipping_address: JSON.parse(selectedShippingAddress),
            billing_address: JSON.parse(data)
        };
        updateBasket(newBasketPost);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full px-4 pb-10 grid grid-cols-12 gap-x-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    className: "float-left col-span-12 font-semibold text-sm w-full py-7 text-center h-full mb-5 ",
                    onClick: ()=>{
                        seTfields(Object.entries(address[0] ? address[0] : {}).map(([name])=>({
                                name,
                                value: null
                            })
                        ));
                        seTnewAddress({
                            ...newAddress,
                            open: !newAddress.open
                        });
                    },
                    children: "New Address"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-12 float-left mt-10 -mb-16 z-10 text-right",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
                        className: " w-auto float-right ",
                        onChange: (vall)=>{
                            seTbillingAdressSame(!billingAdressSame);
                            if (vall.target.checked) {
                                onChanheBillingAddress(selectedShippingAddress);
                                seTselectedBillingAddress(selectedShippingAddress);
                            }
                        },
                        checked: billingAdressSame,
                        children: "Billing address is same"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: billingAdressSame ? "col-span-12" : "col-span-12 sm:col-span-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-lg font-semibold w-full sm:mt-10 mt-16",
                            children: "Shipping Address"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full ",
                            children: address && address.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddressSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    Data: x,
                                    seTnewAddress: seTnewAddress,
                                    seTfields: seTfields,
                                    newAddress: newAddress,
                                    selectedShippingAddress: selectedShippingAddress,
                                    onChanheShppingAddress: onChanheShppingAddress
                                }, i)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: billingAdressSame ? "hidden" : "col-span-12 sm:col-span-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-lg font-semibold w-full sm:mt-10 mt-16",
                            children: [
                                "Billing Address",
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full",
                            children: address && address.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddressSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    Data: x,
                                    seTnewAddress: seTnewAddress,
                                    seTfields: seTfields,
                                    newAddress: newAddress,
                                    selectedBillingAddress: selectedBillingAddress,
                                    onChanheBillingAddress: onChanheBillingAddress
                                }, i)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
                    title: "Address",
                    placement: "left",
                    onClose: ()=>{
                        seTnewAddress({
                            ...newAddress,
                            open: !newAddress.open
                        });
                    },
                    visible: newAddress.open,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__.Form, {
                        form: form,
                        onFinishFailed: onFinishFailedAddress,
                        onFinish: onSubmitAddress,
                        fields: fields,
                        scrollToFirstError: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "name",
                                fieldKey: "name",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                    placeholder: intl.messages["app.pages.customers.addressName"],
                                    autocomplete: "chrome-off"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                name: "type",
                                className: "float-left w-full mx-0 px-0",
                                fieldKey: "type",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    defaultValue: true,
                                    options: [
                                        {
                                            label: "Billing Address",
                                            value: true
                                        },
                                        {
                                            label: "Shipping Address",
                                            value: false
                                        }, 
                                    ],
                                    placeholder: "Select Address Type"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                name: "country_id",
                                className: "float-left w-full mx-0 px-0",
                                fieldKey: "country_id",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    autoComplete: "none",
                                    showSearch: true,
                                    options: countryOption,
                                    placeholder: "Search to Country",
                                    optionFilterProp: "children",
                                    filterOption: (input, option)=>option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    ,
                                    onChange: (selected)=>{
                                        if (selected == "Turkey") {
                                            getCity();
                                        } else {
                                            const citydata = country.filter((x)=>x.name === selected
                                            );
                                            const dataManipulate = [];
                                            for(const i in citydata[0].states){
                                                dataManipulate.push({
                                                    label: citydata[0].states[i].name,
                                                    value: citydata[0].states[i].name
                                                });
                                            }
                                            seTcityOption(dataManipulate);
                                        }
                                        seTselectedO({
                                            ...selectedO,
                                            selectedCountry: selected
                                        });
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "city_id",
                                fieldKey: "city_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    autoComplete: "none",
                                    showSearch: true,
                                    options: cityOption,
                                    placeholder: intl.messages["app.pages.customers.addressCity"],
                                    optionFilterProp: "children",
                                    filterOption: (input, option)=>option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    ,
                                    onChange: (selected)=>{
                                        if (selectedO.selectedCountry == "Turkey") {
                                            const ilce = city.filter((x)=>x.Il === selected
                                            );
                                            const dataManipulate = [];
                                            for(const i in ilce[0].Ilce){
                                                dataManipulate.push({
                                                    label: ilce[0].Ilce[i].Ilce,
                                                    value: ilce[0].Ilce[i].Ilce
                                                });
                                            }
                                            seTselectedO({
                                                ...selectedO,
                                                selectedCity: selected
                                            });
                                            seTilceOption({
                                                option: dataManipulate,
                                                data: ilce[0].Ilce
                                            });
                                        }
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "town_id",
                                fieldKey: "town_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    showSearch: true,
                                    options: ilceOption.option,
                                    name: "town_id",
                                    placeholder: intl.messages["app.pages.customers.addressTown"],
                                    optionFilterProp: "children",
                                    filterOption: (input, option)=>option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    ,
                                    onChange: (selected)=>{
                                        const data = ilceOption.data.filter((x)=>x.Ilce === selected
                                        );
                                        const dataManipulate = [];
                                        for(const i in data[0].Semt){
                                            dataManipulate.push({
                                                label: data[0].Semt[i].Semt,
                                                value: data[0].Semt[i].Semt
                                            });
                                        }
                                        seTselectedO({
                                            ...selectedO,
                                            selectedIlce: selected
                                        });
                                        seTsemtOption({
                                            option: dataManipulate,
                                            data: data[0].Semt
                                        });
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                    placeholder: intl.messages["app.pages.customers.addressTown"],
                                    autoComplete: "none"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "district_id",
                                fieldKey: "district_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    showSearch: true,
                                    autoComplete: "none",
                                    options: semtOption.option,
                                    placeholder: intl.messages["app.pages.customers.addressDistrict"],
                                    name: "district_id",
                                    optionFilterProp: "children",
                                    filterOption: (input, option)=>option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    ,
                                    onChange: (selected)=>{
                                        const data = semtOption.data.filter((x)=>x.Semt === selected
                                        );
                                        const dataManipulate = [];
                                        for(const i in data[0].Mahalle){
                                            dataManipulate.push({
                                                label: data[0].Mahalle[i].Mahalle,
                                                value: data[0].Mahalle[i].Mahalle
                                            });
                                        }
                                        seTselectedO({
                                            ...selectedO,
                                            selectedSemt: selected
                                        });
                                        seTmahalleOption({
                                            option: dataManipulate,
                                            data: data[0].Mahalle
                                        });
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                    placeholder: intl.messages["app.pages.customers.addressDistrict"],
                                    autoComplete: "none"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                name: "village_id",
                                className: "float-left w-full mx-0 px-0",
                                fieldKey: "village_id",
                                autoComplete: "none",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                    showSearch: true,
                                    options: mahalleOption.option,
                                    placeholder: intl.messages["app.pages.customers.addressNeighbour"],
                                    name: "village_id",
                                    optionFilterProp: "children",
                                    filterOption: (input, option)=>option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    ,
                                    onChange: (selected)=>{
                                        seTselectedO({
                                            ...selectedO,
                                            selectedMahalle: selected
                                        });
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                    placeholder: intl.messages["app.pages.customers.addressNeighbour"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "address",
                                fieldKey: "address",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                autoComplete: "none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Input.TextArea, {
                                    rows: 3,
                                    placeholder: intl.messages["app.pages.customers.addressFull"]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                htmlType: "submit",
                                className: "w-full p-3 h-auto",
                                children: "Save"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ })

};
;