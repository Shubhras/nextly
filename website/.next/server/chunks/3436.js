"use strict";
exports.id = 3436;
exports.ids = [3436];
exports.modules = {

/***/ 3436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_services_authservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4840);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8751);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(418);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1674);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_14__);











const { Option  } = antd__WEBPACK_IMPORTED_MODULE_5__.Select;
const CategoriesMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(()=>__webpack_require__.e(/* import() */ 1386).then(__webpack_require__.bind(__webpack_require__, 1386))
, {
    loadableGenerated: {
        modules: [
            "../app/components/Header/index.js -> " + "../../components/CategoriesMenu"
        ]
    }
});




const Default = ()=>{
    const [form] = antd__WEBPACK_IMPORTED_MODULE_5__.Form.useForm();
    const { settings: settings1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(({ settings  })=>settings
    );
    const { basket  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.basket
    );
    const { isAuthenticated: isAuthenticated1  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(({ login  })=>login
    );
    const { 0: openModalLogin , 1: seTopenModalLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: confirmLoadingLogin , 1: seTconfirmLoadingLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openModalSignup , 1: seTopenModalSignup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: confirmLoadingSignup , 1: seTconfirmLoadingSignup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: stateisAuthenticated , 1: seTstateisAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const onSubmitSignup = (Data)=>{
        Data["username"] = Data.username.toLowerCase();
        axios__WEBPACK_IMPORTED_MODULE_13___default().post(`${_config__WEBPACK_IMPORTED_MODULE_12__.API_URL}/users/register`, Data).then((res)=>{
            if (res.data.error) {
                antd__WEBPACK_IMPORTED_MODULE_5__.message.error(res.data.messagge);
            } else {
                form.resetFields();
                antd__WEBPACK_IMPORTED_MODULE_5__.message.success(res.data.messagge);
                onSubmitLogin(Data);
            }
        }).catch((err)=>console.log("err", err)
        );
    };
    const onSubmitLogin = (Data)=>{
        Data["username"] = Data.username.toLowerCase();
        _util_services_authservice__WEBPACK_IMPORTED_MODULE_2__/* ["default"].login */ .Z.login(Data).then((data)=>{
            const { isAuthenticated , user  } = data;
            if (isAuthenticated) {
                dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__/* .login_r */ .oL)(user));
                dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__/* .isAuthenticated_r */ .c8)(true));
                antd__WEBPACK_IMPORTED_MODULE_5__.message.success("Login Successfully");
                seTopenModalLogin(false);
                seTopenModalSignup(false);
                (0,cookies_next__WEBPACK_IMPORTED_MODULE_14__.setCookies)("isuser", true);
            } else {
                antd__WEBPACK_IMPORTED_MODULE_5__.message.error("Login not Successfully");
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isAuthenticated1) {
            seTstateisAuthenticated(isAuthenticated1);
        }
    }, [
        isAuthenticated1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " text-base text-right px-0 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "images/logo.png",
                        alt: "Logo",
                        className: "img-top"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex-auto w-3/12 mr-3 md:w-auto md:mr-0 mt-6 px-0 sm:px-12"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-1 flex-auto w/-12 md:w-auto md:mr-0 px-0 sm:px-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "header-height",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoriesMenu, {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-base text-right px-0 mt-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__.Select, {
                    style: {
                        height: 32,
                        fontSize: 13
                    },
                    placeholder: "INR",
                    filterOption: (input, option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                            value: "jack",
                            children: "INR"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                            value: "lucy",
                            children: "USD"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Option, {
                            value: "tom",
                            children: "GBP"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " mt-5 site-nav text-base text-right px-0 ",
                children: [
                    stateisAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "p-2 float-left cursor-pointer hover:text-brand-color",
                            onClick: async ()=>{
                                await _util_services_authservice__WEBPACK_IMPORTED_MODULE_2__/* ["default"].logout */ .Z.logout();
                                await dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_4__/* .logout_r */ .j8)());
                                seTstateisAuthenticated(false);
                                (0,cookies_next__WEBPACK_IMPORTED_MODULE_14__.removeCookies)("isuser");
                                next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/");
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.LogoutOutlined, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden md:inline ",
                                    children: " Logout "
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "p-2 float-left cursor-pointer hover:text-brand-color",
                                onClick: ()=>seTopenModalLogin(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "site-nav__icons",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        role: "presentation",
                                        class: "icon header-icon",
                                        viewBox: "0 0 64 64",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            className: "svg-path",
                                            d: "M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "p-2 float-left cursor-pointer hover:text-brand-color",
                                onClick: ()=>seTopenModalSignup(true)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "site-nav__icons",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        role: "presentation",
                                        class: "icon header-icon",
                                        viewBox: "0 0 64 64",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            className: "svg-path",
                                            d: "M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                        href: "/basket",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "p-2 float-left relative",
                            children: [
                                basket.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " float-left w-0 h-full pt-0.5 pl-0.5 -mr-0.5",
                                    children: basket[0].products.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " rounded-full absolute w-1 h-1 right-2 -top-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                                                size: "small",
                                                count: basket[0].products.length
                                            })
                                        })
                                    }) : ""
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "site-nav__icons",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        role: "presentation",
                                        class: "icon header-icon",
                                        viewBox: "0 0 64 64",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                            fill: "none",
                                            stroke: "#000",
                                            "stroke-width": "4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M14.74 18h36.51l3.59 36.73h-43.7z"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                title: "Login",
                visible: openModalLogin,
                onOk: ()=>seTconfirmLoadingLogin(true)
                ,
                confirmLoading: confirmLoadingLogin,
                onCancel: ()=>seTopenModalLogin(false)
                ,
                footer: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onSubmitLogin: onSubmitLogin,
                    handleCancelLogin: ()=>seTopenModalLogin(false)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_5__.Modal, {
                title: "Signup",
                visible: openModalSignup,
                onOk: ()=>seTconfirmLoadingSignup(true)
                ,
                confirmLoading: confirmLoadingSignup,
                onCancel: ()=>seTopenModalSignup(false)
                ,
                footer: null,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RegisterForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    onSubmitSignup: onSubmitSignup
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ })

};
;