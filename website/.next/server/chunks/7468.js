"use strict";
exports.id = 7468;
exports.ids = [7468];
exports.modules = {

/***/ 7468:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_services_authservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1874);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








const Defaut = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_2__.Form.useForm();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(({ login  })=>login
    );
    const { 0: fieldsUser , 1: seTfieldsUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Object.entries(user).map(([name, value])=>({
            name,
            value
        })
    ));
    const { 0: state , 1: seTstate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    function getDataFc() {
        if (user.id) {
            axios__WEBPACK_IMPORTED_MODULE_7___default().get(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/customers/${user.id}`).then((res)=>{
                const data = res.data;
                data["password"] = "";
                seTstate(data);
                seTfieldsUser(Object.entries(data).map(([name, value])=>({
                        name,
                        value
                    })
                ));
            });
        }
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getDataFc();
    }, [
        user
    ]);
    const onSubmitPassword = (pass)=>{
        _util_services_authservice__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login({
            username: state.username,
            password: pass.currentpassword
        }).then((data)=>{
            const { isAuthenticated  } = data;
            if (isAuthenticated) {
                axios__WEBPACK_IMPORTED_MODULE_7___default().post(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/staff/updatePasswordCustomer`, {
                    _id: state._id,
                    password: pass.password
                }).then((res)=>{
                    if (res.data.variant == "success") {
                        antd__WEBPACK_IMPORTED_MODULE_2__.message.success(intl.messages["app.pages.customers.passwordUpdated"]);
                    } else {
                        antd__WEBPACK_IMPORTED_MODULE_2__.message.error(intl.messages["app.pages.customers.passwordNotUpdated"] + res.data.messagge);
                    }
                }).catch((err)=>console.log(err)
                );
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error("Your current password does not match");
            }
        });
    };
    const onSubmit = (Data)=>{
        axios__WEBPACK_IMPORTED_MODULE_7___default().post(`${_config__WEBPACK_IMPORTED_MODULE_5__.API_URL}/customers/${state._id}`, Data).then((res)=>{
            if (res.data.variant == "error") {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.error(intl.messages["app.pages.customers.notUpdated"] + res.data.messagge);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_2__.message.success(intl.messages["app.pages.customers.updated"]);
            }
        }).catch((err)=>console.log(err)
        );
    };
    const changePrefix = (selected)=>{
        seTstate({
            ...state,
            prefix: selected
        });
    };
    const prefixSelector = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
        name: "prefix",
        noStyle: true,
        initialValue: "90",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {
            onChange: changePrefix,
            style: {
                width: 70
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
                value: "90",
                children: "+90"
            })
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " h-full grid grid-cols-12 gap-0 sm:gap-10 p-0 m-0 w-full my-10 ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " col-span-12 lg:col-span-6 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        onFinish: onSubmit,
                        layout: "vertical",
                        form: form,
                        fields: fieldsUser,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "username",
                                label: "E-mail",
                                rules: [
                                    {
                                        type: "email",
                                        message: "The input is not valid E-mail!"
                                    },
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.inputNotValid"]
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "name",
                                label: intl.messages["app.pages.customers.name"],
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.pleaseFill"],
                                        whitespace: true
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "surname",
                                label: intl.messages["app.pages.customers.surname"],
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.pleaseFill"],
                                        whitespace: true
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "phone",
                                label: intl.messages["app.pages.customers.phone"],
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.pleaseFill"]
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    addonBefore: prefixSelector
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    type: "primary",
                                    className: "w-full",
                                    htmlType: "submit",
                                    children: "Update"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " col-span-12 lg:col-span-6 ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        onFinish: onSubmitPassword,
                        layout: "vertical",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "currentpassword",
                                label: intl.messages["app.pages.common.curretPassword"],
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.inputNotValid"]
                                    }, 
                                ],
                                hasFeedback: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "password",
                                label: intl.messages["app.pages.common.password"],
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.inputNotValid"]
                                    }, 
                                ],
                                hasFeedback: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                name: "confirm",
                                label: intl.messages["app.pages.common.confirmPassword"],
                                dependencies: [
                                    "password"
                                ],
                                hasFeedback: true,
                                rules: [
                                    {
                                        required: true,
                                        message: intl.messages["app.pages.common.inputNotValid"]
                                    },
                                    ({ getFieldValue  })=>({
                                            validator (rule, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(intl.messages["app.pages.common.passwordNotMatch"]);
                                            }
                                        })
                                    , 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    type: "primary",
                                    className: "w-full",
                                    htmlType: "submit",
                                    children: "Update Password"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Defaut);


/***/ })

};
;