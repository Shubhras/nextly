"use strict";
exports.id = 2434;
exports.ids = [2434];
exports.modules = {

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Basket_AddressSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2709);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_services_authservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1874);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);









const Defaut = ()=>{
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    const { isAuthenticated , user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(({ login  })=>login
    );
    const { 0: fields , 1: seTfields  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object.entries(user.address).map(([name, value])=>({
            name,
            value
        })
    ));
    const { 0: address , 1: seTaddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: newAddress , 1: seTnewAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        open: false,
        id: null
    });
    const { 0: city , 1: seTcity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: country , 1: seTcountry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedO , 1: seTselectedO  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: cityOption , 1: seTcityOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: countryOption , 1: seTcountryOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: ilceOption , 1: seTilceOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: semtOption , 1: seTsemtOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: mahalleOption , 1: seTmahalleOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function getDataFc() {
        if (user.id) {
            axios__WEBPACK_IMPORTED_MODULE_8___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/customers/${user.id}`).then((res)=>{
                const data = res.data;
                data["password"] = "";
                seTfields(Object.entries(data.address).map(([name, value])=>({
                        name,
                        value
                    })
                ));
                seTaddress(data.address);
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getDataFc();
        getCountry();
        getCity();
    }, [
        user
    ]);
    const getCity = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_8___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/turkey`).then((getData)=>{
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
        axios__WEBPACK_IMPORTED_MODULE_8___default().get(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/country`).then((getData)=>{
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
            _util_services_authservice__WEBPACK_IMPORTED_MODULE_7__/* ["default"].isAuthenticated */ .Z.isAuthenticated().then(async (auth)=>{
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
            if (isAuthenticated) {
                await axios__WEBPACK_IMPORTED_MODULE_8___default().post(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/customerspublic/address`, newAddresArr).then(()=>{
                    getAddress();
                    seTnewAddress({
                        open: false,
                        id: null
                    });
                }).catch((err)=>console.log("err", err)
                );
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success({
                    content: "Next Stage :)",
                    duration: 3
                });
                seTnewAddress({
                    open: false,
                    id: null
                });
                seTaddress(newAddresArr);
            }
        } else {
            const newAddresArr = address;
            newAddresArr.push(Data);
            newAddresArr.reverse();
            axios__WEBPACK_IMPORTED_MODULE_8___default().post(`${_config__WEBPACK_IMPORTED_MODULE_6__.API_URL}/customerspublic/address`, newAddresArr).then(()=>{
                setTimeout(()=>{
                    getAddress();
                    seTnewAddress({
                        open: false,
                        id: null
                    });
                }, 500);
            }).catch((err)=>console.log("err", err)
            );
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: "float-left font-semibold text-sm w-full py-7 text-center h-auto mb-5 ",
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
            " ",
            address && address.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Basket_AddressSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    Data: x,
                    seTnewAddress: seTnewAddress,
                    seTfields: seTfields,
                    newAddress: newAddress
                }, i)
            ),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
                title: "Address",
                placement: "right",
                onClose: ()=>{
                    seTnewAddress({
                        ...newAddress,
                        open: !newAddress.open
                    });
                },
                visible: newAddress.open,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        onFinish: onSubmitAddress,
                        fields: fields,
                        scrollToFirstError: true,
                        layout: "vertical",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "name",
                                label: intl.messages["app.pages.customers.addressName"],
                                fieldKey: "name",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    autocomplete: "chrome-off"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "type",
                                className: "float-left w-full mx-0 px-0",
                                label: "Type",
                                fieldKey: "type",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
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
                                    placeholder: "Select Address Type",
                                    autoComplete: "none"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "country_id",
                                className: "float-left w-full mx-0 px-0",
                                label: "Country",
                                fieldKey: "country_id",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        showSearch: true,
                                        options: countryOption,
                                        autoComplete: "none",
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
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "city_id",
                                fieldKey: "city_id",
                                label: "City",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        showSearch: true,
                                        autoComplete: "none",
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
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "town_id",
                                label: "Town",
                                fieldKey: "town_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: [
                                    selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        showSearch: true,
                                        autoComplete: "none",
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
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        placeholder: intl.messages["app.pages.customers.addressTown"],
                                        autocomplete: "chrome-off"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "district_id",
                                label: "District",
                                fieldKey: "district_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: [
                                    selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
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
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        placeholder: intl.messages["app.pages.customers.addressDistrict"],
                                        autocomplete: "chrome-off"
                                    }),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "village_id",
                                className: "float-left w-full mx-0 px-0",
                                label: "Village",
                                fieldKey: "village_id",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: [
                                    selectedO.selectedCountry == "Turkey" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        showSearch: true,
                                        autoComplete: "none",
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
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        placeholder: intl.messages["app.pages.customers.addressNeighbour"],
                                        autocomplete: "chrome-off"
                                    }),
                                    " "
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                className: "float-left w-full mx-0 px-0",
                                name: "address",
                                label: "Address",
                                fieldKey: "address",
                                rules: [
                                    {
                                        required: true,
                                        message: "Missing Area"
                                    }
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.TextArea, {
                                    rows: 3,
                                    placeholder: intl.messages["app.pages.customers.addressFull"],
                                    autocomplete: "chrome-off"
                                })
                            }),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                htmlType: "submit",
                                className: "w-full p-3 h-auto",
                                children: "Save "
                            }),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            " "
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Defaut);


/***/ })

};
;